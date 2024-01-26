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
		 * Baggage Trip and Contact
		 * Retrieve passenger trip, contact and baggage details. This service is only accessible for LH privileged partners
		 * Get baggage/baggagetripandcontact/{searchID}
		 * @param {string} searchID Bag tag number, PNR, boarding card or FQTV ID
		 * @return {string} 
		 */
		Baggage_Trip_and_Contact(searchID: string): Observable<string> {
			return this.http.get(this.baseUri + 'baggage/baggagetripandcontact/' + (searchID == null ? '' : encodeURIComponent(searchID)), { responseType: 'text' });
		}

		/**
		 * All Fares
		 * Retrieves all available fares for a specific Origin & Destination pair on a given date. Available fares are: One-way and Return for 4U. Return only for OS
		 * Get offers/fares/allfares
		 * @param {string} catalogues Specifies in which catalogue the fares need to be searched (e.g.'4U;OS').
		 * @param {string} origin Enter journey origin (e.g 'FRA').
		 * @param {string} destination Enter journey destination (e.g 'MAD').
		 * @param {string} travel_date Enter journey travel-date (e.g 2016-10-20)
		 * @param {string} return_date Enter journey return-date (e.g 2016-10-31)'.
		 * @param {string} cabin_class Enter the required cabin class (e.g econonmy, business etc.). (Acceptable values are: "", "economy", "premium economy", "business", "first")
		 * @param {string} travelers Specifies the type and number of travelers (e.g. '(adult=2;child=2;infant=1)') For LH only (adult=1) possible.
		 * @param {string} fare_family Mandatory for 4U. Specifies, which fares to be returned, such as basic, smart, best, smartflex, bestflex . (Acceptable values are: "", "basic", "smart", "best", "smartflex", "bestflex")
		 * @param {string} trackingid Austrian Airlines only - specify the web tracking id to be used in OS Deep link.
		 * @return {string} 
		 */
		All_Fares(catalogues: string, origin: string, destination: string, travel_date: string, return_date: string | null | undefined, cabin_class: string | null | undefined, travelers: string | null | undefined, fare_family: string | null | undefined, trackingid: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'offers/fares/allfares?catalogues=' + (catalogues == null ? '' : encodeURIComponent(catalogues)) + '&origin=' + (origin == null ? '' : encodeURIComponent(origin)) + '&destination=' + (destination == null ? '' : encodeURIComponent(destination)) + '&travel_date=' + (travel_date == null ? '' : encodeURIComponent(travel_date)) + '&return_date=' + (return_date == null ? '' : encodeURIComponent(return_date)) + '&cabin_class=' + (cabin_class == null ? '' : encodeURIComponent(cabin_class)) + '&travelers=' + (travelers == null ? '' : encodeURIComponent(travelers)) + '&fare_family=' + (fare_family == null ? '' : encodeURIComponent(fare_family)) + '&trackingid=' + (trackingid == null ? '' : encodeURIComponent(trackingid)), { responseType: 'text' });
		}

		/**
		 * Best Fares
		 * Retrieve best fares for the requested journey across multiple days or multiple months.
		 * Get offers/fares/bestfares
		 * @param {string} catalogues Search fares from these carriers' catalogues (e.g. '4U;OS;LH')
		 * @param {string} origin Journey origin. 3-letter IATA airport code (e.g. 'FRA')
		 * @param {string} destination Journey destination. 3-letter IATA airport code (e.g. 'MAD')
		 * @param {string} travel_date Journey travel-date (YYYY-MM-DD)
		 * @param {string} trip_duration Trip duration in days (e.g. '7')
		 * @param {string} range Fare range: 'byday' or 'bymonth' (Acceptable values are: "byday", "bymonth")
		 * @param {string} cabin_class Cabin class: 'economy', 'premium_economy', 'business', 'first' (Acceptable values are: "", "economy", "premium_economy", "business", "first")
		 * @param {string} country Country code of requestor. 2-letter ISO 3166-1 country code (e.g. 'de')
		 * @param {string} trackingid Austrian Airlines only - specify the web tracking id to be used in OS Deep link.
		 * @param {string} fare_family Fare family: basic, smart, best, smartflex, bestflex - Germanwings only (Acceptable values are: "", "basic", "smart", "best", "smartflex", "bestflex")
		 * @return {string} 
		 */
		Best_Fares(catalogues: string, origin: string, destination: string, travel_date: string, trip_duration: string, range: string, cabin_class: string | null | undefined, country: string | null | undefined, trackingid: string | null | undefined, fare_family: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'offers/fares/bestfares?catalogues=' + (catalogues == null ? '' : encodeURIComponent(catalogues)) + '&origin=' + (origin == null ? '' : encodeURIComponent(origin)) + '&destination=' + (destination == null ? '' : encodeURIComponent(destination)) + '&travel_date=' + (travel_date == null ? '' : encodeURIComponent(travel_date)) + '&trip_duration=' + (trip_duration == null ? '' : encodeURIComponent(trip_duration)) + '&range=' + (range == null ? '' : encodeURIComponent(range)) + '&cabin_class=' + (cabin_class == null ? '' : encodeURIComponent(cabin_class)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&trackingid=' + (trackingid == null ? '' : encodeURIComponent(trackingid)) + '&fare_family=' + (fare_family == null ? '' : encodeURIComponent(fare_family)), { responseType: 'text' });
		}

		/**
		 * Deep Links
		 * Returns valid deep links for the provided input parameters
		 * Get offers/fares/deeplink
		 * @param {string} catalogues Carrier for which the deep link will be created (e.g. 'LH')
		 * @param {string} trackingid Deep link tracking ID
		 * @param {string} country 2-letter ISO 3166-1 country code
		 * @param {string} lang 2-letter ISO 3166-1 language code
		 * @param {string} origin Journey origin. 3-letter IATA airport or city code (e.g. 'FRA')
		 * @param {string} origin_name Journey origin airport or city name (e.g. 'frankfurt')
		 * @param {string} destination Journey destination. 3-letter IATA airport or city code (e.g. 'MAD')
		 * @param {string} destination_name Journey destination airport or city name (e.g. 'madrid')
		 * @param {string} travel_date Journey travel-date (YYYY-MM-DD)
		 * @param {string} return_date Journey return-date (YYYY-MM-DD)
		 * @param {string} cabin_class Cabin class: 'economy', 'premium_economy', 'business', 'first' (Acceptable values are: "", "economy", "premium_economy", "business", "first")
		 * @param {string} outbound_segments Outbound flight segments in the sequence of travel (e.g. 'LH096;LH480')
		 * @param {string} return_segments Flight segments in the sequence of travel (e.g. 'LH7465;LH431')
		 * @param {string} travelers Type and number of travelers (e.g. '(adult=2;child=2;infant=1)')
		 * @param {string} fare Travel fare (e.g. '1341.45')
		 * @param {string} net_fare Travel net fare. Total fare less taxes and charges (e.g. '1140')
		 * @param {string} fare_currency Fare currency (e.g. 'EUR')
		 * @param {string} partnerid Deep link partner id (e.g. '1247')
		 * @param {string} encryption_key Deep link encryption-key
		 * @return {string} 
		 */
		Deep_Links(catalogues: string, trackingid: string, country: string, lang: string, origin: string | null | undefined, origin_name: string | null | undefined, destination: string | null | undefined, destination_name: string | null | undefined, travel_date: string | null | undefined, return_date: string | null | undefined, cabin_class: string | null | undefined, outbound_segments: string | null | undefined, return_segments: string | null | undefined, travelers: string | null | undefined, fare: string | null | undefined, net_fare: string | null | undefined, fare_currency: string | null | undefined, partnerid: string | null | undefined, encryption_key: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'offers/fares/deeplink?catalogues=' + (catalogues == null ? '' : encodeURIComponent(catalogues)) + '&trackingid=' + (trackingid == null ? '' : encodeURIComponent(trackingid)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&lang=' + (lang == null ? '' : encodeURIComponent(lang)) + '&origin=' + (origin == null ? '' : encodeURIComponent(origin)) + '&origin_name=' + (origin_name == null ? '' : encodeURIComponent(origin_name)) + '&destination=' + (destination == null ? '' : encodeURIComponent(destination)) + '&destination_name=' + (destination_name == null ? '' : encodeURIComponent(destination_name)) + '&travel_date=' + (travel_date == null ? '' : encodeURIComponent(travel_date)) + '&return_date=' + (return_date == null ? '' : encodeURIComponent(return_date)) + '&cabin_class=' + (cabin_class == null ? '' : encodeURIComponent(cabin_class)) + '&outbound_segments=' + (outbound_segments == null ? '' : encodeURIComponent(outbound_segments)) + '&return_segments=' + (return_segments == null ? '' : encodeURIComponent(return_segments)) + '&travelers=' + (travelers == null ? '' : encodeURIComponent(travelers)) + '&fare=' + (fare == null ? '' : encodeURIComponent(fare)) + '&net_fare=' + (net_fare == null ? '' : encodeURIComponent(net_fare)) + '&fare_currency=' + (fare_currency == null ? '' : encodeURIComponent(fare_currency)) + '&partnerid=' + (partnerid == null ? '' : encodeURIComponent(partnerid)) + '&encryption_key=' + (encryption_key == null ? '' : encodeURIComponent(encryption_key)), { responseType: 'text' });
		}

		/**
		 * LH Deep Links - FFP
		 * Returns valid LH deep links (FFP - links to flight selection screen on LH.COM)
		 * Get offers/fares/deeplink/ffp
		 * @param {string} catalogues Carrier for which the deep link will be created (e.g. 'LH')
		 * @param {string} origin Journey origin. 3-letter IATA airport or city code (e.g. 'FRA')
		 * @param {string} destination Journey destination. 3-letter IATA airport or city code (e.g. 'MAD')
		 * @param {string} travel_date Journey travel-date (YYYY-MM-DD)
		 * @param {string} trackingid Deep link tracking ID
		 * @param {string} country 2-letter ISO 3166-1 country code
		 * @param {string} lang 2-letter ISO 3166-1 language code
		 * @param {string} return_date Journey return-date (YYYY-MM-DD)
		 * @param {string} cabin_class Cabin class: 'economy', 'premium_economy', 'business', 'first' (Acceptable values are: "", "economy", "premium_economy", "business", "first")
		 * @param {string} travelers Type and number of travelers (e.g. '(adult=2;child=2;infant=1)')
		 * @param {string} partnerid Deep link partner id (e.g. '1247')
		 * @param {string} encryption_key Deep link encryption-key
		 * @return {string} 
		 */
		LH_Deep_Links___FFP(catalogues: string, origin: string, destination: string, travel_date: string, trackingid: string, country: string, lang: string, return_date: string | null | undefined, cabin_class: string | null | undefined, travelers: string | null | undefined, partnerid: string | null | undefined, encryption_key: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'offers/fares/deeplink/ffp?catalogues=' + (catalogues == null ? '' : encodeURIComponent(catalogues)) + '&origin=' + (origin == null ? '' : encodeURIComponent(origin)) + '&destination=' + (destination == null ? '' : encodeURIComponent(destination)) + '&travel_date=' + (travel_date == null ? '' : encodeURIComponent(travel_date)) + '&trackingid=' + (trackingid == null ? '' : encodeURIComponent(trackingid)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&lang=' + (lang == null ? '' : encodeURIComponent(lang)) + '&return_date=' + (return_date == null ? '' : encodeURIComponent(return_date)) + '&cabin_class=' + (cabin_class == null ? '' : encodeURIComponent(cabin_class)) + '&travelers=' + (travelers == null ? '' : encodeURIComponent(travelers)) + '&partnerid=' + (partnerid == null ? '' : encodeURIComponent(partnerid)) + '&encryption_key=' + (encryption_key == null ? '' : encodeURIComponent(encryption_key)), { responseType: 'text' });
		}

		/**
		 * LH Deep Links - ITCO
		 * Returns valid LH deep links (ITCO - links to shopping cart on LH.COM)
		 * Get offers/fares/deeplink/itco
		 * @param {string} catalogues Carrier for which the deep link will be created (e.g. 'LH')
		 * @param {string} origin Journey origin. 3-letter IATA airport or city code (e.g. 'FRA')
		 * @param {string} destination Journey destination. 3-letter IATA airport or city code (e.g. 'MAD')
		 * @param {string} travel_date Journey travel-date (YYYY-MM-DD)
		 * @param {string} outbound_segments Outbound flight segments in the sequence of travel (e.g. 'LH096;LH480')
		 * @param {string} fare Travel fare (e.g. '1341.45')
		 * @param {string} fare_currency Fare currency (e.g. 'EUR')
		 * @param {string} trackingid Deep link tracking ID
		 * @param {string} country 2-letter ISO 3166-1 country code
		 * @param {string} lang 2-letter ISO 3166-1 language code
		 * @param {string} return_date Journey return-date (YYYY-MM-DD)
		 * @param {string} cabin_class Cabin class: 'economy', 'premium_economy', 'business', 'first' (Acceptable values are: "", "economy", "premium_economy", "business", "first")
		 * @param {string} return_segments Flight segments in the sequence of travel (e.g. 'LH7465;LH431')
		 * @param {string} travelers Type and number of travelers (e.g. '(adult=2;child=2;infant=1)')
		 * @param {string} net_fare Travel net fare. Total fare less taxes and charges (e.g. '1140')
		 * @param {string} partnerid Deep link partner id (e.g. '1247')
		 * @param {string} encryption_key Deep link encryption-key
		 * @return {string} 
		 */
		LH_Deep_Links___ITCO(catalogues: string, origin: string, destination: string, travel_date: string, outbound_segments: string, fare: string, fare_currency: string, trackingid: string, country: string, lang: string, return_date: string | null | undefined, cabin_class: string | null | undefined, return_segments: string | null | undefined, travelers: string | null | undefined, net_fare: string | null | undefined, partnerid: string | null | undefined, encryption_key: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'offers/fares/deeplink/itco?catalogues=' + (catalogues == null ? '' : encodeURIComponent(catalogues)) + '&origin=' + (origin == null ? '' : encodeURIComponent(origin)) + '&destination=' + (destination == null ? '' : encodeURIComponent(destination)) + '&travel_date=' + (travel_date == null ? '' : encodeURIComponent(travel_date)) + '&outbound_segments=' + (outbound_segments == null ? '' : encodeURIComponent(outbound_segments)) + '&fare=' + (fare == null ? '' : encodeURIComponent(fare)) + '&fare_currency=' + (fare_currency == null ? '' : encodeURIComponent(fare_currency)) + '&trackingid=' + (trackingid == null ? '' : encodeURIComponent(trackingid)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&lang=' + (lang == null ? '' : encodeURIComponent(lang)) + '&return_date=' + (return_date == null ? '' : encodeURIComponent(return_date)) + '&cabin_class=' + (cabin_class == null ? '' : encodeURIComponent(cabin_class)) + '&return_segments=' + (return_segments == null ? '' : encodeURIComponent(return_segments)) + '&travelers=' + (travelers == null ? '' : encodeURIComponent(travelers)) + '&net_fare=' + (net_fare == null ? '' : encodeURIComponent(net_fare)) + '&partnerid=' + (partnerid == null ? '' : encodeURIComponent(partnerid)) + '&encryption_key=' + (encryption_key == null ? '' : encodeURIComponent(encryption_key)), { responseType: 'text' });
		}

		/**
		 * Fares
		 * Retrieve all available fares per fare family for a specific Origin & Destination on a given date
		 * Get offers/fares/fares
		 * @param {string} catalogues Search fares from these carriers' catalogues - currently active for Germanwings only  (4U)
		 * @param {string} segments Journey details  e.g. (origin=TXL;destination=CGN;travel-date=2016-12-15;return-date=2016-12-20;cabin=Economy)
		 * @param {string} carriers Include fares for these carriers e.g. ('4U;LH')
		 * @param {string} travelers Type and number of travelers e.g. (adult=1;child=1;infant=1)
		 * @param {string} fare_types Fares family: basic,smart, best, smartflex, bestflex - Germanwings only (Acceptable values are: "", "basic", "smart", "best", "smartflex", "bestflex")
		 * @return {string} 
		 */
		Fares(catalogues: string, segments: string, carriers: string, travelers: string | null | undefined, fare_types: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'offers/fares/fares?catalogues=' + (catalogues == null ? '' : encodeURIComponent(catalogues)) + '&segments=' + (segments == null ? '' : encodeURIComponent(segments)) + '&carriers=' + (carriers == null ? '' : encodeURIComponent(carriers)) + '&travelers=' + (travelers == null ? '' : encodeURIComponent(travelers)) + '&fare_types=' + (fare_types == null ? '' : encodeURIComponent(fare_types)), { responseType: 'text' });
		}

		/**
		 * Lowest Fares
		 * Retrieve lowest fare for a specific Origin & Destination pair on a given date. Available fares are: One-way and Return for 4U. Return only for OS & LH
		 * Get offers/fares/lowestfares
		 * @param {string} catalogues Search fares from these carriers' catalogues e.g. '4U;OS;LH'
		 * @param {string} origin Journey origin. 3-letter IATA aiport code e.g. 'FRA'
		 * @param {string} destination Journey destination. 3-letter IATA airport code e.g. 'MAD'
		 * @param {string} travel_date Journey travel-date YYYY-MM-DD
		 * @param {string} return_date Journey return-date - mandatory for OS and LH searches YYYY-MM-DD
		 * @param {string} cabin_class Cabin class: 'economy', 'premium_economy', 'business', 'first' (Acceptable values are: "", "economy", "premium_economy", "business", "first")
		 * @param {string} travelers Type and number of travelers e.g. '(adult=2;child=2;infant=1)'. For LH only (adult=1) possible
		 * @param {string} fare_family Fare family: basic, smart, best, smartflex, bestflex - Germanwings only (Acceptable values are: "", "basic", "smart", "best", "smartflex", "bestflex")
		 * @param {string} country Country code of requestor. 2-letter ISO 3166-1 country code (e.g. 'de')
		 * @return {string} 
		 */
		Lowest_Fares(catalogues: string, origin: string, destination: string, travel_date: string, return_date: string | null | undefined, cabin_class: string | null | undefined, travelers: string | null | undefined, fare_family: string | null | undefined, country: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'offers/fares/lowestfares?catalogues=' + (catalogues == null ? '' : encodeURIComponent(catalogues)) + '&origin=' + (origin == null ? '' : encodeURIComponent(origin)) + '&destination=' + (destination == null ? '' : encodeURIComponent(destination)) + '&travel_date=' + (travel_date == null ? '' : encodeURIComponent(travel_date)) + '&return_date=' + (return_date == null ? '' : encodeURIComponent(return_date)) + '&cabin_class=' + (cabin_class == null ? '' : encodeURIComponent(cabin_class)) + '&travelers=' + (travelers == null ? '' : encodeURIComponent(travelers)) + '&fare_family=' + (fare_family == null ? '' : encodeURIComponent(fare_family)) + '&country=' + (country == null ? '' : encodeURIComponent(country)), { responseType: 'text' });
		}

		/**
		 * Fares Subscriptions
		 * Create a subscription for best price O&D. Receive regular updates on lowest fares
		 * Get offers/fares/subscriptions
		 * @param {string} origin Journey origin. 3-leter IATA airport code (e.g. 'FRA')
		 * @param {string} destination Journey destination. 3-letter IATA airport code (e.g. 'MAD')
		 * @param {string} cabin_class Cabin class: 'economy', 'premium_economy', 'business', 'first' (Acceptable values are: "", "economy", "premium_economy", "business", "first")
		 * @param {string} trip_duration Trip duration in days (e.g. '7')
		 * @param {string} email Email Address')
		 * @param {string} lang 2-letter ISO 3166-1 language code
		 * @param {string} country 2-letter ISO 3166-1 country code
		 * @param {string} trackingid Tracking parameter
		 * @return {string} 
		 */
		Fares_Subscriptions(origin: string, destination: string, cabin_class: string, trip_duration: string, email: string, lang: string, country: string | null | undefined, trackingid: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'offers/fares/subscriptions?origin=' + (origin == null ? '' : encodeURIComponent(origin)) + '&destination=' + (destination == null ? '' : encodeURIComponent(destination)) + '&cabin_class=' + (cabin_class == null ? '' : encodeURIComponent(cabin_class)) + '&trip_duration=' + (trip_duration == null ? '' : encodeURIComponent(trip_duration)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&lang=' + (lang == null ? '' : encodeURIComponent(lang)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&trackingid=' + (trackingid == null ? '' : encodeURIComponent(trackingid)), { responseType: 'text' });
		}

		/**
		 * OND Route
		 * Returns LH route origin & destination information
		 * Get offers/ond/route/{origin}/{destination}
		 * @param {string} origin Enter either the orgin city or orgin country code (e.g 'FRA' or 'DE'). Enter '*' for all
		 * @param {string} destination Enter either the destination city or country code (e.g 'MAD' or 'ES'). Enter '*' for all
		 * @param {string} catalogues Carrier for which the OND will be retrieved (e.g. 'LH')
		 * @param {string} limit Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)
		 * @param {string} offset Number of records skipped. Defaults to 0
		 * @return {string} 
		 */
		OND_Route(origin: string, destination: string, catalogues: string | null | undefined, limit: string | null | undefined, offset: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'offers/ond/route/' + (origin == null ? '' : encodeURIComponent(origin)) + '/' + (destination == null ? '' : encodeURIComponent(destination)) + '&catalogues=' + (catalogues == null ? '' : encodeURIComponent(catalogues)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)), { responseType: 'text' });
		}

		/**
		 * OND Status
		 * Returns LH network route status information. Search for recently added or retired routes
		 * Get offers/ond/status
		 * @param {string} catalogues Carrier for which the OND will be retrieved (e.g. 'LH')
		 * @param {string} new_routes Enter if newly added routes should be returned in the response. (Acceptable values are: "", "true", "false")
		 * @param {string} old_routes Enter if old (deleted) routes should be returned in the response. (Acceptable values are: "", "true", "false")
		 * @return {string} 
		 */
		OND_Status(catalogues: string | null | undefined, new_routes: string | null | undefined, old_routes: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'offers/ond/status?catalogues=' + (catalogues == null ? '' : encodeURIComponent(catalogues)) + '&new_routes=' + (new_routes == null ? '' : encodeURIComponent(new_routes)) + '&old_routes=' + (old_routes == null ? '' : encodeURIComponent(old_routes)), { responseType: 'text' });
		}

		/**
		 * Top OND
		 * Returns LH Top routes per country or across all countries
		 * Get offers/ond/top
		 * @param {string} catalogues Carrier for which the OND will be retrieved (e.g. 'LH')
		 * @param {string} origin Enter the origin country code (e.g. 'DE'). Leave empty to search Top OND across all countries
		 * @return {string} 
		 */
		Top_OND(catalogues: string | null | undefined, origin: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'offers/ond/top?catalogues=' + (catalogues == null ? '' : encodeURIComponent(catalogues)) + '&origin=' + (origin == null ? '' : encodeURIComponent(origin)), { responseType: 'text' });
		}

		/**
		 * Orders
		 * Retrieve order by ID and optionally name. This service is only accessible for LH privileged partners
		 * Get orders/orders/{orderID}/{name}
		 * @param {string} orderID Unique order identifier
		 * @param {string} name Surname of traveller
		 * @return {string} 
		 */
		Orders(orderID: string, name: string): Observable<string> {
			return this.http.get(this.baseUri + 'orders/orders/' + (orderID == null ? '' : encodeURIComponent(orderID)) + '/' + (name == null ? '' : encodeURIComponent(name)), { responseType: 'text' });
		}

		/**
		 * Auto Check-In
		 * Trigger an automatic check-in given a ticket number. This service is only accessible for LH privileged partners
		 * Put preflight/autocheckin/{ticketnumber}
		 * @param {string} ticketnumber Ticket number
		 * @param {string} emailAddress Email address
		 * @return {string} 
		 */
		Auto_Check_In(ticketnumber: string, emailAddress: string): Observable<string> {
			return this.http.put(this.baseUri + 'preflight/autocheckin/' + (ticketnumber == null ? '' : encodeURIComponent(ticketnumber)) + '&emailAddress=' + (emailAddress == null ? '' : encodeURIComponent(emailAddress)), null, { responseType: 'text' });
		}

		/**
		 * Price Offers
		 * Retrieve a best price offer given an origin and destination.
		 * Get promotions/priceoffers/flights/ond/{origin}/{destination}
		 * @param {string} origin Departure city. 3-letter IATA city code
		 * @param {string} destination Destination city. 3-letter IATA city code
		 * @param {string} departureDate Departure date in local time (YYYY-MM-DD)
		 * @param {string} returnDate Return date in local time (YYYY-MM-DD)
		 * @param {string} service Optional parameter.
		 * @return {string} 
		 */
		Price_Offers(origin: string, destination: string, departureDate: string, returnDate: string, service: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'promotions/priceoffers/flights/ond/' + (origin == null ? '' : encodeURIComponent(origin)) + '/' + (destination == null ? '' : encodeURIComponent(destination)) + '&departureDate=' + (departureDate == null ? '' : encodeURIComponent(departureDate)) + '&returnDate=' + (returnDate == null ? '' : encodeURIComponent(returnDate)) + '&service=' + (service == null ? '' : encodeURIComponent(service)), { responseType: 'text' });
		}

		/**
		 * Seat Details
		 * A description of all available seat details by aircraft type. You can retrieve the full set or details for a particular aircraft type.
		 * Get references/seatdetails/{aircraftCode}/{cabinCode}
		 * @param {string} aircraftCode Aircraft type. 3-character IATA equipment code
		 * @param {string} cabinCode Cabin class: M, E, C, F (Acceptable values are: "", "M", "E", "C", "F")
		 * @param {string} lang 2-letter ISO 3166-1 language code
		 * @return {string} 
		 */
		Seat_Details(aircraftCode: string, cabinCode: string, lang: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'references/seatdetails/' + (aircraftCode == null ? '' : encodeURIComponent(aircraftCode)) + '/' + (cabinCode == null ? '' : encodeURIComponent(cabinCode)) + '&lang=' + (lang == null ? '' : encodeURIComponent(lang)), { responseType: 'text' });
		}
	}

}

