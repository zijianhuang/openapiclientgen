import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

function CreateDateOnlyFormControl() {
	const fc = new FormControl<any | null | undefined>(undefined);
	fc.valueChanges.subscribe(v => {
		if (v) {
			if (v instanceof Date) {
				fc.setValue(v.toLocaleDateString("sv").substring(0, 10), { emitEvent: false });
			} else if (typeof v == 'object' && typeof v.toISODate === 'function') {
				fc.setValue(v.toISODate(), { emitEvent: false });
			}
		}
	});

	return fc;
}

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

