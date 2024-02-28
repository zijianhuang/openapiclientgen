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
		 * lists your's github repos
		 * This endpoint shows all imported repositories from your Github account.
		 * This enpoint expects that you have a GitHub account connected and the token
		 * is still valid. If that is not the case please visit **https://www.versioneye.com/settings/connect**.
		 * to update your GitHub credentials.
		 * If it shows no or old data, then you can use the `github/sync` endpoint
		 * to update your account with the current meta data from GitHub.
		 * Get github
		 * @param {string} lang Filter by language
		 * @param {boolean} _private Filter by visibility
		 * @param {string} org_name Filter by name of organization
		 * @param {string} org_type Filter by type of organization
		 * @param {string} page Number of page
		 * @param {boolean} only_imported Show only imported repositories
		 * @return {void} lists your's github repos
		 */
		GetGithub(lang: string | null | undefined, _private: boolean | null | undefined, org_name: string | null | undefined, org_type: string | null | undefined, page: string | null | undefined, only_imported: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'github?lang=' + (lang == null ? '' : encodeURIComponent(lang)) + '&_private=' + _private + '&org_name=' + (org_name == null ? '' : encodeURIComponent(org_name)) + '&org_type=' + (org_type == null ? '' : encodeURIComponent(org_type)) + '&page=' + (page == null ? '' : encodeURIComponent(page)) + '&only_imported=' + only_imported, { observe: 'response', responseType: 'text' });
		}

		/**
		 * github service hook
		 * This endpoint is registered as service hook on GitHub. It triggers a project re-parse on each git push.
		 * Post github/hook/{project_id}
		 * @param {string} project_id Project ID
		 * @return {void} 
		 */
		PostGithubHookProjectId(project_id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'github/hook/' + (project_id == null ? '' : encodeURIComponent(project_id)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * re-load github data
		 * Reimports ALL GitHub Repositories. This Endpoint fetches meta information to all
		 * repositories in your GitHub account. Meta information such as repo name, branches and
		 * supported project files.
		 * This endpoint works asynchronously and returns a status code. The status code is either
		 * **running** or **done**.
		 * Get github/sync
		 * @return {void} re-load github data
		 */
		GetGithubSync(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'github/sync', { observe: 'response', responseType: 'text' });
		}

		/**
		 * shows the detailed information for the repository
		 * This Endpoint returns detailed information about a GitHub repository.
		 * Due the limits of our current API framework, the repo key has to be
		 * encoded as url-safe string. That means all '/' has to be replaced with
		 * colons ':' and '.' has to be replaced with '~'.
		 * For example,  repository with fullname `versioneye/veye` has to transformed
		 * to `versioneye:veye`.
		 * Get github/{repo_key}
		 * @param {string} repo_key encoded repo name with optional branch info.
		 * @return {void} shows the detailed information for the repository
		 */
		GetGithubRepoKey(repo_key: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'github/' + (repo_key == null ? '' : encodeURIComponent(repo_key)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * imports project file from github
		 * Use this Endpoint to import a project file from GitHub. This will create a new project on VersionEye.
		 * Due the limits of our current API framework, the repo key has to be
		 * encoded as url-safe string. That means all '/' has to be replaced with
		 * colons ':' and '.' has to be replaced with '~'.
		 * For example,  repository with fullname `versioneye/veye` has to transformed
		 * to `versioneye:veye`.
		 * Post github/{repo_key}
		 * @param {string} repo_key encoded repo name
		 * @return {void} 
		 */
		PostGithubRepoKey(repo_key: string, requestBody: PostGithubRepoKeyPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'github/' + (repo_key == null ? '' : encodeURIComponent(repo_key)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * remove imported project
		 * This Endpoint deletes a project on VersionEye!
		 * Due the limits of our current API framework, the repo key has to be
		 * encoded as url-safe string. That means all '/' has to be replaced with
		 * colons ':' and '.' has to be replaced with '~'.
		 * For example,  repository with fullname `versioneye/veye` has to transformed
		 * to `versioneye:veye`.
		 * Delete github/{repo_key}
		 * @param {string} repo_key encoded repo-key
		 * @param {string} branch the name of the branch
		 * @return {void} 
		 */
		DeleteGithubRepoKey(repo_key: string, branch: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'github/' + (repo_key == null ? '' : encodeURIComponent(repo_key)) + '&branch=' + (branch == null ? '' : encodeURIComponent(branch)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * shows profile of authorized user
		 * On Swagger, you can create session by adding additional parameter :api_key.
		 * Get me
		 * @return {void} shows profile of authorized user
		 */
		GetMe(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me', { observe: 'response', responseType: 'text' });
		}

		/**
		 * shows comments of authorized user
		 * shows comments of authorized user
		 * Get me/comments
		 * @param {number} page page number for pagination
		 * @return {void} shows comments of authorized user
		 */
		GetMeComments(page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/comments?page=' + page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * shows the packages you are following
		 * shows the packages you are following
		 * Get me/favorites
		 * @param {number} page page number for pagination
		 * @return {void} shows the packages you are following
		 */
		GetMeFavorites(page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/favorites?page=' + page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * shows unread notifications of authorized user
		 * This Endpoint returns the 30 latest notifications.
		 * If there are new versions out there for software packages you follow directly on VersionEye, then
		 * each new version is a new **notification** for your account.
		 * Get me/notifications
		 * @param {number} page Specify page for paging
		 * @return {void} shows unread notifications of authorized user
		 */
		GetMeNotifications(page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/notifications?page=' + page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the list of organisations you have access to
		 * This endpoint requires the API key from a user. The result is a set of organisations and their API keys.
		 * Get organisations
		 * @return {void} Returns the list of organisations you have access to
		 */
		GetOrganisations(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'organisations', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the inventory list of the organisation
		 * Find a detailed description here: https://github.com/versioneye/versioneye-api/blob/master/docs/api/v2/organisation.md
		 * Get organisations/{orga_name}/inventory
		 * @param {string} team_name Filter by team name
		 * @param {string} language Filter by programming language
		 * @param {string} project_version Filter down by project version
		 * @param {string} post_filter Post processing filter. Possible values are 'ALL', 'duplicates_only', 'show_duplicates'
		 * @param {number} orga_name Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Returns the inventory list of the organisation
		 */
		GetOrganisationsOrgaNameInventory(team_name: string | null | undefined, language: string | null | undefined, project_version: string | null | undefined, post_filter: string | null | undefined, orga_name: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'organisations/' + orga_name + '/inventory?team_name=' + (team_name == null ? '' : encodeURIComponent(team_name)) + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&project_version=' + (project_version == null ? '' : encodeURIComponent(project_version)) + '&post_filter=' + (post_filter == null ? '' : encodeURIComponent(post_filter)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the inventory diff object
		 * Get organisations/{orga_name}/inventory_diff
		 * @param {string} inventory_diff_id ID of the inventory diff object
		 * @param {number} orga_name Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Returns the inventory diff object
		 */
		GetOrganisationsOrgaNameInventoryDiff(inventory_diff_id: string | null | undefined, orga_name: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'organisations/' + orga_name + '/inventory_diff?inventory_diff_id=' + (inventory_diff_id == null ? '' : encodeURIComponent(inventory_diff_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an inventory diff object
		 * This Endpoint takes 2 inventory filters and calculates the difference between them.
		 * The diff object contains wich items have been removed and/or added compared to the inventory1 filter.
		 * The response of this Endpoint is the ID of the diff object, which is calculated async in the background.
		 * Post organisations/{orga_name}/inventory_diff
		 * @param {number} orga_name Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		PostOrganisationsOrgaNameInventoryDiff(orga_name: number, requestBody: PostOrganisationsOrgaNameInventoryDiffPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'organisations/' + orga_name + '/inventory_diff', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the list of projects
		 * Returns the list of projects
		 * Get organisations/{orga_name}/projects
		 * @param {number} orga_name Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Returns the list of projects
		 */
		GetOrganisationsOrgaNameProjects(orga_name: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'organisations/' + orga_name + '/projects', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the list of teams
		 * Returns the list of teams
		 * Get organisations/{orga_name}/teams
		 * @param {number} orga_name Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Returns the list of teams
		 */
		GetOrganisationsOrgaNameTeams(orga_name: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'organisations/' + orga_name + '/teams', { observe: 'response', responseType: 'text' });
		}

		/**
		 * search packages
		 * This resource returns same results as our web application. But you get it as JSON objects -
		 * the result is an JSON array of product objects.
		 * When there's no match for the query, the result array will be empty.
		 * Get products/search/{q}
		 * @param {string} q Query string. At least 2 characters.
		 * @param {string} lang Filter results by programming languages;
		 *                                   For filtering multiple languages submit a comma separated list of language strings.
		 *                                 
		 * @param {string} g Filter by GroupID. This is Java/Maven specific
		 * @param {number} page Specify page for paging
		 * @return {void} search packages
		 */
		GetProductsSearchQ(q: string, lang: string | null | undefined, g: string | null | undefined, page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'products/search/' + (q == null ? '' : encodeURIComponent(q)) + '&lang=' + (lang == null ? '' : encodeURIComponent(lang)) + '&g=' + (g == null ? '' : encodeURIComponent(g)) + '&page=' + page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * search by SHA value
		 * This Endpoint expects a SHA value and returns the corresponding product to it, if available.
		 * Get products/sha/{sha}
		 * @param {number} sha Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} search by SHA value
		 */
		GetProductsShaSha(sha: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'products/sha/' + sha, { observe: 'response', responseType: 'text' });
		}

		/**
		 * detailed information for specific package
		 * Please replace all slashes `/` through colons `:` and all dots `.` through `~`!
		 * Example: The clojure package `yummy.json/json` has to be transformed to  `yummy~json:json`.
		 * #### Notes about status codes
		 * * API returns 404, when the product with given product key doesnt exists.
		 * * Response 302 means that you didnt encode prod_key correctly.* (Replace all dots & slashes ) *
		 * Get products/{lang}/{prod_key}
		 * @param {string} lang "Name of programming language"
		 * @param {string} prod_key "Encoded product key, replace all `/` and `.`
		 * @param {string} prod_version "Version string"
		 * @return {void} detailed information for specific package
		 */
		GetProductsLangProdKey(lang: string, prod_key: string, prod_version: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'products/' + (lang == null ? '' : encodeURIComponent(lang)) + '/' + (prod_key == null ? '' : encodeURIComponent(prod_key)) + '&prod_version=' + (prod_version == null ? '' : encodeURIComponent(prod_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * check your following status
		 * Please replace all slashes `/` through colons `:` and all dots `.` through `~`!
		 * Example: The clojure package `yummy.json/json` has to be transformed to  `yummy~json:json`.
		 * #### Notes about status codes
		 * This resource will returns the status code 404 if there is no product
		 * for the given prod_key.
		 * Get products/{lang}/{prod_key}/follow
		 * @param {string} lang "Name of programming language"
		 * @param {string} prod_key Package specifier
		 * @return {void} check your following status
		 */
		GetProductsLangProdKeyFollow(lang: string, prod_key: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'products/' + (lang == null ? '' : encodeURIComponent(lang)) + '/' + (prod_key == null ? '' : encodeURIComponent(prod_key)) + '/follow', { observe: 'response', responseType: 'text' });
		}

		/**
		 * follow your favorite software package
		 * Please replace all slashes `/` through colons `:` and all dots `.` through `~`!
		 * Example: The clojure package `yummy.json/json` has to be transformed to  `yummy~json:json`.
		 * #### Notes about status codes
		 * It will respond 404, when you are using wrong product key or encode it uncorrectly.
		 * Post products/{lang}/{prod_key}/follow
		 * @param {string} lang Programming language
		 * @param {string} prod_key  Package product key. 
		 * @return {void} 
		 */
		PostProductsLangProdKeyFollow(lang: string, prod_key: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'products/' + (lang == null ? '' : encodeURIComponent(lang)) + '/' + (prod_key == null ? '' : encodeURIComponent(prod_key)) + '/follow', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * unfollow given software package
		 * Please replace all slashes `/` through colons `:` and all dots `.` through `~`!
		 * Example: The clojure package `yummy.json/json` has to be transformed to  `yummy~json:json`.
		 * #### Response codes
		 * * 400 - bad request; you used wrong product key;
		 * * 401 - unauthorized - please append api_key
		 * * 403 - forbidden; you are not authorized; or just missed api_key;
		 * Delete products/{lang}/{prod_key}/follow
		 * @param {string} lang Programming language
		 * @param {string} prod_key Package specifier
		 * @return {void} 
		 */
		DeleteProductsLangProdKeyFollow(lang: string, prod_key: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'products/' + (lang == null ? '' : encodeURIComponent(lang)) + '/' + (prod_key == null ? '' : encodeURIComponent(prod_key)) + '/follow', { observe: 'response', responseType: 'text' });
		}

		/**
		 * references
		 * It returns the references of a package.
		 * Please replace all slashes `/` through colons `:` and all dots `.` through `~`!
		 * Example: The clojure package `yummy.json/json` has to be transformed to  `yummy~json:json`.
		 * #### Notes about status codes
		 * This resource will return the status code 404 if there is no product for
		 * the given prod_key or the product has 0 references.
		 * Get products/{lang}/{prod_key}/references
		 * @param {string} lang Language
		 * @param {string} prod_key Product Key
		 * @param {number} page Page for paging
		 * @return {void} references
		 */
		GetProductsLangProdKeyReferences(lang: string, prod_key: string, page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'products/' + (lang == null ? '' : encodeURIComponent(lang)) + '/' + (prod_key == null ? '' : encodeURIComponent(prod_key)) + '/references&page=' + page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * list versions of a package
		 * Please replace all slashes `/` through colons `:` and all dots `.` through `~`!
		 * Example: The clojure package `yummy.json/json` has to be transformed to  `yummy~json:json`.
		 * #### Notes about status codes
		 * * API returns 404, when the product with given product key doesnt exists.
		 * * Response 302 means that you didnt encode prod_key correctly.* (Replace all dots & slashes ) *
		 * Get products/{lang}/{prod_key}/versions
		 * @param {string} lang "Name of programming language"
		 * @param {string} prod_key "Encoded product key, replace all `/` and `.`
		 * @return {void} list versions of a package
		 */
		GetProductsLangProdKeyVersions(lang: string, prod_key: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'products/' + (lang == null ? '' : encodeURIComponent(lang)) + '/' + (prod_key == null ? '' : encodeURIComponent(prod_key)) + '/versions', { observe: 'response', responseType: 'text' });
		}

		/**
		 * suggest a license for an artifact
		 * With this endpoint users can suggest a license for an artifact.
		 * Post products/{lang}/{prod_key}/{prod_version}/license
		 * @param {string} lang  programming language 
		 * @param {string} prod_key  product key 
		 * @param {string} prod_version  product version 
		 * @return {void} 
		 */
		PostProductsLangProdKeyProdVersionLicense(lang: string, prod_key: string, prod_version: string, requestBody: PostProductsLangProdKeyProdVersionLicensePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'products/' + (lang == null ? '' : encodeURIComponent(lang)) + '/' + (prod_key == null ? '' : encodeURIComponent(prod_key)) + '/' + (prod_version == null ? '' : encodeURIComponent(prod_version)) + '/license', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * upload scm changelogs to an artifact
		 * This resource can parse a changelog.xml from the maven-changelog-plugin, assign
		 * it to a specific artifact and display the changelog infos on the product page.
		 * Please replace all slashes `/` through colons `:` and all dots `.` through `~`!
		 * Example: The clojure package `yummy.json/json` has to be transformed to  `yummy~json:json`.
		 * #### Notes about status codes
		 * It will respond 404, when you are using wrong product key or encode it uncorrectly.
		 * Post products/{lang}/{prod_key}/{prod_version}/scm_changes
		 * @param {string} lang  programming language 
		 * @param {string} prod_key  product key 
		 * @param {string} prod_version  product version 
		 * @return {void} 
		 */
		PostProductsLangProdKeyProdVersionScmChanges(lang: string, prod_key: string, prod_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'products/' + (lang == null ? '' : encodeURIComponent(lang)) + '/' + (prod_key == null ? '' : encodeURIComponent(prod_key)) + '/' + (prod_version == null ? '' : encodeURIComponent(prod_version)) + '/scm_changes', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * list of projects
		 * To use this resource you need either an active session or you have to append
		 * your API Key to the URL as parameter. For example: "?api_key=666_your_api_key_666"
		 * Get projects
		 * @param {string} orga_name The name of the organisation the project is assigned to.
		 * @param {string} team_name The name of the team in the organisation this project is assigned to.
		 * @return {void} list of projects
		 */
		GetProjects(orga_name: string | null | undefined, team_name: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'projects?orga_name=' + (orga_name == null ? '' : encodeURIComponent(orga_name)) + '&team_name=' + (team_name == null ? '' : encodeURIComponent(team_name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * upload project file and create a new project
		 * To use this resource you need either an active session or you have to append
		 * your API Key to the URL as parameter. For example: "?api_key=666_your_api_key_666"
		 * Post projects
		 * @return {void} 
		 */
		PostProjects(requestBody: PostProjectsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'projects', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * merge a project into another one
		 * This endpoint merges a project (child_id) into another project (group_id/artifact_id).
		 * This endpoint is specially for Maven based projects!
		 * To use this resource you need either an active session or you have to append
		 * your API Key to the URL as parameter. For example: "?api_key=666_your_api_key_666"
		 * Get projects/{group_id}/{artifact_id}/merge_ga/{child_id}
		 * @param {string} group_id GroupId of the parent project
		 * @param {string} artifact_id ArtifactId of the parent project
		 * @param {string} child_id Project ID of the child
		 * @return {void} merge a project into another one
		 */
		GetProjectsGroupIdArtifactIdMergeGaChildId(group_id: string, artifact_id: string, child_id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'projects/' + (group_id == null ? '' : encodeURIComponent(group_id)) + '/' + (artifact_id == null ? '' : encodeURIComponent(artifact_id)) + '/merge_ga/' + (child_id == null ? '' : encodeURIComponent(child_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * merge a project into another one
		 * This endpoint merges a project (child_id) into another project (parent_id).
		 * To use this resource you need either an active session or you have to append
		 * your API Key to the URL as parameter. For example: "?api_key=666_your_api_key_666"
		 * Get projects/{parent_id}/merge/{child_id}
		 * @param {string} parent_id Project ID of the parent
		 * @param {string} child_id Project ID of the child
		 * @return {void} merge a project into another one
		 */
		GetProjectsParentIdMergeChildId(parent_id: string, child_id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'projects/' + (parent_id == null ? '' : encodeURIComponent(parent_id)) + '/merge/' + (child_id == null ? '' : encodeURIComponent(child_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * unmerge a project
		 * This endpoint unmerges a project (child_id) from another project (parent_id). It makes the
		 * chilld again a separate project!
		 * To use this resource you need either an active session or you have to append
		 * your API Key to the URL as parameter. For example: "?api_key=666_your_api_key_666"
		 * Get projects/{parent_id}/unmerge/{child_id}
		 * @param {string} parent_id Project ID of the parent
		 * @param {string} child_id Project ID of the child
		 * @return {void} unmerge a project
		 */
		GetProjectsParentIdUnmergeChildId(parent_id: string, child_id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'projects/' + (parent_id == null ? '' : encodeURIComponent(parent_id)) + '/unmerge/' + (child_id == null ? '' : encodeURIComponent(child_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * shows the project's information
		 * It shows detailed info of your project.
		 * Get projects/{project_key}
		 * @param {string} project_key Project ID
		 * @return {void} shows the project's information
		 */
		GetProjectsProjectKey(project_key: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'projects/' + (project_key == null ? '' : encodeURIComponent(project_key)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * update project properites
		 * To use this resource you need either an active session or you have to append
		 * your API Key to the URL as parameter. For example: "?api_key=666_your_api_key_666"
		 * With this Endpoint an existing project can be updated. This are the fields which
		 * can be updated:
		 * ```
		 * {
		 * public: false,
		 * name: "toto",
		 * description: "beschreibung",
		 * license: "Lizenz",
		 * version: "Versionio"
		 * }
		 * ```
		 * Put projects/{project_key}
		 * @param {string} project_key Project ID
		 * @return {void} update project properites
		 */
		PutProjectsProjectKey(project_key: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'projects/' + (project_key == null ? '' : encodeURIComponent(project_key)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * update project with new file
		 * To use this resource you need either an active session or you have to append
		 * your API Key to the URL as parameter. For example: "?api_key=666_your_api_key_666"
		 * Post projects/{project_key}
		 * @param {string} project_key Project ID
		 * @return {void} 
		 */
		PostProjectsProjectKey(project_key: string, requestBody: PostProjectsProjectKeyPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'projects/' + (project_key == null ? '' : encodeURIComponent(project_key)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * delete given project
		 * To use this resource you need either an active session or you have to append
		 * your API Key to the URL as parameter. For example: "?api_key=666_your_api_key_666"
		 * Delete projects/{project_key}
		 * @param {string} project_key Delete project with given project ID.
		 * @return {void} 
		 */
		DeleteProjectsProjectKey(project_key: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'projects/' + (project_key == null ? '' : encodeURIComponent(project_key)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * get a list of ALL dependencies
		 * This Endpoint returns a list of ALL dependencies of the project. This list includes
		 * dependencies of child projects as well.
		 * To use this resource you need either an active session or you have to append
		 * your API Key to the URL as parameter. For example: "?api_key=666_your_api_key_666"
		 * Get projects/{project_key}/dependencies
		 * @param {string} project_key Project ID or project_key
		 * @return {void} get a list of ALL dependencies
		 */
		GetProjectsProjectKeyDependencies(project_key: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'projects/' + (project_key == null ? '' : encodeURIComponent(project_key)) + '/dependencies', { observe: 'response', responseType: 'text' });
		}

		/**
		 * get grouped view of licences for dependencies
		 * To use this resource you need either an active session or you have to append
		 * your API Key to the URL as parameter. For example: "?api_key=666_your_api_key_666"
		 * Get projects/{project_key}/licenses
		 * @param {string} project_key Project ID or project_key
		 * @return {void} get grouped view of licences for dependencies
		 */
		GetProjectsProjectKeyLicenses(project_key: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'projects/' + (project_key == null ? '' : encodeURIComponent(project_key)) + '/licenses', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Security Vulnerabilities
		 * Security Vulnerabilities
		 * Get security
		 * @param {string} language Filter by programming languages
		 * @param {string} prod_key prod_key of the package
		 * @param {number} page Specify page for paging
		 * @param {string} asc_sort Asc sort by value
		 * @param {string} desc_sort Desc sort by value
		 * @return {void} Security Vulnerabilities
		 */
		GetSecurity(language: string, prod_key: string | null | undefined, page: number | null | undefined, asc_sort: string | null | undefined, desc_sort: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'security?language=' + (language == null ? '' : encodeURIComponent(language)) + '&prod_key=' + (prod_key == null ? '' : encodeURIComponent(prod_key)) + '&page=' + page + '&asc_sort=' + (asc_sort == null ? '' : encodeURIComponent(asc_sort)) + '&desc_sort=' + (desc_sort == null ? '' : encodeURIComponent(desc_sort)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Answers to request with basic pong.
		 * check is the service up and running
		 * Get services/ping
		 * @return {void} Answers to request with basic pong.
		 */
		GetServicesPing(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'services/ping', { observe: 'response', responseType: 'text' });
		}

		/**
		 * returns session info for authorized users
		 * If current user has active session, then this
		 * method will return 200 with short user profile.
		 * For othercase, it will return error message with status code 401.
		 * Get sessions
		 * @return {void} returns session info for authorized users
		 */
		GetSessions(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sessions', { observe: 'response', responseType: 'text' });
		}

		/**
		 * creates new sessions
		 * You need to append your api_key to request.
		 * Post sessions
		 * @return {void} 
		 */
		PostSessions(requestBody: PostSessionsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sessions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * delete current session aka log out.
		 * Close current session. It's very handy method when you re-generated your current API-key.
		 * Delete sessions
		 * @return {void} 
		 */
		DeleteSessions(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'sessions', { observe: 'response', responseType: 'text' });
		}

		/**
		 * creates new sessions
		 * You need to append your api_key to request.
		 * Post sessions/login
		 * @return {void} 
		 */
		PostSessionsLogin(requestBody: PostSessionsLoginPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sessions/login', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * shows profile of given user_id
		 * shows profile of given user_id
		 * Get users/{username}
		 * @param {string} username username
		 * @return {void} shows profile of given user_id
		 */
		GetUsersUsername(username: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (username == null ? '' : encodeURIComponent(username)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * shows user's comments
		 * shows user's comments
		 * Get users/{username}/comments
		 * @param {string} username VersionEye users' nickname
		 * @param {number} page pagination number
		 * @return {void} shows user's comments
		 */
		GetUsersUsernameComments(username: string, page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (username == null ? '' : encodeURIComponent(username)) + '/comments&page=' + page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * shows user's favorite packages
		 * shows user's favorite packages
		 * Get users/{username}/favorites
		 * @param {string} username username
		 * @param {number} page Pagination number
		 * @return {void} shows user's favorite packages
		 */
		GetUsersUsernameFavorites(username: string, page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (username == null ? '' : encodeURIComponent(username)) + '/favorites&page=' + page, { observe: 'response', responseType: 'text' });
		}
	}

	export interface PostGithubRepoKeyPostBody {

		/** the name of the branch */
		branch?: string | null;

		/** the project file (default is Gemfile) */
		file?: string | null;
	}
	export interface PostGithubRepoKeyPostBodyFormProperties {

		/** the name of the branch */
		branch: FormControl<string | null | undefined>,

		/** the project file (default is Gemfile) */
		file: FormControl<string | null | undefined>,
	}
	export function CreatePostGithubRepoKeyPostBodyFormGroup() {
		return new FormGroup<PostGithubRepoKeyPostBodyFormProperties>({
			branch: new FormControl<string | null | undefined>(undefined),
			file: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PostOrganisationsOrgaNameInventoryDiffPostBody {

		/** Inventory1, filter by team name */
		f1_team_name?: string | null;

		/** Inventory1, filter by programming language */
		f1_language?: string | null;

		/** Inventory1, filter down by project version */
		f1_project_version?: string | null;

		/** Inventory1, post processing filter. Possible values are 'ALL', 'duplicates_only', 'show_duplicates' */
		f1_post_filter?: string | null;

		/** Inventory2, filter by team name */
		f2_team_name?: string | null;

		/** Inventory2, filter by programming language */
		f2_language?: string | null;

		/** Inventory2, filter down by project version */
		f2_project_version?: string | null;

		/** Inventory2, post processing filter. Possible values are 'ALL', 'duplicates_only', 'show_duplicates' */
		f2_post_filter?: string | null;
	}
	export interface PostOrganisationsOrgaNameInventoryDiffPostBodyFormProperties {

		/** Inventory1, filter by team name */
		f1_team_name: FormControl<string | null | undefined>,

		/** Inventory1, filter by programming language */
		f1_language: FormControl<string | null | undefined>,

		/** Inventory1, filter down by project version */
		f1_project_version: FormControl<string | null | undefined>,

		/** Inventory1, post processing filter. Possible values are 'ALL', 'duplicates_only', 'show_duplicates' */
		f1_post_filter: FormControl<string | null | undefined>,

		/** Inventory2, filter by team name */
		f2_team_name: FormControl<string | null | undefined>,

		/** Inventory2, filter by programming language */
		f2_language: FormControl<string | null | undefined>,

		/** Inventory2, filter down by project version */
		f2_project_version: FormControl<string | null | undefined>,

		/** Inventory2, post processing filter. Possible values are 'ALL', 'duplicates_only', 'show_duplicates' */
		f2_post_filter: FormControl<string | null | undefined>,
	}
	export function CreatePostOrganisationsOrgaNameInventoryDiffPostBodyFormGroup() {
		return new FormGroup<PostOrganisationsOrgaNameInventoryDiffPostBodyFormProperties>({
			f1_team_name: new FormControl<string | null | undefined>(undefined),
			f1_language: new FormControl<string | null | undefined>(undefined),
			f1_project_version: new FormControl<string | null | undefined>(undefined),
			f1_post_filter: new FormControl<string | null | undefined>(undefined),
			f2_team_name: new FormControl<string | null | undefined>(undefined),
			f2_language: new FormControl<string | null | undefined>(undefined),
			f2_project_version: new FormControl<string | null | undefined>(undefined),
			f2_post_filter: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PostProductsLangProdKeyProdVersionLicensePostBody {

		/**
		 * name of the license
		 * Required
		 */
		license_name: string;

		/**
		 * source of the license. Where did you find it?
		 * Required
		 */
		license_source: string;

		/** you wanna say anyting important to this license? */
		comments?: string | null;
	}
	export interface PostProductsLangProdKeyProdVersionLicensePostBodyFormProperties {

		/**
		 * name of the license
		 * Required
		 */
		license_name: FormControl<string | null | undefined>,

		/**
		 * source of the license. Where did you find it?
		 * Required
		 */
		license_source: FormControl<string | null | undefined>,

		/** you wanna say anyting important to this license? */
		comments: FormControl<string | null | undefined>,
	}
	export function CreatePostProductsLangProdKeyProdVersionLicensePostBodyFormGroup() {
		return new FormGroup<PostProductsLangProdKeyProdVersionLicensePostBodyFormProperties>({
			license_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			license_source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			comments: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PostProjectsPostBody {

		/**
		 * Project file - [maven.pom, Gemfile ...]
		 * Required
		 */
		upload: string;

		/** By default 'public'. If 'public' everybody can see the project. */
		visibility?: string | null;

		/** The name of the VersionEye project. By default it is the filename. */
		name?: string | null;

		/** The name of the organisation this project should be assigned to. */
		orga_name?: string | null;

		/** The name of the team in the organisation this project should be assigned to. */
		team_name?: string | null;

		/** If 'true' this project will not show up in the UI and gets removed later. */
		temp?: string | null;
	}
	export interface PostProjectsPostBodyFormProperties {

		/**
		 * Project file - [maven.pom, Gemfile ...]
		 * Required
		 */
		upload: FormControl<string | null | undefined>,

		/** By default 'public'. If 'public' everybody can see the project. */
		visibility: FormControl<string | null | undefined>,

		/** The name of the VersionEye project. By default it is the filename. */
		name: FormControl<string | null | undefined>,

		/** The name of the organisation this project should be assigned to. */
		orga_name: FormControl<string | null | undefined>,

		/** The name of the team in the organisation this project should be assigned to. */
		team_name: FormControl<string | null | undefined>,

		/** If 'true' this project will not show up in the UI and gets removed later. */
		temp: FormControl<string | null | undefined>,
	}
	export function CreatePostProjectsPostBodyFormGroup() {
		return new FormGroup<PostProjectsPostBodyFormProperties>({
			upload: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			visibility: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			orga_name: new FormControl<string | null | undefined>(undefined),
			team_name: new FormControl<string | null | undefined>(undefined),
			temp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PostProjectsProjectKeyPostBody {

		/**
		 * Project file - [maven.pom, Gemfile ...]
		 * Required
		 */
		project_file: string;
	}
	export interface PostProjectsProjectKeyPostBodyFormProperties {

		/**
		 * Project file - [maven.pom, Gemfile ...]
		 * Required
		 */
		project_file: FormControl<string | null | undefined>,
	}
	export function CreatePostProjectsProjectKeyPostBodyFormGroup() {
		return new FormGroup<PostProjectsProjectKeyPostBodyFormProperties>({
			project_file: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PostSessionsPostBody {

		/**
		 * your personal token for API.
		 * Required
		 */
		api_key: string;
	}
	export interface PostSessionsPostBodyFormProperties {

		/**
		 * your personal token for API.
		 * Required
		 */
		api_key: FormControl<string | null | undefined>,
	}
	export function CreatePostSessionsPostBodyFormGroup() {
		return new FormGroup<PostSessionsPostBodyFormProperties>({
			api_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PostSessionsLoginPostBody {

		/**
		 * email or username
		 * Required
		 */
		username: string;

		/**
		 * password
		 * Required
		 */
		password: string;
	}
	export interface PostSessionsLoginPostBodyFormProperties {

		/**
		 * email or username
		 * Required
		 */
		username: FormControl<string | null | undefined>,

		/**
		 * password
		 * Required
		 */
		password: FormControl<string | null | undefined>,
	}
	export function CreatePostSessionsLoginPostBodyFormGroup() {
		return new FormGroup<PostSessionsLoginPostBodyFormProperties>({
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

}

