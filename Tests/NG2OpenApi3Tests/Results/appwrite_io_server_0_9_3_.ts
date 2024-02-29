import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Collection */
	export interface Collection {

		/**
		 * Collection ID.
		 * Required
		 */
		'$id': string;

		/**
		 * Collection permissions.
		 * Required
		 */
		'$permissions': string;

		/**
		 * Collection creation date in Unix timestamp.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dateCreated: number;

		/**
		 * Collection creation date in Unix timestamp.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dateUpdated: number;

		/**
		 * Collection name.
		 * Required
		 */
		name: string;

		/**
		 * Collection rules.
		 * Required
		 */
		rules: Array<Rule>;
	}

	/** Collection */
	export interface CollectionFormProperties {

		/**
		 * Collection ID.
		 * Required
		 */
		'$id': FormControl<string | null | undefined>,

		/**
		 * Collection permissions.
		 * Required
		 */
		'$permissions': FormControl<string | null | undefined>,

		/**
		 * Collection creation date in Unix timestamp.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dateCreated: FormControl<number | null | undefined>,

		/**
		 * Collection creation date in Unix timestamp.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dateUpdated: FormControl<number | null | undefined>,

		/**
		 * Collection name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCollectionFormGroup() {
		return new FormGroup<CollectionFormProperties>({
			'$id': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'$permissions': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dateCreated: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			dateUpdated: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Rule */
	export interface Rule {

		/**
		 * Rule Collection.
		 * Required
		 */
		'$collection': string;

		/**
		 * Rule ID.
		 * Required
		 */
		'$id': string;

		/**
		 * Is array?
		 * Required
		 */
		array: boolean;

		/**
		 * Rule default value.
		 * Required
		 */
		default: string;

		/**
		 * Rule key.
		 * Required
		 */
		key: string;

		/**
		 * Rule label.
		 * Required
		 */
		label: string;

		/**
		 * List of allowed values
		 * Required
		 */
		list: Array<string>;

		/**
		 * Is required?
		 * Required
		 */
		required: boolean;

		/**
		 * Rule type. Possible values:
		 * Required
		 */
		type: string;
	}

	/** Rule */
	export interface RuleFormProperties {

		/**
		 * Rule Collection.
		 * Required
		 */
		'$collection': FormControl<string | null | undefined>,

		/**
		 * Rule ID.
		 * Required
		 */
		'$id': FormControl<string | null | undefined>,

		/**
		 * Is array?
		 * Required
		 */
		array: FormControl<boolean | null | undefined>,

		/**
		 * Rule default value.
		 * Required
		 */
		default: FormControl<string | null | undefined>,

		/**
		 * Rule key.
		 * Required
		 */
		key: FormControl<string | null | undefined>,

		/**
		 * Rule label.
		 * Required
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * Is required?
		 * Required
		 */
		required: FormControl<boolean | null | undefined>,

		/**
		 * Rule type. Possible values:
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRuleFormGroup() {
		return new FormGroup<RuleFormProperties>({
			'$collection': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'$id': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			array: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			default: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			required: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Collections List */
	export interface CollectionList {

		/**
		 * List of collections.
		 * Required
		 */
		collections: Array<Collection>;

		/**
		 * Total sum of items in the list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sum: number;
	}

	/** Collections List */
	export interface CollectionListFormProperties {

		/**
		 * Total sum of items in the list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sum: FormControl<number | null | undefined>,
	}
	export function CreateCollectionListFormGroup() {
		return new FormGroup<CollectionListFormProperties>({
			sum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Continent */
	export interface Continent {

		/**
		 * Continent two letter code.
		 * Required
		 */
		code: string;

		/**
		 * Continent name.
		 * Required
		 */
		name: string;
	}

	/** Continent */
	export interface ContinentFormProperties {

		/**
		 * Continent two letter code.
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * Continent name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateContinentFormGroup() {
		return new FormGroup<ContinentFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Continents List */
	export interface ContinentList {

		/**
		 * List of continents.
		 * Required
		 */
		continents: Array<Continent>;

		/**
		 * Total sum of items in the list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sum: number;
	}

	/** Continents List */
	export interface ContinentListFormProperties {

		/**
		 * Total sum of items in the list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sum: FormControl<number | null | undefined>,
	}
	export function CreateContinentListFormGroup() {
		return new FormGroup<ContinentListFormProperties>({
			sum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Country */
	export interface Country {

		/**
		 * Country two-character ISO 3166-1 alpha code.
		 * Required
		 */
		code: string;

		/**
		 * Country name.
		 * Required
		 */
		name: string;
	}

	/** Country */
	export interface CountryFormProperties {

		/**
		 * Country two-character ISO 3166-1 alpha code.
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * Country name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCountryFormGroup() {
		return new FormGroup<CountryFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Countries List */
	export interface CountryList {

		/**
		 * List of countries.
		 * Required
		 */
		countries: Array<Country>;

		/**
		 * Total sum of items in the list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sum: number;
	}

	/** Countries List */
	export interface CountryListFormProperties {

		/**
		 * Total sum of items in the list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sum: FormControl<number | null | undefined>,
	}
	export function CreateCountryListFormGroup() {
		return new FormGroup<CountryListFormProperties>({
			sum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Currency */
	export interface Currency {

		/**
		 * Currency code in [ISO 4217-1](http://en.wikipedia.org/wiki/ISO_4217) three-character format.
		 * Required
		 */
		code: string;

		/**
		 * Number of decimal digits.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		decimalDigits: number;

		/**
		 * Currency name.
		 * Required
		 */
		name: string;

		/**
		 * Currency plural name
		 * Required
		 */
		namePlural: string;

		/**
		 * Currency digit rounding.
		 * Required
		 * Type: float
		 */
		rounding: number;

		/**
		 * Currency symbol.
		 * Required
		 */
		symbol: string;

		/**
		 * Currency native symbol.
		 * Required
		 */
		symbolNative: string;
	}

	/** Currency */
	export interface CurrencyFormProperties {

		/**
		 * Currency code in [ISO 4217-1](http://en.wikipedia.org/wiki/ISO_4217) three-character format.
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * Number of decimal digits.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		decimalDigits: FormControl<number | null | undefined>,

		/**
		 * Currency name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Currency plural name
		 * Required
		 */
		namePlural: FormControl<string | null | undefined>,

		/**
		 * Currency digit rounding.
		 * Required
		 * Type: float
		 */
		rounding: FormControl<number | null | undefined>,

		/**
		 * Currency symbol.
		 * Required
		 */
		symbol: FormControl<string | null | undefined>,

		/**
		 * Currency native symbol.
		 * Required
		 */
		symbolNative: FormControl<string | null | undefined>,
	}
	export function CreateCurrencyFormGroup() {
		return new FormGroup<CurrencyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			decimalDigits: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			namePlural: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rounding: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			symbol: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			symbolNative: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Currencies List */
	export interface CurrencyList {

		/**
		 * List of currencies.
		 * Required
		 */
		currencies: Array<Currency>;

		/**
		 * Total sum of items in the list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sum: number;
	}

	/** Currencies List */
	export interface CurrencyListFormProperties {

		/**
		 * Total sum of items in the list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sum: FormControl<number | null | undefined>,
	}
	export function CreateCurrencyListFormGroup() {
		return new FormGroup<CurrencyListFormProperties>({
			sum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Document */
	export interface Document {

		/**
		 * Collection ID.
		 * Required
		 */
		'$collection': string;

		/**
		 * Document ID.
		 * Required
		 */
		'$id': string;

		/**
		 * Document permissions.
		 * Required
		 */
		'$permissions': string;
	}

	/** Document */
	export interface DocumentFormProperties {

		/**
		 * Collection ID.
		 * Required
		 */
		'$collection': FormControl<string | null | undefined>,

		/**
		 * Document ID.
		 * Required
		 */
		'$id': FormControl<string | null | undefined>,

		/**
		 * Document permissions.
		 * Required
		 */
		'$permissions': FormControl<string | null | undefined>,
	}
	export function CreateDocumentFormGroup() {
		return new FormGroup<DocumentFormProperties>({
			'$collection': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'$id': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'$permissions': new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Documents List */
	export interface DocumentList {

		/**
		 * List of documents.
		 * Required
		 */
		documents: Array<Document>;

		/**
		 * Total sum of items in the list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sum: number;
	}

	/** Documents List */
	export interface DocumentListFormProperties {

		/**
		 * Total sum of items in the list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sum: FormControl<number | null | undefined>,
	}
	export function CreateDocumentListFormGroup() {
		return new FormGroup<DocumentListFormProperties>({
			sum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Error */
	export interface Error {

		/**
		 * Error code.
		 * Required
		 */
		code: string;

		/**
		 * Error message.
		 * Required
		 */
		message: string;

		/**
		 * Server version number.
		 * Required
		 */
		version: string;
	}

	/** Error */
	export interface ErrorFormProperties {

		/**
		 * Error code.
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * Error message.
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/**
		 * Server version number.
		 * Required
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Execution */
	export interface Execution {

		/**
		 * Execution ID.
		 * Required
		 */
		'$id': string;

		/**
		 * The execution creation date in Unix timestamp.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dateCreated: number;

		/**
		 * The script exit code.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exitCode: number;

		/**
		 * Function ID.
		 * Required
		 */
		functionId: string;

		/**
		 * The status of the function execution. Possible values can be: `waiting`, `processing`, `completed`, or `failed`.
		 * Required
		 */
		status: string;

		/**
		 * The script stderr output string. Logs the last 4,000 characters of the execution stderr output
		 * Required
		 */
		stderr: string;

		/**
		 * The script stdout output string. Logs the last 4,000 characters of the execution stdout output.
		 * Required
		 */
		stdout: string;

		/**
		 * The script execution time in seconds.
		 * Required
		 * Type: float
		 */
		time: number;

		/**
		 * The trigger that caused the function to execute. Possible values can be: `http`, `schedule`, or `event`.
		 * Required
		 */
		trigger: string;
	}

	/** Execution */
	export interface ExecutionFormProperties {

		/**
		 * Execution ID.
		 * Required
		 */
		'$id': FormControl<string | null | undefined>,

		/**
		 * The execution creation date in Unix timestamp.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dateCreated: FormControl<number | null | undefined>,

		/**
		 * The script exit code.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exitCode: FormControl<number | null | undefined>,

		/**
		 * Function ID.
		 * Required
		 */
		functionId: FormControl<string | null | undefined>,

		/**
		 * The status of the function execution. Possible values can be: `waiting`, `processing`, `completed`, or `failed`.
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * The script stderr output string. Logs the last 4,000 characters of the execution stderr output
		 * Required
		 */
		stderr: FormControl<string | null | undefined>,

		/**
		 * The script stdout output string. Logs the last 4,000 characters of the execution stdout output.
		 * Required
		 */
		stdout: FormControl<string | null | undefined>,

		/**
		 * The script execution time in seconds.
		 * Required
		 * Type: float
		 */
		time: FormControl<number | null | undefined>,

		/**
		 * The trigger that caused the function to execute. Possible values can be: `http`, `schedule`, or `event`.
		 * Required
		 */
		trigger: FormControl<string | null | undefined>,
	}
	export function CreateExecutionFormGroup() {
		return new FormGroup<ExecutionFormProperties>({
			'$id': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dateCreated: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			exitCode: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			functionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stderr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stdout: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			time: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			trigger: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Executions List */
	export interface ExecutionList {

		/**
		 * List of executions.
		 * Required
		 */
		executions: Array<Execution>;

		/**
		 * Total sum of items in the list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sum: number;
	}

	/** Executions List */
	export interface ExecutionListFormProperties {

		/**
		 * Total sum of items in the list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sum: FormControl<number | null | undefined>,
	}
	export function CreateExecutionListFormGroup() {
		return new FormGroup<ExecutionListFormProperties>({
			sum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** File */
	export interface File {

		/**
		 * File ID.
		 * Required
		 */
		'$id': string;

		/**
		 * File permissions.
		 * Required
		 */
		'$permissions': string;

		/**
		 * File creation date in Unix timestamp.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dateCreated: number;

		/**
		 * File mime type.
		 * Required
		 */
		mimeType: string;

		/**
		 * File name.
		 * Required
		 */
		name: string;

		/**
		 * File MD5 signature.
		 * Required
		 */
		signature: string;

		/**
		 * File original size in bytes.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sizeOriginal: number;
	}

	/** File */
	export interface FileFormProperties {

		/**
		 * File ID.
		 * Required
		 */
		'$id': FormControl<string | null | undefined>,

		/**
		 * File permissions.
		 * Required
		 */
		'$permissions': FormControl<string | null | undefined>,

		/**
		 * File creation date in Unix timestamp.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dateCreated: FormControl<number | null | undefined>,

		/**
		 * File mime type.
		 * Required
		 */
		mimeType: FormControl<string | null | undefined>,

		/**
		 * File name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * File MD5 signature.
		 * Required
		 */
		signature: FormControl<string | null | undefined>,

		/**
		 * File original size in bytes.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sizeOriginal: FormControl<number | null | undefined>,
	}
	export function CreateFileFormGroup() {
		return new FormGroup<FileFormProperties>({
			'$id': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'$permissions': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dateCreated: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			mimeType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			signature: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sizeOriginal: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Files List */
	export interface FileList {

		/**
		 * List of files.
		 * Required
		 */
		files: Array<File>;

		/**
		 * Total sum of items in the list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sum: number;
	}

	/** Files List */
	export interface FileListFormProperties {

		/**
		 * Total sum of items in the list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sum: FormControl<number | null | undefined>,
	}
	export function CreateFileListFormGroup() {
		return new FormGroup<FileListFormProperties>({
			sum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Function */
	export interface function_ {

		/**
		 * Function ID.
		 * Required
		 */
		'$id': string;

		/**
		 * Function permissions.
		 * Required
		 */
		'$permissions': string;

		/**
		 * Function creation date in Unix timestamp.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dateCreated: number;

		/**
		 * Function update date in Unix timestamp.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dateUpdated: number;

		/**
		 * Function trigger events.
		 * Required
		 */
		events: Array<string>;

		/**
		 * Function name.
		 * Required
		 */
		name: string;

		/**
		 * Function execution runtime.
		 * Required
		 */
		runtime: string;

		/**
		 * Function execution schedult in CRON format.
		 * Required
		 */
		schedule: string;

		/**
		 * Function next scheduled execution date in Unix timestamp.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		scheduleNext: number;

		/**
		 * Function next scheduled execution date in Unix timestamp.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		schedulePrevious: number;

		/**
		 * Function status. Possible values: disabled, enabled
		 * Required
		 */
		status: string;

		/**
		 * Function active tag ID.
		 * Required
		 */
		tag: string;

		/**
		 * Function execution timeout in seconds.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		timeout: number;

		/**
		 * Function environment variables.
		 * Required
		 */
		vars: string;
	}

	/** Function */
	export interface function_FormProperties {

		/**
		 * Function ID.
		 * Required
		 */
		'$id': FormControl<string | null | undefined>,

		/**
		 * Function permissions.
		 * Required
		 */
		'$permissions': FormControl<string | null | undefined>,

		/**
		 * Function creation date in Unix timestamp.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dateCreated: FormControl<number | null | undefined>,

		/**
		 * Function update date in Unix timestamp.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dateUpdated: FormControl<number | null | undefined>,

		/**
		 * Function name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Function execution runtime.
		 * Required
		 */
		runtime: FormControl<string | null | undefined>,

		/**
		 * Function execution schedult in CRON format.
		 * Required
		 */
		schedule: FormControl<string | null | undefined>,

		/**
		 * Function next scheduled execution date in Unix timestamp.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		scheduleNext: FormControl<number | null | undefined>,

		/**
		 * Function next scheduled execution date in Unix timestamp.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		schedulePrevious: FormControl<number | null | undefined>,

		/**
		 * Function status. Possible values: disabled, enabled
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * Function active tag ID.
		 * Required
		 */
		tag: FormControl<string | null | undefined>,

		/**
		 * Function execution timeout in seconds.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		timeout: FormControl<number | null | undefined>,

		/**
		 * Function environment variables.
		 * Required
		 */
		vars: FormControl<string | null | undefined>,
	}
	export function Createfunction_FormGroup() {
		return new FormGroup<function_FormProperties>({
			'$id': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'$permissions': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dateCreated: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			dateUpdated: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			runtime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schedule: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scheduleNext: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			schedulePrevious: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timeout: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			vars: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Functions List */
	export interface FunctionList {

		/**
		 * List of functions.
		 * Required
		 */
		functions: Array<function_>;

		/**
		 * Total sum of items in the list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sum: number;
	}

	/** Functions List */
	export interface FunctionListFormProperties {

		/**
		 * Total sum of items in the list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sum: FormControl<number | null | undefined>,
	}
	export function CreateFunctionListFormGroup() {
		return new FormGroup<FunctionListFormProperties>({
			sum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Language */
	export interface Language {

		/**
		 * Language two-character ISO 639-1 codes.
		 * Required
		 */
		code: string;

		/**
		 * Language name.
		 * Required
		 */
		name: string;

		/**
		 * Language native name.
		 * Required
		 */
		nativeName: string;
	}

	/** Language */
	export interface LanguageFormProperties {

		/**
		 * Language two-character ISO 639-1 codes.
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * Language name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Language native name.
		 * Required
		 */
		nativeName: FormControl<string | null | undefined>,
	}
	export function CreateLanguageFormGroup() {
		return new FormGroup<LanguageFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nativeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Languages List */
	export interface LanguageList {

		/**
		 * List of languages.
		 * Required
		 */
		languages: Array<Language>;

		/**
		 * Total sum of items in the list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sum: number;
	}

	/** Languages List */
	export interface LanguageListFormProperties {

		/**
		 * Total sum of items in the list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sum: FormControl<number | null | undefined>,
	}
	export function CreateLanguageListFormGroup() {
		return new FormGroup<LanguageListFormProperties>({
			sum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Locale */
	export interface Locale {

		/**
		 * Continent name. This field support localization.
		 * Required
		 */
		continent: string;

		/**
		 * Continent code. A two character continent code "AF" for Africa, "AN" for Antarctica, "AS" for Asia, "EU" for Europe, "NA" for North America, "OC" for Oceania, and "SA" for South America.
		 * Required
		 */
		continentCode: string;

		/**
		 * Country name. This field support localization.
		 * Required
		 */
		country: string;

		/**
		 * Country code in [ISO 3166-1](http://en.wikipedia.org/wiki/ISO_3166-1) two-character format
		 * Required
		 */
		countryCode: string;

		/**
		 * Currency code in [ISO 4217-1](http://en.wikipedia.org/wiki/ISO_4217) three-character format
		 * Required
		 */
		currency: string;

		/**
		 * True if country is part of the Europian Union.
		 * Required
		 */
		eu: boolean;

		/**
		 * User IP address.
		 * Required
		 */
		ip: string;
	}

	/** Locale */
	export interface LocaleFormProperties {

		/**
		 * Continent name. This field support localization.
		 * Required
		 */
		continent: FormControl<string | null | undefined>,

		/**
		 * Continent code. A two character continent code "AF" for Africa, "AN" for Antarctica, "AS" for Asia, "EU" for Europe, "NA" for North America, "OC" for Oceania, and "SA" for South America.
		 * Required
		 */
		continentCode: FormControl<string | null | undefined>,

		/**
		 * Country name. This field support localization.
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Country code in [ISO 3166-1](http://en.wikipedia.org/wiki/ISO_3166-1) two-character format
		 * Required
		 */
		countryCode: FormControl<string | null | undefined>,

		/**
		 * Currency code in [ISO 4217-1](http://en.wikipedia.org/wiki/ISO_4217) three-character format
		 * Required
		 */
		currency: FormControl<string | null | undefined>,

		/**
		 * True if country is part of the Europian Union.
		 * Required
		 */
		eu: FormControl<boolean | null | undefined>,

		/**
		 * User IP address.
		 * Required
		 */
		ip: FormControl<string | null | undefined>,
	}
	export function CreateLocaleFormGroup() {
		return new FormGroup<LocaleFormProperties>({
			continent: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			continentCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			countryCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			currency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eu: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Log */
	export interface Log {

		/**
		 * Client code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/clients.json).
		 * Required
		 */
		clientCode: string;

		/**
		 * Client engine name.
		 * Required
		 */
		clientEngine: string;

		/**
		 * Client engine name.
		 * Required
		 */
		clientEngineVersion: string;

		/**
		 * Client name.
		 * Required
		 */
		clientName: string;

		/**
		 * Client type.
		 * Required
		 */
		clientType: string;

		/**
		 * Client version.
		 * Required
		 */
		clientVersion: string;

		/**
		 * Country two-character ISO 3166-1 alpha code.
		 * Required
		 */
		countryCode: string;

		/**
		 * Country name.
		 * Required
		 */
		countryName: string;

		/**
		 * Device brand name.
		 * Required
		 */
		deviceBrand: string;

		/**
		 * Device model name.
		 * Required
		 */
		deviceModel: string;

		/**
		 * Device name.
		 * Required
		 */
		deviceName: string;

		/**
		 * Event name.
		 * Required
		 */
		event: string;

		/**
		 * IP session in use when the session was created.
		 * Required
		 */
		ip: string;

		/**
		 * Operating system code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/os.json).
		 * Required
		 */
		osCode: string;

		/**
		 * Operating system name.
		 * Required
		 */
		osName: string;

		/**
		 * Operating system version.
		 * Required
		 */
		osVersion: string;

		/**
		 * Log creation time in Unix timestamp.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		time: number;
	}

	/** Log */
	export interface LogFormProperties {

		/**
		 * Client code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/clients.json).
		 * Required
		 */
		clientCode: FormControl<string | null | undefined>,

		/**
		 * Client engine name.
		 * Required
		 */
		clientEngine: FormControl<string | null | undefined>,

		/**
		 * Client engine name.
		 * Required
		 */
		clientEngineVersion: FormControl<string | null | undefined>,

		/**
		 * Client name.
		 * Required
		 */
		clientName: FormControl<string | null | undefined>,

		/**
		 * Client type.
		 * Required
		 */
		clientType: FormControl<string | null | undefined>,

		/**
		 * Client version.
		 * Required
		 */
		clientVersion: FormControl<string | null | undefined>,

		/**
		 * Country two-character ISO 3166-1 alpha code.
		 * Required
		 */
		countryCode: FormControl<string | null | undefined>,

		/**
		 * Country name.
		 * Required
		 */
		countryName: FormControl<string | null | undefined>,

		/**
		 * Device brand name.
		 * Required
		 */
		deviceBrand: FormControl<string | null | undefined>,

		/**
		 * Device model name.
		 * Required
		 */
		deviceModel: FormControl<string | null | undefined>,

		/**
		 * Device name.
		 * Required
		 */
		deviceName: FormControl<string | null | undefined>,

		/**
		 * Event name.
		 * Required
		 */
		event: FormControl<string | null | undefined>,

		/**
		 * IP session in use when the session was created.
		 * Required
		 */
		ip: FormControl<string | null | undefined>,

		/**
		 * Operating system code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/os.json).
		 * Required
		 */
		osCode: FormControl<string | null | undefined>,

		/**
		 * Operating system name.
		 * Required
		 */
		osName: FormControl<string | null | undefined>,

		/**
		 * Operating system version.
		 * Required
		 */
		osVersion: FormControl<string | null | undefined>,

		/**
		 * Log creation time in Unix timestamp.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		time: FormControl<number | null | undefined>,
	}
	export function CreateLogFormGroup() {
		return new FormGroup<LogFormProperties>({
			clientCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientEngine: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientEngineVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			countryCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			countryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deviceBrand: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deviceModel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			event: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			osCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			osName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			osVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			time: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Logs List */
	export interface LogList {

		/**
		 * List of logs.
		 * Required
		 */
		logs: Array<Log>;
	}

	/** Logs List */
	export interface LogListFormProperties {
	}
	export function CreateLogListFormGroup() {
		return new FormGroup<LogListFormProperties>({
		});

	}


	/** Membership */
	export interface Membership {

		/**
		 * Membership ID.
		 * Required
		 */
		'$id': string;

		/**
		 * User confirmation status, true if the user has joined the team or false otherwise.
		 * Required
		 */
		confirm: boolean;

		/**
		 * User email address.
		 * Required
		 */
		email: string;

		/**
		 * Date, the user has been invited to join the team in Unix timestamp.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		invited: number;

		/**
		 * Date, the user has accepted the invitation to join the team in Unix timestamp.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		joined: number;

		/**
		 * User name.
		 * Required
		 */
		name: string;

		/**
		 * User list of roles
		 * Required
		 */
		roles: Array<string>;

		/**
		 * Team ID.
		 * Required
		 */
		teamId: string;

		/**
		 * User ID.
		 * Required
		 */
		userId: string;
	}

	/** Membership */
	export interface MembershipFormProperties {

		/**
		 * Membership ID.
		 * Required
		 */
		'$id': FormControl<string | null | undefined>,

		/**
		 * User confirmation status, true if the user has joined the team or false otherwise.
		 * Required
		 */
		confirm: FormControl<boolean | null | undefined>,

		/**
		 * User email address.
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * Date, the user has been invited to join the team in Unix timestamp.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		invited: FormControl<number | null | undefined>,

		/**
		 * Date, the user has accepted the invitation to join the team in Unix timestamp.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		joined: FormControl<number | null | undefined>,

		/**
		 * User name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Team ID.
		 * Required
		 */
		teamId: FormControl<string | null | undefined>,

		/**
		 * User ID.
		 * Required
		 */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateMembershipFormGroup() {
		return new FormGroup<MembershipFormProperties>({
			'$id': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			confirm: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			invited: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			joined: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			teamId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Memberships List */
	export interface MembershipList {

		/**
		 * List of memberships.
		 * Required
		 */
		memberships: Array<Membership>;

		/**
		 * Total sum of items in the list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sum: number;
	}

	/** Memberships List */
	export interface MembershipListFormProperties {

		/**
		 * Total sum of items in the list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sum: FormControl<number | null | undefined>,
	}
	export function CreateMembershipListFormGroup() {
		return new FormGroup<MembershipListFormProperties>({
			sum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Permissions */
	export interface Permissions {

		/**
		 * Read permissions.
		 * Required
		 */
		read: Array<string>;

		/**
		 * Write permissions.
		 * Required
		 */
		write: Array<string>;
	}

	/** Permissions */
	export interface PermissionsFormProperties {
	}
	export function CreatePermissionsFormGroup() {
		return new FormGroup<PermissionsFormProperties>({
		});

	}


	/** Phone */
	export interface Phone {

		/**
		 * Phone code.
		 * Required
		 */
		code: string;

		/**
		 * Country two-character ISO 3166-1 alpha code.
		 * Required
		 */
		countryCode: string;

		/**
		 * Country name.
		 * Required
		 */
		countryName: string;
	}

	/** Phone */
	export interface PhoneFormProperties {

		/**
		 * Phone code.
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * Country two-character ISO 3166-1 alpha code.
		 * Required
		 */
		countryCode: FormControl<string | null | undefined>,

		/**
		 * Country name.
		 * Required
		 */
		countryName: FormControl<string | null | undefined>,
	}
	export function CreatePhoneFormGroup() {
		return new FormGroup<PhoneFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			countryCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			countryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Phones List */
	export interface PhoneList {

		/**
		 * List of phones.
		 * Required
		 */
		phones: Array<Phone>;

		/**
		 * Total sum of items in the list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sum: number;
	}

	/** Phones List */
	export interface PhoneListFormProperties {

		/**
		 * Total sum of items in the list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sum: FormControl<number | null | undefined>,
	}
	export function CreatePhoneListFormGroup() {
		return new FormGroup<PhoneListFormProperties>({
			sum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Preferences */
	export interface Preferences {
	}

	/** Preferences */
	export interface PreferencesFormProperties {
	}
	export function CreatePreferencesFormGroup() {
		return new FormGroup<PreferencesFormProperties>({
		});

	}


	/** Session */
	export interface Session {

		/**
		 * Session ID.
		 * Required
		 */
		'$id': string;

		/**
		 * Client code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/clients.json).
		 * Required
		 */
		clientCode: string;

		/**
		 * Client engine name.
		 * Required
		 */
		clientEngine: string;

		/**
		 * Client engine name.
		 * Required
		 */
		clientEngineVersion: string;

		/**
		 * Client name.
		 * Required
		 */
		clientName: string;

		/**
		 * Client type.
		 * Required
		 */
		clientType: string;

		/**
		 * Client version.
		 * Required
		 */
		clientVersion: string;

		/**
		 * Country two-character ISO 3166-1 alpha code.
		 * Required
		 */
		countryCode: string;

		/**
		 * Country name.
		 * Required
		 */
		countryName: string;

		/**
		 * Returns true if this the current user session.
		 * Required
		 */
		current: boolean;

		/**
		 * Device brand name.
		 * Required
		 */
		deviceBrand: string;

		/**
		 * Device model name.
		 * Required
		 */
		deviceModel: string;

		/**
		 * Device name.
		 * Required
		 */
		deviceName: string;

		/**
		 * Session expiration date in Unix timestamp.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expire: number;

		/**
		 * IP in use when the session was created.
		 * Required
		 */
		ip: string;

		/**
		 * Operating system code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/os.json).
		 * Required
		 */
		osCode: string;

		/**
		 * Operating system name.
		 * Required
		 */
		osName: string;

		/**
		 * Operating system version.
		 * Required
		 */
		osVersion: string;

		/**
		 * Session Provider.
		 * Required
		 */
		provider: string;

		/**
		 * Session Provider Token.
		 * Required
		 */
		providerToken: string;

		/**
		 * Session Provider User ID.
		 * Required
		 */
		providerUid: string;

		/**
		 * User ID.
		 * Required
		 */
		userId: string;
	}

	/** Session */
	export interface SessionFormProperties {

		/**
		 * Session ID.
		 * Required
		 */
		'$id': FormControl<string | null | undefined>,

		/**
		 * Client code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/clients.json).
		 * Required
		 */
		clientCode: FormControl<string | null | undefined>,

		/**
		 * Client engine name.
		 * Required
		 */
		clientEngine: FormControl<string | null | undefined>,

		/**
		 * Client engine name.
		 * Required
		 */
		clientEngineVersion: FormControl<string | null | undefined>,

		/**
		 * Client name.
		 * Required
		 */
		clientName: FormControl<string | null | undefined>,

		/**
		 * Client type.
		 * Required
		 */
		clientType: FormControl<string | null | undefined>,

		/**
		 * Client version.
		 * Required
		 */
		clientVersion: FormControl<string | null | undefined>,

		/**
		 * Country two-character ISO 3166-1 alpha code.
		 * Required
		 */
		countryCode: FormControl<string | null | undefined>,

		/**
		 * Country name.
		 * Required
		 */
		countryName: FormControl<string | null | undefined>,

		/**
		 * Returns true if this the current user session.
		 * Required
		 */
		current: FormControl<boolean | null | undefined>,

		/**
		 * Device brand name.
		 * Required
		 */
		deviceBrand: FormControl<string | null | undefined>,

		/**
		 * Device model name.
		 * Required
		 */
		deviceModel: FormControl<string | null | undefined>,

		/**
		 * Device name.
		 * Required
		 */
		deviceName: FormControl<string | null | undefined>,

		/**
		 * Session expiration date in Unix timestamp.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expire: FormControl<number | null | undefined>,

		/**
		 * IP in use when the session was created.
		 * Required
		 */
		ip: FormControl<string | null | undefined>,

		/**
		 * Operating system code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/os.json).
		 * Required
		 */
		osCode: FormControl<string | null | undefined>,

		/**
		 * Operating system name.
		 * Required
		 */
		osName: FormControl<string | null | undefined>,

		/**
		 * Operating system version.
		 * Required
		 */
		osVersion: FormControl<string | null | undefined>,

		/**
		 * Session Provider.
		 * Required
		 */
		provider: FormControl<string | null | undefined>,

		/**
		 * Session Provider Token.
		 * Required
		 */
		providerToken: FormControl<string | null | undefined>,

		/**
		 * Session Provider User ID.
		 * Required
		 */
		providerUid: FormControl<string | null | undefined>,

		/**
		 * User ID.
		 * Required
		 */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateSessionFormGroup() {
		return new FormGroup<SessionFormProperties>({
			'$id': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientEngine: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientEngineVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			countryCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			countryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			current: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			deviceBrand: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deviceModel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expire: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			osCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			osName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			osVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provider: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			providerToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			providerUid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Sessions List */
	export interface SessionList {

		/**
		 * List of sessions.
		 * Required
		 */
		sessions: Array<Session>;

		/**
		 * Total sum of items in the list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sum: number;
	}

	/** Sessions List */
	export interface SessionListFormProperties {

		/**
		 * Total sum of items in the list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sum: FormControl<number | null | undefined>,
	}
	export function CreateSessionListFormGroup() {
		return new FormGroup<SessionListFormProperties>({
			sum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Tag */
	export interface Tag {

		/**
		 * Tag ID.
		 * Required
		 */
		'$id': string;

		/**
		 * The entrypoint command in use to execute the tag code.
		 * Required
		 */
		command: string;

		/**
		 * The tag creation date in Unix timestamp.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dateCreated: number;

		/**
		 * Function ID.
		 * Required
		 */
		functionId: string;

		/**
		 * The code size in bytes.
		 * Required
		 */
		size: string;
	}

	/** Tag */
	export interface TagFormProperties {

		/**
		 * Tag ID.
		 * Required
		 */
		'$id': FormControl<string | null | undefined>,

		/**
		 * The entrypoint command in use to execute the tag code.
		 * Required
		 */
		command: FormControl<string | null | undefined>,

		/**
		 * The tag creation date in Unix timestamp.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dateCreated: FormControl<number | null | undefined>,

		/**
		 * Function ID.
		 * Required
		 */
		functionId: FormControl<string | null | undefined>,

		/**
		 * The code size in bytes.
		 * Required
		 */
		size: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			'$id': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			command: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dateCreated: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			functionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Tags List */
	export interface TagList {

		/**
		 * Total sum of items in the list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sum: number;

		/**
		 * List of tags.
		 * Required
		 */
		tags: Array<Tag>;
	}

	/** Tags List */
	export interface TagListFormProperties {

		/**
		 * Total sum of items in the list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sum: FormControl<number | null | undefined>,
	}
	export function CreateTagListFormGroup() {
		return new FormGroup<TagListFormProperties>({
			sum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Team */
	export interface Team {

		/**
		 * Team ID.
		 * Required
		 */
		'$id': string;

		/**
		 * Team creation date in Unix timestamp.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dateCreated: number;

		/**
		 * Team name.
		 * Required
		 */
		name: string;

		/**
		 * Total sum of team members.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sum: number;
	}

	/** Team */
	export interface TeamFormProperties {

		/**
		 * Team ID.
		 * Required
		 */
		'$id': FormControl<string | null | undefined>,

		/**
		 * Team creation date in Unix timestamp.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dateCreated: FormControl<number | null | undefined>,

		/**
		 * Team name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Total sum of team members.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sum: FormControl<number | null | undefined>,
	}
	export function CreateTeamFormGroup() {
		return new FormGroup<TeamFormProperties>({
			'$id': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dateCreated: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Teams List */
	export interface TeamList {

		/**
		 * Total sum of items in the list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sum: number;

		/**
		 * List of teams.
		 * Required
		 */
		teams: Array<Team>;
	}

	/** Teams List */
	export interface TeamListFormProperties {

		/**
		 * Total sum of items in the list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sum: FormControl<number | null | undefined>,
	}
	export function CreateTeamListFormGroup() {
		return new FormGroup<TeamListFormProperties>({
			sum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Token */
	export interface Token {

		/**
		 * Token ID.
		 * Required
		 */
		'$id': string;

		/**
		 * Token expiration date in Unix timestamp.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expire: number;

		/**
		 * Token secret key. This will return an empty string unless the response is returned using an API key or as part of a webhook payload.
		 * Required
		 */
		secret: string;

		/**
		 * User ID.
		 * Required
		 */
		userId: string;
	}

	/** Token */
	export interface TokenFormProperties {

		/**
		 * Token ID.
		 * Required
		 */
		'$id': FormControl<string | null | undefined>,

		/**
		 * Token expiration date in Unix timestamp.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expire: FormControl<number | null | undefined>,

		/**
		 * Token secret key. This will return an empty string unless the response is returned using an API key or as part of a webhook payload.
		 * Required
		 */
		secret: FormControl<string | null | undefined>,

		/**
		 * User ID.
		 * Required
		 */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateTokenFormGroup() {
		return new FormGroup<TokenFormProperties>({
			'$id': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expire: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			secret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** User */
	export interface User {

		/**
		 * User ID.
		 * Required
		 */
		'$id': string;

		/**
		 * User email address.
		 * Required
		 */
		email: string;

		/**
		 * Email verification status.
		 * Required
		 */
		emailVerification: boolean;

		/**
		 * User name.
		 * Required
		 */
		name: string;

		/**
		 * Unix timestamp of the most recent password update
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		passwordUpdate: number;

		/**
		 * User preferences as a key-value object
		 * Required
		 */
		prefs: string;

		/**
		 * User registration date in Unix timestamp.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		registration: number;

		/**
		 * User status. 0 for Unactivated, 1 for active and 2 is blocked.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: number;
	}

	/** User */
	export interface UserFormProperties {

		/**
		 * User ID.
		 * Required
		 */
		'$id': FormControl<string | null | undefined>,

		/**
		 * User email address.
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * Email verification status.
		 * Required
		 */
		emailVerification: FormControl<boolean | null | undefined>,

		/**
		 * User name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Unix timestamp of the most recent password update
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		passwordUpdate: FormControl<number | null | undefined>,

		/**
		 * User preferences as a key-value object
		 * Required
		 */
		prefs: FormControl<string | null | undefined>,

		/**
		 * User registration date in Unix timestamp.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		registration: FormControl<number | null | undefined>,

		/**
		 * User status. 0 for Unactivated, 1 for active and 2 is blocked.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			'$id': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			emailVerification: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			passwordUpdate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			prefs: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			registration: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Users List */
	export interface UserList {

		/**
		 * Total sum of items in the list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sum: number;

		/**
		 * List of users.
		 * Required
		 */
		users: Array<User>;
	}

	/** Users List */
	export interface UserListFormProperties {

		/**
		 * Total sum of items in the list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sum: FormControl<number | null | undefined>,
	}
	export function CreateUserListFormGroup() {
		return new FormGroup<UserListFormProperties>({
			sum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Delete Account
		 * Delete a currently logged in user account. Behind the scene, the user record is not deleted but permanently blocked from any access. This is done to avoid deleted accounts being overtaken by new users with the same email address. Any user-related resources like documents or storage files should be deleted separately.
		 * Delete account
		 * @return {void} 
		 */
		AccountDelete(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'account', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Account
		 * Get currently logged in user data as JSON object.
		 * Get account
		 * @return {User} User
		 */
		AccountGet(): Observable<User> {
			return this.http.get<User>(this.baseUri + 'account', {});
		}

		/**
		 * Update Account Email
		 * Update currently logged in user account email address. After changing user address, user confirmation status is being reset and a new confirmation mail is sent. For security measures, user password is required to complete this request.
		 * This endpoint can also be used to convert an anonymous account to a normal one, by passing an email address and a new password.
		 * Patch account/email
		 * @return {User} User
		 */
		AccountUpdateEmail(requestBody: AccountUpdateEmailPatchBody): Observable<User> {
			return this.http.patch<User>(this.baseUri + 'account/email', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Account Logs
		 * Get currently logged in user list of latest security activity logs. Each log returns user IP address, location and date and time of log.
		 * Get account/logs
		 * @return {LogList} Logs List
		 */
		AccountGetLogs(): Observable<LogList> {
			return this.http.get<LogList>(this.baseUri + 'account/logs', {});
		}

		/**
		 * Update Account Name
		 * Update currently logged in user account name.
		 * Patch account/name
		 * @return {User} User
		 */
		AccountUpdateName(requestBody: AccountUpdateNamePatchBody): Observable<User> {
			return this.http.patch<User>(this.baseUri + 'account/name', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update Account Password
		 * Update currently logged in user password. For validation, user is required to pass in the new password, and the old password. For users created with OAuth and Team Invites, oldPassword is optional.
		 * Patch account/password
		 * @return {User} User
		 */
		AccountUpdatePassword(requestBody: AccountUpdatePasswordPatchBody): Observable<User> {
			return this.http.patch<User>(this.baseUri + 'account/password', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Account Preferences
		 * Get currently logged in user preferences as a key-value object.
		 * Get account/prefs
		 * @return {Preferences} Preferences
		 */
		AccountGetPrefs(): Observable<Preferences> {
			return this.http.get<Preferences>(this.baseUri + 'account/prefs', {});
		}

		/**
		 * Update Account Preferences
		 * Update currently logged in user account preferences. You can pass only the specific settings you wish to update.
		 * Patch account/prefs
		 * @return {User} User
		 */
		AccountUpdatePrefs(requestBody: AccountUpdatePrefsPatchBody): Observable<User> {
			return this.http.patch<User>(this.baseUri + 'account/prefs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create Password Recovery
		 * Sends the user an email with a temporary secret key for password reset. When the user clicks the confirmation link he is redirected back to your app password reset URL with the secret key and email address values attached to the URL query string. Use the query string params to submit a request to the [PUT /account/recovery](/docs/client/account#accountUpdateRecovery) endpoint to complete the process. The verification link sent to the user's email address is valid for 1 hour.
		 * Post account/recovery
		 * @return {void} 
		 */
		AccountCreateRecovery(requestBody: AccountCreateRecoveryPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/recovery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Complete Password Recovery
		 * Use this endpoint to complete the user account password reset. Both the **userId** and **secret** arguments will be passed as query parameters to the redirect URL you have provided when sending your request to the [POST /account/recovery](/docs/client/account#accountCreateRecovery) endpoint.
		 * Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.
		 * Put account/recovery
		 * @return {Token} Token
		 */
		AccountUpdateRecovery(requestBody: AccountUpdateRecoveryPutBody): Observable<Token> {
			return this.http.put<Token>(this.baseUri + 'account/recovery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete All Account Sessions
		 * Delete all sessions from the user account and remove any sessions cookies from the end client.
		 * Delete account/sessions
		 * @return {void} 
		 */
		AccountDeleteSessions(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'account/sessions', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Account Sessions
		 * Get currently logged in user list of active sessions across different devices.
		 * Get account/sessions
		 * @return {SessionList} Sessions List
		 */
		AccountGetSessions(): Observable<SessionList> {
			return this.http.get<SessionList>(this.baseUri + 'account/sessions', {});
		}

		/**
		 * Delete Account Session
		 * Use this endpoint to log out the currently logged in user from all their account sessions across all of their different devices. When using the option id argument, only the session unique ID provider will be deleted.
		 * Delete account/sessions/{sessionId}
		 * @param {string} sessionId Session unique ID. Use the string 'current' to delete the current device session.
		 * @return {void} 
		 */
		AccountDeleteSession(sessionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'account/sessions/' + (sessionId == null ? '' : encodeURIComponent(sessionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Session By ID
		 * Use this endpoint to get a logged in user's session using a Session ID. Inputting 'current' will return the current session being used.
		 * Get account/sessions/{sessionId}
		 * @param {string} sessionId Session unique ID. Use the string 'current' to get the current device session.
		 * @return {Session} Session
		 */
		AccountGetSession(sessionId: string): Observable<Session> {
			return this.http.get<Session>(this.baseUri + 'account/sessions/' + (sessionId == null ? '' : encodeURIComponent(sessionId)), {});
		}

		/**
		 * Create Email Verification
		 * Use this endpoint to send a verification message to your user email address to confirm they are the valid owners of that address. Both the **userId** and **secret** arguments will be passed as query parameters to the URL you have provided to be attached to the verification email. The provided URL should redirect the user back to your app and allow you to complete the verification process by verifying both the **userId** and **secret** parameters. Learn more about how to [complete the verification process](/docs/client/account#accountUpdateVerification). The verification link sent to the user's email address is valid for 7 days.
		 * Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md), the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.
		 * Post account/verification
		 * @return {void} 
		 */
		AccountCreateVerification(requestBody: AccountCreateVerificationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/verification', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Complete Email Verification
		 * Use this endpoint to complete the user email verification process. Use both the **userId** and **secret** parameters that were attached to your app URL to verify the user email ownership. If confirmed this route will return a 200 status code.
		 * Put account/verification
		 * @return {Token} Token
		 */
		AccountUpdateVerification(requestBody: AccountUpdateVerificationPutBody): Observable<Token> {
			return this.http.put<Token>(this.baseUri + 'account/verification', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Browser Icon
		 * You can use this endpoint to show different browser icons to your users. The code argument receives the browser code as it appears in your user /account/sessions endpoint. Use width, height and quality arguments to change the output settings.
		 * Get avatars/browsers/{code}
		 * @param {string} code Browser Code.
		 * @param {number} width Image width. Pass an integer between 0 to 2000. Defaults to 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} height Image height. Pass an integer between 0 to 2000. Defaults to 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} quality Image quality. Pass an integer between 0 to 100. Defaults to 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Image
		 */
		AvatarsGetBrowser(code: string, width: number | null | undefined, height: number | null | undefined, quality: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'avatars/browsers/' + (code == null ? '' : encodeURIComponent(code)) + '&width=' + width + '&height=' + height + '&quality=' + quality, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Credit Card Icon
		 * The credit card endpoint will return you the icon of the credit card provider you need. Use width, height and quality arguments to change the output settings.
		 * Get avatars/credit-cards/{code}
		 * @param {string} code Credit Card Code. Possible values: amex, argencard, cabal, censosud, diners, discover, elo, hipercard, jcb, mastercard, naranja, targeta-shopping, union-china-pay, visa, mir, maestro.
		 * @param {number} width Image width. Pass an integer between 0 to 2000. Defaults to 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} height Image height. Pass an integer between 0 to 2000. Defaults to 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} quality Image quality. Pass an integer between 0 to 100. Defaults to 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Image
		 */
		AvatarsGetCreditCard(code: string, width: number | null | undefined, height: number | null | undefined, quality: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'avatars/credit-cards/' + (code == null ? '' : encodeURIComponent(code)) + '&width=' + width + '&height=' + height + '&quality=' + quality, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Favicon
		 * Use this endpoint to fetch the favorite icon (AKA favicon) of any remote website URL.
		 * Get avatars/favicon
		 * @param {string} url Website URL which you want to fetch the favicon from.
		 * @return {void} Image
		 */
		AvatarsGetFavicon(url: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'avatars/favicon?url=' + (url == null ? '' : encodeURIComponent(url)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Country Flag
		 * You can use this endpoint to show different country flags icons to your users. The code argument receives the 2 letter country code. Use width, height and quality arguments to change the output settings.
		 * Get avatars/flags/{code}
		 * @param {string} code Country Code. ISO Alpha-2 country code format.
		 * @param {number} width Image width. Pass an integer between 0 to 2000. Defaults to 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} height Image height. Pass an integer between 0 to 2000. Defaults to 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} quality Image quality. Pass an integer between 0 to 100. Defaults to 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Image
		 */
		AvatarsGetFlag(code: string, width: number | null | undefined, height: number | null | undefined, quality: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'avatars/flags/' + (code == null ? '' : encodeURIComponent(code)) + '&width=' + width + '&height=' + height + '&quality=' + quality, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Image from URL
		 * Use this endpoint to fetch a remote image URL and crop it to any image size you want. This endpoint is very useful if you need to crop and display remote images in your app or in case you want to make sure a 3rd party image is properly served using a TLS protocol.
		 * Get avatars/image
		 * @param {string} url Image URL which you want to crop.
		 * @param {number} width Resize preview image width, Pass an integer between 0 to 2000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} height Resize preview image height, Pass an integer between 0 to 2000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Image
		 */
		AvatarsGetImage(url: string, width: number | null | undefined, height: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'avatars/image?url=' + (url == null ? '' : encodeURIComponent(url)) + '&width=' + width + '&height=' + height, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get User Initials
		 * Use this endpoint to show your user initials avatar icon on your website or app. By default, this route will try to print your logged-in user name or email initials. You can also overwrite the user name if you pass the 'name' parameter. If no name is given and no user is logged, an empty avatar will be returned.
		 * You can use the color and background params to change the avatar colors. By default, a random theme will be selected. The random theme will persist for the user's initials when reloading the same theme will always return for the same initials.
		 * Get avatars/initials
		 * @param {string} name Full Name. When empty, current user name or email will be used. Max length: 128 chars.
		 * @param {number} width Image width. Pass an integer between 0 to 2000. Defaults to 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} height Image height. Pass an integer between 0 to 2000. Defaults to 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} color Changes text color. By default a random color will be picked and stay will persistent to the given name.
		 * @param {string} background Changes background color. By default a random color will be picked and stay will persistent to the given name.
		 * @return {void} Image
		 */
		AvatarsGetInitials(name: string | null | undefined, width: number | null | undefined, height: number | null | undefined, color: string | null | undefined, background: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'avatars/initials?name=' + (name == null ? '' : encodeURIComponent(name)) + '&width=' + width + '&height=' + height + '&color=' + (color == null ? '' : encodeURIComponent(color)) + '&background=' + (background == null ? '' : encodeURIComponent(background)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get QR Code
		 * Converts a given plain text to a QR code image. You can use the query parameters to change the size and style of the resulting image.
		 * Get avatars/qr
		 * @param {string} text Plain text to be converted to QR code image.
		 * @param {number} size QR code size. Pass an integer between 0 to 1000. Defaults to 400.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} margin Margin from edge. Pass an integer between 0 to 10. Defaults to 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} download Return resulting image with 'Content-Disposition: attachment ' headers for the browser to start downloading it. Pass 0 for no header, or 1 for otherwise. Default value is set to 0.
		 * @return {void} Image
		 */
		AvatarsGetQR(text: string, size: number | null | undefined, margin: number | null | undefined, download: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'avatars/qr?text=' + (text == null ? '' : encodeURIComponent(text)) + '&size=' + size + '&margin=' + margin + '&download=' + download, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List Collections
		 * Get a list of all the user collections. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's collections. [Learn more about different API modes](/docs/admin).
		 * Get database/collections
		 * @param {string} search Search term to filter your list results. Max length: 256 chars.
		 * @param {number} limit Results limit value. By default will return maximum 25 results. Maximum of 100 results allowed per request.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Results offset. The default value is 0. Use this param to manage pagination.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} orderType Order result by ASC or DESC order.
		 * @return {CollectionList} Collections List
		 */
		DatabaseListCollections(search: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined, orderType: string | null | undefined): Observable<CollectionList> {
			return this.http.get<CollectionList>(this.baseUri + 'database/collections?search=' + (search == null ? '' : encodeURIComponent(search)) + '&limit=' + limit + '&offset=' + offset + '&orderType=' + (orderType == null ? '' : encodeURIComponent(orderType)), {});
		}

		/**
		 * Create Collection
		 * Create a new Collection.
		 * Post database/collections
		 * @return {void} 
		 */
		DatabaseCreateCollection(requestBody: DatabaseCreateCollectionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'database/collections', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Collection
		 * Delete a collection by its unique ID. Only users with write permissions have access to delete this resource.
		 * Delete database/collections/{collectionId}
		 * @param {string} collectionId Collection unique ID.
		 * @return {void} 
		 */
		DatabaseDeleteCollection(collectionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'database/collections/' + (collectionId == null ? '' : encodeURIComponent(collectionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Collection
		 * Get a collection by its unique ID. This endpoint response returns a JSON object with the collection metadata.
		 * Get database/collections/{collectionId}
		 * @param {string} collectionId Collection unique ID.
		 * @return {Collection} Collection
		 */
		DatabaseGetCollection(collectionId: string): Observable<Collection> {
			return this.http.get<Collection>(this.baseUri + 'database/collections/' + (collectionId == null ? '' : encodeURIComponent(collectionId)), {});
		}

		/**
		 * Update Collection
		 * Update a collection by its unique ID.
		 * Put database/collections/{collectionId}
		 * @param {string} collectionId Collection unique ID.
		 * @return {Collection} Collection
		 */
		DatabaseUpdateCollection(collectionId: string, requestBody: DatabaseUpdateCollectionPutBody): Observable<Collection> {
			return this.http.put<Collection>(this.baseUri + 'database/collections/' + (collectionId == null ? '' : encodeURIComponent(collectionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Documents
		 * Get a list of all the user documents. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's documents. [Learn more about different API modes](/docs/admin).
		 * Get database/collections/{collectionId}/documents
		 * @param {string} collectionId Collection unique ID. You can create a new collection with validation rules using the Database service [server integration](/docs/server/database#createCollection).
		 * @param {Array<string>} filters Array of filter strings. Each filter is constructed from a key name, comparison operator (=, !=, >, <, <=, >=) and a value. You can also use a dot (.) separator in attribute names to filter by child document attributes. Examples: 'name=John Doe' or 'category.$id>=5bed2d152c362'.
		 * @param {number} limit Maximum number of documents to return in response.  Use this value to manage pagination. By default will return maximum 25 results. Maximum of 100 results allowed per request.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Offset value. The default value is 0. Use this param to manage pagination.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} orderField Document field that results will be sorted by.
		 * @param {string} orderType Order direction. Possible values are DESC for descending order, or ASC for ascending order.
		 * @param {string} orderCast Order field type casting. Possible values are int, string, date, time or datetime. The database will attempt to cast the order field to the value you pass here. The default value is a string.
		 * @param {string} search Search query. Enter any free text search. The database will try to find a match against all document attributes and children. Max length: 256 chars.
		 * @return {DocumentList} Documents List
		 */
		DatabaseListDocuments(collectionId: string, filters: Array<string> | null | undefined, limit: number | null | undefined, offset: number | null | undefined, orderField: string | null | undefined, orderType: string | null | undefined, orderCast: string | null | undefined, search: string | null | undefined): Observable<DocumentList> {
			return this.http.get<DocumentList>(this.baseUri + 'database/collections/' + (collectionId == null ? '' : encodeURIComponent(collectionId)) + '/documents&' + filters?.map(z => `filters=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&offset=' + offset + '&orderField=' + (orderField == null ? '' : encodeURIComponent(orderField)) + '&orderType=' + (orderType == null ? '' : encodeURIComponent(orderType)) + '&orderCast=' + (orderCast == null ? '' : encodeURIComponent(orderCast)) + '&search=' + (search == null ? '' : encodeURIComponent(search)), {});
		}

		/**
		 * Create Document
		 * Create a new Document. Before using this route, you should create a new collection resource using either a [server integration](/docs/server/database#databaseCreateCollection) API or directly from your database console.
		 * Post database/collections/{collectionId}/documents
		 * @param {string} collectionId Collection unique ID. You can create a new collection with validation rules using the Database service [server integration](/docs/server/database#createCollection).
		 * @return {void} 
		 */
		DatabaseCreateDocument(collectionId: string, requestBody: DatabaseCreateDocumentPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'database/collections/' + (collectionId == null ? '' : encodeURIComponent(collectionId)) + '/documents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Document
		 * Delete a document by its unique ID. This endpoint deletes only the parent documents, its attributes and relations to other documents. Child documents **will not** be deleted.
		 * Delete database/collections/{collectionId}/documents/{documentId}
		 * @param {string} collectionId Collection unique ID. You can create a new collection with validation rules using the Database service [server integration](/docs/server/database#createCollection).
		 * @param {string} documentId Document unique ID.
		 * @return {void} 
		 */
		DatabaseDeleteDocument(collectionId: string, documentId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'database/collections/' + (collectionId == null ? '' : encodeURIComponent(collectionId)) + '/documents/' + (documentId == null ? '' : encodeURIComponent(documentId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Document
		 * Get a document by its unique ID. This endpoint response returns a JSON object with the document data.
		 * Get database/collections/{collectionId}/documents/{documentId}
		 * @param {string} collectionId Collection unique ID. You can create a new collection with validation rules using the Database service [server integration](/docs/server/database#createCollection).
		 * @param {string} documentId Document unique ID.
		 * @return {Document} Document
		 */
		DatabaseGetDocument(collectionId: string, documentId: string): Observable<Document> {
			return this.http.get<Document>(this.baseUri + 'database/collections/' + (collectionId == null ? '' : encodeURIComponent(collectionId)) + '/documents/' + (documentId == null ? '' : encodeURIComponent(documentId)), {});
		}

		/**
		 * Update Document
		 * Update a document by its unique ID. Using the patch method you can pass only specific fields that will get updated.
		 * Patch database/collections/{collectionId}/documents/{documentId}
		 * @param {string} collectionId Collection unique ID. You can create a new collection with validation rules using the Database service [server integration](/docs/server/database#createCollection).
		 * @param {string} documentId Document unique ID.
		 * @return {Document} Document
		 */
		DatabaseUpdateDocument(collectionId: string, documentId: string, requestBody: DatabaseUpdateDocumentPatchBody): Observable<Document> {
			return this.http.patch<Document>(this.baseUri + 'database/collections/' + (collectionId == null ? '' : encodeURIComponent(collectionId)) + '/documents/' + (documentId == null ? '' : encodeURIComponent(documentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Functions
		 * Get a list of all the project's functions. You can use the query params to filter your results.
		 * Get functions
		 * @param {string} search Search term to filter your list results. Max length: 256 chars.
		 * @param {number} limit Results limit value. By default will return maximum 25 results. Maximum of 100 results allowed per request.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Results offset. The default value is 0. Use this param to manage pagination.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} orderType Order result by ASC or DESC order.
		 * @return {FunctionList} Functions List
		 */
		FunctionsList(search: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined, orderType: string | null | undefined): Observable<FunctionList> {
			return this.http.get<FunctionList>(this.baseUri + 'functions?search=' + (search == null ? '' : encodeURIComponent(search)) + '&limit=' + limit + '&offset=' + offset + '&orderType=' + (orderType == null ? '' : encodeURIComponent(orderType)), {});
		}

		/**
		 * Create Function
		 * Create a new function. You can pass a list of [permissions](/docs/permissions) to allow different project users or team with access to execute the function using the client API.
		 * Post functions
		 * @return {void} 
		 */
		FunctionsCreate(requestBody: FunctionsCreatePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'functions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Function
		 * Delete a function by its unique ID.
		 * Delete functions/{functionId}
		 * @param {string} functionId Function unique ID.
		 * @return {void} 
		 */
		FunctionsDelete(functionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'functions/' + (functionId == null ? '' : encodeURIComponent(functionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Function
		 * Get a function by its unique ID.
		 * Get functions/{functionId}
		 * @param {string} functionId Function unique ID.
		 * @return {function_} Function
		 */
		FunctionsGet(functionId: string): Observable<function_> {
			return this.http.get<function_>(this.baseUri + 'functions/' + (functionId == null ? '' : encodeURIComponent(functionId)), {});
		}

		/**
		 * Update Function
		 * Update function by its unique ID.
		 * Put functions/{functionId}
		 * @param {string} functionId Function unique ID.
		 * @return {function_} Function
		 */
		FunctionsUpdate(functionId: string, requestBody: FunctionsUpdatePutBody): Observable<function_> {
			return this.http.put<function_>(this.baseUri + 'functions/' + (functionId == null ? '' : encodeURIComponent(functionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Executions
		 * Get a list of all the current user function execution logs. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's executions. [Learn more about different API modes](/docs/admin).
		 * Get functions/{functionId}/executions
		 * @param {string} functionId Function unique ID.
		 * @param {string} search Search term to filter your list results. Max length: 256 chars.
		 * @param {number} limit Results limit value. By default will return maximum 25 results. Maximum of 100 results allowed per request.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Results offset. The default value is 0. Use this param to manage pagination.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} orderType Order result by ASC or DESC order.
		 * @return {ExecutionList} Executions List
		 */
		FunctionsListExecutions(functionId: string, search: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined, orderType: string | null | undefined): Observable<ExecutionList> {
			return this.http.get<ExecutionList>(this.baseUri + 'functions/' + (functionId == null ? '' : encodeURIComponent(functionId)) + '/executions&search=' + (search == null ? '' : encodeURIComponent(search)) + '&limit=' + limit + '&offset=' + offset + '&orderType=' + (orderType == null ? '' : encodeURIComponent(orderType)), {});
		}

		/**
		 * Create Execution
		 * Trigger a function execution. The returned object will return you the current execution status. You can ping the `Get Execution` endpoint to get updates on the current execution status. Once this endpoint is called, your function execution process will start asynchronously.
		 * Post functions/{functionId}/executions
		 * @param {string} functionId Function unique ID.
		 * @return {void} 
		 */
		FunctionsCreateExecution(functionId: string, requestBody: FunctionsCreateExecutionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'functions/' + (functionId == null ? '' : encodeURIComponent(functionId)) + '/executions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Execution
		 * Get a function execution log by its unique ID.
		 * Get functions/{functionId}/executions/{executionId}
		 * @param {string} functionId Function unique ID.
		 * @param {string} executionId Execution unique ID.
		 * @return {Execution} Execution
		 */
		FunctionsGetExecution(functionId: string, executionId: string): Observable<Execution> {
			return this.http.get<Execution>(this.baseUri + 'functions/' + (functionId == null ? '' : encodeURIComponent(functionId)) + '/executions/' + (executionId == null ? '' : encodeURIComponent(executionId)), {});
		}

		/**
		 * Update Function Tag
		 * Update the function code tag ID using the unique function ID. Use this endpoint to switch the code tag that should be executed by the execution endpoint.
		 * Patch functions/{functionId}/tag
		 * @param {string} functionId Function unique ID.
		 * @return {function_} Function
		 */
		FunctionsUpdateTag(functionId: string, requestBody: FunctionsUpdateTagPatchBody): Observable<function_> {
			return this.http.patch<function_>(this.baseUri + 'functions/' + (functionId == null ? '' : encodeURIComponent(functionId)) + '/tag', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Tags
		 * Get a list of all the project's code tags. You can use the query params to filter your results.
		 * Get functions/{functionId}/tags
		 * @param {string} functionId Function unique ID.
		 * @param {string} search Search term to filter your list results. Max length: 256 chars.
		 * @param {number} limit Results limit value. By default will return maximum 25 results. Maximum of 100 results allowed per request.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Results offset. The default value is 0. Use this param to manage pagination.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} orderType Order result by ASC or DESC order.
		 * @return {TagList} Tags List
		 */
		FunctionsListTags(functionId: string, search: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined, orderType: string | null | undefined): Observable<TagList> {
			return this.http.get<TagList>(this.baseUri + 'functions/' + (functionId == null ? '' : encodeURIComponent(functionId)) + '/tags&search=' + (search == null ? '' : encodeURIComponent(search)) + '&limit=' + limit + '&offset=' + offset + '&orderType=' + (orderType == null ? '' : encodeURIComponent(orderType)), {});
		}

		/**
		 * Delete Tag
		 * Delete a code tag by its unique ID.
		 * Delete functions/{functionId}/tags/{tagId}
		 * @param {string} functionId Function unique ID.
		 * @param {string} tagId Tag unique ID.
		 * @return {void} 
		 */
		FunctionsDeleteTag(functionId: string, tagId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'functions/' + (functionId == null ? '' : encodeURIComponent(functionId)) + '/tags/' + (tagId == null ? '' : encodeURIComponent(tagId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Tag
		 * Get a code tag by its unique ID.
		 * Get functions/{functionId}/tags/{tagId}
		 * @param {string} functionId Function unique ID.
		 * @param {string} tagId Tag unique ID.
		 * @return {Tag} Tag
		 */
		FunctionsGetTag(functionId: string, tagId: string): Observable<Tag> {
			return this.http.get<Tag>(this.baseUri + 'functions/' + (functionId == null ? '' : encodeURIComponent(functionId)) + '/tags/' + (tagId == null ? '' : encodeURIComponent(tagId)), {});
		}

		/**
		 * Get HTTP
		 * Check the Appwrite HTTP server is up and responsive.
		 * Get health
		 * @return {void} 
		 */
		HealthGet(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'health', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Anti virus
		 * Check the Appwrite Anti Virus server is up and connection is successful.
		 * Get health/anti-virus
		 * @return {void} 
		 */
		HealthGetAntiVirus(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'health/anti-virus', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Cache
		 * Check the Appwrite in-memory cache server is up and connection is successful.
		 * Get health/cache
		 * @return {void} 
		 */
		HealthGetCache(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'health/cache', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get DB
		 * Check the Appwrite database server is up and connection is successful.
		 * Get health/db
		 * @return {void} 
		 */
		HealthGetDB(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'health/db', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Certificate Queue
		 * Get the number of certificates that are waiting to be issued against [Letsencrypt](https://letsencrypt.org/) in the Appwrite internal queue server.
		 * Get health/queue/certificates
		 * @return {void} 
		 */
		HealthGetQueueCertificates(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'health/queue/certificates', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Functions Queue
		 * Get health/queue/functions
		 * @return {void} 
		 */
		HealthGetQueueFunctions(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'health/queue/functions', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Logs Queue
		 * Get the number of logs that are waiting to be processed in the Appwrite internal queue server.
		 * Get health/queue/logs
		 * @return {void} 
		 */
		HealthGetQueueLogs(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'health/queue/logs', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Tasks Queue
		 * Get the number of tasks that are waiting to be processed in the Appwrite internal queue server.
		 * Get health/queue/tasks
		 * @return {void} 
		 */
		HealthGetQueueTasks(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'health/queue/tasks', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Usage Queue
		 * Get the number of usage stats that are waiting to be processed in the Appwrite internal queue server.
		 * Get health/queue/usage
		 * @return {void} 
		 */
		HealthGetQueueUsage(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'health/queue/usage', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Webhooks Queue
		 * Get the number of webhooks that are waiting to be processed in the Appwrite internal queue server.
		 * Get health/queue/webhooks
		 * @return {void} 
		 */
		HealthGetQueueWebhooks(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'health/queue/webhooks', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Local Storage
		 * Check the Appwrite local storage device is up and connection is successful.
		 * Get health/storage/local
		 * @return {void} 
		 */
		HealthGetStorageLocal(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'health/storage/local', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Time
		 * Check the Appwrite server time is synced with Google remote NTP server. We use this technology to smoothly handle leap seconds with no disruptive events. The [Network Time Protocol](https://en.wikipedia.org/wiki/Network_Time_Protocol) (NTP) is used by hundreds of millions of computers and devices to synchronize their clocks over the Internet. If your computer sets its own clock, it likely uses NTP.
		 * Get health/time
		 * @return {void} 
		 */
		HealthGetTime(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'health/time', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get User Locale
		 * Get the current user location based on IP. Returns an object with user country code, country name, continent name, continent code, ip address and suggested currency. You can use the locale header to get the data in a supported language.
		 * ([IP Geolocation by DB-IP](https://db-ip.com))
		 * Get locale
		 * @return {Locale} Locale
		 */
		LocaleGet(): Observable<Locale> {
			return this.http.get<Locale>(this.baseUri + 'locale', {});
		}

		/**
		 * List Continents
		 * List of all continents. You can use the locale header to get the data in a supported language.
		 * Get locale/continents
		 * @return {ContinentList} Continents List
		 */
		LocaleGetContinents(): Observable<ContinentList> {
			return this.http.get<ContinentList>(this.baseUri + 'locale/continents', {});
		}

		/**
		 * List Countries
		 * List of all countries. You can use the locale header to get the data in a supported language.
		 * Get locale/countries
		 * @return {CountryList} Countries List
		 */
		LocaleGetCountries(): Observable<CountryList> {
			return this.http.get<CountryList>(this.baseUri + 'locale/countries', {});
		}

		/**
		 * List EU Countries
		 * List of all countries that are currently members of the EU. You can use the locale header to get the data in a supported language.
		 * Get locale/countries/eu
		 * @return {CountryList} Countries List
		 */
		LocaleGetCountriesEU(): Observable<CountryList> {
			return this.http.get<CountryList>(this.baseUri + 'locale/countries/eu', {});
		}

		/**
		 * List Countries Phone Codes
		 * List of all countries phone codes. You can use the locale header to get the data in a supported language.
		 * Get locale/countries/phones
		 * @return {PhoneList} Phones List
		 */
		LocaleGetCountriesPhones(): Observable<PhoneList> {
			return this.http.get<PhoneList>(this.baseUri + 'locale/countries/phones', {});
		}

		/**
		 * List Currencies
		 * List of all currencies, including currency symbol, name, plural, and decimal digits for all major and minor currencies. You can use the locale header to get the data in a supported language.
		 * Get locale/currencies
		 * @return {CurrencyList} Currencies List
		 */
		LocaleGetCurrencies(): Observable<CurrencyList> {
			return this.http.get<CurrencyList>(this.baseUri + 'locale/currencies', {});
		}

		/**
		 * List Languages
		 * List of all languages classified by ISO 639-1 including 2-letter code, name in English, and name in the respective language.
		 * Get locale/languages
		 * @return {LanguageList} Languages List
		 */
		LocaleGetLanguages(): Observable<LanguageList> {
			return this.http.get<LanguageList>(this.baseUri + 'locale/languages', {});
		}

		/**
		 * List Files
		 * Get a list of all the user files. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's files. [Learn more about different API modes](/docs/admin).
		 * Get storage/files
		 * @param {string} search Search term to filter your list results. Max length: 256 chars.
		 * @param {number} limit Results limit value. By default will return maximum 25 results. Maximum of 100 results allowed per request.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Results offset. The default value is 0. Use this param to manage pagination.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} orderType Order result by ASC or DESC order.
		 * @return {FileList} Files List
		 */
		StorageListFiles(search: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined, orderType: string | null | undefined): Observable<FileList> {
			return this.http.get<FileList>(this.baseUri + 'storage/files?search=' + (search == null ? '' : encodeURIComponent(search)) + '&limit=' + limit + '&offset=' + offset + '&orderType=' + (orderType == null ? '' : encodeURIComponent(orderType)), {});
		}

		/**
		 * Delete File
		 * Delete a file by its unique ID. Only users with write permissions have access to delete this resource.
		 * Delete storage/files/{fileId}
		 * @param {string} fileId File unique ID.
		 * @return {void} 
		 */
		StorageDeleteFile(fileId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'storage/files/' + (fileId == null ? '' : encodeURIComponent(fileId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get File
		 * Get a file by its unique ID. This endpoint response returns a JSON object with the file metadata.
		 * Get storage/files/{fileId}
		 * @param {string} fileId File unique ID.
		 * @return {File} File
		 */
		StorageGetFile(fileId: string): Observable<File> {
			return this.http.get<File>(this.baseUri + 'storage/files/' + (fileId == null ? '' : encodeURIComponent(fileId)), {});
		}

		/**
		 * Update File
		 * Update a file by its unique ID. Only users with write permissions have access to update this resource.
		 * Put storage/files/{fileId}
		 * @param {string} fileId File unique ID.
		 * @return {File} File
		 */
		StorageUpdateFile(fileId: string, requestBody: StorageUpdateFilePutBody): Observable<File> {
			return this.http.put<File>(this.baseUri + 'storage/files/' + (fileId == null ? '' : encodeURIComponent(fileId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get File for Download
		 * Get a file content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.
		 * Get storage/files/{fileId}/download
		 * @param {string} fileId File unique ID.
		 * @return {void} File
		 */
		StorageGetFileDownload(fileId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'storage/files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/download', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get File Preview
		 * Get a file preview image. Currently, this method supports preview for image files (jpg, png, and gif), other supported formats, like pdf, docs, slides, and spreadsheets, will return the file icon image. You can also pass query string arguments for cutting and resizing your preview image.
		 * Get storage/files/{fileId}/preview
		 * @param {string} fileId File unique ID
		 * @param {number} width Resize preview image width, Pass an integer between 0 to 4000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} height Resize preview image height, Pass an integer between 0 to 4000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} gravity Image crop gravity. Can be one of center,top-left,top,top-right,left,right,bottom-left,bottom,bottom-right
		 * @param {number} quality Preview image quality. Pass an integer between 0 to 100. Defaults to 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} borderWidth Preview image border in pixels. Pass an integer between 0 to 100. Defaults to 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} borderColor Preview image border color. Use a valid HEX color, no # is needed for prefix.
		 * @param {number} borderRadius Preview image border radius in pixels. Pass an integer between 0 to 4000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} opacity Preview image opacity. Only works with images having an alpha channel (like png). Pass a number between 0 to 1.
		 *     Type: float
		 * @param {number} rotation Preview image rotation in degrees. Pass an integer between 0 and 360.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} background Preview image background color. Only works with transparent images (png). Use a valid HEX color, no # is needed for prefix.
		 * @param {string} output Output format type (jpeg, jpg, png, gif and webp).
		 * @return {void} Image
		 */
		StorageGetFilePreview(fileId: string, width: number | null | undefined, height: number | null | undefined, gravity: string | null | undefined, quality: number | null | undefined, borderWidth: number | null | undefined, borderColor: string | null | undefined, borderRadius: number | null | undefined, opacity: number | null | undefined, rotation: number | null | undefined, background: string | null | undefined, output: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'storage/files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/preview&width=' + width + '&height=' + height + '&gravity=' + (gravity == null ? '' : encodeURIComponent(gravity)) + '&quality=' + quality + '&borderWidth=' + borderWidth + '&borderColor=' + (borderColor == null ? '' : encodeURIComponent(borderColor)) + '&borderRadius=' + borderRadius + '&opacity=' + opacity + '&rotation=' + rotation + '&background=' + (background == null ? '' : encodeURIComponent(background)) + '&output=' + (output == null ? '' : encodeURIComponent(output)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get File for View
		 * Get a file content by its unique ID. This endpoint is similar to the download method but returns with no  'Content-Disposition: attachment' header.
		 * Get storage/files/{fileId}/view
		 * @param {string} fileId File unique ID.
		 * @return {void} File
		 */
		StorageGetFileView(fileId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'storage/files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/view', { observe: 'response', responseType: 'text' });
		}

		/**
		 * List Teams
		 * Get a list of all the current user teams. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's teams. [Learn more about different API modes](/docs/admin).
		 * Get teams
		 * @param {string} search Search term to filter your list results. Max length: 256 chars.
		 * @param {number} limit Results limit value. By default will return maximum 25 results. Maximum of 100 results allowed per request.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Results offset. The default value is 0. Use this param to manage pagination.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} orderType Order result by ASC or DESC order.
		 * @return {TeamList} Teams List
		 */
		TeamsList(search: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined, orderType: string | null | undefined): Observable<TeamList> {
			return this.http.get<TeamList>(this.baseUri + 'teams?search=' + (search == null ? '' : encodeURIComponent(search)) + '&limit=' + limit + '&offset=' + offset + '&orderType=' + (orderType == null ? '' : encodeURIComponent(orderType)), {});
		}

		/**
		 * Create Team
		 * Create a new team. The user who creates the team will automatically be assigned as the owner of the team. The team owner can invite new members, who will be able add new owners and update or delete the team from your project.
		 * Post teams
		 * @return {void} 
		 */
		TeamsCreate(requestBody: TeamsCreatePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'teams', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Team
		 * Delete a team by its unique ID. Only team owners have write access for this resource.
		 * Delete teams/{teamId}
		 * @param {string} teamId Team unique ID.
		 * @return {void} 
		 */
		TeamsDelete(teamId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'teams/' + (teamId == null ? '' : encodeURIComponent(teamId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Team
		 * Get a team by its unique ID. All team members have read access for this resource.
		 * Get teams/{teamId}
		 * @param {string} teamId Team unique ID.
		 * @return {Team} Team
		 */
		TeamsGet(teamId: string): Observable<Team> {
			return this.http.get<Team>(this.baseUri + 'teams/' + (teamId == null ? '' : encodeURIComponent(teamId)), {});
		}

		/**
		 * Update Team
		 * Update a team by its unique ID. Only team owners have write access for this resource.
		 * Put teams/{teamId}
		 * @param {string} teamId Team unique ID.
		 * @return {Team} Team
		 */
		TeamsUpdate(teamId: string, requestBody: TeamsUpdatePutBody): Observable<Team> {
			return this.http.put<Team>(this.baseUri + 'teams/' + (teamId == null ? '' : encodeURIComponent(teamId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Team Memberships
		 * Get a team members by the team unique ID. All team members have read access for this list of resources.
		 * Get teams/{teamId}/memberships
		 * @param {string} teamId Team unique ID.
		 * @param {string} search Search term to filter your list results. Max length: 256 chars.
		 * @param {number} limit Results limit value. By default will return maximum 25 results. Maximum of 100 results allowed per request.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Results offset. The default value is 0. Use this param to manage pagination.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} orderType Order result by ASC or DESC order.
		 * @return {MembershipList} Memberships List
		 */
		TeamsGetMemberships(teamId: string, search: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined, orderType: string | null | undefined): Observable<MembershipList> {
			return this.http.get<MembershipList>(this.baseUri + 'teams/' + (teamId == null ? '' : encodeURIComponent(teamId)) + '/memberships&search=' + (search == null ? '' : encodeURIComponent(search)) + '&limit=' + limit + '&offset=' + offset + '&orderType=' + (orderType == null ? '' : encodeURIComponent(orderType)), {});
		}

		/**
		 * Create Team Membership
		 * Use this endpoint to invite a new member to join your team. If initiated from Client SDK, an email with a link to join the team will be sent to the new member's email address if the member doesn't exist in the project it will be created automatically. If initiated from server side SDKs, new member will automatically be added to the team.
		 * Use the 'URL' parameter to redirect the user from the invitation email back to your app. When the user is redirected, use the [Update Team Membership Status](/docs/client/teams#teamsUpdateMembershipStatus) endpoint to allow the user to accept the invitation to the team.  While calling from side SDKs the redirect url can be empty string.
		 * Please note that in order to avoid a [Redirect Attacks](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) the only valid redirect URL's are the once from domains you have set when added your platforms in the console interface.
		 * Post teams/{teamId}/memberships
		 * @param {string} teamId Team unique ID.
		 * @return {void} 
		 */
		TeamsCreateMembership(teamId: string, requestBody: TeamsCreateMembershipPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'teams/' + (teamId == null ? '' : encodeURIComponent(teamId)) + '/memberships', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Team Membership
		 * This endpoint allows a user to leave a team or for a team owner to delete the membership of any other team member. You can also use this endpoint to delete a user membership even if it is not accepted.
		 * Delete teams/{teamId}/memberships/{membershipId}
		 * @param {string} teamId Team unique ID.
		 * @param {string} membershipId Membership ID.
		 * @return {void} 
		 */
		TeamsDeleteMembership(teamId: string, membershipId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'teams/' + (teamId == null ? '' : encodeURIComponent(teamId)) + '/memberships/' + (membershipId == null ? '' : encodeURIComponent(membershipId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Membership Roles
		 * Patch teams/{teamId}/memberships/{membershipId}
		 * @param {string} teamId Team unique ID.
		 * @param {string} membershipId Membership ID.
		 * @return {Membership} Membership
		 */
		TeamsUpdateMembershipRoles(teamId: string, membershipId: string, requestBody: TeamsUpdateMembershipRolesPatchBody): Observable<Membership> {
			return this.http.patch<Membership>(this.baseUri + 'teams/' + (teamId == null ? '' : encodeURIComponent(teamId)) + '/memberships/' + (membershipId == null ? '' : encodeURIComponent(membershipId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update Team Membership Status
		 * Use this endpoint to allow a user to accept an invitation to join a team after being redirected back to your app from the invitation email recieved by the user.
		 * Patch teams/{teamId}/memberships/{membershipId}/status
		 * @param {string} teamId Team unique ID.
		 * @param {string} membershipId Membership ID.
		 * @return {Membership} Membership
		 */
		TeamsUpdateMembershipStatus(teamId: string, membershipId: string, requestBody: TeamsUpdateMembershipStatusPatchBody): Observable<Membership> {
			return this.http.patch<Membership>(this.baseUri + 'teams/' + (teamId == null ? '' : encodeURIComponent(teamId)) + '/memberships/' + (membershipId == null ? '' : encodeURIComponent(membershipId)) + '/status', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Users
		 * Get a list of all the project's users. You can use the query params to filter your results.
		 * Get users
		 * @param {string} search Search term to filter your list results. Max length: 256 chars.
		 * @param {number} limit Results limit value. By default will return maximum 25 results. Maximum of 100 results allowed per request.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Results offset. The default value is 0. Use this param to manage pagination.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} orderType Order result by ASC or DESC order.
		 * @return {UserList} Users List
		 */
		UsersList(search: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined, orderType: string | null | undefined): Observable<UserList> {
			return this.http.get<UserList>(this.baseUri + 'users?search=' + (search == null ? '' : encodeURIComponent(search)) + '&limit=' + limit + '&offset=' + offset + '&orderType=' + (orderType == null ? '' : encodeURIComponent(orderType)), {});
		}

		/**
		 * Create User
		 * Create a new user.
		 * Post users
		 * @return {void} 
		 */
		UsersCreate(requestBody: UsersCreatePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete User
		 * Delete a user by its unique ID.
		 * Delete users/{userId}
		 * @param {string} userId User unique ID.
		 * @return {void} 
		 */
		UsersDelete(userId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + (userId == null ? '' : encodeURIComponent(userId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get User
		 * Get a user by its unique ID.
		 * Get users/{userId}
		 * @param {string} userId User unique ID.
		 * @return {User} User
		 */
		UsersGet(userId: string): Observable<User> {
			return this.http.get<User>(this.baseUri + 'users/' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Get User Logs
		 * Get a user activity logs list by its unique ID.
		 * Get users/{userId}/logs
		 * @param {string} userId User unique ID.
		 * @return {LogList} Logs List
		 */
		UsersGetLogs(userId: string): Observable<LogList> {
			return this.http.get<LogList>(this.baseUri + 'users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/logs', {});
		}

		/**
		 * Get User Preferences
		 * Get the user preferences by its unique ID.
		 * Get users/{userId}/prefs
		 * @param {string} userId User unique ID.
		 * @return {Preferences} Preferences
		 */
		UsersGetPrefs(userId: string): Observable<Preferences> {
			return this.http.get<Preferences>(this.baseUri + 'users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/prefs', {});
		}

		/**
		 * Update User Preferences
		 * Update the user preferences by its unique ID. You can pass only the specific settings you wish to update.
		 * Patch users/{userId}/prefs
		 * @param {string} userId User unique ID.
		 * @return {Preferences} Preferences
		 */
		UsersUpdatePrefs(userId: string, requestBody: UsersUpdatePrefsPatchBody): Observable<Preferences> {
			return this.http.patch<Preferences>(this.baseUri + 'users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/prefs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete User Sessions
		 * Delete all user's sessions by using the user's unique ID.
		 * Delete users/{userId}/sessions
		 * @param {string} userId User unique ID.
		 * @return {void} 
		 */
		UsersDeleteSessions(userId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/sessions', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get User Sessions
		 * Get the user sessions list by its unique ID.
		 * Get users/{userId}/sessions
		 * @param {string} userId User unique ID.
		 * @return {SessionList} Sessions List
		 */
		UsersGetSessions(userId: string): Observable<SessionList> {
			return this.http.get<SessionList>(this.baseUri + 'users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/sessions', {});
		}

		/**
		 * Delete User Session
		 * Delete a user sessions by its unique ID.
		 * Delete users/{userId}/sessions/{sessionId}
		 * @param {string} userId User unique ID.
		 * @param {string} sessionId User unique session ID.
		 * @return {void} 
		 */
		UsersDeleteSession(userId: string, sessionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/sessions/' + (sessionId == null ? '' : encodeURIComponent(sessionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update User Status
		 * Update the user status by its unique ID.
		 * Patch users/{userId}/status
		 * @param {string} userId User unique ID.
		 * @return {User} User
		 */
		UsersUpdateStatus(userId: string, requestBody: UsersUpdateStatusPatchBody): Observable<User> {
			return this.http.patch<User>(this.baseUri + 'users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/status', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update Email Verification
		 * Update the user email verification status by its unique ID.
		 * Patch users/{userId}/verification
		 * @param {string} userId User unique ID.
		 * @return {User} User
		 */
		UsersUpdateVerification(userId: string, requestBody: UsersUpdateVerificationPatchBody): Observable<User> {
			return this.http.patch<User>(this.baseUri + 'users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/verification', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface AccountUpdateEmailPatchBody {

		/**
		 * User email.
		 * Required
		 */
		email: string;

		/**
		 * User password. Must be between 6 to 32 chars.
		 * Required
		 */
		password: string;
	}
	export interface AccountUpdateEmailPatchBodyFormProperties {

		/**
		 * User email.
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * User password. Must be between 6 to 32 chars.
		 * Required
		 */
		password: FormControl<string | null | undefined>,
	}
	export function CreateAccountUpdateEmailPatchBodyFormGroup() {
		return new FormGroup<AccountUpdateEmailPatchBodyFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AccountUpdateNamePatchBody {

		/**
		 * User name. Max length: 128 chars.
		 * Required
		 */
		name: string;
	}
	export interface AccountUpdateNamePatchBodyFormProperties {

		/**
		 * User name. Max length: 128 chars.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAccountUpdateNamePatchBodyFormGroup() {
		return new FormGroup<AccountUpdateNamePatchBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AccountUpdatePasswordPatchBody {

		/** Old user password. Must be between 6 to 32 chars. */
		oldPassword?: string | null;

		/**
		 * New user password. Must be between 6 to 32 chars.
		 * Required
		 */
		password: string;
	}
	export interface AccountUpdatePasswordPatchBodyFormProperties {

		/** Old user password. Must be between 6 to 32 chars. */
		oldPassword: FormControl<string | null | undefined>,

		/**
		 * New user password. Must be between 6 to 32 chars.
		 * Required
		 */
		password: FormControl<string | null | undefined>,
	}
	export function CreateAccountUpdatePasswordPatchBodyFormGroup() {
		return new FormGroup<AccountUpdatePasswordPatchBodyFormProperties>({
			oldPassword: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AccountUpdatePrefsPatchBody {

		/**
		 * Prefs key-value JSON object.
		 * Required
		 */
		prefs: string;
	}
	export interface AccountUpdatePrefsPatchBodyFormProperties {

		/**
		 * Prefs key-value JSON object.
		 * Required
		 */
		prefs: FormControl<string | null | undefined>,
	}
	export function CreateAccountUpdatePrefsPatchBodyFormGroup() {
		return new FormGroup<AccountUpdatePrefsPatchBodyFormProperties>({
			prefs: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AccountCreateRecoveryPostBody {

		/**
		 * User email.
		 * Required
		 */
		email: string;

		/**
		 * URL to redirect the user back to your app from the recovery email. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.
		 * Required
		 */
		url: string;
	}
	export interface AccountCreateRecoveryPostBodyFormProperties {

		/**
		 * User email.
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * URL to redirect the user back to your app from the recovery email. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAccountCreateRecoveryPostBodyFormGroup() {
		return new FormGroup<AccountCreateRecoveryPostBodyFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AccountUpdateRecoveryPutBody {

		/**
		 * New password. Must be between 6 to 32 chars.
		 * Required
		 */
		password: string;

		/**
		 * New password again. Must be between 6 to 32 chars.
		 * Required
		 */
		passwordAgain: string;

		/**
		 * Valid reset token.
		 * Required
		 */
		secret: string;

		/**
		 * User account UID address.
		 * Required
		 */
		userId: string;
	}
	export interface AccountUpdateRecoveryPutBodyFormProperties {

		/**
		 * New password. Must be between 6 to 32 chars.
		 * Required
		 */
		password: FormControl<string | null | undefined>,

		/**
		 * New password again. Must be between 6 to 32 chars.
		 * Required
		 */
		passwordAgain: FormControl<string | null | undefined>,

		/**
		 * Valid reset token.
		 * Required
		 */
		secret: FormControl<string | null | undefined>,

		/**
		 * User account UID address.
		 * Required
		 */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateAccountUpdateRecoveryPutBodyFormGroup() {
		return new FormGroup<AccountUpdateRecoveryPutBodyFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			passwordAgain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AccountCreateVerificationPostBody {

		/**
		 * URL to redirect the user back to your app from the verification email. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.
		 * Required
		 */
		url: string;
	}
	export interface AccountCreateVerificationPostBodyFormProperties {

		/**
		 * URL to redirect the user back to your app from the verification email. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAccountCreateVerificationPostBodyFormGroup() {
		return new FormGroup<AccountCreateVerificationPostBodyFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AccountUpdateVerificationPutBody {

		/**
		 * Valid verification token.
		 * Required
		 */
		secret: string;

		/**
		 * User unique ID.
		 * Required
		 */
		userId: string;
	}
	export interface AccountUpdateVerificationPutBodyFormProperties {

		/**
		 * Valid verification token.
		 * Required
		 */
		secret: FormControl<string | null | undefined>,

		/**
		 * User unique ID.
		 * Required
		 */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateAccountUpdateVerificationPutBodyFormGroup() {
		return new FormGroup<AccountUpdateVerificationPutBodyFormProperties>({
			secret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DatabaseCreateCollectionPostBody {

		/**
		 * Collection name. Max length: 128 chars.
		 * Required
		 */
		name: string;

		/**
		 * An array of strings with read permissions. By default no user is granted with any read permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions.
		 * Required
		 */
		read: Array<string>;

		/**
		 * Array of [rule objects](/docs/rules). Each rule define a collection field name, data type and validation.
		 * Required
		 */
		rules: Array<string>;

		/**
		 * An array of strings with write permissions. By default no user is granted with any write permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions.
		 * Required
		 */
		write: Array<string>;
	}
	export interface DatabaseCreateCollectionPostBodyFormProperties {

		/**
		 * Collection name. Max length: 128 chars.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseCreateCollectionPostBodyFormGroup() {
		return new FormGroup<DatabaseCreateCollectionPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DatabaseUpdateCollectionPutBody {

		/**
		 * Collection name. Max length: 128 chars.
		 * Required
		 */
		name: string;

		/** An array of strings with read permissions. By default inherits the existing read permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions. */
		read?: Array<string>;

		/** Array of [rule objects](/docs/rules). Each rule define a collection field name, data type and validation. */
		rules?: Array<string>;

		/** An array of strings with write permissions. By default inherits the existing write permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions. */
		write?: Array<string>;
	}
	export interface DatabaseUpdateCollectionPutBodyFormProperties {

		/**
		 * Collection name. Max length: 128 chars.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseUpdateCollectionPutBodyFormGroup() {
		return new FormGroup<DatabaseUpdateCollectionPutBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DatabaseCreateDocumentPostBody {

		/**
		 * Document data as JSON object.
		 * Required
		 */
		data: string;

		/** Parent document unique ID. Use when you want your new document to be a child of a parent document. */
		parentDocument?: string | null;

		/** Parent document property name. Use when you want your new document to be a child of a parent document. */
		parentProperty?: string | null;

		/** Parent document property connection type. You can set this value to **assign**, **append** or **prepend**, default value is assign. Use when you want your new document to be a child of a parent document. */
		parentPropertyType?: string | null;

		/** An array of strings with read permissions. By default only the current user is granted with read permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions. */
		read?: Array<string>;

		/** An array of strings with write permissions. By default only the current user is granted with write permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions. */
		write?: Array<string>;
	}
	export interface DatabaseCreateDocumentPostBodyFormProperties {

		/**
		 * Document data as JSON object.
		 * Required
		 */
		data: FormControl<string | null | undefined>,

		/** Parent document unique ID. Use when you want your new document to be a child of a parent document. */
		parentDocument: FormControl<string | null | undefined>,

		/** Parent document property name. Use when you want your new document to be a child of a parent document. */
		parentProperty: FormControl<string | null | undefined>,

		/** Parent document property connection type. You can set this value to **assign**, **append** or **prepend**, default value is assign. Use when you want your new document to be a child of a parent document. */
		parentPropertyType: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseCreateDocumentPostBodyFormGroup() {
		return new FormGroup<DatabaseCreateDocumentPostBodyFormProperties>({
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parentDocument: new FormControl<string | null | undefined>(undefined),
			parentProperty: new FormControl<string | null | undefined>(undefined),
			parentPropertyType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DatabaseUpdateDocumentPatchBody {

		/**
		 * Document data as JSON object.
		 * Required
		 */
		data: string;

		/** An array of strings with read permissions. By default inherits the existing read permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions. */
		read?: Array<string>;

		/** An array of strings with write permissions. By default inherits the existing write permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions. */
		write?: Array<string>;
	}
	export interface DatabaseUpdateDocumentPatchBodyFormProperties {

		/**
		 * Document data as JSON object.
		 * Required
		 */
		data: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseUpdateDocumentPatchBodyFormGroup() {
		return new FormGroup<DatabaseUpdateDocumentPatchBodyFormProperties>({
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FunctionsCreatePostBody {

		/** Events list. */
		events?: Array<string>;

		/**
		 * An array of strings with execution permissions. By default no user is granted with any execute permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions.
		 * Required
		 */
		execute: Array<string>;

		/**
		 * Function name. Max length: 128 chars.
		 * Required
		 */
		name: string;

		/**
		 * Execution runtime.
		 * Required
		 */
		runtime: string;

		/** Schedule CRON syntax. */
		schedule?: string | null;

		/**
		 * Function maximum execution time in seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		timeout?: number | null;

		/** Key-value JSON object. */
		vars?: string | null;
	}
	export interface FunctionsCreatePostBodyFormProperties {

		/**
		 * Function name. Max length: 128 chars.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Execution runtime.
		 * Required
		 */
		runtime: FormControl<string | null | undefined>,

		/** Schedule CRON syntax. */
		schedule: FormControl<string | null | undefined>,

		/**
		 * Function maximum execution time in seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		timeout: FormControl<number | null | undefined>,

		/** Key-value JSON object. */
		vars: FormControl<string | null | undefined>,
	}
	export function CreateFunctionsCreatePostBodyFormGroup() {
		return new FormGroup<FunctionsCreatePostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			runtime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schedule: new FormControl<string | null | undefined>(undefined),
			timeout: new FormControl<number | null | undefined>(undefined),
			vars: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FunctionsUpdatePutBody {

		/** Events list. */
		events?: Array<string>;

		/**
		 * An array of strings with execution permissions. By default no user is granted with any execute permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions.
		 * Required
		 */
		execute: Array<string>;

		/**
		 * Function name. Max length: 128 chars.
		 * Required
		 */
		name: string;

		/** Schedule CRON syntax. */
		schedule?: string | null;

		/**
		 * Function maximum execution time in seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		timeout?: number | null;

		/** Key-value JSON object. */
		vars?: string | null;
	}
	export interface FunctionsUpdatePutBodyFormProperties {

		/**
		 * Function name. Max length: 128 chars.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Schedule CRON syntax. */
		schedule: FormControl<string | null | undefined>,

		/**
		 * Function maximum execution time in seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		timeout: FormControl<number | null | undefined>,

		/** Key-value JSON object. */
		vars: FormControl<string | null | undefined>,
	}
	export function CreateFunctionsUpdatePutBodyFormGroup() {
		return new FormGroup<FunctionsUpdatePutBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schedule: new FormControl<string | null | undefined>(undefined),
			timeout: new FormControl<number | null | undefined>(undefined),
			vars: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FunctionsCreateExecutionPostBody {

		/** String of custom data to send to function. */
		data?: string | null;
	}
	export interface FunctionsCreateExecutionPostBodyFormProperties {

		/** String of custom data to send to function. */
		data: FormControl<string | null | undefined>,
	}
	export function CreateFunctionsCreateExecutionPostBodyFormGroup() {
		return new FormGroup<FunctionsCreateExecutionPostBodyFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FunctionsUpdateTagPatchBody {

		/**
		 * Tag unique ID.
		 * Required
		 */
		tag: string;
	}
	export interface FunctionsUpdateTagPatchBodyFormProperties {

		/**
		 * Tag unique ID.
		 * Required
		 */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateFunctionsUpdateTagPatchBodyFormGroup() {
		return new FormGroup<FunctionsUpdateTagPatchBodyFormProperties>({
			tag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StorageUpdateFilePutBody {

		/**
		 * An array of strings with read permissions. By default no user is granted with any read permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions.
		 * Required
		 */
		read: Array<string>;

		/**
		 * An array of strings with write permissions. By default no user is granted with any write permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions.
		 * Required
		 */
		write: Array<string>;
	}
	export interface StorageUpdateFilePutBodyFormProperties {
	}
	export function CreateStorageUpdateFilePutBodyFormGroup() {
		return new FormGroup<StorageUpdateFilePutBodyFormProperties>({
		});

	}

	export interface TeamsCreatePostBody {

		/**
		 * Team name. Max length: 128 chars.
		 * Required
		 */
		name: string;

		/** Array of strings. Use this param to set the roles in the team for the user who created it. The default role is **owner**. A role can be any string. Learn more about [roles and permissions](/docs/permissions). Max length for each role is 32 chars. */
		roles?: Array<string>;
	}
	export interface TeamsCreatePostBodyFormProperties {

		/**
		 * Team name. Max length: 128 chars.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTeamsCreatePostBodyFormGroup() {
		return new FormGroup<TeamsCreatePostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TeamsUpdatePutBody {

		/**
		 * Team name. Max length: 128 chars.
		 * Required
		 */
		name: string;
	}
	export interface TeamsUpdatePutBodyFormProperties {

		/**
		 * Team name. Max length: 128 chars.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTeamsUpdatePutBodyFormGroup() {
		return new FormGroup<TeamsUpdatePutBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TeamsCreateMembershipPostBody {

		/**
		 * New team member email.
		 * Required
		 */
		email: string;

		/** New team member name. Max length: 128 chars. */
		name?: string | null;

		/**
		 * Array of strings. Use this param to set the user roles in the team. A role can be any string. Learn more about [roles and permissions](/docs/permissions). Max length for each role is 32 chars.
		 * Required
		 */
		roles: Array<string>;

		/**
		 * URL to redirect the user back to your app from the invitation email.  Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.
		 * Required
		 */
		url: string;
	}
	export interface TeamsCreateMembershipPostBodyFormProperties {

		/**
		 * New team member email.
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/** New team member name. Max length: 128 chars. */
		name: FormControl<string | null | undefined>,

		/**
		 * URL to redirect the user back to your app from the invitation email.  Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateTeamsCreateMembershipPostBodyFormGroup() {
		return new FormGroup<TeamsCreateMembershipPostBodyFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TeamsUpdateMembershipRolesPatchBody {

		/**
		 * Array of strings. Use this param to set the user roles in the team. A role can be any string. Learn more about [roles and permissions](/docs/permissions). Max length for each role is 32 chars.
		 * Required
		 */
		roles: Array<string>;
	}
	export interface TeamsUpdateMembershipRolesPatchBodyFormProperties {
	}
	export function CreateTeamsUpdateMembershipRolesPatchBodyFormGroup() {
		return new FormGroup<TeamsUpdateMembershipRolesPatchBodyFormProperties>({
		});

	}

	export interface TeamsUpdateMembershipStatusPatchBody {

		/**
		 * Secret key.
		 * Required
		 */
		secret: string;

		/**
		 * User unique ID.
		 * Required
		 */
		userId: string;
	}
	export interface TeamsUpdateMembershipStatusPatchBodyFormProperties {

		/**
		 * Secret key.
		 * Required
		 */
		secret: FormControl<string | null | undefined>,

		/**
		 * User unique ID.
		 * Required
		 */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateTeamsUpdateMembershipStatusPatchBodyFormGroup() {
		return new FormGroup<TeamsUpdateMembershipStatusPatchBodyFormProperties>({
			secret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UsersCreatePostBody {

		/**
		 * User email.
		 * Required
		 */
		email: string;

		/** User name. Max length: 128 chars. */
		name?: string | null;

		/**
		 * User password. Must be between 6 to 32 chars.
		 * Required
		 */
		password: string;
	}
	export interface UsersCreatePostBodyFormProperties {

		/**
		 * User email.
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/** User name. Max length: 128 chars. */
		name: FormControl<string | null | undefined>,

		/**
		 * User password. Must be between 6 to 32 chars.
		 * Required
		 */
		password: FormControl<string | null | undefined>,
	}
	export function CreateUsersCreatePostBodyFormGroup() {
		return new FormGroup<UsersCreatePostBodyFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UsersUpdatePrefsPatchBody {

		/**
		 * Prefs key-value JSON object.
		 * Required
		 */
		prefs: string;
	}
	export interface UsersUpdatePrefsPatchBodyFormProperties {

		/**
		 * Prefs key-value JSON object.
		 * Required
		 */
		prefs: FormControl<string | null | undefined>,
	}
	export function CreateUsersUpdatePrefsPatchBodyFormGroup() {
		return new FormGroup<UsersUpdatePrefsPatchBodyFormProperties>({
			prefs: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UsersUpdateStatusPatchBody {

		/**
		 * User Status code. To activate the user pass 1, to block the user pass 2 and for disabling the user pass 0
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: number;
	}
	export interface UsersUpdateStatusPatchBodyFormProperties {

		/**
		 * User Status code. To activate the user pass 1, to block the user pass 2 and for disabling the user pass 0
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreateUsersUpdateStatusPatchBodyFormGroup() {
		return new FormGroup<UsersUpdateStatusPatchBodyFormProperties>({
			status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UsersUpdateVerificationPatchBody {

		/**
		 * User Email Verification Status.
		 * Required
		 */
		emailVerification: boolean;
	}
	export interface UsersUpdateVerificationPatchBodyFormProperties {

		/**
		 * User Email Verification Status.
		 * Required
		 */
		emailVerification: FormControl<boolean | null | undefined>,
	}
	export function CreateUsersUpdateVerificationPatchBodyFormGroup() {
		return new FormGroup<UsersUpdateVerificationPatchBodyFormProperties>({
			emailVerification: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

}

