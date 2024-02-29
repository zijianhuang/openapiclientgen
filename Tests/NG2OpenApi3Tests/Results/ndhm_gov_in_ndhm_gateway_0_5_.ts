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
		 * Type: int, -2,147,483,648 to 2,147,483,647
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
		 * Type: int, -2,147,483,648 to 2,147,483,647
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

	export interface CareContextDefinition {

		/** Required */
		careContextReference: string;

		/** Required */
		patientReference: string;
	}
	export interface CareContextDefinitionFormProperties {

		/** Required */
		careContextReference: FormControl<string | null | undefined>,

		/** Required */
		patientReference: FormControl<string | null | undefined>,
	}
	export function CreateCareContextDefinitionFormGroup() {
		return new FormGroup<CareContextDefinitionFormProperties>({
			careContextReference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			patientReference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface ConsentArtefactReference {

		/** Required */
		id: string;
	}
	export interface ConsentArtefactReferenceFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateConsentArtefactReferenceFormGroup() {
		return new FormGroup<ConsentArtefactReferenceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConsentArtefactResponse {
		consent?: ConsentArtefactResponseConsent;
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
	export interface ConsentArtefactResponseFormProperties {

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
	export function CreateConsentArtefactResponseFormGroup() {
		return new FormGroup<ConsentArtefactResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConsentArtefactResponseConsent {

		/** Required */
		consentDetail: ConsentArtefactResponseConsentConsentDetail;

		/** Required */
		signature: string;

		/** Required */
		status: ConsentArtefactResponseConsentStatus;
	}
	export interface ConsentArtefactResponseConsentFormProperties {

		/** Required */
		signature: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ConsentArtefactResponseConsentStatus | null | undefined>,
	}
	export function CreateConsentArtefactResponseConsentFormGroup() {
		return new FormGroup<ConsentArtefactResponseConsentFormProperties>({
			signature: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ConsentArtefactResponseConsentStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConsentArtefactResponseConsentConsentDetail {

		/** Required */
		ConsentArtefactResponseConsentConsentDetailCareContexts: Array<ConsentArtefactResponseConsentConsentDetailCareContexts>;

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
		hiu: string;

		/** Required */
		patient: ConsentManagerPatientID;

		/** Required */
		permission: Permission;

		/** Required */
		purpose: UsePurpose;
		requester?: Requester;
		schemaVersion?: string | null;
	}
	export interface ConsentArtefactResponseConsentConsentDetailFormProperties {

		/** Required */
		consentId: FormControl<string | null | undefined>,

		/** Required */
		consentManager: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		hip: FormControl<string | null | undefined>,

		/** Required */
		hiu: FormControl<string | null | undefined>,
		schemaVersion: FormControl<string | null | undefined>,
	}
	export function CreateConsentArtefactResponseConsentConsentDetailFormGroup() {
		return new FormGroup<ConsentArtefactResponseConsentConsentDetailFormProperties>({
			consentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			consentManager: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			hip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			hiu: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schemaVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConsentArtefactResponseConsentConsentDetailCareContexts {

		/** Required */
		careContextReference: string;

		/** Required */
		patientReference: string;
	}
	export interface ConsentArtefactResponseConsentConsentDetailCareContextsFormProperties {

		/** Required */
		careContextReference: FormControl<string | null | undefined>,

		/** Required */
		patientReference: FormControl<string | null | undefined>,
	}
	export function CreateConsentArtefactResponseConsentConsentDetailCareContextsFormGroup() {
		return new FormGroup<ConsentArtefactResponseConsentConsentDetailCareContextsFormProperties>({
			careContextReference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			patientReference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum HITypeEnum { OPConsultation = 'OPConsultation', Prescription = 'Prescription', DischargeSummary = 'DischargeSummary', DiagnosticReport = 'DiagnosticReport' }

	export interface ConsentManagerPatientID {
		id?: string | null;
	}
	export interface ConsentManagerPatientIDFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateConsentManagerPatientIDFormGroup() {
		return new FormGroup<ConsentManagerPatientIDFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

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
		from?: Date | null;
		to?: Date | null;
	}
	export interface PermissionDateRangeFormProperties {
		from: FormControl<Date | null | undefined>,
		to: FormControl<Date | null | undefined>,
	}
	export function CreatePermissionDateRangeFormGroup() {
		return new FormGroup<PermissionDateRangeFormProperties>({
			from: new FormControl<Date | null | undefined>(undefined),
			to: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface PermissionFrequency {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		repeats?: number | null;
		unit?: PermissionFrequencyUnit | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		value?: number | null;
	}
	export interface PermissionFrequencyFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		repeats: FormControl<number | null | undefined>,
		unit: FormControl<PermissionFrequencyUnit | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

	export interface Requester {
		identifier?: RequesterIdentifier;

		/** Required */
		name: string;
	}
	export interface RequesterFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateRequesterFormGroup() {
		return new FormGroup<RequesterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RequesterIdentifier {
		system?: string | null;
		type?: string | null;
		value?: string | null;
	}
	export interface RequesterIdentifierFormProperties {
		system: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateRequesterIdentifierFormGroup() {
		return new FormGroup<RequesterIdentifierFormProperties>({
			system: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConsentArtefactResponseConsentStatus { GRANTED = 'GRANTED', EXPIRED = 'EXPIRED', DENIED = 'DENIED', REQUESTED = 'REQUESTED', REVOKED = 'REVOKED' }

	export interface Error {
		code?: ErrorCode;
		message?: string | null;
	}
	export interface ErrorFormProperties {
		code: FormControl<ErrorCode | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<ErrorCode | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ErrorCode { _1000 = 0, _10001 = 1 }

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

	export interface ConsentFetchRequest {

		/** Required */
		consentId: string;

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
	export interface ConsentFetchRequestFormProperties {

		/** Required */
		consentId: FormControl<string | null | undefined>,

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
	export function CreateConsentFetchRequestFormGroup() {
		return new FormGroup<ConsentFetchRequestFormProperties>({
			consentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConsentRequest {

		/** Required */
		consent: ConsentRequestConsent;

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
	export interface ConsentRequestFormProperties {

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
	export function CreateConsentRequestFormGroup() {
		return new FormGroup<ConsentRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConsentRequestConsent {
		careContexts?: Array<CareContextDefinition>;

		/** Required */
		hiTypes: Array<HITypeEnum>;
		hip?: string | null;

		/** Required */
		hiu: string;

		/** Required */
		patient: string;

		/** Required */
		permission: Permission;

		/** Required */
		purpose: UsePurpose;

		/** Required */
		requester: Requester;
	}
	export interface ConsentRequestConsentFormProperties {
		hip: FormControl<string | null | undefined>,

		/** Required */
		hiu: FormControl<string | null | undefined>,

		/** Required */
		patient: FormControl<string | null | undefined>,
	}
	export function CreateConsentRequestConsentFormGroup() {
		return new FormGroup<ConsentRequestConsentFormProperties>({
			hip: new FormControl<string | null | undefined>(undefined),
			hiu: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			patient: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConsentRequestInitResponse {
		consentRequest?: ConsentRequestInitResponseConsentRequest;
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
	export interface ConsentRequestInitResponseFormProperties {

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
	export function CreateConsentRequestInitResponseFormGroup() {
		return new FormGroup<ConsentRequestInitResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConsentRequestInitResponseConsentRequest {

		/**
		 * id of the consent-request created
		 * Required
		 */
		id: string;
	}
	export interface ConsentRequestInitResponseConsentRequestFormProperties {

		/**
		 * id of the consent-request created
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateConsentRequestInitResponseConsentRequestFormGroup() {
		return new FormGroup<ConsentRequestInitResponseConsentRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConsentRequestStatusRequest {

		/** Required */
		consentRequestId: string;

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
	export interface ConsentRequestStatusRequestFormProperties {

		/** Required */
		consentRequestId: FormControl<string | null | undefined>,

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
	export function CreateConsentRequestStatusRequestFormGroup() {
		return new FormGroup<ConsentRequestStatusRequestFormProperties>({
			consentRequestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConsentStatus { GRANTED = 'GRANTED', EXPIRED = 'EXPIRED', DENIED = 'DENIED', REQUESTED = 'REQUESTED', REVOKED = 'REVOKED' }

	export interface Endpoint {
		address?: string | null;
		connectionType?: string | null;
		use?: string | null;
	}
	export interface EndpointFormProperties {
		address: FormControl<string | null | undefined>,
		connectionType: FormControl<string | null | undefined>,
		use: FormControl<string | null | undefined>,
	}
	export function CreateEndpointFormGroup() {
		return new FormGroup<EndpointFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			connectionType: new FormControl<string | null | undefined>(undefined),
			use: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorResponse {
		error?: Error;
	}
	export interface ErrorResponseFormProperties {
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
		});

	}

	export interface EventCategoryDetail {

		/** Required */
		careContext: CareContextDefinition;

		/** Required */
		hiTypes: Array<HITypeEnum>;
	}
	export interface EventCategoryDetailFormProperties {
	}
	export function CreateEventCategoryDetailFormGroup() {
		return new FormGroup<EventCategoryDetailFormProperties>({
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
		status: ConsentArtefactResponseConsentStatus;
	}
	export interface HIPConsentNotificationNotificationFormProperties {

		/** Required */
		consentId: FormControl<string | null | undefined>,

		/** Required */
		signature: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ConsentArtefactResponseConsentStatus | null | undefined>,
	}
	export function CreateHIPConsentNotificationNotificationFormGroup() {
		return new FormGroup<HIPConsentNotificationNotificationFormProperties>({
			consentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			signature: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ConsentArtefactResponseConsentStatus | null | undefined>(undefined, [Validators.required]),
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

	export interface HIPHIRequest {

		/** Required */
		hiRequest: HIPHIRequestHiRequest;

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
	export interface HIPHIRequestFormProperties {

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
	export function CreateHIPHIRequestFormGroup() {
		return new FormGroup<HIPHIRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			transactionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HIPHIRequestHiRequest {

		/** Required */
		consent: Consent;

		/** Required */
		dataPushUrl: string;

		/** Required */
		dateRange: DateRange;

		/** Required */
		keyMaterial: KeyMaterial;
	}
	export interface HIPHIRequestHiRequestFormProperties {

		/** Required */
		dataPushUrl: FormControl<string | null | undefined>,
	}
	export function CreateHIPHIRequestHiRequestFormGroup() {
		return new FormGroup<HIPHIRequestHiRequestFormProperties>({
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

	export interface HIRequest {

		/** Required */
		hiRequest: HIRequestHiRequest;

		/** Required */
		requestId: string;

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: Date;
	}
	export interface HIRequestFormProperties {

		/** Required */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateHIRequestFormGroup() {
		return new FormGroup<HIRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HIRequestHiRequest {

		/** Required */
		consent: Consent;

		/** Required */
		dataPushUrl: string;

		/** Required */
		dateRange: DateRange;

		/** Required */
		keyMaterial: KeyMaterial;
	}
	export interface HIRequestHiRequestFormProperties {

		/** Required */
		dataPushUrl: FormControl<string | null | undefined>,
	}
	export function CreateHIRequestHiRequestFormGroup() {
		return new FormGroup<HIRequestHiRequestFormProperties>({
			dataPushUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HIUConsentNotificationEvent {

		/** Required */
		notification: HIUConsentNotificationEventNotification;

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
	export interface HIUConsentNotificationEventFormProperties {

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
	export function CreateHIUConsentNotificationEventFormGroup() {
		return new FormGroup<HIUConsentNotificationEventFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HIUConsentNotificationEventNotification {

		/** if the status is GRANTED or REVOKED, then the consentArtefact references (Ids) must be specified. */
		consentArtefacts?: Array<ConsentArtefactReference>;

		/** Required */
		consentRequestId: string;

		/** Required */
		status: ConsentArtefactResponseConsentStatus;
	}
	export interface HIUConsentNotificationEventNotificationFormProperties {

		/** Required */
		consentRequestId: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ConsentArtefactResponseConsentStatus | null | undefined>,
	}
	export function CreateHIUConsentNotificationEventNotificationFormGroup() {
		return new FormGroup<HIUConsentNotificationEventNotificationFormProperties>({
			consentRequestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ConsentArtefactResponseConsentStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HIUConsentNotificationResponse {
		acknowledgement?: Array<ConsentAcknowledgement>;
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
	export interface HIUConsentNotificationResponseFormProperties {

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
	export function CreateHIUConsentNotificationResponseFormGroup() {
		return new FormGroup<HIUConsentNotificationResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HIUConsentRequestStatus {
		consentRequest?: HIUConsentRequestStatusConsentRequest;
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
	export interface HIUConsentRequestStatusFormProperties {

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
	export function CreateHIUConsentRequestStatusFormGroup() {
		return new FormGroup<HIUConsentRequestStatusFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HIUConsentRequestStatusConsentRequest {
		consentArtefacts?: Array<ConsentArtefactReference>;

		/** Required */
		id: string;

		/** Required */
		status: ConsentArtefactResponseConsentStatus;
	}
	export interface HIUConsentRequestStatusConsentRequestFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ConsentArtefactResponseConsentStatus | null | undefined>,
	}
	export function CreateHIUConsentRequestStatusConsentRequestFormGroup() {
		return new FormGroup<HIUConsentRequestStatusConsentRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ConsentArtefactResponseConsentStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HIUHealthInformationRequestResponse {
		error?: Error;
		hiRequest?: HIUHealthInformationRequestResponseHiRequest;

		/** Required */
		requestId: string;

		/** Required */
		resp: RequestReference;

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: Date;
	}
	export interface HIUHealthInformationRequestResponseFormProperties {

		/** Required */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateHIUHealthInformationRequestResponseFormGroup() {
		return new FormGroup<HIUHealthInformationRequestResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HIUHealthInformationRequestResponseHiRequest {

		/** Required */
		sessionStatus: HIUHealthInformationRequestResponseHiRequestSessionStatus;

		/** Required */
		transactionId: string;
	}
	export interface HIUHealthInformationRequestResponseHiRequestFormProperties {

		/** Required */
		sessionStatus: FormControl<HIUHealthInformationRequestResponseHiRequestSessionStatus | null | undefined>,

		/** Required */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateHIUHealthInformationRequestResponseHiRequestFormGroup() {
		return new FormGroup<HIUHealthInformationRequestResponseHiRequestFormProperties>({
			sessionStatus: new FormControl<HIUHealthInformationRequestResponseHiRequestSessionStatus | null | undefined>(undefined, [Validators.required]),
			transactionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum HIUHealthInformationRequestResponseHiRequestSessionStatus { REQUESTED = 'REQUESTED', ACKNOWLEDGED = 'ACKNOWLEDGED' }

	export interface HIUSubscription {

		/** Required */
		hiu: OrganizationRepresentation;

		/** Required */
		id: string;

		/** Required */
		patient: ConsentManagerPatientID;

		/** Required */
		sources: Array<HIUSubscriptionContext>;
	}
	export interface HIUSubscriptionFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateHIUSubscriptionFormGroup() {
		return new FormGroup<HIUSubscriptionFormProperties>({
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

	export interface HIUSubscriptionContext {

		/** Required */
		categories: Array<SubscriptionCategory>;
		hip?: OrganizationRepresentation;

		/** Required */
		period: SubscriptionPeriod;
	}
	export interface HIUSubscriptionContextFormProperties {
	}
	export function CreateHIUSubscriptionContextFormGroup() {
		return new FormGroup<HIUSubscriptionContextFormProperties>({
		});

	}

	export enum SubscriptionCategory { LINK = 'LINK' }

	export interface SubscriptionPeriod {

		/** Required */
		from: Date;

		/** Required */
		to: Date;
	}
	export interface SubscriptionPeriodFormProperties {

		/** Required */
		from: FormControl<Date | null | undefined>,

		/** Required */
		to: FormControl<Date | null | undefined>,
	}
	export function CreateSubscriptionPeriodFormGroup() {
		return new FormGroup<SubscriptionPeriodFormProperties>({
			from: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			to: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HIUSubscriptionEventContent {

		/** Required */
		context: Array<EventCategoryDetail>;

		/** Required */
		hip: OrganizationRepresentation;

		/** Required */
		patient: ConsentManagerPatientID;
	}
	export interface HIUSubscriptionEventContentFormProperties {
	}
	export function CreateHIUSubscriptionEventContentFormGroup() {
		return new FormGroup<HIUSubscriptionEventContentFormProperties>({
		});

	}

	export interface HIUSubscriptionNotification {

		/** Required */
		event: HIUSubscriptionNotificationEvent;

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
	export interface HIUSubscriptionNotificationFormProperties {

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
	export function CreateHIUSubscriptionNotificationFormGroup() {
		return new FormGroup<HIUSubscriptionNotificationFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HIUSubscriptionNotificationEvent {

		/** Required */
		category: SubscriptionCategory;

		/** Required */
		content: HIUSubscriptionEventContent;

		/** Required */
		id: string;

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		published: Date;

		/** Required */
		subscriptionId: string;
	}
	export interface HIUSubscriptionNotificationEventFormProperties {

		/** Required */
		category: FormControl<SubscriptionCategory | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		published: FormControl<Date | null | undefined>,

		/** Required */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateHIUSubscriptionNotificationEventFormGroup() {
		return new FormGroup<HIUSubscriptionNotificationEventFormProperties>({
			category: new FormControl<SubscriptionCategory | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			published: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			subscriptionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HIUSubscriptionNotificationAcknowledgment {
		acknowledgement?: HIUSubscriptionNotificationAcknowledgmentAcknowledgement;
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
	export interface HIUSubscriptionNotificationAcknowledgmentFormProperties {

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
	export function CreateHIUSubscriptionNotificationAcknowledgmentFormGroup() {
		return new FormGroup<HIUSubscriptionNotificationAcknowledgmentFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HIUSubscriptionNotificationAcknowledgmentAcknowledgement {

		/** Required */
		eventId: string;

		/** Required */
		status: HIUSubscriptionNotificationAcknowledgmentAcknowledgementStatus;
	}
	export interface HIUSubscriptionNotificationAcknowledgmentAcknowledgementFormProperties {

		/** Required */
		eventId: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<HIUSubscriptionNotificationAcknowledgmentAcknowledgementStatus | null | undefined>,
	}
	export function CreateHIUSubscriptionNotificationAcknowledgmentAcknowledgementFormGroup() {
		return new FormGroup<HIUSubscriptionNotificationAcknowledgmentAcknowledgementFormProperties>({
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<HIUSubscriptionNotificationAcknowledgmentAcknowledgementStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum HIUSubscriptionNotificationAcknowledgmentAcknowledgementStatus { OK = 'OK' }

	export interface HIUSubscriptionRequestNotificationAcknowledgement {
		acknowledgement?: HIUSubscriptionRequestNotificationAcknowledgementAcknowledgement;
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
	export interface HIUSubscriptionRequestNotificationAcknowledgementFormProperties {

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
	export function CreateHIUSubscriptionRequestNotificationAcknowledgementFormGroup() {
		return new FormGroup<HIUSubscriptionRequestNotificationAcknowledgementFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HIUSubscriptionRequestNotificationAcknowledgementAcknowledgement {

		/** Required */
		status: HIUSubscriptionNotificationAcknowledgmentAcknowledgementStatus;

		/** Required */
		subscriptionRequestId: string;
	}
	export interface HIUSubscriptionRequestNotificationAcknowledgementAcknowledgementFormProperties {

		/** Required */
		status: FormControl<HIUSubscriptionNotificationAcknowledgmentAcknowledgementStatus | null | undefined>,

		/** Required */
		subscriptionRequestId: FormControl<string | null | undefined>,
	}
	export function CreateHIUSubscriptionRequestNotificationAcknowledgementAcknowledgementFormGroup() {
		return new FormGroup<HIUSubscriptionRequestNotificationAcknowledgementAcknowledgementFormProperties>({
			status: new FormControl<HIUSubscriptionNotificationAcknowledgmentAcknowledgementStatus | null | undefined>(undefined, [Validators.required]),
			subscriptionRequestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HIUSubscriptionRequestReceipt {
		error?: Error;

		/**
		 * a nonce, unique for each HTTP request
		 * Required
		 */
		requestId: string;

		/** Required */
		resp: RequestReference;
		subscriptionRequest?: HIUSubscriptionRequestReceiptSubscriptionRequest;

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: Date;
	}
	export interface HIUSubscriptionRequestReceiptFormProperties {

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
	export function CreateHIUSubscriptionRequestReceiptFormGroup() {
		return new FormGroup<HIUSubscriptionRequestReceiptFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HIUSubscriptionRequestReceiptSubscriptionRequest {

		/**
		 * id of the consent-request created
		 * Required
		 */
		id: string;
	}
	export interface HIUSubscriptionRequestReceiptSubscriptionRequestFormProperties {

		/**
		 * id of the consent-request created
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateHIUSubscriptionRequestReceiptSubscriptionRequestFormGroup() {
		return new FormGroup<HIUSubscriptionRequestReceiptSubscriptionRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

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

		/** Required */
		id: string;

		/** Required */
		type: HealthInformationNotificationNotificationNotifierType;
	}
	export interface HealthInformationNotificationNotificationNotifierFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<HealthInformationNotificationNotificationNotifierType | null | undefined>,
	}
	export function CreateHealthInformationNotificationNotificationNotifierFormGroup() {
		return new FormGroup<HealthInformationNotificationNotificationNotifierFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<HealthInformationNotificationNotificationNotifierType | null | undefined>(undefined, [Validators.required]),
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
		status?: HeartbeatResponseStatus | null;
		timestamp?: Date | null;
	}
	export interface HeartbeatResponseFormProperties {
		status: FormControl<HeartbeatResponseStatus | null | undefined>,
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateHeartbeatResponseFormGroup() {
		return new FormGroup<HeartbeatResponseFormProperties>({
			status: new FormControl<HeartbeatResponseStatus | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum HeartbeatResponseStatus { UP = 'UP', DOWN = 'DOWN' }

	export interface Identifier {
		type?: IdentifierType | null;
		value?: string | null;
	}
	export interface IdentifierFormProperties {
		type: FormControl<IdentifierType | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateIdentifierFormGroup() {
		return new FormGroup<IdentifierFormProperties>({
			type: new FormControl<IdentifierType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
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
		communicationMedium?: MetaCommunicationMedium | null;
	}
	export interface MetaFormProperties {
		communicationExpiry: FormControl<string | null | undefined>,
		communicationHint: FormControl<string | null | undefined>,
		communicationMedium: FormControl<MetaCommunicationMedium | null | undefined>,
	}
	export function CreateMetaFormGroup() {
		return new FormGroup<MetaFormProperties>({
			communicationExpiry: new FormControl<string | null | undefined>(undefined),
			communicationHint: new FormControl<string | null | undefined>(undefined),
			communicationMedium: new FormControl<MetaCommunicationMedium | null | undefined>(undefined),
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

		/** Demographic details are only required for demographic auth at this point. Demographic details must be same as registered */
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


	/** Demographic details are only required for demographic auth at this point. Demographic details must be same as registered */
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

	/** Demographic details are only required for demographic auth at this point. Demographic details must be same as registered */
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

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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
		requester: PatientAuthRequester;
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
		status: HIUSubscriptionNotificationAcknowledgmentAcknowledgementStatus;
	}
	export interface PatientAuthNotificationAcknowledgementAcknowledgementFormProperties {

		/** Required */
		status: FormControl<HIUSubscriptionNotificationAcknowledgmentAcknowledgementStatus | null | undefined>,
	}
	export function CreatePatientAuthNotificationAcknowledgementAcknowledgementFormGroup() {
		return new FormGroup<PatientAuthNotificationAcknowledgementAcknowledgementFormProperties>({
			status: new FormControl<HIUSubscriptionNotificationAcknowledgmentAcknowledgementStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


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

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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
		careContexts?: Array<CareContextRepresentation>;

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

	export interface PatientIdentificationRequest {

		/** Required */
		query: PatientIdentificationRequestQuery;

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
	export interface PatientIdentificationRequestFormProperties {

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
	export function CreatePatientIdentificationRequestFormGroup() {
		return new FormGroup<PatientIdentificationRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientIdentificationRequestQuery {

		/** Required */
		patient: PatientIdentificationRequestQueryPatient;

		/** Required */
		requester: PatientIdentificationRequestQueryRequester;
	}
	export interface PatientIdentificationRequestQueryFormProperties {
	}
	export function CreatePatientIdentificationRequestQueryFormGroup() {
		return new FormGroup<PatientIdentificationRequestQueryFormProperties>({
		});

	}

	export interface PatientIdentificationRequestQueryPatient {
		id?: string | null;
	}
	export interface PatientIdentificationRequestQueryPatientFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreatePatientIdentificationRequestQueryPatientFormGroup() {
		return new FormGroup<PatientIdentificationRequestQueryPatientFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatientIdentificationRequestQueryRequester {
		id?: string | null;
		type?: HealthInformationNotificationNotificationNotifierType | null;
	}
	export interface PatientIdentificationRequestQueryRequesterFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<HealthInformationNotificationNotificationNotifierType | null | undefined>,
	}
	export function CreatePatientIdentificationRequestQueryRequesterFormGroup() {
		return new FormGroup<PatientIdentificationRequestQueryRequesterFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<HealthInformationNotificationNotificationNotifierType | null | undefined>(undefined),
		});

	}

	export interface PatientIdentificationResponse {
		error?: Error;
		patient?: PatientIdentificationResponsePatient;

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
	export interface PatientIdentificationResponseFormProperties {

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
	export function CreatePatientIdentificationResponseFormGroup() {
		return new FormGroup<PatientIdentificationResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientIdentificationResponsePatient {

		/** Required */
		id: string;

		/** Required */
		name: string;
	}
	export interface PatientIdentificationResponsePatientFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePatientIdentificationResponsePatientFormGroup() {
		return new FormGroup<PatientIdentificationResponsePatientFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

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

		/**
		 * Identifier of patient at consent manager
		 * Required
		 */
		id: string;

		/** Required */
		referenceNumber: string;
	}
	export interface PatientLinkReferenceRequestPatientFormProperties {

		/**
		 * Identifier of patient at consent manager
		 * Required
		 */
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

	export interface ServiceProfileResponse {
		active?: boolean | null;
		endpoints?: Array<Endpoint>;
		id?: string | null;
		name?: string | null;
		type?: ServiceProfileResponseType | null;
	}
	export interface ServiceProfileResponseFormProperties {
		active: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<ServiceProfileResponseType | null | undefined>,
	}
	export function CreateServiceProfileResponseFormGroup() {
		return new FormGroup<ServiceProfileResponseFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ServiceProfileResponseType | null | undefined>(undefined),
		});

	}

	export enum ServiceProfileResponseType { HIP = 'HIP', HIU = 'HIU', HIP_AND_HIU = 'HIP_AND_HIU', HEALTH_LOCKER = 'HEALTH_LOCKER' }

	export enum ServiceRole { HIP = 'HIP', HIU = 'HIU', HIP_AND_HIU = 'HIP_AND_HIU', HEALTH_LOCKER = 'HEALTH_LOCKER' }

	export interface SessionRequest {

		/** Required */
		clientId: string;

		/** Required */
		clientSecret: string;

		/** Required */
		grantType: SessionRequestGrantType;
		refreshToken?: string | null;
	}
	export interface SessionRequestFormProperties {

		/** Required */
		clientId: FormControl<string | null | undefined>,

		/** Required */
		clientSecret: FormControl<string | null | undefined>,

		/** Required */
		grantType: FormControl<SessionRequestGrantType | null | undefined>,
		refreshToken: FormControl<string | null | undefined>,
	}
	export function CreateSessionRequestFormGroup() {
		return new FormGroup<SessionRequestFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientSecret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			grantType: new FormControl<SessionRequestGrantType | null | undefined>(undefined, [Validators.required]),
			refreshToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SessionRequestGrantType { client_credentials = 'client_credentials', refresh_token = 'refresh_token' }

	export interface SessionResponse {
		accessToken?: string | null;

		/**
		 * In Minutes
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expiresIn?: number | null;

		/**
		 * In Minutes
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		refreshExpiresIn?: number | null;
		refreshToken?: string | null;
		tokenType?: string | null;
	}
	export interface SessionResponseFormProperties {
		accessToken: FormControl<string | null | undefined>,

		/**
		 * In Minutes
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expiresIn: FormControl<number | null | undefined>,

		/**
		 * In Minutes
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		dayOfBirth?: number | null;

		/** Required */
		gender: PatientDemographicGender;

		/** Required */
		healthId: string;

		/** Required */
		healthIdNumber: string;
		identifiers?: Array<Identifier>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		monthOfBirth?: number | null;

		/** Required */
		name: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		yearOfBirth: number;
	}
	export interface ShareProfileRequestPatientUserDemographicsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		dayOfBirth: FormControl<number | null | undefined>,

		/** Required */
		gender: FormControl<PatientDemographicGender | null | undefined>,

		/** Required */
		healthId: FormControl<string | null | undefined>,

		/** Required */
		healthIdNumber: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		monthOfBirth: FormControl<number | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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

	export interface SubscriptionApprovalNotification {

		/** Required */
		notification: SubscriptionApprovalNotificationNotification;

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
	export interface SubscriptionApprovalNotificationFormProperties {

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
	export function CreateSubscriptionApprovalNotificationFormGroup() {
		return new FormGroup<SubscriptionApprovalNotificationFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SubscriptionApprovalNotificationNotification {

		/** Required */
		status: PatientAuthNotificationAuthStatus;
		subscription?: HIUSubscription;
		subscriptionRequestId?: string | null;
	}
	export interface SubscriptionApprovalNotificationNotificationFormProperties {

		/** Required */
		status: FormControl<PatientAuthNotificationAuthStatus | null | undefined>,
		subscriptionRequestId: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionApprovalNotificationNotificationFormGroup() {
		return new FormGroup<SubscriptionApprovalNotificationNotificationFormProperties>({
			status: new FormControl<PatientAuthNotificationAuthStatus | null | undefined>(undefined, [Validators.required]),
			subscriptionRequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubscriptionRequest {

		/**
		 * a nonce, unique for each HTTP request.
		 * Required
		 */
		requestId: string;

		/** Required */
		subscription: SubscriptionRequestSubscription;

		/**
		 * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
		 * Required
		 */
		timestamp: Date;
	}
	export interface SubscriptionRequestFormProperties {

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
	export function CreateSubscriptionRequestFormGroup() {
		return new FormGroup<SubscriptionRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SubscriptionRequestSubscription {

		/** Required */
		categories: Array<SubscriptionCategory>;
		hips?: Array<OrganizationRepresentation>;

		/** Required */
		hiu: OrganizationRepresentation;

		/** Required */
		patient: ConsentManagerPatientID;

		/** Required */
		period: SubscriptionPeriod;

		/** Required */
		purpose: UsePurpose;
	}
	export interface SubscriptionRequestSubscriptionFormProperties {
	}
	export function CreateSubscriptionRequestSubscriptionFormGroup() {
		return new FormGroup<SubscriptionRequestSubscriptionFormProperties>({
		});

	}

	export enum SubscriptionStatus { GRANTED = 'GRANTED', DENIED = 'DENIED' }

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
		 * Request for patient care context discover, made by CM for a specific HIP. It is expected that HIP will subsequently return either zero or one patient record with (potentially masked) associated care contexts
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
		 * Create consent request
		 * Creates a consent request to get data about a patient by HIU user.
		 * Post v0.5/consent-requests/init
		 * @return {void} 
		 */
		V0_5Consent_requestsInitPost(requestBody: ConsentRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/consent-requests/init', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Response to consent request
		 * Result of consent request creation for a patient. **consentRequest.id** represents the consentrequest id created by CM. The result must contain either **consentRequest** or the **error** caused. <br/>
		 * Reasons for error may be
		 * * Invalid references (e.g patient id, hiu id), purpose, hiTypes, ranges, persmission
		 * Post v0.5/consent-requests/on-init
		 * @return {void} 
		 */
		V0_5Consent_requestsOn_initPost(requestBody: ConsentRequestInitResponse, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/consent-requests/on-init', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Result of consent request status
		 * Result of consent request done previously. Status of request can be GRANTED,  DENIED, EXPIRED. If the request was GRANTED, then
		 * Post v0.5/consent-requests/on-status
		 * @return {void} 
		 */
		V0_5Consent_requestsOn_statusPost(requestBody: HIUConsentRequestStatus, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/consent-requests/on-status', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get consent request status
		 * Get status of consent request done previously
		 * Post v0.5/consent-requests/status
		 * @return {void} 
		 */
		V0_5Consent_requestsStatusPost(requestBody: ConsentRequestStatusRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/consent-requests/status', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get consent artefact
		 * Post v0.5/consents/fetch
		 * @return {void} 
		 */
		V0_5ConsentsFetchPost(requestBody: ConsentFetchRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/consents/fetch', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Consent notification
		 * Notification of consents to health information providers consent request granted, consent revoked, consent expired. Only the GRANTED, REVOKED and EXPIRED status notifications will be sent to HIP.
		 * 1. If consent is granted, status=GRANTED, then consentDetail contains the consent artefact details and signature is available.
		 * 2. If consent is revoked, then status=REVOKED, and consentId specifes which consent artefact is revoked.
		 * 3. If the consent has expired, then status=EXPIRED, and consentId specifies which consent artefact has expired. Note, this is also responsibility of the HIP to keep track of consent expiry. Any data request on expired consent artefact must not be done.
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
		 * Consent notification
		 * Health information user will get notified about the consent request granted or denied, consent revoked, consent expired.
		 * 1. For consent request grant, status=GRANTED, consentRequestId=<consent-request-id>, and consentArtefacts is an array of generated consent artefact Ids.
		 * 2. For consent request expiry, status=EXPIRED, consentRequestId=<consent-request-id>
		 * 3. For consent request denied, status=DENIED, consentRequestId=<consent-request-id>
		 * 4. For consent revocation, status=REVOKED, consentArtefacts is an array of revoked consent artefact ids
		 * Post v0.5/consents/hiu/notify
		 * @return {void} 
		 */
		V0_5ConsentsHiuNotifyPost(requestBody: HIUConsentNotificationEvent, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/consents/hiu/notify', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Consent notification
		 * This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED.
		 * Post v0.5/consents/hiu/on-notify
		 * @return {void} 
		 */
		V0_5ConsentsHiuOn_notifyPost(requestBody: HIUConsentNotificationResponse, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/consents/hiu/on-notify', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Result of fetch request for a consent artefact
		 * Must contain either consentDetail or error. Possible reason of errors are
		 * 1. consentId passed through /fetch is invalid
		 * Post v0.5/consents/on-fetch
		 * @return {void} 
		 */
		V0_5ConsentsOn_fetchPost(requestBody: ConsentArtefactResponse, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/consents/on-fetch', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Health information data request
		 * Callback API for acknowledgement of Health information request of HIU. CM calls this API when it has validated the Health Information request given the consent id. Either the **hiRequest** or **error** would need to be specified. If the health info request was valid, then the ***hiRequest.transactionId*** specifies the transaction context against which HIP would send over the data.  Possible cases of errors are
		 * 1. **Invalid consent artefact id**
		 * 2. **Consent has expired**
		 * 3. **Date ranges are invalid**
		 * Post v0.5/health-information/cm/on-request
		 * @return {void} 
		 */
		V0_5Health_informationCmOn_requestPost(requestBody: HIUHealthInformationRequestResponse, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/health-information/cm/on-request', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Health information data request
		 * Request for Health information against a consent id. CM would generate a transactionId against each consent and pass it as trnasaction context / correlation id to the HIP and also return the same to HIU via /on-request.
		 * Post v0.5/health-information/cm/request
		 * @return {void} 
		 */
		V0_5Health_informationCmRequestPost(requestBody: HIRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/health-information/cm/request', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
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
		V0_5Health_informationHipRequestPost(requestBody: HIPHIRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
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
		 * Get consent request status
		 * Get v0.5/heartbeat
		 * @return {HeartbeatResponse} OK
		 */
		V0_5HeartbeatGet(headersHandler?: () => HttpHeaders): Observable<HeartbeatResponse> {
			return this.http.get<HeartbeatResponse>(this.baseUri + 'v0.5/heartbeat', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get bridge service details/profile by the serviceId provided.
		 * This API is meant for displaying the bridge service details by the serviceId provided .
		 * Get v0.5/hi-services/{service_id}
		 * @return {ServiceProfileResponse} service details fetched successfully
		 */
		V0_5Hi_services_service_idGet(service_id: string, headersHandler?: () => HttpHeaders): Observable<ServiceProfileResponse> {
			return this.http.get<ServiceProfileResponse>(this.baseUri + 'v0.5/hi-services/{service_id}', { headers: headersHandler ? headersHandler() : undefined });
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
		 * Request from CM to links care contexts associated with only one patient
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
		 * Identify a patient by her consent-manager user-id
		 * This API is meant for identify to patient given her consent-manager-user-id
		 * Post v0.5/patients/find
		 * @return {void} 
		 */
		V0_5PatientsFindPost(requestBody: PatientIdentificationRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/patients/find', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Identification result for a consent-manager user-id
		 * If a patient is found then patient.name contains the patients name.
		 * Otherwise, patient is not provided, and possibly error is raised for invalid requests
		 * Note in addition to the "Authorization" header, one of the following headers must be specified
		 * 1. specify **X-HIU-ID** if the requester is HIU (identified from /find requester.id)
		 * 2. specify **X-HIP-ID** if the requester is HIP (identified from /find requester.id)
		 * Post v0.5/patients/on-find
		 * @return {void} 
		 */
		V0_5PatientsOn_findPost(requestBody: PatientIdentificationResponse, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/patients/on-find', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
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
		 * Request for subscription
		 * creates a request for subscription. The subscription categories can be for care-contexts linkages or availability of data against existing care-contexts. Note that the requester must have HIU role
		 * Post v0.5/subscription-requests/cm/init
		 * @return {void} 
		 */
		V0_5Subscription_requestsCmInitPost(requestBody: SubscriptionRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/subscription-requests/cm/init', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * callback API for the /subscription-requests/cm/init to notify a HIU on acceptance/acknowledgement of the request for subscription.
		 * This callback API acknowledges the request for subscription from a HIU, and sends back a "id" that will be used when the patient/user approves or denies the subscription.
		 * Post v0.5/subscription-requests/cm/on-init
		 * @return {void} 
		 */
		V0_5Subscription_requestsCmOn_initPost(requestBody: HIUSubscriptionRequestReceipt, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/subscription-requests/cm/on-init', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Notification for subscription grant/deny/revoke
		 * This API is used by CM to notify a HIU to grant or deny a request for subscription, and also to notify that in case an existing subscription is revoked or expired. For notifying that a particular subscription request was GRANTED or DENIED, the **subscriptionRequestId** is passed.
		 * Post v0.5/subscription-requests/hiu/notify
		 * @return {void} 
		 */
		V0_5Subscription_requestsHiuNotifyPost(requestBody: SubscriptionApprovalNotification, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/subscription-requests/hiu/notify', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
		 * This API is called by HIU as acknowledgement to subscription request relevant notifications.
		 * Post v0.5/subscription-requests/hiu/on-notify
		 * @return {void} 
		 */
		V0_5Subscription_requestsHiuOn_notifyPost(requestBody: HIUSubscriptionRequestNotificationAcknowledgement, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/subscription-requests/hiu/on-notify', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Notification to HIU on basis of a granted subscription
		 * This API is used by CM to notify a HIU for notification relevant to subscription. Notifications are sent to subscribed HIUs whenever a new care-context is linked or new data is available on an existing linked care-context.
		 * 1. if event.category = LINK, then only care-contexts are passed when new care-contexts are linked for patient.
		 * 2. If event.category = DATA, then hiTypes are passed. Care-context is passed only if the subscribed HIU has any valid consent for that care-context
		 * Post v0.5/subscriptions/hiu/notify
		 * @return {void} 
		 */
		V0_5SubscriptionsHiuNotifyPost(requestBody: HIUSubscriptionNotification, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/subscriptions/hiu/notify', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.
		 * This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED.
		 * Post v0.5/subscriptions/hiu/on-notify
		 * @return {void} 
		 */
		V0_5SubscriptionsHiuOn_notifyPost(requestBody: HIUSubscriptionNotificationAcknowledgment, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/subscriptions/hiu/on-notify', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
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

