import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface APIError {

		/**
		 * API error code. If set and > 0 then an API error has occurred your request could not be completed
		 * Required
		 */
		'api-error': number;

		/**
		 * API error message
		 * Required
		 */
		'api-error-msg': string;
	}
	export interface APIErrorFormProperties {

		/**
		 * API error code. If set and > 0 then an API error has occurred your request could not be completed
		 * Required
		 */
		'api-error': FormControl<number | null | undefined>,

		/**
		 * API error message
		 * Required
		 */
		'api-error-msg': FormControl<string | null | undefined>,
	}
	export function CreateAPIErrorFormGroup() {
		return new FormGroup<APIErrorFormProperties>({
			'api-error': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'api-error-msg': new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BINLookupResponse {

		/**
		 * The BIN or IIN number
		 * Required
		 */
		'bin-number': string;

		/**
		 * The card brand (e.g. Visa or Mastercard)
		 * Required
		 */
		'card-brand': string;

		/**
		 * The card category. There are many different card categories the most common card categories are: CLASSIC, BUSINESS, CORPORATE, PLATINUM, PREPAID
		 * Required
		 */
		'card-category': string;

		/**
		 * The card type, will always be one of: DEBIT, CREDIT, CHARGE CARD
		 * Required
		 */
		'card-type': string;

		/**
		 * The full country name of the issuer
		 * Required
		 */
		country: string;

		/**
		 * The ISO 2-letter country code of the issuer
		 * Required
		 */
		'country-code': string;

		/**
		 * The ISO 3-letter country code of the issuer
		 * Required
		 */
		'country-code3': string;

		/**
		 * ISO 4217 currency code associated with the country of the issuer
		 * Required
		 */
		'currency-code': string;

		/**
		 * True if the customers IP is listed on one of our blocklists, see the <a href="http://www.neutrinoapi.com/api/ip-blocklist/">IP Blocklist API</a>
		 * Required
		 */
		'ip-blocklisted': boolean;

		/**
		 * An array of strings indicating which blocklists this IP is listed on
		 * Required
		 */
		'ip-blocklists': Array<string>;

		/**
		 * The city of the customers IP (if detectable)
		 * Required
		 */
		'ip-city': string;

		/**
		 * The country of the customers IP
		 * Required
		 */
		'ip-country': string;

		/**
		 * The ISO 2-letter country code of the customers IP
		 * Required
		 */
		'ip-country-code': string;

		/**
		 * The ISO 3-letter country code of the customers IP
		 * Required
		 */
		'ip-country-code3': string;

		/**
		 * True if the customers IP country matches the BIN country
		 * Required
		 */
		'ip-matches-bin': boolean;

		/**
		 * The region of the customers IP (if detectable)
		 * Required
		 */
		'ip-region': string;

		/**
		 * Is this a commercial/business use card
		 * Required
		 */
		'is-commercial': boolean;

		/**
		 * Is this a prepaid or prepaid reloadable card
		 * Required
		 */
		'is-prepaid': boolean;

		/**
		 * The card issuer
		 * Required
		 */
		issuer: string;

		/**
		 * The card issuers phone number
		 * Required
		 */
		'issuer-phone': string;

		/**
		 * The card issuers website
		 * Required
		 */
		'issuer-website': string;

		/**
		 * Is this a valid BIN or IIN number
		 * Required
		 */
		valid: boolean;
	}
	export interface BINLookupResponseFormProperties {

		/**
		 * The BIN or IIN number
		 * Required
		 */
		'bin-number': FormControl<string | null | undefined>,

		/**
		 * The card brand (e.g. Visa or Mastercard)
		 * Required
		 */
		'card-brand': FormControl<string | null | undefined>,

		/**
		 * The card category. There are many different card categories the most common card categories are: CLASSIC, BUSINESS, CORPORATE, PLATINUM, PREPAID
		 * Required
		 */
		'card-category': FormControl<string | null | undefined>,

		/**
		 * The card type, will always be one of: DEBIT, CREDIT, CHARGE CARD
		 * Required
		 */
		'card-type': FormControl<string | null | undefined>,

		/**
		 * The full country name of the issuer
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * The ISO 2-letter country code of the issuer
		 * Required
		 */
		'country-code': FormControl<string | null | undefined>,

		/**
		 * The ISO 3-letter country code of the issuer
		 * Required
		 */
		'country-code3': FormControl<string | null | undefined>,

		/**
		 * ISO 4217 currency code associated with the country of the issuer
		 * Required
		 */
		'currency-code': FormControl<string | null | undefined>,

		/**
		 * True if the customers IP is listed on one of our blocklists, see the <a href="http://www.neutrinoapi.com/api/ip-blocklist/">IP Blocklist API</a>
		 * Required
		 */
		'ip-blocklisted': FormControl<boolean | null | undefined>,

		/**
		 * The city of the customers IP (if detectable)
		 * Required
		 */
		'ip-city': FormControl<string | null | undefined>,

		/**
		 * The country of the customers IP
		 * Required
		 */
		'ip-country': FormControl<string | null | undefined>,

		/**
		 * The ISO 2-letter country code of the customers IP
		 * Required
		 */
		'ip-country-code': FormControl<string | null | undefined>,

		/**
		 * The ISO 3-letter country code of the customers IP
		 * Required
		 */
		'ip-country-code3': FormControl<string | null | undefined>,

		/**
		 * True if the customers IP country matches the BIN country
		 * Required
		 */
		'ip-matches-bin': FormControl<boolean | null | undefined>,

		/**
		 * The region of the customers IP (if detectable)
		 * Required
		 */
		'ip-region': FormControl<string | null | undefined>,

		/**
		 * Is this a commercial/business use card
		 * Required
		 */
		'is-commercial': FormControl<boolean | null | undefined>,

		/**
		 * Is this a prepaid or prepaid reloadable card
		 * Required
		 */
		'is-prepaid': FormControl<boolean | null | undefined>,

		/**
		 * The card issuer
		 * Required
		 */
		issuer: FormControl<string | null | undefined>,

		/**
		 * The card issuers phone number
		 * Required
		 */
		'issuer-phone': FormControl<string | null | undefined>,

		/**
		 * The card issuers website
		 * Required
		 */
		'issuer-website': FormControl<string | null | undefined>,

		/**
		 * Is this a valid BIN or IIN number
		 * Required
		 */
		valid: FormControl<boolean | null | undefined>,
	}
	export function CreateBINLookupResponseFormGroup() {
		return new FormGroup<BINLookupResponseFormProperties>({
			'bin-number': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'card-brand': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'card-category': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'card-type': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'country-code': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'country-code3': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'currency-code': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'ip-blocklisted': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'ip-city': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'ip-country': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'ip-country-code': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'ip-country-code3': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'ip-matches-bin': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'ip-region': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'is-commercial': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-prepaid': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			issuer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'issuer-phone': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'issuer-website': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			valid: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BadWordFilterResponse {

		/**
		 * An array of the bad words found
		 * Required
		 */
		'bad-words-list': Array<string>;

		/**
		 * Total number of bad words detected
		 * Required
		 */
		'bad-words-total': number;

		/**
		 * The censored content (only set if censor-character has been set)
		 * Required
		 */
		'censored-content': string;

		/**
		 * Does the text contain bad words
		 * Required
		 */
		'is-bad': boolean;
	}
	export interface BadWordFilterResponseFormProperties {

		/**
		 * Total number of bad words detected
		 * Required
		 */
		'bad-words-total': FormControl<number | null | undefined>,

		/**
		 * The censored content (only set if censor-character has been set)
		 * Required
		 */
		'censored-content': FormControl<string | null | undefined>,

		/**
		 * Does the text contain bad words
		 * Required
		 */
		'is-bad': FormControl<boolean | null | undefined>,
	}
	export function CreateBadWordFilterResponseFormGroup() {
		return new FormGroup<BadWordFilterResponseFormProperties>({
			'bad-words-total': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'censored-content': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'is-bad': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Blacklist {

		/**
		 * True if the host is currently black-listed
		 * Required
		 */
		'is-listed': boolean;

		/**
		 * The hostname of the DNSBL
		 * Required
		 */
		'list-host': string;

		/**
		 * The name of the DNSBL
		 * Required
		 */
		'list-name': string;

		/**
		 * The list rating [1-3] with 1 being the best rating and 3 the lowest rating
		 * Required
		 */
		'list-rating': number;

		/**
		 * The DNSBL server response time in milliseconds
		 * Required
		 */
		'response-time': number;

		/**
		 * The specific return code for this listing (only set if listed)
		 * Required
		 */
		'return-code': string;

		/**
		 * The TXT record returned for this listing (only set if listed)
		 * Required
		 */
		'txt-record': string;
	}
	export interface BlacklistFormProperties {

		/**
		 * True if the host is currently black-listed
		 * Required
		 */
		'is-listed': FormControl<boolean | null | undefined>,

		/**
		 * The hostname of the DNSBL
		 * Required
		 */
		'list-host': FormControl<string | null | undefined>,

		/**
		 * The name of the DNSBL
		 * Required
		 */
		'list-name': FormControl<string | null | undefined>,

		/**
		 * The list rating [1-3] with 1 being the best rating and 3 the lowest rating
		 * Required
		 */
		'list-rating': FormControl<number | null | undefined>,

		/**
		 * The DNSBL server response time in milliseconds
		 * Required
		 */
		'response-time': FormControl<number | null | undefined>,

		/**
		 * The specific return code for this listing (only set if listed)
		 * Required
		 */
		'return-code': FormControl<string | null | undefined>,

		/**
		 * The TXT record returned for this listing (only set if listed)
		 * Required
		 */
		'txt-record': FormControl<string | null | undefined>,
	}
	export function CreateBlacklistFormGroup() {
		return new FormGroup<BlacklistFormProperties>({
			'is-listed': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'list-host': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'list-name': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'list-rating': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'response-time': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'return-code': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'txt-record': new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BlocklistSensor {

		/**
		 * The primary blocklist category this sensor belongs to
		 * Required
		 */
		blocklist: string;

		/**
		 * Contains details about the sensor source and what type of malicious activity was detected
		 * Required
		 */
		description: string;

		/**
		 * The sensor ID. This is a permanent and unique ID for each sensor
		 * Required
		 */
		id: number;
	}
	export interface BlocklistSensorFormProperties {

		/**
		 * The primary blocklist category this sensor belongs to
		 * Required
		 */
		blocklist: FormControl<string | null | undefined>,

		/**
		 * Contains details about the sensor source and what type of malicious activity was detected
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The sensor ID. This is a permanent and unique ID for each sensor
		 * Required
		 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateBlocklistSensorFormGroup() {
		return new FormGroup<BlocklistSensorFormProperties>({
			blocklist: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BrowserBotResponse {

		/**
		 * The complete raw, decompressed and decoded page content. Usually will be either HTML, JSON or XML
		 * Required
		 */
		content: string;

		/**
		 * Array containing all the elements matching the supplied selector. <br>Each element object will contain the text content, HTML content and all current element attributes
		 * Required
		 */
		elements: Array<string>;

		/**
		 * Contains the error message if an error has occurred ('is-error' will be true)
		 * Required
		 */
		'error-message': string;

		/**
		 * If you executed any JavaScript this array holds the results as objects
		 * Required
		 */
		'exec-results': Array<string>;

		/**
		 * The redirected URL if the URL responded with an HTTP redirect
		 * Required
		 */
		'http-redirect-url': string;

		/**
		 * The HTTP status code the URL returned
		 * Required
		 */
		'http-status-code': number;

		/**
		 * The HTTP status message the URL returned
		 * Required
		 */
		'http-status-message': string;

		/**
		 * True if an error has occurred loading the page. Check the 'error-message' field for details
		 * Required
		 */
		'is-error': boolean;

		/**
		 * True if the HTTP status is OK (200)
		 * Required
		 */
		'is-http-ok': boolean;

		/**
		 * True if the URL responded with an HTTP redirect
		 * Required
		 */
		'is-http-redirect': boolean;

		/**
		 * True if the page is secured using TLS/SSL
		 * Required
		 */
		'is-secure': boolean;

		/**
		 * True if a timeout occurred while loading the page. You can set the timeout with the request parameter 'timeout'
		 * Required
		 */
		'is-timeout': boolean;

		/**
		 * The ISO 2-letter language code of the page. Extracted from either the HTML document or via HTTP headers
		 * Required
		 */
		'language-code': string;

		/**
		 * The number of seconds taken to load the page (from initial request until DOM ready)
		 * Required
		 */
		'load-time': number;

		/**
		 * The document MIME type
		 * Required
		 */
		'mime-type': string;

		/**
		 * Map containing all the HTTP response headers the URL responded with
		 * Required
		 */
		'response-headers': {[id: string]: string };

		/**
		 * Map containing details of the TLS/SSL setup
		 * Required
		 */
		'security-details': {[id: string]: string };

		/**
		 * The HTTP servers IP address
		 * Required
		 */
		'server-ip': string;

		/**
		 * The document title
		 * Required
		 */
		title: string;

		/**
		 * The page URL
		 * Required
		 */
		url: string;
	}
	export interface BrowserBotResponseFormProperties {

		/**
		 * The complete raw, decompressed and decoded page content. Usually will be either HTML, JSON or XML
		 * Required
		 */
		content: FormControl<string | null | undefined>,

		/**
		 * Contains the error message if an error has occurred ('is-error' will be true)
		 * Required
		 */
		'error-message': FormControl<string | null | undefined>,

		/**
		 * The redirected URL if the URL responded with an HTTP redirect
		 * Required
		 */
		'http-redirect-url': FormControl<string | null | undefined>,

		/**
		 * The HTTP status code the URL returned
		 * Required
		 */
		'http-status-code': FormControl<number | null | undefined>,

		/**
		 * The HTTP status message the URL returned
		 * Required
		 */
		'http-status-message': FormControl<string | null | undefined>,

		/**
		 * True if an error has occurred loading the page. Check the 'error-message' field for details
		 * Required
		 */
		'is-error': FormControl<boolean | null | undefined>,

		/**
		 * True if the HTTP status is OK (200)
		 * Required
		 */
		'is-http-ok': FormControl<boolean | null | undefined>,

		/**
		 * True if the URL responded with an HTTP redirect
		 * Required
		 */
		'is-http-redirect': FormControl<boolean | null | undefined>,

		/**
		 * True if the page is secured using TLS/SSL
		 * Required
		 */
		'is-secure': FormControl<boolean | null | undefined>,

		/**
		 * True if a timeout occurred while loading the page. You can set the timeout with the request parameter 'timeout'
		 * Required
		 */
		'is-timeout': FormControl<boolean | null | undefined>,

		/**
		 * The ISO 2-letter language code of the page. Extracted from either the HTML document or via HTTP headers
		 * Required
		 */
		'language-code': FormControl<string | null | undefined>,

		/**
		 * The number of seconds taken to load the page (from initial request until DOM ready)
		 * Required
		 */
		'load-time': FormControl<number | null | undefined>,

		/**
		 * The document MIME type
		 * Required
		 */
		'mime-type': FormControl<string | null | undefined>,

		/**
		 * Map containing all the HTTP response headers the URL responded with
		 * Required
		 */
		'response-headers': FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Map containing details of the TLS/SSL setup
		 * Required
		 */
		'security-details': FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The HTTP servers IP address
		 * Required
		 */
		'server-ip': FormControl<string | null | undefined>,

		/**
		 * The document title
		 * Required
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * The page URL
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateBrowserBotResponseFormGroup() {
		return new FormGroup<BrowserBotResponseFormProperties>({
			content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'error-message': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'http-redirect-url': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'http-status-code': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'http-status-message': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'is-error': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-http-ok': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-http-redirect': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-secure': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-timeout': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'language-code': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'load-time': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'mime-type': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'response-headers': new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			'security-details': new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			'server-ip': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConvertResponse {

		/**
		 * The type of the value being converted from
		 * Required
		 */
		'from-type': string;

		/**
		 * The value being converted from
		 * Required
		 */
		'from-value': string;

		/**
		 * The result of the conversion in string format
		 * Required
		 */
		result: string;

		/**
		 * The result of the conversion as a floating-point number
		 * Required
		 */
		'result-float': number;

		/**
		 * The type being converted to
		 * Required
		 */
		'to-type': string;

		/**
		 * True if the conversion was successful and produced a valid result
		 * Required
		 */
		valid: boolean;
	}
	export interface ConvertResponseFormProperties {

		/**
		 * The type of the value being converted from
		 * Required
		 */
		'from-type': FormControl<string | null | undefined>,

		/**
		 * The value being converted from
		 * Required
		 */
		'from-value': FormControl<string | null | undefined>,

		/**
		 * The result of the conversion in string format
		 * Required
		 */
		result: FormControl<string | null | undefined>,

		/**
		 * The result of the conversion as a floating-point number
		 * Required
		 */
		'result-float': FormControl<number | null | undefined>,

		/**
		 * The type being converted to
		 * Required
		 */
		'to-type': FormControl<string | null | undefined>,

		/**
		 * True if the conversion was successful and produced a valid result
		 * Required
		 */
		valid: FormControl<boolean | null | undefined>,
	}
	export function CreateConvertResponseFormGroup() {
		return new FormGroup<ConvertResponseFormProperties>({
			'from-type': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'from-value': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			result: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'result-float': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'to-type': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			valid: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DomainLookupResponse {

		/**
		 * The number of days since the domain was registered. A domain age of under 90 days is generally considered to be potentially risky. A value of 0 indicates no registration date was found for this domain
		 * Required
		 */
		age: number;

		/**
		 * An array of strings indicating which blocklist categories this domain is listed on. Current categories are: phishing, malware, spam, anonymizer, nefarious
		 * Required
		 */
		blocklists: Array<string>;

		/**
		 * The primary domain of the DNS provider for this domain
		 * Required
		 */
		'dns-provider': string;

		/**
		 * The primary domain name excluding any subdomains. This is also referred to as the second-level domain (SLD)
		 * Required
		 */
		domain: string;

		/**
		 * The fully qualified domain name (FQDN)
		 * Required
		 */
		fqdn: string;

		/**
		 * This domain is hosting adult content such as porn, webcams, escorts, etc
		 * Required
		 */
		'is-adult': boolean;

		/**
		 * Is this domain under a government or military TLD
		 * Required
		 */
		'is-gov': boolean;

		/**
		 * Consider this domain malicious as it is currently listed on at least 1 blocklist
		 * Required
		 */
		'is-malicious': boolean;

		/**
		 * Is this domain under an OpenNIC TLD
		 * Required
		 */
		'is-opennic': boolean;

		/**
		 * True if this domain is unseen and is currently being processed in the background. This field only matters when the 'live' lookup setting has been explicitly disabled and indicates that not all domain data my be present yet
		 * Required
		 */
		'is-pending': boolean;

		/**
		 * Is the FQDN a subdomain of the primary domain
		 * Required
		 */
		'is-subdomain': boolean;

		/**
		 * The primary domain of the email provider for this domain. An empty value indicates the domain has no valid MX records
		 * Required
		 */
		'mail-provider': string;

		/**
		 * The domains estimated global traffic rank with the highest rank being 1. A value of 0 indicates the domain is currently ranked outside of the top 1M of domains
		 * Required
		 */
		rank: number;

		/**
		 * The ISO date this domain was registered or first seen on the internet. An empty value indicates we could not reliably determine the date
		 * Required
		 */
		'registered-date': string;

		/**
		 * The IANA registrar ID (0 if no registrar ID was found)
		 * Required
		 */
		'registrar-id': number;

		/**
		 * The name of the domain registrar owning this domain
		 * Required
		 */
		'registrar-name': string;

		/**
		 * An array of objects containing details on which specific blocklist sensors have detected this domain
		 * Required
		 */
		sensors: Array<BlocklistSensor>;

		/**
		 * The top-level domain (TLD)
		 * Required
		 */
		tld: string;

		/**
		 * For a country code top-level domain (ccTLD) this will contain the associated ISO 2-letter country code
		 * Required
		 */
		'tld-cc': string;

		/**
		 * True if a valid domain was found. For a domain to be considered valid it must be registered and have valid DNS NS records
		 * Required
		 */
		valid: boolean;
	}
	export interface DomainLookupResponseFormProperties {

		/**
		 * The number of days since the domain was registered. A domain age of under 90 days is generally considered to be potentially risky. A value of 0 indicates no registration date was found for this domain
		 * Required
		 */
		age: FormControl<number | null | undefined>,

		/**
		 * The primary domain of the DNS provider for this domain
		 * Required
		 */
		'dns-provider': FormControl<string | null | undefined>,

		/**
		 * The primary domain name excluding any subdomains. This is also referred to as the second-level domain (SLD)
		 * Required
		 */
		domain: FormControl<string | null | undefined>,

		/**
		 * The fully qualified domain name (FQDN)
		 * Required
		 */
		fqdn: FormControl<string | null | undefined>,

		/**
		 * This domain is hosting adult content such as porn, webcams, escorts, etc
		 * Required
		 */
		'is-adult': FormControl<boolean | null | undefined>,

		/**
		 * Is this domain under a government or military TLD
		 * Required
		 */
		'is-gov': FormControl<boolean | null | undefined>,

		/**
		 * Consider this domain malicious as it is currently listed on at least 1 blocklist
		 * Required
		 */
		'is-malicious': FormControl<boolean | null | undefined>,

		/**
		 * Is this domain under an OpenNIC TLD
		 * Required
		 */
		'is-opennic': FormControl<boolean | null | undefined>,

		/**
		 * True if this domain is unseen and is currently being processed in the background. This field only matters when the 'live' lookup setting has been explicitly disabled and indicates that not all domain data my be present yet
		 * Required
		 */
		'is-pending': FormControl<boolean | null | undefined>,

		/**
		 * Is the FQDN a subdomain of the primary domain
		 * Required
		 */
		'is-subdomain': FormControl<boolean | null | undefined>,

		/**
		 * The primary domain of the email provider for this domain. An empty value indicates the domain has no valid MX records
		 * Required
		 */
		'mail-provider': FormControl<string | null | undefined>,

		/**
		 * The domains estimated global traffic rank with the highest rank being 1. A value of 0 indicates the domain is currently ranked outside of the top 1M of domains
		 * Required
		 */
		rank: FormControl<number | null | undefined>,

		/**
		 * The ISO date this domain was registered or first seen on the internet. An empty value indicates we could not reliably determine the date
		 * Required
		 */
		'registered-date': FormControl<string | null | undefined>,

		/**
		 * The IANA registrar ID (0 if no registrar ID was found)
		 * Required
		 */
		'registrar-id': FormControl<number | null | undefined>,

		/**
		 * The name of the domain registrar owning this domain
		 * Required
		 */
		'registrar-name': FormControl<string | null | undefined>,

		/**
		 * The top-level domain (TLD)
		 * Required
		 */
		tld: FormControl<string | null | undefined>,

		/**
		 * For a country code top-level domain (ccTLD) this will contain the associated ISO 2-letter country code
		 * Required
		 */
		'tld-cc': FormControl<string | null | undefined>,

		/**
		 * True if a valid domain was found. For a domain to be considered valid it must be registered and have valid DNS NS records
		 * Required
		 */
		valid: FormControl<boolean | null | undefined>,
	}
	export function CreateDomainLookupResponseFormGroup() {
		return new FormGroup<DomainLookupResponseFormProperties>({
			age: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'dns-provider': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fqdn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'is-adult': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-gov': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-malicious': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-opennic': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-pending': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-subdomain': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'mail-provider': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rank: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'registered-date': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'registrar-id': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'registrar-name': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tld: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'tld-cc': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			valid: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EmailValidateResponse {

		/**
		 * The email domain
		 * Required
		 */
		domain: string;

		/**
		 * True if this address has a domain error (e.g. no valid mail server records)
		 * Required
		 */
		'domain-error': boolean;

		/**
		 * The email address. If you have used the fix-typos option then this will be the fixed address
		 * Required
		 */
		email: string;

		/**
		 * True if this address is a disposable, temporary or darknet related email address
		 * Required
		 */
		'is-disposable': boolean;

		/**
		 * True if this address is a free-mail address
		 * Required
		 */
		'is-freemail': boolean;

		/**
		 * True if this address belongs to a person. False if this is a role based address, e.g. admin@, help@, office@, etc.
		 * Required
		 */
		'is-personal': boolean;

		/**
		 * The email service provider domain
		 * Required
		 */
		provider: string;

		/**
		 * True if this address has a syntax error
		 * Required
		 */
		'syntax-error': boolean;

		/**
		 * True if typos have been fixed
		 * Required
		 */
		'typos-fixed': boolean;

		/**
		 * Is this a valid email
		 * Required
		 */
		valid: boolean;
	}
	export interface EmailValidateResponseFormProperties {

		/**
		 * The email domain
		 * Required
		 */
		domain: FormControl<string | null | undefined>,

		/**
		 * True if this address has a domain error (e.g. no valid mail server records)
		 * Required
		 */
		'domain-error': FormControl<boolean | null | undefined>,

		/**
		 * The email address. If you have used the fix-typos option then this will be the fixed address
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * True if this address is a disposable, temporary or darknet related email address
		 * Required
		 */
		'is-disposable': FormControl<boolean | null | undefined>,

		/**
		 * True if this address is a free-mail address
		 * Required
		 */
		'is-freemail': FormControl<boolean | null | undefined>,

		/**
		 * True if this address belongs to a person. False if this is a role based address, e.g. admin@, help@, office@, etc.
		 * Required
		 */
		'is-personal': FormControl<boolean | null | undefined>,

		/**
		 * The email service provider domain
		 * Required
		 */
		provider: FormControl<string | null | undefined>,

		/**
		 * True if this address has a syntax error
		 * Required
		 */
		'syntax-error': FormControl<boolean | null | undefined>,

		/**
		 * True if typos have been fixed
		 * Required
		 */
		'typos-fixed': FormControl<boolean | null | undefined>,

		/**
		 * Is this a valid email
		 * Required
		 */
		valid: FormControl<boolean | null | undefined>,
	}
	export function CreateEmailValidateResponseFormGroup() {
		return new FormGroup<EmailValidateResponseFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'domain-error': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'is-disposable': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-freemail': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-personal': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			provider: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'syntax-error': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'typos-fixed': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			valid: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EmailVerifyResponse {

		/**
		 * The email domain
		 * Required
		 */
		domain: string;

		/**
		 * True if this address has a domain error (e.g. no valid mail server records)
		 * Required
		 */
		'domain-error': boolean;

		/**
		 * The email address. If you have used the fix-typos option then this will be the fixed address
		 * Required
		 */
		email: string;

		/**
		 * True if this email domain has a catch-all policy (it will accept mail for any username)
		 * Required
		 */
		'is-catch-all': boolean;

		/**
		 * True if the mail server responded with a temporary failure (either a 4xx response code or unresponsive server). You can retry this address later, we recommend waiting at least 15 minutes before retrying
		 * Required
		 */
		'is-deferred': boolean;

		/**
		 * True if this address is a disposable, temporary or darknet related email address
		 * Required
		 */
		'is-disposable': boolean;

		/**
		 * True if this address is a free-mail address
		 * Required
		 */
		'is-freemail': boolean;

		/**
		 * True if this address is for a person. False if this is a role based address, e.g. admin@, help@, office@, etc.
		 * Required
		 */
		'is-personal': boolean;

		/**
		 * The email service provider domain
		 * Required
		 */
		provider: string;

		/**
		 * The raw SMTP response message received during verification
		 * Required
		 */
		'smtp-response': string;

		/**
		 * The SMTP verification status for the address: <br> <ul> <li>ok - SMTP verification was successful, this is a real address that can receive mail</li> <li>invalid - this is not a valid email address (has either a domain or syntax error)</li> <li>absent - this address is not registered with the email service provider</li> <li>unresponsive - the mail server(s) for this address timed-out or refused to open an SMTP connection</li> <li>unknown - sorry, we could not reliably determine the real status of this address (this address may or may not exist)</li> </ul>
		 * Required
		 */
		'smtp-status': string;

		/**
		 * True if this address has a syntax error
		 * Required
		 */
		'syntax-error': boolean;

		/**
		 * True if typos have been fixed
		 * Required
		 */
		'typos-fixed': boolean;

		/**
		 * Is this a valid email address (syntax and domain is valid)
		 * Required
		 */
		valid: boolean;

		/**
		 * True if this address has passed SMTP verification. Check the smtp-status and smtp-response fields for specific verification details
		 * Required
		 */
		verified: boolean;
	}
	export interface EmailVerifyResponseFormProperties {

		/**
		 * The email domain
		 * Required
		 */
		domain: FormControl<string | null | undefined>,

		/**
		 * True if this address has a domain error (e.g. no valid mail server records)
		 * Required
		 */
		'domain-error': FormControl<boolean | null | undefined>,

		/**
		 * The email address. If you have used the fix-typos option then this will be the fixed address
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * True if this email domain has a catch-all policy (it will accept mail for any username)
		 * Required
		 */
		'is-catch-all': FormControl<boolean | null | undefined>,

		/**
		 * True if the mail server responded with a temporary failure (either a 4xx response code or unresponsive server). You can retry this address later, we recommend waiting at least 15 minutes before retrying
		 * Required
		 */
		'is-deferred': FormControl<boolean | null | undefined>,

		/**
		 * True if this address is a disposable, temporary or darknet related email address
		 * Required
		 */
		'is-disposable': FormControl<boolean | null | undefined>,

		/**
		 * True if this address is a free-mail address
		 * Required
		 */
		'is-freemail': FormControl<boolean | null | undefined>,

		/**
		 * True if this address is for a person. False if this is a role based address, e.g. admin@, help@, office@, etc.
		 * Required
		 */
		'is-personal': FormControl<boolean | null | undefined>,

		/**
		 * The email service provider domain
		 * Required
		 */
		provider: FormControl<string | null | undefined>,

		/**
		 * The raw SMTP response message received during verification
		 * Required
		 */
		'smtp-response': FormControl<string | null | undefined>,

		/**
		 * The SMTP verification status for the address: <br> <ul> <li>ok - SMTP verification was successful, this is a real address that can receive mail</li> <li>invalid - this is not a valid email address (has either a domain or syntax error)</li> <li>absent - this address is not registered with the email service provider</li> <li>unresponsive - the mail server(s) for this address timed-out or refused to open an SMTP connection</li> <li>unknown - sorry, we could not reliably determine the real status of this address (this address may or may not exist)</li> </ul>
		 * Required
		 */
		'smtp-status': FormControl<string | null | undefined>,

		/**
		 * True if this address has a syntax error
		 * Required
		 */
		'syntax-error': FormControl<boolean | null | undefined>,

		/**
		 * True if typos have been fixed
		 * Required
		 */
		'typos-fixed': FormControl<boolean | null | undefined>,

		/**
		 * Is this a valid email address (syntax and domain is valid)
		 * Required
		 */
		valid: FormControl<boolean | null | undefined>,

		/**
		 * True if this address has passed SMTP verification. Check the smtp-status and smtp-response fields for specific verification details
		 * Required
		 */
		verified: FormControl<boolean | null | undefined>,
	}
	export function CreateEmailVerifyResponseFormGroup() {
		return new FormGroup<EmailVerifyResponseFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'domain-error': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'is-catch-all': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-deferred': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-disposable': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-freemail': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-personal': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			provider: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'smtp-response': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'smtp-status': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'syntax-error': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'typos-fixed': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			valid: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			verified: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GeocodeAddressResponse {

		/**
		 * The number of possible matching locations found
		 * Required
		 */
		found: number;

		/**
		 * Array of matching location objects
		 * Required
		 */
		locations: Array<Location>;
	}
	export interface GeocodeAddressResponseFormProperties {

		/**
		 * The number of possible matching locations found
		 * Required
		 */
		found: FormControl<number | null | undefined>,
	}
	export function CreateGeocodeAddressResponseFormGroup() {
		return new FormGroup<GeocodeAddressResponseFormProperties>({
			found: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Location {

		/**
		 * The complete address using comma-separated values
		 * Required
		 */
		address: string;

		/**
		 * The components which make up the address such as road, city, state, etc
		 * Required
		 */
		'address-components': {[id: string]: string };

		/**
		 * The city of the location
		 * Required
		 */
		city: string;

		/**
		 * The country of the location
		 * Required
		 */
		country: string;

		/**
		 * The ISO 2-letter country code of the location
		 * Required
		 */
		'country-code': string;

		/**
		 * The ISO 3-letter country code of the location
		 * Required
		 */
		'country-code3': string;

		/**
		 * ISO 4217 currency code associated with the country
		 * Required
		 */
		'currency-code': string;

		/**
		 * The location latitude
		 * Required
		 */
		latitude: number;

		/**
		 * Array of strings containing any location tags associated with the address. Tags are additional pieces of metadata about a specific location, there are thousands of different tags. Some examples of tags: shop, office, cafe, bank, pub
		 * Required
		 */
		'location-tags': Array<string>;

		/**
		 * The detected location type ordered roughly from most to least precise, possible values are: <br> <ul> <li>address - indicates a precise street address</li> <li>street - accurate to the street level but may not point to the exact location of the house/building number</li> <li>city - accurate to the city level, this includes villages, towns, suburbs, etc</li> <li>postal-code - indicates a postal code area (no house or street information present)</li> <li>railway - location is part of a rail network such as a station or railway track</li> <li>natural - indicates a natural feature, for example a mountain peak or a waterway</li> <li>island - location is an island or archipelago</li> <li>administrative - indicates an administrative boundary such as a country, state or province</li> </ul>
		 * Required
		 */
		'location-type': string;

		/**
		 * The location longitude
		 * Required
		 */
		longitude: number;

		/**
		 * The formatted address using local standards suitable for printing on an envelope
		 * Required
		 */
		'postal-address': string;

		/**
		 * The postal code for the location
		 * Required
		 */
		'postal-code': string;

		/**
		 * The ISO 3166-2 region code for the location
		 * Required
		 */
		'region-code': string;

		/**
		 * The state of the location
		 * Required
		 */
		state: string;

		/**
		 * Map containing timezone details
		 * Required
		 */
		timezone: Timezone;
	}
	export interface LocationFormProperties {

		/**
		 * The complete address using comma-separated values
		 * Required
		 */
		address: FormControl<string | null | undefined>,

		/**
		 * The components which make up the address such as road, city, state, etc
		 * Required
		 */
		'address-components': FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The city of the location
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * The country of the location
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * The ISO 2-letter country code of the location
		 * Required
		 */
		'country-code': FormControl<string | null | undefined>,

		/**
		 * The ISO 3-letter country code of the location
		 * Required
		 */
		'country-code3': FormControl<string | null | undefined>,

		/**
		 * ISO 4217 currency code associated with the country
		 * Required
		 */
		'currency-code': FormControl<string | null | undefined>,

		/**
		 * The location latitude
		 * Required
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * The detected location type ordered roughly from most to least precise, possible values are: <br> <ul> <li>address - indicates a precise street address</li> <li>street - accurate to the street level but may not point to the exact location of the house/building number</li> <li>city - accurate to the city level, this includes villages, towns, suburbs, etc</li> <li>postal-code - indicates a postal code area (no house or street information present)</li> <li>railway - location is part of a rail network such as a station or railway track</li> <li>natural - indicates a natural feature, for example a mountain peak or a waterway</li> <li>island - location is an island or archipelago</li> <li>administrative - indicates an administrative boundary such as a country, state or province</li> </ul>
		 * Required
		 */
		'location-type': FormControl<string | null | undefined>,

		/**
		 * The location longitude
		 * Required
		 */
		longitude: FormControl<number | null | undefined>,

		/**
		 * The formatted address using local standards suitable for printing on an envelope
		 * Required
		 */
		'postal-address': FormControl<string | null | undefined>,

		/**
		 * The postal code for the location
		 * Required
		 */
		'postal-code': FormControl<string | null | undefined>,

		/**
		 * The ISO 3166-2 region code for the location
		 * Required
		 */
		'region-code': FormControl<string | null | undefined>,

		/**
		 * The state of the location
		 * Required
		 */
		state: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'address-components': new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'country-code': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'country-code3': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'currency-code': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'location-type': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'postal-address': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'postal-code': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'region-code': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Map containing timezone details */
	export interface Timezone {

		/**
		 * The time zone abbreviation
		 * Required
		 */
		abbr: string;

		/**
		 * The current date at the time zone (ISO 8601 format 'YYYY-MM-DD')
		 * Required
		 */
		date: string;

		/**
		 * The time zone ID as per the IANA time zone database (tzdata)
		 * Required
		 */
		id: string;

		/**
		 * The full time zone name
		 * Required
		 */
		name: string;

		/**
		 * The UTC offset for the time zone (ISO 8601 format '±hh:mm')
		 * Required
		 */
		offset: string;

		/**
		 * The current time at the time zone (ISO 8601 format 'hh:mm:ss.sss')
		 * Required
		 */
		time: string;
	}

	/** Map containing timezone details */
	export interface TimezoneFormProperties {

		/**
		 * The time zone abbreviation
		 * Required
		 */
		abbr: FormControl<string | null | undefined>,

		/**
		 * The current date at the time zone (ISO 8601 format 'YYYY-MM-DD')
		 * Required
		 */
		date: FormControl<string | null | undefined>,

		/**
		 * The time zone ID as per the IANA time zone database (tzdata)
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The full time zone name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The UTC offset for the time zone (ISO 8601 format '±hh:mm')
		 * Required
		 */
		offset: FormControl<string | null | undefined>,

		/**
		 * The current time at the time zone (ISO 8601 format 'hh:mm:ss.sss')
		 * Required
		 */
		time: FormControl<string | null | undefined>,
	}
	export function CreateTimezoneFormGroup() {
		return new FormGroup<TimezoneFormProperties>({
			abbr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GeocodeReverseResponse {

		/**
		 * The complete address using comma-separated values
		 * Required
		 */
		address: string;

		/**
		 * The components which make up the address such as road, city, state, etc
		 * Required
		 */
		'address-components': {[id: string]: string };

		/**
		 * The city of the location
		 * Required
		 */
		city: string;

		/**
		 * The country of the location
		 * Required
		 */
		country: string;

		/**
		 * The ISO 2-letter country code of the location
		 * Required
		 */
		'country-code': string;

		/**
		 * The ISO 3-letter country code of the location
		 * Required
		 */
		'country-code3': string;

		/**
		 * ISO 4217 currency code associated with the country
		 * Required
		 */
		'currency-code': string;

		/**
		 * True if these coordinates map to a real location
		 * Required
		 */
		found: boolean;

		/**
		 * The location latitude
		 * Required
		 */
		latitude: number;

		/**
		 * Array of strings containing any location tags associated with the address. Tags are additional pieces of metadata about a specific location, there are thousands of different tags. Some examples of tags: shop, office, cafe, bank, pub
		 * Required
		 */
		'location-tags': Array<string>;

		/**
		 * The detected location type ordered roughly from most to least precise, possible values are: <br> <ul> <li>address - indicates a precise street address</li> <li>street - accurate to the street level but may not point to the exact location of the house/building number</li> <li>city - accurate to the city level, this includes villages, towns, suburbs, etc</li> <li>postal-code - indicates a postal code area (no house or street information present)</li> <li>railway - location is part of a rail network such as a station or railway track</li> <li>natural - indicates a natural feature, for example a mountain peak or a waterway</li> <li>island - location is an island or archipelago</li> <li>administrative - indicates an administrative boundary such as a country, state or province</li> </ul>
		 * Required
		 */
		'location-type': string;

		/**
		 * The location longitude
		 * Required
		 */
		longitude: number;

		/**
		 * The formatted address using local standards suitable for printing on an envelope
		 * Required
		 */
		'postal-address': string;

		/**
		 * The postal code for the location
		 * Required
		 */
		'postal-code': string;

		/**
		 * The ISO 3166-2 region code for the location
		 * Required
		 */
		'region-code': string;

		/**
		 * The state of the location
		 * Required
		 */
		state: string;

		/**
		 * Map containing timezone details for the location
		 * Required
		 */
		timezone: {[id: string]: Timezone };
	}
	export interface GeocodeReverseResponseFormProperties {

		/**
		 * The complete address using comma-separated values
		 * Required
		 */
		address: FormControl<string | null | undefined>,

		/**
		 * The components which make up the address such as road, city, state, etc
		 * Required
		 */
		'address-components': FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The city of the location
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * The country of the location
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * The ISO 2-letter country code of the location
		 * Required
		 */
		'country-code': FormControl<string | null | undefined>,

		/**
		 * The ISO 3-letter country code of the location
		 * Required
		 */
		'country-code3': FormControl<string | null | undefined>,

		/**
		 * ISO 4217 currency code associated with the country
		 * Required
		 */
		'currency-code': FormControl<string | null | undefined>,

		/**
		 * True if these coordinates map to a real location
		 * Required
		 */
		found: FormControl<boolean | null | undefined>,

		/**
		 * The location latitude
		 * Required
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * The detected location type ordered roughly from most to least precise, possible values are: <br> <ul> <li>address - indicates a precise street address</li> <li>street - accurate to the street level but may not point to the exact location of the house/building number</li> <li>city - accurate to the city level, this includes villages, towns, suburbs, etc</li> <li>postal-code - indicates a postal code area (no house or street information present)</li> <li>railway - location is part of a rail network such as a station or railway track</li> <li>natural - indicates a natural feature, for example a mountain peak or a waterway</li> <li>island - location is an island or archipelago</li> <li>administrative - indicates an administrative boundary such as a country, state or province</li> </ul>
		 * Required
		 */
		'location-type': FormControl<string | null | undefined>,

		/**
		 * The location longitude
		 * Required
		 */
		longitude: FormControl<number | null | undefined>,

		/**
		 * The formatted address using local standards suitable for printing on an envelope
		 * Required
		 */
		'postal-address': FormControl<string | null | undefined>,

		/**
		 * The postal code for the location
		 * Required
		 */
		'postal-code': FormControl<string | null | undefined>,

		/**
		 * The ISO 3166-2 region code for the location
		 * Required
		 */
		'region-code': FormControl<string | null | undefined>,

		/**
		 * The state of the location
		 * Required
		 */
		state: FormControl<string | null | undefined>,

		/**
		 * Map containing timezone details for the location
		 * Required
		 */
		timezone: FormControl<{[id: string]: Timezone } | null | undefined>,
	}
	export function CreateGeocodeReverseResponseFormGroup() {
		return new FormGroup<GeocodeReverseResponseFormProperties>({
			address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'address-components': new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'country-code': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'country-code3': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'currency-code': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			found: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'location-type': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'postal-address': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'postal-code': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'region-code': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timezone: new FormControl<{[id: string]: Timezone } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HLRLookupResponse {

		/**
		 * The phone number country
		 * Required
		 */
		country: string;

		/**
		 * The number location as an ISO 2-letter country code
		 * Required
		 */
		'country-code': string;

		/**
		 * The number location as an ISO 3-letter country code
		 * Required
		 */
		'country-code3': string;

		/**
		 * ISO 4217 currency code associated with the country
		 * Required
		 */
		'currency-code': string;

		/**
		 * The currently used network/carrier name
		 * Required
		 */
		'current-network': string;

		/**
		 * The HLR lookup status, possible values are: <br> <ul> <li>ok - the HLR lookup was successful and the device is connected</li> <li>absent - the number was once registered but the device has been switched off or out of network range for some time</li> <li>unknown - the number is not known by the mobile network</li> <li>invalid - the number is not a valid mobile MSISDN number</li> <li>fixed-line - the number is a registered fixed-line not mobile</li> <li>voip - the number has been detected as a VOIP line</li> <li>failed - the HLR lookup has failed, we could not determine the real status of this number</li> </ul>
		 * Required
		 */
		'hlr-status': string;

		/**
		 * Was the HLR lookup successful. If true then this is a working and registered cell-phone or mobile device (SMS and phone calls will be delivered)
		 * Required
		 */
		'hlr-valid': boolean;

		/**
		 * The mobile IMSI number (International Mobile Subscriber Identity)
		 * Required
		 */
		imsi: string;

		/**
		 * The international calling code
		 * Required
		 */
		'international-calling-code': string;

		/**
		 * The number represented in full international format
		 * Required
		 */
		'international-number': string;

		/**
		 * True if this is a mobile number (only true with 100% certainty, if the number type is unknown this value will be false)
		 * Required
		 */
		'is-mobile': boolean;

		/**
		 * Has this number been ported to another network
		 * Required
		 */
		'is-ported': boolean;

		/**
		 * Is this number currently roaming from its origin country
		 * Required
		 */
		'is-roaming': boolean;

		/**
		 * The number represented in local dialing format
		 * Required
		 */
		'local-number': string;

		/**
		 * The number location. Could be a city, region or country depending on the type of number
		 * Required
		 */
		location: string;

		/**
		 * The mobile MCC number (Mobile Country Code)
		 * Required
		 */
		mcc: string;

		/**
		 * The mobile MNC number (Mobile Network Code)
		 * Required
		 */
		mnc: string;

		/**
		 * The mobile MSC number (Mobile Switching Center)
		 * Required
		 */
		msc: string;

		/**
		 * The mobile MSIN number (Mobile Subscription Identification Number)
		 * Required
		 */
		msin: string;

		/**
		 * The number type, possible values are: <br> <ul> <li>mobile</li> <li>fixed-line</li> <li>premium-rate</li> <li>toll-free</li> <li>voip</li> <li>unknown</li> </ul>
		 * Required
		 */
		'number-type': string;

		/**
		 * True if this a valid phone number
		 * Required
		 */
		'number-valid': boolean;

		/**
		 * The origin network/carrier name
		 * Required
		 */
		'origin-network': string;

		/**
		 * The ported to network/carrier name (only set if the number has been ported)
		 * Required
		 */
		'ported-network': string;

		/**
		 * If the number is currently roaming, the ISO 2-letter country code of the roaming in country
		 * Required
		 */
		'roaming-country-code': string;
	}
	export interface HLRLookupResponseFormProperties {

		/**
		 * The phone number country
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * The number location as an ISO 2-letter country code
		 * Required
		 */
		'country-code': FormControl<string | null | undefined>,

		/**
		 * The number location as an ISO 3-letter country code
		 * Required
		 */
		'country-code3': FormControl<string | null | undefined>,

		/**
		 * ISO 4217 currency code associated with the country
		 * Required
		 */
		'currency-code': FormControl<string | null | undefined>,

		/**
		 * The currently used network/carrier name
		 * Required
		 */
		'current-network': FormControl<string | null | undefined>,

		/**
		 * The HLR lookup status, possible values are: <br> <ul> <li>ok - the HLR lookup was successful and the device is connected</li> <li>absent - the number was once registered but the device has been switched off or out of network range for some time</li> <li>unknown - the number is not known by the mobile network</li> <li>invalid - the number is not a valid mobile MSISDN number</li> <li>fixed-line - the number is a registered fixed-line not mobile</li> <li>voip - the number has been detected as a VOIP line</li> <li>failed - the HLR lookup has failed, we could not determine the real status of this number</li> </ul>
		 * Required
		 */
		'hlr-status': FormControl<string | null | undefined>,

		/**
		 * Was the HLR lookup successful. If true then this is a working and registered cell-phone or mobile device (SMS and phone calls will be delivered)
		 * Required
		 */
		'hlr-valid': FormControl<boolean | null | undefined>,

		/**
		 * The mobile IMSI number (International Mobile Subscriber Identity)
		 * Required
		 */
		imsi: FormControl<string | null | undefined>,

		/**
		 * The international calling code
		 * Required
		 */
		'international-calling-code': FormControl<string | null | undefined>,

		/**
		 * The number represented in full international format
		 * Required
		 */
		'international-number': FormControl<string | null | undefined>,

		/**
		 * True if this is a mobile number (only true with 100% certainty, if the number type is unknown this value will be false)
		 * Required
		 */
		'is-mobile': FormControl<boolean | null | undefined>,

		/**
		 * Has this number been ported to another network
		 * Required
		 */
		'is-ported': FormControl<boolean | null | undefined>,

		/**
		 * Is this number currently roaming from its origin country
		 * Required
		 */
		'is-roaming': FormControl<boolean | null | undefined>,

		/**
		 * The number represented in local dialing format
		 * Required
		 */
		'local-number': FormControl<string | null | undefined>,

		/**
		 * The number location. Could be a city, region or country depending on the type of number
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/**
		 * The mobile MCC number (Mobile Country Code)
		 * Required
		 */
		mcc: FormControl<string | null | undefined>,

		/**
		 * The mobile MNC number (Mobile Network Code)
		 * Required
		 */
		mnc: FormControl<string | null | undefined>,

		/**
		 * The mobile MSC number (Mobile Switching Center)
		 * Required
		 */
		msc: FormControl<string | null | undefined>,

		/**
		 * The mobile MSIN number (Mobile Subscription Identification Number)
		 * Required
		 */
		msin: FormControl<string | null | undefined>,

		/**
		 * The number type, possible values are: <br> <ul> <li>mobile</li> <li>fixed-line</li> <li>premium-rate</li> <li>toll-free</li> <li>voip</li> <li>unknown</li> </ul>
		 * Required
		 */
		'number-type': FormControl<string | null | undefined>,

		/**
		 * True if this a valid phone number
		 * Required
		 */
		'number-valid': FormControl<boolean | null | undefined>,

		/**
		 * The origin network/carrier name
		 * Required
		 */
		'origin-network': FormControl<string | null | undefined>,

		/**
		 * The ported to network/carrier name (only set if the number has been ported)
		 * Required
		 */
		'ported-network': FormControl<string | null | undefined>,

		/**
		 * If the number is currently roaming, the ISO 2-letter country code of the roaming in country
		 * Required
		 */
		'roaming-country-code': FormControl<string | null | undefined>,
	}
	export function CreateHLRLookupResponseFormGroup() {
		return new FormGroup<HLRLookupResponseFormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'country-code': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'country-code3': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'currency-code': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'current-network': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'hlr-status': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'hlr-valid': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			imsi: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'international-calling-code': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'international-number': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'is-mobile': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-ported': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-roaming': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'local-number': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mcc: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mnc: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			msc: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			msin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'number-type': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'number-valid': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'origin-network': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'ported-network': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'roaming-country-code': new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HostReputationResponse {

		/**
		 * The IP address or host name
		 * Required
		 */
		host: string;

		/**
		 * Is this host blacklisted
		 * Required
		 */
		'is-listed': boolean;

		/**
		 * The number of DNSBLs the host is listed on
		 * Required
		 */
		'list-count': number;

		/**
		 * Array of objects for each DNSBL checked
		 * Required
		 */
		lists: Array<Blacklist>;
	}
	export interface HostReputationResponseFormProperties {

		/**
		 * The IP address or host name
		 * Required
		 */
		host: FormControl<string | null | undefined>,

		/**
		 * Is this host blacklisted
		 * Required
		 */
		'is-listed': FormControl<boolean | null | undefined>,

		/**
		 * The number of DNSBLs the host is listed on
		 * Required
		 */
		'list-count': FormControl<number | null | undefined>,
	}
	export function CreateHostReputationResponseFormGroup() {
		return new FormGroup<HostReputationResponseFormProperties>({
			host: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'is-listed': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'list-count': new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IPBlocklistResponse {

		/**
		 * An array of strings indicating which blocklist categories this IP is listed on
		 * Required
		 */
		blocklists: Array<string>;

		/**
		 * The CIDR address for this listing (only set if the IP is listed)
		 * Required
		 */
		cidr: string;

		/**
		 * The IP address
		 * Required
		 */
		ip: string;

		/**
		 * IP is hosting a malicious bot or is part of a botnet. This is a broad category which includes brute-force crackers
		 * Required
		 */
		'is-bot': boolean;

		/**
		 * IP has been flagged as a significant attack source by DShield (dshield.org)
		 * Required
		 */
		'is-dshield': boolean;

		/**
		 * IP is hosting an exploit finding bot or is running exploit scanning software
		 * Required
		 */
		'is-exploit-bot': boolean;

		/**
		 * IP is part of a hijacked netblock or a netblock controlled by a criminal organization
		 * Required
		 */
		'is-hijacked': boolean;

		/**
		 * Is this IP on a blocklist
		 * Required
		 */
		'is-listed': boolean;

		/**
		 * IP is involved in distributing or is running malware
		 * Required
		 */
		'is-malware': boolean;

		/**
		 * IP has been detected as an anonymous web proxy or anonymous HTTP proxy
		 * Required
		 */
		'is-proxy': boolean;

		/**
		 * IP address is hosting a spam bot, comment spamming or any other spamming type software
		 * Required
		 */
		'is-spam-bot': boolean;

		/**
		 * IP is running a hostile web spider / web crawler
		 * Required
		 */
		'is-spider': boolean;

		/**
		 * IP is involved in distributing or is running spyware
		 * Required
		 */
		'is-spyware': boolean;

		/**
		 * IP is a Tor node or running a Tor related service
		 * Required
		 */
		'is-tor': boolean;

		/**
		 * IP belongs to a public VPN provider (only set if the 'vpn-lookup' option is enabled)
		 * Required
		 */
		'is-vpn': boolean;

		/**
		 * The unix time when this IP was last seen on any blocklist. IPs are automatically removed after 7 days therefor this value will never be older than 7 days
		 * Required
		 */
		'last-seen': number;

		/**
		 * The number of blocklists the IP is listed on
		 * Required
		 */
		'list-count': number;

		/**
		 * An array of objects containing details on which specific sensors detected the IP
		 * Required
		 */
		sensors: Array<BlocklistSensor>;
	}
	export interface IPBlocklistResponseFormProperties {

		/**
		 * The CIDR address for this listing (only set if the IP is listed)
		 * Required
		 */
		cidr: FormControl<string | null | undefined>,

		/**
		 * The IP address
		 * Required
		 */
		ip: FormControl<string | null | undefined>,

		/**
		 * IP is hosting a malicious bot or is part of a botnet. This is a broad category which includes brute-force crackers
		 * Required
		 */
		'is-bot': FormControl<boolean | null | undefined>,

		/**
		 * IP has been flagged as a significant attack source by DShield (dshield.org)
		 * Required
		 */
		'is-dshield': FormControl<boolean | null | undefined>,

		/**
		 * IP is hosting an exploit finding bot or is running exploit scanning software
		 * Required
		 */
		'is-exploit-bot': FormControl<boolean | null | undefined>,

		/**
		 * IP is part of a hijacked netblock or a netblock controlled by a criminal organization
		 * Required
		 */
		'is-hijacked': FormControl<boolean | null | undefined>,

		/**
		 * Is this IP on a blocklist
		 * Required
		 */
		'is-listed': FormControl<boolean | null | undefined>,

		/**
		 * IP is involved in distributing or is running malware
		 * Required
		 */
		'is-malware': FormControl<boolean | null | undefined>,

		/**
		 * IP has been detected as an anonymous web proxy or anonymous HTTP proxy
		 * Required
		 */
		'is-proxy': FormControl<boolean | null | undefined>,

		/**
		 * IP address is hosting a spam bot, comment spamming or any other spamming type software
		 * Required
		 */
		'is-spam-bot': FormControl<boolean | null | undefined>,

		/**
		 * IP is running a hostile web spider / web crawler
		 * Required
		 */
		'is-spider': FormControl<boolean | null | undefined>,

		/**
		 * IP is involved in distributing or is running spyware
		 * Required
		 */
		'is-spyware': FormControl<boolean | null | undefined>,

		/**
		 * IP is a Tor node or running a Tor related service
		 * Required
		 */
		'is-tor': FormControl<boolean | null | undefined>,

		/**
		 * IP belongs to a public VPN provider (only set if the 'vpn-lookup' option is enabled)
		 * Required
		 */
		'is-vpn': FormControl<boolean | null | undefined>,

		/**
		 * The unix time when this IP was last seen on any blocklist. IPs are automatically removed after 7 days therefor this value will never be older than 7 days
		 * Required
		 */
		'last-seen': FormControl<number | null | undefined>,

		/**
		 * The number of blocklists the IP is listed on
		 * Required
		 */
		'list-count': FormControl<number | null | undefined>,
	}
	export function CreateIPBlocklistResponseFormGroup() {
		return new FormGroup<IPBlocklistResponseFormProperties>({
			cidr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'is-bot': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-dshield': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-exploit-bot': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-hijacked': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-listed': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-malware': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-proxy': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-spam-bot': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-spider': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-spyware': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-tor': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-vpn': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'last-seen': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'list-count': new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IPInfoResponse {

		/**
		 * Name of the city (if detectable)
		 * Required
		 */
		city: string;

		/**
		 * ISO 2-letter continent code
		 * Required
		 */
		'continent-code': string;

		/**
		 * Full country name
		 * Required
		 */
		country: string;

		/**
		 * ISO 2-letter country code
		 * Required
		 */
		'country-code': string;

		/**
		 * ISO 3-letter country code
		 * Required
		 */
		'country-code3': string;

		/**
		 * ISO 4217 currency code associated with the country
		 * Required
		 */
		'currency-code': string;

		/**
		 * The IPs host domain (only set if reverse-lookup has been used)
		 * Required
		 */
		'host-domain': string;

		/**
		 * The IPs full hostname (only set if reverse-lookup has been used)
		 * Required
		 */
		hostname: string;

		/**
		 * The IP address
		 * Required
		 */
		ip: string;

		/**
		 * True if this is a bogon IP address such as a private network, local network or reserved address
		 * Required
		 */
		'is-bogon': boolean;

		/**
		 * True if this is a <a href="https://en.wikipedia.org/wiki/IPv6#IPv4-mapped_IPv6_addresses">IPv4 mapped IPv6 address</a>
		 * Required
		 */
		'is-v4-mapped': boolean;

		/**
		 * True if this is a IPv6 address. False if IPv4
		 * Required
		 */
		'is-v6': boolean;

		/**
		 * Location latitude
		 * Required
		 */
		latitude: number;

		/**
		 * Location longitude
		 * Required
		 */
		longitude: number;

		/**
		 * Name of the region (if detectable)
		 * Required
		 */
		region: string;

		/**
		 * ISO 3166-2 region code (if detectable)
		 * Required
		 */
		'region-code': string;

		/**
		 * Map containing timezone details
		 * Required
		 */
		timezone: Timezone;

		/**
		 * True if this is a valid IPv4 or IPv6 address
		 * Required
		 */
		valid: boolean;
	}
	export interface IPInfoResponseFormProperties {

		/**
		 * Name of the city (if detectable)
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * ISO 2-letter continent code
		 * Required
		 */
		'continent-code': FormControl<string | null | undefined>,

		/**
		 * Full country name
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * ISO 2-letter country code
		 * Required
		 */
		'country-code': FormControl<string | null | undefined>,

		/**
		 * ISO 3-letter country code
		 * Required
		 */
		'country-code3': FormControl<string | null | undefined>,

		/**
		 * ISO 4217 currency code associated with the country
		 * Required
		 */
		'currency-code': FormControl<string | null | undefined>,

		/**
		 * The IPs host domain (only set if reverse-lookup has been used)
		 * Required
		 */
		'host-domain': FormControl<string | null | undefined>,

		/**
		 * The IPs full hostname (only set if reverse-lookup has been used)
		 * Required
		 */
		hostname: FormControl<string | null | undefined>,

		/**
		 * The IP address
		 * Required
		 */
		ip: FormControl<string | null | undefined>,

		/**
		 * True if this is a bogon IP address such as a private network, local network or reserved address
		 * Required
		 */
		'is-bogon': FormControl<boolean | null | undefined>,

		/**
		 * True if this is a <a href="https://en.wikipedia.org/wiki/IPv6#IPv4-mapped_IPv6_addresses">IPv4 mapped IPv6 address</a>
		 * Required
		 */
		'is-v4-mapped': FormControl<boolean | null | undefined>,

		/**
		 * True if this is a IPv6 address. False if IPv4
		 * Required
		 */
		'is-v6': FormControl<boolean | null | undefined>,

		/**
		 * Location latitude
		 * Required
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * Location longitude
		 * Required
		 */
		longitude: FormControl<number | null | undefined>,

		/**
		 * Name of the region (if detectable)
		 * Required
		 */
		region: FormControl<string | null | undefined>,

		/**
		 * ISO 3166-2 region code (if detectable)
		 * Required
		 */
		'region-code': FormControl<string | null | undefined>,

		/**
		 * True if this is a valid IPv4 or IPv6 address
		 * Required
		 */
		valid: FormControl<boolean | null | undefined>,
	}
	export function CreateIPInfoResponseFormGroup() {
		return new FormGroup<IPInfoResponseFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'continent-code': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'country-code': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'country-code3': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'currency-code': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'host-domain': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			hostname: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'is-bogon': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-v4-mapped': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-v6': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'region-code': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			valid: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IPProbeResponse {

		/**
		 * The age of the autonomous system (AS) in number of years since registration
		 * Required
		 */
		'as-age': number;

		/**
		 * The autonomous system (AS) CIDR range
		 * Required
		 */
		'as-cidr': string;

		/**
		 * The autonomous system (AS) ISO 2-letter country code
		 * Required
		 */
		'as-country-code': string;

		/**
		 * The autonomous system (AS) ISO 3-letter country code
		 * Required
		 */
		'as-country-code3': string;

		/**
		 * The autonomous system (AS) description / company name
		 * Required
		 */
		'as-description': string;

		/**
		 * Array of all the domains associated with the autonomous system (AS)
		 * Required
		 */
		'as-domains': Array<string>;

		/**
		 * The autonomous system (AS) number
		 * Required
		 */
		asn: string;

		/**
		 * Full city name (if detectable)
		 * Required
		 */
		city: string;

		/**
		 * ISO 2-letter continent code
		 * Required
		 */
		'continent-code': string;

		/**
		 * Full country name
		 * Required
		 */
		country: string;

		/**
		 * ISO 2-letter country code
		 * Required
		 */
		'country-code': string;

		/**
		 * ISO 3-letter country code
		 * Required
		 */
		'country-code3': string;

		/**
		 * ISO 4217 currency code associated with the country
		 * Required
		 */
		'currency-code': string;

		/**
		 * The IPs host domain
		 * Required
		 */
		'host-domain': string;

		/**
		 * The IPs full hostname (PTR)
		 * Required
		 */
		hostname: string;

		/**
		 * The IP address
		 * Required
		 */
		ip: string;

		/**
		 * True if this is a bogon IP address such as a private network, local network or reserved address
		 * Required
		 */
		'is-bogon': boolean;

		/**
		 * True if this IP belongs to a hosting company. Note that this can still be true even if the provider type is VPN/proxy, this occurs in the case that the IP is detected as both types
		 * Required
		 */
		'is-hosting': boolean;

		/**
		 * True if this IP belongs to an internet service provider. Note that this can still be true even if the provider type is VPN/proxy, this occurs in the case that the IP is detected as both types
		 * Required
		 */
		'is-isp': boolean;

		/**
		 * True if this IP ia a proxy
		 * Required
		 */
		'is-proxy': boolean;

		/**
		 * True if this is a <a href="https://en.wikipedia.org/wiki/IPv6#IPv4-mapped_IPv6_addresses">IPv4 mapped IPv6 address</a>
		 * Required
		 */
		'is-v4-mapped': boolean;

		/**
		 * True if this is a IPv6 address. False if IPv4
		 * Required
		 */
		'is-v6': boolean;

		/**
		 * True if this IP ia a VPN
		 * Required
		 */
		'is-vpn': boolean;

		/**
		 * A description of the provider (usually extracted from the providers website)
		 * Required
		 */
		'provider-description': string;

		/**
		 * The domain name of the provider
		 * Required
		 */
		'provider-domain': string;

		/**
		 * The detected provider type, possible values are: <br> <ul> <li>isp - IP belongs to an internet service provider. This includes both mobile, home and business internet providers</li> <li>hosting - IP belongs to a hosting company. This includes website hosting, cloud computing platforms and colocation facilities</li> <li>vpn - IP belongs to a VPN provider</li> <li>proxy - IP belongs to a proxy service. This includes HTTP/SOCKS proxies and browser based proxies</li> <li>university - IP belongs to a university/college/campus</li> <li>government - IP belongs to a government department. This includes military facilities</li> <li>commercial - IP belongs to a commercial entity such as a corporate headquarters or company office</li> <li>unknown - could not identify the provider type</li> </ul>
		 * Required
		 */
		'provider-type': string;

		/**
		 * The website URL for the provider
		 * Required
		 */
		'provider-website': string;

		/**
		 * Full region name (if detectable)
		 * Required
		 */
		region: string;

		/**
		 * ISO 3166-2 region code (if detectable)
		 * Required
		 */
		'region-code': string;

		/**
		 * True if this is a valid IPv4 or IPv6 address
		 * Required
		 */
		valid: boolean;

		/**
		 * The domain of the VPN provider (may be empty if the VPN domain is not detectable)
		 * Required
		 */
		'vpn-domain': string;
	}
	export interface IPProbeResponseFormProperties {

		/**
		 * The age of the autonomous system (AS) in number of years since registration
		 * Required
		 */
		'as-age': FormControl<number | null | undefined>,

		/**
		 * The autonomous system (AS) CIDR range
		 * Required
		 */
		'as-cidr': FormControl<string | null | undefined>,

		/**
		 * The autonomous system (AS) ISO 2-letter country code
		 * Required
		 */
		'as-country-code': FormControl<string | null | undefined>,

		/**
		 * The autonomous system (AS) ISO 3-letter country code
		 * Required
		 */
		'as-country-code3': FormControl<string | null | undefined>,

		/**
		 * The autonomous system (AS) description / company name
		 * Required
		 */
		'as-description': FormControl<string | null | undefined>,

		/**
		 * The autonomous system (AS) number
		 * Required
		 */
		asn: FormControl<string | null | undefined>,

		/**
		 * Full city name (if detectable)
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * ISO 2-letter continent code
		 * Required
		 */
		'continent-code': FormControl<string | null | undefined>,

		/**
		 * Full country name
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * ISO 2-letter country code
		 * Required
		 */
		'country-code': FormControl<string | null | undefined>,

		/**
		 * ISO 3-letter country code
		 * Required
		 */
		'country-code3': FormControl<string | null | undefined>,

		/**
		 * ISO 4217 currency code associated with the country
		 * Required
		 */
		'currency-code': FormControl<string | null | undefined>,

		/**
		 * The IPs host domain
		 * Required
		 */
		'host-domain': FormControl<string | null | undefined>,

		/**
		 * The IPs full hostname (PTR)
		 * Required
		 */
		hostname: FormControl<string | null | undefined>,

		/**
		 * The IP address
		 * Required
		 */
		ip: FormControl<string | null | undefined>,

		/**
		 * True if this is a bogon IP address such as a private network, local network or reserved address
		 * Required
		 */
		'is-bogon': FormControl<boolean | null | undefined>,

		/**
		 * True if this IP belongs to a hosting company. Note that this can still be true even if the provider type is VPN/proxy, this occurs in the case that the IP is detected as both types
		 * Required
		 */
		'is-hosting': FormControl<boolean | null | undefined>,

		/**
		 * True if this IP belongs to an internet service provider. Note that this can still be true even if the provider type is VPN/proxy, this occurs in the case that the IP is detected as both types
		 * Required
		 */
		'is-isp': FormControl<boolean | null | undefined>,

		/**
		 * True if this IP ia a proxy
		 * Required
		 */
		'is-proxy': FormControl<boolean | null | undefined>,

		/**
		 * True if this is a <a href="https://en.wikipedia.org/wiki/IPv6#IPv4-mapped_IPv6_addresses">IPv4 mapped IPv6 address</a>
		 * Required
		 */
		'is-v4-mapped': FormControl<boolean | null | undefined>,

		/**
		 * True if this is a IPv6 address. False if IPv4
		 * Required
		 */
		'is-v6': FormControl<boolean | null | undefined>,

		/**
		 * True if this IP ia a VPN
		 * Required
		 */
		'is-vpn': FormControl<boolean | null | undefined>,

		/**
		 * A description of the provider (usually extracted from the providers website)
		 * Required
		 */
		'provider-description': FormControl<string | null | undefined>,

		/**
		 * The domain name of the provider
		 * Required
		 */
		'provider-domain': FormControl<string | null | undefined>,

		/**
		 * The detected provider type, possible values are: <br> <ul> <li>isp - IP belongs to an internet service provider. This includes both mobile, home and business internet providers</li> <li>hosting - IP belongs to a hosting company. This includes website hosting, cloud computing platforms and colocation facilities</li> <li>vpn - IP belongs to a VPN provider</li> <li>proxy - IP belongs to a proxy service. This includes HTTP/SOCKS proxies and browser based proxies</li> <li>university - IP belongs to a university/college/campus</li> <li>government - IP belongs to a government department. This includes military facilities</li> <li>commercial - IP belongs to a commercial entity such as a corporate headquarters or company office</li> <li>unknown - could not identify the provider type</li> </ul>
		 * Required
		 */
		'provider-type': FormControl<string | null | undefined>,

		/**
		 * The website URL for the provider
		 * Required
		 */
		'provider-website': FormControl<string | null | undefined>,

		/**
		 * Full region name (if detectable)
		 * Required
		 */
		region: FormControl<string | null | undefined>,

		/**
		 * ISO 3166-2 region code (if detectable)
		 * Required
		 */
		'region-code': FormControl<string | null | undefined>,

		/**
		 * True if this is a valid IPv4 or IPv6 address
		 * Required
		 */
		valid: FormControl<boolean | null | undefined>,

		/**
		 * The domain of the VPN provider (may be empty if the VPN domain is not detectable)
		 * Required
		 */
		'vpn-domain': FormControl<string | null | undefined>,
	}
	export function CreateIPProbeResponseFormGroup() {
		return new FormGroup<IPProbeResponseFormProperties>({
			'as-age': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'as-cidr': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'as-country-code': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'as-country-code3': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'as-description': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			asn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'continent-code': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'country-code': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'country-code3': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'currency-code': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'host-domain': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			hostname: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'is-bogon': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-hosting': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-isp': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-proxy': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-v4-mapped': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-v6': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-vpn': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'provider-description': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'provider-domain': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'provider-type': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'provider-website': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'region-code': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			valid: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'vpn-domain': new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PhonePlaybackResponse {

		/**
		 * True if the call is being made now
		 * Required
		 */
		calling: boolean;

		/**
		 * True if this a valid phone number
		 * Required
		 */
		'number-valid': boolean;
	}
	export interface PhonePlaybackResponseFormProperties {

		/**
		 * True if the call is being made now
		 * Required
		 */
		calling: FormControl<boolean | null | undefined>,

		/**
		 * True if this a valid phone number
		 * Required
		 */
		'number-valid': FormControl<boolean | null | undefined>,
	}
	export function CreatePhonePlaybackResponseFormGroup() {
		return new FormGroup<PhonePlaybackResponseFormProperties>({
			calling: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'number-valid': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PhoneValidateResponse {

		/**
		 * The phone number country
		 * Required
		 */
		country: string;

		/**
		 * The phone number country as an ISO 2-letter country code
		 * Required
		 */
		'country-code': string;

		/**
		 * The phone number country as an ISO 3-letter country code
		 * Required
		 */
		'country-code3': string;

		/**
		 * ISO 4217 currency code associated with the country
		 * Required
		 */
		'currency-code': string;

		/**
		 * The international calling code
		 * Required
		 */
		'international-calling-code': string;

		/**
		 * The number represented in full international format (E.164)
		 * Required
		 */
		'international-number': string;

		/**
		 * True if this is a mobile number. If the number type is unknown this value will be false
		 * Required
		 */
		'is-mobile': boolean;

		/**
		 * The number represented in local dialing format
		 * Required
		 */
		'local-number': string;

		/**
		 * The phone number location. Could be the city, region or country depending on the type of number
		 * Required
		 */
		location: string;

		/**
		 * The network/carrier who owns the prefix (this only works for some countries, use HLR lookup for global network detection)
		 * Required
		 */
		'prefix-network': string;

		/**
		 * The number type based on the number prefix. <br>Possible values are: <br> <ul> <li>mobile</li> <li>fixed-line</li> <li>premium-rate</li> <li>toll-free</li> <li>voip</li> <li>unknown (use HLR lookup)</li> </ul>
		 * Required
		 */
		type: string;

		/**
		 * Is this a valid phone number
		 * Required
		 */
		valid: boolean;
	}
	export interface PhoneValidateResponseFormProperties {

		/**
		 * The phone number country
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * The phone number country as an ISO 2-letter country code
		 * Required
		 */
		'country-code': FormControl<string | null | undefined>,

		/**
		 * The phone number country as an ISO 3-letter country code
		 * Required
		 */
		'country-code3': FormControl<string | null | undefined>,

		/**
		 * ISO 4217 currency code associated with the country
		 * Required
		 */
		'currency-code': FormControl<string | null | undefined>,

		/**
		 * The international calling code
		 * Required
		 */
		'international-calling-code': FormControl<string | null | undefined>,

		/**
		 * The number represented in full international format (E.164)
		 * Required
		 */
		'international-number': FormControl<string | null | undefined>,

		/**
		 * True if this is a mobile number. If the number type is unknown this value will be false
		 * Required
		 */
		'is-mobile': FormControl<boolean | null | undefined>,

		/**
		 * The number represented in local dialing format
		 * Required
		 */
		'local-number': FormControl<string | null | undefined>,

		/**
		 * The phone number location. Could be the city, region or country depending on the type of number
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/**
		 * The network/carrier who owns the prefix (this only works for some countries, use HLR lookup for global network detection)
		 * Required
		 */
		'prefix-network': FormControl<string | null | undefined>,

		/**
		 * The number type based on the number prefix. <br>Possible values are: <br> <ul> <li>mobile</li> <li>fixed-line</li> <li>premium-rate</li> <li>toll-free</li> <li>voip</li> <li>unknown (use HLR lookup)</li> </ul>
		 * Required
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * Is this a valid phone number
		 * Required
		 */
		valid: FormControl<boolean | null | undefined>,
	}
	export function CreatePhoneValidateResponseFormGroup() {
		return new FormGroup<PhoneValidateResponseFormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'country-code': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'country-code3': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'currency-code': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'international-calling-code': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'international-number': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'is-mobile': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'local-number': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'prefix-network': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			valid: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PhoneVerifyResponse {

		/**
		 * True if the call is being made now
		 * Required
		 */
		calling: boolean;

		/**
		 * True if this a valid phone number
		 * Required
		 */
		'number-valid': boolean;

		/**
		 * The security code generated, you can save this code to perform your own verification or you can use the <a href="https://www.neutrinoapi.com/api/verify-security-code/">Verify Security Code API</a>
		 * Required
		 */
		'security-code': string;
	}
	export interface PhoneVerifyResponseFormProperties {

		/**
		 * True if the call is being made now
		 * Required
		 */
		calling: FormControl<boolean | null | undefined>,

		/**
		 * True if this a valid phone number
		 * Required
		 */
		'number-valid': FormControl<boolean | null | undefined>,

		/**
		 * The security code generated, you can save this code to perform your own verification or you can use the <a href="https://www.neutrinoapi.com/api/verify-security-code/">Verify Security Code API</a>
		 * Required
		 */
		'security-code': FormControl<string | null | undefined>,
	}
	export function CreatePhoneVerifyResponseFormGroup() {
		return new FormGroup<PhoneVerifyResponseFormProperties>({
			calling: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'number-valid': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'security-code': new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SMSVerifyResponse {

		/**
		 * True if this a valid phone number
		 * Required
		 */
		'number-valid': boolean;

		/**
		 * The security code generated, you can save this code to perform your own verification or you can use the <a href="https://www.neutrinoapi.com/api/verify-security-code/">Verify Security Code API</a>
		 * Required
		 */
		'security-code': string;

		/**
		 * True if the SMS has been sent
		 * Required
		 */
		sent: boolean;
	}
	export interface SMSVerifyResponseFormProperties {

		/**
		 * True if this a valid phone number
		 * Required
		 */
		'number-valid': FormControl<boolean | null | undefined>,

		/**
		 * The security code generated, you can save this code to perform your own verification or you can use the <a href="https://www.neutrinoapi.com/api/verify-security-code/">Verify Security Code API</a>
		 * Required
		 */
		'security-code': FormControl<string | null | undefined>,

		/**
		 * True if the SMS has been sent
		 * Required
		 */
		sent: FormControl<boolean | null | undefined>,
	}
	export function CreateSMSVerifyResponseFormGroup() {
		return new FormGroup<SMSVerifyResponseFormProperties>({
			'number-valid': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'security-code': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sent: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UALookupResponse {

		/**
		 * If the client is a web browser which underlying browser engine does it use
		 * Required
		 */
		'browser-engine': string;

		/**
		 * If the client is a web browser which year was this browser version released
		 * Required
		 */
		'browser-release': string;

		/**
		 * The device brand / manufacturer
		 * Required
		 */
		'device-brand': string;

		/**
		 * The device display height in CSS 'px'
		 * Required
		 */
		'device-height-px': number;

		/**
		 * The device model
		 * Required
		 */
		'device-model': string;

		/**
		 * The device model code
		 * Required
		 */
		'device-model-code': string;

		/**
		 * The device display pixel ratio (the ratio of the resolution in physical pixels to the resolution in CSS pixels)
		 * Required
		 */
		'device-pixel-ratio': number;

		/**
		 * The device display PPI (pixels per inch)
		 * Required
		 */
		'device-ppi': number;

		/**
		 * The average device price on release in USD
		 * Required
		 */
		'device-price': number;

		/**
		 * The year when this device model was released
		 * Required
		 */
		'device-release': string;

		/**
		 * The device display resolution in physical pixels (e.g. 720x1280)
		 * Required
		 */
		'device-resolution': string;

		/**
		 * The device display width in CSS 'px'
		 * Required
		 */
		'device-width-px': number;

		/**
		 * Is this a mobile device (e.g. a phone or tablet)
		 * Required
		 */
		'is-mobile': boolean;

		/**
		 * Is this a WebView / embedded software client
		 * Required
		 */
		'is-webview': boolean;

		/**
		 * The client software name
		 * Required
		 */
		name: string;

		/**
		 * The full operating system name
		 * Required
		 */
		os: string;

		/**
		 * The operating system family. The major OS families are: Android, Windows, macOS, iOS, Linux
		 * Required
		 */
		'os-family': string;

		/**
		 * The operating system full version
		 * Required
		 */
		'os-version': string;

		/**
		 * The operating system major version
		 * Required
		 */
		'os-version-major': string;

		/**
		 * The user agent type, possible values are: <br> <ul> <li>desktop</li> <li>phone</li> <li>tablet</li> <li>wearable</li> <li>tv</li> <li>console</li> <li>email</li> <li>library</li> <li>robot</li> <li>unknown</li> </ul>
		 * Required
		 */
		type: string;

		/**
		 * The user agent string
		 * Required
		 */
		ua: string;

		/**
		 * The client software full version
		 * Required
		 */
		version: string;

		/**
		 * The client software major version
		 * Required
		 */
		'version-major': string;
	}
	export interface UALookupResponseFormProperties {

		/**
		 * If the client is a web browser which underlying browser engine does it use
		 * Required
		 */
		'browser-engine': FormControl<string | null | undefined>,

		/**
		 * If the client is a web browser which year was this browser version released
		 * Required
		 */
		'browser-release': FormControl<string | null | undefined>,

		/**
		 * The device brand / manufacturer
		 * Required
		 */
		'device-brand': FormControl<string | null | undefined>,

		/**
		 * The device display height in CSS 'px'
		 * Required
		 */
		'device-height-px': FormControl<number | null | undefined>,

		/**
		 * The device model
		 * Required
		 */
		'device-model': FormControl<string | null | undefined>,

		/**
		 * The device model code
		 * Required
		 */
		'device-model-code': FormControl<string | null | undefined>,

		/**
		 * The device display pixel ratio (the ratio of the resolution in physical pixels to the resolution in CSS pixels)
		 * Required
		 */
		'device-pixel-ratio': FormControl<number | null | undefined>,

		/**
		 * The device display PPI (pixels per inch)
		 * Required
		 */
		'device-ppi': FormControl<number | null | undefined>,

		/**
		 * The average device price on release in USD
		 * Required
		 */
		'device-price': FormControl<number | null | undefined>,

		/**
		 * The year when this device model was released
		 * Required
		 */
		'device-release': FormControl<string | null | undefined>,

		/**
		 * The device display resolution in physical pixels (e.g. 720x1280)
		 * Required
		 */
		'device-resolution': FormControl<string | null | undefined>,

		/**
		 * The device display width in CSS 'px'
		 * Required
		 */
		'device-width-px': FormControl<number | null | undefined>,

		/**
		 * Is this a mobile device (e.g. a phone or tablet)
		 * Required
		 */
		'is-mobile': FormControl<boolean | null | undefined>,

		/**
		 * Is this a WebView / embedded software client
		 * Required
		 */
		'is-webview': FormControl<boolean | null | undefined>,

		/**
		 * The client software name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The full operating system name
		 * Required
		 */
		os: FormControl<string | null | undefined>,

		/**
		 * The operating system family. The major OS families are: Android, Windows, macOS, iOS, Linux
		 * Required
		 */
		'os-family': FormControl<string | null | undefined>,

		/**
		 * The operating system full version
		 * Required
		 */
		'os-version': FormControl<string | null | undefined>,

		/**
		 * The operating system major version
		 * Required
		 */
		'os-version-major': FormControl<string | null | undefined>,

		/**
		 * The user agent type, possible values are: <br> <ul> <li>desktop</li> <li>phone</li> <li>tablet</li> <li>wearable</li> <li>tv</li> <li>console</li> <li>email</li> <li>library</li> <li>robot</li> <li>unknown</li> </ul>
		 * Required
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * The user agent string
		 * Required
		 */
		ua: FormControl<string | null | undefined>,

		/**
		 * The client software full version
		 * Required
		 */
		version: FormControl<string | null | undefined>,

		/**
		 * The client software major version
		 * Required
		 */
		'version-major': FormControl<string | null | undefined>,
	}
	export function CreateUALookupResponseFormGroup() {
		return new FormGroup<UALookupResponseFormProperties>({
			'browser-engine': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'browser-release': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'device-brand': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'device-height-px': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'device-model': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'device-model-code': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'device-pixel-ratio': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'device-ppi': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'device-price': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'device-release': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'device-resolution': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'device-width-px': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'is-mobile': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-webview': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			os: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'os-family': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'os-version': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'os-version-major': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ua: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'version-major': new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface URLInfoResponse {

		/**
		 * The actual content this URL responded with. Only set if the 'fetch-content' option was used
		 * Required
		 */
		content: string;

		/**
		 * The encoding format the URL uses
		 * Required
		 */
		'content-encoding': string;

		/**
		 * The size of the URL content in bytes
		 * Required
		 */
		'content-size': number;

		/**
		 * The content-type this URL serves
		 * Required
		 */
		'content-type': string;

		/**
		 * True if this URL responded with an HTTP OK (200) status
		 * Required
		 */
		'http-ok': boolean;

		/**
		 * True if this URL responded with an HTTP redirect
		 * Required
		 */
		'http-redirect': boolean;

		/**
		 * The HTTP status code this URL responded with. An HTTP status of 0 indicates a network level issue
		 * Required
		 */
		'http-status': number;

		/**
		 * The HTTP status message assoicated with the status code
		 * Required
		 */
		'http-status-message': number;

		/**
		 * True if an error occurred while loading the URL. This includes network errors, TLS errors and timeouts
		 * Required
		 */
		'is-error': boolean;

		/**
		 * True if a timeout occurred while loading the URL. You can set the timeout with the request parameter 'timeout'
		 * Required
		 */
		'is-timeout': boolean;

		/**
		 * The ISO 2-letter language code of the page. Extracted from either the HTML document or via HTTP headers
		 * Required
		 */
		'language-code': string;

		/**
		 * The time taken to load the URL content in seconds
		 * Required
		 */
		'load-time': number;

		/**
		 * A key-value map of the URL query paramaters
		 * Required
		 */
		query: {[id: string]: string };

		/**
		 * Is this URL actually serving real content
		 * Required
		 */
		real: boolean;

		/**
		 * The servers IP geo-location: full city name (if detectable)
		 * Required
		 */
		'server-city': string;

		/**
		 * The servers IP geo-location: full country name
		 * Required
		 */
		'server-country': string;

		/**
		 * The servers IP geo-location: ISO 2-letter country code
		 * Required
		 */
		'server-country-code': string;

		/**
		 * The servers hostname (PTR record)
		 * Required
		 */
		'server-hostname': string;

		/**
		 * The IP address of the server hosting this URL
		 * Required
		 */
		'server-ip': string;

		/**
		 * The name of the server software hosting this URL
		 * Required
		 */
		'server-name': string;

		/**
		 * The servers IP geo-location: full region name (if detectable)
		 * Required
		 */
		'server-region': string;

		/**
		 * The document title
		 * Required
		 */
		title: string;

		/**
		 * The fully qualified URL. This may be different to the URL requested if http-redirect is true
		 * Required
		 */
		url: string;

		/**
		 * The URL path
		 * Required
		 */
		'url-path': string;

		/**
		 * The URL port
		 * Required
		 */
		'url-port': number;

		/**
		 * The URL protocol, usually http or https
		 * Required
		 */
		'url-protocol': string;

		/**
		 * Is this a valid well-formed URL
		 * Required
		 */
		valid: boolean;
	}
	export interface URLInfoResponseFormProperties {

		/**
		 * The actual content this URL responded with. Only set if the 'fetch-content' option was used
		 * Required
		 */
		content: FormControl<string | null | undefined>,

		/**
		 * The encoding format the URL uses
		 * Required
		 */
		'content-encoding': FormControl<string | null | undefined>,

		/**
		 * The size of the URL content in bytes
		 * Required
		 */
		'content-size': FormControl<number | null | undefined>,

		/**
		 * The content-type this URL serves
		 * Required
		 */
		'content-type': FormControl<string | null | undefined>,

		/**
		 * True if this URL responded with an HTTP OK (200) status
		 * Required
		 */
		'http-ok': FormControl<boolean | null | undefined>,

		/**
		 * True if this URL responded with an HTTP redirect
		 * Required
		 */
		'http-redirect': FormControl<boolean | null | undefined>,

		/**
		 * The HTTP status code this URL responded with. An HTTP status of 0 indicates a network level issue
		 * Required
		 */
		'http-status': FormControl<number | null | undefined>,

		/**
		 * The HTTP status message assoicated with the status code
		 * Required
		 */
		'http-status-message': FormControl<number | null | undefined>,

		/**
		 * True if an error occurred while loading the URL. This includes network errors, TLS errors and timeouts
		 * Required
		 */
		'is-error': FormControl<boolean | null | undefined>,

		/**
		 * True if a timeout occurred while loading the URL. You can set the timeout with the request parameter 'timeout'
		 * Required
		 */
		'is-timeout': FormControl<boolean | null | undefined>,

		/**
		 * The ISO 2-letter language code of the page. Extracted from either the HTML document or via HTTP headers
		 * Required
		 */
		'language-code': FormControl<string | null | undefined>,

		/**
		 * The time taken to load the URL content in seconds
		 * Required
		 */
		'load-time': FormControl<number | null | undefined>,

		/**
		 * A key-value map of the URL query paramaters
		 * Required
		 */
		query: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Is this URL actually serving real content
		 * Required
		 */
		real: FormControl<boolean | null | undefined>,

		/**
		 * The servers IP geo-location: full city name (if detectable)
		 * Required
		 */
		'server-city': FormControl<string | null | undefined>,

		/**
		 * The servers IP geo-location: full country name
		 * Required
		 */
		'server-country': FormControl<string | null | undefined>,

		/**
		 * The servers IP geo-location: ISO 2-letter country code
		 * Required
		 */
		'server-country-code': FormControl<string | null | undefined>,

		/**
		 * The servers hostname (PTR record)
		 * Required
		 */
		'server-hostname': FormControl<string | null | undefined>,

		/**
		 * The IP address of the server hosting this URL
		 * Required
		 */
		'server-ip': FormControl<string | null | undefined>,

		/**
		 * The name of the server software hosting this URL
		 * Required
		 */
		'server-name': FormControl<string | null | undefined>,

		/**
		 * The servers IP geo-location: full region name (if detectable)
		 * Required
		 */
		'server-region': FormControl<string | null | undefined>,

		/**
		 * The document title
		 * Required
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * The fully qualified URL. This may be different to the URL requested if http-redirect is true
		 * Required
		 */
		url: FormControl<string | null | undefined>,

		/**
		 * The URL path
		 * Required
		 */
		'url-path': FormControl<string | null | undefined>,

		/**
		 * The URL port
		 * Required
		 */
		'url-port': FormControl<number | null | undefined>,

		/**
		 * The URL protocol, usually http or https
		 * Required
		 */
		'url-protocol': FormControl<string | null | undefined>,

		/**
		 * Is this a valid well-formed URL
		 * Required
		 */
		valid: FormControl<boolean | null | undefined>,
	}
	export function CreateURLInfoResponseFormGroup() {
		return new FormGroup<URLInfoResponseFormProperties>({
			content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'content-encoding': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'content-size': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'content-type': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'http-ok': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'http-redirect': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'http-status': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'http-status-message': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'is-error': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'is-timeout': new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'language-code': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'load-time': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			query: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			real: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'server-city': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'server-country': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'server-country-code': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'server-hostname': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'server-ip': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'server-name': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'server-region': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'url-path': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'url-port': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'url-protocol': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			valid: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VerifySecurityCodeResponse {

		/**
		 * True if the code is valid
		 * Required
		 */
		verified: boolean;
	}
	export interface VerifySecurityCodeResponseFormProperties {

		/**
		 * True if the code is valid
		 * Required
		 */
		verified: FormControl<boolean | null | undefined>,
	}
	export function CreateVerifySecurityCodeResponseFormGroup() {
		return new FormGroup<VerifySecurityCodeResponseFormProperties>({
			verified: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * BIN List Download
		 * Download our entire BIN database for direct use on your own systems
		 * Get bin-list-download
		 * @param {boolean} include_iso3 Include ISO 3-letter country codes and ISO 3-letter currency codes in the data. These will be added to columns 10 and 11 respectively
		 * @param {boolean} include_8digit Include 8-digit and higher BIN codes. This option includes all 6-digit BINs and all 8-digit and higher BINs (including some 9, 10 and 11 digit BINs where available)
		 * @return {string} 
		 */
		BINListDownload(include_iso3: boolean | null | undefined, include_8digit: boolean | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'bin-list-download?include_iso3=' + include_iso3 + '&include_8digit=' + include_8digit, { responseType: 'text' });
		}

		/**
		 * BIN Lookup
		 * Perform a BIN (Bank Identification Number) or IIN (Issuer Identification Number) lookup
		 * Get bin-lookup
		 * @param {string} bin_number The BIN or IIN number. This is the first 6, 8 or 10 digits of a card number, use 8 (or more) digits for the highest level of accuracy
		 * @param {string} customer_ip Pass in the customers IP address and we will return some extra information about them
		 * @return {BINLookupResponse} 
		 */
		BINLookup(bin_number: string, customer_ip: string | null | undefined): Observable<BINLookupResponse> {
			return this.http.get<BINLookupResponse>(this.baseUri + 'bin-lookup?bin_number=' + (bin_number == null ? '' : encodeURIComponent(bin_number)) + '&customer_ip=' + (customer_ip == null ? '' : encodeURIComponent(customer_ip)), {});
		}

		/**
		 * Convert
		 * A currency and unit conversion tool
		 * Get convert
		 * @param {string} from_value The value to convert from (e.g. 10.95)
		 * @param {string} from_type The type of the value to convert from (e.g. USD)
		 * @param {string} to_type The type to convert to (e.g. EUR)
		 * @return {ConvertResponse} 
		 */
		Convert(from_value: string, from_type: string, to_type: string): Observable<ConvertResponse> {
			return this.http.get<ConvertResponse>(this.baseUri + 'convert?from_value=' + (from_value == null ? '' : encodeURIComponent(from_value)) + '&from_type=' + (from_type == null ? '' : encodeURIComponent(from_type)) + '&to_type=' + (to_type == null ? '' : encodeURIComponent(to_type)), {});
		}

		/**
		 * Domain Lookup
		 * Retrieve domain name details and detect potentially malicious or dangerous domains
		 * Get domain-lookup
		 * @param {string} host A domain name, hostname, FQDN, URL, HTML link or email address to lookup
		 * @param {boolean} live For domains that we have never seen before then perform various live checks and realtime reconnaissance. <br>NOTE: this option may add additional non-deterministic delay to the request, if you require consistently fast API response times or just want to check our domain blocklists then you can disable this option
		 * @return {DomainLookupResponse} 
		 */
		DomainLookup(host: string, live: boolean | null | undefined): Observable<DomainLookupResponse> {
			return this.http.get<DomainLookupResponse>(this.baseUri + 'domain-lookup?host=' + (host == null ? '' : encodeURIComponent(host)) + '&live=' + live, {});
		}

		/**
		 * Email Validate
		 * Parse, validate and clean an email address
		 * Get email-validate
		 * @param {string} email An email address
		 * @param {boolean} fix_typos Automatically attempt to fix typos in the address
		 * @return {EmailValidateResponse} 
		 */
		EmailValidate(email: string, fix_typos: boolean | null | undefined): Observable<EmailValidateResponse> {
			return this.http.get<EmailValidateResponse>(this.baseUri + 'email-validate?email=' + (email == null ? '' : encodeURIComponent(email)) + '&fix_typos=' + fix_typos, {});
		}

		/**
		 * Email Verify
		 * SMTP based email address verification
		 * Get email-verify
		 * @param {string} email An email address
		 * @param {boolean} fix_typos Automatically attempt to fix typos in the address
		 * @return {EmailVerifyResponse} 
		 */
		EmailVerify(email: string, fix_typos: boolean | null | undefined): Observable<EmailVerifyResponse> {
			return this.http.get<EmailVerifyResponse>(this.baseUri + 'email-verify?email=' + (email == null ? '' : encodeURIComponent(email)) + '&fix_typos=' + fix_typos, {});
		}

		/**
		 * Geocode Address
		 * Geocode an address, partial address or just the name of a place
		 * Get geocode-address
		 * @param {string} address The full address, partial address or name of a place to try and locate. Comma separated address components are preferred.
		 * @param {string} house_number The house/building number to locate
		 * @param {string} street The street/road name to locate
		 * @param {string} city The city/town name to locate
		 * @param {string} county The county/region name to locate
		 * @param {string} state The state name to locate
		 * @param {string} postal_code The postal code to locate
		 * @param {string} country_code Limit result to this country (the default is no country bias)
		 * @param {string} language_code The language to display results in, available languages are: <ul> <li>de, en, es, fr, it, pt, ru, zh</li> </ul>
		 * @param {boolean} fuzzy_search If no matches are found for the given address, start performing a recursive fuzzy search until a geolocation is found. This option is recommended for processing user input or implementing auto-complete. We use a combination of approximate string matching and data cleansing to find possible location matches
		 * @return {GeocodeAddressResponse} 
		 */
		GeocodeAddress(address: string | null | undefined, house_number: string | null | undefined, street: string | null | undefined, city: string | null | undefined, county: string | null | undefined, state: string | null | undefined, postal_code: string | null | undefined, country_code: string | null | undefined, language_code: string | null | undefined, fuzzy_search: boolean | null | undefined): Observable<GeocodeAddressResponse> {
			return this.http.get<GeocodeAddressResponse>(this.baseUri + 'geocode-address?address=' + (address == null ? '' : encodeURIComponent(address)) + '&house_number=' + (house_number == null ? '' : encodeURIComponent(house_number)) + '&street=' + (street == null ? '' : encodeURIComponent(street)) + '&city=' + (city == null ? '' : encodeURIComponent(city)) + '&county=' + (county == null ? '' : encodeURIComponent(county)) + '&state=' + (state == null ? '' : encodeURIComponent(state)) + '&postal_code=' + (postal_code == null ? '' : encodeURIComponent(postal_code)) + '&country_code=' + (country_code == null ? '' : encodeURIComponent(country_code)) + '&language_code=' + (language_code == null ? '' : encodeURIComponent(language_code)) + '&fuzzy_search=' + fuzzy_search, {});
		}

		/**
		 * Geocode Reverse
		 * Convert a geographic coordinate (latitude and longitude) into a real world address
		 * Get geocode-reverse
		 * @param {string} latitude The location latitude in decimal degrees format
		 * @param {string} longitude The location longitude in decimal degrees format
		 * @param {string} language_code The language to display results in, available languages are: <ul> <li>de, en, es, fr, it, pt, ru</li> </ul>
		 * @param {string} zoom The zoom level to respond with: <br> <ul> <li>address - the most precise address available</li> <li>street - the street level</li> <li>city - the city level</li> <li>state - the state level</li> <li>country - the country level</li> </ul>
		 * @return {GeocodeReverseResponse} 
		 */
		GeocodeReverse(latitude: string, longitude: string, language_code: string | null | undefined, zoom: string | null | undefined): Observable<GeocodeReverseResponse> {
			return this.http.get<GeocodeReverseResponse>(this.baseUri + 'geocode-reverse?latitude=' + (latitude == null ? '' : encodeURIComponent(latitude)) + '&longitude=' + (longitude == null ? '' : encodeURIComponent(longitude)) + '&language_code=' + (language_code == null ? '' : encodeURIComponent(language_code)) + '&zoom=' + (zoom == null ? '' : encodeURIComponent(zoom)), {});
		}

		/**
		 * HLR Lookup
		 * Connect to the global mobile cellular network and retrieve the status of a mobile device
		 * Get hlr-lookup
		 * @param {string} number A phone number
		 * @param {string} country_code ISO 2-letter country code, assume numbers are based in this country. <br>If not set numbers are assumed to be in international format (with or without the leading + sign)
		 * @return {HLRLookupResponse} 
		 */
		HLRLookup(number: string, country_code: string | null | undefined): Observable<HLRLookupResponse> {
			return this.http.get<HLRLookupResponse>(this.baseUri + 'hlr-lookup?number=' + (number == null ? '' : encodeURIComponent(number)) + '&country_code=' + (country_code == null ? '' : encodeURIComponent(country_code)), {});
		}

		/**
		 * Host Reputation
		 * Check the reputation of an IP address, domain name or URL against a comprehensive list of blacklists and blocklists
		 * Get host-reputation
		 * @param {string} host An IP address, domain name, FQDN or URL. <br>If you supply a domain/URL it will be checked against the URI DNSBL lists
		 * @param {number} list_rating Only check lists with this rating or better
		 * @param {string} zones Only check these DNSBL zones/hosts. Multiple zones can be supplied as comma-separated values
		 * @return {HostReputationResponse} 
		 */
		HostReputation(host: string, list_rating: number | null | undefined, zones: string | null | undefined): Observable<HostReputationResponse> {
			return this.http.get<HostReputationResponse>(this.baseUri + 'host-reputation?host=' + (host == null ? '' : encodeURIComponent(host)) + '&list_rating=' + list_rating + '&zones=' + (zones == null ? '' : encodeURIComponent(zones)), {});
		}

		/**
		 * IP Blocklist
		 * The IP Blocklist API will detect potentially malicious or dangerous IP addresses
		 * Get ip-blocklist
		 * @param {string} ip An IPv4 or IPv6 address. Accepts standard IP notation (with or without port number), CIDR notation and IPv6 compressed notation. If multiple IPs are passed using comma-separated values the first non-bogon address on the list will be checked
		 * @param {boolean} vpn_lookup Include public VPN provider IP addresses. <br><b>NOTE</b>: For more advanced VPN detection including the ability to identify private and stealth VPNs use the <a href="https://www.neutrinoapi.com/api/ip-probe/">IP Probe API</a>
		 * @return {IPBlocklistResponse} 
		 */
		IPBlocklist(ip: string, vpn_lookup: boolean | null | undefined): Observable<IPBlocklistResponse> {
			return this.http.get<IPBlocklistResponse>(this.baseUri + 'ip-blocklist?ip=' + (ip == null ? '' : encodeURIComponent(ip)) + '&vpn_lookup=' + vpn_lookup, {});
		}

		/**
		 * IP Blocklist Download
		 * This API is a direct feed to our IP blocklist data
		 * Get ip-blocklist-download
		 * @param {string} format The data format. Can be either CSV or TXT
		 * @param {boolean} include_vpn Include public VPN provider addresses, this option is only available for Tier 3 or higher accounts. Adds any IPs which are solely listed as VPN providers, IPs that are listed on multiple sensors will still be included without enabling this option. <br><b>WARNING</b>: This adds at least an additional 8 million IP addresses to the download if not using CIDR notation
		 * @param {boolean} cidr Output IPs using CIDR notation. This option should be preferred but is off by default for backwards compatibility
		 * @param {boolean} ip6 Output the IPv6 version of the blocklist, the default is to output IPv4 only. Note that this option enables CIDR notation too as this is the only notation currently supported for IPv6
		 * @return {string} 
		 */
		IPBlocklistDownload(format: string | null | undefined, include_vpn: boolean | null | undefined, cidr: boolean | null | undefined, ip6: boolean | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'ip-blocklist-download?format=' + (format == null ? '' : encodeURIComponent(format)) + '&include_vpn=' + include_vpn + '&cidr=' + cidr + '&ip6=' + ip6, { responseType: 'text' });
		}

		/**
		 * IP Info
		 * Get location information about an IP address and do reverse DNS (PTR) lookups
		 * Get ip-info
		 * @param {string} ip IPv4 or IPv6 address
		 * @param {boolean} reverse_lookup Do a reverse DNS (PTR) lookup. This option can add extra delay to the request so only use it if you need it
		 * @return {IPInfoResponse} 
		 */
		IPInfo(ip: string, reverse_lookup: boolean | null | undefined): Observable<IPInfoResponse> {
			return this.http.get<IPInfoResponse>(this.baseUri + 'ip-info?ip=' + (ip == null ? '' : encodeURIComponent(ip)) + '&reverse_lookup=' + reverse_lookup, {});
		}

		/**
		 * IP Probe
		 * Execute a realtime network probe against an IPv4 or IPv6 address
		 * Get ip-probe
		 * @param {string} ip IPv4 or IPv6 address
		 * @return {IPProbeResponse} 
		 */
		IPProbe(ip: string): Observable<IPProbeResponse> {
			return this.http.get<IPProbeResponse>(this.baseUri + 'ip-probe?ip=' + (ip == null ? '' : encodeURIComponent(ip)), {});
		}

		/**
		 * Phone Validate
		 * Parse, validate and get location information about a phone number
		 * Get phone-validate
		 * @param {string} number A phone number. This can be in international format (E.164) or local format. If passing local format you must also set either the 'country-code' OR 'ip' options as well
		 * @param {string} country_code ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign)
		 * @param {string} ip Pass in a users IP address and we will assume numbers are based in the country of the IP address
		 * @return {PhoneValidateResponse} 
		 */
		PhoneValidate(number: string, country_code: string | null | undefined, ip: string | null | undefined): Observable<PhoneValidateResponse> {
			return this.http.get<PhoneValidateResponse>(this.baseUri + 'phone-validate?number=' + (number == null ? '' : encodeURIComponent(number)) + '&country_code=' + (country_code == null ? '' : encodeURIComponent(country_code)) + '&ip=' + (ip == null ? '' : encodeURIComponent(ip)), {});
		}

		/**
		 * UA Lookup
		 * Parse, validate and get detailed user-agent information from a user agent string or from client hints
		 * Get ua-lookup
		 * @param {string} ua The user-agent string to lookup. For client hints use the 'UA' header or the JSON data directly from 'navigator.userAgentData.brands' or 'navigator.userAgentData.getHighEntropyValues()'
		 * @param {string} ua_version For client hints this corresponds to the 'UA-Full-Version' header or 'uaFullVersion' from NavigatorUAData
		 * @param {string} ua_platform For client hints this corresponds to the 'UA-Platform' header or 'platform' from NavigatorUAData
		 * @param {string} ua_platform_version For client hints this corresponds to the 'UA-Platform-Version' header or 'platformVersion' from NavigatorUAData
		 * @param {string} ua_mobile For client hints this corresponds to the 'UA-Mobile' header or 'mobile' from NavigatorUAData
		 * @param {string} device_model For client hints this corresponds to the 'UA-Model' header or 'model' from NavigatorUAData. <br>You can also use this parameter to lookup a device directly by its model name, model code or hardware code, on android you can get the model name from: https://developer.android.com/reference/android/os/Build.html#MODEL
		 * @param {string} device_brand This parameter is only used in combination with 'device-model' when doing direct device lookups without any user-agent data. Set this to the brand or manufacturer name, this is required for accurate device detection with ambiguous model names. On android you can get the device brand from: https://developer.android.com/reference/android/os/Build#MANUFACTURER
		 * @return {UALookupResponse} 
		 */
		UALookup(ua: string, ua_version: string | null | undefined, ua_platform: string | null | undefined, ua_platform_version: string | null | undefined, ua_mobile: string | null | undefined, device_model: string | null | undefined, device_brand: string | null | undefined): Observable<UALookupResponse> {
			return this.http.get<UALookupResponse>(this.baseUri + 'ua-lookup?ua=' + (ua == null ? '' : encodeURIComponent(ua)) + '&ua_version=' + (ua_version == null ? '' : encodeURIComponent(ua_version)) + '&ua_platform=' + (ua_platform == null ? '' : encodeURIComponent(ua_platform)) + '&ua_platform_version=' + (ua_platform_version == null ? '' : encodeURIComponent(ua_platform_version)) + '&ua_mobile=' + (ua_mobile == null ? '' : encodeURIComponent(ua_mobile)) + '&device_model=' + (device_model == null ? '' : encodeURIComponent(device_model)) + '&device_brand=' + (device_brand == null ? '' : encodeURIComponent(device_brand)), {});
		}

		/**
		 * URL Info
		 * Parse, analyze and retrieve content from the supplied URL
		 * Get url-info
		 * @param {string} url The URL to probe
		 * @param {boolean} fetch_content If this URL responds with html, text, json or xml then return the response. This option is useful if you want to perform further processing on the URL content (e.g. with the HTML Extract or HTML Clean APIs)
		 * @param {boolean} ignore_certificate_errors Ignore any TLS/SSL certificate errors and load the URL anyway
		 * @param {number} timeout Timeout in seconds. Give up if still trying to load the URL after this number of seconds
		 * @param {number} retry If the request fails for any reason try again this many times
		 * @return {URLInfoResponse} 
		 */
		URLInfo(url: string, fetch_content: boolean | null | undefined, ignore_certificate_errors: boolean | null | undefined, timeout: number | null | undefined, retry: number | null | undefined): Observable<URLInfoResponse> {
			return this.http.get<URLInfoResponse>(this.baseUri + 'url-info?url=' + (url == null ? '' : encodeURIComponent(url)) + '&fetch_content=' + fetch_content + '&ignore_certificate_errors=' + ignore_certificate_errors + '&timeout=' + timeout + '&retry=' + retry, {});
		}

		/**
		 * Verify Security Code
		 * Check if a security code sent via SMS Verify or Phone Verify is valid
		 * Get verify-security-code
		 * @param {string} security_code The security code to verify
		 * @param {string} limit_by If set then enable additional brute-force protection by limiting the number of attempts by the supplied value. This can be set to any unique identifier you would like to limit by, for example a hash of the users email, phone number or IP address. Requests to this API will be ignored after approximately 10 failed verification attempts
		 * @return {VerifySecurityCodeResponse} 
		 */
		VerifySecurityCode(security_code: string, limit_by: string | null | undefined): Observable<VerifySecurityCodeResponse> {
			return this.http.get<VerifySecurityCodeResponse>(this.baseUri + 'verify-security-code?security_code=' + (security_code == null ? '' : encodeURIComponent(security_code)) + '&limit_by=' + (limit_by == null ? '' : encodeURIComponent(limit_by)), {});
		}
	}

}

