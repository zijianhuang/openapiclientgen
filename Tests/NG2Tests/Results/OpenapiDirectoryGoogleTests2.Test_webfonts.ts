import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Webfont {

		/** The category of the font. */
		category?: string | null;

		/** The name of the font. */
		family?: string | null;

		/** The font files (with all supported scripts) for each one of the available variants, as a key : value map. */
		files?: {[id: string]: string };

		/** This kind represents a webfont object in the webfonts service. */
		kind?: string | null;

		/** The date (format "yyyy-MM-dd") the font was modified for the last time. */
		lastModified?: Date | null;

		/** The scripts supported by the font. */
		subsets?: Array<string>;

		/** The available variants for the font. */
		variants?: Array<string>;

		/** The font version. */
		version?: string | null;
	}
	export interface WebfontFormProperties {

		/** The category of the font. */
		category: FormControl<string | null | undefined>,

		/** The name of the font. */
		family: FormControl<string | null | undefined>,

		/** The font files (with all supported scripts) for each one of the available variants, as a key : value map. */
		files: FormControl<{[id: string]: string } | null | undefined>,

		/** This kind represents a webfont object in the webfonts service. */
		kind: FormControl<string | null | undefined>,

		/** The date (format "yyyy-MM-dd") the font was modified for the last time. */
		lastModified: FormControl<Date | null | undefined>,

		/** The font version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateWebfontFormGroup() {
		return new FormGroup<WebfontFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			family: new FormControl<string | null | undefined>(undefined),
			files: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebfontList {

		/** The list of fonts currently served by the Google Fonts API. */
		items?: Array<Webfont>;

		/** This kind represents a list of webfont objects in the webfonts service. */
		kind?: string | null;
	}
	export interface WebfontListFormProperties {

		/** This kind represents a list of webfont objects in the webfonts service. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateWebfontListFormGroup() {
		return new FormGroup<WebfontListFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves the list of fonts currently served by the Google Fonts Developer API
		 * Get webfonts
		 * @param {Webfonts_webfonts_listSort} sort Enables sorting of the list
		 * @return {void} Successful response
		 */
		Webfonts_webfonts_list(sort: Webfonts_webfonts_listSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'webfonts?sort=' + sort, { observe: 'response', responseType: 'text' });
		}
	}

	export enum Webfonts_webfonts_listSort { alpha = 0, date = 1, popularity = 2, style = 3, trending = 4 }

}

