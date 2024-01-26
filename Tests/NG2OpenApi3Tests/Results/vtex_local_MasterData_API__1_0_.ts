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

	export interface Createnewdocument {

		/** Required */
		Href: string;

		/** Required */
		Id: string;
	}
	export interface CreatenewdocumentFormProperties {

		/** Required */
		Href: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateCreatenewdocumentFormGroup() {
		return new FormGroup<CreatenewdocumentFormProperties>({
			Href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatenewdocumentRequest {

		/** Required */
		Boolean: boolean;

		/** Required */
		Currency: number;

		/** Required */
		Date: string;

		/** Required */
		Date_Time: string;

		/** Required */
		Decimal: number;

		/** Required */
		Email: string;

		/** Required */
		Integer: number;

		/** Required */
		Long: number;

		/** Required */
		Percent: number;

		/** Required */
		Relationship: string;

		/** Required */
		Text: string;

		/** Required */
		Time: string;

		/** Required */
		URL: string;

		/** Required */
		Varchar10: string;

		/** Required */
		Varchar100: string;

		/** Required */
		Varchar50: string;

		/** Required */
		Varchar750: string;
	}
	export interface CreatenewdocumentRequestFormProperties {

		/** Required */
		Boolean: FormControl<boolean | null | undefined>,

		/** Required */
		Currency: FormControl<number | null | undefined>,

		/** Required */
		Date: FormControl<string | null | undefined>,

		/** Required */
		Date_Time: FormControl<string | null | undefined>,

		/** Required */
		Decimal: FormControl<number | null | undefined>,

		/** Required */
		Email: FormControl<string | null | undefined>,

		/** Required */
		Integer: FormControl<number | null | undefined>,

		/** Required */
		Long: FormControl<number | null | undefined>,

		/** Required */
		Percent: FormControl<number | null | undefined>,

		/** Required */
		Relationship: FormControl<string | null | undefined>,

		/** Required */
		Text: FormControl<string | null | undefined>,

		/** Required */
		Time: FormControl<string | null | undefined>,

		/** Required */
		URL: FormControl<string | null | undefined>,

		/** Required */
		Varchar10: FormControl<string | null | undefined>,

		/** Required */
		Varchar100: FormControl<string | null | undefined>,

		/** Required */
		Varchar50: FormControl<string | null | undefined>,

		/** Required */
		Varchar750: FormControl<string | null | undefined>,
	}
	export function CreateCreatenewdocumentRequestFormGroup() {
		return new FormGroup<CreatenewdocumentRequestFormProperties>({
			Boolean: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Currency: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Date_Time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Decimal: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Integer: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Long: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Percent: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Relationship: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			URL: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Varchar10: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Varchar100: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Varchar50: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Varchar750: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateorupdateentiredocumentRequest {

		/** Required */
		Boolean: boolean;

		/** Required */
		Currency: number;

		/** Required */
		Date: string;

		/** Required */
		Date_Time: string;

		/** Required */
		Decimal: number;

		/** Required */
		Email: string;

		/** Required */
		Integer: number;

		/** Required */
		Long: number;

		/** Required */
		Percent: number;

		/** Required */
		Relationship: string;

		/** Required */
		Text: string;

		/** Required */
		Time: string;

		/** Required */
		URL: string;

		/** Required */
		Varchar10: string;

		/** Required */
		Varchar100: string;

		/** Required */
		Varchar50: string;

		/** Required */
		Varchar750: string;

		/** Required */
		id: string;
	}
	export interface CreateorupdateentiredocumentRequestFormProperties {

		/** Required */
		Boolean: FormControl<boolean | null | undefined>,

		/** Required */
		Currency: FormControl<number | null | undefined>,

		/** Required */
		Date: FormControl<string | null | undefined>,

		/** Required */
		Date_Time: FormControl<string | null | undefined>,

		/** Required */
		Decimal: FormControl<number | null | undefined>,

		/** Required */
		Email: FormControl<string | null | undefined>,

		/** Required */
		Integer: FormControl<number | null | undefined>,

		/** Required */
		Long: FormControl<number | null | undefined>,

		/** Required */
		Percent: FormControl<number | null | undefined>,

		/** Required */
		Relationship: FormControl<string | null | undefined>,

		/** Required */
		Text: FormControl<string | null | undefined>,

		/** Required */
		Time: FormControl<string | null | undefined>,

		/** Required */
		URL: FormControl<string | null | undefined>,

		/** Required */
		Varchar10: FormControl<string | null | undefined>,

		/** Required */
		Varchar100: FormControl<string | null | undefined>,

		/** Required */
		Varchar50: FormControl<string | null | undefined>,

		/** Required */
		Varchar750: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateCreateorupdateentiredocumentRequestFormGroup() {
		return new FormGroup<CreateorupdateentiredocumentRequestFormProperties>({
			Boolean: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Currency: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Date_Time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Decimal: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Integer: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Long: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Percent: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Relationship: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			URL: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Varchar10: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Varchar100: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Varchar50: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Varchar750: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateorupdatepartialdocumentRequest {

		/** Required */
		Boolean: boolean;

		/** Required */
		id: string;
	}
	export interface CreateorupdatepartialdocumentRequestFormProperties {

		/** Required */
		Boolean: FormControl<boolean | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateCreateorupdatepartialdocumentRequestFormGroup() {
		return new FormGroup<CreateorupdatepartialdocumentRequestFormProperties>({
			Boolean: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeletescorebyfieldRequest {

		/** Required */
		key: string;
	}
	export interface DeletescorebyfieldRequestFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,
	}
	export function CreateDeletescorebyfieldRequestFormGroup() {
		return new FormGroup<DeletescorebyfieldRequestFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface Field {

		/** Required */
		displayName: string;

		/** Required */
		isFilter: boolean;

		/** Required */
		isInternal: boolean;

		/** Required */
		isNullable: boolean;

		/** Required */
		isSearchable: boolean;

		/** Required */
		name: string;

		/** Required */
		type: string;
	}
	export interface FieldFormProperties {

		/** Required */
		displayName: FormControl<string | null | undefined>,

		/** Required */
		isFilter: FormControl<boolean | null | undefined>,

		/** Required */
		isInternal: FormControl<boolean | null | undefined>,

		/** Required */
		isNullable: FormControl<boolean | null | undefined>,

		/** Required */
		isSearchable: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateFieldFormGroup() {
		return new FormGroup<FieldFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isFilter: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isInternal: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isNullable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isSearchable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Getdataentityfields {

		/** Required */
		acronym: string;

		/** Required */
		allowGetAll: boolean;

		/** Required */
		fields: Array<Field>;

		/** Required */
		name: string;

		/** Required */
		primaryKeyType: string;
	}
	export interface GetdataentityfieldsFormProperties {

		/** Required */
		acronym: FormControl<string | null | undefined>,

		/** Required */
		allowGetAll: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		primaryKeyType: FormControl<string | null | undefined>,
	}
	export function CreateGetdataentityfieldsFormGroup() {
		return new FormGroup<GetdataentityfieldsFormProperties>({
			acronym: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			allowGetAll: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			primaryKeyType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface Listdataentity {

		/** Required */
		acronym: string;

		/** Required */
		allowGetAll: boolean;

		/** Required */
		name: string;

		/** Required */
		primaryKeyType: string;
	}
	export interface ListdataentityFormProperties {

		/** Required */
		acronym: FormControl<string | null | undefined>,

		/** Required */
		allowGetAll: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		primaryKeyType: FormControl<string | null | undefined>,
	}
	export function CreateListdataentityFormGroup() {
		return new FormGroup<ListdataentityFormProperties>({
			acronym: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			allowGetAll: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			primaryKeyType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Listversion {

		/** Required */
		date: string;

		/** Required */
		id: string;
	}
	export interface ListversionFormProperties {

		/** Required */
		date: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateListversionFormGroup() {
		return new FormGroup<ListversionFormProperties>({
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutscorebyfieldRequest {

		/** Required */
		key: string;

		/** Required */
		point: number;

		/** Required */
		until: string;
	}
	export interface PutscorebyfieldRequestFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		point: FormControl<number | null | undefined>,

		/** Required */
		until: FormControl<string | null | undefined>,
	}
	export function CreatePutscorebyfieldRequestFormGroup() {
		return new FormGroup<PutscorebyfieldRequestFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			point: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			until: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutscoresRequest {

		/** Required */
		field: string;

		/** Required */
		key: string;

		/** Required */
		point: number;

		/** Required */
		until: string;
	}
	export interface PutscoresRequestFormProperties {

		/** Required */
		field: FormControl<string | null | undefined>,

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		point: FormControl<number | null | undefined>,

		/** Required */
		until: FormControl<string | null | undefined>,
	}
	export function CreatePutscoresRequestFormGroup() {
		return new FormGroup<PutscoresRequestFormProperties>({
			field: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			point: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			until: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Putversion {

		/** Required */
		Href: string;

		/** Required */
		Id: string;
	}
	export interface PutversionFormProperties {

		/** Required */
		Href: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreatePutversionFormGroup() {
		return new FormGroup<PutversionFormProperties>({
			Href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateentiredocumentRequest {

		/** Required */
		Boolean: boolean;

		/** Required */
		Currency: number;

		/** Required */
		Date: string;

		/** Required */
		Date_Time: string;

		/** Required */
		Decimal: number;

		/** Required */
		Email: string;

		/** Required */
		Integer: number;

		/** Required */
		Long: number;

		/** Required */
		Percent: number;

		/** Required */
		Relationship: string;

		/** Required */
		Text: string;

		/** Required */
		Time: string;

		/** Required */
		URL: string;

		/** Required */
		Varchar10: string;

		/** Required */
		Varchar100: string;

		/** Required */
		Varchar50: string;

		/** Required */
		Varchar750: string;
	}
	export interface UpdateentiredocumentRequestFormProperties {

		/** Required */
		Boolean: FormControl<boolean | null | undefined>,

		/** Required */
		Currency: FormControl<number | null | undefined>,

		/** Required */
		Date: FormControl<string | null | undefined>,

		/** Required */
		Date_Time: FormControl<string | null | undefined>,

		/** Required */
		Decimal: FormControl<number | null | undefined>,

		/** Required */
		Email: FormControl<string | null | undefined>,

		/** Required */
		Integer: FormControl<number | null | undefined>,

		/** Required */
		Long: FormControl<number | null | undefined>,

		/** Required */
		Percent: FormControl<number | null | undefined>,

		/** Required */
		Relationship: FormControl<string | null | undefined>,

		/** Required */
		Text: FormControl<string | null | undefined>,

		/** Required */
		Time: FormControl<string | null | undefined>,

		/** Required */
		URL: FormControl<string | null | undefined>,

		/** Required */
		Varchar10: FormControl<string | null | undefined>,

		/** Required */
		Varchar100: FormControl<string | null | undefined>,

		/** Required */
		Varchar50: FormControl<string | null | undefined>,

		/** Required */
		Varchar750: FormControl<string | null | undefined>,
	}
	export function CreateUpdateentiredocumentRequestFormGroup() {
		return new FormGroup<UpdateentiredocumentRequestFormProperties>({
			Boolean: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Currency: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Date_Time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Decimal: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Integer: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Long: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Percent: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Relationship: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			URL: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Varchar10: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Varchar100: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Varchar50: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Varchar750: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdatepartialdocumentRequest {

		/** Required */
		Boolean: boolean;
	}
	export interface UpdatepartialdocumentRequestFormProperties {

		/** Required */
		Boolean: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdatepartialdocumentRequestFormGroup() {
		return new FormGroup<UpdatepartialdocumentRequestFormProperties>({
			Boolean: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Usingfilters {

		/** Required */
		campo1: string;

		/** Required */
		campo2: string;

		/** Required */
		campo3: number;
	}
	export interface UsingfiltersFormProperties {

		/** Required */
		campo1: FormControl<string | null | undefined>,

		/** Required */
		campo2: FormControl<string | null | undefined>,

		/** Required */
		campo3: FormControl<number | null | undefined>,
	}
	export function CreateUsingfiltersFormGroup() {
		return new FormGroup<UsingfiltersFormProperties>({
			campo1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			campo2: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			campo3: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ValidateDocumentbyClustersRequest {

		/** Required */
		name: string;

		/** Required */
		rule: string;
	}
	export interface ValidateDocumentbyClustersRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		rule: FormControl<string | null | undefined>,
	}
	export function CreateValidateDocumentbyClustersRequestFormGroup() {
		return new FormGroup<ValidateDocumentbyClustersRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rule: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List data entities
		 * Retrieves the list of existing data entities in the store.
		 * ### Response status code
		 * 1. Status Code `403`: Access not allowed
		 * 2. Status Code `200`: Retrieves data entity list
		 * > All headers listed below are required.
		 * Get api/dataentities
		 * @return {Array<Listdataentity>} 
		 */
		Listdataentities(): Observable<Array<Listdataentity>> {
			return this.http.get<Array<Listdataentity>>(this.baseUri + 'api/dataentities', {});
		}

		/**
		 * Get data entity structure
		 * Returns the data entity structure with its respective fields and data type.
		 * ### Response status code
		 * 1. Status Code `403`: Access not allowed
		 * 2. Status Code `200`: Retrieves data entity structure
		 * > All headers listed below are required.
		 * Get api/dataentities/{acronym}
		 * @param {string} acronym Identifies the kind of data
		 * @return {Getdataentityfields} 
		 */
		Getdataentitystructure(acronym: string): Observable<Getdataentityfields> {
			return this.http.get<Getdataentityfields>(this.baseUri + 'api/dataentities/' + (acronym == null ? '' : encodeURIComponent(acronym)), {});
		}

		/**
		 * Create or update partial document
		 * Patch api/dataentities/{acronym}/documents
		 * @param {string} acronym Identifies the kind of data
		 * @return {void} 
		 */
		Createorupdatepartialdocument(acronym: string, requestBody: string): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'api/dataentities/' + (acronym == null ? '' : encodeURIComponent(acronym)) + '/documents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create new document
		 * Creates documents through a JSON object where the key is the name of the field.
		 * Post api/dataentities/{acronym}/documents
		 * @param {string} acronym Identifies the kind of data
		 * @return {Createnewdocument} 
		 */
		Createnewdocument(acronym: string, requestBody: string): Observable<Createnewdocument> {
			return this.http.post<Createnewdocument>(this.baseUri + 'api/dataentities/' + (acronym == null ? '' : encodeURIComponent(acronym)) + '/documents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create or update entire document
		 * Put api/dataentities/{acronym}/documents
		 * @param {string} acronym Identifies the kind of data
		 * @return {void} 
		 */
		Createorupdateentiredocument(acronym: string, requestBody: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/dataentities/' + (acronym == null ? '' : encodeURIComponent(acronym)) + '/documents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete document
		 * It allows to delete a document.
		 * Delete api/dataentities/{acronym}/documents/{id}
		 * @param {string} acronym Two letter word that identifies the data structure
		 * @param {string} id Id of the document
		 * @return {void} 
		 */
		Deletedocument(acronym: string, id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/dataentities/' + (acronym == null ? '' : encodeURIComponent(acronym)) + '/documents/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get document
		 * Retrieves a document.
		 * Assign the `_fields` parameter in the query string to retrieve the desired fields. If you want to return all the fields use `_fields=_all`.
		 * Get api/dataentities/{acronym}/documents/{id}
		 * @param {string} acronym Two letter word that identifies the data structure
		 * @param {string} id Id of the document
		 * @return {Usingfilters} 
		 */
		Getdocument(acronym: string, id: string): Observable<Usingfilters> {
			return this.http.get<Usingfilters>(this.baseUri + 'api/dataentities/' + (acronym == null ? '' : encodeURIComponent(acronym)) + '/documents/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Update partial document
		 * Patch api/dataentities/{acronym}/documents/{id}
		 * @param {string} acronym Two letter word that identifies the data structure
		 * @param {string} id Id of the document
		 * @return {void} 
		 */
		Updatepartialdocument(acronym: string, id: string, requestBody: string): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'api/dataentities/' + (acronym == null ? '' : encodeURIComponent(acronym)) + '/documents/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update entire document
		 * Put api/dataentities/{acronym}/documents/{id}
		 * @param {string} acronym Two letter word that identifies the data structure
		 * @param {string} id Id of the document
		 * @return {void} 
		 */
		Updateentiredocument(acronym: string, id: string, requestBody: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/dataentities/' + (acronym == null ? '' : encodeURIComponent(acronym)) + '/documents/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Validate Document by Clusters
		 * Post api/dataentities/{acronym}/documents/{id}/clusters
		 * @param {string} acronym Two letter word that identifies the data structure
		 * @param {string} id Id of the document
		 * @return {void} 
		 */
		ValidateDocumentbyClusters(acronym: string, id: string, requestBody: Array<string>): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/dataentities/' + (acronym == null ? '' : encodeURIComponent(acronym)) + '/documents/' + (id == null ? '' : encodeURIComponent(id)) + '/clusters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put scores
		 * It allows punctuate in more than one field and more than one key.
		 * Put api/dataentities/{acronym}/documents/{id}/score
		 * @param {string} acronym Two letter word that identifies the data structure
		 * @param {string} id Id of the document
		 * @return {void} 
		 */
		Putscores(acronym: string, id: string, requestBody: Array<PutscoresRequest>): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/dataentities/' + (acronym == null ? '' : encodeURIComponent(acronym)) + '/documents/' + (id == null ? '' : encodeURIComponent(id)) + '/score', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete score by field
		 * Allows you to remove a key from a specific field.
		 * Delete api/dataentities/{acronym}/documents/{id}/score/{field_name}
		 * @param {string} acronym Two letter word that identifies the data structure
		 * @param {string} id Id of the document
		 * @param {string} field_name Name of the field to remove score from
		 * @return {void} 
		 */
		Deletescorebyfield(acronym: string, id: string, field_name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/dataentities/' + (acronym == null ? '' : encodeURIComponent(acronym)) + '/documents/' + (id == null ? '' : encodeURIComponent(id)) + '/score/{field_name}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Put score by field
		 * It allows to punctuate in a specific field.
		 * Put api/dataentities/{acronym}/documents/{id}/score/{field_name}
		 * @param {string} acronym Two letter word that identifies the data structure
		 * @param {string} id Id of the document
		 * @param {string} field_name Name of the field to score
		 * @return {void} 
		 */
		Putscorebyfield(acronym: string, id: string, field_name: string, requestBody: PutscorebyfieldRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/dataentities/' + (acronym == null ? '' : encodeURIComponent(acronym)) + '/documents/' + (id == null ? '' : encodeURIComponent(id)) + '/score/{field_name}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List versions
		 * Allows to list the versions of a document.
		 * Get api/dataentities/{acronym}/documents/{id}/versions
		 * @param {string} acronym Two letter word that identifies the data structure
		 * @param {string} id Id of the document
		 * @return {Array<Listversion>} 
		 */
		Listversions(acronym: string, id: string): Observable<Array<Listversion>> {
			return this.http.get<Array<Listversion>>(this.baseUri + 'api/dataentities/' + (acronym == null ? '' : encodeURIComponent(acronym)) + '/documents/' + (id == null ? '' : encodeURIComponent(id)) + '/versions', {});
		}

		/**
		 * Get version
		 * Returns the version of a document.
		 * Get api/dataentities/{acronym}/documents/{id}/versions/{versionId}
		 * @param {string} acronym Two letter word that identifies the data structure
		 * @param {string} id Id of the document
		 * @param {string} versionId Id of the version to get
		 * @return {Getversion} 
		 */
		Getversion(acronym: string, id: string, versionId: string): Observable<Getversion> {
			return this.http.get<Getversion>(this.baseUri + 'api/dataentities/' + (acronym == null ? '' : encodeURIComponent(acronym)) + '/documents/' + (id == null ? '' : encodeURIComponent(id)) + '/versions/' + (versionId == null ? '' : encodeURIComponent(versionId)), {});
		}

		/**
		 * Put version
		 * Updates document with version values.
		 * Put api/dataentities/{acronym}/documents/{id}/versions/{versionId}
		 * @param {string} acronym Two letter word that identifies the data structure
		 * @param {string} id Id of the document
		 * @param {string} versionId Id of the version to update
		 * @return {Putversion} 
		 */
		Putversion(acronym: string, id: string, versionId: string): Observable<Putversion> {
			return this.http.put<Putversion>(this.baseUri + 'api/dataentities/' + (acronym == null ? '' : encodeURIComponent(acronym)) + '/documents/' + (id == null ? '' : encodeURIComponent(id)) + '/versions/' + (versionId == null ? '' : encodeURIComponent(versionId)), null, {});
		}

		/**
		 * Retrieve attachment
		 * Use this API to retrieve a file.
		 * Be sure to include the file extension in the name. Like in this example:
		 * ```
		 * /dataentities/CL/documents/123/file/attachments/image.png
		 * ```
		 * Get api/dataentities/{acronym}/documents/{id}/{field}/attachments/{file_name}
		 * @param {string} acronym Two letter word that identifies the data structure
		 * @param {string} id Id of the document
		 * @param {string} field Field to attach the file to, as described in admin
		 * @return {void} 
		 */
		Retrieveattachment(acronym: string, id: string, field: string, file_name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/dataentities/' + (acronym == null ? '' : encodeURIComponent(acronym)) + '/documents/' + (id == null ? '' : encodeURIComponent(id)) + '/' + (field == null ? '' : encodeURIComponent(field)) + '/attachments/{file_name}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Scroll documents
		 * Scrolls through documents according to the query parameter filters.
		 * > Avoid sending too many requests with wildcards (`*`) in the search parameters or that use the `keyword` parameter. This may lead to this endpoint being temporarily blocked for your account. If this happens you will receive an error with status code `429`.
		 * Use all the features of `search` API to perform filters.
		 * In the first request, the `X-VTEX-MD-TOKEN` token will be obtained in the header. This token must be passed to the next request in the query string `_token` parameter. The token has a timeout of 10 minutes, which refreshes after each request.
		 * **ATTENTION:** To inform the number of documents per request, use the query string parameter `_size`, which has the maximum value of 1000.
		 * After the token is obtained it is no longer necessary to send the filter or document size per page parameters. You only need to resend the token until the document collection is empty.
		 * ### First request example:
		 * ```
		 * /dataentities/CL/scroll?isCluster=true&_size=250&_fields=email,firstName
		 * ```
		 * After the first request, retrieve the token in the header `X-VTEX-MD-TOKEN` and make the next requests.
		 * ### Example of subsequent requests:
		 * ```
		 * /dataentities/CL/scroll?_token=tokenvalueexample
		 * ```
		 * Get api/dataentities/{acronym}/scroll
		 * @param {string} acronym Identifies the kind of data
		 * @return {void} 
		 */
		Scrolldocuments(acronym: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/dataentities/' + (acronym == null ? '' : encodeURIComponent(acronym)) + '/scroll', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search documents
		 * Search documents by the query parameters described below.
		 * > Avoid sending too many requests with wildcards (`*`) in the search parameters or that use the `keyword` parameter. This may lead to this endpoint being temporarily blocked for your account. If this happens you will receive an error with status code `503`.
		 * Get api/dataentities/{acronym}/search
		 * @param {string} acronym Identifies the kind of data
		 * @param {string} _fields Fields that will be returned by document
		 * @param {string} _where Specification of filters. As seen below
		 * @param {string} _schema Enter with the name of the schema to filter documents by compatibility of the schema.
		 * @param {string} _keyword String to search
		 * @param {string} _sort Use ASC value to sort ascending or DESC value to sort descending. 
		 * @return {void} Use this endpoint to search Master Data v1 documents with highly customizable filters.
		 * ## Headers
		 * | Name |  |
		 * | -------- | -------- |
		 * | Content-Type | application/json |
		 * | Accept | application/vnd.vtex.ds.v10+json |
		 * | x-vtex-api-appKey | App Key |
		 * | x-vtex-api-appToken | App Token |
		 * | REST-Range | Defines the collection of documents to be returned. A range within the collection limited by 100 documents per query. |
		 * ## Querystring
		 * > Learn more about [Master Data v1 search queries](https://developers.vtex.com/vtex-rest-api/docs/how-the-queries-in-master-data-v1-work).
		 * | Attribute | What it does |
		 * | -------- | -------- |
		 * | _fields | Fields that will be returned by document |
		 * | _where | Specification of filters |
		 * | _keyword | Search in all fields marked as searchable |
		 * | _sort | Sort order |
		 * ## How to fill the querystring attributes
		 * 1. _fields: Use the field names separated by commas. Ex. `_fields=email,firstName,document`.
		 * 2. _where: See the query examples below to learn how to use filters.
		 * 3. _keyword: Enter the value you want to query. Use quotes for a partial query. Ex. `_keyword=Maria` or `_keyword=*Maria*`
		 * 4. _sort: Use `ASC` value to sort ascending or `DESC` value to sort descending. Ex. `_sort=firstName ASC`.
		 * 5. If you want to fetch all fields use the `_all` parameter in the list of response fields. Ex: `_fields=_all`
		 * ## Query Examples:
		 * ### Simple filter
		 * ```
		 * /dataentities/CL/search?email=my@email.com
		 * ```
		 * ### Complex filter
		 * ```
		 * /dataentities/CL/search?_where=(firstName=Jon OR lastName=Smith) OR (createdIn between 2001-01-01 AND 2016-01-01)
		 * ```
		 * ### Filter by range
		 * #### Date Range
		 * ```
		 * /dataentities/CL/search?_where=createdIn between 2001-01-01 AND 2016-01-01
		 * ```
		 * #### Range numeric fields
		 * ```
		 * /dataentities/CL/search?_where=age between 18 AND 25
		 * ```
		 * ### Partial filter
		 * ```
		 * /dataentities/CL/search?firstName=*Maria*
		 * ```
		 * ### Filter for null values
		 * ```
		 * /dataentities/CL/search?_where=firstName is null
		 * ```
		 * ### Filter for non-null values
		 * ```
		 * /dataentities/CL/search?_where=firstName is not null
		 * ```
		 * ### Filter for difference
		 * ```
		 * /dataentities/CL/search?_where=firstName<>maria
		 * ```
		 * ### Filter greater than or less than
		 * ```
		 * /dataentities/CL/search?_where=number>5
		 * /dataentities/CL/search?_where=date<2001-01-01
		 * ```
		 */
		Searchdocuments(acronym: string, _fields: string | null | undefined, _where: string | null | undefined, _schema: string | null | undefined, _keyword: string | null | undefined, _sort: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/dataentities/' + (acronym == null ? '' : encodeURIComponent(acronym)) + '/search&_fields=' + (_fields == null ? '' : encodeURIComponent(_fields)) + '&_where=' + (_where == null ? '' : encodeURIComponent(_where)) + '&_schema=' + (_schema == null ? '' : encodeURIComponent(_schema)) + '&_keyword=' + (_keyword == null ? '' : encodeURIComponent(_keyword)) + '&_sort=' + (_sort == null ? '' : encodeURIComponent(_sort)), { observe: 'response', responseType: 'text' });
		}
	}

}

