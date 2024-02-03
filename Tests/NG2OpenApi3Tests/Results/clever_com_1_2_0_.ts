import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BadRequest {
		message?: string | null;
	}
	export interface BadRequestFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateBadRequestFormGroup() {
		return new FormGroup<BadRequestFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Credentials {
		district_username?: string | null;
	}
	export interface CredentialsFormProperties {
		district_username: FormControl<string | null | undefined>,
	}
	export function CreateCredentialsFormGroup() {
		return new FormGroup<CredentialsFormProperties>({
			district_username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface District {
		id?: string | null;
		mdr_number?: string | null;
		name?: string | null;
	}
	export interface DistrictFormProperties {
		id: FormControl<string | null | undefined>,
		mdr_number: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateDistrictFormGroup() {
		return new FormGroup<DistrictFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			mdr_number: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DistrictAdmin {
		district?: string | null;
		email?: string | null;
		id?: string | null;
		name?: Name;
		title?: string | null;
	}
	export interface DistrictAdminFormProperties {
		district: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateDistrictAdminFormGroup() {
		return new FormGroup<DistrictAdminFormProperties>({
			district: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Name {
		first?: string | null;
		last?: string | null;
		middle?: string | null;
	}
	export interface NameFormProperties {
		first: FormControl<string | null | undefined>,
		last: FormControl<string | null | undefined>,
		middle: FormControl<string | null | undefined>,
	}
	export function CreateNameFormGroup() {
		return new FormGroup<NameFormProperties>({
			first: new FormControl<string | null | undefined>(undefined),
			last: new FormControl<string | null | undefined>(undefined),
			middle: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DistrictAdminResponse {
		data?: DistrictAdmin;
	}
	export interface DistrictAdminResponseFormProperties {
	}
	export function CreateDistrictAdminResponseFormGroup() {
		return new FormGroup<DistrictAdminResponseFormProperties>({
		});

	}

	export interface DistrictAdminsResponse {
		data?: Array<DistrictAdmin>;
	}
	export interface DistrictAdminsResponseFormProperties {
	}
	export function CreateDistrictAdminsResponseFormGroup() {
		return new FormGroup<DistrictAdminsResponseFormProperties>({
		});

	}

	export interface DistrictResponse {
		data?: District;
	}
	export interface DistrictResponseFormProperties {
	}
	export function CreateDistrictResponseFormGroup() {
		return new FormGroup<DistrictResponseFormProperties>({
		});

	}

	export interface DistrictStatus {
		error?: string | null;
		id?: string | null;
		instant_login?: boolean | null;
		last_sync?: string | null;
		launch_date?: string | null;
		pause_end?: string | null;
		pause_start?: string | null;
		sis_type?: string | null;
		state?: DistrictStatusState | null;
	}
	export interface DistrictStatusFormProperties {
		error: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		instant_login: FormControl<boolean | null | undefined>,
		last_sync: FormControl<string | null | undefined>,
		launch_date: FormControl<string | null | undefined>,
		pause_end: FormControl<string | null | undefined>,
		pause_start: FormControl<string | null | undefined>,
		sis_type: FormControl<string | null | undefined>,
		state: FormControl<DistrictStatusState | null | undefined>,
	}
	export function CreateDistrictStatusFormGroup() {
		return new FormGroup<DistrictStatusFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			instant_login: new FormControl<boolean | null | undefined>(undefined),
			last_sync: new FormControl<string | null | undefined>(undefined),
			launch_date: new FormControl<string | null | undefined>(undefined),
			pause_end: new FormControl<string | null | undefined>(undefined),
			pause_start: new FormControl<string | null | undefined>(undefined),
			sis_type: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<DistrictStatusState | null | undefined>(undefined),
		});

	}

	export enum DistrictStatusState { running = 'running', pending = 'pending', error = 'error', paused = 'paused' }

	export interface DistrictStatusResponse {
		data?: DistrictStatus;
	}
	export interface DistrictStatusResponseFormProperties {
	}
	export function CreateDistrictStatusResponseFormGroup() {
		return new FormGroup<DistrictStatusResponseFormProperties>({
		});

	}

	export interface DistrictStatusResponses {
		data?: Array<DistrictStatusResponse>;
	}
	export interface DistrictStatusResponsesFormProperties {
	}
	export function CreateDistrictStatusResponsesFormGroup() {
		return new FormGroup<DistrictStatusResponsesFormProperties>({
		});

	}

	export interface DistrictsResponse {
		data?: Array<DistrictResponse>;
	}
	export interface DistrictsResponseFormProperties {
	}
	export function CreateDistrictsResponseFormGroup() {
		return new FormGroup<DistrictsResponseFormProperties>({
		});

	}

	export interface GradeLevelsResponse {
		data?: Array<string>;
	}
	export interface GradeLevelsResponseFormProperties {
	}
	export function CreateGradeLevelsResponseFormGroup() {
		return new FormGroup<GradeLevelsResponseFormProperties>({
		});

	}

	export interface InternalError {
		message?: string | null;
	}
	export interface InternalErrorFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateInternalErrorFormGroup() {
		return new FormGroup<InternalErrorFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Location {
		address?: string | null;
		city?: string | null;
		lat?: string | null;
		lon?: string | null;
		state?: string | null;
		zip?: string | null;
	}
	export interface LocationFormProperties {
		address: FormControl<string | null | undefined>,
		city: FormControl<string | null | undefined>,
		lat: FormControl<string | null | undefined>,
		lon: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
		zip: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			lat: new FormControl<string | null | undefined>(undefined),
			lon: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			zip: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NotFound {
		message?: string | null;
	}
	export interface NotFoundFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateNotFoundFormGroup() {
		return new FormGroup<NotFoundFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Principal {
		email?: string | null;
		name?: string | null;
	}
	export interface PrincipalFormProperties {
		email: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreatePrincipalFormGroup() {
		return new FormGroup<PrincipalFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface School {
		created?: string | null;
		district?: string | null;
		high_grade?: SchoolHigh_grade | null;
		id?: string | null;
		last_modified?: string | null;
		location?: Location;
		low_grade?: SchoolHigh_grade | null;
		mdr_number?: string | null;
		name?: string | null;
		nces_id?: string | null;
		phone?: string | null;
		principal?: Principal;
		school_number?: string | null;
		sis_id?: string | null;
		state_id?: string | null;
	}
	export interface SchoolFormProperties {
		created: FormControl<string | null | undefined>,
		district: FormControl<string | null | undefined>,
		high_grade: FormControl<SchoolHigh_grade | null | undefined>,
		id: FormControl<string | null | undefined>,
		last_modified: FormControl<string | null | undefined>,
		low_grade: FormControl<SchoolHigh_grade | null | undefined>,
		mdr_number: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		nces_id: FormControl<string | null | undefined>,
		phone: FormControl<string | null | undefined>,
		school_number: FormControl<string | null | undefined>,
		sis_id: FormControl<string | null | undefined>,
		state_id: FormControl<string | null | undefined>,
	}
	export function CreateSchoolFormGroup() {
		return new FormGroup<SchoolFormProperties>({
			created: new FormControl<string | null | undefined>(undefined),
			district: new FormControl<string | null | undefined>(undefined),
			high_grade: new FormControl<SchoolHigh_grade | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			last_modified: new FormControl<string | null | undefined>(undefined),
			low_grade: new FormControl<SchoolHigh_grade | null | undefined>(undefined),
			mdr_number: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nces_id: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			school_number: new FormControl<string | null | undefined>(undefined),
			sis_id: new FormControl<string | null | undefined>(undefined),
			state_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SchoolHigh_grade { _1 = '1', _2 = '2', _3 = '3', _4 = '4', _5 = '5', _6 = '6', _7 = '7', _8 = '8', _9 = '9', _10 = '10', _11 = '11', _12 = '12', PreKindergarten = 'PreKindergarten', Kindergarten = 'Kindergarten', PostGraduate = 'PostGraduate', Other = 'Other' }

	export interface SchoolAdmin {
		credentials?: Credentials;
		district?: string | null;
		email?: string | null;
		id?: string | null;
		name?: Name;
		schools?: Array<string>;
		staff_id?: string | null;
		title?: string | null;
	}
	export interface SchoolAdminFormProperties {
		district: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		staff_id: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateSchoolAdminFormGroup() {
		return new FormGroup<SchoolAdminFormProperties>({
			district: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			staff_id: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SchoolAdminResponse {
		data?: SchoolAdmin;
	}
	export interface SchoolAdminResponseFormProperties {
	}
	export function CreateSchoolAdminResponseFormGroup() {
		return new FormGroup<SchoolAdminResponseFormProperties>({
		});

	}

	export interface SchoolAdminsResponse {
		data?: Array<SchoolAdminResponse>;
	}
	export interface SchoolAdminsResponseFormProperties {
	}
	export function CreateSchoolAdminsResponseFormGroup() {
		return new FormGroup<SchoolAdminsResponseFormProperties>({
		});

	}

	export interface SchoolResponse {
		data?: School;
	}
	export interface SchoolResponseFormProperties {
	}
	export function CreateSchoolResponseFormGroup() {
		return new FormGroup<SchoolResponseFormProperties>({
		});

	}

	export interface SchoolsResponse {
		data?: Array<SchoolResponse>;
	}
	export interface SchoolsResponseFormProperties {
	}
	export function CreateSchoolsResponseFormGroup() {
		return new FormGroup<SchoolsResponseFormProperties>({
		});

	}

	export interface Section {
		course_description?: string | null;
		course_name?: string | null;
		course_number?: string | null;
		created?: string | null;
		district?: string | null;
		grade?: SchoolHigh_grade | null;
		id?: string | null;
		last_modified?: string | null;
		name?: string | null;
		period?: string | null;
		school?: string | null;
		section_number?: string | null;
		sis_id?: string | null;
		students?: Array<string>;
		subject?: SectionSubject | null;
		teacher?: string | null;
		teachers?: Array<string>;
		term?: Term;
	}
	export interface SectionFormProperties {
		course_description: FormControl<string | null | undefined>,
		course_name: FormControl<string | null | undefined>,
		course_number: FormControl<string | null | undefined>,
		created: FormControl<string | null | undefined>,
		district: FormControl<string | null | undefined>,
		grade: FormControl<SchoolHigh_grade | null | undefined>,
		id: FormControl<string | null | undefined>,
		last_modified: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		period: FormControl<string | null | undefined>,
		school: FormControl<string | null | undefined>,
		section_number: FormControl<string | null | undefined>,
		sis_id: FormControl<string | null | undefined>,
		subject: FormControl<SectionSubject | null | undefined>,
		teacher: FormControl<string | null | undefined>,
	}
	export function CreateSectionFormGroup() {
		return new FormGroup<SectionFormProperties>({
			course_description: new FormControl<string | null | undefined>(undefined),
			course_name: new FormControl<string | null | undefined>(undefined),
			course_number: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<string | null | undefined>(undefined),
			district: new FormControl<string | null | undefined>(undefined),
			grade: new FormControl<SchoolHigh_grade | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			last_modified: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			period: new FormControl<string | null | undefined>(undefined),
			school: new FormControl<string | null | undefined>(undefined),
			section_number: new FormControl<string | null | undefined>(undefined),
			sis_id: new FormControl<string | null | undefined>(undefined),
			subject: new FormControl<SectionSubject | null | undefined>(undefined),
			teacher: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SectionSubject { 'english/language arts' = 'english/language arts', math = 'math', science = 'science', 'social studies' = 'social studies', language = 'language', 'homeroom/advisory' = 'homeroom/advisory', 'interventions/online learning' = 'interventions/online learning', 'technology and engineering' = 'technology and engineering', 'PE and health' = 'PE and health', 'arts and music' = 'arts and music', other = 'other' }

	export interface Term {
		end_date?: string | null;
		name?: string | null;
		start_date?: string | null;
	}
	export interface TermFormProperties {
		end_date: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		start_date: FormControl<string | null | undefined>,
	}
	export function CreateTermFormGroup() {
		return new FormGroup<TermFormProperties>({
			end_date: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			start_date: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SectionResponse {
		data?: Section;
	}
	export interface SectionResponseFormProperties {
	}
	export function CreateSectionResponseFormGroup() {
		return new FormGroup<SectionResponseFormProperties>({
		});

	}

	export interface SectionsResponse {
		data?: Array<SectionResponse>;
	}
	export interface SectionsResponseFormProperties {
	}
	export function CreateSectionsResponseFormGroup() {
		return new FormGroup<SectionsResponseFormProperties>({
		});

	}

	export interface Student {
		created?: string | null;
		credentials?: Credentials;
		district?: string | null;
		dob?: string | null;
		ell_status?: StudentEll_status | null;
		email?: string | null;
		gender?: StudentGender | null;
		grade?: SchoolHigh_grade | null;
		graduation_year?: string | null;
		hispanic_ethnicity?: StudentEll_status | null;
		id?: string | null;
		last_modified?: string | null;
		location?: Location;
		name?: Name;
		race?: StudentRace | null;
		school?: string | null;
		schools?: Array<string>;
		sis_id?: string | null;
		state_id?: string | null;
		student_number?: string | null;
	}
	export interface StudentFormProperties {
		created: FormControl<string | null | undefined>,
		district: FormControl<string | null | undefined>,
		dob: FormControl<string | null | undefined>,
		ell_status: FormControl<StudentEll_status | null | undefined>,
		email: FormControl<string | null | undefined>,
		gender: FormControl<StudentGender | null | undefined>,
		grade: FormControl<SchoolHigh_grade | null | undefined>,
		graduation_year: FormControl<string | null | undefined>,
		hispanic_ethnicity: FormControl<StudentEll_status | null | undefined>,
		id: FormControl<string | null | undefined>,
		last_modified: FormControl<string | null | undefined>,
		race: FormControl<StudentRace | null | undefined>,
		school: FormControl<string | null | undefined>,
		sis_id: FormControl<string | null | undefined>,
		state_id: FormControl<string | null | undefined>,
		student_number: FormControl<string | null | undefined>,
	}
	export function CreateStudentFormGroup() {
		return new FormGroup<StudentFormProperties>({
			created: new FormControl<string | null | undefined>(undefined),
			district: new FormControl<string | null | undefined>(undefined),
			dob: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(?:[0-9]{1,2})/([0-9]{1,2})/([0-9]{4})')]),
			ell_status: new FormControl<StudentEll_status | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<StudentGender | null | undefined>(undefined),
			grade: new FormControl<SchoolHigh_grade | null | undefined>(undefined),
			graduation_year: new FormControl<string | null | undefined>(undefined),
			hispanic_ethnicity: new FormControl<StudentEll_status | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			last_modified: new FormControl<string | null | undefined>(undefined),
			race: new FormControl<StudentRace | null | undefined>(undefined),
			school: new FormControl<string | null | undefined>(undefined),
			sis_id: new FormControl<string | null | undefined>(undefined),
			state_id: new FormControl<string | null | undefined>(undefined),
			student_number: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StudentEll_status { Y = 'Y', N = 'N', '' = '' }

	export enum StudentGender { M = 'M', F = 'F', '' = '' }

	export enum StudentRace { Caucasian = 'Caucasian', Asian = 'Asian', 'Black or African American' = 'Black or African American', 'American Indian' = 'American Indian', 'Hawaiian or Other Pacific Islander' = 'Hawaiian or Other Pacific Islander', 'Two or More Races' = 'Two or More Races', Unknown = 'Unknown', '' = '' }

	export interface StudentContact {
		district?: string | null;
		email?: string | null;
		id?: string | null;
		name?: string | null;
		phone?: string | null;
		phone_type?: string | null;
		relationship?: string | null;
		sis_id?: string | null;
		student?: string | null;
		type?: string | null;
	}
	export interface StudentContactFormProperties {
		district: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		phone: FormControl<string | null | undefined>,
		phone_type: FormControl<string | null | undefined>,
		relationship: FormControl<string | null | undefined>,
		sis_id: FormControl<string | null | undefined>,
		student: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateStudentContactFormGroup() {
		return new FormGroup<StudentContactFormProperties>({
			district: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			phone_type: new FormControl<string | null | undefined>(undefined),
			relationship: new FormControl<string | null | undefined>(undefined),
			sis_id: new FormControl<string | null | undefined>(undefined),
			student: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StudentContactResponse {
		data?: StudentContact;
	}
	export interface StudentContactResponseFormProperties {
	}
	export function CreateStudentContactResponseFormGroup() {
		return new FormGroup<StudentContactResponseFormProperties>({
		});

	}

	export interface StudentContactsForStudentResponse {
		data?: Array<StudentContact>;
	}
	export interface StudentContactsForStudentResponseFormProperties {
	}
	export function CreateStudentContactsForStudentResponseFormGroup() {
		return new FormGroup<StudentContactsForStudentResponseFormProperties>({
		});

	}

	export interface StudentContactsResponse {
		data?: Array<StudentContactResponse>;
	}
	export interface StudentContactsResponseFormProperties {
	}
	export function CreateStudentContactsResponseFormGroup() {
		return new FormGroup<StudentContactsResponseFormProperties>({
		});

	}

	export interface StudentResponse {
		data?: Student;
	}
	export interface StudentResponseFormProperties {
	}
	export function CreateStudentResponseFormGroup() {
		return new FormGroup<StudentResponseFormProperties>({
		});

	}

	export interface StudentsResponse {
		data?: Array<StudentResponse>;
	}
	export interface StudentsResponseFormProperties {
	}
	export function CreateStudentsResponseFormGroup() {
		return new FormGroup<StudentsResponseFormProperties>({
		});

	}

	export interface Teacher {
		created?: string | null;
		credentials?: Credentials;
		district?: string | null;
		email?: string | null;
		id?: string | null;
		last_modified?: string | null;
		name?: Name;
		school?: string | null;
		schools?: Array<string>;
		sis_id?: string | null;
		state_id?: string | null;
		teacher_number?: string | null;
		title?: string | null;
	}
	export interface TeacherFormProperties {
		created: FormControl<string | null | undefined>,
		district: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		last_modified: FormControl<string | null | undefined>,
		school: FormControl<string | null | undefined>,
		sis_id: FormControl<string | null | undefined>,
		state_id: FormControl<string | null | undefined>,
		teacher_number: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateTeacherFormGroup() {
		return new FormGroup<TeacherFormProperties>({
			created: new FormControl<string | null | undefined>(undefined),
			district: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			last_modified: new FormControl<string | null | undefined>(undefined),
			school: new FormControl<string | null | undefined>(undefined),
			sis_id: new FormControl<string | null | undefined>(undefined),
			state_id: new FormControl<string | null | undefined>(undefined),
			teacher_number: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TeacherResponse {
		data?: Teacher;
	}
	export interface TeacherResponseFormProperties {
	}
	export function CreateTeacherResponseFormGroup() {
		return new FormGroup<TeacherResponseFormProperties>({
		});

	}

	export interface TeachersResponse {
		data?: Array<TeacherResponse>;
	}
	export interface TeachersResponseFormProperties {
	}
	export function CreateTeachersResponseFormGroup() {
		return new FormGroup<TeachersResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of student contacts
		 * Get contacts
		 * @return {StudentContactsResponse} OK Response
		 */
		GetContacts(limit: number | null | undefined, starting_after: string | null | undefined, ending_before: string | null | undefined): Observable<StudentContactsResponse> {
			return this.http.get<StudentContactsResponse>(this.baseUri + 'contacts?limit=' + limit + '&starting_after=' + (starting_after == null ? '' : encodeURIComponent(starting_after)) + '&ending_before=' + (ending_before == null ? '' : encodeURIComponent(ending_before)), {});
		}

		/**
		 * Returns a specific student contact
		 * Get contacts/{id}
		 * @return {StudentContactResponse} OK Response
		 */
		GetContact(id: string): Observable<StudentContactResponse> {
			return this.http.get<StudentContactResponse>(this.baseUri + 'contacts/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Returns the district for a student contact
		 * Get contacts/{id}/district
		 * @return {DistrictResponse} OK Response
		 */
		GetDistrictForStudentContact(id: string): Observable<DistrictResponse> {
			return this.http.get<DistrictResponse>(this.baseUri + 'contacts/' + (id == null ? '' : encodeURIComponent(id)) + '/district', {});
		}

		/**
		 * Returns the student for a student contact
		 * Get contacts/{id}/student
		 * @return {StudentResponse} OK Response
		 */
		GetStudentForContact(id: string): Observable<StudentResponse> {
			return this.http.get<StudentResponse>(this.baseUri + 'contacts/' + (id == null ? '' : encodeURIComponent(id)) + '/student', {});
		}

		/**
		 * Returns a list of district admins
		 * Get district_admins
		 * @return {DistrictAdminsResponse} OK Response
		 */
		GetDistrictAdmins(starting_after: string | null | undefined, ending_before: string | null | undefined, show_links: string | null | undefined): Observable<DistrictAdminsResponse> {
			return this.http.get<DistrictAdminsResponse>(this.baseUri + 'district_admins?starting_after=' + (starting_after == null ? '' : encodeURIComponent(starting_after)) + '&ending_before=' + (ending_before == null ? '' : encodeURIComponent(ending_before)) + '&show_links=' + (show_links == null ? '' : encodeURIComponent(show_links)), {});
		}

		/**
		 * Returns a specific district admin
		 * Get district_admins/{id}
		 * @return {DistrictAdminResponse} OK Response
		 */
		GetDistrictAdmin(id: string): Observable<DistrictAdminResponse> {
			return this.http.get<DistrictAdminResponse>(this.baseUri + 'district_admins/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Returns a list of districts. In practice this will only return the one district associated with the bearer token
		 * Get districts
		 * @return {DistrictsResponse} OK Response
		 */
		GetDistricts(): Observable<DistrictsResponse> {
			return this.http.get<DistrictsResponse>(this.baseUri + 'districts', {});
		}

		/**
		 * Returns a specific district
		 * Get districts/{id}
		 * @return {DistrictResponse} OK Response
		 */
		GetDistrict(id: string, include: string | null | undefined): Observable<DistrictResponse> {
			return this.http.get<DistrictResponse>(this.baseUri + 'districts/' + (id == null ? '' : encodeURIComponent(id)) + '&include=' + (include == null ? '' : encodeURIComponent(include)), {});
		}

		/**
		 * Returns the admins for a district
		 * Get districts/{id}/admins
		 * @return {DistrictAdminsResponse} OK Response
		 */
		GetAdminsForDistrict(id: string): Observable<DistrictAdminsResponse> {
			return this.http.get<DistrictAdminsResponse>(this.baseUri + 'districts/' + (id == null ? '' : encodeURIComponent(id)) + '/admins', {});
		}

		/**
		 * Returns the schools for a district
		 * Get districts/{id}/schools
		 * @return {SchoolsResponse} OK Response
		 */
		GetSchoolsForDistrict(id: string, limit: number | null | undefined, starting_after: string | null | undefined, ending_before: string | null | undefined, where: string | null | undefined): Observable<SchoolsResponse> {
			return this.http.get<SchoolsResponse>(this.baseUri + 'districts/' + (id == null ? '' : encodeURIComponent(id)) + '/schools&limit=' + limit + '&starting_after=' + (starting_after == null ? '' : encodeURIComponent(starting_after)) + '&ending_before=' + (ending_before == null ? '' : encodeURIComponent(ending_before)) + '&where=' + (where == null ? '' : encodeURIComponent(where)), {});
		}

		/**
		 * Returns the sections for a district
		 * Get districts/{id}/sections
		 * @return {SectionsResponse} OK Response
		 */
		GetSectionsForDistrict(id: string, limit: number | null | undefined, starting_after: string | null | undefined, ending_before: string | null | undefined, where: string | null | undefined): Observable<SectionsResponse> {
			return this.http.get<SectionsResponse>(this.baseUri + 'districts/' + (id == null ? '' : encodeURIComponent(id)) + '/sections&limit=' + limit + '&starting_after=' + (starting_after == null ? '' : encodeURIComponent(starting_after)) + '&ending_before=' + (ending_before == null ? '' : encodeURIComponent(ending_before)) + '&where=' + (where == null ? '' : encodeURIComponent(where)), {});
		}

		/**
		 * Returns the status of the district
		 * Get districts/{id}/status
		 * @return {DistrictStatusResponses} OK Response
		 */
		GetDistrictStatus(id: string): Observable<DistrictStatusResponses> {
			return this.http.get<DistrictStatusResponses>(this.baseUri + 'districts/' + (id == null ? '' : encodeURIComponent(id)) + '/status', {});
		}

		/**
		 * Returns the students for a district
		 * Get districts/{id}/students
		 * @return {StudentsResponse} OK Response
		 */
		GetStudentsForDistrict(id: string, limit: number | null | undefined, starting_after: string | null | undefined, ending_before: string | null | undefined, where: string | null | undefined): Observable<StudentsResponse> {
			return this.http.get<StudentsResponse>(this.baseUri + 'districts/' + (id == null ? '' : encodeURIComponent(id)) + '/students&limit=' + limit + '&starting_after=' + (starting_after == null ? '' : encodeURIComponent(starting_after)) + '&ending_before=' + (ending_before == null ? '' : encodeURIComponent(ending_before)) + '&where=' + (where == null ? '' : encodeURIComponent(where)), {});
		}

		/**
		 * Returns the teachers for a district
		 * Get districts/{id}/teachers
		 * @return {TeachersResponse} OK Response
		 */
		GetTeachersForDistrict(id: string, limit: number | null | undefined, starting_after: string | null | undefined, ending_before: string | null | undefined, where: string | null | undefined): Observable<TeachersResponse> {
			return this.http.get<TeachersResponse>(this.baseUri + 'districts/' + (id == null ? '' : encodeURIComponent(id)) + '/teachers&limit=' + limit + '&starting_after=' + (starting_after == null ? '' : encodeURIComponent(starting_after)) + '&ending_before=' + (ending_before == null ? '' : encodeURIComponent(ending_before)) + '&where=' + (where == null ? '' : encodeURIComponent(where)), {});
		}

		/**
		 * Returns a list of school admins
		 * Get school_admins
		 * @return {SchoolAdminsResponse} OK Response
		 */
		GetSchoolAdmins(limit: number | null | undefined, starting_after: string | null | undefined, ending_before: string | null | undefined, where: string | null | undefined): Observable<SchoolAdminsResponse> {
			return this.http.get<SchoolAdminsResponse>(this.baseUri + 'school_admins?limit=' + limit + '&starting_after=' + (starting_after == null ? '' : encodeURIComponent(starting_after)) + '&ending_before=' + (ending_before == null ? '' : encodeURIComponent(ending_before)) + '&where=' + (where == null ? '' : encodeURIComponent(where)), {});
		}

		/**
		 * Returns a specific school admin
		 * Get school_admins/{id}
		 * @return {SchoolAdminResponse} OK Response
		 */
		GetSchoolAdmin(id: string, include: string | null | undefined): Observable<SchoolAdminResponse> {
			return this.http.get<SchoolAdminResponse>(this.baseUri + 'school_admins/' + (id == null ? '' : encodeURIComponent(id)) + '&include=' + (include == null ? '' : encodeURIComponent(include)), {});
		}

		/**
		 * Returns the schools for a school admin
		 * Get school_admins/{id}/schools
		 * @return {SchoolsResponse} OK Response
		 */
		GetSchoolsForSchoolAdmin(id: string, limit: number | null | undefined, starting_after: string | null | undefined, ending_before: string | null | undefined): Observable<SchoolsResponse> {
			return this.http.get<SchoolsResponse>(this.baseUri + 'school_admins/' + (id == null ? '' : encodeURIComponent(id)) + '/schools&limit=' + limit + '&starting_after=' + (starting_after == null ? '' : encodeURIComponent(starting_after)) + '&ending_before=' + (ending_before == null ? '' : encodeURIComponent(ending_before)), {});
		}

		/**
		 * Returns a list of schools
		 * Get schools
		 * @return {SchoolsResponse} OK Response
		 */
		GetSchools(limit: number | null | undefined, starting_after: string | null | undefined, ending_before: string | null | undefined, where: string | null | undefined): Observable<SchoolsResponse> {
			return this.http.get<SchoolsResponse>(this.baseUri + 'schools?limit=' + limit + '&starting_after=' + (starting_after == null ? '' : encodeURIComponent(starting_after)) + '&ending_before=' + (ending_before == null ? '' : encodeURIComponent(ending_before)) + '&where=' + (where == null ? '' : encodeURIComponent(where)), {});
		}

		/**
		 * Returns a specific school
		 * Get schools/{id}
		 * @return {SchoolResponse} OK Response
		 */
		GetSchool(id: string): Observable<SchoolResponse> {
			return this.http.get<SchoolResponse>(this.baseUri + 'schools/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Returns the district for a school
		 * Get schools/{id}/district
		 * @return {DistrictResponse} OK Response
		 */
		GetDistrictForSchool(id: string): Observable<DistrictResponse> {
			return this.http.get<DistrictResponse>(this.baseUri + 'schools/' + (id == null ? '' : encodeURIComponent(id)) + '/district', {});
		}

		/**
		 * Returns the sections for a school
		 * Get schools/{id}/sections
		 * @return {SectionsResponse} OK Response
		 */
		GetSectionsForSchool(id: string, limit: number | null | undefined, starting_after: string | null | undefined, ending_before: string | null | undefined, where: string | null | undefined): Observable<SectionsResponse> {
			return this.http.get<SectionsResponse>(this.baseUri + 'schools/' + (id == null ? '' : encodeURIComponent(id)) + '/sections&limit=' + limit + '&starting_after=' + (starting_after == null ? '' : encodeURIComponent(starting_after)) + '&ending_before=' + (ending_before == null ? '' : encodeURIComponent(ending_before)) + '&where=' + (where == null ? '' : encodeURIComponent(where)), {});
		}

		/**
		 * Returns the students for a school
		 * Get schools/{id}/students
		 * @return {StudentsResponse} OK Response
		 */
		GetStudentsForSchool(id: string, limit: number | null | undefined, starting_after: string | null | undefined, ending_before: string | null | undefined, where: string | null | undefined): Observable<StudentsResponse> {
			return this.http.get<StudentsResponse>(this.baseUri + 'schools/' + (id == null ? '' : encodeURIComponent(id)) + '/students&limit=' + limit + '&starting_after=' + (starting_after == null ? '' : encodeURIComponent(starting_after)) + '&ending_before=' + (ending_before == null ? '' : encodeURIComponent(ending_before)) + '&where=' + (where == null ? '' : encodeURIComponent(where)), {});
		}

		/**
		 * Returns the teachers for a school
		 * Get schools/{id}/teachers
		 * @return {TeachersResponse} OK Response
		 */
		GetTeachersForSchool(id: string, limit: number | null | undefined, starting_after: string | null | undefined, ending_before: string | null | undefined, where: string | null | undefined): Observable<TeachersResponse> {
			return this.http.get<TeachersResponse>(this.baseUri + 'schools/' + (id == null ? '' : encodeURIComponent(id)) + '/teachers&limit=' + limit + '&starting_after=' + (starting_after == null ? '' : encodeURIComponent(starting_after)) + '&ending_before=' + (ending_before == null ? '' : encodeURIComponent(ending_before)) + '&where=' + (where == null ? '' : encodeURIComponent(where)), {});
		}

		/**
		 * Returns a list of sections
		 * Get sections
		 * @return {SectionsResponse} OK Response
		 */
		GetSections(limit: number | null | undefined, starting_after: string | null | undefined, ending_before: string | null | undefined, where: string | null | undefined): Observable<SectionsResponse> {
			return this.http.get<SectionsResponse>(this.baseUri + 'sections?limit=' + limit + '&starting_after=' + (starting_after == null ? '' : encodeURIComponent(starting_after)) + '&ending_before=' + (ending_before == null ? '' : encodeURIComponent(ending_before)) + '&where=' + (where == null ? '' : encodeURIComponent(where)), {});
		}

		/**
		 * Returns a specific section
		 * Get sections/{id}
		 * @return {SectionResponse} OK Response
		 */
		GetSection(id: string): Observable<SectionResponse> {
			return this.http.get<SectionResponse>(this.baseUri + 'sections/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Returns the district for a section
		 * Get sections/{id}/district
		 * @return {DistrictResponse} OK Response
		 */
		GetDistrictForSection(id: string): Observable<DistrictResponse> {
			return this.http.get<DistrictResponse>(this.baseUri + 'sections/' + (id == null ? '' : encodeURIComponent(id)) + '/district', {});
		}

		/**
		 * Returns the school for a section
		 * Get sections/{id}/school
		 * @return {SchoolResponse} OK Response
		 */
		GetSchoolForSection(id: string): Observable<SchoolResponse> {
			return this.http.get<SchoolResponse>(this.baseUri + 'sections/' + (id == null ? '' : encodeURIComponent(id)) + '/school', {});
		}

		/**
		 * Returns the students for a section
		 * Get sections/{id}/students
		 * @return {StudentsResponse} OK Response
		 */
		GetStudentsForSection(id: string, limit: number | null | undefined, starting_after: string | null | undefined, ending_before: string | null | undefined): Observable<StudentsResponse> {
			return this.http.get<StudentsResponse>(this.baseUri + 'sections/' + (id == null ? '' : encodeURIComponent(id)) + '/students&limit=' + limit + '&starting_after=' + (starting_after == null ? '' : encodeURIComponent(starting_after)) + '&ending_before=' + (ending_before == null ? '' : encodeURIComponent(ending_before)), {});
		}

		/**
		 * Returns the primary teacher for a section
		 * Get sections/{id}/teacher
		 * @return {TeacherResponse} OK Response
		 */
		GetTeacherForSection(id: string): Observable<TeacherResponse> {
			return this.http.get<TeacherResponse>(this.baseUri + 'sections/' + (id == null ? '' : encodeURIComponent(id)) + '/teacher', {});
		}

		/**
		 * Returns the teachers for a section
		 * Get sections/{id}/teachers
		 * @return {TeachersResponse} OK Response
		 */
		GetTeachersForSection(id: string, limit: number | null | undefined, starting_after: string | null | undefined, ending_before: string | null | undefined): Observable<TeachersResponse> {
			return this.http.get<TeachersResponse>(this.baseUri + 'sections/' + (id == null ? '' : encodeURIComponent(id)) + '/teachers&limit=' + limit + '&starting_after=' + (starting_after == null ? '' : encodeURIComponent(starting_after)) + '&ending_before=' + (ending_before == null ? '' : encodeURIComponent(ending_before)), {});
		}

		/**
		 * Returns a list of students
		 * Get students
		 * @return {StudentsResponse} OK Response
		 */
		GetStudents(limit: number | null | undefined, starting_after: string | null | undefined, ending_before: string | null | undefined, where: string | null | undefined): Observable<StudentsResponse> {
			return this.http.get<StudentsResponse>(this.baseUri + 'students?limit=' + limit + '&starting_after=' + (starting_after == null ? '' : encodeURIComponent(starting_after)) + '&ending_before=' + (ending_before == null ? '' : encodeURIComponent(ending_before)) + '&where=' + (where == null ? '' : encodeURIComponent(where)), {});
		}

		/**
		 * Returns a specific student
		 * Get students/{id}
		 * @return {StudentResponse} OK Response
		 */
		GetStudent(id: string, include: string | null | undefined): Observable<StudentResponse> {
			return this.http.get<StudentResponse>(this.baseUri + 'students/' + (id == null ? '' : encodeURIComponent(id)) + '&include=' + (include == null ? '' : encodeURIComponent(include)), {});
		}

		/**
		 * Returns the contacts for a student
		 * Get students/{id}/contacts
		 * @return {StudentContactsForStudentResponse} OK Response
		 */
		GetContactsForStudent(id: string, limit: number | null | undefined): Observable<StudentContactsForStudentResponse> {
			return this.http.get<StudentContactsForStudentResponse>(this.baseUri + 'students/' + (id == null ? '' : encodeURIComponent(id)) + '/contacts&limit=' + limit, {});
		}

		/**
		 * Returns the district for a student
		 * Get students/{id}/district
		 * @return {DistrictResponse} OK Response
		 */
		GetDistrictForStudent(id: string): Observable<DistrictResponse> {
			return this.http.get<DistrictResponse>(this.baseUri + 'students/' + (id == null ? '' : encodeURIComponent(id)) + '/district', {});
		}

		/**
		 * Returns the primary school for a student
		 * Get students/{id}/school
		 * @return {SchoolResponse} OK Response
		 */
		GetSchoolForStudent(id: string): Observable<SchoolResponse> {
			return this.http.get<SchoolResponse>(this.baseUri + 'students/' + (id == null ? '' : encodeURIComponent(id)) + '/school', {});
		}

		/**
		 * Returns the sections for a student
		 * Get students/{id}/sections
		 * @return {SectionsResponse} OK Response
		 */
		GetSectionsForStudent(id: string, limit: number | null | undefined, starting_after: string | null | undefined, ending_before: string | null | undefined): Observable<SectionsResponse> {
			return this.http.get<SectionsResponse>(this.baseUri + 'students/' + (id == null ? '' : encodeURIComponent(id)) + '/sections&limit=' + limit + '&starting_after=' + (starting_after == null ? '' : encodeURIComponent(starting_after)) + '&ending_before=' + (ending_before == null ? '' : encodeURIComponent(ending_before)), {});
		}

		/**
		 * Returns the teachers for a student
		 * Get students/{id}/teachers
		 * @return {TeachersResponse} OK Response
		 */
		GetTeachersForStudent(id: string, limit: number | null | undefined, starting_after: string | null | undefined, ending_before: string | null | undefined): Observable<TeachersResponse> {
			return this.http.get<TeachersResponse>(this.baseUri + 'students/' + (id == null ? '' : encodeURIComponent(id)) + '/teachers&limit=' + limit + '&starting_after=' + (starting_after == null ? '' : encodeURIComponent(starting_after)) + '&ending_before=' + (ending_before == null ? '' : encodeURIComponent(ending_before)), {});
		}

		/**
		 * Returns a list of teachers
		 * Get teachers
		 * @return {TeachersResponse} OK Response
		 */
		GetTeachers(limit: number | null | undefined, starting_after: string | null | undefined, ending_before: string | null | undefined, where: string | null | undefined): Observable<TeachersResponse> {
			return this.http.get<TeachersResponse>(this.baseUri + 'teachers?limit=' + limit + '&starting_after=' + (starting_after == null ? '' : encodeURIComponent(starting_after)) + '&ending_before=' + (ending_before == null ? '' : encodeURIComponent(ending_before)) + '&where=' + (where == null ? '' : encodeURIComponent(where)), {});
		}

		/**
		 * Returns a specific teacher
		 * Get teachers/{id}
		 * @return {TeacherResponse} OK Response
		 */
		GetTeacher(id: string, include: string | null | undefined): Observable<TeacherResponse> {
			return this.http.get<TeacherResponse>(this.baseUri + 'teachers/' + (id == null ? '' : encodeURIComponent(id)) + '&include=' + (include == null ? '' : encodeURIComponent(include)), {});
		}

		/**
		 * Returns the district for a teacher
		 * Get teachers/{id}/district
		 * @return {DistrictResponse} OK Response
		 */
		GetDistrictForTeacher(id: string): Observable<DistrictResponse> {
			return this.http.get<DistrictResponse>(this.baseUri + 'teachers/' + (id == null ? '' : encodeURIComponent(id)) + '/district', {});
		}

		/**
		 * Returns the grade levels for sections a teacher teaches
		 * Get teachers/{id}/grade_levels
		 * @return {GradeLevelsResponse} OK Response
		 */
		GetGradeLevelsForTeacher(id: string): Observable<GradeLevelsResponse> {
			return this.http.get<GradeLevelsResponse>(this.baseUri + 'teachers/' + (id == null ? '' : encodeURIComponent(id)) + '/grade_levels', {});
		}

		/**
		 * Retrieves school info for a teacher.
		 * Get teachers/{id}/school
		 * @return {SchoolResponse} OK Response
		 */
		GetSchoolForTeacher(id: string): Observable<SchoolResponse> {
			return this.http.get<SchoolResponse>(this.baseUri + 'teachers/' + (id == null ? '' : encodeURIComponent(id)) + '/school', {});
		}

		/**
		 * Returns the sections for a teacher
		 * Get teachers/{id}/sections
		 * @return {SectionsResponse} OK Response
		 */
		GetSectionsForTeacher(id: string, limit: number | null | undefined, starting_after: string | null | undefined, ending_before: string | null | undefined): Observable<SectionsResponse> {
			return this.http.get<SectionsResponse>(this.baseUri + 'teachers/' + (id == null ? '' : encodeURIComponent(id)) + '/sections&limit=' + limit + '&starting_after=' + (starting_after == null ? '' : encodeURIComponent(starting_after)) + '&ending_before=' + (ending_before == null ? '' : encodeURIComponent(ending_before)), {});
		}

		/**
		 * Returns the students for a teacher
		 * Get teachers/{id}/students
		 * @return {StudentsResponse} OK Response
		 */
		GetStudentsForTeacher(id: string, limit: number | null | undefined, starting_after: string | null | undefined, ending_before: string | null | undefined): Observable<StudentsResponse> {
			return this.http.get<StudentsResponse>(this.baseUri + 'teachers/' + (id == null ? '' : encodeURIComponent(id)) + '/students&limit=' + limit + '&starting_after=' + (starting_after == null ? '' : encodeURIComponent(starting_after)) + '&ending_before=' + (ending_before == null ? '' : encodeURIComponent(ending_before)), {});
		}
	}

}

