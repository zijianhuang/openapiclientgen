import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** additional service type */
	export enum AdditionalServiceType { CHECKED_BAGS = 'CHECKED_BAGS', MEALS = 'MEALS', SEATS = 'SEATS', OTHER_SERVICES = 'OTHER_SERVICES' }

	export interface AircraftEntry {
		key?: string | null;
	}
	export interface AircraftEntryFormProperties {
		key: FormControl<string | null | undefined>,
	}
	export function CreateAircraftEntryFormGroup() {
		return new FormGroup<AircraftEntryFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** information related to the aircraft */
	export interface AircraftEquipment {

		/**
		 * IATA aircraft code (http://www.flugzeuginfo.net/table_accodes_iata_en.php)
		 */
		code?: string | null;
	}

	/** information related to the aircraft */
	export interface AircraftEquipmentFormProperties {

		/**
		 * IATA aircraft code (http://www.flugzeuginfo.net/table_accodes_iata_en.php)
		 */
		code: FormControl<string | null | undefined>,
	}
	export function CreateAircraftEquipmentFormGroup() {
		return new FormGroup<AircraftEquipmentFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[a-zA-Z0-9]{3}')]),
		});

	}


	/** baggageAllowance */
	export interface BaggageAllowance {

		/**
		 * Total number of units
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity?: number | null;

		/**
		 * Weight of the baggage allowance
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight?: number | null;

		/** Code to qualify unit as pounds or kilos */
		weightUnit?: string | null;
	}

	/** baggageAllowance */
	export interface BaggageAllowanceFormProperties {

		/**
		 * Total number of units
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/**
		 * Weight of the baggage allowance
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: FormControl<number | null | undefined>,

		/** Code to qualify unit as pounds or kilos */
		weightUnit: FormControl<string | null | undefined>,
	}
	export function CreateBaggageAllowanceFormGroup() {
		return new FormGroup<BaggageAllowanceFormProperties>({
			quantity: new FormControl<number | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
			weightUnit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CarrierEntry {
		key?: string | null;
	}
	export interface CarrierEntryFormProperties {
		key: FormControl<string | null | undefined>,
	}
	export function CreateCarrierEntryFormGroup() {
		return new FormGroup<CarrierEntryFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Co2Emission {

		/** quality of service offered in the cabin where the seat is located in this flight. Economy, premium economy, business or first class */
		cabin?: Co2EmissionCabin | null;

		/**
		 * Weight of Co2 emitted for the concerned segment
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight?: number | null;

		/** Code to qualify unit as pounds or kilos */
		weightUnit?: string | null;
	}
	export interface Co2EmissionFormProperties {

		/** quality of service offered in the cabin where the seat is located in this flight. Economy, premium economy, business or first class */
		cabin: FormControl<Co2EmissionCabin | null | undefined>,

		/**
		 * Weight of Co2 emitted for the concerned segment
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: FormControl<number | null | undefined>,

		/** Code to qualify unit as pounds or kilos */
		weightUnit: FormControl<string | null | undefined>,
	}
	export function CreateCo2EmissionFormGroup() {
		return new FormGroup<Co2EmissionFormProperties>({
			cabin: new FormControl<Co2EmissionCabin | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
			weightUnit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Co2EmissionCabin { ECONOMY = 'ECONOMY', PREMIUM_ECONOMY = 'PREMIUM_ECONOMY', BUSINESS = 'BUSINESS', FIRST = 'FIRST' }

	export interface Collection_Meta {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
		Collection_MetaOneWayCombinations?: Array<Collection_MetaOneWayCombinations>;
	}
	export interface Collection_MetaFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
	}
	export function CreateCollection_MetaFormGroup() {
		return new FormGroup<Collection_MetaFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Collection_MetaOneWayCombinations {
		flightOfferIds?: Array<string>;
		originDestinationId?: string | null;
	}
	export interface Collection_MetaOneWayCombinationsFormProperties {
		originDestinationId: FormControl<string | null | undefined>,
	}
	export function CreateCollection_MetaOneWayCombinationsFormGroup() {
		return new FormGroup<Collection_MetaOneWayCombinationsFormProperties>({
			originDestinationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Collection_Meta_Link {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
		links?: any;
	}
	export interface Collection_Meta_LinkFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
		links: FormControl<any | null | undefined>,
	}
	export function CreateCollection_Meta_LinkFormGroup() {
		return new FormGroup<Collection_Meta_LinkFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			links: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** part of the trip covered by the travel class restriction (ALL_SEGMENTS if ommited) */
	export enum Coverage { MOST_SEGMENTS = 'MOST_SEGMENTS', AT_LEAST_ONE_SEGMENT = 'AT_LEAST_ONE_SEGMENT', ALL_SEGMENTS = 'ALL_SEGMENTS' }

	export interface CurrencyEntry {

		/** Required */
		key: string;
	}
	export interface CurrencyEntryFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,
	}
	export function CreateCurrencyEntryFormGroup() {
		return new FormGroup<CurrencyEntryFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DateTimeRange {

		/**
		 * Dates are specified in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-DD format, e.g. 2018-12-25
		 * Required
		 * Type: DateOnly
		 */
		date: Date;

		/**
		 * Either 1, 2 or 3 extra days around the local date (IxD for +/- x days - Ex: I3D), Either 1 to 3 days after the local date (PxD for +x days - Ex: P3D), or 1 to 3 days before the local date (MxD for -x days - Ex: M3D)
		 * Can not be combined with "originRadius" or "destinationRadius".
		 */
		dateWindow?: string | null;

		/** Local time. hh:mm:ss format, e.g 10:30:00 */
		time?: string | null;

		/**
		 * 1 to 12 hours around (both +and -) the local time. Possibly limited by the number of extra days when specified, i.e.  in some situations, it may not be used to exceed the maximum date range. [1-12]H format, e.g. 6H
		 * Can not be combined with "originRadius" or "destinationRadius".
		 */
		timeWindow?: string | null;
	}
	export interface DateTimeRangeFormProperties {

		/**
		 * Dates are specified in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-DD format, e.g. 2018-12-25
		 * Required
		 * Type: DateOnly
		 */
		date: FormControl<Date | null | undefined>,

		/**
		 * Either 1, 2 or 3 extra days around the local date (IxD for +/- x days - Ex: I3D), Either 1 to 3 days after the local date (PxD for +x days - Ex: P3D), or 1 to 3 days before the local date (MxD for -x days - Ex: M3D)
		 * Can not be combined with "originRadius" or "destinationRadius".
		 */
		dateWindow: FormControl<string | null | undefined>,

		/** Local time. hh:mm:ss format, e.g 10:30:00 */
		time: FormControl<string | null | undefined>,

		/**
		 * 1 to 12 hours around (both +and -) the local time. Possibly limited by the number of extra days when specified, i.e.  in some situations, it may not be used to exceed the maximum date range. [1-12]H format, e.g. 6H
		 * Can not be combined with "originRadius" or "destinationRadius".
		 */
		timeWindow: FormControl<string | null | undefined>,
	}
	export function CreateDateTimeRangeFormGroup() {
		return new FormGroup<DateTimeRangeFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			dateWindow: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[MPI][1-3]D')]),
			time: new FormControl<string | null | undefined>(undefined),
			timeWindow: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^([1-9]|10|11|12)H')]),
		});

	}

	export interface Dictionaries {
		aircraft?: AircraftEntry;
		carriers?: CarrierEntry;
		currencies?: CurrencyEntry;
		locations?: LocationEntry;
	}
	export interface DictionariesFormProperties {
	}
	export function CreateDictionariesFormGroup() {
		return new FormGroup<DictionariesFormProperties>({
		});

	}

	export interface Error_400 {

		/** Required */
		errors: Array<Issue>;
	}
	export interface Error_400FormProperties {
	}
	export function CreateError_400FormGroup() {
		return new FormGroup<Error_400FormProperties>({
		});

	}

	export interface Issue {

		/**
		 * an application-specific error code
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		code?: string | null;

		/** explanation of the error */
		detail?: string | null;

		/** an object containing references to the source of the error */
		source?: IssueSource;

		/**
		 * the HTTP status code applicable to this error
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status?: number | null;

		/** a short summary of the error */
		title?: string | null;
	}
	export interface IssueFormProperties {

		/**
		 * an application-specific error code
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		code: FormControl<string | null | undefined>,

		/** explanation of the error */
		detail: FormControl<string | null | undefined>,

		/**
		 * the HTTP status code applicable to this error
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,

		/** a short summary of the error */
		title: FormControl<string | null | undefined>,
	}
	export function CreateIssueFormGroup() {
		return new FormGroup<IssueFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			detail: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IssueSource {

		/** a string indicating an example of the right value */
		example?: string | null;

		/** a string indicating which URI query parameter caused the issue */
		parameter?: string | null;

		/** a JSON Pointer [RFC6901] to the associated entity in the request document */
		pointer?: string | null;
	}
	export interface IssueSourceFormProperties {

		/** a string indicating an example of the right value */
		example: FormControl<string | null | undefined>,

		/** a string indicating which URI query parameter caused the issue */
		parameter: FormControl<string | null | undefined>,

		/** a JSON Pointer [RFC6901] to the associated entity in the request document */
		pointer: FormControl<string | null | undefined>,
	}
	export function CreateIssueSourceFormGroup() {
		return new FormGroup<IssueSourceFormProperties>({
			example: new FormControl<string | null | undefined>(undefined),
			parameter: new FormControl<string | null | undefined>(undefined),
			pointer: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Error_500 {

		/** Required */
		errors: Array<Issue>;
	}
	export interface Error_500FormProperties {
	}
	export function CreateError_500FormGroup() {
		return new FormGroup<Error_500FormProperties>({
		});

	}


	/** fare filter options */
	export interface ExtendedPricingOptions {

		/** If true, returns the flight-offers with included checked bags only */
		includedCheckedBagsOnly?: boolean | null;
	}

	/** fare filter options */
	export interface ExtendedPricingOptionsFormProperties {

		/** If true, returns the flight-offers with included checked bags only */
		includedCheckedBagsOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateExtendedPricingOptionsFormGroup() {
		return new FormGroup<ExtendedPricingOptionsFormProperties>({
			includedCheckedBagsOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** price information */
	export interface Extended_Price {
	}

	/** price information */
	export interface Extended_PriceFormProperties {
	}
	export function CreateExtended_PriceFormGroup() {
		return new FormGroup<Extended_PriceFormProperties>({
		});

	}


	/** a fee */
	export interface Fee {
		amount?: string | null;

		/** type of fee */
		type?: FeeType | null;
	}

	/** a fee */
	export interface FeeFormProperties {
		amount: FormControl<string | null | undefined>,

		/** type of fee */
		type: FormControl<FeeType | null | undefined>,
	}
	export function CreateFeeFormGroup() {
		return new FormGroup<FeeFormProperties>({
			amount: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<FeeType | null | undefined>(undefined),
		});

	}

	export enum FeeType { TICKETING = 'TICKETING', FORM_OF_PAYMENT = 'FORM_OF_PAYMENT', SUPPLIER = 'SUPPLIER' }


	/** departure or arrival information */
	export interface FlightEndPoint extends OriginalFlightEndPoint {

		/** local date and time in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-ddThh:mm:ss format, e.g. 2017-02-10T20:40:00 */
		at?: Date | null;
	}

	/** departure or arrival information */
	export interface FlightEndPointFormProperties extends OriginalFlightEndPointFormProperties {

		/** local date and time in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-ddThh:mm:ss format, e.g. 2017-02-10T20:40:00 */
		at: FormControl<Date | null | undefined>,
	}
	export function CreateFlightEndPointFormGroup() {
		return new FormGroup<FlightEndPointFormProperties>({
			iataCode: new FormControl<string | null | undefined>(undefined),
			terminal: new FormControl<string | null | undefined>(undefined),
			at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface FlightOffer {

		/** BOOK step ONLY - If true, allows to book a PNR without pricing. Only for the source "GDS" */
		disablePricing?: boolean | null;

		/**
		 * Id of the flight offer
		 * Required
		 */
		id: string;

		/** If true, inform that a ticketing will be required at booking step. */
		instantTicketingRequired?: boolean | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 250
		 */
		FlightOfferItineraries?: Array<FlightOfferItineraries>;

		/** If booked on the same day as the search (with respect to timezone), this flight offer is guaranteed to be thereafter valid for ticketing until this date (included). Unspecified when it does not make sense for this flight offer (e.g. no control over ticketing once booked). YYYY-MM-DD format, e.g. 2019-06-07 */
		lastTicketingDate?: string | null;

		/** If true, upon completion of the booking, this pricing solution is expected to yield multiple records (a record contains booking information confirmed and stored, typically a Passenger Name Record (PNR), in the provider GDS or system) */
		nonHomogeneous?: boolean | null;

		/**
		 * Number of seats bookable in a single request. Can not be higher than 9.
		 * Minimum: 1
		 * Maximum: 9
		 */
		numberOfBookableSeats?: number | null;

		/** If true, the flight offer fulfills only one originDestination and has to be combined with other oneWays to complete the whole journey. */
		oneWay?: boolean | null;

		/** If true, a payment card is mandatory to book this flight offer */
		paymentCardRequired?: boolean | null;

		/** price information */
		price?: Extended_Price;
		pricingOptions?: FlightOfferPricingOptions;

		/** source of the flight offer */
		source?: FlightOfferSource | null;

		/**
		 * Fare information for each traveler/segment
		 * Minimum items: 1
		 * Maximum items: 18
		 */
		FlightOfferTravelerPricings?: Array<FlightOfferTravelerPricings>;

		/**
		 * the resource name
		 * Required
		 */
		type: string;

		/**
		 * This option ensures that the system will only consider these airlines.
		 * Minimum items: 1
		 * Maximum items: 9
		 */
		validatingAirlineCodes?: Array<string>;
	}
	export interface FlightOfferFormProperties {

		/** BOOK step ONLY - If true, allows to book a PNR without pricing. Only for the source "GDS" */
		disablePricing: FormControl<boolean | null | undefined>,

		/**
		 * Id of the flight offer
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** If true, inform that a ticketing will be required at booking step. */
		instantTicketingRequired: FormControl<boolean | null | undefined>,

		/** If booked on the same day as the search (with respect to timezone), this flight offer is guaranteed to be thereafter valid for ticketing until this date (included). Unspecified when it does not make sense for this flight offer (e.g. no control over ticketing once booked). YYYY-MM-DD format, e.g. 2019-06-07 */
		lastTicketingDate: FormControl<string | null | undefined>,

		/** If true, upon completion of the booking, this pricing solution is expected to yield multiple records (a record contains booking information confirmed and stored, typically a Passenger Name Record (PNR), in the provider GDS or system) */
		nonHomogeneous: FormControl<boolean | null | undefined>,

		/**
		 * Number of seats bookable in a single request. Can not be higher than 9.
		 * Minimum: 1
		 * Maximum: 9
		 */
		numberOfBookableSeats: FormControl<number | null | undefined>,

		/** If true, the flight offer fulfills only one originDestination and has to be combined with other oneWays to complete the whole journey. */
		oneWay: FormControl<boolean | null | undefined>,

		/** If true, a payment card is mandatory to book this flight offer */
		paymentCardRequired: FormControl<boolean | null | undefined>,

		/** source of the flight offer */
		source: FormControl<FlightOfferSource | null | undefined>,

		/**
		 * the resource name
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateFlightOfferFormGroup() {
		return new FormGroup<FlightOfferFormProperties>({
			disablePricing: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			instantTicketingRequired: new FormControl<boolean | null | undefined>(undefined),
			lastTicketingDate: new FormControl<string | null | undefined>(undefined),
			nonHomogeneous: new FormControl<boolean | null | undefined>(undefined),
			numberOfBookableSeats: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(9)]),
			oneWay: new FormControl<boolean | null | undefined>(undefined),
			paymentCardRequired: new FormControl<boolean | null | undefined>(undefined),
			source: new FormControl<FlightOfferSource | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FlightOfferItineraries {

		/** duration in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) PnYnMnDTnHnMnS format, e.g. PT2H10M for a duration of 2h10m */
		duration?: string | null;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 9
		 */
		segments: Array<Segment>;
	}
	export interface FlightOfferItinerariesFormProperties {

		/** duration in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) PnYnMnDTnHnMnS format, e.g. PT2H10M for a duration of 2h10m */
		duration: FormControl<string | null | undefined>,
	}
	export function CreateFlightOfferItinerariesFormGroup() {
		return new FormGroup<FlightOfferItinerariesFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Segment {
	}
	export interface SegmentFormProperties {
	}
	export function CreateSegmentFormGroup() {
		return new FormGroup<SegmentFormProperties>({
		});

	}

	export interface FlightOfferPricingOptions {

		/** type of fare of the flight-offer */
		fareType?: Array<string>;

		/** If true, returns the flight-offers with included checked bags only */
		includedCheckedBagsOnly?: boolean | null;

		/** If true, returns the flight-offers with no penalty fares only */
		noPenaltyFare?: boolean | null;

		/** If true, returns the flight-offers with no restriction fares only */
		noRestrictionFare?: boolean | null;

		/** If true, returns the flight-offers with refundable fares only */
		refundableFare?: boolean | null;
	}
	export interface FlightOfferPricingOptionsFormProperties {

		/** If true, returns the flight-offers with included checked bags only */
		includedCheckedBagsOnly: FormControl<boolean | null | undefined>,

		/** If true, returns the flight-offers with no penalty fares only */
		noPenaltyFare: FormControl<boolean | null | undefined>,

		/** If true, returns the flight-offers with no restriction fares only */
		noRestrictionFare: FormControl<boolean | null | undefined>,

		/** If true, returns the flight-offers with refundable fares only */
		refundableFare: FormControl<boolean | null | undefined>,
	}
	export function CreateFlightOfferPricingOptionsFormGroup() {
		return new FormGroup<FlightOfferPricingOptionsFormProperties>({
			includedCheckedBagsOnly: new FormControl<boolean | null | undefined>(undefined),
			noPenaltyFare: new FormControl<boolean | null | undefined>(undefined),
			noRestrictionFare: new FormControl<boolean | null | undefined>(undefined),
			refundableFare: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum FlightOfferSource { GDS = 'GDS' }

	export interface FlightOfferTravelerPricings {

		/** if type="HELD_INFANT", corresponds to the adult traveler's id who will share the seat */
		associatedAdultId?: string | null;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 18
		 */
		FlightOfferTravelerPricingsFareDetailsBySegment: Array<FlightOfferTravelerPricingsFareDetailsBySegment>;

		/**
		 * option specifying a group of fares, which may be valid under certain conditons
		 * Can be used to specify special fare discount for a passenger
		 * Required
		 */
		fareOption: FlightOfferTravelerPricingsFareOption;
		price?: Price;

		/**
		 * Id of the traveler
		 * Required
		 */
		travelerId: string;

		/**
		 * traveler type
		 * age restrictions : CHILD < 12y, HELD_INFANT < 2y, SEATED_INFANT < 2y, SENIOR >=60y
		 * Required
		 */
		travelerType: FlightOfferTravelerPricingsTravelerType;
	}
	export interface FlightOfferTravelerPricingsFormProperties {

		/** if type="HELD_INFANT", corresponds to the adult traveler's id who will share the seat */
		associatedAdultId: FormControl<string | null | undefined>,

		/**
		 * option specifying a group of fares, which may be valid under certain conditons
		 * Can be used to specify special fare discount for a passenger
		 * Required
		 */
		fareOption: FormControl<FlightOfferTravelerPricingsFareOption | null | undefined>,

		/**
		 * Id of the traveler
		 * Required
		 */
		travelerId: FormControl<string | null | undefined>,

		/**
		 * traveler type
		 * age restrictions : CHILD < 12y, HELD_INFANT < 2y, SEATED_INFANT < 2y, SENIOR >=60y
		 * Required
		 */
		travelerType: FormControl<FlightOfferTravelerPricingsTravelerType | null | undefined>,
	}
	export function CreateFlightOfferTravelerPricingsFormGroup() {
		return new FormGroup<FlightOfferTravelerPricingsFormProperties>({
			associatedAdultId: new FormControl<string | null | undefined>(undefined),
			fareOption: new FormControl<FlightOfferTravelerPricingsFareOption | null | undefined>(undefined, [Validators.required]),
			travelerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			travelerType: new FormControl<FlightOfferTravelerPricingsTravelerType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FlightOfferTravelerPricingsFareDetailsBySegment {
		additionalServices?: FlightOfferTravelerPricingsFareDetailsBySegmentAdditionalServices;
		allotmentDetails?: FlightOfferTravelerPricingsFareDetailsBySegmentAllotmentDetails;

		/** The name of the Fare Family corresponding to the fares. Only for the GDS provider and if the airline has fare families filled */
		brandedFare?: string | null;

		/** quality of service offered in the cabin where the seat is located in this flight. Economy, premium economy, business or first class */
		cabin?: Co2EmissionCabin | null;

		/** The code of the booking class, a.k.a. class of service or Reservations/Booking Designator (RBD) */
		class?: string | null;

		/** Fare basis specifying the rules of a fare. Usually, though not always, is composed of the booking class code followed by a set of letters and digits representing other characteristics of the ticket, such as refundability, minimum stay requirements, discounts or special promotional elements. */
		fareBasis?: string | null;

		/** baggageAllowance */
		includedCheckedBags?: BaggageAllowance;

		/** True if the corresponding booking class is in an allotment */
		isAllotment?: boolean | null;

		/**
		 * Id of the segment
		 * Required
		 */
		segmentId: string;

		/** slice and Dice indicator, such as Local Availability, Sub OnD(Origin and Destination) 1 Availability and Sub OnD 2 Availability */
		sliceDiceIndicator?: FlightOfferTravelerPricingsFareDetailsBySegmentSliceDiceIndicator | null;
	}
	export interface FlightOfferTravelerPricingsFareDetailsBySegmentFormProperties {

		/** The name of the Fare Family corresponding to the fares. Only for the GDS provider and if the airline has fare families filled */
		brandedFare: FormControl<string | null | undefined>,

		/** quality of service offered in the cabin where the seat is located in this flight. Economy, premium economy, business or first class */
		cabin: FormControl<Co2EmissionCabin | null | undefined>,

		/** The code of the booking class, a.k.a. class of service or Reservations/Booking Designator (RBD) */
		class: FormControl<string | null | undefined>,

		/** Fare basis specifying the rules of a fare. Usually, though not always, is composed of the booking class code followed by a set of letters and digits representing other characteristics of the ticket, such as refundability, minimum stay requirements, discounts or special promotional elements. */
		fareBasis: FormControl<string | null | undefined>,

		/** True if the corresponding booking class is in an allotment */
		isAllotment: FormControl<boolean | null | undefined>,

		/**
		 * Id of the segment
		 * Required
		 */
		segmentId: FormControl<string | null | undefined>,

		/** slice and Dice indicator, such as Local Availability, Sub OnD(Origin and Destination) 1 Availability and Sub OnD 2 Availability */
		sliceDiceIndicator: FormControl<FlightOfferTravelerPricingsFareDetailsBySegmentSliceDiceIndicator | null | undefined>,
	}
	export function CreateFlightOfferTravelerPricingsFareDetailsBySegmentFormGroup() {
		return new FormGroup<FlightOfferTravelerPricingsFareDetailsBySegmentFormProperties>({
			brandedFare: new FormControl<string | null | undefined>(undefined),
			cabin: new FormControl<Co2EmissionCabin | null | undefined>(undefined),
			class: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[A-Z]{1}')]),
			fareBasis: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[[A-Z0-9]{1,18}')]),
			isAllotment: new FormControl<boolean | null | undefined>(undefined),
			segmentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sliceDiceIndicator: new FormControl<FlightOfferTravelerPricingsFareDetailsBySegmentSliceDiceIndicator | null | undefined>(undefined),
		});

	}

	export interface FlightOfferTravelerPricingsFareDetailsBySegmentAdditionalServices {

		/** baggageAllowance */
		chargeableCheckedBags?: BaggageAllowance;

		/** seat number */
		chargeableSeatNumber?: string | null;

		/** Other services to add */
		otherServices?: Array<ServiceName>;
	}
	export interface FlightOfferTravelerPricingsFareDetailsBySegmentAdditionalServicesFormProperties {

		/** seat number */
		chargeableSeatNumber: FormControl<string | null | undefined>,
	}
	export function CreateFlightOfferTravelerPricingsFareDetailsBySegmentAdditionalServicesFormGroup() {
		return new FormGroup<FlightOfferTravelerPricingsFareDetailsBySegmentAdditionalServicesFormProperties>({
			chargeableSeatNumber: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[1-9][0-9]{0,2}[A-Z]?')]),
		});

	}


	/** type of service */
	export enum ServiceName { PRIORITY_BOARDING = 'PRIORITY_BOARDING', AIRPORT_CHECKIN = 'AIRPORT_CHECKIN' }

	export interface FlightOfferTravelerPricingsFareDetailsBySegmentAllotmentDetails {
		tourName?: string | null;
		tourReference?: string | null;
	}
	export interface FlightOfferTravelerPricingsFareDetailsBySegmentAllotmentDetailsFormProperties {
		tourName: FormControl<string | null | undefined>,
		tourReference: FormControl<string | null | undefined>,
	}
	export function CreateFlightOfferTravelerPricingsFareDetailsBySegmentAllotmentDetailsFormGroup() {
		return new FormGroup<FlightOfferTravelerPricingsFareDetailsBySegmentAllotmentDetailsFormProperties>({
			tourName: new FormControl<string | null | undefined>(undefined),
			tourReference: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FlightOfferTravelerPricingsFareDetailsBySegmentSliceDiceIndicator { LOCAL_AVAILABILITY = 'LOCAL_AVAILABILITY', SUB_OD_AVAILABILITY_1 = 'SUB_OD_AVAILABILITY_1', SUB_OD_AVAILABILITY_2 = 'SUB_OD_AVAILABILITY_2' }

	export enum FlightOfferTravelerPricingsFareOption { STANDARD = 'STANDARD', INCLUSIVE_TOUR = 'INCLUSIVE_TOUR', SPANISH_MELILLA_RESIDENT = 'SPANISH_MELILLA_RESIDENT', SPANISH_CEUTA_RESIDENT = 'SPANISH_CEUTA_RESIDENT', SPANISH_CANARY_RESIDENT = 'SPANISH_CANARY_RESIDENT', SPANISH_BALEARIC_RESIDENT = 'SPANISH_BALEARIC_RESIDENT', AIR_FRANCE_METROPOLITAN_DISCOUNT_PASS = 'AIR_FRANCE_METROPOLITAN_DISCOUNT_PASS', AIR_FRANCE_DOM_DISCOUNT_PASS = 'AIR_FRANCE_DOM_DISCOUNT_PASS', AIR_FRANCE_COMBINED_DISCOUNT_PASS = 'AIR_FRANCE_COMBINED_DISCOUNT_PASS', AIR_FRANCE_FAMILY = 'AIR_FRANCE_FAMILY', ADULT_WITH_COMPANION = 'ADULT_WITH_COMPANION', COMPANION = 'COMPANION' }

	export enum FlightOfferTravelerPricingsTravelerType { ADULT = 'ADULT', CHILD = 'CHILD', SENIOR = 'SENIOR', YOUNG = 'YOUNG', HELD_INFANT = 'HELD_INFANT', SEATED_INFANT = 'SEATED_INFANT', STUDENT = 'STUDENT' }


	/** defining a flight segment; including both operating and marketing details when applicable */
	export interface FlightSegment {

		/** information related to the aircraft */
		aircraft?: AircraftEquipment;

		/** departure or arrival information */
		arrival?: FlightEndPoint;

		/**
		 * providing the airline / carrier code
		 * Min length: 1
		 * Max length: 2
		 */
		carrierCode?: string | null;

		/** departure or arrival information */
		departure?: FlightEndPoint;

		/** stop duration in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) PnYnMnDTnHnMnS format, e.g. PT2H10M */
		duration?: string | null;

		/**
		 * the flight number as assigned by the carrier
		 * Min length: 1
		 * Max length: 4
		 */
		number?: string | null;

		/** information about the operating flight */
		operating?: OperatingFlight;

		/** information regarding the different stops composing the flight segment. E.g. technical stop, change of gauge... */
		stops?: Array<FlightStop>;
	}

	/** defining a flight segment; including both operating and marketing details when applicable */
	export interface FlightSegmentFormProperties {

		/**
		 * providing the airline / carrier code
		 * Min length: 1
		 * Max length: 2
		 */
		carrierCode: FormControl<string | null | undefined>,

		/** stop duration in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) PnYnMnDTnHnMnS format, e.g. PT2H10M */
		duration: FormControl<string | null | undefined>,

		/**
		 * the flight number as assigned by the carrier
		 * Min length: 1
		 * Max length: 4
		 */
		number: FormControl<string | null | undefined>,
	}
	export function CreateFlightSegmentFormGroup() {
		return new FormGroup<FlightSegmentFormProperties>({
			carrierCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2)]),
			duration: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4)]),
		});

	}


	/** information about the operating flight */
	export interface OperatingFlight {

		/**
		 * providing the airline / carrier code
		 * Min length: 1
		 * Max length: 2
		 */
		carrierCode?: string | null;
	}

	/** information about the operating flight */
	export interface OperatingFlightFormProperties {

		/**
		 * providing the airline / carrier code
		 * Min length: 1
		 * Max length: 2
		 */
		carrierCode: FormControl<string | null | undefined>,
	}
	export function CreateOperatingFlightFormGroup() {
		return new FormGroup<OperatingFlightFormProperties>({
			carrierCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2)]),
		});

	}


	/** details of stops for direct or change of gauge flights */
	export interface FlightStop extends OriginalFlightStop {

		/** arrival at the stop in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-ddThh:mm:ss format, e.g. 2017-02-10T20:40:00 */
		arrivalAt?: Date | null;

		/** departure from the stop in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-ddThh:mm:ss format, e.g. 2017-02-10T20:40:00 */
		departureAt?: Date | null;
	}

	/** details of stops for direct or change of gauge flights */
	export interface FlightStopFormProperties extends OriginalFlightStopFormProperties {

		/** arrival at the stop in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-ddThh:mm:ss format, e.g. 2017-02-10T20:40:00 */
		arrivalAt: FormControl<Date | null | undefined>,

		/** departure from the stop in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-ddThh:mm:ss format, e.g. 2017-02-10T20:40:00 */
		departureAt: FormControl<Date | null | undefined>,
	}
	export function CreateFlightStopFormGroup() {
		return new FormGroup<FlightStopFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined),
			iataCode: new FormControl<string | null | undefined>(undefined),
			arrivalAt: new FormControl<Date | null | undefined>(undefined),
			departureAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetFlightOffersQuery {

		/** The currency code, as defined in [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217), to reflect the currency in which this amount is expressed. */
		currencyCode?: string | null;

		/**
		 * Origins and Destinations must be properly ordered in time (chronological order in accordance with the timezone of each location) to describe the journey consistently. Dates and times must not be past nor more than 365 days in the future, according to provider settings.Number of Origins and Destinations must not exceed the limit defined in provider settings.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 6
		 */
		originDestinations: Array<OriginDestination>;
		searchCriteria?: SearchCriteria;

		/**
		 * Allows enable one or more sources. If present in the list, these sources will be called by the system.
		 * Required
		 * Minimum items: 1
		 */
		sources: Array<FlightOfferSource>;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 18
		 */
		travelers: Array<Traveler>;
	}
	export interface GetFlightOffersQueryFormProperties {

		/** The currency code, as defined in [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217), to reflect the currency in which this amount is expressed. */
		currencyCode: FormControl<string | null | undefined>,
	}
	export function CreateGetFlightOffersQueryFormGroup() {
		return new FormGroup<GetFlightOffersQueryFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OriginDestination {

		/**
		 * Set of alternative destination location, such as a city or an airport. Currently, only the locations defined in [IATA](http://www.iata.org/publications/Pages/code-search.aspx) are supported.
		 * Minimum items: 1
		 * Maximum items: 2
		 */
		alternativeDestinationsCodes?: Array<string>;

		/**
		 * Set of alternative origin location, such as a city or an airport. Currently, only the locations defined in [IATA](http://www.iata.org/publications/Pages/code-search.aspx) are supported.
		 * Minimum items: 1
		 * Maximum items: 2
		 */
		alternativeOriginsCodes?: Array<string>;
		arrivalDateTimeRange?: DateTimeRange;
		departureDateTimeRange?: DateTimeRange;

		/** Destination location, such as a city or an airport. Currently, only the locations defined in [IATA](http://www.iata.org/publications/Pages/code-search.aspx) are supported. */
		destinationLocationCode?: string | null;

		/**
		 * Include other possible locations around the point, located less than this distance in kilometers away. Max:300
		 * Can not be combined with "dateWindow" or "timeWindow".
		 * Type: double
		 */
		destinationRadius?: number | null;

		/**
		 * List of excluded connections points. Any FlightOffer with these connections points will be present in response. Currently, only the locations defined in IATA are supported. Used only by the AMADEUS provider
		 * Minimum items: 1
		 * Maximum items: 3
		 */
		excludedConnectionPoints?: Array<string>;
		id?: string | null;

		/**
		 * List of included connections points. When an includedViaPoints option is specified, all FlightOffer returned must at least go via this Connecting Point. Currently, only the locations defined in IATA are supported. Used only by the AMADEUS provider
		 * Minimum items: 1
		 * Maximum items: 2
		 */
		includedConnectionPoints?: Array<string>;

		/** Origin location, such as a city or an airport. Currently, only the locations defined in [IATA](http://www.iata.org/publications/Pages/code-search.aspx) are supported. */
		originLocationCode?: string | null;

		/**
		 * Include other possible locations around the point, located less than this distance in kilometers away. Max:300
		 * Can not be combined with "dateWindow" or "timeWindow".
		 * Type: double
		 */
		originRadius?: number | null;
	}
	export interface OriginDestinationFormProperties {

		/** Destination location, such as a city or an airport. Currently, only the locations defined in [IATA](http://www.iata.org/publications/Pages/code-search.aspx) are supported. */
		destinationLocationCode: FormControl<string | null | undefined>,

		/**
		 * Include other possible locations around the point, located less than this distance in kilometers away. Max:300
		 * Can not be combined with "dateWindow" or "timeWindow".
		 * Type: double
		 */
		destinationRadius: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Origin location, such as a city or an airport. Currently, only the locations defined in [IATA](http://www.iata.org/publications/Pages/code-search.aspx) are supported. */
		originLocationCode: FormControl<string | null | undefined>,

		/**
		 * Include other possible locations around the point, located less than this distance in kilometers away. Max:300
		 * Can not be combined with "dateWindow" or "timeWindow".
		 * Type: double
		 */
		originRadius: FormControl<number | null | undefined>,
	}
	export function CreateOriginDestinationFormGroup() {
		return new FormGroup<OriginDestinationFormProperties>({
			destinationLocationCode: new FormControl<string | null | undefined>(undefined),
			destinationRadius: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			originLocationCode: new FormControl<string | null | undefined>(undefined),
			originRadius: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SearchCriteria {

		/** This option allows activate the one-way combinable feature */
		addOneWayOffers?: boolean | null;
		additionalInformation?: SearchCriteriaAdditionalInformation;

		/** This option allows to default to a standard fareOption if no offers are found for the selected fareOption. */
		allowAlternativeFareOptions?: boolean | null;

		/** This option allows to exclude the isAllotment flag associated to a booking class in the search response when it exist. */
		excludeAllotments?: boolean | null;
		flightFilters?: SearchCriteriaFlightFilters;

		/**
		 * Maximum number of flight offers returned (Max 250)
		 * Type: double
		 */
		maxFlightOffers?: number | null;

		/**
		 * maximum price per traveler. By default, no limit is applied. If specified, the value should be a positive number with no decimals
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxPrice?: number | null;

		/** Requests the system to find at least one flight-offer per day, if possible, when a range of dates is specified. Default is false. */
		oneFlightOfferPerDay?: boolean | null;

		/** fare filter options */
		pricingOptions?: ExtendedPricingOptions;
	}
	export interface SearchCriteriaFormProperties {

		/** This option allows activate the one-way combinable feature */
		addOneWayOffers: FormControl<boolean | null | undefined>,

		/** This option allows to default to a standard fareOption if no offers are found for the selected fareOption. */
		allowAlternativeFareOptions: FormControl<boolean | null | undefined>,

		/** This option allows to exclude the isAllotment flag associated to a booking class in the search response when it exist. */
		excludeAllotments: FormControl<boolean | null | undefined>,

		/**
		 * Maximum number of flight offers returned (Max 250)
		 * Type: double
		 */
		maxFlightOffers: FormControl<number | null | undefined>,

		/**
		 * maximum price per traveler. By default, no limit is applied. If specified, the value should be a positive number with no decimals
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxPrice: FormControl<number | null | undefined>,

		/** Requests the system to find at least one flight-offer per day, if possible, when a range of dates is specified. Default is false. */
		oneFlightOfferPerDay: FormControl<boolean | null | undefined>,
	}
	export function CreateSearchCriteriaFormGroup() {
		return new FormGroup<SearchCriteriaFormProperties>({
			addOneWayOffers: new FormControl<boolean | null | undefined>(undefined),
			allowAlternativeFareOptions: new FormControl<boolean | null | undefined>(undefined),
			excludeAllotments: new FormControl<boolean | null | undefined>(undefined),
			maxFlightOffers: new FormControl<number | null | undefined>(undefined),
			maxPrice: new FormControl<number | null | undefined>(undefined),
			oneFlightOfferPerDay: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SearchCriteriaAdditionalInformation {

		/** If true, returns the fare family name for each flight-offer which supports fare family */
		brandedFares?: boolean | null;

		/** If true, returns the price of the first additional bag when the airline is an "Amadeus Ancillary Services" member. */
		chargeableCheckedBags?: boolean | null;
	}
	export interface SearchCriteriaAdditionalInformationFormProperties {

		/** If true, returns the fare family name for each flight-offer which supports fare family */
		brandedFares: FormControl<boolean | null | undefined>,

		/** If true, returns the price of the first additional bag when the airline is an "Amadeus Ancillary Services" member. */
		chargeableCheckedBags: FormControl<boolean | null | undefined>,
	}
	export function CreateSearchCriteriaAdditionalInformationFormGroup() {
		return new FormGroup<SearchCriteriaAdditionalInformationFormProperties>({
			brandedFares: new FormControl<boolean | null | undefined>(undefined),
			chargeableCheckedBags: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SearchCriteriaFlightFilters {

		/** This flag enable/disable filtering of bus segment */
		busSegmentAllowed?: boolean | null;

		/**
		 * Restriction towards cabins.
		 * Minimum items: 1
		 * Maximum items: 6
		 */
		SearchCriteriaFlightFiltersCabinRestrictions?: Array<SearchCriteriaFlightFiltersCabinRestrictions>;

		/** Restriction towards carriers. */
		carrierRestrictions?: SearchCriteriaFlightFiltersCarrierRestrictions;

		/** Restriction towards number of connections. */
		connectionRestriction?: SearchCriteriaFlightFiltersConnectionRestriction;

		/** Allows to search a location outside the borders when a radius around a location is specified. Default is false. */
		crossBorderAllowed?: boolean | null;

		/**
		 * This option allows to modify the value for the Elapsed Flying Time (EFT) masterPricer option
		 * Type: double
		 */
		maxFlightTime?: number | null;

		/** This flag enables/disables the possibility to have more overnight flights in Low Fare Search */
		moreOvernightsAllowed?: boolean | null;

		/** This flag enable/disable filtering of rail segment (TGV AIR, RAIL ...) */
		railSegmentAllowed?: boolean | null;

		/** This option force to retrieve flight-offer with a departure and a return in the same airport */
		returnToDepartureAirport?: boolean | null;
	}
	export interface SearchCriteriaFlightFiltersFormProperties {

		/** This flag enable/disable filtering of bus segment */
		busSegmentAllowed: FormControl<boolean | null | undefined>,

		/** Allows to search a location outside the borders when a radius around a location is specified. Default is false. */
		crossBorderAllowed: FormControl<boolean | null | undefined>,

		/**
		 * This option allows to modify the value for the Elapsed Flying Time (EFT) masterPricer option
		 * Type: double
		 */
		maxFlightTime: FormControl<number | null | undefined>,

		/** This flag enables/disables the possibility to have more overnight flights in Low Fare Search */
		moreOvernightsAllowed: FormControl<boolean | null | undefined>,

		/** This flag enable/disable filtering of rail segment (TGV AIR, RAIL ...) */
		railSegmentAllowed: FormControl<boolean | null | undefined>,

		/** This option force to retrieve flight-offer with a departure and a return in the same airport */
		returnToDepartureAirport: FormControl<boolean | null | undefined>,
	}
	export function CreateSearchCriteriaFlightFiltersFormGroup() {
		return new FormGroup<SearchCriteriaFlightFiltersFormProperties>({
			busSegmentAllowed: new FormControl<boolean | null | undefined>(undefined),
			crossBorderAllowed: new FormControl<boolean | null | undefined>(undefined),
			maxFlightTime: new FormControl<number | null | undefined>(undefined),
			moreOvernightsAllowed: new FormControl<boolean | null | undefined>(undefined),
			railSegmentAllowed: new FormControl<boolean | null | undefined>(undefined),
			returnToDepartureAirport: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SearchCriteriaFlightFiltersCabinRestrictions {

		/** quality of service offered in the cabin where the seat is located in this flight. Economy, premium economy, business or first class */
		cabin?: Co2EmissionCabin | null;

		/** part of the trip covered by the travel class restriction (ALL_SEGMENTS if ommited) */
		coverage?: Coverage | null;

		/** The list of originDestination identifiers for which the cabinRestriction applies */
		originDestinationIds?: Array<string>;
	}
	export interface SearchCriteriaFlightFiltersCabinRestrictionsFormProperties {

		/** quality of service offered in the cabin where the seat is located in this flight. Economy, premium economy, business or first class */
		cabin: FormControl<Co2EmissionCabin | null | undefined>,

		/** part of the trip covered by the travel class restriction (ALL_SEGMENTS if ommited) */
		coverage: FormControl<Coverage | null | undefined>,
	}
	export function CreateSearchCriteriaFlightFiltersCabinRestrictionsFormGroup() {
		return new FormGroup<SearchCriteriaFlightFiltersCabinRestrictionsFormProperties>({
			cabin: new FormControl<Co2EmissionCabin | null | undefined>(undefined),
			coverage: new FormControl<Coverage | null | undefined>(undefined),
		});

	}

	export interface SearchCriteriaFlightFiltersCarrierRestrictions {

		/** This flag enable/disable filtering of blacklisted airline by EU. The list of the banned airlines is published in the Official Journal of the European Union, where they are included as annexes A and B to the Commission Regulation. The blacklist of an airline can concern all its flights or some specific aircraft types pertaining to the airline */
		blacklistedInEUAllowed?: boolean | null;

		/**
		 * This option ensures that the system will only consider these airlines.
		 * Minimum items: 1
		 * Maximum items: 99
		 */
		excludedCarrierCodes?: Array<string>;

		/**
		 * This option ensures that the system will only consider these airlines.
		 * Minimum items: 1
		 * Maximum items: 99
		 */
		includedCarrierCodes?: Array<string>;
	}
	export interface SearchCriteriaFlightFiltersCarrierRestrictionsFormProperties {

		/** This flag enable/disable filtering of blacklisted airline by EU. The list of the banned airlines is published in the Official Journal of the European Union, where they are included as annexes A and B to the Commission Regulation. The blacklist of an airline can concern all its flights or some specific aircraft types pertaining to the airline */
		blacklistedInEUAllowed: FormControl<boolean | null | undefined>,
	}
	export function CreateSearchCriteriaFlightFiltersCarrierRestrictionsFormGroup() {
		return new FormGroup<SearchCriteriaFlightFiltersCarrierRestrictionsFormProperties>({
			blacklistedInEUAllowed: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SearchCriteriaFlightFiltersConnectionRestriction {

		/** Allow to change airport during connection */
		airportChangeAllowed?: boolean | null;

		/**
		 * The maximal number of connections for each itinerary. Value can be 0, 1 or 2.
		 * Type: double
		 */
		maxNumberOfConnections?: number | null;

		/** This option allows the single segment to have one or more intermediate stops (technical stops). */
		technicalStopsAllowed?: boolean | null;
	}
	export interface SearchCriteriaFlightFiltersConnectionRestrictionFormProperties {

		/** Allow to change airport during connection */
		airportChangeAllowed: FormControl<boolean | null | undefined>,

		/**
		 * The maximal number of connections for each itinerary. Value can be 0, 1 or 2.
		 * Type: double
		 */
		maxNumberOfConnections: FormControl<number | null | undefined>,

		/** This option allows the single segment to have one or more intermediate stops (technical stops). */
		technicalStopsAllowed: FormControl<boolean | null | undefined>,
	}
	export function CreateSearchCriteriaFlightFiltersConnectionRestrictionFormGroup() {
		return new FormGroup<SearchCriteriaFlightFiltersConnectionRestrictionFormProperties>({
			airportChangeAllowed: new FormControl<boolean | null | undefined>(undefined),
			maxNumberOfConnections: new FormControl<number | null | undefined>(undefined),
			technicalStopsAllowed: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Traveler {

		/** if type="HELD_INFANT", corresponds to the adult travelers's id who will share the seat */
		associatedAdultId?: string | null;

		/** Required */
		id: string;

		/**
		 * traveler type
		 * age restrictions : CHILD < 12y, HELD_INFANT < 2y, SEATED_INFANT < 2y, SENIOR >=60y
		 * Required
		 */
		travelerType: FlightOfferTravelerPricingsTravelerType;
	}
	export interface TravelerFormProperties {

		/** if type="HELD_INFANT", corresponds to the adult travelers's id who will share the seat */
		associatedAdultId: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * traveler type
		 * age restrictions : CHILD < 12y, HELD_INFANT < 2y, SEATED_INFANT < 2y, SENIOR >=60y
		 * Required
		 */
		travelerType: FormControl<FlightOfferTravelerPricingsTravelerType | null | undefined>,
	}
	export function CreateTravelerFormGroup() {
		return new FormGroup<TravelerFormProperties>({
			associatedAdultId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			travelerType: new FormControl<FlightOfferTravelerPricingsTravelerType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LocationEntry {

		/** Required */
		key: string;
	}
	export interface LocationEntryFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,
	}
	export function CreateLocationEntryFormGroup() {
		return new FormGroup<LocationEntryFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LocationValue {

		/** City code associated to the airport */
		cityCode?: string | null;

		/** Country code of the airport */
		countryCode?: string | null;
	}
	export interface LocationValueFormProperties {

		/** City code associated to the airport */
		cityCode: FormControl<string | null | undefined>,

		/** Country code of the airport */
		countryCode: FormControl<string | null | undefined>,
	}
	export function CreateLocationValueFormGroup() {
		return new FormGroup<LocationValueFormProperties>({
			cityCode: new FormControl<string | null | undefined>(undefined),
			countryCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** departure or arrival information */
	export interface OriginalFlightEndPoint {

		/** [IATA airline codes](http://www.iata.org/publications/Pages/code-search.aspx) */
		iataCode?: string | null;

		/** terminal name / number */
		terminal?: string | null;
	}

	/** departure or arrival information */
	export interface OriginalFlightEndPointFormProperties {

		/** [IATA airline codes](http://www.iata.org/publications/Pages/code-search.aspx) */
		iataCode: FormControl<string | null | undefined>,

		/** terminal name / number */
		terminal: FormControl<string | null | undefined>,
	}
	export function CreateOriginalFlightEndPointFormGroup() {
		return new FormGroup<OriginalFlightEndPointFormProperties>({
			iataCode: new FormControl<string | null | undefined>(undefined),
			terminal: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** details of stops for direct or change of gauge flights */
	export interface OriginalFlightStop {

		/** stop duration in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) PnYnMnDTnHnMnS format, e.g. PT2H10M */
		duration?: string | null;

		/** [IATA airline codes](http://www.iata.org/publications/Pages/code-search.aspx) */
		iataCode?: string | null;
	}

	/** details of stops for direct or change of gauge flights */
	export interface OriginalFlightStopFormProperties {

		/** stop duration in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) PnYnMnDTnHnMnS format, e.g. PT2H10M */
		duration: FormControl<string | null | undefined>,

		/** [IATA airline codes](http://www.iata.org/publications/Pages/code-search.aspx) */
		iataCode: FormControl<string | null | undefined>,
	}
	export function CreateOriginalFlightStopFormGroup() {
		return new FormGroup<OriginalFlightStopFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined),
			iataCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Price {

		/** Amount without taxes */
		base?: string | null;
		currency?: string | null;

		/** List of applicable fees */
		fees?: Array<Fee>;

		/** The amount of taxes which are refundable */
		refundableTaxes?: string | null;
		taxes?: Array<Tax>;

		/** Total amount paid by the user */
		total?: string | null;
	}
	export interface PriceFormProperties {

		/** Amount without taxes */
		base: FormControl<string | null | undefined>,
		currency: FormControl<string | null | undefined>,

		/** The amount of taxes which are refundable */
		refundableTaxes: FormControl<string | null | undefined>,

		/** Total amount paid by the user */
		total: FormControl<string | null | undefined>,
	}
	export function CreatePriceFormGroup() {
		return new FormGroup<PriceFormProperties>({
			base: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			refundableTaxes: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** a tax */
	export interface Tax {
		amount?: string | null;
		code?: string | null;
	}

	/** a tax */
	export interface TaxFormProperties {
		amount: FormControl<string | null | undefined>,
		code: FormControl<string | null | undefined>,
	}
	export function CreateTaxFormGroup() {
		return new FormGroup<TaxFormProperties>({
			amount: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** slice and Dice indicator, such as Local Availability, Sub OnD(Origin and Destination) 1 Availability and Sub OnD 2 Availability */
	export enum SliceDiceIndicator { LOCAL_AVAILABILITY = 'LOCAL_AVAILABILITY', SUB_OD_AVAILABILITY_1 = 'SUB_OD_AVAILABILITY_1', SUB_OD_AVAILABILITY_2 = 'SUB_OD_AVAILABILITY_2' }


	/** quality of service offered in the cabin where the seat is located in this flight. Economy, premium economy, business or first class */
	export enum TravelClass { ECONOMY = 'ECONOMY', PREMIUM_ECONOMY = 'PREMIUM_ECONOMY', BUSINESS = 'BUSINESS', FIRST = 'FIRST' }


	/**
	 * option specifying a group of fares, which may be valid under certain conditons
	 * Can be used to specify special fare discount for a passenger
	 */
	export enum TravelerPricingFareOption { STANDARD = 'STANDARD', INCLUSIVE_TOUR = 'INCLUSIVE_TOUR', SPANISH_MELILLA_RESIDENT = 'SPANISH_MELILLA_RESIDENT', SPANISH_CEUTA_RESIDENT = 'SPANISH_CEUTA_RESIDENT', SPANISH_CANARY_RESIDENT = 'SPANISH_CANARY_RESIDENT', SPANISH_BALEARIC_RESIDENT = 'SPANISH_BALEARIC_RESIDENT', AIR_FRANCE_METROPOLITAN_DISCOUNT_PASS = 'AIR_FRANCE_METROPOLITAN_DISCOUNT_PASS', AIR_FRANCE_DOM_DISCOUNT_PASS = 'AIR_FRANCE_DOM_DISCOUNT_PASS', AIR_FRANCE_COMBINED_DISCOUNT_PASS = 'AIR_FRANCE_COMBINED_DISCOUNT_PASS', AIR_FRANCE_FAMILY = 'AIR_FRANCE_FAMILY', ADULT_WITH_COMPANION = 'ADULT_WITH_COMPANION', COMPANION = 'COMPANION' }


	/**
	 * traveler type
	 * age restrictions : CHILD < 12y, HELD_INFANT < 2y, SEATED_INFANT < 2y, SENIOR >=60y
	 */
	export enum TravelerType { ADULT = 'ADULT', CHILD = 'CHILD', SENIOR = 'SENIOR', YOUNG = 'YOUNG', HELD_INFANT = 'HELD_INFANT', SEATED_INFANT = 'SEATED_INFANT', STUDENT = 'STUDENT' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Return list of Flight Offers based on searching criteria.
		 * Get shopping/flight-offers
		 * @param {string} originLocationCode city/airport [IATA code](http://www.iata.org/publications/Pages/code-search.aspx) from which the traveler will depart, e.g. BOS for Boston
		 * @param {string} destinationLocationCode city/airport [IATA code](http://www.iata.org/publications/Pages/code-search.aspx) to which the traveler is going, e.g. PAR for Paris
		 * @param {Date} departureDate the date on which the traveler will depart from the origin to go to the destination. Dates are specified in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-DD format, e.g. 2017-12-25
		 *     Type: DateOnly
		 * @param {Date} returnDate the date on which the traveler will depart from the destination to return to the origin. If this parameter is not specified, only one-way itineraries are found. If this parameter is specified, only round-trip itineraries are found. Dates are specified in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-DD format, e.g. 2018-02-28
		 *     Type: DateOnly
		 * @param {number} adults the number of adult travelers (age 12 or older on date of departure).
		 *     Minimum: 1    Maximum: 9
		 * @param {number} children the number of child travelers (older than age 2 and younger than age 12 on date of departure) who will each have their own separate seat. If specified, this number should be greater than or equal to 0
		 *     Minimum: 0    Maximum: 9
		 * @param {number} infants the number of infant travelers (whose age is less or equal to 2 on date of departure). Infants travel on the lap of an adult traveler, and thus the number of infants must not exceed the number of adults. If specified, this number should be greater than or equal to 0
		 *     Minimum: 0    Maximum: 9
		 * @param {Co2EmissionCabin} travelClass most of the flight time should be spent in a cabin of this quality or higher. The accepted travel class is economy, premium economy, business or first class. If no travel class is specified, the search considers any travel class
		 * @param {string} includedAirlineCodes This option ensures that the system will only consider these airlines. This can not be cumulated with parameter excludedAirlineCodes.
		 * Airlines are specified as [IATA airline codes](http://www.iata.org/publications/Pages/code-search.aspx) and are comma-separated, e.g. 6X,7X,8X
		 * @param {string} excludedAirlineCodes This option ensures that the system will ignore these airlines. This can not be cumulated with parameter includedAirlineCodes.
		 * Airlines are specified as [IATA airline codes](http://www.iata.org/publications/Pages/code-search.aspx) and are comma-separated, e.g. 6X,7X,8X
		 * @param {boolean} nonStop if set to true, the search will find only flights going from the origin to the destination with no stop in between
		 * @param {string} currencyCode the preferred currency for the flight offers. Currency is specified in the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format, e.g. EUR for Euro
		 * @param {number} maxPrice maximum price per traveler. By default, no limit is applied. If specified, the value should be a positive number with no decimals
		 *     Minimum: 1
		 * @param {number} max maximum number of flight offers to return. If specified, the value should be greater than or equal to 1
		 *     Minimum: 1
		 * @return {void} Successful Operation
		 */
		GetFlightOffers(originLocationCode: string, destinationLocationCode: string, departureDate: Date, returnDate: Date | null | undefined, adults: number, children: number | null | undefined, infants: number | null | undefined, travelClass: Co2EmissionCabin | null | undefined, includedAirlineCodes: string | null | undefined, excludedAirlineCodes: string | null | undefined, nonStop: boolean | null | undefined, currencyCode: string | null | undefined, maxPrice: number | null | undefined, max: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shopping/flight-offers?originLocationCode=' + (originLocationCode == null ? '' : encodeURIComponent(originLocationCode)) + '&destinationLocationCode=' + (destinationLocationCode == null ? '' : encodeURIComponent(destinationLocationCode)) + '&departureDate=' + departureDate.toISOString() + '&returnDate=' + returnDate?.toISOString() + '&adults=' + adults + '&children=' + children + '&infants=' + infants + '&travelClass=' + travelClass + '&includedAirlineCodes=' + (includedAirlineCodes == null ? '' : encodeURIComponent(includedAirlineCodes)) + '&excludedAirlineCodes=' + (excludedAirlineCodes == null ? '' : encodeURIComponent(excludedAirlineCodes)) + '&nonStop=' + nonStop + '&currencyCode=' + (currencyCode == null ? '' : encodeURIComponent(currencyCode)) + '&maxPrice=' + maxPrice + '&max=' + max, { observe: 'response', responseType: 'text' });
		}
	}

}

