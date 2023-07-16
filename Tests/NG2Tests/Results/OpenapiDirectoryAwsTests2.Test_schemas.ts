import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateDiscovererResponse {
		Description?: string;
		DiscovererArn?: string;
		DiscovererId?: string;
		SourceArn?: string;
		State?: CreateDiscovererResponseState;

		/** Key-value pairs associated with a resource. */
		Tags?: Tags;
	}

	export enum CreateDiscovererResponseState { STARTED = 0, STOPPED = 1 }


	/** Key-value pairs associated with a resource. */
	export interface Tags {
	}

	export interface BadRequestException {
	}

	export interface InternalServerErrorException {
	}

	export interface UnauthorizedException {
	}

	export interface ForbiddenException {
	}

	export interface ServiceUnavailableException {
	}

	export interface ConflictException {
	}

	export interface CreateRegistryResponse {
		Description?: string;
		RegistryArn?: string;
		RegistryName?: string;

		/** Key-value pairs associated with a resource. */
		Tags?: Tags;
	}

	export interface CreateSchemaResponse {
		Description?: string;
		LastModified?: Date;
		SchemaArn?: string;
		SchemaName?: string;
		SchemaVersion?: string;

		/** Key-value pairs associated with a resource. */
		Tags?: Tags;
		Type?: string;
		VersionCreatedDate?: Date;
	}

	export interface NotFoundException {
	}

	export interface DescribeCodeBindingResponse {
		CreationDate?: Date;
		LastModified?: Date;
		SchemaVersion?: string;
		Status?: DescribeCodeBindingResponseStatus;
	}

	export enum DescribeCodeBindingResponseStatus { CREATE_IN_PROGRESS = 0, CREATE_COMPLETE = 1, CREATE_FAILED = 2 }

	export interface TooManyRequestsException {
	}

	export interface DescribeDiscovererResponse {
		Description?: string;
		DiscovererArn?: string;
		DiscovererId?: string;
		SourceArn?: string;
		State?: CreateDiscovererResponseState;

		/** Key-value pairs associated with a resource. */
		Tags?: Tags;
	}

	export interface DescribeRegistryResponse {
		Description?: string;
		RegistryArn?: string;
		RegistryName?: string;

		/** Key-value pairs associated with a resource. */
		Tags?: Tags;
	}

	export interface DescribeSchemaResponse {
		Content?: string;
		Description?: string;
		LastModified?: Date;
		SchemaArn?: string;
		SchemaName?: string;
		SchemaVersion?: string;

		/** Key-value pairs associated with a resource. */
		Tags?: Tags;
		Type?: string;
		VersionCreatedDate?: Date;
	}

	export interface GetCodeBindingSourceResponse {
		Body?: string;
	}

	export interface GetDiscoveredSchemaResponse {
		Content?: string;
	}

	export interface GetResourcePolicyResponse {
		Policy?: string;
		RevisionId?: string;
	}

	export interface ListDiscoverersResponse {
		Discoverers?: Array<DiscovererSummary>;
		NextToken?: string;
	}

	export interface DiscovererSummary {
		DiscovererArn?: string;
		DiscovererId?: string;
		SourceArn?: string;
		State?: CreateDiscovererResponseState;

		/** Key-value pairs associated with a resource. */
		Tags?: Tags;
	}

	export interface ListRegistriesResponse {
		NextToken?: string;
		Registries?: Array<RegistrySummary>;
	}

	export interface RegistrySummary {
		RegistryArn?: string;
		RegistryName?: string;

		/** Key-value pairs associated with a resource. */
		Tags?: Tags;
	}

	export interface ListSchemaVersionsResponse {
		NextToken?: string;
		SchemaVersions?: Array<SchemaVersionSummary>;
	}

	export interface SchemaVersionSummary {
		SchemaArn?: string;
		SchemaName?: string;
		SchemaVersion?: string;
	}

	export interface ListSchemasResponse {
		NextToken?: string;
		Schemas?: Array<SchemaSummary>;
	}


	/** A summary of schema details. */
	export interface SchemaSummary {
		LastModified?: Date;
		SchemaArn?: string;
		SchemaName?: string;

		/** Key-value pairs associated with a resource. */
		Tags?: Tags;
		VersionCount?: number;
	}

	export interface ListTagsForResourceResponse {

		/** Key-value pairs associated with a resource. */
		Tags?: Tags;
	}

	export interface PutCodeBindingResponse {
		CreationDate?: Date;
		LastModified?: Date;
		SchemaVersion?: string;
		Status?: DescribeCodeBindingResponseStatus;
	}

	export interface GoneException {
	}

	export interface PutResourcePolicyResponse {
		Policy?: string;
		RevisionId?: string;
	}

	export interface PreconditionFailedException {
	}

	export interface SearchSchemasResponse {
		NextToken?: string;
		Schemas?: Array<SearchSchemaSummary>;
	}

	export interface SearchSchemaSummary {
		RegistryName?: string;
		SchemaArn?: string;
		SchemaName?: string;
		SchemaVersions?: Array<SearchSchemaVersionSummary>;
	}

	export interface SearchSchemaVersionSummary {
		CreatedDate?: Date;
		SchemaVersion?: string;
	}

	export interface StartDiscovererResponse {
		DiscovererId?: string;
		State?: CreateDiscovererResponseState;
	}

	export interface StopDiscovererResponse {
		DiscovererId?: string;
		State?: CreateDiscovererResponseState;
	}

	export interface UpdateDiscovererResponse {
		Description?: string;
		DiscovererArn?: string;
		DiscovererId?: string;
		SourceArn?: string;
		State?: CreateDiscovererResponseState;

		/** Key-value pairs associated with a resource. */
		Tags?: Tags;
	}

	export interface UpdateRegistryResponse {
		Description?: string;
		RegistryArn?: string;
		RegistryName?: string;

		/** Key-value pairs associated with a resource. */
		Tags?: Tags;
	}

	export interface UpdateSchemaResponse {
		Description?: string;
		LastModified?: Date;
		SchemaArn?: string;
		SchemaName?: string;
		SchemaVersion?: string;

		/** Key-value pairs associated with a resource. */
		Tags?: Tags;
		Type?: string;
		VersionCreatedDate?: Date;
	}

	export enum CodeGenerationStatus { CREATE_IN_PROGRESS = 0, CREATE_COMPLETE = 1, CREATE_FAILED = 2 }

	export interface CreateDiscovererRequest {
		Description?: string;
		SourceArn: string;

		/** Key-value pairs associated with a resource. */
		Tags?: Tags;
	}

	export enum DiscovererState { STARTED = 0, STOPPED = 1 }

	export interface CreateRegistryRequest {
		Description?: string;

		/** Key-value pairs associated with a resource. */
		Tags?: Tags;
	}

	export enum Type { OpenApi3 = 0 }

	export interface CreateSchemaRequest {
		Content: string;
		Description?: string;

		/** Key-value pairs associated with a resource. */
		Tags?: Tags;
		Type: Type;
	}

	export interface DeleteDiscovererRequest {
	}

	export interface DeleteRegistryRequest {
	}

	export interface DeleteResourcePolicyRequest {
	}

	export interface DeleteSchemaRequest {
	}

	export interface DeleteSchemaVersionRequest {
	}

	export interface DescribeCodeBindingRequest {
	}

	export interface DescribeDiscovererRequest {
	}

	export interface DescribeRegistryRequest {
	}

	export interface DescribeSchemaRequest {
	}

	export interface GetCodeBindingSourceRequest {
	}

	export interface GetDiscoveredSchemaRequest {
		Events: Array<string>;
		Type: Type;
	}

	export interface GetResourcePolicyRequest {
	}

	export interface ListDiscoverersRequest {
	}

	export interface ListRegistriesRequest {
	}

	export interface ListSchemaVersionsRequest {
	}

	export interface ListSchemasRequest {
	}

	export interface ListTagsForResourceRequest {
	}

	export interface PutCodeBindingRequest {
	}


	/** The name of the policy. */
	export interface PutResourcePolicyRequest {
		Policy: string;
		RevisionId?: string;
	}

	export interface SearchSchemasRequest {
	}

	export interface StartDiscovererRequest {
	}

	export interface StopDiscovererRequest {
	}

	export interface TagResourceRequest {

		/**
		 * Key-value pairs associated with a resource.
		 * Required
		 */
		Tags: Tags;
	}

	export interface UntagResourceRequest {
	}

	export interface UpdateDiscovererRequest {
		Description?: string;
	}


	/** Updates the registry. */
	export interface UpdateRegistryRequest {
		Description?: string;
	}

	export interface UpdateSchemaRequest {
		ClientTokenId?: string;
		Content?: string;
		Description?: string;
		Type?: Type;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a discoverer.
		 * Post v1/discoverers
		 * @return {void} 
		 */
		CreateDiscoverer(requestBody: CreateDiscovererPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/discoverers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List the discoverers.
		 * Get v1/discoverers
		 * @param {string} discovererIdPrefix Specifying this limits the results to only those discoverer IDs that start with the specified prefix.
		 * @param {string} nextToken The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.
		 * @param {string} sourceArnPrefix Specifying this limits the results to only those ARNs that start with the specified prefix.
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDiscoverersResponse} Success
		 */
		ListDiscoverers(discovererIdPrefix: string, limit: number, nextToken: string, sourceArnPrefix: string, Limit: string, NextToken: string): Observable<ListDiscoverersResponse> {
			return this.http.get<ListDiscoverersResponse>(this.baseUri + 'v1/discoverers?discovererIdPrefix=' + (discovererIdPrefix == null ? '' : encodeURIComponent(discovererIdPrefix)) + '&limit=' + limit + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&sourceArnPrefix=' + (sourceArnPrefix == null ? '' : encodeURIComponent(sourceArnPrefix)) + '&Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a registry.
		 * Post v1/registries/name/{registryName}
		 * @param {string} registryName The name of the registry.
		 * @return {void} 
		 */
		CreateRegistry(registryName: string, requestBody: CreateRegistryPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/registries/name/' + (registryName == null ? '' : encodeURIComponent(registryName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a Registry.
		 * Delete v1/registries/name/{registryName}
		 * @param {string} registryName The name of the registry.
		 * @return {void} 
		 */
		DeleteRegistry(registryName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/registries/name/' + (registryName == null ? '' : encodeURIComponent(registryName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the registry.
		 * Get v1/registries/name/{registryName}
		 * @param {string} registryName The name of the registry.
		 * @return {DescribeRegistryResponse} Success
		 */
		DescribeRegistry(registryName: string): Observable<DescribeRegistryResponse> {
			return this.http.get<DescribeRegistryResponse>(this.baseUri + 'v1/registries/name/' + (registryName == null ? '' : encodeURIComponent(registryName)), {});
		}

		/**
		 * Updates a registry.
		 * Put v1/registries/name/{registryName}
		 * @param {string} registryName The name of the registry.
		 * @return {UpdateRegistryResponse} Success
		 */
		UpdateRegistry(registryName: string, requestBody: UpdateRegistryPutBody): Observable<UpdateRegistryResponse> {
			return this.http.put<UpdateRegistryResponse>(this.baseUri + 'v1/registries/name/' + (registryName == null ? '' : encodeURIComponent(registryName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a schema definition.</p> <note><p>Inactive schemas will be deleted after two years.</p></note>
		 * Post v1/registries/name/{registryName}/schemas/name/{schemaName}
		 * @param {string} registryName The name of the registry.
		 * @param {string} schemaName The name of the schema.
		 * @return {void} 
		 */
		CreateSchema(registryName: string, schemaName: string, requestBody: CreateSchemaPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/registries/name/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/schemas/name/' + (schemaName == null ? '' : encodeURIComponent(schemaName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a schema definition.
		 * Delete v1/registries/name/{registryName}/schemas/name/{schemaName}
		 * @param {string} registryName The name of the registry.
		 * @param {string} schemaName The name of the schema.
		 * @return {void} 
		 */
		DeleteSchema(registryName: string, schemaName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/registries/name/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/schemas/name/' + (schemaName == null ? '' : encodeURIComponent(schemaName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the schema definition.
		 * Get v1/registries/name/{registryName}/schemas/name/{schemaName}
		 * @param {string} registryName The name of the registry.
		 * @param {string} schemaName The name of the schema.
		 * @param {string} schemaVersion Specifying this limits the results to only this schema version.
		 * @return {DescribeSchemaResponse} Success
		 */
		DescribeSchema(registryName: string, schemaName: string, schemaVersion: string): Observable<DescribeSchemaResponse> {
			return this.http.get<DescribeSchemaResponse>(this.baseUri + 'v1/registries/name/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/schemas/name/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '&schemaVersion=' + (schemaVersion == null ? '' : encodeURIComponent(schemaVersion)), {});
		}

		/**
		 * <p>Updates the schema definition</p> <note><p>Inactive schemas will be deleted after two years.</p></note>
		 * Put v1/registries/name/{registryName}/schemas/name/{schemaName}
		 * @param {string} registryName The name of the registry.
		 * @param {string} schemaName The name of the schema.
		 * @return {UpdateSchemaResponse} Success
		 */
		UpdateSchema(registryName: string, schemaName: string, requestBody: UpdateSchemaPutBody): Observable<UpdateSchemaResponse> {
			return this.http.put<UpdateSchemaResponse>(this.baseUri + 'v1/registries/name/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/schemas/name/' + (schemaName == null ? '' : encodeURIComponent(schemaName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a discoverer.
		 * Delete v1/discoverers/id/{discovererId}
		 * @param {string} discovererId The ID of the discoverer.
		 * @return {void} 
		 */
		DeleteDiscoverer(discovererId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/discoverers/id/' + (discovererId == null ? '' : encodeURIComponent(discovererId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the discoverer.
		 * Get v1/discoverers/id/{discovererId}
		 * @param {string} discovererId The ID of the discoverer.
		 * @return {DescribeDiscovererResponse} Success
		 */
		DescribeDiscoverer(discovererId: string): Observable<DescribeDiscovererResponse> {
			return this.http.get<DescribeDiscovererResponse>(this.baseUri + 'v1/discoverers/id/' + (discovererId == null ? '' : encodeURIComponent(discovererId)), {});
		}

		/**
		 * Updates the discoverer
		 * Put v1/discoverers/id/{discovererId}
		 * @param {string} discovererId The ID of the discoverer.
		 * @return {UpdateDiscovererResponse} Success
		 */
		UpdateDiscoverer(discovererId: string, requestBody: UpdateDiscovererPutBody): Observable<UpdateDiscovererResponse> {
			return this.http.put<UpdateDiscovererResponse>(this.baseUri + 'v1/discoverers/id/' + (discovererId == null ? '' : encodeURIComponent(discovererId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete the resource-based policy attached to the specified registry.
		 * Delete v1/policy
		 * @param {string} registryName The name of the registry.
		 * @return {void} 
		 */
		DeleteResourcePolicy(registryName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/policy?registryName=' + (registryName == null ? '' : encodeURIComponent(registryName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the resource-based policy attached to a given registry.
		 * Get v1/policy
		 * @param {string} registryName The name of the registry.
		 * @return {GetResourcePolicyResponse} Success
		 */
		GetResourcePolicy(registryName: string): Observable<GetResourcePolicyResponse> {
			return this.http.get<GetResourcePolicyResponse>(this.baseUri + 'v1/policy?registryName=' + (registryName == null ? '' : encodeURIComponent(registryName)), {});
		}

		/**
		 * The name of the policy.
		 * Put v1/policy
		 * @param {string} registryName The name of the registry.
		 * @return {PutResourcePolicyResponse} Success
		 */
		PutResourcePolicy(registryName: string, requestBody: PutResourcePolicyPutBody): Observable<PutResourcePolicyResponse> {
			return this.http.put<PutResourcePolicyResponse>(this.baseUri + 'v1/policy?registryName=' + (registryName == null ? '' : encodeURIComponent(registryName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete the schema version definition
		 * Delete v1/registries/name/{registryName}/schemas/name/{schemaName}/version/{schemaVersion}
		 * @param {string} registryName The name of the registry.
		 * @param {string} schemaName The name of the schema.
		 * @param {string} schemaVersion The version number of the schema
		 * @return {void} 
		 */
		DeleteSchemaVersion(registryName: string, schemaName: string, schemaVersion: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/registries/name/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/schemas/name/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/version/' + (schemaVersion == null ? '' : encodeURIComponent(schemaVersion)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describe the code binding URI.
		 * Get v1/registries/name/{registryName}/schemas/name/{schemaName}/language/{language}
		 * @param {string} language The language of the code binding.
		 * @param {string} registryName The name of the registry.
		 * @param {string} schemaName The name of the schema.
		 * @param {string} schemaVersion Specifying this limits the results to only this schema version.
		 * @return {DescribeCodeBindingResponse} Success
		 */
		DescribeCodeBinding(language: string, registryName: string, schemaName: string, schemaVersion: string): Observable<DescribeCodeBindingResponse> {
			return this.http.get<DescribeCodeBindingResponse>(this.baseUri + 'v1/registries/name/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/schemas/name/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/language/' + (language == null ? '' : encodeURIComponent(language)) + '&schemaVersion=' + (schemaVersion == null ? '' : encodeURIComponent(schemaVersion)), {});
		}

		/**
		 * Put code binding URI
		 * Post v1/registries/name/{registryName}/schemas/name/{schemaName}/language/{language}
		 * @param {string} language The language of the code binding.
		 * @param {string} registryName The name of the registry.
		 * @param {string} schemaName The name of the schema.
		 * @param {string} schemaVersion Specifying this limits the results to only this schema version.
		 * @return {void} 
		 */
		PutCodeBinding(language: string, registryName: string, schemaName: string, schemaVersion: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/registries/name/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/schemas/name/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/language/' + (language == null ? '' : encodeURIComponent(language)) + '&schemaVersion=' + (schemaVersion == null ? '' : encodeURIComponent(schemaVersion)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the code binding source URI.
		 * Get v1/registries/name/{registryName}/schemas/name/{schemaName}/language/{language}/source
		 * @param {string} language The language of the code binding.
		 * @param {string} registryName The name of the registry.
		 * @param {string} schemaName The name of the schema.
		 * @param {string} schemaVersion Specifying this limits the results to only this schema version.
		 * @return {GetCodeBindingSourceResponse} Success
		 */
		GetCodeBindingSource(language: string, registryName: string, schemaName: string, schemaVersion: string): Observable<GetCodeBindingSourceResponse> {
			return this.http.get<GetCodeBindingSourceResponse>(this.baseUri + 'v1/registries/name/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/schemas/name/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/language/' + (language == null ? '' : encodeURIComponent(language)) + '/source&schemaVersion=' + (schemaVersion == null ? '' : encodeURIComponent(schemaVersion)), {});
		}

		/**
		 * Get the discovered schema that was generated based on sampled events.
		 * Post v1/discover
		 * @return {GetDiscoveredSchemaResponse} Success
		 */
		GetDiscoveredSchema(requestBody: GetDiscoveredSchemaPostBody): Observable<GetDiscoveredSchemaResponse> {
			return this.http.post<GetDiscoveredSchemaResponse>(this.baseUri + 'v1/discover', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the registries.
		 * Get v1/registries
		 * @param {string} nextToken The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.
		 * @param {string} registryNamePrefix Specifying this limits the results to only those registry names that start with the specified prefix.
		 * @param {string} scope Can be set to Local or AWS to limit responses to your custom registries, or the ones provided by AWS.
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRegistriesResponse} Success
		 */
		ListRegistries(limit: number, nextToken: string, registryNamePrefix: string, scope: string, Limit: string, NextToken: string): Observable<ListRegistriesResponse> {
			return this.http.get<ListRegistriesResponse>(this.baseUri + 'v1/registries?limit=' + limit + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&registryNamePrefix=' + (registryNamePrefix == null ? '' : encodeURIComponent(registryNamePrefix)) + '&scope=' + (scope == null ? '' : encodeURIComponent(scope)) + '&Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Provides a list of the schema versions and related information.
		 * Get v1/registries/name/{registryName}/schemas/name/{schemaName}/versions
		 * @param {string} nextToken The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.
		 * @param {string} registryName The name of the registry.
		 * @param {string} schemaName The name of the schema.
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSchemaVersionsResponse} Success
		 */
		ListSchemaVersions(limit: number, nextToken: string, registryName: string, schemaName: string, Limit: string, NextToken: string): Observable<ListSchemaVersionsResponse> {
			return this.http.get<ListSchemaVersionsResponse>(this.baseUri + 'v1/registries/name/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/schemas/name/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/versions?limit=' + limit + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * List the schemas.
		 * Get v1/registries/name/{registryName}/schemas
		 * @param {string} nextToken The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.
		 * @param {string} registryName The name of the registry.
		 * @param {string} schemaNamePrefix Specifying this limits the results to only those schema names that start with the specified prefix.
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSchemasResponse} Success
		 */
		ListSchemas(limit: number, nextToken: string, registryName: string, schemaNamePrefix: string, Limit: string, NextToken: string): Observable<ListSchemasResponse> {
			return this.http.get<ListSchemasResponse>(this.baseUri + 'v1/registries/name/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/schemas?limit=' + limit + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&schemaNamePrefix=' + (schemaNamePrefix == null ? '' : encodeURIComponent(schemaNamePrefix)) + '&Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Get tags for resource.
		 * Get tags/{resource_arn}
		 * @param {string} resource_arn The ARN of the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resource_arn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)), {});
		}

		/**
		 * Add tags to a resource.
		 * Post tags/{resource_arn}
		 * @param {string} resource_arn The ARN of the resource.
		 * @return {void} 
		 */
		TagResource(resource_arn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Search the schemas
		 * Get v1/registries/name/{registryName}/schemas/search#keywords
		 * @param {string} keywords Specifying this limits the results to only schemas that include the provided keywords.
		 * @param {string} nextToken The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.
		 * @param {string} registryName The name of the registry.
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchSchemasResponse} Success
		 */
		SearchSchemas(keywords: string, limit: number, nextToken: string, registryName: string, Limit: string, NextToken: string): Observable<SearchSchemasResponse> {
			return this.http.get<SearchSchemasResponse>(this.baseUri + 'v1/registries/name/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/schemas/search#keywords?keywords=' + (keywords == null ? '' : encodeURIComponent(keywords)) + '&limit=' + limit + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Starts the discoverer
		 * Post v1/discoverers/id/{discovererId}/start
		 * @param {string} discovererId The ID of the discoverer.
		 * @return {StartDiscovererResponse} Success
		 */
		StartDiscoverer(discovererId: string): Observable<StartDiscovererResponse> {
			return this.http.post<StartDiscovererResponse>(this.baseUri + 'v1/discoverers/id/' + (discovererId == null ? '' : encodeURIComponent(discovererId)) + '/start', null, {});
		}

		/**
		 * Stops the discoverer
		 * Post v1/discoverers/id/{discovererId}/stop
		 * @param {string} discovererId The ID of the discoverer.
		 * @return {StopDiscovererResponse} Success
		 */
		StopDiscoverer(discovererId: string): Observable<StopDiscovererResponse> {
			return this.http.post<StopDiscovererResponse>(this.baseUri + 'v1/discoverers/id/' + (discovererId == null ? '' : encodeURIComponent(discovererId)) + '/stop', null, {});
		}

		/**
		 * Removes tags from a resource.
		 * Delete tags/{resource_arn}#tagKeys
		 * @param {string} resource_arn The ARN of the resource.
		 * @param {Array<string>} tagKeys Keys of key-value pairs.
		 * @return {void} 
		 */
		UntagResource(resource_arn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}
	}

	export interface CreateDiscovererPostBody {

		/**
		 * A description for the discoverer.
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string;

		/**
		 * The ARN of the event bus.
		 * Required
		 * Max length: 1600
		 * Min length: 20
		 */
		SourceArn: string;

		/** Key-value pairs associated with a resource. */
		tags?: {[id: string]: string };
	}

	export interface CreateRegistryPostBody {

		/**
		 * A description of the registry to be created.
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string;

		/** Key-value pairs associated with a resource. */
		tags?: {[id: string]: string };
	}

	export interface UpdateRegistryPutBody {

		/**
		 * The description of the registry to update.
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string;
	}

	export interface CreateSchemaPostBody {

		/**
		 * The source of the schema definition.
		 * Required
		 * Max length: 100000
		 * Min length: 1
		 */
		Content: string;

		/**
		 * A description of the schema.
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string;

		/** Key-value pairs associated with a resource. */
		tags?: {[id: string]: string };

		/**
		 * The type of schema.
		 * Required
		 */
		Type: Type;
	}

	export interface UpdateSchemaPutBody {

		/**
		 * The ID of the client token.
		 * Max length: 36
		 * Min length: 0
		 */
		ClientTokenId?: string;

		/**
		 * The source of the schema definition.
		 * Max length: 100000
		 * Min length: 1
		 */
		Content?: string;

		/**
		 * The description of the schema.
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string;

		/** The schema type for the events schema. */
		Type?: Type;
	}

	export interface UpdateDiscovererPutBody {

		/**
		 * The description of the discoverer to update.
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string;
	}

	export interface PutResourcePolicyPutBody {

		/**
		 * The resource-based policy.
		 * Required
		 */
		Policy: string;

		/** The revision ID of the policy. */
		RevisionId?: string;
	}

	export interface GetDiscoveredSchemaPostBody {

		/**
		 * An array of strings where each string is a JSON event. These are the events that were used to generate the schema. The array includes a single type of event and has a maximum size of 10 events.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		Events: Array<string>;

		/**
		 * The type of event.
		 * Required
		 */
		Type: Type;
	}

	export interface TagResourcePostBody {

		/**
		 * Key-value pairs associated with a resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}

}

