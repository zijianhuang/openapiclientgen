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
		 * Gets current weather information for a US city and state
		 * Use city and state to retrieve current US weather information.
		 * Get getweather
		 * @param {string} license Your Interzoid license API key. Register at www.interzoid.com/register
		 * @param {string} city City for weather information
		 * @param {string} state State for weather information
		 * @return {GetweatherReturn} Current weather information for a US city
		 */
		Getweather(license: string, city: string, state: string): Observable<GetweatherReturn> {
			return this.http.get<GetweatherReturn>(this.baseUri + 'getweather?license=' + (license == null ? '' : encodeURIComponent(license)) + '&city=' + (city == null ? '' : encodeURIComponent(city)) + '&state=' + (state == null ? '' : encodeURIComponent(state)), {});
		}
	}

	export interface GetweatherReturn {
		City?: string | null;
		Code?: string | null;
		Credits?: string | null;
		RelativeHumidity?: string | null;
		State?: string | null;
		TempC?: string | null;
		TempF?: string | null;
		VisibilityMiles?: string | null;
		Weather?: string | null;
		WindDir?: string | null;
		WindMPH?: string | null;
	}
	export interface GetweatherReturnFormProperties {
		City: FormControl<string | null | undefined>,
		Code: FormControl<string | null | undefined>,
		Credits: FormControl<string | null | undefined>,
		RelativeHumidity: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
		TempC: FormControl<string | null | undefined>,
		TempF: FormControl<string | null | undefined>,
		VisibilityMiles: FormControl<string | null | undefined>,
		Weather: FormControl<string | null | undefined>,
		WindDir: FormControl<string | null | undefined>,
		WindMPH: FormControl<string | null | undefined>,
	}
	export function CreateGetweatherReturnFormGroup() {
		return new FormGroup<GetweatherReturnFormProperties>({
			City: new FormControl<string | null | undefined>(undefined),
			Code: new FormControl<string | null | undefined>(undefined),
			Credits: new FormControl<string | null | undefined>(undefined),
			RelativeHumidity: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			TempC: new FormControl<string | null | undefined>(undefined),
			TempF: new FormControl<string | null | undefined>(undefined),
			VisibilityMiles: new FormControl<string | null | undefined>(undefined),
			Weather: new FormControl<string | null | undefined>(undefined),
			WindDir: new FormControl<string | null | undefined>(undefined),
			WindMPH: new FormControl<string | null | undefined>(undefined),
		});

	}

}

