///<reference path="HttpClient.ts" />
namespace My_Pet_Client {
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

	export class PetClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * Add a new pet to the store
		 * Add a new pet to the store
		 * Post pet
		 * @param {Pet} requestBody Create a new pet in the store
		 * @return {Pet} Successful operation
		 */
		AddPet(callback: (data : Pet) => any, requestBody: Pet, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'pet', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Create user
		 * This can only be done by the logged in user.
		 * Post user
		 * @param {User} requestBody Created user object
		 * @return {void} 
		 */
		CreateUser(callback: (data : void) => any, requestBody: User, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'user', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates list of users with given input array
		 * Creates list of users with given input array
		 * Post user/createWithList
		 * @return {User} Successful operation
		 */
		CreateUsersWithListInput(callback: (data : User) => any, requestBody: Array<User>, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'user/createWithList', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Delete purchase order by ID
		 * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
		 * Delete store/order/{orderId}
		 * @param {string} orderId ID of the order that needs to be deleted
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		DeleteOrder(orderId: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + 'store/order/' + orderId, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Deletes a pet
		 * delete a pet
		 * Delete pet/{petId}
		 * @param {string} petId Pet id to delete
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		DeletePet(petId: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + 'pet/' + petId, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Delete user
		 * This can only be done by the logged in user.
		 * Delete user/{username}
		 * @param {string} username The name that needs to be deleted
		 * @return {void} 
		 */
		DeleteUser(username: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + 'user/' + (username == null ? '' : encodeURIComponent(username)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Finds Pets by status
		 * Multiple status values can be provided with comma separated strings
		 * Get pet/findByStatus
		 * @param {PetStatus} status Status values that need to be considered for filter
		 * @return {Array<Pet>} successful operation
		 */
		FindPetsByStatus(status: PetStatus | null | undefined, callback: (data : Array<Pet>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'pet/findByStatus?status=' + status, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Finds Pets by tags
		 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
		 * Get pet/findByTags
		 * @param {Array<string>} tags Tags to filter by
		 * @return {Array<Pet>} successful operation
		 */
		FindPetsByTags(tags: Array<string> | null | undefined, callback: (data : Array<Pet>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'pet/findByTags?' + tags?.map(z => `tags=${encodeURIComponent(z)}`).join('&'), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Returns pet inventories by status
		 * Returns a map of status codes to quantities
		 * Get store/inventory
		 * @return {{[id: string]: number }} successful operation
		 */
		GetInventory(callback: (data : {[id: string]: number }) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'store/inventory', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Find purchase order by ID
		 * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
		 * Get store/order/{orderId}
		 * @param {string} orderId ID of order that needs to be fetched
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Order} successful operation
		 */
		GetOrderById(orderId: string, callback: (data : Order) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'store/order/' + orderId, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Find pet by ID
		 * Returns a single pet
		 * Get pet/{petId}
		 * @param {string} petId ID of pet to return
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Pet} successful operation
		 */
		GetPetById(petId: string, callback: (data : Pet) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'pet/' + petId, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get user by user name
		 * Get user/{username}
		 * @param {string} username The name that needs to be fetched. Use user1 for testing. 
		 * @return {User} successful operation
		 */
		GetUserByName(username: string, callback: (data : User) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'user/' + (username == null ? '' : encodeURIComponent(username)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Logs user into the system
		 * Get user/login
		 * @param {string} username The user name for login
		 * @param {string} password The password for login in clear text
		 * @return {string} successful operation
		 */
		LoginUser(username: string | null | undefined, password: string | null | undefined, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'user/login?username=' + (username == null ? '' : encodeURIComponent(username)) + '&password=' + (password == null ? '' : encodeURIComponent(password)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Logs out current logged in user session
		 * Get user/logout
		 * @return {void} 
		 */
		LogoutUser(callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'user/logout', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Place an order for a pet
		 * Place a new order in the store
		 * Post store/order
		 * @return {Order} successful operation
		 */
		PlaceOrder(callback: (data : Order) => any, requestBody: Order, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'store/order', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Update an existing pet
		 * Update an existing pet by Id
		 * Put pet
		 * @param {Pet} requestBody Update an existent pet in the store
		 * @return {Pet} Successful operation
		 */
		UpdatePet(callback: (data : Pet) => any, requestBody: Pet, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + 'pet', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
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
		UpdatePetWithForm(petId: string, name: string | null | undefined, status: string | null | undefined, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'pet/' + petId + '?name=' + (name == null ? '' : encodeURIComponent(name)) + '&status=' + (status == null ? '' : encodeURIComponent(status)), null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Update user
		 * This can only be done by the logged in user.
		 * Put user/{username}
		 * @param {string} username name that need to be deleted
		 * @param {User} requestBody Update an existent user in the store
		 * @return {void} 
		 */
		UpdateUser(username: string, callback: (data : void) => any, requestBody: User, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + 'user/' + (username == null ? '' : encodeURIComponent(username)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}
	}

}

