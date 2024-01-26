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
		 * Gets telephone area code information
		 * Gets telephone area code information for a given area code.
		 * Get getareacode
		 * @param {string} license Your Interzoid license API key. Register at www.interzoid.com/register
		 * @param {string} areacode Telephone area code to retrieve area code information
		 * @return {GetareacodeReturn} Telephone area code information
		 */
		Getareacode(license: string, areacode: string): Observable<GetareacodeReturn> {
			return this.http.get<GetareacodeReturn>(this.baseUri + 'getareacode?license=' + (license == null ? '' : encodeURIComponent(license)) + '&areacode=' + (areacode == null ? '' : encodeURIComponent(areacode)), {});
		}
	}

	export interface GetareacodeReturn {
		Abbreviation?: string | null;
		AreaCode?: string | null;
		Code?: string | null;
		Credits?: string | null;
		Locale?: string | null;
		PrimaryCity?: string | null;
	}
	export interface GetareacodeReturnFormProperties {
		Abbreviation: FormControl<string | null | undefined>,
		AreaCode: FormControl<string | null | undefined>,
		Code: FormControl<string | null | undefined>,
		Credits: FormControl<string | null | undefined>,
		Locale: FormControl<string | null | undefined>,
		PrimaryCity: FormControl<string | null | undefined>,
	}
	export function CreateGetareacodeReturnFormGroup() {
		return new FormGroup<GetareacodeReturnFormProperties>({
			Abbreviation: new FormControl<string | null | undefined>(undefined),
			AreaCode: new FormControl<string | null | undefined>(undefined),
			Code: new FormControl<string | null | undefined>(undefined),
			Credits: new FormControl<string | null | undefined>(undefined),
			Locale: new FormControl<string | null | undefined>(undefined),
			PrimaryCity: new FormControl<string | null | undefined>(undefined),
		});

	}

}

