import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Error Response */
	export interface ErrorResponse {
		errors?: Array<Errors>;
	}

	/** Error Response */
	export interface ErrorResponseFormProperties {
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
		});

	}

	export interface Errors {

		/** DVLA reference code */
		code?: string | null;

		/** A meaningful description of the error which has occurred */
		detail?: string | null;
		status?: string | null;

		/**
		 * Error title
		 * Required
		 */
		title: string;
	}
	export interface ErrorsFormProperties {

		/** DVLA reference code */
		code: FormControl<string | null | undefined>,

		/** A meaningful description of the error which has occurred */
		detail: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,

		/**
		 * Error title
		 * Required
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateErrorsFormGroup() {
		return new FormGroup<ErrorsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			detail: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Vehicle {

		/** Additional Rate of Tax End Date, format: YYYY-MM-DD */
		artEndDate?: Date | null;

		/** Carbon Dioxide emissions in grams per kilometre */
		co2Emissions?: number | null;

		/** Vehicle colour */
		colour?: string | null;

		/** Date of last V5C issued */
		dateOfLastV5CIssued?: Date | null;

		/** Engine capacity in cubic centimetres */
		engineCapacity?: number | null;

		/** Euro Status (Dealer / Customer Provided (new vehicles)) */
		euroStatus?: string | null;

		/** Fuel type (Method of Propulsion) */
		fuelType?: string | null;

		/** Vehicle make */
		make?: string | null;

		/** True only if vehicle has been export marked */
		markedForExport?: boolean | null;

		/** Month of First DVLA Registration */
		monthOfFirstDvlaRegistration?: Date | null;

		/** Month of First Registration */
		monthOfFirstRegistration?: Date | null;

		/** Mot Expiry Date */
		motExpiryDate?: Date | null;

		/** MOT Status of the vehicle */
		motStatus?: VehicleMotStatus | null;

		/** Real Driving Emissions value */
		realDrivingEmissions?: string | null;

		/**
		 * Registration number of the vehicle
		 * Required
		 */
		registrationNumber: string;

		/** Revenue weight in kilograms */
		revenueWeight?: number | null;

		/** Date of tax liablity, Used in calculating licence information presented to user */
		taxDueDate?: Date | null;

		/** Tax status of the vehicle */
		taxStatus?: VehicleTaxStatus | null;

		/** Vehicle Type Approval Category */
		typeApproval?: string | null;

		/** Vehicle wheel plan */
		wheelplan?: string | null;

		/** Year of Manufacture */
		yearOfManufacture?: number | null;
	}
	export interface VehicleFormProperties {

		/** Additional Rate of Tax End Date, format: YYYY-MM-DD */
		artEndDate: FormControl<Date | null | undefined>,

		/** Carbon Dioxide emissions in grams per kilometre */
		co2Emissions: FormControl<number | null | undefined>,

		/** Vehicle colour */
		colour: FormControl<string | null | undefined>,

		/** Date of last V5C issued */
		dateOfLastV5CIssued: FormControl<Date | null | undefined>,

		/** Engine capacity in cubic centimetres */
		engineCapacity: FormControl<number | null | undefined>,

		/** Euro Status (Dealer / Customer Provided (new vehicles)) */
		euroStatus: FormControl<string | null | undefined>,

		/** Fuel type (Method of Propulsion) */
		fuelType: FormControl<string | null | undefined>,

		/** Vehicle make */
		make: FormControl<string | null | undefined>,

		/** True only if vehicle has been export marked */
		markedForExport: FormControl<boolean | null | undefined>,

		/** Month of First DVLA Registration */
		monthOfFirstDvlaRegistration: FormControl<Date | null | undefined>,

		/** Month of First Registration */
		monthOfFirstRegistration: FormControl<Date | null | undefined>,

		/** Mot Expiry Date */
		motExpiryDate: FormControl<Date | null | undefined>,

		/** MOT Status of the vehicle */
		motStatus: FormControl<VehicleMotStatus | null | undefined>,

		/** Real Driving Emissions value */
		realDrivingEmissions: FormControl<string | null | undefined>,

		/**
		 * Registration number of the vehicle
		 * Required
		 */
		registrationNumber: FormControl<string | null | undefined>,

		/** Revenue weight in kilograms */
		revenueWeight: FormControl<number | null | undefined>,

		/** Date of tax liablity, Used in calculating licence information presented to user */
		taxDueDate: FormControl<Date | null | undefined>,

		/** Tax status of the vehicle */
		taxStatus: FormControl<VehicleTaxStatus | null | undefined>,

		/** Vehicle Type Approval Category */
		typeApproval: FormControl<string | null | undefined>,

		/** Vehicle wheel plan */
		wheelplan: FormControl<string | null | undefined>,

		/** Year of Manufacture */
		yearOfManufacture: FormControl<number | null | undefined>,
	}
	export function CreateVehicleFormGroup() {
		return new FormGroup<VehicleFormProperties>({
			artEndDate: new FormControl<Date | null | undefined>(undefined),
			co2Emissions: new FormControl<number | null | undefined>(undefined),
			colour: new FormControl<string | null | undefined>(undefined),
			dateOfLastV5CIssued: new FormControl<Date | null | undefined>(undefined),
			engineCapacity: new FormControl<number | null | undefined>(undefined),
			euroStatus: new FormControl<string | null | undefined>(undefined),
			fuelType: new FormControl<string | null | undefined>(undefined),
			make: new FormControl<string | null | undefined>(undefined),
			markedForExport: new FormControl<boolean | null | undefined>(undefined),
			monthOfFirstDvlaRegistration: new FormControl<Date | null | undefined>(undefined),
			monthOfFirstRegistration: new FormControl<Date | null | undefined>(undefined),
			motExpiryDate: new FormControl<Date | null | undefined>(undefined),
			motStatus: new FormControl<VehicleMotStatus | null | undefined>(undefined),
			realDrivingEmissions: new FormControl<string | null | undefined>(undefined),
			registrationNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			revenueWeight: new FormControl<number | null | undefined>(undefined),
			taxDueDate: new FormControl<Date | null | undefined>(undefined),
			taxStatus: new FormControl<VehicleTaxStatus | null | undefined>(undefined),
			typeApproval: new FormControl<string | null | undefined>(undefined),
			wheelplan: new FormControl<string | null | undefined>(undefined),
			yearOfManufacture: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum VehicleMotStatus { 'No details held by DVLA' = 'No details held by DVLA', 'No results returned' = 'No results returned', 'Not valid' = 'Not valid', Valid = 'Valid' }

	export enum VehicleTaxStatus { 'Not Taxed for on Road Use' = 'Not Taxed for on Road Use', SORN = 'SORN', Taxed = 'Taxed', Untaxed = 'Untaxed' }

	export interface VehicleRequest {
		registrationNumber?: string | null;
	}
	export interface VehicleRequestFormProperties {
		registrationNumber: FormControl<string | null | undefined>,
	}
	export function CreateVehicleRequestFormGroup() {
		return new FormGroup<VehicleRequestFormProperties>({
			registrationNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get vehicle details by registration number
		 * Returns vehicle details based on registration number
		 * Post v1/vehicles
		 * @param {VehicleRequest} requestBody Registration number of the vehicle to find details for
		 * @return {Vehicle} Successful response
		 */
		GetVehicleDetailsByRegistrationNumber(requestBody: VehicleRequest): Observable<Vehicle> {
			return this.http.post<Vehicle>(this.baseUri + 'v1/vehicles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

