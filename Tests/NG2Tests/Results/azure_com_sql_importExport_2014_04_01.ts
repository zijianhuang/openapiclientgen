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

	export enum ExportRequestAuthenticationType { SQL = 'SQL', ADPassword = 'ADPassword' }

	export enum ExportRequestStorageKeyType { StorageAccessKey = 'StorageAccessKey', SharedAccessKey = 'SharedAccessKey' }

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

	export enum ImportExtensionPropertiesOperationMode { Import = 'Import' }


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

	export enum ImportRequestEdition { Web = 'Web', Business = 'Business', Basic = 'Basic', Standard = 'Standard', Premium = 'Premium', PremiumRS = 'PremiumRS', Free = 'Free', Stretch = 'Stretch', DataWarehouse = 'DataWarehouse', System = 'System', System2 = 'System2', GeneralPurpose = 'GeneralPurpose', BusinessCritical = 'BusinessCritical', Hyperscale = 'Hyperscale' }

	export enum ImportRequestServiceObjectiveName { System = 'System', System0 = 'System0', System1 = 'System1', System2 = 'System2', System3 = 'System3', System4 = 'System4', System2L = 'System2L', System3L = 'System3L', System4L = 'System4L', Free = 'Free', Basic = 'Basic', S0 = 'S0', S1 = 'S1', S2 = 'S2', S3 = 'S3', S4 = 'S4', S6 = 'S6', S7 = 'S7', S9 = 'S9', S12 = 'S12', P1 = 'P1', P2 = 'P2', P3 = 'P3', P4 = 'P4', P6 = 'P6', P11 = 'P11', P15 = 'P15', PRS1 = 'PRS1', PRS2 = 'PRS2', PRS4 = 'PRS4', PRS6 = 'PRS6', DW100 = 'DW100', DW200 = 'DW200', DW300 = 'DW300', DW400 = 'DW400', DW500 = 'DW500', DW600 = 'DW600', DW1000 = 'DW1000', DW1200 = 'DW1200', DW1000c = 'DW1000c', DW1500 = 'DW1500', DW1500c = 'DW1500c', DW2000 = 'DW2000', DW2000c = 'DW2000c', DW3000 = 'DW3000', DW2500c = 'DW2500c', DW3000c = 'DW3000c', DW6000 = 'DW6000', DW5000c = 'DW5000c', DW6000c = 'DW6000c', DW7500c = 'DW7500c', DW10000c = 'DW10000c', DW15000c = 'DW15000c', DW30000c = 'DW30000c', DS100 = 'DS100', DS200 = 'DS200', DS300 = 'DS300', DS400 = 'DS400', DS500 = 'DS500', DS600 = 'DS600', DS1000 = 'DS1000', DS1200 = 'DS1200', DS1500 = 'DS1500', DS2000 = 'DS2000', ElasticPool = 'ElasticPool' }

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

	export enum Databases_CreateImportOperationExtensionName { import = 'import' }

}

