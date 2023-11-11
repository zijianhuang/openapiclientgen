import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/**
	 * The readonly representation of a catalog computed with a given resource
	 * context.
	 */
	export interface GoogleCloudPrivatecatalogV1beta1Catalog {

		/** Output only. The time when the catalog was created. */
		createTime?: string | null;

		/** Output only. The description of the catalog. */
		description?: string | null;

		/** Output only. The descriptive name of the catalog as it appears in UIs. */
		displayName?: string | null;

		/**
		 * Output only. The resource name of the target catalog, in the format of
		 * `catalogs/{catalog_id}'.
		 */
		name?: string | null;

		/** Output only. The time when the catalog was last updated. */
		updateTime?: string | null;
	}


	/**
	 * The readonly representation of a product computed with a given resource
	 * context.
	 */
	export interface GoogleCloudPrivatecatalogV1beta1Product {

		/**
		 * Output only. The type of the product asset. It can be one of the
		 * following values:
		 * * `google.deploymentmanager.Template`
		 * * `google.cloudprivatecatalog.ListingOnly`
		 */
		assetType?: string | null;

		/** Output only. The time when the product was created. */
		createTime?: string | null;

		/**
		 * Output only. The display metadata to describe the product.
		 * The JSON schema of the metadata differs by Product.asset_type.
		 * When the type is `google.deploymentmanager.Template`, the schema is as
		 * follows:
		 * ```
		 * "$schema": http://json-schema.org/draft-04/schema#
		 * type: object
		 * properties:
		 * name:
		 * type: string
		 * minLength: 1
		 * maxLength: 64
		 * description:
		 * type: string
		 * minLength: 1
		 * maxLength: 2048
		 * tagline:
		 * type: string
		 * minLength: 1
		 * maxLength: 100
		 * support_info:
		 * type: string
		 * minLength: 1
		 * maxLength: 2048
		 * creator:
		 * type: string
		 * minLength: 1
		 * maxLength: 100
		 * documentation:
		 * type: array
		 * items:
		 * type: object
		 * properties:
		 * url:
		 * type: string
		 * pattern:
		 * "^(https?)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]"
		 * title:
		 * type: string
		 * minLength: 1
		 * maxLength: 64
		 * description:
		 * type: string
		 * minLength: 1
		 * maxLength: 2048
		 * required:
		 * - name
		 * - description
		 * additionalProperties: false
		 * ```
		 * When the asset type is `google.cloudprivatecatalog.ListingOnly`, the schema
		 * is as follows:
		 * ```
		 * "$schema": http://json-schema.org/draft-04/schema#
		 * type: object
		 * properties:
		 * name:
		 * type: string
		 * minLength: 1
		 * maxLength: 64
		 * description:
		 * type: string
		 * minLength: 1
		 * maxLength: 2048
		 * tagline:
		 * type: string
		 * minLength: 1
		 * maxLength: 100
		 * support_info:
		 * type: string
		 * minLength: 1
		 * maxLength: 2048
		 * creator:
		 * type: string
		 * minLength: 1
		 * maxLength: 100
		 * documentation:
		 * type: array
		 * items:
		 * type: object
		 * properties:
		 * url:
		 * type: string
		 * pattern:
		 * "^(https?)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]"
		 * title:
		 * type: string
		 * minLength: 1
		 * maxLength: 64
		 * description:
		 * type: string
		 * minLength: 1
		 * maxLength: 2048
		 * signup_url:
		 * type: string
		 * pattern:
		 * "^(https?)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]"
		 * required:
		 * - name
		 * - description
		 * - signup_url
		 * additionalProperties: false
		 * ```
		 */
		displayMetadata?: {[id: string]: any } | null;

		/** Output only. The icon URI of the product. */
		iconUri?: string | null;

		/**
		 * Output only. The resource name of the target product, in the format of
		 * `products/a-z*[a-z0-9]'.
		 * A unique identifier for the product under a catalog.
		 */
		name?: string | null;

		/** Output only. The time when the product was last updated. */
		updateTime?: string | null;
	}


	/** Response message for PrivateCatalog.SearchCatalogs. */
	export interface GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse {

		/** The `Catalog`s computed from the resource context. */
		catalogs?: Array<GoogleCloudPrivatecatalogV1beta1Catalog> | null;

		/**
		 * A pagination token returned from a previous call to SearchCatalogs that
		 * indicates from where listing should continue.
		 * This field is optional.
		 */
		nextPageToken?: string | null;
	}


	/** Response message for PrivateCatalog.SearchProducts. */
	export interface GoogleCloudPrivatecatalogV1beta1SearchProductsResponse {

		/**
		 * A pagination token returned from a previous call to SearchProducts that
		 * indicates from where listing should continue.
		 * This field is optional.
		 */
		nextPageToken?: string | null;

		/** The `Product` resources computed from the resource context. */
		products?: Array<GoogleCloudPrivatecatalogV1beta1Product> | null;
	}


	/** Response message for PrivateCatalog.SearchVersions. */
	export interface GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse {

		/**
		 * A pagination token returned from a previous call to SearchVersions that
		 * indicates from where the listing should continue.
		 * This field is optional.
		 */
		nextPageToken?: string | null;

		/** The `Version` resources computed from the resource context. */
		versions?: Array<GoogleCloudPrivatecatalogV1beta1Version> | null;
	}


	/**
	 * The consumer representation of a version which is a child resource under a
	 * `Product` with asset data.
	 */
	export interface GoogleCloudPrivatecatalogV1beta1Version {

		/**
		 * Output only. The asset which has been validated and is ready to be
		 * provisioned. See
		 * google.cloud.privatecatalogproducer.v1beta.Version.asset for details.
		 */
		asset?: {[id: string]: any } | null;

		/** Output only. The time when the version was created. */
		createTime?: string | null;

		/**
		 * Output only. The user-supplied description of the version. Maximum of 256
		 * characters.
		 */
		description?: string | null;

		/**
		 * Output only. The resource name of the version, in the format
		 * `catalogs/{catalog_id}/products/{product_id}/versions/a-z*[a-z0-9]'.
		 * A unique identifier for the version under a product.
		 */
		name?: string | null;

		/** Output only. The time when the version was last updated. */
		updateTime?: string | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Search Catalog resources that consumers have access to, within the
		 * scope of the consumer cloud resource hierarchy context.
		 * Get v1beta1/{resource}/catalogs:search
		 * @param {string} resource Required. The name of the resource context. It can be in following formats:
		 * * `projects/{project_id}`
		 * * `folders/{folder_id}`
		 * * `organizations/{organization_id}`
		 * @param {number} pageSize The maximum number of entries that are requested.
		 * @param {string} pageToken A pagination token returned from a previous call to SearchCatalogs that
		 * indicates where this listing should continue from.
		 * This field is optional.
		 * @param {string} query The query to filter the catalogs. The supported queries are:
		 * * Get a single catalog: `name=catalogs/{catalog_id}`
		 * @return {void} Successful response
		 */
		Cloudprivatecatalog_organizations_catalogs_search(resource: string, pageSize: number, pageToken: string, query: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + '/catalogs:search&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&query=' + (query == null ? '' : encodeURIComponent(query)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search Product resources that consumers have access to, within the
		 * scope of the consumer cloud resource hierarchy context.
		 * Get v1beta1/{resource}/products:search
		 * @param {string} resource Required. The name of the resource context. See
		 * SearchCatalogsRequest.resource for details.
		 * @param {number} pageSize The maximum number of entries that are requested.
		 * @param {string} pageToken A pagination token returned from a previous call to SearchProducts that
		 * indicates where this listing should continue from.
		 * This field is optional.
		 * @param {string} query The query to filter the products.
		 * The supported queries are:
		 * * List products of all catalogs: empty
		 * * List products under a catalog: `parent=catalogs/{catalog_id}`
		 * * Get a product by name:
		 * `name=catalogs/{catalog_id}/products/{product_id}`
		 * @return {void} Successful response
		 */
		Cloudprivatecatalog_organizations_products_search(resource: string, pageSize: number, pageToken: string, query: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + '/products:search&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&query=' + (query == null ? '' : encodeURIComponent(query)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search Version resources that consumers have access to, within the
		 * scope of the consumer cloud resource hierarchy context.
		 * Get v1beta1/{resource}/versions:search
		 * @param {string} resource Required. The name of the resource context. See
		 * SearchCatalogsRequest.resource for details.
		 * @param {number} pageSize The maximum number of entries that are requested.
		 * @param {string} pageToken A pagination token returned from a previous call to SearchVersions
		 * that indicates where this listing should continue from.
		 * This field is optional.
		 * @param {string} query The query to filter the versions. Required.
		 * The supported queries are:
		 * * List versions under a product:
		 * `parent=catalogs/{catalog_id}/products/{product_id}`
		 * * Get a version by name:
		 * `name=catalogs/{catalog_id}/products/{product_id}/versions/{version_id}`
		 * @return {void} Successful response
		 */
		Cloudprivatecatalog_organizations_versions_search(resource: string, pageSize: number, pageToken: string, query: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + '/versions:search&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&query=' + (query == null ? '' : encodeURIComponent(query)), { observe: 'response', responseType: 'text' });
		}
	}

}

