import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace My_Pet_Client {
	export interface Address {
		city?: string | null;
		state?: string | null;
		street?: string | null;
		zip?: string | null;
	}

	export interface ApiResponse {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		message?: string | null;
		type?: string | null;
	}

	export interface Category {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		name?: string | null;
	}

	export interface Customer {
		address?: Array<Address>;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		username?: string | null;
	}

	export interface Order {
		complete?: boolean | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		petId?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		quantity?: number | null;
		shipDate?: Date | null;

		/** Order Status */
		status?: OrderStatus | null;
	}

	export enum OrderStatus { placed = 0, approved = 1, delivered = 2 }

	export interface Pet {
		category?: Category;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;

		/** Required */
		name: string;

		/** Required */
		photoUrls: Array<string>;

		/** pet status in the store */
		status?: PetStatus | null;
		tags?: Array<Tag>;
	}

	export enum PetStatus { available = 0, pending = 1, sold = 2 }

	export interface Tag {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		name?: string | null;
	}

	export interface User {
		email?: string | null;
		firstName?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		lastName?: string | null;
		password?: string | null;
		phone?: string | null;
		username?: string | null;

		/**
		 * User Status
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		userStatus?: number | null;
	}

	@Injectable()
	export class PetClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Add a new pet to the store
		 * Add a new pet to the store
		 * Post pet
		 * @param {Pet} requestBody Create a new pet in the store
		 * @return {Pet} Successful operation
		 */
		AddPet(requestBody: Pet, headersHandler?: () => HttpHeaders): Observable<Pet> {
			return this.http.post<Pet>(this.baseUri + 'pet', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Create user
		 * This can only be done by the logged in user.
		 * Post user
		 * @param {User} requestBody Created user object
		 * @return {void} 
		 */
		CreateUser(requestBody: User, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'user', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates list of users with given input array
		 * Creates list of users with given input array
		 * Post user/createWithList
		 * @return {User} Successful operation
		 */
		CreateUsersWithListInput(requestBody: Array<User>, headersHandler?: () => HttpHeaders): Observable<User> {
			return this.http.post<User>(this.baseUri + 'user/createWithList', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete purchase order by ID
		 * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
		 * Delete store/order/{orderId}
		 * @param {string} orderId ID of the order that needs to be deleted
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		DeleteOrder(orderId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'store/order/' + orderId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a pet
		 * delete a pet
		 * Delete pet/{petId}
		 * @param {string} petId Pet id to delete
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		DeletePet(petId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'pet/' + petId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete user
		 * This can only be done by the logged in user.
		 * Delete user/{username}
		 * @param {string} username The name that needs to be deleted
		 * @return {void} 
		 */
		DeleteUser(username: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'user/' + (username == null ? '' : encodeURIComponent(username)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Finds Pets by status
		 * Multiple status values can be provided with comma separated strings
		 * Get pet/findByStatus
		 * @param {PetStatus} status Status values that need to be considered for filter
		 * @return {Array<Pet>} successful operation
		 */
		FindPetsByStatus(status: PetStatus | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Pet>> {
			return this.http.get<Array<Pet>>(this.baseUri + 'pet/findByStatus?status=' + status, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Finds Pets by tags
		 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
		 * Get pet/findByTags
		 * @param {Array<string>} tags Tags to filter by
		 * @return {Array<Pet>} successful operation
		 */
		FindPetsByTags(tags: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Pet>> {
			return this.http.get<Array<Pet>>(this.baseUri + 'pet/findByTags?' + tags?.map(z => `tags=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns pet inventories by status
		 * Returns a map of status codes to quantities
		 * Get store/inventory
		 * @return {{[id: string]: number }} successful operation
		 */
		GetInventory(headersHandler?: () => HttpHeaders): Observable<{[id: string]: number }> {
			return this.http.get<{[id: string]: number }>(this.baseUri + 'store/inventory', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Find purchase order by ID
		 * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
		 * Get store/order/{orderId}
		 * @param {string} orderId ID of order that needs to be fetched
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Order} successful operation
		 */
		GetOrderById(orderId: string, headersHandler?: () => HttpHeaders): Observable<Order> {
			return this.http.get<Order>(this.baseUri + 'store/order/' + orderId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Find pet by ID
		 * Returns a single pet
		 * Get pet/{petId}
		 * @param {string} petId ID of pet to return
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Pet} successful operation
		 */
		GetPetById(petId: string, headersHandler?: () => HttpHeaders): Observable<Pet> {
			return this.http.get<Pet>(this.baseUri + 'pet/' + petId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get user by user name
		 * Get user/{username}
		 * @param {string} username The name that needs to be fetched. Use user1 for testing. 
		 * @return {User} successful operation
		 */
		GetUserByName(username: string, headersHandler?: () => HttpHeaders): Observable<User> {
			return this.http.get<User>(this.baseUri + 'user/' + (username == null ? '' : encodeURIComponent(username)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Logs user into the system
		 * Get user/login
		 * @param {string} username The user name for login
		 * @param {string} password The password for login in clear text
		 * @return {string} successful operation
		 */
		LoginUser(username: string | null | undefined, password: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'user/login?username=' + (username == null ? '' : encodeURIComponent(username)) + '&password=' + (password == null ? '' : encodeURIComponent(password)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Logs out current logged in user session
		 * Get user/logout
		 * @return {void} 
		 */
		LogoutUser(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'user/logout', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Place an order for a pet
		 * Place a new order in the store
		 * Post store/order
		 * @return {Order} successful operation
		 */
		PlaceOrder(requestBody: Order, headersHandler?: () => HttpHeaders): Observable<Order> {
			return this.http.post<Order>(this.baseUri + 'store/order', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update an existing pet
		 * Update an existing pet by Id
		 * Put pet
		 * @param {Pet} requestBody Update an existent pet in the store
		 * @return {Pet} Successful operation
		 */
		UpdatePet(requestBody: Pet, headersHandler?: () => HttpHeaders): Observable<Pet> {
			return this.http.put<Pet>(this.baseUri + 'pet', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates a pet in the store with form data
		 * Post pet/{petId}
		 * @param {string} petId ID of pet that needs to be updated
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} name Name of pet that needs to be updated
		 * @param {string} status Status of pet that needs to be updated
		 * @return {void} 
		 */
		UpdatePetWithForm(petId: string, name: string | null | undefined, status: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pet/' + petId + '?name=' + (name == null ? '' : encodeURIComponent(name)) + '&status=' + (status == null ? '' : encodeURIComponent(status)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update user
		 * This can only be done by the logged in user.
		 * Put user/{username}
		 * @param {string} username name that need to be deleted
		 * @param {User} requestBody Update an existent user in the store
		 * @return {void} 
		 */
		UpdateUser(username: string, requestBody: User, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'user/' + (username == null ? '' : encodeURIComponent(username)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}
	}

}

