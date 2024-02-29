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
		 * Retrieves announcement data
		 * Request full announcement data identified by announcement id
		 * Get api/v1/company/announcement/{id}
		 * @param {string} id announcement hex ID
		 * @return {Array<CompanyAnnouncementReturn>} List of announcements
		 */
		CompanyAnnouncement(id: string): Observable<Array<CompanyAnnouncementReturn>> {
			return this.http.get<Array<CompanyAnnouncementReturn>>(this.baseUri + 'api/v1/company/announcement/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieves a list of companies
		 * Lookup companies identified by a LEI (Legal Entity Identifier) number. Search is forwarded to a provider.
		 * Get api/v1/company/deepsearch/lei/{number}
		 * @param {string} number lei number
		 * @param {number} page Pagination for the ISIN number results (1000 numbers per page)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {any} Result of a lookup by LEI number
		 */
		CompanyDeepsearchLEI(number: string, page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/company/deepsearch/lei/' + (number == null ? '' : encodeURIComponent(number)) + '&page=' + page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of companies from the official business register
		 * Search for companies with a certain name. Search is forwarded to the respective business register of the country.
		 * Get api/v1/company/deepsearch/name/{country}/{name}
		 * @param {string} country ISO_3166-1_alpha-2 representation of a country name - 2 chars
		 * @param {string} name company name
		 * @return {void} 
		 */
		CompanyDeepsearchName(country: string, name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/company/deepsearch/name/' + (country == null ? '' : encodeURIComponent(country)) + '/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of companies from the official business register
		 * Search for companies with a certain register number. Search is forwarded to the respective business register of the country.
		 * Get api/v1/company/deepsearch/number/{country}/{number}
		 * @param {string} country ISO_3166-1_alpha-2 representation of a country name - 2 chars
		 * @param {string} number company registration number
		 * @return {void} 
		 */
		CompanyDeepsearchNumber(country: string, number: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/company/deepsearch/number/' + (country == null ? '' : encodeURIComponent(country)) + '/' + (number == null ? '' : encodeURIComponent(number)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get available ChangeTypes
		 * Get current list of available ChangeTypes to subscribe to
		 * Get api/v1/company/monitoring/changeTypes
		 * @return {Array<string>} List of ChangeTypes
		 */
		CompanyMonitorChangeTypesList(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/v1/company/monitoring/changeTypes', {});
		}

		/**
		 * Retrieves a list of registered monitors
		 * Query list of all registered monitors for logged in user
		 * Get api/v1/company/monitoring/list
		 * @return {void} 
		 */
		CompanyMonitorList(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/company/monitoring/list', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get monitor status for specific company id
		 * Query status of registered monitors for a specific company identified by a company id
		 * Get api/v1/company/monitoring/list/{id}
		 * @param {string} id Company Hex ID
		 * @return {void} 
		 */
		CompanyMonitorId(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/company/monitoring/list/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deactivates an active notification
		 * Deactivate a previously registered company monitor identified by the notifier id
		 * Post api/v1/company/monitoring/unregister/{id}
		 * @param {string} id Registration id of monitoring request record
		 * @return {void} Empty response body
		 */
		CompanyMonitorUnregister(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/company/monitoring/unregister/' + (id == null ? '' : encodeURIComponent(id)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of registered notifications
		 * Query list of registered callback URLs for logged in user
		 * Get api/v1/company/notification/list
		 * @return {void} 
		 */
		CompanyNotificationList(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/company/notification/list', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of registered notifications
		 * Query list of registered notifications for a specific company identified by a company id
		 * Get api/v1/company/notification/list/{id}
		 * @param {string} id Company Hex ID
		 * @return {Array<string>} List of monitor webhooks
		 */
		CompanyNotificationId(id: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/v1/company/notification/list/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Unregister a company from Monitoring
		 * Deactivate a previously registered company monitor identified by the notifier id
		 * Post api/v1/company/notification/unregister/{id}
		 * @param {string} id Registration id of monitoring request record
		 * @return {void} Empty response body
		 */
		CompanyNotificationUnregister(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/company/notification/unregister/' + (id == null ? '' : encodeURIComponent(id)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of companies from the KYC API company index
		 * KYC API company index lookup for companies with a certain name in a country.
		 * Get api/v1/company/search/name/{country}/{name}
		 * @param {string} country ISO_3166-1_alpha-2 representation of a country name - 2 chars
		 * @param {string} name company name
		 * @param {string} limit number of search results
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Array<CompanySearchNameReturn>} List of companies
		 */
		CompanySearchName(country: string, name: string, limit: string | null | undefined): Observable<Array<CompanySearchNameReturn>> {
			return this.http.get<Array<CompanySearchNameReturn>>(this.baseUri + 'api/v1/company/search/name/' + (country == null ? '' : encodeURIComponent(country)) + '/' + (name == null ? '' : encodeURIComponent(name)) + '&limit=' + limit, {});
		}

		/**
		 * Retrieves a list of companies from the KYC API company index
		 * KYC API company index lookup for companies with a certain register number in a country.
		 * Get api/v1/company/search/number/{country}/{number}
		 * @param {string} country ISO_3166-1_alpha-2 representation of a country name - 2 chars
		 * @param {string} number company registration number
		 * @param {string} limit number of search results
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		CompanySearchNumber(country: string, number: string, limit: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/company/search/number/' + (country == null ? '' : encodeURIComponent(country)) + '/' + (number == null ? '' : encodeURIComponent(number)) + '&limit=' + limit, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves company announcements
		 * Search announcements filed to the business register from a company identified by an id
		 * Get api/v1/company/{id}/announcements
		 * @param {string} id company hex ID
		 * @param {number} limit limit of announcements in response (default 10)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset to paginate through results (default 0)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} data If this parameter is set to false, you will only receive ids, and no additional data about announcements and no hits to the metric will be counted. (and potentially minimizing your costs)
		 * @return {void} 
		 */
		CompanyIdAnnouncements(id: string, limit: number | null | undefined, offset: number | null | undefined, data: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/company/' + (id == null ? '' : encodeURIComponent(id)) + '/announcements&limit=' + limit + '&offset=' + offset + '&data=' + data, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves structured data extracted from a company document
		 * Request company superdata identified by company id
		 * Get api/v1/company/{id}/super/{country}
		 * @param {string} id company superdata by id
		 * @param {string} country ISO_3166-1_alpha-2 representation of a country name - 2 chars
		 * @param {CompanyIdSuperLang} lang Optional data translation (only available in limited jurisdictions)
		 * @return {void} 
		 */
		CompanyIdSuper(id: string, country: string, lang: CompanyIdSuperLang | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/company/' + (id == null ? '' : encodeURIComponent(id)) + '/super/' + (country == null ? '' : encodeURIComponent(country)) + '&lang=' + lang, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves company details
		 * Get company details by id. The level of details is defined by the dataset parameter
		 * Get api/v1/company/{id}/{dataset}
		 * @param {string} id company master data by id
		 * @param {boolean} check_stock_listing Try to retrieve additional stock information for this company. (Only available on refresh)
		 * @param {CompanyIdDatasetDataset} dataset company master data by id
		 * @param {CompanyIdDatasetLang} lang Optional data translation (only available in limited jurisdictions)
		 * @return {void} 
		 */
		CompanyIdDataset(id: string, check_stock_listing: boolean | null | undefined, dataset: CompanyIdDatasetDataset, lang: CompanyIdDatasetLang | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/company/' + (id == null ? '' : encodeURIComponent(id)) + '/' + dataset + '&check_stock_listing=' + check_stock_listing + '&lang=' + lang, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Verifies an EIN number
		 * Performs a basic verification check of a given EIN tax number.
		 * Get api/v1/ein-verification/basic-check
		 * @param {string} ein Nine letter EIN number with or without hyphens
		 * @return {any} Result of a basic EIN number verification
		 */
		EinVerificationBasic(ein: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/ein-verification/basic-check?ein=' + (ein == null ? '' : encodeURIComponent(ein)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Verifies EIN number and retrieves company data
		 * Comprehensive verification of a given EIN number. Additionally to the basic verification it will lookup company details
		 * Get api/v1/ein-verification/comprehensive-check
		 * @param {string} ein Nine letter EIN number with or without hyphens
		 * @return {any} Result of a comprehensive EIN number verification
		 */
		EinVerificationComprehensive(ein: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/ein-verification/comprehensive-check?ein=' + (ein == null ? '' : encodeURIComponent(ein)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of EIN numbers
		 * Lookup EIN number for a company by its company name
		 * Get api/v1/ein-verification/lookup
		 * @param {string} name Business name of the company
		 * @param {string} state Optional state parameter to improve results. (Two letter code for example CA or US-CA for California)
		 * @param {string} zip Optional zip code parameter to improve results. (Zip is preferred over state)
		 * @param {boolean} tight Optional parameter to do tight matching. (Only the best match will be returned rather then the top 5)
		 * @return {any} Result of a EIN reverse lookup
		 */
		EinVerificationLookup(name: string, state: string | null | undefined, zip: string | null | undefined, tight: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/ein-verification/lookup?name=' + (name == null ? '' : encodeURIComponent(name)) + '&state=' + (state == null ? '' : encodeURIComponent(state)) + '&zip=' + (zip == null ? '' : encodeURIComponent(zip)) + '&tight=' + tight, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of monitor entries
		 * Retrieve a list of all active Pep Sanction Report monitors for this account
		 * Get api/v1/pepsanction/monitor/list
		 * @return {Array<string>} View Pep Sanction Report monitors
		 */
		PepMonitorList(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/v1/pepsanction/monitor/list', {});
		}

		/**
		 * Deactive a pep sanction monitor
		 * Unregister a previously created Pep Sanction Report Monitor
		 * Post api/v1/pepsanction/monitor/unregister/{id}
		 * @param {string} id The identifier of the Monitor
		 * @return {void} 
		 */
		PepMonitorUnregister(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/pepsanction/monitor/unregister/' + (id == null ? '' : encodeURIComponent(id)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a json or pdf report
		 * Retrieve a completed Pep Sanction check structured or in pdf depending on given accept header
		 * Get api/v1/pepsanction/retrieve/{id}
		 * @param {string} id The id of the ordered Pep Sanction Check (id as returned by orderPepSanction call)
		 * @return {any} Result of a PEP and sanctions list check
		 */
		PepRetrieve(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/pepsanction/retrieve/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a document availability result
		 * Check availability and valid options for a particular product for a particular company identfied by its id
		 * Get api/v1/product/availability/{sku}/{subjectId}
		 * @param {string} sku SKU - 9 character value from a Product object
		 * @param {string} subjectId Subject (e.g. Company) ID - 32 character hex value
		 * @return {any} Product details
		 */
		ProductAvailability(sku: string, subjectId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/product/availability/' + (sku == null ? '' : encodeURIComponent(sku)) + '/' + (subjectId == null ? '' : encodeURIComponent(subjectId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a catalog of products
		 * Returns a catalog of purchasable products available with some metadata for a particular country
		 * Get api/v1/product/catalog/{country}
		 * @param {string} country two letter country code in upper case
		 * @return {any} Product with details like URI to purchase it
		 */
		ProductCatalog(country: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/product/catalog/' + (country == null ? '' : encodeURIComponent(country)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns metadata for a notifier
		 * Queries and returns all metadata associated with a notifier identified by its notifer id
		 * Get api/v1/product/notifier/{notifierId}
		 * @param {string} notifierId ID of the ProductOrderNotifier as returned from a /notifier POST call - 32 character hex value
		 * @return {void} 
		 */
		ProductNotifier(notifierId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/product/notifier/' + (notifierId == null ? '' : encodeURIComponent(notifierId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a notifier for an order
		 * Create a notifier for a particular order. Parameters can be supplied in the path
		 * Post api/v1/product/notifier/{orderId}/{type}/{uri}
		 * @param {string} orderId ID of the ProductOrder as returned from a /product/buy call - 32 character hex value
		 * @param {string} type Type of the notifier - indicates the action the notifier will perform. Currently GET and POST are supported which performs an http(s) GET/POST to the supplied uri with appended notifierId= and orderId= parameters when the order processing is completed. Upon the POST request the order object is sent as a JSON body
		 * @param {string} uri URI of the notifier for the 'complete' action. Currently only a GET method HTTP(s) URL is supported. 1 to 250 characters long. Every slash in the URI must be replaced by a ~
		 * @return {any} Details of configured product order notification
		 */
		ProductNotifierCreate(orderId: string, type: string, uri: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/product/notifier/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (uri == null ? '' : encodeURIComponent(uri)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Places a product order
		 * Place an order for a particular product identified by its SKU with a particular option for a particular company identified by its id
		 * Post api/v1/product/order/{sku}/{option}/{subjectId}
		 * @param {string} sku SKU - 9 character value from a Product object
		 * @param {string} option Product option (e.g. Accounts year) from a previous Availability call
		 * @param {string} subjectId Subject (e.g. Company) ID - 32 character hex value
		 * @return {void} 
		 */
		ProductOrderWithOption(sku: string, option: string, subjectId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/product/order/' + (sku == null ? '' : encodeURIComponent(sku)) + '/' + (option == null ? '' : encodeURIComponent(option)) + '/' + (subjectId == null ? '' : encodeURIComponent(subjectId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Places a product order
		 * Place an order for a particular product identified by its SKU for a particular company identified by its id
		 * Post api/v1/product/order/{sku}/{subjectId}
		 * @param {string} sku SKU - 9 character value from a Product object
		 * @param {string} subjectId Subject (e.g. Company) ID - 32 character hex value
		 * @return {any} Product order details
		 */
		ProductOrder(sku: string, subjectId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/product/order/' + (sku == null ? '' : encodeURIComponent(sku)) + '/' + (subjectId == null ? '' : encodeURIComponent(subjectId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of products
		 * Search for possible products for a particular company identified by its id
		 * Get api/v1/product/search/{subjectId}
		 * @param {string} subjectId Subject (e.g. Company) ID - 32 character hex value
		 * @return {Array<ProductSearchReturn>} List of products
		 */
		ProductSearch(subjectId: string): Observable<Array<ProductSearchReturn>> {
			return this.http.get<Array<ProductSearchReturn>>(this.baseUri + 'api/v1/product/search/' + (subjectId == null ? '' : encodeURIComponent(subjectId)), {});
		}

		/**
		 * Returns metadata for a order
		 * Retrieve the current status of an order identified by its order id
		 * Get api/v1/product/status/{orderId}
		 * @param {string} orderId ID of the ProductOrder as returned from a /product/buy call - 32 character hex value
		 * @return {void} 
		 */
		ProductStatus(orderId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/product/status/' + (orderId == null ? '' : encodeURIComponent(orderId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the result of an order
		 * Retrieves the document or structured data associated with a completed order identified with its order id
		 * Get api/v1/product/{orderId}
		 * @param {string} orderId ID of the ProductOrder as returned from a /product/buy call - 32 character hex value
		 * @return {any} Details for retrieval of a delivered product
		 */
		ProductRetrieve(orderId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/product/' + (orderId == null ? '' : encodeURIComponent(orderId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of countries
		 * Retrieve the list of all currently enabled countries
		 * Get api/v1/system/countries
		 * @return {Array<SystemCountriesReturn>} List of countries
		 */
		SystemCountries(): Observable<Array<SystemCountriesReturn>> {
			return this.http.get<Array<SystemCountriesReturn>>(this.baseUri + 'api/v1/system/countries', {});
		}

		/**
		 * Returns the health information for the official business registers based on usage.
		 * Returns the health information for the official business registers based on usage.
		 * Get api/v1/system/health
		 * @return {Array<HealthCheckReturn>} List of the commercial registers and their health data
		 */
		HealthCheck(): Observable<Array<HealthCheckReturn>> {
			return this.http.get<Array<HealthCheckReturn>>(this.baseUri + 'api/v1/system/health', {});
		}

		/**
		 * Returns a list of products with prices
		 * Retrieve pricing rules for your subscription plan
		 * Get api/v1/system/pricelist
		 * @return {Array<SystemPricelistReturn>} List of pricing rules
		 */
		SystemPricelist(): Observable<Array<SystemPricelistReturn>> {
			return this.http.get<Array<SystemPricelistReturn>>(this.baseUri + 'api/v1/system/pricelist', {});
		}

		/**
		 * Verifies a TIN number
		 * Performs a basic verification check of a given TIN number and name.
		 * Get api/v1/tin-verification/basic-check
		 * @param {string} tin Nine letter TIN number with or without hyphens
		 * @param {string} name Company Name
		 * @return {any} Result of a basic TIN number check with company name
		 */
		TinVerificationBasicCheck(tin: string, name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/tin-verification/basic-check?tin=' + (tin == null ? '' : encodeURIComponent(tin)) + '&name=' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * EIN Name Lookup with TIN number and retrieves company data
		 * Performs an EIN name match using provided TIN Number. Additionally to the name lookup it will lookup company details
		 * Get api/v1/tin-verification/comprehensive-check
		 * @param {string} tin Nine letter TIN number with or without hyphens
		 * @param {string} name Company Name
		 * @param {string} threshold The percentage of minimum similarity threshold for company matching (optional, default: 70%)
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {any} Result of a basic TIN number check with company name and the list of matched companies
		 */
		TinVerificationComprehensiveCheck(tin: string, name: string, threshold: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/tin-verification/comprehensive-check?tin=' + (tin == null ? '' : encodeURIComponent(tin)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&threshold=' + threshold, { observe: 'response', responseType: 'text' });
		}

		/**
		 * EIN Name Lookup with TIN number
		 * Performs an EIN name match using provided TIN Number
		 * Get api/v1/tin-verification/name-lookup
		 * @param {string} tin Nine letter TIN number with or without hyphens
		 * @return {any} Result of a EIN name lookup with TIN number
		 */
		TinVerificationNameLookup(tin: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/tin-verification/name-lookup?tin=' + (tin == null ? '' : encodeURIComponent(tin)), { observe: 'response', responseType: 'text' });
		}
	}

	export interface CompanyAnnouncementReturn {
		countryCode?: string | null;
		id?: string | null;
		registrationNumber?: string | null;
		structured?: string | null;
		text?: string | null;

		/** Type: DateOnly */
		time?: Date | null;
		type?: string | null;
	}
	export interface CompanyAnnouncementReturnFormProperties {
		countryCode: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		registrationNumber: FormControl<string | null | undefined>,
		structured: FormControl<string | null | undefined>,
		text: FormControl<string | null | undefined>,

		/** Type: DateOnly */
		time: FormControl<Date | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateCompanyAnnouncementReturnFormGroup() {
		return new FormGroup<CompanyAnnouncementReturnFormProperties>({
			countryCode: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			registrationNumber: new FormControl<string | null | undefined>(undefined),
			structured: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<Date | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CompanySearchNameReturn {
		address?: Array<string>;
		country?: string | null;
		dateOfIncorporation?: string | null;
		extraData?: string | null;
		formattedAddress?: Array<string>;
		id?: string | null;
		legalForm?: string | null;
		managingDirectors?: Array<string>;
		name?: string | null;
		registrationNumber?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		requestTime?: number | null;
		secretaries?: Array<string>;
		sicNaceCodes?: Array<string>;
		status?: string | null;
	}
	export interface CompanySearchNameReturnFormProperties {
		country: FormControl<string | null | undefined>,
		dateOfIncorporation: FormControl<string | null | undefined>,
		extraData: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		legalForm: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		registrationNumber: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		requestTime: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateCompanySearchNameReturnFormGroup() {
		return new FormGroup<CompanySearchNameReturnFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			dateOfIncorporation: new FormControl<string | null | undefined>(undefined),
			extraData: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			legalForm: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			registrationNumber: new FormControl<string | null | undefined>(undefined),
			requestTime: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CompanyIdSuperLang { '' = '', OG = 'OG', EN = 'EN' }

	export enum CompanyIdDatasetDataset { '' = '', mini = 'mini', master = 'master', full = 'full', refresh = 'refresh' }

	export enum CompanyIdDatasetLang { '' = '', EN = 'EN', ES = 'ES', FR = 'FR' }

	export enum PepOrderType { '' = '', B = 'B', P = 'P' }

	export enum PepRetrieveAccept { 'application/json' = 'application/json', 'application/pdf' = 'application/pdf' }

	export interface ProductSearchReturn {
		availability?: string | null;
		category?: string | null;
		countryCode?: string | null;
		description?: string | null;
		hasOptions?: boolean | null;
		options?: Array<string>;

		/** Type: float */
		price?: number | null;
		provider?: string | null;
		sku?: string | null;
		type?: string | null;
	}
	export interface ProductSearchReturnFormProperties {
		availability: FormControl<string | null | undefined>,
		category: FormControl<string | null | undefined>,
		countryCode: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		hasOptions: FormControl<boolean | null | undefined>,

		/** Type: float */
		price: FormControl<number | null | undefined>,
		provider: FormControl<string | null | undefined>,
		sku: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchReturnFormGroup() {
		return new FormGroup<ProductSearchReturnFormProperties>({
			availability: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<string | null | undefined>(undefined),
			countryCode: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			hasOptions: new FormControl<boolean | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SystemCountriesReturn {
		country_code?: string | null;
		country_name?: string | null;
	}
	export interface SystemCountriesReturnFormProperties {
		country_code: FormControl<string | null | undefined>,
		country_name: FormControl<string | null | undefined>,
	}
	export function CreateSystemCountriesReturnFormGroup() {
		return new FormGroup<SystemCountriesReturnFormProperties>({
			country_code: new FormControl<string | null | undefined>(undefined),
			country_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HealthCheckReturn {
		name?: string | null;
		status?: string | null;
	}
	export interface HealthCheckReturnFormProperties {
		name: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateHealthCheckReturnFormGroup() {
		return new FormGroup<HealthCheckReturnFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SystemPricelistReturn {
		cost_per_unit?: string | null;
		max?: string | null;
		metric_id?: string | null;
		min?: string | null;
		sku?: string | null;
	}
	export interface SystemPricelistReturnFormProperties {
		cost_per_unit: FormControl<string | null | undefined>,
		max: FormControl<string | null | undefined>,
		metric_id: FormControl<string | null | undefined>,
		min: FormControl<string | null | undefined>,
		sku: FormControl<string | null | undefined>,
	}
	export function CreateSystemPricelistReturnFormGroup() {
		return new FormGroup<SystemPricelistReturnFormProperties>({
			cost_per_unit: new FormControl<string | null | undefined>(undefined),
			max: new FormControl<string | null | undefined>(undefined),
			metric_id: new FormControl<string | null | undefined>(undefined),
			min: new FormControl<string | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
		});

	}

}

