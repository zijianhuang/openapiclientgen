import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface V2Object {
	}
	export interface V2ObjectFormProperties {
	}
	export function CreateV2ObjectFormGroup() {
		return new FormGroup<V2ObjectFormProperties>({
		});

	}

	export interface V2Void {
	}
	export interface V2VoidFormProperties {
	}
	export function CreateV2VoidFormGroup() {
		return new FormGroup<V2VoidFormProperties>({
		});

	}

	export interface V3BulkDeparturesRequest {

		/** Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time) */
		date_utc?: Date | null;

		/** List objects to be returned in full (i.e. expanded) - options include: all, stop, route, run, direction, disruption, none */
		expand?: Array<string>;

		/** Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only */
		include_cancelled?: boolean | null;

		/** Indicates if the route geopath should be returned */
		include_geopath?: boolean | null;

		/** Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default = false). Requires max_results &gt; 0. */
		look_backwards?: boolean | null;

		/**
		 * Collection of departure requests
		 * Required
		 */
		requests: Array<V3StopDepartureRequest>;
	}
	export interface V3BulkDeparturesRequestFormProperties {

		/** Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time) */
		date_utc: FormControl<Date | null | undefined>,

		/** Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only */
		include_cancelled: FormControl<boolean | null | undefined>,

		/** Indicates if the route geopath should be returned */
		include_geopath: FormControl<boolean | null | undefined>,

		/** Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default = false). Requires max_results &gt; 0. */
		look_backwards: FormControl<boolean | null | undefined>,
	}
	export function CreateV3BulkDeparturesRequestFormGroup() {
		return new FormGroup<V3BulkDeparturesRequestFormProperties>({
			date_utc: new FormControl<Date | null | undefined>(undefined),
			include_cancelled: new FormControl<boolean | null | undefined>(undefined),
			include_geopath: new FormControl<boolean | null | undefined>(undefined),
			look_backwards: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface V3StopDepartureRequest {

		/** Indicates that stop_id parameter will accept "GTFS stop_id" data and route_directions[x].route_id parameters will accept route_gtfs_id data */
		gtfs?: boolean | null;

		/**
		 * Maximum number of results returned
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		max_results?: number | null;

		/**
		 * The route directions to find departures for at this stop.
		 * Required
		 */
		route_directions: Array<V3StopDepartureRequestRouteDirection>;

		/** Number identifying transport mode; values returned via RouteTypes API */
		route_type?: V3StopDepartureRequestRoute_type;

		/**
		 * Identifier of stop; values returned by Stops API
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		stop_id?: number | null;
	}
	export interface V3StopDepartureRequestFormProperties {

		/** Indicates that stop_id parameter will accept "GTFS stop_id" data and route_directions[x].route_id parameters will accept route_gtfs_id data */
		gtfs: FormControl<boolean | null | undefined>,

		/**
		 * Maximum number of results returned
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		max_results: FormControl<number | null | undefined>,

		/** Number identifying transport mode; values returned via RouteTypes API */
		route_type: FormControl<V3StopDepartureRequestRoute_type | null | undefined>,

		/**
		 * Identifier of stop; values returned by Stops API
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		stop_id: FormControl<number | null | undefined>,
	}
	export function CreateV3StopDepartureRequestFormGroup() {
		return new FormGroup<V3StopDepartureRequestFormProperties>({
			gtfs: new FormControl<boolean | null | undefined>(undefined),
			max_results: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(2147483647)]),
			route_type: new FormControl<V3StopDepartureRequestRoute_type | null | undefined>(undefined),
			stop_id: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(2147483647)]),
		});

	}

	export interface V3StopDepartureRequestRouteDirection {

		/**
		 * Direction of travel identifier; values returned by Directions API - v3/directions
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		direction_id?: number | null;

		/**
		 * Name of direction of travel; values returned by Directions API - v3/directions
		 * Required
		 */
		direction_name: string;

		/** Identifier of route; values returned by Routes API - v3/routes */
		route_id?: string | null;
	}
	export interface V3StopDepartureRequestRouteDirectionFormProperties {

		/**
		 * Direction of travel identifier; values returned by Directions API - v3/directions
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		direction_id: FormControl<number | null | undefined>,

		/**
		 * Name of direction of travel; values returned by Directions API - v3/directions
		 * Required
		 */
		direction_name: FormControl<string | null | undefined>,

		/** Identifier of route; values returned by Routes API - v3/routes */
		route_id: FormControl<string | null | undefined>,
	}
	export function CreateV3StopDepartureRequestRouteDirectionFormGroup() {
		return new FormGroup<V3StopDepartureRequestRouteDirectionFormProperties>({
			direction_id: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(2147483647)]),
			direction_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			route_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum V3StopDepartureRequestRoute_type { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4 }

	export interface V3BulkDeparturesResponse {

		/** Directions of travel of route */
		directions?: Array<V3Direction>;

		/** Disruption information applicable to relevant routes or stops */
		disruptions?: {[id: string]: V3Disruption };

		/** Contains departures for the requested stop and route(s). It includes details as to the route_direction and whether it is still valid. */
		responses?: Array<V3BulkDeparturesUpdateResponse>;

		/** Train lines, tram routes, bus routes, regional coach routes, Night Bus routes */
		routes?: Array<V2Object>;

		/** Individual trips/services of a route */
		runs?: Array<V3Run>;
		status?: V3Status;

		/** A train station, tram stop, bus stop, regional coach stop or Night Bus stop */
		stops?: {[id: string]: V3BulkDeparturesStopResponse };
	}
	export interface V3BulkDeparturesResponseFormProperties {

		/** Disruption information applicable to relevant routes or stops */
		disruptions: FormControl<{[id: string]: V3Disruption } | null | undefined>,

		/** A train station, tram stop, bus stop, regional coach stop or Night Bus stop */
		stops: FormControl<{[id: string]: V3BulkDeparturesStopResponse } | null | undefined>,
	}
	export function CreateV3BulkDeparturesResponseFormGroup() {
		return new FormGroup<V3BulkDeparturesResponseFormProperties>({
			disruptions: new FormControl<{[id: string]: V3Disruption } | null | undefined>(undefined),
			stops: new FormControl<{[id: string]: V3BulkDeparturesStopResponse } | null | undefined>(undefined),
		});

	}

	export interface V3Direction {

		/** Direction of travel identifier */
		direction_id?: number | null;

		/** Name of direction of travel */
		direction_name?: string | null;

		/** Route identifier */
		route_id?: number | null;

		/** Transport mode identifier */
		route_type?: number | null;
	}
	export interface V3DirectionFormProperties {

		/** Direction of travel identifier */
		direction_id: FormControl<number | null | undefined>,

		/** Name of direction of travel */
		direction_name: FormControl<string | null | undefined>,

		/** Route identifier */
		route_id: FormControl<number | null | undefined>,

		/** Transport mode identifier */
		route_type: FormControl<number | null | undefined>,
	}
	export function CreateV3DirectionFormGroup() {
		return new FormGroup<V3DirectionFormProperties>({
			direction_id: new FormControl<number | null | undefined>(undefined),
			direction_name: new FormControl<string | null | undefined>(undefined),
			route_id: new FormControl<number | null | undefined>(undefined),
			route_type: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface V3Disruption {
		colour?: string | null;

		/** Description of the disruption */
		description?: string | null;
		display_on_board?: boolean | null;
		display_status?: boolean | null;

		/** Disruption information identifier */
		disruption_id?: number | null;

		/** Status of the disruption (e.g. "Planned", "Current") */
		disruption_status?: string | null;

		/** Type of disruption */
		disruption_type?: string | null;

		/** Date and time at which disruption begins, in ISO 8601 UTC format */
		from_date?: Date | null;

		/** Date and time disruption information was last updated by PTV, in ISO 8601 UTC format */
		last_updated?: Date | null;

		/** Date and time disruption information is published on PTV website, in ISO 8601 UTC format */
		published_on?: Date | null;

		/** Route relevant to a disruption (if applicable) */
		routes?: Array<V3DisruptionRoute>;

		/** Stop relevant to a disruption (if applicable) */
		stops?: Array<V3DisruptionStop>;

		/** Headline title summarising disruption information */
		title?: string | null;

		/** Date and time at which disruption ends, in ISO 8601 UTC format (returns null if unknown) */
		to_date?: Date | null;

		/** URL of relevant article on PTV website */
		url?: string | null;
	}
	export interface V3DisruptionFormProperties {
		colour: FormControl<string | null | undefined>,

		/** Description of the disruption */
		description: FormControl<string | null | undefined>,
		display_on_board: FormControl<boolean | null | undefined>,
		display_status: FormControl<boolean | null | undefined>,

		/** Disruption information identifier */
		disruption_id: FormControl<number | null | undefined>,

		/** Status of the disruption (e.g. "Planned", "Current") */
		disruption_status: FormControl<string | null | undefined>,

		/** Type of disruption */
		disruption_type: FormControl<string | null | undefined>,

		/** Date and time at which disruption begins, in ISO 8601 UTC format */
		from_date: FormControl<Date | null | undefined>,

		/** Date and time disruption information was last updated by PTV, in ISO 8601 UTC format */
		last_updated: FormControl<Date | null | undefined>,

		/** Date and time disruption information is published on PTV website, in ISO 8601 UTC format */
		published_on: FormControl<Date | null | undefined>,

		/** Headline title summarising disruption information */
		title: FormControl<string | null | undefined>,

		/** Date and time at which disruption ends, in ISO 8601 UTC format (returns null if unknown) */
		to_date: FormControl<Date | null | undefined>,

		/** URL of relevant article on PTV website */
		url: FormControl<string | null | undefined>,
	}
	export function CreateV3DisruptionFormGroup() {
		return new FormGroup<V3DisruptionFormProperties>({
			colour: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			display_on_board: new FormControl<boolean | null | undefined>(undefined),
			display_status: new FormControl<boolean | null | undefined>(undefined),
			disruption_id: new FormControl<number | null | undefined>(undefined),
			disruption_status: new FormControl<string | null | undefined>(undefined),
			disruption_type: new FormControl<string | null | undefined>(undefined),
			from_date: new FormControl<Date | null | undefined>(undefined),
			last_updated: new FormControl<Date | null | undefined>(undefined),
			published_on: new FormControl<Date | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			to_date: new FormControl<Date | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V3DisruptionRoute {
		direction?: V3DisruptionDirection;

		/** GTFS Identifer of the route */
		route_gtfs_id?: string | null;

		/** Route identifier */
		route_id?: number | null;

		/** Name of route */
		route_name?: string | null;

		/** Route number presented to public (i.e. not route_id) */
		route_number?: string | null;

		/** Transport mode identifier */
		route_type?: number | null;
	}
	export interface V3DisruptionRouteFormProperties {

		/** GTFS Identifer of the route */
		route_gtfs_id: FormControl<string | null | undefined>,

		/** Route identifier */
		route_id: FormControl<number | null | undefined>,

		/** Name of route */
		route_name: FormControl<string | null | undefined>,

		/** Route number presented to public (i.e. not route_id) */
		route_number: FormControl<string | null | undefined>,

		/** Transport mode identifier */
		route_type: FormControl<number | null | undefined>,
	}
	export function CreateV3DisruptionRouteFormGroup() {
		return new FormGroup<V3DisruptionRouteFormProperties>({
			route_gtfs_id: new FormControl<string | null | undefined>(undefined),
			route_id: new FormControl<number | null | undefined>(undefined),
			route_name: new FormControl<string | null | undefined>(undefined),
			route_number: new FormControl<string | null | undefined>(undefined),
			route_type: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface V3DisruptionDirection {

		/** Direction of travel identifier */
		direction_id?: number | null;

		/** Name of direction of travel */
		direction_name?: string | null;

		/** Route and direction of travel combination identifier */
		route_direction_id?: number | null;

		/** Time of service to which disruption applies, in 24 hour clock format (HH:MM:SS) AEDT/AEST; returns null if disruption applies to multiple (or no) services */
		service_time?: string | null;
	}
	export interface V3DisruptionDirectionFormProperties {

		/** Direction of travel identifier */
		direction_id: FormControl<number | null | undefined>,

		/** Name of direction of travel */
		direction_name: FormControl<string | null | undefined>,

		/** Route and direction of travel combination identifier */
		route_direction_id: FormControl<number | null | undefined>,

		/** Time of service to which disruption applies, in 24 hour clock format (HH:MM:SS) AEDT/AEST; returns null if disruption applies to multiple (or no) services */
		service_time: FormControl<string | null | undefined>,
	}
	export function CreateV3DisruptionDirectionFormGroup() {
		return new FormGroup<V3DisruptionDirectionFormProperties>({
			direction_id: new FormControl<number | null | undefined>(undefined),
			direction_name: new FormControl<string | null | undefined>(undefined),
			route_direction_id: new FormControl<number | null | undefined>(undefined),
			service_time: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V3DisruptionStop {
		stop_id?: number | null;
		stop_name?: string | null;
	}
	export interface V3DisruptionStopFormProperties {
		stop_id: FormControl<number | null | undefined>,
		stop_name: FormControl<string | null | undefined>,
	}
	export function CreateV3DisruptionStopFormGroup() {
		return new FormGroup<V3DisruptionStopFormProperties>({
			stop_id: new FormControl<number | null | undefined>(undefined),
			stop_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V3BulkDeparturesUpdateResponse {

		/** Timetabled and real-time service departures */
		departures?: Array<V3Departure>;
		requested_route_direction?: V3BulkDeparturesRouteDirectionResponse;
		route_direction?: V3BulkDeparturesRouteDirectionResponse;

		/**
		 * The status of the route direction (changed | unchanged).
		 * If changed, requests should change the requested_route_direction for the route_direction supplied.
		 */
		route_direction_status?: V3BulkDeparturesUpdateResponseRoute_direction_status;

		/** Transport mode identifier */
		route_type?: number | null;

		/** Stop identifier */
		stop_id?: number | null;
	}
	export interface V3BulkDeparturesUpdateResponseFormProperties {

		/**
		 * The status of the route direction (changed | unchanged).
		 * If changed, requests should change the requested_route_direction for the route_direction supplied.
		 */
		route_direction_status: FormControl<V3BulkDeparturesUpdateResponseRoute_direction_status | null | undefined>,

		/** Transport mode identifier */
		route_type: FormControl<number | null | undefined>,

		/** Stop identifier */
		stop_id: FormControl<number | null | undefined>,
	}
	export function CreateV3BulkDeparturesUpdateResponseFormGroup() {
		return new FormGroup<V3BulkDeparturesUpdateResponseFormProperties>({
			route_direction_status: new FormControl<V3BulkDeparturesUpdateResponseRoute_direction_status | null | undefined>(undefined),
			route_type: new FormControl<number | null | undefined>(undefined),
			stop_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface V3Departure {

		/** Indicates if the metropolitan train service is at the platform at the time of query; returns false for other modes */
		at_platform?: boolean | null;

		/** Chronological sequence for the departures in a run. Order ascendingly by this field to get chronological order (earliest first) of departures with the same run_ref. NOTE, this field is not always N+1 or N-1 of the previous or following departure. e.g 100, 200, 250, 300 instead of 1, 2, 3, 4 */
		departure_sequence?: number | null;

		/** Direction of travel identifier */
		direction_id?: number | null;

		/** Disruption information identifier(s) */
		disruption_ids?: Array<number>;

		/** Real-time estimate of departure time and date in ISO 8601 UTC format */
		estimated_departure_utc?: Date | null;

		/** Flag indicating special condition for run (e.g. RR Reservations Required, GC Guaranteed Connection, DOO Drop Off Only, PUO Pick Up Only, MO Mondays only, TU Tuesdays only, WE Wednesdays only, TH Thursdays only, FR Fridays only, SS School days only; ignore E flag) */
		flags?: string | null;

		/** Platform number at stop (metropolitan train only; returns null for other modes) */
		platform_number?: string | null;

		/** Route identifier */
		route_id?: number | null;

		/** Numeric trip/service run identifier. Defaults to -1 when run identifier is Alphanumeric */
		run_id?: number | null;

		/** Alphanumeric trip/service run identifier */
		run_ref?: string | null;

		/** Scheduled (i.e. timetabled) departure time and date in ISO 8601 UTC format */
		scheduled_departure_utc?: Date | null;

		/** Stop identifier */
		stop_id?: number | null;
	}
	export interface V3DepartureFormProperties {

		/** Indicates if the metropolitan train service is at the platform at the time of query; returns false for other modes */
		at_platform: FormControl<boolean | null | undefined>,

		/** Chronological sequence for the departures in a run. Order ascendingly by this field to get chronological order (earliest first) of departures with the same run_ref. NOTE, this field is not always N+1 or N-1 of the previous or following departure. e.g 100, 200, 250, 300 instead of 1, 2, 3, 4 */
		departure_sequence: FormControl<number | null | undefined>,

		/** Direction of travel identifier */
		direction_id: FormControl<number | null | undefined>,

		/** Real-time estimate of departure time and date in ISO 8601 UTC format */
		estimated_departure_utc: FormControl<Date | null | undefined>,

		/** Flag indicating special condition for run (e.g. RR Reservations Required, GC Guaranteed Connection, DOO Drop Off Only, PUO Pick Up Only, MO Mondays only, TU Tuesdays only, WE Wednesdays only, TH Thursdays only, FR Fridays only, SS School days only; ignore E flag) */
		flags: FormControl<string | null | undefined>,

		/** Platform number at stop (metropolitan train only; returns null for other modes) */
		platform_number: FormControl<string | null | undefined>,

		/** Route identifier */
		route_id: FormControl<number | null | undefined>,

		/** Numeric trip/service run identifier. Defaults to -1 when run identifier is Alphanumeric */
		run_id: FormControl<number | null | undefined>,

		/** Alphanumeric trip/service run identifier */
		run_ref: FormControl<string | null | undefined>,

		/** Scheduled (i.e. timetabled) departure time and date in ISO 8601 UTC format */
		scheduled_departure_utc: FormControl<Date | null | undefined>,

		/** Stop identifier */
		stop_id: FormControl<number | null | undefined>,
	}
	export function CreateV3DepartureFormGroup() {
		return new FormGroup<V3DepartureFormProperties>({
			at_platform: new FormControl<boolean | null | undefined>(undefined),
			departure_sequence: new FormControl<number | null | undefined>(undefined),
			direction_id: new FormControl<number | null | undefined>(undefined),
			estimated_departure_utc: new FormControl<Date | null | undefined>(undefined),
			flags: new FormControl<string | null | undefined>(undefined),
			platform_number: new FormControl<string | null | undefined>(undefined),
			route_id: new FormControl<number | null | undefined>(undefined),
			run_id: new FormControl<number | null | undefined>(undefined),
			run_ref: new FormControl<string | null | undefined>(undefined),
			scheduled_departure_utc: new FormControl<Date | null | undefined>(undefined),
			stop_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface V3BulkDeparturesRouteDirectionResponse {

		/** Direction of travel identifier */
		direction_id?: number | null;

		/** Name of direction of travel */
		direction_name?: string | null;

		/** Route identifier */
		route_id?: string | null;
	}
	export interface V3BulkDeparturesRouteDirectionResponseFormProperties {

		/** Direction of travel identifier */
		direction_id: FormControl<number | null | undefined>,

		/** Name of direction of travel */
		direction_name: FormControl<string | null | undefined>,

		/** Route identifier */
		route_id: FormControl<string | null | undefined>,
	}
	export function CreateV3BulkDeparturesRouteDirectionResponseFormGroup() {
		return new FormGroup<V3BulkDeparturesRouteDirectionResponseFormProperties>({
			direction_id: new FormControl<number | null | undefined>(undefined),
			direction_name: new FormControl<string | null | undefined>(undefined),
			route_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum V3BulkDeparturesUpdateResponseRoute_direction_status { _0 = 0, _1 = 1 }

	export interface V3Run {

		/** Name of destination of run */
		destination_name?: string | null;

		/** Direction of travel identifier */
		direction_id?: number | null;

		/** The number of remaining skipped/express stations for the run/service from a stop */
		express_stop_count?: number | null;

		/** stop_id of final stop of run */
		final_stop_id?: number | null;

		/** Geopath of the route */
		geopath?: Array<V2Object>;

		/** Route identifier */
		route_id?: number | null;

		/** Transport mode identifier */
		route_type?: number | null;

		/** Numeric trip/service run identifier. Defaults to -1 when run identifier is Alphanumeric */
		run_id?: number | null;

		/** Alphanumeric trip/service run identifier */
		run_ref?: string | null;

		/** Chronological sequence of the trip/service run on the route in direction. Order ascendingly by this field to get chronological order (earliest first) of runs with the same route_id and direction_id. */
		run_sequence?: number | null;

		/** Status of metropolitan train run; returns "scheduled" for other modes */
		status?: string | null;
		vehicle_descriptor?: V3VehicleDescriptor;
		vehicle_position?: V3VehiclePosition;
	}
	export interface V3RunFormProperties {

		/** Name of destination of run */
		destination_name: FormControl<string | null | undefined>,

		/** Direction of travel identifier */
		direction_id: FormControl<number | null | undefined>,

		/** The number of remaining skipped/express stations for the run/service from a stop */
		express_stop_count: FormControl<number | null | undefined>,

		/** stop_id of final stop of run */
		final_stop_id: FormControl<number | null | undefined>,

		/** Route identifier */
		route_id: FormControl<number | null | undefined>,

		/** Transport mode identifier */
		route_type: FormControl<number | null | undefined>,

		/** Numeric trip/service run identifier. Defaults to -1 when run identifier is Alphanumeric */
		run_id: FormControl<number | null | undefined>,

		/** Alphanumeric trip/service run identifier */
		run_ref: FormControl<string | null | undefined>,

		/** Chronological sequence of the trip/service run on the route in direction. Order ascendingly by this field to get chronological order (earliest first) of runs with the same route_id and direction_id. */
		run_sequence: FormControl<number | null | undefined>,

		/** Status of metropolitan train run; returns "scheduled" for other modes */
		status: FormControl<string | null | undefined>,
	}
	export function CreateV3RunFormGroup() {
		return new FormGroup<V3RunFormProperties>({
			destination_name: new FormControl<string | null | undefined>(undefined),
			direction_id: new FormControl<number | null | undefined>(undefined),
			express_stop_count: new FormControl<number | null | undefined>(undefined),
			final_stop_id: new FormControl<number | null | undefined>(undefined),
			route_id: new FormControl<number | null | undefined>(undefined),
			route_type: new FormControl<number | null | undefined>(undefined),
			run_id: new FormControl<number | null | undefined>(undefined),
			run_ref: new FormControl<string | null | undefined>(undefined),
			run_sequence: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V3VehicleDescriptor {

		/** Indicator if vehicle is air conditioned. May be null. Only available for some tram runs. */
		air_conditioned?: boolean | null;

		/**
		 * Vehicle description such as "6 Car Comeng", "6 Car Xtrapolis", "3 Car Comeng", "6 Car Siemens", "3 Car Siemens". May be null/empty.
		 * Only available for some metropolitan train runs.
		 */
		description?: string | null;

		/** Operator identifier of the vehicle such as "26094". May be null/empty. Only available for some tram and bus runs. */
		id?: string | null;

		/** The length of the vehicle. Applies to CIS - Metro Trains */
		length?: string | null;

		/** Indicator if vehicle has a low floor. May be null. Only available for some tram runs. */
		low_floor?: boolean | null;

		/**
		 * Operator name of the vehicle such as "Metro Trains Melbourne", "Yarra Trams", "Ventura Bus Line", "CDC" or "Sita Bus Lines" . May be null/empty.
		 * Only available for train, tram, v/line and some bus runs.
		 */
		operator?: string | null;

		/** Supplier of vehicle descriptor data. */
		supplier?: string | null;
	}
	export interface V3VehicleDescriptorFormProperties {

		/** Indicator if vehicle is air conditioned. May be null. Only available for some tram runs. */
		air_conditioned: FormControl<boolean | null | undefined>,

		/**
		 * Vehicle description such as "6 Car Comeng", "6 Car Xtrapolis", "3 Car Comeng", "6 Car Siemens", "3 Car Siemens". May be null/empty.
		 * Only available for some metropolitan train runs.
		 */
		description: FormControl<string | null | undefined>,

		/** Operator identifier of the vehicle such as "26094". May be null/empty. Only available for some tram and bus runs. */
		id: FormControl<string | null | undefined>,

		/** The length of the vehicle. Applies to CIS - Metro Trains */
		length: FormControl<string | null | undefined>,

		/** Indicator if vehicle has a low floor. May be null. Only available for some tram runs. */
		low_floor: FormControl<boolean | null | undefined>,

		/**
		 * Operator name of the vehicle such as "Metro Trains Melbourne", "Yarra Trams", "Ventura Bus Line", "CDC" or "Sita Bus Lines" . May be null/empty.
		 * Only available for train, tram, v/line and some bus runs.
		 */
		operator: FormControl<string | null | undefined>,

		/** Supplier of vehicle descriptor data. */
		supplier: FormControl<string | null | undefined>,
	}
	export function CreateV3VehicleDescriptorFormGroup() {
		return new FormGroup<V3VehicleDescriptorFormProperties>({
			air_conditioned: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			length: new FormControl<string | null | undefined>(undefined),
			low_floor: new FormControl<boolean | null | undefined>(undefined),
			operator: new FormControl<string | null | undefined>(undefined),
			supplier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V3VehiclePosition {

		/**
		 * Compass bearing of the vehicle when known, clockwise from True North, i.e., 0 is North and 90 is East. May be null.
		 * Only available for some bus runs.
		 */
		bearing?: number | null;

		/** Date and time that the vehicle position data was supplied. */
		datetime_utc?: Date | null;

		/** CIS - Metro Train Vehicle Location Direction */
		direction?: string | null;

		/** CIS - Metro Train Vehicle Location Easting coordinate */
		easting?: number | null;

		/** CIS - Metro Train Vehicle Location data expiry time */
		expiry_time?: Date | null;

		/**
		 * Geographic coordinate of latitude of the vehicle when known. May be null.
		 * Only available for some bus runs.
		 */
		latitude?: number | null;

		/**
		 * Geographic coordinate of longitude of the vehicle when known.
		 * Only available for some bus runs.
		 */
		longitude?: number | null;

		/** CIS - Metro Train Vehicle Location Northing coordinate */
		northing?: number | null;

		/** Supplier of vehicle position data. */
		supplier?: string | null;
	}
	export interface V3VehiclePositionFormProperties {

		/**
		 * Compass bearing of the vehicle when known, clockwise from True North, i.e., 0 is North and 90 is East. May be null.
		 * Only available for some bus runs.
		 */
		bearing: FormControl<number | null | undefined>,

		/** Date and time that the vehicle position data was supplied. */
		datetime_utc: FormControl<Date | null | undefined>,

		/** CIS - Metro Train Vehicle Location Direction */
		direction: FormControl<string | null | undefined>,

		/** CIS - Metro Train Vehicle Location Easting coordinate */
		easting: FormControl<number | null | undefined>,

		/** CIS - Metro Train Vehicle Location data expiry time */
		expiry_time: FormControl<Date | null | undefined>,

		/**
		 * Geographic coordinate of latitude of the vehicle when known. May be null.
		 * Only available for some bus runs.
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * Geographic coordinate of longitude of the vehicle when known.
		 * Only available for some bus runs.
		 */
		longitude: FormControl<number | null | undefined>,

		/** CIS - Metro Train Vehicle Location Northing coordinate */
		northing: FormControl<number | null | undefined>,

		/** Supplier of vehicle position data. */
		supplier: FormControl<string | null | undefined>,
	}
	export function CreateV3VehiclePositionFormGroup() {
		return new FormGroup<V3VehiclePositionFormProperties>({
			bearing: new FormControl<number | null | undefined>(undefined),
			datetime_utc: new FormControl<Date | null | undefined>(undefined),
			direction: new FormControl<string | null | undefined>(undefined),
			easting: new FormControl<number | null | undefined>(undefined),
			expiry_time: new FormControl<Date | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			northing: new FormControl<number | null | undefined>(undefined),
			supplier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V3Status {

		/** API system health status (0=offline, 1=online) */
		health?: V3StatusHealth;

		/** API Version number */
		version?: string | null;
	}
	export interface V3StatusFormProperties {

		/** API system health status (0=offline, 1=online) */
		health: FormControl<V3StatusHealth | null | undefined>,

		/** API Version number */
		version: FormControl<string | null | undefined>,
	}
	export function CreateV3StatusFormGroup() {
		return new FormGroup<V3StatusFormProperties>({
			health: new FormControl<V3StatusHealth | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum V3StatusHealth { _0 = 0, _1 = 1 }

	export interface V3BulkDeparturesStopResponse {

		/** Stop identifier */
		stop_id?: number | null;

		/** Landmark in proximity of stop */
		stop_landmark?: string | null;

		/** Geographic coordinate of latitude at stop */
		stop_latitude?: number | null;

		/** Geographic coordinate of longitude at stop */
		stop_longitude?: number | null;

		/** Name of stop */
		stop_name?: string | null;

		/** suburb of stop */
		stop_suburb?: string | null;
	}
	export interface V3BulkDeparturesStopResponseFormProperties {

		/** Stop identifier */
		stop_id: FormControl<number | null | undefined>,

		/** Landmark in proximity of stop */
		stop_landmark: FormControl<string | null | undefined>,

		/** Geographic coordinate of latitude at stop */
		stop_latitude: FormControl<number | null | undefined>,

		/** Geographic coordinate of longitude at stop */
		stop_longitude: FormControl<number | null | undefined>,

		/** Name of stop */
		stop_name: FormControl<string | null | undefined>,

		/** suburb of stop */
		stop_suburb: FormControl<string | null | undefined>,
	}
	export function CreateV3BulkDeparturesStopResponseFormGroup() {
		return new FormGroup<V3BulkDeparturesStopResponseFormProperties>({
			stop_id: new FormControl<number | null | undefined>(undefined),
			stop_landmark: new FormControl<string | null | undefined>(undefined),
			stop_latitude: new FormControl<number | null | undefined>(undefined),
			stop_longitude: new FormControl<number | null | undefined>(undefined),
			stop_name: new FormControl<string | null | undefined>(undefined),
			stop_suburb: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V3DeparturesBroadParameters {

		/** Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time) */
		date_utc?: Date | null;

		/** Filter by identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id} */
		direction_id?: number | null;

		/**
		 * List of objects to be returned in full (i.e. expanded) - options include: All, Stop, Route, Run, Direction, Disruption, VehiclePosition, VehicleDescriptor or None.
		 * Run must be expanded to receive VehiclePosition and VehicleDescriptor information.
		 */
		expand?: Array<string>;

		/** Indicates that stop_id parameter will accept "GTFS stop_id" data */
		gtfs?: boolean | null;

		/** Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only */
		include_cancelled?: boolean | null;

		/** Indicates if the route geopath should be returned */
		include_geopath?: boolean | null;

		/** Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default = false). Requires max_results &gt; 0. */
		look_backwards?: boolean | null;

		/** Maximum number of results returned */
		max_results?: number | null;

		/** Filter by platform number at stop */
		platform_numbers?: Array<number>;
	}
	export interface V3DeparturesBroadParametersFormProperties {

		/** Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time) */
		date_utc: FormControl<Date | null | undefined>,

		/** Filter by identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id} */
		direction_id: FormControl<number | null | undefined>,

		/** Indicates that stop_id parameter will accept "GTFS stop_id" data */
		gtfs: FormControl<boolean | null | undefined>,

		/** Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only */
		include_cancelled: FormControl<boolean | null | undefined>,

		/** Indicates if the route geopath should be returned */
		include_geopath: FormControl<boolean | null | undefined>,

		/** Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default = false). Requires max_results &gt; 0. */
		look_backwards: FormControl<boolean | null | undefined>,

		/** Maximum number of results returned */
		max_results: FormControl<number | null | undefined>,
	}
	export function CreateV3DeparturesBroadParametersFormGroup() {
		return new FormGroup<V3DeparturesBroadParametersFormProperties>({
			date_utc: new FormControl<Date | null | undefined>(undefined),
			direction_id: new FormControl<number | null | undefined>(undefined),
			gtfs: new FormControl<boolean | null | undefined>(undefined),
			include_cancelled: new FormControl<boolean | null | undefined>(undefined),
			include_geopath: new FormControl<boolean | null | undefined>(undefined),
			look_backwards: new FormControl<boolean | null | undefined>(undefined),
			max_results: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface V3DeparturesResponse {

		/** Timetabled and real-time service departures */
		departures?: Array<V3Departure>;

		/** Directions of travel of route */
		directions?: {[id: string]: V3Direction };

		/** Disruption information applicable to relevant routes or stops */
		disruptions?: {[id: string]: V3Disruption };

		/** Train lines, tram routes, bus routes, regional coach routes, Night Bus routes */
		routes?: {[id: string]: V2Object };

		/** Individual trips/services of a route */
		runs?: {[id: string]: V3Run };
		status?: V3Status;

		/** A train station, tram stop, bus stop, regional coach stop or Night Bus stop */
		stops?: {[id: string]: V3StopModel };
	}
	export interface V3DeparturesResponseFormProperties {

		/** Directions of travel of route */
		directions: FormControl<{[id: string]: V3Direction } | null | undefined>,

		/** Disruption information applicable to relevant routes or stops */
		disruptions: FormControl<{[id: string]: V3Disruption } | null | undefined>,

		/** Train lines, tram routes, bus routes, regional coach routes, Night Bus routes */
		routes: FormControl<{[id: string]: V2Object } | null | undefined>,

		/** Individual trips/services of a route */
		runs: FormControl<{[id: string]: V3Run } | null | undefined>,

		/** A train station, tram stop, bus stop, regional coach stop or Night Bus stop */
		stops: FormControl<{[id: string]: V3StopModel } | null | undefined>,
	}
	export function CreateV3DeparturesResponseFormGroup() {
		return new FormGroup<V3DeparturesResponseFormProperties>({
			directions: new FormControl<{[id: string]: V3Direction } | null | undefined>(undefined),
			disruptions: new FormControl<{[id: string]: V3Disruption } | null | undefined>(undefined),
			routes: new FormControl<{[id: string]: V2Object } | null | undefined>(undefined),
			runs: new FormControl<{[id: string]: V3Run } | null | undefined>(undefined),
			stops: new FormControl<{[id: string]: V3StopModel } | null | undefined>(undefined),
		});

	}

	export interface V3StopModel {

		/** Transport mode identifier */
		route_type?: number | null;

		/** Distance of stop from input location (in metres); returns 0 if no location is input */
		stop_distance?: number | null;

		/** Stop identifier */
		stop_id?: number | null;

		/** Landmark in proximity of stop */
		stop_landmark?: string | null;

		/** Geographic coordinate of latitude at stop */
		stop_latitude?: number | null;

		/** Geographic coordinate of longitude at stop */
		stop_longitude?: number | null;

		/** Name of stop */
		stop_name?: string | null;

		/** Sequence of the stop on the route/run; return 0 when route_id or run_id not specified. Order ascendingly by this field (when non zero) to get physical order (earliest first) of stops on the route_id/run_id. */
		stop_sequence?: number | null;

		/** suburb of stop */
		stop_suburb?: string | null;
	}
	export interface V3StopModelFormProperties {

		/** Transport mode identifier */
		route_type: FormControl<number | null | undefined>,

		/** Distance of stop from input location (in metres); returns 0 if no location is input */
		stop_distance: FormControl<number | null | undefined>,

		/** Stop identifier */
		stop_id: FormControl<number | null | undefined>,

		/** Landmark in proximity of stop */
		stop_landmark: FormControl<string | null | undefined>,

		/** Geographic coordinate of latitude at stop */
		stop_latitude: FormControl<number | null | undefined>,

		/** Geographic coordinate of longitude at stop */
		stop_longitude: FormControl<number | null | undefined>,

		/** Name of stop */
		stop_name: FormControl<string | null | undefined>,

		/** Sequence of the stop on the route/run; return 0 when route_id or run_id not specified. Order ascendingly by this field (when non zero) to get physical order (earliest first) of stops on the route_id/run_id. */
		stop_sequence: FormControl<number | null | undefined>,

		/** suburb of stop */
		stop_suburb: FormControl<string | null | undefined>,
	}
	export function CreateV3StopModelFormGroup() {
		return new FormGroup<V3StopModelFormProperties>({
			route_type: new FormControl<number | null | undefined>(undefined),
			stop_distance: new FormControl<number | null | undefined>(undefined),
			stop_id: new FormControl<number | null | undefined>(undefined),
			stop_landmark: new FormControl<string | null | undefined>(undefined),
			stop_latitude: new FormControl<number | null | undefined>(undefined),
			stop_longitude: new FormControl<number | null | undefined>(undefined),
			stop_name: new FormControl<string | null | undefined>(undefined),
			stop_sequence: new FormControl<number | null | undefined>(undefined),
			stop_suburb: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V3DeparturesSpecificParameters {

		/** Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time) */
		date_utc?: Date | null;

		/** Filter by identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id} */
		direction_id?: number | null;

		/**
		 * List of objects to be returned in full (i.e. expanded) - options include: All, Stop, Route, Run, Direction, Disruption, VehiclePosition, VehicleDescriptor or None.
		 * Run must be expanded to receive VehiclePosition and VehicleDescriptor information.
		 */
		expand?: Array<string>;

		/** Indicates that stop_id parameter will accept "GTFS stop_id" data */
		gtfs?: boolean | null;

		/** Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only */
		include_cancelled?: boolean | null;

		/** Indicates if the route geopath should be returned */
		include_geopath?: boolean | null;

		/** Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default = false). Requires max_results &gt; 0. */
		look_backwards?: boolean | null;

		/** Maximum number of results returned */
		max_results?: number | null;
	}
	export interface V3DeparturesSpecificParametersFormProperties {

		/** Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time) */
		date_utc: FormControl<Date | null | undefined>,

		/** Filter by identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id} */
		direction_id: FormControl<number | null | undefined>,

		/** Indicates that stop_id parameter will accept "GTFS stop_id" data */
		gtfs: FormControl<boolean | null | undefined>,

		/** Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only */
		include_cancelled: FormControl<boolean | null | undefined>,

		/** Indicates if the route geopath should be returned */
		include_geopath: FormControl<boolean | null | undefined>,

		/** Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default = false). Requires max_results &gt; 0. */
		look_backwards: FormControl<boolean | null | undefined>,

		/** Maximum number of results returned */
		max_results: FormControl<number | null | undefined>,
	}
	export function CreateV3DeparturesSpecificParametersFormGroup() {
		return new FormGroup<V3DeparturesSpecificParametersFormProperties>({
			date_utc: new FormControl<Date | null | undefined>(undefined),
			direction_id: new FormControl<number | null | undefined>(undefined),
			gtfs: new FormControl<boolean | null | undefined>(undefined),
			include_cancelled: new FormControl<boolean | null | undefined>(undefined),
			include_geopath: new FormControl<boolean | null | undefined>(undefined),
			look_backwards: new FormControl<boolean | null | undefined>(undefined),
			max_results: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface V3DirectionWithDescription {

		/** Direction of travel identifier */
		direction_id?: number | null;

		/** Name of direction of travel */
		direction_name?: string | null;
		route_direction_description?: string | null;

		/** Route identifier */
		route_id?: number | null;

		/** Transport mode identifier */
		route_type?: number | null;
	}
	export interface V3DirectionWithDescriptionFormProperties {

		/** Direction of travel identifier */
		direction_id: FormControl<number | null | undefined>,

		/** Name of direction of travel */
		direction_name: FormControl<string | null | undefined>,
		route_direction_description: FormControl<string | null | undefined>,

		/** Route identifier */
		route_id: FormControl<number | null | undefined>,

		/** Transport mode identifier */
		route_type: FormControl<number | null | undefined>,
	}
	export function CreateV3DirectionWithDescriptionFormGroup() {
		return new FormGroup<V3DirectionWithDescriptionFormProperties>({
			direction_id: new FormControl<number | null | undefined>(undefined),
			direction_name: new FormControl<string | null | undefined>(undefined),
			route_direction_description: new FormControl<string | null | undefined>(undefined),
			route_id: new FormControl<number | null | undefined>(undefined),
			route_type: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface V3DirectionsResponse {

		/** Directions of travel of route */
		directions?: Array<V3DirectionWithDescription>;
		status?: V3Status;
	}
	export interface V3DirectionsResponseFormProperties {
	}
	export function CreateV3DirectionsResponseFormGroup() {
		return new FormGroup<V3DirectionsResponseFormProperties>({
		});

	}

	export interface V3DisruptionMode {

		/** Disruption mode identifier */
		disruption_mode?: number | null;

		/** Name of disruption mode */
		disruption_mode_name?: string | null;
	}
	export interface V3DisruptionModeFormProperties {

		/** Disruption mode identifier */
		disruption_mode: FormControl<number | null | undefined>,

		/** Name of disruption mode */
		disruption_mode_name: FormControl<string | null | undefined>,
	}
	export function CreateV3DisruptionModeFormGroup() {
		return new FormGroup<V3DisruptionModeFormProperties>({
			disruption_mode: new FormControl<number | null | undefined>(undefined),
			disruption_mode_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V3DisruptionModesResponse {

		/** Transport mode identifiers */
		disruption_modes?: Array<V3DisruptionMode>;
		status?: V3Status;
	}
	export interface V3DisruptionModesResponseFormProperties {
	}
	export function CreateV3DisruptionModesResponseFormGroup() {
		return new FormGroup<V3DisruptionModesResponseFormProperties>({
		});

	}

	export interface V3DisruptionResponse {
		disruption?: V3Disruption;
		status?: V3Status;
	}
	export interface V3DisruptionResponseFormProperties {
	}
	export function CreateV3DisruptionResponseFormGroup() {
		return new FormGroup<V3DisruptionResponseFormProperties>({
		});

	}

	export interface V3Disruptions {

		/** Subset of disruption information applicable to ferry */
		ferry?: Array<V3Disruption>;

		/** Subset of disruption information applicable to multiple route_types */
		general?: Array<V3Disruption>;

		/** Subset of disruption information applicable to interstate train */
		interstate_train?: Array<V3Disruption>;

		/** Subset of disruption information applicable to metropolitan bus */
		metro_bus?: Array<V3Disruption>;

		/** Subset of disruption information applicable to metropolitan train */
		metro_train?: Array<V3Disruption>;

		/** Subset of disruption information applicable to metropolitan tram */
		metro_tram?: Array<V3Disruption>;

		/** Subset of disruption information applicable to night bus */
		night_bus?: Array<V3Disruption>;

		/** Subset of disruption information applicable to regional bus */
		regional_bus?: Array<V3Disruption>;

		/** Subset of disruption information applicable to V/Line coach */
		regional_coach?: Array<V3Disruption>;

		/** Subset of disruption information applicable to V/Line train */
		regional_train?: Array<V3Disruption>;

		/** Subset of disruption information applicable to school bus */
		school_bus?: Array<V3Disruption>;

		/** Subset of disruption information applicable to skybus */
		skybus?: Array<V3Disruption>;

		/** Subset of disruption information applicable to taxi */
		taxi?: Array<V3Disruption>;

		/** Subset of disruption information applicable to telebus services */
		telebus?: Array<V3Disruption>;
	}
	export interface V3DisruptionsFormProperties {
	}
	export function CreateV3DisruptionsFormGroup() {
		return new FormGroup<V3DisruptionsFormProperties>({
		});

	}

	export interface V3DisruptionsResponse {
		disruptions?: V3Disruptions;
		status?: V3Status;
	}
	export interface V3DisruptionsResponseFormProperties {
	}
	export function CreateV3DisruptionsResponseFormGroup() {
		return new FormGroup<V3DisruptionsResponseFormProperties>({
		});

	}

	export interface V3DynamoDbTimetable {

		/** Formated date string of applicable date */
		applicable_local_date?: string | null;

		/**
		 * True if the named table has been created in DynamoDB (i.e. at least one departure record has been loaded),
		 * or false if there are no records for this date and transport type.
		 */
		exists?: boolean | null;

		/** Diva Mapping Version used to load Parser into DynamoDB */
		parser_mapping_version?: string | null;

		/** Parser verison */
		parser_version?: number | null;

		/** Diva Mapping Version used to load PT into DynamoDB */
		pt_mapping_version?: string | null;

		/** PT version */
		pt_version?: number | null;

		/** Name of corresponding table in DynamoDB. */
		table_name?: string | null;

		/** A.k.a. Transport Mode (e.g. Train, Tram, Bus, V/Line, Nightrider) */
		transport_type?: V3DynamoDbTimetableTransport_type;
	}
	export interface V3DynamoDbTimetableFormProperties {

		/** Formated date string of applicable date */
		applicable_local_date: FormControl<string | null | undefined>,

		/**
		 * True if the named table has been created in DynamoDB (i.e. at least one departure record has been loaded),
		 * or false if there are no records for this date and transport type.
		 */
		exists: FormControl<boolean | null | undefined>,

		/** Diva Mapping Version used to load Parser into DynamoDB */
		parser_mapping_version: FormControl<string | null | undefined>,

		/** Parser verison */
		parser_version: FormControl<number | null | undefined>,

		/** Diva Mapping Version used to load PT into DynamoDB */
		pt_mapping_version: FormControl<string | null | undefined>,

		/** PT version */
		pt_version: FormControl<number | null | undefined>,

		/** Name of corresponding table in DynamoDB. */
		table_name: FormControl<string | null | undefined>,

		/** A.k.a. Transport Mode (e.g. Train, Tram, Bus, V/Line, Nightrider) */
		transport_type: FormControl<V3DynamoDbTimetableTransport_type | null | undefined>,
	}
	export function CreateV3DynamoDbTimetableFormGroup() {
		return new FormGroup<V3DynamoDbTimetableFormProperties>({
			applicable_local_date: new FormControl<string | null | undefined>(undefined),
			exists: new FormControl<boolean | null | undefined>(undefined),
			parser_mapping_version: new FormControl<string | null | undefined>(undefined),
			parser_version: new FormControl<number | null | undefined>(undefined),
			pt_mapping_version: new FormControl<string | null | undefined>(undefined),
			pt_version: new FormControl<number | null | undefined>(undefined),
			table_name: new FormControl<string | null | undefined>(undefined),
			transport_type: new FormControl<V3DynamoDbTimetableTransport_type | null | undefined>(undefined),
		});

	}

	export enum V3DynamoDbTimetableTransport_type { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4 }

	export interface V3DynamoDbTimetablesReponse {
		status?: V3Status;
		timetables?: Array<V3DynamoDbTimetable>;
	}
	export interface V3DynamoDbTimetablesReponseFormProperties {
	}
	export function CreateV3DynamoDbTimetablesReponseFormGroup() {
		return new FormGroup<V3DynamoDbTimetablesReponseFormProperties>({
		});

	}


	/** An error response */
	export interface V3ErrorResponse {

		/** Error message */
		message?: string | null;
		status?: V3Status;
	}

	/** An error response */
	export interface V3ErrorResponseFormProperties {

		/** Error message */
		message: FormControl<string | null | undefined>,
	}
	export function CreateV3ErrorResponseFormGroup() {
		return new FormGroup<V3ErrorResponseFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V3FareEstimateResponse {
	}
	export interface V3FareEstimateResponseFormProperties {
	}
	export function CreateV3FareEstimateResponseFormGroup() {
		return new FormGroup<V3FareEstimateResponseFormProperties>({
		});

	}

	export interface V3GenerateDivaMappingResponse {
		mapping_version?: string | null;
		status?: V3Status;
	}
	export interface V3GenerateDivaMappingResponseFormProperties {
		mapping_version: FormControl<string | null | undefined>,
	}
	export function CreateV3GenerateDivaMappingResponseFormGroup() {
		return new FormGroup<V3GenerateDivaMappingResponseFormProperties>({
			mapping_version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V3Outlet {

		/** The business name of the outlet */
		outlet_business?: string | null;

		/** The business hours on Friday */
		outlet_business_hour_fri?: string | null;

		/** The business hours on Monday */
		outlet_business_hour_mon?: string | null;

		/** The business hours on Saturday */
		outlet_business_hour_sat?: string | null;

		/** The business hours on Sunday */
		outlet_business_hour_sun?: string | null;

		/** The business hours on Thursday */
		outlet_business_hour_thur?: string | null;

		/** The business hours on Tuesday */
		outlet_business_hour_tue?: string | null;

		/** The business hours on Wednesday */
		outlet_business_hour_wed?: string | null;

		/** Geographic coordinate of latitude at outlet */
		outlet_latitude?: number | null;

		/** Geographic coordinate of longitude at outlet */
		outlet_longitude?: number | null;

		/** The location name of the outlet */
		outlet_name?: string | null;

		/** Any additional notes for the outlet such as 'Buy pre-loaded myki cards only'. May be null/empty. */
		outlet_notes?: string | null;

		/** The postcode for the outlet */
		outlet_postcode?: number | null;

		/** The SLID / SPID */
		outlet_slid_spid?: string | null;

		/** The city/municipality the outlet is in */
		outlet_suburb?: string | null;
	}
	export interface V3OutletFormProperties {

		/** The business name of the outlet */
		outlet_business: FormControl<string | null | undefined>,

		/** The business hours on Friday */
		outlet_business_hour_fri: FormControl<string | null | undefined>,

		/** The business hours on Monday */
		outlet_business_hour_mon: FormControl<string | null | undefined>,

		/** The business hours on Saturday */
		outlet_business_hour_sat: FormControl<string | null | undefined>,

		/** The business hours on Sunday */
		outlet_business_hour_sun: FormControl<string | null | undefined>,

		/** The business hours on Thursday */
		outlet_business_hour_thur: FormControl<string | null | undefined>,

		/** The business hours on Tuesday */
		outlet_business_hour_tue: FormControl<string | null | undefined>,

		/** The business hours on Wednesday */
		outlet_business_hour_wed: FormControl<string | null | undefined>,

		/** Geographic coordinate of latitude at outlet */
		outlet_latitude: FormControl<number | null | undefined>,

		/** Geographic coordinate of longitude at outlet */
		outlet_longitude: FormControl<number | null | undefined>,

		/** The location name of the outlet */
		outlet_name: FormControl<string | null | undefined>,

		/** Any additional notes for the outlet such as 'Buy pre-loaded myki cards only'. May be null/empty. */
		outlet_notes: FormControl<string | null | undefined>,

		/** The postcode for the outlet */
		outlet_postcode: FormControl<number | null | undefined>,

		/** The SLID / SPID */
		outlet_slid_spid: FormControl<string | null | undefined>,

		/** The city/municipality the outlet is in */
		outlet_suburb: FormControl<string | null | undefined>,
	}
	export function CreateV3OutletFormGroup() {
		return new FormGroup<V3OutletFormProperties>({
			outlet_business: new FormControl<string | null | undefined>(undefined),
			outlet_business_hour_fri: new FormControl<string | null | undefined>(undefined),
			outlet_business_hour_mon: new FormControl<string | null | undefined>(undefined),
			outlet_business_hour_sat: new FormControl<string | null | undefined>(undefined),
			outlet_business_hour_sun: new FormControl<string | null | undefined>(undefined),
			outlet_business_hour_thur: new FormControl<string | null | undefined>(undefined),
			outlet_business_hour_tue: new FormControl<string | null | undefined>(undefined),
			outlet_business_hour_wed: new FormControl<string | null | undefined>(undefined),
			outlet_latitude: new FormControl<number | null | undefined>(undefined),
			outlet_longitude: new FormControl<number | null | undefined>(undefined),
			outlet_name: new FormControl<string | null | undefined>(undefined),
			outlet_notes: new FormControl<string | null | undefined>(undefined),
			outlet_postcode: new FormControl<number | null | undefined>(undefined),
			outlet_slid_spid: new FormControl<string | null | undefined>(undefined),
			outlet_suburb: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V3OutletGeolocation {

		/** The business name of the outlet */
		outlet_business?: string | null;

		/** The business hours on Friday */
		outlet_business_hour_fri?: string | null;

		/** The business hours on Monday */
		outlet_business_hour_mon?: string | null;

		/** The business hours on Saturday */
		outlet_business_hour_sat?: string | null;

		/** The business hours on Sunday */
		outlet_business_hour_sun?: string | null;

		/** The business hours on Thursday */
		outlet_business_hour_thur?: string | null;

		/** The business hours on Tuesday */
		outlet_business_hour_tue?: string | null;

		/** The business hours on Wednesday */
		outlet_business_hour_wed?: string | null;

		/** Distance of outlet from input location (in metres); returns 0 if no location is input */
		outlet_distance?: number | null;

		/** Geographic coordinate of latitude at outlet */
		outlet_latitude?: number | null;

		/** Geographic coordinate of longitude at outlet */
		outlet_longitude?: number | null;

		/** The location name of the outlet */
		outlet_name?: string | null;

		/** Any additional notes for the outlet such as 'Buy pre-loaded myki cards only'. May be null/empty. */
		outlet_notes?: string | null;

		/** The postcode for the outlet */
		outlet_postcode?: number | null;

		/** The SLID / SPID */
		outlet_slid_spid?: string | null;

		/** The city/municipality the outlet is in */
		outlet_suburb?: string | null;
	}
	export interface V3OutletGeolocationFormProperties {

		/** The business name of the outlet */
		outlet_business: FormControl<string | null | undefined>,

		/** The business hours on Friday */
		outlet_business_hour_fri: FormControl<string | null | undefined>,

		/** The business hours on Monday */
		outlet_business_hour_mon: FormControl<string | null | undefined>,

		/** The business hours on Saturday */
		outlet_business_hour_sat: FormControl<string | null | undefined>,

		/** The business hours on Sunday */
		outlet_business_hour_sun: FormControl<string | null | undefined>,

		/** The business hours on Thursday */
		outlet_business_hour_thur: FormControl<string | null | undefined>,

		/** The business hours on Tuesday */
		outlet_business_hour_tue: FormControl<string | null | undefined>,

		/** The business hours on Wednesday */
		outlet_business_hour_wed: FormControl<string | null | undefined>,

		/** Distance of outlet from input location (in metres); returns 0 if no location is input */
		outlet_distance: FormControl<number | null | undefined>,

		/** Geographic coordinate of latitude at outlet */
		outlet_latitude: FormControl<number | null | undefined>,

		/** Geographic coordinate of longitude at outlet */
		outlet_longitude: FormControl<number | null | undefined>,

		/** The location name of the outlet */
		outlet_name: FormControl<string | null | undefined>,

		/** Any additional notes for the outlet such as 'Buy pre-loaded myki cards only'. May be null/empty. */
		outlet_notes: FormControl<string | null | undefined>,

		/** The postcode for the outlet */
		outlet_postcode: FormControl<number | null | undefined>,

		/** The SLID / SPID */
		outlet_slid_spid: FormControl<string | null | undefined>,

		/** The city/municipality the outlet is in */
		outlet_suburb: FormControl<string | null | undefined>,
	}
	export function CreateV3OutletGeolocationFormGroup() {
		return new FormGroup<V3OutletGeolocationFormProperties>({
			outlet_business: new FormControl<string | null | undefined>(undefined),
			outlet_business_hour_fri: new FormControl<string | null | undefined>(undefined),
			outlet_business_hour_mon: new FormControl<string | null | undefined>(undefined),
			outlet_business_hour_sat: new FormControl<string | null | undefined>(undefined),
			outlet_business_hour_sun: new FormControl<string | null | undefined>(undefined),
			outlet_business_hour_thur: new FormControl<string | null | undefined>(undefined),
			outlet_business_hour_tue: new FormControl<string | null | undefined>(undefined),
			outlet_business_hour_wed: new FormControl<string | null | undefined>(undefined),
			outlet_distance: new FormControl<number | null | undefined>(undefined),
			outlet_latitude: new FormControl<number | null | undefined>(undefined),
			outlet_longitude: new FormControl<number | null | undefined>(undefined),
			outlet_name: new FormControl<string | null | undefined>(undefined),
			outlet_notes: new FormControl<string | null | undefined>(undefined),
			outlet_postcode: new FormControl<number | null | undefined>(undefined),
			outlet_slid_spid: new FormControl<string | null | undefined>(undefined),
			outlet_suburb: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V3OutletGeolocationParameters {

		/** Filter by maximum distance (in metres) from location specified via latitude and longitude parameters (default = 300) */
		max_distance?: number | null;

		/** Maximum number of results returned (default = 30) */
		max_results?: number | null;
	}
	export interface V3OutletGeolocationParametersFormProperties {

		/** Filter by maximum distance (in metres) from location specified via latitude and longitude parameters (default = 300) */
		max_distance: FormControl<number | null | undefined>,

		/** Maximum number of results returned (default = 30) */
		max_results: FormControl<number | null | undefined>,
	}
	export function CreateV3OutletGeolocationParametersFormGroup() {
		return new FormGroup<V3OutletGeolocationParametersFormProperties>({
			max_distance: new FormControl<number | null | undefined>(undefined),
			max_results: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface V3OutletGeolocationResponse {

		/** myki ticket outlets */
		outlets?: Array<V3OutletGeolocation>;
		status?: V3Status;
	}
	export interface V3OutletGeolocationResponseFormProperties {
	}
	export function CreateV3OutletGeolocationResponseFormGroup() {
		return new FormGroup<V3OutletGeolocationResponseFormProperties>({
		});

	}

	export interface V3OutletParameters {

		/** Maximum number of results returned (default = 30) */
		max_results?: number | null;
	}
	export interface V3OutletParametersFormProperties {

		/** Maximum number of results returned (default = 30) */
		max_results: FormControl<number | null | undefined>,
	}
	export function CreateV3OutletParametersFormGroup() {
		return new FormGroup<V3OutletParametersFormProperties>({
			max_results: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface V3OutletResponse {

		/** myki ticket outlets */
		outlets?: Array<V3Outlet>;
		status?: V3Status;
	}
	export interface V3OutletResponseFormProperties {
	}
	export function CreateV3OutletResponseFormGroup() {
		return new FormGroup<V3OutletResponseFormProperties>({
		});

	}

	export interface V3PatternDeparture {

		/** Indicates if the metropolitan train service is at the platform at the time of query; returns false for other modes */
		at_platform?: boolean | null;

		/** Chronological sequence for the departures in a run. Order ascendingly by this field to get chronological order (earliest first) of departures with the same run_ref. NOTE, this field is not always N+1 or N-1 of the previous or following departure. e.g 100, 200, 250, 300 instead of 1, 2, 3, 4 */
		departure_sequence?: number | null;

		/** Direction of travel identifier */
		direction_id?: number | null;

		/** Disruption information identifier(s) */
		disruption_ids?: Array<number>;

		/** Real-time estimate of departure time and date in ISO 8601 UTC format */
		estimated_departure_utc?: Date | null;

		/** Flag indicating special condition for run (e.g. RR Reservations Required, GC Guaranteed Connection, DOO Drop Off Only, PUO Pick Up Only, MO Mondays only, TU Tuesdays only, WE Wednesdays only, TH Thursdays only, FR Fridays only, SS School days only; ignore E flag) */
		flags?: string | null;

		/** Platform number at stop (metropolitan train only; returns null for other modes) */
		platform_number?: string | null;

		/** Route identifier */
		route_id?: number | null;

		/** Numeric trip/service run identifier. Defaults to -1 when run identifier is Alphanumeric */
		run_id?: number | null;

		/** Alphanumeric trip/service run identifier */
		run_ref?: string | null;

		/** Scheduled (i.e. timetabled) departure time and date in ISO 8601 UTC format */
		scheduled_departure_utc?: Date | null;

		/** The stops to be skipped following the current departure in order. */
		skipped_stops?: Array<V3StopModel>;

		/** Stop identifier */
		stop_id?: number | null;
	}
	export interface V3PatternDepartureFormProperties {

		/** Indicates if the metropolitan train service is at the platform at the time of query; returns false for other modes */
		at_platform: FormControl<boolean | null | undefined>,

		/** Chronological sequence for the departures in a run. Order ascendingly by this field to get chronological order (earliest first) of departures with the same run_ref. NOTE, this field is not always N+1 or N-1 of the previous or following departure. e.g 100, 200, 250, 300 instead of 1, 2, 3, 4 */
		departure_sequence: FormControl<number | null | undefined>,

		/** Direction of travel identifier */
		direction_id: FormControl<number | null | undefined>,

		/** Real-time estimate of departure time and date in ISO 8601 UTC format */
		estimated_departure_utc: FormControl<Date | null | undefined>,

		/** Flag indicating special condition for run (e.g. RR Reservations Required, GC Guaranteed Connection, DOO Drop Off Only, PUO Pick Up Only, MO Mondays only, TU Tuesdays only, WE Wednesdays only, TH Thursdays only, FR Fridays only, SS School days only; ignore E flag) */
		flags: FormControl<string | null | undefined>,

		/** Platform number at stop (metropolitan train only; returns null for other modes) */
		platform_number: FormControl<string | null | undefined>,

		/** Route identifier */
		route_id: FormControl<number | null | undefined>,

		/** Numeric trip/service run identifier. Defaults to -1 when run identifier is Alphanumeric */
		run_id: FormControl<number | null | undefined>,

		/** Alphanumeric trip/service run identifier */
		run_ref: FormControl<string | null | undefined>,

		/** Scheduled (i.e. timetabled) departure time and date in ISO 8601 UTC format */
		scheduled_departure_utc: FormControl<Date | null | undefined>,

		/** Stop identifier */
		stop_id: FormControl<number | null | undefined>,
	}
	export function CreateV3PatternDepartureFormGroup() {
		return new FormGroup<V3PatternDepartureFormProperties>({
			at_platform: new FormControl<boolean | null | undefined>(undefined),
			departure_sequence: new FormControl<number | null | undefined>(undefined),
			direction_id: new FormControl<number | null | undefined>(undefined),
			estimated_departure_utc: new FormControl<Date | null | undefined>(undefined),
			flags: new FormControl<string | null | undefined>(undefined),
			platform_number: new FormControl<string | null | undefined>(undefined),
			route_id: new FormControl<number | null | undefined>(undefined),
			run_id: new FormControl<number | null | undefined>(undefined),
			run_ref: new FormControl<string | null | undefined>(undefined),
			scheduled_departure_utc: new FormControl<Date | null | undefined>(undefined),
			stop_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface V3ResultOutlet {

		/** The business name of the outlet */
		outlet_business?: string | null;

		/** The business hours on Friday */
		outlet_business_hour_fri?: string | null;

		/** The business hours on Monday */
		outlet_business_hour_mon?: string | null;

		/** The business hours on Saturday */
		outlet_business_hour_sat?: string | null;

		/** The business hours on Sunday */
		outlet_business_hour_sun?: string | null;

		/** The business hours on Thursday */
		outlet_business_hour_thur?: string | null;

		/** The business hours on Tuesday */
		outlet_business_hour_tue?: string | null;

		/** The business hours on Wednesday */
		outlet_business_hour_wed?: string | null;

		/** Distance of outlet from input location (in metres); returns 0 if no location is input */
		outlet_distance?: number | null;

		/** Geographic coordinate of latitude at outlet */
		outlet_latitude?: number | null;

		/** Geographic coordinate of longitude at outlet */
		outlet_longitude?: number | null;

		/** The location name of the outlet */
		outlet_name?: string | null;

		/** Any additional notes for the outlet such as 'Buy pre-loaded myki cards only'. May be null/empty. */
		outlet_notes?: string | null;

		/** The postcode for the outlet */
		outlet_postcode?: number | null;

		/** The SLID / SPID */
		outlet_slid_spid?: string | null;

		/** The city/municipality the outlet is in */
		outlet_suburb?: string | null;
	}
	export interface V3ResultOutletFormProperties {

		/** The business name of the outlet */
		outlet_business: FormControl<string | null | undefined>,

		/** The business hours on Friday */
		outlet_business_hour_fri: FormControl<string | null | undefined>,

		/** The business hours on Monday */
		outlet_business_hour_mon: FormControl<string | null | undefined>,

		/** The business hours on Saturday */
		outlet_business_hour_sat: FormControl<string | null | undefined>,

		/** The business hours on Sunday */
		outlet_business_hour_sun: FormControl<string | null | undefined>,

		/** The business hours on Thursday */
		outlet_business_hour_thur: FormControl<string | null | undefined>,

		/** The business hours on Tuesday */
		outlet_business_hour_tue: FormControl<string | null | undefined>,

		/** The business hours on Wednesday */
		outlet_business_hour_wed: FormControl<string | null | undefined>,

		/** Distance of outlet from input location (in metres); returns 0 if no location is input */
		outlet_distance: FormControl<number | null | undefined>,

		/** Geographic coordinate of latitude at outlet */
		outlet_latitude: FormControl<number | null | undefined>,

		/** Geographic coordinate of longitude at outlet */
		outlet_longitude: FormControl<number | null | undefined>,

		/** The location name of the outlet */
		outlet_name: FormControl<string | null | undefined>,

		/** Any additional notes for the outlet such as 'Buy pre-loaded myki cards only'. May be null/empty. */
		outlet_notes: FormControl<string | null | undefined>,

		/** The postcode for the outlet */
		outlet_postcode: FormControl<number | null | undefined>,

		/** The SLID / SPID */
		outlet_slid_spid: FormControl<string | null | undefined>,

		/** The city/municipality the outlet is in */
		outlet_suburb: FormControl<string | null | undefined>,
	}
	export function CreateV3ResultOutletFormGroup() {
		return new FormGroup<V3ResultOutletFormProperties>({
			outlet_business: new FormControl<string | null | undefined>(undefined),
			outlet_business_hour_fri: new FormControl<string | null | undefined>(undefined),
			outlet_business_hour_mon: new FormControl<string | null | undefined>(undefined),
			outlet_business_hour_sat: new FormControl<string | null | undefined>(undefined),
			outlet_business_hour_sun: new FormControl<string | null | undefined>(undefined),
			outlet_business_hour_thur: new FormControl<string | null | undefined>(undefined),
			outlet_business_hour_tue: new FormControl<string | null | undefined>(undefined),
			outlet_business_hour_wed: new FormControl<string | null | undefined>(undefined),
			outlet_distance: new FormControl<number | null | undefined>(undefined),
			outlet_latitude: new FormControl<number | null | undefined>(undefined),
			outlet_longitude: new FormControl<number | null | undefined>(undefined),
			outlet_name: new FormControl<string | null | undefined>(undefined),
			outlet_notes: new FormControl<string | null | undefined>(undefined),
			outlet_postcode: new FormControl<number | null | undefined>(undefined),
			outlet_slid_spid: new FormControl<string | null | undefined>(undefined),
			outlet_suburb: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V3ResultRoute {

		/** GTFS Identifer of the route */
		route_gtfs_id?: string | null;

		/** Route identifier */
		route_id?: number | null;

		/** Name of route */
		route_name?: string | null;

		/** Route number presented to public (nb. not route_id) */
		route_number?: string | null;
		route_service_status?: V3RouteServiceStatus;

		/** Transport mode identifier */
		route_type?: number | null;
	}
	export interface V3ResultRouteFormProperties {

		/** GTFS Identifer of the route */
		route_gtfs_id: FormControl<string | null | undefined>,

		/** Route identifier */
		route_id: FormControl<number | null | undefined>,

		/** Name of route */
		route_name: FormControl<string | null | undefined>,

		/** Route number presented to public (nb. not route_id) */
		route_number: FormControl<string | null | undefined>,

		/** Transport mode identifier */
		route_type: FormControl<number | null | undefined>,
	}
	export function CreateV3ResultRouteFormGroup() {
		return new FormGroup<V3ResultRouteFormProperties>({
			route_gtfs_id: new FormControl<string | null | undefined>(undefined),
			route_id: new FormControl<number | null | undefined>(undefined),
			route_name: new FormControl<string | null | undefined>(undefined),
			route_number: new FormControl<string | null | undefined>(undefined),
			route_type: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface V3RouteServiceStatus {
		description?: string | null;
		timestamp?: Date | null;
	}
	export interface V3RouteServiceStatusFormProperties {
		description: FormControl<string | null | undefined>,
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateV3RouteServiceStatusFormGroup() {
		return new FormGroup<V3RouteServiceStatusFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface V3ResultStop {

		/** Transport mode identifier */
		route_type?: number | null;

		/** List of routes travelling through the stop */
		routes?: Array<V3ResultRoute>;

		/** Distance of stop from input location (in metres); returns 0 if no location is input */
		stop_distance?: number | null;

		/** Stop identifier */
		stop_id?: number | null;

		/** Landmark in proximity of stop */
		stop_landmark?: string | null;

		/** Geographic coordinate of latitude at stop */
		stop_latitude?: number | null;

		/** Geographic coordinate of longitude at stop */
		stop_longitude?: number | null;

		/** Name of stop */
		stop_name?: string | null;

		/** Sequence of the stop on the route/run; return 0 when route_id or run_id not specified. Order ascendingly by this field (when non zero) to get physical order (earliest first) of stops on the route_id/run_id. */
		stop_sequence?: number | null;

		/** suburb of stop */
		stop_suburb?: string | null;
	}
	export interface V3ResultStopFormProperties {

		/** Transport mode identifier */
		route_type: FormControl<number | null | undefined>,

		/** Distance of stop from input location (in metres); returns 0 if no location is input */
		stop_distance: FormControl<number | null | undefined>,

		/** Stop identifier */
		stop_id: FormControl<number | null | undefined>,

		/** Landmark in proximity of stop */
		stop_landmark: FormControl<string | null | undefined>,

		/** Geographic coordinate of latitude at stop */
		stop_latitude: FormControl<number | null | undefined>,

		/** Geographic coordinate of longitude at stop */
		stop_longitude: FormControl<number | null | undefined>,

		/** Name of stop */
		stop_name: FormControl<string | null | undefined>,

		/** Sequence of the stop on the route/run; return 0 when route_id or run_id not specified. Order ascendingly by this field (when non zero) to get physical order (earliest first) of stops on the route_id/run_id. */
		stop_sequence: FormControl<number | null | undefined>,

		/** suburb of stop */
		stop_suburb: FormControl<string | null | undefined>,
	}
	export function CreateV3ResultStopFormGroup() {
		return new FormGroup<V3ResultStopFormProperties>({
			route_type: new FormControl<number | null | undefined>(undefined),
			stop_distance: new FormControl<number | null | undefined>(undefined),
			stop_id: new FormControl<number | null | undefined>(undefined),
			stop_landmark: new FormControl<string | null | undefined>(undefined),
			stop_latitude: new FormControl<number | null | undefined>(undefined),
			stop_longitude: new FormControl<number | null | undefined>(undefined),
			stop_name: new FormControl<string | null | undefined>(undefined),
			stop_sequence: new FormControl<number | null | undefined>(undefined),
			stop_suburb: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V3RouteDeparturesSpecificParameters {

		/** Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time) */
		date_utc?: Date | null;

		/**
		 * List of objects to be returned in full (i.e. expanded) - options include: All, Stop, Route, Run, Direction, Disruption, VehiclePosition, VehicleDescriptor or None.
		 * Run must be expanded to receive VehiclePosition and VehicleDescriptor information.
		 */
		expand?: Array<string>;

		/** Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only */
		include_cancelled?: boolean | null;

		/** Indicates if the route geopath should be returned */
		include_geopath?: boolean | null;

		/** Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default = false). Requires max_results &gt; 0. */
		look_backwards?: boolean | null;

		/** Maximum number of results returned */
		max_results?: number | null;

		/**
		 * When set to true, all timetable information returned by Chronos will be sourced from the scheduled timetables,
		 * while when set to false (default state), the operational timetables will be used where available.
		 */
		scheduled_timetables?: boolean | null;

		/** DEPRECATED - use `scheduled_timetables` instead */
		train_scheduled_timetables?: boolean | null;
	}
	export interface V3RouteDeparturesSpecificParametersFormProperties {

		/** Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time) */
		date_utc: FormControl<Date | null | undefined>,

		/** Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only */
		include_cancelled: FormControl<boolean | null | undefined>,

		/** Indicates if the route geopath should be returned */
		include_geopath: FormControl<boolean | null | undefined>,

		/** Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default = false). Requires max_results &gt; 0. */
		look_backwards: FormControl<boolean | null | undefined>,

		/** Maximum number of results returned */
		max_results: FormControl<number | null | undefined>,

		/**
		 * When set to true, all timetable information returned by Chronos will be sourced from the scheduled timetables,
		 * while when set to false (default state), the operational timetables will be used where available.
		 */
		scheduled_timetables: FormControl<boolean | null | undefined>,

		/** DEPRECATED - use `scheduled_timetables` instead */
		train_scheduled_timetables: FormControl<boolean | null | undefined>,
	}
	export function CreateV3RouteDeparturesSpecificParametersFormGroup() {
		return new FormGroup<V3RouteDeparturesSpecificParametersFormProperties>({
			date_utc: new FormControl<Date | null | undefined>(undefined),
			include_cancelled: new FormControl<boolean | null | undefined>(undefined),
			include_geopath: new FormControl<boolean | null | undefined>(undefined),
			look_backwards: new FormControl<boolean | null | undefined>(undefined),
			max_results: new FormControl<number | null | undefined>(undefined),
			scheduled_timetables: new FormControl<boolean | null | undefined>(undefined),
			train_scheduled_timetables: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface V3RouteResponse {
		route?: V2Object;
		status?: V3Status;
	}
	export interface V3RouteResponseFormProperties {
	}
	export function CreateV3RouteResponseFormGroup() {
		return new FormGroup<V3RouteResponseFormProperties>({
		});

	}

	export interface V3RouteType {

		/** Transport mode identifier */
		route_type?: number | null;

		/** Name of transport mode */
		route_type_name?: string | null;
	}
	export interface V3RouteTypeFormProperties {

		/** Transport mode identifier */
		route_type: FormControl<number | null | undefined>,

		/** Name of transport mode */
		route_type_name: FormControl<string | null | undefined>,
	}
	export function CreateV3RouteTypeFormGroup() {
		return new FormGroup<V3RouteTypeFormProperties>({
			route_type: new FormControl<number | null | undefined>(undefined),
			route_type_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V3RouteTypesResponse {

		/** Transport mode identifiers */
		route_types?: Array<V3RouteType>;
		status?: V3Status;
	}
	export interface V3RouteTypesResponseFormProperties {
	}
	export function CreateV3RouteTypesResponseFormGroup() {
		return new FormGroup<V3RouteTypesResponseFormProperties>({
		});

	}

	export interface V3RunResponse {
		run?: V3Run;
		status?: V3Status;
	}
	export interface V3RunResponseFormProperties {
	}
	export function CreateV3RunResponseFormGroup() {
		return new FormGroup<V3RunResponseFormProperties>({
		});

	}

	export interface V3RunsResponse {

		/** Individual trips/services of a route */
		runs?: Array<V3Run>;
		status?: V3Status;
	}
	export interface V3RunsResponseFormProperties {
	}
	export function CreateV3RunsResponseFormGroup() {
		return new FormGroup<V3RunsResponseFormProperties>({
		});

	}

	export interface V3SearchParameters {

		/** Placeholder for future development; currently unavailable */
		include_addresses?: boolean | null;

		/** Indicates if outlets will be returned in response (default = true) */
		include_outlets?: boolean | null;

		/** Filter by geographic coordinate of latitude */
		latitude?: number | null;

		/** Filter by geographic coordinate of longitude */
		longitude?: number | null;

		/** Indicates whether to find routes by suburbs in the search term (default = true) */
		match_route_by_suburb?: boolean | null;

		/** Indicates whether to search for stops according to a metlink stop ID (default = false) */
		match_stop_by_gtfs_stop_id?: boolean | null;

		/** Indicates whether to find stops by suburbs in the search term (default = true) */
		match_stop_by_suburb?: boolean | null;

		/** Filter by maximum distance (in metres) from location specified via latitude and longitude parameters */
		max_distance?: number | null;

		/** Filter by route_type; values returned via RouteTypes API (note: stops and routes are ordered by route_types specified) */
		route_types?: Array<V3StopDepartureRequestRoute_type>;
	}
	export interface V3SearchParametersFormProperties {

		/** Placeholder for future development; currently unavailable */
		include_addresses: FormControl<boolean | null | undefined>,

		/** Indicates if outlets will be returned in response (default = true) */
		include_outlets: FormControl<boolean | null | undefined>,

		/** Filter by geographic coordinate of latitude */
		latitude: FormControl<number | null | undefined>,

		/** Filter by geographic coordinate of longitude */
		longitude: FormControl<number | null | undefined>,

		/** Indicates whether to find routes by suburbs in the search term (default = true) */
		match_route_by_suburb: FormControl<boolean | null | undefined>,

		/** Indicates whether to search for stops according to a metlink stop ID (default = false) */
		match_stop_by_gtfs_stop_id: FormControl<boolean | null | undefined>,

		/** Indicates whether to find stops by suburbs in the search term (default = true) */
		match_stop_by_suburb: FormControl<boolean | null | undefined>,

		/** Filter by maximum distance (in metres) from location specified via latitude and longitude parameters */
		max_distance: FormControl<number | null | undefined>,
	}
	export function CreateV3SearchParametersFormGroup() {
		return new FormGroup<V3SearchParametersFormProperties>({
			include_addresses: new FormControl<boolean | null | undefined>(undefined),
			include_outlets: new FormControl<boolean | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			match_route_by_suburb: new FormControl<boolean | null | undefined>(undefined),
			match_stop_by_gtfs_stop_id: new FormControl<boolean | null | undefined>(undefined),
			match_stop_by_suburb: new FormControl<boolean | null | undefined>(undefined),
			max_distance: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface V3SearchResult {

		/** myki ticket outlets */
		outlets?: Array<V3ResultOutlet>;

		/** Train lines, tram routes, bus routes, regional coach routes, Night Bus routes */
		routes?: Array<V3ResultRoute>;
		status?: V3Status;

		/** Train stations, tram stops, bus stops, regional coach stops or Night Bus stops */
		stops?: Array<V3ResultStop>;
	}
	export interface V3SearchResultFormProperties {
	}
	export function CreateV3SearchResultFormGroup() {
		return new FormGroup<V3SearchResultFormProperties>({
		});

	}

	export interface V3SiriDirectionRefsDictionary {
		direction_refs?: {[id: string]: V3SiriStopsRefsDictionary };
	}
	export interface V3SiriDirectionRefsDictionaryFormProperties {
		direction_refs: FormControl<{[id: string]: V3SiriStopsRefsDictionary } | null | undefined>,
	}
	export function CreateV3SiriDirectionRefsDictionaryFormGroup() {
		return new FormGroup<V3SiriDirectionRefsDictionaryFormProperties>({
			direction_refs: new FormControl<{[id: string]: V3SiriStopsRefsDictionary } | null | undefined>(undefined),
		});

	}

	export interface V3SiriStopsRefsDictionary {
		stop_point_refs?: {[id: string]: V3SiriReferenceDataDetail };
		unmatched_stop_point_refs?: {[id: string]: string };
	}
	export interface V3SiriStopsRefsDictionaryFormProperties {
		stop_point_refs: FormControl<{[id: string]: V3SiriReferenceDataDetail } | null | undefined>,
		unmatched_stop_point_refs: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateV3SiriStopsRefsDictionaryFormGroup() {
		return new FormGroup<V3SiriStopsRefsDictionaryFormProperties>({
			stop_point_refs: new FormControl<{[id: string]: V3SiriReferenceDataDetail } | null | undefined>(undefined),
			unmatched_stop_point_refs: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface V3SiriReferenceDataDetail {
		direction_id?: number | null;
		route_id?: number | null;

		/** Route number */
		route_number_short?: string | null;
		route_type?: number | null;

		/** Authority (Upstream SIRI provider) of a route and direction */
		tracking_supplier_id?: number | null;
	}
	export interface V3SiriReferenceDataDetailFormProperties {
		direction_id: FormControl<number | null | undefined>,
		route_id: FormControl<number | null | undefined>,

		/** Route number */
		route_number_short: FormControl<string | null | undefined>,
		route_type: FormControl<number | null | undefined>,

		/** Authority (Upstream SIRI provider) of a route and direction */
		tracking_supplier_id: FormControl<number | null | undefined>,
	}
	export function CreateV3SiriReferenceDataDetailFormGroup() {
		return new FormGroup<V3SiriReferenceDataDetailFormProperties>({
			direction_id: new FormControl<number | null | undefined>(undefined),
			route_id: new FormControl<number | null | undefined>(undefined),
			route_number_short: new FormControl<string | null | undefined>(undefined),
			route_type: new FormControl<number | null | undefined>(undefined),
			tracking_supplier_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface V3SiriDownstreamSubscription {
		consumer_address?: string | null;
		initial_termination_time?: Date | null;
		message_type?: V3SiriDownstreamSubscriptionMessage_type;
		preview_interval?: string | null;
		siri_format?: V3SiriDownstreamSubscriptionSiri_format;
		siri_version?: string | null;
		subscriber_ref?: string | null;
		subscription_ref?: string | null;
		topics?: Array<V3SiriDownstreamSubscriptionTopic>;
		validity_period_end?: Date | null;
		validity_period_start?: Date | null;
	}
	export interface V3SiriDownstreamSubscriptionFormProperties {
		consumer_address: FormControl<string | null | undefined>,
		initial_termination_time: FormControl<Date | null | undefined>,
		message_type: FormControl<V3SiriDownstreamSubscriptionMessage_type | null | undefined>,
		preview_interval: FormControl<string | null | undefined>,
		siri_format: FormControl<V3SiriDownstreamSubscriptionSiri_format | null | undefined>,
		siri_version: FormControl<string | null | undefined>,
		subscriber_ref: FormControl<string | null | undefined>,
		subscription_ref: FormControl<string | null | undefined>,
		validity_period_end: FormControl<Date | null | undefined>,
		validity_period_start: FormControl<Date | null | undefined>,
	}
	export function CreateV3SiriDownstreamSubscriptionFormGroup() {
		return new FormGroup<V3SiriDownstreamSubscriptionFormProperties>({
			consumer_address: new FormControl<string | null | undefined>(undefined),
			initial_termination_time: new FormControl<Date | null | undefined>(undefined),
			message_type: new FormControl<V3SiriDownstreamSubscriptionMessage_type | null | undefined>(undefined),
			preview_interval: new FormControl<string | null | undefined>(undefined),
			siri_format: new FormControl<V3SiriDownstreamSubscriptionSiri_format | null | undefined>(undefined),
			siri_version: new FormControl<string | null | undefined>(undefined, [Validators.pattern('1.3|2.0')]),
			subscriber_ref: new FormControl<string | null | undefined>(undefined),
			subscription_ref: new FormControl<string | null | undefined>(undefined),
			validity_period_end: new FormControl<Date | null | undefined>(undefined),
			validity_period_start: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum V3SiriDownstreamSubscriptionMessage_type { _0 = 0, _1 = 1 }

	export enum V3SiriDownstreamSubscriptionSiri_format { _0 = 0, _1 = 1 }

	export interface V3SiriDownstreamSubscriptionTopic {
		direction_ref?: V3SiriDownstreamSubscriptionTopicDirection_ref;
		line_ref?: string | null;
		route_type?: V3SiriDownstreamSubscriptionTopicRoute_type;
	}
	export interface V3SiriDownstreamSubscriptionTopicFormProperties {
		direction_ref: FormControl<V3SiriDownstreamSubscriptionTopicDirection_ref | null | undefined>,
		line_ref: FormControl<string | null | undefined>,
		route_type: FormControl<V3SiriDownstreamSubscriptionTopicRoute_type | null | undefined>,
	}
	export function CreateV3SiriDownstreamSubscriptionTopicFormGroup() {
		return new FormGroup<V3SiriDownstreamSubscriptionTopicFormProperties>({
			direction_ref: new FormControl<V3SiriDownstreamSubscriptionTopicDirection_ref | null | undefined>(undefined),
			line_ref: new FormControl<string | null | undefined>(undefined),
			route_type: new FormControl<V3SiriDownstreamSubscriptionTopicRoute_type | null | undefined>(undefined),
		});

	}

	export enum V3SiriDownstreamSubscriptionTopicDirection_ref { _1 = 0, _2 = 1, _5 = 2, _10 = 3, _16 = 4, _32 = 5, _65 = 6, _130 = 7 }

	export enum V3SiriDownstreamSubscriptionTopicRoute_type { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4 }

	export interface V3SiriDownstreamSubscriptionDeleteRequest {

		/**
		 * Siri Subscriber Ref
		 * Required
		 */
		subscriber_ref: string;

		/**
		 * Siri Subscription Reference(s) - Unique to a Subscriber Ref.
		 * If `null`, then all subscriptions will be terminated for the referenced Subscriber.
		 */
		subscription_ref?: Array<string>;
	}
	export interface V3SiriDownstreamSubscriptionDeleteRequestFormProperties {

		/**
		 * Siri Subscriber Ref
		 * Required
		 */
		subscriber_ref: FormControl<string | null | undefined>,
	}
	export function CreateV3SiriDownstreamSubscriptionDeleteRequestFormGroup() {
		return new FormGroup<V3SiriDownstreamSubscriptionDeleteRequestFormProperties>({
			subscriber_ref: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface V3SiriDownstreamSubscriptionResponse {

		/** The Data Horizon of Chronos */
		valid_until?: Date | null;
	}
	export interface V3SiriDownstreamSubscriptionResponseFormProperties {

		/** The Data Horizon of Chronos */
		valid_until: FormControl<Date | null | undefined>,
	}
	export function CreateV3SiriDownstreamSubscriptionResponseFormGroup() {
		return new FormGroup<V3SiriDownstreamSubscriptionResponseFormProperties>({
			valid_until: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface V3SiriEstimatedTimetableSubscriptionRequest {

		/**
		 * Siri Consumer Address - Baseline and Updates will be sent to this address
		 * Required
		 */
		consumer_address: string;

		/**
		 * Siri Initial Termination Time - Expiry of the subscription
		 * Required
		 */
		initial_termination_time: Date;

		/**
		 * Siri Preview Interval
		 * Required
		 */
		preview_interval: string;

		/**
		 * Siri Message Format 'xml' or 'json'
		 * Required
		 */
		siri_format: V3SiriEstimatedTimetableSubscriptionRequestSiri_format;

		/**
		 * Siri Message Version '1.3' or '2.0'
		 * Required
		 */
		siri_version: string;

		/**
		 * Siri Subscriber Ref
		 * Required
		 */
		subscriber_ref: string;

		/**
		 * Siri Subscription Ref - Unique to a Subscriber Ref
		 * Required
		 */
		subscription_ref: string;

		/** Required */
		topics: Array<V3SiriSubscriptionTopic>;
	}
	export interface V3SiriEstimatedTimetableSubscriptionRequestFormProperties {

		/**
		 * Siri Consumer Address - Baseline and Updates will be sent to this address
		 * Required
		 */
		consumer_address: FormControl<string | null | undefined>,

		/**
		 * Siri Initial Termination Time - Expiry of the subscription
		 * Required
		 */
		initial_termination_time: FormControl<Date | null | undefined>,

		/**
		 * Siri Preview Interval
		 * Required
		 */
		preview_interval: FormControl<string | null | undefined>,

		/**
		 * Siri Message Format 'xml' or 'json'
		 * Required
		 */
		siri_format: FormControl<V3SiriEstimatedTimetableSubscriptionRequestSiri_format | null | undefined>,

		/**
		 * Siri Message Version '1.3' or '2.0'
		 * Required
		 */
		siri_version: FormControl<string | null | undefined>,

		/**
		 * Siri Subscriber Ref
		 * Required
		 */
		subscriber_ref: FormControl<string | null | undefined>,

		/**
		 * Siri Subscription Ref - Unique to a Subscriber Ref
		 * Required
		 */
		subscription_ref: FormControl<string | null | undefined>,
	}
	export function CreateV3SiriEstimatedTimetableSubscriptionRequestFormGroup() {
		return new FormGroup<V3SiriEstimatedTimetableSubscriptionRequestFormProperties>({
			consumer_address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			initial_termination_time: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			preview_interval: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			siri_format: new FormControl<V3SiriEstimatedTimetableSubscriptionRequestSiri_format | null | undefined>(undefined, [Validators.required]),
			siri_version: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('1.3|2.0')]),
			subscriber_ref: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subscription_ref: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum V3SiriEstimatedTimetableSubscriptionRequestSiri_format { _0 = 0, _1 = 1 }

	export interface V3SiriSubscriptionTopic {

		/** Siri DirectionRef  (in, out, up, down, clockwise, counterclockwise, Inbound, Outbound) */
		direction_ref?: V3SiriSubscriptionTopicDirection_ref;

		/**
		 * Siri LineRef
		 * Required
		 */
		line_ref: string;

		/**
		 * Route Type eg. 0 (Train) 1 (Tram) 2 (Bus) 3 (Vline) 4 (NightRider)
		 * Required
		 */
		route_type: V3SiriSubscriptionTopicRoute_type;
	}
	export interface V3SiriSubscriptionTopicFormProperties {

		/** Siri DirectionRef  (in, out, up, down, clockwise, counterclockwise, Inbound, Outbound) */
		direction_ref: FormControl<V3SiriSubscriptionTopicDirection_ref | null | undefined>,

		/**
		 * Siri LineRef
		 * Required
		 */
		line_ref: FormControl<string | null | undefined>,

		/**
		 * Route Type eg. 0 (Train) 1 (Tram) 2 (Bus) 3 (Vline) 4 (NightRider)
		 * Required
		 */
		route_type: FormControl<V3SiriSubscriptionTopicRoute_type | null | undefined>,
	}
	export function CreateV3SiriSubscriptionTopicFormGroup() {
		return new FormGroup<V3SiriSubscriptionTopicFormProperties>({
			direction_ref: new FormControl<V3SiriSubscriptionTopicDirection_ref | null | undefined>(undefined),
			line_ref: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			route_type: new FormControl<V3SiriSubscriptionTopicRoute_type | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum V3SiriSubscriptionTopicDirection_ref { _1 = 0, _2 = 1, _5 = 2, _10 = 3, _16 = 4, _32 = 5, _65 = 6, _130 = 7 }

	export enum V3SiriSubscriptionTopicRoute_type { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4 }

	export interface V3SiriLineRef {

		/** Siri DirectionRef  (in, out, up, down, clockwise, counterclockwise, Inbound, Outbound) */
		direction_ref?: V3SiriLineRefDirection_ref;

		/**
		 * Siri LineRef
		 * Required
		 */
		line_ref: string;
	}
	export interface V3SiriLineRefFormProperties {

		/** Siri DirectionRef  (in, out, up, down, clockwise, counterclockwise, Inbound, Outbound) */
		direction_ref: FormControl<V3SiriLineRefDirection_ref | null | undefined>,

		/**
		 * Siri LineRef
		 * Required
		 */
		line_ref: FormControl<string | null | undefined>,
	}
	export function CreateV3SiriLineRefFormGroup() {
		return new FormGroup<V3SiriLineRefFormProperties>({
			direction_ref: new FormControl<V3SiriLineRefDirection_ref | null | undefined>(undefined),
			line_ref: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum V3SiriLineRefDirection_ref { _1 = 0, _2 = 1, _5 = 2, _10 = 3, _16 = 4, _32 = 5, _65 = 6, _130 = 7 }

	export interface V3SiriLineRefDirectionRefStopPointRef {

		/**
		 * Siri DirectionRef  (in, out, up, down, clockwise, counterclockwise, Inbound, Outbound)
		 * Required
		 */
		direction_ref: V3SiriLineRefDirectionRefStopPointRefDirection_ref;

		/**
		 * Siri LineRef
		 * Required
		 */
		line_ref: string;

		/**
		 * Siri StopPointRef
		 * Required
		 */
		stop_point_ref: number;
	}
	export interface V3SiriLineRefDirectionRefStopPointRefFormProperties {

		/**
		 * Siri DirectionRef  (in, out, up, down, clockwise, counterclockwise, Inbound, Outbound)
		 * Required
		 */
		direction_ref: FormControl<V3SiriLineRefDirectionRefStopPointRefDirection_ref | null | undefined>,

		/**
		 * Siri LineRef
		 * Required
		 */
		line_ref: FormControl<string | null | undefined>,

		/**
		 * Siri StopPointRef
		 * Required
		 */
		stop_point_ref: FormControl<number | null | undefined>,
	}
	export function CreateV3SiriLineRefDirectionRefStopPointRefFormGroup() {
		return new FormGroup<V3SiriLineRefDirectionRefStopPointRefFormProperties>({
			direction_ref: new FormControl<V3SiriLineRefDirectionRefStopPointRefDirection_ref | null | undefined>(undefined, [Validators.required]),
			line_ref: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stop_point_ref: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum V3SiriLineRefDirectionRefStopPointRefDirection_ref { _1 = 0, _2 = 1, _5 = 2, _10 = 3, _16 = 4, _32 = 5, _65 = 6, _130 = 7 }

	export interface V3SiriLineRefDirectionRefsDictionary {
		direction_refs?: {[id: string]: Array<V3SiriReferenceDataDetail> };
		unmatched_direction_refs?: {[id: string]: string };
	}
	export interface V3SiriLineRefDirectionRefsDictionaryFormProperties {
		direction_refs: FormControl<{[id: string]: Array<V3SiriReferenceDataDetail> } | null | undefined>,
		unmatched_direction_refs: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateV3SiriLineRefDirectionRefsDictionaryFormGroup() {
		return new FormGroup<V3SiriLineRefDirectionRefsDictionaryFormProperties>({
			direction_refs: new FormControl<{[id: string]: Array<V3SiriReferenceDataDetail> } | null | undefined>(undefined),
			unmatched_direction_refs: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface V3SiriLineRefMappingsResponse {
		line_refs?: {[id: string]: V3SiriLineRefDirectionRefsDictionary };
		mapping_version?: string | null;
		status?: V3Status;
	}
	export interface V3SiriLineRefMappingsResponseFormProperties {
		line_refs: FormControl<{[id: string]: V3SiriLineRefDirectionRefsDictionary } | null | undefined>,
		mapping_version: FormControl<string | null | undefined>,
	}
	export function CreateV3SiriLineRefMappingsResponseFormGroup() {
		return new FormGroup<V3SiriLineRefMappingsResponseFormProperties>({
			line_refs: new FormControl<{[id: string]: V3SiriLineRefDirectionRefsDictionary } | null | undefined>(undefined),
			mapping_version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V3SiriLineRefsRequest {
		line_refs?: Array<V3SiriLineRef>;

		/**
		 * DIVA mapping version generated by Chronos during a Parser or RealtimeBusConfig load
		 * Required
		 */
		mapping_version: string;
	}
	export interface V3SiriLineRefsRequestFormProperties {

		/**
		 * DIVA mapping version generated by Chronos during a Parser or RealtimeBusConfig load
		 * Required
		 */
		mapping_version: FormControl<string | null | undefined>,
	}
	export function CreateV3SiriLineRefsRequestFormGroup() {
		return new FormGroup<V3SiriLineRefsRequestFormProperties>({
			mapping_version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface V3SiriProductionTimetableSubscriptionRequest {

		/**
		 * Siri Consumer Address - Baseline and Updates will be sent to this address
		 * Required
		 */
		consumer_address: string;

		/**
		 * Siri End Time of the Validity Period
		 * Required
		 */
		end_time: Date;

		/**
		 * Siri Initial Termination Time - Expiry of the subscription
		 * Required
		 */
		initial_termination_time: Date;

		/**
		 * Siri Message Format 'xml' or 'json'
		 * Required
		 */
		siri_format: V3SiriProductionTimetableSubscriptionRequestSiri_format;

		/**
		 * Siri Message Version '1.3' or '2.0'
		 * Required
		 */
		siri_version: string;

		/**
		 * Siri Start Time of the Validity Period
		 * Required
		 */
		start_time: Date;

		/**
		 * Siri Subscriber Ref
		 * Required
		 */
		subscriber_ref: string;

		/**
		 * Siri Subscription Ref - Unique to a Subscriber Ref
		 * Required
		 */
		subscription_ref: string;

		/** Required */
		topics: Array<V3SiriSubscriptionTopic>;
	}
	export interface V3SiriProductionTimetableSubscriptionRequestFormProperties {

		/**
		 * Siri Consumer Address - Baseline and Updates will be sent to this address
		 * Required
		 */
		consumer_address: FormControl<string | null | undefined>,

		/**
		 * Siri End Time of the Validity Period
		 * Required
		 */
		end_time: FormControl<Date | null | undefined>,

		/**
		 * Siri Initial Termination Time - Expiry of the subscription
		 * Required
		 */
		initial_termination_time: FormControl<Date | null | undefined>,

		/**
		 * Siri Message Format 'xml' or 'json'
		 * Required
		 */
		siri_format: FormControl<V3SiriProductionTimetableSubscriptionRequestSiri_format | null | undefined>,

		/**
		 * Siri Message Version '1.3' or '2.0'
		 * Required
		 */
		siri_version: FormControl<string | null | undefined>,

		/**
		 * Siri Start Time of the Validity Period
		 * Required
		 */
		start_time: FormControl<Date | null | undefined>,

		/**
		 * Siri Subscriber Ref
		 * Required
		 */
		subscriber_ref: FormControl<string | null | undefined>,

		/**
		 * Siri Subscription Ref - Unique to a Subscriber Ref
		 * Required
		 */
		subscription_ref: FormControl<string | null | undefined>,
	}
	export function CreateV3SiriProductionTimetableSubscriptionRequestFormGroup() {
		return new FormGroup<V3SiriProductionTimetableSubscriptionRequestFormProperties>({
			consumer_address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			end_time: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			initial_termination_time: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			siri_format: new FormControl<V3SiriProductionTimetableSubscriptionRequestSiri_format | null | undefined>(undefined, [Validators.required]),
			siri_version: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('1.3|2.0')]),
			start_time: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			subscriber_ref: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subscription_ref: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum V3SiriProductionTimetableSubscriptionRequestSiri_format { _0 = 0, _1 = 1 }

	export interface V3SiriReferenceDataMappingsResponse {

		/** SIRI LineRef */
		line_refs?: {[id: string]: V3SiriDirectionRefsDictionary };
		mapping_version?: string | null;
		status?: V3Status;
		stop_point_refs?: {[id: string]: V3StopPoint };
	}
	export interface V3SiriReferenceDataMappingsResponseFormProperties {

		/** SIRI LineRef */
		line_refs: FormControl<{[id: string]: V3SiriDirectionRefsDictionary } | null | undefined>,
		mapping_version: FormControl<string | null | undefined>,
		stop_point_refs: FormControl<{[id: string]: V3StopPoint } | null | undefined>,
	}
	export function CreateV3SiriReferenceDataMappingsResponseFormGroup() {
		return new FormGroup<V3SiriReferenceDataMappingsResponseFormProperties>({
			line_refs: new FormControl<{[id: string]: V3SiriDirectionRefsDictionary } | null | undefined>(undefined),
			mapping_version: new FormControl<string | null | undefined>(undefined),
			stop_point_refs: new FormControl<{[id: string]: V3StopPoint } | null | undefined>(undefined),
		});

	}

	export interface V3StopPoint {
		stop_id?: number | null;
	}
	export interface V3StopPointFormProperties {
		stop_id: FormControl<number | null | undefined>,
	}
	export function CreateV3StopPointFormGroup() {
		return new FormGroup<V3StopPointFormProperties>({
			stop_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface V3SiriReferenceDataRequest {

		/** Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time) */
		date_utc?: Date | null;

		/** Required */
		line_refs: Array<V3SiriLineRefDirectionRefStopPointRef>;

		/**
		 * DIVA mapping version generated by Chronos during a Parser or RealtimeBusConfig load
		 * Required
		 */
		mapping_version: string;

		/** Siri StopPointRef */
		stop_point_refs?: Array<number>;
	}
	export interface V3SiriReferenceDataRequestFormProperties {

		/** Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time) */
		date_utc: FormControl<Date | null | undefined>,

		/**
		 * DIVA mapping version generated by Chronos during a Parser or RealtimeBusConfig load
		 * Required
		 */
		mapping_version: FormControl<string | null | undefined>,
	}
	export function CreateV3SiriReferenceDataRequestFormGroup() {
		return new FormGroup<V3SiriReferenceDataRequestFormProperties>({
			date_utc: new FormControl<Date | null | undefined>(undefined),
			mapping_version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface V3StopAccessibility {

		/** Indicates if there is at least one audio customer information at the stop/platform */
		audio_customer_information?: boolean | null;

		/** Indicates if there is at least one accessible escalator at the stop/platform that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992) */
		escalator?: boolean | null;

		/** Indicates if there is a hearing loop facility at the stop/platform */
		hearing_loop?: boolean | null;

		/** Indicates if there is an elevator at the stop/platform */
		lift?: boolean | null;

		/** Indicates if there is lighting at the stop */
		lighting?: boolean | null;

		/** Indicates the platform number for xivic information (Platform 0 indicates general stop facilities) */
		platform_number?: number | null;

		/** Indicates if there are stairs available in the stop */
		stairs?: boolean | null;

		/** Indicates if the stop is accessible */
		stop_accessible?: boolean | null;

		/** Indicates if there are tactile tiles (also known as tactile ground surface indicators, or TGSIs) at the stop */
		tactile_ground_surface_indicator?: boolean | null;

		/** Indicates if there is a general waiting area at the stop */
		waiting_room?: boolean | null;
		wheelchair?: V3StopAccessibilityWheelchair;
	}
	export interface V3StopAccessibilityFormProperties {

		/** Indicates if there is at least one audio customer information at the stop/platform */
		audio_customer_information: FormControl<boolean | null | undefined>,

		/** Indicates if there is at least one accessible escalator at the stop/platform that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992) */
		escalator: FormControl<boolean | null | undefined>,

		/** Indicates if there is a hearing loop facility at the stop/platform */
		hearing_loop: FormControl<boolean | null | undefined>,

		/** Indicates if there is an elevator at the stop/platform */
		lift: FormControl<boolean | null | undefined>,

		/** Indicates if there is lighting at the stop */
		lighting: FormControl<boolean | null | undefined>,

		/** Indicates the platform number for xivic information (Platform 0 indicates general stop facilities) */
		platform_number: FormControl<number | null | undefined>,

		/** Indicates if there are stairs available in the stop */
		stairs: FormControl<boolean | null | undefined>,

		/** Indicates if the stop is accessible */
		stop_accessible: FormControl<boolean | null | undefined>,

		/** Indicates if there are tactile tiles (also known as tactile ground surface indicators, or TGSIs) at the stop */
		tactile_ground_surface_indicator: FormControl<boolean | null | undefined>,

		/** Indicates if there is a general waiting area at the stop */
		waiting_room: FormControl<boolean | null | undefined>,
	}
	export function CreateV3StopAccessibilityFormGroup() {
		return new FormGroup<V3StopAccessibilityFormProperties>({
			audio_customer_information: new FormControl<boolean | null | undefined>(undefined),
			escalator: new FormControl<boolean | null | undefined>(undefined),
			hearing_loop: new FormControl<boolean | null | undefined>(undefined),
			lift: new FormControl<boolean | null | undefined>(undefined),
			lighting: new FormControl<boolean | null | undefined>(undefined),
			platform_number: new FormControl<number | null | undefined>(undefined),
			stairs: new FormControl<boolean | null | undefined>(undefined),
			stop_accessible: new FormControl<boolean | null | undefined>(undefined),
			tactile_ground_surface_indicator: new FormControl<boolean | null | undefined>(undefined),
			waiting_room: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface V3StopAccessibilityWheelchair {
		accessible_ramp?: boolean | null;

		/** Indicates if there is at least one low ticket counter at the stop that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992) */
		low_ticket_counter?: boolean | null;

		/** Indicates if there is a space for mobility device to board on or off a transport mode */
		manouvering?: boolean | null;

		/** Indicates if there is at least one accessible parking spot at the stop that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992) */
		parking?: boolean | null;

		/** Indicates if there is a raised platform to board a train */
		raised_platform?: boolean | null;

		/** Indicates if there is shelter near the raised platform */
		raised_platform_shelther?: boolean | null;

		/** Indicates if there are ramps (&lt;1:14) at the stop/platform */
		ramp?: boolean | null;

		/** Indicates if there is a path beyond the stop which is accessible */
		secondary_path?: boolean | null;

		/** Indicates if there are ramps (&gt;1:14) at the stop/platform */
		steep_ramp?: boolean | null;

		/** Indicates if there is at least one accessible telephone at the stop/platform that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992) */
		telephone?: boolean | null;

		/** Indicates if there is at least one accessible toilet at the stop/platform that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992) */
		toilet?: boolean | null;
	}
	export interface V3StopAccessibilityWheelchairFormProperties {
		accessible_ramp: FormControl<boolean | null | undefined>,

		/** Indicates if there is at least one low ticket counter at the stop that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992) */
		low_ticket_counter: FormControl<boolean | null | undefined>,

		/** Indicates if there is a space for mobility device to board on or off a transport mode */
		manouvering: FormControl<boolean | null | undefined>,

		/** Indicates if there is at least one accessible parking spot at the stop that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992) */
		parking: FormControl<boolean | null | undefined>,

		/** Indicates if there is a raised platform to board a train */
		raised_platform: FormControl<boolean | null | undefined>,

		/** Indicates if there is shelter near the raised platform */
		raised_platform_shelther: FormControl<boolean | null | undefined>,

		/** Indicates if there are ramps (&lt;1:14) at the stop/platform */
		ramp: FormControl<boolean | null | undefined>,

		/** Indicates if there is a path beyond the stop which is accessible */
		secondary_path: FormControl<boolean | null | undefined>,

		/** Indicates if there are ramps (&gt;1:14) at the stop/platform */
		steep_ramp: FormControl<boolean | null | undefined>,

		/** Indicates if there is at least one accessible telephone at the stop/platform that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992) */
		telephone: FormControl<boolean | null | undefined>,

		/** Indicates if there is at least one accessible toilet at the stop/platform that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992) */
		toilet: FormControl<boolean | null | undefined>,
	}
	export function CreateV3StopAccessibilityWheelchairFormGroup() {
		return new FormGroup<V3StopAccessibilityWheelchairFormProperties>({
			accessible_ramp: new FormControl<boolean | null | undefined>(undefined),
			low_ticket_counter: new FormControl<boolean | null | undefined>(undefined),
			manouvering: new FormControl<boolean | null | undefined>(undefined),
			parking: new FormControl<boolean | null | undefined>(undefined),
			raised_platform: new FormControl<boolean | null | undefined>(undefined),
			raised_platform_shelther: new FormControl<boolean | null | undefined>(undefined),
			ramp: new FormControl<boolean | null | undefined>(undefined),
			secondary_path: new FormControl<boolean | null | undefined>(undefined),
			steep_ramp: new FormControl<boolean | null | undefined>(undefined),
			telephone: new FormControl<boolean | null | undefined>(undefined),
			toilet: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface V3StopAmenityDetails {

		/** The number of free car parking spots at the stop */
		car_parking?: string | null;

		/** Indicates if there are CCTV (i.e. closed circuit television) cameras at the stop */
		cctv?: boolean | null;

		/** Indicates if there is a taxi rank at or near the stop */
		taxi_rank?: boolean | null;

		/** Indicates if there is a public toilet at or near the stop */
		toilet?: boolean | null;
	}
	export interface V3StopAmenityDetailsFormProperties {

		/** The number of free car parking spots at the stop */
		car_parking: FormControl<string | null | undefined>,

		/** Indicates if there are CCTV (i.e. closed circuit television) cameras at the stop */
		cctv: FormControl<boolean | null | undefined>,

		/** Indicates if there is a taxi rank at or near the stop */
		taxi_rank: FormControl<boolean | null | undefined>,

		/** Indicates if there is a public toilet at or near the stop */
		toilet: FormControl<boolean | null | undefined>,
	}
	export function CreateV3StopAmenityDetailsFormGroup() {
		return new FormGroup<V3StopAmenityDetailsFormProperties>({
			car_parking: new FormControl<string | null | undefined>(undefined),
			cctv: new FormControl<boolean | null | undefined>(undefined),
			taxi_rank: new FormControl<boolean | null | undefined>(undefined),
			toilet: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface V3StopBasic {
		stop_id?: number | null;
		stop_name?: string | null;
	}
	export interface V3StopBasicFormProperties {
		stop_id: FormControl<number | null | undefined>,
		stop_name: FormControl<string | null | undefined>,
	}
	export function CreateV3StopBasicFormGroup() {
		return new FormGroup<V3StopBasicFormProperties>({
			stop_id: new FormControl<number | null | undefined>(undefined),
			stop_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V3StopDetails {

		/** Disruption information identifier(s) */
		disruption_ids?: Array<number>;

		/** Transport mode identifier */
		route_type?: number | null;

		/** Routes travelling through the stop */
		routes?: Array<V2Object>;

		/** The definition applicable to the station_type; returns null for V/Line train */
		station_description?: string | null;

		/** Type of metropolitan train station (i.e. "Premium", "Host" or "Unstaffed" station); returns null for V/Line train */
		station_type?: string | null;
		stop_accessibility?: V3StopAccessibility;
		stop_amenities?: V3StopAmenityDetails;

		/** Stop identifier */
		stop_id?: number | null;

		/** Landmark in proximity of stop */
		stop_landmark?: string | null;
		stop_location?: V3StopLocation;

		/** Name of stop */
		stop_name?: string | null;
		stop_staffing?: V3StopStaffing;
	}
	export interface V3StopDetailsFormProperties {

		/** Transport mode identifier */
		route_type: FormControl<number | null | undefined>,

		/** The definition applicable to the station_type; returns null for V/Line train */
		station_description: FormControl<string | null | undefined>,

		/** Type of metropolitan train station (i.e. "Premium", "Host" or "Unstaffed" station); returns null for V/Line train */
		station_type: FormControl<string | null | undefined>,

		/** Stop identifier */
		stop_id: FormControl<number | null | undefined>,

		/** Landmark in proximity of stop */
		stop_landmark: FormControl<string | null | undefined>,

		/** Name of stop */
		stop_name: FormControl<string | null | undefined>,
	}
	export function CreateV3StopDetailsFormGroup() {
		return new FormGroup<V3StopDetailsFormProperties>({
			route_type: new FormControl<number | null | undefined>(undefined),
			station_description: new FormControl<string | null | undefined>(undefined),
			station_type: new FormControl<string | null | undefined>(undefined),
			stop_id: new FormControl<number | null | undefined>(undefined),
			stop_landmark: new FormControl<string | null | undefined>(undefined),
			stop_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V3StopLocation {
		gps?: V3StopGps;
	}
	export interface V3StopLocationFormProperties {
	}
	export function CreateV3StopLocationFormGroup() {
		return new FormGroup<V3StopLocationFormProperties>({
		});

	}

	export interface V3StopGps {

		/** Geographic coordinate of latitude at stop */
		latitude?: number | null;

		/** Geographic coordinate of longitude at stop */
		longitude?: number | null;
	}
	export interface V3StopGpsFormProperties {

		/** Geographic coordinate of latitude at stop */
		latitude: FormControl<number | null | undefined>,

		/** Geographic coordinate of longitude at stop */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateV3StopGpsFormGroup() {
		return new FormGroup<V3StopGpsFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface V3StopStaffing {

		/** Stop staffing hours */
		fri_am_from?: string | null;

		/** Stop staffing hours */
		fri_am_to?: string | null;

		/** Stop staffing hours */
		fri_pm_from?: string | null;

		/** Stop staffing hours */
		fri_pm_to?: string | null;

		/** Stop staffing hours */
		mon_am_from?: string | null;

		/** Stop staffing hours */
		mon_am_to?: string | null;

		/** Stop staffing hours */
		mon_pm_from?: string | null;

		/** Stop staffing hours */
		mon_pm_to?: string | null;

		/** Stop staffing hours */
		ph_additional_text?: string | null;

		/** Stop staffing hours */
		ph_from?: string | null;

		/** Stop staffing hours */
		ph_to?: string | null;

		/** Stop staffing hours */
		sat_am_from?: string | null;

		/** Stop staffing hours */
		sat_am_to?: string | null;

		/** Stop staffing hours */
		sat_pm_from?: string | null;

		/** Stop staffing hours */
		sat_pm_to?: string | null;

		/** Stop staffing hours */
		sun_am_from?: string | null;

		/** Stop staffing hours */
		sun_am_to?: string | null;

		/** Stop staffing hours */
		sun_pm_from?: string | null;

		/** Stop staffing hours */
		sun_pm_to?: string | null;

		/** Stop staffing hours */
		thu_am_from?: string | null;

		/** Stop staffing hours */
		thu_am_to?: string | null;

		/** Stop staffing hours */
		thu_pm_from?: string | null;

		/** Stop staffing hours */
		thu_pm_to?: string | null;

		/** Stop staffing hours */
		tue_am_from?: string | null;

		/** Stop staffing hours */
		tue_am_to?: string | null;

		/** Stop staffing hours */
		tue_pm_from?: string | null;

		/** Stop staffing hours */
		tue_pm_to?: string | null;

		/** Stop staffing hours */
		wed_am_from?: string | null;

		/** Stop staffing hours */
		wed_am_to?: string | null;

		/** Stop staffing hours */
		wed_pm_To?: string | null;

		/** Stop staffing hours */
		wed_pm_from?: string | null;
	}
	export interface V3StopStaffingFormProperties {

		/** Stop staffing hours */
		fri_am_from: FormControl<string | null | undefined>,

		/** Stop staffing hours */
		fri_am_to: FormControl<string | null | undefined>,

		/** Stop staffing hours */
		fri_pm_from: FormControl<string | null | undefined>,

		/** Stop staffing hours */
		fri_pm_to: FormControl<string | null | undefined>,

		/** Stop staffing hours */
		mon_am_from: FormControl<string | null | undefined>,

		/** Stop staffing hours */
		mon_am_to: FormControl<string | null | undefined>,

		/** Stop staffing hours */
		mon_pm_from: FormControl<string | null | undefined>,

		/** Stop staffing hours */
		mon_pm_to: FormControl<string | null | undefined>,

		/** Stop staffing hours */
		ph_additional_text: FormControl<string | null | undefined>,

		/** Stop staffing hours */
		ph_from: FormControl<string | null | undefined>,

		/** Stop staffing hours */
		ph_to: FormControl<string | null | undefined>,

		/** Stop staffing hours */
		sat_am_from: FormControl<string | null | undefined>,

		/** Stop staffing hours */
		sat_am_to: FormControl<string | null | undefined>,

		/** Stop staffing hours */
		sat_pm_from: FormControl<string | null | undefined>,

		/** Stop staffing hours */
		sat_pm_to: FormControl<string | null | undefined>,

		/** Stop staffing hours */
		sun_am_from: FormControl<string | null | undefined>,

		/** Stop staffing hours */
		sun_am_to: FormControl<string | null | undefined>,

		/** Stop staffing hours */
		sun_pm_from: FormControl<string | null | undefined>,

		/** Stop staffing hours */
		sun_pm_to: FormControl<string | null | undefined>,

		/** Stop staffing hours */
		thu_am_from: FormControl<string | null | undefined>,

		/** Stop staffing hours */
		thu_am_to: FormControl<string | null | undefined>,

		/** Stop staffing hours */
		thu_pm_from: FormControl<string | null | undefined>,

		/** Stop staffing hours */
		thu_pm_to: FormControl<string | null | undefined>,

		/** Stop staffing hours */
		tue_am_from: FormControl<string | null | undefined>,

		/** Stop staffing hours */
		tue_am_to: FormControl<string | null | undefined>,

		/** Stop staffing hours */
		tue_pm_from: FormControl<string | null | undefined>,

		/** Stop staffing hours */
		tue_pm_to: FormControl<string | null | undefined>,

		/** Stop staffing hours */
		wed_am_from: FormControl<string | null | undefined>,

		/** Stop staffing hours */
		wed_am_to: FormControl<string | null | undefined>,

		/** Stop staffing hours */
		wed_pm_To: FormControl<string | null | undefined>,

		/** Stop staffing hours */
		wed_pm_from: FormControl<string | null | undefined>,
	}
	export function CreateV3StopStaffingFormGroup() {
		return new FormGroup<V3StopStaffingFormProperties>({
			fri_am_from: new FormControl<string | null | undefined>(undefined),
			fri_am_to: new FormControl<string | null | undefined>(undefined),
			fri_pm_from: new FormControl<string | null | undefined>(undefined),
			fri_pm_to: new FormControl<string | null | undefined>(undefined),
			mon_am_from: new FormControl<string | null | undefined>(undefined),
			mon_am_to: new FormControl<string | null | undefined>(undefined),
			mon_pm_from: new FormControl<string | null | undefined>(undefined),
			mon_pm_to: new FormControl<string | null | undefined>(undefined),
			ph_additional_text: new FormControl<string | null | undefined>(undefined),
			ph_from: new FormControl<string | null | undefined>(undefined),
			ph_to: new FormControl<string | null | undefined>(undefined),
			sat_am_from: new FormControl<string | null | undefined>(undefined),
			sat_am_to: new FormControl<string | null | undefined>(undefined),
			sat_pm_from: new FormControl<string | null | undefined>(undefined),
			sat_pm_to: new FormControl<string | null | undefined>(undefined),
			sun_am_from: new FormControl<string | null | undefined>(undefined),
			sun_am_to: new FormControl<string | null | undefined>(undefined),
			sun_pm_from: new FormControl<string | null | undefined>(undefined),
			sun_pm_to: new FormControl<string | null | undefined>(undefined),
			thu_am_from: new FormControl<string | null | undefined>(undefined),
			thu_am_to: new FormControl<string | null | undefined>(undefined),
			thu_pm_from: new FormControl<string | null | undefined>(undefined),
			thu_pm_to: new FormControl<string | null | undefined>(undefined),
			tue_am_from: new FormControl<string | null | undefined>(undefined),
			tue_am_to: new FormControl<string | null | undefined>(undefined),
			tue_pm_from: new FormControl<string | null | undefined>(undefined),
			tue_pm_to: new FormControl<string | null | undefined>(undefined),
			wed_am_from: new FormControl<string | null | undefined>(undefined),
			wed_am_to: new FormControl<string | null | undefined>(undefined),
			wed_pm_To: new FormControl<string | null | undefined>(undefined),
			wed_pm_from: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V3StopGeosearch {

		/** Disruption information identifier(s) */
		disruption_ids?: Array<number>;

		/** Transport mode identifier */
		route_type?: number | null;

		/** List of routes travelling through the stop */
		routes?: Array<V2Object>;

		/** Distance of stop from input location (in metres); returns 0 if no location is input */
		stop_distance?: number | null;

		/** Stop identifier */
		stop_id?: number | null;

		/** Landmark in proximity of stop */
		stop_landmark?: string | null;

		/** Geographic coordinate of latitude at stop */
		stop_latitude?: number | null;

		/** Geographic coordinate of longitude at stop */
		stop_longitude?: number | null;

		/** Name of stop */
		stop_name?: string | null;

		/** Sequence of the stop on the route/run; return 0 when route_id or run_id not specified. Order ascendingly by this field (when non zero) to get physical order (earliest first) of stops on the route_id/run_id. */
		stop_sequence?: number | null;

		/** suburb of stop */
		stop_suburb?: string | null;
	}
	export interface V3StopGeosearchFormProperties {

		/** Transport mode identifier */
		route_type: FormControl<number | null | undefined>,

		/** Distance of stop from input location (in metres); returns 0 if no location is input */
		stop_distance: FormControl<number | null | undefined>,

		/** Stop identifier */
		stop_id: FormControl<number | null | undefined>,

		/** Landmark in proximity of stop */
		stop_landmark: FormControl<string | null | undefined>,

		/** Geographic coordinate of latitude at stop */
		stop_latitude: FormControl<number | null | undefined>,

		/** Geographic coordinate of longitude at stop */
		stop_longitude: FormControl<number | null | undefined>,

		/** Name of stop */
		stop_name: FormControl<string | null | undefined>,

		/** Sequence of the stop on the route/run; return 0 when route_id or run_id not specified. Order ascendingly by this field (when non zero) to get physical order (earliest first) of stops on the route_id/run_id. */
		stop_sequence: FormControl<number | null | undefined>,

		/** suburb of stop */
		stop_suburb: FormControl<string | null | undefined>,
	}
	export function CreateV3StopGeosearchFormGroup() {
		return new FormGroup<V3StopGeosearchFormProperties>({
			route_type: new FormControl<number | null | undefined>(undefined),
			stop_distance: new FormControl<number | null | undefined>(undefined),
			stop_id: new FormControl<number | null | undefined>(undefined),
			stop_landmark: new FormControl<string | null | undefined>(undefined),
			stop_latitude: new FormControl<number | null | undefined>(undefined),
			stop_longitude: new FormControl<number | null | undefined>(undefined),
			stop_name: new FormControl<string | null | undefined>(undefined),
			stop_sequence: new FormControl<number | null | undefined>(undefined),
			stop_suburb: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V3StopOnRoute {

		/** Disruption information identifier(s) */
		disruption_ids?: Array<number>;

		/** Transport mode identifier */
		route_type?: number | null;

		/** Stop identifier */
		stop_id?: number | null;

		/** Landmark in proximity of stop */
		stop_landmark?: string | null;

		/** Geographic coordinate of latitude at stop */
		stop_latitude?: number | null;

		/** Geographic coordinate of longitude at stop */
		stop_longitude?: number | null;

		/** Name of stop */
		stop_name?: string | null;

		/** Sequence of the stop on the route/run; return 0 when route_id or run_id not specified. Order ascendingly by this field (when non zero) to get physical order (earliest first) of stops on the route_id/run_id. */
		stop_sequence?: number | null;

		/** suburb of stop */
		stop_suburb?: string | null;
		stop_ticket?: V3StopTicket;
	}
	export interface V3StopOnRouteFormProperties {

		/** Transport mode identifier */
		route_type: FormControl<number | null | undefined>,

		/** Stop identifier */
		stop_id: FormControl<number | null | undefined>,

		/** Landmark in proximity of stop */
		stop_landmark: FormControl<string | null | undefined>,

		/** Geographic coordinate of latitude at stop */
		stop_latitude: FormControl<number | null | undefined>,

		/** Geographic coordinate of longitude at stop */
		stop_longitude: FormControl<number | null | undefined>,

		/** Name of stop */
		stop_name: FormControl<string | null | undefined>,

		/** Sequence of the stop on the route/run; return 0 when route_id or run_id not specified. Order ascendingly by this field (when non zero) to get physical order (earliest first) of stops on the route_id/run_id. */
		stop_sequence: FormControl<number | null | undefined>,

		/** suburb of stop */
		stop_suburb: FormControl<string | null | undefined>,
	}
	export function CreateV3StopOnRouteFormGroup() {
		return new FormGroup<V3StopOnRouteFormProperties>({
			route_type: new FormControl<number | null | undefined>(undefined),
			stop_id: new FormControl<number | null | undefined>(undefined),
			stop_landmark: new FormControl<string | null | undefined>(undefined),
			stop_latitude: new FormControl<number | null | undefined>(undefined),
			stop_longitude: new FormControl<number | null | undefined>(undefined),
			stop_name: new FormControl<string | null | undefined>(undefined),
			stop_sequence: new FormControl<number | null | undefined>(undefined),
			stop_suburb: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V3StopTicket {

		/** Indicates whether the stop is inside the free fare zone */
		is_free_fare_zone?: boolean | null;
		ticket_checks?: boolean | null;
		ticket_machine?: boolean | null;

		/** Indicates the ticket type for the stop (myki, paper or both) */
		ticket_type?: string | null;
		ticket_zones?: Array<number>;
		vline_reservation?: boolean | null;

		/** Description of the zone */
		zone?: string | null;
	}
	export interface V3StopTicketFormProperties {

		/** Indicates whether the stop is inside the free fare zone */
		is_free_fare_zone: FormControl<boolean | null | undefined>,
		ticket_checks: FormControl<boolean | null | undefined>,
		ticket_machine: FormControl<boolean | null | undefined>,

		/** Indicates the ticket type for the stop (myki, paper or both) */
		ticket_type: FormControl<string | null | undefined>,
		vline_reservation: FormControl<boolean | null | undefined>,

		/** Description of the zone */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateV3StopTicketFormGroup() {
		return new FormGroup<V3StopTicketFormProperties>({
			is_free_fare_zone: new FormControl<boolean | null | undefined>(undefined),
			ticket_checks: new FormControl<boolean | null | undefined>(undefined),
			ticket_machine: new FormControl<boolean | null | undefined>(undefined),
			ticket_type: new FormControl<string | null | undefined>(undefined),
			vline_reservation: new FormControl<boolean | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V3StopResponse {

		/** Disruption information applicable to relevant routes or stops */
		disruptions?: {[id: string]: V3Disruption };
		status?: V3Status;
		stop?: V3StopDetails;
	}
	export interface V3StopResponseFormProperties {

		/** Disruption information applicable to relevant routes or stops */
		disruptions: FormControl<{[id: string]: V3Disruption } | null | undefined>,
	}
	export function CreateV3StopResponseFormGroup() {
		return new FormGroup<V3StopResponseFormProperties>({
			disruptions: new FormControl<{[id: string]: V3Disruption } | null | undefined>(undefined),
		});

	}

	export interface V3StoppingPattern {

		/** Timetabled and real-time service departures */
		departures?: Array<V3PatternDeparture>;

		/** Directions of travel of route */
		directions?: {[id: string]: V3Direction };

		/** Disruption information applicable to relevant routes or stops */
		disruptions?: Array<V3Disruption>;

		/** Train lines, tram routes, bus routes, regional coach routes, Night Bus routes */
		routes?: {[id: string]: V2Object };

		/** Individual trips/services of a route */
		runs?: {[id: string]: V3Run };
		status?: V3Status;

		/** A train station, tram stop, bus stop, regional coach stop or Night Bus stop */
		stops?: {[id: string]: V3StoppingPatternStop };
	}
	export interface V3StoppingPatternFormProperties {

		/** Directions of travel of route */
		directions: FormControl<{[id: string]: V3Direction } | null | undefined>,

		/** Train lines, tram routes, bus routes, regional coach routes, Night Bus routes */
		routes: FormControl<{[id: string]: V2Object } | null | undefined>,

		/** Individual trips/services of a route */
		runs: FormControl<{[id: string]: V3Run } | null | undefined>,

		/** A train station, tram stop, bus stop, regional coach stop or Night Bus stop */
		stops: FormControl<{[id: string]: V3StoppingPatternStop } | null | undefined>,
	}
	export function CreateV3StoppingPatternFormGroup() {
		return new FormGroup<V3StoppingPatternFormProperties>({
			directions: new FormControl<{[id: string]: V3Direction } | null | undefined>(undefined),
			routes: new FormControl<{[id: string]: V2Object } | null | undefined>(undefined),
			runs: new FormControl<{[id: string]: V3Run } | null | undefined>(undefined),
			stops: new FormControl<{[id: string]: V3StoppingPatternStop } | null | undefined>(undefined),
		});

	}

	export interface V3StoppingPatternStop {

		/** Transport mode identifier */
		route_type?: number | null;

		/** Distance of stop from input location (in metres); returns 0 if no location is input */
		stop_distance?: number | null;

		/** Stop identifier */
		stop_id?: number | null;

		/** Landmark in proximity of stop */
		stop_landmark?: string | null;

		/** Geographic coordinate of latitude at stop */
		stop_latitude?: number | null;

		/** Geographic coordinate of longitude at stop */
		stop_longitude?: number | null;

		/** Name of stop */
		stop_name?: string | null;

		/** Sequence of the stop on the route/run; return 0 when route_id or run_id not specified. Order ascendingly by this field (when non zero) to get physical order (earliest first) of stops on the route_id/run_id. */
		stop_sequence?: number | null;

		/** suburb of stop */
		stop_suburb?: string | null;
		stop_ticket?: V3StopTicket;
	}
	export interface V3StoppingPatternStopFormProperties {

		/** Transport mode identifier */
		route_type: FormControl<number | null | undefined>,

		/** Distance of stop from input location (in metres); returns 0 if no location is input */
		stop_distance: FormControl<number | null | undefined>,

		/** Stop identifier */
		stop_id: FormControl<number | null | undefined>,

		/** Landmark in proximity of stop */
		stop_landmark: FormControl<string | null | undefined>,

		/** Geographic coordinate of latitude at stop */
		stop_latitude: FormControl<number | null | undefined>,

		/** Geographic coordinate of longitude at stop */
		stop_longitude: FormControl<number | null | undefined>,

		/** Name of stop */
		stop_name: FormControl<string | null | undefined>,

		/** Sequence of the stop on the route/run; return 0 when route_id or run_id not specified. Order ascendingly by this field (when non zero) to get physical order (earliest first) of stops on the route_id/run_id. */
		stop_sequence: FormControl<number | null | undefined>,

		/** suburb of stop */
		stop_suburb: FormControl<string | null | undefined>,
	}
	export function CreateV3StoppingPatternStopFormGroup() {
		return new FormGroup<V3StoppingPatternStopFormProperties>({
			route_type: new FormControl<number | null | undefined>(undefined),
			stop_distance: new FormControl<number | null | undefined>(undefined),
			stop_id: new FormControl<number | null | undefined>(undefined),
			stop_landmark: new FormControl<string | null | undefined>(undefined),
			stop_latitude: new FormControl<number | null | undefined>(undefined),
			stop_longitude: new FormControl<number | null | undefined>(undefined),
			stop_name: new FormControl<string | null | undefined>(undefined),
			stop_sequence: new FormControl<number | null | undefined>(undefined),
			stop_suburb: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V3StopsByDistanceResponse {

		/** Disruption information applicable to relevant routes or stops */
		disruptions?: {[id: string]: V3Disruption };
		status?: V3Status;

		/** Train stations, tram stops, bus stops, regional coach stops or Night Bus stops */
		stops?: Array<V3StopGeosearch>;
	}
	export interface V3StopsByDistanceResponseFormProperties {

		/** Disruption information applicable to relevant routes or stops */
		disruptions: FormControl<{[id: string]: V3Disruption } | null | undefined>,
	}
	export function CreateV3StopsByDistanceResponseFormGroup() {
		return new FormGroup<V3StopsByDistanceResponseFormProperties>({
			disruptions: new FormControl<{[id: string]: V3Disruption } | null | undefined>(undefined),
		});

	}

	export interface V3StopsOnRouteResponse {

		/** Disruption information applicable to relevant routes or stops */
		disruptions?: {[id: string]: V3Disruption };

		/** GeoPath for the route */
		geopath?: Array<V2Object>;
		status?: V3Status;

		/** Train stations, tram stops, bus stops, regional coach stops or Night Bus stops */
		stops?: Array<V3StopOnRoute>;
	}
	export interface V3StopsOnRouteResponseFormProperties {

		/** Disruption information applicable to relevant routes or stops */
		disruptions: FormControl<{[id: string]: V3Disruption } | null | undefined>,
	}
	export function CreateV3StopsOnRouteResponseFormGroup() {
		return new FormGroup<V3StopsOnRouteResponseFormProperties>({
			disruptions: new FormControl<{[id: string]: V3Disruption } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * View departures for all routes from a stop
		 * Get v3/departures/route_type/{route_type}/stop/{stop_id}
		 * @param {Departures_GetForStopRoute_type} route_type Number identifying transport mode; values returned via RouteTypes API
		 * @param {number} stop_id Identifier of stop; values returned by Stops API
		 * @param {Array<number>} platform_numbers Filter by platform number at stop
		 * @param {number} direction_id Filter by identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id}
		 * @param {boolean} gtfs Indicates that stop_id parameter will accept "GTFS stop_id" data
		 * @param {Date} date_utc Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time)
		 * @param {number} max_results Maximum number of results returned
		 * @param {boolean} include_cancelled Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only
		 * @param {boolean} look_backwards Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default = false). Requires max_results &gt; 0.
		 * @param {Array<string>} expand List of objects to be returned in full (i.e. expanded) - options include: All, Stop, Route, Run, Direction, Disruption, VehiclePosition, VehicleDescriptor or None.
		 *             Run must be expanded to receive VehiclePosition and VehicleDescriptor information.
		 * @param {boolean} include_geopath Indicates if the route geopath should be returned
		 * @param {string} token Please ignore
		 * @param {string} devid Your developer id
		 * @param {string} signature Authentication signature for request
		 * @return {V3DeparturesResponse} Service departures from the specified stop for all routes of the specified route type; departures are timetabled and real-time (if applicable).
		 */
		Departures_GetForStop(route_type: Departures_GetForStopRoute_type, stop_id: number, platform_numbers: Array<number> | null | undefined, direction_id: number | null | undefined, gtfs: boolean | null | undefined, date_utc: Date | null | undefined, max_results: number | null | undefined, include_cancelled: boolean | null | undefined, look_backwards: boolean | null | undefined, expand: Array<string> | null | undefined, include_geopath: boolean | null | undefined, token: string | null | undefined, devid: string | null | undefined, signature: string | null | undefined): Observable<V3DeparturesResponse> {
			return this.http.get<V3DeparturesResponse>(this.baseUri + 'v3/departures/route_type/' + route_type + '/stop/' + stop_id + '?' + platform_numbers?.map(z => `platform_numbers=${z}`).join('&') + '&direction_id=' + direction_id + '&gtfs=' + gtfs + '&date_utc=' + date_utc?.toISOString() + '&max_results=' + max_results + '&include_cancelled=' + include_cancelled + '&look_backwards=' + look_backwards + '&' + expand?.map(z => `expand=${encodeURIComponent(z)}`).join('&') + '&include_geopath=' + include_geopath + '&token=' + (token == null ? '' : encodeURIComponent(token)) + '&devid=' + (devid == null ? '' : encodeURIComponent(devid)) + '&signature=' + (signature == null ? '' : encodeURIComponent(signature)), {});
		}

		/**
		 * View departures for a specific route from a stop
		 * Get v3/departures/route_type/{route_type}/stop/{stop_id}/route/{route_id}
		 * @param {Departures_GetForStopAndRouteRoute_type} route_type Number identifying transport mode; values returned via RouteTypes API
		 * @param {number} stop_id Identifier of stop; values returned by Stops API
		 * @param {string} route_id Identifier of route; values returned by Routes API - v3/routes
		 * @param {number} direction_id Filter by identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id}
		 * @param {boolean} gtfs Indicates that stop_id parameter will accept "GTFS stop_id" data
		 * @param {Date} date_utc Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time)
		 * @param {number} max_results Maximum number of results returned
		 * @param {boolean} include_cancelled Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only
		 * @param {boolean} look_backwards Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default = false). Requires max_results &gt; 0.
		 * @param {Array<string>} expand List of objects to be returned in full (i.e. expanded) - options include: All, Stop, Route, Run, Direction, Disruption, VehiclePosition, VehicleDescriptor or None.
		 *             Run must be expanded to receive VehiclePosition and VehicleDescriptor information.
		 * @param {boolean} include_geopath Indicates if the route geopath should be returned
		 * @param {string} token Please ignore
		 * @param {string} devid Your developer id
		 * @param {string} signature Authentication signature for request
		 * @return {V3DeparturesResponse} Service departures from the specified stop for the specified route (and route type); departures are timetabled and real-time (if applicable).
		 */
		Departures_GetForStopAndRoute(route_type: Departures_GetForStopAndRouteRoute_type, stop_id: number, route_id: string, direction_id: number | null | undefined, gtfs: boolean | null | undefined, date_utc: Date | null | undefined, max_results: number | null | undefined, include_cancelled: boolean | null | undefined, look_backwards: boolean | null | undefined, expand: Array<string> | null | undefined, include_geopath: boolean | null | undefined, token: string | null | undefined, devid: string | null | undefined, signature: string | null | undefined): Observable<V3DeparturesResponse> {
			return this.http.get<V3DeparturesResponse>(this.baseUri + 'v3/departures/route_type/' + route_type + '/stop/' + stop_id + '/route/' + (route_id == null ? '' : encodeURIComponent(route_id)) + '&direction_id=' + direction_id + '&gtfs=' + gtfs + '&date_utc=' + date_utc?.toISOString() + '&max_results=' + max_results + '&include_cancelled=' + include_cancelled + '&look_backwards=' + look_backwards + '&' + expand?.map(z => `expand=${encodeURIComponent(z)}`).join('&') + '&include_geopath=' + include_geopath + '&token=' + (token == null ? '' : encodeURIComponent(token)) + '&devid=' + (devid == null ? '' : encodeURIComponent(devid)) + '&signature=' + (signature == null ? '' : encodeURIComponent(signature)), {});
		}

		/**
		 * View directions that a route travels in
		 * Get v3/directions/route/{route_id}
		 * @param {number} route_id Identifier of route; values returned by Routes API - v3/routes
		 * @param {string} token Please ignore
		 * @param {string} devid Your developer id
		 * @param {string} signature Authentication signature for request
		 * @return {V3DirectionsResponse} The directions that a specified route travels in.
		 */
		Directions_ForRoute(route_id: number, token: string | null | undefined, devid: string | null | undefined, signature: string | null | undefined): Observable<V3DirectionsResponse> {
			return this.http.get<V3DirectionsResponse>(this.baseUri + 'v3/directions/route/' + route_id + '?token=' + (token == null ? '' : encodeURIComponent(token)) + '&devid=' + (devid == null ? '' : encodeURIComponent(devid)) + '&signature=' + (signature == null ? '' : encodeURIComponent(signature)), {});
		}

		/**
		 * View all routes for a direction of travel
		 * Get v3/directions/{direction_id}
		 * @param {number} direction_id Identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id}
		 * @param {string} token Please ignore
		 * @param {string} devid Your developer id
		 * @param {string} signature Authentication signature for request
		 * @return {V3DirectionsResponse} All routes that travel in the specified direction.
		 */
		Directions_ForDirection(direction_id: number, token: string | null | undefined, devid: string | null | undefined, signature: string | null | undefined): Observable<V3DirectionsResponse> {
			return this.http.get<V3DirectionsResponse>(this.baseUri + 'v3/directions/' + direction_id + '?token=' + (token == null ? '' : encodeURIComponent(token)) + '&devid=' + (devid == null ? '' : encodeURIComponent(devid)) + '&signature=' + (signature == null ? '' : encodeURIComponent(signature)), {});
		}

		/**
		 * View all routes of a particular type for a direction of travel
		 * Get v3/directions/{direction_id}/route_type/{route_type}
		 * @param {number} direction_id Identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id}
		 * @param {Directions_ForDirectionAndTypeRoute_type} route_type Number identifying transport mode; values returned via RouteTypes API
		 * @param {string} token Please ignore
		 * @param {string} devid Your developer id
		 * @param {string} signature Authentication signature for request
		 * @return {V3DirectionsResponse} All routes of the specified route type that travel in the specified direction.
		 */
		Directions_ForDirectionAndType(direction_id: number, route_type: Directions_ForDirectionAndTypeRoute_type, token: string | null | undefined, devid: string | null | undefined, signature: string | null | undefined): Observable<V3DirectionsResponse> {
			return this.http.get<V3DirectionsResponse>(this.baseUri + 'v3/directions/' + direction_id + '/route_type/' + route_type + '?token=' + (token == null ? '' : encodeURIComponent(token)) + '&devid=' + (devid == null ? '' : encodeURIComponent(devid)) + '&signature=' + (signature == null ? '' : encodeURIComponent(signature)), {});
		}

		/**
		 * View all disruptions for all route types
		 * Get v3/disruptions
		 * @param {Array<V3StopDepartureRequestRoute_type>} route_types Filter by route_type; values returned via RouteTypes API
		 * @param {Array<number>} disruption_modes Filter by disruption_mode; values returned via v3/disruptions/modes API
		 * @param {Disruptions_GetAllDisruptionsDisruption_status} disruption_status Filter by status of disruption
		 * @param {string} token Please ignore
		 * @param {string} devid Your developer id
		 * @param {string} signature Authentication signature for request
		 * @return {V3DisruptionsResponse} All disruption information for all route types.
		 */
		Disruptions_GetAllDisruptions(route_types: Array<V3StopDepartureRequestRoute_type> | null | undefined, disruption_modes: Array<number> | null | undefined, disruption_status: Disruptions_GetAllDisruptionsDisruption_status | null | undefined, token: string | null | undefined, devid: string | null | undefined, signature: string | null | undefined): Observable<V3DisruptionsResponse> {
			return this.http.get<V3DisruptionsResponse>(this.baseUri + 'v3/disruptions?' + route_types?.map(z => `route_types=${z}`).join('&') + '&' + disruption_modes?.map(z => `disruption_modes=${z}`).join('&') + '&disruption_status=' + disruption_status + '&token=' + (token == null ? '' : encodeURIComponent(token)) + '&devid=' + (devid == null ? '' : encodeURIComponent(devid)) + '&signature=' + (signature == null ? '' : encodeURIComponent(signature)), {});
		}

		/**
		 * Get all disruption modes
		 * Get v3/disruptions/modes
		 * @param {string} token Please ignore
		 * @param {string} devid Your developer id
		 * @param {string} signature Authentication signature for request
		 * @return {V3DisruptionModesResponse} Disruption specific modes
		 */
		Disruptions_GetDisruptionModes(token: string | null | undefined, devid: string | null | undefined, signature: string | null | undefined): Observable<V3DisruptionModesResponse> {
			return this.http.get<V3DisruptionModesResponse>(this.baseUri + 'v3/disruptions/modes?token=' + (token == null ? '' : encodeURIComponent(token)) + '&devid=' + (devid == null ? '' : encodeURIComponent(devid)) + '&signature=' + (signature == null ? '' : encodeURIComponent(signature)), {});
		}

		/**
		 * View all disruptions for a particular route
		 * Get v3/disruptions/route/{route_id}
		 * @param {number} route_id Identifier of route; values returned by Routes API - v3/routes
		 * @param {Disruptions_GetAllDisruptionsDisruption_status} disruption_status Filter by status of disruption
		 * @param {string} token Please ignore
		 * @param {string} devid Your developer id
		 * @param {string} signature Authentication signature for request
		 * @return {V3DisruptionsResponse} All disruption information (if any exists) for the specified route.
		 */
		Disruptions_GetDisruptionsByRoute(route_id: number, disruption_status: Disruptions_GetAllDisruptionsDisruption_status | null | undefined, token: string | null | undefined, devid: string | null | undefined, signature: string | null | undefined): Observable<V3DisruptionsResponse> {
			return this.http.get<V3DisruptionsResponse>(this.baseUri + 'v3/disruptions/route/' + route_id + '?disruption_status=' + disruption_status + '&token=' + (token == null ? '' : encodeURIComponent(token)) + '&devid=' + (devid == null ? '' : encodeURIComponent(devid)) + '&signature=' + (signature == null ? '' : encodeURIComponent(signature)), {});
		}

		/**
		 * View all disruptions for a particular route and stop
		 * Get v3/disruptions/route/{route_id}/stop/{stop_id}
		 * @param {number} route_id Identifier of route; values returned by Routes API - v3/routes
		 * @param {number} stop_id Identifier of stop; values returned by Stops API - v3/stops
		 * @param {Disruptions_GetAllDisruptionsDisruption_status} disruption_status Filter by status of disruption
		 * @param {string} token Please ignore
		 * @param {string} devid Your developer id
		 * @param {string} signature Authentication signature for request
		 * @return {V3DisruptionsResponse} All disruption information (if any exists) for the specified route and stop.
		 */
		Disruptions_GetDisruptionsByRouteAndStop(route_id: number, stop_id: number, disruption_status: Disruptions_GetAllDisruptionsDisruption_status | null | undefined, token: string | null | undefined, devid: string | null | undefined, signature: string | null | undefined): Observable<V3DisruptionsResponse> {
			return this.http.get<V3DisruptionsResponse>(this.baseUri + 'v3/disruptions/route/' + route_id + '/stop/' + stop_id + '?disruption_status=' + disruption_status + '&token=' + (token == null ? '' : encodeURIComponent(token)) + '&devid=' + (devid == null ? '' : encodeURIComponent(devid)) + '&signature=' + (signature == null ? '' : encodeURIComponent(signature)), {});
		}

		/**
		 * View all disruptions for a particular stop
		 * Get v3/disruptions/stop/{stop_id}
		 * @param {number} stop_id Identifier of stop; values returned by Stops API - v3/stops
		 * @param {Disruptions_GetAllDisruptionsDisruption_status} disruption_status Filter by status of disruption
		 * @param {string} token Please ignore
		 * @param {string} devid Your developer id
		 * @param {string} signature Authentication signature for request
		 * @return {V3DisruptionsResponse} All disruption information (if any exists) for the specified stop.
		 */
		Disruptions_GetDisruptionsByStop(stop_id: number, disruption_status: Disruptions_GetAllDisruptionsDisruption_status | null | undefined, token: string | null | undefined, devid: string | null | undefined, signature: string | null | undefined): Observable<V3DisruptionsResponse> {
			return this.http.get<V3DisruptionsResponse>(this.baseUri + 'v3/disruptions/stop/' + stop_id + '?disruption_status=' + disruption_status + '&token=' + (token == null ? '' : encodeURIComponent(token)) + '&devid=' + (devid == null ? '' : encodeURIComponent(devid)) + '&signature=' + (signature == null ? '' : encodeURIComponent(signature)), {});
		}

		/**
		 * View a specific disruption
		 * Get v3/disruptions/{disruption_id}
		 * @param {number} disruption_id Identifier of disruption; values returned by Disruptions API - /v3/disruptions OR /v3/disruptions/route/{route_id}
		 * @param {string} token Please ignore
		 * @param {string} devid Your developer id
		 * @param {string} signature Authentication signature for request
		 * @return {V3DisruptionResponse} Disruption information for the specified disruption ID.
		 */
		Disruptions_GetDisruptionById(disruption_id: number, token: string | null | undefined, devid: string | null | undefined, signature: string | null | undefined): Observable<V3DisruptionResponse> {
			return this.http.get<V3DisruptionResponse>(this.baseUri + 'v3/disruptions/' + disruption_id + '?token=' + (token == null ? '' : encodeURIComponent(token)) + '&devid=' + (devid == null ? '' : encodeURIComponent(devid)) + '&signature=' + (signature == null ? '' : encodeURIComponent(signature)), {});
		}

		/**
		 * Estimate a fare by zone
		 * Get v3/fare_estimate/min_zone/{minZone}/max_zone/{maxZone}
		 * @param {number} minZone Minimum Zone travelled through ie. 1
		 * @param {number} maxZone Maximum Zone travelled through id. 6
		 * @param {Date} journey_touch_on_utc JourneyTouchOnUtc in format yyyy-M-d h:m (e.g 2016-5-31 16:53).
		 * @param {Date} journey_touch_off_utc JourneyTouchOffUtc in format yyyy-M-d h:m (e.g 2016-5-31 16:53).
		 * @param {string} token Please ignore
		 * @param {string} devid Your developer id
		 * @param {string} signature Authentication signature for request
		 * @return {V3FareEstimateResponse} Resultant set fare estimates
		 */
		FareEstimate_GetFareEstimateByZone(minZone: number, maxZone: number, journey_touch_on_utc: Date | null | undefined, journey_touch_off_utc: Date | null | undefined, is_journey_in_free_tram_zone: boolean | null | undefined, travelled_route_types: Array<V3StopDepartureRequestRoute_type> | null | undefined, token: string | null | undefined, devid: string | null | undefined, signature: string | null | undefined): Observable<V3FareEstimateResponse> {
			return this.http.get<V3FareEstimateResponse>(this.baseUri + 'v3/fare_estimate/min_zone/' + minZone + '/max_zone/' + maxZone + '?journey_touch_on_utc=' + journey_touch_on_utc?.toISOString() + '&journey_touch_off_utc=' + journey_touch_off_utc?.toISOString() + '&is_journey_in_free_tram_zone=' + is_journey_in_free_tram_zone + '&' + travelled_route_types?.map(z => `travelled_route_types=${z}`).join('&') + '&token=' + (token == null ? '' : encodeURIComponent(token)) + '&devid=' + (devid == null ? '' : encodeURIComponent(devid)) + '&signature=' + (signature == null ? '' : encodeURIComponent(signature)), {});
		}

		/**
		 * List all ticket outlets
		 * Get v3/outlets
		 * @param {number} max_results Maximum number of results returned (default = 30)
		 * @param {string} token Please ignore
		 * @param {string} devid Your developer id
		 * @param {string} signature Authentication signature for request
		 * @return {V3OutletResponse} Ticket outlets.
		 */
		Outlets_GetAllOutlets(max_results: number | null | undefined, token: string | null | undefined, devid: string | null | undefined, signature: string | null | undefined): Observable<V3OutletResponse> {
			return this.http.get<V3OutletResponse>(this.baseUri + 'v3/outlets?max_results=' + max_results + '&token=' + (token == null ? '' : encodeURIComponent(token)) + '&devid=' + (devid == null ? '' : encodeURIComponent(devid)) + '&signature=' + (signature == null ? '' : encodeURIComponent(signature)), {});
		}

		/**
		 * List ticket outlets near a specific location
		 * Get v3/outlets/location/{latitude},{longitude}
		 * @param {number} latitude Geographic coordinate of latitude
		 * @param {number} longitude Geographic coordinate of longitude
		 * @param {number} max_distance Filter by maximum distance (in metres) from location specified via latitude and longitude parameters (default = 300)
		 * @param {number} max_results Maximum number of results returned (default = 30)
		 * @param {string} token Please ignore
		 * @param {string} devid Your developer id
		 * @param {string} signature Authentication signature for request
		 * @return {V3OutletGeolocationResponse} Ticket outlets near the specified location.
		 */
		Outlets_GetOutletsByGeolocation(latitude: number, longitude: number, max_distance: number | null | undefined, max_results: number | null | undefined, token: string | null | undefined, devid: string | null | undefined, signature: string | null | undefined): Observable<V3OutletGeolocationResponse> {
			return this.http.get<V3OutletGeolocationResponse>(this.baseUri + 'v3/outlets/location/' + latitude + ',' + longitude + '?max_distance=' + max_distance + '&max_results=' + max_results + '&token=' + (token == null ? '' : encodeURIComponent(token)) + '&devid=' + (devid == null ? '' : encodeURIComponent(devid)) + '&signature=' + (signature == null ? '' : encodeURIComponent(signature)), {});
		}

		/**
		 * View the stopping pattern for a specific trip/service run
		 * Get v3/pattern/run/{run_ref}/route_type/{route_type}
		 * @param {string} run_ref The run_ref is the identifier of a run as returned by the departures/* and runs/* endpoints. WARNING, run_id is deprecated. Use run_ref instead.
		 * @param {Patterns_GetPatternByRunRoute_type} route_type Number identifying transport mode; values returned via RouteTypes API
		 * @param {Array<string>} expand List of objects to be returned in full (i.e. expanded) - options include: All, Stop, Route, Run, Direction, Disruption, VehiclePosition, VehicleDescriptor and None. Default is Disruption. Run must be expanded to receive VehiclePosition and VehicleDescriptor information.
		 * @param {number} stop_id Filter by stop_id; values returned by Stops API
		 * @param {Date} date_utc Filter by the date and time of the request (ISO 8601 UTC format)
		 * @param {boolean} include_skipped_stops Include any skipped stops in a stopping pattern. Defaults to false.
		 * @param {boolean} include_geopath Indicates if geopath data will be returned (default = false)
		 * @param {string} token Please ignore
		 * @param {string} devid Your developer id
		 * @param {string} signature Authentication signature for request
		 * @return {V3StoppingPattern} The stopping pattern of the specified run_ref and route type. (NOTE: the departure sequence field should be used to sort departures in chronological order, however it is not always N+1 or N-1 of the previous or following departure. e.g 100, 200, 250, 300 instead of 1, 2, 3, 4)
		 */
		Patterns_GetPatternByRun(run_ref: string, route_type: Patterns_GetPatternByRunRoute_type, expand: Array<string>, stop_id: number | null | undefined, date_utc: Date | null | undefined, include_skipped_stops: boolean | null | undefined, include_geopath: boolean | null | undefined, token: string | null | undefined, devid: string | null | undefined, signature: string | null | undefined): Observable<V3StoppingPattern> {
			return this.http.get<V3StoppingPattern>(this.baseUri + 'v3/pattern/run/' + (run_ref == null ? '' : encodeURIComponent(run_ref)) + '/route_type/' + route_type + '&' + expand.map(z => `expand=${encodeURIComponent(z)}`).join('&') + '&stop_id=' + stop_id + '&date_utc=' + date_utc?.toISOString() + '&include_skipped_stops=' + include_skipped_stops + '&include_geopath=' + include_geopath + '&token=' + (token == null ? '' : encodeURIComponent(token)) + '&devid=' + (devid == null ? '' : encodeURIComponent(devid)) + '&signature=' + (signature == null ? '' : encodeURIComponent(signature)), {});
		}

		/**
		 * View all route types and their names
		 * Get v3/route_types
		 * @param {string} token Please ignore
		 * @param {string} devid Your developer id
		 * @param {string} signature Authentication signature for request
		 * @return {V3RouteTypesResponse} All route types (i.e. identifiers of transport modes) and their names.
		 */
		RouteTypes_GetRouteTypes(token: string | null | undefined, devid: string | null | undefined, signature: string | null | undefined): Observable<V3RouteTypesResponse> {
			return this.http.get<V3RouteTypesResponse>(this.baseUri + 'v3/route_types?token=' + (token == null ? '' : encodeURIComponent(token)) + '&devid=' + (devid == null ? '' : encodeURIComponent(devid)) + '&signature=' + (signature == null ? '' : encodeURIComponent(signature)), {});
		}

		/**
		 * View route names and numbers for all routes
		 * Get v3/routes
		 * @param {Array<V3StopDepartureRequestRoute_type>} route_types Filter by route_type; values returned via RouteTypes API
		 * @param {string} route_name Filter by name  of route (accepts partial route name matches)
		 * @param {string} token Please ignore
		 * @param {string} devid Your developer id
		 * @param {string} signature Authentication signature for request
		 * @return {V3RouteResponse} Route names and numbers for all routes of all route types.
		 */
		Routes_OneOrMoreRoutes(route_types: Array<V3StopDepartureRequestRoute_type> | null | undefined, route_name: string | null | undefined, token: string | null | undefined, devid: string | null | undefined, signature: string | null | undefined): Observable<V3RouteResponse> {
			return this.http.get<V3RouteResponse>(this.baseUri + 'v3/routes?' + route_types?.map(z => `route_types=${z}`).join('&') + '&route_name=' + (route_name == null ? '' : encodeURIComponent(route_name)) + '&token=' + (token == null ? '' : encodeURIComponent(token)) + '&devid=' + (devid == null ? '' : encodeURIComponent(devid)) + '&signature=' + (signature == null ? '' : encodeURIComponent(signature)), {});
		}

		/**
		 * View route name and number for specific route ID
		 * Get v3/routes/{route_id}
		 * @param {number} route_id Identifier of route; values returned by Departures, Directions and Disruptions APIs
		 * @param {boolean} include_geopath Indicates kif geopath data will be returned (default = false)
		 * @param {Date} geopath_utc Filter geopaths by date (ISO 8601 UTC format) (default = current date)
		 * @param {string} token Please ignore
		 * @param {string} devid Your developer id
		 * @param {string} signature Authentication signature for request
		 * @return {V3RouteResponse} The route name and number for the specified route ID.
		 */
		Routes_RouteFromId(route_id: number, include_geopath: boolean | null | undefined, geopath_utc: Date | null | undefined, token: string | null | undefined, devid: string | null | undefined, signature: string | null | undefined): Observable<V3RouteResponse> {
			return this.http.get<V3RouteResponse>(this.baseUri + 'v3/routes/' + route_id + '?include_geopath=' + include_geopath + '&geopath_utc=' + geopath_utc?.toISOString() + '&token=' + (token == null ? '' : encodeURIComponent(token)) + '&devid=' + (devid == null ? '' : encodeURIComponent(devid)) + '&signature=' + (signature == null ? '' : encodeURIComponent(signature)), {});
		}

		/**
		 * View all trip/service runs for a specific route ID
		 * Get v3/runs/route/{route_id}
		 * @param {number} route_id Identifier of route; values returned by Routes API - v3/routes.
		 * @param {Array<string>} expand List of objects to be returned in full (i.e. expanded) - options include: All, VehiclePosition, VehicleDescriptor, or None. Default is None.
		 * @param {Date} date_utc Date of the request. (optional - defaults to now)
		 * @param {string} token Please ignore
		 * @param {string} devid Your developer id
		 * @param {string} signature Authentication signature for request
		 * @return {V3RunsResponse} All trip/service run details for the specified route ID.
		 */
		Runs_ForRoute(route_id: number, expand: Array<string> | null | undefined, date_utc: Date | null | undefined, token: string | null | undefined, devid: string | null | undefined, signature: string | null | undefined): Observable<V3RunsResponse> {
			return this.http.get<V3RunsResponse>(this.baseUri + 'v3/runs/route/' + route_id + '?' + expand?.map(z => `expand=${encodeURIComponent(z)}`).join('&') + '&date_utc=' + date_utc?.toISOString() + '&token=' + (token == null ? '' : encodeURIComponent(token)) + '&devid=' + (devid == null ? '' : encodeURIComponent(devid)) + '&signature=' + (signature == null ? '' : encodeURIComponent(signature)), {});
		}

		/**
		 * View all trip/service runs for a specific route ID and route type
		 * Get v3/runs/route/{route_id}/route_type/{route_type}
		 * @param {number} route_id Identifier of route; values returned by Routes API - v3/routes.
		 * @param {Runs_ForRouteAndRouteTypeRoute_type} route_type Number identifying transport mode; values returned via RouteTypes API
		 * @param {Array<string>} expand List of objects to be returned in full (i.e. expanded) - options include: All, VehiclePosition, VehicleDescriptor, or None. Default is All.
		 * @param {Date} date_utc Date of the request. (optional - defaults to now)
		 * @param {string} token Please ignore
		 * @param {string} devid Your developer id
		 * @param {string} signature Authentication signature for request
		 * @return {V3RunsResponse} All trip/service run details for the specified route ID and route type.
		 */
		Runs_ForRouteAndRouteType(route_id: number, route_type: Runs_ForRouteAndRouteTypeRoute_type, expand: Array<string>, date_utc: Date | null | undefined, token: string | null | undefined, devid: string | null | undefined, signature: string | null | undefined): Observable<V3RunsResponse> {
			return this.http.get<V3RunsResponse>(this.baseUri + 'v3/runs/route/' + route_id + '/route_type/' + route_type + '?' + expand.map(z => `expand=${encodeURIComponent(z)}`).join('&') + '&date_utc=' + date_utc?.toISOString() + '&token=' + (token == null ? '' : encodeURIComponent(token)) + '&devid=' + (devid == null ? '' : encodeURIComponent(devid)) + '&signature=' + (signature == null ? '' : encodeURIComponent(signature)), {});
		}

		/**
		 * View all trip/service runs for a specific run_ref
		 * Get v3/runs/{run_ref}
		 * @param {string} run_ref The run_ref is the identifier of a run as returned by the departures/* and runs/* endpoints. WARNING, run_id is deprecated. Use run_ref instead.
		 * @param {Array<string>} expand List of objects to be returned in full (i.e. expanded) - options include: All, VehiclePosition, VehicleDescriptor, or None. Default is None.
		 * @param {Date} date_utc Date of the request. (optional - defaults to now)
		 * @param {boolean} include_geopath Indicates if geopath data will be returned (default = false)
		 * @param {string} token Please ignore
		 * @param {string} devid Your developer id
		 * @param {string} signature Authentication signature for request
		 * @return {V3RunsResponse} All trip/service run details for the specified run_ref.
		 */
		Runs_ForRun(run_ref: string, expand: Array<string>, date_utc: Date | null | undefined, include_geopath: boolean | null | undefined, token: string | null | undefined, devid: string | null | undefined, signature: string | null | undefined): Observable<V3RunsResponse> {
			return this.http.get<V3RunsResponse>(this.baseUri + 'v3/runs/' + (run_ref == null ? '' : encodeURIComponent(run_ref)) + '&' + expand.map(z => `expand=${encodeURIComponent(z)}`).join('&') + '&date_utc=' + date_utc?.toISOString() + '&include_geopath=' + include_geopath + '&token=' + (token == null ? '' : encodeURIComponent(token)) + '&devid=' + (devid == null ? '' : encodeURIComponent(devid)) + '&signature=' + (signature == null ? '' : encodeURIComponent(signature)), {});
		}

		/**
		 * View the trip/service run for a specific run_ref and route type
		 * Get v3/runs/{run_ref}/route_type/{route_type}
		 * @param {string} run_ref The run_ref is the identifier of a run as returned by the departures/* and runs/* endpoints. WARNING, run_id is deprecated. Use run_ref instead.
		 * @param {Runs_ForRunAndRouteTypeRoute_type} route_type Number identifying transport mode; values returned via RouteTypes API
		 * @param {Array<string>} expand List of objects to be returned in full (i.e. expanded) - options include: All, VehiclePosition, VehicleDescriptor, or None. Default is None.
		 * @param {Date} date_utc Date of the request. (optional - defaults to now)
		 * @param {boolean} include_geopath Indicates if geopath data will be returned (default = false)
		 * @param {string} token Please ignore
		 * @param {string} devid Your developer id
		 * @param {string} signature Authentication signature for request
		 * @return {V3RunResponse} The trip/service run details for the run_ref and route type specified.
		 */
		Runs_ForRunAndRouteType(run_ref: string, route_type: Runs_ForRunAndRouteTypeRoute_type, expand: Array<string>, date_utc: Date | null | undefined, include_geopath: boolean | null | undefined, token: string | null | undefined, devid: string | null | undefined, signature: string | null | undefined): Observable<V3RunResponse> {
			return this.http.get<V3RunResponse>(this.baseUri + 'v3/runs/' + (run_ref == null ? '' : encodeURIComponent(run_ref)) + '/route_type/' + route_type + '&' + expand.map(z => `expand=${encodeURIComponent(z)}`).join('&') + '&date_utc=' + date_utc?.toISOString() + '&include_geopath=' + include_geopath + '&token=' + (token == null ? '' : encodeURIComponent(token)) + '&devid=' + (devid == null ? '' : encodeURIComponent(devid)) + '&signature=' + (signature == null ? '' : encodeURIComponent(signature)), {});
		}

		/**
		 * View stops, routes and myki ticket outlets that match the search term
		 * Get v3/search/{search_term}
		 * @param {string} search_term Search text (note: if search text is numeric and/or less than 3 characters, the API will only return routes)
		 * @param {Array<V3StopDepartureRequestRoute_type>} route_types Filter by route_type; values returned via RouteTypes API (note: stops and routes are ordered by route_types specified)
		 * @param {number} latitude Filter by geographic coordinate of latitude
		 * @param {number} longitude Filter by geographic coordinate of longitude
		 * @param {number} max_distance Filter by maximum distance (in metres) from location specified via latitude and longitude parameters
		 * @param {boolean} include_addresses Placeholder for future development; currently unavailable
		 * @param {boolean} include_outlets Indicates if outlets will be returned in response (default = true)
		 * @param {boolean} match_stop_by_suburb Indicates whether to find stops by suburbs in the search term (default = true)
		 * @param {boolean} match_route_by_suburb Indicates whether to find routes by suburbs in the search term (default = true)
		 * @param {boolean} match_stop_by_gtfs_stop_id Indicates whether to search for stops according to a metlink stop ID (default = false)
		 * @param {string} token Please ignore
		 * @param {string} devid Your developer id
		 * @param {string} signature Authentication signature for request
		 * @return {V3SearchResult} Stops, routes and myki ticket outlets that contain the search term (note: stops and routes are ordered by route_type by default).
		 */
		Search_Search(search_term: string, route_types: Array<V3StopDepartureRequestRoute_type> | null | undefined, latitude: number | null | undefined, longitude: number | null | undefined, max_distance: number | null | undefined, include_addresses: boolean | null | undefined, include_outlets: boolean | null | undefined, match_stop_by_suburb: boolean | null | undefined, match_route_by_suburb: boolean | null | undefined, match_stop_by_gtfs_stop_id: boolean | null | undefined, token: string | null | undefined, devid: string | null | undefined, signature: string | null | undefined): Observable<V3SearchResult> {
			return this.http.get<V3SearchResult>(this.baseUri + 'v3/search/' + (search_term == null ? '' : encodeURIComponent(search_term)) + '&' + route_types?.map(z => `route_types=${z}`).join('&') + '&latitude=' + latitude + '&longitude=' + longitude + '&max_distance=' + max_distance + '&include_addresses=' + include_addresses + '&include_outlets=' + include_outlets + '&match_stop_by_suburb=' + match_stop_by_suburb + '&match_route_by_suburb=' + match_route_by_suburb + '&match_stop_by_gtfs_stop_id=' + match_stop_by_gtfs_stop_id + '&token=' + (token == null ? '' : encodeURIComponent(token)) + '&devid=' + (devid == null ? '' : encodeURIComponent(devid)) + '&signature=' + (signature == null ? '' : encodeURIComponent(signature)), {});
		}

		/**
		 * View all stops near a specific location
		 * Get v3/stops/location/{latitude},{longitude}
		 * @param {number} latitude Geographic coordinate of latitude
		 * @param {number} longitude Geographic coordinate of longitude
		 * @param {Array<V3StopDepartureRequestRoute_type>} route_types Filter by route_type; values returned via RouteTypes API
		 * @param {number} max_results Maximum number of results returned (default = 30)
		 * @param {number} max_distance Filter by maximum distance (in metres) from location specified via latitude and longitude parameters (default = 300)
		 * @param {boolean} stop_disruptions Indicates if stop disruption information will be returned (default = false)
		 * @param {string} token Please ignore
		 * @param {string} devid Your developer id
		 * @param {string} signature Authentication signature for request
		 * @return {V3StopsByDistanceResponse} All stops near the specified location.
		 */
		Stops_StopsByGeolocation(latitude: number, longitude: number, route_types: Array<V3StopDepartureRequestRoute_type> | null | undefined, max_results: number | null | undefined, max_distance: number | null | undefined, stop_disruptions: boolean | null | undefined, token: string | null | undefined, devid: string | null | undefined, signature: string | null | undefined): Observable<V3StopsByDistanceResponse> {
			return this.http.get<V3StopsByDistanceResponse>(this.baseUri + 'v3/stops/location/' + latitude + ',' + longitude + '?' + route_types?.map(z => `route_types=${z}`).join('&') + '&max_results=' + max_results + '&max_distance=' + max_distance + '&stop_disruptions=' + stop_disruptions + '&token=' + (token == null ? '' : encodeURIComponent(token)) + '&devid=' + (devid == null ? '' : encodeURIComponent(devid)) + '&signature=' + (signature == null ? '' : encodeURIComponent(signature)), {});
		}

		/**
		 * View all stops on a specific route
		 * Get v3/stops/route/{route_id}/route_type/{route_type}
		 * @param {number} route_id Identifier of route; values returned by Routes API - v3/routes
		 * @param {Stops_StopsForRouteRoute_type} route_type Number identifying transport mode; values returned via RouteTypes API
		 * @param {number} direction_id An optional direction; values returned by Directions API. When this is set, stop sequence information is returned in the response.
		 * @param {boolean} stop_disruptions Indicates if stop disruption information will be returned (default = false)
		 * @param {boolean} include_geopath Indicates if geopath data will be returned (default = false)
		 * @param {Date} geopath_utc Filter geopaths by date (ISO 8601 UTC format) (default = current date)
		 * @param {string} token Please ignore
		 * @param {string} devid Your developer id
		 * @param {string} signature Authentication signature for request
		 * @return {V3StopsOnRouteResponse} All stops on the specified route.
		 */
		Stops_StopsForRoute(route_id: number, route_type: Stops_StopsForRouteRoute_type, direction_id: number | null | undefined, stop_disruptions: boolean | null | undefined, include_geopath: boolean | null | undefined, geopath_utc: Date | null | undefined, token: string | null | undefined, devid: string | null | undefined, signature: string | null | undefined): Observable<V3StopsOnRouteResponse> {
			return this.http.get<V3StopsOnRouteResponse>(this.baseUri + 'v3/stops/route/' + route_id + '/route_type/' + route_type + '?direction_id=' + direction_id + '&stop_disruptions=' + stop_disruptions + '&include_geopath=' + include_geopath + '&geopath_utc=' + geopath_utc?.toISOString() + '&token=' + (token == null ? '' : encodeURIComponent(token)) + '&devid=' + (devid == null ? '' : encodeURIComponent(devid)) + '&signature=' + (signature == null ? '' : encodeURIComponent(signature)), {});
		}

		/**
		 * View facilities at a specific stop (Metro and V/Line stations only)
		 * Get v3/stops/{stop_id}/route_type/{route_type}
		 * @param {number} stop_id Identifier of stop; values returned by Stops API
		 * @param {Stops_StopDetailsRoute_type} route_type Number identifying transport mode; values returned via RouteTypes API
		 * @param {boolean} stop_location Indicates if stop location information will be returned (default = false)
		 * @param {boolean} stop_amenities Indicates if stop amenity information will be returned (default = false)
		 * @param {boolean} stop_accessibility Indicates if stop accessibility information will be returned (default = false)
		 * @param {boolean} stop_contact Indicates if stop contact information will be returned (default = false)
		 * @param {boolean} stop_ticket Indicates if stop ticket information will be returned (default = false)
		 * @param {boolean} gtfs Incdicates whether the stop_id is a GTFS ID or not
		 * @param {boolean} stop_staffing Indicates if stop staffing information will be returned (default = false)
		 * @param {boolean} stop_disruptions Indicates if stop disruption information will be returned (default = false)
		 * @param {string} token Please ignore
		 * @param {string} devid Your developer id
		 * @param {string} signature Authentication signature for request
		 * @return {V3StopResponse} Stop location, amenity and accessibility facility information for the specified stop (metropolitan and V/Line stations only).
		 */
		Stops_StopDetails(stop_id: number, route_type: Stops_StopDetailsRoute_type, stop_location: boolean | null | undefined, stop_amenities: boolean | null | undefined, stop_accessibility: boolean | null | undefined, stop_contact: boolean | null | undefined, stop_ticket: boolean | null | undefined, gtfs: boolean | null | undefined, stop_staffing: boolean | null | undefined, stop_disruptions: boolean | null | undefined, token: string | null | undefined, devid: string | null | undefined, signature: string | null | undefined): Observable<V3StopResponse> {
			return this.http.get<V3StopResponse>(this.baseUri + 'v3/stops/' + stop_id + '/route_type/' + route_type + '?stop_location=' + stop_location + '&stop_amenities=' + stop_amenities + '&stop_accessibility=' + stop_accessibility + '&stop_contact=' + stop_contact + '&stop_ticket=' + stop_ticket + '&gtfs=' + gtfs + '&stop_staffing=' + stop_staffing + '&stop_disruptions=' + stop_disruptions + '&token=' + (token == null ? '' : encodeURIComponent(token)) + '&devid=' + (devid == null ? '' : encodeURIComponent(devid)) + '&signature=' + (signature == null ? '' : encodeURIComponent(signature)), {});
		}
	}

	export enum Departures_GetForStopRoute_type { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4 }

	export enum Departures_GetForStopAndRouteRoute_type { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4 }

	export enum Directions_ForDirectionAndTypeRoute_type { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4 }

	export enum Disruptions_GetAllDisruptionsDisruption_status { current = 0, planned = 1 }

	export enum Patterns_GetPatternByRunRoute_type { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4 }

	export enum Runs_ForRouteAndRouteTypeRoute_type { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4 }

	export enum Runs_ForRunAndRouteTypeRoute_type { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4 }

	export enum Stops_StopsForRouteRoute_type { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4 }

	export enum Stops_StopDetailsRoute_type { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4 }

}

