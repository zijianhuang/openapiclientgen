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
		 * Create a dump
		 * Create a dump
		 * Post dumps
		 * @return {void} 
		 */
		CreateADump(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'dumps', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Health
		 * Health
		 * Get health
		 * @return {void} 
		 */
		Health(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'health', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get indexes
		 * Get indexes
		 * Get indexes
		 * @return {void} 
		 */
		GetIndexes(offset: string | null | undefined, limit: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'indexes?offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create index with primary key
		 * Create index with primary key
		 * Post indexes
		 * @return {void} 
		 */
		CreateIndexWithPrimaryKey(requestBody: CreateIndexWithPrimaryKeyPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'indexes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an index
		 * Delete an index
		 * Delete indexes/books
		 * @return {void} 
		 */
		DeleteAnIndex(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'indexes/books', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Show index
		 * Show index
		 * Get indexes/books
		 * @return {void} 
		 */
		ShowIndex(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'indexes/books', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update index
		 * Can only change the document identifier if it has not already been added before.
		 * Patch indexes/books
		 * @return {void} 
		 */
		UpdateIndex(requestBody: UpdateIndexPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'indexes/books', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete all documents
		 * Delete all documents
		 * Delete indexes/books/documents
		 * @return {void} 
		 */
		DeleteAllDocuments(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'indexes/books/documents', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get documents
		 * Get documents
		 * Get indexes/books/documents
		 * @return {void} 
		 */
		GetDocuments(limit: string | null | undefined, offset: string | null | undefined, fields: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'indexes/books/documents?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add or replace documents
		 * Add or replace documents
		 * Post indexes/books/documents
		 * @return {void} 
		 */
		AddOrReplaceDocuments(primaryKey: string | null | undefined, csvDelimiter: string | null | undefined, requestBody: Array<AddOrReplaceDocumentsPostBody>): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'indexes/books/documents?primaryKey=' + (primaryKey == null ? '' : encodeURIComponent(primaryKey)) + '&csvDelimiter=' + (csvDelimiter == null ? '' : encodeURIComponent(csvDelimiter)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add or update documents
		 * Add or update documents
		 * Put indexes/books/documents
		 * @return {void} 
		 */
		AddOrUpdateDocuments(primaryKey: string | null | undefined, csvDelimiter: string | null | undefined, requestBody: Array<AddOrUpdateDocumentsPutBody>): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'indexes/books/documents?primaryKey=' + (primaryKey == null ? '' : encodeURIComponent(primaryKey)) + '&csvDelimiter=' + (csvDelimiter == null ? '' : encodeURIComponent(csvDelimiter)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete one document
		 * Delete one document
		 * Delete indexes/books/documents/1
		 * @return {void} 
		 */
		DeleteOneDocument(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'indexes/books/documents/1', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get one document
		 * Get one document
		 * Get indexes/books/documents/2
		 * @return {void} 
		 */
		GetOneDocument(fields: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'indexes/books/documents/2?fields=' + (fields == null ? '' : encodeURIComponent(fields)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete documents
		 * Delete documents
		 * Post indexes/books/documents/delete-batch
		 * @return {void} 
		 */
		DeleteDocuments(requestBody: Array<number>): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'indexes/books/documents/delete-batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Search in index
		 * Search in index
		 * Get indexes/books/search
		 * @return {void} 
		 */
		SearchInIndex(q: string | null | undefined, offset: string | null | undefined, limit: string | null | undefined, attributesToRetrieve: string | null | undefined, attributesToCrop: string | null | undefined, attributesToHighlight: string | null | undefined, cropLength: string | null | undefined, cropMarker: string | null | undefined, filter: string | null | undefined, showMatchesPosition: string | null | undefined, facets: string | null | undefined, sort: string | null | undefined, highlightPreTag: string | null | undefined, highlightPostTag: string | null | undefined, matchingStrategy: string | null | undefined, page: string | null | undefined, hitsPerPage: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'indexes/books/search?q=' + (q == null ? '' : encodeURIComponent(q)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&attributesToRetrieve=' + (attributesToRetrieve == null ? '' : encodeURIComponent(attributesToRetrieve)) + '&attributesToCrop=' + (attributesToCrop == null ? '' : encodeURIComponent(attributesToCrop)) + '&attributesToHighlight=' + (attributesToHighlight == null ? '' : encodeURIComponent(attributesToHighlight)) + '&cropLength=' + (cropLength == null ? '' : encodeURIComponent(cropLength)) + '&cropMarker=' + (cropMarker == null ? '' : encodeURIComponent(cropMarker)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&showMatchesPosition=' + (showMatchesPosition == null ? '' : encodeURIComponent(showMatchesPosition)) + '&facets=' + (facets == null ? '' : encodeURIComponent(facets)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&highlightPreTag=' + (highlightPreTag == null ? '' : encodeURIComponent(highlightPreTag)) + '&highlightPostTag=' + (highlightPostTag == null ? '' : encodeURIComponent(highlightPostTag)) + '&matchingStrategy=' + (matchingStrategy == null ? '' : encodeURIComponent(matchingStrategy)) + '&page=' + (page == null ? '' : encodeURIComponent(page)) + '&hitsPerPage=' + (hitsPerPage == null ? '' : encodeURIComponent(hitsPerPage)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search in index
		 * Search in index
		 * Post indexes/books/search
		 * @return {void} 
		 */
		SearchInIndex1(requestBody: SearchInIndex1PostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'indexes/books/search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reset all settings
		 * Reset all settings
		 * Delete indexes/books/settings
		 * @return {void} 
		 */
		ResetAllSettings(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'indexes/books/settings', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all settings
		 * Get all settings
		 * Get indexes/books/settings
		 * @return {void} 
		 */
		GetAllSettings(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'indexes/books/settings', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update settings
		 * Update settings
		 * Patch indexes/books/settings
		 * @return {void} 
		 */
		UpdateSettings(requestBody: UpdateSettingsPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'indexes/books/settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reset displayed attributes
		 * Reset displayed attributes
		 * Delete indexes/books/settings/displayed-attributes
		 * @return {void} 
		 */
		ResetDisplayedAttributes(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'indexes/books/settings/displayed-attributes', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get displayed attributes
		 * Get displayed attributes
		 * Get indexes/books/settings/displayed-attributes
		 * @return {void} 
		 */
		GetDisplayedAttributes(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'indexes/books/settings/displayed-attributes', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update displayed attributes
		 * Update displayed attributes
		 * Put indexes/books/settings/displayed-attributes
		 * @return {void} 
		 */
		UpdateDisplayedAttributes(requestBody: Array<string>): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'indexes/books/settings/displayed-attributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reset distinct attribute
		 * Reset distinct attribute
		 * Delete indexes/books/settings/distinct-attribute
		 * @return {void} 
		 */
		ResetDistinctAttribute(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'indexes/books/settings/distinct-attribute', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get distinct attribute
		 * Get distinct attribute
		 * Get indexes/books/settings/distinct-attribute
		 * @return {void} 
		 */
		GetDistinctAttribute(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'indexes/books/settings/distinct-attribute', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Reset faceting
		 * Reset faceting
		 * Delete indexes/books/settings/faceting
		 * @return {void} 
		 */
		ResetFaceting(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'indexes/books/settings/faceting', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get faceting
		 * Get faceting
		 * Get indexes/books/settings/faceting
		 * @return {void} 
		 */
		GetFaceting(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'indexes/books/settings/faceting', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update faceting
		 * Update faceting
		 * Patch indexes/books/settings/faceting
		 * @return {void} 
		 */
		UpdateFaceting(requestBody: UpdateFacetingPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'indexes/books/settings/faceting', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reset filterable attributes
		 * Reset filterable attributes
		 * Delete indexes/books/settings/filterable-attributes
		 * @return {void} 
		 */
		ResetFilterableAttributes(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'indexes/books/settings/filterable-attributes', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get filterable attributes
		 * Get filterable attributes
		 * Get indexes/books/settings/filterable-attributes
		 * @return {void} 
		 */
		GetFilterableAttributes(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'indexes/books/settings/filterable-attributes', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update filterable attributes
		 * Update filterable attributes
		 * Put indexes/books/settings/filterable-attributes
		 * @return {void} 
		 */
		UpdateFilterableAttributes(requestBody: Array<string>): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'indexes/books/settings/filterable-attributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reset pagination
		 * Reset pagination
		 * Delete indexes/books/settings/pagination
		 * @return {void} 
		 */
		ResetPagination(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'indexes/books/settings/pagination', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get pagination
		 * Get pagination
		 * Get indexes/books/settings/pagination
		 * @return {void} 
		 */
		GetPagination(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'indexes/books/settings/pagination', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update pagination
		 * Update pagination
		 * Patch indexes/books/settings/pagination
		 * @return {void} 
		 */
		UpdatePagination(requestBody: UpdatePaginationPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'indexes/books/settings/pagination', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reset ranking rules
		 * Reset ranking rules
		 * Delete indexes/books/settings/ranking-rules
		 * @return {void} 
		 */
		ResetRankingRules(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'indexes/books/settings/ranking-rules', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get ranking rules
		 * Get ranking rules
		 * Get indexes/books/settings/ranking-rules
		 * @return {void} 
		 */
		GetRankingRules(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'indexes/books/settings/ranking-rules', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update ranking rules
		 * Update ranking rules
		 * Put indexes/books/settings/ranking-rules
		 * @return {void} 
		 */
		UpdateRankingRules(requestBody: Array<string>): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'indexes/books/settings/ranking-rules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reset searchable attributes
		 * Reset searchable attributes
		 * Delete indexes/books/settings/searchable-attributes
		 * @return {void} 
		 */
		ResetSearchableAttributes(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'indexes/books/settings/searchable-attributes', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get searchable attributes
		 * Get searchable attributes
		 * Get indexes/books/settings/searchable-attributes
		 * @return {void} 
		 */
		GetSearchableAttributes(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'indexes/books/settings/searchable-attributes', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update searchable attributes
		 * Update searchable attributes
		 * Put indexes/books/settings/searchable-attributes
		 * @return {void} 
		 */
		UpdateSearchableAttributes(requestBody: Array<string>): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'indexes/books/settings/searchable-attributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reset sortable attributes
		 * Reset sortable attributes
		 * Delete indexes/books/settings/sortable-attributes
		 * @return {void} 
		 */
		ResetSortableAttributes(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'indexes/books/settings/sortable-attributes', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get sortable attributes
		 * Get sortable attributes
		 * Get indexes/books/settings/sortable-attributes
		 * @return {void} 
		 */
		GetSortableAttributes(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'indexes/books/settings/sortable-attributes', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update sortable attributes
		 * Update sortable attributes
		 * Put indexes/books/settings/sortable-attributes
		 * @return {void} 
		 */
		UpdateSortableAttributes(requestBody: Array<string>): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'indexes/books/settings/sortable-attributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reset stop-words
		 * Reset stop-words
		 * Delete indexes/books/settings/stop-words
		 * @return {void} 
		 */
		ResetStopWords(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'indexes/books/settings/stop-words', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get stop-words
		 * Get stop-words
		 * Get indexes/books/settings/stop-words
		 * @return {void} 
		 */
		GetStopWords(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'indexes/books/settings/stop-words', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update stop-words
		 * Update stop-words
		 * Put indexes/books/settings/stop-words
		 * @return {void} 
		 */
		UpdateStopWords(requestBody: Array<string>): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'indexes/books/settings/stop-words', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reset synonyms
		 * Reset synonyms
		 * Delete indexes/books/settings/synonyms
		 * @return {void} 
		 */
		ResetSynonyms(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'indexes/books/settings/synonyms', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get synonyms
		 * Get synonyms
		 * Get indexes/books/settings/synonyms
		 * @return {void} 
		 */
		GetSynonyms(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'indexes/books/settings/synonyms', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update synonyms
		 * Update synonyms
		 * Put indexes/books/settings/synonyms
		 * @return {void} 
		 */
		UpdateSynonyms(requestBody: UpdateSynonymsPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'indexes/books/settings/synonyms', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reset typo-tolerance
		 * Reset typo-tolerance
		 * Delete indexes/books/settings/typo-tolerance
		 * @return {void} 
		 */
		ResetTypoTolerance(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'indexes/books/settings/typo-tolerance', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get typo-tolerance
		 * Get typo-tolerance
		 * Get indexes/books/settings/typo-tolerance
		 * @return {void} 
		 */
		GetTypoTolerance(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'indexes/books/settings/typo-tolerance', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update typo-tolerance
		 * Update typo-tolerance
		 * Patch indexes/books/settings/typo-tolerance
		 * @return {void} 
		 */
		UpdateTypoTolerance(requestBody: UpdateTypoTolerancePatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'indexes/books/settings/typo-tolerance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Stats of an index
		 * Stats of an index
		 * Get indexes/books/stats
		 * @return {void} 
		 */
		StatsOfAnIndex(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'indexes/books/stats', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Swap indexes
		 * Swap indexes
		 * Post indexes/swap-indexes
		 * @return {void} 
		 */
		SwapIndexes(requestBody: Array<SwapIndexesPostBody>): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'indexes/swap-indexes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get keys
		 * Get keys
		 * Get keys
		 * @return {void} 
		 */
		GetKeys(offset: string | null | undefined, limit: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'keys?offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a key
		 * Create a key
		 * Post keys
		 * @return {void} 
		 */
		CreateAKey(requestBody: CreateAKeyPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'keys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get one key
		 * Get one key
		 * Get keys/L8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705
		 * @return {void} 
		 */
		GetOneKey(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'keys/L8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a key
		 * Delete a key
		 * Delete keys/kN2aK9EO8a7b627e425717d9196c8081552ca004e513545ed178f8a56981dbd3080d4a5b
		 * @return {void} 
		 */
		DeleteAKey(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'keys/kN2aK9EO8a7b627e425717d9196c8081552ca004e513545ed178f8a56981dbd3080d4a5b', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a key
		 * Update a key
		 * Patch keys/wYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2dd
		 * @return {void} 
		 */
		UpdateAKey(requestBody: UpdateAKeyPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'keys/wYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2dd', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Search one or more indexes
		 * Search one or more indexes
		 * Post multi-search
		 * @return {void} 
		 */
		SearchOneOrMoreIndexes(requestBody: SearchOneOrMoreIndexesPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'multi-search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Global stats
		 * Global stats
		 * Get stats
		 * @return {void} 
		 */
		GlobalStats(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'stats', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete tasks
		 * Delete tasks
		 * Delete tasks
		 * @return {void} 
		 */
		DeleteTasks(uids: string | null | undefined, indexUids: string | null | undefined, types: string | null | undefined, statuses: string | null | undefined, beforeEnqueuedAt: string | null | undefined, afterEnqueuedAt: string | null | undefined, beforeStartedAt: string | null | undefined, afterStartedAt: string | null | undefined, beforeFinishedAt: string | null | undefined, afterFinishedAt: string | null | undefined, canceledBy: string | null | undefined, limit: string | null | undefined, from: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tasks?uids=' + (uids == null ? '' : encodeURIComponent(uids)) + '&indexUids=' + (indexUids == null ? '' : encodeURIComponent(indexUids)) + '&types=' + (types == null ? '' : encodeURIComponent(types)) + '&statuses=' + (statuses == null ? '' : encodeURIComponent(statuses)) + '&beforeEnqueuedAt=' + (beforeEnqueuedAt == null ? '' : encodeURIComponent(beforeEnqueuedAt)) + '&afterEnqueuedAt=' + (afterEnqueuedAt == null ? '' : encodeURIComponent(afterEnqueuedAt)) + '&beforeStartedAt=' + (beforeStartedAt == null ? '' : encodeURIComponent(beforeStartedAt)) + '&afterStartedAt=' + (afterStartedAt == null ? '' : encodeURIComponent(afterStartedAt)) + '&beforeFinishedAt=' + (beforeFinishedAt == null ? '' : encodeURIComponent(beforeFinishedAt)) + '&afterFinishedAt=' + (afterFinishedAt == null ? '' : encodeURIComponent(afterFinishedAt)) + '&canceledBy=' + (canceledBy == null ? '' : encodeURIComponent(canceledBy)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&from=' + (from == null ? '' : encodeURIComponent(from)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all tasks
		 * Get all tasks
		 * Get tasks
		 * @return {void} 
		 */
		GetAllTasks(uids: string | null | undefined, indexUids: string | null | undefined, types: string | null | undefined, statuses: string | null | undefined, beforeEnqueuedAt: string | null | undefined, afterEnqueuedAt: string | null | undefined, beforeStartedAt: string | null | undefined, afterStartedAt: string | null | undefined, beforeFinishedAt: string | null | undefined, afterFinishedAt: string | null | undefined, canceledBy: string | null | undefined, limit: string | null | undefined, from: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tasks?uids=' + (uids == null ? '' : encodeURIComponent(uids)) + '&indexUids=' + (indexUids == null ? '' : encodeURIComponent(indexUids)) + '&types=' + (types == null ? '' : encodeURIComponent(types)) + '&statuses=' + (statuses == null ? '' : encodeURIComponent(statuses)) + '&beforeEnqueuedAt=' + (beforeEnqueuedAt == null ? '' : encodeURIComponent(beforeEnqueuedAt)) + '&afterEnqueuedAt=' + (afterEnqueuedAt == null ? '' : encodeURIComponent(afterEnqueuedAt)) + '&beforeStartedAt=' + (beforeStartedAt == null ? '' : encodeURIComponent(beforeStartedAt)) + '&afterStartedAt=' + (afterStartedAt == null ? '' : encodeURIComponent(afterStartedAt)) + '&beforeFinishedAt=' + (beforeFinishedAt == null ? '' : encodeURIComponent(beforeFinishedAt)) + '&afterFinishedAt=' + (afterFinishedAt == null ? '' : encodeURIComponent(afterFinishedAt)) + '&canceledBy=' + (canceledBy == null ? '' : encodeURIComponent(canceledBy)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&from=' + (from == null ? '' : encodeURIComponent(from)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get one task
		 * Get one task
		 * Get tasks/0
		 * @return {void} 
		 */
		GetOneTask(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tasks/0', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancel tasks
		 * Cancel tasks
		 * Post tasks/cancel
		 * @return {void} 
		 */
		CancelTasks(uids: string | null | undefined, indexUids: string | null | undefined, types: string | null | undefined, statuses: string | null | undefined, beforeEnqueuedAt: string | null | undefined, afterEnqueuedAt: string | null | undefined, beforeStartedAt: string | null | undefined, afterStartedAt: string | null | undefined, beforeFinishedAt: string | null | undefined, afterFinishedAt: string | null | undefined, canceledBy: string | null | undefined, limit: string | null | undefined, from: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tasks/cancel?uids=' + (uids == null ? '' : encodeURIComponent(uids)) + '&indexUids=' + (indexUids == null ? '' : encodeURIComponent(indexUids)) + '&types=' + (types == null ? '' : encodeURIComponent(types)) + '&statuses=' + (statuses == null ? '' : encodeURIComponent(statuses)) + '&beforeEnqueuedAt=' + (beforeEnqueuedAt == null ? '' : encodeURIComponent(beforeEnqueuedAt)) + '&afterEnqueuedAt=' + (afterEnqueuedAt == null ? '' : encodeURIComponent(afterEnqueuedAt)) + '&beforeStartedAt=' + (beforeStartedAt == null ? '' : encodeURIComponent(beforeStartedAt)) + '&afterStartedAt=' + (afterStartedAt == null ? '' : encodeURIComponent(afterStartedAt)) + '&beforeFinishedAt=' + (beforeFinishedAt == null ? '' : encodeURIComponent(beforeFinishedAt)) + '&afterFinishedAt=' + (afterFinishedAt == null ? '' : encodeURIComponent(afterFinishedAt)) + '&canceledBy=' + (canceledBy == null ? '' : encodeURIComponent(canceledBy)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&from=' + (from == null ? '' : encodeURIComponent(from)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Version
		 * Version
		 * Get version
		 * @return {void} 
		 */
		Version(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'version', { observe: 'response', responseType: 'text' });
		}
	}

	export interface CreateIndexWithPrimaryKeyPostBody {
		primaryKey?: string | null;
		uid?: string | null;
	}
	export interface CreateIndexWithPrimaryKeyPostBodyFormProperties {
		primaryKey: FormControl<string | null | undefined>,
		uid: FormControl<string | null | undefined>,
	}
	export function CreateCreateIndexWithPrimaryKeyPostBodyFormGroup() {
		return new FormGroup<CreateIndexWithPrimaryKeyPostBodyFormProperties>({
			primaryKey: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateIndexPatchBody {
		primaryKey?: string | null;
	}
	export interface UpdateIndexPatchBodyFormProperties {
		primaryKey: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIndexPatchBodyFormGroup() {
		return new FormGroup<UpdateIndexPatchBodyFormProperties>({
			primaryKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddOrReplaceDocumentsPostBody {
		author?: string | null;
		genre?: string | null;
		id?: number | null;
		price?: number | null;
		title?: string | null;
	}
	export interface AddOrReplaceDocumentsPostBodyFormProperties {
		author: FormControl<string | null | undefined>,
		genre: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		price: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateAddOrReplaceDocumentsPostBodyFormGroup() {
		return new FormGroup<AddOrReplaceDocumentsPostBodyFormProperties>({
			author: new FormControl<string | null | undefined>(undefined),
			genre: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddOrUpdateDocumentsPutBody {
		author?: string | null;
		date?: string | null;
		id?: number | null;
	}
	export interface AddOrUpdateDocumentsPutBodyFormProperties {
		author: FormControl<string | null | undefined>,
		date: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
	}
	export function CreateAddOrUpdateDocumentsPutBodyFormGroup() {
		return new FormGroup<AddOrUpdateDocumentsPutBodyFormProperties>({
			author: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SearchInIndex1PostBody {
		attributesToHighlight?: Array<string>;
		q?: string | null;
	}
	export interface SearchInIndex1PostBodyFormProperties {
		q: FormControl<string | null | undefined>,
	}
	export function CreateSearchInIndex1PostBodyFormGroup() {
		return new FormGroup<SearchInIndex1PostBodyFormProperties>({
			q: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSettingsPatchBody {
		displayedAttributes?: Array<string>;
		filterableAttributes?: Array<string>;
		searchableAttributes?: Array<string>;
		sortableAttributes?: Array<string>;
		stopWords?: Array<string>;
	}
	export interface UpdateSettingsPatchBodyFormProperties {
	}
	export function CreateUpdateSettingsPatchBodyFormGroup() {
		return new FormGroup<UpdateSettingsPatchBodyFormProperties>({
		});

	}

	export interface UpdateFacetingPatchBody {
		maxValuesPerFacet?: number | null;
	}
	export interface UpdateFacetingPatchBodyFormProperties {
		maxValuesPerFacet: FormControl<number | null | undefined>,
	}
	export function CreateUpdateFacetingPatchBodyFormGroup() {
		return new FormGroup<UpdateFacetingPatchBodyFormProperties>({
			maxValuesPerFacet: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdatePaginationPatchBody {
		maxTotalHits?: number | null;
	}
	export interface UpdatePaginationPatchBodyFormProperties {
		maxTotalHits: FormControl<number | null | undefined>,
	}
	export function CreateUpdatePaginationPatchBodyFormGroup() {
		return new FormGroup<UpdatePaginationPatchBodyFormProperties>({
			maxTotalHits: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateSynonymsPutBody {
		'harry potter'?: Array<string>;
		hp?: Array<string>;
	}
	export interface UpdateSynonymsPutBodyFormProperties {
	}
	export function CreateUpdateSynonymsPutBodyFormGroup() {
		return new FormGroup<UpdateSynonymsPutBodyFormProperties>({
		});

	}

	export interface UpdateTypoTolerancePatchBody {
		disableOnAttributes?: Array<string>;
		disableOnWords?: Array<string>;
		minWordSizeForTypos?: UpdateTypoTolerancePatchBodyMinWordSizeForTypos;
	}
	export interface UpdateTypoTolerancePatchBodyFormProperties {
	}
	export function CreateUpdateTypoTolerancePatchBodyFormGroup() {
		return new FormGroup<UpdateTypoTolerancePatchBodyFormProperties>({
		});

	}

	export interface UpdateTypoTolerancePatchBodyMinWordSizeForTypos {
		oneTypo?: number | null;
		twoTypos?: number | null;
	}
	export interface UpdateTypoTolerancePatchBodyMinWordSizeForTyposFormProperties {
		oneTypo: FormControl<number | null | undefined>,
		twoTypos: FormControl<number | null | undefined>,
	}
	export function CreateUpdateTypoTolerancePatchBodyMinWordSizeForTyposFormGroup() {
		return new FormGroup<UpdateTypoTolerancePatchBodyMinWordSizeForTyposFormProperties>({
			oneTypo: new FormControl<number | null | undefined>(undefined),
			twoTypos: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SwapIndexesPostBody {
		indexes?: Array<string>;
	}
	export interface SwapIndexesPostBodyFormProperties {
	}
	export function CreateSwapIndexesPostBodyFormGroup() {
		return new FormGroup<SwapIndexesPostBodyFormProperties>({
		});

	}

	export interface CreateAKeyPostBody {
		actions?: Array<string>;
		description?: string | null;
		expiresAt?: any;
		indexes?: Array<string>;
		name?: string | null;
	}
	export interface CreateAKeyPostBodyFormProperties {
		description: FormControl<string | null | undefined>,
		expiresAt: FormControl<any | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateAKeyPostBodyFormGroup() {
		return new FormGroup<CreateAKeyPostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expiresAt: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAKeyPatchBody {
		description?: string | null;
	}
	export interface UpdateAKeyPatchBodyFormProperties {
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAKeyPatchBodyFormGroup() {
		return new FormGroup<UpdateAKeyPatchBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchOneOrMoreIndexesPostBody {
		SearchOneOrMoreIndexesPostBodyQueries?: Array<SearchOneOrMoreIndexesPostBodyQueries>;
	}
	export interface SearchOneOrMoreIndexesPostBodyFormProperties {
	}
	export function CreateSearchOneOrMoreIndexesPostBodyFormGroup() {
		return new FormGroup<SearchOneOrMoreIndexesPostBodyFormProperties>({
		});

	}

	export interface SearchOneOrMoreIndexesPostBodyQueries {
		attributesToHighlight?: Array<string>;
		indexUid?: string | null;
		q?: string | null;
	}
	export interface SearchOneOrMoreIndexesPostBodyQueriesFormProperties {
		indexUid: FormControl<string | null | undefined>,
		q: FormControl<string | null | undefined>,
	}
	export function CreateSearchOneOrMoreIndexesPostBodyQueriesFormGroup() {
		return new FormGroup<SearchOneOrMoreIndexesPostBodyQueriesFormProperties>({
			indexUid: new FormControl<string | null | undefined>(undefined),
			q: new FormControl<string | null | undefined>(undefined),
		});

	}

}

