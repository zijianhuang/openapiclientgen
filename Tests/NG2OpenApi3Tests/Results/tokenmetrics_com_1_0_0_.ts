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
		 * Correlation
		 * Correlation
		 * Get v1/correlation
		 * @return {void} 
		 */
		Correlation(tokens: string | null | undefined, limit: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/correlation?tokens=' + (tokens == null ? '' : encodeURIComponent(tokens)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Indices
		 * Indices
		 * Get v1/indices
		 * @return {void} 
		 */
		Indices(exchanges: string | null | undefined, timeHorizon: string | null | undefined, lowCap: string | null | undefined, startDate: string | null | undefined, endDate: string | null | undefined, limit: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/indices?exchanges=' + (exchanges == null ? '' : encodeURIComponent(exchanges)) + '&timeHorizon=' + (timeHorizon == null ? '' : encodeURIComponent(timeHorizon)) + '&lowCap=' + (lowCap == null ? '' : encodeURIComponent(lowCap)) + '&startDate=' + (startDate == null ? '' : encodeURIComponent(startDate)) + '&endDate=' + (endDate == null ? '' : encodeURIComponent(endDate)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Investor Grades
		 * Investor Grades
		 * Get v1/investor-grades
		 * @return {void} 
		 */
		InvestorGrades(tokens: string | null | undefined, startDate: string | null | undefined, endDate: string | null | undefined, limit: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/investor-grades?tokens=' + (tokens == null ? '' : encodeURIComponent(tokens)) + '&startDate=' + (startDate == null ? '' : encodeURIComponent(startDate)) + '&endDate=' + (endDate == null ? '' : encodeURIComponent(endDate)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Market Indicator
		 * Market Indicator
		 * Get v1/market-indicator
		 * @return {void} 
		 */
		MarketIndicator(startDate: string | null | undefined, endDate: string | null | undefined, limit: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/market-indicator?startDate=' + (startDate == null ? '' : encodeURIComponent(startDate)) + '&endDate=' + (endDate == null ? '' : encodeURIComponent(endDate)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Price
		 * Price
		 * Get v1/price
		 * @return {void} 
		 */
		Price(tokens: string | null | undefined, startDate: string | null | undefined, endDate: string | null | undefined, limit: string | null | undefined, page: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/price?tokens=' + (tokens == null ? '' : encodeURIComponent(tokens)) + '&startDate=' + (startDate == null ? '' : encodeURIComponent(startDate)) + '&endDate=' + (endDate == null ? '' : encodeURIComponent(endDate)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&page=' + (page == null ? '' : encodeURIComponent(page)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Price Prediction
		 * Price Prediction
		 * Get v1/price-prediction
		 * @return {void} 
		 */
		PricePrediction(tokens: string | null | undefined, date: string | null | undefined, limit: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/price-prediction?tokens=' + (tokens == null ? '' : encodeURIComponent(tokens)) + '&date=' + (date == null ? '' : encodeURIComponent(date)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Quantmetrics Tier 1
		 * Quantmetrics Tier 1
		 * Get v1/quantmetrics-tier-1
		 * @return {void} 
		 */
		QuantmetricsTier1(tokens: string | null | undefined, date: string | null | undefined, limit: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/quantmetrics-tier-1?tokens=' + (tokens == null ? '' : encodeURIComponent(tokens)) + '&date=' + (date == null ? '' : encodeURIComponent(date)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Quantmetrics Tier 2
		 * Quantmetrics Tier 2
		 * Get v1/quantmetrics-tier-2
		 * @return {void} 
		 */
		QuantmetricsTier2(tokens: string | null | undefined, date: string | null | undefined, limit: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/quantmetrics-tier-2?tokens=' + (tokens == null ? '' : encodeURIComponent(tokens)) + '&date=' + (date == null ? '' : encodeURIComponent(date)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Resistance & Support
		 * Resistance & Support
		 * Get v1/resistance-support
		 * @return {void} 
		 */
		ResistanceSupport(tokens: string | null | undefined, startDate: string | null | undefined, endDate: string | null | undefined, limit: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/resistance-support?tokens=' + (tokens == null ? '' : encodeURIComponent(tokens)) + '&startDate=' + (startDate == null ? '' : encodeURIComponent(startDate)) + '&endDate=' + (endDate == null ? '' : encodeURIComponent(endDate)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Scenario Analysis
		 * Scenario Analysis
		 * Get v1/scenario-analysis
		 * @return {void} 
		 */
		ScenarioAnalysis(tokens: string | null | undefined, limit: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/scenario-analysis?tokens=' + (tokens == null ? '' : encodeURIComponent(tokens)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sentiments
		 * Sentiments
		 * Get v1/sentiments
		 * @return {void} 
		 */
		Sentiments(tokens: string | null | undefined, startDate: string | null | undefined, endDate: string | null | undefined, limit: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/sentiments?tokens=' + (tokens == null ? '' : encodeURIComponent(tokens)) + '&startDate=' + (startDate == null ? '' : encodeURIComponent(startDate)) + '&endDate=' + (endDate == null ? '' : encodeURIComponent(endDate)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Tokens
		 * Tokens
		 * Get v1/tokens
		 * @return {void} 
		 */
		Tokens(token_ids: string | null | undefined, token_names: string | null | undefined, token_symbols: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/tokens?token_ids=' + (token_ids == null ? '' : encodeURIComponent(token_ids)) + '&token_names=' + (token_names == null ? '' : encodeURIComponent(token_names)) + '&token_symbols=' + (token_symbols == null ? '' : encodeURIComponent(token_symbols)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Trader Grades
		 * Trader Grades
		 * Get v1/trader-grades
		 * @return {void} 
		 */
		TraderGrades(tokens: string | null | undefined, startDate: string | null | undefined, endDate: string | null | undefined, limit: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/trader-grades?tokens=' + (tokens == null ? '' : encodeURIComponent(tokens)) + '&startDate=' + (startDate == null ? '' : encodeURIComponent(startDate)) + '&endDate=' + (endDate == null ? '' : encodeURIComponent(endDate)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Trading Indicator
		 * Trading Indicator
		 * Get v1/trading-indicator
		 * @return {void} 
		 */
		TradingIndicator(tokens: string | null | undefined, limit: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/trading-indicator?tokens=' + (tokens == null ? '' : encodeURIComponent(tokens)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)), { observe: 'response', responseType: 'text' });
		}
	}

}

