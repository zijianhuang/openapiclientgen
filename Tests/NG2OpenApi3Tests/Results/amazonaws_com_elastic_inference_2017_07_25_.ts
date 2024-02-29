import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DescribeAcceleratorOfferingsResponse {
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
		acceleratorType?: string;
		locationType?: LocationType;
		location?: string;
	}

	/**  The offering for an Elastic Inference Accelerator type.  */
	export interface AcceleratorTypeOfferingFormProperties {
		acceleratorType: FormControl<string | null | undefined>,
		locationType: FormControl<LocationType | null | undefined>,
		location: FormControl<string | null | undefined>,
	}
	export function CreateAcceleratorTypeOfferingFormGroup() {
		return new FormGroup<AcceleratorTypeOfferingFormProperties>({
			acceleratorType: new FormControl<string | null | undefined>(undefined),
			locationType: new FormControl<LocationType | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LocationType { region = 'region', 'availability-zone' = 'availability-zone', 'availability-zone-id' = 'availability-zone-id' }

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
		acceleratorTypeName?: string;
		memoryInfo?: MemoryInfo;
		throughputInfo?: Array<KeyValuePair>;
	}

	/**  The details of an Elastic Inference Accelerator type.  */
	export interface AcceleratorTypeFormProperties {
		acceleratorTypeName: FormControl<string | null | undefined>,
	}
	export function CreateAcceleratorTypeFormGroup() {
		return new FormGroup<AcceleratorTypeFormProperties>({
			acceleratorTypeName: new FormControl<string | null | undefined>(undefined),
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
		key?: string;
		value?: number | null;
	}

	/**  A throughput entry for an Elastic Inference Accelerator type.  */
	export interface KeyValuePairFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateKeyValuePairFormGroup() {
		return new FormGroup<KeyValuePairFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeAcceleratorsResponse {
		acceleratorSet?: Array<ElasticInferenceAccelerator>;
		nextToken?: string;
	}
	export interface DescribeAcceleratorsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAcceleratorsResponseFormGroup() {
		return new FormGroup<DescribeAcceleratorsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The details of an Elastic Inference Accelerator.  */
	export interface ElasticInferenceAccelerator {
		acceleratorHealth?: ElasticInferenceAcceleratorHealth;
		acceleratorType?: string;
		acceleratorId?: string;
		availabilityZone?: string;
		attachedResource?: string;
	}

	/**  The details of an Elastic Inference Accelerator.  */
	export interface ElasticInferenceAcceleratorFormProperties {
		acceleratorType: FormControl<string | null | undefined>,
		acceleratorId: FormControl<string | null | undefined>,
		availabilityZone: FormControl<string | null | undefined>,
		attachedResource: FormControl<string | null | undefined>,
	}
	export function CreateElasticInferenceAcceleratorFormGroup() {
		return new FormGroup<ElasticInferenceAcceleratorFormProperties>({
			acceleratorType: new FormControl<string | null | undefined>(undefined),
			acceleratorId: new FormControl<string | null | undefined>(undefined),
			availabilityZone: new FormControl<string | null | undefined>(undefined),
			attachedResource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The health details of an Elastic Inference Accelerator.  */
	export interface ElasticInferenceAcceleratorHealth {
		status?: string;
	}

	/**  The health details of an Elastic Inference Accelerator.  */
	export interface ElasticInferenceAcceleratorHealthFormProperties {
		status: FormControl<string | null | undefined>,
	}
	export function CreateElasticInferenceAcceleratorHealthFormGroup() {
		return new FormGroup<ElasticInferenceAcceleratorHealthFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  A filter expression for the Elastic Inference Accelerator list.  */
	export interface Filter {
		name?: string;
		values?: Array<string>;
	}

	/**  A filter expression for the Elastic Inference Accelerator list.  */
	export interface FilterFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
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

	export interface DescribeAcceleratorOfferingsRequest {

		/** Required */
		locationType: LocationType;
		acceleratorTypes?: Array<string>;
	}
	export interface DescribeAcceleratorOfferingsRequestFormProperties {

		/** Required */
		locationType: FormControl<LocationType | null | undefined>,
	}
	export function CreateDescribeAcceleratorOfferingsRequestFormGroup() {
		return new FormGroup<DescribeAcceleratorOfferingsRequestFormProperties>({
			locationType: new FormControl<LocationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAcceleratorTypesRequest {
	}
	export interface DescribeAcceleratorTypesRequestFormProperties {
	}
	export function CreateDescribeAcceleratorTypesRequestFormGroup() {
		return new FormGroup<DescribeAcceleratorTypesRequestFormProperties>({
		});

	}

	export interface DescribeAcceleratorsRequest {
		acceleratorIds?: Array<string>;
		filters?: Array<Filter>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface DescribeAcceleratorsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAcceleratorsRequestFormGroup() {
		return new FormGroup<DescribeAcceleratorsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
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
		 * <p> Describes the locations in which a given accelerator type or set of types is present in a given region. </p> <p> February 15, 2023: Starting April 15, 2023, AWS will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p>
		 * Post describe-accelerator-offerings
		 * @return {DescribeAcceleratorOfferingsResponse} Success
		 */
		DescribeAcceleratorOfferings(requestBody: DescribeAcceleratorOfferingsPostBody): Observable<DescribeAcceleratorOfferingsResponse> {
			return this.http.post<DescribeAcceleratorOfferingsResponse>(this.baseUri + 'describe-accelerator-offerings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Describes the accelerator types available in a given region, as well as their characteristics, such as memory and throughput. </p> <p> February 15, 2023: Starting April 15, 2023, AWS will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p>
		 * Get describe-accelerator-types
		 * @return {DescribeAcceleratorTypesResponse} Success
		 */
		DescribeAcceleratorTypes(): Observable<DescribeAcceleratorTypesResponse> {
			return this.http.get<DescribeAcceleratorTypesResponse>(this.baseUri + 'describe-accelerator-types', {});
		}

		/**
		 * <p> Describes information over a provided set of accelerators belonging to an account. </p> <p> February 15, 2023: Starting April 15, 2023, AWS will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p>
		 * Post describe-accelerators
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeAcceleratorsResponse} Success
		 */
		DescribeAccelerators(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeAcceleratorsPostBody): Observable<DescribeAcceleratorsResponse> {
			return this.http.post<DescribeAcceleratorsResponse>(this.baseUri + 'describe-accelerators?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Returns all tags of an Elastic Inference Accelerator. </p> <p> February 15, 2023: Starting April 15, 2023, AWS will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p>
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn  The ARN of the Elastic Inference Accelerator to list the tags for. 
		 *     Min length: 1    Max length: 1011
		 * @return {ListTagsForResourceResult} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResult> {
			return this.http.get<ListTagsForResourceResult>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * <p> Adds the specified tags to an Elastic Inference Accelerator. </p> <p> February 15, 2023: Starting April 15, 2023, AWS will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p>
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn  The ARN of the Elastic Inference Accelerator to tag. 
		 *     Min length: 1    Max length: 1011
		 * @return {TagResourceResult} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResult> {
			return this.http.post<TagResourceResult>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Removes the specified tags from an Elastic Inference Accelerator. </p> <p> February 15, 2023: Starting April 15, 2023, AWS will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p>
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn  The ARN of the Elastic Inference Accelerator to untag. 
		 *     Min length: 1    Max length: 1011
		 * @param {Array<string>} tagKeys  The list of tags to remove from the Elastic Inference Accelerator. 
		 *     Minimum items: 1    Maximum items: 50
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
		 * Min length: 1
		 * Max length: 256
		 */
		locationType: LocationType;

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
		 * Min length: 1
		 * Max length: 256
		 */
		locationType: FormControl<LocationType | null | undefined>,
	}
	export function CreateDescribeAcceleratorOfferingsPostBodyFormGroup() {
		return new FormGroup<DescribeAcceleratorOfferingsPostBodyFormProperties>({
			locationType: new FormControl<LocationType | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
		});

	}

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
		 * Min length: 1
		 * Max length: 2048
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
		 * Min length: 1
		 * Max length: 2048
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAcceleratorsPostBodyFormGroup() {
		return new FormGroup<DescribeAcceleratorsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^[A-Za-z0-9+/]+={0,2}$')]),
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

