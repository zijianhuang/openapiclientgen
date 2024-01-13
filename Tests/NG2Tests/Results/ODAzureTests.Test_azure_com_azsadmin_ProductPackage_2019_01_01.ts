import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Link to a product. */
	export interface ProductLink {

		/** Displayed name of product. */
		displayName?: string | null;

		/** URI to product. */
		uri?: string | null;
	}

	/** Link to a product. */
	export interface ProductLinkFormProperties {

		/** Displayed name of product. */
		displayName: FormControl<string | null | undefined>,

		/** URI to product. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateProductLinkFormGroup() {
		return new FormGroup<ProductLinkFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties for a product package. */
	export interface ProductPackage {

		/** Properties for Product package. */
		properties?: ProductPackageProperties;
	}

	/** Properties for a product package. */
	export interface ProductPackageFormProperties {
	}
	export function CreateProductPackageFormGroup() {
		return new FormGroup<ProductPackageFormProperties>({
		});

	}


	/** Properties for Product package. */
	export interface ProductPackageProperties {

		/** File container resource identifier containing product manifest. */
		fileContainerId?: string | null;

		/** Value indicating whether the package is applicable for deployment. */
		isDeployable?: boolean | null;

		/** Value indicating whether the package is applicable for update. */
		isUpdatable?: boolean | null;

		/** The identifier of product deployment; null if this version is not installed. */
		productDeploymentId?: string | null;

		/** Provisioning state of the resource. */
		provisioningState?: string | null;
	}

	/** Properties for Product package. */
	export interface ProductPackagePropertiesFormProperties {

		/** File container resource identifier containing product manifest. */
		fileContainerId: FormControl<string | null | undefined>,

		/** Value indicating whether the package is applicable for deployment. */
		isDeployable: FormControl<boolean | null | undefined>,

		/** Value indicating whether the package is applicable for update. */
		isUpdatable: FormControl<boolean | null | undefined>,

		/** The identifier of product deployment; null if this version is not installed. */
		productDeploymentId: FormControl<string | null | undefined>,

		/** Provisioning state of the resource. */
		provisioningState: FormControl<string | null | undefined>,
	}
	export function CreateProductPackagePropertiesFormGroup() {
		return new FormGroup<ProductPackagePropertiesFormProperties>({
			fileContainerId: new FormControl<string | null | undefined>(undefined),
			isDeployable: new FormControl<boolean | null | undefined>(undefined),
			isUpdatable: new FormControl<boolean | null | undefined>(undefined),
			productDeploymentId: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of product packages. */
	export interface ProductPackagesList {

		/** Continuation Token. */
		nextLink?: string | null;

		/** List of product packages. */
		value?: Array<ProductPackage>;
	}

	/** List of product packages. */
	export interface ProductPackagesListFormProperties {

		/** Continuation Token. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateProductPackagesListFormGroup() {
		return new FormGroup<ProductPackagesListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional properties of the product */
	export interface ProductProperties {

		/** The version of the product */
		version?: string | null;
	}

	/** Additional properties of the product */
	export interface ProductPropertiesFormProperties {

		/** The version of the product */
		version: FormControl<string | null | undefined>,
	}
	export function CreateProductPropertiesFormGroup() {
		return new FormGroup<ProductPropertiesFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns an array of product packages.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productPackages
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @return {ProductPackagesList} OK
		 */
		ProductPackages_List(subscriptionId: string, api_version: string): Observable<ProductPackagesList> {
			return this.http.get<ProductPackagesList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Deployment.Admin/locations/global/productPackages&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the specific product package details.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productPackages/{productId}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} productId The product identifier.
		 * @param {string} api_version Client API Version.
		 * @return {ProductPackage} OK
		 */
		ProductPackages_Get(subscriptionId: string, productId: string, api_version: string): Observable<ProductPackage> {
			return this.http.get<ProductPackage>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Deployment.Admin/locations/global/productPackages/' + (productId == null ? '' : encodeURIComponent(productId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a new product package.
		 * Put subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productPackages/{productId}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} productId The product identifier.
		 * @param {string} api_version Client API Version.
		 * @return {ProductPackage} OK
		 */
		ProductPackages_Create(subscriptionId: string, productId: string, api_version: string): Observable<ProductPackage> {
			return this.http.put<ProductPackage>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Deployment.Admin/locations/global/productPackages/' + (productId == null ? '' : encodeURIComponent(productId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Deletes a product package.
		 * Delete subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productPackages/{productId}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} productId The product identifier.
		 * @param {string} api_version Client API Version.
		 * @return {void} OK
		 */
		ProductPackages_Delete(subscriptionId: string, productId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Deployment.Admin/locations/global/productPackages/' + (productId == null ? '' : encodeURIComponent(productId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

