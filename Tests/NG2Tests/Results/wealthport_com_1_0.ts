import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Archivable_Object {
		archived?: boolean | null;

		/**
		 * Required
		 * Min length: 36
		 * Max length: 36
		 */
		id: string;
	}
	export interface Archivable_ObjectFormProperties {
		archived: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Min length: 36
		 * Max length: 36
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateArchivable_ObjectFormGroup() {
		return new FormGroup<Archivable_ObjectFormProperties>({
			archived: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36)]),
		});

	}

	export interface Existing_Folder {
	}
	export interface Existing_FolderFormProperties {
	}
	export function CreateExisting_FolderFormGroup() {
		return new FormGroup<Existing_FolderFormProperties>({
		});

	}

	export interface Existing_Order {
	}
	export interface Existing_OrderFormProperties {
	}
	export function CreateExisting_OrderFormGroup() {
		return new FormGroup<Existing_OrderFormProperties>({
		});

	}

	export interface Existing_Recipe {
	}
	export interface Existing_RecipeFormProperties {
	}
	export function CreateExisting_RecipeFormGroup() {
		return new FormGroup<Existing_RecipeFormProperties>({
		});

	}

	export interface Existing_Source {
	}
	export interface Existing_SourceFormProperties {
	}
	export function CreateExisting_SourceFormGroup() {
		return new FormGroup<Existing_SourceFormProperties>({
		});

	}

	export interface Folder_Request {
	}
	export interface Folder_RequestFormProperties {
	}
	export function CreateFolder_RequestFormGroup() {
		return new FormGroup<Folder_RequestFormProperties>({
		});

	}

	export interface Order_Request {
	}
	export interface Order_RequestFormProperties {
	}
	export function CreateOrder_RequestFormGroup() {
		return new FormGroup<Order_RequestFormProperties>({
		});

	}

	export interface Source_Request {
	}
	export interface Source_RequestFormProperties {
	}
	export function CreateSource_RequestFormGroup() {
		return new FormGroup<Source_RequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve Folders
		 * Retrieves all Folders in the Data Inventory.
		 * Get folders
		 * @return {Array<Existing_Folder>} Folders successfully retrieved
		 */
		RetrieveFolders(): Observable<Array<Existing_Folder>> {
			return this.http.get<Array<Existing_Folder>>(this.baseUri + 'folders', {});
		}

		/**
		 * Create Folder
		 * Creates the specified Folder in the Data Inventory.
		 * Post folders
		 * @param {Folder_Request} requestBody JSON
		 * @return {void} 
		 */
		CreateFolder(requestBody: Folder_Request): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'folders', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve Folder
		 * Retrieves the specified Folder.
		 * Get folders/{id}
		 * @param {string} id Folder ID of the Folder to retrieve
		 * @return {Existing_Folder} Folder successfully retrieved
		 */
		RetrieveFolder(id: string): Observable<Existing_Folder> {
			return this.http.get<Existing_Folder>(this.baseUri + 'folders/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Update Folder
		 * Updates the specified Folder.
		 * Put folders/{id}
		 * @param {string} id Folder ID of the Folder to update
		 * @param {Folder_Request} requestBody JSON
		 * @return {void} Folder successfully updated
		 */
		UpdateFolder(id: string, requestBody: Folder_Request): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'folders/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Folder
		 * Deletes the specified Folder and all contained Sources from the Data Inventory.
		 * Delete folders/{id}
		 * @param {string} id Folder ID of the Folder to delete, including any Sources contained
		 * @return {void} 
		 */
		DeleteFolder(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'folders/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve Sources
		 * Retrieves all Sources of the specified Folder.
		 * Get folders/{id}/sources
		 * @param {string} id Folder ID of the Folder to retrieve its Sources from
		 * @return {Existing_Source} Sources successfully retrieved
		 */
		RetrieveFolderSources(id: string): Observable<Existing_Source> {
			return this.http.get<Existing_Source>(this.baseUri + 'folders/' + (id == null ? '' : encodeURIComponent(id)) + '/sources', {});
		}

		/**
		 * Delete Sources
		 * Deletes all Sources in the specified Folder.
		 * Delete folders/{id}/sources
		 * @param {string} id Folder ID of the Folder to delete all Sources from
		 * @return {void} 
		 */
		DeleteFolderSources(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'folders/' + (id == null ? '' : encodeURIComponent(id)) + '/sources', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Result
		 * Returns the result of a finished Job.
		 * Get jobs/{id}/result
		 * @param {string} id Job ID of the job to retrieve its result
		 * @return {string} Job has finished, potentially with errors, result is returned as JSON in the response
		 */
		GetResult(id: string): Observable<string> {
			return this.http.get(this.baseUri + 'jobs/' + (id == null ? '' : encodeURIComponent(id)) + '/result', { responseType: 'text' });
		}

		/**
		 * Get Status
		 * Retrieves the status of a Job.
		 * Get jobs/{id}/status
		 * @param {string} id Job ID of the job to retrieve its status
		 * @return {string} Job has finished, potentially with errors, result is available and Job ID is returned in the response
		 */
		GetStatus(id: string): Observable<string> {
			return this.http.get(this.baseUri + 'jobs/' + (id == null ? '' : encodeURIComponent(id)) + '/status', { responseType: 'text' });
		}

		/**
		 * Retrieve Orders
		 * Retrieves all previously submitted Orders.
		 * Get orders
		 * @return {Array<Existing_Order>} Orders successfully retrieved
		 */
		RetrieveOrders(): Observable<Array<Existing_Order>> {
			return this.http.get<Array<Existing_Order>>(this.baseUri + 'orders', {});
		}

		/**
		 * Create Order
		 * Creates a new Order to be submitted.<p>Orders reference one or more Sources, e.g. uploaded files, as well as one or more Folders (which again can contain Sources).The Recipe describes what to do with the referenced sources and where to publish the processing result to.</p>
		 * Post orders
		 * @param {Order_Request} requestBody JSON
		 * @return {void} 
		 */
		CreateOrder(requestBody: Order_Request): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'orders', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve Order
		 * Retrieves the specified Order.
		 * Get orders/{id}
		 * @param {string} id Order ID of the order to retrieve
		 * @return {Existing_Order} Order successfully retrieved
		 */
		RetrieveOrder(id: string): Observable<Existing_Order> {
			return this.http.get<Existing_Order>(this.baseUri + 'orders/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Update Order
		 * Updates the specified Order.
		 * Put orders/{id}
		 * @param {string} id Order ID of the order to update
		 * @param {Order_Request} requestBody JSON
		 * @return {void} Order successfully updated
		 */
		UpdateOrder(id: string, requestBody: Order_Request): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'orders/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Order
		 * Deletes the specified Order.
		 * Delete orders/{id}
		 * @param {string} id Order ID of the order to delete
		 * @return {void} 
		 */
		DeleteOrder(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'orders/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Submit Order
		 * Submits the specified Order for processing and launches a corresponding job.
		 * Post orders/{id}/submit
		 * @param {string} id Order ID of the order to submit for processing
		 * @return {void} 
		 */
		SubmitOrder(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'orders/' + (id == null ? '' : encodeURIComponent(id)) + '/submit', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve Recipes
		 * Retrieves all available Recipes.
		 * Get recipes
		 * @return {Array<Existing_Recipe>} Recipes successfully retrieved
		 */
		RetrieveRecipes(): Observable<Array<Existing_Recipe>> {
			return this.http.get<Array<Existing_Recipe>>(this.baseUri + 'recipes', {});
		}

		/**
		 * Retrieve Recipe
		 * Retrieves the specified Recipe.
		 * Get recipes/{id}
		 * @param {string} id Recipe ID of the recipe to retrieve
		 * @return {Existing_Recipe} Recipe successfully retrieved
		 */
		RetrieveRecipe(id: string): Observable<Existing_Recipe> {
			return this.http.get<Existing_Recipe>(this.baseUri + 'recipes/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieve Instructions
		 * Retrieves the instructions of the specified Recipe.
		 * Get recipes/{id}/instructions
		 * @param {string} id Recipe ID of the recipe whose instructions to retrieve
		 * @return {string} Instructions successfully retrieved
		 */
		RetrieveInstructions(id: string): Observable<string> {
			return this.http.get(this.baseUri + 'recipes/' + (id == null ? '' : encodeURIComponent(id)) + '/instructions', { responseType: 'text' });
		}

		/**
		 * Update Instructions
		 * Updates the instructions of the specified Recipe.
		 * Put recipes/{id}/instructions
		 * @param {string} id Recipe ID of the recipe whose instructions to update
		 * @param {string} requestBody JSON instructions to update the Recipe
		 * @return {void} Instructions successfully updated
		 */
		UpdateInstructions(id: string, requestBody: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'recipes/' + (id == null ? '' : encodeURIComponent(id)) + '/instructions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve Sources
		 * Retrieves all Sources stored in the Data Inventory.
		 * Get sources
		 * @return {Array<Existing_Source>} Sources successfully retrieved
		 */
		RetrieveSources(): Observable<Array<Existing_Source>> {
			return this.http.get<Array<Existing_Source>>(this.baseUri + 'sources', {});
		}

		/**
		 * Create Source
		 * Creates the specified Source.<p>Sources are either uploaded files or a reference to a database. They are referenced in orders to specify which data needs processing.</p><p>Most clients should probably use the Upload File API which implicitly creates a new source on successful file upload.</p>
		 * Post sources
		 * @param {Source_Request} requestBody JSON
		 * @return {void} 
		 */
		CreateSource(requestBody: Source_Request): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Upload File
		 * Initiates a file upload and returns the URL where to upload the file to.<p>Calling this API generates a secure, unique and time-restricted URL where the file can be uploaded to. The URL is available in the <pre>Location</pre> HTTP header of the response. The temporal validity of the URL is available in the <pre>Cache-Control</pre> HTTP header of the response.Clients may perform a <pre>HTTP PUT</pre> request on the URL to upload the file using a form where a file <pre>sample.csv</pre> is passed as property <pre>file=sample.csv</pre>. For security reasons, clients must pass all HTTP headers as returned by the <pre>X-WP-Upload-Headers</pre> in the response, together with their values. This procedure ensures a secure, encrypted file upload.</p><p>Note that calling this API automatically generates a Source, there is no need to call the Create Source API.</p>
		 * Put sources/upload
		 * @param {string} name Name of the source to create. The name must correspond to the exact file name of the file being uploaded.
		 * @param {string} source Existing source ID to create a new version from
		 * @param {string} folder Folder ID where to upload source to
		 * @param {string} contentType MIME type of the source file
		 * @param {string} encoding Encoding of the source file
		 * @return {void} 
		 */
		GetUploadUrl(name: string, source: string | null | undefined, folder: string | null | undefined, contentType: string | null | undefined, encoding: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'sources/upload?name=' + (name == null ? '' : encodeURIComponent(name)) + '&source=' + (source == null ? '' : encodeURIComponent(source)) + '&folder=' + (folder == null ? '' : encodeURIComponent(folder)) + '&contentType=' + (contentType == null ? '' : encodeURIComponent(contentType)) + '&encoding=' + (encoding == null ? '' : encodeURIComponent(encoding)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve Source
		 * Retrieves the specified Source.
		 * Get sources/{id}
		 * @param {string} id Source ID of the source to retrieve
		 * @return {Existing_Source} Source successfully retrieved
		 */
		RetrieveSource(id: string): Observable<Existing_Source> {
			return this.http.get<Existing_Source>(this.baseUri + 'sources/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Update Source
		 * Updates the specified Source.
		 * Put sources/{id}
		 * @param {string} id Source ID of Source to update
		 * @param {Source_Request} requestBody JSON
		 * @return {void} Source successfully updated
		 */
		UpdateSource(id: string, requestBody: Source_Request): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'sources/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Source
		 * Deletes the specified Source.
		 * Delete sources/{id}
		 * @param {string} id Source ID of the Source to delete
		 * @return {void} 
		 */
		DeleteSource(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'sources/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Download File
		 * Initiates a file download and returns the URL where to download the file from.<p>Calling this API generates a secure, unique and time-restricted URL where the file can be downloaded from. The URL is available in the <pre>Location</pre> HTTP header of the response. The time restriction of the URL is availablein the <pre>Cache-Control</pre> HTTP header of the response.Clients may perform a <pre>HTTP GET</pre> request on the URL to download the file.</p>
		 * Get sources/{id}/download
		 * @param {string} id Source ID of file to download
		 * @return {string} Source file download initiated
		 */
		GetDownloadUrl(id: string): Observable<string> {
			return this.http.get(this.baseUri + 'sources/' + (id == null ? '' : encodeURIComponent(id)) + '/download', { responseType: 'text' });
		}
	}

}

