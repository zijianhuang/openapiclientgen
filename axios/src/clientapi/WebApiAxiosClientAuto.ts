import Axios from 'axios';
import { AxiosResponse } from 'axios';
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

	export class PetClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Add a new pet to the store
		 * Add a new pet to the store
		 * Post pet
		 * @param {Pet} requestBody Create a new pet in the store
		 * @return {Pet} Successful operation
		 */
		AddPet(requestBody: Pet, headersHandler?: () => {[header: string]: string}): Promise<Pet> {
			return Axios.post<Pet>(this.baseUri + 'pet', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => {if (d.status<=204) return d.data; throw d;});
		}

		/**
		 * Create user
		 * This can only be done by the logged in user.
		 * Post user
		 * @param {User} requestBody Created user object
		 * @return {void} 
		 */
		CreateUser(requestBody: User, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + 'user', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Creates list of users with given input array
		 * Creates list of users with given input array
		 * Post user/createWithList
		 * @return {User} Successful operation
		 */
		CreateUsersWithListInput(requestBody: Array<User>, headersHandler?: () => {[header: string]: string}): Promise<User> {
			return Axios.post<User>(this.baseUri + 'user/createWithList', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => {if (d.status<=204) return d.data; throw d;});
		}

		/**
		 * Delete purchase order by ID
		 * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
		 * Delete store/order/{orderId}
		 * @param {string} orderId ID of the order that needs to be deleted
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		DeleteOrder(orderId: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + 'store/order/' + orderId, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Deletes a pet
		 * delete a pet
		 * Delete pet/{petId}
		 * @param {string} petId Pet id to delete
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		DeletePet(petId: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + 'pet/' + petId, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Delete user
		 * This can only be done by the logged in user.
		 * Delete user/{username}
		 * @param {string} username The name that needs to be deleted
		 * @return {void} 
		 */
		DeleteUser(username: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + 'user/' + (username == null ? '' : encodeURIComponent(username)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Finds Pets by status
		 * Multiple status values can be provided with comma separated strings
		 * Get pet/findByStatus
		 * @param {PetStatus} status Status values that need to be considered for filter
		 * @return {Array<Pet>} successful operation
		 */
		FindPetsByStatus(status: PetStatus | null | undefined, headersHandler?: () => {[header: string]: string}): Promise<Array<Pet>> {
			return Axios.get<Array<Pet>>(this.baseUri + 'pet/findByStatus?status=' + status, { headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=204) return d.data; throw d;});
		}

		/**
		 * Finds Pets by tags
		 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
		 * Get pet/findByTags
		 * @param {Array<string>} tags Tags to filter by
		 * @return {Array<Pet>} successful operation
		 */
		FindPetsByTags(tags: Array<string> | null | undefined, headersHandler?: () => {[header: string]: string}): Promise<Array<Pet>> {
			return Axios.get<Array<Pet>>(this.baseUri + 'pet/findByTags?' + tags?.map(z => `tags=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=204) return d.data; throw d;});
		}

		/**
		 * Returns pet inventories by status
		 * Returns a map of status codes to quantities
		 * Get store/inventory
		 * @return {{[id: string]: number }} successful operation
		 */
		GetInventory(headersHandler?: () => {[header: string]: string}): Promise<{[id: string]: number }> {
			return Axios.get<{[id: string]: number }>(this.baseUri + 'store/inventory', { headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=204) return d.data; throw d;});
		}

		/**
		 * Find purchase order by ID
		 * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
		 * Get store/order/{orderId}
		 * @param {string} orderId ID of order that needs to be fetched
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Order} successful operation
		 */
		GetOrderById(orderId: string, headersHandler?: () => {[header: string]: string}): Promise<Order> {
			return Axios.get<Order>(this.baseUri + 'store/order/' + orderId, { headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=204) return d.data; throw d;});
		}

		/**
		 * Find pet by ID
		 * Returns a single pet
		 * Get pet/{petId}
		 * @param {string} petId ID of pet to return
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Pet} successful operation
		 */
		GetPetById(petId: string, headersHandler?: () => {[header: string]: string}): Promise<Pet> {
			return Axios.get<Pet>(this.baseUri + 'pet/' + petId, { headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=204) return d.data; throw d;});
		}

		/**
		 * Get user by user name
		 * Get user/{username}
		 * @param {string} username The name that needs to be fetched. Use user1 for testing. 
		 * @return {User} successful operation
		 */
		GetUserByName(username: string, headersHandler?: () => {[header: string]: string}): Promise<User> {
			return Axios.get<User>(this.baseUri + 'user/' + (username == null ? '' : encodeURIComponent(username)), { headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=204) return d.data; throw d;});
		}

		/**
		 * Logs user into the system
		 * Get user/login
		 * @param {string} username The user name for login
		 * @param {string} password The password for login in clear text
		 * @return {string} successful operation
		 */
		LoginUser(username: string | null | undefined, password: string | null | undefined, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return Axios.get(this.baseUri + 'user/login?username=' + (username == null ? '' : encodeURIComponent(username)) + '&password=' + (password == null ? '' : encodeURIComponent(password)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' }).then(d => {if (d.status<=204) return d.data; throw d;});
		}

		/**
		 * Logs out current logged in user session
		 * Get user/logout
		 * @return {void} 
		 */
		LogoutUser(headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + 'user/logout', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Place an order for a pet
		 * Place a new order in the store
		 * Post store/order
		 * @return {Order} successful operation
		 */
		PlaceOrder(requestBody: Order, headersHandler?: () => {[header: string]: string}): Promise<Order> {
			return Axios.post<Order>(this.baseUri + 'store/order', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => {if (d.status<=204) return d.data; throw d;});
		}

		/**
		 * Update an existing pet
		 * Update an existing pet by Id
		 * Put pet
		 * @param {Pet} requestBody Update an existent pet in the store
		 * @return {Pet} Successful operation
		 */
		UpdatePet(requestBody: Pet, headersHandler?: () => {[header: string]: string}): Promise<Pet> {
			return Axios.put<Pet>(this.baseUri + 'pet', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => {if (d.status<=204) return d.data; throw d;});
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
		UpdatePetWithForm(petId: string, name: string | null | undefined, status: string | null | undefined, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + 'pet/' + petId + '?name=' + (name == null ? '' : encodeURIComponent(name)) + '&status=' + (status == null ? '' : encodeURIComponent(status)), null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Update user
		 * This can only be done by the logged in user.
		 * Put user/{username}
		 * @param {string} username name that need to be deleted
		 * @param {User} requestBody Update an existent user in the store
		 * @return {void} 
		 */
		UpdateUser(username: string, requestBody: User, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.put(this.baseUri + 'user/' + (username == null ? '' : encodeURIComponent(username)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}
	}

}

