import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents the data contained in an API key */
	export interface APIKey {

		/** Previous version of the API key */
		api_key_previous_version?: string | null;

		/** API key version */
		api_key_version?: string | null;

		/** Client ID of the API Key */
		client_id?: string | null;

		/** API key creation date */
		creation_date?: Date | null;

		/** Expiration date of the API key */
		expiration_date?: Date | null;

		/** Key name, equals user_key_name normalized */
		key_name?: string | null;

		/** Date when the API key version was changed */
		update_date?: Date | null;

		/** User name of the API key */
		user_key_name?: string | null;
	}

	/** Represents the data contained in an API key */
	export interface APIKeyFormProperties {

		/** Previous version of the API key */
		api_key_previous_version: FormControl<string | null | undefined>,

		/** API key version */
		api_key_version: FormControl<string | null | undefined>,

		/** Client ID of the API Key */
		client_id: FormControl<string | null | undefined>,

		/** API key creation date */
		creation_date: FormControl<Date | null | undefined>,

		/** Expiration date of the API key */
		expiration_date: FormControl<Date | null | undefined>,

		/** Key name, equals user_key_name normalized */
		key_name: FormControl<string | null | undefined>,

		/** Date when the API key version was changed */
		update_date: FormControl<Date | null | undefined>,

		/** User name of the API key */
		user_key_name: FormControl<string | null | undefined>,
	}
	export function CreateAPIKeyFormGroup() {
		return new FormGroup<APIKeyFormProperties>({
			api_key_previous_version: new FormControl<string | null | undefined>(undefined),
			api_key_version: new FormControl<string | null | undefined>(undefined),
			client_id: new FormControl<string | null | undefined>(undefined),
			creation_date: new FormControl<Date | null | undefined>(undefined),
			expiration_date: new FormControl<Date | null | undefined>(undefined),
			key_name: new FormControl<string | null | undefined>(undefined),
			update_date: new FormControl<Date | null | undefined>(undefined),
			user_key_name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an API key version */
	export interface APIKeyVersion {

		/** Represents changes made to a API key version */
		changelog?: APIKeyVersionChangelog;

		/** Expiration date of the API key version */
		expiration_date?: Date | null;

		/** Release date of the API key version */
		release_date?: Date | null;

		/** API key version */
		version?: string | null;
	}

	/** Represents an API key version */
	export interface APIKeyVersionFormProperties {

		/** Expiration date of the API key version */
		expiration_date: FormControl<Date | null | undefined>,

		/** Release date of the API key version */
		release_date: FormControl<Date | null | undefined>,

		/** API key version */
		version: FormControl<string | null | undefined>,
	}
	export function CreateAPIKeyVersionFormGroup() {
		return new FormGroup<APIKeyVersionFormProperties>({
			expiration_date: new FormControl<Date | null | undefined>(undefined),
			release_date: new FormControl<Date | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents changes made to a API key version */
	export interface APIKeyVersionChangelog {

		/** List of added features */
		added?: Array<string>;

		/** List of changed features */
		changed?: Array<string>;

		/** List of deprecated features */
		deprecated?: Array<string>;

		/** List of fixed features */
		fixed?: Array<string>;

		/** Additional notes */
		notes?: string | null;

		/** List of removed features */
		removed?: Array<string>;

		/** List of security features added */
		security?: Array<string>;
	}

	/** Represents changes made to a API key version */
	export interface APIKeyVersionChangelogFormProperties {

		/** Additional notes */
		notes: FormControl<string | null | undefined>,
	}
	export function CreateAPIKeyVersionChangelogFormGroup() {
		return new FormGroup<APIKeyVersionChangelogFormProperties>({
			notes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the parameters required to perform a batch upload */
	export interface BatchUploadInput {

		/**
		 * Uploaded file name
		 * Required
		 */
		file: Array<string>;
	}

	/** Represents the parameters required to perform a batch upload */
	export interface BatchUploadInputFormProperties {
	}
	export function CreateBatchUploadInputFormGroup() {
		return new FormGroup<BatchUploadInputFormProperties>({
		});

	}


	/** Represents behaviour reports */
	export interface Behavior {

		/**
		 * Birth date of reported person
		 * Required
		 */
		birth_date: Date;

		/**
		 * Document country
		 * Required
		 */
		country: BehaviorCountry;

		/** Feedback creation date */
		creation_date?: Date | null;

		/**
		 * Person document ID
		 * Required
		 */
		document_id: string;

		/**
		 * Document type associated with the background check
		 * Required
		 */
		document_type: BehaviorDocument_type;

		/**
		 * Reported person e-mail
		 * Required
		 */
		email: string;

		/**
		 * Behavior report date
		 * Required
		 */
		feedback_date: Date;

		/**
		 * Person first name
		 * Required
		 */
		first_name: string;

		/**
		 * Person last name
		 * Required
		 */
		last_name: string;

		/** Phone number of the reported person */
		phone_number?: string | null;

		/**
		 * Report reason
		 * Required
		 */
		reason: string;
	}

	/** Represents behaviour reports */
	export interface BehaviorFormProperties {

		/**
		 * Birth date of reported person
		 * Required
		 */
		birth_date: FormControl<Date | null | undefined>,

		/**
		 * Document country
		 * Required
		 */
		country: FormControl<BehaviorCountry | null | undefined>,

		/** Feedback creation date */
		creation_date: FormControl<Date | null | undefined>,

		/**
		 * Person document ID
		 * Required
		 */
		document_id: FormControl<string | null | undefined>,

		/**
		 * Document type associated with the background check
		 * Required
		 */
		document_type: FormControl<BehaviorDocument_type | null | undefined>,

		/**
		 * Reported person e-mail
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * Behavior report date
		 * Required
		 */
		feedback_date: FormControl<Date | null | undefined>,

		/**
		 * Person first name
		 * Required
		 */
		first_name: FormControl<string | null | undefined>,

		/**
		 * Person last name
		 * Required
		 */
		last_name: FormControl<string | null | undefined>,

		/** Phone number of the reported person */
		phone_number: FormControl<string | null | undefined>,

		/**
		 * Report reason
		 * Required
		 */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateBehaviorFormGroup() {
		return new FormGroup<BehaviorFormProperties>({
			birth_date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<BehaviorCountry | null | undefined>(undefined, [Validators.required]),
			creation_date: new FormControl<Date | null | undefined>(undefined),
			document_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			document_type: new FormControl<BehaviorDocument_type | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			feedback_date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			first_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			last_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phone_number: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BehaviorCountry { co = 0, ve = 1, cl = 2, mx = 3, pe = 4, do = 5, sv = 6, gt = 7, bo = 8, cr = 9, ec = 10, pa = 11, br = 12 }

	export enum BehaviorDocument_type { 'national-id' = 0, passport = 1, 'foreign-id' = 2, nit = 3, 'diplomatic-id' = 4, 'civil-registration' = 5, 'identity-card' = 6, 'foreigner-card' = 7, 'professional-card' = 8, 'military-card' = 9, pep = 10, nis = 11, dni = 12, rui = 13, 'license-plate' = 14, query = 15, name = 16, rut = 17, nuip = 18, 'foreign-societies' = 19, escrow = 20, 'individual-registration' = 21, 'general-registration' = 22, curp = 23, dui = 24, 'driver-license' = 25, ruc = 26 }


	/** Represents behaviour search results */
	export interface BehaviourOutput {

		/**
		 * Behavior list
		 * Required
		 */
		behavior: Array<Behavior>;

		/**
		 * Path to this resource
		 * Required
		 */
		self: string;
	}

	/** Represents behaviour search results */
	export interface BehaviourOutputFormProperties {

		/**
		 * Path to this resource
		 * Required
		 */
		self: FormControl<string | null | undefined>,
	}
	export function CreateBehaviourOutputFormGroup() {
		return new FormGroup<BehaviourOutputFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents changes in check scores between continuous checks */
	export interface Change {

		/** Old and new score map by dataset */
		dataset_score_changes?: number | null;

		/** Old and new score list */
		score_changes?: Array<Change>;
	}

	/** Represents changes in check scores between continuous checks */
	export interface ChangeFormProperties {

		/** Old and new score map by dataset */
		dataset_score_changes: FormControl<number | null | undefined>,
	}
	export function CreateChangeFormGroup() {
		return new FormGroup<ChangeFormProperties>({
			dataset_score_changes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a background check */
	export interface Check {

		/** Person birth certificate */
		birth_certificate?: string | null;

		/**
		 * Background check ID
		 * Required
		 */
		check_id: string;

		/** Represents the summary of a company background check */
		company_summary?: CompanySummary;

		/**
		 * ID Document country
		 * Required
		 */
		country: CheckCountry;

		/**
		 * Background check creation date
		 * Required
		 */
		creation_date: Date;

		/** Person birthdate. Shown only if provided during check creation. YYYY-MM-DD format */
		date_of_birth?: Date | null;

		/** Person diplomatic id */
		diplomatic_id?: string | null;

		/** Person driver's license */
		driver_license?: string | null;

		/** Person or entity first name. Shown only if provided during check creation */
		first_name?: string | null;

		/** Person foreign identification */
		foreign_id?: string | null;

		/** [Experimental] Analyzes the probability that the results by name are attributed to a homonym. Number between 0 and 1 where 1 is the the greatest probability */
		homonym_probability?: number | null;

		/**
		 * Background check score including results by name only. This might contain homonym information
		 * Minimum: 0
		 * Maximum: 1
		 */
		homonym_score?: number | null;

		/** Background check scores by name for each profile group. [Deprecated for API key V1] */
		homonym_scores?: Array<Score>;

		/**
		 * Background check score regarding results by ID number only. It is a number between 0 and 1 where 1 is the best score. This result is a weighted average of the id_scores listed under scores.
		 * Required
		 */
		id_score: number;

		/** Issue date of the person ID */
		issue_date?: Date | null;

		/** Person or entity last name. Shown only if provided during check creation */
		last_name?: string | null;

		/** Vehicle license plate */
		license_plate?: string | null;

		/** Person national identification */
		national_id?: string | null;

		/** Person origin country */
		native_country?: CheckNative_country | null;

		/** Vehicle owner identification */
		owner_document_id?: string | null;

		/** Vehicle owner document type */
		owner_document_type?: string | null;

		/** Person passport */
		passport?: string | null;

		/** Vehicle license payment date */
		payment_date?: string | null;

		/** Colombian PEP idenfitication for Venezuelans */
		pep?: string | null;

		/** Person phone number. Required by law in order to notify the person their background is being checked */
		phone_number?: string | null;

		/** Person professional card number */
		professional_card?: string | null;

		/** Temporary residence permit of the person */
		ptp?: string | null;

		/**
		 * Region where the background is to be checked. By default, background checks in Brazil are performed in region where the person is from. Applies for some Brazil collectors only. Allowed values are: DF: Distrito Federal, AC: Acre, AL: Alagoas, AP: Amapá, AM: Amazonas, BA: Bahía, CE: Ceará, ES: Espírito Santo, GO: Goiás, MA: Maranhão, MT: Mato Grosso, MS: Mato Grosso do Sul, MG: Minas Gerais, PA: Pará, PB: Paraíba, PR: Paraná, PE: Pernambuco, PI: Piauí, RJ: Río de Janeiro, RN: Río Grande do Norte, RS: Río Grande do Sul, RO: Rondônia, RR: Roraima, SC: Santa Catarina, SP: São Paulo, SE: Sergipe, TO : Tocantins.
		 */
		region?: CheckRegion | null;

		/** Report ID the background check is associated with */
		report_id?: string | null;

		/**
		 * Background check score. Number between 0 and 1 where 1 is the best score
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		score: number;

		/** Background check score of each profile group and dataset */
		scores?: Array<Score>;

		/**
		 * Result status of the background check. **Not_started** means the background check is still in queue, since there is a limit of background checks that can be processed simultaneously, **completed** means the check finished successfully, **error** means the check failed, **in_progress** means the check is currently being processed, **delayed** means the check is waiting for an additional requirement to be met, this can last up to 3 days. **Completed** and **error** are the two only final statuses
		 * Required
		 */
		status: CheckStatus;

		/**
		 * Database status list
		 * Required
		 */
		statuses: Array<Status>;

		/**
		 * Represents a background check summary
		 * Required
		 */
		summary: Summary;

		/** Person or company tax id */
		tax_id?: string | null;

		/**
		 * Background check type
		 * Required
		 */
		type: CheckType;

		/** Background check update date */
		update_date?: Date | null;

		/** Vehicle identification */
		vehicle_id?: string | null;

		/** Represents the summary of a vehicle background check */
		vehicle_summary?: VehicleSummary;

		/** List of parameters entered during background check creation that do not match the information obtained */
		wrong_inputs?: Array<WrongInput>;
	}

	/** Represents a background check */
	export interface CheckFormProperties {

		/** Person birth certificate */
		birth_certificate: FormControl<string | null | undefined>,

		/**
		 * Background check ID
		 * Required
		 */
		check_id: FormControl<string | null | undefined>,

		/**
		 * ID Document country
		 * Required
		 */
		country: FormControl<CheckCountry | null | undefined>,

		/**
		 * Background check creation date
		 * Required
		 */
		creation_date: FormControl<Date | null | undefined>,

		/** Person birthdate. Shown only if provided during check creation. YYYY-MM-DD format */
		date_of_birth: FormControl<Date | null | undefined>,

		/** Person diplomatic id */
		diplomatic_id: FormControl<string | null | undefined>,

		/** Person driver's license */
		driver_license: FormControl<string | null | undefined>,

		/** Person or entity first name. Shown only if provided during check creation */
		first_name: FormControl<string | null | undefined>,

		/** Person foreign identification */
		foreign_id: FormControl<string | null | undefined>,

		/** [Experimental] Analyzes the probability that the results by name are attributed to a homonym. Number between 0 and 1 where 1 is the the greatest probability */
		homonym_probability: FormControl<number | null | undefined>,

		/**
		 * Background check score including results by name only. This might contain homonym information
		 * Minimum: 0
		 * Maximum: 1
		 */
		homonym_score: FormControl<number | null | undefined>,

		/**
		 * Background check score regarding results by ID number only. It is a number between 0 and 1 where 1 is the best score. This result is a weighted average of the id_scores listed under scores.
		 * Required
		 */
		id_score: FormControl<number | null | undefined>,

		/** Issue date of the person ID */
		issue_date: FormControl<Date | null | undefined>,

		/** Person or entity last name. Shown only if provided during check creation */
		last_name: FormControl<string | null | undefined>,

		/** Vehicle license plate */
		license_plate: FormControl<string | null | undefined>,

		/** Person national identification */
		national_id: FormControl<string | null | undefined>,

		/** Person origin country */
		native_country: FormControl<CheckNative_country | null | undefined>,

		/** Vehicle owner identification */
		owner_document_id: FormControl<string | null | undefined>,

		/** Vehicle owner document type */
		owner_document_type: FormControl<string | null | undefined>,

		/** Person passport */
		passport: FormControl<string | null | undefined>,

		/** Vehicle license payment date */
		payment_date: FormControl<string | null | undefined>,

		/** Colombian PEP idenfitication for Venezuelans */
		pep: FormControl<string | null | undefined>,

		/** Person phone number. Required by law in order to notify the person their background is being checked */
		phone_number: FormControl<string | null | undefined>,

		/** Person professional card number */
		professional_card: FormControl<string | null | undefined>,

		/** Temporary residence permit of the person */
		ptp: FormControl<string | null | undefined>,

		/**
		 * Region where the background is to be checked. By default, background checks in Brazil are performed in region where the person is from. Applies for some Brazil collectors only. Allowed values are: DF: Distrito Federal, AC: Acre, AL: Alagoas, AP: Amapá, AM: Amazonas, BA: Bahía, CE: Ceará, ES: Espírito Santo, GO: Goiás, MA: Maranhão, MT: Mato Grosso, MS: Mato Grosso do Sul, MG: Minas Gerais, PA: Pará, PB: Paraíba, PR: Paraná, PE: Pernambuco, PI: Piauí, RJ: Río de Janeiro, RN: Río Grande do Norte, RS: Río Grande do Sul, RO: Rondônia, RR: Roraima, SC: Santa Catarina, SP: São Paulo, SE: Sergipe, TO : Tocantins.
		 */
		region: FormControl<CheckRegion | null | undefined>,

		/** Report ID the background check is associated with */
		report_id: FormControl<string | null | undefined>,

		/**
		 * Background check score. Number between 0 and 1 where 1 is the best score
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		score: FormControl<number | null | undefined>,

		/**
		 * Result status of the background check. **Not_started** means the background check is still in queue, since there is a limit of background checks that can be processed simultaneously, **completed** means the check finished successfully, **error** means the check failed, **in_progress** means the check is currently being processed, **delayed** means the check is waiting for an additional requirement to be met, this can last up to 3 days. **Completed** and **error** are the two only final statuses
		 * Required
		 */
		status: FormControl<CheckStatus | null | undefined>,

		/** Person or company tax id */
		tax_id: FormControl<string | null | undefined>,

		/**
		 * Background check type
		 * Required
		 */
		type: FormControl<CheckType | null | undefined>,

		/** Background check update date */
		update_date: FormControl<Date | null | undefined>,

		/** Vehicle identification */
		vehicle_id: FormControl<string | null | undefined>,
	}
	export function CreateCheckFormGroup() {
		return new FormGroup<CheckFormProperties>({
			birth_certificate: new FormControl<string | null | undefined>(undefined),
			check_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<CheckCountry | null | undefined>(undefined, [Validators.required]),
			creation_date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			date_of_birth: new FormControl<Date | null | undefined>(undefined),
			diplomatic_id: new FormControl<string | null | undefined>(undefined),
			driver_license: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			foreign_id: new FormControl<string | null | undefined>(undefined),
			homonym_probability: new FormControl<number | null | undefined>(undefined),
			homonym_score: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			id_score: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			issue_date: new FormControl<Date | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			license_plate: new FormControl<string | null | undefined>(undefined),
			national_id: new FormControl<string | null | undefined>(undefined),
			native_country: new FormControl<CheckNative_country | null | undefined>(undefined),
			owner_document_id: new FormControl<string | null | undefined>(undefined),
			owner_document_type: new FormControl<string | null | undefined>(undefined),
			passport: new FormControl<string | null | undefined>(undefined),
			payment_date: new FormControl<string | null | undefined>(undefined),
			pep: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
			professional_card: new FormControl<string | null | undefined>(undefined),
			ptp: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<CheckRegion | null | undefined>(undefined),
			report_id: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(1)]),
			status: new FormControl<CheckStatus | null | undefined>(undefined, [Validators.required]),
			tax_id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CheckType | null | undefined>(undefined, [Validators.required]),
			update_date: new FormControl<Date | null | undefined>(undefined),
			vehicle_id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the summary of a company background check */
	export interface CompanySummary {

		/** Names found during the background check process */
		names_found?: Array<NameFound>;
	}

	/** Represents the summary of a company background check */
	export interface CompanySummaryFormProperties {
	}
	export function CreateCompanySummaryFormGroup() {
		return new FormGroup<CompanySummaryFormProperties>({
		});

	}


	/** Represents names found during the process */
	export interface NameFound {

		/**
		 * Times this name was found during the background check process
		 * Required
		 */
		count: number;

		/**
		 * First name found in the background check
		 * Required
		 */
		first_name: string;

		/**
		 * Last name found in the background check
		 * Required
		 */
		last_name: string;
	}

	/** Represents names found during the process */
	export interface NameFoundFormProperties {

		/**
		 * Times this name was found during the background check process
		 * Required
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * First name found in the background check
		 * Required
		 */
		first_name: FormControl<string | null | undefined>,

		/**
		 * Last name found in the background check
		 * Required
		 */
		last_name: FormControl<string | null | undefined>,
	}
	export function CreateNameFoundFormGroup() {
		return new FormGroup<NameFoundFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			first_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			last_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CheckCountry { ALL = 0, BR = 1, CL = 2, CO = 3, CR = 4, EC = 5, MX = 6, PE = 7, AR = 8 }


	/** Represents dataset scores. A score is a number between 0 and 1 that indicates how trustworthy the person, vehicle, or company is accordig to the result of the background check. Severity represents the risk associated with each dataset according to the background check. Keep in mind that you should use either the score or the severity but not both */
	export interface Score {

		/**
		 * Represents score detail of a background check
		 * Required
		 */
		by_id: ScoreDetail;

		/**
		 * Represents score detail of a background check
		 * Required
		 */
		by_name: ScoreDetail;

		/**
		 * Dataset summed up to create the score
		 * Required
		 */
		data_set: ScoreData_set;

		/** Overall result of the data collected. If at least one collected data status is found, the result will be found, otherwise, it will be the most frecuent status */
		result?: ScoreDetailResult | null;

		/**
		 * Dataset score. Number between 0 and 1 where 1 is the best score.
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		score: number;

		/**
		 * Risk asociated with each category for the search according to the information found. None is returned when the person, vehicle or company is in the clear. Unknown is returned when the score is none due to a problem with one of the searches
		 * Required
		 */
		severity: ScoreSeverity;
	}

	/** Represents dataset scores. A score is a number between 0 and 1 that indicates how trustworthy the person, vehicle, or company is accordig to the result of the background check. Severity represents the risk associated with each dataset according to the background check. Keep in mind that you should use either the score or the severity but not both */
	export interface ScoreFormProperties {

		/**
		 * Dataset summed up to create the score
		 * Required
		 */
		data_set: FormControl<ScoreData_set | null | undefined>,

		/** Overall result of the data collected. If at least one collected data status is found, the result will be found, otherwise, it will be the most frecuent status */
		result: FormControl<ScoreDetailResult | null | undefined>,

		/**
		 * Dataset score. Number between 0 and 1 where 1 is the best score.
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		score: FormControl<number | null | undefined>,

		/**
		 * Risk asociated with each category for the search according to the information found. None is returned when the person, vehicle or company is in the clear. Unknown is returned when the score is none due to a problem with one of the searches
		 * Required
		 */
		severity: FormControl<ScoreSeverity | null | undefined>,
	}
	export function CreateScoreFormGroup() {
		return new FormGroup<ScoreFormProperties>({
			data_set: new FormControl<ScoreData_set | null | undefined>(undefined, [Validators.required]),
			result: new FormControl<ScoreDetailResult | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(1)]),
			severity: new FormControl<ScoreSeverity | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents score detail of a background check */
	export interface ScoreDetail {

		/**
		 * Overall result of the data collected. If at least one collected data status is found, the result will be found, otherwise, it will be the most frecuent status
		 * Required
		 */
		result: ScoreDetailResult;

		/**
		 * Dataset score. Number between 0 and 1 where 1 is the best score.
		 * Required
		 */
		score: number;

		/**
		 * Risk asociated with each category for the search according to the information found. None is returned when the person, vehicle or company is in the clear. Unknown is returned when the score is none
		 * Required
		 */
		severity: ScoreDetailSeverity;
	}

	/** Represents score detail of a background check */
	export interface ScoreDetailFormProperties {

		/**
		 * Overall result of the data collected. If at least one collected data status is found, the result will be found, otherwise, it will be the most frecuent status
		 * Required
		 */
		result: FormControl<ScoreDetailResult | null | undefined>,

		/**
		 * Dataset score. Number between 0 and 1 where 1 is the best score.
		 * Required
		 */
		score: FormControl<number | null | undefined>,

		/**
		 * Risk asociated with each category for the search according to the information found. None is returned when the person, vehicle or company is in the clear. Unknown is returned when the score is none
		 * Required
		 */
		severity: FormControl<ScoreDetailSeverity | null | undefined>,
	}
	export function CreateScoreDetailFormGroup() {
		return new FormGroup<ScoreDetailFormProperties>({
			result: new FormControl<ScoreDetailResult | null | undefined>(undefined, [Validators.required]),
			score: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			severity: new FormControl<ScoreDetailSeverity | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ScoreDetailResult { pending = 0, found = 1, not_found = 2, error = 3, delayed = 4, ignored = 5 }

	export enum ScoreDetailSeverity { unknown = 0, none = 1, very_low = 2, low = 3, medium = 4, high = 5, very_high = 6 }

	export enum ScoreData_set { affiliations_and_insurances = 0, alert_in_media = 1, behavior = 2, business_background = 3, criminal_record = 4, driving_licenses = 5, international_background = 6, legal_background = 7, personal_identity = 8, professional_background = 9, traffic_fines = 10, vehicle_information = 11, vehicle_permits = 12, taxes_and_finances = 13 }

	export enum ScoreSeverity { unknown = 0, none = 1, very_low = 2, low = 3, medium = 4, high = 5, very_high = 6 }

	export enum CheckNative_country { ad = 0, ae = 1, af = 2, ag = 3, ai = 4, al = 5, am = 6, an = 7, ao = 8, aq = 9, ar = 10, as = 11, at = 12, au = 13, aw = 14, ax = 15, az = 16, ba = 17, bb = 18, bd = 19, be = 20, bf = 21, bg = 22, bh = 23, bi = 24, bj = 25, bm = 26, bn = 27, bo = 28, br = 29, bs = 30, bt = 31, bv = 32, bw = 33, by = 34, bz = 35, ca = 36, cc = 37, cd = 38, cf = 39, cg = 40, ch = 41, ci = 42, ck = 43, cl = 44, cm = 45, cn = 46, co = 47, cr = 48, cu = 49, cv = 50, cx = 51, cy = 52, cz = 53, de = 54, dj = 55, dk = 56, dm = 57, do = 58, dz = 59, ea = 60, ec = 61, ee = 62, eg = 63, eh = 64, er = 65, es = 66, et = 67, fi = 68, fj = 69, fk = 70, fm = 71, fo = 72, fr = 73, ga = 74, gb = 75, gd = 76, ge = 77, gf = 78, gg = 79, gh = 80, gi = 81, gl = 82, gm = 83, gn = 84, gp = 85, gq = 86, gr = 87, gs = 88, gt = 89, gu = 90, gw = 91, gy = 92, hk = 93, hm = 94, hn = 95, hr = 96, ht = 97, hu = 98, id = 99, ie = 100, il = 101, im = 102, in = 103, io = 104, iq = 105, ir = 106, is = 107, it = 108, je = 109, jm = 110, jo = 111, jp = 112, ke = 113, kg = 114, kh = 115, ki = 116, km = 117, kn = 118, kp = 119, kr = 120, kw = 121, ky = 122, kz = 123, la = 124, lb = 125, lc = 126, li = 127, lk = 128, lr = 129, ls = 130, lt = 131, lu = 132, lv = 133, ly = 134, ma = 135, mc = 136, md = 137, me = 138, mg = 139, mh = 140, mk = 141, ml = 142, mm = 143, mn = 144, mo = 145, mp = 146, mq = 147, mr = 148, ms = 149, mt = 150, mu = 151, mv = 152, mw = 153, mx = 154, my = 155, mz = 156, na = 157, nc = 158, ne = 159, nf = 160, ng = 161, ni = 162, nl = 163, no = 164, np = 165, nr = 166, nu = 167, nz = 168, om = 169, pa = 170, pe = 171, pf = 172, pg = 173, ph = 174, pk = 175, pl = 176, pm = 177, pn = 178, pr = 179, ps = 180, pt = 181, pw = 182, py = 183, qa = 184, re = 185, ro = 186, rs = 187, ru = 188, rw = 189, sa = 190, sb = 191, sc = 192, sd = 193, se = 194, sg = 195, sh = 196, si = 197, sj = 198, sk = 199, sl = 200, sm = 201, sn = 202, so = 203, sr = 204, st = 205, sv = 206, sy = 207, sz = 208, tc = 209, td = 210, tf = 211, tg = 212, th = 213, tj = 214, tk = 215, tl = 216, tm = 217, tn = 218, to = 219, tr = 220, tt = 221, tv = 222, tw = 223, tz = 224, ua = 225, ug = 226, um = 227, us = 228, uy = 229, uz = 230, va = 231, vc = 232, ve = 233, vg = 234, vi = 235, vn = 236, vu = 237, wf = 238, ws = 239, ye = 240, yt = 241, za = 242, zm = 243, zw = 244 }

	export enum CheckRegion { DF = 0, AC = 1, AL = 2, AP = 3, AM = 4, BA = 5, CE = 6, ES = 7, GO = 8, MA = 9, MT = 10, MS = 11, MG = 12, PA = 13, PB = 14, PR = 15, PE = 16, PI = 17, RJ = 18, RN = 19, RS = 20, RO = 21, RR = 22, SC = 23, SP = 24, SE = 25, TO = 26 }

	export enum CheckStatus { not_started = 0, in_progress = 1, completed = 2, error = 3, delayed = 4 }


	/** Represents the status of databases used to generate background checks */
	export interface Status {

		/** Background check dataset */
		data_set?: ScoreData_set | null;

		/** Database ID. Can be used to verify the database status */
		database_id?: string | null;

		/** Background check database name. Do not use this field to identify the database as it may change during the check execution. Use database_id instead */
		database_name?: string | null;

		/** List of missing or invalid inputs */
		invalid_inputs?: Array<string>;

		/** Result status of the background check. **Not_started** means the background check is still in queue, since there is a limit of background checks that can be processed simultaneously, **completed** means the search finished successfully, **error** means the search failed, **expired** means the search took too long to finish and therefore failed, **skipped** means the search failed because a wrong number or type of parameters was provided, **delayed** means the search is waiting for an additional requirement to be met and can last up to 3 days */
		status?: StatusStatus | null;
	}

	/** Represents the status of databases used to generate background checks */
	export interface StatusFormProperties {

		/** Background check dataset */
		data_set: FormControl<ScoreData_set | null | undefined>,

		/** Database ID. Can be used to verify the database status */
		database_id: FormControl<string | null | undefined>,

		/** Background check database name. Do not use this field to identify the database as it may change during the check execution. Use database_id instead */
		database_name: FormControl<string | null | undefined>,

		/** Result status of the background check. **Not_started** means the background check is still in queue, since there is a limit of background checks that can be processed simultaneously, **completed** means the search finished successfully, **error** means the search failed, **expired** means the search took too long to finish and therefore failed, **skipped** means the search failed because a wrong number or type of parameters was provided, **delayed** means the search is waiting for an additional requirement to be met and can last up to 3 days */
		status: FormControl<StatusStatus | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			data_set: new FormControl<ScoreData_set | null | undefined>(undefined),
			database_id: new FormControl<string | null | undefined>(undefined),
			database_name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<StatusStatus | null | undefined>(undefined),
		});

	}

	export enum StatusStatus { not_started = 0, completed = 1, expired = 2, error = 3, delayed = 4, skipped = 5 }


	/** Represents a background check summary */
	export interface Summary {

		/** Person date of birth in RFC3339 format */
		date_of_birth?: Date | null;

		/** Person date of death */
		death_date?: Date | null;

		/** Person driver's license */
		drivers_license?: string | null;

		/** Person gender */
		gender?: SummaryGender | null;

		/** Indicates whether a person was found, found as dead or not found at all */
		identity_status?: SummaryIdentity_status | null;

		/**
		 * Names found during the background check process
		 * Required
		 */
		names_found: Array<NameFound>;

		/** Social security number of the person (Mexico) */
		nss?: string | null;

		/** Federal taxpayer registration number of the person */
		rfc?: string | null;
	}

	/** Represents a background check summary */
	export interface SummaryFormProperties {

		/** Person date of birth in RFC3339 format */
		date_of_birth: FormControl<Date | null | undefined>,

		/** Person date of death */
		death_date: FormControl<Date | null | undefined>,

		/** Person driver's license */
		drivers_license: FormControl<string | null | undefined>,

		/** Person gender */
		gender: FormControl<SummaryGender | null | undefined>,

		/** Indicates whether a person was found, found as dead or not found at all */
		identity_status: FormControl<SummaryIdentity_status | null | undefined>,

		/** Social security number of the person (Mexico) */
		nss: FormControl<string | null | undefined>,

		/** Federal taxpayer registration number of the person */
		rfc: FormControl<string | null | undefined>,
	}
	export function CreateSummaryFormGroup() {
		return new FormGroup<SummaryFormProperties>({
			date_of_birth: new FormControl<Date | null | undefined>(undefined),
			death_date: new FormControl<Date | null | undefined>(undefined),
			drivers_license: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<SummaryGender | null | undefined>(undefined),
			identity_status: new FormControl<SummaryIdentity_status | null | undefined>(undefined),
			nss: new FormControl<string | null | undefined>(undefined),
			rfc: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SummaryGender { male = 0, female = 1 }

	export enum SummaryIdentity_status { found = 0, not_found = 1, dead = 2 }

	export enum CheckType { company = 0, person = 1, vehicle = 2 }


	/** Represents the summary of a vehicle background check */
	export interface VehicleSummary {

		/** Number of passengers allowed to travel in the vehicle */
		capacity?: number | null;

		/** Vehicle color */
		color?: string | null;

		/** Vehicle license plate */
		license_plate?: string | null;

		/** Vehicle manufacturer */
		manufacturer?: string | null;

		/** Vehicle model */
		model?: string | null;

		/** Vehicle door count */
		number_of_doors?: number | null;

		/** Expiration date of the vehicle compulsory insurance */
		obligatory_insurance_expiration_date?: Date | null;

		/** Status of the vehicle compulsory insurances */
		obligatory_insurance_status?: string | null;

		/** Vehicle service type */
		service_type?: string | null;

		/** Vehicle category */
		vehicle_category?: string | null;

		/** Vehicle ID */
		vehicle_id?: string | null;

		/** Vehicle type */
		vehicle_type?: string | null;

		/** Vehicle model year */
		year?: number | null;
	}

	/** Represents the summary of a vehicle background check */
	export interface VehicleSummaryFormProperties {

		/** Number of passengers allowed to travel in the vehicle */
		capacity: FormControl<number | null | undefined>,

		/** Vehicle color */
		color: FormControl<string | null | undefined>,

		/** Vehicle license plate */
		license_plate: FormControl<string | null | undefined>,

		/** Vehicle manufacturer */
		manufacturer: FormControl<string | null | undefined>,

		/** Vehicle model */
		model: FormControl<string | null | undefined>,

		/** Vehicle door count */
		number_of_doors: FormControl<number | null | undefined>,

		/** Expiration date of the vehicle compulsory insurance */
		obligatory_insurance_expiration_date: FormControl<Date | null | undefined>,

		/** Status of the vehicle compulsory insurances */
		obligatory_insurance_status: FormControl<string | null | undefined>,

		/** Vehicle service type */
		service_type: FormControl<string | null | undefined>,

		/** Vehicle category */
		vehicle_category: FormControl<string | null | undefined>,

		/** Vehicle ID */
		vehicle_id: FormControl<string | null | undefined>,

		/** Vehicle type */
		vehicle_type: FormControl<string | null | undefined>,

		/** Vehicle model year */
		year: FormControl<number | null | undefined>,
	}
	export function CreateVehicleSummaryFormGroup() {
		return new FormGroup<VehicleSummaryFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			color: new FormControl<string | null | undefined>(undefined),
			license_plate: new FormControl<string | null | undefined>(undefined),
			manufacturer: new FormControl<string | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
			number_of_doors: new FormControl<number | null | undefined>(undefined),
			obligatory_insurance_expiration_date: new FormControl<Date | null | undefined>(undefined),
			obligatory_insurance_status: new FormControl<string | null | undefined>(undefined),
			service_type: new FormControl<string | null | undefined>(undefined),
			vehicle_category: new FormControl<string | null | undefined>(undefined),
			vehicle_id: new FormControl<string | null | undefined>(undefined),
			vehicle_type: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a parameter entered during the background check creation that does not match the information obtained */
	export interface WrongInput {

		/** Parameter entered that differs from the information obtained */
		Input?: WrongInputInput | null;
	}

	/** Represents a parameter entered during the background check creation that does not match the information obtained */
	export interface WrongInputFormProperties {

		/** Parameter entered that differs from the information obtained */
		Input: FormControl<WrongInputInput | null | undefined>,
	}
	export function CreateWrongInputFormGroup() {
		return new FormGroup<WrongInputFormProperties>({
			Input: new FormControl<WrongInputInput | null | undefined>(undefined),
		});

	}

	export enum WrongInputInput { document_expedition_date = 0 }


	/** Represents background check details */
	export interface CheckDetails {

		/**
		 * Associated background check ID
		 * Required
		 */
		check_id: string;

		/**
		 * Details dataset
		 * Required
		 */
		data_set: string;

		/**
		 * Database name. Do not use this field to identify the database as its value may vary as the check is completed
		 * Required
		 */
		database_name: string;

		/**
		 * table group type
		 * Required
		 */
		group: CheckDetailsGroup;

		/**
		 * Detail ID
		 * Required
		 */
		id: string;

		/**
		 * Database result
		 * Required
		 */
		result: CheckDetailsResult;

		/**
		 * Partial detail score. Scores are aggregated later in the background check
		 * Required
		 */
		score: number;

		/**
		 * Query detailed information
		 * Required
		 */
		tables: Array<Table>;
	}

	/** Represents background check details */
	export interface CheckDetailsFormProperties {

		/**
		 * Associated background check ID
		 * Required
		 */
		check_id: FormControl<string | null | undefined>,

		/**
		 * Details dataset
		 * Required
		 */
		data_set: FormControl<string | null | undefined>,

		/**
		 * Database name. Do not use this field to identify the database as its value may vary as the check is completed
		 * Required
		 */
		database_name: FormControl<string | null | undefined>,

		/**
		 * table group type
		 * Required
		 */
		group: FormControl<CheckDetailsGroup | null | undefined>,

		/**
		 * Detail ID
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Database result
		 * Required
		 */
		result: FormControl<CheckDetailsResult | null | undefined>,

		/**
		 * Partial detail score. Scores are aggregated later in the background check
		 * Required
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateCheckDetailsFormGroup() {
		return new FormGroup<CheckDetailsFormProperties>({
			check_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			data_set: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			database_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			group: new FormControl<CheckDetailsGroup | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			result: new FormControl<CheckDetailsResult | null | undefined>(undefined, [Validators.required]),
			score: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CheckDetailsGroup { profile = 0, legal = 1, affiliations = 2, vehicle = 3, global = 4, media = 5, unknown = 6 }

	export enum CheckDetailsResult { pending = 0, found = 1, not_found = 2, error = 3 }


	/** Represents a table to lay out search results */
	export interface Table {

		/**
		 * Table rows
		 * Required
		 */
		rows: Array<TableRow>;

		/**
		 * Table title
		 * Required
		 */
		title: string;
	}

	/** Represents a table to lay out search results */
	export interface TableFormProperties {

		/**
		 * Table title
		 * Required
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateTableFormGroup() {
		return new FormGroup<TableFormProperties>({
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A table row, containing one or more cells */
	export interface TableRow {

		/**
		 * Row cells
		 * Required
		 */
		cells: Array<TableCell>;
	}

	/** A table row, containing one or more cells */
	export interface TableRowFormProperties {
	}
	export function CreateTableRowFormGroup() {
		return new FormGroup<TableRowFormProperties>({
		});

	}


	/** Represents a table cell */
	export interface TableCell {

		/**
		 * Cell label
		 * Required
		 */
		label: string;

		/**
		 * Cell value
		 * Required
		 */
		value: string;
	}

	/** Represents a table cell */
	export interface TableCellFormProperties {

		/**
		 * Cell label
		 * Required
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * Cell value
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTableCellFormGroup() {
		return new FormGroup<TableCellFormProperties>({
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents a list of background check details */
	export interface CheckDetailsOutput {

		/**
		 * Detail list
		 * Required
		 */
		details: Array<CheckDetails>;

		/** Next page path */
		next?: string | null;

		/**
		 * Current page path
		 * Required
		 */
		self: string;
	}

	/** Represents a list of background check details */
	export interface CheckDetailsOutputFormProperties {

		/** Next page path */
		next: FormControl<string | null | undefined>,

		/**
		 * Current page path
		 * Required
		 */
		self: FormControl<string | null | undefined>,
	}
	export function CreateCheckDetailsOutputFormGroup() {
		return new FormGroup<CheckDetailsOutputFormProperties>({
			next: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the result of a background check search */
	export interface CheckOutput {

		/**
		 * Represents a background check
		 * Required
		 */
		check: Check;

		/**
		 * Detail path
		 * Required
		 */
		details: string;

		/**
		 * Background check URL
		 * Required
		 */
		self: string;
	}

	/** Represents the result of a background check search */
	export interface CheckOutputFormProperties {

		/**
		 * Detail path
		 * Required
		 */
		details: FormControl<string | null | undefined>,

		/**
		 * Background check URL
		 * Required
		 */
		self: FormControl<string | null | undefined>,
	}
	export function CreateCheckOutputFormGroup() {
		return new FormGroup<CheckOutputFormProperties>({
			details: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the results of a background check search */
	export interface ChecksOutput {

		/**
		 * Background check list in the page
		 * Required
		 */
		checks: Array<Check>;

		/** Next page path */
		next?: string | null;

		/**
		 * Current page path
		 * Required
		 */
		self: string;
	}

	/** Represents the results of a background check search */
	export interface ChecksOutputFormProperties {

		/** Next page path */
		next: FormControl<string | null | undefined>,

		/**
		 * Current page path
		 * Required
		 */
		self: FormControl<string | null | undefined>,
	}
	export function CreateChecksOutputFormGroup() {
		return new FormGroup<ChecksOutputFormProperties>({
			next: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Comment {

		/**
		 * Background check ID
		 * Required
		 */
		check_id: string;

		/**
		 * Comment content
		 * Required
		 */
		content: string;

		/**
		 * Comment creation date
		 * Required
		 */
		creation_date: string;

		/**
		 * Comment ID
		 * Required
		 */
		id: string;

		/** Comment parent ID */
		parent_id?: string | null;

		/**
		 * Comment update date
		 * Required
		 */
		update_date: string;

		/**
		 * Comment creator username
		 * Required
		 */
		username: string;
	}
	export interface CommentFormProperties {

		/**
		 * Background check ID
		 * Required
		 */
		check_id: FormControl<string | null | undefined>,

		/**
		 * Comment content
		 * Required
		 */
		content: FormControl<string | null | undefined>,

		/**
		 * Comment creation date
		 * Required
		 */
		creation_date: FormControl<string | null | undefined>,

		/**
		 * Comment ID
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Comment parent ID */
		parent_id: FormControl<string | null | undefined>,

		/**
		 * Comment update date
		 * Required
		 */
		update_date: FormControl<string | null | undefined>,

		/**
		 * Comment creator username
		 * Required
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateCommentFormGroup() {
		return new FormGroup<CommentFormProperties>({
			check_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creation_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parent_id: new FormControl<string | null | undefined>(undefined),
			update_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents a comment search result */
	export interface CommentOutput {

		/** Required */
		comment: Comment;

		/**
		 * Current comment path
		 * Required
		 */
		self: string;
	}

	/** Represents a comment search result */
	export interface CommentOutputFormProperties {

		/**
		 * Current comment path
		 * Required
		 */
		self: FormControl<string | null | undefined>,
	}
	export function CreateCommentOutputFormGroup() {
		return new FormGroup<CommentOutputFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents comment search results */
	export interface CommentsOutput {

		/**
		 * Comment list
		 * Required
		 */
		comments: Array<Comment>;

		/**
		 * Next page path
		 * Required
		 */
		next: string;

		/**
		 * Previous page path
		 * Required
		 */
		previous: string;
	}

	/** Represents comment search results */
	export interface CommentsOutputFormProperties {

		/**
		 * Next page path
		 * Required
		 */
		next: FormControl<string | null | undefined>,

		/**
		 * Previous page path
		 * Required
		 */
		previous: FormControl<string | null | undefined>,
	}
	export function CreateCommentsOutputFormGroup() {
		return new FormGroup<CommentsOutputFormProperties>({
			next: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			previous: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Config {

		/**
		 * Client ID
		 * Required
		 */
		client_id: string;

		/**
		 * Configuration ID
		 * Required
		 */
		config_id: string;

		/**
		 * Represents a set of configurations to determine the background check score
		 * Required
		 */
		score_config: ScoreConfig;
	}
	export interface ConfigFormProperties {

		/**
		 * Client ID
		 * Required
		 */
		client_id: FormControl<string | null | undefined>,

		/**
		 * Configuration ID
		 * Required
		 */
		config_id: FormControl<string | null | undefined>,
	}
	export function CreateConfigFormGroup() {
		return new FormGroup<ConfigFormProperties>({
			client_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			config_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents a set of configurations to determine the background check score */
	export interface ScoreConfig {

		/**
		 * Background check dataset
		 * Required
		 */
		data_set: string;

		/**
		 * Dataset weight for score calculation
		 * Required
		 */
		weight: string;
	}

	/** Represents a set of configurations to determine the background check score */
	export interface ScoreConfigFormProperties {

		/**
		 * Background check dataset
		 * Required
		 */
		data_set: FormControl<string | null | undefined>,

		/**
		 * Dataset weight for score calculation
		 * Required
		 */
		weight: FormControl<string | null | undefined>,
	}
	export function CreateScoreConfigFormGroup() {
		return new FormGroup<ScoreConfigFormProperties>({
			data_set: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			weight: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Continuous check allows for background checks to be performed on the same people or vehicles periodically and notifies if new information is found. Allowing companies to keep an eye on their workforce or vehicle fleet for any recent wrongdoing they might be involved in. */
	export interface ContinuousCheck {

		/** Continuous check ID [partition key and sort key] */
		ContinuousCheckID?: string | null;

		/**
		 * Shows whether the background check score rose, fell, stood the same or was just created
		 * Required
		 */
		ContinuousCheckStatus: ContinuousCheckContinuousCheckStatus;

		/** Continuous check creation date in RFC3339 format */
		CreationDate?: Date | null;

		/** Indicates whether continuous check is enabled */
		Enabled?: boolean | null;

		/**
		 * Time between background checks. It can be daily, weekly, monthly, yearly or have a custom frequency written as a number accompanied by d: day, w: week, m: month, y: year for instance: 3d: every three days, 2w: every two weeks
		 * Required
		 */
		Frequency: string;

		/** Represents to changelog entry of a continuous check */
		History?: ContinuousCheckEntry;

		/**
		 * Last check ID
		 * Required
		 */
		LastCheckID: string;

		/** Next background check date, in RFC3339 format (without time) */
		NextRunDate?: Date | null;

		/** Represents a background check */
		OriginalCheck?: Check;

		/** Continuous check update date in RFC3339 format */
		UpdateDate?: Date | null;
	}

	/** Continuous check allows for background checks to be performed on the same people or vehicles periodically and notifies if new information is found. Allowing companies to keep an eye on their workforce or vehicle fleet for any recent wrongdoing they might be involved in. */
	export interface ContinuousCheckFormProperties {

		/** Continuous check ID [partition key and sort key] */
		ContinuousCheckID: FormControl<string | null | undefined>,

		/**
		 * Shows whether the background check score rose, fell, stood the same or was just created
		 * Required
		 */
		ContinuousCheckStatus: FormControl<ContinuousCheckContinuousCheckStatus | null | undefined>,

		/** Continuous check creation date in RFC3339 format */
		CreationDate: FormControl<Date | null | undefined>,

		/** Indicates whether continuous check is enabled */
		Enabled: FormControl<boolean | null | undefined>,

		/**
		 * Time between background checks. It can be daily, weekly, monthly, yearly or have a custom frequency written as a number accompanied by d: day, w: week, m: month, y: year for instance: 3d: every three days, 2w: every two weeks
		 * Required
		 */
		Frequency: FormControl<string | null | undefined>,

		/**
		 * Last check ID
		 * Required
		 */
		LastCheckID: FormControl<string | null | undefined>,

		/** Next background check date, in RFC3339 format (without time) */
		NextRunDate: FormControl<Date | null | undefined>,

		/** Continuous check update date in RFC3339 format */
		UpdateDate: FormControl<Date | null | undefined>,
	}
	export function CreateContinuousCheckFormGroup() {
		return new FormGroup<ContinuousCheckFormProperties>({
			ContinuousCheckID: new FormControl<string | null | undefined>(undefined),
			ContinuousCheckStatus: new FormControl<ContinuousCheckContinuousCheckStatus | null | undefined>(undefined, [Validators.required]),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			Frequency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastCheckID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextRunDate: new FormControl<Date | null | undefined>(undefined),
			UpdateDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ContinuousCheckContinuousCheckStatus { new = 0, up = 1, down = 2, same = 3 }


	/** Represents to changelog entry of a continuous check */
	export interface ContinuousCheckEntry {

		/** Change list of background check scores */
		changes?: Array<Change>;

		/** Check ID */
		check_id?: string | null;

		/** Continuous check ID */
		continuous_check_id?: string | null;

		/**
		 * Continuous check creation date in RFC3339 format
		 */
		creation_date?: Date | null;

		/** Previous check ID */
		previous_check_id?: string | null;
	}

	/** Represents to changelog entry of a continuous check */
	export interface ContinuousCheckEntryFormProperties {

		/** Check ID */
		check_id: FormControl<string | null | undefined>,

		/** Continuous check ID */
		continuous_check_id: FormControl<string | null | undefined>,

		/**
		 * Continuous check creation date in RFC3339 format
		 */
		creation_date: FormControl<Date | null | undefined>,

		/** Previous check ID */
		previous_check_id: FormControl<string | null | undefined>,
	}
	export function CreateContinuousCheckEntryFormGroup() {
		return new FormGroup<ContinuousCheckEntryFormProperties>({
			check_id: new FormControl<string | null | undefined>(undefined),
			continuous_check_id: new FormControl<string | null | undefined>(undefined),
			creation_date: new FormControl<Date | null | undefined>(undefined),
			previous_check_id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents information required to create an API key */
	export interface CreateAPIKeyInput {

		/**
		 * Time in days the API key will be valid for. 365 by default
		 * Required
		 */
		days_exp: number;

		/**
		 * API key name
		 * Required
		 */
		key_name: string;

		/**
		 * API key owner name
		 * Required
		 */
		tenant: string;

		/**
		 * API key version. 0 by default
		 * Required
		 */
		version: string;
	}

	/** Represents information required to create an API key */
	export interface CreateAPIKeyInputFormProperties {

		/**
		 * Time in days the API key will be valid for. 365 by default
		 * Required
		 */
		days_exp: FormControl<number | null | undefined>,

		/**
		 * API key name
		 * Required
		 */
		key_name: FormControl<string | null | undefined>,

		/**
		 * API key owner name
		 * Required
		 */
		tenant: FormControl<string | null | undefined>,

		/**
		 * API key version. 0 by default
		 * Required
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateCreateAPIKeyInputFormGroup() {
		return new FormGroup<CreateAPIKeyInputFormProperties>({
			days_exp: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			key_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tenant: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents paramaters required to give behavior feedback */
	export interface CreateBehaviorInput {

		/**
		 * Birth date of reported person
		 * Required
		 */
		birth_date: Date;

		/**
		 * Document country
		 * Required
		 */
		country: CreateBehaviorInputCountry;

		/**
		 * Person document ID
		 * Required
		 */
		document_id: string;

		/**
		 * Document type associated with the background check
		 * Required
		 */
		document_type: CreateBehaviorInputDocument_type;

		/**
		 * Reported person e-mail
		 * Required
		 */
		email: string;

		/**
		 * Behavior report date
		 * Required
		 */
		feedback_date: Date;

		/**
		 * Person first name
		 * Required
		 */
		first_name: string;

		/**
		 * Person last name
		 * Required
		 */
		last_name: string;

		/** Phone number of the reported person */
		phone_number?: string | null;

		/**
		 * Report reason
		 * Required
		 */
		reason: CreateBehaviorInputReason;
	}

	/** Represents paramaters required to give behavior feedback */
	export interface CreateBehaviorInputFormProperties {

		/**
		 * Birth date of reported person
		 * Required
		 */
		birth_date: FormControl<Date | null | undefined>,

		/**
		 * Document country
		 * Required
		 */
		country: FormControl<CreateBehaviorInputCountry | null | undefined>,

		/**
		 * Person document ID
		 * Required
		 */
		document_id: FormControl<string | null | undefined>,

		/**
		 * Document type associated with the background check
		 * Required
		 */
		document_type: FormControl<CreateBehaviorInputDocument_type | null | undefined>,

		/**
		 * Reported person e-mail
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * Behavior report date
		 * Required
		 */
		feedback_date: FormControl<Date | null | undefined>,

		/**
		 * Person first name
		 * Required
		 */
		first_name: FormControl<string | null | undefined>,

		/**
		 * Person last name
		 * Required
		 */
		last_name: FormControl<string | null | undefined>,

		/** Phone number of the reported person */
		phone_number: FormControl<string | null | undefined>,

		/**
		 * Report reason
		 * Required
		 */
		reason: FormControl<CreateBehaviorInputReason | null | undefined>,
	}
	export function CreateCreateBehaviorInputFormGroup() {
		return new FormGroup<CreateBehaviorInputFormProperties>({
			birth_date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<CreateBehaviorInputCountry | null | undefined>(undefined, [Validators.required]),
			document_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			document_type: new FormControl<CreateBehaviorInputDocument_type | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			feedback_date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			first_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			last_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phone_number: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<CreateBehaviorInputReason | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CreateBehaviorInputCountry { co = 0, ve = 1, cl = 2, mx = 3, pe = 4, do = 5, sv = 6, gt = 7, bo = 8, cr = 9, ec = 10, pa = 11, br = 12 }

	export enum CreateBehaviorInputDocument_type { 'national-id' = 0, passport = 1, 'foreign-id' = 2, nit = 3, 'diplomatic-id' = 4, 'civil-registration' = 5, 'identity-card' = 6, 'foreigner-card' = 7, 'professional-card' = 8, 'military-card' = 9, pep = 10, nis = 11, dni = 12, rui = 13, 'license-plate' = 14, query = 15, name = 16, rut = 17, nuip = 18, 'foreign-societies' = 19, escrow = 20, 'individual-registration' = 21, 'general-registration' = 22, curp = 23, dui = 24, 'driver-license' = 25, ruc = 26 }

	export enum CreateBehaviorInputReason { rape = 0, 'drug-dealer' = 1, 'sexual-harassment' = 2, theft = 3, fights = 4, 'aggressive-behaviour' = 5, 'identity-fraud' = 6, drunk = 7, 'drug-possession' = 8, absences = 9, tardiness = 10, 'confidentiality-breach' = 11, 'good-reputation' = 12 }


	/** Represents paramaters required to create a background check */
	export interface CreateCheckInput {

		/** Person birth certificate */
		birth_certificate?: string | null;

		/** Company name "Don't forget this required field to complete background checks in Brazil" */
		company_name?: string | null;

		/**
		 * Document country
		 * Required
		 */
		country: CheckCountry;

		/** Person birthdate. This date is used to get some additional information about a person and to filter homonyms in some cases. YYYY-MM-DD format, Required for complete background checks in Brazil */
		date_of_birth?: Date | null;

		/** Diplomatic ID */
		diplomatic_id?: string | null;

		/** Driver's license number */
		driver_license?: string | null;

		/** Colombian escrow */
		escrow?: string | null;

		/** Person or entity first name. If the document type and number are not provided, the report might include homonyms. Required when searching by first name, Required in order to get complete background checks in Brazil */
		first_name?: string | null;

		/** Forces a new background check creation when true. Reuses recently created background checks otherwise */
		force_creation?: boolean | null;

		/** Person foreign ID */
		foreign_id?: string | null;

		/** Person document issue date in "YYYY-mm-dd" format (e.g. 2008-12-31) . This date is used to get some additional information about a person in some cases */
		issue_date?: Date | null;

		/** Person or entity last name. If the document type and number are not provided, the report might include homonyms. Required when searching by last name. Required in order to get complete background checks in Brazil */
		last_name?: string | null;

		/** Vehicle license plate */
		license_plate?: string | null;

		/** National ID */
		national_id?: string | null;

		/** Country of birth */
		native_country?: string | null;

		/** National ID of the vehicle owner */
		owner_document_id?: string | null;

		/** National ID, foreign ID, or tax ID */
		owner_document_type?: string | null;

		/** Person passport */
		passport?: string | null;

		/** Payment day of a vehicle circulation permit (Chile only) */
		payment_date?: Date | null;

		/** ID for Venezuelans working in Colombia */
		pep?: string | null;

		/** Person phone number. Required by law to notify the person their background is being checked */
		phone_number?: string | null;

		/** Professional ID card */
		professional_card?: string | null;

		/** ID for Venezuelans working in Peru */
		ptp?: string | null;

		/** Region where the background is to be checked in addition to the region where the person is from. By default, background checks in Brazil are performed in the region where the person is from. Required for Brazil only. Allowed values are: DF: Distrito Federal, AC: Acre, AL: Alagoas, AP: Amapá, AM: Amazonas, BA: Bahía, CE: Ceará, ES: Espírito Santo, GO: Goiás, MA: Maranhão, MT: Mato Grosso, MS: Mato Grosso do Sul, MG: Minas Gerais, PA: Pará, PB: Paraíba, PR: Paraná, PE: Pernambuco, PI: Piauí, RJ: Río de Janeiro, RN: Río Grande do Norte, RS: Río Grande do Sul, RO: Rondônia, RR: Roraima, SC: Santa Catarina, SP: São Paulo, SE: Sergipe, TO : Tocantins. */
		region?: CheckRegion | null;

		/** Report ID the background check will be inserted into */
		report_id?: string | null;

		/** Used for the RG (Registro Geral) identification in Brazil. This identification has different formats according to the state that issues the document. It can have numbers and letters but other characters (- * , . ) are omitted, Required in order to get complete background checks in Brazil */
		state_id?: string | null;

		/** Company ID used for tax payments */
		tax_id?: string | null;

		/**
		 * Background check type
		 * Required
		 */
		type: CreateCheckInputType;

		/** Indicates whether the person subject to the validation authorized the validation. Must be true in order to proceed [Required for API key V1 or later] */
		user_authorized?: boolean | null;

		/** Vehicle license plate */
		vehicle_id?: string | null;

		/** Verification code registered for criminal records in Peru only */
		verification_code?: string | null;

		/** Indicates whether the check score is to be periodically revised and its frequency. It can be daily, weekly, monthly, yearly or have a custom frequency written as a number accompanied by d: day, w: week, m: month, y: year for instance: 3d: every three days, 2w: every two weeks. Ignore this field if the check is only to be performed once */
		watch?: string | null;
	}

	/** Represents paramaters required to create a background check */
	export interface CreateCheckInputFormProperties {

		/** Person birth certificate */
		birth_certificate: FormControl<string | null | undefined>,

		/** Company name "Don't forget this required field to complete background checks in Brazil" */
		company_name: FormControl<string | null | undefined>,

		/**
		 * Document country
		 * Required
		 */
		country: FormControl<CheckCountry | null | undefined>,

		/** Person birthdate. This date is used to get some additional information about a person and to filter homonyms in some cases. YYYY-MM-DD format, Required for complete background checks in Brazil */
		date_of_birth: FormControl<Date | null | undefined>,

		/** Diplomatic ID */
		diplomatic_id: FormControl<string | null | undefined>,

		/** Driver's license number */
		driver_license: FormControl<string | null | undefined>,

		/** Colombian escrow */
		escrow: FormControl<string | null | undefined>,

		/** Person or entity first name. If the document type and number are not provided, the report might include homonyms. Required when searching by first name, Required in order to get complete background checks in Brazil */
		first_name: FormControl<string | null | undefined>,

		/** Forces a new background check creation when true. Reuses recently created background checks otherwise */
		force_creation: FormControl<boolean | null | undefined>,

		/** Person foreign ID */
		foreign_id: FormControl<string | null | undefined>,

		/** Person document issue date in "YYYY-mm-dd" format (e.g. 2008-12-31) . This date is used to get some additional information about a person in some cases */
		issue_date: FormControl<Date | null | undefined>,

		/** Person or entity last name. If the document type and number are not provided, the report might include homonyms. Required when searching by last name. Required in order to get complete background checks in Brazil */
		last_name: FormControl<string | null | undefined>,

		/** Vehicle license plate */
		license_plate: FormControl<string | null | undefined>,

		/** National ID */
		national_id: FormControl<string | null | undefined>,

		/** Country of birth */
		native_country: FormControl<string | null | undefined>,

		/** National ID of the vehicle owner */
		owner_document_id: FormControl<string | null | undefined>,

		/** National ID, foreign ID, or tax ID */
		owner_document_type: FormControl<string | null | undefined>,

		/** Person passport */
		passport: FormControl<string | null | undefined>,

		/** Payment day of a vehicle circulation permit (Chile only) */
		payment_date: FormControl<Date | null | undefined>,

		/** ID for Venezuelans working in Colombia */
		pep: FormControl<string | null | undefined>,

		/** Person phone number. Required by law to notify the person their background is being checked */
		phone_number: FormControl<string | null | undefined>,

		/** Professional ID card */
		professional_card: FormControl<string | null | undefined>,

		/** ID for Venezuelans working in Peru */
		ptp: FormControl<string | null | undefined>,

		/** Region where the background is to be checked in addition to the region where the person is from. By default, background checks in Brazil are performed in the region where the person is from. Required for Brazil only. Allowed values are: DF: Distrito Federal, AC: Acre, AL: Alagoas, AP: Amapá, AM: Amazonas, BA: Bahía, CE: Ceará, ES: Espírito Santo, GO: Goiás, MA: Maranhão, MT: Mato Grosso, MS: Mato Grosso do Sul, MG: Minas Gerais, PA: Pará, PB: Paraíba, PR: Paraná, PE: Pernambuco, PI: Piauí, RJ: Río de Janeiro, RN: Río Grande do Norte, RS: Río Grande do Sul, RO: Rondônia, RR: Roraima, SC: Santa Catarina, SP: São Paulo, SE: Sergipe, TO : Tocantins. */
		region: FormControl<CheckRegion | null | undefined>,

		/** Report ID the background check will be inserted into */
		report_id: FormControl<string | null | undefined>,

		/** Used for the RG (Registro Geral) identification in Brazil. This identification has different formats according to the state that issues the document. It can have numbers and letters but other characters (- * , . ) are omitted, Required in order to get complete background checks in Brazil */
		state_id: FormControl<string | null | undefined>,

		/** Company ID used for tax payments */
		tax_id: FormControl<string | null | undefined>,

		/**
		 * Background check type
		 * Required
		 */
		type: FormControl<CreateCheckInputType | null | undefined>,

		/** Indicates whether the person subject to the validation authorized the validation. Must be true in order to proceed [Required for API key V1 or later] */
		user_authorized: FormControl<boolean | null | undefined>,

		/** Vehicle license plate */
		vehicle_id: FormControl<string | null | undefined>,

		/** Verification code registered for criminal records in Peru only */
		verification_code: FormControl<string | null | undefined>,

		/** Indicates whether the check score is to be periodically revised and its frequency. It can be daily, weekly, monthly, yearly or have a custom frequency written as a number accompanied by d: day, w: week, m: month, y: year for instance: 3d: every three days, 2w: every two weeks. Ignore this field if the check is only to be performed once */
		watch: FormControl<string | null | undefined>,
	}
	export function CreateCreateCheckInputFormGroup() {
		return new FormGroup<CreateCheckInputFormProperties>({
			birth_certificate: new FormControl<string | null | undefined>(undefined),
			company_name: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<CheckCountry | null | undefined>(undefined, [Validators.required]),
			date_of_birth: new FormControl<Date | null | undefined>(undefined),
			diplomatic_id: new FormControl<string | null | undefined>(undefined),
			driver_license: new FormControl<string | null | undefined>(undefined),
			escrow: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			force_creation: new FormControl<boolean | null | undefined>(undefined),
			foreign_id: new FormControl<string | null | undefined>(undefined),
			issue_date: new FormControl<Date | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			license_plate: new FormControl<string | null | undefined>(undefined),
			national_id: new FormControl<string | null | undefined>(undefined),
			native_country: new FormControl<string | null | undefined>(undefined),
			owner_document_id: new FormControl<string | null | undefined>(undefined),
			owner_document_type: new FormControl<string | null | undefined>(undefined),
			passport: new FormControl<string | null | undefined>(undefined),
			payment_date: new FormControl<Date | null | undefined>(undefined),
			pep: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
			professional_card: new FormControl<string | null | undefined>(undefined),
			ptp: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<CheckRegion | null | undefined>(undefined),
			report_id: new FormControl<string | null | undefined>(undefined),
			state_id: new FormControl<string | null | undefined>(undefined),
			tax_id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CreateCheckInputType | null | undefined>(undefined, [Validators.required]),
			user_authorized: new FormControl<boolean | null | undefined>(undefined),
			vehicle_id: new FormControl<string | null | undefined>(undefined),
			verification_code: new FormControl<string | null | undefined>(undefined),
			watch: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateCheckInputType { person = 0, vehicle = 1, company = 2, custom_type_name = 3 }


	/** Represents paramaters required to create a comment */
	export interface CreateCommentInput {

		/** Comment content */
		content?: any;
	}

	/** Represents paramaters required to create a comment */
	export interface CreateCommentInputFormProperties {

		/** Comment content */
		content: FormControl<any | null | undefined>,
	}
	export function CreateCreateCommentInputFormGroup() {
		return new FormGroup<CreateCommentInputFormProperties>({
			content: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Represents paramaters required to create a score configuration */
	export interface CreateConfigInput {

		/**
		 * Country where this set of rules applies. Use "all" if the check type searches by name by relying on international databases
		 * Required
		 */
		country: CheckCountry;

		/** Affiliation and insurance weight for score calculation. From 0 to 1 */
		dataset_affiliations_and_insurances?: number | null;

		/** Alert in media weight for score calculation. From 0 to 1 */
		dataset_alert_in_media?: number | null;

		/** Business background weight for score calculation. From 0 to 1 */
		dataset_business_background?: number | null;

		/** Criminal record weight for score calculation. From 0 to 1 */
		dataset_criminal_record?: number | null;

		/** Driving license weight for score calculation. From 0 to 1 */
		dataset_driving_licenses?: number | null;

		/** International background weight for score calculation. From 0 to 1 */
		dataset_international_background?: number | null;

		/** Legal background weight for score calculation. From 0 to 1 */
		dataset_legal_background?: number | null;

		/** Personal identity weight for score calculation. From 0 to 1 */
		dataset_personal_identity?: number | null;

		/** Professional background weight for score calculation. From 0 to 1 */
		dataset_professional_background?: number | null;

		/** Taxes and financial background weight for score calculation. From 0 to 1 */
		dataset_taxes_and_finances?: number | null;

		/** Traffic fines weight for score calculation. From 0 to 1 */
		dataset_traffic_fines?: number | null;

		/** Vehicle information weight for score calculation. From 0 to 1 */
		dataset_vehicle_information?: number | null;

		/** Vehicle certificate background weight for score calculation. From 0 to 1 */
		dataset_vehicle_permits?: number | null;

		/**
		 * Score configuration name. It cannot be person, vehicle, or company
		 * Required
		 */
		type: string;
	}

	/** Represents paramaters required to create a score configuration */
	export interface CreateConfigInputFormProperties {

		/**
		 * Country where this set of rules applies. Use "all" if the check type searches by name by relying on international databases
		 * Required
		 */
		country: FormControl<CheckCountry | null | undefined>,

		/** Affiliation and insurance weight for score calculation. From 0 to 1 */
		dataset_affiliations_and_insurances: FormControl<number | null | undefined>,

		/** Alert in media weight for score calculation. From 0 to 1 */
		dataset_alert_in_media: FormControl<number | null | undefined>,

		/** Business background weight for score calculation. From 0 to 1 */
		dataset_business_background: FormControl<number | null | undefined>,

		/** Criminal record weight for score calculation. From 0 to 1 */
		dataset_criminal_record: FormControl<number | null | undefined>,

		/** Driving license weight for score calculation. From 0 to 1 */
		dataset_driving_licenses: FormControl<number | null | undefined>,

		/** International background weight for score calculation. From 0 to 1 */
		dataset_international_background: FormControl<number | null | undefined>,

		/** Legal background weight for score calculation. From 0 to 1 */
		dataset_legal_background: FormControl<number | null | undefined>,

		/** Personal identity weight for score calculation. From 0 to 1 */
		dataset_personal_identity: FormControl<number | null | undefined>,

		/** Professional background weight for score calculation. From 0 to 1 */
		dataset_professional_background: FormControl<number | null | undefined>,

		/** Taxes and financial background weight for score calculation. From 0 to 1 */
		dataset_taxes_and_finances: FormControl<number | null | undefined>,

		/** Traffic fines weight for score calculation. From 0 to 1 */
		dataset_traffic_fines: FormControl<number | null | undefined>,

		/** Vehicle information weight for score calculation. From 0 to 1 */
		dataset_vehicle_information: FormControl<number | null | undefined>,

		/** Vehicle certificate background weight for score calculation. From 0 to 1 */
		dataset_vehicle_permits: FormControl<number | null | undefined>,

		/**
		 * Score configuration name. It cannot be person, vehicle, or company
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigInputFormGroup() {
		return new FormGroup<CreateConfigInputFormProperties>({
			country: new FormControl<CheckCountry | null | undefined>(undefined, [Validators.required]),
			dataset_affiliations_and_insurances: new FormControl<number | null | undefined>(undefined),
			dataset_alert_in_media: new FormControl<number | null | undefined>(undefined),
			dataset_business_background: new FormControl<number | null | undefined>(undefined),
			dataset_criminal_record: new FormControl<number | null | undefined>(undefined),
			dataset_driving_licenses: new FormControl<number | null | undefined>(undefined),
			dataset_international_background: new FormControl<number | null | undefined>(undefined),
			dataset_legal_background: new FormControl<number | null | undefined>(undefined),
			dataset_personal_identity: new FormControl<number | null | undefined>(undefined),
			dataset_professional_background: new FormControl<number | null | undefined>(undefined),
			dataset_taxes_and_finances: new FormControl<number | null | undefined>(undefined),
			dataset_traffic_fines: new FormControl<number | null | undefined>(undefined),
			dataset_vehicle_information: new FormControl<number | null | undefined>(undefined),
			dataset_vehicle_permits: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Represents to CreateContinuousCheckInput */
	export interface CreateContinuousCheckInput {

		/** Background checks to be processed recurrently */
		check_id?: string | null;

		/** Time between background checks. It can be daily, weekly, monthly, yearly or have a custom frequency written as a number accompanied by d: day, w: week, m: month, y: year for instance: 3d: every three days, 2w: every two weeks */
		frequency?: string | null;

		/** Indicates whether the background checks must be processed recurrently (enabled | disabled) */
		status?: string | null;
	}

	/**  Represents to CreateContinuousCheckInput */
	export interface CreateContinuousCheckInputFormProperties {

		/** Background checks to be processed recurrently */
		check_id: FormControl<string | null | undefined>,

		/** Time between background checks. It can be daily, weekly, monthly, yearly or have a custom frequency written as a number accompanied by d: day, w: week, m: month, y: year for instance: 3d: every three days, 2w: every two weeks */
		frequency: FormControl<string | null | undefined>,

		/** Indicates whether the background checks must be processed recurrently (enabled | disabled) */
		status: FormControl<string | null | undefined>,
	}
	export function CreateCreateContinuousCheckInputFormGroup() {
		return new FormGroup<CreateContinuousCheckInputFormProperties>({
			check_id: new FormControl<string | null | undefined>(undefined),
			frequency: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Creates a hook related to previous created check. */
	export interface CreateHookInput {

		/** Actions you want to be notified. Possible inputs are created, started, and finished or any combination of those three */
		actions?: Array<string>;

		/**
		 * The entity events the client wants to subscribe
		 * Required
		 */
		event_type: CreateHookInputEvent_type;

		/** indicates whether the hook is active or not. enabled by default */
		status?: CreateHookInputStatus | null;

		/** Email address where the notification is to be sent. Required if subscriber_type was set to email */
		subscriber_address?: string | null;

		/** Language for the notification to be sent */
		subscriber_language?: CreateHookInputSubscriber_language | null;

		/** Name of the person to be notified */
		subscriber_name?: string | null;

		/**
		 * A platform with an endpoint ready to process the information
		 * Required
		 */
		subscriber_type: CreateHookInputSubscriber_type;

		/** URL where the notification is to be sent. Required only if subscriber_type is set to web */
		subscriber_url?: string | null;
	}

	/** Creates a hook related to previous created check. */
	export interface CreateHookInputFormProperties {

		/**
		 * The entity events the client wants to subscribe
		 * Required
		 */
		event_type: FormControl<CreateHookInputEvent_type | null | undefined>,

		/** indicates whether the hook is active or not. enabled by default */
		status: FormControl<CreateHookInputStatus | null | undefined>,

		/** Email address where the notification is to be sent. Required if subscriber_type was set to email */
		subscriber_address: FormControl<string | null | undefined>,

		/** Language for the notification to be sent */
		subscriber_language: FormControl<CreateHookInputSubscriber_language | null | undefined>,

		/** Name of the person to be notified */
		subscriber_name: FormControl<string | null | undefined>,

		/**
		 * A platform with an endpoint ready to process the information
		 * Required
		 */
		subscriber_type: FormControl<CreateHookInputSubscriber_type | null | undefined>,

		/** URL where the notification is to be sent. Required only if subscriber_type is set to web */
		subscriber_url: FormControl<string | null | undefined>,
	}
	export function CreateCreateHookInputFormGroup() {
		return new FormGroup<CreateHookInputFormProperties>({
			event_type: new FormControl<CreateHookInputEvent_type | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<CreateHookInputStatus | null | undefined>(undefined),
			subscriber_address: new FormControl<string | null | undefined>(undefined),
			subscriber_language: new FormControl<CreateHookInputSubscriber_language | null | undefined>(undefined),
			subscriber_name: new FormControl<string | null | undefined>(undefined),
			subscriber_type: new FormControl<CreateHookInputSubscriber_type | null | undefined>(undefined, [Validators.required]),
			subscriber_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateHookInputEvent_type { all = 0, check = 1, continuous_check = 2 }

	export enum CreateHookInputStatus { enabled = 0, disabled = 1 }

	export enum CreateHookInputSubscriber_language { af = 0, ar = 1, ca = 2, cs = 3, da = 4, de = 5, el = 6, en = 7, es = 8, fi = 9, fr = 10, he = 11, hi = 12, hr = 13, hu = 14, id = 15, it = 16, ja = 17, ko = 18, ms = 19, nb = 20, nl = 21, pl = 22, pt = 23, 'pr-BR' = 24, ro = 25, ru = 26, sv = 27, th = 28, tl = 29, tr = 30, vi = 31, zh = 32, 'zh-CN' = 33, 'zh-HK' = 34 }

	export enum CreateHookInputSubscriber_type { web = 0, email = 1 }


	/** Represents paramaters required to create a report */
	export interface CreateReportInput {

		/**
		 * Report name
		 * Required
		 */
		name: string;
	}

	/** Represents paramaters required to create a report */
	export interface CreateReportInputFormProperties {

		/**
		 * Report name
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateReportInputFormGroup() {
		return new FormGroup<CreateReportInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents paramaters required to create a rule */
	export interface CreateRuleInput {

		/**
		 * Used on the scores that fulfil this rule
		 * Required
		 */
		label: string;

		/**
		 * Rule nature
		 * Required
		 */
		level: CreateRuleInputLevel;

		/**
		 * Comparison between the rule and score values
		 * Required
		 */
		operation: CreateRuleInputOperation;

		/**
		 * Rule value
		 * Required
		 */
		value: number;
	}

	/** Represents paramaters required to create a rule */
	export interface CreateRuleInputFormProperties {

		/**
		 * Used on the scores that fulfil this rule
		 * Required
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * Rule nature
		 * Required
		 */
		level: FormControl<CreateRuleInputLevel | null | undefined>,

		/**
		 * Comparison between the rule and score values
		 * Required
		 */
		operation: FormControl<CreateRuleInputOperation | null | undefined>,

		/**
		 * Rule value
		 * Required
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateCreateRuleInputFormGroup() {
		return new FormGroup<CreateRuleInputFormProperties>({
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			level: new FormControl<CreateRuleInputLevel | null | undefined>(undefined, [Validators.required]),
			operation: new FormControl<CreateRuleInputOperation | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CreateRuleInputLevel { danger = 0, warning = 1, success = 2, info = 3 }

	export enum CreateRuleInputOperation { '==' = 0, '>=' = 1, '>' = 2, '<' = 3, '<=' = 4 }


	/** Represents the inputs required to create a user for an API-key version */
	export interface CreateUserInput {

		/**
		 * User country
		 * Required
		 */
		country: string;

		/**
		 * User account email
		 * Required
		 */
		email: string;

		/**
		 * User phone number (including country code)
		 * Required
		 */
		phone_number: string;

		/**
		 * Account name
		 * Required
		 */
		tenant: string;
	}

	/** Represents the inputs required to create a user for an API-key version */
	export interface CreateUserInputFormProperties {

		/**
		 * User country
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * User account email
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * User phone number (including country code)
		 * Required
		 */
		phone_number: FormControl<string | null | undefined>,

		/**
		 * Account name
		 * Required
		 */
		tenant: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserInputFormGroup() {
		return new FormGroup<CreateUserInputFormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phone_number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tenant: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents a database as well as an hourly status */
	export interface Database {

		/** List of data sets fed by the database. It can contain ``affiliations_and_insurances``, ``alert_in:media``, ``business_background``, ``criminal_record``, ``driving_licenses``, ``international_background``, ``legal_background``, ``personal_identity``, ``permiso_de_circulación_covid-19``, ``professional_background``, ``traffic_fines``, ``vehicle_information``, ``vehicle_permits``, ``behaviour_and_reputation``, or ``taxes_and_finances`` */
		data_sets?: Array<string>;

		/** Database identifier */
		database_id?: string | null;

		/** Database name. Do not use this field to identify the database as it might change, use database_id instead */
		database_name?: string | null;

		/** An hourly list of the database statuses. The ``operational`` status means the database executions were at least 90% successful, ``degraded_performance`` means the database executions were from 50 to 90% successful, ``partial_outage`` means the database executions were from 10 to 50% sucessful, ``major_outage`` means the database executions were under 10% successful. ``under_maintenance`` means the database is temporarily out of service for maintenance, ``deprecated`` means the database is permanently out of service, ``undetermined`` means there was no enough data to assess the database status */
		hourly_status?: Array<string>;
	}

	/** Represents a database as well as an hourly status */
	export interface DatabaseFormProperties {

		/** Database identifier */
		database_id: FormControl<string | null | undefined>,

		/** Database name. Do not use this field to identify the database as it might change, use database_id instead */
		database_name: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseFormGroup() {
		return new FormGroup<DatabaseFormProperties>({
			database_id: new FormControl<string | null | undefined>(undefined),
			database_name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input required to delete an API Key */
	export interface DeleteAPIKeyInput {

		/**
		 * Key name
		 * Required
		 */
		key_name: string;
	}

	/** Represents the input required to delete an API Key */
	export interface DeleteAPIKeyInputFormProperties {

		/**
		 * Key name
		 * Required
		 */
		key_name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAPIKeyInputFormGroup() {
		return new FormGroup<DeleteAPIKeyInputFormProperties>({
			key_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the inputs required to delete a Custom Type */
	export interface DeleteConfigInput {
	}

	/** Represents the inputs required to delete a Custom Type */
	export interface DeleteConfigInputFormProperties {
	}
	export function CreateDeleteConfigInputFormGroup() {
		return new FormGroup<DeleteConfigInputFormProperties>({
		});

	}


	/** Repersents the input required to delete an API key user */
	export interface DeleteUserInput {

		/**
		 * email of the API key user
		 * Required
		 */
		email: string;
	}

	/** Repersents the input required to delete an API key user */
	export interface DeleteUserInputFormProperties {

		/**
		 * email of the API key user
		 * Required
		 */
		email: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUserInputFormGroup() {
		return new FormGroup<DeleteUserInputFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * The error type is returned when an error occurred in the platform.
	 * Error codes include:
	 * - 10404: resource was not found
	 */
	export interface Error {

		/**
		 * Error code
		 * Required
		 */
		code: string;

		/**
		 * Message describing the error
		 * Required
		 */
		message: string;
	}

	/**
	 * The error type is returned when an error occurred in the platform.
	 * Error codes include:
	 * - 10404: resource was not found
	 */
	export interface ErrorFormProperties {

		/**
		 * Error code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * Message describing the error
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** GetContiuousCheckHistoryOutput */
	export interface GetContiuousCheckHistoryOutput {

		/**
		 * List of background check changelogs
		 * Required
		 */
		history: Array<Change>;

		/** Next page URL */
		next?: string | null;

		/** Current page URL */
		self?: string | null;
	}

	/** GetContiuousCheckHistoryOutput */
	export interface GetContiuousCheckHistoryOutputFormProperties {

		/** Next page URL */
		next: FormControl<string | null | undefined>,

		/** Current page URL */
		self: FormControl<string | null | undefined>,
	}
	export function CreateGetContiuousCheckHistoryOutputFormGroup() {
		return new FormGroup<GetContiuousCheckHistoryOutputFormProperties>({
			next: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input required for health dashboard searches */
	export interface GetHealthDashboardInput {

		/**
		 * Database country in ISO 3166 code. Must be in all caps.
		 * Required
		 */
		country: string;

		/**
		 * Unix timestamp. Send the current time to know the status
		 * Required
		 */
		unixTimestampSeconds: string;

		/**
		 * Offset between the local time and the UTC time in seconds. (e.g., Colombia is located at UTC -18000 seconds)
		 * Required
		 */
		unixtimezoneOffsetSeconds: string;
	}

	/** Represents the input required for health dashboard searches */
	export interface GetHealthDashboardInputFormProperties {

		/**
		 * Database country in ISO 3166 code. Must be in all caps.
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Unix timestamp. Send the current time to know the status
		 * Required
		 */
		unixTimestampSeconds: FormControl<string | null | undefined>,

		/**
		 * Offset between the local time and the UTC time in seconds. (e.g., Colombia is located at UTC -18000 seconds)
		 * Required
		 */
		unixtimezoneOffsetSeconds: FormControl<string | null | undefined>,
	}
	export function CreateGetHealthDashboardInputFormGroup() {
		return new FormGroup<GetHealthDashboardInputFormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			unixTimestampSeconds: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			unixtimezoneOffsetSeconds: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents a hook configuration */
	export interface Hook {

		/** Actions you want to be notified. Possible inputs are created, started, and finished or any combination of those three */
		actions?: Array<string>;

		/** Entity events you want to be notified. If all is selected, there is no need to enter actions */
		event_type?: HookEvent_type | null;

		/** Secret random hexadecimal key used to sign the event and confirm its legitimacy. Signing keys are used to decode the JWT you get as payload from events */
		signing_key?: string | null;

		/** indicates whether the hook is active or not. enabled by default */
		status?: CreateHookInputStatus | null;

		/** Platform with an endpoint ready to process the information. Only web is supported currently */
		subscriber_type?: string | null;

		/** Link where notification requests will be sent, required when subscriber_type is web */
		subscriber_url?: string | null;
	}

	/** Represents a hook configuration */
	export interface HookFormProperties {

		/** Entity events you want to be notified. If all is selected, there is no need to enter actions */
		event_type: FormControl<HookEvent_type | null | undefined>,

		/** Secret random hexadecimal key used to sign the event and confirm its legitimacy. Signing keys are used to decode the JWT you get as payload from events */
		signing_key: FormControl<string | null | undefined>,

		/** indicates whether the hook is active or not. enabled by default */
		status: FormControl<CreateHookInputStatus | null | undefined>,

		/** Platform with an endpoint ready to process the information. Only web is supported currently */
		subscriber_type: FormControl<string | null | undefined>,

		/** Link where notification requests will be sent, required when subscriber_type is web */
		subscriber_url: FormControl<string | null | undefined>,
	}
	export function CreateHookFormGroup() {
		return new FormGroup<HookFormProperties>({
			event_type: new FormControl<HookEvent_type | null | undefined>(undefined),
			signing_key: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CreateHookInputStatus | null | undefined>(undefined),
			subscriber_type: new FormControl<string | null | undefined>(undefined),
			subscriber_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HookEvent_type { all = 0, check = 1 }


	/** Represents the output of lists hooks request. */
	export interface HookOutput {

		/** List of hooks in current page. */
		hooks?: Array<Hook>;

		/** Next page URL */
		next?: string | null;

		/** Current page URL */
		self?: string | null;

		/** HMAC key needed to decode the JWTs you will receive. All events are sent in JWT format, this key is needed in order to ensure that only authorized users can decode the information. */
		signing_key?: string | null;
	}

	/** Represents the output of lists hooks request. */
	export interface HookOutputFormProperties {

		/** Next page URL */
		next: FormControl<string | null | undefined>,

		/** Current page URL */
		self: FormControl<string | null | undefined>,

		/** HMAC key needed to decode the JWTs you will receive. All events are sent in JWT format, this key is needed in order to ensure that only authorized users can decode the information. */
		signing_key: FormControl<string | null | undefined>,
	}
	export function CreateHookOutputFormGroup() {
		return new FormGroup<HookOutputFormProperties>({
			next: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
			signing_key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents to ListContinuousChecksOutput */
	export interface ListContinuousChecksOutput {

		/**
		 * List of continuous checks in current page
		 * Default: all
		 */
		continuous_checks?: Array<Check>;

		/** Next page URL */
		next?: string | null;

		/** Current page URL */
		self?: string | null;
	}

	/** Represents to ListContinuousChecksOutput */
	export interface ListContinuousChecksOutputFormProperties {

		/** Next page URL */
		next: FormControl<string | null | undefined>,

		/** Current page URL */
		self: FormControl<string | null | undefined>,
	}
	export function CreateListContinuousChecksOutputFormGroup() {
		return new FormGroup<ListContinuousChecksOutputFormProperties>({
			next: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents reports */
	export interface Report {

		/** name of the user who created the report */
		created_by?: string | null;

		/** Amount of created checks. Returned only when a file is uploaded */
		created_checks_count?: number | null;

		/**
		 * Report creation date
		 * Required
		 */
		creation_date: Date;

		/** Indicates whether the report has an associated file */
		has_data?: boolean | null;

		/**
		 * Report ID
		 * Required
		 */
		id: string;

		/** number of invalid rows in the uploaded file. Returned only when a file is uploaded */
		invalid_checks_count?: number | null;

		/**
		 * Report name
		 * Required
		 */
		name: string;

		/** Uploaded file row count. Returned only when a file is uploaded */
		size?: number | null;

		/**
		 * Latest modification date of the report
		 * Required
		 */
		update_date: Date;
	}

	/** Represents reports */
	export interface ReportFormProperties {

		/** name of the user who created the report */
		created_by: FormControl<string | null | undefined>,

		/** Amount of created checks. Returned only when a file is uploaded */
		created_checks_count: FormControl<number | null | undefined>,

		/**
		 * Report creation date
		 * Required
		 */
		creation_date: FormControl<Date | null | undefined>,

		/** Indicates whether the report has an associated file */
		has_data: FormControl<boolean | null | undefined>,

		/**
		 * Report ID
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** number of invalid rows in the uploaded file. Returned only when a file is uploaded */
		invalid_checks_count: FormControl<number | null | undefined>,

		/**
		 * Report name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Uploaded file row count. Returned only when a file is uploaded */
		size: FormControl<number | null | undefined>,

		/**
		 * Latest modification date of the report
		 * Required
		 */
		update_date: FormControl<Date | null | undefined>,
	}
	export function CreateReportFormGroup() {
		return new FormGroup<ReportFormProperties>({
			created_by: new FormControl<string | null | undefined>(undefined),
			created_checks_count: new FormControl<number | null | undefined>(undefined),
			creation_date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			has_data: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			invalid_checks_count: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<number | null | undefined>(undefined),
			update_date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Reprents the report creation result */
	export interface ReportOutput {

		/**
		 * Path to background check list
		 * Required
		 */
		checks: string;

		/**
		 * Represents reports
		 * Required
		 */
		report: Report;

		/** Path to this resource */
		self?: string | null;
	}

	/** Reprents the report creation result */
	export interface ReportOutputFormProperties {

		/**
		 * Path to background check list
		 * Required
		 */
		checks: FormControl<string | null | undefined>,

		/** Path to this resource */
		self: FormControl<string | null | undefined>,
	}
	export function CreateReportOutputFormGroup() {
		return new FormGroup<ReportOutputFormProperties>({
			checks: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of report searches */
	export interface ReportsOutput {

		/** Next page path */
		next?: string | null;

		/**
		 * Report list
		 * Required
		 */
		reports: Array<Report>;

		/**
		 * Current page path
		 * Required
		 */
		self: string;
	}

	/** Represents the result of report searches */
	export interface ReportsOutputFormProperties {

		/** Next page path */
		next: FormControl<string | null | undefined>,

		/**
		 * Current page path
		 * Required
		 */
		self: FormControl<string | null | undefined>,
	}
	export function CreateReportsOutputFormGroup() {
		return new FormGroup<ReportsOutputFormProperties>({
			next: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents a rule */
	export interface Rule {

		/**
		 * Rule nature
		 * Required
		 */
		level: RuleLevel;

		/**
		 * Comparison between the rule and score values
		 * Required
		 */
		operation: RuleOperation;

		/** Used on the scores that fulfil this rule */
		outcome_label?: string | null;

		/**
		 * Rule value
		 * Required
		 */
		value: number;
	}

	/** Represents a rule */
	export interface RuleFormProperties {

		/**
		 * Rule nature
		 * Required
		 */
		level: FormControl<RuleLevel | null | undefined>,

		/**
		 * Comparison between the rule and score values
		 * Required
		 */
		operation: FormControl<RuleOperation | null | undefined>,

		/** Used on the scores that fulfil this rule */
		outcome_label: FormControl<string | null | undefined>,

		/**
		 * Rule value
		 * Required
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateRuleFormGroup() {
		return new FormGroup<RuleFormProperties>({
			level: new FormControl<RuleLevel | null | undefined>(undefined, [Validators.required]),
			operation: new FormControl<RuleOperation | null | undefined>(undefined, [Validators.required]),
			outcome_label: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RuleLevel { danger = 0, warning = 1, success = 2, info = 3 }

	export enum RuleOperation { '==' = 0, '>=' = 1, '>' = 2, '<' = 3, '<=' = 4 }


	/** Represents the result of a rule search */
	export interface RuleOutput {

		/**
		 * Represents a rule
		 * Required
		 */
		rule: Rule;

		/**
		 * Path to this rule
		 * Required
		 */
		self: string;
	}

	/** Represents the result of a rule search */
	export interface RuleOutputFormProperties {

		/**
		 * Path to this rule
		 * Required
		 */
		self: FormControl<string | null | undefined>,
	}
	export function CreateRuleOutputFormGroup() {
		return new FormGroup<RuleOutputFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents a list of score configurations that apply in the country */
	export interface ScoreConfigOutput {

		/** List of score configs that apply for the country */
		ScoreConfigByCountry?: Array<ScoreConfig>;
	}

	/** Represents a list of score configurations that apply in the country */
	export interface ScoreConfigOutputFormProperties {
	}
	export function CreateScoreConfigOutputFormGroup() {
		return new FormGroup<ScoreConfigOutputFormProperties>({
		});

	}


	/** The result of an operation that returns multiple score configs */
	export interface ScoreConfigsOutput {

		/**
		 * The list of score configs
		 * Required
		 */
		score_configs: Array<ScoreConfigOutput>;
	}

	/** The result of an operation that returns multiple score configs */
	export interface ScoreConfigsOutputFormProperties {
	}
	export function CreateScoreConfigsOutputFormGroup() {
		return new FormGroup<ScoreConfigsOutputFormProperties>({
		});

	}


	/** Subscriber attribute that depends on the subscriber_type. */
	export interface Subscriber {

		/**
		 * Link where notification requests will be sent in case subscriber_type is web
		 * Required
		 */
		url: string;
	}

	/** Subscriber attribute that depends on the subscriber_type. */
	export interface SubscriberFormProperties {

		/**
		 * Link where notification requests will be sent in case subscriber_type is web
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateSubscriberFormGroup() {
		return new FormGroup<SubscriberFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the input required to update an API key */
	export interface UpdateAPIKeyInput {

		/**
		 * API key Version
		 * Required
		 */
		api_key_version: string;

		/**
		 * API key name
		 * Required
		 */
		key_name: string;
	}

	/** Represents the input required to update an API key */
	export interface UpdateAPIKeyInputFormProperties {

		/**
		 * API key Version
		 * Required
		 */
		api_key_version: FormControl<string | null | undefined>,

		/**
		 * API key name
		 * Required
		 */
		key_name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAPIKeyInputFormGroup() {
		return new FormGroup<UpdateAPIKeyInputFormProperties>({
			api_key_version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			key_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Represents to UpdateContinuousCheckInput */
	export interface UpdateContinuousCheckInput {

		/**
		 * Time between background checks
		 * Required
		 */
		frequency: string;

		/**
		 * Indicates whether the background checks must be processed recurrently
		 * Required
		 */
		status: CreateHookInputStatus;
	}

	/**  Represents to UpdateContinuousCheckInput */
	export interface UpdateContinuousCheckInputFormProperties {

		/**
		 * Time between background checks
		 * Required
		 */
		frequency: FormControl<string | null | undefined>,

		/**
		 * Indicates whether the background checks must be processed recurrently
		 * Required
		 */
		status: FormControl<CreateHookInputStatus | null | undefined>,
	}
	export function CreateUpdateContinuousCheckInputFormGroup() {
		return new FormGroup<UpdateContinuousCheckInputFormProperties>({
			frequency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<CreateHookInputStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents a user of API-key access control */
	export interface User {

		/** User email */
		email?: string | null;

		/** Indicates whether the user is allowed to access or not */
		enabled?: boolean | null;

		/** Date on which the user was created */
		user_creation_date?: string | null;

		/** Indicates whether the user is confirmed or needs to change their password */
		user_status?: UserUser_status | null;

		/** Username */
		username?: string | null;
	}

	/** Represents a user of API-key access control */
	export interface UserFormProperties {

		/** User email */
		email: FormControl<string | null | undefined>,

		/** Indicates whether the user is allowed to access or not */
		enabled: FormControl<boolean | null | undefined>,

		/** Date on which the user was created */
		user_creation_date: FormControl<string | null | undefined>,

		/** Indicates whether the user is confirmed or needs to change their password */
		user_status: FormControl<UserUser_status | null | undefined>,

		/** Username */
		username: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			user_creation_date: new FormControl<string | null | undefined>(undefined),
			user_status: new FormControl<UserUser_status | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UserUser_status { FORCE_CHANGE_PASSWORD = 0, CONFIRMED = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List Checks
		 * Lists the existing checks in the account or in a specified report.
		 * Get v1/checks
		 * @param {string} start_key Start key value for the pagination
		 * @param {string} report_id Report id checks to be returned
		 * @return {ChecksOutput} 
		 */
		ListChecks(start_key: string | null | undefined, report_id: string | null | undefined): Observable<ChecksOutput> {
			return this.http.get<ChecksOutput>(this.baseUri + 'v1/checks?start_key=' + (start_key == null ? '' : encodeURIComponent(start_key)) + '&report_id=' + (report_id == null ? '' : encodeURIComponent(report_id)), {});
		}

		/**
		 * Get Health Dashboard
		 * Get the status of a database
		 * Get v1/checks/health
		 * @param {string} country Country in ISO 3166, uppercase
		 * @param {string} unixTimestampSeconds Unix timestamp in seconds. Send a day timestamp to view the database hourly status for that day or send the current time to know the current database status
		 * @param {string} unixtimezoneOffsetSeconds Offset between the local time and the UTC time in seconds. (e.g., Colombia is at UTC -18000 seconds)
		 * @return {Array<Database>} OK
		 */
		GetHealthDashboard(country: string | null | undefined, unixTimestampSeconds: string | null | undefined, unixtimezoneOffsetSeconds: string | null | undefined): Observable<Array<Database>> {
			return this.http.get<Array<Database>>(this.baseUri + 'v1/checks/health?country=' + (country == null ? '' : encodeURIComponent(country)) + '&unixTimestampSeconds=' + (unixTimestampSeconds == null ? '' : encodeURIComponent(unixTimestampSeconds)) + '&unixtimezoneOffsetSeconds=' + (unixtimezoneOffsetSeconds == null ? '' : encodeURIComponent(unixtimezoneOffsetSeconds)), {});
		}

		/**
		 * Get Background Check
		 * Returns the results of the check that matches the ID provided, complete with a set of scores explained below.
		 * ### Scores:
		 * - **Global Score**: Average risk associated with a person, company or vehicle, according to  the background check results. The global score considers results that are validated with the  ID number provided. The score ranges from 0 to 1, where 0 represents high risk and 1 low risk.
		 * - **ID Score**: Average risk associated with a person according to the background check  results. The ID score considers the results that are validated with a person identity  document. The score ranges from 0 to 1, where 0 represents high risk and 1 low risk.
		 * - **Homonym Score**: Average risk associated with a person according to the background check  results. The homonym score considers results that are validated against the name of a person and could not be validated with their ID number. These results might have homonyms associated with them. The score ranges from 0 to 1, where 0 represents high risk and 1 low risk.
		 * In order to calculate these scores, a weighted average is considered with different weights allocated to each dataset. Scores can be customized using the config endpoints by assigning a weight to each dataset according to its relevance.
		 * Keep in mind that results from the API vary depending on the country, check type and the inputs entered on check creation.
		 * Get v1/checks/{check_id}
		 * @param {string} check_id Check ID
		 * @return {CheckOutput} 
		 */
		GetCheck(check_id: string): Observable<CheckOutput> {
			return this.http.get<CheckOutput>(this.baseUri + 'v1/checks/' + (check_id == null ? '' : encodeURIComponent(check_id)), {});
		}

		/**
		 * List Check Details
		 * Lists all details associated with a Check. It can be paginated.
		 * Get v1/checks/{check_id}/details
		 * @param {string} start_key Start key value for the pagination
		 * @param {string} lang This parameter is used to specify the language wanted for details, if not specified details will come in their original language.
		 * @return {CheckDetailsOutput} 
		 */
		ListCheckDetails(start_key: string | null | undefined, lang: string | null | undefined): Observable<CheckDetailsOutput> {
			return this.http.get<CheckDetailsOutput>(this.baseUri + 'v1/checks/{check_id}/details?start_key=' + (start_key == null ? '' : encodeURIComponent(start_key)) + '&lang=' + (lang == null ? '' : encodeURIComponent(lang)), {});
		}

		/**
		 * Get PDF
		 * Downloads the PDF in the specified language, Spanish by default.
		 * Get v1/checks/{check_id}/pdf
		 * @param {string} lang Used to specify the language for the PDF, if not specified the PDF will be downloaded in Spanish.
		 * @param {string} check_id ID of the check
		 * @return {void} Downloads the PDF of the check
		 */
		GetPDF(lang: string | null | undefined, check_id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/checks/' + (check_id == null ? '' : encodeURIComponent(check_id)) + '/pdf?lang=' + (lang == null ? '' : encodeURIComponent(lang)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create PDF
		 * Creates a PDF containing the background check results.
		 * Post v1/checks/{check_id}/pdf
		 * @param {string} check_id ID of the check
		 * @return {void} Outputs the link to download the PDF
		 */
		CreatePDF(check_id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/checks/' + (check_id == null ? '' : encodeURIComponent(check_id)) + '/pdf', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Custom Type
		 * Allows deleting a custom type. Person, vehicle, and company types cannot be deleted
		 * Delete v1/config
		 * @param {string} type Name of the custom type to be deleted
		 * @param {DeleteCustomTypeCountry} country Country where the custom type is valid
		 * @return {void} OK
		 */
		DeleteCustomType(type: string, country: DeleteCustomTypeCountry | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/config?type=' + (type == null ? '' : encodeURIComponent(type)) + '&country=' + country, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List Score Configurations
		 * Lists the custom score configurations of the associated account.
		 * Get v1/config
		 * @param {string} start_key The key to start the pagination
		 * @return {ScoreConfigsOutput} 
		 */
		ListScoreConfigs(start_key: string | null | undefined): Observable<ScoreConfigsOutput> {
			return this.http.get<ScoreConfigsOutput>(this.baseUri + 'v1/config?start_key=' + (start_key == null ? '' : encodeURIComponent(start_key)), {});
		}

		/**
		 * Lists all continuous checks
		 * Get v1/continuous-checks
		 * @return {ListContinuousChecksOutput} OK
		 */
		ListContinuousChecks(): Observable<ListContinuousChecksOutput> {
			return this.http.get<ListContinuousChecksOutput>(this.baseUri + 'v1/continuous-checks', {});
		}

		/**
		 * Lists history associated with a Check. It can be paginated
		 * Get v1/continuous-checks/{continuous_check_id}
		 * @return {ContinuousCheck} Success
		 */
		GetContinuousCheck(): Observable<ContinuousCheck> {
			return this.http.get<ContinuousCheck>(this.baseUri + 'v1/continuous-checks/{continuous_check_id}', {});
		}

		/**
		 * Lists background check logs. It can be paginated
		 * Get v1/continuous-checks/{continuous_check_id}/history
		 * @return {GetContiuousCheckHistoryOutput} ok
		 */
		ContinuousGetByContinuous_check_id(continuous_check_id: string): Observable<GetContiuousCheckHistoryOutput> {
			return this.http.get<GetContiuousCheckHistoryOutput>(this.baseUri + 'v1/continuous-checks/' + (continuous_check_id == null ? '' : encodeURIComponent(continuous_check_id)) + '/history', {});
		}

		/**
		 * Lists all hooks
		 * Lists all the configured hooks in your account.
		 * Get v1/hooks
		 * @return {HookOutput} 
		 */
		ListHook(): Observable<HookOutput> {
			return this.http.get<HookOutput>(this.baseUri + 'v1/hooks', {});
		}

		/**
		 * Deletes hook
		 * Deletes hook configuration.
		 * Delete v1/hooks/{hook_id}
		 * @param {string} hook_id Hook ID
		 * @return {string} 
		 */
		DeletHook(hook_id: string): Observable<string> {
			return this.http.delete(this.baseUri + 'v1/hooks/' + (hook_id == null ? '' : encodeURIComponent(hook_id)), { responseType: 'text' });
		}

		/**
		 * List Reports
		 * Lists all reports asociated with the client or user requesting.
		 * Get v1/reports
		 * @param {string} start_key Start value for pagination.
		 * @param {string} username filter reports created by the specified username
		 * @return {ReportsOutput} Response containing list of reports
		 */
		ListReports(start_key: string | null | undefined, username: string | null | undefined): Observable<ReportsOutput> {
			return this.http.get<ReportsOutput>(this.baseUri + 'v1/reports?start_key=' + (start_key == null ? '' : encodeURIComponent(start_key)) + '&username=' + (username == null ? '' : encodeURIComponent(username)), {});
		}

		/**
		 * Get Report
		 * Returns a report with the given ID.
		 * Get v1/reports/{report_id}
		 * @return {ReportOutput} 
		 */
		GetReport(): Observable<ReportOutput> {
			return this.http.get<ReportOutput>(this.baseUri + 'v1/reports/{report_id}', {});
		}
	}

	export enum CreateCheckTruora_Priority { low = 0, medium = 1, high = 2 }

	export enum DeleteCustomTypeCountry { BR = 0, CL = 1, CO = 2, CR = 3, EC = 4, MX = 5, PE = 6, ALL = 7 }

}

