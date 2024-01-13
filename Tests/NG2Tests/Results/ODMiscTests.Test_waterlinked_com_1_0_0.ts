import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A list of all POI */
	export interface CreatePoiPayload {

		/**
		 * Depth of POI
		 * Required
		 */
		depth: number;

		/**
		 * Icon of POI
		 * Required
		 */
		icon: string;

		/** Unique POI id */
		id?: number | null;

		/**
		 * Latitude of POI
		 * Required
		 */
		lat: number;

		/**
		 * Longitude of POI
		 * Required
		 */
		lng: number;

		/**
		 * Name of POI
		 * Required
		 */
		name: string;

		/**
		 * Visibility of POI
		 * Required
		 */
		visible: boolean;
	}

	/** A list of all POI */
	export interface CreatePoiPayloadFormProperties {

		/**
		 * Depth of POI
		 * Required
		 */
		depth: FormControl<number | null | undefined>,

		/**
		 * Icon of POI
		 * Required
		 */
		icon: FormControl<string | null | undefined>,

		/** Unique POI id */
		id: FormControl<number | null | undefined>,

		/**
		 * Latitude of POI
		 * Required
		 */
		lat: FormControl<number | null | undefined>,

		/**
		 * Longitude of POI
		 * Required
		 */
		lng: FormControl<number | null | undefined>,

		/**
		 * Name of POI
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Visibility of POI
		 * Required
		 */
		visible: FormControl<boolean | null | undefined>,
	}
	export function CreateCreatePoiPayloadFormGroup() {
		return new FormGroup<CreatePoiPayloadFormProperties>({
			depth: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			icon: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined),
			lat: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			lng: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			visible: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Configuration parameters */
	export interface ModifyConfigPayload {

		/** Enable use of antenna */
		antenna_enabled?: boolean | null;

		/**
		 * Channel to use
		 * Required
		 * Minimum: 0
		 * Maximum: 6000
		 */
		channel: number;

		/**
		 * Compass provider setting
		 * Required
		 */
		compass: ModifyConfigPayloadCompass;

		/** Environment setting */
		environment?: ModifyConfigPayloadEnvironment | null;

		/** Enable external PPS input to master */
		external_pps_enabled?: boolean | null;

		/**
		 * GPS provider setting
		 * Required
		 */
		gps: ModifyConfigPayloadCompass;

		/** Enable IMU input from vehicle */
		imu_vehicle_enabled?: boolean | null;

		/**
		 * Locator type in use
		 * Required
		 */
		locator_type: ModifyConfigPayloadLocator_type;

		/**
		 * Max range (meters)
		 * Required
		 * Minimum: 0
		 * Maximum: 100
		 */
		range_max_x: number;

		/**
		 * Max range (meters)
		 * Required
		 * Minimum: 0
		 * Maximum: 100
		 */
		range_max_y: number;

		/**
		 * Max range (meters)
		 * Required
		 * Minimum: 1
		 * Maximum: 100
		 */
		range_max_z: number;

		/**
		 * Max range (meters)
		 * Required
		 * Minimum: -100
		 * Maximum: 0
		 */
		range_min_x: number;

		/**
		 * Max range (meters)
		 * Required
		 * Minimum: -100
		 * Maximum: 0
		 */
		range_min_y: number;

		/**
		 * Latitude to use in static mode
		 * Required
		 * Minimum: -90
		 * Maximum: 90
		 */
		static_lat: number;

		/**
		 * Longitude to use in static mode
		 * Required
		 * Minimum: -180
		 * Maximum: 180
		 */
		static_lon: number;

		/**
		 * Orientation/compass reading to use in static mode (degrees)
		 * Required
		 * Minimum: 0
		 * Maximum: 359
		 */
		static_orientation: number;
	}

	/** Configuration parameters */
	export interface ModifyConfigPayloadFormProperties {

		/** Enable use of antenna */
		antenna_enabled: FormControl<boolean | null | undefined>,

		/**
		 * Channel to use
		 * Required
		 * Minimum: 0
		 * Maximum: 6000
		 */
		channel: FormControl<number | null | undefined>,

		/**
		 * Compass provider setting
		 * Required
		 */
		compass: FormControl<ModifyConfigPayloadCompass | null | undefined>,

		/** Environment setting */
		environment: FormControl<ModifyConfigPayloadEnvironment | null | undefined>,

		/** Enable external PPS input to master */
		external_pps_enabled: FormControl<boolean | null | undefined>,

		/**
		 * GPS provider setting
		 * Required
		 */
		gps: FormControl<ModifyConfigPayloadCompass | null | undefined>,

		/** Enable IMU input from vehicle */
		imu_vehicle_enabled: FormControl<boolean | null | undefined>,

		/**
		 * Locator type in use
		 * Required
		 */
		locator_type: FormControl<ModifyConfigPayloadLocator_type | null | undefined>,

		/**
		 * Max range (meters)
		 * Required
		 * Minimum: 0
		 * Maximum: 100
		 */
		range_max_x: FormControl<number | null | undefined>,

		/**
		 * Max range (meters)
		 * Required
		 * Minimum: 0
		 * Maximum: 100
		 */
		range_max_y: FormControl<number | null | undefined>,

		/**
		 * Max range (meters)
		 * Required
		 * Minimum: 1
		 * Maximum: 100
		 */
		range_max_z: FormControl<number | null | undefined>,

		/**
		 * Max range (meters)
		 * Required
		 * Minimum: -100
		 * Maximum: 0
		 */
		range_min_x: FormControl<number | null | undefined>,

		/**
		 * Max range (meters)
		 * Required
		 * Minimum: -100
		 * Maximum: 0
		 */
		range_min_y: FormControl<number | null | undefined>,

		/**
		 * Latitude to use in static mode
		 * Required
		 * Minimum: -90
		 * Maximum: 90
		 */
		static_lat: FormControl<number | null | undefined>,

		/**
		 * Longitude to use in static mode
		 * Required
		 * Minimum: -180
		 * Maximum: 180
		 */
		static_lon: FormControl<number | null | undefined>,

		/**
		 * Orientation/compass reading to use in static mode (degrees)
		 * Required
		 * Minimum: 0
		 * Maximum: 359
		 */
		static_orientation: FormControl<number | null | undefined>,
	}
	export function CreateModifyConfigPayloadFormGroup() {
		return new FormGroup<ModifyConfigPayloadFormProperties>({
			antenna_enabled: new FormControl<boolean | null | undefined>(undefined),
			channel: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(6000)]),
			compass: new FormControl<ModifyConfigPayloadCompass | null | undefined>(undefined, [Validators.required]),
			environment: new FormControl<ModifyConfigPayloadEnvironment | null | undefined>(undefined),
			external_pps_enabled: new FormControl<boolean | null | undefined>(undefined),
			gps: new FormControl<ModifyConfigPayloadCompass | null | undefined>(undefined, [Validators.required]),
			imu_vehicle_enabled: new FormControl<boolean | null | undefined>(undefined),
			locator_type: new FormControl<ModifyConfigPayloadLocator_type | null | undefined>(undefined, [Validators.required]),
			range_max_x: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(100)]),
			range_max_y: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(100)]),
			range_max_z: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(100)]),
			range_min_x: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-100), Validators.max(0)]),
			range_min_y: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-100), Validators.max(0)]),
			static_lat: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-90), Validators.max(90)]),
			static_lon: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-180), Validators.max(180)]),
			static_orientation: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(359)]),
		});

	}

	export enum ModifyConfigPayloadCompass { onboard = 0, static = 1, external = 2 }

	export enum ModifyConfigPayloadEnvironment { reflective = 0, openwater = 1 }

	export enum ModifyConfigPayloadLocator_type { d1 = 0, a1 = 1, s1 = 2, p1 = 3, u1 = 4 }


	/** Configuration parameters */
	export interface ModifyIPConfigPayload {

		/**
		 * IP address to use
		 * Required
		 */
		address: string;

		/**
		 * DNS to use
		 * Required
		 */
		dns: string;

		/**
		 * Gateway to use
		 * Required
		 */
		gateway: string;

		/**
		 * Prefix to use
		 * Required
		 * Minimum: 1
		 * Maximum: 31
		 */
		prefix: number;
	}

	/** Configuration parameters */
	export interface ModifyIPConfigPayloadFormProperties {

		/**
		 * IP address to use
		 * Required
		 */
		address: FormControl<string | null | undefined>,

		/**
		 * DNS to use
		 * Required
		 */
		dns: FormControl<string | null | undefined>,

		/**
		 * Gateway to use
		 * Required
		 */
		gateway: FormControl<string | null | undefined>,

		/**
		 * Prefix to use
		 * Required
		 * Minimum: 1
		 * Maximum: 31
		 */
		prefix: FormControl<number | null | undefined>,
	}
	export function CreateModifyIPConfigPayloadFormGroup() {
		return new FormGroup<ModifyIPConfigPayloadFormProperties>({
			address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dns: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gateway: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			prefix: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(31)]),
		});

	}


	/** A receiver configuration */
	export interface ModifyReceiverConfigPayload {

		/**
		 * Unique receiver identifier
		 * Required
		 */
		id: number;

		/**
		 * Configured X position relative to master electronics (meter)
		 * Required
		 */
		x: number;

		/**
		 * Configured Y position relative to master electronics (meter)
		 * Required
		 */
		y: number;

		/**
		 * Configured Z position relative to master electronics (meter)
		 * Required
		 */
		z: number;
	}

	/** A receiver configuration */
	export interface ModifyReceiverConfigPayloadFormProperties {

		/**
		 * Unique receiver identifier
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Configured X position relative to master electronics (meter)
		 * Required
		 */
		x: FormControl<number | null | undefined>,

		/**
		 * Configured Y position relative to master electronics (meter)
		 * Required
		 */
		y: FormControl<number | null | undefined>,

		/**
		 * Configured Z position relative to master electronics (meter)
		 * Required
		 */
		z: FormControl<number | null | undefined>,
	}
	export function CreateModifyReceiverConfigPayloadFormGroup() {
		return new FormGroup<ModifyReceiverConfigPayloadFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			x: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			y: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			z: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Current locator depth and temperature */
	export interface SetDepthExternalPayload {

		/**
		 * Curent depth (meter)
		 * Required
		 * Minimum: 0
		 * Maximum: 100
		 */
		depth: number;

		/**
		 * Current water temperature (C)
		 * Required
		 * Minimum: -10
		 * Maximum: 60
		 */
		temp: number;
	}

	/** Current locator depth and temperature */
	export interface SetDepthExternalPayloadFormProperties {

		/**
		 * Curent depth (meter)
		 * Required
		 * Minimum: 0
		 * Maximum: 100
		 */
		depth: FormControl<number | null | undefined>,

		/**
		 * Current water temperature (C)
		 * Required
		 * Minimum: -10
		 * Maximum: 60
		 */
		temp: FormControl<number | null | undefined>,
	}
	export function CreateSetDepthExternalPayloadFormGroup() {
		return new FormGroup<SetDepthExternalPayloadFormProperties>({
			depth: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(100)]),
			temp: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-10), Validators.max(60)]),
		});

	}


	/** Global master position from external source */
	export interface SetMasterExternalPayload {

		/**
		 * Course over ground (degrees). -1 means no data.
		 * Minimum: -1
		 * Maximum: 359.999
		 */
		cog?: number | null;

		/**
		 * Fix quality. 0 if no data.
		 * Minimum: 0
		 */
		fix_quality?: number | null;

		/**
		 * Horizontal dilution of precision. -1 means no data.
		 * Minimum: -1
		 */
		hdop?: number | null;

		/**
		 * Current Latitude
		 * Required
		 * Minimum: -90
		 * Maximum: 90
		 */
		lat: number;

		/**
		 * Current Longitude
		 * Required
		 * Minimum: -180
		 * Maximum: 180
		 */
		lon: number;

		/**
		 * Number of satellites. -1 means no data.
		 * Minimum: -1
		 */
		numsats?: number | null;

		/**
		 * Current orientation/compass heading (degrees)
		 * Required
		 * Minimum: 0
		 * Maximum: 359.999
		 */
		orientation: number;

		/**
		 * Speed over ground (km/h). -1 means no data.
		 * Minimum: -1
		 */
		sog?: number | null;
	}

	/** Global master position from external source */
	export interface SetMasterExternalPayloadFormProperties {

		/**
		 * Course over ground (degrees). -1 means no data.
		 * Minimum: -1
		 * Maximum: 359.999
		 */
		cog: FormControl<number | null | undefined>,

		/**
		 * Fix quality. 0 if no data.
		 * Minimum: 0
		 */
		fix_quality: FormControl<number | null | undefined>,

		/**
		 * Horizontal dilution of precision. -1 means no data.
		 * Minimum: -1
		 */
		hdop: FormControl<number | null | undefined>,

		/**
		 * Current Latitude
		 * Required
		 * Minimum: -90
		 * Maximum: 90
		 */
		lat: FormControl<number | null | undefined>,

		/**
		 * Current Longitude
		 * Required
		 * Minimum: -180
		 * Maximum: 180
		 */
		lon: FormControl<number | null | undefined>,

		/**
		 * Number of satellites. -1 means no data.
		 * Minimum: -1
		 */
		numsats: FormControl<number | null | undefined>,

		/**
		 * Current orientation/compass heading (degrees)
		 * Required
		 * Minimum: 0
		 * Maximum: 359.999
		 */
		orientation: FormControl<number | null | undefined>,

		/**
		 * Speed over ground (km/h). -1 means no data.
		 * Minimum: -1
		 */
		sog: FormControl<number | null | undefined>,
	}
	export function CreateSetMasterExternalPayloadFormGroup() {
		return new FormGroup<SetMasterExternalPayloadFormProperties>({
			cog: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(359.999)]),
			fix_quality: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			hdop: new FormControl<number | null | undefined>(undefined, [Validators.min(-1)]),
			lat: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-90), Validators.max(90)]),
			lon: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-180), Validators.max(180)]),
			numsats: new FormControl<number | null | undefined>(undefined, [Validators.min(-1)]),
			orientation: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(359.999)]),
			sog: new FormControl<number | null | undefined>(undefined, [Validators.min(-1)]),
		});

	}


	/** Set current compass heading of ROV/locator */
	export interface SetOrientationExternalPayload {

		/**
		 * Current orientation/compass heading (degrees). -1 means no orientation set
		 * Required
		 * Minimum: -1
		 * Maximum: 359.999
		 */
		orientation: number;
	}

	/** Set current compass heading of ROV/locator */
	export interface SetOrientationExternalPayloadFormProperties {

		/**
		 * Current orientation/compass heading (degrees). -1 means no orientation set
		 * Required
		 * Minimum: -1
		 * Maximum: 359.999
		 */
		orientation: FormControl<number | null | undefined>,
	}
	export function CreateSetOrientationExternalPayloadFormGroup() {
		return new FormGroup<SetOrientationExternalPayloadFormProperties>({
			orientation: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-1), Validators.max(359.999)]),
		});

	}


	/** Set current rotation and acceleration of vehicle */
	export interface SetVehicleIMUExternalPayload {

		/**
		 * Current pitch of vehicle(degrees).
		 * Required
		 * Minimum: -90
		 * Maximum: 90
		 */
		pitch: number;

		/**
		 * Current roll of vehicle(degrees).
		 * Required
		 * Minimum: -180
		 * Maximum: 180
		 */
		roll: number;

		/**
		 * Current acceleration in x-axis of vehicle.
		 * Required
		 * Minimum: -20
		 * Maximum: 20
		 */
		x: number;

		/**
		 * Current acceleration in y-axis of vehicle.
		 * Required
		 * Minimum: -20
		 * Maximum: 20
		 */
		y: number;

		/**
		 * Current yaw of vehicle(degrees).
		 * Required
		 * Minimum: -180
		 * Maximum: 180
		 */
		yaw: number;

		/**
		 * Current acceleration in z-axis of vehicle.
		 * Required
		 * Minimum: -20
		 * Maximum: 20
		 */
		z: number;
	}

	/** Set current rotation and acceleration of vehicle */
	export interface SetVehicleIMUExternalPayloadFormProperties {

		/**
		 * Current pitch of vehicle(degrees).
		 * Required
		 * Minimum: -90
		 * Maximum: 90
		 */
		pitch: FormControl<number | null | undefined>,

		/**
		 * Current roll of vehicle(degrees).
		 * Required
		 * Minimum: -180
		 * Maximum: 180
		 */
		roll: FormControl<number | null | undefined>,

		/**
		 * Current acceleration in x-axis of vehicle.
		 * Required
		 * Minimum: -20
		 * Maximum: 20
		 */
		x: FormControl<number | null | undefined>,

		/**
		 * Current acceleration in y-axis of vehicle.
		 * Required
		 * Minimum: -20
		 * Maximum: 20
		 */
		y: FormControl<number | null | undefined>,

		/**
		 * Current yaw of vehicle(degrees).
		 * Required
		 * Minimum: -180
		 * Maximum: 180
		 */
		yaw: FormControl<number | null | undefined>,

		/**
		 * Current acceleration in z-axis of vehicle.
		 * Required
		 * Minimum: -20
		 * Maximum: 20
		 */
		z: FormControl<number | null | undefined>,
	}
	export function CreateSetVehicleIMUExternalPayloadFormGroup() {
		return new FormGroup<SetVehicleIMUExternalPayloadFormProperties>({
			pitch: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-90), Validators.max(90)]),
			roll: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-180), Validators.max(180)]),
			x: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-20), Validators.max(20)]),
			y: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-20), Validators.max(20)]),
			yaw: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-180), Validators.max(180)]),
			z: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-20), Validators.max(20)]),
		});

	}


	/** A list of all POI */
	export interface UpdatePoiPayload {

		/**
		 * Depth of POI
		 * Required
		 */
		depth: number;

		/**
		 * Icon of POI
		 * Required
		 */
		icon: string;

		/** Unique POI id */
		id?: number | null;

		/**
		 * Latitude of POI
		 * Required
		 */
		lat: number;

		/**
		 * Longitude of POI
		 * Required
		 */
		lng: number;

		/**
		 * Name of POI
		 * Required
		 */
		name: string;

		/**
		 * Visibility of POI
		 * Required
		 */
		visible: boolean;
	}

	/** A list of all POI */
	export interface UpdatePoiPayloadFormProperties {

		/**
		 * Depth of POI
		 * Required
		 */
		depth: FormControl<number | null | undefined>,

		/**
		 * Icon of POI
		 * Required
		 */
		icon: FormControl<string | null | undefined>,

		/** Unique POI id */
		id: FormControl<number | null | undefined>,

		/**
		 * Latitude of POI
		 * Required
		 */
		lat: FormControl<number | null | undefined>,

		/**
		 * Longitude of POI
		 * Required
		 */
		lng: FormControl<number | null | undefined>,

		/**
		 * Name of POI
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Visibility of POI
		 * Required
		 */
		visible: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdatePoiPayloadFormGroup() {
		return new FormGroup<UpdatePoiPayloadFormProperties>({
			depth: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			icon: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined),
			lat: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			lng: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			visible: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** About information (default view) */
	export interface WaterlinkedAbout {

		/**
		 * Chip identifier
		 * Required
		 */
		chipid: string;

		/**
		 * Detailed Web Server version string
		 * Required
		 */
		version: string;

		/**
		 * Short Web Server version string
		 * Required
		 */
		version_short: string;
	}

	/** About information (default view) */
	export interface WaterlinkedAboutFormProperties {

		/**
		 * Chip identifier
		 * Required
		 */
		chipid: FormControl<string | null | undefined>,

		/**
		 * Detailed Web Server version string
		 * Required
		 */
		version: FormControl<string | null | undefined>,

		/**
		 * Short Web Server version string
		 * Required
		 */
		version_short: FormControl<string | null | undefined>,
	}
	export function CreateWaterlinkedAboutFormGroup() {
		return new FormGroup<WaterlinkedAboutFormProperties>({
			chipid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version_short: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Current relative Locator position (default view) */
	export interface WaterlinkedAccousticPosition {

		/**
		 * Current acoustic position accuracy (meter)
		 * Required
		 * Minimum: 0
		 */
		std: number;

		/**
		 * Current acoustic temperature (C)
		 * Required
		 */
		temp: number;

		/**
		 * Current acoustic x position relative to master electronics (meter)
		 * Required
		 */
		x: number;

		/**
		 * Current acoustic y position relative to master electronics (meter)
		 * Required
		 */
		y: number;

		/**
		 * Current acoustic z position (depth) relative to master electronics (meter)
		 * Required
		 * Minimum: 0
		 */
		z: number;
	}

	/** Current relative Locator position (default view) */
	export interface WaterlinkedAccousticPositionFormProperties {

		/**
		 * Current acoustic position accuracy (meter)
		 * Required
		 * Minimum: 0
		 */
		std: FormControl<number | null | undefined>,

		/**
		 * Current acoustic temperature (C)
		 * Required
		 */
		temp: FormControl<number | null | undefined>,

		/**
		 * Current acoustic x position relative to master electronics (meter)
		 * Required
		 */
		x: FormControl<number | null | undefined>,

		/**
		 * Current acoustic y position relative to master electronics (meter)
		 * Required
		 */
		y: FormControl<number | null | undefined>,

		/**
		 * Current acoustic z position (depth) relative to master electronics (meter)
		 * Required
		 * Minimum: 0
		 */
		z: FormControl<number | null | undefined>,
	}
	export function CreateWaterlinkedAccousticPositionFormGroup() {
		return new FormGroup<WaterlinkedAccousticPositionFormProperties>({
			std: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			temp: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			x: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			y: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			z: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}


	/** Configuration parameters (default view) */
	export interface WaterlinkedConfiguration {

		/** Enable use of antenna */
		antenna_enabled?: boolean | null;

		/**
		 * Channel to use
		 * Required
		 * Minimum: 0
		 * Maximum: 6000
		 */
		channel: number;

		/**
		 * Compass provider setting
		 * Required
		 */
		compass: ModifyConfigPayloadCompass;

		/** Environment setting */
		environment?: ModifyConfigPayloadEnvironment | null;

		/** Enable external PPS input to master */
		external_pps_enabled?: boolean | null;

		/**
		 * GPS provider setting
		 * Required
		 */
		gps: ModifyConfigPayloadCompass;

		/** Enable IMU input from vehicle */
		imu_vehicle_enabled?: boolean | null;

		/**
		 * Locator type in use
		 * Required
		 */
		locator_type: ModifyConfigPayloadLocator_type;

		/**
		 * Max range (meters)
		 * Required
		 * Minimum: 0
		 * Maximum: 100
		 */
		range_max_x: number;

		/**
		 * Max range (meters)
		 * Required
		 * Minimum: 0
		 * Maximum: 100
		 */
		range_max_y: number;

		/**
		 * Max range (meters)
		 * Required
		 * Minimum: 1
		 * Maximum: 100
		 */
		range_max_z: number;

		/**
		 * Max range (meters)
		 * Required
		 * Minimum: -100
		 * Maximum: 0
		 */
		range_min_x: number;

		/**
		 * Max range (meters)
		 * Required
		 * Minimum: -100
		 * Maximum: 0
		 */
		range_min_y: number;

		/**
		 * Latitude to use in static mode
		 * Required
		 * Minimum: -90
		 * Maximum: 90
		 */
		static_lat: number;

		/**
		 * Longitude to use in static mode
		 * Required
		 * Minimum: -180
		 * Maximum: 180
		 */
		static_lon: number;

		/**
		 * Orientation/compass reading to use in static mode (degrees)
		 * Required
		 * Minimum: 0
		 * Maximum: 359
		 */
		static_orientation: number;
	}

	/** Configuration parameters (default view) */
	export interface WaterlinkedConfigurationFormProperties {

		/** Enable use of antenna */
		antenna_enabled: FormControl<boolean | null | undefined>,

		/**
		 * Channel to use
		 * Required
		 * Minimum: 0
		 * Maximum: 6000
		 */
		channel: FormControl<number | null | undefined>,

		/**
		 * Compass provider setting
		 * Required
		 */
		compass: FormControl<ModifyConfigPayloadCompass | null | undefined>,

		/** Environment setting */
		environment: FormControl<ModifyConfigPayloadEnvironment | null | undefined>,

		/** Enable external PPS input to master */
		external_pps_enabled: FormControl<boolean | null | undefined>,

		/**
		 * GPS provider setting
		 * Required
		 */
		gps: FormControl<ModifyConfigPayloadCompass | null | undefined>,

		/** Enable IMU input from vehicle */
		imu_vehicle_enabled: FormControl<boolean | null | undefined>,

		/**
		 * Locator type in use
		 * Required
		 */
		locator_type: FormControl<ModifyConfigPayloadLocator_type | null | undefined>,

		/**
		 * Max range (meters)
		 * Required
		 * Minimum: 0
		 * Maximum: 100
		 */
		range_max_x: FormControl<number | null | undefined>,

		/**
		 * Max range (meters)
		 * Required
		 * Minimum: 0
		 * Maximum: 100
		 */
		range_max_y: FormControl<number | null | undefined>,

		/**
		 * Max range (meters)
		 * Required
		 * Minimum: 1
		 * Maximum: 100
		 */
		range_max_z: FormControl<number | null | undefined>,

		/**
		 * Max range (meters)
		 * Required
		 * Minimum: -100
		 * Maximum: 0
		 */
		range_min_x: FormControl<number | null | undefined>,

		/**
		 * Max range (meters)
		 * Required
		 * Minimum: -100
		 * Maximum: 0
		 */
		range_min_y: FormControl<number | null | undefined>,

		/**
		 * Latitude to use in static mode
		 * Required
		 * Minimum: -90
		 * Maximum: 90
		 */
		static_lat: FormControl<number | null | undefined>,

		/**
		 * Longitude to use in static mode
		 * Required
		 * Minimum: -180
		 * Maximum: 180
		 */
		static_lon: FormControl<number | null | undefined>,

		/**
		 * Orientation/compass reading to use in static mode (degrees)
		 * Required
		 * Minimum: 0
		 * Maximum: 359
		 */
		static_orientation: FormControl<number | null | undefined>,
	}
	export function CreateWaterlinkedConfigurationFormGroup() {
		return new FormGroup<WaterlinkedConfigurationFormProperties>({
			antenna_enabled: new FormControl<boolean | null | undefined>(undefined),
			channel: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(6000)]),
			compass: new FormControl<ModifyConfigPayloadCompass | null | undefined>(undefined, [Validators.required]),
			environment: new FormControl<ModifyConfigPayloadEnvironment | null | undefined>(undefined),
			external_pps_enabled: new FormControl<boolean | null | undefined>(undefined),
			gps: new FormControl<ModifyConfigPayloadCompass | null | undefined>(undefined, [Validators.required]),
			imu_vehicle_enabled: new FormControl<boolean | null | undefined>(undefined),
			locator_type: new FormControl<ModifyConfigPayloadLocator_type | null | undefined>(undefined, [Validators.required]),
			range_max_x: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(100)]),
			range_max_y: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(100)]),
			range_max_z: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(100)]),
			range_min_x: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-100), Validators.max(0)]),
			range_min_y: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-100), Validators.max(0)]),
			static_lat: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-90), Validators.max(90)]),
			static_lon: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-180), Validators.max(180)]),
			static_orientation: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(359)]),
		});

	}


	/** Configuration parameters (default view) */
	export interface WaterlinkedIp_config {

		/**
		 * IP address to use
		 * Required
		 */
		address: string;

		/**
		 * DNS to use
		 * Required
		 */
		dns: string;

		/**
		 * Gateway to use
		 * Required
		 */
		gateway: string;

		/**
		 * Prefix to use
		 * Required
		 * Minimum: 1
		 * Maximum: 31
		 */
		prefix: number;
	}

	/** Configuration parameters (default view) */
	export interface WaterlinkedIp_configFormProperties {

		/**
		 * IP address to use
		 * Required
		 */
		address: FormControl<string | null | undefined>,

		/**
		 * DNS to use
		 * Required
		 */
		dns: FormControl<string | null | undefined>,

		/**
		 * Gateway to use
		 * Required
		 */
		gateway: FormControl<string | null | undefined>,

		/**
		 * Prefix to use
		 * Required
		 * Minimum: 1
		 * Maximum: 31
		 */
		prefix: FormControl<number | null | undefined>,
	}
	export function CreateWaterlinkedIp_configFormGroup() {
		return new FormGroup<WaterlinkedIp_configFormProperties>({
			address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dns: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gateway: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			prefix: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(31)]),
		});

	}


	/** Response from server on operations performed (default view) */
	export interface WaterlinkedOperation_response {

		/** Error if it occurs */
		error?: string | null;

		/**
		 * Status of operation
		 * Required
		 */
		success: boolean;
	}

	/** Response from server on operations performed (default view) */
	export interface WaterlinkedOperation_responseFormProperties {

		/** Error if it occurs */
		error: FormControl<string | null | undefined>,

		/**
		 * Status of operation
		 * Required
		 */
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateWaterlinkedOperation_responseFormGroup() {
		return new FormGroup<WaterlinkedOperation_responseFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A list of all POI (default view) */
	export interface WaterlinkedPoi {

		/**
		 * Depth of POI
		 * Required
		 */
		depth: number;

		/**
		 * Icon of POI
		 * Required
		 */
		icon: string;

		/** Unique POI id */
		id?: number | null;

		/**
		 * Latitude of POI
		 * Required
		 */
		lat: number;

		/**
		 * Longitude of POI
		 * Required
		 */
		lng: number;

		/**
		 * Name of POI
		 * Required
		 */
		name: string;

		/**
		 * Visibility of POI
		 * Required
		 */
		visible: boolean;
	}

	/** A list of all POI (default view) */
	export interface WaterlinkedPoiFormProperties {

		/**
		 * Depth of POI
		 * Required
		 */
		depth: FormControl<number | null | undefined>,

		/**
		 * Icon of POI
		 * Required
		 */
		icon: FormControl<string | null | undefined>,

		/** Unique POI id */
		id: FormControl<number | null | undefined>,

		/**
		 * Latitude of POI
		 * Required
		 */
		lat: FormControl<number | null | undefined>,

		/**
		 * Longitude of POI
		 * Required
		 */
		lng: FormControl<number | null | undefined>,

		/**
		 * Name of POI
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Visibility of POI
		 * Required
		 */
		visible: FormControl<boolean | null | undefined>,
	}
	export function CreateWaterlinkedPoiFormGroup() {
		return new FormGroup<WaterlinkedPoiFormProperties>({
			depth: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			icon: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined),
			lat: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			lng: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			visible: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A receiver configuration (default view) */
	export interface WaterlinkedReceiver {

		/**
		 * Unique receiver identifier
		 * Required
		 */
		id: number;

		/**
		 * Configured X position relative to master electronics (meter)
		 * Required
		 */
		x: number;

		/**
		 * Configured Y position relative to master electronics (meter)
		 * Required
		 */
		y: number;

		/**
		 * Configured Z position relative to master electronics (meter)
		 * Required
		 */
		z: number;
	}

	/** A receiver configuration (default view) */
	export interface WaterlinkedReceiverFormProperties {

		/**
		 * Unique receiver identifier
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Configured X position relative to master electronics (meter)
		 * Required
		 */
		x: FormControl<number | null | undefined>,

		/**
		 * Configured Y position relative to master electronics (meter)
		 * Required
		 */
		y: FormControl<number | null | undefined>,

		/**
		 * Configured Z position relative to master electronics (meter)
		 * Required
		 */
		z: FormControl<number | null | undefined>,
	}
	export function CreateWaterlinkedReceiverFormGroup() {
		return new FormGroup<WaterlinkedReceiverFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			x: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			y: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			z: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Status information (default view) */
	export interface WaterlinkedStatus {

		/**
		 * Locator battery level in percent. -1 if not available or applicable
		 * Required
		 * Minimum: -1
		 * Maximum: 100
		 */
		battery: number;

		/**
		 * GPS lock status
		 * Required
		 * Minimum: 0
		 * Maximum: 3
		 */
		gps: number;

		/**
		 * IMU calibration status
		 * Required
		 * Minimum: 0
		 * Maximum: 3
		 */
		imu: number;
	}

	/** Status information (default view) */
	export interface WaterlinkedStatusFormProperties {

		/**
		 * Locator battery level in percent. -1 if not available or applicable
		 * Required
		 * Minimum: -1
		 * Maximum: 100
		 */
		battery: FormControl<number | null | undefined>,

		/**
		 * GPS lock status
		 * Required
		 * Minimum: 0
		 * Maximum: 3
		 */
		gps: FormControl<number | null | undefined>,

		/**
		 * IMU calibration status
		 * Required
		 * Minimum: 0
		 * Maximum: 3
		 */
		imu: FormControl<number | null | undefined>,
	}
	export function CreateWaterlinkedStatusFormGroup() {
		return new FormGroup<WaterlinkedStatusFormProperties>({
			battery: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-1), Validators.max(100)]),
			gps: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(3)]),
			imu: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(3)]),
		});

	}


	/** Temperature information (default view) */
	export interface WaterlinkedTemperature {

		/**
		 * Board temperature (C)
		 * Required
		 */
		board: number;

		/**
		 * Water temperature (C)
		 * Required
		 */
		water: number;
	}

	/** Temperature information (default view) */
	export interface WaterlinkedTemperatureFormProperties {

		/**
		 * Board temperature (C)
		 * Required
		 */
		board: FormControl<number | null | undefined>,

		/**
		 * Water temperature (C)
		 * Required
		 */
		water: FormControl<number | null | undefined>,
	}
	export function CreateWaterlinkedTemperatureFormGroup() {
		return new FormGroup<WaterlinkedTemperatureFormProperties>({
			board: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			water: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Set current compass heading of ROV/locator (default view) */
	export interface WlExternalLocatorOrientation {

		/**
		 * Current orientation/compass heading (degrees). -1 means no orientation set
		 * Required
		 * Minimum: -1
		 * Maximum: 359.999
		 */
		orientation: number;
	}

	/** Set current compass heading of ROV/locator (default view) */
	export interface WlExternalLocatorOrientationFormProperties {

		/**
		 * Current orientation/compass heading (degrees). -1 means no orientation set
		 * Required
		 * Minimum: -1
		 * Maximum: 359.999
		 */
		orientation: FormControl<number | null | undefined>,
	}
	export function CreateWlExternalLocatorOrientationFormGroup() {
		return new FormGroup<WlExternalLocatorOrientationFormProperties>({
			orientation: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-1), Validators.max(359.999)]),
		});

	}


	/** Set current rotation and acceleration of vehicle (default view) */
	export interface WlExternalVehicleImu {

		/**
		 * Current pitch of vehicle(degrees).
		 * Required
		 * Minimum: -90
		 * Maximum: 90
		 */
		pitch: number;

		/**
		 * Current roll of vehicle(degrees).
		 * Required
		 * Minimum: -180
		 * Maximum: 180
		 */
		roll: number;

		/**
		 * Current acceleration in x-axis of vehicle.
		 * Required
		 * Minimum: -20
		 * Maximum: 20
		 */
		x: number;

		/**
		 * Current acceleration in y-axis of vehicle.
		 * Required
		 * Minimum: -20
		 * Maximum: 20
		 */
		y: number;

		/**
		 * Current yaw of vehicle(degrees).
		 * Required
		 * Minimum: -180
		 * Maximum: 180
		 */
		yaw: number;

		/**
		 * Current acceleration in z-axis of vehicle.
		 * Required
		 * Minimum: -20
		 * Maximum: 20
		 */
		z: number;
	}

	/** Set current rotation and acceleration of vehicle (default view) */
	export interface WlExternalVehicleImuFormProperties {

		/**
		 * Current pitch of vehicle(degrees).
		 * Required
		 * Minimum: -90
		 * Maximum: 90
		 */
		pitch: FormControl<number | null | undefined>,

		/**
		 * Current roll of vehicle(degrees).
		 * Required
		 * Minimum: -180
		 * Maximum: 180
		 */
		roll: FormControl<number | null | undefined>,

		/**
		 * Current acceleration in x-axis of vehicle.
		 * Required
		 * Minimum: -20
		 * Maximum: 20
		 */
		x: FormControl<number | null | undefined>,

		/**
		 * Current acceleration in y-axis of vehicle.
		 * Required
		 * Minimum: -20
		 * Maximum: 20
		 */
		y: FormControl<number | null | undefined>,

		/**
		 * Current yaw of vehicle(degrees).
		 * Required
		 * Minimum: -180
		 * Maximum: 180
		 */
		yaw: FormControl<number | null | undefined>,

		/**
		 * Current acceleration in z-axis of vehicle.
		 * Required
		 * Minimum: -20
		 * Maximum: 20
		 */
		z: FormControl<number | null | undefined>,
	}
	export function CreateWlExternalVehicleImuFormGroup() {
		return new FormGroup<WlExternalVehicleImuFormProperties>({
			pitch: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-90), Validators.max(90)]),
			roll: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-180), Validators.max(180)]),
			x: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-20), Validators.max(20)]),
			y: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-20), Validators.max(20)]),
			yaw: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-180), Validators.max(180)]),
			z: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-20), Validators.max(20)]),
		});

	}


	/** GPS and IMU position (default view) */
	export interface WlSatellitePosition {

		/**
		 * Course over ground (degrees). -1 means no data.
		 * Required
		 * Minimum: -1
		 * Maximum: 359.999
		 */
		cog: number;

		/**
		 * Fix quality. 0 if no data.
		 * Required
		 * Minimum: 0
		 */
		fix_quality: number;

		/**
		 * Horizontal dilution of precision. -1 means no data.
		 * Required
		 * Minimum: -1
		 */
		hdop: number;

		/**
		 * Current Latitude
		 * Required
		 * Minimum: -90
		 * Maximum: 90
		 */
		lat: number;

		/**
		 * Current Longitude
		 * Required
		 * Minimum: -180
		 * Maximum: 180
		 */
		lon: number;

		/**
		 * Number of satellites. -1 means no data.
		 * Required
		 * Minimum: -1
		 */
		numsats: number;

		/**
		 * Current orientation/compass heading (degrees). -1 means no data.
		 * Required
		 * Minimum: -1
		 * Maximum: 359.999
		 */
		orientation: number;

		/**
		 * Speed over ground (km/h). -1 means no data.
		 * Required
		 * Minimum: -1
		 */
		sog: number;
	}

	/** GPS and IMU position (default view) */
	export interface WlSatellitePositionFormProperties {

		/**
		 * Course over ground (degrees). -1 means no data.
		 * Required
		 * Minimum: -1
		 * Maximum: 359.999
		 */
		cog: FormControl<number | null | undefined>,

		/**
		 * Fix quality. 0 if no data.
		 * Required
		 * Minimum: 0
		 */
		fix_quality: FormControl<number | null | undefined>,

		/**
		 * Horizontal dilution of precision. -1 means no data.
		 * Required
		 * Minimum: -1
		 */
		hdop: FormControl<number | null | undefined>,

		/**
		 * Current Latitude
		 * Required
		 * Minimum: -90
		 * Maximum: 90
		 */
		lat: FormControl<number | null | undefined>,

		/**
		 * Current Longitude
		 * Required
		 * Minimum: -180
		 * Maximum: 180
		 */
		lon: FormControl<number | null | undefined>,

		/**
		 * Number of satellites. -1 means no data.
		 * Required
		 * Minimum: -1
		 */
		numsats: FormControl<number | null | undefined>,

		/**
		 * Current orientation/compass heading (degrees). -1 means no data.
		 * Required
		 * Minimum: -1
		 * Maximum: 359.999
		 */
		orientation: FormControl<number | null | undefined>,

		/**
		 * Speed over ground (km/h). -1 means no data.
		 * Required
		 * Minimum: -1
		 */
		sog: FormControl<number | null | undefined>,
	}
	export function CreateWlSatellitePositionFormGroup() {
		return new FormGroup<WlSatellitePositionFormProperties>({
			cog: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-1), Validators.max(359.999)]),
			fix_quality: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			hdop: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-1)]),
			lat: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-90), Validators.max(90)]),
			lon: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-180), Validators.max(180)]),
			numsats: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-1)]),
			orientation: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-1), Validators.max(359.999)]),
			sog: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-1)]),
		});

	}


	/** Warning message (default view) */
	export interface WlWarning {

		/**
		 * Identifier
		 * Required
		 */
		id: string;

		/**
		 * Message
		 * Required
		 */
		message: string;

		/**
		 * Severity
		 * Required
		 */
		severity: string;
	}

	/** Warning message (default view) */
	export interface WlWarningFormProperties {

		/**
		 * Identifier
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Message
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/**
		 * Severity
		 * Required
		 */
		severity: FormControl<string | null | undefined>,
	}
	export function CreateWlWarningFormGroup() {
		return new FormGroup<WlWarningFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			severity: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Returns supported api versions (default view) */
	export interface WupdaterApiversion {

		/**
		 * Supported api versions
		 * Required
		 */
		versions: Array<string>;
	}

	/** Returns supported api versions (default view) */
	export interface WupdaterApiversionFormProperties {
	}
	export function CreateWupdaterApiversionFormGroup() {
		return new FormGroup<WupdaterApiversionFormProperties>({
		});

	}


	/** Error response media type (default view) */
	export interface Error {

		/** an application-specific error code, expressed as a string value. */
		code?: string | null;

		/** a human-readable explanation specific to this occurrence of the problem. */
		detail?: string | null;

		/** a unique identifier for this particular occurrence of the problem. */
		id?: string | null;

		/** a meta object containing non-standard meta-information about the error. */
		meta?: string | null;

		/** the HTTP status code applicable to this problem, expressed as a string value. */
		status?: string | null;
	}

	/** Error response media type (default view) */
	export interface ErrorFormProperties {

		/** an application-specific error code, expressed as a string value. */
		code: FormControl<string | null | undefined>,

		/** a human-readable explanation specific to this occurrence of the problem. */
		detail: FormControl<string | null | undefined>,

		/** a unique identifier for this particular occurrence of the problem. */
		id: FormControl<string | null | undefined>,

		/** a meta object containing non-standard meta-information about the error. */
		meta: FormControl<string | null | undefined>,

		/** the HTTP status code applicable to this problem, expressed as a string value. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			detail: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			meta: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * ApiVersion about
		 * Get api/
		 * @return {void} OK
		 */
		ApiGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get about
		 * Get about information
		 * Get api/v1/about
		 * @return {void} OK
		 */
		ApiV1AboutGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/about', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Status about
		 * Get current IMU and GPS status
		 * Get api/v1/about/status
		 * @return {void} OK
		 */
		ApiV1AboutStatusGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/about/status', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Temperature about
		 * Get board temperature
		 * Get api/v1/about/temperature
		 * @return {void} OK
		 */
		ApiV1AboutTemperatureGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/about/temperature', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get config
		 * Get generic configuration
		 * Get api/v1/config/generic
		 * @return {void} OK
		 */
		ApiV1ConfigGenericGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/config/generic', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Modify config
		 * Modify generic configuration
		 * Put api/v1/config/generic
		 * @param {ModifyConfigPayload} requestBody Configuration parameters
		 * @return {void} OK
		 */
		ApiV1ConfigGenericPut(requestBody: ModifyConfigPayload, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v1/config/generic', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * GetIP config
		 * Get IP configuration
		 * Get api/v1/config/ip
		 * @return {void} OK
		 */
		ApiV1ConfigIpGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/config/ip', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * ModifyIP config
		 * Modify IP configuration
		 * Put api/v1/config/ip
		 * @param {ModifyIPConfigPayload} requestBody Configuration parameters
		 * @return {void} OK
		 */
		ApiV1ConfigIpPut(requestBody: ModifyIPConfigPayload, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v1/config/ip', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * ListReceiver config
		 * (Re)Load current receiver settings and return them
		 * Get api/v1/config/receivers/
		 * @return {void} Returned list of receivers
		 */
		ApiV1ConfigReceiversGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/config/receivers/', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * ShowReceiver config
		 * Get receiver configuration by id
		 * Get api/v1/config/receivers/{ID}
		 * @param {number} ID Identifier
		 * @return {void} OK
		 */
		ApiV1ConfigReceivers_IDGet(ID: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/config/receivers/' + ID, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * ModifyReceiver config
		 * Modify receiver configuration, does not apply the change until generic modify is called. Calling list will discard changes
		 * Put api/v1/config/receivers/{ID}
		 * @param {number} ID Identifier
		 * @param {ModifyReceiverConfigPayload} requestBody A receiver configuration
		 * @return {void} 
		 */
		ApiV1ConfigReceivers_IDPut(ID: number, requestBody: ModifyReceiverConfigPayload, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v1/config/receivers/' + ID, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * SetDepth external
		 * Set depth from external source. If Locator A1 is used, this is required to get a position
		 * Put api/v1/external/depth
		 * @param {SetDepthExternalPayload} requestBody Current locator depth and temperature
		 * @return {void} OK
		 */
		ApiV1ExternalDepthPut(requestBody: SetDepthExternalPayload, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v1/external/depth', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * GetVehicleIMU external
		 * Get rotation and acceleration of vehicle Locator is mounted on which was previously set
		 * Get api/v1/external/imu
		 * @return {void} OK
		 */
		ApiV1ExternalImuGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/external/imu', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * SetVehicleIMU external
		 * Set rotation and acceleration of vehicle Locator is mounted on. This is used to improve positioning of vehicle
		 * Put api/v1/external/imu
		 * @param {SetVehicleIMUExternalPayload} requestBody Set current rotation and acceleration of vehicle
		 * @return {void} OK
		 */
		ApiV1ExternalImuPut(requestBody: SetVehicleIMUExternalPayload, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v1/external/imu', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * SetMaster external
		 * Set current global position of master electronics from external source. Values are only used if GPS mode is set to use external GPS
		 * Put api/v1/external/master
		 * @param {SetMasterExternalPayload} requestBody Global master position from external source
		 * @return {void} OK
		 */
		ApiV1ExternalMasterPut(requestBody: SetMasterExternalPayload, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v1/external/master', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * GetOrientation external
		 * Get orientation of Vehicle/ROV/Locator set by SetOrientation
		 * Get api/v1/external/orientation
		 * @return {void} OK
		 */
		ApiV1ExternalOrientationGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/external/orientation', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * SetOrientation external
		 * Set orientation/compass heading of Vehicle/ROV/Locator. This is used only for visualization in GUI
		 * Put api/v1/external/orientation
		 * @param {SetOrientationExternalPayload} requestBody Set current compass heading of ROV/locator
		 * @return {void} OK
		 */
		ApiV1ExternalOrientationPut(requestBody: SetOrientationExternalPayload, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v1/external/orientation', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Create poi
		 * Create a new POI
		 * Post api/v1/poi
		 * @param {CreatePoiPayload} requestBody A list of all POI
		 * @return {void} 
		 */
		ApiV1PoiPost(requestBody: CreatePoiPayload, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/poi', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List poi
		 * List all points of interest
		 * Get api/v1/poi/
		 * @return {void} Return list of all POIs
		 */
		ApiV1PoiGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/poi/', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Show poi
		 * Get a POI
		 * Get api/v1/poi/{ID}
		 * @return {void} OK
		 */
		ApiV1Poi_IDGet(ID: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/poi/' + ID, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete poi
		 * Delete api/v1/poi/{ID}
		 * @return {void} 
		 */
		ApiV1Poi_IDDelete(ID: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/poi/' + ID, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update poi
		 * Patch api/v1/poi/{ID}
		 * @param {UpdatePoiPayload} requestBody A list of all POI
		 * @return {void} 
		 */
		ApiV1Poi_IDPatch(ID: number, requestBody: UpdatePoiPayload, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'api/v1/poi/' + ID, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * AcousticFiltered position
		 * Get current Kalman filtered acoustic position relative to master acoustics. Expected update frequency: 4 Hz
		 * Get api/v1/position/acoustic/filtered
		 * @return {void} OK
		 */
		ApiV1PositionAcousticFilteredGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/position/acoustic/filtered', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * AcousticRaw position
		 * Get current unfiltered acoustic position relative to master acoustics. Expected update frequency: 4 Hz
		 * Get api/v1/position/acoustic/raw
		 * @return {void} OK
		 */
		ApiV1PositionAcousticRawGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/position/acoustic/raw', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get position
		 * Get current global position of locator. Locator position is calculated from the current acoustic position and the global position of the master electronics. Expected update frequency: 4 Hz
		 * Get api/v1/position/global
		 * @return {void} OK
		 */
		ApiV1PositionGlobalGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/position/global', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * GetMaster position
		 * Get current global position of master electronics. Expected update frequency: 1 Hz
		 * Get api/v1/position/master
		 * @return {void} OK
		 */
		ApiV1PositionMasterGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/position/master', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get warnings
		 * Get current list of messages
		 * Get api/v1/warnings/
		 * @return {void} OK
		 */
		ApiV1WarningsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/warnings/', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

}

