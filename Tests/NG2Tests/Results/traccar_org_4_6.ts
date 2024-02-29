import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Attribute {
		attribute?: string | null;
		description?: string | null;
		expression?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** String|Number|Boolean */
		type?: string | null;
	}
	export interface AttributeFormProperties {
		attribute: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		expression: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** String|Number|Boolean */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAttributeFormGroup() {
		return new FormGroup<AttributeFormProperties>({
			attribute: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Calendar {
		attributes?: string | null;

		/** base64 encoded in iCalendar format */
		data?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		name?: string | null;
	}
	export interface CalendarFormProperties {
		attributes: FormControl<string | null | undefined>,

		/** base64 encoded in iCalendar format */
		data: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCalendarFormGroup() {
		return new FormGroup<CalendarFormProperties>({
			attributes: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Command {
		attributes?: string | null;
		description?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		deviceId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		type?: string | null;
	}
	export interface CommandFormProperties {
		attributes: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		deviceId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateCommandFormGroup() {
		return new FormGroup<CommandFormProperties>({
			attributes: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			deviceId: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CommandType {
		type?: string | null;
	}
	export interface CommandTypeFormProperties {
		type: FormControl<string | null | undefined>,
	}
	export function CreateCommandTypeFormGroup() {
		return new FormGroup<CommandTypeFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Device {
		attributes?: string | null;
		category?: string | null;
		contact?: string | null;
		disabled?: boolean | null;
		geofenceIds?: Array<number>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		groupId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** in IS0 8601 format. eg. `1963-11-22T18:30:00Z` */
		lastUpdate?: Date | null;
		model?: string | null;
		name?: string | null;
		phone?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		positionId?: number | null;
		status?: string | null;
		uniqueId?: string | null;
	}
	export interface DeviceFormProperties {
		attributes: FormControl<string | null | undefined>,
		category: FormControl<string | null | undefined>,
		contact: FormControl<string | null | undefined>,
		disabled: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		groupId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** in IS0 8601 format. eg. `1963-11-22T18:30:00Z` */
		lastUpdate: FormControl<Date | null | undefined>,
		model: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		phone: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		positionId: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
		uniqueId: FormControl<string | null | undefined>,
	}
	export function CreateDeviceFormGroup() {
		return new FormGroup<DeviceFormProperties>({
			attributes: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<string | null | undefined>(undefined),
			contact: new FormControl<string | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			groupId: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			lastUpdate: new FormControl<Date | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			positionId: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			uniqueId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeviceAccumulators {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		deviceId?: number | null;

		/** Type: double */
		hours?: number | null;

		/**
		 * in meters
		 * Type: double
		 */
		totalDistance?: number | null;
	}
	export interface DeviceAccumulatorsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		deviceId: FormControl<number | null | undefined>,

		/** Type: double */
		hours: FormControl<number | null | undefined>,

		/**
		 * in meters
		 * Type: double
		 */
		totalDistance: FormControl<number | null | undefined>,
	}
	export function CreateDeviceAccumulatorsFormGroup() {
		return new FormGroup<DeviceAccumulatorsFormProperties>({
			deviceId: new FormControl<number | null | undefined>(undefined),
			hours: new FormControl<number | null | undefined>(undefined),
			totalDistance: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Driver {
		attributes?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		name?: string | null;
		uniqueId?: string | null;
	}
	export interface DriverFormProperties {
		attributes: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		uniqueId: FormControl<string | null | undefined>,
	}
	export function CreateDriverFormGroup() {
		return new FormGroup<DriverFormProperties>({
			attributes: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uniqueId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Event {
		attributes?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		deviceId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		geofenceId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		maintenanceId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		positionId?: number | null;

		/** in IS0 8601 format. eg. `1963-11-22T18:30:00Z` */
		serverTime?: Date | null;
		type?: string | null;
	}
	export interface EventFormProperties {
		attributes: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		deviceId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		geofenceId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		maintenanceId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		positionId: FormControl<number | null | undefined>,

		/** in IS0 8601 format. eg. `1963-11-22T18:30:00Z` */
		serverTime: FormControl<Date | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			attributes: new FormControl<string | null | undefined>(undefined),
			deviceId: new FormControl<number | null | undefined>(undefined),
			geofenceId: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			maintenanceId: new FormControl<number | null | undefined>(undefined),
			positionId: new FormControl<number | null | undefined>(undefined),
			serverTime: new FormControl<Date | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Geofence {
		area?: string | null;
		attributes?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		calendarId?: number | null;
		description?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		name?: string | null;
	}
	export interface GeofenceFormProperties {
		area: FormControl<string | null | undefined>,
		attributes: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		calendarId: FormControl<number | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateGeofenceFormGroup() {
		return new FormGroup<GeofenceFormProperties>({
			area: new FormControl<string | null | undefined>(undefined),
			attributes: new FormControl<string | null | undefined>(undefined),
			calendarId: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Group {
		attributes?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		groupId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		name?: string | null;
	}
	export interface GroupFormProperties {
		attributes: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		groupId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			attributes: new FormControl<string | null | undefined>(undefined),
			groupId: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Maintenance {
		attributes?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		name?: string | null;

		/** Type: double */
		period?: number | null;

		/** Type: double */
		start?: number | null;
		type?: string | null;
	}
	export interface MaintenanceFormProperties {
		attributes: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Type: double */
		period: FormControl<number | null | undefined>,

		/** Type: double */
		start: FormControl<number | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateMaintenanceFormGroup() {
		return new FormGroup<MaintenanceFormProperties>({
			attributes: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			period: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Notification {
		always?: boolean | null;
		attributes?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		calendarId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		mail?: boolean | null;
		sms?: boolean | null;
		type?: string | null;
		web?: boolean | null;
	}
	export interface NotificationFormProperties {
		always: FormControl<boolean | null | undefined>,
		attributes: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		calendarId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		mail: FormControl<boolean | null | undefined>,
		sms: FormControl<boolean | null | undefined>,
		type: FormControl<string | null | undefined>,
		web: FormControl<boolean | null | undefined>,
	}
	export function CreateNotificationFormGroup() {
		return new FormGroup<NotificationFormProperties>({
			always: new FormControl<boolean | null | undefined>(undefined),
			attributes: new FormControl<string | null | undefined>(undefined),
			calendarId: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			mail: new FormControl<boolean | null | undefined>(undefined),
			sms: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			web: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface NotificationType {
		type?: string | null;
	}
	export interface NotificationTypeFormProperties {
		type: FormControl<string | null | undefined>,
	}
	export function CreateNotificationTypeFormGroup() {
		return new FormGroup<NotificationTypeFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This is a permission map that contain two object indexes. It is used to link/unlink objects. Order is important. Example: { deviceId:8, geofenceId: 16 } */
	export interface Permission {

		/**
		 * Computed Attribute Id, can be second parameter only
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		attributeId?: number | null;

		/**
		 * Calendar Id, can be second parameter only and only in combination with userId
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		calendarId?: number | null;

		/**
		 * Device Id, can be first parameter or second only in combination with userId
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		deviceId?: number | null;

		/**
		 * Driver Id, can be second parameter only
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		driverId?: number | null;

		/**
		 * Geofence Id, can be second parameter only
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		geofenceId?: number | null;

		/**
		 * Group Id, can be first parameter or second only in combination with userId
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		groupId?: number | null;

		/**
		 * User Id, can be second parameter only and only in combination with userId
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		managedUserId?: number | null;

		/**
		 * User Id, can be only first parameter
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		userId?: number | null;
	}

	/** This is a permission map that contain two object indexes. It is used to link/unlink objects. Order is important. Example: { deviceId:8, geofenceId: 16 } */
	export interface PermissionFormProperties {

		/**
		 * Computed Attribute Id, can be second parameter only
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		attributeId: FormControl<number | null | undefined>,

		/**
		 * Calendar Id, can be second parameter only and only in combination with userId
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		calendarId: FormControl<number | null | undefined>,

		/**
		 * Device Id, can be first parameter or second only in combination with userId
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		deviceId: FormControl<number | null | undefined>,

		/**
		 * Driver Id, can be second parameter only
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		driverId: FormControl<number | null | undefined>,

		/**
		 * Geofence Id, can be second parameter only
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		geofenceId: FormControl<number | null | undefined>,

		/**
		 * Group Id, can be first parameter or second only in combination with userId
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		groupId: FormControl<number | null | undefined>,

		/**
		 * User Id, can be second parameter only and only in combination with userId
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		managedUserId: FormControl<number | null | undefined>,

		/**
		 * User Id, can be only first parameter
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		userId: FormControl<number | null | undefined>,
	}
	export function CreatePermissionFormGroup() {
		return new FormGroup<PermissionFormProperties>({
			attributeId: new FormControl<number | null | undefined>(undefined),
			calendarId: new FormControl<number | null | undefined>(undefined),
			deviceId: new FormControl<number | null | undefined>(undefined),
			driverId: new FormControl<number | null | undefined>(undefined),
			geofenceId: new FormControl<number | null | undefined>(undefined),
			groupId: new FormControl<number | null | undefined>(undefined),
			managedUserId: new FormControl<number | null | undefined>(undefined),
			userId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Position {

		/** Type: double */
		accuracy?: number | null;
		address?: string | null;

		/** Type: double */
		altitude?: number | null;
		attributes?: string | null;

		/** Type: double */
		course?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		deviceId?: number | null;

		/** in IS0 8601 format. eg. `1963-11-22T18:30:00Z` */
		deviceTime?: Date | null;

		/** in IS0 8601 format. eg. `1963-11-22T18:30:00Z` */
		fixTime?: Date | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Type: double */
		latitude?: number | null;

		/** Type: double */
		longitude?: number | null;
		network?: string | null;
		outdated?: boolean | null;
		protocol?: string | null;

		/** in IS0 8601 format. eg. `1963-11-22T18:30:00Z` */
		serverTime?: Date | null;

		/**
		 * in knots
		 * Type: double
		 */
		speed?: number | null;
		valid?: boolean | null;
	}
	export interface PositionFormProperties {

		/** Type: double */
		accuracy: FormControl<number | null | undefined>,
		address: FormControl<string | null | undefined>,

		/** Type: double */
		altitude: FormControl<number | null | undefined>,
		attributes: FormControl<string | null | undefined>,

		/** Type: double */
		course: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		deviceId: FormControl<number | null | undefined>,

		/** in IS0 8601 format. eg. `1963-11-22T18:30:00Z` */
		deviceTime: FormControl<Date | null | undefined>,

		/** in IS0 8601 format. eg. `1963-11-22T18:30:00Z` */
		fixTime: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Type: double */
		latitude: FormControl<number | null | undefined>,

		/** Type: double */
		longitude: FormControl<number | null | undefined>,
		network: FormControl<string | null | undefined>,
		outdated: FormControl<boolean | null | undefined>,
		protocol: FormControl<string | null | undefined>,

		/** in IS0 8601 format. eg. `1963-11-22T18:30:00Z` */
		serverTime: FormControl<Date | null | undefined>,

		/**
		 * in knots
		 * Type: double
		 */
		speed: FormControl<number | null | undefined>,
		valid: FormControl<boolean | null | undefined>,
	}
	export function CreatePositionFormGroup() {
		return new FormGroup<PositionFormProperties>({
			accuracy: new FormControl<number | null | undefined>(undefined),
			address: new FormControl<string | null | undefined>(undefined),
			altitude: new FormControl<number | null | undefined>(undefined),
			attributes: new FormControl<string | null | undefined>(undefined),
			course: new FormControl<number | null | undefined>(undefined),
			deviceId: new FormControl<number | null | undefined>(undefined),
			deviceTime: new FormControl<Date | null | undefined>(undefined),
			fixTime: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			outdated: new FormControl<boolean | null | undefined>(undefined),
			protocol: new FormControl<string | null | undefined>(undefined),
			serverTime: new FormControl<Date | null | undefined>(undefined),
			speed: new FormControl<number | null | undefined>(undefined),
			valid: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ReportStops {
		address?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		deviceId?: number | null;
		deviceName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		duration?: number | null;

		/** in IS0 8601 format. eg. `1963-11-22T18:30:00Z` */
		endTime?: Date | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		engineHours?: number | null;

		/** Type: double */
		lat?: number | null;

		/** Type: double */
		lon?: number | null;

		/**
		 * in liters
		 * Type: double
		 */
		spentFuel?: number | null;

		/** in IS0 8601 format. eg. `1963-11-22T18:30:00Z` */
		startTime?: Date | null;
	}
	export interface ReportStopsFormProperties {
		address: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		deviceId: FormControl<number | null | undefined>,
		deviceName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		duration: FormControl<number | null | undefined>,

		/** in IS0 8601 format. eg. `1963-11-22T18:30:00Z` */
		endTime: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		engineHours: FormControl<number | null | undefined>,

		/** Type: double */
		lat: FormControl<number | null | undefined>,

		/** Type: double */
		lon: FormControl<number | null | undefined>,

		/**
		 * in liters
		 * Type: double
		 */
		spentFuel: FormControl<number | null | undefined>,

		/** in IS0 8601 format. eg. `1963-11-22T18:30:00Z` */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateReportStopsFormGroup() {
		return new FormGroup<ReportStopsFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			deviceId: new FormControl<number | null | undefined>(undefined),
			deviceName: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			engineHours: new FormControl<number | null | undefined>(undefined),
			lat: new FormControl<number | null | undefined>(undefined),
			lon: new FormControl<number | null | undefined>(undefined),
			spentFuel: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ReportSummary {

		/**
		 * in knots
		 * Type: double
		 */
		averageSpeed?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		deviceId?: number | null;
		deviceName?: string | null;

		/**
		 * in meters
		 * Type: double
		 */
		distance?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		engineHours?: number | null;

		/**
		 * in knots
		 * Type: double
		 */
		maxSpeed?: number | null;

		/**
		 * in liters
		 * Type: double
		 */
		spentFuel?: number | null;
	}
	export interface ReportSummaryFormProperties {

		/**
		 * in knots
		 * Type: double
		 */
		averageSpeed: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		deviceId: FormControl<number | null | undefined>,
		deviceName: FormControl<string | null | undefined>,

		/**
		 * in meters
		 * Type: double
		 */
		distance: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		engineHours: FormControl<number | null | undefined>,

		/**
		 * in knots
		 * Type: double
		 */
		maxSpeed: FormControl<number | null | undefined>,

		/**
		 * in liters
		 * Type: double
		 */
		spentFuel: FormControl<number | null | undefined>,
	}
	export function CreateReportSummaryFormGroup() {
		return new FormGroup<ReportSummaryFormProperties>({
			averageSpeed: new FormControl<number | null | undefined>(undefined),
			deviceId: new FormControl<number | null | undefined>(undefined),
			deviceName: new FormControl<string | null | undefined>(undefined),
			distance: new FormControl<number | null | undefined>(undefined),
			engineHours: new FormControl<number | null | undefined>(undefined),
			maxSpeed: new FormControl<number | null | undefined>(undefined),
			spentFuel: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ReportTrips {

		/**
		 * in knots
		 * Type: double
		 */
		averageSpeed?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		deviceId?: number | null;
		deviceName?: string | null;

		/**
		 * in meters
		 * Type: double
		 */
		distance?: number | null;
		driverName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		driverUniqueId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		duration?: number | null;
		endAddress?: string | null;

		/** Type: double */
		endLat?: number | null;

		/** Type: double */
		endLon?: number | null;

		/** in IS0 8601 format. eg. `1963-11-22T18:30:00Z` */
		endTime?: Date | null;

		/**
		 * in knots
		 * Type: double
		 */
		maxSpeed?: number | null;

		/**
		 * in liters
		 * Type: double
		 */
		spentFuel?: number | null;
		startAddress?: string | null;

		/** Type: double */
		startLat?: number | null;

		/** Type: double */
		startLon?: number | null;

		/** in IS0 8601 format. eg. `1963-11-22T18:30:00Z` */
		startTime?: Date | null;
	}
	export interface ReportTripsFormProperties {

		/**
		 * in knots
		 * Type: double
		 */
		averageSpeed: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		deviceId: FormControl<number | null | undefined>,
		deviceName: FormControl<string | null | undefined>,

		/**
		 * in meters
		 * Type: double
		 */
		distance: FormControl<number | null | undefined>,
		driverName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		driverUniqueId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		duration: FormControl<number | null | undefined>,
		endAddress: FormControl<string | null | undefined>,

		/** Type: double */
		endLat: FormControl<number | null | undefined>,

		/** Type: double */
		endLon: FormControl<number | null | undefined>,

		/** in IS0 8601 format. eg. `1963-11-22T18:30:00Z` */
		endTime: FormControl<Date | null | undefined>,

		/**
		 * in knots
		 * Type: double
		 */
		maxSpeed: FormControl<number | null | undefined>,

		/**
		 * in liters
		 * Type: double
		 */
		spentFuel: FormControl<number | null | undefined>,
		startAddress: FormControl<string | null | undefined>,

		/** Type: double */
		startLat: FormControl<number | null | undefined>,

		/** Type: double */
		startLon: FormControl<number | null | undefined>,

		/** in IS0 8601 format. eg. `1963-11-22T18:30:00Z` */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateReportTripsFormGroup() {
		return new FormGroup<ReportTripsFormProperties>({
			averageSpeed: new FormControl<number | null | undefined>(undefined),
			deviceId: new FormControl<number | null | undefined>(undefined),
			deviceName: new FormControl<string | null | undefined>(undefined),
			distance: new FormControl<number | null | undefined>(undefined),
			driverName: new FormControl<string | null | undefined>(undefined),
			driverUniqueId: new FormControl<number | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined),
			endAddress: new FormControl<string | null | undefined>(undefined),
			endLat: new FormControl<number | null | undefined>(undefined),
			endLon: new FormControl<number | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			maxSpeed: new FormControl<number | null | undefined>(undefined),
			spentFuel: new FormControl<number | null | undefined>(undefined),
			startAddress: new FormControl<string | null | undefined>(undefined),
			startLat: new FormControl<number | null | undefined>(undefined),
			startLon: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Server {
		attributes?: string | null;
		bingKey?: string | null;
		coordinateFormat?: string | null;
		deviceReadonly?: boolean | null;
		forceSettings?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Type: double */
		latitude?: number | null;
		limitCommands?: boolean | null;

		/** Type: double */
		longitude?: number | null;
		map?: string | null;
		mapUrl?: string | null;
		poiLayer?: string | null;
		readonly?: boolean | null;
		registration?: boolean | null;
		twelveHourFormat?: boolean | null;
		version?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		zoom?: number | null;
	}
	export interface ServerFormProperties {
		attributes: FormControl<string | null | undefined>,
		bingKey: FormControl<string | null | undefined>,
		coordinateFormat: FormControl<string | null | undefined>,
		deviceReadonly: FormControl<boolean | null | undefined>,
		forceSettings: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Type: double */
		latitude: FormControl<number | null | undefined>,
		limitCommands: FormControl<boolean | null | undefined>,

		/** Type: double */
		longitude: FormControl<number | null | undefined>,
		map: FormControl<string | null | undefined>,
		mapUrl: FormControl<string | null | undefined>,
		poiLayer: FormControl<string | null | undefined>,
		readonly: FormControl<boolean | null | undefined>,
		registration: FormControl<boolean | null | undefined>,
		twelveHourFormat: FormControl<boolean | null | undefined>,
		version: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		zoom: FormControl<number | null | undefined>,
	}
	export function CreateServerFormGroup() {
		return new FormGroup<ServerFormProperties>({
			attributes: new FormControl<string | null | undefined>(undefined),
			bingKey: new FormControl<string | null | undefined>(undefined),
			coordinateFormat: new FormControl<string | null | undefined>(undefined),
			deviceReadonly: new FormControl<boolean | null | undefined>(undefined),
			forceSettings: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			limitCommands: new FormControl<boolean | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			map: new FormControl<string | null | undefined>(undefined),
			mapUrl: new FormControl<string | null | undefined>(undefined),
			poiLayer: new FormControl<string | null | undefined>(undefined),
			readonly: new FormControl<boolean | null | undefined>(undefined),
			registration: new FormControl<boolean | null | undefined>(undefined),
			twelveHourFormat: new FormControl<boolean | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			zoom: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Statistics {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		activeDevices?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		activeUsers?: number | null;

		/** in IS0 8601 format. eg. `1963-11-22T18:30:00Z` */
		captureTime?: Date | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		messagesReceived?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		messagesStored?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		requests?: number | null;
	}
	export interface StatisticsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		activeDevices: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		activeUsers: FormControl<number | null | undefined>,

		/** in IS0 8601 format. eg. `1963-11-22T18:30:00Z` */
		captureTime: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		messagesReceived: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		messagesStored: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		requests: FormControl<number | null | undefined>,
	}
	export function CreateStatisticsFormGroup() {
		return new FormGroup<StatisticsFormProperties>({
			activeDevices: new FormControl<number | null | undefined>(undefined),
			activeUsers: new FormControl<number | null | undefined>(undefined),
			captureTime: new FormControl<Date | null | undefined>(undefined),
			messagesReceived: new FormControl<number | null | undefined>(undefined),
			messagesStored: new FormControl<number | null | undefined>(undefined),
			requests: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface User {
		administrator?: boolean | null;
		attributes?: string | null;
		coordinateFormat?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		deviceLimit?: number | null;
		deviceReadonly?: boolean | null;
		disabled?: boolean | null;
		email?: string | null;

		/** in IS0 8601 format. eg. `1963-11-22T18:30:00Z` */
		expirationTime?: Date | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Type: double */
		latitude?: number | null;
		limitCommands?: boolean | null;

		/** Type: double */
		longitude?: number | null;
		map?: string | null;
		name?: string | null;
		password?: string | null;
		poiLayer?: string | null;
		readonly?: boolean | null;
		token?: string | null;
		twelveHourFormat?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		userLimit?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		zoom?: number | null;
	}
	export interface UserFormProperties {
		administrator: FormControl<boolean | null | undefined>,
		attributes: FormControl<string | null | undefined>,
		coordinateFormat: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		deviceLimit: FormControl<number | null | undefined>,
		deviceReadonly: FormControl<boolean | null | undefined>,
		disabled: FormControl<boolean | null | undefined>,
		email: FormControl<string | null | undefined>,

		/** in IS0 8601 format. eg. `1963-11-22T18:30:00Z` */
		expirationTime: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Type: double */
		latitude: FormControl<number | null | undefined>,
		limitCommands: FormControl<boolean | null | undefined>,

		/** Type: double */
		longitude: FormControl<number | null | undefined>,
		map: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
		poiLayer: FormControl<string | null | undefined>,
		readonly: FormControl<boolean | null | undefined>,
		token: FormControl<string | null | undefined>,
		twelveHourFormat: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		userLimit: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		zoom: FormControl<number | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			administrator: new FormControl<boolean | null | undefined>(undefined),
			attributes: new FormControl<string | null | undefined>(undefined),
			coordinateFormat: new FormControl<string | null | undefined>(undefined),
			deviceLimit: new FormControl<number | null | undefined>(undefined),
			deviceReadonly: new FormControl<boolean | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			expirationTime: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			limitCommands: new FormControl<boolean | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			map: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			poiLayer: new FormControl<string | null | undefined>(undefined),
			readonly: new FormControl<boolean | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			twelveHourFormat: new FormControl<boolean | null | undefined>(undefined),
			userLimit: new FormControl<number | null | undefined>(undefined),
			zoom: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Fetch a list of Attributes
		 * Without params, it returns a list of Attributes the user has access to
		 * Get attributes/computed
		 * @param {boolean} all Can only be used by admins or managers to fetch all entities
		 * @param {number} userId Standard users can use this only with their own _userId_
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} deviceId Standard users can use this only with _deviceId_s, they have access to
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} groupId Standard users can use this only with _groupId_s, they have access to
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Attribute>} OK
		 */
		AttributesComputedGetByAllAndUserIdAndDeviceIdAndGroupIdAndRefresh(all: boolean | null | undefined, userId: number | null | undefined, deviceId: number | null | undefined, groupId: number | null | undefined, refresh: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Attribute>> {
			return this.http.get<Array<Attribute>>(this.baseUri + 'attributes/computed?all=' + all + '&userId=' + userId + '&deviceId=' + deviceId + '&groupId=' + groupId + '&refresh=' + refresh, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create an Attribute
		 * Post attributes/computed
		 * @return {Attribute} OK
		 */
		AttributesComputedPost(requestBody: Attribute, headersHandler?: () => HttpHeaders): Observable<Attribute> {
			return this.http.post<Attribute>(this.baseUri + 'attributes/computed', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update an Attribute
		 * Put attributes/computed/{id}
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Attribute} OK
		 */
		AttributesComputed_idPut(id: number, requestBody: Attribute, headersHandler?: () => HttpHeaders): Observable<Attribute> {
			return this.http.put<Attribute>(this.baseUri + 'attributes/computed/' + id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete an Attribute
		 * Delete attributes/computed/{id}
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		AttributesComputed_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'attributes/computed/' + id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch a list of Calendars
		 * Without params, it returns a list of Calendars the user has access to
		 * Get calendars
		 * @param {boolean} all Can only be used by admins or managers to fetch all entities
		 * @param {number} userId Standard users can use this only with their own _userId_
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Calendar>} OK
		 */
		CalendarsGetByAllAndUserId(all: boolean | null | undefined, userId: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Calendar>> {
			return this.http.get<Array<Calendar>>(this.baseUri + 'calendars?all=' + all + '&userId=' + userId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a Calendar
		 * Post calendars
		 * @return {Calendar} OK
		 */
		CalendarsPost(requestBody: Calendar, headersHandler?: () => HttpHeaders): Observable<Calendar> {
			return this.http.post<Calendar>(this.baseUri + 'calendars', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update a Calendar
		 * Put calendars/{id}
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Calendar} OK
		 */
		Calendars_idPut(id: number, requestBody: Calendar, headersHandler?: () => HttpHeaders): Observable<Calendar> {
			return this.http.put<Calendar>(this.baseUri + 'calendars/' + id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete a Calendar
		 * Delete calendars/{id}
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		Calendars_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'calendars/' + id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch a list of Saved Commands
		 * Without params, it returns a list of Drivers the user has access to
		 * Get commands
		 * @param {boolean} all Can only be used by admins or managers to fetch all entities
		 * @param {number} userId Standard users can use this only with their own _userId_
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} deviceId Standard users can use this only with _deviceId_s, they have access to
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} groupId Standard users can use this only with _groupId_s, they have access to
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Command>} OK
		 */
		CommandsGetByAllAndUserIdAndDeviceIdAndGroupIdAndRefresh(all: boolean | null | undefined, userId: number | null | undefined, deviceId: number | null | undefined, groupId: number | null | undefined, refresh: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Command>> {
			return this.http.get<Array<Command>>(this.baseUri + 'commands?all=' + all + '&userId=' + userId + '&deviceId=' + deviceId + '&groupId=' + groupId + '&refresh=' + refresh, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a Saved Command
		 * Post commands
		 * @return {Command} OK
		 */
		CommandsPost(requestBody: Command, headersHandler?: () => HttpHeaders): Observable<Command> {
			return this.http.post<Command>(this.baseUri + 'commands', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Fetch a list of Saved Commands supported by Device at the moment
		 * Return a list of saved commands linked to Device and its groups, filtered by current Device protocol support
		 * Get commands/send
		 * @param {number} deviceId Standard users can use this only with _deviceId_s, they have access to
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Command>} OK
		 */
		CommandsSendGetByDeviceId(deviceId: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Command>> {
			return this.http.get<Array<Command>>(this.baseUri + 'commands/send?deviceId=' + deviceId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Dispatch commands to device
		 * Dispatch a new command or Saved Command if _body.id_ set
		 * Post commands/send
		 * @return {Command} Command sent
		 */
		CommandsSendPost(requestBody: Command, headersHandler?: () => HttpHeaders): Observable<Command> {
			return this.http.post<Command>(this.baseUri + 'commands/send', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Fetch a list of available Commands for the Device or all possible Commands if Device ommited
		 * Get commands/types
		 * @param {number} deviceId Internal device identifier. Only works if device has already reported some locations
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} protocol Protocol name. Can be used instead of device id
		 * @param {boolean} textChannel When `true` return SMS commands. If not specified or `false` return data commands
		 * @return {Array<CommandType>} OK
		 */
		CommandsTypesGetByDeviceIdAndProtocolAndTextChannel(deviceId: number | null | undefined, protocol: string | null | undefined, textChannel: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<CommandType>> {
			return this.http.get<Array<CommandType>>(this.baseUri + 'commands/types?deviceId=' + deviceId + '&protocol=' + (protocol == null ? '' : encodeURIComponent(protocol)) + '&textChannel=' + textChannel, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a Saved Command
		 * Put commands/{id}
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Command} OK
		 */
		Commands_idPut(id: number, requestBody: Command, headersHandler?: () => HttpHeaders): Observable<Command> {
			return this.http.put<Command>(this.baseUri + 'commands/' + id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete a Saved Command
		 * Delete commands/{id}
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		Commands_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'commands/' + id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch a list of Devices
		 * Without any params, returns a list of the user's devices
		 * Get devices
		 * @param {boolean} all Can only be used by admins or managers to fetch all entities
		 * @param {number} userId Standard users can use this only with their own _userId_
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} id To fetch one or more devices. Multiple params can be passed like `id=31&id=42`
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} uniqueId To fetch one or more devices. Multiple params can be passed like `uniqueId=333331&uniqieId=44442`
		 * @return {Array<Device>} OK
		 */
		DevicesGetByAllAndUserIdAndIdAndUniqueId(all: boolean | null | undefined, userId: number | null | undefined, id: number | null | undefined, uniqueId: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Device>> {
			return this.http.get<Array<Device>>(this.baseUri + 'devices?all=' + all + '&userId=' + userId + '&id=' + id + '&uniqueId=' + (uniqueId == null ? '' : encodeURIComponent(uniqueId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a Device
		 * Post devices
		 * @return {Device} OK
		 */
		DevicesPost(requestBody: Device, headersHandler?: () => HttpHeaders): Observable<Device> {
			return this.http.post<Device>(this.baseUri + 'devices', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update a Device
		 * Put devices/{id}
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Device} OK
		 */
		Devices_idPut(id: number, requestBody: Device, headersHandler?: () => HttpHeaders): Observable<Device> {
			return this.http.put<Device>(this.baseUri + 'devices/' + id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete a Device
		 * Delete devices/{id}
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		Devices_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'devices/' + id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update total distance and hours of the Device
		 * Put devices/{id}/accumulators
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		Devices_idAccumulatorsPut(id: number, requestBody: DeviceAccumulators, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'devices/' + id + '/accumulators', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch a list of Drivers
		 * Without params, it returns a list of Drivers the user has access to
		 * Get drivers
		 * @param {boolean} all Can only be used by admins or managers to fetch all entities
		 * @param {number} userId Standard users can use this only with their own _userId_
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} deviceId Standard users can use this only with _deviceId_s, they have access to
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} groupId Standard users can use this only with _groupId_s, they have access to
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Driver>} OK
		 */
		DriversGetByAllAndUserIdAndDeviceIdAndGroupIdAndRefresh(all: boolean | null | undefined, userId: number | null | undefined, deviceId: number | null | undefined, groupId: number | null | undefined, refresh: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Driver>> {
			return this.http.get<Array<Driver>>(this.baseUri + 'drivers?all=' + all + '&userId=' + userId + '&deviceId=' + deviceId + '&groupId=' + groupId + '&refresh=' + refresh, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a Driver
		 * Post drivers
		 * @return {Driver} OK
		 */
		DriversPost(requestBody: Driver, headersHandler?: () => HttpHeaders): Observable<Driver> {
			return this.http.post<Driver>(this.baseUri + 'drivers', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update a Driver
		 * Put drivers/{id}
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Driver} OK
		 */
		Drivers_idPut(id: number, requestBody: Driver, headersHandler?: () => HttpHeaders): Observable<Driver> {
			return this.http.put<Driver>(this.baseUri + 'drivers/' + id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete a Driver
		 * Delete drivers/{id}
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		Drivers_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'drivers/' + id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get events/{id}
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Event} OK
		 */
		Events_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<Event> {
			return this.http.get<Event>(this.baseUri + 'events/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Fetch a list of Geofences
		 * Without params, it returns a list of Geofences the user has access to
		 * Get geofences
		 * @param {boolean} all Can only be used by admins or managers to fetch all entities
		 * @param {number} userId Standard users can use this only with their own _userId_
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} deviceId Standard users can use this only with _deviceId_s, they have access to
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} groupId Standard users can use this only with _groupId_s, they have access to
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Geofence>} OK
		 */
		GeofencesGetByAllAndUserIdAndDeviceIdAndGroupIdAndRefresh(all: boolean | null | undefined, userId: number | null | undefined, deviceId: number | null | undefined, groupId: number | null | undefined, refresh: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Geofence>> {
			return this.http.get<Array<Geofence>>(this.baseUri + 'geofences?all=' + all + '&userId=' + userId + '&deviceId=' + deviceId + '&groupId=' + groupId + '&refresh=' + refresh, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a Geofence
		 * Post geofences
		 * @return {Geofence} OK
		 */
		GeofencesPost(requestBody: Geofence, headersHandler?: () => HttpHeaders): Observable<Geofence> {
			return this.http.post<Geofence>(this.baseUri + 'geofences', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update a Geofence
		 * Put geofences/{id}
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Geofence} OK
		 */
		Geofences_idPut(id: number, requestBody: Geofence, headersHandler?: () => HttpHeaders): Observable<Geofence> {
			return this.http.put<Geofence>(this.baseUri + 'geofences/' + id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete a Geofence
		 * Delete geofences/{id}
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		Geofences_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'geofences/' + id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch a list of Groups
		 * Without any params, returns a list of the Groups the user belongs to
		 * Get groups
		 * @param {boolean} all Can only be used by admins or managers to fetch all entities
		 * @param {number} userId Standard users can use this only with their own _userId_
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Group>} OK
		 */
		GroupsGetByAllAndUserId(all: boolean | null | undefined, userId: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Group>> {
			return this.http.get<Array<Group>>(this.baseUri + 'groups?all=' + all + '&userId=' + userId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a Group
		 * Post groups
		 * @return {Group} OK
		 */
		GroupsPost(requestBody: Group, headersHandler?: () => HttpHeaders): Observable<Group> {
			return this.http.post<Group>(this.baseUri + 'groups', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update a Group
		 * Put groups/{id}
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Group} OK
		 */
		Groups_idPut(id: number, requestBody: Group, headersHandler?: () => HttpHeaders): Observable<Group> {
			return this.http.put<Group>(this.baseUri + 'groups/' + id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete a Group
		 * Delete groups/{id}
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		Groups_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'groups/' + id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch a list of Maintenance
		 * Without params, it returns a list of Maintenance the user has access to
		 * Get maintenance
		 * @param {boolean} all Can only be used by admins or managers to fetch all entities
		 * @param {number} userId Standard users can use this only with their own _userId_
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} deviceId Standard users can use this only with _deviceId_s, they have access to
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} groupId Standard users can use this only with _groupId_s, they have access to
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Maintenance>} OK
		 */
		MaintenanceGetByAllAndUserIdAndDeviceIdAndGroupIdAndRefresh(all: boolean | null | undefined, userId: number | null | undefined, deviceId: number | null | undefined, groupId: number | null | undefined, refresh: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Maintenance>> {
			return this.http.get<Array<Maintenance>>(this.baseUri + 'maintenance?all=' + all + '&userId=' + userId + '&deviceId=' + deviceId + '&groupId=' + groupId + '&refresh=' + refresh, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a Maintenance
		 * Post maintenance
		 * @return {Maintenance} OK
		 */
		MaintenancePost(requestBody: Maintenance, headersHandler?: () => HttpHeaders): Observable<Maintenance> {
			return this.http.post<Maintenance>(this.baseUri + 'maintenance', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update a Maintenance
		 * Put maintenance/{id}
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Maintenance} OK
		 */
		Maintenance_idPut(id: number, requestBody: Maintenance, headersHandler?: () => HttpHeaders): Observable<Maintenance> {
			return this.http.put<Maintenance>(this.baseUri + 'maintenance/' + id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete a Maintenance
		 * Delete maintenance/{id}
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		Maintenance_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'maintenance/' + id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch a list of Notifications
		 * Without params, it returns a list of Notifications the user has access to
		 * Get notifications
		 * @param {boolean} all Can only be used by admins or managers to fetch all entities
		 * @param {number} userId Standard users can use this only with their own _userId_
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} deviceId Standard users can use this only with _deviceId_s, they have access to
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} groupId Standard users can use this only with _groupId_s, they have access to
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Notification>} OK
		 */
		NotificationsGetByAllAndUserIdAndDeviceIdAndGroupIdAndRefresh(all: boolean | null | undefined, userId: number | null | undefined, deviceId: number | null | undefined, groupId: number | null | undefined, refresh: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Notification>> {
			return this.http.get<Array<Notification>>(this.baseUri + 'notifications?all=' + all + '&userId=' + userId + '&deviceId=' + deviceId + '&groupId=' + groupId + '&refresh=' + refresh, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a Notification
		 * Post notifications
		 * @return {Notification} OK
		 */
		NotificationsPost(requestBody: Notification, headersHandler?: () => HttpHeaders): Observable<Notification> {
			return this.http.post<Notification>(this.baseUri + 'notifications', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Send test notification to current user via Email and SMS
		 * Post notifications/test
		 * @return {void} 
		 */
		NotificationsTestPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'notifications/test', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch a list of available Notification types
		 * Get notifications/types
		 * @return {Array<NotificationType>} OK
		 */
		NotificationsTypesGet(headersHandler?: () => HttpHeaders): Observable<Array<NotificationType>> {
			return this.http.get<Array<NotificationType>>(this.baseUri + 'notifications/types', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a Notification
		 * Put notifications/{id}
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Notification} OK
		 */
		Notifications_idPut(id: number, requestBody: Notification, headersHandler?: () => HttpHeaders): Observable<Notification> {
			return this.http.put<Notification>(this.baseUri + 'notifications/' + id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete a Notification
		 * Delete notifications/{id}
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		Notifications_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'notifications/' + id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Link an Object to another Object
		 * Post permissions
		 * @return {Permission} OK
		 */
		PermissionsPost(requestBody: Permission, headersHandler?: () => HttpHeaders): Observable<Permission> {
			return this.http.post<Permission>(this.baseUri + 'permissions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Unlink an Object from another Object
		 * Delete permissions
		 * @return {void} 
		 */
		PermissionsDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'permissions', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetches a list of Positions
		 * Without any params, it returns a list of last known positions for all the user's Devices. _from_ and _to_ fields are not required with _id_
		 * Get positions
		 * @param {number} deviceId _deviceId_ is optional, but requires the _from_ and _to_ parameters when used
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Date} from in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
		 * @param {Date} to in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
		 * @param {number} id To fetch one or more positions. Multiple params can be passed like `id=31&id=42`
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Position>} OK
		 */
		PositionsGetByDeviceIdAndFromAndToAndId(deviceId: number | null | undefined, from: Date | null | undefined, to: Date | null | undefined, id: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Position>> {
			return this.http.get<Array<Position>>(this.baseUri + 'positions?deviceId=' + deviceId + '&from=' + from?.toISOString() + '&to=' + to?.toISOString() + '&id=' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Fetch a list of Events within the time period for the Devices or Groups
		 * At least one _deviceId_ or one _groupId_ must be passed
		 * Get reports/events
		 * @param {Array<string>} type % can be used to return events of all types
		 * @param {Date} from in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
		 * @param {Date} to in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
		 * @return {Array<Event>} OK
		 */
		ReportsEventsGetByDeviceIdAndGroupIdAndTypeAndFromAndTo(deviceId: Array<number> | null | undefined, groupId: Array<number> | null | undefined, type: Array<string> | null | undefined, from: Date, to: Date, headersHandler?: () => HttpHeaders): Observable<Array<Event>> {
			return this.http.get<Array<Event>>(this.baseUri + 'reports/events?' + deviceId?.map(z => `deviceId=${z}`).join('&') + '&' + groupId?.map(z => `groupId=${z}`).join('&') + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&from=' + from.toISOString() + '&to=' + to.toISOString(), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Fetch a list of Positions within the time period for the Devices or Groups
		 * At least one _deviceId_ or one _groupId_ must be passed
		 * Get reports/route
		 * @param {Date} from in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
		 * @param {Date} to in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
		 * @return {Array<Position>} OK
		 */
		ReportsRouteGetByDeviceIdAndGroupIdAndFromAndTo(deviceId: Array<number> | null | undefined, groupId: Array<number> | null | undefined, from: Date, to: Date, headersHandler?: () => HttpHeaders): Observable<Array<Position>> {
			return this.http.get<Array<Position>>(this.baseUri + 'reports/route?' + deviceId?.map(z => `deviceId=${z}`).join('&') + '&' + groupId?.map(z => `groupId=${z}`).join('&') + '&from=' + from.toISOString() + '&to=' + to.toISOString(), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Fetch a list of ReportStops within the time period for the Devices or Groups
		 * At least one _deviceId_ or one _groupId_ must be passed
		 * Get reports/stops
		 * @param {Date} from in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
		 * @param {Date} to in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
		 * @return {Array<ReportStops>} OK
		 */
		ReportsStopsGetByDeviceIdAndGroupIdAndFromAndTo(deviceId: Array<number> | null | undefined, groupId: Array<number> | null | undefined, from: Date, to: Date, headersHandler?: () => HttpHeaders): Observable<Array<ReportStops>> {
			return this.http.get<Array<ReportStops>>(this.baseUri + 'reports/stops?' + deviceId?.map(z => `deviceId=${z}`).join('&') + '&' + groupId?.map(z => `groupId=${z}`).join('&') + '&from=' + from.toISOString() + '&to=' + to.toISOString(), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Fetch a list of ReportSummary within the time period for the Devices or Groups
		 * At least one _deviceId_ or one _groupId_ must be passed
		 * Get reports/summary
		 * @param {Date} from in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
		 * @param {Date} to in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
		 * @return {Array<ReportSummary>} OK
		 */
		ReportsSummaryGetByDeviceIdAndGroupIdAndFromAndTo(deviceId: Array<number> | null | undefined, groupId: Array<number> | null | undefined, from: Date, to: Date, headersHandler?: () => HttpHeaders): Observable<Array<ReportSummary>> {
			return this.http.get<Array<ReportSummary>>(this.baseUri + 'reports/summary?' + deviceId?.map(z => `deviceId=${z}`).join('&') + '&' + groupId?.map(z => `groupId=${z}`).join('&') + '&from=' + from.toISOString() + '&to=' + to.toISOString(), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Fetch a list of ReportTrips within the time period for the Devices or Groups
		 * At least one _deviceId_ or one _groupId_ must be passed
		 * Get reports/trips
		 * @param {Date} from in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
		 * @param {Date} to in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
		 * @return {Array<ReportTrips>} OK
		 */
		ReportsTripsGetByDeviceIdAndGroupIdAndFromAndTo(deviceId: Array<number> | null | undefined, groupId: Array<number> | null | undefined, from: Date, to: Date, headersHandler?: () => HttpHeaders): Observable<Array<ReportTrips>> {
			return this.http.get<Array<ReportTrips>>(this.baseUri + 'reports/trips?' + deviceId?.map(z => `deviceId=${z}`).join('&') + '&' + groupId?.map(z => `groupId=${z}`).join('&') + '&from=' + from.toISOString() + '&to=' + to.toISOString(), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Fetch Server information
		 * Get server
		 * @return {Server} OK
		 */
		ServerGet(headersHandler?: () => HttpHeaders): Observable<Server> {
			return this.http.get<Server>(this.baseUri + 'server', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update Server information
		 * Put server
		 * @return {Server} OK
		 */
		ServerPut(requestBody: Server, headersHandler?: () => HttpHeaders): Observable<Server> {
			return this.http.put<Server>(this.baseUri + 'server', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Fetch Session information
		 * Get session
		 * @return {User} OK
		 */
		SessionGetByToken(token: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<User> {
			return this.http.get<User>(this.baseUri + 'session?token=' + (token == null ? '' : encodeURIComponent(token)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Close the Session
		 * Delete session
		 * @return {void} 
		 */
		SessionDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'session', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch server Statistics
		 * Get statistics
		 * @param {Date} from in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
		 * @param {Date} to in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
		 * @return {Array<Statistics>} OK
		 */
		StatisticsGetByFromAndTo(from: Date, to: Date, headersHandler?: () => HttpHeaders): Observable<Array<Statistics>> {
			return this.http.get<Array<Statistics>>(this.baseUri + 'statistics?from=' + from.toISOString() + '&to=' + to.toISOString(), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Fetch a list of Users
		 * Get users
		 * @param {string} userId Can only be used by admin or manager users
		 * @return {Array<User>} OK
		 */
		UsersGetByUserId(userId: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<User>> {
			return this.http.get<Array<User>>(this.baseUri + 'users?userId=' + (userId == null ? '' : encodeURIComponent(userId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a User
		 * Post users
		 * @return {User} OK
		 */
		UsersPost(requestBody: User, headersHandler?: () => HttpHeaders): Observable<User> {
			return this.http.post<User>(this.baseUri + 'users', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update a User
		 * Put users/{id}
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {User} OK
		 */
		Users_idPut(id: number, requestBody: User, headersHandler?: () => HttpHeaders): Observable<User> {
			return this.http.put<User>(this.baseUri + 'users/' + id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete a User
		 * Delete users/{id}
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		Users_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

}

