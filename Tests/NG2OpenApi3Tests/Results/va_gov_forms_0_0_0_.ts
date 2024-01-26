import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Data for a particular VA form, including form version history. */
	export interface FormShow {
		attributes?: any;

		/** JSON API identifier */
		id?: string | null;

		/** JSON API type specification */
		type?: string | null;
	}

	/** Data for a particular VA form, including form version history. */
	export interface FormShowFormProperties {
		attributes: FormControl<any | null | undefined>,

		/** JSON API identifier */
		id: FormControl<string | null | undefined>,

		/** JSON API type specification */
		type: FormControl<string | null | undefined>,
	}
	export function CreateFormShowFormGroup() {
		return new FormGroup<FormShowFormProperties>({
			attributes: new FormControl<any | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A listing of available VA forms and their location. */
	export interface FormsIndex {
		attributes?: any;

		/** JSON API identifier */
		id?: string | null;

		/** JSON API type specification */
		type?: string | null;
	}

	/** A listing of available VA forms and their location. */
	export interface FormsIndexFormProperties {
		attributes: FormControl<any | null | undefined>,

		/** JSON API identifier */
		id: FormControl<string | null | undefined>,

		/** JSON API type specification */
		type: FormControl<string | null | undefined>,
	}
	export function CreateFormsIndexFormGroup() {
		return new FormGroup<FormsIndexFormProperties>({
			attributes: new FormControl<any | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns all VA Forms and their last revision date
		 * Returns an index of all available VA forms. Optionally, pass a query parameter to filter forms by form number or title.
		 * Get forms
		 * @param {string} query Returns form data based on entered form name.
		 * @return {FindFormsReturn} VA Forms index response
		 */
		FindForms(query: string | null | undefined): Observable<FindFormsReturn> {
			return this.http.get<FindFormsReturn>(this.baseUri + 'forms?query=' + (query == null ? '' : encodeURIComponent(query)), {});
		}

		/**
		 * Find form by form name
		 * Returns a single form and the full revision history
		 * Get forms/{form_name}
		 * @param {string} form_name The VA form_name of the form being requested. The exact form name must be passed, including proper placement of prefixes and/or hyphens.
		 * @return {FindFormByFormNameReturn} VA Form Show response
		 */
		FindFormByFormName(form_name: string): Observable<FindFormByFormNameReturn> {
			return this.http.get<FindFormByFormNameReturn>(this.baseUri + 'forms/' + (form_name == null ? '' : encodeURIComponent(form_name)), {});
		}
	}

	export interface FindFormsReturn {

		/** Required */
		data: Array<FormsIndex>;
	}
	export interface FindFormsReturnFormProperties {
	}
	export function CreateFindFormsReturnFormGroup() {
		return new FormGroup<FindFormsReturnFormProperties>({
		});

	}

	export interface FindFormByFormNameReturn {

		/**
		 * Data for a particular VA form, including form version history.
		 * Required
		 */
		data: FormShow;
	}
	export interface FindFormByFormNameReturnFormProperties {
	}
	export function CreateFindFormByFormNameReturnFormGroup() {
		return new FormGroup<FindFormByFormNameReturnFormProperties>({
		});

	}

}

