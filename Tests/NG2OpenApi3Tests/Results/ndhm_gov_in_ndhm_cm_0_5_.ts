import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
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


	/**
	 * Subjected to CM specific capability
	 *  1. MOBILE_OTP - for SMS OTP
	 *  2. DIRECT - for authentication directly with the patient. e.g. Mobile App, SMS
	 *  3. AADHAAR_OTP - for auth using OTP sent to Aadhaar number
	 *  4. DEMOGRAPHICS - for auth using demographic verification.
	 */
	export enum AuthenticationMode { MOBILE_OTP = 'MOBILE_OTP', DIRECT = 'DIRECT', DEMOGRAPHICS = 'DEMOGRAPHICS', AADHAAR_OTP = 'AADHAAR_OTP' }

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

		/** Required */
		type: string;

		/** Required */
		value: string;
	}
	export interface RequesterIdentifierFormProperties {
		system: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateRequesterIdentifierFormGroup() {
		return new FormGroup<RequesterIdentifierFormProperties>({
			system: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ */
		timestamp?: Date | null;
	}
	export interface HeartbeatResponseFormProperties {
		status: FormControl<HeartbeatResponseStatus | null | undefined>,

		/** Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ */
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

	export enum IdentifierType { MOBILE = 'MOBILE', MR = 'MR' }

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

	export interface PatientAuthConfirmRequest {

		/**
		 * note, demographic details are only required for demographic verfication.
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

		/** Demographic details must be same as registered */
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


	/** Demographic details must be same as registered */
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

	/** Demographic details must be same as registered */
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
		purpose: PatientAuthInitRequestQueryPurpose;

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
		purpose: FormControl<PatientAuthInitRequestQueryPurpose | null | undefined>,
	}
	export function CreatePatientAuthInitRequestQueryFormGroup() {
		return new FormGroup<PatientAuthInitRequestQueryFormProperties>({
			authMode: new FormControl<AuthenticationMode | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			purpose: new FormControl<PatientAuthInitRequestQueryPurpose | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PatientAuthInitRequestQueryPurpose { LINK = 'LINK', KYC = 'KYC', KYC_AND_LINK = 'KYC_AND_LINK' }


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
		purpose: PatientAuthInitRequestQueryPurpose;

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
		purpose: FormControl<PatientAuthInitRequestQueryPurpose | null | undefined>,
	}
	export function CreatePatientAuthModeQueryRequestQueryFormGroup() {
		return new FormGroup<PatientAuthModeQueryRequestQueryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			purpose: new FormControl<PatientAuthInitRequestQueryPurpose | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		id: string;
	}
	export interface PatientIdentificationRequestQueryPatientFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreatePatientIdentificationRequestQueryPatientFormGroup() {
		return new FormGroup<PatientIdentificationRequestQueryPatientFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientIdentificationRequestQueryRequester {

		/** Required */
		id: string;

		/** Required */
		type: HealthInformationNotificationNotificationNotifierType;
	}
	export interface PatientIdentificationRequestQueryRequesterFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<HealthInformationNotificationNotificationNotifierType | null | undefined>,
	}
	export function CreatePatientIdentificationRequestQueryRequesterFormGroup() {
		return new FormGroup<PatientIdentificationRequestQueryRequesterFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<HealthInformationNotificationNotificationNotifierType | null | undefined>(undefined, [Validators.required]),
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
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
		 * Create consent request
		 * Creates a consent request to get data about a patient by HIU user. CM should call Gateway - **v0.5/consent-requests/on-init*** API with the consent-request-id
		 * Post v0.5/consent-requests/init
		 * @return {void} 
		 */
		V0_5Consent_requestsInitPost(requestBody: ConsentRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/consent-requests/init', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get consent request status
		 * Get status of consent request done previously. CM responds by calling Gateway API - **v0.5/consent-requests/on-status***
		 * Post v0.5/consent-requests/status
		 * @return {void} 
		 */
		V0_5Consent_requestsStatusPost(requestBody: ConsentRequestStatusRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/consent-requests/status', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get consent artefact
		 * This API is called when a HIU makes a request to get a consent artefact. For response please refer to the Gateway **v0.5/consents/on-fetch***
		 * Post v0.5/consents/fetch
		 * @return {void} 
		 */
		V0_5ConsentsFetchPost(requestBody: ConsentFetchRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/consents/fetch', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Consent notification
		 * This API is called by HIP as acknowledgement to notification of consents, in cases of consent revocation and expiration, notified by CM earlier via Gateway API - **v0.5/consents/hip/notify***.
		 * Post v0.5/consents/hip/on-notify
		 * @return {void} 
		 */
		V0_5ConsentsHipOn_notifyPost(requestBody: HIPConsentNotificationResponse, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/consents/hip/on-notify', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Consent notification
		 * This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED, notified by CM earlier via Gateway API - **v0.5/consents/hiu/notify***.
		 * Post v0.5/consents/hiu/on-notify
		 * @return {void} 
		 */
		V0_5ConsentsHiuOn_notifyPost(requestBody: HIUConsentNotificationResponse, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/consents/hiu/on-notify', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
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
		 * Health information data request acknowledgement from HIP
		 * This API is called by HIP to acknowledge Health information request receipt. When HIU requests health information, CM generates a transactionId and makes a health information request to the HIP(s). HIPs acknowledgement to the health-information request is coveyed by this API. Either the **hiRequest** or **error** must be specified. **hiRequest** element returns the same transactionId as before with a status indicating that the request is acknowledged.
		 * Post v0.5/health-information/on-request
		 * @return {void} 
		 */
		V0_5Health_informationOn_requestPost(requestBody: HIPHealthInformationRequestAcknowledgement, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/health-information/on-request', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Health information data request from HIU
		 * HIU request for Health information against a consent id. CM would generate a transactionId against each consent and pass it as trnasaction context / correlation id to the HIP and also return the same to HIU via Gateway API - **v0.5/health-information/cm/on-request***.
		 * Post v0.5/health-information/request
		 * @return {void} 
		 */
		V0_5Health_informationRequestPost(requestBody: HIRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/health-information/request', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
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
		 * This API is meant for identify to patient given her consent-manager-user-id. CM subsequently makes the /on-find Gateway API call with results.
		 * Post v0.5/patients/find
		 * @return {void} 
		 */
		V0_5PatientsFindPost(requestBody: PatientIdentificationRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/patients/find', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
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
		 * Request for subscription
		 * creates a request for subscription. The subscription categories can be for care-contexts linkages or availability of data against existing care-contexts. Note that the requester must have HIU role
		 * Post v0.5/subscription-requests/cm/init
		 * @return {void} 
		 */
		V0_5Subscription_requestsCmInitPost(requestBody: SubscriptionRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/subscription-requests/cm/init', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
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
		 * callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
		 * This API is called by HIU/HIPs to confirm acknowledgement for receipt of auth notification is case of DIRECT authentication.
		 * Post v0.5/users/auth/on-notify
		 * @return {void} 
		 */
		V0_5UsersAuthOn_notifyPost(requestBody: PatientAuthNotificationAcknowledgement, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v0.5/users/auth/on-notify', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}
	}

}

