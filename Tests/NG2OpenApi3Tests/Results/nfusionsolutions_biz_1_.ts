import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Interval {

		/** Type: double */
		change?: number | null;

		/** Type: double */
		changePercent?: number | null;
		end?: Date | null;

		/** Type: double */
		high?: number | null;

		/** Type: double */
		last?: number | null;

		/** Type: double */
		low?: number | null;

		/** Type: double */
		open?: number | null;
		start?: Date | null;
	}
	export interface IntervalFormProperties {

		/** Type: double */
		change: FormControl<number | null | undefined>,

		/** Type: double */
		changePercent: FormControl<number | null | undefined>,
		end: FormControl<Date | null | undefined>,

		/** Type: double */
		high: FormControl<number | null | undefined>,

		/** Type: double */
		last: FormControl<number | null | undefined>,

		/** Type: double */
		low: FormControl<number | null | undefined>,

		/** Type: double */
		open: FormControl<number | null | undefined>,
		start: FormControl<Date | null | undefined>,
	}
	export function CreateIntervalFormGroup() {
		return new FormGroup<IntervalFormProperties>({
			change: new FormControl<number | null | undefined>(undefined),
			changePercent: new FormControl<number | null | undefined>(undefined),
			end: new FormControl<Date | null | undefined>(undefined),
			high: new FormControl<number | null | undefined>(undefined),
			last: new FormControl<number | null | undefined>(undefined),
			low: new FormControl<number | null | undefined>(undefined),
			open: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface IntervalCollection {
		baseCurrency?: string | null;
		intervals?: Array<Interval>;
		name?: string | null;
		symbol?: string | null;
	}
	export interface IntervalCollectionFormProperties {
		baseCurrency: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		symbol: FormControl<string | null | undefined>,
	}
	export function CreateIntervalCollectionFormGroup() {
		return new FormGroup<IntervalCollectionFormProperties>({
			baseCurrency: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IntervalCollectionResponse {
		data?: IntervalCollection;
		error?: string | null;
		requestedCurrency?: string | null;
		requestedSymbol?: string | null;
		requestedUnitOfMeasure?: string | null;
		success?: boolean | null;
	}
	export interface IntervalCollectionResponseFormProperties {
		error: FormControl<string | null | undefined>,
		requestedCurrency: FormControl<string | null | undefined>,
		requestedSymbol: FormControl<string | null | undefined>,
		requestedUnitOfMeasure: FormControl<string | null | undefined>,
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateIntervalCollectionResponseFormGroup() {
		return new FormGroup<IntervalCollectionResponseFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			requestedCurrency: new FormControl<string | null | undefined>(undefined),
			requestedSymbol: new FormControl<string | null | undefined>(undefined),
			requestedUnitOfMeasure: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Rate {
		symbol?: string | null;
		timestamp?: Date | null;

		/** Type: double */
		value?: number | null;
	}
	export interface RateFormProperties {
		symbol: FormControl<string | null | undefined>,
		timestamp: FormControl<Date | null | undefined>,

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateRateFormGroup() {
		return new FormGroup<RateFormProperties>({
			symbol: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RateResponse {
		data?: Rate;
		error?: string | null;
		requestedCurrency?: string | null;
		requestedSymbol?: string | null;
		requestedUnitOfMeasure?: string | null;
		success?: boolean | null;
	}
	export interface RateResponseFormProperties {
		error: FormControl<string | null | undefined>,
		requestedCurrency: FormControl<string | null | undefined>,
		requestedSymbol: FormControl<string | null | undefined>,
		requestedUnitOfMeasure: FormControl<string | null | undefined>,
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateRateResponseFormGroup() {
		return new FormGroup<RateResponseFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			requestedCurrency: new FormControl<string | null | undefined>(undefined),
			requestedSymbol: new FormControl<string | null | undefined>(undefined),
			requestedUnitOfMeasure: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Summary {

		/** Type: double */
		ask?: number | null;
		baseCurrency?: string | null;

		/** Type: double */
		bid?: number | null;

		/** Type: double */
		fiftyTwoWeekHigh?: number | null;

		/** Type: double */
		fiftyTwoWeekLow?: number | null;

		/** Type: double */
		fiftyTwoWeekPercentChange?: number | null;

		/** Type: double */
		fourWeekPercentChange?: number | null;

		/** Type: double */
		high?: number | null;

		/** Type: double */
		last?: number | null;

		/** Type: double */
		low?: number | null;

		/** Type: double */
		oneDayChange?: number | null;

		/** Type: double */
		oneDayPercentChange?: number | null;

		/** Type: double */
		oneDayValue?: number | null;

		/** Type: double */
		open?: number | null;
		symbol?: string | null;
		timeStamp?: Date | null;

		/** Type: double */
		twelveWeekPercentChange?: number | null;

		/** Type: double */
		yearToDatePercentChange?: number | null;
	}
	export interface SummaryFormProperties {

		/** Type: double */
		ask: FormControl<number | null | undefined>,
		baseCurrency: FormControl<string | null | undefined>,

		/** Type: double */
		bid: FormControl<number | null | undefined>,

		/** Type: double */
		fiftyTwoWeekHigh: FormControl<number | null | undefined>,

		/** Type: double */
		fiftyTwoWeekLow: FormControl<number | null | undefined>,

		/** Type: double */
		fiftyTwoWeekPercentChange: FormControl<number | null | undefined>,

		/** Type: double */
		fourWeekPercentChange: FormControl<number | null | undefined>,

		/** Type: double */
		high: FormControl<number | null | undefined>,

		/** Type: double */
		last: FormControl<number | null | undefined>,

		/** Type: double */
		low: FormControl<number | null | undefined>,

		/** Type: double */
		oneDayChange: FormControl<number | null | undefined>,

		/** Type: double */
		oneDayPercentChange: FormControl<number | null | undefined>,

		/** Type: double */
		oneDayValue: FormControl<number | null | undefined>,

		/** Type: double */
		open: FormControl<number | null | undefined>,
		symbol: FormControl<string | null | undefined>,
		timeStamp: FormControl<Date | null | undefined>,

		/** Type: double */
		twelveWeekPercentChange: FormControl<number | null | undefined>,

		/** Type: double */
		yearToDatePercentChange: FormControl<number | null | undefined>,
	}
	export function CreateSummaryFormGroup() {
		return new FormGroup<SummaryFormProperties>({
			ask: new FormControl<number | null | undefined>(undefined),
			baseCurrency: new FormControl<string | null | undefined>(undefined),
			bid: new FormControl<number | null | undefined>(undefined),
			fiftyTwoWeekHigh: new FormControl<number | null | undefined>(undefined),
			fiftyTwoWeekLow: new FormControl<number | null | undefined>(undefined),
			fiftyTwoWeekPercentChange: new FormControl<number | null | undefined>(undefined),
			fourWeekPercentChange: new FormControl<number | null | undefined>(undefined),
			high: new FormControl<number | null | undefined>(undefined),
			last: new FormControl<number | null | undefined>(undefined),
			low: new FormControl<number | null | undefined>(undefined),
			oneDayChange: new FormControl<number | null | undefined>(undefined),
			oneDayPercentChange: new FormControl<number | null | undefined>(undefined),
			oneDayValue: new FormControl<number | null | undefined>(undefined),
			open: new FormControl<number | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
			timeStamp: new FormControl<Date | null | undefined>(undefined),
			twelveWeekPercentChange: new FormControl<number | null | undefined>(undefined),
			yearToDatePercentChange: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SummaryResponse {
		data?: Summary;
		error?: string | null;
		requestedCurrency?: string | null;
		requestedSymbol?: string | null;
		requestedUnitOfMeasure?: string | null;
		success?: boolean | null;
	}
	export interface SummaryResponseFormProperties {
		error: FormControl<string | null | undefined>,
		requestedCurrency: FormControl<string | null | undefined>,
		requestedSymbol: FormControl<string | null | undefined>,
		requestedUnitOfMeasure: FormControl<string | null | undefined>,
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateSummaryResponseFormGroup() {
		return new FormGroup<SummaryResponseFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			requestedCurrency: new FormControl<string | null | undefined>(undefined),
			requestedSymbol: new FormControl<string | null | undefined>(undefined),
			requestedUnitOfMeasure: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get historical prices for requested currency pairs
		 * Historical OHLC data for the specified period and interval size
		 * The combination of the interval parameter and start and end dates can result in results
		 * being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.
		 * Get api/v1/Currencies/history
		 * @param {string} pairs comma separated list of currency pairs. For example: USD/CAD,USD/EUR,USD/AUD
		 * @param {Date} start start date of time period. format is <i>yyyy-mm-dd</i>
		 * @param {Date} end end date of time period. format is <i>yyyy-mm-dd</i>. Default is current date.
		 * @param {string} interval aggregation interval. Composed of an optional integer value (which defaults to 1 when not specified), 
		 * followed by a type string which must be one of the following values:
		 * y=year,
		 * m=month,
		 * w=week,
		 * d=day,
		 * h=hour,
		 * mi=minute
		 * For example, a yearly interval can be specified as "y" and 6 month interval as "6m". 
		 * If not specified the interval parameter default is 1 Day.
		 * @param {Currencies_History_GETFormat} format to override content negotiation specify a value of json or xml
		 * @return {Array<IntervalCollectionResponse>} Success
		 */
		Currencies_History_GET(pairs: string, start: Date, end: Date | null | undefined, interval: string | null | undefined, format: Currencies_History_GETFormat | null | undefined): Observable<Array<IntervalCollectionResponse>> {
			return this.http.get<Array<IntervalCollectionResponse>>(this.baseUri + 'api/v1/Currencies/history?pairs=' + (pairs == null ? '' : encodeURIComponent(pairs)) + '&start=' + start.toISOString() + '&end=' + end?.toISOString() + '&interval=' + (interval == null ? '' : encodeURIComponent(interval)) + '&format=' + format, {});
		}

		/**
		 * Get list of currency pairs supported by the history endpoint
		 * Only the currency pairs in the direction noted can be used with the history endpoint.
		 * For example: USD/CAD is not the same as CAD/USD
		 * Get api/v1/Currencies/history/supported
		 * @param {Currencies_History_GETFormat} format to override content negotiation specify a value of json or xml
		 * @return {Array<string>} Success
		 */
		Currencies_SupportedCurrencies_History_GET(format: Currencies_History_GETFormat | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/v1/Currencies/history/supported?format=' + format, {});
		}

		/**
		 * Get latest mid rate for requested currency pairs
		 * Current Mid Rate
		 * Get api/v1/Currencies/rate
		 * @param {string} pairs comma separated list of currency pairs. For example: USD/CAD,USD/EUR,USD/AUD
		 * @param {Currencies_History_GETFormat} format to override content negotiation specify a value of json or xml
		 * @return {Array<RateResponse>} Success
		 */
		Currencies_Rate_GET(pairs: string, format: Currencies_History_GETFormat | null | undefined): Observable<Array<RateResponse>> {
			return this.http.get<Array<RateResponse>>(this.baseUri + 'api/v1/Currencies/rate?pairs=' + (pairs == null ? '' : encodeURIComponent(pairs)) + '&format=' + format, {});
		}

		/**
		 * Get list of currencies supported by the rate endpoint
		 * Any of the currencies in this list can be paired with any other currency in this list when supplied to the Rate endpoint.
		 * For example: USD/CAD,CAD/USD,USD/EUR,EUR/CAD
		 * Get api/v1/Currencies/rate/supported
		 * @param {Currencies_History_GETFormat} format to override content negotiation specify a value of json or xml
		 * @return {Array<string>} Success
		 */
		Currencies_SupportedCurrencies_Rate_GET(format: Currencies_History_GETFormat | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/v1/Currencies/rate/supported?format=' + format, {});
		}

		/**
		 * Get latest Summary for requested currency pairs
		 * Current and daily summary information combined into a single quote
		 * Get api/v1/Currencies/summary
		 * @param {string} pairs comma separated list of currency pairs. For example: USD/CAD,USD/EUR,USD/AUD
		 * @param {Currencies_History_GETFormat} format to override content negotiation specify a value of json or xml
		 * @return {Array<SummaryResponse>} Success
		 */
		Currencies_Summary_GET(pairs: string, format: Currencies_History_GETFormat | null | undefined): Observable<Array<SummaryResponse>> {
			return this.http.get<Array<SummaryResponse>>(this.baseUri + 'api/v1/Currencies/summary?pairs=' + (pairs == null ? '' : encodeURIComponent(pairs)) + '&format=' + format, {});
		}

		/**
		 * Get list of currency pairs supported by the Summary endpoint
		 * Only the currency pairs in the direction noted can be used with the Summary endpoint.
		 * For example: USD/CAD is not the same as CAD/USD
		 * Get api/v1/Currencies/summary/supported
		 * @param {Currencies_History_GETFormat} format to override content negotiation specify a value of json or xml
		 * @return {Array<string>} Success
		 */
		Currencies_SupportedCurrencies_Summary_GET(format: Currencies_History_GETFormat | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/v1/Currencies/summary/supported?format=' + format, {});
		}

		/**
		 * Get historical benchmark prices for requested metals
		 * Historical OHLC data for the specified period and interval size
		 * The combination of the interval parameter and start and end dates can result in results
		 * being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.
		 * The historicalfx flag is used to determine whether to apply today's fx rates to a historical period, or to apply the historical rates from that same time frame.
		 * Get api/v1/Metals/benchmark/history
		 * @param {string} metals comma separated list of metals
		 * @param {Date} start start date of time period. format is <i>yyyy-mm-dd</i>
		 * @param {Date} end end date of time period. format is <i>yyyy-mm-dd</i>. Default is current date.
		 * @param {string} interval aggregation interval. Composed of an optional integer value (which defaults to 1 when not specified), 
		 * followed by a type string which must be one of the following values:
		 * y=year,
		 * m=month,
		 * w=week,
		 * d=day,
		 * h=hour,
		 * mi=minute
		 * For example, a yearly interval can be specified as "y" and 6 month interval as "6m". 
		 * If not specified the interval parameter default is 1 Day.
		 * @param {boolean} historicalfx if true use historical currency rates otherwise current currency rates. Defaults to true.
		 * @param {string} currency comma separated list of conversion currencies, defaults to USD
		 * @param {Metals_BenchmarkHistory_GETUnitofmeasure} unitofmeasure unit of meaure, defaults to troy ounces. allowed values are:
		 * mg=milligram
		 * g=gram
		 * kg=kilogram
		 * gr=grain
		 * oz=ounce
		 * toz=troy ounce
		 * ct=carat
		 * dwt=pennyweight
		 * @param {Currencies_History_GETFormat} format to override content negotiation specify a value of json or xml
		 * @return {Array<IntervalCollectionResponse>} Success
		 */
		Metals_BenchmarkHistory_GET(metals: string, start: Date, end: Date | null | undefined, interval: string | null | undefined, historicalfx: boolean | null | undefined, currency: string | null | undefined, unitofmeasure: Metals_BenchmarkHistory_GETUnitofmeasure | null | undefined, format: Currencies_History_GETFormat | null | undefined): Observable<Array<IntervalCollectionResponse>> {
			return this.http.get<Array<IntervalCollectionResponse>>(this.baseUri + 'api/v1/Metals/benchmark/history?metals=' + (metals == null ? '' : encodeURIComponent(metals)) + '&start=' + start.toISOString() + '&end=' + end?.toISOString() + '&interval=' + (interval == null ? '' : encodeURIComponent(interval)) + '&historicalfx=' + historicalfx + '&currency=' + (currency == null ? '' : encodeURIComponent(currency)) + '&unitofmeasure=' + unitofmeasure + '&format=' + format, {});
		}

		/**
		 * Get latest Benchmark prices for requested metals
		 * Benchmark price information
		 * Get api/v1/Metals/benchmark/summary
		 * @param {string} metals comma separated list of metals
		 * @param {string} currency comma separated list of conversion currencies, defaults to USD
		 * @param {Metals_BenchmarkHistory_GETUnitofmeasure} unitofmeasure unit of meaure, defaults to troy ounces. allowed values are:
		 * mg=milligram
		 * g=gram
		 * kg=kilogram
		 * gr=grain
		 * oz=ounce
		 * toz=troy ounce
		 * ct=carat
		 * dwt=pennyweight
		 * @param {Currencies_History_GETFormat} format to override content negotiation specify a value of json or xml
		 * @return {Array<SummaryResponse>} Success
		 */
		Metals_BenchmarkSummary_GET(metals: string, currency: string | null | undefined, unitofmeasure: Metals_BenchmarkHistory_GETUnitofmeasure | null | undefined, format: Currencies_History_GETFormat | null | undefined): Observable<Array<SummaryResponse>> {
			return this.http.get<Array<SummaryResponse>>(this.baseUri + 'api/v1/Metals/benchmark/summary?metals=' + (metals == null ? '' : encodeURIComponent(metals)) + '&currency=' + (currency == null ? '' : encodeURIComponent(currency)) + '&unitofmeasure=' + unitofmeasure + '&format=' + format, {});
		}

		/**
		 * Get list of symbols supported by the benchmark endpoints
		 * Get api/v1/Metals/benchmark/supported
		 * @param {Currencies_History_GETFormat} format to override content negotiation specify a value of json or xml
		 * @return {Array<string>} Success
		 */
		Metals_BenchmarkSupportedMetals_GET(format: Currencies_History_GETFormat | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/v1/Metals/benchmark/supported?format=' + format, {});
		}

		/**
		 * Get historical Spot prices for requested metals
		 * Historical OHLC data for the specified period and interval size
		 * The combination of the interval parameter and start and end dates can result in results
		 * being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.
		 * The historicalfx flag is used to determine whether to apply today's fx rates to a historical period, or to apply the historical rates from that same time frame.
		 * Get api/v1/Metals/spot/history
		 * @param {string} metals comma separated list of metals
		 * @param {Date} start start date of time period. format is <i>yyyy-mm-dd</i>
		 * @param {Date} end end date of time period. format is <i>yyyy-mm-dd</i>. Default is current date.
		 * @param {string} interval aggregation interval. Composed of an optional integer value (which defaults to 1 when not specified), 
		 * followed by a type string which must be one of the following values:
		 * y=year,
		 * m=month,
		 * w=week,
		 * d=day,
		 * h=hour,
		 * mi=minute
		 * For example, a yearly interval can be specified as "y" and 6 month interval as "6m". 
		 * If not specified the interval parameter default is 1 Day.
		 * @param {boolean} historicalfx if true use historical currency rates otherwise current currency rates. Defaults to true.
		 * @param {string} currency comma separated list of conversion currencies, defaults to USD
		 * @param {Metals_BenchmarkHistory_GETUnitofmeasure} unitofmeasure unit of meaure, defaults to troy ounces. allowed values are:
		 * mg=milligram
		 * g=gram
		 * kg=kilogram
		 * gr=grain
		 * oz=ounce
		 * toz=troy ounce
		 * ct=carat
		 * dwt=pennyweight
		 * @param {Currencies_History_GETFormat} format to override content negotiation specify a value of json or xml
		 * @return {Array<IntervalCollectionResponse>} Success
		 */
		Metals_SpotHistory_GET(metals: string, start: Date, end: Date | null | undefined, interval: string | null | undefined, historicalfx: boolean | null | undefined, currency: string | null | undefined, unitofmeasure: Metals_BenchmarkHistory_GETUnitofmeasure | null | undefined, format: Currencies_History_GETFormat | null | undefined): Observable<Array<IntervalCollectionResponse>> {
			return this.http.get<Array<IntervalCollectionResponse>>(this.baseUri + 'api/v1/Metals/spot/history?metals=' + (metals == null ? '' : encodeURIComponent(metals)) + '&start=' + start.toISOString() + '&end=' + end?.toISOString() + '&interval=' + (interval == null ? '' : encodeURIComponent(interval)) + '&historicalfx=' + historicalfx + '&currency=' + (currency == null ? '' : encodeURIComponent(currency)) + '&unitofmeasure=' + unitofmeasure + '&format=' + format, {});
		}

		/**
		 * Get Historical Performance for requested metals
		 * Historical Performance information
		 * Get api/v1/Metals/spot/performance
		 * @param {string} metals comma separated list of metals
		 * @param {string} currency comma separated list of conversion currencies, defaults to USD
		 * @param {Metals_BenchmarkHistory_GETUnitofmeasure} unitofmeasure unit of meaure, defaults to troy ounces. allowed values are:
		 * mg=milligram
		 * g=gram
		 * kg=kilogram
		 * gr=grain
		 * oz=ounce
		 * toz=troy ounce
		 * ct=carat
		 * dwt=pennyweight
		 * @param {Currencies_History_GETFormat} format to override content negotiation specify a value of json or xml
		 * @return {Array<IntervalCollectionResponse>} Success
		 */
		Metals_SpotHistoricalPerformance_GET(metals: string, currency: string | null | undefined, unitofmeasure: Metals_BenchmarkHistory_GETUnitofmeasure | null | undefined, format: Currencies_History_GETFormat | null | undefined): Observable<Array<IntervalCollectionResponse>> {
			return this.http.get<Array<IntervalCollectionResponse>>(this.baseUri + 'api/v1/Metals/spot/performance?metals=' + (metals == null ? '' : encodeURIComponent(metals)) + '&currency=' + (currency == null ? '' : encodeURIComponent(currency)) + '&unitofmeasure=' + unitofmeasure + '&format=' + format, {});
		}

		/**
		 * Get Historical Annual Performance for requested metals
		 * Annual Historical Performance information
		 * Get api/v1/Metals/spot/performance/annual
		 * @param {string} metals comma separated list of metals
		 * @param {string} currency comma separated list of conversion currencies, defaults to USD
		 * @param {Metals_BenchmarkHistory_GETUnitofmeasure} unitofmeasure unit of meaure, defaults to troy ounces. allowed values are:
		 * mg=milligram
		 * g=gram
		 * kg=kilogram
		 * gr=grain
		 * oz=ounce
		 * toz=troy ounce
		 * ct=carat
		 * dwt=pennyweight
		 * @param {Currencies_History_GETFormat} format to override content negotiation specify a value of json or xml
		 * @param {number} years Number of years of history to return. Defaults to 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<IntervalCollectionResponse>} Success
		 */
		Metals_SpotAnnualHistoricalPerformance_GET(metals: string, currency: string | null | undefined, unitofmeasure: Metals_BenchmarkHistory_GETUnitofmeasure | null | undefined, format: Currencies_History_GETFormat | null | undefined, years: number | null | undefined): Observable<Array<IntervalCollectionResponse>> {
			return this.http.get<Array<IntervalCollectionResponse>>(this.baseUri + 'api/v1/Metals/spot/performance/annual?metals=' + (metals == null ? '' : encodeURIComponent(metals)) + '&currency=' + (currency == null ? '' : encodeURIComponent(currency)) + '&unitofmeasure=' + unitofmeasure + '&format=' + format + '&years=' + years, {});
		}

		/**
		 * Get historical Spot Ratio prices for requested metals
		 * Historical data for the specified period and interval size
		 * The combination of the interval parameter and start and end dates can result in results
		 * being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.
		 * Get api/v1/Metals/spot/ratio/history
		 * @param {string} pairs comma separated list of metals
		 * @param {Date} start start date of time period. format is <i>yyyy-mm-dd</i>
		 * @param {Date} end end date of time period. format is <i>yyyy-mm-dd</i>. Default is current date.
		 * @param {string} interval aggregation interval. Composed of an optional integer value (which defaults to 1 when not specified), 
		 * followed by a type string which must be one of the following values:
		 * y=year,
		 * m=month,
		 * w=week,
		 * d=day,
		 * h=hour,
		 * mi=minute
		 * For example, a yearly interval can be specified as "y" and 6 month interval as "6m". 
		 * If not specified the interval parameter default is 1 Day.
		 * @param {Currencies_History_GETFormat} format to override content negotiation specify a value of json or xml
		 * @return {Array<IntervalCollectionResponse>} Success
		 */
		Metals_SpotRatioHistory_GET(pairs: string, start: Date, end: Date | null | undefined, interval: string | null | undefined, format: Currencies_History_GETFormat | null | undefined): Observable<Array<IntervalCollectionResponse>> {
			return this.http.get<Array<IntervalCollectionResponse>>(this.baseUri + 'api/v1/Metals/spot/ratio/history?pairs=' + (pairs == null ? '' : encodeURIComponent(pairs)) + '&start=' + start.toISOString() + '&end=' + end?.toISOString() + '&interval=' + (interval == null ? '' : encodeURIComponent(interval)) + '&format=' + format, {});
		}

		/**
		 * Get latest Spot Summary for requested metal ratios
		 * Ratios between prices of two metals
		 * Get api/v1/Metals/spot/ratio/summary
		 * @param {string} pairs comma separated list of metal pairs. For example: gold/silver,gold/platinum,silver/palladium
		 * @param {Currencies_History_GETFormat} format to override content negotiation specify a value of json or xml
		 * @return {Array<SummaryResponse>} Success
		 */
		Metals_SpotRatioSummary_GET(pairs: string, format: Currencies_History_GETFormat | null | undefined): Observable<Array<SummaryResponse>> {
			return this.http.get<Array<SummaryResponse>>(this.baseUri + 'api/v1/Metals/spot/ratio/summary?pairs=' + (pairs == null ? '' : encodeURIComponent(pairs)) + '&format=' + format, {});
		}

		/**
		 * Get latest Spot Summary for requested metals
		 * Current and daily summary information combined into a single quote
		 * Get api/v1/Metals/spot/summary
		 * @param {string} metals comma separated list of metals
		 * @param {string} currency comma separated list of conversion currencies, defaults to USD
		 * @param {Metals_BenchmarkHistory_GETUnitofmeasure} unitofmeasure unit of meaure, defaults to troy ounces. allowed values are:
		 * mg=milligram
		 * g=gram
		 * kg=kilogram
		 * gr=grain
		 * oz=ounce
		 * toz=troy ounce
		 * ct=carat
		 * dwt=pennyweight
		 * @param {Currencies_History_GETFormat} format to override content negotiation specify a value of json or xml
		 * @return {Array<SummaryResponse>} Success
		 */
		Metals_SpotSummary_GET(metals: string, currency: string | null | undefined, unitofmeasure: Metals_BenchmarkHistory_GETUnitofmeasure | null | undefined, format: Currencies_History_GETFormat | null | undefined): Observable<Array<SummaryResponse>> {
			return this.http.get<Array<SummaryResponse>>(this.baseUri + 'api/v1/Metals/spot/summary?metals=' + (metals == null ? '' : encodeURIComponent(metals)) + '&currency=' + (currency == null ? '' : encodeURIComponent(currency)) + '&unitofmeasure=' + unitofmeasure + '&format=' + format, {});
		}

		/**
		 * Get list of symbols supported by the spot endpoints
		 * Get api/v1/Metals/spot/supported
		 * @param {Currencies_History_GETFormat} format to override content negotiation specify a value of json or xml
		 * @return {Array<string>} Success
		 */
		Metals_SpotSupportedMetals_GET(format: Currencies_History_GETFormat | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/v1/Metals/spot/supported?format=' + format, {});
		}

		/**
		 * Get list of currencies supported by metals endpoints for currency conversion
		 * Get api/v1/Metals/supported/currency
		 * @param {Currencies_History_GETFormat} format to override content negotiation specify a value of json or xml
		 * @return {Array<string>} Success
		 */
		Metals_SupportedCurrencies_Metals_GET(format: Currencies_History_GETFormat | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/v1/Metals/supported/currency?format=' + format, {});
		}
	}

	export enum Currencies_History_GETFormat { json = 'json', xml = 'xml' }

	export enum Metals_BenchmarkHistory_GETUnitofmeasure { mg = 'mg', g = 'g', kg = 'kg', gr = 'gr', oz = 'oz', toz = 'toz', ct = 'ct', dwt = 'dwt' }

}

