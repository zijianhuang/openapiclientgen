import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface PackageSearchResult {

		/**
		 * The Debian source package for which up to 2 search results have been aggregated in `results`.
		 * Required
		 */
		package: string;

		/** Required */
		results: Array<SearchResult>;
	}
	export interface PackageSearchResultFormProperties {

		/**
		 * The Debian source package for which up to 2 search results have been aggregated in `results`.
		 * Required
		 */
		package: FormControl<string | null | undefined>,
	}
	export function CreatePackageSearchResultFormGroup() {
		return new FormGroup<PackageSearchResultFormProperties>({
			package: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A search result matching the specified query. You can use sources.debian.org to view the file contents. See https://github.com/Debian/dcs/blob/master/cmd/dcs-web/show/show.go for how to construct a sources.debian.org URL from a search result. */
	export interface SearchResult {

		/**
		 * The full line containing the search result.
		 * Required
		 */
		context: string;

		/** Up to 2 full lines after the search result (see `context`). */
		context_after?: Array<string>;

		/** Up to 2 full lines before the search result (see `context`). */
		context_before?: Array<string>;

		/**
		 * Line number containing the search result.
		 * Required
		 */
		line: number;

		/**
		 * The Debian source package containing this search result, including the full Debian version number.
		 * Required
		 */
		package: string;

		/**
		 * Path to the file containing the this search result, starting with `package`.
		 * Required
		 */
		path: string;
	}

	/** A search result matching the specified query. You can use sources.debian.org to view the file contents. See https://github.com/Debian/dcs/blob/master/cmd/dcs-web/show/show.go for how to construct a sources.debian.org URL from a search result. */
	export interface SearchResultFormProperties {

		/**
		 * The full line containing the search result.
		 * Required
		 */
		context: FormControl<string | null | undefined>,

		/**
		 * Line number containing the search result.
		 * Required
		 */
		line: FormControl<number | null | undefined>,

		/**
		 * The Debian source package containing this search result, including the full Debian version number.
		 * Required
		 */
		package: FormControl<string | null | undefined>,

		/**
		 * Path to the file containing the this search result, starting with `package`.
		 * Required
		 */
		path: FormControl<string | null | undefined>,
	}
	export function CreateSearchResultFormGroup() {
		return new FormGroup<SearchResultFormProperties>({
			context: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			line: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			package: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Searches through source code
		 * Performs a search through the full Debian Code Search corpus, blocking until all results are available (might take a few seconds depending on the search query).
		 * Search results are ordered by their ranking (best results come first).
		 * Get search
		 * @param {string} query The search query, for example `who knows...` (literal) or `who knows\.\.\.` (regular expression). See https://codesearch.debian.net/faq for more details about which keywords are supported. The regular expression flavor is RE2, see https://github.com/google/re2/blob/master/doc/syntax.txt
		 * @param {SearchMatch_mode} match_mode Whether the query is to be interpreted as a literal (`literal`) instead of as an RE2 regular expression (`regexp`). Literal searches are faster and do not require escaping special characters, regular expression searches are more powerful.
		 * @return {Array<SearchResult>} All search results
		 */
		Search(query: string, match_mode: SearchMatch_mode | null | undefined): Observable<Array<SearchResult>> {
			return this.http.get<Array<SearchResult>>(this.baseUri + 'search?query=' + (query == null ? '' : encodeURIComponent(query)) + '&match_mode=' + match_mode, {});
		}

		/**
		 * Like /search, but aggregates per package
		 * The search results are currently sorted arbitrarily, but we intend to sort them by ranking eventually: https://github.com/Debian/dcs/blob/51338e934eb7ee18d00c5c18531c0790a83cb698/cmd/dcs-web/querymanager.go#L719
		 * Get searchperpackage
		 * @param {string} query The search query, for example `who knows...` (literal) or `who knows\.\.\.` (regular expression). See https://codesearch.debian.net/faq for more details about which keywords are supported. The regular expression flavor is RE2, see https://github.com/google/re2/blob/master/doc/syntax.txt
		 * @param {SearchMatch_mode} match_mode Whether the query is to be interpreted as a literal (`literal`) instead of as an RE2 regular expression (`regexp`). Literal searches are faster and do not require escaping special characters, regular expression searches are more powerful.
		 * @return {Array<PackageSearchResult>} All search results
		 */
		Searchperpackage(query: string, match_mode: SearchMatch_mode | null | undefined): Observable<Array<PackageSearchResult>> {
			return this.http.get<Array<PackageSearchResult>>(this.baseUri + 'searchperpackage?query=' + (query == null ? '' : encodeURIComponent(query)) + '&match_mode=' + match_mode, {});
		}
	}

	export enum SearchMatch_mode { literal = 'literal', regexp = 'regexp' }

}

