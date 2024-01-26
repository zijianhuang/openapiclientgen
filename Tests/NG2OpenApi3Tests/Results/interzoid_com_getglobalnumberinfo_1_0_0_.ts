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
		 * Get demographic information for a global telephone number
		 * Get demographic information for a global telephone number, including city and country information, primary languages spoken, and mobile device identification.
		 * Get getglobalnumberinfo
		 * @param {string} license Your Interzoid license API key. Register at www.interzoid.com/register
		 * @param {string} intlnumber International number (with country code) to retrieve information for
		 * @return {GetglobalnumberinfoReturn} Global telephone demographic information
		 */
		Getglobalnumberinfo(license: string, intlnumber: string): Observable<GetglobalnumberinfoReturn> {
			return this.http.get<GetglobalnumberinfoReturn>(this.baseUri + 'getglobalnumberinfo?license=' + (license == null ? '' : encodeURIComponent(license)) + '&intlnumber=' + (intlnumber == null ? '' : encodeURIComponent(intlnumber)), {});
		}
	}

	export interface GetglobalnumberinfoReturn {
		Code?: string | null;
		Country?: string | null;
		Credits?: string | null;
		Language2?: string | null;
		Language3?: string | null;
		Mobile?: string | null;
		PrimaryCity?: string | null;
		PrimaryLanguage?: string | null;
		Region?: string | null;
		Wealth?: string | null;
	}
	export interface GetglobalnumberinfoReturnFormProperties {
		Code: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,
		Credits: FormControl<string | null | undefined>,
		Language2: FormControl<string | null | undefined>,
		Language3: FormControl<string | null | undefined>,
		Mobile: FormControl<string | null | undefined>,
		PrimaryCity: FormControl<string | null | undefined>,
		PrimaryLanguage: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
		Wealth: FormControl<string | null | undefined>,
	}
	export function CreateGetglobalnumberinfoReturnFormGroup() {
		return new FormGroup<GetglobalnumberinfoReturnFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			Credits: new FormControl<string | null | undefined>(undefined),
			Language2: new FormControl<string | null | undefined>(undefined),
			Language3: new FormControl<string | null | undefined>(undefined),
			Mobile: new FormControl<string | null | undefined>(undefined),
			PrimaryCity: new FormControl<string | null | undefined>(undefined),
			PrimaryLanguage: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			Wealth: new FormControl<string | null | undefined>(undefined),
		});

	}

}

