import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Input definition for the ComputeFlightEmissions request. */
	export interface ComputeFlightEmissionsRequest {

		/** Required. Direct flights to return emission estimates for. */
		flights?: Array<Flight>;
	}

	/** Input definition for the ComputeFlightEmissions request. */
	export interface ComputeFlightEmissionsRequestFormProperties {
	}
	export function CreateComputeFlightEmissionsRequestFormGroup() {
		return new FormGroup<ComputeFlightEmissionsRequestFormProperties>({
		});

	}


	/** All details related to a single request item for a direct flight emission estimates. */
	export interface Flight {

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		departureDate?: Date;

		/** Required. IATA airport code for flight destination, e.g. "JFK". */
		destination?: string | null;

		/** Required. Flight number, e.g. 324. */
		flightNumber?: number | null;

		/** Required. IATA carrier code, e.g. "AA". */
		operatingCarrierCode?: string | null;

		/** Required. IATA airport code for flight origin, e.g. "LHR". */
		origin?: string | null;
	}

	/** All details related to a single request item for a direct flight emission estimates. */
	export interface FlightFormProperties {

		/** Required. IATA airport code for flight destination, e.g. "JFK". */
		destination: FormControl<string | null | undefined>,

		/** Required. Flight number, e.g. 324. */
		flightNumber: FormControl<number | null | undefined>,

		/** Required. IATA carrier code, e.g. "AA". */
		operatingCarrierCode: FormControl<string | null | undefined>,

		/** Required. IATA airport code for flight origin, e.g. "LHR". */
		origin: FormControl<string | null | undefined>,
	}
	export function CreateFlightFormGroup() {
		return new FormGroup<FlightFormProperties>({
			destination: new FormControl<string | null | undefined>(undefined),
			flightNumber: new FormControl<number | null | undefined>(undefined),
			operatingCarrierCode: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface Date {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day?: number | null;

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month?: number | null;

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year?: number | null;
	}

	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface DateFormProperties {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day: FormControl<number | null | undefined>,

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month: FormControl<number | null | undefined>,

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year: FormControl<number | null | undefined>,
	}
	export function CreateDateFormGroup() {
		return new FormGroup<DateFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Output definition for the ComputeFlightEmissions response. */
	export interface ComputeFlightEmissionsResponse {

		/** List of flight legs with emission estimates. */
		flightEmissions?: Array<FlightWithEmissions>;

		/** Travel Impact Model version. For more information about the model versioning see https://github.com/google/travel-impact-model/#versioning. */
		modelVersion?: ModelVersion;
	}

	/** Output definition for the ComputeFlightEmissions response. */
	export interface ComputeFlightEmissionsResponseFormProperties {
	}
	export function CreateComputeFlightEmissionsResponseFormGroup() {
		return new FormGroup<ComputeFlightEmissionsResponseFormProperties>({
		});

	}


	/** Direct flight with emission estimates. */
	export interface FlightWithEmissions {

		/** Grouped emissions per seating class results. */
		emissionsGramsPerPax?: EmissionsGramsPerPax;

		/** All details related to a single request item for a direct flight emission estimates. */
		flight?: Flight;
	}

	/** Direct flight with emission estimates. */
	export interface FlightWithEmissionsFormProperties {
	}
	export function CreateFlightWithEmissionsFormGroup() {
		return new FormGroup<FlightWithEmissionsFormProperties>({
		});

	}


	/** Grouped emissions per seating class results. */
	export interface EmissionsGramsPerPax {

		/** Emissions for one passenger in business class in grams. This field is always computed and populated, regardless of whether the aircraft has business class seats or not. */
		business?: number | null;

		/** Emissions for one passenger in economy class in grams. This field is always computed and populated, regardless of whether the aircraft has economy class seats or not. */
		economy?: number | null;

		/** Emissions for one passenger in first class in grams. This field is always computed and populated, regardless of whether the aircraft has first class seats or not. */
		first?: number | null;

		/** Emissions for one passenger in premium economy class in grams. This field is always computed and populated, regardless of whether the aircraft has premium economy class seats or not. */
		premiumEconomy?: number | null;
	}

	/** Grouped emissions per seating class results. */
	export interface EmissionsGramsPerPaxFormProperties {

		/** Emissions for one passenger in business class in grams. This field is always computed and populated, regardless of whether the aircraft has business class seats or not. */
		business: FormControl<number | null | undefined>,

		/** Emissions for one passenger in economy class in grams. This field is always computed and populated, regardless of whether the aircraft has economy class seats or not. */
		economy: FormControl<number | null | undefined>,

		/** Emissions for one passenger in first class in grams. This field is always computed and populated, regardless of whether the aircraft has first class seats or not. */
		first: FormControl<number | null | undefined>,

		/** Emissions for one passenger in premium economy class in grams. This field is always computed and populated, regardless of whether the aircraft has premium economy class seats or not. */
		premiumEconomy: FormControl<number | null | undefined>,
	}
	export function CreateEmissionsGramsPerPaxFormGroup() {
		return new FormGroup<EmissionsGramsPerPaxFormProperties>({
			business: new FormControl<number | null | undefined>(undefined),
			economy: new FormControl<number | null | undefined>(undefined),
			first: new FormControl<number | null | undefined>(undefined),
			premiumEconomy: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Travel Impact Model version. For more information about the model versioning see https://github.com/google/travel-impact-model/#versioning. */
	export interface ModelVersion {

		/** Dated versions: Model datasets are recreated with refreshed input data but no change to the algorithms regularly. */
		dated?: string | null;

		/** Major versions: Major changes to methodology (e.g. adding new data sources to the model that lead to major output changes). Such changes will be infrequent and announced well in advance. Might involve API version changes, which will respect guidelines in https://cloud.google.com/endpoints/docs/openapi/versioning-an-api#backwards-incompatible */
		major?: number | null;

		/** Minor versions: Changes to the model that, while being consistent across schema versions, change the model parameters or implementation. */
		minor?: number | null;

		/** Patch versions: Implementation changes meant to address bugs or inaccuracies in the model implementation. */
		patch?: number | null;
	}

	/** Travel Impact Model version. For more information about the model versioning see https://github.com/google/travel-impact-model/#versioning. */
	export interface ModelVersionFormProperties {

		/** Dated versions: Model datasets are recreated with refreshed input data but no change to the algorithms regularly. */
		dated: FormControl<string | null | undefined>,

		/** Major versions: Major changes to methodology (e.g. adding new data sources to the model that lead to major output changes). Such changes will be infrequent and announced well in advance. Might involve API version changes, which will respect guidelines in https://cloud.google.com/endpoints/docs/openapi/versioning-an-api#backwards-incompatible */
		major: FormControl<number | null | undefined>,

		/** Minor versions: Changes to the model that, while being consistent across schema versions, change the model parameters or implementation. */
		minor: FormControl<number | null | undefined>,

		/** Patch versions: Implementation changes meant to address bugs or inaccuracies in the model implementation. */
		patch: FormControl<number | null | undefined>,
	}
	export function CreateModelVersionFormGroup() {
		return new FormGroup<ModelVersionFormProperties>({
			dated: new FormControl<string | null | undefined>(undefined),
			major: new FormControl<number | null | undefined>(undefined),
			minor: new FormControl<number | null | undefined>(undefined),
			patch: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Stateless method to retrieve emission estimates. Details on how emission estimates are computed: https://github.com/google/travel-impact-model The response will contain all entries that match the input flight legs, in the same order. If there are no estimates available for a certain flight leg, the response will return the flight leg object with empty emission fields. The request will still be considered successful. Reasons for missing emission estimates include: - The flight is unknown to the server. - The input flight leg is missing one or more identifiers. - The flight date is in the past. - The aircraft type is not supported by the model. - Missing seat configuration. The request can contain up to 1000 flight legs. If the request has more than 1000 direct flights, if will fail with an INVALID_ARGUMENT error.
		 * Post v1/flights:computeFlightEmissions
		 * @return {ComputeFlightEmissionsResponse} Successful response
		 */
		Travelimpactmodel_flights_computeFlightEmissions(requestBody: ComputeFlightEmissionsRequest): Observable<ComputeFlightEmissionsResponse> {
			return this.http.post<ComputeFlightEmissionsResponse>(this.baseUri + 'v1/flights:computeFlightEmissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

