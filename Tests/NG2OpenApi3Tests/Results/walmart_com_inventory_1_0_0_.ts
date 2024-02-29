import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Quantity of an item that is available to be allocated to orders */
	export interface AvailToSellQty {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}

	/** Quantity of an item that is available to be allocated to orders */
	export interface AvailToSellQtyFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateAvailToSellQtyFormGroup() {
		return new FormGroup<AvailToSellQtyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AvailToSellQtyUnit { EACH = 'EACH' }

	export interface Cause {
		code?: string | null;
		description?: string | null;
		field?: string | null;
		type?: string | null;
	}
	export interface CauseFormProperties {
		code: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		field: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateCauseFormGroup() {
		return new FormGroup<CauseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Elements {
		ElementsInventories?: Array<ElementsInventories>;
	}
	export interface ElementsFormProperties {
	}
	export function CreateElementsFormGroup() {
		return new FormGroup<ElementsFormProperties>({
		});

	}

	export interface ElementsInventories {
		ElementsInventoriesNodes?: Array<ElementsInventoriesNodes>;

		/** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
		sku?: string | null;
	}
	export interface ElementsInventoriesFormProperties {

		/** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
		sku: FormControl<string | null | undefined>,
	}
	export function CreateElementsInventoriesFormGroup() {
		return new FormGroup<ElementsInventoriesFormProperties>({
			sku: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ElementsInventoriesNodes {

		/** Quantity of an item that is available to be allocated to orders */
		availToSellQty?: ElementsInventoriesNodesAvailToSellQty;

		/** Quantity of an item that is input by the seller */
		inputQty?: ElementsInventoriesNodesInputQty;

		/** Quantity that has been ordered by the customers but not yet shipped */
		reservedQty?: ElementsInventoriesNodesReservedQty;

		/** ShipNode Id of the ship node for which the inventory is requested */
		shipNode?: string | null;
	}
	export interface ElementsInventoriesNodesFormProperties {

		/** ShipNode Id of the ship node for which the inventory is requested */
		shipNode: FormControl<string | null | undefined>,
	}
	export function CreateElementsInventoriesNodesFormGroup() {
		return new FormGroup<ElementsInventoriesNodesFormProperties>({
			shipNode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ElementsInventoriesNodesAvailToSellQty {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}
	export interface ElementsInventoriesNodesAvailToSellQtyFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateElementsInventoriesNodesAvailToSellQtyFormGroup() {
		return new FormGroup<ElementsInventoriesNodesAvailToSellQtyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ElementsInventoriesNodesInputQty {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}
	export interface ElementsInventoriesNodesInputQtyFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateElementsInventoriesNodesInputQtyFormGroup() {
		return new FormGroup<ElementsInventoriesNodesInputQtyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ElementsInventoriesNodesReservedQty {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}
	export interface ElementsInventoriesNodesReservedQtyFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateElementsInventoriesNodesReservedQtyFormGroup() {
		return new FormGroup<ElementsInventoriesNodesReservedQtyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Error {
		category?: ErrorCategory | null;
		ErrorCauses?: Array<ErrorCauses>;

		/** Required */
		code: string;
		description?: string | null;
		errorIdentifiers?: {[id: string]: any };
		field?: string | null;
		info?: string | null;
		severity?: ErrorSeverity | null;
	}
	export interface ErrorFormProperties {
		category: FormControl<ErrorCategory | null | undefined>,

		/** Required */
		code: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		errorIdentifiers: FormControl<{[id: string]: any } | null | undefined>,
		field: FormControl<string | null | undefined>,
		info: FormControl<string | null | undefined>,
		severity: FormControl<ErrorSeverity | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			category: new FormControl<ErrorCategory | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			errorIdentifiers: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			info: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<ErrorSeverity | null | undefined>(undefined),
		});

	}

	export enum ErrorCategory { APPLICATION = 'APPLICATION', SYSTEM = 'SYSTEM', REQUEST = 'REQUEST', DATA = 'DATA' }

	export interface ErrorCauses {
		code?: string | null;
		description?: string | null;
		field?: string | null;
		type?: string | null;
	}
	export interface ErrorCausesFormProperties {
		code: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		field: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateErrorCausesFormGroup() {
		return new FormGroup<ErrorCausesFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ErrorSeverity { INFO = 'INFO', WARN = 'WARN', ERROR = 'ERROR' }

	export interface FeedId {
		additionalAttributes?: string | null;
		errors?: string | null;

		/** A unique ID, returned from the Bulk Upload API, used for tracking the feed file */
		feedId?: string | null;
	}
	export interface FeedIdFormProperties {
		additionalAttributes: FormControl<string | null | undefined>,
		errors: FormControl<string | null | undefined>,

		/** A unique ID, returned from the Bulk Upload API, used for tracking the feed file */
		feedId: FormControl<string | null | undefined>,
	}
	export function CreateFeedIdFormGroup() {
		return new FormGroup<FeedIdFormProperties>({
			additionalAttributes: new FormControl<string | null | undefined>(undefined),
			errors: new FormControl<string | null | undefined>(undefined),
			feedId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAllInventoriesDTO {
		GetAllInventoriesDTONodes?: Array<GetAllInventoriesDTONodes>;

		/** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
		sku?: string | null;
	}
	export interface GetAllInventoriesDTOFormProperties {

		/** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
		sku: FormControl<string | null | undefined>,
	}
	export function CreateGetAllInventoriesDTOFormGroup() {
		return new FormGroup<GetAllInventoriesDTOFormProperties>({
			sku: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAllInventoriesDTONodes {

		/** Quantity of an item that is available to be allocated to orders */
		availToSellQty?: GetAllInventoriesDTONodesAvailToSellQty;

		/** Quantity of an item that is input by the seller */
		inputQty?: GetAllInventoriesDTONodesInputQty;

		/** Quantity that has been ordered by the customers but not yet shipped */
		reservedQty?: GetAllInventoriesDTONodesReservedQty;

		/** ShipNode Id of the ship node for which the inventory is requested */
		shipNode?: string | null;
	}
	export interface GetAllInventoriesDTONodesFormProperties {

		/** ShipNode Id of the ship node for which the inventory is requested */
		shipNode: FormControl<string | null | undefined>,
	}
	export function CreateGetAllInventoriesDTONodesFormGroup() {
		return new FormGroup<GetAllInventoriesDTONodesFormProperties>({
			shipNode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAllInventoriesDTONodesAvailToSellQty {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}
	export interface GetAllInventoriesDTONodesAvailToSellQtyFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateGetAllInventoriesDTONodesAvailToSellQtyFormGroup() {
		return new FormGroup<GetAllInventoriesDTONodesAvailToSellQtyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetAllInventoriesDTONodesInputQty {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}
	export interface GetAllInventoriesDTONodesInputQtyFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateGetAllInventoriesDTONodesInputQtyFormGroup() {
		return new FormGroup<GetAllInventoriesDTONodesInputQtyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetAllInventoriesDTONodesReservedQty {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}
	export interface GetAllInventoriesDTONodesReservedQtyFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateGetAllInventoriesDTONodesReservedQtyFormGroup() {
		return new FormGroup<GetAllInventoriesDTONodesReservedQtyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetAllInventoriesNodeDTO {

		/** Quantity of an item that is available to be allocated to orders */
		availToSellQty?: GetAllInventoriesNodeDTOAvailToSellQty;

		/** Quantity of an item that is input by the seller */
		inputQty?: GetAllInventoriesNodeDTOInputQty;

		/** Quantity that has been ordered by the customers but not yet shipped */
		reservedQty?: GetAllInventoriesNodeDTOReservedQty;

		/** ShipNode Id of the ship node for which the inventory is requested */
		shipNode?: string | null;
	}
	export interface GetAllInventoriesNodeDTOFormProperties {

		/** ShipNode Id of the ship node for which the inventory is requested */
		shipNode: FormControl<string | null | undefined>,
	}
	export function CreateGetAllInventoriesNodeDTOFormGroup() {
		return new FormGroup<GetAllInventoriesNodeDTOFormProperties>({
			shipNode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAllInventoriesNodeDTOAvailToSellQty {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}
	export interface GetAllInventoriesNodeDTOAvailToSellQtyFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateGetAllInventoriesNodeDTOAvailToSellQtyFormGroup() {
		return new FormGroup<GetAllInventoriesNodeDTOAvailToSellQtyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetAllInventoriesNodeDTOInputQty {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}
	export interface GetAllInventoriesNodeDTOInputQtyFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateGetAllInventoriesNodeDTOInputQtyFormGroup() {
		return new FormGroup<GetAllInventoriesNodeDTOInputQtyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetAllInventoriesNodeDTOReservedQty {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}
	export interface GetAllInventoriesNodeDTOReservedQtyFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateGetAllInventoriesNodeDTOReservedQtyFormGroup() {
		return new FormGroup<GetAllInventoriesNodeDTOReservedQtyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Headers {

		/**
		 * Information about the quantity in inventory
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/**
		 * Offset is the number of records you wish to skip before selecting results.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/**
		 * Total number of results for query.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCount?: number | null;
	}
	export interface HeadersFormProperties {

		/**
		 * Information about the quantity in inventory
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/**
		 * Offset is the number of records you wish to skip before selecting results.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/**
		 * Total number of results for query.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateHeadersFormGroup() {
		return new FormGroup<HeadersFormProperties>({
			limit: new FormControl<number | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Quantity of an item that is input by the seller */
	export interface InputQty {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}

	/** Quantity of an item that is input by the seller */
	export interface InputQtyFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateInputQtyFormGroup() {
		return new FormGroup<InputQtyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InventoriesDTO {
		InventoriesDTONodes?: Array<InventoriesDTONodes>;

		/** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
		sku?: string | null;
	}
	export interface InventoriesDTOFormProperties {

		/** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
		sku: FormControl<string | null | undefined>,
	}
	export function CreateInventoriesDTOFormGroup() {
		return new FormGroup<InventoriesDTOFormProperties>({
			sku: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InventoriesDTONodes {

		/** Quantity of an item that is available to be allocated to orders */
		availToSellQty?: InventoriesDTONodesAvailToSellQty;
		InventoriesDTONodesErrors?: Array<InventoriesDTONodesErrors>;

		/** Quantity of an item that is input by the seller */
		inputQty?: InventoriesDTONodesInputQty;

		/** Quantity that has been ordered by the customers but not yet shipped */
		reservedQty?: InventoriesDTONodesReservedQty;

		/** ShipNode Id of the ship node for which the inventory is requested */
		shipNode?: string | null;
	}
	export interface InventoriesDTONodesFormProperties {

		/** ShipNode Id of the ship node for which the inventory is requested */
		shipNode: FormControl<string | null | undefined>,
	}
	export function CreateInventoriesDTONodesFormGroup() {
		return new FormGroup<InventoriesDTONodesFormProperties>({
			shipNode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InventoriesDTONodesAvailToSellQty {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}
	export interface InventoriesDTONodesAvailToSellQtyFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateInventoriesDTONodesAvailToSellQtyFormGroup() {
		return new FormGroup<InventoriesDTONodesAvailToSellQtyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InventoriesDTONodesErrors {
		category?: ErrorCategory | null;
		InventoriesDTONodesErrorsCauses?: Array<InventoriesDTONodesErrorsCauses>;

		/** Required */
		code: string;
		description?: string | null;
		errorIdentifiers?: {[id: string]: any };
		field?: string | null;
		info?: string | null;
		severity?: ErrorSeverity | null;
	}
	export interface InventoriesDTONodesErrorsFormProperties {
		category: FormControl<ErrorCategory | null | undefined>,

		/** Required */
		code: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		errorIdentifiers: FormControl<{[id: string]: any } | null | undefined>,
		field: FormControl<string | null | undefined>,
		info: FormControl<string | null | undefined>,
		severity: FormControl<ErrorSeverity | null | undefined>,
	}
	export function CreateInventoriesDTONodesErrorsFormGroup() {
		return new FormGroup<InventoriesDTONodesErrorsFormProperties>({
			category: new FormControl<ErrorCategory | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			errorIdentifiers: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			info: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<ErrorSeverity | null | undefined>(undefined),
		});

	}

	export interface InventoriesDTONodesErrorsCauses {
		code?: string | null;
		description?: string | null;
		field?: string | null;
		type?: string | null;
	}
	export interface InventoriesDTONodesErrorsCausesFormProperties {
		code: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		field: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateInventoriesDTONodesErrorsCausesFormGroup() {
		return new FormGroup<InventoriesDTONodesErrorsCausesFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InventoriesDTONodesInputQty {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}
	export interface InventoriesDTONodesInputQtyFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateInventoriesDTONodesInputQtyFormGroup() {
		return new FormGroup<InventoriesDTONodesInputQtyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InventoriesDTONodesReservedQty {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}
	export interface InventoriesDTONodesReservedQtyFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateInventoriesDTONodesReservedQtyFormGroup() {
		return new FormGroup<InventoriesDTONodesReservedQtyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Inventory {

		/**
		 * Quantity that has been ordered by the customers but not yet shipped
		 * Required
		 */
		quantity: InventoryQuantity;

		/**
		 * A seller-provided Product ID. Response will have decoded value.
		 * Required
		 */
		sku: string;
	}
	export interface InventoryFormProperties {

		/**
		 * A seller-provided Product ID. Response will have decoded value.
		 * Required
		 */
		sku: FormControl<string | null | undefined>,
	}
	export function CreateInventoryFormGroup() {
		return new FormGroup<InventoryFormProperties>({
			sku: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InventoryQuantity {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}
	export interface InventoryQuantityFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateInventoryQuantityFormGroup() {
		return new FormGroup<InventoryQuantityFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InventoryWFS {
		InventoryWFSShipNodes?: Array<InventoryWFSShipNodes>;

		/** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
		sku?: string | null;
	}
	export interface InventoryWFSFormProperties {

		/** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
		sku: FormControl<string | null | undefined>,
	}
	export function CreateInventoryWFSFormGroup() {
		return new FormGroup<InventoryWFSFormProperties>({
			sku: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InventoryWFSShipNodes {

		/**
		 * The available quantity is the quantity of an item that is available to be allocated to orders.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		availToSellQty?: number | null;

		/** Last changes date for the item. */
		modifiedDate?: string | null;

		/**
		 * The on-hand balance is the quantity of active inventory stored at the warehouse.Active inventory is defined as the usable amount of an item that is in the warehouse.Inventory is active if it is not damaged, expired or being inspected.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		onHandQty?: number | null;

		/** Identifies fulfillment aspect of invetory. Walmart, seller or 3PL fulfilled. Possible value is 'WFSFulfilled'. In later phase we will also add seller fulfilled inventory. */
		shipNodeType?: string | null;
	}
	export interface InventoryWFSShipNodesFormProperties {

		/**
		 * The available quantity is the quantity of an item that is available to be allocated to orders.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		availToSellQty: FormControl<number | null | undefined>,

		/** Last changes date for the item. */
		modifiedDate: FormControl<string | null | undefined>,

		/**
		 * The on-hand balance is the quantity of active inventory stored at the warehouse.Active inventory is defined as the usable amount of an item that is in the warehouse.Inventory is active if it is not damaged, expired or being inspected.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		onHandQty: FormControl<number | null | undefined>,

		/** Identifies fulfillment aspect of invetory. Walmart, seller or 3PL fulfilled. Possible value is 'WFSFulfilled'. In later phase we will also add seller fulfilled inventory. */
		shipNodeType: FormControl<string | null | undefined>,
	}
	export function CreateInventoryWFSShipNodesFormGroup() {
		return new FormGroup<InventoryWFSShipNodesFormProperties>({
			availToSellQty: new FormControl<number | null | undefined>(undefined),
			modifiedDate: new FormControl<string | null | undefined>(undefined),
			onHandQty: new FormControl<number | null | undefined>(undefined),
			shipNodeType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Meta {

		/** Used for pagination to fetch the next set of items. */
		nextCursor?: string | null;

		/**
		 * Total number of Skus of the Seller. Example: '235'
		 * Type: double
		 */
		totalCount?: number | null;
	}
	export interface MetaFormProperties {

		/** Used for pagination to fetch the next set of items. */
		nextCursor: FormControl<string | null | undefined>,

		/**
		 * Total number of Skus of the Seller. Example: '235'
		 * Type: double
		 */
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateMetaFormGroup() {
		return new FormGroup<MetaFormProperties>({
			nextCursor: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MultiNodeInventoryFetchResponseDTO {
		elements?: MultiNodeInventoryFetchResponseDTOElements;
		meta?: MultiNodeInventoryFetchResponseDTOMeta;
	}
	export interface MultiNodeInventoryFetchResponseDTOFormProperties {
	}
	export function CreateMultiNodeInventoryFetchResponseDTOFormGroup() {
		return new FormGroup<MultiNodeInventoryFetchResponseDTOFormProperties>({
		});

	}

	export interface MultiNodeInventoryFetchResponseDTOElements {
		MultiNodeInventoryFetchResponseDTOElementsInventories?: Array<MultiNodeInventoryFetchResponseDTOElementsInventories>;
	}
	export interface MultiNodeInventoryFetchResponseDTOElementsFormProperties {
	}
	export function CreateMultiNodeInventoryFetchResponseDTOElementsFormGroup() {
		return new FormGroup<MultiNodeInventoryFetchResponseDTOElementsFormProperties>({
		});

	}

	export interface MultiNodeInventoryFetchResponseDTOElementsInventories {
		MultiNodeInventoryFetchResponseDTOElementsInventoriesNodes?: Array<MultiNodeInventoryFetchResponseDTOElementsInventoriesNodes>;

		/** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
		sku?: string | null;
	}
	export interface MultiNodeInventoryFetchResponseDTOElementsInventoriesFormProperties {

		/** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
		sku: FormControl<string | null | undefined>,
	}
	export function CreateMultiNodeInventoryFetchResponseDTOElementsInventoriesFormGroup() {
		return new FormGroup<MultiNodeInventoryFetchResponseDTOElementsInventoriesFormProperties>({
			sku: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MultiNodeInventoryFetchResponseDTOElementsInventoriesNodes {

		/** Quantity of an item that is available to be allocated to orders */
		availToSellQty?: MultiNodeInventoryFetchResponseDTOElementsInventoriesNodesAvailToSellQty;

		/** Quantity of an item that is input by the seller */
		inputQty?: MultiNodeInventoryFetchResponseDTOElementsInventoriesNodesInputQty;

		/** Quantity that has been ordered by the customers but not yet shipped */
		reservedQty?: MultiNodeInventoryFetchResponseDTOElementsInventoriesNodesReservedQty;

		/** ShipNode Id of the ship node for which the inventory is requested */
		shipNode?: string | null;
	}
	export interface MultiNodeInventoryFetchResponseDTOElementsInventoriesNodesFormProperties {

		/** ShipNode Id of the ship node for which the inventory is requested */
		shipNode: FormControl<string | null | undefined>,
	}
	export function CreateMultiNodeInventoryFetchResponseDTOElementsInventoriesNodesFormGroup() {
		return new FormGroup<MultiNodeInventoryFetchResponseDTOElementsInventoriesNodesFormProperties>({
			shipNode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MultiNodeInventoryFetchResponseDTOElementsInventoriesNodesAvailToSellQty {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}
	export interface MultiNodeInventoryFetchResponseDTOElementsInventoriesNodesAvailToSellQtyFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateMultiNodeInventoryFetchResponseDTOElementsInventoriesNodesAvailToSellQtyFormGroup() {
		return new FormGroup<MultiNodeInventoryFetchResponseDTOElementsInventoriesNodesAvailToSellQtyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MultiNodeInventoryFetchResponseDTOElementsInventoriesNodesInputQty {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}
	export interface MultiNodeInventoryFetchResponseDTOElementsInventoriesNodesInputQtyFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateMultiNodeInventoryFetchResponseDTOElementsInventoriesNodesInputQtyFormGroup() {
		return new FormGroup<MultiNodeInventoryFetchResponseDTOElementsInventoriesNodesInputQtyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MultiNodeInventoryFetchResponseDTOElementsInventoriesNodesReservedQty {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}
	export interface MultiNodeInventoryFetchResponseDTOElementsInventoriesNodesReservedQtyFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateMultiNodeInventoryFetchResponseDTOElementsInventoriesNodesReservedQtyFormGroup() {
		return new FormGroup<MultiNodeInventoryFetchResponseDTOElementsInventoriesNodesReservedQtyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MultiNodeInventoryFetchResponseDTOMeta {

		/** Used for pagination to fetch the next set of items. */
		nextCursor?: string | null;

		/**
		 * Total number of Skus of the Seller. Example: '235'
		 * Type: double
		 */
		totalCount?: number | null;
	}
	export interface MultiNodeInventoryFetchResponseDTOMetaFormProperties {

		/** Used for pagination to fetch the next set of items. */
		nextCursor: FormControl<string | null | undefined>,

		/**
		 * Total number of Skus of the Seller. Example: '235'
		 * Type: double
		 */
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateMultiNodeInventoryFetchResponseDTOMetaFormGroup() {
		return new FormGroup<MultiNodeInventoryFetchResponseDTOMetaFormProperties>({
			nextCursor: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MultiNodeInventoryUpdateRequestDTO {

		/** Required */
		inventories: MultiNodeInventoryUpdateRequestDTOInventories;
	}
	export interface MultiNodeInventoryUpdateRequestDTOFormProperties {
	}
	export function CreateMultiNodeInventoryUpdateRequestDTOFormGroup() {
		return new FormGroup<MultiNodeInventoryUpdateRequestDTOFormProperties>({
		});

	}

	export interface MultiNodeInventoryUpdateRequestDTOInventories {

		/** Required */
		MultiNodeInventoryUpdateRequestDTOInventoriesNodes: Array<MultiNodeInventoryUpdateRequestDTOInventoriesNodes>;
	}
	export interface MultiNodeInventoryUpdateRequestDTOInventoriesFormProperties {
	}
	export function CreateMultiNodeInventoryUpdateRequestDTOInventoriesFormGroup() {
		return new FormGroup<MultiNodeInventoryUpdateRequestDTOInventoriesFormProperties>({
		});

	}

	export interface MultiNodeInventoryUpdateRequestDTOInventoriesNodes {

		/**
		 * Quantity that has been ordered by the customers but not yet shipped
		 * Required
		 */
		inputQty: MultiNodeInventoryUpdateRequestDTOInventoriesNodesInputQty;

		/**
		 * ShipNode Id of the ship node for which the inventory is requested
		 * Required
		 */
		shipNode: string;
	}
	export interface MultiNodeInventoryUpdateRequestDTOInventoriesNodesFormProperties {

		/**
		 * ShipNode Id of the ship node for which the inventory is requested
		 * Required
		 */
		shipNode: FormControl<string | null | undefined>,
	}
	export function CreateMultiNodeInventoryUpdateRequestDTOInventoriesNodesFormGroup() {
		return new FormGroup<MultiNodeInventoryUpdateRequestDTOInventoriesNodesFormProperties>({
			shipNode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MultiNodeInventoryUpdateRequestDTOInventoriesNodesInputQty {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}
	export interface MultiNodeInventoryUpdateRequestDTOInventoriesNodesInputQtyFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateMultiNodeInventoryUpdateRequestDTOInventoriesNodesInputQtyFormGroup() {
		return new FormGroup<MultiNodeInventoryUpdateRequestDTOInventoriesNodesInputQtyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MultiNodeInventoryUpdateResponseDTO {
		MultiNodeInventoryUpdateResponseDTONodes?: Array<MultiNodeInventoryUpdateResponseDTONodes>;

		/** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
		sku?: string | null;
	}
	export interface MultiNodeInventoryUpdateResponseDTOFormProperties {

		/** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
		sku: FormControl<string | null | undefined>,
	}
	export function CreateMultiNodeInventoryUpdateResponseDTOFormGroup() {
		return new FormGroup<MultiNodeInventoryUpdateResponseDTOFormProperties>({
			sku: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MultiNodeInventoryUpdateResponseDTONodes {

		/** Node Update Error description. */
		MultiNodeInventoryUpdateResponseDTONodesErrors?: Array<MultiNodeInventoryUpdateResponseDTONodesErrors>;

		/** ShipNode Id of the ship node for which the inventory is requested */
		shipNode?: string | null;

		/** Node Update status. Example: 'Success' */
		status?: string | null;
	}
	export interface MultiNodeInventoryUpdateResponseDTONodesFormProperties {

		/** ShipNode Id of the ship node for which the inventory is requested */
		shipNode: FormControl<string | null | undefined>,

		/** Node Update status. Example: 'Success' */
		status: FormControl<string | null | undefined>,
	}
	export function CreateMultiNodeInventoryUpdateResponseDTONodesFormGroup() {
		return new FormGroup<MultiNodeInventoryUpdateResponseDTONodesFormProperties>({
			shipNode: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MultiNodeInventoryUpdateResponseDTONodesErrors {
		category?: ErrorCategory | null;
		MultiNodeInventoryUpdateResponseDTONodesErrorsCauses?: Array<MultiNodeInventoryUpdateResponseDTONodesErrorsCauses>;

		/** Required */
		code: string;
		description?: string | null;
		errorIdentifiers?: {[id: string]: any };
		field?: string | null;
		info?: string | null;
		severity?: ErrorSeverity | null;
	}
	export interface MultiNodeInventoryUpdateResponseDTONodesErrorsFormProperties {
		category: FormControl<ErrorCategory | null | undefined>,

		/** Required */
		code: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		errorIdentifiers: FormControl<{[id: string]: any } | null | undefined>,
		field: FormControl<string | null | undefined>,
		info: FormControl<string | null | undefined>,
		severity: FormControl<ErrorSeverity | null | undefined>,
	}
	export function CreateMultiNodeInventoryUpdateResponseDTONodesErrorsFormGroup() {
		return new FormGroup<MultiNodeInventoryUpdateResponseDTONodesErrorsFormProperties>({
			category: new FormControl<ErrorCategory | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			errorIdentifiers: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			info: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<ErrorSeverity | null | undefined>(undefined),
		});

	}

	export interface MultiNodeInventoryUpdateResponseDTONodesErrorsCauses {
		code?: string | null;
		description?: string | null;
		field?: string | null;
		type?: string | null;
	}
	export interface MultiNodeInventoryUpdateResponseDTONodesErrorsCausesFormProperties {
		code: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		field: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateMultiNodeInventoryUpdateResponseDTONodesErrorsCausesFormGroup() {
		return new FormGroup<MultiNodeInventoryUpdateResponseDTONodesErrorsCausesFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NodeDTO {

		/** Quantity of an item that is available to be allocated to orders */
		availToSellQty?: NodeDTOAvailToSellQty;
		NodeDTOErrors?: Array<NodeDTOErrors>;

		/** Quantity of an item that is input by the seller */
		inputQty?: NodeDTOInputQty;

		/** Quantity that has been ordered by the customers but not yet shipped */
		reservedQty?: NodeDTOReservedQty;

		/** ShipNode Id of the ship node for which the inventory is requested */
		shipNode?: string | null;
	}
	export interface NodeDTOFormProperties {

		/** ShipNode Id of the ship node for which the inventory is requested */
		shipNode: FormControl<string | null | undefined>,
	}
	export function CreateNodeDTOFormGroup() {
		return new FormGroup<NodeDTOFormProperties>({
			shipNode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NodeDTOAvailToSellQty {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}
	export interface NodeDTOAvailToSellQtyFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateNodeDTOAvailToSellQtyFormGroup() {
		return new FormGroup<NodeDTOAvailToSellQtyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NodeDTOErrors {
		category?: ErrorCategory | null;
		NodeDTOErrorsCauses?: Array<NodeDTOErrorsCauses>;

		/** Required */
		code: string;
		description?: string | null;
		errorIdentifiers?: {[id: string]: any };
		field?: string | null;
		info?: string | null;
		severity?: ErrorSeverity | null;
	}
	export interface NodeDTOErrorsFormProperties {
		category: FormControl<ErrorCategory | null | undefined>,

		/** Required */
		code: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		errorIdentifiers: FormControl<{[id: string]: any } | null | undefined>,
		field: FormControl<string | null | undefined>,
		info: FormControl<string | null | undefined>,
		severity: FormControl<ErrorSeverity | null | undefined>,
	}
	export function CreateNodeDTOErrorsFormGroup() {
		return new FormGroup<NodeDTOErrorsFormProperties>({
			category: new FormControl<ErrorCategory | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			errorIdentifiers: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			info: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<ErrorSeverity | null | undefined>(undefined),
		});

	}

	export interface NodeDTOErrorsCauses {
		code?: string | null;
		description?: string | null;
		field?: string | null;
		type?: string | null;
	}
	export interface NodeDTOErrorsCausesFormProperties {
		code: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		field: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateNodeDTOErrorsCausesFormGroup() {
		return new FormGroup<NodeDTOErrorsCausesFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NodeDTOInputQty {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}
	export interface NodeDTOInputQtyFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateNodeDTOInputQtyFormGroup() {
		return new FormGroup<NodeDTOInputQtyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NodeDTOReservedQty {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}
	export interface NodeDTOReservedQtyFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateNodeDTOReservedQtyFormGroup() {
		return new FormGroup<NodeDTOReservedQtyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Payload {
		PayloadInventory?: Array<PayloadInventory>;
	}
	export interface PayloadFormProperties {
	}
	export function CreatePayloadFormGroup() {
		return new FormGroup<PayloadFormProperties>({
		});

	}

	export interface PayloadInventory {
		PayloadInventoryShipNodes?: Array<PayloadInventoryShipNodes>;

		/** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
		sku?: string | null;
	}
	export interface PayloadInventoryFormProperties {

		/** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
		sku: FormControl<string | null | undefined>,
	}
	export function CreatePayloadInventoryFormGroup() {
		return new FormGroup<PayloadInventoryFormProperties>({
			sku: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PayloadInventoryShipNodes {

		/**
		 * The available quantity is the quantity of an item that is available to be allocated to orders.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		availToSellQty?: number | null;

		/** Last changes date for the item. */
		modifiedDate?: string | null;

		/**
		 * The on-hand balance is the quantity of active inventory stored at the warehouse.Active inventory is defined as the usable amount of an item that is in the warehouse.Inventory is active if it is not damaged, expired or being inspected.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		onHandQty?: number | null;

		/** Identifies fulfillment aspect of invetory. Walmart, seller or 3PL fulfilled. Possible value is 'WFSFulfilled'. In later phase we will also add seller fulfilled inventory. */
		shipNodeType?: string | null;
	}
	export interface PayloadInventoryShipNodesFormProperties {

		/**
		 * The available quantity is the quantity of an item that is available to be allocated to orders.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		availToSellQty: FormControl<number | null | undefined>,

		/** Last changes date for the item. */
		modifiedDate: FormControl<string | null | undefined>,

		/**
		 * The on-hand balance is the quantity of active inventory stored at the warehouse.Active inventory is defined as the usable amount of an item that is in the warehouse.Inventory is active if it is not damaged, expired or being inspected.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		onHandQty: FormControl<number | null | undefined>,

		/** Identifies fulfillment aspect of invetory. Walmart, seller or 3PL fulfilled. Possible value is 'WFSFulfilled'. In later phase we will also add seller fulfilled inventory. */
		shipNodeType: FormControl<string | null | undefined>,
	}
	export function CreatePayloadInventoryShipNodesFormGroup() {
		return new FormGroup<PayloadInventoryShipNodesFormProperties>({
			availToSellQty: new FormControl<number | null | undefined>(undefined),
			modifiedDate: new FormControl<string | null | undefined>(undefined),
			onHandQty: new FormControl<number | null | undefined>(undefined),
			shipNodeType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Quantity that has been ordered by the customers but not yet shipped */
	export interface ReservedQty {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}

	/** Quantity that has been ordered by the customers but not yet shipped */
	export interface ReservedQtyFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateReservedQtyFormGroup() {
		return new FormGroup<ReservedQtyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ShipNodes {

		/**
		 * The available quantity is the quantity of an item that is available to be allocated to orders.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		availToSellQty?: number | null;

		/** Last changes date for the item. */
		modifiedDate?: string | null;

		/**
		 * The on-hand balance is the quantity of active inventory stored at the warehouse.Active inventory is defined as the usable amount of an item that is in the warehouse.Inventory is active if it is not damaged, expired or being inspected.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		onHandQty?: number | null;

		/** Identifies fulfillment aspect of invetory. Walmart, seller or 3PL fulfilled. Possible value is 'WFSFulfilled'. In later phase we will also add seller fulfilled inventory. */
		shipNodeType?: string | null;
	}
	export interface ShipNodesFormProperties {

		/**
		 * The available quantity is the quantity of an item that is available to be allocated to orders.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		availToSellQty: FormControl<number | null | undefined>,

		/** Last changes date for the item. */
		modifiedDate: FormControl<string | null | undefined>,

		/**
		 * The on-hand balance is the quantity of active inventory stored at the warehouse.Active inventory is defined as the usable amount of an item that is in the warehouse.Inventory is active if it is not damaged, expired or being inspected.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		onHandQty: FormControl<number | null | undefined>,

		/** Identifies fulfillment aspect of invetory. Walmart, seller or 3PL fulfilled. Possible value is 'WFSFulfilled'. In later phase we will also add seller fulfilled inventory. */
		shipNodeType: FormControl<string | null | undefined>,
	}
	export function CreateShipNodesFormGroup() {
		return new FormGroup<ShipNodesFormProperties>({
			availToSellQty: new FormControl<number | null | undefined>(undefined),
			modifiedDate: new FormControl<string | null | undefined>(undefined),
			onHandQty: new FormControl<number | null | undefined>(undefined),
			shipNodeType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Quantity that has been ordered by the customers but not yet shipped */
	export interface SupplyQuantity {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}

	/** Quantity that has been ordered by the customers but not yet shipped */
	export interface SupplyQuantityFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateSupplyQuantityFormGroup() {
		return new FormGroup<SupplyQuantityFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateInventoriesRequestDTO {

		/** Required */
		UpdateInventoriesRequestDTONodes: Array<UpdateInventoriesRequestDTONodes>;
	}
	export interface UpdateInventoriesRequestDTOFormProperties {
	}
	export function CreateUpdateInventoriesRequestDTOFormGroup() {
		return new FormGroup<UpdateInventoriesRequestDTOFormProperties>({
		});

	}

	export interface UpdateInventoriesRequestDTONodes {

		/**
		 * Quantity that has been ordered by the customers but not yet shipped
		 * Required
		 */
		inputQty: UpdateInventoriesRequestDTONodesInputQty;

		/**
		 * ShipNode Id of the ship node for which the inventory is requested
		 * Required
		 */
		shipNode: string;
	}
	export interface UpdateInventoriesRequestDTONodesFormProperties {

		/**
		 * ShipNode Id of the ship node for which the inventory is requested
		 * Required
		 */
		shipNode: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInventoriesRequestDTONodesFormGroup() {
		return new FormGroup<UpdateInventoriesRequestDTONodesFormProperties>({
			shipNode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateInventoriesRequestDTONodesInputQty {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}
	export interface UpdateInventoriesRequestDTONodesInputQtyFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateUpdateInventoriesRequestDTONodesInputQtyFormGroup() {
		return new FormGroup<UpdateInventoriesRequestDTONodesInputQtyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateInventoriesRequestNodeDTO {

		/**
		 * Quantity that has been ordered by the customers but not yet shipped
		 * Required
		 */
		inputQty: UpdateInventoriesRequestNodeDTOInputQty;

		/**
		 * ShipNode Id of the ship node for which the inventory is requested
		 * Required
		 */
		shipNode: string;
	}
	export interface UpdateInventoriesRequestNodeDTOFormProperties {

		/**
		 * ShipNode Id of the ship node for which the inventory is requested
		 * Required
		 */
		shipNode: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInventoriesRequestNodeDTOFormGroup() {
		return new FormGroup<UpdateInventoriesRequestNodeDTOFormProperties>({
			shipNode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateInventoriesRequestNodeDTOInputQty {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}
	export interface UpdateInventoriesRequestNodeDTOInputQtyFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateUpdateInventoriesRequestNodeDTOInputQtyFormGroup() {
		return new FormGroup<UpdateInventoriesRequestNodeDTOInputQtyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateInventoriesResponseNodeDTO {

		/** Node Update Error description. */
		UpdateInventoriesResponseNodeDTOErrors?: Array<UpdateInventoriesResponseNodeDTOErrors>;

		/** ShipNode Id of the ship node for which the inventory is requested */
		shipNode?: string | null;

		/** Node Update status. Example: 'Success' */
		status?: string | null;
	}
	export interface UpdateInventoriesResponseNodeDTOFormProperties {

		/** ShipNode Id of the ship node for which the inventory is requested */
		shipNode: FormControl<string | null | undefined>,

		/** Node Update status. Example: 'Success' */
		status: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInventoriesResponseNodeDTOFormGroup() {
		return new FormGroup<UpdateInventoriesResponseNodeDTOFormProperties>({
			shipNode: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateInventoriesResponseNodeDTOErrors {
		category?: ErrorCategory | null;
		UpdateInventoriesResponseNodeDTOErrorsCauses?: Array<UpdateInventoriesResponseNodeDTOErrorsCauses>;

		/** Required */
		code: string;
		description?: string | null;
		errorIdentifiers?: {[id: string]: any };
		field?: string | null;
		info?: string | null;
		severity?: ErrorSeverity | null;
	}
	export interface UpdateInventoriesResponseNodeDTOErrorsFormProperties {
		category: FormControl<ErrorCategory | null | undefined>,

		/** Required */
		code: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		errorIdentifiers: FormControl<{[id: string]: any } | null | undefined>,
		field: FormControl<string | null | undefined>,
		info: FormControl<string | null | undefined>,
		severity: FormControl<ErrorSeverity | null | undefined>,
	}
	export function CreateUpdateInventoriesResponseNodeDTOErrorsFormGroup() {
		return new FormGroup<UpdateInventoriesResponseNodeDTOErrorsFormProperties>({
			category: new FormControl<ErrorCategory | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			errorIdentifiers: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			info: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<ErrorSeverity | null | undefined>(undefined),
		});

	}

	export interface UpdateInventoriesResponseNodeDTOErrorsCauses {
		code?: string | null;
		description?: string | null;
		field?: string | null;
		type?: string | null;
	}
	export interface UpdateInventoriesResponseNodeDTOErrorsCausesFormProperties {
		code: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		field: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInventoriesResponseNodeDTOErrorsCausesFormGroup() {
		return new FormGroup<UpdateInventoriesResponseNodeDTOErrorsCausesFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WfsInventoryDTO {
		headers?: WfsInventoryDTOHeaders;
		payload?: WfsInventoryDTOPayload;
	}
	export interface WfsInventoryDTOFormProperties {
	}
	export function CreateWfsInventoryDTOFormGroup() {
		return new FormGroup<WfsInventoryDTOFormProperties>({
		});

	}

	export interface WfsInventoryDTOHeaders {

		/**
		 * Information about the quantity in inventory
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/**
		 * Offset is the number of records you wish to skip before selecting results.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/**
		 * Total number of results for query.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCount?: number | null;
	}
	export interface WfsInventoryDTOHeadersFormProperties {

		/**
		 * Information about the quantity in inventory
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/**
		 * Offset is the number of records you wish to skip before selecting results.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/**
		 * Total number of results for query.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateWfsInventoryDTOHeadersFormGroup() {
		return new FormGroup<WfsInventoryDTOHeadersFormProperties>({
			limit: new FormControl<number | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface WfsInventoryDTOPayload {
		WfsInventoryDTOPayloadInventory?: Array<WfsInventoryDTOPayloadInventory>;
	}
	export interface WfsInventoryDTOPayloadFormProperties {
	}
	export function CreateWfsInventoryDTOPayloadFormGroup() {
		return new FormGroup<WfsInventoryDTOPayloadFormProperties>({
		});

	}

	export interface WfsInventoryDTOPayloadInventory {
		WfsInventoryDTOPayloadInventoryShipNodes?: Array<WfsInventoryDTOPayloadInventoryShipNodes>;

		/** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
		sku?: string | null;
	}
	export interface WfsInventoryDTOPayloadInventoryFormProperties {

		/** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
		sku: FormControl<string | null | undefined>,
	}
	export function CreateWfsInventoryDTOPayloadInventoryFormGroup() {
		return new FormGroup<WfsInventoryDTOPayloadInventoryFormProperties>({
			sku: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WfsInventoryDTOPayloadInventoryShipNodes {

		/**
		 * The available quantity is the quantity of an item that is available to be allocated to orders.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		availToSellQty?: number | null;

		/** Last changes date for the item. */
		modifiedDate?: string | null;

		/**
		 * The on-hand balance is the quantity of active inventory stored at the warehouse.Active inventory is defined as the usable amount of an item that is in the warehouse.Inventory is active if it is not damaged, expired or being inspected.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		onHandQty?: number | null;

		/** Identifies fulfillment aspect of invetory. Walmart, seller or 3PL fulfilled. Possible value is 'WFSFulfilled'. In later phase we will also add seller fulfilled inventory. */
		shipNodeType?: string | null;
	}
	export interface WfsInventoryDTOPayloadInventoryShipNodesFormProperties {

		/**
		 * The available quantity is the quantity of an item that is available to be allocated to orders.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		availToSellQty: FormControl<number | null | undefined>,

		/** Last changes date for the item. */
		modifiedDate: FormControl<string | null | undefined>,

		/**
		 * The on-hand balance is the quantity of active inventory stored at the warehouse.Active inventory is defined as the usable amount of an item that is in the warehouse.Inventory is active if it is not damaged, expired or being inspected.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		onHandQty: FormControl<number | null | undefined>,

		/** Identifies fulfillment aspect of invetory. Walmart, seller or 3PL fulfilled. Possible value is 'WFSFulfilled'. In later phase we will also add seller fulfilled inventory. */
		shipNodeType: FormControl<string | null | undefined>,
	}
	export function CreateWfsInventoryDTOPayloadInventoryShipNodesFormGroup() {
		return new FormGroup<WfsInventoryDTOPayloadInventoryShipNodesFormProperties>({
			availToSellQty: new FormControl<number | null | undefined>(undefined),
			modifiedDate: new FormControl<string | null | undefined>(undefined),
			onHandQty: new FormControl<number | null | undefined>(undefined),
			shipNodeType: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * WFS Inventory
		 * You can use this API to get the current Available to Sell inventory quantities for all WFS items in your catalog. You can also query specific SKUs or filter to only items updated after a specific date in order to reduce the response size.
		 * Get v3/fulfillment/inventory
		 * @param {string} sku An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. This will be used by the seller in the XSD file to refer to each item. Special characters in the sku needing encoding are: ':', '/', '?', '#', '[', ']', '@', '!', '$', '&', "'", '(', ')', '*', '+', ',', ';', '=', ‘ ’ as well as '%' itself if it's a part of sku. Make sure to encode space with %20. Other characters don't need to be encoded.
		 * @param {string} fromModifiedDate last inventory modified date - starting range.
		 * @param {string} toModifiedDate last inventory modified date - starting range.
		 * @param {string} limit Number of Sku to be returned. Cannot be larger than 300.
		 * @param {string} offset Offset is the number of records you wish to skip before selecting records.
		 * @return {GetWFSInventoryReturn} Successful Operation
		 */
		GetWFSInventory(sku: string | null | undefined, fromModifiedDate: string | null | undefined, toModifiedDate: string | null | undefined, limit: string | null | undefined, offset: string | null | undefined): Observable<GetWFSInventoryReturn> {
			return this.http.get<GetWFSInventoryReturn>(this.baseUri + 'v3/fulfillment/inventory?sku=' + (sku == null ? '' : encodeURIComponent(sku)) + '&fromModifiedDate=' + (fromModifiedDate == null ? '' : encodeURIComponent(fromModifiedDate)) + '&toModifiedDate=' + (toModifiedDate == null ? '' : encodeURIComponent(toModifiedDate)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)), {});
		}

		/**
		 * Multiple Item Inventory for All Ship Nodes
		 * This API will retrieve the inventory count for all of a seller's items across all ship nodes by item to ship node mapping. Inventory can be zero or non-zero. Please note that NextCursor value changes and it needs to be passed on from the previous call to next call.
		 * Get v3/inventories
		 * @param {string} limit The number of items returned. Cannot be more than 50.
		 * @param {string} nextCursor String returned from initial API call to indicate pagination. Specify nextCursor value to retrieve the next 50 items.
		 * @return {GetMultiNodeInventoryForAllSkuAndAllShipNodesReturn} Successful Operation
		 */
		GetMultiNodeInventoryForAllSkuAndAllShipNodes(limit: string | null | undefined, nextCursor: string | null | undefined): Observable<GetMultiNodeInventoryForAllSkuAndAllShipNodesReturn> {
			return this.http.get<GetMultiNodeInventoryForAllSkuAndAllShipNodesReturn>(this.baseUri + 'v3/inventories?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&nextCursor=' + (nextCursor == null ? '' : encodeURIComponent(nextCursor)), {});
		}

		/**
		 * Single Item Inventory by Ship Node
		 * This API will retrieve the inventory count for an item across all ship nodes or one specific ship node. You can specify the ship node for which you want to fetch the inventory
		 * Get v3/inventories/{sku}
		 * @param {string} sku An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. This will be used by the seller in the XSD file to refer to each item. Special characters in the sku needing encoding are: ':', '/', '?', '#', '[', ']', '@', '!', '$', '&', "'", '(', ')', '*', '+', ',', ';', '=', ‘ ’ as well as '%' itself if it's a part of sku. Make sure to encode space with %20. Other characters don't need to be encoded.
		 * @param {string} shipNode ShipNode Id of the ship node for which the inventory is requested
		 * @return {GetMultiNodeInventoryForSkuAndAllShipnodesReturn} Successful Operation
		 */
		GetMultiNodeInventoryForSkuAndAllShipnodes(sku: string, shipNode: string | null | undefined): Observable<GetMultiNodeInventoryForSkuAndAllShipnodesReturn> {
			return this.http.get<GetMultiNodeInventoryForSkuAndAllShipnodesReturn>(this.baseUri + 'v3/inventories/' + (sku == null ? '' : encodeURIComponent(sku)) + '&shipNode=' + (shipNode == null ? '' : encodeURIComponent(shipNode)), {});
		}

		/**
		 * Update Item Inventory per Ship Node
		 * This API will update the inventory for an item across one or more fulfillment centers, known as ship nodes.
		 * Put v3/inventories/{sku}
		 * @param {string} sku An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. This will be used by the seller in the XSD file to refer to each item. Special characters in the sku needing encoding are: ':', '/', '?', '#', '[', ']', '@', '!', '$', '&', "'", '(', ')', '*', '+', ',', ';', '=', ‘ ’ as well as '%' itself if it's a part of sku. Make sure to encode space with %20. Other characters don't need to be encoded.
		 * @param {UpdateMultiNodeInventoryPutBody} requestBody Request fields
		 * @return {UpdateMultiNodeInventoryReturn} Successful Operation
		 */
		UpdateMultiNodeInventory(sku: string, requestBody: UpdateMultiNodeInventoryPutBody): Observable<UpdateMultiNodeInventoryReturn> {
			return this.http.put<UpdateMultiNodeInventoryReturn>(this.baseUri + 'v3/inventories/' + (sku == null ? '' : encodeURIComponent(sku)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inventory
		 * You can use this API to get the inventory for a given item.
		 * Get v3/inventory
		 * @param {string} sku An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. This will be used by the seller in the XSD file to refer to each item. Special characters in the sku needing encoding are: ':', '/', '?', '#', '[', ']', '@', '!', '$', '&', "'", '(', ')', '*', '+', ',', ';', '=', ‘ ’, '{', '}' as well as '%' itself if it's a part of sku. Make sure to encode space with %20. Other characters don't need to be encoded.
		 * @param {string} shipNode The shipNode for which the inventory is requested
		 * @return {GetInventoryReturn} Successful Operation
		 */
		GetInventory(sku: string, shipNode: string | null | undefined): Observable<GetInventoryReturn> {
			return this.http.get<GetInventoryReturn>(this.baseUri + 'v3/inventory?sku=' + (sku == null ? '' : encodeURIComponent(sku)) + '&shipNode=' + (shipNode == null ? '' : encodeURIComponent(shipNode)), {});
		}

		/**
		 * Update inventory
		 * Updates the inventory for a given item.
		 * Put v3/inventory
		 * @param {string} sku An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. This will be used by the seller in the XSD file to refer to each item. Special characters in the sku needing encoding are: ':', '/', '?', '#', '[', ']', '@', '!', '$', '&', "'", '(', ')', '*', '+', ',', ';', '=', ‘ ’, '{', '}' as well as '%' itself if it's a part of sku. Make sure to encode space with %20. Other characters don't need to be encoded.
		 * @param {string} shipNode The shipNode for which the inventory is to be updated.
		 * @param {UpdateInventoryForAnItemPutBody} requestBody File fields
		 * @return {UpdateInventoryForAnItemReturn} Successful Operation
		 */
		UpdateInventoryForAnItem(sku: string, shipNode: string | null | undefined, requestBody: UpdateInventoryForAnItemPutBody): Observable<UpdateInventoryForAnItemReturn> {
			return this.http.put<UpdateInventoryForAnItemReturn>(this.baseUri + 'v3/inventory?sku=' + (sku == null ? '' : encodeURIComponent(sku)) + '&shipNode=' + (shipNode == null ? '' : encodeURIComponent(shipNode)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum UpdateBulkInventoryFeedType { inventory = 'inventory', MP_INVENTORY = 'MP_INVENTORY' }

	export interface GetWFSInventoryReturn {
		headers?: GetWFSInventoryReturnHeaders;
		payload?: GetWFSInventoryReturnPayload;
	}
	export interface GetWFSInventoryReturnFormProperties {
	}
	export function CreateGetWFSInventoryReturnFormGroup() {
		return new FormGroup<GetWFSInventoryReturnFormProperties>({
		});

	}

	export interface GetWFSInventoryReturnHeaders {

		/**
		 * Information about the quantity in inventory
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/**
		 * Offset is the number of records you wish to skip before selecting results.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/**
		 * Total number of results for query.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCount?: number | null;
	}
	export interface GetWFSInventoryReturnHeadersFormProperties {

		/**
		 * Information about the quantity in inventory
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/**
		 * Offset is the number of records you wish to skip before selecting results.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/**
		 * Total number of results for query.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateGetWFSInventoryReturnHeadersFormGroup() {
		return new FormGroup<GetWFSInventoryReturnHeadersFormProperties>({
			limit: new FormControl<number | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetWFSInventoryReturnPayload {
		GetWFSInventoryReturnPayloadInventory?: Array<GetWFSInventoryReturnPayloadInventory>;
	}
	export interface GetWFSInventoryReturnPayloadFormProperties {
	}
	export function CreateGetWFSInventoryReturnPayloadFormGroup() {
		return new FormGroup<GetWFSInventoryReturnPayloadFormProperties>({
		});

	}

	export interface GetWFSInventoryReturnPayloadInventory {
		GetWFSInventoryReturnPayloadInventoryShipNodes?: Array<GetWFSInventoryReturnPayloadInventoryShipNodes>;

		/** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
		sku?: string | null;
	}
	export interface GetWFSInventoryReturnPayloadInventoryFormProperties {

		/** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
		sku: FormControl<string | null | undefined>,
	}
	export function CreateGetWFSInventoryReturnPayloadInventoryFormGroup() {
		return new FormGroup<GetWFSInventoryReturnPayloadInventoryFormProperties>({
			sku: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetWFSInventoryReturnPayloadInventoryShipNodes {

		/**
		 * The available quantity is the quantity of an item that is available to be allocated to orders.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		availToSellQty?: number | null;

		/** Last changes date for the item. */
		modifiedDate?: string | null;

		/**
		 * The on-hand balance is the quantity of active inventory stored at the warehouse.Active inventory is defined as the usable amount of an item that is in the warehouse.Inventory is active if it is not damaged, expired or being inspected.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		onHandQty?: number | null;

		/** Identifies fulfillment aspect of invetory. Walmart, seller or 3PL fulfilled. Possible value is 'WFSFulfilled'. In later phase we will also add seller fulfilled inventory. */
		shipNodeType?: string | null;
	}
	export interface GetWFSInventoryReturnPayloadInventoryShipNodesFormProperties {

		/**
		 * The available quantity is the quantity of an item that is available to be allocated to orders.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		availToSellQty: FormControl<number | null | undefined>,

		/** Last changes date for the item. */
		modifiedDate: FormControl<string | null | undefined>,

		/**
		 * The on-hand balance is the quantity of active inventory stored at the warehouse.Active inventory is defined as the usable amount of an item that is in the warehouse.Inventory is active if it is not damaged, expired or being inspected.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		onHandQty: FormControl<number | null | undefined>,

		/** Identifies fulfillment aspect of invetory. Walmart, seller or 3PL fulfilled. Possible value is 'WFSFulfilled'. In later phase we will also add seller fulfilled inventory. */
		shipNodeType: FormControl<string | null | undefined>,
	}
	export function CreateGetWFSInventoryReturnPayloadInventoryShipNodesFormGroup() {
		return new FormGroup<GetWFSInventoryReturnPayloadInventoryShipNodesFormProperties>({
			availToSellQty: new FormControl<number | null | undefined>(undefined),
			modifiedDate: new FormControl<string | null | undefined>(undefined),
			onHandQty: new FormControl<number | null | undefined>(undefined),
			shipNodeType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMultiNodeInventoryForAllSkuAndAllShipNodesReturn {
		elements?: GetMultiNodeInventoryForAllSkuAndAllShipNodesReturnElements;
		meta?: GetMultiNodeInventoryForAllSkuAndAllShipNodesReturnMeta;
	}
	export interface GetMultiNodeInventoryForAllSkuAndAllShipNodesReturnFormProperties {
	}
	export function CreateGetMultiNodeInventoryForAllSkuAndAllShipNodesReturnFormGroup() {
		return new FormGroup<GetMultiNodeInventoryForAllSkuAndAllShipNodesReturnFormProperties>({
		});

	}

	export interface GetMultiNodeInventoryForAllSkuAndAllShipNodesReturnElements {
		GetMultiNodeInventoryForAllSkuAndAllShipNodesReturnElementsInventories?: Array<GetMultiNodeInventoryForAllSkuAndAllShipNodesReturnElementsInventories>;
	}
	export interface GetMultiNodeInventoryForAllSkuAndAllShipNodesReturnElementsFormProperties {
	}
	export function CreateGetMultiNodeInventoryForAllSkuAndAllShipNodesReturnElementsFormGroup() {
		return new FormGroup<GetMultiNodeInventoryForAllSkuAndAllShipNodesReturnElementsFormProperties>({
		});

	}

	export interface GetMultiNodeInventoryForAllSkuAndAllShipNodesReturnElementsInventories {
		GetMultiNodeInventoryForAllSkuAndAllShipNodesReturnElementsInventoriesNodes?: Array<GetMultiNodeInventoryForAllSkuAndAllShipNodesReturnElementsInventoriesNodes>;

		/** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
		sku?: string | null;
	}
	export interface GetMultiNodeInventoryForAllSkuAndAllShipNodesReturnElementsInventoriesFormProperties {

		/** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
		sku: FormControl<string | null | undefined>,
	}
	export function CreateGetMultiNodeInventoryForAllSkuAndAllShipNodesReturnElementsInventoriesFormGroup() {
		return new FormGroup<GetMultiNodeInventoryForAllSkuAndAllShipNodesReturnElementsInventoriesFormProperties>({
			sku: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMultiNodeInventoryForAllSkuAndAllShipNodesReturnElementsInventoriesNodes {

		/** Quantity of an item that is available to be allocated to orders */
		availToSellQty?: GetMultiNodeInventoryForAllSkuAndAllShipNodesReturnElementsInventoriesNodesAvailToSellQty;

		/** Quantity of an item that is input by the seller */
		inputQty?: GetMultiNodeInventoryForAllSkuAndAllShipNodesReturnElementsInventoriesNodesInputQty;

		/** Quantity that has been ordered by the customers but not yet shipped */
		reservedQty?: GetMultiNodeInventoryForAllSkuAndAllShipNodesReturnElementsInventoriesNodesReservedQty;

		/** ShipNode Id of the ship node for which the inventory is requested */
		shipNode?: string | null;
	}
	export interface GetMultiNodeInventoryForAllSkuAndAllShipNodesReturnElementsInventoriesNodesFormProperties {

		/** ShipNode Id of the ship node for which the inventory is requested */
		shipNode: FormControl<string | null | undefined>,
	}
	export function CreateGetMultiNodeInventoryForAllSkuAndAllShipNodesReturnElementsInventoriesNodesFormGroup() {
		return new FormGroup<GetMultiNodeInventoryForAllSkuAndAllShipNodesReturnElementsInventoriesNodesFormProperties>({
			shipNode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMultiNodeInventoryForAllSkuAndAllShipNodesReturnElementsInventoriesNodesAvailToSellQty {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}
	export interface GetMultiNodeInventoryForAllSkuAndAllShipNodesReturnElementsInventoriesNodesAvailToSellQtyFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateGetMultiNodeInventoryForAllSkuAndAllShipNodesReturnElementsInventoriesNodesAvailToSellQtyFormGroup() {
		return new FormGroup<GetMultiNodeInventoryForAllSkuAndAllShipNodesReturnElementsInventoriesNodesAvailToSellQtyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetMultiNodeInventoryForAllSkuAndAllShipNodesReturnElementsInventoriesNodesInputQty {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}
	export interface GetMultiNodeInventoryForAllSkuAndAllShipNodesReturnElementsInventoriesNodesInputQtyFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateGetMultiNodeInventoryForAllSkuAndAllShipNodesReturnElementsInventoriesNodesInputQtyFormGroup() {
		return new FormGroup<GetMultiNodeInventoryForAllSkuAndAllShipNodesReturnElementsInventoriesNodesInputQtyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetMultiNodeInventoryForAllSkuAndAllShipNodesReturnElementsInventoriesNodesReservedQty {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}
	export interface GetMultiNodeInventoryForAllSkuAndAllShipNodesReturnElementsInventoriesNodesReservedQtyFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateGetMultiNodeInventoryForAllSkuAndAllShipNodesReturnElementsInventoriesNodesReservedQtyFormGroup() {
		return new FormGroup<GetMultiNodeInventoryForAllSkuAndAllShipNodesReturnElementsInventoriesNodesReservedQtyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetMultiNodeInventoryForAllSkuAndAllShipNodesReturnMeta {

		/** Used for pagination to fetch the next set of items. */
		nextCursor?: string | null;

		/**
		 * Total number of Skus of the Seller. Example: '235'
		 * Type: double
		 */
		totalCount?: number | null;
	}
	export interface GetMultiNodeInventoryForAllSkuAndAllShipNodesReturnMetaFormProperties {

		/** Used for pagination to fetch the next set of items. */
		nextCursor: FormControl<string | null | undefined>,

		/**
		 * Total number of Skus of the Seller. Example: '235'
		 * Type: double
		 */
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateGetMultiNodeInventoryForAllSkuAndAllShipNodesReturnMetaFormGroup() {
		return new FormGroup<GetMultiNodeInventoryForAllSkuAndAllShipNodesReturnMetaFormProperties>({
			nextCursor: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetMultiNodeInventoryForSkuAndAllShipnodesReturn {
		GetMultiNodeInventoryForSkuAndAllShipnodesReturnNodes?: Array<GetMultiNodeInventoryForSkuAndAllShipnodesReturnNodes>;

		/** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
		sku?: string | null;
	}
	export interface GetMultiNodeInventoryForSkuAndAllShipnodesReturnFormProperties {

		/** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
		sku: FormControl<string | null | undefined>,
	}
	export function CreateGetMultiNodeInventoryForSkuAndAllShipnodesReturnFormGroup() {
		return new FormGroup<GetMultiNodeInventoryForSkuAndAllShipnodesReturnFormProperties>({
			sku: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMultiNodeInventoryForSkuAndAllShipnodesReturnNodes {

		/** Quantity of an item that is available to be allocated to orders */
		availToSellQty?: GetMultiNodeInventoryForSkuAndAllShipnodesReturnNodesAvailToSellQty;
		GetMultiNodeInventoryForSkuAndAllShipnodesReturnNodesErrors?: Array<GetMultiNodeInventoryForSkuAndAllShipnodesReturnNodesErrors>;

		/** Quantity of an item that is input by the seller */
		inputQty?: GetMultiNodeInventoryForSkuAndAllShipnodesReturnNodesInputQty;

		/** Quantity that has been ordered by the customers but not yet shipped */
		reservedQty?: GetMultiNodeInventoryForSkuAndAllShipnodesReturnNodesReservedQty;

		/** ShipNode Id of the ship node for which the inventory is requested */
		shipNode?: string | null;
	}
	export interface GetMultiNodeInventoryForSkuAndAllShipnodesReturnNodesFormProperties {

		/** ShipNode Id of the ship node for which the inventory is requested */
		shipNode: FormControl<string | null | undefined>,
	}
	export function CreateGetMultiNodeInventoryForSkuAndAllShipnodesReturnNodesFormGroup() {
		return new FormGroup<GetMultiNodeInventoryForSkuAndAllShipnodesReturnNodesFormProperties>({
			shipNode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMultiNodeInventoryForSkuAndAllShipnodesReturnNodesAvailToSellQty {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}
	export interface GetMultiNodeInventoryForSkuAndAllShipnodesReturnNodesAvailToSellQtyFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateGetMultiNodeInventoryForSkuAndAllShipnodesReturnNodesAvailToSellQtyFormGroup() {
		return new FormGroup<GetMultiNodeInventoryForSkuAndAllShipnodesReturnNodesAvailToSellQtyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetMultiNodeInventoryForSkuAndAllShipnodesReturnNodesErrors {
		category?: ErrorCategory | null;
		GetMultiNodeInventoryForSkuAndAllShipnodesReturnNodesErrorsCauses?: Array<GetMultiNodeInventoryForSkuAndAllShipnodesReturnNodesErrorsCauses>;

		/** Required */
		code: string;
		description?: string | null;
		errorIdentifiers?: {[id: string]: any };
		field?: string | null;
		info?: string | null;
		severity?: ErrorSeverity | null;
	}
	export interface GetMultiNodeInventoryForSkuAndAllShipnodesReturnNodesErrorsFormProperties {
		category: FormControl<ErrorCategory | null | undefined>,

		/** Required */
		code: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		errorIdentifiers: FormControl<{[id: string]: any } | null | undefined>,
		field: FormControl<string | null | undefined>,
		info: FormControl<string | null | undefined>,
		severity: FormControl<ErrorSeverity | null | undefined>,
	}
	export function CreateGetMultiNodeInventoryForSkuAndAllShipnodesReturnNodesErrorsFormGroup() {
		return new FormGroup<GetMultiNodeInventoryForSkuAndAllShipnodesReturnNodesErrorsFormProperties>({
			category: new FormControl<ErrorCategory | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			errorIdentifiers: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			info: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<ErrorSeverity | null | undefined>(undefined),
		});

	}

	export interface GetMultiNodeInventoryForSkuAndAllShipnodesReturnNodesErrorsCauses {
		code?: string | null;
		description?: string | null;
		field?: string | null;
		type?: string | null;
	}
	export interface GetMultiNodeInventoryForSkuAndAllShipnodesReturnNodesErrorsCausesFormProperties {
		code: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		field: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateGetMultiNodeInventoryForSkuAndAllShipnodesReturnNodesErrorsCausesFormGroup() {
		return new FormGroup<GetMultiNodeInventoryForSkuAndAllShipnodesReturnNodesErrorsCausesFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMultiNodeInventoryForSkuAndAllShipnodesReturnNodesInputQty {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}
	export interface GetMultiNodeInventoryForSkuAndAllShipnodesReturnNodesInputQtyFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateGetMultiNodeInventoryForSkuAndAllShipnodesReturnNodesInputQtyFormGroup() {
		return new FormGroup<GetMultiNodeInventoryForSkuAndAllShipnodesReturnNodesInputQtyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetMultiNodeInventoryForSkuAndAllShipnodesReturnNodesReservedQty {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}
	export interface GetMultiNodeInventoryForSkuAndAllShipnodesReturnNodesReservedQtyFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateGetMultiNodeInventoryForSkuAndAllShipnodesReturnNodesReservedQtyFormGroup() {
		return new FormGroup<GetMultiNodeInventoryForSkuAndAllShipnodesReturnNodesReservedQtyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateMultiNodeInventoryPutBody {

		/** Required */
		inventories: UpdateMultiNodeInventoryPutBodyInventories;
	}
	export interface UpdateMultiNodeInventoryPutBodyFormProperties {
	}
	export function CreateUpdateMultiNodeInventoryPutBodyFormGroup() {
		return new FormGroup<UpdateMultiNodeInventoryPutBodyFormProperties>({
		});

	}

	export interface UpdateMultiNodeInventoryPutBodyInventories {

		/** Required */
		UpdateMultiNodeInventoryPutBodyInventoriesNodes: Array<UpdateMultiNodeInventoryPutBodyInventoriesNodes>;
	}
	export interface UpdateMultiNodeInventoryPutBodyInventoriesFormProperties {
	}
	export function CreateUpdateMultiNodeInventoryPutBodyInventoriesFormGroup() {
		return new FormGroup<UpdateMultiNodeInventoryPutBodyInventoriesFormProperties>({
		});

	}

	export interface UpdateMultiNodeInventoryPutBodyInventoriesNodes {

		/**
		 * Quantity that has been ordered by the customers but not yet shipped
		 * Required
		 */
		inputQty: UpdateMultiNodeInventoryPutBodyInventoriesNodesInputQty;

		/**
		 * ShipNode Id of the ship node for which the inventory is requested
		 * Required
		 */
		shipNode: string;
	}
	export interface UpdateMultiNodeInventoryPutBodyInventoriesNodesFormProperties {

		/**
		 * ShipNode Id of the ship node for which the inventory is requested
		 * Required
		 */
		shipNode: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMultiNodeInventoryPutBodyInventoriesNodesFormGroup() {
		return new FormGroup<UpdateMultiNodeInventoryPutBodyInventoriesNodesFormProperties>({
			shipNode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateMultiNodeInventoryPutBodyInventoriesNodesInputQty {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}
	export interface UpdateMultiNodeInventoryPutBodyInventoriesNodesInputQtyFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateUpdateMultiNodeInventoryPutBodyInventoriesNodesInputQtyFormGroup() {
		return new FormGroup<UpdateMultiNodeInventoryPutBodyInventoriesNodesInputQtyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateMultiNodeInventoryReturn {
		UpdateMultiNodeInventoryReturnNodes?: Array<UpdateMultiNodeInventoryReturnNodes>;

		/** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
		sku?: string | null;
	}
	export interface UpdateMultiNodeInventoryReturnFormProperties {

		/** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
		sku: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMultiNodeInventoryReturnFormGroup() {
		return new FormGroup<UpdateMultiNodeInventoryReturnFormProperties>({
			sku: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateMultiNodeInventoryReturnNodes {

		/** Node Update Error description. */
		UpdateMultiNodeInventoryReturnNodesErrors?: Array<UpdateMultiNodeInventoryReturnNodesErrors>;

		/** ShipNode Id of the ship node for which the inventory is requested */
		shipNode?: string | null;

		/** Node Update status. Example: 'Success' */
		status?: string | null;
	}
	export interface UpdateMultiNodeInventoryReturnNodesFormProperties {

		/** ShipNode Id of the ship node for which the inventory is requested */
		shipNode: FormControl<string | null | undefined>,

		/** Node Update status. Example: 'Success' */
		status: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMultiNodeInventoryReturnNodesFormGroup() {
		return new FormGroup<UpdateMultiNodeInventoryReturnNodesFormProperties>({
			shipNode: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateMultiNodeInventoryReturnNodesErrors {
		category?: ErrorCategory | null;
		UpdateMultiNodeInventoryReturnNodesErrorsCauses?: Array<UpdateMultiNodeInventoryReturnNodesErrorsCauses>;

		/** Required */
		code: string;
		description?: string | null;
		errorIdentifiers?: {[id: string]: any };
		field?: string | null;
		info?: string | null;
		severity?: ErrorSeverity | null;
	}
	export interface UpdateMultiNodeInventoryReturnNodesErrorsFormProperties {
		category: FormControl<ErrorCategory | null | undefined>,

		/** Required */
		code: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		errorIdentifiers: FormControl<{[id: string]: any } | null | undefined>,
		field: FormControl<string | null | undefined>,
		info: FormControl<string | null | undefined>,
		severity: FormControl<ErrorSeverity | null | undefined>,
	}
	export function CreateUpdateMultiNodeInventoryReturnNodesErrorsFormGroup() {
		return new FormGroup<UpdateMultiNodeInventoryReturnNodesErrorsFormProperties>({
			category: new FormControl<ErrorCategory | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			errorIdentifiers: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			info: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<ErrorSeverity | null | undefined>(undefined),
		});

	}

	export interface UpdateMultiNodeInventoryReturnNodesErrorsCauses {
		code?: string | null;
		description?: string | null;
		field?: string | null;
		type?: string | null;
	}
	export interface UpdateMultiNodeInventoryReturnNodesErrorsCausesFormProperties {
		code: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		field: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMultiNodeInventoryReturnNodesErrorsCausesFormGroup() {
		return new FormGroup<UpdateMultiNodeInventoryReturnNodesErrorsCausesFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetInventoryReturn {

		/**
		 * Quantity that has been ordered by the customers but not yet shipped
		 * Required
		 */
		quantity: GetInventoryReturnQuantity;

		/**
		 * A seller-provided Product ID. Response will have decoded value.
		 * Required
		 */
		sku: string;
	}
	export interface GetInventoryReturnFormProperties {

		/**
		 * A seller-provided Product ID. Response will have decoded value.
		 * Required
		 */
		sku: FormControl<string | null | undefined>,
	}
	export function CreateGetInventoryReturnFormGroup() {
		return new FormGroup<GetInventoryReturnFormProperties>({
			sku: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetInventoryReturnQuantity {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}
	export interface GetInventoryReturnQuantityFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateGetInventoryReturnQuantityFormGroup() {
		return new FormGroup<GetInventoryReturnQuantityFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateInventoryForAnItemPutBody {

		/**
		 * Quantity that has been ordered by the customers but not yet shipped
		 * Required
		 */
		quantity: UpdateInventoryForAnItemPutBodyQuantity;

		/**
		 * A seller-provided Product ID. Response will have decoded value.
		 * Required
		 */
		sku: string;
	}
	export interface UpdateInventoryForAnItemPutBodyFormProperties {

		/**
		 * A seller-provided Product ID. Response will have decoded value.
		 * Required
		 */
		sku: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInventoryForAnItemPutBodyFormGroup() {
		return new FormGroup<UpdateInventoryForAnItemPutBodyFormProperties>({
			sku: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateInventoryForAnItemPutBodyQuantity {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}
	export interface UpdateInventoryForAnItemPutBodyQuantityFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateUpdateInventoryForAnItemPutBodyQuantityFormGroup() {
		return new FormGroup<UpdateInventoryForAnItemPutBodyQuantityFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateInventoryForAnItemReturn {

		/**
		 * Quantity that has been ordered by the customers but not yet shipped
		 * Required
		 */
		quantity: UpdateInventoryForAnItemReturnQuantity;

		/**
		 * A seller-provided Product ID. Response will have decoded value.
		 * Required
		 */
		sku: string;
	}
	export interface UpdateInventoryForAnItemReturnFormProperties {

		/**
		 * A seller-provided Product ID. Response will have decoded value.
		 * Required
		 */
		sku: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInventoryForAnItemReturnFormGroup() {
		return new FormGroup<UpdateInventoryForAnItemReturnFormProperties>({
			sku: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateInventoryForAnItemReturnQuantity {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: AvailToSellQtyUnit;
	}
	export interface UpdateInventoryForAnItemReturnQuantityFormProperties {

		/**
		 * Inventory Count
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The unit of measurement. Example: 'EACH'
		 * Required
		 */
		unit: FormControl<AvailToSellQtyUnit | null | undefined>,
	}
	export function CreateUpdateInventoryForAnItemReturnQuantityFormGroup() {
		return new FormGroup<UpdateInventoryForAnItemReturnQuantityFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AvailToSellQtyUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

}

