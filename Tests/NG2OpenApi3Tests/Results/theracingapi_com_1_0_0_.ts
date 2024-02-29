import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ChangeResponse {
		text?: string | null;
		type?: string | null;
	}
	export interface ChangeResponseFormProperties {
		text: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateChangeResponseFormGroup() {
		return new FormGroup<ChangeResponseFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CoursesPage {

		/** Required */
		courses: Array<App__models__courses__Course>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;
	}
	export interface CoursesPageFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateCoursesPageFormGroup() {
		return new FormGroup<CoursesPageFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface App__models__courses__Course {

		/** Required */
		course: string;

		/** Required */
		id: string;

		/** Required */
		region: string;

		/** Required */
		region_code: string;
	}
	export interface App__models__courses__CourseFormProperties {

		/** Required */
		course: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		region: FormControl<string | null | undefined>,

		/** Required */
		region_code: FormControl<string | null | undefined>,
	}
	export function CreateApp__models__courses__CourseFormGroup() {
		return new FormGroup<App__models__courses__CourseFormProperties>({
			course: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Dam {
		dam?: string | null;

		/** Required */
		id: string;
	}
	export interface DamFormProperties {
		dam: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDamFormGroup() {
		return new FormGroup<DamFormProperties>({
			dam: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DamClassAnalysis {

		/** Required */
		classes: Array<App__models__dams__Class>;

		/** Required */
		dam: string;

		/** Required */
		id: string;

		/** Required */
		query: Array<string>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_runners: number;
	}
	export interface DamClassAnalysisFormProperties {

		/** Required */
		dam: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_runners: FormControl<number | null | undefined>,
	}
	export function CreateDamClassAnalysisFormGroup() {
		return new FormGroup<DamClassAnalysisFormProperties>({
			dam: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_runners: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface App__models__dams__Class {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': number;

		/**
		 * Required
		 * Type: double
		 */
		'a/e': number;

		/** Required */
		class: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		runners: number;

		/**
		 * Required
		 * Type: double
		 */
		'win_%': number;
	}
	export interface App__models__dams__ClassFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'a/e': FormControl<number | null | undefined>,

		/** Required */
		class: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		runners: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'win_%': FormControl<number | null | undefined>,
	}
	export function CreateApp__models__dams__ClassFormGroup() {
		return new FormGroup<App__models__dams__ClassFormProperties>({
			'1_pl': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'1st': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'2nd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'3rd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'4th': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'a/e': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			class: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			runners: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'win_%': new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DamDistanceAnalysis {

		/** Required */
		dam: string;

		/** Required */
		distances: Array<App__models__dams__Distance>;

		/** Required */
		id: string;

		/** Required */
		query: Array<string>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_runners: number;
	}
	export interface DamDistanceAnalysisFormProperties {

		/** Required */
		dam: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_runners: FormControl<number | null | undefined>,
	}
	export function CreateDamDistanceAnalysisFormGroup() {
		return new FormGroup<DamDistanceAnalysisFormProperties>({
			dam: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_runners: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface App__models__dams__Distance {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': number;

		/**
		 * Required
		 * Type: double
		 */
		'a/e': number;

		/** Required */
		dist: string;

		/** Required */
		dist_f: string;

		/** Required */
		dist_m: string;

		/** Required */
		dist_y: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		runners: number;

		/**
		 * Required
		 * Type: double
		 */
		'win_%': number;
	}
	export interface App__models__dams__DistanceFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'a/e': FormControl<number | null | undefined>,

		/** Required */
		dist: FormControl<string | null | undefined>,

		/** Required */
		dist_f: FormControl<string | null | undefined>,

		/** Required */
		dist_m: FormControl<string | null | undefined>,

		/** Required */
		dist_y: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		runners: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'win_%': FormControl<number | null | undefined>,
	}
	export function CreateApp__models__dams__DistanceFormGroup() {
		return new FormGroup<App__models__dams__DistanceFormProperties>({
			'1_pl': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'1st': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'2nd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'3rd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'4th': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'a/e': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			dist: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dist_f: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dist_m: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dist_y: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			runners: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'win_%': new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Dams {

		/** Required */
		search_results: Array<Dam>;
	}
	export interface DamsFormProperties {
	}
	export function CreateDamsFormGroup() {
		return new FormGroup<DamsFormProperties>({
		});

	}

	export interface Damsire {
		damsire?: string | null;

		/** Required */
		id: string;
	}
	export interface DamsireFormProperties {
		damsire: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDamsireFormGroup() {
		return new FormGroup<DamsireFormProperties>({
			damsire: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DamsireClassAnalysis {

		/** Required */
		classes: Array<App__models__damsires__Class>;

		/** Required */
		damsire: string;

		/** Required */
		id: string;

		/** Required */
		query: Array<string>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_runners: number;
	}
	export interface DamsireClassAnalysisFormProperties {

		/** Required */
		damsire: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_runners: FormControl<number | null | undefined>,
	}
	export function CreateDamsireClassAnalysisFormGroup() {
		return new FormGroup<DamsireClassAnalysisFormProperties>({
			damsire: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_runners: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface App__models__damsires__Class {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': number;

		/**
		 * Required
		 * Type: double
		 */
		'a/e': number;

		/** Required */
		class: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		runners: number;

		/**
		 * Required
		 * Type: double
		 */
		'win_%': number;
	}
	export interface App__models__damsires__ClassFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'a/e': FormControl<number | null | undefined>,

		/** Required */
		class: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		runners: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'win_%': FormControl<number | null | undefined>,
	}
	export function CreateApp__models__damsires__ClassFormGroup() {
		return new FormGroup<App__models__damsires__ClassFormProperties>({
			'1_pl': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'1st': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'2nd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'3rd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'4th': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'a/e': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			class: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			runners: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'win_%': new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DamsireDistanceAnalysis {

		/** Required */
		damsire: string;

		/** Required */
		distances: Array<App__models__damsires__Distance>;

		/** Required */
		id: string;

		/** Required */
		query: Array<string>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_runners: number;
	}
	export interface DamsireDistanceAnalysisFormProperties {

		/** Required */
		damsire: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_runners: FormControl<number | null | undefined>,
	}
	export function CreateDamsireDistanceAnalysisFormGroup() {
		return new FormGroup<DamsireDistanceAnalysisFormProperties>({
			damsire: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_runners: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface App__models__damsires__Distance {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': number;

		/**
		 * Required
		 * Type: double
		 */
		'a/e': number;

		/** Required */
		dist: string;

		/** Required */
		dist_f: string;

		/** Required */
		dist_m: string;

		/** Required */
		dist_y: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		runners: number;

		/**
		 * Required
		 * Type: double
		 */
		'win_%': number;
	}
	export interface App__models__damsires__DistanceFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'a/e': FormControl<number | null | undefined>,

		/** Required */
		dist: FormControl<string | null | undefined>,

		/** Required */
		dist_f: FormControl<string | null | undefined>,

		/** Required */
		dist_m: FormControl<string | null | undefined>,

		/** Required */
		dist_y: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		runners: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'win_%': FormControl<number | null | undefined>,
	}
	export function CreateApp__models__damsires__DistanceFormGroup() {
		return new FormGroup<App__models__damsires__DistanceFormProperties>({
			'1_pl': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'1st': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'2nd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'3rd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'4th': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'a/e': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			dist: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dist_f: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dist_m: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dist_y: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			runners: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'win_%': new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Damsires {

		/** Required */
		search_results: Array<Damsire>;
	}
	export interface DamsiresFormProperties {
	}
	export function CreateDamsiresFormGroup() {
		return new FormGroup<DamsiresFormProperties>({
		});

	}

	export interface Distances {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': number;

		/**
		 * Required
		 * Type: double
		 */
		'a/e': number;

		/** Required */
		dist: string;

		/** Required */
		dist_f: string;

		/** Required */
		dist_m: string;

		/** Required */
		dist_y: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		runs: number;

		/** Required */
		times: Array<TimesGoing>;

		/**
		 * Required
		 * Type: double
		 */
		'win_%': number;
	}
	export interface DistancesFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'a/e': FormControl<number | null | undefined>,

		/** Required */
		dist: FormControl<string | null | undefined>,

		/** Required */
		dist_f: FormControl<string | null | undefined>,

		/** Required */
		dist_m: FormControl<string | null | undefined>,

		/** Required */
		dist_y: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		runs: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'win_%': FormControl<number | null | undefined>,
	}
	export function CreateDistancesFormGroup() {
		return new FormGroup<DistancesFormProperties>({
			'1_pl': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'1st': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'2nd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'3rd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'4th': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'a/e': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			dist: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dist_f: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dist_m: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dist_y: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			runs: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'win_%': new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TimesGoing {

		/** Required */
		course: string;

		/** Required */
		date: string;

		/** Required */
		going: string;

		/** Required */
		position: string;

		/** Required */
		region: string;

		/** Required */
		time: string;
	}
	export interface TimesGoingFormProperties {

		/** Required */
		course: FormControl<string | null | undefined>,

		/** Required */
		date: FormControl<string | null | undefined>,

		/** Required */
		going: FormControl<string | null | undefined>,

		/** Required */
		position: FormControl<string | null | undefined>,

		/** Required */
		region: FormControl<string | null | undefined>,

		/** Required */
		time: FormControl<string | null | undefined>,
	}
	export function CreateTimesGoingFormGroup() {
		return new FormGroup<TimesGoingFormProperties>({
			course: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			going: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			position: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EntriesResponse {

		/** Required */
		country: string;

		/** Required */
		date: string;

		/** Required */
		meet_id: string;

		/** Required */
		races: Array<App__models__na_entries__RaceResponse>;

		/** Required */
		track_id: string;

		/** Required */
		track_name: string;

		/** Required */
		weather: App__models__na_entries__WeatherResponse;
	}
	export interface EntriesResponseFormProperties {

		/** Required */
		country: FormControl<string | null | undefined>,

		/** Required */
		date: FormControl<string | null | undefined>,

		/** Required */
		meet_id: FormControl<string | null | undefined>,

		/** Required */
		track_id: FormControl<string | null | undefined>,

		/** Required */
		track_name: FormControl<string | null | undefined>,
	}
	export function CreateEntriesResponseFormGroup() {
		return new FormGroup<EntriesResponseFormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			meet_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			track_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			track_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface App__models__na_entries__RaceResponse {
		age_restriction?: string | null;
		age_restriction_description?: string | null;
		breed?: string | null;
		changes?: Array<ChangeResponse>;
		course_type?: string | null;
		course_type_class?: string | null;
		distance_description?: string | null;
		distance_unit?: string | null;
		distance_value?: number | null;
		grade?: string | null;
		handicapper_name?: string | null;
		has_finished?: boolean | null;
		has_results?: boolean | null;
		is_cancelled?: boolean | null;
		max_claim_price?: number | null;
		min_claim_price?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		mtp?: number | null;
		post_time?: string | null;
		post_time_long?: string | null;
		purse?: number | null;
		race_class?: string | null;

		/** Required */
		race_key: App__models__na_entries__RaceKeyResponse;
		race_name?: string | null;
		race_pools?: Array<RacePoolResponse>;
		race_restriction?: string | null;
		race_restriction_description?: string | null;
		race_type?: string | null;
		race_type_description?: string | null;

		/** Required */
		runners: Array<App__models__na_entries__RunnerResponse>;
		sex_restriction?: string | null;
		sex_restriction_description?: string | null;
		surface_description?: string | null;
		time_zone?: string | null;
		tote_track_id?: string | null;
		track_condition?: string | null;
		track_name?: string | null;
	}
	export interface App__models__na_entries__RaceResponseFormProperties {
		age_restriction: FormControl<string | null | undefined>,
		age_restriction_description: FormControl<string | null | undefined>,
		breed: FormControl<string | null | undefined>,
		course_type: FormControl<string | null | undefined>,
		course_type_class: FormControl<string | null | undefined>,
		distance_description: FormControl<string | null | undefined>,
		distance_unit: FormControl<string | null | undefined>,
		distance_value: FormControl<number | null | undefined>,
		grade: FormControl<string | null | undefined>,
		handicapper_name: FormControl<string | null | undefined>,
		has_finished: FormControl<boolean | null | undefined>,
		has_results: FormControl<boolean | null | undefined>,
		is_cancelled: FormControl<boolean | null | undefined>,
		max_claim_price: FormControl<number | null | undefined>,
		min_claim_price: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		mtp: FormControl<number | null | undefined>,
		post_time: FormControl<string | null | undefined>,
		post_time_long: FormControl<string | null | undefined>,
		purse: FormControl<number | null | undefined>,
		race_class: FormControl<string | null | undefined>,
		race_name: FormControl<string | null | undefined>,
		race_restriction: FormControl<string | null | undefined>,
		race_restriction_description: FormControl<string | null | undefined>,
		race_type: FormControl<string | null | undefined>,
		race_type_description: FormControl<string | null | undefined>,
		sex_restriction: FormControl<string | null | undefined>,
		sex_restriction_description: FormControl<string | null | undefined>,
		surface_description: FormControl<string | null | undefined>,
		time_zone: FormControl<string | null | undefined>,
		tote_track_id: FormControl<string | null | undefined>,
		track_condition: FormControl<string | null | undefined>,
		track_name: FormControl<string | null | undefined>,
	}
	export function CreateApp__models__na_entries__RaceResponseFormGroup() {
		return new FormGroup<App__models__na_entries__RaceResponseFormProperties>({
			age_restriction: new FormControl<string | null | undefined>(undefined),
			age_restriction_description: new FormControl<string | null | undefined>(undefined),
			breed: new FormControl<string | null | undefined>(undefined),
			course_type: new FormControl<string | null | undefined>(undefined),
			course_type_class: new FormControl<string | null | undefined>(undefined),
			distance_description: new FormControl<string | null | undefined>(undefined),
			distance_unit: new FormControl<string | null | undefined>(undefined),
			distance_value: new FormControl<number | null | undefined>(undefined),
			grade: new FormControl<string | null | undefined>(undefined),
			handicapper_name: new FormControl<string | null | undefined>(undefined),
			has_finished: new FormControl<boolean | null | undefined>(undefined),
			has_results: new FormControl<boolean | null | undefined>(undefined),
			is_cancelled: new FormControl<boolean | null | undefined>(undefined),
			max_claim_price: new FormControl<number | null | undefined>(undefined),
			min_claim_price: new FormControl<number | null | undefined>(undefined),
			mtp: new FormControl<number | null | undefined>(undefined),
			post_time: new FormControl<string | null | undefined>(undefined),
			post_time_long: new FormControl<string | null | undefined>(undefined),
			purse: new FormControl<number | null | undefined>(undefined),
			race_class: new FormControl<string | null | undefined>(undefined),
			race_name: new FormControl<string | null | undefined>(undefined),
			race_restriction: new FormControl<string | null | undefined>(undefined),
			race_restriction_description: new FormControl<string | null | undefined>(undefined),
			race_type: new FormControl<string | null | undefined>(undefined),
			race_type_description: new FormControl<string | null | undefined>(undefined),
			sex_restriction: new FormControl<string | null | undefined>(undefined),
			sex_restriction_description: new FormControl<string | null | undefined>(undefined),
			surface_description: new FormControl<string | null | undefined>(undefined),
			time_zone: new FormControl<string | null | undefined>(undefined),
			tote_track_id: new FormControl<string | null | undefined>(undefined),
			track_condition: new FormControl<string | null | undefined>(undefined),
			track_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface App__models__na_entries__RaceKeyResponse {
		day_evening?: string | null;
		race_number?: string | null;
	}
	export interface App__models__na_entries__RaceKeyResponseFormProperties {
		day_evening: FormControl<string | null | undefined>,
		race_number: FormControl<string | null | undefined>,
	}
	export function CreateApp__models__na_entries__RaceKeyResponseFormGroup() {
		return new FormGroup<App__models__na_entries__RaceKeyResponseFormProperties>({
			day_evening: new FormControl<string | null | undefined>(undefined),
			race_number: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RacePoolResponse {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		maximum_wager_amount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		minimum_box_amount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		minimum_wager_amount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		minimum_wheel_amount?: number | null;
		pool_code?: string | null;
		pool_name?: string | null;
		race_list?: string | null;
	}
	export interface RacePoolResponseFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		maximum_wager_amount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		minimum_box_amount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		minimum_wager_amount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		minimum_wheel_amount: FormControl<number | null | undefined>,
		pool_code: FormControl<string | null | undefined>,
		pool_name: FormControl<string | null | undefined>,
		race_list: FormControl<string | null | undefined>,
	}
	export function CreateRacePoolResponseFormGroup() {
		return new FormGroup<RacePoolResponseFormProperties>({
			maximum_wager_amount: new FormControl<number | null | undefined>(undefined),
			minimum_box_amount: new FormControl<number | null | undefined>(undefined),
			minimum_wager_amount: new FormControl<number | null | undefined>(undefined),
			minimum_wheel_amount: new FormControl<number | null | undefined>(undefined),
			pool_code: new FormControl<string | null | undefined>(undefined),
			pool_name: new FormControl<string | null | undefined>(undefined),
			race_list: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface App__models__na_entries__RunnerResponse {
		claiming?: number | null;
		coupled_type?: string | null;
		dam_name?: string | null;
		dam_sire_name?: string | null;
		description?: string | null;
		equipment?: string | null;
		handicapper_name?: string | null;
		horse_name?: string | null;
		jockey?: JockeyResponse;
		live_odds?: string | null;
		medication?: string | null;
		morning_line_odds?: string | null;
		post_pos?: string | null;
		program_number?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		program_number_stripped?: number | null;
		scratch_indicator?: string | null;
		sire_name?: string | null;
		trainer?: TrainerResponse;
		weight?: string | null;
	}
	export interface App__models__na_entries__RunnerResponseFormProperties {
		claiming: FormControl<number | null | undefined>,
		coupled_type: FormControl<string | null | undefined>,
		dam_name: FormControl<string | null | undefined>,
		dam_sire_name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		equipment: FormControl<string | null | undefined>,
		handicapper_name: FormControl<string | null | undefined>,
		horse_name: FormControl<string | null | undefined>,
		live_odds: FormControl<string | null | undefined>,
		medication: FormControl<string | null | undefined>,
		morning_line_odds: FormControl<string | null | undefined>,
		post_pos: FormControl<string | null | undefined>,
		program_number: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		program_number_stripped: FormControl<number | null | undefined>,
		scratch_indicator: FormControl<string | null | undefined>,
		sire_name: FormControl<string | null | undefined>,
		weight: FormControl<string | null | undefined>,
	}
	export function CreateApp__models__na_entries__RunnerResponseFormGroup() {
		return new FormGroup<App__models__na_entries__RunnerResponseFormProperties>({
			claiming: new FormControl<number | null | undefined>(undefined),
			coupled_type: new FormControl<string | null | undefined>(undefined),
			dam_name: new FormControl<string | null | undefined>(undefined),
			dam_sire_name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			equipment: new FormControl<string | null | undefined>(undefined),
			handicapper_name: new FormControl<string | null | undefined>(undefined),
			horse_name: new FormControl<string | null | undefined>(undefined),
			live_odds: new FormControl<string | null | undefined>(undefined),
			medication: new FormControl<string | null | undefined>(undefined),
			morning_line_odds: new FormControl<string | null | undefined>(undefined),
			post_pos: new FormControl<string | null | undefined>(undefined),
			program_number: new FormControl<string | null | undefined>(undefined),
			program_number_stripped: new FormControl<number | null | undefined>(undefined),
			scratch_indicator: new FormControl<string | null | undefined>(undefined),
			sire_name: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JockeyResponse {
		alias?: string | null;
		first_name?: string | null;
		first_name_initial?: string | null;
		last_name?: string | null;
		middle_name?: string | null;
		type?: string | null;
	}
	export interface JockeyResponseFormProperties {
		alias: FormControl<string | null | undefined>,
		first_name: FormControl<string | null | undefined>,
		first_name_initial: FormControl<string | null | undefined>,
		last_name: FormControl<string | null | undefined>,
		middle_name: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateJockeyResponseFormGroup() {
		return new FormGroup<JockeyResponseFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			first_name_initial: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			middle_name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TrainerResponse {
		alias?: string | null;
		first_name?: string | null;
		first_name_initial?: string | null;
		last_name?: string | null;
		middle_name?: string | null;
		type?: string | null;
	}
	export interface TrainerResponseFormProperties {
		alias: FormControl<string | null | undefined>,
		first_name: FormControl<string | null | undefined>,
		first_name_initial: FormControl<string | null | undefined>,
		last_name: FormControl<string | null | undefined>,
		middle_name: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateTrainerResponseFormGroup() {
		return new FormGroup<TrainerResponseFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			first_name_initial: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			middle_name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface App__models__na_entries__WeatherResponse {
		current_weather_description?: string | null;
		forecast_high?: number | null;
		forecast_low?: number | null;
		forecast_precipitation?: number | null;
		forecast_weather_description?: string | null;
	}
	export interface App__models__na_entries__WeatherResponseFormProperties {
		current_weather_description: FormControl<string | null | undefined>,
		forecast_high: FormControl<number | null | undefined>,
		forecast_low: FormControl<number | null | undefined>,
		forecast_precipitation: FormControl<number | null | undefined>,
		forecast_weather_description: FormControl<string | null | undefined>,
	}
	export function CreateApp__models__na_entries__WeatherResponseFormGroup() {
		return new FormGroup<App__models__na_entries__WeatherResponseFormProperties>({
			current_weather_description: new FormControl<string | null | undefined>(undefined),
			forecast_high: new FormControl<number | null | undefined>(undefined),
			forecast_low: new FormControl<number | null | undefined>(undefined),
			forecast_precipitation: new FormControl<number | null | undefined>(undefined),
			forecast_weather_description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FractionResponse {
		fraction_1?: TimeDataResponse;
		fraction_2?: TimeDataResponse;
		fraction_3?: TimeDataResponse;
		fraction_4?: TimeDataResponse;
		fraction_5?: TimeDataResponse;
		winning_time?: TimeDataResponse;
	}
	export interface FractionResponseFormProperties {
	}
	export function CreateFractionResponseFormGroup() {
		return new FormGroup<FractionResponseFormProperties>({
		});

	}

	export interface TimeDataResponse {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		fifths?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		hundredths?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		milliseconds?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		minutes?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		seconds?: number | null;
		str_fifths?: string | null;
		time_in_fifths?: string | null;
		time_in_hundredths?: string | null;
	}
	export interface TimeDataResponseFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		fifths: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		hundredths: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		milliseconds: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		minutes: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		seconds: FormControl<number | null | undefined>,
		str_fifths: FormControl<string | null | undefined>,
		time_in_fifths: FormControl<string | null | undefined>,
		time_in_hundredths: FormControl<string | null | undefined>,
	}
	export function CreateTimeDataResponseFormGroup() {
		return new FormGroup<TimeDataResponseFormProperties>({
			fifths: new FormControl<number | null | undefined>(undefined),
			hundredths: new FormControl<number | null | undefined>(undefined),
			milliseconds: new FormControl<number | null | undefined>(undefined),
			minutes: new FormControl<number | null | undefined>(undefined),
			seconds: new FormControl<number | null | undefined>(undefined),
			str_fifths: new FormControl<string | null | undefined>(undefined),
			time_in_fifths: new FormControl<string | null | undefined>(undefined),
			time_in_hundredths: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HTTPValidationError {
		detail?: Array<ValidationError>;
	}
	export interface HTTPValidationErrorFormProperties {
	}
	export function CreateHTTPValidationErrorFormGroup() {
		return new FormGroup<HTTPValidationErrorFormProperties>({
		});

	}

	export interface ValidationError {

		/** Required */
		loc: Array<string>;

		/** Required */
		msg: string;

		/** Required */
		type: string;
	}
	export interface ValidationErrorFormProperties {

		/** Required */
		msg: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateValidationErrorFormGroup() {
		return new FormGroup<ValidationErrorFormProperties>({
			msg: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Horse {
		dam?: string | null;
		dam_id?: string | null;
		damsire?: string | null;
		damsire_id?: string | null;
		horse?: string | null;

		/** Required */
		id: string;
		sire?: string | null;
		sire_id?: string | null;
	}
	export interface HorseFormProperties {
		dam: FormControl<string | null | undefined>,
		dam_id: FormControl<string | null | undefined>,
		damsire: FormControl<string | null | undefined>,
		damsire_id: FormControl<string | null | undefined>,
		horse: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		sire: FormControl<string | null | undefined>,
		sire_id: FormControl<string | null | undefined>,
	}
	export function CreateHorseFormGroup() {
		return new FormGroup<HorseFormProperties>({
			dam: new FormControl<string | null | undefined>(undefined),
			dam_id: new FormControl<string | null | undefined>(undefined),
			damsire: new FormControl<string | null | undefined>(undefined),
			damsire_id: new FormControl<string | null | undefined>(undefined),
			horse: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sire: new FormControl<string | null | undefined>(undefined),
			sire_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HorseAges {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': number;

		/**
		 * Required
		 * Type: double
		 */
		'a/e': number;

		/** Required */
		horse_age: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		runners: number;

		/**
		 * Required
		 * Type: double
		 */
		'win_%': number;
	}
	export interface HorseAgesFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'a/e': FormControl<number | null | undefined>,

		/** Required */
		horse_age: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		runners: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'win_%': FormControl<number | null | undefined>,
	}
	export function CreateHorseAgesFormGroup() {
		return new FormGroup<HorseAgesFormProperties>({
			'1_pl': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'1st': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'2nd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'3rd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'4th': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'a/e': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			horse_age: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			runners: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'win_%': new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HorseDistanceTimeAnalysis {

		/** Required */
		dam: string;

		/** Required */
		dam_id: string;

		/** Required */
		damsire: string;

		/** Required */
		damsire_id: string;

		/** Required */
		distances: Array<Distances>;

		/** Required */
		horse: string;

		/** Required */
		id: string;

		/** Required */
		query: Array<string>;

		/** Required */
		sire: string;

		/** Required */
		sire_id: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_runs: number;
	}
	export interface HorseDistanceTimeAnalysisFormProperties {

		/** Required */
		dam: FormControl<string | null | undefined>,

		/** Required */
		dam_id: FormControl<string | null | undefined>,

		/** Required */
		damsire: FormControl<string | null | undefined>,

		/** Required */
		damsire_id: FormControl<string | null | undefined>,

		/** Required */
		horse: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		sire: FormControl<string | null | undefined>,

		/** Required */
		sire_id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_runs: FormControl<number | null | undefined>,
	}
	export function CreateHorseDistanceTimeAnalysisFormGroup() {
		return new FormGroup<HorseDistanceTimeAnalysisFormProperties>({
			dam: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dam_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			damsire: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			damsire_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			horse: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sire: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sire_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_runs: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Horses {

		/** Required */
		search_results: Array<Horse>;
	}
	export interface HorsesFormProperties {
	}
	export function CreateHorsesFormGroup() {
		return new FormGroup<HorsesFormProperties>({
		});

	}

	export interface JockeyCourseAnalysis {

		/** Required */
		courses: Array<App__models__jockeys__Course>;

		/** Required */
		id: string;

		/** Required */
		jockey: string;

		/** Required */
		query: Array<string>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_rides: number;
	}
	export interface JockeyCourseAnalysisFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		jockey: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_rides: FormControl<number | null | undefined>,
	}
	export function CreateJockeyCourseAnalysisFormGroup() {
		return new FormGroup<JockeyCourseAnalysisFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jockey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_rides: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface App__models__jockeys__Course {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': number;

		/**
		 * Required
		 * Type: double
		 */
		'a/e': number;

		/** Required */
		course: string;

		/** Required */
		region: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rides: number;

		/**
		 * Required
		 * Type: double
		 */
		'win_%': number;
	}
	export interface App__models__jockeys__CourseFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'a/e': FormControl<number | null | undefined>,

		/** Required */
		course: FormControl<string | null | undefined>,

		/** Required */
		region: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rides: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'win_%': FormControl<number | null | undefined>,
	}
	export function CreateApp__models__jockeys__CourseFormGroup() {
		return new FormGroup<App__models__jockeys__CourseFormProperties>({
			'1_pl': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'1st': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'2nd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'3rd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'4th': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'a/e': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			course: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rides: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'win_%': new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface JockeyDistanceAnalysis {

		/** Required */
		distances: Array<App__models__jockeys__Distance>;

		/** Required */
		id: string;

		/** Required */
		jockey: string;

		/** Required */
		query: Array<string>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_rides: number;
	}
	export interface JockeyDistanceAnalysisFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		jockey: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_rides: FormControl<number | null | undefined>,
	}
	export function CreateJockeyDistanceAnalysisFormGroup() {
		return new FormGroup<JockeyDistanceAnalysisFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jockey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_rides: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface App__models__jockeys__Distance {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': number;

		/**
		 * Required
		 * Type: double
		 */
		'a/e': number;

		/** Required */
		dist: string;

		/** Required */
		dist_f: string;

		/** Required */
		dist_m: string;

		/** Required */
		dist_y: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rides: number;

		/**
		 * Required
		 * Type: double
		 */
		'win_%': number;
	}
	export interface App__models__jockeys__DistanceFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'a/e': FormControl<number | null | undefined>,

		/** Required */
		dist: FormControl<string | null | undefined>,

		/** Required */
		dist_f: FormControl<string | null | undefined>,

		/** Required */
		dist_m: FormControl<string | null | undefined>,

		/** Required */
		dist_y: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rides: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'win_%': FormControl<number | null | undefined>,
	}
	export function CreateApp__models__jockeys__DistanceFormGroup() {
		return new FormGroup<App__models__jockeys__DistanceFormProperties>({
			'1_pl': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'1st': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'2nd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'3rd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'4th': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'a/e': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			dist: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dist_f: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dist_m: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dist_y: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rides: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'win_%': new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface JockeyOwnerAnalysis {

		/** Required */
		id: string;

		/** Required */
		jockey: string;

		/** Required */
		owners: Array<App__models__jockeys__Owner>;

		/** Required */
		query: Array<string>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_rides: number;
	}
	export interface JockeyOwnerAnalysisFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		jockey: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_rides: FormControl<number | null | undefined>,
	}
	export function CreateJockeyOwnerAnalysisFormGroup() {
		return new FormGroup<JockeyOwnerAnalysisFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jockey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_rides: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface App__models__jockeys__Owner {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': number;

		/**
		 * Required
		 * Type: double
		 */
		'a/e': number;

		/** Required */
		owner: string;

		/** Required */
		owner_id: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rides: number;

		/**
		 * Required
		 * Type: double
		 */
		'win_%': number;
	}
	export interface App__models__jockeys__OwnerFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'a/e': FormControl<number | null | undefined>,

		/** Required */
		owner: FormControl<string | null | undefined>,

		/** Required */
		owner_id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rides: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'win_%': FormControl<number | null | undefined>,
	}
	export function CreateApp__models__jockeys__OwnerFormGroup() {
		return new FormGroup<App__models__jockeys__OwnerFormProperties>({
			'1_pl': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'1st': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'2nd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'3rd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'4th': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'a/e': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			owner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			owner_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rides: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'win_%': new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface JockeyTrainerAnalysis {

		/** Required */
		id: string;

		/** Required */
		jockey: string;

		/** Required */
		query: Array<string>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_rides: number;

		/** Required */
		trainers: Array<App__models__jockeys__Trainer>;
	}
	export interface JockeyTrainerAnalysisFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		jockey: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_rides: FormControl<number | null | undefined>,
	}
	export function CreateJockeyTrainerAnalysisFormGroup() {
		return new FormGroup<JockeyTrainerAnalysisFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jockey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_rides: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface App__models__jockeys__Trainer {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': number;

		/**
		 * Required
		 * Type: double
		 */
		'a/e': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rides: number;

		/** Required */
		trainer: string;

		/** Required */
		trainer_id: string;

		/**
		 * Required
		 * Type: double
		 */
		'win_%': number;
	}
	export interface App__models__jockeys__TrainerFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'a/e': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rides: FormControl<number | null | undefined>,

		/** Required */
		trainer: FormControl<string | null | undefined>,

		/** Required */
		trainer_id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'win_%': FormControl<number | null | undefined>,
	}
	export function CreateApp__models__jockeys__TrainerFormGroup() {
		return new FormGroup<App__models__jockeys__TrainerFormProperties>({
			'1_pl': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'1st': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'2nd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'3rd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'4th': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'a/e': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			rides: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			trainer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trainer_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'win_%': new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Jockeys {

		/** Required */
		search_results: Array<App__models__jockeys__Jockey>;
	}
	export interface JockeysFormProperties {
	}
	export function CreateJockeysFormGroup() {
		return new FormGroup<JockeysFormProperties>({
		});

	}

	export interface App__models__jockeys__Jockey {

		/** Required */
		id: string;
		jockey?: string | null;
	}
	export interface App__models__jockeys__JockeyFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
		jockey: FormControl<string | null | undefined>,
	}
	export function CreateApp__models__jockeys__JockeyFormGroup() {
		return new FormGroup<App__models__jockeys__JockeyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jockey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MeetResponse {

		/** Required */
		country: string;

		/** Required */
		date: string;

		/** Required */
		meet_id: string;

		/** Required */
		track_id: string;

		/** Required */
		track_name: string;
	}
	export interface MeetResponseFormProperties {

		/** Required */
		country: FormControl<string | null | undefined>,

		/** Required */
		date: FormControl<string | null | undefined>,

		/** Required */
		meet_id: FormControl<string | null | undefined>,

		/** Required */
		track_id: FormControl<string | null | undefined>,

		/** Required */
		track_name: FormControl<string | null | undefined>,
	}
	export function CreateMeetResponseFormGroup() {
		return new FormGroup<MeetResponseFormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			meet_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			track_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			track_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MeetsResponse {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: number;
		meets?: Array<MeetResponse>;

		/** Required */
		query: Array<string>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		skip: number;
	}
	export interface MeetsResponseFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		skip: FormControl<number | null | undefined>,
	}
	export function CreateMeetsResponseFormGroup() {
		return new FormGroup<MeetsResponseFormProperties>({
			limit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			skip: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OwnerCourseAnalysis {

		/** Required */
		courses: Array<App__models__owners__Course>;

		/** Required */
		id: string;

		/** Required */
		owner: string;

		/** Required */
		query: Array<string>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_runners: number;
	}
	export interface OwnerCourseAnalysisFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		owner: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_runners: FormControl<number | null | undefined>,
	}
	export function CreateOwnerCourseAnalysisFormGroup() {
		return new FormGroup<OwnerCourseAnalysisFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			owner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_runners: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface App__models__owners__Course {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': number;

		/**
		 * Required
		 * Type: double
		 */
		'a/e': number;

		/** Required */
		course: string;

		/** Required */
		region: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		runners: number;

		/**
		 * Required
		 * Type: double
		 */
		'win_%': number;
	}
	export interface App__models__owners__CourseFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'a/e': FormControl<number | null | undefined>,

		/** Required */
		course: FormControl<string | null | undefined>,

		/** Required */
		region: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		runners: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'win_%': FormControl<number | null | undefined>,
	}
	export function CreateApp__models__owners__CourseFormGroup() {
		return new FormGroup<App__models__owners__CourseFormProperties>({
			'1_pl': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'1st': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'2nd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'3rd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'4th': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'a/e': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			course: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			runners: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'win_%': new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OwnerDistanceAnalysis {

		/** Required */
		distances: Array<App__models__owners__Distance>;

		/** Required */
		id: string;

		/** Required */
		owner: string;

		/** Required */
		query: Array<string>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_runners: number;
	}
	export interface OwnerDistanceAnalysisFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		owner: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_runners: FormControl<number | null | undefined>,
	}
	export function CreateOwnerDistanceAnalysisFormGroup() {
		return new FormGroup<OwnerDistanceAnalysisFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			owner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_runners: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface App__models__owners__Distance {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': number;

		/**
		 * Required
		 * Type: double
		 */
		'a/e': number;

		/** Required */
		dist: string;

		/** Required */
		dist_f: string;

		/** Required */
		dist_m: string;

		/** Required */
		dist_y: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		runners: number;

		/**
		 * Required
		 * Type: double
		 */
		'win_%': number;
	}
	export interface App__models__owners__DistanceFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'a/e': FormControl<number | null | undefined>,

		/** Required */
		dist: FormControl<string | null | undefined>,

		/** Required */
		dist_f: FormControl<string | null | undefined>,

		/** Required */
		dist_m: FormControl<string | null | undefined>,

		/** Required */
		dist_y: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		runners: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'win_%': FormControl<number | null | undefined>,
	}
	export function CreateApp__models__owners__DistanceFormGroup() {
		return new FormGroup<App__models__owners__DistanceFormProperties>({
			'1_pl': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'1st': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'2nd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'3rd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'4th': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'a/e': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			dist: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dist_f: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dist_m: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dist_y: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			runners: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'win_%': new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OwnerJockeyAnalysis {

		/** Required */
		id: string;

		/** Required */
		jockeys: Array<App__models__owners__Jockey>;

		/** Required */
		owner: string;

		/** Required */
		query: Array<string>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_runners: number;
	}
	export interface OwnerJockeyAnalysisFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		owner: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_runners: FormControl<number | null | undefined>,
	}
	export function CreateOwnerJockeyAnalysisFormGroup() {
		return new FormGroup<OwnerJockeyAnalysisFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			owner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_runners: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface App__models__owners__Jockey {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': number;

		/**
		 * Required
		 * Type: double
		 */
		'a/e': number;

		/** Required */
		jockey: string;

		/** Required */
		jockey_id: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		runners: number;

		/**
		 * Required
		 * Type: double
		 */
		'win_%': number;
	}
	export interface App__models__owners__JockeyFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'a/e': FormControl<number | null | undefined>,

		/** Required */
		jockey: FormControl<string | null | undefined>,

		/** Required */
		jockey_id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		runners: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'win_%': FormControl<number | null | undefined>,
	}
	export function CreateApp__models__owners__JockeyFormGroup() {
		return new FormGroup<App__models__owners__JockeyFormProperties>({
			'1_pl': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'1st': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'2nd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'3rd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'4th': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'a/e': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			jockey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jockey_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			runners: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'win_%': new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OwnerTrainerAnalysis {

		/** Required */
		id: string;

		/** Required */
		owner: string;

		/** Required */
		query: Array<string>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_runners: number;

		/** Required */
		trainers: Array<App__models__owners__Trainer>;
	}
	export interface OwnerTrainerAnalysisFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		owner: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_runners: FormControl<number | null | undefined>,
	}
	export function CreateOwnerTrainerAnalysisFormGroup() {
		return new FormGroup<OwnerTrainerAnalysisFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			owner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_runners: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface App__models__owners__Trainer {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': number;

		/**
		 * Required
		 * Type: double
		 */
		'a/e': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		runners: number;

		/** Required */
		trainer: string;

		/** Required */
		trainer_id: string;

		/**
		 * Required
		 * Type: double
		 */
		'win_%': number;
	}
	export interface App__models__owners__TrainerFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'a/e': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		runners: FormControl<number | null | undefined>,

		/** Required */
		trainer: FormControl<string | null | undefined>,

		/** Required */
		trainer_id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'win_%': FormControl<number | null | undefined>,
	}
	export function CreateApp__models__owners__TrainerFormGroup() {
		return new FormGroup<App__models__owners__TrainerFormProperties>({
			'1_pl': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'1st': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'2nd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'3rd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'4th': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'a/e': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			runners: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			trainer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trainer_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'win_%': new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Owners {

		/** Required */
		search_results: Array<App__models__owners__Owner>;
	}
	export interface OwnersFormProperties {
	}
	export function CreateOwnersFormGroup() {
		return new FormGroup<OwnersFormProperties>({
		});

	}

	export interface App__models__owners__Owner {

		/** Required */
		id: string;
		owner?: string | null;
	}
	export interface App__models__owners__OwnerFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
		owner: FormControl<string | null | undefined>,
	}
	export function CreateApp__models__owners__OwnerFormGroup() {
		return new FormGroup<App__models__owners__OwnerFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			owner: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PayoffResponse {

		/** Type: double */
		base_amount?: number | null;

		/** Type: double */
		carryover?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		number_of_rights?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		number_of_tickets_bet?: number | null;

		/** Type: double */
		payoff_amount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_pool?: number | null;
		wager_name?: string | null;
		wager_type?: string | null;
		winning_numbers?: string | null;
	}
	export interface PayoffResponseFormProperties {

		/** Type: double */
		base_amount: FormControl<number | null | undefined>,

		/** Type: double */
		carryover: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		number_of_rights: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		number_of_tickets_bet: FormControl<number | null | undefined>,

		/** Type: double */
		payoff_amount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_pool: FormControl<number | null | undefined>,
		wager_name: FormControl<string | null | undefined>,
		wager_type: FormControl<string | null | undefined>,
		winning_numbers: FormControl<string | null | undefined>,
	}
	export function CreatePayoffResponseFormGroup() {
		return new FormGroup<PayoffResponseFormProperties>({
			base_amount: new FormControl<number | null | undefined>(undefined),
			carryover: new FormControl<number | null | undefined>(undefined),
			number_of_rights: new FormControl<number | null | undefined>(undefined),
			number_of_tickets_bet: new FormControl<number | null | undefined>(undefined),
			payoff_amount: new FormControl<number | null | undefined>(undefined),
			total_pool: new FormControl<number | null | undefined>(undefined),
			wager_name: new FormControl<string | null | undefined>(undefined),
			wager_type: new FormControl<string | null | undefined>(undefined),
			winning_numbers: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Racecard {

		/** Required */
		age_band: string;
		big_race?: boolean | null;

		/** Required */
		course: string;

		/** Required */
		course_id: string;

		/** Required */
		date: string;

		/** Required */
		distance: string;

		/** Required */
		distance_f: string;

		/** Required */
		distance_round: string;

		/** Required */
		field_size: string;

		/** Required */
		going: string;
		going_detailed?: string | null;
		is_abandoned?: boolean | null;
		off_dt?: string | null;

		/** Required */
		off_time: string;

		/** Required */
		pattern: string;

		/** Required */
		prize: string;

		/** Required */
		race_class: string;

		/** Required */
		race_id: string;

		/** Required */
		race_name: string;
		rail_movements?: string | null;

		/** Required */
		rating_band: string;

		/** Required */
		region: string;

		/** Required */
		runners: Array<App__models__racecards__Runner>;
		stalls?: string | null;
		surface?: string | null;

		/** Required */
		type: string;
		weather?: string | null;
	}
	export interface RacecardFormProperties {

		/** Required */
		age_band: FormControl<string | null | undefined>,
		big_race: FormControl<boolean | null | undefined>,

		/** Required */
		course: FormControl<string | null | undefined>,

		/** Required */
		course_id: FormControl<string | null | undefined>,

		/** Required */
		date: FormControl<string | null | undefined>,

		/** Required */
		distance: FormControl<string | null | undefined>,

		/** Required */
		distance_f: FormControl<string | null | undefined>,

		/** Required */
		distance_round: FormControl<string | null | undefined>,

		/** Required */
		field_size: FormControl<string | null | undefined>,

		/** Required */
		going: FormControl<string | null | undefined>,
		going_detailed: FormControl<string | null | undefined>,
		is_abandoned: FormControl<boolean | null | undefined>,
		off_dt: FormControl<string | null | undefined>,

		/** Required */
		off_time: FormControl<string | null | undefined>,

		/** Required */
		pattern: FormControl<string | null | undefined>,

		/** Required */
		prize: FormControl<string | null | undefined>,

		/** Required */
		race_class: FormControl<string | null | undefined>,

		/** Required */
		race_id: FormControl<string | null | undefined>,

		/** Required */
		race_name: FormControl<string | null | undefined>,
		rail_movements: FormControl<string | null | undefined>,

		/** Required */
		rating_band: FormControl<string | null | undefined>,

		/** Required */
		region: FormControl<string | null | undefined>,
		stalls: FormControl<string | null | undefined>,
		surface: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
		weather: FormControl<string | null | undefined>,
	}
	export function CreateRacecardFormGroup() {
		return new FormGroup<RacecardFormProperties>({
			age_band: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			big_race: new FormControl<boolean | null | undefined>(undefined),
			course: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			course_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			distance: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			distance_f: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			distance_round: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			field_size: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			going: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			going_detailed: new FormControl<string | null | undefined>(undefined),
			is_abandoned: new FormControl<boolean | null | undefined>(undefined),
			off_dt: new FormControl<string | null | undefined>(undefined),
			off_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pattern: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			prize: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			race_class: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			race_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			race_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rail_movements: new FormControl<string | null | undefined>(undefined),
			rating_band: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stalls: new FormControl<string | null | undefined>(undefined),
			surface: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			weather: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface App__models__racecards__Runner {
		age?: string | null;
		breeder?: string | null;
		colour?: string | null;
		comment?: string | null;

		/** Required */
		dam: string;

		/** Required */
		dam_id: string;
		dam_region?: string | null;

		/** Required */
		damsire: string;

		/** Required */
		damsire_id: string;
		damsire_region?: string | null;
		dob?: string | null;

		/** Required */
		draw: string;
		form?: string | null;
		headgear?: string | null;
		headgear_run?: string | null;

		/** Required */
		horse: string;

		/** Required */
		horse_id: string;

		/** Required */
		jockey: string;

		/** Required */
		jockey_id: string;

		/** Required */
		last_run: string;

		/** Required */
		lbs: string;
		medical?: Array<RunnerMedical>;

		/** Required */
		number: string;

		/** Required */
		ofr: string;

		/** Required */
		owner: string;

		/** Required */
		owner_id: string;
		past_results_flags?: Array<string>;
		prev_owners?: Array<RunnerPrevOwner>;
		prev_trainers?: Array<RunnerPrevTrainer>;
		quotes?: Array<RunnerQuote>;
		region?: string | null;

		/** Required */
		rpr: string;
		sex?: string | null;
		sex_code?: string | null;
		silk_url?: string | null;

		/** Required */
		sire: string;

		/** Required */
		sire_id: string;
		sire_region?: string | null;
		spotlight?: string | null;
		stable_tour?: Array<RunnerStableTour>;

		/** Required */
		trainer: string;
		trainer_14_days?: RunnerTrainer14Days;

		/** Required */
		trainer_id: string;
		trainer_location?: string | null;
		trainer_rtf?: string | null;

		/** Required */
		ts: string;
		wind_surgery?: string | null;
		wind_surgery_run?: string | null;
	}
	export interface App__models__racecards__RunnerFormProperties {
		age: FormControl<string | null | undefined>,
		breeder: FormControl<string | null | undefined>,
		colour: FormControl<string | null | undefined>,
		comment: FormControl<string | null | undefined>,

		/** Required */
		dam: FormControl<string | null | undefined>,

		/** Required */
		dam_id: FormControl<string | null | undefined>,
		dam_region: FormControl<string | null | undefined>,

		/** Required */
		damsire: FormControl<string | null | undefined>,

		/** Required */
		damsire_id: FormControl<string | null | undefined>,
		damsire_region: FormControl<string | null | undefined>,
		dob: FormControl<string | null | undefined>,

		/** Required */
		draw: FormControl<string | null | undefined>,
		form: FormControl<string | null | undefined>,
		headgear: FormControl<string | null | undefined>,
		headgear_run: FormControl<string | null | undefined>,

		/** Required */
		horse: FormControl<string | null | undefined>,

		/** Required */
		horse_id: FormControl<string | null | undefined>,

		/** Required */
		jockey: FormControl<string | null | undefined>,

		/** Required */
		jockey_id: FormControl<string | null | undefined>,

		/** Required */
		last_run: FormControl<string | null | undefined>,

		/** Required */
		lbs: FormControl<string | null | undefined>,

		/** Required */
		number: FormControl<string | null | undefined>,

		/** Required */
		ofr: FormControl<string | null | undefined>,

		/** Required */
		owner: FormControl<string | null | undefined>,

		/** Required */
		owner_id: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,

		/** Required */
		rpr: FormControl<string | null | undefined>,
		sex: FormControl<string | null | undefined>,
		sex_code: FormControl<string | null | undefined>,
		silk_url: FormControl<string | null | undefined>,

		/** Required */
		sire: FormControl<string | null | undefined>,

		/** Required */
		sire_id: FormControl<string | null | undefined>,
		sire_region: FormControl<string | null | undefined>,
		spotlight: FormControl<string | null | undefined>,

		/** Required */
		trainer: FormControl<string | null | undefined>,

		/** Required */
		trainer_id: FormControl<string | null | undefined>,
		trainer_location: FormControl<string | null | undefined>,
		trainer_rtf: FormControl<string | null | undefined>,

		/** Required */
		ts: FormControl<string | null | undefined>,
		wind_surgery: FormControl<string | null | undefined>,
		wind_surgery_run: FormControl<string | null | undefined>,
	}
	export function CreateApp__models__racecards__RunnerFormGroup() {
		return new FormGroup<App__models__racecards__RunnerFormProperties>({
			age: new FormControl<string | null | undefined>(undefined),
			breeder: new FormControl<string | null | undefined>(undefined),
			colour: new FormControl<string | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
			dam: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dam_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dam_region: new FormControl<string | null | undefined>(undefined),
			damsire: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			damsire_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			damsire_region: new FormControl<string | null | undefined>(undefined),
			dob: new FormControl<string | null | undefined>(undefined),
			draw: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			form: new FormControl<string | null | undefined>(undefined),
			headgear: new FormControl<string | null | undefined>(undefined),
			headgear_run: new FormControl<string | null | undefined>(undefined),
			horse: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			horse_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jockey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jockey_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			last_run: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lbs: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ofr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			owner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			owner_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined),
			rpr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sex: new FormControl<string | null | undefined>(undefined),
			sex_code: new FormControl<string | null | undefined>(undefined),
			silk_url: new FormControl<string | null | undefined>(undefined),
			sire: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sire_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sire_region: new FormControl<string | null | undefined>(undefined),
			spotlight: new FormControl<string | null | undefined>(undefined),
			trainer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trainer_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trainer_location: new FormControl<string | null | undefined>(undefined),
			trainer_rtf: new FormControl<string | null | undefined>(undefined),
			ts: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			wind_surgery: new FormControl<string | null | undefined>(undefined),
			wind_surgery_run: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RunnerMedical {
		date?: string | null;
		type?: string | null;
	}
	export interface RunnerMedicalFormProperties {
		date: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRunnerMedicalFormGroup() {
		return new FormGroup<RunnerMedicalFormProperties>({
			date: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RunnerPrevOwner {
		change_date?: string | null;
		owner?: string | null;
		owner_id?: string | null;
	}
	export interface RunnerPrevOwnerFormProperties {
		change_date: FormControl<string | null | undefined>,
		owner: FormControl<string | null | undefined>,
		owner_id: FormControl<string | null | undefined>,
	}
	export function CreateRunnerPrevOwnerFormGroup() {
		return new FormGroup<RunnerPrevOwnerFormProperties>({
			change_date: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			owner_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RunnerPrevTrainer {
		change_date?: string | null;
		trainer?: string | null;
		trainer_id?: string | null;
	}
	export interface RunnerPrevTrainerFormProperties {
		change_date: FormControl<string | null | undefined>,
		trainer: FormControl<string | null | undefined>,
		trainer_id: FormControl<string | null | undefined>,
	}
	export function CreateRunnerPrevTrainerFormGroup() {
		return new FormGroup<RunnerPrevTrainerFormProperties>({
			change_date: new FormControl<string | null | undefined>(undefined),
			trainer: new FormControl<string | null | undefined>(undefined),
			trainer_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RunnerQuote {
		course?: string | null;
		course_id?: string | null;
		date?: string | null;
		distance_f?: string | null;
		distance_y?: string | null;
		quote?: string | null;
		race?: string | null;
	}
	export interface RunnerQuoteFormProperties {
		course: FormControl<string | null | undefined>,
		course_id: FormControl<string | null | undefined>,
		date: FormControl<string | null | undefined>,
		distance_f: FormControl<string | null | undefined>,
		distance_y: FormControl<string | null | undefined>,
		quote: FormControl<string | null | undefined>,
		race: FormControl<string | null | undefined>,
	}
	export function CreateRunnerQuoteFormGroup() {
		return new FormGroup<RunnerQuoteFormProperties>({
			course: new FormControl<string | null | undefined>(undefined),
			course_id: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			distance_f: new FormControl<string | null | undefined>(undefined),
			distance_y: new FormControl<string | null | undefined>(undefined),
			quote: new FormControl<string | null | undefined>(undefined),
			race: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RunnerStableTour {
		quote?: string | null;
	}
	export interface RunnerStableTourFormProperties {
		quote: FormControl<string | null | undefined>,
	}
	export function CreateRunnerStableTourFormGroup() {
		return new FormGroup<RunnerStableTourFormProperties>({
			quote: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RunnerTrainer14Days {
		percent?: string | null;
		runs?: string | null;
		wins?: string | null;
	}
	export interface RunnerTrainer14DaysFormProperties {
		percent: FormControl<string | null | undefined>,
		runs: FormControl<string | null | undefined>,
		wins: FormControl<string | null | undefined>,
	}
	export function CreateRunnerTrainer14DaysFormGroup() {
		return new FormGroup<RunnerTrainer14DaysFormProperties>({
			percent: new FormControl<string | null | undefined>(undefined),
			runs: new FormControl<string | null | undefined>(undefined),
			wins: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RacecardBasic {

		/** Required */
		age_band: string;

		/** Required */
		course: string;

		/** Required */
		date: string;

		/** Required */
		distance_f: string;

		/** Required */
		field_size: string;

		/** Required */
		going: string;
		off_dt?: string | null;

		/** Required */
		off_time: string;

		/** Required */
		pattern: string;

		/** Required */
		prize: string;

		/** Required */
		race_class: string;

		/** Required */
		race_name: string;

		/** Required */
		rating_band: string;

		/** Required */
		region: string;

		/** Required */
		runners: Array<RunnerBasic>;
		surface?: string | null;

		/** Required */
		type: string;
	}
	export interface RacecardBasicFormProperties {

		/** Required */
		age_band: FormControl<string | null | undefined>,

		/** Required */
		course: FormControl<string | null | undefined>,

		/** Required */
		date: FormControl<string | null | undefined>,

		/** Required */
		distance_f: FormControl<string | null | undefined>,

		/** Required */
		field_size: FormControl<string | null | undefined>,

		/** Required */
		going: FormControl<string | null | undefined>,
		off_dt: FormControl<string | null | undefined>,

		/** Required */
		off_time: FormControl<string | null | undefined>,

		/** Required */
		pattern: FormControl<string | null | undefined>,

		/** Required */
		prize: FormControl<string | null | undefined>,

		/** Required */
		race_class: FormControl<string | null | undefined>,

		/** Required */
		race_name: FormControl<string | null | undefined>,

		/** Required */
		rating_band: FormControl<string | null | undefined>,

		/** Required */
		region: FormControl<string | null | undefined>,
		surface: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRacecardBasicFormGroup() {
		return new FormGroup<RacecardBasicFormProperties>({
			age_band: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			course: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			distance_f: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			field_size: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			going: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			off_dt: new FormControl<string | null | undefined>(undefined),
			off_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pattern: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			prize: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			race_class: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			race_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rating_band: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			surface: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RunnerBasic {

		/** Required */
		age: string;

		/** Required */
		colour: string;

		/** Required */
		dam: string;

		/** Required */
		damsire: string;

		/** Required */
		draw: string;
		form?: string | null;
		headgear?: string | null;

		/** Required */
		horse: string;

		/** Required */
		jockey: string;

		/** Required */
		last_run: string;

		/** Required */
		lbs: string;

		/** Required */
		number: string;

		/** Required */
		ofr: string;

		/** Required */
		owner: string;

		/** Required */
		region: string;
		sex?: string | null;
		sex_code?: string | null;

		/** Required */
		sire: string;

		/** Required */
		trainer: string;
	}
	export interface RunnerBasicFormProperties {

		/** Required */
		age: FormControl<string | null | undefined>,

		/** Required */
		colour: FormControl<string | null | undefined>,

		/** Required */
		dam: FormControl<string | null | undefined>,

		/** Required */
		damsire: FormControl<string | null | undefined>,

		/** Required */
		draw: FormControl<string | null | undefined>,
		form: FormControl<string | null | undefined>,
		headgear: FormControl<string | null | undefined>,

		/** Required */
		horse: FormControl<string | null | undefined>,

		/** Required */
		jockey: FormControl<string | null | undefined>,

		/** Required */
		last_run: FormControl<string | null | undefined>,

		/** Required */
		lbs: FormControl<string | null | undefined>,

		/** Required */
		number: FormControl<string | null | undefined>,

		/** Required */
		ofr: FormControl<string | null | undefined>,

		/** Required */
		owner: FormControl<string | null | undefined>,

		/** Required */
		region: FormControl<string | null | undefined>,
		sex: FormControl<string | null | undefined>,
		sex_code: FormControl<string | null | undefined>,

		/** Required */
		sire: FormControl<string | null | undefined>,

		/** Required */
		trainer: FormControl<string | null | undefined>,
	}
	export function CreateRunnerBasicFormGroup() {
		return new FormGroup<RunnerBasicFormProperties>({
			age: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			colour: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dam: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			damsire: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			draw: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			form: new FormControl<string | null | undefined>(undefined),
			headgear: new FormControl<string | null | undefined>(undefined),
			horse: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jockey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			last_run: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lbs: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ofr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			owner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sex: new FormControl<string | null | undefined>(undefined),
			sex_code: new FormControl<string | null | undefined>(undefined),
			sire: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trainer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RacecardOdds {

		/** Required */
		age_band: string;
		big_race?: boolean | null;

		/** Required */
		course: string;

		/** Required */
		course_id: string;

		/** Required */
		date: string;

		/** Required */
		distance: string;

		/** Required */
		distance_f: string;

		/** Required */
		distance_round: string;

		/** Required */
		field_size: string;

		/** Required */
		going: string;
		going_detailed?: string | null;
		is_abandoned?: boolean | null;
		jumps?: string | null;
		off_dt?: string | null;

		/** Required */
		off_time: string;

		/** Required */
		pattern: string;

		/** Required */
		prize: string;

		/** Required */
		race_class: string;

		/** Required */
		race_id: string;

		/** Required */
		race_name: string;
		rail_movements?: string | null;

		/** Required */
		rating_band: string;

		/** Required */
		region: string;

		/** Required */
		runners: Array<RunnerOdds>;
		stalls?: string | null;
		surface?: string | null;

		/** Required */
		type: string;
		weather?: string | null;
	}
	export interface RacecardOddsFormProperties {

		/** Required */
		age_band: FormControl<string | null | undefined>,
		big_race: FormControl<boolean | null | undefined>,

		/** Required */
		course: FormControl<string | null | undefined>,

		/** Required */
		course_id: FormControl<string | null | undefined>,

		/** Required */
		date: FormControl<string | null | undefined>,

		/** Required */
		distance: FormControl<string | null | undefined>,

		/** Required */
		distance_f: FormControl<string | null | undefined>,

		/** Required */
		distance_round: FormControl<string | null | undefined>,

		/** Required */
		field_size: FormControl<string | null | undefined>,

		/** Required */
		going: FormControl<string | null | undefined>,
		going_detailed: FormControl<string | null | undefined>,
		is_abandoned: FormControl<boolean | null | undefined>,
		jumps: FormControl<string | null | undefined>,
		off_dt: FormControl<string | null | undefined>,

		/** Required */
		off_time: FormControl<string | null | undefined>,

		/** Required */
		pattern: FormControl<string | null | undefined>,

		/** Required */
		prize: FormControl<string | null | undefined>,

		/** Required */
		race_class: FormControl<string | null | undefined>,

		/** Required */
		race_id: FormControl<string | null | undefined>,

		/** Required */
		race_name: FormControl<string | null | undefined>,
		rail_movements: FormControl<string | null | undefined>,

		/** Required */
		rating_band: FormControl<string | null | undefined>,

		/** Required */
		region: FormControl<string | null | undefined>,
		stalls: FormControl<string | null | undefined>,
		surface: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
		weather: FormControl<string | null | undefined>,
	}
	export function CreateRacecardOddsFormGroup() {
		return new FormGroup<RacecardOddsFormProperties>({
			age_band: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			big_race: new FormControl<boolean | null | undefined>(undefined),
			course: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			course_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			distance: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			distance_f: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			distance_round: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			field_size: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			going: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			going_detailed: new FormControl<string | null | undefined>(undefined),
			is_abandoned: new FormControl<boolean | null | undefined>(undefined),
			jumps: new FormControl<string | null | undefined>(undefined),
			off_dt: new FormControl<string | null | undefined>(undefined),
			off_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pattern: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			prize: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			race_class: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			race_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			race_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rail_movements: new FormControl<string | null | undefined>(undefined),
			rating_band: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stalls: new FormControl<string | null | undefined>(undefined),
			surface: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			weather: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RunnerOdds {
		age?: string | null;
		breeder?: string | null;
		colour?: string | null;
		comment?: string | null;

		/** Required */
		dam: string;

		/** Required */
		dam_id: string;
		dam_region?: string | null;

		/** Required */
		damsire: string;

		/** Required */
		damsire_id: string;
		damsire_region?: string | null;
		dob?: string | null;

		/** Required */
		draw: string;
		form?: string | null;
		headgear?: string | null;
		headgear_run?: string | null;

		/** Required */
		horse: string;

		/** Required */
		horse_id: string;

		/** Required */
		jockey: string;

		/** Required */
		jockey_id: string;

		/** Required */
		last_run: string;

		/** Required */
		lbs: string;
		medical?: Array<RunnerMedical>;

		/** Required */
		number: string;
		odds?: Array<string>;

		/** Required */
		ofr: string;

		/** Required */
		owner: string;

		/** Required */
		owner_id: string;
		past_results_flags?: Array<string>;
		prev_owners?: Array<RunnerPrevOwner>;
		prev_trainers?: Array<RunnerPrevTrainer>;
		quotes?: Array<RunnerQuote>;
		region?: string | null;

		/** Required */
		rpr: string;
		sex?: string | null;
		sex_code?: string | null;
		silk_url?: string | null;

		/** Required */
		sire: string;

		/** Required */
		sire_id: string;
		sire_region?: string | null;
		spotlight?: string | null;
		stable_tour?: Array<RunnerStableTour>;

		/** Required */
		trainer: string;
		trainer_14_days?: RunnerTrainer14Days;

		/** Required */
		trainer_id: string;
		trainer_location?: string | null;
		trainer_rtf?: string | null;

		/** Required */
		ts: string;
		wind_surgery?: string | null;
		wind_surgery_run?: string | null;
	}
	export interface RunnerOddsFormProperties {
		age: FormControl<string | null | undefined>,
		breeder: FormControl<string | null | undefined>,
		colour: FormControl<string | null | undefined>,
		comment: FormControl<string | null | undefined>,

		/** Required */
		dam: FormControl<string | null | undefined>,

		/** Required */
		dam_id: FormControl<string | null | undefined>,
		dam_region: FormControl<string | null | undefined>,

		/** Required */
		damsire: FormControl<string | null | undefined>,

		/** Required */
		damsire_id: FormControl<string | null | undefined>,
		damsire_region: FormControl<string | null | undefined>,
		dob: FormControl<string | null | undefined>,

		/** Required */
		draw: FormControl<string | null | undefined>,
		form: FormControl<string | null | undefined>,
		headgear: FormControl<string | null | undefined>,
		headgear_run: FormControl<string | null | undefined>,

		/** Required */
		horse: FormControl<string | null | undefined>,

		/** Required */
		horse_id: FormControl<string | null | undefined>,

		/** Required */
		jockey: FormControl<string | null | undefined>,

		/** Required */
		jockey_id: FormControl<string | null | undefined>,

		/** Required */
		last_run: FormControl<string | null | undefined>,

		/** Required */
		lbs: FormControl<string | null | undefined>,

		/** Required */
		number: FormControl<string | null | undefined>,

		/** Required */
		ofr: FormControl<string | null | undefined>,

		/** Required */
		owner: FormControl<string | null | undefined>,

		/** Required */
		owner_id: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,

		/** Required */
		rpr: FormControl<string | null | undefined>,
		sex: FormControl<string | null | undefined>,
		sex_code: FormControl<string | null | undefined>,
		silk_url: FormControl<string | null | undefined>,

		/** Required */
		sire: FormControl<string | null | undefined>,

		/** Required */
		sire_id: FormControl<string | null | undefined>,
		sire_region: FormControl<string | null | undefined>,
		spotlight: FormControl<string | null | undefined>,

		/** Required */
		trainer: FormControl<string | null | undefined>,

		/** Required */
		trainer_id: FormControl<string | null | undefined>,
		trainer_location: FormControl<string | null | undefined>,
		trainer_rtf: FormControl<string | null | undefined>,

		/** Required */
		ts: FormControl<string | null | undefined>,
		wind_surgery: FormControl<string | null | undefined>,
		wind_surgery_run: FormControl<string | null | undefined>,
	}
	export function CreateRunnerOddsFormGroup() {
		return new FormGroup<RunnerOddsFormProperties>({
			age: new FormControl<string | null | undefined>(undefined),
			breeder: new FormControl<string | null | undefined>(undefined),
			colour: new FormControl<string | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
			dam: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dam_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dam_region: new FormControl<string | null | undefined>(undefined),
			damsire: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			damsire_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			damsire_region: new FormControl<string | null | undefined>(undefined),
			dob: new FormControl<string | null | undefined>(undefined),
			draw: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			form: new FormControl<string | null | undefined>(undefined),
			headgear: new FormControl<string | null | undefined>(undefined),
			headgear_run: new FormControl<string | null | undefined>(undefined),
			horse: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			horse_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jockey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jockey_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			last_run: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lbs: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ofr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			owner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			owner_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined),
			rpr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sex: new FormControl<string | null | undefined>(undefined),
			sex_code: new FormControl<string | null | undefined>(undefined),
			silk_url: new FormControl<string | null | undefined>(undefined),
			sire: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sire_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sire_region: new FormControl<string | null | undefined>(undefined),
			spotlight: new FormControl<string | null | undefined>(undefined),
			trainer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trainer_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trainer_location: new FormControl<string | null | undefined>(undefined),
			trainer_rtf: new FormControl<string | null | undefined>(undefined),
			ts: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			wind_surgery: new FormControl<string | null | undefined>(undefined),
			wind_surgery_run: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RacecardSummary {
		big_race?: boolean | null;

		/** Required */
		course: string;

		/** Required */
		course_id: string;

		/** Required */
		date: string;

		/** Required */
		off_time: string;

		/** Required */
		race_class: string;

		/** Required */
		race_id: string;

		/** Required */
		race_name: string;

		/** Required */
		region: string;
	}
	export interface RacecardSummaryFormProperties {
		big_race: FormControl<boolean | null | undefined>,

		/** Required */
		course: FormControl<string | null | undefined>,

		/** Required */
		course_id: FormControl<string | null | undefined>,

		/** Required */
		date: FormControl<string | null | undefined>,

		/** Required */
		off_time: FormControl<string | null | undefined>,

		/** Required */
		race_class: FormControl<string | null | undefined>,

		/** Required */
		race_id: FormControl<string | null | undefined>,

		/** Required */
		race_name: FormControl<string | null | undefined>,

		/** Required */
		region: FormControl<string | null | undefined>,
	}
	export function CreateRacecardSummaryFormGroup() {
		return new FormGroup<RacecardSummaryFormProperties>({
			big_race: new FormControl<boolean | null | undefined>(undefined),
			course: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			course_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			off_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			race_class: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			race_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			race_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Racecards {

		/** Required */
		query: Array<string>;

		/** Required */
		racecards: Array<Racecard>;
	}
	export interface RacecardsFormProperties {
	}
	export function CreateRacecardsFormGroup() {
		return new FormGroup<RacecardsFormProperties>({
		});

	}

	export interface RacecardsBasic {

		/** Required */
		query: Array<string>;

		/** Required */
		racecards: Array<RacecardBasic>;
	}
	export interface RacecardsBasicFormProperties {
	}
	export function CreateRacecardsBasicFormGroup() {
		return new FormGroup<RacecardsBasicFormProperties>({
		});

	}

	export interface RacecardsOdds {

		/** Required */
		query: Array<string>;

		/** Required */
		racecards: Array<RacecardOdds>;
	}
	export interface RacecardsOddsFormProperties {
	}
	export function CreateRacecardsOddsFormGroup() {
		return new FormGroup<RacecardsOddsFormProperties>({
		});

	}

	export interface RacecardsSummary {

		/** Required */
		query: Array<string>;

		/** Required */
		racecard_summaries: Array<RacecardSummary>;
	}
	export interface RacecardsSummaryFormProperties {
	}
	export function CreateRacecardsSummaryFormGroup() {
		return new FormGroup<RacecardsSummaryFormProperties>({
		});

	}

	export interface Region {

		/** Required */
		region: string;

		/** Required */
		region_code: string;
	}
	export interface RegionFormProperties {

		/** Required */
		region: FormControl<string | null | undefined>,

		/** Required */
		region_code: FormControl<string | null | undefined>,
	}
	export function CreateRegionFormGroup() {
		return new FormGroup<RegionFormProperties>({
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Result {

		/** Required */
		age_band: string;

		/** Required */
		class: string;

		/** Required */
		course: string;

		/** Required */
		course_id: string;

		/** Required */
		date: string;

		/** Required */
		dist: string;

		/** Required */
		dist_f: string;

		/** Required */
		dist_m: string;

		/** Required */
		dist_y: string;

		/** Required */
		going: string;
		jumps?: string | null;

		/** Required */
		off: string;
		off_dt?: string | null;

		/** Required */
		pattern: string;

		/** Required */
		race_id: string;

		/** Required */
		race_name: string;

		/** Required */
		rating_band: string;

		/** Required */
		region: string;

		/** Required */
		runners: Array<App__models__result__Runner>;

		/** Required */
		sex_rest: string;

		/** Required */
		type: string;
	}
	export interface ResultFormProperties {

		/** Required */
		age_band: FormControl<string | null | undefined>,

		/** Required */
		class: FormControl<string | null | undefined>,

		/** Required */
		course: FormControl<string | null | undefined>,

		/** Required */
		course_id: FormControl<string | null | undefined>,

		/** Required */
		date: FormControl<string | null | undefined>,

		/** Required */
		dist: FormControl<string | null | undefined>,

		/** Required */
		dist_f: FormControl<string | null | undefined>,

		/** Required */
		dist_m: FormControl<string | null | undefined>,

		/** Required */
		dist_y: FormControl<string | null | undefined>,

		/** Required */
		going: FormControl<string | null | undefined>,
		jumps: FormControl<string | null | undefined>,

		/** Required */
		off: FormControl<string | null | undefined>,
		off_dt: FormControl<string | null | undefined>,

		/** Required */
		pattern: FormControl<string | null | undefined>,

		/** Required */
		race_id: FormControl<string | null | undefined>,

		/** Required */
		race_name: FormControl<string | null | undefined>,

		/** Required */
		rating_band: FormControl<string | null | undefined>,

		/** Required */
		region: FormControl<string | null | undefined>,

		/** Required */
		sex_rest: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResultFormGroup() {
		return new FormGroup<ResultFormProperties>({
			age_band: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			class: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			course: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			course_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dist: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dist_f: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dist_m: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dist_y: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			going: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jumps: new FormControl<string | null | undefined>(undefined),
			off: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			off_dt: new FormControl<string | null | undefined>(undefined),
			pattern: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			race_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			race_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rating_band: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sex_rest: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface App__models__result__Runner {

		/** Required */
		age: string;

		/** Required */
		btn: string;

		/** Required */
		comment: string;

		/** Required */
		dam: string;

		/** Required */
		dam_id: string;

		/** Required */
		damsire: string;

		/** Required */
		damsire_id: string;

		/** Required */
		draw: string;

		/** Required */
		headgear: string;

		/** Required */
		horse: string;

		/** Required */
		horse_id: string;

		/** Required */
		jockey: string;

		/** Required */
		jockey_id: string;

		/** Required */
		number: string;

		/** Required */
		or: string;

		/** Required */
		ovr_btn: string;

		/** Required */
		owner: string;

		/** Required */
		owner_id: string;

		/** Required */
		position: string;

		/** Required */
		prize: string;

		/** Required */
		rpr: string;

		/** Required */
		sex: string;
		silk_url?: string | null;

		/** Required */
		sire: string;

		/** Required */
		sire_id: string;

		/** Required */
		sp: string;

		/** Required */
		sp_dec: string;

		/** Required */
		time: string;

		/** Required */
		trainer: string;

		/** Required */
		trainer_id: string;

		/** Required */
		tsr: string;

		/** Required */
		weight: string;

		/** Required */
		weight_lbs: string;
	}
	export interface App__models__result__RunnerFormProperties {

		/** Required */
		age: FormControl<string | null | undefined>,

		/** Required */
		btn: FormControl<string | null | undefined>,

		/** Required */
		comment: FormControl<string | null | undefined>,

		/** Required */
		dam: FormControl<string | null | undefined>,

		/** Required */
		dam_id: FormControl<string | null | undefined>,

		/** Required */
		damsire: FormControl<string | null | undefined>,

		/** Required */
		damsire_id: FormControl<string | null | undefined>,

		/** Required */
		draw: FormControl<string | null | undefined>,

		/** Required */
		headgear: FormControl<string | null | undefined>,

		/** Required */
		horse: FormControl<string | null | undefined>,

		/** Required */
		horse_id: FormControl<string | null | undefined>,

		/** Required */
		jockey: FormControl<string | null | undefined>,

		/** Required */
		jockey_id: FormControl<string | null | undefined>,

		/** Required */
		number: FormControl<string | null | undefined>,

		/** Required */
		or: FormControl<string | null | undefined>,

		/** Required */
		ovr_btn: FormControl<string | null | undefined>,

		/** Required */
		owner: FormControl<string | null | undefined>,

		/** Required */
		owner_id: FormControl<string | null | undefined>,

		/** Required */
		position: FormControl<string | null | undefined>,

		/** Required */
		prize: FormControl<string | null | undefined>,

		/** Required */
		rpr: FormControl<string | null | undefined>,

		/** Required */
		sex: FormControl<string | null | undefined>,
		silk_url: FormControl<string | null | undefined>,

		/** Required */
		sire: FormControl<string | null | undefined>,

		/** Required */
		sire_id: FormControl<string | null | undefined>,

		/** Required */
		sp: FormControl<string | null | undefined>,

		/** Required */
		sp_dec: FormControl<string | null | undefined>,

		/** Required */
		time: FormControl<string | null | undefined>,

		/** Required */
		trainer: FormControl<string | null | undefined>,

		/** Required */
		trainer_id: FormControl<string | null | undefined>,

		/** Required */
		tsr: FormControl<string | null | undefined>,

		/** Required */
		weight: FormControl<string | null | undefined>,

		/** Required */
		weight_lbs: FormControl<string | null | undefined>,
	}
	export function CreateApp__models__result__RunnerFormGroup() {
		return new FormGroup<App__models__result__RunnerFormProperties>({
			age: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			btn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			comment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dam: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dam_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			damsire: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			damsire_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			draw: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			headgear: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			horse: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			horse_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jockey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jockey_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			or: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ovr_btn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			owner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			owner_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			position: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			prize: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rpr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sex: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			silk_url: new FormControl<string | null | undefined>(undefined),
			sire: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sire_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sp_dec: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trainer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trainer_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tsr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			weight: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			weight_lbs: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResultsPage {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: number;

		/** Required */
		query: Array<string>;
		results?: Array<Result>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		skip: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;
	}
	export interface ResultsPageFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		skip: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateResultsPageFormGroup() {
		return new FormGroup<ResultsPageFormProperties>({
			limit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			skip: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResultsResponse {

		/** Required */
		country: string;

		/** Required */
		date: string;

		/** Required */
		meet_id: string;
		races?: Array<App__models__na_results__RaceResponse>;

		/** Required */
		track_id: string;

		/** Required */
		track_name: string;
		weather?: App__models__na_results__WeatherResponse;
	}
	export interface ResultsResponseFormProperties {

		/** Required */
		country: FormControl<string | null | undefined>,

		/** Required */
		date: FormControl<string | null | undefined>,

		/** Required */
		meet_id: FormControl<string | null | undefined>,

		/** Required */
		track_id: FormControl<string | null | undefined>,

		/** Required */
		track_name: FormControl<string | null | undefined>,
	}
	export function CreateResultsResponseFormGroup() {
		return new FormGroup<ResultsResponseFormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			meet_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			track_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			track_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface App__models__na_results__RaceResponse {
		age_restriction?: string | null;
		age_restriction_description?: string | null;
		also_ran?: string;
		breed?: string | null;
		distance_description?: string | null;
		distance_unit?: string | null;
		distance_value?: number | null;
		fraction?: FractionResponse;
		grade?: string | null;
		maximum_claim_price?: string | null;
		minimum_claim_price?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		off_time?: number | null;
		payoffs?: Array<PayoffResponse>;
		post_time?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		post_time_long?: number | null;
		race_class?: string | null;
		race_key?: App__models__na_results__RaceKeyResponse;
		race_name?: string | null;
		race_restriction?: string | null;
		race_restriction_description?: string | null;
		race_type?: string | null;
		race_type_description?: string | null;
		runners?: Array<App__models__na_results__RunnerResponse>;
		scratches?: Array<string>;
		sex_restriction?: string | null;
		sex_restriction_description?: string | null;
		surface?: string | null;
		surface_description?: string | null;
		time_zone?: string | null;
		total_purse?: string | null;
		track_condition_description?: string | null;
		track_name?: string | null;
		wager_types?: Array<WagerTypeResponse>;
	}
	export interface App__models__na_results__RaceResponseFormProperties {
		age_restriction: FormControl<string | null | undefined>,
		age_restriction_description: FormControl<string | null | undefined>,
		also_ran: FormControl<string | null | undefined>,
		breed: FormControl<string | null | undefined>,
		distance_description: FormControl<string | null | undefined>,
		distance_unit: FormControl<string | null | undefined>,
		distance_value: FormControl<number | null | undefined>,
		grade: FormControl<string | null | undefined>,
		maximum_claim_price: FormControl<string | null | undefined>,
		minimum_claim_price: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		off_time: FormControl<number | null | undefined>,
		post_time: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		post_time_long: FormControl<number | null | undefined>,
		race_class: FormControl<string | null | undefined>,
		race_name: FormControl<string | null | undefined>,
		race_restriction: FormControl<string | null | undefined>,
		race_restriction_description: FormControl<string | null | undefined>,
		race_type: FormControl<string | null | undefined>,
		race_type_description: FormControl<string | null | undefined>,
		sex_restriction: FormControl<string | null | undefined>,
		sex_restriction_description: FormControl<string | null | undefined>,
		surface: FormControl<string | null | undefined>,
		surface_description: FormControl<string | null | undefined>,
		time_zone: FormControl<string | null | undefined>,
		total_purse: FormControl<string | null | undefined>,
		track_condition_description: FormControl<string | null | undefined>,
		track_name: FormControl<string | null | undefined>,
	}
	export function CreateApp__models__na_results__RaceResponseFormGroup() {
		return new FormGroup<App__models__na_results__RaceResponseFormProperties>({
			age_restriction: new FormControl<string | null | undefined>(undefined),
			age_restriction_description: new FormControl<string | null | undefined>(undefined),
			also_ran: new FormControl<string | null | undefined>(undefined),
			breed: new FormControl<string | null | undefined>(undefined),
			distance_description: new FormControl<string | null | undefined>(undefined),
			distance_unit: new FormControl<string | null | undefined>(undefined),
			distance_value: new FormControl<number | null | undefined>(undefined),
			grade: new FormControl<string | null | undefined>(undefined),
			maximum_claim_price: new FormControl<string | null | undefined>(undefined),
			minimum_claim_price: new FormControl<string | null | undefined>(undefined),
			off_time: new FormControl<number | null | undefined>(undefined),
			post_time: new FormControl<string | null | undefined>(undefined),
			post_time_long: new FormControl<number | null | undefined>(undefined),
			race_class: new FormControl<string | null | undefined>(undefined),
			race_name: new FormControl<string | null | undefined>(undefined),
			race_restriction: new FormControl<string | null | undefined>(undefined),
			race_restriction_description: new FormControl<string | null | undefined>(undefined),
			race_type: new FormControl<string | null | undefined>(undefined),
			race_type_description: new FormControl<string | null | undefined>(undefined),
			sex_restriction: new FormControl<string | null | undefined>(undefined),
			sex_restriction_description: new FormControl<string | null | undefined>(undefined),
			surface: new FormControl<string | null | undefined>(undefined),
			surface_description: new FormControl<string | null | undefined>(undefined),
			time_zone: new FormControl<string | null | undefined>(undefined),
			total_purse: new FormControl<string | null | undefined>(undefined),
			track_condition_description: new FormControl<string | null | undefined>(undefined),
			track_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface App__models__na_results__RaceKeyResponse {
		day_evening?: string | null;
		race_number?: string | null;
	}
	export interface App__models__na_results__RaceKeyResponseFormProperties {
		day_evening: FormControl<string | null | undefined>,
		race_number: FormControl<string | null | undefined>,
	}
	export function CreateApp__models__na_results__RaceKeyResponseFormGroup() {
		return new FormGroup<App__models__na_results__RaceKeyResponseFormProperties>({
			day_evening: new FormControl<string | null | undefined>(undefined),
			race_number: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface App__models__na_results__RunnerResponse {
		breeder_name?: string | null;
		horse_name?: string | null;
		jockey_first_name?: string | null;
		jockey_first_name_initial?: string | null;
		jockey_last_name?: string | null;
		owner_first_name?: string | null;
		owner_last_name?: string | null;

		/** Type: double */
		place_payoff?: number | null;
		program_number?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		program_number_stripped?: number | null;

		/** Type: double */
		show_payoff?: number | null;
		sire_name?: string | null;
		trainer_first_name?: string | null;
		trainer_last_name?: string | null;
		weight_carried?: string | null;

		/** Type: double */
		win_payoff?: number | null;
	}
	export interface App__models__na_results__RunnerResponseFormProperties {
		breeder_name: FormControl<string | null | undefined>,
		horse_name: FormControl<string | null | undefined>,
		jockey_first_name: FormControl<string | null | undefined>,
		jockey_first_name_initial: FormControl<string | null | undefined>,
		jockey_last_name: FormControl<string | null | undefined>,
		owner_first_name: FormControl<string | null | undefined>,
		owner_last_name: FormControl<string | null | undefined>,

		/** Type: double */
		place_payoff: FormControl<number | null | undefined>,
		program_number: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		program_number_stripped: FormControl<number | null | undefined>,

		/** Type: double */
		show_payoff: FormControl<number | null | undefined>,
		sire_name: FormControl<string | null | undefined>,
		trainer_first_name: FormControl<string | null | undefined>,
		trainer_last_name: FormControl<string | null | undefined>,
		weight_carried: FormControl<string | null | undefined>,

		/** Type: double */
		win_payoff: FormControl<number | null | undefined>,
	}
	export function CreateApp__models__na_results__RunnerResponseFormGroup() {
		return new FormGroup<App__models__na_results__RunnerResponseFormProperties>({
			breeder_name: new FormControl<string | null | undefined>(undefined),
			horse_name: new FormControl<string | null | undefined>(undefined),
			jockey_first_name: new FormControl<string | null | undefined>(undefined),
			jockey_first_name_initial: new FormControl<string | null | undefined>(undefined),
			jockey_last_name: new FormControl<string | null | undefined>(undefined),
			owner_first_name: new FormControl<string | null | undefined>(undefined),
			owner_last_name: new FormControl<string | null | undefined>(undefined),
			place_payoff: new FormControl<number | null | undefined>(undefined),
			program_number: new FormControl<string | null | undefined>(undefined),
			program_number_stripped: new FormControl<number | null | undefined>(undefined),
			show_payoff: new FormControl<number | null | undefined>(undefined),
			sire_name: new FormControl<string | null | undefined>(undefined),
			trainer_first_name: new FormControl<string | null | undefined>(undefined),
			trainer_last_name: new FormControl<string | null | undefined>(undefined),
			weight_carried: new FormControl<string | null | undefined>(undefined),
			win_payoff: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface WagerTypeResponse {
		base_amount?: string | null;
		wager_description?: string | null;
		wager_type?: string | null;
	}
	export interface WagerTypeResponseFormProperties {
		base_amount: FormControl<string | null | undefined>,
		wager_description: FormControl<string | null | undefined>,
		wager_type: FormControl<string | null | undefined>,
	}
	export function CreateWagerTypeResponseFormGroup() {
		return new FormGroup<WagerTypeResponseFormProperties>({
			base_amount: new FormControl<string | null | undefined>(undefined),
			wager_description: new FormControl<string | null | undefined>(undefined),
			wager_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface App__models__na_results__WeatherResponse {
		current_temperature?: string | null;
		current_weather_description?: string | null;
		date?: string | null;
		forecast_high?: number | null;
		forecast_low?: number | null;
		forecast_precipitation?: number | null;
		forecast_weather_description?: string | null;
	}
	export interface App__models__na_results__WeatherResponseFormProperties {
		current_temperature: FormControl<string | null | undefined>,
		current_weather_description: FormControl<string | null | undefined>,
		date: FormControl<string | null | undefined>,
		forecast_high: FormControl<number | null | undefined>,
		forecast_low: FormControl<number | null | undefined>,
		forecast_precipitation: FormControl<number | null | undefined>,
		forecast_weather_description: FormControl<string | null | undefined>,
	}
	export function CreateApp__models__na_results__WeatherResponseFormGroup() {
		return new FormGroup<App__models__na_results__WeatherResponseFormProperties>({
			current_temperature: new FormControl<string | null | undefined>(undefined),
			current_weather_description: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			forecast_high: new FormControl<number | null | undefined>(undefined),
			forecast_low: new FormControl<number | null | undefined>(undefined),
			forecast_precipitation: new FormControl<number | null | undefined>(undefined),
			forecast_weather_description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Sire {

		/** Required */
		id: string;
		sire?: string | null;
	}
	export interface SireFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
		sire: FormControl<string | null | undefined>,
	}
	export function CreateSireFormGroup() {
		return new FormGroup<SireFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sire: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SireClassAnalysis {

		/** Required */
		classes: Array<App__models__sires__Class>;

		/** Required */
		id: string;

		/** Required */
		query: Array<string>;

		/** Required */
		sire: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_runners: number;
	}
	export interface SireClassAnalysisFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		sire: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_runners: FormControl<number | null | undefined>,
	}
	export function CreateSireClassAnalysisFormGroup() {
		return new FormGroup<SireClassAnalysisFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sire: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_runners: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface App__models__sires__Class {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': number;

		/**
		 * Required
		 * Type: double
		 */
		'a/e': number;

		/** Required */
		class: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		runners: number;

		/**
		 * Required
		 * Type: double
		 */
		'win_%': number;
	}
	export interface App__models__sires__ClassFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'a/e': FormControl<number | null | undefined>,

		/** Required */
		class: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		runners: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'win_%': FormControl<number | null | undefined>,
	}
	export function CreateApp__models__sires__ClassFormGroup() {
		return new FormGroup<App__models__sires__ClassFormProperties>({
			'1_pl': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'1st': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'2nd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'3rd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'4th': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'a/e': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			class: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			runners: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'win_%': new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SireDistanceAnalysis {

		/** Required */
		distances: Array<App__models__sires__Distance>;

		/** Required */
		id: string;

		/** Required */
		query: Array<string>;

		/** Required */
		sire: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_runners: number;
	}
	export interface SireDistanceAnalysisFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		sire: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_runners: FormControl<number | null | undefined>,
	}
	export function CreateSireDistanceAnalysisFormGroup() {
		return new FormGroup<SireDistanceAnalysisFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sire: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_runners: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface App__models__sires__Distance {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': number;

		/**
		 * Required
		 * Type: double
		 */
		'a/e': number;

		/** Required */
		dist: string;

		/** Required */
		dist_f: string;

		/** Required */
		dist_m: string;

		/** Required */
		dist_y: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		runners: number;

		/**
		 * Required
		 * Type: double
		 */
		'win_%': number;
	}
	export interface App__models__sires__DistanceFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'a/e': FormControl<number | null | undefined>,

		/** Required */
		dist: FormControl<string | null | undefined>,

		/** Required */
		dist_f: FormControl<string | null | undefined>,

		/** Required */
		dist_m: FormControl<string | null | undefined>,

		/** Required */
		dist_y: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		runners: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'win_%': FormControl<number | null | undefined>,
	}
	export function CreateApp__models__sires__DistanceFormGroup() {
		return new FormGroup<App__models__sires__DistanceFormProperties>({
			'1_pl': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'1st': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'2nd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'3rd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'4th': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'a/e': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			dist: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dist_f: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dist_m: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dist_y: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			runners: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'win_%': new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Sires {

		/** Required */
		search_results: Array<Sire>;
	}
	export interface SiresFormProperties {
	}
	export function CreateSiresFormGroup() {
		return new FormGroup<SiresFormProperties>({
		});

	}

	export interface TrainerCourseAnalysis {

		/** Required */
		courses: Array<App__models__trainers__Course>;

		/** Required */
		id: string;

		/** Required */
		query: Array<string>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_runners: number;

		/** Required */
		trainer: string;
	}
	export interface TrainerCourseAnalysisFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_runners: FormControl<number | null | undefined>,

		/** Required */
		trainer: FormControl<string | null | undefined>,
	}
	export function CreateTrainerCourseAnalysisFormGroup() {
		return new FormGroup<TrainerCourseAnalysisFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_runners: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			trainer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface App__models__trainers__Course {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': number;

		/**
		 * Required
		 * Type: double
		 */
		'a/e': number;

		/** Required */
		course: string;

		/** Required */
		region: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		runners: number;

		/**
		 * Required
		 * Type: double
		 */
		'win_%': number;
	}
	export interface App__models__trainers__CourseFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'a/e': FormControl<number | null | undefined>,

		/** Required */
		course: FormControl<string | null | undefined>,

		/** Required */
		region: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		runners: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'win_%': FormControl<number | null | undefined>,
	}
	export function CreateApp__models__trainers__CourseFormGroup() {
		return new FormGroup<App__models__trainers__CourseFormProperties>({
			'1_pl': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'1st': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'2nd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'3rd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'4th': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'a/e': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			course: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			runners: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'win_%': new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TrainerDistanceAnalysis {

		/** Required */
		distances: Array<App__models__trainers__Distance>;

		/** Required */
		id: string;

		/** Required */
		query: Array<string>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_runners: number;

		/** Required */
		trainer: string;
	}
	export interface TrainerDistanceAnalysisFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_runners: FormControl<number | null | undefined>,

		/** Required */
		trainer: FormControl<string | null | undefined>,
	}
	export function CreateTrainerDistanceAnalysisFormGroup() {
		return new FormGroup<TrainerDistanceAnalysisFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_runners: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			trainer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface App__models__trainers__Distance {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': number;

		/**
		 * Required
		 * Type: double
		 */
		'a/e': number;

		/** Required */
		dist: string;

		/** Required */
		dist_f: string;

		/** Required */
		dist_m: string;

		/** Required */
		dist_y: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		runners: number;

		/**
		 * Required
		 * Type: double
		 */
		'win_%': number;
	}
	export interface App__models__trainers__DistanceFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'a/e': FormControl<number | null | undefined>,

		/** Required */
		dist: FormControl<string | null | undefined>,

		/** Required */
		dist_f: FormControl<string | null | undefined>,

		/** Required */
		dist_m: FormControl<string | null | undefined>,

		/** Required */
		dist_y: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		runners: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'win_%': FormControl<number | null | undefined>,
	}
	export function CreateApp__models__trainers__DistanceFormGroup() {
		return new FormGroup<App__models__trainers__DistanceFormProperties>({
			'1_pl': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'1st': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'2nd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'3rd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'4th': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'a/e': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			dist: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dist_f: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dist_m: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dist_y: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			runners: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'win_%': new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TrainerHorseAgeAnalysis {

		/** Required */
		horse_ages: Array<HorseAges>;

		/** Required */
		id: string;

		/** Required */
		query: Array<string>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_runners: number;

		/** Required */
		trainer: string;
	}
	export interface TrainerHorseAgeAnalysisFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_runners: FormControl<number | null | undefined>,

		/** Required */
		trainer: FormControl<string | null | undefined>,
	}
	export function CreateTrainerHorseAgeAnalysisFormGroup() {
		return new FormGroup<TrainerHorseAgeAnalysisFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_runners: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			trainer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TrainerJockeyAnalysis {

		/** Required */
		id: string;

		/** Required */
		jockeys: Array<App__models__trainers__Jockey>;

		/** Required */
		query: Array<string>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_runners: number;

		/** Required */
		trainer: string;
	}
	export interface TrainerJockeyAnalysisFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_runners: FormControl<number | null | undefined>,

		/** Required */
		trainer: FormControl<string | null | undefined>,
	}
	export function CreateTrainerJockeyAnalysisFormGroup() {
		return new FormGroup<TrainerJockeyAnalysisFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_runners: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			trainer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface App__models__trainers__Jockey {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': number;

		/**
		 * Required
		 * Type: double
		 */
		'a/e': number;

		/** Required */
		jockey: string;

		/** Required */
		jockey_id: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		runners: number;

		/**
		 * Required
		 * Type: double
		 */
		'win_%': number;
	}
	export interface App__models__trainers__JockeyFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'a/e': FormControl<number | null | undefined>,

		/** Required */
		jockey: FormControl<string | null | undefined>,

		/** Required */
		jockey_id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		runners: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'win_%': FormControl<number | null | undefined>,
	}
	export function CreateApp__models__trainers__JockeyFormGroup() {
		return new FormGroup<App__models__trainers__JockeyFormProperties>({
			'1_pl': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'1st': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'2nd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'3rd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'4th': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'a/e': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			jockey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jockey_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			runners: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'win_%': new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TrainerOwnerAnalysis {

		/** Required */
		id: string;

		/** Required */
		owners: Array<App__models__trainers__Owner>;

		/** Required */
		query: Array<string>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_runners: number;

		/** Required */
		trainer: string;
	}
	export interface TrainerOwnerAnalysisFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_runners: FormControl<number | null | undefined>,

		/** Required */
		trainer: FormControl<string | null | undefined>,
	}
	export function CreateTrainerOwnerAnalysisFormGroup() {
		return new FormGroup<TrainerOwnerAnalysisFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_runners: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			trainer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface App__models__trainers__Owner {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': number;

		/**
		 * Required
		 * Type: double
		 */
		'a/e': number;

		/** Required */
		owner: string;

		/** Required */
		owner_id: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		runners: number;

		/**
		 * Required
		 * Type: double
		 */
		'win_%': number;
	}
	export interface App__models__trainers__OwnerFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		'1_pl': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'1st': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'2nd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'3rd': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4th': FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'a/e': FormControl<number | null | undefined>,

		/** Required */
		owner: FormControl<string | null | undefined>,

		/** Required */
		owner_id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		runners: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		'win_%': FormControl<number | null | undefined>,
	}
	export function CreateApp__models__trainers__OwnerFormGroup() {
		return new FormGroup<App__models__trainers__OwnerFormProperties>({
			'1_pl': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'1st': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'2nd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'3rd': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'4th': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'a/e': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			owner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			owner_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			runners: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'win_%': new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Trainers {

		/** Required */
		search_results: Array<App__models__trainers__Trainer>;
	}
	export interface TrainersFormProperties {
	}
	export function CreateTrainersFormGroup() {
		return new FormGroup<TrainersFormProperties>({
		});

	}

	export interface App__models__trainers__Trainer {

		/** Required */
		id: string;
		trainer?: string | null;
	}
	export interface App__models__trainers__TrainerFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
		trainer: FormControl<string | null | undefined>,
	}
	export function CreateApp__models__trainers__TrainerFormGroup() {
		return new FormGroup<App__models__trainers__TrainerFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trainer: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List Courses
		 * List courses (FREE PLAN)
		 * Get v1/courses
		 * @param {Array<string>} region_codes Filter courses by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.
		 * @return {CoursesPage} Successful Response
		 */
		List_courses_v1_courses_get(region_codes: Array<string> | null | undefined): Observable<CoursesPage> {
			return this.http.get<CoursesPage>(this.baseUri + 'v1/courses?' + region_codes?.map(z => `region_codes=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * List Regions
		 * List regions (FREE PLAN)
		 * Get v1/courses/regions
		 * @return {Array<Region>} Successful Response
		 */
		List_regions_v1_courses_regions_get(): Observable<Array<Region>> {
			return this.http.get<Array<Region>>(this.baseUri + 'v1/courses/regions', {});
		}

		/**
		 * Search Dams
		 * Search dams by name (STANDARD PLAN)
		 * Get v1/dams/search
		 * @return {Dams} Successful Response
		 */
		Search_dams_v1_dams_search_get(name: string): Observable<Dams> {
			return this.http.get<Dams>(this.baseUri + 'v1/dams/search?name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Dam Class Analysis
		 * <p>Offspring class statistics for dam (STANDARD PLAN).</p><p>For dam results and statistics, use the <a href='https://api.theracingapi.com/documentation#tag/Horses'>horses endpoints</a>, replacing the 'dam_' dam id prefix with 'hrs_'.</p>
		 * Get v1/dams/{dam_id}/analysis/classes
		 * @param {string} start_date <p>Query from date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {string} end_date <p>Query to date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {Array<string>} region <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @param {Array<string>} type <p>Query by race type:</p><p>chase, flat, hurdle, nh_flat</p>
		 * @param {Array<string>} going <p>Query by going:</p><p>fast, firm, good, good_to_firm, good_to_soft, good_to_yielding, hard, heavy, holding, muddy, sloppy, slow, soft, soft_to_heavy, standard, standard_to_fast, standard_to_slow, very_soft, yielding, yielding_to_soft</p>
		 * @param {Array<string>} race_class <p>Query by class:</p><p>class_1, class_2, class_3, class_4, class_5, class_6, class_7</p>
		 * @param {number} min_distance_y <p>Query by minimum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} max_distance_y <p>Query by maximum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} age_band <p>Query by age band:</p><p>10yo+, 2-3yo, 2yo, 2yo+, 3-4yo, 3-5yo, 3-6yo, 3yo, 3yo+, 4-5yo, 4-6yo, 4-7yo, 4-8yo, 4yo, 4yo+, 5-6yo, 5-7yo, 5-8yo, 5yo, 5yo+, 6-7yo, 6yo, 6yo+, 7yo+, 8yo+, 9yo+</p>
		 * @param {Array<string>} sex_restriction <p>Query by sex restriction:</p><p>c&f, c&g, f, f&m, m, m&g</p>
		 * @return {DamClassAnalysis} Successful Response
		 */
		Dam_class_analysis_v1_dams__dam_id__analysis_classes_get(dam_id: string, start_date: string | null | undefined, end_date: string | null | undefined, region: Array<string> | null | undefined, course: Array<string> | null | undefined, type: Array<string> | null | undefined, going: Array<string> | null | undefined, race_class: Array<string> | null | undefined, min_distance_y: number | null | undefined, max_distance_y: number | null | undefined, age_band: Array<string> | null | undefined, sex_restriction: Array<string> | null | undefined): Observable<DamClassAnalysis> {
			return this.http.get<DamClassAnalysis>(this.baseUri + 'v1/dams/' + (dam_id == null ? '' : encodeURIComponent(dam_id)) + '/analysis/classes&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&' + region?.map(z => `region=${encodeURIComponent(z)}`).join('&') + '&' + course?.map(z => `course=${encodeURIComponent(z)}`).join('&') + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&' + going?.map(z => `going=${encodeURIComponent(z)}`).join('&') + '&' + race_class?.map(z => `race_class=${encodeURIComponent(z)}`).join('&') + '&min_distance_y=' + min_distance_y + '&max_distance_y=' + max_distance_y + '&' + age_band?.map(z => `age_band=${encodeURIComponent(z)}`).join('&') + '&' + sex_restriction?.map(z => `sex_restriction=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Dam Distance Analysis
		 * <p>Offspring distance statistics for dam (STANDARD PLAN). .</p><p>For dam results and statistics, use the <a href='https://api.theracingapi.com/documentation#tag/Horses'>horses endpoints</a>, replacing the 'dam_' dam id prefix with 'hrs_'.</p>
		 * Get v1/dams/{dam_id}/analysis/distances
		 * @param {string} start_date <p>Query from date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {string} end_date <p>Query to date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {Array<string>} region <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @param {Array<string>} type <p>Query by race type:</p><p>chase, flat, hurdle, nh_flat</p>
		 * @param {Array<string>} going <p>Query by going:</p><p>fast, firm, good, good_to_firm, good_to_soft, good_to_yielding, hard, heavy, holding, muddy, sloppy, slow, soft, soft_to_heavy, standard, standard_to_fast, standard_to_slow, very_soft, yielding, yielding_to_soft</p>
		 * @param {Array<string>} race_class <p>Query by class:</p><p>class_1, class_2, class_3, class_4, class_5, class_6, class_7</p>
		 * @param {number} min_distance_y <p>Query by minimum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} max_distance_y <p>Query by maximum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} age_band <p>Query by age band:</p><p>10yo+, 2-3yo, 2yo, 2yo+, 3-4yo, 3-5yo, 3-6yo, 3yo, 3yo+, 4-5yo, 4-6yo, 4-7yo, 4-8yo, 4yo, 4yo+, 5-6yo, 5-7yo, 5-8yo, 5yo, 5yo+, 6-7yo, 6yo, 6yo+, 7yo+, 8yo+, 9yo+</p>
		 * @param {Array<string>} sex_restriction <p>Query by sex restriction:</p><p>c&f, c&g, f, f&m, m, m&g</p>
		 * @return {DamDistanceAnalysis} Successful Response
		 */
		Dam_distance_analysis_v1_dams__dam_id__analysis_distances_get(dam_id: string, start_date: string | null | undefined, end_date: string | null | undefined, region: Array<string> | null | undefined, course: Array<string> | null | undefined, type: Array<string> | null | undefined, going: Array<string> | null | undefined, race_class: Array<string> | null | undefined, min_distance_y: number | null | undefined, max_distance_y: number | null | undefined, age_band: Array<string> | null | undefined, sex_restriction: Array<string> | null | undefined): Observable<DamDistanceAnalysis> {
			return this.http.get<DamDistanceAnalysis>(this.baseUri + 'v1/dams/' + (dam_id == null ? '' : encodeURIComponent(dam_id)) + '/analysis/distances&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&' + region?.map(z => `region=${encodeURIComponent(z)}`).join('&') + '&' + course?.map(z => `course=${encodeURIComponent(z)}`).join('&') + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&' + going?.map(z => `going=${encodeURIComponent(z)}`).join('&') + '&' + race_class?.map(z => `race_class=${encodeURIComponent(z)}`).join('&') + '&min_distance_y=' + min_distance_y + '&max_distance_y=' + max_distance_y + '&' + age_band?.map(z => `age_band=${encodeURIComponent(z)}`).join('&') + '&' + sex_restriction?.map(z => `sex_restriction=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Dam Results
		 * <p>Full historic results for dam offspring (PRO PLAN).</p><p>For dam results and statistics, use the <a href='https://api.theracingapi.com/documentation#tag/Horses'>horses endpoints</a>, replacing the 'dam_' dam id prefix with 'hrs_'.</p>
		 * Get v1/dams/{dam_id}/results
		 * @param {string} start_date <p>Query from date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {string} end_date <p>Query to date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {Array<string>} region <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @param {Array<string>} type <p>Query by race type:</p><p>chase, flat, hurdle, nh_flat</p>
		 * @param {Array<string>} going <p>Query by going:</p><p>fast, firm, good, good_to_firm, good_to_soft, good_to_yielding, hard, heavy, holding, muddy, sloppy, slow, soft, soft_to_heavy, standard, standard_to_fast, standard_to_slow, very_soft, yielding, yielding_to_soft</p>
		 * @param {Array<string>} race_class <p>Query by class:</p><p>class_1, class_2, class_3, class_4, class_5, class_6, class_7</p>
		 * @param {number} min_distance_y <p>Query by minimum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} max_distance_y <p>Query by maximum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} age_band <p>Query by age band:</p><p>10yo+, 2-3yo, 2yo, 2yo+, 3-4yo, 3-5yo, 3-6yo, 3yo, 3yo+, 4-5yo, 4-6yo, 4-7yo, 4-8yo, 4yo, 4yo+, 5-6yo, 5-7yo, 5-8yo, 5yo, 5yo+, 6-7yo, 6yo, 6yo+, 7yo+, 8yo+, 9yo+</p>
		 * @param {Array<string>} sex_restriction <p>Query by sex restriction:</p><p>c&f, c&g, f, f&m, m, m&g</p>
		 * @param {number} limit Minimum: 1
		 *     Maximum: 50
		 * @param {number} skip Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ResultsPage} Successful Response
		 */
		Dam_results_v1_dams__dam_id__results_get(dam_id: string, start_date: string | null | undefined, end_date: string | null | undefined, region: Array<string> | null | undefined, course: Array<string> | null | undefined, type: Array<string> | null | undefined, going: Array<string> | null | undefined, race_class: Array<string> | null | undefined, min_distance_y: number | null | undefined, max_distance_y: number | null | undefined, age_band: Array<string> | null | undefined, sex_restriction: Array<string> | null | undefined, limit: number | null | undefined, skip: number | null | undefined): Observable<ResultsPage> {
			return this.http.get<ResultsPage>(this.baseUri + 'v1/dams/' + (dam_id == null ? '' : encodeURIComponent(dam_id)) + '/results&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&' + region?.map(z => `region=${encodeURIComponent(z)}`).join('&') + '&' + course?.map(z => `course=${encodeURIComponent(z)}`).join('&') + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&' + going?.map(z => `going=${encodeURIComponent(z)}`).join('&') + '&' + race_class?.map(z => `race_class=${encodeURIComponent(z)}`).join('&') + '&min_distance_y=' + min_distance_y + '&max_distance_y=' + max_distance_y + '&' + age_band?.map(z => `age_band=${encodeURIComponent(z)}`).join('&') + '&' + sex_restriction?.map(z => `sex_restriction=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&skip=' + skip, {});
		}

		/**
		 * Search Damsires
		 * Search damsires by name (STANDARD PLAN)
		 * Get v1/damsires/search
		 * @return {Damsires} Successful Response
		 */
		Search_damsires_v1_damsires_search_get(name: string): Observable<Damsires> {
			return this.http.get<Damsires>(this.baseUri + 'v1/damsires/search?name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Damsire Class Analysis
		 * <p>Grandoffspring class statistics for damsire (STANDARD PLAN).</p><p>For damsire results and statistics, use the <a href='https://api.theracingapi.com/documentation#tag/Horses'>horses endpoints</a>, replacing the 'dsi_' damsire id prefix with 'hrs_'.</p>
		 * Get v1/damsires/{damsire_id}/analysis/classes
		 * @param {string} start_date <p>Query from date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {string} end_date <p>Query to date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {Array<string>} region <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @param {Array<string>} type <p>Query by race type:</p><p>chase, flat, hurdle, nh_flat</p>
		 * @param {Array<string>} going <p>Query by going:</p><p>fast, firm, good, good_to_firm, good_to_soft, good_to_yielding, hard, heavy, holding, muddy, sloppy, slow, soft, soft_to_heavy, standard, standard_to_fast, standard_to_slow, very_soft, yielding, yielding_to_soft</p>
		 * @param {Array<string>} race_class <p>Query by class:</p><p>class_1, class_2, class_3, class_4, class_5, class_6, class_7</p>
		 * @param {number} min_distance_y <p>Query by minimum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} max_distance_y <p>Query by maximum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} age_band <p>Query by age band:</p><p>10yo+, 2-3yo, 2yo, 2yo+, 3-4yo, 3-5yo, 3-6yo, 3yo, 3yo+, 4-5yo, 4-6yo, 4-7yo, 4-8yo, 4yo, 4yo+, 5-6yo, 5-7yo, 5-8yo, 5yo, 5yo+, 6-7yo, 6yo, 6yo+, 7yo+, 8yo+, 9yo+</p>
		 * @param {Array<string>} sex_restriction <p>Query by sex restriction:</p><p>c&f, c&g, f, f&m, m, m&g</p>
		 * @return {DamsireClassAnalysis} Successful Response
		 */
		Damsire_class_analysis_v1_damsires__damsire_id__analysis_classes_get(damsire_id: string, start_date: string | null | undefined, end_date: string | null | undefined, region: Array<string> | null | undefined, course: Array<string> | null | undefined, type: Array<string> | null | undefined, going: Array<string> | null | undefined, race_class: Array<string> | null | undefined, min_distance_y: number | null | undefined, max_distance_y: number | null | undefined, age_band: Array<string> | null | undefined, sex_restriction: Array<string> | null | undefined): Observable<DamsireClassAnalysis> {
			return this.http.get<DamsireClassAnalysis>(this.baseUri + 'v1/damsires/' + (damsire_id == null ? '' : encodeURIComponent(damsire_id)) + '/analysis/classes&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&' + region?.map(z => `region=${encodeURIComponent(z)}`).join('&') + '&' + course?.map(z => `course=${encodeURIComponent(z)}`).join('&') + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&' + going?.map(z => `going=${encodeURIComponent(z)}`).join('&') + '&' + race_class?.map(z => `race_class=${encodeURIComponent(z)}`).join('&') + '&min_distance_y=' + min_distance_y + '&max_distance_y=' + max_distance_y + '&' + age_band?.map(z => `age_band=${encodeURIComponent(z)}`).join('&') + '&' + sex_restriction?.map(z => `sex_restriction=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Damsire Distance Analysis
		 * <p>Grandoffspring distance statistics for damsire (STANDARD PLAN).</p><p>For damsire results and statistics, use the <a href='https://api.theracingapi.com/documentation#tag/Horses'>horses endpoints</a>, replacing the 'dsi_' damsire id prefix with 'hrs_'.</p>
		 * Get v1/damsires/{damsire_id}/analysis/distances
		 * @param {string} start_date <p>Query from date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {string} end_date <p>Query to date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {Array<string>} region <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @param {Array<string>} type <p>Query by race type:</p><p>chase, flat, hurdle, nh_flat</p>
		 * @param {Array<string>} going <p>Query by going:</p><p>fast, firm, good, good_to_firm, good_to_soft, good_to_yielding, hard, heavy, holding, muddy, sloppy, slow, soft, soft_to_heavy, standard, standard_to_fast, standard_to_slow, very_soft, yielding, yielding_to_soft</p>
		 * @param {Array<string>} race_class <p>Query by class:</p><p>class_1, class_2, class_3, class_4, class_5, class_6, class_7</p>
		 * @param {number} min_distance_y <p>Query by minimum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} max_distance_y <p>Query by maximum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} age_band <p>Query by age band:</p><p>10yo+, 2-3yo, 2yo, 2yo+, 3-4yo, 3-5yo, 3-6yo, 3yo, 3yo+, 4-5yo, 4-6yo, 4-7yo, 4-8yo, 4yo, 4yo+, 5-6yo, 5-7yo, 5-8yo, 5yo, 5yo+, 6-7yo, 6yo, 6yo+, 7yo+, 8yo+, 9yo+</p>
		 * @param {Array<string>} sex_restriction <p>Query by sex restriction:</p><p>c&f, c&g, f, f&m, m, m&g</p>
		 * @return {DamsireDistanceAnalysis} Successful Response
		 */
		Damsire_distance_analysis_v1_damsires__damsire_id__analysis_distances_get(damsire_id: string, start_date: string | null | undefined, end_date: string | null | undefined, region: Array<string> | null | undefined, course: Array<string> | null | undefined, type: Array<string> | null | undefined, going: Array<string> | null | undefined, race_class: Array<string> | null | undefined, min_distance_y: number | null | undefined, max_distance_y: number | null | undefined, age_band: Array<string> | null | undefined, sex_restriction: Array<string> | null | undefined): Observable<DamsireDistanceAnalysis> {
			return this.http.get<DamsireDistanceAnalysis>(this.baseUri + 'v1/damsires/' + (damsire_id == null ? '' : encodeURIComponent(damsire_id)) + '/analysis/distances&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&' + region?.map(z => `region=${encodeURIComponent(z)}`).join('&') + '&' + course?.map(z => `course=${encodeURIComponent(z)}`).join('&') + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&' + going?.map(z => `going=${encodeURIComponent(z)}`).join('&') + '&' + race_class?.map(z => `race_class=${encodeURIComponent(z)}`).join('&') + '&min_distance_y=' + min_distance_y + '&max_distance_y=' + max_distance_y + '&' + age_band?.map(z => `age_band=${encodeURIComponent(z)}`).join('&') + '&' + sex_restriction?.map(z => `sex_restriction=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Damsire Results
		 * <p>Full historic results for damsire grandoffspring (PRO PLAN). .</p><p>For damsire results and statistics, use the <a href='https://api.theracingapi.com/documentation#tag/Horses'>horses endpoints</a>, replacing the 'dsi_' damsire id prefix with 'hrs_'.</p>
		 * Get v1/damsires/{damsire_id}/results
		 * @param {string} start_date <p>Query from date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {string} end_date <p>Query to date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {Array<string>} region <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @param {Array<string>} type <p>Query by race type:</p><p>chase, flat, hurdle, nh_flat</p>
		 * @param {Array<string>} going <p>Query by going:</p><p>fast, firm, good, good_to_firm, good_to_soft, good_to_yielding, hard, heavy, holding, muddy, sloppy, slow, soft, soft_to_heavy, standard, standard_to_fast, standard_to_slow, very_soft, yielding, yielding_to_soft</p>
		 * @param {Array<string>} race_class <p>Query by class:</p><p>class_1, class_2, class_3, class_4, class_5, class_6, class_7</p>
		 * @param {number} min_distance_y <p>Query by minimum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} max_distance_y <p>Query by maximum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} age_band <p>Query by age band:</p><p>10yo+, 2-3yo, 2yo, 2yo+, 3-4yo, 3-5yo, 3-6yo, 3yo, 3yo+, 4-5yo, 4-6yo, 4-7yo, 4-8yo, 4yo, 4yo+, 5-6yo, 5-7yo, 5-8yo, 5yo, 5yo+, 6-7yo, 6yo, 6yo+, 7yo+, 8yo+, 9yo+</p>
		 * @param {Array<string>} sex_restriction <p>Query by sex restriction:</p><p>c&f, c&g, f, f&m, m, m&g</p>
		 * @param {number} limit Minimum: 1
		 *     Maximum: 50
		 * @param {number} skip Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ResultsPage} Successful Response
		 */
		Damsire_results_v1_damsires__damsire_id__results_get(damsire_id: string, start_date: string | null | undefined, end_date: string | null | undefined, region: Array<string> | null | undefined, course: Array<string> | null | undefined, type: Array<string> | null | undefined, going: Array<string> | null | undefined, race_class: Array<string> | null | undefined, min_distance_y: number | null | undefined, max_distance_y: number | null | undefined, age_band: Array<string> | null | undefined, sex_restriction: Array<string> | null | undefined, limit: number | null | undefined, skip: number | null | undefined): Observable<ResultsPage> {
			return this.http.get<ResultsPage>(this.baseUri + 'v1/damsires/' + (damsire_id == null ? '' : encodeURIComponent(damsire_id)) + '/results&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&' + region?.map(z => `region=${encodeURIComponent(z)}`).join('&') + '&' + course?.map(z => `course=${encodeURIComponent(z)}`).join('&') + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&' + going?.map(z => `going=${encodeURIComponent(z)}`).join('&') + '&' + race_class?.map(z => `race_class=${encodeURIComponent(z)}`).join('&') + '&min_distance_y=' + min_distance_y + '&max_distance_y=' + max_distance_y + '&' + age_band?.map(z => `age_band=${encodeURIComponent(z)}`).join('&') + '&' + sex_restriction?.map(z => `sex_restriction=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&skip=' + skip, {});
		}

		/**
		 * Search Horses
		 * Search horses by name (STANDARD PLAN)
		 * Get v1/horses/search
		 * @return {Horses} Successful Response
		 */
		Search_horses_v1_horses_search_get(name: string): Observable<Horses> {
			return this.http.get<Horses>(this.baseUri + 'v1/horses/search?name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Horse Distance Time Analysis
		 * Distance statistics for a horse, with times and going (STANDARD PLAN)
		 * Get v1/horses/{horse_id}/analysis/distance-times
		 * @param {string} start_date <p>Query from date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {string} end_date <p>Query to date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {Array<string>} region <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @param {Array<string>} type <p>Query by race type:</p><p>chase, flat, hurdle, nh_flat</p>
		 * @param {Array<string>} going <p>Query by going:</p><p>fast, firm, good, good_to_firm, good_to_soft, good_to_yielding, hard, heavy, holding, muddy, sloppy, slow, soft, soft_to_heavy, standard, standard_to_fast, standard_to_slow, very_soft, yielding, yielding_to_soft</p>
		 * @param {Array<string>} race_class <p>Query by class:</p><p>class_1, class_2, class_3, class_4, class_5, class_6, class_7</p>
		 * @param {number} min_distance_y <p>Query by minimum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} max_distance_y <p>Query by maximum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} age_band <p>Query by age band:</p><p>10yo+, 2-3yo, 2yo, 2yo+, 3-4yo, 3-5yo, 3-6yo, 3yo, 3yo+, 4-5yo, 4-6yo, 4-7yo, 4-8yo, 4yo, 4yo+, 5-6yo, 5-7yo, 5-8yo, 5yo, 5yo+, 6-7yo, 6yo, 6yo+, 7yo+, 8yo+, 9yo+</p>
		 * @param {Array<string>} sex_restriction <p>Query by sex restriction:</p><p>c&f, c&g, f, f&m, m, m&g</p>
		 * @return {HorseDistanceTimeAnalysis} Successful Response
		 */
		Horse_distance_time_analysis_v1_horses__horse_id__analysis_distance_times_get(horse_id: string, start_date: string | null | undefined, end_date: string | null | undefined, region: Array<string> | null | undefined, course: Array<string> | null | undefined, type: Array<string> | null | undefined, going: Array<string> | null | undefined, race_class: Array<string> | null | undefined, min_distance_y: number | null | undefined, max_distance_y: number | null | undefined, age_band: Array<string> | null | undefined, sex_restriction: Array<string> | null | undefined): Observable<HorseDistanceTimeAnalysis> {
			return this.http.get<HorseDistanceTimeAnalysis>(this.baseUri + 'v1/horses/' + (horse_id == null ? '' : encodeURIComponent(horse_id)) + '/analysis/distance-times&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&' + region?.map(z => `region=${encodeURIComponent(z)}`).join('&') + '&' + course?.map(z => `course=${encodeURIComponent(z)}`).join('&') + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&' + going?.map(z => `going=${encodeURIComponent(z)}`).join('&') + '&' + race_class?.map(z => `race_class=${encodeURIComponent(z)}`).join('&') + '&min_distance_y=' + min_distance_y + '&max_distance_y=' + max_distance_y + '&' + age_band?.map(z => `age_band=${encodeURIComponent(z)}`).join('&') + '&' + sex_restriction?.map(z => `sex_restriction=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Horse Results
		 * Full historic results for a horse (PRO PLAN)
		 * Get v1/horses/{horse_id}/results
		 * @param {string} start_date <p>Query from date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {string} end_date <p>Query to date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {Array<string>} region <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @param {Array<string>} type <p>Query by race type:</p><p>chase, flat, hurdle, nh_flat</p>
		 * @param {Array<string>} going <p>Query by going:</p><p>fast, firm, good, good_to_firm, good_to_soft, good_to_yielding, hard, heavy, holding, muddy, sloppy, slow, soft, soft_to_heavy, standard, standard_to_fast, standard_to_slow, very_soft, yielding, yielding_to_soft</p>
		 * @param {Array<string>} race_class <p>Query by class:</p><p>class_1, class_2, class_3, class_4, class_5, class_6, class_7</p>
		 * @param {number} min_distance_y <p>Query by minimum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} max_distance_y <p>Query by maximum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} age_band <p>Query by age band:</p><p>10yo+, 2-3yo, 2yo, 2yo+, 3-4yo, 3-5yo, 3-6yo, 3yo, 3yo+, 4-5yo, 4-6yo, 4-7yo, 4-8yo, 4yo, 4yo+, 5-6yo, 5-7yo, 5-8yo, 5yo, 5yo+, 6-7yo, 6yo, 6yo+, 7yo+, 8yo+, 9yo+</p>
		 * @param {Array<string>} sex_restriction <p>Query by sex restriction:</p><p>c&f, c&g, f, f&m, m, m&g</p>
		 * @param {number} limit Minimum: 1
		 *     Maximum: 50
		 * @param {number} skip Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ResultsPage} Successful Response
		 */
		Horse_results_v1_horses__horse_id__results_get(horse_id: string, start_date: string | null | undefined, end_date: string | null | undefined, region: Array<string> | null | undefined, course: Array<string> | null | undefined, type: Array<string> | null | undefined, going: Array<string> | null | undefined, race_class: Array<string> | null | undefined, min_distance_y: number | null | undefined, max_distance_y: number | null | undefined, age_band: Array<string> | null | undefined, sex_restriction: Array<string> | null | undefined, limit: number | null | undefined, skip: number | null | undefined): Observable<ResultsPage> {
			return this.http.get<ResultsPage>(this.baseUri + 'v1/horses/' + (horse_id == null ? '' : encodeURIComponent(horse_id)) + '/results&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&' + region?.map(z => `region=${encodeURIComponent(z)}`).join('&') + '&' + course?.map(z => `course=${encodeURIComponent(z)}`).join('&') + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&' + going?.map(z => `going=${encodeURIComponent(z)}`).join('&') + '&' + race_class?.map(z => `race_class=${encodeURIComponent(z)}`).join('&') + '&min_distance_y=' + min_distance_y + '&max_distance_y=' + max_distance_y + '&' + age_band?.map(z => `age_band=${encodeURIComponent(z)}`).join('&') + '&' + sex_restriction?.map(z => `sex_restriction=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&skip=' + skip, {});
		}

		/**
		 * Search Jockeys
		 * Search jockeys by name (STANDARD PLAN)
		 * Get v1/jockeys/search
		 * @return {Jockeys} Successful Response
		 */
		Search_jockeys_v1_jockeys_search_get(name: string): Observable<Jockeys> {
			return this.http.get<Jockeys>(this.baseUri + 'v1/jockeys/search?name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Jockey Course Analysis
		 * Course statistics for a jockey (STANDARD PLAN)
		 * Get v1/jockeys/{jockey_id}/analysis/courses
		 * @param {string} start_date <p>Query from date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {string} end_date <p>Query to date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {Array<string>} region <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @param {Array<string>} type <p>Query by race type:</p><p>chase, flat, hurdle, nh_flat</p>
		 * @param {Array<string>} going <p>Query by going:</p><p>fast, firm, good, good_to_firm, good_to_soft, good_to_yielding, hard, heavy, holding, muddy, sloppy, slow, soft, soft_to_heavy, standard, standard_to_fast, standard_to_slow, very_soft, yielding, yielding_to_soft</p>
		 * @param {Array<string>} race_class <p>Query by class:</p><p>class_1, class_2, class_3, class_4, class_5, class_6, class_7</p>
		 * @param {number} min_distance_y <p>Query by minimum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} max_distance_y <p>Query by maximum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} age_band <p>Query by age band:</p><p>10yo+, 2-3yo, 2yo, 2yo+, 3-4yo, 3-5yo, 3-6yo, 3yo, 3yo+, 4-5yo, 4-6yo, 4-7yo, 4-8yo, 4yo, 4yo+, 5-6yo, 5-7yo, 5-8yo, 5yo, 5yo+, 6-7yo, 6yo, 6yo+, 7yo+, 8yo+, 9yo+</p>
		 * @param {Array<string>} sex_restriction <p>Query by sex restriction:</p><p>c&f, c&g, f, f&m, m, m&g</p>
		 * @return {JockeyCourseAnalysis} Successful Response
		 */
		Jockey_course_analysis_v1_jockeys__jockey_id__analysis_courses_get(jockey_id: string, start_date: string | null | undefined, end_date: string | null | undefined, region: Array<string> | null | undefined, course: Array<string> | null | undefined, type: Array<string> | null | undefined, going: Array<string> | null | undefined, race_class: Array<string> | null | undefined, min_distance_y: number | null | undefined, max_distance_y: number | null | undefined, age_band: Array<string> | null | undefined, sex_restriction: Array<string> | null | undefined): Observable<JockeyCourseAnalysis> {
			return this.http.get<JockeyCourseAnalysis>(this.baseUri + 'v1/jockeys/' + (jockey_id == null ? '' : encodeURIComponent(jockey_id)) + '/analysis/courses&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&' + region?.map(z => `region=${encodeURIComponent(z)}`).join('&') + '&' + course?.map(z => `course=${encodeURIComponent(z)}`).join('&') + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&' + going?.map(z => `going=${encodeURIComponent(z)}`).join('&') + '&' + race_class?.map(z => `race_class=${encodeURIComponent(z)}`).join('&') + '&min_distance_y=' + min_distance_y + '&max_distance_y=' + max_distance_y + '&' + age_band?.map(z => `age_band=${encodeURIComponent(z)}`).join('&') + '&' + sex_restriction?.map(z => `sex_restriction=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Jockey Distance Analysis
		 * Distance statistics for a jockey (STANDARD PLAN)
		 * Get v1/jockeys/{jockey_id}/analysis/distances
		 * @param {string} start_date <p>Query from date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {string} end_date <p>Query to date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {Array<string>} region <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @param {Array<string>} type <p>Query by race type:</p><p>chase, flat, hurdle, nh_flat</p>
		 * @param {Array<string>} going <p>Query by going:</p><p>fast, firm, good, good_to_firm, good_to_soft, good_to_yielding, hard, heavy, holding, muddy, sloppy, slow, soft, soft_to_heavy, standard, standard_to_fast, standard_to_slow, very_soft, yielding, yielding_to_soft</p>
		 * @param {Array<string>} race_class <p>Query by class:</p><p>class_1, class_2, class_3, class_4, class_5, class_6, class_7</p>
		 * @param {number} min_distance_y <p>Query by minimum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} max_distance_y <p>Query by maximum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} age_band <p>Query by age band:</p><p>10yo+, 2-3yo, 2yo, 2yo+, 3-4yo, 3-5yo, 3-6yo, 3yo, 3yo+, 4-5yo, 4-6yo, 4-7yo, 4-8yo, 4yo, 4yo+, 5-6yo, 5-7yo, 5-8yo, 5yo, 5yo+, 6-7yo, 6yo, 6yo+, 7yo+, 8yo+, 9yo+</p>
		 * @param {Array<string>} sex_restriction <p>Query by sex restriction:</p><p>c&f, c&g, f, f&m, m, m&g</p>
		 * @return {JockeyDistanceAnalysis} Successful Response
		 */
		Jockey_distance_analysis_v1_jockeys__jockey_id__analysis_distances_get(jockey_id: string, start_date: string | null | undefined, end_date: string | null | undefined, region: Array<string> | null | undefined, course: Array<string> | null | undefined, type: Array<string> | null | undefined, going: Array<string> | null | undefined, race_class: Array<string> | null | undefined, min_distance_y: number | null | undefined, max_distance_y: number | null | undefined, age_band: Array<string> | null | undefined, sex_restriction: Array<string> | null | undefined): Observable<JockeyDistanceAnalysis> {
			return this.http.get<JockeyDistanceAnalysis>(this.baseUri + 'v1/jockeys/' + (jockey_id == null ? '' : encodeURIComponent(jockey_id)) + '/analysis/distances&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&' + region?.map(z => `region=${encodeURIComponent(z)}`).join('&') + '&' + course?.map(z => `course=${encodeURIComponent(z)}`).join('&') + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&' + going?.map(z => `going=${encodeURIComponent(z)}`).join('&') + '&' + race_class?.map(z => `race_class=${encodeURIComponent(z)}`).join('&') + '&min_distance_y=' + min_distance_y + '&max_distance_y=' + max_distance_y + '&' + age_band?.map(z => `age_band=${encodeURIComponent(z)}`).join('&') + '&' + sex_restriction?.map(z => `sex_restriction=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Jockey Owner Analysis
		 * Owner statistics for a jockey (STANDARD PLAN)
		 * Get v1/jockeys/{jockey_id}/analysis/owners
		 * @param {string} start_date <p>Query from date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {string} end_date <p>Query to date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {Array<string>} region <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @param {Array<string>} type <p>Query by race type:</p><p>chase, flat, hurdle, nh_flat</p>
		 * @param {Array<string>} going <p>Query by going:</p><p>fast, firm, good, good_to_firm, good_to_soft, good_to_yielding, hard, heavy, holding, muddy, sloppy, slow, soft, soft_to_heavy, standard, standard_to_fast, standard_to_slow, very_soft, yielding, yielding_to_soft</p>
		 * @param {Array<string>} race_class <p>Query by class:</p><p>class_1, class_2, class_3, class_4, class_5, class_6, class_7</p>
		 * @param {number} min_distance_y <p>Query by minimum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} max_distance_y <p>Query by maximum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} age_band <p>Query by age band:</p><p>10yo+, 2-3yo, 2yo, 2yo+, 3-4yo, 3-5yo, 3-6yo, 3yo, 3yo+, 4-5yo, 4-6yo, 4-7yo, 4-8yo, 4yo, 4yo+, 5-6yo, 5-7yo, 5-8yo, 5yo, 5yo+, 6-7yo, 6yo, 6yo+, 7yo+, 8yo+, 9yo+</p>
		 * @param {Array<string>} sex_restriction <p>Query by sex restriction:</p><p>c&f, c&g, f, f&m, m, m&g</p>
		 * @return {JockeyOwnerAnalysis} Successful Response
		 */
		Jockey_owner_analysis_v1_jockeys__jockey_id__analysis_owners_get(jockey_id: string, start_date: string | null | undefined, end_date: string | null | undefined, region: Array<string> | null | undefined, course: Array<string> | null | undefined, type: Array<string> | null | undefined, going: Array<string> | null | undefined, race_class: Array<string> | null | undefined, min_distance_y: number | null | undefined, max_distance_y: number | null | undefined, age_band: Array<string> | null | undefined, sex_restriction: Array<string> | null | undefined): Observable<JockeyOwnerAnalysis> {
			return this.http.get<JockeyOwnerAnalysis>(this.baseUri + 'v1/jockeys/' + (jockey_id == null ? '' : encodeURIComponent(jockey_id)) + '/analysis/owners&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&' + region?.map(z => `region=${encodeURIComponent(z)}`).join('&') + '&' + course?.map(z => `course=${encodeURIComponent(z)}`).join('&') + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&' + going?.map(z => `going=${encodeURIComponent(z)}`).join('&') + '&' + race_class?.map(z => `race_class=${encodeURIComponent(z)}`).join('&') + '&min_distance_y=' + min_distance_y + '&max_distance_y=' + max_distance_y + '&' + age_band?.map(z => `age_band=${encodeURIComponent(z)}`).join('&') + '&' + sex_restriction?.map(z => `sex_restriction=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Jockey Trainer Analysis
		 * Trainer statistics for a jockey (STANDARD PLAN)
		 * Get v1/jockeys/{jockey_id}/analysis/trainers
		 * @param {string} start_date <p>Query from date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {string} end_date <p>Query to date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {Array<string>} region <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @param {Array<string>} type <p>Query by race type:</p><p>chase, flat, hurdle, nh_flat</p>
		 * @param {Array<string>} going <p>Query by going:</p><p>fast, firm, good, good_to_firm, good_to_soft, good_to_yielding, hard, heavy, holding, muddy, sloppy, slow, soft, soft_to_heavy, standard, standard_to_fast, standard_to_slow, very_soft, yielding, yielding_to_soft</p>
		 * @param {Array<string>} race_class <p>Query by class:</p><p>class_1, class_2, class_3, class_4, class_5, class_6, class_7</p>
		 * @param {number} min_distance_y <p>Query by minimum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} max_distance_y <p>Query by maximum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} age_band <p>Query by age band:</p><p>10yo+, 2-3yo, 2yo, 2yo+, 3-4yo, 3-5yo, 3-6yo, 3yo, 3yo+, 4-5yo, 4-6yo, 4-7yo, 4-8yo, 4yo, 4yo+, 5-6yo, 5-7yo, 5-8yo, 5yo, 5yo+, 6-7yo, 6yo, 6yo+, 7yo+, 8yo+, 9yo+</p>
		 * @param {Array<string>} sex_restriction <p>Query by sex restriction:</p><p>c&f, c&g, f, f&m, m, m&g</p>
		 * @return {JockeyTrainerAnalysis} Successful Response
		 */
		Jockey_trainer_analysis_v1_jockeys__jockey_id__analysis_trainers_get(jockey_id: string, start_date: string | null | undefined, end_date: string | null | undefined, region: Array<string> | null | undefined, course: Array<string> | null | undefined, type: Array<string> | null | undefined, going: Array<string> | null | undefined, race_class: Array<string> | null | undefined, min_distance_y: number | null | undefined, max_distance_y: number | null | undefined, age_band: Array<string> | null | undefined, sex_restriction: Array<string> | null | undefined): Observable<JockeyTrainerAnalysis> {
			return this.http.get<JockeyTrainerAnalysis>(this.baseUri + 'v1/jockeys/' + (jockey_id == null ? '' : encodeURIComponent(jockey_id)) + '/analysis/trainers&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&' + region?.map(z => `region=${encodeURIComponent(z)}`).join('&') + '&' + course?.map(z => `course=${encodeURIComponent(z)}`).join('&') + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&' + going?.map(z => `going=${encodeURIComponent(z)}`).join('&') + '&' + race_class?.map(z => `race_class=${encodeURIComponent(z)}`).join('&') + '&min_distance_y=' + min_distance_y + '&max_distance_y=' + max_distance_y + '&' + age_band?.map(z => `age_band=${encodeURIComponent(z)}`).join('&') + '&' + sex_restriction?.map(z => `sex_restriction=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Jockey Results
		 * Full historic results for a jockey (PRO PLAN)
		 * Get v1/jockeys/{jockey_id}/results
		 * @param {string} start_date <p>Query from date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {string} end_date <p>Query to date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {Array<string>} region <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @param {Array<string>} type <p>Query by race type:</p><p>chase, flat, hurdle, nh_flat</p>
		 * @param {Array<string>} going <p>Query by going:</p><p>fast, firm, good, good_to_firm, good_to_soft, good_to_yielding, hard, heavy, holding, muddy, sloppy, slow, soft, soft_to_heavy, standard, standard_to_fast, standard_to_slow, very_soft, yielding, yielding_to_soft</p>
		 * @param {Array<string>} race_class <p>Query by class:</p><p>class_1, class_2, class_3, class_4, class_5, class_6, class_7</p>
		 * @param {number} min_distance_y <p>Query by minimum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} max_distance_y <p>Query by maximum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} age_band <p>Query by age band:</p><p>10yo+, 2-3yo, 2yo, 2yo+, 3-4yo, 3-5yo, 3-6yo, 3yo, 3yo+, 4-5yo, 4-6yo, 4-7yo, 4-8yo, 4yo, 4yo+, 5-6yo, 5-7yo, 5-8yo, 5yo, 5yo+, 6-7yo, 6yo, 6yo+, 7yo+, 8yo+, 9yo+</p>
		 * @param {Array<string>} sex_restriction <p>Query by sex restriction:</p><p>c&f, c&g, f, f&m, m, m&g</p>
		 * @param {number} limit Minimum: 1
		 *     Maximum: 50
		 * @param {number} skip Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ResultsPage} Successful Response
		 */
		Jockey_results_v1_jockeys__jockey_id__results_get(jockey_id: string, start_date: string | null | undefined, end_date: string | null | undefined, region: Array<string> | null | undefined, course: Array<string> | null | undefined, type: Array<string> | null | undefined, going: Array<string> | null | undefined, race_class: Array<string> | null | undefined, min_distance_y: number | null | undefined, max_distance_y: number | null | undefined, age_band: Array<string> | null | undefined, sex_restriction: Array<string> | null | undefined, limit: number | null | undefined, skip: number | null | undefined): Observable<ResultsPage> {
			return this.http.get<ResultsPage>(this.baseUri + 'v1/jockeys/' + (jockey_id == null ? '' : encodeURIComponent(jockey_id)) + '/results&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&' + region?.map(z => `region=${encodeURIComponent(z)}`).join('&') + '&' + course?.map(z => `course=${encodeURIComponent(z)}`).join('&') + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&' + going?.map(z => `going=${encodeURIComponent(z)}`).join('&') + '&' + race_class?.map(z => `race_class=${encodeURIComponent(z)}`).join('&') + '&min_distance_y=' + min_distance_y + '&max_distance_y=' + max_distance_y + '&' + age_band?.map(z => `age_band=${encodeURIComponent(z)}`).join('&') + '&' + sex_restriction?.map(z => `sex_restriction=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&skip=' + skip, {});
		}

		/**
		 * List Meets
		 * <p>Get a list of north american race meets (STANDARD PLAN)</p><p><b>Standard Plan Regional Add-on:</b> £49.99 p/m North American racing add-on subscription required to access this endpoint.</p><p><b>Tracking began 1st July 2023.</b></p><p><a href='mailto:support@theracingapi.com'>Contact support</a> for information.</p>
		 * Get v1/north-america/meets
		 * @param {string} start_date <p>Query from date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {string} end_date <p>Query to date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {number} limit Minimum: 1
		 *     Maximum: 50
		 * @param {number} skip Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {MeetsResponse} Successful Response
		 */
		List_meets_v1_north_america_meets_get(start_date: string | null | undefined, end_date: string | null | undefined, limit: number | null | undefined, skip: number | null | undefined): Observable<MeetsResponse> {
			return this.http.get<MeetsResponse>(this.baseUri + 'v1/north-america/meets?start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&limit=' + limit + '&skip=' + skip, {});
		}

		/**
		 * Meet Entries
		 * <p>Get entries for a north american meet by meet id (STANDARD PLAN)</p><p><b>Standard Plan Regional Add-on:</b> £49.99 p/m North American racing add-on subscription required to access this endpoint.</p><p><b>Tracking began 1st July 2023.</b></p><p><a href='mailto:support@theracingapi.com'>Contact support</a> for information.</p>
		 * Get v1/north-america/meets/{meet_id}/entries
		 * @return {EntriesResponse} Successful Response
		 */
		Meet_entries_v1_north_america_meets__meet_id__entries_get(meet_id: string): Observable<EntriesResponse> {
			return this.http.get<EntriesResponse>(this.baseUri + 'v1/north-america/meets/' + (meet_id == null ? '' : encodeURIComponent(meet_id)) + '/entries', {});
		}

		/**
		 * Meet Results
		 * <p>Get results for a north american meet by meet id (STANDARD PLAN)</p><p><b>Standard Plan Regional Add-on:</b> £49.99 p/m North American racing add-on subscription required to access this endpoint.</p><p><b>Tracking began 1st July 2023.</b></p><p><a href='mailto:support@theracingapi.com'>Contact support</a> for information.</p>
		 * Get v1/north-america/meets/{meet_id}/results
		 * @return {ResultsResponse} Successful Response
		 */
		Meet_results_v1_north_america_meets__meet_id__results_get(meet_id: string): Observable<ResultsResponse> {
			return this.http.get<ResultsResponse>(this.baseUri + 'v1/north-america/meets/' + (meet_id == null ? '' : encodeURIComponent(meet_id)) + '/results', {});
		}

		/**
		 * Search Owners
		 * Search owners by name (STANDARD PLAN)
		 * Get v1/owners/search
		 * @return {Owners} Successful Response
		 */
		Search_owners_v1_owners_search_get(name: string): Observable<Owners> {
			return this.http.get<Owners>(this.baseUri + 'v1/owners/search?name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Owner Course Analysis
		 * Course statistics for an owner (STANDARD PLAN)
		 * Get v1/owners/{owner_id}/analysis/courses
		 * @param {string} start_date <p>Query from date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {string} end_date <p>Query to date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {Array<string>} region <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @param {Array<string>} type <p>Query by race type:</p><p>chase, flat, hurdle, nh_flat</p>
		 * @param {Array<string>} going <p>Query by going:</p><p>fast, firm, good, good_to_firm, good_to_soft, good_to_yielding, hard, heavy, holding, muddy, sloppy, slow, soft, soft_to_heavy, standard, standard_to_fast, standard_to_slow, very_soft, yielding, yielding_to_soft</p>
		 * @param {Array<string>} race_class <p>Query by class:</p><p>class_1, class_2, class_3, class_4, class_5, class_6, class_7</p>
		 * @param {number} min_distance_y <p>Query by minimum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} max_distance_y <p>Query by maximum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} age_band <p>Query by age band:</p><p>10yo+, 2-3yo, 2yo, 2yo+, 3-4yo, 3-5yo, 3-6yo, 3yo, 3yo+, 4-5yo, 4-6yo, 4-7yo, 4-8yo, 4yo, 4yo+, 5-6yo, 5-7yo, 5-8yo, 5yo, 5yo+, 6-7yo, 6yo, 6yo+, 7yo+, 8yo+, 9yo+</p>
		 * @param {Array<string>} sex_restriction <p>Query by sex restriction:</p><p>c&f, c&g, f, f&m, m, m&g</p>
		 * @return {OwnerCourseAnalysis} Successful Response
		 */
		Owner_course_analysis_v1_owners__owner_id__analysis_courses_get(owner_id: string, start_date: string | null | undefined, end_date: string | null | undefined, region: Array<string> | null | undefined, course: Array<string> | null | undefined, type: Array<string> | null | undefined, going: Array<string> | null | undefined, race_class: Array<string> | null | undefined, min_distance_y: number | null | undefined, max_distance_y: number | null | undefined, age_band: Array<string> | null | undefined, sex_restriction: Array<string> | null | undefined): Observable<OwnerCourseAnalysis> {
			return this.http.get<OwnerCourseAnalysis>(this.baseUri + 'v1/owners/' + (owner_id == null ? '' : encodeURIComponent(owner_id)) + '/analysis/courses&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&' + region?.map(z => `region=${encodeURIComponent(z)}`).join('&') + '&' + course?.map(z => `course=${encodeURIComponent(z)}`).join('&') + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&' + going?.map(z => `going=${encodeURIComponent(z)}`).join('&') + '&' + race_class?.map(z => `race_class=${encodeURIComponent(z)}`).join('&') + '&min_distance_y=' + min_distance_y + '&max_distance_y=' + max_distance_y + '&' + age_band?.map(z => `age_band=${encodeURIComponent(z)}`).join('&') + '&' + sex_restriction?.map(z => `sex_restriction=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Owner Distance Analysis
		 * Distance statistics for an owner (STANDARD PLAN)
		 * Get v1/owners/{owner_id}/analysis/distances
		 * @param {string} start_date <p>Query from date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {string} end_date <p>Query to date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {Array<string>} region <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @param {Array<string>} type <p>Query by race type:</p><p>chase, flat, hurdle, nh_flat</p>
		 * @param {Array<string>} going <p>Query by going:</p><p>fast, firm, good, good_to_firm, good_to_soft, good_to_yielding, hard, heavy, holding, muddy, sloppy, slow, soft, soft_to_heavy, standard, standard_to_fast, standard_to_slow, very_soft, yielding, yielding_to_soft</p>
		 * @param {Array<string>} race_class <p>Query by class:</p><p>class_1, class_2, class_3, class_4, class_5, class_6, class_7</p>
		 * @param {number} min_distance_y <p>Query by minimum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} max_distance_y <p>Query by maximum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} age_band <p>Query by age band:</p><p>10yo+, 2-3yo, 2yo, 2yo+, 3-4yo, 3-5yo, 3-6yo, 3yo, 3yo+, 4-5yo, 4-6yo, 4-7yo, 4-8yo, 4yo, 4yo+, 5-6yo, 5-7yo, 5-8yo, 5yo, 5yo+, 6-7yo, 6yo, 6yo+, 7yo+, 8yo+, 9yo+</p>
		 * @param {Array<string>} sex_restriction <p>Query by sex restriction:</p><p>c&f, c&g, f, f&m, m, m&g</p>
		 * @return {OwnerDistanceAnalysis} Successful Response
		 */
		Owner_distance_analysis_v1_owners__owner_id__analysis_distances_get(owner_id: string, start_date: string | null | undefined, end_date: string | null | undefined, region: Array<string> | null | undefined, course: Array<string> | null | undefined, type: Array<string> | null | undefined, going: Array<string> | null | undefined, race_class: Array<string> | null | undefined, min_distance_y: number | null | undefined, max_distance_y: number | null | undefined, age_band: Array<string> | null | undefined, sex_restriction: Array<string> | null | undefined): Observable<OwnerDistanceAnalysis> {
			return this.http.get<OwnerDistanceAnalysis>(this.baseUri + 'v1/owners/' + (owner_id == null ? '' : encodeURIComponent(owner_id)) + '/analysis/distances&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&' + region?.map(z => `region=${encodeURIComponent(z)}`).join('&') + '&' + course?.map(z => `course=${encodeURIComponent(z)}`).join('&') + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&' + going?.map(z => `going=${encodeURIComponent(z)}`).join('&') + '&' + race_class?.map(z => `race_class=${encodeURIComponent(z)}`).join('&') + '&min_distance_y=' + min_distance_y + '&max_distance_y=' + max_distance_y + '&' + age_band?.map(z => `age_band=${encodeURIComponent(z)}`).join('&') + '&' + sex_restriction?.map(z => `sex_restriction=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Owner Jockey Analysis
		 * Jockey statistics for an owner (STANDARD PLAN)
		 * Get v1/owners/{owner_id}/analysis/jockeys
		 * @param {string} start_date <p>Query from date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {string} end_date <p>Query to date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {Array<string>} region <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @param {Array<string>} type <p>Query by race type:</p><p>chase, flat, hurdle, nh_flat</p>
		 * @param {Array<string>} going <p>Query by going:</p><p>fast, firm, good, good_to_firm, good_to_soft, good_to_yielding, hard, heavy, holding, muddy, sloppy, slow, soft, soft_to_heavy, standard, standard_to_fast, standard_to_slow, very_soft, yielding, yielding_to_soft</p>
		 * @param {Array<string>} race_class <p>Query by class:</p><p>class_1, class_2, class_3, class_4, class_5, class_6, class_7</p>
		 * @param {number} min_distance_y <p>Query by minimum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} max_distance_y <p>Query by maximum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} age_band <p>Query by age band:</p><p>10yo+, 2-3yo, 2yo, 2yo+, 3-4yo, 3-5yo, 3-6yo, 3yo, 3yo+, 4-5yo, 4-6yo, 4-7yo, 4-8yo, 4yo, 4yo+, 5-6yo, 5-7yo, 5-8yo, 5yo, 5yo+, 6-7yo, 6yo, 6yo+, 7yo+, 8yo+, 9yo+</p>
		 * @param {Array<string>} sex_restriction <p>Query by sex restriction:</p><p>c&f, c&g, f, f&m, m, m&g</p>
		 * @return {OwnerJockeyAnalysis} Successful Response
		 */
		Owner_jockey_analysis_v1_owners__owner_id__analysis_jockeys_get(owner_id: string, start_date: string | null | undefined, end_date: string | null | undefined, region: Array<string> | null | undefined, course: Array<string> | null | undefined, type: Array<string> | null | undefined, going: Array<string> | null | undefined, race_class: Array<string> | null | undefined, min_distance_y: number | null | undefined, max_distance_y: number | null | undefined, age_band: Array<string> | null | undefined, sex_restriction: Array<string> | null | undefined): Observable<OwnerJockeyAnalysis> {
			return this.http.get<OwnerJockeyAnalysis>(this.baseUri + 'v1/owners/' + (owner_id == null ? '' : encodeURIComponent(owner_id)) + '/analysis/jockeys&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&' + region?.map(z => `region=${encodeURIComponent(z)}`).join('&') + '&' + course?.map(z => `course=${encodeURIComponent(z)}`).join('&') + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&' + going?.map(z => `going=${encodeURIComponent(z)}`).join('&') + '&' + race_class?.map(z => `race_class=${encodeURIComponent(z)}`).join('&') + '&min_distance_y=' + min_distance_y + '&max_distance_y=' + max_distance_y + '&' + age_band?.map(z => `age_band=${encodeURIComponent(z)}`).join('&') + '&' + sex_restriction?.map(z => `sex_restriction=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Owner Trainer Analysis
		 * Trainer statistics for an owner (STANDARD PLAN)
		 * Get v1/owners/{owner_id}/analysis/trainers
		 * @param {string} start_date <p>Query from date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {string} end_date <p>Query to date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {Array<string>} region <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @param {Array<string>} type <p>Query by race type:</p><p>chase, flat, hurdle, nh_flat</p>
		 * @param {Array<string>} going <p>Query by going:</p><p>fast, firm, good, good_to_firm, good_to_soft, good_to_yielding, hard, heavy, holding, muddy, sloppy, slow, soft, soft_to_heavy, standard, standard_to_fast, standard_to_slow, very_soft, yielding, yielding_to_soft</p>
		 * @param {Array<string>} race_class <p>Query by class:</p><p>class_1, class_2, class_3, class_4, class_5, class_6, class_7</p>
		 * @param {number} min_distance_y <p>Query by minimum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} max_distance_y <p>Query by maximum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} age_band <p>Query by age band:</p><p>10yo+, 2-3yo, 2yo, 2yo+, 3-4yo, 3-5yo, 3-6yo, 3yo, 3yo+, 4-5yo, 4-6yo, 4-7yo, 4-8yo, 4yo, 4yo+, 5-6yo, 5-7yo, 5-8yo, 5yo, 5yo+, 6-7yo, 6yo, 6yo+, 7yo+, 8yo+, 9yo+</p>
		 * @param {Array<string>} sex_restriction <p>Query by sex restriction:</p><p>c&f, c&g, f, f&m, m, m&g</p>
		 * @return {OwnerTrainerAnalysis} Successful Response
		 */
		Owner_trainer_analysis_v1_owners__owner_id__analysis_trainers_get(owner_id: string, start_date: string | null | undefined, end_date: string | null | undefined, region: Array<string> | null | undefined, course: Array<string> | null | undefined, type: Array<string> | null | undefined, going: Array<string> | null | undefined, race_class: Array<string> | null | undefined, min_distance_y: number | null | undefined, max_distance_y: number | null | undefined, age_band: Array<string> | null | undefined, sex_restriction: Array<string> | null | undefined): Observable<OwnerTrainerAnalysis> {
			return this.http.get<OwnerTrainerAnalysis>(this.baseUri + 'v1/owners/' + (owner_id == null ? '' : encodeURIComponent(owner_id)) + '/analysis/trainers&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&' + region?.map(z => `region=${encodeURIComponent(z)}`).join('&') + '&' + course?.map(z => `course=${encodeURIComponent(z)}`).join('&') + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&' + going?.map(z => `going=${encodeURIComponent(z)}`).join('&') + '&' + race_class?.map(z => `race_class=${encodeURIComponent(z)}`).join('&') + '&min_distance_y=' + min_distance_y + '&max_distance_y=' + max_distance_y + '&' + age_band?.map(z => `age_band=${encodeURIComponent(z)}`).join('&') + '&' + sex_restriction?.map(z => `sex_restriction=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Owner Results
		 * Full historic results for an owner (PRO PLAN)
		 * Get v1/owners/{owner_id}/results
		 * @param {string} start_date <p>Query from date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {string} end_date <p>Query to date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {Array<string>} region <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @param {Array<string>} type <p>Query by race type:</p><p>chase, flat, hurdle, nh_flat</p>
		 * @param {Array<string>} going <p>Query by going:</p><p>fast, firm, good, good_to_firm, good_to_soft, good_to_yielding, hard, heavy, holding, muddy, sloppy, slow, soft, soft_to_heavy, standard, standard_to_fast, standard_to_slow, very_soft, yielding, yielding_to_soft</p>
		 * @param {Array<string>} race_class <p>Query by class:</p><p>class_1, class_2, class_3, class_4, class_5, class_6, class_7</p>
		 * @param {number} min_distance_y <p>Query by minimum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} max_distance_y <p>Query by maximum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} age_band <p>Query by age band:</p><p>10yo+, 2-3yo, 2yo, 2yo+, 3-4yo, 3-5yo, 3-6yo, 3yo, 3yo+, 4-5yo, 4-6yo, 4-7yo, 4-8yo, 4yo, 4yo+, 5-6yo, 5-7yo, 5-8yo, 5yo, 5yo+, 6-7yo, 6yo, 6yo+, 7yo+, 8yo+, 9yo+</p>
		 * @param {Array<string>} sex_restriction <p>Query by sex restriction:</p><p>c&f, c&g, f, f&m, m, m&g</p>
		 * @param {number} limit Minimum: 1
		 *     Maximum: 50
		 * @param {number} skip Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ResultsPage} Successful Response
		 */
		Owner_results_v1_owners__owner_id__results_get(owner_id: string, start_date: string | null | undefined, end_date: string | null | undefined, region: Array<string> | null | undefined, course: Array<string> | null | undefined, type: Array<string> | null | undefined, going: Array<string> | null | undefined, race_class: Array<string> | null | undefined, min_distance_y: number | null | undefined, max_distance_y: number | null | undefined, age_band: Array<string> | null | undefined, sex_restriction: Array<string> | null | undefined, limit: number | null | undefined, skip: number | null | undefined): Observable<ResultsPage> {
			return this.http.get<ResultsPage>(this.baseUri + 'v1/owners/' + (owner_id == null ? '' : encodeURIComponent(owner_id)) + '/results&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&' + region?.map(z => `region=${encodeURIComponent(z)}`).join('&') + '&' + course?.map(z => `course=${encodeURIComponent(z)}`).join('&') + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&' + going?.map(z => `going=${encodeURIComponent(z)}`).join('&') + '&' + race_class?.map(z => `race_class=${encodeURIComponent(z)}`).join('&') + '&min_distance_y=' + min_distance_y + '&max_distance_y=' + max_distance_y + '&' + age_band?.map(z => `age_band=${encodeURIComponent(z)}`).join('&') + '&' + sex_restriction?.map(z => `sex_restriction=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&skip=' + skip, {});
		}

		/**
		 * List Racecards Basic
		 * Get today and tomorrows advanced racecards (BASIC PLAN)
		 * Get v1/racecards/basic
		 * @param {string} day Query racecards by day:<br> today, tomorrow
		 * @param {Array<string>} region_codes <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course_ids Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @return {Racecards} Successful Response
		 */
		List_racecards_basic_v1_racecards_basic_get(day: string | null | undefined, region_codes: Array<string> | null | undefined, course_ids: Array<string> | null | undefined): Observable<Racecards> {
			return this.http.get<Racecards>(this.baseUri + 'v1/racecards/basic?day=' + (day == null ? '' : encodeURIComponent(day)) + '&' + region_codes?.map(z => `region_codes=${encodeURIComponent(z)}`).join('&') + '&' + course_ids?.map(z => `course_ids=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * List Racecards Big Races
		 * Get future big race's racecards, such as Cheltenham, The Grand National and The Derby (STANDARD PLAN)
		 * Get v1/racecards/big-races
		 * @param {string} start_date <p>Query from date with format YYYY-MM-DD (e.g. 2020-01-01)</p><p>Date must be today or greater, defaults to today.</p>
		 * @param {string} end_date <p>Query to date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {Array<string>} region_codes <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course_ids Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @return {RacecardsOdds} Successful Response
		 */
		List_racecards_big_races_v1_racecards_big_races_get(start_date: string | null | undefined, end_date: string | null | undefined, region_codes: Array<string> | null | undefined, course_ids: Array<string> | null | undefined): Observable<RacecardsOdds> {
			return this.http.get<RacecardsOdds>(this.baseUri + 'v1/racecards/big-races?start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&' + region_codes?.map(z => `region_codes=${encodeURIComponent(z)}`).join('&') + '&' + course_ids?.map(z => `course_ids=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * List Racecards Free
		 * Get today and tomorrows basic racecards (FREE PLAN)
		 * Get v1/racecards/free
		 * @param {string} day Query racecards by day:<br> today, tomorrow
		 * @param {Array<string>} region_codes <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course_ids Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @return {RacecardsBasic} Successful Response
		 */
		List_racecards_free_v1_racecards_free_get(day: string | null | undefined, region_codes: Array<string> | null | undefined, course_ids: Array<string> | null | undefined): Observable<RacecardsBasic> {
			return this.http.get<RacecardsBasic>(this.baseUri + 'v1/racecards/free?day=' + (day == null ? '' : encodeURIComponent(day)) + '&' + region_codes?.map(z => `region_codes=${encodeURIComponent(z)}`).join('&') + '&' + course_ids?.map(z => `course_ids=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * List Racecards Pro
		 * Get past and future advanced racecards by date, including runner odds for UK & IRE racing. (PRO PLAN)<br> (Past racecards available from 2023-01-23. Future racecards available up to 1 week in advance.)
		 * Get v1/racecards/pro
		 * @param {string} date Query racecards by date with format YYYY-MM-DD (e.g 2023-04-05)
		 * @param {Array<string>} region_codes <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course_ids Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @return {RacecardsOdds} Successful Response
		 */
		List_racecards_pro_v1_racecards_pro_get(date: string | null | undefined, region_codes: Array<string> | null | undefined, course_ids: Array<string> | null | undefined): Observable<RacecardsOdds> {
			return this.http.get<RacecardsOdds>(this.baseUri + 'v1/racecards/pro?date=' + (date == null ? '' : encodeURIComponent(date)) + '&' + region_codes?.map(z => `region_codes=${encodeURIComponent(z)}`).join('&') + '&' + course_ids?.map(z => `course_ids=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * List Racecards Standard
		 * Get today and tomorrows advanced racecards, including runner odds for UK & IRE racing. (STANDARD PLAN)
		 * Get v1/racecards/standard
		 * @param {string} day Query racecards by day:<br> today, tomorrow
		 * @param {Array<string>} region_codes <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course_ids Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @return {RacecardsOdds} Successful Response
		 */
		List_racecards_standard_v1_racecards_standard_get(day: string | null | undefined, region_codes: Array<string> | null | undefined, course_ids: Array<string> | null | undefined): Observable<RacecardsOdds> {
			return this.http.get<RacecardsOdds>(this.baseUri + 'v1/racecards/standard?day=' + (day == null ? '' : encodeURIComponent(day)) + '&' + region_codes?.map(z => `region_codes=${encodeURIComponent(z)}`).join('&') + '&' + course_ids?.map(z => `course_ids=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * List Racecard Summaries
		 * List racecard summaries for a given date (BASIC PLAN)
		 * Get v1/racecards/summaries
		 * @param {string} date Query racecard summaries by date with format YYYY-MM-DD (e.g 2023-04-05)
		 * @param {Array<string>} region_codes <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course_ids Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @return {RacecardsSummary} Successful Response
		 */
		List_racecard_summaries_v1_racecards_summaries_get(date: string | null | undefined, region_codes: Array<string> | null | undefined, course_ids: Array<string> | null | undefined): Observable<RacecardsSummary> {
			return this.http.get<RacecardsSummary>(this.baseUri + 'v1/racecards/summaries?date=' + (date == null ? '' : encodeURIComponent(date)) + '&' + region_codes?.map(z => `region_codes=${encodeURIComponent(z)}`).join('&') + '&' + course_ids?.map(z => `course_ids=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * List Racecard Horse Results
		 * Get full historic results for a horse on today or tomorrow's racecards (BASIC PLAN)
		 * Get v1/racecards/{horse_id}/results
		 * @param {string} start_date <p>Query from date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {string} end_date <p>Query to date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {Array<string>} region <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @param {Array<string>} type <p>Query by race type:</p><p>chase, flat, hurdle, nh_flat</p>
		 * @param {Array<string>} going <p>Query by going:</p><p>fast, firm, good, good_to_firm, good_to_soft, good_to_yielding, hard, heavy, holding, muddy, sloppy, slow, soft, soft_to_heavy, standard, standard_to_fast, standard_to_slow, very_soft, yielding, yielding_to_soft</p>
		 * @param {Array<string>} race_class <p>Query by class:</p><p>class_1, class_2, class_3, class_4, class_5, class_6, class_7</p>
		 * @param {number} min_distance_y <p>Query by minimum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} max_distance_y <p>Query by maximum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} age_band <p>Query by age band:</p><p>10yo+, 2-3yo, 2yo, 2yo+, 3-4yo, 3-5yo, 3-6yo, 3yo, 3yo+, 4-5yo, 4-6yo, 4-7yo, 4-8yo, 4yo, 4yo+, 5-6yo, 5-7yo, 5-8yo, 5yo, 5yo+, 6-7yo, 6yo, 6yo+, 7yo+, 8yo+, 9yo+</p>
		 * @param {Array<string>} sex_restriction <p>Query by sex restriction:</p><p>c&f, c&g, f, f&m, m, m&g</p>
		 * @param {number} limit Minimum: 1
		 *     Maximum: 50
		 * @param {number} skip Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ResultsPage} Successful Response
		 */
		List_racecard_horse_results_v1_racecards__horse_id__results_get(horse_id: string, start_date: string | null | undefined, end_date: string | null | undefined, region: Array<string> | null | undefined, course: Array<string> | null | undefined, type: Array<string> | null | undefined, going: Array<string> | null | undefined, race_class: Array<string> | null | undefined, min_distance_y: number | null | undefined, max_distance_y: number | null | undefined, age_band: Array<string> | null | undefined, sex_restriction: Array<string> | null | undefined, limit: number | null | undefined, skip: number | null | undefined): Observable<ResultsPage> {
			return this.http.get<ResultsPage>(this.baseUri + 'v1/racecards/' + (horse_id == null ? '' : encodeURIComponent(horse_id)) + '/results&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&' + region?.map(z => `region=${encodeURIComponent(z)}`).join('&') + '&' + course?.map(z => `course=${encodeURIComponent(z)}`).join('&') + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&' + going?.map(z => `going=${encodeURIComponent(z)}`).join('&') + '&' + race_class?.map(z => `race_class=${encodeURIComponent(z)}`).join('&') + '&min_distance_y=' + min_distance_y + '&max_distance_y=' + max_distance_y + '&' + age_band?.map(z => `age_band=${encodeURIComponent(z)}`).join('&') + '&' + sex_restriction?.map(z => `sex_restriction=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&skip=' + skip, {});
		}

		/**
		 * Race Pro
		 * Get any past or future race by race id, including runner odds for UK & IRE racing. (PRO PLAN)<br> (Past racecards available from 2023-01-23. Future racecards available up to 1 week in advance.)
		 * Get v1/racecards/{race_id}/pro
		 * @return {RacecardOdds} Successful Response
		 */
		Race_pro_v1_racecards__race_id__pro_get(race_id: string): Observable<RacecardOdds> {
			return this.http.get<RacecardOdds>(this.baseUri + 'v1/racecards/' + (race_id == null ? '' : encodeURIComponent(race_id)) + '/pro', {});
		}

		/**
		 * Race Standard
		 * Get any race for today or tomorrow (or if classified as a 'big race') by race id, including runner odds for UK & IRE racing. (STANDARD PLAN)
		 * Get v1/racecards/{race_id}/standard
		 * @return {RacecardOdds} Successful Response
		 */
		Race_standard_v1_racecards__race_id__standard_get(race_id: string): Observable<RacecardOdds> {
			return this.http.get<RacecardOdds>(this.baseUri + 'v1/racecards/' + (race_id == null ? '' : encodeURIComponent(race_id)) + '/standard', {});
		}

		/**
		 * List Results
		 * <p>All historic results, up to 12 months in the past (STANDARD PLAN)</p><p><b>Pro Plan Add-on:</b> users on the Pro Plan can pay a one-time fee of £249 to remove the 12 month restriction and access the entire results database from this endpoint. <a href='mailto:support@theracingapi.com'>Contact support</a> for information.</p>
		 * Get v1/results
		 * @param {string} start_date <p>Query from date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {string} end_date <p>Query to date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {Array<string>} region <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @param {Array<string>} type <p>Query by race type:</p><p>chase, flat, hurdle, nh_flat</p>
		 * @param {Array<string>} going <p>Query by going:</p><p>fast, firm, good, good_to_firm, good_to_soft, good_to_yielding, hard, heavy, holding, muddy, sloppy, slow, soft, soft_to_heavy, standard, standard_to_fast, standard_to_slow, very_soft, yielding, yielding_to_soft</p>
		 * @param {Array<string>} race_class <p>Query by class:</p><p>class_1, class_2, class_3, class_4, class_5, class_6, class_7</p>
		 * @param {number} min_distance_y <p>Query by minimum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} max_distance_y <p>Query by maximum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} age_band <p>Query by age band:</p><p>10yo+, 2-3yo, 2yo, 2yo+, 3-4yo, 3-5yo, 3-6yo, 3yo, 3yo+, 4-5yo, 4-6yo, 4-7yo, 4-8yo, 4yo, 4yo+, 5-6yo, 5-7yo, 5-8yo, 5yo, 5yo+, 6-7yo, 6yo, 6yo+, 7yo+, 8yo+, 9yo+</p>
		 * @param {Array<string>} sex_restriction <p>Query by sex restriction:</p><p>c&f, c&g, f, f&m, m, m&g</p>
		 * @param {number} limit Minimum: 1
		 *     Maximum: 50
		 * @param {number} skip Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ResultsPage} Successful Response
		 */
		List_results_v1_results_get(start_date: string | null | undefined, end_date: string | null | undefined, region: Array<string> | null | undefined, course: Array<string> | null | undefined, type: Array<string> | null | undefined, going: Array<string> | null | undefined, race_class: Array<string> | null | undefined, min_distance_y: number | null | undefined, max_distance_y: number | null | undefined, age_band: Array<string> | null | undefined, sex_restriction: Array<string> | null | undefined, limit: number | null | undefined, skip: number | null | undefined): Observable<ResultsPage> {
			return this.http.get<ResultsPage>(this.baseUri + 'v1/results?start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&' + region?.map(z => `region=${encodeURIComponent(z)}`).join('&') + '&' + course?.map(z => `course=${encodeURIComponent(z)}`).join('&') + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&' + going?.map(z => `going=${encodeURIComponent(z)}`).join('&') + '&' + race_class?.map(z => `race_class=${encodeURIComponent(z)}`).join('&') + '&min_distance_y=' + min_distance_y + '&max_distance_y=' + max_distance_y + '&' + age_band?.map(z => `age_band=${encodeURIComponent(z)}`).join('&') + '&' + sex_restriction?.map(z => `sex_restriction=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&skip=' + skip, {});
		}

		/**
		 * List Todays Results
		 * Today's results (BASIC PLAN)
		 * Get v1/results/today
		 * @param {Array<string>} region <p>Query results by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p>
		 * @param {number} limit Minimum: 1
		 *     Maximum: 50
		 * @param {number} skip Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ResultsPage} Successful Response
		 */
		List_todays_results_v1_results_today_get(region: Array<string> | null | undefined, limit: number | null | undefined, skip: number | null | undefined): Observable<ResultsPage> {
			return this.http.get<ResultsPage>(this.baseUri + 'v1/results/today?' + region?.map(z => `region=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&skip=' + skip, {});
		}

		/**
		 * Result
		 * <p>Get a result by race id (STANDARD PLAN)</p>
		 * Get v1/results/{race_id}
		 * @return {Result} Successful Response
		 */
		Result_v1_results__race_id__get(race_id: string): Observable<Result> {
			return this.http.get<Result>(this.baseUri + 'v1/results/' + (race_id == null ? '' : encodeURIComponent(race_id)), {});
		}

		/**
		 * Search Sires
		 * Search sires by name (STANDARD PLAN)
		 * Get v1/sires/search
		 * @return {Sires} Successful Response
		 */
		Search_sires_v1_sires_search_get(name: string): Observable<Sires> {
			return this.http.get<Sires>(this.baseUri + 'v1/sires/search?name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Sire Class Analysis
		 * <p>Offspring class statistics for sire (STANDARD PLAN).</p><p>For sire results and statistics, use the <a href='https://api.theracingapi.com/documentation#tag/Horses'>horses endpoints</a>, replacing the 'sir_' sire id prefix with 'hrs_'.</p>
		 * Get v1/sires/{sire_id}/analysis/classes
		 * @param {string} start_date <p>Query from date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {string} end_date <p>Query to date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {Array<string>} region <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @param {Array<string>} type <p>Query by race type:</p><p>chase, flat, hurdle, nh_flat</p>
		 * @param {Array<string>} going <p>Query by going:</p><p>fast, firm, good, good_to_firm, good_to_soft, good_to_yielding, hard, heavy, holding, muddy, sloppy, slow, soft, soft_to_heavy, standard, standard_to_fast, standard_to_slow, very_soft, yielding, yielding_to_soft</p>
		 * @param {Array<string>} race_class <p>Query by class:</p><p>class_1, class_2, class_3, class_4, class_5, class_6, class_7</p>
		 * @param {number} min_distance_y <p>Query by minimum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} max_distance_y <p>Query by maximum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} age_band <p>Query by age band:</p><p>10yo+, 2-3yo, 2yo, 2yo+, 3-4yo, 3-5yo, 3-6yo, 3yo, 3yo+, 4-5yo, 4-6yo, 4-7yo, 4-8yo, 4yo, 4yo+, 5-6yo, 5-7yo, 5-8yo, 5yo, 5yo+, 6-7yo, 6yo, 6yo+, 7yo+, 8yo+, 9yo+</p>
		 * @param {Array<string>} sex_restriction <p>Query by sex restriction:</p><p>c&f, c&g, f, f&m, m, m&g</p>
		 * @return {SireClassAnalysis} Successful Response
		 */
		Sire_class_analysis_v1_sires__sire_id__analysis_classes_get(sire_id: string, start_date: string | null | undefined, end_date: string | null | undefined, region: Array<string> | null | undefined, course: Array<string> | null | undefined, type: Array<string> | null | undefined, going: Array<string> | null | undefined, race_class: Array<string> | null | undefined, min_distance_y: number | null | undefined, max_distance_y: number | null | undefined, age_band: Array<string> | null | undefined, sex_restriction: Array<string> | null | undefined): Observable<SireClassAnalysis> {
			return this.http.get<SireClassAnalysis>(this.baseUri + 'v1/sires/' + (sire_id == null ? '' : encodeURIComponent(sire_id)) + '/analysis/classes&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&' + region?.map(z => `region=${encodeURIComponent(z)}`).join('&') + '&' + course?.map(z => `course=${encodeURIComponent(z)}`).join('&') + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&' + going?.map(z => `going=${encodeURIComponent(z)}`).join('&') + '&' + race_class?.map(z => `race_class=${encodeURIComponent(z)}`).join('&') + '&min_distance_y=' + min_distance_y + '&max_distance_y=' + max_distance_y + '&' + age_band?.map(z => `age_band=${encodeURIComponent(z)}`).join('&') + '&' + sex_restriction?.map(z => `sex_restriction=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Sire Distance Analysis
		 * <p>Offspring distance statistics for sire (STANDARD PLAN).</p><p>For sire results and statistics, use the <a href='https://api.theracingapi.com/documentation#tag/Horses'>horses endpoints</a>, replacing the 'sir_' sire id prefix with 'hrs_'.</p>
		 * Get v1/sires/{sire_id}/analysis/distances
		 * @param {string} start_date <p>Query from date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {string} end_date <p>Query to date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {Array<string>} region <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @param {Array<string>} type <p>Query by race type:</p><p>chase, flat, hurdle, nh_flat</p>
		 * @param {Array<string>} going <p>Query by going:</p><p>fast, firm, good, good_to_firm, good_to_soft, good_to_yielding, hard, heavy, holding, muddy, sloppy, slow, soft, soft_to_heavy, standard, standard_to_fast, standard_to_slow, very_soft, yielding, yielding_to_soft</p>
		 * @param {Array<string>} race_class <p>Query by class:</p><p>class_1, class_2, class_3, class_4, class_5, class_6, class_7</p>
		 * @param {number} min_distance_y <p>Query by minimum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} max_distance_y <p>Query by maximum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} age_band <p>Query by age band:</p><p>10yo+, 2-3yo, 2yo, 2yo+, 3-4yo, 3-5yo, 3-6yo, 3yo, 3yo+, 4-5yo, 4-6yo, 4-7yo, 4-8yo, 4yo, 4yo+, 5-6yo, 5-7yo, 5-8yo, 5yo, 5yo+, 6-7yo, 6yo, 6yo+, 7yo+, 8yo+, 9yo+</p>
		 * @param {Array<string>} sex_restriction <p>Query by sex restriction:</p><p>c&f, c&g, f, f&m, m, m&g</p>
		 * @return {SireDistanceAnalysis} Successful Response
		 */
		Sire_distance_analysis_v1_sires__sire_id__analysis_distances_get(sire_id: string, start_date: string | null | undefined, end_date: string | null | undefined, region: Array<string> | null | undefined, course: Array<string> | null | undefined, type: Array<string> | null | undefined, going: Array<string> | null | undefined, race_class: Array<string> | null | undefined, min_distance_y: number | null | undefined, max_distance_y: number | null | undefined, age_band: Array<string> | null | undefined, sex_restriction: Array<string> | null | undefined): Observable<SireDistanceAnalysis> {
			return this.http.get<SireDistanceAnalysis>(this.baseUri + 'v1/sires/' + (sire_id == null ? '' : encodeURIComponent(sire_id)) + '/analysis/distances&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&' + region?.map(z => `region=${encodeURIComponent(z)}`).join('&') + '&' + course?.map(z => `course=${encodeURIComponent(z)}`).join('&') + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&' + going?.map(z => `going=${encodeURIComponent(z)}`).join('&') + '&' + race_class?.map(z => `race_class=${encodeURIComponent(z)}`).join('&') + '&min_distance_y=' + min_distance_y + '&max_distance_y=' + max_distance_y + '&' + age_band?.map(z => `age_band=${encodeURIComponent(z)}`).join('&') + '&' + sex_restriction?.map(z => `sex_restriction=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Sire Results
		 * <p>Full historic results for sire offspring (PRO PLAN).</p><p>For sire results and statistics, use the <a href='https://api.theracingapi.com/documentation#tag/Horses'>horses endpoints</a>, replacing the 'sir_' sire id prefix with 'hrs_'.</p>
		 * Get v1/sires/{sire_id}/results
		 * @param {string} start_date <p>Query from date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {string} end_date <p>Query to date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {Array<string>} region <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @param {Array<string>} type <p>Query by race type:</p><p>chase, flat, hurdle, nh_flat</p>
		 * @param {Array<string>} going <p>Query by going:</p><p>fast, firm, good, good_to_firm, good_to_soft, good_to_yielding, hard, heavy, holding, muddy, sloppy, slow, soft, soft_to_heavy, standard, standard_to_fast, standard_to_slow, very_soft, yielding, yielding_to_soft</p>
		 * @param {Array<string>} race_class <p>Query by class:</p><p>class_1, class_2, class_3, class_4, class_5, class_6, class_7</p>
		 * @param {number} min_distance_y <p>Query by minimum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} max_distance_y <p>Query by maximum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} age_band <p>Query by age band:</p><p>10yo+, 2-3yo, 2yo, 2yo+, 3-4yo, 3-5yo, 3-6yo, 3yo, 3yo+, 4-5yo, 4-6yo, 4-7yo, 4-8yo, 4yo, 4yo+, 5-6yo, 5-7yo, 5-8yo, 5yo, 5yo+, 6-7yo, 6yo, 6yo+, 7yo+, 8yo+, 9yo+</p>
		 * @param {Array<string>} sex_restriction <p>Query by sex restriction:</p><p>c&f, c&g, f, f&m, m, m&g</p>
		 * @param {number} limit Minimum: 1
		 *     Maximum: 50
		 * @param {number} skip Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ResultsPage} Successful Response
		 */
		Sire_results_v1_sires__sire_id__results_get(sire_id: string, start_date: string | null | undefined, end_date: string | null | undefined, region: Array<string> | null | undefined, course: Array<string> | null | undefined, type: Array<string> | null | undefined, going: Array<string> | null | undefined, race_class: Array<string> | null | undefined, min_distance_y: number | null | undefined, max_distance_y: number | null | undefined, age_band: Array<string> | null | undefined, sex_restriction: Array<string> | null | undefined, limit: number | null | undefined, skip: number | null | undefined): Observable<ResultsPage> {
			return this.http.get<ResultsPage>(this.baseUri + 'v1/sires/' + (sire_id == null ? '' : encodeURIComponent(sire_id)) + '/results&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&' + region?.map(z => `region=${encodeURIComponent(z)}`).join('&') + '&' + course?.map(z => `course=${encodeURIComponent(z)}`).join('&') + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&' + going?.map(z => `going=${encodeURIComponent(z)}`).join('&') + '&' + race_class?.map(z => `race_class=${encodeURIComponent(z)}`).join('&') + '&min_distance_y=' + min_distance_y + '&max_distance_y=' + max_distance_y + '&' + age_band?.map(z => `age_band=${encodeURIComponent(z)}`).join('&') + '&' + sex_restriction?.map(z => `sex_restriction=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&skip=' + skip, {});
		}

		/**
		 * Search Trainers
		 * Search trainers by name (STANDARD PLAN)
		 * Get v1/trainers/search
		 * @return {Trainers} Successful Response
		 */
		Search_trainers_v1_trainers_search_get(name: string): Observable<Trainers> {
			return this.http.get<Trainers>(this.baseUri + 'v1/trainers/search?name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Trainer Course Analysis
		 * Course statistics for a trainer (STANDARD PLAN)
		 * Get v1/trainers/{trainer_id}/analysis/courses
		 * @param {string} start_date <p>Query from date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {string} end_date <p>Query to date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {Array<string>} region <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @param {Array<string>} type <p>Query by race type:</p><p>chase, flat, hurdle, nh_flat</p>
		 * @param {Array<string>} going <p>Query by going:</p><p>fast, firm, good, good_to_firm, good_to_soft, good_to_yielding, hard, heavy, holding, muddy, sloppy, slow, soft, soft_to_heavy, standard, standard_to_fast, standard_to_slow, very_soft, yielding, yielding_to_soft</p>
		 * @param {Array<string>} race_class <p>Query by class:</p><p>class_1, class_2, class_3, class_4, class_5, class_6, class_7</p>
		 * @param {number} min_distance_y <p>Query by minimum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} max_distance_y <p>Query by maximum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} age_band <p>Query by age band:</p><p>10yo+, 2-3yo, 2yo, 2yo+, 3-4yo, 3-5yo, 3-6yo, 3yo, 3yo+, 4-5yo, 4-6yo, 4-7yo, 4-8yo, 4yo, 4yo+, 5-6yo, 5-7yo, 5-8yo, 5yo, 5yo+, 6-7yo, 6yo, 6yo+, 7yo+, 8yo+, 9yo+</p>
		 * @param {Array<string>} sex_restriction <p>Query by sex restriction:</p><p>c&f, c&g, f, f&m, m, m&g</p>
		 * @return {TrainerCourseAnalysis} Successful Response
		 */
		Trainer_course_analysis_v1_trainers__trainer_id__analysis_courses_get(trainer_id: string, start_date: string | null | undefined, end_date: string | null | undefined, region: Array<string> | null | undefined, course: Array<string> | null | undefined, type: Array<string> | null | undefined, going: Array<string> | null | undefined, race_class: Array<string> | null | undefined, min_distance_y: number | null | undefined, max_distance_y: number | null | undefined, age_band: Array<string> | null | undefined, sex_restriction: Array<string> | null | undefined): Observable<TrainerCourseAnalysis> {
			return this.http.get<TrainerCourseAnalysis>(this.baseUri + 'v1/trainers/' + (trainer_id == null ? '' : encodeURIComponent(trainer_id)) + '/analysis/courses&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&' + region?.map(z => `region=${encodeURIComponent(z)}`).join('&') + '&' + course?.map(z => `course=${encodeURIComponent(z)}`).join('&') + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&' + going?.map(z => `going=${encodeURIComponent(z)}`).join('&') + '&' + race_class?.map(z => `race_class=${encodeURIComponent(z)}`).join('&') + '&min_distance_y=' + min_distance_y + '&max_distance_y=' + max_distance_y + '&' + age_band?.map(z => `age_band=${encodeURIComponent(z)}`).join('&') + '&' + sex_restriction?.map(z => `sex_restriction=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Trainer Distance Analysis
		 * Distance statistics for a trainer (STANDARD PLAN)
		 * Get v1/trainers/{trainer_id}/analysis/distances
		 * @param {string} start_date <p>Query from date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {string} end_date <p>Query to date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {Array<string>} region <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @param {Array<string>} type <p>Query by race type:</p><p>chase, flat, hurdle, nh_flat</p>
		 * @param {Array<string>} going <p>Query by going:</p><p>fast, firm, good, good_to_firm, good_to_soft, good_to_yielding, hard, heavy, holding, muddy, sloppy, slow, soft, soft_to_heavy, standard, standard_to_fast, standard_to_slow, very_soft, yielding, yielding_to_soft</p>
		 * @param {Array<string>} race_class <p>Query by class:</p><p>class_1, class_2, class_3, class_4, class_5, class_6, class_7</p>
		 * @param {number} min_distance_y <p>Query by minimum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} max_distance_y <p>Query by maximum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} age_band <p>Query by age band:</p><p>10yo+, 2-3yo, 2yo, 2yo+, 3-4yo, 3-5yo, 3-6yo, 3yo, 3yo+, 4-5yo, 4-6yo, 4-7yo, 4-8yo, 4yo, 4yo+, 5-6yo, 5-7yo, 5-8yo, 5yo, 5yo+, 6-7yo, 6yo, 6yo+, 7yo+, 8yo+, 9yo+</p>
		 * @param {Array<string>} sex_restriction <p>Query by sex restriction:</p><p>c&f, c&g, f, f&m, m, m&g</p>
		 * @return {TrainerDistanceAnalysis} Successful Response
		 */
		Trainer_distance_analysis_v1_trainers__trainer_id__analysis_distances_get(trainer_id: string, start_date: string | null | undefined, end_date: string | null | undefined, region: Array<string> | null | undefined, course: Array<string> | null | undefined, type: Array<string> | null | undefined, going: Array<string> | null | undefined, race_class: Array<string> | null | undefined, min_distance_y: number | null | undefined, max_distance_y: number | null | undefined, age_band: Array<string> | null | undefined, sex_restriction: Array<string> | null | undefined): Observable<TrainerDistanceAnalysis> {
			return this.http.get<TrainerDistanceAnalysis>(this.baseUri + 'v1/trainers/' + (trainer_id == null ? '' : encodeURIComponent(trainer_id)) + '/analysis/distances&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&' + region?.map(z => `region=${encodeURIComponent(z)}`).join('&') + '&' + course?.map(z => `course=${encodeURIComponent(z)}`).join('&') + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&' + going?.map(z => `going=${encodeURIComponent(z)}`).join('&') + '&' + race_class?.map(z => `race_class=${encodeURIComponent(z)}`).join('&') + '&min_distance_y=' + min_distance_y + '&max_distance_y=' + max_distance_y + '&' + age_band?.map(z => `age_band=${encodeURIComponent(z)}`).join('&') + '&' + sex_restriction?.map(z => `sex_restriction=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Trainer Horse Age Analysis
		 * Horse age statistics for a trainer (STANDARD PLAN)
		 * Get v1/trainers/{trainer_id}/analysis/horse-age
		 * @param {string} start_date <p>Query from date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {string} end_date <p>Query to date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {Array<string>} region <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @param {Array<string>} type <p>Query by race type:</p><p>chase, flat, hurdle, nh_flat</p>
		 * @param {Array<string>} going <p>Query by going:</p><p>fast, firm, good, good_to_firm, good_to_soft, good_to_yielding, hard, heavy, holding, muddy, sloppy, slow, soft, soft_to_heavy, standard, standard_to_fast, standard_to_slow, very_soft, yielding, yielding_to_soft</p>
		 * @param {Array<string>} race_class <p>Query by class:</p><p>class_1, class_2, class_3, class_4, class_5, class_6, class_7</p>
		 * @param {number} min_distance_y <p>Query by minimum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} max_distance_y <p>Query by maximum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} age_band <p>Query by age band:</p><p>10yo+, 2-3yo, 2yo, 2yo+, 3-4yo, 3-5yo, 3-6yo, 3yo, 3yo+, 4-5yo, 4-6yo, 4-7yo, 4-8yo, 4yo, 4yo+, 5-6yo, 5-7yo, 5-8yo, 5yo, 5yo+, 6-7yo, 6yo, 6yo+, 7yo+, 8yo+, 9yo+</p>
		 * @param {Array<string>} sex_restriction <p>Query by sex restriction:</p><p>c&f, c&g, f, f&m, m, m&g</p>
		 * @return {TrainerHorseAgeAnalysis} Successful Response
		 */
		Trainer_horse_age_analysis_v1_trainers__trainer_id__analysis_horse_age_get(trainer_id: string, start_date: string | null | undefined, end_date: string | null | undefined, region: Array<string> | null | undefined, course: Array<string> | null | undefined, type: Array<string> | null | undefined, going: Array<string> | null | undefined, race_class: Array<string> | null | undefined, min_distance_y: number | null | undefined, max_distance_y: number | null | undefined, age_band: Array<string> | null | undefined, sex_restriction: Array<string> | null | undefined): Observable<TrainerHorseAgeAnalysis> {
			return this.http.get<TrainerHorseAgeAnalysis>(this.baseUri + 'v1/trainers/' + (trainer_id == null ? '' : encodeURIComponent(trainer_id)) + '/analysis/horse-age&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&' + region?.map(z => `region=${encodeURIComponent(z)}`).join('&') + '&' + course?.map(z => `course=${encodeURIComponent(z)}`).join('&') + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&' + going?.map(z => `going=${encodeURIComponent(z)}`).join('&') + '&' + race_class?.map(z => `race_class=${encodeURIComponent(z)}`).join('&') + '&min_distance_y=' + min_distance_y + '&max_distance_y=' + max_distance_y + '&' + age_band?.map(z => `age_band=${encodeURIComponent(z)}`).join('&') + '&' + sex_restriction?.map(z => `sex_restriction=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Trainer Jockey Analysis
		 * Jockey statistics for a trainer (STANDARD PLAN)
		 * Get v1/trainers/{trainer_id}/analysis/jockeys
		 * @param {string} start_date <p>Query from date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {string} end_date <p>Query to date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {Array<string>} region <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @param {Array<string>} type <p>Query by race type:</p><p>chase, flat, hurdle, nh_flat</p>
		 * @param {Array<string>} going <p>Query by going:</p><p>fast, firm, good, good_to_firm, good_to_soft, good_to_yielding, hard, heavy, holding, muddy, sloppy, slow, soft, soft_to_heavy, standard, standard_to_fast, standard_to_slow, very_soft, yielding, yielding_to_soft</p>
		 * @param {Array<string>} race_class <p>Query by class:</p><p>class_1, class_2, class_3, class_4, class_5, class_6, class_7</p>
		 * @param {number} min_distance_y <p>Query by minimum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} max_distance_y <p>Query by maximum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} age_band <p>Query by age band:</p><p>10yo+, 2-3yo, 2yo, 2yo+, 3-4yo, 3-5yo, 3-6yo, 3yo, 3yo+, 4-5yo, 4-6yo, 4-7yo, 4-8yo, 4yo, 4yo+, 5-6yo, 5-7yo, 5-8yo, 5yo, 5yo+, 6-7yo, 6yo, 6yo+, 7yo+, 8yo+, 9yo+</p>
		 * @param {Array<string>} sex_restriction <p>Query by sex restriction:</p><p>c&f, c&g, f, f&m, m, m&g</p>
		 * @return {TrainerJockeyAnalysis} Successful Response
		 */
		Trainer_jockey_analysis_v1_trainers__trainer_id__analysis_jockeys_get(trainer_id: string, start_date: string | null | undefined, end_date: string | null | undefined, region: Array<string> | null | undefined, course: Array<string> | null | undefined, type: Array<string> | null | undefined, going: Array<string> | null | undefined, race_class: Array<string> | null | undefined, min_distance_y: number | null | undefined, max_distance_y: number | null | undefined, age_band: Array<string> | null | undefined, sex_restriction: Array<string> | null | undefined): Observable<TrainerJockeyAnalysis> {
			return this.http.get<TrainerJockeyAnalysis>(this.baseUri + 'v1/trainers/' + (trainer_id == null ? '' : encodeURIComponent(trainer_id)) + '/analysis/jockeys&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&' + region?.map(z => `region=${encodeURIComponent(z)}`).join('&') + '&' + course?.map(z => `course=${encodeURIComponent(z)}`).join('&') + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&' + going?.map(z => `going=${encodeURIComponent(z)}`).join('&') + '&' + race_class?.map(z => `race_class=${encodeURIComponent(z)}`).join('&') + '&min_distance_y=' + min_distance_y + '&max_distance_y=' + max_distance_y + '&' + age_band?.map(z => `age_band=${encodeURIComponent(z)}`).join('&') + '&' + sex_restriction?.map(z => `sex_restriction=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Trainer Owner Analysis
		 * Owner statistics for a trainer (STANDARD PLAN)
		 * Get v1/trainers/{trainer_id}/analysis/owners
		 * @param {string} start_date <p>Query from date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {string} end_date <p>Query to date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {Array<string>} region <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @param {Array<string>} type <p>Query by race type:</p><p>chase, flat, hurdle, nh_flat</p>
		 * @param {Array<string>} going <p>Query by going:</p><p>fast, firm, good, good_to_firm, good_to_soft, good_to_yielding, hard, heavy, holding, muddy, sloppy, slow, soft, soft_to_heavy, standard, standard_to_fast, standard_to_slow, very_soft, yielding, yielding_to_soft</p>
		 * @param {Array<string>} race_class <p>Query by class:</p><p>class_1, class_2, class_3, class_4, class_5, class_6, class_7</p>
		 * @param {number} min_distance_y <p>Query by minimum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} max_distance_y <p>Query by maximum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} age_band <p>Query by age band:</p><p>10yo+, 2-3yo, 2yo, 2yo+, 3-4yo, 3-5yo, 3-6yo, 3yo, 3yo+, 4-5yo, 4-6yo, 4-7yo, 4-8yo, 4yo, 4yo+, 5-6yo, 5-7yo, 5-8yo, 5yo, 5yo+, 6-7yo, 6yo, 6yo+, 7yo+, 8yo+, 9yo+</p>
		 * @param {Array<string>} sex_restriction <p>Query by sex restriction:</p><p>c&f, c&g, f, f&m, m, m&g</p>
		 * @return {TrainerOwnerAnalysis} Successful Response
		 */
		Trainer_owner_analysis_v1_trainers__trainer_id__analysis_owners_get(trainer_id: string, start_date: string | null | undefined, end_date: string | null | undefined, region: Array<string> | null | undefined, course: Array<string> | null | undefined, type: Array<string> | null | undefined, going: Array<string> | null | undefined, race_class: Array<string> | null | undefined, min_distance_y: number | null | undefined, max_distance_y: number | null | undefined, age_band: Array<string> | null | undefined, sex_restriction: Array<string> | null | undefined): Observable<TrainerOwnerAnalysis> {
			return this.http.get<TrainerOwnerAnalysis>(this.baseUri + 'v1/trainers/' + (trainer_id == null ? '' : encodeURIComponent(trainer_id)) + '/analysis/owners&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&' + region?.map(z => `region=${encodeURIComponent(z)}`).join('&') + '&' + course?.map(z => `course=${encodeURIComponent(z)}`).join('&') + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&' + going?.map(z => `going=${encodeURIComponent(z)}`).join('&') + '&' + race_class?.map(z => `race_class=${encodeURIComponent(z)}`).join('&') + '&min_distance_y=' + min_distance_y + '&max_distance_y=' + max_distance_y + '&' + age_band?.map(z => `age_band=${encodeURIComponent(z)}`).join('&') + '&' + sex_restriction?.map(z => `sex_restriction=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Trainer Results
		 * Full historic results for a trainer (PRO PLAN)
		 * Get v1/trainers/{trainer_id}/results
		 * @param {string} start_date <p>Query from date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {string} end_date <p>Query to date with format YYYY-MM-DD (e.g. 2020-01-01)</p>
		 * @param {Array<string>} region <p>Query by region codes. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_regions_v1_courses_regions_get'>here</a>.</p><p>Note: If the course query parameter is specified, this will be ignored.</p>
		 * @param {Array<string>} course Query by course ids. Get the full list <a href='https://api.theracingapi.com/documentation#tag/Courses/operation/list_courses_v1_courses_get'>here</a>.
		 * @param {Array<string>} type <p>Query by race type:</p><p>chase, flat, hurdle, nh_flat</p>
		 * @param {Array<string>} going <p>Query by going:</p><p>fast, firm, good, good_to_firm, good_to_soft, good_to_yielding, hard, heavy, holding, muddy, sloppy, slow, soft, soft_to_heavy, standard, standard_to_fast, standard_to_slow, very_soft, yielding, yielding_to_soft</p>
		 * @param {Array<string>} race_class <p>Query by class:</p><p>class_1, class_2, class_3, class_4, class_5, class_6, class_7</p>
		 * @param {number} min_distance_y <p>Query by minimum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} max_distance_y <p>Query by maximum race distance (yards)</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} age_band <p>Query by age band:</p><p>10yo+, 2-3yo, 2yo, 2yo+, 3-4yo, 3-5yo, 3-6yo, 3yo, 3yo+, 4-5yo, 4-6yo, 4-7yo, 4-8yo, 4yo, 4yo+, 5-6yo, 5-7yo, 5-8yo, 5yo, 5yo+, 6-7yo, 6yo, 6yo+, 7yo+, 8yo+, 9yo+</p>
		 * @param {Array<string>} sex_restriction <p>Query by sex restriction:</p><p>c&f, c&g, f, f&m, m, m&g</p>
		 * @param {number} limit Minimum: 1
		 *     Maximum: 50
		 * @param {number} skip Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ResultsPage} Successful Response
		 */
		Trainer_results_v1_trainers__trainer_id__results_get(trainer_id: string, start_date: string | null | undefined, end_date: string | null | undefined, region: Array<string> | null | undefined, course: Array<string> | null | undefined, type: Array<string> | null | undefined, going: Array<string> | null | undefined, race_class: Array<string> | null | undefined, min_distance_y: number | null | undefined, max_distance_y: number | null | undefined, age_band: Array<string> | null | undefined, sex_restriction: Array<string> | null | undefined, limit: number | null | undefined, skip: number | null | undefined): Observable<ResultsPage> {
			return this.http.get<ResultsPage>(this.baseUri + 'v1/trainers/' + (trainer_id == null ? '' : encodeURIComponent(trainer_id)) + '/results&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&' + region?.map(z => `region=${encodeURIComponent(z)}`).join('&') + '&' + course?.map(z => `course=${encodeURIComponent(z)}`).join('&') + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&' + going?.map(z => `going=${encodeURIComponent(z)}`).join('&') + '&' + race_class?.map(z => `race_class=${encodeURIComponent(z)}`).join('&') + '&min_distance_y=' + min_distance_y + '&max_distance_y=' + max_distance_y + '&' + age_band?.map(z => `age_band=${encodeURIComponent(z)}`).join('&') + '&' + sex_restriction?.map(z => `sex_restriction=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&skip=' + skip, {});
		}
	}

}

