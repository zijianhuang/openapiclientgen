import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CalculateItineraryProgramResult {

		/** Two-letter IATA carrier codes that are associated with the frequent flyer program. */
		airlines?: Array<string>;

		/** Unique identifier for the frequent flyer program. See <code>Programs</code> API. */
		id?: string;

		/** Frequent flyer program name. See <code>Programs</code> API. */
		name?: string;

		/** Indicates that the itinerary includes revenue-based miles earnings. */
		revenueBased?: boolean;

		/** Indicates that the itinerary may be missing miles due to unpublished earning rates from the program. */
		unpublished?: boolean;

		/** Total redeemable miles or points earned for the frequent flyer program. */
		value?: number;
	}

	export interface CalculateItineraryResult {

		/** Unique identifier provided for this itinerary. */
		id?: string;

		/** Total miles earned for each frequent flyer program. */
		totals?: Array<CalculateItineraryProgramResult>;
	}

	export interface CalculateResult {

		/** Error message if the API call was not successful. */
		errorMessage?: string;

		/** Indicates whether the API call was successful. */
		success?: boolean;
		value?: CalculateItineraryResult;
	}

	export interface Itinerary {

		/** Amount in USD that will be used to calculate revenue program mileage earning.  This amount should generally include carrier imposed surcharges but exclude other taxes. Default is 0. */
		baseFareUSD?: number;

		/** Unique identifier for this itinerary that will be passed back to help correlate a result. */
		id?: string;

		/**
		 * Every flight transfer or stopover should be considered a separate segment.
		 * Required
		 */
		segments: Array<Segment>;

		/** Two-letter IATA carrier code for the ticketing or plating airline.  This is used for revenue programs (i.e. UA, DL, B6).  Leaving this value blank will exclude revenue programs. */
		ticketingCarrier?: string;
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
		departure?: Date;

		/**
		 * Three-letter IATA airport code to which the flight is going.
		 * Required
		 */
		destination: string;

		/** The number of miles for this flight segment.  Otherwise, distance is calculated using the great-circle distance between the origin and destination and may not match other data sources exactly. */
		distance?: number;

		/** The airline identifier for the flight segment, most commonly (but not always) a number and is used for earning charts that are restricted to specific flight numbers. */
		flightNumber?: number;

		/** Two-letter IATA carrier code for the operating airline.  This value is only used when earning is based on marketing carrier but restricted to a specific operating carrier.  Leaving this value blank will assume the flight is operated by the marketing carrier. */
		operatingCarrier?: string;

		/**
		 * Three-letter IATA airport code from which the flight will depart.
		 * Required
		 */
		origin: string;
	}

	export interface Program {

		/** Two-letter IATA carrier codes that are associated with the frequent flyer program. */
		airlines?: Array<string>;

		/** Name of the unit of a mile or point. */
		denomination?: string;

		/** Full name of the frequent flyer program including the airline, if applicable. */
		fullName?: string;

		/** Unique identifier for the frequent flyer program. */
		id?: string;

		/** Name of the frequent flyer program. */
		programName?: string;

		/** Name of each tier level for the frequent flyer program. */
		tierNames?: Array<string>;
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

