import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An animal that makes an annual prediction on Groundhog Day. */
	export interface Groundhog {

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		active: GroundhogActive;

		/** Required */
		city: string;

		/** Required */
		contact: string;

		/** Required */
		coordinates: string;

		/** Required */
		country: string;

		/** Required */
		currentPrediction: string;

		/** Required */
		description: string;

		/**
		 * Required
		 * Minimum: 1
		 */
		id: number;

		/** Required */
		image: string;

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		isGroundhog: number;

		/** Required */
		name: string;
		predictions?: Array<Prediction>;

		/**
		 * All predictions, excluding nulls.
		 * Minimum: 1
		 */
		predictionsCount?: number | null;

		/** Required */
		region: string;

		/** Required */
		shortname: string;

		/** Required */
		slug: string;

		/** Required */
		source: string;

		/** Required */
		type: string;
	}

	/** An animal that makes an annual prediction on Groundhog Day. */
	export interface GroundhogFormProperties {

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		active: FormControl<GroundhogActive | null | undefined>,

		/** Required */
		city: FormControl<string | null | undefined>,

		/** Required */
		contact: FormControl<string | null | undefined>,

		/** Required */
		coordinates: FormControl<string | null | undefined>,

		/** Required */
		country: FormControl<string | null | undefined>,

		/** Required */
		currentPrediction: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 */
		id: FormControl<number | null | undefined>,

		/** Required */
		image: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		isGroundhog: FormControl<number | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/**
		 * All predictions, excluding nulls.
		 * Minimum: 1
		 */
		predictionsCount: FormControl<number | null | undefined>,

		/** Required */
		region: FormControl<string | null | undefined>,

		/** Required */
		shortname: FormControl<string | null | undefined>,

		/** Required */
		slug: FormControl<string | null | undefined>,

		/** Required */
		source: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGroundhogFormGroup() {
		return new FormGroup<GroundhogFormProperties>({
			active: new FormControl<GroundhogActive | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(1)]),
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			contact: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			coordinates: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			currentPrediction: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			image: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isGroundhog: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			predictionsCount: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shortname: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GroundhogActive { _0 = 0, _1 = 1 }


	/** An annual prediction of an early spring or a longer winter. */
	export interface Prediction {

		/** Required */
		details: string;

		/** An animal that makes an annual prediction on Groundhog Day. */
		groundhog?: Groundhog;

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		shadow: number;

		/**
		 * Required
		 * Minimum: 1886
		 */
		year: number;
	}

	/** An annual prediction of an early spring or a longer winter. */
	export interface PredictionFormProperties {

		/** Required */
		details: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		shadow: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 1886
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreatePredictionFormGroup() {
		return new FormGroup<PredictionFormProperties>({
			details: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shadow: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(1)]),
			year: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1886)]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Root
		 * Returns a welcome message.
		 * Get api/v1
		 * @return {RootReturn} OK
		 */
		Root(): Observable<RootReturn> {
			return this.http.get<RootReturn>(this.baseUri + 'api/v1', {});
		}

		/**
		 * Get all groundhogs
		 * Returns all prognosticating animals with their known predictions.
		 * Get api/v1/groundhogs
		 * @param {string} country Filter groundhogs by country of origin (USA or Canada).
		 * @param {GroundhogsIsGroundhog} isGroundhog Filter groundhogs by type (actual, alive groundhogs, or other prognosticators)
		 * @return {GroundhogsReturn} OK
		 */
		Groundhogs(country: string | null | undefined, isGroundhog: GroundhogsIsGroundhog | null | undefined): Observable<GroundhogsReturn> {
			return this.http.get<GroundhogsReturn>(this.baseUri + 'api/v1/groundhogs?country=' + (country == null ? '' : encodeURIComponent(country)) + '&isGroundhog=' + isGroundhog, {});
		}

		/**
		 * Get a groundhog by slug
		 * Returns a prognosticating animal and its known predictions.
		 * Get api/v1/groundhogs/{slug}
		 * @return {GroundhogReturn} OK
		 */
		Groundhog(): Observable<GroundhogReturn> {
			return this.http.get<GroundhogReturn>(this.baseUri + 'api/v1/groundhogs/{slug}', {});
		}

		/**
		 * Get predictions for a given year
		 * Get all predictions for a given year.
		 * Get api/v1/predictions
		 * @param {number} year A calendar year
		 *     Minimum: 1886
		 * @return {PredictionsReturn} OK
		 */
		Predictions(year: number | null | undefined): Observable<PredictionsReturn> {
			return this.http.get<PredictionsReturn>(this.baseUri + 'api/v1/predictions?year=' + year, {});
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

		/** Required */
		message: string;
	}
	export interface RootReturnFormProperties {

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateRootReturnFormGroup() {
		return new FormGroup<RootReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RootReturn_links {
		groundhog?: RootReturn_linksGroundhog;
		groundhogs?: RootReturn_linksGroundhogs;
		predictions?: RootReturn_linksPredictions;
		self?: RootReturn_linksSelf;
		spec?: RootReturn_linksSpec;
	}
	export interface RootReturn_linksFormProperties {
	}
	export function CreateRootReturn_linksFormGroup() {
		return new FormGroup<RootReturn_linksFormProperties>({
		});

	}

	export interface RootReturn_linksGroundhog {

		/** Required */
		href: string;
	}
	export interface RootReturn_linksGroundhogFormProperties {

		/** Required */
		href: FormControl<string | null | undefined>,
	}
	export function CreateRootReturn_linksGroundhogFormGroup() {
		return new FormGroup<RootReturn_linksGroundhogFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RootReturn_linksGroundhogs {

		/** Required */
		href: string;
	}
	export interface RootReturn_linksGroundhogsFormProperties {

		/** Required */
		href: FormControl<string | null | undefined>,
	}
	export function CreateRootReturn_linksGroundhogsFormGroup() {
		return new FormGroup<RootReturn_linksGroundhogsFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RootReturn_linksPredictions {

		/** Required */
		href: string;
	}
	export interface RootReturn_linksPredictionsFormProperties {

		/** Required */
		href: FormControl<string | null | undefined>,
	}
	export function CreateRootReturn_linksPredictionsFormGroup() {
		return new FormGroup<RootReturn_linksPredictionsFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RootReturn_linksSelf {

		/** Required */
		href: string;
	}
	export interface RootReturn_linksSelfFormProperties {

		/** Required */
		href: FormControl<string | null | undefined>,
	}
	export function CreateRootReturn_linksSelfFormGroup() {
		return new FormGroup<RootReturn_linksSelfFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RootReturn_linksSpec {

		/** Required */
		href: string;
	}
	export interface RootReturn_linksSpecFormProperties {

		/** Required */
		href: FormControl<string | null | undefined>,
	}
	export function CreateRootReturn_linksSpecFormGroup() {
		return new FormGroup<RootReturn_linksSpecFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GroundhogsIsGroundhog { _1 = '1', _0 = '0', true = 'true', false = 'false' }

	export interface GroundhogsReturn {
		groundhogs?: Array<Groundhog>;
	}
	export interface GroundhogsReturnFormProperties {
	}
	export function CreateGroundhogsReturnFormGroup() {
		return new FormGroup<GroundhogsReturnFormProperties>({
		});

	}

	export interface GroundhogReturn {

		/** An animal that makes an annual prediction on Groundhog Day. */
		groundhog?: Groundhog;
	}
	export interface GroundhogReturnFormProperties {
	}
	export function CreateGroundhogReturnFormGroup() {
		return new FormGroup<GroundhogReturnFormProperties>({
		});

	}

	export interface PredictionsReturn {
		predictions?: Array<Prediction>;
	}
	export interface PredictionsReturnFormProperties {
	}
	export function CreatePredictionsReturnFormGroup() {
		return new FormGroup<PredictionsReturnFormProperties>({
		});

	}

}

