import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface License {

		/** If set to 'false', the License is disabled. License can be re-enabled, but as long as it is disabled, the License is excluded from the validation process. */
		active?: boolean | null;

		/** Specifies currency for the License price. Check data types to discover which currencies are supported. Read-only, set from License Template on creation. */
		currency?: string | null;

		/** If set to 'true', this License is not shown in NetLicensing Shop as purchased License. Set from License Template on creation, if not specified explicitly. */
		hidden?: boolean | null;

		/** Name for the Licensed item. Set from License Template on creation, if not specified explicitly. */
		name?: string | null;

		/** Unique number (across all Products/Licensees of a Vendor) that identifies the License. Vendor can assign this number when creating a License or let NetLicensing generate one. Read-only after corresponding creation Transaction status is set to closed. */
		number?: string | null;

		/** 'price' for the License. If >0, it must always be accompanied by the currency specification. Read-only, set from License Template on creation. */
		price?: number | null;
	}
	export interface LicenseFormProperties {

		/** If set to 'false', the License is disabled. License can be re-enabled, but as long as it is disabled, the License is excluded from the validation process. */
		active: FormControl<boolean | null | undefined>,

		/** Specifies currency for the License price. Check data types to discover which currencies are supported. Read-only, set from License Template on creation. */
		currency: FormControl<string | null | undefined>,

		/** If set to 'true', this License is not shown in NetLicensing Shop as purchased License. Set from License Template on creation, if not specified explicitly. */
		hidden: FormControl<boolean | null | undefined>,

		/** Name for the Licensed item. Set from License Template on creation, if not specified explicitly. */
		name: FormControl<string | null | undefined>,

		/** Unique number (across all Products/Licensees of a Vendor) that identifies the License. Vendor can assign this number when creating a License or let NetLicensing generate one. Read-only after corresponding creation Transaction status is set to closed. */
		number: FormControl<string | null | undefined>,

		/** 'price' for the License. If >0, it must always be accompanied by the currency specification. Read-only, set from License Template on creation. */
		price: FormControl<number | null | undefined>,
	}
	export function CreateLicenseFormGroup() {
		return new FormGroup<LicenseFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			hidden: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface LicenseTemplate {

		/** If set to 'false', the License Template is disabled. Licensee can not obtain any new Licenses off this License Template. */
		active?: boolean | null;

		/** If set to 'true', every new Licensee automatically gets one License out of this License Template on creation. Automatic Licenses must have their price set to 0. */
		automatic?: boolean | null;

		/** Specifies currency for the License price. Check data types to discover which currencies are supported. */
		currency?: string | null;

		/** If set to 'true', this License Template is not shown in NetLicensing Shop as offered for purchase. */
		hidden?: boolean | null;

		/** If set to 'true', Licenses from this License Template are not visible to the end customer, but participate in validation. */
		hiddenLicenses?: boolean | null;

		/** Type of Licenses created from this License Template */
		licenseType?: LicenseTemplateLicenseType | null;

		/** Name for the Licensed item. */
		name?: string | null;

		/** Unique number (across all Product of a Vendor) that identifies the License Template. Vendor can assign this number when creating a License Template or let NetLicensing generate one. Read-only after creation of the first License from this License Template. */
		number?: string | null;

		/** 'price' for the License. If >0, it must always be accompanied by the currency specification. */
		price?: number | null;
	}
	export interface LicenseTemplateFormProperties {

		/** If set to 'false', the License Template is disabled. Licensee can not obtain any new Licenses off this License Template. */
		active: FormControl<boolean | null | undefined>,

		/** If set to 'true', every new Licensee automatically gets one License out of this License Template on creation. Automatic Licenses must have their price set to 0. */
		automatic: FormControl<boolean | null | undefined>,

		/** Specifies currency for the License price. Check data types to discover which currencies are supported. */
		currency: FormControl<string | null | undefined>,

		/** If set to 'true', this License Template is not shown in NetLicensing Shop as offered for purchase. */
		hidden: FormControl<boolean | null | undefined>,

		/** If set to 'true', Licenses from this License Template are not visible to the end customer, but participate in validation. */
		hiddenLicenses: FormControl<boolean | null | undefined>,

		/** Type of Licenses created from this License Template */
		licenseType: FormControl<LicenseTemplateLicenseType | null | undefined>,

		/** Name for the Licensed item. */
		name: FormControl<string | null | undefined>,

		/** Unique number (across all Product of a Vendor) that identifies the License Template. Vendor can assign this number when creating a License Template or let NetLicensing generate one. Read-only after creation of the first License from this License Template. */
		number: FormControl<string | null | undefined>,

		/** 'price' for the License. If >0, it must always be accompanied by the currency specification. */
		price: FormControl<number | null | undefined>,
	}
	export function CreateLicenseTemplateFormGroup() {
		return new FormGroup<LicenseTemplateFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			automatic: new FormControl<boolean | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			hidden: new FormControl<boolean | null | undefined>(undefined),
			hiddenLicenses: new FormControl<boolean | null | undefined>(undefined),
			licenseType: new FormControl<LicenseTemplateLicenseType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum LicenseTemplateLicenseType { FEATURE = 'FEATURE', TIMEVOLUME = 'TIMEVOLUME' }

	export interface Licensee {

		/** If set to 'false', the Licensee is disabled. Licensee can not obtain new Licenses, and validation is disabled. */
		active?: boolean | null;

		/** Unique number (across all Products of a Vendor) that identifies the Licensee. Vendor can assign this number when creating a Licensee or let NetLicensing generate one. Read-only after creation of the first License for the Licensee. */
		number?: string | null;
	}
	export interface LicenseeFormProperties {

		/** If set to 'false', the Licensee is disabled. Licensee can not obtain new Licenses, and validation is disabled. */
		active: FormControl<boolean | null | undefined>,

		/** Unique number (across all Products of a Vendor) that identifies the Licensee. Vendor can assign this number when creating a Licensee or let NetLicensing generate one. Read-only after creation of the first License for the Licensee. */
		number: FormControl<string | null | undefined>,
	}
	export function CreateLicenseeFormGroup() {
		return new FormGroup<LicenseeFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PaymentMethod {
		active?: boolean | null;
		number?: string | null;
	}
	export interface PaymentMethodFormProperties {
		active: FormControl<boolean | null | undefined>,
		number: FormControl<string | null | undefined>,
	}
	export function CreatePaymentMethodFormGroup() {
		return new FormGroup<PaymentMethodFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Product {

		/** If set to 'false', the Product is disabled. No new Licensees can be registered for the Product, existing Licensees can not obtain new Licenses */
		active?: boolean | null;

		/** If set to 'true', non-existing Licensees will be created at first validation attempt. */
		licenseeAutoCreate?: boolean | null;

		/** Product name. Together with the version identifies the Product for the end customer */
		name?: string | null;

		/** Unique number that identifies the Product. Vendor can assign this number when creating a Product or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product. */
		number?: string | null;

		/** Product version. Convenience parameter, additional to the Product name. */
		version?: string | null;
	}
	export interface ProductFormProperties {

		/** If set to 'false', the Product is disabled. No new Licensees can be registered for the Product, existing Licensees can not obtain new Licenses */
		active: FormControl<boolean | null | undefined>,

		/** If set to 'true', non-existing Licensees will be created at first validation attempt. */
		licenseeAutoCreate: FormControl<boolean | null | undefined>,

		/** Product name. Together with the version identifies the Product for the end customer */
		name: FormControl<string | null | undefined>,

		/** Unique number that identifies the Product. Vendor can assign this number when creating a Product or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product. */
		number: FormControl<string | null | undefined>,

		/** Product version. Convenience parameter, additional to the Product name. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateProductFormGroup() {
		return new FormGroup<ProductFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			licenseeAutoCreate: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductModule {

		/** If set to 'false', the Product Module is disabled. Licensees can not obtain any new Licenses for this Product Module. */
		active?: boolean | null;

		/** Licensing model applied to this Product Module. Defines what License Templates can be configured for the Product Module and how Licenses for this Product Module are processed during validation. */
		licensingInfo?: string | null;

		/** Product Module name that is visible to the end customers in NetLicensing Shop. */
		name?: string | null;

		/** Unique number (across all Product of a Vendor) that identifies the Product Module. Vendor can assign this number when creating a Product Module or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product. */
		number?: string | null;
	}
	export interface ProductModuleFormProperties {

		/** If set to 'false', the Product Module is disabled. Licensees can not obtain any new Licenses for this Product Module. */
		active: FormControl<boolean | null | undefined>,

		/** Licensing model applied to this Product Module. Defines what License Templates can be configured for the Product Module and how Licenses for this Product Module are processed during validation. */
		licensingInfo: FormControl<string | null | undefined>,

		/** Product Module name that is visible to the end customers in NetLicensing Shop. */
		name: FormControl<string | null | undefined>,

		/** Unique number (across all Product of a Vendor) that identifies the Product Module. Vendor can assign this number when creating a Product Module or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product. */
		number: FormControl<string | null | undefined>,
	}
	export function CreateProductModuleFormGroup() {
		return new FormGroup<ProductModuleFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			licensingInfo: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Token {
		active?: boolean | null;
		expirationTime?: Date | null;
		licenseNumber?: string | null;
		number?: string | null;
		shopURL?: string | null;
		tokenType?: string | null;
		vendorNumber?: string | null;
	}
	export interface TokenFormProperties {
		active: FormControl<boolean | null | undefined>,
		expirationTime: FormControl<Date | null | undefined>,
		licenseNumber: FormControl<string | null | undefined>,
		number: FormControl<string | null | undefined>,
		shopURL: FormControl<string | null | undefined>,
		tokenType: FormControl<string | null | undefined>,
		vendorNumber: FormControl<string | null | undefined>,
	}
	export function CreateTokenFormGroup() {
		return new FormGroup<TokenFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			expirationTime: new FormControl<Date | null | undefined>(undefined),
			licenseNumber: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			shopURL: new FormControl<string | null | undefined>(undefined),
			tokenType: new FormControl<string | null | undefined>(undefined),
			vendorNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Transaction {

		/** Always true for the Transactions */
		active?: string | null;

		/** Unique number (across all Products of a Vendor) that identifies the Transaction. This number is always generated by NetLicensing. */
		number?: string | null;
		source?: TransactionSource | null;
		status?: TransactionStatus | null;
	}
	export interface TransactionFormProperties {

		/** Always true for the Transactions */
		active: FormControl<string | null | undefined>,

		/** Unique number (across all Products of a Vendor) that identifies the Transaction. This number is always generated by NetLicensing. */
		number: FormControl<string | null | undefined>,
		source: FormControl<TransactionSource | null | undefined>,
		status: FormControl<TransactionStatus | null | undefined>,
	}
	export function CreateTransactionFormGroup() {
		return new FormGroup<TransactionFormProperties>({
			active: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<TransactionSource | null | undefined>(undefined),
			status: new FormControl<TransactionStatus | null | undefined>(undefined),
		});

	}

	export enum TransactionSource { SHOP = 'SHOP' }

	export enum TransactionStatus { CANCELLED = 'CANCELLED', CLOSED = 'CLOSED', PENDING = 'PENDING' }

	export interface Discount {
		amountPercent?: string | null;
		currency?: string | null;
		totalPrice?: number | null;
	}
	export interface DiscountFormProperties {
		amountPercent: FormControl<string | null | undefined>,
		currency: FormControl<string | null | undefined>,
		totalPrice: FormControl<number | null | undefined>,
	}
	export function CreateDiscountFormGroup() {
		return new FormGroup<DiscountFormProperties>({
			amountPercent: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			totalPrice: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Infos {
	}
	export interface InfosFormProperties {
	}
	export function CreateInfosFormGroup() {
		return new FormGroup<InfosFormProperties>({
		});

	}

	export interface Items {
	}
	export interface ItemsFormProperties {
	}
	export function CreateItemsFormGroup() {
		return new FormGroup<ItemsFormProperties>({
		});

	}

	export interface LicensingModel {
		name?: string | null;
	}
	export interface LicensingModelFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateLicensingModelFormGroup() {
		return new FormGroup<LicensingModelFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Netlicensing {
		infos?: Infos;
		items?: Items;
	}
	export interface NetlicensingFormProperties {
	}
	export function CreateNetlicensingFormGroup() {
		return new FormGroup<NetlicensingFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List Licenses
		 * Return a list of all Licenses for the current Vendor
		 * Get license
		 * @return {Array<Netlicensing>} Successful request
		 */
		ListLicenses(): Observable<Array<Netlicensing>> {
			return this.http.get<Array<Netlicensing>>(this.baseUri + 'license', {});
		}

		/**
		 * Delete License
		 * Delete License by a 'licenseNumber'
		 * Delete license/{licenseNumber}
		 * @param {string} licenseNumber Unique number (across all Products/Licensees of a Vendor) that identifies the License. Vendor can assign this number when creating a License or let NetLicensing generate one. Read-only after corresponding creation Transaction status is set to closed.
		 * @return {Netlicensing} Successful request
		 */
		DeleteLicense(licenseNumber: string): Observable<Netlicensing> {
			return this.http.delete<Netlicensing>(this.baseUri + 'license/' + (licenseNumber == null ? '' : encodeURIComponent(licenseNumber)), {});
		}

		/**
		 * Get License
		 * Get License by a 'licenseNumber'
		 * Get license/{licenseNumber}
		 * @param {string} licenseNumber Unique number (across all Products/Licensees of a Vendor) that identifies the License. Vendor can assign this number when creating a License or let NetLicensing generate one. Read-only after corresponding creation Transaction status is set to closed.
		 * @return {Netlicensing} Successful request
		 */
		GetLicense(licenseNumber: string): Observable<Netlicensing> {
			return this.http.get<Netlicensing>(this.baseUri + 'license/' + (licenseNumber == null ? '' : encodeURIComponent(licenseNumber)), {});
		}

		/**
		 * List Licensees
		 * Return a list of all Licensees for the current Vendor
		 * Get licensee
		 * @return {Array<Netlicensing>} Successful request
		 */
		ListLicensees(): Observable<Array<Netlicensing>> {
			return this.http.get<Array<Netlicensing>>(this.baseUri + 'licensee', {});
		}

		/**
		 * Delete Licensee
		 * Delete a Licensee by 'number'
		 * Delete licensee/{licenseeNumber}
		 * @param {string} licenseeNumber Unique number (across all Products of a Vendor) that identifies the Licensee.
		 * @param {boolean} forceCascade Force object deletion and all descendants.
		 * @return {Netlicensing} Successful request
		 */
		DeleteLicensee(licenseeNumber: string, forceCascade: boolean | null | undefined): Observable<Netlicensing> {
			return this.http.delete<Netlicensing>(this.baseUri + 'licensee/' + (licenseeNumber == null ? '' : encodeURIComponent(licenseeNumber)) + '&forceCascade=' + forceCascade, {});
		}

		/**
		 * Get Licensee
		 * Return a Licensee by 'licenseeNumber'
		 * Get licensee/{licenseeNumber}
		 * @param {string} licenseeNumber Unique number (across all Products of a Vendor) that identifies the Licensee. Vendor can assign this number when creating a Licensee or let NetLicensing generate one. Read-only after creation of the first License for the Licensee.
		 * @return {Netlicensing} Successful request
		 */
		GetLicensee(licenseeNumber: string): Observable<Netlicensing> {
			return this.http.get<Netlicensing>(this.baseUri + 'licensee/' + (licenseeNumber == null ? '' : encodeURIComponent(licenseeNumber)), {});
		}

		/**
		 * List License Templates
		 * Return a list of all License Templates for the current Vendor
		 * Get licensetemplate
		 * @return {Array<Netlicensing>} Successful request
		 */
		ListLicenseTemplates(): Observable<Array<Netlicensing>> {
			return this.http.get<Array<Netlicensing>>(this.baseUri + 'licensetemplate', {});
		}

		/**
		 * Delete License Template
		 * Delete a License Template by 'number'.
		 * Delete licensetemplate/{licenseTemplateNumber}
		 * @param {string} licenseTemplateNumber Unique number (across all Products of a Vendor) that identifies the License Template.
		 * @param {boolean} forceCascade Force object deletion and all descendants.
		 * @return {Netlicensing} Successful request
		 */
		DeleteLicenseTemplate(licenseTemplateNumber: string, forceCascade: boolean | null | undefined): Observable<Netlicensing> {
			return this.http.delete<Netlicensing>(this.baseUri + 'licensetemplate/' + (licenseTemplateNumber == null ? '' : encodeURIComponent(licenseTemplateNumber)) + '&forceCascade=' + forceCascade, {});
		}

		/**
		 * Get License Template
		 * Return a License Template by 'licenseTemplateNumber'
		 * Get licensetemplate/{licenseTemplateNumber}
		 * @param {string} licenseTemplateNumber Unique number (across all Products of a Vendor) that identifies the License Template. Vendor can assign this number when creating a License Template or let NetLicensing generate one. Read-only after creation of the first License from this License Template.
		 * @return {Netlicensing} Successful request
		 */
		GetLicenseTemplate(licenseTemplateNumber: string): Observable<Netlicensing> {
			return this.http.get<Netlicensing>(this.baseUri + 'licensetemplate/' + (licenseTemplateNumber == null ? '' : encodeURIComponent(licenseTemplateNumber)), {});
		}

		/**
		 * List Payment Methods
		 * Return a list of all Payment Methods for the current Vendor
		 * Get paymentmethod
		 * @return {Array<Netlicensing>} Successful request
		 */
		ListPaymentMethods(): Observable<Array<Netlicensing>> {
			return this.http.get<Array<Netlicensing>>(this.baseUri + 'paymentmethod', {});
		}

		/**
		 * Get Payment Method
		 * Return a Payment Method info by 'paymentMethodNumber'
		 * Get paymentmethod/{paymentMethodNumber}
		 * @param {string} paymentMethodNumber Payment method number
		 * @return {Netlicensing} Successful request
		 */
		GetPaymentMethod(paymentMethodNumber: string): Observable<Netlicensing> {
			return this.http.get<Netlicensing>(this.baseUri + 'paymentmethod/' + (paymentMethodNumber == null ? '' : encodeURIComponent(paymentMethodNumber)), {});
		}

		/**
		 * List Products
		 * Return a list of all configured Products for the current Vendor
		 * Get product
		 * @return {Array<Netlicensing>} Successful request
		 */
		ListProducts(): Observable<Array<Netlicensing>> {
			return this.http.get<Array<Netlicensing>>(this.baseUri + 'product', {});
		}

		/**
		 * Delete Product
		 * Delete a Product by 'number'
		 * Delete product/{productNumber}
		 * @param {string} productNumber Unique number that identifies the Product.
		 * @param {boolean} forceCascade Force object deletion and all descendants.
		 * @return {Netlicensing} Successful request
		 */
		DeleteProduct(productNumber: string, forceCascade: boolean | null | undefined): Observable<Netlicensing> {
			return this.http.delete<Netlicensing>(this.baseUri + 'product/' + (productNumber == null ? '' : encodeURIComponent(productNumber)) + '&forceCascade=' + forceCascade, {});
		}

		/**
		 * Get Product
		 * Return a Product by 'productNumber'
		 * Get product/{productNumber}
		 * @param {string} productNumber Unique number that identifies the Product.
		 * @return {Netlicensing} Successful request
		 */
		ProductNumber(productNumber: string): Observable<Netlicensing> {
			return this.http.get<Netlicensing>(this.baseUri + 'product/' + (productNumber == null ? '' : encodeURIComponent(productNumber)), {});
		}

		/**
		 * List Product Modules
		 * Return a list of all Product Modules for the current Vendor
		 * Get productmodule
		 * @return {Array<Netlicensing>} Successful request
		 */
		ListProductModules(): Observable<Array<Netlicensing>> {
			return this.http.get<Array<Netlicensing>>(this.baseUri + 'productmodule', {});
		}

		/**
		 * Delete Product Module
		 * Delete a Product Module by 'number'
		 * Delete productmodule/{productModuleNumber}
		 * @param {string} productModuleNumber Unique number (across all Products of a Vendor) that identifies the Product Module.
		 * @param {boolean} forceCascade Force object deletion and all descendants.
		 * @return {Netlicensing} Successful request
		 */
		DeleteProductModule(productModuleNumber: string, forceCascade: boolean | null | undefined): Observable<Netlicensing> {
			return this.http.delete<Netlicensing>(this.baseUri + 'productmodule/' + (productModuleNumber == null ? '' : encodeURIComponent(productModuleNumber)) + '&forceCascade=' + forceCascade, {});
		}

		/**
		 * Get Product Module
		 * Return a Product Module by 'productModuleNumber'
		 * Get productmodule/{productModuleNumber}
		 * @param {string} productModuleNumber Unique number (across all Products of a Vendor) that identifies the Product Module. Vendor can assign this number when creating a Product Module or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product.
		 * @return {Netlicensing} Successful request
		 */
		GetProductModule(productModuleNumber: string): Observable<Netlicensing> {
			return this.http.get<Netlicensing>(this.baseUri + 'productmodule/' + (productModuleNumber == null ? '' : encodeURIComponent(productModuleNumber)), {});
		}

		/**
		 * List Tokens
		 * Return a list of all tokens for the current Vendor
		 * Get token
		 * @return {Array<Netlicensing>} Successful request
		 */
		ListTokens(): Observable<Array<Netlicensing>> {
			return this.http.get<Array<Netlicensing>>(this.baseUri + 'token', {});
		}

		/**
		 * Delete token
		 * Delete a token by 'number'
		 * Delete token/{tokenNumber}
		 * @param {string} tokenNumber Token number
		 * @return {Netlicensing} Successful request
		 */
		DeleteToken(tokenNumber: string): Observable<Netlicensing> {
			return this.http.delete<Netlicensing>(this.baseUri + 'token/' + (tokenNumber == null ? '' : encodeURIComponent(tokenNumber)), {});
		}

		/**
		 * Get token
		 * Return a token by 'tokenNumber'
		 * Get token/{tokenNumber}
		 * @param {string} tokenNumber Token number
		 * @return {Netlicensing} Successful request
		 */
		GetToken(tokenNumber: string): Observable<Netlicensing> {
			return this.http.get<Netlicensing>(this.baseUri + 'token/' + (tokenNumber == null ? '' : encodeURIComponent(tokenNumber)), {});
		}

		/**
		 * List Transactions
		 * Return a list of all Transactions for the current Vendor
		 * Get transaction
		 * @return {Array<Netlicensing>} Successful request
		 */
		ListTransactions(): Observable<Array<Netlicensing>> {
			return this.http.get<Array<Netlicensing>>(this.baseUri + 'transaction', {});
		}

		/**
		 * Get Transaction
		 * Return a Transaction by 'transactionNumber'
		 * Get transaction/{transactionNumber}
		 * @param {string} transactionNumber Unique number (across all Products of a Vendor) that identifies the Transaction
		 * @return {Netlicensing} Successful request
		 */
		GetTransaction(transactionNumber: string): Observable<Netlicensing> {
			return this.http.get<Netlicensing>(this.baseUri + 'transaction/' + (transactionNumber == null ? '' : encodeURIComponent(transactionNumber)), {});
		}

		/**
		 * List License Types
		 * Return a list of all License Types supported by the service
		 * Get utility/licenseTypes
		 * @return {Netlicensing} Successful request
		 */
		LicenseTypes(): Observable<Netlicensing> {
			return this.http.get<Netlicensing>(this.baseUri + 'utility/licenseTypes', {});
		}

		/**
		 * List Licensing Models
		 * Return a list of all licensing models supported by the service
		 * Get utility/licensingModels
		 * @return {Netlicensing} Successful request
		 */
		LicensingModels(): Observable<Netlicensing> {
			return this.http.get<Netlicensing>(this.baseUri + 'utility/licensingModels', {});
		}
	}

}

