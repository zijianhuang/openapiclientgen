import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AllRequestTypesExample {
		authentication?: AuthenticationMessage;
		heartbeat?: HeartbeatMessage;
		marketSubscription?: MarketSubscriptionMessage;
		opTypes?: AllRequestTypesExampleOpTypes | null;
		orderSubscriptionMessage?: OrderSubscriptionMessage;
	}
	export interface AllRequestTypesExampleFormProperties {
		opTypes: FormControl<AllRequestTypesExampleOpTypes | null | undefined>,
	}
	export function CreateAllRequestTypesExampleFormGroup() {
		return new FormGroup<AllRequestTypesExampleFormProperties>({
			opTypes: new FormControl<AllRequestTypesExampleOpTypes | null | undefined>(undefined),
		});

	}

	export enum AllRequestTypesExampleOpTypes { heartbeat = 'heartbeat', authentication = 'authentication', marketSubscription = 'marketSubscription', orderSubscription = 'orderSubscription' }

	export interface AllResponseTypesExample {
		connection?: ConnectionMessage;
		marketChangeMessage?: MarketChangeMessage;
		opTypes?: AllResponseTypesExampleOpTypes | null;
		orderChangeMessage?: OrderChangeMessage;
		status?: StatusMessage;
	}
	export interface AllResponseTypesExampleFormProperties {
		opTypes: FormControl<AllResponseTypesExampleOpTypes | null | undefined>,
	}
	export function CreateAllResponseTypesExampleFormGroup() {
		return new FormGroup<AllResponseTypesExampleFormProperties>({
			opTypes: new FormControl<AllResponseTypesExampleOpTypes | null | undefined>(undefined),
		});

	}

	export enum AllResponseTypesExampleOpTypes { connection = 'connection', status = 'status', mcm = 'mcm', ocm = 'ocm' }

	export interface AuthenticationMessage extends RequestMessage {
		appKey?: string | null;
		session?: string | null;
	}
	export interface AuthenticationMessageFormProperties extends RequestMessageFormProperties {
		appKey: FormControl<string | null | undefined>,
		session: FormControl<string | null | undefined>,
	}
	export function CreateAuthenticationMessageFormGroup() {
		return new FormGroup<AuthenticationMessageFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			op: new FormControl<string | null | undefined>(undefined),
			appKey: new FormControl<string | null | undefined>(undefined),
			session: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConnectionMessage extends ResponseMessage {

		/** The connection id */
		connectionId?: string | null;
	}
	export interface ConnectionMessageFormProperties extends ResponseMessageFormProperties {

		/** The connection id */
		connectionId: FormControl<string | null | undefined>,
	}
	export function CreateConnectionMessageFormGroup() {
		return new FormGroup<ConnectionMessageFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			op: new FormControl<string | null | undefined>(undefined),
			connectionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HeartbeatMessage extends RequestMessage {
	}
	export interface HeartbeatMessageFormProperties extends RequestMessageFormProperties {
	}
	export function CreateHeartbeatMessageFormGroup() {
		return new FormGroup<HeartbeatMessageFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			op: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface KeyLineDefinition {
		kl?: Array<KeyLineSelection>;
	}
	export interface KeyLineDefinitionFormProperties {
	}
	export function CreateKeyLineDefinitionFormGroup() {
		return new FormGroup<KeyLineDefinitionFormProperties>({
		});

	}

	export interface KeyLineSelection {

		/** Type: double */
		hc?: number | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
	}
	export interface KeyLineSelectionFormProperties {

		/** Type: double */
		hc: FormControl<number | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateKeyLineSelectionFormGroup() {
		return new FormGroup<KeyLineSelectionFormProperties>({
			hc: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MarketChange {

		/** Conflated - have more than a single change been combined (or null if not conflated) */
		con?: boolean | null;

		/** Market Id - the id of the market */
		id?: string | null;

		/** Image - replace existing prices / data with the data supplied: it is not a delta (or null if delta) */
		img?: boolean | null;
		marketDefinition?: MarketDefinition;

		/** Runner Changes - a list of changes to runners (or null if un-changed) */
		rc?: Array<RunnerChange>;

		/**
		 * The total amount matched across the market. This value is truncated at 2dp (or null if un-changed)
		 * Type: double
		 */
		tv?: number | null;
	}
	export interface MarketChangeFormProperties {

		/** Conflated - have more than a single change been combined (or null if not conflated) */
		con: FormControl<boolean | null | undefined>,

		/** Market Id - the id of the market */
		id: FormControl<string | null | undefined>,

		/** Image - replace existing prices / data with the data supplied: it is not a delta (or null if delta) */
		img: FormControl<boolean | null | undefined>,

		/**
		 * The total amount matched across the market. This value is truncated at 2dp (or null if un-changed)
		 * Type: double
		 */
		tv: FormControl<number | null | undefined>,
	}
	export function CreateMarketChangeFormGroup() {
		return new FormGroup<MarketChangeFormProperties>({
			con: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			img: new FormControl<boolean | null | undefined>(undefined),
			tv: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RunnerChange {

		/** Available To Back - PriceVol tuple delta of price changes (0 vol is remove) */
		atb?: Array<string>;

		/** Available To Lay - PriceVol tuple delta of price changes (0 vol is remove) */
		atl?: Array<string>;

		/** Best Available To Back - LevelPriceVol triple delta of price changes, keyed by level (0 vol is remove) */
		batb?: Array<string>;

		/** Best Available To Lay - LevelPriceVol triple delta of price changes, keyed by level (0 vol is remove) */
		batl?: Array<string>;

		/** Best Display Available To Back (includes virtual prices)- LevelPriceVol triple delta of price changes, keyed by level (0 vol is remove) */
		bdatb?: Array<string>;

		/** Best Display Available To Lay (includes virtual prices)- LevelPriceVol triple delta of price changes, keyed by level (0 vol is remove) */
		bdatl?: Array<string>;

		/**
		 * Handicap - the handicap of the runner (selection) (null if not applicable)
		 * Type: double
		 */
		hc?: number | null;

		/**
		 * Selection Id - the id of the runner (selection)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/**
		 * Last Traded Price - The last traded price (or null if un-changed)
		 * Type: double
		 */
		ltp?: number | null;

		/** Starting Price Back - PriceVol tuple delta of price changes (0 vol is remove) */
		spb?: Array<string>;

		/**
		 * Starting Price Far - The far starting price (or null if un-changed)
		 * Type: double
		 */
		spf?: number | null;

		/** Starting Price Lay - PriceVol tuple delta of price changes (0 vol is remove) */
		spl?: Array<string>;

		/**
		 * Starting Price Near - The far starting price (or null if un-changed)
		 * Type: double
		 */
		spn?: number | null;

		/** Traded - PriceVol tuple delta of price changes (0 vol is remove) */
		trd?: Array<string>;

		/**
		 * The total amount matched. This value is truncated at 2dp.
		 * Type: double
		 */
		tv?: number | null;
	}
	export interface RunnerChangeFormProperties {

		/**
		 * Handicap - the handicap of the runner (selection) (null if not applicable)
		 * Type: double
		 */
		hc: FormControl<number | null | undefined>,

		/**
		 * Selection Id - the id of the runner (selection)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Last Traded Price - The last traded price (or null if un-changed)
		 * Type: double
		 */
		ltp: FormControl<number | null | undefined>,

		/**
		 * Starting Price Far - The far starting price (or null if un-changed)
		 * Type: double
		 */
		spf: FormControl<number | null | undefined>,

		/**
		 * Starting Price Near - The far starting price (or null if un-changed)
		 * Type: double
		 */
		spn: FormControl<number | null | undefined>,

		/**
		 * The total amount matched. This value is truncated at 2dp.
		 * Type: double
		 */
		tv: FormControl<number | null | undefined>,
	}
	export function CreateRunnerChangeFormGroup() {
		return new FormGroup<RunnerChangeFormProperties>({
			hc: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			ltp: new FormControl<number | null | undefined>(undefined),
			spf: new FormControl<number | null | undefined>(undefined),
			spn: new FormControl<number | null | undefined>(undefined),
			tv: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MarketChangeMessage extends ResponseMessage {

		/** Token value (non-null) should be stored and passed in a MarketSubscriptionMessage to resume subscription (in case of disconnect) */
		clk?: string | null;

		/**
		 * Conflate Milliseconds - the conflation rate (may differ from that requested if subscription is delayed)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		conflateMs?: string | null;

		/** Change Type - set to indicate the type of change - if null this is a delta) */
		ct?: MarketChangeMessageCt | null;

		/**
		 * Heartbeat Milliseconds - the heartbeat rate (may differ from requested: bounds are 500 to 30000)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		heartbeatMs?: string | null;

		/** Token value (non-null) should be stored and passed in a MarketSubscriptionMessage to resume subscription (in case of disconnect) */
		initialClk?: string | null;

		/** MarketChanges - the modifications to markets (will be null on a heartbeat */
		mc?: Array<MarketChange>;

		/**
		 * Publish Time (in millis since epoch) that the changes were generated
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		pt?: string | null;

		/** Segment Type - if the change is split into multiple segments, this denotes the beginning and end of a change, and segments in between. Will be null if data is not segmented */
		segmentType?: MarketChangeMessageSegmentType | null;

		/**
		 * Stream status: set to null if the exchange stream data is up to date and 503 if the downstream services are experiencing latencies
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status?: number | null;
	}
	export interface MarketChangeMessageFormProperties extends ResponseMessageFormProperties {

		/** Token value (non-null) should be stored and passed in a MarketSubscriptionMessage to resume subscription (in case of disconnect) */
		clk: FormControl<string | null | undefined>,

		/**
		 * Conflate Milliseconds - the conflation rate (may differ from that requested if subscription is delayed)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		conflateMs: FormControl<string | null | undefined>,

		/** Change Type - set to indicate the type of change - if null this is a delta) */
		ct: FormControl<MarketChangeMessageCt | null | undefined>,

		/**
		 * Heartbeat Milliseconds - the heartbeat rate (may differ from requested: bounds are 500 to 30000)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		heartbeatMs: FormControl<string | null | undefined>,

		/** Token value (non-null) should be stored and passed in a MarketSubscriptionMessage to resume subscription (in case of disconnect) */
		initialClk: FormControl<string | null | undefined>,

		/**
		 * Publish Time (in millis since epoch) that the changes were generated
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		pt: FormControl<string | null | undefined>,

		/** Segment Type - if the change is split into multiple segments, this denotes the beginning and end of a change, and segments in between. Will be null if data is not segmented */
		segmentType: FormControl<MarketChangeMessageSegmentType | null | undefined>,

		/**
		 * Stream status: set to null if the exchange stream data is up to date and 503 if the downstream services are experiencing latencies
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreateMarketChangeMessageFormGroup() {
		return new FormGroup<MarketChangeMessageFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			op: new FormControl<string | null | undefined>(undefined),
			clk: new FormControl<string | null | undefined>(undefined),
			conflateMs: new FormControl<string | null | undefined>(undefined),
			ct: new FormControl<MarketChangeMessageCt | null | undefined>(undefined),
			heartbeatMs: new FormControl<string | null | undefined>(undefined),
			initialClk: new FormControl<string | null | undefined>(undefined),
			pt: new FormControl<string | null | undefined>(undefined),
			segmentType: new FormControl<MarketChangeMessageSegmentType | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum MarketChangeMessageCt { SUB_IMAGE = 'SUB_IMAGE', RESUB_DELTA = 'RESUB_DELTA', HEARTBEAT = 'HEARTBEAT' }

	export enum MarketChangeMessageSegmentType { SEG_START = 'SEG_START', SEG = 'SEG', SEG_END = 'SEG_END' }

	export interface MarketDataFilter {
		fields?: Array<string>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ladderLevels?: number | null;
	}
	export interface MarketDataFilterFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ladderLevels: FormControl<number | null | undefined>,
	}
	export function CreateMarketDataFilterFormGroup() {
		return new FormGroup<MarketDataFilterFormProperties>({
			ladderLevels: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MarketDefinition {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		betDelay?: number | null;
		bettingType?: MarketDefinitionBettingType | null;
		bspMarket?: boolean | null;
		bspReconciled?: boolean | null;
		complete?: boolean | null;
		countryCode?: string | null;
		crossMatching?: boolean | null;
		discountAllowed?: boolean | null;

		/** Type: double */
		eachWayDivisor?: number | null;
		eventId?: string | null;

		/** The Event Type the market is contained within. */
		eventTypeId?: string | null;
		inPlay?: boolean | null;
		keyLineDefinition?: KeyLineDefinition;

		/**
		 * For Handicap and Line markets, the lines available on this market will be between the range of lineMinUnit and lineMaxUnit, in increments of the lineInterval value. e.g. If unit is runs, lineMinUnit=10, lineMaxUnit=20 and lineInterval=0.5, then valid lines include 10, 10.5, 11, 11.5 up to 20 runs.
		 * Type: double
		 */
		lineInterval?: number | null;

		/**
		 * For Handicap and Line markets, the maximum value for the outcome, in market units for this market (eg 100 runs).
		 * Type: double
		 */
		lineMaxUnit?: number | null;

		/**
		 * For Handicap and Line markets, the minimum value for the outcome, in market units for this market (eg 0 runs).
		 * Type: double
		 */
		lineMinUnit?: number | null;

		/** Type: double */
		marketBaseRate?: number | null;
		marketTime?: Date | null;
		marketType?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numberOfActiveRunners?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numberOfWinners?: number | null;
		openDate?: Date | null;
		persistenceEnabled?: boolean | null;
		priceLadderDefinition?: PriceLadderDefinition;
		raceType?: string | null;

		/** The market regulators. */
		regulators?: Array<string>;
		runners?: Array<RunnerDefinition>;
		runnersVoidable?: boolean | null;
		settledTime?: Date | null;
		status?: MarketDefinitionStatus | null;
		suspendTime?: Date | null;
		timezone?: string | null;
		turnInPlayEnabled?: boolean | null;
		venue?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		version?: string | null;
	}
	export interface MarketDefinitionFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		betDelay: FormControl<number | null | undefined>,
		bettingType: FormControl<MarketDefinitionBettingType | null | undefined>,
		bspMarket: FormControl<boolean | null | undefined>,
		bspReconciled: FormControl<boolean | null | undefined>,
		complete: FormControl<boolean | null | undefined>,
		countryCode: FormControl<string | null | undefined>,
		crossMatching: FormControl<boolean | null | undefined>,
		discountAllowed: FormControl<boolean | null | undefined>,

		/** Type: double */
		eachWayDivisor: FormControl<number | null | undefined>,
		eventId: FormControl<string | null | undefined>,

		/** The Event Type the market is contained within. */
		eventTypeId: FormControl<string | null | undefined>,
		inPlay: FormControl<boolean | null | undefined>,

		/**
		 * For Handicap and Line markets, the lines available on this market will be between the range of lineMinUnit and lineMaxUnit, in increments of the lineInterval value. e.g. If unit is runs, lineMinUnit=10, lineMaxUnit=20 and lineInterval=0.5, then valid lines include 10, 10.5, 11, 11.5 up to 20 runs.
		 * Type: double
		 */
		lineInterval: FormControl<number | null | undefined>,

		/**
		 * For Handicap and Line markets, the maximum value for the outcome, in market units for this market (eg 100 runs).
		 * Type: double
		 */
		lineMaxUnit: FormControl<number | null | undefined>,

		/**
		 * For Handicap and Line markets, the minimum value for the outcome, in market units for this market (eg 0 runs).
		 * Type: double
		 */
		lineMinUnit: FormControl<number | null | undefined>,

		/** Type: double */
		marketBaseRate: FormControl<number | null | undefined>,
		marketTime: FormControl<Date | null | undefined>,
		marketType: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numberOfActiveRunners: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numberOfWinners: FormControl<number | null | undefined>,
		openDate: FormControl<Date | null | undefined>,
		persistenceEnabled: FormControl<boolean | null | undefined>,
		raceType: FormControl<string | null | undefined>,
		runnersVoidable: FormControl<boolean | null | undefined>,
		settledTime: FormControl<Date | null | undefined>,
		status: FormControl<MarketDefinitionStatus | null | undefined>,
		suspendTime: FormControl<Date | null | undefined>,
		timezone: FormControl<string | null | undefined>,
		turnInPlayEnabled: FormControl<boolean | null | undefined>,
		venue: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateMarketDefinitionFormGroup() {
		return new FormGroup<MarketDefinitionFormProperties>({
			betDelay: new FormControl<number | null | undefined>(undefined),
			bettingType: new FormControl<MarketDefinitionBettingType | null | undefined>(undefined),
			bspMarket: new FormControl<boolean | null | undefined>(undefined),
			bspReconciled: new FormControl<boolean | null | undefined>(undefined),
			complete: new FormControl<boolean | null | undefined>(undefined),
			countryCode: new FormControl<string | null | undefined>(undefined),
			crossMatching: new FormControl<boolean | null | undefined>(undefined),
			discountAllowed: new FormControl<boolean | null | undefined>(undefined),
			eachWayDivisor: new FormControl<number | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			eventTypeId: new FormControl<string | null | undefined>(undefined),
			inPlay: new FormControl<boolean | null | undefined>(undefined),
			lineInterval: new FormControl<number | null | undefined>(undefined),
			lineMaxUnit: new FormControl<number | null | undefined>(undefined),
			lineMinUnit: new FormControl<number | null | undefined>(undefined),
			marketBaseRate: new FormControl<number | null | undefined>(undefined),
			marketTime: new FormControl<Date | null | undefined>(undefined),
			marketType: new FormControl<string | null | undefined>(undefined),
			numberOfActiveRunners: new FormControl<number | null | undefined>(undefined),
			numberOfWinners: new FormControl<number | null | undefined>(undefined),
			openDate: new FormControl<Date | null | undefined>(undefined),
			persistenceEnabled: new FormControl<boolean | null | undefined>(undefined),
			raceType: new FormControl<string | null | undefined>(undefined),
			runnersVoidable: new FormControl<boolean | null | undefined>(undefined),
			settledTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<MarketDefinitionStatus | null | undefined>(undefined),
			suspendTime: new FormControl<Date | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
			turnInPlayEnabled: new FormControl<boolean | null | undefined>(undefined),
			venue: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MarketDefinitionBettingType { ODDS = 'ODDS', LINE = 'LINE', RANGE = 'RANGE', ASIAN_HANDICAP_DOUBLE_LINE = 'ASIAN_HANDICAP_DOUBLE_LINE', ASIAN_HANDICAP_SINGLE_LINE = 'ASIAN_HANDICAP_SINGLE_LINE' }

	export interface RunnerDefinition {

		/** Type: double */
		adjustmentFactor?: number | null;

		/** Type: double */
		bsp?: number | null;

		/**
		 * Handicap - the handicap of the runner (selection) (null if not applicable)
		 * Type: double
		 */
		hc?: number | null;

		/**
		 * Selection Id - the id of the runner (selection)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;
		removalDate?: Date | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sortPriority?: number | null;
		status?: RunnerDefinitionStatus | null;
	}
	export interface RunnerDefinitionFormProperties {

		/** Type: double */
		adjustmentFactor: FormControl<number | null | undefined>,

		/** Type: double */
		bsp: FormControl<number | null | undefined>,

		/**
		 * Handicap - the handicap of the runner (selection) (null if not applicable)
		 * Type: double
		 */
		hc: FormControl<number | null | undefined>,

		/**
		 * Selection Id - the id of the runner (selection)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,
		removalDate: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sortPriority: FormControl<number | null | undefined>,
		status: FormControl<RunnerDefinitionStatus | null | undefined>,
	}
	export function CreateRunnerDefinitionFormGroup() {
		return new FormGroup<RunnerDefinitionFormProperties>({
			adjustmentFactor: new FormControl<number | null | undefined>(undefined),
			bsp: new FormControl<number | null | undefined>(undefined),
			hc: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			removalDate: new FormControl<Date | null | undefined>(undefined),
			sortPriority: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<RunnerDefinitionStatus | null | undefined>(undefined),
		});

	}

	export enum RunnerDefinitionStatus { ACTIVE = 'ACTIVE', WINNER = 'WINNER', LOSER = 'LOSER', REMOVED = 'REMOVED', REMOVED_VACANT = 'REMOVED_VACANT', HIDDEN = 'HIDDEN', PLACED = 'PLACED' }

	export enum MarketDefinitionStatus { INACTIVE = 'INACTIVE', OPEN = 'OPEN', SUSPENDED = 'SUSPENDED', CLOSED = 'CLOSED' }

	export interface MarketFilter {
		bettingTypes?: Array<MarketDefinitionBettingType>;
		bspMarket?: boolean | null;
		countryCodes?: Array<string>;
		eventIds?: Array<string>;
		eventTypeIds?: Array<string>;
		marketIds?: Array<string>;
		marketTypes?: Array<string>;
		raceTypes?: Array<string>;
		turnInPlayEnabled?: boolean | null;
		venues?: Array<string>;
	}
	export interface MarketFilterFormProperties {
		bspMarket: FormControl<boolean | null | undefined>,
		turnInPlayEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateMarketFilterFormGroup() {
		return new FormGroup<MarketFilterFormProperties>({
			bspMarket: new FormControl<boolean | null | undefined>(undefined),
			turnInPlayEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface MarketSubscriptionMessage extends RequestMessage {

		/** Token value delta (received in MarketChangeMessage) that should be passed to resume a subscription */
		clk?: string | null;

		/**
		 * Conflate Milliseconds - the conflation rate (looped back on initial image after validation: bounds are 0 to 120000)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		conflateMs?: string | null;

		/**
		 * Heartbeat Milliseconds - the heartbeat rate (looped back on initial image after validation: bounds are 500 to 5000)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		heartbeatMs?: string | null;

		/** Token value (received in initial MarketChangeMessage) that should be passed to resume a subscription */
		initialClk?: string | null;
		marketDataFilter?: MarketDataFilter;
		marketFilter?: MarketFilter;

		/** Segmentation Enabled - allow the server to send large sets of data in segments, instead of a single block */
		segmentationEnabled?: boolean | null;
	}
	export interface MarketSubscriptionMessageFormProperties extends RequestMessageFormProperties {

		/** Token value delta (received in MarketChangeMessage) that should be passed to resume a subscription */
		clk: FormControl<string | null | undefined>,

		/**
		 * Conflate Milliseconds - the conflation rate (looped back on initial image after validation: bounds are 0 to 120000)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		conflateMs: FormControl<string | null | undefined>,

		/**
		 * Heartbeat Milliseconds - the heartbeat rate (looped back on initial image after validation: bounds are 500 to 5000)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		heartbeatMs: FormControl<string | null | undefined>,

		/** Token value (received in initial MarketChangeMessage) that should be passed to resume a subscription */
		initialClk: FormControl<string | null | undefined>,

		/** Segmentation Enabled - allow the server to send large sets of data in segments, instead of a single block */
		segmentationEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateMarketSubscriptionMessageFormGroup() {
		return new FormGroup<MarketSubscriptionMessageFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			op: new FormControl<string | null | undefined>(undefined),
			clk: new FormControl<string | null | undefined>(undefined),
			conflateMs: new FormControl<string | null | undefined>(undefined),
			heartbeatMs: new FormControl<string | null | undefined>(undefined),
			initialClk: new FormControl<string | null | undefined>(undefined),
			segmentationEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Order {

		/**
		 * Average Price Matched - the average price the order was matched at (null if the order is not matched). This value is not meaningful for activity on Line markets and is not guaranteed to be returned or maintained for these markets.
		 * Type: double
		 */
		avp?: number | null;

		/**
		 * BSP Liability - the BSP liability of the order (null if the order is not a BSP order)
		 * Type: double
		 */
		bsp?: number | null;

		/**
		 * Cancelled Date - the date the order was cancelled (null if the order is not cancelled)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		cd?: string | null;

		/** Bet Id - the id of the order */
		id?: string | null;

		/**
		 * Lapsed Date - the date the order was lapsed (null if the order is not lapsed)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		ld?: string | null;

		/** Lapse Status Reason Code - the reason that some or all of this order has been lapsed (null if no portion of the order is lapsed */
		lsrc?: string | null;

		/**
		 * Matched Date - the date the order was matched (null if the order is not matched)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		md?: string | null;

		/** Order Type - the type of the order (L = LIMIT, MOC = MARKET_ON_CLOSE, LOC = LIMIT_ON_CLOSE) */
		ot?: OrderOt | null;

		/**
		 * Price - the original placed price of the order. Line markets operate at even-money odds of 2.0. However, price for these markets refers to the line positions available as defined by the markets min-max range and interval steps
		 * Type: double
		 */
		p?: number | null;

		/**
		 * Placed Date - the date the order was placed
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		pd?: string | null;

		/** Persistence Type - whether the order will persist at in play or not (L = LAPSE, P = PERSIST, MOC = Market On Close) */
		pt?: OrderPt | null;

		/** Regulator Auth Code - the auth code returned by the regulator */
		rac?: string | null;

		/** Regulator Code - the regulator of the order */
		rc?: string | null;

		/** Order Reference - the customer's order reference for this order (empty string if one was not set) */
		rfo?: string | null;

		/** Strategy Reference - the customer's strategy reference for this order (empty string if one was not set) */
		rfs?: string | null;

		/**
		 * Size - the original placed size of the order
		 * Type: double
		 */
		s?: number | null;

		/**
		 * Size Cancelled - the amount of the order that has been cancelled
		 * Type: double
		 */
		sc?: number | null;

		/** Side - the side of the order. For Line markets a 'B' bet refers to a SELL line and an 'L' bet refers to a BUY line. */
		side?: OrderSide | null;

		/**
		 * Size Lapsed - the amount of the order that has been lapsed
		 * Type: double
		 */
		sl?: number | null;

		/**
		 * Size Matched - the amount of the order that has been matched
		 * Type: double
		 */
		sm?: number | null;

		/**
		 * Size Remaining - the amount of the order that is remaining unmatched
		 * Type: double
		 */
		sr?: number | null;

		/** Status - the status of the order (E = EXECUTABLE, EC = EXECUTION_COMPLETE) */
		status?: OrderStatus | null;

		/**
		 * Size Voided - the amount of the order that has been voided
		 * Type: double
		 */
		sv?: number | null;
	}
	export interface OrderFormProperties {

		/**
		 * Average Price Matched - the average price the order was matched at (null if the order is not matched). This value is not meaningful for activity on Line markets and is not guaranteed to be returned or maintained for these markets.
		 * Type: double
		 */
		avp: FormControl<number | null | undefined>,

		/**
		 * BSP Liability - the BSP liability of the order (null if the order is not a BSP order)
		 * Type: double
		 */
		bsp: FormControl<number | null | undefined>,

		/**
		 * Cancelled Date - the date the order was cancelled (null if the order is not cancelled)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		cd: FormControl<string | null | undefined>,

		/** Bet Id - the id of the order */
		id: FormControl<string | null | undefined>,

		/**
		 * Lapsed Date - the date the order was lapsed (null if the order is not lapsed)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		ld: FormControl<string | null | undefined>,

		/** Lapse Status Reason Code - the reason that some or all of this order has been lapsed (null if no portion of the order is lapsed */
		lsrc: FormControl<string | null | undefined>,

		/**
		 * Matched Date - the date the order was matched (null if the order is not matched)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		md: FormControl<string | null | undefined>,

		/** Order Type - the type of the order (L = LIMIT, MOC = MARKET_ON_CLOSE, LOC = LIMIT_ON_CLOSE) */
		ot: FormControl<OrderOt | null | undefined>,

		/**
		 * Price - the original placed price of the order. Line markets operate at even-money odds of 2.0. However, price for these markets refers to the line positions available as defined by the markets min-max range and interval steps
		 * Type: double
		 */
		p: FormControl<number | null | undefined>,

		/**
		 * Placed Date - the date the order was placed
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		pd: FormControl<string | null | undefined>,

		/** Persistence Type - whether the order will persist at in play or not (L = LAPSE, P = PERSIST, MOC = Market On Close) */
		pt: FormControl<OrderPt | null | undefined>,

		/** Regulator Auth Code - the auth code returned by the regulator */
		rac: FormControl<string | null | undefined>,

		/** Regulator Code - the regulator of the order */
		rc: FormControl<string | null | undefined>,

		/** Order Reference - the customer's order reference for this order (empty string if one was not set) */
		rfo: FormControl<string | null | undefined>,

		/** Strategy Reference - the customer's strategy reference for this order (empty string if one was not set) */
		rfs: FormControl<string | null | undefined>,

		/**
		 * Size - the original placed size of the order
		 * Type: double
		 */
		s: FormControl<number | null | undefined>,

		/**
		 * Size Cancelled - the amount of the order that has been cancelled
		 * Type: double
		 */
		sc: FormControl<number | null | undefined>,

		/** Side - the side of the order. For Line markets a 'B' bet refers to a SELL line and an 'L' bet refers to a BUY line. */
		side: FormControl<OrderSide | null | undefined>,

		/**
		 * Size Lapsed - the amount of the order that has been lapsed
		 * Type: double
		 */
		sl: FormControl<number | null | undefined>,

		/**
		 * Size Matched - the amount of the order that has been matched
		 * Type: double
		 */
		sm: FormControl<number | null | undefined>,

		/**
		 * Size Remaining - the amount of the order that is remaining unmatched
		 * Type: double
		 */
		sr: FormControl<number | null | undefined>,

		/** Status - the status of the order (E = EXECUTABLE, EC = EXECUTION_COMPLETE) */
		status: FormControl<OrderStatus | null | undefined>,

		/**
		 * Size Voided - the amount of the order that has been voided
		 * Type: double
		 */
		sv: FormControl<number | null | undefined>,
	}
	export function CreateOrderFormGroup() {
		return new FormGroup<OrderFormProperties>({
			avp: new FormControl<number | null | undefined>(undefined),
			bsp: new FormControl<number | null | undefined>(undefined),
			cd: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			ld: new FormControl<string | null | undefined>(undefined),
			lsrc: new FormControl<string | null | undefined>(undefined),
			md: new FormControl<string | null | undefined>(undefined),
			ot: new FormControl<OrderOt | null | undefined>(undefined),
			p: new FormControl<number | null | undefined>(undefined),
			pd: new FormControl<string | null | undefined>(undefined),
			pt: new FormControl<OrderPt | null | undefined>(undefined),
			rac: new FormControl<string | null | undefined>(undefined),
			rc: new FormControl<string | null | undefined>(undefined),
			rfo: new FormControl<string | null | undefined>(undefined),
			rfs: new FormControl<string | null | undefined>(undefined),
			s: new FormControl<number | null | undefined>(undefined),
			sc: new FormControl<number | null | undefined>(undefined),
			side: new FormControl<OrderSide | null | undefined>(undefined),
			sl: new FormControl<number | null | undefined>(undefined),
			sm: new FormControl<number | null | undefined>(undefined),
			sr: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<OrderStatus | null | undefined>(undefined),
			sv: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum OrderOt { L = 'L', LOC = 'LOC', MOC = 'MOC' }

	export enum OrderPt { L = 'L', P = 'P', MOC = 'MOC' }

	export enum OrderSide { B = 'B', L = 'L' }

	export enum OrderStatus { E = 'E', EC = 'EC' }

	export interface OrderChangeMessage extends ResponseMessage {

		/** Token value (non-null) should be stored and passed in a MarketSubscriptionMessage to resume subscription (in case of disconnect) */
		clk?: string | null;

		/**
		 * Conflate Milliseconds - the conflation rate (may differ from that requested if subscription is delayed)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		conflateMs?: string | null;

		/** Change Type - set to indicate the type of change - if null this is a delta) */
		ct?: MarketChangeMessageCt | null;

		/**
		 * Heartbeat Milliseconds - the heartbeat rate (may differ from requested: bounds are 500 to 30000)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		heartbeatMs?: string | null;

		/** Token value (non-null) should be stored and passed in a MarketSubscriptionMessage to resume subscription (in case of disconnect) */
		initialClk?: string | null;

		/** OrderMarketChanges - the modifications to account's orders (will be null on a heartbeat */
		oc?: Array<OrderMarketChange>;

		/**
		 * Publish Time (in millis since epoch) that the changes were generated
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		pt?: string | null;

		/** Segment Type - if the change is split into multiple segments, this denotes the beginning and end of a change, and segments in between. Will be null if data is not segmented */
		segmentType?: MarketChangeMessageSegmentType | null;

		/**
		 * Stream status: set to null if the exchange stream data is up to date and 503 if the downstream services are experiencing latencies
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status?: number | null;
	}
	export interface OrderChangeMessageFormProperties extends ResponseMessageFormProperties {

		/** Token value (non-null) should be stored and passed in a MarketSubscriptionMessage to resume subscription (in case of disconnect) */
		clk: FormControl<string | null | undefined>,

		/**
		 * Conflate Milliseconds - the conflation rate (may differ from that requested if subscription is delayed)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		conflateMs: FormControl<string | null | undefined>,

		/** Change Type - set to indicate the type of change - if null this is a delta) */
		ct: FormControl<MarketChangeMessageCt | null | undefined>,

		/**
		 * Heartbeat Milliseconds - the heartbeat rate (may differ from requested: bounds are 500 to 30000)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		heartbeatMs: FormControl<string | null | undefined>,

		/** Token value (non-null) should be stored and passed in a MarketSubscriptionMessage to resume subscription (in case of disconnect) */
		initialClk: FormControl<string | null | undefined>,

		/**
		 * Publish Time (in millis since epoch) that the changes were generated
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		pt: FormControl<string | null | undefined>,

		/** Segment Type - if the change is split into multiple segments, this denotes the beginning and end of a change, and segments in between. Will be null if data is not segmented */
		segmentType: FormControl<MarketChangeMessageSegmentType | null | undefined>,

		/**
		 * Stream status: set to null if the exchange stream data is up to date and 503 if the downstream services are experiencing latencies
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreateOrderChangeMessageFormGroup() {
		return new FormGroup<OrderChangeMessageFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			op: new FormControl<string | null | undefined>(undefined),
			clk: new FormControl<string | null | undefined>(undefined),
			conflateMs: new FormControl<string | null | undefined>(undefined),
			ct: new FormControl<MarketChangeMessageCt | null | undefined>(undefined),
			heartbeatMs: new FormControl<string | null | undefined>(undefined),
			initialClk: new FormControl<string | null | undefined>(undefined),
			pt: new FormControl<string | null | undefined>(undefined),
			segmentType: new FormControl<MarketChangeMessageSegmentType | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OrderMarketChange {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		accountId?: string | null;
		closed?: boolean | null;
		fullImage?: boolean | null;

		/** Market Id - the id of the market the order is on */
		id?: string | null;

		/** Order Changes - a list of changes to orders on a selection */
		orc?: Array<OrderRunnerChange>;
	}
	export interface OrderMarketChangeFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		accountId: FormControl<string | null | undefined>,
		closed: FormControl<boolean | null | undefined>,
		fullImage: FormControl<boolean | null | undefined>,

		/** Market Id - the id of the market the order is on */
		id: FormControl<string | null | undefined>,
	}
	export function CreateOrderMarketChangeFormGroup() {
		return new FormGroup<OrderMarketChangeFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			closed: new FormControl<boolean | null | undefined>(undefined),
			fullImage: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderRunnerChange {
		fullImage?: boolean | null;

		/**
		 * Handicap - the handicap of the runner (selection) (null if not applicable)
		 * Type: double
		 */
		hc?: number | null;

		/**
		 * Selection Id - the id of the runner (selection)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/** Matched Backs - matched amounts by distinct matched price on the Back side for this runner (selection) */
		mb?: Array<string>;

		/** Matched Lays - matched amounts by distinct matched price on the Lay side for this runner (selection) */
		ml?: Array<string>;

		/** Strategy Matches - Matched Backs and Matched Lays grouped by strategy reference */
		smc?: {[id: string]: StrategyMatchChange };

		/** Unmatched Orders - orders on this runner (selection) that are not fully matched */
		uo?: Array<Order>;
	}
	export interface OrderRunnerChangeFormProperties {
		fullImage: FormControl<boolean | null | undefined>,

		/**
		 * Handicap - the handicap of the runner (selection) (null if not applicable)
		 * Type: double
		 */
		hc: FormControl<number | null | undefined>,

		/**
		 * Selection Id - the id of the runner (selection)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** Strategy Matches - Matched Backs and Matched Lays grouped by strategy reference */
		smc: FormControl<{[id: string]: StrategyMatchChange } | null | undefined>,
	}
	export function CreateOrderRunnerChangeFormGroup() {
		return new FormGroup<OrderRunnerChangeFormProperties>({
			fullImage: new FormControl<boolean | null | undefined>(undefined),
			hc: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			smc: new FormControl<{[id: string]: StrategyMatchChange } | null | undefined>(undefined),
		});

	}

	export interface OrderFilter {

		/** Internal use only & should not be set on your filter (your subscription is already locked to your account). If set subscription will fail. */
		accountIds?: Array<number>;

		/** Restricts to specified customerStrategyRefs; this will filter orders and StrategyMatchChanges accordingly (Note: overall postition is not filtered) */
		customerStrategyRefs?: Array<string>;

		/** Returns overall / net position (See: OrderRunnerChange.mb / OrderRunnerChange.ml). Default=true */
		includeOverallPosition?: boolean | null;

		/** Returns strategy positions (See: OrderRunnerChange.smc=Map<customerStrategyRef, StrategyMatchChange>) - these are sent in delta format as per overall position. Default=false */
		partitionMatchedByStrategyRef?: boolean | null;
	}
	export interface OrderFilterFormProperties {

		/** Returns overall / net position (See: OrderRunnerChange.mb / OrderRunnerChange.ml). Default=true */
		includeOverallPosition: FormControl<boolean | null | undefined>,

		/** Returns strategy positions (See: OrderRunnerChange.smc=Map<customerStrategyRef, StrategyMatchChange>) - these are sent in delta format as per overall position. Default=false */
		partitionMatchedByStrategyRef: FormControl<boolean | null | undefined>,
	}
	export function CreateOrderFilterFormGroup() {
		return new FormGroup<OrderFilterFormProperties>({
			includeOverallPosition: new FormControl<boolean | null | undefined>(undefined),
			partitionMatchedByStrategyRef: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface OrderSubscriptionMessage extends RequestMessage {

		/** Token value delta (received in MarketChangeMessage) that should be passed to resume a subscription */
		clk?: string | null;

		/**
		 * Conflate Milliseconds - the conflation rate (looped back on initial image after validation: bounds are 0 to 120000)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		conflateMs?: string | null;

		/**
		 * Heartbeat Milliseconds - the heartbeat rate (looped back on initial image after validation: bounds are 500 to 5000)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		heartbeatMs?: string | null;

		/** Token value (received in initial MarketChangeMessage) that should be passed to resume a subscription */
		initialClk?: string | null;
		orderFilter?: OrderFilter;

		/** Segmentation Enabled - allow the server to send large sets of data in segments, instead of a single block */
		segmentationEnabled?: boolean | null;
	}
	export interface OrderSubscriptionMessageFormProperties extends RequestMessageFormProperties {

		/** Token value delta (received in MarketChangeMessage) that should be passed to resume a subscription */
		clk: FormControl<string | null | undefined>,

		/**
		 * Conflate Milliseconds - the conflation rate (looped back on initial image after validation: bounds are 0 to 120000)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		conflateMs: FormControl<string | null | undefined>,

		/**
		 * Heartbeat Milliseconds - the heartbeat rate (looped back on initial image after validation: bounds are 500 to 5000)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		heartbeatMs: FormControl<string | null | undefined>,

		/** Token value (received in initial MarketChangeMessage) that should be passed to resume a subscription */
		initialClk: FormControl<string | null | undefined>,

		/** Segmentation Enabled - allow the server to send large sets of data in segments, instead of a single block */
		segmentationEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateOrderSubscriptionMessageFormGroup() {
		return new FormGroup<OrderSubscriptionMessageFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			op: new FormControl<string | null | undefined>(undefined),
			clk: new FormControl<string | null | undefined>(undefined),
			conflateMs: new FormControl<string | null | undefined>(undefined),
			heartbeatMs: new FormControl<string | null | undefined>(undefined),
			initialClk: new FormControl<string | null | undefined>(undefined),
			segmentationEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PriceLadderDefinition {
		type?: PriceLadderDefinitionType | null;
	}
	export interface PriceLadderDefinitionFormProperties {
		type: FormControl<PriceLadderDefinitionType | null | undefined>,
	}
	export function CreatePriceLadderDefinitionFormGroup() {
		return new FormGroup<PriceLadderDefinitionFormProperties>({
			type: new FormControl<PriceLadderDefinitionType | null | undefined>(undefined),
		});

	}

	export enum PriceLadderDefinitionType { CLASSIC = 'CLASSIC', FINEST = 'FINEST', LINE_RANGE = 'LINE_RANGE' }

	export interface RequestMessage {

		/**
		 * Client generated unique id to link request with response (like json rpc)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** The operation type */
		op?: string | null;
	}
	export interface RequestMessageFormProperties {

		/**
		 * Client generated unique id to link request with response (like json rpc)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** The operation type */
		op: FormControl<string | null | undefined>,
	}
	export function CreateRequestMessageFormGroup() {
		return new FormGroup<RequestMessageFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			op: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResponseMessage {

		/**
		 * Client generated unique id to link request with response (like json rpc)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** The operation type */
		op?: string | null;
	}
	export interface ResponseMessageFormProperties {

		/**
		 * Client generated unique id to link request with response (like json rpc)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** The operation type */
		op: FormControl<string | null | undefined>,
	}
	export function CreateResponseMessageFormGroup() {
		return new FormGroup<ResponseMessageFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			op: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StatusMessage extends ResponseMessage {

		/** Is the connection now closed */
		connectionClosed?: boolean | null;

		/** The connection id */
		connectionId?: string | null;

		/**
		 * The number of connections available for this account at this moment in time. Present on responses to Authentication messages only.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		connectionsAvailable?: number | null;

		/** The type of error in case of a failure */
		errorCode?: StatusMessageErrorCode | null;

		/** Additional message in case of a failure */
		errorMessage?: string | null;

		/** The status of the last request */
		statusCode?: StatusMessageStatusCode | null;
	}
	export interface StatusMessageFormProperties extends ResponseMessageFormProperties {

		/** Is the connection now closed */
		connectionClosed: FormControl<boolean | null | undefined>,

		/** The connection id */
		connectionId: FormControl<string | null | undefined>,

		/**
		 * The number of connections available for this account at this moment in time. Present on responses to Authentication messages only.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		connectionsAvailable: FormControl<number | null | undefined>,

		/** The type of error in case of a failure */
		errorCode: FormControl<StatusMessageErrorCode | null | undefined>,

		/** Additional message in case of a failure */
		errorMessage: FormControl<string | null | undefined>,

		/** The status of the last request */
		statusCode: FormControl<StatusMessageStatusCode | null | undefined>,
	}
	export function CreateStatusMessageFormGroup() {
		return new FormGroup<StatusMessageFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			op: new FormControl<string | null | undefined>(undefined),
			connectionClosed: new FormControl<boolean | null | undefined>(undefined),
			connectionId: new FormControl<string | null | undefined>(undefined),
			connectionsAvailable: new FormControl<number | null | undefined>(undefined),
			errorCode: new FormControl<StatusMessageErrorCode | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<StatusMessageStatusCode | null | undefined>(undefined),
		});

	}

	export enum StatusMessageErrorCode { NO_APP_KEY = 'NO_APP_KEY', INVALID_APP_KEY = 'INVALID_APP_KEY', NO_SESSION = 'NO_SESSION', INVALID_SESSION_INFORMATION = 'INVALID_SESSION_INFORMATION', NOT_AUTHORIZED = 'NOT_AUTHORIZED', INVALID_INPUT = 'INVALID_INPUT', INVALID_CLOCK = 'INVALID_CLOCK', UNEXPECTED_ERROR = 'UNEXPECTED_ERROR', TIMEOUT = 'TIMEOUT', SUBSCRIPTION_LIMIT_EXCEEDED = 'SUBSCRIPTION_LIMIT_EXCEEDED', INVALID_REQUEST = 'INVALID_REQUEST', CONNECTION_FAILED = 'CONNECTION_FAILED', MAX_CONNECTION_LIMIT_EXCEEDED = 'MAX_CONNECTION_LIMIT_EXCEEDED', TOO_MANY_REQUESTS = 'TOO_MANY_REQUESTS' }

	export enum StatusMessageStatusCode { SUCCESS = 'SUCCESS', FAILURE = 'FAILURE' }

	export interface StrategyMatchChange {

		/** Matched Backs - matched amounts by distinct matched price on the Back side for this strategy */
		mb?: Array<string>;

		/** Matched Lays - matched amounts by distinct matched price on the Lay side for this strategy */
		ml?: Array<string>;
	}
	export interface StrategyMatchChangeFormProperties {
	}
	export function CreateStrategyMatchChangeFormGroup() {
		return new FormGroup<StrategyMatchChangeFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * This is a socket protocol delimited by CRLF (not http)
		 * Post request
		 * @param {AllRequestTypesExample} requestBody Requests are sent to socket
		 * @return {void} 
		 */
		RequestPost(requestBody: AllRequestTypesExample, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'request', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}
	}

}

