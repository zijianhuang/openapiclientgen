import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateConnectionOutput {
		ConnectionArn: string;
		Tags?: Array<Tag>;
	}
	export interface CreateConnectionOutputFormProperties {
		ConnectionArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateConnectionOutputFormGroup() {
		return new FormGroup<CreateConnectionOutputFormProperties>({
			ConnectionArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A tag is a key-value pair that is used to manage the resource.</p> <p>This tag is available for use by AWS services that support tags.</p> */
	export interface Tag {
		Key: string;
		Value: string;
	}

	/** <p>A tag is a key-value pair that is used to manage the resource.</p> <p>This tag is available for use by AWS services that support tags.</p> */
	export interface TagFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateConnectionInput {
		ProviderType: CreateConnectionInputProviderType;
		ConnectionName: string;
		Tags?: Array<Tag>;
	}
	export interface CreateConnectionInputFormProperties {
		ProviderType: FormControl<CreateConnectionInputProviderType | null | undefined>,
		ConnectionName: FormControl<string | null | undefined>,
	}
	export function CreateCreateConnectionInputFormGroup() {
		return new FormGroup<CreateConnectionInputFormProperties>({
			ProviderType: new FormControl<CreateConnectionInputProviderType | null | undefined>(undefined),
			ConnectionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateConnectionInputProviderType { Bitbucket = 0 }

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface DeleteConnectionOutput {
	}
	export interface DeleteConnectionOutputFormProperties {
	}
	export function CreateDeleteConnectionOutputFormGroup() {
		return new FormGroup<DeleteConnectionOutputFormProperties>({
		});

	}

	export interface DeleteConnectionInput {
		ConnectionArn: string;
	}
	export interface DeleteConnectionInputFormProperties {
		ConnectionArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteConnectionInputFormGroup() {
		return new FormGroup<DeleteConnectionInputFormProperties>({
			ConnectionArn: new FormControl<string | null | undefined>(undefined),
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

	export interface GetConnectionOutput {

		/** <p>The AWS::CodeStarConnections::Connection resource can be used to connect external source providers with services like AWS CodePipeline.</p> <p>Note: A connection created through CloudFormation is in `PENDING` status by default. You can make its status `AVAILABLE` by editing the connection in the CodePipeline console.</p> */
		Connection?: Connection;
	}
	export interface GetConnectionOutputFormProperties {
	}
	export function CreateGetConnectionOutputFormGroup() {
		return new FormGroup<GetConnectionOutputFormProperties>({
		});

	}


	/** <p>The AWS::CodeStarConnections::Connection resource can be used to connect external source providers with services like AWS CodePipeline.</p> <p>Note: A connection created through CloudFormation is in `PENDING` status by default. You can make its status `AVAILABLE` by editing the connection in the CodePipeline console.</p> */
	export interface Connection {
		ConnectionName?: string | null;
		ConnectionArn?: string | null;
		ProviderType?: CreateConnectionInputProviderType | null;
		OwnerAccountId?: string | null;
		ConnectionStatus?: ConnectionConnectionStatus | null;
	}

	/** <p>The AWS::CodeStarConnections::Connection resource can be used to connect external source providers with services like AWS CodePipeline.</p> <p>Note: A connection created through CloudFormation is in `PENDING` status by default. You can make its status `AVAILABLE` by editing the connection in the CodePipeline console.</p> */
	export interface ConnectionFormProperties {
		ConnectionName: FormControl<string | null | undefined>,
		ConnectionArn: FormControl<string | null | undefined>,
		ProviderType: FormControl<CreateConnectionInputProviderType | null | undefined>,
		OwnerAccountId: FormControl<string | null | undefined>,
		ConnectionStatus: FormControl<ConnectionConnectionStatus | null | undefined>,
	}
	export function CreateConnectionFormGroup() {
		return new FormGroup<ConnectionFormProperties>({
			ConnectionName: new FormControl<string | null | undefined>(undefined),
			ConnectionArn: new FormControl<string | null | undefined>(undefined),
			ProviderType: new FormControl<CreateConnectionInputProviderType | null | undefined>(undefined),
			OwnerAccountId: new FormControl<string | null | undefined>(undefined),
			ConnectionStatus: new FormControl<ConnectionConnectionStatus | null | undefined>(undefined),
		});

	}

	export enum ConnectionConnectionStatus { PENDING = 0, AVAILABLE = 1, ERROR = 2 }

	export interface GetConnectionInput {
		ConnectionArn: string;
	}
	export interface GetConnectionInputFormProperties {
		ConnectionArn: FormControl<string | null | undefined>,
	}
	export function CreateGetConnectionInputFormGroup() {
		return new FormGroup<GetConnectionInputFormProperties>({
			ConnectionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListConnectionsOutput {
		Connections?: Array<Connection>;
		NextToken?: string | null;
	}
	export interface ListConnectionsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConnectionsOutputFormGroup() {
		return new FormGroup<ListConnectionsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListConnectionsInput {
		ProviderTypeFilter?: CreateConnectionInputProviderType | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface ListConnectionsInputFormProperties {
		ProviderTypeFilter: FormControl<CreateConnectionInputProviderType | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConnectionsInputFormGroup() {
		return new FormGroup<ListConnectionsInputFormProperties>({
			ProviderTypeFilter: new FormControl<CreateConnectionInputProviderType | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceOutput {
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceOutputFormProperties {
	}
	export function CreateListTagsForResourceOutputFormGroup() {
		return new FormGroup<ListTagsForResourceOutputFormProperties>({
		});

	}

	export interface ListTagsForResourceInput {
		ResourceArn: string;
	}
	export interface ListTagsForResourceInputFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceInputFormGroup() {
		return new FormGroup<ListTagsForResourceInputFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourceOutput {
	}
	export interface TagResourceOutputFormProperties {
	}
	export function CreateTagResourceOutputFormGroup() {
		return new FormGroup<TagResourceOutputFormProperties>({
		});

	}

	export interface TagResourceInput {
		ResourceArn: string;
		Tags: Array<Tag>;
	}
	export interface TagResourceInputFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UntagResourceOutput {
	}
	export interface UntagResourceOutputFormProperties {
	}
	export function CreateUntagResourceOutputFormGroup() {
		return new FormGroup<UntagResourceOutputFormProperties>({
		});

	}

	export interface UntagResourceInput {
		ResourceArn: string;
		TagKeys: Array<string>;
	}
	export interface UntagResourceInputFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProviderType { Bitbucket = 0 }

	export enum ConnectionStatus { PENDING = 0, AVAILABLE = 1, ERROR = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a connection that can then be given to other AWS services like CodePipeline so that it can access third-party code repositories. The connection is in pending status until the third-party connection handshake is completed from the console.
		 * Post #X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection
		 * @return {CreateConnectionOutput} Success
		 */
		CreateConnection(requestBody: CreateConnectionInput): Observable<CreateConnectionOutput> {
			return this.http.post<CreateConnectionOutput>(this.baseUri + '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The connection to be deleted.
		 * Post #X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteConnection
		 * @return {DeleteConnectionOutput} Success
		 */
		DeleteConnection(requestBody: DeleteConnectionInput): Observable<DeleteConnectionOutput> {
			return this.http.post<DeleteConnectionOutput>(this.baseUri + '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the connection ARN and details such as status, owner, and provider type.
		 * Post #X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetConnection
		 * @return {GetConnectionOutput} Success
		 */
		GetConnection(requestBody: GetConnectionInput): Observable<GetConnectionOutput> {
			return this.http.post<GetConnectionOutput>(this.baseUri + '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the connections associated with your account.
		 * Post #X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListConnectionsOutput} Success
		 */
		ListConnections(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListConnectionsInput): Observable<ListConnectionsOutput> {
			return this.http.post<ListConnectionsOutput>(this.baseUri + '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the set of key-value pairs (metadata) that are used to manage the resource.
		 * Post #X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListTagsForResource
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceInput): Observable<ListTagsForResourceOutput> {
			return this.http.post<ListTagsForResourceOutput>(this.baseUri + '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
		 * Post #X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.TagResource
		 * @return {TagResourceOutput} Success
		 */
		TagResource(requestBody: TagResourceInput): Observable<TagResourceOutput> {
			return this.http.post<TagResourceOutput>(this.baseUri + '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from an AWS resource.
		 * Post #X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UntagResource
		 * @return {UntagResourceOutput} Success
		 */
		UntagResource(requestBody: UntagResourceInput): Observable<UntagResourceOutput> {
			return this.http.post<UntagResourceOutput>(this.baseUri + '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateConnectionX_Amz_Target { com_amazonaws_codestar_connections_CodeStar_connections_20191201_CreateConnection = 0 }

	export enum DeleteConnectionX_Amz_Target { com_amazonaws_codestar_connections_CodeStar_connections_20191201_DeleteConnection = 0 }

	export enum GetConnectionX_Amz_Target { com_amazonaws_codestar_connections_CodeStar_connections_20191201_GetConnection = 0 }

	export enum ListConnectionsX_Amz_Target { com_amazonaws_codestar_connections_CodeStar_connections_20191201_ListConnections = 0 }

	export enum ListTagsForResourceX_Amz_Target { com_amazonaws_codestar_connections_CodeStar_connections_20191201_ListTagsForResource = 0 }

	export enum TagResourceX_Amz_Target { com_amazonaws_codestar_connections_CodeStar_connections_20191201_TagResource = 0 }

	export enum UntagResourceX_Amz_Target { com_amazonaws_codestar_connections_CodeStar_connections_20191201_UntagResource = 0 }

}

