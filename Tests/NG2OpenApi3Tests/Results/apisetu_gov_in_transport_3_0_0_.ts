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

	export interface DrivingLicenseSchema {

		/** Required */
		CertificateData: DrivingLicenseSchemaCertificateData;

		/** Required */
		IssuedBy: DrivingLicenseSchemaIssuedBy;

		/** Required */
		IssuedTo: DrivingLicenseSchemaIssuedTo;
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

		/** Min length: 1 */
		prevNumber?: number | null;

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
	export interface DrivingLicenseSchemaFormProperties {
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

		/** Min length: 1 */
		prevNumber: FormControl<number | null | undefined>,

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
	export function CreateDrivingLicenseSchemaFormGroup() {
		return new FormGroup<DrivingLicenseSchemaFormProperties>({
			expiryDate: new FormControl<string | null | undefined>(undefined),
			issueDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			issuedAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			language: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			number: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			prevNumber: new FormControl<number | null | undefined>(undefined, [Validators.minLength(1)]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			validFromDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DrivingLicenseSchemaCertificateData {
		DrivingLicense?: DrivingLicenseSchemaCertificateDataDrivingLicense;
	}
	export interface DrivingLicenseSchemaCertificateDataFormProperties {
	}
	export function CreateDrivingLicenseSchemaCertificateDataFormGroup() {
		return new FormGroup<DrivingLicenseSchemaCertificateDataFormProperties>({
		});

	}

	export interface DrivingLicenseSchemaCertificateDataDrivingLicense {

		/** Required */
		abbreviation: string;

		/**
		 * Required
		 * Min length: 1
		 */
		code: string;

		/** Required */
		description: string;

		/** Required */
		endorseDate: string;

		/** Required */
		issueDate: string;
	}
	export interface DrivingLicenseSchemaCertificateDataDrivingLicenseFormProperties {

		/** Required */
		abbreviation: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		code: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		endorseDate: FormControl<string | null | undefined>,

		/** Required */
		issueDate: FormControl<string | null | undefined>,
	}
	export function CreateDrivingLicenseSchemaCertificateDataDrivingLicenseFormGroup() {
		return new FormGroup<DrivingLicenseSchemaCertificateDataDrivingLicenseFormProperties>({
			abbreviation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			code: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			endorseDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			issueDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DrivingLicenseSchemaIssuedBy {

		/** Required */
		Organization: DrivingLicenseSchemaIssuedByOrganization;
	}
	export interface DrivingLicenseSchemaIssuedByFormProperties {
	}
	export function CreateDrivingLicenseSchemaIssuedByFormGroup() {
		return new FormGroup<DrivingLicenseSchemaIssuedByFormProperties>({
		});

	}

	export interface DrivingLicenseSchemaIssuedByOrganization {

		/** Required */
		Address: DrivingLicenseSchemaIssuedByOrganizationAddress;

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
	export interface DrivingLicenseSchemaIssuedByOrganizationFormProperties {

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
	export function CreateDrivingLicenseSchemaIssuedByOrganizationFormGroup() {
		return new FormGroup<DrivingLicenseSchemaIssuedByOrganizationFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			tin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			uid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DrivingLicenseSchemaIssuedByOrganizationAddress {

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
	export interface DrivingLicenseSchemaIssuedByOrganizationAddressFormProperties {

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
	export function CreateDrivingLicenseSchemaIssuedByOrganizationAddressFormGroup() {
		return new FormGroup<DrivingLicenseSchemaIssuedByOrganizationAddressFormProperties>({
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

	export interface DrivingLicenseSchemaIssuedTo {

		/** Required */
		Person: DrivingLicenseSchemaIssuedToPerson;
	}
	export interface DrivingLicenseSchemaIssuedToFormProperties {
	}
	export function CreateDrivingLicenseSchemaIssuedToFormGroup() {
		return new FormGroup<DrivingLicenseSchemaIssuedToFormProperties>({
		});

	}

	export interface DrivingLicenseSchemaIssuedToPerson {

		/** Required */
		Address: DrivingLicenseSchemaIssuedToPersonAddress;

		/** Required */
		Photo: DrivingLicenseSchemaIssuedToPersonPhoto;

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
	export interface DrivingLicenseSchemaIssuedToPersonFormProperties {

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
	export function CreateDrivingLicenseSchemaIssuedToPersonFormGroup() {
		return new FormGroup<DrivingLicenseSchemaIssuedToPersonFormProperties>({
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

	export interface DrivingLicenseSchemaIssuedToPersonAddress {

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
	export interface DrivingLicenseSchemaIssuedToPersonAddressFormProperties {

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
	export function CreateDrivingLicenseSchemaIssuedToPersonAddressFormGroup() {
		return new FormGroup<DrivingLicenseSchemaIssuedToPersonAddressFormProperties>({
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

	export interface DrivingLicenseSchemaIssuedToPersonPhoto {

		/** Required */
		format: string;
	}
	export interface DrivingLicenseSchemaIssuedToPersonPhotoFormProperties {

		/** Required */
		format: FormControl<string | null | undefined>,
	}
	export function CreateDrivingLicenseSchemaIssuedToPersonPhotoFormGroup() {
		return new FormGroup<DrivingLicenseSchemaIssuedToPersonPhotoFormProperties>({
			format: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VehicleRegistrationSchema {

		/** Required */
		CertificateData: VehicleRegistrationSchemaCertificateData;

		/** Required */
		IssuedBy: VehicleRegistrationSchemaIssuedBy;

		/** Required */
		IssuedTo: VehicleRegistrationSchemaIssuedTo;
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
	export interface VehicleRegistrationSchemaFormProperties {
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
	export function CreateVehicleRegistrationSchemaFormGroup() {
		return new FormGroup<VehicleRegistrationSchemaFormProperties>({
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

	export interface VehicleRegistrationSchemaCertificateData {
		VehicleRegistration?: VehicleRegistrationSchemaCertificateDataVehicleRegistration;
	}
	export interface VehicleRegistrationSchemaCertificateDataFormProperties {
	}
	export function CreateVehicleRegistrationSchemaCertificateDataFormGroup() {
		return new FormGroup<VehicleRegistrationSchemaCertificateDataFormProperties>({
		});

	}

	export interface VehicleRegistrationSchemaCertificateDataVehicleRegistration {
		Insurance?: VehicleRegistrationSchemaCertificateDataVehicleRegistrationInsurance;
		Vehicle?: VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle;

		/**
		 * Required
		 * Min length: 1
		 */
		financer: string;

		/** Required */
		normsDesc: string;

		/**
		 * Required
		 * Min length: 1
		 */
		statusDate: string;
	}
	export interface VehicleRegistrationSchemaCertificateDataVehicleRegistrationFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		financer: FormControl<string | null | undefined>,

		/** Required */
		normsDesc: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		statusDate: FormControl<string | null | undefined>,
	}
	export function CreateVehicleRegistrationSchemaCertificateDataVehicleRegistrationFormGroup() {
		return new FormGroup<VehicleRegistrationSchemaCertificateDataVehicleRegistrationFormProperties>({
			financer: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			normsDesc: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			statusDate: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface VehicleRegistrationSchemaCertificateDataVehicleRegistrationInsurance {
		companyName?: string | null;

		/** Min length: 1 */
		policyNo?: string | null;
		validTill?: string | null;
	}
	export interface VehicleRegistrationSchemaCertificateDataVehicleRegistrationInsuranceFormProperties {
		companyName: FormControl<string | null | undefined>,

		/** Min length: 1 */
		policyNo: FormControl<string | null | undefined>,
		validTill: FormControl<string | null | undefined>,
	}
	export function CreateVehicleRegistrationSchemaCertificateDataVehicleRegistrationInsuranceFormGroup() {
		return new FormGroup<VehicleRegistrationSchemaCertificateDataVehicleRegistrationInsuranceFormProperties>({
			companyName: new FormControl<string | null | undefined>(undefined),
			policyNo: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			validTill: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle {

		/** Min length: 1 */
		chasisNo?: string | null;
		class?: string | null;
		color?: string | null;
		cubicCapacity?: string | null;
		cylinder?: string | null;
		engineNo?: string | null;
		fitTill?: string | null;
		fuelDesc?: string | null;
		make?: string | null;
		mfgDate?: string | null;

		/** Min length: 1 */
		model?: string | null;

		/** Min length: 1 */
		seatCapacity?: string | null;

		/** Min length: 1 */
		sleeperCapacity?: string | null;
		standingCapacity?: string | null;

		/** Min length: 1 */
		unladenWeight?: string | null;
		wheelbase?: string | null;
	}
	export interface VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicleFormProperties {

		/** Min length: 1 */
		chasisNo: FormControl<string | null | undefined>,
		class: FormControl<string | null | undefined>,
		color: FormControl<string | null | undefined>,
		cubicCapacity: FormControl<string | null | undefined>,
		cylinder: FormControl<string | null | undefined>,
		engineNo: FormControl<string | null | undefined>,
		fitTill: FormControl<string | null | undefined>,
		fuelDesc: FormControl<string | null | undefined>,
		make: FormControl<string | null | undefined>,
		mfgDate: FormControl<string | null | undefined>,

		/** Min length: 1 */
		model: FormControl<string | null | undefined>,

		/** Min length: 1 */
		seatCapacity: FormControl<string | null | undefined>,

		/** Min length: 1 */
		sleeperCapacity: FormControl<string | null | undefined>,
		standingCapacity: FormControl<string | null | undefined>,

		/** Min length: 1 */
		unladenWeight: FormControl<string | null | undefined>,
		wheelbase: FormControl<string | null | undefined>,
	}
	export function CreateVehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicleFormGroup() {
		return new FormGroup<VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicleFormProperties>({
			chasisNo: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			class: new FormControl<string | null | undefined>(undefined),
			color: new FormControl<string | null | undefined>(undefined),
			cubicCapacity: new FormControl<string | null | undefined>(undefined),
			cylinder: new FormControl<string | null | undefined>(undefined),
			engineNo: new FormControl<string | null | undefined>(undefined),
			fitTill: new FormControl<string | null | undefined>(undefined),
			fuelDesc: new FormControl<string | null | undefined>(undefined),
			make: new FormControl<string | null | undefined>(undefined),
			mfgDate: new FormControl<string | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			seatCapacity: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			sleeperCapacity: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			standingCapacity: new FormControl<string | null | undefined>(undefined),
			unladenWeight: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			wheelbase: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VehicleRegistrationSchemaIssuedBy {

		/** Required */
		Organization: VehicleRegistrationSchemaIssuedByOrganization;
	}
	export interface VehicleRegistrationSchemaIssuedByFormProperties {
	}
	export function CreateVehicleRegistrationSchemaIssuedByFormGroup() {
		return new FormGroup<VehicleRegistrationSchemaIssuedByFormProperties>({
		});

	}

	export interface VehicleRegistrationSchemaIssuedByOrganization {

		/** Required */
		Address: VehicleRegistrationSchemaIssuedByOrganizationAddress;

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
	export interface VehicleRegistrationSchemaIssuedByOrganizationFormProperties {

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
	export function CreateVehicleRegistrationSchemaIssuedByOrganizationFormGroup() {
		return new FormGroup<VehicleRegistrationSchemaIssuedByOrganizationFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			tin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			uid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VehicleRegistrationSchemaIssuedByOrganizationAddress {

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
	export interface VehicleRegistrationSchemaIssuedByOrganizationAddressFormProperties {

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
	export function CreateVehicleRegistrationSchemaIssuedByOrganizationAddressFormGroup() {
		return new FormGroup<VehicleRegistrationSchemaIssuedByOrganizationAddressFormProperties>({
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

	export interface VehicleRegistrationSchemaIssuedTo {

		/** Required */
		Person: VehicleRegistrationSchemaIssuedToPerson;
	}
	export interface VehicleRegistrationSchemaIssuedToFormProperties {
	}
	export function CreateVehicleRegistrationSchemaIssuedToFormGroup() {
		return new FormGroup<VehicleRegistrationSchemaIssuedToFormProperties>({
		});

	}

	export interface VehicleRegistrationSchemaIssuedToPerson {

		/** Required */
		Address: VehicleRegistrationSchemaIssuedToPersonAddress;

		/** Required */
		Photo: VehicleRegistrationSchemaIssuedToPersonPhoto;

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
	export interface VehicleRegistrationSchemaIssuedToPersonFormProperties {

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
	export function CreateVehicleRegistrationSchemaIssuedToPersonFormGroup() {
		return new FormGroup<VehicleRegistrationSchemaIssuedToPersonFormProperties>({
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

	export interface VehicleRegistrationSchemaIssuedToPersonAddress {

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
	export interface VehicleRegistrationSchemaIssuedToPersonAddressFormProperties {

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
	export function CreateVehicleRegistrationSchemaIssuedToPersonAddressFormGroup() {
		return new FormGroup<VehicleRegistrationSchemaIssuedToPersonAddressFormProperties>({
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

	export interface VehicleRegistrationSchemaIssuedToPersonPhoto {

		/** Required */
		format: string;
	}
	export interface VehicleRegistrationSchemaIssuedToPersonPhotoFormProperties {

		/** Required */
		format: FormControl<string | null | undefined>,
	}
	export function CreateVehicleRegistrationSchemaIssuedToPersonPhotoFormGroup() {
		return new FormGroup<VehicleRegistrationSchemaIssuedToPersonPhotoFormProperties>({
			format: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Driving License
		 * API to verify Driving License.
		 * Post drvlc/certificate
		 * @param {DrvlcPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Drvlc(requestBody: DrvlcPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'drvlc/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Fitness Certificate
		 * API to verify Fitness Certificate.
		 * Post fitcer/certificate
		 * @param {FitcerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Fitcer(requestBody: FitcerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'fitcer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Registration of Vehicles
		 * API to verify Registration of Vehicles.
		 * Post rvcer/certificate
		 * @param {RvcerPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Rvcer(requestBody: RvcerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'rvcer/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Vehicle Insurance Certificate
		 * API to verify Vehicle Insurance Certificate.
		 * Post vhinsc/certificate
		 * @param {VhinscPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Vhinsc(requestBody: VhinscPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'vhinsc/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Vehicle Tax Receipt
		 * API to verify Vehicle Tax Receipt.
		 * Post vhtax/certificate
		 * @param {VhtaxPostBody} requestBody Request format
		 * @return {void} The certificate data in response body in PDF, XML or JSON format as requested in format parameter.
		 */
		Vhtax(requestBody: VhtaxPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'vhtax/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface DrvlcPostBody {
		certificateParameters?: DrvlcPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: DrvlcPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface DrvlcPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<DrvlcPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateDrvlcPostBodyFormGroup() {
		return new FormGroup<DrvlcPostBodyFormProperties>({
			format: new FormControl<DrvlcPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DrvlcPostBodyCertificateParameters {

		/**
		 * Date of birth in DD-MM-YYYY format
		 * Required
		 */
		DOB: string;

		/**
		 * Full name
		 * Required
		 */
		FullName: string;

		/**
		 * Aadhaar number
		 * Required
		 */
		UID: string;

		/**
		 * Driving License No
		 * Required
		 */
		dlno: string;
	}
	export interface DrvlcPostBodyCertificateParametersFormProperties {

		/**
		 * Date of birth in DD-MM-YYYY format
		 * Required
		 */
		DOB: FormControl<string | null | undefined>,

		/**
		 * Full name
		 * Required
		 */
		FullName: FormControl<string | null | undefined>,

		/**
		 * Aadhaar number
		 * Required
		 */
		UID: FormControl<string | null | undefined>,

		/**
		 * Driving License No
		 * Required
		 */
		dlno: FormControl<string | null | undefined>,
	}
	export function CreateDrvlcPostBodyCertificateParametersFormGroup() {
		return new FormGroup<DrvlcPostBodyCertificateParametersFormProperties>({
			DOB: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FullName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dlno: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DrvlcPostBodyFormat { xml = 'xml', pdf = 'pdf' }

	export interface FitcerPostBody {
		certificateParameters?: FitcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: DrvlcPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface FitcerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<DrvlcPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateFitcerPostBodyFormGroup() {
		return new FormGroup<FitcerPostBodyFormProperties>({
			format: new FormControl<DrvlcPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FitcerPostBodyCertificateParameters {

		/**
		 * Full name
		 * Required
		 */
		FullName: string;

		/**
		 * Aadhaar number
		 * Required
		 */
		UID: string;

		/**
		 * Chassis No
		 * Required
		 */
		chasis_no: string;

		/**
		 * Vehicle Registration No
		 * Required
		 */
		reg_no: string;

		/**
		 * Son / Wife / Daughter of
		 * Required
		 */
		swd_name: string;
	}
	export interface FitcerPostBodyCertificateParametersFormProperties {

		/**
		 * Full name
		 * Required
		 */
		FullName: FormControl<string | null | undefined>,

		/**
		 * Aadhaar number
		 * Required
		 */
		UID: FormControl<string | null | undefined>,

		/**
		 * Chassis No
		 * Required
		 */
		chasis_no: FormControl<string | null | undefined>,

		/**
		 * Vehicle Registration No
		 * Required
		 */
		reg_no: FormControl<string | null | undefined>,

		/**
		 * Son / Wife / Daughter of
		 * Required
		 */
		swd_name: FormControl<string | null | undefined>,
	}
	export function CreateFitcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<FitcerPostBodyCertificateParametersFormProperties>({
			FullName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			chasis_no: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reg_no: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			swd_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RvcerPostBody {
		certificateParameters?: RvcerPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: DrvlcPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface RvcerPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<DrvlcPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateRvcerPostBodyFormGroup() {
		return new FormGroup<RvcerPostBodyFormProperties>({
			format: new FormControl<DrvlcPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RvcerPostBodyCertificateParameters {

		/**
		 * Full name
		 * Required
		 */
		FullName: string;

		/**
		 * Aadhaar number
		 * Required
		 */
		UID: string;

		/**
		 * Chassis No
		 * Required
		 */
		chasis_no: string;

		/**
		 * Registration No
		 * Required
		 */
		reg_no: string;
	}
	export interface RvcerPostBodyCertificateParametersFormProperties {

		/**
		 * Full name
		 * Required
		 */
		FullName: FormControl<string | null | undefined>,

		/**
		 * Aadhaar number
		 * Required
		 */
		UID: FormControl<string | null | undefined>,

		/**
		 * Chassis No
		 * Required
		 */
		chasis_no: FormControl<string | null | undefined>,

		/**
		 * Registration No
		 * Required
		 */
		reg_no: FormControl<string | null | undefined>,
	}
	export function CreateRvcerPostBodyCertificateParametersFormGroup() {
		return new FormGroup<RvcerPostBodyCertificateParametersFormProperties>({
			FullName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			chasis_no: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reg_no: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VhinscPostBody {
		certificateParameters?: VhinscPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: VhinscPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface VhinscPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<VhinscPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateVhinscPostBodyFormGroup() {
		return new FormGroup<VhinscPostBodyFormProperties>({
			format: new FormControl<VhinscPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VhinscPostBodyCertificateParameters {

		/**
		 * Full name
		 * Required
		 */
		FullName: string;

		/**
		 * Aadhaar number
		 * Required
		 */
		UID: string;

		/**
		 * Chassis No
		 * Required
		 */
		chasis_no: string;

		/**
		 * Vehicle Registration No
		 * Required
		 */
		reg_no: string;

		/**
		 * Son / Wife / Daughter of
		 * Required
		 */
		swd_name: string;
	}
	export interface VhinscPostBodyCertificateParametersFormProperties {

		/**
		 * Full name
		 * Required
		 */
		FullName: FormControl<string | null | undefined>,

		/**
		 * Aadhaar number
		 * Required
		 */
		UID: FormControl<string | null | undefined>,

		/**
		 * Chassis No
		 * Required
		 */
		chasis_no: FormControl<string | null | undefined>,

		/**
		 * Vehicle Registration No
		 * Required
		 */
		reg_no: FormControl<string | null | undefined>,

		/**
		 * Son / Wife / Daughter of
		 * Required
		 */
		swd_name: FormControl<string | null | undefined>,
	}
	export function CreateVhinscPostBodyCertificateParametersFormGroup() {
		return new FormGroup<VhinscPostBodyCertificateParametersFormProperties>({
			FullName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			chasis_no: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reg_no: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			swd_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum VhinscPostBodyFormat { pdf = 'pdf' }

	export interface VhtaxPostBody {
		certificateParameters?: VhtaxPostBodyCertificateParameters;
		consentArtifact?: ConsentArtifactSchema;

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: VhinscPostBodyFormat;

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: string;
	}
	export interface VhtaxPostBodyFormProperties {

		/**
		 * The format of the certificate in response.
		 * Required
		 */
		format: FormControl<VhinscPostBodyFormat | null | undefined>,

		/**
		 * A unique transaction id for this request in UUID format. It is used for tracking the request.
		 * Required
		 */
		txnId: FormControl<string | null | undefined>,
	}
	export function CreateVhtaxPostBodyFormGroup() {
		return new FormGroup<VhtaxPostBodyFormProperties>({
			format: new FormControl<VhinscPostBodyFormat | null | undefined>(undefined, [Validators.required]),
			txnId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VhtaxPostBodyCertificateParameters {

		/**
		 * Full name
		 * Required
		 */
		FullName: string;

		/**
		 * Aadhaar number
		 * Required
		 */
		UID: string;

		/**
		 * Chassis No
		 * Required
		 */
		chasis_no: string;

		/**
		 * Vehicle Registration No
		 * Required
		 */
		reg_no: string;

		/**
		 * Son / Wife / Daughter of
		 * Required
		 */
		swd_name: string;
	}
	export interface VhtaxPostBodyCertificateParametersFormProperties {

		/**
		 * Full name
		 * Required
		 */
		FullName: FormControl<string | null | undefined>,

		/**
		 * Aadhaar number
		 * Required
		 */
		UID: FormControl<string | null | undefined>,

		/**
		 * Chassis No
		 * Required
		 */
		chasis_no: FormControl<string | null | undefined>,

		/**
		 * Vehicle Registration No
		 * Required
		 */
		reg_no: FormControl<string | null | undefined>,

		/**
		 * Son / Wife / Daughter of
		 * Required
		 */
		swd_name: FormControl<string | null | undefined>,
	}
	export function CreateVhtaxPostBodyCertificateParametersFormGroup() {
		return new FormGroup<VhtaxPostBodyCertificateParametersFormProperties>({
			FullName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			chasis_no: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reg_no: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			swd_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

}

