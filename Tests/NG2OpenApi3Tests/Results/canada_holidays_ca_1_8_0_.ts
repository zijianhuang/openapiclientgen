import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Error {

		/** An error message */
		message?: string | null;

		/**
		 * An HTTP status code
		 * Minimum: 100
		 * Maximum: 599
		 */
		status?: number | null;

		/** A UTC ISO timestamp */
		timestamp?: Date | null;
	}
	export interface ErrorFormProperties {

		/** An error message */
		message: FormControl<string | null | undefined>,

		/**
		 * An HTTP status code
		 * Minimum: 100
		 * Maximum: 599
		 */
		status: FormControl<number | null | undefined>,

		/** A UTC ISO timestamp */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined, [Validators.min(100), Validators.max(599)]),
			timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A Canadian holiday. Includes a name, the literal date of the holiday, the observed date of the holiday (ie, accommodating for weekends), and a list of regions that observe this holiday. */
	export interface Holiday {

		/**
		 * ISO date: the literal date of the holiday
		 * Required
		 * Type: DateOnly
		 */
		date: Date;

		/**
		 * Whether this holiday is observed by federally-regulated industries.
		 * Required
		 */
		federal: HolidayFederal;

		/**
		 * Primary key for a holiday
		 * Required
		 * Minimum: 1
		 * Maximum: 32
		 */
		id: number;

		/**
		 * English name
		 * Required
		 */
		nameEn: string;

		/**
		 * French name
		 * Required
		 */
		nameFr: string;

		/**
		 * ISO date: when this holiday is observed
		 * Required
		 * Type: DateOnly
		 */
		observedDate: Date;

		/** Whether this is a province-wide statutory holiday, or one that is optional for employers. */
		optional?: HolidayOptional;
		provinces?: Array<Province>;
	}

	/** A Canadian holiday. Includes a name, the literal date of the holiday, the observed date of the holiday (ie, accommodating for weekends), and a list of regions that observe this holiday. */
	export interface HolidayFormProperties {

		/**
		 * ISO date: the literal date of the holiday
		 * Required
		 * Type: DateOnly
		 */
		date: FormControl<Date | null | undefined>,

		/**
		 * Whether this holiday is observed by federally-regulated industries.
		 * Required
		 */
		federal: FormControl<HolidayFederal | null | undefined>,

		/**
		 * Primary key for a holiday
		 * Required
		 * Minimum: 1
		 * Maximum: 32
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * English name
		 * Required
		 */
		nameEn: FormControl<string | null | undefined>,

		/**
		 * French name
		 * Required
		 */
		nameFr: FormControl<string | null | undefined>,

		/**
		 * ISO date: when this holiday is observed
		 * Required
		 * Type: DateOnly
		 */
		observedDate: FormControl<Date | null | undefined>,

		/** Whether this is a province-wide statutory holiday, or one that is optional for employers. */
		optional: FormControl<HolidayOptional | null | undefined>,
	}
	export function CreateHolidayFormGroup() {
		return new FormGroup<HolidayFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			federal: new FormControl<HolidayFederal | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(32)]),
			nameEn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nameFr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			observedDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			optional: new FormControl<HolidayOptional | null | undefined>(undefined),
		});

	}

	export enum HolidayFederal { _1 = 0, _0 = 1 }

	export enum HolidayOptional { _1 = 0 }


	/** A Canadian province or territory  */
	export interface Province {

		/**
		 * Canadian province abbreviations
		 * Required
		 */
		id: ProvinceId;

		/**
		 * English name
		 * Required
		 */
		nameEn: string;

		/**
		 * French name
		 * Required
		 */
		nameFr: string;

		/** A Canadian holiday. Includes a name, the literal date of the holiday, the observed date of the holiday (ie, accommodating for weekends), and a list of regions that observe this holiday. */
		nextHoliday?: Holiday;

		/** Whether this province optionally observes a given holiday. */
		optional?: ProvinceOptional;
		provinces?: Array<Holiday>;

		/**
		 * Name of reference page with public holidays for this region
		 * Required
		 */
		sourceEn: string;

		/**
		 * URL to public holidays reference for this region
		 * Required
		 */
		sourceLink: string;
	}

	/** A Canadian province or territory  */
	export interface ProvinceFormProperties {

		/**
		 * Canadian province abbreviations
		 * Required
		 */
		id: FormControl<ProvinceId | null | undefined>,

		/**
		 * English name
		 * Required
		 */
		nameEn: FormControl<string | null | undefined>,

		/**
		 * French name
		 * Required
		 */
		nameFr: FormControl<string | null | undefined>,

		/** Whether this province optionally observes a given holiday. */
		optional: FormControl<ProvinceOptional | null | undefined>,

		/**
		 * Name of reference page with public holidays for this region
		 * Required
		 */
		sourceEn: FormControl<string | null | undefined>,

		/**
		 * URL to public holidays reference for this region
		 * Required
		 */
		sourceLink: FormControl<string | null | undefined>,
	}
	export function CreateProvinceFormGroup() {
		return new FormGroup<ProvinceFormProperties>({
			id: new FormControl<ProvinceId | null | undefined>(undefined, [Validators.required]),
			nameEn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nameFr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			optional: new FormControl<ProvinceOptional | null | undefined>(undefined),
			sourceEn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceLink: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('https+')]),
		});

	}

	export enum ProvinceId { AB = 'AB', BC = 'BC', MB = 'MB', NB = 'NB', NL = 'NL', NS = 'NS', NT = 'NT', NU = 'NU', ON = 'ON', PE = 'PE', QC = 'QC', SK = 'SK', YT = 'YT' }

	export enum ProvinceOptional { _1 = 0 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * root
		 * Returns a welcome message.
		 * Get api/v1
		 * @return {RootReturn} OK
		 */
		Root(): Observable<RootReturn> {
			return this.http.get<RootReturn>(this.baseUri + 'api/v1', {});
		}

		/**
		 * Get all holidays
		 * Returns Canadian public holidays. Each holiday lists the regions that observe it.
		 * Get api/v1/holidays
		 * @param {number} year A calendar year
		 *     Minimum: 2016    Maximum: 2029
		 * @param {HolidaysFederal} federal A boolean parameter. If true or 1, will return only federal holidays. If false or 0, will return no federal holidays.
		 * @param {HolidaysFederal} optional A boolean parameter. If false or 0 (default), will return only legislated holidays. If true or 1, will return optional holidays from Alberta and BC.
		 * @return {HolidaysReturn} OK
		 */
		Holidays(year: number | null | undefined, federal: HolidaysFederal | null | undefined, optional: HolidaysFederal | null | undefined): Observable<HolidaysReturn> {
			return this.http.get<HolidaysReturn>(this.baseUri + 'api/v1/holidays?year=' + year + '&federal=' + federal + '&optional=' + optional, {});
		}

		/**
		 * Get a holiday by id
		 * Returns one Canadian statutory holiday by integer id. Returns a 404 response for invalid ids.
		 * Get api/v1/holidays/{holidayId}
		 * @param {number} year A calendar year
		 *     Minimum: 2016    Maximum: 2029
		 * @param {HolidaysFederal} optional A boolean parameter. If false or 0 (default), will return provinces for which this is a legislated holiday. If true or 1, will return provinces which optionally celebrate this holiday.
		 * @return {HolidayReturn} OK
		 */
		Holiday(year: number | null | undefined, optional: HolidaysFederal | null | undefined): Observable<HolidayReturn> {
			return this.http.get<HolidayReturn>(this.baseUri + 'api/v1/holidays/{holidayId}?year=' + year + '&optional=' + optional, {});
		}

		/**
		 * Get all provinces
		 * Returns provinces and territories in Canada. Each province or territory lists its associated holidays.
		 * Get api/v1/provinces
		 * @param {number} year A calendar year
		 *     Minimum: 2016    Maximum: 2029
		 * @param {HolidaysFederal} optional A boolean parameter. If false or 0 (default), will return only legislated holidays. If true or 1, will return optional holidays from Alberta and BC.
		 * @return {ProvincesReturn} OK
		 */
		Provinces(year: number | null | undefined, optional: HolidaysFederal | null | undefined): Observable<ProvincesReturn> {
			return this.http.get<ProvincesReturn>(this.baseUri + 'api/v1/provinces?year=' + year + '&optional=' + optional, {});
		}

		/**
		 * Get a province or territory by abbreviation
		 * Returns a Canadian province or territory with its associated holidays. Returns a 404 response for invalid abbreviations.
		 * Get api/v1/provinces/{provinceId}
		 * @param {number} year A calendar year
		 *     Minimum: 2016    Maximum: 2029
		 * @param {HolidaysFederal} optional A boolean parameter (AB and BC only). If false or 0 (default), will return only legislated holidays. If true or 1, will return optional holidays from Alberta and BC.
		 * @return {ProvinceReturn} OK
		 */
		Province(year: number | null | undefined, optional: HolidaysFederal | null | undefined): Observable<ProvinceReturn> {
			return this.http.get<ProvinceReturn>(this.baseUri + 'api/v1/provinces/{provinceId}?year=' + year + '&optional=' + optional, {});
		}

		/**
		 * Get JSON schema
		 * Gets the schema for the JSON API as a yaml file.
		 * Get api/v1/spec
		 * @return {void} OK
		 */
		Spec(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/spec', { observe: 'response', responseType: 'text' });
		}
	}

	export interface RootReturn {
		_links?: RootReturn_links;

		/** A welcome message */
		message?: string | null;
	}
	export interface RootReturnFormProperties {

		/** A welcome message */
		message: FormControl<string | null | undefined>,
	}
	export function CreateRootReturnFormGroup() {
		return new FormGroup<RootReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RootReturn_links {
		holidays?: RootReturn_linksHolidays;
		provinces?: RootReturn_linksProvinces;
		self?: RootReturn_linksSelf;
		spec?: RootReturn_linksSpec;
	}
	export interface RootReturn_linksFormProperties {
	}
	export function CreateRootReturn_linksFormGroup() {
		return new FormGroup<RootReturn_linksFormProperties>({
		});

	}

	export interface RootReturn_linksHolidays {

		/** Domain to get all holidays */
		href?: string | null;
	}
	export interface RootReturn_linksHolidaysFormProperties {

		/** Domain to get all holidays */
		href: FormControl<string | null | undefined>,
	}
	export function CreateRootReturn_linksHolidaysFormGroup() {
		return new FormGroup<RootReturn_linksHolidaysFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RootReturn_linksProvinces {

		/** Domain to get all provinces */
		href?: string | null;
	}
	export interface RootReturn_linksProvincesFormProperties {

		/** Domain to get all provinces */
		href: FormControl<string | null | undefined>,
	}
	export function CreateRootReturn_linksProvincesFormGroup() {
		return new FormGroup<RootReturn_linksProvincesFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RootReturn_linksSelf {

		/** Root domain */
		href?: string | null;
	}
	export interface RootReturn_linksSelfFormProperties {

		/** Root domain */
		href: FormControl<string | null | undefined>,
	}
	export function CreateRootReturn_linksSelfFormGroup() {
		return new FormGroup<RootReturn_linksSelfFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RootReturn_linksSpec {
		href?: string | null;
	}
	export interface RootReturn_linksSpecFormProperties {
		href: FormControl<string | null | undefined>,
	}
	export function CreateRootReturn_linksSpecFormGroup() {
		return new FormGroup<RootReturn_linksSpecFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HolidaysFederal { _1 = '1', _0 = '0', true = 'true', false = 'false' }

	export interface HolidaysReturn {
		holidays?: Array<Holiday>;
	}
	export interface HolidaysReturnFormProperties {
	}
	export function CreateHolidaysReturnFormGroup() {
		return new FormGroup<HolidaysReturnFormProperties>({
		});

	}

	export interface HolidayReturn {

		/** A Canadian holiday. Includes a name, the literal date of the holiday, the observed date of the holiday (ie, accommodating for weekends), and a list of regions that observe this holiday. */
		holiday?: Holiday;
	}
	export interface HolidayReturnFormProperties {
	}
	export function CreateHolidayReturnFormGroup() {
		return new FormGroup<HolidayReturnFormProperties>({
		});

	}

	export interface ProvincesReturn {
		provinces?: Array<Province>;
	}
	export interface ProvincesReturnFormProperties {
	}
	export function CreateProvincesReturnFormGroup() {
		return new FormGroup<ProvincesReturnFormProperties>({
		});

	}

	export interface ProvinceReturn {

		/** A Canadian province or territory */
		province?: Province;
	}
	export interface ProvinceReturnFormProperties {
	}
	export function CreateProvinceReturnFormGroup() {
		return new FormGroup<ProvinceReturnFormProperties>({
		});

	}

}

