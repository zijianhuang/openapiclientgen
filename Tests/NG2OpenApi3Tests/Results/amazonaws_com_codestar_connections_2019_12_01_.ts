import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateConnectionOutput {

		/** Required */
		ConnectionArn: string;
		Tags?: Array<Tag>;
	}
	export interface CreateConnectionOutputFormProperties {

		/** Required */
		ConnectionArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateConnectionOutputFormGroup() {
		return new FormGroup<CreateConnectionOutputFormProperties>({
			ConnectionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A tag is a key-value pair that is used to manage the resource.</p> <p>This tag is available for use by Amazon Web Services services that support tags.</p> */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** <p>A tag is a key-value pair that is used to manage the resource.</p> <p>This tag is available for use by Amazon Web Services services that support tags.</p> */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateConnectionInput {
		ProviderType?: ProviderType;

		/** Required */
		ConnectionName: string;
		Tags?: Array<Tag>;
		HostArn?: string;
	}
	export interface CreateConnectionInputFormProperties {
		ProviderType: FormControl<ProviderType | null | undefined>,

		/** Required */
		ConnectionName: FormControl<string | null | undefined>,
		HostArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateConnectionInputFormGroup() {
		return new FormGroup<CreateConnectionInputFormProperties>({
			ProviderType: new FormControl<ProviderType | null | undefined>(undefined),
			ConnectionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HostArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProviderType { Bitbucket = 0, GitHub = 1, GitHubEnterpriseServer = 2, GitLab = 3 }

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
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

	export interface ResourceUnavailableException {
	}
	export interface ResourceUnavailableExceptionFormProperties {
	}
	export function CreateResourceUnavailableExceptionFormGroup() {
		return new FormGroup<ResourceUnavailableExceptionFormProperties>({
		});

	}

	export interface CreateHostOutput {
		HostArn?: string;

		/**
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateHostOutputFormProperties {
		HostArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateHostOutputFormGroup() {
		return new FormGroup<CreateHostOutputFormProperties>({
			HostArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateHostInput {

		/** Required */
		Name: string;

		/** Required */
		ProviderType: ProviderType;

		/** Required */
		ProviderEndpoint: string;
		VpcConfiguration?: VpcConfiguration;

		/**
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateHostInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		ProviderType: FormControl<ProviderType | null | undefined>,

		/** Required */
		ProviderEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateCreateHostInputFormGroup() {
		return new FormGroup<CreateHostInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProviderType: new FormControl<ProviderType | null | undefined>(undefined, [Validators.required]),
			ProviderEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The VPC configuration provisioned for the host. */
	export interface VpcConfiguration {

		/** Required */
		VpcId: string;

		/** Required */
		SubnetIds: Array<string>;

		/** Required */
		SecurityGroupIds: Array<string>;
		TlsCertificate?: string;
	}

	/** The VPC configuration provisioned for the host. */
	export interface VpcConfigurationFormProperties {

		/** Required */
		VpcId: FormControl<string | null | undefined>,
		TlsCertificate: FormControl<string | null | undefined>,
	}
	export function CreateVpcConfigurationFormGroup() {
		return new FormGroup<VpcConfigurationFormProperties>({
			VpcId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TlsCertificate: new FormControl<string | null | undefined>(undefined),
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

		/** Required */
		ConnectionArn: string;
	}
	export interface DeleteConnectionInputFormProperties {

		/** Required */
		ConnectionArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteConnectionInputFormGroup() {
		return new FormGroup<DeleteConnectionInputFormProperties>({
			ConnectionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteHostOutput {
	}
	export interface DeleteHostOutputFormProperties {
	}
	export function CreateDeleteHostOutputFormGroup() {
		return new FormGroup<DeleteHostOutputFormProperties>({
		});

	}

	export interface DeleteHostInput {

		/** Required */
		HostArn: string;
	}
	export interface DeleteHostInputFormProperties {

		/** Required */
		HostArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteHostInputFormGroup() {
		return new FormGroup<DeleteHostInputFormProperties>({
			HostArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetConnectionOutput {
		Connection?: Connection;
	}
	export interface GetConnectionOutputFormProperties {
	}
	export function CreateGetConnectionOutputFormGroup() {
		return new FormGroup<GetConnectionOutputFormProperties>({
		});

	}


	/** <p>A resource that is used to connect third-party source providers with services like CodePipeline.</p> <p>Note: A connection created through CloudFormation, the CLI, or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by updating the connection in the console.</p> */
	export interface Connection {
		ConnectionName?: string;
		ConnectionArn?: string;
		ProviderType?: ProviderType;
		OwnerAccountId?: string;
		ConnectionStatus?: ConnectionStatus;
		HostArn?: string;
	}

	/** <p>A resource that is used to connect third-party source providers with services like CodePipeline.</p> <p>Note: A connection created through CloudFormation, the CLI, or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by updating the connection in the console.</p> */
	export interface ConnectionFormProperties {
		ConnectionName: FormControl<string | null | undefined>,
		ConnectionArn: FormControl<string | null | undefined>,
		ProviderType: FormControl<ProviderType | null | undefined>,
		OwnerAccountId: FormControl<string | null | undefined>,
		ConnectionStatus: FormControl<ConnectionStatus | null | undefined>,
		HostArn: FormControl<string | null | undefined>,
	}
	export function CreateConnectionFormGroup() {
		return new FormGroup<ConnectionFormProperties>({
			ConnectionName: new FormControl<string | null | undefined>(undefined),
			ConnectionArn: new FormControl<string | null | undefined>(undefined),
			ProviderType: new FormControl<ProviderType | null | undefined>(undefined),
			OwnerAccountId: new FormControl<string | null | undefined>(undefined),
			ConnectionStatus: new FormControl<ConnectionStatus | null | undefined>(undefined),
			HostArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConnectionStatus { PENDING = 0, AVAILABLE = 1, ERROR = 2 }

	export interface GetConnectionInput {

		/** Required */
		ConnectionArn: string;
	}
	export interface GetConnectionInputFormProperties {

		/** Required */
		ConnectionArn: FormControl<string | null | undefined>,
	}
	export function CreateGetConnectionInputFormGroup() {
		return new FormGroup<GetConnectionInputFormProperties>({
			ConnectionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetHostOutput {
		Name?: string;
		Status?: string;
		ProviderType?: ProviderType;
		ProviderEndpoint?: string;
		VpcConfiguration?: VpcConfiguration;
	}
	export interface GetHostOutputFormProperties {
		Name: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		ProviderType: FormControl<ProviderType | null | undefined>,
		ProviderEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateGetHostOutputFormGroup() {
		return new FormGroup<GetHostOutputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			ProviderType: new FormControl<ProviderType | null | undefined>(undefined),
			ProviderEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetHostInput {

		/** Required */
		HostArn: string;
	}
	export interface GetHostInputFormProperties {

		/** Required */
		HostArn: FormControl<string | null | undefined>,
	}
	export function CreateGetHostInputFormGroup() {
		return new FormGroup<GetHostInputFormProperties>({
			HostArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListConnectionsOutput {
		Connections?: Array<Connection>;
		NextToken?: string;
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
		ProviderTypeFilter?: ProviderType;
		HostArnFilter?: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListConnectionsInputFormProperties {
		ProviderTypeFilter: FormControl<ProviderType | null | undefined>,
		HostArnFilter: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConnectionsInputFormGroup() {
		return new FormGroup<ListConnectionsInputFormProperties>({
			ProviderTypeFilter: new FormControl<ProviderType | null | undefined>(undefined),
			HostArnFilter: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListHostsOutput {
		Hosts?: Array<Host>;
		NextToken?: string;
	}
	export interface ListHostsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListHostsOutputFormGroup() {
		return new FormGroup<ListHostsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A resource that represents the infrastructure where a third-party provider is installed. The host is used when you create connections to an installed third-party provider type, such as GitHub Enterprise Server. You create one host for all connections to that provider.</p> <note> <p>A host created through the CLI or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by setting up the host in the console.</p> </note> */
	export interface Host {
		Name?: string;
		HostArn?: string;
		ProviderType?: ProviderType;
		ProviderEndpoint?: string;
		VpcConfiguration?: VpcConfiguration;
		Status?: string;
		StatusMessage?: string;
	}

	/** <p>A resource that represents the infrastructure where a third-party provider is installed. The host is used when you create connections to an installed third-party provider type, such as GitHub Enterprise Server. You create one host for all connections to that provider.</p> <note> <p>A host created through the CLI or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by setting up the host in the console.</p> </note> */
	export interface HostFormProperties {
		Name: FormControl<string | null | undefined>,
		HostArn: FormControl<string | null | undefined>,
		ProviderType: FormControl<ProviderType | null | undefined>,
		ProviderEndpoint: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
	}
	export function CreateHostFormGroup() {
		return new FormGroup<HostFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			HostArn: new FormControl<string | null | undefined>(undefined),
			ProviderType: new FormControl<ProviderType | null | undefined>(undefined),
			ProviderEndpoint: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListHostsInput {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListHostsInputFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListHostsInputFormGroup() {
		return new FormGroup<ListHostsInputFormProperties>({
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

		/** Required */
		ResourceArn: string;
	}
	export interface ListTagsForResourceInputFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceInputFormGroup() {
		return new FormGroup<ListTagsForResourceInputFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		ResourceArn: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceInputFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		ResourceArn: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceInputFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateHostOutput {
	}
	export interface UpdateHostOutputFormProperties {
	}
	export function CreateUpdateHostOutputFormGroup() {
		return new FormGroup<UpdateHostOutputFormProperties>({
		});

	}

	export interface UpdateHostInput {

		/** Required */
		HostArn: string;
		ProviderEndpoint?: string;
		VpcConfiguration?: VpcConfiguration;
	}
	export interface UpdateHostInputFormProperties {

		/** Required */
		HostArn: FormControl<string | null | undefined>,
		ProviderEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateUpdateHostInputFormGroup() {
		return new FormGroup<UpdateHostInputFormProperties>({
			HostArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProviderEndpoint: new FormControl<string | null | undefined>(undefined),
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

	export interface UnsupportedOperationException {
	}
	export interface UnsupportedOperationExceptionFormProperties {
	}
	export function CreateUnsupportedOperationExceptionFormGroup() {
		return new FormGroup<UnsupportedOperationExceptionFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a connection that can then be given to other Amazon Web Services services like CodePipeline so that it can access third-party code repositories. The connection is in pending status until the third-party connection handshake is completed from the console.
		 * Post #X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection
		 * @return {CreateConnectionOutput} Success
		 */
		CreateConnection(requestBody: CreateConnectionInput): Observable<CreateConnectionOutput> {
			return this.http.post<CreateConnectionOutput>(this.baseUri + '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a resource that represents the infrastructure where a third-party provider is installed. The host is used when you create connections to an installed third-party provider type, such as GitHub Enterprise Server. You create one host for all connections to that provider.</p> <note> <p>A host created through the CLI or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by setting up the host in the console.</p> </note>
		 * Post #X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateHost
		 * @return {CreateHostOutput} Success
		 */
		CreateHost(requestBody: CreateHostInput): Observable<CreateHostOutput> {
			return this.http.post<CreateHostOutput>(this.baseUri + '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateHost', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>The host to be deleted. Before you delete a host, all connections associated to the host must be deleted.</p> <note> <p>A host cannot be deleted if it is in the VPC_CONFIG_INITIALIZING or VPC_CONFIG_DELETING state.</p> </note>
		 * Post #X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteHost
		 * @return {DeleteHostOutput} Success
		 */
		DeleteHost(requestBody: DeleteHostInput): Observable<DeleteHostOutput> {
			return this.http.post<DeleteHostOutput>(this.baseUri + '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteHost', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Returns the host ARN and details such as status, provider type, endpoint, and, if applicable, the VPC configuration.
		 * Post #X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetHost
		 * @return {GetHostOutput} Success
		 */
		GetHost(requestBody: GetHostInput): Observable<GetHostOutput> {
			return this.http.post<GetHostOutput>(this.baseUri + '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetHost', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Lists the hosts associated with your account.
		 * Post #X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListHosts
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListHostsOutput} Success
		 */
		ListHosts(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListHostsInput): Observable<ListHostsOutput> {
			return this.http.post<ListHostsOutput>(this.baseUri + '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListHosts?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Removes tags from an Amazon Web Services resource.
		 * Post #X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UntagResource
		 * @return {UntagResourceOutput} Success
		 */
		UntagResource(requestBody: UntagResourceInput): Observable<UntagResourceOutput> {
			return this.http.post<UntagResourceOutput>(this.baseUri + '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a specified host with the provided configurations.
		 * Post #X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UpdateHost
		 * @return {UpdateHostOutput} Success
		 */
		UpdateHost(requestBody: UpdateHostInput): Observable<UpdateHostOutput> {
			return this.http.post<UpdateHostOutput>(this.baseUri + '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UpdateHost', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateConnectionX_Amz_Target { 'com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection' = 0 }

	export enum CreateHostX_Amz_Target { 'com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateHost' = 0 }

	export enum DeleteConnectionX_Amz_Target { 'com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteConnection' = 0 }

	export enum DeleteHostX_Amz_Target { 'com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteHost' = 0 }

	export enum GetConnectionX_Amz_Target { 'com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetConnection' = 0 }

	export enum GetHostX_Amz_Target { 'com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetHost' = 0 }

	export enum ListConnectionsX_Amz_Target { 'com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections' = 0 }

	export enum ListHostsX_Amz_Target { 'com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListHosts' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListTagsForResource' = 0 }

	export enum TagResourceX_Amz_Target { 'com.amazonaws.codestar.connections.CodeStar_connections_20191201.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'com.amazonaws.codestar.connections.CodeStar_connections_20191201.UntagResource' = 0 }

	export enum UpdateHostX_Amz_Target { 'com.amazonaws.codestar.connections.CodeStar_connections_20191201.UpdateHost' = 0 }

}

