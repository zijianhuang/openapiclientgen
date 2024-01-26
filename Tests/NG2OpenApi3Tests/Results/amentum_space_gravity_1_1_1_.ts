import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Anomaly {

		/** Eta (arcsec) - easterly component of deflection of vertical. */
		eta?: AnomalyEta;

		/**
		 * Gravity anomaly (mGal)
		 */
		gravity_anomaly?: AnomalyGravity_anomaly;

		/**
		 * Xi (arcsec) - northerly component of deflection of vertical.
		 */
		xi?: AnomalyXi;
	}
	export interface AnomalyFormProperties {
	}
	export function CreateAnomalyFormGroup() {
		return new FormGroup<AnomalyFormProperties>({
		});

	}

	export interface AnomalyEta {
		units?: string | null;
		value?: number | null;
	}
	export interface AnomalyEtaFormProperties {
		units: FormControl<string | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateAnomalyEtaFormGroup() {
		return new FormGroup<AnomalyEtaFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AnomalyGravity_anomaly {
		units?: string | null;
		value?: number | null;
	}
	export interface AnomalyGravity_anomalyFormProperties {
		units: FormControl<string | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateAnomalyGravity_anomalyFormGroup() {
		return new FormGroup<AnomalyGravity_anomalyFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AnomalyXi {
		units?: string | null;
		value?: number | null;
	}
	export interface AnomalyXiFormProperties {
		units: FormControl<string | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateAnomalyXiFormGroup() {
		return new FormGroup<AnomalyXiFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Height {

		/**
		 * Geoid height (m)
		 */
		height?: HeightHeight;
	}
	export interface HeightFormProperties {
	}
	export function CreateHeightFormGroup() {
		return new FormGroup<HeightFormProperties>({
		});

	}

	export interface HeightHeight {
		units?: string | null;
		value?: number | null;
	}
	export interface HeightHeightFormProperties {
		units: FormControl<string | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateHeightHeightFormGroup() {
		return new FormGroup<HeightHeightFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Calculate the geoid height
		 * for a given latitude / longitude.
		 * Get egm2008/geoid_height
		 * @param {number} latitude Geographic latitude (-90 to 90 deg).
		 * @param {number} longitude Geographic longitude (-180 to 180 deg).
		 * @return {Height} Successful geoid height calculation
		 */
		App_api_egm2008_endpoints_EGM2008_calculate_height(latitude: number, longitude: number): Observable<Height> {
			return this.http.get<Height>(this.baseUri + 'egm2008/geoid_height?latitude=' + latitude + '&longitude=' + longitude, {});
		}

		/**
		 * Calculate gravity anomaly values
		 * for a given latitude / longitude.
		 * Get egm2008/gravity_anomaly
		 * @param {number} latitude Geographic latitude (-90 to 90 deg).
		 * @param {number} longitude Geographic longitude (-180 to 180 deg).
		 * @return {Anomaly} Successful anomaly calculation
		 */
		App_api_egm2008_endpoints_EGM2008_calculate_anomaly(latitude: number, longitude: number): Observable<Anomaly> {
			return this.http.get<Anomaly>(this.baseUri + 'egm2008/gravity_anomaly?latitude=' + latitude + '&longitude=' + longitude, {});
		}
	}

}

