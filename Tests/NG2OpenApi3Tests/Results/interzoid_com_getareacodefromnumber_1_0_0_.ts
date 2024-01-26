import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets area code information from a telephone number
		 * The area code will be parsed out of a telephone number and used to retrieve information about the area code.
		 * Get getareacodefromnumber
		 * @param {string} license Your Interzoid license API key. Register at www.interzoid.com/register
		 * @param {string} number Telephone number to retrieve area code information
		 * @return {GetareacodefromnumberReturn} Telephone number area code information
		 */
		Getareacodefromnumber(license: string, number: string): Observable<GetareacodefromnumberReturn> {
			return this.http.get<GetareacodefromnumberReturn>(this.baseUri + 'getareacodefromnumber?license=' + (license == null ? '' : encodeURIComponent(license)) + '&number=' + (number == null ? '' : encodeURIComponent(number)), {});
		}
	}

	export interface GetareacodefromnumberReturn {
		Abbreviation?: string | null;
		AreaCode?: string | null;
		Code?: string | null;
		Credits?: string | null;
		Locale?: string | null;
		PrimaryCity?: string | null;
	}
	export interface GetareacodefromnumberReturnFormProperties {
		Abbreviation: FormControl<string | null | undefined>,
		AreaCode: FormControl<string | null | undefined>,
		Code: FormControl<string | null | undefined>,
		Credits: FormControl<string | null | undefined>,
		Locale: FormControl<string | null | undefined>,
		PrimaryCity: FormControl<string | null | undefined>,
	}
	export function CreateGetareacodefromnumberReturnFormGroup() {
		return new FormGroup<GetareacodefromnumberReturnFormProperties>({
			Abbreviation: new FormControl<string | null | undefined>(undefined),
			AreaCode: new FormControl<string | null | undefined>(undefined),
			Code: new FormControl<string | null | undefined>(undefined),
			Credits: new FormControl<string | null | undefined>(undefined),
			Locale: new FormControl<string | null | undefined>(undefined),
			PrimaryCity: new FormControl<string | null | undefined>(undefined),
		});

	}

}

