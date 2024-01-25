import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** This resource represents a custom app. */
	export interface CustomApp {

		/** Default listing language in BCP 47 format. */
		languageCode?: string | null;

		/** Title for the Android app. */
		title?: string | null;
	}

	/** This resource represents a custom app. */
	export interface CustomAppFormProperties {

		/** Default listing language in BCP 47 format. */
		languageCode: FormControl<string | null | undefined>,

		/** Title for the Android app. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateCustomAppFormGroup() {
		return new FormGroup<CustomAppFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

}

