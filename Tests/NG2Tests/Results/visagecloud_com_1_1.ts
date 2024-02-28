import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface RestResponse {
		message?: string | null;
		payload?: string | null;
		status?: string | null;
	}
	export interface RestResponseFormProperties {
		message: FormControl<string | null | undefined>,
		payload: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateRestResponseFormGroup() {
		return new FormGroup<RestResponseFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			payload: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StreamingResponseBody {
	}
	export interface StreamingResponseBodyFormProperties {
	}
	export function CreateStreamingResponseBodyFormGroup() {
		return new FormGroup<StreamingResponseBodyFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get account information by accessKey and secretKey
		 * Get rest/v1.1/account/account
		 * @param {string} accessKey accessKey
		 * @param {string} secretKey secretKey
		 * @return {void} OK
		 */
		GetAccountByAccessKeyUsingGET(accessKey: string, secretKey: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'rest/v1.1/account/account?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get billing information by accessKey and secretKey
		 * Get rest/v1.1/account/billing
		 * @param {string} accessKey accessKey
		 * @param {string} secretKey secretKey
		 * @param {Date} startDateTime startDateTime
		 * @param {Date} endDateTime endDateTime
		 * @param {string} dateTemplate dateTemplate
		 * @return {void} OK
		 */
		GetBillingPerAccountUsingGET(accessKey: string, secretKey: string, startDateTime: Date | null | undefined, endDateTime: Date | null | undefined, dateTemplate: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'rest/v1.1/account/billing?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&startDateTime=' + startDateTime?.toISOString() + '&endDateTime=' + endDateTime?.toISOString() + '&dateTemplate=' + (dateTemplate == null ? '' : encodeURIComponent(dateTemplate)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Change password for an account using old password
		 * Post rest/v1.1/account/changePassword
		 * @param {string} email email
		 * @param {string} oldPassword oldPassword
		 * @param {string} newPassword newPassword
		 * @return {void} OK
		 */
		ChangePasswordUsingPOST(email: string, oldPassword: string, newPassword: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'rest/v1.1/account/changePassword?email=' + (email == null ? '' : encodeURIComponent(email)) + '&oldPassword=' + (oldPassword == null ? '' : encodeURIComponent(oldPassword)) + '&newPassword=' + (newPassword == null ? '' : encodeURIComponent(newPassword)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get account information including accessKey and secretKey by email and password
		 * Post rest/v1.1/account/login
		 * @param {string} email email
		 * @param {string} password password
		 * @return {void} OK
		 */
		LoginWithEmailUsingPOST(email: string, password: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'rest/v1.1/account/login?email=' + (email == null ? '' : encodeURIComponent(email)) + '&password=' + (password == null ? '' : encodeURIComponent(password)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Compare several faces identified by faceHash, without depending on mapping faces to profiles
		 * Get rest/v1.1/analysis/compare
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey or readOnlyKey provided by VisageCloud
		 * @param {Array<string>} faceHashes The IDs of the faces which you want compared, comma-separated
		 * @param {boolean} showDetails Show details
		 * @return {RestResponse} OK
		 */
		CompareFacesUsingGET(accessKey: string, secretKey: string, faceHashes: Array<string>, showDetails: boolean | null | undefined): Observable<RestResponse> {
			return this.http.get<RestResponse>(this.baseUri + 'rest/v1.1/analysis/compare?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&' + faceHashes.map(z => `faceHashes=${encodeURIComponent(z)}`).join('&') + '&showDetails=' + showDetails, {});
		}

		/**
		 * Retrieve the last *count* operations per current account
		 * Get rest/v1.1/analysis/listLatest
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey or readOnlyKey provided by VisageCloud
		 * @param {number} count How many records to retrieve at a time
		 * @return {RestResponse} OK
		 */
		RetriveLatestUsingGET(accessKey: string, secretKey: string, count: number | null | undefined): Observable<RestResponse> {
			return this.http.get<RestResponse>(this.baseUri + 'rest/v1.1/analysis/listLatest?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&count=' + count, {});
		}

		/**
		 * Retrieve a complete analysis object including both detection and recognition information
		 * Get rest/v1.1/analysis/retrieve
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey or readOnlyKey provided by VisageCloud
		 * @param {string} analysisId The ID of the analysis for which the data will be retrieved
		 * @return {RestResponse} OK
		 */
		RetrieveAnalysisUsingGET(accessKey: string, secretKey: string, analysisId: string): Observable<RestResponse> {
			return this.http.get<RestResponse>(this.baseUri + 'rest/v1.1/analysis/retrieve?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&analysisId=' + (analysisId == null ? '' : encodeURIComponent(analysisId)), {});
		}

		/**
		 * Count individuals in streams or collections
		 * Post rest/v1.1/analytics/counting
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey or readOnlyKey provided by VisageCloud
		 * @param {Array<string>} collectionIds Collection ids
		 * @param {Array<string>} streamIds Stream Ids
		 * @param {Date} startDateTime startDateTime
		 * @param {Date} endDateTime endDateTime
		 * @param {string} visitDuration visitDuration
		 * @param {number} maxIterations maxIterations
		 * @param {number} maxBatchIterations maxBatchIterations
		 * @param {number} minNeighborsMergedPerIteration minNeighborsMergedPerIteration
		 * @param {number} mergingStep mergingStep
		 * @param {boolean} shuffling shuffling
		 * @return {RestResponse} OK
		 */
		CounterUsingPOST(accessKey: string, secretKey: string, collectionIds: Array<string> | null | undefined, streamIds: Array<string> | null | undefined, startDateTime: Date | null | undefined, endDateTime: Date | null | undefined, visitDuration: string | null | undefined, maxIterations: number | null | undefined, maxBatchIterations: number | null | undefined, minNeighborsMergedPerIteration: number | null | undefined, mergingStep: number | null | undefined, shuffling: boolean | null | undefined): Observable<RestResponse> {
			return this.http.post<RestResponse>(this.baseUri + 'rest/v1.1/analytics/counting?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&' + collectionIds?.map(z => `collectionIds=${encodeURIComponent(z)}`).join('&') + '&' + streamIds?.map(z => `streamIds=${encodeURIComponent(z)}`).join('&') + '&startDateTime=' + startDateTime?.toISOString() + '&endDateTime=' + endDateTime?.toISOString() + '&visitDuration=' + visitDuration + '&maxIterations=' + maxIterations + '&maxBatchIterations=' + maxBatchIterations + '&minNeighborsMergedPerIteration=' + minNeighborsMergedPerIteration + '&mergingStep=' + mergingStep + '&shuffling=' + shuffling, null, {});
		}

		/**
		 * Show audience (based on number of occurrences of each person) breakdown per declared attribute (age, gender).
		 * Post rest/v1.1/analytics/presence/timeseries
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey or readOnlyKey provided by VisageCloud
		 * @param {Array<string>} streamIds Stream Ids
		 * @param {Date} startDateTime startDateTime
		 * @param {Date} endDateTime endDateTime
		 * @param {string} step step
		 * @param {Array<string>} attributes attributes
		 * @return {RestResponse} OK
		 */
		PresenceTimeseriesUsingPOST(accessKey: string, secretKey: string, streamIds: Array<string> | null | undefined, startDateTime: Date | null | undefined, endDateTime: Date | null | undefined, step: string | null | undefined, attributes: Array<string>): Observable<RestResponse> {
			return this.http.post<RestResponse>(this.baseUri + 'rest/v1.1/analytics/presence/timeseries?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&' + streamIds?.map(z => `streamIds=${encodeURIComponent(z)}`).join('&') + '&startDateTime=' + startDateTime?.toISOString() + '&endDateTime=' + endDateTime?.toISOString() + '&step=' + step + '&' + attributes.map(z => `attributes=${encodeURIComponent(z)}`).join('&'), null, {});
		}

		/**
		 * Show presence (based on number of occurences of each face) breakdown per declared attribute (age, gender)
		 * Post rest/v1.1/analytics/presence/total
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey or readOnlyKey provided by VisageCloud
		 * @param {Array<string>} streamIds Stream Ids
		 * @param {Date} startDateTime startDateTime
		 * @param {Date} endDateTime endDateTime
		 * @param {Array<string>} attributes attributes
		 * @return {RestResponse} OK
		 */
		PresenceTotalUsingPOST(accessKey: string, secretKey: string, streamIds: Array<string>, startDateTime: Date | null | undefined, endDateTime: Date | null | undefined, attributes: Array<string>): Observable<RestResponse> {
			return this.http.post<RestResponse>(this.baseUri + 'rest/v1.1/analytics/presence/total?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&' + streamIds.map(z => `streamIds=${encodeURIComponent(z)}`).join('&') + '&startDateTime=' + startDateTime?.toISOString() + '&endDateTime=' + endDateTime?.toISOString() + '&' + attributes.map(z => `attributes=${encodeURIComponent(z)}`).join('&'), null, {});
		}

		/**
		 * Get classifier full
		 * Get rest/v1.1/classifier/svm
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey or readOnlyKey provided by VisageCloud
		 * @param {string} id The id of the classifier that you want the status for
		 * @return {RestResponse} OK
		 */
		GetClassiferFullUsingGET(accessKey: string, secretKey: string, id: string): Observable<RestResponse> {
			return this.http.get<RestResponse>(this.baseUri + 'rest/v1.1/classifier/svm?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&id=' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Create new SVM classifier with given name
		 * Post rest/v1.1/classifier/svm
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey or readOnlyKey provided by VisageCloud
		 * @param {string} name The name of the SVM classifier that will be created
		 * @param {Array<string>} collectionIds Collection ids
		 * @param {string} preprocessor Preprocessor
		 * @param {string} classificationAttributeName Classification attribute name
		 * @param {boolean} considerViewPoints Consider view point
		 * @param {number} seed Seed for divididing training and evaluation sets
		 * @param {number} trainingRatio Training ratio
		 * @param {number} probabilityParameter Probability parameter
		 * @param {number} gammaParameter Gamma parameter
		 * @param {number} nuParameter Nu parameter
		 * @param {number} cParameter c parameter
		 * @param {number} svmTypeParameter SVM type parameter
		 * @param {number} kernelTypeParameter Kernel type parameter
		 * @param {number} cacheSizeParameter Cache size parameter
		 * @param {number} epsParameter Eps parameter
		 * @return {RestResponse} OK
		 */
		AddSVMClassifierUsingPOST(accessKey: string, secretKey: string, name: string, collectionIds: Array<string>, preprocessor: string | null | undefined, classificationAttributeName: string, considerViewPoints: boolean | null | undefined, seed: number | null | undefined, trainingRatio: number | null | undefined, probabilityParameter: number | null | undefined, gammaParameter: number | null | undefined, nuParameter: number | null | undefined, cParameter: number | null | undefined, svmTypeParameter: number | null | undefined, kernelTypeParameter: number | null | undefined, cacheSizeParameter: number | null | undefined, epsParameter: number | null | undefined): Observable<RestResponse> {
			return this.http.post<RestResponse>(this.baseUri + 'rest/v1.1/classifier/svm?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&' + collectionIds.map(z => `collectionIds=${encodeURIComponent(z)}`).join('&') + '&preprocessor=' + (preprocessor == null ? '' : encodeURIComponent(preprocessor)) + '&classificationAttributeName=' + (classificationAttributeName == null ? '' : encodeURIComponent(classificationAttributeName)) + '&considerViewPoints=' + considerViewPoints + '&seed=' + seed + '&trainingRatio=' + trainingRatio + '&probabilityParameter=' + probabilityParameter + '&gammaParameter=' + gammaParameter + '&nuParameter=' + nuParameter + '&cParameter=' + cParameter + '&svmTypeParameter=' + svmTypeParameter + '&kernelTypeParameter=' + kernelTypeParameter + '&cacheSizeParameter=' + cacheSizeParameter + '&epsParameter=' + epsParameter, null, {});
		}

		/**
		 * Delete existing classifier
		 * Delete rest/v1.1/classifier/svm
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey or readOnlyKey provided by VisageCloud
		 * @param {string} id The id of the classifier that will be removed
		 * @return {RestResponse} OK
		 */
		RemoveClassiferUsingDELETE(accessKey: string, secretKey: string, id: string): Observable<RestResponse> {
			return this.http.delete<RestResponse>(this.baseUri + 'rest/v1.1/classifier/svm?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&id=' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Get classifer status
		 * Get rest/v1.1/classifier/svm/status
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey or readOnlyKey provided by VisageCloud
		 * @param {string} id The id of the classifier that you want the status for
		 * @return {RestResponse} OK
		 */
		GetClassiferStatusUsingGET(accessKey: string, secretKey: string, id: string): Observable<RestResponse> {
			return this.http.get<RestResponse>(this.baseUri + 'rest/v1.1/classifier/svm/status?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&id=' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieve all collections
		 * Get rest/v1.1/collection/
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey or readOnlyKey provided by VisageCloud
		 * @return {RestResponse} OK
		 */
		GetAllCollectionsUsingGET(accessKey: string, secretKey: string): Observable<RestResponse> {
			return this.http.get<RestResponse>(this.baseUri + 'rest/v1.1/collection/?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)), {});
		}

		/**
		 * Retrieve all collections
		 * Get rest/v1.1/collection/all
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey or readOnlyKey provided by VisageCloud
		 * @return {RestResponse} OK
		 */
		GetAllCollections2UsingGET(accessKey: string, secretKey: string): Observable<RestResponse> {
			return this.http.get<RestResponse>(this.baseUri + 'rest/v1.1/collection/all?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)), {});
		}

		/**
		 * Retrieve existing collection content
		 * Get rest/v1.1/collection/collection
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey or readOnlyKey provided by VisageCloud
		 * @param {string} collectionId The id of the collection for which the data will be retrieved
		 * @return {RestResponse} OK
		 */
		GetCollection2UsingGET(accessKey: string, secretKey: string, collectionId: string): Observable<RestResponse> {
			return this.http.get<RestResponse>(this.baseUri + 'rest/v1.1/collection/collection?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&collectionId=' + (collectionId == null ? '' : encodeURIComponent(collectionId)), {});
		}

		/**
		 * Create new empty collection with given name
		 * Post rest/v1.1/collection/collection
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey or readOnlyKey provided by VisageCloud
		 * @param {string} collectionName The name of the collection that will be created
		 * @param {boolean} preload Defined whether to preload collection
		 * @param {boolean} evictable Defined whether the collection can be evicted
		 * @param {Array<string>} purposes The newly declared purposes of the collection
		 * @return {RestResponse} OK
		 */
		AddCollection2UsingPOST(accessKey: string, secretKey: string, collectionName: string, preload: boolean | null | undefined, evictable: boolean | null | undefined, purposes: Array<string> | null | undefined): Observable<RestResponse> {
			return this.http.post<RestResponse>(this.baseUri + 'rest/v1.1/collection/collection?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&collectionName=' + (collectionName == null ? '' : encodeURIComponent(collectionName)) + '&preload=' + preload + '&evictable=' + evictable + '&' + purposes?.map(z => `purposes=${encodeURIComponent(z)}`).join('&'), null, {});
		}

		/**
		 * Delete existing collection with associated profiles and faces.
		 * Delete rest/v1.1/collection/collection
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey provided by VisageCloud
		 * @param {string} collectionId The id of the collection that will be removed
		 * @return {RestResponse} OK
		 */
		DeleteCollection2UsingDELETE(accessKey: string, secretKey: string, collectionId: string): Observable<RestResponse> {
			return this.http.delete<RestResponse>(this.baseUri + 'rest/v1.1/collection/collection?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&collectionId=' + (collectionId == null ? '' : encodeURIComponent(collectionId)), {});
		}

		/**
		 * Retrieve collection content for data analysis.
		 * Get rest/v1.1/collection/export/csv
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey or readOnlyKey provided by VisageCloud
		 * @param {string} collectionId The id of the collection for which the data will be retrieved
		 * @return {string} OK
		 */
		ExportCSVUsingGET(accessKey: string, secretKey: string, collectionId: string): Observable<string> {
			return this.http.get(this.baseUri + 'rest/v1.1/collection/export/csv?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&collectionId=' + (collectionId == null ? '' : encodeURIComponent(collectionId)), { responseType: 'text' });
		}

		/**
		 * Change purpose of existing collection
		 * Put rest/v1.1/collection/purpose
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey provided by VisageCloud
		 * @param {string} collectionId The id of the collection for which the data will be retrieved
		 * @param {Array<string>} purposes The newly declared purposes of the collection
		 * @return {RestResponse} OK
		 */
		RepurposeCollectionUsingPUT(accessKey: string, secretKey: string, collectionId: string, purposes: Array<string>): Observable<RestResponse> {
			return this.http.put<RestResponse>(this.baseUri + 'rest/v1.1/collection/purpose?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&collectionId=' + (collectionId == null ? '' : encodeURIComponent(collectionId)) + '&' + purposes.map(z => `purposes=${encodeURIComponent(z)}`).join('&'), null, {});
		}

		/**
		 * Retrieve existing collection content
		 * Get rest/v1.1/collection/{id}
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey or readOnlyKey provided by VisageCloud
		 * @param {string} id The id of the collection for which the data will be retrieved
		 * @return {RestResponse} OK
		 */
		GetCollectionUsingGET(accessKey: string, secretKey: string, id: string): Observable<RestResponse> {
			return this.http.get<RestResponse>(this.baseUri + 'rest/v1.1/collection/' + (id == null ? '' : encodeURIComponent(id)) + '?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)), {});
		}

		/**
		 * Update an existing collection with a given id
		 * Post rest/v1.1/collection/{id}
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey provided by VisageCloud
		 * @param {string} name The name of the collection that will be updated
		 * @param {Array<string>} purposes The newly declared purposes of the collection
		 * @param {string} id The id of the collection that will be updated
		 * @return {RestResponse} OK
		 */
		UpdateCollection2UsingPOST(accessKey: string, secretKey: string, name: string | null | undefined, purposes: Array<string> | null | undefined, id: string): Observable<RestResponse> {
			return this.http.post<RestResponse>(this.baseUri + 'rest/v1.1/collection/' + (id == null ? '' : encodeURIComponent(id)) + '?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&' + purposes?.map(z => `purposes=${encodeURIComponent(z)}`).join('&'), null, {});
		}

		/**
		 * Delete existing collection with associated profiles and faces.
		 * Delete rest/v1.1/collection/{id}
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey provided by VisageCloud
		 * @param {string} id The id of the collection that will be removed
		 * @return {RestResponse} OK
		 */
		DeleteCollectionUsingDELETE(accessKey: string, secretKey: string, id: string): Observable<RestResponse> {
			return this.http.delete<RestResponse>(this.baseUri + 'rest/v1.1/collection/' + (id == null ? '' : encodeURIComponent(id)) + '?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)), {});
		}

		/**
		 * Update an existing collection with a given id
		 * Patch rest/v1.1/collection/{id}
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey provided by VisageCloud
		 * @param {string} name The name of the collection that will be updated
		 * @param {Array<string>} purposes The newly declared purposes of the collection
		 * @param {string} id The id of the collection that will be updated
		 * @return {RestResponse} OK
		 */
		UpdateCollectionUsingPATCH(accessKey: string, secretKey: string, name: string | null | undefined, purposes: Array<string> | null | undefined, id: string): Observable<RestResponse> {
			return this.http.patch<RestResponse>(this.baseUri + 'rest/v1.1/collection/' + (id == null ? '' : encodeURIComponent(id)) + '?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&' + purposes?.map(z => `purposes=${encodeURIComponent(z)}`).join('&'), null, {});
		}

		/**
		 * Gets all the profiles associated to a collection
		 * Get rest/v1.1/collection/{id}/profile
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey or readOnlyKey provided by VisageCloud
		 * @param {string} id The collection that contains the profile
		 * @return {RestResponse} OK
		 */
		GetAllCollectionProfilesUsingGET(accessKey: string, secretKey: string, id: string): Observable<RestResponse> {
			return this.http.get<RestResponse>(this.baseUri + 'rest/v1.1/collection/' + (id == null ? '' : encodeURIComponent(id)) + '/profile?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)), {});
		}

		/**
		 * Gets classification attributes from a profile
		 * Get rest/v1.1/profile/classificationAttributes
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey or readOnlyKey provided by VisageCloud
		 * @param {string} profileId The profile associated with the classification attributes
		 * @param {string} collectionId The collection that contains the profile
		 * @return {void} OK
		 */
		GetClassificationAttributesFromProfileUsingGET(accessKey: string, secretKey: string, profileId: string, collectionId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'rest/v1.1/profile/classificationAttributes?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&profileId=' + (profileId == null ? '' : encodeURIComponent(profileId)) + '&collectionId=' + (collectionId == null ? '' : encodeURIComponent(collectionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Maps classification attributes to a profile
		 * Put rest/v1.1/profile/classificationAttributes
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey provided by VisageCloud
		 * @param {string} profileId The profile associated with the classification attributes
		 * @param {string} collectionId The collection that contains the profile
		 * @param {string} classificationAttributes Comma separated key:value classification attributes
		 * @return {void} OK
		 */
		MapClassificationAttributesToProfileUsingPUT(accessKey: string, secretKey: string, profileId: string, collectionId: string, classificationAttributes: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'rest/v1.1/profile/classificationAttributes?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&profileId=' + (profileId == null ? '' : encodeURIComponent(profileId)) + '&collectionId=' + (collectionId == null ? '' : encodeURIComponent(collectionId)) + '&classificationAttributes=' + (classificationAttributes == null ? '' : encodeURIComponent(classificationAttributes)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes classification attributes from a profile
		 * Delete rest/v1.1/profile/classificationAttributes
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey provided by VisageCloud
		 * @param {string} profileId The profile associated with the classification attributes
		 * @param {string} collectionId The collection that contains the profile
		 * @return {void} OK
		 */
		RemoveClassificationAttributesFromProfileUsingDELETE(accessKey: string, secretKey: string, profileId: string, collectionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'rest/v1.1/profile/classificationAttributes?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&profileId=' + (profileId == null ? '' : encodeURIComponent(profileId)) + '&collectionId=' + (collectionId == null ? '' : encodeURIComponent(collectionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the enrollment status of a profile: information on whether it is suitable for authentication.
		 * Get rest/v1.1/profile/enrollmentStatus
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey or readOnlyKey provided by VisageCloud
		 * @param {string} profileId The profile that contains the faces
		 * @param {string} collectionId The collection that contains the profile
		 * @return {RestResponse} OK
		 */
		GetProfileEnrollmentStatusUsingGET(accessKey: string, secretKey: string, profileId: string, collectionId: string): Observable<RestResponse> {
			return this.http.get<RestResponse>(this.baseUri + 'rest/v1.1/profile/enrollmentStatus?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&profileId=' + (profileId == null ? '' : encodeURIComponent(profileId)) + '&collectionId=' + (collectionId == null ? '' : encodeURIComponent(collectionId)), {});
		}

		/**
		 * Gets all the faceHashes associated to a profile
		 * Get rest/v1.1/profile/map
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey or readOnlyKey provided by VisageCloud
		 * @param {string} profileId The profile that contains the faces
		 * @param {string} collectionId The collection that contains the profile
		 * @return {RestResponse} OK
		 */
		GetFacesFromProfileUsingGET(accessKey: string, secretKey: string, profileId: string, collectionId: string): Observable<RestResponse> {
			return this.http.get<RestResponse>(this.baseUri + 'rest/v1.1/profile/map?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&profileId=' + (profileId == null ? '' : encodeURIComponent(profileId)) + '&collectionId=' + (collectionId == null ? '' : encodeURIComponent(collectionId)), {});
		}

		/**
		 * Adds (maps) a list of faces, identified by faceHashes, to a profile, identified by profileId
		 * Post rest/v1.1/profile/map
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey provided by VisageCloud
		 * @param {string} faceHashes Comma separated face hashes, that will be associated to a profile
		 * @param {string} profileId The profile that will store the face
		 * @param {string} collectionId The collection that contains the profile
		 * @return {RestResponse} OK
		 */
		MapFacesToProfileUsingPOST(accessKey: string, secretKey: string, faceHashes: string, profileId: string, collectionId: string): Observable<RestResponse> {
			return this.http.post<RestResponse>(this.baseUri + 'rest/v1.1/profile/map?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&faceHashes=' + (faceHashes == null ? '' : encodeURIComponent(faceHashes)) + '&profileId=' + (profileId == null ? '' : encodeURIComponent(profileId)) + '&collectionId=' + (collectionId == null ? '' : encodeURIComponent(collectionId)), null, {});
		}

		/**
		 * Removes (unmaps) a list of faces, identified by faceHashes, from a profile, identified by profileId
		 * Delete rest/v1.1/profile/map
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey provided by VisageCloud
		 * @param {string} faceHashes Comma separated face hashes, that will be removed from a profile
		 * @param {string} profileId The profile that contains the face
		 * @param {string} collectionId The collection that contains the profile
		 * @return {RestResponse} OK
		 */
		RemoveFacesFromProfileUsingDELETE(accessKey: string, secretKey: string, faceHashes: string, profileId: string, collectionId: string): Observable<RestResponse> {
			return this.http.delete<RestResponse>(this.baseUri + 'rest/v1.1/profile/map?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&faceHashes=' + (faceHashes == null ? '' : encodeURIComponent(faceHashes)) + '&profileId=' + (profileId == null ? '' : encodeURIComponent(profileId)) + '&collectionId=' + (collectionId == null ? '' : encodeURIComponent(collectionId)), {});
		}

		/**
		 * Creates a new profile with no faces associated to it (empty profile)
		 * Post rest/v1.1/profile/profile
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey provided by VisageCloud
		 * @param {string} collectionId Uniquely identified collection that can store multiple profiles
		 * @param {string} externalId External reference to additional information you don’t want to share with VisageCloud
		 * @param {string} screenName Human-readable label for the profile
		 * @param {Array<string>} labels Allows you to do finer filtering in face recognition
		 * @param {string} classificationAttributes Comma separated key:value classification attributes
		 * @param {string} details Comma separated key:value details of profile
		 * @return {RestResponse} OK
		 */
		AddProfileUsingPOST(accessKey: string, secretKey: string, collectionId: string, externalId: string | null | undefined, screenName: string | null | undefined, labels: Array<string> | null | undefined, classificationAttributes: string | null | undefined, details: string | null | undefined): Observable<RestResponse> {
			return this.http.post<RestResponse>(this.baseUri + 'rest/v1.1/profile/profile?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&collectionId=' + (collectionId == null ? '' : encodeURIComponent(collectionId)) + '&externalId=' + (externalId == null ? '' : encodeURIComponent(externalId)) + '&screenName=' + (screenName == null ? '' : encodeURIComponent(screenName)) + '&' + labels?.map(z => `labels=${encodeURIComponent(z)}`).join('&') + '&classificationAttributes=' + (classificationAttributes == null ? '' : encodeURIComponent(classificationAttributes)) + '&details=' + (details == null ? '' : encodeURIComponent(details)), null, {});
		}

		/**
		 * Deletes a profile and unmaps all its faces
		 * Delete rest/v1.1/profile/profile
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey provided by VisageCloud
		 * @param {string} collectionId Uniquely identified collection that can store multiple profiles
		 * @param {string} profileId The profile id (provide this if you don't have the externalId
		 * @return {RestResponse} OK
		 */
		DeleteProfile2UsingDELETE(accessKey: string, secretKey: string, collectionId: string, profileId: string): Observable<RestResponse> {
			return this.http.delete<RestResponse>(this.baseUri + 'rest/v1.1/profile/profile?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&collectionId=' + (collectionId == null ? '' : encodeURIComponent(collectionId)) + '&profileId=' + (profileId == null ? '' : encodeURIComponent(profileId)), {});
		}

		/**
		 * Retrieves a profile
		 * Get rest/v1.1/profile/{id}
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey or readOnlyKey provided by VisageCloud
		 * @param {string} collectionId Uniquely identified collection that can store multiple profiles
		 * @param {string} withFaces Retrieves the profile with all its associated faces
		 * @param {string} id The profile id (provide this if you don't have the externalId
		 * @return {RestResponse} OK
		 */
		GetProfileUsingGET(accessKey: string, secretKey: string, collectionId: string, withFaces: string | null | undefined, id: string): Observable<RestResponse> {
			return this.http.get<RestResponse>(this.baseUri + 'rest/v1.1/profile/' + (id == null ? '' : encodeURIComponent(id)) + '?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&collectionId=' + (collectionId == null ? '' : encodeURIComponent(collectionId)) + '&withFaces=' + (withFaces == null ? '' : encodeURIComponent(withFaces)), {});
		}

		/**
		 * Deletes a profile and unmaps all its faces
		 * Delete rest/v1.1/profile/{id}
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey provided by VisageCloud
		 * @param {string} collectionId Uniquely identified collection that can store multiple profiles
		 * @param {string} id The profile id (provide this if you don't have the externalId
		 * @return {RestResponse} OK
		 */
		DeleteProfileUsingDELETE(accessKey: string, secretKey: string, collectionId: string, id: string): Observable<RestResponse> {
			return this.http.delete<RestResponse>(this.baseUri + 'rest/v1.1/profile/' + (id == null ? '' : encodeURIComponent(id)) + '?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&collectionId=' + (collectionId == null ? '' : encodeURIComponent(collectionId)), {});
		}

		/**
		 * Update an existing profile with a given id
		 * Patch rest/v1.1/profile/{id}
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey or readOnlyKey provided by VisageCloud
		 * @param {string} id The id of the profile that will be updated
		 * @param {string} collectionId Uniquely identified collection that can store multiple profiles
		 * @param {string} externalId External reference to additional information you don’t want to share with VisageCloud
		 * @param {string} screenName Human-readable label for the profile
		 * @param {Array<string>} labels Allows you to do finer filtering in face recognition
		 * @param {string} classificationAttributes Comma separated key:value classification attributes
		 * @param {string} details Comma separated key:value details of profile
		 * @return {RestResponse} OK
		 */
		UpdateProfileUsingPATCH(accessKey: string, secretKey: string, id: string, collectionId: string, externalId: string | null | undefined, screenName: string | null | undefined, labels: Array<string> | null | undefined, classificationAttributes: string | null | undefined, details: string | null | undefined): Observable<RestResponse> {
			return this.http.patch<RestResponse>(this.baseUri + 'rest/v1.1/profile/' + (id == null ? '' : encodeURIComponent(id)) + '?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&collectionId=' + (collectionId == null ? '' : encodeURIComponent(collectionId)) + '&externalId=' + (externalId == null ? '' : encodeURIComponent(externalId)) + '&screenName=' + (screenName == null ? '' : encodeURIComponent(screenName)) + '&' + labels?.map(z => `labels=${encodeURIComponent(z)}`).join('&') + '&classificationAttributes=' + (classificationAttributes == null ? '' : encodeURIComponent(classificationAttributes)) + '&details=' + (details == null ? '' : encodeURIComponent(details)), null, {});
		}

		/**
		 * Show status of all streams from account
		 * Get rest/v1.1/stream/all
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey or readOnlyKey provided by VisageCloud
		 * @return {RestResponse} OK
		 */
		StreamsByAccountUsingGET(accessKey: string, secretKey: string): Observable<RestResponse> {
			return this.http.get<RestResponse>(this.baseUri + 'rest/v1.1/stream/all?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)), {});
		}

		/**
		 * Get last N recognized individuals from stream
		 * Get rest/v1.1/stream/attendance
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey or readOnlyKey provided by VisageCloud
		 * @param {Array<string>} streamIds The id of the stream for which the frames will be retrieved
		 * @param {number} count How many frames to retrieve at a time
		 * @return {RestResponse} OK
		 */
		GetLastNAttedanceUsingGET(accessKey: string, secretKey: string, streamIds: Array<string> | null | undefined, count: number | null | undefined): Observable<RestResponse> {
			return this.http.get<RestResponse>(this.baseUri + 'rest/v1.1/stream/attendance?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&' + streamIds?.map(z => `streamIds=${encodeURIComponent(z)}`).join('&') + '&count=' + count, {});
		}

		/**
		 * Cleanup frames older than specified timeframe
		 * Patch rest/v1.1/stream/cleanup
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey provided by VisageCloud
		 * @param {string} streamId The id of the stream that will be stopped
		 * @param {number} interval Frames older than interval (seconds) will be cleaned up
		 * @return {RestResponse} OK
		 */
		CleanupStreamUsingPATCH(accessKey: string, secretKey: string, streamId: string, interval: number): Observable<RestResponse> {
			return this.http.patch<RestResponse>(this.baseUri + 'rest/v1.1/stream/cleanup?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&streamId=' + (streamId == null ? '' : encodeURIComponent(streamId)) + '&interval=' + interval, null, {});
		}

		/**
		 * Get individual frame image
		 * Get rest/v1.1/stream/frameImage
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey or readOnlyKey provided by VisageCloud
		 * @param {string} streamId The id of the stream for which the frames will be retrieved
		 * @param {string} timestamp Timestamp of frame to retrieve
		 * @return {void} OK
		 */
		GetFrameImageUsingGET(accessKey: string, secretKey: string, streamId: string, timestamp: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'rest/v1.1/stream/frameImage?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&streamId=' + (streamId == null ? '' : encodeURIComponent(streamId)) + '&timestamp=' + timestamp, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get last processed N frames from stream
		 * Get rest/v1.1/stream/frames
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey or readOnlyKey provided by VisageCloud
		 * @param {string} streamId The id of the stream for which the frames will be retrieved
		 * @param {number} count How many frames to retrieve at a time
		 * @param {string} collectionId The collection id you want to run recognition against
		 * @param {Array<string>} labels Labels associated with the given picture or picture URL
		 * @param {Array<string>} attributeFilters Filters that will be applied on the recognition operation
		 * @return {RestResponse} OK
		 */
		GetLastNFramesUsingGET(accessKey: string, secretKey: string, streamId: string, count: number | null | undefined, collectionId: string | null | undefined, labels: Array<string> | null | undefined, attributeFilters: Array<string> | null | undefined): Observable<RestResponse> {
			return this.http.get<RestResponse>(this.baseUri + 'rest/v1.1/stream/frames?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&streamId=' + (streamId == null ? '' : encodeURIComponent(streamId)) + '&count=' + count + '&collectionId=' + (collectionId == null ? '' : encodeURIComponent(collectionId)) + '&' + labels?.map(z => `labels=${encodeURIComponent(z)}`).join('&') + '&' + attributeFilters?.map(z => `attributeFilters=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Start existing stream
		 * Patch rest/v1.1/stream/start
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey provided by VisageCloud
		 * @param {string} streamId The id of the stream that will be started
		 * @return {RestResponse} OK
		 */
		StartStreamUsingPATCH(accessKey: string, secretKey: string, streamId: string): Observable<RestResponse> {
			return this.http.patch<RestResponse>(this.baseUri + 'rest/v1.1/stream/start?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&streamId=' + (streamId == null ? '' : encodeURIComponent(streamId)), null, {});
		}

		/**
		 * Stop existing stream
		 * Patch rest/v1.1/stream/stop
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey provided by VisageCloud
		 * @param {string} streamId The id of the stream that will be stopped
		 * @return {RestResponse} OK
		 */
		StopStreamUsingPATCH(accessKey: string, secretKey: string, streamId: string): Observable<RestResponse> {
			return this.http.patch<RestResponse>(this.baseUri + 'rest/v1.1/stream/stop?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&streamId=' + (streamId == null ? '' : encodeURIComponent(streamId)), null, {});
		}

		/**
		 * Create new stream with given name
		 * Post rest/v1.1/stream/stream
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey provided by VisageCloud
		 * @param {string} name The name of the stream that will be created
		 * @param {string} url The url of the stream
		 * @param {AddStreamUsingPOSTMethod} method Streaming method
		 * @param {string} username Username
		 * @param {string} password Password
		 * @param {boolean} skipFramesWithNoFaces Boolean value indicating whether you want the original picture to be stored for later retrieval
		 * @param {number} retentionTime Number of seconds for frames to be kept. Default is 605000s (7 days)
		 * @param {boolean} storeOriginalFrames Boolean value indicating whether you want the original picture to be stored for later retrieval
		 * @param {boolean} storeAttendanceFaces Boolean value indicating whether you want to store permanently store faces clippings of the recognized faces
		 * @param {boolean} storeAttendanceFrames Boolean value indicating whether you want to store permanently store frames with a recognized face in them
		 * @param {boolean} isActive Boolean value indicating whether the stream is currently active or not
		 * @param {Array<string>} associatedCollections List of collection ids which will be used to measure attendance
		 * @param {string} attributes Attributes of the stream
		 * @return {RestResponse} OK
		 */
		AddStreamUsingPOST(accessKey: string, secretKey: string, name: string, url: string, method: AddStreamUsingPOSTMethod | null | undefined, username: string | null | undefined, password: string | null | undefined, skipFramesWithNoFaces: boolean | null | undefined, retentionTime: number | null | undefined, storeOriginalFrames: boolean | null | undefined, storeAttendanceFaces: boolean | null | undefined, storeAttendanceFrames: boolean | null | undefined, isActive: boolean | null | undefined, associatedCollections: Array<string> | null | undefined, attributes: string | null | undefined): Observable<RestResponse> {
			return this.http.post<RestResponse>(this.baseUri + 'rest/v1.1/stream/stream?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&url=' + (url == null ? '' : encodeURIComponent(url)) + '&method=' + method + '&username=' + (username == null ? '' : encodeURIComponent(username)) + '&password=' + (password == null ? '' : encodeURIComponent(password)) + '&skipFramesWithNoFaces=' + skipFramesWithNoFaces + '&retentionTime=' + retentionTime + '&storeOriginalFrames=' + storeOriginalFrames + '&storeAttendanceFaces=' + storeAttendanceFaces + '&storeAttendanceFrames=' + storeAttendanceFrames + '&isActive=' + isActive + '&' + associatedCollections?.map(z => `associatedCollections=${encodeURIComponent(z)}`).join('&') + '&attributes=' + (attributes == null ? '' : encodeURIComponent(attributes)), null, {});
		}

		/**
		 * Delete existing stream
		 * Delete rest/v1.1/stream/{id}
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey provided by VisageCloud
		 * @param {string} id The id of the stream that will be removed
		 * @return {RestResponse} OK
		 */
		RemoveStreamUsingDELETE(accessKey: string, secretKey: string, id: string): Observable<RestResponse> {
			return this.http.delete<RestResponse>(this.baseUri + 'rest/v1.1/stream/' + (id == null ? '' : encodeURIComponent(id)) + '?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)), {});
		}

		/**
		 * Get an existing stream with a given ID
		 * Get rest/v1.1/stream/{streamId}
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey provided by VisageCloud
		 * @param {string} streamId The id of the stream for which the data will be retrieved
		 * @return {RestResponse} OK
		 */
		GetStreamUsingGET(accessKey: string, secretKey: string, streamId: string): Observable<RestResponse> {
			return this.http.get<RestResponse>(this.baseUri + 'rest/v1.1/stream/' + (streamId == null ? '' : encodeURIComponent(streamId)) + '?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)), {});
		}

		/**
		 * Update an existing stream with a given ID
		 * Patch rest/v1.1/stream/{streamId}
		 * @param {string} accessKey The accessKey provided by VisageCloud
		 * @param {string} secretKey The secretKey provided by VisageCloud
		 * @param {string} streamId The id of the stream that will be updated
		 * @param {string} name The name of the stream that will be updated
		 * @param {string} url The url of the stream
		 * @param {AddStreamUsingPOSTMethod} method Streaming method
		 * @param {string} username Username
		 * @param {string} password Password
		 * @param {boolean} skipFramesWithNoFaces Boolean value indicating whether you want the original picture to be stored for later retrieval
		 * @param {number} retentionTime Number of seconds for frames to be kept
		 * @param {boolean} storeOriginalFrames Boolean value indicating whether you want the original picture to be stored for later retrieval
		 * @param {boolean} storeAttendanceFaces Boolean value indicating whether you want to store permanently store faces clippings of the recognized faces
		 * @param {boolean} storeAttendanceFrames Boolean value indicating whether you want to store permanently store frames with a recognized face in them
		 * @param {boolean} isActive Boolean value indicating whether the stream is currently active or not
		 * @param {Array<string>} associatedCollections List of collection ids which will be used to measure attendance
		 * @param {string} attributes Attributes of the stream
		 * @return {RestResponse} OK
		 */
		UpdateStreamUsingPATCH(accessKey: string, secretKey: string, streamId: string, name: string | null | undefined, url: string | null | undefined, method: AddStreamUsingPOSTMethod | null | undefined, username: string | null | undefined, password: string | null | undefined, skipFramesWithNoFaces: boolean | null | undefined, retentionTime: number | null | undefined, storeOriginalFrames: boolean | null | undefined, storeAttendanceFaces: boolean | null | undefined, storeAttendanceFrames: boolean | null | undefined, isActive: boolean | null | undefined, associatedCollections: Array<string> | null | undefined, attributes: string | null | undefined): Observable<RestResponse> {
			return this.http.patch<RestResponse>(this.baseUri + 'rest/v1.1/stream/' + (streamId == null ? '' : encodeURIComponent(streamId)) + '?accessKey=' + (accessKey == null ? '' : encodeURIComponent(accessKey)) + '&secretKey=' + (secretKey == null ? '' : encodeURIComponent(secretKey)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&url=' + (url == null ? '' : encodeURIComponent(url)) + '&method=' + method + '&username=' + (username == null ? '' : encodeURIComponent(username)) + '&password=' + (password == null ? '' : encodeURIComponent(password)) + '&skipFramesWithNoFaces=' + skipFramesWithNoFaces + '&retentionTime=' + retentionTime + '&storeOriginalFrames=' + storeOriginalFrames + '&storeAttendanceFaces=' + storeAttendanceFaces + '&storeAttendanceFrames=' + storeAttendanceFrames + '&isActive=' + isActive + '&' + associatedCollections?.map(z => `associatedCollections=${encodeURIComponent(z)}`).join('&') + '&attributes=' + (attributes == null ? '' : encodeURIComponent(attributes)), null, {});
		}
	}

	export enum PerformAnalysisUsingPOSTAlgorithmVersion { V1 = 'V1', V2 = 'V2' }

	export enum AddStreamUsingPOSTMethod { WEBRTC_PULL = 'WEBRTC_PULL', WEBRTC_PUSH = 'WEBRTC_PUSH', INGESTION_ENDPOINT = 'INGESTION_ENDPOINT' }

}

