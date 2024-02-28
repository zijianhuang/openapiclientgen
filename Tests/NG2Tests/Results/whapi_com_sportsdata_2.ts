import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface class_ {

		/**
		 * The Id of the Class
		 * Required
		 */
		id: string;

		/** Indicates if the item is published */
		isPublished?: boolean | null;

		/**
		 * The description of the Class
		 * Required
		 */
		name: string;

		/** Indicates if the class is (A)ctive or (S)uspended */
		status?: string | null;
	}
	export interface class_FormProperties {

		/**
		 * The Id of the Class
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Indicates if the item is published */
		isPublished: FormControl<boolean | null | undefined>,

		/**
		 * The description of the Class
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Indicates if the class is (A)ctive or (S)uspended */
		status: FormControl<string | null | undefined>,
	}
	export function Createclass_FormGroup() {
		return new FormGroup<class_FormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isPublished: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClassesWrapper {
		classes?: Array<class_>;
	}
	export interface ClassesWrapperFormProperties {
	}
	export function CreateClassesWrapperFormGroup() {
		return new FormGroup<ClassesWrapperFormProperties>({
		});

	}

	export interface Competition {

		/** Delay in seconds between bet being sent and bet being placed */
		betInRunningDelay?: string | null;

		/** Indicates whether cashin is available on the events of this competition */
		cashinAvailable?: boolean | null;

		/** A list of channels that apply to this competition */
		channels?: Array<string>;

		/** The description of the competition */
		description?: string | null;

		/** Whether the competition should be displayed or not */
		displayed?: boolean | null;

		/** A list of flags that apply to this competition */
		flags?: Array<string>;

		/**
		 * The Id of the Competition
		 * Required
		 */
		id: string;

		/** Indicates if the item is published or not */
		isPublished?: boolean | null;

		/**
		 * The name of the competition
		 * Required
		 */
		name: string;

		/** The display order of the competition */
		order?: string | null;

		/** A list of IDs of parent entities */
		parentIds?: Array<string>;

		/**
		 * The status of the competition (A for Active, S for Suspended)
		 * Required
		 */
		status: string;
	}
	export interface CompetitionFormProperties {

		/** Delay in seconds between bet being sent and bet being placed */
		betInRunningDelay: FormControl<string | null | undefined>,

		/** Indicates whether cashin is available on the events of this competition */
		cashinAvailable: FormControl<boolean | null | undefined>,

		/** The description of the competition */
		description: FormControl<string | null | undefined>,

		/** Whether the competition should be displayed or not */
		displayed: FormControl<boolean | null | undefined>,

		/**
		 * The Id of the Competition
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Indicates if the item is published or not */
		isPublished: FormControl<boolean | null | undefined>,

		/**
		 * The name of the competition
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The display order of the competition */
		order: FormControl<string | null | undefined>,

		/**
		 * The status of the competition (A for Active, S for Suspended)
		 * Required
		 */
		status: FormControl<string | null | undefined>,
	}
	export function CreateCompetitionFormGroup() {
		return new FormGroup<CompetitionFormProperties>({
			betInRunningDelay: new FormControl<string | null | undefined>(undefined),
			cashinAvailable: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayed: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isPublished: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			order: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CompetitionsWrapper {
		competitions?: Array<Competition>;
	}
	export interface CompetitionsWrapperFormProperties {
	}
	export function CreateCompetitionsWrapperFormGroup() {
		return new FormGroup<CompetitionsWrapperFormProperties>({
		});

	}

	export interface Competitor {

		/**
		 * The age of the horse
		 * Type: double
		 */
		age?: number | null;

		/** The colour of the horse (There are 5 colours. b = Bay. bl = Black. br = Brown. ch = Chestnut. gr = Grey) */
		colour?: string | null;

		/**
		 * The stall number that the horse is allocated and will start from
		 * Type: double
		 */
		drawNumber?: number | null;

		/** The form of a horse is a record of significant events, mainly its performance in previous races. For example: The value 874-1 means that the horse finished 8th, then 7th in the next race, then 4th, hyphen here means he did not finish in the race, and was 1st in the last race he was running in. */
		formGuide?: string | null;

		/**
		 * Unique identifier of the competitor in the event
		 * Required
		 * Type: double
		 */
		id: number;

		/** The name of the Jockey who's riding the horse */
		jockeyName?: string | null;

		/** The name of competitor that the information is being given for */
		name?: string | null;

		/** Additional information about the horse's performance */
		overview?: string | null;

		/** The name of the horses owner(s) */
		ownerName?: string | null;

		/** The rating of the horse which is defined by a rating provider. It represents the horse's performance (the higher the rating, the better the horse is) */
		rating?: string | null;

		/** The sex of the horse (F|M) */
		sex?: string | null;

		/**
		 * The URL for the image that represents the 'silk' (Coathing pattern) worn by the jockey.
		 * Required
		 */
		silkImageUrl: string;

		/** The name of the horses trainer */
		trainerName?: string | null;

		/** The rider weight (in pounds) */
		weightPounds?: string | null;
	}
	export interface CompetitorFormProperties {

		/**
		 * The age of the horse
		 * Type: double
		 */
		age: FormControl<number | null | undefined>,

		/** The colour of the horse (There are 5 colours. b = Bay. bl = Black. br = Brown. ch = Chestnut. gr = Grey) */
		colour: FormControl<string | null | undefined>,

		/**
		 * The stall number that the horse is allocated and will start from
		 * Type: double
		 */
		drawNumber: FormControl<number | null | undefined>,

		/** The form of a horse is a record of significant events, mainly its performance in previous races. For example: The value 874-1 means that the horse finished 8th, then 7th in the next race, then 4th, hyphen here means he did not finish in the race, and was 1st in the last race he was running in. */
		formGuide: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of the competitor in the event
		 * Required
		 * Type: double
		 */
		id: FormControl<number | null | undefined>,

		/** The name of the Jockey who's riding the horse */
		jockeyName: FormControl<string | null | undefined>,

		/** The name of competitor that the information is being given for */
		name: FormControl<string | null | undefined>,

		/** Additional information about the horse's performance */
		overview: FormControl<string | null | undefined>,

		/** The name of the horses owner(s) */
		ownerName: FormControl<string | null | undefined>,

		/** The rating of the horse which is defined by a rating provider. It represents the horse's performance (the higher the rating, the better the horse is) */
		rating: FormControl<string | null | undefined>,

		/** The sex of the horse (F|M) */
		sex: FormControl<string | null | undefined>,

		/**
		 * The URL for the image that represents the 'silk' (Coathing pattern) worn by the jockey.
		 * Required
		 */
		silkImageUrl: FormControl<string | null | undefined>,

		/** The name of the horses trainer */
		trainerName: FormControl<string | null | undefined>,

		/** The rider weight (in pounds) */
		weightPounds: FormControl<string | null | undefined>,
	}
	export function CreateCompetitorFormGroup() {
		return new FormGroup<CompetitorFormProperties>({
			age: new FormControl<number | null | undefined>(undefined),
			colour: new FormControl<string | null | undefined>(undefined),
			drawNumber: new FormControl<number | null | undefined>(undefined),
			formGuide: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			jockeyName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			overview: new FormControl<string | null | undefined>(undefined),
			ownerName: new FormControl<string | null | undefined>(undefined),
			rating: new FormControl<string | null | undefined>(undefined),
			sex: new FormControl<string | null | undefined>(undefined),
			silkImageUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trainerName: new FormControl<string | null | undefined>(undefined),
			weightPounds: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Error {

		/** The William Hill API Error Code */
		code?: string | null;

		/** Optional field to point to the field with an error */
		field?: string | null;

		/** A String describing the error */
		message?: string | null;
	}
	export interface ErrorFormProperties {

		/** The William Hill API Error Code */
		code: FormControl<string | null | undefined>,

		/** Optional field to point to the field with an error */
		field: FormControl<string | null | undefined>,

		/** A String describing the error */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorsWrapper {
		errors?: Array<Error>;
	}
	export interface ErrorsWrapperFormProperties {
	}
	export function CreateErrorsWrapperFormGroup() {
		return new FormGroup<ErrorsWrapperFormProperties>({
		});

	}

	export interface Event {

		/** Delay in seconds between bet being sent and bet being placed */
		betInRunningDelay?: string | null;

		/** Betting status of the event */
		bettingStatus?: string | null;

		/** Whether cashin is available on this event */
		cashinAvailable?: boolean | null;

		/** A list of channels that apply to this event */
		channels?: Array<string>;

		/** A string indicating the country code of this event if available */
		country?: string | null;

		/** The description of the event */
		description?: string | null;

		/** whether the event should be displayed or not */
		displayed?: boolean | null;

		/** What type of event is this? (e.g. MTCH, TRNMT) */
		eventSort?: string | null;

		/** A list of flags that apply to this event */
		flags?: Array<string>;

		/** Whether this event has inplay markets */
		hasInPlayMarkets?: boolean | null;

		/** Whether this event has Live Prices */
		hasLivePrices?: boolean | null;

		/**
		 * The Id of the event
		 * Required
		 */
		id: string;

		/** Whether this event has started and therefore is inplay */
		isInPlay?: boolean | null;

		/** Indicates if the item is published */
		isPublished?: boolean | null;

		/** Count of active markets in play */
		marketCountActiveInPlay?: string | null;

		/** count of active market pre-match */
		marketCountActivePreMatch?: string | null;

		/** Total market count */
		marketCountActiveTotal?: string | null;

		/** Total inplay markets */
		marketCountInPlay?: string | null;

		/** Total prematch markets */
		marketCountPreMatch?: string | null;

		/** A list of markets belonging to this event */
		markets?: Array<Market>;

		/**
		 * The name of the event
		 * Required
		 */
		name: string;

		/** Display order of the event */
		order?: string | null;

		/** A list of IDs of parent entities */
		parentIds?: Array<string>;

		/** Race number for race events */
		raceNum?: string | null;

		/** Whether the event has been settled */
		settled?: boolean | null;

		/**
		 * The start date and time of the event
		 * Required
		 */
		startDateTime: string;

		/**
		 * Status of the event (A for Active, S for Suspended)
		 * Required
		 */
		status: string;
	}
	export interface EventFormProperties {

		/** Delay in seconds between bet being sent and bet being placed */
		betInRunningDelay: FormControl<string | null | undefined>,

		/** Betting status of the event */
		bettingStatus: FormControl<string | null | undefined>,

		/** Whether cashin is available on this event */
		cashinAvailable: FormControl<boolean | null | undefined>,

		/** A string indicating the country code of this event if available */
		country: FormControl<string | null | undefined>,

		/** The description of the event */
		description: FormControl<string | null | undefined>,

		/** whether the event should be displayed or not */
		displayed: FormControl<boolean | null | undefined>,

		/** What type of event is this? (e.g. MTCH, TRNMT) */
		eventSort: FormControl<string | null | undefined>,

		/** Whether this event has inplay markets */
		hasInPlayMarkets: FormControl<boolean | null | undefined>,

		/** Whether this event has Live Prices */
		hasLivePrices: FormControl<boolean | null | undefined>,

		/**
		 * The Id of the event
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Whether this event has started and therefore is inplay */
		isInPlay: FormControl<boolean | null | undefined>,

		/** Indicates if the item is published */
		isPublished: FormControl<boolean | null | undefined>,

		/** Count of active markets in play */
		marketCountActiveInPlay: FormControl<string | null | undefined>,

		/** count of active market pre-match */
		marketCountActivePreMatch: FormControl<string | null | undefined>,

		/** Total market count */
		marketCountActiveTotal: FormControl<string | null | undefined>,

		/** Total inplay markets */
		marketCountInPlay: FormControl<string | null | undefined>,

		/** Total prematch markets */
		marketCountPreMatch: FormControl<string | null | undefined>,

		/**
		 * The name of the event
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Display order of the event */
		order: FormControl<string | null | undefined>,

		/** Race number for race events */
		raceNum: FormControl<string | null | undefined>,

		/** Whether the event has been settled */
		settled: FormControl<boolean | null | undefined>,

		/**
		 * The start date and time of the event
		 * Required
		 */
		startDateTime: FormControl<string | null | undefined>,

		/**
		 * Status of the event (A for Active, S for Suspended)
		 * Required
		 */
		status: FormControl<string | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			betInRunningDelay: new FormControl<string | null | undefined>(undefined),
			bettingStatus: new FormControl<string | null | undefined>(undefined),
			cashinAvailable: new FormControl<boolean | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayed: new FormControl<boolean | null | undefined>(undefined),
			eventSort: new FormControl<string | null | undefined>(undefined),
			hasInPlayMarkets: new FormControl<boolean | null | undefined>(undefined),
			hasLivePrices: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isInPlay: new FormControl<boolean | null | undefined>(undefined),
			isPublished: new FormControl<boolean | null | undefined>(undefined),
			marketCountActiveInPlay: new FormControl<string | null | undefined>(undefined),
			marketCountActivePreMatch: new FormControl<string | null | undefined>(undefined),
			marketCountActiveTotal: new FormControl<string | null | undefined>(undefined),
			marketCountInPlay: new FormControl<string | null | undefined>(undefined),
			marketCountPreMatch: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			order: new FormControl<string | null | undefined>(undefined),
			raceNum: new FormControl<string | null | undefined>(undefined),
			settled: new FormControl<boolean | null | undefined>(undefined),
			startDateTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Market {

		/** Antepost Market */
		antepostMarket?: boolean | null;

		/** BOG Available */
		bestOddsGuaranteed?: boolean | null;
		betInRunningDelay?: string | null;

		/** A channel indicates where an entry can be accessed. Its made up of a string containing a number of characters */
		channels?: string | null;

		/** Additional market information */
		description?: string | null;

		/** Indicates if the item should be displayed */
		displayed?: boolean | null;

		/** Indicates if each way betting is available */
		eachWay?: boolean | null;

		/**
		 * Where each way terms are stored with the bet, this holds the denominator for the each way
		 * factor. For example, if the each way terms are: 5 places pay ¼, this value will be 4
		 */
		eachWayFactorDen?: string | null;

		/**
		 * Where each way terms are stored with the bet, this holds the numerator for the each way
		 * factor. For example, if the each way terms are: 5 places pay ¼, this value will be 1
		 */
		eachWayFactorNum?: string | null;

		/**
		 * Where each way terms are stored with the bet, this holds the number of places paid. For
		 * example, if the each way terms are: 5 places pay ¼, this value will be 5
		 */
		eachWayPlaces?: string | null;

		/** Early Pricing Active */
		earlyPriceAvailable?: boolean | null;

		/** Is tricast betting available */
		fcAvailable?: boolean | null;

		/** Is firstFour betting available */
		firstFourAvailable?: boolean | null;

		/** Is firstPrice betting available */
		firstPriceAvailable?: boolean | null;

		/** Flags for the market */
		flags?: string | null;

		/** Handicap score */
		hcapMakeup?: string | null;

		/** This value indicates the current handicap set on the Event Market, assuming it has a handicap type. */
		hcapValue?: string | null;

		/**
		 * ID (e.g. OB_MA{id} (e.g. OB_MA1), OB_SP (Sport), OB_CL (Class), OB_TY (Competition / type), OB_EV (event) OB_MA (Market), OB_OU (Selection / outcome)
		 * Required
		 */
		id: string;

		/** Is this an in-play market */
		isInPlayMarket?: boolean | null;

		/** Indicates if the item is published */
		isPublished?: boolean | null;

		/** Live Price */
		livePriceAvailable?: boolean | null;

		/** The collectionId of the Market Group inherited from */
		marketGroupCollectionId?: string | null;

		/** The group id the market was inherited from */
		marketGroupId?: string | null;

		/** The group name the market was inherited from */
		marketGroupName?: string | null;

		/** The sort defines the market template */
		marketSort?: string | null;

		/**
		 * Human-friendly name of the market
		 * Required
		 */
		name: string;

		/** Display order of the items (Ascending) */
		order?: string | null;

		/** A list of IDs of parent entities */
		parentIds?: Array<string>;

		/** Is firstFour betting available */
		quinellaAvailable?: boolean | null;

		/** A list of selections belonging to the market */
		selections?: Array<Selection>;

		/** Whether the market is settled or not */
		settled?: boolean | null;

		/** Starting Price Available */
		startingPriceAvailable?: boolean | null;

		/**
		 * Indicates the status of the Market (A = Active/S = Suspended)
		 * Required
		 */
		status: string;

		/** Is forecast betting available */
		tcAvailable?: boolean | null;
	}
	export interface MarketFormProperties {

		/** Antepost Market */
		antepostMarket: FormControl<boolean | null | undefined>,

		/** BOG Available */
		bestOddsGuaranteed: FormControl<boolean | null | undefined>,
		betInRunningDelay: FormControl<string | null | undefined>,

		/** A channel indicates where an entry can be accessed. Its made up of a string containing a number of characters */
		channels: FormControl<string | null | undefined>,

		/** Additional market information */
		description: FormControl<string | null | undefined>,

		/** Indicates if the item should be displayed */
		displayed: FormControl<boolean | null | undefined>,

		/** Indicates if each way betting is available */
		eachWay: FormControl<boolean | null | undefined>,

		/**
		 * Where each way terms are stored with the bet, this holds the denominator for the each way
		 * factor. For example, if the each way terms are: 5 places pay ¼, this value will be 4
		 */
		eachWayFactorDen: FormControl<string | null | undefined>,

		/**
		 * Where each way terms are stored with the bet, this holds the numerator for the each way
		 * factor. For example, if the each way terms are: 5 places pay ¼, this value will be 1
		 */
		eachWayFactorNum: FormControl<string | null | undefined>,

		/**
		 * Where each way terms are stored with the bet, this holds the number of places paid. For
		 * example, if the each way terms are: 5 places pay ¼, this value will be 5
		 */
		eachWayPlaces: FormControl<string | null | undefined>,

		/** Early Pricing Active */
		earlyPriceAvailable: FormControl<boolean | null | undefined>,

		/** Is tricast betting available */
		fcAvailable: FormControl<boolean | null | undefined>,

		/** Is firstFour betting available */
		firstFourAvailable: FormControl<boolean | null | undefined>,

		/** Is firstPrice betting available */
		firstPriceAvailable: FormControl<boolean | null | undefined>,

		/** Flags for the market */
		flags: FormControl<string | null | undefined>,

		/** Handicap score */
		hcapMakeup: FormControl<string | null | undefined>,

		/** This value indicates the current handicap set on the Event Market, assuming it has a handicap type. */
		hcapValue: FormControl<string | null | undefined>,

		/**
		 * ID (e.g. OB_MA{id} (e.g. OB_MA1), OB_SP (Sport), OB_CL (Class), OB_TY (Competition / type), OB_EV (event) OB_MA (Market), OB_OU (Selection / outcome)
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Is this an in-play market */
		isInPlayMarket: FormControl<boolean | null | undefined>,

		/** Indicates if the item is published */
		isPublished: FormControl<boolean | null | undefined>,

		/** Live Price */
		livePriceAvailable: FormControl<boolean | null | undefined>,

		/** The collectionId of the Market Group inherited from */
		marketGroupCollectionId: FormControl<string | null | undefined>,

		/** The group id the market was inherited from */
		marketGroupId: FormControl<string | null | undefined>,

		/** The group name the market was inherited from */
		marketGroupName: FormControl<string | null | undefined>,

		/** The sort defines the market template */
		marketSort: FormControl<string | null | undefined>,

		/**
		 * Human-friendly name of the market
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Display order of the items (Ascending) */
		order: FormControl<string | null | undefined>,

		/** Is firstFour betting available */
		quinellaAvailable: FormControl<boolean | null | undefined>,

		/** Whether the market is settled or not */
		settled: FormControl<boolean | null | undefined>,

		/** Starting Price Available */
		startingPriceAvailable: FormControl<boolean | null | undefined>,

		/**
		 * Indicates the status of the Market (A = Active/S = Suspended)
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/** Is forecast betting available */
		tcAvailable: FormControl<boolean | null | undefined>,
	}
	export function CreateMarketFormGroup() {
		return new FormGroup<MarketFormProperties>({
			antepostMarket: new FormControl<boolean | null | undefined>(undefined),
			bestOddsGuaranteed: new FormControl<boolean | null | undefined>(undefined),
			betInRunningDelay: new FormControl<string | null | undefined>(undefined),
			channels: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayed: new FormControl<boolean | null | undefined>(undefined),
			eachWay: new FormControl<boolean | null | undefined>(undefined),
			eachWayFactorDen: new FormControl<string | null | undefined>(undefined),
			eachWayFactorNum: new FormControl<string | null | undefined>(undefined),
			eachWayPlaces: new FormControl<string | null | undefined>(undefined),
			earlyPriceAvailable: new FormControl<boolean | null | undefined>(undefined),
			fcAvailable: new FormControl<boolean | null | undefined>(undefined),
			firstFourAvailable: new FormControl<boolean | null | undefined>(undefined),
			firstPriceAvailable: new FormControl<boolean | null | undefined>(undefined),
			flags: new FormControl<string | null | undefined>(undefined),
			hcapMakeup: new FormControl<string | null | undefined>(undefined),
			hcapValue: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isInPlayMarket: new FormControl<boolean | null | undefined>(undefined),
			isPublished: new FormControl<boolean | null | undefined>(undefined),
			livePriceAvailable: new FormControl<boolean | null | undefined>(undefined),
			marketGroupCollectionId: new FormControl<string | null | undefined>(undefined),
			marketGroupId: new FormControl<string | null | undefined>(undefined),
			marketGroupName: new FormControl<string | null | undefined>(undefined),
			marketSort: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			order: new FormControl<string | null | undefined>(undefined),
			quinellaAvailable: new FormControl<boolean | null | undefined>(undefined),
			settled: new FormControl<boolean | null | undefined>(undefined),
			startingPriceAvailable: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tcAvailable: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Selection {

		/** The cashin price denominator */
		cashinPriceDen?: string | null;

		/** The cashin price numerator */
		cashinPriceNum?: string | null;

		/** A list of channels that applies to this selection */
		channels?: Array<string>;

		/** The away score in a correct score event */
		csAway?: string | null;

		/** The home score in a correct score event */
		csHome?: string | null;

		/** Denominator of the price */
		currentPriceDen?: string | null;

		/** Numerator of the price */
		currentPriceNum?: string | null;

		/** The description of the selection */
		description?: string | null;

		/** Wether this selection should be displayed or not */
		displayed?: boolean | null;

		/**
		 * The Id of the selection
		 * Required
		 */
		id: string;

		/** Indicates if the item is published */
		isPublished?: boolean | null;

		/**
		 * The name of the selection
		 * Required
		 */
		name: string;

		/**
		 * The selection price, in decimal format
		 * Required
		 * Type: decimal
		 */
		oddsDecimal: number;

		/**
		 * The selection price, in fractional format
		 * Required
		 */
		oddsFractional: string;

		/** The display order of the selection */
		order?: string | null;

		/** A list of IDs of parent entities */
		parentIds?: Array<string>;
		priceFormatted?: PriceFormatted;

		/** The result of this selection */
		result?: string | null;

		/** football Result */
		resultType?: string | null;

		/** The runner number in race events */
		runnerNum?: string | null;

		/** Wether this selection has been settled or not */
		settled?: boolean | null;

		/**
		 * The status of the selection (A for Active or S for Suspended)
		 * Required
		 */
		status: string;
	}
	export interface SelectionFormProperties {

		/** The cashin price denominator */
		cashinPriceDen: FormControl<string | null | undefined>,

		/** The cashin price numerator */
		cashinPriceNum: FormControl<string | null | undefined>,

		/** The away score in a correct score event */
		csAway: FormControl<string | null | undefined>,

		/** The home score in a correct score event */
		csHome: FormControl<string | null | undefined>,

		/** Denominator of the price */
		currentPriceDen: FormControl<string | null | undefined>,

		/** Numerator of the price */
		currentPriceNum: FormControl<string | null | undefined>,

		/** The description of the selection */
		description: FormControl<string | null | undefined>,

		/** Wether this selection should be displayed or not */
		displayed: FormControl<boolean | null | undefined>,

		/**
		 * The Id of the selection
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Indicates if the item is published */
		isPublished: FormControl<boolean | null | undefined>,

		/**
		 * The name of the selection
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The selection price, in decimal format
		 * Required
		 * Type: decimal
		 */
		oddsDecimal: FormControl<number | null | undefined>,

		/**
		 * The selection price, in fractional format
		 * Required
		 */
		oddsFractional: FormControl<string | null | undefined>,

		/** The display order of the selection */
		order: FormControl<string | null | undefined>,

		/** The result of this selection */
		result: FormControl<string | null | undefined>,

		/** football Result */
		resultType: FormControl<string | null | undefined>,

		/** The runner number in race events */
		runnerNum: FormControl<string | null | undefined>,

		/** Wether this selection has been settled or not */
		settled: FormControl<boolean | null | undefined>,

		/**
		 * The status of the selection (A for Active or S for Suspended)
		 * Required
		 */
		status: FormControl<string | null | undefined>,
	}
	export function CreateSelectionFormGroup() {
		return new FormGroup<SelectionFormProperties>({
			cashinPriceDen: new FormControl<string | null | undefined>(undefined),
			cashinPriceNum: new FormControl<string | null | undefined>(undefined),
			csAway: new FormControl<string | null | undefined>(undefined),
			csHome: new FormControl<string | null | undefined>(undefined),
			currentPriceDen: new FormControl<string | null | undefined>(undefined),
			currentPriceNum: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayed: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isPublished: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			oddsDecimal: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			oddsFractional: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			order: new FormControl<string | null | undefined>(undefined),
			result: new FormControl<string | null | undefined>(undefined),
			resultType: new FormControl<string | null | undefined>(undefined),
			runnerNum: new FormControl<string | null | undefined>(undefined),
			settled: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface EventCompetitorsWrapper {
		competitors?: Array<Competitor>;
	}
	export interface EventCompetitorsWrapperFormProperties {
	}
	export function CreateEventCompetitorsWrapperFormGroup() {
		return new FormGroup<EventCompetitorsWrapperFormProperties>({
		});

	}

	export interface EventsWrapper {
		events?: Array<Event>;
	}
	export interface EventsWrapperFormProperties {
	}
	export function CreateEventsWrapperFormGroup() {
		return new FormGroup<EventsWrapperFormProperties>({
		});

	}

	export interface MarketGroupsWrapper {
		marketGroups?: Array<Marketgroup>;
	}
	export interface MarketGroupsWrapperFormProperties {
	}
	export function CreateMarketGroupsWrapperFormGroup() {
		return new FormGroup<MarketGroupsWrapperFormProperties>({
		});

	}

	export interface Marketgroup {

		/** The collectionId of the Market Group, If it has one */
		collectionId?: string | null;

		/** The CompetitionId of the Market Group */
		competitionId?: string | null;

		/**
		 * The Id of the Market Group
		 * Required
		 */
		id: string;

		/** The market sort of this group */
		marketSort?: string | null;

		/**
		 * The Name of the Market Group
		 * Required
		 */
		name: string;
	}
	export interface MarketgroupFormProperties {

		/** The collectionId of the Market Group, If it has one */
		collectionId: FormControl<string | null | undefined>,

		/** The CompetitionId of the Market Group */
		competitionId: FormControl<string | null | undefined>,

		/**
		 * The Id of the Market Group
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** The market sort of this group */
		marketSort: FormControl<string | null | undefined>,

		/**
		 * The Name of the Market Group
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateMarketgroupFormGroup() {
		return new FormGroup<MarketgroupFormProperties>({
			collectionId: new FormControl<string | null | undefined>(undefined),
			competitionId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			marketSort: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MarketsWrapper {
		markets?: Array<Market>;
	}
	export interface MarketsWrapperFormProperties {
	}
	export function CreateMarketsWrapperFormGroup() {
		return new FormGroup<MarketsWrapperFormProperties>({
		});

	}

	export interface SelectionsWrapper {
		selections?: Array<Selection>;
	}
	export interface SelectionsWrapperFormProperties {
	}
	export function CreateSelectionsWrapperFormGroup() {
		return new FormGroup<SelectionsWrapperFormProperties>({
		});

	}

	export interface Sport {

		/**
		 * The Id of the Sport
		 * Required
		 */
		id: string;

		/** Indicates if the item is published */
		isPublished?: boolean | null;

		/**
		 * The description of the Sport
		 * Required
		 */
		name: string;
	}
	export interface SportFormProperties {

		/**
		 * The Id of the Sport
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Indicates if the item is published */
		isPublished: FormControl<boolean | null | undefined>,

		/**
		 * The description of the Sport
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSportFormGroup() {
		return new FormGroup<SportFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isPublished: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SportsWrapper {
		sports?: Array<Sport>;
	}
	export interface SportsWrapperFormProperties {
	}
	export function CreateSportsWrapperFormGroup() {
		return new FormGroup<SportsWrapperFormProperties>({
		});

	}

	export interface TopBet {
		competition?: Competition;
		event?: Event;
		market?: Market;
		selection?: Selection;
		sport?: Sport;

		/** The weighting of the bet in the Top bets ranking */
		weight?: string | null;
	}
	export interface TopBetFormProperties {

		/** The weighting of the bet in the Top bets ranking */
		weight: FormControl<string | null | undefined>,
	}
	export function CreateTopBetFormGroup() {
		return new FormGroup<TopBetFormProperties>({
			weight: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TopBetsWrapper {
		bets?: Array<TopBet>;
	}
	export interface TopBetsWrapperFormProperties {
	}
	export function CreateTopBetsWrapperFormGroup() {
		return new FormGroup<TopBetsWrapperFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves a list of competitions for a given class id.
		 * Retrieves a list of competitions for a given class id.
		 * Get classes/{classId}/competitions/
		 * @param {string} classId The class id to retrieve information for.
		 * @param {string} isPublished Specify whether only active entities should be returned, according to the William Hill definition of active
		 * @param {Array<string>} fields Specify an absolute field list to return (Comma-Separated List)
		 * @param {Array<string>} include Specify fields in addition to the default to return (Comma-Separated List)
		 * @param {Array<string>} exclude Specify fields from the default to exclude (Comma-Separated List)
		 * @param {string} displayed Specify whether to return displayed entities or not
		 * @param {string} channel Specify a channel filter and only results from that channel will be returned
		 * @param {string} status Specify a status to filter results by. This is currently A (active) or S (suspended)
		 * @param {string} sort The field to order the response by, followed by the order. For example: name,desc
		 * @param {number} offset Skip over a number of elements by specifying a start value for the query
		 * @param {number} limit Specify the number of results to return
		 * @param {string} culture Code used to return responses in language other than English, acceptable values are de-DE|es-ES|fr-FR|nn-NO|fi-FI|ru-RU|pt-PT|hu-HU|sl-SL|ga-IE|en-CA|sr-Latn|sv-SE|el=GR|zh-CHS|it-IT|zh-CHT|cs-CZ|de-AT|ja-JP|pl-PL|da-DK|ro-RO|nl-NL|tr-TR
		 * @return {CompetitionsWrapper} Success
		 */
		GetCompetitionsForClass(classId: string, isPublished: string | null | undefined, fields: Array<string> | null | undefined, include: Array<string> | null | undefined, exclude: Array<string> | null | undefined, displayed: string | null | undefined, channel: string | null | undefined, status: string | null | undefined, sort: string | null | undefined, offset: number | null | undefined, limit: number | null | undefined, culture: string | null | undefined): Observable<CompetitionsWrapper> {
			return this.http.get<CompetitionsWrapper>(this.baseUri + 'classes/' + (classId == null ? '' : encodeURIComponent(classId)) + '/competitions/&isPublished=' + (isPublished == null ? '' : encodeURIComponent(isPublished)) + '&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + exclude?.map(z => `exclude=${encodeURIComponent(z)}`).join('&') + '&displayed=' + (displayed == null ? '' : encodeURIComponent(displayed)) + '&channel=' + (channel == null ? '' : encodeURIComponent(channel)) + '&status=' + (status == null ? '' : encodeURIComponent(status)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&offset=' + offset + '&limit=' + limit + '&culture=' + (culture == null ? '' : encodeURIComponent(culture)), {});
		}

		/**
		 * Retrieves a list of events for a given class id.
		 * Retrieves a list of events for a given class id. 'includeAllDescendants' parameter should be accompanied with 'date' filter or one of 'dateFrom' and 'dateTo' filters.
		 * Get classes/{classId}/events/
		 * @param {string} classId The class id to retrieve information for.
		 * @param {string} isPublished Specify whether only active entities should be returned, according to the William Hill definition of active
		 * @param {Array<string>} fields Specify an absolute field list to return (Comma-Separated List)
		 * @param {Array<string>} include Specify fields in addition to the default to return (Comma-Separated List)
		 * @param {Array<string>} exclude Specify fields from the default to exclude (Comma-Separated List)
		 * @param {string} displayed Specify whether to return displayed entities or not
		 * @param {string} channel Specify a channel filter and only results from that channel will be returned
		 * @param {boolean} settled Specify wether only settled entities should be returned
		 * @param {boolean} includeEmpty When declared as false it should exclude markets and events that have no selections / markets
		 * @param {string} status Specify a status to filter results by. This is currently A (active) or S (suspended)
		 * @param {string} sort The field to order the response by, followed by the order. For example: name,desc
		 * @param {number} offset Skip over a number of elements by specifying a start value for the query
		 * @param {number} limit Specify the number of results to return
		 * @param {boolean} headlineSummary Return only headline markets (Markets with the lowest display order) Either 1 InPlay and 1 Pre-Match, or the amount specified in marketCount, if available. Markets and Outcomes will be returned.
		 * @param {boolean} includeAllDescendants Include every descendant in the below heirarchy
		 * @param {boolean} isInPlay Show only events that are in-play
		 * @param {number} marketCount Specify the number of markets to return when requesting headlineSummary. This count of InPlay and Pre-Match markets will be returned.For example, when specifying 1, 1 In Play and 1 Pre Match market will be returned.
		 * @param {string} date Return only events for the specified date (yyyy-MM-dd).
		 * @param {string} dateFrom The UTC datetime from the events to be returned. (yyyy-MM-ddTHH:mm:ss)
		 * @param {string} dateTo The UTC datetime TO the events to be returned. (yyyy-MM-ddTHH:mm:ss)
		 * @param {string} eventSort Filter event by event sort
		 * @param {string} culture Code used to return responses in language other than English, acceptable values are de-DE|es-ES|fr-FR|nn-NO|fi-FI|ru-RU|pt-PT|hu-HU|sl-SL|ga-IE|en-CA|sr-Latn|sv-SE|el=GR|zh-CHS|it-IT|zh-CHT|cs-CZ|de-AT|ja-JP|pl-PL|da-DK|ro-RO|nl-NL|tr-TR
		 * @param {string} marketPublished Specify whether only active entities should be returned, according to the William Hill definition of active
		 * @param {string} marketStatus Specify a status to filter results by. This is currently A (active) or S (suspended)
		 * @param {string} marketDisplayed Specify whether to return displayed entities or not
		 * @param {string} marketChannel Specify a channel filter and only results from that channel will be returned
		 * @param {string} marketSort Filter by market sort (e.g. MR (match result) -- (Outright)).
		 * @param {string} marketEW Specify whether to return markets with each way betting or those without
		 * @param {string} selectionStatus Specify a status to filter results by. This is currently A (active) or S (suspended)
		 * @param {string} selectionChannel Specify a channel filter and only results from that channel will be returned
		 * @param {string} selectionPublished Specify whether only active entities should be returned, according to the William Hill definition of active
		 * @return {EventsWrapper} Success
		 */
		GetEventsForClass(classId: string, isPublished: string | null | undefined, fields: Array<string> | null | undefined, include: Array<string> | null | undefined, exclude: Array<string> | null | undefined, displayed: string | null | undefined, channel: string | null | undefined, settled: boolean | null | undefined, includeEmpty: boolean | null | undefined, status: string | null | undefined, sort: string | null | undefined, offset: number | null | undefined, limit: number | null | undefined, headlineSummary: boolean | null | undefined, includeAllDescendants: boolean | null | undefined, isInPlay: boolean | null | undefined, marketCount: number | null | undefined, date: string | null | undefined, dateFrom: string | null | undefined, dateTo: string | null | undefined, eventSort: string | null | undefined, culture: string | null | undefined, marketPublished: string | null | undefined, marketStatus: string | null | undefined, marketDisplayed: string | null | undefined, marketChannel: string | null | undefined, marketSort: string | null | undefined, marketEW: string | null | undefined, selectionStatus: string | null | undefined, selectionChannel: string | null | undefined, selectionPublished: string | null | undefined): Observable<EventsWrapper> {
			return this.http.get<EventsWrapper>(this.baseUri + 'classes/' + (classId == null ? '' : encodeURIComponent(classId)) + '/events/&isPublished=' + (isPublished == null ? '' : encodeURIComponent(isPublished)) + '&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + exclude?.map(z => `exclude=${encodeURIComponent(z)}`).join('&') + '&displayed=' + (displayed == null ? '' : encodeURIComponent(displayed)) + '&channel=' + (channel == null ? '' : encodeURIComponent(channel)) + '&settled=' + settled + '&includeEmpty=' + includeEmpty + '&status=' + (status == null ? '' : encodeURIComponent(status)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&offset=' + offset + '&limit=' + limit + '&headlineSummary=' + headlineSummary + '&includeAllDescendants=' + includeAllDescendants + '&isInPlay=' + isInPlay + '&marketCount=' + marketCount + '&date=' + (date == null ? '' : encodeURIComponent(date)) + '&dateFrom=' + (dateFrom == null ? '' : encodeURIComponent(dateFrom)) + '&dateTo=' + (dateTo == null ? '' : encodeURIComponent(dateTo)) + '&eventSort=' + (eventSort == null ? '' : encodeURIComponent(eventSort)) + '&culture=' + (culture == null ? '' : encodeURIComponent(culture)) + '&marketPublished=' + (marketPublished == null ? '' : encodeURIComponent(marketPublished)) + '&marketStatus=' + (marketStatus == null ? '' : encodeURIComponent(marketStatus)) + '&marketDisplayed=' + (marketDisplayed == null ? '' : encodeURIComponent(marketDisplayed)) + '&marketChannel=' + (marketChannel == null ? '' : encodeURIComponent(marketChannel)) + '&marketSort=' + (marketSort == null ? '' : encodeURIComponent(marketSort)) + '&marketEW=' + (marketEW == null ? '' : encodeURIComponent(marketEW)) + '&selectionStatus=' + (selectionStatus == null ? '' : encodeURIComponent(selectionStatus)) + '&selectionChannel=' + (selectionChannel == null ? '' : encodeURIComponent(selectionChannel)) + '&selectionPublished=' + (selectionPublished == null ? '' : encodeURIComponent(selectionPublished)), {});
		}

		/**
		 * Retrieves a specific competition
		 * Retrieves a specific competition
		 * Get competitions/{competitionId}
		 * @param {string} competitionId The competition id to retrieve information for.
		 * @param {Array<string>} fields Specify an absolute field list to return (Comma-Separated List)
		 * @param {Array<string>} include Specify fields in addition to the default to return (Comma-Separated List)
		 * @param {Array<string>} exclude Specify fields from the default to exclude (Comma-Separated List)
		 * @param {string} culture Code used to return responses in language other than English, acceptable values are de-DE|es-ES|fr-FR|nn-NO|fi-FI|ru-RU|pt-PT|hu-HU|sl-SL|ga-IE|en-CA|sr-Latn|sv-SE|el=GR|zh-CHS|it-IT|zh-CHT|cs-CZ|de-AT|ja-JP|pl-PL|da-DK|ro-RO|nl-NL|tr-TR
		 * @return {Competition} Success
		 */
		GetCompetition(competitionId: string, fields: Array<string> | null | undefined, include: Array<string> | null | undefined, exclude: Array<string> | null | undefined, culture: string | null | undefined): Observable<Competition> {
			return this.http.get<Competition>(this.baseUri + 'competitions/' + (competitionId == null ? '' : encodeURIComponent(competitionId)) + '&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + exclude?.map(z => `exclude=${encodeURIComponent(z)}`).join('&') + '&culture=' + (culture == null ? '' : encodeURIComponent(culture)), {});
		}

		/**
		 * Retrieves a list of events for a given competition id.
		 * Retrieves a list of events for a given competition id. 'headlineSummary' and includeAllDescendants parameters should be accompanied with 'date' filter or one of 'dateFrom' and 'dateTo' filters.
		 * Get competitions/{competitionId}/events/
		 * @param {string} competitionId The competition id to retrieve information for.
		 * @param {string} isPublished Specify whether only active entities should be returned, according to the William Hill definition of active
		 * @param {Array<string>} fields Specify an absolute field list to return (Comma-Separated List)
		 * @param {Array<string>} include Specify fields in addition to the default to return (Comma-Separated List)
		 * @param {Array<string>} exclude Specify fields from the default to exclude (Comma-Separated List)
		 * @param {string} displayed Specify whether to return displayed entities or not
		 * @param {string} channel Specify a channel filter and only results from that channel will be returned
		 * @param {boolean} settled Specify wether only settled entities should be returned
		 * @param {boolean} includeEmpty When declared as false it should exclude markets and events that have no selections / markets
		 * @param {string} status Specify a status to filter results by. This is currently A (active) or S (suspended)
		 * @param {string} sort The field to order the response by, followed by the order. For example: name,desc
		 * @param {number} offset Skip over a number of elements by specifying a start value for the query
		 * @param {number} limit Specify the number of results to return
		 * @param {boolean} headlineSummary Return only headline markets (Markets with the lowest display order) Either 1 InPlay and 1 Pre-Match, or the amount specified in marketCount, if available. Markets and Outcomes will be returned.
		 * @param {boolean} includeAllDescendants Include every descendant in the below heirarchy
		 * @param {boolean} isInPlay Show only events that are in-play
		 * @param {number} marketCount Specify the number of markets to return when requesting headlineSummary. This count of InPlay and Pre-Match markets will be returned.For example, when specifying 1, 1 In Play and 1 Pre Match market will be returned.
		 * @param {string} date Return only events for the specified date (yyyy-MM-dd).
		 * @param {string} dateFrom The UTC datetime from the events to be returned. (yyyy-MM-ddTHH:mm:ss)
		 * @param {string} dateTo The UTC datetime TO the events to be returned. (yyyy-MM-ddTHH:mm:ss)
		 * @param {string} marketGroupId Filter by marketGroupId (e.g. OB_MG1276585).
		 * @param {string} eventSort Filter event by event sort
		 * @param {string} culture Code used to return responses in language other than English, acceptable values are de-DE|es-ES|fr-FR|nn-NO|fi-FI|ru-RU|pt-PT|hu-HU|sl-SL|ga-IE|en-CA|sr-Latn|sv-SE|el=GR|zh-CHS|it-IT|zh-CHT|cs-CZ|de-AT|ja-JP|pl-PL|da-DK|ro-RO|nl-NL|tr-TR
		 * @param {string} marketPublished Specify whether only active entities should be returned, according to the William Hill definition of active
		 * @param {string} marketStatus Specify a status to filter results by. This is currently A (active) or S (suspended)
		 * @param {string} marketDisplayed Specify whether to return displayed entities or not
		 * @param {string} marketChannel Specify a channel filter and only results from that channel will be returned
		 * @param {string} marketSort Filter by market sort (e.g. MR (match result) -- (Outright)).
		 * @param {string} marketEW Specify whether to return markets with each way betting or those without
		 * @param {string} selectionStatus Specify a status to filter results by. This is currently A (active) or S (suspended)
		 * @param {string} selectionChannel Specify a channel filter and only results from that channel will be returned
		 * @param {string} selectionPublished Specify whether only active entities should be returned, according to the William Hill definition of active
		 * @return {EventsWrapper} Success
		 */
		GetEventsForCompetition(competitionId: string, isPublished: string | null | undefined, fields: Array<string> | null | undefined, include: Array<string> | null | undefined, exclude: Array<string> | null | undefined, displayed: string | null | undefined, channel: string | null | undefined, settled: boolean | null | undefined, includeEmpty: boolean | null | undefined, status: string | null | undefined, sort: string | null | undefined, offset: number | null | undefined, limit: number | null | undefined, headlineSummary: boolean | null | undefined, includeAllDescendants: boolean | null | undefined, isInPlay: boolean | null | undefined, marketCount: number | null | undefined, date: string | null | undefined, dateFrom: string | null | undefined, dateTo: string | null | undefined, marketGroupId: string | null | undefined, eventSort: string | null | undefined, culture: string | null | undefined, marketPublished: string | null | undefined, marketStatus: string | null | undefined, marketDisplayed: string | null | undefined, marketChannel: string | null | undefined, marketSort: string | null | undefined, marketEW: string | null | undefined, selectionStatus: string | null | undefined, selectionChannel: string | null | undefined, selectionPublished: string | null | undefined): Observable<EventsWrapper> {
			return this.http.get<EventsWrapper>(this.baseUri + 'competitions/' + (competitionId == null ? '' : encodeURIComponent(competitionId)) + '/events/&isPublished=' + (isPublished == null ? '' : encodeURIComponent(isPublished)) + '&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + exclude?.map(z => `exclude=${encodeURIComponent(z)}`).join('&') + '&displayed=' + (displayed == null ? '' : encodeURIComponent(displayed)) + '&channel=' + (channel == null ? '' : encodeURIComponent(channel)) + '&settled=' + settled + '&includeEmpty=' + includeEmpty + '&status=' + (status == null ? '' : encodeURIComponent(status)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&offset=' + offset + '&limit=' + limit + '&headlineSummary=' + headlineSummary + '&includeAllDescendants=' + includeAllDescendants + '&isInPlay=' + isInPlay + '&marketCount=' + marketCount + '&date=' + (date == null ? '' : encodeURIComponent(date)) + '&dateFrom=' + (dateFrom == null ? '' : encodeURIComponent(dateFrom)) + '&dateTo=' + (dateTo == null ? '' : encodeURIComponent(dateTo)) + '&marketGroupId=' + (marketGroupId == null ? '' : encodeURIComponent(marketGroupId)) + '&eventSort=' + (eventSort == null ? '' : encodeURIComponent(eventSort)) + '&culture=' + (culture == null ? '' : encodeURIComponent(culture)) + '&marketPublished=' + (marketPublished == null ? '' : encodeURIComponent(marketPublished)) + '&marketStatus=' + (marketStatus == null ? '' : encodeURIComponent(marketStatus)) + '&marketDisplayed=' + (marketDisplayed == null ? '' : encodeURIComponent(marketDisplayed)) + '&marketChannel=' + (marketChannel == null ? '' : encodeURIComponent(marketChannel)) + '&marketSort=' + (marketSort == null ? '' : encodeURIComponent(marketSort)) + '&marketEW=' + (marketEW == null ? '' : encodeURIComponent(marketEW)) + '&selectionStatus=' + (selectionStatus == null ? '' : encodeURIComponent(selectionStatus)) + '&selectionChannel=' + (selectionChannel == null ? '' : encodeURIComponent(selectionChannel)) + '&selectionPublished=' + (selectionPublished == null ? '' : encodeURIComponent(selectionPublished)), {});
		}

		/**
		 * Retrieves a list of market groups for a given competition id
		 * Retrieves a list of market groups for a given competition id
		 * Get competitions/{competitionId}/marketgroups/
		 * @param {string} competitionId The competition id to retrieve information for.
		 * @param {Array<string>} fields Specify an absolute field list to return (Comma-Separated List)
		 * @param {Array<string>} include Specify fields in addition to the default to return (Comma-Separated List)
		 * @param {Array<string>} exclude Specify fields from the default to exclude (Comma-Separated List)
		 * @param {string} sort The field to order the response by, followed by the order. For example: name,desc
		 * @param {number} offset Skip over a number of elements by specifying a start value for the query
		 * @param {number} limit Specify the number of results to return
		 * @param {string} culture Code used to return responses in language other than English, acceptable values are de-DE|es-ES|fr-FR|nn-NO|fi-FI|ru-RU|pt-PT|hu-HU|sl-SL|ga-IE|en-CA|sr-Latn|sv-SE|el=GR|zh-CHS|it-IT|zh-CHT|cs-CZ|de-AT|ja-JP|pl-PL|da-DK|ro-RO|nl-NL|tr-TR
		 * @param {string} name Filter by market group name
		 * @return {MarketGroupsWrapper} Success
		 */
		GetMarketGroupsForCompetition(competitionId: string, fields: Array<string> | null | undefined, include: Array<string> | null | undefined, exclude: Array<string> | null | undefined, sort: string | null | undefined, offset: number | null | undefined, limit: number | null | undefined, culture: string | null | undefined, name: string | null | undefined): Observable<MarketGroupsWrapper> {
			return this.http.get<MarketGroupsWrapper>(this.baseUri + 'competitions/' + (competitionId == null ? '' : encodeURIComponent(competitionId)) + '/marketgroups/&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + exclude?.map(z => `exclude=${encodeURIComponent(z)}`).join('&') + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&offset=' + offset + '&limit=' + limit + '&culture=' + (culture == null ? '' : encodeURIComponent(culture)) + '&name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Retrieves a list of events/markets/selections where markets within said event match selected sort/groupId
		 * Retrieves a list of events/markets/selections where markets within said event match selected sort/groupId
		 * Get competitions/{competitionId}/marketsByGroupid
		 * @param {string} competitionId The competition id to retrieve information for.
		 * @param {Array<string>} fields Specify an absolute field list to return (Comma-Separated List)
		 * @param {Array<string>} include Specify fields in addition to the default to return (Comma-Separated List)
		 * @param {Array<string>} exclude Specify fields from the default to exclude (Comma-Separated List)
		 * @param {string} marketSort Filter by market sort (e.g. MR (match result) -- (Outright)).
		 * @param {string} marketGroupId Filter by marketGroupId (e.g. OB_MG1276585).
		 * @return {MarketGroupsWrapper} Success
		 */
		GetMarketsByGroupId(competitionId: string, fields: Array<string> | null | undefined, include: Array<string> | null | undefined, exclude: Array<string> | null | undefined, marketSort: string, marketGroupId: string): Observable<MarketGroupsWrapper> {
			return this.http.get<MarketGroupsWrapper>(this.baseUri + 'competitions/' + (competitionId == null ? '' : encodeURIComponent(competitionId)) + '/marketsByGroupid&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + exclude?.map(z => `exclude=${encodeURIComponent(z)}`).join('&') + '&marketSort=' + (marketSort == null ? '' : encodeURIComponent(marketSort)) + '&marketGroupId=' + (marketGroupId == null ? '' : encodeURIComponent(marketGroupId)), {});
		}

		/**
		 * Retrieves a list of events for the provided IDs.
		 * Retrieves a list of events for the provided IDs.
		 * Get events/
		 * @param {Array<string>} ids A comma-separated list of selectionIds
		 * @param {string} isPublished Specify whether only active entities should be returned, according to the William Hill definition of active
		 * @param {boolean} includeAllDescendants Include every descendant in the below heirarchy
		 * @param {Array<string>} fields Specify an absolute field list to return (Comma-Separated List)
		 * @param {Array<string>} include Specify fields in addition to the default to return (Comma-Separated List)
		 * @param {Array<string>} exclude Specify fields from the default to exclude (Comma-Separated List)
		 * @param {string} channel Specify a channel filter and only results from that channel will be returned
		 * @param {boolean} settled Specify wether only settled entities should be returned
		 * @param {boolean} includeEmpty When declared as false it should exclude markets and events that have no selections / markets
		 * @param {boolean} headlineSummary Return only headline markets (Markets with the lowest display order) Either 1 InPlay and 1 Pre-Match, or the amount specified in marketCount, if available. Markets and Outcomes will be returned.
		 * @param {number} marketCount Specify the number of markets to return when requesting headlineSummary. This count of InPlay and Pre-Match markets will be returned.For example, when specifying 1, 1 In Play and 1 Pre Match market will be returned.
		 * @param {string} sort The field to order the response by, followed by the order. For example: name,desc
		 * @param {number} offset Skip over a number of elements by specifying a start value for the query
		 * @param {number} limit Specify the number of results to return
		 * @param {Array<string>} marketIds Comma-seaerated list of market IDs to filter by
		 * @param {string} culture Code used to return responses in language other than English, acceptable values are de-DE|es-ES|fr-FR|nn-NO|fi-FI|ru-RU|pt-PT|hu-HU|sl-SL|ga-IE|en-CA|sr-Latn|sv-SE|el=GR|zh-CHS|it-IT|zh-CHT|cs-CZ|de-AT|ja-JP|pl-PL|da-DK|ro-RO|nl-NL|tr-TR
		 * @param {string} marketPublished Specify whether only active entities should be returned, according to the William Hill definition of active
		 * @param {string} marketStatus Specify a status to filter results by. This is currently A (active) or S (suspended)
		 * @param {string} marketDisplayed Specify whether to return displayed entities or not
		 * @param {string} marketChannel Specify a channel filter and only results from that channel will be returned
		 * @param {string} marketSort Filter by market sort (e.g. MR (match result) -- (Outright)).
		 * @param {string} marketEW Specify whether to return markets with each way betting or those without
		 * @param {string} selectionStatus Specify a status to filter results by. This is currently A (active) or S (suspended)
		 * @param {string} selectionChannel Specify a channel filter and only results from that channel will be returned
		 * @param {string} selectionPublished Specify whether only active entities should be returned, according to the William Hill definition of active
		 * @return {EventsWrapper} Success
		 */
		GetEvents(ids: Array<string> | null | undefined, isPublished: string | null | undefined, includeAllDescendants: boolean | null | undefined, fields: Array<string> | null | undefined, include: Array<string> | null | undefined, exclude: Array<string> | null | undefined, channel: string | null | undefined, settled: boolean | null | undefined, includeEmpty: boolean | null | undefined, headlineSummary: boolean | null | undefined, marketCount: number | null | undefined, sort: string | null | undefined, offset: number | null | undefined, limit: number | null | undefined, marketIds: Array<string> | null | undefined, culture: string | null | undefined, marketPublished: string | null | undefined, marketStatus: string | null | undefined, marketDisplayed: string | null | undefined, marketChannel: string | null | undefined, marketSort: string | null | undefined, marketEW: string | null | undefined, selectionStatus: string | null | undefined, selectionChannel: string | null | undefined, selectionPublished: string | null | undefined): Observable<EventsWrapper> {
			return this.http.get<EventsWrapper>(this.baseUri + 'events/?' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&isPublished=' + (isPublished == null ? '' : encodeURIComponent(isPublished)) + '&includeAllDescendants=' + includeAllDescendants + '&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + exclude?.map(z => `exclude=${encodeURIComponent(z)}`).join('&') + '&channel=' + (channel == null ? '' : encodeURIComponent(channel)) + '&settled=' + settled + '&includeEmpty=' + includeEmpty + '&headlineSummary=' + headlineSummary + '&marketCount=' + marketCount + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&offset=' + offset + '&limit=' + limit + '&' + marketIds?.map(z => `marketIds=${encodeURIComponent(z)}`).join('&') + '&culture=' + (culture == null ? '' : encodeURIComponent(culture)) + '&marketPublished=' + (marketPublished == null ? '' : encodeURIComponent(marketPublished)) + '&marketStatus=' + (marketStatus == null ? '' : encodeURIComponent(marketStatus)) + '&marketDisplayed=' + (marketDisplayed == null ? '' : encodeURIComponent(marketDisplayed)) + '&marketChannel=' + (marketChannel == null ? '' : encodeURIComponent(marketChannel)) + '&marketSort=' + (marketSort == null ? '' : encodeURIComponent(marketSort)) + '&marketEW=' + (marketEW == null ? '' : encodeURIComponent(marketEW)) + '&selectionStatus=' + (selectionStatus == null ? '' : encodeURIComponent(selectionStatus)) + '&selectionChannel=' + (selectionChannel == null ? '' : encodeURIComponent(selectionChannel)) + '&selectionPublished=' + (selectionPublished == null ? '' : encodeURIComponent(selectionPublished)), {});
		}

		/**
		 * Retrieves a single event by ID.
		 * Retrieves a single event by ID.
		 * Get events/{eventId}
		 * @param {string} eventId The event ID to retrieve information for.
		 * @param {boolean} includeAllDescendants Include every descendant in the below heirarchy
		 * @param {Array<string>} fields Specify an absolute field list to return (Comma-Separated List)
		 * @param {Array<string>} include Specify fields in addition to the default to return (Comma-Separated List)
		 * @param {Array<string>} exclude Specify fields from the default to exclude (Comma-Separated List)
		 * @param {boolean} headlineSummary Return only headline markets (Markets with the lowest display order) Either 1 InPlay and 1 Pre-Match, or the amount specified in marketCount, if available. Markets and Outcomes will be returned.
		 * @param {number} marketCount Specify the number of markets to return when requesting headlineSummary. This count of InPlay and Pre-Match markets will be returned.For example, when specifying 1, 1 In Play and 1 Pre Match market will be returned.
		 * @param {Array<string>} marketIds Comma-seaerated list of market IDs to filter by
		 * @param {boolean} includeEmpty When declared as false it should exclude markets and events that have no selections / markets
		 * @param {string} culture Code used to return responses in language other than English, acceptable values are de-DE|es-ES|fr-FR|nn-NO|fi-FI|ru-RU|pt-PT|hu-HU|sl-SL|ga-IE|en-CA|sr-Latn|sv-SE|el=GR|zh-CHS|it-IT|zh-CHT|cs-CZ|de-AT|ja-JP|pl-PL|da-DK|ro-RO|nl-NL|tr-TR
		 * @param {string} marketPublished Specify whether only active entities should be returned, according to the William Hill definition of active
		 * @param {string} marketStatus Specify a status to filter results by. This is currently A (active) or S (suspended)
		 * @param {string} marketDisplayed Specify whether to return displayed entities or not
		 * @param {string} marketChannel Specify a channel filter and only results from that channel will be returned
		 * @param {string} marketSort Filter by market sort (e.g. MR (match result) -- (Outright)).
		 * @param {string} marketEW Specify whether to return markets with each way betting or those without
		 * @param {string} selectionStatus Specify a status to filter results by. This is currently A (active) or S (suspended)
		 * @param {string} selectionChannel Specify a channel filter and only results from that channel will be returned
		 * @param {string} selectionPublished Specify whether only active entities should be returned, according to the William Hill definition of active
		 * @return {EventsWrapper} Success
		 */
		GetEvent(eventId: string, includeAllDescendants: boolean | null | undefined, fields: Array<string> | null | undefined, include: Array<string> | null | undefined, exclude: Array<string> | null | undefined, headlineSummary: boolean | null | undefined, marketCount: number | null | undefined, marketIds: Array<string> | null | undefined, includeEmpty: boolean | null | undefined, culture: string | null | undefined, marketPublished: string | null | undefined, marketStatus: string | null | undefined, marketDisplayed: string | null | undefined, marketChannel: string | null | undefined, marketSort: string | null | undefined, marketEW: string | null | undefined, selectionStatus: string | null | undefined, selectionChannel: string | null | undefined, selectionPublished: string | null | undefined): Observable<EventsWrapper> {
			return this.http.get<EventsWrapper>(this.baseUri + 'events/' + (eventId == null ? '' : encodeURIComponent(eventId)) + '&includeAllDescendants=' + includeAllDescendants + '&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + exclude?.map(z => `exclude=${encodeURIComponent(z)}`).join('&') + '&headlineSummary=' + headlineSummary + '&marketCount=' + marketCount + '&' + marketIds?.map(z => `marketIds=${encodeURIComponent(z)}`).join('&') + '&includeEmpty=' + includeEmpty + '&culture=' + (culture == null ? '' : encodeURIComponent(culture)) + '&marketPublished=' + (marketPublished == null ? '' : encodeURIComponent(marketPublished)) + '&marketStatus=' + (marketStatus == null ? '' : encodeURIComponent(marketStatus)) + '&marketDisplayed=' + (marketDisplayed == null ? '' : encodeURIComponent(marketDisplayed)) + '&marketChannel=' + (marketChannel == null ? '' : encodeURIComponent(marketChannel)) + '&marketSort=' + (marketSort == null ? '' : encodeURIComponent(marketSort)) + '&marketEW=' + (marketEW == null ? '' : encodeURIComponent(marketEW)) + '&selectionStatus=' + (selectionStatus == null ? '' : encodeURIComponent(selectionStatus)) + '&selectionChannel=' + (selectionChannel == null ? '' : encodeURIComponent(selectionChannel)) + '&selectionPublished=' + (selectionPublished == null ? '' : encodeURIComponent(selectionPublished)), {});
		}

		/**
		 * Retrieves competitors for a single event by ID.
		 * Retrieves competitors for a single event by ID.
		 * Get events/{eventId}/competitors
		 * @param {string} eventId The event ID to retrieve information for.
		 * @param {Array<string>} fields Specify an absolute field list to return (Comma-Separated List)
		 * @param {Array<string>} include Specify fields in addition to the default to return (Comma-Separated List)
		 * @param {Array<string>} exclude Specify fields from the default to exclude (Comma-Separated List)
		 * @return {EventCompetitorsWrapper} Success
		 */
		GetEventCompetitors(eventId: string, fields: Array<string> | null | undefined, include: Array<string> | null | undefined, exclude: Array<string> | null | undefined): Observable<EventCompetitorsWrapper> {
			return this.http.get<EventCompetitorsWrapper>(this.baseUri + 'events/' + (eventId == null ? '' : encodeURIComponent(eventId)) + '/competitors&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + exclude?.map(z => `exclude=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Gets one or more specific markets
		 * Retrieves one or more specific markets. Markets with Live at the end are always In-Play markets. However, not ALL In-Play markets have Live at the end of the market name.
		 * Get events/{eventId}/markets/
		 * @param {string} eventId The event ID to retrieve information for.
		 * @param {Array<string>} ids A comma-separated list of selectionIds
		 * @param {boolean} includeAllDescendants Include every descendant in the below heirarchy
		 * @param {Array<string>} fields Specify an absolute field list to return (Comma-Separated List)
		 * @param {Array<string>} include Specify fields in addition to the default to return (Comma-Separated List)
		 * @param {Array<string>} exclude Specify fields from the default to exclude (Comma-Separated List)
		 * @param {boolean} includeEmpty When declared as false it should exclude markets and events that have no selections / markets
		 * @param {string} culture Code used to return responses in language other than English, acceptable values are de-DE|es-ES|fr-FR|nn-NO|fi-FI|ru-RU|pt-PT|hu-HU|sl-SL|ga-IE|en-CA|sr-Latn|sv-SE|el=GR|zh-CHS|it-IT|zh-CHT|cs-CZ|de-AT|ja-JP|pl-PL|da-DK|ro-RO|nl-NL|tr-TR
		 * @param {string} marketPublished Specify whether only active entities should be returned, according to the William Hill definition of active
		 * @param {string} marketStatus Specify a status to filter results by. This is currently A (active) or S (suspended)
		 * @param {string} marketDisplayed Specify whether to return displayed entities or not
		 * @param {string} marketChannel Specify a channel filter and only results from that channel will be returned
		 * @param {string} marketSort Filter by market sort (e.g. MR (match result) -- (Outright)).
		 * @param {string} marketEW Specify whether to return markets with each way betting or those without
		 * @param {string} selectionStatus Specify a status to filter results by. This is currently A (active) or S (suspended)
		 * @param {string} selectionChannel Specify a channel filter and only results from that channel will be returned
		 * @param {string} selectionPublished Specify whether only active entities should be returned, according to the William Hill definition of active
		 * @return {MarketsWrapper} Success
		 */
		GetMarkets(eventId: string, ids: Array<string> | null | undefined, includeAllDescendants: boolean | null | undefined, fields: Array<string> | null | undefined, include: Array<string> | null | undefined, exclude: Array<string> | null | undefined, includeEmpty: boolean | null | undefined, culture: string | null | undefined, marketPublished: string | null | undefined, marketStatus: string | null | undefined, marketDisplayed: string | null | undefined, marketChannel: string | null | undefined, marketSort: string | null | undefined, marketEW: string | null | undefined, selectionStatus: string | null | undefined, selectionChannel: string | null | undefined, selectionPublished: string | null | undefined): Observable<MarketsWrapper> {
			return this.http.get<MarketsWrapper>(this.baseUri + 'events/' + (eventId == null ? '' : encodeURIComponent(eventId)) + '/markets/&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&includeAllDescendants=' + includeAllDescendants + '&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + exclude?.map(z => `exclude=${encodeURIComponent(z)}`).join('&') + '&includeEmpty=' + includeEmpty + '&culture=' + (culture == null ? '' : encodeURIComponent(culture)) + '&marketPublished=' + (marketPublished == null ? '' : encodeURIComponent(marketPublished)) + '&marketStatus=' + (marketStatus == null ? '' : encodeURIComponent(marketStatus)) + '&marketDisplayed=' + (marketDisplayed == null ? '' : encodeURIComponent(marketDisplayed)) + '&marketChannel=' + (marketChannel == null ? '' : encodeURIComponent(marketChannel)) + '&marketSort=' + (marketSort == null ? '' : encodeURIComponent(marketSort)) + '&marketEW=' + (marketEW == null ? '' : encodeURIComponent(marketEW)) + '&selectionStatus=' + (selectionStatus == null ? '' : encodeURIComponent(selectionStatus)) + '&selectionChannel=' + (selectionChannel == null ? '' : encodeURIComponent(selectionChannel)) + '&selectionPublished=' + (selectionPublished == null ? '' : encodeURIComponent(selectionPublished)), {});
		}

		/**
		 * Gets one or more selections for a market
		 * Retrieves one or more selections for a market
		 * Get events/{eventId}/markets/{marketId}/selections/
		 * @param {string} eventId The event ID to retrieve information for.
		 * @param {string} marketId The market id to retrieve information for
		 * @param {Array<string>} ids A comma-separated list of selectionIds
		 * @param {Array<string>} fields Specify an absolute field list to return (Comma-Separated List)
		 * @param {Array<string>} include Specify fields in addition to the default to return (Comma-Separated List)
		 * @param {Array<string>} exclude Specify fields from the default to exclude (Comma-Separated List)
		 * @param {string} culture Code used to return responses in language other than English, acceptable values are de-DE|es-ES|fr-FR|nn-NO|fi-FI|ru-RU|pt-PT|hu-HU|sl-SL|ga-IE|en-CA|sr-Latn|sv-SE|el=GR|zh-CHS|it-IT|zh-CHT|cs-CZ|de-AT|ja-JP|pl-PL|da-DK|ro-RO|nl-NL|tr-TR
		 * @param {string} selectionStatus Specify a status to filter results by. This is currently A (active) or S (suspended)
		 * @param {string} selectionChannel Specify a channel filter and only results from that channel will be returned
		 * @param {string} selectionPublished Specify whether only active entities should be returned, according to the William Hill definition of active
		 * @return {SelectionsWrapper} Success
		 */
		GetSelections(eventId: string, marketId: string, ids: Array<string> | null | undefined, fields: Array<string> | null | undefined, include: Array<string> | null | undefined, exclude: Array<string> | null | undefined, culture: string | null | undefined, selectionStatus: string | null | undefined, selectionChannel: string | null | undefined, selectionPublished: string | null | undefined): Observable<SelectionsWrapper> {
			return this.http.get<SelectionsWrapper>(this.baseUri + 'events/' + (eventId == null ? '' : encodeURIComponent(eventId)) + '/markets/' + (marketId == null ? '' : encodeURIComponent(marketId)) + '/selections/&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + exclude?.map(z => `exclude=${encodeURIComponent(z)}`).join('&') + '&culture=' + (culture == null ? '' : encodeURIComponent(culture)) + '&selectionStatus=' + (selectionStatus == null ? '' : encodeURIComponent(selectionStatus)) + '&selectionChannel=' + (selectionChannel == null ? '' : encodeURIComponent(selectionChannel)) + '&selectionPublished=' + (selectionPublished == null ? '' : encodeURIComponent(selectionPublished)), {});
		}

		/**
		 * Gets a list of all sports
		 * Gets a list of all sports
		 * Get sports/
		 * @param {string} sort The field to order the response by, followed by the order. For example: name,desc
		 * @param {number} offset Skip over a number of elements by specifying a start value for the query
		 * @param {string} isPublished Specify whether only active entities should be returned, according to the William Hill definition of active
		 * @param {number} limit Specify the number of results to return
		 * @param {Array<string>} fields Specify an absolute field list to return (Comma-Separated List)
		 * @param {Array<string>} include Specify fields in addition to the default to return (Comma-Separated List)
		 * @param {Array<string>} exclude Specify fields from the default to exclude (Comma-Separated List)
		 * @param {string} culture Code used to return responses in language other than English, acceptable values are de-DE|es-ES|fr-FR|nn-NO|fi-FI|ru-RU|pt-PT|hu-HU|sl-SL|ga-IE|en-CA|sr-Latn|sv-SE|el=GR|zh-CHS|it-IT|zh-CHT|cs-CZ|de-AT|ja-JP|pl-PL|da-DK|ro-RO|nl-NL|tr-TR
		 * @return {SportsWrapper} Success
		 */
		GetSports(sort: string | null | undefined, offset: number | null | undefined, isPublished: string | null | undefined, limit: number | null | undefined, fields: Array<string> | null | undefined, include: Array<string> | null | undefined, exclude: Array<string> | null | undefined, culture: string | null | undefined): Observable<SportsWrapper> {
			return this.http.get<SportsWrapper>(this.baseUri + 'sports/?sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&offset=' + offset + '&isPublished=' + (isPublished == null ? '' : encodeURIComponent(isPublished)) + '&limit=' + limit + '&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + exclude?.map(z => `exclude=${encodeURIComponent(z)}`).join('&') + '&culture=' + (culture == null ? '' : encodeURIComponent(culture)), {});
		}

		/**
		 * Retrieves a list of classes for a given sport id.
		 * Retrieves a list of classes for a given sport id.
		 * Get sports/{sportId}/classes/
		 * @param {string} sportId The sport id to retrieve information for.
		 * @param {string} isPublished Specify whether only active entities should be returned, according to the William Hill definition of active
		 * @param {Array<string>} fields Specify an absolute field list to return (Comma-Separated List)
		 * @param {Array<string>} include Specify fields in addition to the default to return (Comma-Separated List)
		 * @param {Array<string>} exclude Specify fields from the default to exclude (Comma-Separated List)
		 * @param {string} displayed Specify whether to return displayed entities or not
		 * @param {string} channel Specify a channel filter and only results from that channel will be returned
		 * @param {string} status Specify a status to filter results by. This is currently A (active) or S (suspended)
		 * @param {string} sort The field to order the response by, followed by the order. For example: name,desc
		 * @param {number} offset Skip over a number of elements by specifying a start value for the query
		 * @param {number} limit Specify the number of results to return
		 * @param {string} culture Code used to return responses in language other than English, acceptable values are de-DE|es-ES|fr-FR|nn-NO|fi-FI|ru-RU|pt-PT|hu-HU|sl-SL|ga-IE|en-CA|sr-Latn|sv-SE|el=GR|zh-CHS|it-IT|zh-CHT|cs-CZ|de-AT|ja-JP|pl-PL|da-DK|ro-RO|nl-NL|tr-TR
		 * @return {ClassesWrapper} Success
		 */
		GetClassesForSport(sportId: string, isPublished: string | null | undefined, fields: Array<string> | null | undefined, include: Array<string> | null | undefined, exclude: Array<string> | null | undefined, displayed: string | null | undefined, channel: string | null | undefined, status: string | null | undefined, sort: string | null | undefined, offset: number | null | undefined, limit: number | null | undefined, culture: string | null | undefined): Observable<ClassesWrapper> {
			return this.http.get<ClassesWrapper>(this.baseUri + 'sports/' + (sportId == null ? '' : encodeURIComponent(sportId)) + '/classes/&isPublished=' + (isPublished == null ? '' : encodeURIComponent(isPublished)) + '&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + exclude?.map(z => `exclude=${encodeURIComponent(z)}`).join('&') + '&displayed=' + (displayed == null ? '' : encodeURIComponent(displayed)) + '&channel=' + (channel == null ? '' : encodeURIComponent(channel)) + '&status=' + (status == null ? '' : encodeURIComponent(status)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&offset=' + offset + '&limit=' + limit + '&culture=' + (culture == null ? '' : encodeURIComponent(culture)), {});
		}

		/**
		 * Retrieves a list of competitions for a given sport id.
		 * Retrieves a list of competitions for a given sport id.
		 * Get sports/{sportId}/competitions/
		 * @param {string} sportId The sport id to retrieve information for.
		 * @param {string} isPublished Specify whether only active entities should be returned, according to the William Hill definition of active
		 * @param {Array<string>} fields Specify an absolute field list to return (Comma-Separated List)
		 * @param {Array<string>} include Specify fields in addition to the default to return (Comma-Separated List)
		 * @param {Array<string>} exclude Specify fields from the default to exclude (Comma-Separated List)
		 * @param {string} displayed Specify whether to return displayed entities or not
		 * @param {string} channel Specify a channel filter and only results from that channel will be returned
		 * @param {string} status Specify a status to filter results by. This is currently A (active) or S (suspended)
		 * @param {string} sort The field to order the response by, followed by the order. For example: name,desc
		 * @param {number} offset Skip over a number of elements by specifying a start value for the query
		 * @param {number} limit Specify the number of results to return
		 * @param {string} culture Code used to return responses in language other than English, acceptable values are de-DE|es-ES|fr-FR|nn-NO|fi-FI|ru-RU|pt-PT|hu-HU|sl-SL|ga-IE|en-CA|sr-Latn|sv-SE|el=GR|zh-CHS|it-IT|zh-CHT|cs-CZ|de-AT|ja-JP|pl-PL|da-DK|ro-RO|nl-NL|tr-TR
		 * @return {CompetitionsWrapper} Success
		 */
		GetCompetitionsForSport(sportId: string, isPublished: string | null | undefined, fields: Array<string> | null | undefined, include: Array<string> | null | undefined, exclude: Array<string> | null | undefined, displayed: string | null | undefined, channel: string | null | undefined, status: string | null | undefined, sort: string | null | undefined, offset: number | null | undefined, limit: number | null | undefined, culture: string | null | undefined): Observable<CompetitionsWrapper> {
			return this.http.get<CompetitionsWrapper>(this.baseUri + 'sports/' + (sportId == null ? '' : encodeURIComponent(sportId)) + '/competitions/&isPublished=' + (isPublished == null ? '' : encodeURIComponent(isPublished)) + '&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + exclude?.map(z => `exclude=${encodeURIComponent(z)}`).join('&') + '&displayed=' + (displayed == null ? '' : encodeURIComponent(displayed)) + '&channel=' + (channel == null ? '' : encodeURIComponent(channel)) + '&status=' + (status == null ? '' : encodeURIComponent(status)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&offset=' + offset + '&limit=' + limit + '&culture=' + (culture == null ? '' : encodeURIComponent(culture)), {});
		}

		/**
		 * Retrieves a weighted list of Selections.
		 * Retrieves a weighted list of Selections.
		 * Get topbets/
		 * @param {Array<string>} sportIds A comma-separated list of sportsIds for which to retrieve topBets for
		 * @param {Array<string>} competitionIds A comma-separated list of competitionIds for which to retrieve topBets for
		 * @param {number} limit Specify the number of results to return
		 * @param {Array<string>} fields Specify an absolute field list to return (Comma-Separated List)
		 * @param {Array<string>} include Specify fields in addition to the default to return (Comma-Separated List)
		 * @param {Array<string>} exclude Specify fields from the default to exclude (Comma-Separated List)
		 * @param {string} param_topBetEventId The event ID to retrieve top bet information for. Multiple events up to 5 may be used
		 * @param {string} sortName The market sort code used to further filter event results. Please note this can only be used with event id(s).
		 * @param {string} culture Code used to return responses in language other than English, acceptable values are de-DE|es-ES|fr-FR|nn-NO|fi-FI|ru-RU|pt-PT|hu-HU|sl-SL|ga-IE|en-CA|sr-Latn|sv-SE|el=GR|zh-CHS|it-IT|zh-CHT|cs-CZ|de-AT|ja-JP|pl-PL|da-DK|ro-RO|nl-NL|tr-TR
		 * @param {string} Locale Code used to select a set of top bets settings, default is "whapi" which allows events set in far future to be included, setting the value to "en-GB" will activate english sportsbook settings, mirroring top bets on the website, which restricts events returned to those taking place in next 36 hours. Acceptable values (not all heve their own settings - if none currently available for that locale - en-GB will be used) are de-DE|whapi|en-GB|es-ES|fr-FR|nn-NO|fi-FI|ru-RU|pt-PT|hu-HU|sl-SL|ga-IE|en-CA|sr-Latn|sv-SE|el=GR|zh-CHS|it-IT|zh-CHT|cs-CZ|de-AT|ja-JP|pl-PL|da-DK|ro-RO|nl-NL|tr-TR
		 * @return {TopBetsWrapper} Success
		 */
		GetTopBets(sportIds: Array<string> | null | undefined, competitionIds: Array<string> | null | undefined, limit: number | null | undefined, fields: Array<string> | null | undefined, include: Array<string> | null | undefined, exclude: Array<string> | null | undefined, param_topBetEventId: string | null | undefined, sortName: string | null | undefined, culture: string | null | undefined, Locale: string | null | undefined): Observable<TopBetsWrapper> {
			return this.http.get<TopBetsWrapper>(this.baseUri + 'topbets/?' + sportIds?.map(z => `sportIds=${encodeURIComponent(z)}`).join('&') + '&' + competitionIds?.map(z => `competitionIds=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + exclude?.map(z => `exclude=${encodeURIComponent(z)}`).join('&') + '&param_topBetEventId=' + (param_topBetEventId == null ? '' : encodeURIComponent(param_topBetEventId)) + '&sortName=' + (sortName == null ? '' : encodeURIComponent(sortName)) + '&culture=' + (culture == null ? '' : encodeURIComponent(culture)) + '&Locale=' + (Locale == null ? '' : encodeURIComponent(Locale)), {});
		}
	}

}

