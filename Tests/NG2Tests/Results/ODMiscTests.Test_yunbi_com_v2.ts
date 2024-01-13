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
		 * Check Deposit Address
		 * Get v2/addresses/{address}.json
		 * @return {void} No response was specified
		 */
		GET__version_addresses__address___format_(address: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/addresses/' + (address == null ? '' : encodeURIComponent(address)) + '.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get details of specific deposit.
		 * Get v2/deposit.json
		 * @param {string} access_key Access key.
		 * @param {number} tonce Tonce is an integer represents the milliseconds elapsed since Unix epoch.
		 * @param {string} signature The signature of your request payload, generated using your secret key.
		 * @return {void} No response was specified
		 */
		GET__version_deposit___format_(access_key: string, tonce: number, signature: string, txid: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/deposit.json?access_key=' + (access_key == null ? '' : encodeURIComponent(access_key)) + '&tonce=' + tonce + '&signature=' + (signature == null ? '' : encodeURIComponent(signature)) + '&txid=' + (txid == null ? '' : encodeURIComponent(txid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Where to deposit. The address field could be empty when a new address is generating (e.g. for bitcoin), you should try again later in that case.
		 * Get v2/deposit_address.json
		 * @param {string} access_key Access key.
		 * @param {number} tonce Tonce is an integer represents the milliseconds elapsed since Unix epoch.
		 * @param {string} signature The signature of your request payload, generated using your secret key.
		 * @param {string} currency The account to which you want to deposit. Available values: cny, btc, eth, pls, note, bts, bitcny, bitusd, bitbtc, yun, nxt, ltc, doge, sc, dgd, dcs, dao, etc, amp, 1st, rep, ans, zec, zmc, gnt, gxs, qtum, eos, snt, bcc, omg, lun, pay, ven
		 * @return {void} No response was specified
		 */
		GET__version_deposit_address___format_(access_key: string, tonce: number, signature: string, currency: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/deposit_address.json?access_key=' + (access_key == null ? '' : encodeURIComponent(access_key)) + '&tonce=' + tonce + '&signature=' + (signature == null ? '' : encodeURIComponent(signature)) + '&currency=' + (currency == null ? '' : encodeURIComponent(currency)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get your deposits history.
		 * Get v2/deposits.json
		 * @param {string} access_key Access key.
		 * @param {number} tonce Tonce is an integer represents the milliseconds elapsed since Unix epoch.
		 * @param {string} signature The signature of your request payload, generated using your secret key.
		 * @param {string} currency Currency value contains  cny, btc, eth, pls, note, bts, bitcny, bitusd, bitbtc, yun, nxt, ltc, doge, sc, dgd, dcs, dao, etc, amp, 1st, rep, ans, zec, zmc, gnt, gxs, qtum, eos, snt, bcc, omg, lun, pay, ven
		 * @param {number} limit Set result limit.
		 * @param {string} state State value contains  submitting, cancelled, submitted, rejected, accepted, checked, warning
		 * @return {void} No response was specified
		 */
		GET__version_deposits___format_(access_key: string, tonce: number, signature: string, currency: string | null | undefined, limit: number | null | undefined, state: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/deposits.json?access_key=' + (access_key == null ? '' : encodeURIComponent(access_key)) + '&tonce=' + tonce + '&signature=' + (signature == null ? '' : encodeURIComponent(signature)) + '&currency=' + (currency == null ? '' : encodeURIComponent(currency)) + '&limit=' + limit + '&state=' + (state == null ? '' : encodeURIComponent(state)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get depth or specified market. Both asks and bids are sorted from highest price to lowest.
		 * Get v2/depth.json
		 * @param {string} market Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btccny'. All available markets can be found at /api/v2/markets.
		 * @param {number} limit Limit the number of returned price levels. Default to 300.
		 * @return {void} No response was specified
		 */
		GET__version_depth___format_(market: string, limit: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/depth.json?market=' + (market == null ? '' : encodeURIComponent(market)) + '&limit=' + limit, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get OHLC(k line) of specific market.
		 * Get v2/k.json
		 * @param {string} market Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btccny'. All available markets can be found at /api/v2/markets.
		 * @param {number} limit Limit the number of returned data points, default to 30.
		 * @param {number} period Time period of K line, default to 1. You can choose between 1, 5, 15, 30, 60, 120, 240, 360, 720, 1440, 4320, 10080
		 * @param {number} timestamp An integer represents the seconds elapsed since Unix epoch. If set, only k-line data after that time will be returned.
		 * @return {void} No response was specified
		 */
		GET__version_k___format_(market: string, limit: number | null | undefined, period: number | null | undefined, timestamp: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/k.json?market=' + (market == null ? '' : encodeURIComponent(market)) + '&limit=' + limit + '&period=' + period + '&timestamp=' + timestamp, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get K data with pending trades, which are the trades not included in K data yet, because there's delay between trade generated and processed by K data generator.
		 * Get v2/k_with_pending_trades.json
		 * @param {string} market Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btccny'. All available markets can be found at /api/v2/markets.
		 * @param {number} trade_id The trade id of the first trade you received.
		 * @param {number} limit Limit the number of returned data points, default to 30.
		 * @param {number} period Time period of K line, default to 1. You can choose between 1, 5, 15, 30, 60, 120, 240, 360, 720, 1440, 4320, 10080
		 * @param {number} timestamp An integer represents the seconds elapsed since Unix epoch. If set, only k-line data after that time will be returned.
		 * @return {void} No response was specified
		 */
		GET__version_k_with_pending_trades___format_(market: string, trade_id: number, limit: number | null | undefined, period: number | null | undefined, timestamp: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/k_with_pending_trades.json?market=' + (market == null ? '' : encodeURIComponent(market)) + '&trade_id=' + trade_id + '&limit=' + limit + '&period=' + period + '&timestamp=' + timestamp, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all available markets.
		 * Get v2/markets.json
		 * @return {void} No response was specified
		 */
		GET__version_markets___format_(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/markets.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get your profile and accounts info.
		 * Get v2/members/me.json
		 * @param {string} access_key Access key.
		 * @param {number} tonce Tonce is an integer represents the milliseconds elapsed since Unix epoch.
		 * @param {string} signature The signature of your request payload, generated using your secret key.
		 * @return {void} No response was specified
		 */
		GET__version_members_me___format_(access_key: string, tonce: number, signature: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/members/me.json?access_key=' + (access_key == null ? '' : encodeURIComponent(access_key)) + '&tonce=' + tonce + '&signature=' + (signature == null ? '' : encodeURIComponent(signature)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get information of specified order.
		 * Get v2/order.json
		 * @param {string} access_key Access key.
		 * @param {number} tonce Tonce is an integer represents the milliseconds elapsed since Unix epoch.
		 * @param {string} signature The signature of your request payload, generated using your secret key.
		 * @param {number} id Unique order id.
		 * @return {void} No response was specified
		 */
		GET__version_order___format_(access_key: string, tonce: number, signature: string, id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/order.json?access_key=' + (access_key == null ? '' : encodeURIComponent(access_key)) + '&tonce=' + tonce + '&signature=' + (signature == null ? '' : encodeURIComponent(signature)) + '&id=' + id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the order book of specified market.
		 * Get v2/order_book.json
		 * @param {string} market Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btccny'. All available markets can be found at /api/v2/markets.
		 * @param {number} asks_limit Limit the number of returned sell orders. Default to 20.
		 * @param {number} bids_limit Limit the number of returned buy orders. Default to 20.
		 * @return {void} No response was specified
		 */
		GET__version_order_book___format_(market: string, asks_limit: number | null | undefined, bids_limit: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/order_book.json?market=' + (market == null ? '' : encodeURIComponent(market)) + '&asks_limit=' + asks_limit + '&bids_limit=' + bids_limit, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get your orders, results is paginated.
		 * Get v2/orders.json
		 * @param {string} access_key Access key.
		 * @param {number} tonce Tonce is an integer represents the milliseconds elapsed since Unix epoch.
		 * @param {string} signature The signature of your request payload, generated using your secret key.
		 * @param {string} market Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btccny'. All available markets can be found at /api/v2/markets.
		 * @param {string} state Filter order by state. One of 'wait', 'done', or 'cancel'. An order in 'wait' is an active order, waiting fullfillment; a 'done' order is an order fullfilled; 'cancel' means the order has been cancelled. Default to 'wait'.
		 * @param {number} limit Limit the number of returned orders, default to 100.
		 * @param {number} page Specify the page of paginated results.
		 * @param {string} order_by If set, returned orders will be sorted in specific order. One of 'asc' or 'desc', default to 'asc'.
		 * @return {void} No response was specified
		 */
		GET__version_orders___format_(access_key: string, tonce: number, signature: string, market: string, state: string | null | undefined, limit: number | null | undefined, page: number | null | undefined, order_by: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/orders.json?access_key=' + (access_key == null ? '' : encodeURIComponent(access_key)) + '&tonce=' + tonce + '&signature=' + (signature == null ? '' : encodeURIComponent(signature)) + '&market=' + (market == null ? '' : encodeURIComponent(market)) + '&state=' + (state == null ? '' : encodeURIComponent(state)) + '&limit=' + limit + '&page=' + page + '&order_by=' + (order_by == null ? '' : encodeURIComponent(order_by)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v2/partners/orders/{id}/trades.json
		 * @return {void} No response was specified
		 */
		GET__version_partners_orders__id_trades___format_(id: string, access_key_hash: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/partners/orders/' + (id == null ? '' : encodeURIComponent(id)) + '/trades.json&access_key_hash=' + (access_key_hash == null ? '' : encodeURIComponent(access_key_hash)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get ticker of all markets.
		 * Get v2/tickers.json
		 * @return {void} No response was specified
		 */
		GET__version_tickers___format_(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/tickers.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get ticker of specific market.
		 * Get v2/tickers/{market}.json
		 * @param {string} market Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btccny'. All available markets can be found at /api/v2/markets.
		 * @return {void} No response was specified
		 */
		GET__version_tickers__market___format_(market: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/tickers/' + (market == null ? '' : encodeURIComponent(market)) + '.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get server current time, in seconds since Unix epoch.
		 * Get v2/timestamp.json
		 * @return {void} No response was specified
		 */
		GET__version_timestamp___format_(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/timestamp.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get recent trades on market, each trade is included only once. Trades are sorted in reverse creation order.
		 * Get v2/trades.json
		 * @param {string} market Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btccny'. All available markets can be found at /api/v2/markets.
		 * @param {number} limit Limit the number of returned trades. Default to 50.
		 * @param {number} timestamp An integer represents the seconds elapsed since Unix epoch. If set, only trades executed before the time will be returned.
		 * @param {number} from Trade id. If set, only trades created after the trade will be returned.
		 * @param {number} to Trade id. If set, only trades created before the trade will be returned.
		 * @param {string} order_by If set, returned trades will be sorted in specific order. One of 'asc' or 'desc', default to 'desc'.
		 * @return {void} No response was specified
		 */
		GET__version_trades___format_(market: string, limit: number | null | undefined, timestamp: number | null | undefined, from: number | null | undefined, to: number | null | undefined, order_by: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/trades.json?market=' + (market == null ? '' : encodeURIComponent(market)) + '&limit=' + limit + '&timestamp=' + timestamp + '&from=' + from + '&to=' + to + '&order_by=' + (order_by == null ? '' : encodeURIComponent(order_by)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get your executed trades. Trades are sorted in reverse creation order.
		 * Get v2/trades/my.json
		 * @param {string} access_key Access key.
		 * @param {number} tonce Tonce is an integer represents the milliseconds elapsed since Unix epoch.
		 * @param {string} signature The signature of your request payload, generated using your secret key.
		 * @param {string} market Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btccny'. All available markets can be found at /api/v2/markets.
		 * @param {number} limit Limit the number of returned trades. Default to 50.
		 * @param {number} timestamp An integer represents the seconds elapsed since Unix epoch. If set, only trades executed before the time will be returned.
		 * @param {number} from Trade id. If set, only trades created after the trade will be returned.
		 * @param {number} to Trade id. If set, only trades created before the trade will be returned.
		 * @param {string} order_by If set, returned trades will be sorted in specific order. One of 'asc' or 'desc', default to 'desc'.
		 * @return {void} No response was specified
		 */
		GET__version_trades_my___format_(access_key: string, tonce: number, signature: string, market: string, limit: number | null | undefined, timestamp: number | null | undefined, from: number | null | undefined, to: number | null | undefined, order_by: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/trades/my.json?access_key=' + (access_key == null ? '' : encodeURIComponent(access_key)) + '&tonce=' + tonce + '&signature=' + (signature == null ? '' : encodeURIComponent(signature)) + '&market=' + (market == null ? '' : encodeURIComponent(market)) + '&limit=' + limit + '&timestamp=' + timestamp + '&from=' + from + '&to=' + to + '&order_by=' + (order_by == null ? '' : encodeURIComponent(order_by)), { observe: 'response', responseType: 'text' });
		}
	}

}

