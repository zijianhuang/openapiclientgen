import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AerodromeDistanceResponse {

		/** Required */
		found: string;
	}
	export interface AerodromeDistanceResponseFormProperties {

		/** Required */
		found: FormControl<string | null | undefined>,
	}
	export function CreateAerodromeDistanceResponseFormGroup() {
		return new FormGroup<AerodromeDistanceResponseFormProperties>({
			found: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AerodromePolyResponse {

		/** Required */
		found: string;
	}
	export interface AerodromePolyResponseFormProperties {

		/** Required */
		found: FormControl<string | null | undefined>,
	}
	export function CreateAerodromePolyResponseFormGroup() {
		return new FormGroup<AerodromePolyResponseFormProperties>({
			found: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AerodromeRouteResponse {

		/** Required */
		found: string;
	}
	export interface AerodromeRouteResponseFormProperties {

		/** Required */
		found: FormControl<string | null | undefined>,
	}
	export function CreateAerodromeRouteResponseFormGroup() {
		return new FormGroup<AerodromeRouteResponseFormProperties>({
			found: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Geometry-defining arguments for point/distance requests */
	export interface AerodromesByDistance {

		/** Required */
		distance: number;

		/** Required */
		latitude: number;

		/** Required */
		longitude: number;
	}

	/** Geometry-defining arguments for point/distance requests */
	export interface AerodromesByDistanceFormProperties {

		/** Required */
		distance: FormControl<number | null | undefined>,

		/** Required */
		latitude: FormControl<number | null | undefined>,

		/** Required */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateAerodromesByDistanceFormGroup() {
		return new FormGroup<AerodromesByDistanceFormProperties>({
			distance: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Geometry-defining arguments for polygon requests */
	export interface AerodromesByPolygon {

		/** Required */
		poly: string;
	}

	/** Geometry-defining arguments for polygon requests */
	export interface AerodromesByPolygonFormProperties {

		/** Required */
		poly: FormControl<string | null | undefined>,
	}
	export function CreateAerodromesByPolygonFormGroup() {
		return new FormGroup<AerodromesByPolygonFormProperties>({
			poly: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Geometry-defining arguments for along-route requests */
	export interface AerodromesByRoute {

		/** Required */
		route: string;
	}

	/** Geometry-defining arguments for along-route requests */
	export interface AerodromesByRouteFormProperties {

		/** Required */
		route: FormControl<string | null | undefined>,
	}
	export function CreateAerodromesByRouteFormGroup() {
		return new FormGroup<AerodromesByRouteFormProperties>({
			route: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Geometry-defining arguments for point/distance requests */
	export interface AirspaceByDistance {

		/** Required */
		asptypes: Array<string>;

		/** Required */
		distance: number;

		/** Required */
		latitude: number;

		/** Required */
		longitude: number;
	}

	/** Geometry-defining arguments for point/distance requests */
	export interface AirspaceByDistanceFormProperties {

		/** Required */
		distance: FormControl<number | null | undefined>,

		/** Required */
		latitude: FormControl<number | null | undefined>,

		/** Required */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateAirspaceByDistanceFormGroup() {
		return new FormGroup<AirspaceByDistanceFormProperties>({
			distance: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Geometry-defining arguments for polygon requests */
	export interface AirspaceByPolygon {

		/** Required */
		asptypes: Array<string>;

		/** Required */
		poly: string;
	}

	/** Geometry-defining arguments for polygon requests */
	export interface AirspaceByPolygonFormProperties {

		/** Required */
		poly: FormControl<string | null | undefined>,
	}
	export function CreateAirspaceByPolygonFormGroup() {
		return new FormGroup<AirspaceByPolygonFormProperties>({
			poly: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Geometry-defining arguments for along-route requests */
	export interface AirspaceByRoute {

		/** Required */
		asptypes: Array<string>;

		/** Required */
		route: string;
	}

	/** Geometry-defining arguments for along-route requests */
	export interface AirspaceByRouteFormProperties {

		/** Required */
		route: FormControl<string | null | undefined>,
	}
	export function CreateAirspaceByRouteFormGroup() {
		return new FormGroup<AirspaceByRouteFormProperties>({
			route: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AirspaceDistanceResponse {

		/** Required */
		found: Array<string>;
	}
	export interface AirspaceDistanceResponseFormProperties {
	}
	export function CreateAirspaceDistanceResponseFormGroup() {
		return new FormGroup<AirspaceDistanceResponseFormProperties>({
		});

	}

	export interface AirspacePolyResponse {

		/** Required */
		found: Array<string>;
	}
	export interface AirspacePolyResponseFormProperties {
	}
	export function CreateAirspacePolyResponseFormGroup() {
		return new FormGroup<AirspacePolyResponseFormProperties>({
		});

	}

	export interface AirspaceRouteResponse {

		/** Required */
		found: Array<string>;
	}
	export interface AirspaceRouteResponseFormProperties {
	}
	export function CreateAirspaceRouteResponseFormGroup() {
		return new FormGroup<AirspaceRouteResponseFormProperties>({
		});

	}

	export interface HTTPValidationError {
		detail?: Array<ValidationError>;
	}
	export interface HTTPValidationErrorFormProperties {
	}
	export function CreateHTTPValidationErrorFormGroup() {
		return new FormGroup<HTTPValidationErrorFormProperties>({
		});

	}

	export interface ValidationError {

		/** Required */
		loc: Array<string>;

		/** Required */
		msg: string;

		/** Required */
		type: string;
	}
	export interface ValidationErrorFormProperties {

		/** Required */
		msg: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateValidationErrorFormGroup() {
		return new FormGroup<ValidationErrorFormProperties>({
			msg: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Geometry-defining arguments for point/distance requests */
	export interface NOTAMsByDistance {

		/** Required */
		distance: number;

		/** Required */
		latitude: number;

		/** Required */
		longitude: number;
	}

	/** Geometry-defining arguments for point/distance requests */
	export interface NOTAMsByDistanceFormProperties {

		/** Required */
		distance: FormControl<number | null | undefined>,

		/** Required */
		latitude: FormControl<number | null | undefined>,

		/** Required */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateNOTAMsByDistanceFormGroup() {
		return new FormGroup<NOTAMsByDistanceFormProperties>({
			distance: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Geometry-defining arguments for polygon requests */
	export interface NOTAMsByPolygon {

		/** Required */
		poly: string;
	}

	/** Geometry-defining arguments for polygon requests */
	export interface NOTAMsByPolygonFormProperties {

		/** Required */
		poly: FormControl<string | null | undefined>,
	}
	export function CreateNOTAMsByPolygonFormGroup() {
		return new FormGroup<NOTAMsByPolygonFormProperties>({
			poly: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Geometry-defining arguments for along-route requests */
	export interface NOTAMsByRoute {

		/** Required */
		route: string;
	}

	/** Geometry-defining arguments for along-route requests */
	export interface NOTAMsByRouteFormProperties {

		/** Required */
		route: FormControl<string | null | undefined>,
	}
	export function CreateNOTAMsByRouteFormGroup() {
		return new FormGroup<NOTAMsByRouteFormProperties>({
			route: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NOTAMsDistanceResponse {

		/** Required */
		found: string;
	}
	export interface NOTAMsDistanceResponseFormProperties {

		/** Required */
		found: FormControl<string | null | undefined>,
	}
	export function CreateNOTAMsDistanceResponseFormGroup() {
		return new FormGroup<NOTAMsDistanceResponseFormProperties>({
			found: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NOTAMsPolyResponse {

		/** Required */
		found: string;
	}
	export interface NOTAMsPolyResponseFormProperties {

		/** Required */
		found: FormControl<string | null | undefined>,
	}
	export function CreateNOTAMsPolyResponseFormGroup() {
		return new FormGroup<NOTAMsPolyResponseFormProperties>({
			found: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NOTAMsRouteResponse {

		/** Required */
		found: string;
	}
	export interface NOTAMsRouteResponseFormProperties {

		/** Required */
		found: FormControl<string | null | undefined>,
	}
	export function CreateNOTAMsRouteResponseFormGroup() {
		return new FormGroup<NOTAMsRouteResponseFormProperties>({
			found: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ObstacleDistanceResponse {

		/** Required */
		found: string;
	}
	export interface ObstacleDistanceResponseFormProperties {

		/** Required */
		found: FormControl<string | null | undefined>,
	}
	export function CreateObstacleDistanceResponseFormGroup() {
		return new FormGroup<ObstacleDistanceResponseFormProperties>({
			found: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ObstaclePolyResponse {

		/** Required */
		found: string;
	}
	export interface ObstaclePolyResponseFormProperties {

		/** Required */
		found: FormControl<string | null | undefined>,
	}
	export function CreateObstaclePolyResponseFormGroup() {
		return new FormGroup<ObstaclePolyResponseFormProperties>({
			found: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ObstacleRouteResponse {

		/** Required */
		found: string;
	}
	export interface ObstacleRouteResponseFormProperties {

		/** Required */
		found: FormControl<string | null | undefined>,
	}
	export function CreateObstacleRouteResponseFormGroup() {
		return new FormGroup<ObstacleRouteResponseFormProperties>({
			found: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Geometry-defining arguments for point/distance requests */
	export interface ObstaclesByDistance {

		/** Required */
		distance: number;

		/** Required */
		latitude: number;

		/** Required */
		longitude: number;
	}

	/** Geometry-defining arguments for point/distance requests */
	export interface ObstaclesByDistanceFormProperties {

		/** Required */
		distance: FormControl<number | null | undefined>,

		/** Required */
		latitude: FormControl<number | null | undefined>,

		/** Required */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateObstaclesByDistanceFormGroup() {
		return new FormGroup<ObstaclesByDistanceFormProperties>({
			distance: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Geometry-defining arguments for polygon requests */
	export interface ObstaclesByPolygon {

		/** Required */
		poly: string;
	}

	/** Geometry-defining arguments for polygon requests */
	export interface ObstaclesByPolygonFormProperties {

		/** Required */
		poly: FormControl<string | null | undefined>,
	}
	export function CreateObstaclesByPolygonFormGroup() {
		return new FormGroup<ObstaclesByPolygonFormProperties>({
			poly: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Geometry-defining arguments for along-route requests */
	export interface ObstaclesByRoute {

		/** Required */
		route: string;
	}

	/** Geometry-defining arguments for along-route requests */
	export interface ObstaclesByRouteFormProperties {

		/** Required */
		route: FormControl<string | null | undefined>,
	}
	export function CreateObstaclesByRouteFormGroup() {
		return new FormGroup<ObstaclesByRouteFormProperties>({
			route: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Geometry-defining arguments for point/distance requests */
	export interface SSAByDistance {

		/** Required */
		distance: number;

		/** Required */
		latitude: number;

		/** Required */
		longitude: number;
	}

	/** Geometry-defining arguments for point/distance requests */
	export interface SSAByDistanceFormProperties {

		/** Required */
		distance: FormControl<number | null | undefined>,

		/** Required */
		latitude: FormControl<number | null | undefined>,

		/** Required */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateSSAByDistanceFormGroup() {
		return new FormGroup<SSAByDistanceFormProperties>({
			distance: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Geometry-defining arguments for polygon requests */
	export interface SSAByPolygon {

		/** Required */
		poly: string;
	}

	/** Geometry-defining arguments for polygon requests */
	export interface SSAByPolygonFormProperties {

		/** Required */
		poly: FormControl<string | null | undefined>,
	}
	export function CreateSSAByPolygonFormGroup() {
		return new FormGroup<SSAByPolygonFormProperties>({
			poly: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Geometry-defining arguments for along-route requests */
	export interface SSAByRoute {

		/** Required */
		route: string;
	}

	/** Geometry-defining arguments for along-route requests */
	export interface SSAByRouteFormProperties {

		/** Required */
		route: FormControl<string | null | undefined>,
	}
	export function CreateSSAByRouteFormGroup() {
		return new FormGroup<SSAByRouteFormProperties>({
			route: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SSADistanceResponse {

		/** Required */
		found: string;
	}
	export interface SSADistanceResponseFormProperties {

		/** Required */
		found: FormControl<string | null | undefined>,
	}
	export function CreateSSADistanceResponseFormGroup() {
		return new FormGroup<SSADistanceResponseFormProperties>({
			found: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SSAPolyResponse {

		/** Required */
		found: string;
	}
	export interface SSAPolyResponseFormProperties {

		/** Required */
		found: FormControl<string | null | undefined>,
	}
	export function CreateSSAPolyResponseFormGroup() {
		return new FormGroup<SSAPolyResponseFormProperties>({
			found: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SSARouteResponse {

		/** Required */
		found: string;
	}
	export interface SSARouteResponseFormProperties {

		/** Required */
		found: FormControl<string | null | undefined>,
	}
	export function CreateSSARouteResponseFormGroup() {
		return new FormGroup<SSARouteResponseFormProperties>({
			found: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Geometry-defining arguments for point/distance requests */
	export interface UOAsByDistance {

		/** Required */
		distance: number;

		/** Required */
		latitude: number;

		/** Required */
		longitude: number;
	}

	/** Geometry-defining arguments for point/distance requests */
	export interface UOAsByDistanceFormProperties {

		/** Required */
		distance: FormControl<number | null | undefined>,

		/** Required */
		latitude: FormControl<number | null | undefined>,

		/** Required */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateUOAsByDistanceFormGroup() {
		return new FormGroup<UOAsByDistanceFormProperties>({
			distance: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Geometry-defining arguments for polygon requests */
	export interface UOAsByPolygon {

		/** Required */
		poly: string;
	}

	/** Geometry-defining arguments for polygon requests */
	export interface UOAsByPolygonFormProperties {

		/** Required */
		poly: FormControl<string | null | undefined>,
	}
	export function CreateUOAsByPolygonFormGroup() {
		return new FormGroup<UOAsByPolygonFormProperties>({
			poly: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Geometry-defining arguments for along-route requests */
	export interface UOAsByRoute {

		/** Required */
		route: string;
	}

	/** Geometry-defining arguments for along-route requests */
	export interface UOAsByRouteFormProperties {

		/** Required */
		route: FormControl<string | null | undefined>,
	}
	export function CreateUOAsByRouteFormGroup() {
		return new FormGroup<UOAsByRouteFormProperties>({
			route: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UOAsDistanceResponse {

		/** Required */
		found: string;
	}
	export interface UOAsDistanceResponseFormProperties {

		/** Required */
		found: FormControl<string | null | undefined>,
	}
	export function CreateUOAsDistanceResponseFormGroup() {
		return new FormGroup<UOAsDistanceResponseFormProperties>({
			found: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UOAsPolyResponse {

		/** Required */
		found: string;
	}
	export interface UOAsPolyResponseFormProperties {

		/** Required */
		found: FormControl<string | null | undefined>,
	}
	export function CreateUOAsPolyResponseFormGroup() {
		return new FormGroup<UOAsPolyResponseFormProperties>({
			found: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UOAsRouteResponse {

		/** Required */
		found: string;
	}
	export interface UOAsRouteResponseFormProperties {

		/** Required */
		found: FormControl<string | null | undefined>,
	}
	export function CreateUOAsRouteResponseFormGroup() {
		return new FormGroup<UOAsRouteResponseFormProperties>({
			found: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VenueDistanceResponse {

		/** Required */
		found: string;
	}
	export interface VenueDistanceResponseFormProperties {

		/** Required */
		found: FormControl<string | null | undefined>,
	}
	export function CreateVenueDistanceResponseFormGroup() {
		return new FormGroup<VenueDistanceResponseFormProperties>({
			found: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VenuePolyResponse {

		/** Required */
		found: string;
	}
	export interface VenuePolyResponseFormProperties {

		/** Required */
		found: FormControl<string | null | undefined>,
	}
	export function CreateVenuePolyResponseFormGroup() {
		return new FormGroup<VenuePolyResponseFormProperties>({
			found: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VenueRouteResponse {

		/** Required */
		found: string;
	}
	export interface VenueRouteResponseFormProperties {

		/** Required */
		found: FormControl<string | null | undefined>,
	}
	export function CreateVenueRouteResponseFormGroup() {
		return new FormGroup<VenueRouteResponseFormProperties>({
			found: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Geometry-defining arguments for point/distance requests */
	export interface VenuesByDistance {

		/** Required */
		distance: number;

		/** Required */
		latitude: number;

		/** Required */
		longitude: number;
	}

	/** Geometry-defining arguments for point/distance requests */
	export interface VenuesByDistanceFormProperties {

		/** Required */
		distance: FormControl<number | null | undefined>,

		/** Required */
		latitude: FormControl<number | null | undefined>,

		/** Required */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateVenuesByDistanceFormGroup() {
		return new FormGroup<VenuesByDistanceFormProperties>({
			distance: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Geometry-defining arguments for polygon requests */
	export interface VenuesByPolygon {

		/** Required */
		poly: string;
	}

	/** Geometry-defining arguments for polygon requests */
	export interface VenuesByPolygonFormProperties {

		/** Required */
		poly: FormControl<string | null | undefined>,
	}
	export function CreateVenuesByPolygonFormGroup() {
		return new FormGroup<VenuesByPolygonFormProperties>({
			poly: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Geometry-defining arguments for along-route requests */
	export interface VenuesByRoute {

		/** Required */
		route: string;
	}

	/** Geometry-defining arguments for along-route requests */
	export interface VenuesByRouteFormProperties {

		/** Required */
		route: FormControl<string | null | undefined>,
	}
	export function CreateVenuesByRouteFormGroup() {
		return new FormGroup<VenuesByRouteFormProperties>({
			route: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Geometry-defining arguments for point/distance requests */
	export interface WxByDistance {

		/** Required */
		distance: number;

		/** Required */
		hours: number;

		/** Required */
		latitude: number;

		/** Required */
		longitude: number;

		/** Required */
		wxtypes: Array<string>;
	}

	/** Geometry-defining arguments for point/distance requests */
	export interface WxByDistanceFormProperties {

		/** Required */
		distance: FormControl<number | null | undefined>,

		/** Required */
		hours: FormControl<number | null | undefined>,

		/** Required */
		latitude: FormControl<number | null | undefined>,

		/** Required */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateWxByDistanceFormGroup() {
		return new FormGroup<WxByDistanceFormProperties>({
			distance: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			hours: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Geometry-defining arguments for polygon requests */
	export interface WxByPolygon {

		/** Required */
		hours: number;

		/** Required */
		poly: string;

		/** Required */
		wxtypes: Array<string>;
	}

	/** Geometry-defining arguments for polygon requests */
	export interface WxByPolygonFormProperties {

		/** Required */
		hours: FormControl<number | null | undefined>,

		/** Required */
		poly: FormControl<string | null | undefined>,
	}
	export function CreateWxByPolygonFormGroup() {
		return new FormGroup<WxByPolygonFormProperties>({
			hours: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			poly: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Geometry-defining arguments for along-route requests */
	export interface WxByRoute {

		/** Required */
		hours: number;

		/** Required */
		route: string;

		/** Required */
		wxtypes: Array<string>;
	}

	/** Geometry-defining arguments for along-route requests */
	export interface WxByRouteFormProperties {

		/** Required */
		hours: FormControl<number | null | undefined>,

		/** Required */
		route: FormControl<string | null | undefined>,
	}
	export function CreateWxByRouteFormGroup() {
		return new FormGroup<WxByRouteFormProperties>({
			hours: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			route: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WxDistanceResponse {

		/** Required */
		found: string;
	}
	export interface WxDistanceResponseFormProperties {

		/** Required */
		found: FormControl<string | null | undefined>,
	}
	export function CreateWxDistanceResponseFormGroup() {
		return new FormGroup<WxDistanceResponseFormProperties>({
			found: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WxPolyResponse {

		/** Required */
		found: string;
	}
	export interface WxPolyResponseFormProperties {

		/** Required */
		found: FormControl<string | null | undefined>,
	}
	export function CreateWxPolyResponseFormGroup() {
		return new FormGroup<WxPolyResponseFormProperties>({
			found: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WxRouteResponse {

		/** Required */
		found: string;
	}
	export interface WxRouteResponseFormProperties {

		/** Required */
		found: FormControl<string | null | undefined>,
	}
	export function CreateWxRouteResponseFormGroup() {
		return new FormGroup<WxRouteResponseFormProperties>({
			found: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve aerodromes within given distance of location.
		 * Retrieve aerodromes within given distance of a point. Request body parameters are:
		 * * latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees
		 * * longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees
		 * * distance:  distance in meters (max allowed value is 25000)
		 * Successful requests return a GeoJSON FeatureCollection, with a separate Feature for each
		 * Aerodrome found. All Features will include properties for the facility name, ident,
		 * type, and operational status.
		 * Post us/v1/aerodromes/distance-query
		 * @return {AerodromeDistanceResponse} A GeoJSON FeatureCollection, one Feature for each aerodrome found.
		 */
		Aerodromes_by_distance_us_v1_aerodromes_distance_query_post(requestBody: AerodromesByDistance): Observable<AerodromeDistanceResponse> {
			return this.http.post<AerodromeDistanceResponse>(this.baseUri + 'us/v1/aerodromes/distance-query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve aerodromes located within given area.
		 * Retrieve aerodromes located within given area. Request body parameters are:
		 * * poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.
		 * Successful requests return a GeoJSON FeatureCollection, with a separate Feature for each
		 * Aerodrome found. All Features will include properties for the facility name, ident,
		 * type, and operational status.
		 * Post us/v1/aerodromes/polygon-query
		 * @return {AerodromePolyResponse} A GeoJSON FeatureCollection, one Feature for each aerodrome found.
		 */
		Aerodromes_by_poly_us_v1_aerodromes_polygon_query_post(requestBody: AerodromesByPolygon): Observable<AerodromePolyResponse> {
			return this.http.post<AerodromePolyResponse>(this.baseUri + 'us/v1/aerodromes/polygon-query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve aerodromes found along a route.
		 * Retrieve aerodromes found along a route. Request body parameters are:
		 * * route: [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.
		 * Successful requests return a GeoJSON FeatureCollection, with a separate Feature for each
		 * Aerodrome found. All Features will include properties for the facility name, ident,
		 * type, and operational status.
		 * Post us/v1/aerodromes/route-query
		 * @return {AerodromeRouteResponse} A GeoJSON FeatureCollection, one Feature for each aerodrome found.
		 */
		Aerodromes_by_route_us_v1_aerodromes_route_query_post(requestBody: AerodromesByRoute): Observable<AerodromeRouteResponse> {
			return this.http.post<AerodromeRouteResponse>(this.baseUri + 'us/v1/aerodromes/route-query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve all requested types of airspace located within given distance of location.
		 * Retrieve selected types of airspace existing within given distance from a point. Request body parameters are:
		 * * latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees
		 * * longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees
		 * * distance:  distance in meters (max allowed value is 25000)
		 * * asptypes:  list of one or more airspace types you wish to retrieve. Allowed values are 'CAS', 'SUA', 'MAA', and 'MTR'.
		 * Successful requests return a list of GeoJSON FeatureCollections, one for each Airspace type indicated in the request. Within each feature collection, there will be a separate Feature for each Airspace instance found. All Features will include a property indicating the *airspace_type*. Additional properties for each *airspace_type* are as follows:
		 * * CAS (Controlled Airspace)
		 * - *name*
		 * - *cas_class*: B, C, D, or E2
		 * - *floor*: integer value in ft MSL
		 * - *ceiling*: integer value in ft MSL
		 * - *lannc*: true/false indicating whether or not authorization for this airspace may be obtained via LAANC
		 * * SUA (Special Use Airspace)
		 * - *name*
		 * - *sua_type*: AA = Alert Area, MOA = Military Operations Area, NSA = National Security Area, PA = Prohibited Area, RA = Restricted Area, WA = Warning Area
		 * - *floor*: lower limit of the airspace
		 * - *floor_uom*: unit of measure used for the numeric floor value: FT (feet) or FL (flight level)
		 * - *floor_ref*: reference level used for the numeric floor value: AGL, MSL, or STD (standard atmosphere, used for flight level values)
		 * - *ceiling*: upper limit of the airspace
		 * - *ceiling_uom*: unit of measure used for the numeric floor value: FT (feet) or FL (flight level)
		 * - *ceiling_ref*: reference level used for the numeric ceiling value: AGL, MSL, or STD (standard atmosphere, used for flight level values)
		 * - *ceiling_ref*: reference level used for the numeric ceiling value: AGL, MSL, or STD (standard atmosphere, used for flight level values)
		 * - *schedule*: default activation days/times (other times by NOTAM)
		 * * MAA (Miscellaneous Activity Area)
		 * - *name*
		 * - *maa_type*: one of the following - ULTRALIGHT, PARACHUTE JUMP AREA, AEROBATIC PRACTICE, GLIDER, HANG GLIDER, SPACE LAUNCH ACTIVITY
		 * - *use_times*: textual description of days/times when activity in the area should be expected
		 * * MTR (Military Training Route)
		 * - *name*
		 * - *use_times*: textual description of days/times when MTR is active/hot
		 * - *terrain_following*: boolean value indicating whether terrain following activity occurs on the route
		 * - *max_extent_nm*: maximum distance that aircraft can deviate from route centerline
		 * Post us/v1/airspace/distance-query
		 * @return {AirspaceDistanceResponse} A list of GeoJSON FeatureCollections, one for each Airspace type requested.
		 */
		Asp_by_distance_us_v1_airspace_distance_query_post(requestBody: AirspaceByDistance): Observable<AirspaceDistanceResponse> {
			return this.http.post<AirspaceDistanceResponse>(this.baseUri + 'us/v1/airspace/distance-query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve all requested types of airspace located within given GeoJSON Polygon.
		 * Retrieve selected types of airspace located within given area. Request body parameters are:
		 * * poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.
		 * * asptypes:  list of one or more airspace types you wish to retrieve. Allowed values are 'CAS', 'SUA', 'MAA', and 'MTR'.
		 * Successful requests return a list of GeoJSON FeatureCollections, one for each Airspace type indicated in the request. Within each feature collection, there will be a separate Feature for each Airspace instance found. All Features will include a property indicating the *airspace_type*. Additional properties for each *airspace_type* are as follows:
		 * * CAS (Controlled Airspace)
		 * - *name*
		 * - *cas_class*: B, C, D, or E2
		 * - *floor*: integer value in ft MSL
		 * - *ceiling*: integer value in ft MSL
		 * - *lannc*: true/false indicating whether or not authorization for this airspace may be obtained via LAANC
		 * * SUA (Special Use Airspace)
		 * - *name*
		 * - *sua_type*: AA = Alert Area, MOA = Military Operations Area, NSA = National Security Area, PA = Prohibited Area, RA = Restricted Area, WA = Warning Area
		 * - *floor*: lower limit of the airspace
		 * - *floor_uom*: unit of measure used for the numeric floor value: FT (feet) or FL (flight level)
		 * - *floor_ref*: reference level used for the numeric floor value: AGL, MSL, or STD (standard atmosphere, used for flight level values)
		 * - *ceiling*: upper limit of the airspace
		 * - *ceiling_uom*: unit of measure used for the numeric floor value: FT (feet) or FL (flight level)
		 * - *ceiling_ref*: reference level used for the numeric ceiling value: AGL, MSL, or STD (standard atmosphere, used for flight level values)
		 * - *schedule*: default activation days/times (other times by NOTAM)
		 * * MAA (Miscellaneous Activity Area)
		 * - *name*
		 * - *maa_type*: one of the following - ULTRALIGHT, PARACHUTE JUMP AREA, AEROBATIC PRACTICE, GLIDER, HANG GLIDER, SPACE LAUNCH ACTIVITY
		 * - *use_times*: textual description of days/times when activity in the area should be expected
		 * * MTR (Military Training Route)
		 * - *name*
		 * - *use_times*: textual description of days/times when MTR is active/hot
		 * - *terrain_following*: boolean value indicating whether terrain following activity occurs on the route
		 * - *max_extent_nm*: maximum distance that aircraft can deviate from route centerline
		 * Post us/v1/airspace/polygon-query
		 * @return {AirspacePolyResponse} A list of GeoJSON FeatureCollections, one for each Airspace type requested.
		 */
		Asp_by_poly_us_v1_airspace_polygon_query_post(requestBody: AirspaceByPolygon): Observable<AirspacePolyResponse> {
			return this.http.post<AirspacePolyResponse>(this.baseUri + 'us/v1/airspace/polygon-query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve all requested types of airspace traversed by route.
		 * Retrieve selected types of airspace traversed by route. Request body parameters are:
		 * * route:  [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.
		 * * asptypes:  list of one or more airspace types you wish to retrieve. Allowed values are 'CAS', 'SUA', 'MAA', and 'MTR'.
		 * Successful requests return a list of GeoJSON FeatureCollections, one for each Airspace type indicated in the request. Within each feature collection, there will be a separate Feature for each Airspace instance found. All Features will include a property indicating the *airspace_type*. Additional properties for each *airspace_type* are as follows:
		 * * CAS (Controlled Airspace)
		 * - *name*
		 * - *cas_class*: B, C, D, or E2
		 * - *floor*: integer value in ft MSL
		 * - *ceiling*: integer value in ft MSL
		 * - *lannc*: true/false indicating whether or not authorization for this airspace may be obtained via LAANC
		 * * SUA (Special Use Airspace)
		 * - *name*
		 * - *sua_type*: AA = Alert Area, MOA = Military Operations Area, NSA = National Security Area, PA = Prohibited Area, RA = Restricted Area, WA = Warning Area
		 * - *floor*: lower limit of the airspace
		 * - *floor_uom*: unit of measure used for the numeric floor value: FT (feet) or FL (flight level)
		 * - *floor_ref*: reference level used for the numeric floor value: AGL, MSL, or STD (standard atmosphere, used for flight level values)
		 * - *ceiling*: upper limit of the airspace
		 * - *ceiling_uom*: unit of measure used for the numeric floor value: FT (feet) or FL (flight level)
		 * - *ceiling_ref*: reference level used for the numeric ceiling value: AGL, MSL, or STD (standard atmosphere, used for flight level values)
		 * - *schedule*: default activation days/times (other times by NOTAM)
		 * * MAA (Miscellaneous Activity Area)
		 * - *name*
		 * - *maa_type*: one of the following - ULTRALIGHT, PARACHUTE JUMP AREA, AEROBATIC PRACTICE, GLIDER, HANG GLIDER, SPACE LAUNCH ACTIVITY
		 * - *use_times*: textual description of days/times when activity in the area should be expected
		 * * MTR (Military Training Route)
		 * - *name*
		 * - *use_times*: textual description of days/times when MTR is active/hot
		 * - *terrain_following*: boolean value indicating whether terrain following activity occurs on the route
		 * - *max_extent_nm*: maximum distance that aircraft can deviate from route centerline
		 * Post us/v1/airspace/route-query
		 * @return {AirspaceRouteResponse} A list of GeoJSON FeatureCollections, one for each Airspace type requested.
		 */
		Asp_by_route_us_v1_airspace_route_query_post(requestBody: AirspaceByRoute): Observable<AirspaceRouteResponse> {
			return this.http.post<AirspaceRouteResponse>(this.baseUri + 'us/v1/airspace/route-query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve obstacles within given distance of location.
		 * Retrieve obstacles within given distance of a point. Request body parameters are:
		 * * latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees
		 * * longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees
		 * * distance:  distance in meters (max allowed value is 25000)
		 * Post us/v1/obstacles/distance-query
		 * @return {ObstacleDistanceResponse} A GeoJSON FeatureCollection, one Feature for each obstacle found.
		 */
		Obstacles_by_distance_us_v1_obstacles_distance_query_post(requestBody: ObstaclesByDistance): Observable<ObstacleDistanceResponse> {
			return this.http.post<ObstacleDistanceResponse>(this.baseUri + 'us/v1/obstacles/distance-query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve obstacles located within given area.
		 * Retrieve obstacles located within given area. Request body parameters are:
		 * * poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.
		 * Post us/v1/obstacles/polygon-query
		 * @return {ObstaclePolyResponse} A GeoJSON FeatureCollection, one Feature for each obstacle found.
		 */
		Obstacles_by_poly_us_v1_obstacles_polygon_query_post(requestBody: ObstaclesByPolygon): Observable<ObstaclePolyResponse> {
			return this.http.post<ObstaclePolyResponse>(this.baseUri + 'us/v1/obstacles/polygon-query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve obstacles found along a route.
		 * Retrieve obstacles found along a route. Request body parameters are:
		 * * route: [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.
		 * Post us/v1/obstacles/route-query
		 * @return {ObstacleRouteResponse} A GeoJSON FeatureCollection, one Feature for each obstacle found.
		 */
		Obstacles_by_route_us_v1_obstacles_route_query_post(requestBody: ObstaclesByRoute): Observable<ObstacleRouteResponse> {
			return this.http.post<ObstacleRouteResponse>(this.baseUri + 'us/v1/obstacles/route-query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve flight restrictions applicable within given distance of location.
		 * Retrieve Flight Restrictions applicable within given distance of a point. Request body parameters are:
		 * * latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees
		 * * longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees
		 * * distance:  distance in meters (max allowed value is 25000)
		 * Post us/v1/restrictions/distance-query
		 * @return {NOTAMsDistanceResponse} A GeoJSON FeatureCollection, one Feature for each restriction.
		 */
		Tfr_by_distance_us_v1_restrictions_distance_query_post(requestBody: NOTAMsByDistance): Observable<NOTAMsDistanceResponse> {
			return this.http.post<NOTAMsDistanceResponse>(this.baseUri + 'us/v1/restrictions/distance-query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve flight restrictions applicable within given area.
		 * Retrieve Flight Restrictions located within given area. Request body parameters are:
		 * * poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.
		 * Post us/v1/restrictions/polygon-query
		 * @return {NOTAMsPolyResponse} A GeoJSON FeatureCollection, one Feature for each restriction.
		 */
		Tfr_by_poly_us_v1_restrictions_polygon_query_post(requestBody: NOTAMsByPolygon): Observable<NOTAMsPolyResponse> {
			return this.http.post<NOTAMsPolyResponse>(this.baseUri + 'us/v1/restrictions/polygon-query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve flight restrictions applicable along route.
		 * Retrieve Flight Restrictions applicable along your route. Request body parameters are:
		 * * route:  [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.
		 * Post us/v1/restrictions/route-query
		 * @return {NOTAMsRouteResponse} A GeoJSON FeatureCollection, one Feature for each restriction.
		 */
		Tfr_by_route_us_v1_restrictions_route_query_post(requestBody: NOTAMsByRoute): Observable<NOTAMsRouteResponse> {
			return this.http.post<NOTAMsRouteResponse>(this.baseUri + 'us/v1/restrictions/route-query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve all special security areas located within given distance of location.
		 * Retrieve special security areas existing within given distance from a point. Request body parameters are:
		 * * latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees
		 * * longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees
		 * * distance:  distance in meters (max allowed value is 25000)
		 * Post us/v1/ssa/distance-query
		 * @return {SSADistanceResponse} A GeoJSON FeatureCollection, one Feature for each area found.
		 */
		Ssa_by_distance_us_v1_ssa_distance_query_post(requestBody: SSAByDistance): Observable<SSADistanceResponse> {
			return this.http.post<SSADistanceResponse>(this.baseUri + 'us/v1/ssa/distance-query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve all special security areas located within given GeoJSON Polygon.
		 * Retrieve all special security areas located within given area. Request body parameters are:
		 * * poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.
		 * Post us/v1/ssa/polygon-query
		 * @return {SSAPolyResponse} A GeoJSON FeatureCollection, one Feature for each area found.
		 */
		Ssa_by_poly_us_v1_ssa_polygon_query_post(requestBody: SSAByPolygon): Observable<SSAPolyResponse> {
			return this.http.post<SSAPolyResponse>(this.baseUri + 'us/v1/ssa/polygon-query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve all special security areas traversed by route.
		 * Retrieve all special security areas intersected by route. Request body parameters are:
		 * * route: [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.
		 * Post us/v1/ssa/route-query
		 * @return {SSARouteResponse} A GeoJSON FeatureCollection, one Feature for each area found.
		 */
		Ssa_by_route_us_v1_ssa_route_query_post(requestBody: SSAByRoute): Observable<SSARouteResponse> {
			return this.http.post<SSARouteResponse>(this.baseUri + 'us/v1/ssa/route-query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve UAS Operating Areas (UOAs) found within given distance of location.
		 * Retrieve UAS Operating Areas (UOAs) found within given distance of a point. Request body parameters are:
		 * * latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees
		 * * longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees
		 * * distance:  distance in meters (max allowed value is 25000)
		 * Post us/v1/uoa/distance-query
		 * @return {UOAsDistanceResponse} A GeoJSON FeatureCollection, one Feature for each UOA.
		 */
		Uoa_by_distance_us_v1_uoa_distance_query_post(requestBody: UOAsByDistance): Observable<UOAsDistanceResponse> {
			return this.http.post<UOAsDistanceResponse>(this.baseUri + 'us/v1/uoa/distance-query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve UAS Operating Areas (UOAs) found within given area.
		 * Retrieve UAS Operating Areas (UOAs) found within given area. Request body parameters are:
		 * * poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.
		 * Post us/v1/uoa/polygon-query
		 * @return {UOAsPolyResponse} A GeoJSON FeatureCollection, one Feature for each UOA.
		 */
		Uoa_by_poly_us_v1_uoa_polygon_query_post(requestBody: UOAsByPolygon): Observable<UOAsPolyResponse> {
			return this.http.post<UOAsPolyResponse>(this.baseUri + 'us/v1/uoa/polygon-query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve UAS Operating Areas (UOAs) found along route.
		 * Retrieve UAS Operating Areas (UOAs) found along your route. Request body parameters are:
		 * * route:  [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.
		 * Post us/v1/uoa/route-query
		 * @return {UOAsRouteResponse} A GeoJSON FeatureCollection, one Feature for each UOA.
		 */
		Uoa_by_route_us_v1_uoa_route_query_post(requestBody: UOAsByRoute): Observable<UOAsRouteResponse> {
			return this.http.post<UOAsRouteResponse>(this.baseUri + 'us/v1/uoa/route-query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve all restricted public venues located within given distance of location.
		 * Retrieve venues existing within given distance from a point. Request body parameters are:
		 * * latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees
		 * * longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees
		 * * distance:  distance in meters (max allowed value is 25000)
		 * Post us/v1/venues/distance-query
		 * @return {VenueDistanceResponse} A GeoJSON FeatureCollection, one Feature for each venue found.
		 */
		Ven_by_distance_us_v1_venues_distance_query_post(requestBody: VenuesByDistance): Observable<VenueDistanceResponse> {
			return this.http.post<VenueDistanceResponse>(this.baseUri + 'us/v1/venues/distance-query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve all restricted public venues located within given GeoJSON Polygon.
		 * Retrieve all restricted public venues located within given area. Request body parameters are:
		 * * poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.
		 * Post us/v1/venues/polygon-query
		 * @return {VenuePolyResponse} A GeoJSON FeatureCollection, one Feature for each venue found.
		 */
		Ven_by_poly_us_v1_venues_polygon_query_post(requestBody: VenuesByPolygon): Observable<VenuePolyResponse> {
			return this.http.post<VenuePolyResponse>(this.baseUri + 'us/v1/venues/polygon-query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve all restricted public venues traversed by route.
		 * Retrieve all restricted public venues intersected by route. Request body parameters are:
		 * * route: [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.
		 * Post us/v1/venues/route-query
		 * @return {VenueRouteResponse} A GeoJSON FeatureCollection, one Feature for each venue found.
		 */
		Ven_by_route_us_v1_venues_route_query_post(requestBody: VenuesByRoute): Observable<VenueRouteResponse> {
			return this.http.post<VenueRouteResponse>(this.baseUri + 'us/v1/venues/route-query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve forecast values within given distance of location for all requested weather elements and time periods.
		 * Retrieve forecast values for selected weather elements and time period. Request body parameters are:
		 * * latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees
		 * * longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees
		 * * distance:  distance in meters (max allowed value is 25000)
		 * * wxtypes:  list of one or more weather forecast elements you wish to retrieve. Allowed values are "CIG", "DEWPT", "SKY", "TEMP", "VIS", "WINDDIR", "WINDGUST", "WINDSPEED".
		 * * hours:  number of hourly forecasts to return (1-24). For current hour only you should enter value of 1. To also retrieve values for each of the next n hours, enter n.
		 * The response will consist of a GeoJSON FeatureCollection with one Feature for each forecast location found within requested area,
		 * properties of which will include an ordered list of forecast values for each requested weather element, for each requested hour. Units for each element are as follows:
		 * * CIG: meters AGL
		 * * DEWPT: degrees Celsius
		 * * SKY: % cloud cover
		 * * TEMP: degrees Celsius
		 * * VIS: meters
		 * * WINDDIR: degrees true
		 * * WINDGUST: meters/sec
		 * * WINDSPEED: meters/sec
		 * Post us/v1/wx-forecast/distance-query
		 * @return {WxDistanceResponse} A GeoJSON FeatureCollection with one Feature for each forecast location found within requested area.
		 */
		Wx_by_distance_us_v1_wx_forecast_distance_query_post(requestBody: WxByDistance): Observable<WxDistanceResponse> {
			return this.http.post<WxDistanceResponse>(this.baseUri + 'us/v1/wx-forecast/distance-query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve forecast values within given GeoJSON polygon for all requested weather elements and time periods.
		 * Retrieve forecast values located within given area for requested weather elements and time period. Request body parameters are:
		 * * poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.
		 * * wxtypes:  list of one or more weather forecast elements you wish to retrieve. Allowed values are "CIG", "DEWPT", "SKY", "TEMP", "VIS", "WINDDIR", "WINDGUST", "WINDSPEED".
		 * * hours:  number of hourly forecasts to return (1-24). For current hour only you should enter value of 1. To also retrieve values for each of the next n hours, enter n.
		 * The response will consist of a GeoJSON FeatureCollection with one Feature for each forecast location found within requested area,
		 * properties of which will include an ordered list of forecast values for each requested weather element, for each requested hour. Units for each element are as follows:
		 * * CIG: meters AGL
		 * * DEWPT: degrees Celsius
		 * * SKY: % cloud cover
		 * * TEMP: degrees Celsius
		 * * VIS: meters
		 * * WINDDIR: degrees true
		 * * WINDGUST: meters/sec
		 * * WINDSPEED: meters/sec
		 * Post us/v1/wx-forecast/polygon-query
		 * @return {WxPolyResponse} A GeoJSON FeatureCollection with one Feature for each forecast location found within requested area.
		 */
		Wx_by_poly_us_v1_wx_forecast_polygon_query_post(requestBody: WxByPolygon): Observable<WxPolyResponse> {
			return this.http.post<WxPolyResponse>(this.baseUri + 'us/v1/wx-forecast/polygon-query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve forecast values along a route for all requested weather elements and time periods.
		 * Retrieve forecast values along route for requested weather elements and time period. Request body parameters are:
		 * * route:  [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.
		 * * wxtypes:  list of one or more weather forecast elements you wish to retrieve. Allowed values are "CIG", "DEWPT", "SKY", "TEMP", "VIS", "WINDDIR", "WINDGUST", "WINDSPEED".
		 * * hours:  number of hourly forecasts to return (1-24). For current hour only you should enter value of 1. To also retrieve values for each of the next n hours, enter n.
		 * The response will consist of a GeoJSON FeatureCollection with one Feature for each forecast location found within requested area,
		 * properties of which will include an ordered list of forecast values for each requested weather element, for each requested hour. Units for each element are as follows:
		 * * CIG: meters AGL
		 * * DEWPT: degrees Celsius
		 * * SKY: % cloud cover
		 * * TEMP: degrees Celsius
		 * * VIS: meters
		 * * WINDDIR: degrees true
		 * * WINDGUST: meters/sec
		 * * WINDSPEED: meters/sec
		 * Post us/v1/wx-forecast/route-query
		 * @return {WxRouteResponse} A GeoJSON FeatureCollection with one Feature for each forecast location found within requested area.
		 */
		Wx_by_route_us_v1_wx_forecast_route_query_post(requestBody: WxByRoute): Observable<WxRouteResponse> {
			return this.http.post<WxRouteResponse>(this.baseUri + 'us/v1/wx-forecast/route-query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

