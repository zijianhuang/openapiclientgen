import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface Webfont {

		/** The category of the font. */
		category?: string;

		/** The name of the font. */
		family?: string;

		/** The font files (with all supported scripts) for each one of the available variants, as a key : value map. */
		files?: {[id: string]: any };

		/** This kind represents a webfont object in the webfonts service. */
		kind?: string;

		/** The date (format "yyyy-MM-dd") the font was modified for the last time. */
		lastModified?: Date;

		/** The scripts supported by the font. */
		subsets?: Array<string>;

		/** The available variants for the font. */
		variants?: Array<string>;

		/** The font version. */
		version?: string;
	}

	export interface WebfontList {

		/** The list of fonts currently served by the Google Fonts API. */
		items?: Array<Webfont>;

		/** This kind represents a list of webfont objects in the webfonts service. */
		kind?: string;
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
		Webfonts_webfonts_list(sort: Webfonts_webfonts_listSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'webfonts?sort=' + sort, { observe: 'response', responseType: 'text' });
		}
	}

	export enum Webfonts_webfonts_listSort { alpha = 0, date = 1, popularity = 2, style = 3, trending = 4 }

}

