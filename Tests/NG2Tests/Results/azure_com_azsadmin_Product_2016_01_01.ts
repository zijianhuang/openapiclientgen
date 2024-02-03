import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Properties for a product. */
	export interface Product {

		/** Legal terms for the product. */
		legalTerms?: string | null;

		/** List of product links. */
		ProductLinks?: Array<ProductLinks>;

		/** Privacy policy of the product. */
		privacyPolicy?: string | null;

		/** The provisioning state of the resource. */
		provisioningState?: ProductProvisioningState | null;

		/** Extension type of the VM. */
		vmExtensionType?: string | null;
	}

	/** Properties for a product. */
	export interface ProductFormProperties {

		/** Legal terms for the product. */
		legalTerms: FormControl<string | null | undefined>,

		/** Privacy policy of the product. */
		privacyPolicy: FormControl<string | null | undefined>,

		/** The provisioning state of the resource. */
		provisioningState: FormControl<ProductProvisioningState | null | undefined>,

		/** Extension type of the VM. */
		vmExtensionType: FormControl<string | null | undefined>,
	}
	export function CreateProductFormGroup() {
		return new FormGroup<ProductFormProperties>({
			legalTerms: new FormControl<string | null | undefined>(undefined),
			privacyPolicy: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<ProductProvisioningState | null | undefined>(undefined),
			vmExtensionType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductLinks {

		/** Displayed name of product. */
		displayName?: string | null;

		/** URI to product. */
		uri?: string | null;
	}
	export interface ProductLinksFormProperties {

		/** Displayed name of product. */
		displayName: FormControl<string | null | undefined>,

		/** URI to product. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateProductLinksFormGroup() {
		return new FormGroup<ProductLinksFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProductProvisioningState { Stopped = 'Stopped', Starting = 'Starting', Running = 'Running', Stopping = 'Stopping', Succeeded = 'Succeeded', Downloading = 'Downloading' }


	/** Product resource. */
	export interface ProductResource {

		/** Properties for a product. */
		properties?: Product;
	}

	/** Product resource. */
	export interface ProductResourceFormProperties {
	}
	export function CreateProductResourceFormGroup() {
		return new FormGroup<ProductResourceFormProperties>({
		});

	}


	/** Holds an array of products and the next link. */
	export interface ProductResourcesPage {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of products. */
		value?: Array<ProductResource>;
	}

	/** Holds an array of products and the next link. */
	export interface ProductResourcesPageFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateProductResourcesPageFormGroup() {
		return new FormGroup<ProductResourcesPageFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Return product name.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroup}/providers/Microsoft.AzureBridge.Admin/activations/{activationName}/products
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroup The resource group the resource is located under.
		 * @param {string} activationName Name of the activation.
		 * @param {string} api_version Client Api Version.
		 * @return {ProductResourcesPage} OK
		 */
		Products_List(subscriptionId: string, resourceGroup: string, activationName: string, api_version: string): Observable<ProductResourcesPage> {
			return this.http.get<ProductResourcesPage>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.AzureBridge.Admin/activations/' + (activationName == null ? '' : encodeURIComponent(activationName)) + '/products&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Return product name.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroup}/providers/Microsoft.AzureBridge.Admin/activations/{activationName}/products/{productName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroup The resource group the resource is located under.
		 * @param {string} activationName Name of the activation.
		 * @param {string} productName Name of the product.
		 * @param {string} api_version Client Api Version.
		 * @return {ProductResource} OK
		 */
		Products_Get(subscriptionId: string, resourceGroup: string, activationName: string, productName: string, api_version: string): Observable<ProductResource> {
			return this.http.get<ProductResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.AzureBridge.Admin/activations/' + (activationName == null ? '' : encodeURIComponent(activationName)) + '/products/' + (productName == null ? '' : encodeURIComponent(productName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Downloads a product from azure marketplace.
		 * Post subscriptions/{subscriptionId}/resourcegroups/{resourceGroup}/providers/Microsoft.AzureBridge.Admin/activations/{activationName}/products/{productName}/download
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroup The resource group the resource is located under.
		 * @param {string} activationName Name of the activation.
		 * @param {string} productName Name of the product.
		 * @param {string} api_version Client Api Version.
		 * @return {Products_DownloadReturn} Accepted
		 */
		Products_Download(subscriptionId: string, resourceGroup: string, activationName: string, productName: string, api_version: string): Observable<Products_DownloadReturn> {
			return this.http.post<Products_DownloadReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.AzureBridge.Admin/activations/' + (activationName == null ? '' : encodeURIComponent(activationName)) + '/products/' + (productName == null ? '' : encodeURIComponent(productName)) + '/download&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}
	}

	export interface Products_DownloadReturn {

		/** Properties for aggregate usage. */
		properties?: Products_DownloadReturnProperties;
	}
	export interface Products_DownloadReturnFormProperties {
	}
	export function CreateProducts_DownloadReturnFormGroup() {
		return new FormGroup<Products_DownloadReturnFormProperties>({
		});

	}

	export interface Products_DownloadReturnProperties {

		/** The URI to the .azpkg file that provides information required for showing product in the gallery. */
		galleryPackageBlobSasUri?: string | null;

		/** Legal terms for the product. */
		legalTerms?: string | null;

		/** List of product links. */
		Products_DownloadReturnPropertiesLinks?: Array<Products_DownloadReturnPropertiesLinks>;

		/** Privacy policy of the product. */
		privacyPolicy?: string | null;

		/** Product information. */
		productDetailsProperties?: string | null;

		/** The provisioning state of the resource. */
		provisioningState?: ProductProvisioningState | null;

		/** Extension type of the VM. */
		vmExtensionType?: string | null;
	}
	export interface Products_DownloadReturnPropertiesFormProperties {

		/** The URI to the .azpkg file that provides information required for showing product in the gallery. */
		galleryPackageBlobSasUri: FormControl<string | null | undefined>,

		/** Legal terms for the product. */
		legalTerms: FormControl<string | null | undefined>,

		/** Privacy policy of the product. */
		privacyPolicy: FormControl<string | null | undefined>,

		/** Product information. */
		productDetailsProperties: FormControl<string | null | undefined>,

		/** The provisioning state of the resource. */
		provisioningState: FormControl<ProductProvisioningState | null | undefined>,

		/** Extension type of the VM. */
		vmExtensionType: FormControl<string | null | undefined>,
	}
	export function CreateProducts_DownloadReturnPropertiesFormGroup() {
		return new FormGroup<Products_DownloadReturnPropertiesFormProperties>({
			galleryPackageBlobSasUri: new FormControl<string | null | undefined>(undefined),
			legalTerms: new FormControl<string | null | undefined>(undefined),
			privacyPolicy: new FormControl<string | null | undefined>(undefined),
			productDetailsProperties: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<ProductProvisioningState | null | undefined>(undefined),
			vmExtensionType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Products_DownloadReturnPropertiesLinks {

		/** Displayed name of product. */
		displayName?: string | null;

		/** URI to product. */
		uri?: string | null;
	}
	export interface Products_DownloadReturnPropertiesLinksFormProperties {

		/** Displayed name of product. */
		displayName: FormControl<string | null | undefined>,

		/** URI to product. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateProducts_DownloadReturnPropertiesLinksFormGroup() {
		return new FormGroup<Products_DownloadReturnPropertiesLinksFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

}

