import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CloseApproachData {
		close_approach_date?: string | null;
		close_approach_date_full?: string | null;
		epoch_date_close_approach?: number | null;
		miss_distance?: MissDistance | null;
		orbiting_body?: string | null;
		relative_velocity?: RelVelocity | null;
	}

	export interface MissDistance {
		astronomical?: string | null;
		kilometers?: string | null;
		lunar?: string | null;
		miles?: string | null;
	}

	export interface RelVelocity {
		kilometers_per_hour?: string | null;
		miles_per_hour?: string | null;
	}

	export interface EstimatedDiameter {

		/** An estimate of the maximum size of the Asteroid - bases on the abosolute magnitude */
		estimated_diameter_max?: number | null;

		/** An estimate of the minimum size of the Asteroid - bases on the abosolute magnitude */
		estimated_diameter_min?: number | null;
	}

	export interface EstimatedDiameterContainer {
		feet?: EstimatedDiameter | null;
		kilometers?: EstimatedDiameter | null;
		meters?: EstimatedDiameter | null;
		miles?: EstimatedDiameter | null;
	}

	export interface HashMap_string_List_NearEarthObject_ {
	}

	export interface NearEarthObject {

		/** Is a measure of an asteroids brightness */
		absolute_magnitude_h?: number | null;

		/** Close approach information of the Asteroid */
		close_approach_data?: Array<CloseApproachData> | null;
		designation?: string | null;
		estimated_diameter?: EstimatedDiameterContainer | null;
		is_potentially_hazardous_asteroid?: boolean | null;
		is_sentry_object?: boolean | null;
		name?: string | null;
		name_limited?: string | null;

		/** A Link to the NASA JPL Small-Body Database website */
		nasa_jpl_url?: string | null;

		/** The reference ID of the Asteroid - This correlates to the SPK ID for the JPL NEO data */
		neo_reference_id?: string | null;
		orbital_data?: OrbitalData | null;
		sentry_data?: string | null;
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
		orbit_class?: OrbitClass | null;
		orbit_determination_date?: string | null;
		orbit_id?: string | null;
		orbit_uncertainty?: string | null;
		orbital_period?: string | null;
		perihelion_argument?: string | null;
		perihelion_distance?: string | null;
		perihelion_time?: string | null;
		semi_major_axis?: string | null;
	}

	export interface OrbitClass {
		orbit_class_description?: string | null;
		orbit_class_range?: string | null;
		orbit_class_type?: OrbitClassOrbit_class_type | null;
	}

	export enum OrbitClassOrbit_class_type { IEO = 0, ATE = 1, APO = 2, AMO = 3, MCA = 4, IMB = 5, MBA = 6, OMB = 7, TJN = 8, CEN = 9, TNO = 10, PAA = 11, HYA = 12, HYP = 13, PAR = 14, COM = 15, JFC = 16, HTC = 17, ETC = 18, CTC = 19, JFc = 20 }

	export interface NearEarthObjectList {

		/** Number of NEOs in list */
		element_count?: number | null;

		/** Hypermedia links to collection */
		links?: string | null;
		near_earth_objects?: HashMap_string_List_NearEarthObject_ | null;
	}

	export interface PageMetaData {
		number?: number | null;
		size?: number | null;
		total_elements?: number | null;
		total_pages?: number | null;
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

	export interface SentryObjectPagingDto {
		links?: string | null;
		page?: PageMetaData | null;
		sentry_objects?: Array<SentryImpactRiskObject> | null;
	}

	export interface Statistics {

		/** Number of Close Approach listings across all NEOs listed in NeoWs */
		close_approach_count?: number | null;

		/** TimeStamp the last time the DB was updated */
		last_updated?: string | null;
		nasa_jpl_url?: URL | null;

		/** Number of NearEarthObjects listed in NeoWs */
		near_earth_object_count?: number | null;
		source?: string | null;
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

