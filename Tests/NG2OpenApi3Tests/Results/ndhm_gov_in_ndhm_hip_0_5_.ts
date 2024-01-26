import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AccessTokenValidity {

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		expiry: Date;

		/**
		 * number of times, the token can be used
		 * Required
		 */
		limit: number;

		/**
		 * what is the purpose of user auth
		 * Required
		 */
		purpose: AccessTokenValidityPurpose;

		/**
		 * identification of requester
		 * Required
		 */
		requester: PatientAuthRequester;
	}
	export interface AccessTokenValidityFormProperties {

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		expiry: FormControl<Date | null | undefined>,

		/**
		 * number of times, the token can be used
		 * Required
		 */
		limit: FormControl<number | null | undefined>,

		/**
		 * what is the purpose of user auth
		 * Required
		 */
		purpose: FormControl<AccessTokenValidityPurpose | null | undefined>,
	}
	export function CreateAccessTokenValidityFormGroup() {
		return new FormGroup<AccessTokenValidityFormProperties>({
			expiry: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			limit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			purpose: new FormControl<AccessTokenValidityPurpose | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AccessTokenValidityPurpose { LINK = 'LINK', KYC = 'KYC', KYC_AND_LINK = 'KYC_AND_LINK' }


	/** identification of requester */
	export interface PatientAuthRequester {

		/** Required */
		id: string;

		/** Required */
		type: PatientAuthRequesterType;
	}

	/** identification of requester */
	export interface PatientAuthRequesterFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<PatientAuthRequesterType | null | undefined>,
	}
	export function CreatePatientAuthRequesterFormGroup() {
		return new FormGroup<PatientAuthRequesterFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<PatientAuthRequesterType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PatientAuthRequesterType { HIP = 'HIP', HIU = 'HIU' }

	export interface AuthConfirmIdentifier {

		/** Required */
		type: AuthConfirmIdentifierType;

		/** Required */
		value: string;
	}
	export interface AuthConfirmIdentifierFormProperties {

		/** Required */
		type: FormControl<AuthConfirmIdentifierType | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAuthConfirmIdentifierFormGroup() {
		return new FormGroup<AuthConfirmIdentifierFormProperties>({
			type: new FormControl<AuthConfirmIdentifierType | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AuthConfirmIdentifierType { MOBILE = 'MOBILE' }

	export interface AuthMeta {
		expiry?: string | null;
		hint?: string | null;
	}
	export interface AuthMetaFormProperties {
		expiry: FormControl<string | null | undefined>,
		hint: FormControl<string | null | undefined>,
	}
	export function CreateAuthMetaFormGroup() {
		return new FormGroup<AuthMetaFormProperties>({
			expiry: new FormControl<string | null | undefined>(undefined),
			hint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Subjected to CM specific capability
	 *  1. MOBILE_OTP - for SMS OTP
	 *  2. DIRECT - for authentication directly with the patient. e.g. Mobile App, SMS
	 *  3. AADHAAR_OTP - for auth using OTP sent to Aadhaar number
	 *  4. DEMOGRAPHICS - for auth using demographic verification.
	 */
	export enum AuthenticationMode { MOBILE_OTP = 'MOBILE_OTP', DIRECT = 'DIRECT', DEMOGRAPHICS = 'DEMOGRAPHICS', AADHAAR_OTP = 'AADHAAR_OTP' }

	export interface CareContext {

		/** Required */
		referenceNumber: string;
	}
	export interface CareContextFormProperties {

		/** Required */
		referenceNumber: FormControl<string | null | undefined>,
	}
	export function CreateCareContextFormGroup() {
		return new FormGroup<CareContextFormProperties>({
			referenceNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CareContextRepresentation {

		/** Required */
		display: string;

		/** Required */
		referenceNumber: string;
	}
	export interface CareContextRepresentationFormProperties {

		/** Required */
		display: FormControl<string | null | undefined>,

		/** Required */
		referenceNumber: FormControl<string | null | undefined>,
	}
	export function CreateCareContextRepresentationFormGroup() {
		return new FormGroup<CareContextRepresentationFormProperties>({
			display: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			referenceNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CertificateOrKeyGetSchema {
		alg?: string | null;
		e?: string | null;
		kid?: string | null;
		kty?: string | null;
		n?: string | null;
		use?: string | null;
		x5c?: Array<string>;
		x5t?: string | null;
		'x5t#S256'?: string | null;
	}
	export interface CertificateOrKeyGetSchemaFormProperties {
		alg: FormControl<string | null | undefined>,
		e: FormControl<string | null | undefined>,
		kid: FormControl<string | null | undefined>,
		kty: FormControl<string | null | undefined>,
		n: FormControl<string | null | undefined>,
		use: FormControl<string | null | undefined>,
		x5t: FormControl<string | null | undefined>,
		'x5t#S256': FormControl<string | null | undefined>,
	}
	export function CreateCertificateOrKeyGetSchemaFormGroup() {
		return new FormGroup<CertificateOrKeyGetSchemaFormProperties>({
			alg: new FormControl<string | null | undefined>(undefined),
			e: new FormControl<string | null | undefined>(undefined),
			kid: new FormControl<string | null | undefined>(undefined),
			kty: new FormControl<string | null | undefined>(undefined),
			n: new FormControl<string | null | undefined>(undefined),
			use: new FormControl<string | null | undefined>(undefined),
			x5t: new FormControl<string | null | undefined>(undefined),
			'x5t#S256': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Certs {
		keys?: Array<CertificateOrKeyGetSchema>;
	}
	export interface CertsFormProperties {
	}
	export function CreateCertsFormGroup() {
		return new FormGroup<CertsFormProperties>({
		});

	}

	export interface ConsentAcknowledgement {

		/** Required */
		consentId: string;

		/** Required */
		status: ConsentAcknowledgementStatus;
	}
	export interface ConsentAcknowledgementFormProperties {

		/** Required */
		consentId: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ConsentAcknowledgementStatus | null | undefined>,
	}
	export function CreateConsentAcknowledgementFormGroup() {
		return new FormGroup<ConsentAcknowledgementFormProperties>({
			consentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ConsentAcknowledgementStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConsentAcknowledgementStatus { OK = 'OK', UNKNOWN = 'UNKNOWN' }

	export interface ConsentManagerPatientID {

		/** Required */
		id: string;
	}
	export interface ConsentManagerPatientIDFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateConsentManagerPatientIDFormGroup() {
		return new FormGroup<ConsentManagerPatientIDFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConsentStatus { GRANTED = 'GRANTED', EXPIRED = 'EXPIRED', DENIED = 'DENIED', REQUESTED = 'REQUESTED', REVOKED = 'REVOKED' }

	export interface DataNotification {

		/** Required */
		entries: Array<string>;

		/** Required */
		keyMaterial: KeyMaterial;

		/**
		 * Total number of pages.
		 * Required
		 */
		pageCount: number;

		/**
		 * Current page number.
		 * Required
		 */
		pageNumber: number;

		/**
		 * Transaction Id issued when data requested.
		 * Required
		 */
		transactionId: string;
	}
	export interface DataNotificationFormProperties {

		/**
		 * Total number of pages.
		 * Required
		 */
		pageCount: FormControl<number | null | undefined>,

		/**
		 * Current page number.
		 * Required
		 */
		pageNumber: FormControl<number | null | undefined>,

		/**
		 * Transaction Id issued when data requested.
		 * Required
		 */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateDataNotificationFormGroup() {
		return new FormGroup<DataNotificationFormProperties>({
			pageCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			pageNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			transactionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface KeyMaterial {

		/** Required */
		cryptoAlg: string;

		/** Required */
		curve: string;

		/** Required */
		dhPublicKey: KeyObject;

		/** Required */
		nonce: string;
	}
	export interface KeyMaterialFormProperties {

		/** Required */
		cryptoAlg: FormControl<string | null | undefined>,

		/** Required */
		curve: FormControl<string | null | undefined>,

		/** Required */
		nonce: FormControl<string | null | undefined>,
	}
	export function CreateKeyMaterialFormGroup() {
		return new FormGroup<KeyMaterialFormProperties>({
			cryptoAlg: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			curve: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nonce: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface KeyObject {

		/** Required */
		expiry: Date;

		/** Required */
		keyValue: string;

		/** Required */
		parameters: string;
	}
	export interface KeyObjectFormProperties {

		/** Required */
		expiry: FormControl<Date | null | undefined>,

		/** Required */
		keyValue: FormControl<string | null | undefined>,

		/** Required */
		parameters: FormControl<string | null | undefined>,
	}
	export function CreateKeyObjectFormGroup() {
		return new FormGroup<KeyObjectFormProperties>({
			expiry: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			keyValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parameters: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DateRange {

		/** Required */
		from: Date;

		/** Required */
		to: Date;
	}
	export interface DateRangeFormProperties {

		/** Required */
		from: FormControl<Date | null | undefined>,

		/** Required */
		to: FormControl<Date | null | undefined>,
	}
	export function CreateDateRangeFormGroup() {
		return new FormGroup<DateRangeFormProperties>({
			from: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			to: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EntryContent {

		/**
		 * care context reference number.
		 * Required
		 */
		careContextReference: string;

		/**
		 * Md5 checksum of the content before encryption
		 * Required
		 */
		checksum: string;

		/**
		 * Encrypted content
		 * Required
		 */
		content: string;

		/**
		 * mimetype of the content.
		 * Required
		 */
		media: EntryContentMedia;
	}
	export interface EntryContentFormProperties {

		/**
		 * care context reference number.
		 * Required
		 */
		careContextReference: FormControl<string | null | undefined>,

		/**
		 * Md5 checksum of the content before encryption
		 * Required
		 */
		checksum: FormControl<string | null | undefined>,

		/**
		 * Encrypted content
		 * Required
		 */
		content: FormControl<string | null | undefined>,

		/**
		 * mimetype of the content.
		 * Required
		 */
		media: FormControl<EntryContentMedia | null | undefined>,
	}
	export function CreateEntryContentFormGroup() {
		return new FormGroup<EntryContentFormProperties>({
			careContextReference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			checksum: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			media: new FormControl<EntryContentMedia | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EntryContentMedia { 'application/fhir+json' = 'application/fhir+json' }

	export interface EntryLink {

		/**
		 * care context reference number.
		 * Required
		 */
		careContextReference: string;

		/**
		 * Md5 checksum of the content before encryption
		 * Required
		 */
		checksum: string;

		/**
		 * Encrypted content
		 * Required
		 */
		link: string;

		/**
		 * mimetype of the content.
		 * Required
		 */
		media: EntryContentMedia;
	}
	export interface EntryLinkFormProperties {

		/**
		 * care context reference number.
		 * Required
		 */
		careContextReference: FormControl<string | null | undefined>,

		/**
		 * Md5 checksum of the content before encryption
		 * Required
		 */
		checksum: FormControl<string | null | undefined>,

		/**
		 * Encrypted content
		 * Required
		 */
		link: FormControl<string | null | undefined>,

		/**
		 * mimetype of the content.
		 * Required
		 */
		media: FormControl<EntryContentMedia | null | undefined>,
	}
	export function CreateEntryLinkFormGroup() {
		return new FormGroup<EntryLinkFormProperties>({
			careContextReference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			checksum: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			media: new FormControl<EntryContentMedia | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Error {

		/** Required */
		code: ErrorCode;

		/** Required */
		message: string;
	}
	export interface ErrorFormProperties {

		/** Required */
		code: FormControl<ErrorCode | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<ErrorCode | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ErrorCode { _1000 = 0, _10001 = 1 }

	export interface ErrorResponse {
		error?: Error;
	}
	export interface ErrorResponseFormProperties {
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
		});

	}

	export interface HIPConsentNotification {

		/** Required */
		notification: HIPConsentNotificationNotification;

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: string;

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: Date;
	}
	export interface HIPConsentNotificationFormProperties {

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateHIPConsentNotificationFormGroup() {
		return new FormGroup<HIPConsentNotificationFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HIPConsentNotificationNotification {

		/** Required */
		consentDetail: HIPConsentNotificationNotificationConsentDetail;

		/** Required */
		consentId: string;

		/** Required */
		signature: string;

		/** Required */
		status: ConsentStatus;
	}
	export interface HIPConsentNotificationNotificationFormProperties {

		/** Required */
		consentId: FormControl<string | null | undefined>,

		/** Required */
		signature: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ConsentStatus | null | undefined>,
	}
	export function CreateHIPConsentNotificationNotificationFormGroup() {
		return new FormGroup<HIPConsentNotificationNotificationFormProperties>({
			consentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			signature: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ConsentStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HIPConsentNotificationNotificationConsentDetail {

		/** Required */
		HIPConsentNotificationNotificationConsentDetailCareContexts: Array<HIPConsentNotificationNotificationConsentDetailCareContexts>;

		/** Required */
		consentId: string;

		/** Required */
		consentManager: string;

		/** Required */
		createdAt: Date;

		/** Required */
		hiTypes: Array<HITypeEnum>;

		/** Required */
		hip: string;

		/** Required */
		patient: ConsentManagerPatientID;

		/** Required */
		permission: Permission;

		/** Required */
		purpose: UsePurpose;
		schemaVersion?: string | null;
	}
	export interface HIPConsentNotificationNotificationConsentDetailFormProperties {

		/** Required */
		consentId: FormControl<string | null | undefined>,

		/** Required */
		consentManager: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		hip: FormControl<string | null | undefined>,
		schemaVersion: FormControl<string | null | undefined>,
	}
	export function CreateHIPConsentNotificationNotificationConsentDetailFormGroup() {
		return new FormGroup<HIPConsentNotificationNotificationConsentDetailFormProperties>({
			consentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			consentManager: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			hip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schemaVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HIPConsentNotificationNotificationConsentDetailCareContexts {

		/** Required */
		careContextReference: string;

		/** Required */
		patientReference: string;
	}
	export interface HIPConsentNotificationNotificationConsentDetailCareContextsFormProperties {

		/** Required */
		careContextReference: FormControl<string | null | undefined>,

		/** Required */
		patientReference: FormControl<string | null | undefined>,
	}
	export function CreateHIPConsentNotificationNotificationConsentDetailCareContextsFormGroup() {
		return new FormGroup<HIPConsentNotificationNotificationConsentDetailCareContextsFormProperties>({
			careContextReference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			patientReference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum HITypeEnum { OPConsultation = 'OPConsultation', Prescription = 'Prescription', DischargeSummary = 'DischargeSummary', DiagnosticReport = 'DiagnosticReport' }

	export interface Permission {

		/** Required */
		accessMode: PermissionAccessMode;

		/** Required */
		dataEraseAt: Date;

		/** Required */
		dateRange: PermissionDateRange;

		/** Required */
		frequency: PermissionFrequency;
	}
	export interface PermissionFormProperties {

		/** Required */
		accessMode: FormControl<PermissionAccessMode | null | undefined>,

		/** Required */
		dataEraseAt: FormControl<Date | null | undefined>,
	}
	export function CreatePermissionFormGroup() {
		return new FormGroup<PermissionFormProperties>({
			accessMode: new FormControl<PermissionAccessMode | null | undefined>(undefined, [Validators.required]),
			dataEraseAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PermissionAccessMode { VIEW = 'VIEW', STORE = 'STORE', QUERY = 'QUERY', STREAM = 'STREAM' }

	export interface PermissionDateRange {

		/** Required */
		from: Date;

		/** Required */
		to: Date;
	}
	export interface PermissionDateRangeFormProperties {

		/** Required */
		from: FormControl<Date | null | undefined>,

		/** Required */
		to: FormControl<Date | null | undefined>,
	}
	export function CreatePermissionDateRangeFormGroup() {
		return new FormGroup<PermissionDateRangeFormProperties>({
			from: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			to: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PermissionFrequency {
		repeats?: number | null;
		unit?: PermissionFrequencyUnit | null;
		value?: number | null;
	}
	export interface PermissionFrequencyFormProperties {
		repeats: FormControl<number | null | undefined>,
		unit: FormControl<PermissionFrequencyUnit | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreatePermissionFrequencyFormGroup() {
		return new FormGroup<PermissionFrequencyFormProperties>({
			repeats: new FormControl<number | null | undefined>(undefined),
			unit: new FormControl<PermissionFrequencyUnit | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PermissionFrequencyUnit { HOUR = 'HOUR', WEEK = 'WEEK', DAY = 'DAY', MONTH = 'MONTH', YEAR = 'YEAR' }

	export interface UsePurpose {

		/**
		 * From the fixed set, documented at refUri
		 * Required
		 */
		code: string;
		refUri?: string | null;

		/** Required */
		text: string;
	}
	export interface UsePurposeFormProperties {

		/**
		 * From the fixed set, documented at refUri
		 * Required
		 */
		code: FormControl<string | null | undefined>,
		refUri: FormControl<string | null | undefined>,

		/** Required */
		text: FormControl<string | null | undefined>,
	}
	export function CreateUsePurposeFormGroup() {
		return new FormGroup<UsePurposeFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			refUri: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HIPConsentNotificationResponse {
		acknowledgement?: ConsentAcknowledgement;
		error?: Error;

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: string;

		/** Required */
		resp: RequestReference;

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: Date;
	}
	export interface HIPConsentNotificationResponseFormProperties {

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateHIPConsentNotificationResponseFormGroup() {
		return new FormGroup<HIPConsentNotificationResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RequestReference {

		/**
		 * the requestId that was passed
		 * Required
		 */
		requestId: string;
	}
	export interface RequestReferenceFormProperties {

		/**
		 * the requestId that was passed
		 * Required
		 */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateRequestReferenceFormGroup() {
		return new FormGroup<RequestReferenceFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HIPHealthInformationRequest {

		/** Required */
		hiRequest: HIPHealthInformationRequestHiRequest;

		/** Required */
		requestId: string;

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: Date;

		/** Required */
		transactionId: string;
	}
	export interface HIPHealthInformationRequestFormProperties {

		/** Required */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: FormControl<Date | null | undefined>,

		/** Required */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateHIPHealthInformationRequestFormGroup() {
		return new FormGroup<HIPHealthInformationRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			transactionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HIPHealthInformationRequestHiRequest {

		/** Required */
		consent: Consent;

		/** Required */
		dataPushUrl: string;

		/** Required */
		dateRange: DateRange;

		/** Required */
		keyMaterial: KeyMaterial;
	}
	export interface HIPHealthInformationRequestHiRequestFormProperties {

		/** Required */
		dataPushUrl: FormControl<string | null | undefined>,
	}
	export function CreateHIPHealthInformationRequestHiRequestFormGroup() {
		return new FormGroup<HIPHealthInformationRequestHiRequestFormProperties>({
			dataPushUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Consent {

		/** Required */
		id: string;
	}
	export interface ConsentFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateConsentFormGroup() {
		return new FormGroup<ConsentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HIPHealthInformationRequestAcknowledgement {
		error?: Error;
		hiRequest?: HIPHealthInformationRequestAcknowledgementHiRequest;

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: string;

		/** Required */
		resp: RequestReference;

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: Date;
	}
	export interface HIPHealthInformationRequestAcknowledgementFormProperties {

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateHIPHealthInformationRequestAcknowledgementFormGroup() {
		return new FormGroup<HIPHealthInformationRequestAcknowledgementFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HIPHealthInformationRequestAcknowledgementHiRequest {

		/** Required */
		sessionStatus: HIPHealthInformationRequestAcknowledgementHiRequestSessionStatus;

		/** Required */
		transactionId: string;
	}
	export interface HIPHealthInformationRequestAcknowledgementHiRequestFormProperties {

		/** Required */
		sessionStatus: FormControl<HIPHealthInformationRequestAcknowledgementHiRequestSessionStatus | null | undefined>,

		/** Required */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateHIPHealthInformationRequestAcknowledgementHiRequestFormGroup() {
		return new FormGroup<HIPHealthInformationRequestAcknowledgementHiRequestFormProperties>({
			sessionStatus: new FormControl<HIPHealthInformationRequestAcknowledgementHiRequestSessionStatus | null | undefined>(undefined, [Validators.required]),
			transactionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum HIPHealthInformationRequestAcknowledgementHiRequestSessionStatus { ACKNOWLEDGED = 'ACKNOWLEDGED' }

	export interface HealthInformationNotification {

		/** Required */
		notification: HealthInformationNotificationNotification;

		/**
		 * a nonce, unique for each HTTP request.
		 * Required
		 */
		requestId: string;

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: Date;
	}
	export interface HealthInformationNotificationFormProperties {

		/**
		 * a nonce, unique for each HTTP request.
		 * Required
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateHealthInformationNotificationFormGroup() {
		return new FormGroup<HealthInformationNotificationFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HealthInformationNotificationNotification {

		/** Required */
		consentId: string;

		/** Required */
		doneAt: Date;

		/** Required */
		notifier: HealthInformationNotificationNotificationNotifier;

		/** Required */
		statusNotification: HealthInformationNotificationNotificationStatusNotification;

		/** Required */
		transactionId: string;
	}
	export interface HealthInformationNotificationNotificationFormProperties {

		/** Required */
		consentId: FormControl<string | null | undefined>,

		/** Required */
		doneAt: FormControl<Date | null | undefined>,

		/** Required */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateHealthInformationNotificationNotificationFormGroup() {
		return new FormGroup<HealthInformationNotificationNotificationFormProperties>({
			consentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			doneAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			transactionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HealthInformationNotificationNotificationNotifier {
		id?: string | null;
		type?: HealthInformationNotificationNotificationNotifierType | null;
	}
	export interface HealthInformationNotificationNotificationNotifierFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<HealthInformationNotificationNotificationNotifierType | null | undefined>,
	}
	export function CreateHealthInformationNotificationNotificationNotifierFormGroup() {
		return new FormGroup<HealthInformationNotificationNotificationNotifierFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<HealthInformationNotificationNotificationNotifierType | null | undefined>(undefined),
		});

	}

	export enum HealthInformationNotificationNotificationNotifierType { HIU = 'HIU', HIP = 'HIP' }

	export interface HealthInformationNotificationNotificationStatusNotification {

		/** Required */
		hipId: string;

		/** Required */
		sessionStatus: HealthInformationNotificationNotificationStatusNotificationSessionStatus;
		HealthInformationNotificationNotificationStatusNotificationStatusResponses?: Array<HealthInformationNotificationNotificationStatusNotificationStatusResponses>;
	}
	export interface HealthInformationNotificationNotificationStatusNotificationFormProperties {

		/** Required */
		hipId: FormControl<string | null | undefined>,

		/** Required */
		sessionStatus: FormControl<HealthInformationNotificationNotificationStatusNotificationSessionStatus | null | undefined>,
	}
	export function CreateHealthInformationNotificationNotificationStatusNotificationFormGroup() {
		return new FormGroup<HealthInformationNotificationNotificationStatusNotificationFormProperties>({
			hipId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sessionStatus: new FormControl<HealthInformationNotificationNotificationStatusNotificationSessionStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum HealthInformationNotificationNotificationStatusNotificationSessionStatus { TRANSFERRED = 'TRANSFERRED', FAILED = 'FAILED' }

	export interface HealthInformationNotificationNotificationStatusNotificationStatusResponses {

		/** Required */
		careContextReference: string;
		description?: string | null;

		/** Required */
		hiStatus: HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatus;
	}
	export interface HealthInformationNotificationNotificationStatusNotificationStatusResponsesFormProperties {

		/** Required */
		careContextReference: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		hiStatus: FormControl<HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatus | null | undefined>,
	}
	export function CreateHealthInformationNotificationNotificationStatusNotificationStatusResponsesFormGroup() {
		return new FormGroup<HealthInformationNotificationNotificationStatusNotificationStatusResponsesFormProperties>({
			careContextReference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			hiStatus: new FormControl<HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatus { DELIVERED = 'DELIVERED', OK = 'OK', ERRORED = 'ERRORED' }

	export interface HeartbeatResponse {
		error?: Error;

		/** Required */
		status: HeartbeatResponseStatus;

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: Date;
	}
	export interface HeartbeatResponseFormProperties {

		/** Required */
		status: FormControl<HeartbeatResponseStatus | null | undefined>,

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateHeartbeatResponseFormGroup() {
		return new FormGroup<HeartbeatResponseFormProperties>({
			status: new FormControl<HeartbeatResponseStatus | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum HeartbeatResponseStatus { UP = 'UP', DOWN = 'DOWN' }

	export interface Identifier {

		/** Required */
		type: IdentifierType;

		/** Required */
		value: string;
	}
	export interface IdentifierFormProperties {

		/** Required */
		type: FormControl<IdentifierType | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateIdentifierFormGroup() {
		return new FormGroup<IdentifierFormProperties>({
			type: new FormControl<IdentifierType | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IdentifierType { MOBILE = 'MOBILE', MR = 'MR', NDHM_HEALTH_NUMBER = 'NDHM_HEALTH_NUMBER', HEALTH_ID = 'HEALTH_ID' }

	export interface LinkConfirmationRequest {

		/** Required */
		confirmation: LinkConfirmationRequestConfirmation;

		/** Required */
		requestId: string;

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: Date;
	}
	export interface LinkConfirmationRequestFormProperties {

		/** Required */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateLinkConfirmationRequestFormGroup() {
		return new FormGroup<LinkConfirmationRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LinkConfirmationRequestConfirmation {

		/** Required */
		linkRefNumber: string;

		/** Required */
		token: string;
	}
	export interface LinkConfirmationRequestConfirmationFormProperties {

		/** Required */
		linkRefNumber: FormControl<string | null | undefined>,

		/** Required */
		token: FormControl<string | null | undefined>,
	}
	export function CreateLinkConfirmationRequestConfirmationFormGroup() {
		return new FormGroup<LinkConfirmationRequestConfirmationFormProperties>({
			linkRefNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Meta {
		communicationExpiry?: string | null;
		communicationHint?: string | null;

		/** Required */
		communicationMedium: MetaCommunicationMedium;
	}
	export interface MetaFormProperties {
		communicationExpiry: FormControl<string | null | undefined>,
		communicationHint: FormControl<string | null | undefined>,

		/** Required */
		communicationMedium: FormControl<MetaCommunicationMedium | null | undefined>,
	}
	export function CreateMetaFormGroup() {
		return new FormGroup<MetaFormProperties>({
			communicationExpiry: new FormControl<string | null | undefined>(undefined),
			communicationHint: new FormControl<string | null | undefined>(undefined),
			communicationMedium: new FormControl<MetaCommunicationMedium | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MetaCommunicationMedium { MOBILE = 'MOBILE', EMAIL = 'EMAIL' }

	export interface OpenIdConfiguration {
		jwks_uri?: string | null;
	}
	export interface OpenIdConfigurationFormProperties {
		jwks_uri: FormControl<string | null | undefined>,
	}
	export function CreateOpenIdConfigurationFormGroup() {
		return new FormGroup<OpenIdConfigurationFormProperties>({
			jwks_uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrganizationReference {

		/** Required */
		id: string;
	}
	export interface OrganizationReferenceFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationReferenceFormGroup() {
		return new FormGroup<OrganizationReferenceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OrganizationRepresentation {

		/** Required */
		id: string;
	}
	export interface OrganizationRepresentationFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationRepresentationFormGroup() {
		return new FormGroup<OrganizationRepresentationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientAddress {
		district?: string | null;
		line?: string | null;
		pincode?: string | null;
		state?: string | null;
	}
	export interface PatientAddressFormProperties {
		district: FormControl<string | null | undefined>,
		line: FormControl<string | null | undefined>,
		pincode: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
	}
	export function CreatePatientAddressFormGroup() {
		return new FormGroup<PatientAddressFormProperties>({
			district: new FormControl<string | null | undefined>(undefined),
			line: new FormControl<string | null | undefined>(undefined),
			pincode: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatientAuthConfirmRequest {

		/**
		 * note, demographic details are only required for demographic auth at this point.
		 * Required
		 */
		credential: PatientAuthConfirmRequestCredential;

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: string;

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: Date;

		/** Required */
		transactionId: string;
	}
	export interface PatientAuthConfirmRequestFormProperties {

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: FormControl<Date | null | undefined>,

		/** Required */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreatePatientAuthConfirmRequestFormGroup() {
		return new FormGroup<PatientAuthConfirmRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			transactionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientAuthConfirmRequestCredential {
		authCode?: string | null;

		/** demographic details are only required for demographic auth at this point, in which case identifier.Type must be AADHAAR. */
		demographic?: PatientDemographic;
	}
	export interface PatientAuthConfirmRequestCredentialFormProperties {
		authCode: FormControl<string | null | undefined>,
	}
	export function CreatePatientAuthConfirmRequestCredentialFormGroup() {
		return new FormGroup<PatientAuthConfirmRequestCredentialFormProperties>({
			authCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** demographic details are only required for demographic auth at this point, in which case identifier.Type must be AADHAAR. */
	export interface PatientDemographic {

		/**
		 * date of birth in YYYY-MM-DD format.
		 * Required
		 */
		dateOfBirth: string;

		/** Required */
		gender: PatientDemographicGender;
		identifier?: AuthConfirmIdentifier;

		/** Required */
		name: string;
	}

	/** demographic details are only required for demographic auth at this point, in which case identifier.Type must be AADHAAR. */
	export interface PatientDemographicFormProperties {

		/**
		 * date of birth in YYYY-MM-DD format.
		 * Required
		 */
		dateOfBirth: FormControl<string | null | undefined>,

		/** Required */
		gender: FormControl<PatientDemographicGender | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePatientDemographicFormGroup() {
		return new FormGroup<PatientDemographicFormProperties>({
			dateOfBirth: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gender: new FormControl<PatientDemographicGender | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PatientDemographicGender { M = 'M', F = 'F', O = 'O', U = 'U' }

	export interface PatientAuthConfirmResponse {

		/**
		 * depending on the purpose of auth, as specified in /auth/init, the response may include the following
		 * 1. LINK - only returns **accessToken**
		 * 2. KYC - only returns **patient**
		 * 3. KYC_AND_LINK - returns both **accessToken** and **patient**
		 */
		auth?: PatientAuthConfirmResponseAuth;
		error?: Error;

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: string;

		/** Required */
		resp: RequestReference;

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: Date;
	}
	export interface PatientAuthConfirmResponseFormProperties {

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreatePatientAuthConfirmResponseFormGroup() {
		return new FormGroup<PatientAuthConfirmResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientAuthConfirmResponseAuth {

		/** access token for initialization of subsequent action. */
		accessToken?: string | null;
		patient?: PatientDemographicResponse;
		validity?: AccessTokenValidity;
	}
	export interface PatientAuthConfirmResponseAuthFormProperties {

		/** access token for initialization of subsequent action. */
		accessToken: FormControl<string | null | undefined>,
	}
	export function CreatePatientAuthConfirmResponseAuthFormGroup() {
		return new FormGroup<PatientAuthConfirmResponseAuthFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatientDemographicResponse {
		address?: PatientAddress;

		/** Required */
		gender: PatientDemographicGender;

		/**
		 * PHR Identifier of patient at consent manager
		 * Required
		 */
		id: string;
		identifiers?: Array<Identifier>;

		/** Required */
		name: string;

		/** Required */
		yearOfBirth: number;
	}
	export interface PatientDemographicResponseFormProperties {

		/** Required */
		gender: FormControl<PatientDemographicGender | null | undefined>,

		/**
		 * PHR Identifier of patient at consent manager
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		yearOfBirth: FormControl<number | null | undefined>,
	}
	export function CreatePatientDemographicResponseFormGroup() {
		return new FormGroup<PatientDemographicResponseFormProperties>({
			gender: new FormControl<PatientDemographicGender | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			yearOfBirth: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientAuthInitRequest {

		/** Required */
		query: PatientAuthInitRequestQuery;

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: string;

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: Date;
	}
	export interface PatientAuthInitRequestFormProperties {

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreatePatientAuthInitRequestFormGroup() {
		return new FormGroup<PatientAuthInitRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientAuthInitRequestQuery {

		/**
		 * Subjected to CM specific capability
		 * 1. MOBILE_OTP - for SMS OTP
		 * 2. DIRECT - for authentication directly with the patient. e.g. Mobile App, SMS
		 * 3. AADHAAR_OTP - for auth using OTP sent to Aadhaar number
		 * 4. DEMOGRAPHICS - for auth using demographic verification.
		 */
		authMode?: AuthenticationMode | null;

		/**
		 * id  of the patient understood by the CM
		 * Required
		 */
		id: string;

		/**
		 * what is the purpose of user auth
		 * Required
		 */
		purpose: AccessTokenValidityPurpose;

		/**
		 * identification of requester
		 * Required
		 */
		requester: PatientAuthInitRequestQueryRequester;
	}
	export interface PatientAuthInitRequestQueryFormProperties {

		/**
		 * Subjected to CM specific capability
		 * 1. MOBILE_OTP - for SMS OTP
		 * 2. DIRECT - for authentication directly with the patient. e.g. Mobile App, SMS
		 * 3. AADHAAR_OTP - for auth using OTP sent to Aadhaar number
		 * 4. DEMOGRAPHICS - for auth using demographic verification.
		 */
		authMode: FormControl<AuthenticationMode | null | undefined>,

		/**
		 * id  of the patient understood by the CM
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * what is the purpose of user auth
		 * Required
		 */
		purpose: FormControl<AccessTokenValidityPurpose | null | undefined>,
	}
	export function CreatePatientAuthInitRequestQueryFormGroup() {
		return new FormGroup<PatientAuthInitRequestQueryFormProperties>({
			authMode: new FormControl<AuthenticationMode | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			purpose: new FormControl<AccessTokenValidityPurpose | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientAuthInitRequestQueryRequester {

		/** Required */
		id: string;

		/** Required */
		type: PatientAuthRequesterType;
	}
	export interface PatientAuthInitRequestQueryRequesterFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<PatientAuthRequesterType | null | undefined>,
	}
	export function CreatePatientAuthInitRequestQueryRequesterFormGroup() {
		return new FormGroup<PatientAuthInitRequestQueryRequesterFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<PatientAuthRequesterType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientAuthInitResponse {
		auth?: PatientAuthInitResponseAuth;
		error?: Error;

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: string;

		/** Required */
		resp: RequestReference;

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: Date;
	}
	export interface PatientAuthInitResponseFormProperties {

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreatePatientAuthInitResponseFormGroup() {
		return new FormGroup<PatientAuthInitResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientAuthInitResponseAuth {
		meta?: AuthMeta;

		/**
		 * Subjected to CM specific capability
		 * 1. MOBILE_OTP - for SMS OTP
		 * 2. DIRECT - for authentication directly with the patient. e.g. Mobile App, SMS
		 * 3. AADHAAR_OTP - for auth using OTP sent to Aadhaar number
		 * 4. DEMOGRAPHICS - for auth using demographic verification.
		 * Required
		 */
		mode: AuthenticationMode;

		/** Required */
		transactionId: string;
	}
	export interface PatientAuthInitResponseAuthFormProperties {

		/**
		 * Subjected to CM specific capability
		 * 1. MOBILE_OTP - for SMS OTP
		 * 2. DIRECT - for authentication directly with the patient. e.g. Mobile App, SMS
		 * 3. AADHAAR_OTP - for auth using OTP sent to Aadhaar number
		 * 4. DEMOGRAPHICS - for auth using demographic verification.
		 * Required
		 */
		mode: FormControl<AuthenticationMode | null | undefined>,

		/** Required */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreatePatientAuthInitResponseAuthFormGroup() {
		return new FormGroup<PatientAuthInitResponseAuthFormProperties>({
			mode: new FormControl<AuthenticationMode | null | undefined>(undefined, [Validators.required]),
			transactionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientAuthModeQueryRequest {

		/** Required */
		query: PatientAuthModeQueryRequestQuery;

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: string;

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: Date;
	}
	export interface PatientAuthModeQueryRequestFormProperties {

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreatePatientAuthModeQueryRequestFormGroup() {
		return new FormGroup<PatientAuthModeQueryRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientAuthModeQueryRequestQuery {

		/** Required */
		id: string;

		/**
		 * what is the purpose of user auth
		 * Required
		 */
		purpose: AccessTokenValidityPurpose;

		/** Required */
		requester: PatientAuthModeQueryRequestQueryRequester;
	}
	export interface PatientAuthModeQueryRequestQueryFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * what is the purpose of user auth
		 * Required
		 */
		purpose: FormControl<AccessTokenValidityPurpose | null | undefined>,
	}
	export function CreatePatientAuthModeQueryRequestQueryFormGroup() {
		return new FormGroup<PatientAuthModeQueryRequestQueryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			purpose: new FormControl<AccessTokenValidityPurpose | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientAuthModeQueryRequestQueryRequester {

		/** Required */
		id: string;

		/** Required */
		type: PatientAuthRequesterType;
	}
	export interface PatientAuthModeQueryRequestQueryRequesterFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<PatientAuthRequesterType | null | undefined>,
	}
	export function CreatePatientAuthModeQueryRequestQueryRequesterFormGroup() {
		return new FormGroup<PatientAuthModeQueryRequestQueryRequesterFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<PatientAuthRequesterType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientAuthModeQueryResponse {
		auth?: PatientAuthModeQueryResponseAuth;
		error?: Error;

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: string;

		/** Required */
		resp: RequestReference;

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: Date;
	}
	export interface PatientAuthModeQueryResponseFormProperties {

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreatePatientAuthModeQueryResponseFormGroup() {
		return new FormGroup<PatientAuthModeQueryResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientAuthModeQueryResponseAuth {

		/** Required */
		modes: Array<AuthenticationMode>;

		/**
		 * what is the purpose of user auth
		 * Required
		 */
		purpose: AccessTokenValidityPurpose;
	}
	export interface PatientAuthModeQueryResponseAuthFormProperties {

		/**
		 * what is the purpose of user auth
		 * Required
		 */
		purpose: FormControl<AccessTokenValidityPurpose | null | undefined>,
	}
	export function CreatePatientAuthModeQueryResponseAuthFormGroup() {
		return new FormGroup<PatientAuthModeQueryResponseAuthFormProperties>({
			purpose: new FormControl<AccessTokenValidityPurpose | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientAuthNotification {

		/**
		 * depending on the purpose of auth, as specified in /auth/init, the response may include the following
		 * 1. LINK - only returns **accessToken**
		 * 2. KYC - only returns **patient**
		 * 3. KYC_AND_LINK - returns both **accessToken** and **patient**
		 */
		auth?: PatientAuthNotificationAuth;

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: string;

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: Date;
	}
	export interface PatientAuthNotificationFormProperties {

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreatePatientAuthNotificationFormGroup() {
		return new FormGroup<PatientAuthNotificationFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientAuthNotificationAuth {

		/** access token for initialization of subsequent action. */
		accessToken?: string | null;
		patient?: PatientDemographicResponse;

		/** Required */
		status: PatientAuthNotificationAuthStatus;

		/**
		 * transaction id for auth session
		 * Required
		 */
		transactionId: string;
		validity?: AccessTokenValidity;
	}
	export interface PatientAuthNotificationAuthFormProperties {

		/** access token for initialization of subsequent action. */
		accessToken: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<PatientAuthNotificationAuthStatus | null | undefined>,

		/**
		 * transaction id for auth session
		 * Required
		 */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreatePatientAuthNotificationAuthFormGroup() {
		return new FormGroup<PatientAuthNotificationAuthFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<PatientAuthNotificationAuthStatus | null | undefined>(undefined, [Validators.required]),
			transactionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PatientAuthNotificationAuthStatus { GRANTED = 'GRANTED', DENIED = 'DENIED' }

	export interface PatientAuthNotificationAcknowledgement {
		acknowledgement?: PatientAuthNotificationAcknowledgementAcknowledgement;
		error?: Error;

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: string;

		/** Required */
		resp: RequestReference;

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: Date;
	}
	export interface PatientAuthNotificationAcknowledgementFormProperties {

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreatePatientAuthNotificationAcknowledgementFormGroup() {
		return new FormGroup<PatientAuthNotificationAcknowledgementFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientAuthNotificationAcknowledgementAcknowledgement {

		/** Required */
		status: PatientAuthNotificationAcknowledgementAcknowledgementStatus;
	}
	export interface PatientAuthNotificationAcknowledgementAcknowledgementFormProperties {

		/** Required */
		status: FormControl<PatientAuthNotificationAcknowledgementAcknowledgementStatus | null | undefined>,
	}
	export function CreatePatientAuthNotificationAcknowledgementAcknowledgementFormGroup() {
		return new FormGroup<PatientAuthNotificationAcknowledgementAcknowledgementFormProperties>({
			status: new FormControl<PatientAuthNotificationAcknowledgementAcknowledgementStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PatientAuthNotificationAcknowledgementAcknowledgementStatus { OK = 'OK' }


	/** what is the purpose of user auth */
	export enum PatientAuthPurpose { LINK = 'LINK', KYC = 'KYC', KYC_AND_LINK = 'KYC_AND_LINK' }

	export interface PatientCareContextLink {

		/**
		 * AccessToken fetched in the user auth process for the purpose specified
		 * Required
		 */
		accessToken: string;

		/** Required */
		patient: PatientCareContextLinkPatient;
	}
	export interface PatientCareContextLinkFormProperties {

		/**
		 * AccessToken fetched in the user auth process for the purpose specified
		 * Required
		 */
		accessToken: FormControl<string | null | undefined>,
	}
	export function CreatePatientCareContextLinkFormGroup() {
		return new FormGroup<PatientCareContextLinkFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientCareContextLinkPatient {

		/** Required */
		careContexts: Array<CareContextRepresentation>;

		/** Required */
		display: string;

		/**
		 * patient reference id at HIP
		 * Required
		 */
		referenceNumber: string;
	}
	export interface PatientCareContextLinkPatientFormProperties {

		/** Required */
		display: FormControl<string | null | undefined>,

		/**
		 * patient reference id at HIP
		 * Required
		 */
		referenceNumber: FormControl<string | null | undefined>,
	}
	export function CreatePatientCareContextLinkPatientFormGroup() {
		return new FormGroup<PatientCareContextLinkPatientFormProperties>({
			display: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			referenceNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientCareContextLinkRequest {

		/** Required */
		link: PatientCareContextLink;

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: string;

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: Date;
	}
	export interface PatientCareContextLinkRequestFormProperties {

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreatePatientCareContextLinkRequestFormGroup() {
		return new FormGroup<PatientCareContextLinkRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientCareContextLinkResponse {
		acknowledgement?: PatientCareContextLinkResponseAcknowledgement;
		error?: Error;

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: string;

		/** Required */
		resp: RequestReference;

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: Date;
	}
	export interface PatientCareContextLinkResponseFormProperties {

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreatePatientCareContextLinkResponseFormGroup() {
		return new FormGroup<PatientCareContextLinkResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientCareContextLinkResponseAcknowledgement {

		/** Required */
		status: PatientCareContextLinkResponseAcknowledgementStatus;
	}
	export interface PatientCareContextLinkResponseAcknowledgementFormProperties {

		/** Required */
		status: FormControl<PatientCareContextLinkResponseAcknowledgementStatus | null | undefined>,
	}
	export function CreatePatientCareContextLinkResponseAcknowledgementFormGroup() {
		return new FormGroup<PatientCareContextLinkResponseAcknowledgementFormProperties>({
			status: new FormControl<PatientCareContextLinkResponseAcknowledgementStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PatientCareContextLinkResponseAcknowledgementStatus { SUCCESS = 'SUCCESS' }

	export interface PatientDiscoveryRequest {

		/** Required */
		patient: PatientDiscoveryRequestPatient;

		/**
		 * a nonce, unique for each HTTP request.
		 * Required
		 */
		requestId: string;

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: Date;

		/**
		 * correlation-Id for patient discovery and subsequent care context linkage
		 * Required
		 */
		transactionId: string;
	}
	export interface PatientDiscoveryRequestFormProperties {

		/**
		 * a nonce, unique for each HTTP request.
		 * Required
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: FormControl<Date | null | undefined>,

		/**
		 * correlation-Id for patient discovery and subsequent care context linkage
		 * Required
		 */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreatePatientDiscoveryRequestFormGroup() {
		return new FormGroup<PatientDiscoveryRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			transactionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientDiscoveryRequestPatient {

		/** Required */
		gender: PatientDemographicGender;

		/**
		 * Identifier of patient at consent manager
		 * Required
		 */
		id: string;

		/** Required */
		name: string;
		unverifiedIdentifiers?: Array<Identifier>;

		/** Required */
		verifiedIdentifiers: Array<Identifier>;

		/** Required */
		yearOfBirth: number;
	}
	export interface PatientDiscoveryRequestPatientFormProperties {

		/** Required */
		gender: FormControl<PatientDemographicGender | null | undefined>,

		/**
		 * Identifier of patient at consent manager
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		yearOfBirth: FormControl<number | null | undefined>,
	}
	export function CreatePatientDiscoveryRequestPatientFormGroup() {
		return new FormGroup<PatientDiscoveryRequestPatientFormProperties>({
			gender: new FormControl<PatientDemographicGender | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			yearOfBirth: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientDiscoveryResult {
		error?: Error;
		patient?: PatientRepresentation;

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: string;

		/** Required */
		resp: RequestReference;

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: Date;

		/** Required */
		transactionId: string;
	}
	export interface PatientDiscoveryResultFormProperties {

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: FormControl<Date | null | undefined>,

		/** Required */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreatePatientDiscoveryResultFormGroup() {
		return new FormGroup<PatientDiscoveryResultFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			transactionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientRepresentation {

		/** Required */
		careContexts: Array<CareContextRepresentation>;

		/** Required */
		display: string;
		matchedBy?: Array<IdentifierType>;

		/** Required */
		referenceNumber: string;
	}
	export interface PatientRepresentationFormProperties {

		/** Required */
		display: FormControl<string | null | undefined>,

		/** Required */
		referenceNumber: FormControl<string | null | undefined>,
	}
	export function CreatePatientRepresentationFormGroup() {
		return new FormGroup<PatientRepresentationFormProperties>({
			display: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			referenceNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PatientGender { M = 'M', F = 'F', O = 'O', U = 'U' }

	export interface PatientLinkReferenceRequest {

		/** Required */
		patient: PatientLinkReferenceRequestPatient;

		/** Required */
		requestId: string;

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: Date;

		/** Required */
		transactionId: string;
	}
	export interface PatientLinkReferenceRequestFormProperties {

		/** Required */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: FormControl<Date | null | undefined>,

		/** Required */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreatePatientLinkReferenceRequestFormGroup() {
		return new FormGroup<PatientLinkReferenceRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			transactionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientLinkReferenceRequestPatient {

		/** Required */
		careContexts: Array<CareContext>;

		/** Required */
		id: string;

		/** Required */
		referenceNumber: string;
	}
	export interface PatientLinkReferenceRequestPatientFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		referenceNumber: FormControl<string | null | undefined>,
	}
	export function CreatePatientLinkReferenceRequestPatientFormGroup() {
		return new FormGroup<PatientLinkReferenceRequestPatientFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			referenceNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientLinkReferenceResult {
		error?: Error;
		link?: PatientLinkReferenceResultLink;

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: string;

		/** Required */
		resp: RequestReference;

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: Date;

		/** Required */
		transactionId: string;
	}
	export interface PatientLinkReferenceResultFormProperties {

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: FormControl<Date | null | undefined>,

		/** Required */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreatePatientLinkReferenceResultFormGroup() {
		return new FormGroup<PatientLinkReferenceResultFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			transactionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientLinkReferenceResultLink {

		/** Required */
		authenticationType: PatientLinkReferenceResultLinkAuthenticationType;
		meta?: Meta;

		/** Required */
		referenceNumber: string;
	}
	export interface PatientLinkReferenceResultLinkFormProperties {

		/** Required */
		authenticationType: FormControl<PatientLinkReferenceResultLinkAuthenticationType | null | undefined>,

		/** Required */
		referenceNumber: FormControl<string | null | undefined>,
	}
	export function CreatePatientLinkReferenceResultLinkFormGroup() {
		return new FormGroup<PatientLinkReferenceResultLinkFormProperties>({
			authenticationType: new FormControl<PatientLinkReferenceResultLinkAuthenticationType | null | undefined>(undefined, [Validators.required]),
			referenceNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PatientLinkReferenceResultLinkAuthenticationType { DIRECT = 'DIRECT', MEDIATED = 'MEDIATED' }

	export interface PatientLinkResult {
		error?: Error;
		patient?: PatientLinkResultPatient;

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: string;

		/** Required */
		resp: RequestReference;

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: Date;
	}
	export interface PatientLinkResultFormProperties {

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreatePatientLinkResultFormGroup() {
		return new FormGroup<PatientLinkResultFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientLinkResultPatient {

		/** Required */
		careContexts: Array<CareContextRepresentation>;

		/** Required */
		display: string;

		/** Required */
		referenceNumber: string;
	}
	export interface PatientLinkResultPatientFormProperties {

		/** Required */
		display: FormControl<string | null | undefined>,

		/** Required */
		referenceNumber: FormControl<string | null | undefined>,
	}
	export function CreatePatientLinkResultPatientFormGroup() {
		return new FormGroup<PatientLinkResultPatientFormProperties>({
			display: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			referenceNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientSMSNotifcationRequest {

		/** Required */
		notification: PatientSMSNotifcationRequestNotification;

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: string;

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: Date;
	}
	export interface PatientSMSNotifcationRequestFormProperties {

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreatePatientSMSNotifcationRequestFormGroup() {
		return new FormGroup<PatientSMSNotifcationRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientSMSNotifcationRequestNotification {

		/**
		 * Information about care context or visit for which the SMS is being sent.
		 * Required
		 */
		careContextInfo: string;

		/** A link pointing to digital health records of the patient. PHR App's deeplink will be sent in SMS if this field is not provided. */
		deeplinkUrl?: string | null;

		/** Required */
		hip: PatientSMSNotifcationRequestNotificationHip;

		/**
		 * Phone number of the receiver with country code
		 * Required
		 */
		phoneNo: string;

		/** Name of the reciever/patient. Receiver's name will not be sent if not provided. */
		receiverName?: string | null;
	}
	export interface PatientSMSNotifcationRequestNotificationFormProperties {

		/**
		 * Information about care context or visit for which the SMS is being sent.
		 * Required
		 */
		careContextInfo: FormControl<string | null | undefined>,

		/** A link pointing to digital health records of the patient. PHR App's deeplink will be sent in SMS if this field is not provided. */
		deeplinkUrl: FormControl<string | null | undefined>,

		/**
		 * Phone number of the receiver with country code
		 * Required
		 */
		phoneNo: FormControl<string | null | undefined>,

		/** Name of the reciever/patient. Receiver's name will not be sent if not provided. */
		receiverName: FormControl<string | null | undefined>,
	}
	export function CreatePatientSMSNotifcationRequestNotificationFormGroup() {
		return new FormGroup<PatientSMSNotifcationRequestNotificationFormProperties>({
			careContextInfo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deeplinkUrl: new FormControl<string | null | undefined>(undefined),
			phoneNo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			receiverName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatientSMSNotifcationRequestNotificationHip {

		/**
		 * Registered id of the HIP.
		 * Required
		 */
		id: string;

		/** Name of the HIP(Hospital). Hospital's name will be fetched from registry if not provided. */
		name?: string | null;
	}
	export interface PatientSMSNotifcationRequestNotificationHipFormProperties {

		/**
		 * Registered id of the HIP.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Name of the HIP(Hospital). Hospital's name will be fetched from registry if not provided. */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePatientSMSNotifcationRequestNotificationHipFormGroup() {
		return new FormGroup<PatientSMSNotifcationRequestNotificationHipFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatientSMSNotifcationResponse {
		error?: Error;

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: string;

		/** Required */
		resp: RequestReference;
		status?: PatientSMSNotifcationResponseStatus | null;

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: Date;
	}
	export interface PatientSMSNotifcationResponseFormProperties {

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: FormControl<string | null | undefined>,
		status: FormControl<PatientSMSNotifcationResponseStatus | null | undefined>,

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreatePatientSMSNotifcationResponseFormGroup() {
		return new FormGroup<PatientSMSNotifcationResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<PatientSMSNotifcationResponseStatus | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PatientSMSNotifcationResponseStatus { ACKNOWLEDGED = 'ACKNOWLEDGED', ERRORED = 'ERRORED' }

	export interface SessionRequest {

		/** Required */
		clientId: string;

		/** Required */
		clientSecret: string;
	}
	export interface SessionRequestFormProperties {

		/** Required */
		clientId: FormControl<string | null | undefined>,

		/** Required */
		clientSecret: FormControl<string | null | undefined>,
	}
	export function CreateSessionRequestFormGroup() {
		return new FormGroup<SessionRequestFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientSecret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SessionResponse {
		accessToken?: string | null;

		/** In Minutes */
		expiresIn?: number | null;

		/** In Minutes */
		refreshExpiresIn?: number | null;
		refreshToken?: string | null;
		tokenType?: string | null;
	}
	export interface SessionResponseFormProperties {
		accessToken: FormControl<string | null | undefined>,

		/** In Minutes */
		expiresIn: FormControl<number | null | undefined>,

		/** In Minutes */
		refreshExpiresIn: FormControl<number | null | undefined>,
		refreshToken: FormControl<string | null | undefined>,
		tokenType: FormControl<string | null | undefined>,
	}
	export function CreateSessionResponseFormGroup() {
		return new FormGroup<SessionResponseFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined),
			expiresIn: new FormControl<number | null | undefined>(undefined),
			refreshExpiresIn: new FormControl<number | null | undefined>(undefined),
			refreshToken: new FormControl<string | null | undefined>(undefined),
			tokenType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ShareProfileAcknowledgement {

		/** Required */
		healthId: string;

		/** Required */
		status: ShareProfileAcknowledgementStatus;
	}
	export interface ShareProfileAcknowledgementFormProperties {

		/** Required */
		healthId: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ShareProfileAcknowledgementStatus | null | undefined>,
	}
	export function CreateShareProfileAcknowledgementFormGroup() {
		return new FormGroup<ShareProfileAcknowledgementFormProperties>({
			healthId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ShareProfileAcknowledgementStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ShareProfileAcknowledgementStatus { SUCCESS = 'SUCCESS', FAILURE = 'FAILURE' }

	export interface ShareProfileRequest {

		/** Required */
		patient: ShareProfileRequestPatient;

		/**
		 * a nonce, unique for each HTTP request.
		 * Required
		 */
		requestId: string;

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: Date;
	}
	export interface ShareProfileRequestFormProperties {

		/**
		 * a nonce, unique for each HTTP request.
		 * Required
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateShareProfileRequestFormGroup() {
		return new FormGroup<ShareProfileRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ShareProfileRequestPatient {

		/** additional details about HIP retrieved after scanning QR. */
		hipCode?: string | null;

		/** Required */
		userDemographics: ShareProfileRequestPatientUserDemographics;
	}
	export interface ShareProfileRequestPatientFormProperties {

		/** additional details about HIP retrieved after scanning QR. */
		hipCode: FormControl<string | null | undefined>,
	}
	export function CreateShareProfileRequestPatientFormGroup() {
		return new FormGroup<ShareProfileRequestPatientFormProperties>({
			hipCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ShareProfileRequestPatientUserDemographics {
		address?: PatientAddress;
		dayOfBirth?: number | null;

		/** Required */
		gender: PatientDemographicGender;

		/** Required */
		healthId: string;

		/** Required */
		healthIdNumber: string;
		identifiers?: Array<Identifier>;
		monthOfBirth?: number | null;

		/** Required */
		name: string;

		/** Required */
		yearOfBirth: number;
	}
	export interface ShareProfileRequestPatientUserDemographicsFormProperties {
		dayOfBirth: FormControl<number | null | undefined>,

		/** Required */
		gender: FormControl<PatientDemographicGender | null | undefined>,

		/** Required */
		healthId: FormControl<string | null | undefined>,

		/** Required */
		healthIdNumber: FormControl<string | null | undefined>,
		monthOfBirth: FormControl<number | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		yearOfBirth: FormControl<number | null | undefined>,
	}
	export function CreateShareProfileRequestPatientUserDemographicsFormGroup() {
		return new FormGroup<ShareProfileRequestPatientUserDemographicsFormProperties>({
			dayOfBirth: new FormControl<number | null | undefined>(undefined),
			gender: new FormControl<PatientDemographicGender | null | undefined>(undefined, [Validators.required]),
			healthId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			healthIdNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			monthOfBirth: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			yearOfBirth: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ShareProfileResult {

		/** Required */
		acknowledgement: ShareProfileAcknowledgement;
		error?: Error;

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: string;

		/** Required */
		resp: RequestReference;

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: Date;
	}
	export interface ShareProfileResultFormProperties {

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateShareProfileResultFormGroup() {
		return new FormGroup<ShareProfileResultFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get openid configuration
		 * Get v0.5/.well-known/openid-configuration
		 * @return {OpenIdConfiguration} OK
		 */
		V0_5_well_knownOpenid_configurationGet(headersHandler?: () => HttpHeaders): Observable<OpenIdConfiguration> {
			return this.http.get<OpenIdConfiguration>(this.baseUri + 'v0.5/.well-known/openid-configuration', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Discover patient's accounts
		 * Request for patient care context discover, made by Gateway intended for a specific HIP. It is expected that HIP will subsequently return either zero or one patient record with (potentially masked) associated care contexts
		 * 1. **At least one of the verified identifier matches**
		 * 2. **Name (fuzzy), gender matches**
		 * 3. **If YoB was given, age band(+-2) matches**
		 * 4. **If unverified identifiers were given, one of them matches**
		 * 5. **If more than one patient records would be found after aforementioned steps, then patient who matches most verified and unverified identifiers would be returned.**
		 * 6. **If there would be still more than one patients (after ranking) error would be returned**
		 * 7. **Intended HIP should be able to resolve and identify results returned in the subsequent link confirmation request via the specified transactionId**
		 * 8. **Intended HIP should store the discovery results with transactionId and care contexts discovered for subsequent link initiation**
		 * Post v0.5/care-contexts/discover
		 * @return {void} 
		 */
		V0_5Care_contextsDiscoverPost(requestBody: PatientDiscoveryRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/care-contexts/discover', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Response to patient's account discovery request
		 * Result of patient care-context discovery request at HIP end. If a matching patient found with zero or more care contexts associated, it is specified as result attribute. If the prior discovery request, resulted in errors then it is specified in the error attribute. Reasons of errors can be
		 * 1. **more than one definitive match for the given request**
		 * 2. **no verified identifer was specified**
		 * Post v0.5/care-contexts/on-discover
		 * @return {void} 
		 */
		V0_5Care_contextsOn_discoverPost(requestBody: PatientDiscoveryResult, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/care-contexts/on-discover', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get certs for JWT verification
		 * Get v0.5/certs
		 * @return {Certs} OK
		 */
		V0_5CertsGet(headersHandler?: () => HttpHeaders): Observable<Certs> {
			return this.http.get<Certs>(this.baseUri + 'v0.5/certs', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Consent notification
		 * Notification of consents to health information providers consent request granted, consent revoked, consent expired. Only the GRANTED and REVOKED status notifications will be sent to HIP.
		 * 1. If consent is granted, status=GRANTED, then consentDetail contains the consent artefact details and signature is available.
		 * 2. If consent is revoked, then status=REVOKED, and consentId specifes which consent artefact is revoked.
		 * Post v0.5/consents/hip/notify
		 * @return {void} 
		 */
		V0_5ConsentsHipNotifyPost(requestBody: HIPConsentNotification, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/consents/hip/notify', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Consent notification
		 * This API is called by HIP as acknowledgement to notification of consents, in cases of consent revocation and expiration.
		 * Post v0.5/consents/hip/on-notify
		 * @return {void} 
		 */
		V0_5ConsentsHipOn_notifyPost(requestBody: HIPConsentNotificationResponse, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/consents/hip/on-notify', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Health information data request
		 * API called by HIP to acknowledge Health information request receipt. Either the **hiRequest** or **error** must be specified. **hiRequest** element returns the same transactionId as before with a status indicating that the request is acknowledged.
		 * Post v0.5/health-information/hip/on-request
		 * @return {void} 
		 */
		V0_5Health_informationHipOn_requestPost(requestBody: HIPHealthInformationRequestAcknowledgement, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/health-information/hip/on-request', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Health information data request
		 * API called by CM to request Health information from HIP against a validated consent artefact. The transactionId is the correlation id that HIP should use use when pushing data to the **dataPushUrl**.
		 * Post v0.5/health-information/hip/request
		 * @return {void} 
		 */
		V0_5Health_informationHipRequestPost(requestBody: HIPHealthInformationRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/health-information/hip/request', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Notifications corresponding to events during data flow
		 * API called by HIU and HIP during data-transfer.
		 * 1. HIP on transfer of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]
		 * 2. HIP would also send **hiStatus** for each *careContextReference* - on of [DELIVERED, ERRORED]
		 * 3. HIU on receipt of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]. For example, FAILED when if data was not sent or if invalid data was sent
		 * 4. HIU would also send **hiStatus** for each *careContextReference* - one of [OK, ERRORED]
		 * Post v0.5/health-information/notify
		 * @return {void} 
		 */
		V0_5Health_informationNotifyPost(requestBody: HealthInformationNotification, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/health-information/notify', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * health information transfer API
		 * **NOTE**: This API is actually the callback URL that is passed as **dataPushUrl** in the data request API - /v0.5/health-information/hip/request. This API is directly called by HIP Data Bridge and is not mediated via CM, and hence not routed through the Gateway.
		 * 1. This API should be implemented at HIU side. It maybe implemented by the Data Bridge representing the HIU.
		 * 2. Entry elements maybe ***content*** or ***link***, although for version 1, entry ***content*** is preferred.
		 * 3. Entry ***content*** (or even link reference content) must be encrypted by means of Elliptic-curve Diffie–Hellman Key Exchange, utilizing the HIU keymaterials that are passed through the data request API - /v0.5/health-information/hip/request.
		 * 4. Media contains the mimetype of content, and for v1, it is "application/fhir+json"
		 * 5. checksum is Md5 checksum of the data conent, before encryption
		 * 6. Please refer to the NDHM Sandbox Documentation for the format of FHIR bundle that is passed through content
		 * Post v0.5/health-information/transfer
		 * @return {void} 
		 */
		V0_5Health_informationTransferPost(requestBody: DataNotification, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/health-information/transfer', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get consent request status
		 * Get v0.5/heartbeat
		 * @return {HeartbeatResponse} OK
		 */
		V0_5HeartbeatGet(headersHandler?: () => HttpHeaders): Observable<HeartbeatResponse> {
			return this.http.get<HeartbeatResponse>(this.baseUri + 'v0.5/heartbeat', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * API for HIP initiated care-context linking for patient
		 * API to submit care-context to CM for HIP initiated linking. The API must accompany the "accessToken" fetched in the users/auth process.
		 * 1. subsequent usage for accessToken may be invalid if it was meant for one-time usage or if it expired
		 * Post v0.5/links/link/add-contexts
		 * @return {void} 
		 */
		V0_5LinksLinkAdd_contextsPost(requestBody: PatientCareContextLinkRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/links/link/add-contexts', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Token submission by Consent Manager for link confirmation
		 * API to submit the token that was sent by HIP during the link request.
		 * Post v0.5/links/link/confirm
		 * @return {void} 
		 */
		V0_5LinksLinkConfirmPost(requestBody: LinkConfirmationRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/links/link/confirm', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Link patient's care contexts
		 * Request from Gateway to links care contexts associated with only one patient
		 * 1. **Validate account reference number and care context reference number**
		 * 2. **Validate transactionId in the request with discovery request entry to check whether there was a discovery
		 * and were these care contexts discovered or not for a given patient**
		 * 3. **Before eventual link confirmation, HIP needs to authenticate the request with the patient(eg: OTP verification)**
		 * 4. **HIP should communicate the mode of authentication of a successful request to Consent Manager**
		 * Post v0.5/links/link/init
		 * @return {void} 
		 */
		V0_5LinksLinkInitPost(requestBody: PatientLinkReferenceRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/links/link/init', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * callback API for HIP initiated patient linking /link/add-context
		 * If the accessToken is valid for purpose of linking, and specified details provided, CM will send "acknoweldgement.status" as SUCCESS. If any error occcurred, for example invalid token, or other required patient or care-context information not provided, then "error" attribute conveys so.
		 * 1. **accessToken must be valid and must be for the purpose of linking**
		 * Post v0.5/links/link/on-add-contexts
		 * @return {void} 
		 */
		V0_5LinksLinkOn_add_contextsPost(requestBody: PatientCareContextLinkResponse, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/links/link/on-add-contexts', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Token authenticated by HIP, indicating completion of linkage of care-contexts
		 * Returns a list of linked care contexts with patient reference number.
		 * 1. **Validated and linked account reference number**
		 * 2. **Validated that the token sent from Consent Manager is same as the one generated by HIP**
		 * 3. **Verified that same Consent Manager which made the link request is sending the token**
		 * 4. **Results of unmasked linked care contexts with patient reference number**
		 * Post v0.5/links/link/on-confirm
		 * @return {void} 
		 */
		V0_5LinksLinkOn_confirmPost(requestBody: PatientLinkResult, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/links/link/on-confirm', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Response to patient's care context link request
		 * Result of patient care-context link request from HIP end. This happens in context of previous discovery of patient found at HIP end, therefore the link requests ought to be in reference to the patient reference and care-context references previously returned by the HIP. The correlation of discovery and link request is maintained through the transactionId. HIP should have
		 * 1. **Validated transactionId in the request to check whether there was a discovery done previously, and the link request corresponds to returned patient care care context references**
		 * 2. **Before returning the response, HIP should have sent an authentication request to the patient(eg: OTP verification)**
		 * 3. **HIP should communicate the mode of authentication of a successful request**
		 * 4. **HIP subsequently should expect the token passed via /link/confirm against the link.referenceNumber passed in this call**
		 * The error section in the body, represents the potential errors that may have occurred. Possible reasons:
		 * 1. **Patient reference number is invalid**
		 * 2. **Care context reference numbers are invalid**
		 * Post v0.5/links/link/on-init
		 * @return {void} 
		 */
		V0_5LinksLinkOn_initPost(requestBody: PatientLinkReferenceResult, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/links/link/on-init', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Response to patient's share profile request
		 * Result of patient share profile request at HIP end.
		 * Post v0.5/patients/profile/on-share
		 * @return {void} 
		 */
		V0_5PatientsProfileOn_sharePost(requestBody: ShareProfileResult, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/patients/profile/on-share', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Share patient profile details
		 * Request for sharing patient's profile details to HIP
		 * Post v0.5/patients/profile/share
		 * @return {void} 
		 */
		V0_5PatientsProfileSharePost(requestBody: ShareProfileRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/patients/profile/share', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * API for HIP to send SMS notifications to patients
		 * API to send SMS notifications to patient with custom deeplink.
		 * Post v0.5/patients/sms/notify
		 * @return {void} 
		 */
		V0_5PatientsSmsNotifyPost(requestBody: PatientSMSNotifcationRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/patients/sms/notify', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Acknowledgment response for SMS notification sent to patient by HIP
		 * If the SMS notification is successfully sent to patient then "status" will be "ACKNOWLEDGED" with no error.
		 * If the SMS notification is failed then "status" will be "ERRORED" with error.
		 * Post v0.5/patients/sms/on-notify
		 * @return {void} 
		 */
		V0_5PatientsSmsOn_notifyPost(requestBody: PatientSMSNotifcationResponse, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/patients/sms/on-notify', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get access token
		 * Post v0.5/sessions
		 * @return {SessionResponse} OK
		 */
		V0_5SessionsPost(requestBody: SessionRequest, headersHandler?: () => HttpHeaders): Observable<SessionResponse> {
			return this.http.post<SessionResponse>(this.baseUri + 'v0.5/sessions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
		 * This API is called by HIP/HIUs to confirm authentication of users. The transactionId returned by the previous callback API /users/auth/on-init must be sent. If Authentication is successful the callback API will send an "access token" for subsequent purpose specific API calls. Note only **credential.authCode** or **credential.demographic** should be sent
		 * 1. demographic details are only required for  demographic auth as of now.
		 * 2. demographic details are required only in MEDIATED cases and if the **auth.mode** so demands. e.g. if **auth.mode** is DEMOGRAPHICS. Usually for demographic authentication, the name, gender and DOB must be exactly as specified in User Account.
		 * 3. demographic.identifier is optional, however maybe required if authentication so mandates.
		 * 4. credential.authCode is required for other MEDIATED authentication like MOBILE_OTP, AADHAAR_OTP.
		 * Post v0.5/users/auth/confirm
		 * @return {void} 
		 */
		V0_5UsersAuthConfirmPost(requestBody: PatientAuthConfirmRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/users/auth/confirm', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a patient's authentication modes relevant to specified purpose
		 * This API is meant for identify supported authentication modes for a patient given a specific purpose
		 * Post v0.5/users/auth/fetch-modes
		 * @return {void} 
		 */
		V0_5UsersAuthFetch_modesPost(requestBody: PatientAuthModeQueryRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/users/auth/fetch-modes', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Initialize authentication from HIP
		 * This API is called by HIPs to initiate authentication of users. A transactionId is retuned by the corresponding callback API for confirmation of user auth.
		 * Post v0.5/users/auth/init
		 * @return {void} 
		 */
		V0_5UsersAuthInitPost(requestBody: PatientAuthInitRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/users/auth/init', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * notification API in case of DIRECT mode of authentication by the CM
		 * This API is called by CM to confirm authentication of users. The transactionId returned is same as that passed in /auth/on-init. The "auth.status" conveys whether the request was GRANTED or DENIED.
		 * 1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
		 * 2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.
		 * 3. The payload is conditional to the purpose of auth. If purpose specified in /auth/init is KYC or KYC_AND_LINK, then patient details are passed. **auth.accessToken** is passed only if the purpose is LINK or KYC_AND_LINK.
		 * Post v0.5/users/auth/notify
		 * @return {void} 
		 */
		V0_5UsersAuthNotifyPost(requestBody: PatientAuthNotification, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/users/auth/notify', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
		 * This API is called by CM to confirm authentication of users.
		 * 1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
		 * 2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.
		 * Post v0.5/users/auth/on-confirm
		 * @return {void} 
		 */
		V0_5UsersAuthOn_confirmPost(requestBody: PatientAuthConfirmResponse, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/users/auth/on-confirm', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Identification result for a consent-manager user-id
		 * If a patient is found then **auth** attribute contains the supported modes for the specified purpose.
		 * Otherwise, error is raised for invalid requests or for non-existent id.
		 * Note in addition to the "Authorization" header, one of the following headers must be specified
		 * 1. **X-HIU-ID** if the requester is HIU (identified from /auth/fetch-modes requester.id)
		 * 2. **X-HIP-ID** if the requester is HIP (identified from /auth/fetch-modes requester.id)
		 * Post v0.5/users/auth/on-fetch-modes
		 * @return {void} 
		 */
		V0_5UsersAuthOn_fetch_modesPost(requestBody: PatientAuthModeQueryResponse, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/users/auth/on-fetch-modes', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Response to user authentication initialization from HIP
		 * If the patient's id is valid, CM will return a transactionId as initialization of user auth. If the request is valid, then 'auth.mode' will convey how the authentication should be done. The authentication can be *mediated* or *direct*. For mediated authentication modes, HIP or HIU is epected to send over relevant code (OTP/token) or demographic info via subsequent API call to /auth/confirm. for direct authentication case, CM will notify requester through/users/auth/notify API.
		 * 1. **auth.mode** conveys whats the mode of authentication is, and what is expected from HIP/HIU in the subsequent /auth/confirm API call. Possible values
		 * 1. MOBILE_OTP - auth via OTP to registered mobile. Mediated.
		 * 2. AADHAAR_OTP - auth initiated with Aadhaar with OTP. Mediated.
		 * 3. DEMOGRAPHICS - auth initiated with demographic verification
		 * 4. DIRECT - for authentication directly with the patient. e.g. Mobile App, SMS. In this case, the HIP/HIU is not expected to call subsequent /auth/confirm call. CM will do direct authentication with the User (e.g. Mobile App, SMS etc) and will notify requester
		 * 2. **meta.expiry** conveys the expiry time of the token and the authentication session
		 * 3. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.
		 * The error section in the body, represents the potential errors that may have occurred. Possible reasons:
		 * 1. Patient id is invalid
		 * Post v0.5/users/auth/on-init
		 * @return {void} 
		 */
		V0_5UsersAuthOn_initPost(requestBody: PatientAuthInitResponse, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/users/auth/on-init', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * callback API by HIU/HIPs as acknowledgement of auth notification
		 * This API is called by HIU/HIPs to confirm acknowledgement for receipt of auth notification is case of DIRECT authentication.
		 * Post v0.5/users/auth/on-notify
		 * @return {void} 
		 */
		V0_5UsersAuthOn_notifyPost(requestBody: PatientAuthNotificationAcknowledgement, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/users/auth/on-notify', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}
	}

}

