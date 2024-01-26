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

		/** Required */
		marksMax: number;

		/** Required */
		marksMaxPractical: number;

		/** Required */
		marksMaxTheory: number;

		/** Required */
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

		/** Required */
		marksMax: FormControl<number | null | undefined>,

		/** Required */
		marksMaxPractical: FormControl<number | null | undefined>,

		/** Required */
		marksMaxTheory: FormControl<number | null | undefined>,

		/** Required */
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

		/** Required */
		repeats: number;

		/**
		 * Required
		 * Min length: 1
		 */
		unit: string;

		/** Required */
		value: number;
	}
	export interface ConsentArtifactSchemaConsentPermissionFrequencyFormProperties {

		/** Required */
		repeats: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		unit: FormControl<string | null | undefined>,

		/** Required */
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
		 * Character Certificate
		 * API to verify Character Certificate.
		 * Post chcer/certificate
		 * @param {ChcerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Chcer(requestBody: ChcerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'chcer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Distance Certificate
		 * API to verify Distance Certificate.
		 * Post dncer/certificate
		 * @param {DncerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Dncer(requestBody: DncerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'dncer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * Food Stuff License
		 * API to verify Food Stuff License.
		 * Post fslcs/certificate
		 * @param {FslcsPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Fslcs(requestBody: FslcsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'fslcs/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Grievance Redressal/ Registration
		 * API to verify Grievance Redressal/ Registration.
		 * Post grred/certificate
		 * @param {GrredPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Grred(requestBody: GrredPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'grred/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * Issue of Arm Licence
		 * API to verify Issue of Arm Licence.
		 * Post isoal/certificate
		 * @param {IsoalPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Isoal(requestBody: IsoalPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'isoal/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Land Valuation/ Holding/ Record Certificate
		 * API to verify Land Valuation/ Holding/ Record Certificate.
		 * Post lvcer/certificate
		 * @param {LvcerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Lvcer(requestBody: LvcerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lvcer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Manufacturer License
		 * API to verify Manufacturer License.
		 * Post malcs/certificate
		 * @param {MalcsPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Malcs(requestBody: MalcsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'malcs/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Small Savings Agent License
		 * API to verify Small Savings Agent License.
		 * Post mpkby/certificate
		 * @param {MpkbyPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Mpkby(requestBody: MpkbyPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'mpkby/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * OBC Certificate
		 * API to verify OBC Certificate.
		 * Post obcer/certificate
		 * @param {ObcerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Obcer(requestBody: ObcerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'obcer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Right to Information
		 * API to verify Right to Information.
		 * Post ritin/certificate
		 * @param {RitinPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Ritin(requestBody: RitinPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ritin/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Marriage Certificate
		 * API to verify Marriage Certificate.
		 * Post rmcer/certificate
		 * @param {RmcerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Rmcer(requestBody: RmcerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'rmcer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * SC/ST  Certificate
		 * API to verify SC/ST  Certificate.
		 * Post shcer/certificate
		 * @param {ShcerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Shcer(requestBody: ShcerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'shcer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Surviving Member Certificate
		 * API to verify Surviving Member Certificate.
		 * Post smcer/certificate
		 * @param {SmcerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Smcer(requestBody: SmcerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'smcer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Standardized Agency Systems (SAS) Agent License
		 * API to verify Standardized Agency Systems (SAS) Agent License.
		 * Post sslcs/certificate
		 * @param {SslcsPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Sslcs(requestBody: SslcsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sslcs/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * License/ Verification of Weights, Measures and Instruments
		 * API to verify License/ Verification of Weights, Measures and Instruments.
		 * Post vrwmi/certificate
		 * @param {VrwmiPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Vrwmi(requestBody: VrwmiPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'vrwmi/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface ChcerPostBody {
		certificateParameters?: ChcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: ChcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface ChcerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<ChcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateChcerPostBodyFormGroup() {
		return new FormGroup<ChcerPostBodyFormProperties>({
			format: new FormControl<ChcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ChcerPostBodyCertificateParameters {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: string;

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: string;
	}
	export interface ChcerPostBodyCertificateParametersFormProperties {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: FormControl<string | null | undefined>,

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: FormControl<string | null | undefined>,
	}
	export function CreateChcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<ChcerPostBodyCertificateParametersFormProperties>({
			RefNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TokenNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ChcerPostBodyFormat { pdf = 0 }

	export interface DncerPostBody {
		certificateParameters?: DncerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: ChcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface DncerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<ChcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateDncerPostBodyFormGroup() {
		return new FormGroup<DncerPostBodyFormProperties>({
			format: new FormControl<ChcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DncerPostBodyCertificateParameters {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: string;

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: string;
	}
	export interface DncerPostBodyCertificateParametersFormProperties {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: FormControl<string | null | undefined>,

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: FormControl<string | null | undefined>,
	}
	export function CreateDncerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<DncerPostBodyCertificateParametersFormProperties>({
			RefNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TokenNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DpcerPostBody {
		certificateParameters?: DpcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: ChcerPostBodyFormat;

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
		format: FormControl<ChcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateDpcerPostBodyFormGroup() {
		return new FormGroup<DpcerPostBodyFormProperties>({
			format: new FormControl<ChcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DpcerPostBodyCertificateParameters {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: string;

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: string;
	}
	export interface DpcerPostBodyCertificateParametersFormProperties {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: FormControl<string | null | undefined>,

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: FormControl<string | null | undefined>,
	}
	export function CreateDpcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<DpcerPostBodyCertificateParametersFormProperties>({
			RefNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TokenNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FslcsPostBody {
		certificateParameters?: FslcsPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: ChcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface FslcsPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<ChcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateFslcsPostBodyFormGroup() {
		return new FormGroup<FslcsPostBodyFormProperties>({
			format: new FormControl<ChcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FslcsPostBodyCertificateParameters {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: string;

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: string;
	}
	export interface FslcsPostBodyCertificateParametersFormProperties {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: FormControl<string | null | undefined>,

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: FormControl<string | null | undefined>,
	}
	export function CreateFslcsPostBodyCertificateParametersFormGroup() {
		return new FormGroup<FslcsPostBodyCertificateParametersFormProperties>({
			RefNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TokenNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GrredPostBody {
		certificateParameters?: GrredPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: ChcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface GrredPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<ChcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateGrredPostBodyFormGroup() {
		return new FormGroup<GrredPostBodyFormProperties>({
			format: new FormControl<ChcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GrredPostBodyCertificateParameters {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: string;

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: string;
	}
	export interface GrredPostBodyCertificateParametersFormProperties {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: FormControl<string | null | undefined>,

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: FormControl<string | null | undefined>,
	}
	export function CreateGrredPostBodyCertificateParametersFormGroup() {
		return new FormGroup<GrredPostBodyCertificateParametersFormProperties>({
			RefNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TokenNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IncerPostBody {
		certificateParameters?: IncerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: ChcerPostBodyFormat;

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
		format: FormControl<ChcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateIncerPostBodyFormGroup() {
		return new FormGroup<IncerPostBodyFormProperties>({
			format: new FormControl<ChcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IncerPostBodyCertificateParameters {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: string;

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: string;
	}
	export interface IncerPostBodyCertificateParametersFormProperties {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: FormControl<string | null | undefined>,

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: FormControl<string | null | undefined>,
	}
	export function CreateIncerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<IncerPostBodyCertificateParametersFormProperties>({
			RefNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TokenNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IsoalPostBody {
		certificateParameters?: IsoalPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: ChcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface IsoalPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<ChcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateIsoalPostBodyFormGroup() {
		return new FormGroup<IsoalPostBodyFormProperties>({
			format: new FormControl<ChcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IsoalPostBodyCertificateParameters {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: string;

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: string;
	}
	export interface IsoalPostBodyCertificateParametersFormProperties {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: FormControl<string | null | undefined>,

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: FormControl<string | null | undefined>,
	}
	export function CreateIsoalPostBodyCertificateParametersFormGroup() {
		return new FormGroup<IsoalPostBodyCertificateParametersFormProperties>({
			RefNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TokenNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LvcerPostBody {
		certificateParameters?: LvcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: ChcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface LvcerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<ChcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateLvcerPostBodyFormGroup() {
		return new FormGroup<LvcerPostBodyFormProperties>({
			format: new FormControl<ChcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LvcerPostBodyCertificateParameters {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: string;

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: string;
	}
	export interface LvcerPostBodyCertificateParametersFormProperties {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: FormControl<string | null | undefined>,

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: FormControl<string | null | undefined>,
	}
	export function CreateLvcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<LvcerPostBodyCertificateParametersFormProperties>({
			RefNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TokenNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MalcsPostBody {
		certificateParameters?: MalcsPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: ChcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface MalcsPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<ChcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateMalcsPostBodyFormGroup() {
		return new FormGroup<MalcsPostBodyFormProperties>({
			format: new FormControl<ChcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MalcsPostBodyCertificateParameters {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: string;

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: string;
	}
	export interface MalcsPostBodyCertificateParametersFormProperties {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: FormControl<string | null | undefined>,

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: FormControl<string | null | undefined>,
	}
	export function CreateMalcsPostBodyCertificateParametersFormGroup() {
		return new FormGroup<MalcsPostBodyCertificateParametersFormProperties>({
			RefNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TokenNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MpkbyPostBody {
		certificateParameters?: MpkbyPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: ChcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface MpkbyPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<ChcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateMpkbyPostBodyFormGroup() {
		return new FormGroup<MpkbyPostBodyFormProperties>({
			format: new FormControl<ChcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MpkbyPostBodyCertificateParameters {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: string;

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: string;
	}
	export interface MpkbyPostBodyCertificateParametersFormProperties {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: FormControl<string | null | undefined>,

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: FormControl<string | null | undefined>,
	}
	export function CreateMpkbyPostBodyCertificateParametersFormGroup() {
		return new FormGroup<MpkbyPostBodyCertificateParametersFormProperties>({
			RefNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TokenNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ObcerPostBody {
		certificateParameters?: ObcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: ChcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface ObcerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<ChcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateObcerPostBodyFormGroup() {
		return new FormGroup<ObcerPostBodyFormProperties>({
			format: new FormControl<ChcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ObcerPostBodyCertificateParameters {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: string;

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: string;
	}
	export interface ObcerPostBodyCertificateParametersFormProperties {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: FormControl<string | null | undefined>,

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: FormControl<string | null | undefined>,
	}
	export function CreateObcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<ObcerPostBodyCertificateParametersFormProperties>({
			RefNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TokenNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RitinPostBody {
		certificateParameters?: RitinPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: ChcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface RitinPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<ChcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateRitinPostBodyFormGroup() {
		return new FormGroup<RitinPostBodyFormProperties>({
			format: new FormControl<ChcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RitinPostBodyCertificateParameters {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: string;

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: string;
	}
	export interface RitinPostBodyCertificateParametersFormProperties {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: FormControl<string | null | undefined>,

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: FormControl<string | null | undefined>,
	}
	export function CreateRitinPostBodyCertificateParametersFormGroup() {
		return new FormGroup<RitinPostBodyCertificateParametersFormProperties>({
			RefNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TokenNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RmcerPostBody {
		certificateParameters?: RmcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: ChcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface RmcerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<ChcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateRmcerPostBodyFormGroup() {
		return new FormGroup<RmcerPostBodyFormProperties>({
			format: new FormControl<ChcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RmcerPostBodyCertificateParameters {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: string;

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: string;
	}
	export interface RmcerPostBodyCertificateParametersFormProperties {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: FormControl<string | null | undefined>,

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: FormControl<string | null | undefined>,
	}
	export function CreateRmcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<RmcerPostBodyCertificateParametersFormProperties>({
			RefNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TokenNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RscerPostBody {
		certificateParameters?: RscerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: ChcerPostBodyFormat;

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
		format: FormControl<ChcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateRscerPostBodyFormGroup() {
		return new FormGroup<RscerPostBodyFormProperties>({
			format: new FormControl<ChcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RscerPostBodyCertificateParameters {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: string;

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: string;
	}
	export interface RscerPostBodyCertificateParametersFormProperties {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: FormControl<string | null | undefined>,

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: FormControl<string | null | undefined>,
	}
	export function CreateRscerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<RscerPostBodyCertificateParametersFormProperties>({
			RefNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TokenNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ShcerPostBody {
		certificateParameters?: ShcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: ChcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface ShcerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<ChcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateShcerPostBodyFormGroup() {
		return new FormGroup<ShcerPostBodyFormProperties>({
			format: new FormControl<ChcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ShcerPostBodyCertificateParameters {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: string;

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: string;
	}
	export interface ShcerPostBodyCertificateParametersFormProperties {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: FormControl<string | null | undefined>,

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: FormControl<string | null | undefined>,
	}
	export function CreateShcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<ShcerPostBodyCertificateParametersFormProperties>({
			RefNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TokenNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SmcerPostBody {
		certificateParameters?: SmcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: ChcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface SmcerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<ChcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateSmcerPostBodyFormGroup() {
		return new FormGroup<SmcerPostBodyFormProperties>({
			format: new FormControl<ChcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SmcerPostBodyCertificateParameters {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: string;

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: string;
	}
	export interface SmcerPostBodyCertificateParametersFormProperties {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: FormControl<string | null | undefined>,

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: FormControl<string | null | undefined>,
	}
	export function CreateSmcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<SmcerPostBodyCertificateParametersFormProperties>({
			RefNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TokenNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SslcsPostBody {
		certificateParameters?: SslcsPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: ChcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface SslcsPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<ChcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateSslcsPostBodyFormGroup() {
		return new FormGroup<SslcsPostBodyFormProperties>({
			format: new FormControl<ChcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SslcsPostBodyCertificateParameters {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: string;

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: string;
	}
	export interface SslcsPostBodyCertificateParametersFormProperties {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: FormControl<string | null | undefined>,

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: FormControl<string | null | undefined>,
	}
	export function CreateSslcsPostBodyCertificateParametersFormGroup() {
		return new FormGroup<SslcsPostBodyCertificateParametersFormProperties>({
			RefNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TokenNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VrwmiPostBody {
		certificateParameters?: VrwmiPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: ChcerPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface VrwmiPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<ChcerPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateVrwmiPostBodyFormGroup() {
		return new FormGroup<VrwmiPostBodyFormProperties>({
			format: new FormControl<ChcerPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VrwmiPostBodyCertificateParameters {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: string;

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: string;
	}
	export interface VrwmiPostBodyCertificateParametersFormProperties {

		/**
		 * Reference No.
		 * Required
		 */
		RefNo: FormControl<string | null | undefined>,

		/**
		 * Token No.
		 * Required
		 */
		TokenNo: FormControl<string | null | undefined>,
	}
	export function CreateVrwmiPostBodyCertificateParametersFormGroup() {
		return new FormGroup<VrwmiPostBodyCertificateParametersFormProperties>({
			RefNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TokenNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

}

