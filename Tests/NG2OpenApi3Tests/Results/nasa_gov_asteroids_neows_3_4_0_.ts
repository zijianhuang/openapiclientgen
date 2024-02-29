import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents a file associated with a library item. */
	export interface File {

		/**
		 * Unique identifier for the file.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/** The size of the file in bytes. */
		size?: string | null;

		/** The TechPort URL at which the file is accessible for download. */
		url?: string | null;
	}

	/** Represents a file associated with a library item. */
	export interface FileFormProperties {

		/**
		 * Unique identifier for the file.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** The size of the file in bytes. */
		size: FormControl<string | null | undefined>,

		/** The TechPort URL at which the file is accessible for download. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateFileFormGroup() {
		return new FormGroup<FileFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a specific library item that is part of this project. */
	export interface LibraryItem {

		/** Date the library item was completed. */
		completionDate?: string | null;

		/** Description of the library item. */
		description?: string | null;

		/** External URL for the library item. */
		externalUrl?: string | null;

		/** List of files associated with the library item. */
		files?: Array<File>;

		/**
		 * Unique identifier for the library item.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/** Publisher of the library item. */
		publishedBy?: string | null;

		/** Date the library item was published. */
		publishedDate?: string | null;

		/** Title of the library item */
		title?: string | null;

		/** Identifies the type of library item, e.g. Image */
		type?: string | null;
	}

	/** Represents a specific library item that is part of this project. */
	export interface LibraryItemFormProperties {

		/** Date the library item was completed. */
		completionDate: FormControl<string | null | undefined>,

		/** Description of the library item. */
		description: FormControl<string | null | undefined>,

		/** External URL for the library item. */
		externalUrl: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the library item.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** Publisher of the library item. */
		publishedBy: FormControl<string | null | undefined>,

		/** Date the library item was published. */
		publishedDate: FormControl<string | null | undefined>,

		/** Title of the library item */
		title: FormControl<string | null | undefined>,

		/** Identifies the type of library item, e.g. Image */
		type: FormControl<string | null | undefined>,
	}
	export function CreateLibraryItemFormGroup() {
		return new FormGroup<LibraryItemFormProperties>({
			completionDate: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			externalUrl: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			publishedBy: new FormControl<string | null | undefined>(undefined),
			publishedDate: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A NASA center/facility associated with an project. */
	export interface Organization {

		/** The acronym of the organization. */
		acronym?: string | null;

		/** The city in which the organization is located. */
		city?: string | null;

		/** The name of the organization. */
		name?: string | null;

		/** The state in which the organization is located. */
		state?: string | null;
	}

	/** A NASA center/facility associated with an project. */
	export interface OrganizationFormProperties {

		/** The acronym of the organization. */
		acronym: FormControl<string | null | undefined>,

		/** The city in which the organization is located. */
		city: FormControl<string | null | undefined>,

		/** The name of the organization. */
		name: FormControl<string | null | undefined>,

		/** The state in which the organization is located. */
		state: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationFormGroup() {
		return new FormGroup<OrganizationFormProperties>({
			acronym: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Top-level TechPort object representing a NASA technology project and its associated data. */
	export interface Project {

		/** Abbreviated name of the project. */
		acronym?: string | null;

		/** List of additional and cross-cutting technology areas associated with the project. */
		additionalTas?: Array<TechnologyArea>;

		/** Describes the benefits offered to NASA funded and planned missions, unfunded or planned missions, commercial space industry, and to the nation. */
		benefits?: string | null;

		/** List of document files or links to the project final report closeout documentation. */
		closeoutDocuments?: Array<string>;

		/** The project closeout summary excerpt. */
		closeoutSummary?: string | null;

		/** Other government agencies, NASA Mission Directoratres, universities, or commercial entities performing contributing resources to this project. */
		coFundingPartners?: Array<Organization>;

		/** Names of the additional investigators who are scientists or engineers for this project. */
		coInvestigators?: Array<string>;

		/** A detailed description of the project. */
		description?: string | null;

		/** List of the NASA destinations the technology on this project helps achieve. */
		destinations?: Array<string>;

		/** The month and year the project is expected to complete its work. */
		endDate?: string | null;

		/**
		 * Unique identifier for the project.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/**
		 * ISO 8601 full-date in the format YYYY-MM-DD describing the last time this project was updated.
		 * Type: DateOnly
		 */
		lastUpdated?: Date | null;

		/** A NASA center/facility associated with an project. */
		leadOrganization?: Organization;

		/** List of library items in the project library. */
		libraryItems?: Array<LibraryItem>;

		/** List of primary technolgy areas (from the NASA Technology Roadmap) associated with the project. */
		primaryTas?: Array<TechnologyArea>;

		/** Names of the Principal Investigators who are the lead scientists or engineers for this project. */
		principalInvestigators?: Array<string>;

		/** Names of the Program Directors responsible for the management of this project. */
		programDirectors?: Array<string>;

		/** Names of the Program Managers responsible for the management of this project. */
		programManagers?: Array<string>;

		/** Names of the Project Managers responsible for the management of this project. */
		projectManagers?: Array<string>;

		/** The NASA Mission Directorate or Office that is the primary funding source for this project. */
		responsibleMissionDirectorateOrOffice?: string | null;

		/** The NASA program that is the primary funding source for this project. */
		responsibleProgram?: string | null;

		/** The month and year the project was authorized to proceed. */
		startDate?: string | null;

		/** Indicates whether the project is currently active, completed, or canceled. */
		status?: string | null;

		/** The supported mission type (Projected Mission, Planned Mission, or Pull). */
		supportedMissionType?: string | null;

		/** The supporting organizations for this project that are conducting work on the project. */
		supportingOrganizations?: Array<Organization>;

		/** The current technology maturity (technology readiness level) of the project. */
		technologyMaturityCurrent?: string | null;

		/** The estimated technology maturity (technology readiness level) of the project at its end. */
		technologyMaturityEnd?: string | null;

		/** The technology maturity (technology readiness level) of the project at its beginning. */
		technologyMaturityStart?: string | null;

		/** Title of the project. */
		title?: string | null;

		/** The URL for the associated website. */
		website?: string | null;

		/** States and territories with people performing work on this project. */
		workLocations?: Array<string>;
	}

	/** Top-level TechPort object representing a NASA technology project and its associated data. */
	export interface ProjectFormProperties {

		/** Abbreviated name of the project. */
		acronym: FormControl<string | null | undefined>,

		/** Describes the benefits offered to NASA funded and planned missions, unfunded or planned missions, commercial space industry, and to the nation. */
		benefits: FormControl<string | null | undefined>,

		/** The project closeout summary excerpt. */
		closeoutSummary: FormControl<string | null | undefined>,

		/** A detailed description of the project. */
		description: FormControl<string | null | undefined>,

		/** The month and year the project is expected to complete its work. */
		endDate: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the project.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * ISO 8601 full-date in the format YYYY-MM-DD describing the last time this project was updated.
		 * Type: DateOnly
		 */
		lastUpdated: FormControl<Date | null | undefined>,

		/** The NASA Mission Directorate or Office that is the primary funding source for this project. */
		responsibleMissionDirectorateOrOffice: FormControl<string | null | undefined>,

		/** The NASA program that is the primary funding source for this project. */
		responsibleProgram: FormControl<string | null | undefined>,

		/** The month and year the project was authorized to proceed. */
		startDate: FormControl<string | null | undefined>,

		/** Indicates whether the project is currently active, completed, or canceled. */
		status: FormControl<string | null | undefined>,

		/** The supported mission type (Projected Mission, Planned Mission, or Pull). */
		supportedMissionType: FormControl<string | null | undefined>,

		/** The current technology maturity (technology readiness level) of the project. */
		technologyMaturityCurrent: FormControl<string | null | undefined>,

		/** The estimated technology maturity (technology readiness level) of the project at its end. */
		technologyMaturityEnd: FormControl<string | null | undefined>,

		/** The technology maturity (technology readiness level) of the project at its beginning. */
		technologyMaturityStart: FormControl<string | null | undefined>,

		/** Title of the project. */
		title: FormControl<string | null | undefined>,

		/** The URL for the associated website. */
		website: FormControl<string | null | undefined>,
	}
	export function CreateProjectFormGroup() {
		return new FormGroup<ProjectFormProperties>({
			acronym: new FormControl<string | null | undefined>(undefined),
			benefits: new FormControl<string | null | undefined>(undefined),
			closeoutSummary: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined),
			responsibleMissionDirectorateOrOffice: new FormControl<string | null | undefined>(undefined),
			responsibleProgram: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			supportedMissionType: new FormControl<string | null | undefined>(undefined),
			technologyMaturityCurrent: new FormControl<string | null | undefined>(undefined),
			technologyMaturityEnd: new FormControl<string | null | undefined>(undefined),
			technologyMaturityStart: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Technology Area for a given technology that corresponds to the NASA Technology Roadmap. */
	export interface TechnologyArea {

		/** The code identifier for the Technology Area. */
		code?: string | null;

		/**
		 * Unique identifier for the Technology Area.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/** The name of the Technology Area. */
		name?: string | null;
	}

	/** The Technology Area for a given technology that corresponds to the NASA Technology Roadmap. */
	export interface TechnologyAreaFormProperties {

		/** The code identifier for the Technology Area. */
		code: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the Technology Area.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** The name of the Technology Area. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTechnologyAreaFormGroup() {
		return new FormGroup<TechnologyAreaFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns the swagger specification for the API.
		 * Get api
		 * @return {void} Successful response
		 */
		ApiGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about a specific technology project.
		 * Get api/projects/{id}{.format}
		 * @param {string} id ID of project to fetch
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {ApiProjects_id__formatGetByFormatFormat} format The response type desired.
		 * @param {string} _format Automatically added
		 * @return {Project} Successful response
		 */
		ApiProjects_id__formatGetByFormat(id: string, format: ApiProjects_id__formatGetByFormatFormat, _format: string, headersHandler?: () => HttpHeaders): Observable<Project> {
			return this.http.get<Project>(this.baseUri + 'api/projects/' + id + (_format == null ? '' : encodeURIComponent(_format)) + '?format=' + format + '', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of available technology project IDs.
		 * Get api/projects{.format}
		 * @param {Date} updatedSince ISO 8601 full-date in the format YYYY-MM-DD. Filters the list of available ID values by their lastUpdated parameter.
		 *     Type: DateOnly
		 * @param {ApiProjects_id__formatGetByFormatFormat} format The response type desired.
		 * @param {string} _format Automatically added
		 * @return {ApiProjects__formatGetByUpdatedSinceAndFormatReturn} Successful response
		 */
		ApiProjects__formatGetByUpdatedSinceAndFormat(updatedSince: Date, format: ApiProjects_id__formatGetByFormatFormat, _format: string, headersHandler?: () => HttpHeaders): Observable<ApiProjects__formatGetByUpdatedSinceAndFormatReturn> {
			return this.http.get<ApiProjects__formatGetByUpdatedSinceAndFormatReturn>(this.baseUri + 'api/projects' + (_format == null ? '' : encodeURIComponent(_format)) + '?updatedSince=' + updatedSince.toISOString() + '&format=' + format, { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export enum ApiProjects_id__formatGetByFormatFormat { json = 'json', xml = 'xml' }

	export interface ApiProjects__formatGetByUpdatedSinceAndFormatReturn {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		lastUpdated?: string | null;
	}
	export interface ApiProjects__formatGetByUpdatedSinceAndFormatReturnFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
		lastUpdated: FormControl<string | null | undefined>,
	}
	export function CreateApiProjects__formatGetByUpdatedSinceAndFormatReturnFormGroup() {
		return new FormGroup<ApiProjects__formatGetByUpdatedSinceAndFormatReturnFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			lastUpdated: new FormControl<string | null | undefined>(undefined),
		});

	}

}

