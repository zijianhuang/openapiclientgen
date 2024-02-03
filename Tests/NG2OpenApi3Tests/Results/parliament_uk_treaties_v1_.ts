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
		link?: string | null;
		procedureStepId?: string | null;
		procedureStepUri?: string | null;
		sequence?: number | null;
		stepName?: string | null;
		treatyId?: string | null;
		treatyUri?: string | null;
		workpackageProcedureUri?: string | null;
	}
	export interface BusinessItemFormProperties {
		businessItemUri: FormControl<string | null | undefined>,
		houseId: FormControl<string | null | undefined>,
		houseName: FormControl<string | null | undefined>,
		houseUri: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		itemDate: FormControl<Date | null | undefined>,
		link: FormControl<string | null | undefined>,
		procedureStepId: FormControl<string | null | undefined>,
		procedureStepUri: FormControl<string | null | undefined>,
		sequence: FormControl<number | null | undefined>,
		stepName: FormControl<string | null | undefined>,
		treatyId: FormControl<string | null | undefined>,
		treatyUri: FormControl<string | null | undefined>,
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
			link: new FormControl<string | null | undefined>(undefined),
			procedureStepId: new FormControl<string | null | undefined>(undefined),
			procedureStepUri: new FormControl<string | null | undefined>(undefined),
			sequence: new FormControl<number | null | undefined>(undefined),
			stepName: new FormControl<string | null | undefined>(undefined),
			treatyId: new FormControl<string | null | undefined>(undefined),
			treatyUri: new FormControl<string | null | undefined>(undefined),
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
		itemsPerPage?: number | null;
		links?: Array<Link>;
		totalResults?: number | null;
	}
	export interface BusinessItemResourceCollectionFormProperties {
		itemsPerPage: FormControl<number | null | undefined>,
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateBusinessItemResourceCollectionFormGroup() {
		return new FormGroup<BusinessItemResourceCollectionFormProperties>({
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Department {
		id?: number | null;
		name?: string | null;
	}
	export interface DepartmentFormProperties {
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateDepartmentFormGroup() {
		return new FormGroup<DepartmentFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GovernmentOrganisation {
		id?: number | null;
		name?: string | null;
	}
	export interface GovernmentOrganisationFormProperties {
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateGovernmentOrganisationFormGroup() {
		return new FormGroup<GovernmentOrganisationFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GovernmentOrganisationResource {
		links?: Array<Link>;
		value?: GovernmentOrganisation;
	}
	export interface GovernmentOrganisationResourceFormProperties {
	}
	export function CreateGovernmentOrganisationResourceFormGroup() {
		return new FormGroup<GovernmentOrganisationResourceFormProperties>({
		});

	}

	export interface GovernmentOrganisationResourceCollection {
		items?: Array<GovernmentOrganisationResource>;
		itemsPerPage?: number | null;
		links?: Array<Link>;
		totalResults?: number | null;
	}
	export interface GovernmentOrganisationResourceCollectionFormProperties {
		itemsPerPage: FormControl<number | null | undefined>,
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateGovernmentOrganisationResourceCollectionFormGroup() {
		return new FormGroup<GovernmentOrganisationResourceCollectionFormProperties>({
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum House { Commons = 'Commons', Lords = 'Lords' }

	export enum ParliamentaryConclusion { NotConcluded = 'NotConcluded', CanRatify = 'CanRatify', CantRatify = 'CantRatify' }

	export enum ParliamentaryProcess { NotConcluded = 'NotConcluded', Concluded = 'Concluded' }

	export interface SeriesMembership {
		description?: string | null;
		id?: number | null;
	}
	export interface SeriesMembershipFormProperties {
		description: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
	}
	export function CreateSeriesMembershipFormGroup() {
		return new FormGroup<SeriesMembershipFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SeriesMembershipResource {
		links?: Array<Link>;
		value?: SeriesMembership;
	}
	export interface SeriesMembershipResourceFormProperties {
	}
	export function CreateSeriesMembershipResourceFormGroup() {
		return new FormGroup<SeriesMembershipResourceFormProperties>({
		});

	}

	export interface SeriesMembershipResourceCollection {
		items?: Array<SeriesMembershipResource>;
		itemsPerPage?: number | null;
		links?: Array<Link>;
		totalResults?: number | null;
	}
	export interface SeriesMembershipResourceCollectionFormProperties {
		itemsPerPage: FormControl<number | null | undefined>,
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateSeriesMembershipResourceCollectionFormGroup() {
		return new FormGroup<SeriesMembershipResourceCollectionFormProperties>({
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SeriesMembershipType { CountrySeriesMembership = 'CountrySeriesMembership', EuropeanUnionSeriesMembership = 'EuropeanUnionSeriesMembership', MiscellaneousSeriesMembership = 'MiscellaneousSeriesMembership' }

	export interface Treaty {
		commandPaperNumber?: number | null;
		commandPaperPrefix?: string | null;
		commonsLayingDate?: Date | null;
		countrySeriesItemCitation?: string | null;
		countrySeriesMembership?: string | null;
		debateScheduled?: string | null;
		europeanSeriesItemCitation?: string | null;
		europeanUnionSeriesMembership?: string | null;
		id?: string | null;
		layingBodyDepartment?: Department;
		layingBodyDepartmentId?: number | null;
		layingBodyName?: string | null;
		leadDepartment?: Department;
		leadGovernmentOrganisationDepartmentId?: number | null;
		leadGovernmentOrganisationGroupName?: string | null;
		lordsLayingDate?: Date | null;
		miscSeriesItemCitation?: string | null;
		miscellaneousSeriesMembership?: string | null;
		name?: string | null;
		parliamentaryConclusion?: ParliamentaryConclusion | null;
		treatySeriesMembership?: TreatySeriesMembership;
		uri?: string | null;
		webLink?: string | null;
	}
	export interface TreatyFormProperties {
		commandPaperNumber: FormControl<number | null | undefined>,
		commandPaperPrefix: FormControl<string | null | undefined>,
		commonsLayingDate: FormControl<Date | null | undefined>,
		countrySeriesItemCitation: FormControl<string | null | undefined>,
		countrySeriesMembership: FormControl<string | null | undefined>,
		debateScheduled: FormControl<string | null | undefined>,
		europeanSeriesItemCitation: FormControl<string | null | undefined>,
		europeanUnionSeriesMembership: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		layingBodyDepartmentId: FormControl<number | null | undefined>,
		layingBodyName: FormControl<string | null | undefined>,
		leadGovernmentOrganisationDepartmentId: FormControl<number | null | undefined>,
		leadGovernmentOrganisationGroupName: FormControl<string | null | undefined>,
		lordsLayingDate: FormControl<Date | null | undefined>,
		miscSeriesItemCitation: FormControl<string | null | undefined>,
		miscellaneousSeriesMembership: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		parliamentaryConclusion: FormControl<ParliamentaryConclusion | null | undefined>,
		uri: FormControl<string | null | undefined>,
		webLink: FormControl<string | null | undefined>,
	}
	export function CreateTreatyFormGroup() {
		return new FormGroup<TreatyFormProperties>({
			commandPaperNumber: new FormControl<number | null | undefined>(undefined),
			commandPaperPrefix: new FormControl<string | null | undefined>(undefined),
			commonsLayingDate: new FormControl<Date | null | undefined>(undefined),
			countrySeriesItemCitation: new FormControl<string | null | undefined>(undefined),
			countrySeriesMembership: new FormControl<string | null | undefined>(undefined),
			debateScheduled: new FormControl<string | null | undefined>(undefined),
			europeanSeriesItemCitation: new FormControl<string | null | undefined>(undefined),
			europeanUnionSeriesMembership: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			layingBodyDepartmentId: new FormControl<number | null | undefined>(undefined),
			layingBodyName: new FormControl<string | null | undefined>(undefined),
			leadGovernmentOrganisationDepartmentId: new FormControl<number | null | undefined>(undefined),
			leadGovernmentOrganisationGroupName: new FormControl<string | null | undefined>(undefined),
			lordsLayingDate: new FormControl<Date | null | undefined>(undefined),
			miscSeriesItemCitation: new FormControl<string | null | undefined>(undefined),
			miscellaneousSeriesMembership: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parliamentaryConclusion: new FormControl<ParliamentaryConclusion | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			webLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TreatySeriesMembership {
		citation?: string | null;
		seriesMembershipType?: SeriesMembershipType | null;
		uri?: string | null;
	}
	export interface TreatySeriesMembershipFormProperties {
		citation: FormControl<string | null | undefined>,
		seriesMembershipType: FormControl<SeriesMembershipType | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateTreatySeriesMembershipFormGroup() {
		return new FormGroup<TreatySeriesMembershipFormProperties>({
			citation: new FormControl<string | null | undefined>(undefined),
			seriesMembershipType: new FormControl<SeriesMembershipType | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TreatyResource {
		links?: Array<Link>;
		value?: Treaty;
	}
	export interface TreatyResourceFormProperties {
	}
	export function CreateTreatyResourceFormGroup() {
		return new FormGroup<TreatyResourceFormProperties>({
		});

	}

	export interface TreatyResourceCollection {
		items?: Array<TreatyResource>;
		itemsPerPage?: number | null;
		links?: Array<Link>;
		totalResults?: number | null;
	}
	export interface TreatyResourceCollectionFormProperties {
		itemsPerPage: FormControl<number | null | undefined>,
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateTreatyResourceCollectionFormGroup() {
		return new FormGroup<TreatyResourceCollectionFormProperties>({
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns business item by ID.
		 * Get api/BusinessItem/{id}
		 * @param {string} id Business item with the ID specified
		 * @return {BusinessItemResource} The requested business item
		 */
		GetBusinessItemById(id: string): Observable<BusinessItemResource> {
			return this.http.get<BusinessItemResource>(this.baseUri + 'api/BusinessItem/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Returns all government organisations.
		 * Get api/GovernmentOrganisation
		 * @return {GovernmentOrganisationResourceCollection} Success
		 */
		GetOrganisations(): Observable<GovernmentOrganisationResourceCollection> {
			return this.http.get<GovernmentOrganisationResourceCollection>(this.baseUri + 'api/GovernmentOrganisation', {});
		}

		/**
		 * Returns all series memberships.
		 * Get api/SeriesMembership
		 * @return {SeriesMembershipResourceCollection} Success
		 */
		GetSeriesMemberships(): Observable<SeriesMembershipResourceCollection> {
			return this.http.get<SeriesMembershipResourceCollection>(this.baseUri + 'api/SeriesMembership', {});
		}

		/**
		 * Returns a list of treaties.
		 * Get api/Treaty
		 * @param {string} SearchText Treaties which contains the search text specified
		 * @param {number} GovernmentOrganisationId Treaties with the government organisation id specified
		 * @param {SeriesMembershipType} Series Treaties with the series membership type specified
		 * @param {ParliamentaryProcess} ParliamentaryProcess Treaties where the parliamentary process is concluded or notconcluded
		 * @param {boolean} DebateScheduled Treaties which contain a scheduled debate
		 * @param {boolean} MotionToNotRatify Treaties which contain a motion to not ratify
		 * @param {boolean} RecommendedNotRatify Treaties which are recommended to not ratify
		 * @param {BusinessItemHouseHouse} House Treaties which are laid in the specified house
		 * @param {number} Skip The number of records to skip from the first, default is 0
		 * @param {number} Take The number of records to return, default is 20
		 * @return {TreatyResourceCollection} A list of treaties
		 */
		GetTreaties(SearchText: string | null | undefined, GovernmentOrganisationId: number | null | undefined, Series: SeriesMembershipType | null | undefined, ParliamentaryProcess: ParliamentaryProcess | null | undefined, DebateScheduled: boolean | null | undefined, MotionToNotRatify: boolean | null | undefined, RecommendedNotRatify: boolean | null | undefined, House: BusinessItemHouseHouse | null | undefined, Skip: number | null | undefined, Take: number | null | undefined): Observable<TreatyResourceCollection> {
			return this.http.get<TreatyResourceCollection>(this.baseUri + 'api/Treaty?SearchText=' + (SearchText == null ? '' : encodeURIComponent(SearchText)) + '&GovernmentOrganisationId=' + GovernmentOrganisationId + '&Series=' + Series + '&ParliamentaryProcess=' + ParliamentaryProcess + '&DebateScheduled=' + DebateScheduled + '&MotionToNotRatify=' + MotionToNotRatify + '&RecommendedNotRatify=' + RecommendedNotRatify + '&House=' + House + '&Skip=' + Skip + '&Take=' + Take, {});
		}

		/**
		 * Returns a treaty by ID.
		 * Get api/Treaty/{id}
		 * @param {string} id Treaty with ID specified
		 * @return {TreatyResource} Details of the requested treaty
		 */
		GetTreatyById(id: string): Observable<TreatyResource> {
			return this.http.get<TreatyResource>(this.baseUri + 'api/Treaty/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Returns business items belonging to the treaty with ID.
		 * Get api/Treaty/{id}/BusinessItems
		 * @param {string} id Business items belonging to treaty with the ID specified
		 * @return {BusinessItemResourceCollection} The business items for the requested treaty
		 */
		GetBusinessItemsByTreatyId(id: string): Observable<BusinessItemResourceCollection> {
			return this.http.get<BusinessItemResourceCollection>(this.baseUri + 'api/Treaty/' + (id == null ? '' : encodeURIComponent(id)) + '/BusinessItems', {});
		}
	}

}

