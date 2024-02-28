import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Coordinates {

		/** Signed decimal format, example: 52.1234 */
		latitude?: string | null;

		/** Signed decimal format, example -77.022223 */
		longitude?: string | null;
	}
	export interface CoordinatesFormProperties {

		/** Signed decimal format, example: 52.1234 */
		latitude: FormControl<string | null | undefined>,

		/** Signed decimal format, example -77.022223 */
		longitude: FormControl<string | null | undefined>,
	}
	export function CreateCoordinatesFormGroup() {
		return new FormGroup<CoordinatesFormProperties>({
			latitude: new FormControl<string | null | undefined>(undefined),
			longitude: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Event {

		/** The date in YYYY-MM-DD HH:MM:SS format, example: 2015-12-31 23:59:59 */
		created?: string | null;

		/** A string containing sanitized HTML code */
		description?: string | null;

		/** The date in YYYY-MM-DD HH:MM:SS format, example: 2015-12-31 23:59:59 */
		end_date?: string | null;
		groups?: Array<GroupLite>;
		location?: Location;

		/** The date in YYYY-MM-DD HH:MM:SS format, example: 2015-12-31 23:59:59 */
		modified?: string | null;
		name?: string | null;
		organizers?: Array<VolunteerLite>;

		/** A resource location, example: https://greenwire.greenpeace.org */
		picture?: string | null;

		/** The primary key in Drupal, e.g the entity/node id */
		serial?: string | null;

		/** The date in YYYY-MM-DD HH:MM:SS format, example: 2015-12-31 23:59:59 */
		start_date?: string | null;

		/** Universally unique identifier in canonical format, example: de305d54-75b4-431b-adb2-eb6b9e546014 */
		uuid?: string | null;
	}
	export interface EventFormProperties {

		/** The date in YYYY-MM-DD HH:MM:SS format, example: 2015-12-31 23:59:59 */
		created: FormControl<string | null | undefined>,

		/** A string containing sanitized HTML code */
		description: FormControl<string | null | undefined>,

		/** The date in YYYY-MM-DD HH:MM:SS format, example: 2015-12-31 23:59:59 */
		end_date: FormControl<string | null | undefined>,

		/** The date in YYYY-MM-DD HH:MM:SS format, example: 2015-12-31 23:59:59 */
		modified: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** A resource location, example: https://greenwire.greenpeace.org */
		picture: FormControl<string | null | undefined>,

		/** The primary key in Drupal, e.g the entity/node id */
		serial: FormControl<string | null | undefined>,

		/** The date in YYYY-MM-DD HH:MM:SS format, example: 2015-12-31 23:59:59 */
		start_date: FormControl<string | null | undefined>,

		/** Universally unique identifier in canonical format, example: de305d54-75b4-431b-adb2-eb6b9e546014 */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			created: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			end_date: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			picture: new FormControl<string | null | undefined>(undefined),
			serial: new FormControl<string | null | undefined>(undefined),
			start_date: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GroupLite {
		name?: string | null;

		/** The primary key in Drupal, e.g the entity/node id */
		serial?: string | null;

		/** Universally unique identifier in canonical format, example: de305d54-75b4-431b-adb2-eb6b9e546014 */
		uuid?: string | null;
	}
	export interface GroupLiteFormProperties {
		name: FormControl<string | null | undefined>,

		/** The primary key in Drupal, e.g the entity/node id */
		serial: FormControl<string | null | undefined>,

		/** Universally unique identifier in canonical format, example: de305d54-75b4-431b-adb2-eb6b9e546014 */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateGroupLiteFormGroup() {
		return new FormGroup<GroupLiteFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			serial: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Location {
		city?: string | null;
		coordinates?: Coordinates;
		country?: string | null;
		postcode?: string | null;
		state?: string | null;
		streetname?: string | null;
	}
	export interface LocationFormProperties {
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		postcode: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
		streetname: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			postcode: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			streetname: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VolunteerLite {

		/** The primary key in Drupal, e.g the entity/node id */
		serial?: string | null;

		/** Universally unique identifier in canonical format, example: de305d54-75b4-431b-adb2-eb6b9e546014 */
		uuid?: string | null;
	}
	export interface VolunteerLiteFormProperties {

		/** The primary key in Drupal, e.g the entity/node id */
		serial: FormControl<string | null | undefined>,

		/** Universally unique identifier in canonical format, example: de305d54-75b4-431b-adb2-eb6b9e546014 */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateVolunteerLiteFormGroup() {
		return new FormGroup<VolunteerLiteFormProperties>({
			serial: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Group {

		/** The date in YYYY-MM-DD HH:MM:SS format, example: 2015-12-31 23:59:59 */
		created?: string | null;

		/** A string containing sanitized HTML code */
		description?: string | null;
		group_type?: GroupGroup_type | null;
		location?: Location;
		mission?: string | null;

		/** The date in YYYY-MM-DD HH:MM:SS format, example: 2015-12-31 23:59:59 */
		modified?: string | null;
		name?: string | null;

		/** A resource location, example: https://greenwire.greenpeace.org */
		picture?: string | null;

		/** The primary key in Drupal, e.g the entity/node id */
		serial?: string | null;

		/** Universally unique identifier in canonical format, example: de305d54-75b4-431b-adb2-eb6b9e546014 */
		uuid?: string | null;
	}
	export interface GroupFormProperties {

		/** The date in YYYY-MM-DD HH:MM:SS format, example: 2015-12-31 23:59:59 */
		created: FormControl<string | null | undefined>,

		/** A string containing sanitized HTML code */
		description: FormControl<string | null | undefined>,
		group_type: FormControl<GroupGroup_type | null | undefined>,
		mission: FormControl<string | null | undefined>,

		/** The date in YYYY-MM-DD HH:MM:SS format, example: 2015-12-31 23:59:59 */
		modified: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** A resource location, example: https://greenwire.greenpeace.org */
		picture: FormControl<string | null | undefined>,

		/** The primary key in Drupal, e.g the entity/node id */
		serial: FormControl<string | null | undefined>,

		/** Universally unique identifier in canonical format, example: de305d54-75b4-431b-adb2-eb6b9e546014 */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			created: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			group_type: new FormControl<GroupGroup_type | null | undefined>(undefined),
			mission: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			picture: new FormControl<string | null | undefined>(undefined),
			serial: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GroupGroup_type { 'Country group' = 0, 'Campaign Project group' = 1, 'Local group' = 2, 'Discussion group' = 3, 'Interest group' = 4, 'Skills-based group' = 5 }

	export enum GroupType { 'Country group' = 0, 'Campaign Project group' = 1, 'Local group' = 2, 'Discussion group' = 3, 'Interest group' = 4, 'Skills-based group' = 5 }

	export interface HeaderError {

		/** https://en.wikipedia.org/wiki/List_of_HTTP_status_codes */
		code?: string | null;

		/** the error message */
		error?: string | null;

		/**
		 * transaction nonce
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;
		pagination?: string | null;

		/** The name of the requested object/model/resource. Plural if a collection. */
		resources?: HeaderErrorResources | null;

		/**
		 * https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status?: number | null;
	}
	export interface HeaderErrorFormProperties {

		/** https://en.wikipedia.org/wiki/List_of_HTTP_status_codes */
		code: FormControl<string | null | undefined>,

		/** the error message */
		error: FormControl<string | null | undefined>,

		/**
		 * transaction nonce
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,
		pagination: FormControl<string | null | undefined>,

		/** The name of the requested object/model/resource. Plural if a collection. */
		resources: FormControl<HeaderErrorResources | null | undefined>,

		/**
		 * https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreateHeaderErrorFormGroup() {
		return new FormGroup<HeaderErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			pagination: new FormControl<string | null | undefined>(undefined),
			resources: new FormControl<HeaderErrorResources | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum HeaderErrorResources { group = 0, groups = 1, event = 2, events = 3, volunteer = 4, volunteers = 5 }

	export interface HeaderSuccess {

		/** https://en.wikipedia.org/wiki/List_of_HTTP_status_codes */
		code?: string | null;
		error?: string | null;

		/**
		 * transaction nonce
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;
		pagination?: Pagination;

		/** The name of the requested object/model/resource. Plural if a collection. */
		resources?: HeaderErrorResources | null;

		/**
		 * https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status?: number | null;
	}
	export interface HeaderSuccessFormProperties {

		/** https://en.wikipedia.org/wiki/List_of_HTTP_status_codes */
		code: FormControl<string | null | undefined>,
		error: FormControl<string | null | undefined>,

		/**
		 * transaction nonce
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** The name of the requested object/model/resource. Plural if a collection. */
		resources: FormControl<HeaderErrorResources | null | undefined>,

		/**
		 * https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreateHeaderSuccessFormGroup() {
		return new FormGroup<HeaderSuccessFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			resources: new FormControl<HeaderErrorResources | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Pagination {

		/**
		 * the nubmer of items per page
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/**
		 * the current page
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		page?: number | null;

		/**
		 * the total number of pages
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}
	export interface PaginationFormProperties {

		/**
		 * the nubmer of items per page
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/**
		 * the current page
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * the total number of pages
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePaginationFormGroup() {
		return new FormGroup<PaginationFormProperties>({
			limit: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface LocationSimple {

		/** Country code see. https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 */
		country?: string | null;
	}
	export interface LocationSimpleFormProperties {

		/** Country code see. https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 */
		country: FormControl<string | null | undefined>,
	}
	export function CreateLocationSimpleFormGroup() {
		return new FormGroup<LocationSimpleFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The name of the requested object/model/resource. Plural if a collection. */
	export enum ResourceType { group = 0, groups = 1, event = 2, events = 3, volunteer = 4, volunteers = 5 }

	export interface Volunteer {

		/** A resource location, example: https://greenwire.greenpeace.org */
		avatar?: string | null;
		locations?: Array<LocationSimple>;

		/** Universally unique identifier in canonical format, example: de305d54-75b4-431b-adb2-eb6b9e546014 */
		uuid?: string | null;
	}
	export interface VolunteerFormProperties {

		/** A resource location, example: https://greenwire.greenpeace.org */
		avatar: FormControl<string | null | undefined>,

		/** Universally unique identifier in canonical format, example: de305d54-75b4-431b-adb2-eb6b9e546014 */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateVolunteerFormGroup() {
		return new FormGroup<VolunteerFormProperties>({
			avatar: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Return the upcoming events (e.g. start date >= today). Gets an array of `Event` object. Mandatory query param of **domain** determines the site / country the event belongs to.
		 * Get events
		 * @param {string} domain the site the groups belongs to, example: netherlands
		 * @param {string} limit the number of desired records
		 * @return {any} Successful response
		 */
		EventsGetByDomainAndLimit(domain: string, limit: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'events?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get one `Event` object by specifying its UUID in the url path.
		 * Get events/{UUID}
		 * @return {any} Successful response
		 */
		Events_UUIDGet(UUID: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'events/' + (UUID == null ? '' : encodeURIComponent(UUID)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets an array of `Group` object. Mandatory query param of **domain** determines the site / country the group belongs to.
		 * Get groups
		 * @param {string} domain the site the groups belongs to, example: netherlands
		 * @param {string} limit the number of desired records
		 * @return {any} Successful response
		 */
		GroupsGetByDomainAndLimit(domain: string, limit: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'groups?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get one `Group` object by specifying its UUID in the url path.
		 * Get groups/{UUID}
		 * @return {any} Successful response
		 */
		Groups_UUIDGet(UUID: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'groups/' + (UUID == null ? '' : encodeURIComponent(UUID)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets an array of `Volunteer` object. Mandatory query param of **domain** determines the site / country the volunteers are from.
		 * Get volunteers
		 * @param {string} domain the site the users are registered on, example: netherlands
		 * @param {string} limit the number of desired records. Default is 5.
		 * @param {boolean} must_have_default_avatar 1 or 0. filter on people that have the default avatar or not.
		 * @return {any} Successful response
		 */
		VolunteersGetByDomainAndLimitAndMust_have_default_avatar(domain: string, limit: string | null | undefined, must_have_default_avatar: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'volunteers?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&must_have_default_avatar=' + must_have_default_avatar, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get one specific `Volunteer` object by specifying its UUID in the url path.
		 * Get volunteers/{UUID}
		 * @return {any} Successful response
		 */
		Volunteers_UUIDGet(UUID: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'volunteers/' + (UUID == null ? '' : encodeURIComponent(UUID)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

}

