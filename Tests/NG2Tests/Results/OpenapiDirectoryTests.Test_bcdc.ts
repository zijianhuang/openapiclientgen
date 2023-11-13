import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get the activity stream of an organization
		 * Return an organization's activity stream
		 * Get action/organization_activity_list
		 * @param {string} id The id or name of the organization
		 * @return {void} List of an organization's activities
		 */
		ActionOrganization_activity_listGetById(id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'action/organization_activity_list?id=' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the activity stream of an organization, HTML format
		 * Return an organization's activity stream as HTML
		 * Get action/organization_activity_list_html
		 * @param {string} id The id or name of the organization
		 * @return {void} List of an organization's activities in HTML
		 */
		ActionOrganization_activity_list_htmlGetById(id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'action/organization_activity_list_html?id=' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get names of organizations that match a query string
		 * Return a list of organization names that contain a string
		 * Get action/organization_autocomplete
		 * @param {string} q The string to search for
		 * @param {number} limit The maximum number of organizations to return (optional)
		 * @return {void} List of organizations
		 */
		ActionOrganization_autocompleteGetByQAndLimit(q: string | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'action/organization_autocomplete?q=' + (q == null ? '' : encodeURIComponent(q)) + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get number of followers of an organization
		 * Return the number of followers of an organization
		 * Get action/organization_follower_count
		 * @param {string} id The id or name of the organization
		 * @return {void} Count of organization followers
		 */
		ActionOrganization_follower_countGetById(id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'action/organization_follower_count?id=' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get users following an organization
		 * Return a list of users that are following a given organization
		 * Get action/organization_follower_list
		 * @param {string} id The id or name of the organization
		 * @return {void} List of organization followers
		 */
		ActionOrganization_follower_listGetById(id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'action/organization_follower_list?id=' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get names of all organizations
		 * Returns the names of all indexed organizations
		 * Get action/organization_list
		 * @param {number} offset The offset (index) of the first organizations to return
		 * @param {number} limit The number of organizations to be returned per page
		 * @return {void} List of organizations
		 */
		ActionOrganization_listGetByOffsetAndLimit(offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'action/organization_list?offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organizations that a user has a given permission for
		 * Return the organizations that the user has a given permission for
		 * Get action/organization_list_for_user
		 * @param {string} permission The permission the user has against the returned organization
		 * @return {void} List of organizations for given permission
		 */
		ActionOrganization_list_for_userGetByPermission(permission: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'action/organization_list_for_user?permission=' + (permission == null ? '' : encodeURIComponent(permission)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organization revisions
		 * Return an organization's revisions
		 * Get action/organization_revision_list
		 * @param {string} id The name or id of the organization
		 * @return {void} List of an organization's revisions
		 */
		ActionOrganization_revision_listGetById(id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'action/organization_revision_list?id=' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get details of a specific organization
		 * Return the details of an organization
		 * Get action/organization_show
		 * @param {string} id The id or name of the organization
		 * @param {boolean} include_datasets include a list of the organization's datasets
		 * @return {void} List organization details
		 */
		ActionOrganization_showGetByIdAndInclude_datasets(id: string | null | undefined, include_datasets: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'action/organization_show?id=' + (id == null ? '' : encodeURIComponent(id)) + '&include_datasets=' + include_datasets, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the activity stream of a package (dataset)
		 * Returns a package's activity stream
		 * Get action/package_activity_list
		 * @param {string} id The id or name of the package
		 * @param {number} offset Where to start getting activity items from
		 * @param {number} limit The maximum number of activities to return
		 * @return {void} List of activities
		 */
		ActionPackage_activity_listGetByIdAndOffsetAndLimit(id: string | null | undefined, offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'action/package_activity_list?id=' + (id == null ? '' : encodeURIComponent(id)) + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the activity stream of a package (dataset), HTML format
		 * The activity stream is rendered as a snippet of HTML meant to be included in an HTML pag, i.e it doesn't have any header or footer.
		 * Get action/package_activity_list_html
		 * @param {string} id The id or name of the package
		 * @param {number} offset Where to start getting activity items from
		 * @param {number} limit The maximum number of activities to return
		 * @return {void} List of activities rendered as HTML snippet
		 */
		ActionPackage_activity_list_htmlGetByIdAndOffsetAndLimit(id: string | null | undefined, offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'action/package_activity_list_html?id=' + (id == null ? '' : encodeURIComponent(id)) + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Find packages (datasets) matching a query
		 * Return a list of datasets that match a string
		 * Get action/package_autocomplete
		 * @param {string} q The string to query
		 * @param {number} limit The maximum number of resource formats to return
		 * @return {void} List of datasets that match a string
		 */
		ActionPackage_autocompleteGetByQAndLimit(q: string | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'action/package_autocomplete?q=' + (q == null ? '' : encodeURIComponent(q)) + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a list of all packages (datasets)
		 * Returns the names of all indexed packages (datasets)
		 * Get action/package_list
		 * @param {number} offset The offset (index) of the first package to return
		 * @param {number} limit The number of packages to be returned per page
		 * @return {void} List of packages
		 */
		ActionPackage_listGetByOffsetAndLimit(offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'action/package_list?offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get package (dataset) relationships
		 * Return a dataset's relationships
		 * Get action/package_relationships_list
		 * @param {string} id The id or name of the first package
		 * @param {string} id2 The id or name of the second package
		 * @param {string} rel relationship as string
		 * @return {void} List of dataset relationships
		 */
		ActionPackage_relationships_listGetByIdAndId2AndRel(id: string | null | undefined, id2: string | null | undefined, rel: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'action/package_relationships_list?id=' + (id == null ? '' : encodeURIComponent(id)) + '&id2=' + (id2 == null ? '' : encodeURIComponent(id2)) + '&rel=' + (rel == null ? '' : encodeURIComponent(rel)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get list of revisions for a package (dataset)
		 * Return a dataset's revision as a list of dictionaries
		 * Get action/package_revision_list
		 * @param {string} id The id or name of the dataset
		 * @return {void} List of dataset revisions
		 */
		ActionPackage_revision_listGetById(id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'action/package_revision_list?id=' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Find packages (datasets) matching query terms
		 * Searches for packages (datasets) matching the specified query terms
		 * Get action/package_search
		 * @param {string} q A query string
		 * @return {void} List of packages
		 */
		ActionPackage_searchGetByQ(q: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'action/package_search?q=' + (q == null ? '' : encodeURIComponent(q)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get metadata about one specific package (dataset)
		 * Returns metadata about the package (dataset) corresponding to the specified unique name
		 * Get action/package_show
		 * @param {string} id The package name
		 * @return {void} A package metadata object
		 */
		ActionPackage_showGetById(id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'action/package_show?id=' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets items related to a package (dataset)
		 * Returns a dataset's related items.
		 * Get action/related_list
		 * @param {string} id id or name of the dataset (optional)
		 * @param {string} dataset Dataset dictionary of the dataset (optional)
		 * @param {string} type_filter The type of related item to show (optional)
		 * @param {string} sort The order to sort the related items in
		 * @param {string} featured whether or not to restrict the results to only featured items
		 * @return {void} Search for related items
		 */
		ActionRelated_listGetByIdAndDatasetAndType_filterAndSortAndFeatured(id: string | null | undefined, dataset: string | null | undefined, type_filter: string | null | undefined, sort: string | null | undefined, featured: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'action/related_list?id=' + (id == null ? '' : encodeURIComponent(id)) + '&dataset=' + (dataset == null ? '' : encodeURIComponent(dataset)) + '&type_filter=' + (type_filter == null ? '' : encodeURIComponent(type_filter)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&featured=' + (featured == null ? '' : encodeURIComponent(featured)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Find resources
		 * Returns a dictionary with two fields ``count`` and ``results``.             The ``count`` field contains the total number of Resources                found without the limit or query parameters having an effect.             The ``results`` field is a list of dictized Resource objects.             The query parameter is a required field. It is a string in                the form ``{field}:{term}`` or a list of strings, each of the             same form. Within each string, ``{field}`` is a field or extra             field on the Resource domain object.
		 * Get action/resource_search
		 * @param {string} query The search criteria string or list of strings of the form ``{field}:{term1}``
		 * @param {string} fields Depreciated
		 * @param {string} order_by A field on the resource model that orders the results
		 * @param {number} offset Apply an offset to the query
		 * @param {number} limit Apply a limit to the query
		 * @return {void} Search for resources
		 */
		ActionResource_searchGetByQueryAndFieldsAndOrder_byAndOffsetAndLimit(query: string | null | undefined, fields: string | null | undefined, order_by: string | null | undefined, offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'action/resource_search?query=' + (query == null ? '' : encodeURIComponent(query)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)) + '&order_by=' + (order_by == null ? '' : encodeURIComponent(order_by)) + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get metadata for a specific resource
		 * Return the metadata of a resource
		 * Get action/resource_show
		 * @param {string} id The id of the resource
		 * @param {boolean} include_tracking Add tracking information to dataset
		 * @return {void} Return metadata of a resource
		 */
		ActionResource_showGetByIdAndInclude_tracking(id: string | null | undefined, include_tracking: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'action/resource_show?id=' + (id == null ? '' : encodeURIComponent(id)) + '&include_tracking=' + include_tracking, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the site status
		 * Returns the site status
		 * Get action/status_show
		 * @return {void} Returns the site status, version, installed extensions
		 */
		ActionStatus_showGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'action/status_show', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a list of tags
		 * Returns the names of all indexed tags
		 * Get action/tag_list
		 * @param {number} offset The offset (index) of the first tag to return
		 * @param {number} limit The number of tags to be returned per page
		 * @return {void} List of tags
		 */
		ActionTag_listGetByOffsetAndLimit(offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'action/tag_list?offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

}

