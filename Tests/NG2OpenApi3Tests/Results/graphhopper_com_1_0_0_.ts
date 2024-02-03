import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Activity {

		/** Address of activity */
		address?: ResponseAddress;

		/** Arrival date time with offset like this 1970-01-01T01:00+01:00. If you do not use time-dependent optimization, this is `null`. */
		arr_date_time?: Date | null;

		/** Arrival time at this activity in seconds. If type is `start`, this is not available (since it makes no sense to have `arr_time` at start). However, `end_time` is available and actually means \"departure time\" at start location. It is important to note that `arr_time` does not necessarily mean \"start of underlying activity\", it solely means arrival time at activity location. If this activity has no time windows and if there are no further preparation times, `arr_time` is equal to activity start time. */
		arr_time?: number | null;

		/** cumulated distance from start to this activity in m */
		distance?: number | null;

		/** cumulated driving time from start to this driver activity in seconds */
		driving_time?: number | null;

		/** End date time with offset like this 1970-01-01T01:00+01:00. If you do not use time-dependent optimization, this is `null`. */
		end_date_time?: Date | null;

		/** End time of and thus departure time at this activity. If type is `end`, this is not available (since it makes no sense to have an `end_time` at end) `end_time` at each activity is equal to the departure time at the activity location. */
		end_time?: number | null;

		/** Id referring to the underlying service or shipment, i.e. the shipment or service this activity belongs to */
		id?: string | null;

		/** Array with size/capacity dimensions after this activity */
		load_after?: Array<number>;

		/** Array with size/capacity dimensions before this activity */
		load_before?: Array<number>;

		/** Id that refers to address */
		location_id?: string | null;

		/** preparation time at this activity in seconds */
		preparation_time?: number | null;

		/** type of activity */
		type?: ActivityType | null;

		/** Waiting time at this activity in seconds. A waiting time can occur if the activity has at least one time window. If `arr_time` < `time_window.earliest` a waiting time of `time_window_earliest` - `arr_time` occurs. */
		waiting_time?: number | null;
	}
	export interface ActivityFormProperties {

		/** Arrival date time with offset like this 1970-01-01T01:00+01:00. If you do not use time-dependent optimization, this is `null`. */
		arr_date_time: FormControl<Date | null | undefined>,

		/** Arrival time at this activity in seconds. If type is `start`, this is not available (since it makes no sense to have `arr_time` at start). However, `end_time` is available and actually means \"departure time\" at start location. It is important to note that `arr_time` does not necessarily mean \"start of underlying activity\", it solely means arrival time at activity location. If this activity has no time windows and if there are no further preparation times, `arr_time` is equal to activity start time. */
		arr_time: FormControl<number | null | undefined>,

		/** cumulated distance from start to this activity in m */
		distance: FormControl<number | null | undefined>,

		/** cumulated driving time from start to this driver activity in seconds */
		driving_time: FormControl<number | null | undefined>,

		/** End date time with offset like this 1970-01-01T01:00+01:00. If you do not use time-dependent optimization, this is `null`. */
		end_date_time: FormControl<Date | null | undefined>,

		/** End time of and thus departure time at this activity. If type is `end`, this is not available (since it makes no sense to have an `end_time` at end) `end_time` at each activity is equal to the departure time at the activity location. */
		end_time: FormControl<number | null | undefined>,

		/** Id referring to the underlying service or shipment, i.e. the shipment or service this activity belongs to */
		id: FormControl<string | null | undefined>,

		/** Id that refers to address */
		location_id: FormControl<string | null | undefined>,

		/** preparation time at this activity in seconds */
		preparation_time: FormControl<number | null | undefined>,

		/** type of activity */
		type: FormControl<ActivityType | null | undefined>,

		/** Waiting time at this activity in seconds. A waiting time can occur if the activity has at least one time window. If `arr_time` < `time_window.earliest` a waiting time of `time_window_earliest` - `arr_time` occurs. */
		waiting_time: FormControl<number | null | undefined>,
	}
	export function CreateActivityFormGroup() {
		return new FormGroup<ActivityFormProperties>({
			arr_date_time: new FormControl<Date | null | undefined>(undefined),
			arr_time: new FormControl<number | null | undefined>(undefined),
			distance: new FormControl<number | null | undefined>(undefined),
			driving_time: new FormControl<number | null | undefined>(undefined),
			end_date_time: new FormControl<Date | null | undefined>(undefined),
			end_time: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location_id: new FormControl<string | null | undefined>(undefined),
			preparation_time: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<ActivityType | null | undefined>(undefined),
			waiting_time: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Address of activity */
	export interface ResponseAddress {

		/** Latitude of location. */
		lat?: number | null;

		/** Specifies the id of the location. */
		location_id?: string | null;

		/** Longitude of location. */
		lon?: number | null;

		/** Name of location. */
		name?: string | null;

		/** Access point to the (road)network. It is only available if `return_snapped_waypoints` is true (be default it is false). */
		snapped_waypoint?: SnappedWaypoint;

		/** Optional parameter. Specifies a hint for each address to better snap the coordinates (lon,lat) to road network. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up. */
		street_hint?: string | null;
	}

	/** Address of activity */
	export interface ResponseAddressFormProperties {

		/** Latitude of location. */
		lat: FormControl<number | null | undefined>,

		/** Specifies the id of the location. */
		location_id: FormControl<string | null | undefined>,

		/** Longitude of location. */
		lon: FormControl<number | null | undefined>,

		/** Name of location. */
		name: FormControl<string | null | undefined>,

		/** Optional parameter. Specifies a hint for each address to better snap the coordinates (lon,lat) to road network. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up. */
		street_hint: FormControl<string | null | undefined>,
	}
	export function CreateResponseAddressFormGroup() {
		return new FormGroup<ResponseAddressFormProperties>({
			lat: new FormControl<number | null | undefined>(undefined),
			location_id: new FormControl<string | null | undefined>(undefined),
			lon: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			street_hint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Access point to the (road)network. It is only available if `return_snapped_waypoints` is true (be default it is false). */
	export interface SnappedWaypoint {

		/** Latitude of location. */
		lat?: number | null;

		/** Longitude of location. */
		lon?: number | null;
	}

	/** Access point to the (road)network. It is only available if `return_snapped_waypoints` is true (be default it is false). */
	export interface SnappedWaypointFormProperties {

		/** Latitude of location. */
		lat: FormControl<number | null | undefined>,

		/** Longitude of location. */
		lon: FormControl<number | null | undefined>,
	}
	export function CreateSnappedWaypointFormGroup() {
		return new FormGroup<SnappedWaypointFormProperties>({
			lat: new FormControl<number | null | undefined>(undefined),
			lon: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ActivityType { start = 'start', end = 'end', service = 'service', pickupShipment = 'pickupShipment', deliverShipment = 'deliverShipment', pickup = 'pickup', delivery = 'delivery', break = 'break' }

	export interface Address {

		/** Optional parameter. Specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. Only supported for motor vehicles and OpenStreetMap. */
		curbside?: AddressCurbside | null;

		/**
		 * Latitude of location.
		 * Required
		 */
		lat: number;

		/**
		 * Specifies the id of the location.
		 * Required
		 */
		location_id: string;

		/**
		 * Longitude of location.
		 * Required
		 */
		lon: number;

		/** Name of location. */
		name?: string | null;

		/** Optional parameter. Specifies a hint for each address to better snap the coordinates (lon,lat) to road network. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up. */
		street_hint?: string | null;
	}
	export interface AddressFormProperties {

		/** Optional parameter. Specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. Only supported for motor vehicles and OpenStreetMap. */
		curbside: FormControl<AddressCurbside | null | undefined>,

		/**
		 * Latitude of location.
		 * Required
		 */
		lat: FormControl<number | null | undefined>,

		/**
		 * Specifies the id of the location.
		 * Required
		 */
		location_id: FormControl<string | null | undefined>,

		/**
		 * Longitude of location.
		 * Required
		 */
		lon: FormControl<number | null | undefined>,

		/** Name of location. */
		name: FormControl<string | null | undefined>,

		/** Optional parameter. Specifies a hint for each address to better snap the coordinates (lon,lat) to road network. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up. */
		street_hint: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			curbside: new FormControl<AddressCurbside | null | undefined>(undefined),
			lat: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			location_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lon: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			street_hint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AddressCurbside { right = 'right', left = 'left', any = 'any' }


	/** Use `objectives` instead. */
	export interface Algorithm {
		objective?: AlgorithmObjective | null;
		problem_type?: AlgorithmProblem_type | null;
	}

	/** Use `objectives` instead. */
	export interface AlgorithmFormProperties {
		objective: FormControl<AlgorithmObjective | null | undefined>,
		problem_type: FormControl<AlgorithmProblem_type | null | undefined>,
	}
	export function CreateAlgorithmFormGroup() {
		return new FormGroup<AlgorithmFormProperties>({
			objective: new FormControl<AlgorithmObjective | null | undefined>(undefined),
			problem_type: new FormControl<AlgorithmProblem_type | null | undefined>(undefined),
		});

	}

	export enum AlgorithmObjective { transport_time = 'transport_time', completion_time = 'completion_time' }

	export enum AlgorithmProblem_type { min = 'min', 'min-max' = 'min-max' }

	export interface BadRequest {

		/** Optional error information. */
		hints?: Array<ErrorMessage>;

		/** Short error message */
		message?: string | null;

		/** status */
		status?: string | null;
	}
	export interface BadRequestFormProperties {

		/** Short error message */
		message: FormControl<string | null | undefined>,

		/** status */
		status: FormControl<string | null | undefined>,
	}
	export function CreateBadRequestFormGroup() {
		return new FormGroup<BadRequestFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorMessage {

		/** Details */
		details?: string | null;

		/** error message */
		message?: string | null;
	}
	export interface ErrorMessageFormProperties {

		/** Details */
		details: FormControl<string | null | undefined>,

		/** error message */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorMessageFormGroup() {
		return new FormGroup<ErrorMessageFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Cluster {

		/** Array of customer ids assigned to this specific cluster */
		ids?: Array<string>;

		/** Cluster size */
		quantity?: string | null;
	}
	export interface ClusterFormProperties {

		/** Cluster size */
		quantity: FormControl<string | null | undefined>,
	}
	export function CreateClusterFormGroup() {
		return new FormGroup<ClusterFormProperties>({
			quantity: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClusterConfiguration {
		clustering?: ClusterConfigurationClustering;

		/** Specifies the response format. You can either choose `geojson` or `json`. */
		response_type?: string | null;
		routing?: ClusterConfigurationRouting;
	}
	export interface ClusterConfigurationFormProperties {

		/** Specifies the response format. You can either choose `geojson` or `json`. */
		response_type: FormControl<string | null | undefined>,
	}
	export function CreateClusterConfigurationFormGroup() {
		return new FormGroup<ClusterConfigurationFormProperties>({
			response_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClusterConfigurationClustering {

		/** Specifies max. quantity in a cluster */
		max_quantity?: string | null;

		/** Specifies min. quantity in a cluster */
		min_quantity?: string | null;

		/** Specifies the number of clusters */
		num_clusters?: string | null;
	}
	export interface ClusterConfigurationClusteringFormProperties {

		/** Specifies max. quantity in a cluster */
		max_quantity: FormControl<string | null | undefined>,

		/** Specifies min. quantity in a cluster */
		min_quantity: FormControl<string | null | undefined>,

		/** Specifies the number of clusters */
		num_clusters: FormControl<string | null | undefined>,
	}
	export function CreateClusterConfigurationClusteringFormGroup() {
		return new FormGroup<ClusterConfigurationClusteringFormProperties>({
			max_quantity: new FormControl<string | null | undefined>(undefined),
			min_quantity: new FormControl<string | null | undefined>(undefined),
			num_clusters: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClusterConfigurationRouting {

		/** Cost per meter (travel distance) */
		cost_per_meter?: number | null;

		/** Cost per second (travel time) */
		cost_per_second?: number | null;

		/** The routing profile for which the travel times and distances should be calculated. Other profiles are listed [here](#section/Map-Data-and-Routing-Profiles/OpenStreetMap) */
		profile?: string | null;
	}
	export interface ClusterConfigurationRoutingFormProperties {

		/** Cost per meter (travel distance) */
		cost_per_meter: FormControl<number | null | undefined>,

		/** Cost per second (travel time) */
		cost_per_second: FormControl<number | null | undefined>,

		/** The routing profile for which the travel times and distances should be calculated. Other profiles are listed [here](#section/Map-Data-and-Routing-Profiles/OpenStreetMap) */
		profile: FormControl<string | null | undefined>,
	}
	export function CreateClusterConfigurationRoutingFormGroup() {
		return new FormGroup<ClusterConfigurationRoutingFormProperties>({
			cost_per_meter: new FormControl<number | null | undefined>(undefined),
			cost_per_second: new FormControl<number | null | undefined>(undefined),
			profile: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClusterCustomer {
		address?: ClusterCustomerAddress;

		/** id of customer */
		id?: string | null;

		/** demand of customer */
		quantity?: string | null;
	}
	export interface ClusterCustomerFormProperties {

		/** id of customer */
		id: FormControl<string | null | undefined>,

		/** demand of customer */
		quantity: FormControl<string | null | undefined>,
	}
	export function CreateClusterCustomerFormGroup() {
		return new FormGroup<ClusterCustomerFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClusterCustomerAddress {

		/** Latitude */
		lat?: number | null;

		/** Longitude */
		lon?: number | null;

		/** Optional parameter. Specifies a hint for each address to better snap the coordinates (lon,lat) to road network. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up. */
		street_hint?: string | null;
	}
	export interface ClusterCustomerAddressFormProperties {

		/** Latitude */
		lat: FormControl<number | null | undefined>,

		/** Longitude */
		lon: FormControl<number | null | undefined>,

		/** Optional parameter. Specifies a hint for each address to better snap the coordinates (lon,lat) to road network. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up. */
		street_hint: FormControl<string | null | undefined>,
	}
	export function CreateClusterCustomerAddressFormGroup() {
		return new FormGroup<ClusterCustomerAddressFormProperties>({
			lat: new FormControl<number | null | undefined>(undefined),
			lon: new FormControl<number | null | undefined>(undefined),
			street_hint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClusterRequest {
		configuration?: ClusterConfiguration;
		customers?: Array<ClusterCustomer>;
	}
	export interface ClusterRequestFormProperties {
	}
	export function CreateClusterRequestFormGroup() {
		return new FormGroup<ClusterRequestFormProperties>({
		});

	}

	export interface ClusterResponse {
		clusters?: Array<Cluster>;
		copyrights?: Array<string>;
		processing_time?: number | null;

		/** Indicates the current status of the job */
		status?: ClusterResponseStatus | null;
		waiting_time_in_queue?: number | null;
	}
	export interface ClusterResponseFormProperties {
		processing_time: FormControl<number | null | undefined>,

		/** Indicates the current status of the job */
		status: FormControl<ClusterResponseStatus | null | undefined>,
		waiting_time_in_queue: FormControl<number | null | undefined>,
	}
	export function CreateClusterResponseFormGroup() {
		return new FormGroup<ClusterResponseFormProperties>({
			processing_time: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<ClusterResponseStatus | null | undefined>(undefined),
			waiting_time_in_queue: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ClusterResponseStatus { waiting_in_queue = 'waiting_in_queue', processing = 'processing', finished = 'finished' }


	/** Specifies general configurations that are taken into account when solving the vehicle routing problem. */
	export interface Configuration {

		/** This contains all routing specific configurations. */
		routing?: Routing;
	}

	/** Specifies general configurations that are taken into account when solving the vehicle routing problem. */
	export interface ConfigurationFormProperties {
	}
	export function CreateConfigurationFormGroup() {
		return new FormGroup<ConfigurationFormProperties>({
		});

	}


	/** This contains all routing specific configurations. */
	export interface Routing {

		/** It lets you specify whether the API should provide you with route geometries for vehicle routes or not. Thus, you do not need to do extra routing to get the polyline for each route. */
		calc_points?: boolean | null;

		/** indicates whether historical traffic information should be considered */
		consider_traffic?: boolean | null;

		/** In some cases curbside constraints cannot be fulfilled. For example in one-way streets you cannot arrive at a building that is on the left side of the street such that the building is to the right of you (unless you drove the one-way street the wrong/illegal way). You can set the `curbside_strictness` to `soft` to ignore the curbside constraint in such cases or set it to `strict` to get an error response instead. You can also set it to `ignore` to ignore all curbside constraints (this is useful to compare the results with and without constraints without modifying every single address). */
		curbside_strictness?: RoutingCurbside_strictness | null;

		/** indicates whether matrix calculation should fail fast when points cannot be connected */
		fail_fast?: boolean | null;

		/** specifies the data provider, read more about it [here](#section/Map-Data-and-Routing-Profiles). */
		network_data_provider?: RoutingNetwork_data_provider | null;

		/** Indicates whether a solution includes snapped waypoints. In contrary to the address coordinate a snapped waypoint is the access point to the (road) network. */
		return_snapped_waypoints?: boolean | null;

		/** Prevents snapping locations to road links of specified road types, e.g. to motorway. */
		snap_preventions?: Array<string>;
	}

	/** This contains all routing specific configurations. */
	export interface RoutingFormProperties {

		/** It lets you specify whether the API should provide you with route geometries for vehicle routes or not. Thus, you do not need to do extra routing to get the polyline for each route. */
		calc_points: FormControl<boolean | null | undefined>,

		/** indicates whether historical traffic information should be considered */
		consider_traffic: FormControl<boolean | null | undefined>,

		/** In some cases curbside constraints cannot be fulfilled. For example in one-way streets you cannot arrive at a building that is on the left side of the street such that the building is to the right of you (unless you drove the one-way street the wrong/illegal way). You can set the `curbside_strictness` to `soft` to ignore the curbside constraint in such cases or set it to `strict` to get an error response instead. You can also set it to `ignore` to ignore all curbside constraints (this is useful to compare the results with and without constraints without modifying every single address). */
		curbside_strictness: FormControl<RoutingCurbside_strictness | null | undefined>,

		/** indicates whether matrix calculation should fail fast when points cannot be connected */
		fail_fast: FormControl<boolean | null | undefined>,

		/** specifies the data provider, read more about it [here](#section/Map-Data-and-Routing-Profiles). */
		network_data_provider: FormControl<RoutingNetwork_data_provider | null | undefined>,

		/** Indicates whether a solution includes snapped waypoints. In contrary to the address coordinate a snapped waypoint is the access point to the (road) network. */
		return_snapped_waypoints: FormControl<boolean | null | undefined>,
	}
	export function CreateRoutingFormGroup() {
		return new FormGroup<RoutingFormProperties>({
			calc_points: new FormControl<boolean | null | undefined>(undefined),
			consider_traffic: new FormControl<boolean | null | undefined>(undefined),
			curbside_strictness: new FormControl<RoutingCurbside_strictness | null | undefined>(undefined),
			fail_fast: new FormControl<boolean | null | undefined>(undefined),
			network_data_provider: new FormControl<RoutingNetwork_data_provider | null | undefined>(undefined),
			return_snapped_waypoints: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum RoutingCurbside_strictness { ignore = 'ignore', soft = 'soft', strict = 'strict' }

	export enum RoutingNetwork_data_provider { openstreetmap = 'openstreetmap', tomtom = 'tomtom' }

	export interface CostMatrix {

		/** JSON data of matrix response */
		data?: CostMatrixData;
		location_ids?: Array<string>;

		/** vehicle profile or empty if catch all fallback */
		profile?: string | null;

		/** type of cost matrix, currently default or google are supported */
		type?: CostMatrixType | null;
	}
	export interface CostMatrixFormProperties {

		/** vehicle profile or empty if catch all fallback */
		profile: FormControl<string | null | undefined>,

		/** type of cost matrix, currently default or google are supported */
		type: FormControl<CostMatrixType | null | undefined>,
	}
	export function CreateCostMatrixFormGroup() {
		return new FormGroup<CostMatrixFormProperties>({
			profile: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CostMatrixType | null | undefined>(undefined),
		});

	}

	export interface CostMatrixData {

		/** Minimum items: 1 */
		distances?: Array<string>;

		/** Additional information for your request */
		info?: CostMatrixDataInfo;

		/** Minimum items: 1 */
		times?: Array<string>;
	}
	export interface CostMatrixDataFormProperties {
	}
	export function CreateCostMatrixDataFormGroup() {
		return new FormGroup<CostMatrixDataFormProperties>({
		});

	}

	export interface CostMatrixDataInfo {
		copyrights?: Array<string>;
		took?: number | null;
	}
	export interface CostMatrixDataInfoFormProperties {
		took: FormControl<number | null | undefined>,
	}
	export function CreateCostMatrixDataInfoFormGroup() {
		return new FormGroup<CostMatrixDataInfoFormProperties>({
			took: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CostMatrixType { default = 'default', google = 'google' }

	export interface Detail {

		/**
		 * Reason code
		 * Code   |  Reason
		 * :------|:---------
		 * 1 | cannot serve required skill
		 * 2 | cannot be visited within time window
		 * 3 | does not fit into any vehicle due to capacity
		 * 4 | cannot be assigned due to max distance constraint of vehicles
		 * 21 | could not be assigned due to relation constraint
		 * 22 | could not be assigned due to allowed vehicle constraint
		 * 23 | could not be assigned due to max-time-in-vehicle constraint
		 * 24 | driver does not need a break
		 * 25 | could not be assigned due to disallowed vehicle constraint
		 * 26 | could not be assigned due to max drive time constraint
		 * 27 | could not be assigned due to max job constraint
		 * 28 | could not be assigned due to max activity constraint
		 * 50 | underlying location cannot be accessed over road network by at least one vehicle
		 */
		code?: number | null;

		/** Id of unassigned service/shipment */
		id?: string | null;

		/** Human readable reason as listed above */
		reason?: string | null;
	}
	export interface DetailFormProperties {

		/**
		 * Reason code
		 * Code   |  Reason
		 * :------|:---------
		 * 1 | cannot serve required skill
		 * 2 | cannot be visited within time window
		 * 3 | does not fit into any vehicle due to capacity
		 * 4 | cannot be assigned due to max distance constraint of vehicles
		 * 21 | could not be assigned due to relation constraint
		 * 22 | could not be assigned due to allowed vehicle constraint
		 * 23 | could not be assigned due to max-time-in-vehicle constraint
		 * 24 | driver does not need a break
		 * 25 | could not be assigned due to disallowed vehicle constraint
		 * 26 | could not be assigned due to max drive time constraint
		 * 27 | could not be assigned due to max job constraint
		 * 28 | could not be assigned due to max activity constraint
		 * 50 | underlying location cannot be accessed over road network by at least one vehicle
		 */
		code: FormControl<number | null | undefined>,

		/** Id of unassigned service/shipment */
		id: FormControl<string | null | undefined>,

		/** Human readable reason as listed above */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateDetailFormGroup() {
		return new FormGroup<DetailFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DriveTimeBreak {

		/**
		 * Specifies the duration of the break in seconds.
		 * Required
		 */
		duration: number;

		/** Specifies the initial (current) driving time of a driver to allow dynamic adaptations in seconds. */
		initial_driving_time?: number | null;

		/**
		 * Specifies the max driving time (in a row) without break in seconds.
		 * Required
		 */
		max_driving_time: number;

		/** Array specifying how a break duration (in seconds) can be split into several smaller breaks */
		possible_split?: Array<number>;
	}
	export interface DriveTimeBreakFormProperties {

		/**
		 * Specifies the duration of the break in seconds.
		 * Required
		 */
		duration: FormControl<number | null | undefined>,

		/** Specifies the initial (current) driving time of a driver to allow dynamic adaptations in seconds. */
		initial_driving_time: FormControl<number | null | undefined>,

		/**
		 * Specifies the max driving time (in a row) without break in seconds.
		 * Required
		 */
		max_driving_time: FormControl<number | null | undefined>,
	}
	export function CreateDriveTimeBreakFormGroup() {
		return new FormGroup<DriveTimeBreakFormProperties>({
			duration: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			initial_driving_time: new FormControl<number | null | undefined>(undefined),
			max_driving_time: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GHError {

		/** Optional error information. */
		GHErrorHints?: Array<GHErrorHints>;
		message?: string | null;
	}
	export interface GHErrorFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateGHErrorFormGroup() {
		return new FormGroup<GHErrorFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GHErrorHints {
		message?: string | null;
	}
	export interface GHErrorHintsFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateGHErrorHintsFormGroup() {
		return new FormGroup<GHErrorHintsFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GeocodingLocation {

		/** The city of the address */
		city?: string | null;

		/** The country of the address */
		country?: string | null;

		/** The housenumber of the address */
		housenumber?: string | null;

		/** The name of the entity. Can be a boundary, POI, address, etc */
		name?: string | null;

		/** The OSM ID of the entity */
		osm_id?: string | null;

		/** The OSM key of the entity */
		osm_key?: string | null;

		/** N = node, R = relation, W = way */
		osm_type?: string | null;
		point?: GeocodingPoint;

		/** The postcode of the address */
		postcode?: string | null;

		/** The state of the address */
		state?: string | null;

		/** The street of the address */
		street?: string | null;
	}
	export interface GeocodingLocationFormProperties {

		/** The city of the address */
		city: FormControl<string | null | undefined>,

		/** The country of the address */
		country: FormControl<string | null | undefined>,

		/** The housenumber of the address */
		housenumber: FormControl<string | null | undefined>,

		/** The name of the entity. Can be a boundary, POI, address, etc */
		name: FormControl<string | null | undefined>,

		/** The OSM ID of the entity */
		osm_id: FormControl<string | null | undefined>,

		/** The OSM key of the entity */
		osm_key: FormControl<string | null | undefined>,

		/** N = node, R = relation, W = way */
		osm_type: FormControl<string | null | undefined>,

		/** The postcode of the address */
		postcode: FormControl<string | null | undefined>,

		/** The state of the address */
		state: FormControl<string | null | undefined>,

		/** The street of the address */
		street: FormControl<string | null | undefined>,
	}
	export function CreateGeocodingLocationFormGroup() {
		return new FormGroup<GeocodingLocationFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			housenumber: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			osm_id: new FormControl<string | null | undefined>(undefined),
			osm_key: new FormControl<string | null | undefined>(undefined),
			osm_type: new FormControl<string | null | undefined>(undefined),
			postcode: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GeocodingPoint {

		/** Latitude */
		lat?: number | null;

		/** Longitude */
		lng?: number | null;
	}
	export interface GeocodingPointFormProperties {

		/** Latitude */
		lat: FormControl<number | null | undefined>,

		/** Longitude */
		lng: FormControl<number | null | undefined>,
	}
	export function CreateGeocodingPointFormGroup() {
		return new FormGroup<GeocodingPointFormProperties>({
			lat: new FormControl<number | null | undefined>(undefined),
			lng: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GeocodingResponse {
		hits?: Array<GeocodingLocation>;

		/** in ms */
		took?: string | null;
	}
	export interface GeocodingResponseFormProperties {

		/** in ms */
		took: FormControl<string | null | undefined>,
	}
	export function CreateGeocodingResponseFormGroup() {
		return new FormGroup<GeocodingResponseFormProperties>({
			took: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GroupRelation {

		/**
		 * An array of groups that should be related
		 * Required
		 */
		groups: Array<string>;

		/**
		 * Specifies the type of relation. It must be either of type `in_sequence` or `in_direct_sequence`.
		 * Required
		 */
		type: string;
	}
	export interface GroupRelationFormProperties {

		/**
		 * Specifies the type of relation. It must be either of type `in_sequence` or `in_direct_sequence`.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGroupRelationFormGroup() {
		return new FormGroup<GroupRelationFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about the server and the geographical area that it covers. */
	export interface InfoResponse {

		/**
		 * The bounding box of the geographical area covered by this GraphHopper instance. Format: `"minLon,minLat,maxLon,maxLat"
		 */
		bbox?: string | null;

		/**
		 * The supported features, such as elevation, per vehicle profile.
		 */
		features?: string | null;

		/**
		 * The version of the GraphHopper server that provided this response. This is not related to the API version.
		 */
		version?: string | null;
	}

	/** Information about the server and the geographical area that it covers. */
	export interface InfoResponseFormProperties {

		/**
		 * The bounding box of the geographical area covered by this GraphHopper instance. Format: `"minLon,minLat,maxLon,maxLat"
		 */
		bbox: FormControl<string | null | undefined>,

		/**
		 * The supported features, such as elevation, per vehicle profile.
		 */
		features: FormControl<string | null | undefined>,

		/**
		 * The version of the GraphHopper server that provided this response. This is not related to the API version.
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateInfoResponseFormGroup() {
		return new FormGroup<InfoResponseFormProperties>({
			bbox: new FormControl<string | null | undefined>(undefined),
			features: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InternalErrorMessage {
		code?: number | null;

		/** Details */
		message?: string | null;
	}
	export interface InternalErrorMessageFormProperties {
		code: FormControl<number | null | undefined>,

		/** Details */
		message: FormControl<string | null | undefined>,
	}
	export function CreateInternalErrorMessageFormGroup() {
		return new FormGroup<InternalErrorMessageFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IsochroneResponse {
		copyrights?: Array<string>;

		/**
		 * The list of polygons in GeoJson format. It can be used e.g. in the Leaflet framework:
		 * ```
		 * L.geoJson(json.polygons).addTo(map)
		 * ```
		 * The number of polygon is identical to the specified buckets in the query. Every polygon contains the bucket number in the properties section of the GeoJson.
		 */
		polygons?: Array<IsochroneResponsePolygon>;
	}
	export interface IsochroneResponseFormProperties {
	}
	export function CreateIsochroneResponseFormGroup() {
		return new FormGroup<IsochroneResponseFormProperties>({
		});

	}


	/** A found path */
	export interface IsochroneResponsePolygon {
		geometry?: Polygon;
		properties?: IsochroneResponsePolygonProperties;
		type?: string | null;
	}

	/** A found path */
	export interface IsochroneResponsePolygonFormProperties {
		type: FormControl<string | null | undefined>,
	}
	export function CreateIsochroneResponsePolygonFormGroup() {
		return new FormGroup<IsochroneResponsePolygonFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Polygon {
		coordinates?: Array<string>;
		type?: string | null;
	}
	export interface PolygonFormProperties {
		type: FormControl<string | null | undefined>,
	}
	export function CreatePolygonFormGroup() {
		return new FormGroup<PolygonFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IsochroneResponsePolygonProperties {
		bucket?: number | null;
	}
	export interface IsochroneResponsePolygonPropertiesFormProperties {
		bucket: FormControl<number | null | undefined>,
	}
	export function CreateIsochroneResponsePolygonPropertiesFormGroup() {
		return new FormGroup<IsochroneResponsePolygonPropertiesFormProperties>({
			bucket: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface JobId {

		/** UUID. Unique id for your job/request with which you can fetch your solution */
		job_id?: string | null;
	}
	export interface JobIdFormProperties {

		/** UUID. Unique id for your job/request with which you can fetch your solution */
		job_id: FormControl<string | null | undefined>,
	}
	export function CreateJobIdFormGroup() {
		return new FormGroup<JobIdFormProperties>({
			job_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JobRelation {

		/**
		 * Specifies an array of shipment and/or service ids that are in relation. If you deal with services then you need to use the id of your services in ids. To also consider sequences of the pickups and deliveries of your shipments, you need to use a special ID, i.e. use your shipment id plus the keyword `_pickup` or `_delivery`. If you want to place a service or shipment activity at the beginning of your route, use the special ID `start`. In turn, use `end` to place it at the end of the route.
		 * Required
		 */
		ids: Array<string>;

		/**
		 * Specifies the type of relation. It must be either of type `in_same_route`, `in_sequence` or `in_direct_sequence`.
		 * `in_same_route`: As the name suggest, it enforces the specified services or shipments to be in the same route. It can be specified as follows:
		 * ```json
		 * {
		 * "type": "in_same_route",
		 * "ids": ["serv_i_id","serv_j_id"]
		 * }
		 * ```
		 * This enforces service i to be in the same route as service j no matter which vehicle will be employed. If a specific vehicle (driver) is required to conduct this, just add a `vehicle_id` like this:
		 * ```
		 * {
		 * "type": "in_same_route",
		 * "ids": ["serv_i_id","serv_j_id"],
		 * "vehicle_id": "vehicle1"
		 * }
		 * ```
		 * This not only enforce service i and j to be in the same route, but also makes sure that both services are in the route of `vehicle1`.
		 * *Tip*: This way initial loads and vehicle routes can be modelled. For example, if your vehicles are already on the road and new orders come in, then vehicles can still be rescheduled subject to the orders that have already been assigned to these vehicles.
		 * `in_sequence`: This relation type enforces n jobs to be in sequence. It can be specified as
		 * ```json
		 * {
		 * "type": "in_sequence",
		 * "ids": ["serv_i_id","serv_j_id"]
		 * }
		 * ```
		 * which means that service j need to be in the same route as service i AND it needs to occur somewhere after service i. As described above if a specific vehicle needs to conduct this, just add `vehicle_id`.
		 * `in_direct_sequence`: This enforces n services or shipments to be in direct sequence. It can be specified as
		 * ```json
		 * {
		 * "type": "in_direct_sequence",
		 * "ids": ["serv_i_id","serv_j_id","serv_k_id"]
		 * }
		 * ```
		 * yielding service j to occur directly after service i, and service k to occur directly after service j i.e. in strong order. Again, a vehicle can be assigned a priority by adding a `vehicle_id` to the relation.
		 * *Special IDs*:
		 * If you look at the previous example and you want service i to be the first in the route, use the special ID `start` as follows:
		 * ```json
		 * {
		 * "type": "in_direct_sequence",
		 * "ids": ["start","serv_i_id","serv_j_id","serv_k_id"]
		 * }
		 * ```
		 * Latter enforces the direct sequence of i, j and k at the beginning of the route. If this sequence should be bound to the end of the route, use the special ID `end` like this:
		 * ```json
		 * {
		 * "type": "in_direct_sequence",
		 * "ids": ["serv_i_id","service_j_id","serv_k_id","end"]
		 * }
		 * ```
		 * If you deal with services then you need to use the 'id' of your services in the field 'ids'. To also consider sequences of the pickups and deliveries of your shipments, you need to use a special ID, i.e. use the shipment id plus the keyword `_pickup` or `_delivery`. For example, to ensure that the pickup and delivery of the shipment with the id 'my_shipment' are direct neighbors, you need the following specification:
		 * ```
		 * {
		 * "type": "in_direct_sequence",
		 * "ids": ["my_ship_pickup","my_ship_delivery"]
		 * }
		 * ```
		 * Required
		 */
		type: string;

		/** Id of pre-assigned vehicle, i.e. the vehicle id that is determined to conduct the services and shipments in this relation. */
		vehicle_id?: string | null;
	}
	export interface JobRelationFormProperties {

		/**
		 * Specifies the type of relation. It must be either of type `in_same_route`, `in_sequence` or `in_direct_sequence`.
		 * `in_same_route`: As the name suggest, it enforces the specified services or shipments to be in the same route. It can be specified as follows:
		 * ```json
		 * {
		 * "type": "in_same_route",
		 * "ids": ["serv_i_id","serv_j_id"]
		 * }
		 * ```
		 * This enforces service i to be in the same route as service j no matter which vehicle will be employed. If a specific vehicle (driver) is required to conduct this, just add a `vehicle_id` like this:
		 * ```
		 * {
		 * "type": "in_same_route",
		 * "ids": ["serv_i_id","serv_j_id"],
		 * "vehicle_id": "vehicle1"
		 * }
		 * ```
		 * This not only enforce service i and j to be in the same route, but also makes sure that both services are in the route of `vehicle1`.
		 * *Tip*: This way initial loads and vehicle routes can be modelled. For example, if your vehicles are already on the road and new orders come in, then vehicles can still be rescheduled subject to the orders that have already been assigned to these vehicles.
		 * `in_sequence`: This relation type enforces n jobs to be in sequence. It can be specified as
		 * ```json
		 * {
		 * "type": "in_sequence",
		 * "ids": ["serv_i_id","serv_j_id"]
		 * }
		 * ```
		 * which means that service j need to be in the same route as service i AND it needs to occur somewhere after service i. As described above if a specific vehicle needs to conduct this, just add `vehicle_id`.
		 * `in_direct_sequence`: This enforces n services or shipments to be in direct sequence. It can be specified as
		 * ```json
		 * {
		 * "type": "in_direct_sequence",
		 * "ids": ["serv_i_id","serv_j_id","serv_k_id"]
		 * }
		 * ```
		 * yielding service j to occur directly after service i, and service k to occur directly after service j i.e. in strong order. Again, a vehicle can be assigned a priority by adding a `vehicle_id` to the relation.
		 * *Special IDs*:
		 * If you look at the previous example and you want service i to be the first in the route, use the special ID `start` as follows:
		 * ```json
		 * {
		 * "type": "in_direct_sequence",
		 * "ids": ["start","serv_i_id","serv_j_id","serv_k_id"]
		 * }
		 * ```
		 * Latter enforces the direct sequence of i, j and k at the beginning of the route. If this sequence should be bound to the end of the route, use the special ID `end` like this:
		 * ```json
		 * {
		 * "type": "in_direct_sequence",
		 * "ids": ["serv_i_id","service_j_id","serv_k_id","end"]
		 * }
		 * ```
		 * If you deal with services then you need to use the 'id' of your services in the field 'ids'. To also consider sequences of the pickups and deliveries of your shipments, you need to use a special ID, i.e. use the shipment id plus the keyword `_pickup` or `_delivery`. For example, to ensure that the pickup and delivery of the shipment with the id 'my_shipment' are direct neighbors, you need the following specification:
		 * ```
		 * {
		 * "type": "in_direct_sequence",
		 * "ids": ["my_ship_pickup","my_ship_delivery"]
		 * }
		 * ```
		 * Required
		 */
		type: FormControl<string | null | undefined>,

		/** Id of pre-assigned vehicle, i.e. the vehicle id that is determined to conduct the services and shipments in this relation. */
		vehicle_id: FormControl<string | null | undefined>,
	}
	export function CreateJobRelationFormGroup() {
		return new FormGroup<JobRelationFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vehicle_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LineString {

		/**
		 * A list of coordinate pairs or triples, `[lon,lat]` or `[lon,lat,elevation]`.
		 */
		coordinates?: Array<string>;
		type?: string | null;
	}
	export interface LineStringFormProperties {
		type: FormControl<string | null | undefined>,
	}
	export function CreateLineStringFormGroup() {
		return new FormGroup<LineStringFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MatrixRequest {

		/** Specifies whether or not the matrix calculation should return with an error as soon as possible in case some points cannot be found or some points are not connected. If set to `false` the time/weight/distance matrix will be calculated for all valid points and contain the `null` value for all entries that could not be calculated. The `hint` field of the response will also contain additional information about what went wrong (see its documentation). */
		fail_fast?: boolean | null;

		/** See `curbsides`of symmetrical matrix */
		from_curbsides?: Array<string>;

		/** See `point_hints`of symmetrical matrix */
		from_point_hints?: Array<string>;

		/** The starting points for the routes in an array of `[longitude,latitude]`. For instance, if you want to calculate three routes from point A such as A->1, A->2, A->3 then you have one `from_point` parameter and three `to_point` parameters. */
		from_points?: Array<string>;

		/** Specifies which matrices should be included in the response. Specify one or more of the following options `weights`, `times`, `distances`. The units of the entries of `distances` are meters, of `times` are seconds and of `weights` is arbitrary and it can differ for different vehicles or versions of this API. */
		out_arrays?: Array<string>;

		/** See `snap_preventions` of symmetrical matrix */
		snap_preventions?: Array<string>;

		/** See `curbsides`of symmetrical matrix */
		to_curbsides?: Array<string>;

		/** See `point_hints`of symmetrical matrix */
		to_point_hints?: Array<string>;

		/** The destination points for the routes in an array of `[longitude,latitude]`. */
		to_points?: Array<string>;

		/** Specifies if turn restrictions should be considered. Enabling this option increases the matrix computation time. Only supported for motor vehicles and OpenStreetMap. */
		turn_costs?: boolean | null;
		vehicle?: VehicleProfileId;
	}
	export interface MatrixRequestFormProperties {

		/** Specifies whether or not the matrix calculation should return with an error as soon as possible in case some points cannot be found or some points are not connected. If set to `false` the time/weight/distance matrix will be calculated for all valid points and contain the `null` value for all entries that could not be calculated. The `hint` field of the response will also contain additional information about what went wrong (see its documentation). */
		fail_fast: FormControl<boolean | null | undefined>,

		/** Specifies if turn restrictions should be considered. Enabling this option increases the matrix computation time. Only supported for motor vehicles and OpenStreetMap. */
		turn_costs: FormControl<boolean | null | undefined>,
		vehicle: FormControl<VehicleProfileId | null | undefined>,
	}
	export function CreateMatrixRequestFormGroup() {
		return new FormGroup<MatrixRequestFormProperties>({
			fail_fast: new FormControl<boolean | null | undefined>(undefined),
			turn_costs: new FormControl<boolean | null | undefined>(undefined),
			vehicle: new FormControl<VehicleProfileId | null | undefined>(undefined),
		});

	}

	export enum VehicleProfileId { car = 'car', bike = 'bike', foot = 'foot', hike = 'hike', mtb = 'mtb', racingbike = 'racingbike', scooter = 'scooter', truck = 'truck', small_truck = 'small_truck' }

	export interface MatrixResponse {

		/** The distance matrix for the specified points in the same order as the time matrix. The distances are in meters. If `fail_fast=false` the matrix will contain `null` for connections that could not be found. */
		distances?: Array<string>;

		/** Optional. Additional response data. */
		MatrixResponseHints?: Array<MatrixResponseHints>;

		/** Additional information for your request */
		info?: ResponseInfo;

		/** The time matrix for the specified points in the order [[from1->to1, from1->to2, ...], [from2->to1, from2->to2, ...], ...]. The times are in seconds. If `fail_fast=false` the matrix will contain `null` for connections that could not be found. */
		times?: Array<string>;

		/** The weight matrix for the specified points in the same order as the time matrix. The weights for different vehicles can have a different unit but the weights array is perfectly suited as input for Vehicle Routing Problems as it is currently faster to calculate. If `fail_fast=false` the matrix will contain `null` for connections that could not be found. */
		weights?: Array<string>;
	}
	export interface MatrixResponseFormProperties {
	}
	export function CreateMatrixResponseFormGroup() {
		return new FormGroup<MatrixResponseFormProperties>({
		});

	}

	export interface MatrixResponseHints {

		/** Details of this hint */
		details?: string | null;

		/** Optional. An array of from_point indices of points that could not be found. Will only be added if `fail_fast=false` and some `from_point`s were not found.` */
		invalid_from_points?: Array<number>;

		/** Optional. An array of to_point indices of points that could not be found. Will only be added if `fail_fast=false` and some `to_point`s were not found.` */
		invalid_to_points?: Array<number>;

		/** Short description of this hint */
		message?: string | null;

		/** Optional. An array of two-element arrays representing the from/to_point indices of points for which no connection could be found. Will only be added if `fail_fast=false` and some connections were not found. */
		point_pairs?: Array<string>;
	}
	export interface MatrixResponseHintsFormProperties {

		/** Details of this hint */
		details: FormControl<string | null | undefined>,

		/** Short description of this hint */
		message: FormControl<string | null | undefined>,
	}
	export function CreateMatrixResponseHintsFormGroup() {
		return new FormGroup<MatrixResponseHintsFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional information for your request */
	export interface ResponseInfo {

		/** Attribution according to our documentation is necessary if no white-label option included. */
		copyrights?: Array<string>;
		took?: number | null;
	}

	/** Additional information for your request */
	export interface ResponseInfoFormProperties {
		took: FormControl<number | null | undefined>,
	}
	export function CreateResponseInfoFormGroup() {
		return new FormGroup<ResponseInfoFormProperties>({
			took: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Objective {

		/**
		 * Type of objective function, i.e. `min` or `min-max`.
		 * * `min`: Minimizes the objective value.
		 * * `min-max`: Minimizes the maximum objective value.
		 * For instance, `min` -> `vehicles` minimizes the number of employed vehicles.
		 * `min` -> `completion_time` minimizes the sum of your vehicle routes' completion time.
		 * If you use, for example, `min-max` -> `completion_time`, it minimizes the maximum of your vehicle routes' completion time, i.e. it minimizes the overall makespan.
		 * This only makes sense if you have more than one vehicle. In case of one vehicle, switching from `min` to `min-max` should not have any impact.
		 * If you have more than one vehicle, then the algorithm tries to constantly move stops from one vehicle to another such that
		 * the completion time of longest vehicle route can be further reduced. For example, if you have one vehicle that takes 8 hours
		 * to serve all customers, adding another vehicle (and using `min-max`) might halve the time to serve all customers to 4 hours. However,
		 * this usually comes with higher transport costs.
		 * If you want to minimize `vehicles` first and, second, `completion_time`, you can also combine different objectives like this:
		 * ```json
		 * "objectives" : [
		 * {
		 * "type": "min",
		 * "value": "vehicles"
		 * },
		 * {
		 * "type": "min",
		 * "value": "completion_time"
		 * }
		 * ]
		 * ```
		 * If you want to balance activities or the number of stops among all employed drivers, you need to specify it as follows:
		 * ```json
		 * "objectives" : [
		 * {
		 * "type": "min-max",
		 * "value": "completion_time"
		 * },
		 * {
		 * "type": "min-max",
		 * "value": "activities"
		 * }
		 * ]
		 * ```
		 * Required
		 */
		type: AlgorithmProblem_type;

		/**
		 * The value of the objective function.
		 * The objective value `transport_time` solely considers the time
		 * your drivers spend on the road, i.e. transport time. In contrary to `transport_time`, `completion_time` also takes waiting times at customer sites into account.
		 * The `completion_time` of a route is defined as the time from starting to ending the route,
		 * i.e. the route's transport time, the sum of waiting times plus the sum of activity durations.
		 * Note that choosing `transport_time` or `completion_time` only makes a difference if you specified time windows for your services/shipments since only in
		 * scenarios with time windows waiting times can occur.
		 * The objective value `vehicles` can only be used along with `min` and minimizes vehicles.
		 * Required
		 */
		value: ObjectiveValue;
	}
	export interface ObjectiveFormProperties {

		/**
		 * Type of objective function, i.e. `min` or `min-max`.
		 * * `min`: Minimizes the objective value.
		 * * `min-max`: Minimizes the maximum objective value.
		 * For instance, `min` -> `vehicles` minimizes the number of employed vehicles.
		 * `min` -> `completion_time` minimizes the sum of your vehicle routes' completion time.
		 * If you use, for example, `min-max` -> `completion_time`, it minimizes the maximum of your vehicle routes' completion time, i.e. it minimizes the overall makespan.
		 * This only makes sense if you have more than one vehicle. In case of one vehicle, switching from `min` to `min-max` should not have any impact.
		 * If you have more than one vehicle, then the algorithm tries to constantly move stops from one vehicle to another such that
		 * the completion time of longest vehicle route can be further reduced. For example, if you have one vehicle that takes 8 hours
		 * to serve all customers, adding another vehicle (and using `min-max`) might halve the time to serve all customers to 4 hours. However,
		 * this usually comes with higher transport costs.
		 * If you want to minimize `vehicles` first and, second, `completion_time`, you can also combine different objectives like this:
		 * ```json
		 * "objectives" : [
		 * {
		 * "type": "min",
		 * "value": "vehicles"
		 * },
		 * {
		 * "type": "min",
		 * "value": "completion_time"
		 * }
		 * ]
		 * ```
		 * If you want to balance activities or the number of stops among all employed drivers, you need to specify it as follows:
		 * ```json
		 * "objectives" : [
		 * {
		 * "type": "min-max",
		 * "value": "completion_time"
		 * },
		 * {
		 * "type": "min-max",
		 * "value": "activities"
		 * }
		 * ]
		 * ```
		 * Required
		 */
		type: FormControl<AlgorithmProblem_type | null | undefined>,

		/**
		 * The value of the objective function.
		 * The objective value `transport_time` solely considers the time
		 * your drivers spend on the road, i.e. transport time. In contrary to `transport_time`, `completion_time` also takes waiting times at customer sites into account.
		 * The `completion_time` of a route is defined as the time from starting to ending the route,
		 * i.e. the route's transport time, the sum of waiting times plus the sum of activity durations.
		 * Note that choosing `transport_time` or `completion_time` only makes a difference if you specified time windows for your services/shipments since only in
		 * scenarios with time windows waiting times can occur.
		 * The objective value `vehicles` can only be used along with `min` and minimizes vehicles.
		 * Required
		 */
		value: FormControl<ObjectiveValue | null | undefined>,
	}
	export function CreateObjectiveFormGroup() {
		return new FormGroup<ObjectiveFormProperties>({
			type: new FormControl<AlgorithmProblem_type | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<ObjectiveValue | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ObjectiveValue { completion_time = 'completion_time', transport_time = 'transport_time', vehicles = 'vehicles', activities = 'activities' }

	export interface Pickup {
		address?: Address;

		/**
		 * Specifies the duration of the pickup or delivery in seconds, e.g. how long it takes unload items at the customer site.
		 * Minimum: 0
		 * Maximum: 604800
		 */
		duration?: number | null;

		/** Group this stop belongs to. See the group relation and [this post](https://discuss.graphhopper.com/t/4040) on how to utilize this. */
		group?: string | null;

		/**
		 * Specifies the preparation time in seconds. It can be used to model parking lot search time since if you have 3 identical locations in a row, it only falls due once.
		 * Minimum: 0
		 * Maximum: 604800
		 */
		preparation_time?: number | null;

		/** Specifies an array of time window objects (see time window object below). For example, if an item needs to be delivered between 7am and 10am then specify the array as follows: [ { "earliest": 25200, "latest" : 32400 } ] (starting the day from 0 in seconds). */
		time_windows?: Array<TimeWindow>;
	}
	export interface PickupFormProperties {

		/**
		 * Specifies the duration of the pickup or delivery in seconds, e.g. how long it takes unload items at the customer site.
		 * Minimum: 0
		 * Maximum: 604800
		 */
		duration: FormControl<number | null | undefined>,

		/** Group this stop belongs to. See the group relation and [this post](https://discuss.graphhopper.com/t/4040) on how to utilize this. */
		group: FormControl<string | null | undefined>,

		/**
		 * Specifies the preparation time in seconds. It can be used to model parking lot search time since if you have 3 identical locations in a row, it only falls due once.
		 * Minimum: 0
		 * Maximum: 604800
		 */
		preparation_time: FormControl<number | null | undefined>,
	}
	export function CreatePickupFormGroup() {
		return new FormGroup<PickupFormProperties>({
			duration: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(604800)]),
			group: new FormControl<string | null | undefined>(undefined),
			preparation_time: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(604800)]),
		});

	}

	export interface TimeWindow {

		/** Specifies the opening time of the time window in seconds, i.e. the earliest time the service can start. */
		earliest?: number | null;

		/** Specifies the closing time of the time window in seconds, i.e. the latest time the service can start. */
		latest?: number | null;
	}
	export interface TimeWindowFormProperties {

		/** Specifies the opening time of the time window in seconds, i.e. the earliest time the service can start. */
		earliest: FormControl<number | null | undefined>,

		/** Specifies the closing time of the time window in seconds, i.e. the latest time the service can start. */
		latest: FormControl<number | null | undefined>,
	}
	export function CreateTimeWindowFormGroup() {
		return new FormGroup<TimeWindowFormProperties>({
			earliest: new FormControl<number | null | undefined>(undefined),
			latest: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Request {

		/** Use `objectives` instead. */
		algorithm?: Algorithm;

		/** Specifies general configurations that are taken into account when solving the vehicle routing problem. */
		configuration?: Configuration;

		/** Specifies your own tranport time and distance matrices. */
		cost_matrices?: Array<CostMatrix>;

		/** Specifies an objective function. The vehicle routing problem is solved in such a way that this objective function is minimized. */
		objectives?: Array<Objective>;

		/** Defines additional relationships between orders. */
		relations?: Array<string>;

		/** Specifies the orders of the type "service". These are, for example, pick-ups, deliveries or other stops that are to be approached by the specified vehicles. Each of these orders contains only one location. */
		services?: Array<Service>;

		/** Specifies the available shipments. Each shipment contains a pickup and a delivery stop, which must be processed one after the other. */
		shipments?: Array<Shipment>;

		/** Specifies the available vehicle types. These types can be assigned to vehicles. */
		vehicle_types?: Array<VehicleType>;

		/**
		 * Specifies the available vehicles.
		 * Minimum items: 1
		 */
		vehicles?: Array<Vehicle>;
	}
	export interface RequestFormProperties {
	}
	export function CreateRequestFormGroup() {
		return new FormGroup<RequestFormProperties>({
		});

	}

	export interface Service {
		address?: Address;

		/** Specifies an array of allowed vehicles, i.e. array of vehicle ids. For example, if this service can only be conducted EITHER by `technician_peter` OR `technician_stefan` specify this as follows: `["technician_peter","technician_stefan"]`. */
		allowed_vehicles?: Array<string>;

		/** Specifies an array of disallowed vehicles, i.e. array of vehicle ids. */
		disallowed_vehicles?: Array<string>;

		/**
		 * Specifies the duration of the service in seconds, i.e. how long it takes at the customer site.
		 * Minimum: 0
		 * Maximum: 604800
		 */
		duration?: number | null;

		/** Group this service belongs to. See the group relation and [this post](https://discuss.graphhopper.com/t/4040) on how to utilize this. */
		group?: string | null;

		/**
		 * Specifies the id of the service. Ids need to be unique so there must not be two services/shipments with the same id.
		 * Required
		 */
		id: string;

		/** Specifies the maximum time in seconds a delivery can stay in the vehicle. Currently, it only works with services of "type":"delivery". */
		max_time_in_vehicle?: number | null;

		/** Meaningful name for service, e.g. `"deliver pizza"`. */
		name?: string | null;

		/**
		 * Specifies the preparation time in seconds. It can be used to model parking lot search time since if you have 3 identical locations in a row, it only falls due once.
		 * Minimum: 0
		 * Maximum: 604800
		 */
		preparation_time?: number | null;

		/** Specifies the priority. Can be 1 = high priority to 10 = low priority. Often there are more services/shipments than the available vehicle fleet can handle. Then you can set priorities to differentiate high priority tasks from those that could be left unassigned. I.e. the lower the priority the earlier these tasks are omitted in the solution. */
		priority?: number | null;

		/** Specifies an array of required skills, i.e. array of string (not case sensitive). For example, if this service needs to be conducted by a technician having a `drilling_machine` and a `screw_driver` then specify the array as follows: `["drilling_machine","screw_driver"]`. This means that the service can only be done by a vehicle (technician) that has the skills `drilling_machine` AND `screw_driver` in its skill array. Otherwise it remains unassigned. */
		required_skills?: Array<string>;

		/** Size can have multiple dimensions and should be in line with the capacity dimension array of the vehicle type. For example, if the item that needs to be delivered has two size dimension, volume and weight, then specify it as follow [ 20, 5 ] assuming a volume of 20 and a weight of 5. */
		size?: Array<number>;

		/** Specifies an array of time window objects (see time_window object below). Specify the time either with the recommended Unix time stamp (the number of seconds since 1970-01-01) or you can also count the seconds relative to Monday morning 00:00 and define the whole week in seconds. For example, Monday 9am is then represented by 9hour * 3600sec/hour = 32400. In turn, Wednesday 1pm corresponds to 2day * 24hour/day * 3600sec/hour + 1day * 13hour/day * 3600sec/hour = 219600. See this tutorial for more information. */
		time_windows?: Array<TimeWindow>;

		/** Specifies type of service. This makes a difference if items are loaded or unloaded, i.e. if one of the size dimensions > 0. If it is specified as `service` or `pickup`, items are loaded and will stay in the vehicle for the rest of the route (and thus consumes capacity for the rest of the route). If it is a `delivery`, items are implicitly loaded at the beginning of the route and will stay in the route until delivery (and thus releases capacity for the rest of the route). */
		type?: ServiceType | null;
	}
	export interface ServiceFormProperties {

		/**
		 * Specifies the duration of the service in seconds, i.e. how long it takes at the customer site.
		 * Minimum: 0
		 * Maximum: 604800
		 */
		duration: FormControl<number | null | undefined>,

		/** Group this service belongs to. See the group relation and [this post](https://discuss.graphhopper.com/t/4040) on how to utilize this. */
		group: FormControl<string | null | undefined>,

		/**
		 * Specifies the id of the service. Ids need to be unique so there must not be two services/shipments with the same id.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Specifies the maximum time in seconds a delivery can stay in the vehicle. Currently, it only works with services of "type":"delivery". */
		max_time_in_vehicle: FormControl<number | null | undefined>,

		/** Meaningful name for service, e.g. `"deliver pizza"`. */
		name: FormControl<string | null | undefined>,

		/**
		 * Specifies the preparation time in seconds. It can be used to model parking lot search time since if you have 3 identical locations in a row, it only falls due once.
		 * Minimum: 0
		 * Maximum: 604800
		 */
		preparation_time: FormControl<number | null | undefined>,

		/** Specifies the priority. Can be 1 = high priority to 10 = low priority. Often there are more services/shipments than the available vehicle fleet can handle. Then you can set priorities to differentiate high priority tasks from those that could be left unassigned. I.e. the lower the priority the earlier these tasks are omitted in the solution. */
		priority: FormControl<number | null | undefined>,

		/** Specifies type of service. This makes a difference if items are loaded or unloaded, i.e. if one of the size dimensions > 0. If it is specified as `service` or `pickup`, items are loaded and will stay in the vehicle for the rest of the route (and thus consumes capacity for the rest of the route). If it is a `delivery`, items are implicitly loaded at the beginning of the route and will stay in the route until delivery (and thus releases capacity for the rest of the route). */
		type: FormControl<ServiceType | null | undefined>,
	}
	export function CreateServiceFormGroup() {
		return new FormGroup<ServiceFormProperties>({
			duration: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(604800)]),
			group: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			max_time_in_vehicle: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			preparation_time: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(604800)]),
			priority: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<ServiceType | null | undefined>(undefined),
		});

	}

	export enum ServiceType { service = 'service', pickup = 'pickup', delivery = 'delivery' }

	export interface Shipment {

		/** Specifies an array of allowed vehicles, i.e. array of vehicle ids. For example, if this shipment can only be conducted EITHER by "technician_peter" OR "technician_stefan" specify this as follows: ["technician_peter","technician_stefan"]. */
		allowed_vehicles?: Array<string>;

		/** Required */
		delivery: Stop;

		/** Specifies an array of disallowed vehicles, i.e. array of vehicle ids. */
		disallowed_vehicles?: Array<string>;

		/**
		 * Specifies the id of the shipment. Ids need to be unique so there must not be two services/shipments with the same id.
		 * Required
		 */
		id: string;

		/** Specifies the maximum time in seconds a shipment can stay in the vehicle. */
		max_time_in_vehicle?: number | null;

		/** Meaningful name for shipment, e.g. "pickup and deliver pizza to Peter". */
		name?: string | null;

		/** Required */
		pickup: Stop;

		/** Specifies the priority. Can be 1 = high priority to 10 = low priority. Often there are more services/shipments than the available vehicle fleet can handle. Then you can set priorities to differentiate high priority tasks from those that could be left unassigned. I.e. the lower the priority the earlier these tasks are omitted in the solution. */
		priority?: number | null;

		/** Specifies an array of required skills, i.e. array of string (not case sensitive). For example, if this shipment needs to be conducted by a technician having a `drilling_machine` and a `screw_driver` then specify the array as follows: `["drilling_machine","screw_driver"]`. This means that the service can only be done by a vehicle (technician) that has the skills `drilling_machine` AND `screw_driver` in its skill array. Otherwise it remains unassigned. */
		required_skills?: Array<string>;

		/** Size can have multiple dimensions and should be in line with the capacity dimension array of the vehicle type. For example, if the item that needs to be delivered has two size dimension, volume and weight, then specify it as follow [ 20, 5 ] assuming a volume of 20 and a weight of 5. */
		size?: Array<number>;
	}
	export interface ShipmentFormProperties {

		/**
		 * Specifies the id of the shipment. Ids need to be unique so there must not be two services/shipments with the same id.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Specifies the maximum time in seconds a shipment can stay in the vehicle. */
		max_time_in_vehicle: FormControl<number | null | undefined>,

		/** Meaningful name for shipment, e.g. "pickup and deliver pizza to Peter". */
		name: FormControl<string | null | undefined>,

		/** Specifies the priority. Can be 1 = high priority to 10 = low priority. Often there are more services/shipments than the available vehicle fleet can handle. Then you can set priorities to differentiate high priority tasks from those that could be left unassigned. I.e. the lower the priority the earlier these tasks are omitted in the solution. */
		priority: FormControl<number | null | undefined>,
	}
	export function CreateShipmentFormGroup() {
		return new FormGroup<ShipmentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			max_time_in_vehicle: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Stop {
		address?: Address;

		/**
		 * Specifies the duration of the pickup or delivery in seconds, e.g. how long it takes unload items at the customer site.
		 * Minimum: 0
		 * Maximum: 604800
		 */
		duration?: number | null;

		/** Group this stop belongs to. See the group relation and [this post](https://discuss.graphhopper.com/t/4040) on how to utilize this. */
		group?: string | null;

		/**
		 * Specifies the preparation time in seconds. It can be used to model parking lot search time since if you have 3 identical locations in a row, it only falls due once.
		 * Minimum: 0
		 * Maximum: 604800
		 */
		preparation_time?: number | null;

		/** Specifies an array of time window objects (see time window object below). For example, if an item needs to be delivered between 7am and 10am then specify the array as follows: [ { "earliest": 25200, "latest" : 32400 } ] (starting the day from 0 in seconds). */
		time_windows?: Array<TimeWindow>;
	}
	export interface StopFormProperties {

		/**
		 * Specifies the duration of the pickup or delivery in seconds, e.g. how long it takes unload items at the customer site.
		 * Minimum: 0
		 * Maximum: 604800
		 */
		duration: FormControl<number | null | undefined>,

		/** Group this stop belongs to. See the group relation and [this post](https://discuss.graphhopper.com/t/4040) on how to utilize this. */
		group: FormControl<string | null | undefined>,

		/**
		 * Specifies the preparation time in seconds. It can be used to model parking lot search time since if you have 3 identical locations in a row, it only falls due once.
		 * Minimum: 0
		 * Maximum: 604800
		 */
		preparation_time: FormControl<number | null | undefined>,
	}
	export function CreateStopFormGroup() {
		return new FormGroup<StopFormProperties>({
			duration: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(604800)]),
			group: new FormControl<string | null | undefined>(undefined),
			preparation_time: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(604800)]),
		});

	}

	export interface VehicleType {

		/** Specifies an array of capacity dimension values which need to be int values. For example, if there are two dimensions such as volume and weight then it needs to be defined as [ 1000, 300 ] assuming a maximum volume of 1000 and a maximum weight of 300. */
		capacity?: Array<number>;

		/** Specifies whether traffic should be considered. if "tomtom" is used and this is false, free flow travel times from "tomtom" are calculated. If this is true, historical traffic info are used. We do not yet have traffic data for "openstreetmap", thus, setting this true has no effect at all. */
		consider_traffic?: boolean | null;

		/** **_BETA feature_**! Cost parameter vehicle activation, i.e. fixed costs per vehicle */
		cost_per_activation?: number | null;

		/** **_BETA feature_**! Cost parameter per distance unit, here meter is used */
		cost_per_meter?: number | null;

		/** **_BETA feature_**! Cost parameter per time unit, here second is used */
		cost_per_second?: number | null;

		/** Specifies the network data provider. Either use [`openstreetmap`](#section/Map-Data-and-Routing-Profiles/OpenStreetMap) (default) or [`tomtom`](#section/Map-Data-and-Routing-Profiles/TomTom) (add-on required). */
		network_data_provider?: RoutingNetwork_data_provider | null;
		profile?: any;

		/** Specifies a service time factor for this vehicle type. If the vehicle/driver that uses this type is able to conduct the service as double as fast as it is determined in the corresponding service or shipment then set it to 0.5. */
		service_time_factor?: number | null;

		/** Specifies a speed factor for this vehicle type. If the vehicle that uses this type needs to be only half as fast as what is actually calculated with our routing engine then set the speed factor to 0.5. */
		speed_factor?: number | null;

		/**
		 * Specifies the id of the vehicle type. If a vehicle needs to be of this type, it should refer to this with its type_id attribute.
		 * Required
		 */
		type_id: string;
	}
	export interface VehicleTypeFormProperties {

		/** Specifies whether traffic should be considered. if "tomtom" is used and this is false, free flow travel times from "tomtom" are calculated. If this is true, historical traffic info are used. We do not yet have traffic data for "openstreetmap", thus, setting this true has no effect at all. */
		consider_traffic: FormControl<boolean | null | undefined>,

		/** **_BETA feature_**! Cost parameter vehicle activation, i.e. fixed costs per vehicle */
		cost_per_activation: FormControl<number | null | undefined>,

		/** **_BETA feature_**! Cost parameter per distance unit, here meter is used */
		cost_per_meter: FormControl<number | null | undefined>,

		/** **_BETA feature_**! Cost parameter per time unit, here second is used */
		cost_per_second: FormControl<number | null | undefined>,

		/** Specifies the network data provider. Either use [`openstreetmap`](#section/Map-Data-and-Routing-Profiles/OpenStreetMap) (default) or [`tomtom`](#section/Map-Data-and-Routing-Profiles/TomTom) (add-on required). */
		network_data_provider: FormControl<RoutingNetwork_data_provider | null | undefined>,
		profile: FormControl<any | null | undefined>,

		/** Specifies a service time factor for this vehicle type. If the vehicle/driver that uses this type is able to conduct the service as double as fast as it is determined in the corresponding service or shipment then set it to 0.5. */
		service_time_factor: FormControl<number | null | undefined>,

		/** Specifies a speed factor for this vehicle type. If the vehicle that uses this type needs to be only half as fast as what is actually calculated with our routing engine then set the speed factor to 0.5. */
		speed_factor: FormControl<number | null | undefined>,

		/**
		 * Specifies the id of the vehicle type. If a vehicle needs to be of this type, it should refer to this with its type_id attribute.
		 * Required
		 */
		type_id: FormControl<string | null | undefined>,
	}
	export function CreateVehicleTypeFormGroup() {
		return new FormGroup<VehicleTypeFormProperties>({
			consider_traffic: new FormControl<boolean | null | undefined>(undefined),
			cost_per_activation: new FormControl<number | null | undefined>(undefined),
			cost_per_meter: new FormControl<number | null | undefined>(undefined),
			cost_per_second: new FormControl<number | null | undefined>(undefined),
			network_data_provider: new FormControl<RoutingNetwork_data_provider | null | undefined>(undefined),
			profile: new FormControl<any | null | undefined>(undefined),
			service_time_factor: new FormControl<number | null | undefined>(undefined),
			speed_factor: new FormControl<number | null | undefined>(undefined),
			type_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Vehicle {
		break?: TimeWindowBreak;

		/** Earliest start of vehicle in seconds. It is recommended to use the unix timestamp. */
		earliest_start?: number | null;
		end_address?: Address;

		/** Latest end of vehicle in seconds, i.e. the time the vehicle needs to be at its end location at latest. */
		latest_end?: number | null;

		/** Specifies the maximum number of activities a vehicle can conduct. */
		max_activities?: number | null;

		/** Specifies the maximum distance (in meters) a vehicle can go. */
		max_distance?: number | null;

		/** Specifies the maximum drive time (in seconds) a vehicle/driver can go, i.e. the maximum time on the road (service and waiting times are not included here) */
		max_driving_time?: number | null;

		/** Specifies the maximum number of jobs a vehicle can load. */
		max_jobs?: number | null;

		/** Specifies the minimum number of jobs a vehicle should load. This is a soft constraint, i.e. if it is not possible to fulfill “min_jobs”, we will still try to get as close as possible to this constraint. */
		min_jobs?: number | null;

		/** Indicates whether a vehicle should be moved even though it has not been assigned any jobs. */
		move_to_end_address?: boolean | null;

		/** If it is false, the algorithm decides where to end the vehicle route. It ends in one of your customers' locations. The end is chosen such that it contributes to the overall objective function, e.g. min transport_time. If it is true, you can either specify a specific end location (which is then regarded as end depot) or you can leave it and the driver returns to its start location. */
		return_to_depot?: boolean | null;

		/** Array of skills, i.e. array of string (not case sensitive). */
		skills?: Array<string>;

		/** Required */
		start_address: Address;

		/** The type ID assigns a vehicle type to this vehicle. You can specify types in the array of vehicle types. If you omit the type ID, the default type is used. The default type is a `car` with a capacity of 0. */
		type_id?: string | null;

		/**
		 * Specifies the ID of the vehicle. Ids must be unique, i.e. if there are two vehicles with the same ID, an error is returned.
		 * Required
		 */
		vehicle_id: string;
	}
	export interface VehicleFormProperties {

		/** Earliest start of vehicle in seconds. It is recommended to use the unix timestamp. */
		earliest_start: FormControl<number | null | undefined>,

		/** Latest end of vehicle in seconds, i.e. the time the vehicle needs to be at its end location at latest. */
		latest_end: FormControl<number | null | undefined>,

		/** Specifies the maximum number of activities a vehicle can conduct. */
		max_activities: FormControl<number | null | undefined>,

		/** Specifies the maximum distance (in meters) a vehicle can go. */
		max_distance: FormControl<number | null | undefined>,

		/** Specifies the maximum drive time (in seconds) a vehicle/driver can go, i.e. the maximum time on the road (service and waiting times are not included here) */
		max_driving_time: FormControl<number | null | undefined>,

		/** Specifies the maximum number of jobs a vehicle can load. */
		max_jobs: FormControl<number | null | undefined>,

		/** Specifies the minimum number of jobs a vehicle should load. This is a soft constraint, i.e. if it is not possible to fulfill “min_jobs”, we will still try to get as close as possible to this constraint. */
		min_jobs: FormControl<number | null | undefined>,

		/** Indicates whether a vehicle should be moved even though it has not been assigned any jobs. */
		move_to_end_address: FormControl<boolean | null | undefined>,

		/** If it is false, the algorithm decides where to end the vehicle route. It ends in one of your customers' locations. The end is chosen such that it contributes to the overall objective function, e.g. min transport_time. If it is true, you can either specify a specific end location (which is then regarded as end depot) or you can leave it and the driver returns to its start location. */
		return_to_depot: FormControl<boolean | null | undefined>,

		/** The type ID assigns a vehicle type to this vehicle. You can specify types in the array of vehicle types. If you omit the type ID, the default type is used. The default type is a `car` with a capacity of 0. */
		type_id: FormControl<string | null | undefined>,

		/**
		 * Specifies the ID of the vehicle. Ids must be unique, i.e. if there are two vehicles with the same ID, an error is returned.
		 * Required
		 */
		vehicle_id: FormControl<string | null | undefined>,
	}
	export function CreateVehicleFormGroup() {
		return new FormGroup<VehicleFormProperties>({
			earliest_start: new FormControl<number | null | undefined>(undefined),
			latest_end: new FormControl<number | null | undefined>(undefined),
			max_activities: new FormControl<number | null | undefined>(undefined),
			max_distance: new FormControl<number | null | undefined>(undefined),
			max_driving_time: new FormControl<number | null | undefined>(undefined),
			max_jobs: new FormControl<number | null | undefined>(undefined),
			min_jobs: new FormControl<number | null | undefined>(undefined),
			move_to_end_address: new FormControl<boolean | null | undefined>(undefined),
			return_to_depot: new FormControl<boolean | null | undefined>(undefined),
			type_id: new FormControl<string | null | undefined>(undefined),
			vehicle_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TimeWindowBreak {

		/**
		 * Specifies the duration of the break in seconds.
		 * Required
		 */
		duration: number;

		/**
		 * Specifies the earliest start time of the break in seconds.
		 * Required
		 */
		earliest: number;

		/**
		 * Specifies the latest start time of break in seconds.
		 * Required
		 */
		latest: number;
	}
	export interface TimeWindowBreakFormProperties {

		/**
		 * Specifies the duration of the break in seconds.
		 * Required
		 */
		duration: FormControl<number | null | undefined>,

		/**
		 * Specifies the earliest start time of the break in seconds.
		 * Required
		 */
		earliest: FormControl<number | null | undefined>,

		/**
		 * Specifies the latest start time of break in seconds.
		 * Required
		 */
		latest: FormControl<number | null | undefined>,
	}
	export function CreateTimeWindowBreakFormGroup() {
		return new FormGroup<TimeWindowBreakFormProperties>({
			duration: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			earliest: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			latest: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Response {
		copyrights?: Array<string>;

		/** Processing time in ms. If job is still waiting in queue, processing_time is 0 */
		processing_time?: number | null;

		/** Only available if status field indicates `finished`. */
		solution?: Solution;

		/** Indicates the current status of the job */
		status?: ClusterResponseStatus | null;

		/** Waiting time in ms */
		waiting_time_in_queue?: number | null;
	}
	export interface ResponseFormProperties {

		/** Processing time in ms. If job is still waiting in queue, processing_time is 0 */
		processing_time: FormControl<number | null | undefined>,

		/** Indicates the current status of the job */
		status: FormControl<ClusterResponseStatus | null | undefined>,

		/** Waiting time in ms */
		waiting_time_in_queue: FormControl<number | null | undefined>,
	}
	export function CreateResponseFormGroup() {
		return new FormGroup<ResponseFormProperties>({
			processing_time: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<ClusterResponseStatus | null | undefined>(undefined),
			waiting_time_in_queue: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Only available if status field indicates `finished`. */
	export interface Solution {

		/** Overall completion time in seconds, i.e. the sum of each routes/drivers operation time. */
		completion_time?: number | null;
		costs?: number | null;

		/** Overall distance travelled in meter, i.e. the sum of each route's transport distance */
		distance?: number | null;

		/** Operation time of longest route in seconds. */
		max_operation_time?: number | null;

		/** Number of jobs that could not be assigned to final solution. */
		no_unassigned?: number | null;

		/** Number of employed vehicles. */
		no_vehicles?: number | null;

		/** Overall preparation time in seconds. */
		preparation_time?: number | null;

		/** An array of routes */
		routes?: Array<Route>;

		/** Overall service time in seconds. */
		service_duration?: number | null;

		/** Use `transport_time` instead. */
		time?: number | null;

		/** Overall time travelled in seconds, i.e. the sum of each route's transport time. */
		transport_time?: number | null;
		unassigned?: SolutionUnassigned;

		/** Overall waiting time in seconds. */
		waiting_time?: number | null;
	}

	/** Only available if status field indicates `finished`. */
	export interface SolutionFormProperties {

		/** Overall completion time in seconds, i.e. the sum of each routes/drivers operation time. */
		completion_time: FormControl<number | null | undefined>,
		costs: FormControl<number | null | undefined>,

		/** Overall distance travelled in meter, i.e. the sum of each route's transport distance */
		distance: FormControl<number | null | undefined>,

		/** Operation time of longest route in seconds. */
		max_operation_time: FormControl<number | null | undefined>,

		/** Number of jobs that could not be assigned to final solution. */
		no_unassigned: FormControl<number | null | undefined>,

		/** Number of employed vehicles. */
		no_vehicles: FormControl<number | null | undefined>,

		/** Overall preparation time in seconds. */
		preparation_time: FormControl<number | null | undefined>,

		/** Overall service time in seconds. */
		service_duration: FormControl<number | null | undefined>,

		/** Use `transport_time` instead. */
		time: FormControl<number | null | undefined>,

		/** Overall time travelled in seconds, i.e. the sum of each route's transport time. */
		transport_time: FormControl<number | null | undefined>,

		/** Overall waiting time in seconds. */
		waiting_time: FormControl<number | null | undefined>,
	}
	export function CreateSolutionFormGroup() {
		return new FormGroup<SolutionFormProperties>({
			completion_time: new FormControl<number | null | undefined>(undefined),
			costs: new FormControl<number | null | undefined>(undefined),
			distance: new FormControl<number | null | undefined>(undefined),
			max_operation_time: new FormControl<number | null | undefined>(undefined),
			no_unassigned: new FormControl<number | null | undefined>(undefined),
			no_vehicles: new FormControl<number | null | undefined>(undefined),
			preparation_time: new FormControl<number | null | undefined>(undefined),
			service_duration: new FormControl<number | null | undefined>(undefined),
			time: new FormControl<number | null | undefined>(undefined),
			transport_time: new FormControl<number | null | undefined>(undefined),
			waiting_time: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Route {

		/** Array of activities */
		activities?: Array<Activity>;

		/** Completion time of route in seconds */
		completion_time?: number | null;

		/** Distance of route in meter */
		distance?: number | null;

		/** Array of route planning points */
		points?: Array<RoutePoint>;

		/** Preparation time of route in seconds */
		preparation_time?: number | null;

		/** Service duration of route in seconds */
		service_duration?: number | null;

		/** Transport time of route in seconds */
		transport_time?: number | null;

		/** Id of vehicle that operates route */
		vehicle_id?: string | null;

		/** Waiting time of route in seconds */
		waiting_time?: number | null;
	}
	export interface RouteFormProperties {

		/** Completion time of route in seconds */
		completion_time: FormControl<number | null | undefined>,

		/** Distance of route in meter */
		distance: FormControl<number | null | undefined>,

		/** Preparation time of route in seconds */
		preparation_time: FormControl<number | null | undefined>,

		/** Service duration of route in seconds */
		service_duration: FormControl<number | null | undefined>,

		/** Transport time of route in seconds */
		transport_time: FormControl<number | null | undefined>,

		/** Id of vehicle that operates route */
		vehicle_id: FormControl<string | null | undefined>,

		/** Waiting time of route in seconds */
		waiting_time: FormControl<number | null | undefined>,
	}
	export function CreateRouteFormGroup() {
		return new FormGroup<RouteFormProperties>({
			completion_time: new FormControl<number | null | undefined>(undefined),
			distance: new FormControl<number | null | undefined>(undefined),
			preparation_time: new FormControl<number | null | undefined>(undefined),
			service_duration: new FormControl<number | null | undefined>(undefined),
			transport_time: new FormControl<number | null | undefined>(undefined),
			vehicle_id: new FormControl<string | null | undefined>(undefined),
			waiting_time: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RoutePoint {
		coordinates?: Array<string>;
		type?: string | null;
	}
	export interface RoutePointFormProperties {
		type: FormControl<string | null | undefined>,
	}
	export function CreateRoutePointFormGroup() {
		return new FormGroup<RoutePointFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SolutionUnassigned {

		/** An array of ids of unassigned breaks */
		breaks?: Array<string>;

		/** An array of details, i.e. reason for unassigned services or shipments */
		details?: Array<Detail>;

		/** An array of ids of unassigned services */
		services?: Array<string>;

		/** An array of ids of unassigned shipments */
		shipments?: Array<string>;
	}
	export interface SolutionUnassignedFormProperties {
	}
	export function CreateSolutionUnassignedFormGroup() {
		return new FormGroup<SolutionUnassignedFormProperties>({
		});

	}

	export interface RouteRequest {

		/**
		 * Rather than looking for the shortest or fastest path, this lets you solve two different problems related to routing:
		 * With `round_trip`, the route will get you back to where you started. This is meant for fun (think of
		 * a bike trip), so we will add some randomness. This requires `ch.disable=true`.
		 * With `alternative_route`, we give you not one but several routes that are close to optimal, but
		 * not too similar to each other. You can control both of these features with additional parameters, see below.
		 */
		algorithm?: RouteRequestAlgorithm | null;

		/**
		 * If `algorithm=alternative_route`, this parameter sets the number of maximum paths which should be calculated. Increasing can lead to worse alternatives.
		 */
		'alternative_route.max_paths'?: number | null;

		/**
		 * If `algorithm=alternative_route`, this parameter specifies how similar an alternative route can be to the optimal route. Increasing can lead to worse alternatives.
		 */
		'alternative_route.max_share_factor'?: number | null;

		/**
		 * If `algorithm=alternative_route`, this parameter sets the factor by which the alternatives routes can be longer than the optimal route. Increasing can lead to worse alternatives.
		 */
		'alternative_route.max_weight_factor'?: number | null;

		/**
		 * Specify which road classes and environments you would like to avoid.
		 * Possible values are `motorway`, `steps`, `track`, `toll`, `ferry`, `tunnel` and `bridge`.
		 * Separate several values with `;`. Obviously not all the values make sense for all vehicle profiles e.g. `bike` is already forbidden on a `motorway`. Requires `ch.disable=true`.
		 */
		avoid?: string | null;

		/**
		 * Block road access via a point with the format `latitude,longitude`
		 * or an area defined by a circle `lat,lon,radius` or a rectangle `lat1,lon1,lat2,lon2`.
		 * Separate several values with `;`. Requires `ch.disable=true`.
		 */
		block_area?: string | null;

		/**
		 * If the points for the route should be calculated at all.
		 */
		calc_points?: boolean | null;

		/**
		 * Use this parameter in combination with one or more parameters from below.
		 */
		'ch.disable'?: boolean | null;

		/** Optional parameter. It specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. You need to specify this parameter for either none or all points. Only supported for motor vehicles and OpenStreetMap. */
		curbsides?: Array<string>;

		/**
		 * If `true`, the output will be formatted.
		 */
		debug?: boolean | null;

		/**
		 * Optional parameter to retrieve path details. You can request additional details for the route: `street_name`,
		 * `time`, `distance`, `max_speed`, `toll`, `road_class`, `road_class_link`, `road_access`, `road_environment`, `lanes`, and `surface`. Read more about the usage of path details [here](https://discuss.graphhopper.com/t/2539).
		 */
		details?: Array<string>;

		/**
		 * If `true`, a third coordinate, the altitude, is included with all positions in the response.
		 * This changes the format of the `points` and `snapped_waypoints` fields of the response, in both their
		 * encodings. Unless you switch off the `points_encoded` parameter, you need special code on the
		 * client side that can handle three-dimensional coordinates.
		 * A request can fail if the vehicle profile does not support elevation. See the features object for every vehicle profile.
		 */
		elevation?: boolean | null;

		/**
		 * Time penalty in seconds for not obeying a specified heading. Requires `ch.disable=true`.
		 */
		heading_penalty?: number | null;

		/**
		 * Favour a heading direction for a certain point. Specify either one heading for the start point or as many as there are points.
		 * In this case headings are associated by their order to the specific points. Headings are given as north based clockwise angle between 0 and 360 degree.
		 * This parameter also influences the tour generated with `algorithm=round_trip` and forces the initial direction.  Requires `ch.disable=true`.
		 */
		headings?: Array<number>;

		/**
		 * If instructions should be calculated and returned
		 */
		instructions?: boolean | null;

		/**
		 * The locale of the resulting turn instructions. E.g. `pt_PT` for Portuguese or `de` for German.
		 */
		locale?: string | null;

		/**
		 * Normally, the calculated route will visit the points in the order you specified them.
		 * If you have more than two points, you can set this parameter to `"true"` and the points may be re-ordered to minimize the total travel time.
		 * Keep in mind that the limits on the number of locations of the Route Optimization API applies, and the request costs more credits.
		 */
		optimize?: string | null;

		/**
		 * If `true`, u-turns are avoided at via-points with regard to the `heading_penalty`. Requires `ch.disable=true`.
		 */
		pass_through?: boolean | null;

		/** Optional parameter. Specifies a hint for each point in the `points` array to prefer a certain street for the closest location lookup. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up. */
		point_hints?: Array<string>;

		/**
		 * The points for the route in an array of `[longitude,latitude]`. For instance, if you want to calculate a route from point A to B to C
		 * then you specify `points: [ [A_longitude, A_latitude], [B_longitude, B_latitude], [C_longitude, C_latitude]]
		 */
		points?: Array<string>;

		/**
		 * Allows changing the encoding of location data in the response. The default is polyline encoding, which is compact
		 * but requires special client code to unpack. (We provide it in our JavaScript client library!)
		 * Set this parameter to `false` to switch the encoding to simple coordinate pairs like `[lon,lat]`, or `[lon,lat,elevation]`.
		 * See the description of the response format for more information.
		 */
		points_encoded?: boolean | null;

		/**
		 * If `algorithm=round_trip`, this parameter configures approximative length of the resulting round trip. Requires `ch.disable=true`.
		 */
		'round_trip.distance'?: number | null;

		/**
		 * If `algorithm=round_trip`, this sets the random seed. Change this to get a different tour for each value.
		 */
		'round_trip.seed'?: number | null;

		/** Optional parameter to avoid snapping to a certain road class or road environment. Current supported values `motorway`, `trunk`, `ferry`, `tunnel`, `bridge` and `ford` */
		snap_preventions?: Array<string>;
		vehicle?: VehicleProfileId;

		/**
		 * Determines the way the ''best'' route is calculated. Default is `fastest`. Other options are `shortest` (e.g. for `vehicle=foot` or `bike`) and `short_fastest` which finds a reasonable balance between `shortest` and `fastest`. Requires `ch.disable=true`.
		 */
		weighting?: string | null;
	}
	export interface RouteRequestFormProperties {

		/**
		 * Rather than looking for the shortest or fastest path, this lets you solve two different problems related to routing:
		 * With `round_trip`, the route will get you back to where you started. This is meant for fun (think of
		 * a bike trip), so we will add some randomness. This requires `ch.disable=true`.
		 * With `alternative_route`, we give you not one but several routes that are close to optimal, but
		 * not too similar to each other. You can control both of these features with additional parameters, see below.
		 */
		algorithm: FormControl<RouteRequestAlgorithm | null | undefined>,

		/**
		 * If `algorithm=alternative_route`, this parameter sets the number of maximum paths which should be calculated. Increasing can lead to worse alternatives.
		 */
		'alternative_route.max_paths': FormControl<number | null | undefined>,

		/**
		 * If `algorithm=alternative_route`, this parameter specifies how similar an alternative route can be to the optimal route. Increasing can lead to worse alternatives.
		 */
		'alternative_route.max_share_factor': FormControl<number | null | undefined>,

		/**
		 * If `algorithm=alternative_route`, this parameter sets the factor by which the alternatives routes can be longer than the optimal route. Increasing can lead to worse alternatives.
		 */
		'alternative_route.max_weight_factor': FormControl<number | null | undefined>,

		/**
		 * Specify which road classes and environments you would like to avoid.
		 * Possible values are `motorway`, `steps`, `track`, `toll`, `ferry`, `tunnel` and `bridge`.
		 * Separate several values with `;`. Obviously not all the values make sense for all vehicle profiles e.g. `bike` is already forbidden on a `motorway`. Requires `ch.disable=true`.
		 */
		avoid: FormControl<string | null | undefined>,

		/**
		 * Block road access via a point with the format `latitude,longitude`
		 * or an area defined by a circle `lat,lon,radius` or a rectangle `lat1,lon1,lat2,lon2`.
		 * Separate several values with `;`. Requires `ch.disable=true`.
		 */
		block_area: FormControl<string | null | undefined>,

		/**
		 * If the points for the route should be calculated at all.
		 */
		calc_points: FormControl<boolean | null | undefined>,

		/**
		 * Use this parameter in combination with one or more parameters from below.
		 */
		'ch.disable': FormControl<boolean | null | undefined>,

		/**
		 * If `true`, the output will be formatted.
		 */
		debug: FormControl<boolean | null | undefined>,

		/**
		 * If `true`, a third coordinate, the altitude, is included with all positions in the response.
		 * This changes the format of the `points` and `snapped_waypoints` fields of the response, in both their
		 * encodings. Unless you switch off the `points_encoded` parameter, you need special code on the
		 * client side that can handle three-dimensional coordinates.
		 * A request can fail if the vehicle profile does not support elevation. See the features object for every vehicle profile.
		 */
		elevation: FormControl<boolean | null | undefined>,

		/**
		 * Time penalty in seconds for not obeying a specified heading. Requires `ch.disable=true`.
		 */
		heading_penalty: FormControl<number | null | undefined>,

		/**
		 * If instructions should be calculated and returned
		 */
		instructions: FormControl<boolean | null | undefined>,

		/**
		 * The locale of the resulting turn instructions. E.g. `pt_PT` for Portuguese or `de` for German.
		 */
		locale: FormControl<string | null | undefined>,

		/**
		 * Normally, the calculated route will visit the points in the order you specified them.
		 * If you have more than two points, you can set this parameter to `"true"` and the points may be re-ordered to minimize the total travel time.
		 * Keep in mind that the limits on the number of locations of the Route Optimization API applies, and the request costs more credits.
		 */
		optimize: FormControl<string | null | undefined>,

		/**
		 * If `true`, u-turns are avoided at via-points with regard to the `heading_penalty`. Requires `ch.disable=true`.
		 */
		pass_through: FormControl<boolean | null | undefined>,

		/**
		 * Allows changing the encoding of location data in the response. The default is polyline encoding, which is compact
		 * but requires special client code to unpack. (We provide it in our JavaScript client library!)
		 * Set this parameter to `false` to switch the encoding to simple coordinate pairs like `[lon,lat]`, or `[lon,lat,elevation]`.
		 * See the description of the response format for more information.
		 */
		points_encoded: FormControl<boolean | null | undefined>,

		/**
		 * If `algorithm=round_trip`, this parameter configures approximative length of the resulting round trip. Requires `ch.disable=true`.
		 */
		'round_trip.distance': FormControl<number | null | undefined>,

		/**
		 * If `algorithm=round_trip`, this sets the random seed. Change this to get a different tour for each value.
		 */
		'round_trip.seed': FormControl<number | null | undefined>,
		vehicle: FormControl<VehicleProfileId | null | undefined>,

		/**
		 * Determines the way the ''best'' route is calculated. Default is `fastest`. Other options are `shortest` (e.g. for `vehicle=foot` or `bike`) and `short_fastest` which finds a reasonable balance between `shortest` and `fastest`. Requires `ch.disable=true`.
		 */
		weighting: FormControl<string | null | undefined>,
	}
	export function CreateRouteRequestFormGroup() {
		return new FormGroup<RouteRequestFormProperties>({
			algorithm: new FormControl<RouteRequestAlgorithm | null | undefined>(undefined),
			'alternative_route.max_paths': new FormControl<number | null | undefined>(undefined),
			'alternative_route.max_share_factor': new FormControl<number | null | undefined>(undefined),
			'alternative_route.max_weight_factor': new FormControl<number | null | undefined>(undefined),
			avoid: new FormControl<string | null | undefined>(undefined),
			block_area: new FormControl<string | null | undefined>(undefined),
			calc_points: new FormControl<boolean | null | undefined>(undefined),
			'ch.disable': new FormControl<boolean | null | undefined>(undefined),
			debug: new FormControl<boolean | null | undefined>(undefined),
			elevation: new FormControl<boolean | null | undefined>(undefined),
			heading_penalty: new FormControl<number | null | undefined>(undefined),
			instructions: new FormControl<boolean | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			optimize: new FormControl<string | null | undefined>(undefined),
			pass_through: new FormControl<boolean | null | undefined>(undefined),
			points_encoded: new FormControl<boolean | null | undefined>(undefined),
			'round_trip.distance': new FormControl<number | null | undefined>(undefined),
			'round_trip.seed': new FormControl<number | null | undefined>(undefined),
			vehicle: new FormControl<VehicleProfileId | null | undefined>(undefined),
			weighting: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RouteRequestAlgorithm { round_trip = 'round_trip', alternative_route = 'alternative_route' }

	export interface RouteResponse {

		/** Additional information for your request */
		info?: ResponseInfo;
		paths?: Array<RouteResponsePath>;
	}
	export interface RouteResponseFormProperties {
	}
	export function CreateRouteResponseFormGroup() {
		return new FormGroup<RouteResponseFormProperties>({
		});

	}

	export interface RouteResponsePath {

		/**
		 * The total ascent, in meters.
		 */
		ascend?: number | null;

		/**
		 * The bounding box of the route geometry. Format: `[minLon, minLat, maxLon, maxLat]`.
		 */
		bbox?: Array<number>;

		/**
		 * The total descent, in meters.
		 */
		descend?: number | null;

		/**
		 * Details, as requested with the `details` parameter. Consider the value `{"street_name": [[0,2,"Frankfurter Straße"],[2,6,"Zollweg"]]}`.
		 * In this example, the route uses two streets: The first, Frankfurter Straße, is
		 * used between `points[0]` and `points[2]`, and the second, Zollweg, between `points[2]` and `points[6]`.
		 * See [here](https://discuss.graphhopper.com/t/2539) for discussion.
		 */
		details?: string | null;

		/**
		 * The total distance, in meters. To get this information for one 'leg' please read [this blog post](https://www.graphhopper.com/blog/2019/11/28/routing-api-using-path-details/).
		 */
		distance?: number | null;

		/**
		 * The instructions for this route. This feature is under active development, and our instructions can sometimes be misleading,
		 * so be mindful when using them for navigation.
		 */
		RouteResponsePathInstructions?: Array<RouteResponsePathInstructions>;
		points?: any;

		/**
		 * Whether the `points` and `snapped_waypoints` fields are polyline-encoded strings rather than JSON arrays
		 * of coordinates. See the field description for more information on the two formats.
		 */
		points_encoded?: boolean | null;

		/**
		 * An array of indices (zero-based), specifiying the order in which the input points are visited.
		 * Only present if the `optimize` parameter was used.
		 */
		points_order?: Array<number>;
		snapped_waypoints?: any;

		/**
		 * The total travel time, in milliseconds. To get this information for one 'leg' please read [this blog post](https://www.graphhopper.com/blog/2019/11/28/routing-api-using-path-details/).
		 */
		time?: number | null;
	}
	export interface RouteResponsePathFormProperties {

		/**
		 * The total ascent, in meters.
		 */
		ascend: FormControl<number | null | undefined>,

		/**
		 * The total descent, in meters.
		 */
		descend: FormControl<number | null | undefined>,

		/**
		 * Details, as requested with the `details` parameter. Consider the value `{"street_name": [[0,2,"Frankfurter Straße"],[2,6,"Zollweg"]]}`.
		 * In this example, the route uses two streets: The first, Frankfurter Straße, is
		 * used between `points[0]` and `points[2]`, and the second, Zollweg, between `points[2]` and `points[6]`.
		 * See [here](https://discuss.graphhopper.com/t/2539) for discussion.
		 */
		details: FormControl<string | null | undefined>,

		/**
		 * The total distance, in meters. To get this information for one 'leg' please read [this blog post](https://www.graphhopper.com/blog/2019/11/28/routing-api-using-path-details/).
		 */
		distance: FormControl<number | null | undefined>,
		points: FormControl<any | null | undefined>,

		/**
		 * Whether the `points` and `snapped_waypoints` fields are polyline-encoded strings rather than JSON arrays
		 * of coordinates. See the field description for more information on the two formats.
		 */
		points_encoded: FormControl<boolean | null | undefined>,
		snapped_waypoints: FormControl<any | null | undefined>,

		/**
		 * The total travel time, in milliseconds. To get this information for one 'leg' please read [this blog post](https://www.graphhopper.com/blog/2019/11/28/routing-api-using-path-details/).
		 */
		time: FormControl<number | null | undefined>,
	}
	export function CreateRouteResponsePathFormGroup() {
		return new FormGroup<RouteResponsePathFormProperties>({
			ascend: new FormControl<number | null | undefined>(undefined),
			descend: new FormControl<number | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
			distance: new FormControl<number | null | undefined>(undefined),
			points: new FormControl<any | null | undefined>(undefined),
			points_encoded: new FormControl<boolean | null | undefined>(undefined),
			snapped_waypoints: new FormControl<any | null | undefined>(undefined),
			time: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RouteResponsePathInstructions {

		/**
		 * The distance for this instruction, in meters.
		 */
		distance?: number | null;

		/**
		 * Only available for roundabout instructions (sign is 6). The count of exits at which the route leaves the roundabout.
		 */
		exit_number?: number | null;

		/**
		 * Two indices into `points`, referring to the beginning and the end of the segment of the route
		 * this instruction refers to.
		 */
		interval?: Array<number>;

		/**
		 * A number which specifies the sign to show:
		 * | sign | description  |
		 * |---|---|
		 * |-98| an U-turn without the knowledge if it is a right or left U-turn |
		 * | -8| a left U-turn |
		 * | -7| keep left |
		 * | -6| **not yet used**: leave roundabout |
		 * | -3| turn sharp left |
		 * | -2| turn left |
		 * | -1| turn slight left |
		 * |  0| continue on street |
		 * |  1| turn slight right |
		 * |  2| turn right |
		 * |  3| turn sharp right |
		 * |  4| the finish instruction before the last point |
		 * |  5| the instruction before a via point |
		 * |  6| the instruction before entering a roundabout |
		 * |  7| keep right |
		 * |  8| a right U-turn |
		 * |  *| **For future compatibility** it is important that all clients are able to handle also unknown instruction sign numbers
		 */
		sign?: number | null;

		/**
		 * The name of the street to turn onto in order to follow the route.
		 */
		street_name?: string | null;

		/**
		 * A description what the user has to do in order to follow the route. The language depends on the locale parameter.
		 */
		text?: string | null;

		/**
		 * The duration for this instruction, in milliseconds.
		 */
		time?: number | null;

		/**
		 * Only available for roundabout instructions (sign is 6). The radian of the route within the roundabout `0 < r < 2*PI` for clockwise and
		 * `-2*PI < r < 0` for counterclockwise turns.
		 */
		turn_angle?: number | null;
	}
	export interface RouteResponsePathInstructionsFormProperties {

		/**
		 * The distance for this instruction, in meters.
		 */
		distance: FormControl<number | null | undefined>,

		/**
		 * Only available for roundabout instructions (sign is 6). The count of exits at which the route leaves the roundabout.
		 */
		exit_number: FormControl<number | null | undefined>,

		/**
		 * A number which specifies the sign to show:
		 * | sign | description  |
		 * |---|---|
		 * |-98| an U-turn without the knowledge if it is a right or left U-turn |
		 * | -8| a left U-turn |
		 * | -7| keep left |
		 * | -6| **not yet used**: leave roundabout |
		 * | -3| turn sharp left |
		 * | -2| turn left |
		 * | -1| turn slight left |
		 * |  0| continue on street |
		 * |  1| turn slight right |
		 * |  2| turn right |
		 * |  3| turn sharp right |
		 * |  4| the finish instruction before the last point |
		 * |  5| the instruction before a via point |
		 * |  6| the instruction before entering a roundabout |
		 * |  7| keep right |
		 * |  8| a right U-turn |
		 * |  *| **For future compatibility** it is important that all clients are able to handle also unknown instruction sign numbers
		 */
		sign: FormControl<number | null | undefined>,

		/**
		 * The name of the street to turn onto in order to follow the route.
		 */
		street_name: FormControl<string | null | undefined>,

		/**
		 * A description what the user has to do in order to follow the route. The language depends on the locale parameter.
		 */
		text: FormControl<string | null | undefined>,

		/**
		 * The duration for this instruction, in milliseconds.
		 */
		time: FormControl<number | null | undefined>,

		/**
		 * Only available for roundabout instructions (sign is 6). The radian of the route within the roundabout `0 < r < 2*PI` for clockwise and
		 * `-2*PI < r < 0` for counterclockwise turns.
		 */
		turn_angle: FormControl<number | null | undefined>,
	}
	export function CreateRouteResponsePathInstructionsFormGroup() {
		return new FormGroup<RouteResponsePathInstructionsFormProperties>({
			distance: new FormControl<number | null | undefined>(undefined),
			exit_number: new FormControl<number | null | undefined>(undefined),
			sign: new FormControl<number | null | undefined>(undefined),
			street_name: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<number | null | undefined>(undefined),
			turn_angle: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SymmetricalMatrixRequest {

		/** Optional parameter. It specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. You need to specify this parameter for either none or all points. Only supported for motor vehicles and OpenStreetMap. */
		curbsides?: Array<string>;

		/** Specifies whether or not the matrix calculation should return with an error as soon as possible in case some points cannot be found or some points are not connected. If set to `false` the time/weight/distance matrix will be calculated for all valid points and contain the `null` value for all entries that could not be calculated. The `hint` field of the response will also contain additional information about what went wrong (see its documentation). */
		fail_fast?: boolean | null;

		/** Specifies which matrices should be included in the response. Specify one or more of the following options `weights`, `times`, `distances`. The units of the entries of `distances` are meters, of `times` are seconds and of `weights` is arbitrary and it can differ for different vehicles or versions of this API. */
		out_arrays?: Array<string>;

		/** Optional parameter. Specifies a hint for each point in the `points` array to prefer a certain street for the closest location lookup. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up. */
		point_hints?: Array<string>;

		/** Specify multiple points for which the weight-, route-, time- or distance-matrix should be calculated as follows: `[longitude,latitude]`. In this case the origins are identical to the destinations. Thus, if there are N points, NxN entries are calculated. The order of the point parameter is important. Specify at least three points. Cannot be used together with `from_point` or `to_point.`. */
		points?: Array<string>;

		/** Optional parameter to avoid snapping to a certain road class or road environment. Current supported values `motorway`, `trunk`, `ferry`, `tunnel`, `bridge` and `ford` */
		snap_preventions?: Array<string>;

		/** Specifies if turn restrictions should be considered. Enabling this option increases the matrix computation time. Only supported for motor vehicles and OpenStreetMap. */
		turn_costs?: boolean | null;
		vehicle?: VehicleProfileId;
	}
	export interface SymmetricalMatrixRequestFormProperties {

		/** Specifies whether or not the matrix calculation should return with an error as soon as possible in case some points cannot be found or some points are not connected. If set to `false` the time/weight/distance matrix will be calculated for all valid points and contain the `null` value for all entries that could not be calculated. The `hint` field of the response will also contain additional information about what went wrong (see its documentation). */
		fail_fast: FormControl<boolean | null | undefined>,

		/** Specifies if turn restrictions should be considered. Enabling this option increases the matrix computation time. Only supported for motor vehicles and OpenStreetMap. */
		turn_costs: FormControl<boolean | null | undefined>,
		vehicle: FormControl<VehicleProfileId | null | undefined>,
	}
	export function CreateSymmetricalMatrixRequestFormGroup() {
		return new FormGroup<SymmetricalMatrixRequestFormProperties>({
			fail_fast: new FormControl<boolean | null | undefined>(undefined),
			turn_costs: new FormControl<boolean | null | undefined>(undefined),
			vehicle: new FormControl<VehicleProfileId | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * POST Cluster Endpoint
		 * The Cluster endpoint is used with a POST request towards
		 * `https://graphhopper.com/api/1/cluster?key=<your_key>`. The solution will be provided in the JSON response.
		 * Please note that for problems that take longer than 10 seconds a bad request error is returned.
		 * In this case please use the asynchronous [Batch Cluster Endpoint](#operation/asyncClusteringProblem) instead.
		 * Post cluster
		 * @param {ClusterRequest} requestBody Request object that contains the problem to be solved
		 * @return {ClusterResponse} A response containing the solution
		 */
		SolveClusteringProblem(requestBody: ClusterRequest): Observable<ClusterResponse> {
			return this.http.post<ClusterResponse>(this.baseUri + 'cluster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Batch Cluster Endpoint
		 * Prefer the [synchronous endpoint](#operation/solveClusteringProblem) and use this Batch Cluster endpoint for
		 * long running problems only. The work flow is asynchronous:
		 * - send a POST request towards `https://graphhopper.com/api/1/cluster/calculate?key=<your_key>` and fetch the job_id.
		 * - poll the solution every 500ms until it gives `status=finished`. Do this with a GET request
		 * towards `https://graphhopper.com/api/1/cluster/solution/<job_id>?key=<your_key>`.
		 * Post cluster/calculate
		 * @param {ClusterRequest} requestBody Request object that contains the problem to be solved
		 * @return {JobId} A jobId you can use to retrieve your solution from the server - see solution endpoint.
		 */
		AsyncClusteringProblem(requestBody: ClusterRequest): Observable<JobId> {
			return this.http.post<JobId>(this.baseUri + 'cluster/calculate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * GET Batch Solution Endpoint
		 * This endpoint returns the solution of the clustering problems submitted to the [Batch Cluster endpoint](#operation/asyncClusteringProblem).
		 * You can fetch it with the job_id, you have been sent.
		 * Get cluster/solution/{jobId}
		 * @param {string} jobId Request solution with jobId
		 * @return {ClusterResponse} A response containing the solution
		 */
		GetClusterSolution(jobId: string): Observable<ClusterResponse> {
			return this.http.get<ClusterResponse>(this.baseUri + 'cluster/solution/' + (jobId == null ? '' : encodeURIComponent(jobId)), {});
		}

		/**
		 * Geocoding Endpoint
		 * ### Introduction
		 * ![Geocoding Example](./img/geocoding-example.png)
		 * _Geocoding_ describes the process of transforming an textual address representation to a coordinate (`latitude,longitude`).
		 * For example the conversion from `Berlin` to `52.5170365,13.3888599`.
		 * _Reverse geocoding_ converts a coordinate to a textual address representation or place name. Find out more about Geocoding itself on [Wikipedia](http://en.wikipedia.org/wiki/Geocoding).
		 * Get geocode
		 * @param {string} q If you do forward geocoding, this is `required` and is a textual description of the address you are looking for.
		 * @param {string} locale Display the search results for the specified locale. Currently French (fr), English (en), German (de) and Italian (it) are supported. If the locale wasn't found the default (en) is used.
		 * @param {number} limit Specify the maximum number of results to return
		 * @param {boolean} reverse It is `required` to be `true` if you want to do a reverse geocoding request. If it is `true`, `point` must be defined as well, and `q` must not be used.
		 * @param {boolean} debug If `true`, the output will be formatted.
		 * @param {string} point _Forward geocoding_: The location bias in the format 'latitude,longitude' e.g. point=45.93272,11.58803. _Reverse geocoding_: The location to find amenities, cities.
		 * @param {string} provider The provider parameter is currently under development and can fall back to `default` at any time.
		 * The intend is to provide alternatives to our default geocoder. Each provider has its own strenghts and might fit better for certain scenarios, so it's worth to compare the different providers.
		 * To try it append the `provider`parameter to the URL like `&provider=nominatim`,
		 * the result structure should be identical in all cases - if not, please report this back to us.
		 * Keep in mind that some providers do not support certain parameters or don't return some fields, for example `osm_id` and `osm_type` are not supported by every geocoding provider.
		 * If you would like to use additional parameters of one of the providers, but it's not available for the GraphHopper Geocoding API, yet? Please contact us.
		 * The credit costs can be different for all providers - see [here](https://support.graphhopper.com/support/solutions/articles/44000718211-what-is-one-credit-) for more information about it.
		 * Currently, only the default provider and gisgraphy supports autocompletion of partial search strings.
		 * All providers support normal "forward" geocoding and reverse geocoding via `reverse=true`.
		 * #### Default (`provider=default`)
		 * This provider returns results of our internal geocoding engine, as described above.
		 * In addition to the above documented parameters the following parameters are possible:
		 * * `bbox` - the expected format is `minLon,minLat,maxLon,maxLat`
		 * * `osm_tag` - you can filter `key:value` or exclude places with certain OpenStreetMap tags `!key:value`. E.g. `osm_tag=tourism:museum` or just the key `osm_tag=tourism`. To exclude multiple tags you add multiple `osm_tag` parameters.
		 * #### Nominatim (`provider=nominatim`)
		 * The GraphHopper Directions API uses a commercially hosted Nominatim geocoder. You can try this provider [here](https://nominatim.openstreetmap.org/). The provider does **not** fall under the [restrictions](https://operations.osmfoundation.org/policies/nominatim/) of the Nominatim instance hosted by OpenStreetMap.
		 * In addition to the above documented parameters Nominatim allows to use the following parameters, which can be used as documented [here](https://github.com/openstreetmap/Nominatim/blob/master/docs/api/Search.md#parameters):
		 * * `viewbox` - the expected format is `minLon,minLat,maxLon,maxLat`
		 * * `bounded` - If 1 and a viewbox is given, restrict the result to items contained within that viewbox. Default is 0.
		 * #### Gisgraphy (`provider=gisgraphy`)
		 * This provider returns results from the Gisgraphy geocoder which you can try [here](https://services.gisgraphy.com/static/leaflet/index.html).
		 * **Limitations:** The `locale` parameter is not supported. Gisgraphy does not return OSM tags or an extent.
		 * Gisgraphy has a special autocomplete API, which you can use by adding `autocomplete=true` (does not work with `reverse=true`). The autocomplete API is optimized on predicting text input, but returns less information.
		 * In addition to the above documented parameters Gisgraphy allows to use the following parameters, which can be used as documented [here](https://www.gisgraphy.com/documentation/user-guide.php#geocodingservice):
		 * * `radius` - radius in meters
		 * * `country` - restrict search for the specified country. The value must be the ISO 3166 Alpha 2 code of the country.
		 * #### NetToolKit (`provider=nettoolkit`)
		 * This provider returns results from the NetToolKit provider which is specialized for US addresses and provides a wrapper around Nominatim for other addresses. You can try it [here](https://www.nettoolkit.com/geo/demo).
		 * The following additional NetToolKit parameters are supported (read [here](https://www.nettoolkit.com/docs/geo/geocoding) for more details):
		 * - `source`: User can choose which source provider to geocode the address, this value is "NetToolKit" by default
		 * - `country_code`: an iso-3166-2 country code (e.g : US) filter the results to the specify country code
		 * **Limitations:** NetToolKit does not support the `locale` parameter. NetToolKit does not return OSM tags (e.g. osm_id, osm_type, osm_value).
		 * #### OpenCage Data (`provider=opencagedata`)
		 * This provider returns results from the OpenCageData geocoder which you can try [here](https://geocoder.opencagedata.com/demo).
		 * In addition to the above documented parameters OpenCage Data allows to use the following parameters, which can be used as documented [here](https://geocoder.opencagedata.com/api#forward-opt):
		 * * countrycode - The country code is a two letter code as defined by the ISO 3166-1 Alpha 2 standard. E.g. gb for the United Kingdom, fr for France, us for United States. 
		 * * bounds - the expected format is `minLon,minLat,maxLon,maxLat`
		 * @return {GeocodingResponse} An array found locations
		 */
		GetGeocode(q: string | null | undefined, locale: string | null | undefined, limit: number | null | undefined, reverse: boolean | null | undefined, debug: boolean | null | undefined, point: string | null | undefined, provider: string | null | undefined): Observable<GeocodingResponse> {
			return this.http.get<GeocodingResponse>(this.baseUri + 'geocode?q=' + (q == null ? '' : encodeURIComponent(q)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&limit=' + limit + '&reverse=' + reverse + '&debug=' + debug + '&point=' + (point == null ? '' : encodeURIComponent(point)) + '&provider=' + (provider == null ? '' : encodeURIComponent(provider)), {});
		}

		/**
		 * Isochrone Endpoint
		 * ### Example
		 * You can get an example response via:
		 * ```
		 * curl "https://graphhopper.com/api/1/isochrone?point=51.131108,12.414551&key=[YOUR_KEY]"
		 * ```
		 * Don't forget to replace the placeholder with your own key.
		 * ### Introduction
		 * ![Isochrone screenshot](./img/isochrone-example.png)
		 * An isochrone of a location is ''a line connecting points at which a vehicle arrives at the same time'', see Wikipedia.
		 * With the same API you can also calculate isodistances, just use the parameter distance_limit instead of time_limit`.
		 * ### Use Cases
		 * Some possible areas in which this API may be useful to you:
		 * - real estate analysis
		 * - realtors
		 * - vehicle scheduling
		 * - geomarketing
		 * - reach of electric vehicles
		 * - transport planning
		 * - logistics (distribution and retail network planning)
		 * ### API Clients and Examples
		 * See the [clients](#section/API-Clients) section in the main documentation, and [live examples](https://graphhopper.com/api/1/examples/#isochrone).
		 * Get isochrone
		 * @param {string} point Specify the start coordinate
		 * @param {number} time_limit Specify which time the vehicle should travel. In seconds.
		 * @param {number} distance_limit Specify which distance the vehicle should travel. In meters.
		 * @param {VehicleProfileId} vehicle The vehicle profile for which the route should be calculated.
		 * @param {number} buckets Number by which to divide the given `time_limit` to create `buckets` nested isochrones of time intervals `time_limit-n*time_limit/buckets`. Applies analogously to `distance_limit`.
		 * @param {boolean} reverse_flow If `false` the flow goes from point to the polygon, if `true` the flow goes from the polygon "inside" to the point.
		 * Example use case for `false`&#58; *How many potential customer can be reached within 30min travel time from your store* vs. `true`&#58; *How many customers can reach your store within 30min travel time.*
		 * @param {GetIsochroneWeighting} weighting Use `"shortest"` to get an isodistance line instead of an isochrone.
		 * @return {IsochroneResponse} Isochrone Result
		 */
		GetIsochrone(point: string, time_limit: number | null | undefined, distance_limit: number | null | undefined, vehicle: VehicleProfileId | null | undefined, buckets: number | null | undefined, reverse_flow: boolean | null | undefined, weighting: GetIsochroneWeighting | null | undefined): Observable<IsochroneResponse> {
			return this.http.get<IsochroneResponse>(this.baseUri + 'isochrone?point=' + (point == null ? '' : encodeURIComponent(point)) + '&time_limit=' + time_limit + '&distance_limit=' + distance_limit + '&vehicle=' + vehicle + '&buckets=' + buckets + '&reverse_flow=' + reverse_flow + '&weighting=' + weighting, {});
		}

		/**
		 * Map-match a GPX file
		 * ### Example
		 * You get an example response for a GPX via:
		 * ```
		 * curl -XPOST -H "Content-Type: application/gpx+xml" "https://graphhopper.com/api/1/match?vehicle=car&key=[YOUR_KEY]" --data @/path/to/some.gpx
		 * ```
		 * A minimal working GPX file looks like
		 * ```gpx
		 * <gpx>
		 * <trk>
		 * <trkseg>
		 * <trkpt lat="51.343657" lon="12.360708"></trkpt>
		 * <trkpt lat="51.343796" lon="12.361337"></trkpt>
		 * <trkpt lat="51.342784" lon="12.361882"></trkpt>
		 * </trkseg>
		 * </trk>
		 * </gpx>
		 * ```
		 * ### Introduction
		 * ![Map Matching screenshot](./img/map-matching-example.gif)
		 * The Map Matching API is part of the GraphHopper Directions API and with this API you can snap measured GPS points typically as GPX files to a digital
		 * road network to e.g. clean data or attach certain data like elevation or turn instructions to it. Read more at Wikipedia.
		 * In the example screenshot above and demo you see the Map Matching API in action where the black line is the GPS track and the green one is matched result.
		 * Most of the times, you can simply POST a GPX file, but some of the request parameters of the [Routing API](#tag/Routing-API) apply here, too.
		 * ### API Clients and Examples
		 * See the [clients](#section/API-Clients) section in the main documentation, and [live examples](https://graphhopper.com/api/1/examples/#map-matching).
		 * ### Limits and Counts
		 * The cost for one request depends on the number of GPS location and is documented [here](https://graphhopper.com/api/1/docs/FAQ/).
		 * One request should not exceed the Map Matching API location limit depending on the package, see the pricing in our dashboard.
		 * Post match
		 * @param {number} gps_accuracy Specify the precision of a point, in meter
		 * @param {string} vehicle Specify the vehicle profile like car
		 * @return {RouteResponse} Routing Result
		 */
		PostGPX(gps_accuracy: number | null | undefined, vehicle: string | null | undefined): Observable<RouteResponse> {
			return this.http.post<RouteResponse>(this.baseUri + 'match?gps_accuracy=' + gps_accuracy + '&vehicle=' + (vehicle == null ? '' : encodeURIComponent(vehicle)), null, {});
		}

		/**
		 * GET Matrix Endpoint
		 * With this Matrix Endpoint you submit the points and parameters via URL parameters and is the most convenient
		 * as it works out-of-the-box in the browser. If possible you should
		 * prefer using the [POST Matrix Endpoint](#operation/postMatrix) that avoids problems with many locations
		 * and can also gzip the **request**. (Note, that all endpoints return gzipped responses).
		 * Get matrix
		 * @param {Array<string>} point Specify multiple points in `latitude,longitude` for which the weight-, route-, time- or distance-matrix should be calculated. In this case the starts are identical to the destinations. If there are N points, then NxN entries will be calculated. The order of the point parameter is important. Specify at least three points. Cannot be used together with from_point or to_point.
		 * @param {Array<string>} from_point The starting points for the routes in `latitude,longitude`. E.g. if you want to calculate the three routes A-&gt;1, A-&gt;2, A-&gt;3 then you have one from_point parameter and three to_point parameters.
		 * @param {Array<string>} to_point The destination points for the routes in `latitude,longitude`.
		 * @param {Array<string>} point_hint Optional parameter. Specifies a hint for each `point` parameter to prefer a certain street for the closest location lookup. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up.
		 * @param {Array<string>} from_point_hint For the from_point parameter. See point_hint
		 * @param {Array<string>} to_point_hint For the to_point parameter. See point_hint
		 * @param {Array<string>} snap_prevention Optional parameter to avoid snapping to a certain road class or road environment. Current supported values `motorway`, `trunk`, `ferry`, `tunnel`, `bridge` and `ford`. Multiple values are specified like `snap_prevention=ferry&snap_prevention=motorway`
		 * @param {Array<string>} curbside Optional parameter. It specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. You need to specify this parameter for either none or all points. Only supported for motor vehicles and OpenStreetMap.
		 * @param {Array<string>} from_curbside Curbside setting for the from_point parameter. See curbside.
		 * @param {Array<string>} to_curbside Curbside setting for the to_point parameter. See curbside.
		 * @param {Array<string>} out_array Specifies which arrays should be included in the response. Specify one or more of the following options 'weights', 'times', 'distances'. To specify more than one array use e.g. out_array=times&out_array=distances. The units of the entries of distances are meters, of times are seconds and of weights is arbitrary and it can differ for different vehicles or versions of this API.
		 * @param {VehicleProfileId} vehicle The vehicle profile for which the matrix should be calculated.
		 * @param {boolean} fail_fast Specifies whether or not the matrix calculation should return with an error as soon as possible in case some points cannot be found or some points are not connected. If set to `false` the time/weight/distance matrix will be calculated for all valid points and contain the `null` value for all entries that could not be calculated. The `hint` field of the response will also contain additional information about what went wrong (see its documentation).
		 * @param {boolean} turn_costs Specifies if turn restrictions should be considered. Enabling this option increases the matrix computation time. Only supported for motor vehicles and OpenStreetMap.
		 * @return {MatrixResponse} Matrix API response
		 */
		GetMatrix(point: Array<string> | null | undefined, from_point: Array<string> | null | undefined, to_point: Array<string> | null | undefined, point_hint: Array<string> | null | undefined, from_point_hint: Array<string> | null | undefined, to_point_hint: Array<string> | null | undefined, snap_prevention: Array<string> | null | undefined, curbside: Array<string> | null | undefined, from_curbside: Array<string> | null | undefined, to_curbside: Array<string> | null | undefined, out_array: Array<string> | null | undefined, vehicle: VehicleProfileId | null | undefined, fail_fast: boolean | null | undefined, turn_costs: boolean | null | undefined): Observable<MatrixResponse> {
			return this.http.get<MatrixResponse>(this.baseUri + 'matrix?' + point?.map(z => `point=${encodeURIComponent(z)}`).join('&') + '&' + from_point?.map(z => `from_point=${encodeURIComponent(z)}`).join('&') + '&' + to_point?.map(z => `to_point=${encodeURIComponent(z)}`).join('&') + '&' + point_hint?.map(z => `point_hint=${encodeURIComponent(z)}`).join('&') + '&' + from_point_hint?.map(z => `from_point_hint=${encodeURIComponent(z)}`).join('&') + '&' + to_point_hint?.map(z => `to_point_hint=${encodeURIComponent(z)}`).join('&') + '&' + snap_prevention?.map(z => `snap_prevention=${encodeURIComponent(z)}`).join('&') + '&' + curbside?.map(z => `curbside=${encodeURIComponent(z)}`).join('&') + '&' + from_curbside?.map(z => `from_curbside=${encodeURIComponent(z)}`).join('&') + '&' + to_curbside?.map(z => `to_curbside=${encodeURIComponent(z)}`).join('&') + '&' + out_array?.map(z => `out_array=${encodeURIComponent(z)}`).join('&') + '&vehicle=' + vehicle + '&fail_fast=' + fail_fast + '&turn_costs=' + turn_costs, {});
		}

		/**
		 * POST Matrix Endpoint
		 * The [GET endpoint](#operation/getMatrix) has an URL length limitation, which hurts for many locations per request.
		 * In those cases use this POST endpoint with a JSON as input. The only parameter in the URL will be the key.
		 * Both request scenarios are identical except that all singular parameter names are named as their plural for a POST request.
		 * The effected parameters are: `points`, `from_points`, `to_points`, and `out_arrays`. For the remaining parameters
		 * please refer to the [guide of the GET endpoint](#operation/getMatrix).
		 * **Please note that in contrast to GET endpoint the points have to be specified as `[longitude, latitude]` array (in that order, similar to [GeoJson](http://geojson.org/geojson-spec.html#examples))**.
		 * For example the query `point=10,11&point=20,22&vehicle=car` will be converted to the following JSON:
		 * ```json
		 * { "points": [[11,10], [22,20]], "vehicle": "car" }
		 * ```
		 * A complete curl Example:
		 * ```bash
		 * curl -X POST -H "Content-Type: application/json" "https://graphhopper.com/api/1/matrix?key=[YOUR_KEY]" -d '{"elevation":false,"out_arrays":["weights", "times"],"from_points":[[-0.087891,51.534377],[-0.090637,51.467697],[-0.171833,51.521241],[-0.211487,51.473685]],"to_points":[[-0.087891,51.534377],[-0.090637,51.467697],[-0.171833,51.521241],[-0.211487,51.473685]],"vehicle":"car"}'
		 * ```
		 * Post matrix
		 * @return {MatrixResponse} Matrix API response
		 */
		PostMatrix(requestBody: MatrixRequest): Observable<MatrixResponse> {
			return this.http.post<MatrixResponse>(this.baseUri + 'matrix', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Batch Matrix Endpoint
		 * Prefer the [synchronous endpoint](#operation/postMatrix) and use this Batch endpoint for long running problems only.
		 * The Batch Matrix endpoint allows using matrices with more locations and works asynchronously - similar to the [Batch Route Optimization endpoint](#operation/asyncVRP):
		 * * Create a HTTP POST request against `/matrix/calculate` and add the key in the URL: `/matrix/calculate?key=[YOUR_KEY]`. This will give you the `job_id` from the response json like `{ "job_id": "7ac65787-fb99-4e02-a832-2c3010c70097" }`
		 * * Poll via HTTP GET requests every 500ms against `/matrix/solution/[job_id]`
		 * Here are some full examples via curl:
		 * ```bash
		 * $ curl -X POST -H "Content-Type: application/json" "https://graphhopper.com/api/1/matrix/calculate?key=[YOUR_KEY]" -d '{"points":[[13.29895,52.48696],[13.370876,52.489575],[13.439026,52.511206]]}'
		 * {"job_id":"7ac65787-fb99-4e02-a832-2c3010c70097"}
		 * ```
		 * Pick the returned `job_id` and use it in the next GET requests:
		 * ```bash
		 * $ curl -X GET "https://graphhopper.com/api/1/matrix/solution/7ac65787-fb99-4e02-a832-2c3010c70097?key=[YOUR_KEY]"
		 * {"status":"waiting"}
		 * ```
		 * When the calculation is finished (`status:finished`) the JSON response will contain the full matrix JSON under `solution`:
		 * ```bash
		 * $ curl -X GET "https://graphhopper.com/api/1/matrix/solution/7ac65787-fb99-4e02-a832-2c3010c70097?key=[YOUR_KEY]"
		 * {"solution":{"weights":[[0.0,470.453,945.414],[503.793,0.0,580.871],[970.49,569.511,0.0]],"info":{"copyrights":["GraphHopper","OpenStreetMap contributors"]}},"status":"finished"}
		 * ```
		 * Please note that if an error occured while calculation the JSON will not have a status but contain directly the error message e.g.:
		 * ```json
		 * {"message":"Cannot find from_points: 1"}
		 * ```
		 * And the optional `hints` array.
		 * Post matrix/calculate
		 * @return {JobId} A jobId you can use to retrieve your solution from the server.
		 */
		CalculateMatrix(requestBody: MatrixRequest): Observable<JobId> {
			return this.http.post<JobId>(this.baseUri + 'matrix/calculate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * GET Batch Matrix Endpoint
		 * This endpoint returns the solution of a JSON submitted to the Batch Matrix endpoint. You can fetch it with the job_id, you have been sent.
		 * Get matrix/solution/{jobId}
		 * @param {string} jobId Request solution with jobId
		 * @return {MatrixResponse} A response containing the matrix
		 */
		GetMatrixSolution(jobId: string): Observable<MatrixResponse> {
			return this.http.get<MatrixResponse>(this.baseUri + 'matrix/solution/' + (jobId == null ? '' : encodeURIComponent(jobId)), {});
		}

		/**
		 * GET Route Endpoint
		 * The GET request is the most simple one: just specify the parameter in the URL and you are done.
		 * Can be tried directly in every browser.
		 * Get route
		 * @param {Array<string>} point The points for which the route should be calculated. Format: `[latitude,longitude]`. Specify at least an origin and a destination. Via points are possible.
		 * The maximum number depends on your plan.
		 * @param {Array<string>} point_hint The `point_hint` is typically a road name to which the associated `point` parameter should be snapped to. Specify no `point_hint` parameter or the same number as you have `point` parameters.
		 * @param {Array<string>} snap_prevention Optional parameter to avoid snapping to a certain road class or road environment. Currently supported values are `motorway`, `trunk`, `ferry`, `tunnel`, `bridge` and `ford`. Multiple values are specified like `snap_prevention=ferry&snap_prevention=motorway`.
		 * @param {VehicleProfileId} vehicle The vehicle profile for which the route should be calculated.
		 * @param {Array<string>} curbside Optional parameter. It specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. You need to specify this parameter for either none or all points. Only supported for motor vehicles and OpenStreetMap.
		 * @param {boolean} turn_costs Specifies if turn restrictions should be considered. Enabling this option increases the route computation time. Only supported for motor vehicles and OpenStreetMap.
		 * @param {string} locale The locale of the resulting turn instructions. E.g. `pt_PT` for Portuguese or `de` for German.
		 * @param {boolean} elevation If `true`, a third coordinate, the altitude, is included with all positions in the response.
		 * This changes the format of the `points` and `snapped_waypoints` fields of the response, in both their
		 * encodings. Unless you switch off the `points_encoded` parameter, you need special code on the
		 * client side that can handle three-dimensional coordinates.
		 * A request can fail if the vehicle profile does not support elevation. See the features object for every vehicle profile.
		 * @param {Array<string>} details Optional parameter to retrieve path details. You can request additional details for the route: `street_name`, 
		 * `time`, `distance`, `max_speed`, `toll`, `road_class`, `road_class_link`, `road_access`, `road_environment`, `lanes`, and `surface`. Read more about the usage of path details [here](https://discuss.graphhopper.com/t/2539).
		 * @param {string} optimize Normally, the calculated route will visit the points in the order you specified them.
		 * If you have more than two points, you can set this parameter to `"true"` and the points may be re-ordered to minimize the total travel time.
		 * Keep in mind that the limits on the number of locations of the Route Optimization API applies, and the request costs more credits.
		 * @param {boolean} instructions If instructions should be calculated and returned
		 * @param {boolean} calc_points If the points for the route should be calculated at all.
		 * @param {boolean} debug If `true`, the output will be formatted.
		 * @param {boolean} points_encoded Allows changing the encoding of location data in the response. The default is polyline encoding, which is compact
		 * but requires special client code to unpack. (We provide it in our JavaScript client library!)
		 * Set this parameter to `false` to switch the encoding to simple coordinate pairs like `[lon,lat]`, or `[lon,lat,elevation]`.
		 * See the description of the response format for more information.
		 * @param {boolean} ch_disable Use this parameter in combination with one or more parameters from below.
		 * @param {string} weighting Determines the way the "best" route is calculated. Besides `fastest` you can use `short_fastest` which finds a reasonable balance between the distance influence (`shortest`) and the time (`fastest`). You could also use `shortest` but is deprecated and not recommended for motor vehicles. All except `fastest` require `ch.disable=true`.
		 * @param {Array<number>} heading Favour a heading direction for a certain point. Specify either one heading for the start point or as many as there are points.
		 * In this case headings are associated by their order to the specific points. Headings are given as north based clockwise angle between 0 and 360 degree.
		 * This parameter also influences the tour generated with `algorithm=round_trip` and forces the initial direction.  Requires `ch.disable=true`.
		 * @param {number} heading_penalty Time penalty in seconds for not obeying a specified heading. Requires `ch.disable=true`.
		 * @param {boolean} pass_through If `true`, u-turns are avoided at via-points with regard to the `heading_penalty`. Requires `ch.disable=true`.
		 * @param {string} block_area Block road access by specifying a point close to the road segment to be blocked, with the format `lat,lon`.
		 * You can also block all road segments crossing a geometric shape. Specify a circle using the format `lat,lon,radius`, or a polygon using the format `lat1,lon1,lat2,lon2,...,latN,lonN`.
		 * You can specify several shapes, separating them with `;`. Requires `ch.disable=true`.
		 * @param {string} avoid Specify which road classes and environments you would like to avoid. 
		 * Possible values are `motorway`, `steps`, `track`, `toll`, `ferry`, `tunnel` and `bridge`.
		 * Separate several values with `;`. Obviously not all the values make sense for all vehicle profiles e.g. `bike` is already forbidden on a `motorway`. Requires `ch.disable=true`.
		 * @param {RouteRequestAlgorithm} algorithm Rather than looking for the shortest or fastest path, this parameter lets you solve two different problems related to routing:
		 * With `alternative_route`, we give you not one but several routes that are close to optimal, but
		 * not too similar to each other. 
		 * With `round_trip`, the route will get you back to where you started. This is meant for fun (think of
		 * a bike trip), so we will add some randomness. The `round_trip` option requires `ch.disable=true`.
		 * You can control both of these features with additional parameters, see below. 
		 * @param {number} round_trip_distance If `algorithm=round_trip`, this parameter configures approximative length of the resulting round trip. Requires `ch.disable=true`.
		 * @param {number} round_trip_seed If `algorithm=round_trip`, this sets the random seed. Change this to get a different tour for each value.
		 * @param {number} alternative_route_max_paths If `algorithm=alternative_route`, this parameter sets the number of maximum paths which should be calculated. Increasing can lead to worse alternatives.
		 * @param {number} alternative_route_max_weight_factor If `algorithm=alternative_route`, this parameter sets the factor by which the alternatives routes can be longer than the optimal route. Increasing can lead to worse alternatives.
		 * @param {number} alternative_route_max_share_factor If `algorithm=alternative_route`, this parameter specifies how similar an alternative route can be to the optimal route. Increasing can lead to worse alternatives.
		 * @return {RouteResponse} Routing Result
		 */
		GetRoute(point: Array<string>, point_hint: Array<string> | null | undefined, snap_prevention: Array<string> | null | undefined, vehicle: VehicleProfileId | null | undefined, curbside: Array<string> | null | undefined, turn_costs: boolean | null | undefined, locale: string | null | undefined, elevation: boolean | null | undefined, details: Array<string> | null | undefined, optimize: string | null | undefined, instructions: boolean | null | undefined, calc_points: boolean | null | undefined, debug: boolean | null | undefined, points_encoded: boolean | null | undefined, ch_disable: boolean | null | undefined, weighting: string | null | undefined, heading: Array<number> | null | undefined, heading_penalty: number | null | undefined, pass_through: boolean | null | undefined, block_area: string | null | undefined, avoid: string | null | undefined, algorithm: RouteRequestAlgorithm | null | undefined, round_trip_distance: number | null | undefined, round_trip_seed: number | null | undefined, alternative_route_max_paths: number | null | undefined, alternative_route_max_weight_factor: number | null | undefined, alternative_route_max_share_factor: number | null | undefined): Observable<RouteResponse> {
			return this.http.get<RouteResponse>(this.baseUri + 'route?' + point.map(z => `point=${encodeURIComponent(z)}`).join('&') + '&' + point_hint?.map(z => `point_hint=${encodeURIComponent(z)}`).join('&') + '&' + snap_prevention?.map(z => `snap_prevention=${encodeURIComponent(z)}`).join('&') + '&vehicle=' + vehicle + '&' + curbside?.map(z => `curbside=${encodeURIComponent(z)}`).join('&') + '&turn_costs=' + turn_costs + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&elevation=' + elevation + '&' + details?.map(z => `details=${encodeURIComponent(z)}`).join('&') + '&optimize=' + (optimize == null ? '' : encodeURIComponent(optimize)) + '&instructions=' + instructions + '&calc_points=' + calc_points + '&debug=' + debug + '&points_encoded=' + points_encoded + '&ch_disable=' + ch_disable + '&weighting=' + (weighting == null ? '' : encodeURIComponent(weighting)) + '&' + heading?.map(z => `heading=${z}`).join('&') + '&heading_penalty=' + heading_penalty + '&pass_through=' + pass_through + '&block_area=' + (block_area == null ? '' : encodeURIComponent(block_area)) + '&avoid=' + (avoid == null ? '' : encodeURIComponent(avoid)) + '&algorithm=' + algorithm + '&round_trip_distance=' + round_trip_distance + '&round_trip_seed=' + round_trip_seed + '&alternative_route_max_paths=' + alternative_route_max_paths + '&alternative_route_max_weight_factor=' + alternative_route_max_weight_factor + '&alternative_route_max_share_factor=' + alternative_route_max_share_factor, {});
		}

		/**
		 * POST Route Endpoint
		 * Please see the [GET endpoint](#operation/getRoute) for a simpler method on how to get started.
		 * If you are familiar with POST requests and JSON then do not hesitate to continue here.
		 * Especially when you use many locations you should get familiar with this POST endpoint as the GET endpoint
		 * has an URL length limitation. Additionally the request of this POST endpoint can be compressed and can slightly
		 * speed up the request.
		 * To do a request you send JSON data. Both request scenarios GET and POST are identical except that all singular parameter names are named as their plural for a POST request.
		 * The effected parameters are: `points`, `point_hints` and `snap_preventions`.
		 * **Please note that in opposite to the GET endpoint, points are specified in the order of `longitude, latitude`**.
		 * For example `point=10,11&point=20,22` will be converted to the `points` array (plural):
		 * ```json
		 * { "points": [[11,10], [22,20]] }
		 * ```
		 * Note again that also the order changes from `[latitude,longitude]` to `[longitude,latitude]`
		 * similar to [GeoJson](http://geojson.org/geojson-spec.html#examples).
		 * Example:
		 * ```bash
		 * curl -X POST -H "Content-Type: application/json" "https://graphhopper.com/api/1/route?key=[YOUR_KEY]" -d '{"elevation":false,"points":[[-0.087891,51.534377],[-0.090637,51.467697]],"vehicle":"car"}'
		 * ```
		 * Post route
		 * @return {RouteResponse} Routing Result
		 */
		PostRoute(requestBody: RouteRequest): Observable<RouteResponse> {
			return this.http.post<RouteResponse>(this.baseUri + 'route', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Coverage information
		 * Use this to find out details about the supported vehicle profiles and features, or if you just need to ping the server.
		 * Get route/info
		 * @return {InfoResponse} Coverage Information
		 */
		Routing_APIGet(): Observable<InfoResponse> {
			return this.http.get<InfoResponse>(this.baseUri + 'route/info', {});
		}

		/**
		 * POST route optimization problem
		 * To get started with the Route Optimization API, please read the [introduction](#tag/Route-Optimization-API).
		 * To solve a new vehicle routing problem, make a HTTP POST to this URL
		 * ```
		 * https://graphhopper.com/api/1/vrp?key=<your_key>
		 * ```
		 * It returns the solution to this problem in the JSON response.
		 * Please note that this URL is very well suited to solve minor problems.
		 * Larger vehicle routing problems, which take longer than 10 seconds to solve, cannot be solved.
		 * To solve them, please use the [batch mode URL](#operation/asyncVRP) instead.
		 * Post vrp
		 * @param {Request} requestBody The request that contains the vehicle routing problem to be solved.
		 * @return {Response} A response containing the solution
		 */
		SolveVRP(requestBody: Request): Observable<Response> {
			return this.http.post<Response>(this.baseUri + 'vrp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * POST route optimization problem (batch mode)
		 * To solve a vehicle routing problem, perform the following steps:
		 * 1.) Make a HTTP POST to this URL
		 * ```
		 * https://graphhopper.com/api/1/vrp/optimize?key=<your_key>
		 * ```
		 * It returns a job id (job_id).
		 * 2.) Take the job id and fetch the solution for the vehicle routing problem from this URL:
		 * ```
		 * https://graphhopper.com/api/1/vrp/solution/<job_id>?key=<your_key>
		 * ```
		 * We recommend to query the solution every 500ms until it returns 'status=finished'.
		 * **Note**: Since the workflow is a bit more cumbersome and since you lose some time in fetching the solution, you should always prefer
		 * the [synchronous endpoint](#operation/solveVRP). You should use the batch mode only for long running problems.
		 * Post vrp/optimize
		 * @param {Request} requestBody The request that contains the problem to be solved.
		 * @return {JobId} A jobId you can use to retrieve your solution from the server - see solution endpoint.
		 */
		AsyncVRP(requestBody: Request): Observable<JobId> {
			return this.http.post<JobId>(this.baseUri + 'vrp/optimize', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * GET the solution (batch mode)
		 * Take the job id and fetch the solution for the vehicle routing problem from this URL:
		 * ```
		 * https://graphhopper.com/api/1/vrp/solution/<job_id>?key=<your_key>
		 * ```
		 * You get the job id by sending a vehicle routing problem to the [batch mode URL](#operation/asyncVRP).
		 * Get vrp/solution/{jobId}
		 * @param {string} jobId Request solution with jobId
		 * @return {Response} A response containing the solution
		 */
		GetSolution(jobId: string): Observable<Response> {
			return this.http.get<Response>(this.baseUri + 'vrp/solution/' + (jobId == null ? '' : encodeURIComponent(jobId)), {});
		}
	}

	export enum GetIsochroneWeighting { fastest = 'fastest', shortest = 'shortest' }

}

