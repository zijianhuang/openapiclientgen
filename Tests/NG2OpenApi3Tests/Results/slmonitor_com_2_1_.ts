import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents an audio recording. */
	export interface Audio {

		/**
		 * Audio container types.
		 * Required
		 */
		container: AudioContainer;

		/**
		 * The base64 encoded audio data.
		 * Required
		 */
		data: string;

		/**
		 * Audio encoding formats.
		 * Required
		 */
		encoding: AudioEncoding;
	}

	/** Represents an audio recording. */
	export interface AudioFormProperties {

		/**
		 * Audio container types.
		 * Required
		 */
		container: FormControl<AudioContainer | null | undefined>,

		/**
		 * The base64 encoded audio data.
		 * Required
		 */
		data: FormControl<string | null | undefined>,

		/**
		 * Audio encoding formats.
		 * Required
		 */
		encoding: FormControl<AudioEncoding | null | undefined>,
	}
	export function CreateAudioFormGroup() {
		return new FormGroup<AudioFormProperties>({
			container: new FormControl<AudioContainer | null | undefined>(undefined, [Validators.required]),
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encoding: new FormControl<AudioEncoding | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Audio container types. */
	export enum AudioContainer { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5, _6 = 6, _7 = 7, _8 = 8 }


	/** Audio encoding formats. */
	export enum AudioEncoding { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5, _6 = 6, _7 = 7 }

	export enum BatteryPowerSource { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4 }


	/** The company information */
	export interface Company {

		/**
		 * The login ID
		 * Required
		 */
		login: string;

		/**
		 * The company name
		 * Required
		 */
		name: string;
	}

	/** The company information */
	export interface CompanyFormProperties {

		/**
		 * The login ID
		 * Required
		 */
		login: FormControl<string | null | undefined>,

		/**
		 * The company name
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCompanyFormGroup() {
		return new FormGroup<CompanyFormProperties>({
			login: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeviceInfo {
		battery?: PowerInfo;
		model?: string | null;
		platform?: string | null;
	}
	export interface DeviceInfoFormProperties {
		model: FormControl<string | null | undefined>,
		platform: FormControl<string | null | undefined>,
	}
	export function CreateDeviceInfoFormGroup() {
		return new FormGroup<DeviceInfoFormProperties>({
			model: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PowerInfo {

		/**
		 * Required
		 * Type: double
		 */
		batteryLevel: number;

		/** Required */
		powerSource: BatteryPowerSource;
	}
	export interface PowerInfoFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		batteryLevel: FormControl<number | null | undefined>,

		/** Required */
		powerSource: FormControl<BatteryPowerSource | null | undefined>,
	}
	export function CreatePowerInfoFormGroup() {
		return new FormGroup<PowerInfoFormProperties>({
			batteryLevel: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			powerSource: new FormControl<BatteryPowerSource | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DeviceType { _1 = 0, _2 = 1, _3 = 2, _4 = 3, _5 = 4, _10 = 5, _11 = 6 }

	export interface EventLocationData {
		address?: string | null;

		/** Minimum: -6371000 */
		altitude?: number | null;

		/**
		 * Required
		 * Min length: 1
		 */
		date: Date;

		/** Required */
		device: DeviceInfo;

		/**
		 * Minimum: 0
		 * Maximum: 360
		 */
		heading?: number | null;

		/** Minimum: 0 */
		horizontalAccuracy?: number | null;

		/**
		 * Required
		 * Minimum: -90
		 * Maximum: 90
		 */
		latitude: number;

		/**
		 * Required
		 * Minimum: -180
		 * Maximum: 180
		 */
		longitude: number;

		/** Minimum: 0 */
		speed?: number | null;

		/** Minimum: 0 */
		verticalAccuracy?: number | null;
	}
	export interface EventLocationDataFormProperties {
		address: FormControl<string | null | undefined>,

		/** Minimum: -6371000 */
		altitude: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		date: FormControl<Date | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 360
		 */
		heading: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		horizontalAccuracy: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: -90
		 * Maximum: 90
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: -180
		 * Maximum: 180
		 */
		longitude: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		speed: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		verticalAccuracy: FormControl<number | null | undefined>,
	}
	export function CreateEventLocationDataFormGroup() {
		return new FormGroup<EventLocationDataFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			altitude: new FormControl<number | null | undefined>(undefined, [Validators.min(-6371000)]),
			date: new FormControl<Date | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			heading: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(360)]),
			horizontalAccuracy: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-90), Validators.max(90)]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-180), Validators.max(180)]),
			speed: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			verticalAccuracy: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}


	/** The group information */
	export interface Group {

		/**
		 * The group name
		 * Required
		 */
		name: string;
	}

	/** The group information */
	export interface GroupFormProperties {

		/**
		 * The group name
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Language { _1 = 0, _2 = 1, _3 = 2 }


	/** Location */
	export interface Location {

		/**
		 * Accuracy
		 * Type: double
		 */
		accuracy?: number | null;

		/**
		 * Address
		 * Required
		 */
		address: string;

		/**
		 * Altitude
		 * Type: double
		 */
		altitude?: number | null;

		/**
		 * Altitude accuracy
		 * Type: double
		 */
		altitudeAccuracy?: number | null;

		/**
		 * Battery level
		 * Type: double
		 */
		battery?: number | null;

		/** Required */
		device: DeviceType;

		/**
		 * Device name
		 * Required
		 */
		deviceName: string;

		/**
		 * Heading
		 * Type: double
		 */
		heading?: number | null;

		/**
		 * Latitude
		 * Required
		 * Type: double
		 */
		latitude: number;

		/**
		 * Longitude
		 * Required
		 * Type: double
		 */
		longitude: number;

		/**
		 * Speed
		 * Type: double
		 */
		speed?: number | null;

		/**
		 * Location time stamp
		 * Required
		 */
		timestamp: Date;
	}

	/** Location */
	export interface LocationFormProperties {

		/**
		 * Accuracy
		 * Type: double
		 */
		accuracy: FormControl<number | null | undefined>,

		/**
		 * Address
		 * Required
		 */
		address: FormControl<string | null | undefined>,

		/**
		 * Altitude
		 * Type: double
		 */
		altitude: FormControl<number | null | undefined>,

		/**
		 * Altitude accuracy
		 * Type: double
		 */
		altitudeAccuracy: FormControl<number | null | undefined>,

		/**
		 * Battery level
		 * Type: double
		 */
		battery: FormControl<number | null | undefined>,

		/** Required */
		device: FormControl<DeviceType | null | undefined>,

		/**
		 * Device name
		 * Required
		 */
		deviceName: FormControl<string | null | undefined>,

		/**
		 * Heading
		 * Type: double
		 */
		heading: FormControl<number | null | undefined>,

		/**
		 * Latitude
		 * Required
		 * Type: double
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * Longitude
		 * Required
		 * Type: double
		 */
		longitude: FormControl<number | null | undefined>,

		/**
		 * Speed
		 * Type: double
		 */
		speed: FormControl<number | null | undefined>,

		/**
		 * Location time stamp
		 * Required
		 */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			accuracy: new FormControl<number | null | undefined>(undefined),
			address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			altitude: new FormControl<number | null | undefined>(undefined),
			altitudeAccuracy: new FormControl<number | null | undefined>(undefined),
			battery: new FormControl<number | null | undefined>(undefined),
			device: new FormControl<DeviceType | null | undefined>(undefined, [Validators.required]),
			deviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			heading: new FormControl<number | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			speed: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Actions to perform */
	export interface MonitorAction {

		/**
		 * The instructions for the action
		 * Required
		 */
		instructions: string;

		/**
		 * The order of the action
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		order: number;
	}

	/** Actions to perform */
	export interface MonitorActionFormProperties {

		/**
		 * The instructions for the action
		 * Required
		 */
		instructions: FormControl<string | null | undefined>,

		/**
		 * The order of the action
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		order: FormControl<number | null | undefined>,
	}
	export function CreateMonitorActionFormGroup() {
		return new FormGroup<MonitorActionFormProperties>({
			instructions: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			order: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contacts */
	export interface PhoneBookEntry {

		/**
		 * The address
		 * Required
		 */
		address: string;

		/**
		 * The cell phone number
		 * Required
		 */
		cell: string;

		/**
		 * Comments
		 * Required
		 */
		comments: string;

		/**
		 * The email address
		 * Required
		 */
		email: string;

		/**
		 * The first name
		 * Required
		 */
		firstName: string;

		/**
		 * Flag to denote if the contact is private
		 * Required
		 */
		isPrivate: boolean;

		/**
		 * The last name
		 * Required
		 */
		lastName: string;

		/**
		 * The order of the contact
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		order: number;

		/**
		 * The phone number
		 * Required
		 */
		phone: string;
	}

	/** Contacts */
	export interface PhoneBookEntryFormProperties {

		/**
		 * The address
		 * Required
		 */
		address: FormControl<string | null | undefined>,

		/**
		 * The cell phone number
		 * Required
		 */
		cell: FormControl<string | null | undefined>,

		/**
		 * Comments
		 * Required
		 */
		comments: FormControl<string | null | undefined>,

		/**
		 * The email address
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * The first name
		 * Required
		 */
		firstName: FormControl<string | null | undefined>,

		/**
		 * Flag to denote if the contact is private
		 * Required
		 */
		isPrivate: FormControl<boolean | null | undefined>,

		/**
		 * The last name
		 * Required
		 */
		lastName: FormControl<string | null | undefined>,

		/**
		 * The order of the contact
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		order: FormControl<number | null | undefined>,

		/**
		 * The phone number
		 * Required
		 */
		phone: FormControl<string | null | undefined>,
	}
	export function CreatePhoneBookEntryFormGroup() {
		return new FormGroup<PhoneBookEntryFormProperties>({
			address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cell: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			comments: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isPrivate: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			order: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			phone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Phone notification */
	export interface PhoneNotification {

		/**
		 * The order
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		order: number;

		/**
		 * The phone number
		 * Required
		 */
		phoneNumber: string;
	}

	/** Phone notification */
	export interface PhoneNotificationFormProperties {

		/**
		 * The order
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		order: FormControl<number | null | undefined>,

		/**
		 * The phone number
		 * Required
		 */
		phoneNumber: FormControl<string | null | undefined>,
	}
	export function CreatePhoneNotificationFormGroup() {
		return new FormGroup<PhoneNotificationFormProperties>({
			order: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			phoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Privilege { _1 = 0, _2 = 1, _3 = 2, _4 = 3, _5 = 4 }

	export interface ProblemDetails {
		detail?: string | null;

		/** Required */
		extensions: {[id: string]: any };
		instance?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		status?: number | null;
		title?: string | null;
		type?: string | null;
	}
	export interface ProblemDetailsFormProperties {
		detail: FormControl<string | null | undefined>,

		/** Required */
		extensions: FormControl<{[id: string]: any } | null | undefined>,
		instance: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		status: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateProblemDetailsFormGroup() {
		return new FormGroup<ProblemDetailsFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			extensions: new FormControl<{[id: string]: any } | null | undefined>(undefined, [Validators.required]),
			instance: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** User information */
	export interface User {

		/**
		 * Address
		 * Required
		 */
		address: string;

		/**
		 * Cell phone number
		 * Required
		 */
		cell: string;

		/**
		 * Comments
		 * Required
		 */
		comments: string;

		/**
		 * The company information
		 * Required
		 */
		company: Company;

		/**
		 * First name
		 * Required
		 */
		firstName: string;

		/**
		 * Full name
		 * Required
		 */
		fullName: string;

		/** The group information */
		group?: Group;

		/** Required */
		language: Language;

		/**
		 * Last name
		 * Required
		 */
		lastName: string;

		/**
		 * Notification emails
		 * Required
		 */
		notificationEmails: Array<string>;

		/**
		 * Notification phone numbers
		 * Required
		 */
		notificationPhones: Array<PhoneNotification>;

		/**
		 * Phone number
		 * Required
		 */
		phone: string;

		/**
		 * Privileges
		 * Required
		 */
		priveleges: Array<Privilege>;

		/**
		 * Satellite device ID
		 * Required
		 */
		satelliteDeviceId: string;

		/**
		 * Unique identifier for the user
		 * Required
		 */
		uniqueUserId: string;

		/** Vehicle */
		vehicle?: Vehicle;

		/** Information specific to workers */
		workerInformation?: WorkerInfo;
	}

	/** User information */
	export interface UserFormProperties {

		/**
		 * Address
		 * Required
		 */
		address: FormControl<string | null | undefined>,

		/**
		 * Cell phone number
		 * Required
		 */
		cell: FormControl<string | null | undefined>,

		/**
		 * Comments
		 * Required
		 */
		comments: FormControl<string | null | undefined>,

		/**
		 * First name
		 * Required
		 */
		firstName: FormControl<string | null | undefined>,

		/**
		 * Full name
		 * Required
		 */
		fullName: FormControl<string | null | undefined>,

		/** Required */
		language: FormControl<Language | null | undefined>,

		/**
		 * Last name
		 * Required
		 */
		lastName: FormControl<string | null | undefined>,

		/**
		 * Phone number
		 * Required
		 */
		phone: FormControl<string | null | undefined>,

		/**
		 * Satellite device ID
		 * Required
		 */
		satelliteDeviceId: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the user
		 * Required
		 */
		uniqueUserId: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cell: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			comments: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fullName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			language: new FormControl<Language | null | undefined>(undefined, [Validators.required]),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			satelliteDeviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uniqueUserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Vehicle */
	export interface Vehicle {

		/**
		 * The color
		 * Required
		 */
		color: string;

		/**
		 * The license plate
		 * Required
		 */
		plate: string;

		/**
		 * The type
		 * Required
		 */
		type: string;
	}

	/** Vehicle */
	export interface VehicleFormProperties {

		/**
		 * The color
		 * Required
		 */
		color: FormControl<string | null | undefined>,

		/**
		 * The license plate
		 * Required
		 */
		plate: FormControl<string | null | undefined>,

		/**
		 * The type
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateVehicleFormGroup() {
		return new FormGroup<VehicleFormProperties>({
			color: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			plate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information specific to workers */
	export interface WorkerInfo {

		/**
		 * Actions to follow for the worker
		 * Required
		 */
		actions: Array<MonitorAction>;

		/**
		 * The worker's itinerary
		 * Required
		 */
		itinerary: string;

		/** Location */
		lastLocation?: Location;

		/**
		 * The worker's maximum report interval
		 * Required
		 */
		maximumReportInterval: string;

		/**
		 * The worker's phone book
		 * Required
		 */
		phoneBook: Array<PhoneBookEntry>;

		/**
		 * The worker's default report interval
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reportInterval: number;

		/**
		 * Worker Status information DTO
		 * Required
		 */
		status: WorkerStatus;
	}

	/** Information specific to workers */
	export interface WorkerInfoFormProperties {

		/**
		 * The worker's itinerary
		 * Required
		 */
		itinerary: FormControl<string | null | undefined>,

		/**
		 * The worker's maximum report interval
		 * Required
		 */
		maximumReportInterval: FormControl<string | null | undefined>,

		/**
		 * The worker's default report interval
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reportInterval: FormControl<number | null | undefined>,
	}
	export function CreateWorkerInfoFormGroup() {
		return new FormGroup<WorkerInfoFormProperties>({
			itinerary: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maximumReportInterval: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reportInterval: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Worker Status information DTO */
	export interface WorkerStatus {

		/** The time that the system started monitoring the worker in UTC */
		beginMonitoringUTC?: Date | null;

		/** The time that the system stopped monitoring the worker in UTC */
		endMonitoringUTC?: Date | null;

		/**
		 * A flag indicating whether the emergency for the worker has been acknowledged
		 * Required
		 */
		isAcknowledged: boolean;

		/** The time the worker last reported OK in UTC */
		lastReportUTC?: Date | null;

		/** The time when the worker's next report is due in UTC */
		nextReportUTC?: Date | null;

		/** Required */
		state: UserState;

		/**
		 * The time of the worker's last state change in UTC
		 * Required
		 */
		stateChangedUTC: Date;
	}

	/** Worker Status information DTO */
	export interface WorkerStatusFormProperties {

		/** The time that the system started monitoring the worker in UTC */
		beginMonitoringUTC: FormControl<Date | null | undefined>,

		/** The time that the system stopped monitoring the worker in UTC */
		endMonitoringUTC: FormControl<Date | null | undefined>,

		/**
		 * A flag indicating whether the emergency for the worker has been acknowledged
		 * Required
		 */
		isAcknowledged: FormControl<boolean | null | undefined>,

		/** The time the worker last reported OK in UTC */
		lastReportUTC: FormControl<Date | null | undefined>,

		/** The time when the worker's next report is due in UTC */
		nextReportUTC: FormControl<Date | null | undefined>,

		/** Required */
		state: FormControl<UserState | null | undefined>,

		/**
		 * The time of the worker's last state change in UTC
		 * Required
		 */
		stateChangedUTC: FormControl<Date | null | undefined>,
	}
	export function CreateWorkerStatusFormGroup() {
		return new FormGroup<WorkerStatusFormProperties>({
			beginMonitoringUTC: new FormControl<Date | null | undefined>(undefined),
			endMonitoringUTC: new FormControl<Date | null | undefined>(undefined),
			isAcknowledged: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			lastReportUTC: new FormControl<Date | null | undefined>(undefined),
			nextReportUTC: new FormControl<Date | null | undefined>(undefined),
			state: new FormControl<UserState | null | undefined>(undefined, [Validators.required]),
			stateChangedUTC: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UserState { _1 = 0, _2 = 1, _4 = 2, _5 = 3 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get the authenticated user
		 * This operation gets the authenticated user's profile.
		 * Get api/v2.1/companies/{companyId}/me
		 * @return {User} The User
		 */
		Api_GetUser(companyId: string): Observable<User> {
			return this.http.get<User>(this.baseUri + 'api/v2.1/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/me', {});
		}

		/**
		 * Get all the users
		 * This operation gets all the users' profiles.
		 * Get api/v2.1/companies/{companyId}/users
		 * @return {Array<User>} The requested Users
		 */
		Api_GetUsers(companyId: string): Observable<Array<User>> {
			return this.http.get<Array<User>>(this.baseUri + 'api/v2.1/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/users', {});
		}

		/**
		 * Get the user's profile
		 * This operation gets the specified user's profile.
		 * Get api/v2.1/companies/{companyId}/users/{uniqueUserId}
		 * @param {string} uniqueUserId The unique user id
		 * @return {User} The User
		 */
		Api_GetUser2(uniqueUserId: string, companyId: string): Observable<User> {
			return this.http.get<User>(this.baseUri + 'api/v2.1/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/users/' + (uniqueUserId == null ? '' : encodeURIComponent(uniqueUserId)), {});
		}

		/**
		 * Check in
		 * This operation checks the worker in for a default time or a custom time if the optional interval is provided.
		 * Post api/v2.1/companies/{companyId}/users/{uniqueUserId}/checkin
		 * @param {string} uniqueUserId The unique user id
		 * @param {number} interval The optional check-in interval in minutes
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Api_CheckInDeviceType} deviceType Optional, the device type performing the command.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {User} The updated User
		 */
		Api_CheckIn(uniqueUserId: string, interval: number | null | undefined, deviceType: Api_CheckInDeviceType | null | undefined, companyId: string): Observable<User> {
			return this.http.post<User>(this.baseUri + 'api/v2.1/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/users/' + (uniqueUserId == null ? '' : encodeURIComponent(uniqueUserId)) + '/checkin&interval=' + interval + '&deviceType=' + deviceType, null, {});
		}

		/**
		 * Check in with an audio recording
		 * This operation checks the worker in for a default time or a custom time if the optional interval is provided, and includes an audio attachment.
		 * Post api/v2.1/companies/{companyId}/users/{uniqueUserId}/checkin-audio
		 * @param {number} interval The optional check-in interval in minutes
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Api_CheckInWithAudioDeviceType} deviceType Optional, the device type performing the command.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Audio} requestBody The base 64 encoded audio
		 * @return {User} The updated User
		 */
		Api_CheckInWithAudio(uniqueUserId: string, interval: number | null | undefined, deviceType: Api_CheckInWithAudioDeviceType | null | undefined, companyId: string, requestBody: Audio): Observable<User> {
			return this.http.post<User>(this.baseUri + 'api/v2.1/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/users/' + (uniqueUserId == null ? '' : encodeURIComponent(uniqueUserId)) + '/checkin-audio&interval=' + interval + '&deviceType=' + deviceType, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Check in with a text report
		 * This operation checks the worker in for a default time or a custom time if the optional interval is provided.
		 * Post api/v2.1/companies/{companyId}/users/{uniqueUserId}/checkin-text
		 * @param {string} uniqueUserId The unique user id
		 * @param {number} interval The optional check-in interval in minutes
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Api_CheckInWithTextDeviceType} deviceType Optional, the device type performing the command.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} requestBody The text report
		 * @return {User} The updated User
		 */
		Api_CheckInWithText(uniqueUserId: string, interval: number | null | undefined, deviceType: Api_CheckInWithTextDeviceType | null | undefined, companyId: string, requestBody: string): Observable<User> {
			return this.http.post<User>(this.baseUri + 'api/v2.1/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/users/' + (uniqueUserId == null ? '' : encodeURIComponent(uniqueUserId)) + '/checkin-text&interval=' + interval + '&deviceType=' + deviceType, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Declare an emergency
		 * This operation declares an emergency.
		 * Post api/v2.1/companies/{companyId}/users/{uniqueUserId}/emergency
		 * @param {string} uniqueUserId The unique user id
		 * @param {Api_EmergencyDeviceType} deviceType Optional, the device type performing the command.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {User} The updated User
		 */
		Api_Emergency(uniqueUserId: string, deviceType: Api_EmergencyDeviceType | null | undefined, companyId: string): Observable<User> {
			return this.http.post<User>(this.baseUri + 'api/v2.1/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/users/' + (uniqueUserId == null ? '' : encodeURIComponent(uniqueUserId)) + '/emergency&deviceType=' + deviceType, null, {});
		}

		/**
		 * Declare an emergency with an audio recording
		 * This operation declares an emergency, and includes an audio attachment.
		 * Post api/v2.1/companies/{companyId}/users/{uniqueUserId}/emergency-audio
		 * @param {string} uniqueUserId The unique user id
		 * @param {Api_EmergencyWithAudioDeviceType} deviceType Optional, the device type performing the command.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Audio} requestBody The base 64 encoded audio
		 * @return {User} The updated User
		 */
		Api_EmergencyWithAudio(uniqueUserId: string, deviceType: Api_EmergencyWithAudioDeviceType | null | undefined, companyId: string, requestBody: Audio): Observable<User> {
			return this.http.post<User>(this.baseUri + 'api/v2.1/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/users/' + (uniqueUserId == null ? '' : encodeURIComponent(uniqueUserId)) + '/emergency-audio&deviceType=' + deviceType, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Declare an emergency with a text report
		 * This operation declares an emergency.
		 * Post api/v2.1/companies/{companyId}/users/{uniqueUserId}/emergency-text
		 * @param {string} uniqueUserId The unique user id
		 * @param {Api_EmergencyWithTextDeviceType} deviceType Optional, the device type performing the command.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} requestBody The text report
		 * @return {User} The updated User
		 */
		Api_EmergencyWithText(uniqueUserId: string, deviceType: Api_EmergencyWithTextDeviceType | null | undefined, companyId: string, requestBody: string): Observable<User> {
			return this.http.post<User>(this.baseUri + 'api/v2.1/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/users/' + (uniqueUserId == null ? '' : encodeURIComponent(uniqueUserId)) + '/emergency-text&deviceType=' + deviceType, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * End monitoring
		 * This operation ends monitoring.
		 * Post api/v2.1/companies/{companyId}/users/{uniqueUserId}/end
		 * @param {string} uniqueUserId The unique user id
		 * @param {Api_EndDeviceType} deviceType Optional, the device type performing the command.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {User} The updated User
		 */
		Api_End(uniqueUserId: string, deviceType: Api_EndDeviceType | null | undefined, companyId: string): Observable<User> {
			return this.http.post<User>(this.baseUri + 'api/v2.1/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/users/' + (uniqueUserId == null ? '' : encodeURIComponent(uniqueUserId)) + '/end&deviceType=' + deviceType, null, {});
		}

		/**
		 * End monitoring with an audio recording
		 * This operation ends monitoring, and includes an audio attachment.
		 * Post api/v2.1/companies/{companyId}/users/{uniqueUserId}/end-audio
		 * @param {string} uniqueUserId The unique user id
		 * @param {Api_EndWithAudioDeviceType} deviceType Optional, the device type performing the command.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Audio} requestBody The base 64 encoded audio
		 * @return {User} The updatedUser
		 */
		Api_EndWithAudio(uniqueUserId: string, deviceType: Api_EndWithAudioDeviceType | null | undefined, companyId: string, requestBody: Audio): Observable<User> {
			return this.http.post<User>(this.baseUri + 'api/v2.1/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/users/' + (uniqueUserId == null ? '' : encodeURIComponent(uniqueUserId)) + '/end-audio&deviceType=' + deviceType, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * End monitoring with a text report
		 * This operation ends monitoring.
		 * Post api/v2.1/companies/{companyId}/users/{uniqueUserId}/end-text
		 * @param {string} uniqueUserId The unique user id
		 * @param {Api_EndWithTextDeviceType} deviceType Optional, the device type performing the command.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} requestBody The text report
		 * @return {User} The updated User
		 */
		Api_EndWithText(uniqueUserId: string, deviceType: Api_EndWithTextDeviceType | null | undefined, companyId: string, requestBody: string): Observable<User> {
			return this.http.post<User>(this.baseUri + 'api/v2.1/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/users/' + (uniqueUserId == null ? '' : encodeURIComponent(uniqueUserId)) + '/end-text&deviceType=' + deviceType, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update the itinerary
		 * This operation updates the worker's itinerary.
		 * Put api/v2.1/companies/{companyId}/users/{uniqueUserId}/itinerary
		 * @param {string} uniqueUserId The unique user id
		 * @param {string} requestBody The itinerary text
		 * @return {User} The updated User
		 */
		Api_UpdateItinerary(uniqueUserId: string, companyId: string, requestBody: string): Observable<User> {
			return this.http.put<User>(this.baseUri + 'api/v2.1/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/users/' + (uniqueUserId == null ? '' : encodeURIComponent(uniqueUserId)) + '/itinerary', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Report a location
		 * This operation adds a location to the worker's event history.
		 * Post api/v2.1/companies/{companyId}/users/{uniqueUserId}/location
		 * @param {string} uniqueUserId The unique user id
		 * @param {Api_ReportLocationDeviceType} deviceType Optional, the device type performing the command.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {EventLocationData} requestBody The EventLocationData
		 * @return {User} The updated User
		 */
		Api_ReportLocation(uniqueUserId: string, deviceType: Api_ReportLocationDeviceType | null | undefined, companyId: string, requestBody: EventLocationData): Observable<User> {
			return this.http.post<User>(this.baseUri + 'api/v2.1/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/users/' + (uniqueUserId == null ? '' : encodeURIComponent(uniqueUserId)) + '/location&deviceType=' + deviceType, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Send a text message
		 * The operation adds a text message to the worker's event history.
		 * Post api/v2.1/companies/{companyId}/users/{uniqueUserId}/text
		 * @param {string} uniqueUserId The unique user id
		 * @param {Api_ReportTextDeviceType} deviceType Optional, the device type performing the command.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} requestBody The text to report
		 * @return {void} 200 for success
		 */
		Api_ReportText(uniqueUserId: string, deviceType: Api_ReportTextDeviceType | null | undefined, companyId: string, requestBody: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v2.1/companies/' + (companyId == null ? '' : encodeURIComponent(companyId)) + '/users/' + (uniqueUserId == null ? '' : encodeURIComponent(uniqueUserId)) + '/text&deviceType=' + deviceType, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum Api_CheckInDeviceType { _1 = 0, _2 = 1, _3 = 2, _4 = 3, _5 = 4, _10 = 5, _11 = 6 }

	export enum Api_CheckInWithAudioDeviceType { _1 = 0, _2 = 1, _3 = 2, _4 = 3, _5 = 4, _10 = 5, _11 = 6 }

	export enum Api_CheckInWithTextDeviceType { _1 = 0, _2 = 1, _3 = 2, _4 = 3, _5 = 4, _10 = 5, _11 = 6 }

	export enum Api_EmergencyDeviceType { _1 = 0, _2 = 1, _3 = 2, _4 = 3, _5 = 4, _10 = 5, _11 = 6 }

	export enum Api_EmergencyWithAudioDeviceType { _1 = 0, _2 = 1, _3 = 2, _4 = 3, _5 = 4, _10 = 5, _11 = 6 }

	export enum Api_EmergencyWithTextDeviceType { _1 = 0, _2 = 1, _3 = 2, _4 = 3, _5 = 4, _10 = 5, _11 = 6 }

	export enum Api_EndDeviceType { _1 = 0, _2 = 1, _3 = 2, _4 = 3, _5 = 4, _10 = 5, _11 = 6 }

	export enum Api_EndWithAudioDeviceType { _1 = 0, _2 = 1, _3 = 2, _4 = 3, _5 = 4, _10 = 5, _11 = 6 }

	export enum Api_EndWithTextDeviceType { _1 = 0, _2 = 1, _3 = 2, _4 = 3, _5 = 4, _10 = 5, _11 = 6 }

	export enum Api_ReportLocationDeviceType { _1 = 0, _2 = 1, _3 = 2, _4 = 3, _5 = 4, _10 = 5, _11 = 6 }

	export enum Api_ReportTextDeviceType { _1 = 0, _2 = 1, _3 = 2, _4 = 3, _5 = 4, _10 = 5, _11 = 6 }

}

