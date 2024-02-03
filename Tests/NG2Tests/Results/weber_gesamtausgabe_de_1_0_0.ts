import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CodeSample {

		/** The code snippet */
		codeSample?: string | null;

		/** The WeGA document identifier representing a specific document */
		docID?: string | null;

		/** Unique identifier representing a specific document */
		uri?: string | null;
	}
	export interface CodeSampleFormProperties {

		/** The code snippet */
		codeSample: FormControl<string | null | undefined>,

		/** The WeGA document identifier representing a specific document */
		docID: FormControl<string | null | undefined>,

		/** Unique identifier representing a specific document */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateCodeSampleFormGroup() {
		return new FormGroup<CodeSampleFormProperties>({
			codeSample: new FormControl<string | null | undefined>(undefined),
			docID: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Document {

		/** The WeGA document identifier representing a specific document */
		docID?: string | null;

		/** The WeGA document type */
		docType?: string | null;

		/** The title of the document */
		title?: string | null;

		/** Unique identifier representing a specific document */
		uri?: string | null;
	}
	export interface DocumentFormProperties {

		/** The WeGA document identifier representing a specific document */
		docID: FormControl<string | null | undefined>,

		/** The WeGA document type */
		docType: FormControl<string | null | undefined>,

		/** The title of the document */
		title: FormControl<string | null | undefined>,

		/** Unique identifier representing a specific document */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateDocumentFormGroup() {
		return new FormGroup<DocumentFormProperties>({
			docID: new FormControl<string | null | undefined>(undefined),
			docType: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Error {
		code?: number | null;
		fields?: string | null;
		message?: string | null;
	}
	export interface ErrorFormProperties {
		code: FormControl<number | null | undefined>,
		fields: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			fields: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SvnHistoryPatch {

		/** The Subversion commit author */
		author?: string | null;

		/** The Subversion commit dateTime */
		dateTime?: string | null;

		/** The Subversion path, starting from the repository root */
		path?: string | null;

		/** The Subversion commit revision */
		rev?: number | null;

		/** Unique identifier representing a specific document */
		uri?: string | null;
	}
	export interface SvnHistoryPatchFormProperties {

		/** The Subversion commit author */
		author: FormControl<string | null | undefined>,

		/** The Subversion commit dateTime */
		dateTime: FormControl<string | null | undefined>,

		/** The Subversion path, starting from the repository root */
		path: FormControl<string | null | undefined>,

		/** The Subversion commit revision */
		rev: FormControl<number | null | undefined>,

		/** Unique identifier representing a specific document */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateSvnHistoryPatchFormGroup() {
		return new FormGroup<SvnHistoryPatchFormProperties>({
			author: new FormControl<string | null | undefined>(undefined),
			dateTime: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			rev: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Create a new WeGA ID
		 * Get application/newID
		 * @param {Array<string>} docType The WeGA document type
		 * @return {ApplicationGetByDocTypeReturn} A single object with a fresh WeGA ID
		 */
		ApplicationGetByDocType(docType: Array<string>): Observable<ApplicationGetByDocTypeReturn> {
			return this.http.get<ApplicationGetByDocTypeReturn>(this.baseUri + 'application/newID?' + docType.map(z => `docType=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get status information about the running WeGA-WebApp
		 * Get application/status
		 * @return {ApplicationGetReturn} A single object with status information
		 */
		ApplicationGet(): Observable<ApplicationGetReturn> {
			return this.http.get<ApplicationGetReturn>(this.baseUri + 'application/status', {});
		}

		/**
		 * Finds code samples by XML element
		 * Get code/findByElement/{element}
		 * @param {string} element The XML element to search for
		 * @param {string} namespace The element namespace. Defaults to the TEI namespace
		 * @param {Array<string>} docType The WeGA document type
		 * @param {number} offset Position of first item to retrieve (starting from 1)
		 * @param {number} limit Number of items to retrieve (200 max)
		 * @return {Array<CodeSample>} An array of documents
		 */
		Code_SamplesGetByElementAndNamespaceAndDocTypeAndOffsetAndLimit(element: string, namespace: string | null | undefined, docType: Array<string> | null | undefined, offset: number | null | undefined, limit: number | null | undefined): Observable<Array<CodeSample>> {
			return this.http.get<Array<CodeSample>>(this.baseUri + 'code/findByElement/' + (element == null ? '' : encodeURIComponent(element)) + '&namespace=' + (namespace == null ? '' : encodeURIComponent(namespace)) + '&' + docType?.map(z => `docType=${encodeURIComponent(z)}`).join('&') + '&offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Lists all documents
		 * The Documents endpoint returns a list of all documents from the WeGA digital edition.
		 * Get documents
		 * @param {Array<string>} docType The WeGA document type
		 * @param {number} offset Position of first item to retrieve (starting from 1)
		 * @param {number} limit Number of items to retrieve (200 max)
		 * @return {Array<Document>} An array of documents
		 */
		DocumentsGetByDocTypeAndOffsetAndLimit(docType: Array<string> | null | undefined, offset: number | null | undefined, limit: number | null | undefined): Observable<Array<Document>> {
			return this.http.get<Array<Document>>(this.baseUri + 'documents?' + docType?.map(z => `docType=${encodeURIComponent(z)}`).join('&') + '&offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Finds documents by author
		 * This endpoint returns a list of documents by a given author – optionally filtered by document type
		 * Get documents/findByAuthor/{authorID}
		 * @param {string} authorID The author ID to search for. Accepted ID formats are WeGA, e.g. A002068 or http://weber-gesamtausgabe.de/A002068, VIAF, e.g. http://viaf.org/viaf/310642461, or  GND, e.g. http://d-nb.info/gnd/118629662
		 * @param {Array<string>} docType The WeGA document type
		 * @param {number} offset Position of first item to retrieve (starting from 1)
		 * @param {number} limit Number of items to retrieve (200 max)
		 * @return {Array<Document>} An array of documents
		 */
		DocumentsGetByAuthorIDAndDocTypeAndOffsetAndLimit(authorID: string, docType: Array<string> | null | undefined, offset: number | null | undefined, limit: number | null | undefined): Observable<Array<Document>> {
			return this.http.get<Array<Document>>(this.baseUri + 'documents/findByAuthor/' + (authorID == null ? '' : encodeURIComponent(authorID)) + '&' + docType?.map(z => `docType=${encodeURIComponent(z)}`).join('&') + '&offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Finds documents by date
		 * This endpoint returns a list of documents related to the given date – optionally filtered by document type.
		 * Get documents/findByDate
		 * @param {Date} fromDate The min date to search for
		 * @param {Date} toDate The max date to search for
		 * @param {Array<string>} docType The WeGA document type
		 * @param {number} offset Position of first item to retrieve (starting from 1)
		 * @param {number} limit Number of items to retrieve (200 max)
		 * @return {Array<Document>} An array of documents
		 */
		DocumentsGetByFromDateAndToDateAndDocTypeAndOffsetAndLimit(fromDate: Date, toDate: Date | null | undefined, docType: Array<string> | null | undefined, offset: number | null | undefined, limit: number | null | undefined): Observable<Array<Document>> {
			return this.http.get<Array<Document>>(this.baseUri + 'documents/findByDate?fromDate=' + fromDate.toISOString() + '&toDate=' + toDate?.toISOString() + '&' + docType?.map(z => `docType=${encodeURIComponent(z)}`).join('&') + '&offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Finds documents by reference
		 * This endpoint returns a list of documents that reference a particular docID – optionally filtered by document type.
		 * Get documents/findByMention/{docID}
		 * @param {string} docID The document ID that is to be mentioned. Accepted ID formats are WeGA, e.g. A002068 or http://weber-gesamtausgabe.de/A002068, VIAF, e.g. http://viaf.org/viaf/310642461, or  GND, e.g. http://d-nb.info/gnd/118629662
		 * @param {Array<string>} docType The WeGA document type
		 * @param {number} offset Position of first item to retrieve (starting from 1)
		 * @param {number} limit Number of items to retrieve (200 max)
		 * @return {Array<Document>} An array of documents
		 */
		DocumentsGetByDocIDAndDocTypeAndOffsetAndLimit(docID: string, docType: Array<string> | null | undefined, offset: number | null | undefined, limit: number | null | undefined): Observable<Array<Document>> {
			return this.http.get<Array<Document>>(this.baseUri + 'documents/findByMention/' + (docID == null ? '' : encodeURIComponent(docID)) + '&' + docType?.map(z => `docType=${encodeURIComponent(z)}`).join('&') + '&offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Returns documents by ID
		 * This endpoint returns documents, indicated by an ID.
		 * Accepted ID formats are WeGA, e.g. A002068 or http://weber-gesamtausgabe.de/A002068, VIAF, e.g. http://viaf.org/viaf/310642461, or  GND, e.g. http://d-nb.info/gnd/118629662
		 * Get documents/{docID}
		 * @param {string} docID The document identifier to search for
		 * @return {Array<Document>} An array of documents
		 */
		DocumentsGetByDocID(docID: string): Observable<Array<Document>> {
			return this.http.get<Array<Document>>(this.baseUri + 'documents/' + (docID == null ? '' : encodeURIComponent(docID)), {});
		}
	}

	export interface ApplicationGetByDocTypeReturn {

		/** The WeGA ID */
		docID?: string | null;

		/** The WeGA document type */
		docType?: string | null;
	}
	export interface ApplicationGetByDocTypeReturnFormProperties {

		/** The WeGA ID */
		docID: FormControl<string | null | undefined>,

		/** The WeGA document type */
		docType: FormControl<string | null | undefined>,
	}
	export function CreateApplicationGetByDocTypeReturnFormGroup() {
		return new FormGroup<ApplicationGetByDocTypeReturnFormProperties>({
			docID: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^A[A-F0-9]{6}$')]),
			docType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApplicationGetReturn {

		/** The datetime of the deployment of the WeGA-WebApp */
		deployment?: Date | null;

		/** Status (healthy|unhealthy) of the currently running WeGA-WebApp */
		status?: ApplicationGetReturnStatus | null;

		/** The Subversion revision of the currently installed WeGA-data */
		svnRevision?: number | null;
		version?: string | null;
	}
	export interface ApplicationGetReturnFormProperties {

		/** The datetime of the deployment of the WeGA-WebApp */
		deployment: FormControl<Date | null | undefined>,

		/** Status (healthy|unhealthy) of the currently running WeGA-WebApp */
		status: FormControl<ApplicationGetReturnStatus | null | undefined>,

		/** The Subversion revision of the currently installed WeGA-data */
		svnRevision: FormControl<number | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateApplicationGetReturnFormGroup() {
		return new FormGroup<ApplicationGetReturnFormProperties>({
			deployment: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<ApplicationGetReturnStatus | null | undefined>(undefined),
			svnRevision: new FormControl<number | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+\.\d+\.\d+$')]),
		});

	}

	export enum ApplicationGetReturnStatus { healthy = 'healthy', unhealthy = 'unhealthy' }

}

