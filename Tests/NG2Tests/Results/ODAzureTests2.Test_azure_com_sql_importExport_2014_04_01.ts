import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Export database parameters. */
	export interface ExportRequest {

		/**
		 * The name of the SQL administrator.
		 * Required
		 */
		administratorLogin: string;

		/**
		 * The password of the SQL administrator.
		 * Required
		 */
		administratorLoginPassword: string;

		/** The authentication type. */
		authenticationType?: ExportRequestAuthenticationType | null;

		/**
		 * The storage key to use.  If storage key type is SharedAccessKey, it must be preceded with a "?."
		 * Required
		 */
		storageKey: string;

		/**
		 * The type of the storage key to use.
		 * Required
		 */
		storageKeyType: ExportRequestStorageKeyType;

		/**
		 * The storage uri to use.
		 * Required
		 */
		storageUri: string;
	}

	/** Export database parameters. */
	export interface ExportRequestFormProperties {

		/**
		 * The name of the SQL administrator.
		 * Required
		 */
		administratorLogin: FormControl<string | null | undefined>,

		/**
		 * The password of the SQL administrator.
		 * Required
		 */
		administratorLoginPassword: FormControl<string | null | undefined>,

		/** The authentication type. */
		authenticationType: FormControl<ExportRequestAuthenticationType | null | undefined>,

		/**
		 * The storage key to use.  If storage key type is SharedAccessKey, it must be preceded with a "?."
		 * Required
		 */
		storageKey: FormControl<string | null | undefined>,

		/**
		 * The type of the storage key to use.
		 * Required
		 */
		storageKeyType: FormControl<ExportRequestStorageKeyType | null | undefined>,

		/**
		 * The storage uri to use.
		 * Required
		 */
		storageUri: FormControl<string | null | undefined>,
	}
	export function CreateExportRequestFormGroup() {
		return new FormGroup<ExportRequestFormProperties>({
			administratorLogin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			administratorLoginPassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authenticationType: new FormControl<ExportRequestAuthenticationType | null | undefined>(undefined),
			storageKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			storageKeyType: new FormControl<ExportRequestStorageKeyType | null | undefined>(undefined, [Validators.required]),
			storageUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ExportRequestAuthenticationType { SQL = 0, ADPassword = 1 }

	export enum ExportRequestStorageKeyType { StorageAccessKey = 0, SharedAccessKey = 1 }

	export interface ImportExportResponse {
	}
	export interface ImportExportResponseFormProperties {
	}
	export function CreateImportExportResponseFormGroup() {
		return new FormGroup<ImportExportResponseFormProperties>({
		});

	}


	/** Response for Import/Export Status operation. */
	export interface ImportExportResponseProperties {

		/** The blob uri. */
		blobUri?: string | null;

		/** The name of the database. */
		databaseName?: string | null;

		/** The error message returned from the server. */
		errorMessage?: string | null;

		/** The operation status last modified time. */
		lastModifiedTime?: string | null;

		/** The operation queued time. */
		queuedTime?: string | null;

		/** The request type of the operation. */
		requestId?: string | null;

		/** The request type of the operation. */
		requestType?: string | null;

		/** The name of the server. */
		serverName?: string | null;

		/** The status message returned from the server. */
		status?: string | null;
	}

	/** Response for Import/Export Status operation. */
	export interface ImportExportResponsePropertiesFormProperties {

		/** The blob uri. */
		blobUri: FormControl<string | null | undefined>,

		/** The name of the database. */
		databaseName: FormControl<string | null | undefined>,

		/** The error message returned from the server. */
		errorMessage: FormControl<string | null | undefined>,

		/** The operation status last modified time. */
		lastModifiedTime: FormControl<string | null | undefined>,

		/** The operation queued time. */
		queuedTime: FormControl<string | null | undefined>,

		/** The request type of the operation. */
		requestId: FormControl<string | null | undefined>,

		/** The request type of the operation. */
		requestType: FormControl<string | null | undefined>,

		/** The name of the server. */
		serverName: FormControl<string | null | undefined>,

		/** The status message returned from the server. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateImportExportResponsePropertiesFormGroup() {
		return new FormGroup<ImportExportResponsePropertiesFormProperties>({
			blobUri: new FormControl<string | null | undefined>(undefined),
			databaseName: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<string | null | undefined>(undefined),
			queuedTime: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			requestType: new FormControl<string | null | undefined>(undefined),
			serverName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the properties for an import operation */
	export interface ImportExtensionProperties extends ExportRequest {

		/**
		 * The type of import operation being performed. This is always Import.
		 * Required
		 */
		operationMode: ImportExtensionPropertiesOperationMode;
	}

	/** Represents the properties for an import operation */
	export interface ImportExtensionPropertiesFormProperties extends ExportRequestFormProperties {

		/**
		 * The type of import operation being performed. This is always Import.
		 * Required
		 */
		operationMode: FormControl<ImportExtensionPropertiesOperationMode | null | undefined>,
	}
	export function CreateImportExtensionPropertiesFormGroup() {
		return new FormGroup<ImportExtensionPropertiesFormProperties>({
			administratorLogin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			administratorLoginPassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authenticationType: new FormControl<ExportRequestAuthenticationType | null | undefined>(undefined),
			storageKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			storageKeyType: new FormControl<ExportRequestStorageKeyType | null | undefined>(undefined, [Validators.required]),
			storageUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			operationMode: new FormControl<ImportExtensionPropertiesOperationMode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ImportExtensionPropertiesOperationMode { Import = 0 }


	/** Import database parameters. */
	export interface ImportExtensionRequest {

		/** The name of the extension. */
		name?: string | null;

		/** Represents the properties for an import operation */
		properties?: ImportExtensionProperties;

		/** The type of the extension. */
		type?: string | null;
	}

	/** Import database parameters. */
	export interface ImportExtensionRequestFormProperties {

		/** The name of the extension. */
		name: FormControl<string | null | undefined>,

		/** The type of the extension. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateImportExtensionRequestFormGroup() {
		return new FormGroup<ImportExtensionRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Import database parameters. */
	export interface ImportRequest extends ExportRequest {

		/**
		 * The name of the database to import.
		 * Required
		 */
		databaseName: string;

		/**
		 * The edition for the database being created.
		 * The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API or one of the following commands:
		 * ```azurecli
		 * az sql db list-editions -l <location> -o table
		 * ````
		 * ```powershell
		 * Get-AzSqlServerServiceObjective -Location <location>
		 * ````
		 * Required
		 */
		edition: ImportRequestEdition;

		/**
		 * The maximum size for the newly imported database.
		 * Required
		 */
		maxSizeBytes: string;

		/**
		 * The name of the service objective to assign to the database.
		 * Required
		 */
		serviceObjectiveName: ImportRequestServiceObjectiveName;
	}

	/** Import database parameters. */
	export interface ImportRequestFormProperties extends ExportRequestFormProperties {

		/**
		 * The name of the database to import.
		 * Required
		 */
		databaseName: FormControl<string | null | undefined>,

		/**
		 * The edition for the database being created.
		 * The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API or one of the following commands:
		 * ```azurecli
		 * az sql db list-editions -l <location> -o table
		 * ````
		 * ```powershell
		 * Get-AzSqlServerServiceObjective -Location <location>
		 * ````
		 * Required
		 */
		edition: FormControl<ImportRequestEdition | null | undefined>,

		/**
		 * The maximum size for the newly imported database.
		 * Required
		 */
		maxSizeBytes: FormControl<string | null | undefined>,

		/**
		 * The name of the service objective to assign to the database.
		 * Required
		 */
		serviceObjectiveName: FormControl<ImportRequestServiceObjectiveName | null | undefined>,
	}
	export function CreateImportRequestFormGroup() {
		return new FormGroup<ImportRequestFormProperties>({
			administratorLogin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			administratorLoginPassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authenticationType: new FormControl<ExportRequestAuthenticationType | null | undefined>(undefined),
			storageKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			storageKeyType: new FormControl<ExportRequestStorageKeyType | null | undefined>(undefined, [Validators.required]),
			storageUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			databaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			edition: new FormControl<ImportRequestEdition | null | undefined>(undefined, [Validators.required]),
			maxSizeBytes: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serviceObjectiveName: new FormControl<ImportRequestServiceObjectiveName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ImportRequestEdition { Web = 0, Business = 1, Basic = 2, Standard = 3, Premium = 4, PremiumRS = 5, Free = 6, Stretch = 7, DataWarehouse = 8, System = 9, System2 = 10, GeneralPurpose = 11, BusinessCritical = 12, Hyperscale = 13 }

	export enum ImportRequestServiceObjectiveName { System = 0, System0 = 1, System1 = 2, System2 = 3, System3 = 4, System4 = 5, System2L = 6, System3L = 7, System4L = 8, Free = 9, Basic = 10, S0 = 11, S1 = 12, S2 = 13, S3 = 14, S4 = 15, S6 = 16, S7 = 17, S9 = 18, S12 = 19, P1 = 20, P2 = 21, P3 = 22, P4 = 23, P6 = 24, P11 = 25, P15 = 26, PRS1 = 27, PRS2 = 28, PRS4 = 29, PRS6 = 30, DW100 = 31, DW200 = 32, DW300 = 33, DW400 = 34, DW500 = 35, DW600 = 36, DW1000 = 37, DW1200 = 38, DW1000c = 39, DW1500 = 40, DW1500c = 41, DW2000 = 42, DW2000c = 43, DW3000 = 44, DW2500c = 45, DW3000c = 46, DW6000 = 47, DW5000c = 48, DW6000c = 49, DW7500c = 50, DW10000c = 51, DW15000c = 52, DW30000c = 53, DS100 = 54, DS200 = 55, DS300 = 56, DS400 = 57, DS500 = 58, DS600 = 59, DS1000 = 60, DS1200 = 61, DS1500 = 62, DS2000 = 63, ElasticPool = 64 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Exports a database to a bacpac.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/export
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database to be exported.
		 * @param {ExportRequest} requestBody The required parameters for exporting a database.
		 * @return {ImportExportResponse} OK
		 */
		Databases_Export(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, databaseName: string, requestBody: ExportRequest): Observable<ImportExportResponse> {
			return this.http.post<ImportExportResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/export?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an import operation that imports a bacpac into an existing database. The existing database must be empty.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/extensions/{extensionName}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database to import into
		 * @param {Databases_CreateImportOperationExtensionName} extensionName The name of the operation to perform
		 * @param {ImportExtensionRequest} requestBody The required parameters for importing a Bacpac into a database.
		 * @return {void} 
		 */
		Databases_CreateImportOperation(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, databaseName: string, extensionName: Databases_CreateImportOperationExtensionName, requestBody: ImportExtensionRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/extensions/' + extensionName + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Imports a bacpac into a new database.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/import
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {ImportRequest} requestBody The required parameters for importing a Bacpac into a database.
		 * @return {ImportExportResponse} OK
		 */
		Databases_Import(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, requestBody: ImportRequest): Observable<ImportExportResponse> {
			return this.http.post<ImportExportResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/import?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Databases_CreateImportOperationExtensionName { import = 0 }

}

