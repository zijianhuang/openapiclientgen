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
		 * Describes the documents and directories available within a specific 'aspect' (content group) of the BCLaws library
		 * Get content/{aspectId}
		 * @param {Content_aspectIdGetAspectId} aspectId The identifier of the 'aspect' (content group) to search
		 * @return {void} List documents and directories within the aspect.
		 */
		Content_aspectIdGet(aspectId: Content_aspectIdGetAspectId, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'content/' + aspectId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the metadata available for the specified index or directory from the BCLaws legislative respository
		 * Get content/{aspectId}/{civixDocumentId}
		 * @param {Content_aspectIdGetAspectId} aspectId The identifier of the 'aspect' (content group) to search
		 * @param {string} civixDocumentId The document identification code for an index or directory
		 * @return {void} List documents and directories within the aspect.
		 */
		Content_aspectId_civixDocumentIdGet(aspectId: Content_aspectIdGetAspectId, civixDocumentId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'content/' + aspectId + '/' + (civixDocumentId == null ? '' : encodeURIComponent(civixDocumentId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a specific document from the BCLaws legislative repository (HTML format)
		 * The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.
		 * Get document/id/{aspectId}/{civixIndexId}/{civixDocumentId}
		 * @param {Content_aspectIdGetAspectId} aspectId The identifier of the 'aspect' (content group) to search
		 * @param {string} civixIndexId Index identification code
		 * @param {string} civixDocumentId The document identification code for an index or directory
		 * @return {void} List documents and directories within the aspect.
		 */
		DocumentId_aspectId_civixIndexId_civixDocumentIdGet(aspectId: Content_aspectIdGetAspectId, civixIndexId: string, civixDocumentId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'document/id/' + aspectId + '/' + (civixIndexId == null ? '' : encodeURIComponent(civixIndexId)) + '/' + (civixDocumentId == null ? '' : encodeURIComponent(civixDocumentId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a specific document from the BCLaws legislative repository with search text highlighted (HTML format)
		 * The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.
		 * Get document/id/{aspectId}/{civixIndexId}/{civixDocumentId}/search/{searchString}
		 * @param {Content_aspectIdGetAspectId} aspectId The identifier of the 'aspect' (content group) to search
		 * @param {string} civixIndexId Index identification code
		 * @param {string} civixDocumentId The document identification code for an index or directory
		 * @param {string} searchString The text to search for within the document
		 * @return {void} List documents and directories within the aspect.
		 */
		DocumentId_aspectId_civixIndexId_civixDocumentIdSearch_searchStringGet(aspectId: Content_aspectIdGetAspectId, civixIndexId: string, civixDocumentId: string, searchString: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'document/id/' + aspectId + '/' + (civixIndexId == null ? '' : encodeURIComponent(civixIndexId)) + '/' + (civixDocumentId == null ? '' : encodeURIComponent(civixDocumentId)) + '/search/' + (searchString == null ? '' : encodeURIComponent(searchString)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a specific document from the BCLaws legislative repository (XML format)
		 * The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.
		 * Get document/id/{aspectId}/{civixIndexId}/{civixDocumentId}/xml
		 * @param {Content_aspectIdGetAspectId} aspectId The identifier of the 'aspect' (content group) to search
		 * @param {string} civixIndexId Index identification code
		 * @param {string} civixDocumentId The document identification code for an index or directory
		 * @return {void} List documents and directories within the aspect.
		 */
		DocumentId_aspectId_civixIndexId_civixDocumentIdXmlGet(aspectId: Content_aspectIdGetAspectId, civixIndexId: string, civixDocumentId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'document/id/' + aspectId + '/' + (civixIndexId == null ? '' : encodeURIComponent(civixIndexId)) + '/' + (civixDocumentId == null ? '' : encodeURIComponent(civixDocumentId)) + '/xml', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a specific document from the BCLaws legislative repository with search text highlighted (XML format)
		 * The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.
		 * Get document/id/{aspectId}/{civixIndexId}/{civixDocumentId}/xml/search/{searchString}
		 * @param {Content_aspectIdGetAspectId} aspectId The identifier of the 'aspect' (content group) to search
		 * @param {string} civixIndexId Index identification code
		 * @param {string} civixDocumentId The document identification code for an index or directory
		 * @param {string} searchString The text to search for within the document
		 * @return {void} List documents and directories within the aspect.
		 */
		DocumentId_aspectId_civixIndexId_civixDocumentIdXmlSearch_searchStringGet(aspectId: Content_aspectIdGetAspectId, civixIndexId: string, civixDocumentId: string, searchString: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'document/id/' + aspectId + '/' + (civixIndexId == null ? '' : encodeURIComponent(civixIndexId)) + '/' + (civixDocumentId == null ? '' : encodeURIComponent(civixDocumentId)) + '/xml/search/' + (searchString == null ? '' : encodeURIComponent(searchString)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * A listing of metadata available for the specified aspect and search term from the BCLaws legislative repository
		 * Get search/{aspectId}/fullsearch
		 * @param {Content_aspectIdGetAspectId} aspectId The identifier of the 'aspect' (content group) to search
		 * @param {string} q query term
		 * @param {string} s first hit (start index)
		 * @param {number} e last hit (end index)
		 * @param {number} nFrag number of fragment snippets to return (< 10)
		 * @param {number} lFrag length of fragment snippets (< 200)
		 * @return {void} List of metadata available for the specified aspect and search term
		 */
		Search_aspectIdFullsearchGetByQAndSAndEAndNFragAndLFrag(aspectId: Content_aspectIdGetAspectId, q: string, s: string, e: number, nFrag: number, lFrag: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'search/' + aspectId + '/fullsearch?q=' + (q == null ? '' : encodeURIComponent(q)) + '&s=' + (s == null ? '' : encodeURIComponent(s)) + '&e=' + e + '&nFrag=' + nFrag + '&lFrag=' + lFrag, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export enum Content_aspectIdGetAspectId { complete = 'complete', corpreg = 'corpreg', bcgaz1 = 'bcgaz1', bcgaz2 = 'bcgaz2', oic = 'oic', psl = 'psl', ecb = 'ecb', hscr = 'hscr', arch_oic = 'arch_oic' }

}

