import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BasicModelStats {

		/**
		 * Required
		 * Type: double
		 */
		average: number;

		/**
		 * Required
		 * Type: double
		 */
		median: number;

		/** Required */
		name: string;

		/**
		 * Required
		 * Type: double
		 */
		pVariance: number;

		/**
		 * Required
		 * Type: double
		 */
		stdDev: number;
	}
	export interface BasicModelStatsFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		average: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		median: FormControl<number | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		pVariance: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		stdDev: FormControl<number | null | undefined>,
	}
	export function CreateBasicModelStatsFormGroup() {
		return new FormGroup<BasicModelStatsFormProperties>({
			average: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			median: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pVariance: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			stdDev: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BasicModelStatsResp {
		brandName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cacheTimeLimit?: number | null;
		condition?: string | null;

		/** Required */
		data: Array<BasicModelStats>;
		modelName?: string | null;
		msg?: string | null;
		regionName?: string | null;
	}
	export interface BasicModelStatsRespFormProperties {
		brandName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cacheTimeLimit: FormControl<number | null | undefined>,
		condition: FormControl<string | null | undefined>,
		modelName: FormControl<string | null | undefined>,
		msg: FormControl<string | null | undefined>,
		regionName: FormControl<string | null | undefined>,
	}
	export function CreateBasicModelStatsRespFormGroup() {
		return new FormGroup<BasicModelStatsRespFormProperties>({
			brandName: new FormControl<string | null | undefined>(undefined),
			cacheTimeLimit: new FormControl<number | null | undefined>(undefined),
			condition: new FormControl<string | null | undefined>(undefined),
			modelName: new FormControl<string | null | undefined>(undefined),
			msg: new FormControl<string | null | undefined>(undefined),
			regionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BooleanResp {
		brandName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cacheTimeLimit?: number | null;
		condition?: string | null;

		/** Required */
		data: boolean;
		modelName?: string | null;
		msg?: string | null;
		regionName?: string | null;
	}
	export interface BooleanRespFormProperties {
		brandName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cacheTimeLimit: FormControl<number | null | undefined>,
		condition: FormControl<string | null | undefined>,

		/** Required */
		data: FormControl<boolean | null | undefined>,
		modelName: FormControl<string | null | undefined>,
		msg: FormControl<string | null | undefined>,
		regionName: FormControl<string | null | undefined>,
	}
	export function CreateBooleanRespFormGroup() {
		return new FormGroup<BooleanRespFormProperties>({
			brandName: new FormControl<string | null | undefined>(undefined),
			cacheTimeLimit: new FormControl<number | null | undefined>(undefined),
			condition: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			modelName: new FormControl<string | null | undefined>(undefined),
			msg: new FormControl<string | null | undefined>(undefined),
			regionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BrandResp {
		brandName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cacheTimeLimit?: number | null;
		condition?: string | null;

		/** Required */
		data: Array<string>;
		modelName?: string | null;
		msg?: string | null;
		regionName?: string | null;
	}
	export interface BrandRespFormProperties {
		brandName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cacheTimeLimit: FormControl<number | null | undefined>,
		condition: FormControl<string | null | undefined>,
		modelName: FormControl<string | null | undefined>,
		msg: FormControl<string | null | undefined>,
		regionName: FormControl<string | null | undefined>,
	}
	export function CreateBrandRespFormGroup() {
		return new FormGroup<BrandRespFormProperties>({
			brandName: new FormControl<string | null | undefined>(undefined),
			cacheTimeLimit: new FormControl<number | null | undefined>(undefined),
			condition: new FormControl<string | null | undefined>(undefined),
			modelName: new FormControl<string | null | undefined>(undefined),
			msg: new FormControl<string | null | undefined>(undefined),
			regionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BucketEntry {

		/**
		 * Required
		 * Type: double
		 */
		bucket: number;

		/** Required */
		modelName: string;

		/**
		 * Required
		 * Type: double
		 */
		percentOfMarket: number;
	}
	export interface BucketEntryFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		bucket: FormControl<number | null | undefined>,

		/** Required */
		modelName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		percentOfMarket: FormControl<number | null | undefined>,
	}
	export function CreateBucketEntryFormGroup() {
		return new FormGroup<BucketEntryFormProperties>({
			bucket: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			modelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			percentOfMarket: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BucketResp {
		brandName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cacheTimeLimit?: number | null;
		condition?: string | null;

		/** Required */
		data: Array<BucketEntry>;
		modelName?: string | null;
		msg?: string | null;
		regionName?: string | null;
	}
	export interface BucketRespFormProperties {
		brandName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cacheTimeLimit: FormControl<number | null | undefined>,
		condition: FormControl<string | null | undefined>,
		modelName: FormControl<string | null | undefined>,
		msg: FormControl<string | null | undefined>,
		regionName: FormControl<string | null | undefined>,
	}
	export function CreateBucketRespFormGroup() {
		return new FormGroup<BucketRespFormProperties>({
			brandName: new FormControl<string | null | undefined>(undefined),
			cacheTimeLimit: new FormControl<number | null | undefined>(undefined),
			condition: new FormControl<string | null | undefined>(undefined),
			modelName: new FormControl<string | null | undefined>(undefined),
			msg: new FormControl<string | null | undefined>(undefined),
			regionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DealershipData {

		/** Required */
		address: string;

		/** Required */
		dealerName: string;

		/** Required */
		ids: Array<number>;

		/** Required */
		state: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		zipCode: number;
	}
	export interface DealershipDataFormProperties {

		/** Required */
		address: FormControl<string | null | undefined>,

		/** Required */
		dealerName: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		zipCode: FormControl<number | null | undefined>,
	}
	export function CreateDealershipDataFormGroup() {
		return new FormGroup<DealershipDataFormProperties>({
			address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dealerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			zipCode: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DealershipDataPaginated {

		/** Required */
		dealers: Array<DealershipData>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxPages: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		page: number;
	}
	export interface DealershipDataPaginatedFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxPages: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		page: FormControl<number | null | undefined>,
	}
	export function CreateDealershipDataPaginatedFormGroup() {
		return new FormGroup<DealershipDataPaginatedFormProperties>({
			maxPages: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DealershipDataPaginatedResp {
		brandName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cacheTimeLimit?: number | null;
		condition?: string | null;

		/** Required */
		data: DealershipDataPaginated;
		modelName?: string | null;
		msg?: string | null;
		regionName?: string | null;
	}
	export interface DealershipDataPaginatedRespFormProperties {
		brandName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cacheTimeLimit: FormControl<number | null | undefined>,
		condition: FormControl<string | null | undefined>,
		modelName: FormControl<string | null | undefined>,
		msg: FormControl<string | null | undefined>,
		regionName: FormControl<string | null | undefined>,
	}
	export function CreateDealershipDataPaginatedRespFormGroup() {
		return new FormGroup<DealershipDataPaginatedRespFormProperties>({
			brandName: new FormControl<string | null | undefined>(undefined),
			cacheTimeLimit: new FormControl<number | null | undefined>(undefined),
			condition: new FormControl<string | null | undefined>(undefined),
			modelName: new FormControl<string | null | undefined>(undefined),
			msg: new FormControl<string | null | undefined>(undefined),
			regionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DealershipDataResp {
		brandName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cacheTimeLimit?: number | null;
		condition?: string | null;

		/** Required */
		data: Array<DealershipData>;
		modelName?: string | null;
		msg?: string | null;
		regionName?: string | null;
	}
	export interface DealershipDataRespFormProperties {
		brandName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cacheTimeLimit: FormControl<number | null | undefined>,
		condition: FormControl<string | null | undefined>,
		modelName: FormControl<string | null | undefined>,
		msg: FormControl<string | null | undefined>,
		regionName: FormControl<string | null | undefined>,
	}
	export function CreateDealershipDataRespFormGroup() {
		return new FormGroup<DealershipDataRespFormProperties>({
			brandName: new FormControl<string | null | undefined>(undefined),
			cacheTimeLimit: new FormControl<number | null | undefined>(undefined),
			condition: new FormControl<string | null | undefined>(undefined),
			modelName: new FormControl<string | null | undefined>(undefined),
			msg: new FormControl<string | null | undefined>(undefined),
			regionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EndpointList {
		endPoints?: Array<string>;
	}
	export interface EndpointListFormProperties {
	}
	export function CreateEndpointListFormGroup() {
		return new FormGroup<EndpointListFormProperties>({
		});

	}

	export interface GenericResponse {
		brandName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cacheTimeLimit?: number | null;
		condition?: string | null;
		data?: any;
		modelName?: string | null;
		msg?: string | null;
		regionName?: string | null;
	}
	export interface GenericResponseFormProperties {
		brandName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cacheTimeLimit: FormControl<number | null | undefined>,
		condition: FormControl<string | null | undefined>,
		data: FormControl<any | null | undefined>,
		modelName: FormControl<string | null | undefined>,
		msg: FormControl<string | null | undefined>,
		regionName: FormControl<string | null | undefined>,
	}
	export function CreateGenericResponseFormGroup() {
		return new FormGroup<GenericResponseFormProperties>({
			brandName: new FormControl<string | null | undefined>(undefined),
			cacheTimeLimit: new FormControl<number | null | undefined>(undefined),
			condition: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<any | null | undefined>(undefined),
			modelName: new FormControl<string | null | undefined>(undefined),
			msg: new FormControl<string | null | undefined>(undefined),
			regionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HTTPValidationError {
		detail?: Array<ValidationError>;
	}
	export interface HTTPValidationErrorFormProperties {
	}
	export function CreateHTTPValidationErrorFormGroup() {
		return new FormGroup<HTTPValidationErrorFormProperties>({
		});

	}

	export interface ValidationError {

		/** Required */
		loc: Array<string>;

		/** Required */
		msg: string;

		/** Required */
		type: string;
	}
	export interface ValidationErrorFormProperties {

		/** Required */
		msg: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateValidationErrorFormGroup() {
		return new FormGroup<ValidationErrorFormProperties>({
			msg: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HistoryResp {
		brandName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cacheTimeLimit?: number | null;
		condition?: string | null;

		/** Required */
		data: VehHistoryData;
		modelName?: string | null;
		msg?: string | null;
		regionName?: string | null;
	}
	export interface HistoryRespFormProperties {
		brandName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cacheTimeLimit: FormControl<number | null | undefined>,
		condition: FormControl<string | null | undefined>,
		modelName: FormControl<string | null | undefined>,
		msg: FormControl<string | null | undefined>,
		regionName: FormControl<string | null | undefined>,
	}
	export function CreateHistoryRespFormGroup() {
		return new FormGroup<HistoryRespFormProperties>({
			brandName: new FormControl<string | null | undefined>(undefined),
			cacheTimeLimit: new FormControl<number | null | undefined>(undefined),
			condition: new FormControl<string | null | undefined>(undefined),
			modelName: new FormControl<string | null | undefined>(undefined),
			msg: new FormControl<string | null | undefined>(undefined),
			regionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VehHistoryData {

		/** Required */
		data: Array<VehHistory>;

		/** Required */
		vin: string;
	}
	export interface VehHistoryDataFormProperties {

		/** Required */
		vin: FormControl<string | null | undefined>,
	}
	export function CreateVehHistoryDataFormGroup() {
		return new FormGroup<VehHistoryDataFormProperties>({
			vin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VehHistory {

		/** Required */
		dealerName: string;

		/**
		 * Required
		 * Type: DateOnly
		 */
		firstSeen: Date;

		/**
		 * Required
		 * Type: DateOnly
		 */
		lastSeen: Date;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		miles: number;

		/** Required */
		new: boolean;

		/**
		 * Required
		 * Type: double
		 */
		price: number;

		/** Required */
		state: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		zip: number;
	}
	export interface VehHistoryFormProperties {

		/** Required */
		dealerName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: DateOnly
		 */
		firstSeen: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Type: DateOnly
		 */
		lastSeen: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		miles: FormControl<number | null | undefined>,

		/** Required */
		new: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		price: FormControl<number | null | undefined>,

		/** Required */
		state: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		zip: FormControl<number | null | undefined>,
	}
	export function CreateVehHistoryFormGroup() {
		return new FormGroup<VehHistoryFormProperties>({
			dealerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			firstSeen: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastSeen: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			miles: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			new: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			zip: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface JSONWebToken {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		createdOn?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		expires?: number | null;

		/** Required */
		token: string;
	}
	export interface JSONWebTokenFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		createdOn: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		expires: FormControl<number | null | undefined>,

		/** Required */
		token: FormControl<string | null | undefined>,
	}
	export function CreateJSONWebTokenFormGroup() {
		return new FormGroup<JSONWebTokenFormProperties>({
			createdOn: new FormControl<number | null | undefined>(undefined),
			expires: new FormControl<number | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Listing {

		/**
		 * Required
		 * Type: double
		 */
		askPrice: number;

		/** Required */
		brandName: string;
		color?: string | null;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dealerID: number;

		/**
		 * Required
		 * Type: DateOnly
		 */
		firstSeen: Date;
		interiorColor?: string | null;

		/** Required */
		isNew: boolean;

		/**
		 * Required
		 * Type: DateOnly
		 */
		lastSeen: Date;

		/** Type: double */
		mileage?: number | null;

		/** Required */
		modelName: string;

		/**
		 * Required
		 * Type: double
		 */
		msrp: number;

		/** Required */
		vin: string;
		vinDecode?: string | null;

		/**
		 * Required
		 * Type: double
		 */
		year: number;
	}
	export interface ListingFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		askPrice: FormControl<number | null | undefined>,

		/** Required */
		brandName: FormControl<string | null | undefined>,
		color: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dealerID: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: DateOnly
		 */
		firstSeen: FormControl<Date | null | undefined>,
		interiorColor: FormControl<string | null | undefined>,

		/** Required */
		isNew: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Type: DateOnly
		 */
		lastSeen: FormControl<Date | null | undefined>,

		/** Type: double */
		mileage: FormControl<number | null | undefined>,

		/** Required */
		modelName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		msrp: FormControl<number | null | undefined>,

		/** Required */
		vin: FormControl<string | null | undefined>,
		vinDecode: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateListingFormGroup() {
		return new FormGroup<ListingFormProperties>({
			askPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			brandName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			color: new FormControl<string | null | undefined>(undefined),
			dealerID: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			firstSeen: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			interiorColor: new FormControl<string | null | undefined>(undefined),
			isNew: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			lastSeen: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			mileage: new FormControl<number | null | undefined>(undefined),
			modelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			msrp: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			vin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vinDecode: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListingResp {
		brandName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cacheTimeLimit?: number | null;
		condition?: string | null;

		/** Required */
		data: ListingRespPaginated;

		/** Type: DateOnly */
		endDate?: Date | null;
		modelName?: string | null;
		msg?: string | null;
		regionName?: string | null;

		/** Type: DateOnly */
		startDate?: Date | null;
	}
	export interface ListingRespFormProperties {
		brandName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cacheTimeLimit: FormControl<number | null | undefined>,
		condition: FormControl<string | null | undefined>,

		/** Type: DateOnly */
		endDate: FormControl<Date | null | undefined>,
		modelName: FormControl<string | null | undefined>,
		msg: FormControl<string | null | undefined>,
		regionName: FormControl<string | null | undefined>,

		/** Type: DateOnly */
		startDate: FormControl<Date | null | undefined>,
	}
	export function CreateListingRespFormGroup() {
		return new FormGroup<ListingRespFormProperties>({
			brandName: new FormControl<string | null | undefined>(undefined),
			cacheTimeLimit: new FormControl<number | null | undefined>(undefined),
			condition: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<Date | null | undefined>(undefined),
			modelName: new FormControl<string | null | undefined>(undefined),
			msg: new FormControl<string | null | undefined>(undefined),
			regionName: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListingRespPaginated {

		/** Required */
		listings: Array<Listing>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxPages: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		page: number;
	}
	export interface ListingRespPaginatedFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxPages: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		page: FormControl<number | null | undefined>,
	}
	export function CreateListingRespPaginatedFormGroup() {
		return new FormGroup<ListingRespPaginatedFormProperties>({
			maxPages: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ModelDict {

		/** Required */
		modelName: string;
	}
	export interface ModelDictFormProperties {

		/** Required */
		modelName: FormControl<string | null | undefined>,
	}
	export function CreateModelDictFormGroup() {
		return new FormGroup<ModelDictFormProperties>({
			modelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ModelResp {
		brandName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cacheTimeLimit?: number | null;
		condition?: string | null;

		/** Required */
		data: Array<ModelDict>;
		modelName?: string | null;
		msg?: string | null;
		regionName?: string | null;
	}
	export interface ModelRespFormProperties {
		brandName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cacheTimeLimit: FormControl<number | null | undefined>,
		condition: FormControl<string | null | undefined>,
		modelName: FormControl<string | null | undefined>,
		msg: FormControl<string | null | undefined>,
		regionName: FormControl<string | null | undefined>,
	}
	export function CreateModelRespFormGroup() {
		return new FormGroup<ModelRespFormProperties>({
			brandName: new FormControl<string | null | undefined>(undefined),
			cacheTimeLimit: new FormControl<number | null | undefined>(undefined),
			condition: new FormControl<string | null | undefined>(undefined),
			modelName: new FormControl<string | null | undefined>(undefined),
			msg: new FormControl<string | null | undefined>(undefined),
			regionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ModelYearDistEntry {

		/** Required */
		brandName: string;

		/** Required */
		modelName: string;

		/**
		 * Required
		 * Type: double
		 */
		percentOfMarket: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year: number;
	}
	export interface ModelYearDistEntryFormProperties {

		/** Required */
		brandName: FormControl<string | null | undefined>,

		/** Required */
		modelName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		percentOfMarket: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateModelYearDistEntryFormGroup() {
		return new FormGroup<ModelYearDistEntryFormProperties>({
			brandName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			percentOfMarket: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			year: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ModelYearDistResp {
		brandName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cacheTimeLimit?: number | null;
		condition?: string | null;

		/** Required */
		data: Array<ModelYearDistEntry>;
		modelName?: string | null;
		msg?: string | null;
		regionName?: string | null;
	}
	export interface ModelYearDistRespFormProperties {
		brandName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cacheTimeLimit: FormControl<number | null | undefined>,
		condition: FormControl<string | null | undefined>,
		modelName: FormControl<string | null | undefined>,
		msg: FormControl<string | null | undefined>,
		regionName: FormControl<string | null | undefined>,
	}
	export function CreateModelYearDistRespFormGroup() {
		return new FormGroup<ModelYearDistRespFormProperties>({
			brandName: new FormControl<string | null | undefined>(undefined),
			cacheTimeLimit: new FormControl<number | null | undefined>(undefined),
			condition: new FormControl<string | null | undefined>(undefined),
			modelName: new FormControl<string | null | undefined>(undefined),
			msg: new FormControl<string | null | undefined>(undefined),
			regionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegionResp {
		brandName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cacheTimeLimit?: number | null;
		condition?: string | null;

		/** Required */
		data: Array<string>;
		modelName?: string | null;
		msg?: string | null;
		regionName?: string | null;
	}
	export interface RegionRespFormProperties {
		brandName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cacheTimeLimit: FormControl<number | null | undefined>,
		condition: FormControl<string | null | undefined>,
		modelName: FormControl<string | null | undefined>,
		msg: FormControl<string | null | undefined>,
		regionName: FormControl<string | null | undefined>,
	}
	export function CreateRegionRespFormGroup() {
		return new FormGroup<RegionRespFormProperties>({
			brandName: new FormControl<string | null | undefined>(undefined),
			cacheTimeLimit: new FormControl<number | null | undefined>(undefined),
			condition: new FormControl<string | null | undefined>(undefined),
			modelName: new FormControl<string | null | undefined>(undefined),
			msg: new FormControl<string | null | undefined>(undefined),
			regionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SimilarSalePriceData {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		daysBack: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		mileCount: number;

		/**
		 * Required
		 * Type: double
		 */
		milesAvg: number;

		/**
		 * Required
		 * Type: double
		 */
		milesStdDev: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		newCount: number;

		/**
		 * Required
		 * Type: double
		 */
		newSaleAvg: number;

		/**
		 * Required
		 * Type: double
		 */
		newSaleStdDev: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		usedCount: number;

		/**
		 * Required
		 * Type: double
		 */
		usedSaleAvg: number;

		/**
		 * Required
		 * Type: double
		 */
		usedSaleStdDev: number;
	}
	export interface SimilarSalePriceDataFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		daysBack: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		mileCount: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		milesAvg: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		milesStdDev: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		newCount: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		newSaleAvg: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		newSaleStdDev: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		usedCount: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		usedSaleAvg: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		usedSaleStdDev: FormControl<number | null | undefined>,
	}
	export function CreateSimilarSalePriceDataFormGroup() {
		return new FormGroup<SimilarSalePriceDataFormProperties>({
			daysBack: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			mileCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			milesAvg: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			milesStdDev: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			newCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			newSaleAvg: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			newSaleStdDev: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			usedCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			usedSaleAvg: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			usedSaleStdDev: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SimilarSalePriceResp {
		brandName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cacheTimeLimit?: number | null;
		condition?: string | null;

		/** Required */
		data: SimilarSalePriceData;

		/**
		 * Required
		 * Type: DateOnly
		 */
		endDate: Date;
		modelName?: string | null;
		msg?: string | null;
		regionName?: string | null;

		/**
		 * Required
		 * Type: DateOnly
		 */
		startDate: Date;
	}
	export interface SimilarSalePriceRespFormProperties {
		brandName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cacheTimeLimit: FormControl<number | null | undefined>,
		condition: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: DateOnly
		 */
		endDate: FormControl<Date | null | undefined>,
		modelName: FormControl<string | null | undefined>,
		msg: FormControl<string | null | undefined>,
		regionName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: DateOnly
		 */
		startDate: FormControl<Date | null | undefined>,
	}
	export function CreateSimilarSalePriceRespFormGroup() {
		return new FormGroup<SimilarSalePriceRespFormProperties>({
			brandName: new FormControl<string | null | undefined>(undefined),
			cacheTimeLimit: new FormControl<number | null | undefined>(undefined),
			condition: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			modelName: new FormControl<string | null | undefined>(undefined),
			msg: new FormControl<string | null | undefined>(undefined),
			regionName: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SubUserJSONWebToken {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		createdOn?: number | null;

		/** Required */
		domain: string;
		endPoints?: Array<string>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		expires?: number | null;

		/** Required */
		token: string;

		/** Required */
		uuid: string;
	}
	export interface SubUserJSONWebTokenFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		createdOn: FormControl<number | null | undefined>,

		/** Required */
		domain: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		expires: FormControl<number | null | undefined>,

		/** Required */
		token: FormControl<string | null | undefined>,

		/** Required */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateSubUserJSONWebTokenFormGroup() {
		return new FormGroup<SubUserJSONWebTokenFormProperties>({
			createdOn: new FormControl<number | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expires: new FormControl<number | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uuid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TopModelEntry {

		/**
		 * Required
		 * Type: double
		 */
		brandMarketShare: number;

		/** Required */
		brandName: string;

		/** Required */
		modelName: string;

		/**
		 * Required
		 * Type: double
		 */
		percentOfBrandSales: number;

		/**
		 * Required
		 * Type: double
		 */
		percentOfTopSales: number;
	}
	export interface TopModelEntryFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		brandMarketShare: FormControl<number | null | undefined>,

		/** Required */
		brandName: FormControl<string | null | undefined>,

		/** Required */
		modelName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		percentOfBrandSales: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		percentOfTopSales: FormControl<number | null | undefined>,
	}
	export function CreateTopModelEntryFormGroup() {
		return new FormGroup<TopModelEntryFormProperties>({
			brandMarketShare: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			brandName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			percentOfBrandSales: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			percentOfTopSales: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TopModelResp {
		brandName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cacheTimeLimit?: number | null;
		condition?: string | null;

		/** Required */
		data: Array<TopModelEntry>;
		modelName?: string | null;
		msg?: string | null;
		regionName?: string | null;
	}
	export interface TopModelRespFormProperties {
		brandName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cacheTimeLimit: FormControl<number | null | undefined>,
		condition: FormControl<string | null | undefined>,
		modelName: FormControl<string | null | undefined>,
		msg: FormControl<string | null | undefined>,
		regionName: FormControl<string | null | undefined>,
	}
	export function CreateTopModelRespFormGroup() {
		return new FormGroup<TopModelRespFormProperties>({
			brandName: new FormControl<string | null | undefined>(undefined),
			cacheTimeLimit: new FormControl<number | null | undefined>(undefined),
			condition: new FormControl<string | null | undefined>(undefined),
			modelName: new FormControl<string | null | undefined>(undefined),
			msg: new FormControl<string | null | undefined>(undefined),
			regionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Days worth of supply left on dealer lots
		 * Average, median, standard deviation, population variance, and whole region average of the
		 * days of supply left on dealer lots for a given brand and region. The average, median, stdDev, and pVar fields are calculated on
		 * a dealer by dealer basis while the whole region average treats the entire region like a single dealership.
		 * The average field may differ from the whole region average, especially when dealers are out of
		 * a given model.
		 * The available brand and region names can be retrieved from their respective endpoints.
		 * Get daysSupply
		 * @return {GenericResponse} Successful Response
		 */
		DaysSupply_daysSupply_get(jwt: string, brandName: string, regionName: string | null | undefined): Observable<GenericResponse> {
			return this.http.get<GenericResponse>(this.baseUri + 'daysSupply?jwt=' + (jwt == null ? '' : encodeURIComponent(jwt)) + '&brandName=' + (brandName == null ? '' : encodeURIComponent(brandName)) + '&regionName=' + (regionName == null ? '' : encodeURIComponent(regionName)), {});
		}

		/**
		 * Days a vehicle takes to sell
		 * Average, median, standard deviation, population variance, and whole region average of the
		 * number of days a vehicle spends on dealer lots for a given brand and region. The average, median, stdDev, and pVar fields are calculated on
		 * a dealer by dealer basis while the whole region average treats the entire region like a single dealership.
		 * The average field may differ from the whole region average.
		 * The available brand and region names can be retrieved from their respective endpoints.
		 * Get daysToSell
		 * @return {GenericResponse} Successful Response
		 */
		DaysToSell_daysToSell_get(jwt: string, brandName: string, regionName: string | null | undefined): Observable<GenericResponse> {
			return this.http.get<GenericResponse>(this.baseUri + 'daysToSell?jwt=' + (jwt == null ? '' : encodeURIComponent(jwt)) + '&brandName=' + (brandName == null ? '' : encodeURIComponent(brandName)) + '&regionName=' + (regionName == null ? '' : encodeURIComponent(regionName)), {});
		}

		/**
		 * Get a list of brand names
		 * Get vehicle brand names.
		 * These names are used as arguments for other endpoints. The names are generally not case sensitive
		 * when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
		 * Get getBrands
		 * @return {BrandResp} Successful Response
		 */
		GetBrandNames_getBrands_get(jwt: string): Observable<BrandResp> {
			return this.http.get<BrandResp>(this.baseUri + 'getBrands?jwt=' + (jwt == null ? '' : encodeURIComponent(jwt)), {});
		}

		/**
		 * Premium. Dealers in a zip code.
		 * Premium. Dealership information in a given zip code using the first 4 digits. Returns name, address, state, zipCode, and IDs.
		 * For example a call with the zip code 92701 would return dealers with zip codes in the range [92700, 92709]
		 * Get getDealers
		 * @param {number} zipCode Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {DealershipDataResp} Successful Response
		 */
		GetDealers_getDealers_get(jwt: string, zipCode: number): Observable<DealershipDataResp> {
			return this.http.get<DealershipDataResp>(this.baseUri + 'getDealers?jwt=' + (jwt == null ? '' : encodeURIComponent(jwt)) + '&zipCode=' + zipCode, {});
		}

		/**
		 * Premium. Dealers by ID
		 * Premium. Dealership information using the internal ID. Returns name, address, state, zipCode, and ID for a single dealer in the same format as the /getDealers endpoint.
		 * Dealer IDs are generally retrieved via the /getDealers or /getDealersByRegion endpoints.
		 * Get getDealersByID
		 * @param {number} dealerID Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {DealershipDataResp} Successful Response
		 */
		GetDealers_getDealersByID_get(jwt: string, dealerID: number): Observable<DealershipDataResp> {
			return this.http.get<DealershipDataResp>(this.baseUri + 'getDealersByID?jwt=' + (jwt == null ? '' : encodeURIComponent(jwt)) + '&dealerID=' + dealerID, {});
		}

		/**
		 * Premium. Dealers in a region.
		 * Premium. Dealership information in a given region. Returns name, address, state, zipCode, and IDs. Results are paginated with up to 30 results per page.
		 * Get getDealersByRegion
		 * @param {number} page Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {DealershipDataPaginatedResp} Successful Response
		 */
		GetDealers_getDealersByRegion_get(jwt: string, regionName: string | null | undefined, page: number | null | undefined): Observable<DealershipDataPaginatedResp> {
			return this.http.get<DealershipDataPaginatedResp>(this.baseUri + 'getDealersByRegion?jwt=' + (jwt == null ? '' : encodeURIComponent(jwt)) + '&regionName=' + (regionName == null ? '' : encodeURIComponent(regionName)) + '&page=' + page, {});
		}

		/**
		 * Get a list of model names including discontinued models
		 * Get all model names including discontinued models. Because these models are no longer built, or have very poor market performance
		 * they are not incuded in the normal getModels endpoint. Many users itterate through the model names with our new vehicle sales
		 * endpoints and waste some of their quota making self contradictory requests. This endpoint was created to aleviate the use case where
		 * someone requests information on new vehicle sales for a model that has not been sold new for a long, long, time.
		 * These names are used as arguments for other endpoints. The names are generally not case sensitive
		 * when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
		 * Get getInactiveModels
		 * @return {ModelResp} Successful Response
		 */
		GetModelNamesAll_getInactiveModels_get(jwt: string, brandName: string): Observable<ModelResp> {
			return this.http.get<ModelResp>(this.baseUri + 'getInactiveModels?jwt=' + (jwt == null ? '' : encodeURIComponent(jwt)) + '&brandName=' + (brandName == null ? '' : encodeURIComponent(brandName)), {});
		}

		/**
		 * Get a list of model names
		 * Get brand model names for currently active models. This endpoint does not return model names that have been discontinued or have
		 * sold less than 10 vehicles in the last month and a half.
		 * These names are used as arguments for other endpoints. The names are generally not case sensitive
		 * when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
		 * Get getModels
		 * @return {ModelResp} Successful Response
		 */
		GetModelNames_getModels_get(jwt: string, brandName: string): Observable<ModelResp> {
			return this.http.get<ModelResp>(this.baseUri + 'getModels?jwt=' + (jwt == null ? '' : encodeURIComponent(jwt)) + '&brandName=' + (brandName == null ? '' : encodeURIComponent(brandName)), {});
		}

		/**
		 * Market share of a brand in region
		 * Market share of a given brand in a given region by number of vehicles sold over the last 45 days.
		 * Get getRegionBrandMarketShare
		 * @return {GenericResponse} Successful Response
		 */
		GetRegionBrandMarketShare_getRegionBrandMarketShare_get(jwt: string, brandName: string, regionName: string | null | undefined): Observable<GenericResponse> {
			return this.http.get<GenericResponse>(this.baseUri + 'getRegionBrandMarketShare?jwt=' + (jwt == null ? '' : encodeURIComponent(jwt)) + '&brandName=' + (brandName == null ? '' : encodeURIComponent(brandName)) + '&regionName=' + (regionName == null ? '' : encodeURIComponent(regionName)), {});
		}

		/**
		 * Market share of all brands in region
		 * Market share of a all brands in a given region by number of vehicles sold over the last 45 days.
		 * Get getRegionMarketShare
		 * @return {GenericResponse} Successful Response
		 */
		GetRegionMarketShare_getRegionMarketShare_get(jwt: string, regionName: string | null | undefined): Observable<GenericResponse> {
			return this.http.get<GenericResponse>(this.baseUri + 'getRegionMarketShare?jwt=' + (jwt == null ? '' : encodeURIComponent(jwt)) + '&regionName=' + (regionName == null ? '' : encodeURIComponent(regionName)), {});
		}

		/**
		 * Get a list of region names
		 * Get region names. These names are used as arguments for other endpoints. The names are generally not case sensitive
		 * when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
		 * Get getRegions
		 * @return {RegionResp} Successful Response
		 */
		GetRegions_getRegions_get(jwt: string): Observable<RegionResp> {
			return this.http.get<RegionResp>(this.baseUri + 'getRegions?jwt=' + (jwt == null ? '' : encodeURIComponent(jwt)), {});
		}

		/**
		 * Get all Sub User Keys associated with your account.
		 * Get a list of your issued SubUser API Keys. Includes active and revoked keys.
		 * Get getSubUserKeys
		 * @return {GenericResponse} Successful Response
		 */
		GetSubUserKeys_getSubUserKeys_get(apiID: string, apiKey: string): Observable<GenericResponse> {
			return this.http.get<GenericResponse>(this.baseUri + 'getSubUserKeys?apiID=' + (apiID == null ? '' : encodeURIComponent(apiID)) + '&apiKey=' + (apiKey == null ? '' : encodeURIComponent(apiKey)), {});
		}

		/**
		 * Get a JWT from your API credentials
		 * This is the first function you should call.
		 * If you are accessing our API through a third party provider they will handle authenticating to our API for you
		 * and you will not need call this function or retrieve a JSON Web Token.
		 * All other functions require the JSON Web Token (JWT) from this function to
		 * be incuded in their arguments. The value of the "token" field is the actual JWT and any other values in the returned JSON
		 * are metadata there for your convenience. Tokens are valid for a default of 1 hour (3600 seconds). If you try calling an
		 * API endpoint with a missing, invalid, or expired JWT it will return a HTTP 403 code. You would then need to call this end point
		 * to get a new token.
		 * Get getToken
		 * @return {JSONWebToken} Successful Response
		 */
		MakeToken_getToken_get(apiID: string, apiKey: string): Observable<JSONWebToken> {
			return this.http.get<JSONWebToken>(this.baseUri + 'getToken?apiID=' + (apiID == null ? '' : encodeURIComponent(apiID)) + '&apiKey=' + (apiKey == null ? '' : encodeURIComponent(apiKey)), {});
		}

		/**
		 * Get a JWT from your API credentials
		 * This is the first function you should call.
		 * If you are accessing our API through a third party provider they will handle authenticating to our API for you
		 * and you will not need call this function or retrieve a JSON Web Token.
		 * All other functions require the JSON Web Token (JWT) from this function to
		 * be incuded in their arguments. The value of the "token" field is the actual JWT and any other values in the returned JSON
		 * are metadata there for your convenience. Tokens are valid for a default of 1 hour (3600 seconds). If you try calling an
		 * API endpoint with a missing, invalid, or expired JWT it will return a HTTP 403 code. You would then need to call this end point
		 * to get a new token.
		 * Post getToken
		 * @return {JSONWebToken} Successful Response
		 */
		MakeToken_getToken_post(apiID: string, apiKey: string): Observable<JSONWebToken> {
			return this.http.post<JSONWebToken>(this.baseUri + 'getToken?apiID=' + (apiID == null ? '' : encodeURIComponent(apiID)) + '&apiKey=' + (apiKey == null ? '' : encodeURIComponent(apiKey)), null, {});
		}

		/**
		 * Stats on ask price of new vehicles
		 * Average, median, standard deviation, and population variance of the ask price of new vehicles over the last 15 days for a given brand and region.
		 * The available brand and region names can be retrieved from their respective endpoints.
		 * Get listPrice
		 * @return {BasicModelStatsResp} Successful Response
		 */
		GetAvgListPrice_listPrice_get(jwt: string, brandName: string, regionName: string | null | undefined): Observable<BasicModelStatsResp> {
			return this.http.get<BasicModelStatsResp>(this.baseUri + 'listPrice?jwt=' + (jwt == null ? '' : encodeURIComponent(jwt)) + '&brandName=' + (brandName == null ? '' : encodeURIComponent(brandName)) + '&regionName=' + (regionName == null ? '' : encodeURIComponent(regionName)), {});
		}

		/**
		 * Listings by Dealer ID
		 * See /listings2 endpoint for more flexible listing search.
		 * Returns a dealer's listings over the last 45 days by dealer ID. The ID can be found by calling the /getDealers endpoint.
		 * Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
		 * Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
		 * Get listings
		 * @param {number} dealerID Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ListingResp} Successful Response
		 */
		GetListingsByDealer_listings_get(jwt: string, dealerID: number, page: number | null | undefined, newCars: boolean | null | undefined): Observable<ListingResp> {
			return this.http.get<ListingResp>(this.baseUri + 'listings?jwt=' + (jwt == null ? '' : encodeURIComponent(jwt)) + '&dealerID=' + dealerID + '&page=' + page + '&newCars=' + newCars, {});
		}

		/**
		 * Flexible Listing Search
		 * Generic getter for listings supporting a wide array of selection criteria. This is the new primary listing endpoint and we will phase out the older listing endpoints over time.
		 * The other listing endpoints return the same data, but are more restrictive in the available geographic and vehicle selection criteria and can be replicated by this endpoint.
		 * Dealer selection uses the most restrictive criteria supplied. From most restrictive to least: dealerID, gps, zipCode, region. You must provide some dealer selection criteria.
		 * It is important to note that the units in the longitude are in degrees east, not degrees west. For example the coordinates 45.53N, 100.41W correspond to Mobridge, SC
		 * but they will be interpreted as 45.53N, 100.41E which corresponds to a point in the Gobi Desert near Jinst, Mongolia. You can fix this by converting the longitiude yourself,
		 * or by supplying a negative value (-100.41). For this example both (X, -100.41) and (X, 259.59) would be the same point. Units on the radius are miles and a smaller radius will
		 * result in a faster response time. Maximum search radius depends on your subscription plan.
		 * The radius value is used for GPS searches and (optionally) zipCode searches. It is ignored for searches using other location criteria. If you provide a radius value with a zipCode
		 * search, the zipCode will be mapped to GPS coordinates behind the scenes. If no radius is provided or if the zipCode to GPS mapping fails,
		 * the API will only search for vehicles at dealerships within the provided zipCode.
		 * Listing selection logically ANDs all options given.
		 * Time interval selection will prefer explicit start and end dates. If only one of startDate/endDate is supplied, this endpoint will use it
		 * as an anchor and look forward or backwards by the daysBack value. If startDate is specified and endDate is not, then endDate will be set to startDate+daysBack.
		 * Conversely if endDate is specified, but startDate is not then startDate will be set at endDate-daysBack.
		 * If neither is supplied endpoint will set endDate to today and startDate to today-daysBack.
		 * Maximum time interval is 45 days.
		 * Mileage selection uses the provided mileage values and returns vehicles with mileage in the range [mileageLow, mileageHigh].
		 * If mileageLow == mileageHigh (for example both are 0 default) this endpoint will not filter based on mileage. Not all used vehicles have a mileage record available.
		 * ExtendedSearch modifies the slice of listings returned. If false (default) it only returns vehicles satisfying lastSeen >= startDate and lastSeen < endDate.
		 * If true it will return vehicles that were in dealer's inventory at any point between startDate and endDate including vehicles that were sold after endDate.
		 * Setting extendedSearch to true will result in a slower response time.
		 * For example: If both a region name and dealer ID are supplied the dealer ID will be used because it is the most restrictive.
		 * If a brandName of Ford and modelYear of 2019, modelName of F-150, and newCars of False is supplied this endpoint will return
		 * used 2019 model year Ford F-150s. If a contradictory listing selection is supplied (for example Ford + Camry) no listings will be returned
		 * because the request matched no listings.
		 * Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
		 * Get listings2
		 * @param {number} dealerID Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} zipCode Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} latitude Type: double
		 * @param {number} longitude Type: double
		 * @param {number} radius Type: double
		 * @param {number} modelYear Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} mileageLow Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} mileageHigh Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Date} startDate Type: DateOnly
		 * @param {Date} endDate Type: DateOnly
		 * @param {number} daysBack Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ListingResp} Successful Response
		 */
		GetListings2_listings2_get(jwt: string, dealerID: number | null | undefined, zipCode: number | null | undefined, latitude: number | null | undefined, longitude: number | null | undefined, radius: number | null | undefined, regionName: string | null | undefined, brandName: string | null | undefined, modelName: string | null | undefined, modelYear: number | null | undefined, mileageLow: number | null | undefined, mileageHigh: number | null | undefined, startDate: Date | null | undefined, endDate: Date | null | undefined, daysBack: number | null | undefined, page: number | null | undefined, newCars: boolean | null | undefined, extendedSearch: boolean | null | undefined): Observable<ListingResp> {
			return this.http.get<ListingResp>(this.baseUri + 'listings2?jwt=' + (jwt == null ? '' : encodeURIComponent(jwt)) + '&dealerID=' + dealerID + '&zipCode=' + zipCode + '&latitude=' + latitude + '&longitude=' + longitude + '&radius=' + radius + '&regionName=' + (regionName == null ? '' : encodeURIComponent(regionName)) + '&brandName=' + (brandName == null ? '' : encodeURIComponent(brandName)) + '&modelName=' + (modelName == null ? '' : encodeURIComponent(modelName)) + '&modelYear=' + modelYear + '&mileageLow=' + mileageLow + '&mileageHigh=' + mileageHigh + '&startDate=' + startDate?.toISOString() + '&endDate=' + endDate?.toISOString() + '&daysBack=' + daysBack + '&page=' + page + '&newCars=' + newCars + '&extendedSearch=' + extendedSearch, {});
		}

		/**
		 * Listings by Dealer ID and Date
		 * See /listings2 endpoint for more flexible listing search.
		 * Returns a dealer's listings over the given timespan by dealer ID. The ID can be found by calling the /getDealers endpoint.
		 * Maximum time interval between startDate and endDate is 45 days.
		 * Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
		 * Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
		 * Get listingsByDate
		 * @param {number} dealerID Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Date} startDate Type: DateOnly
		 * @param {Date} endDate Type: DateOnly
		 * @param {number} page Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ListingResp} Successful Response
		 */
		GetListingsByDealer_listingsByDate_get(jwt: string, dealerID: number, startDate: Date, endDate: Date, page: number | null | undefined, newCars: boolean | null | undefined): Observable<ListingResp> {
			return this.http.get<ListingResp>(this.baseUri + 'listingsByDate?jwt=' + (jwt == null ? '' : encodeURIComponent(jwt)) + '&dealerID=' + dealerID + '&startDate=' + startDate.toISOString() + '&endDate=' + endDate.toISOString() + '&page=' + page + '&newCars=' + newCars, {});
		}

		/**
		 * Listings by Region
		 * See /listings2 endpoint for more flexible listing search.
		 * Returns a dealer's listings over up to the last 45 days by region.
		 * Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
		 * Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
		 * Get listingsByRegion
		 * @param {number} daysBack Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ListingResp} Successful Response
		 */
		GetListingsByRegion_listingsByRegion_get(jwt: string, regionName: string, modelName: string, daysBack: number | null | undefined, page: number | null | undefined, newCars: boolean | null | undefined): Observable<ListingResp> {
			return this.http.get<ListingResp>(this.baseUri + 'listingsByRegion?jwt=' + (jwt == null ? '' : encodeURIComponent(jwt)) + '&regionName=' + (regionName == null ? '' : encodeURIComponent(regionName)) + '&modelName=' + (modelName == null ? '' : encodeURIComponent(modelName)) + '&daysBack=' + daysBack + '&page=' + page + '&newCars=' + newCars, {});
		}

		/**
		 * Listings by Region and Date
		 * See /listings2 endpoint for more flexible listing search.
		 * Returns listings active in a region in the given date range [startdate, endDate), or in other words dates that satisfy startDate <= X < endDate. Maximum range is 45 days
		 * Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
		 * Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
		 * Get listingsByRegionAndDate
		 * @param {Date} startDate Type: DateOnly
		 * @param {Date} endDate Type: DateOnly
		 * @param {number} page Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ListingResp} Successful Response
		 */
		GetListingsByRegionAndDate_listingsByRegionAndDate_get(jwt: string, regionName: string, modelName: string, startDate: Date, endDate: Date, page: number | null | undefined, newCars: boolean | null | undefined): Observable<ListingResp> {
			return this.http.get<ListingResp>(this.baseUri + 'listingsByRegionAndDate?jwt=' + (jwt == null ? '' : encodeURIComponent(jwt)) + '&regionName=' + (regionName == null ? '' : encodeURIComponent(regionName)) + '&modelName=' + (modelName == null ? '' : encodeURIComponent(modelName)) + '&startDate=' + startDate.toISOString() + '&endDate=' + endDate.toISOString() + '&page=' + page + '&newCars=' + newCars, {});
		}

		/**
		 * Listings by ZipCode
		 * See /listings2 endpoint for more flexible listing search.
		 * Returns a dealer's listings over up to the last 45 days in the provided dealerhip's zip code. For example 92701.
		 * Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
		 * Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
		 * Get listingsByZipCode
		 * @param {number} zipCode Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ListingResp} Successful Response
		 */
		ListingsByZipCode_listingsByZipCode_get(jwt: string, zipCode: number, page: number | null | undefined, newCars: boolean | null | undefined, modelName: string | null | undefined): Observable<ListingResp> {
			return this.http.get<ListingResp>(this.baseUri + 'listingsByZipCode?jwt=' + (jwt == null ? '' : encodeURIComponent(jwt)) + '&zipCode=' + zipCode + '&page=' + page + '&newCars=' + newCars + '&modelName=' + (modelName == null ? '' : encodeURIComponent(modelName)), {});
		}

		/**
		 * Listings by ZipCode and Date
		 * See /listings2 endpoint for more flexible listing search.
		 * Returns a dealer's listings over up to the last 45 days in the provided dealership's zip code. For example 92701.
		 * Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
		 * Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
		 * Get listingsByZipCodeAndDate
		 * @param {number} zipCode Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Date} startDate Type: DateOnly
		 * @param {Date} endDate Type: DateOnly
		 * @param {number} page Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ListingResp} Successful Response
		 */
		ListingsByZipCodeAndDate_listingsByZipCodeAndDate_get(jwt: string, zipCode: number, startDate: Date, endDate: Date, page: number | null | undefined, newCars: boolean | null | undefined, modelName: string | null | undefined): Observable<ListingResp> {
			return this.http.get<ListingResp>(this.baseUri + 'listingsByZipCodeAndDate?jwt=' + (jwt == null ? '' : encodeURIComponent(jwt)) + '&zipCode=' + zipCode + '&startDate=' + startDate.toISOString() + '&endDate=' + endDate.toISOString() + '&page=' + page + '&newCars=' + newCars + '&modelName=' + (modelName == null ? '' : encodeURIComponent(modelName)), {});
		}

		/**
		 * Generate a Sub User Key that can be used by your users to make API calls in frontend applications.
		 * This endpoint is only fully available to users with a paid plan. Users on Basic or Trial plans may only create keys valid on the "localhost" domain.
		 * This endpoint creates an API key that can be embedded in frontend applications such as web pages that allow your users to directly make API calls.
		 * The "endpoints" value is an array of strings that name the allowed endpoints that may be called using the Sub User Key. Passing a "*" value in the array will allow
		 * all endpoints that require a JWT (JSON Web Token) to be called by the Sub User Key. The keys are valid for as long as your account is valid or you revoke the Sub User Key.
		 * All API calls made by the Sub User Keys are billed to your account. Additionally you should not call this endpoint or the /revokeSubUserKey endpoint at a combined rate
		 * higher than once per second.
		 * Post makeSubUserKey
		 * @return {SubUserJSONWebToken} Successful Response
		 */
		MakeSubUserKey_makeSubUserKey_post(apiID: string, apiKey: string, siteName: string | null | undefined, requestBody: EndpointList): Observable<SubUserJSONWebToken> {
			return this.http.post<SubUserJSONWebToken>(this.baseUri + 'makeSubUserKey?apiID=' + (apiID == null ? '' : encodeURIComponent(apiID)) + '&apiKey=' + (apiKey == null ? '' : encodeURIComponent(apiKey)) + '&siteName=' + (siteName == null ? '' : encodeURIComponent(siteName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Used market share of model year by model
		 * Market share of used vehicles over the last 45 days by model and year. All values are relative to vehicles of the same model.
		 * For example: a percentOfMarket value of 25, year of 2017, and modelName of Camry means that 25% of used Camrys on the market
		 * in the given region over the last 45 days were from the 2017 model year.
		 * Get modelYearDist
		 * @return {ModelYearDistResp} Successful Response
		 */
		GetModelUsedDist_modelYearDist_get(jwt: string, modelName: string, brandName: string, regionName: string | null | undefined): Observable<ModelYearDistResp> {
			return this.http.get<ModelYearDistResp>(this.baseUri + 'modelYearDist?jwt=' + (jwt == null ? '' : encodeURIComponent(jwt)) + '&modelName=' + (modelName == null ? '' : encodeURIComponent(modelName)) + '&brandName=' + (brandName == null ? '' : encodeURIComponent(brandName)) + '&regionName=' + (regionName == null ? '' : encodeURIComponent(regionName)), {});
		}

		/**
		 * Brand sales by region and Day
		 * Get regional sales by brand and day. Most recent data is typically only 2 days old for this endpoint.
		 * The Day field is in YYYY-MM-DD format. For example if you wanted sales data from April 5th of 2020 the day field would be '2020-04-05'
		 * Data availability depends on region and goes back up to 2016.
		 * Get regionDailySales
		 * @param {Date} day Type: DateOnly
		 * @return {GenericResponse} Successful Response
		 */
		GetDealerSales_regionDailySales_get(jwt: string, brandName: string, regionName: string, day: Date): Observable<GenericResponse> {
			return this.http.get<GenericResponse>(this.baseUri + 'regionDailySales?jwt=' + (jwt == null ? '' : encodeURIComponent(jwt)) + '&brandName=' + (brandName == null ? '' : encodeURIComponent(brandName)) + '&regionName=' + (regionName == null ? '' : encodeURIComponent(regionName)) + '&day=' + day.toISOString(), {});
		}

		/**
		 * Premium. Brand sales by region and month
		 * Premium. Get regional sales by brand and month, broken down by day. Most recent data is typically only 2 days old for this endpoint.
		 * The month field is in YYYY-MM-DD format. For example if you wanted sales data from April of 2020 the month field would be '2020-04-01'
		 * Data availability depends on region and goes back up to 2016.
		 * Get regionSales
		 * @param {Date} month Type: DateOnly
		 * @return {GenericResponse} Successful Response
		 */
		GetDealerSales_regionSales_get(jwt: string, brandName: string, regionName: string, month: Date): Observable<GenericResponse> {
			return this.http.get<GenericResponse>(this.baseUri + 'regionSales?jwt=' + (jwt == null ? '' : encodeURIComponent(jwt)) + '&brandName=' + (brandName == null ? '' : encodeURIComponent(brandName)) + '&regionName=' + (regionName == null ? '' : encodeURIComponent(regionName)) + '&month=' + month.toISOString(), {});
		}

		/**
		 * Revoke a Sub User Key associated with your account.
		 * Revoke a SubUser API Key with the given UUID. This action can not be undone.
		 * Put revokeSubUserKey
		 * @return {GenericResponse} Successful Response
		 */
		RevokeSubUserKey_revokeSubUserKey_put(apiID: string, apiKey: string, subUserKeyUUID: string): Observable<GenericResponse> {
			return this.http.put<GenericResponse>(this.baseUri + 'revokeSubUserKey?apiID=' + (apiID == null ? '' : encodeURIComponent(apiID)) + '&apiKey=' + (apiKey == null ? '' : encodeURIComponent(apiKey)) + '&subUserKeyUUID=' + (subUserKeyUUID == null ? '' : encodeURIComponent(subUserKeyUUID)), null, {});
		}

		/**
		 * Stats on sale price of new vehicles
		 * Average, median, standard deviation, and population variance of the sale price of new vehicles over the last 15 days for a given brand and region.
		 * The available brand and region names can be retrieved from their respective endpoints.
		 * Get salePrice
		 * @return {BasicModelStatsResp} Successful Response
		 */
		GetAvgSalePrice_salePrice_get(jwt: string, brandName: string, regionName: string | null | undefined): Observable<BasicModelStatsResp> {
			return this.http.get<BasicModelStatsResp>(this.baseUri + 'salePrice?jwt=' + (jwt == null ? '' : encodeURIComponent(jwt)) + '&brandName=' + (brandName == null ? '' : encodeURIComponent(brandName)) + '&regionName=' + (regionName == null ? '' : encodeURIComponent(regionName)), {});
		}

		/**
		 * Histogram of sales price of new vehicles by model
		 * Histogram of the sale price of vehicles over the last 45 days for a given model and region.
		 * Price buckets are grouped in units of $1000
		 * The available brand, model, and region names can be retrieved from their respective endpoints.
		 * Get salePriceHistogram
		 * @return {BucketResp} Successful Response
		 */
		GetModelSaleBuckets_salePriceHistogram_get(jwt: string, modelName: string, brandName: string, regionName: string | null | undefined): Observable<BucketResp> {
			return this.http.get<BucketResp>(this.baseUri + 'salePriceHistogram?jwt=' + (jwt == null ? '' : encodeURIComponent(jwt)) + '&modelName=' + (modelName == null ? '' : encodeURIComponent(modelName)) + '&brandName=' + (brandName == null ? '' : encodeURIComponent(brandName)) + '&regionName=' + (regionName == null ? '' : encodeURIComponent(regionName)), {});
		}

		/**
		 * Premium. Simple Vehicle Market Report
		 * Premium. Provides the average, stdDev, and count, of the sale price and mileage of similar new and used vehicles in a given region based off the provided VIN.
		 * Optionally restricts report to vehicles of the same model year and goes back up to 120 days.
		 * Get similarSalePrice
		 * @param {number} daysBack Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {SimilarSalePriceResp} Successful Response
		 */
		GetMarket3_similarSalePrice_get(jwt: string, vin: string, regionName: string | null | undefined, daysBack: number | null | undefined, sameYear: boolean | null | undefined): Observable<SimilarSalePriceResp> {
			return this.http.get<SimilarSalePriceResp>(this.baseUri + 'similarSalePrice?jwt=' + (jwt == null ? '' : encodeURIComponent(jwt)) + '&vin=' + (vin == null ? '' : encodeURIComponent(vin)) + '&regionName=' + (regionName == null ? '' : encodeURIComponent(regionName)) + '&daysBack=' + daysBack + '&sameYear=' + sameYear, {});
		}

		/**
		 * Top models in a given region
		 * Sales ranking of different models by region over the last 45 days.
		 * The <strong>percentOfTopSales</strong> value is the percent of the top seller the model represents.
		 * For example: a value of 80% means that model sold 8 vehicles for every 10 of the top model sold.
		 * The other fields represent the model percent of X. The <strong>brandMarketShare</strong> field is that brand's market share of the region
		 * over the report's time interval.
		 * Get topModels
		 * @return {TopModelResp} Successful Response
		 */
		GetTopModels_topModels_get(jwt: string, regionName: string | null | undefined): Observable<TopModelResp> {
			return this.http.get<TopModelResp>(this.baseUri + 'topModels?jwt=' + (jwt == null ? '' : encodeURIComponent(jwt)) + '&regionName=' + (regionName == null ? '' : encodeURIComponent(regionName)), {});
		}

		/**
		 * Premium. Simple Vehicle Market Report Over Arbitrary Locations and Vehicles.
		 * Premium. Provides the average, stdDev, and count, of the sale price and mileage of similar new or used vehicles based off the provided VIN
		 * and matching the provided other search criteria. This endpoint can be easily used to determine market values in arbitrary geographic locations (like a city)
		 * for specific vehicles.
		 * See /listings2 endpoint for documentation on location, vehicle, and time search parameters.
		 * Date selection is restricted by your subscription tier, same as with the /listings2 endpoint.
		 * Optionally restricts report to vehicles of the same model year.
		 * Get valuation
		 * @param {number} dealerID Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} zipCode Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} latitude Type: double
		 * @param {number} longitude Type: double
		 * @param {number} radius Type: double
		 * @param {number} mileageLow Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} mileageHigh Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Date} startDate Type: DateOnly
		 * @param {Date} endDate Type: DateOnly
		 * @param {number} daysBack Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {SimilarSalePriceResp} Successful Response
		 */
		GetMarket4_valuation_get(jwt: string, vin: string, dealerID: number | null | undefined, zipCode: number | null | undefined, latitude: number | null | undefined, longitude: number | null | undefined, radius: number | null | undefined, regionName: string | null | undefined, mileageLow: number | null | undefined, mileageHigh: number | null | undefined, startDate: Date | null | undefined, endDate: Date | null | undefined, daysBack: number | null | undefined, newCars: boolean | null | undefined, extendedSearch: boolean | null | undefined, sameYear: boolean | null | undefined): Observable<SimilarSalePriceResp> {
			return this.http.get<SimilarSalePriceResp>(this.baseUri + 'valuation?jwt=' + (jwt == null ? '' : encodeURIComponent(jwt)) + '&vin=' + (vin == null ? '' : encodeURIComponent(vin)) + '&dealerID=' + dealerID + '&zipCode=' + zipCode + '&latitude=' + latitude + '&longitude=' + longitude + '&radius=' + radius + '&regionName=' + (regionName == null ? '' : encodeURIComponent(regionName)) + '&mileageLow=' + mileageLow + '&mileageHigh=' + mileageHigh + '&startDate=' + startDate?.toISOString() + '&endDate=' + endDate?.toISOString() + '&daysBack=' + daysBack + '&newCars=' + newCars + '&extendedSearch=' + extendedSearch + '&sameYear=' + sameYear, {});
		}

		/**
		 * Premium. Simple Vehicle History Report
		 * Premium. Provides a simple report detailing a vechicle's sales history at dealerships. Data includes the name of the dealership, dates it was for sale,
		 * price, new/used condition, mileage, dealership state, and dealership zip code. Data availability goes back to early 2016.
		 * If your use case involves checking if a vehicle has appeared on the open market on or after a given date see
		 * the /vehicleSeen endpoint.
		 * Get vehicleHistory
		 * @return {HistoryResp} Successful Response
		 */
		GetHistory2_vehicleHistory_get(jwt: string, vin: string): Observable<HistoryResp> {
			return this.http.get<HistoryResp>(this.baseUri + 'vehicleHistory?jwt=' + (jwt == null ? '' : encodeURIComponent(jwt)) + '&vin=' + (vin == null ? '' : encodeURIComponent(vin)), {});
		}

		/**
		 * Checks if a VIN appeared on the market on or after a given date.
		 * Checks our database to see if we have data on a VIN that appeared on the open market on or after the given date with a True/False response.
		 * This endpoint is more cost effective than the /vehicleHistory endpoint if your use case
		 * requires searching a large list of vehicles with a low individual likelyhood of appearing on the open market. (For example searching for a specific stolen vehicle).
		 * Get vehicleSeen
		 * @param {Date} afterDate Type: DateOnly
		 * @return {BooleanResp} Successful Response
		 */
		GetVehicleSeen_vehicleSeen_get(jwt: string, vin: string, afterDate: Date): Observable<BooleanResp> {
			return this.http.get<BooleanResp>(this.baseUri + 'vehicleSeen?jwt=' + (jwt == null ? '' : encodeURIComponent(jwt)) + '&vin=' + (vin == null ? '' : encodeURIComponent(vin)) + '&afterDate=' + afterDate.toISOString(), {});
		}

		/**
		 * Vin decoder and Recall Info
		 * Decodes the provided North American vin and provides recall information if available.
		 * We require at least the first 12 out of 17 characters in the vin to attempt a decode. The vin is not case sensitive.
		 * If passEmpty (default False) is True we will also include the empty fields in the response json.
		 * If includeRecall (default True) is True we will include recall data reported to the NHTSA. Set False for a faster response.
		 * Get vinDecode
		 * @return {GenericResponse} Successful Response
		 */
		VinDecode_vinDecode_get(jwt: string, vin: string, passEmpty: boolean | null | undefined, includeRecall: boolean | null | undefined): Observable<GenericResponse> {
			return this.http.get<GenericResponse>(this.baseUri + 'vinDecode?jwt=' + (jwt == null ? '' : encodeURIComponent(jwt)) + '&vin=' + (vin == null ? '' : encodeURIComponent(vin)) + '&passEmpty=' + passEmpty + '&includeRecall=' + includeRecall, {});
		}
	}

}

