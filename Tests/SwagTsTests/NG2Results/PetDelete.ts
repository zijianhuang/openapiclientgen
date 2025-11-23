import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	@Injectable({ providedIn: 'root' })
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = window.location.origin + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a pet
		 * Delete pet/{petId}
		 * @param {string} petId Pet id to delete
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		DeletePet(petId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'pet/' + petId, { observe: 'response', responseType: 'text' });
		}
	}

}

