import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ImageUrl {

		/**
		 * Publicly reachable URL of an image
		 * Required
		 */
		url: string;
	}
	export interface ImageUrlFormProperties {

		/**
		 * Publicly reachable URL of an image
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateImageUrlFormGroup() {
		return new FormGroup<ImageUrlFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

}

