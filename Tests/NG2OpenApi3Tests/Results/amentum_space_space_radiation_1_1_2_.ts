import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Flux {

		/**
		 * Particle energies at which omnidirectional flux values are calculated, and their units.
		 */
		energies?: FluxEnergies;

		/**
		 * Corresponding omnidirectional flux values, and their units.
		 */
		flux?: FluxFlux;
	}
	export interface FluxFormProperties {
	}
	export function CreateFluxFormGroup() {
		return new FormGroup<FluxFormProperties>({
		});

	}

	export interface FluxEnergies {
		data?: Array<number>;
		units?: string | null;
	}
	export interface FluxEnergiesFormProperties {
		units: FormControl<string | null | undefined>,
	}
	export function CreateFluxEnergiesFormGroup() {
		return new FormGroup<FluxEnergiesFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FluxFlux {
		data?: Array<number>;
		units?: string | null;
	}
	export interface FluxFluxFormProperties {
		units: FormControl<string | null | undefined>,
	}
	export function CreateFluxFluxFormGroup() {
		return new FormGroup<FluxFluxFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FluxAtEnergy {

		/**
		 * Particle flux value and units.
		 */
		flux?: FluxAtEnergyFlux;
	}
	export interface FluxAtEnergyFormProperties {
	}
	export function CreateFluxAtEnergyFormGroup() {
		return new FormGroup<FluxAtEnergyFormProperties>({
		});

	}

	export interface FluxAtEnergyFlux {
		units?: string | null;

		/** Type: double */
		value?: number | null;
	}
	export interface FluxAtEnergyFluxFormProperties {
		units: FormControl<string | null | undefined>,

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateFluxAtEnergyFluxFormGroup() {
		return new FormGroup<FluxAtEnergyFluxFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Calculate particle flux
		 * for the given energy, atomic number, and date.
		 * Get gcr/flux_dlr
		 * @param {number} year <br>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} month <br>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} day <br>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} z <br>Particle atomic number
		 *     Type: double
		 * @param {number} energy <br>Particle energy in MeV/n<br> Valid range: [0, 10<sup>6</sup>] MeV/n<br> 
		 *     Type: double
		 * @return {FluxAtEnergy} Successful flux calculation
		 */
		App_api_endpoints_GCR_calculate_dlr_flux(year: number, month: number, day: number, z: number, energy: number): Observable<FluxAtEnergy> {
			return this.http.get<FluxAtEnergy>(this.baseUri + 'gcr/flux_dlr?year=' + year + '&month=' + month + '&day=' + day + '&z=' + z + '&energy=' + energy, {});
		}

		/**
		 * Calculate mean particle flux
		 * at given coordinates and date-time.
		 * Get trapped/flux_mean
		 * @param {App_api_endpoints_TrappedRadiation_calculate_flux_meanModel} model <br>Which model to use: <br><br> - Energetic electrons (AE9) <br> - Energetic protons (AP9)  <br> - Space plasma model for electrons (SPME) <br> - for hydrogen (SPMH) <br> - for helium (SPMHE) <br> - for oxygen (SPMO) 
		 * @param {App_api_endpoints_TrappedRadiation_calculate_flux_meanCoord_sys} coord_sys <br>Coordinate system to use:  <br><br> - Geodetic/WGS84 (GDZ) <br> - Geocentric Cartesian (GEO) <br> - Geocentric Earth Inertial (GEI) <br> See "Bhavnani, K. H., & Vancour, R. P. (1991).  Coordinate systems for space and geophysical applications"  for coord system definitions.
		 * @param {App_api_endpoints_TrappedRadiation_calculate_flux_meanCoord_units} coord_units <br>Coordinate units to use: km (KM) or Earth Radii (RE)
		 * @param {number} coord1 <br>First coordinate value to specify position. <br><br> Ordering for GEI, GEO coords:X, Y, Z<br> Ordering for GDZ coords: Alt, Lat, Long<br>  Valid ranges for latitude: -90, 90<br>  Valid ranges for longitude: 0, 360<br> 
		 *     Type: double
		 * @param {number} coord2 <br>Second coordinate value.
		 *     Type: double
		 * @param {number} coord3 <br>Third coordinate value.
		 *     Type: double
		 * @param {number} year <br>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} month <br>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} day <br>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} hour <br>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} minute <br>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} second <br>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Flux} Successful flux calculation
		 */
		App_api_endpoints_TrappedRadiation_calculate_flux_mean(model: App_api_endpoints_TrappedRadiation_calculate_flux_meanModel, coord_sys: App_api_endpoints_TrappedRadiation_calculate_flux_meanCoord_sys, coord_units: App_api_endpoints_TrappedRadiation_calculate_flux_meanCoord_units, coord1: number, coord2: number, coord3: number, year: number, month: number, day: number, hour: number, minute: number, second: number): Observable<Flux> {
			return this.http.get<Flux>(this.baseUri + 'trapped/flux_mean?model=' + model + '&coord_sys=' + coord_sys + '&coord_units=' + coord_units + '&coord1=' + coord1 + '&coord2=' + coord2 + '&coord3=' + coord3 + '&year=' + year + '&month=' + month + '&day=' + day + '&hour=' + hour + '&minute=' + minute + '&second=' + second, {});
		}

		/**
		 * Calculate percentile particle flux
		 * at given coordinates and date-time.
		 * Get trapped/flux_percentile
		 * @param {App_api_endpoints_TrappedRadiation_calculate_flux_meanModel} model <br>Which model to use: <br><br> - Energetic electrons (AE9) <br> - Energetic protons (AP9)  <br> - Space plasma model for electrons (SPME) <br> - for hydrogen (SPMH) <br> - for helium (SPMHE) <br> - for oxygen (SPMO) 
		 * @param {App_api_endpoints_TrappedRadiation_calculate_flux_meanCoord_sys} coord_sys <br>Coordinate system to use:  <br><br> - Geodetic/WGS84 (GDZ) <br> - Geocentric Cartesian (GEO) <br> - Geocentric Earth Inertial (GEI) <br> See "Bhavnani, K. H., & Vancour, R. P. (1991).  Coordinate systems for space and geophysical applications"  for coord system definitions.
		 * @param {App_api_endpoints_TrappedRadiation_calculate_flux_meanCoord_units} coord_units <br>Coordinate units to use: km (KM) or Earth Radii (RE)
		 * @param {number} coord1 <br>First coordinate value to specify position. <br><br> Ordering for GEI, GEO coords:X, Y, Z<br> Ordering for GDZ coords: Alt, Lat, Long<br>  Valid ranges for latitude: -90, 90<br>  Valid ranges for longitude: 0, 360<br> 
		 *     Type: double
		 * @param {number} coord2 <br>Second coordinate value.
		 *     Type: double
		 * @param {number} coord3 <br>Third coordinate value.
		 *     Type: double
		 * @param {number} year <br>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} month <br>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} day <br>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} hour <br>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} minute <br>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} second <br>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} percentile <br>Integer percentile at which to calc flux (50 is the median value).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Flux} Successful flux calculation
		 */
		App_api_endpoints_TrappedRadiation_calculate_flux_percentile(model: App_api_endpoints_TrappedRadiation_calculate_flux_meanModel, coord_sys: App_api_endpoints_TrappedRadiation_calculate_flux_meanCoord_sys, coord_units: App_api_endpoints_TrappedRadiation_calculate_flux_meanCoord_units, coord1: number, coord2: number, coord3: number, year: number, month: number, day: number, hour: number, minute: number, second: number, percentile: number): Observable<Flux> {
			return this.http.get<Flux>(this.baseUri + 'trapped/flux_percentile?model=' + model + '&coord_sys=' + coord_sys + '&coord_units=' + coord_units + '&coord1=' + coord1 + '&coord2=' + coord2 + '&coord3=' + coord3 + '&year=' + year + '&month=' + month + '&day=' + day + '&hour=' + hour + '&minute=' + minute + '&second=' + second + '&percentile=' + percentile, {});
		}
	}

	export enum App_api_endpoints_TrappedRadiation_calculate_flux_meanModel { AE9 = 'AE9', AP9 = 'AP9', SPME = 'SPME', SPMH = 'SPMH', SPMHE = 'SPMHE', SPMO = 'SPMO' }

	export enum App_api_endpoints_TrappedRadiation_calculate_flux_meanCoord_sys { GDZ = 'GDZ', GEO = 'GEO', GEI = 'GEI' }

	export enum App_api_endpoints_TrappedRadiation_calculate_flux_meanCoord_units { KM = 'KM', RE = 'RE' }

}

