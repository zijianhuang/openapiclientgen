import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List all historical GWS
		 * Returns all available GWS
		 * Get globalwinescores/
		 * @param {Array<number>} wine_id The exact `id` of the wine. Can be used multiple times (e.g `?wine_id=114959&wine_id=114952`) <br/> If you need to find the `wine_id` for your wines, use our <a href="https://api.globalwinescore.com/search/" target="_blank">search page</a>
		 * @param {string} vintage The vintage you want to search against.
		 * @param {ListHistoricalGWSColor} color The lowercase color of the wine.
		 * @param {boolean} is_primeurs Only show the <a href="See https://en.wikipedia.org/wiki/En_primeur">en primeur</a> GlobalWineScores
		 * @param {string} lwin L-WIN wine identifier (See definition <a href="https://www.liv-ex.com/lwin/" target="_blank">here</a>)
		 * @param {string} lwin_11 L-WIN wine/vintage identifier (See definition <a href="https://www.liv-ex.com/lwin/" target="_blank">here</a>)
		 * @param {number} limit Number of results to return per page.
		 * @param {number} offset The initial index from which to return the results.
		 * @param {ListHistoricalGWSOrdering} ordering Which field to use when ordering the results.
		 * @return {void} 
		 */
		ListHistoricalGWS(wine_id: Array<number> | null | undefined, vintage: string | null | undefined, color: ListHistoricalGWSColor | null | undefined, is_primeurs: boolean | null | undefined, lwin: string | null | undefined, lwin_11: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined, ordering: ListHistoricalGWSOrdering | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'globalwinescores/?' + wine_id?.map(z => `wine_id=${z}`).join('&') + '&vintage=' + (vintage == null ? '' : encodeURIComponent(vintage)) + '&color=' + color + '&is_primeurs=' + is_primeurs + '&lwin=' + (lwin == null ? '' : encodeURIComponent(lwin)) + '&lwin_11=' + (lwin_11 == null ? '' : encodeURIComponent(lwin_11)) + '&limit=' + limit + '&offset=' + offset + '&ordering=' + ordering, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all latest GWS
		 * Returns the latest GWS available per wine/vintage.
		 * Get globalwinescores/latest/
		 * @param {Array<number>} wine_id The exact `id` of the wine. Can be used multiple times (e.g `?wine_id=114959&wine_id=114952`) <br/> If you need to find the `wine_id` for your wines, use our <a href="https://api.globalwinescore.com/search/" target="_blank">search page</a>
		 * @param {string} vintage The vintage you want to search against.
		 * @param {ListHistoricalGWSColor} color The lowercase color of the wine.
		 * @param {boolean} is_primeurs Only show the <a href="See https://en.wikipedia.org/wiki/En_primeur">en primeur</a> GlobalWineScores
		 * @param {string} lwin L-WIN wine identifier (See definition <a href="https://www.liv-ex.com/lwin/" target="_blank">here</a>)
		 * @param {string} lwin_11 L-WIN wine/vintage identifier (See definition <a href="https://www.liv-ex.com/lwin/" target="_blank">here</a>)
		 * @param {number} limit Number of results to return per page.
		 * @param {number} offset The initial index from which to return the results.
		 * @param {ListHistoricalGWSOrdering} ordering Which field to use when ordering the results.
		 * @return {void} 
		 */
		GlobalWineScoreGetByWine_idAndVintageAndColorAndIs_primeursAndLwinAndLwin_11AndLimitAndOffsetAndOrdering(wine_id: Array<number> | null | undefined, vintage: string | null | undefined, color: ListHistoricalGWSColor | null | undefined, is_primeurs: boolean | null | undefined, lwin: string | null | undefined, lwin_11: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined, ordering: ListHistoricalGWSOrdering | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'globalwinescores/latest/?' + wine_id?.map(z => `wine_id=${z}`).join('&') + '&vintage=' + (vintage == null ? '' : encodeURIComponent(vintage)) + '&color=' + color + '&is_primeurs=' + is_primeurs + '&lwin=' + (lwin == null ? '' : encodeURIComponent(lwin)) + '&lwin_11=' + (lwin_11 == null ? '' : encodeURIComponent(lwin_11)) + '&limit=' + limit + '&offset=' + offset + '&ordering=' + ordering, { observe: 'response', responseType: 'text' });
		}
	}

	export enum ListHistoricalGWSColor { red = 0, white = 1, pink = 2 }

	export enum ListHistoricalGWSOrdering { date = 0, '-date' = 1, score = 2, '-score' = 3 }

}

