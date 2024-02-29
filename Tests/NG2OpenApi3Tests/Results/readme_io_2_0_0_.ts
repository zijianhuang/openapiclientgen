import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Changelog {

		/**
		 * Body content of the changelog
		 * Required
		 */
		body: string;

		/** Visibility of the changelog */
		hidden?: boolean | null;

		/**
		 * Title of the changelog
		 * Required
		 */
		title: string;
		type?: ChangelogType | null;
	}
	export interface ChangelogFormProperties {

		/**
		 * Body content of the changelog
		 * Required
		 */
		body: FormControl<string | null | undefined>,

		/** Visibility of the changelog */
		hidden: FormControl<boolean | null | undefined>,

		/**
		 * Title of the changelog
		 * Required
		 */
		title: FormControl<string | null | undefined>,
		type: FormControl<ChangelogType | null | undefined>,
	}
	export function CreateChangelogFormGroup() {
		return new FormGroup<ChangelogFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			hidden: new FormControl<boolean | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ChangelogType | null | undefined>(undefined),
		});

	}

	export enum ChangelogType { '' = '', added = 'added', fixed = 'fixed', improved = 'improved', deprecated = 'deprecated', removed = 'removed' }

	export interface CustomPage {

		/** Body formatted in Markdown (displayed by default). */
		body?: string | null;

		/** Visibility of the custom page */
		hidden?: boolean | null;

		/** Body formatted in HTML (sanitized, only displayed if `htmlmode` is **true**). */
		html?: string | null;

		/** **true** if `html` should be displayed, **false** if `body` should be displayed. */
		htmlmode?: boolean | null;

		/**
		 * Title of the custom page
		 * Required
		 */
		title: string;
	}
	export interface CustomPageFormProperties {

		/** Body formatted in Markdown (displayed by default). */
		body: FormControl<string | null | undefined>,

		/** Visibility of the custom page */
		hidden: FormControl<boolean | null | undefined>,

		/** Body formatted in HTML (sanitized, only displayed if `htmlmode` is **true**). */
		html: FormControl<string | null | undefined>,

		/** **true** if `html` should be displayed, **false** if `body` should be displayed. */
		htmlmode: FormControl<boolean | null | undefined>,

		/**
		 * Title of the custom page
		 * Required
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateCustomPageFormGroup() {
		return new FormGroup<CustomPageFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			hidden: new FormControl<boolean | null | undefined>(undefined),
			html: new FormControl<string | null | undefined>(undefined),
			htmlmode: new FormControl<boolean | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Doc {

		/** Body content of the page, formatted in ReadMe or Github flavored Markdown. Accepts long page content, for example, greater than 100k characters */
		body?: string | null;

		/**
		 * Category ID of the page, which you can get through https://docs.readme.com/developers/reference/categories#getcategory
		 * Required
		 */
		category: string;

		/** Visibility of the page */
		hidden?: boolean | null;

		/** For a subpage, specify the parent doc ID, which you can get through https://docs.readme.com/developers/reference/docs#getdoc */
		parentDoc?: string | null;

		/**
		 * Title of the page
		 * Required
		 */
		title: string;

		/** Type of the page. The available types all show up under the /docs/ URL path of your docs project (also known as the "guides" section). Can be "basic" (most common), "error" (page desribing an API error), or "link" (page that redirects to an external link) */
		type?: DocType | null;
	}
	export interface DocFormProperties {

		/** Body content of the page, formatted in ReadMe or Github flavored Markdown. Accepts long page content, for example, greater than 100k characters */
		body: FormControl<string | null | undefined>,

		/**
		 * Category ID of the page, which you can get through https://docs.readme.com/developers/reference/categories#getcategory
		 * Required
		 */
		category: FormControl<string | null | undefined>,

		/** Visibility of the page */
		hidden: FormControl<boolean | null | undefined>,

		/** For a subpage, specify the parent doc ID, which you can get through https://docs.readme.com/developers/reference/docs#getdoc */
		parentDoc: FormControl<string | null | undefined>,

		/**
		 * Title of the page
		 * Required
		 */
		title: FormControl<string | null | undefined>,

		/** Type of the page. The available types all show up under the /docs/ URL path of your docs project (also known as the "guides" section). Can be "basic" (most common), "error" (page desribing an API error), or "link" (page that redirects to an external link) */
		type: FormControl<DocType | null | undefined>,
	}
	export function CreateDocFormGroup() {
		return new FormGroup<DocFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			hidden: new FormControl<boolean | null | undefined>(undefined),
			parentDoc: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<DocType | null | undefined>(undefined),
		});

	}

	export enum DocType { basic = 'basic', error = 'error', link = 'link' }

	export interface Version {

		/** Dubbed name of version */
		codename?: string | null;

		/**
		 * Semantic Version to use as the base fork
		 * Required
		 */
		from: string;
		is_beta?: boolean | null;

		/** Should this be deprecated? Only allowed in PUT operations */
		is_deprecated?: boolean | null;

		/** Should this be publically accessible? */
		is_hidden?: boolean | null;

		/** Should this be the **main** version */
		is_stable?: boolean | null;

		/**
		 * Semantic Version
		 * Required
		 */
		version: string;
	}
	export interface VersionFormProperties {

		/** Dubbed name of version */
		codename: FormControl<string | null | undefined>,

		/**
		 * Semantic Version to use as the base fork
		 * Required
		 */
		from: FormControl<string | null | undefined>,
		is_beta: FormControl<boolean | null | undefined>,

		/** Should this be deprecated? Only allowed in PUT operations */
		is_deprecated: FormControl<boolean | null | undefined>,

		/** Should this be publically accessible? */
		is_hidden: FormControl<boolean | null | undefined>,

		/** Should this be the **main** version */
		is_stable: FormControl<boolean | null | undefined>,

		/**
		 * Semantic Version
		 * Required
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateVersionFormGroup() {
		return new FormGroup<VersionFormProperties>({
			codename: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			is_beta: new FormControl<boolean | null | undefined>(undefined),
			is_deprecated: new FormControl<boolean | null | undefined>(undefined),
			is_hidden: new FormControl<boolean | null | undefined>(undefined),
			is_stable: new FormControl<boolean | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get metadata about the current project
		 * Returns project data for API key
		 * Get 
		 * @return {void} Project data
		 */
		GetProject(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get API specification metadata
		 * Get api-specification
		 * @param {number} perPage Number of items to include in pagination (up to 100, defaults to 10)
		 *     Minimum: 1    Maximum: 100
		 * @param {number} page Used to specify further pages (starts at 1)
		 *     Minimum: 1
		 * @return {void} Successfully retrieved API specification metadata.
		 */
		GetAPISpecification(perPage: number | null | undefined, page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api-specification?perPage=' + perPage + '&page=' + page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an API specification in ReadMe
		 * Delete api-specification/{id}
		 * @param {string} id ID of the API specification. The unique ID for each API can be found by navigating to your **API Definitions** page.
		 * @return {void} 
		 */
		DeleteAPISpecification(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api-specification/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get category
		 * Returns the category with this slug
		 * Get categories/{slug}
		 * @param {string} slug Slug of category. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the the category "Getting Started", enter the slug "getting-started"
		 * @return {void} The category exists and has been returned
		 */
		GetCategory(slug: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'categories/' + (slug == null ? '' : encodeURIComponent(slug)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get docs for category
		 * Returns the docs and children docs within this category
		 * Get categories/{slug}/docs
		 * @param {string} slug Slug of category. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the the category "Getting Started", enter the slug "getting-started"
		 * @return {void} The category exists and all of the docs have been returned
		 */
		GetCategoryDocs(slug: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'categories/' + (slug == null ? '' : encodeURIComponent(slug)) + '/docs', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get changelogs
		 * Returns a list of changelogs associated with the project API key
		 * Get changelogs
		 * @param {number} perPage Number of items to include in pagination (up to 100, defaults to 10)
		 *     Minimum: 1    Maximum: 100
		 * @param {number} page Used to specify further pages (starts at 1)
		 *     Minimum: 1
		 * @return {void} OK
		 */
		GetChangelogs(perPage: number | null | undefined, page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'changelogs?perPage=' + perPage + '&page=' + page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create changelog
		 * Create a new changelog inside of this project
		 * Post changelogs
		 * @param {Changelog} requestBody Changelog object
		 * @return {void} 
		 */
		CreateChangelog(requestBody: Changelog): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'changelogs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete changelog
		 * Delete the changelog with this slug
		 * Delete changelogs/{slug}
		 * @param {string} slug Slug of changelog
		 * @return {void} 
		 */
		DeleteChangelog(slug: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'changelogs/' + (slug == null ? '' : encodeURIComponent(slug)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get changelog
		 * Returns the changelog with this slug
		 * Get changelogs/{slug}
		 * @param {string} slug Slug of changelog
		 * @return {void} The changelog exists and has been returned
		 */
		GetChangelog(slug: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'changelogs/' + (slug == null ? '' : encodeURIComponent(slug)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update changelog
		 * Update a changelog with this slug
		 * Put changelogs/{slug}
		 * @param {string} slug Slug of changelog
		 * @param {Changelog} requestBody Changelog object
		 * @return {void} The changelog has successfully been updated
		 */
		UpdateChangelog(slug: string, requestBody: Changelog): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'changelogs/' + (slug == null ? '' : encodeURIComponent(slug)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get custom pages
		 * Returns a list of custom pages associated with the project API key
		 * Get custompages
		 * @param {number} perPage Number of items to include in pagination (up to 100, defaults to 10)
		 *     Minimum: 1    Maximum: 100
		 * @param {number} page Used to specify further pages (starts at 1)
		 *     Minimum: 1
		 * @return {void} OK
		 */
		GetCustomPages(perPage: number | null | undefined, page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'custompages?perPage=' + perPage + '&page=' + page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create custom page
		 * Create a new custom page inside of this project
		 * Post custompages
		 * @param {CustomPage} requestBody CustomPage object
		 * @return {void} 
		 */
		CreateCustomPage(requestBody: CustomPage): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'custompages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete custom page
		 * Delete the custom page with this slug
		 * Delete custompages/{slug}
		 * @param {string} slug Slug of custom page
		 * @return {void} 
		 */
		DeleteCustomPage(slug: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'custompages/' + (slug == null ? '' : encodeURIComponent(slug)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get custom page
		 * Returns the custom page with this slug
		 * Get custompages/{slug}
		 * @param {string} slug Slug of custom page
		 * @return {void} The custom page exists and has been returned
		 */
		GetCustomPage(slug: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'custompages/' + (slug == null ? '' : encodeURIComponent(slug)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update custom page
		 * Update a custom page with this slug
		 * Put custompages/{slug}
		 * @param {string} slug Slug of custom page
		 * @param {CustomPage} requestBody CustomPage object
		 * @return {void} The custom page has successfully been updated
		 */
		UpdateCustomPage(slug: string, requestBody: CustomPage): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'custompages/' + (slug == null ? '' : encodeURIComponent(slug)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create doc
		 * Create a new doc inside of this project
		 * Post docs
		 * @param {Doc} requestBody Doc object
		 * @return {void} 
		 */
		CreateDoc(requestBody: Doc): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'docs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Search docs
		 * Returns all docs that match the search
		 * Post docs/search
		 * @param {string} search Search string to look for
		 * @return {void} The search was successful and results were returned
		 */
		SearchDocs(search: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'docs/search?search=' + (search == null ? '' : encodeURIComponent(search)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete doc
		 * Delete the doc with this slug
		 * Delete docs/{slug}
		 * @param {string} slug Slug of doc. must be lowercase, and replace spaces with hyphens. For example, for the page titled "New Features", enter the slug "new-features"
		 * @return {void} 
		 */
		DeleteDoc(slug: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'docs/' + (slug == null ? '' : encodeURIComponent(slug)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get doc
		 * Returns the doc with this slug
		 * Get docs/{slug}
		 * @param {string} slug Slug of doc. must be lowercase, and replace spaces with hyphens. For example, for the page titled "New Features", enter the slug "new-features"
		 * @return {void} The doc exists and has been returned
		 */
		GetDoc(slug: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'docs/' + (slug == null ? '' : encodeURIComponent(slug)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update doc
		 * Update a doc with this slug
		 * Put docs/{slug}
		 * @param {string} slug Slug of doc. must be lowercase, and replace spaces with hyphens. For example, for the page titled "New Features", enter the slug "new-features"
		 * @param {Doc} requestBody Doc object
		 * @return {void} The doc has successfully been updated
		 */
		UpdateDoc(slug: string, requestBody: Doc): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'docs/' + (slug == null ? '' : encodeURIComponent(slug)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get errors
		 * Returns with all of the error page types for this project
		 * Get errors
		 * @return {void} An array of the errors
		 */
		GetErrors(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'errors', { observe: 'response', responseType: 'text' });
		}

		/**
		 * DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#deleteapispecification to delete a Swagger file in ReadMe
		 * Delete swagger/{id}
		 * @param {string} id ID of swagger the file
		 * @return {void} 
		 */
		DeleteSwagger(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'swagger/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get versions
		 * Retrieve a list of versions associated with a project API key
		 * Get version
		 * @return {void} JSON list of versions
		 */
		GetVersions(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'version', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create version
		 * Create a new version
		 * Post version
		 * @param {Version} requestBody Version object
		 * @return {void} The model was successfully created and associated with the target project
		 */
		CreateVersion(requestBody: Version): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'version', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete version
		 * Delete a version
		 * Delete version/{versionId}
		 * @param {string} versionId Semver version indentifier
		 * @return {void} The target version was successfully deleted
		 */
		DeleteVersion(versionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'version/' + (versionId == null ? '' : encodeURIComponent(versionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get version
		 * Returns the version with this version ID
		 * Get version/{versionId}
		 * @param {string} versionId Semver version indentifier
		 * @return {void} JSON version model
		 */
		GetVersion(versionId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'version/' + (versionId == null ? '' : encodeURIComponent(versionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update version
		 * Update an existing version
		 * Put version/{versionId}
		 * @param {string} versionId Semver version indentifier
		 * @param {Version} requestBody Version object
		 * @return {void} The target version was successfully updated
		 */
		UpdateVersion(versionId: string, requestBody: Version): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'version/' + (versionId == null ? '' : encodeURIComponent(versionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

