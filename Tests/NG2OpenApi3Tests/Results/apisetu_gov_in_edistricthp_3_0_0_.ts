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
		 * Application for Renewal of Contractor Migrant Workmen license
		 * API to verify Application for Renewal of Contractor Migrant Workmen license.
		 * Post aecmw/certificate
		 * @param {AecmwPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Aecmw(requestBody: AecmwPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'aecmw/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Application for Renewal of Motor Transport Worker Registration
		 * API to verify Application for Renewal of Motor Transport Worker Registration.
		 * Post aemtw/certificate
		 * @param {AemtwPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Aemtw(requestBody: AemtwPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'aemtw/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Agriculture/ Agriculturist Certificate
		 * API to verify Agriculture/ Agriculturist Certificate.
		 * Post agcer/certificate
		 * @param {AgcerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Agcer(requestBody: AgcerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'agcer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Application for License for Inter State Migrant Workmen
		 * API to verify Application for License for Inter State Migrant Workmen.
		 * Post alimw/certificate
		 * @param {AlimwPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Alimw(requestBody: AlimwPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'alimw/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Application for Registration of Contractor Migrant Workmen license
		 * API to verify Application for Registration of Contractor Migrant Workmen license.
		 * Post arcmw/certificate
		 * @param {ArcmwPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Arcmw(requestBody: ArcmwPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'arcmw/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Application for Registration of Motor Transport Worker Registration
		 * API to verify Application for Registration of Motor Transport Worker Registration.
		 * Post armtw/certificate
		 * @param {ArmtwPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Armtw(requestBody: ArmtwPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'armtw/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Backward Area Certificate
		 * API to verify Backward Area Certificate.
		 * Post bacer/certificate
		 * @param {BacerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Bacer(requestBody: BacerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'bacer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Bonafide Certificate
		 * API to verify Bonafide Certificate.
		 * Post bhcer/certificate
		 * @param {BhcerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Bhcer(requestBody: BhcerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'bhcer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * BPL Card
		 * API to verify BPL Card.
		 * Post bpcrd/certificate
		 * @param {BpcrdPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Bpcrd(requestBody: BpcrdPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'bpcrd/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Birth Certificate
		 * API to verify Birth Certificate.
		 * Post btcer/certificate
		 * @param {BtcerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Btcer(requestBody: BtcerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'btcer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Renewal Certificate of Contract Labour License
		 * API to verify Renewal Certificate of Contract Labour License.
		 * Post cecer/certificate
		 * @param {CecerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Cecer(requestBody: CecerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'cecer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * Registration Certificate for Contract Labour License
		 * API to verify Registration Certificate for Contract Labour License.
		 * Post clcer/certificate
		 * @param {ClcerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Clcer(requestBody: ClcerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'clcer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Copy of Pariwar Register
		 * API to verify Copy of Pariwar Register.
		 * Post coprg/certificate
		 * @param {CoprgPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Coprg(requestBody: CoprgPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'coprg/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Dogra Class Certificate
		 * API to verify Dogra Class Certificate.
		 * Post dccer/certificate
		 * @param {DccerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Dccer(requestBody: DccerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'dccer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * Disabled Person Identity Card/ Certificate
		 * API to verify Disabled Person Identity Card/ Certificate.
		 * Post dpicr/certificate
		 * @param {DpicrPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Dpicr(requestBody: DpicrPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'dpicr/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Death Certificate
		 * API to verify Death Certificate.
		 * Post dtcer/certificate
		 * @param {DtcerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Dtcer(requestBody: DtcerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'dtcer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Registration Certificate of Establishment Employing Contract Labour
		 * API to verify Registration Certificate of Establishment Employing Contract Labour.
		 * Post ercer/certificate
		 * @param {ErcerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Ercer(requestBody: ErcerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ercer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Freedom Fighter Certificate
		 * API to verify Freedom Fighter Certificate.
		 * Post ffcer/certificate
		 * @param {FfcerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Ffcer(requestBody: FfcerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ffcer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Indigent (Needy Person) Certificate
		 * API to verify Indigent (Needy Person) Certificate.
		 * Post igcer/certificate
		 * @param {IgcerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Igcer(requestBody: IgcerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'igcer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * MNREGA Job Card
		 * API to verify MNREGA Job Card.
		 * Post mnrga/certificate
		 * @param {MnrgaPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Mnrga(requestBody: MnrgaPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'mnrga/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * Rural Area Certificate
		 * API to verify Rural Area Certificate.
		 * Post racer/certificate
		 * @param {RacerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Racer(requestBody: RacerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'racer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * Renewal Certificate of Shops And Commercial Establishment
		 * API to verify Renewal Certificate of Shops And Commercial Establishment.
		 * Post secer/certificate
		 * @param {SecerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Secer(requestBody: SecerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'secer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * Senior Citizen Identity Card/ Certificate
		 * API to verify Senior Citizen Identity Card/ Certificate.
		 * Post sicrd/certificate
		 * @param {SicrdPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Sicrd(requestBody: SicrdPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sicrd/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Registration Certificate of Shops And Commercial Establishment
		 * API to verify Registration Certificate of Shops And Commercial Establishment.
		 * Post srcer/certificate
		 * @param {SrcerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Srcer(requestBody: SrcerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'srcer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface AecmwPostBody {
		certificateParameters?: AecmwPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: AecmwPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface AecmwPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<AecmwPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateAecmwPostBodyFormGroup() {
		return new FormGroup<AecmwPostBodyFormProperties>({
			format: new FormControl<AecmwPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AecmwPostBodyCertificateParameters {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: string;
	}
	export interface AecmwPostBodyCertificateParametersFormProperties {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: FormControl<string | null | undefined>,
	}
	export function CreateAecmwPostBodyCertificateParametersFormGroup() {
		return new FormGroup<AecmwPostBodyCertificateParametersFormProperties>({
			UDF1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AecmwPostBodyFormat { pdf = 0 }

	export interface AemtwPostBody {
		certificateParameters?: AemtwPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: AecmwPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface AemtwPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<AecmwPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateAemtwPostBodyFormGroup() {
		return new FormGroup<AemtwPostBodyFormProperties>({
			format: new FormControl<AecmwPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AemtwPostBodyCertificateParameters {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: string;
	}
	export interface AemtwPostBodyCertificateParametersFormProperties {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: FormControl<string | null | undefined>,
	}
	export function CreateAemtwPostBodyCertificateParametersFormGroup() {
		return new FormGroup<AemtwPostBodyCertificateParametersFormProperties>({
			UDF1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AgcerPostBody {
		certificateParameters?: AgcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: AecmwPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface AgcerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<AecmwPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateAgcerPostBodyFormGroup() {
		return new FormGroup<AgcerPostBodyFormProperties>({
			format: new FormControl<AecmwPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AgcerPostBodyCertificateParameters {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: string;
	}
	export interface AgcerPostBodyCertificateParametersFormProperties {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: FormControl<string | null | undefined>,
	}
	export function CreateAgcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<AgcerPostBodyCertificateParametersFormProperties>({
			UDF1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AlimwPostBody {
		certificateParameters?: AlimwPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: AecmwPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface AlimwPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<AecmwPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateAlimwPostBodyFormGroup() {
		return new FormGroup<AlimwPostBodyFormProperties>({
			format: new FormControl<AecmwPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AlimwPostBodyCertificateParameters {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: string;
	}
	export interface AlimwPostBodyCertificateParametersFormProperties {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: FormControl<string | null | undefined>,
	}
	export function CreateAlimwPostBodyCertificateParametersFormGroup() {
		return new FormGroup<AlimwPostBodyCertificateParametersFormProperties>({
			UDF1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ArcmwPostBody {
		certificateParameters?: ArcmwPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: AecmwPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface ArcmwPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<AecmwPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateArcmwPostBodyFormGroup() {
		return new FormGroup<ArcmwPostBodyFormProperties>({
			format: new FormControl<AecmwPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ArcmwPostBodyCertificateParameters {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: string;
	}
	export interface ArcmwPostBodyCertificateParametersFormProperties {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: FormControl<string | null | undefined>,
	}
	export function CreateArcmwPostBodyCertificateParametersFormGroup() {
		return new FormGroup<ArcmwPostBodyCertificateParametersFormProperties>({
			UDF1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ArmtwPostBody {
		certificateParameters?: ArmtwPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: AecmwPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface ArmtwPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<AecmwPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateArmtwPostBodyFormGroup() {
		return new FormGroup<ArmtwPostBodyFormProperties>({
			format: new FormControl<AecmwPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ArmtwPostBodyCertificateParameters {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: string;
	}
	export interface ArmtwPostBodyCertificateParametersFormProperties {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: FormControl<string | null | undefined>,
	}
	export function CreateArmtwPostBodyCertificateParametersFormGroup() {
		return new FormGroup<ArmtwPostBodyCertificateParametersFormProperties>({
			UDF1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BacerPostBody {
		certificateParameters?: BacerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: AecmwPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface BacerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<AecmwPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateBacerPostBodyFormGroup() {
		return new FormGroup<BacerPostBodyFormProperties>({
			format: new FormControl<AecmwPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BacerPostBodyCertificateParameters {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: string;
	}
	export interface BacerPostBodyCertificateParametersFormProperties {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: FormControl<string | null | undefined>,
	}
	export function CreateBacerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<BacerPostBodyCertificateParametersFormProperties>({
			UDF1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BhcerPostBody {
		certificateParameters?: BhcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: AecmwPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface BhcerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<AecmwPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateBhcerPostBodyFormGroup() {
		return new FormGroup<BhcerPostBodyFormProperties>({
			format: new FormControl<AecmwPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BhcerPostBodyCertificateParameters {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: string;
	}
	export interface BhcerPostBodyCertificateParametersFormProperties {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: FormControl<string | null | undefined>,
	}
	export function CreateBhcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<BhcerPostBodyCertificateParametersFormProperties>({
			UDF1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BpcrdPostBody {
		certificateParameters?: BpcrdPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: AecmwPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface BpcrdPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<AecmwPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateBpcrdPostBodyFormGroup() {
		return new FormGroup<BpcrdPostBodyFormProperties>({
			format: new FormControl<AecmwPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BpcrdPostBodyCertificateParameters {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: string;
	}
	export interface BpcrdPostBodyCertificateParametersFormProperties {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: FormControl<string | null | undefined>,
	}
	export function CreateBpcrdPostBodyCertificateParametersFormGroup() {
		return new FormGroup<BpcrdPostBodyCertificateParametersFormProperties>({
			UDF1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BtcerPostBody {
		certificateParameters?: BtcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: AecmwPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface BtcerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<AecmwPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateBtcerPostBodyFormGroup() {
		return new FormGroup<BtcerPostBodyFormProperties>({
			format: new FormControl<AecmwPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BtcerPostBodyCertificateParameters {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: string;
	}
	export interface BtcerPostBodyCertificateParametersFormProperties {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: FormControl<string | null | undefined>,
	}
	export function CreateBtcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<BtcerPostBodyCertificateParametersFormProperties>({
			UDF1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CecerPostBody {
		certificateParameters?: CecerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: AecmwPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface CecerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<AecmwPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateCecerPostBodyFormGroup() {
		return new FormGroup<CecerPostBodyFormProperties>({
			format: new FormControl<AecmwPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CecerPostBodyCertificateParameters {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: string;
	}
	export interface CecerPostBodyCertificateParametersFormProperties {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: FormControl<string | null | undefined>,
	}
	export function CreateCecerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<CecerPostBodyCertificateParametersFormProperties>({
			UDF1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ChcerPostBody {
		certificateParameters?: ChcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: AecmwPostBodyFormat;

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
		format: FormControl<AecmwPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateChcerPostBodyFormGroup() {
		return new FormGroup<ChcerPostBodyFormProperties>({
			format: new FormControl<AecmwPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ChcerPostBodyCertificateParameters {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: string;
	}
	export interface ChcerPostBodyCertificateParametersFormProperties {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: FormControl<string | null | undefined>,
	}
	export function CreateChcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<ChcerPostBodyCertificateParametersFormProperties>({
			UDF1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ClcerPostBody {
		certificateParameters?: ClcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: AecmwPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface ClcerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<AecmwPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateClcerPostBodyFormGroup() {
		return new FormGroup<ClcerPostBodyFormProperties>({
			format: new FormControl<AecmwPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ClcerPostBodyCertificateParameters {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: string;
	}
	export interface ClcerPostBodyCertificateParametersFormProperties {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: FormControl<string | null | undefined>,
	}
	export function CreateClcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<ClcerPostBodyCertificateParametersFormProperties>({
			UDF1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CoprgPostBody {
		certificateParameters?: CoprgPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: AecmwPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface CoprgPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<AecmwPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateCoprgPostBodyFormGroup() {
		return new FormGroup<CoprgPostBodyFormProperties>({
			format: new FormControl<AecmwPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CoprgPostBodyCertificateParameters {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: string;
	}
	export interface CoprgPostBodyCertificateParametersFormProperties {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: FormControl<string | null | undefined>,
	}
	export function CreateCoprgPostBodyCertificateParametersFormGroup() {
		return new FormGroup<CoprgPostBodyCertificateParametersFormProperties>({
			UDF1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DccerPostBody {
		certificateParameters?: DccerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: AecmwPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface DccerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<AecmwPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateDccerPostBodyFormGroup() {
		return new FormGroup<DccerPostBodyFormProperties>({
			format: new FormControl<AecmwPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DccerPostBodyCertificateParameters {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: string;
	}
	export interface DccerPostBodyCertificateParametersFormProperties {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: FormControl<string | null | undefined>,
	}
	export function CreateDccerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<DccerPostBodyCertificateParametersFormProperties>({
			UDF1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DmcerPostBody {
		certificateParameters?: DmcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: AecmwPostBodyFormat;

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
		format: FormControl<AecmwPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateDmcerPostBodyFormGroup() {
		return new FormGroup<DmcerPostBodyFormProperties>({
			format: new FormControl<AecmwPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DmcerPostBodyCertificateParameters {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: string;
	}
	export interface DmcerPostBodyCertificateParametersFormProperties {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: FormControl<string | null | undefined>,
	}
	export function CreateDmcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<DmcerPostBodyCertificateParametersFormProperties>({
			UDF1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DpicrPostBody {
		certificateParameters?: DpicrPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: AecmwPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface DpicrPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<AecmwPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateDpicrPostBodyFormGroup() {
		return new FormGroup<DpicrPostBodyFormProperties>({
			format: new FormControl<AecmwPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DpicrPostBodyCertificateParameters {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: string;
	}
	export interface DpicrPostBodyCertificateParametersFormProperties {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: FormControl<string | null | undefined>,
	}
	export function CreateDpicrPostBodyCertificateParametersFormGroup() {
		return new FormGroup<DpicrPostBodyCertificateParametersFormProperties>({
			UDF1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DtcerPostBody {
		certificateParameters?: DtcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: AecmwPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface DtcerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<AecmwPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateDtcerPostBodyFormGroup() {
		return new FormGroup<DtcerPostBodyFormProperties>({
			format: new FormControl<AecmwPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DtcerPostBodyCertificateParameters {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: string;
	}
	export interface DtcerPostBodyCertificateParametersFormProperties {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: FormControl<string | null | undefined>,
	}
	export function CreateDtcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<DtcerPostBodyCertificateParametersFormProperties>({
			UDF1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ErcerPostBody {
		certificateParameters?: ErcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: AecmwPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface ErcerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<AecmwPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateErcerPostBodyFormGroup() {
		return new FormGroup<ErcerPostBodyFormProperties>({
			format: new FormControl<AecmwPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ErcerPostBodyCertificateParameters {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: string;
	}
	export interface ErcerPostBodyCertificateParametersFormProperties {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: FormControl<string | null | undefined>,
	}
	export function CreateErcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<ErcerPostBodyCertificateParametersFormProperties>({
			UDF1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FfcerPostBody {
		certificateParameters?: FfcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: AecmwPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface FfcerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<AecmwPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateFfcerPostBodyFormGroup() {
		return new FormGroup<FfcerPostBodyFormProperties>({
			format: new FormControl<AecmwPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FfcerPostBodyCertificateParameters {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: string;
	}
	export interface FfcerPostBodyCertificateParametersFormProperties {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: FormControl<string | null | undefined>,
	}
	export function CreateFfcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<FfcerPostBodyCertificateParametersFormProperties>({
			UDF1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IgcerPostBody {
		certificateParameters?: IgcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: AecmwPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface IgcerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<AecmwPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateIgcerPostBodyFormGroup() {
		return new FormGroup<IgcerPostBodyFormProperties>({
			format: new FormControl<AecmwPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IgcerPostBodyCertificateParameters {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: string;
	}
	export interface IgcerPostBodyCertificateParametersFormProperties {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: FormControl<string | null | undefined>,
	}
	export function CreateIgcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<IgcerPostBodyCertificateParametersFormProperties>({
			UDF1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IncerPostBody {
		certificateParameters?: IncerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: AecmwPostBodyFormat;

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
		format: FormControl<AecmwPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateIncerPostBodyFormGroup() {
		return new FormGroup<IncerPostBodyFormProperties>({
			format: new FormControl<AecmwPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IncerPostBodyCertificateParameters {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: string;
	}
	export interface IncerPostBodyCertificateParametersFormProperties {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: FormControl<string | null | undefined>,
	}
	export function CreateIncerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<IncerPostBodyCertificateParametersFormProperties>({
			UDF1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LhcerPostBody {
		certificateParameters?: LhcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: AecmwPostBodyFormat;

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
		format: FormControl<AecmwPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateLhcerPostBodyFormGroup() {
		return new FormGroup<LhcerPostBodyFormProperties>({
			format: new FormControl<AecmwPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LhcerPostBodyCertificateParameters {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: string;
	}
	export interface LhcerPostBodyCertificateParametersFormProperties {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: FormControl<string | null | undefined>,
	}
	export function CreateLhcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<LhcerPostBodyCertificateParametersFormProperties>({
			UDF1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MncerPostBody {
		certificateParameters?: MncerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: AecmwPostBodyFormat;

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
		format: FormControl<AecmwPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateMncerPostBodyFormGroup() {
		return new FormGroup<MncerPostBodyFormProperties>({
			format: new FormControl<AecmwPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MncerPostBodyCertificateParameters {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: string;
	}
	export interface MncerPostBodyCertificateParametersFormProperties {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: FormControl<string | null | undefined>,
	}
	export function CreateMncerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<MncerPostBodyCertificateParametersFormProperties>({
			UDF1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MnrgaPostBody {
		certificateParameters?: MnrgaPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: AecmwPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface MnrgaPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<AecmwPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateMnrgaPostBodyFormGroup() {
		return new FormGroup<MnrgaPostBodyFormProperties>({
			format: new FormControl<AecmwPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MnrgaPostBodyCertificateParameters {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: string;
	}
	export interface MnrgaPostBodyCertificateParametersFormProperties {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: FormControl<string | null | undefined>,
	}
	export function CreateMnrgaPostBodyCertificateParametersFormGroup() {
		return new FormGroup<MnrgaPostBodyCertificateParametersFormProperties>({
			UDF1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ObcerPostBody {
		certificateParameters?: ObcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: AecmwPostBodyFormat;

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
		format: FormControl<AecmwPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateObcerPostBodyFormGroup() {
		return new FormGroup<ObcerPostBodyFormProperties>({
			format: new FormControl<AecmwPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ObcerPostBodyCertificateParameters {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: string;
	}
	export interface ObcerPostBodyCertificateParametersFormProperties {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: FormControl<string | null | undefined>,
	}
	export function CreateObcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<ObcerPostBodyCertificateParametersFormProperties>({
			UDF1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RacerPostBody {
		certificateParameters?: RacerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: AecmwPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface RacerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<AecmwPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateRacerPostBodyFormGroup() {
		return new FormGroup<RacerPostBodyFormProperties>({
			format: new FormControl<AecmwPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RacerPostBodyCertificateParameters {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: string;
	}
	export interface RacerPostBodyCertificateParametersFormProperties {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: FormControl<string | null | undefined>,
	}
	export function CreateRacerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<RacerPostBodyCertificateParametersFormProperties>({
			UDF1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RmcerPostBody {
		certificateParameters?: RmcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: AecmwPostBodyFormat;

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
		format: FormControl<AecmwPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateRmcerPostBodyFormGroup() {
		return new FormGroup<RmcerPostBodyFormProperties>({
			format: new FormControl<AecmwPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RmcerPostBodyCertificateParameters {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: string;
	}
	export interface RmcerPostBodyCertificateParametersFormProperties {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: FormControl<string | null | undefined>,
	}
	export function CreateRmcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<RmcerPostBodyCertificateParametersFormProperties>({
			UDF1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SecerPostBody {
		certificateParameters?: SecerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: AecmwPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface SecerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<AecmwPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateSecerPostBodyFormGroup() {
		return new FormGroup<SecerPostBodyFormProperties>({
			format: new FormControl<AecmwPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SecerPostBodyCertificateParameters {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: string;
	}
	export interface SecerPostBodyCertificateParametersFormProperties {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: FormControl<string | null | undefined>,
	}
	export function CreateSecerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<SecerPostBodyCertificateParametersFormProperties>({
			UDF1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ShcerPostBody {
		certificateParameters?: ShcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: AecmwPostBodyFormat;

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
		format: FormControl<AecmwPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateShcerPostBodyFormGroup() {
		return new FormGroup<ShcerPostBodyFormProperties>({
			format: new FormControl<AecmwPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ShcerPostBodyCertificateParameters {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: string;
	}
	export interface ShcerPostBodyCertificateParametersFormProperties {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: FormControl<string | null | undefined>,
	}
	export function CreateShcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<ShcerPostBodyCertificateParametersFormProperties>({
			UDF1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SicrdPostBody {
		certificateParameters?: SicrdPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: AecmwPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface SicrdPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<AecmwPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateSicrdPostBodyFormGroup() {
		return new FormGroup<SicrdPostBodyFormProperties>({
			format: new FormControl<AecmwPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SicrdPostBodyCertificateParameters {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: string;
	}
	export interface SicrdPostBodyCertificateParametersFormProperties {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: FormControl<string | null | undefined>,
	}
	export function CreateSicrdPostBodyCertificateParametersFormGroup() {
		return new FormGroup<SicrdPostBodyCertificateParametersFormProperties>({
			UDF1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SrcerPostBody {
		certificateParameters?: SrcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: AecmwPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface SrcerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<AecmwPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateSrcerPostBodyFormGroup() {
		return new FormGroup<SrcerPostBodyFormProperties>({
			format: new FormControl<AecmwPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SrcerPostBodyCertificateParameters {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: string;
	}
	export interface SrcerPostBodyCertificateParametersFormProperties {

		/**
		 * ApplicationNumber
		 * Required
		 */
		UDF1: FormControl<string | null | undefined>,
	}
	export function CreateSrcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<SrcerPostBodyCertificateParametersFormProperties>({
			UDF1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

}

