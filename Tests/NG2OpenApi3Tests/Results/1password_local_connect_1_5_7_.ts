import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents a request that was made to the API. Including what Token was used and what resource was accessed. */
	export interface APIRequest {
		action?: APIRequestAction | null;
		actor?: APIRequestActor;

		/** The unique id used to identify a single request. */
		requestId?: string | null;
		resource?: APIRequestResource;
		result?: APIRequestResult | null;

		/** The time at which the request was processed by the server. */
		timestamp?: Date | null;
	}

	/** Represents a request that was made to the API. Including what Token was used and what resource was accessed. */
	export interface APIRequestFormProperties {
		action: FormControl<APIRequestAction | null | undefined>,

		/** The unique id used to identify a single request. */
		requestId: FormControl<string | null | undefined>,
		result: FormControl<APIRequestResult | null | undefined>,

		/** The time at which the request was processed by the server. */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateAPIRequestFormGroup() {
		return new FormGroup<APIRequestFormProperties>({
			action: new FormControl<APIRequestAction | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			result: new FormControl<APIRequestResult | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum APIRequestAction { READ = 'READ', CREATE = 'CREATE', UPDATE = 'UPDATE', DELETE = 'DELETE' }

	export interface APIRequestActor {
		account?: string | null;
		id?: string | null;
		jti?: string | null;
		requestIp?: string | null;
		userAgent?: string | null;
	}
	export interface APIRequestActorFormProperties {
		account: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		jti: FormControl<string | null | undefined>,
		requestIp: FormControl<string | null | undefined>,
		userAgent: FormControl<string | null | undefined>,
	}
	export function CreateAPIRequestActorFormGroup() {
		return new FormGroup<APIRequestActorFormProperties>({
			account: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			jti: new FormControl<string | null | undefined>(undefined),
			requestIp: new FormControl<string | null | undefined>(undefined),
			userAgent: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface APIRequestResource {
		item?: APIRequestResourceItem;
		itemVersion?: number | null;
		type?: APIRequestResourceType | null;
		vault?: APIRequestResourceVault;
	}
	export interface APIRequestResourceFormProperties {
		itemVersion: FormControl<number | null | undefined>,
		type: FormControl<APIRequestResourceType | null | undefined>,
	}
	export function CreateAPIRequestResourceFormGroup() {
		return new FormGroup<APIRequestResourceFormProperties>({
			itemVersion: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<APIRequestResourceType | null | undefined>(undefined),
		});

	}

	export interface APIRequestResourceItem {
		id?: string | null;
	}
	export interface APIRequestResourceItemFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateAPIRequestResourceItemFormGroup() {
		return new FormGroup<APIRequestResourceItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[\da-z]{26}$')]),
		});

	}

	export enum APIRequestResourceType { ITEM = 'ITEM', VAULT = 'VAULT' }

	export interface APIRequestResourceVault {
		id?: string | null;
	}
	export interface APIRequestResourceVaultFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateAPIRequestResourceVaultFormGroup() {
		return new FormGroup<APIRequestResourceVaultFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[\da-z]{26}$')]),
		});

	}

	export enum APIRequestResult { SUCCESS = 'SUCCESS', DENY = 'DENY' }

	export interface ErrorResponse {

		/** A message detailing the error */
		message?: string | null;

		/** HTTP Status Code */
		status?: number | null;
	}
	export interface ErrorResponseFormProperties {

		/** A message detailing the error */
		message: FormControl<string | null | undefined>,

		/** HTTP Status Code */
		status: FormControl<number | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Field {

		/** For fields with a purpose of `PASSWORD` this is the entropy of the value */
		entropy?: number | null;

		/** If value is not present then a new value should be generated for this field */
		generate?: boolean | null;

		/** Required */
		id: string;
		label?: string | null;

		/** Some item types, Login and Password, have fields used for autofill. This property indicates that purpose and is required for some item types. */
		purpose?: FieldPurpose | null;

		/** The recipe is used in conjunction with the "generate" property to set the character set used to generate a new secure value */
		recipe?: GeneratorRecipe;
		section?: FieldSection;

		/** Required */
		type: FieldType;
		value?: string | null;
	}
	export interface FieldFormProperties {

		/** For fields with a purpose of `PASSWORD` this is the entropy of the value */
		entropy: FormControl<number | null | undefined>,

		/** If value is not present then a new value should be generated for this field */
		generate: FormControl<boolean | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		label: FormControl<string | null | undefined>,

		/** Some item types, Login and Password, have fields used for autofill. This property indicates that purpose and is required for some item types. */
		purpose: FormControl<FieldPurpose | null | undefined>,

		/** Required */
		type: FormControl<FieldType | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateFieldFormGroup() {
		return new FormGroup<FieldFormProperties>({
			entropy: new FormControl<number | null | undefined>(undefined),
			generate: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined),
			purpose: new FormControl<FieldPurpose | null | undefined>(undefined),
			type: new FormControl<FieldType | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FieldPurpose { '' = '', USERNAME = 'USERNAME', PASSWORD = 'PASSWORD', NOTES = 'NOTES' }


	/** The recipe is used in conjunction with the "generate" property to set the character set used to generate a new secure value */
	export interface GeneratorRecipe {

		/**
		 * Minimum: 0
		 * Maximum: 3
		 */
		characterSets?: Array<string>;

		/** List of all characters that should be excluded from generated passwords. */
		excludeCharacters?: string | null;

		/**
		 * Length of the generated value
		 * Minimum: 1
		 * Maximum: 64
		 */
		length?: number | null;
	}

	/** The recipe is used in conjunction with the "generate" property to set the character set used to generate a new secure value */
	export interface GeneratorRecipeFormProperties {

		/** List of all characters that should be excluded from generated passwords. */
		excludeCharacters: FormControl<string | null | undefined>,

		/**
		 * Length of the generated value
		 * Minimum: 1
		 * Maximum: 64
		 */
		length: FormControl<number | null | undefined>,
	}
	export function CreateGeneratorRecipeFormGroup() {
		return new FormGroup<GeneratorRecipeFormProperties>({
			excludeCharacters: new FormControl<string | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(64)]),
		});

	}

	export interface FieldSection {
		id?: string | null;
	}
	export interface FieldSectionFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateFieldSectionFormGroup() {
		return new FormGroup<FieldSectionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FieldType { STRING = 'STRING', EMAIL = 'EMAIL', CONCEALED = 'CONCEALED', URL = 'URL', TOTP = 'TOTP', DATE = 'DATE', MONTH_YEAR = 'MONTH_YEAR', MENU = 'MENU' }

	export interface File {

		/** Base64-encoded contents of the file. Only set if size <= OP_MAX_INLINE_FILE_SIZE_KB kb and `inline_files` is set to `true`. */
		content?: string | null;

		/** Path of the Connect API that can be used to download the contents of this file. */
		content_path?: string | null;

		/** ID of the file */
		id?: string | null;

		/** Name of the file */
		name?: string | null;

		/** For files that are in a section, this field describes the section. */
		section?: FileSection;

		/** Size in bytes of the file */
		size?: number | null;
	}
	export interface FileFormProperties {

		/** Base64-encoded contents of the file. Only set if size <= OP_MAX_INLINE_FILE_SIZE_KB kb and `inline_files` is set to `true`. */
		content: FormControl<string | null | undefined>,

		/** Path of the Connect API that can be used to download the contents of this file. */
		content_path: FormControl<string | null | undefined>,

		/** ID of the file */
		id: FormControl<string | null | undefined>,

		/** Name of the file */
		name: FormControl<string | null | undefined>,

		/** Size in bytes of the file */
		size: FormControl<number | null | undefined>,
	}
	export function CreateFileFormGroup() {
		return new FormGroup<FileFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			content_path: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface FileSection {
		id?: string | null;
	}
	export interface FileSectionFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateFileSectionFormGroup() {
		return new FormGroup<FileSectionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FullItem extends Item {
		fields?: Array<Field>;
		files?: Array<File>;
		FullItemSections?: Array<FullItemSections>;
	}
	export interface FullItemFormProperties extends ItemFormProperties {
	}
	export function CreateFullItemFormGroup() {
		return new FormGroup<FullItemFormProperties>({
			category: new FormControl<ItemCategory | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			favorite: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[\da-z]{26}$')]),
			lastEditedBy: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ItemState | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface FullItemSections {
		id?: string | null;
		label?: string | null;
	}
	export interface FullItemSectionsFormProperties {
		id: FormControl<string | null | undefined>,
		label: FormControl<string | null | undefined>,
	}
	export function CreateFullItemSectionsFormGroup() {
		return new FormGroup<FullItemSectionsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Item {

		/** Required */
		category: ItemCategory;
		createdAt?: Date | null;
		favorite?: boolean | null;
		id?: string | null;
		lastEditedBy?: string | null;
		state?: ItemState | null;
		tags?: Array<string>;
		title?: string | null;
		updatedAt?: Date | null;
		ItemUrls?: Array<ItemUrls>;

		/** Required */
		vault: ItemVault;
		version?: number | null;
	}
	export interface ItemFormProperties {

		/** Required */
		category: FormControl<ItemCategory | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		favorite: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastEditedBy: FormControl<string | null | undefined>,
		state: FormControl<ItemState | null | undefined>,
		title: FormControl<string | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreateItemFormGroup() {
		return new FormGroup<ItemFormProperties>({
			category: new FormControl<ItemCategory | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			favorite: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[\da-z]{26}$')]),
			lastEditedBy: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ItemState | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ItemCategory { LOGIN = 'LOGIN', PASSWORD = 'PASSWORD', API_CREDENTIAL = 'API_CREDENTIAL', SERVER = 'SERVER', DATABASE = 'DATABASE', CREDIT_CARD = 'CREDIT_CARD', MEMBERSHIP = 'MEMBERSHIP', PASSPORT = 'PASSPORT', SOFTWARE_LICENSE = 'SOFTWARE_LICENSE', OUTDOOR_LICENSE = 'OUTDOOR_LICENSE', SECURE_NOTE = 'SECURE_NOTE', WIRELESS_ROUTER = 'WIRELESS_ROUTER', BANK_ACCOUNT = 'BANK_ACCOUNT', DRIVER_LICENSE = 'DRIVER_LICENSE', IDENTITY = 'IDENTITY', REWARD_PROGRAM = 'REWARD_PROGRAM', DOCUMENT = 'DOCUMENT', EMAIL_ACCOUNT = 'EMAIL_ACCOUNT', SOCIAL_SECURITY_NUMBER = 'SOCIAL_SECURITY_NUMBER', MEDICAL_RECORD = 'MEDICAL_RECORD', SSH_KEY = 'SSH_KEY', CUSTOM = 'CUSTOM' }

	export enum ItemState { ARCHIVED = 'ARCHIVED', DELETED = 'DELETED' }

	export interface ItemUrls {

		/** Required */
		href: string;
		label?: string | null;
		primary?: boolean | null;
	}
	export interface ItemUrlsFormProperties {

		/** Required */
		href: FormControl<string | null | undefined>,
		label: FormControl<string | null | undefined>,
		primary: FormControl<boolean | null | undefined>,
	}
	export function CreateItemUrlsFormGroup() {
		return new FormGroup<ItemUrlsFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined),
			primary: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ItemVault {

		/** Required */
		id: string;
	}
	export interface ItemVaultFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateItemVaultFormGroup() {
		return new FormGroup<ItemVaultFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[\da-z]{26}$')]),
		});

	}

	export interface PatchElement {

		/** Required */
		op: PatchElementOp;

		/**
		 * An RFC6901 JSON Pointer pointing to the Item document, an Item Attribute, and Item Field by Field ID, or an Item Field Attribute
		 * Required
		 */
		path: string;
		value?: string | null;
	}
	export interface PatchElementFormProperties {

		/** Required */
		op: FormControl<PatchElementOp | null | undefined>,

		/**
		 * An RFC6901 JSON Pointer pointing to the Item document, an Item Attribute, and Item Field by Field ID, or an Item Field Attribute
		 * Required
		 */
		path: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreatePatchElementFormGroup() {
		return new FormGroup<PatchElementFormProperties>({
			op: new FormControl<PatchElementOp | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PatchElementOp { add = 'add', remove = 'remove', replace = 'replace' }


	/** The state of a registered server dependency. */
	export interface ServiceDependency {

		/** Human-readable message for explaining the current state. */
		message?: string | null;
		service?: string | null;
		status?: string | null;
	}

	/** The state of a registered server dependency. */
	export interface ServiceDependencyFormProperties {

		/** Human-readable message for explaining the current state. */
		message: FormControl<string | null | undefined>,
		service: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateServiceDependencyFormGroup() {
		return new FormGroup<ServiceDependencyFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Vault {

		/** The vault version */
		attributeVersion?: number | null;

		/** The version of the vault contents */
		contentVersion?: number | null;
		createdAt?: Date | null;
		description?: string | null;
		id?: string | null;

		/** Number of active items in the vault */
		items?: number | null;
		name?: string | null;
		type?: VaultType | null;
		updatedAt?: Date | null;
	}
	export interface VaultFormProperties {

		/** The vault version */
		attributeVersion: FormControl<number | null | undefined>,

		/** The version of the vault contents */
		contentVersion: FormControl<number | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Number of active items in the vault */
		items: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<VaultType | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateVaultFormGroup() {
		return new FormGroup<VaultFormProperties>({
			attributeVersion: new FormControl<number | null | undefined>(undefined),
			contentVersion: new FormControl<number | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[\da-z]{26}$')]),
			items: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<VaultType | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum VaultType { USER_CREATED = 'USER_CREATED', PERSONAL = 'PERSONAL', EVERYONE = 'EVERYONE', TRANSFER = 'TRANSFER' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve a list of API Requests that have been made.
		 * Get activity
		 * @param {number} limit How many API Events should be retrieved in a single request.
		 * @param {number} offset How far into the collection of API Events should the response start
		 * @return {Array<APIRequest>} OK
		 */
		GetApiActivity(limit: number | null | undefined, offset: number | null | undefined): Observable<Array<APIRequest>> {
			return this.http.get<Array<APIRequest>>(this.baseUri + 'activity?limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Get state of the server and its dependencies.
		 * Get health
		 * @return {GetServerHealthReturn} OK
		 */
		GetServerHealth(): Observable<GetServerHealthReturn> {
			return this.http.get<GetServerHealthReturn>(this.baseUri + 'health', {});
		}

		/**
		 * Ping the server for liveness
		 * Get heartbeat
		 * @return {string} OK
		 */
		GetHeartbeat(): Observable<string> {
			return this.http.get(this.baseUri + 'heartbeat', { responseType: 'text' });
		}

		/**
		 * Query server for exposed Prometheus metrics
		 * See Prometheus documentation for a complete data model.
		 * Get metrics
		 * @return {string} Successfully returned Prometheus metrics
		 */
		GetPrometheusMetrics(): Observable<string> {
			return this.http.get(this.baseUri + 'metrics', { responseType: 'text' });
		}

		/**
		 * Get all Vaults
		 * Get vaults
		 * @param {string} filter Filter the Vault collection based on Vault name using SCIM eq filter
		 * @return {Array<Vault>} OK
		 */
		GetVaults(filter: string | null | undefined): Observable<Array<Vault>> {
			return this.http.get<Array<Vault>>(this.baseUri + 'vaults?filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Get Vault details and metadata
		 * Get vaults/{vaultUuid}
		 * @param {string} vaultUuid The UUID of the Vault to fetch Items from
		 * @return {Vault} OK
		 */
		GetVaultById(vaultUuid: string): Observable<Vault> {
			return this.http.get<Vault>(this.baseUri + 'vaults/' + (vaultUuid == null ? '' : encodeURIComponent(vaultUuid)), {});
		}

		/**
		 * Get all items for inside a Vault
		 * Get vaults/{vaultUuid}/items
		 * @param {string} vaultUuid The UUID of the Vault to fetch Items from
		 * @param {string} filter Filter the Item collection based on Item name using SCIM eq filter
		 * @return {Array<Item>} OK
		 */
		GetVaultItems(vaultUuid: string, filter: string | null | undefined): Observable<Array<Item>> {
			return this.http.get<Array<Item>>(this.baseUri + 'vaults/' + (vaultUuid == null ? '' : encodeURIComponent(vaultUuid)) + '/items&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Create a new Item
		 * Post vaults/{vaultUuid}/items
		 * @param {string} vaultUuid The UUID of the Vault to create an Item in
		 * @return {FullItem} OK
		 */
		CreateVaultItem(vaultUuid: string, requestBody: FullItem): Observable<FullItem> {
			return this.http.post<FullItem>(this.baseUri + 'vaults/' + (vaultUuid == null ? '' : encodeURIComponent(vaultUuid)) + '/items', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an Item
		 * Delete vaults/{vaultUuid}/items/{itemUuid}
		 * @param {string} vaultUuid The UUID of the Vault the item is in
		 * @param {string} itemUuid The UUID of the Item to update
		 * @return {void} 
		 */
		DeleteVaultItem(vaultUuid: string, itemUuid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'vaults/' + (vaultUuid == null ? '' : encodeURIComponent(vaultUuid)) + '/items/' + (itemUuid == null ? '' : encodeURIComponent(itemUuid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the details of an Item
		 * Get vaults/{vaultUuid}/items/{itemUuid}
		 * @param {string} vaultUuid The UUID of the Vault to fetch Item from
		 * @param {string} itemUuid The UUID of the Item to fetch
		 * @return {FullItem} OK
		 */
		GetVaultItemById(vaultUuid: string, itemUuid: string): Observable<FullItem> {
			return this.http.get<FullItem>(this.baseUri + 'vaults/' + (vaultUuid == null ? '' : encodeURIComponent(vaultUuid)) + '/items/' + (itemUuid == null ? '' : encodeURIComponent(itemUuid)), {});
		}

		/**
		 * Update a subset of Item attributes
		 * Applies a modified [RFC6902 JSON Patch](https://tools.ietf.org/html/rfc6902) document to an Item or ItemField. This endpoint only supports `add`, `remove` and `replace` operations.
		 * When modifying a specific ItemField, the ItemField's ID in the `path` attribute of the operation object: `/fields/{fieldId}`
		 * Patch vaults/{vaultUuid}/items/{itemUuid}
		 * @param {string} vaultUuid The UUID of the Vault the item is in
		 * @param {string} itemUuid The UUID of the Item to update
		 * @return {FullItem} OK - Item updated. If no Patch operations were provided, Item is unmodified.
		 */
		PatchVaultItem(vaultUuid: string, itemUuid: string, requestBody: Array<PatchVaultItemPatchBody>): Observable<FullItem> {
			return this.http.patch<FullItem>(this.baseUri + 'vaults/' + (vaultUuid == null ? '' : encodeURIComponent(vaultUuid)) + '/items/' + (itemUuid == null ? '' : encodeURIComponent(itemUuid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update an Item
		 * Put vaults/{vaultUuid}/items/{itemUuid}
		 * @param {string} vaultUuid The UUID of the Item's Vault
		 * @param {string} itemUuid The UUID of the Item to update
		 * @return {FullItem} OK
		 */
		UpdateVaultItem(vaultUuid: string, itemUuid: string, requestBody: FullItem): Observable<FullItem> {
			return this.http.put<FullItem>(this.baseUri + 'vaults/' + (vaultUuid == null ? '' : encodeURIComponent(vaultUuid)) + '/items/' + (itemUuid == null ? '' : encodeURIComponent(itemUuid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all the files inside an Item
		 * Get vaults/{vaultUuid}/items/{itemUuid}/files
		 * @param {string} vaultUuid The UUID of the Vault to fetch Items from
		 * @param {string} itemUuid The UUID of the Item to fetch files from
		 * @param {boolean} inline_files Tells server to return the base64-encoded file contents in the response.
		 * @return {Array<File>} OK
		 */
		GetItemFiles(vaultUuid: string, itemUuid: string, inline_files: boolean | null | undefined): Observable<Array<File>> {
			return this.http.get<Array<File>>(this.baseUri + 'vaults/' + (vaultUuid == null ? '' : encodeURIComponent(vaultUuid)) + '/items/' + (itemUuid == null ? '' : encodeURIComponent(itemUuid)) + '/files&inline_files=' + inline_files, {});
		}

		/**
		 * Get the details of a File
		 * Get vaults/{vaultUuid}/items/{itemUuid}/files/{fileUuid}
		 * @param {string} vaultUuid The UUID of the Vault to fetch Item from
		 * @param {string} itemUuid The UUID of the Item to fetch File from
		 * @param {string} fileUuid The UUID of the File to fetch
		 * @param {boolean} inline_files Tells server to return the base64-encoded file contents in the response.
		 * @return {File} OK
		 */
		GetDetailsOfFileById(vaultUuid: string, itemUuid: string, fileUuid: string, inline_files: boolean | null | undefined): Observable<File> {
			return this.http.get<File>(this.baseUri + 'vaults/' + (vaultUuid == null ? '' : encodeURIComponent(vaultUuid)) + '/items/' + (itemUuid == null ? '' : encodeURIComponent(itemUuid)) + '/files/' + (fileUuid == null ? '' : encodeURIComponent(fileUuid)) + '&inline_files=' + inline_files, {});
		}

		/**
		 * Get the content of a File
		 * Get vaults/{vaultUuid}/items/{itemUuid}/files/{fileUuid}/content
		 * @return {void} Success
		 */
		DownloadFileByID(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'vaults/{vaultUuid}/items/{itemUuid}/files/{fileUuid}/content', { observe: 'response', responseType: 'text' });
		}
	}

	export interface GetServerHealthReturn {
		dependencies?: Array<ServiceDependency>;

		/** Required */
		name: string;

		/**
		 * The Connect server's version
		 * Required
		 */
		version: string;
	}
	export interface GetServerHealthReturnFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/**
		 * The Connect server's version
		 * Required
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGetServerHealthReturnFormGroup() {
		return new FormGroup<GetServerHealthReturnFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatchVaultItemPatchBody {

		/** Required */
		op: PatchElementOp;

		/**
		 * An RFC6901 JSON Pointer pointing to the Item document, an Item Attribute, and Item Field by Field ID, or an Item Field Attribute
		 * Required
		 */
		path: string;
		value?: string | null;
	}
	export interface PatchVaultItemPatchBodyFormProperties {

		/** Required */
		op: FormControl<PatchElementOp | null | undefined>,

		/**
		 * An RFC6901 JSON Pointer pointing to the Item document, an Item Attribute, and Item Field by Field ID, or an Item Field Attribute
		 * Required
		 */
		path: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreatePatchVaultItemPatchBodyFormGroup() {
		return new FormGroup<PatchVaultItemPatchBodyFormProperties>({
			op: new FormControl<PatchElementOp | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

}

