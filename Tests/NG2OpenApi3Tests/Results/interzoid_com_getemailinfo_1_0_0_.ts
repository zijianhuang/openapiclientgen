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
		 * Gets email validation information for an email address
		 * Get email validation information and other demographics for an email address.
		 * Get getemailinfo
		 * @param {string} license Your Interzoid license API key. Register at www.interzoid.com/register
		 * @param {string} email Email address to retrieve validation information
		 * @return {GetemailinfoReturn} Email validation and demographic information
		 */
		Getemailinfo(license: string, email: string): Observable<GetemailinfoReturn> {
			return this.http.get<GetemailinfoReturn>(this.baseUri + 'getemailinfo?license=' + (license == null ? '' : encodeURIComponent(license)) + '&email=' + (email == null ? '' : encodeURIComponent(email)), {});
		}
	}

	export interface GetemailinfoReturn {
		Code?: string | null;
		Credits?: string | null;
		Email?: string | null;
		Geolocation?: string | null;
		Info?: string | null;
		IsDisposable?: string | null;
		IsEducational?: string | null;
		IsGeneric?: string | null;
		IsGovernment?: string | null;
		IsOrganizational?: string | null;
		IsVulgar?: string | null;
		Response?: string | null;
	}
	export interface GetemailinfoReturnFormProperties {
		Code: FormControl<string | null | undefined>,
		Credits: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		Geolocation: FormControl<string | null | undefined>,
		Info: FormControl<string | null | undefined>,
		IsDisposable: FormControl<string | null | undefined>,
		IsEducational: FormControl<string | null | undefined>,
		IsGeneric: FormControl<string | null | undefined>,
		IsGovernment: FormControl<string | null | undefined>,
		IsOrganizational: FormControl<string | null | undefined>,
		IsVulgar: FormControl<string | null | undefined>,
		Response: FormControl<string | null | undefined>,
	}
	export function CreateGetemailinfoReturnFormGroup() {
		return new FormGroup<GetemailinfoReturnFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined),
			Credits: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			Geolocation: new FormControl<string | null | undefined>(undefined),
			Info: new FormControl<string | null | undefined>(undefined),
			IsDisposable: new FormControl<string | null | undefined>(undefined),
			IsEducational: new FormControl<string | null | undefined>(undefined),
			IsGeneric: new FormControl<string | null | undefined>(undefined),
			IsGovernment: new FormControl<string | null | undefined>(undefined),
			IsOrganizational: new FormControl<string | null | undefined>(undefined),
			IsVulgar: new FormControl<string | null | undefined>(undefined),
			Response: new FormControl<string | null | undefined>(undefined),
		});

	}

}

