import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface DescribeAcceleratorOfferingsResponse {
		acceleratorTypeOfferings?: Array<AcceleratorTypeOffering>;
	}


	/**  The offering for an Elastic Inference Accelerator type.  */
	export interface AcceleratorTypeOffering {
		acceleratorType?: string;
		locationType?: AcceleratorTypeOfferingLocationType;
		location?: string;
	}

	export enum AcceleratorTypeOfferingLocationType { region = 0, availability_zone = 1, availability_zone_id = 2 }

	export interface BadRequestException {
	}

	export interface ResourceNotFoundException {
	}

	export interface InternalServerException {
	}

	export interface DescribeAcceleratorTypesResponse {
		acceleratorTypes?: Array<AcceleratorType>;
	}


	/**  The details of an Elastic Inference Accelerator type.  */
	export interface AcceleratorType {
		acceleratorTypeName?: string;

		/** The memory information of an Elastic Inference Accelerator type. */
		memoryInfo?: MemoryInfo;
		throughputInfo?: Array<KeyValuePair>;
	}


	/**  The memory information of an Elastic Inference Accelerator type.  */
	export interface MemoryInfo {
		sizeInMiB?: number;
	}


	/**  A throughput entry for an Elastic Inference Accelerator type.  */
	export interface KeyValuePair {
		key?: string;
		value?: number;
	}

	export interface DescribeAcceleratorsResponse {
		acceleratorSet?: Array<ElasticInferenceAccelerator>;
		nextToken?: string;
	}


	/**  The details of an Elastic Inference Accelerator.  */
	export interface ElasticInferenceAccelerator {

		/** The health details of an Elastic Inference Accelerator. */
		acceleratorHealth?: ElasticInferenceAcceleratorHealth;
		acceleratorType?: string;
		acceleratorId?: string;
		availabilityZone?: string;
		attachedResource?: string;
	}


	/**  The health details of an Elastic Inference Accelerator.  */
	export interface ElasticInferenceAcceleratorHealth {
		status?: string;
	}


	/**  A filter expression for the Elastic Inference Accelerator list.  */
	export interface Filter {
		name?: string;
		values?: Array<string>;
	}

	export interface ListTagsForResourceResult {
		tags?: TagMap;
	}

	export interface TagMap {
	}

	export interface TagResourceResult {
	}

	export interface UntagResourceResult {
	}

	export enum LocationType { region = 0, availability_zone = 1, availability_zone_id = 2 }

	export interface DescribeAcceleratorOfferingsRequest {
		locationType: DescribeAcceleratorOfferingsRequestLocationType;
		acceleratorTypes?: Array<string>;
	}

	export enum DescribeAcceleratorOfferingsRequestLocationType { region = 0, availability_zone = 1, availability_zone_id = 2 }

	export interface DescribeAcceleratorTypesRequest {
	}

	export interface DescribeAcceleratorsRequest {
		acceleratorIds?: Array<string>;
		filters?: Array<Filter>;
		maxResults?: number;
		nextToken?: string;
	}

	export interface ListTagsForResourceRequest {
	}

	export interface TagResourceRequest {
		tags: TagMap;
	}

	export interface UntagResourceRequest {
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
		DescribeAccelerators(maxResults: string, nextToken: string, requestBody: DescribeAcceleratorsPostBody): Observable<DescribeAcceleratorsResponse> {
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
		maxResults?: number;

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: ^[A-Za-z0-9+/]+={0,2}$
		 */
		nextToken?: string;
	}

	export interface TagResourcePostBody {

		/** The tags to add to the Elastic Inference Accelerator. */
		tags: {[id: string]: string };
	}

}

