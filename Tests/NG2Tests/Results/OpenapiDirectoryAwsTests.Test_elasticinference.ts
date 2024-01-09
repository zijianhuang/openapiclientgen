import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DescribeAcceleratorOfferingsResponse {

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		acceleratorTypeOfferings?: Array<AcceleratorTypeOffering>;
	}
	export interface DescribeAcceleratorOfferingsResponseFormProperties {
	}
	export function CreateDescribeAcceleratorOfferingsResponseFormGroup() {
		return new FormGroup<DescribeAcceleratorOfferingsResponseFormProperties>({
		});

	}


	/**  The offering for an Elastic Inference Accelerator type.  */
	export interface AcceleratorTypeOffering {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		acceleratorType?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		locationType?: AcceleratorTypeOfferingLocationType | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		location?: string | null;
	}

	/**  The offering for an Elastic Inference Accelerator type.  */
	export interface AcceleratorTypeOfferingFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		acceleratorType: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		locationType: FormControl<AcceleratorTypeOfferingLocationType | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		location: FormControl<string | null | undefined>,
	}
	export function CreateAcceleratorTypeOfferingFormGroup() {
		return new FormGroup<AcceleratorTypeOfferingFormProperties>({
			acceleratorType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('^\S+$')]),
			locationType: new FormControl<AcceleratorTypeOfferingLocationType | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
			location: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
		});

	}

	export enum AcceleratorTypeOfferingLocationType { region = 0, availability_zone = 1, availability_zone_id = 2 }

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
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

	export interface DescribeAcceleratorTypesResponse {

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		acceleratorTypes?: Array<AcceleratorType>;
	}
	export interface DescribeAcceleratorTypesResponseFormProperties {
	}
	export function CreateDescribeAcceleratorTypesResponseFormGroup() {
		return new FormGroup<DescribeAcceleratorTypesResponseFormProperties>({
		});

	}


	/**  The details of an Elastic Inference Accelerator type.  */
	export interface AcceleratorType {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		acceleratorTypeName?: string | null;

		/** The memory information of an Elastic Inference Accelerator type. */
		memoryInfo?: MemoryInfo;

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		throughputInfo?: Array<KeyValuePair>;
	}

	/**  The details of an Elastic Inference Accelerator type.  */
	export interface AcceleratorTypeFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		acceleratorTypeName: FormControl<string | null | undefined>,
	}
	export function CreateAcceleratorTypeFormGroup() {
		return new FormGroup<AcceleratorTypeFormProperties>({
			acceleratorTypeName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('^\S+$')]),
		});

	}


	/**  The memory information of an Elastic Inference Accelerator type.  */
	export interface MemoryInfo {
		sizeInMiB?: number | null;
	}

	/**  The memory information of an Elastic Inference Accelerator type.  */
	export interface MemoryInfoFormProperties {
		sizeInMiB: FormControl<number | null | undefined>,
	}
	export function CreateMemoryInfoFormGroup() {
		return new FormGroup<MemoryInfoFormProperties>({
			sizeInMiB: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  A throughput entry for an Elastic Inference Accelerator type.  */
	export interface KeyValuePair {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		key?: string | null;
		value?: number | null;
	}

	/**  A throughput entry for an Elastic Inference Accelerator type.  */
	export interface KeyValuePairFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		key: FormControl<string | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateKeyValuePairFormGroup() {
		return new FormGroup<KeyValuePairFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('^\S+$')]),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeAcceleratorsResponse {
		acceleratorSet?: Array<ElasticInferenceAccelerator>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface DescribeAcceleratorsResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAcceleratorsResponseFormGroup() {
		return new FormGroup<DescribeAcceleratorsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('^[A-Za-z0-9+/]+={0,2}$')]),
		});

	}


	/**  The details of an Elastic Inference Accelerator.  */
	export interface ElasticInferenceAccelerator {

		/** The health details of an Elastic Inference Accelerator. */
		acceleratorHealth?: ElasticInferenceAcceleratorHealth;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		acceleratorType?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		acceleratorId?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		availabilityZone?: string | null;

		/**
		 * Max length: 1283
		 * Min length: 1
		 */
		attachedResource?: string | null;
	}

	/**  The details of an Elastic Inference Accelerator.  */
	export interface ElasticInferenceAcceleratorFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		acceleratorType: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		acceleratorId: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		availabilityZone: FormControl<string | null | undefined>,

		/**
		 * Max length: 1283
		 * Min length: 1
		 */
		attachedResource: FormControl<string | null | undefined>,
	}
	export function CreateElasticInferenceAcceleratorFormGroup() {
		return new FormGroup<ElasticInferenceAcceleratorFormProperties>({
			acceleratorType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('^\S+$')]),
			acceleratorId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('^eia-[0-9a-f]+$')]),
			availabilityZone: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
			attachedResource: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1283), Validators.minLength(1)]),
		});

	}


	/**  The health details of an Elastic Inference Accelerator.  */
	export interface ElasticInferenceAcceleratorHealth {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		status?: string | null;
	}

	/**  The health details of an Elastic Inference Accelerator.  */
	export interface ElasticInferenceAcceleratorHealthFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		status: FormControl<string | null | undefined>,
	}
	export function CreateElasticInferenceAcceleratorHealthFormGroup() {
		return new FormGroup<ElasticInferenceAcceleratorHealthFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
		});

	}


	/**  A filter expression for the Elastic Inference Accelerator list.  */
	export interface Filter {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		values?: Array<string>;
	}

	/**  A filter expression for the Elastic Inference Accelerator list.  */
	export interface FilterFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('^\S+$')]),
		});

	}

	export interface ListTagsForResourceResult {
		tags?: TagMap;
	}
	export interface ListTagsForResourceResultFormProperties {
	}
	export function CreateListTagsForResourceResultFormGroup() {
		return new FormGroup<ListTagsForResourceResultFormProperties>({
		});

	}

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}

	export interface TagResourceResult {
	}
	export interface TagResourceResultFormProperties {
	}
	export function CreateTagResourceResultFormGroup() {
		return new FormGroup<TagResourceResultFormProperties>({
		});

	}

	export interface UntagResourceResult {
	}
	export interface UntagResourceResultFormProperties {
	}
	export function CreateUntagResourceResultFormGroup() {
		return new FormGroup<UntagResourceResultFormProperties>({
		});

	}

	export enum LocationType { region = 0, availability_zone = 1, availability_zone_id = 2 }

	export interface DescribeAcceleratorOfferingsRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		locationType: DescribeAcceleratorOfferingsRequestLocationType;

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		acceleratorTypes?: Array<string>;
	}
	export interface DescribeAcceleratorOfferingsRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		locationType: FormControl<DescribeAcceleratorOfferingsRequestLocationType | null | undefined>,
	}
	export function CreateDescribeAcceleratorOfferingsRequestFormGroup() {
		return new FormGroup<DescribeAcceleratorOfferingsRequestFormProperties>({
			locationType: new FormControl<DescribeAcceleratorOfferingsRequestLocationType | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
		});

	}

	export enum DescribeAcceleratorOfferingsRequestLocationType { region = 0, availability_zone = 1, availability_zone_id = 2 }

	export interface DescribeAcceleratorTypesRequest {
	}
	export interface DescribeAcceleratorTypesRequestFormProperties {
	}
	export function CreateDescribeAcceleratorTypesRequestFormGroup() {
		return new FormGroup<DescribeAcceleratorTypesRequestFormProperties>({
		});

	}

	export interface DescribeAcceleratorsRequest {

		/**
		 * Minimum items: 0
		 * Maximum items: 1000
		 */
		acceleratorIds?: Array<string>;

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		filters?: Array<Filter>;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface DescribeAcceleratorsRequestFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAcceleratorsRequestFormGroup() {
		return new FormGroup<DescribeAcceleratorsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('^[A-Za-z0-9+/]+={0,2}$')]),
		});

	}

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		tags: TagMap;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Describes the locations in which a given accelerator type or set of types is present in a given region.
		 * Post describe-accelerator-offerings
		 * @return {DescribeAcceleratorOfferingsResponse} Success
		 */
		DescribeAcceleratorOfferings(requestBody: DescribeAcceleratorOfferingsPostBody): Observable<DescribeAcceleratorOfferingsResponse> {
			return this.http.post<DescribeAcceleratorOfferingsResponse>(this.baseUri + 'describe-accelerator-offerings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the accelerator types available in a given region, as well as their characteristics, such as memory and throughput.
		 * Get describe-accelerator-types
		 * @return {DescribeAcceleratorTypesResponse} Success
		 */
		DescribeAcceleratorTypes(): Observable<DescribeAcceleratorTypesResponse> {
			return this.http.get<DescribeAcceleratorTypesResponse>(this.baseUri + 'describe-accelerator-types', {});
		}

		/**
		 * Describes information over a provided set of accelerators belonging to an account.
		 * Post describe-accelerators
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeAcceleratorsResponse} Success
		 */
		DescribeAccelerators(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeAcceleratorsPostBody): Observable<DescribeAcceleratorsResponse> {
			return this.http.post<DescribeAcceleratorsResponse>(this.baseUri + 'describe-accelerators?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns all tags of an Elastic Inference Accelerator.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn  The ARN of the Elastic Inference Accelerator to list the tags for. 
		 * @return {ListTagsForResourceResult} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResult> {
			return this.http.get<ListTagsForResourceResult>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds the specified tags to an Elastic Inference Accelerator.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn  The ARN of the Elastic Inference Accelerator to tag. 
		 * @return {TagResourceResult} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResult> {
			return this.http.post<TagResourceResult>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified tags from an Elastic Inference Accelerator.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn  The ARN of the Elastic Inference Accelerator to untag. 
		 * @param {Array<string>} tagKeys  The list of tags to remove from the Elastic Inference Accelerator. 
		 * @return {UntagResourceResult} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResult> {
			return this.http.delete<UntagResourceResult>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface DescribeAcceleratorOfferingsPostBody {

		/**
		 * The location type that you want to describe accelerator type offerings for. It can assume the following values: region: will return the accelerator type offering at the regional level. availability-zone: will return the accelerator type offering at the availability zone level. availability-zone-id: will return the accelerator type offering at the availability zone level returning the availability zone id.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		locationType: DescribeAcceleratorOfferingsPostBodyLocationType;

		/**
		 * The list of accelerator types to describe.
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		acceleratorTypes?: Array<string>;
	}
	export interface DescribeAcceleratorOfferingsPostBodyFormProperties {

		/**
		 * The location type that you want to describe accelerator type offerings for. It can assume the following values: region: will return the accelerator type offering at the regional level. availability-zone: will return the accelerator type offering at the availability zone level. availability-zone-id: will return the accelerator type offering at the availability zone level returning the availability zone id.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		locationType: FormControl<DescribeAcceleratorOfferingsPostBodyLocationType | null | undefined>,
	}
	export function CreateDescribeAcceleratorOfferingsPostBodyFormGroup() {
		return new FormGroup<DescribeAcceleratorOfferingsPostBodyFormProperties>({
			locationType: new FormControl<DescribeAcceleratorOfferingsPostBodyLocationType | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
		});

	}

	export enum DescribeAcceleratorOfferingsPostBodyLocationType { region = 0, availability_zone = 1, availability_zone_id = 2 }

	export interface DescribeAcceleratorsPostBody {

		/**
		 * The IDs of the accelerators to describe.
		 * Minimum items: 0
		 * Maximum items: 1000
		 */
		acceleratorIds?: Array<string>;

		/**
		 * One or more filters. Filter names and values are case-sensitive. Valid filter names are: accelerator-types: can provide a list of accelerator type names to filter for. instance-id: can provide a list of EC2 instance ids to filter for.
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		filters?: Array<Filter>;

		/**
		 * The total number of items to return in the command's output. If the total number of items available is more than the value specified, a NextToken is provided in the command's output. To resume pagination, provide the NextToken value in the starting-token argument of a subsequent command. Do not use the NextToken response element directly outside of the AWS CLI.
		 * Minimum: 0
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Max length: 2048
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface DescribeAcceleratorsPostBodyFormProperties {

		/**
		 * The total number of items to return in the command's output. If the total number of items available is more than the value specified, a NextToken is provided in the command's output. To resume pagination, provide the NextToken value in the starting-token argument of a subsequent command. Do not use the NextToken response element directly outside of the AWS CLI.
		 * Minimum: 0
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Max length: 2048
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAcceleratorsPostBodyFormGroup() {
		return new FormGroup<DescribeAcceleratorsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('^[A-Za-z0-9+/]+={0,2}$')]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags to add to the Elastic Inference Accelerator.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags to add to the Elastic Inference Accelerator.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

}

