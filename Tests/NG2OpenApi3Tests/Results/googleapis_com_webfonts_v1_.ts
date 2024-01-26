import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Metadata for a variable font axis. */
	export interface Axis {

		/** maximum value */
		end?: number | null;

		/** minimum value */
		start?: number | null;

		/** tag name. */
		tag?: string | null;
	}

	/** Metadata for a variable font axis. */
	export interface AxisFormProperties {

		/** maximum value */
		end: FormControl<number | null | undefined>,

		/** minimum value */
		start: FormControl<number | null | undefined>,

		/** tag name. */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateAxisFormGroup() {
		return new FormGroup<AxisFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata describing a family of fonts. */
	export interface Webfont {

		/** Axis for variable fonts. */
		axes?: Array<Axis>;

		/** The category of the font. */
		category?: string | null;

		/** The name of the font. */
		family?: string | null;

		/** The font files (with all supported scripts) for each one of the available variants, as a key : value map. */
		files?: {[id: string]: string };

		/** This kind represents a webfont object in the webfonts service. */
		kind?: string | null;

		/** The date (format "yyyy-MM-dd") the font was modified for the last time. */
		lastModified?: string | null;

		/** Font URL for menu subset, a subset of the font that is enough to display the font name */
		menu?: string | null;

		/** The scripts supported by the font. */
		subsets?: Array<string>;

		/** The available variants for the font. */
		variants?: Array<string>;

		/** The font version. */
		version?: string | null;
	}

	/** Metadata describing a family of fonts. */
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
		lastModified: FormControl<string | null | undefined>,

		/** Font URL for menu subset, a subset of the font that is enough to display the font name */
		menu: FormControl<string | null | undefined>,

		/** The font version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateWebfontFormGroup() {
		return new FormGroup<WebfontFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			family: new FormControl<string | null | undefined>(undefined),
			files: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			lastModified: new FormControl<string | null | undefined>(undefined),
			menu: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response containing the list of fonts currently served by the Google Fonts API. */
	export interface WebfontList {

		/** The list of fonts currently served by the Google Fonts API. */
		items?: Array<Webfont>;

		/** This kind represents a list of webfont objects in the webfonts service. */
		kind?: string | null;
	}

	/** Response containing the list of fonts currently served by the Google Fonts API. */
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
		 * Retrieves the list of fonts currently served by the Google Fonts Developer API.
		 * Get v1/webfonts
		 * @param {Array<string>} capability Controls the font urls in `Webfont.files`, by default, static ttf fonts are sent.
		 * @param {Array<string>} family Filters by Webfont.family, using literal match. If not set, returns all families
		 * @param {Webfonts_webfonts_listSort} sort Enables sorting of the list.
		 * @param {string} subset Filters by Webfont.subset, if subset is found in Webfont.subsets. If not set, returns all families.
		 * @return {WebfontList} Successful response
		 */
		Webfonts_webfonts_list(capability: Array<string> | null | undefined, family: Array<string> | null | undefined, sort: Webfonts_webfonts_listSort | null | undefined, subset: string | null | undefined): Observable<WebfontList> {
			return this.http.get<WebfontList>(this.baseUri + 'v1/webfonts?' + capability?.map(z => `capability=${encodeURIComponent(z)}`).join('&') + '&' + family?.map(z => `family=${encodeURIComponent(z)}`).join('&') + '&sort=' + sort + '&subset=' + (subset == null ? '' : encodeURIComponent(subset)), {});
		}
	}

	export enum Webfonts_webfonts_listSort { SORT_UNDEFINED = 0, ALPHA = 1, DATE = 2, POPULARITY = 3, STYLE = 4, TRENDING = 5 }

}

