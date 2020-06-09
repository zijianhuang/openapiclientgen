///<reference path="HttpClient.ts" />
namespace My_Pet_Client {
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

	export class PetClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * Add a new pet to the store
		 * Add new pet to the store inventory.
		 * Post pet
		 * @param {Pet} requestBody Pet object that needs to be added to the store
		 * @return {void} 
		 */
		AddPet(callback: (data : void) => any, requestBody: Pet, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'pet', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Update an existing pet
		 * Put pet
		 * @param {Pet} requestBody Pet object that needs to be added to the store
		 * @return {void} 
		 */
		UpdatePet(callback: (data : void) => any, requestBody: Pet, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + 'pet', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Find pet by ID
		 * Returns a single pet
		 * Get pet/{petId}
		 * @param {number} petId ID of pet to return
		 * @return {Pet} successful operation
		 */
		GetPetById(petId: number, callback: (data : Pet) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'pet/' + petId, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Deletes a pet
		 * Delete pet/{petId}
		 * @param {number} petId Pet id to delete
		 * @return {void} 
		 */
		DeletePet(petId: number, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + 'pet/' + petId, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Finds Pets by status
		 * Multiple status values can be provided with comma separated strings
		 * Get pet/findByStatus
		 * @param {Array<PetStatus>} status Status values that need to be considered for filter
		 * @return {Array<Pet>} successful operation
		 */
		FindPetsByStatus(status: Array<PetStatus>, callback: (data : Array<Pet>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'pet/findByStatus?' + status.map(z => `status=${z}`).join('&'), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Finds Pets by tags
		 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
		 * Get pet/findByTags
		 * @param {Array<string>} tags Tags to filter by
		 * @return {Array<Pet>} successful operation
		 */
		FindPetsByTags(tags: Array<string>, callback: (data : Array<Pet>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'pet/findByTags?' + tags.map(z => `tags=${encodeURIComponent(z)}`).join('&'), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Returns pet inventories by status
		 * Returns a map of status codes to quantities
		 * Get store/inventory
		 * @return {string} successful operation
		 */
		GetInventory(callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'store/inventory', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Place an order for a pet
		 * Post store/order
		 * @param {Order} requestBody order placed for purchasing the pet
		 * @return {Order} successful operation
		 */
		PlaceOrder(callback: (data : Order) => any, requestBody: Order, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'store/order', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Find purchase order by ID
		 * For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
		 * Get store/order/{orderId}
		 * @param {number} orderId ID of pet that needs to be fetched
		 * @return {Order} successful operation
		 */
		GetOrderById(orderId: number, callback: (data : Order) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'store/order/' + orderId, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Delete purchase order by ID
		 * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
		 * Delete store/order/{orderId}
		 * @param {string} orderId ID of the order that needs to be deleted
		 * @return {void} 
		 */
		DeleteOrder(orderId: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + 'store/order/' + (orderId == null ? '' : encodeURIComponent(orderId)), callback, this.error, this.statusCode, headersHandler);
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
		 * Get user by user name
		 * Get user/{username}
		 * @param {string} username The name that needs to be fetched. Use user1 for testing. 
		 * @return {User} successful operation
		 */
		GetUserByName(username: string, callback: (data : User) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'user/' + (username == null ? '' : encodeURIComponent(username)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Updated user
		 * This can only be done by the logged in user.
		 * Put user/{username}
		 * @param {string} username name that need to be deleted
		 * @param {User} requestBody Updated user object
		 * @return {void} 
		 */
		UpdateUser(username: string, callback: (data : void) => any, requestBody: User, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + 'user/' + (username == null ? '' : encodeURIComponent(username)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
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
		 * Creates list of users with given input array
		 * Post user/createWithArray
		 * @param {Array<User>} requestBody List of user object
		 * @return {void} 
		 */
		CreateUsersWithArrayInput(callback: (data : void) => any, requestBody: Array<User>, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'user/createWithArray', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates list of users with given input array
		 * Post user/createWithList
		 * @param {Array<User>} requestBody List of user object
		 * @return {void} 
		 */
		CreateUsersWithListInput(callback: (data : void) => any, requestBody: Array<User>, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'user/createWithList', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Logs user into the system
		 * Get user/login
		 * @param {string} username The user name for login
		 * @param {string} password The password for login in clear text
		 * @return {string} successful operation
		 */
		LoginUser(username: string, password: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
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
	}

}

