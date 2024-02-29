import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateEndpointResult {
		EndpointArn?: string;
	}
	export interface CreateEndpointResultFormProperties {
		EndpointArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateEndpointResultFormGroup() {
		return new FormGroup<CreateEndpointResultFormProperties>({
			EndpointArn: new FormControl<string | null | undefined>(undefined),
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

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
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

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface OutpostOfflineException {
	}
	export interface OutpostOfflineExceptionFormProperties {
	}
	export function CreateOutpostOfflineExceptionFormGroup() {
		return new FormGroup<OutpostOfflineExceptionFormProperties>({
		});

	}

	export interface ListEndpointsResult {
		Endpoints?: Array<Endpoint>;
		NextToken?: string;
	}
	export interface ListEndpointsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEndpointsResultFormGroup() {
		return new FormGroup<ListEndpointsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Amazon S3 on Outposts Access Points simplify managing data access at scale for shared datasets in S3 on Outposts. S3 on Outposts uses endpoints to connect to Outposts buckets so that you can perform actions within your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/WorkingWithS3Outposts.html"> Accessing S3 on Outposts using VPC-only access points</a> in the <i>Amazon Simple Storage Service User Guide</i>. */
	export interface Endpoint {
		EndpointArn?: string;
		OutpostsId?: string;
		CidrBlock?: string;
		Status?: EndpointStatus;
		CreationTime?: Date;
		NetworkInterfaces?: Array<NetworkInterface>;
		VpcId?: string;
		SubnetId?: string;
		SecurityGroupId?: string;
		AccessType?: EndpointAccessType;
		CustomerOwnedIpv4Pool?: string;
		FailedReason?: FailedReason;
	}

	/** Amazon S3 on Outposts Access Points simplify managing data access at scale for shared datasets in S3 on Outposts. S3 on Outposts uses endpoints to connect to Outposts buckets so that you can perform actions within your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/WorkingWithS3Outposts.html"> Accessing S3 on Outposts using VPC-only access points</a> in the <i>Amazon Simple Storage Service User Guide</i>. */
	export interface EndpointFormProperties {
		EndpointArn: FormControl<string | null | undefined>,
		OutpostsId: FormControl<string | null | undefined>,
		CidrBlock: FormControl<string | null | undefined>,
		Status: FormControl<EndpointStatus | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		SubnetId: FormControl<string | null | undefined>,
		SecurityGroupId: FormControl<string | null | undefined>,
		AccessType: FormControl<EndpointAccessType | null | undefined>,
		CustomerOwnedIpv4Pool: FormControl<string | null | undefined>,
	}
	export function CreateEndpointFormGroup() {
		return new FormGroup<EndpointFormProperties>({
			EndpointArn: new FormControl<string | null | undefined>(undefined),
			OutpostsId: new FormControl<string | null | undefined>(undefined),
			CidrBlock: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<EndpointStatus | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			SubnetId: new FormControl<string | null | undefined>(undefined),
			SecurityGroupId: new FormControl<string | null | undefined>(undefined),
			AccessType: new FormControl<EndpointAccessType | null | undefined>(undefined),
			CustomerOwnedIpv4Pool: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EndpointStatus { Pending = 'Pending', Available = 'Available', Deleting = 'Deleting', Create_Failed = 'Create_Failed', Delete_Failed = 'Delete_Failed' }


	/** The container for the network interface. */
	export interface NetworkInterface {
		NetworkInterfaceId?: string;
	}

	/** The container for the network interface. */
	export interface NetworkInterfaceFormProperties {
		NetworkInterfaceId: FormControl<string | null | undefined>,
	}
	export function CreateNetworkInterfaceFormGroup() {
		return new FormGroup<NetworkInterfaceFormProperties>({
			NetworkInterfaceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EndpointAccessType { Private = 'Private', CustomerOwnedIp = 'CustomerOwnedIp' }


	/** The failure reason, if any, for a create or delete endpoint operation. */
	export interface FailedReason {
		ErrorCode?: string;
		Message?: string;
	}

	/** The failure reason, if any, for a create or delete endpoint operation. */
	export interface FailedReasonFormProperties {
		ErrorCode: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateFailedReasonFormGroup() {
		return new FormGroup<FailedReasonFormProperties>({
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListOutpostsWithS3Result {
		Outposts?: Array<Outpost>;
		NextToken?: string;
	}
	export interface ListOutpostsWithS3ResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOutpostsWithS3ResultFormGroup() {
		return new FormGroup<ListOutpostsWithS3ResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the details for the Outpost object. */
	export interface Outpost {
		OutpostArn?: string;
		OutpostId?: string;
		OwnerId?: string;
		CapacityInBytes?: number | null;
	}

	/** Contains the details for the Outpost object. */
	export interface OutpostFormProperties {
		OutpostArn: FormControl<string | null | undefined>,
		OutpostId: FormControl<string | null | undefined>,
		OwnerId: FormControl<string | null | undefined>,
		CapacityInBytes: FormControl<number | null | undefined>,
	}
	export function CreateOutpostFormGroup() {
		return new FormGroup<OutpostFormProperties>({
			OutpostArn: new FormControl<string | null | undefined>(undefined),
			OutpostId: new FormControl<string | null | undefined>(undefined),
			OwnerId: new FormControl<string | null | undefined>(undefined),
			CapacityInBytes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSharedEndpointsResult {
		Endpoints?: Array<Endpoint>;
		NextToken?: string;
	}
	export interface ListSharedEndpointsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSharedEndpointsResultFormGroup() {
		return new FormGroup<ListSharedEndpointsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateEndpointRequest {

		/** Required */
		OutpostId: string;

		/** Required */
		SubnetId: string;

		/** Required */
		SecurityGroupId: string;
		AccessType?: EndpointAccessType;
		CustomerOwnedIpv4Pool?: string;
	}
	export interface CreateEndpointRequestFormProperties {

		/** Required */
		OutpostId: FormControl<string | null | undefined>,

		/** Required */
		SubnetId: FormControl<string | null | undefined>,

		/** Required */
		SecurityGroupId: FormControl<string | null | undefined>,
		AccessType: FormControl<EndpointAccessType | null | undefined>,
		CustomerOwnedIpv4Pool: FormControl<string | null | undefined>,
	}
	export function CreateCreateEndpointRequestFormGroup() {
		return new FormGroup<CreateEndpointRequestFormProperties>({
			OutpostId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SubnetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecurityGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AccessType: new FormControl<EndpointAccessType | null | undefined>(undefined),
			CustomerOwnedIpv4Pool: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteEndpointRequest {
	}
	export interface DeleteEndpointRequestFormProperties {
	}
	export function CreateDeleteEndpointRequestFormGroup() {
		return new FormGroup<DeleteEndpointRequestFormProperties>({
		});

	}

	export interface ListEndpointsRequest {
	}
	export interface ListEndpointsRequestFormProperties {
	}
	export function CreateListEndpointsRequestFormGroup() {
		return new FormGroup<ListEndpointsRequestFormProperties>({
		});

	}

	export interface ListOutpostsWithS3Request {
	}
	export interface ListOutpostsWithS3RequestFormProperties {
	}
	export function CreateListOutpostsWithS3RequestFormGroup() {
		return new FormGroup<ListOutpostsWithS3RequestFormProperties>({
		});

	}

	export interface ListSharedEndpointsRequest {
	}
	export interface ListSharedEndpointsRequestFormProperties {
	}
	export function CreateListSharedEndpointsRequestFormGroup() {
		return new FormGroup<ListSharedEndpointsRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates an endpoint and associates it with the specified Outpost.</p> <note> <p>It can take up to 5 minutes for this action to finish.</p> </note> <p/> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_DeleteEndpoint.html">DeleteEndpoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_ListEndpoints.html">ListEndpoints</a> </p> </li> </ul>
		 * Post S3Outposts/CreateEndpoint
		 * @return {CreateEndpointResult} Success
		 */
		CreateEndpoint(requestBody: CreateEndpointPostBody): Observable<CreateEndpointResult> {
			return this.http.post<CreateEndpointResult>(this.baseUri + 'S3Outposts/CreateEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an endpoint.</p> <note> <p>It can take up to 5 minutes for this action to finish.</p> </note> <p/> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_CreateEndpoint.html">CreateEndpoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_ListEndpoints.html">ListEndpoints</a> </p> </li> </ul>
		 * Delete S3Outposts/DeleteEndpoint#endpointId&outpostId
		 * @param {string} endpointId The ID of the endpoint.
		 * @param {string} outpostId The ID of the Outposts. 
		 * @return {void} Success
		 */
		DeleteEndpoint(endpointId: string, outpostId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'S3Outposts/DeleteEndpoint#endpointId&outpostId?endpointId=' + (endpointId == null ? '' : encodeURIComponent(endpointId)) + '&outpostId=' + (outpostId == null ? '' : encodeURIComponent(outpostId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists endpoints associated with the specified Outpost. </p> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_CreateEndpoint.html">CreateEndpoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_DeleteEndpoint.html">DeleteEndpoint</a> </p> </li> </ul>
		 * Get S3Outposts/ListEndpoints
		 * @param {string} nextToken If a previous response from this operation included a <code>NextToken</code> value, provide that value here to retrieve the next page of results.
		 *     Min length: 1    Max length: 1024
		 * @param {number} maxResults The maximum number of endpoints that will be returned in the response.
		 *     Minimum: 0    Maximum: 100
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListEndpointsResult} Success
		 */
		ListEndpoints(nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListEndpointsResult> {
			return this.http.get<ListEndpointsResult>(this.baseUri + 'S3Outposts/ListEndpoints?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists the Outposts with S3 on Outposts capacity for your Amazon Web Services account. Includes S3 on Outposts that you have access to as the Outposts owner, or as a shared user from Resource Access Manager (RAM).
		 * Get S3Outposts/ListOutpostsWithS3
		 * @param {string} nextToken When you can get additional results from the <code>ListOutpostsWithS3</code> call, a <code>NextToken</code> parameter is returned in the output. You can then pass in a subsequent command to the <code>NextToken</code> parameter to continue listing additional Outposts.
		 *     Min length: 1    Max length: 1024
		 * @param {number} maxResults The maximum number of Outposts to return. The limit is 100.
		 *     Minimum: 0    Maximum: 100
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListOutpostsWithS3Result} Success
		 */
		ListOutpostsWithS3(nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListOutpostsWithS3Result> {
			return this.http.get<ListOutpostsWithS3Result>(this.baseUri + 'S3Outposts/ListOutpostsWithS3?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Lists all endpoints associated with an Outpost that has been shared by Amazon Web Services Resource Access Manager (RAM).</p> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_CreateEndpoint.html">CreateEndpoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_DeleteEndpoint.html">DeleteEndpoint</a> </p> </li> </ul>
		 * Get S3Outposts/ListSharedEndpoints#outpostId
		 * @param {string} nextToken If a previous response from this operation included a <code>NextToken</code> value, you can provide that value here to retrieve the next page of results.
		 *     Min length: 1    Max length: 1024
		 * @param {number} maxResults The maximum number of endpoints that will be returned in the response.
		 *     Minimum: 0    Maximum: 100
		 * @param {string} outpostId The ID of the Amazon Web Services Outpost.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSharedEndpointsResult} Success
		 */
		ListSharedEndpoints(nextToken: string | null | undefined, maxResults: number | null | undefined, outpostId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListSharedEndpointsResult> {
			return this.http.get<ListSharedEndpointsResult>(this.baseUri + 'S3Outposts/ListSharedEndpoints#outpostId?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&outpostId=' + (outpostId == null ? '' : encodeURIComponent(outpostId)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}
	}

	export interface CreateEndpointPostBody {

		/**
		 * The ID of the Outposts.
		 * Required
		 */
		OutpostId: string;

		/**
		 * The ID of the subnet in the selected VPC. The endpoint subnet must belong to the Outpost that has Amazon S3 on Outposts provisioned.
		 * Required
		 */
		SubnetId: string;

		/**
		 * The ID of the security group to use with the endpoint.
		 * Required
		 */
		SecurityGroupId: string;

		/** <p>The type of access for the network connectivity for the Amazon S3 on Outposts endpoint. To use the Amazon Web Services VPC, choose <code>Private</code>. To use the endpoint with an on-premises network, choose <code>CustomerOwnedIp</code>. If you choose <code>CustomerOwnedIp</code>, you must also provide the customer-owned IP address pool (CoIP pool).</p> <note> <p> <code>Private</code> is the default access type value.</p> </note> */
		AccessType?: EndpointAccessType | null;

		/** The ID of the customer-owned IPv4 address pool (CoIP pool) for the endpoint. IP addresses are allocated from this pool for the endpoint. */
		CustomerOwnedIpv4Pool?: string | null;
	}
	export interface CreateEndpointPostBodyFormProperties {

		/**
		 * The ID of the Outposts.
		 * Required
		 */
		OutpostId: FormControl<string | null | undefined>,

		/**
		 * The ID of the subnet in the selected VPC. The endpoint subnet must belong to the Outpost that has Amazon S3 on Outposts provisioned.
		 * Required
		 */
		SubnetId: FormControl<string | null | undefined>,

		/**
		 * The ID of the security group to use with the endpoint.
		 * Required
		 */
		SecurityGroupId: FormControl<string | null | undefined>,

		/** <p>The type of access for the network connectivity for the Amazon S3 on Outposts endpoint. To use the Amazon Web Services VPC, choose <code>Private</code>. To use the endpoint with an on-premises network, choose <code>CustomerOwnedIp</code>. If you choose <code>CustomerOwnedIp</code>, you must also provide the customer-owned IP address pool (CoIP pool).</p> <note> <p> <code>Private</code> is the default access type value.</p> </note> */
		AccessType: FormControl<EndpointAccessType | null | undefined>,

		/** The ID of the customer-owned IPv4 address pool (CoIP pool) for the endpoint. IP addresses are allocated from this pool for the endpoint. */
		CustomerOwnedIpv4Pool: FormControl<string | null | undefined>,
	}
	export function CreateCreateEndpointPostBodyFormGroup() {
		return new FormGroup<CreateEndpointPostBodyFormProperties>({
			OutpostId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(op-[a-f0-9]{17}|\d{12}|ec2)$')]),
			SubnetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^subnet-([0-9a-f]{8}|[0-9a-f]{17})$')]),
			SecurityGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^sg-([0-9a-f]{8}|[0-9a-f]{17})$')]),
			AccessType: new FormControl<EndpointAccessType | null | undefined>(undefined),
			CustomerOwnedIpv4Pool: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^ipv4pool-coip-([0-9a-f]{17})$')]),
		});

	}

}

