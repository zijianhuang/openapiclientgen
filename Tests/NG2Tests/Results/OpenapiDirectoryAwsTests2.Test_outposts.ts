import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateOutpostOutput {

		/** Information about an Outpost. */
		Outpost?: Outpost | null;
	}


	/** Information about an Outpost. */
	export interface Outpost {

		/**
		 * The ID of the Outpost.
		 * Max length: 180
		 * Min length: 1
		 * Pattern: ^(arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:outpost/)?op-[a-f0-9]{17}$
		 */
		OutpostId?: string | null;

		/**
		 * The AWS account ID of the Outpost owner.
		 * Max length: 12
		 * Min length: 12
		 * Pattern: \d{12}
		 */
		OwnerId?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the Outpost.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:outpost/op-[a-f0-9]{17}$
		 */
		OutpostArn?: string | null;

		/**
		 * The ID of the site.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: os-[a-f0-9]{17}
		 */
		SiteId?: string | null;

		/**
		 * The name of the Outpost.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^[\S ]+$
		 */
		Name?: string | null;

		/**
		 * The Outpost description.
		 * Max length: 1000
		 * Min length: 1
		 * Pattern: ^[\S ]+$
		 */
		Description?: string | null;

		/** The life cycle status. */
		LifeCycleStatus?: string | null;

		/**
		 * <p>The Availability Zone.</p> <p>You must specify <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code>.</p>
		 * Max length: 1000
		 * Min length: 1
		 * Pattern: [a-z\d-]+
		 */
		AvailabilityZone?: string | null;

		/**
		 * <p>The ID of the Availability Zone.</p> <p>You must specify <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code>.</p>
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-z]+[0-9]+-az[0-9]+
		 */
		AvailabilityZoneId?: string | null;
	}

	export interface ValidationException {
	}

	export interface NotFoundException {
	}

	export interface AccessDeniedException {
	}

	export interface InternalServerException {
	}

	export interface ServiceQuotaExceededException {
	}

	export interface DeleteOutpostOutput {
	}

	export interface DeleteSiteOutput {
	}

	export interface GetOutpostOutput {

		/** Information about an Outpost. */
		Outpost?: Outpost | null;
	}

	export interface GetOutpostInstanceTypesOutput {

		/** Information about the instance types. */
		InstanceTypes?: Array<InstanceTypeItem> | null;

		/**
		 * The pagination token.
		 * Max length: 1005
		 * Min length: 1
		 * Pattern: .*\S.*
		 */
		NextToken?: string | null;

		/**
		 * The ID of the Outpost.
		 * Max length: 180
		 * Min length: 1
		 * Pattern: ^(arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:outpost/)?op-[a-f0-9]{17}$
		 */
		OutpostId?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the Outpost.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:outpost/op-[a-f0-9]{17}$
		 */
		OutpostArn?: string | null;
	}


	/** Information about an instance type. */
	export interface InstanceTypeItem {

		/** The instance type. */
		InstanceType?: string | null;
	}

	export interface ListOutpostsOutput {

		/** Information about the Outposts. */
		Outposts?: Array<Outpost> | null;

		/**
		 * The pagination token.
		 * Max length: 1005
		 * Min length: 1
		 * Pattern: .*\S.*
		 */
		NextToken?: string | null;
	}

	export interface ListSitesOutput {

		/** Information about the sites. */
		Sites?: Array<Site> | null;

		/**
		 * The pagination token.
		 * Max length: 1005
		 * Min length: 1
		 * Pattern: .*\S.*
		 */
		NextToken?: string | null;
	}


	/** Information about a site. */
	export interface Site {

		/**
		 * The ID of the site.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: os-[a-f0-9]{17}
		 */
		SiteId?: string | null;

		/**
		 * The ID of the AWS account.
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId?: string | null;

		/**
		 * The name of the site.
		 * Max length: 1000
		 * Min length: 1
		 * Pattern: ^[\S ]+$
		 */
		Name?: string | null;

		/**
		 * The description of the site.
		 * Max length: 1000
		 * Min length: 1
		 * Pattern: ^[\S ]+$
		 */
		Description?: string | null;
	}

	export interface CreateOutpostInput {

		/**
		 * The name of the Outpost.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^[\S ]+$
		 */
		Name?: string | null;

		/**
		 * The Outpost description.
		 * Max length: 1000
		 * Min length: 1
		 * Pattern: ^[\S ]+$
		 */
		Description?: string | null;

		/**
		 * The ID of the site.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: os-[a-f0-9]{17}
		 */
		SiteId: string;

		/**
		 * <p>The Availability Zone.</p> <p>You must specify <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code>.</p>
		 * Max length: 1000
		 * Min length: 1
		 * Pattern: [a-z\d-]+
		 */
		AvailabilityZone?: string | null;

		/**
		 * <p>The ID of the Availability Zone.</p> <p>You must specify <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code>.</p>
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-z]+[0-9]+-az[0-9]+
		 */
		AvailabilityZoneId?: string | null;
	}

	export interface DeleteOutpostInput {
	}

	export interface DeleteSiteInput {
	}

	export interface GetOutpostInput {
	}

	export interface GetOutpostInstanceTypesInput {
	}

	export interface ListOutpostsInput {
	}

	export interface ListSitesInput {
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates an Outpost.
		 * Post outposts
		 * @return {CreateOutpostOutput} Success
		 */
		CreateOutpost(requestBody: CreateOutpostPostBody): Observable<CreateOutpostOutput> {
			return this.http.post<CreateOutpostOutput>(this.baseUri + 'outposts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the Outposts for your AWS account.
		 * Get outposts
		 * @return {ListOutpostsOutput} Success
		 */
		ListOutposts(NextToken: string, MaxResults: number): Observable<ListOutpostsOutput> {
			return this.http.get<ListOutpostsOutput>(this.baseUri + 'outposts?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults, {});
		}

		/**
		 * Deletes the Outpost.
		 * Delete outposts/{OutpostId}
		 * @return {DeleteOutpostOutput} Success
		 */
		DeleteOutpost(OutpostId: string): Observable<DeleteOutpostOutput> {
			return this.http.delete<DeleteOutpostOutput>(this.baseUri + 'outposts/' + (OutpostId == null ? '' : encodeURIComponent(OutpostId)), {});
		}

		/**
		 * Gets information about the specified Outpost.
		 * Get outposts/{OutpostId}
		 * @return {GetOutpostOutput} Success
		 */
		GetOutpost(OutpostId: string): Observable<GetOutpostOutput> {
			return this.http.get<GetOutpostOutput>(this.baseUri + 'outposts/' + (OutpostId == null ? '' : encodeURIComponent(OutpostId)), {});
		}

		/**
		 * Deletes the site.
		 * Delete sites/{SiteId}
		 * @return {DeleteSiteOutput} Success
		 */
		DeleteSite(SiteId: string): Observable<DeleteSiteOutput> {
			return this.http.delete<DeleteSiteOutput>(this.baseUri + 'sites/' + (SiteId == null ? '' : encodeURIComponent(SiteId)), {});
		}

		/**
		 * Lists the instance types for the specified Outpost.
		 * Get outposts/{OutpostId}/instanceTypes
		 * @return {GetOutpostInstanceTypesOutput} Success
		 */
		GetOutpostInstanceTypes(OutpostId: string, NextToken: string, MaxResults: number): Observable<GetOutpostInstanceTypesOutput> {
			return this.http.get<GetOutpostInstanceTypesOutput>(this.baseUri + 'outposts/' + (OutpostId == null ? '' : encodeURIComponent(OutpostId)) + '/instanceTypes&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults, {});
		}

		/**
		 * Lists the sites for the specified AWS account.
		 * Get sites
		 * @return {ListSitesOutput} Success
		 */
		ListSites(NextToken: string, MaxResults: number): Observable<ListSitesOutput> {
			return this.http.get<ListSitesOutput>(this.baseUri + 'sites?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults, {});
		}
	}

	export interface CreateOutpostPostBody {

		/**
		 * The name of the Outpost.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^[\S ]+$
		 */
		Name?: string | null;

		/**
		 * The Outpost description.
		 * Max length: 1000
		 * Min length: 1
		 * Pattern: ^[\S ]+$
		 */
		Description?: string | null;

		/**
		 * The ID of the site.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: os-[a-f0-9]{17}
		 */
		SiteId: string;

		/**
		 * <p>The Availability Zone.</p> <p>You must specify <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code>.</p>
		 * Max length: 1000
		 * Min length: 1
		 * Pattern: [a-z\d-]+
		 */
		AvailabilityZone?: string | null;

		/**
		 * <p>The ID of the Availability Zone.</p> <p>You must specify <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code>.</p>
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-z]+[0-9]+-az[0-9]+
		 */
		AvailabilityZoneId?: string | null;
	}

}

