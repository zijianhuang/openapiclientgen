import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CloseApproachData {
		close_approach_date?: string | null;
		close_approach_date_full?: string | null;
		epoch_date_close_approach?: number | null;
		miss_distance?: MissDistance;
		orbiting_body?: string | null;
		relative_velocity?: RelVelocity;
	}
	export interface CloseApproachDataFormProperties {
		close_approach_date: FormControl<string | null | undefined>,
		close_approach_date_full: FormControl<string | null | undefined>,
		epoch_date_close_approach: FormControl<number | null | undefined>,
		orbiting_body: FormControl<string | null | undefined>,
	}
	export function CreateCloseApproachDataFormGroup() {
		return new FormGroup<CloseApproachDataFormProperties>({
			close_approach_date: new FormControl<string | null | undefined>(undefined),
			close_approach_date_full: new FormControl<string | null | undefined>(undefined),
			epoch_date_close_approach: new FormControl<number | null | undefined>(undefined),
			orbiting_body: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MissDistance {
		astronomical?: string | null;
		kilometers?: string | null;
		lunar?: string | null;
		miles?: string | null;
	}
	export interface MissDistanceFormProperties {
		astronomical: FormControl<string | null | undefined>,
		kilometers: FormControl<string | null | undefined>,
		lunar: FormControl<string | null | undefined>,
		miles: FormControl<string | null | undefined>,
	}
	export function CreateMissDistanceFormGroup() {
		return new FormGroup<MissDistanceFormProperties>({
			astronomical: new FormControl<string | null | undefined>(undefined),
			kilometers: new FormControl<string | null | undefined>(undefined),
			lunar: new FormControl<string | null | undefined>(undefined),
			miles: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RelVelocity {
		kilometers_per_hour?: string | null;
		miles_per_hour?: string | null;
	}
	export interface RelVelocityFormProperties {
		kilometers_per_hour: FormControl<string | null | undefined>,
		miles_per_hour: FormControl<string | null | undefined>,
	}
	export function CreateRelVelocityFormGroup() {
		return new FormGroup<RelVelocityFormProperties>({
			kilometers_per_hour: new FormControl<string | null | undefined>(undefined),
			miles_per_hour: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EstimatedDiameter {

		/** An estimate of the maximum size of the Asteroid - bases on the abosolute magnitude */
		estimated_diameter_max?: number | null;

		/** An estimate of the minimum size of the Asteroid - bases on the abosolute magnitude */
		estimated_diameter_min?: number | null;
	}
	export interface EstimatedDiameterFormProperties {

		/** An estimate of the maximum size of the Asteroid - bases on the abosolute magnitude */
		estimated_diameter_max: FormControl<number | null | undefined>,

		/** An estimate of the minimum size of the Asteroid - bases on the abosolute magnitude */
		estimated_diameter_min: FormControl<number | null | undefined>,
	}
	export function CreateEstimatedDiameterFormGroup() {
		return new FormGroup<EstimatedDiameterFormProperties>({
			estimated_diameter_max: new FormControl<number | null | undefined>(undefined),
			estimated_diameter_min: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EstimatedDiameterContainer {
		feet?: EstimatedDiameter;
		kilometers?: EstimatedDiameter;
		meters?: EstimatedDiameter;
		miles?: EstimatedDiameter;
	}
	export interface EstimatedDiameterContainerFormProperties {
	}
	export function CreateEstimatedDiameterContainerFormGroup() {
		return new FormGroup<EstimatedDiameterContainerFormProperties>({
		});

	}

	export interface HashMap_string_List_NearEarthObject_ {
	}
	export interface HashMap_string_List_NearEarthObject_FormProperties {
	}
	export function CreateHashMap_string_List_NearEarthObject_FormGroup() {
		return new FormGroup<HashMap_string_List_NearEarthObject_FormProperties>({
		});

	}

	export interface NearEarthObject {

		/** Is a measure of an asteroids brightness */
		absolute_magnitude_h?: number | null;

		/** Close approach information of the Asteroid */
		close_approach_data?: Array<CloseApproachData>;
		designation?: string | null;
		estimated_diameter?: EstimatedDiameterContainer;
		is_potentially_hazardous_asteroid?: boolean | null;
		is_sentry_object?: boolean | null;
		name?: string | null;
		name_limited?: string | null;

		/** A Link to the NASA JPL Small-Body Database website */
		nasa_jpl_url?: string | null;

		/** The reference ID of the Asteroid - This correlates to the SPK ID for the JPL NEO data */
		neo_reference_id?: string | null;
		orbital_data?: OrbitalData;
		sentry_data?: string | null;
	}
	export interface NearEarthObjectFormProperties {

		/** Is a measure of an asteroids brightness */
		absolute_magnitude_h: FormControl<number | null | undefined>,
		designation: FormControl<string | null | undefined>,
		is_potentially_hazardous_asteroid: FormControl<boolean | null | undefined>,
		is_sentry_object: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		name_limited: FormControl<string | null | undefined>,

		/** A Link to the NASA JPL Small-Body Database website */
		nasa_jpl_url: FormControl<string | null | undefined>,

		/** The reference ID of the Asteroid - This correlates to the SPK ID for the JPL NEO data */
		neo_reference_id: FormControl<string | null | undefined>,
		sentry_data: FormControl<string | null | undefined>,
	}
	export function CreateNearEarthObjectFormGroup() {
		return new FormGroup<NearEarthObjectFormProperties>({
			absolute_magnitude_h: new FormControl<number | null | undefined>(undefined),
			designation: new FormControl<string | null | undefined>(undefined),
			is_potentially_hazardous_asteroid: new FormControl<boolean | null | undefined>(undefined),
			is_sentry_object: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			name_limited: new FormControl<string | null | undefined>(undefined),
			nasa_jpl_url: new FormControl<string | null | undefined>(undefined),
			neo_reference_id: new FormControl<string | null | undefined>(undefined),
			sentry_data: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrbitalData {
		aphelion_distance?: string | null;
		ascending_node_longitude?: string | null;
		data_arc_in_days?: number | null;
		eccentricity?: string | null;
		epoch_osculation?: string | null;
		equinox?: string | null;
		first_observation_date?: string | null;
		inclination?: string | null;
		jupiter_tisserand_invariant?: string | null;
		last_observation_date?: string | null;
		mean_anomaly?: string | null;
		mean_motion?: string | null;
		minimum_orbit_intersection?: string | null;
		observations_used?: number | null;
		orbit_class?: OrbitClass;
		orbit_determination_date?: string | null;
		orbit_id?: string | null;
		orbit_uncertainty?: string | null;
		orbital_period?: string | null;
		perihelion_argument?: string | null;
		perihelion_distance?: string | null;
		perihelion_time?: string | null;
		semi_major_axis?: string | null;
	}
	export interface OrbitalDataFormProperties {
		aphelion_distance: FormControl<string | null | undefined>,
		ascending_node_longitude: FormControl<string | null | undefined>,
		data_arc_in_days: FormControl<number | null | undefined>,
		eccentricity: FormControl<string | null | undefined>,
		epoch_osculation: FormControl<string | null | undefined>,
		equinox: FormControl<string | null | undefined>,
		first_observation_date: FormControl<string | null | undefined>,
		inclination: FormControl<string | null | undefined>,
		jupiter_tisserand_invariant: FormControl<string | null | undefined>,
		last_observation_date: FormControl<string | null | undefined>,
		mean_anomaly: FormControl<string | null | undefined>,
		mean_motion: FormControl<string | null | undefined>,
		minimum_orbit_intersection: FormControl<string | null | undefined>,
		observations_used: FormControl<number | null | undefined>,
		orbit_determination_date: FormControl<string | null | undefined>,
		orbit_id: FormControl<string | null | undefined>,
		orbit_uncertainty: FormControl<string | null | undefined>,
		orbital_period: FormControl<string | null | undefined>,
		perihelion_argument: FormControl<string | null | undefined>,
		perihelion_distance: FormControl<string | null | undefined>,
		perihelion_time: FormControl<string | null | undefined>,
		semi_major_axis: FormControl<string | null | undefined>,
	}
	export function CreateOrbitalDataFormGroup() {
		return new FormGroup<OrbitalDataFormProperties>({
			aphelion_distance: new FormControl<string | null | undefined>(undefined),
			ascending_node_longitude: new FormControl<string | null | undefined>(undefined),
			data_arc_in_days: new FormControl<number | null | undefined>(undefined),
			eccentricity: new FormControl<string | null | undefined>(undefined),
			epoch_osculation: new FormControl<string | null | undefined>(undefined),
			equinox: new FormControl<string | null | undefined>(undefined),
			first_observation_date: new FormControl<string | null | undefined>(undefined),
			inclination: new FormControl<string | null | undefined>(undefined),
			jupiter_tisserand_invariant: new FormControl<string | null | undefined>(undefined),
			last_observation_date: new FormControl<string | null | undefined>(undefined),
			mean_anomaly: new FormControl<string | null | undefined>(undefined),
			mean_motion: new FormControl<string | null | undefined>(undefined),
			minimum_orbit_intersection: new FormControl<string | null | undefined>(undefined),
			observations_used: new FormControl<number | null | undefined>(undefined),
			orbit_determination_date: new FormControl<string | null | undefined>(undefined),
			orbit_id: new FormControl<string | null | undefined>(undefined),
			orbit_uncertainty: new FormControl<string | null | undefined>(undefined),
			orbital_period: new FormControl<string | null | undefined>(undefined),
			perihelion_argument: new FormControl<string | null | undefined>(undefined),
			perihelion_distance: new FormControl<string | null | undefined>(undefined),
			perihelion_time: new FormControl<string | null | undefined>(undefined),
			semi_major_axis: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrbitClass {
		orbit_class_description?: string | null;
		orbit_class_range?: string | null;
		orbit_class_type?: OrbitClassOrbit_class_type | null;
	}
	export interface OrbitClassFormProperties {
		orbit_class_description: FormControl<string | null | undefined>,
		orbit_class_range: FormControl<string | null | undefined>,
		orbit_class_type: FormControl<OrbitClassOrbit_class_type | null | undefined>,
	}
	export function CreateOrbitClassFormGroup() {
		return new FormGroup<OrbitClassFormProperties>({
			orbit_class_description: new FormControl<string | null | undefined>(undefined),
			orbit_class_range: new FormControl<string | null | undefined>(undefined),
			orbit_class_type: new FormControl<OrbitClassOrbit_class_type | null | undefined>(undefined),
		});

	}

	export enum OrbitClassOrbit_class_type { IEO = 0, ATE = 1, APO = 2, AMO = 3, MCA = 4, IMB = 5, MBA = 6, OMB = 7, TJN = 8, CEN = 9, TNO = 10, PAA = 11, HYA = 12, HYP = 13, PAR = 14, COM = 15, JFC = 16, HTC = 17, ETC = 18, CTC = 19, JFc = 20 }

	export interface NearEarthObjectList {

		/** Number of NEOs in list */
		element_count?: number | null;

		/** Hypermedia links to collection */
		links?: string | null;
		near_earth_objects?: HashMap_string_List_NearEarthObject_;
	}
	export interface NearEarthObjectListFormProperties {

		/** Number of NEOs in list */
		element_count: FormControl<number | null | undefined>,

		/** Hypermedia links to collection */
		links: FormControl<string | null | undefined>,
	}
	export function CreateNearEarthObjectListFormGroup() {
		return new FormGroup<NearEarthObjectListFormProperties>({
			element_count: new FormControl<number | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PageMetaData {
		number?: number | null;
		size?: number | null;
		total_elements?: number | null;
		total_pages?: number | null;
	}
	export interface PageMetaDataFormProperties {
		number: FormControl<number | null | undefined>,
		size: FormControl<number | null | undefined>,
		total_elements: FormControl<number | null | undefined>,
		total_pages: FormControl<number | null | undefined>,
	}
	export function CreatePageMetaDataFormGroup() {
		return new FormGroup<PageMetaDataFormProperties>({
			number: new FormControl<number | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
			total_elements: new FormControl<number | null | undefined>(undefined),
			total_pages: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SentryImpactRiskObject {
		Palermo_scale_max?: string | null;
		absolute_magnitude?: string | null;
		average_lunar_distance?: number | null;
		designation?: string | null;
		estimated_diameter?: string | null;
		fullname?: string | null;
		impact_probability?: string | null;
		is_active_sentry_object?: boolean | null;
		last_obs?: string | null;
		last_obs_jd?: string | null;
		palermo_scale_ave?: string | null;
		potential_impacts?: string | null;
		removal_date?: string | null;
		sentryId?: string | null;
		torino_scale?: string | null;
		v_infinity?: string | null;
		year_range_max?: string | null;
		year_range_min?: string | null;
	}
	export interface SentryImpactRiskObjectFormProperties {
		Palermo_scale_max: FormControl<string | null | undefined>,
		absolute_magnitude: FormControl<string | null | undefined>,
		average_lunar_distance: FormControl<number | null | undefined>,
		designation: FormControl<string | null | undefined>,
		estimated_diameter: FormControl<string | null | undefined>,
		fullname: FormControl<string | null | undefined>,
		impact_probability: FormControl<string | null | undefined>,
		is_active_sentry_object: FormControl<boolean | null | undefined>,
		last_obs: FormControl<string | null | undefined>,
		last_obs_jd: FormControl<string | null | undefined>,
		palermo_scale_ave: FormControl<string | null | undefined>,
		potential_impacts: FormControl<string | null | undefined>,
		removal_date: FormControl<string | null | undefined>,
		sentryId: FormControl<string | null | undefined>,
		torino_scale: FormControl<string | null | undefined>,
		v_infinity: FormControl<string | null | undefined>,
		year_range_max: FormControl<string | null | undefined>,
		year_range_min: FormControl<string | null | undefined>,
	}
	export function CreateSentryImpactRiskObjectFormGroup() {
		return new FormGroup<SentryImpactRiskObjectFormProperties>({
			Palermo_scale_max: new FormControl<string | null | undefined>(undefined),
			absolute_magnitude: new FormControl<string | null | undefined>(undefined),
			average_lunar_distance: new FormControl<number | null | undefined>(undefined),
			designation: new FormControl<string | null | undefined>(undefined),
			estimated_diameter: new FormControl<string | null | undefined>(undefined),
			fullname: new FormControl<string | null | undefined>(undefined),
			impact_probability: new FormControl<string | null | undefined>(undefined),
			is_active_sentry_object: new FormControl<boolean | null | undefined>(undefined),
			last_obs: new FormControl<string | null | undefined>(undefined),
			last_obs_jd: new FormControl<string | null | undefined>(undefined),
			palermo_scale_ave: new FormControl<string | null | undefined>(undefined),
			potential_impacts: new FormControl<string | null | undefined>(undefined),
			removal_date: new FormControl<string | null | undefined>(undefined),
			sentryId: new FormControl<string | null | undefined>(undefined),
			torino_scale: new FormControl<string | null | undefined>(undefined),
			v_infinity: new FormControl<string | null | undefined>(undefined),
			year_range_max: new FormControl<string | null | undefined>(undefined),
			year_range_min: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SentryObjectPagingDto {
		links?: string | null;
		page?: PageMetaData;
		sentry_objects?: Array<SentryImpactRiskObject>;
	}
	export interface SentryObjectPagingDtoFormProperties {
		links: FormControl<string | null | undefined>,
	}
	export function CreateSentryObjectPagingDtoFormGroup() {
		return new FormGroup<SentryObjectPagingDtoFormProperties>({
			links: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Statistics {

		/** Number of Close Approach listings across all NEOs listed in NeoWs */
		close_approach_count?: number | null;

		/** TimeStamp the last time the DB was updated */
		last_updated?: string | null;
		nasa_jpl_url?: URL;

		/** Number of NearEarthObjects listed in NeoWs */
		near_earth_object_count?: number | null;
		source?: string | null;
	}
	export interface StatisticsFormProperties {

		/** Number of Close Approach listings across all NEOs listed in NeoWs */
		close_approach_count: FormControl<number | null | undefined>,

		/** TimeStamp the last time the DB was updated */
		last_updated: FormControl<string | null | undefined>,

		/** Number of NearEarthObjects listed in NeoWs */
		near_earth_object_count: FormControl<number | null | undefined>,
		source: FormControl<string | null | undefined>,
	}
	export function CreateStatisticsFormGroup() {
		return new FormGroup<StatisticsFormProperties>({
			close_approach_count: new FormControl<number | null | undefined>(undefined),
			last_updated: new FormControl<string | null | undefined>(undefined),
			near_earth_object_count: new FormControl<number | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface URL {
		authority?: string | null;
		content?: string | null;
		defaultPort?: number | null;
		file?: string | null;
		host?: string | null;
		path?: string | null;
		port?: number | null;
		protocol?: string | null;
		query?: string | null;
		ref?: string | null;
		userInfo?: string | null;
	}
	export interface URLFormProperties {
		authority: FormControl<string | null | undefined>,
		content: FormControl<string | null | undefined>,
		defaultPort: FormControl<number | null | undefined>,
		file: FormControl<string | null | undefined>,
		host: FormControl<string | null | undefined>,
		path: FormControl<string | null | undefined>,
		port: FormControl<number | null | undefined>,
		protocol: FormControl<string | null | undefined>,
		query: FormControl<string | null | undefined>,
		ref: FormControl<string | null | undefined>,
		userInfo: FormControl<string | null | undefined>,
	}
	export function CreateURLFormGroup() {
		return new FormGroup<URLFormProperties>({
			authority: new FormControl<string | null | undefined>(undefined),
			content: new FormControl<string | null | undefined>(undefined),
			defaultPort: new FormControl<number | null | undefined>(undefined),
			file: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			userInfo: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Find Near Earth Objects by date
		 * Get a list of Near Earth Objects within a date range, The max range in one query is 7 days
		 * Get rest/v1/feed
		 * @param {string} start_date Start of date range search, format: yyyy-MM-dd - (ex: 2015-04-28)
		 * @param {string} end_date End of date range search, format: yyyy-MM-dd - (ex: 2015-04-28). If left off search will extends 7 days from start_date
		 * @param {boolean} detailed detailed
		 * @return {NearEarthObjectList} OK
		 */
		RetrieveNearEarthObjectFeed(start_date: string | null | undefined, end_date: string | null | undefined, detailed: boolean | null | undefined): Observable<NearEarthObjectList> {
			return this.http.get<NearEarthObjectList>(this.baseUri + 'rest/v1/feed?start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&detailed=' + detailed, {});
		}

		/**
		 * Find Near Earth Objects for today
		 * Get a list of Near Earth Objects for today
		 * Get rest/v1/feed/today
		 * @param {boolean} detailed detailed
		 * @return {NearEarthObjectList} OK
		 */
		RetrieveNEOFeedToday(detailed: boolean | null | undefined): Observable<NearEarthObjectList> {
			return this.http.get<NearEarthObjectList>(this.baseUri + 'rest/v1/feed/today?detailed=' + detailed, {});
		}

		/**
		 * Browse the Near Earth Objects service
		 * Retieve a paginated list of Near Earth Objects
		 * Get rest/v1/neo/browse
		 * @param {number} page page
		 * @param {number} size size
		 * @return {NearEarthObject} OK
		 */
		BrowseNearEarthObjects(page: number | null | undefined, size: number | null | undefined): Observable<NearEarthObject> {
			return this.http.get<NearEarthObject>(this.baseUri + 'rest/v1/neo/browse?page=' + page + '&size=' + size, {});
		}

		/**
		 * Retrieve Sentry (Impact Risk ) Near Earth Objects
		 * Retrieves Near Earth Objects listed in the NASA sentry data set
		 * Get rest/v1/neo/sentry
		 * @param {boolean} is_active show current list of Sentry objects, or show removed Sentry objects
		 * @param {number} page page
		 * @param {number} size size
		 * @return {SentryObjectPagingDto} OK
		 */
		RetrieveSentryRiskData(is_active: boolean | null | undefined, page: number | null | undefined, size: number | null | undefined): Observable<SentryObjectPagingDto> {
			return this.http.get<SentryObjectPagingDto>(this.baseUri + 'rest/v1/neo/sentry?is_active=' + is_active + '&page=' + page + '&size=' + size, {});
		}

		/**
		 * Retrieve Sentry (Impact Risk ) Near Earth Objectby ID
		 * Retrieves Sentry Near Earth Object by ID
		 * Get rest/v1/neo/sentry/{asteroid_id}
		 * @param {string} asteroid_id ID of NearEarth object.  ID can be SPK_ID, Asteroid des (designation) or Sentry ID
		 * @return {SentryImpactRiskObject} OK
		 */
		RetrieveSentryRiskDataById(asteroid_id: string): Observable<SentryImpactRiskObject> {
			return this.http.get<SentryImpactRiskObject>(this.baseUri + 'rest/v1/neo/sentry/' + (asteroid_id == null ? '' : encodeURIComponent(asteroid_id)), {});
		}

		/**
		 * Find Near Earth Objects by id
		 * Retrieve a Near Earth Objects with a given id
		 * Get rest/v1/neo/{asteroid_id}
		 * @param {string} asteroid_id ID of Near Earth Object - (ex: 3729835)
		 * @return {NearEarthObject} OK
		 */
		RetrieveNearEarthObjectById(asteroid_id: string): Observable<NearEarthObject> {
			return this.http.get<NearEarthObject>(this.baseUri + 'rest/v1/neo/' + (asteroid_id == null ? '' : encodeURIComponent(asteroid_id)), {});
		}

		/**
		 * Get the Near Earth Object data set totals
		 * retrieveCurrentNeoStatistics
		 * Get rest/v1/stats
		 * @return {Statistics} OK
		 */
		RetrieveCurrentNeoStatistics(): Observable<Statistics> {
			return this.http.get<Statistics>(this.baseUri + 'rest/v1/stats', {});
		}
	}

}

