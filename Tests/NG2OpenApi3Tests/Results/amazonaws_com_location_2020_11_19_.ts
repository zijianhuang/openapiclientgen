import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateTrackerConsumerResponse {
	}
	export interface AssociateTrackerConsumerResponseFormProperties {
	}
	export function CreateAssociateTrackerConsumerResponseFormGroup() {
		return new FormGroup<AssociateTrackerConsumerResponseFormProperties>({
		});

	}

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface BatchDeleteDevicePositionHistoryResponse {

		/** Required */
		Errors: Array<BatchDeleteDevicePositionHistoryError>;
	}
	export interface BatchDeleteDevicePositionHistoryResponseFormProperties {
	}
	export function CreateBatchDeleteDevicePositionHistoryResponseFormGroup() {
		return new FormGroup<BatchDeleteDevicePositionHistoryResponseFormProperties>({
		});

	}


	/** Contains the tracker resource details. */
	export interface BatchDeleteDevicePositionHistoryError {

		/** Required */
		DeviceId: string;

		/**
		 * Contains the batch request error details associated with the request.
		 * Required
		 */
		Error: BatchItemError;
	}

	/** Contains the tracker resource details. */
	export interface BatchDeleteDevicePositionHistoryErrorFormProperties {

		/** Required */
		DeviceId: FormControl<string | null | undefined>,
	}
	export function CreateBatchDeleteDevicePositionHistoryErrorFormGroup() {
		return new FormGroup<BatchDeleteDevicePositionHistoryErrorFormProperties>({
			DeviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the batch request error details associated with the request. */
	export interface BatchItemError {
		Code?: BatchItemErrorCode;
		Message?: string;
	}

	/** Contains the batch request error details associated with the request. */
	export interface BatchItemErrorFormProperties {
		Code: FormControl<BatchItemErrorCode | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateBatchItemErrorFormGroup() {
		return new FormGroup<BatchItemErrorFormProperties>({
			Code: new FormControl<BatchItemErrorCode | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BatchItemErrorCode { AccessDeniedError = 'AccessDeniedError', ConflictError = 'ConflictError', InternalServerError = 'InternalServerError', ResourceNotFoundError = 'ResourceNotFoundError', ThrottlingError = 'ThrottlingError', ValidationError = 'ValidationError' }

	export interface BatchDeleteGeofenceResponse {

		/** Required */
		Errors: Array<BatchDeleteGeofenceError>;
	}
	export interface BatchDeleteGeofenceResponseFormProperties {
	}
	export function CreateBatchDeleteGeofenceResponseFormGroup() {
		return new FormGroup<BatchDeleteGeofenceResponseFormProperties>({
		});

	}


	/** Contains error details for each geofence that failed to delete from the geofence collection. */
	export interface BatchDeleteGeofenceError {

		/** Required */
		Error: BatchItemError;

		/** Required */
		GeofenceId: string;
	}

	/** Contains error details for each geofence that failed to delete from the geofence collection. */
	export interface BatchDeleteGeofenceErrorFormProperties {

		/** Required */
		GeofenceId: FormControl<string | null | undefined>,
	}
	export function CreateBatchDeleteGeofenceErrorFormGroup() {
		return new FormGroup<BatchDeleteGeofenceErrorFormProperties>({
			GeofenceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchEvaluateGeofencesResponse {

		/** Required */
		Errors: Array<BatchEvaluateGeofencesError>;
	}
	export interface BatchEvaluateGeofencesResponseFormProperties {
	}
	export function CreateBatchEvaluateGeofencesResponseFormGroup() {
		return new FormGroup<BatchEvaluateGeofencesResponseFormProperties>({
		});

	}


	/** Contains error details for each device that failed to evaluate its position against the geofences in a given geofence collection. */
	export interface BatchEvaluateGeofencesError {

		/** Required */
		DeviceId: string;

		/** Required */
		Error: BatchItemError;

		/** Required */
		SampleTime: Date;
	}

	/** Contains error details for each device that failed to evaluate its position against the geofences in a given geofence collection. */
	export interface BatchEvaluateGeofencesErrorFormProperties {

		/** Required */
		DeviceId: FormControl<string | null | undefined>,

		/** Required */
		SampleTime: FormControl<Date | null | undefined>,
	}
	export function CreateBatchEvaluateGeofencesErrorFormGroup() {
		return new FormGroup<BatchEvaluateGeofencesErrorFormProperties>({
			DeviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SampleTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the position update details for a device. */
	export interface DevicePositionUpdate {
		Accuracy?: PositionalAccuracy;

		/** Required */
		DeviceId: string;

		/** Required */
		Position: Array<number>;
		PositionProperties?: PropertyMap;

		/** Required */
		SampleTime: Date;
	}

	/** Contains the position update details for a device. */
	export interface DevicePositionUpdateFormProperties {

		/** Required */
		DeviceId: FormControl<string | null | undefined>,

		/** Required */
		SampleTime: FormControl<Date | null | undefined>,
	}
	export function CreateDevicePositionUpdateFormGroup() {
		return new FormGroup<DevicePositionUpdateFormProperties>({
			DeviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SampleTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines the level of certainty of the position. */
	export interface PositionalAccuracy {

		/** Required */
		Horizontal: number;
	}

	/** Defines the level of certainty of the position. */
	export interface PositionalAccuracyFormProperties {

		/** Required */
		Horizontal: FormControl<number | null | undefined>,
	}
	export function CreatePositionalAccuracyFormGroup() {
		return new FormGroup<PositionalAccuracyFormProperties>({
			Horizontal: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PropertyMap {
	}
	export interface PropertyMapFormProperties {
	}
	export function CreatePropertyMapFormGroup() {
		return new FormGroup<PropertyMapFormProperties>({
		});

	}

	export interface BatchGetDevicePositionResponse {

		/** Required */
		DevicePositions: Array<DevicePosition>;

		/** Required */
		Errors: Array<BatchGetDevicePositionError>;
	}
	export interface BatchGetDevicePositionResponseFormProperties {
	}
	export function CreateBatchGetDevicePositionResponseFormGroup() {
		return new FormGroup<BatchGetDevicePositionResponseFormProperties>({
		});

	}


	/** Contains the device position details. */
	export interface DevicePosition {
		Accuracy?: PositionalAccuracy;
		DeviceId?: string;

		/** Required */
		Position: Array<number>;
		PositionProperties?: PropertyMap;

		/** Required */
		ReceivedTime: Date;

		/** Required */
		SampleTime: Date;
	}

	/** Contains the device position details. */
	export interface DevicePositionFormProperties {
		DeviceId: FormControl<string | null | undefined>,

		/** Required */
		ReceivedTime: FormControl<Date | null | undefined>,

		/** Required */
		SampleTime: FormControl<Date | null | undefined>,
	}
	export function CreateDevicePositionFormGroup() {
		return new FormGroup<DevicePositionFormProperties>({
			DeviceId: new FormControl<string | null | undefined>(undefined),
			ReceivedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			SampleTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains error details for each device that didn't return a position. */
	export interface BatchGetDevicePositionError {

		/** Required */
		DeviceId: string;

		/** Required */
		Error: BatchItemError;
	}

	/** Contains error details for each device that didn't return a position. */
	export interface BatchGetDevicePositionErrorFormProperties {

		/** Required */
		DeviceId: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetDevicePositionErrorFormGroup() {
		return new FormGroup<BatchGetDevicePositionErrorFormProperties>({
			DeviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchPutGeofenceResponse {

		/** Required */
		Errors: Array<BatchPutGeofenceError>;

		/** Required */
		Successes: Array<BatchPutGeofenceSuccess>;
	}
	export interface BatchPutGeofenceResponseFormProperties {
	}
	export function CreateBatchPutGeofenceResponseFormGroup() {
		return new FormGroup<BatchPutGeofenceResponseFormProperties>({
		});

	}


	/** Contains error details for each geofence that failed to be stored in a given geofence collection. */
	export interface BatchPutGeofenceError {

		/** Required */
		Error: BatchItemError;

		/** Required */
		GeofenceId: string;
	}

	/** Contains error details for each geofence that failed to be stored in a given geofence collection. */
	export interface BatchPutGeofenceErrorFormProperties {

		/** Required */
		GeofenceId: FormControl<string | null | undefined>,
	}
	export function CreateBatchPutGeofenceErrorFormGroup() {
		return new FormGroup<BatchPutGeofenceErrorFormProperties>({
			GeofenceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains a summary of each geofence that was successfully stored in a given geofence collection. */
	export interface BatchPutGeofenceSuccess {

		/** Required */
		CreateTime: Date;

		/** Required */
		GeofenceId: string;

		/** Required */
		UpdateTime: Date;
	}

	/** Contains a summary of each geofence that was successfully stored in a given geofence collection. */
	export interface BatchPutGeofenceSuccessFormProperties {

		/** Required */
		CreateTime: FormControl<Date | null | undefined>,

		/** Required */
		GeofenceId: FormControl<string | null | undefined>,

		/** Required */
		UpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateBatchPutGeofenceSuccessFormGroup() {
		return new FormGroup<BatchPutGeofenceSuccessFormProperties>({
			CreateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			GeofenceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains geofence geometry details.  */
	export interface BatchPutGeofenceRequestEntry {

		/** Required */
		GeofenceId: string;
		GeofenceProperties?: PropertyMap;

		/** Required */
		Geometry: GeofenceGeometry;
	}

	/** Contains geofence geometry details.  */
	export interface BatchPutGeofenceRequestEntryFormProperties {

		/** Required */
		GeofenceId: FormControl<string | null | undefined>,
	}
	export function CreateBatchPutGeofenceRequestEntryFormGroup() {
		return new FormGroup<BatchPutGeofenceRequestEntryFormProperties>({
			GeofenceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Contains the geofence geometry details.</p> <p>A geofence geometry is made up of either a polygon or a circle. Can be either a polygon or a circle. Including both will return a validation error.</p> <note> <p>Amazon Location doesn't currently support polygons with holes, multipolygons, polygons that are wound clockwise, or that cross the antimeridian. </p> </note> */
	export interface GeofenceGeometry {
		Circle?: Circle;
		Polygon?: Array<Array<Array<number>>> | null;
	}

	/** <p>Contains the geofence geometry details.</p> <p>A geofence geometry is made up of either a polygon or a circle. Can be either a polygon or a circle. Including both will return a validation error.</p> <note> <p>Amazon Location doesn't currently support polygons with holes, multipolygons, polygons that are wound clockwise, or that cross the antimeridian. </p> </note> */
	export interface GeofenceGeometryFormProperties {
	}
	export function CreateGeofenceGeometryFormGroup() {
		return new FormGroup<GeofenceGeometryFormProperties>({
		});

	}


	/** A circle on the earth, as defined by a center point and a radius. */
	export interface Circle {

		/** Required */
		Center: Array<number>;

		/** Required */
		Radius: number;
	}

	/** A circle on the earth, as defined by a center point and a radius. */
	export interface CircleFormProperties {

		/** Required */
		Radius: FormControl<number | null | undefined>,
	}
	export function CreateCircleFormGroup() {
		return new FormGroup<CircleFormProperties>({
			Radius: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchUpdateDevicePositionResponse {

		/** Required */
		Errors: Array<BatchUpdateDevicePositionError>;
	}
	export interface BatchUpdateDevicePositionResponseFormProperties {
	}
	export function CreateBatchUpdateDevicePositionResponseFormGroup() {
		return new FormGroup<BatchUpdateDevicePositionResponseFormProperties>({
		});

	}


	/** Contains error details for each device that failed to update its position. */
	export interface BatchUpdateDevicePositionError {

		/** Required */
		DeviceId: string;

		/** Required */
		Error: BatchItemError;

		/** Required */
		SampleTime: Date;
	}

	/** Contains error details for each device that failed to update its position. */
	export interface BatchUpdateDevicePositionErrorFormProperties {

		/** Required */
		DeviceId: FormControl<string | null | undefined>,

		/** Required */
		SampleTime: FormControl<Date | null | undefined>,
	}
	export function CreateBatchUpdateDevicePositionErrorFormGroup() {
		return new FormGroup<BatchUpdateDevicePositionErrorFormProperties>({
			DeviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SampleTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Returns the result of the route calculation. Metadata includes legs and route summary. */
	export interface CalculateRouteResponse {

		/** Required */
		Legs: Array<Leg>;

		/** Required */
		Summary: CalculateRouteSummary;
	}

	/** Returns the result of the route calculation. Metadata includes legs and route summary. */
	export interface CalculateRouteResponseFormProperties {
	}
	export function CreateCalculateRouteResponseFormGroup() {
		return new FormGroup<CalculateRouteResponseFormProperties>({
		});

	}


	/** <p>Contains the calculated route's details for each path between a pair of positions. The number of legs returned corresponds to one fewer than the total number of positions in the request. </p> <p>For example, a route with a departure position and destination position returns one leg with the positions <a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html">snapped to a nearby road</a>:</p> <ul> <li> <p>The <code>StartPosition</code> is the departure position.</p> </li> <li> <p>The <code>EndPosition</code> is the destination position.</p> </li> </ul> <p>A route with a waypoint between the departure and destination position returns two legs with the positions snapped to a nearby road:</p> <ul> <li> <p>Leg 1: The <code>StartPosition</code> is the departure position . The <code>EndPosition</code> is the waypoint positon.</p> </li> <li> <p>Leg 2: The <code>StartPosition</code> is the waypoint position. The <code>EndPosition</code> is the destination position.</p> </li> </ul> */
	export interface Leg {

		/** Required */
		Distance: number;

		/** Required */
		DurationSeconds: number;

		/** Required */
		EndPosition: Array<number>;
		Geometry?: LegGeometry;

		/** Required */
		StartPosition: Array<number>;

		/** Required */
		Steps: Array<Step>;
	}

	/** <p>Contains the calculated route's details for each path between a pair of positions. The number of legs returned corresponds to one fewer than the total number of positions in the request. </p> <p>For example, a route with a departure position and destination position returns one leg with the positions <a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html">snapped to a nearby road</a>:</p> <ul> <li> <p>The <code>StartPosition</code> is the departure position.</p> </li> <li> <p>The <code>EndPosition</code> is the destination position.</p> </li> </ul> <p>A route with a waypoint between the departure and destination position returns two legs with the positions snapped to a nearby road:</p> <ul> <li> <p>Leg 1: The <code>StartPosition</code> is the departure position . The <code>EndPosition</code> is the waypoint positon.</p> </li> <li> <p>Leg 2: The <code>StartPosition</code> is the waypoint position. The <code>EndPosition</code> is the destination position.</p> </li> </ul> */
	export interface LegFormProperties {

		/** Required */
		Distance: FormControl<number | null | undefined>,

		/** Required */
		DurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateLegFormGroup() {
		return new FormGroup<LegFormProperties>({
			Distance: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			DurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the geometry details for each path between a pair of positions. Used in plotting a route leg on a map. */
	export interface LegGeometry {
		LineString?: Array<Array<number>> | null;
	}

	/** Contains the geometry details for each path between a pair of positions. Used in plotting a route leg on a map. */
	export interface LegGeometryFormProperties {
	}
	export function CreateLegGeometryFormGroup() {
		return new FormGroup<LegGeometryFormProperties>({
		});

	}


	/**  Represents an element of a leg within a route. A step contains instructions for how to move to the next step in the leg.  */
	export interface Step {

		/** Required */
		Distance: number;

		/** Required */
		DurationSeconds: number;

		/** Required */
		EndPosition: Array<number>;
		GeometryOffset?: number | null;

		/** Required */
		StartPosition: Array<number>;
	}

	/**  Represents an element of a leg within a route. A step contains instructions for how to move to the next step in the leg.  */
	export interface StepFormProperties {

		/** Required */
		Distance: FormControl<number | null | undefined>,

		/** Required */
		DurationSeconds: FormControl<number | null | undefined>,
		GeometryOffset: FormControl<number | null | undefined>,
	}
	export function CreateStepFormGroup() {
		return new FormGroup<StepFormProperties>({
			Distance: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			DurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			GeometryOffset: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A summary of the calculated route. */
	export interface CalculateRouteSummary {

		/** Required */
		DataSource: string;

		/** Required */
		Distance: number;

		/** Required */
		DistanceUnit: DistanceUnit;

		/** Required */
		DurationSeconds: number;

		/** Required */
		RouteBBox: Array<number>;
	}

	/** A summary of the calculated route. */
	export interface CalculateRouteSummaryFormProperties {

		/** Required */
		DataSource: FormControl<string | null | undefined>,

		/** Required */
		Distance: FormControl<number | null | undefined>,

		/** Required */
		DistanceUnit: FormControl<DistanceUnit | null | undefined>,

		/** Required */
		DurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCalculateRouteSummaryFormGroup() {
		return new FormGroup<CalculateRouteSummaryFormProperties>({
			DataSource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Distance: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			DistanceUnit: new FormControl<DistanceUnit | null | undefined>(undefined, [Validators.required]),
			DurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DistanceUnit { Kilometers = 'Kilometers', Miles = 'Miles' }


	/** Contains details about the truck dimensions in the unit of measurement that you specify. Used to filter out roads that can't support or allow the specified dimensions for requests that specify <code>TravelMode</code> as <code>Truck</code>. */
	export interface TruckDimensions {
		Height?: number | null;
		Length?: number | null;
		Unit?: DimensionUnit;
		Width?: number | null;
	}

	/** Contains details about the truck dimensions in the unit of measurement that you specify. Used to filter out roads that can't support or allow the specified dimensions for requests that specify <code>TravelMode</code> as <code>Truck</code>. */
	export interface TruckDimensionsFormProperties {
		Height: FormControl<number | null | undefined>,
		Length: FormControl<number | null | undefined>,
		Unit: FormControl<DimensionUnit | null | undefined>,
		Width: FormControl<number | null | undefined>,
	}
	export function CreateTruckDimensionsFormGroup() {
		return new FormGroup<TruckDimensionsFormProperties>({
			Height: new FormControl<number | null | undefined>(undefined),
			Length: new FormControl<number | null | undefined>(undefined),
			Unit: new FormControl<DimensionUnit | null | undefined>(undefined),
			Width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DimensionUnit { Meters = 'Meters', Feet = 'Feet' }


	/** Contains details about the truck's weight specifications. Used to avoid roads that can't support or allow the total weight for requests that specify <code>TravelMode</code> as <code>Truck</code>. */
	export interface TruckWeight {
		Total?: number | null;
		Unit?: VehicleWeightUnit;
	}

	/** Contains details about the truck's weight specifications. Used to avoid roads that can't support or allow the total weight for requests that specify <code>TravelMode</code> as <code>Truck</code>. */
	export interface TruckWeightFormProperties {
		Total: FormControl<number | null | undefined>,
		Unit: FormControl<VehicleWeightUnit | null | undefined>,
	}
	export function CreateTruckWeightFormGroup() {
		return new FormGroup<TruckWeightFormProperties>({
			Total: new FormControl<number | null | undefined>(undefined),
			Unit: new FormControl<VehicleWeightUnit | null | undefined>(undefined),
		});

	}

	export enum VehicleWeightUnit { Kilograms = 'Kilograms', Pounds = 'Pounds' }


	/** Returns the result of the route matrix calculation. */
	export interface CalculateRouteMatrixResponse {

		/** Required */
		RouteMatrix: Array<Array<RouteMatrixEntry>>;
		SnappedDeparturePositions?: Array<Array<number>> | null;
		SnappedDestinationPositions?: Array<Array<number>> | null;

		/** Required */
		Summary: CalculateRouteMatrixSummary;
	}

	/** Returns the result of the route matrix calculation. */
	export interface CalculateRouteMatrixResponseFormProperties {
	}
	export function CreateCalculateRouteMatrixResponseFormGroup() {
		return new FormGroup<CalculateRouteMatrixResponseFormProperties>({
		});

	}


	/** The result for the calculated route of one <code>DeparturePosition</code> <code>DestinationPosition</code> pair. */
	export interface RouteMatrixEntry {
		Distance?: number | null;
		DurationSeconds?: number | null;
		Error?: RouteMatrixEntryError;
	}

	/** The result for the calculated route of one <code>DeparturePosition</code> <code>DestinationPosition</code> pair. */
	export interface RouteMatrixEntryFormProperties {
		Distance: FormControl<number | null | undefined>,
		DurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateRouteMatrixEntryFormGroup() {
		return new FormGroup<RouteMatrixEntryFormProperties>({
			Distance: new FormControl<number | null | undefined>(undefined),
			DurationSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>An error corresponding to the calculation of a route between the <code>DeparturePosition</code> and <code>DestinationPosition</code>.</p> <p>The error code can be one of the following:</p> <ul> <li> <p> <code>RouteNotFound</code> - Unable to find a valid route with the given parameters.</p> </li> </ul> <ul> <li> <p> <code>RouteTooLong</code> - Route calculation went beyond the maximum size of a route and was terminated before completion.</p> </li> </ul> <ul> <li> <p> <code>PositionsNotFound</code> - One or more of the input positions were not found on the route network.</p> </li> </ul> <ul> <li> <p> <code>DestinationPositionNotFound</code> - The destination position was not found on the route network.</p> </li> </ul> <ul> <li> <p> <code>DeparturePositionNotFound</code> - The departure position was not found on the route network.</p> </li> </ul> <ul> <li> <p> <code>OtherValidationError</code> - The given inputs were not valid or a route was not found. More information is given in the error <code>Message</code> </p> </li> </ul> */
	export interface RouteMatrixEntryError {

		/** Required */
		Code: RouteMatrixErrorCode;
		Message?: string;
	}

	/** <p>An error corresponding to the calculation of a route between the <code>DeparturePosition</code> and <code>DestinationPosition</code>.</p> <p>The error code can be one of the following:</p> <ul> <li> <p> <code>RouteNotFound</code> - Unable to find a valid route with the given parameters.</p> </li> </ul> <ul> <li> <p> <code>RouteTooLong</code> - Route calculation went beyond the maximum size of a route and was terminated before completion.</p> </li> </ul> <ul> <li> <p> <code>PositionsNotFound</code> - One or more of the input positions were not found on the route network.</p> </li> </ul> <ul> <li> <p> <code>DestinationPositionNotFound</code> - The destination position was not found on the route network.</p> </li> </ul> <ul> <li> <p> <code>DeparturePositionNotFound</code> - The departure position was not found on the route network.</p> </li> </ul> <ul> <li> <p> <code>OtherValidationError</code> - The given inputs were not valid or a route was not found. More information is given in the error <code>Message</code> </p> </li> </ul> */
	export interface RouteMatrixEntryErrorFormProperties {

		/** Required */
		Code: FormControl<RouteMatrixErrorCode | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateRouteMatrixEntryErrorFormGroup() {
		return new FormGroup<RouteMatrixEntryErrorFormProperties>({
			Code: new FormControl<RouteMatrixErrorCode | null | undefined>(undefined, [Validators.required]),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RouteMatrixErrorCode { RouteNotFound = 'RouteNotFound', RouteTooLong = 'RouteTooLong', PositionsNotFound = 'PositionsNotFound', DestinationPositionNotFound = 'DestinationPositionNotFound', DeparturePositionNotFound = 'DeparturePositionNotFound', OtherValidationError = 'OtherValidationError' }


	/** A summary of the calculated route matrix. */
	export interface CalculateRouteMatrixSummary {

		/** Required */
		DataSource: string;

		/** Required */
		DistanceUnit: DistanceUnit;

		/** Required */
		ErrorCount: number;

		/** Required */
		RouteCount: number;
	}

	/** A summary of the calculated route matrix. */
	export interface CalculateRouteMatrixSummaryFormProperties {

		/** Required */
		DataSource: FormControl<string | null | undefined>,

		/** Required */
		DistanceUnit: FormControl<DistanceUnit | null | undefined>,

		/** Required */
		ErrorCount: FormControl<number | null | undefined>,

		/** Required */
		RouteCount: FormControl<number | null | undefined>,
	}
	export function CreateCalculateRouteMatrixSummaryFormGroup() {
		return new FormGroup<CalculateRouteMatrixSummaryFormProperties>({
			DataSource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DistanceUnit: new FormControl<DistanceUnit | null | undefined>(undefined, [Validators.required]),
			ErrorCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			RouteCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateGeofenceCollectionResponse {

		/** Required */
		CollectionArn: string;

		/** Required */
		CollectionName: string;

		/** Required */
		CreateTime: Date;
	}
	export interface CreateGeofenceCollectionResponseFormProperties {

		/** Required */
		CollectionArn: FormControl<string | null | undefined>,

		/** Required */
		CollectionName: FormControl<string | null | undefined>,

		/** Required */
		CreateTime: FormControl<Date | null | undefined>,
	}
	export function CreateCreateGeofenceCollectionResponseFormGroup() {
		return new FormGroup<CreateGeofenceCollectionResponseFormProperties>({
			CollectionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CollectionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateKeyResponse {

		/** Required */
		CreateTime: Date;

		/** Required */
		Key: string;

		/** Required */
		KeyArn: string;

		/** Required */
		KeyName: string;
	}
	export interface CreateKeyResponseFormProperties {

		/** Required */
		CreateTime: FormControl<Date | null | undefined>,

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		KeyArn: FormControl<string | null | undefined>,

		/** Required */
		KeyName: FormControl<string | null | undefined>,
	}
	export function CreateCreateKeyResponseFormGroup() {
		return new FormGroup<CreateKeyResponseFormProperties>({
			CreateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateMapResponse {

		/** Required */
		CreateTime: Date;

		/** Required */
		MapArn: string;

		/** Required */
		MapName: string;
	}
	export interface CreateMapResponseFormProperties {

		/** Required */
		CreateTime: FormControl<Date | null | undefined>,

		/** Required */
		MapArn: FormControl<string | null | undefined>,

		/** Required */
		MapName: FormControl<string | null | undefined>,
	}
	export function CreateCreateMapResponseFormGroup() {
		return new FormGroup<CreateMapResponseFormProperties>({
			CreateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			MapArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MapName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePlaceIndexResponse {

		/** Required */
		CreateTime: Date;

		/** Required */
		IndexArn: string;

		/** Required */
		IndexName: string;
	}
	export interface CreatePlaceIndexResponseFormProperties {

		/** Required */
		CreateTime: FormControl<Date | null | undefined>,

		/** Required */
		IndexArn: FormControl<string | null | undefined>,

		/** Required */
		IndexName: FormControl<string | null | undefined>,
	}
	export function CreateCreatePlaceIndexResponseFormGroup() {
		return new FormGroup<CreatePlaceIndexResponseFormProperties>({
			CreateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			IndexArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IntendedUse { SingleUse = 'SingleUse', Storage = 'Storage' }

	export interface CreateRouteCalculatorResponse {

		/** Required */
		CalculatorArn: string;

		/** Required */
		CalculatorName: string;

		/** Required */
		CreateTime: Date;
	}
	export interface CreateRouteCalculatorResponseFormProperties {

		/** Required */
		CalculatorArn: FormControl<string | null | undefined>,

		/** Required */
		CalculatorName: FormControl<string | null | undefined>,

		/** Required */
		CreateTime: FormControl<Date | null | undefined>,
	}
	export function CreateCreateRouteCalculatorResponseFormGroup() {
		return new FormGroup<CreateRouteCalculatorResponseFormProperties>({
			CalculatorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CalculatorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateTrackerResponse {

		/** Required */
		CreateTime: Date;

		/** Required */
		TrackerArn: string;

		/** Required */
		TrackerName: string;
	}
	export interface CreateTrackerResponseFormProperties {

		/** Required */
		CreateTime: FormControl<Date | null | undefined>,

		/** Required */
		TrackerArn: FormControl<string | null | undefined>,

		/** Required */
		TrackerName: FormControl<string | null | undefined>,
	}
	export function CreateCreateTrackerResponseFormGroup() {
		return new FormGroup<CreateTrackerResponseFormProperties>({
			CreateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			TrackerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TrackerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteGeofenceCollectionResponse {
	}
	export interface DeleteGeofenceCollectionResponseFormProperties {
	}
	export function CreateDeleteGeofenceCollectionResponseFormGroup() {
		return new FormGroup<DeleteGeofenceCollectionResponseFormProperties>({
		});

	}

	export interface DeleteKeyResponse {
	}
	export interface DeleteKeyResponseFormProperties {
	}
	export function CreateDeleteKeyResponseFormGroup() {
		return new FormGroup<DeleteKeyResponseFormProperties>({
		});

	}

	export interface DeleteMapResponse {
	}
	export interface DeleteMapResponseFormProperties {
	}
	export function CreateDeleteMapResponseFormGroup() {
		return new FormGroup<DeleteMapResponseFormProperties>({
		});

	}

	export interface DeletePlaceIndexResponse {
	}
	export interface DeletePlaceIndexResponseFormProperties {
	}
	export function CreateDeletePlaceIndexResponseFormGroup() {
		return new FormGroup<DeletePlaceIndexResponseFormProperties>({
		});

	}

	export interface DeleteRouteCalculatorResponse {
	}
	export interface DeleteRouteCalculatorResponseFormProperties {
	}
	export function CreateDeleteRouteCalculatorResponseFormGroup() {
		return new FormGroup<DeleteRouteCalculatorResponseFormProperties>({
		});

	}

	export interface DeleteTrackerResponse {
	}
	export interface DeleteTrackerResponseFormProperties {
	}
	export function CreateDeleteTrackerResponseFormGroup() {
		return new FormGroup<DeleteTrackerResponseFormProperties>({
		});

	}

	export interface DescribeGeofenceCollectionResponse {

		/** Required */
		CollectionArn: string;

		/** Required */
		CollectionName: string;

		/** Required */
		CreateTime: Date;

		/** Required */
		Description: string;
		KmsKeyId?: string;
		PricingPlan?: PricingPlan;
		PricingPlanDataSource?: string;
		Tags?: TagMap;

		/** Required */
		UpdateTime: Date;
	}
	export interface DescribeGeofenceCollectionResponseFormProperties {

		/** Required */
		CollectionArn: FormControl<string | null | undefined>,

		/** Required */
		CollectionName: FormControl<string | null | undefined>,

		/** Required */
		CreateTime: FormControl<Date | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		PricingPlan: FormControl<PricingPlan | null | undefined>,
		PricingPlanDataSource: FormControl<string | null | undefined>,

		/** Required */
		UpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeGeofenceCollectionResponseFormGroup() {
		return new FormGroup<DescribeGeofenceCollectionResponseFormProperties>({
			CollectionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CollectionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			PricingPlan: new FormControl<PricingPlan | null | undefined>(undefined),
			PricingPlanDataSource: new FormControl<string | null | undefined>(undefined),
			UpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PricingPlan { RequestBasedUsage = 'RequestBasedUsage', MobileAssetTracking = 'MobileAssetTracking', MobileAssetManagement = 'MobileAssetManagement' }

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}

	export interface DescribeKeyResponse {

		/** Required */
		CreateTime: Date;
		Description?: string;

		/** Required */
		ExpireTime: Date;

		/** Required */
		Key: string;

		/** Required */
		KeyArn: string;

		/** Required */
		KeyName: string;

		/**
		 * API Restrictions on the allowed actions, resources, and referers for an API key resource.
		 * Required
		 */
		Restrictions: ApiKeyRestrictions;
		Tags?: TagMap;

		/** Required */
		UpdateTime: Date;
	}
	export interface DescribeKeyResponseFormProperties {

		/** Required */
		CreateTime: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		ExpireTime: FormControl<Date | null | undefined>,

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		KeyArn: FormControl<string | null | undefined>,

		/** Required */
		KeyName: FormControl<string | null | undefined>,

		/** Required */
		UpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeKeyResponseFormGroup() {
		return new FormGroup<DescribeKeyResponseFormProperties>({
			CreateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			ExpireTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** API Restrictions on the allowed actions, resources, and referers for an API key resource. */
	export interface ApiKeyRestrictions {

		/** Required */
		AllowActions: Array<string>;
		AllowReferers?: Array<string>;

		/** Required */
		AllowResources: Array<string>;
	}

	/** API Restrictions on the allowed actions, resources, and referers for an API key resource. */
	export interface ApiKeyRestrictionsFormProperties {
	}
	export function CreateApiKeyRestrictionsFormGroup() {
		return new FormGroup<ApiKeyRestrictionsFormProperties>({
		});

	}

	export interface DescribeMapResponse {

		/** Required */
		Configuration: MapConfiguration;

		/** Required */
		CreateTime: Date;

		/** Required */
		DataSource: string;

		/** Required */
		Description: string;

		/** Required */
		MapArn: string;

		/** Required */
		MapName: string;
		PricingPlan?: PricingPlan;
		Tags?: TagMap;

		/** Required */
		UpdateTime: Date;
	}
	export interface DescribeMapResponseFormProperties {

		/** Required */
		CreateTime: FormControl<Date | null | undefined>,

		/** Required */
		DataSource: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,

		/** Required */
		MapArn: FormControl<string | null | undefined>,

		/** Required */
		MapName: FormControl<string | null | undefined>,
		PricingPlan: FormControl<PricingPlan | null | undefined>,

		/** Required */
		UpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeMapResponseFormGroup() {
		return new FormGroup<DescribeMapResponseFormProperties>({
			CreateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			DataSource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MapArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MapName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PricingPlan: new FormControl<PricingPlan | null | undefined>(undefined),
			UpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies the map tile style selected from an available provider. */
	export interface MapConfiguration {
		PoliticalView?: string;

		/** Required */
		Style: string;
	}

	/** Specifies the map tile style selected from an available provider. */
	export interface MapConfigurationFormProperties {
		PoliticalView: FormControl<string | null | undefined>,

		/** Required */
		Style: FormControl<string | null | undefined>,
	}
	export function CreateMapConfigurationFormGroup() {
		return new FormGroup<MapConfigurationFormProperties>({
			PoliticalView: new FormControl<string | null | undefined>(undefined),
			Style: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribePlaceIndexResponse {

		/** Required */
		CreateTime: Date;

		/** Required */
		DataSource: string;

		/** Required */
		DataSourceConfiguration: DataSourceConfiguration;

		/** Required */
		Description: string;

		/** Required */
		IndexArn: string;

		/** Required */
		IndexName: string;
		PricingPlan?: PricingPlan;
		Tags?: TagMap;

		/** Required */
		UpdateTime: Date;
	}
	export interface DescribePlaceIndexResponseFormProperties {

		/** Required */
		CreateTime: FormControl<Date | null | undefined>,

		/** Required */
		DataSource: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,

		/** Required */
		IndexArn: FormControl<string | null | undefined>,

		/** Required */
		IndexName: FormControl<string | null | undefined>,
		PricingPlan: FormControl<PricingPlan | null | undefined>,

		/** Required */
		UpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribePlaceIndexResponseFormGroup() {
		return new FormGroup<DescribePlaceIndexResponseFormProperties>({
			CreateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			DataSource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PricingPlan: new FormControl<PricingPlan | null | undefined>(undefined),
			UpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Specifies the data storage option chosen for requesting Places.</p> <important> <p>When using Amazon Location Places:</p> <ul> <li> <p>If using HERE Technologies as a data provider, you can't store results for locations in Japan by setting <code>IntendedUse</code> to <code>Storage</code>. parameter.</p> </li> <li> <p>Under the <code>MobileAssetTracking</code> or <code>MobilAssetManagement</code> pricing plan, you can't store results from your place index resources by setting <code>IntendedUse</code> to <code>Storage</code>. This returns a validation exception error.</p> </li> </ul> <p>For more information, see the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> for Amazon Location Service.</p> </important> */
	export interface DataSourceConfiguration {
		IntendedUse?: IntendedUse;
	}

	/** <p>Specifies the data storage option chosen for requesting Places.</p> <important> <p>When using Amazon Location Places:</p> <ul> <li> <p>If using HERE Technologies as a data provider, you can't store results for locations in Japan by setting <code>IntendedUse</code> to <code>Storage</code>. parameter.</p> </li> <li> <p>Under the <code>MobileAssetTracking</code> or <code>MobilAssetManagement</code> pricing plan, you can't store results from your place index resources by setting <code>IntendedUse</code> to <code>Storage</code>. This returns a validation exception error.</p> </li> </ul> <p>For more information, see the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> for Amazon Location Service.</p> </important> */
	export interface DataSourceConfigurationFormProperties {
		IntendedUse: FormControl<IntendedUse | null | undefined>,
	}
	export function CreateDataSourceConfigurationFormGroup() {
		return new FormGroup<DataSourceConfigurationFormProperties>({
			IntendedUse: new FormControl<IntendedUse | null | undefined>(undefined),
		});

	}

	export interface DescribeRouteCalculatorResponse {

		/** Required */
		CalculatorArn: string;

		/** Required */
		CalculatorName: string;

		/** Required */
		CreateTime: Date;

		/** Required */
		DataSource: string;

		/** Required */
		Description: string;
		PricingPlan?: PricingPlan;
		Tags?: TagMap;

		/** Required */
		UpdateTime: Date;
	}
	export interface DescribeRouteCalculatorResponseFormProperties {

		/** Required */
		CalculatorArn: FormControl<string | null | undefined>,

		/** Required */
		CalculatorName: FormControl<string | null | undefined>,

		/** Required */
		CreateTime: FormControl<Date | null | undefined>,

		/** Required */
		DataSource: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,
		PricingPlan: FormControl<PricingPlan | null | undefined>,

		/** Required */
		UpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeRouteCalculatorResponseFormGroup() {
		return new FormGroup<DescribeRouteCalculatorResponseFormProperties>({
			CalculatorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CalculatorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			DataSource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PricingPlan: new FormControl<PricingPlan | null | undefined>(undefined),
			UpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeTrackerResponse {

		/** Required */
		CreateTime: Date;

		/** Required */
		Description: string;
		EventBridgeEnabled?: boolean | null;
		KmsKeyId?: string;
		PositionFiltering?: PositionFiltering;
		PricingPlan?: PricingPlan;
		PricingPlanDataSource?: string;
		Tags?: TagMap;

		/** Required */
		TrackerArn: string;

		/** Required */
		TrackerName: string;

		/** Required */
		UpdateTime: Date;
	}
	export interface DescribeTrackerResponseFormProperties {

		/** Required */
		CreateTime: FormControl<Date | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,
		EventBridgeEnabled: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		PositionFiltering: FormControl<PositionFiltering | null | undefined>,
		PricingPlan: FormControl<PricingPlan | null | undefined>,
		PricingPlanDataSource: FormControl<string | null | undefined>,

		/** Required */
		TrackerArn: FormControl<string | null | undefined>,

		/** Required */
		TrackerName: FormControl<string | null | undefined>,

		/** Required */
		UpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeTrackerResponseFormGroup() {
		return new FormGroup<DescribeTrackerResponseFormProperties>({
			CreateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EventBridgeEnabled: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			PositionFiltering: new FormControl<PositionFiltering | null | undefined>(undefined),
			PricingPlan: new FormControl<PricingPlan | null | undefined>(undefined),
			PricingPlanDataSource: new FormControl<string | null | undefined>(undefined),
			TrackerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TrackerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PositionFiltering { TimeBased = 'TimeBased', DistanceBased = 'DistanceBased', AccuracyBased = 'AccuracyBased' }

	export interface DisassociateTrackerConsumerResponse {
	}
	export interface DisassociateTrackerConsumerResponseFormProperties {
	}
	export function CreateDisassociateTrackerConsumerResponseFormGroup() {
		return new FormGroup<DisassociateTrackerConsumerResponseFormProperties>({
		});

	}

	export interface GetDevicePositionResponse {
		Accuracy?: PositionalAccuracy;
		DeviceId?: string;

		/** Required */
		Position: Array<number>;
		PositionProperties?: PropertyMap;

		/** Required */
		ReceivedTime: Date;

		/** Required */
		SampleTime: Date;
	}
	export interface GetDevicePositionResponseFormProperties {
		DeviceId: FormControl<string | null | undefined>,

		/** Required */
		ReceivedTime: FormControl<Date | null | undefined>,

		/** Required */
		SampleTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetDevicePositionResponseFormGroup() {
		return new FormGroup<GetDevicePositionResponseFormProperties>({
			DeviceId: new FormControl<string | null | undefined>(undefined),
			ReceivedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			SampleTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDevicePositionHistoryResponse {

		/** Required */
		DevicePositions: Array<DevicePosition>;
		NextToken?: string;
	}
	export interface GetDevicePositionHistoryResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDevicePositionHistoryResponseFormGroup() {
		return new FormGroup<GetDevicePositionHistoryResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetGeofenceResponse {

		/** Required */
		CreateTime: Date;

		/** Required */
		GeofenceId: string;
		GeofenceProperties?: PropertyMap;

		/** Required */
		Geometry: GeofenceGeometry;

		/** Required */
		Status: string;

		/** Required */
		UpdateTime: Date;
	}
	export interface GetGeofenceResponseFormProperties {

		/** Required */
		CreateTime: FormControl<Date | null | undefined>,

		/** Required */
		GeofenceId: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<string | null | undefined>,

		/** Required */
		UpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetGeofenceResponseFormGroup() {
		return new FormGroup<GetGeofenceResponseFormProperties>({
			CreateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			GeofenceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetMapGlyphsResponse {
		Blob?: string;
	}
	export interface GetMapGlyphsResponseFormProperties {
		Blob: FormControl<string | null | undefined>,
	}
	export function CreateGetMapGlyphsResponseFormGroup() {
		return new FormGroup<GetMapGlyphsResponseFormProperties>({
			Blob: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMapSpritesResponse {
		Blob?: string;
	}
	export interface GetMapSpritesResponseFormProperties {
		Blob: FormControl<string | null | undefined>,
	}
	export function CreateGetMapSpritesResponseFormGroup() {
		return new FormGroup<GetMapSpritesResponseFormProperties>({
			Blob: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMapStyleDescriptorResponse {
		Blob?: string;
	}
	export interface GetMapStyleDescriptorResponseFormProperties {
		Blob: FormControl<string | null | undefined>,
	}
	export function CreateGetMapStyleDescriptorResponseFormGroup() {
		return new FormGroup<GetMapStyleDescriptorResponseFormProperties>({
			Blob: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMapTileResponse {
		Blob?: string;
	}
	export interface GetMapTileResponseFormProperties {
		Blob: FormControl<string | null | undefined>,
	}
	export function CreateGetMapTileResponseFormGroup() {
		return new FormGroup<GetMapTileResponseFormProperties>({
			Blob: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPlaceResponse {

		/** Required */
		Place: Place;
	}
	export interface GetPlaceResponseFormProperties {
	}
	export function CreateGetPlaceResponseFormGroup() {
		return new FormGroup<GetPlaceResponseFormProperties>({
		});

	}


	/** <p>Contains details about addresses or points of interest that match the search criteria.</p> <p>Not all details are included with all responses. Some details may only be returned by specific data partners.</p> */
	export interface Place {
		AddressNumber?: string;
		Categories?: Array<string>;
		Country?: string;

		/**
		 * Places uses a point geometry to specify a location or a Place.
		 * Required
		 */
		Geometry: PlaceGeometry;
		Interpolated?: boolean | null;
		Label?: string;
		Municipality?: string;
		Neighborhood?: string;
		PostalCode?: string;
		Region?: string;
		Street?: string;
		SubRegion?: string;
		SupplementalCategories?: Array<string>;
		TimeZone?: TimeZone;
		UnitNumber?: string;
		UnitType?: string;
	}

	/** <p>Contains details about addresses or points of interest that match the search criteria.</p> <p>Not all details are included with all responses. Some details may only be returned by specific data partners.</p> */
	export interface PlaceFormProperties {
		AddressNumber: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,
		Interpolated: FormControl<boolean | null | undefined>,
		Label: FormControl<string | null | undefined>,
		Municipality: FormControl<string | null | undefined>,
		Neighborhood: FormControl<string | null | undefined>,
		PostalCode: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
		Street: FormControl<string | null | undefined>,
		SubRegion: FormControl<string | null | undefined>,
		UnitNumber: FormControl<string | null | undefined>,
		UnitType: FormControl<string | null | undefined>,
	}
	export function CreatePlaceFormGroup() {
		return new FormGroup<PlaceFormProperties>({
			AddressNumber: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			Interpolated: new FormControl<boolean | null | undefined>(undefined),
			Label: new FormControl<string | null | undefined>(undefined),
			Municipality: new FormControl<string | null | undefined>(undefined),
			Neighborhood: new FormControl<string | null | undefined>(undefined),
			PostalCode: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			Street: new FormControl<string | null | undefined>(undefined),
			SubRegion: new FormControl<string | null | undefined>(undefined),
			UnitNumber: new FormControl<string | null | undefined>(undefined),
			UnitType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Places uses a point geometry to specify a location or a Place. */
	export interface PlaceGeometry {
		Point?: Array<number> | null;
	}

	/** Places uses a point geometry to specify a location or a Place. */
	export interface PlaceGeometryFormProperties {
	}
	export function CreatePlaceGeometryFormGroup() {
		return new FormGroup<PlaceGeometryFormProperties>({
		});

	}


	/** Information about a time zone. Includes the name of the time zone and the offset from UTC in seconds. */
	export interface TimeZone {

		/** Required */
		Name: string;
		Offset?: number | null;
	}

	/** Information about a time zone. Includes the name of the time zone and the offset from UTC in seconds. */
	export interface TimeZoneFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Offset: FormControl<number | null | undefined>,
	}
	export function CreateTimeZoneFormGroup() {
		return new FormGroup<TimeZoneFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Offset: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListDevicePositionsResponse {

		/** Required */
		Entries: Array<ListDevicePositionsResponseEntry>;
		NextToken?: string;
	}
	export interface ListDevicePositionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDevicePositionsResponseFormGroup() {
		return new FormGroup<ListDevicePositionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the tracker resource details. */
	export interface ListDevicePositionsResponseEntry {
		Accuracy?: PositionalAccuracy;

		/** Required */
		DeviceId: string;

		/** Required */
		Position: Array<number>;
		PositionProperties?: PropertyMap;

		/** Required */
		SampleTime: Date;
	}

	/** Contains the tracker resource details. */
	export interface ListDevicePositionsResponseEntryFormProperties {

		/** Required */
		DeviceId: FormControl<string | null | undefined>,

		/** Required */
		SampleTime: FormControl<Date | null | undefined>,
	}
	export function CreateListDevicePositionsResponseEntryFormGroup() {
		return new FormGroup<ListDevicePositionsResponseEntryFormProperties>({
			DeviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SampleTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListGeofenceCollectionsResponse {

		/** Required */
		Entries: Array<ListGeofenceCollectionsResponseEntry>;
		NextToken?: string;
	}
	export interface ListGeofenceCollectionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGeofenceCollectionsResponseFormGroup() {
		return new FormGroup<ListGeofenceCollectionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the geofence collection details. */
	export interface ListGeofenceCollectionsResponseEntry {

		/** Required */
		CollectionName: string;

		/** Required */
		CreateTime: Date;

		/** Required */
		Description: string;
		PricingPlan?: PricingPlan;
		PricingPlanDataSource?: string;

		/** Required */
		UpdateTime: Date;
	}

	/** Contains the geofence collection details. */
	export interface ListGeofenceCollectionsResponseEntryFormProperties {

		/** Required */
		CollectionName: FormControl<string | null | undefined>,

		/** Required */
		CreateTime: FormControl<Date | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,
		PricingPlan: FormControl<PricingPlan | null | undefined>,
		PricingPlanDataSource: FormControl<string | null | undefined>,

		/** Required */
		UpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateListGeofenceCollectionsResponseEntryFormGroup() {
		return new FormGroup<ListGeofenceCollectionsResponseEntryFormProperties>({
			CollectionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PricingPlan: new FormControl<PricingPlan | null | undefined>(undefined),
			PricingPlanDataSource: new FormControl<string | null | undefined>(undefined),
			UpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListGeofencesResponse {

		/** Required */
		Entries: Array<ListGeofenceResponseEntry>;
		NextToken?: string;
	}
	export interface ListGeofencesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGeofencesResponseFormGroup() {
		return new FormGroup<ListGeofencesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a list of geofences stored in a given geofence collection. */
	export interface ListGeofenceResponseEntry {

		/** Required */
		CreateTime: Date;

		/** Required */
		GeofenceId: string;
		GeofenceProperties?: PropertyMap;

		/** Required */
		Geometry: GeofenceGeometry;

		/** Required */
		Status: string;

		/** Required */
		UpdateTime: Date;
	}

	/** Contains a list of geofences stored in a given geofence collection. */
	export interface ListGeofenceResponseEntryFormProperties {

		/** Required */
		CreateTime: FormControl<Date | null | undefined>,

		/** Required */
		GeofenceId: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<string | null | undefined>,

		/** Required */
		UpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateListGeofenceResponseEntryFormGroup() {
		return new FormGroup<ListGeofenceResponseEntryFormProperties>({
			CreateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			GeofenceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListKeysResponse {

		/** Required */
		Entries: Array<ListKeysResponseEntry>;
		NextToken?: string;
	}
	export interface ListKeysResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListKeysResponseFormGroup() {
		return new FormGroup<ListKeysResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An API key resource listed in your Amazon Web Services account. */
	export interface ListKeysResponseEntry {

		/** Required */
		CreateTime: Date;
		Description?: string;

		/** Required */
		ExpireTime: Date;

		/** Required */
		KeyName: string;

		/**
		 * API Restrictions on the allowed actions, resources, and referers for an API key resource.
		 * Required
		 */
		Restrictions: ApiKeyRestrictions;

		/** Required */
		UpdateTime: Date;
	}

	/** An API key resource listed in your Amazon Web Services account. */
	export interface ListKeysResponseEntryFormProperties {

		/** Required */
		CreateTime: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		ExpireTime: FormControl<Date | null | undefined>,

		/** Required */
		KeyName: FormControl<string | null | undefined>,

		/** Required */
		UpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateListKeysResponseEntryFormGroup() {
		return new FormGroup<ListKeysResponseEntryFormProperties>({
			CreateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			ExpireTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			KeyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Status { Active = 'Active', Expired = 'Expired' }

	export interface ListMapsResponse {

		/** Required */
		Entries: Array<ListMapsResponseEntry>;
		NextToken?: string;
	}
	export interface ListMapsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMapsResponseFormGroup() {
		return new FormGroup<ListMapsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details of an existing map resource in your Amazon Web Services account. */
	export interface ListMapsResponseEntry {

		/** Required */
		CreateTime: Date;

		/** Required */
		DataSource: string;

		/** Required */
		Description: string;

		/** Required */
		MapName: string;
		PricingPlan?: PricingPlan;

		/** Required */
		UpdateTime: Date;
	}

	/** Contains details of an existing map resource in your Amazon Web Services account. */
	export interface ListMapsResponseEntryFormProperties {

		/** Required */
		CreateTime: FormControl<Date | null | undefined>,

		/** Required */
		DataSource: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,

		/** Required */
		MapName: FormControl<string | null | undefined>,
		PricingPlan: FormControl<PricingPlan | null | undefined>,

		/** Required */
		UpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateListMapsResponseEntryFormGroup() {
		return new FormGroup<ListMapsResponseEntryFormProperties>({
			CreateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			DataSource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MapName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PricingPlan: new FormControl<PricingPlan | null | undefined>(undefined),
			UpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListPlaceIndexesResponse {

		/** Required */
		Entries: Array<ListPlaceIndexesResponseEntry>;
		NextToken?: string;
	}
	export interface ListPlaceIndexesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPlaceIndexesResponseFormGroup() {
		return new FormGroup<ListPlaceIndexesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A place index resource listed in your Amazon Web Services account. */
	export interface ListPlaceIndexesResponseEntry {

		/** Required */
		CreateTime: Date;

		/** Required */
		DataSource: string;

		/** Required */
		Description: string;

		/** Required */
		IndexName: string;
		PricingPlan?: PricingPlan;

		/** Required */
		UpdateTime: Date;
	}

	/** A place index resource listed in your Amazon Web Services account. */
	export interface ListPlaceIndexesResponseEntryFormProperties {

		/** Required */
		CreateTime: FormControl<Date | null | undefined>,

		/** Required */
		DataSource: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,

		/** Required */
		IndexName: FormControl<string | null | undefined>,
		PricingPlan: FormControl<PricingPlan | null | undefined>,

		/** Required */
		UpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateListPlaceIndexesResponseEntryFormGroup() {
		return new FormGroup<ListPlaceIndexesResponseEntryFormProperties>({
			CreateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			DataSource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PricingPlan: new FormControl<PricingPlan | null | undefined>(undefined),
			UpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListRouteCalculatorsResponse {

		/** Required */
		Entries: Array<ListRouteCalculatorsResponseEntry>;
		NextToken?: string;
	}
	export interface ListRouteCalculatorsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRouteCalculatorsResponseFormGroup() {
		return new FormGroup<ListRouteCalculatorsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A route calculator resource listed in your Amazon Web Services account. */
	export interface ListRouteCalculatorsResponseEntry {

		/** Required */
		CalculatorName: string;

		/** Required */
		CreateTime: Date;

		/** Required */
		DataSource: string;

		/** Required */
		Description: string;
		PricingPlan?: PricingPlan;

		/** Required */
		UpdateTime: Date;
	}

	/** A route calculator resource listed in your Amazon Web Services account. */
	export interface ListRouteCalculatorsResponseEntryFormProperties {

		/** Required */
		CalculatorName: FormControl<string | null | undefined>,

		/** Required */
		CreateTime: FormControl<Date | null | undefined>,

		/** Required */
		DataSource: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,
		PricingPlan: FormControl<PricingPlan | null | undefined>,

		/** Required */
		UpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateListRouteCalculatorsResponseEntryFormGroup() {
		return new FormGroup<ListRouteCalculatorsResponseEntryFormProperties>({
			CalculatorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			DataSource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PricingPlan: new FormControl<PricingPlan | null | undefined>(undefined),
			UpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTrackerConsumersResponse {

		/** Required */
		ConsumerArns: Array<string>;
		NextToken?: string;
	}
	export interface ListTrackerConsumersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTrackerConsumersResponseFormGroup() {
		return new FormGroup<ListTrackerConsumersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTrackersResponse {

		/** Required */
		Entries: Array<ListTrackersResponseEntry>;
		NextToken?: string;
	}
	export interface ListTrackersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTrackersResponseFormGroup() {
		return new FormGroup<ListTrackersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the tracker resource details. */
	export interface ListTrackersResponseEntry {

		/** Required */
		CreateTime: Date;

		/** Required */
		Description: string;
		PricingPlan?: PricingPlan;
		PricingPlanDataSource?: string;

		/** Required */
		TrackerName: string;

		/** Required */
		UpdateTime: Date;
	}

	/** Contains the tracker resource details. */
	export interface ListTrackersResponseEntryFormProperties {

		/** Required */
		CreateTime: FormControl<Date | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,
		PricingPlan: FormControl<PricingPlan | null | undefined>,
		PricingPlanDataSource: FormControl<string | null | undefined>,

		/** Required */
		TrackerName: FormControl<string | null | undefined>,

		/** Required */
		UpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateListTrackersResponseEntryFormGroup() {
		return new FormGroup<ListTrackersResponseEntryFormProperties>({
			CreateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PricingPlan: new FormControl<PricingPlan | null | undefined>(undefined),
			PricingPlanDataSource: new FormControl<string | null | undefined>(undefined),
			TrackerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutGeofenceResponse {

		/** Required */
		CreateTime: Date;

		/** Required */
		GeofenceId: string;

		/** Required */
		UpdateTime: Date;
	}
	export interface PutGeofenceResponseFormProperties {

		/** Required */
		CreateTime: FormControl<Date | null | undefined>,

		/** Required */
		GeofenceId: FormControl<string | null | undefined>,

		/** Required */
		UpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreatePutGeofenceResponseFormGroup() {
		return new FormGroup<PutGeofenceResponseFormProperties>({
			CreateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			GeofenceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SearchPlaceIndexForPositionResponse {

		/** Required */
		Results: Array<SearchForPositionResult>;

		/** Required */
		Summary: SearchPlaceIndexForPositionSummary;
	}
	export interface SearchPlaceIndexForPositionResponseFormProperties {
	}
	export function CreateSearchPlaceIndexForPositionResponseFormGroup() {
		return new FormGroup<SearchPlaceIndexForPositionResponseFormProperties>({
		});

	}


	/** Contains a search result from a position search query that is run on a place index resource. */
	export interface SearchForPositionResult {

		/** Required */
		Distance: number;

		/** Required */
		Place: Place;
		PlaceId?: string;
	}

	/** Contains a search result from a position search query that is run on a place index resource. */
	export interface SearchForPositionResultFormProperties {

		/** Required */
		Distance: FormControl<number | null | undefined>,
		PlaceId: FormControl<string | null | undefined>,
	}
	export function CreateSearchForPositionResultFormGroup() {
		return new FormGroup<SearchForPositionResultFormProperties>({
			Distance: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			PlaceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of the request sent by using <code>SearchPlaceIndexForPosition</code>. */
	export interface SearchPlaceIndexForPositionSummary {

		/** Required */
		DataSource: string;
		Language?: string;
		MaxResults?: number | null;

		/** Required */
		Position: Array<number>;
	}

	/** A summary of the request sent by using <code>SearchPlaceIndexForPosition</code>. */
	export interface SearchPlaceIndexForPositionSummaryFormProperties {

		/** Required */
		DataSource: FormControl<string | null | undefined>,
		Language: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchPlaceIndexForPositionSummaryFormGroup() {
		return new FormGroup<SearchPlaceIndexForPositionSummaryFormProperties>({
			DataSource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Language: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SearchPlaceIndexForSuggestionsResponse {

		/** Required */
		Results: Array<SearchForSuggestionsResult>;

		/** Required */
		Summary: SearchPlaceIndexForSuggestionsSummary;
	}
	export interface SearchPlaceIndexForSuggestionsResponseFormProperties {
	}
	export function CreateSearchPlaceIndexForSuggestionsResponseFormGroup() {
		return new FormGroup<SearchPlaceIndexForSuggestionsResponseFormProperties>({
		});

	}


	/** Contains a place suggestion resulting from a place suggestion query that is run on a place index resource. */
	export interface SearchForSuggestionsResult {
		Categories?: Array<string>;
		PlaceId?: string;
		SupplementalCategories?: Array<string>;

		/** Required */
		Text: string;
	}

	/** Contains a place suggestion resulting from a place suggestion query that is run on a place index resource. */
	export interface SearchForSuggestionsResultFormProperties {
		PlaceId: FormControl<string | null | undefined>,

		/** Required */
		Text: FormControl<string | null | undefined>,
	}
	export function CreateSearchForSuggestionsResultFormGroup() {
		return new FormGroup<SearchForSuggestionsResultFormProperties>({
			PlaceId: new FormControl<string | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A summary of the request sent by using <code>SearchPlaceIndexForSuggestions</code>. */
	export interface SearchPlaceIndexForSuggestionsSummary {
		BiasPosition?: Array<number> | null;

		/** Required */
		DataSource: string;
		FilterBBox?: Array<number> | null;
		FilterCategories?: Array<string>;
		FilterCountries?: Array<string>;
		Language?: string;
		MaxResults?: number | null;

		/** Required */
		Text: string;
	}

	/** A summary of the request sent by using <code>SearchPlaceIndexForSuggestions</code>. */
	export interface SearchPlaceIndexForSuggestionsSummaryFormProperties {

		/** Required */
		DataSource: FormControl<string | null | undefined>,
		Language: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,

		/** Required */
		Text: FormControl<string | null | undefined>,
	}
	export function CreateSearchPlaceIndexForSuggestionsSummaryFormGroup() {
		return new FormGroup<SearchPlaceIndexForSuggestionsSummaryFormProperties>({
			DataSource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Language: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SearchPlaceIndexForTextResponse {

		/** Required */
		Results: Array<SearchForTextResult>;

		/** Required */
		Summary: SearchPlaceIndexForTextSummary;
	}
	export interface SearchPlaceIndexForTextResponseFormProperties {
	}
	export function CreateSearchPlaceIndexForTextResponseFormGroup() {
		return new FormGroup<SearchPlaceIndexForTextResponseFormProperties>({
		});

	}


	/** Contains a search result from a text search query that is run on a place index resource. */
	export interface SearchForTextResult {
		Distance?: number | null;

		/** Required */
		Place: Place;
		PlaceId?: string;
		Relevance?: number | null;
	}

	/** Contains a search result from a text search query that is run on a place index resource. */
	export interface SearchForTextResultFormProperties {
		Distance: FormControl<number | null | undefined>,
		PlaceId: FormControl<string | null | undefined>,
		Relevance: FormControl<number | null | undefined>,
	}
	export function CreateSearchForTextResultFormGroup() {
		return new FormGroup<SearchForTextResultFormProperties>({
			Distance: new FormControl<number | null | undefined>(undefined),
			PlaceId: new FormControl<string | null | undefined>(undefined),
			Relevance: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A summary of the request sent by using <code>SearchPlaceIndexForText</code>. */
	export interface SearchPlaceIndexForTextSummary {
		BiasPosition?: Array<number> | null;

		/** Required */
		DataSource: string;
		FilterBBox?: Array<number> | null;
		FilterCategories?: Array<string>;
		FilterCountries?: Array<string>;
		Language?: string;
		MaxResults?: number | null;
		ResultBBox?: Array<number> | null;

		/** Required */
		Text: string;
	}

	/** A summary of the request sent by using <code>SearchPlaceIndexForText</code>. */
	export interface SearchPlaceIndexForTextSummaryFormProperties {

		/** Required */
		DataSource: FormControl<string | null | undefined>,
		Language: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,

		/** Required */
		Text: FormControl<string | null | undefined>,
	}
	export function CreateSearchPlaceIndexForTextSummaryFormGroup() {
		return new FormGroup<SearchPlaceIndexForTextSummaryFormProperties>({
			DataSource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Language: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UpdateGeofenceCollectionResponse {

		/** Required */
		CollectionArn: string;

		/** Required */
		CollectionName: string;

		/** Required */
		UpdateTime: Date;
	}
	export interface UpdateGeofenceCollectionResponseFormProperties {

		/** Required */
		CollectionArn: FormControl<string | null | undefined>,

		/** Required */
		CollectionName: FormControl<string | null | undefined>,

		/** Required */
		UpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateGeofenceCollectionResponseFormGroup() {
		return new FormGroup<UpdateGeofenceCollectionResponseFormProperties>({
			CollectionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CollectionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateKeyResponse {

		/** Required */
		KeyArn: string;

		/** Required */
		KeyName: string;

		/** Required */
		UpdateTime: Date;
	}
	export interface UpdateKeyResponseFormProperties {

		/** Required */
		KeyArn: FormControl<string | null | undefined>,

		/** Required */
		KeyName: FormControl<string | null | undefined>,

		/** Required */
		UpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateKeyResponseFormGroup() {
		return new FormGroup<UpdateKeyResponseFormProperties>({
			KeyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateMapResponse {

		/** Required */
		MapArn: string;

		/** Required */
		MapName: string;

		/** Required */
		UpdateTime: Date;
	}
	export interface UpdateMapResponseFormProperties {

		/** Required */
		MapArn: FormControl<string | null | undefined>,

		/** Required */
		MapName: FormControl<string | null | undefined>,

		/** Required */
		UpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateMapResponseFormGroup() {
		return new FormGroup<UpdateMapResponseFormProperties>({
			MapArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MapName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdatePlaceIndexResponse {

		/** Required */
		IndexArn: string;

		/** Required */
		IndexName: string;

		/** Required */
		UpdateTime: Date;
	}
	export interface UpdatePlaceIndexResponseFormProperties {

		/** Required */
		IndexArn: FormControl<string | null | undefined>,

		/** Required */
		IndexName: FormControl<string | null | undefined>,

		/** Required */
		UpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpdatePlaceIndexResponseFormGroup() {
		return new FormGroup<UpdatePlaceIndexResponseFormProperties>({
			IndexArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateRouteCalculatorResponse {

		/** Required */
		CalculatorArn: string;

		/** Required */
		CalculatorName: string;

		/** Required */
		UpdateTime: Date;
	}
	export interface UpdateRouteCalculatorResponseFormProperties {

		/** Required */
		CalculatorArn: FormControl<string | null | undefined>,

		/** Required */
		CalculatorName: FormControl<string | null | undefined>,

		/** Required */
		UpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateRouteCalculatorResponseFormGroup() {
		return new FormGroup<UpdateRouteCalculatorResponseFormProperties>({
			CalculatorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CalculatorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateTrackerResponse {

		/** Required */
		TrackerArn: string;

		/** Required */
		TrackerName: string;

		/** Required */
		UpdateTime: Date;
	}
	export interface UpdateTrackerResponseFormProperties {

		/** Required */
		TrackerArn: FormControl<string | null | undefined>,

		/** Required */
		TrackerName: FormControl<string | null | undefined>,

		/** Required */
		UpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateTrackerResponseFormGroup() {
		return new FormGroup<UpdateTrackerResponseFormProperties>({
			TrackerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TrackerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Options for filtering API keys. */
	export interface ApiKeyFilter {
		KeyStatus?: Status;
	}

	/** Options for filtering API keys. */
	export interface ApiKeyFilterFormProperties {
		KeyStatus: FormControl<Status | null | undefined>,
	}
	export function CreateApiKeyFilterFormGroup() {
		return new FormGroup<ApiKeyFilterFormProperties>({
			KeyStatus: new FormControl<Status | null | undefined>(undefined),
		});

	}

	export interface AssociateTrackerConsumerRequest {

		/** Required */
		ConsumerArn: string;
	}
	export interface AssociateTrackerConsumerRequestFormProperties {

		/** Required */
		ConsumerArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateTrackerConsumerRequestFormGroup() {
		return new FormGroup<AssociateTrackerConsumerRequestFormProperties>({
			ConsumerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchDeleteDevicePositionHistoryRequest {

		/** Required */
		DeviceIds: Array<string>;
	}
	export interface BatchDeleteDevicePositionHistoryRequestFormProperties {
	}
	export function CreateBatchDeleteDevicePositionHistoryRequestFormGroup() {
		return new FormGroup<BatchDeleteDevicePositionHistoryRequestFormProperties>({
		});

	}

	export interface BatchDeleteGeofenceRequest {

		/** Required */
		GeofenceIds: Array<string>;
	}
	export interface BatchDeleteGeofenceRequestFormProperties {
	}
	export function CreateBatchDeleteGeofenceRequestFormGroup() {
		return new FormGroup<BatchDeleteGeofenceRequestFormProperties>({
		});

	}

	export interface BatchEvaluateGeofencesRequest {

		/** Required */
		DevicePositionUpdates: Array<DevicePositionUpdate>;
	}
	export interface BatchEvaluateGeofencesRequestFormProperties {
	}
	export function CreateBatchEvaluateGeofencesRequestFormGroup() {
		return new FormGroup<BatchEvaluateGeofencesRequestFormProperties>({
		});

	}

	export interface BatchGetDevicePositionRequest {

		/** Required */
		DeviceIds: Array<string>;
	}
	export interface BatchGetDevicePositionRequestFormProperties {
	}
	export function CreateBatchGetDevicePositionRequestFormGroup() {
		return new FormGroup<BatchGetDevicePositionRequestFormProperties>({
		});

	}

	export interface BatchPutGeofenceRequest {

		/** Required */
		Entries: Array<BatchPutGeofenceRequestEntry>;
	}
	export interface BatchPutGeofenceRequestFormProperties {
	}
	export function CreateBatchPutGeofenceRequestFormGroup() {
		return new FormGroup<BatchPutGeofenceRequestFormProperties>({
		});

	}

	export interface BatchUpdateDevicePositionRequest {

		/** Required */
		Updates: Array<DevicePositionUpdate>;
	}
	export interface BatchUpdateDevicePositionRequestFormProperties {
	}
	export function CreateBatchUpdateDevicePositionRequestFormGroup() {
		return new FormGroup<BatchUpdateDevicePositionRequestFormProperties>({
		});

	}


	/** Contains details about additional route preferences for requests that specify <code>TravelMode</code> as <code>Car</code>. */
	export interface CalculateRouteCarModeOptions {
		AvoidFerries?: boolean | null;
		AvoidTolls?: boolean | null;
	}

	/** Contains details about additional route preferences for requests that specify <code>TravelMode</code> as <code>Car</code>. */
	export interface CalculateRouteCarModeOptionsFormProperties {
		AvoidFerries: FormControl<boolean | null | undefined>,
		AvoidTolls: FormControl<boolean | null | undefined>,
	}
	export function CreateCalculateRouteCarModeOptionsFormGroup() {
		return new FormGroup<CalculateRouteCarModeOptionsFormProperties>({
			AvoidFerries: new FormControl<boolean | null | undefined>(undefined),
			AvoidTolls: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum TravelMode { Car = 'Car', Truck = 'Truck', Walking = 'Walking', Bicycle = 'Bicycle', Motorcycle = 'Motorcycle' }


	/** Contains details about additional route preferences for requests that specify <code>TravelMode</code> as <code>Truck</code>. */
	export interface CalculateRouteTruckModeOptions {
		AvoidFerries?: boolean | null;
		AvoidTolls?: boolean | null;
		Dimensions?: TruckDimensions;
		Weight?: TruckWeight;
	}

	/** Contains details about additional route preferences for requests that specify <code>TravelMode</code> as <code>Truck</code>. */
	export interface CalculateRouteTruckModeOptionsFormProperties {
		AvoidFerries: FormControl<boolean | null | undefined>,
		AvoidTolls: FormControl<boolean | null | undefined>,
	}
	export function CreateCalculateRouteTruckModeOptionsFormGroup() {
		return new FormGroup<CalculateRouteTruckModeOptionsFormProperties>({
			AvoidFerries: new FormControl<boolean | null | undefined>(undefined),
			AvoidTolls: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CalculateRouteMatrixRequest {
		CarModeOptions?: CalculateRouteCarModeOptions;
		DepartNow?: boolean | null;

		/** Required */
		DeparturePositions: Array<Array<number>>;
		DepartureTime?: Date;

		/** Required */
		DestinationPositions: Array<Array<number>>;
		DistanceUnit?: DistanceUnit;
		TravelMode?: TravelMode;
		TruckModeOptions?: CalculateRouteTruckModeOptions;
	}
	export interface CalculateRouteMatrixRequestFormProperties {
		DepartNow: FormControl<boolean | null | undefined>,
		DepartureTime: FormControl<Date | null | undefined>,
		DistanceUnit: FormControl<DistanceUnit | null | undefined>,
		TravelMode: FormControl<TravelMode | null | undefined>,
	}
	export function CreateCalculateRouteMatrixRequestFormGroup() {
		return new FormGroup<CalculateRouteMatrixRequestFormProperties>({
			DepartNow: new FormControl<boolean | null | undefined>(undefined),
			DepartureTime: new FormControl<Date | null | undefined>(undefined),
			DistanceUnit: new FormControl<DistanceUnit | null | undefined>(undefined),
			TravelMode: new FormControl<TravelMode | null | undefined>(undefined),
		});

	}

	export interface CalculateRouteRequest {
		CarModeOptions?: CalculateRouteCarModeOptions;
		DepartNow?: boolean | null;

		/** Required */
		DeparturePosition: Array<number>;
		DepartureTime?: Date;

		/** Required */
		DestinationPosition: Array<number>;
		DistanceUnit?: DistanceUnit;
		IncludeLegGeometry?: boolean | null;
		TravelMode?: TravelMode;
		TruckModeOptions?: CalculateRouteTruckModeOptions;
		WaypointPositions?: Array<Array<number>> | null;
	}
	export interface CalculateRouteRequestFormProperties {
		DepartNow: FormControl<boolean | null | undefined>,
		DepartureTime: FormControl<Date | null | undefined>,
		DistanceUnit: FormControl<DistanceUnit | null | undefined>,
		IncludeLegGeometry: FormControl<boolean | null | undefined>,
		TravelMode: FormControl<TravelMode | null | undefined>,
	}
	export function CreateCalculateRouteRequestFormGroup() {
		return new FormGroup<CalculateRouteRequestFormProperties>({
			DepartNow: new FormControl<boolean | null | undefined>(undefined),
			DepartureTime: new FormControl<Date | null | undefined>(undefined),
			DistanceUnit: new FormControl<DistanceUnit | null | undefined>(undefined),
			IncludeLegGeometry: new FormControl<boolean | null | undefined>(undefined),
			TravelMode: new FormControl<TravelMode | null | undefined>(undefined),
		});

	}

	export interface CreateGeofenceCollectionRequest {

		/** Required */
		CollectionName: string;
		Description?: string;
		KmsKeyId?: string;
		PricingPlan?: PricingPlan;
		PricingPlanDataSource?: string;
		Tags?: TagMap;
	}
	export interface CreateGeofenceCollectionRequestFormProperties {

		/** Required */
		CollectionName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		PricingPlan: FormControl<PricingPlan | null | undefined>,
		PricingPlanDataSource: FormControl<string | null | undefined>,
	}
	export function CreateCreateGeofenceCollectionRequestFormGroup() {
		return new FormGroup<CreateGeofenceCollectionRequestFormProperties>({
			CollectionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			PricingPlan: new FormControl<PricingPlan | null | undefined>(undefined),
			PricingPlanDataSource: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateKeyRequest {
		Description?: string;
		ExpireTime?: Date;

		/** Required */
		KeyName: string;
		NoExpiry?: boolean | null;

		/** Required */
		Restrictions: ApiKeyRestrictions;
		Tags?: TagMap;
	}
	export interface CreateKeyRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		ExpireTime: FormControl<Date | null | undefined>,

		/** Required */
		KeyName: FormControl<string | null | undefined>,
		NoExpiry: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateKeyRequestFormGroup() {
		return new FormGroup<CreateKeyRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			ExpireTime: new FormControl<Date | null | undefined>(undefined),
			KeyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NoExpiry: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateMapRequest {

		/** Required */
		Configuration: MapConfiguration;
		Description?: string;

		/** Required */
		MapName: string;
		PricingPlan?: PricingPlan;
		Tags?: TagMap;
	}
	export interface CreateMapRequestFormProperties {
		Description: FormControl<string | null | undefined>,

		/** Required */
		MapName: FormControl<string | null | undefined>,
		PricingPlan: FormControl<PricingPlan | null | undefined>,
	}
	export function CreateCreateMapRequestFormGroup() {
		return new FormGroup<CreateMapRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			MapName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PricingPlan: new FormControl<PricingPlan | null | undefined>(undefined),
		});

	}

	export interface CreatePlaceIndexRequest {

		/** Required */
		DataSource: string;
		DataSourceConfiguration?: DataSourceConfiguration;
		Description?: string;

		/** Required */
		IndexName: string;
		PricingPlan?: PricingPlan;
		Tags?: TagMap;
	}
	export interface CreatePlaceIndexRequestFormProperties {

		/** Required */
		DataSource: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		IndexName: FormControl<string | null | undefined>,
		PricingPlan: FormControl<PricingPlan | null | undefined>,
	}
	export function CreateCreatePlaceIndexRequestFormGroup() {
		return new FormGroup<CreatePlaceIndexRequestFormProperties>({
			DataSource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PricingPlan: new FormControl<PricingPlan | null | undefined>(undefined),
		});

	}

	export interface CreateRouteCalculatorRequest {

		/** Required */
		CalculatorName: string;

		/** Required */
		DataSource: string;
		Description?: string;
		PricingPlan?: PricingPlan;
		Tags?: TagMap;
	}
	export interface CreateRouteCalculatorRequestFormProperties {

		/** Required */
		CalculatorName: FormControl<string | null | undefined>,

		/** Required */
		DataSource: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		PricingPlan: FormControl<PricingPlan | null | undefined>,
	}
	export function CreateCreateRouteCalculatorRequestFormGroup() {
		return new FormGroup<CreateRouteCalculatorRequestFormProperties>({
			CalculatorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataSource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			PricingPlan: new FormControl<PricingPlan | null | undefined>(undefined),
		});

	}

	export interface CreateTrackerRequest {
		Description?: string;
		EventBridgeEnabled?: boolean | null;
		KmsKeyId?: string;
		PositionFiltering?: PositionFiltering;
		PricingPlan?: PricingPlan;
		PricingPlanDataSource?: string;
		Tags?: TagMap;

		/** Required */
		TrackerName: string;
	}
	export interface CreateTrackerRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		EventBridgeEnabled: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		PositionFiltering: FormControl<PositionFiltering | null | undefined>,
		PricingPlan: FormControl<PricingPlan | null | undefined>,
		PricingPlanDataSource: FormControl<string | null | undefined>,

		/** Required */
		TrackerName: FormControl<string | null | undefined>,
	}
	export function CreateCreateTrackerRequestFormGroup() {
		return new FormGroup<CreateTrackerRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			EventBridgeEnabled: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			PositionFiltering: new FormControl<PositionFiltering | null | undefined>(undefined),
			PricingPlan: new FormControl<PricingPlan | null | undefined>(undefined),
			PricingPlanDataSource: new FormControl<string | null | undefined>(undefined),
			TrackerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteGeofenceCollectionRequest {
	}
	export interface DeleteGeofenceCollectionRequestFormProperties {
	}
	export function CreateDeleteGeofenceCollectionRequestFormGroup() {
		return new FormGroup<DeleteGeofenceCollectionRequestFormProperties>({
		});

	}

	export interface DeleteKeyRequest {
	}
	export interface DeleteKeyRequestFormProperties {
	}
	export function CreateDeleteKeyRequestFormGroup() {
		return new FormGroup<DeleteKeyRequestFormProperties>({
		});

	}

	export interface DeleteMapRequest {
	}
	export interface DeleteMapRequestFormProperties {
	}
	export function CreateDeleteMapRequestFormGroup() {
		return new FormGroup<DeleteMapRequestFormProperties>({
		});

	}

	export interface DeletePlaceIndexRequest {
	}
	export interface DeletePlaceIndexRequestFormProperties {
	}
	export function CreateDeletePlaceIndexRequestFormGroup() {
		return new FormGroup<DeletePlaceIndexRequestFormProperties>({
		});

	}

	export interface DeleteRouteCalculatorRequest {
	}
	export interface DeleteRouteCalculatorRequestFormProperties {
	}
	export function CreateDeleteRouteCalculatorRequestFormGroup() {
		return new FormGroup<DeleteRouteCalculatorRequestFormProperties>({
		});

	}

	export interface DeleteTrackerRequest {
	}
	export interface DeleteTrackerRequestFormProperties {
	}
	export function CreateDeleteTrackerRequestFormGroup() {
		return new FormGroup<DeleteTrackerRequestFormProperties>({
		});

	}

	export interface DescribeGeofenceCollectionRequest {
	}
	export interface DescribeGeofenceCollectionRequestFormProperties {
	}
	export function CreateDescribeGeofenceCollectionRequestFormGroup() {
		return new FormGroup<DescribeGeofenceCollectionRequestFormProperties>({
		});

	}

	export interface DescribeKeyRequest {
	}
	export interface DescribeKeyRequestFormProperties {
	}
	export function CreateDescribeKeyRequestFormGroup() {
		return new FormGroup<DescribeKeyRequestFormProperties>({
		});

	}

	export interface DescribeMapRequest {
	}
	export interface DescribeMapRequestFormProperties {
	}
	export function CreateDescribeMapRequestFormGroup() {
		return new FormGroup<DescribeMapRequestFormProperties>({
		});

	}

	export interface DescribePlaceIndexRequest {
	}
	export interface DescribePlaceIndexRequestFormProperties {
	}
	export function CreateDescribePlaceIndexRequestFormGroup() {
		return new FormGroup<DescribePlaceIndexRequestFormProperties>({
		});

	}

	export interface DescribeRouteCalculatorRequest {
	}
	export interface DescribeRouteCalculatorRequestFormProperties {
	}
	export function CreateDescribeRouteCalculatorRequestFormGroup() {
		return new FormGroup<DescribeRouteCalculatorRequestFormProperties>({
		});

	}

	export interface DescribeTrackerRequest {
	}
	export interface DescribeTrackerRequestFormProperties {
	}
	export function CreateDescribeTrackerRequestFormGroup() {
		return new FormGroup<DescribeTrackerRequestFormProperties>({
		});

	}

	export interface DisassociateTrackerConsumerRequest {
	}
	export interface DisassociateTrackerConsumerRequestFormProperties {
	}
	export function CreateDisassociateTrackerConsumerRequestFormGroup() {
		return new FormGroup<DisassociateTrackerConsumerRequestFormProperties>({
		});

	}

	export interface GetDevicePositionHistoryRequest {
		EndTimeExclusive?: Date;
		MaxResults?: number | null;
		NextToken?: string;
		StartTimeInclusive?: Date;
	}
	export interface GetDevicePositionHistoryRequestFormProperties {
		EndTimeExclusive: FormControl<Date | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		StartTimeInclusive: FormControl<Date | null | undefined>,
	}
	export function CreateGetDevicePositionHistoryRequestFormGroup() {
		return new FormGroup<GetDevicePositionHistoryRequestFormProperties>({
			EndTimeExclusive: new FormControl<Date | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			StartTimeInclusive: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetDevicePositionRequest {
	}
	export interface GetDevicePositionRequestFormProperties {
	}
	export function CreateGetDevicePositionRequestFormGroup() {
		return new FormGroup<GetDevicePositionRequestFormProperties>({
		});

	}

	export interface GetGeofenceRequest {
	}
	export interface GetGeofenceRequestFormProperties {
	}
	export function CreateGetGeofenceRequestFormGroup() {
		return new FormGroup<GetGeofenceRequestFormProperties>({
		});

	}

	export interface GetMapGlyphsRequest {
	}
	export interface GetMapGlyphsRequestFormProperties {
	}
	export function CreateGetMapGlyphsRequestFormGroup() {
		return new FormGroup<GetMapGlyphsRequestFormProperties>({
		});

	}

	export interface GetMapSpritesRequest {
	}
	export interface GetMapSpritesRequestFormProperties {
	}
	export function CreateGetMapSpritesRequestFormGroup() {
		return new FormGroup<GetMapSpritesRequestFormProperties>({
		});

	}

	export interface GetMapStyleDescriptorRequest {
	}
	export interface GetMapStyleDescriptorRequestFormProperties {
	}
	export function CreateGetMapStyleDescriptorRequestFormGroup() {
		return new FormGroup<GetMapStyleDescriptorRequestFormProperties>({
		});

	}

	export interface GetMapTileRequest {
	}
	export interface GetMapTileRequestFormProperties {
	}
	export function CreateGetMapTileRequestFormGroup() {
		return new FormGroup<GetMapTileRequestFormProperties>({
		});

	}

	export interface GetPlaceRequest {
	}
	export interface GetPlaceRequestFormProperties {
	}
	export function CreateGetPlaceRequestFormGroup() {
		return new FormGroup<GetPlaceRequestFormProperties>({
		});

	}

	export interface ListDevicePositionsRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListDevicePositionsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDevicePositionsRequestFormGroup() {
		return new FormGroup<ListDevicePositionsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGeofenceCollectionsRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListGeofenceCollectionsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGeofenceCollectionsRequestFormGroup() {
		return new FormGroup<ListGeofenceCollectionsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGeofencesRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListGeofencesRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGeofencesRequestFormGroup() {
		return new FormGroup<ListGeofencesRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListKeysRequest {
		Filter?: ApiKeyFilter;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListKeysRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListKeysRequestFormGroup() {
		return new FormGroup<ListKeysRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMapsRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListMapsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMapsRequestFormGroup() {
		return new FormGroup<ListMapsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPlaceIndexesRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListPlaceIndexesRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPlaceIndexesRequestFormGroup() {
		return new FormGroup<ListPlaceIndexesRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRouteCalculatorsRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListRouteCalculatorsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRouteCalculatorsRequestFormGroup() {
		return new FormGroup<ListRouteCalculatorsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}

	export interface ListTrackerConsumersRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListTrackerConsumersRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTrackerConsumersRequestFormGroup() {
		return new FormGroup<ListTrackerConsumersRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTrackersRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListTrackersRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTrackersRequestFormGroup() {
		return new FormGroup<ListTrackersRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the political view for the style. */
	export interface MapConfigurationUpdate {
		PoliticalView?: string;
	}

	/** Specifies the political view for the style. */
	export interface MapConfigurationUpdateFormProperties {
		PoliticalView: FormControl<string | null | undefined>,
	}
	export function CreateMapConfigurationUpdateFormGroup() {
		return new FormGroup<MapConfigurationUpdateFormProperties>({
			PoliticalView: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutGeofenceRequest {
		GeofenceProperties?: PropertyMap;

		/** Required */
		Geometry: GeofenceGeometry;
	}
	export interface PutGeofenceRequestFormProperties {
	}
	export function CreatePutGeofenceRequestFormGroup() {
		return new FormGroup<PutGeofenceRequestFormProperties>({
		});

	}

	export interface SearchPlaceIndexForPositionRequest {
		Language?: string;
		MaxResults?: number | null;

		/** Required */
		Position: Array<number>;
	}
	export interface SearchPlaceIndexForPositionRequestFormProperties {
		Language: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchPlaceIndexForPositionRequestFormGroup() {
		return new FormGroup<SearchPlaceIndexForPositionRequestFormProperties>({
			Language: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SearchPlaceIndexForSuggestionsRequest {
		BiasPosition?: Array<number> | null;
		FilterBBox?: Array<number> | null;
		FilterCategories?: Array<string>;
		FilterCountries?: Array<string>;
		Language?: string;
		MaxResults?: number | null;

		/** Required */
		Text: string;
	}
	export interface SearchPlaceIndexForSuggestionsRequestFormProperties {
		Language: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,

		/** Required */
		Text: FormControl<string | null | undefined>,
	}
	export function CreateSearchPlaceIndexForSuggestionsRequestFormGroup() {
		return new FormGroup<SearchPlaceIndexForSuggestionsRequestFormProperties>({
			Language: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SearchPlaceIndexForTextRequest {
		BiasPosition?: Array<number> | null;
		FilterBBox?: Array<number> | null;
		FilterCategories?: Array<string>;
		FilterCountries?: Array<string>;
		Language?: string;
		MaxResults?: number | null;

		/** Required */
		Text: string;
	}
	export interface SearchPlaceIndexForTextRequestFormProperties {
		Language: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,

		/** Required */
		Text: FormControl<string | null | undefined>,
	}
	export function CreateSearchPlaceIndexForTextRequestFormGroup() {
		return new FormGroup<SearchPlaceIndexForTextRequestFormProperties>({
			Language: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		Tags: TagMap;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdateGeofenceCollectionRequest {
		Description?: string;
		PricingPlan?: PricingPlan;
		PricingPlanDataSource?: string;
	}
	export interface UpdateGeofenceCollectionRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		PricingPlan: FormControl<PricingPlan | null | undefined>,
		PricingPlanDataSource: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGeofenceCollectionRequestFormGroup() {
		return new FormGroup<UpdateGeofenceCollectionRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			PricingPlan: new FormControl<PricingPlan | null | undefined>(undefined),
			PricingPlanDataSource: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateKeyRequest {
		Description?: string;
		ExpireTime?: Date;
		ForceUpdate?: boolean | null;
		NoExpiry?: boolean | null;
		Restrictions?: ApiKeyRestrictions;
	}
	export interface UpdateKeyRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		ExpireTime: FormControl<Date | null | undefined>,
		ForceUpdate: FormControl<boolean | null | undefined>,
		NoExpiry: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateKeyRequestFormGroup() {
		return new FormGroup<UpdateKeyRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			ExpireTime: new FormControl<Date | null | undefined>(undefined),
			ForceUpdate: new FormControl<boolean | null | undefined>(undefined),
			NoExpiry: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateMapRequest {
		ConfigurationUpdate?: MapConfigurationUpdate;
		Description?: string;
		PricingPlan?: PricingPlan;
	}
	export interface UpdateMapRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		PricingPlan: FormControl<PricingPlan | null | undefined>,
	}
	export function CreateUpdateMapRequestFormGroup() {
		return new FormGroup<UpdateMapRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			PricingPlan: new FormControl<PricingPlan | null | undefined>(undefined),
		});

	}

	export interface UpdatePlaceIndexRequest {
		DataSourceConfiguration?: DataSourceConfiguration;
		Description?: string;
		PricingPlan?: PricingPlan;
	}
	export interface UpdatePlaceIndexRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		PricingPlan: FormControl<PricingPlan | null | undefined>,
	}
	export function CreateUpdatePlaceIndexRequestFormGroup() {
		return new FormGroup<UpdatePlaceIndexRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			PricingPlan: new FormControl<PricingPlan | null | undefined>(undefined),
		});

	}

	export interface UpdateRouteCalculatorRequest {
		Description?: string;
		PricingPlan?: PricingPlan;
	}
	export interface UpdateRouteCalculatorRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		PricingPlan: FormControl<PricingPlan | null | undefined>,
	}
	export function CreateUpdateRouteCalculatorRequestFormGroup() {
		return new FormGroup<UpdateRouteCalculatorRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			PricingPlan: new FormControl<PricingPlan | null | undefined>(undefined),
		});

	}

	export interface UpdateTrackerRequest {
		Description?: string;
		EventBridgeEnabled?: boolean | null;
		PositionFiltering?: PositionFiltering;
		PricingPlan?: PricingPlan;
		PricingPlanDataSource?: string;
	}
	export interface UpdateTrackerRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		EventBridgeEnabled: FormControl<boolean | null | undefined>,
		PositionFiltering: FormControl<PositionFiltering | null | undefined>,
		PricingPlan: FormControl<PricingPlan | null | undefined>,
		PricingPlanDataSource: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTrackerRequestFormGroup() {
		return new FormGroup<UpdateTrackerRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			EventBridgeEnabled: new FormControl<boolean | null | undefined>(undefined),
			PositionFiltering: new FormControl<PositionFiltering | null | undefined>(undefined),
			PricingPlan: new FormControl<PricingPlan | null | undefined>(undefined),
			PricingPlanDataSource: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates an association between a geofence collection and a tracker resource. This allows the tracker resource to communicate location data to the linked geofence collection. </p> <p>You can associate up to five geofence collections to each tracker resource.</p> <note> <p>Currently not supported — Cross-account configurations, such as creating associations between a tracker resource in one account and a geofence collection in another account.</p> </note>
		 * Post tracking/v0/trackers/{TrackerName}/consumers
		 * @param {string} TrackerName The name of the tracker resource to be associated with a geofence collection.
		 *     Min length: 1    Max length: 100
		 * @return {AssociateTrackerConsumerResponse} Success
		 */
		AssociateTrackerConsumer(TrackerName: string, requestBody: AssociateTrackerConsumerPostBody): Observable<AssociateTrackerConsumerResponse> {
			return this.http.post<AssociateTrackerConsumerResponse>(this.baseUri + 'tracking/v0/trackers/' + (TrackerName == null ? '' : encodeURIComponent(TrackerName)) + '/consumers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the position history of one or more devices from a tracker resource.
		 * Post tracking/v0/trackers/{TrackerName}/delete-positions
		 * @param {string} TrackerName The name of the tracker resource to delete the device position history from.
		 *     Min length: 1    Max length: 100
		 * @return {BatchDeleteDevicePositionHistoryResponse} Success
		 */
		BatchDeleteDevicePositionHistory(TrackerName: string, requestBody: BatchDeleteDevicePositionHistoryPostBody): Observable<BatchDeleteDevicePositionHistoryResponse> {
			return this.http.post<BatchDeleteDevicePositionHistoryResponse>(this.baseUri + 'tracking/v0/trackers/' + (TrackerName == null ? '' : encodeURIComponent(TrackerName)) + '/delete-positions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a batch of geofences from a geofence collection.</p> <note> <p>This operation deletes the resource permanently.</p> </note>
		 * Post geofencing/v0/collections/{CollectionName}/delete-geofences
		 * @param {string} CollectionName The geofence collection storing the geofences to be deleted.
		 *     Min length: 1    Max length: 100
		 * @return {BatchDeleteGeofenceResponse} Success
		 */
		BatchDeleteGeofence(CollectionName: string, requestBody: BatchDeleteGeofencePostBody): Observable<BatchDeleteGeofenceResponse> {
			return this.http.post<BatchDeleteGeofenceResponse>(this.baseUri + 'geofencing/v0/collections/' + (CollectionName == null ? '' : encodeURIComponent(CollectionName)) + '/delete-geofences', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Evaluates device positions against the geofence geometries from a given geofence collection.</p> <p>This operation always returns an empty response because geofences are asynchronously evaluated. The evaluation determines if the device has entered or exited a geofenced area, and then publishes one of the following events to Amazon EventBridge:</p> <ul> <li> <p> <code>ENTER</code> if Amazon Location determines that the tracked device has entered a geofenced area.</p> </li> <li> <p> <code>EXIT</code> if Amazon Location determines that the tracked device has exited a geofenced area.</p> </li> </ul> <note> <p>The last geofence that a device was observed within is tracked for 30 days after the most recent device position update.</p> </note> <note> <p>Geofence evaluation uses the given device position. It does not account for the optional <code>Accuracy</code> of a <code>DevicePositionUpdate</code>.</p> </note> <note> <p>The <code>DeviceID</code> is used as a string to represent the device. You do not need to have a <code>Tracker</code> associated with the <code>DeviceID</code>.</p> </note>
		 * Post geofencing/v0/collections/{CollectionName}/positions
		 * @param {string} CollectionName The geofence collection used in evaluating the position of devices against its geofences.
		 *     Min length: 1    Max length: 100
		 * @return {BatchEvaluateGeofencesResponse} Success
		 */
		BatchEvaluateGeofences(CollectionName: string, requestBody: BatchEvaluateGeofencesPostBody): Observable<BatchEvaluateGeofencesResponse> {
			return this.http.post<BatchEvaluateGeofencesResponse>(this.baseUri + 'geofencing/v0/collections/' + (CollectionName == null ? '' : encodeURIComponent(CollectionName)) + '/positions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the latest device positions for requested devices.
		 * Post tracking/v0/trackers/{TrackerName}/get-positions
		 * @param {string} TrackerName The tracker resource retrieving the device position.
		 *     Min length: 1
		 * @return {BatchGetDevicePositionResponse} Success
		 */
		BatchGetDevicePosition(TrackerName: string, requestBody: BatchGetDevicePositionPostBody): Observable<BatchGetDevicePositionResponse> {
			return this.http.post<BatchGetDevicePositionResponse>(this.baseUri + 'tracking/v0/trackers/' + (TrackerName == null ? '' : encodeURIComponent(TrackerName)) + '/get-positions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * A batch request for storing geofence geometries into a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request.
		 * Post geofencing/v0/collections/{CollectionName}/put-geofences
		 * @param {string} CollectionName The geofence collection storing the geofences.
		 *     Min length: 1    Max length: 100
		 * @return {BatchPutGeofenceResponse} Success
		 */
		BatchPutGeofence(CollectionName: string, requestBody: BatchPutGeofencePostBody): Observable<BatchPutGeofenceResponse> {
			return this.http.post<BatchPutGeofenceResponse>(this.baseUri + 'geofencing/v0/collections/' + (CollectionName == null ? '' : encodeURIComponent(CollectionName)) + '/put-geofences', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Uploads position update data for one or more devices to a tracker resource (up to 10 devices per batch). Amazon Location uses the data when it reports the last known device position and position history. Amazon Location retains location data for 30 days.</p> <note> <p>Position updates are handled based on the <code>PositionFiltering</code> property of the tracker. When <code>PositionFiltering</code> is set to <code>TimeBased</code>, updates are evaluated against linked geofence collections, and location data is stored at a maximum of one position per 30 second interval. If your update frequency is more often than every 30 seconds, only one update per 30 seconds is stored for each unique device ID.</p> <p>When <code>PositionFiltering</code> is set to <code>DistanceBased</code> filtering, location data is stored and evaluated against linked geofence collections only if the device has moved more than 30 m (98.4 ft).</p> <p>When <code>PositionFiltering</code> is set to <code>AccuracyBased</code> filtering, location data is stored and evaluated against linked geofence collections only if the device has moved more than the measured accuracy. For example, if two consecutive updates from a device have a horizontal accuracy of 5 m and 10 m, the second update is neither stored or evaluated if the device has moved less than 15 m. If <code>PositionFiltering</code> is set to <code>AccuracyBased</code> filtering, Amazon Location uses the default value <code>{ "Horizontal": 0}</code> when accuracy is not provided on a <code>DevicePositionUpdate</code>.</p> </note>
		 * Post tracking/v0/trackers/{TrackerName}/positions
		 * @param {string} TrackerName The name of the tracker resource to update.
		 *     Min length: 1    Max length: 100
		 * @return {BatchUpdateDevicePositionResponse} Success
		 */
		BatchUpdateDevicePosition(TrackerName: string, requestBody: BatchUpdateDevicePositionPostBody): Observable<BatchUpdateDevicePositionResponse> {
			return this.http.post<BatchUpdateDevicePositionResponse>(this.baseUri + 'tracking/v0/trackers/' + (TrackerName == null ? '' : encodeURIComponent(TrackerName)) + '/positions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html">Calculates a route</a> given the following required parameters: <code>DeparturePosition</code> and <code>DestinationPosition</code>. Requires that you first <a href="https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html">create a route calculator resource</a>.</p> <p>By default, a request that doesn't specify a departure time uses the best time of day to travel with the best traffic conditions when calculating the route.</p> <p>Additional options include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/departure-time.html">Specifying a departure time</a> using either <code>DepartureTime</code> or <code>DepartNow</code>. This calculates a route based on predictive traffic data at the given time. </p> <note> <p>You can't specify both <code>DepartureTime</code> and <code>DepartNow</code> in a single request. Specifying both parameters returns a validation error.</p> </note> </li> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/travel-mode.html">Specifying a travel mode</a> using TravelMode sets the transportation mode used to calculate the routes. This also lets you specify additional route preferences in <code>CarModeOptions</code> if traveling by <code>Car</code>, or <code>TruckModeOptions</code> if traveling by <code>Truck</code>.</p> <note> <p>If you specify <code>walking</code> for the travel mode and your data provider is Esri, the start and destination must be within 40km.</p> </note> </li> </ul>
		 * Post routes/v0/calculators/{CalculatorName}/calculate/route
		 * @param {string} CalculatorName The name of the route calculator resource that you want to use to calculate the route. 
		 *     Min length: 1    Max length: 100
		 * @param {string} key The optional <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">API key</a> to authorize the request.
		 *     Min length: 0    Max length: 1000
		 * @return {CalculateRouteResponse} Success
		 */
		CalculateRoute(CalculatorName: string, key: string | null | undefined, requestBody: CalculateRoutePostBody): Observable<CalculateRouteResponse> {
			return this.http.post<CalculateRouteResponse>(this.baseUri + 'routes/v0/calculators/' + (CalculatorName == null ? '' : encodeURIComponent(CalculatorName)) + '/calculate/route&key=' + (key == null ? '' : encodeURIComponent(key)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route-matrix.html"> Calculates a route matrix</a> given the following required parameters: <code>DeparturePositions</code> and <code>DestinationPositions</code>. <code>CalculateRouteMatrix</code> calculates routes and returns the travel time and travel distance from each departure position to each destination position in the request. For example, given departure positions A and B, and destination positions X and Y, <code>CalculateRouteMatrix</code> will return time and distance for routes from A to X, A to Y, B to X, and B to Y (in that order). The number of results returned (and routes calculated) will be the number of <code>DeparturePositions</code> times the number of <code>DestinationPositions</code>.</p> <note> <p>Your account is charged for each route calculated, not the number of requests.</p> </note> <p>Requires that you first <a href="https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html">create a route calculator resource</a>.</p> <p>By default, a request that doesn't specify a departure time uses the best time of day to travel with the best traffic conditions when calculating routes.</p> <p>Additional options include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/departure-time.html"> Specifying a departure time</a> using either <code>DepartureTime</code> or <code>DepartNow</code>. This calculates routes based on predictive traffic data at the given time. </p> <note> <p>You can't specify both <code>DepartureTime</code> and <code>DepartNow</code> in a single request. Specifying both parameters returns a validation error.</p> </note> </li> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/travel-mode.html">Specifying a travel mode</a> using TravelMode sets the transportation mode used to calculate the routes. This also lets you specify additional route preferences in <code>CarModeOptions</code> if traveling by <code>Car</code>, or <code>TruckModeOptions</code> if traveling by <code>Truck</code>.</p> </li> </ul>
		 * Post routes/v0/calculators/{CalculatorName}/calculate/route-matrix
		 * @param {string} CalculatorName The name of the route calculator resource that you want to use to calculate the route matrix. 
		 *     Min length: 1    Max length: 100
		 * @param {string} key The optional <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">API key</a> to authorize the request.
		 *     Min length: 0    Max length: 1000
		 * @return {CalculateRouteMatrixResponse} Success
		 */
		CalculateRouteMatrix(CalculatorName: string, key: string | null | undefined, requestBody: CalculateRouteMatrixPostBody): Observable<CalculateRouteMatrixResponse> {
			return this.http.post<CalculateRouteMatrixResponse>(this.baseUri + 'routes/v0/calculators/' + (CalculatorName == null ? '' : encodeURIComponent(CalculatorName)) + '/calculate/route-matrix&key=' + (key == null ? '' : encodeURIComponent(key)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a geofence collection, which manages and stores geofences.
		 * Post geofencing/v0/collections
		 * @return {CreateGeofenceCollectionResponse} Success
		 */
		CreateGeofenceCollection(requestBody: CreateGeofenceCollectionPostBody): Observable<CreateGeofenceCollectionResponse> {
			return this.http.post<CreateGeofenceCollectionResponse>(this.baseUri + 'geofencing/v0/collections', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an API key resource in your Amazon Web Services account, which lets you grant actions for Amazon Location resources to the API key bearer.</p> <note> <p>For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </note>
		 * Post metadata/v0/keys
		 * @return {CreateKeyResponse} Success
		 */
		CreateKey(requestBody: CreateKeyPostBody): Observable<CreateKeyResponse> {
			return this.http.post<CreateKeyResponse>(this.baseUri + 'metadata/v0/keys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a map resource in your Amazon Web Services account, which provides map tiles of different styles sourced from global location data providers.</p> <note> <p>If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services service terms</a> for more details.</p> </note>
		 * Post maps/v0/maps
		 * @return {CreateMapResponse} Success
		 */
		CreateMap(requestBody: CreateMapPostBody): Observable<CreateMapResponse> {
			return this.http.post<CreateMapResponse>(this.baseUri + 'maps/v0/maps', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a place index resource in your Amazon Web Services account. Use a place index resource to geocode addresses and other text queries by using the <code>SearchPlaceIndexForText</code> operation, and reverse geocode coordinates by using the <code>SearchPlaceIndexForPosition</code> operation, and enable autosuggestions by using the <code>SearchPlaceIndexForSuggestions</code> operation.</p> <note> <p>If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services service terms</a> for more details.</p> </note>
		 * Post places/v0/indexes
		 * @return {CreatePlaceIndexResponse} Success
		 */
		CreatePlaceIndex(requestBody: CreatePlaceIndexPostBody): Observable<CreatePlaceIndexResponse> {
			return this.http.post<CreatePlaceIndexResponse>(this.baseUri + 'places/v0/indexes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a route calculator resource in your Amazon Web Services account.</p> <p>You can send requests to a route calculator resource to estimate travel time, distance, and get directions. A route calculator sources traffic and road network data from your chosen data provider.</p> <note> <p>If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services service terms</a> for more details.</p> </note>
		 * Post routes/v0/calculators
		 * @return {CreateRouteCalculatorResponse} Success
		 */
		CreateRouteCalculator(requestBody: CreateRouteCalculatorPostBody): Observable<CreateRouteCalculatorResponse> {
			return this.http.post<CreateRouteCalculatorResponse>(this.baseUri + 'routes/v0/calculators', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a tracker resource in your Amazon Web Services account, which lets you retrieve current and historical location of devices.
		 * Post tracking/v0/trackers
		 * @return {CreateTrackerResponse} Success
		 */
		CreateTracker(requestBody: CreateTrackerPostBody): Observable<CreateTrackerResponse> {
			return this.http.post<CreateTrackerResponse>(this.baseUri + 'tracking/v0/trackers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a geofence collection from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently. If the geofence collection is the target of a tracker resource, the devices will no longer be monitored.</p> </note>
		 * Delete geofencing/v0/collections/{CollectionName}
		 * @param {string} CollectionName The name of the geofence collection to be deleted.
		 *     Min length: 1    Max length: 100
		 * @return {DeleteGeofenceCollectionResponse} Success
		 */
		DeleteGeofenceCollection(CollectionName: string): Observable<DeleteGeofenceCollectionResponse> {
			return this.http.delete<DeleteGeofenceCollectionResponse>(this.baseUri + 'geofencing/v0/collections/' + (CollectionName == null ? '' : encodeURIComponent(CollectionName)), {});
		}

		/**
		 * Retrieves the geofence collection details.
		 * Get geofencing/v0/collections/{CollectionName}
		 * @param {string} CollectionName The name of the geofence collection.
		 *     Min length: 1    Max length: 100
		 * @return {DescribeGeofenceCollectionResponse} Success
		 */
		DescribeGeofenceCollection(CollectionName: string): Observable<DescribeGeofenceCollectionResponse> {
			return this.http.get<DescribeGeofenceCollectionResponse>(this.baseUri + 'geofencing/v0/collections/' + (CollectionName == null ? '' : encodeURIComponent(CollectionName)), {});
		}

		/**
		 * Updates the specified properties of a given geofence collection.
		 * Patch geofencing/v0/collections/{CollectionName}
		 * @param {string} CollectionName The name of the geofence collection to update.
		 *     Min length: 1    Max length: 100
		 * @return {UpdateGeofenceCollectionResponse} Success
		 */
		UpdateGeofenceCollection(CollectionName: string, requestBody: UpdateGeofenceCollectionPatchBody): Observable<UpdateGeofenceCollectionResponse> {
			return this.http.patch<UpdateGeofenceCollectionResponse>(this.baseUri + 'geofencing/v0/collections/' + (CollectionName == null ? '' : encodeURIComponent(CollectionName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified API key. The API key must have been deactivated more than 90 days previously.
		 * Delete metadata/v0/keys/{KeyName}
		 * @param {string} KeyName The name of the API key to delete.
		 *     Min length: 1    Max length: 100
		 * @return {DeleteKeyResponse} Success
		 */
		DeleteKey(KeyName: string): Observable<DeleteKeyResponse> {
			return this.http.delete<DeleteKeyResponse>(this.baseUri + 'metadata/v0/keys/' + (KeyName == null ? '' : encodeURIComponent(KeyName)), {});
		}

		/**
		 * Retrieves the API key resource details.
		 * Get metadata/v0/keys/{KeyName}
		 * @param {string} KeyName The name of the API key resource.
		 *     Min length: 1    Max length: 100
		 * @return {DescribeKeyResponse} Success
		 */
		DescribeKey(KeyName: string): Observable<DescribeKeyResponse> {
			return this.http.get<DescribeKeyResponse>(this.baseUri + 'metadata/v0/keys/' + (KeyName == null ? '' : encodeURIComponent(KeyName)), {});
		}

		/**
		 * Updates the specified properties of a given API key resource.
		 * Patch metadata/v0/keys/{KeyName}
		 * @param {string} KeyName The name of the API key resource to update.
		 *     Min length: 1    Max length: 100
		 * @return {UpdateKeyResponse} Success
		 */
		UpdateKey(KeyName: string, requestBody: UpdateKeyPatchBody): Observable<UpdateKeyResponse> {
			return this.http.patch<UpdateKeyResponse>(this.baseUri + 'metadata/v0/keys/' + (KeyName == null ? '' : encodeURIComponent(KeyName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a map resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently. If the map is being used in an application, the map may not render.</p> </note>
		 * Delete maps/v0/maps/{MapName}
		 * @param {string} MapName The name of the map resource to be deleted.
		 *     Min length: 1    Max length: 100
		 * @return {DeleteMapResponse} Success
		 */
		DeleteMap(MapName: string): Observable<DeleteMapResponse> {
			return this.http.delete<DeleteMapResponse>(this.baseUri + 'maps/v0/maps/' + (MapName == null ? '' : encodeURIComponent(MapName)), {});
		}

		/**
		 * Retrieves the map resource details.
		 * Get maps/v0/maps/{MapName}
		 * @param {string} MapName The name of the map resource.
		 *     Min length: 1    Max length: 100
		 * @return {DescribeMapResponse} Success
		 */
		DescribeMap(MapName: string): Observable<DescribeMapResponse> {
			return this.http.get<DescribeMapResponse>(this.baseUri + 'maps/v0/maps/' + (MapName == null ? '' : encodeURIComponent(MapName)), {});
		}

		/**
		 * Updates the specified properties of a given map resource.
		 * Patch maps/v0/maps/{MapName}
		 * @param {string} MapName The name of the map resource to update.
		 *     Min length: 1    Max length: 100
		 * @return {UpdateMapResponse} Success
		 */
		UpdateMap(MapName: string, requestBody: UpdateMapPatchBody): Observable<UpdateMapResponse> {
			return this.http.patch<UpdateMapResponse>(this.baseUri + 'maps/v0/maps/' + (MapName == null ? '' : encodeURIComponent(MapName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a place index resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently.</p> </note>
		 * Delete places/v0/indexes/{IndexName}
		 * @param {string} IndexName The name of the place index resource to be deleted.
		 *     Min length: 1    Max length: 100
		 * @return {DeletePlaceIndexResponse} Success
		 */
		DeletePlaceIndex(IndexName: string): Observable<DeletePlaceIndexResponse> {
			return this.http.delete<DeletePlaceIndexResponse>(this.baseUri + 'places/v0/indexes/' + (IndexName == null ? '' : encodeURIComponent(IndexName)), {});
		}

		/**
		 * Retrieves the place index resource details.
		 * Get places/v0/indexes/{IndexName}
		 * @param {string} IndexName The name of the place index resource.
		 *     Min length: 1    Max length: 100
		 * @return {DescribePlaceIndexResponse} Success
		 */
		DescribePlaceIndex(IndexName: string): Observable<DescribePlaceIndexResponse> {
			return this.http.get<DescribePlaceIndexResponse>(this.baseUri + 'places/v0/indexes/' + (IndexName == null ? '' : encodeURIComponent(IndexName)), {});
		}

		/**
		 * Updates the specified properties of a given place index resource.
		 * Patch places/v0/indexes/{IndexName}
		 * @param {string} IndexName The name of the place index resource to update.
		 *     Min length: 1    Max length: 100
		 * @return {UpdatePlaceIndexResponse} Success
		 */
		UpdatePlaceIndex(IndexName: string, requestBody: UpdatePlaceIndexPatchBody): Observable<UpdatePlaceIndexResponse> {
			return this.http.patch<UpdatePlaceIndexResponse>(this.baseUri + 'places/v0/indexes/' + (IndexName == null ? '' : encodeURIComponent(IndexName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a route calculator resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently.</p> </note>
		 * Delete routes/v0/calculators/{CalculatorName}
		 * @param {string} CalculatorName The name of the route calculator resource to be deleted.
		 *     Min length: 1    Max length: 100
		 * @return {DeleteRouteCalculatorResponse} Success
		 */
		DeleteRouteCalculator(CalculatorName: string): Observable<DeleteRouteCalculatorResponse> {
			return this.http.delete<DeleteRouteCalculatorResponse>(this.baseUri + 'routes/v0/calculators/' + (CalculatorName == null ? '' : encodeURIComponent(CalculatorName)), {});
		}

		/**
		 * Retrieves the route calculator resource details.
		 * Get routes/v0/calculators/{CalculatorName}
		 * @param {string} CalculatorName The name of the route calculator resource.
		 *     Min length: 1    Max length: 100
		 * @return {DescribeRouteCalculatorResponse} Success
		 */
		DescribeRouteCalculator(CalculatorName: string): Observable<DescribeRouteCalculatorResponse> {
			return this.http.get<DescribeRouteCalculatorResponse>(this.baseUri + 'routes/v0/calculators/' + (CalculatorName == null ? '' : encodeURIComponent(CalculatorName)), {});
		}

		/**
		 * Updates the specified properties for a given route calculator resource.
		 * Patch routes/v0/calculators/{CalculatorName}
		 * @param {string} CalculatorName The name of the route calculator resource to update.
		 *     Min length: 1    Max length: 100
		 * @return {UpdateRouteCalculatorResponse} Success
		 */
		UpdateRouteCalculator(CalculatorName: string, requestBody: UpdateRouteCalculatorPatchBody): Observable<UpdateRouteCalculatorResponse> {
			return this.http.patch<UpdateRouteCalculatorResponse>(this.baseUri + 'routes/v0/calculators/' + (CalculatorName == null ? '' : encodeURIComponent(CalculatorName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a tracker resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently. If the tracker resource is in use, you may encounter an error. Make sure that the target resource isn't a dependency for your applications.</p> </note>
		 * Delete tracking/v0/trackers/{TrackerName}
		 * @param {string} TrackerName The name of the tracker resource to be deleted.
		 *     Min length: 1    Max length: 100
		 * @return {DeleteTrackerResponse} Success
		 */
		DeleteTracker(TrackerName: string): Observable<DeleteTrackerResponse> {
			return this.http.delete<DeleteTrackerResponse>(this.baseUri + 'tracking/v0/trackers/' + (TrackerName == null ? '' : encodeURIComponent(TrackerName)), {});
		}

		/**
		 * Retrieves the tracker resource details.
		 * Get tracking/v0/trackers/{TrackerName}
		 * @param {string} TrackerName The name of the tracker resource.
		 *     Min length: 1    Max length: 100
		 * @return {DescribeTrackerResponse} Success
		 */
		DescribeTracker(TrackerName: string): Observable<DescribeTrackerResponse> {
			return this.http.get<DescribeTrackerResponse>(this.baseUri + 'tracking/v0/trackers/' + (TrackerName == null ? '' : encodeURIComponent(TrackerName)), {});
		}

		/**
		 * Updates the specified properties of a given tracker resource.
		 * Patch tracking/v0/trackers/{TrackerName}
		 * @param {string} TrackerName The name of the tracker resource to update.
		 *     Min length: 1    Max length: 100
		 * @return {UpdateTrackerResponse} Success
		 */
		UpdateTracker(TrackerName: string, requestBody: UpdateTrackerPatchBody): Observable<UpdateTrackerResponse> {
			return this.http.patch<UpdateTrackerResponse>(this.baseUri + 'tracking/v0/trackers/' + (TrackerName == null ? '' : encodeURIComponent(TrackerName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes the association between a tracker resource and a geofence collection.</p> <note> <p>Once you unlink a tracker resource from a geofence collection, the tracker positions will no longer be automatically evaluated against geofences.</p> </note>
		 * Delete tracking/v0/trackers/{TrackerName}/consumers/{ConsumerArn}
		 * @param {string} ConsumerArn <p>The Amazon Resource Name (ARN) for the geofence collection to be disassociated from the tracker resource. Used when you need to specify a resource across all Amazon Web Services. </p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:geofence-collection/ExampleGeofenceCollectionConsumer</code> </p> </li> </ul>
		 *     Min length: 0    Max length: 1600
		 * @param {string} TrackerName The name of the tracker resource to be dissociated from the consumer.
		 *     Min length: 1    Max length: 100
		 * @return {DisassociateTrackerConsumerResponse} Success
		 */
		DisassociateTrackerConsumer(ConsumerArn: string, TrackerName: string): Observable<DisassociateTrackerConsumerResponse> {
			return this.http.delete<DisassociateTrackerConsumerResponse>(this.baseUri + 'tracking/v0/trackers/' + (TrackerName == null ? '' : encodeURIComponent(TrackerName)) + '/consumers/' + (ConsumerArn == null ? '' : encodeURIComponent(ConsumerArn)), {});
		}

		/**
		 * <p>Retrieves a device's most recent position according to its sample time.</p> <note> <p>Device positions are deleted after 30 days.</p> </note>
		 * Get tracking/v0/trackers/{TrackerName}/devices/{DeviceId}/positions/latest
		 * @param {string} DeviceId The device whose position you want to retrieve.
		 *     Min length: 1    Max length: 100
		 * @param {string} TrackerName The tracker resource receiving the position update.
		 *     Min length: 1    Max length: 100
		 * @return {GetDevicePositionResponse} Success
		 */
		GetDevicePosition(DeviceId: string, TrackerName: string): Observable<GetDevicePositionResponse> {
			return this.http.get<GetDevicePositionResponse>(this.baseUri + 'tracking/v0/trackers/' + (TrackerName == null ? '' : encodeURIComponent(TrackerName)) + '/devices/' + (DeviceId == null ? '' : encodeURIComponent(DeviceId)) + '/positions/latest', {});
		}

		/**
		 * <p>Retrieves the device position history from a tracker resource within a specified range of time.</p> <note> <p>Device positions are deleted after 30 days.</p> </note>
		 * Post tracking/v0/trackers/{TrackerName}/devices/{DeviceId}/list-positions
		 * @param {string} DeviceId The device whose position history you want to retrieve.
		 *     Min length: 1    Max length: 100
		 * @param {string} TrackerName The tracker resource receiving the request for the device position history.
		 *     Min length: 1    Max length: 100
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetDevicePositionHistoryResponse} Success
		 */
		GetDevicePositionHistory(DeviceId: string, TrackerName: string, MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetDevicePositionHistoryPostBody): Observable<GetDevicePositionHistoryResponse> {
			return this.http.post<GetDevicePositionHistoryResponse>(this.baseUri + 'tracking/v0/trackers/' + (TrackerName == null ? '' : encodeURIComponent(TrackerName)) + '/devices/' + (DeviceId == null ? '' : encodeURIComponent(DeviceId)) + '/list-positions&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the geofence details from a geofence collection.
		 * Get geofencing/v0/collections/{CollectionName}/geofences/{GeofenceId}
		 * @param {string} CollectionName The geofence collection storing the target geofence.
		 *     Min length: 1    Max length: 100
		 * @param {string} GeofenceId The geofence you're retrieving details for.
		 *     Min length: 1    Max length: 100
		 * @return {GetGeofenceResponse} Success
		 */
		GetGeofence(CollectionName: string, GeofenceId: string): Observable<GetGeofenceResponse> {
			return this.http.get<GetGeofenceResponse>(this.baseUri + 'geofencing/v0/collections/' + (CollectionName == null ? '' : encodeURIComponent(CollectionName)) + '/geofences/' + (GeofenceId == null ? '' : encodeURIComponent(GeofenceId)), {});
		}

		/**
		 * Stores a geofence geometry in a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request.
		 * Put geofencing/v0/collections/{CollectionName}/geofences/{GeofenceId}
		 * @param {string} CollectionName The geofence collection to store the geofence in.
		 *     Min length: 1    Max length: 100
		 * @param {string} GeofenceId An identifier for the geofence. For example, <code>ExampleGeofence-1</code>.
		 *     Min length: 1    Max length: 100
		 * @return {PutGeofenceResponse} Success
		 */
		PutGeofence(CollectionName: string, GeofenceId: string, requestBody: PutGeofencePutBody): Observable<PutGeofenceResponse> {
			return this.http.put<PutGeofenceResponse>(this.baseUri + 'geofencing/v0/collections/' + (CollectionName == null ? '' : encodeURIComponent(CollectionName)) + '/geofences/' + (GeofenceId == null ? '' : encodeURIComponent(GeofenceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves glyphs used to display labels on a map.
		 * Get maps/v0/maps/{MapName}/glyphs/{FontStack}/{FontUnicodeRange}
		 * @param {string} FontStack <p>A comma-separated list of fonts to load glyphs from in order of preference. For example, <code>Noto Sans Regular, Arial Unicode</code>.</p> <p>Valid fonts stacks for <a href="https://docs.aws.amazon.com/location/latest/developerguide/esri.html">Esri</a> styles: </p> <ul> <li> <p>VectorEsriDarkGrayCanvas – <code>Ubuntu Medium Italic</code> | <code>Ubuntu Medium</code> | <code>Ubuntu Italic</code> | <code>Ubuntu Regular</code> | <code>Ubuntu Bold</code> </p> </li> <li> <p>VectorEsriLightGrayCanvas – <code>Ubuntu Italic</code> | <code>Ubuntu Regular</code> | <code>Ubuntu Light</code> | <code>Ubuntu Bold</code> </p> </li> <li> <p>VectorEsriTopographic – <code>Noto Sans Italic</code> | <code>Noto Sans Regular</code> | <code>Noto Sans Bold</code> | <code>Noto Serif Regular</code> | <code>Roboto Condensed Light Italic</code> </p> </li> <li> <p>VectorEsriStreets – <code>Arial Regular</code> | <code>Arial Italic</code> | <code>Arial Bold</code> </p> </li> <li> <p>VectorEsriNavigation – <code>Arial Regular</code> | <code>Arial Italic</code> | <code>Arial Bold</code> </p> </li> </ul> <p>Valid font stacks for <a href="https://docs.aws.amazon.com/location/latest/developerguide/HERE.html">HERE Technologies</a> styles:</p> <ul> <li> <p>VectorHereContrast – <code>Fira GO Regular</code> | <code>Fira GO Bold</code> </p> </li> <li> <p>VectorHereExplore, VectorHereExploreTruck, HybridHereExploreSatellite – <code>Fira GO Italic</code> | <code>Fira GO Map</code> | <code>Fira GO Map Bold</code> | <code>Noto Sans CJK JP Bold</code> | <code>Noto Sans CJK JP Light</code> | <code>Noto Sans CJK JP Regular</code> </p> </li> </ul> <p>Valid font stacks for <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html">GrabMaps</a> styles:</p> <ul> <li> <p>VectorGrabStandardLight, VectorGrabStandardDark – <code>Noto Sans Regular</code> | <code>Noto Sans Medium</code> | <code>Noto Sans Bold</code> </p> </li> </ul> <p>Valid font stacks for <a href="https://docs.aws.amazon.com/location/latest/developerguide/open-data.html">Open Data</a> styles:</p> <ul> <li> <p>VectorOpenDataStandardLight, VectorOpenDataStandardDark, VectorOpenDataVisualizationLight, VectorOpenDataVisualizationDark – <code>Amazon Ember Regular,Noto Sans Regular</code> | <code>Amazon Ember Bold,Noto Sans Bold</code> | <code>Amazon Ember Medium,Noto Sans Medium</code> | <code>Amazon Ember Regular Italic,Noto Sans Italic</code> | <code>Amazon Ember Condensed RC Regular,Noto Sans Regular</code> | <code>Amazon Ember Condensed RC Bold,Noto Sans Bold</code> | <code>Amazon Ember Regular,Noto Sans Regular,Noto Sans Arabic Regular</code> | <code>Amazon Ember Condensed RC Bold,Noto Sans Bold,Noto Sans Arabic Condensed Bold</code> | <code>Amazon Ember Bold,Noto Sans Bold,Noto Sans Arabic Bold</code> | <code>Amazon Ember Regular Italic,Noto Sans Italic,Noto Sans Arabic Regular</code> | <code>Amazon Ember Condensed RC Regular,Noto Sans Regular,Noto Sans Arabic Condensed Regular</code> | <code>Amazon Ember Medium,Noto Sans Medium,Noto Sans Arabic Medium</code> </p> </li> </ul> <note> <p>The fonts used by the Open Data map styles are combined fonts that use <code>Amazon Ember</code> for most glyphs but <code>Noto Sans</code> for glyphs unsupported by <code>Amazon Ember</code>.</p> </note>
		 * @param {string} FontUnicodeRange A Unicode range of characters to download glyphs for. Each response will contain 256 characters. For example, 0–255 includes all characters from range <code>U+0000</code> to <code>00FF</code>. Must be aligned to multiples of 256.
		 * @param {string} key The optional <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">API key</a> to authorize the request.
		 *     Min length: 0    Max length: 1000
		 * @param {string} MapName The map resource associated with the glyph ﬁle.
		 *     Min length: 1    Max length: 100
		 * @return {GetMapGlyphsResponse} Success
		 */
		GetMapGlyphs(FontStack: string, FontUnicodeRange: string, key: string | null | undefined, MapName: string): Observable<GetMapGlyphsResponse> {
			return this.http.get<GetMapGlyphsResponse>(this.baseUri + 'maps/v0/maps/' + (MapName == null ? '' : encodeURIComponent(MapName)) + '/glyphs/' + (FontStack == null ? '' : encodeURIComponent(FontStack)) + '/' + (FontUnicodeRange == null ? '' : encodeURIComponent(FontUnicodeRange)) + '&key=' + (key == null ? '' : encodeURIComponent(key)), {});
		}

		/**
		 * Retrieves the sprite sheet corresponding to a map resource. The sprite sheet is a PNG image paired with a JSON document describing the offsets of individual icons that will be displayed on a rendered map.
		 * Get maps/v0/maps/{MapName}/sprites/{FileName}
		 * @param {string} FileName <p>The name of the sprite ﬁle. Use the following ﬁle names for the sprite sheet:</p> <ul> <li> <p> <code>sprites.png</code> </p> </li> <li> <p> <code>sprites@2x.png</code> for high pixel density displays</p> </li> </ul> <p>For the JSON document containing image offsets. Use the following ﬁle names:</p> <ul> <li> <p> <code>sprites.json</code> </p> </li> <li> <p> <code>sprites@2x.json</code> for high pixel density displays</p> </li> </ul>
		 * @param {string} key The optional <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">API key</a> to authorize the request.
		 *     Min length: 0    Max length: 1000
		 * @param {string} MapName The map resource associated with the sprite ﬁle.
		 *     Min length: 1    Max length: 100
		 * @return {GetMapSpritesResponse} Success
		 */
		GetMapSprites(FileName: string, key: string | null | undefined, MapName: string): Observable<GetMapSpritesResponse> {
			return this.http.get<GetMapSpritesResponse>(this.baseUri + 'maps/v0/maps/' + (MapName == null ? '' : encodeURIComponent(MapName)) + '/sprites/' + (FileName == null ? '' : encodeURIComponent(FileName)) + '&key=' + (key == null ? '' : encodeURIComponent(key)), {});
		}

		/**
		 * <p>Retrieves the map style descriptor from a map resource. </p> <p>The style descriptor contains speciﬁcations on how features render on a map. For example, what data to display, what order to display the data in, and the style for the data. Style descriptors follow the Mapbox Style Specification.</p>
		 * Get maps/v0/maps/{MapName}/style-descriptor
		 * @param {string} key The optional <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">API key</a> to authorize the request.
		 *     Min length: 0    Max length: 1000
		 * @param {string} MapName The map resource to retrieve the style descriptor from.
		 *     Min length: 1    Max length: 100
		 * @return {GetMapStyleDescriptorResponse} Success
		 */
		GetMapStyleDescriptor(key: string | null | undefined, MapName: string): Observable<GetMapStyleDescriptorResponse> {
			return this.http.get<GetMapStyleDescriptorResponse>(this.baseUri + 'maps/v0/maps/' + (MapName == null ? '' : encodeURIComponent(MapName)) + '/style-descriptor?key=' + (key == null ? '' : encodeURIComponent(key)), {});
		}

		/**
		 * <p>Retrieves a vector data tile from the map resource. Map tiles are used by clients to render a map. they're addressed using a grid arrangement with an X coordinate, Y coordinate, and Z (zoom) level. </p> <p>The origin (0, 0) is the top left of the map. Increasing the zoom level by 1 doubles both the X and Y dimensions, so a tile containing data for the entire world at (0/0/0) will be split into 4 tiles at zoom 1 (1/0/0, 1/0/1, 1/1/0, 1/1/1).</p>
		 * Get maps/v0/maps/{MapName}/tiles/{Z}/{X}/{Y}
		 * @param {string} key The optional <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">API key</a> to authorize the request.
		 *     Min length: 0    Max length: 1000
		 * @param {string} MapName The map resource to retrieve the map tiles from.
		 *     Min length: 1    Max length: 100
		 * @param {string} X The X axis value for the map tile.
		 * @param {string} Y The Y axis value for the map tile. 
		 * @param {string} Z The zoom value for the map tile.
		 * @return {GetMapTileResponse} Success
		 */
		GetMapTile(key: string | null | undefined, MapName: string, X: string, Y: string, Z: string): Observable<GetMapTileResponse> {
			return this.http.get<GetMapTileResponse>(this.baseUri + 'maps/v0/maps/' + (MapName == null ? '' : encodeURIComponent(MapName)) + '/tiles/' + (Z == null ? '' : encodeURIComponent(Z)) + '/' + (X == null ? '' : encodeURIComponent(X)) + '/' + (Y == null ? '' : encodeURIComponent(Y)) + '?key=' + (key == null ? '' : encodeURIComponent(key)), {});
		}

		/**
		 * <p>Finds a place by its unique ID. A <code>PlaceId</code> is returned by other search operations.</p> <note> <p>A PlaceId is valid only if all of the following are the same in the original search request and the call to <code>GetPlace</code>.</p> <ul> <li> <p>Customer Amazon Web Services account</p> </li> <li> <p>Amazon Web Services Region</p> </li> <li> <p>Data provider specified in the place index resource</p> </li> </ul> </note>
		 * Get places/v0/indexes/{IndexName}/places/{PlaceId}
		 * @param {string} IndexName The name of the place index resource that you want to use for the search.
		 *     Min length: 1    Max length: 100
		 * @param {string} key The optional <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">API key</a> to authorize the request.
		 *     Min length: 0    Max length: 1000
		 * @param {string} language <p>The preferred language used to return results. The value must be a valid <a href="https://tools.ietf.org/search/bcp47">BCP 47</a> language tag, for example, <code>en</code> for English.</p> <p>This setting affects the languages used in the results, but not the results themselves. If no language is specified, or not supported for a particular result, the partner automatically chooses a language for the result.</p> <p>For an example, we'll use the Greek language. You search for a location around Athens, Greece, with the <code>language</code> parameter set to <code>en</code>. The <code>city</code> in the results will most likely be returned as <code>Athens</code>.</p> <p>If you set the <code>language</code> parameter to <code>el</code>, for Greek, then the <code>city</code> in the results will more likely be returned as <code>Αθήνα</code>.</p> <p>If the data provider does not have a value for Greek, the result will be in a language that the provider does support.</p>
		 *     Min length: 2    Max length: 35
		 * @param {string} PlaceId The identifier of the place to find.
		 * @return {GetPlaceResponse} Success
		 */
		GetPlace(IndexName: string, key: string | null | undefined, language: string | null | undefined, PlaceId: string): Observable<GetPlaceResponse> {
			return this.http.get<GetPlaceResponse>(this.baseUri + 'places/v0/indexes/' + (IndexName == null ? '' : encodeURIComponent(IndexName)) + '/places/' + (PlaceId == null ? '' : encodeURIComponent(PlaceId)) + '&key=' + (key == null ? '' : encodeURIComponent(key)) + '&language=' + (language == null ? '' : encodeURIComponent(language)), {});
		}

		/**
		 * A batch request to retrieve all device positions.
		 * Post tracking/v0/trackers/{TrackerName}/list-positions
		 * @param {string} TrackerName The tracker resource containing the requested devices.
		 *     Min length: 1    Max length: 100
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDevicePositionsResponse} Success
		 */
		ListDevicePositions(TrackerName: string, MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDevicePositionsPostBody): Observable<ListDevicePositionsResponse> {
			return this.http.post<ListDevicePositionsResponse>(this.baseUri + 'tracking/v0/trackers/' + (TrackerName == null ? '' : encodeURIComponent(TrackerName)) + '/list-positions&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists geofence collections in your Amazon Web Services account.
		 * Post geofencing/v0/list-collections
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGeofenceCollectionsResponse} Success
		 */
		ListGeofenceCollections(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListGeofenceCollectionsPostBody): Observable<ListGeofenceCollectionsResponse> {
			return this.http.post<ListGeofenceCollectionsResponse>(this.baseUri + 'geofencing/v0/list-collections?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists geofences stored in a given geofence collection.
		 * Post geofencing/v0/collections/{CollectionName}/list-geofences
		 * @param {string} CollectionName The name of the geofence collection storing the list of geofences.
		 *     Min length: 1    Max length: 100
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGeofencesResponse} Success
		 */
		ListGeofences(CollectionName: string, MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListGeofencesPostBody): Observable<ListGeofencesResponse> {
			return this.http.post<ListGeofencesResponse>(this.baseUri + 'geofencing/v0/collections/' + (CollectionName == null ? '' : encodeURIComponent(CollectionName)) + '/list-geofences&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists API key resources in your Amazon Web Services account.
		 * Post metadata/v0/list-keys
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListKeysResponse} Success
		 */
		ListKeys(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListKeysPostBody): Observable<ListKeysResponse> {
			return this.http.post<ListKeysResponse>(this.baseUri + 'metadata/v0/list-keys?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists map resources in your Amazon Web Services account.
		 * Post maps/v0/list-maps
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMapsResponse} Success
		 */
		ListMaps(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListMapsPostBody): Observable<ListMapsResponse> {
			return this.http.post<ListMapsResponse>(this.baseUri + 'maps/v0/list-maps?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists place index resources in your Amazon Web Services account.
		 * Post places/v0/list-indexes
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPlaceIndexesResponse} Success
		 */
		ListPlaceIndexes(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListPlaceIndexesPostBody): Observable<ListPlaceIndexesResponse> {
			return this.http.post<ListPlaceIndexesResponse>(this.baseUri + 'places/v0/list-indexes?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists route calculator resources in your Amazon Web Services account.
		 * Post routes/v0/list-calculators
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRouteCalculatorsResponse} Success
		 */
		ListRouteCalculators(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListRouteCalculatorsPostBody): Observable<ListRouteCalculatorsResponse> {
			return this.http.post<ListRouteCalculatorsResponse>(this.baseUri + 'routes/v0/list-calculators?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of tags that are applied to the specified Amazon Location resource.
		 * Get tags/{ResourceArn}
		 * @param {string} ResourceArn <p>The Amazon Resource Name (ARN) of the resource whose tags you want to retrieve.</p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:resourcetype/ExampleResource</code> </p> </li> </ul>
		 *     Min length: 0    Max length: 1600
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(ResourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), {});
		}

		/**
		 * <p>Assigns one or more tags (key-value pairs) to the specified Amazon Location Service resource.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values.</p> <p>You can use the <code>TagResource</code> operation with an Amazon Location Service resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the tags already associated with the resource. If you specify a tag key that's already associated with the resource, the new tag value that you specify replaces the previous value for that tag. </p> <p>You can associate up to 50 tags with a resource.</p>
		 * Post tags/{ResourceArn}
		 * @param {string} ResourceArn <p>The Amazon Resource Name (ARN) of the resource whose tags you want to update.</p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:resourcetype/ExampleResource</code> </p> </li> </ul>
		 *     Min length: 0    Max length: 1600
		 * @return {TagResourceResponse} Success
		 */
		TagResource(ResourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists geofence collections currently associated to the given tracker resource.
		 * Post tracking/v0/trackers/{TrackerName}/list-consumers
		 * @param {string} TrackerName The tracker resource whose associated geofence collections you want to list.
		 *     Min length: 1    Max length: 100
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTrackerConsumersResponse} Success
		 */
		ListTrackerConsumers(TrackerName: string, MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTrackerConsumersPostBody): Observable<ListTrackerConsumersResponse> {
			return this.http.post<ListTrackerConsumersResponse>(this.baseUri + 'tracking/v0/trackers/' + (TrackerName == null ? '' : encodeURIComponent(TrackerName)) + '/list-consumers&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists tracker resources in your Amazon Web Services account.
		 * Post tracking/v0/list-trackers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTrackersResponse} Success
		 */
		ListTrackers(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTrackersPostBody): Observable<ListTrackersResponse> {
			return this.http.post<ListTrackersResponse>(this.baseUri + 'tracking/v0/list-trackers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reverse geocodes a given coordinate and returns a legible address. Allows you to search for Places or points of interest near a given position.
		 * Post places/v0/indexes/{IndexName}/search/position
		 * @param {string} IndexName The name of the place index resource you want to use for the search.
		 *     Min length: 1    Max length: 100
		 * @param {string} key The optional <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">API key</a> to authorize the request.
		 *     Min length: 0    Max length: 1000
		 * @return {SearchPlaceIndexForPositionResponse} Success
		 */
		SearchPlaceIndexForPosition(IndexName: string, key: string | null | undefined, requestBody: SearchPlaceIndexForPositionPostBody): Observable<SearchPlaceIndexForPositionResponse> {
			return this.http.post<SearchPlaceIndexForPositionResponse>(this.baseUri + 'places/v0/indexes/' + (IndexName == null ? '' : encodeURIComponent(IndexName)) + '/search/position&key=' + (key == null ? '' : encodeURIComponent(key)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Generates suggestions for addresses and points of interest based on partial or misspelled free-form text. This operation is also known as autocomplete, autosuggest, or fuzzy matching.</p> <p>Optional parameters let you narrow your search results by bounding box or country, or bias your search toward a specific position on the globe.</p> <note> <p>You can search for suggested place names near a specified position by using <code>BiasPosition</code>, or filter results within a bounding box by using <code>FilterBBox</code>. These parameters are mutually exclusive; using both <code>BiasPosition</code> and <code>FilterBBox</code> in the same command returns an error.</p> </note>
		 * Post places/v0/indexes/{IndexName}/search/suggestions
		 * @param {string} IndexName The name of the place index resource you want to use for the search.
		 *     Min length: 1    Max length: 100
		 * @param {string} key The optional <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">API key</a> to authorize the request.
		 *     Min length: 0    Max length: 1000
		 * @return {SearchPlaceIndexForSuggestionsResponse} Success
		 */
		SearchPlaceIndexForSuggestions(IndexName: string, key: string | null | undefined, requestBody: SearchPlaceIndexForSuggestionsPostBody): Observable<SearchPlaceIndexForSuggestionsResponse> {
			return this.http.post<SearchPlaceIndexForSuggestionsResponse>(this.baseUri + 'places/v0/indexes/' + (IndexName == null ? '' : encodeURIComponent(IndexName)) + '/search/suggestions&key=' + (key == null ? '' : encodeURIComponent(key)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Geocodes free-form text, such as an address, name, city, or region to allow you to search for Places or points of interest. </p> <p>Optional parameters let you narrow your search results by bounding box or country, or bias your search toward a specific position on the globe.</p> <note> <p>You can search for places near a given position using <code>BiasPosition</code>, or filter results within a bounding box using <code>FilterBBox</code>. Providing both parameters simultaneously returns an error.</p> </note> <p>Search results are returned in order of highest to lowest relevance.</p>
		 * Post places/v0/indexes/{IndexName}/search/text
		 * @param {string} IndexName The name of the place index resource you want to use for the search.
		 *     Min length: 1    Max length: 100
		 * @param {string} key The optional <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">API key</a> to authorize the request.
		 *     Min length: 0    Max length: 1000
		 * @return {SearchPlaceIndexForTextResponse} Success
		 */
		SearchPlaceIndexForText(IndexName: string, key: string | null | undefined, requestBody: SearchPlaceIndexForTextPostBody): Observable<SearchPlaceIndexForTextResponse> {
			return this.http.post<SearchPlaceIndexForTextResponse>(this.baseUri + 'places/v0/indexes/' + (IndexName == null ? '' : encodeURIComponent(IndexName)) + '/search/text&key=' + (key == null ? '' : encodeURIComponent(key)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags from the specified Amazon Location resource.
		 * Delete tags/{ResourceArn}#tagKeys
		 * @param {string} ResourceArn <p>The Amazon Resource Name (ARN) of the resource from which you want to remove tags.</p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:resourcetype/ExampleResource</code> </p> </li> </ul>
		 *     Min length: 0    Max length: 1600
		 * @param {Array<string>} tagKeys The list of tag keys to remove from the specified resource.
		 *     Minimum items: 1    Maximum items: 50
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(ResourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface AssociateTrackerConsumerPostBody {

		/**
		 * <p>The Amazon Resource Name (ARN) for the geofence collection to be associated to tracker resource. Used when you need to specify a resource across all Amazon Web Services.</p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:geofence-collection/ExampleGeofenceCollectionConsumer</code> </p> </li> </ul>
		 * Required
		 * Min length: 0
		 * Max length: 1600
		 */
		ConsumerArn: string;
	}
	export interface AssociateTrackerConsumerPostBodyFormProperties {

		/**
		 * <p>The Amazon Resource Name (ARN) for the geofence collection to be associated to tracker resource. Used when you need to specify a resource across all Amazon Web Services.</p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:geofence-collection/ExampleGeofenceCollectionConsumer</code> </p> </li> </ul>
		 * Required
		 * Min length: 0
		 * Max length: 1600
		 */
		ConsumerArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateTrackerConsumerPostBodyFormGroup() {
		return new FormGroup<AssociateTrackerConsumerPostBodyFormProperties>({
			ConsumerArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(1600), Validators.pattern('^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^/].*)?$')]),
		});

	}

	export interface BatchDeleteDevicePositionHistoryPostBody {

		/**
		 * <p>Devices whose position history you want to delete.</p> <ul> <li> <p>For example, for two devices: <code>“DeviceIds” : [DeviceId1,DeviceId2]</code> </p> </li> </ul>
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		DeviceIds: Array<string>;
	}
	export interface BatchDeleteDevicePositionHistoryPostBodyFormProperties {
	}
	export function CreateBatchDeleteDevicePositionHistoryPostBodyFormGroup() {
		return new FormGroup<BatchDeleteDevicePositionHistoryPostBodyFormProperties>({
		});

	}

	export interface BatchDeleteGeofencePostBody {

		/**
		 * The batch of geofences to be deleted.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		GeofenceIds: Array<string>;
	}
	export interface BatchDeleteGeofencePostBodyFormProperties {
	}
	export function CreateBatchDeleteGeofencePostBodyFormGroup() {
		return new FormGroup<BatchDeleteGeofencePostBodyFormProperties>({
		});

	}

	export interface BatchEvaluateGeofencesPostBody {

		/**
		 * Contains device details for each device to be evaluated against the given geofence collection.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		DevicePositionUpdates: Array<DevicePositionUpdate>;
	}
	export interface BatchEvaluateGeofencesPostBodyFormProperties {
	}
	export function CreateBatchEvaluateGeofencesPostBodyFormGroup() {
		return new FormGroup<BatchEvaluateGeofencesPostBodyFormProperties>({
		});

	}

	export interface BatchGetDevicePositionPostBody {

		/**
		 * <p>Devices whose position you want to retrieve.</p> <ul> <li> <p>For example, for two devices: <code>device-ids=DeviceId1&amp;device-ids=DeviceId2</code> </p> </li> </ul>
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		DeviceIds: Array<string>;
	}
	export interface BatchGetDevicePositionPostBodyFormProperties {
	}
	export function CreateBatchGetDevicePositionPostBodyFormGroup() {
		return new FormGroup<BatchGetDevicePositionPostBodyFormProperties>({
		});

	}

	export interface BatchPutGeofencePostBody {

		/**
		 * The batch of geofences to be stored in a geofence collection.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		Entries: Array<BatchPutGeofenceRequestEntry>;
	}
	export interface BatchPutGeofencePostBodyFormProperties {
	}
	export function CreateBatchPutGeofencePostBodyFormGroup() {
		return new FormGroup<BatchPutGeofencePostBodyFormProperties>({
		});

	}

	export interface BatchUpdateDevicePositionPostBody {

		/**
		 * Contains the position update details for each device, up to 10 devices.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		Updates: Array<DevicePositionUpdate>;
	}
	export interface BatchUpdateDevicePositionPostBodyFormProperties {
	}
	export function CreateBatchUpdateDevicePositionPostBodyFormGroup() {
		return new FormGroup<BatchUpdateDevicePositionPostBodyFormProperties>({
		});

	}

	export interface CalculateRoutePostBody {

		/** Contains details about additional route preferences for requests that specify <code>TravelMode</code> as <code>Car</code>. */
		CarModeOptions?: CalculateRoutePostBodyCarModeOptions;

		/** <p>Sets the time of departure as the current time. Uses the current time to calculate a route. Otherwise, the best time of day to travel with the best traffic conditions is used to calculate the route.</p> <p>Default Value: <code>false</code> </p> <p>Valid Values: <code>false</code> | <code>true</code> </p> */
		DepartNow?: boolean | null;

		/**
		 * <p>The start position for the route. Defined in <a href="https://earth-info.nga.mil/index.php?dir=wgs84&amp;action=wgs84">World Geodetic System (WGS 84)</a> format: <code>[longitude, latitude]</code>.</p> <ul> <li> <p>For example, <code>[-123.115, 49.285]</code> </p> </li> </ul> <note> <p>If you specify a departure that's not located on a road, Amazon Location <a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html">moves the position to the nearest road</a>. If Esri is the provider for your route calculator, specifying a route that is longer than 400 km returns a <code>400 RoutesValidationException</code> error.</p> </note> <p>Valid Values: <code>[-180 to 180,-90 to 90]</code> </p>
		 * Required
		 * Minimum items: 2
		 * Maximum items: 2
		 */
		DeparturePosition: Array<number>;

		/** <p>Specifies the desired time of departure. Uses the given time to calculate the route. Otherwise, the best time of day to travel with the best traffic conditions is used to calculate the route.</p> <note> <p>Setting a departure time in the past returns a <code>400 ValidationException</code> error.</p> </note> <ul> <li> <p>In <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. For example, <code>2020–07-2T12:15:20.000Z+01:00</code> </p> </li> </ul> */
		DepartureTime?: Date | null;

		/**
		 * <p>The finish position for the route. Defined in <a href="https://earth-info.nga.mil/index.php?dir=wgs84&amp;action=wgs84">World Geodetic System (WGS 84)</a> format: <code>[longitude, latitude]</code>.</p> <ul> <li> <p> For example, <code>[-122.339, 47.615]</code> </p> </li> </ul> <note> <p>If you specify a destination that's not located on a road, Amazon Location <a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html">moves the position to the nearest road</a>. </p> </note> <p>Valid Values: <code>[-180 to 180,-90 to 90]</code> </p>
		 * Required
		 * Minimum items: 2
		 * Maximum items: 2
		 */
		DestinationPosition: Array<number>;

		/** <p>Set the unit system to specify the distance.</p> <p>Default Value: <code>Kilometers</code> </p> */
		DistanceUnit?: DistanceUnit | null;

		/** <p>Set to include the geometry details in the result for each path between a pair of positions.</p> <p>Default Value: <code>false</code> </p> <p>Valid Values: <code>false</code> | <code>true</code> </p> */
		IncludeLegGeometry?: boolean | null;

		/** <p>Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility. You can choose <code>Car</code>, <code>Truck</code>, <code>Walking</code>, <code>Bicycle</code> or <code>Motorcycle</code> as options for the <code>TravelMode</code>.</p> <note> <p> <code>Bicycle</code> and <code>Motorcycle</code> are only valid when using Grab as a data provider, and only within Southeast Asia.</p> <p> <code>Truck</code> is not available for Grab.</p> <p>For more details on the using Grab for routing, including areas of coverage, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html">GrabMaps</a> in the <i>Amazon Location Service Developer Guide</i>.</p> </note> <p>The <code>TravelMode</code> you specify also determines how you specify route preferences: </p> <ul> <li> <p>If traveling by <code>Car</code> use the <code>CarModeOptions</code> parameter.</p> </li> <li> <p>If traveling by <code>Truck</code> use the <code>TruckModeOptions</code> parameter.</p> </li> </ul> <p>Default Value: <code>Car</code> </p> */
		TravelMode?: TravelMode | null;

		/** Contains details about additional route preferences for requests that specify <code>TravelMode</code> as <code>Truck</code>. */
		TruckModeOptions?: CalculateRoutePostBodyTruckModeOptions;

		/**
		 * <p>Specifies an ordered list of up to 23 intermediate positions to include along a route between the departure position and destination position. </p> <ul> <li> <p>For example, from the <code>DeparturePosition</code> <code>[-123.115, 49.285]</code>, the route follows the order that the waypoint positions are given <code>[[-122.757, 49.0021],[-122.349, 47.620]]</code> </p> </li> </ul> <note> <p>If you specify a waypoint position that's not located on a road, Amazon Location <a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html">moves the position to the nearest road</a>. </p> <p>Specifying more than 23 waypoints returns a <code>400 ValidationException</code> error.</p> <p>If Esri is the provider for your route calculator, specifying a route that is longer than 400 km returns a <code>400 RoutesValidationException</code> error.</p> </note> <p>Valid Values: <code>[-180 to 180,-90 to 90]</code> </p>
		 * Minimum items: 0
		 * Maximum items: 23
		 */
		WaypointPositions?: Array<Array<number>>;
	}
	export interface CalculateRoutePostBodyFormProperties {

		/** <p>Sets the time of departure as the current time. Uses the current time to calculate a route. Otherwise, the best time of day to travel with the best traffic conditions is used to calculate the route.</p> <p>Default Value: <code>false</code> </p> <p>Valid Values: <code>false</code> | <code>true</code> </p> */
		DepartNow: FormControl<boolean | null | undefined>,

		/** <p>Specifies the desired time of departure. Uses the given time to calculate the route. Otherwise, the best time of day to travel with the best traffic conditions is used to calculate the route.</p> <note> <p>Setting a departure time in the past returns a <code>400 ValidationException</code> error.</p> </note> <ul> <li> <p>In <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. For example, <code>2020–07-2T12:15:20.000Z+01:00</code> </p> </li> </ul> */
		DepartureTime: FormControl<Date | null | undefined>,

		/** <p>Set the unit system to specify the distance.</p> <p>Default Value: <code>Kilometers</code> </p> */
		DistanceUnit: FormControl<DistanceUnit | null | undefined>,

		/** <p>Set to include the geometry details in the result for each path between a pair of positions.</p> <p>Default Value: <code>false</code> </p> <p>Valid Values: <code>false</code> | <code>true</code> </p> */
		IncludeLegGeometry: FormControl<boolean | null | undefined>,

		/** <p>Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility. You can choose <code>Car</code>, <code>Truck</code>, <code>Walking</code>, <code>Bicycle</code> or <code>Motorcycle</code> as options for the <code>TravelMode</code>.</p> <note> <p> <code>Bicycle</code> and <code>Motorcycle</code> are only valid when using Grab as a data provider, and only within Southeast Asia.</p> <p> <code>Truck</code> is not available for Grab.</p> <p>For more details on the using Grab for routing, including areas of coverage, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html">GrabMaps</a> in the <i>Amazon Location Service Developer Guide</i>.</p> </note> <p>The <code>TravelMode</code> you specify also determines how you specify route preferences: </p> <ul> <li> <p>If traveling by <code>Car</code> use the <code>CarModeOptions</code> parameter.</p> </li> <li> <p>If traveling by <code>Truck</code> use the <code>TruckModeOptions</code> parameter.</p> </li> </ul> <p>Default Value: <code>Car</code> </p> */
		TravelMode: FormControl<TravelMode | null | undefined>,
	}
	export function CreateCalculateRoutePostBodyFormGroup() {
		return new FormGroup<CalculateRoutePostBodyFormProperties>({
			DepartNow: new FormControl<boolean | null | undefined>(undefined),
			DepartureTime: new FormControl<Date | null | undefined>(undefined),
			DistanceUnit: new FormControl<DistanceUnit | null | undefined>(undefined),
			IncludeLegGeometry: new FormControl<boolean | null | undefined>(undefined),
			TravelMode: new FormControl<TravelMode | null | undefined>(undefined),
		});

	}

	export interface CalculateRoutePostBodyCarModeOptions {
		AvoidFerries?: boolean | null;
		AvoidTolls?: boolean | null;
	}
	export interface CalculateRoutePostBodyCarModeOptionsFormProperties {
		AvoidFerries: FormControl<boolean | null | undefined>,
		AvoidTolls: FormControl<boolean | null | undefined>,
	}
	export function CreateCalculateRoutePostBodyCarModeOptionsFormGroup() {
		return new FormGroup<CalculateRoutePostBodyCarModeOptionsFormProperties>({
			AvoidFerries: new FormControl<boolean | null | undefined>(undefined),
			AvoidTolls: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CalculateRoutePostBodyTruckModeOptions {
		AvoidFerries?: boolean | null;
		AvoidTolls?: boolean | null;
		Dimensions?: TruckDimensions;
		Weight?: TruckWeight;
	}
	export interface CalculateRoutePostBodyTruckModeOptionsFormProperties {
		AvoidFerries: FormControl<boolean | null | undefined>,
		AvoidTolls: FormControl<boolean | null | undefined>,
	}
	export function CreateCalculateRoutePostBodyTruckModeOptionsFormGroup() {
		return new FormGroup<CalculateRoutePostBodyTruckModeOptionsFormProperties>({
			AvoidFerries: new FormControl<boolean | null | undefined>(undefined),
			AvoidTolls: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CalculateRouteMatrixPostBody {

		/** Contains details about additional route preferences for requests that specify <code>TravelMode</code> as <code>Car</code>. */
		CarModeOptions?: CalculateRouteMatrixPostBodyCarModeOptions;

		/** <p>Sets the time of departure as the current time. Uses the current time to calculate the route matrix. You can't set both <code>DepartureTime</code> and <code>DepartNow</code>. If neither is set, the best time of day to travel with the best traffic conditions is used to calculate the route matrix.</p> <p>Default Value: <code>false</code> </p> <p>Valid Values: <code>false</code> | <code>true</code> </p> */
		DepartNow?: boolean | null;

		/**
		 * <p>The list of departure (origin) positions for the route matrix. An array of points, each of which is itself a 2-value array defined in <a href="https://earth-info.nga.mil/GandG/wgs84/index.html">WGS 84</a> format: <code>[longitude, latitude]</code>. For example, <code>[-123.115, 49.285]</code>.</p> <important> <p>Depending on the data provider selected in the route calculator resource there may be additional restrictions on the inputs you can choose. See <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route-matrix.html#matrix-routing-position-limits"> Position restrictions</a> in the <i>Amazon Location Service Developer Guide</i>.</p> </important> <note> <p>For route calculators that use Esri as the data provider, if you specify a departure that's not located on a road, Amazon Location <a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html"> moves the position to the nearest road</a>. The snapped value is available in the result in <code>SnappedDeparturePositions</code>.</p> </note> <p>Valid Values: <code>[-180 to 180,-90 to 90]</code> </p>
		 * Required
		 * Minimum items: 1
		 * Maximum items: 350
		 */
		DeparturePositions: Array<Array<number>>;

		/** <p>Specifies the desired time of departure. Uses the given time to calculate the route matrix. You can't set both <code>DepartureTime</code> and <code>DepartNow</code>. If neither is set, the best time of day to travel with the best traffic conditions is used to calculate the route matrix.</p> <note> <p>Setting a departure time in the past returns a <code>400 ValidationException</code> error.</p> </note> <ul> <li> <p>In <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. For example, <code>2020–07-2T12:15:20.000Z+01:00</code> </p> </li> </ul> */
		DepartureTime?: Date | null;

		/**
		 * <p>The list of destination positions for the route matrix. An array of points, each of which is itself a 2-value array defined in <a href="https://earth-info.nga.mil/GandG/wgs84/index.html">WGS 84</a> format: <code>[longitude, latitude]</code>. For example, <code>[-122.339, 47.615]</code> </p> <important> <p>Depending on the data provider selected in the route calculator resource there may be additional restrictions on the inputs you can choose. See <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route-matrix.html#matrix-routing-position-limits"> Position restrictions</a> in the <i>Amazon Location Service Developer Guide</i>.</p> </important> <note> <p>For route calculators that use Esri as the data provider, if you specify a destination that's not located on a road, Amazon Location <a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html"> moves the position to the nearest road</a>. The snapped value is available in the result in <code>SnappedDestinationPositions</code>.</p> </note> <p>Valid Values: <code>[-180 to 180,-90 to 90]</code> </p>
		 * Required
		 * Minimum items: 1
		 * Maximum items: 350
		 */
		DestinationPositions: Array<Array<number>>;

		/** <p>Set the unit system to specify the distance.</p> <p>Default Value: <code>Kilometers</code> </p> */
		DistanceUnit?: DistanceUnit | null;

		/** <p>Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility.</p> <p>The <code>TravelMode</code> you specify also determines how you specify route preferences: </p> <ul> <li> <p>If traveling by <code>Car</code> use the <code>CarModeOptions</code> parameter.</p> </li> <li> <p>If traveling by <code>Truck</code> use the <code>TruckModeOptions</code> parameter.</p> </li> </ul> <note> <p> <code>Bicycle</code> or <code>Motorcycle</code> are only valid when using <code>Grab</code> as a data provider, and only within Southeast Asia.</p> <p> <code>Truck</code> is not available for Grab.</p> <p>For more information about using Grab as a data provider, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html">GrabMaps</a> in the <i>Amazon Location Service Developer Guide</i>.</p> </note> <p>Default Value: <code>Car</code> </p> */
		TravelMode?: TravelMode | null;

		/** Contains details about additional route preferences for requests that specify <code>TravelMode</code> as <code>Truck</code>. */
		TruckModeOptions?: CalculateRouteMatrixPostBodyTruckModeOptions;
	}
	export interface CalculateRouteMatrixPostBodyFormProperties {

		/** <p>Sets the time of departure as the current time. Uses the current time to calculate the route matrix. You can't set both <code>DepartureTime</code> and <code>DepartNow</code>. If neither is set, the best time of day to travel with the best traffic conditions is used to calculate the route matrix.</p> <p>Default Value: <code>false</code> </p> <p>Valid Values: <code>false</code> | <code>true</code> </p> */
		DepartNow: FormControl<boolean | null | undefined>,

		/** <p>Specifies the desired time of departure. Uses the given time to calculate the route matrix. You can't set both <code>DepartureTime</code> and <code>DepartNow</code>. If neither is set, the best time of day to travel with the best traffic conditions is used to calculate the route matrix.</p> <note> <p>Setting a departure time in the past returns a <code>400 ValidationException</code> error.</p> </note> <ul> <li> <p>In <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. For example, <code>2020–07-2T12:15:20.000Z+01:00</code> </p> </li> </ul> */
		DepartureTime: FormControl<Date | null | undefined>,

		/** <p>Set the unit system to specify the distance.</p> <p>Default Value: <code>Kilometers</code> </p> */
		DistanceUnit: FormControl<DistanceUnit | null | undefined>,

		/** <p>Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility.</p> <p>The <code>TravelMode</code> you specify also determines how you specify route preferences: </p> <ul> <li> <p>If traveling by <code>Car</code> use the <code>CarModeOptions</code> parameter.</p> </li> <li> <p>If traveling by <code>Truck</code> use the <code>TruckModeOptions</code> parameter.</p> </li> </ul> <note> <p> <code>Bicycle</code> or <code>Motorcycle</code> are only valid when using <code>Grab</code> as a data provider, and only within Southeast Asia.</p> <p> <code>Truck</code> is not available for Grab.</p> <p>For more information about using Grab as a data provider, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html">GrabMaps</a> in the <i>Amazon Location Service Developer Guide</i>.</p> </note> <p>Default Value: <code>Car</code> </p> */
		TravelMode: FormControl<TravelMode | null | undefined>,
	}
	export function CreateCalculateRouteMatrixPostBodyFormGroup() {
		return new FormGroup<CalculateRouteMatrixPostBodyFormProperties>({
			DepartNow: new FormControl<boolean | null | undefined>(undefined),
			DepartureTime: new FormControl<Date | null | undefined>(undefined),
			DistanceUnit: new FormControl<DistanceUnit | null | undefined>(undefined),
			TravelMode: new FormControl<TravelMode | null | undefined>(undefined),
		});

	}

	export interface CalculateRouteMatrixPostBodyCarModeOptions {
		AvoidFerries?: boolean | null;
		AvoidTolls?: boolean | null;
	}
	export interface CalculateRouteMatrixPostBodyCarModeOptionsFormProperties {
		AvoidFerries: FormControl<boolean | null | undefined>,
		AvoidTolls: FormControl<boolean | null | undefined>,
	}
	export function CreateCalculateRouteMatrixPostBodyCarModeOptionsFormGroup() {
		return new FormGroup<CalculateRouteMatrixPostBodyCarModeOptionsFormProperties>({
			AvoidFerries: new FormControl<boolean | null | undefined>(undefined),
			AvoidTolls: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CalculateRouteMatrixPostBodyTruckModeOptions {
		AvoidFerries?: boolean | null;
		AvoidTolls?: boolean | null;
		Dimensions?: TruckDimensions;
		Weight?: TruckWeight;
	}
	export interface CalculateRouteMatrixPostBodyTruckModeOptionsFormProperties {
		AvoidFerries: FormControl<boolean | null | undefined>,
		AvoidTolls: FormControl<boolean | null | undefined>,
	}
	export function CreateCalculateRouteMatrixPostBodyTruckModeOptionsFormGroup() {
		return new FormGroup<CalculateRouteMatrixPostBodyTruckModeOptionsFormProperties>({
			AvoidFerries: new FormControl<boolean | null | undefined>(undefined),
			AvoidTolls: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateGeofenceCollectionPostBody {

		/**
		 * <p>A custom name for the geofence collection.</p> <p>Requirements:</p> <ul> <li> <p>Contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_). </p> </li> <li> <p>Must be a unique geofence collection name.</p> </li> <li> <p>No spaces allowed. For example, <code>ExampleGeofenceCollection</code>.</p> </li> </ul>
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		CollectionName: string;

		/**
		 * An optional description for the geofence collection.
		 * Min length: 0
		 * Max length: 1000
		 */
		Description?: string | null;

		/**
		 * A key identifier for an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html">Amazon Web Services KMS customer managed key</a>. Enter a key ID, key ARN, alias name, or alias ARN.
		 * Min length: 1
		 * Max length: 2048
		 */
		KmsKeyId?: string | null;

		/** No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>. */
		PricingPlan?: PricingPlan | null;

		/** This parameter is no longer used. */
		PricingPlanDataSource?: string | null;

		/** <p>Applies one or more tags to the geofence collection. A tag is a key-value pair helps manage, identify, search, and filter your resources by labelling them.</p> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource</p> </li> <li> <p>Each resource tag must be unique with a maximum of one value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @. </p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul> */
		Tags?: {[id: string]: string };
	}
	export interface CreateGeofenceCollectionPostBodyFormProperties {

		/**
		 * <p>A custom name for the geofence collection.</p> <p>Requirements:</p> <ul> <li> <p>Contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_). </p> </li> <li> <p>Must be a unique geofence collection name.</p> </li> <li> <p>No spaces allowed. For example, <code>ExampleGeofenceCollection</code>.</p> </li> </ul>
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		CollectionName: FormControl<string | null | undefined>,

		/**
		 * An optional description for the geofence collection.
		 * Min length: 0
		 * Max length: 1000
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * A key identifier for an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html">Amazon Web Services KMS customer managed key</a>. Enter a key ID, key ARN, alias name, or alias ARN.
		 * Min length: 1
		 * Max length: 2048
		 */
		KmsKeyId: FormControl<string | null | undefined>,

		/** No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>. */
		PricingPlan: FormControl<PricingPlan | null | undefined>,

		/** This parameter is no longer used. */
		PricingPlanDataSource: FormControl<string | null | undefined>,

		/** <p>Applies one or more tags to the geofence collection. A tag is a key-value pair helps manage, identify, search, and filter your resources by labelling them.</p> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource</p> </li> <li> <p>Each resource tag must be unique with a maximum of one value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @. </p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul> */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateGeofenceCollectionPostBodyFormGroup() {
		return new FormGroup<CreateGeofenceCollectionPostBodyFormProperties>({
			CollectionName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[-._\w]+$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			PricingPlan: new FormControl<PricingPlan | null | undefined>(undefined),
			PricingPlanDataSource: new FormControl<string | null | undefined>(undefined),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateKeyPostBody {

		/**
		 * An optional description for the API key resource.
		 * Min length: 0
		 * Max length: 1000
		 */
		Description?: string | null;

		/** The optional timestamp for when the API key resource will expire in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. One of <code>NoExpiry</code> or <code>ExpireTime</code> must be set. */
		ExpireTime?: Date | null;

		/**
		 * <p>A custom name for the API key resource.</p> <p>Requirements:</p> <ul> <li> <p>Contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_). </p> </li> <li> <p>Must be a unique API key name.</p> </li> <li> <p>No spaces allowed. For example, <code>ExampleAPIKey</code>.</p> </li> </ul>
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		KeyName: string;

		/** Optionally set to <code>true</code> to set no expiration time for the API key. One of <code>NoExpiry</code> or <code>ExpireTime</code> must be set. */
		NoExpiry?: boolean | null;

		/**
		 * API Restrictions on the allowed actions, resources, and referers for an API key resource.
		 * Required
		 */
		Restrictions: CreateKeyPostBodyRestrictions;

		/** <p>Applies one or more tags to the map resource. A tag is a key-value pair that helps manage, identify, search, and filter your resources by labelling them.</p> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource</p> </li> <li> <p>Each resource tag must be unique with a maximum of one value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @. </p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul> */
		Tags?: {[id: string]: string };
	}
	export interface CreateKeyPostBodyFormProperties {

		/**
		 * An optional description for the API key resource.
		 * Min length: 0
		 * Max length: 1000
		 */
		Description: FormControl<string | null | undefined>,

		/** The optional timestamp for when the API key resource will expire in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. One of <code>NoExpiry</code> or <code>ExpireTime</code> must be set. */
		ExpireTime: FormControl<Date | null | undefined>,

		/**
		 * <p>A custom name for the API key resource.</p> <p>Requirements:</p> <ul> <li> <p>Contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_). </p> </li> <li> <p>Must be a unique API key name.</p> </li> <li> <p>No spaces allowed. For example, <code>ExampleAPIKey</code>.</p> </li> </ul>
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		KeyName: FormControl<string | null | undefined>,

		/** Optionally set to <code>true</code> to set no expiration time for the API key. One of <code>NoExpiry</code> or <code>ExpireTime</code> must be set. */
		NoExpiry: FormControl<boolean | null | undefined>,

		/** <p>Applies one or more tags to the map resource. A tag is a key-value pair that helps manage, identify, search, and filter your resources by labelling them.</p> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource</p> </li> <li> <p>Each resource tag must be unique with a maximum of one value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @. </p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul> */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateKeyPostBodyFormGroup() {
		return new FormGroup<CreateKeyPostBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
			ExpireTime: new FormControl<Date | null | undefined>(undefined),
			KeyName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[-._\w]+$')]),
			NoExpiry: new FormControl<boolean | null | undefined>(undefined),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateKeyPostBodyRestrictions {
		AllowActions?: Array<string>;
		AllowReferers?: Array<string>;
		AllowResources?: Array<string>;
	}
	export interface CreateKeyPostBodyRestrictionsFormProperties {
	}
	export function CreateCreateKeyPostBodyRestrictionsFormGroup() {
		return new FormGroup<CreateKeyPostBodyRestrictionsFormProperties>({
		});

	}

	export interface CreateMapPostBody {

		/**
		 * Specifies the map tile style selected from an available provider.
		 * Required
		 */
		Configuration: CreateMapPostBodyConfiguration;

		/**
		 * An optional description for the map resource.
		 * Min length: 0
		 * Max length: 1000
		 */
		Description?: string | null;

		/**
		 * <p>The name for the map resource.</p> <p>Requirements:</p> <ul> <li> <p>Must contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_). </p> </li> <li> <p>Must be a unique map resource name. </p> </li> <li> <p>No spaces allowed. For example, <code>ExampleMap</code>.</p> </li> </ul>
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		MapName: string;

		/** No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>. */
		PricingPlan?: PricingPlan | null;

		/** <p>Applies one or more tags to the map resource. A tag is a key-value pair helps manage, identify, search, and filter your resources by labelling them.</p> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource</p> </li> <li> <p>Each resource tag must be unique with a maximum of one value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @. </p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul> */
		Tags?: {[id: string]: string };
	}
	export interface CreateMapPostBodyFormProperties {

		/**
		 * An optional description for the map resource.
		 * Min length: 0
		 * Max length: 1000
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * <p>The name for the map resource.</p> <p>Requirements:</p> <ul> <li> <p>Must contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_). </p> </li> <li> <p>Must be a unique map resource name. </p> </li> <li> <p>No spaces allowed. For example, <code>ExampleMap</code>.</p> </li> </ul>
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		MapName: FormControl<string | null | undefined>,

		/** No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>. */
		PricingPlan: FormControl<PricingPlan | null | undefined>,

		/** <p>Applies one or more tags to the map resource. A tag is a key-value pair helps manage, identify, search, and filter your resources by labelling them.</p> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource</p> </li> <li> <p>Each resource tag must be unique with a maximum of one value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @. </p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul> */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateMapPostBodyFormGroup() {
		return new FormGroup<CreateMapPostBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
			MapName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[-._\w]+$')]),
			PricingPlan: new FormControl<PricingPlan | null | undefined>(undefined),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateMapPostBodyConfiguration {
		PoliticalView?: string;
		Style?: string;
	}
	export interface CreateMapPostBodyConfigurationFormProperties {
		PoliticalView: FormControl<string | null | undefined>,
		Style: FormControl<string | null | undefined>,
	}
	export function CreateCreateMapPostBodyConfigurationFormGroup() {
		return new FormGroup<CreateMapPostBodyConfigurationFormProperties>({
			PoliticalView: new FormControl<string | null | undefined>(undefined),
			Style: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePlaceIndexPostBody {

		/**
		 * <p>Specifies the geospatial data provider for the new place index.</p> <note> <p>This field is case-sensitive. Enter the valid values as shown. For example, entering <code>HERE</code> returns an error.</p> </note> <p>Valid values include:</p> <ul> <li> <p> <code>Esri</code> – For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/esri.html">Esri</a>'s coverage in your region of interest, see <a href="https://developers.arcgis.com/rest/geocode/api-reference/geocode-coverage.htm">Esri details on geocoding coverage</a>.</p> </li> <li> <p> <code>Grab</code> – Grab provides place index functionality for Southeast Asia. For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html">GrabMaps</a>' coverage, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html#grab-coverage-area">GrabMaps countries and areas covered</a>.</p> </li> <li> <p> <code>Here</code> – For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/HERE.html">HERE Technologies</a>' coverage in your region of interest, see <a href="https://developer.here.com/documentation/geocoder/dev_guide/topics/coverage-geocoder.html">HERE details on goecoding coverage</a>.</p> <important> <p>If you specify HERE Technologies (<code>Here</code>) as the data provider, you may not <a href="https://docs.aws.amazon.com/location-places/latest/APIReference/API_DataSourceConfiguration.html">store results</a> for locations in Japan. For more information, see the <a href="http://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a> for Amazon Location Service.</p> </important> </li> </ul> <p>For additional information , see <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Data providers</a> on the <i>Amazon Location Service Developer Guide</i>.</p>
		 * Required
		 */
		DataSource: string;

		/** <p>Specifies the data storage option chosen for requesting Places.</p> <important> <p>When using Amazon Location Places:</p> <ul> <li> <p>If using HERE Technologies as a data provider, you can't store results for locations in Japan by setting <code>IntendedUse</code> to <code>Storage</code>. parameter.</p> </li> <li> <p>Under the <code>MobileAssetTracking</code> or <code>MobilAssetManagement</code> pricing plan, you can't store results from your place index resources by setting <code>IntendedUse</code> to <code>Storage</code>. This returns a validation exception error.</p> </li> </ul> <p>For more information, see the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> for Amazon Location Service.</p> </important> */
		DataSourceConfiguration?: CreatePlaceIndexPostBodyDataSourceConfiguration;

		/**
		 * The optional description for the place index resource.
		 * Min length: 0
		 * Max length: 1000
		 */
		Description?: string | null;

		/**
		 * <p>The name of the place index resource. </p> <p>Requirements:</p> <ul> <li> <p>Contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_).</p> </li> <li> <p>Must be a unique place index resource name.</p> </li> <li> <p>No spaces allowed. For example, <code>ExamplePlaceIndex</code>.</p> </li> </ul>
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		IndexName: string;

		/** No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>. */
		PricingPlan?: PricingPlan | null;

		/** <p>Applies one or more tags to the place index resource. A tag is a key-value pair that helps you manage, identify, search, and filter your resources.</p> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource.</p> </li> <li> <p>Each tag key must be unique and must have exactly one associated value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8.</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @</p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul> */
		Tags?: {[id: string]: string };
	}
	export interface CreatePlaceIndexPostBodyFormProperties {

		/**
		 * <p>Specifies the geospatial data provider for the new place index.</p> <note> <p>This field is case-sensitive. Enter the valid values as shown. For example, entering <code>HERE</code> returns an error.</p> </note> <p>Valid values include:</p> <ul> <li> <p> <code>Esri</code> – For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/esri.html">Esri</a>'s coverage in your region of interest, see <a href="https://developers.arcgis.com/rest/geocode/api-reference/geocode-coverage.htm">Esri details on geocoding coverage</a>.</p> </li> <li> <p> <code>Grab</code> – Grab provides place index functionality for Southeast Asia. For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html">GrabMaps</a>' coverage, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html#grab-coverage-area">GrabMaps countries and areas covered</a>.</p> </li> <li> <p> <code>Here</code> – For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/HERE.html">HERE Technologies</a>' coverage in your region of interest, see <a href="https://developer.here.com/documentation/geocoder/dev_guide/topics/coverage-geocoder.html">HERE details on goecoding coverage</a>.</p> <important> <p>If you specify HERE Technologies (<code>Here</code>) as the data provider, you may not <a href="https://docs.aws.amazon.com/location-places/latest/APIReference/API_DataSourceConfiguration.html">store results</a> for locations in Japan. For more information, see the <a href="http://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a> for Amazon Location Service.</p> </important> </li> </ul> <p>For additional information , see <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Data providers</a> on the <i>Amazon Location Service Developer Guide</i>.</p>
		 * Required
		 */
		DataSource: FormControl<string | null | undefined>,

		/**
		 * The optional description for the place index resource.
		 * Min length: 0
		 * Max length: 1000
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * <p>The name of the place index resource. </p> <p>Requirements:</p> <ul> <li> <p>Contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_).</p> </li> <li> <p>Must be a unique place index resource name.</p> </li> <li> <p>No spaces allowed. For example, <code>ExamplePlaceIndex</code>.</p> </li> </ul>
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		IndexName: FormControl<string | null | undefined>,

		/** No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>. */
		PricingPlan: FormControl<PricingPlan | null | undefined>,

		/** <p>Applies one or more tags to the place index resource. A tag is a key-value pair that helps you manage, identify, search, and filter your resources.</p> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource.</p> </li> <li> <p>Each tag key must be unique and must have exactly one associated value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8.</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @</p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul> */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreatePlaceIndexPostBodyFormGroup() {
		return new FormGroup<CreatePlaceIndexPostBodyFormProperties>({
			DataSource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[-._\w]+$')]),
			PricingPlan: new FormControl<PricingPlan | null | undefined>(undefined),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreatePlaceIndexPostBodyDataSourceConfiguration {
		IntendedUse?: IntendedUse;
	}
	export interface CreatePlaceIndexPostBodyDataSourceConfigurationFormProperties {
		IntendedUse: FormControl<IntendedUse | null | undefined>,
	}
	export function CreateCreatePlaceIndexPostBodyDataSourceConfigurationFormGroup() {
		return new FormGroup<CreatePlaceIndexPostBodyDataSourceConfigurationFormProperties>({
			IntendedUse: new FormControl<IntendedUse | null | undefined>(undefined),
		});

	}

	export interface CreateRouteCalculatorPostBody {

		/**
		 * <p>The name of the route calculator resource. </p> <p>Requirements:</p> <ul> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9) , hyphens (-), periods (.), and underscores (_).</p> </li> <li> <p>Must be a unique Route calculator resource name.</p> </li> <li> <p>No spaces allowed. For example, <code>ExampleRouteCalculator</code>.</p> </li> </ul>
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		CalculatorName: string;

		/**
		 * <p>Specifies the data provider of traffic and road network data.</p> <note> <p>This field is case-sensitive. Enter the valid values as shown. For example, entering <code>HERE</code> returns an error.</p> </note> <p>Valid values include:</p> <ul> <li> <p> <code>Esri</code> – For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/esri.html">Esri</a>'s coverage in your region of interest, see <a href="https://doc.arcgis.com/en/arcgis-online/reference/network-coverage.htm">Esri details on street networks and traffic coverage</a>.</p> <p>Route calculators that use Esri as a data source only calculate routes that are shorter than 400 km.</p> </li> <li> <p> <code>Grab</code> – Grab provides routing functionality for Southeast Asia. For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html">GrabMaps</a>' coverage, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html#grab-coverage-area">GrabMaps countries and areas covered</a>.</p> </li> <li> <p> <code>Here</code> – For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/HERE.html">HERE Technologies</a>' coverage in your region of interest, see <a href="https://developer.here.com/documentation/routing-api/dev_guide/topics/coverage/car-routing.html">HERE car routing coverage</a> and <a href="https://developer.here.com/documentation/routing-api/dev_guide/topics/coverage/truck-routing.html">HERE truck routing coverage</a>.</p> </li> </ul> <p>For additional information , see <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Data providers</a> on the <i>Amazon Location Service Developer Guide</i>.</p>
		 * Required
		 */
		DataSource: string;

		/**
		 * The optional description for the route calculator resource.
		 * Min length: 0
		 * Max length: 1000
		 */
		Description?: string | null;

		/** No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>. */
		PricingPlan?: PricingPlan | null;

		/** <p>Applies one or more tags to the route calculator resource. A tag is a key-value pair helps manage, identify, search, and filter your resources by labelling them.</p> <ul> <li> <p>For example: { <code>"tag1" : "value1"</code>, <code>"tag2" : "value2"</code>}</p> </li> </ul> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource</p> </li> <li> <p>Each resource tag must be unique with a maximum of one value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @. </p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul> */
		Tags?: {[id: string]: string };
	}
	export interface CreateRouteCalculatorPostBodyFormProperties {

		/**
		 * <p>The name of the route calculator resource. </p> <p>Requirements:</p> <ul> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9) , hyphens (-), periods (.), and underscores (_).</p> </li> <li> <p>Must be a unique Route calculator resource name.</p> </li> <li> <p>No spaces allowed. For example, <code>ExampleRouteCalculator</code>.</p> </li> </ul>
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		CalculatorName: FormControl<string | null | undefined>,

		/**
		 * <p>Specifies the data provider of traffic and road network data.</p> <note> <p>This field is case-sensitive. Enter the valid values as shown. For example, entering <code>HERE</code> returns an error.</p> </note> <p>Valid values include:</p> <ul> <li> <p> <code>Esri</code> – For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/esri.html">Esri</a>'s coverage in your region of interest, see <a href="https://doc.arcgis.com/en/arcgis-online/reference/network-coverage.htm">Esri details on street networks and traffic coverage</a>.</p> <p>Route calculators that use Esri as a data source only calculate routes that are shorter than 400 km.</p> </li> <li> <p> <code>Grab</code> – Grab provides routing functionality for Southeast Asia. For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html">GrabMaps</a>' coverage, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html#grab-coverage-area">GrabMaps countries and areas covered</a>.</p> </li> <li> <p> <code>Here</code> – For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/HERE.html">HERE Technologies</a>' coverage in your region of interest, see <a href="https://developer.here.com/documentation/routing-api/dev_guide/topics/coverage/car-routing.html">HERE car routing coverage</a> and <a href="https://developer.here.com/documentation/routing-api/dev_guide/topics/coverage/truck-routing.html">HERE truck routing coverage</a>.</p> </li> </ul> <p>For additional information , see <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Data providers</a> on the <i>Amazon Location Service Developer Guide</i>.</p>
		 * Required
		 */
		DataSource: FormControl<string | null | undefined>,

		/**
		 * The optional description for the route calculator resource.
		 * Min length: 0
		 * Max length: 1000
		 */
		Description: FormControl<string | null | undefined>,

		/** No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>. */
		PricingPlan: FormControl<PricingPlan | null | undefined>,

		/** <p>Applies one or more tags to the route calculator resource. A tag is a key-value pair helps manage, identify, search, and filter your resources by labelling them.</p> <ul> <li> <p>For example: { <code>"tag1" : "value1"</code>, <code>"tag2" : "value2"</code>}</p> </li> </ul> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource</p> </li> <li> <p>Each resource tag must be unique with a maximum of one value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @. </p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul> */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateRouteCalculatorPostBodyFormGroup() {
		return new FormGroup<CreateRouteCalculatorPostBodyFormProperties>({
			CalculatorName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[-._\w]+$')]),
			DataSource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
			PricingPlan: new FormControl<PricingPlan | null | undefined>(undefined),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateTrackerPostBody {

		/**
		 * An optional description for the tracker resource.
		 * Min length: 0
		 * Max length: 1000
		 */
		Description?: string | null;

		/** <p>Whether to enable position <code>UPDATE</code> events from this tracker to be sent to EventBridge.</p> <note> <p>You do not need enable this feature to get <code>ENTER</code> and <code>EXIT</code> events for geofences with this tracker. Those events are always sent to EventBridge.</p> </note> */
		EventBridgeEnabled?: boolean | null;

		/**
		 * A key identifier for an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html">Amazon Web Services KMS customer managed key</a>. Enter a key ID, key ARN, alias name, or alias ARN.
		 * Min length: 1
		 * Max length: 2048
		 */
		KmsKeyId?: string | null;

		/** <p>Specifies the position filtering for the tracker resource.</p> <p>Valid values:</p> <ul> <li> <p> <code>TimeBased</code> - Location updates are evaluated against linked geofence collections, but not every location update is stored. If your update frequency is more often than 30 seconds, only one update per 30 seconds is stored for each unique device ID. </p> </li> <li> <p> <code>DistanceBased</code> - If the device has moved less than 30 m (98.4 ft), location updates are ignored. Location updates within this area are neither evaluated against linked geofence collections, nor stored. This helps control costs by reducing the number of geofence evaluations and historical device positions to paginate through. Distance-based filtering can also reduce the effects of GPS noise when displaying device trajectories on a map. </p> </li> <li> <p> <code>AccuracyBased</code> - If the device has moved less than the measured accuracy, location updates are ignored. For example, if two consecutive updates from a device have a horizontal accuracy of 5 m and 10 m, the second update is ignored if the device has moved less than 15 m. Ignored location updates are neither evaluated against linked geofence collections, nor stored. This can reduce the effects of GPS noise when displaying device trajectories on a map, and can help control your costs by reducing the number of geofence evaluations. </p> </li> </ul> <p>This field is optional. If not specified, the default value is <code>TimeBased</code>.</p> */
		PositionFiltering?: PositionFiltering | null;

		/** No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>. */
		PricingPlan?: PricingPlan | null;

		/** This parameter is no longer used. */
		PricingPlanDataSource?: string | null;

		/** <p>Applies one or more tags to the tracker resource. A tag is a key-value pair helps manage, identify, search, and filter your resources by labelling them.</p> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource</p> </li> <li> <p>Each resource tag must be unique with a maximum of one value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @. </p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul> */
		Tags?: {[id: string]: string };

		/**
		 * <p>The name for the tracker resource.</p> <p>Requirements:</p> <ul> <li> <p>Contain only alphanumeric characters (A-Z, a-z, 0-9) , hyphens (-), periods (.), and underscores (_).</p> </li> <li> <p>Must be a unique tracker resource name.</p> </li> <li> <p>No spaces allowed. For example, <code>ExampleTracker</code>.</p> </li> </ul>
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		TrackerName: string;
	}
	export interface CreateTrackerPostBodyFormProperties {

		/**
		 * An optional description for the tracker resource.
		 * Min length: 0
		 * Max length: 1000
		 */
		Description: FormControl<string | null | undefined>,

		/** <p>Whether to enable position <code>UPDATE</code> events from this tracker to be sent to EventBridge.</p> <note> <p>You do not need enable this feature to get <code>ENTER</code> and <code>EXIT</code> events for geofences with this tracker. Those events are always sent to EventBridge.</p> </note> */
		EventBridgeEnabled: FormControl<boolean | null | undefined>,

		/**
		 * A key identifier for an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html">Amazon Web Services KMS customer managed key</a>. Enter a key ID, key ARN, alias name, or alias ARN.
		 * Min length: 1
		 * Max length: 2048
		 */
		KmsKeyId: FormControl<string | null | undefined>,

		/** <p>Specifies the position filtering for the tracker resource.</p> <p>Valid values:</p> <ul> <li> <p> <code>TimeBased</code> - Location updates are evaluated against linked geofence collections, but not every location update is stored. If your update frequency is more often than 30 seconds, only one update per 30 seconds is stored for each unique device ID. </p> </li> <li> <p> <code>DistanceBased</code> - If the device has moved less than 30 m (98.4 ft), location updates are ignored. Location updates within this area are neither evaluated against linked geofence collections, nor stored. This helps control costs by reducing the number of geofence evaluations and historical device positions to paginate through. Distance-based filtering can also reduce the effects of GPS noise when displaying device trajectories on a map. </p> </li> <li> <p> <code>AccuracyBased</code> - If the device has moved less than the measured accuracy, location updates are ignored. For example, if two consecutive updates from a device have a horizontal accuracy of 5 m and 10 m, the second update is ignored if the device has moved less than 15 m. Ignored location updates are neither evaluated against linked geofence collections, nor stored. This can reduce the effects of GPS noise when displaying device trajectories on a map, and can help control your costs by reducing the number of geofence evaluations. </p> </li> </ul> <p>This field is optional. If not specified, the default value is <code>TimeBased</code>.</p> */
		PositionFiltering: FormControl<PositionFiltering | null | undefined>,

		/** No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>. */
		PricingPlan: FormControl<PricingPlan | null | undefined>,

		/** This parameter is no longer used. */
		PricingPlanDataSource: FormControl<string | null | undefined>,

		/** <p>Applies one or more tags to the tracker resource. A tag is a key-value pair helps manage, identify, search, and filter your resources by labelling them.</p> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource</p> </li> <li> <p>Each resource tag must be unique with a maximum of one value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @. </p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul> */
		Tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * <p>The name for the tracker resource.</p> <p>Requirements:</p> <ul> <li> <p>Contain only alphanumeric characters (A-Z, a-z, 0-9) , hyphens (-), periods (.), and underscores (_).</p> </li> <li> <p>Must be a unique tracker resource name.</p> </li> <li> <p>No spaces allowed. For example, <code>ExampleTracker</code>.</p> </li> </ul>
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		TrackerName: FormControl<string | null | undefined>,
	}
	export function CreateCreateTrackerPostBodyFormGroup() {
		return new FormGroup<CreateTrackerPostBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
			EventBridgeEnabled: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			PositionFiltering: new FormControl<PositionFiltering | null | undefined>(undefined),
			PricingPlan: new FormControl<PricingPlan | null | undefined>(undefined),
			PricingPlanDataSource: new FormControl<string | null | undefined>(undefined),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			TrackerName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[-._\w]+$')]),
		});

	}

	export interface UpdateGeofenceCollectionPatchBody {

		/**
		 * Updates the description for the geofence collection.
		 * Min length: 0
		 * Max length: 1000
		 */
		Description?: string | null;

		/** No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>. */
		PricingPlan?: PricingPlan | null;

		/** This parameter is no longer used. */
		PricingPlanDataSource?: string | null;
	}
	export interface UpdateGeofenceCollectionPatchBodyFormProperties {

		/**
		 * Updates the description for the geofence collection.
		 * Min length: 0
		 * Max length: 1000
		 */
		Description: FormControl<string | null | undefined>,

		/** No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>. */
		PricingPlan: FormControl<PricingPlan | null | undefined>,

		/** This parameter is no longer used. */
		PricingPlanDataSource: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGeofenceCollectionPatchBodyFormGroup() {
		return new FormGroup<UpdateGeofenceCollectionPatchBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
			PricingPlan: new FormControl<PricingPlan | null | undefined>(undefined),
			PricingPlanDataSource: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateKeyPatchBody {

		/**
		 * Updates the description for the API key resource.
		 * Min length: 0
		 * Max length: 1000
		 */
		Description?: string | null;

		/** Updates the timestamp for when the API key resource will expire in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. */
		ExpireTime?: Date | null;

		/** <p>The boolean flag to be included for updating <code>ExpireTime</code> or <code>Restrictions</code> details.</p> <p>Must be set to <code>true</code> to update an API key resource that has been used in the past 7 days.</p> <p> <code>False</code> if force update is not preferred</p> <p>Default value: <code>False</code> </p> */
		ForceUpdate?: boolean | null;

		/** Whether the API key should expire. Set to <code>true</code> to set the API key to have no expiration time. */
		NoExpiry?: boolean | null;

		/** API Restrictions on the allowed actions, resources, and referers for an API key resource. */
		Restrictions?: UpdateKeyPatchBodyRestrictions;
	}
	export interface UpdateKeyPatchBodyFormProperties {

		/**
		 * Updates the description for the API key resource.
		 * Min length: 0
		 * Max length: 1000
		 */
		Description: FormControl<string | null | undefined>,

		/** Updates the timestamp for when the API key resource will expire in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. */
		ExpireTime: FormControl<Date | null | undefined>,

		/** <p>The boolean flag to be included for updating <code>ExpireTime</code> or <code>Restrictions</code> details.</p> <p>Must be set to <code>true</code> to update an API key resource that has been used in the past 7 days.</p> <p> <code>False</code> if force update is not preferred</p> <p>Default value: <code>False</code> </p> */
		ForceUpdate: FormControl<boolean | null | undefined>,

		/** Whether the API key should expire. Set to <code>true</code> to set the API key to have no expiration time. */
		NoExpiry: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateKeyPatchBodyFormGroup() {
		return new FormGroup<UpdateKeyPatchBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
			ExpireTime: new FormControl<Date | null | undefined>(undefined),
			ForceUpdate: new FormControl<boolean | null | undefined>(undefined),
			NoExpiry: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateKeyPatchBodyRestrictions {
		AllowActions?: Array<string>;
		AllowReferers?: Array<string>;
		AllowResources?: Array<string>;
	}
	export interface UpdateKeyPatchBodyRestrictionsFormProperties {
	}
	export function CreateUpdateKeyPatchBodyRestrictionsFormGroup() {
		return new FormGroup<UpdateKeyPatchBodyRestrictionsFormProperties>({
		});

	}

	export interface UpdateMapPatchBody {

		/** Specifies the political view for the style. */
		ConfigurationUpdate?: UpdateMapPatchBodyConfigurationUpdate;

		/**
		 * Updates the description for the map resource.
		 * Min length: 0
		 * Max length: 1000
		 */
		Description?: string | null;

		/** No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>. */
		PricingPlan?: PricingPlan | null;
	}
	export interface UpdateMapPatchBodyFormProperties {

		/**
		 * Updates the description for the map resource.
		 * Min length: 0
		 * Max length: 1000
		 */
		Description: FormControl<string | null | undefined>,

		/** No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>. */
		PricingPlan: FormControl<PricingPlan | null | undefined>,
	}
	export function CreateUpdateMapPatchBodyFormGroup() {
		return new FormGroup<UpdateMapPatchBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
			PricingPlan: new FormControl<PricingPlan | null | undefined>(undefined),
		});

	}

	export interface UpdateMapPatchBodyConfigurationUpdate {
		PoliticalView?: string;
	}
	export interface UpdateMapPatchBodyConfigurationUpdateFormProperties {
		PoliticalView: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMapPatchBodyConfigurationUpdateFormGroup() {
		return new FormGroup<UpdateMapPatchBodyConfigurationUpdateFormProperties>({
			PoliticalView: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePlaceIndexPatchBody {

		/** <p>Specifies the data storage option chosen for requesting Places.</p> <important> <p>When using Amazon Location Places:</p> <ul> <li> <p>If using HERE Technologies as a data provider, you can't store results for locations in Japan by setting <code>IntendedUse</code> to <code>Storage</code>. parameter.</p> </li> <li> <p>Under the <code>MobileAssetTracking</code> or <code>MobilAssetManagement</code> pricing plan, you can't store results from your place index resources by setting <code>IntendedUse</code> to <code>Storage</code>. This returns a validation exception error.</p> </li> </ul> <p>For more information, see the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> for Amazon Location Service.</p> </important> */
		DataSourceConfiguration?: UpdatePlaceIndexPatchBodyDataSourceConfiguration;

		/**
		 * Updates the description for the place index resource.
		 * Min length: 0
		 * Max length: 1000
		 */
		Description?: string | null;

		/** No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>. */
		PricingPlan?: PricingPlan | null;
	}
	export interface UpdatePlaceIndexPatchBodyFormProperties {

		/**
		 * Updates the description for the place index resource.
		 * Min length: 0
		 * Max length: 1000
		 */
		Description: FormControl<string | null | undefined>,

		/** No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>. */
		PricingPlan: FormControl<PricingPlan | null | undefined>,
	}
	export function CreateUpdatePlaceIndexPatchBodyFormGroup() {
		return new FormGroup<UpdatePlaceIndexPatchBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
			PricingPlan: new FormControl<PricingPlan | null | undefined>(undefined),
		});

	}

	export interface UpdatePlaceIndexPatchBodyDataSourceConfiguration {
		IntendedUse?: IntendedUse;
	}
	export interface UpdatePlaceIndexPatchBodyDataSourceConfigurationFormProperties {
		IntendedUse: FormControl<IntendedUse | null | undefined>,
	}
	export function CreateUpdatePlaceIndexPatchBodyDataSourceConfigurationFormGroup() {
		return new FormGroup<UpdatePlaceIndexPatchBodyDataSourceConfigurationFormProperties>({
			IntendedUse: new FormControl<IntendedUse | null | undefined>(undefined),
		});

	}

	export interface UpdateRouteCalculatorPatchBody {

		/**
		 * Updates the description for the route calculator resource.
		 * Min length: 0
		 * Max length: 1000
		 */
		Description?: string | null;

		/** No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>. */
		PricingPlan?: PricingPlan | null;
	}
	export interface UpdateRouteCalculatorPatchBodyFormProperties {

		/**
		 * Updates the description for the route calculator resource.
		 * Min length: 0
		 * Max length: 1000
		 */
		Description: FormControl<string | null | undefined>,

		/** No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>. */
		PricingPlan: FormControl<PricingPlan | null | undefined>,
	}
	export function CreateUpdateRouteCalculatorPatchBodyFormGroup() {
		return new FormGroup<UpdateRouteCalculatorPatchBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
			PricingPlan: new FormControl<PricingPlan | null | undefined>(undefined),
		});

	}

	export interface UpdateTrackerPatchBody {

		/**
		 * Updates the description for the tracker resource.
		 * Min length: 0
		 * Max length: 1000
		 */
		Description?: string | null;

		/** <p>Whether to enable position <code>UPDATE</code> events from this tracker to be sent to EventBridge.</p> <note> <p>You do not need enable this feature to get <code>ENTER</code> and <code>EXIT</code> events for geofences with this tracker. Those events are always sent to EventBridge.</p> </note> */
		EventBridgeEnabled?: boolean | null;

		/** <p>Updates the position filtering for the tracker resource.</p> <p>Valid values:</p> <ul> <li> <p> <code>TimeBased</code> - Location updates are evaluated against linked geofence collections, but not every location update is stored. If your update frequency is more often than 30 seconds, only one update per 30 seconds is stored for each unique device ID. </p> </li> <li> <p> <code>DistanceBased</code> - If the device has moved less than 30 m (98.4 ft), location updates are ignored. Location updates within this distance are neither evaluated against linked geofence collections, nor stored. This helps control costs by reducing the number of geofence evaluations and historical device positions to paginate through. Distance-based filtering can also reduce the effects of GPS noise when displaying device trajectories on a map. </p> </li> <li> <p> <code>AccuracyBased</code> - If the device has moved less than the measured accuracy, location updates are ignored. For example, if two consecutive updates from a device have a horizontal accuracy of 5 m and 10 m, the second update is ignored if the device has moved less than 15 m. Ignored location updates are neither evaluated against linked geofence collections, nor stored. This helps educe the effects of GPS noise when displaying device trajectories on a map, and can help control costs by reducing the number of geofence evaluations. </p> </li> </ul> */
		PositionFiltering?: PositionFiltering | null;

		/** No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>. */
		PricingPlan?: PricingPlan | null;

		/** This parameter is no longer used. */
		PricingPlanDataSource?: string | null;
	}
	export interface UpdateTrackerPatchBodyFormProperties {

		/**
		 * Updates the description for the tracker resource.
		 * Min length: 0
		 * Max length: 1000
		 */
		Description: FormControl<string | null | undefined>,

		/** <p>Whether to enable position <code>UPDATE</code> events from this tracker to be sent to EventBridge.</p> <note> <p>You do not need enable this feature to get <code>ENTER</code> and <code>EXIT</code> events for geofences with this tracker. Those events are always sent to EventBridge.</p> </note> */
		EventBridgeEnabled: FormControl<boolean | null | undefined>,

		/** <p>Updates the position filtering for the tracker resource.</p> <p>Valid values:</p> <ul> <li> <p> <code>TimeBased</code> - Location updates are evaluated against linked geofence collections, but not every location update is stored. If your update frequency is more often than 30 seconds, only one update per 30 seconds is stored for each unique device ID. </p> </li> <li> <p> <code>DistanceBased</code> - If the device has moved less than 30 m (98.4 ft), location updates are ignored. Location updates within this distance are neither evaluated against linked geofence collections, nor stored. This helps control costs by reducing the number of geofence evaluations and historical device positions to paginate through. Distance-based filtering can also reduce the effects of GPS noise when displaying device trajectories on a map. </p> </li> <li> <p> <code>AccuracyBased</code> - If the device has moved less than the measured accuracy, location updates are ignored. For example, if two consecutive updates from a device have a horizontal accuracy of 5 m and 10 m, the second update is ignored if the device has moved less than 15 m. Ignored location updates are neither evaluated against linked geofence collections, nor stored. This helps educe the effects of GPS noise when displaying device trajectories on a map, and can help control costs by reducing the number of geofence evaluations. </p> </li> </ul> */
		PositionFiltering: FormControl<PositionFiltering | null | undefined>,

		/** No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>. */
		PricingPlan: FormControl<PricingPlan | null | undefined>,

		/** This parameter is no longer used. */
		PricingPlanDataSource: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTrackerPatchBodyFormGroup() {
		return new FormGroup<UpdateTrackerPatchBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
			EventBridgeEnabled: new FormControl<boolean | null | undefined>(undefined),
			PositionFiltering: new FormControl<PositionFiltering | null | undefined>(undefined),
			PricingPlan: new FormControl<PricingPlan | null | undefined>(undefined),
			PricingPlanDataSource: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDevicePositionHistoryPostBody {

		/** <p>Specify the end time for the position history in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. By default, the value will be the time that the request is made.</p> <p>Requirement:</p> <ul> <li> <p>The time specified for <code>EndTimeExclusive</code> must be after the time for <code>StartTimeInclusive</code>.</p> </li> </ul> */
		EndTimeExclusive?: Date | null;

		/**
		 * <p>An optional limit for the number of device positions returned in a single call.</p> <p>Default value: <code>100</code> </p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>
		 * Min length: 1
		 * Max length: 2000
		 */
		NextToken?: string | null;

		/** <p>Specify the start time for the position history in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. By default, the value will be 24 hours prior to the time that the request is made.</p> <p>Requirement:</p> <ul> <li> <p>The time specified for <code>StartTimeInclusive</code> must be before <code>EndTimeExclusive</code>.</p> </li> </ul> */
		StartTimeInclusive?: Date | null;
	}
	export interface GetDevicePositionHistoryPostBodyFormProperties {

		/** <p>Specify the end time for the position history in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. By default, the value will be the time that the request is made.</p> <p>Requirement:</p> <ul> <li> <p>The time specified for <code>EndTimeExclusive</code> must be after the time for <code>StartTimeInclusive</code>.</p> </li> </ul> */
		EndTimeExclusive: FormControl<Date | null | undefined>,

		/**
		 * <p>An optional limit for the number of device positions returned in a single call.</p> <p>Default value: <code>100</code> </p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>
		 * Min length: 1
		 * Max length: 2000
		 */
		NextToken: FormControl<string | null | undefined>,

		/** <p>Specify the start time for the position history in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. By default, the value will be 24 hours prior to the time that the request is made.</p> <p>Requirement:</p> <ul> <li> <p>The time specified for <code>StartTimeInclusive</code> must be before <code>EndTimeExclusive</code>.</p> </li> </ul> */
		StartTimeInclusive: FormControl<Date | null | undefined>,
	}
	export function CreateGetDevicePositionHistoryPostBodyFormGroup() {
		return new FormGroup<GetDevicePositionHistoryPostBodyFormProperties>({
			EndTimeExclusive: new FormControl<Date | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2000)]),
			StartTimeInclusive: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface PutGeofencePutBody {

		/** <p>Associates one of more properties with the geofence. A property is a key-value pair stored with the geofence and added to any geofence event triggered with that geofence.</p> <p>Format: <code>"key" : "value"</code> </p> */
		GeofenceProperties?: {[id: string]: string };

		/**
		 * <p>Contains the geofence geometry details.</p> <p>A geofence geometry is made up of either a polygon or a circle. Can be either a polygon or a circle. Including both will return a validation error.</p> <note> <p>Amazon Location doesn't currently support polygons with holes, multipolygons, polygons that are wound clockwise, or that cross the antimeridian. </p> </note>
		 * Required
		 */
		Geometry: PutGeofencePutBodyGeometry;
	}
	export interface PutGeofencePutBodyFormProperties {

		/** <p>Associates one of more properties with the geofence. A property is a key-value pair stored with the geofence and added to any geofence event triggered with that geofence.</p> <p>Format: <code>"key" : "value"</code> </p> */
		GeofenceProperties: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreatePutGeofencePutBodyFormGroup() {
		return new FormGroup<PutGeofencePutBodyFormProperties>({
			GeofenceProperties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface PutGeofencePutBodyGeometry {
		Circle?: Circle;
		Polygon?: Array<Array<Array<number>>> | null;
	}
	export interface PutGeofencePutBodyGeometryFormProperties {
	}
	export function CreatePutGeofencePutBodyGeometryFormGroup() {
		return new FormGroup<PutGeofencePutBodyGeometryFormProperties>({
		});

	}

	export interface ListDevicePositionsPostBody {

		/**
		 * <p>An optional limit for the number of entries returned in a single call.</p> <p>Default value: <code>100</code> </p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.</p> <p>Default value: <code>null</code> </p>
		 * Min length: 1
		 * Max length: 2000
		 */
		NextToken?: string | null;
	}
	export interface ListDevicePositionsPostBodyFormProperties {

		/**
		 * <p>An optional limit for the number of entries returned in a single call.</p> <p>Default value: <code>100</code> </p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.</p> <p>Default value: <code>null</code> </p>
		 * Min length: 1
		 * Max length: 2000
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDevicePositionsPostBodyFormGroup() {
		return new FormGroup<ListDevicePositionsPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2000)]),
		});

	}

	export interface ListGeofenceCollectionsPostBody {

		/**
		 * <p>An optional limit for the number of resources returned in a single call. </p> <p>Default value: <code>100</code> </p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>
		 * Min length: 1
		 * Max length: 2000
		 */
		NextToken?: string | null;
	}
	export interface ListGeofenceCollectionsPostBodyFormProperties {

		/**
		 * <p>An optional limit for the number of resources returned in a single call. </p> <p>Default value: <code>100</code> </p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>
		 * Min length: 1
		 * Max length: 2000
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGeofenceCollectionsPostBodyFormGroup() {
		return new FormGroup<ListGeofenceCollectionsPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2000)]),
		});

	}

	export interface ListGeofencesPostBody {

		/**
		 * <p>An optional limit for the number of geofences returned in a single call. </p> <p>Default value: <code>100</code> </p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>
		 * Min length: 1
		 * Max length: 2000
		 */
		NextToken?: string | null;
	}
	export interface ListGeofencesPostBodyFormProperties {

		/**
		 * <p>An optional limit for the number of geofences returned in a single call. </p> <p>Default value: <code>100</code> </p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>
		 * Min length: 1
		 * Max length: 2000
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGeofencesPostBodyFormGroup() {
		return new FormGroup<ListGeofencesPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2000)]),
		});

	}

	export interface ListKeysPostBody {

		/** Options for filtering API keys. */
		Filter?: ListKeysPostBodyFilter;

		/**
		 * <p>An optional limit for the number of resources returned in a single call. </p> <p>Default value: <code>100</code> </p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>
		 * Min length: 1
		 * Max length: 2000
		 */
		NextToken?: string | null;
	}
	export interface ListKeysPostBodyFormProperties {

		/**
		 * <p>An optional limit for the number of resources returned in a single call. </p> <p>Default value: <code>100</code> </p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>
		 * Min length: 1
		 * Max length: 2000
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListKeysPostBodyFormGroup() {
		return new FormGroup<ListKeysPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2000)]),
		});

	}

	export interface ListKeysPostBodyFilter {
		KeyStatus?: Status;
	}
	export interface ListKeysPostBodyFilterFormProperties {
		KeyStatus: FormControl<Status | null | undefined>,
	}
	export function CreateListKeysPostBodyFilterFormGroup() {
		return new FormGroup<ListKeysPostBodyFilterFormProperties>({
			KeyStatus: new FormControl<Status | null | undefined>(undefined),
		});

	}

	export interface ListMapsPostBody {

		/**
		 * <p>An optional limit for the number of resources returned in a single call. </p> <p>Default value: <code>100</code> </p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.</p> <p>Default value: <code>null</code> </p>
		 * Min length: 1
		 * Max length: 2000
		 */
		NextToken?: string | null;
	}
	export interface ListMapsPostBodyFormProperties {

		/**
		 * <p>An optional limit for the number of resources returned in a single call. </p> <p>Default value: <code>100</code> </p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.</p> <p>Default value: <code>null</code> </p>
		 * Min length: 1
		 * Max length: 2000
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMapsPostBodyFormGroup() {
		return new FormGroup<ListMapsPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2000)]),
		});

	}

	export interface ListPlaceIndexesPostBody {

		/**
		 * <p>An optional limit for the maximum number of results returned in a single call.</p> <p>Default value: <code>100</code> </p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.</p> <p>Default value: <code>null</code> </p>
		 * Min length: 1
		 * Max length: 2000
		 */
		NextToken?: string | null;
	}
	export interface ListPlaceIndexesPostBodyFormProperties {

		/**
		 * <p>An optional limit for the maximum number of results returned in a single call.</p> <p>Default value: <code>100</code> </p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.</p> <p>Default value: <code>null</code> </p>
		 * Min length: 1
		 * Max length: 2000
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPlaceIndexesPostBodyFormGroup() {
		return new FormGroup<ListPlaceIndexesPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2000)]),
		});

	}

	export interface ListRouteCalculatorsPostBody {

		/**
		 * <p>An optional maximum number of results returned in a single call.</p> <p>Default Value: <code>100</code> </p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.</p> <p>Default Value: <code>null</code> </p>
		 * Min length: 1
		 * Max length: 2000
		 */
		NextToken?: string | null;
	}
	export interface ListRouteCalculatorsPostBodyFormProperties {

		/**
		 * <p>An optional maximum number of results returned in a single call.</p> <p>Default Value: <code>100</code> </p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.</p> <p>Default Value: <code>null</code> </p>
		 * Min length: 1
		 * Max length: 2000
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRouteCalculatorsPostBodyFormGroup() {
		return new FormGroup<ListRouteCalculatorsPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2000)]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * <p>Applies one or more tags to specific resource. A tag is a key-value pair that helps you manage, identify, search, and filter your resources.</p> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource.</p> </li> <li> <p>Each tag key must be unique and must have exactly one associated value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8.</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @</p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul>
		 * Required
		 */
		Tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * <p>Applies one or more tags to specific resource. A tag is a key-value pair that helps you manage, identify, search, and filter your resources.</p> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource.</p> </li> <li> <p>Each tag key must be unique and must have exactly one associated value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8.</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @</p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul>
		 * Required
		 */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTrackerConsumersPostBody {

		/**
		 * <p>An optional limit for the number of resources returned in a single call. </p> <p>Default value: <code>100</code> </p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>
		 * Min length: 1
		 * Max length: 2000
		 */
		NextToken?: string | null;
	}
	export interface ListTrackerConsumersPostBodyFormProperties {

		/**
		 * <p>An optional limit for the number of resources returned in a single call. </p> <p>Default value: <code>100</code> </p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>
		 * Min length: 1
		 * Max length: 2000
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTrackerConsumersPostBodyFormGroup() {
		return new FormGroup<ListTrackerConsumersPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2000)]),
		});

	}

	export interface ListTrackersPostBody {

		/**
		 * <p>An optional limit for the number of resources returned in a single call. </p> <p>Default value: <code>100</code> </p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>
		 * Min length: 1
		 * Max length: 2000
		 */
		NextToken?: string | null;
	}
	export interface ListTrackersPostBodyFormProperties {

		/**
		 * <p>An optional limit for the number of resources returned in a single call. </p> <p>Default value: <code>100</code> </p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>
		 * Min length: 1
		 * Max length: 2000
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTrackersPostBodyFormGroup() {
		return new FormGroup<ListTrackersPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2000)]),
		});

	}

	export interface SearchPlaceIndexForPositionPostBody {

		/**
		 * <p>The preferred language used to return results. The value must be a valid <a href="https://tools.ietf.org/search/bcp47">BCP 47</a> language tag, for example, <code>en</code> for English.</p> <p>This setting affects the languages used in the results, but not the results themselves. If no language is specified, or not supported for a particular result, the partner automatically chooses a language for the result.</p> <p>For an example, we'll use the Greek language. You search for a location around Athens, Greece, with the <code>language</code> parameter set to <code>en</code>. The <code>city</code> in the results will most likely be returned as <code>Athens</code>.</p> <p>If you set the <code>language</code> parameter to <code>el</code>, for Greek, then the <code>city</code> in the results will more likely be returned as <code>Αθήνα</code>.</p> <p>If the data provider does not have a value for Greek, the result will be in a language that the provider does support.</p>
		 * Min length: 2
		 * Max length: 35
		 */
		Language?: string | null;

		/**
		 * <p>An optional parameter. The maximum number of results returned per request.</p> <p>Default value: <code>50</code> </p>
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;

		/**
		 * <p>Specifies the longitude and latitude of the position to query.</p> <p> This parameter must contain a pair of numbers. The first number represents the X coordinate, or longitude; the second number represents the Y coordinate, or latitude.</p> <p>For example, <code>[-123.1174, 49.2847]</code> represents a position with longitude <code>-123.1174</code> and latitude <code>49.2847</code>.</p>
		 * Required
		 * Minimum items: 2
		 * Maximum items: 2
		 */
		Position: Array<number>;
	}
	export interface SearchPlaceIndexForPositionPostBodyFormProperties {

		/**
		 * <p>The preferred language used to return results. The value must be a valid <a href="https://tools.ietf.org/search/bcp47">BCP 47</a> language tag, for example, <code>en</code> for English.</p> <p>This setting affects the languages used in the results, but not the results themselves. If no language is specified, or not supported for a particular result, the partner automatically chooses a language for the result.</p> <p>For an example, we'll use the Greek language. You search for a location around Athens, Greece, with the <code>language</code> parameter set to <code>en</code>. The <code>city</code> in the results will most likely be returned as <code>Athens</code>.</p> <p>If you set the <code>language</code> parameter to <code>el</code>, for Greek, then the <code>city</code> in the results will more likely be returned as <code>Αθήνα</code>.</p> <p>If the data provider does not have a value for Greek, the result will be in a language that the provider does support.</p>
		 * Min length: 2
		 * Max length: 35
		 */
		Language: FormControl<string | null | undefined>,

		/**
		 * <p>An optional parameter. The maximum number of results returned per request.</p> <p>Default value: <code>50</code> </p>
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchPlaceIndexForPositionPostBodyFormGroup() {
		return new FormGroup<SearchPlaceIndexForPositionPostBodyFormProperties>({
			Language: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(35)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
		});

	}

	export interface SearchPlaceIndexForSuggestionsPostBody {

		/**
		 * <p>An optional parameter that indicates a preference for place suggestions that are closer to a specified position.</p> <p> If provided, this parameter must contain a pair of numbers. The first number represents the X coordinate, or longitude; the second number represents the Y coordinate, or latitude.</p> <p>For example, <code>[-123.1174, 49.2847]</code> represents the position with longitude <code>-123.1174</code> and latitude <code>49.2847</code>.</p> <note> <p> <code>BiasPosition</code> and <code>FilterBBox</code> are mutually exclusive. Specifying both options results in an error. </p> </note>
		 * Minimum items: 2
		 * Maximum items: 2
		 */
		BiasPosition?: Array<number>;

		/**
		 * <p>An optional parameter that limits the search results by returning only suggestions within a specified bounding box.</p> <p> If provided, this parameter must contain a total of four consecutive numbers in two pairs. The first pair of numbers represents the X and Y coordinates (longitude and latitude, respectively) of the southwest corner of the bounding box; the second pair of numbers represents the X and Y coordinates (longitude and latitude, respectively) of the northeast corner of the bounding box.</p> <p>For example, <code>[-12.7935, -37.4835, -12.0684, -36.9542]</code> represents a bounding box where the southwest corner has longitude <code>-12.7935</code> and latitude <code>-37.4835</code>, and the northeast corner has longitude <code>-12.0684</code> and latitude <code>-36.9542</code>.</p> <note> <p> <code>FilterBBox</code> and <code>BiasPosition</code> are mutually exclusive. Specifying both options results in an error. </p> </note>
		 * Minimum items: 4
		 * Maximum items: 4
		 */
		FilterBBox?: Array<number>;

		/**
		 * <p>A list of one or more Amazon Location categories to filter the returned places. If you include more than one category, the results will include results that match <i>any</i> of the categories listed.</p> <p>For more information about using categories, including a list of Amazon Location categories, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/category-filtering.html">Categories and filtering</a>, in the <i>Amazon Location Service Developer Guide</i>.</p>
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		FilterCategories?: Array<string>;

		/**
		 * <p>An optional parameter that limits the search results by returning only suggestions within the provided list of countries.</p> <ul> <li> <p>Use the <a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166</a> 3-digit country code. For example, Australia uses three upper-case characters: <code>AUS</code>.</p> </li> </ul>
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		FilterCountries?: Array<string>;

		/**
		 * <p>The preferred language used to return results. The value must be a valid <a href="https://tools.ietf.org/search/bcp47">BCP 47</a> language tag, for example, <code>en</code> for English.</p> <p>This setting affects the languages used in the results. If no language is specified, or not supported for a particular result, the partner automatically chooses a language for the result.</p> <p>For an example, we'll use the Greek language. You search for <code>Athens, Gr</code> to get suggestions with the <code>language</code> parameter set to <code>en</code>. The results found will most likely be returned as <code>Athens, Greece</code>.</p> <p>If you set the <code>language</code> parameter to <code>el</code>, for Greek, then the result found will more likely be returned as <code>Αθήνα, Ελλάδα</code>.</p> <p>If the data provider does not have a value for Greek, the result will be in a language that the provider does support.</p>
		 * Min length: 2
		 * Max length: 35
		 */
		Language?: string | null;

		/**
		 * <p>An optional parameter. The maximum number of results returned per request. </p> <p>The default: <code>5</code> </p>
		 * Minimum: 1
		 * Maximum: 15
		 */
		MaxResults?: number | null;

		/**
		 * The free-form partial text to use to generate place suggestions. For example, <code>eiffel tow</code>.
		 * Required
		 * Min length: 1
		 * Max length: 200
		 */
		Text: string;
	}
	export interface SearchPlaceIndexForSuggestionsPostBodyFormProperties {

		/**
		 * <p>The preferred language used to return results. The value must be a valid <a href="https://tools.ietf.org/search/bcp47">BCP 47</a> language tag, for example, <code>en</code> for English.</p> <p>This setting affects the languages used in the results. If no language is specified, or not supported for a particular result, the partner automatically chooses a language for the result.</p> <p>For an example, we'll use the Greek language. You search for <code>Athens, Gr</code> to get suggestions with the <code>language</code> parameter set to <code>en</code>. The results found will most likely be returned as <code>Athens, Greece</code>.</p> <p>If you set the <code>language</code> parameter to <code>el</code>, for Greek, then the result found will more likely be returned as <code>Αθήνα, Ελλάδα</code>.</p> <p>If the data provider does not have a value for Greek, the result will be in a language that the provider does support.</p>
		 * Min length: 2
		 * Max length: 35
		 */
		Language: FormControl<string | null | undefined>,

		/**
		 * <p>An optional parameter. The maximum number of results returned per request. </p> <p>The default: <code>5</code> </p>
		 * Minimum: 1
		 * Maximum: 15
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * The free-form partial text to use to generate place suggestions. For example, <code>eiffel tow</code>.
		 * Required
		 * Min length: 1
		 * Max length: 200
		 */
		Text: FormControl<string | null | undefined>,
	}
	export function CreateSearchPlaceIndexForSuggestionsPostBodyFormGroup() {
		return new FormGroup<SearchPlaceIndexForSuggestionsPostBodyFormProperties>({
			Language: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(35)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(15)]),
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(200)]),
		});

	}

	export interface SearchPlaceIndexForTextPostBody {

		/**
		 * <p>An optional parameter that indicates a preference for places that are closer to a specified position.</p> <p> If provided, this parameter must contain a pair of numbers. The first number represents the X coordinate, or longitude; the second number represents the Y coordinate, or latitude.</p> <p>For example, <code>[-123.1174, 49.2847]</code> represents the position with longitude <code>-123.1174</code> and latitude <code>49.2847</code>.</p> <note> <p> <code>BiasPosition</code> and <code>FilterBBox</code> are mutually exclusive. Specifying both options results in an error. </p> </note>
		 * Minimum items: 2
		 * Maximum items: 2
		 */
		BiasPosition?: Array<number>;

		/**
		 * <p>An optional parameter that limits the search results by returning only places that are within the provided bounding box.</p> <p> If provided, this parameter must contain a total of four consecutive numbers in two pairs. The first pair of numbers represents the X and Y coordinates (longitude and latitude, respectively) of the southwest corner of the bounding box; the second pair of numbers represents the X and Y coordinates (longitude and latitude, respectively) of the northeast corner of the bounding box.</p> <p>For example, <code>[-12.7935, -37.4835, -12.0684, -36.9542]</code> represents a bounding box where the southwest corner has longitude <code>-12.7935</code> and latitude <code>-37.4835</code>, and the northeast corner has longitude <code>-12.0684</code> and latitude <code>-36.9542</code>.</p> <note> <p> <code>FilterBBox</code> and <code>BiasPosition</code> are mutually exclusive. Specifying both options results in an error. </p> </note>
		 * Minimum items: 4
		 * Maximum items: 4
		 */
		FilterBBox?: Array<number>;

		/**
		 * <p>A list of one or more Amazon Location categories to filter the returned places. If you include more than one category, the results will include results that match <i>any</i> of the categories listed.</p> <p>For more information about using categories, including a list of Amazon Location categories, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/category-filtering.html">Categories and filtering</a>, in the <i>Amazon Location Service Developer Guide</i>.</p>
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		FilterCategories?: Array<string>;

		/**
		 * <p>An optional parameter that limits the search results by returning only places that are in a specified list of countries.</p> <ul> <li> <p>Valid values include <a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166</a> 3-digit country codes. For example, Australia uses three upper-case characters: <code>AUS</code>.</p> </li> </ul>
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		FilterCountries?: Array<string>;

		/**
		 * <p>The preferred language used to return results. The value must be a valid <a href="https://tools.ietf.org/search/bcp47">BCP 47</a> language tag, for example, <code>en</code> for English.</p> <p>This setting affects the languages used in the results, but not the results themselves. If no language is specified, or not supported for a particular result, the partner automatically chooses a language for the result.</p> <p>For an example, we'll use the Greek language. You search for <code>Athens, Greece</code>, with the <code>language</code> parameter set to <code>en</code>. The result found will most likely be returned as <code>Athens</code>.</p> <p>If you set the <code>language</code> parameter to <code>el</code>, for Greek, then the result found will more likely be returned as <code>Αθήνα</code>.</p> <p>If the data provider does not have a value for Greek, the result will be in a language that the provider does support.</p>
		 * Min length: 2
		 * Max length: 35
		 */
		Language?: string | null;

		/**
		 * <p>An optional parameter. The maximum number of results returned per request. </p> <p>The default: <code>50</code> </p>
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;

		/**
		 * The address, name, city, or region to be used in the search in free-form text format. For example, <code>123 Any Street</code>.
		 * Required
		 * Min length: 1
		 * Max length: 200
		 */
		Text: string;
	}
	export interface SearchPlaceIndexForTextPostBodyFormProperties {

		/**
		 * <p>The preferred language used to return results. The value must be a valid <a href="https://tools.ietf.org/search/bcp47">BCP 47</a> language tag, for example, <code>en</code> for English.</p> <p>This setting affects the languages used in the results, but not the results themselves. If no language is specified, or not supported for a particular result, the partner automatically chooses a language for the result.</p> <p>For an example, we'll use the Greek language. You search for <code>Athens, Greece</code>, with the <code>language</code> parameter set to <code>en</code>. The result found will most likely be returned as <code>Athens</code>.</p> <p>If you set the <code>language</code> parameter to <code>el</code>, for Greek, then the result found will more likely be returned as <code>Αθήνα</code>.</p> <p>If the data provider does not have a value for Greek, the result will be in a language that the provider does support.</p>
		 * Min length: 2
		 * Max length: 35
		 */
		Language: FormControl<string | null | undefined>,

		/**
		 * <p>An optional parameter. The maximum number of results returned per request. </p> <p>The default: <code>50</code> </p>
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * The address, name, city, or region to be used in the search in free-form text format. For example, <code>123 Any Street</code>.
		 * Required
		 * Min length: 1
		 * Max length: 200
		 */
		Text: FormControl<string | null | undefined>,
	}
	export function CreateSearchPlaceIndexForTextPostBodyFormGroup() {
		return new FormGroup<SearchPlaceIndexForTextPostBodyFormProperties>({
			Language: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(35)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(200)]),
		});

	}

}

