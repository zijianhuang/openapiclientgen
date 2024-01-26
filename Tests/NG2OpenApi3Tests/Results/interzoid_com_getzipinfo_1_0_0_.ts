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
		 * Gets detailed zip code information
		 * For a given zip code, detailed information is returned, including city, state, latitude, longitude, area size, and various population demographics, including income, age, and presence of farming data.
		 * Get getzipcodeinfo
		 * @param {string} license Your Interzoid license API key. Register at www.interzoid.com/register
		 * @param {string} zip Zip code to retrieve detailed information
		 * @return {GetzipcodeinfoReturn} Zip code detailed code information
		 */
		Getzipcodeinfo(license: string, zip: string): Observable<GetzipcodeinfoReturn> {
			return this.http.get<GetzipcodeinfoReturn>(this.baseUri + 'getzipcodeinfo?license=' + (license == null ? '' : encodeURIComponent(license)) + '&zip=' + (zip == null ? '' : encodeURIComponent(zip)), {});
		}
	}

	export interface GetzipcodeinfoReturn {
		AreaSquareMiles?: string | null;
		City?: string | null;
		Code?: string | null;
		Credits?: string | null;
		ElderlyHouseholdPercent?: string | null;
		FarmerHouseholdPercent?: string | null;
		IncomePercent100k?: string | null;
		IncomePercent200k?: string | null;
		IncomePercent50k?: string | null;
		Latitude?: string | null;
		Longitude?: string | null;
		MarriedHouseholdPercent?: string | null;
		Population?: string | null;
		State?: string | null;
		ZipCode?: string | null;
	}
	export interface GetzipcodeinfoReturnFormProperties {
		AreaSquareMiles: FormControl<string | null | undefined>,
		City: FormControl<string | null | undefined>,
		Code: FormControl<string | null | undefined>,
		Credits: FormControl<string | null | undefined>,
		ElderlyHouseholdPercent: FormControl<string | null | undefined>,
		FarmerHouseholdPercent: FormControl<string | null | undefined>,
		IncomePercent100k: FormControl<string | null | undefined>,
		IncomePercent200k: FormControl<string | null | undefined>,
		IncomePercent50k: FormControl<string | null | undefined>,
		Latitude: FormControl<string | null | undefined>,
		Longitude: FormControl<string | null | undefined>,
		MarriedHouseholdPercent: FormControl<string | null | undefined>,
		Population: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
		ZipCode: FormControl<string | null | undefined>,
	}
	export function CreateGetzipcodeinfoReturnFormGroup() {
		return new FormGroup<GetzipcodeinfoReturnFormProperties>({
			AreaSquareMiles: new FormControl<string | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			Code: new FormControl<string | null | undefined>(undefined),
			Credits: new FormControl<string | null | undefined>(undefined),
			ElderlyHouseholdPercent: new FormControl<string | null | undefined>(undefined),
			FarmerHouseholdPercent: new FormControl<string | null | undefined>(undefined),
			IncomePercent100k: new FormControl<string | null | undefined>(undefined),
			IncomePercent200k: new FormControl<string | null | undefined>(undefined),
			IncomePercent50k: new FormControl<string | null | undefined>(undefined),
			Latitude: new FormControl<string | null | undefined>(undefined),
			Longitude: new FormControl<string | null | undefined>(undefined),
			MarriedHouseholdPercent: new FormControl<string | null | undefined>(undefined),
			Population: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			ZipCode: new FormControl<string | null | undefined>(undefined),
		});

	}

}

