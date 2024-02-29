import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ExecAPI {
		ExecAPIMarketstat?: Array<ExecAPIMarketstat>;
		method?: string | null;
		version?: string | null;
	}
	export interface ExecAPIFormProperties {
		method: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateExecAPIFormGroup() {
		return new FormGroup<ExecAPIFormProperties>({
			method: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExecAPIMarketstat {
		buy?: TypeStatXML;
		sell?: TypeStatXML;
	}
	export interface ExecAPIMarketstatFormProperties {
	}
	export function CreateExecAPIMarketstatFormGroup() {
		return new FormGroup<ExecAPIMarketstatFormProperties>({
		});

	}

	export interface TypeStatXML {

		/**
		 * Weighted Average Price
		 * Type: double
		 */
		avg?: number | null;

		/**
		 * Maximum Price
		 * Type: double
		 */
		max?: number | null;

		/**
		 * Median Price
		 * Type: double
		 */
		median?: number | null;

		/**
		 * Minimum Price
		 * Type: double
		 */
		min?: number | null;

		/**
		 * 5% Price
		 * Type: double
		 */
		percentile?: number | null;

		/**
		 * Standard Deviation
		 * Type: double
		 */
		stddev?: number | null;

		/**
		 * Order Volume
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		volume?: string | null;
	}
	export interface TypeStatXMLFormProperties {

		/**
		 * Weighted Average Price
		 * Type: double
		 */
		avg: FormControl<number | null | undefined>,

		/**
		 * Maximum Price
		 * Type: double
		 */
		max: FormControl<number | null | undefined>,

		/**
		 * Median Price
		 * Type: double
		 */
		median: FormControl<number | null | undefined>,

		/**
		 * Minimum Price
		 * Type: double
		 */
		min: FormControl<number | null | undefined>,

		/**
		 * 5% Price
		 * Type: double
		 */
		percentile: FormControl<number | null | undefined>,

		/**
		 * Standard Deviation
		 * Type: double
		 */
		stddev: FormControl<number | null | undefined>,

		/**
		 * Order Volume
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		volume: FormControl<string | null | undefined>,
	}
	export function CreateTypeStatXMLFormGroup() {
		return new FormGroup<TypeStatXMLFormProperties>({
			avg: new FormControl<number | null | undefined>(undefined),
			max: new FormControl<number | null | undefined>(undefined),
			median: new FormControl<number | null | undefined>(undefined),
			min: new FormControl<number | null | undefined>(undefined),
			percentile: new FormControl<number | null | undefined>(undefined),
			stddev: new FormControl<number | null | undefined>(undefined),
			volume: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ForQuery {

		/** is buy? */
		bid?: boolean | null;

		/**
		 * always 0
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		hours?: number | null;

		/**
		 * always 0
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minq?: number | null;

		/** Region IDs */
		regions?: Array<number>;

		/** System IDs */
		systems?: Array<number>;

		/** Type IDs */
		types?: Array<number>;
	}
	export interface ForQueryFormProperties {

		/** is buy? */
		bid: FormControl<boolean | null | undefined>,

		/**
		 * always 0
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		hours: FormControl<number | null | undefined>,

		/**
		 * always 0
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minq: FormControl<number | null | undefined>,
	}
	export function CreateForQueryFormGroup() {
		return new FormGroup<ForQueryFormProperties>({
			bid: new FormControl<boolean | null | undefined>(undefined),
			hours: new FormControl<number | null | undefined>(undefined),
			minq: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MarketStatXMLElement {
		buy?: TypeStatXML;
		sell?: TypeStatXML;
	}
	export interface MarketStatXMLElementFormProperties {
	}
	export function CreateMarketStatXMLElementFormGroup() {
		return new FormGroup<MarketStatXMLElementFormProperties>({
		});

	}

	export interface Type {
		buy?: TypeStat;
		sell?: TypeStat;
	}
	export interface TypeFormProperties {
	}
	export function CreateTypeFormGroup() {
		return new FormGroup<TypeFormProperties>({
		});

	}

	export interface TypeStat {

		/**
		 * Average Price
		 * Type: double
		 */
		avg?: number | null;

		/** Type: double */
		fivePercent?: number | null;
		forQuery?: ForQuery;

		/**
		 * Generated at (UNIX Timestamp msec)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		generated?: string | null;
		highToLow?: boolean | null;

		/** Type: double */
		max?: number | null;

		/**
		 * Median Price
		 * Type: double
		 */
		median?: number | null;

		/** Type: double */
		min?: number | null;

		/**
		 * Standard Deviation
		 * Type: double
		 */
		stdDev?: number | null;

		/** Type: double */
		variance?: number | null;

		/**
		 * Order Volume
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		volume?: string | null;

		/**
		 * Weighted Average Price
		 * Type: double
		 */
		wavg?: number | null;
	}
	export interface TypeStatFormProperties {

		/**
		 * Average Price
		 * Type: double
		 */
		avg: FormControl<number | null | undefined>,

		/** Type: double */
		fivePercent: FormControl<number | null | undefined>,

		/**
		 * Generated at (UNIX Timestamp msec)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		generated: FormControl<string | null | undefined>,
		highToLow: FormControl<boolean | null | undefined>,

		/** Type: double */
		max: FormControl<number | null | undefined>,

		/**
		 * Median Price
		 * Type: double
		 */
		median: FormControl<number | null | undefined>,

		/** Type: double */
		min: FormControl<number | null | undefined>,

		/**
		 * Standard Deviation
		 * Type: double
		 */
		stdDev: FormControl<number | null | undefined>,

		/** Type: double */
		variance: FormControl<number | null | undefined>,

		/**
		 * Order Volume
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		volume: FormControl<string | null | undefined>,

		/**
		 * Weighted Average Price
		 * Type: double
		 */
		wavg: FormControl<number | null | undefined>,
	}
	export function CreateTypeStatFormGroup() {
		return new FormGroup<TypeStatFormProperties>({
			avg: new FormControl<number | null | undefined>(undefined),
			fivePercent: new FormControl<number | null | undefined>(undefined),
			generated: new FormControl<string | null | undefined>(undefined),
			highToLow: new FormControl<boolean | null | undefined>(undefined),
			max: new FormControl<number | null | undefined>(undefined),
			median: new FormControl<number | null | undefined>(undefined),
			min: new FormControl<number | null | undefined>(undefined),
			stdDev: new FormControl<number | null | undefined>(undefined),
			variance: new FormControl<number | null | undefined>(undefined),
			volume: new FormControl<string | null | undefined>(undefined),
			wavg: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * XML Marketstat
		 * Get marketstat
		 * @param {Array<number>} typeid TypeID. Multiple TypeIDs can be specified in the following format (up to 200 TypeIDs per request):
		 * typeid=34&typeid=35 or typeid=34,35
		 * @param {number} regionlimit Limit the statistics to a single region.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} usesystem Limit the statistics to a single solar system.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Successful Request
		 */
		MarketstatGetByTypeidAndRegionlimitAndUsesystem(typeid: Array<number>, regionlimit: number | null | undefined, usesystem: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'marketstat?' + typeid.map(z => `typeid=${z}`).join('&') + '&regionlimit=' + regionlimit + '&usesystem=' + usesystem, { observe: 'response', responseType: 'text' });
		}

		/**
		 * JSON Marketstat
		 * Get marketstat/json
		 * @return {Array<Type>} Successful Request
		 */
		MarketstatGet(): Observable<Array<Type>> {
			return this.http.get<Array<Type>>(this.baseUri + 'marketstat/json', {});
		}

		/**
		 * JSON Marketstat
		 * Post marketstat/json
		 * @param {Array<number>} typeid TypeID. Multiple TypeIDs can be specified in the following format (up to 200 TypeIDs per request):
		 * typeid=34&typeid=35 or typeid=34,35
		 * @param {number} regionlimit Limit the statistics to a single region.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} usesystem Limit the statistics to a single region.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Type>} Successful Request
		 */
		MarketstatPostByTypeidAndRegionlimitAndUsesystem(typeid: Array<number>, regionlimit: number | null | undefined, usesystem: number | null | undefined): Observable<Array<Type>> {
			return this.http.post<Array<Type>>(this.baseUri + 'marketstat/json?' + typeid.map(z => `typeid=${z}`).join('&') + '&regionlimit=' + regionlimit + '&usesystem=' + usesystem, null, {});
		}
	}

}

