import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface ApiKey {
		expired?: boolean;
		expiryDate?: Date;
		key?: string;
	}

	export interface BaseGroup {
		code?: string;
		groupType?: Lookup;
		id?: number;
		lastImportDate?: Date;
		name?: string;
		parentCodes?: Array<string>;
		shortName?: string;
		visible?: boolean;
		visibleToJoin?: boolean;
	}

	export interface Lookup {
		created?: Date;
		description?: string;
		descriptionFriendly?: string;
		displayOrder?: number;
		id?: number;
		lastUpdate?: Date;
		lookupType?: LookupType;
		value?: string;
	}

	export interface LookupType {
		created?: Date;
		description?: string;
		id?: number;
		lastUpdate?: Date;
		type?: LookupTypeType;
	}

	export enum LookupTypeType { GROUP = 0, MENU = 1, ROLE = 2, CODE_STANDARD = 3, CODE_TYPE = 4, FEATURE_TYPE = 5, RELATIONSHIP_TYPE = 6, IDENTIFIER = 7, CONTACT_POINT_TYPE = 8, STATISTIC_TYPE = 9, NEWS_TYPE = 10, GENDER = 11, IBD_CROHNSLOCATION = 12, IBD_CROHNSPROXIMALTERMINALILEUM = 13, IBD_CROHNSPERIANAL = 14, IBD_CROHNSBEHAVIOUR = 15, IBD_UCEXTENT = 16, IBD_EGIMCOMPLICATION = 17, IBD_SURGERYMAINPROCEDURE = 18, IBD_SMOKINGSTATUS = 19, IBD_FAMILYHISTORY = 20, LINK_TYPE = 21 }

	export interface Category {
		friendlyDescription?: string;
		hidden?: boolean;
		icd10Description?: string;
		id?: number;
		number?: number;
	}

	export interface Code {
		code?: string;
		codeCategories?: Array<CodeCategory>;
		codeType?: Lookup;
		created?: Date;
		description?: string;
		displayOrder?: number;
		externalStandards?: Array<CodeExternalStandard>;
		fullDescription?: string;
		hideFromPatients?: boolean;
		id?: number;
		lastUpdate?: Date;
		links?: Array<Link>;
		patientFriendlyName?: string;
		removedExternally?: boolean;
		sourceType?: CodeSourceType;
		standardType?: Lookup;
	}

	export interface CodeCategory {
		category?: Category;
		id?: number;
	}

	export interface CodeExternalStandard {
		codeString?: string;
		externalStandard?: ExternalStandard;
		id?: number;
	}

	export interface ExternalStandard {
		description?: string;
		id?: number;
		name?: string;
	}

	export interface Link {
		created?: Date;
		displayOrder?: number;
		id?: number;
		lastUpdate?: Date;
		link?: string;
		linkType?: Lookup;
		name?: string;
	}

	export enum CodeSourceType { PATIENTVIEW = 0, NHS_CHOICES = 1 }

	export interface ContactPoint {
		contactPointType?: ContactPointType;
		content?: string;
		created?: Date;
		id?: number;
		lastUpdate?: Date;
	}

	export interface ContactPointType {
		description?: string;
		id?: number;
		lookupType?: LookupType;
		value?: ContactPointTypeValue;
	}

	export enum ContactPointTypeValue { UNIT_WEB_ADDRESS = 0, TRUST_WEB_ADDRESS = 1, PV_ADMIN_NAME = 2, PV_ADMIN_PHONE = 3, PV_ADMIN_EMAIL = 4, UNIT_ENQUIRIES_PHONE = 5, UNIT_ENQUIRIES_EMAIL = 6, APPOINTMENT_PHONE = 7, APPOINTMENT_EMAIL = 8, OUT_OF_HOURS_INFO = 9 }

	export interface Credentials {
		apiKey?: string;
		password?: string;
		username?: string;
	}

	export interface Entry_long_Map_string_List_FhirObservation_ {
		key?: Array<Entry_string_List_FhirObservation_>;
	}

	export interface Entry_string_List_FhirObservation_ {
		key?: Array<FhirObservation>;
	}

	export interface FhirObservation {
		applies?: Date;
		bodySite?: string;
		comments?: string;
		comparator?: string;
		diagram?: string;
		group?: Group;
		id?: number;
		identifier?: string;
		location?: string;
		name?: string;
		temporaryUuid?: string;
		units?: string;
		value?: string;
	}

	export interface Group {
		address1?: string;
		address2?: string;
		address3?: string;
		childGroups?: Array<Group>;
		code?: string;
		contactPoints?: Array<ContactPoint>;
		created?: Date;
		fhirResourceId?: string;
		groupFeatures?: Array<GroupFeature>;
		groupType?: Lookup;
		id?: number;
		lastImportDate?: Date;
		lastUpdate?: Date;
		links?: Array<Link>;
		locations?: Array<Location>;
		name?: string;
		parentGroups?: Array<Group>;
		postcode?: string;
		sftpUser?: string;
		shortName?: string;
		visible?: boolean;
		visibleToJoin?: boolean;
	}

	export interface GroupFeature {
		created?: Date;
		feature?: Feature;
		id?: number;
		lastUpdate?: Date;
	}

	export interface Feature {
		created?: Date;
		description?: string;
		id?: number;
		lastUpdate?: Date;
		name?: string;
	}

	export interface Location {
		address?: string;
		created?: Date;
		email?: string;
		id?: number;
		label?: string;
		lastUpdate?: Date;
		name?: string;
		phone?: string;
		web?: string;
	}

	export interface FhirAllergy {
		confidenceLevel?: string;
		group?: Group;
		id?: number;
		identifier?: string;
		infoSource?: string;
		reaction?: string;
		recordedDate?: Date;
		status?: string;
		substance?: string;
		type?: string;
	}

	export interface FhirCondition {
		asserter?: string;
		category?: string;
		code?: string;
		date?: Date;
		description?: string;
		fullDescription?: string;
		group?: Group;
		id?: number;
		identifier?: string;
		links?: Array<Link>;
		notes?: string;
		severity?: string;
		status?: string;
	}

	export interface FhirContact {
		id?: number;
		system?: string;
		use?: string;
		value?: string;
	}

	export interface FhirEncounter {
		date?: Date;
		encounterType?: string;
		group?: Group;
		id?: number;
		identifier?: string;
		links?: Array<Link>;
		observations?: Array<FhirObservation>;
		procedures?: Array<FhirProcedure>;
		status?: string;
	}

	export interface FhirProcedure {
		bodySite?: string;
		id?: number;
		type?: string;
	}

	export interface FhirIdentifier {
		id?: number;
		label?: string;
		value?: string;
	}

	export interface FhirObservationPage {
		data?: Array<Entry_long_Map_string_List_FhirObservation_>;
		totalElements?: number;
		totalPages?: number;
	}

	export interface FhirPatient {
		address1?: string;
		address2?: string;
		address3?: string;
		address4?: string;
		contacts?: Array<FhirContact>;
		dateOfBirth?: Date;
		dateOfBirthNoTime?: string;
		forename?: string;
		gender?: string;
		group?: Group;
		groupCode?: string;
		identifier?: string;
		identifiers?: Array<FhirIdentifier>;
		postcode?: string;
		practitioners?: Array<FhirPractitioner>;
		surname?: string;
	}

	export interface FhirPractitioner {
		address1?: string;
		address2?: string;
		address3?: string;
		address4?: string;
		allowInviteGp?: boolean;
		contacts?: Array<FhirContact>;
		gender?: string;
		groupCode?: string;
		identifier?: string;
		inviteDate?: Date;
		name?: string;
		postcode?: string;
		role?: string;
	}

	export interface GroupRole {
		group?: Group;
		id?: number;
		role?: Role;
	}

	export interface Role {
		description?: string;
		id?: number;
		name?: RoleName;
		visible?: boolean;
	}

	export enum RoleName { PATIENT = 0, UNIT_ADMIN = 1, STAFF_ADMIN = 2, DISEASE_GROUP_ADMIN = 3, SPECIALTY_ADMIN = 4, GLOBAL_ADMIN = 5, GP_ADMIN = 6, MEMBER = 7, PUBLIC = 8, UNIT_ADMIN_API = 9, IMPORTER = 10 }

	export interface ObservationHeading {
		code?: string;
		created?: Date;
		decimalPlaces?: number;
		defaultPanel?: number;
		defaultPanelOrder?: number;
		heading?: string;
		id?: number;
		infoLink?: string;
		lastUpdate?: Date;
		maxGraph?: number;
		minGraph?: number;
		name?: string;
		normalRange?: string;
		observationHeadingGroups?: Array<ObservationHeadingGroup>;
		units?: string;
	}

	export interface ObservationHeadingGroup {
		created?: Date;
		group?: Group;
		id?: number;
		panel?: number;
		panelOrder?: number;
	}

	export interface Patient {
		diagnosisCodes?: Array<Code>;
		fhirAllergies?: Array<FhirAllergy>;
		fhirConditions?: Array<FhirCondition>;
		fhirEncounters?: Array<FhirEncounter>;
		fhirObservations?: Array<FhirObservation>;
		fhirPatient?: FhirPatient;
		fhirPractitioners?: Array<FhirPractitioner>;
		group?: Group;
		id?: number;
	}

	export interface PatientManagement {
		condition?: FhirCondition;
		encounters?: Array<FhirEncounter>;
		groupCode?: string;
		identifier?: string;
		observations?: Array<FhirObservation>;
		patient?: FhirPatient;
		practitioners?: Array<FhirPractitioner>;
	}

	export interface Route {
		controller?: string;
		created?: Date;
		displayOrder?: number;
		id?: number;
		lookup?: Lookup;
		templateUrl?: string;
		title?: string;
		url?: string;
	}

	export interface UUID {
	}

	export interface User {
		apiKey?: ApiKey;
		canSwitchUser?: boolean;
		changePassword?: boolean;
		contactNumber?: string;
		created?: Date;
		currentLogin?: Date;
		currentLoginIpAddress?: string;
		dateOfBirth?: Date;
		deleted?: boolean;
		dummy?: boolean;
		email?: string;
		emailVerified?: boolean;
		forename?: string;
		groupRoles?: Array<GroupRole>;
		hideSecretWordNotification?: boolean;
		id?: number;
		identifiers?: Array<string>;
		lastLogin?: Date;
		lastLoginIpAddress?: string;
		latestDataReceivedBy?: BaseGroup;
		latestDataReceivedDate?: Date;
		locked?: boolean;
		picture?: string;
		roleDescription?: string;
		secretWordIsSet?: boolean;
		surname?: string;
		userFeatures?: Array<UserFeature>;
		username?: string;
	}

	export interface UserFeature {
		created?: Date;
		feature?: Feature;
		id?: number;
		lastUpdate?: Date;
		optInDate?: Date;
		optInHidden?: boolean;
		optInStatus?: boolean;
		optOutHidden?: boolean;
	}

	export interface UserToken {
		auditActions?: Array<string>;
		checkSecretWord?: boolean;
		created?: Date;
		expiration?: Date;
		externalStandards?: Array<ExternalStandard>;
		groupFeatures?: Array<Feature>;
		groupMessagingEnabled?: boolean;
		mustSetSecretWord?: boolean;
		patientFeatures?: Array<Feature>;
		patientMessagingFeatureTypes?: Array<string>;
		patientRoles?: Array<Role>;
		routes?: Array<Route>;
		secretWord?: string;
		secretWordChoices?: string;
		secretWordIndexes?: Array<string>;
		secretWordSalt?: string;
		secretWordToken?: string;
		securityRoles?: Array<Role>;
		shouldEnterCondition?: boolean;
		staffFeatures?: Array<Feature>;
		staffRoles?: Array<Role>;
		token?: string;
		user?: User;
		userFeatures?: Array<Feature>;
		userGroups?: Array<BaseGroup>;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Log In
		 * Authenticate using username and password, returns token, which must be added to X-Auth-Token in header of all future requests
		 * Post auth/login
		 * @param {Credentials} requestBody credentials
		 * @return {void} Description was not specified
		 */
		LogIn(requestBody: Credentials): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'auth/login', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Log Out
		 * Log Out
		 * Delete auth/logout/{token}
		 * @param {string} token token
		 * @return {void} Description was not specified
		 */
		LogOut(token: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'auth/logout/' + (token == null ? '' : encodeURIComponent(token)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Basic User Information
		 * Once logged in and have a token, get basic user information including group role membership
		 * Get auth/{token}/basicuserinformation
		 * @param {string} token token
		 * @return {void} OK
		 */
		GetBasicUserInformation(token: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'auth/' + (token == null ? '' : encodeURIComponent(token)) + '/basicuserinformation', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Basic Patient Information
		 * Given a User ID, get basic patient information for a user from clinical data stored in FHIR
		 * Get patient/{userId}/basic
		 * @param {number} userId userId
		 * @return {void} OK
		 */
		GetBasicPatientDetails(userId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patient/' + userId + '/basic', { observe: 'response', responseType: 'text' });
		}

		/**
		 * getPatientManagementDiagnoses
		 * getPatientManagementDiagnoses
		 * Get patientmanagement/diagnoses
		 * @return {Array<Code>} OK
		 */
		GetPatientManagementDiagnoses(): Observable<Array<Code>> {
			return this.http.get<Array<Code>>(this.baseUri + 'patientmanagement/diagnoses', {});
		}

		/**
		 * getPatientManagementLookupTypes
		 * getPatientManagementLookupTypes
		 * Get patientmanagement/lookuptypes
		 * @return {Array<LookupType>} OK
		 */
		GetPatientManagementLookupTypes(): Observable<Array<LookupType>> {
			return this.http.get<Array<LookupType>>(this.baseUri + 'patientmanagement/lookuptypes', {});
		}

		/**
		 * validatePatientManagement
		 * validatePatientManagement
		 * Post patientmanagement/validate
		 * @param {PatientManagement} requestBody patientManagement
		 * @return {void} Description was not specified
		 */
		ValidatePatientManagement(requestBody: PatientManagement): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'patientmanagement/validate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * getPatientManagement
		 * getPatientManagement
		 * Get patientmanagement/{userId}/group/{groupId}/identifier/{identifierId}
		 * @param {number} userId userId
		 * @param {number} groupId groupId
		 * @param {number} identifierId identifierId
		 * @return {PatientManagement} OK
		 */
		GetPatientManagement(userId: number, groupId: number, identifierId: number): Observable<PatientManagement> {
			return this.http.get<PatientManagement>(this.baseUri + 'patientmanagement/' + userId + '/group/' + groupId + '/identifier/' + identifierId, {});
		}

		/**
		 * savePatientManagement
		 * savePatientManagement
		 * Post patientmanagement/{userId}/group/{groupId}/identifier/{identifierId}
		 * @param {number} userId userId
		 * @param {number} groupId groupId
		 * @param {number} identifierId identifierId
		 * @param {PatientManagement} requestBody patientManagement
		 * @return {void} Description was not specified
		 */
		SavePatientManagement(userId: number, groupId: number, identifierId: number, requestBody: PatientManagement): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'patientmanagement/' + userId + '/group/' + groupId + '/identifier/' + identifierId, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * savePatientManagementSurgeries
		 * savePatientManagementSurgeries
		 * Post patientmanagement/{userId}/group/{groupId}/identifier/{identifierId}/surgeries
		 * @param {number} userId userId
		 * @param {number} groupId groupId
		 * @param {number} identifierId identifierId
		 * @param {PatientManagement} requestBody patientManagement
		 * @return {void} Description was not specified
		 */
		SavePatientManagementSurgeries(userId: number, groupId: number, identifierId: number, requestBody: PatientManagement): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'patientmanagement/' + userId + '/group/' + groupId + '/identifier/' + identifierId + '/surgeries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Available Observations Types For a User
		 * Given a User ID retrieve a list of available observation types for that user (where they have observation data).
		 * Get user/{userId}/availableobservationheadings
		 * @param {number} userId userId
		 * @return {Array<ObservationHeading>} OK
		 */
		GetAvailableObservationHeadings(userId: number): Observable<Array<ObservationHeading>> {
			return this.http.get<Array<ObservationHeading>>(this.baseUri + 'user/' + userId + '/availableobservationheadings', {});
		}

		/**
		 * Get Observations of Multiple Types For a User
		 * Given a User ID and search parameters, retrieve a page of observations.
		 * Get user/{userId}/observations
		 * @param {number} userId userId
		 * @param {Array<string>} code code
		 * @param {number} limit limit
		 * @param {number} offset offset
		 * @param {string} orderDirection orderDirection
		 * @return {void} OK
		 */
		GetObservationsByCodes(userId: number, code: Array<string>, limit: number, offset: number, orderDirection: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'user/' + userId + '/observations?' + code.map(z => `code=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&offset=' + offset + '&orderDirection=' + (orderDirection == null ? '' : encodeURIComponent(orderDirection)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Observations of a Certain Type For a User
		 * Given a User ID and observation code, retrieve all observations.
		 * Get user/{userId}/observations/{code}
		 * @param {number} userId userId
		 * @param {string} code code
		 * @return {void} OK
		 */
		GetObservationsByCode(userId: number, code: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'user/' + userId + '/observations/' + (code == null ? '' : encodeURIComponent(code)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get patient entered Observations of a Certain Type For a User
		 * Given a User ID and observation code, retrieve patient entered observations.
		 * Get user/{userId}/observations/{code}/patiententered
		 * @param {number} userId userId
		 * @param {string} code code
		 * @return {void} OK
		 */
		GetPatientEnteredObservationsByCode(userId: number, code: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'user/' + userId + '/observations/' + (code == null ? '' : encodeURIComponent(code)) + '/patiententered', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Available Patient Entered Observations Types For a User
		 * Given a User ID retrieve a list of available observation types for that user (where they have patient entered observation data).
		 * Get user/{userId}/patiententeredobservationheadings
		 * @param {number} userId userId
		 * @return {Array<ObservationHeading>} OK
		 */
		GetPatientEnteredObservationHeadings(userId: number): Observable<Array<ObservationHeading>> {
			return this.http.get<Array<ObservationHeading>>(this.baseUri + 'user/' + userId + '/patiententeredobservationheadings', {});
		}
	}

}

