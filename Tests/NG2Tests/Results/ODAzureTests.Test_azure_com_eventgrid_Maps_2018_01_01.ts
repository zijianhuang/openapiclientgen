import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Schema of the Data property of an EventGridEvent for a Microsoft.Maps.GeofenceEntered event. */
	export interface MapsGeofenceEnteredEventData {
	}

	/** Schema of the Data property of an EventGridEvent for a Microsoft.Maps.GeofenceEntered event. */
	export interface MapsGeofenceEnteredEventDataFormProperties {
	}
	export function CreateMapsGeofenceEnteredEventDataFormGroup() {
		return new FormGroup<MapsGeofenceEnteredEventDataFormProperties>({
		});

	}


	/** Schema of the Data property of an EventGridEvent for a Geofence event (GeofenceEntered, GeofenceExited, GeofenceResult). */
	export interface MapsGeofenceEventProperties {

		/** Lists of the geometry ID of the geofence which is expired relative to the user time in the request. */
		expiredGeofenceGeometryId?: Array<string>;

		/** Lists the fence geometries that either fully contain the coordinate position or have an overlap with the searchBuffer around the fence. */
		geometries?: Array<MapsGeofenceGeometry>;

		/** Lists of the geometry ID of the geofence which is in invalid period relative to the user time in the request. */
		invalidPeriodGeofenceGeometryId?: Array<string>;

		/** True if at least one event is published to the Azure Maps event subscriber, false if no event is published to the Azure Maps event subscriber. */
		isEventPublished?: boolean | null;
	}

	/** Schema of the Data property of an EventGridEvent for a Geofence event (GeofenceEntered, GeofenceExited, GeofenceResult). */
	export interface MapsGeofenceEventPropertiesFormProperties {

		/** True if at least one event is published to the Azure Maps event subscriber, false if no event is published to the Azure Maps event subscriber. */
		isEventPublished: FormControl<boolean | null | undefined>,
	}
	export function CreateMapsGeofenceEventPropertiesFormGroup() {
		return new FormGroup<MapsGeofenceEventPropertiesFormProperties>({
			isEventPublished: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The geofence geometry. */
	export interface MapsGeofenceGeometry {

		/** ID of the device. */
		deviceId?: string | null;

		/** Distance from the coordinate to the closest border of the geofence. Positive means the coordinate is outside of the geofence. If the coordinate is outside of the geofence, but more than the value of searchBuffer away from the closest geofence border, then the value is 999. Negative means the coordinate is inside of the geofence. If the coordinate is inside the polygon, but more than the value of searchBuffer away from the closest geofencing border,then the value is -999. A value of 999 means that there is great confidence the coordinate is well outside the geofence. A value of -999 means that there is great confidence the coordinate is well within the geofence. */
		distance?: number | null;

		/** The unique ID for the geofence geometry. */
		geometryId?: string | null;

		/** Latitude of the nearest point of the geometry. */
		nearestLat?: number | null;

		/** Longitude of the nearest point of the geometry. */
		nearestLon?: number | null;

		/** The unique id returned from user upload service when uploading a geofence. Will not be included in geofencing post API. */
		udId?: string | null;
	}

	/** The geofence geometry. */
	export interface MapsGeofenceGeometryFormProperties {

		/** ID of the device. */
		deviceId: FormControl<string | null | undefined>,

		/** Distance from the coordinate to the closest border of the geofence. Positive means the coordinate is outside of the geofence. If the coordinate is outside of the geofence, but more than the value of searchBuffer away from the closest geofence border, then the value is 999. Negative means the coordinate is inside of the geofence. If the coordinate is inside the polygon, but more than the value of searchBuffer away from the closest geofencing border,then the value is -999. A value of 999 means that there is great confidence the coordinate is well outside the geofence. A value of -999 means that there is great confidence the coordinate is well within the geofence. */
		distance: FormControl<number | null | undefined>,

		/** The unique ID for the geofence geometry. */
		geometryId: FormControl<string | null | undefined>,

		/** Latitude of the nearest point of the geometry. */
		nearestLat: FormControl<number | null | undefined>,

		/** Longitude of the nearest point of the geometry. */
		nearestLon: FormControl<number | null | undefined>,

		/** The unique id returned from user upload service when uploading a geofence. Will not be included in geofencing post API. */
		udId: FormControl<string | null | undefined>,
	}
	export function CreateMapsGeofenceGeometryFormGroup() {
		return new FormGroup<MapsGeofenceGeometryFormProperties>({
			deviceId: new FormControl<string | null | undefined>(undefined),
			distance: new FormControl<number | null | undefined>(undefined),
			geometryId: new FormControl<string | null | undefined>(undefined),
			nearestLat: new FormControl<number | null | undefined>(undefined),
			nearestLon: new FormControl<number | null | undefined>(undefined),
			udId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema of the Data property of an EventGridEvent for a Microsoft.Maps.GeofenceExited event. */
	export interface MapsGeofenceExitedEventData {
	}

	/** Schema of the Data property of an EventGridEvent for a Microsoft.Maps.GeofenceExited event. */
	export interface MapsGeofenceExitedEventDataFormProperties {
	}
	export function CreateMapsGeofenceExitedEventDataFormGroup() {
		return new FormGroup<MapsGeofenceExitedEventDataFormProperties>({
		});

	}


	/** Schema of the Data property of an EventGridEvent for a Microsoft.Maps.GeofenceResult event. */
	export interface MapsGeofenceResultEventData {
	}

	/** Schema of the Data property of an EventGridEvent for a Microsoft.Maps.GeofenceResult event. */
	export interface MapsGeofenceResultEventDataFormProperties {
	}
	export function CreateMapsGeofenceResultEventDataFormGroup() {
		return new FormGroup<MapsGeofenceResultEventDataFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

}

