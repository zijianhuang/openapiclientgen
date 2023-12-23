import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateOutpostOutput {

		/** Information about an Outpost. */
		Outpost?: Outpost;
	}
	export interface CreateOutpostOutputFormProperties {
	}
	export function CreateCreateOutpostOutputFormGroup() {
		return new FormGroup<CreateOutpostOutputFormProperties>({
		});

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

	/** Information about an Outpost. */
	export interface OutpostFormProperties {

		/**
		 * The ID of the Outpost.
		 * Max length: 180
		 * Min length: 1
		 * Pattern: ^(arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:outpost/)?op-[a-f0-9]{17}$
		 */
		OutpostId: FormControl<string | null | undefined>,

		/**
		 * The AWS account ID of the Outpost owner.
		 * Max length: 12
		 * Min length: 12
		 * Pattern: \d{12}
		 */
		OwnerId: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the Outpost.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:outpost/op-[a-f0-9]{17}$
		 */
		OutpostArn: FormControl<string | null | undefined>,

		/**
		 * The ID of the site.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: os-[a-f0-9]{17}
		 */
		SiteId: FormControl<string | null | undefined>,

		/**
		 * The name of the Outpost.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^[\S ]+$
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The Outpost description.
		 * Max length: 1000
		 * Min length: 1
		 * Pattern: ^[\S ]+$
		 */
		Description: FormControl<string | null | undefined>,

		/** The life cycle status. */
		LifeCycleStatus: FormControl<string | null | undefined>,

		/**
		 * <p>The Availability Zone.</p> <p>You must specify <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code>.</p>
		 * Max length: 1000
		 * Min length: 1
		 * Pattern: [a-z\d-]+
		 */
		AvailabilityZone: FormControl<string | null | undefined>,

		/**
		 * <p>The ID of the Availability Zone.</p> <p>You must specify <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code>.</p>
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-z]+[0-9]+-az[0-9]+
		 */
		AvailabilityZoneId: FormControl<string | null | undefined>,
	}
	export function CreateOutpostFormGroup() {
		return new FormGroup<OutpostFormProperties>({
			OutpostId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(180), Validators.minLength(1)]),
			OwnerId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(12), Validators.minLength(12)]),
			OutpostArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			SiteId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.minLength(1)]),
			LifeCycleStatus: new FormControl<string | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.minLength(1)]),
			AvailabilityZoneId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface DeleteOutpostOutput {
	}
	export interface DeleteOutpostOutputFormProperties {
	}
	export function CreateDeleteOutpostOutputFormGroup() {
		return new FormGroup<DeleteOutpostOutputFormProperties>({
		});

	}

	export interface DeleteSiteOutput {
	}
	export interface DeleteSiteOutputFormProperties {
	}
	export function CreateDeleteSiteOutputFormGroup() {
		return new FormGroup<DeleteSiteOutputFormProperties>({
		});

	}

	export interface GetOutpostOutput {

		/** Information about an Outpost. */
		Outpost?: Outpost;
	}
	export interface GetOutpostOutputFormProperties {
	}
	export function CreateGetOutpostOutputFormGroup() {
		return new FormGroup<GetOutpostOutputFormProperties>({
		});

	}

	export interface GetOutpostInstanceTypesOutput {

		/** Information about the instance types. */
		InstanceTypes?: Array<InstanceTypeItem>;

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
	export interface GetOutpostInstanceTypesOutputFormProperties {

		/**
		 * The pagination token.
		 * Max length: 1005
		 * Min length: 1
		 * Pattern: .*\S.*
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The ID of the Outpost.
		 * Max length: 180
		 * Min length: 1
		 * Pattern: ^(arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:outpost/)?op-[a-f0-9]{17}$
		 */
		OutpostId: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the Outpost.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:outpost/op-[a-f0-9]{17}$
		 */
		OutpostArn: FormControl<string | null | undefined>,
	}
	export function CreateGetOutpostInstanceTypesOutputFormGroup() {
		return new FormGroup<GetOutpostInstanceTypesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1005), Validators.minLength(1)]),
			OutpostId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(180), Validators.minLength(1)]),
			OutpostArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
		});

	}


	/** Information about an instance type. */
	export interface InstanceTypeItem {

		/** The instance type. */
		InstanceType?: string | null;
	}

	/** Information about an instance type. */
	export interface InstanceTypeItemFormProperties {

		/** The instance type. */
		InstanceType: FormControl<string | null | undefined>,
	}
	export function CreateInstanceTypeItemFormGroup() {
		return new FormGroup<InstanceTypeItemFormProperties>({
			InstanceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListOutpostsOutput {

		/** Information about the Outposts. */
		Outposts?: Array<Outpost>;

		/**
		 * The pagination token.
		 * Max length: 1005
		 * Min length: 1
		 * Pattern: .*\S.*
		 */
		NextToken?: string | null;
	}
	export interface ListOutpostsOutputFormProperties {

		/**
		 * The pagination token.
		 * Max length: 1005
		 * Min length: 1
		 * Pattern: .*\S.*
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOutpostsOutputFormGroup() {
		return new FormGroup<ListOutpostsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1005), Validators.minLength(1)]),
		});

	}

	export interface ListSitesOutput {

		/** Information about the sites. */
		Sites?: Array<Site>;

		/**
		 * The pagination token.
		 * Max length: 1005
		 * Min length: 1
		 * Pattern: .*\S.*
		 */
		NextToken?: string | null;
	}
	export interface ListSitesOutputFormProperties {

		/**
		 * The pagination token.
		 * Max length: 1005
		 * Min length: 1
		 * Pattern: .*\S.*
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSitesOutputFormGroup() {
		return new FormGroup<ListSitesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1005), Validators.minLength(1)]),
		});

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

	/** Information about a site. */
	export interface SiteFormProperties {

		/**
		 * The ID of the site.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: os-[a-f0-9]{17}
		 */
		SiteId: FormControl<string | null | undefined>,

		/**
		 * The ID of the AWS account.
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * The name of the site.
		 * Max length: 1000
		 * Min length: 1
		 * Pattern: ^[\S ]+$
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the site.
		 * Max length: 1000
		 * Min length: 1
		 * Pattern: ^[\S ]+$
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateSiteFormGroup() {
		return new FormGroup<SiteFormProperties>({
			SiteId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(12), Validators.minLength(12)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.minLength(1)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.minLength(1)]),
		});

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
	export interface CreateOutpostInputFormProperties {

		/**
		 * The name of the Outpost.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^[\S ]+$
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The Outpost description.
		 * Max length: 1000
		 * Min length: 1
		 * Pattern: ^[\S ]+$
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The ID of the site.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: os-[a-f0-9]{17}
		 */
		SiteId: FormControl<string | null | undefined>,

		/**
		 * <p>The Availability Zone.</p> <p>You must specify <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code>.</p>
		 * Max length: 1000
		 * Min length: 1
		 * Pattern: [a-z\d-]+
		 */
		AvailabilityZone: FormControl<string | null | undefined>,

		/**
		 * <p>The ID of the Availability Zone.</p> <p>You must specify <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code>.</p>
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-z]+[0-9]+-az[0-9]+
		 */
		AvailabilityZoneId: FormControl<string | null | undefined>,
	}
	export function CreateCreateOutpostInputFormGroup() {
		return new FormGroup<CreateOutpostInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.minLength(1)]),
			SiteId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.minLength(1)]),
			AvailabilityZoneId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
		});

	}

	export interface DeleteOutpostInput {
	}
	export interface DeleteOutpostInputFormProperties {
	}
	export function CreateDeleteOutpostInputFormGroup() {
		return new FormGroup<DeleteOutpostInputFormProperties>({
		});

	}

	export interface DeleteSiteInput {
	}
	export interface DeleteSiteInputFormProperties {
	}
	export function CreateDeleteSiteInputFormGroup() {
		return new FormGroup<DeleteSiteInputFormProperties>({
		});

	}

	export interface GetOutpostInput {
	}
	export interface GetOutpostInputFormProperties {
	}
	export function CreateGetOutpostInputFormGroup() {
		return new FormGroup<GetOutpostInputFormProperties>({
		});

	}

	export interface GetOutpostInstanceTypesInput {
	}
	export interface GetOutpostInstanceTypesInputFormProperties {
	}
	export function CreateGetOutpostInstanceTypesInputFormGroup() {
		return new FormGroup<GetOutpostInstanceTypesInputFormProperties>({
		});

	}

	export interface ListOutpostsInput {
	}
	export interface ListOutpostsInputFormProperties {
	}
	export function CreateListOutpostsInputFormGroup() {
		return new FormGroup<ListOutpostsInputFormProperties>({
		});

	}

	export interface ListSitesInput {
	}
	export interface ListSitesInputFormProperties {
	}
	export function CreateListSitesInputFormGroup() {
		return new FormGroup<ListSitesInputFormProperties>({
		});

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
		ListOutposts(NextToken: string | null | undefined, MaxResults: number | null | undefined): Observable<ListOutpostsOutput> {
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
		GetOutpostInstanceTypes(OutpostId: string, NextToken: string | null | undefined, MaxResults: number | null | undefined): Observable<GetOutpostInstanceTypesOutput> {
			return this.http.get<GetOutpostInstanceTypesOutput>(this.baseUri + 'outposts/' + (OutpostId == null ? '' : encodeURIComponent(OutpostId)) + '/instanceTypes&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults, {});
		}

		/**
		 * Lists the sites for the specified AWS account.
		 * Get sites
		 * @return {ListSitesOutput} Success
		 */
		ListSites(NextToken: string | null | undefined, MaxResults: number | null | undefined): Observable<ListSitesOutput> {
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
	export interface CreateOutpostPostBodyFormProperties {

		/**
		 * The name of the Outpost.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^[\S ]+$
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The Outpost description.
		 * Max length: 1000
		 * Min length: 1
		 * Pattern: ^[\S ]+$
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The ID of the site.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: os-[a-f0-9]{17}
		 */
		SiteId: FormControl<string | null | undefined>,

		/**
		 * <p>The Availability Zone.</p> <p>You must specify <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code>.</p>
		 * Max length: 1000
		 * Min length: 1
		 * Pattern: [a-z\d-]+
		 */
		AvailabilityZone: FormControl<string | null | undefined>,

		/**
		 * <p>The ID of the Availability Zone.</p> <p>You must specify <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code>.</p>
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-z]+[0-9]+-az[0-9]+
		 */
		AvailabilityZoneId: FormControl<string | null | undefined>,
	}
	export function CreateCreateOutpostPostBodyFormGroup() {
		return new FormGroup<CreateOutpostPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.minLength(1)]),
			SiteId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.minLength(1)]),
			AvailabilityZoneId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
		});

	}

}

