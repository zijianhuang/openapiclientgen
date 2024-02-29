import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A category that the law applies to */
	export interface Category {

		/**
		 * The type of category. (E.g. tech, incentive, regulation, user)
		 * Required
		 */
		category_type: string;

		/**
		 * The code used to identify the category
		 * Required
		 */
		code: string;

		/**
		 * The full name of the category
		 * Required
		 */
		title: string;
	}

	/** A category that the law applies to */
	export interface CategoryFormProperties {

		/**
		 * The type of category. (E.g. tech, incentive, regulation, user)
		 * Required
		 */
		category_type: FormControl<string | null | undefined>,

		/**
		 * The code used to identify the category
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * The full name of the category
		 * Required
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateCategoryFormGroup() {
		return new FormGroup<CategoryFormProperties>({
			category_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CategoryResults {

		/**
		 * The parameters that were passed to the API
		 * Required
		 */
		inputs: Inputs;

		/**
		 * The identifying metadata.
		 * Required
		 */
		metadata: Metadata;

		/**
		 * The array of law categories returned
		 * Required
		 */
		result: Array<FullCategory>;
	}
	export interface CategoryResultsFormProperties {
	}
	export function CreateCategoryResultsFormGroup() {
		return new FormGroup<CategoryResultsFormProperties>({
		});

	}

	export interface FullCategory {

		/**
		 * The type of category. (E.g. tech, incentive, regulation, user)
		 * Required
		 */
		category_type: string;

		/**
		 * The code used to identify the category
		 * Required
		 */
		code: string;

		/** A short description of what the law category encompasses */
		help_text?: string | null;

		/**
		 * The sort order for the categories
		 * Required
		 */
		sort_order: string;

		/**
		 * The full name of the category
		 * Required
		 */
		title: string;
	}
	export interface FullCategoryFormProperties {

		/**
		 * The type of category. (E.g. tech, incentive, regulation, user)
		 * Required
		 */
		category_type: FormControl<string | null | undefined>,

		/**
		 * The code used to identify the category
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/** A short description of what the law category encompasses */
		help_text: FormControl<string | null | undefined>,

		/**
		 * The sort order for the categories
		 * Required
		 */
		sort_order: FormControl<string | null | undefined>,

		/**
		 * The full name of the category
		 * Required
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateFullCategoryFormGroup() {
		return new FormGroup<FullCategoryFormProperties>({
			category_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			help_text: new FormControl<string | null | undefined>(undefined),
			sort_order: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The parameters that were passed to the API */
	export interface Inputs {
	}

	/** The parameters that were passed to the API */
	export interface InputsFormProperties {
	}
	export function CreateInputsFormGroup() {
		return new FormGroup<InputsFormProperties>({
		});

	}


	/** This is a Law */
	export interface Law {

		/** The agency with primary responsibility for federal incentives/regulations. */
		agency?: string | null;

		/** The date the incentive/law/regulation was updated through new legislation or rulemaking. */
		amended_date?: Date | null;

		/** The date that an incentive/law/regulation is no longer relevant to the database. This may include longstanding Executive Orders or laws requiring legislative studies that have been completed. */
		archived_date?: Date | null;

		/**
		 * The various law categories that apply to this law
		 * Required
		 */
		categories: Array<Category>;

		/** The contacts for the given law, returned only if the parameter poc is true */
		contacts?: Array<Poc>;

		/** The date the enacting legislation (if applicable) was signed into law. */
		enacted_date?: Date | null;

		/** The date the incentive/law/regulation is set to end. */
		expired_date?: Date | null;

		/**
		 * A unique identifier for this specific incentive/law/regulation.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: number;

		/** The true or false value used to distinguish between recent federal executive actions (TRUE) and active incentives/laws/regulations (FALSE). */
		is_recent?: boolean | null;

		/**
		 * Description of the incentive/law/regulation, including applicable legislative references, in <a href="https://guides.github.com/features/mastering-markdown/">markdown formatting</a>
		 * Required
		 */
		plaintext: string;

		/** An indicator if the last significant update was an update or the laws creation. */
		recent_update_or_new?: string | null;

		/**
		 * The URL associated with any bill or legislative reference included in the description.
		 * Required
		 */
		references: Array<LawReference>;

		/** The date legislation is enacted or a rulemaking is finalized to repeal the incentive/law/regulation. */
		repealed_date?: Date | null;

		/**
		 * The numerical value assigned to a description to show the order in which it is displayed online within a jurisdiction (state).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seq_num?: number | null;

		/** When the last significant update to the law was made. */
		significant_update_date?: Date | null;

		/**
		 * The state in which the incentive/law/regulation was enacted and is active.
		 * Required
		 */
		state: string;

		/**
		 * Description of the incentive/law/regulation, including applicable legislative references, html formated.
		 * Required
		 */
		text: string;

		/**
		 * The brief title assigned to the incentive/law/regulation description.
		 * Required
		 */
		title: string;

		/**
		 * For local incentive/regulation descriptions, the category that the incentive/regulation falls under, described below: Infrastructure Requirements, Vehicle Purchase and Infrastructure Development Incentives, Fuel Use Incentives, Parking Incentives, Technical Assistance, Vehicle Acquisition Requirements, Promotion Initiatives, Idle Reduction Requirements, Renewable Fuels Mandates and Standards
		 * Required
		 */
		topics: Array<LawTopics>;

		/**
		 * The category that the incentive/law/regulation falls under, described below: -State Incentives, -Laws and Regulations, -Utility/Private Incentives
		 * Required
		 */
		type: string;

		/**
		 * The types that apply to this law
		 * Required
		 */
		types: Array<LawType>;
	}

	/** This is a Law */
	export interface LawFormProperties {

		/** The agency with primary responsibility for federal incentives/regulations. */
		agency: FormControl<string | null | undefined>,

		/** The date the incentive/law/regulation was updated through new legislation or rulemaking. */
		amended_date: FormControl<Date | null | undefined>,

		/** The date that an incentive/law/regulation is no longer relevant to the database. This may include longstanding Executive Orders or laws requiring legislative studies that have been completed. */
		archived_date: FormControl<Date | null | undefined>,

		/** The date the enacting legislation (if applicable) was signed into law. */
		enacted_date: FormControl<Date | null | undefined>,

		/** The date the incentive/law/regulation is set to end. */
		expired_date: FormControl<Date | null | undefined>,

		/**
		 * A unique identifier for this specific incentive/law/regulation.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** The true or false value used to distinguish between recent federal executive actions (TRUE) and active incentives/laws/regulations (FALSE). */
		is_recent: FormControl<boolean | null | undefined>,

		/**
		 * Description of the incentive/law/regulation, including applicable legislative references, in <a href="https://guides.github.com/features/mastering-markdown/">markdown formatting</a>
		 * Required
		 */
		plaintext: FormControl<string | null | undefined>,

		/** An indicator if the last significant update was an update or the laws creation. */
		recent_update_or_new: FormControl<string | null | undefined>,

		/** The date legislation is enacted or a rulemaking is finalized to repeal the incentive/law/regulation. */
		repealed_date: FormControl<Date | null | undefined>,

		/**
		 * The numerical value assigned to a description to show the order in which it is displayed online within a jurisdiction (state).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seq_num: FormControl<number | null | undefined>,

		/** When the last significant update to the law was made. */
		significant_update_date: FormControl<Date | null | undefined>,

		/**
		 * The state in which the incentive/law/regulation was enacted and is active.
		 * Required
		 */
		state: FormControl<string | null | undefined>,

		/**
		 * Description of the incentive/law/regulation, including applicable legislative references, html formated.
		 * Required
		 */
		text: FormControl<string | null | undefined>,

		/**
		 * The brief title assigned to the incentive/law/regulation description.
		 * Required
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * The category that the incentive/law/regulation falls under, described below: -State Incentives, -Laws and Regulations, -Utility/Private Incentives
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateLawFormGroup() {
		return new FormGroup<LawFormProperties>({
			agency: new FormControl<string | null | undefined>(undefined),
			amended_date: new FormControl<Date | null | undefined>(undefined),
			archived_date: new FormControl<Date | null | undefined>(undefined),
			enacted_date: new FormControl<Date | null | undefined>(undefined),
			expired_date: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			is_recent: new FormControl<boolean | null | undefined>(undefined),
			plaintext: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			recent_update_or_new: new FormControl<string | null | undefined>(undefined),
			repealed_date: new FormControl<Date | null | undefined>(undefined),
			seq_num: new FormControl<number | null | undefined>(undefined),
			significant_update_date: new FormControl<Date | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Poc {

		/** The agency that the contact represents */
		agency?: string | null;

		/** The contacts email address */
		email?: string | null;

		/** The contacts fax number */
		fax?: string | null;

		/**
		 * The name of the contact
		 * Required
		 */
		name: string;

		/**
		 * The state in which the contact is based ('US' for Federal laws and 'DC' for the District of Columbia)
		 * Required
		 */
		state: string;

		/** The contacts phone number */
		telephone?: string | null;

		/** The job title of the contact */
		title?: string | null;

		/** The contacts webpage */
		web_page?: string | null;
	}
	export interface PocFormProperties {

		/** The agency that the contact represents */
		agency: FormControl<string | null | undefined>,

		/** The contacts email address */
		email: FormControl<string | null | undefined>,

		/** The contacts fax number */
		fax: FormControl<string | null | undefined>,

		/**
		 * The name of the contact
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The state in which the contact is based ('US' for Federal laws and 'DC' for the District of Columbia)
		 * Required
		 */
		state: FormControl<string | null | undefined>,

		/** The contacts phone number */
		telephone: FormControl<string | null | undefined>,

		/** The job title of the contact */
		title: FormControl<string | null | undefined>,

		/** The contacts webpage */
		web_page: FormControl<string | null | undefined>,
	}
	export function CreatePocFormGroup() {
		return new FormGroup<PocFormProperties>({
			agency: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			fax: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			telephone: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			web_page: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The URL associated with any bill or legislative reference included in the description. */
	export interface LawReference {

		/**
		 * The context of the reference
		 * Required
		 */
		description: string;

		/**
		 * The url linking to the reference.
		 * Required
		 */
		url: string;
	}

	/** The URL associated with any bill or legislative reference included in the description. */
	export interface LawReferenceFormProperties {

		/**
		 * The context of the reference
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The url linking to the reference.
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateLawReferenceFormGroup() {
		return new FormGroup<LawReferenceFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** For local incentive/regulation descriptions, the category that the incentive/regulation falls under, described below: Infrastructure Requirements, Vehicle Purchase and Infrastructure Development Incentives, Fuel Use Incentives, Parking Incentives, Technical Assistance, Vehicle Acquisition Requirements, Promotion Initiatives, Idle Reduction Requirements, Renewable Fuels Mandates and Standards */
	export interface LawTopics {

		/**
		 * The database id of the law topic
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: number;

		/**
		 * The sort order of the law topic
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sort_order: number;

		/**
		 * The name of the law topic
		 * Required
		 */
		title: string;
	}

	/** For local incentive/regulation descriptions, the category that the incentive/regulation falls under, described below: Infrastructure Requirements, Vehicle Purchase and Infrastructure Development Incentives, Fuel Use Incentives, Parking Incentives, Technical Assistance, Vehicle Acquisition Requirements, Promotion Initiatives, Idle Reduction Requirements, Renewable Fuels Mandates and Standards */
	export interface LawTopicsFormProperties {

		/**
		 * The database id of the law topic
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * The sort order of the law topic
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sort_order: FormControl<number | null | undefined>,

		/**
		 * The name of the law topic
		 * Required
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateLawTopicsFormGroup() {
		return new FormGroup<LawTopicsFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			sort_order: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The category that the incentive/law/regulation falls under, described below: -State Incentives, -Laws and Regulations, -Utility/Private Incentives */
	export interface LawType {

		/**
		 * The code used to identify the law type
		 * Required
		 */
		code: string;

		/**
		 * The id of the law type
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: number;

		/**
		 * The name of the law type
		 * Required
		 */
		title: string;
	}

	/** The category that the incentive/law/regulation falls under, described below: -State Incentives, -Laws and Regulations, -Utility/Private Incentives */
	export interface LawTypeFormProperties {

		/**
		 * The code used to identify the law type
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * The id of the law type
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * The name of the law type
		 * Required
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateLawTypeFormGroup() {
		return new FormGroup<LawTypeFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LawResult {

		/**
		 * The parameters that were passed to the API
		 * Required
		 */
		inputs: Inputs;

		/**
		 * The identifying metadata.
		 * Required
		 */
		metadata: Metadata;

		/**
		 * This is a Law
		 * Required
		 */
		result: Law;
	}
	export interface LawResultFormProperties {
	}
	export function CreateLawResultFormGroup() {
		return new FormGroup<LawResultFormProperties>({
		});

	}

	export interface LawsResponse {

		/**
		 * The parameters that were passed to the API
		 * Required
		 */
		inputs: Inputs;

		/**
		 * The identifying metadata.
		 * Required
		 */
		metadata: Metadata;

		/**
		 * The array of laws returned
		 * Required
		 */
		result: Array<Law>;
	}
	export interface LawsResponseFormProperties {
	}
	export function CreateLawsResponseFormGroup() {
		return new FormGroup<LawsResponseFormProperties>({
		});

	}


	/** The identifying metadata. */
	export interface Metadata {

		/**
		 * If the request returns an array of results, this is the number of results returned in the array
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;

		/**
		 * This is the version of the api
		 * Required
		 */
		version: string;
	}

	/** The identifying metadata. */
	export interface MetadataFormProperties {

		/**
		 * If the request returns an array of results, this is the number of results returned in the array
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * This is the version of the api
		 * Required
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateMetadataFormGroup() {
		return new FormGroup<MetadataFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PocResults {

		/**
		 * The parameters that were passed to the API
		 * Required
		 */
		inputs: Inputs;

		/**
		 * The identifying metadata.
		 * Required
		 */
		metadata: Metadata;

		/**
		 * The array of Points of Contacts for the state requested
		 * Required
		 */
		result: Array<Poc>;
	}
	export interface PocResultsFormProperties {
	}
	export function CreatePocResultsFormGroup() {
		return new FormGroup<PocResultsFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Return a full list of laws and incentives that match your query.
		 * Get v1.{output_format}
		 * @param {Transportation_incentives_laws_allOutput_format} output_format Response format
		 * @param {string} api_key API Key
		 * @param {number} limit Limit the number of laws returned
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} jurisdiction Return laws for the given Jurisdiction. Jurisdiction must be given as a two character state code (eg, 'CO' for Colorado). A single jurisdiction, or a comma-separate list of multiple jurisdiction, may be given.  Use the code 'US' for federal laws and the code 'DC' for Washington D.C.
		 * @param {string} technology Search by the technology type. A single type, or a comma-separate list of multiple types, may be given. Values and what they stand for are as follows: 'BIOD' for Biodiesel, 'ETH' for Ethanol / Flexible Fuel Vehicles, 'NG' for Natural Gas / Natural Gas Vehicles, 'LPG' for Liquefied Petroleum Gas (Propane) / Propane Vehicles, 'HY' for Hydrogen / Fuel Cell Electric Vehicles, 'ELEC' for All-Electric Vehicles (EVs), 'PHEV' for Plug-In Hybrid Electric Vehicles (PHEVs), 'HEV' for Hybrid Electric Vehicles (HEVs), 'NEVS' for Neighborhood Electric Vehicles (NEVs), 'RD' for Renewable Diesel, 'AFTMKTCONV' for Aftermarket Conversions, 'EFFEC' for Fuel Economy / Efficiency, 'IR' for Idle Reduction, 'AUTONOMOUS' for Connected and Autonomous Vehicles, and 'OTHER' for Other.
		 * @param {string} incentive_type Search by the incentive type. A single type, or a comma-separate list of multiple types, may be given. Values and what they stand for are as follows: 'GNT' for Grants, 'TAX' for Tax Incentives, 'LOANS' for Loans and Leases, 'RBATE' for Rebates, 'EXEM' for Exemptions, 'TOU' for Time-of-Use Rate, and 'OTHER' for Other.
		 * @param {string} regulation_type Search by the regulation type. A single type, or a comma-separate list of multiple types, may be given. Values and what they stand for are as follows: 'REQ' for Acquisition / Fuel Use, 'DREST' for Driving / Idling, 'REGIS' for Registration / Licensing, 'EVFEE' for EV Registration Fee, 'FUEL' for Fuel Taxes, 'STD' for Fuel Production / Quality, 'RFS' for Renewable Fuel Standard / Mandate, 'AIRQEMISSIONS' for Air Quality / Emissions, 'CCEINIT' for Climate Change / Energy Initiatives, 'UTILITY' for Utility Definition, 'BUILD' for Building Codes, 'RTC' for Right-to-Charge, and 'OTHER' for Other.
		 * @param {string} user_type Search by the user type. A single type, or a comma-separate list of multiple types, may be given. Values and what they stand for are as follows: 'FLEET' for Commercial, 'GOV' for Government Entity, 'TRIBAL' for Tribal Government, 'IND' for Personal Vehicle Owner or Driver, 'STATION' for Alternative Fuel Infrastructure Operator, 'AFP' for Alternative Fuel Producer, 'PURCH' for Alternative Fuel Purchaser, 'MAN' for Alternative Fuel Vehicle (AFV) Manufacturer or Retrofitter, 'MUD' for Multi-Unit Dwelling, 'TRANS' for Transit, and 'OTHER' for Other.
		 * @param {boolean} poc Include points of contacts in the return value.
		 * @param {boolean} recent Return only recently added or updated laws and incentives
		 * @param {boolean} expired The 'true' value returns only expired, repealed, or archived laws and incentives. The default 'false' value returns only current laws and incentives.
		 * @param {string} law_type Search by the law type. A single type, or a comma-separate list of multiple types, may be given. Values are as follows: 'STATEINC' for State Incentives, 'UPINC ' for Utility/Private Incentives, 'LAWREG' for Laws and Regulations, 'INC' for Incentives, 'PROG' for Programs, 'LUP' for Last Updated, 'OVIEW' for Overview, and 'HILITE' for Highlights.
		 * @param {string} keyword Search laws by keyword in title or text.
		 * @param {boolean} local Show only local examples of laws and incentives.
		 * @return {void} Successful request
		 */
		Transportation_incentives_laws_all(output_format: Transportation_incentives_laws_allOutput_format, api_key: string, limit: number | null | undefined, jurisdiction: string | null | undefined, technology: string | null | undefined, incentive_type: string | null | undefined, regulation_type: string | null | undefined, user_type: string | null | undefined, poc: boolean | null | undefined, recent: boolean | null | undefined, expired: boolean | null | undefined, law_type: string | null | undefined, keyword: string | null | undefined, local: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1.' + output_format + '?api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&limit=' + limit + '&jurisdiction=' + (jurisdiction == null ? '' : encodeURIComponent(jurisdiction)) + '&technology=' + (technology == null ? '' : encodeURIComponent(technology)) + '&incentive_type=' + (incentive_type == null ? '' : encodeURIComponent(incentive_type)) + '&regulation_type=' + (regulation_type == null ? '' : encodeURIComponent(regulation_type)) + '&user_type=' + (user_type == null ? '' : encodeURIComponent(user_type)) + '&poc=' + poc + '&recent=' + recent + '&expired=' + expired + '&law_type=' + (law_type == null ? '' : encodeURIComponent(law_type)) + '&keyword=' + (keyword == null ? '' : encodeURIComponent(keyword)) + '&local=' + local, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return the law categories for a given category type.
		 * Get v1/category-list.{output_format}
		 * @param {Transportation_incentives_laws_categoriesOutput_format} output_format Response format
		 * @param {string} api_key API Key
		 * @param {Transportation_incentives_laws_categoriesType} type Search by the category type.
		 * @return {void} Successful request
		 */
		Transportation_incentives_laws_categories(output_format: Transportation_incentives_laws_categoriesOutput_format, api_key: string, type: Transportation_incentives_laws_categoriesType | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/category-list.' + output_format + '?api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&type=' + type, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the points of contact for a given jurisdiction.
		 * Get v1/pocs.{output_format}
		 * @param {Transportation_incentives_laws_categoriesOutput_format} output_format Response format
		 * @param {string} api_key API Key
		 * @param {string} jurisdiction Return the points of contact for the given Jurisdiction. Jurisdiction must be given as a two character state code (eg, 'CO' for Colorado). A single jurisdiction, or a comma-separate list of multiple jurisdiction, may be given.  Use the code 'US' for federal laws and the code 'DC' for Washington D.C.
		 * @return {void} Successful request
		 */
		Transportation_incentives_laws_pocs(output_format: Transportation_incentives_laws_categoriesOutput_format, api_key: string, jurisdiction: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/pocs.' + output_format + '?api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&jurisdiction=' + (jurisdiction == null ? '' : encodeURIComponent(jurisdiction)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch the details of a specific law given the law's ID.
		 * Get v1/{id}.{output_format}
		 * @param {Transportation_incentives_laws_categoriesOutput_format} output_format Response format
		 * @param {string} api_key API Key
		 * @param {number} id The id of the law that you are searching
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} poc Include points of contacts in the return value.
		 * @param {boolean} expired The 'true' value returns a record no matter its status (current, expired, archived, or repealed). The default 'false' value returns only current laws and incentives.
		 * @return {void} Successful request
		 */
		Transportation_incentives_laws_id(output_format: Transportation_incentives_laws_categoriesOutput_format, api_key: string, id: number, poc: boolean | null | undefined, expired: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + id + '.' + output_format + '?api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&poc=' + poc + '&expired=' + expired, { observe: 'response', responseType: 'text' });
		}
	}

	export enum Transportation_incentives_laws_allOutput_format { json = 'json', xml = 'xml', csv = 'csv' }

	export enum Transportation_incentives_laws_categoriesOutput_format { json = 'json', xml = 'xml' }

	export enum Transportation_incentives_laws_categoriesType { tech = 'tech', user = 'user', regulation = 'regulation', incentive = 'incentive' }

}

