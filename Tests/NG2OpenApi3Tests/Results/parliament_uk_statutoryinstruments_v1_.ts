import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BusinessItem {
		businessItemUri?: string | null;
		houseId?: string | null;
		houseName?: string | null;
		houseUri?: string | null;
		houses?: Array<BusinessItemHouse>;
		id?: string | null;
		itemDate?: Date | null;
		laidPaperType?: BusinessItemLaidPaperType | null;
		link?: string | null;
		procedureStepId?: string | null;
		procedureStepUri?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sequence?: number | null;
		statutoryInstrumentId?: string | null;
		statutoryInstrumentUri?: string | null;
		stepName?: string | null;
		workpackageProcedureUri?: string | null;
	}
	export interface BusinessItemFormProperties {
		businessItemUri: FormControl<string | null | undefined>,
		houseId: FormControl<string | null | undefined>,
		houseName: FormControl<string | null | undefined>,
		houseUri: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		itemDate: FormControl<Date | null | undefined>,
		laidPaperType: FormControl<BusinessItemLaidPaperType | null | undefined>,
		link: FormControl<string | null | undefined>,
		procedureStepId: FormControl<string | null | undefined>,
		procedureStepUri: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sequence: FormControl<number | null | undefined>,
		statutoryInstrumentId: FormControl<string | null | undefined>,
		statutoryInstrumentUri: FormControl<string | null | undefined>,
		stepName: FormControl<string | null | undefined>,
		workpackageProcedureUri: FormControl<string | null | undefined>,
	}
	export function CreateBusinessItemFormGroup() {
		return new FormGroup<BusinessItemFormProperties>({
			businessItemUri: new FormControl<string | null | undefined>(undefined),
			houseId: new FormControl<string | null | undefined>(undefined),
			houseName: new FormControl<string | null | undefined>(undefined),
			houseUri: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			itemDate: new FormControl<Date | null | undefined>(undefined),
			laidPaperType: new FormControl<BusinessItemLaidPaperType | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			procedureStepId: new FormControl<string | null | undefined>(undefined),
			procedureStepUri: new FormControl<string | null | undefined>(undefined),
			sequence: new FormControl<number | null | undefined>(undefined),
			statutoryInstrumentId: new FormControl<string | null | undefined>(undefined),
			statutoryInstrumentUri: new FormControl<string | null | undefined>(undefined),
			stepName: new FormControl<string | null | undefined>(undefined),
			workpackageProcedureUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BusinessItemHouse {
		house?: BusinessItemHouseHouse | null;
		name?: string | null;
	}
	export interface BusinessItemHouseFormProperties {
		house: FormControl<BusinessItemHouseHouse | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateBusinessItemHouseFormGroup() {
		return new FormGroup<BusinessItemHouseFormProperties>({
			house: new FormControl<BusinessItemHouseHouse | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BusinessItemHouseHouse { Commons = 'Commons', Lords = 'Lords' }

	export enum BusinessItemLaidPaperType { StatutoryInstrument = 'StatutoryInstrument', ProposedNegative = 'ProposedNegative' }

	export interface BusinessItemResource {
		links?: Array<Link>;
		value?: BusinessItem;
	}
	export interface BusinessItemResourceFormProperties {
	}
	export function CreateBusinessItemResourceFormGroup() {
		return new FormGroup<BusinessItemResourceFormProperties>({
		});

	}

	export interface Link {
		href?: string | null;
		method?: string | null;
		rel?: string | null;
	}
	export interface LinkFormProperties {
		href: FormControl<string | null | undefined>,
		method: FormControl<string | null | undefined>,
		rel: FormControl<string | null | undefined>,
	}
	export function CreateLinkFormGroup() {
		return new FormGroup<LinkFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			rel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BusinessItemResourceCollection {
		items?: Array<BusinessItemResource>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		itemsPerPage?: number | null;
		links?: Array<Link>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalResults?: number | null;
	}
	export interface BusinessItemResourceCollectionFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		itemsPerPage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateBusinessItemResourceCollectionFormGroup() {
		return new FormGroup<BusinessItemResourceCollectionFormProperties>({
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Department {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		departmentId?: number | null;
		id?: string | null;
		name?: string | null;
	}
	export interface DepartmentFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		departmentId: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateDepartmentFormGroup() {
		return new FormGroup<DepartmentFormProperties>({
			departmentId: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum House { Commons = 'Commons', Lords = 'Lords' }

	export interface LaidPaperSummary {
		id?: string | null;
		name?: string | null;
	}
	export interface LaidPaperSummaryFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateLaidPaperSummaryFormGroup() {
		return new FormGroup<LaidPaperSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LaidPaperType { StatutoryInstrument = 'StatutoryInstrument', ProposedNegative = 'ProposedNegative' }

	export interface LayingBody {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		departmentId?: number | null;
		id?: string | null;
		name?: string | null;
	}
	export interface LayingBodyFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		departmentId: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateLayingBodyFormGroup() {
		return new FormGroup<LayingBodyFormProperties>({
			departmentId: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LayingBodyResource {
		links?: Array<Link>;
		value?: LayingBody;
	}
	export interface LayingBodyResourceFormProperties {
	}
	export function CreateLayingBodyResourceFormGroup() {
		return new FormGroup<LayingBodyResourceFormProperties>({
		});

	}

	export interface LayingBodyResourceCollection {
		items?: Array<LayingBodyResource>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		itemsPerPage?: number | null;
		links?: Array<Link>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalResults?: number | null;
	}
	export interface LayingBodyResourceCollectionFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		itemsPerPage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateLayingBodyResourceCollectionFormGroup() {
		return new FormGroup<LayingBodyResourceCollectionFormProperties>({
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ParliamentaryProcess { NotConcluded = 'NotConcluded', Concluded = 'Concluded' }

	export interface ProblemDetails {
		detail?: string | null;
		instance?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		status?: number | null;
		title?: string | null;
		type?: string | null;
	}
	export interface ProblemDetailsFormProperties {
		detail: FormControl<string | null | undefined>,
		instance: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		status: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateProblemDetailsFormGroup() {
		return new FormGroup<ProblemDetailsFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			instance: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Procedure {
		id?: string | null;
		name?: string | null;
		uri?: string | null;
	}
	export interface ProcedureFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateProcedureFormGroup() {
		return new FormGroup<ProcedureFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProcedureDetails {
		description?: string | null;
		id?: string | null;
		name?: string | null;
		uri?: string | null;
	}
	export interface ProcedureDetailsFormProperties {
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateProcedureDetailsFormGroup() {
		return new FormGroup<ProcedureDetailsFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProcedureDetailsResource {
		links?: Array<Link>;
		value?: ProcedureDetails;
	}
	export interface ProcedureDetailsResourceFormProperties {
	}
	export function CreateProcedureDetailsResourceFormGroup() {
		return new FormGroup<ProcedureDetailsResourceFormProperties>({
		});

	}

	export interface ProcedureResource {
		links?: Array<Link>;
		value?: Procedure;
	}
	export interface ProcedureResourceFormProperties {
	}
	export function CreateProcedureResourceFormGroup() {
		return new FormGroup<ProcedureResourceFormProperties>({
		});

	}

	export interface ProcedureResourceCollection {
		items?: Array<ProcedureResource>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		itemsPerPage?: number | null;
		links?: Array<Link>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalResults?: number | null;
	}
	export interface ProcedureResourceCollectionFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		itemsPerPage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateProcedureResourceCollectionFormGroup() {
		return new FormGroup<ProcedureResourceCollectionFormProperties>({
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProposedNegativeStatutoryInstrument {
		commonsLayingDate?: Date | null;
		commonsPublishedDate?: Date | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		departmentId?: number | null;
		id?: string | null;
		layingBodyDepartment?: Department;
		layingBodyId?: string | null;
		layingBodyName?: string | null;
		link?: string | null;
		lordsLayingDate?: Date | null;
		lordsPublishedDate?: Date | null;
		name?: string | null;
		procedure?: Procedure;
		procedureName?: string | null;
		procedureUri?: string | null;
		statutoryInstrument?: LaidPaperSummary;
		statutoryInstrumentPaperId?: string | null;
		statutoryInstrumentPaperName?: string | null;
		uri?: string | null;
	}
	export interface ProposedNegativeStatutoryInstrumentFormProperties {
		commonsLayingDate: FormControl<Date | null | undefined>,
		commonsPublishedDate: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		departmentId: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		layingBodyId: FormControl<string | null | undefined>,
		layingBodyName: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		lordsLayingDate: FormControl<Date | null | undefined>,
		lordsPublishedDate: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		procedureName: FormControl<string | null | undefined>,
		procedureUri: FormControl<string | null | undefined>,
		statutoryInstrumentPaperId: FormControl<string | null | undefined>,
		statutoryInstrumentPaperName: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateProposedNegativeStatutoryInstrumentFormGroup() {
		return new FormGroup<ProposedNegativeStatutoryInstrumentFormProperties>({
			commonsLayingDate: new FormControl<Date | null | undefined>(undefined),
			commonsPublishedDate: new FormControl<Date | null | undefined>(undefined),
			departmentId: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			layingBodyId: new FormControl<string | null | undefined>(undefined),
			layingBodyName: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			lordsLayingDate: new FormControl<Date | null | undefined>(undefined),
			lordsPublishedDate: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			procedureName: new FormControl<string | null | undefined>(undefined),
			procedureUri: new FormControl<string | null | undefined>(undefined),
			statutoryInstrumentPaperId: new FormControl<string | null | undefined>(undefined),
			statutoryInstrumentPaperName: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProposedNegativeStatutoryInstrumentResource {
		links?: Array<Link>;
		value?: ProposedNegativeStatutoryInstrument;
	}
	export interface ProposedNegativeStatutoryInstrumentResourceFormProperties {
	}
	export function CreateProposedNegativeStatutoryInstrumentResourceFormGroup() {
		return new FormGroup<ProposedNegativeStatutoryInstrumentResourceFormProperties>({
		});

	}

	export interface ProposedNegativeStatutoryInstrumentResourceCollection {
		items?: Array<ProposedNegativeStatutoryInstrumentResource>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		itemsPerPage?: number | null;
		links?: Array<Link>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalResults?: number | null;
	}
	export interface ProposedNegativeStatutoryInstrumentResourceCollectionFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		itemsPerPage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateProposedNegativeStatutoryInstrumentResourceCollectionFormGroup() {
		return new FormGroup<ProposedNegativeStatutoryInstrumentResourceCollectionFormProperties>({
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StatutoryInstrument {
		commonsLayingDate?: Date | null;
		commonsPublishedDate?: Date | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		departmentId?: number | null;
		id?: string | null;
		layingBodyDepartment?: Department;
		layingBodyId?: string | null;
		layingBodyName?: string | null;
		link?: string | null;
		lordsLayingDate?: Date | null;
		lordsPublishedDate?: Date | null;
		name?: string | null;
		paperComingIntoForceDate?: Date | null;
		paperComingIntoForceNote?: string | null;
		paperMadeDate?: Date | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		paperNumber?: number | null;
		paperPrefix?: string | null;
		paperYear?: string | null;
		procedure?: Procedure;
		procedureName?: string | null;
		procedureUri?: string | null;
		proposedNegativeStatutoryInstrument?: LaidPaperSummary;
		proposedNegativeStatutoryInstrumentPaperId?: string | null;
		proposedNegativeStatutoryInstrumentPaperName?: string | null;
		uri?: string | null;
	}
	export interface StatutoryInstrumentFormProperties {
		commonsLayingDate: FormControl<Date | null | undefined>,
		commonsPublishedDate: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		departmentId: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		layingBodyId: FormControl<string | null | undefined>,
		layingBodyName: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		lordsLayingDate: FormControl<Date | null | undefined>,
		lordsPublishedDate: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		paperComingIntoForceDate: FormControl<Date | null | undefined>,
		paperComingIntoForceNote: FormControl<string | null | undefined>,
		paperMadeDate: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		paperNumber: FormControl<number | null | undefined>,
		paperPrefix: FormControl<string | null | undefined>,
		paperYear: FormControl<string | null | undefined>,
		procedureName: FormControl<string | null | undefined>,
		procedureUri: FormControl<string | null | undefined>,
		proposedNegativeStatutoryInstrumentPaperId: FormControl<string | null | undefined>,
		proposedNegativeStatutoryInstrumentPaperName: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateStatutoryInstrumentFormGroup() {
		return new FormGroup<StatutoryInstrumentFormProperties>({
			commonsLayingDate: new FormControl<Date | null | undefined>(undefined),
			commonsPublishedDate: new FormControl<Date | null | undefined>(undefined),
			departmentId: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			layingBodyId: new FormControl<string | null | undefined>(undefined),
			layingBodyName: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			lordsLayingDate: new FormControl<Date | null | undefined>(undefined),
			lordsPublishedDate: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			paperComingIntoForceDate: new FormControl<Date | null | undefined>(undefined),
			paperComingIntoForceNote: new FormControl<string | null | undefined>(undefined),
			paperMadeDate: new FormControl<Date | null | undefined>(undefined),
			paperNumber: new FormControl<number | null | undefined>(undefined),
			paperPrefix: new FormControl<string | null | undefined>(undefined),
			paperYear: new FormControl<string | null | undefined>(undefined),
			procedureName: new FormControl<string | null | undefined>(undefined),
			procedureUri: new FormControl<string | null | undefined>(undefined),
			proposedNegativeStatutoryInstrumentPaperId: new FormControl<string | null | undefined>(undefined),
			proposedNegativeStatutoryInstrumentPaperName: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StatutoryInstrumentResource {
		links?: Array<Link>;
		value?: StatutoryInstrument;
	}
	export interface StatutoryInstrumentResourceFormProperties {
	}
	export function CreateStatutoryInstrumentResourceFormGroup() {
		return new FormGroup<StatutoryInstrumentResourceFormProperties>({
		});

	}

	export interface StatutoryInstrumentResourceCollection {
		items?: Array<StatutoryInstrumentResource>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		itemsPerPage?: number | null;
		links?: Array<Link>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalResults?: number | null;
	}
	export interface StatutoryInstrumentResourceCollectionFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		itemsPerPage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateStatutoryInstrumentResourceCollectionFormGroup() {
		return new FormGroup<StatutoryInstrumentResourceCollectionFormProperties>({
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum StatutoryInstrumentType { DraftAffirmative = 'DraftAffirmative', DraftNegative = 'DraftNegative', MadeAffirmative = 'MadeAffirmative', MadeNegative = 'MadeNegative' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns business item by ID.
		 * Get api/v1/BusinessItem/{id}
		 * @param {string} id Business item with the ID specified
		 * @param {BusinessItemLaidPaperType} LaidPaper Business item by laid paper type
		 * @return {BusinessItemResource} The requested business item
		 */
		GetBusinessItemById(id: string, LaidPaper: BusinessItemLaidPaperType | null | undefined): Observable<BusinessItemResource> {
			return this.http.get<BusinessItemResource>(this.baseUri + 'api/v1/BusinessItem/' + (id == null ? '' : encodeURIComponent(id)) + '&LaidPaper=' + LaidPaper, {});
		}

		/**
		 * Returns all laying bodies.
		 * Get api/v1/LayingBody
		 * @return {LayingBodyResourceCollection} Success
		 */
		GetLayingBodies(): Observable<LayingBodyResourceCollection> {
			return this.http.get<LayingBodyResourceCollection>(this.baseUri + 'api/v1/LayingBody', {});
		}

		/**
		 * Returns all procedures.
		 * Get api/v1/Procedure
		 * @return {ProcedureResourceCollection} Success
		 */
		GetProceduresV1(): Observable<ProcedureResourceCollection> {
			return this.http.get<ProcedureResourceCollection>(this.baseUri + 'api/v1/Procedure', {});
		}

		/**
		 * Returns procedure by ID.
		 * Get api/v1/Procedure/{id}
		 * @param {string} id Procedure with the ID specified
		 * @return {ProcedureDetailsResource} Success
		 */
		GetProceduresByIdV1(id: string): Observable<ProcedureDetailsResource> {
			return this.http.get<ProcedureDetailsResource>(this.baseUri + 'api/v1/Procedure/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Returns a list of proposed negative statutory instruments.
		 * Get api/v1/ProposedNegativeStatutoryInstrument
		 * @param {string} Name Proposed negative statutory instruments with the name provided
		 * @param {boolean} RecommendedForProcedureChange Proposed negative statutory instruments recommended for procedure change
		 * @param {number} DepartmentId Proposed negative statutory instruments with the department ID specified
		 *     Minimum: 1    Maximum: 2147483647
		 * @param {string} LayingBodyId Proposed negative statutory instruments with the laying body ID specified
		 * @param {number} Skip The number of records to skip from the first, default is 0
		 *     Minimum: 0    Maximum: 2147483647
		 * @param {number} Take The number of records to return, default is 20
		 *     Minimum: 0    Maximum: 2147483647
		 * @return {ProposedNegativeStatutoryInstrumentResourceCollection} Success
		 */
		GetProposedNegativeStatutoryInstruments(Name: string | null | undefined, RecommendedForProcedureChange: boolean | null | undefined, DepartmentId: number | null | undefined, LayingBodyId: string | null | undefined, Skip: number | null | undefined, Take: number | null | undefined): Observable<ProposedNegativeStatutoryInstrumentResourceCollection> {
			return this.http.get<ProposedNegativeStatutoryInstrumentResourceCollection>(this.baseUri + 'api/v1/ProposedNegativeStatutoryInstrument?Name=' + (Name == null ? '' : encodeURIComponent(Name)) + '&RecommendedForProcedureChange=' + RecommendedForProcedureChange + '&DepartmentId=' + DepartmentId + '&LayingBodyId=' + (LayingBodyId == null ? '' : encodeURIComponent(LayingBodyId)) + '&Skip=' + Skip + '&Take=' + Take, {});
		}

		/**
		 * Returns proposed negative statutory instrument by ID.
		 * Get api/v1/ProposedNegativeStatutoryInstrument/{id}
		 * @param {string} id Proposed negative statutory instrument with the ID specified
		 * @return {ProposedNegativeStatutoryInstrumentResource} Success
		 */
		GetProposedNegativeStatutoryInstrumentById(id: string): Observable<ProposedNegativeStatutoryInstrumentResource> {
			return this.http.get<ProposedNegativeStatutoryInstrumentResource>(this.baseUri + 'api/v1/ProposedNegativeStatutoryInstrument/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Returns business items belonging to a proposed negative statutory instrument.
		 * Get api/v1/ProposedNegativeStatutoryInstrument/{id}/BusinessItems
		 * @param {string} id Business items belonging to proposed negative statutory instrument with the ID specified
		 * @return {BusinessItemResourceCollection} Success
		 */
		GetBusinessItemsByProposedNegativeStatutoryInstrumentId(id: string): Observable<BusinessItemResourceCollection> {
			return this.http.get<BusinessItemResourceCollection>(this.baseUri + 'api/v1/ProposedNegativeStatutoryInstrument/' + (id == null ? '' : encodeURIComponent(id)) + '/BusinessItems', {});
		}

		/**
		 * Returns a list of statutory instruments.
		 * Get api/v1/StatutoryInstrument
		 * @param {string} Name Statutory instruments with the name specified
		 * @param {StatutoryInstrumentType} StatutoryInstrumentType Statutory instruments where the statutory instrument type is the type provided
		 * @param {boolean} ScheduledDebate Statutory instrument which contains a scheduled debate
		 * @param {boolean} MotionToStop Statutory instruments which contains a motion to stop
		 * @param {boolean} ConcernsRaisedByCommittee Statutory instruments which contains concerns raised by committee
		 * @param {ParliamentaryProcess} ParliamentaryProcessConcluded Statutory instruments where the parliamentary process is concluded or notconcluded
		 * @param {number} DepartmentId Statutory instruments with the department ID specified
		 *     Minimum: 1    Maximum: 2147483647
		 * @param {string} LayingBodyId Statutory instruments with the laying body ID specified
		 * @param {BusinessItemHouseHouse} House Statutory instruments laid in the house specified
		 * @param {number} Skip The number of records to skip from the first, default is 0
		 *     Minimum: 0    Maximum: 2147483647
		 * @param {number} Take The number of records to return, default is 20
		 *     Minimum: 0    Maximum: 2147483647
		 * @return {StatutoryInstrumentResourceCollection} Success
		 */
		GetStatutoryInstruments(Name: string | null | undefined, StatutoryInstrumentType: StatutoryInstrumentType | null | undefined, ScheduledDebate: boolean | null | undefined, MotionToStop: boolean | null | undefined, ConcernsRaisedByCommittee: boolean | null | undefined, ParliamentaryProcessConcluded: ParliamentaryProcess | null | undefined, DepartmentId: number | null | undefined, LayingBodyId: string | null | undefined, House: BusinessItemHouseHouse | null | undefined, Skip: number | null | undefined, Take: number | null | undefined): Observable<StatutoryInstrumentResourceCollection> {
			return this.http.get<StatutoryInstrumentResourceCollection>(this.baseUri + 'api/v1/StatutoryInstrument?Name=' + (Name == null ? '' : encodeURIComponent(Name)) + '&StatutoryInstrumentType=' + StatutoryInstrumentType + '&ScheduledDebate=' + ScheduledDebate + '&MotionToStop=' + MotionToStop + '&ConcernsRaisedByCommittee=' + ConcernsRaisedByCommittee + '&ParliamentaryProcessConcluded=' + ParliamentaryProcessConcluded + '&DepartmentId=' + DepartmentId + '&LayingBodyId=' + (LayingBodyId == null ? '' : encodeURIComponent(LayingBodyId)) + '&House=' + House + '&Skip=' + Skip + '&Take=' + Take, {});
		}

		/**
		 * Returns a statutory instrument by ID.
		 * Get api/v1/StatutoryInstrument/{id}
		 * @param {string} id Statutory instrument with the ID specified
		 * @return {StatutoryInstrumentResource} Success
		 */
		GetStatutoryInstrumentById(id: string): Observable<StatutoryInstrumentResource> {
			return this.http.get<StatutoryInstrumentResource>(this.baseUri + 'api/v1/StatutoryInstrument/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Returns business items belonging to statutory instrument with ID.
		 * Get api/v1/StatutoryInstrument/{id}/BusinessItems
		 * @param {string} id Business items belonging to statutory instrument with the ID specified
		 * @return {BusinessItemResourceCollection} Success
		 */
		GetBusinessItemsByStatutoryInstrumentId(id: string): Observable<BusinessItemResourceCollection> {
			return this.http.get<BusinessItemResourceCollection>(this.baseUri + 'api/v1/StatutoryInstrument/' + (id == null ? '' : encodeURIComponent(id)) + '/BusinessItems', {});
		}
	}

}

