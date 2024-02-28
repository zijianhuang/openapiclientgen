import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Activity {

		/**
		 * arrival time at this activity in ms
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		arr_time?: string | null;

		/**
		 * cumulated distance from start to this activity in m
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		distance?: string | null;

		/**
		 * driving time of driver in ms
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		driving_time?: string | null;

		/**
		 * end time of and thus departure time at this activity
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		end_time?: string | null;

		/** id referring to the underlying service or shipment, i.e. the shipment or service this activity belongs to */
		id?: string | null;

		/** Array with size/capacity dimensions after this activity */
		load_after?: Array<number>;

		/** Array with size/capacity dimensions before this activity */
		load_before?: Array<number>;

		/** id that refers to address */
		location_id?: string | null;

		/** type of activity */
		type?: ActivityType | null;

		/**
		 * waiting time at this activity in ms
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		waiting_time?: string | null;
	}
	export interface ActivityFormProperties {

		/**
		 * arrival time at this activity in ms
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		arr_time: FormControl<string | null | undefined>,

		/**
		 * cumulated distance from start to this activity in m
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		distance: FormControl<string | null | undefined>,

		/**
		 * driving time of driver in ms
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		driving_time: FormControl<string | null | undefined>,

		/**
		 * end time of and thus departure time at this activity
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		end_time: FormControl<string | null | undefined>,

		/** id referring to the underlying service or shipment, i.e. the shipment or service this activity belongs to */
		id: FormControl<string | null | undefined>,

		/** id that refers to address */
		location_id: FormControl<string | null | undefined>,

		/** type of activity */
		type: FormControl<ActivityType | null | undefined>,

		/**
		 * waiting time at this activity in ms
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		waiting_time: FormControl<string | null | undefined>,
	}
	export function CreateActivityFormGroup() {
		return new FormGroup<ActivityFormProperties>({
			arr_time: new FormControl<string | null | undefined>(undefined),
			distance: new FormControl<string | null | undefined>(undefined),
			driving_time: new FormControl<string | null | undefined>(undefined),
			end_time: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location_id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ActivityType | null | undefined>(undefined),
			waiting_time: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ActivityType { start = 'start', end = 'end', service = 'service', pickupShipment = 'pickupShipment', deliverShipment = 'deliverShipment', pickup = 'pickup', delivery = 'delivery' }

	export interface Address {

		/**
		 * latitude
		 * Type: double
		 */
		lat?: number | null;

		/** Unique identifier of location */
		location_id?: string | null;

		/**
		 * longitude
		 * Type: double
		 */
		lon?: number | null;
	}
	export interface AddressFormProperties {

		/**
		 * latitude
		 * Type: double
		 */
		lat: FormControl<number | null | undefined>,

		/** Unique identifier of location */
		location_id: FormControl<string | null | undefined>,

		/**
		 * longitude
		 * Type: double
		 */
		lon: FormControl<number | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			lat: new FormControl<number | null | undefined>(undefined),
			location_id: new FormControl<string | null | undefined>(undefined),
			lon: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Algorithm {
		objective?: AlgorithmObjective | null;
		problem_type?: AlgorithmProblem_type | null;
	}
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

	export interface Break {

		/**
		 * duration of break
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		duration?: string | null;

		/**
		 * earliest start of break
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		earliest?: string | null;

		/**
		 * initial driving time, i.e. the time your driver has already spent for driving
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		initial_driving_time?: string | null;

		/**
		 * latest start of break
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		latest?: string | null;

		/**
		 * max driving time without break
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		max_driving_time?: string | null;

		/** array of splits */
		possible_split?: Array<number>;
	}
	export interface BreakFormProperties {

		/**
		 * duration of break
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		duration: FormControl<string | null | undefined>,

		/**
		 * earliest start of break
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		earliest: FormControl<string | null | undefined>,

		/**
		 * initial driving time, i.e. the time your driver has already spent for driving
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		initial_driving_time: FormControl<string | null | undefined>,

		/**
		 * latest start of break
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		latest: FormControl<string | null | undefined>,

		/**
		 * max driving time without break
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		max_driving_time: FormControl<string | null | undefined>,
	}
	export function CreateBreakFormGroup() {
		return new FormGroup<BreakFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined),
			earliest: new FormControl<string | null | undefined>(undefined),
			initial_driving_time: new FormControl<string | null | undefined>(undefined),
			latest: new FormControl<string | null | undefined>(undefined),
			max_driving_time: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CostMatrix {

		/** vehicle profile or empty if catch all fallback */
		profile?: string | null;

		/** type of cost matrix, currently default or google are supported */
		type?: CostMatrixType | null;

		/** URL of matrix service */
		url?: string | null;
	}
	export interface CostMatrixFormProperties {

		/** vehicle profile or empty if catch all fallback */
		profile: FormControl<string | null | undefined>,

		/** type of cost matrix, currently default or google are supported */
		type: FormControl<CostMatrixType | null | undefined>,

		/** URL of matrix service */
		url: FormControl<string | null | undefined>,
	}
	export function CreateCostMatrixFormGroup() {
		return new FormGroup<CostMatrixFormProperties>({
			profile: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CostMatrixType | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CostMatrixType { default = 'default', google = 'google' }

	export interface JobId {

		/** unique id for your job/request with which you can fetch your solution */
		job_id?: string | null;
	}
	export interface JobIdFormProperties {

		/** unique id for your job/request with which you can fetch your solution */
		job_id: FormControl<string | null | undefined>,
	}
	export function CreateJobIdFormGroup() {
		return new FormGroup<JobIdFormProperties>({
			job_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Objective {

		/** type of objective function, i.e. min or min-max */
		type?: AlgorithmProblem_type | null;

		/** objective function value */
		value?: ObjectiveValue | null;
	}
	export interface ObjectiveFormProperties {

		/** type of objective function, i.e. min or min-max */
		type: FormControl<AlgorithmProblem_type | null | undefined>,

		/** objective function value */
		value: FormControl<ObjectiveValue | null | undefined>,
	}
	export function CreateObjectiveFormGroup() {
		return new FormGroup<ObjectiveFormProperties>({
			type: new FormControl<AlgorithmProblem_type | null | undefined>(undefined),
			value: new FormControl<ObjectiveValue | null | undefined>(undefined),
		});

	}

	export enum ObjectiveValue { completion_time = 'completion_time', transport_time = 'transport_time', vehicles = 'vehicles' }

	export interface Relation {

		/** An array of ids that should be related */
		ids?: Array<string>;

		/** identifier of relation */
		type?: string | null;

		/** vehicle id */
		vehicle_id?: string | null;
	}
	export interface RelationFormProperties {

		/** identifier of relation */
		type: FormControl<string | null | undefined>,

		/** vehicle id */
		vehicle_id: FormControl<string | null | undefined>,
	}
	export function CreateRelationFormGroup() {
		return new FormGroup<RelationFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			vehicle_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Request {
		algorithm?: Algorithm;

		/** An array of cost matrices */
		cost_matrices?: Array<CostMatrix>;

		/** An array of objectives */
		objectives?: Array<Objective>;

		/** An array of relations */
		relations?: Array<Relation>;

		/** An array of services */
		services?: Array<Service>;

		/** An array of shipments */
		shipments?: Array<Shipment>;

		/** An array of vehicle types */
		vehicle_types?: Array<VehicleType>;

		/** An array of vehicles that can be employed */
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

		/** array of allowed vehicle ids */
		allowed_vehicles?: Array<string>;

		/**
		 * duration of service, i.e. time in ms the corresponding activity takes
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		duration?: string | null;

		/** Unique identifier of service */
		id?: string | null;

		/** name of service */
		name?: string | null;

		/**
		 * priority of service, i.e. 1 = high, 2 = normal, 3 = low. default is 2.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority?: number | null;

		/** array of required skills */
		required_skills?: Array<string>;

		/** array of capacity dimensions */
		size?: Array<number>;

		/** array of time windows. currently, only a single time window is allowed */
		time_windows?: Array<TimeWindow>;

		/** type of service */
		type?: ServiceType | null;
	}
	export interface ServiceFormProperties {

		/**
		 * duration of service, i.e. time in ms the corresponding activity takes
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		duration: FormControl<string | null | undefined>,

		/** Unique identifier of service */
		id: FormControl<string | null | undefined>,

		/** name of service */
		name: FormControl<string | null | undefined>,

		/**
		 * priority of service, i.e. 1 = high, 2 = normal, 3 = low. default is 2.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority: FormControl<number | null | undefined>,

		/** type of service */
		type: FormControl<ServiceType | null | undefined>,
	}
	export function CreateServiceFormGroup() {
		return new FormGroup<ServiceFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<ServiceType | null | undefined>(undefined),
		});

	}

	export interface TimeWindow {

		/**
		 * earliest start time of corresponding activity
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		earliest?: string | null;

		/**
		 * latest start time of corresponding activity
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		latest?: string | null;
	}
	export interface TimeWindowFormProperties {

		/**
		 * earliest start time of corresponding activity
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		earliest: FormControl<string | null | undefined>,

		/**
		 * latest start time of corresponding activity
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		latest: FormControl<string | null | undefined>,
	}
	export function CreateTimeWindowFormGroup() {
		return new FormGroup<TimeWindowFormProperties>({
			earliest: new FormControl<string | null | undefined>(undefined),
			latest: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ServiceType { service = 'service', pickup = 'pickup', delivery = 'delivery' }

	export interface Shipment {

		/** array of allowed vehicle ids */
		allowed_vehicles?: Array<string>;
		delivery?: Stop;

		/** Unique identifier of service */
		id?: string | null;

		/** name of shipment */
		name?: string | null;
		pickup?: Stop;

		/**
		 * priority of service, i.e. 1 = high, 2 = normal, 3 = low. default is 2.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority?: number | null;

		/** array of required skills */
		required_skills?: Array<string>;

		/** array of capacity dimensions */
		size?: Array<number>;
	}
	export interface ShipmentFormProperties {

		/** Unique identifier of service */
		id: FormControl<string | null | undefined>,

		/** name of shipment */
		name: FormControl<string | null | undefined>,

		/**
		 * priority of service, i.e. 1 = high, 2 = normal, 3 = low. default is 2.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority: FormControl<number | null | undefined>,
	}
	export function CreateShipmentFormGroup() {
		return new FormGroup<ShipmentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Stop {
		address?: Address;

		/**
		 * duration of stop, i.e. time in ms the corresponding activity takes
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		duration?: string | null;

		/** array of time windows. currently, only a single time window is allowed */
		time_windows?: Array<TimeWindow>;
	}
	export interface StopFormProperties {

		/**
		 * duration of stop, i.e. time in ms the corresponding activity takes
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		duration: FormControl<string | null | undefined>,
	}
	export function CreateStopFormGroup() {
		return new FormGroup<StopFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VehicleType {

		/** array of capacity dimensions */
		capacity?: Array<number>;

		/** Profile of vehicle type */
		profile?: VehicleTypeProfile | null;

		/**
		 * service time factor of vehicle type
		 * Type: double
		 */
		service_time_factor?: number | null;

		/**
		 * speed_factor of vehicle type
		 * Type: double
		 */
		speed_factor?: number | null;

		/** Unique identifier for the vehicle type */
		type_id?: string | null;
	}
	export interface VehicleTypeFormProperties {

		/** Profile of vehicle type */
		profile: FormControl<VehicleTypeProfile | null | undefined>,

		/**
		 * service time factor of vehicle type
		 * Type: double
		 */
		service_time_factor: FormControl<number | null | undefined>,

		/**
		 * speed_factor of vehicle type
		 * Type: double
		 */
		speed_factor: FormControl<number | null | undefined>,

		/** Unique identifier for the vehicle type */
		type_id: FormControl<string | null | undefined>,
	}
	export function CreateVehicleTypeFormGroup() {
		return new FormGroup<VehicleTypeFormProperties>({
			profile: new FormControl<VehicleTypeProfile | null | undefined>(undefined),
			service_time_factor: new FormControl<number | null | undefined>(undefined),
			speed_factor: new FormControl<number | null | undefined>(undefined),
			type_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VehicleTypeProfile { car = 'car', bike = 'bike', foot = 'foot', mtb = 'mtb', motorcycle = 'motorcycle', racingbike = 'racingbike', truck = 'truck', small_truck = 'small_truck', bus = 'bus' }

	export interface Vehicle {
		break?: Break;

		/**
		 * earliest start of vehicle at its start location
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		earliest_start?: string | null;
		end_address?: Address;

		/**
		 * latest end of vehicle at its end location
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		latest_end?: string | null;

		/** Indicates whether vehicle should return to start address or not. If not, it can end at any service activity. */
		return_to_depot?: boolean | null;

		/** array of skills */
		skills?: Array<string>;
		start_address?: Address;

		/** Unique identifier referring to the available vehicle types */
		type_id?: string | null;

		/** Unique identifier of vehicle */
		vehicle_id?: string | null;
	}
	export interface VehicleFormProperties {

		/**
		 * earliest start of vehicle at its start location
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		earliest_start: FormControl<string | null | undefined>,

		/**
		 * latest end of vehicle at its end location
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		latest_end: FormControl<string | null | undefined>,

		/** Indicates whether vehicle should return to start address or not. If not, it can end at any service activity. */
		return_to_depot: FormControl<boolean | null | undefined>,

		/** Unique identifier referring to the available vehicle types */
		type_id: FormControl<string | null | undefined>,

		/** Unique identifier of vehicle */
		vehicle_id: FormControl<string | null | undefined>,
	}
	export function CreateVehicleFormGroup() {
		return new FormGroup<VehicleFormProperties>({
			earliest_start: new FormControl<string | null | undefined>(undefined),
			latest_end: new FormControl<string | null | undefined>(undefined),
			return_to_depot: new FormControl<boolean | null | undefined>(undefined),
			type_id: new FormControl<string | null | undefined>(undefined),
			vehicle_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Response {
		copyrights?: Array<string>;

		/** unique identify of job - which you get when posting your request to the large problem solver */
		job_id?: string | null;

		/**
		 * processing time in ms. if job is still waiting in queue, processing_time is 0
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		processing_time?: string | null;
		solution?: Solution;

		/** indicates the current status of the job */
		status?: ResponseStatus | null;

		/**
		 * waiting time in ms
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		waiting_in_queue?: string | null;
	}
	export interface ResponseFormProperties {

		/** unique identify of job - which you get when posting your request to the large problem solver */
		job_id: FormControl<string | null | undefined>,

		/**
		 * processing time in ms. if job is still waiting in queue, processing_time is 0
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		processing_time: FormControl<string | null | undefined>,

		/** indicates the current status of the job */
		status: FormControl<ResponseStatus | null | undefined>,

		/**
		 * waiting time in ms
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		waiting_in_queue: FormControl<string | null | undefined>,
	}
	export function CreateResponseFormGroup() {
		return new FormGroup<ResponseFormProperties>({
			job_id: new FormControl<string | null | undefined>(undefined),
			processing_time: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ResponseStatus | null | undefined>(undefined),
			waiting_in_queue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Solution {

		/**
		 * overall costs of solution
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		costs?: number | null;

		/**
		 * overall travel distance in meters
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		distance?: number | null;

		/**
		 * operation time of the longest route in ms
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		max_operation_time?: string | null;

		/**
		 * number of jobs that could not be assigned to final solution
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		no_unassigned?: number | null;

		/**
		 * number of employed vehicles
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		no_vehicles?: number | null;

		/** An array of routes */
		routes?: Array<Route>;

		/**
		 * overall transport time in ms
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		time?: string | null;

		/**
		 * overall transport time in ms
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		transport_time?: string | null;
		unassigned?: SolutionUnassigned;

		/**
		 * total waiting time in ms
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		waiting_time?: string | null;
	}
	export interface SolutionFormProperties {

		/**
		 * overall costs of solution
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		costs: FormControl<number | null | undefined>,

		/**
		 * overall travel distance in meters
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		distance: FormControl<number | null | undefined>,

		/**
		 * operation time of the longest route in ms
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		max_operation_time: FormControl<string | null | undefined>,

		/**
		 * number of jobs that could not be assigned to final solution
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		no_unassigned: FormControl<number | null | undefined>,

		/**
		 * number of employed vehicles
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		no_vehicles: FormControl<number | null | undefined>,

		/**
		 * overall transport time in ms
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		time: FormControl<string | null | undefined>,

		/**
		 * overall transport time in ms
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		transport_time: FormControl<string | null | undefined>,

		/**
		 * total waiting time in ms
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		waiting_time: FormControl<string | null | undefined>,
	}
	export function CreateSolutionFormGroup() {
		return new FormGroup<SolutionFormProperties>({
			costs: new FormControl<number | null | undefined>(undefined),
			distance: new FormControl<number | null | undefined>(undefined),
			max_operation_time: new FormControl<string | null | undefined>(undefined),
			no_unassigned: new FormControl<number | null | undefined>(undefined),
			no_vehicles: new FormControl<number | null | undefined>(undefined),
			time: new FormControl<string | null | undefined>(undefined),
			transport_time: new FormControl<string | null | undefined>(undefined),
			waiting_time: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Route {

		/** array of activities */
		activities?: Array<Activity>;

		/**
		 * completion time of route in ms
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		completion_time?: string | null;

		/**
		 * distance of route in meter
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		distance?: string | null;

		/**
		 * transport time of route in ms
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		transport_time?: string | null;

		/** id of vehicle that operates route */
		vehicle_id?: string | null;

		/**
		 * waiting time of route in ms
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		waiting_time?: string | null;
	}
	export interface RouteFormProperties {

		/**
		 * completion time of route in ms
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		completion_time: FormControl<string | null | undefined>,

		/**
		 * distance of route in meter
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		distance: FormControl<string | null | undefined>,

		/**
		 * transport time of route in ms
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		transport_time: FormControl<string | null | undefined>,

		/** id of vehicle that operates route */
		vehicle_id: FormControl<string | null | undefined>,

		/**
		 * waiting time of route in ms
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		waiting_time: FormControl<string | null | undefined>,
	}
	export function CreateRouteFormGroup() {
		return new FormGroup<RouteFormProperties>({
			completion_time: new FormControl<string | null | undefined>(undefined),
			distance: new FormControl<string | null | undefined>(undefined),
			transport_time: new FormControl<string | null | undefined>(undefined),
			vehicle_id: new FormControl<string | null | undefined>(undefined),
			waiting_time: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SolutionUnassigned {

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

	export enum ResponseStatus { waiting_in_queue = 'waiting_in_queue', processing = 'processing', finished = 'finished' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Solves vehicle routing problems
		 * This endpoint for solving vehicle routing problems, i.e. traveling salesman or vehicle routing problems, and returns the solution.
		 * Post optimize
		 * @param {string} key your API key
		 * @param {Request} requestBody Request object that contains the problem to be solved
		 * @return {JobId} A jobId you can use to retrieve your solution from server - see solution endpoint.
		 */
		PostVrp(key: string, requestBody: Request): Observable<JobId> {
			return this.http.post<JobId>(this.baseUri + 'optimize?key=' + (key == null ? '' : encodeURIComponent(key)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Return the solution associated to the jobId
		 * This endpoint returns the solution of a large problems. You can fetch it with the job_id, you have been sent.
		 * Get solution/{jobId}
		 * @param {string} key your API key
		 * @param {string} jobId Request solution with jobId
		 * @return {Response} A response containing the solution
		 */
		GetSolution(key: string, jobId: string): Observable<Response> {
			return this.http.get<Response>(this.baseUri + 'solution/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '?key=' + (key == null ? '' : encodeURIComponent(key)), {});
		}
	}

}

