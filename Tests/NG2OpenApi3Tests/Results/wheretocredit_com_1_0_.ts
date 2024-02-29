import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CalculateItineraryProgramResult {

		/** Two-letter IATA carrier codes that are associated with the frequent flyer program. */
		airlines?: Array<string>;

		/** Unique identifier for the frequent flyer program. See <code>Programs</code> API. */
		id?: string | null;

		/** Frequent flyer program name. See <code>Programs</code> API. */
		name?: string | null;

		/** Indicates that the itinerary includes revenue-based miles earnings. */
		revenueBased?: boolean | null;

		/** Indicates that the itinerary may be missing miles due to unpublished earning rates from the program. */
		unpublished?: boolean | null;

		/**
		 * Total redeemable miles or points earned for the frequent flyer program.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface CalculateItineraryProgramResultFormProperties {

		/** Unique identifier for the frequent flyer program. See <code>Programs</code> API. */
		id: FormControl<string | null | undefined>,

		/** Frequent flyer program name. See <code>Programs</code> API. */
		name: FormControl<string | null | undefined>,

		/** Indicates that the itinerary includes revenue-based miles earnings. */
		revenueBased: FormControl<boolean | null | undefined>,

		/** Indicates that the itinerary may be missing miles due to unpublished earning rates from the program. */
		unpublished: FormControl<boolean | null | undefined>,

		/**
		 * Total redeemable miles or points earned for the frequent flyer program.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateCalculateItineraryProgramResultFormGroup() {
		return new FormGroup<CalculateItineraryProgramResultFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			revenueBased: new FormControl<boolean | null | undefined>(undefined),
			unpublished: new FormControl<boolean | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CalculateItineraryResult {

		/** Unique identifier provided for this itinerary. */
		id?: string | null;

		/** Total miles earned for each frequent flyer program. */
		totals?: Array<CalculateItineraryProgramResult>;
	}
	export interface CalculateItineraryResultFormProperties {

		/** Unique identifier provided for this itinerary. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateCalculateItineraryResultFormGroup() {
		return new FormGroup<CalculateItineraryResultFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CalculateResult {

		/** Error message if the API call was not successful. */
		errorMessage?: string | null;

		/** Indicates whether the API call was successful. */
		success?: boolean | null;
		value?: CalculateItineraryResult;
	}
	export interface CalculateResultFormProperties {

		/** Error message if the API call was not successful. */
		errorMessage: FormControl<string | null | undefined>,

		/** Indicates whether the API call was successful. */
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateCalculateResultFormGroup() {
		return new FormGroup<CalculateResultFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Itinerary {

		/**
		 * Amount in USD that will be used to calculate revenue program mileage earning.  This amount should generally include carrier imposed surcharges but exclude other taxes. Default is 0.
		 * Type: double
		 */
		baseFareUSD?: number | null;

		/** Unique identifier for this itinerary that will be passed back to help correlate a result. */
		id?: string | null;

		/**
		 * Every flight transfer or stopover should be considered a separate segment.
		 * Required
		 */
		segments: Array<Segment>;

		/** Two-letter IATA carrier code for the ticketing or plating airline.  This is used for revenue programs (i.e. UA, DL, B6).  Leaving this value blank will exclude revenue programs. */
		ticketingCarrier?: string | null;
	}
	export interface ItineraryFormProperties {

		/**
		 * Amount in USD that will be used to calculate revenue program mileage earning.  This amount should generally include carrier imposed surcharges but exclude other taxes. Default is 0.
		 * Type: double
		 */
		baseFareUSD: FormControl<number | null | undefined>,

		/** Unique identifier for this itinerary that will be passed back to help correlate a result. */
		id: FormControl<string | null | undefined>,

		/** Two-letter IATA carrier code for the ticketing or plating airline.  This is used for revenue programs (i.e. UA, DL, B6).  Leaving this value blank will exclude revenue programs. */
		ticketingCarrier: FormControl<string | null | undefined>,
	}
	export function CreateItineraryFormGroup() {
		return new FormGroup<ItineraryFormProperties>({
			baseFareUSD: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			ticketingCarrier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Segment {

		/**
		 * Single-letter booking class used to determine the earning rate for the flight segment.
		 * Required
		 */
		bookingClass: string;

		/**
		 * Two-letter IATA carrier code for the marketing airline.  This is used to determine which earnings chart will be applied for this segment.
		 * NOTE: Frequent flyer programs based on operating carrier, including but not limited to Star Alliance carriers, cannot be reliably mapped to a booking class and will not be accurately reflected in this API.
		 * Required
		 */
		carrier: string;

		/** The date on the flight will depart from the origin to go to the destination.  This is used to determine which earnings chart will be in effect at time of departure. */
		departure?: Date | null;

		/**
		 * Three-letter IATA airport code to which the flight is going.
		 * Required
		 */
		destination: string;

		/**
		 * The number of miles for this flight segment.  Otherwise, distance is calculated using the great-circle distance between the origin and destination and may not match other data sources exactly.
		 * Type: double
		 */
		distance?: number | null;

		/**
		 * The airline identifier for the flight segment, most commonly (but not always) a number and is used for earning charts that are restricted to specific flight numbers.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		flightNumber?: number | null;

		/** Two-letter IATA carrier code for the operating airline.  This value is only used when earning is based on marketing carrier but restricted to a specific operating carrier.  Leaving this value blank will assume the flight is operated by the marketing carrier. */
		operatingCarrier?: string | null;

		/**
		 * Three-letter IATA airport code from which the flight will depart.
		 * Required
		 */
		origin: string;
	}
	export interface SegmentFormProperties {

		/**
		 * Single-letter booking class used to determine the earning rate for the flight segment.
		 * Required
		 */
		bookingClass: FormControl<string | null | undefined>,

		/**
		 * Two-letter IATA carrier code for the marketing airline.  This is used to determine which earnings chart will be applied for this segment.
		 * NOTE: Frequent flyer programs based on operating carrier, including but not limited to Star Alliance carriers, cannot be reliably mapped to a booking class and will not be accurately reflected in this API.
		 * Required
		 */
		carrier: FormControl<string | null | undefined>,

		/** The date on the flight will depart from the origin to go to the destination.  This is used to determine which earnings chart will be in effect at time of departure. */
		departure: FormControl<Date | null | undefined>,

		/**
		 * Three-letter IATA airport code to which the flight is going.
		 * Required
		 */
		destination: FormControl<string | null | undefined>,

		/**
		 * The number of miles for this flight segment.  Otherwise, distance is calculated using the great-circle distance between the origin and destination and may not match other data sources exactly.
		 * Type: double
		 */
		distance: FormControl<number | null | undefined>,

		/**
		 * The airline identifier for the flight segment, most commonly (but not always) a number and is used for earning charts that are restricted to specific flight numbers.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		flightNumber: FormControl<number | null | undefined>,

		/** Two-letter IATA carrier code for the operating airline.  This value is only used when earning is based on marketing carrier but restricted to a specific operating carrier.  Leaving this value blank will assume the flight is operated by the marketing carrier. */
		operatingCarrier: FormControl<string | null | undefined>,

		/**
		 * Three-letter IATA airport code from which the flight will depart.
		 * Required
		 */
		origin: FormControl<string | null | undefined>,
	}
	export function CreateSegmentFormGroup() {
		return new FormGroup<SegmentFormProperties>({
			bookingClass: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			carrier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			departure: new FormControl<Date | null | undefined>(undefined),
			destination: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			distance: new FormControl<number | null | undefined>(undefined),
			flightNumber: new FormControl<number | null | undefined>(undefined),
			operatingCarrier: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Program {

		/** Two-letter IATA carrier codes that are associated with the frequent flyer program. */
		airlines?: Array<string>;

		/** Name of the unit of a mile or point. */
		denomination?: string | null;

		/** Full name of the frequent flyer program including the airline, if applicable. */
		fullName?: string | null;

		/** Unique identifier for the frequent flyer program. */
		id?: string | null;

		/** Name of the frequent flyer program. */
		programName?: string | null;

		/** Name of each tier level for the frequent flyer program. */
		tierNames?: Array<string>;
	}
	export interface ProgramFormProperties {

		/** Name of the unit of a mile or point. */
		denomination: FormControl<string | null | undefined>,

		/** Full name of the frequent flyer program including the airline, if applicable. */
		fullName: FormControl<string | null | undefined>,

		/** Unique identifier for the frequent flyer program. */
		id: FormControl<string | null | undefined>,

		/** Name of the frequent flyer program. */
		programName: FormControl<string | null | undefined>,
	}
	export function CreateProgramFormGroup() {
		return new FormGroup<ProgramFormProperties>({
			denomination: new FormControl<string | null | undefined>(undefined),
			fullName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			programName: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Calculates the number of miles earned for every frequent flyer program.
		 * Post api/1.0/calculate
		 * @param {Array<Itinerary>} requestBody Collection of <code>Itinerary</code> to allow multiple frequent flyer mile or point calculations at once.
		 * @return {Array<CalculateResult>} Success.  However individual <code>CalculateResults</code> in the response could have failed.
		 */
		CalculatePost(requestBody: Array<Itinerary>): Observable<Array<CalculateResult>> {
			return this.http.post<Array<CalculateResult>>(this.baseUri + 'api/1.0/calculate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all supported frequent flyer programs.
		 * Get api/1.0/programs
		 * @return {Array<Program>} Success
		 */
		ProgramsGet(): Observable<Array<Program>> {
			return this.http.get<Array<Program>>(this.baseUri + 'api/1.0/programs', {});
		}
	}

}

