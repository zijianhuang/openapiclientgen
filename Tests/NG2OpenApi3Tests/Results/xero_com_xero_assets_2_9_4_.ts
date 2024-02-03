import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Asset {

		/** The accounting value of the asset */
		accountingBookValue?: number | null;

		/** The Xero-generated Id for the asset */
		assetId?: string | null;

		/**
		 * The name of the asset
		 * Required
		 */
		assetName: string;

		/** Must be unique. */
		assetNumber?: string | null;

		/** See Asset Status Codes. */
		assetStatus?: AssetAssetStatus | null;

		/** The Xero-generated Id for the asset type */
		assetTypeId?: string | null;
		bookDepreciationDetail?: BookDepreciationDetail;
		bookDepreciationSetting?: BookDepreciationSetting;

		/** Boolean to indicate whether depreciation can be rolled back for this asset individually. This is true if it doesn't have 'legacy' journal entries and if there is no lock period that would prevent this asset from rolling back. */
		canRollback?: boolean | null;

		/** The date the asset was disposed */
		disposalDate?: Date | null;

		/** The price the asset was disposed at */
		disposalPrice?: number | null;

		/** Boolean to indicate whether delete is enabled */
		isDeleteEnabledForDate?: boolean | null;

		/** The date the asset was purchased YYYY-MM-DD */
		purchaseDate?: Date | null;

		/** The purchase price of the asset */
		purchasePrice?: number | null;

		/** The asset's serial number */
		serialNumber?: string | null;

		/** The date the asset’s warranty expires (if needed) YYYY-MM-DD */
		warrantyExpiryDate?: string | null;
	}
	export interface AssetFormProperties {

		/** The accounting value of the asset */
		accountingBookValue: FormControl<number | null | undefined>,

		/** The Xero-generated Id for the asset */
		assetId: FormControl<string | null | undefined>,

		/**
		 * The name of the asset
		 * Required
		 */
		assetName: FormControl<string | null | undefined>,

		/** Must be unique. */
		assetNumber: FormControl<string | null | undefined>,

		/** See Asset Status Codes. */
		assetStatus: FormControl<AssetAssetStatus | null | undefined>,

		/** The Xero-generated Id for the asset type */
		assetTypeId: FormControl<string | null | undefined>,

		/** Boolean to indicate whether depreciation can be rolled back for this asset individually. This is true if it doesn't have 'legacy' journal entries and if there is no lock period that would prevent this asset from rolling back. */
		canRollback: FormControl<boolean | null | undefined>,

		/** The date the asset was disposed */
		disposalDate: FormControl<Date | null | undefined>,

		/** The price the asset was disposed at */
		disposalPrice: FormControl<number | null | undefined>,

		/** Boolean to indicate whether delete is enabled */
		isDeleteEnabledForDate: FormControl<boolean | null | undefined>,

		/** The date the asset was purchased YYYY-MM-DD */
		purchaseDate: FormControl<Date | null | undefined>,

		/** The purchase price of the asset */
		purchasePrice: FormControl<number | null | undefined>,

		/** The asset's serial number */
		serialNumber: FormControl<string | null | undefined>,

		/** The date the asset’s warranty expires (if needed) YYYY-MM-DD */
		warrantyExpiryDate: FormControl<string | null | undefined>,
	}
	export function CreateAssetFormGroup() {
		return new FormGroup<AssetFormProperties>({
			accountingBookValue: new FormControl<number | null | undefined>(undefined),
			assetId: new FormControl<string | null | undefined>(undefined),
			assetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assetNumber: new FormControl<string | null | undefined>(undefined),
			assetStatus: new FormControl<AssetAssetStatus | null | undefined>(undefined),
			assetTypeId: new FormControl<string | null | undefined>(undefined),
			canRollback: new FormControl<boolean | null | undefined>(undefined),
			disposalDate: new FormControl<Date | null | undefined>(undefined),
			disposalPrice: new FormControl<number | null | undefined>(undefined),
			isDeleteEnabledForDate: new FormControl<boolean | null | undefined>(undefined),
			purchaseDate: new FormControl<Date | null | undefined>(undefined),
			purchasePrice: new FormControl<number | null | undefined>(undefined),
			serialNumber: new FormControl<string | null | undefined>(undefined),
			warrantyExpiryDate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AssetAssetStatus { Draft = 'Draft', Registered = 'Registered', Disposed = 'Disposed' }


	/** See Asset Status Codes. */
	export enum AssetStatus { Draft = 'Draft', Registered = 'Registered', Disposed = 'Disposed' }


	/** See Asset Status Codes. */
	export enum AssetStatusQueryParam { DRAFT = 'DRAFT', REGISTERED = 'REGISTERED', DISPOSED = 'DISPOSED' }

	export interface AssetType {

		/** The account for accumulated depreciation of fixed assets of this type */
		accumulatedDepreciationAccountId?: string | null;

		/** Xero generated unique identifier for asset types */
		assetTypeId?: string | null;

		/**
		 * The name of the asset type
		 * Required
		 */
		assetTypeName: string;

		/** Required */
		bookDepreciationSetting: BookDepreciationSetting;

		/** The expense account for the depreciation of fixed assets of this type */
		depreciationExpenseAccountId?: string | null;

		/** The asset account for fixed assets of this type */
		fixedAssetAccountId?: string | null;

		/** All asset types that have accumulated depreciation for any assets that use them are deemed ‘locked’ and cannot be removed. */
		locks?: number | null;
	}
	export interface AssetTypeFormProperties {

		/** The account for accumulated depreciation of fixed assets of this type */
		accumulatedDepreciationAccountId: FormControl<string | null | undefined>,

		/** Xero generated unique identifier for asset types */
		assetTypeId: FormControl<string | null | undefined>,

		/**
		 * The name of the asset type
		 * Required
		 */
		assetTypeName: FormControl<string | null | undefined>,

		/** The expense account for the depreciation of fixed assets of this type */
		depreciationExpenseAccountId: FormControl<string | null | undefined>,

		/** The asset account for fixed assets of this type */
		fixedAssetAccountId: FormControl<string | null | undefined>,

		/** All asset types that have accumulated depreciation for any assets that use them are deemed ‘locked’ and cannot be removed. */
		locks: FormControl<number | null | undefined>,
	}
	export function CreateAssetTypeFormGroup() {
		return new FormGroup<AssetTypeFormProperties>({
			accumulatedDepreciationAccountId: new FormControl<string | null | undefined>(undefined),
			assetTypeId: new FormControl<string | null | undefined>(undefined),
			assetTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			depreciationExpenseAccountId: new FormControl<string | null | undefined>(undefined),
			fixedAssetAccountId: new FormControl<string | null | undefined>(undefined),
			locks: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Assets {
		items?: Array<Asset>;
		pagination?: Pagination;
	}
	export interface AssetsFormProperties {
	}
	export function CreateAssetsFormGroup() {
		return new FormGroup<AssetsFormProperties>({
		});

	}

	export interface BookDepreciationDetail {

		/** The value of the asset you want to depreciate, if this is less than the cost of the asset. */
		costLimit?: number | null;

		/** All depreciation occurring in the current financial year. */
		currentAccumDepreciationAmount?: number | null;

		/** When an asset is disposed, this will be the sell price minus the purchase price if a profit was made. */
		currentCapitalGain?: number | null;

		/** When an asset is disposed, this will be the lowest one of sell price or purchase price, minus the current book value. */
		currentGainLoss?: number | null;

		/** YYYY-MM-DD */
		depreciationStartDate?: Date | null;

		/** All depreciation prior to the current financial year. */
		priorAccumDepreciationAmount?: number | null;

		/** The value of the asset remaining when you've fully depreciated it. */
		residualValue?: number | null;
	}
	export interface BookDepreciationDetailFormProperties {

		/** The value of the asset you want to depreciate, if this is less than the cost of the asset. */
		costLimit: FormControl<number | null | undefined>,

		/** All depreciation occurring in the current financial year. */
		currentAccumDepreciationAmount: FormControl<number | null | undefined>,

		/** When an asset is disposed, this will be the sell price minus the purchase price if a profit was made. */
		currentCapitalGain: FormControl<number | null | undefined>,

		/** When an asset is disposed, this will be the lowest one of sell price or purchase price, minus the current book value. */
		currentGainLoss: FormControl<number | null | undefined>,

		/** YYYY-MM-DD */
		depreciationStartDate: FormControl<Date | null | undefined>,

		/** All depreciation prior to the current financial year. */
		priorAccumDepreciationAmount: FormControl<number | null | undefined>,

		/** The value of the asset remaining when you've fully depreciated it. */
		residualValue: FormControl<number | null | undefined>,
	}
	export function CreateBookDepreciationDetailFormGroup() {
		return new FormGroup<BookDepreciationDetailFormProperties>({
			costLimit: new FormControl<number | null | undefined>(undefined),
			currentAccumDepreciationAmount: new FormControl<number | null | undefined>(undefined),
			currentCapitalGain: new FormControl<number | null | undefined>(undefined),
			currentGainLoss: new FormControl<number | null | undefined>(undefined),
			depreciationStartDate: new FormControl<Date | null | undefined>(undefined),
			priorAccumDepreciationAmount: new FormControl<number | null | undefined>(undefined),
			residualValue: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BookDepreciationSetting {

		/** The method of averaging applied to this asset. See Averaging Methods */
		averagingMethod?: BookDepreciationSettingAveragingMethod | null;

		/** Unique Xero identifier for the effective date change */
		bookEffectiveDateOfChangeId?: string | null;

		/** Unique Xero identifier for the depreciable object */
		depreciableObjectId?: string | null;

		/** The type of asset object */
		depreciableObjectType?: string | null;

		/** See Depreciation Calculation Methods */
		depreciationCalculationMethod?: BookDepreciationSettingDepreciationCalculationMethod | null;

		/** The method of depreciation applied to this asset. See Depreciation Methods */
		depreciationMethod?: BookDepreciationSettingDepreciationMethod | null;

		/** The rate of depreciation (e.g. 0.05) */
		depreciationRate?: number | null;

		/** Effective life of the asset in years (e.g. 5) */
		effectiveLifeYears?: number | null;
	}
	export interface BookDepreciationSettingFormProperties {

		/** The method of averaging applied to this asset. See Averaging Methods */
		averagingMethod: FormControl<BookDepreciationSettingAveragingMethod | null | undefined>,

		/** Unique Xero identifier for the effective date change */
		bookEffectiveDateOfChangeId: FormControl<string | null | undefined>,

		/** Unique Xero identifier for the depreciable object */
		depreciableObjectId: FormControl<string | null | undefined>,

		/** The type of asset object */
		depreciableObjectType: FormControl<string | null | undefined>,

		/** See Depreciation Calculation Methods */
		depreciationCalculationMethod: FormControl<BookDepreciationSettingDepreciationCalculationMethod | null | undefined>,

		/** The method of depreciation applied to this asset. See Depreciation Methods */
		depreciationMethod: FormControl<BookDepreciationSettingDepreciationMethod | null | undefined>,

		/** The rate of depreciation (e.g. 0.05) */
		depreciationRate: FormControl<number | null | undefined>,

		/** Effective life of the asset in years (e.g. 5) */
		effectiveLifeYears: FormControl<number | null | undefined>,
	}
	export function CreateBookDepreciationSettingFormGroup() {
		return new FormGroup<BookDepreciationSettingFormProperties>({
			averagingMethod: new FormControl<BookDepreciationSettingAveragingMethod | null | undefined>(undefined),
			bookEffectiveDateOfChangeId: new FormControl<string | null | undefined>(undefined),
			depreciableObjectId: new FormControl<string | null | undefined>(undefined),
			depreciableObjectType: new FormControl<string | null | undefined>(undefined),
			depreciationCalculationMethod: new FormControl<BookDepreciationSettingDepreciationCalculationMethod | null | undefined>(undefined),
			depreciationMethod: new FormControl<BookDepreciationSettingDepreciationMethod | null | undefined>(undefined),
			depreciationRate: new FormControl<number | null | undefined>(undefined),
			effectiveLifeYears: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum BookDepreciationSettingAveragingMethod { FullMonth = 'FullMonth', ActualDays = 'ActualDays' }

	export enum BookDepreciationSettingDepreciationCalculationMethod { Rate = 'Rate', Life = 'Life', None = 'None' }

	export enum BookDepreciationSettingDepreciationMethod { NoDepreciation = 'NoDepreciation', StraightLine = 'StraightLine', DiminishingValue100 = 'DiminishingValue100', DiminishingValue150 = 'DiminishingValue150', DiminishingValue200 = 'DiminishingValue200', FullDepreciation = 'FullDepreciation' }

	export interface Error {

		/** Detail of the error */
		detail?: string | null;

		/** Array of elements of field validation errors */
		fieldValidationErrors?: Array<FieldValidationErrorsElement>;

		/** Array of elements of resource validation errors */
		resourceValidationErrors?: Array<ResourceValidationErrorsElement>;

		/** Title of the error */
		title?: string | null;

		/** The internal type of error, not accessible externally */
		type?: string | null;
	}
	export interface ErrorFormProperties {

		/** Detail of the error */
		detail: FormControl<string | null | undefined>,

		/** Title of the error */
		title: FormControl<string | null | undefined>,

		/** The internal type of error, not accessible externally */
		type: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FieldValidationErrorsElement {

		/** Detail of the field validation error */
		detail?: string | null;

		/** The field name of the erroneous field */
		fieldName?: string | null;

		/** Explanation of the field validation error */
		localisedMessage?: string | null;

		/** Title of the field validation error */
		title?: string | null;

		/** Internal type of the field validation error message */
		type?: string | null;

		/** The provided value */
		valueProvided?: string | null;
	}
	export interface FieldValidationErrorsElementFormProperties {

		/** Detail of the field validation error */
		detail: FormControl<string | null | undefined>,

		/** The field name of the erroneous field */
		fieldName: FormControl<string | null | undefined>,

		/** Explanation of the field validation error */
		localisedMessage: FormControl<string | null | undefined>,

		/** Title of the field validation error */
		title: FormControl<string | null | undefined>,

		/** Internal type of the field validation error message */
		type: FormControl<string | null | undefined>,

		/** The provided value */
		valueProvided: FormControl<string | null | undefined>,
	}
	export function CreateFieldValidationErrorsElementFormGroup() {
		return new FormGroup<FieldValidationErrorsElementFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			fieldName: new FormControl<string | null | undefined>(undefined),
			localisedMessage: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			valueProvided: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceValidationErrorsElement {

		/** Detail of the resource validation error */
		detail?: string | null;

		/** Explanation of the resource validation error */
		localisedMessage?: string | null;

		/** The field name of the erroneous field */
		resourceName?: string | null;

		/** Title of the resource validation error */
		title?: string | null;

		/** Internal type of the resource error message */
		type?: string | null;
	}
	export interface ResourceValidationErrorsElementFormProperties {

		/** Detail of the resource validation error */
		detail: FormControl<string | null | undefined>,

		/** Explanation of the resource validation error */
		localisedMessage: FormControl<string | null | undefined>,

		/** The field name of the erroneous field */
		resourceName: FormControl<string | null | undefined>,

		/** Title of the resource validation error */
		title: FormControl<string | null | undefined>,

		/** Internal type of the resource error message */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceValidationErrorsElementFormGroup() {
		return new FormGroup<ResourceValidationErrorsElementFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			localisedMessage: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pagination {
		itemCount?: number | null;
		page?: number | null;
		pageCount?: number | null;
		pageSize?: number | null;
	}
	export interface PaginationFormProperties {
		itemCount: FormControl<number | null | undefined>,
		page: FormControl<number | null | undefined>,
		pageCount: FormControl<number | null | undefined>,
		pageSize: FormControl<number | null | undefined>,
	}
	export function CreatePaginationFormGroup() {
		return new FormGroup<PaginationFormProperties>({
			itemCount: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			pageCount: new FormControl<number | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Setting {

		/** The prefix used for fixed asset numbers (“FA-” by default) */
		assetNumberPrefix?: string | null;

		/** The next available sequence number */
		assetNumberSequence?: string | null;

		/** The date depreciation calculations started on registered fixed assets in Xero */
		assetStartDate?: Date | null;

		/** Default account that capital gains are posted to */
		defaultCapitalGainOnDisposalAccountId?: string | null;

		/** Default account that gains are posted to */
		defaultGainOnDisposalAccountId?: string | null;

		/** Default account that losses are posted to */
		defaultLossOnDisposalAccountId?: string | null;

		/** The last depreciation date */
		lastDepreciationDate?: Date | null;

		/** opt in for tax calculation */
		optInForTax?: boolean | null;
	}
	export interface SettingFormProperties {

		/** The prefix used for fixed asset numbers (“FA-” by default) */
		assetNumberPrefix: FormControl<string | null | undefined>,

		/** The next available sequence number */
		assetNumberSequence: FormControl<string | null | undefined>,

		/** The date depreciation calculations started on registered fixed assets in Xero */
		assetStartDate: FormControl<Date | null | undefined>,

		/** Default account that capital gains are posted to */
		defaultCapitalGainOnDisposalAccountId: FormControl<string | null | undefined>,

		/** Default account that gains are posted to */
		defaultGainOnDisposalAccountId: FormControl<string | null | undefined>,

		/** Default account that losses are posted to */
		defaultLossOnDisposalAccountId: FormControl<string | null | undefined>,

		/** The last depreciation date */
		lastDepreciationDate: FormControl<Date | null | undefined>,

		/** opt in for tax calculation */
		optInForTax: FormControl<boolean | null | undefined>,
	}
	export function CreateSettingFormGroup() {
		return new FormGroup<SettingFormProperties>({
			assetNumberPrefix: new FormControl<string | null | undefined>(undefined),
			assetNumberSequence: new FormControl<string | null | undefined>(undefined),
			assetStartDate: new FormControl<Date | null | undefined>(undefined),
			defaultCapitalGainOnDisposalAccountId: new FormControl<string | null | undefined>(undefined),
			defaultGainOnDisposalAccountId: new FormControl<string | null | undefined>(undefined),
			defaultLossOnDisposalAccountId: new FormControl<string | null | undefined>(undefined),
			lastDepreciationDate: new FormControl<Date | null | undefined>(undefined),
			optInForTax: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * searches fixed asset types
		 * By passing in the appropriate options, you can search for available fixed asset types in the system
		 * Get AssetTypes
		 * @return {Array<AssetType>} search results matching criteria
		 */
		GetAssetTypes(): Observable<Array<AssetType>> {
			return this.http.get<Array<AssetType>>(this.baseUri + 'AssetTypes', {});
		}

		/**
		 * adds a fixed asset type
		 * Adds an fixed asset type to the system
		 * Post AssetTypes
		 * @param {AssetType} requestBody Asset type to add
		 * @return {AssetType} results single object -  created fixed type
		 */
		CreateAssetType(requestBody: AssetType): Observable<AssetType> {
			return this.http.post<AssetType>(this.baseUri + 'AssetTypes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * searches fixed asset
		 * By passing in the appropriate options, you can search for available fixed asset in the system
		 * Get Assets
		 * @param {AssetStatusQueryParam} status Required when retrieving a collection of assets. See Asset Status Codes
		 * @param {number} page Results are paged. This specifies which page of the results to return. The default page is 1.
		 * @param {number} pageSize The number of records returned per page. By default the number of records returned is 10.
		 * @param {GetAssetsOrderBy} orderBy Requests can be ordered by AssetType, AssetName, AssetNumber, PurchaseDate and PurchasePrice. If the asset status is DISPOSED it also allows DisposalDate and DisposalPrice.
		 * @param {GetAssetsSortDirection} sortDirection ASC or DESC
		 * @param {string} filterBy A string that can be used to filter the list to only return assets containing the text. Checks it against the AssetName, AssetNumber, Description and AssetTypeName fields.
		 * @return {Assets} search results matching criteria
		 */
		GetAssets(status: AssetStatusQueryParam, page: number | null | undefined, pageSize: number | null | undefined, orderBy: GetAssetsOrderBy | null | undefined, sortDirection: GetAssetsSortDirection | null | undefined, filterBy: string | null | undefined): Observable<Assets> {
			return this.http.get<Assets>(this.baseUri + 'Assets?status=' + status + '&page=' + page + '&pageSize=' + pageSize + '&orderBy=' + orderBy + '&sortDirection=' + sortDirection + '&filterBy=' + (filterBy == null ? '' : encodeURIComponent(filterBy)), {});
		}

		/**
		 * adds a fixed asset
		 * Adds an asset to the system
		 * Post Assets
		 * @param {Asset} requestBody Fixed asset you are creating
		 * @return {Asset} return single object - create new asset
		 */
		CreateAsset(requestBody: Asset): Observable<Asset> {
			return this.http.post<Asset>(this.baseUri + 'Assets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves fixed asset by id
		 * By passing in the appropriate asset id, you can search for
		 * a specific fixed asset in the system
		 * Get Assets/{id}
		 * @param {string} id fixed asset id for single object
		 * @return {Asset} search results matching criteria
		 */
		GetAssetById(id: string): Observable<Asset> {
			return this.http.get<Asset>(this.baseUri + 'Assets/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * searches fixed asset settings
		 * By passing in the appropriate options, you can search for available fixed asset types in the system
		 * Get Settings
		 * @return {Setting} search results matching criteria
		 */
		GetAssetSettings(): Observable<Setting> {
			return this.http.get<Setting>(this.baseUri + 'Settings', {});
		}
	}

	export enum GetAssetsOrderBy { AssetType = 'AssetType', AssetName = 'AssetName', AssetNumber = 'AssetNumber', PurchaseDate = 'PurchaseDate', PurchasePrice = 'PurchasePrice', DisposalDate = 'DisposalDate', DisposalPrice = 'DisposalPrice' }

	export enum GetAssetsSortDirection { asc = 'asc', desc = 'desc' }

}

