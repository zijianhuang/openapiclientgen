import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged. */
	export interface HttpBody {

		/** The HTTP Content-Type header value specifying the content type of the body. */
		contentType?: string | null;

		/** The HTTP request/response body as raw binary. */
		data?: string | null;

		/** Application specific response metadata. Must be set in the first response for streaming APIs. */
		extensions?: Array<string>;
	}

	/** Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged. */
	export interface HttpBodyFormProperties {

		/** The HTTP Content-Type header value specifying the content type of the body. */
		contentType: FormControl<string | null | undefined>,

		/** The HTTP request/response body as raw binary. */
		data: FormControl<string | null | undefined>,
	}
	export function CreateHttpBodyFormGroup() {
		return new FormGroup<HttpBodyFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Links object defined in [section 4.2 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-4.2). */
	export interface Link {

		/** Target URL of a link. Example: "http://example.com/previous". */
		href?: string | null;

		/** Language code of a link. Example: "en". */
		hreflang?: string | null;

		/** Media type of the link destination. Example: "screen". */
		media?: string | null;

		/** Relation type of a link. Example: "previous". */
		rel?: string | null;

		/** Title of this link. Example: "title". */
		title?: string | null;

		/** Content type of the link. Example: "application/json". */
		type?: string | null;

		/** URL giving context for the link. Example: "http://example.com/current". */
		value?: string | null;
	}

	/** Links object defined in [section 4.2 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-4.2). */
	export interface LinkFormProperties {

		/** Target URL of a link. Example: "http://example.com/previous". */
		href: FormControl<string | null | undefined>,

		/** Language code of a link. Example: "en". */
		hreflang: FormControl<string | null | undefined>,

		/** Media type of the link destination. Example: "screen". */
		media: FormControl<string | null | undefined>,

		/** Relation type of a link. Example: "previous". */
		rel: FormControl<string | null | undefined>,

		/** Title of this link. Example: "title". */
		title: FormControl<string | null | undefined>,

		/** Content type of the link. Example: "application/json". */
		type: FormControl<string | null | undefined>,

		/** URL giving context for the link. Example: "http://example.com/current". */
		value: FormControl<string | null | undefined>,
	}
	export function CreateLinkFormGroup() {
		return new FormGroup<LinkFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			hreflang: new FormControl<string | null | undefined>(undefined),
			media: new FormControl<string | null | undefined>(undefined),
			rel: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Notices object defined in [section 4.3 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-4.3). */
	export interface Notice {

		/** Description of the notice. */
		description?: Array<string>;

		/** Link to a document containing more information. */
		links?: Array<Link>;

		/** Title of a notice. Example: "Terms of Service". */
		title?: string | null;

		/** Type values defined in [section 10.2.1 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-10.2.1) specific to a whole response: "result set truncated due to authorization", "result set truncated due to excessive load", "result set truncated due to unexplainable reasons". */
		type?: string | null;
	}

	/** Notices object defined in [section 4.3 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-4.3). */
	export interface NoticeFormProperties {

		/** Title of a notice. Example: "Terms of Service". */
		title: FormControl<string | null | undefined>,

		/** Type values defined in [section 10.2.1 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-10.2.1) specific to a whole response: "result set truncated due to authorization", "result set truncated due to excessive load", "result set truncated due to unexplainable reasons". */
		type: FormControl<string | null | undefined>,
	}
	export function CreateNoticeFormGroup() {
		return new FormGroup<NoticeFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to a general RDAP query. */
	export interface RdapResponse {

		/** Error description. */
		description?: Array<string>;

		/**
		 * Error HTTP code. Example: "501".
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorCode?: number | null;

		/** Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged. */
		jsonResponse?: HttpBody;

		/** Error language code. Error response info fields are defined in [section 6 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-6). */
		lang?: string | null;

		/** Notices applying to this response. */
		notices?: Array<Notice>;

		/** RDAP conformance level. */
		rdapConformance?: Array<string>;

		/** Error title. */
		title?: string | null;
	}

	/** Response to a general RDAP query. */
	export interface RdapResponseFormProperties {

		/**
		 * Error HTTP code. Example: "501".
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorCode: FormControl<number | null | undefined>,

		/** Error language code. Error response info fields are defined in [section 6 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-6). */
		lang: FormControl<string | null | undefined>,

		/** Error title. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateRdapResponseFormGroup() {
		return new FormGroup<RdapResponseFormProperties>({
			errorCode: new FormControl<number | null | undefined>(undefined),
			lang: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
		 * Get v1/autnum/{autnumId}
		 * @return {RdapResponse} Successful response
		 */
		Domainsrdap_autnum_get(autnumId: string): Observable<RdapResponse> {
			return this.http.get<RdapResponse>(this.baseUri + 'v1/autnum/' + (autnumId == null ? '' : encodeURIComponent(autnumId)), {});
		}

		/**
		 * Look up RDAP information for a domain by name.
		 * Get v1/domain/{domainName}
		 * @param {string} domainName Full domain name to look up. Example: "example.com"
		 * @return {HttpBody} Successful response
		 */
		Domainsrdap_domain_get(domainName: string): Observable<HttpBody> {
			return this.http.get<HttpBody>(this.baseUri + 'v1/domain/' + (domainName == null ? '' : encodeURIComponent(domainName)), {});
		}

		/**
		 * The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
		 * Get v1/domains
		 * @return {RdapResponse} Successful response
		 */
		Domainsrdap_getDomains(): Observable<RdapResponse> {
			return this.http.get<RdapResponse>(this.baseUri + 'v1/domains', {});
		}

		/**
		 * The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
		 * Get v1/entities
		 * @return {RdapResponse} Successful response
		 */
		Domainsrdap_getEntities(): Observable<RdapResponse> {
			return this.http.get<RdapResponse>(this.baseUri + 'v1/entities', {});
		}

		/**
		 * The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
		 * Get v1/entity/{entityId}
		 * @return {RdapResponse} Successful response
		 */
		Domainsrdap_entity_get(entityId: string): Observable<RdapResponse> {
			return this.http.get<RdapResponse>(this.baseUri + 'v1/entity/' + (entityId == null ? '' : encodeURIComponent(entityId)), {});
		}

		/**
		 * Get help information for the RDAP API, including links to documentation.
		 * Get v1/help
		 * @return {HttpBody} Successful response
		 */
		Domainsrdap_getHelp(): Observable<HttpBody> {
			return this.http.get<HttpBody>(this.baseUri + 'v1/help', {});
		}

		/**
		 * The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
		 * Get v1/ip
		 * @return {HttpBody} Successful response
		 */
		Domainsrdap_getIp(): Observable<HttpBody> {
			return this.http.get<HttpBody>(this.baseUri + 'v1/ip', {});
		}

		/**
		 * The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
		 * Get v1/ip/{ipId}/{ipId1}
		 * @return {RdapResponse} Successful response
		 */
		Domainsrdap_ip_get(ipId: string, ipId1: string): Observable<RdapResponse> {
			return this.http.get<RdapResponse>(this.baseUri + 'v1/ip/' + (ipId == null ? '' : encodeURIComponent(ipId)) + '/' + (ipId1 == null ? '' : encodeURIComponent(ipId1)), {});
		}

		/**
		 * The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
		 * Get v1/nameserver/{nameserverId}
		 * @return {RdapResponse} Successful response
		 */
		Domainsrdap_nameserver_get(nameserverId: string): Observable<RdapResponse> {
			return this.http.get<RdapResponse>(this.baseUri + 'v1/nameserver/' + (nameserverId == null ? '' : encodeURIComponent(nameserverId)), {});
		}

		/**
		 * The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
		 * Get v1/nameservers
		 * @return {RdapResponse} Successful response
		 */
		Domainsrdap_getNameservers(): Observable<RdapResponse> {
			return this.http.get<RdapResponse>(this.baseUri + 'v1/nameservers', {});
		}
	}

}

