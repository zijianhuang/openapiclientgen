import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AcademicCertificateSchema {

		/** Required */
		CertificateData: AcademicCertificateSchemaCertificateData;

		/** Required */
		IssuedBy: AcademicCertificateSchemaIssuedBy;

		/** Required */
		IssuedTo: AcademicCertificateSchemaIssuedTo;

		/** Required */
		issueDate: string;

		/** Required */
		issuedAt: string;

		/**
		 * Required
		 * Min length: 1
		 */
		language: string;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;

		/**
		 * Required
		 * Min length: 1
		 */
		number: number;

		/**
		 * Required
		 * Min length: 1
		 */
		status: string;

		/** Required */
		type: string;

		/** Required */
		validFromDate: string;
	}
	export interface AcademicCertificateSchemaFormProperties {

		/** Required */
		issueDate: FormControl<string | null | undefined>,

		/** Required */
		issuedAt: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		language: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		number: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		status: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/** Required */
		validFromDate: FormControl<string | null | undefined>,
	}
	export function CreateAcademicCertificateSchemaFormGroup() {
		return new FormGroup<AcademicCertificateSchemaFormProperties>({
			issueDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			issuedAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			language: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			number: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			validFromDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AcademicCertificateSchemaCertificateData {

		/** Required */
		Examination: AcademicCertificateSchemaCertificateDataExamination;

		/** Required */
		Performance: AcademicCertificateSchemaCertificateDataPerformance;

		/** Required */
		School: AcademicCertificateSchemaCertificateDataSchool;
	}
	export interface AcademicCertificateSchemaCertificateDataFormProperties {
	}
	export function CreateAcademicCertificateSchemaCertificateDataFormGroup() {
		return new FormGroup<AcademicCertificateSchemaCertificateDataFormProperties>({
		});

	}

	export interface AcademicCertificateSchemaCertificateDataExamination {

		/**
		 * Required
		 * Min length: 1
		 */
		month: string;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;

		/**
		 * Required
		 * Min length: 1
		 */
		year: string;
	}
	export interface AcademicCertificateSchemaCertificateDataExaminationFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		month: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		year: FormControl<string | null | undefined>,
	}
	export function CreateAcademicCertificateSchemaCertificateDataExaminationFormGroup() {
		return new FormGroup<AcademicCertificateSchemaCertificateDataExaminationFormProperties>({
			month: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			year: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface AcademicCertificateSchemaCertificateDataPerformance {

		/** Required */
		AcademicCertificateSchemaCertificateDataPerformanceSubjects: Array<AcademicCertificateSchemaCertificateDataPerformanceSubjects>;

		/** Required */
		cgpa: string;

		/** Required */
		cgpaMax: string;

		/** Required */
		grade: string;

		/** Required */
		marksMax: string;

		/** Required */
		marksTotal: string;

		/** Required */
		percentage: string;

		/**
		 * Required
		 * Min length: 1
		 */
		result: string;

		/**
		 * Required
		 * Min length: 1
		 */
		resultDate: string;

		/** Required */
		updateDate: string;
	}
	export interface AcademicCertificateSchemaCertificateDataPerformanceFormProperties {

		/** Required */
		cgpa: FormControl<string | null | undefined>,

		/** Required */
		cgpaMax: FormControl<string | null | undefined>,

		/** Required */
		grade: FormControl<string | null | undefined>,

		/** Required */
		marksMax: FormControl<string | null | undefined>,

		/** Required */
		marksTotal: FormControl<string | null | undefined>,

		/** Required */
		percentage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		result: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		resultDate: FormControl<string | null | undefined>,

		/** Required */
		updateDate: FormControl<string | null | undefined>,
	}
	export function CreateAcademicCertificateSchemaCertificateDataPerformanceFormGroup() {
		return new FormGroup<AcademicCertificateSchemaCertificateDataPerformanceFormProperties>({
			cgpa: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cgpaMax: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			grade: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			marksMax: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			marksTotal: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			percentage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			result: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			resultDate: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			updateDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AcademicCertificateSchemaCertificateDataPerformanceSubjects {

		/**
		 * Required
		 * Min length: 1
		 */
		code: string;

		/** Required */
		gp: string;

		/** Required */
		gpMax: string;

		/**
		 * Required
		 * Min length: 1
		 */
		grade: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		marksMax: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		marksMaxPractical: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		marksMaxTheory: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		marksPractical: number;

		/**
		 * Required
		 * Min length: 1
		 */
		marksTheory: number;

		/**
		 * Required
		 * Min length: 1
		 */
		marksTotal: number;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
	}
	export interface AcademicCertificateSchemaCertificateDataPerformanceSubjectsFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		code: FormControl<string | null | undefined>,

		/** Required */
		gp: FormControl<string | null | undefined>,

		/** Required */
		gpMax: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		grade: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		marksMax: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		marksMaxPractical: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		marksMaxTheory: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		marksPractical: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		marksTheory: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		marksTotal: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAcademicCertificateSchemaCertificateDataPerformanceSubjectsFormGroup() {
		return new FormGroup<AcademicCertificateSchemaCertificateDataPerformanceSubjectsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			gp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gpMax: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			grade: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			marksMax: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			marksMaxPractical: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			marksMaxTheory: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			marksPractical: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			marksTheory: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			marksTotal: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface AcademicCertificateSchemaCertificateDataSchool {

		/**
		 * Required
		 * Min length: 1
		 */
		code: string;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
	}
	export interface AcademicCertificateSchemaCertificateDataSchoolFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAcademicCertificateSchemaCertificateDataSchoolFormGroup() {
		return new FormGroup<AcademicCertificateSchemaCertificateDataSchoolFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface AcademicCertificateSchemaIssuedBy {

		/** Required */
		Organization: AcademicCertificateSchemaIssuedByOrganization;
	}
	export interface AcademicCertificateSchemaIssuedByFormProperties {
	}
	export function CreateAcademicCertificateSchemaIssuedByFormGroup() {
		return new FormGroup<AcademicCertificateSchemaIssuedByFormProperties>({
		});

	}

	export interface AcademicCertificateSchemaIssuedByOrganization {

		/** Required */
		Address: AcademicCertificateSchemaIssuedByOrganizationAddress;

		/** Required */
		code: string;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;

		/** Required */
		tin: string;

		/**
		 * Required
		 * Min length: 1
		 */
		type: string;

		/** Required */
		uid: string;
	}
	export interface AcademicCertificateSchemaIssuedByOrganizationFormProperties {

		/** Required */
		code: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		tin: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		type: FormControl<string | null | undefined>,

		/** Required */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateAcademicCertificateSchemaIssuedByOrganizationFormGroup() {
		return new FormGroup<AcademicCertificateSchemaIssuedByOrganizationFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			tin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			uid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AcademicCertificateSchemaIssuedByOrganizationAddress {

		/**
		 * Required
		 * Min length: 1
		 */
		country: string;

		/** Required */
		district: string;

		/** Required */
		house: string;

		/** Required */
		landmark: string;

		/** Required */
		line1: string;

		/** Required */
		line2: string;

		/** Required */
		locality: string;

		/** Required */
		pin: string;

		/** Required */
		state: string;

		/** Required */
		type: string;

		/** Required */
		vtc: string;
	}
	export interface AcademicCertificateSchemaIssuedByOrganizationAddressFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		country: FormControl<string | null | undefined>,

		/** Required */
		district: FormControl<string | null | undefined>,

		/** Required */
		house: FormControl<string | null | undefined>,

		/** Required */
		landmark: FormControl<string | null | undefined>,

		/** Required */
		line1: FormControl<string | null | undefined>,

		/** Required */
		line2: FormControl<string | null | undefined>,

		/** Required */
		locality: FormControl<string | null | undefined>,

		/** Required */
		pin: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/** Required */
		vtc: FormControl<string | null | undefined>,
	}
	export function CreateAcademicCertificateSchemaIssuedByOrganizationAddressFormGroup() {
		return new FormGroup<AcademicCertificateSchemaIssuedByOrganizationAddressFormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			district: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			house: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			landmark: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			line1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			line2: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			locality: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vtc: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AcademicCertificateSchemaIssuedTo {

		/** Required */
		Person: AcademicCertificateSchemaIssuedToPerson;
	}
	export interface AcademicCertificateSchemaIssuedToFormProperties {
	}
	export function CreateAcademicCertificateSchemaIssuedToFormGroup() {
		return new FormGroup<AcademicCertificateSchemaIssuedToFormProperties>({
		});

	}

	export interface AcademicCertificateSchemaIssuedToPerson {

		/** Required */
		Address: AcademicCertificateSchemaIssuedToPersonAddress;

		/** Required */
		Photo: AcademicCertificateSchemaIssuedToPersonPhoto;

		/**
		 * Required
		 * Min length: 1
		 */
		category: string;

		/** Required */
		disabilityStatus: string;

		/**
		 * Required
		 * Min length: 1
		 */
		dob: string;

		/** Required */
		email: string;

		/** Required */
		gender: string;

		/** Required */
		maritalStatus: string;

		/**
		 * Required
		 * Min length: 1
		 */
		motherName: string;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;

		/** Required */
		phone: string;

		/** Required */
		religion: string;

		/**
		 * Required
		 * Min length: 1
		 */
		swd: string;

		/**
		 * Required
		 * Min length: 1
		 */
		swdIndicator: string;

		/** Required */
		title: string;

		/** Required */
		uid: string;
	}
	export interface AcademicCertificateSchemaIssuedToPersonFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		category: FormControl<string | null | undefined>,

		/** Required */
		disabilityStatus: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		dob: FormControl<string | null | undefined>,

		/** Required */
		email: FormControl<string | null | undefined>,

		/** Required */
		gender: FormControl<string | null | undefined>,

		/** Required */
		maritalStatus: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		motherName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		phone: FormControl<string | null | undefined>,

		/** Required */
		religion: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		swd: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		swdIndicator: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,

		/** Required */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateAcademicCertificateSchemaIssuedToPersonFormGroup() {
		return new FormGroup<AcademicCertificateSchemaIssuedToPersonFormProperties>({
			category: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			disabilityStatus: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dob: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gender: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maritalStatus: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			motherName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			phone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			religion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			swd: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			swdIndicator: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AcademicCertificateSchemaIssuedToPersonAddress {

		/**
		 * Required
		 * Min length: 1
		 */
		country: string;

		/** Required */
		district: string;

		/** Required */
		house: string;

		/** Required */
		landmark: string;

		/** Required */
		line1: string;

		/** Required */
		line2: string;

		/** Required */
		locality: string;

		/** Required */
		pin: string;

		/** Required */
		state: string;

		/**
		 * Required
		 * Min length: 1
		 */
		type: string;

		/** Required */
		vtc: string;
	}
	export interface AcademicCertificateSchemaIssuedToPersonAddressFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		country: FormControl<string | null | undefined>,

		/** Required */
		district: FormControl<string | null | undefined>,

		/** Required */
		house: FormControl<string | null | undefined>,

		/** Required */
		landmark: FormControl<string | null | undefined>,

		/** Required */
		line1: FormControl<string | null | undefined>,

		/** Required */
		line2: FormControl<string | null | undefined>,

		/** Required */
		locality: FormControl<string | null | undefined>,

		/** Required */
		pin: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		type: FormControl<string | null | undefined>,

		/** Required */
		vtc: FormControl<string | null | undefined>,
	}
	export function CreateAcademicCertificateSchemaIssuedToPersonAddressFormGroup() {
		return new FormGroup<AcademicCertificateSchemaIssuedToPersonAddressFormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			district: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			house: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			landmark: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			line1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			line2: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			locality: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			vtc: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AcademicCertificateSchemaIssuedToPersonPhoto {

		/** Required */
		format: string;
	}
	export interface AcademicCertificateSchemaIssuedToPersonPhotoFormProperties {

		/** Required */
		format: FormControl<string | null | undefined>,
	}
	export function CreateAcademicCertificateSchemaIssuedToPersonPhotoFormGroup() {
		return new FormGroup<AcademicCertificateSchemaIssuedToPersonPhotoFormProperties>({
			format: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CasteCertificateSchema {

		/** Required */
		CertificateData: CasteCertificateSchemaCertificateData;

		/** Required */
		IssuedBy: CasteCertificateSchemaIssuedBy;

		/** Required */
		IssuedTo: CasteCertificateSchemaIssuedTo;
		expiryDate?: string | null;

		/** Required */
		issueDate: string;

		/** Required */
		issuedAt: string;

		/**
		 * Required
		 * Min length: 1
		 */
		language: string;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;

		/**
		 * Required
		 * Min length: 1
		 */
		number: number;

		/**
		 * Required
		 * Min length: 1
		 */
		status: string;

		/** Required */
		type: string;

		/** Required */
		validFromDate: string;
	}
	export interface CasteCertificateSchemaFormProperties {
		expiryDate: FormControl<string | null | undefined>,

		/** Required */
		issueDate: FormControl<string | null | undefined>,

		/** Required */
		issuedAt: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		language: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		number: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		status: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/** Required */
		validFromDate: FormControl<string | null | undefined>,
	}
	export function CreateCasteCertificateSchemaFormGroup() {
		return new FormGroup<CasteCertificateSchemaFormProperties>({
			expiryDate: new FormControl<string | null | undefined>(undefined),
			issueDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			issuedAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			language: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			number: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			validFromDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CasteCertificateSchemaCertificateData {

		/** Required */
		category: CasteCertificateSchemaCertificateDataCategory;

		/** Required */
		description: string;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;

		/** Required */
		subCategory: string;
	}
	export interface CasteCertificateSchemaCertificateDataFormProperties {

		/** Required */
		category: FormControl<CasteCertificateSchemaCertificateDataCategory | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		subCategory: FormControl<string | null | undefined>,
	}
	export function CreateCasteCertificateSchemaCertificateDataFormGroup() {
		return new FormGroup<CasteCertificateSchemaCertificateDataFormProperties>({
			category: new FormControl<CasteCertificateSchemaCertificateDataCategory | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			subCategory: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CasteCertificateSchemaCertificateDataCategory { SC = 'SC', ST = 'ST', OBC = 'OBC', GC = 'GC' }

	export interface CasteCertificateSchemaIssuedBy {

		/** Required */
		Organization: CasteCertificateSchemaIssuedByOrganization;
	}
	export interface CasteCertificateSchemaIssuedByFormProperties {
	}
	export function CreateCasteCertificateSchemaIssuedByFormGroup() {
		return new FormGroup<CasteCertificateSchemaIssuedByFormProperties>({
		});

	}

	export interface CasteCertificateSchemaIssuedByOrganization {

		/** Required */
		Address: CasteCertificateSchemaIssuedByOrganizationAddress;

		/** Required */
		code: string;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;

		/** Required */
		tin: string;

		/**
		 * Required
		 * Min length: 1
		 */
		type: string;

		/** Required */
		uid: string;
	}
	export interface CasteCertificateSchemaIssuedByOrganizationFormProperties {

		/** Required */
		code: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		tin: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		type: FormControl<string | null | undefined>,

		/** Required */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateCasteCertificateSchemaIssuedByOrganizationFormGroup() {
		return new FormGroup<CasteCertificateSchemaIssuedByOrganizationFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			tin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			uid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CasteCertificateSchemaIssuedByOrganizationAddress {

		/**
		 * Required
		 * Min length: 1
		 */
		country: string;

		/** Required */
		district: string;

		/** Required */
		house: string;

		/** Required */
		landmark: string;

		/** Required */
		line1: string;

		/** Required */
		line2: string;

		/** Required */
		locality: string;

		/** Required */
		pin: string;

		/** Required */
		state: string;

		/** Required */
		type: string;

		/** Required */
		vtc: string;
	}
	export interface CasteCertificateSchemaIssuedByOrganizationAddressFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		country: FormControl<string | null | undefined>,

		/** Required */
		district: FormControl<string | null | undefined>,

		/** Required */
		house: FormControl<string | null | undefined>,

		/** Required */
		landmark: FormControl<string | null | undefined>,

		/** Required */
		line1: FormControl<string | null | undefined>,

		/** Required */
		line2: FormControl<string | null | undefined>,

		/** Required */
		locality: FormControl<string | null | undefined>,

		/** Required */
		pin: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/** Required */
		vtc: FormControl<string | null | undefined>,
	}
	export function CreateCasteCertificateSchemaIssuedByOrganizationAddressFormGroup() {
		return new FormGroup<CasteCertificateSchemaIssuedByOrganizationAddressFormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			district: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			house: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			landmark: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			line1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			line2: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			locality: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vtc: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CasteCertificateSchemaIssuedTo {

		/** Required */
		Person: CasteCertificateSchemaIssuedToPerson;
	}
	export interface CasteCertificateSchemaIssuedToFormProperties {
	}
	export function CreateCasteCertificateSchemaIssuedToFormGroup() {
		return new FormGroup<CasteCertificateSchemaIssuedToFormProperties>({
		});

	}

	export interface CasteCertificateSchemaIssuedToPerson {

		/** Required */
		Address: CasteCertificateSchemaIssuedToPersonAddress;

		/** Required */
		Photo: CasteCertificateSchemaIssuedToPersonPhoto;

		/**
		 * Required
		 * Min length: 1
		 */
		dob: string;

		/** Required */
		email: string;

		/** Required */
		gender: string;

		/** Required */
		maritalStatus: string;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;

		/** Required */
		phone: string;

		/** Required */
		religion: string;

		/**
		 * Required
		 * Min length: 1
		 */
		swd: string;

		/**
		 * Required
		 * Min length: 1
		 */
		swdIndicator: string;

		/** Required */
		title: string;

		/** Required */
		uid: string;
	}
	export interface CasteCertificateSchemaIssuedToPersonFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		dob: FormControl<string | null | undefined>,

		/** Required */
		email: FormControl<string | null | undefined>,

		/** Required */
		gender: FormControl<string | null | undefined>,

		/** Required */
		maritalStatus: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		phone: FormControl<string | null | undefined>,

		/** Required */
		religion: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		swd: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		swdIndicator: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,

		/** Required */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateCasteCertificateSchemaIssuedToPersonFormGroup() {
		return new FormGroup<CasteCertificateSchemaIssuedToPersonFormProperties>({
			dob: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gender: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maritalStatus: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			phone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			religion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			swd: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			swdIndicator: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CasteCertificateSchemaIssuedToPersonAddress {

		/**
		 * Required
		 * Min length: 1
		 */
		country: string;

		/** Required */
		district: string;

		/** Required */
		house: string;

		/** Required */
		landmark: string;

		/** Required */
		line1: string;

		/** Required */
		line2: string;

		/** Required */
		locality: string;

		/** Required */
		pin: string;

		/** Required */
		state: string;

		/**
		 * Required
		 * Min length: 1
		 */
		type: string;

		/** Required */
		vtc: string;
	}
	export interface CasteCertificateSchemaIssuedToPersonAddressFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		country: FormControl<string | null | undefined>,

		/** Required */
		district: FormControl<string | null | undefined>,

		/** Required */
		house: FormControl<string | null | undefined>,

		/** Required */
		landmark: FormControl<string | null | undefined>,

		/** Required */
		line1: FormControl<string | null | undefined>,

		/** Required */
		line2: FormControl<string | null | undefined>,

		/** Required */
		locality: FormControl<string | null | undefined>,

		/** Required */
		pin: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		type: FormControl<string | null | undefined>,

		/** Required */
		vtc: FormControl<string | null | undefined>,
	}
	export function CreateCasteCertificateSchemaIssuedToPersonAddressFormGroup() {
		return new FormGroup<CasteCertificateSchemaIssuedToPersonAddressFormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			district: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			house: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			landmark: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			line1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			line2: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			locality: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			vtc: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CasteCertificateSchemaIssuedToPersonPhoto {

		/** Required */
		format: string;
	}
	export interface CasteCertificateSchemaIssuedToPersonPhotoFormProperties {

		/** Required */
		format: FormControl<string | null | undefined>,
	}
	export function CreateCasteCertificateSchemaIssuedToPersonPhotoFormGroup() {
		return new FormGroup<CasteCertificateSchemaIssuedToPersonPhotoFormProperties>({
			format: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConsentArtifactSchema {

		/** Required */
		consent: ConsentArtifactSchemaConsent;

		/** Required */
		signature: ConsentArtifactSchemaSignature;
	}
	export interface ConsentArtifactSchemaFormProperties {
	}
	export function CreateConsentArtifactSchemaFormGroup() {
		return new FormGroup<ConsentArtifactSchemaFormProperties>({
		});

	}

	export interface ConsentArtifactSchemaConsent {

		/**
		 * A unique consent id in UUID format.
		 * Required
		 * Min length: 1
		 */
		consentId: string;

		/** Required */
		data: ConsentArtifactSchemaConsentData;

		/** Required */
		dataConsumer: ConsentArtifactSchemaConsentDataConsumer;

		/** Required */
		dataProvider: ConsentArtifactSchemaConsentDataProvider;

		/** Required */
		permission: ConsentArtifactSchemaConsentPermission;

		/** Required */
		purpose: ConsentArtifactSchemaConsentPurpose;

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 * Min length: 1
		 */
		timestamp: Date;

		/** Required */
		user: ConsentArtifactSchemaConsentUser;
	}
	export interface ConsentArtifactSchemaConsentFormProperties {

		/**
		 * A unique consent id in UUID format.
		 * Required
		 * Min length: 1
		 */
		consentId: FormControl<string | null | undefined>,

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 * Min length: 1
		 */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateConsentArtifactSchemaConsentFormGroup() {
		return new FormGroup<ConsentArtifactSchemaConsentFormProperties>({
			consentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface ConsentArtifactSchemaConsentData {

		/**
		 * Required
		 * Min length: 1
		 */
		id: string;
	}
	export interface ConsentArtifactSchemaConsentDataFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateConsentArtifactSchemaConsentDataFormGroup() {
		return new FormGroup<ConsentArtifactSchemaConsentDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface ConsentArtifactSchemaConsentDataConsumer {

		/**
		 * Required
		 * Min length: 1
		 */
		id: string;
	}
	export interface ConsentArtifactSchemaConsentDataConsumerFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateConsentArtifactSchemaConsentDataConsumerFormGroup() {
		return new FormGroup<ConsentArtifactSchemaConsentDataConsumerFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface ConsentArtifactSchemaConsentDataProvider {

		/**
		 * Required
		 * Min length: 1
		 */
		id: string;
	}
	export interface ConsentArtifactSchemaConsentDataProviderFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateConsentArtifactSchemaConsentDataProviderFormGroup() {
		return new FormGroup<ConsentArtifactSchemaConsentDataProviderFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface ConsentArtifactSchemaConsentPermission {

		/**
		 * Required
		 * Min length: 1
		 */
		access: string;

		/** Required */
		dateRange: ConsentArtifactSchemaConsentPermissionDateRange;

		/** Required */
		frequency: ConsentArtifactSchemaConsentPermissionFrequency;
	}
	export interface ConsentArtifactSchemaConsentPermissionFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		access: FormControl<string | null | undefined>,
	}
	export function CreateConsentArtifactSchemaConsentPermissionFormGroup() {
		return new FormGroup<ConsentArtifactSchemaConsentPermissionFormProperties>({
			access: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface ConsentArtifactSchemaConsentPermissionDateRange {

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 * Min length: 1
		 */
		from: Date;

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 * Min length: 1
		 */
		to: Date;
	}
	export interface ConsentArtifactSchemaConsentPermissionDateRangeFormProperties {

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 * Min length: 1
		 */
		from: FormControl<Date | null | undefined>,

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 * Min length: 1
		 */
		to: FormControl<Date | null | undefined>,
	}
	export function CreateConsentArtifactSchemaConsentPermissionDateRangeFormGroup() {
		return new FormGroup<ConsentArtifactSchemaConsentPermissionDateRangeFormProperties>({
			from: new FormControl<Date | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			to: new FormControl<Date | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface ConsentArtifactSchemaConsentPermissionFrequency {

		/**
		 * Required
		 * Type: double
		 */
		repeats: number;

		/**
		 * Required
		 * Min length: 1
		 */
		unit: string;

		/**
		 * Required
		 * Type: double
		 */
		value: number;
	}
	export interface ConsentArtifactSchemaConsentPermissionFrequencyFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		repeats: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		unit: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateConsentArtifactSchemaConsentPermissionFrequencyFormGroup() {
		return new FormGroup<ConsentArtifactSchemaConsentPermissionFrequencyFormProperties>({
			repeats: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConsentArtifactSchemaConsentPurpose {

		/**
		 * Required
		 * Min length: 1
		 */
		description: string;
	}
	export interface ConsentArtifactSchemaConsentPurposeFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateConsentArtifactSchemaConsentPurposeFormGroup() {
		return new FormGroup<ConsentArtifactSchemaConsentPurposeFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface ConsentArtifactSchemaConsentUser {

		/**
		 * Required
		 * Min length: 1
		 */
		email: string;

		/**
		 * Required
		 * Min length: 1
		 */
		idNumber: string;

		/**
		 * Required
		 * Min length: 1
		 */
		idType: string;

		/**
		 * Required
		 * Min length: 1
		 */
		mobile: string;
	}
	export interface ConsentArtifactSchemaConsentUserFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		idNumber: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		idType: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		mobile: FormControl<string | null | undefined>,
	}
	export function CreateConsentArtifactSchemaConsentUserFormGroup() {
		return new FormGroup<ConsentArtifactSchemaConsentUserFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			idNumber: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			idType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			mobile: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface ConsentArtifactSchemaSignature {

		/** Required */
		signature: string;
	}
	export interface ConsentArtifactSchemaSignatureFormProperties {

		/** Required */
		signature: FormControl<string | null | undefined>,
	}
	export function CreateConsentArtifactSchemaSignatureFormGroup() {
		return new FormGroup<ConsentArtifactSchemaSignatureFormProperties>({
			signature: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Community Certificate
		 * API to verify Community Certificate.
		 * Post cmcer/certificate
		 * @param {CmcerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Cmcer(requestBody: CmcerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'cmcer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Conversion Certificate
		 * API to verify Conversion Certificate.
		 * Post cncer/certificate
		 * @param {CncerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Cncer(requestBody: CncerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'cncer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Caste Certificate
		 * API to verify Caste Certificate.
		 * Post ctcer/certificate
		 * @param {CtcerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Ctcer(requestBody: CtcerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ctcer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Domicile Certificate
		 * API to verify Domicile Certificate.
		 * Post dmcer/certificate
		 * @param {DmcerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Dmcer(requestBody: DmcerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'dmcer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Dependency Certificate
		 * API to verify Dependency Certificate.
		 * Post dpcer/certificate
		 * @param {DpcerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Dpcer(requestBody: DpcerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'dpcer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Destitute Certificate
		 * API to verify Destitute Certificate.
		 * Post dscer/certificate
		 * @param {DscerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Dscer(requestBody: DscerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'dscer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Family Membership Certificate
		 * API to verify Family Membership Certificate.
		 * Post fmcer/certificate
		 * @param {FmcerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Fmcer(requestBody: FmcerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'fmcer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Identification Certificate
		 * API to verify Identification Certificate.
		 * Post idcer/certificate
		 * @param {IdcerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Idcer(requestBody: IdcerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'idcer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Inter-Caste Marriage Certificate
		 * API to verify Inter-Caste Marriage Certificate.
		 * Post imcer/certificate
		 * @param {ImcerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Imcer(requestBody: ImcerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'imcer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Income Certificate
		 * API to verify Income Certificate.
		 * Post incer/certificate
		 * @param {IncerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Incer(requestBody: IncerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'incer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Life Certificate
		 * API to verify Life Certificate.
		 * Post lfcer/certificate
		 * @param {LfcerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Lfcer(requestBody: LfcerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lfcer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Legal Heir Certificate
		 * API to verify Legal Heir Certificate.
		 * Post lhcer/certificate
		 * @param {LhcerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Lhcer(requestBody: LhcerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lhcer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Location Certificate
		 * API to verify Location Certificate.
		 * Post locer/certificate
		 * @param {LocerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Locer(requestBody: LocerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'locer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Minority Certificate
		 * API to verify Minority Certificate.
		 * Post mncer/certificate
		 * @param {MncerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Mncer(requestBody: MncerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'mncer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Non-Remarriage Certificate
		 * API to verify Non-Remarriage Certificate.
		 * Post nrcer/certificate
		 * @param {NrcerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Nrcer(requestBody: NrcerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'nrcer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Nativity Certificate
		 * API to verify Nativity Certificate.
		 * Post ntcer/certificate
		 * @param {NtcerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Ntcer(requestBody: NtcerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ntcer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * One and the Same Certificate
		 * API to verify One and the Same Certificate.
		 * Post oscer/certificate
		 * @param {OscerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Oscer(requestBody: OscerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'oscer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Possession and Non-Attachment Certificate
		 * API to verify Possession and Non-Attachment Certificate.
		 * Post pncer/certificate
		 * @param {PncerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Pncer(requestBody: PncerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pncer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Possession Certificate
		 * API to verify Possession Certificate.
		 * Post pscer/certificate
		 * @param {PscerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Pscer(requestBody: PscerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pscer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Relationship Certificate
		 * API to verify Relationship Certificate.
		 * Post rlcer/certificate
		 * @param {RlcerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Rlcer(requestBody: RlcerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'rlcer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Residence Certificate
		 * API to verify Residence Certificate.
		 * Post rscer/certificate
		 * @param {RscerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Rscer(requestBody: RscerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'rscer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Solvency Certificate
		 * API to verify Solvency Certificate.
		 * Post slcer/certificate
		 * @param {SlcerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Slcer(requestBody: SlcerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'slcer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Valuation Certificate
		 * API to verify Valuation Certificate.
		 * Post vlcer/certificate
		 * @param {VlcerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Vlcer(requestBody: VlcerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'vlcer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Widow-Widower Certificate
		 * API to verify Widow-Widower Certificate.
		 * Post wwcer/certificate
		 * @param {WwcerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Wwcer(requestBody: WwcerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'wwcer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface CmcerPostBody {
		certificateParameters?: CmcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: CmcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface CmcerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<CmcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateCmcerPostBodyFormGroup() {
		return new FormGroup<CmcerPostBodyFormProperties>({
			format: new FormControl<CmcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CmcerPostBodyCertificateParameters {

		/**
		 * Application Number
		 * Required
		 */
		aplno: string;

		/**
		 * Certificate Number
		 * Required
		 */
		certno: string;

		/**
		 * Security Code
		 * Required
		 */
		sccd: string;
	}
	export interface CmcerPostBodyCertificateParametersFormProperties {

		/**
		 * Application Number
		 * Required
		 */
		aplno: FormControl<string | null | undefined>,

		/**
		 * Certificate Number
		 * Required
		 */
		certno: FormControl<string | null | undefined>,

		/**
		 * Security Code
		 * Required
		 */
		sccd: FormControl<string | null | undefined>,
	}
	export function CreateCmcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<CmcerPostBodyCertificateParametersFormProperties>({
			aplno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sccd: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CmcerPostBodyFormat { pdf = 'pdf' }

	export interface CncerPostBody {
		certificateParameters?: CncerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: CmcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface CncerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<CmcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateCncerPostBodyFormGroup() {
		return new FormGroup<CncerPostBodyFormProperties>({
			format: new FormControl<CmcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CncerPostBodyCertificateParameters {

		/**
		 * Application Number
		 * Required
		 */
		aplno: string;

		/**
		 * Certificate Number
		 * Required
		 */
		certno: string;

		/**
		 * Security Code
		 * Required
		 */
		sccd: string;
	}
	export interface CncerPostBodyCertificateParametersFormProperties {

		/**
		 * Application Number
		 * Required
		 */
		aplno: FormControl<string | null | undefined>,

		/**
		 * Certificate Number
		 * Required
		 */
		certno: FormControl<string | null | undefined>,

		/**
		 * Security Code
		 * Required
		 */
		sccd: FormControl<string | null | undefined>,
	}
	export function CreateCncerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<CncerPostBodyCertificateParametersFormProperties>({
			aplno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sccd: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CtcerPostBody {
		certificateParameters?: CtcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: CmcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface CtcerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<CmcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateCtcerPostBodyFormGroup() {
		return new FormGroup<CtcerPostBodyFormProperties>({
			format: new FormControl<CmcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CtcerPostBodyCertificateParameters {

		/**
		 * Application Number
		 * Required
		 */
		aplno: string;

		/**
		 * Certificate Number
		 * Required
		 */
		certno: string;

		/**
		 * Security Code
		 * Required
		 */
		sccd: string;
	}
	export interface CtcerPostBodyCertificateParametersFormProperties {

		/**
		 * Application Number
		 * Required
		 */
		aplno: FormControl<string | null | undefined>,

		/**
		 * Certificate Number
		 * Required
		 */
		certno: FormControl<string | null | undefined>,

		/**
		 * Security Code
		 * Required
		 */
		sccd: FormControl<string | null | undefined>,
	}
	export function CreateCtcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<CtcerPostBodyCertificateParametersFormProperties>({
			aplno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sccd: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DmcerPostBody {
		certificateParameters?: DmcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: CmcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface DmcerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<CmcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateDmcerPostBodyFormGroup() {
		return new FormGroup<DmcerPostBodyFormProperties>({
			format: new FormControl<CmcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DmcerPostBodyCertificateParameters {

		/**
		 * Application Number
		 * Required
		 */
		aplno: string;

		/**
		 * Certificate Number
		 * Required
		 */
		certno: string;

		/**
		 * Security Code
		 * Required
		 */
		sccd: string;
	}
	export interface DmcerPostBodyCertificateParametersFormProperties {

		/**
		 * Application Number
		 * Required
		 */
		aplno: FormControl<string | null | undefined>,

		/**
		 * Certificate Number
		 * Required
		 */
		certno: FormControl<string | null | undefined>,

		/**
		 * Security Code
		 * Required
		 */
		sccd: FormControl<string | null | undefined>,
	}
	export function CreateDmcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<DmcerPostBodyCertificateParametersFormProperties>({
			aplno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sccd: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DpcerPostBody {
		certificateParameters?: DpcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: CmcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface DpcerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<CmcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateDpcerPostBodyFormGroup() {
		return new FormGroup<DpcerPostBodyFormProperties>({
			format: new FormControl<CmcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DpcerPostBodyCertificateParameters {

		/**
		 * Application Number
		 * Required
		 */
		aplno: string;

		/**
		 * Certificate Number
		 * Required
		 */
		certno: string;

		/**
		 * Security Code
		 * Required
		 */
		sccd: string;
	}
	export interface DpcerPostBodyCertificateParametersFormProperties {

		/**
		 * Application Number
		 * Required
		 */
		aplno: FormControl<string | null | undefined>,

		/**
		 * Certificate Number
		 * Required
		 */
		certno: FormControl<string | null | undefined>,

		/**
		 * Security Code
		 * Required
		 */
		sccd: FormControl<string | null | undefined>,
	}
	export function CreateDpcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<DpcerPostBodyCertificateParametersFormProperties>({
			aplno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sccd: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DscerPostBody {
		certificateParameters?: DscerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: CmcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface DscerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<CmcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateDscerPostBodyFormGroup() {
		return new FormGroup<DscerPostBodyFormProperties>({
			format: new FormControl<CmcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DscerPostBodyCertificateParameters {

		/**
		 * Application Number
		 * Required
		 */
		aplno: string;

		/**
		 * Certificate Number
		 * Required
		 */
		certno: string;

		/**
		 * Security Code
		 * Required
		 */
		sccd: string;
	}
	export interface DscerPostBodyCertificateParametersFormProperties {

		/**
		 * Application Number
		 * Required
		 */
		aplno: FormControl<string | null | undefined>,

		/**
		 * Certificate Number
		 * Required
		 */
		certno: FormControl<string | null | undefined>,

		/**
		 * Security Code
		 * Required
		 */
		sccd: FormControl<string | null | undefined>,
	}
	export function CreateDscerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<DscerPostBodyCertificateParametersFormProperties>({
			aplno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sccd: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FmcerPostBody {
		certificateParameters?: FmcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: CmcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface FmcerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<CmcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateFmcerPostBodyFormGroup() {
		return new FormGroup<FmcerPostBodyFormProperties>({
			format: new FormControl<CmcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FmcerPostBodyCertificateParameters {

		/**
		 * Application Number
		 * Required
		 */
		aplno: string;

		/**
		 * Certificate Number
		 * Required
		 */
		certno: string;

		/**
		 * Security Code
		 * Required
		 */
		sccd: string;
	}
	export interface FmcerPostBodyCertificateParametersFormProperties {

		/**
		 * Application Number
		 * Required
		 */
		aplno: FormControl<string | null | undefined>,

		/**
		 * Certificate Number
		 * Required
		 */
		certno: FormControl<string | null | undefined>,

		/**
		 * Security Code
		 * Required
		 */
		sccd: FormControl<string | null | undefined>,
	}
	export function CreateFmcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<FmcerPostBodyCertificateParametersFormProperties>({
			aplno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sccd: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IdcerPostBody {
		certificateParameters?: IdcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: CmcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface IdcerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<CmcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateIdcerPostBodyFormGroup() {
		return new FormGroup<IdcerPostBodyFormProperties>({
			format: new FormControl<CmcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IdcerPostBodyCertificateParameters {

		/**
		 * Application Number
		 * Required
		 */
		aplno: string;

		/**
		 * Certificate Number
		 * Required
		 */
		certno: string;

		/**
		 * Security Code
		 * Required
		 */
		sccd: string;
	}
	export interface IdcerPostBodyCertificateParametersFormProperties {

		/**
		 * Application Number
		 * Required
		 */
		aplno: FormControl<string | null | undefined>,

		/**
		 * Certificate Number
		 * Required
		 */
		certno: FormControl<string | null | undefined>,

		/**
		 * Security Code
		 * Required
		 */
		sccd: FormControl<string | null | undefined>,
	}
	export function CreateIdcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<IdcerPostBodyCertificateParametersFormProperties>({
			aplno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sccd: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImcerPostBody {
		certificateParameters?: ImcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: CmcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface ImcerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<CmcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateImcerPostBodyFormGroup() {
		return new FormGroup<ImcerPostBodyFormProperties>({
			format: new FormControl<CmcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImcerPostBodyCertificateParameters {

		/**
		 * Application Number
		 * Required
		 */
		aplno: string;

		/**
		 * Certificate Number
		 * Required
		 */
		certno: string;

		/**
		 * Security Code
		 * Required
		 */
		sccd: string;
	}
	export interface ImcerPostBodyCertificateParametersFormProperties {

		/**
		 * Application Number
		 * Required
		 */
		aplno: FormControl<string | null | undefined>,

		/**
		 * Certificate Number
		 * Required
		 */
		certno: FormControl<string | null | undefined>,

		/**
		 * Security Code
		 * Required
		 */
		sccd: FormControl<string | null | undefined>,
	}
	export function CreateImcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<ImcerPostBodyCertificateParametersFormProperties>({
			aplno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sccd: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IncerPostBody {
		certificateParameters?: IncerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: CmcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface IncerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<CmcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateIncerPostBodyFormGroup() {
		return new FormGroup<IncerPostBodyFormProperties>({
			format: new FormControl<CmcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IncerPostBodyCertificateParameters {

		/**
		 * Application Number
		 * Required
		 */
		aplno: string;

		/**
		 * Certificate Number
		 * Required
		 */
		certno: string;

		/**
		 * Security Code
		 * Required
		 */
		sccd: string;
	}
	export interface IncerPostBodyCertificateParametersFormProperties {

		/**
		 * Application Number
		 * Required
		 */
		aplno: FormControl<string | null | undefined>,

		/**
		 * Certificate Number
		 * Required
		 */
		certno: FormControl<string | null | undefined>,

		/**
		 * Security Code
		 * Required
		 */
		sccd: FormControl<string | null | undefined>,
	}
	export function CreateIncerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<IncerPostBodyCertificateParametersFormProperties>({
			aplno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sccd: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LfcerPostBody {
		certificateParameters?: LfcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: CmcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface LfcerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<CmcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateLfcerPostBodyFormGroup() {
		return new FormGroup<LfcerPostBodyFormProperties>({
			format: new FormControl<CmcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LfcerPostBodyCertificateParameters {

		/**
		 * Application Number
		 * Required
		 */
		aplno: string;

		/**
		 * Certificate Number
		 * Required
		 */
		certno: string;

		/**
		 * Security Code
		 * Required
		 */
		sccd: string;
	}
	export interface LfcerPostBodyCertificateParametersFormProperties {

		/**
		 * Application Number
		 * Required
		 */
		aplno: FormControl<string | null | undefined>,

		/**
		 * Certificate Number
		 * Required
		 */
		certno: FormControl<string | null | undefined>,

		/**
		 * Security Code
		 * Required
		 */
		sccd: FormControl<string | null | undefined>,
	}
	export function CreateLfcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<LfcerPostBodyCertificateParametersFormProperties>({
			aplno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sccd: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LhcerPostBody {
		certificateParameters?: LhcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: CmcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface LhcerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<CmcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateLhcerPostBodyFormGroup() {
		return new FormGroup<LhcerPostBodyFormProperties>({
			format: new FormControl<CmcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LhcerPostBodyCertificateParameters {

		/**
		 * Application Number
		 * Required
		 */
		aplno: string;

		/**
		 * Certificate Number
		 * Required
		 */
		certno: string;

		/**
		 * Security Code
		 * Required
		 */
		sccd: string;
	}
	export interface LhcerPostBodyCertificateParametersFormProperties {

		/**
		 * Application Number
		 * Required
		 */
		aplno: FormControl<string | null | undefined>,

		/**
		 * Certificate Number
		 * Required
		 */
		certno: FormControl<string | null | undefined>,

		/**
		 * Security Code
		 * Required
		 */
		sccd: FormControl<string | null | undefined>,
	}
	export function CreateLhcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<LhcerPostBodyCertificateParametersFormProperties>({
			aplno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sccd: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LocerPostBody {
		certificateParameters?: LocerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: CmcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface LocerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<CmcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateLocerPostBodyFormGroup() {
		return new FormGroup<LocerPostBodyFormProperties>({
			format: new FormControl<CmcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LocerPostBodyCertificateParameters {

		/**
		 * Application Number
		 * Required
		 */
		aplno: string;

		/**
		 * Certificate Number
		 * Required
		 */
		certno: string;

		/**
		 * Security Code
		 * Required
		 */
		sccd: string;
	}
	export interface LocerPostBodyCertificateParametersFormProperties {

		/**
		 * Application Number
		 * Required
		 */
		aplno: FormControl<string | null | undefined>,

		/**
		 * Certificate Number
		 * Required
		 */
		certno: FormControl<string | null | undefined>,

		/**
		 * Security Code
		 * Required
		 */
		sccd: FormControl<string | null | undefined>,
	}
	export function CreateLocerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<LocerPostBodyCertificateParametersFormProperties>({
			aplno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sccd: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MncerPostBody {
		certificateParameters?: MncerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: CmcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface MncerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<CmcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateMncerPostBodyFormGroup() {
		return new FormGroup<MncerPostBodyFormProperties>({
			format: new FormControl<CmcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MncerPostBodyCertificateParameters {

		/**
		 * Application Number
		 * Required
		 */
		aplno: string;

		/**
		 * Certificate Number
		 * Required
		 */
		certno: string;

		/**
		 * Security Code
		 * Required
		 */
		sccd: string;
	}
	export interface MncerPostBodyCertificateParametersFormProperties {

		/**
		 * Application Number
		 * Required
		 */
		aplno: FormControl<string | null | undefined>,

		/**
		 * Certificate Number
		 * Required
		 */
		certno: FormControl<string | null | undefined>,

		/**
		 * Security Code
		 * Required
		 */
		sccd: FormControl<string | null | undefined>,
	}
	export function CreateMncerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<MncerPostBodyCertificateParametersFormProperties>({
			aplno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sccd: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NrcerPostBody {
		certificateParameters?: NrcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: CmcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface NrcerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<CmcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateNrcerPostBodyFormGroup() {
		return new FormGroup<NrcerPostBodyFormProperties>({
			format: new FormControl<CmcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NrcerPostBodyCertificateParameters {

		/**
		 * Application Number
		 * Required
		 */
		aplno: string;

		/**
		 * Certificate Number
		 * Required
		 */
		certno: string;

		/**
		 * Security Code
		 * Required
		 */
		sccd: string;
	}
	export interface NrcerPostBodyCertificateParametersFormProperties {

		/**
		 * Application Number
		 * Required
		 */
		aplno: FormControl<string | null | undefined>,

		/**
		 * Certificate Number
		 * Required
		 */
		certno: FormControl<string | null | undefined>,

		/**
		 * Security Code
		 * Required
		 */
		sccd: FormControl<string | null | undefined>,
	}
	export function CreateNrcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<NrcerPostBodyCertificateParametersFormProperties>({
			aplno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sccd: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NtcerPostBody {
		certificateParameters?: NtcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: CmcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface NtcerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<CmcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateNtcerPostBodyFormGroup() {
		return new FormGroup<NtcerPostBodyFormProperties>({
			format: new FormControl<CmcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NtcerPostBodyCertificateParameters {

		/**
		 * Application Number
		 * Required
		 */
		aplno: string;

		/**
		 * Certificate Number
		 * Required
		 */
		certno: string;

		/**
		 * Security Code
		 * Required
		 */
		sccd: string;
	}
	export interface NtcerPostBodyCertificateParametersFormProperties {

		/**
		 * Application Number
		 * Required
		 */
		aplno: FormControl<string | null | undefined>,

		/**
		 * Certificate Number
		 * Required
		 */
		certno: FormControl<string | null | undefined>,

		/**
		 * Security Code
		 * Required
		 */
		sccd: FormControl<string | null | undefined>,
	}
	export function CreateNtcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<NtcerPostBodyCertificateParametersFormProperties>({
			aplno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sccd: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OscerPostBody {
		certificateParameters?: OscerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: CmcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface OscerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<CmcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateOscerPostBodyFormGroup() {
		return new FormGroup<OscerPostBodyFormProperties>({
			format: new FormControl<CmcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OscerPostBodyCertificateParameters {

		/**
		 * Application Number
		 * Required
		 */
		aplno: string;

		/**
		 * Certificate Number
		 * Required
		 */
		certno: string;

		/**
		 * Security Code
		 * Required
		 */
		sccd: string;
	}
	export interface OscerPostBodyCertificateParametersFormProperties {

		/**
		 * Application Number
		 * Required
		 */
		aplno: FormControl<string | null | undefined>,

		/**
		 * Certificate Number
		 * Required
		 */
		certno: FormControl<string | null | undefined>,

		/**
		 * Security Code
		 * Required
		 */
		sccd: FormControl<string | null | undefined>,
	}
	export function CreateOscerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<OscerPostBodyCertificateParametersFormProperties>({
			aplno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sccd: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PncerPostBody {
		certificateParameters?: PncerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: CmcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface PncerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<CmcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreatePncerPostBodyFormGroup() {
		return new FormGroup<PncerPostBodyFormProperties>({
			format: new FormControl<CmcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PncerPostBodyCertificateParameters {

		/**
		 * Application Number
		 * Required
		 */
		aplno: string;

		/**
		 * Certificate Number
		 * Required
		 */
		certno: string;

		/**
		 * Security Code
		 * Required
		 */
		sccd: string;
	}
	export interface PncerPostBodyCertificateParametersFormProperties {

		/**
		 * Application Number
		 * Required
		 */
		aplno: FormControl<string | null | undefined>,

		/**
		 * Certificate Number
		 * Required
		 */
		certno: FormControl<string | null | undefined>,

		/**
		 * Security Code
		 * Required
		 */
		sccd: FormControl<string | null | undefined>,
	}
	export function CreatePncerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<PncerPostBodyCertificateParametersFormProperties>({
			aplno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sccd: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PscerPostBody {
		certificateParameters?: PscerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: CmcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface PscerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<CmcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreatePscerPostBodyFormGroup() {
		return new FormGroup<PscerPostBodyFormProperties>({
			format: new FormControl<CmcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PscerPostBodyCertificateParameters {

		/**
		 * Application Number
		 * Required
		 */
		aplno: string;

		/**
		 * Certificate Number
		 * Required
		 */
		certno: string;

		/**
		 * Security Code
		 * Required
		 */
		sccd: string;
	}
	export interface PscerPostBodyCertificateParametersFormProperties {

		/**
		 * Application Number
		 * Required
		 */
		aplno: FormControl<string | null | undefined>,

		/**
		 * Certificate Number
		 * Required
		 */
		certno: FormControl<string | null | undefined>,

		/**
		 * Security Code
		 * Required
		 */
		sccd: FormControl<string | null | undefined>,
	}
	export function CreatePscerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<PscerPostBodyCertificateParametersFormProperties>({
			aplno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sccd: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RlcerPostBody {
		certificateParameters?: RlcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: CmcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface RlcerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<CmcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateRlcerPostBodyFormGroup() {
		return new FormGroup<RlcerPostBodyFormProperties>({
			format: new FormControl<CmcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RlcerPostBodyCertificateParameters {

		/**
		 * Application Number
		 * Required
		 */
		aplno: string;

		/**
		 * Certificate Number
		 * Required
		 */
		certno: string;

		/**
		 * Security Code
		 * Required
		 */
		sccd: string;
	}
	export interface RlcerPostBodyCertificateParametersFormProperties {

		/**
		 * Application Number
		 * Required
		 */
		aplno: FormControl<string | null | undefined>,

		/**
		 * Certificate Number
		 * Required
		 */
		certno: FormControl<string | null | undefined>,

		/**
		 * Security Code
		 * Required
		 */
		sccd: FormControl<string | null | undefined>,
	}
	export function CreateRlcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<RlcerPostBodyCertificateParametersFormProperties>({
			aplno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sccd: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RscerPostBody {
		certificateParameters?: RscerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: CmcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface RscerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<CmcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateRscerPostBodyFormGroup() {
		return new FormGroup<RscerPostBodyFormProperties>({
			format: new FormControl<CmcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RscerPostBodyCertificateParameters {

		/**
		 * Application Number
		 * Required
		 */
		aplno: string;

		/**
		 * Certificate Number
		 * Required
		 */
		certno: string;

		/**
		 * Security Code
		 * Required
		 */
		sccd: string;
	}
	export interface RscerPostBodyCertificateParametersFormProperties {

		/**
		 * Application Number
		 * Required
		 */
		aplno: FormControl<string | null | undefined>,

		/**
		 * Certificate Number
		 * Required
		 */
		certno: FormControl<string | null | undefined>,

		/**
		 * Security Code
		 * Required
		 */
		sccd: FormControl<string | null | undefined>,
	}
	export function CreateRscerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<RscerPostBodyCertificateParametersFormProperties>({
			aplno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sccd: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SlcerPostBody {
		certificateParameters?: SlcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: CmcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface SlcerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<CmcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateSlcerPostBodyFormGroup() {
		return new FormGroup<SlcerPostBodyFormProperties>({
			format: new FormControl<CmcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SlcerPostBodyCertificateParameters {

		/**
		 * Application Number
		 * Required
		 */
		aplno: string;

		/**
		 * Certificate Number
		 * Required
		 */
		certno: string;

		/**
		 * Security Code
		 * Required
		 */
		sccd: string;
	}
	export interface SlcerPostBodyCertificateParametersFormProperties {

		/**
		 * Application Number
		 * Required
		 */
		aplno: FormControl<string | null | undefined>,

		/**
		 * Certificate Number
		 * Required
		 */
		certno: FormControl<string | null | undefined>,

		/**
		 * Security Code
		 * Required
		 */
		sccd: FormControl<string | null | undefined>,
	}
	export function CreateSlcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<SlcerPostBodyCertificateParametersFormProperties>({
			aplno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sccd: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VlcerPostBody {
		certificateParameters?: VlcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: CmcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface VlcerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<CmcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateVlcerPostBodyFormGroup() {
		return new FormGroup<VlcerPostBodyFormProperties>({
			format: new FormControl<CmcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VlcerPostBodyCertificateParameters {

		/**
		 * Application Number
		 * Required
		 */
		aplno: string;

		/**
		 * Certificate Number
		 * Required
		 */
		certno: string;

		/**
		 * Security Code
		 * Required
		 */
		sccd: string;
	}
	export interface VlcerPostBodyCertificateParametersFormProperties {

		/**
		 * Application Number
		 * Required
		 */
		aplno: FormControl<string | null | undefined>,

		/**
		 * Certificate Number
		 * Required
		 */
		certno: FormControl<string | null | undefined>,

		/**
		 * Security Code
		 * Required
		 */
		sccd: FormControl<string | null | undefined>,
	}
	export function CreateVlcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<VlcerPostBodyCertificateParametersFormProperties>({
			aplno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sccd: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WwcerPostBody {
		certificateParameters?: WwcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: CmcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface WwcerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<CmcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateWwcerPostBodyFormGroup() {
		return new FormGroup<WwcerPostBodyFormProperties>({
			format: new FormControl<CmcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WwcerPostBodyCertificateParameters {

		/**
		 * Application Number
		 * Required
		 */
		aplno: string;

		/**
		 * Certificate Number
		 * Required
		 */
		certno: string;

		/**
		 * Security Code
		 * Required
		 */
		sccd: string;
	}
	export interface WwcerPostBodyCertificateParametersFormProperties {

		/**
		 * Application Number
		 * Required
		 */
		aplno: FormControl<string | null | undefined>,

		/**
		 * Certificate Number
		 * Required
		 */
		certno: FormControl<string | null | undefined>,

		/**
		 * Security Code
		 * Required
		 */
		sccd: FormControl<string | null | undefined>,
	}
	export function CreateWwcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<WwcerPostBodyCertificateParametersFormProperties>({
			aplno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sccd: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

}

