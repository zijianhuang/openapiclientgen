import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Balance {

		/** Sum owned - sum due by account */
		balance?: number | null;

		/** Sum owned by account */
		haben?: number | null;

		/** Sum due by account */
		soll?: number | null;
		txs?: Array<Transactions>;

		/** Type of subbalance (sub account) */
		variation?: BalanceVariation | null;
	}
	export interface BalanceFormProperties {

		/** Sum owned - sum due by account */
		balance: FormControl<number | null | undefined>,

		/** Sum owned by account */
		haben: FormControl<number | null | undefined>,

		/** Sum due by account */
		soll: FormControl<number | null | undefined>,

		/** Type of subbalance (sub account) */
		variation: FormControl<BalanceVariation | null | undefined>,
	}
	export function CreateBalanceFormGroup() {
		return new FormGroup<BalanceFormProperties>({
			balance: new FormControl<number | null | undefined>(undefined),
			haben: new FormControl<number | null | undefined>(undefined),
			soll: new FormControl<number | null | undefined>(undefined),
			variation: new FormControl<BalanceVariation | null | undefined>(undefined),
		});

	}

	export interface Transactions {

		/** Pretty print of counter signing party */
		cashier?: string | null;

		/** Cross signed timestamp of transaction */
		timeStamp?: number | null;

		/** Unique hash of this transaction as provided by counter signing party */
		txid?: string | null;

		/** Type of transaction per cashier implementation and schema */
		txtype?: string | null;

		/** Amount covered by transaction */
		value?: number | null;
	}
	export interface TransactionsFormProperties {

		/** Pretty print of counter signing party */
		cashier: FormControl<string | null | undefined>,

		/** Cross signed timestamp of transaction */
		timeStamp: FormControl<number | null | undefined>,

		/** Unique hash of this transaction as provided by counter signing party */
		txid: FormControl<string | null | undefined>,

		/** Type of transaction per cashier implementation and schema */
		txtype: FormControl<string | null | undefined>,

		/** Amount covered by transaction */
		value: FormControl<number | null | undefined>,
	}
	export function CreateTransactionsFormGroup() {
		return new FormGroup<TransactionsFormProperties>({
			cashier: new FormControl<string | null | undefined>(undefined),
			timeStamp: new FormControl<number | null | undefined>(undefined),
			txid: new FormControl<string | null | undefined>(undefined),
			txtype: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum BalanceVariation { gsb = 0, erzeugung = 1, eigenstrom = 2, co2 = 3, baeume = 4 }

	export interface DispatchLocation {

		/** Percentage of energy */
		energy?: number | null;

		/** GeoJSON encoded location of target or source of green energy. */
		location?: string | null;
	}
	export interface DispatchLocationFormProperties {

		/** Percentage of energy */
		energy: FormControl<number | null | undefined>,

		/** GeoJSON encoded location of target or source of green energy. */
		location: FormControl<string | null | undefined>,
	}
	export function CreateDispatchLocationFormGroup() {
		return new FormGroup<DispatchLocationFormProperties>({
			energy: new FormControl<number | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ForecastItem {

		/** CO2 footprint in Gramm per kwh (only Green Power) */
		co2_g_oekostrom?: number | null;

		/** Local/regional energyprice modification (cent per kWh or euro per MWh). */
		energyprice?: number | null;

		/** Timestamps in Seconds */
		epochtime?: number | null;

		/** Actual GreenPowerIndex for given Timestamp (between 0-100) */
		gsi?: number | null;

		/** Indicates if scaling is in operation to predict values */
		scaled?: boolean | null;

		/** Subindex just for Solar Energy */
		sci?: number | null;

		/** Timestamp in Standard Milliseconds */
		timeStamp?: number | null;
	}
	export interface ForecastItemFormProperties {

		/** CO2 footprint in Gramm per kwh (only Green Power) */
		co2_g_oekostrom: FormControl<number | null | undefined>,

		/** Local/regional energyprice modification (cent per kWh or euro per MWh). */
		energyprice: FormControl<number | null | undefined>,

		/** Timestamps in Seconds */
		epochtime: FormControl<number | null | undefined>,

		/** Actual GreenPowerIndex for given Timestamp (between 0-100) */
		gsi: FormControl<number | null | undefined>,

		/** Indicates if scaling is in operation to predict values */
		scaled: FormControl<boolean | null | undefined>,

		/** Subindex just for Solar Energy */
		sci: FormControl<number | null | undefined>,

		/** Timestamp in Standard Milliseconds */
		timeStamp: FormControl<number | null | undefined>,
	}
	export function CreateForecastItemFormGroup() {
		return new FormGroup<ForecastItemFormProperties>({
			co2_g_oekostrom: new FormControl<number | null | undefined>(undefined),
			energyprice: new FormControl<number | null | undefined>(undefined),
			epochtime: new FormControl<number | null | undefined>(undefined),
			gsi: new FormControl<number | null | undefined>(undefined),
			scaled: new FormControl<boolean | null | undefined>(undefined),
			sci: new FormControl<number | null | undefined>(undefined),
			timeStamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MarketData {

		/** Timestamp in Standard Milliseconds */
		end_timestamp?: number | null;

		/** Actual Marketprice for regional green power in EUR per MWh */
		marketprice?: number | null;

		/** Timestamp in Standard Milliseconds */
		start_timestamp?: number | null;
	}
	export interface MarketDataFormProperties {

		/** Timestamp in Standard Milliseconds */
		end_timestamp: FormControl<number | null | undefined>,

		/** Actual Marketprice for regional green power in EUR per MWh */
		marketprice: FormControl<number | null | undefined>,

		/** Timestamp in Standard Milliseconds */
		start_timestamp: FormControl<number | null | undefined>,
	}
	export function CreateMarketDataFormGroup() {
		return new FormGroup<MarketDataFormProperties>({
			end_timestamp: new FormControl<number | null | undefined>(undefined),
			marketprice: new FormControl<number | null | undefined>(undefined),
			start_timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Tariffh0 {

		/** Energy price in cent per kwh. (Arbeitspreis) including all taxes and fees. */
		ap?: number | null;

		/** Base price in euro per montah (Grundpreis) including all taxes and fees. */
		gp?: number | null;
	}
	export interface Tariffh0FormProperties {

		/** Energy price in cent per kwh. (Arbeitspreis) including all taxes and fees. */
		ap: FormControl<number | null | undefined>,

		/** Base price in euro per montah (Grundpreis) including all taxes and fees. */
		gp: FormControl<number | null | undefined>,
	}
	export function CreateTariffh0FormGroup() {
		return new FormGroup<Tariffh0FormProperties>({
			ap: new FormControl<number | null | undefined>(undefined),
			gp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Componentsh0 {

		/** Sub components of this price */
		components?: Array<Componentsh0>;

		/** What is this price component about */
		describtion?: string | null;

		/** Frequency/dependency of component */
		mutlityplier?: string | null;

		/** Single unit price multiyplier is based on */
		per?: number | null;

		/** Total sum in Euro for this price component. */
		sum?: number | null;
	}
	export interface Componentsh0FormProperties {

		/** What is this price component about */
		describtion: FormControl<string | null | undefined>,

		/** Frequency/dependency of component */
		mutlityplier: FormControl<string | null | undefined>,

		/** Single unit price multiyplier is based on */
		per: FormControl<number | null | undefined>,

		/** Total sum in Euro for this price component. */
		sum: FormControl<number | null | undefined>,
	}
	export function CreateComponentsh0FormGroup() {
		return new FormGroup<Componentsh0FormProperties>({
			describtion: new FormControl<string | null | undefined>(undefined),
			mutlityplier: new FormControl<string | null | undefined>(undefined),
			per: new FormControl<number | null | undefined>(undefined),
			sum: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Easee_charger {

		/** Given ID by easee api */
		id?: string | null;

		/** lastSession Info as given by easee API */
		lastSession?: string | null;

		/** Name set for charger */
		name?: string | null;
	}
	export interface Easee_chargerFormProperties {

		/** Given ID by easee api */
		id: FormControl<string | null | undefined>,

		/** lastSession Info as given by easee API */
		lastSession: FormControl<string | null | undefined>,

		/** Name set for charger */
		name: FormControl<string | null | undefined>,
	}
	export function CreateEasee_chargerFormGroup() {
		return new FormGroup<Easee_chargerFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			lastSession: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Ommeters {

		/** Factor imposed on metered current by a transducer */
		currentScalingFactor?: number | null;

		/** Metering load profile type associated with the meter */
		loadProfileType?: string | null;

		/** Basic address information for geo coding */
		location?: string | null;

		/** DLMS manufacturerId */
		manufacturerId?: string | null;

		/** Physical quantity being measured by the meter */
		measurementType?: string | null;

		/** Statistical metadata for this household */
		meta?: string | null;

		/** identifier to be used in other methods like readings or activities. */
		meterId?: string | null;

		/** Factor imposed on metered current AND voltage by a transducer */
		scalingFactor?: number | null;

		/** Device type of the meter */
		type?: string | null;

		/** Factor imposed on metered voltage by a transducer */
		voltageScalingFactor?: number | null;
	}
	export interface OmmetersFormProperties {

		/** Factor imposed on metered current by a transducer */
		currentScalingFactor: FormControl<number | null | undefined>,

		/** Metering load profile type associated with the meter */
		loadProfileType: FormControl<string | null | undefined>,

		/** Basic address information for geo coding */
		location: FormControl<string | null | undefined>,

		/** DLMS manufacturerId */
		manufacturerId: FormControl<string | null | undefined>,

		/** Physical quantity being measured by the meter */
		measurementType: FormControl<string | null | undefined>,

		/** Statistical metadata for this household */
		meta: FormControl<string | null | undefined>,

		/** identifier to be used in other methods like readings or activities. */
		meterId: FormControl<string | null | undefined>,

		/** Factor imposed on metered current AND voltage by a transducer */
		scalingFactor: FormControl<number | null | undefined>,

		/** Device type of the meter */
		type: FormControl<string | null | undefined>,

		/** Factor imposed on metered voltage by a transducer */
		voltageScalingFactor: FormControl<number | null | undefined>,
	}
	export function CreateOmmetersFormGroup() {
		return new FormGroup<OmmetersFormProperties>({
			currentScalingFactor: new FormControl<number | null | undefined>(undefined),
			loadProfileType: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			manufacturerId: new FormControl<string | null | undefined>(undefined),
			measurementType: new FormControl<string | null | undefined>(undefined),
			meta: new FormControl<string | null | undefined>(undefined),
			meterId: new FormControl<string | null | undefined>(undefined),
			scalingFactor: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			voltageScalingFactor: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns lastSession info for all easee wallboxes (chargers) given user has access to.
		 * Refer to easee.cloud API for details.
		 * Get alternative/easee/lastSessions
		 * @param {string} username Username as used on easy.cloud
		 * @param {string} password Password as used on easy.cloud
		 * @return {Array<Easee_charger>} Success
		 */
		EaseeSessions(username: string | null | undefined, password: string | null | undefined): Observable<Array<Easee_charger>> {
			return this.http.get<Array<Easee_charger>>(this.baseUri + 'alternative/easee/lastSessions?username=' + (username == null ? '' : encodeURIComponent(username)) + '&password=' + (password == null ? '' : encodeURIComponent(password)), {});
		}

		/**
		 * Last Session Info
		 * Returns lastSession info of OCCP Cloud service for clearing in corrently ecosystem. Might be tested via [OCPP cloud simulator](https://ocpp.corrently.cloud).
		 * Last session Info of managed EV charging stations connected to the correnty ecosystem.
		 * Get alternative/ocpp/lastSessions
		 * @return {Array<Easee_charger>} Success
		 */
		OcppSessions(): Observable<Array<Easee_charger>> {
			return this.http.get<Array<Easee_charger>>(this.baseUri + 'alternative/ocpp/lastSessions', {});
		}

		/**
		 * Public shared smart meters installed in Germany and available for subservices and exploration.
		 * Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery.
		 * Get alternative/openmeter/activities
		 * @return {Array<Ommeters>} Success
		 */
		OmActivities(): Observable<Array<Ommeters>> {
			return this.http.get<Array<Ommeters>>(this.baseUri + 'alternative/openmeter/activities', {});
		}

		/**
		 * Public shared smart meters installed in Germany and available for subservices and exploration.
		 * Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery.
		 * Get alternative/openmeter/meters
		 * @return {Array<Ommeters>} Success
		 */
		OmMeters(): Observable<Array<Ommeters>> {
			return this.http.get<Array<Ommeters>>(this.baseUri + 'alternative/openmeter/meters', {});
		}

		/**
		 * Public shared smart meters installed in Germany and available for subservices and exploration.
		 * Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery.
		 * Get alternative/openmeter/readings
		 * @return {Array<Ommeters>} Success
		 */
		OmReadings(): Observable<Array<Ommeters>> {
			return this.http.get<Array<Ommeters>>(this.baseUri + 'alternative/openmeter/readings', {});
		}

		/**
		 * Get best hour (with most regional green energy) in a given timeframe.
		 * Simple Wrapper around the GreenPowerIndex for easy integration into almost any SmartHome system that allows access to a JSON/REST Service This endpoint is designed to indicate if a device should be turned on or off. (Switch state).
		 * Get gsi/bestHour
		 * @param {string} zip Zipcode (Postleitzahl) of a city in Germany.
		 * @param {string} key Any valid Stromkonto account (address).
		 * @param {number} timeframe Number of hours to check (default 24 hours from now).
		 * @param {number} hours How many hours in row do you need the device turned on?
		 * @return {boolean} Success
		 */
		GsiBesthour(zip: string | null | undefined, key: string | null | undefined, timeframe: number | null | undefined, hours: number | null | undefined): Observable<boolean> {
			return this.http.get<boolean>(this.baseUri + 'gsi/bestHour?zip=' + (zip == null ? '' : encodeURIComponent(zip)) + '&key=' + (key == null ? '' : encodeURIComponent(key)) + '&timeframe=' + timeframe + '&hours=' + hours, {});
		}

		/**
		 * Dispatch (Green Energy Distribution Schedule)
		 * Dispatch of green energy has two aspects to consider:
		 * - Availability of gerneration facility (depends on weather and installed capacity)
		 * - Demand of energy
		 * Using the green power index (GrünstromIndex) we have received a tool to automate distribution of energy in order to prevent redispatch situations. Doing this alows to opimize resource usage (tactical) and leverage data for investment planning (strategic).
		 * Get gsi/dispatch
		 * @param {string} zip Zipcode (Postleitzahl) of a city in Germany.
		 * @param {string} key Any valid Stromkonto account (address).
		 * @return {GsiDispatchReturn} Success
		 */
		GsiDispatch(zip: string | null | undefined, key: string | null | undefined): Observable<GsiDispatchReturn> {
			return this.http.get<GsiDispatchReturn>(this.baseUri + 'gsi/dispatch?zip=' + (zip == null ? '' : encodeURIComponent(zip)) + '&key=' + (key == null ? '' : encodeURIComponent(key)), {});
		}

		/**
		 * Marketdata
		 * Compatible to awattar (https://api.awattar.de/v1/marketdata) API interface but data comes from GreenPowerIndex instead of EPEXSpot.
		 * Get gsi/marketdata
		 * @param {string} zip Zipcode (Postleitzahl) of a city in Germany.
		 * @return {GsiMarketdataReturn} Success
		 */
		GsiMarketdata(zip: string | null | undefined): Observable<GsiMarketdataReturn> {
			return this.http.get<GsiMarketdataReturn>(this.baseUri + 'gsi/marketdata?zip=' + (zip == null ? '' : encodeURIComponent(zip)), {});
		}

		/**
		 * Prediction
		 * Retrieval the GreenPowerIndex (GrünstromIndex) for a given city (by zipcode) in Germany.
		 * Get gsi/prediction
		 * @param {string} zip Zipcode (Postleitzahl) of a city in Germany.
		 * @param {string} key Any valid Stromkonto account (address).
		 * @return {GsiPredictionReturn} Success
		 */
		GsiPrediction(zip: string | null | undefined, key: string | null | undefined): Observable<GsiPredictionReturn> {
			return this.http.get<GsiPredictionReturn>(this.baseUri + 'gsi/prediction?zip=' + (zip == null ? '' : encodeURIComponent(zip)) + '&key=' + (key == null ? '' : encodeURIComponent(key)), {});
		}

		/**
		 * Meter Reading
		 * Retrieves a metered reading using account (Stromkonto).
		 * Get metering/reading
		 * @param {string} account Account/Address (Stromkonto) to retrieve reading for.
		 * @return {MeteringGetReturn} Success
		 */
		MeteringGet(account: string | null | undefined): Observable<MeteringGetReturn> {
			return this.http.get<MeteringGetReturn>(this.baseUri + 'metering/reading?account=' + (account == null ? '' : encodeURIComponent(account)), {});
		}

		/**
		 * Meter Reading
		 * Post meter reading and get it decorated. Best practice is to first create a new Stromkonto with the register method and choose a nice secret to protect updates. Now regularly send updates to get readings (consumption) split into green power (1.8.1) and grey power (1.8.2).
		 * Post metering/reading
		 * @return {MeteringPostReturn} Success
		 */
		MeteringPost(requestBody: MeteringPostPostBody): Observable<MeteringPostReturn> {
			return this.http.post<MeteringPostReturn>(this.baseUri + 'metering/reading', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Finishs a collection of data and finalizes receipt. Use this method after collecting all data via quittung/prepare
		 * Uses collected fields or provided fields to create a final receipt (Strom-Quittung).
		 * Post quittung/commit
		 * @return {string} Success
		 */
		QuittungComit(requestBody: QuittungComitPostBody): Observable<string> {
			return this.http.post(this.baseUri + 'quittung/commit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Create a receipt for an energy delivery (only valid in Germany).
		 * Creates a full featured receipt (Quittung) for an energy delivery as it appears on a charging session or similar events. Allows to embed receipt generation directly into external services.
		 * Post quittung/create
		 * @return {string} Success
		 */
		QuittungCreate(requestBody: QuittungCreatePostBody): Observable<string> {
			return this.http.post(this.baseUri + 'quittung/create', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Allows to collect data with several requests (or a single) for a receipt.
		 * During the first call an account parameter will be returned within the result object. Any other parameter will be set inside the preperation. If account is put into body/request in following requests, the existing collection will be extended/updated with the provided body parameters/values.
		 * Post quittung/prepare
		 * @return {string} Success
		 */
		QuittungPrepare(requestBody: QuittungPreparePostBody): Observable<string> {
			return this.http.post(this.baseUri + 'quittung/prepare', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Retrieve TSE (Technische Sicherheitseinrichtung) Data for a given receipt (Strom-Quittung).
		 * Allows to retrieve all relevant data assiciated to a TSE service call. E.q. Input parameters, public key and signature.
		 * Post quittung/tse
		 * @param {string} account Quittung Identifier  (serialnumber generated during receipt generation process)
		 * @return {QuittungTSEReturn} Success
		 */
		QuittungTSE(account: string | null | undefined): Observable<QuittungTSEReturn> {
			return this.http.post<QuittungTSEReturn>(this.baseUri + 'quittung/tse?account=' + (account == null ? '' : encodeURIComponent(account)), null, {});
		}

		/**
		 * Retrieve TSE (Technische Sicherheitseinrichtung) raw data  only for a given receipt (Strom-Quittung).
		 * Allows to retrieve input string for a signing process.
		 * Post quittung/tsedata
		 * @param {string} account Quittung Identifier  (serialnumber generated during receipt generation process)
		 * @return {void} Success
		 */
		QuittungTSEData(account: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'quittung/tsedata?account=' + (account == null ? '' : encodeURIComponent(account)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve TSE (Technische Sicherheitseinrichtung) Signature only for a given receipt (Strom-Quittung).
		 * Allows to retrieve digital signature for a given receipt.
		 * Post quittung/tsesignature
		 * @param {string} account Quittung Identifier  (serialnumber generated during receipt generation process)
		 * @return {void} Success
		 */
		QuittungTSEsignature(account: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'quittung/tsesignature?account=' + (account == null ? '' : encodeURIComponent(account)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve Zugferd XML for a given receipt (Strom-Quittung).
		 * Allows to retrieve XML of the zugferd invoice.
		 * Get quittung/zugferd
		 * @param {string} account Quittung Identifier  (serialnumber generated during receipt generation process)
		 * @return {void} Success
		 */
		QuittungZugferd(account: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'quittung/zugferd?account=' + (account == null ? '' : encodeURIComponent(account)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Balances
		 * Stromkonto represents a core component of the Corrently Ecosystem. It is a ledger for green energy related transactions and gets heavily used by the public Web-UI on www.stromkonto.net . Beside of some decoration and reformating operations all data is backed by the [Energychain blockchain](https://github.com/energychain/) to provide consensus of balances and transactions. Use this API Endppoint if you prefere not to work with low level Distributed Ledger Technology (Blockchain).
		 * Get stromkonto/balances
		 * @param {string} account Ethereum style address referencing a valid account (AKA Stromkonto).
		 * @return {Array<Balance>} Success
		 */
		StromkontoBalances(account: string | null | undefined): Observable<Array<Balance>> {
			return this.http.get<Array<Balance>>(this.baseUri + 'stromkonto/balances?account=' + (account == null ? '' : encodeURIComponent(account)), {});
		}

		/**
		 * Selectable Choices for customer
		 * Signable choices (contract changes) for customer.
		 * Get stromkonto/choices
		 * @param {string} account Ethereum style address referencing a valid account alias (never use Stromkonto directly!).
		 * @return {Array<Balance>} Success
		 */
		StromkontoChoices(account: string | null | undefined): Observable<Array<Balance>> {
			return this.http.get<Array<Balance>>(this.baseUri + 'stromkonto/choices?account=' + (account == null ? '' : encodeURIComponent(account)), {});
		}

		/**
		 * Login (via Mail)
		 * Sends a mail to a given email address to login this user. This function makes life a bit easier in order to not having to deal with private key protection on the user side as a shared key is used to sign transactions onbehalf of a particular account.  However viewing consensus information (balances) are public and *might move* from account to account without prior notification. Best practice for third party uses is to always start a session with the login RESP call and only create a user in case the response indicates an `unregistered` status.
		 * Post stromkonto/login
		 * @return {StromkontoLoginReturn} Success
		 */
		StromkontoLogin(requestBody: StromkontoLoginPostBody): Observable<StromkontoLoginReturn> {
			return this.http.post<StromkontoLoginReturn>(this.baseUri + 'stromkonto/login', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Prepare Transaction
		 * Prepares and inques a transaction (transfer) between two accounts (Stromkonten). This might be used to send any balanced entity. Using this endpoint will only prepare the transaction and enques it for signing and countersigning. This is done from within the user UI using validation process. Note: This API method does not validate any transations. In other words authentication, authorization, validation and actual transfer of value is done using a smart contract during processing in the energy blockchain.
		 * Post stromkonto/prepareTransaction
		 * @return {void} Success
		 */
		PrepareTransaction(requestBody: PrepareTransactionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'stromkonto/prepareTransaction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Register (new Stromkonto)
		 * Calling this method with an unregistered (new) email will create a new account (Stromkonto) with all balances having a value of `0` and no transaction history. In addition some basic properties like region and zipcode are set to allow further operation of account.
		 * Post stromkonto/register
		 * @return {void} Success
		 */
		StromkontoRegister(requestBody: StromkontoRegisterPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'stromkonto/register', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Energy Tariff price components
		 * Provides insides into the different cost components of energy for a private household.
		 * Sample Request: https://api.corrently.io/v2.0/tariff/components?email=demo%40corrently.io&zip=69168&kwha=3300
		 * Get tariff/components
		 * @param {string} zipcode Zipcode (Postzleitzahl) of a city in Germany.
		 * @param {string} email Valid email address to assign request to (pre offer generation). Ensure GDPR (DSGVO) at any time
		 * @param {number} kwha Total amount of energy in kilo-watt-hours per year. (sample 2100)
		 * @param {number} milliseconds If provided all results will be scaled to this timeframe
		 * @param {number} wh If provided together with milliseconds, a cost component stament for a particular event (like charging a car) will be created.
		 * @return {Componentsh0} Success
		 */
		Tariffcomponents(zipcode: string | null | undefined, email: string | null | undefined, kwha: number | null | undefined, milliseconds: number | null | undefined, wh: number | null | undefined): Observable<Componentsh0> {
			return this.http.get<Componentsh0>(this.baseUri + 'tariff/components?zipcode=' + (zipcode == null ? '' : encodeURIComponent(zipcode)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&kwha=' + kwha + '&milliseconds=' + milliseconds + '&wh=' + wh, {});
		}

		/**
		 * Energy Tariff information
		 * Provides pricing data for private households with standard load profiles (Standardlastprofil H0).
		 * Get tariff/slph0
		 * @param {string} zipcode Zipcode (Postzleitzahl) of a city in Germany.
		 * @return {Array<Tariffh0>} Success
		 */
		TariffSLPH0(zipcode: string | null | undefined): Observable<Array<Tariffh0>> {
			return this.http.get<Array<Tariffh0>>(this.baseUri + 'tariff/slph0?zipcode=' + (zipcode == null ? '' : encodeURIComponent(zipcode)), {});
		}

		/**
		 * WiM Proess Informtion
		 * Access to status information of an existing metering change and allocation process.
		 * Get wim/status
		 * @param {string} vid VID key of the process.
		 * @return {WimstatusReturn} Success
		 */
		Wimstatus(vid: string | null | undefined): Observable<WimstatusReturn> {
			return this.http.get<WimstatusReturn>(this.baseUri + 'wim/status?vid=' + (vid == null ? '' : encodeURIComponent(vid)), {});
		}
	}

	export interface GsiDispatchReturn {

		/** Averaged geospatial distance in kilometers between energy generation and usage at requested location. */
		avg_distance_km?: number | null;

		/** List of current sources of green energy (into requested location) */
		dispatch_from?: Array<DispatchLocation>;

		/** List of current targets of green energy (out of requested location) */
		dispatch_target?: Array<DispatchLocation>;

		/** Green Energy Mix after dispatch of given city */
		postmix?: string | null;

		/** Green Energy Mix prior to dispatch of given city */
		premix?: string | null;

		/** Evaluated timeframe for this request */
		timeframe?: GsiDispatchReturnTimeframe;
	}
	export interface GsiDispatchReturnFormProperties {

		/** Averaged geospatial distance in kilometers between energy generation and usage at requested location. */
		avg_distance_km: FormControl<number | null | undefined>,

		/** Green Energy Mix after dispatch of given city */
		postmix: FormControl<string | null | undefined>,

		/** Green Energy Mix prior to dispatch of given city */
		premix: FormControl<string | null | undefined>,
	}
	export function CreateGsiDispatchReturnFormGroup() {
		return new FormGroup<GsiDispatchReturnFormProperties>({
			avg_distance_km: new FormControl<number | null | undefined>(undefined),
			postmix: new FormControl<string | null | undefined>(undefined),
			premix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GsiDispatchReturnTimeframe {

		/** Ending time of window evaluated for this request/dispatches. */
		end?: number | null;

		/** Starting time of window evaluated in order to get dispatches */
		start?: number | null;
	}
	export interface GsiDispatchReturnTimeframeFormProperties {

		/** Ending time of window evaluated for this request/dispatches. */
		end: FormControl<number | null | undefined>,

		/** Starting time of window evaluated in order to get dispatches */
		start: FormControl<number | null | undefined>,
	}
	export function CreateGsiDispatchReturnTimeframeFormGroup() {
		return new FormGroup<GsiDispatchReturnTimeframeFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GsiMarketdataReturn {

		/** Energyprice for the upcomming hours */
		data?: Array<MarketData>;
	}
	export interface GsiMarketdataReturnFormProperties {
	}
	export function CreateGsiMarketdataReturnFormGroup() {
		return new FormGroup<GsiMarketdataReturnFormProperties>({
		});

	}

	export interface GsiPredictionReturn {

		/** Prediction for the upcomming hours */
		forecast?: Array<ForecastItem>;

		/** Standarized location info sourced for prediction */
		location?: GsiPredictionReturnLocation;

		/** Device switching recommendation. */
		matrix?: GsiPredictionReturnMatrix;
	}
	export interface GsiPredictionReturnFormProperties {
	}
	export function CreateGsiPredictionReturnFormGroup() {
		return new FormGroup<GsiPredictionReturnFormProperties>({
		});

	}

	export interface GsiPredictionReturnLocation {

		/** Pretty Print city name */
		city?: string | null;

		/** Zipcode (Postleitzahl) */
		zip?: string | null;
	}
	export interface GsiPredictionReturnLocationFormProperties {

		/** Pretty Print city name */
		city: FormControl<string | null | undefined>,

		/** Zipcode (Postleitzahl) */
		zip: FormControl<string | null | undefined>,
	}
	export function CreateGsiPredictionReturnLocationFormGroup() {
		return new FormGroup<GsiPredictionReturnLocationFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			zip: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GsiPredictionReturnMatrix {

		/** Indicates number of hours a device should run */
		h0?: GsiPredictionReturnMatrixH0;
	}
	export interface GsiPredictionReturnMatrixFormProperties {
	}
	export function CreateGsiPredictionReturnMatrixFormGroup() {
		return new FormGroup<GsiPredictionReturnMatrixFormProperties>({
		});

	}

	export interface GsiPredictionReturnMatrixH0 {

		/** device should run in 1 hour */
		avg_1?: string | null;

		/** device should run in 2 hours */
		avg_2?: string | null;

		/** device should run in 3 hour */
		avg_3?: string | null;
	}
	export interface GsiPredictionReturnMatrixH0FormProperties {

		/** device should run in 1 hour */
		avg_1: FormControl<string | null | undefined>,

		/** device should run in 2 hours */
		avg_2: FormControl<string | null | undefined>,

		/** device should run in 3 hour */
		avg_3: FormControl<string | null | undefined>,
	}
	export function CreateGsiPredictionReturnMatrixH0FormGroup() {
		return new FormGroup<GsiPredictionReturnMatrixH0FormProperties>({
			avg_1: new FormControl<string | null | undefined>(undefined),
			avg_2: new FormControl<string | null | undefined>(undefined),
			avg_3: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MeteringGetReturn {

		/** Reading as provided as input in Wh */
		'1.8.0'?: number | null;

		/** Green energy calculated using Green Power Index (GrünstromIndex) in Wh */
		'1.8.1'?: number | null;

		/** Grey energy calculated using Green Power Index (GrünstromIndex) in Wh */
		'1.8.2'?: number | null;

		/** Time this reading got imported into consensus (e.q. signed timestamp). */
		_processingTime?: number | null;

		/** Stromkonto/Metering address allocated (this is not the MELOID!) */
		account?: string | null;

		/** CO2 Emission of metered energy in a green energy mix (e.q. Ökostromtarif) */
		co2_g_oekostrom?: number | null;

		/** CO2 Emission of metered energy in a standard mix */
		co2_g_standard?: number | null;

		/** Update credits this meter has. Gets refilled automtically to prevent too frequent updates */
		credits?: any;

		/** API Consensus time this reading was fully received */
		timeStamp?: number | null;

		/** Time to Live for this reader. If no update is provided it gets decommissioned. */
		ttl?: number | null;
	}
	export interface MeteringGetReturnFormProperties {

		/** Reading as provided as input in Wh */
		'1.8.0': FormControl<number | null | undefined>,

		/** Green energy calculated using Green Power Index (GrünstromIndex) in Wh */
		'1.8.1': FormControl<number | null | undefined>,

		/** Grey energy calculated using Green Power Index (GrünstromIndex) in Wh */
		'1.8.2': FormControl<number | null | undefined>,

		/** Time this reading got imported into consensus (e.q. signed timestamp). */
		_processingTime: FormControl<number | null | undefined>,

		/** Stromkonto/Metering address allocated (this is not the MELOID!) */
		account: FormControl<string | null | undefined>,

		/** CO2 Emission of metered energy in a green energy mix (e.q. Ökostromtarif) */
		co2_g_oekostrom: FormControl<number | null | undefined>,

		/** CO2 Emission of metered energy in a standard mix */
		co2_g_standard: FormControl<number | null | undefined>,

		/** Update credits this meter has. Gets refilled automtically to prevent too frequent updates */
		credits: FormControl<any | null | undefined>,

		/** API Consensus time this reading was fully received */
		timeStamp: FormControl<number | null | undefined>,

		/** Time to Live for this reader. If no update is provided it gets decommissioned. */
		ttl: FormControl<number | null | undefined>,
	}
	export function CreateMeteringGetReturnFormGroup() {
		return new FormGroup<MeteringGetReturnFormProperties>({
			'1.8.0': new FormControl<number | null | undefined>(undefined),
			'1.8.1': new FormControl<number | null | undefined>(undefined),
			'1.8.2': new FormControl<number | null | undefined>(undefined),
			_processingTime: new FormControl<number | null | undefined>(undefined),
			account: new FormControl<string | null | undefined>(undefined),
			co2_g_oekostrom: new FormControl<number | null | undefined>(undefined),
			co2_g_standard: new FormControl<number | null | undefined>(undefined),
			credits: new FormControl<any | null | undefined>(undefined),
			timeStamp: new FormControl<number | null | undefined>(undefined),
			ttl: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MeteringPostPostBody {

		/** Meter Reading (prefered in Wh) */
		'1.8.0'?: number | null;

		/** Stromkonto account (address) associated with this metering. */
		account?: string | null;

		/** Alias for 1.8.0 */
		energy?: number | null;

		/** Some private password you might choose on first update. However you need to use the same secret on every further posts. */
		secret?: string | null;

		/** Alias for 1.8.0 */
		value?: number | null;

		/** Zipcode (Postleitzahl) of metered location */
		zip?: string | null;
	}
	export interface MeteringPostPostBodyFormProperties {

		/** Meter Reading (prefered in Wh) */
		'1.8.0': FormControl<number | null | undefined>,

		/** Stromkonto account (address) associated with this metering. */
		account: FormControl<string | null | undefined>,

		/** Alias for 1.8.0 */
		energy: FormControl<number | null | undefined>,

		/** Some private password you might choose on first update. However you need to use the same secret on every further posts. */
		secret: FormControl<string | null | undefined>,

		/** Alias for 1.8.0 */
		value: FormControl<number | null | undefined>,

		/** Zipcode (Postleitzahl) of metered location */
		zip: FormControl<string | null | undefined>,
	}
	export function CreateMeteringPostPostBodyFormGroup() {
		return new FormGroup<MeteringPostPostBodyFormProperties>({
			'1.8.0': new FormControl<number | null | undefined>(undefined),
			account: new FormControl<string | null | undefined>(undefined),
			energy: new FormControl<number | null | undefined>(undefined),
			secret: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
			zip: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MeteringPostReturn {

		/** Reading as provided as input in Wh */
		'1.8.0'?: number | null;

		/** Green energy calculated using Green Power Index (GrünstromIndex) in Wh */
		'1.8.1'?: number | null;

		/** Grey energy calculated using Green Power Index (GrünstromIndex) in Wh */
		'1.8.2'?: number | null;

		/** Time this reading got imported into consensus (e.q. signed timestamp). */
		_processingTime?: number | null;

		/** Stromkonto/Metering address allocated (this is not the MELOID!) */
		account?: string | null;

		/** CO2 Emission of metered energy in a green energy mix (e.q. Ökostromtarif) */
		co2_g_oekostrom?: number | null;

		/** CO2 Emission of metered energy in a standard mix */
		co2_g_standard?: number | null;

		/** API Consensus time this reading was fully received */
		timeStamp?: number | null;
	}
	export interface MeteringPostReturnFormProperties {

		/** Reading as provided as input in Wh */
		'1.8.0': FormControl<number | null | undefined>,

		/** Green energy calculated using Green Power Index (GrünstromIndex) in Wh */
		'1.8.1': FormControl<number | null | undefined>,

		/** Grey energy calculated using Green Power Index (GrünstromIndex) in Wh */
		'1.8.2': FormControl<number | null | undefined>,

		/** Time this reading got imported into consensus (e.q. signed timestamp). */
		_processingTime: FormControl<number | null | undefined>,

		/** Stromkonto/Metering address allocated (this is not the MELOID!) */
		account: FormControl<string | null | undefined>,

		/** CO2 Emission of metered energy in a green energy mix (e.q. Ökostromtarif) */
		co2_g_oekostrom: FormControl<number | null | undefined>,

		/** CO2 Emission of metered energy in a standard mix */
		co2_g_standard: FormControl<number | null | undefined>,

		/** API Consensus time this reading was fully received */
		timeStamp: FormControl<number | null | undefined>,
	}
	export function CreateMeteringPostReturnFormGroup() {
		return new FormGroup<MeteringPostReturnFormProperties>({
			'1.8.0': new FormControl<number | null | undefined>(undefined),
			'1.8.1': new FormControl<number | null | undefined>(undefined),
			'1.8.2': new FormControl<number | null | undefined>(undefined),
			_processingTime: new FormControl<number | null | undefined>(undefined),
			account: new FormControl<string | null | undefined>(undefined),
			co2_g_oekostrom: new FormControl<number | null | undefined>(undefined),
			co2_g_standard: new FormControl<number | null | undefined>(undefined),
			timeStamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface QuittungComitPostBody {
		account?: string | null;
	}
	export interface QuittungComitPostBodyFormProperties {
		account: FormControl<string | null | undefined>,
	}
	export function CreateQuittungComitPostBodyFormGroup() {
		return new FormGroup<QuittungComitPostBodyFormProperties>({
			account: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QuittungCreatePostBody {
		email?: string | null;
	}
	export interface QuittungCreatePostBodyFormProperties {
		email: FormControl<string | null | undefined>,
	}
	export function CreateQuittungCreatePostBodyFormGroup() {
		return new FormGroup<QuittungCreatePostBodyFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QuittungPreparePostBody {
		account?: string | null;
	}
	export interface QuittungPreparePostBodyFormProperties {
		account: FormControl<string | null | undefined>,
	}
	export function CreateQuittungPreparePostBodyFormGroup() {
		return new FormGroup<QuittungPreparePostBodyFormProperties>({
			account: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QuittungTSEReturn {

		/** JSON object that got signed by TSE. */
		data?: any;

		/** Public Key of TSE */
		publickey?: string | null;

		/** Datastring of JSON Object as it got used to create signature. */
		raw?: string | null;

		/** Resulting signature by signing raw datastring using private key of TSE. */
		signature?: string | null;
	}
	export interface QuittungTSEReturnFormProperties {

		/** JSON object that got signed by TSE. */
		data: FormControl<any | null | undefined>,

		/** Public Key of TSE */
		publickey: FormControl<string | null | undefined>,

		/** Datastring of JSON Object as it got used to create signature. */
		raw: FormControl<string | null | undefined>,

		/** Resulting signature by signing raw datastring using private key of TSE. */
		signature: FormControl<string | null | undefined>,
	}
	export function CreateQuittungTSEReturnFormGroup() {
		return new FormGroup<QuittungTSEReturnFormProperties>({
			data: new FormControl<any | null | undefined>(undefined),
			publickey: new FormControl<string | null | undefined>(undefined),
			raw: new FormControl<string | null | undefined>(undefined),
			signature: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StromkontoLoginPostBody {
		email?: string | null;
	}
	export interface StromkontoLoginPostBodyFormProperties {
		email: FormControl<string | null | undefined>,
	}
	export function CreateStromkontoLoginPostBodyFormGroup() {
		return new FormGroup<StromkontoLoginPostBodyFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StromkontoLoginReturn {

		/** Registration status of a user. In case unregistered gets returned use the `register` endpoint to (re-)register. */
		status?: StromkontoLoginReturnStatus | null;
	}
	export interface StromkontoLoginReturnFormProperties {

		/** Registration status of a user. In case unregistered gets returned use the `register` endpoint to (re-)register. */
		status: FormControl<StromkontoLoginReturnStatus | null | undefined>,
	}
	export function CreateStromkontoLoginReturnFormGroup() {
		return new FormGroup<StromkontoLoginReturnFormProperties>({
			status: new FormControl<StromkontoLoginReturnStatus | null | undefined>(undefined),
		});

	}

	export enum StromkontoLoginReturnStatus { registered = 0, unregistered = 1 }

	export interface PrepareTransactionPostBody {

		/** Stromkonto account address of sender */
		account?: string | null;

		/** Signature per Stromkonto setting (might be simple email confirmation link) */
		signature?: string | null;

		/** Stromkonto account address of reciever */
		to?: string | null;

		/** Amount to transfer (in Watthours for electricity, or pcs for trees) */
		value?: number | null;
		variation?: BalanceVariation | null;
	}
	export interface PrepareTransactionPostBodyFormProperties {

		/** Stromkonto account address of sender */
		account: FormControl<string | null | undefined>,

		/** Signature per Stromkonto setting (might be simple email confirmation link) */
		signature: FormControl<string | null | undefined>,

		/** Stromkonto account address of reciever */
		to: FormControl<string | null | undefined>,

		/** Amount to transfer (in Watthours for electricity, or pcs for trees) */
		value: FormControl<number | null | undefined>,
		variation: FormControl<BalanceVariation | null | undefined>,
	}
	export function CreatePrepareTransactionPostBodyFormGroup() {
		return new FormGroup<PrepareTransactionPostBodyFormProperties>({
			account: new FormControl<string | null | undefined>(undefined),
			signature: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
			variation: new FormControl<BalanceVariation | null | undefined>(undefined),
		});

	}

	export interface StromkontoRegisterPostBody {
		email?: string | null;
		first_name?: string | null;
		last_name?: string | null;
		zipcode?: string | null;
	}
	export interface StromkontoRegisterPostBodyFormProperties {
		email: FormControl<string | null | undefined>,
		first_name: FormControl<string | null | undefined>,
		last_name: FormControl<string | null | undefined>,
		zipcode: FormControl<string | null | undefined>,
	}
	export function CreateStromkontoRegisterPostBodyFormGroup() {
		return new FormGroup<StromkontoRegisterPostBodyFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			zipcode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WimstatusReturn {

		/** Starting time of process */
		wim_started?: number | null;

		/** Latest Status */
		wim_status?: string | null;
	}
	export interface WimstatusReturnFormProperties {

		/** Starting time of process */
		wim_started: FormControl<number | null | undefined>,

		/** Latest Status */
		wim_status: FormControl<string | null | undefined>,
	}
	export function CreateWimstatusReturnFormGroup() {
		return new FormGroup<WimstatusReturnFormProperties>({
			wim_started: new FormControl<number | null | undefined>(undefined),
			wim_status: new FormControl<string | null | undefined>(undefined),
		});

	}

}

