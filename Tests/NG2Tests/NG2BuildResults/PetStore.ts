import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface Pet {
		id: number;
		name: string;
		tag?: string | null;
	}

	export interface Error {
		code: number;
		message: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List all pets
		 * Get pets
		 * @param {number} limit How many items to return at one time (max 100)
		 * @return {Array<Pet>} A paged array of pets
		 */
		ListPets(limit: number | null | undefined): Observable<Array<Pet>> {
			return this.http.get<Array<Pet>>(this.baseUri + 'pets?limit=' + limit, {});
		}

		/**
		 * Create a pet
		 * Post pets
		 * @return {void} 
		 */
		CreatePets(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pets', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Info for a specific pet
		 * Get pets/{petId}
		 * @param {string} petId The id of the pet to retrieve
		 * @return {Pet} Expected response to a valid request
		 */
		ShowPetById(petId: string): Observable<Pet> {
			return this.http.get<Pet>(this.baseUri + 'pets/' + (petId == null ? '' : encodeURIComponent(petId)), {});
		}
	}

}

