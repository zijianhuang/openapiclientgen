import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Azure Data Catalog. */
	export interface ADCCatalog extends Resource {

		/** Properties of the data catalog. */
		properties?: ADCCatalogProperties;
	}

	/** Azure Data Catalog. */
	export interface ADCCatalogFormProperties extends ResourceFormProperties {
	}
	export function CreateADCCatalogFormGroup() {
		return new FormGroup<ADCCatalogFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of the data catalog. */
	export interface ADCCatalogProperties {

		/** Azure data catalog admin list. */
		admins?: Array<Principals>;

		/** Automatic unit adjustment enabled or not. */
		enableAutomaticUnitAdjustment?: boolean | null;

		/** Azure data catalog SKU. */
		sku?: ADCCatalogPropertiesSku | null;

		/** Azure data catalog provision status. */
		successfullyProvisioned?: boolean | null;

		/** Azure data catalog units. */
		units?: number | null;

		/** Azure data catalog user list. */
		users?: Array<Principals>;
	}

	/** Properties of the data catalog. */
	export interface ADCCatalogPropertiesFormProperties {

		/** Automatic unit adjustment enabled or not. */
		enableAutomaticUnitAdjustment: FormControl<boolean | null | undefined>,

		/** Azure data catalog SKU. */
		sku: FormControl<ADCCatalogPropertiesSku | null | undefined>,

		/** Azure data catalog provision status. */
		successfullyProvisioned: FormControl<boolean | null | undefined>,

		/** Azure data catalog units. */
		units: FormControl<number | null | undefined>,
	}
	export function CreateADCCatalogPropertiesFormGroup() {
		return new FormGroup<ADCCatalogPropertiesFormProperties>({
			enableAutomaticUnitAdjustment: new FormControl<boolean | null | undefined>(undefined),
			sku: new FormControl<ADCCatalogPropertiesSku | null | undefined>(undefined),
			successfullyProvisioned: new FormControl<boolean | null | undefined>(undefined),
			units: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** User principals. */
	export interface Principals {

		/** Object Id for the user */
		objectId?: string | null;

		/** UPN of the user. */
		upn?: string | null;
	}

	/** User principals. */
	export interface PrincipalsFormProperties {

		/** Object Id for the user */
		objectId: FormControl<string | null | undefined>,

		/** UPN of the user. */
		upn: FormControl<string | null | undefined>,
	}
	export function CreatePrincipalsFormGroup() {
		return new FormGroup<PrincipalsFormProperties>({
			objectId: new FormControl<string | null | undefined>(undefined),
			upn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ADCCatalogPropertiesSku { Free = 0, Standard = 1 }


	/** The response from the List Azure Data Catalog operation. */
	export interface ADCCatalogsListResult {

		/** the list of Azure Data Catalogs. */
		value?: Array<ADCCatalog>;
	}

	/** The response from the List Azure Data Catalog operation. */
	export interface ADCCatalogsListResultFormProperties {
	}
	export function CreateADCCatalogsListResultFormGroup() {
		return new FormGroup<ADCCatalogsListResultFormProperties>({
		});

	}


	/** The operation supported by Azure Data Catalog Service. */
	export interface OperationDisplayInfo {

		/** The description of the operation. */
		description?: string | null;

		/** The action that users can perform, based on their permission level. */
		operation?: string | null;

		/** Service provider: Azure Data Catalog Service. */
		provider?: string | null;

		/** Resource on which the operation is performed. */
		resource?: string | null;
	}

	/** The operation supported by Azure Data Catalog Service. */
	export interface OperationDisplayInfoFormProperties {

		/** The description of the operation. */
		description: FormControl<string | null | undefined>,

		/** The action that users can perform, based on their permission level. */
		operation: FormControl<string | null | undefined>,

		/** Service provider: Azure Data Catalog Service. */
		provider: FormControl<string | null | undefined>,

		/** Resource on which the operation is performed. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationDisplayInfoFormGroup() {
		return new FormGroup<OperationDisplayInfoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The operation supported by Azure Data Catalog Service. */
	export interface OperationEntity {

		/** The operation supported by Azure Data Catalog Service. */
		display?: OperationDisplayInfo;

		/** Operation name: {provider}/{resource}/{operation}. */
		name?: string | null;
	}

	/** The operation supported by Azure Data Catalog Service. */
	export interface OperationEntityFormProperties {

		/** Operation name: {provider}/{resource}/{operation}. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationEntityFormGroup() {
		return new FormGroup<OperationEntityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of Azure data catalog service operation response. */
	export interface OperationEntityListResult {

		/** The list of operations. */
		value?: Array<OperationEntity>;
	}

	/** The list of Azure data catalog service operation response. */
	export interface OperationEntityListResultFormProperties {
	}
	export function CreateOperationEntityListResultFormGroup() {
		return new FormGroup<OperationEntityListResultFormProperties>({
		});

	}


	/** The Resource model definition. */
	export interface Resource {

		/** Resource etag */
		etag?: string | null;

		/** Resource Id */
		id?: string | null;

		/** Resource location */
		location?: string | null;

		/** Resource name */
		name?: string | null;

		/** Resource tags */
		tags?: {[id: string]: string };

		/** Resource type */
		type?: string | null;
	}

	/** The Resource model definition. */
	export interface ResourceFormProperties {

		/** Resource etag */
		etag: FormControl<string | null | undefined>,

		/** Resource Id */
		id: FormControl<string | null | undefined>,

		/** Resource location */
		location: FormControl<string | null | undefined>,

		/** Resource name */
		name: FormControl<string | null | undefined>,

		/** Resource tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all the available Azure Data Catalog service operations.
		 * Get providers/Microsoft.DataCatalog/operations
		 * @param {string} api_version Client Api Version.
		 * @return {OperationEntityListResult} HTTP 200 (OK) if the operation was successful.
		 */
		ADCOperations_List(api_version: string): Observable<OperationEntityListResult> {
			return this.http.get<OperationEntityListResult>(this.baseUri + 'providers/Microsoft.DataCatalog/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List catalogs in Resource Group (GET Resources)
		 * The List catalogs in Resource Group operation lists all the Azure Data Catalogs available under the given resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataCatalog/catalogs
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @return {ADCCatalogsListResult} HTTP 200 (OK) if the operation was successful.
		 */
		ADCCatalogs_ListtByResourceGroup(api_version: string, subscriptionId: string, resourceGroupName: string): Observable<ADCCatalogsListResult> {
			return this.http.get<ADCCatalogsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataCatalog/catalogs?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get Azure Data Catalog service (GET Resources)
		 * The Get Azure Data Catalog Service operation retrieves a json representation of the data catalog.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataCatalog/catalogs/{catalogName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} catalogName The name of the data catalog in the specified subscription and resource group.
		 * @return {ADCCatalog} HTTP 200 (OK) if the operation was successful.
		 */
		ADCCatalogs_Get(api_version: string, subscriptionId: string, resourceGroupName: string, catalogName: string): Observable<ADCCatalog> {
			return this.http.get<ADCCatalog>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataCatalog/catalogs/' + (catalogName == null ? '' : encodeURIComponent(catalogName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or Update Azure Data Catalog service (PUT Resource)
		 * The Create Azure Data Catalog service operation creates a new data catalog service with the specified parameters. If the specific service already exists, then any patchable properties will be updated and any immutable properties will remain unchanged.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataCatalog/catalogs/{catalogName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} catalogName The name of the data catalog in the specified subscription and resource group.
		 * @param {ADCCatalog} requestBody Properties supplied to the Create or Update a data catalog.
		 * @return {ADCCatalog} HTTP 200 (OK) if the operation was successful.
		 */
		ADCCatalogs_CreateOrUpdate(api_version: string, subscriptionId: string, resourceGroupName: string, catalogName: string, requestBody: ADCCatalog): Observable<ADCCatalog> {
			return this.http.put<ADCCatalog>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataCatalog/catalogs/' + (catalogName == null ? '' : encodeURIComponent(catalogName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete Azure Data Catalog Service (DELETE Resource)
		 * The Delete Azure Data Catalog Service operation deletes an existing data catalog.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataCatalog/catalogs/{catalogName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} catalogName The name of the data catalog in the specified subscription and resource group.
		 * @return {void} OK. An existing annotation was updated.
		 */
		ADCCatalogs_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, catalogName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataCatalog/catalogs/' + (catalogName == null ? '' : encodeURIComponent(catalogName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Azure Data Catalog Service (PATCH Resource)
		 * The Update Azure Data Catalog Service operation can be used to update the existing deployment. The update call only supports the properties listed in the PATCH body.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataCatalog/catalogs/{catalogName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} catalogName The name of the data catalog in the specified subscription and resource group.
		 * @param {ADCCatalog} requestBody Properties supplied to the Update a data catalog.
		 * @return {ADCCatalog} HTTP 200 (OK) if the operation was successful.
		 */
		ADCCatalogs_Update(api_version: string, subscriptionId: string, resourceGroupName: string, catalogName: string, requestBody: ADCCatalog): Observable<ADCCatalog> {
			return this.http.patch<ADCCatalog>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataCatalog/catalogs/' + (catalogName == null ? '' : encodeURIComponent(catalogName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

