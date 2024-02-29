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
		 * Calculate shipping carbon offset
		 * Calculates the donation amount (to CarbonFund 501\(c\)3) needed to offset a physical shipment. This calculation depends on the weight, primary transportation method, and distance of the shipment. Provide the distance of the shipment using the origin and destination address, or directly with the number of miles. For convenience, this endpoint also returns the id of the nonprofit CarbonFund, for making a subsequent donation to. See the [Carbon offsets guide](/recipes/carbon-offsets/) for more on using this endpoint.
		 * Get api/v1/donations/carbon_calculate
		 * @param {number} origin_address The origin zip code (US only) of the shipment. If you send this parameter, also send `destination_address`.
		 *     Type: double
		 * @param {number} destination_address The destination zip code (US only) of the shipment. If you send this parameter, also send `origin_address`.
		 *     Type: double
		 * @param {number} distance_mi The total distance (in miles) of the shipment. You can use this parameter in place of `origin_address` and `destination_address`.
		 *     Type: double
		 * @param {number} weight_lb The total weight (in pounds) of the shipment.
		 *     Type: double
		 * @param {ApiV1DonationsCarbon_calculateGetByOrigin_addressAndDestination_addressAndDistance_miAndWeight_lbAndTransportation_methodTransportation_method} transportation_method The primary transportation method of the shipment.
		 * @return {void} successful
		 */
		ApiV1DonationsCarbon_calculateGetByOrigin_addressAndDestination_addressAndDistance_miAndWeight_lbAndTransportation_method(origin_address: number | null | undefined, destination_address: number | null | undefined, distance_mi: number | null | undefined, weight_lb: number, transportation_method: ApiV1DonationsCarbon_calculateGetByOrigin_addressAndDestination_addressAndDistance_miAndWeight_lbAndTransportation_methodTransportation_method | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/donations/carbon_calculate?origin_address=' + origin_address + '&destination_address=' + destination_address + '&distance_mi=' + distance_mi + '&weight_lb=' + weight_lb + '&transportation_method=' + transportation_method, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve carbon offset stats
		 * Measures your carbon offset impact in relatable terms. Provide the id of a donation to CarbonFund to see stats about that specific donation. If you omit the donation id, this endpoint returns aggregate stats for all of your CarbonFund donations.
		 * Get api/v1/donations/carbon_stats
		 * @param {number} id The id of a donation to the CarbonFund nonprofit. Ids are returned when a donation is created. If an ID is not provided, the total stats for all donations to CarbonFund are returned.
		 *     Type: double
		 * @return {void} successful
		 */
		ApiV1DonationsCarbon_statsGetById(id: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/donations/carbon_stats?id=' + id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a donation
		 * Creates a donation to any nonprofit. CHANGE keeps track of your donations, bills you at the end of the month, and handles the nonprofit payouts for you.
		 * Post api/v1/donations/create
		 * @param {string} amount The amount of the donation in cents.
		 * @param {string} nonprofit_id The id of a nonprofit from the CHANGE network.
		 * @param {ApiV1DonationsCreatePostByAmountAndNonprofit_idAndFunding_sourceAndZip_codeFunding_source} funding_source Source of the donation funds. If you are collecting payment from your customer for the donation, use `customer`.
		 * @param {string} zip_code The customer's zip code. Provide this to unlock geographic insights.
		 * @return {void} Donation successful
		 */
		ApiV1DonationsCreatePostByAmountAndNonprofit_idAndFunding_sourceAndZip_code(amount: string, nonprofit_id: string, funding_source: ApiV1DonationsCreatePostByAmountAndNonprofit_idAndFunding_sourceAndZip_codeFunding_source, zip_code: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/donations/create?amount=' + (amount == null ? '' : encodeURIComponent(amount)) + '&nonprofit_id=' + (nonprofit_id == null ? '' : encodeURIComponent(nonprofit_id)) + '&funding_source=' + funding_source + '&zip_code=' + (zip_code == null ? '' : encodeURIComponent(zip_code)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Calculate crypto carbon offset
		 * Calculates the donation amount (to CarbonFund 501\(c\)3) needed to offset a cryptocurrency transaction. For convenience, this endpoint also returns the id of the nonprofit CarbonFund, for making a subsequent donation to. See the [Carbon offsets guide](/recipes/carbon-offsets/) for more on using this endpoint.
		 * Get api/v1/donations/crypto_calculate
		 * @param {number} count The number of transactions to offset.
		 *     Type: double
		 * @param {ApiV1DonationsCrypto_calculateGetByCountAndCurrencyCurrency} currency The currency of the transaction.
		 * @return {void} successful
		 */
		ApiV1DonationsCrypto_calculateGetByCountAndCurrency(count: number | null | undefined, currency: ApiV1DonationsCrypto_calculateGetByCountAndCurrencyCurrency, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/donations/crypto_calculate?count=' + count + '&currency=' + currency, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List your donations
		 * Retrieves a list of donations you've previously made. The donations are returned in order of creation, with the most recent donations appearing first. This endpoint is paginated.
		 * Get api/v1/donations/index
		 * @param {number} page Which page to return. This endpoint is paginated, and returns maximum 30 donations per page.
		 *     Type: double
		 * @return {void} successful
		 */
		ApiV1DonationsIndexGetByPage(page: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/donations/index?page=' + page, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a donation
		 * Retrieves the details of a donation you've previously made.
		 * Get api/v1/donations/show
		 * @param {string} id The id of a donation. Ids are returned when a donation is created.
		 * @return {void} successful
		 */
		ApiV1DonationsShowGetById(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/donations/show?id=' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Search a nonprofit
		 * Retrieves a list of nonprofits whose names match the provided name. This endpoint is paginated.
		 * Get api/v1/nonprofits/list
		 * @param {string} name A string to search.
		 * @param {number} page The page to return. This endpoint is paginated, and returns up to 30 nonprofits at a time.
		 *     Type: double
		 * @return {void} List successful
		 */
		ApiV1NonprofitsListGetByNameAndPage(name: string | null | undefined, page: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/nonprofits/list?name=' + (name == null ? '' : encodeURIComponent(name)) + '&page=' + page, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Show a nonprofit
		 * Retrieves information for a nonprofit.
		 * Get api/v1/nonprofits/show
		 * @param {string} id The id of a nonprofit from the CHANGE network.
		 * @return {void} Show successful
		 */
		ApiV1NonprofitsShowGetById(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/nonprofits/show?id=' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export enum ApiV1DonationsCarbon_calculateGetByOrigin_addressAndDestination_addressAndDistance_miAndWeight_lbAndTransportation_methodTransportation_method { air = 'air', truck = 'truck', rail = 'rail', sea = 'sea' }

	export enum ApiV1DonationsCreatePostByAmountAndNonprofit_idAndFunding_sourceAndZip_codeFunding_source { merchant = 'merchant', customer = 'customer' }

	export enum ApiV1DonationsCrypto_calculateGetByCountAndCurrencyCurrency { eth = 'eth', btc = 'btc' }

}

