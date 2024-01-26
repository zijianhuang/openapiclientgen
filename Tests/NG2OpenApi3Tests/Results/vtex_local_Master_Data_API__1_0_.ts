import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ArEVentilaO {

		/** Required */
		Date: string;

		/** Required */
		Point: number;

		/** Required */
		Until: string;
	}
	export interface ArEVentilaOFormProperties {

		/** Required */
		Date: FormControl<string | null | undefined>,

		/** Required */
		Point: FormControl<number | null | undefined>,

		/** Required */
		Until: FormControl<string | null | undefined>,
	}
	export function CreateArEVentilaOFormGroup() {
		return new FormGroup<ArEVentilaOFormProperties>({
			Date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Point: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Until: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** This can be any pure JSON document. */
	export interface DEPRECATED_DocumentRequest {

		/** This can be any JSON document field. */
		field?: string | null;
	}

	/** This can be any pure JSON document. */
	export interface DEPRECATED_DocumentRequestFormProperties {

		/** This can be any JSON document field. */
		field: FormControl<string | null | undefined>,
	}
	export function CreateDEPRECATED_DocumentRequestFormGroup() {
		return new FormGroup<DEPRECATED_DocumentRequestFormProperties>({
			field: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DepartmentVisitedTag {

		/** Required */
		DisplayValue: string;

		/** Required */
		Scores: Scores;
	}
	export interface DepartmentVisitedTagFormProperties {

		/** Required */
		DisplayValue: FormControl<string | null | undefined>,
	}
	export function CreateDepartmentVisitedTagFormGroup() {
		return new FormGroup<DepartmentVisitedTagFormProperties>({
			DisplayValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Scores {

		/** Required */
		'Ar e Ventilação': Array<ArEVentilaO>;
	}
	export interface ScoresFormProperties {
	}
	export function CreateScoresFormGroup() {
		return new FormGroup<ScoresFormProperties>({
		});

	}

	export interface Document {

		/** Required */
		accountId: string;

		/** Required */
		accountName: string;

		/** Required */
		carttag: string;

		/** Required */
		checkouttag: string;

		/** Required */
		dataEntityId: string;

		/** Required */
		departmentVisitedTag: DepartmentVisitedTag;

		/** Required */
		email: string;

		/** Required */
		followers: Array<string>;

		/** Required */
		id: string;

		/** Required */
		rclastsession: string;

		/** Required */
		rclastsessiondate: string;
	}
	export interface DocumentFormProperties {

		/** Required */
		accountId: FormControl<string | null | undefined>,

		/** Required */
		accountName: FormControl<string | null | undefined>,

		/** Required */
		carttag: FormControl<string | null | undefined>,

		/** Required */
		checkouttag: FormControl<string | null | undefined>,

		/** Required */
		dataEntityId: FormControl<string | null | undefined>,

		/** Required */
		email: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		rclastsession: FormControl<string | null | undefined>,

		/** Required */
		rclastsessiondate: FormControl<string | null | undefined>,
	}
	export function CreateDocumentFormGroup() {
		return new FormGroup<DocumentFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			accountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			carttag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			checkouttag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataEntityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rclastsession: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rclastsessiondate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** This can be any pure JSON document. Add new _Key-Value_ pairs to test. */
	export interface DocumentRequest {
	}

	/** This can be any pure JSON document. Add new _Key-Value_ pairs to test. */
	export interface DocumentRequestFormProperties {
	}
	export function CreateDocumentRequestFormGroup() {
		return new FormGroup<DocumentRequestFormProperties>({
		});

	}

	export interface Getversion {

		/** Required */
		author: string;

		/** Required */
		document: Document;

		/** Required */
		id: string;
	}
	export interface GetversionFormProperties {

		/** Required */
		author: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateGetversionFormGroup() {
		return new FormGroup<GetversionFormProperties>({
			author: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Listversion {

		/** Required */
		date: string;
		document?: string | null;

		/** Required */
		id: string;
	}
	export interface ListversionFormProperties {

		/** Required */
		date: FormControl<string | null | undefined>,
		document: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateListversionFormGroup() {
		return new FormGroup<ListversionFormProperties>({
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			document: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Name {

		/** Required */
		type: string;
	}
	export interface NameFormProperties {

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateNameFormGroup() {
		return new FormGroup<NameFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Properties {

		/** Required */
		name: Name;
	}
	export interface PropertiesFormProperties {
	}
	export function CreatePropertiesFormGroup() {
		return new FormGroup<PropertiesFormProperties>({
		});

	}

	export interface PutindicesRequest {

		/**
		 * Comma-separted fields of the index
		 * Required
		 */
		fields: string;

		/**
		 * Determines whether the values need to be unique. If false, values must be unique.
		 * Required
		 */
		multiple: boolean;

		/**
		 * Name to identify the index
		 * Required
		 */
		name: string;
	}
	export interface PutindicesRequestFormProperties {

		/**
		 * Comma-separted fields of the index
		 * Required
		 */
		fields: FormControl<string | null | undefined>,

		/**
		 * Determines whether the values need to be unique. If false, values must be unique.
		 * Required
		 */
		multiple: FormControl<boolean | null | undefined>,

		/**
		 * Name to identify the index
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePutindicesRequestFormGroup() {
		return new FormGroup<PutindicesRequestFormProperties>({
			fields: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			multiple: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SaveschemabynameRequest {

		/** Required */
		properties: Properties;
	}
	export interface SaveschemabynameRequestFormProperties {
	}
	export function CreateSaveschemabynameRequestFormGroup() {
		return new FormGroup<SaveschemabynameRequestFormProperties>({
		});

	}

	export interface Using_fields_all {

		/** Required */
		accountId: string;

		/** Required */
		accountName: string;

		/** Required */
		dataEntityId: string;

		/** Required */
		id: string;
	}
	export interface Using_fields_allFormProperties {

		/** Required */
		accountId: FormControl<string | null | undefined>,

		/** Required */
		accountName: FormControl<string | null | undefined>,

		/** Required */
		dataEntityId: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateUsing_fields_allFormGroup() {
		return new FormGroup<Using_fields_allFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			accountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataEntityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ValidatedocumentbyclustersRequest {

		/** Required */
		name: string;

		/** Required */
		rule: string;
	}
	export interface ValidatedocumentbyclustersRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		rule: FormControl<string | null | undefined>,
	}
	export function CreateValidatedocumentbyclustersRequestFormGroup() {
		return new FormGroup<ValidatedocumentbyclustersRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rule: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdateAddressRequests {

		/** Address name. */
		addressName?: string | null;

		/** Type of address. For example, `Residential` or `Pickup`, among others. */
		addressType?: string | null;

		/** City of the shipping address. */
		city?: string | null;

		/** Complement to the shipping address in case it applies. */
		complement?: string | null;

		/** Three letter ISO code of the country of the shipping address. */
		country?: string | null;

		/** Neighborhood of the address. */
		neighborhood?: string | null;

		/** Number of the building, house or apartment in the shipping address. */
		number?: string | null;

		/** Postal Code. */
		postalCode?: string | null;

		/** Name of the person who is going to receive the order. */
		receiverName?: string | null;

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference?: string | null;

		/** State of the shipping address. */
		state?: string | null;

		/** Street of the address. */
		street?: string | null;

		/** ID of the customer to whom the address belongs. */
		userId?: string | null;
	}
	export interface CreateUpdateAddressRequestsFormProperties {

		/** Address name. */
		addressName: FormControl<string | null | undefined>,

		/** Type of address. For example, `Residential` or `Pickup`, among others. */
		addressType: FormControl<string | null | undefined>,

		/** City of the shipping address. */
		city: FormControl<string | null | undefined>,

		/** Complement to the shipping address in case it applies. */
		complement: FormControl<string | null | undefined>,

		/** Three letter ISO code of the country of the shipping address. */
		country: FormControl<string | null | undefined>,

		/** Neighborhood of the address. */
		neighborhood: FormControl<string | null | undefined>,

		/** Number of the building, house or apartment in the shipping address. */
		number: FormControl<string | null | undefined>,

		/** Postal Code. */
		postalCode: FormControl<string | null | undefined>,

		/** Name of the person who is going to receive the order. */
		receiverName: FormControl<string | null | undefined>,

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference: FormControl<string | null | undefined>,

		/** State of the shipping address. */
		state: FormControl<string | null | undefined>,

		/** Street of the address. */
		street: FormControl<string | null | undefined>,

		/** ID of the customer to whom the address belongs. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateCreateUpdateAddressRequestsFormGroup() {
		return new FormGroup<CreateUpdateAddressRequestsFormProperties>({
			addressName: new FormControl<string | null | undefined>(undefined),
			addressType: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			complement: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			neighborhood: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			receiverName: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateUpdateProfileRequests {

		/** Client document. */
		document?: string | null;

		/** Client document type. */
		documentType?: string | null;

		/** Client email address. */
		email?: string | null;

		/** Client first name. */
		firstName?: string | null;

		/** Indicates whether client is corporate. */
		isCorporate?: boolean | null;

		/** Indicates whether client otped to receive the store newsletter. */
		isNewsletterOptIn?: boolean | null;

		/** Client last name. */
		lastName?: string | null;

		/** Default locale, used to set store language and currency, for example. */
		localeDefault?: string | null;

		/** Client telephone number. */
		phone?: string | null;
	}
	export interface CreateUpdateProfileRequestsFormProperties {

		/** Client document. */
		document: FormControl<string | null | undefined>,

		/** Client document type. */
		documentType: FormControl<string | null | undefined>,

		/** Client email address. */
		email: FormControl<string | null | undefined>,

		/** Client first name. */
		firstName: FormControl<string | null | undefined>,

		/** Indicates whether client is corporate. */
		isCorporate: FormControl<boolean | null | undefined>,

		/** Indicates whether client otped to receive the store newsletter. */
		isNewsletterOptIn: FormControl<boolean | null | undefined>,

		/** Client last name. */
		lastName: FormControl<string | null | undefined>,

		/** Default locale, used to set store language and currency, for example. */
		localeDefault: FormControl<string | null | undefined>,

		/** Client telephone number. */
		phone: FormControl<string | null | undefined>,
	}
	export function CreateCreateUpdateProfileRequestsFormGroup() {
		return new FormGroup<CreateUpdateProfileRequestsFormProperties>({
			document: new FormControl<string | null | undefined>(undefined),
			documentType: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			isCorporate: new FormControl<boolean | null | undefined>(undefined),
			isNewsletterOptIn: new FormControl<boolean | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			localeDefault: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DocumentResponse {

		/**
		 * Document reference URL.
		 * Required
		 */
		Href: string;

		/**
		 * ID of the document that was created or updated.
		 * Required
		 */
		Id: string;
	}
	export interface DocumentResponseFormProperties {

		/**
		 * Document reference URL.
		 * Required
		 */
		Href: FormControl<string | null | undefined>,

		/**
		 * ID of the document that was created or updated.
		 * Required
		 */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDocumentResponseFormGroup() {
		return new FormGroup<DocumentResponseFormProperties>({
			Href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Create new customer address
		 * Creates new customer address.
		 * > You can use this request to create customer addresses according to any `AD` schema. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for the schemas you are using. Learn more about how to use [Master Data v2 schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle).
		 * Post api/dataentities/Address/documents
		 * @param {string} _schema Name of the schema the document to be created needs to be compliant with.
		 * @return {DocumentResponse} OK
		 */
		CreateNewCustomerAddress(_schema: string | null | undefined, requestBody: CreateUpdateAddressRequests): Observable<DocumentResponse> {
			return this.http.post<DocumentResponse>(this.baseUri + 'api/dataentities/Address/documents?_schema=' + (_schema == null ? '' : encodeURIComponent(_schema)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete customer address
		 * Deletes a customer address.
		 * Delete api/dataentities/Address/documents/{id}
		 * @param {string} id ID of the Document.
		 * @return {DocumentResponse} OK
		 */
		DeleteCustomerAddress(id: string): Observable<DocumentResponse> {
			return this.http.delete<DocumentResponse>(this.baseUri + 'api/dataentities/Address/documents/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Update customer address
		 * Partially updates a customer address.
		 * > You can use this request to update customer addresses according to any `AD` schema. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for the schemas you are using. Learn more about how to use [Master Data v2 schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle).
		 * Patch api/dataentities/Address/documents/{id}
		 * @param {string} _schema Name of the schema the document to be created needs to be compliant with.
		 * @param {string} id ID of the Document.
		 * @return {DocumentResponse} OK
		 */
		UpdateCustomerAddress(_schema: string | null | undefined, id: string, requestBody: CreateUpdateAddressRequests): Observable<DocumentResponse> {
			return this.http.patch<DocumentResponse>(this.baseUri + 'api/dataentities/Address/documents/' + (id == null ? '' : encodeURIComponent(id)) + '?_schema=' + (_schema == null ? '' : encodeURIComponent(_schema)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create new customer profile
		 * Creates new customer profile.
		 * > You can use this request to create customer profiles according to any `CL` schema. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for the schemas you are using. Learn more about how to use [Master Data v2 schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle).
		 * Post api/dataentities/Client/documents
		 * @param {string} _schema Name of the schema the document to be created needs to be compliant with.
		 * @return {DocumentResponse} OK
		 */
		CreateNewCustomerProfilev2(_schema: string | null | undefined, requestBody: CreateUpdateProfileRequests): Observable<DocumentResponse> {
			return this.http.post<DocumentResponse>(this.baseUri + 'api/dataentities/Client/documents?_schema=' + (_schema == null ? '' : encodeURIComponent(_schema)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete customer profile
		 * Deletes a customer profile.
		 * Delete api/dataentities/Client/documents/{id}
		 * @param {string} id ID of the Document.
		 * @return {DocumentResponse} OK
		 */
		DeleteCustomerProfile(id: string): Observable<DocumentResponse> {
			return this.http.delete<DocumentResponse>(this.baseUri + 'api/dataentities/Client/documents/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Update customer profile
		 * Partially updates a customer profile.
		 * > You can use this request to update customer profiles according to any `CL` schema. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for the schemas you are using. Learn more about how to use [Master Data v2 schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle).
		 * Patch api/dataentities/Client/documents/{id}
		 * @param {string} _schema Name of the schema the document to be created needs to be compliant with.
		 * @param {string} id ID of the Document.
		 * @return {DocumentResponse} OK
		 */
		UpdateCustomerProfile(_schema: string | null | undefined, id: string, requestBody: CreateUpdateProfileRequests): Observable<DocumentResponse> {
			return this.http.patch<DocumentResponse>(this.baseUri + 'api/dataentities/Client/documents/' + (id == null ? '' : encodeURIComponent(id)) + '?_schema=' + (_schema == null ? '' : encodeURIComponent(_schema)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create partial document
		 * This request allows you to partially update a document corresponding to a given data entity.
		 * > You can use this request to create documents for any given data entity. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for each document you wish to update.
		 * ## Example use cases
		 * ### Client profile
		 * In order to create a customer profile's `phone` and `isNewsletterOptIn` fields, choose the `CL` data entity and send a request similar to this:
		 * PATCH
		 * ```
		 * https://examplestore.vtexcommercestable.com.br/api/dataentities/Client/documents
		 * ```
		 * Request body
		 * ```json
		 * {
		 * "phone": "+12025550195",
		 * "isNewsletterOptIn": false
		 * }
		 * ```
		 * ### Client address
		 * In order to update the `receiverName` of an existing address, the data entity is `AD` and the request would look like this:
		 * PATCH
		 * ```
		 * https://examplestore.vtexcommercestable.com.br/api/dataentities/Address/documents
		 * ```
		 * Request body
		 * ```json
		 * {
		 * "receiverName": "Lois Lane"
		 * }
		 * ```
		 * Patch api/dataentities/{dataEntityName}/documents
		 * @param {string} dataEntityName Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.
		 * @param {string} _schema Name of the schema the document to be created needs to be compliant with.
		 * @param {DocumentRequest} requestBody JSON with the fields to be updated.
		 * @return {DocumentResponse} OK
		 */
		Createorupdatepartialdocument(dataEntityName: string, _schema: string | null | undefined, requestBody: DocumentRequest): Observable<DocumentResponse> {
			return this.http.patch<DocumentResponse>(this.baseUri + 'api/dataentities/' + (dataEntityName == null ? '' : encodeURIComponent(dataEntityName)) + '/documents&_schema=' + (_schema == null ? '' : encodeURIComponent(_schema)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create new document
		 * This request allows you to create a new document corresponding to a given data entity. For example, you can create a new customer profile or address.
		 * > You can use this request to create documents for any given data entity. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for each document you wish to create.
		 * ## Example use cases
		 * ### Client profile
		 * In order to create a new customer profile, choose the `CL` data entity and send a request similar to this:
		 * POST
		 * ```
		 * https://examplestore.vtexcommercestable.com.br/api/dataentities/Client/documents
		 * ```
		 * Request body
		 * ```json
		 * {
		 * "email": "clark.kent@examplemail.com",
		 * "firstName": "Clark",
		 * "lastName": "Kent",
		 * "phone": "+12025550195",
		 * "documentType": "CPF",
		 * "document": "12345678900"
		 * "isCorporate": false,
		 * "isNewsletterOptIn": false,
		 * "localeDefault": "en-US"
		 * }
		 * ```
		 * ### Client address
		 * For a new address, the data entity is `AD` and the request would look like this:
		 * POST
		 * ```
		 * https://examplestore.vtexcommercestable.com.br/api/dataentities/Address/documents
		 * ```
		 * Request body
		 * ```json
		 * {
		 * "addressName": "My House",
		 * "addressType": "residential",
		 * "city": "Metropolis",
		 * "complement": "",
		 * "country": "USA",
		 * "postalCode": "11375",
		 * "receiverName": "Clark Kent",
		 * "reference": null,
		 * "state": "MP",
		 * "street": "Baker Street",
		 * "neighborhood": "Upper east side",
		 * "number": "21",
		 * "userId": "7e03m794-a33a-11e9-84rt6-0adfa64s5a8e"
		 * }
		 * ```
		 * Post api/dataentities/{dataEntityName}/documents
		 * @param {string} dataEntityName Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.
		 * @param {string} _schema Name of the schema the document to be created needs to be compliant with.
		 * @return {DocumentResponse} OK
		 */
		Createnewdocument(dataEntityName: string, _schema: string | null | undefined, requestBody: DocumentRequest): Observable<DocumentResponse> {
			return this.http.post<DocumentResponse>(this.baseUri + 'api/dataentities/' + (dataEntityName == null ? '' : encodeURIComponent(dataEntityName)) + '/documents&_schema=' + (_schema == null ? '' : encodeURIComponent(_schema)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete document
		 * It allows to delete a document.
		 * Delete api/dataentities/{dataEntityName}/documents/{id}
		 * @param {string} dataEntityName Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.
		 * @param {string} id ID of the Document.
		 * @return {void} OK
		 */
		Deletedocument(dataEntityName: string, id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/dataentities/' + (dataEntityName == null ? '' : encodeURIComponent(dataEntityName)) + '/documents/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get document
		 * Gets document by ID.
		 * > Assign the `_fields` parameter in the query string to retrieve the desired fields. If you want to return all the fields use `_fields=_all`.
		 * Get api/dataentities/{dataEntityName}/documents/{id}
		 * @param {string} dataEntityName Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.
		 * @param {string} id ID of the Document.
		 * @return {Using_fields_all} Sucessful response
		 */
		Getdocument(dataEntityName: string, id: string): Observable<Using_fields_all> {
			return this.http.get<Using_fields_all>(this.baseUri + 'api/dataentities/' + (dataEntityName == null ? '' : encodeURIComponent(dataEntityName)) + '/documents/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Update partial document
		 * This request allows you to partially update a document corresponding to a given data entity. For example, you can update some fields of a customer profile or address.
		 * > You can use this request to update documents for any given data entity. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for each document you wish to update.
		 * ## Example use cases
		 * ### Client profile
		 * In order to update a customer profile's `phone` and `isNewsletterOptIn` fields, choose the `CL` data entity and send a request similar to this:
		 * PATCH
		 * ```
		 * https://examplestore.vtexcommercestable.com.br/api/dataentities/Client/documents/123456789abc
		 * ```
		 * Request body
		 * ```json
		 * {
		 * "phone": "+12025550195",
		 * "isNewsletterOptIn": false
		 * }
		 * ```
		 * ### Client address
		 * In order to update the `receiverName` of an existing address, the data entity is `AD` and the request would look like this:
		 * PATCH
		 * ```
		 * https://examplestore.vtexcommercestable.com.br/api/dataentities/Address/documents/123456789abc
		 * ```
		 * Request body
		 * ```json
		 * {
		 * "receiverName": "Lois Lane"
		 * }
		 * ```
		 * Patch api/dataentities/{dataEntityName}/documents/{id}
		 * @param {string} dataEntityName Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.
		 * @param {string} _where Filter specification.
		 * @param {string} _schema Name of the schema the document to be created needs to be compliant with.
		 * @param {string} id ID of the Document.
		 * @return {DocumentResponse} OK
		 */
		Updatepartialdocument(dataEntityName: string, _where: string | null | undefined, _schema: string | null | undefined, id: string, requestBody: DocumentRequest): Observable<DocumentResponse> {
			return this.http.patch<DocumentResponse>(this.baseUri + 'api/dataentities/' + (dataEntityName == null ? '' : encodeURIComponent(dataEntityName)) + '/documents/' + (id == null ? '' : encodeURIComponent(id)) + '&_where=' + (_where == null ? '' : encodeURIComponent(_where)) + '&_schema=' + (_schema == null ? '' : encodeURIComponent(_schema)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update entire document
		 * Update an existing document corresponding to a given data entity. For example, you can update a customer profile or address.
		 * > You can use this request to update documents in any given data entity. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for each document you wish to update.
		 * ## Example use cases
		 * ### Client profile
		 * In order to update an existing customer profile, choose the `CL` data entity and send a request similar to this:
		 * PUT
		 * ```
		 * https://examplestore.vtexcommercestable.com.br/api/dataentities/Client/documents/123456789abc
		 * ```
		 * Request body
		 * ```json
		 * {
		 * "email": "clark.kent@examplemail.com",
		 * "firstName": "Clark",
		 * "lastName": "Kent",
		 * "phone": "+12025550195",
		 * "documentType": "CPF",
		 * "document": "12345678900"
		 * "isCorporate": false,
		 * "isNewsletterOptIn": false,
		 * "localeDefault": "en-US"
		 * }
		 * ```
		 * ### Client address
		 * To update an address, the data entity is `AD` and the request would look like this:
		 * PUT
		 * ```
		 * https://examplestore.vtexcommercestable.com.br/api/dataentities/Address/documents/123456789abc
		 * ```
		 * Request body
		 * ```json
		 * {
		 * "addressName": "My House",
		 * "addressType": "residential",
		 * "city": "Metropolis",
		 * "complement": "",
		 * "country": "USA",
		 * "postalCode": "11375",
		 * "receiverName": "Clark Kent",
		 * "reference": null,
		 * "state": "MP",
		 * "street": "Baker Street",
		 * "neighborhood": "Upper east side",
		 * "number": "21",
		 * "userId": "7e03m794-a33a-11e9-84rt6-0adfa64s5a8e"
		 * }
		 * ```
		 * Put api/dataentities/{dataEntityName}/documents/{id}
		 * @param {string} dataEntityName Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.
		 * @param {string} _where Filter specification.
		 * @param {string} _schema Name of the schema the document to be created needs to be compliant with.
		 * @param {string} id ID of the Document.
		 * @return {DocumentResponse} OK
		 */
		Updateentiredocument(dataEntityName: string, _where: string | null | undefined, _schema: string | null | undefined, id: string, requestBody: DocumentRequest): Observable<DocumentResponse> {
			return this.http.put<DocumentResponse>(this.baseUri + 'api/dataentities/' + (dataEntityName == null ? '' : encodeURIComponent(dataEntityName)) + '/documents/' + (id == null ? '' : encodeURIComponent(id)) + '&_where=' + (_where == null ? '' : encodeURIComponent(_where)) + '&_schema=' + (_schema == null ? '' : encodeURIComponent(_schema)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Validate document by clusters
		 * Check if a document is present in one or more clusters (specific set of field values).
		 * > There is a limit of five rules per request.
		 * Post api/dataentities/{dataEntityName}/documents/{id}/clusters
		 * @param {string} dataEntityName Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.
		 * @param {string} id ID of the Document.
		 * @param {string} requestBody Request body for validating a document by clusters
		 * @return {void} OK
		 */
		Validatedocumentbyclusters(dataEntityName: string, id: string, requestBody: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/dataentities/' + (dataEntityName == null ? '' : encodeURIComponent(dataEntityName)) + '/documents/' + (id == null ? '' : encodeURIComponent(id)) + '/clusters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List versions
		 * Allows to list the versions of a document.
		 * Get api/dataentities/{dataEntityName}/documents/{id}/versions
		 * @param {string} dataEntityName Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.
		 * @param {string} id ID of the Document.
		 * @param {boolean} load If true, return all the fields in each version of the document
		 * @param {string} fields If `load` is true, the response will return only these specific fields
		 * @return {Array<Listversion>} OK
		 */
		Listversions(dataEntityName: string, id: string, load: boolean | null | undefined, fields: string | null | undefined): Observable<Array<Listversion>> {
			return this.http.get<Array<Listversion>>(this.baseUri + 'api/dataentities/' + (dataEntityName == null ? '' : encodeURIComponent(dataEntityName)) + '/documents/' + (id == null ? '' : encodeURIComponent(id)) + '/versions&load=' + load + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Get version
		 * Returns the version of a document.
		 * Get api/dataentities/{dataEntityName}/documents/{id}/versions/{versionId}
		 * @param {string} dataEntityName Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.
		 * @param {string} id ID of the Document.
		 * @param {string} versionId ID of the version to update.
		 * @return {Getversion} OK
		 */
		Getversion(dataEntityName: string, id: string, versionId: string): Observable<Getversion> {
			return this.http.get<Getversion>(this.baseUri + 'api/dataentities/' + (dataEntityName == null ? '' : encodeURIComponent(dataEntityName)) + '/documents/' + (id == null ? '' : encodeURIComponent(id)) + '/versions/' + (versionId == null ? '' : encodeURIComponent(versionId)), {});
		}

		/**
		 * Put version
		 * Updates document with version values.
		 * Put api/dataentities/{dataEntityName}/documents/{id}/versions/{versionId}
		 * @param {string} dataEntityName Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.
		 * @param {string} id ID of the Document.
		 * @param {string} versionId ID of the version to update
		 * @return {DocumentResponse} OK
		 */
		Putversion(dataEntityName: string, id: string, versionId: string): Observable<DocumentResponse> {
			return this.http.put<DocumentResponse>(this.baseUri + 'api/dataentities/' + (dataEntityName == null ? '' : encodeURIComponent(dataEntityName)) + '/documents/' + (id == null ? '' : encodeURIComponent(id)) + '/versions/' + (versionId == null ? '' : encodeURIComponent(versionId)), null, {});
		}

		/**
		 * Get indices
		 * Returns the list of indices by data entity.
		 * Get api/dataentities/{dataEntityName}/indices
		 * @param {string} dataEntityName Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.
		 * @return {void} OK
		 */
		Getindices(dataEntityName: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/dataentities/' + (dataEntityName == null ? '' : encodeURIComponent(dataEntityName)) + '/indices', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Put indices
		 * Create an index.
		 * Put api/dataentities/{dataEntityName}/indices
		 * @param {string} dataEntityName Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.
		 * @param {PutindicesRequest} requestBody Request body for creating an index
		 * @return {void} OK
		 */
		Putindices(dataEntityName: string, requestBody: PutindicesRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/dataentities/' + (dataEntityName == null ? '' : encodeURIComponent(dataEntityName)) + '/indices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete index by name
		 * Delete an index.
		 * Delete api/dataentities/{dataEntityName}/indices/{index_name}
		 * @param {string} dataEntityName Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.
		 * @param {string} index_name Name of the index.
		 * @return {void} OK
		 */
		Deleteindexbyname(dataEntityName: string, index_name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/dataentities/' + (dataEntityName == null ? '' : encodeURIComponent(dataEntityName)) + '/indices/' + (index_name == null ? '' : encodeURIComponent(index_name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get index by name
		 * Returns an index.
		 * Get api/dataentities/{dataEntityName}/indices/{index_name}
		 * @param {string} dataEntityName Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.
		 * @param {string} index_name Name of the index.
		 * @return {void} OK
		 */
		Getindexbyname(dataEntityName: string, index_name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/dataentities/' + (dataEntityName == null ? '' : encodeURIComponent(dataEntityName)) + '/indices/' + (index_name == null ? '' : encodeURIComponent(index_name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get schemas
		 * Return the schemas saved.
		 * Get api/dataentities/{dataEntityName}/schemas
		 * @param {string} dataEntityName Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.
		 * @return {void} OK
		 */
		Getschemas(dataEntityName: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/dataentities/' + (dataEntityName == null ? '' : encodeURIComponent(dataEntityName)) + '/schemas', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete schema by name
		 * Deletes an existing schema for a given data entity.
		 * Delete api/dataentities/{dataEntityName}/schemas/{schemaName}
		 * @param {string} dataEntityName Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.
		 * @param {string} schemaName Name of the schema.
		 * @return {void} 
		 */
		Deleteschemabyname(dataEntityName: string, schemaName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/dataentities/' + (dataEntityName == null ? '' : encodeURIComponent(dataEntityName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get schema by name
		 * Returns an existing schema for a given data entity.
		 * Get api/dataentities/{dataEntityName}/schemas/{schemaName}
		 * @param {string} dataEntityName Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.
		 * @param {string} schemaName Name of the schema.
		 * @return {void} OK
		 */
		Getschemabyname(dataEntityName: string, schemaName: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/dataentities/' + (dataEntityName == null ? '' : encodeURIComponent(dataEntityName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Save schema by name
		 * Creates or edits a data entity schema. Learn more about [Master Data schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle)
		 * > Note that if you send a `schemaName` that does not exist for that data entity, this request will create it.
		 * This request can also be used to [create or edit Master Data v2 triggers](https://developers.vtex.com/vtex-rest-api/docs/setting-up-triggers-in-master-data-v2).
		 * Put api/dataentities/{dataEntityName}/schemas/{schemaName}
		 * @param {string} dataEntityName Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.
		 * @param {string} schemaName Name of the schema.
		 * @param {SaveschemabynameRequest} requestBody Request body for saving schema
		 * @return {void} OK
		 */
		Saveschemabyname(dataEntityName: string, schemaName: string, requestBody: SaveschemabynameRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/dataentities/' + (dataEntityName == null ? '' : encodeURIComponent(dataEntityName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Scroll documents
		 * In the first request, the `X-VTEX-MD-TOKEN` token will be returned in the header. This token must be passed to the next request in the query string `_token` parameter. The token has a timeout of 10 minutes, which refreshes after each request.
		 * After the token is obtained it is no longer necessary to send the filter or document size per page parameters. You only need to resend the token until the document collection is empty.
		 * > Avoid sending too many requests with wildcards (`*`) in the search parameters or that use the `keyword` parameter. This may lead to this endpoint being temporarily blocked for your account. If this happens you will receive an error with status code `429`.
		 * ## Request examples
		 * First request:
		 * ```
		 * /dataentities/Client/scroll?isCluster=true&_size=250&_fields=email,firstName
		 * ```
		 * Retrieve the token in the header `X-VTEX-MD-TOKEN` from the first request's response and use it to make the next requests.
		 * Subsequent requests:
		 * ```
		 * /dataentities/Client/scroll?_token={tokenValueExample}
		 * ```
		 * Get api/dataentities/{dataEntityName}/scroll
		 * @param {string} dataEntityName Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.
		 * @param {string} _token Value of the header `X-VTEX-MD-TOKEN` returned in your first request. Send its value in this query string in the subsequent requests. The token has a timeout of 10 minutes, which refreshes after each new request.
		 * @param {string} _fields Fields that should be returned by document. Separate fields' names with commas. For example `_fields=email,firstName,document`. You can also use `_all` to fetch all fields.
		 * @param {string} _where Filter specification.
		 * @param {string} _schema Name of the schema the document to be created needs to be compliant with.
		 * @param {string} _keyword String to search. Use quotes for a partial query. For example, `_keyword=Maria` or `_keyword="Maria"`.
		 * @param {string} _sort Sets sorting mode in two parts. The first part is the name of the field you want to sort by. In the second part, use `ASC` for ascending or `DESC` for descending.
		 * @return {void} OK
		 */
		Scrolldocuments(dataEntityName: string, _token: string | null | undefined, _fields: string | null | undefined, _where: string | null | undefined, _schema: string | null | undefined, _keyword: string | null | undefined, _sort: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/dataentities/' + (dataEntityName == null ? '' : encodeURIComponent(dataEntityName)) + '/scroll&_token=' + (_token == null ? '' : encodeURIComponent(_token)) + '&_fields=' + (_fields == null ? '' : encodeURIComponent(_fields)) + '&_where=' + (_where == null ? '' : encodeURIComponent(_where)) + '&_schema=' + (_schema == null ? '' : encodeURIComponent(_schema)) + '&_keyword=' + (_keyword == null ? '' : encodeURIComponent(_keyword)) + '&_sort=' + (_sort == null ? '' : encodeURIComponent(_sort)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search documents
		 * Retrieves documents' information, while choosing which fields will be returned and filtering documents by specific fields.
		 * > The response header `REST-Content-Range` indicates the total amount of results for that specific search. For example, it may return `resources 0-100/136108`, which indicates it has returned results from 0 to 100 of a total 136108.
		 * Below you can see some query examples and learn more about each query parameter.
		 * > Avoid sending too many requests with wildcards (`*`) in the search parameters or that use the `keyword` parameter. This may lead to this endpoint being temporarily blocked for your account. If this happens you will receive an error with status code `503`.
		 * ## Query examples
		 * ### Simple filter
		 * ```
		 * /dataentities/Client/search?email=my@email.com
		 * ```
		 * ### Complex filter
		 * ```
		 * /dataentities/Client/search?_where=(firstName=Jon OR lastName=Smith) OR (createdIn between 2001-01-01 AND 2016-01-01)
		 * ```
		 * ### Date Range
		 * ```
		 * /dataentities/Client/search?_where=createdIn between 2001-01-01 AND 2016-01-01
		 * ```
		 * ### Range numeric fields
		 * ```
		 * /dataentities/Client/search?_where=age between 18 AND 25
		 * ```
		 * ### Partial filter
		 * ```
		 * /dataentities/Client/search?firstName=*Maria*
		 * ```
		 * ### Filter for null values
		 * ```
		 * /dataentities/Client/search?_where=firstName is null
		 * ```
		 * ### Filter for non-null values
		 * ```
		 * /dataentities/Client/search?_where=firstName is not null
		 * ```
		 * ### Filter for difference
		 * ```
		 * /dataentities/Client/search?_where=firstName<>maria
		 * ```
		 * ### Filter greater than or less than
		 * ```
		 * /dataentities/Client/search?_where=number>5
		 * /dataentities/Client/search?_where=date<2001-01-01
		 * ```
		 * Get api/dataentities/{dataEntityName}/search
		 * @param {string} dataEntityName Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.
		 * @param {string} _fields Fields that should be returned by document. Separate fields' names with commas. For example `_fields=email,firstName,document`. You can also use `_all` to fetch all fields.
		 * @param {string} _where Filter specification.
		 * @param {string} _schema Name of the schema the document to be created needs to be compliant with.
		 * @param {string} _keyword String to search. Use quotes for a partial query. For example, `_keyword=Maria` or `_keyword="Maria"`.
		 * @param {string} _sort Sets sorting mode in two parts. The first part is the name of the field you want to sort by. In the second part, use `ASC` for ascending or `DESC` for descending.
		 * @return {void} OK
		 */
		Searchdocuments(dataEntityName: string, _fields: string | null | undefined, _where: string | null | undefined, _schema: string | null | undefined, _keyword: string | null | undefined, _sort: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/dataentities/' + (dataEntityName == null ? '' : encodeURIComponent(dataEntityName)) + '/search&_fields=' + (_fields == null ? '' : encodeURIComponent(_fields)) + '&_where=' + (_where == null ? '' : encodeURIComponent(_where)) + '&_schema=' + (_schema == null ? '' : encodeURIComponent(_schema)) + '&_keyword=' + (_keyword == null ? '' : encodeURIComponent(_keyword)) + '&_sort=' + (_sort == null ? '' : encodeURIComponent(_sort)), { observe: 'response', responseType: 'text' });
		}
	}

}

