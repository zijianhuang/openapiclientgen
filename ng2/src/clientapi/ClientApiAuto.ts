import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace My_Pet_Client {
	export interface ApiResponse {
		code?: number;
		type?: string;
		message?: string;
	}


	/**A representation of a cat */
	export interface Cat extends Pet {

		/**The measured skill for hunting */
		huntingSkill: CatHuntingSkill;
	}

	export enum CatHuntingSkill { clueless = 0, lazy = 1, adventurous = 2, aggressive = 3 }

	export interface Category {

		/**Category ID */
		id?: number;

		/**
		 * Category name
		 * Min length: 1
		 */
		name?: string;

		/**Test Sub Category */
		sub?: string;
	}


	/**A representation of a dog */
	export interface Dog extends Pet {

		/**
		 * The size of the pack the dog is from
		 * Minimum: 1
		 */
		packSize: number;
	}


	/**A representation of a honey bee */
	export interface HoneyBee extends Pet {

		/**Average amount of honey produced per day in ounces */
		honeyPerDay: number;
	}

	export interface Order {

		/**Order ID */
		id?: number;

		/**Pet ID */
		petId?: number;
		quantity?: number;

		/**Estimated ship date */
		shipDate?: Date;

		/**Order Status */
		status?: OrderStatus;

		/**Indicates whenever order was completed or not */
		complete?: boolean;

		/**Unique Request Id */
		requestId?: string;
	}

	export enum OrderStatus { placed = 0, approved = 1, delivered = 2 }

	export interface Pet {

		/**Pet ID */
		id?: number;

		/**Categories this pet belongs to */
		category?: string;

		/**The name given to a pet */
		name: string;

		/**
		 * The list of URL to a cute photos featuring pet
		 * Maximum items: 20
		 */
		photoUrls: Array<string>;
		friend?: string;

		/**
		 * Tags attached to the pet
		 * Minimum items: 1
		 */
		tags?: Array<Tag>;

		/**Pet status in the store */
		status?: PetStatus;

		/**Type of a pet */
		petType?: string;
	}

	export enum PetStatus { available = 0, pending = 1, sold = 2 }

	export interface Tag {

		/**Tag ID */
		id?: number;

		/**
		 * Tag name
		 * Min length: 1
		 */
		name?: string;
	}

	export interface User {
		id?: number;
		pet?: string;

		/**
		 * User supplied username
		 * Min length: 4
		 */
		username?: string;

		/**
		 * User first name
		 * Min length: 1
		 */
		firstName?: string;

		/**
		 * User last name
		 * Min length: 1
		 */
		lastName?: string;

		/**User email address */
		email?: string;

		/**
		 * User password, MUST contain a mix of upper and lower case letters, as well as digits
		 * Min length: 8
		 * Pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/
		 */
		password?: string;

		/**
		 * User phone number in international format
		 * Pattern: /^\+(?:[0-9]-?){6,14}[0-9]$/
		 */
		phone?: string;

		/**User status */
		userStatus?: number;
	}

	@Injectable()
	export class PetClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Add a new pet to the store
		 * Add new pet to the store inventory.
		 * Post pet
		 * @param {Pet} requestBody Pet object that needs to be added to the store
		 * @return {void} 
		 */
		AddPet(requestBody: Pet, headersHandler?: (headers: HttpHeaders)=>{}): Observable<Response> {
			let headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' });
			if (headersHandler){
				headersHandler(headers);
			}
			return this.http.post<Response>(this.baseUri + 'pet', JSON.stringify(requestBody), { headers: headers });
		}

		/**
		 * Update an existing pet
		 * Put pet
		 * @param {Pet} requestBody Pet object that needs to be added to the store
		 * @return {void} 
		 */
		UpdatePet(requestBody: Pet, headersHandler?: (headers: HttpHeaders)=>{}): Observable<Response> {
			let headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' });
			if (headersHandler){
				headersHandler(headers);
			}
			return this.http.put<Response>(this.baseUri + 'pet', JSON.stringify(requestBody), { headers: headers });
		}

		/**
		 * Find pet by ID
		 * Returns a single pet
		 * Get pet/{petId}
		 * @param {number} petId ID of pet to return
		 * @return {Pet} successful operation
		 */
		GetPetById(petId: number, headersHandler?: (headers: HttpHeaders)=>{}): Observable<Pet> {
			let headers: HttpHeaders = new HttpHeaders();
			if (headersHandler) {
				headersHandler(headers);
			}
			return this.http.get<Pet>(this.baseUri + 'pet/' + petId, { headers: headers });
		}

		/**
		 * Deletes a pet
		 * Delete pet/{petId}
		 * @param {number} petId Pet id to delete
		 * @return {void} 
		 */
		DeletePet(petId: number, headersHandler?: (headers: HttpHeaders)=>{}): Observable<Response> {
			let headers: HttpHeaders = new HttpHeaders();
			if (headersHandler) {
				headersHandler(headers);
			}
			return this.http.delete<Response>(this.baseUri + 'pet/' + petId, { headers: headers });
		}

		/**
		 * Finds Pets by status
		 * Multiple status values can be provided with comma separated strings
		 * Get pet/findByStatus
		 * @param {Array<PetStatus>} status Status values that need to be considered for filter
		 * @return {Array<Pet>} successful operation
		 */
		FindPetsByStatus(status: Array<PetStatus>, headersHandler?: (headers: HttpHeaders)=>{}): Observable<Array<Pet>> {
			let headers: HttpHeaders = new HttpHeaders();
			if (headersHandler) {
				headersHandler(headers);
			}
			return this.http.get<Array<Pet>>(this.baseUri + 'pet/findByStatus?'+status.map(z => `status=${z}`).join('&'), { headers: headers });
		}

		/**
		 * Finds Pets by tags
		 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
		 * Get pet/findByTags
		 * @param {Array<string>} tags Tags to filter by
		 * @return {Array<Pet>} successful operation
		 */
		FindPetsByTags(tags: Array<string>, headersHandler?: (headers: HttpHeaders)=>{}): Observable<Array<Pet>> {
			let headers: HttpHeaders = new HttpHeaders();
			if (headersHandler) {
				headersHandler(headers);
			}
			return this.http.get<Array<Pet>>(this.baseUri + 'pet/findByTags?'+tags.map(z => `tags=${encodeURIComponent(z)}`).join('&'), { headers: headers });
		}

		/**
		 * Returns pet inventories by status
		 * Returns a map of status codes to quantities
		 * Get store/inventory
		 * @return {string} successful operation
		 */
		GetInventory(headersHandler?: (headers: HttpHeaders)=>{}): Observable<string> {
			let headers: HttpHeaders = new HttpHeaders();
			if (headersHandler) {
				headersHandler(headers);
			}
			return this.http.get(this.baseUri + 'store/inventory', {headers: headers, responseType: 'text' });
		}

		/**
		 * Place an order for a pet
		 * Post store/order
		 * @param {Order} requestBody order placed for purchasing the pet
		 * @return {Order} successful operation
		 */
		PlaceOrder(requestBody: Order, headersHandler?: (headers: HttpHeaders)=>{}): Observable<Order> {
			let headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' });
			if (headersHandler){
				headersHandler(headers);
			}
			return this.http.post<Order>(this.baseUri + 'store/order', JSON.stringify(requestBody), { headers: headers });
		}

		/**
		 * Find purchase order by ID
		 * For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
		 * Get store/order/{orderId}
		 * @param {number} orderId ID of pet that needs to be fetched
		 * @return {Order} successful operation
		 */
		GetOrderById(orderId: number, headersHandler?: (headers: HttpHeaders)=>{}): Observable<Order> {
			let headers: HttpHeaders = new HttpHeaders();
			if (headersHandler) {
				headersHandler(headers);
			}
			return this.http.get<Order>(this.baseUri + 'store/order/' + orderId, { headers: headers });
		}

		/**
		 * Delete purchase order by ID
		 * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
		 * Delete store/order/{orderId}
		 * @param {string} orderId ID of the order that needs to be deleted
		 * @return {void} 
		 */
		DeleteOrder(orderId: string, headersHandler?: (headers: HttpHeaders)=>{}): Observable<Response> {
			let headers: HttpHeaders = new HttpHeaders();
			if (headersHandler) {
				headersHandler(headers);
			}
			return this.http.delete<Response>(this.baseUri + 'store/order/' + encodeURIComponent(orderId), { headers: headers });
		}

		/**
		 * Create user
		 * This can only be done by the logged in user.
		 * Post user
		 * @param {User} requestBody Created user object
		 * @return {void} 
		 */
		CreateUser(requestBody: User, headersHandler?: (headers: HttpHeaders)=>{}): Observable<Response> {
			let headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' });
			if (headersHandler){
				headersHandler(headers);
			}
			return this.http.post<Response>(this.baseUri + 'user', JSON.stringify(requestBody), { headers: headers });
		}

		/**
		 * Get user by user name
		 * Get user/{username}
		 * @param {string} username The name that needs to be fetched. Use user1 for testing. 
		 * @return {User} successful operation
		 */
		GetUserByName(username: string, headersHandler?: (headers: HttpHeaders)=>{}): Observable<User> {
			let headers: HttpHeaders = new HttpHeaders();
			if (headersHandler) {
				headersHandler(headers);
			}
			return this.http.get<User>(this.baseUri + 'user/' + encodeURIComponent(username), { headers: headers });
		}

		/**
		 * Updated user
		 * This can only be done by the logged in user.
		 * Put user/{username}
		 * @param {string} username name that need to be deleted
		 * @param {User} requestBody Updated user object
		 * @return {void} 
		 */
		UpdateUser(username: string, requestBody: User, headersHandler?: (headers: HttpHeaders)=>{}): Observable<Response> {
			let headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' });
			if (headersHandler){
				headersHandler(headers);
			}
			return this.http.put<Response>(this.baseUri + 'user/' + encodeURIComponent(username), JSON.stringify(requestBody), { headers: headers });
		}

		/**
		 * Delete user
		 * This can only be done by the logged in user.
		 * Delete user/{username}
		 * @param {string} username The name that needs to be deleted
		 * @return {void} 
		 */
		DeleteUser(username: string, headersHandler?: (headers: HttpHeaders)=>{}): Observable<Response> {
			let headers: HttpHeaders = new HttpHeaders();
			if (headersHandler) {
				headersHandler(headers);
			}
			return this.http.delete<Response>(this.baseUri + 'user/' + encodeURIComponent(username), { headers: headers });
		}

		/**
		 * Creates list of users with given input array
		 * Post user/createWithArray
		 * @param {Array<User>} requestBody List of user object
		 * @return {void} 
		 */
		CreateUsersWithArrayInput(requestBody: Array<User>, headersHandler?: (headers: HttpHeaders)=>{}): Observable<Response> {
			let headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' });
			if (headersHandler){
				headersHandler(headers);
			}
			return this.http.post<Response>(this.baseUri + 'user/createWithArray', JSON.stringify(requestBody), { headers: headers });
		}

		/**
		 * Creates list of users with given input array
		 * Post user/createWithList
		 * @param {Array<User>} requestBody List of user object
		 * @return {void} 
		 */
		CreateUsersWithListInput(requestBody: Array<User>, headersHandler?: (headers: HttpHeaders)=>{}): Observable<Response> {
			let headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' });
			if (headersHandler){
				headersHandler(headers);
			}
			return this.http.post<Response>(this.baseUri + 'user/createWithList', JSON.stringify(requestBody), { headers: headers });
		}

		/**
		 * Logs user into the system
		 * Get user/login
		 * @param {string} username The user name for login
		 * @param {string} password The password for login in clear text
		 * @return {string} successful operation
		 */
		LoginUser(username: string, password: string, headersHandler?: (headers: HttpHeaders)=>{}): Observable<string> {
			let headers: HttpHeaders = new HttpHeaders();
			if (headersHandler) {
				headersHandler(headers);
			}
			return this.http.get(this.baseUri + 'user/login?username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password), {headers: headers, responseType: 'text' });
		}

		/**
		 * Logs out current logged in user session
		 * Get user/logout
		 * @return {void} 
		 */
		LogoutUser(headersHandler?: (headers: HttpHeaders)=>{}): Observable<Response> {
			let headers: HttpHeaders = new HttpHeaders();
			if (headersHandler) {
				headersHandler(headers);
			}
			return this.http.get<Response>(this.baseUri + 'user/logout', { headers: headers });
		}
	}

}

