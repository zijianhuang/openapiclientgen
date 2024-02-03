import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Metric on a particular delivery error type. */
	export interface DeliveryError {

		/** The class of delivery error. */
		errorClass?: DeliveryErrorErrorClass | null;

		/** The ratio of messages where the error occurred vs all authenticated traffic. */
		errorRatio?: number | null;

		/** The type of delivery error. */
		errorType?: DeliveryErrorErrorType | null;
	}

	/** Metric on a particular delivery error type. */
	export interface DeliveryErrorFormProperties {

		/** The class of delivery error. */
		errorClass: FormControl<DeliveryErrorErrorClass | null | undefined>,

		/** The ratio of messages where the error occurred vs all authenticated traffic. */
		errorRatio: FormControl<number | null | undefined>,

		/** The type of delivery error. */
		errorType: FormControl<DeliveryErrorErrorType | null | undefined>,
	}
	export function CreateDeliveryErrorFormGroup() {
		return new FormGroup<DeliveryErrorFormProperties>({
			errorClass: new FormControl<DeliveryErrorErrorClass | null | undefined>(undefined),
			errorRatio: new FormControl<number | null | undefined>(undefined),
			errorType: new FormControl<DeliveryErrorErrorType | null | undefined>(undefined),
		});

	}

	export enum DeliveryErrorErrorClass { DELIVERY_ERROR_CLASS_UNSPECIFIED = 'DELIVERY_ERROR_CLASS_UNSPECIFIED', PERMANENT_ERROR = 'PERMANENT_ERROR', TEMPORARY_ERROR = 'TEMPORARY_ERROR' }

	export enum DeliveryErrorErrorType { DELIVERY_ERROR_TYPE_UNSPECIFIED = 'DELIVERY_ERROR_TYPE_UNSPECIFIED', RATE_LIMIT_EXCEEDED = 'RATE_LIMIT_EXCEEDED', SUSPECTED_SPAM = 'SUSPECTED_SPAM', CONTENT_SPAMMY = 'CONTENT_SPAMMY', BAD_ATTACHMENT = 'BAD_ATTACHMENT', BAD_DMARC_POLICY = 'BAD_DMARC_POLICY', LOW_IP_REPUTATION = 'LOW_IP_REPUTATION', LOW_DOMAIN_REPUTATION = 'LOW_DOMAIN_REPUTATION', IP_IN_RBL = 'IP_IN_RBL', DOMAIN_IN_RBL = 'DOMAIN_IN_RBL', BAD_PTR_RECORD = 'BAD_PTR_RECORD' }


	/** A registered domain resource in the Postmaster API. */
	export interface Domain {

		/** Timestamp when the user registered this domain. Assigned by the server. */
		createTime?: string | null;

		/** The resource name of the Domain. Domain names have the form `domains/{domain_name}`, where domain_name is the fully qualified domain name (i.e., mymail.mydomain.com). */
		name?: string | null;

		/** User’s permission for this domain. Assigned by the server. */
		permission?: DomainPermission | null;
	}

	/** A registered domain resource in the Postmaster API. */
	export interface DomainFormProperties {

		/** Timestamp when the user registered this domain. Assigned by the server. */
		createTime: FormControl<string | null | undefined>,

		/** The resource name of the Domain. Domain names have the form `domains/{domain_name}`, where domain_name is the fully qualified domain name (i.e., mymail.mydomain.com). */
		name: FormControl<string | null | undefined>,

		/** User’s permission for this domain. Assigned by the server. */
		permission: FormControl<DomainPermission | null | undefined>,
	}
	export function CreateDomainFormGroup() {
		return new FormGroup<DomainFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			permission: new FormControl<DomainPermission | null | undefined>(undefined),
		});

	}

	export enum DomainPermission { PERMISSION_UNSPECIFIED = 'PERMISSION_UNSPECIFIED', OWNER = 'OWNER', READER = 'READER', NONE = 'NONE' }


	/** [Feedback loop](https://support.google.com/mail/answer/6254652) identifier information. */
	export interface FeedbackLoop {

		/** Feedback loop identifier that uniquely identifies individual campaigns. */
		id?: string | null;

		/** The ratio of user marked spam messages with the identifier vs the total number of inboxed messages with that identifier. */
		spamRatio?: number | null;
	}

	/** [Feedback loop](https://support.google.com/mail/answer/6254652) identifier information. */
	export interface FeedbackLoopFormProperties {

		/** Feedback loop identifier that uniquely identifies individual campaigns. */
		id: FormControl<string | null | undefined>,

		/** The ratio of user marked spam messages with the identifier vs the total number of inboxed messages with that identifier. */
		spamRatio: FormControl<number | null | undefined>,
	}
	export function CreateFeedbackLoopFormGroup() {
		return new FormGroup<FeedbackLoopFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			spamRatio: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** IP Reputation information for a set of IPs in a specific reputation category. */
	export interface IpReputation {

		/** Total number of unique IPs in this reputation category. This metric only pertains to traffic that passed [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/). */
		ipCount?: string | null;

		/** The reputation category this IP reputation represents. */
		reputation?: IpReputationReputation | null;

		/** A sample of IPs in this reputation category. */
		sampleIps?: Array<string>;
	}

	/** IP Reputation information for a set of IPs in a specific reputation category. */
	export interface IpReputationFormProperties {

		/** Total number of unique IPs in this reputation category. This metric only pertains to traffic that passed [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/). */
		ipCount: FormControl<string | null | undefined>,

		/** The reputation category this IP reputation represents. */
		reputation: FormControl<IpReputationReputation | null | undefined>,
	}
	export function CreateIpReputationFormGroup() {
		return new FormGroup<IpReputationFormProperties>({
			ipCount: new FormControl<string | null | undefined>(undefined),
			reputation: new FormControl<IpReputationReputation | null | undefined>(undefined),
		});

	}

	export enum IpReputationReputation { REPUTATION_CATEGORY_UNSPECIFIED = 'REPUTATION_CATEGORY_UNSPECIFIED', HIGH = 'HIGH', MEDIUM = 'MEDIUM', LOW = 'LOW', BAD = 'BAD' }


	/** Response message for ListDomains. */
	export interface ListDomainsResponse {

		/** The list of domains. */
		domains?: Array<Domain>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** Response message for ListDomains. */
	export interface ListDomainsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDomainsResponseFormGroup() {
		return new FormGroup<ListDomainsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListTrafficStats. */
	export interface ListTrafficStatsResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** The list of TrafficStats. */
		trafficStats?: Array<TrafficStats>;
	}

	/** Response message for ListTrafficStats. */
	export interface ListTrafficStatsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTrafficStatsResponseFormGroup() {
		return new FormGroup<ListTrafficStatsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Email traffic statistics pertaining to a specific date. */
	export interface TrafficStats {

		/** Delivery errors for the domain. This metric only pertains to traffic that passed [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/). */
		deliveryErrors?: Array<DeliveryError>;

		/** The ratio of mail that successfully authenticated with DKIM vs. all mail that attempted to authenticate with [DKIM](http://www.dkim.org/). Spoofed mail is excluded. */
		dkimSuccessRatio?: number | null;

		/** The ratio of mail that passed [DMARC](https://dmarc.org/) alignment checks vs all mail received from the domain that successfully authenticated with either of [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/). */
		dmarcSuccessRatio?: number | null;

		/** Reputation of the domain. */
		domainReputation?: IpReputationReputation | null;

		/** The ratio of incoming mail (to Gmail), that passed secure transport (TLS) vs all mail received from that domain. This metric only pertains to traffic that passed [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/). */
		inboundEncryptionRatio?: number | null;

		/** Reputation information pertaining to the IP addresses of the email servers for the domain. There is exactly one entry for each reputation category except REPUTATION_CATEGORY_UNSPECIFIED. */
		ipReputations?: Array<IpReputation>;

		/** The resource name of the traffic statistics. Traffic statistic names have the form `domains/{domain}/trafficStats/{date}`, where domain_name is the fully qualified domain name (i.e., mymail.mydomain.com) of the domain this traffic statistics pertains to and date is the date in yyyymmdd format that these statistics corresponds to. For example: domains/mymail.mydomain.com/trafficStats/20160807 */
		name?: string | null;

		/** The ratio of outgoing mail (from Gmail) that was accepted over secure transport (TLS). */
		outboundEncryptionRatio?: number | null;

		/** Spammy [Feedback loop identifiers] (https://support.google.com/mail/answer/6254652) with their individual spam rates. This metric only pertains to traffic that is authenticated by [DKIM](http://www.dkim.org/). */
		spammyFeedbackLoops?: Array<FeedbackLoop>;

		/** The ratio of mail that successfully authenticated with SPF vs. all mail that attempted to authenticate with [SPF](http://www.openspf.org/). Spoofed mail is excluded. */
		spfSuccessRatio?: number | null;

		/** The ratio of user-report spam vs. email that was sent to the inbox. This is potentially inexact -- users may want to refer to the description of the interval fields userReportedSpamRatioLowerBound and userReportedSpamRatioUpperBound for more explicit accuracy guarantees. This metric only pertains to emails authenticated by [DKIM](http://www.dkim.org/). */
		userReportedSpamRatio?: number | null;

		/** The lower bound of the confidence interval for the user reported spam ratio. If this field is set, then the value of userReportedSpamRatio is set to the midpoint of this interval and is thus inexact. However, the true ratio is guaranteed to be in between this lower bound and the corresponding upper bound 95% of the time. This metric only pertains to emails authenticated by [DKIM](http://www.dkim.org/). */
		userReportedSpamRatioLowerBound?: number | null;

		/** The upper bound of the confidence interval for the user reported spam ratio. If this field is set, then the value of userReportedSpamRatio is set to the midpoint of this interval and is thus inexact. However, the true ratio is guaranteed to be in between this upper bound and the corresponding lower bound 95% of the time. This metric only pertains to emails authenticated by [DKIM](http://www.dkim.org/). */
		userReportedSpamRatioUpperBound?: number | null;
	}

	/** Email traffic statistics pertaining to a specific date. */
	export interface TrafficStatsFormProperties {

		/** The ratio of mail that successfully authenticated with DKIM vs. all mail that attempted to authenticate with [DKIM](http://www.dkim.org/). Spoofed mail is excluded. */
		dkimSuccessRatio: FormControl<number | null | undefined>,

		/** The ratio of mail that passed [DMARC](https://dmarc.org/) alignment checks vs all mail received from the domain that successfully authenticated with either of [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/). */
		dmarcSuccessRatio: FormControl<number | null | undefined>,

		/** Reputation of the domain. */
		domainReputation: FormControl<IpReputationReputation | null | undefined>,

		/** The ratio of incoming mail (to Gmail), that passed secure transport (TLS) vs all mail received from that domain. This metric only pertains to traffic that passed [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/). */
		inboundEncryptionRatio: FormControl<number | null | undefined>,

		/** The resource name of the traffic statistics. Traffic statistic names have the form `domains/{domain}/trafficStats/{date}`, where domain_name is the fully qualified domain name (i.e., mymail.mydomain.com) of the domain this traffic statistics pertains to and date is the date in yyyymmdd format that these statistics corresponds to. For example: domains/mymail.mydomain.com/trafficStats/20160807 */
		name: FormControl<string | null | undefined>,

		/** The ratio of outgoing mail (from Gmail) that was accepted over secure transport (TLS). */
		outboundEncryptionRatio: FormControl<number | null | undefined>,

		/** The ratio of mail that successfully authenticated with SPF vs. all mail that attempted to authenticate with [SPF](http://www.openspf.org/). Spoofed mail is excluded. */
		spfSuccessRatio: FormControl<number | null | undefined>,

		/** The ratio of user-report spam vs. email that was sent to the inbox. This is potentially inexact -- users may want to refer to the description of the interval fields userReportedSpamRatioLowerBound and userReportedSpamRatioUpperBound for more explicit accuracy guarantees. This metric only pertains to emails authenticated by [DKIM](http://www.dkim.org/). */
		userReportedSpamRatio: FormControl<number | null | undefined>,

		/** The lower bound of the confidence interval for the user reported spam ratio. If this field is set, then the value of userReportedSpamRatio is set to the midpoint of this interval and is thus inexact. However, the true ratio is guaranteed to be in between this lower bound and the corresponding upper bound 95% of the time. This metric only pertains to emails authenticated by [DKIM](http://www.dkim.org/). */
		userReportedSpamRatioLowerBound: FormControl<number | null | undefined>,

		/** The upper bound of the confidence interval for the user reported spam ratio. If this field is set, then the value of userReportedSpamRatio is set to the midpoint of this interval and is thus inexact. However, the true ratio is guaranteed to be in between this upper bound and the corresponding lower bound 95% of the time. This metric only pertains to emails authenticated by [DKIM](http://www.dkim.org/). */
		userReportedSpamRatioUpperBound: FormControl<number | null | undefined>,
	}
	export function CreateTrafficStatsFormGroup() {
		return new FormGroup<TrafficStatsFormProperties>({
			dkimSuccessRatio: new FormControl<number | null | undefined>(undefined),
			dmarcSuccessRatio: new FormControl<number | null | undefined>(undefined),
			domainReputation: new FormControl<IpReputationReputation | null | undefined>(undefined),
			inboundEncryptionRatio: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			outboundEncryptionRatio: new FormControl<number | null | undefined>(undefined),
			spfSuccessRatio: new FormControl<number | null | undefined>(undefined),
			userReportedSpamRatio: new FormControl<number | null | undefined>(undefined),
			userReportedSpamRatioLowerBound: new FormControl<number | null | undefined>(undefined),
			userReportedSpamRatioUpperBound: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists the domains that have been registered by the client. The order of domains in the response is unspecified and non-deterministic. Newly created domains will not necessarily be added to the end of this list.
		 * Get v1/domains
		 * @param {number} pageSize Requested page size. Server may return fewer domains than requested. If unspecified, server will pick an appropriate default.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any. This is the value of ListDomainsResponse.next_page_token returned from the previous call to `ListDomains` method.
		 * @return {ListDomainsResponse} Successful response
		 */
		Gmailpostmastertools_domains_list(pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListDomainsResponse> {
			return this.http.get<ListDomainsResponse>(this.baseUri + 'v1/domains?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Get traffic statistics for a domain on a specific date. Returns PERMISSION_DENIED if user does not have permission to access TrafficStats for the domain.
		 * Get v1/{name}
		 * @param {string} name The resource name of the traffic statistics to get. E.g., domains/mymail.mydomain.com/trafficStats/20160807.
		 * @return {TrafficStats} Successful response
		 */
		Gmailpostmastertools_domains_trafficStats_get(name: string): Observable<TrafficStats> {
			return this.http.get<TrafficStats>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * List traffic statistics for all available days. Returns PERMISSION_DENIED if user does not have permission to access TrafficStats for the domain.
		 * Get v1/{parent}/trafficStats
		 * @param {string} parent The resource name of the domain whose traffic statistics we'd like to list. It should have the form `domains/{domain_name}`, where domain_name is the fully qualified domain name.
		 * @param {number} endDate_day Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		 * @param {number} endDate_month Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		 * @param {number} endDate_year Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		 * @param {number} pageSize Requested page size. Server may return fewer TrafficStats than requested. If unspecified, server will pick an appropriate default.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any. This is the value of ListTrafficStatsResponse.next_page_token returned from the previous call to `ListTrafficStats` method.
		 * @param {number} startDate_day Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		 * @param {number} startDate_month Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		 * @param {number} startDate_year Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		 * @return {ListTrafficStatsResponse} Successful response
		 */
		Gmailpostmastertools_domains_trafficStats_list(parent: string, endDate_day: number | null | undefined, endDate_month: number | null | undefined, endDate_year: number | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, startDate_day: number | null | undefined, startDate_month: number | null | undefined, startDate_year: number | null | undefined): Observable<ListTrafficStatsResponse> {
			return this.http.get<ListTrafficStatsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/trafficStats&endDate_day=' + endDate_day + '&endDate_month=' + endDate_month + '&endDate_year=' + endDate_year + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&startDate_day=' + startDate_day + '&startDate_month=' + startDate_month + '&startDate_year=' + startDate_year, {});
		}
	}

}

