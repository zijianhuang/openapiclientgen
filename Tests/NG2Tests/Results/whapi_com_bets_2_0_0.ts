import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Bet {

		/** The delayed bet identifier */
		delayedBetId?: string | null;

		/** The ID number of the free bet token if used in conjunction with this bet */
		freeBetId?: string | null;

		/** Required */
		legs: Array<Leg>;

		/**
		 * The bet number
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		number: number;

		/**
		 * The amount of the stake placed on the bet
		 * Required
		 * Type: double
		 */
		stake: number;

		/**
		 * The bet type code of the bet. For example: TBL (Treble)
		 * Required
		 */
		typeCode: string;
	}
	export interface BetFormProperties {

		/** The delayed bet identifier */
		delayedBetId: FormControl<string | null | undefined>,

		/** The ID number of the free bet token if used in conjunction with this bet */
		freeBetId: FormControl<string | null | undefined>,

		/**
		 * The bet number
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		number: FormControl<number | null | undefined>,

		/**
		 * The amount of the stake placed on the bet
		 * Required
		 * Type: double
		 */
		stake: FormControl<number | null | undefined>,

		/**
		 * The bet type code of the bet. For example: TBL (Treble)
		 * Required
		 */
		typeCode: FormControl<string | null | undefined>,
	}
	export function CreateBetFormGroup() {
		return new FormGroup<BetFormProperties>({
			delayedBetId: new FormControl<string | null | undefined>(undefined),
			freeBetId: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			stake: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			typeCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Leg {

		/** Required */
		parts: Array<Part>;

		/** The leg sort. This element is present for complex bets but not for single bets. */
		sort?: string | null;

		/**
		 * The leg type. One of the following values: W - Win or E- Each-way. Even though the priceNum and priceDen are required for the bets with type value W (win), it is just optional from the endpoint point of view. There are requests / bets like outcomes with starting price but do not have a specific price. Generally prices can change, so if the type is win you have to resubmit and thus verify the price that the customer saw on the screen initially. The API will check if it matches the current price of William Hill. Note that if you send a wrong / outdated price you will receive the error message - Price changed.
		 * Required
		 */
		type: string;
	}
	export interface LegFormProperties {

		/** The leg sort. This element is present for complex bets but not for single bets. */
		sort: FormControl<string | null | undefined>,

		/**
		 * The leg type. One of the following values: W - Win or E- Each-way. Even though the priceNum and priceDen are required for the bets with type value W (win), it is just optional from the endpoint point of view. There are requests / bets like outcomes with starting price but do not have a specific price. Generally prices can change, so if the type is win you have to resubmit and thus verify the price that the customer saw on the screen initially. The API will check if it matches the current price of William Hill. Note that if you send a wrong / outdated price you will receive the error message - Price changed.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateLegFormGroup() {
		return new FormGroup<LegFormProperties>({
			sort: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Part {

		/**
		 * Indicates if the bet can be used in a multiple bet
		 * Required
		 */
		includeInMultiple: boolean;

		/**
		 * Price denominator - will be ignored for types other than L (Fixed Price)
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priceDen: number;

		/**
		 * Price numerator - will be ignored for types other than L (Fixed Price)
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priceNum: number;

		/**
		 * The type of price selected. For example - ‘L’ (Fixed)
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priceType: number;

		/**
		 * The selection identifier
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		selectionId: number;
	}
	export interface PartFormProperties {

		/**
		 * Indicates if the bet can be used in a multiple bet
		 * Required
		 */
		includeInMultiple: FormControl<boolean | null | undefined>,

		/**
		 * Price denominator - will be ignored for types other than L (Fixed Price)
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priceDen: FormControl<number | null | undefined>,

		/**
		 * Price numerator - will be ignored for types other than L (Fixed Price)
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priceNum: FormControl<number | null | undefined>,

		/**
		 * The type of price selected. For example - ‘L’ (Fixed)
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priceType: FormControl<number | null | undefined>,

		/**
		 * The selection identifier
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		selectionId: FormControl<number | null | undefined>,
	}
	export function CreatePartFormGroup() {
		return new FormGroup<PartFormProperties>({
			includeInMultiple: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			priceDen: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			priceNum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			priceType: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			selectionId: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.pattern('^(OB_OU\d+)$')]),
		});

	}

	export interface BetDelayed {

		/**
		 * The delay time period of the bet in seconds. The resubmission of the bet has to wait for the length of time (in seconds) returned in the delayPeriod before submitting the second request.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		delayPeriodSeconds: number;

		/**
		 * The unique identifier of the delayed bet. After the initial response is received, containing the delayPeriod and the delayBetId, the request is then resubmitted using the same delayBetId token that came in that initial response. Check the example below to see how to resend a delayed bet payload.
		 * Required
		 */
		delayedBetId: string;

		/**
		 * The number of the bet
		 * Required
		 */
		id: string;

		/**
		 * Number of the bet if this is part of a multiple bet
		 * Type: double
		 */
		number?: number | null;
	}
	export interface BetDelayedFormProperties {

		/**
		 * The delay time period of the bet in seconds. The resubmission of the bet has to wait for the length of time (in seconds) returned in the delayPeriod before submitting the second request.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		delayPeriodSeconds: FormControl<number | null | undefined>,

		/**
		 * The unique identifier of the delayed bet. After the initial response is received, containing the delayPeriod and the delayBetId, the request is then resubmitted using the same delayBetId token that came in that initial response. Check the example below to see how to resend a delayed bet payload.
		 * Required
		 */
		delayedBetId: FormControl<string | null | undefined>,

		/**
		 * The number of the bet
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Number of the bet if this is part of a multiple bet
		 * Type: double
		 */
		number: FormControl<number | null | undefined>,
	}
	export function CreateBetDelayedFormGroup() {
		return new FormGroup<BetDelayedFormProperties>({
			delayPeriodSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			delayedBetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BetHistoryResponse {
		bets?: Array<PlacedBet>;
	}
	export interface BetHistoryResponseFormProperties {
	}
	export function CreateBetHistoryResponseFormGroup() {
		return new FormGroup<BetHistoryResponseFormProperties>({
		});

	}

	export interface PlacedBet {

		/**
		 * The cash in value of the bet. For example £0.88. When no value is given or no value is present, no cash in is available
		 * Type: double
		 */
		cashinValue?: number | null;

		/**
		 * The estimated value of the returns if the bet is successful. Note: when an estimated return isn’t available, as in the case of a bet placed on a horse at SP (starting price) where the actual price is unknown when the bet is placed, ‘NOT_AVAILABLE’ will appear in the response field.
		 * Required
		 * Type: double
		 */
		estimatedReturns: number;

		/**
		 * If a free bet token is used for the bet, this element represents the value
		 * Type: double
		 */
		freeBetValue?: number | null;

		/**
		 * The unique identifier of the bet
		 * Required
		 */
		id: string;
		legs?: Array<PlacedBetLeg>;

		/**
		 * Number of lines of bets
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numLines?: number | null;

		/**
		 * Number of selections that the bet is made of
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numSelections?: number | null;

		/** The unique identifier of the receipt for the bet */
		receipt?: string | null;

		/**
		 * Whether the bet is settled
		 * Required
		 */
		settled: boolean;

		/**
		 * The bet stake, which represents the total value of the bet. For example: £ 12.34
		 * Required
		 * Type: double
		 */
		stake: number;

		/**
		 * The individual stake on each line of the bet. For example: £ 6.17
		 * Type: double
		 */
		stakePerLine?: number | null;

		/**
		 * The status of the bet. Can be one of the following: A - Active, S - suspended, C - Cashed Out
		 * Required
		 */
		status: string;

		/**
		 * The time the bet was placed
		 * Required
		 */
		transDateTime: string;

		/**
		 * The bet type code of the bet. For example: TBL (Treble)
		 * Required
		 */
		typeCode: string;

		/**
		 * The name of the bet type. For example: Double
		 * Required
		 */
		typeName: string;

		/**
		 * Actual value of the returns from this bet
		 * Required
		 * Type: double
		 */
		winnings: number;
	}
	export interface PlacedBetFormProperties {

		/**
		 * The cash in value of the bet. For example £0.88. When no value is given or no value is present, no cash in is available
		 * Type: double
		 */
		cashinValue: FormControl<number | null | undefined>,

		/**
		 * The estimated value of the returns if the bet is successful. Note: when an estimated return isn’t available, as in the case of a bet placed on a horse at SP (starting price) where the actual price is unknown when the bet is placed, ‘NOT_AVAILABLE’ will appear in the response field.
		 * Required
		 * Type: double
		 */
		estimatedReturns: FormControl<number | null | undefined>,

		/**
		 * If a free bet token is used for the bet, this element represents the value
		 * Type: double
		 */
		freeBetValue: FormControl<number | null | undefined>,

		/**
		 * The unique identifier of the bet
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Number of lines of bets
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numLines: FormControl<number | null | undefined>,

		/**
		 * Number of selections that the bet is made of
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numSelections: FormControl<number | null | undefined>,

		/** The unique identifier of the receipt for the bet */
		receipt: FormControl<string | null | undefined>,

		/**
		 * Whether the bet is settled
		 * Required
		 */
		settled: FormControl<boolean | null | undefined>,

		/**
		 * The bet stake, which represents the total value of the bet. For example: £ 12.34
		 * Required
		 * Type: double
		 */
		stake: FormControl<number | null | undefined>,

		/**
		 * The individual stake on each line of the bet. For example: £ 6.17
		 * Type: double
		 */
		stakePerLine: FormControl<number | null | undefined>,

		/**
		 * The status of the bet. Can be one of the following: A - Active, S - suspended, C - Cashed Out
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * The time the bet was placed
		 * Required
		 */
		transDateTime: FormControl<string | null | undefined>,

		/**
		 * The bet type code of the bet. For example: TBL (Treble)
		 * Required
		 */
		typeCode: FormControl<string | null | undefined>,

		/**
		 * The name of the bet type. For example: Double
		 * Required
		 */
		typeName: FormControl<string | null | undefined>,

		/**
		 * Actual value of the returns from this bet
		 * Required
		 * Type: double
		 */
		winnings: FormControl<number | null | undefined>,
	}
	export function CreatePlacedBetFormGroup() {
		return new FormGroup<PlacedBetFormProperties>({
			cashinValue: new FormControl<number | null | undefined>(undefined),
			estimatedReturns: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			freeBetValue: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			numLines: new FormControl<number | null | undefined>(undefined),
			numSelections: new FormControl<number | null | undefined>(undefined),
			receipt: new FormControl<string | null | undefined>(undefined),
			settled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			stake: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			stakePerLine: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			transDateTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			typeCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			typeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			winnings: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PlacedBetLeg {

		/**
		 * The leg number of the bet
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		number: number;

		/** Required */
		parts: Array<PlacedBetPart>;

		/** The leg sort. This element is present for complex bets but not for single bets. */
		sort?: string | null;

		/**
		 * The leg type. One of the following values: W - Win or E- Each-way. Even though the priceNum and priceDen are required for the bets with type value W (win), it is just optional from the endpoint point of view. There are requests / bets like outcomes with starting price but do not have a specific price. Generally prices can change, so if the type is win you have to resubmit and thus verify the price that the customer saw on the screen initially. The API will check if it matches the current price of William Hill. Note that if you send a wrong / outdated price you will receive the error message - Price changed.
		 * Required
		 */
		type: string;
	}
	export interface PlacedBetLegFormProperties {

		/**
		 * The leg number of the bet
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		number: FormControl<number | null | undefined>,

		/** The leg sort. This element is present for complex bets but not for single bets. */
		sort: FormControl<string | null | undefined>,

		/**
		 * The leg type. One of the following values: W - Win or E- Each-way. Even though the priceNum and priceDen are required for the bets with type value W (win), it is just optional from the endpoint point of view. There are requests / bets like outcomes with starting price but do not have a specific price. Generally prices can change, so if the type is win you have to resubmit and thus verify the price that the customer saw on the screen initially. The API will check if it matches the current price of William Hill. Note that if you send a wrong / outdated price you will receive the error message - Price changed.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePlacedBetLegFormGroup() {
		return new FormGroup<PlacedBetLegFormProperties>({
			number: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			sort: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PlacedBetPart {

		/**
		 * Human-friendly description of the bet
		 * Required
		 */
		description: string;

		/**
		 * When the odds are shown in vulgar fractions this is the denominator of the fraction. For example: 2 in 5/2
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		eachWayDen?: number | null;

		/**
		 * When the odds are shown in vulgar fractions this is the numerator of the fraction. For example: 5 in 5/2
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		eachWayNum?: number | null;

		/**
		 * The Each-way places available for the bet
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		eachWayPlaces?: number | null;

		/**
		 * The description of the event
		 * Required
		 */
		eventDescription: string;

		/**
		 * Unique identifier of the event
		 * Required
		 */
		eventId: string;

		/** The description of the market within an event */
		eventMarketDescription?: string | null;

		/** The description of type of the event */
		eventTypeDescription?: string | null;

		/**
		 * Denotes if the bet is part of a handicap market. For example: -1 if the selection starts on -1 goals (in football)
		 * Type: double
		 */
		handicap?: number | null;

		/**
		 * The number of the bet
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		number: number;

		/**
		 * When the odds are shown in vulgar fractions this is the denominator of the fraction. For example: 2 in 5/2
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priceDen: number;
		priceFormatted?: PriceFormatted;

		/**
		 * When the odds are shown in vulgar fractions this is the numerator of the fraction. For example: 5 in 5/2
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priceNum: number;

		/**
		 * The price type chosen when the bet was placed. For example: L (Win)
		 * Required
		 */
		priceType: string;

		/**
		 * The outcome of the bet/event. Can be one of the following values: W - Won; L - Lost; V - Void; - Result not yet available
		 * Required
		 */
		result: string;

		/**
		 * The official scale of deductions that apply when a runner is withdrawn
		 * Type: double
		 */
		rule4Deductions?: number | null;

		/** Unique identifier of the selection */
		selectionId?: string | null;

		/**
		 * Time the event will start. For example: 2013-01-30 11:01:01
		 * Required
		 */
		startDateTime: string;
	}
	export interface PlacedBetPartFormProperties {

		/**
		 * Human-friendly description of the bet
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * When the odds are shown in vulgar fractions this is the denominator of the fraction. For example: 2 in 5/2
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		eachWayDen: FormControl<number | null | undefined>,

		/**
		 * When the odds are shown in vulgar fractions this is the numerator of the fraction. For example: 5 in 5/2
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		eachWayNum: FormControl<number | null | undefined>,

		/**
		 * The Each-way places available for the bet
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		eachWayPlaces: FormControl<number | null | undefined>,

		/**
		 * The description of the event
		 * Required
		 */
		eventDescription: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of the event
		 * Required
		 */
		eventId: FormControl<string | null | undefined>,

		/** The description of the market within an event */
		eventMarketDescription: FormControl<string | null | undefined>,

		/** The description of type of the event */
		eventTypeDescription: FormControl<string | null | undefined>,

		/**
		 * Denotes if the bet is part of a handicap market. For example: -1 if the selection starts on -1 goals (in football)
		 * Type: double
		 */
		handicap: FormControl<number | null | undefined>,

		/**
		 * The number of the bet
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		number: FormControl<number | null | undefined>,

		/**
		 * When the odds are shown in vulgar fractions this is the denominator of the fraction. For example: 2 in 5/2
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priceDen: FormControl<number | null | undefined>,

		/**
		 * When the odds are shown in vulgar fractions this is the numerator of the fraction. For example: 5 in 5/2
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priceNum: FormControl<number | null | undefined>,

		/**
		 * The price type chosen when the bet was placed. For example: L (Win)
		 * Required
		 */
		priceType: FormControl<string | null | undefined>,

		/**
		 * The outcome of the bet/event. Can be one of the following values: W - Won; L - Lost; V - Void; - Result not yet available
		 * Required
		 */
		result: FormControl<string | null | undefined>,

		/**
		 * The official scale of deductions that apply when a runner is withdrawn
		 * Type: double
		 */
		rule4Deductions: FormControl<number | null | undefined>,

		/** Unique identifier of the selection */
		selectionId: FormControl<string | null | undefined>,

		/**
		 * Time the event will start. For example: 2013-01-30 11:01:01
		 * Required
		 */
		startDateTime: FormControl<string | null | undefined>,
	}
	export function CreatePlacedBetPartFormGroup() {
		return new FormGroup<PlacedBetPartFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eachWayDen: new FormControl<number | null | undefined>(undefined),
			eachWayNum: new FormControl<number | null | undefined>(undefined),
			eachWayPlaces: new FormControl<number | null | undefined>(undefined),
			eventDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(OB_EV\d+)$')]),
			eventMarketDescription: new FormControl<string | null | undefined>(undefined),
			eventTypeDescription: new FormControl<string | null | undefined>(undefined),
			handicap: new FormControl<number | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			priceDen: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			priceNum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			priceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			result: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rule4Deductions: new FormControl<number | null | undefined>(undefined),
			selectionId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(OB_OU\d+)$')]),
			startDateTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PriceFormatted {

		/** The price in American format */
		american?: string | null;

		/**
		 * The decimal format of the price
		 * Type: double
		 */
		decimal?: number | null;

		/** The fractional format of the price or EVS when the price evens. */
		fractional?: string | null;
	}
	export interface PriceFormattedFormProperties {

		/** The price in American format */
		american: FormControl<string | null | undefined>,

		/**
		 * The decimal format of the price
		 * Type: double
		 */
		decimal: FormControl<number | null | undefined>,

		/** The fractional format of the price or EVS when the price evens. */
		fractional: FormControl<string | null | undefined>,
	}
	export function CreatePriceFormattedFormGroup() {
		return new FormGroup<PriceFormattedFormProperties>({
			american: new FormControl<string | null | undefined>(undefined),
			decimal: new FormControl<number | null | undefined>(undefined),
			fractional: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BetPlaced {

		/** The bet id */
		id?: string | null;

		/**
		 * The number of lines the bet consists of
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numLines?: number | null;

		/**
		 * Number of the bet if this is part of a multiple bet
		 * Type: double
		 */
		number?: number | null;

		/** The time the bet was placed. For example: 2013-01-30TT13:34:20. The value of this element can be replaced with the current timestamp if it was missing. */
		placedDateTime?: string | null;

		/**
		 * The unique ID of the bet receipt
		 * Required
		 */
		receipt: string;

		/**
		 * The total amount staked on the bet
		 * Type: double
		 */
		totalStake?: number | null;
	}
	export interface BetPlacedFormProperties {

		/** The bet id */
		id: FormControl<string | null | undefined>,

		/**
		 * The number of lines the bet consists of
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numLines: FormControl<number | null | undefined>,

		/**
		 * Number of the bet if this is part of a multiple bet
		 * Type: double
		 */
		number: FormControl<number | null | undefined>,

		/** The time the bet was placed. For example: 2013-01-30TT13:34:20. The value of this element can be replaced with the current timestamp if it was missing. */
		placedDateTime: FormControl<string | null | undefined>,

		/**
		 * The unique ID of the bet receipt
		 * Required
		 */
		receipt: FormControl<string | null | undefined>,

		/**
		 * The total amount staked on the bet
		 * Type: double
		 */
		totalStake: FormControl<number | null | undefined>,
	}
	export function CreateBetPlacedFormGroup() {
		return new FormGroup<BetPlacedFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			numLines: new FormControl<number | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
			placedDateTime: new FormControl<string | null | undefined>(undefined),
			receipt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			totalStake: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BetSlipRequest {
		legs?: Array<Leg>;
	}
	export interface BetSlipRequestFormProperties {
	}
	export function CreateBetSlipRequestFormGroup() {
		return new FormGroup<BetSlipRequestFormProperties>({
		});

	}

	export interface BetSlipResponse {
		betslip?: Array<Betslipbet>;
	}
	export interface BetSlipResponseFormProperties {
	}
	export function CreateBetSlipResponseFormGroup() {
		return new FormGroup<BetSlipResponseFormProperties>({
		});

	}

	export interface Betslipbet {

		/**
		 * The total aggregated odds, as a decimal, of the multiple bet placed
		 * Type: double
		 */
		betMultiplier?: number | null;

		/** Free bets that can be used with this bet */
		freeBets?: Array<FreeBetDetail>;

		/** Required */
		legs: Array<Betslipleg>;

		/**
		 * Maximum stake allowable on the bet. For example: 2500.00 (GBP)
		 * Type: double
		 */
		maxStake?: number | null;

		/**
		 * Minumum stake allowable on the bet. For example: 0.05 (GBP)
		 * Type: double
		 */
		minStake?: number | null;

		/**
		 * The number of lines (selections) of a bet
		 * Type: double
		 */
		numLines?: number | null;

		/**
		 * The bet number
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		number: number;

		/**
		 * The bet type code of the bet. For example: TBL (Treble)
		 * Required
		 */
		typeCode: string;

		/** The TypeCode of the bet. For example: TBL (Treble) */
		typeName?: string | null;
	}
	export interface BetslipbetFormProperties {

		/**
		 * The total aggregated odds, as a decimal, of the multiple bet placed
		 * Type: double
		 */
		betMultiplier: FormControl<number | null | undefined>,

		/**
		 * Maximum stake allowable on the bet. For example: 2500.00 (GBP)
		 * Type: double
		 */
		maxStake: FormControl<number | null | undefined>,

		/**
		 * Minumum stake allowable on the bet. For example: 0.05 (GBP)
		 * Type: double
		 */
		minStake: FormControl<number | null | undefined>,

		/**
		 * The number of lines (selections) of a bet
		 * Type: double
		 */
		numLines: FormControl<number | null | undefined>,

		/**
		 * The bet number
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		number: FormControl<number | null | undefined>,

		/**
		 * The bet type code of the bet. For example: TBL (Treble)
		 * Required
		 */
		typeCode: FormControl<string | null | undefined>,

		/** The TypeCode of the bet. For example: TBL (Treble) */
		typeName: FormControl<string | null | undefined>,
	}
	export function CreateBetslipbetFormGroup() {
		return new FormGroup<BetslipbetFormProperties>({
			betMultiplier: new FormControl<number | null | undefined>(undefined, [Validators.pattern('[0-9]*')]),
			maxStake: new FormControl<number | null | undefined>(undefined),
			minStake: new FormControl<number | null | undefined>(undefined),
			numLines: new FormControl<number | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			typeCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			typeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FreeBetDetail {

		/** The time the free bet was awarded. For example 2014-11-013T23:59:10 */
		awardDateTime?: string | null;

		/** The message explaining the offer displayed to the customer along with the free bet */
		displayText?: string | null;

		/** The time the free bet expired. For example 2014-11-013T23:59:10 */
		expiryDateTime?: string | null;

		/**
		 * The identifier of the free bet
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: number;

		/** The description of the offer that enabled the customer to place a free bet */
		offerDesc?: string | null;

		/**
		 * The identifier of the offer
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offerId?: number | null;

		/**
		 * The name of the offer that enabled the customer to place a free bet
		 * Required
		 */
		offerName: string;

		/** The time the free bet offer started. For example 2014-11-013T23:59:10 */
		startDateTime?: string | null;

		/**
		 * The value of the free bet
		 * Required
		 * Type: double
		 */
		value: number;
	}
	export interface FreeBetDetailFormProperties {

		/** The time the free bet was awarded. For example 2014-11-013T23:59:10 */
		awardDateTime: FormControl<string | null | undefined>,

		/** The message explaining the offer displayed to the customer along with the free bet */
		displayText: FormControl<string | null | undefined>,

		/** The time the free bet expired. For example 2014-11-013T23:59:10 */
		expiryDateTime: FormControl<string | null | undefined>,

		/**
		 * The identifier of the free bet
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** The description of the offer that enabled the customer to place a free bet */
		offerDesc: FormControl<string | null | undefined>,

		/**
		 * The identifier of the offer
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offerId: FormControl<number | null | undefined>,

		/**
		 * The name of the offer that enabled the customer to place a free bet
		 * Required
		 */
		offerName: FormControl<string | null | undefined>,

		/** The time the free bet offer started. For example 2014-11-013T23:59:10 */
		startDateTime: FormControl<string | null | undefined>,

		/**
		 * The value of the free bet
		 * Required
		 * Type: double
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateFreeBetDetailFormGroup() {
		return new FormGroup<FreeBetDetailFormProperties>({
			awardDateTime: new FormControl<string | null | undefined>(undefined),
			displayText: new FormControl<string | null | undefined>(undefined),
			expiryDateTime: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			offerDesc: new FormControl<string | null | undefined>(undefined),
			offerId: new FormControl<number | null | undefined>(undefined),
			offerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startDateTime: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Betslipleg {

		/** Required */
		parts: Array<Betslippart>;

		/** The leg sort. This element is present for complex bets but not for single bets. */
		sort?: string | null;

		/**
		 * Type of leg that was placed on the bet, such as Win or Each-way. Even though the priceNum and priceDen are required for the bets with type value W (win), it is just optional from the endpoint point of view. There are requests / bets like outcomes with starting price but do not have a specific price. Generally prices can change, so if the type is win you have to resubmit and thus verify the price that the customer saw on the screen initially. The API will check if it matches the current price of William Hill. Note that if you send a wrong / outdated price you will receive the error message - Price changed.
		 * Required
		 */
		type: string;
	}
	export interface BetsliplegFormProperties {

		/** The leg sort. This element is present for complex bets but not for single bets. */
		sort: FormControl<string | null | undefined>,

		/**
		 * Type of leg that was placed on the bet, such as Win or Each-way. Even though the priceNum and priceDen are required for the bets with type value W (win), it is just optional from the endpoint point of view. There are requests / bets like outcomes with starting price but do not have a specific price. Generally prices can change, so if the type is win you have to resubmit and thus verify the price that the customer saw on the screen initially. The API will check if it matches the current price of William Hill. Note that if you send a wrong / outdated price you will receive the error message - Price changed.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateBetsliplegFormGroup() {
		return new FormGroup<BetsliplegFormProperties>({
			sort: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Betslippart {

		/** Indicates whether each way is available */
		eachWayAvailable?: boolean | null;

		/**
		 * Indicates if the bet can be used in a multiple bet
		 * Required
		 */
		includeInMultiple: boolean;

		/**
		 * To organise a number of outcome selections into one or more bet groups, such as a Single bet, a Double bet, a Trixie, etc
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		legGroup?: number | null;

		/** Indicates if there has been a change in the price */
		priceChanged?: boolean | null;

		/**
		 * Price denominator - will be ignored for types other than L (Fixed Price)
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priceDen: number;

		/**
		 * Price numerator - will be ignored for types other than L (Fixed Price)
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priceNum: number;

		/**
		 * The type of price selected. For example - ‘L’ (Fixed)
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priceType: number;

		/**
		 * The selection identifier
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		selectionId: number;

		/** Indicates whether the bet can be used in a single bet */
		singleAvailable?: boolean | null;

		/** Indicates whether starting prices are available */
		startingPriceAvailable?: boolean | null;

		/** Indicates the current status of the bet */
		status?: string | null;

		/** Indicates whether the status of the bet has changed */
		statusChanged?: boolean | null;
	}
	export interface BetslippartFormProperties {

		/** Indicates whether each way is available */
		eachWayAvailable: FormControl<boolean | null | undefined>,

		/**
		 * Indicates if the bet can be used in a multiple bet
		 * Required
		 */
		includeInMultiple: FormControl<boolean | null | undefined>,

		/**
		 * To organise a number of outcome selections into one or more bet groups, such as a Single bet, a Double bet, a Trixie, etc
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		legGroup: FormControl<number | null | undefined>,

		/** Indicates if there has been a change in the price */
		priceChanged: FormControl<boolean | null | undefined>,

		/**
		 * Price denominator - will be ignored for types other than L (Fixed Price)
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priceDen: FormControl<number | null | undefined>,

		/**
		 * Price numerator - will be ignored for types other than L (Fixed Price)
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priceNum: FormControl<number | null | undefined>,

		/**
		 * The type of price selected. For example - ‘L’ (Fixed)
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priceType: FormControl<number | null | undefined>,

		/**
		 * The selection identifier
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		selectionId: FormControl<number | null | undefined>,

		/** Indicates whether the bet can be used in a single bet */
		singleAvailable: FormControl<boolean | null | undefined>,

		/** Indicates whether starting prices are available */
		startingPriceAvailable: FormControl<boolean | null | undefined>,

		/** Indicates the current status of the bet */
		status: FormControl<string | null | undefined>,

		/** Indicates whether the status of the bet has changed */
		statusChanged: FormControl<boolean | null | undefined>,
	}
	export function CreateBetslippartFormGroup() {
		return new FormGroup<BetslippartFormProperties>({
			eachWayAvailable: new FormControl<boolean | null | undefined>(undefined),
			includeInMultiple: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			legGroup: new FormControl<number | null | undefined>(undefined),
			priceChanged: new FormControl<boolean | null | undefined>(undefined),
			priceDen: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			priceNum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			priceType: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			selectionId: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.pattern('^(OB_OU\d+)$')]),
			singleAvailable: new FormControl<boolean | null | undefined>(undefined),
			startingPriceAvailable: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(A|S)')]),
			statusChanged: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CashInResponse {

		/**
		 * Indicates whether the bet has been cashed-in.
		 * Required
		 */
		success: boolean;
	}
	export interface CashInResponseFormProperties {

		/**
		 * Indicates whether the bet has been cashed-in.
		 * Required
		 */
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateCashInResponseFormGroup() {
		return new FormGroup<CashInResponseFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ComplexBetRequestBody {

		/** A collection of bets */
		bets?: Array<Bet>;
	}
	export interface ComplexBetRequestBodyFormProperties {
	}
	export function CreateComplexBetRequestBodyFormGroup() {
		return new FormGroup<ComplexBetRequestBodyFormProperties>({
		});

	}

	export interface Error {

		/** A unique William Hill identifier for the error */
		code?: string | null;

		/** To help pinpoint the exact parameter where a request has failed */
		field?: string | null;

		/** A unique William Hill text string to enable you to identify the error (in English only) */
		message?: string | null;
		solution?: Solution;
	}
	export interface ErrorFormProperties {

		/** A unique William Hill identifier for the error */
		code: FormControl<string | null | undefined>,

		/** To help pinpoint the exact parameter where a request has failed */
		field: FormControl<string | null | undefined>,

		/** A unique William Hill text string to enable you to identify the error (in English only) */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Solution {

		/** The bet number */
		betNum?: string | null;

		/** The identifier of the event */
		eventId?: string | null;

		/** The updated handicap */
		handicap?: string | null;

		/** The handicap precision */
		handicapPrecision?: string | null;

		/** When the odds are shown in vulgar fractions this is the denominator of the fraction. For example: 2 in 5/2 */
		priceDen?: string | null;

		/** When the odds are shown in vulgar fractions this is the numerator of the fraction. For example: 5 in 5/2 */
		priceNum?: string | null;

		/** The selection handicap */
		selectionHandicap?: string | null;

		/** The identifier of the selection */
		selectionId?: string | null;
	}
	export interface SolutionFormProperties {

		/** The bet number */
		betNum: FormControl<string | null | undefined>,

		/** The identifier of the event */
		eventId: FormControl<string | null | undefined>,

		/** The updated handicap */
		handicap: FormControl<string | null | undefined>,

		/** The handicap precision */
		handicapPrecision: FormControl<string | null | undefined>,

		/** When the odds are shown in vulgar fractions this is the denominator of the fraction. For example: 2 in 5/2 */
		priceDen: FormControl<string | null | undefined>,

		/** When the odds are shown in vulgar fractions this is the numerator of the fraction. For example: 5 in 5/2 */
		priceNum: FormControl<string | null | undefined>,

		/** The selection handicap */
		selectionHandicap: FormControl<string | null | undefined>,

		/** The identifier of the selection */
		selectionId: FormControl<string | null | undefined>,
	}
	export function CreateSolutionFormGroup() {
		return new FormGroup<SolutionFormProperties>({
			betNum: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(OB_EV\d+)$')]),
			handicap: new FormControl<string | null | undefined>(undefined),
			handicapPrecision: new FormControl<string | null | undefined>(undefined),
			priceDen: new FormControl<string | null | undefined>(undefined),
			priceNum: new FormControl<string | null | undefined>(undefined),
			selectionHandicap: new FormControl<string | null | undefined>(undefined),
			selectionId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(OB_OU\d+)$')]),
		});

	}

	export interface Errors {
		errors?: Array<Error>;
	}
	export interface ErrorsFormProperties {
	}
	export function CreateErrorsFormGroup() {
		return new FormGroup<ErrorsFormProperties>({
		});

	}

	export interface SingleBetRequestBody {

		/** The delayed bet identifier */
		delayedBetId?: string | null;

		/** The ID number of the free bet token if used in conjunction with this bet */
		freeBetId?: string | null;

		/**
		 * When the odds are shown in vulgar fractions this is the denominator of the fraction. For example: 2 in 5/2
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priceDen?: number | null;

		/**
		 * When the odds are shown in vulgar fractions this is the numerator of the fraction. For example: 5 in 5/2
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priceNum?: number | null;

		/**
		 * The type of price taken by the customer when the bet is made. Can be one of the following: L - Live Fixed price, S - Starting price - Horse and Greyhound racing or G - Guaranteed best price.
		 * Required
		 */
		priceType: string;

		/**
		 * The unique ID for the selection of the bet
		 * Required
		 */
		selectionId: string;

		/**
		 * The amount of the stake placed on the bet
		 * Required
		 * Type: double
		 */
		stake: number;

		/**
		 * The type of bet placed. Can be one of the following: W - Win or E- EachWay
		 * Required
		 */
		type: string;
	}
	export interface SingleBetRequestBodyFormProperties {

		/** The delayed bet identifier */
		delayedBetId: FormControl<string | null | undefined>,

		/** The ID number of the free bet token if used in conjunction with this bet */
		freeBetId: FormControl<string | null | undefined>,

		/**
		 * When the odds are shown in vulgar fractions this is the denominator of the fraction. For example: 2 in 5/2
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priceDen: FormControl<number | null | undefined>,

		/**
		 * When the odds are shown in vulgar fractions this is the numerator of the fraction. For example: 5 in 5/2
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priceNum: FormControl<number | null | undefined>,

		/**
		 * The type of price taken by the customer when the bet is made. Can be one of the following: L - Live Fixed price, S - Starting price - Horse and Greyhound racing or G - Guaranteed best price.
		 * Required
		 */
		priceType: FormControl<string | null | undefined>,

		/**
		 * The unique ID for the selection of the bet
		 * Required
		 */
		selectionId: FormControl<string | null | undefined>,

		/**
		 * The amount of the stake placed on the bet
		 * Required
		 * Type: double
		 */
		stake: FormControl<number | null | undefined>,

		/**
		 * The type of bet placed. Can be one of the following: W - Win or E- EachWay
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSingleBetRequestBodyFormGroup() {
		return new FormGroup<SingleBetRequestBodyFormProperties>({
			delayedBetId: new FormControl<string | null | undefined>(undefined),
			freeBetId: new FormControl<string | null | undefined>(undefined),
			priceDen: new FormControl<number | null | undefined>(undefined),
			priceNum: new FormControl<number | null | undefined>(undefined),
			priceType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(L|S|G)$')]),
			selectionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(OB_OU\d+)$')]),
			stake: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(W|E)$')]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Places a multiple or a complex bet.
		 * Places a multiple or a complex bet.
		 * Post bet/complex
		 * @param {Array<string>} fields Specify an absolute field list to return (Comma Separated List)
		 * @param {Array<string>} include Specify fields in addition to the default to return (Comma Separated List)
		 * @param {Array<string>} exclude Specify fields from the default to exclude (Comma Separated List)
		 * @param {ComplexBetRequestBody} requestBody Complex bet request body
		 * @return {Array<BetPlaced>} Success
		 */
		PlaceComplexBet(fields: Array<string> | null | undefined, include: Array<string> | null | undefined, exclude: Array<string> | null | undefined, requestBody: ComplexBetRequestBody): Observable<Array<BetPlaced>> {
			return this.http.post<Array<BetPlaced>>(this.baseUri + 'bet/complex?' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + exclude?.map(z => `exclude=${encodeURIComponent(z)}`).join('&'), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Places a single bet
		 * Places a single bet. When placing a single bet using live inplay bets, the system might generate a bet delay to allow a time margin to negate the effects of major changes (for example, goals) to the market. Note that the amount of bet delay will vary by category and event type. A delayedBetId will be recieved that can be used to resubmit the bet.
		 * Post bet/single
		 * @param {Array<string>} fields Specify an absolute field list to return (Comma Separated List)
		 * @param {Array<string>} include Specify fields in addition to the default to return (Comma Separated List)
		 * @param {Array<string>} exclude Specify fields from the default to exclude (Comma Separated List)
		 * @param {SingleBetRequestBody} requestBody Single bet request body
		 * @return {Array<BetPlaced>} Success
		 */
		PlaceSingleBet(fields: Array<string> | null | undefined, include: Array<string> | null | undefined, exclude: Array<string> | null | undefined, requestBody: SingleBetRequestBody): Observable<Array<BetPlaced>> {
			return this.http.post<Array<BetPlaced>>(this.baseUri + 'bet/single?' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + exclude?.map(z => `exclude=${encodeURIComponent(z)}`).join('&'), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Organises the betslip when one or more selections are made. It returns a bet slip structure organised by betting opportunities.
		 * Post betslips
		 * @param {string} expanded Allows for all bets for given selections to be returned - not just the specified type
		 * @param {BetSlipRequest} requestBody Betslip Body
		 */
		ValidateBetslip(expanded: string | null | undefined, requestBody: BetSlipRequest): Observable<BetSlipResponse> {
			return this.http.post<BetSlipResponse>(this.baseUri + 'betslips?expanded=' + (expanded == null ? '' : encodeURIComponent(expanded)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns available free bets
		 * Retrieves the current free bets available for a customer.
		 * Get freebets
		 * @param {Array<string>} fields Specify an absolute field list to return (Comma Separated List)
		 * @param {Array<string>} include Specify fields in addition to the default to return (Comma Separated List)
		 * @param {Array<string>} exclude Specify fields from the default to exclude (Comma Separated List)
		 * @return {Array<FreeBetDetail>} Success
		 */
		GetFreeBets(fields: Array<string> | null | undefined, include: Array<string> | null | undefined, exclude: Array<string> | null | undefined): Observable<Array<FreeBetDetail>> {
			return this.http.get<Array<FreeBetDetail>>(this.baseUri + 'freebets?' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + exclude?.map(z => `exclude=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Retrieves the customer’s bet history.
		 * Retrieves the customer’s bet history. Options are available to organise the history in terms of date, bet type and settled and unsettled bets. The maximum number of bets and bet history pages retrieved can also be set.
		 * Get history
		 * @param {string} dateFrom The UTC FROM datetime from bets to be returned. (yyyy-MM-ddTHH:mm:ss)
		 * @param {string} dateTo The UTC TO datetime for bets to be returned. (yyyy-MM-ddTHH:mm:ss)
		 * @param {Array<string>} fields Specify an absolute field list to return (Comma Separated List)
		 * @param {Array<string>} include Specify fields in addition to the default to return (Comma Separated List)
		 * @param {Array<string>} exclude Specify fields from the default to exclude (Comma Separated List)
		 * @param {number} page The index of the page to return
		 * @param {number} pageSize The number of results per page
		 * @param {string} sort The order the response will be retuned by. i.e. transDateTime,desc. Only transDateTime can be used currently
		 * @param {boolean} settled Filter by settled bets. If omitted, both settled and unsettled will be returned.
		 * @return {BetHistoryResponse} Success
		 */
		GetBetHistory(dateFrom: string, dateTo: string, fields: Array<string> | null | undefined, include: Array<string> | null | undefined, exclude: Array<string> | null | undefined, page: number | null | undefined, pageSize: number | null | undefined, sort: string | null | undefined, settled: boolean | null | undefined): Observable<BetHistoryResponse> {
			return this.http.get<BetHistoryResponse>(this.baseUri + 'history?dateFrom=' + (dateFrom == null ? '' : encodeURIComponent(dateFrom)) + '&dateTo=' + (dateTo == null ? '' : encodeURIComponent(dateTo)) + '&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + exclude?.map(z => `exclude=${encodeURIComponent(z)}`).join('&') + '&page=' + page + '&pageSize=' + pageSize + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&settled=' + settled, {});
		}

		/**
		 * Allows a trusted application to cash in a bet (take a return on a bet) on behalf of the customer
		 * Allows a trusted application to cash in a bet (take a return on a bet) on behalf of the customer. If the customers monitor bets they can cash in a bet at any point before the event ends.
		 * Put {betId}/cashin
		 * @param {string} betId The identifier of the bet
		 * @param {number} cashInValue The cash in value of the bet
		 * @param {string} cashinBetDelayId The ID of this bet delay
		 * @return {CashInResponse} Success
		 */
		Cashin(betId: string, cashInValue: number, cashinBetDelayId: string): Observable<CashInResponse> {
			return this.http.put<CashInResponse>(this.baseUri + (betId == null ? '' : encodeURIComponent(betId)) + '/cashin&cashInValue=' + cashInValue + '&cashinBetDelayId=' + (cashinBetDelayId == null ? '' : encodeURIComponent(cashinBetDelayId)) + '', null, {});
		}
	}

}

