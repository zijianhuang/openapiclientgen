import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AddFlowOutputsResponse {
		FlowArn?: string;
		Outputs?: Array<Output>;
	}


	/** The settings for an output. */
	export interface Output {
		DataTransferSubscriberFeePercent?: number;
		Description?: string;
		Destination?: string;

		/** Information about the encryption of the flow. */
		Encryption?: Encryption;
		EntitlementArn?: string;
		MediaLiveInputArn?: string;
		Name: string;
		OutputArn: string;
		Port?: number;

		/** Attributes related to the transport stream that are used in a source or output. */
		Transport?: Transport;

		/** The settings for attaching a VPC interface to an output. */
		VpcInterfaceAttachment?: VpcInterfaceAttachment;
	}


	/** Information about the encryption of the flow. */
	export interface Encryption {
		Algorithm: EncryptionAlgorithm;
		ConstantInitializationVector?: string;
		DeviceId?: string;
		KeyType?: EncryptionKeyType;
		Region?: string;
		ResourceId?: string;
		RoleArn: string;
		SecretArn?: string;
		Url?: string;
	}

	export enum EncryptionAlgorithm { aes128 = 0, aes192 = 1, aes256 = 2 }

	export enum EncryptionKeyType { speke = 0, static_key = 1 }


	/** Attributes related to the transport stream that are used in a source or output. */
	export interface Transport {
		CidrAllowList?: Array<string>;
		MaxBitrate?: number;
		MaxLatency?: number;
		Protocol: TransportProtocol;
		RemoteId?: string;
		SmoothingLatency?: number;
		StreamId?: string;
	}

	export enum TransportProtocol { zixi_push = 0, rtp_fec = 1, rtp = 2, zixi_pull = 3, rist = 4 }


	/** The settings for attaching a VPC interface to an output. */
	export interface VpcInterfaceAttachment {
		VpcInterfaceName?: string;
	}


	/** The output that you want to add to this flow. */
	export interface AddOutputRequest {
		CidrAllowList?: Array<string>;
		Description?: string;
		Destination?: string;

		/** Information about the encryption of the flow. */
		Encryption?: Encryption;
		MaxLatency?: number;
		Name?: string;
		Port?: number;
		Protocol: AddOutputRequestProtocol;
		RemoteId?: string;
		SmoothingLatency?: number;
		StreamId?: string;

		/** The settings for attaching a VPC interface to an output. */
		VpcInterfaceAttachment?: VpcInterfaceAttachment;
	}

	export enum AddOutputRequestProtocol { zixi_push = 0, rtp_fec = 1, rtp = 2, zixi_pull = 3, rist = 4 }

	export interface AddFlowOutputs420Exception {
	}

	export interface BadRequestException {
	}

	export interface InternalServerErrorException {
	}

	export interface ForbiddenException {
	}

	export interface NotFoundException {
	}

	export interface ServiceUnavailableException {
	}

	export interface TooManyRequestsException {
	}

	export interface AddFlowSourcesResponse {
		FlowArn?: string;
		Sources?: Array<Source>;
	}


	/** The settings for the source of the flow. */
	export interface Source {
		DataTransferSubscriberFeePercent?: number;

		/** Information about the encryption of the flow. */
		Decryption?: Encryption;
		Description?: string;
		EntitlementArn?: string;
		IngestIp?: string;
		IngestPort?: number;
		Name: string;
		SourceArn: string;

		/** Attributes related to the transport stream that are used in a source or output. */
		Transport?: Transport;
		VpcInterfaceName?: string;
		WhitelistCidr?: string;
	}


	/** The settings for the source of the flow. */
	export interface SetSourceRequest {

		/** Information about the encryption of the flow. */
		Decryption?: Encryption;
		Description?: string;
		EntitlementArn?: string;
		IngestPort?: number;
		MaxBitrate?: number;
		MaxLatency?: number;
		Name?: string;
		Protocol?: SetSourceRequestProtocol;
		StreamId?: string;
		VpcInterfaceName?: string;
		WhitelistCidr?: string;
	}

	export enum SetSourceRequestProtocol { zixi_push = 0, rtp_fec = 1, rtp = 2, zixi_pull = 3, rist = 4 }

	export interface AddFlowVpcInterfacesResponse {
		FlowArn?: string;
		VpcInterfaces?: Array<VpcInterface>;
	}


	/** The settings for a VPC Source. */
	export interface VpcInterface {
		Name: string;
		NetworkInterfaceIds: Array<string>;
		RoleArn: string;
		SecurityGroupIds: Array<string>;
		SubnetId: string;
	}


	/** Desired VPC Interface for a Flow */
	export interface VpcInterfaceRequest {
		Name: string;
		RoleArn: string;
		SecurityGroupIds: Array<string>;
		SubnetId: string;
	}

	export interface CreateFlowResponse {

		/** The settings for a flow, including its source, outputs, and entitlements. */
		Flow?: Flow;
	}


	/** The settings for a flow, including its source, outputs, and entitlements. */
	export interface Flow {
		AvailabilityZone: string;
		Description?: string;
		EgressIp?: string;
		Entitlements: Array<Entitlement>;
		FlowArn: string;
		Name: string;
		Outputs: Array<Output>;

		/** The settings for the source of the flow. */
		Source: Source;

		/** The settings for source failover */
		SourceFailoverConfig?: FailoverConfig;
		Sources?: Array<Source>;
		Status: FlowStatus;
		VpcInterfaces?: Array<VpcInterface>;
	}


	/** The settings for a flow entitlement. */
	export interface Entitlement {
		DataTransferSubscriberFeePercent?: number;
		Description?: string;

		/** Information about the encryption of the flow. */
		Encryption?: Encryption;
		EntitlementArn: string;
		Name: string;
		Subscribers: Array<string>;
	}


	/** The settings for source failover */
	export interface FailoverConfig {
		RecoveryWindow?: number;
		State?: FailoverConfigState;
	}

	export enum FailoverConfigState { ENABLED = 0, DISABLED = 1 }

	export enum FlowStatus { STANDBY = 0, ACTIVE = 1, UPDATING = 2, DELETING = 3, STARTING = 4, STOPPING = 5, ERROR = 6 }


	/** The entitlements that you want to grant on a flow. */
	export interface GrantEntitlementRequest {
		DataTransferSubscriberFeePercent?: number;
		Description?: string;

		/** Information about the encryption of the flow. */
		Encryption?: Encryption;
		Name?: string;
		Subscribers: Array<string>;
	}

	export enum Protocol { zixi_push = 0, rtp_fec = 1, rtp = 2, zixi_pull = 3, rist = 4 }

	export enum State { ENABLED = 0, DISABLED = 1 }

	export interface CreateFlow420Exception {
	}

	export interface DeleteFlowResponse {
		FlowArn?: string;
		Status?: FlowStatus;
	}

	export interface DescribeFlowResponse {

		/** The settings for a flow, including its source, outputs, and entitlements. */
		Flow?: Flow;

		/** Messages that provide the state of the flow. */
		Messages?: Messages;
	}


	/** Messages that provide the state of the flow. */
	export interface Messages {
		Errors: Array<string>;
	}

	export interface GrantFlowEntitlementsResponse {
		Entitlements?: Array<Entitlement>;
		FlowArn?: string;
	}

	export interface GrantFlowEntitlements420Exception {
	}

	export interface ListEntitlementsResponse {
		Entitlements?: Array<ListedEntitlement>;
		NextToken?: string;
	}


	/** An entitlement that has been granted to you from other AWS accounts. */
	export interface ListedEntitlement {
		DataTransferSubscriberFeePercent?: number;
		EntitlementArn: string;
		EntitlementName: string;
	}

	export interface ListFlowsResponse {
		Flows?: Array<ListedFlow>;
		NextToken?: string;
	}


	/** Provides a summary of a flow, including its ARN, Availability Zone, and source type. */
	export interface ListedFlow {
		AvailabilityZone: string;
		Description: string;
		FlowArn: string;
		Name: string;
		SourceType: ListedFlowSourceType;
		Status: FlowStatus;
	}

	export enum ListedFlowSourceType { OWNED = 0, ENTITLED = 1 }

	export interface ListTagsForResourceResponse {
		Tags?: __mapOf__string;
	}

	export interface __mapOf__string {
	}

	export interface RemoveFlowOutputResponse {
		FlowArn?: string;
		OutputArn?: string;
	}

	export interface RemoveFlowSourceResponse {
		FlowArn?: string;
		SourceArn?: string;
	}

	export interface RemoveFlowVpcInterfaceResponse {
		FlowArn?: string;
		NonDeletedNetworkInterfaceIds?: Array<string>;
		VpcInterfaceName?: string;
	}

	export interface RevokeFlowEntitlementResponse {
		EntitlementArn?: string;
		FlowArn?: string;
	}

	export interface StartFlowResponse {
		FlowArn?: string;
		Status?: FlowStatus;
	}

	export interface StopFlowResponse {
		FlowArn?: string;
		Status?: FlowStatus;
	}

	export interface UpdateFlowResponse {

		/** The settings for a flow, including its source, outputs, and entitlements. */
		Flow?: Flow;
	}

	export interface UpdateFlowEntitlementResponse {

		/** The settings for a flow entitlement. */
		Entitlement?: Entitlement;
		FlowArn?: string;
	}

	export enum Algorithm { aes128 = 0, aes192 = 1, aes256 = 2 }

	export enum KeyType { speke = 0, static_key = 1 }

	export interface UpdateFlowOutputResponse {
		FlowArn?: string;

		/** The settings for an output. */
		Output?: Output;
	}

	export interface UpdateFlowSourceResponse {
		FlowArn?: string;

		/** The settings for the source of the flow. */
		Source?: Source;
	}


	/** A request to add outputs to the specified flow. */
	export interface AddFlowOutputsRequest {
		Outputs: Array<AddOutputRequest>;
	}


	/** A request to add sources to the flow. */
	export interface AddFlowSourcesRequest {
		Sources: Array<SetSourceRequest>;
	}


	/** A request to add VPC interfaces to the flow. */
	export interface AddFlowVpcInterfacesRequest {
		VpcInterfaces: Array<VpcInterfaceRequest>;
	}


	/** Creates a new flow. The request must include one source. The request optionally can include outputs (up to 50) and entitlements (up to 50). */
	export interface CreateFlowRequest {
		AvailabilityZone?: string;
		Entitlements?: Array<GrantEntitlementRequest>;
		Name: string;
		Outputs?: Array<AddOutputRequest>;

		/** The settings for the source of the flow. */
		Source?: SetSourceRequest;

		/** The settings for source failover */
		SourceFailoverConfig?: FailoverConfig;
		Sources?: Array<SetSourceRequest>;
		VpcInterfaces?: Array<VpcInterfaceRequest>;
	}

	export interface DeleteFlowRequest {
	}

	export enum Status { STANDBY = 0, ACTIVE = 1, UPDATING = 2, DELETING = 3, STARTING = 4, STOPPING = 5, ERROR = 6 }

	export interface DescribeFlowRequest {
	}


	/** A request to grant entitlements on a flow. */
	export interface GrantFlowEntitlementsRequest {
		Entitlements: Array<GrantEntitlementRequest>;
	}

	export interface ListEntitlementsRequest {
	}

	export interface ListFlowsRequest {
	}

	export interface ListTagsForResourceRequest {
	}

	export enum SourceType { OWNED = 0, ENTITLED = 1 }

	export interface RemoveFlowOutputRequest {
	}

	export interface RemoveFlowSourceRequest {
	}

	export interface RemoveFlowVpcInterfaceRequest {
	}

	export interface RevokeFlowEntitlementRequest {
	}

	export interface StartFlowRequest {
	}

	export interface StopFlowRequest {
	}


	/** The tags to add to the resource. A tag is an array of key-value pairs. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters. */
	export interface TagResourceRequest {
		Tags: __mapOf__string;
	}

	export interface UntagResourceRequest {
	}


	/** Information about the encryption of the flow. */
	export interface UpdateEncryption {
		Algorithm?: EncryptionAlgorithm;
		ConstantInitializationVector?: string;
		DeviceId?: string;
		KeyType?: UpdateEncryptionKeyType;
		Region?: string;
		ResourceId?: string;
		RoleArn?: string;
		SecretArn?: string;
		Url?: string;
	}

	export enum UpdateEncryptionKeyType { speke = 0, static_key = 1 }


	/** The settings for source failover */
	export interface UpdateFailoverConfig {
		RecoveryWindow?: number;
		State?: FailoverConfigState;
	}


	/** The entitlement fields that you want to update. */
	export interface UpdateFlowEntitlementRequest {
		Description?: string;

		/** Information about the encryption of the flow. */
		Encryption?: UpdateEncryption;
		Subscribers?: Array<string>;
	}


	/** The fields that you want to update in the output. */
	export interface UpdateFlowOutputRequest {
		CidrAllowList?: Array<string>;
		Description?: string;
		Destination?: string;

		/** Information about the encryption of the flow. */
		Encryption?: UpdateEncryption;
		MaxLatency?: number;
		Port?: number;
		Protocol?: UpdateFlowOutputRequestProtocol;
		RemoteId?: string;
		SmoothingLatency?: number;
		StreamId?: string;

		/** The settings for attaching a VPC interface to an output. */
		VpcInterfaceAttachment?: VpcInterfaceAttachment;
	}

	export enum UpdateFlowOutputRequestProtocol { zixi_push = 0, rtp_fec = 1, rtp = 2, zixi_pull = 3, rist = 4 }


	/** A request to update flow. */
	export interface UpdateFlowRequest {

		/** The settings for source failover */
		SourceFailoverConfig?: UpdateFailoverConfig;
	}


	/** A request to update the source of a flow. */
	export interface UpdateFlowSourceRequest {

		/** Information about the encryption of the flow. */
		Decryption?: UpdateEncryption;
		Description?: string;
		EntitlementArn?: string;
		IngestPort?: number;
		MaxBitrate?: number;
		MaxLatency?: number;
		Protocol?: UpdateFlowSourceRequestProtocol;
		StreamId?: string;
		VpcInterfaceName?: string;
		WhitelistCidr?: string;
	}

	export enum UpdateFlowSourceRequestProtocol { zixi_push = 0, rtp_fec = 1, rtp = 2, zixi_pull = 3, rist = 4 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Adds outputs to an existing flow. You can create up to 50 outputs per flow.
		 * Post v1/flows/{flowArn}/outputs
		 * @param {string} flowArn The flow that you want to add outputs to.
		 * @return {void} 
		 */
		AddFlowOutputs(flowArn: string, requestBody: AddFlowOutputsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/flows/' + (flowArn == null ? '' : encodeURIComponent(flowArn)) + '/outputs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds Sources to flow
		 * Post v1/flows/{flowArn}/source
		 * @param {string} flowArn The flow that you want to mutate.
		 * @return {void} 
		 */
		AddFlowSources(flowArn: string, requestBody: AddFlowSourcesPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/flows/' + (flowArn == null ? '' : encodeURIComponent(flowArn)) + '/source', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds VPC interfaces to flow
		 * Post v1/flows/{flowArn}/vpcInterfaces
		 * @param {string} flowArn The flow that you want to mutate.
		 * @return {void} 
		 */
		AddFlowVpcInterfaces(flowArn: string, requestBody: AddFlowVpcInterfacesPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/flows/' + (flowArn == null ? '' : encodeURIComponent(flowArn)) + '/vpcInterfaces', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new flow. The request must include one source. The request optionally can include outputs (up to 50) and entitlements (up to 50).
		 * Post v1/flows
		 * @return {void} 
		 */
		CreateFlow(requestBody: CreateFlowPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/flows', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Displays a list of flows that are associated with this account. This request returns a paginated result.
		 * Get v1/flows
		 * @param {number} maxResults The maximum number of results to return per API request. For example, you submit a ListFlows request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.
		 * @param {string} nextToken The token that identifies which batch of results that you want to see. For example, you submit a ListFlows request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListFlows request a second time and specify the NextToken value.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFlowsResponse} Success
		 */
		ListFlows(maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<ListFlowsResponse> {
			return this.http.get<ListFlowsResponse>(this.baseUri + 'v1/flows?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Deletes a flow. Before you can delete a flow, you must stop the flow.
		 * Delete v1/flows/{flowArn}
		 * @param {string} flowArn The ARN of the flow that you want to delete.
		 * @return {void} 
		 */
		DeleteFlow(flowArn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/flows/' + (flowArn == null ? '' : encodeURIComponent(flowArn)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Displays the details of a flow. The response includes the flow ARN, name, and Availability Zone, as well as details about the source, outputs, and entitlements.
		 * Get v1/flows/{flowArn}
		 * @param {string} flowArn The ARN of the flow that you want to describe.
		 * @return {DescribeFlowResponse} Success
		 */
		DescribeFlow(flowArn: string): Observable<DescribeFlowResponse> {
			return this.http.get<DescribeFlowResponse>(this.baseUri + 'v1/flows/' + (flowArn == null ? '' : encodeURIComponent(flowArn)), {});
		}

		/**
		 * Updates flow
		 * Put v1/flows/{flowArn}
		 * @param {string} flowArn The flow that you want to update.
		 * @return {void} 
		 */
		UpdateFlow(flowArn: string, requestBody: UpdateFlowPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/flows/' + (flowArn == null ? '' : encodeURIComponent(flowArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Grants entitlements to an existing flow.
		 * Post v1/flows/{flowArn}/entitlements
		 * @param {string} flowArn The flow that you want to grant entitlements on.
		 * @return {GrantFlowEntitlementsResponse} Success
		 */
		GrantFlowEntitlements(flowArn: string, requestBody: GrantFlowEntitlementsPostBody): Observable<GrantFlowEntitlementsResponse> {
			return this.http.post<GrantFlowEntitlementsResponse>(this.baseUri + 'v1/flows/' + (flowArn == null ? '' : encodeURIComponent(flowArn)) + '/entitlements', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Displays a list of all entitlements that have been granted to this account. This request returns 20 results per page.
		 * Get v1/entitlements
		 * @param {number} maxResults The maximum number of results to return per API request. For example, you submit a ListEntitlements request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 20 results per page.
		 * @param {string} nextToken The token that identifies which batch of results that you want to see. For example, you submit a ListEntitlements request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListEntitlements request a second time and specify the NextToken value.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListEntitlementsResponse} Success
		 */
		ListEntitlements(maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<ListEntitlementsResponse> {
			return this.http.get<ListEntitlementsResponse>(this.baseUri + 'v1/entitlements?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * List all tags on an AWS Elemental MediaConnect resource
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) that identifies the AWS Elemental MediaConnect resource for which to list the tags.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) that identifies the AWS Elemental MediaConnect resource to which to add tags.
		 * @return {void} 
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes an output from an existing flow. This request can be made only on an output that does not have an entitlement associated with it. If the output has an entitlement, you must revoke the entitlement instead. When an entitlement is revoked from a flow, the service automatically removes the associated output.
		 * Delete v1/flows/{flowArn}/outputs/{outputArn}
		 * @param {string} flowArn The flow that you want to remove an output from.
		 * @param {string} outputArn The ARN of the output that you want to remove.
		 * @return {void} 
		 */
		RemoveFlowOutput(flowArn: string, outputArn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/flows/' + (flowArn == null ? '' : encodeURIComponent(flowArn)) + '/outputs/' + (outputArn == null ? '' : encodeURIComponent(outputArn)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing flow output.
		 * Put v1/flows/{flowArn}/outputs/{outputArn}
		 * @param {string} flowArn The flow that is associated with the output that you want to update.
		 * @param {string} outputArn The ARN of the output that you want to update.
		 * @return {void} 
		 */
		UpdateFlowOutput(flowArn: string, outputArn: string, requestBody: UpdateFlowOutputPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/flows/' + (flowArn == null ? '' : encodeURIComponent(flowArn)) + '/outputs/' + (outputArn == null ? '' : encodeURIComponent(outputArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a source from an existing flow. This request can be made only if there is more than one source on the flow.
		 * Delete v1/flows/{flowArn}/source/{sourceArn}
		 * @param {string} flowArn The flow that you want to remove a source from.
		 * @param {string} sourceArn The ARN of the source that you want to remove.
		 * @return {void} 
		 */
		RemoveFlowSource(flowArn: string, sourceArn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/flows/' + (flowArn == null ? '' : encodeURIComponent(flowArn)) + '/source/' + (sourceArn == null ? '' : encodeURIComponent(sourceArn)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the source of a flow.
		 * Put v1/flows/{flowArn}/source/{sourceArn}
		 * @param {string} flowArn The flow that is associated with the source that you want to update.
		 * @param {string} sourceArn The ARN of the source that you want to update.
		 * @return {void} 
		 */
		UpdateFlowSource(flowArn: string, sourceArn: string, requestBody: UpdateFlowSourcePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/flows/' + (flowArn == null ? '' : encodeURIComponent(flowArn)) + '/source/' + (sourceArn == null ? '' : encodeURIComponent(sourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a VPC Interface from an existing flow. This request can be made only on a VPC interface that does not have a Source or Output associated with it. If the VPC interface is referenced by a Source or Output, you must first delete or update the Source or Output to no longer reference the VPC interface.
		 * Delete v1/flows/{flowArn}/vpcInterfaces/{vpcInterfaceName}
		 * @param {string} flowArn The flow that you want to remove a VPC interface from.
		 * @param {string} vpcInterfaceName The name of the VPC interface that you want to remove.
		 * @return {RemoveFlowVpcInterfaceResponse} Success
		 */
		RemoveFlowVpcInterface(flowArn: string, vpcInterfaceName: string): Observable<RemoveFlowVpcInterfaceResponse> {
			return this.http.delete<RemoveFlowVpcInterfaceResponse>(this.baseUri + 'v1/flows/' + (flowArn == null ? '' : encodeURIComponent(flowArn)) + '/vpcInterfaces/' + (vpcInterfaceName == null ? '' : encodeURIComponent(vpcInterfaceName)), {});
		}

		/**
		 * Revokes an entitlement from a flow. Once an entitlement is revoked, the content becomes unavailable to the subscriber and the associated output is removed.
		 * Delete v1/flows/{flowArn}/entitlements/{entitlementArn}
		 * @param {string} entitlementArn The ARN of the entitlement that you want to revoke.
		 * @param {string} flowArn The flow that you want to revoke an entitlement from.
		 * @return {void} 
		 */
		RevokeFlowEntitlement(entitlementArn: string, flowArn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/flows/' + (flowArn == null ? '' : encodeURIComponent(flowArn)) + '/entitlements/' + (entitlementArn == null ? '' : encodeURIComponent(entitlementArn)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * You can change an entitlement's description, subscribers, and encryption. If you change the subscribers, the service will remove the outputs that are are used by the subscribers that are removed.
		 * Put v1/flows/{flowArn}/entitlements/{entitlementArn}
		 * @param {string} entitlementArn The ARN of the entitlement that you want to update.
		 * @param {string} flowArn The flow that is associated with the entitlement that you want to update.
		 * @return {void} 
		 */
		UpdateFlowEntitlement(entitlementArn: string, flowArn: string, requestBody: UpdateFlowEntitlementPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/flows/' + (flowArn == null ? '' : encodeURIComponent(flowArn)) + '/entitlements/' + (entitlementArn == null ? '' : encodeURIComponent(entitlementArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts a flow.
		 * Post v1/flows/start/{flowArn}
		 * @param {string} flowArn The ARN of the flow that you want to start.
		 * @return {void} 
		 */
		StartFlow(flowArn: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/flows/start/' + (flowArn == null ? '' : encodeURIComponent(flowArn)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Stops a flow.
		 * Post v1/flows/stop/{flowArn}
		 * @param {string} flowArn The ARN of the flow that you want to stop.
		 * @return {void} 
		 */
		StopFlow(flowArn: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/flows/stop/' + (flowArn == null ? '' : encodeURIComponent(flowArn)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes specified tags from a resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) that identifies the AWS Elemental MediaConnect resource from which to delete tags.
		 * @param {Array<string>} tagKeys The keys of the tags to be removed.
		 * @return {void} 
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}
	}

	export interface AddFlowOutputsPostBody {

		/** A list of outputs that you want to add. */
		outputs: Array<AddOutputRequest>;
	}

	export interface AddFlowSourcesPostBody {

		/** A list of sources that you want to add. */
		sources: Array<SetSourceRequest>;
	}

	export interface AddFlowVpcInterfacesPostBody {

		/** A list of VPC interfaces that you want to add. */
		vpcInterfaces: Array<VpcInterfaceRequest>;
	}

	export interface CreateFlowPostBody {

		/** The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS Region. */
		availabilityZone?: string;

		/** The entitlements that you want to grant on a flow. */
		entitlements?: Array<GrantEntitlementRequest>;

		/** The name of the flow. */
		name: string;

		/** The outputs that you want to add to this flow. */
		outputs?: Array<AddOutputRequest>;

		/** The settings for the source of the flow. */
		source?: CreateFlowPostBodySource;

		/** The settings for source failover */
		sourceFailoverConfig?: CreateFlowPostBodySourceFailoverConfig;
		sources?: Array<SetSourceRequest>;

		/** The VPC interfaces you want on the flow. */
		vpcInterfaces?: Array<VpcInterfaceRequest>;
	}

	export interface CreateFlowPostBodySource {

		/** Information about the encryption of the flow. */
		Decryption?: Encryption;
		Description?: string;
		EntitlementArn?: string;
		IngestPort?: number;
		MaxBitrate?: number;
		MaxLatency?: number;
		Name?: string;
		Protocol?: CreateFlowPostBodySourceProtocol;
		StreamId?: string;
		VpcInterfaceName?: string;
		WhitelistCidr?: string;
	}

	export enum CreateFlowPostBodySourceProtocol { zixi_push = 0, rtp_fec = 1, rtp = 2, zixi_pull = 3, rist = 4 }

	export interface CreateFlowPostBodySourceFailoverConfig {
		RecoveryWindow?: number;
		State?: FailoverConfigState;
	}

	export interface UpdateFlowPutBody {

		/** The settings for source failover */
		sourceFailoverConfig?: UpdateFlowPutBodySourceFailoverConfig;
	}

	export interface UpdateFlowPutBodySourceFailoverConfig {
		RecoveryWindow?: number;
		State?: FailoverConfigState;
	}

	export interface GrantFlowEntitlementsPostBody {

		/** The list of entitlements that you want to grant. */
		entitlements: Array<GrantEntitlementRequest>;
	}

	export interface TagResourcePostBody {

		/** A map from tag keys to values. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters. */
		tags: {[id: string]: string };
	}

	export interface UpdateFlowOutputPutBody {

		/** The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16. */
		cidrAllowList?: Array<string>;

		/** A description of the output. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the end user. */
		description?: string;

		/** The IP address where you want to send the output. */
		destination?: string;

		/** Information about the encryption of the flow. */
		encryption?: UpdateFlowOutputPutBodyEncryption;

		/** The maximum latency in milliseconds for Zixi-based streams. */
		maxLatency?: number;

		/** The port to use when content is distributed to this output. */
		port?: number;

		/** The protocol to use for the output. */
		protocol?: UpdateFlowOutputPutBodyProtocol;

		/** The remote ID for the Zixi-pull stream. */
		remoteId?: string;

		/** The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams. */
		smoothingLatency?: number;

		/** The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams. */
		streamId?: string;

		/** The settings for attaching a VPC interface to an output. */
		vpcInterfaceAttachment?: UpdateFlowOutputPutBodyVpcInterfaceAttachment;
	}

	export interface UpdateFlowOutputPutBodyEncryption {
		Algorithm?: EncryptionAlgorithm;
		ConstantInitializationVector?: string;
		DeviceId?: string;
		KeyType?: UpdateFlowOutputPutBodyEncryptionKeyType;
		Region?: string;
		ResourceId?: string;
		RoleArn?: string;
		SecretArn?: string;
		Url?: string;
	}

	export enum UpdateFlowOutputPutBodyEncryptionKeyType { speke = 0, static_key = 1 }

	export enum UpdateFlowOutputPutBodyProtocol { zixi_push = 0, rtp_fec = 1, rtp = 2, zixi_pull = 3, rist = 4 }

	export interface UpdateFlowOutputPutBodyVpcInterfaceAttachment {
		VpcInterfaceName?: string;
	}

	export interface UpdateFlowSourcePutBody {

		/** Information about the encryption of the flow. */
		decryption?: UpdateFlowSourcePutBodyDecryption;

		/** A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account. */
		description?: string;

		/** The ARN of the entitlement that allows you to subscribe to this flow. The entitlement is set by the flow originator, and the ARN is generated as part of the originator's flow. */
		entitlementArn?: string;

		/** The port that the flow will be listening on for incoming content. */
		ingestPort?: number;

		/** The smoothing max bitrate for RIST, RTP, and RTP-FEC streams. */
		maxBitrate?: number;

		/** The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams. */
		maxLatency?: number;

		/** The protocol that is used by the source. */
		protocol?: UpdateFlowSourcePutBodyProtocol;

		/** The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams. */
		streamId?: string;

		/** The name of the VPC Interface to configure this Source with. */
		vpcInterfaceName?: string;

		/** The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16. */
		whitelistCidr?: string;
	}

	export interface UpdateFlowSourcePutBodyDecryption {
		Algorithm?: EncryptionAlgorithm;
		ConstantInitializationVector?: string;
		DeviceId?: string;
		KeyType?: UpdateFlowSourcePutBodyDecryptionKeyType;
		Region?: string;
		ResourceId?: string;
		RoleArn?: string;
		SecretArn?: string;
		Url?: string;
	}

	export enum UpdateFlowSourcePutBodyDecryptionKeyType { speke = 0, static_key = 1 }

	export enum UpdateFlowSourcePutBodyProtocol { zixi_push = 0, rtp_fec = 1, rtp = 2, zixi_pull = 3, rist = 4 }

	export interface UpdateFlowEntitlementPutBody {

		/** A description of the entitlement. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the subscriber or end user. */
		description?: string;

		/** Information about the encryption of the flow. */
		encryption?: UpdateFlowEntitlementPutBodyEncryption;

		/** The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source. */
		subscribers?: Array<string>;
	}

	export interface UpdateFlowEntitlementPutBodyEncryption {
		Algorithm?: EncryptionAlgorithm;
		ConstantInitializationVector?: string;
		DeviceId?: string;
		KeyType?: UpdateFlowEntitlementPutBodyEncryptionKeyType;
		Region?: string;
		ResourceId?: string;
		RoleArn?: string;
		SecretArn?: string;
		Url?: string;
	}

	export enum UpdateFlowEntitlementPutBodyEncryptionKeyType { speke = 0, static_key = 1 }

}

