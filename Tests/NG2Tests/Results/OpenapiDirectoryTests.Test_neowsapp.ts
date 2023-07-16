import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CloseApproachData {
		close_approach_date?: string;
		close_approach_date_full?: string;
		epoch_date_close_approach?: number;
		miss_distance?: MissDistance;
		orbiting_body?: string;
		relative_velocity?: RelVelocity;
	}

	export interface MissDistance {
		astronomical?: string;
		kilometers?: string;
		lunar?: string;
		miles?: string;
	}

	export interface RelVelocity {
		kilometers_per_hour?: string;
		miles_per_hour?: string;
	}

	export interface EstimatedDiameter {

		/** An estimate of the maximum size of the Asteroid - bases on the abosolute magnitude */
		estimated_diameter_max?: number;

		/** An estimate of the minimum size of the Asteroid - bases on the abosolute magnitude */
		estimated_diameter_min?: number;
	}

	export interface EstimatedDiameterContainer {
		feet?: EstimatedDiameter;
		kilometers?: EstimatedDiameter;
		meters?: EstimatedDiameter;
		miles?: EstimatedDiameter;
	}

	export interface HashMap_string_List_NearEarthObject_ {
	}

	export interface NearEarthObject {

		/** Is a measure of an asteroids brightness */
		absolute_magnitude_h?: number;

		/** Close approach information of the Asteroid */
		close_approach_data?: Array<CloseApproachData>;
		designation?: string;
		estimated_diameter?: EstimatedDiameterContainer;
		is_potentially_hazardous_asteroid?: boolean;
		is_sentry_object?: boolean;
		name?: string;
		name_limited?: string;

		/** A Link to the NASA JPL Small-Body Database website */
		nasa_jpl_url?: string;

		/** The reference ID of the Asteroid - This correlates to the SPK ID for the JPL NEO data */
		neo_reference_id?: string;
		orbital_data?: OrbitalData;
		sentry_data?: string;
	}

	export interface OrbitalData {
		aphelion_distance?: string;
		ascending_node_longitude?: string;
		data_arc_in_days?: number;
		eccentricity?: string;
		epoch_osculation?: string;
		equinox?: string;
		first_observation_date?: string;
		inclination?: string;
		jupiter_tisserand_invariant?: string;
		last_observation_date?: string;
		mean_anomaly?: string;
		mean_motion?: string;
		minimum_orbit_intersection?: string;
		observations_used?: number;
		orbit_class?: OrbitClass;
		orbit_determination_date?: string;
		orbit_id?: string;
		orbit_uncertainty?: string;
		orbital_period?: string;
		perihelion_argument?: string;
		perihelion_distance?: string;
		perihelion_time?: string;
		semi_major_axis?: string;
	}

	export interface OrbitClass {
		orbit_class_description?: string;
		orbit_class_range?: string;
		orbit_class_type?: OrbitClassOrbit_class_type;
	}

	export enum OrbitClassOrbit_class_type { IEO = 0, ATE = 1, APO = 2, AMO = 3, MCA = 4, IMB = 5, MBA = 6, OMB = 7, TJN = 8, CEN = 9, TNO = 10, PAA = 11, HYA = 12, HYP = 13, PAR = 14, COM = 15, JFC = 16, HTC = 17, ETC = 18, CTC = 19, JFc = 20 }

	export interface NearEarthObjectList {

		/** Number of NEOs in list */
		element_count?: number;

		/** Hypermedia links to collection */
		links?: string;
		near_earth_objects?: HashMap_string_List_NearEarthObject_;
	}

	export interface PageMetaData {
		number?: number;
		size?: number;
		total_elements?: number;
		total_pages?: number;
	}

	export interface SentryImpactRiskObject {
		Palermo_scale_max?: string;
		absolute_magnitude?: string;
		average_lunar_distance?: number;
		designation?: string;
		estimated_diameter?: string;
		fullname?: string;
		impact_probability?: string;
		is_active_sentry_object?: boolean;
		last_obs?: string;
		last_obs_jd?: string;
		palermo_scale_ave?: string;
		potential_impacts?: string;
		removal_date?: string;
		sentryId?: string;
		torino_scale?: string;
		v_infinity?: string;
		year_range_max?: string;
		year_range_min?: string;
	}

	export interface SentryObjectPagingDto {
		links?: string;
		page?: PageMetaData;
		sentry_objects?: Array<SentryImpactRiskObject>;
	}

	export interface Statistics {

		/** Number of Close Approach listings across all NEOs listed in NeoWs */
		close_approach_count?: number;

		/** TimeStamp the last time the DB was updated */
		last_updated?: string;
		nasa_jpl_url?: URL;

		/** Number of NearEarthObjects listed in NeoWs */
		near_earth_object_count?: number;
		source?: string;
	}

	export interface URL {
		authority?: string;
		content?: string;
		defaultPort?: number;
		file?: string;
		host?: string;
		path?: string;
		port?: number;
		protocol?: string;
		query?: string;
		ref?: string;
		userInfo?: string;
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
		RetrieveNearEarthObjectFeed(start_date: string, end_date: string, detailed: boolean): Observable<NearEarthObjectList> {
			return this.http.get<NearEarthObjectList>(this.baseUri + 'rest/v1/feed?start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&detailed=' + detailed, {});
		}

		/**
		 * Find Near Earth Objects for today
		 * Get a list of Near Earth Objects for today
		 * Get rest/v1/feed/today
		 * @param {boolean} detailed detailed
		 * @return {NearEarthObjectList} OK
		 */
		RetrieveNEOFeedToday(detailed: boolean): Observable<NearEarthObjectList> {
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
		BrowseNearEarthObjects(page: number, size: number): Observable<NearEarthObject> {
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
		RetrieveSentryRiskData(is_active: boolean, page: number, size: number): Observable<SentryObjectPagingDto> {
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

