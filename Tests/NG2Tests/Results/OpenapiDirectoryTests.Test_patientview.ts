import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface ApiKey {
		expired?: boolean | null;
		expiryDate?: Date | null;
		key?: string | null;
	}

	export interface BaseGroup {
		code?: string | null;
		groupType?: Lookup | null;
		id?: number | null;
		lastImportDate?: Date | null;
		name?: string | null;
		parentCodes?: Array<string> | null;
		shortName?: string | null;
		visible?: boolean | null;
		visibleToJoin?: boolean | null;
	}

	export interface Lookup {
		created?: Date | null;
		description?: string | null;
		descriptionFriendly?: string | null;
		displayOrder?: number | null;
		id?: number | null;
		lastUpdate?: Date | null;
		lookupType?: LookupType | null;
		value?: string | null;
	}

	export interface LookupType {
		created?: Date | null;
		description?: string | null;
		id?: number | null;
		lastUpdate?: Date | null;
		type?: LookupTypeType | null;
	}

	export enum LookupTypeType { GROUP = 0, MENU = 1, ROLE = 2, CODE_STANDARD = 3, CODE_TYPE = 4, FEATURE_TYPE = 5, RELATIONSHIP_TYPE = 6, IDENTIFIER = 7, CONTACT_POINT_TYPE = 8, STATISTIC_TYPE = 9, NEWS_TYPE = 10, GENDER = 11, IBD_CROHNSLOCATION = 12, IBD_CROHNSPROXIMALTERMINALILEUM = 13, IBD_CROHNSPERIANAL = 14, IBD_CROHNSBEHAVIOUR = 15, IBD_UCEXTENT = 16, IBD_EGIMCOMPLICATION = 17, IBD_SURGERYMAINPROCEDURE = 18, IBD_SMOKINGSTATUS = 19, IBD_FAMILYHISTORY = 20, LINK_TYPE = 21 }

	export interface Category {
		friendlyDescription?: string | null;
		hidden?: boolean | null;
		icd10Description?: string | null;
		id?: number | null;
		number?: number | null;
	}

	export interface Code {
		code?: string | null;
		codeCategories?: Array<CodeCategory> | null;
		codeType?: Lookup | null;
		created?: Date | null;
		description?: string | null;
		displayOrder?: number | null;
		externalStandards?: Array<CodeExternalStandard> | null;
		fullDescription?: string | null;
		hideFromPatients?: boolean | null;
		id?: number | null;
		lastUpdate?: Date | null;
		links?: Array<Link> | null;
		patientFriendlyName?: string | null;
		removedExternally?: boolean | null;
		sourceType?: CodeSourceType | null;
		standardType?: Lookup | null;
	}

	export interface CodeCategory {
		category?: Category | null;
		id?: number | null;
	}

	export interface CodeExternalStandard {
		codeString?: string | null;
		externalStandard?: ExternalStandard | null;
		id?: number | null;
	}

	export interface ExternalStandard {
		description?: string | null;
		id?: number | null;
		name?: string | null;
	}

	export interface Link {
		created?: Date | null;
		displayOrder?: number | null;
		id?: number | null;
		lastUpdate?: Date | null;
		link?: string | null;
		linkType?: Lookup | null;
		name?: string | null;
	}

	export enum CodeSourceType { PATIENTVIEW = 0, NHS_CHOICES = 1 }

	export interface ContactPoint {
		contactPointType?: ContactPointType | null;
		content?: string | null;
		created?: Date | null;
		id?: number | null;
		lastUpdate?: Date | null;
	}

	export interface ContactPointType {
		description?: string | null;
		id?: number | null;
		lookupType?: LookupType | null;
		value?: ContactPointTypeValue | null;
	}

	export enum ContactPointTypeValue { UNIT_WEB_ADDRESS = 0, TRUST_WEB_ADDRESS = 1, PV_ADMIN_NAME = 2, PV_ADMIN_PHONE = 3, PV_ADMIN_EMAIL = 4, UNIT_ENQUIRIES_PHONE = 5, UNIT_ENQUIRIES_EMAIL = 6, APPOINTMENT_PHONE = 7, APPOINTMENT_EMAIL = 8, OUT_OF_HOURS_INFO = 9 }

	export interface Credentials {
		apiKey?: string | null;
		password?: string | null;
		username?: string | null;
	}

	export interface Entry_long_Map_string_List_FhirObservation_ {
		key?: Array<Entry_string_List_FhirObservation_> | null;
	}

	export interface Entry_string_List_FhirObservation_ {
		key?: Array<FhirObservation> | null;
	}

	export interface FhirObservation {
		applies?: Date | null;
		bodySite?: string | null;
		comments?: string | null;
		comparator?: string | null;
		diagram?: string | null;
		group?: Group | null;
		id?: number | null;
		identifier?: string | null;
		location?: string | null;
		name?: string | null;
		temporaryUuid?: string | null;
		units?: string | null;
		value?: string | null;
	}

	export interface Group {
		address1?: string | null;
		address2?: string | null;
		address3?: string | null;
		childGroups?: Array<Group> | null;
		code?: string | null;
		contactPoints?: Array<ContactPoint> | null;
		created?: Date | null;
		fhirResourceId?: string | null;
		groupFeatures?: Array<GroupFeature> | null;
		groupType?: Lookup | null;
		id?: number | null;
		lastImportDate?: Date | null;
		lastUpdate?: Date | null;
		links?: Array<Link> | null;
		locations?: Array<Location> | null;
		name?: string | null;
		parentGroups?: Array<Group> | null;
		postcode?: string | null;
		sftpUser?: string | null;
		shortName?: string | null;
		visible?: boolean | null;
		visibleToJoin?: boolean | null;
	}

	export interface GroupFeature {
		created?: Date | null;
		feature?: Feature | null;
		id?: number | null;
		lastUpdate?: Date | null;
	}

	export interface Feature {
		created?: Date | null;
		description?: string | null;
		id?: number | null;
		lastUpdate?: Date | null;
		name?: string | null;
	}

	export interface Location {
		address?: string | null;
		created?: Date | null;
		email?: string | null;
		id?: number | null;
		label?: string | null;
		lastUpdate?: Date | null;
		name?: string | null;
		phone?: string | null;
		web?: string | null;
	}

	export interface FhirAllergy {
		confidenceLevel?: string | null;
		group?: Group | null;
		id?: number | null;
		identifier?: string | null;
		infoSource?: string | null;
		reaction?: string | null;
		recordedDate?: Date | null;
		status?: string | null;
		substance?: string | null;
		type?: string | null;
	}

	export interface FhirCondition {
		asserter?: string | null;
		category?: string | null;
		code?: string | null;
		date?: Date | null;
		description?: string | null;
		fullDescription?: string | null;
		group?: Group | null;
		id?: number | null;
		identifier?: string | null;
		links?: Array<Link> | null;
		notes?: string | null;
		severity?: string | null;
		status?: string | null;
	}

	export interface FhirContact {
		id?: number | null;
		system?: string | null;
		use?: string | null;
		value?: string | null;
	}

	export interface FhirEncounter {
		date?: Date | null;
		encounterType?: string | null;
		group?: Group | null;
		id?: number | null;
		identifier?: string | null;
		links?: Array<Link> | null;
		observations?: Array<FhirObservation> | null;
		procedures?: Array<FhirProcedure> | null;
		status?: string | null;
	}

	export interface FhirProcedure {
		bodySite?: string | null;
		id?: number | null;
		type?: string | null;
	}

	export interface FhirIdentifier {
		id?: number | null;
		label?: string | null;
		value?: string | null;
	}

	export interface FhirObservationPage {
		data?: Array<Entry_long_Map_string_List_FhirObservation_> | null;
		totalElements?: number | null;
		totalPages?: number | null;
	}

	export interface FhirPatient {
		address1?: string | null;
		address2?: string | null;
		address3?: string | null;
		address4?: string | null;
		contacts?: Array<FhirContact> | null;
		dateOfBirth?: Date | null;
		dateOfBirthNoTime?: string | null;
		forename?: string | null;
		gender?: string | null;
		group?: Group | null;
		groupCode?: string | null;
		identifier?: string | null;
		identifiers?: Array<FhirIdentifier> | null;
		postcode?: string | null;
		practitioners?: Array<FhirPractitioner> | null;
		surname?: string | null;
	}

	export interface FhirPractitioner {
		address1?: string | null;
		address2?: string | null;
		address3?: string | null;
		address4?: string | null;
		allowInviteGp?: boolean | null;
		contacts?: Array<FhirContact> | null;
		gender?: string | null;
		groupCode?: string | null;
		identifier?: string | null;
		inviteDate?: Date | null;
		name?: string | null;
		postcode?: string | null;
		role?: string | null;
	}

	export interface GroupRole {
		group?: Group | null;
		id?: number | null;
		role?: Role | null;
	}

	export interface Role {
		description?: string | null;
		id?: number | null;
		name?: RoleName | null;
		visible?: boolean | null;
	}

	export enum RoleName { PATIENT = 0, UNIT_ADMIN = 1, STAFF_ADMIN = 2, DISEASE_GROUP_ADMIN = 3, SPECIALTY_ADMIN = 4, GLOBAL_ADMIN = 5, GP_ADMIN = 6, MEMBER = 7, PUBLIC = 8, UNIT_ADMIN_API = 9, IMPORTER = 10 }

	export interface ObservationHeading {
		code?: string | null;
		created?: Date | null;
		decimalPlaces?: number | null;
		defaultPanel?: number | null;
		defaultPanelOrder?: number | null;
		heading?: string | null;
		id?: number | null;
		infoLink?: string | null;
		lastUpdate?: Date | null;
		maxGraph?: number | null;
		minGraph?: number | null;
		name?: string | null;
		normalRange?: string | null;
		observationHeadingGroups?: Array<ObservationHeadingGroup> | null;
		units?: string | null;
	}

	export interface ObservationHeadingGroup {
		created?: Date | null;
		group?: Group | null;
		id?: number | null;
		panel?: number | null;
		panelOrder?: number | null;
	}

	export interface Patient {
		diagnosisCodes?: Array<Code> | null;
		fhirAllergies?: Array<FhirAllergy> | null;
		fhirConditions?: Array<FhirCondition> | null;
		fhirEncounters?: Array<FhirEncounter> | null;
		fhirObservations?: Array<FhirObservation> | null;
		fhirPatient?: FhirPatient | null;
		fhirPractitioners?: Array<FhirPractitioner> | null;
		group?: Group | null;
		id?: number | null;
	}

	export interface PatientManagement {
		condition?: FhirCondition | null;
		encounters?: Array<FhirEncounter> | null;
		groupCode?: string | null;
		identifier?: string | null;
		observations?: Array<FhirObservation> | null;
		patient?: FhirPatient | null;
		practitioners?: Array<FhirPractitioner> | null;
	}

	export interface Route {
		controller?: string | null;
		created?: Date | null;
		displayOrder?: number | null;
		id?: number | null;
		lookup?: Lookup | null;
		templateUrl?: string | null;
		title?: string | null;
		url?: string | null;
	}

	export interface UUID {
	}

	export interface User {
		apiKey?: ApiKey | null;
		canSwitchUser?: boolean | null;
		changePassword?: boolean | null;
		contactNumber?: string | null;
		created?: Date | null;
		currentLogin?: Date | null;
		currentLoginIpAddress?: string | null;
		dateOfBirth?: Date | null;
		deleted?: boolean | null;
		dummy?: boolean | null;
		email?: string | null;
		emailVerified?: boolean | null;
		forename?: string | null;
		groupRoles?: Array<GroupRole> | null;
		hideSecretWordNotification?: boolean | null;
		id?: number | null;
		identifiers?: Array<string> | null;
		lastLogin?: Date | null;
		lastLoginIpAddress?: string | null;
		latestDataReceivedBy?: BaseGroup | null;
		latestDataReceivedDate?: Date | null;
		locked?: boolean | null;
		picture?: string | null;
		roleDescription?: string | null;
		secretWordIsSet?: boolean | null;
		surname?: string | null;
		userFeatures?: Array<UserFeature> | null;
		username?: string | null;
	}

	export interface UserFeature {
		created?: Date | null;
		feature?: Feature | null;
		id?: number | null;
		lastUpdate?: Date | null;
		optInDate?: Date | null;
		optInHidden?: boolean | null;
		optInStatus?: boolean | null;
		optOutHidden?: boolean | null;
	}

	export interface UserToken {
		auditActions?: Array<string> | null;
		checkSecretWord?: boolean | null;
		created?: Date | null;
		expiration?: Date | null;
		externalStandards?: Array<ExternalStandard> | null;
		groupFeatures?: Array<Feature> | null;
		groupMessagingEnabled?: boolean | null;
		mustSetSecretWord?: boolean | null;
		patientFeatures?: Array<Feature> | null;
		patientMessagingFeatureTypes?: Array<string> | null;
		patientRoles?: Array<Role> | null;
		routes?: Array<Route> | null;
		secretWord?: string | null;
		secretWordChoices?: string | null;
		secretWordIndexes?: Array<string> | null;
		secretWordSalt?: string | null;
		secretWordToken?: string | null;
		securityRoles?: Array<Role> | null;
		shouldEnterCondition?: boolean | null;
		staffFeatures?: Array<Feature> | null;
		staffRoles?: Array<Role> | null;
		token?: string | null;
		user?: User | null;
		userFeatures?: Array<Feature> | null;
		userGroups?: Array<BaseGroup> | null;
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

