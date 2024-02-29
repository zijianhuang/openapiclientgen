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
		 * createPathwayCreate a new pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.
		 * Post createPathway
		 * @param {string} gpml The GPML code for the new pathway
		 * @param {string} auth The authentication info
		 * @param {string} username The user name
		 * @return {void} everything ok
		 */
		CreatePathwayPostByGpmlAndAuthAndUsernameAndFormat(gpml: string, auth: string, username: string, format: CreatePathwayPostByGpmlAndAuthAndUsernameAndFormatFormat | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'createPathway?gpml=' + (gpml == null ? '' : encodeURIComponent(gpml)) + '&auth=' + (auth == null ? '' : encodeURIComponent(auth)) + '&username=' + (username == null ? '' : encodeURIComponent(username)) + '&format=' + format, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * findInteractionsFind interactions defined in WikiPathways pathways.
		 * Get findInteractions
		 * @param {string} query The name of an entity to find interactions for (e.g. 'P53')
		 * @return {void} everything ok
		 */
		FindInteractionsGetByQueryAndFormat(query: string, format: CreatePathwayPostByGpmlAndAuthAndUsernameAndFormatFormat | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'findInteractions?query=' + (query == null ? '' : encodeURIComponent(query)) + '&format=' + format, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * findPathwaysByLiterature
		 * Get findPathwaysByLiterature
		 * @param {string} query The query, can be a pubmed id, author name or title keyword.
		 * @return {void} everything ok
		 */
		FindPathwaysByLiteratureGetByQueryAndFormat(query: string, format: CreatePathwayPostByGpmlAndAuthAndUsernameAndFormatFormat | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'findPathwaysByLiterature?query=' + (query == null ? '' : encodeURIComponent(query)) + '&format=' + format, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * findPathwaysByText
		 * Get findPathwaysByText
		 * @param {string} query The query, e.g. 'apoptosis'
		 * @param {string} species Optional, limit the query by species. Leave
		 * @return {void} everything ok
		 */
		FindPathwaysByTextGetByQueryAndSpeciesAndFormat(query: string, species: string | null | undefined, format: CreatePathwayPostByGpmlAndAuthAndUsernameAndFormatFormat | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'findPathwaysByText?query=' + (query == null ? '' : encodeURIComponent(query)) + '&species=' + (species == null ? '' : encodeURIComponent(species)) + '&format=' + format, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * findPathwaysByXref
		 * Get findPathwaysByXref
		 * @param {Array<string>} ids string
		 * @param {Array<string>} codes string
		 * @return {void} everything ok
		 */
		FindPathwaysByXrefGetByIdsAndCodesAndFormat(ids: Array<string>, codes: Array<string> | null | undefined, format: CreatePathwayPostByGpmlAndAuthAndUsernameAndFormatFormat | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'findPathwaysByXref?' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&' + codes?.map(z => `codes=${encodeURIComponent(z)}`).join('&') + '&format=' + format, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * getColoredPathwayGet a colored image version of the pathway.
		 * Get getColoredPathway
		 * @param {string} pwId The pathway identifier
		 * @param {string} revision The revision of the pathway (use '0' for most recent)
		 * @param {Array<string>} graphId string
		 * @param {Array<string>} color string
		 * @param {string} fileType The image type (One of 'svg', 'pdf' or 'png').
		 * @return {void} everything ok
		 */
		GetColoredPathwayGetByPwIdAndRevisionAndGraphIdAndColorAndFileTypeAndFormat(pwId: string, revision: string, graphId: Array<string>, color: Array<string>, fileType: string, format: CreatePathwayPostByGpmlAndAuthAndUsernameAndFormatFormat | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'getColoredPathway?pwId=' + (pwId == null ? '' : encodeURIComponent(pwId)) + '&revision=' + (revision == null ? '' : encodeURIComponent(revision)) + '&' + graphId.map(z => `graphId=${encodeURIComponent(z)}`).join('&') + '&' + color.map(z => `color=${encodeURIComponent(z)}`).join('&') + '&fileType=' + (fileType == null ? '' : encodeURIComponent(fileType)) + '&format=' + format, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * getCurationTagHistory
		 * Get getCurationTagHistory
		 * @param {string} pwId The pathway identifier
		 * @param {string} timestamp Only include history from after the given date
		 * @return {void} everything ok
		 */
		GetCurationTagHistoryGetByPwIdAndTimestampAndFormat(pwId: string, timestamp: string | null | undefined, format: CreatePathwayPostByGpmlAndAuthAndUsernameAndFormatFormat | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'getCurationTagHistory?pwId=' + (pwId == null ? '' : encodeURIComponent(pwId)) + '&timestamp=' + (timestamp == null ? '' : encodeURIComponent(timestamp)) + '&format=' + format, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
		 * Get getCurationTags
		 * @param {string} pwId The pathway identifier
		 * @return {void} everything ok
		 */
		GetCurationTagsGetByPwIdAndFormat(pwId: string, format: CreatePathwayPostByGpmlAndAuthAndUsernameAndFormatFormat | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'getCurationTags?pwId=' + (pwId == null ? '' : encodeURIComponent(pwId)) + '&format=' + format, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
		 * Get getCurationTagsByName
		 * @param {string} tagName The tag name
		 * @return {void} everything ok
		 */
		GetCurationTagsByNameGetByTagNameAndFormat(tagName: string, format: CreatePathwayPostByGpmlAndAuthAndUsernameAndFormatFormat | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'getCurationTagsByName?tagName=' + (tagName == null ? '' : encodeURIComponent(tagName)) + '&format=' + format, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * getOntologyTermsByPathway
		 * Get getOntologyTermsByPathway
		 * @param {string} pwId The pathway identifier
		 * @return {void} everything ok
		 */
		GetOntologyTermsByPathwayGetByPwIdAndFormat(pwId: string, format: CreatePathwayPostByGpmlAndAuthAndUsernameAndFormatFormat | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'getOntologyTermsByPathway?pwId=' + (pwId == null ? '' : encodeURIComponent(pwId)) + '&format=' + format, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * getPathway
		 * Get getPathway
		 * @param {string} pwId The pathway identifier
		 * @param {number} revision The revision number of the pathway (use 0 for most recent)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} everything ok
		 */
		GetPathwayGetByPwIdAndRevisionAndFormat(pwId: string, revision: number | null | undefined, format: CreatePathwayPostByGpmlAndAuthAndUsernameAndFormatFormat | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'getPathway?pwId=' + (pwId == null ? '' : encodeURIComponent(pwId)) + '&revision=' + revision + '&format=' + format, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * getPathwayAsDownload a pathway in the specified file format.
		 * Get getPathwayAs
		 * @param {string} fileType The file type to convert to, e.g.
		 * @param {string} pwId The pathway identifier
		 * @param {number} revision The revision number of the pathway (use 0 for most recent)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} everything ok
		 */
		GetPathwayAsGetByFileTypeAndPwIdAndRevisionAndFormat(fileType: string, pwId: string, revision: number | null | undefined, format: CreatePathwayPostByGpmlAndAuthAndUsernameAndFormatFormat | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'getPathwayAs?fileType=' + (fileType == null ? '' : encodeURIComponent(fileType)) + '&pwId=' + (pwId == null ? '' : encodeURIComponent(pwId)) + '&revision=' + revision + '&format=' + format, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * getPathwayHistoryGet the revision history of a pathway.
		 * Get getPathwayHistory
		 * @param {string} pwId The pathway identifier
		 * @param {string} timestamp Limit by time, only history items after the given
		 * @return {void} everything ok
		 */
		GetPathwayHistoryGetByPwIdAndTimestampAndFormat(pwId: string, timestamp: string, format: CreatePathwayPostByGpmlAndAuthAndUsernameAndFormatFormat | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'getPathwayHistory?pwId=' + (pwId == null ? '' : encodeURIComponent(pwId)) + '&timestamp=' + (timestamp == null ? '' : encodeURIComponent(timestamp)) + '&format=' + format, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * getPathwayInfoGet some general info about the pathway, such as the name, species, without downloading the GPML.
		 * Get getPathwayInfo
		 * @param {string} pwId The pathway identifier
		 * @return {void} everything ok
		 */
		GetPathwayInfoGetByPwIdAndFormat(pwId: string, format: CreatePathwayPostByGpmlAndAuthAndUsernameAndFormatFormat | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'getPathwayInfo?pwId=' + (pwId == null ? '' : encodeURIComponent(pwId)) + '&format=' + format, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * getPathwaysByOntologyTerm
		 * Get getPathwaysByOntologyTerm
		 * @param {string} term The Ontology term
		 * @return {void} everything ok
		 */
		GetPathwaysByOntologyTermGetByTermAndFormat(term: string, format: CreatePathwayPostByGpmlAndAuthAndUsernameAndFormatFormat | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'getPathwaysByOntologyTerm?term=' + (term == null ? '' : encodeURIComponent(term)) + '&format=' + format, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * getPathwaysByParentOntologyTerm
		 * Get getPathwaysByParentOntologyTerm
		 * @param {string} term The Ontology term
		 * @return {void} everything ok
		 */
		GetPathwaysByParentOntologyTermGetByTermAndFormat(term: string, format: CreatePathwayPostByGpmlAndAuthAndUsernameAndFormatFormat | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'getPathwaysByParentOntologyTerm?term=' + (term == null ? '' : encodeURIComponent(term)) + '&format=' + format, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * getRecentChangesGet the recently changed pathways.<br>Note: the recent changes table only retains items for a limited time (2 months), so there is no guarantee that you will get all changes when the timestamp points to a date that is more than 2 months in the past.
		 * Get getRecentChanges
		 * @param {string} timestamp Get the changes after this time
		 * @return {void} everything ok
		 */
		GetRecentChangesGetByTimestampAndFormat(timestamp: string, format: CreatePathwayPostByGpmlAndAuthAndUsernameAndFormatFormat | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'getRecentChanges?timestamp=' + (timestamp == null ? '' : encodeURIComponent(timestamp)) + '&format=' + format, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * getUserByOrcid
		 * Get getUserByOrcid
		 * @param {string} orcid string
		 * @return {void} everything ok
		 */
		GetUserByOrcidGetByOrcidAndFormat(orcid: string, format: CreatePathwayPostByGpmlAndAuthAndUsernameAndFormatFormat | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'getUserByOrcid?orcid=' + (orcid == null ? '' : encodeURIComponent(orcid)) + '&format=' + format, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * getXrefList
		 * Get getXrefList
		 * @param {string} pwId The pathway identifier.
		 * @param {string} code The database code to translate to (e.g. 'S' for UniProt).
		 * @return {void} everything ok
		 */
		GetXrefListGetByPwIdAndCodeAndFormat(pwId: string, code: string, format: CreatePathwayPostByGpmlAndAuthAndUsernameAndFormatFormat | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'getXrefList?pwId=' + (pwId == null ? '' : encodeURIComponent(pwId)) + '&code=' + (code == null ? '' : encodeURIComponent(code)) + '&format=' + format, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * listOrganisms
		 * Get listOrganisms
		 * @return {void} everything ok
		 */
		ListOrganismsGetByFormat(format: CreatePathwayPostByGpmlAndAuthAndUsernameAndFormatFormat | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'listOrganisms?format=' + format, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * listPathways
		 * Get listPathways
		 * @param {string} organism The organism to filter by (optional)
		 * @return {void} everything ok
		 */
		ListPathwaysGetByOrganismAndFormat(organism: string | null | undefined, format: CreatePathwayPostByGpmlAndAuthAndUsernameAndFormatFormat | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'listPathways?organism=' + (organism == null ? '' : encodeURIComponent(organism)) + '&format=' + format, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * loginStart a logged in session, using an existing WikiPathways account. This function will return an authentication code that can be used to excecute methods that need authentication (e.g. updatePathway).
		 * Get login
		 * @param {string} name The usernameset_include_path(get_include_path().PATH_SEPARATOR.realpath('../includes').PATH_SEPARATOR.realpath('../').PATH_SEPARATOR);
		 * @param {string} pass The password
		 * @return {void} everything ok
		 */
		LoginGetByNameAndPassAndFormat(name: string, pass: string, format: CreatePathwayPostByGpmlAndAuthAndUsernameAndFormatFormat | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'login?name=' + (name == null ? '' : encodeURIComponent(name)) + '&pass=' + (pass == null ? '' : encodeURIComponent(pass)) + '&format=' + format, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * removeCurationTagRemove a curation tag from a pathway.
		 * Get removeCurationTag
		 * @param {string} pwId The pathway identifier
		 * @param {string} tagName The name of the tag to apply
		 * @param {string} auth The authentication data
		 * @param {string} username The user name
		 * @return {void} everything ok
		 */
		RemoveCurationTagGetByPwIdAndTagNameAndAuthAndUsernameAndFormat(pwId: string, tagName: string, auth: string, username: string, format: CreatePathwayPostByGpmlAndAuthAndUsernameAndFormatFormat | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'removeCurationTag?pwId=' + (pwId == null ? '' : encodeURIComponent(pwId)) + '&tagName=' + (tagName == null ? '' : encodeURIComponent(tagName)) + '&auth=' + (auth == null ? '' : encodeURIComponent(auth)) + '&username=' + (username == null ? '' : encodeURIComponent(username)) + '&format=' + format, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * removeOntologyTag
		 * Get removeOntologyTag
		 * @param {string} pwId The pathway identifier
		 * @param {string} termId The ontology term identifier in the ontology
		 * @param {string} auth The authentication key
		 * @param {string} user The username
		 * @return {void} everything ok
		 */
		RemoveOntologyTagGetByPwIdAndTermIdAndAuthAndUserAndFormat(pwId: string, termId: string, auth: string, user: string, format: CreatePathwayPostByGpmlAndAuthAndUsernameAndFormatFormat | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'removeOntologyTag?pwId=' + (pwId == null ? '' : encodeURIComponent(pwId)) + '&termId=' + (termId == null ? '' : encodeURIComponent(termId)) + '&auth=' + (auth == null ? '' : encodeURIComponent(auth)) + '&user=' + (user == null ? '' : encodeURIComponent(user)) + '&format=' + format, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * saveCurationTag
		 * Get saveCurationTag
		 * @param {string} pwId The pathway identifier
		 * @param {string} tagName The name of the tag to apply
		 * @param {string} text string
		 * @param {number} revision The revision this tag applies to
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} auth The authentication key
		 * @param {string} username The user name
		 * @return {void} everything ok
		 */
		SaveCurationTagGetByPwIdAndTagNameAndTextAndRevisionAndAuthAndUsernameAndFormat(pwId: string, tagName: string, text: string, revision: number, auth: string, username: string, format: CreatePathwayPostByGpmlAndAuthAndUsernameAndFormatFormat | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'saveCurationTag?pwId=' + (pwId == null ? '' : encodeURIComponent(pwId)) + '&tagName=' + (tagName == null ? '' : encodeURIComponent(tagName)) + '&text=' + (text == null ? '' : encodeURIComponent(text)) + '&revision=' + revision + '&auth=' + (auth == null ? '' : encodeURIComponent(auth)) + '&username=' + (username == null ? '' : encodeURIComponent(username)) + '&format=' + format, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * saveOntologyTag
		 * Get saveOntologyTag
		 * @param {string} pwId The pathway identifier
		 * @param {string} term The ontology term to apply
		 * @param {string} termId The identifier of the term in the ontology
		 * @param {string} auth The authentication key
		 * @param {string} user The username
		 * @return {void} everything ok
		 */
		SaveOntologyTagGetByPwIdAndTermAndTermIdAndAuthAndUserAndFormat(pwId: string, term: string, termId: string, auth: string, user: string, format: CreatePathwayPostByGpmlAndAuthAndUsernameAndFormatFormat | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'saveOntologyTag?pwId=' + (pwId == null ? '' : encodeURIComponent(pwId)) + '&term=' + (term == null ? '' : encodeURIComponent(term)) + '&termId=' + (termId == null ? '' : encodeURIComponent(termId)) + '&auth=' + (auth == null ? '' : encodeURIComponent(auth)) + '&user=' + (user == null ? '' : encodeURIComponent(user)) + '&format=' + format, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * updatePathwayUpdate a pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.
		 * Get updatePathway
		 * @param {string} pwId The pathway identifier
		 * @param {string} description A description of the modifications
		 * @param {string} gpml The updated GPML code
		 * @param {number} revision The revision the GPML code is based on
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} auth The authentication key
		 * @param {string} username The username
		 * @return {void} everything ok
		 */
		UpdatePathwayGetByPwIdAndDescriptionAndGpmlAndRevisionAndAuthAndUsernameAndFormat(pwId: string, description: string, gpml: string, revision: number, auth: string, username: string, format: CreatePathwayPostByGpmlAndAuthAndUsernameAndFormatFormat | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'updatePathway?pwId=' + (pwId == null ? '' : encodeURIComponent(pwId)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&gpml=' + (gpml == null ? '' : encodeURIComponent(gpml)) + '&revision=' + revision + '&auth=' + (auth == null ? '' : encodeURIComponent(auth)) + '&username=' + (username == null ? '' : encodeURIComponent(username)) + '&format=' + format, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export enum CreatePathwayPostByGpmlAndAuthAndUsernameAndFormatFormat { json = 'json', xml = 'xml', html = 'html', dump = 'dump', jpg = 'jpg', pdf = 'pdf' }

}

