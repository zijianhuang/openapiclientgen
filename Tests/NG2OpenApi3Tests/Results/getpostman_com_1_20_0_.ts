import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get all APIs
		 * This call fetches all the APIs present in the specified workspace
		 * Response contains an array named `apis` which would contain all the details of APIs present in the workspace.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Get apis
		 * @param {string} workspace Only return APIs that are inside the given workspace.
		 * @param {string} since Only return APIs that have been updated after this time. Time is represented using the ISO 8601 date and time format.
		 * @param {string} until Only return APIs that have been updated before this time. Time is represented using the ISO 8601 date and time format.
		 * @param {string} createdBy Only return APIs that have been created by the user ID represented by the given value.
		 * @param {string} updatedBy Only return APIs that have been updated by the user ID represented by the given value.
		 * @param {string} isPublic Only return APIs with the corresponding privacy state. Public APIs have the isPublic value true; private APIs have the isPublic value false.
		 * @param {string} name Only return APIs whose name includes the given value. Matching is case insensitive.
		 * @param {string} summary Only return APIs whose summary includes the given value. Matching is case insensitive.
		 * @param {string} description Only return APIs whose description includes the given value. Matching is case insensitive.
		 * @param {string} sort The value of sort can be one of the names of the fields included in the response.
		 * @param {string} direction The sorting direction, which can be ascending or descending. The value can be asc to specify an ascending direction or desc to specify a descending direction. If none is specified, the default sorting direction is descending for timestamp and numeric fields and ascending otherwise. An ID is not considered a numeric field.
		 * @return {void} 
		 */
		GetAllApIs(workspace: string | null | undefined, since: string | null | undefined, until: string | null | undefined, createdBy: string | null | undefined, updatedBy: string | null | undefined, isPublic: string | null | undefined, name: string | null | undefined, summary: string | null | undefined, description: string | null | undefined, sort: string | null | undefined, direction: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'apis?workspace=' + (workspace == null ? '' : encodeURIComponent(workspace)) + '&since=' + (since == null ? '' : encodeURIComponent(since)) + '&until=' + (until == null ? '' : encodeURIComponent(until)) + '&createdBy=' + (createdBy == null ? '' : encodeURIComponent(createdBy)) + '&updatedBy=' + (updatedBy == null ? '' : encodeURIComponent(updatedBy)) + '&isPublic=' + (isPublic == null ? '' : encodeURIComponent(isPublic)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&summary=' + (summary == null ? '' : encodeURIComponent(summary)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&direction=' + (direction == null ? '' : encodeURIComponent(direction)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create API
		 * This call creates a new API with a default API Version.
		 * Request body should contain an `api` object which should atleast have a property `name`.
		 * Response contains an `api` object with all the details related to the created API, namely, `id`, `name`, `summary`, `description`, etc.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Post apis
		 * @return {CreateApiReturn} Create API
		 */
		CreateApi(workspace: string | null | undefined, requestBody: CreateApiPostBody): Observable<CreateApiReturn> {
			return this.http.post<CreateApiReturn>(this.baseUri + 'apis?workspace=' + (workspace == null ? '' : encodeURIComponent(workspace)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an API
		 * This call deletes an existing API having the specified id.
		 * Response contains an `api` object with `id` of the API which was deleted.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Delete apis/{apiId}
		 * @return {DeleteAnApiReturn} Delete an API
		 */
		DeleteAnApi(): Observable<DeleteAnApiReturn> {
			return this.http.delete<DeleteAnApiReturn>(this.baseUri + 'apis/{apiId}', {});
		}

		/**
		 * Single API
		 * This call fetches a single API having the specified id.
		 * Response contains an `api` object with all the details related to the queried API, namely, `id`, `name`, `summary`, `description` etc.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Get apis/{apiId}
		 * @return {SingleApiReturn} Get single API
		 */
		SingleApi(): Observable<SingleApiReturn> {
			return this.http.get<SingleApiReturn>(this.baseUri + 'apis/{apiId}', {});
		}

		/**
		 * Update an API
		 * This call updates an existing API .
		 * Request body should contain an `api` object which should have the fields to be updated. Only `name`, `summary` and `description` fields can be edited for an API.
		 * Response contains an `api` object with all the details related to the created API, namely, `id`, `name`, `summary`, `description` etc.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Put apis/{apiId}
		 * @return {UpdateAnApiReturn} Update an API
		 */
		UpdateAnApi(requestBody: UpdateAnApiPutBody): Observable<UpdateAnApiReturn> {
			return this.http.put<UpdateAnApiReturn>(this.baseUri + 'apis/{apiId}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get All API Versions
		 * This call fetches details about the all the API Versions in the specified API.
		 * The response will contain an array `versions` object which would be a list of all the API Version along with their details.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Get apis/{apiId}/versions
		 * @return {GetAllApiVersionsReturn} Get All API versions
		 */
		GetAllApiVersions(): Observable<GetAllApiVersionsReturn> {
			return this.http.get<GetAllApiVersionsReturn>(this.baseUri + 'apis/{apiId}/versions', {});
		}

		/**
		 * Create API Version
		 * This call creates a new API version in the specified API.
		 * Request body should contain a `version` object which should have fields:
		 * <table>
		 * <tr>
		 * <td>name</td>
		 * <td>Required. Name of the API Version</td>
		 * </tr>
		 * <tr>
		 * <td>source</td>
		 * <td>
		 * If specified, it will copy the contents of the specified api version to create a new api verison.
		 * <table>
		 * <tr>
		 * <td>id</td>
		 * <td>Required. Id of the apiversion from where the details are to be copied</td>
		 * </tr>
		 * <tr>
		 * <td>schema</td>
		 * <td>Boolean. If true then copies the schema from the specified api version</td>
		 * </tr>
		 * <tr>
		 * <td>relations</td>
		 * <td>Object. {"&lt;relationType&gt;": true/false}.
		 * Allowed relation types are `mock`, `monitor`, `documentation`, `contracttest`, `integrationtest`, `testsuite`, `environment`
		 * Relation types which should be copied over to the new api verison</td>
		 * </tr>
		 * </table>
		 * </td>
		 * </tr>
		 * </table>
		 * Response contains a `version` object with all the details related to the created API Version, namely, `id`, `name`, `api`.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Post apis/{apiId}/versions
		 * @return {CreateApiVersionReturn} Create API version
		 */
		CreateApiVersion(requestBody: CreateApiVersionPostBody): Observable<CreateApiVersionReturn> {
			return this.http.post<CreateApiVersionReturn>(this.baseUri + 'apis/{apiId}/versions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an API Version
		 * This call deletes an existing API Version having the specified id.
		 * Response contains an `version` object with `id` of the API Version which was deleted.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Delete apis/{apiId}/versions/{apiVersionId}
		 * @return {DeleteAnApiVersionReturn} Delete an API version
		 */
		DeleteAnApiVersion(): Observable<DeleteAnApiVersionReturn> {
			return this.http.delete<DeleteAnApiVersionReturn>(this.baseUri + 'apis/{apiId}/versions/{apiVersionId}', {});
		}

		/**
		 * Get an API Version
		 * This call fetches details about the specified API Version.
		 * The response will contain a `version` object which would contain all the details of the API Version.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Get apis/{apiId}/versions/{apiVersionId}
		 * @return {GetAnApiVersionReturn} Get an API version
		 */
		GetAnApiVersion(): Observable<GetAnApiVersionReturn> {
			return this.http.get<GetAnApiVersionReturn>(this.baseUri + 'apis/{apiId}/versions/{apiVersionId}', {});
		}

		/**
		 * Update an API Version
		 * This call updates an existing API Version.
		 * Request body should contain a `version` object with the fields which need to be updated. Only field which can be updated is `name`.
		 * Response contains a `version` object with all the details related to the created API Version, namely, `id`, `name`, `api` etc.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Put apis/{apiId}/versions/{apiVersionId}
		 * @return {UpdateAnApiVersionReturn} Update an API version
		 */
		UpdateAnApiVersion(requestBody: UpdateAnApiVersionPutBody): Observable<UpdateAnApiVersionReturn> {
			return this.http.put<UpdateAnApiVersionReturn>(this.baseUri + 'apis/{apiId}/versions/{apiVersionId}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get contract test relations
		 * This call fetches all the relations by type which are linked to the specified API version along with their details.
		 * The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Get apis/{apiId}/versions/{apiVersionId}/contracttest
		 * @return {GetContractTestRelationsReturn} Get contract test relations
		 */
		GetContractTestRelations(): Observable<GetContractTestRelationsReturn> {
			return this.http.get<GetContractTestRelationsReturn>(this.baseUri + 'apis/{apiId}/versions/{apiVersionId}/contracttest', {});
		}

		/**
		 * Get  documentation relations
		 * This call fetches all the relations by type which are linked to the specified API version along with their details.
		 * The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Get apis/{apiId}/versions/{apiVersionId}/documentation
		 * @return {GetDocumentationRelationsReturn} Get documentation relations
		 */
		GetDocumentationRelations(): Observable<GetDocumentationRelationsReturn> {
			return this.http.get<GetDocumentationRelationsReturn>(this.baseUri + 'apis/{apiId}/versions/{apiVersionId}/documentation', {});
		}

		/**
		 * Get environment relations
		 * This call fetches all the relations by type which are linked to the specified API version along with their details.
		 * The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Get apis/{apiId}/versions/{apiVersionId}/environment
		 * @return {GetEnvironmentRelationsReturn} Get environment relations
		 */
		GetEnvironmentRelations(): Observable<GetEnvironmentRelationsReturn> {
			return this.http.get<GetEnvironmentRelationsReturn>(this.baseUri + 'apis/{apiId}/versions/{apiVersionId}/environment', {});
		}

		/**
		 * Get integration test relations
		 * This call fetches all the relations by type which are linked to the specified API version along with their details.
		 * The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Get apis/{apiId}/versions/{apiVersionId}/integrationtest
		 * @return {GetIntegrationTestRelationsReturn} Get integration test relations
		 */
		GetIntegrationTestRelations(): Observable<GetIntegrationTestRelationsReturn> {
			return this.http.get<GetIntegrationTestRelationsReturn>(this.baseUri + 'apis/{apiId}/versions/{apiVersionId}/integrationtest', {});
		}

		/**
		 * Get monitor relations
		 * This call fetches all the relations by type which are linked to the specified API version along with their details.
		 * The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Get apis/{apiId}/versions/{apiVersionId}/monitor
		 * @return {GetMonitorRelationsReturn} Get monitor relations
		 */
		GetMonitorRelations(): Observable<GetMonitorRelationsReturn> {
			return this.http.get<GetMonitorRelationsReturn>(this.baseUri + 'apis/{apiId}/versions/{apiVersionId}/monitor', {});
		}

		/**
		 * Get linked relations
		 * This call fetches all the relations which are linked to the specified API version along with their details.
		 * The response will contain a `relations` object which lists all the relation types which are linked to the API version. Each of the relation type will be an object which details the relations of this type.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Get apis/{apiId}/versions/{apiVersionId}/relations
		 * @return {GetLinkedRelationsReturn} Get linked relations for an API version
		 */
		GetLinkedRelations(): Observable<GetLinkedRelationsReturn> {
			return this.http.get<GetLinkedRelationsReturn>(this.baseUri + 'apis/{apiId}/versions/{apiVersionId}/relations', {});
		}

		/**
		 * Create relations
		 * This call allows you to add existing Postman entities as new relations to an API. The request body should contain the relations to be created along with an array of entity IDs.
		 * <table>
		 * <tr>
		 * <th>Relation</th>
		 * <th>Entity ID type</th>
		 * <tr>
		 * <tr>
		 * <td>contracttest</td>
		 * <td>Collection UIDs</td>
		 * </tr>
		 * <tr>
		 * <td>integrationtest</td>
		 * <td>Collection UIDs</td>
		 * </tr>
		 * <tr>
		 * <td>documentation</td>
		 * <td>Collection UIDs</td>
		 * </tr>
		 * <tr>
		 * <td>testsuite</td>
		 * <td>Collection UIDs</td>
		 * </tr>
		 * <tr>
		 * <td>environment</td>
		 * <td>Environment UIDs</td>
		 * </tr>
		 * <tr>
		 * <td>mock</td>
		 * <td>Mock IDs</td>
		 * </tr>
		 * <tr>
		 * <td>monitor</td>
		 * <td>Monitor IDs</td>
		 * </tr>
		 * </table>
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Post apis/{apiId}/versions/{apiVersionId}/relations
		 * @return {CreateRelationsReturn} Create multiple relations from existing collections
		 */
		CreateRelations(requestBody: CreateRelationsPostBody): Observable<CreateRelationsReturn> {
			return this.http.post<CreateRelationsReturn>(this.baseUri + 'apis/{apiId}/versions/{apiVersionId}/relations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create Schema
		 * This call creates a new schema.
		 * Request body should contain a `schema` object which should atleast have these properties with `string` values:
		 * - **`type`**: Allowed types are `openapi3`, `openapi2`, `openapi1`, `raml` and `graphql`.
		 * - **`language`** : Allowed languages are `json` and `yaml` for OpenAPI and RAML schema types. GraphQL schema type accepts only `graphql` language.
		 * - **`schema`**: Optional. If passed, must be the content of the schema as a `string`.
		 * Response contains a `schema` object with all the details related to the created schema, namely, `id`, `language`, `type` etc.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Post apis/{apiId}/versions/{apiVersionId}/schemas
		 * @return {CreateSchemaReturn} Create schema
		 */
		CreateSchema(requestBody: CreateSchemaPostBody): Observable<CreateSchemaReturn> {
			return this.http.post<CreateSchemaReturn>(this.baseUri + 'apis/{apiId}/versions/{apiVersionId}/schemas', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Schema
		 * This call fetches a single schema having the specified id.
		 * Response contains a `schema` object with all the details related to the schema, namely, `id`, `language`, `type`, `schema` etc.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Get apis/{apiId}/versions/{apiVersionId}/schemas/{schemaId}
		 * @return {GetSchemaReturn} Get schema
		 */
		GetSchema(): Observable<GetSchemaReturn> {
			return this.http.get<GetSchemaReturn>(this.baseUri + 'apis/{apiId}/versions/{apiVersionId}/schemas/{schemaId}', {});
		}

		/**
		 * Update Schema
		 * This call updates an existing schema.
		 * Request body should contain a `schema` object which should atleast have these properties with `string` values:
		 * - **`type`**: Allowed types are `openapi3`, `openapi2`, `openapi1`, `raml` and `graphql`.
		 * - **`language`** : Allowed languages are `json` and `yaml` for OpenAPI and RAML schema types. GraphQL schema type accepts only `graphql` language.
		 * - **`schema`**: Optional. If passed, must be the content of the schema as a `string`.
		 * Response contains a `schema` object with all the details related to the created schema, namely, `id`, `language`, `type` etc.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Put apis/{apiId}/versions/{apiVersionId}/schemas/{schemaId}
		 * @return {UpdateSchemaReturn} Update schema
		 */
		UpdateSchema(requestBody: UpdateSchemaPutBody): Observable<UpdateSchemaReturn> {
			return this.http.put<UpdateSchemaReturn>(this.baseUri + 'apis/{apiId}/versions/{apiVersionId}/schemas/{schemaId}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create collection from schema
		 * This call creates a collection and links it to an API as one or multiple relations.
		 * Request body requires two keys:
		 * - `name` - Name of the collection to be created.
		 * - `relations` - A list of relation(s) to be created.
		 * The allowed relation types are `contracttest`, `integrationtest`, `testsuite`, and `documentation`.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Post apis/{apiId}/versions/{apiVersionId}/schemas/{schemaId}/collections
		 * @return {CreateCollectionFromSchemaReturn} Create collection from schema
		 */
		CreateCollectionFromSchema(workspace: string | null | undefined, requestBody: CreateCollectionFromSchemaPostBody): Observable<CreateCollectionFromSchemaReturn> {
			return this.http.post<CreateCollectionFromSchemaReturn>(this.baseUri + 'apis/{apiId}/versions/{apiVersionId}/schemas/{schemaId}/collections?workspace=' + (workspace == null ? '' : encodeURIComponent(workspace)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get test suite relations
		 * This call fetches all the relations by type which are linked to the specified API version along with their details.
		 * The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Get apis/{apiId}/versions/{apiVersionId}/testsuite
		 * @return {GetTestSuiteRelationsReturn} Get test suite relations
		 */
		GetTestSuiteRelations(): Observable<GetTestSuiteRelationsReturn> {
			return this.http.get<GetTestSuiteRelationsReturn>(this.baseUri + 'apis/{apiId}/versions/{apiVersionId}/testsuite', {});
		}

		/**
		 * Sync relations with schema
		 * This call allows you to keep the relation in sync with the API schema.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Put apis/{apiId}/versions/{apiVersionId}/{entityType}/{entityId}/syncWithSchema
		 * @return {SyncRelationsWithSchemaReturn} Successful sync
		 */
		SyncRelationsWithSchema(): Observable<SyncRelationsWithSchemaReturn> {
			return this.http.put<SyncRelationsWithSchemaReturn>(this.baseUri + 'apis/{apiId}/versions/{apiVersionId}/{entityType}/{entityId}/syncWithSchema', null, {});
		}

		/**
		 * All Collections
		 * The `/collections` endpoint returns a list of all [collections](https://www.getpostman.com/docs/collections) that are accessible by you. The list includes your own collections and the collections that you have subscribed to.
		 * The response contains an array of collection information containing the `name`, `id`, `owner` and `uid` of each collection.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Get collections
		 * @return {AllCollectionsReturn} Valid Response
		 */
		AllCollections(): Observable<AllCollectionsReturn> {
			return this.http.get<AllCollectionsReturn>(this.baseUri + 'collections', {});
		}

		/**
		 * Create Collection
		 * This endpoint allows you to create collections using the Postman Collection v2 format. For more information about the v2 schema, check the format [here](https://schema.getpostman.com/json/collection/v2.0.0/docs/index.html).
		 * On successful creation of the collection, the response returns the collection `name`, `id` and the `uid`.
		 * You can also specify the context of a workspace to create a collection in directly by passing the `workspace` as a query param.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Post collections
		 * @return {CreateCollectionReturn} Create Collection in a Workspace
		 */
		CreateCollection(requestBody: CreateCollectionPostBody): Observable<CreateCollectionReturn> {
			return this.http.post<CreateCollectionReturn>(this.baseUri + 'collections', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a Fork
		 * This endpoint allows you to create a fork from an existing collection.
		 * On successful creation of the collection, the response returns the collection `name`, `id`, `uid` along with `fork` information.
		 * You can also specify the context of a workspace to fork a collection in by passing the `workspace` as a query param.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Post collections/fork/{collection_uid}
		 * @param {string} workspace Workspace ID is required to create a fork
		 * @return {void} 
		 */
		CreateAFork(workspace: string | null | undefined, requestBody: CreateAForkPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'collections/fork/{collection_uid}?workspace=' + (workspace == null ? '' : encodeURIComponent(workspace)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Merge a Fork
		 * This endpoint allows you to merge a forked collection back to its destination collection.
		 * On successful creation of the collection, the response returns the collection `name`, `id` and `uid`.
		 * You need to specify the fork UID (as `source`) and destination collection UID (as `destination`) in the request body.
		 * Optionally, you can also specify the merge strategy as either `deleteSource` or `updateSourceWithDestination`. Following is an explanation of the merge strategies
		 * | Merge Strategy | Behaviour |
		 * | --- | --- |
		 * | deleteSource | Forked collection is deleted after merging |
		 * | updateSourceWithDestination | Forked collection is up to date with changes in destination collection |
		 * If the collections cannot be merged (due to conflicts), appropriate error messages will be returned.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Post collections/merge
		 * @return {void} 
		 */
		MergeAFork(requestBody: MergeAForkPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'collections/merge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Collection
		 * This endpoint allows you to delete an existing collection.
		 * On successful deletion of the collection, the response returns the `id` and `uid`.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Delete collections/{collection_uid}
		 * @return {DeleteCollectionReturn} Collection Deleted
		 */
		DeleteCollection(): Observable<DeleteCollectionReturn> {
			return this.http.delete<DeleteCollectionReturn>(this.baseUri + 'collections/{collection_uid}', {});
		}

		/**
		 * Single Collection
		 * Access the contents of a collection that is accessible to you using its unique id (`uid`).
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Get collections/{collection_uid}
		 * @return {SingleCollectionReturn} Valid Response
		 */
		SingleCollection(): Observable<SingleCollectionReturn> {
			return this.http.get<SingleCollectionReturn>(this.baseUri + 'collections/{collection_uid}', {});
		}

		/**
		 * Update Collection
		 * This endpoint allows you to update an existing collection using the Postman Collection v2 format. For more information about the v2 schema, check the format [here](https://schema.getpostman.com/json/collection/v2.0.0/docs/index.html).
		 * On successful updation of the collection, the response returns the collection `name`, `id` and `uid`.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Note: Please be careful when trying to update the collection, as the existing collection will be replaced by the request body.
		 * Put collections/{collection_uid}
		 * @return {UpdateCollectionReturn} Collection Updated
		 */
		UpdateCollection(requestBody: UpdateCollectionPutBody): Observable<UpdateCollectionReturn> {
			return this.http.put<UpdateCollectionReturn>(this.baseUri + 'collections/{collection_uid}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * All Environments
		 * The `/environments` endpoint returns a list of all [environments](https://www.getpostman.com/docs/environments) that belong to you..
		 * The response contains an array of environments' information containing the `name`, `id`, `owner` and `uid` of each environment.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Get environments
		 * @return {AllEnvironmentsReturn} Valid Response
		 */
		AllEnvironments(): Observable<AllEnvironmentsReturn> {
			return this.http.get<AllEnvironmentsReturn>(this.baseUri + 'environments', {});
		}

		/**
		 * Create Environment
		 * A sample body is added to the request that conforms to the following JSON schema:
		 * ```json
		 * {
		 * "type": "object",
		 * "properties": {
		 * "environment": {
		 * "type": "object",
		 * "properties": {
		 * "name": {
		 * "type": "string",
		 * "maxLength": 254,
		 * "minLength": 1
		 * },
		 * "values": {
		 * "type": "array",
		 * "maxItems": 100,
		 * "additionalItems": false,
		 * "items": {
		 * "type": "object",
		 * "properties": {
		 * "key": {
		 * "type": "string",
		 * "maxLength": 254
		 * "minLength": 1
		 * },
		 * "value": { "type": "string" },
		 * "enabled": { "type": "boolean" }
		 * },
		 * "required": ["key", "value"]
		 * }
		 * }
		 * },
		 * "required": ["name"]
		 * }
		 * },
		 * "required": ["environment"]
		 * }
		 * ```
		 * On successful creation of the environment, the API returns the environment name and `id`.
		 * You can also specify the context of a workspace to create an environment in directly by passing the `workspace` as a query param.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Post environments
		 * @return {CreateEnvironmentReturn} Successful Response
		 */
		CreateEnvironment(requestBody: CreateEnvironmentPostBody): Observable<CreateEnvironmentReturn> {
			return this.http.post<CreateEnvironmentReturn>(this.baseUri + 'environments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete Environment
		 * This endpoint allows you to delete a single environment based on an environment's unique `uid`.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Delete environments/{environment_uid}
		 * @return {DeleteEnvironmentReturn} Environment Deleted
		 */
		DeleteEnvironment(): Observable<DeleteEnvironmentReturn> {
			return this.http.delete<DeleteEnvironmentReturn>(this.baseUri + 'environments/{environment_uid}', {});
		}

		/**
		 * Single Environment
		 * Access the contents of an environment that is accessible to you using its unique id (`uid`).
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Get environments/{environment_uid}
		 * @return {SingleEnvironmentReturn} Valid Response
		 */
		SingleEnvironment(): Observable<SingleEnvironmentReturn> {
			return this.http.get<SingleEnvironmentReturn>(this.baseUri + 'environments/{environment_uid}', {});
		}

		/**
		 * Update Environment
		 * This endpoint replaces an existing environment.
		 * A sample body is added to the request that conforms to the following JSON schema:
		 * ```json
		 * {
		 * "type": "object",
		 * "properties": {
		 * "environment": {
		 * "type": "object",
		 * "properties": {
		 * "name": {
		 * "type": "string",
		 * "maxLength": 254,
		 * "minLength": 1
		 * },
		 * "values": {
		 * "type": "array",
		 * "maxItems": 100,
		 * "additionalItems": false,
		 * "items": {
		 * "type": "object",
		 * "properties": {
		 * "key": {
		 * "type": "string",
		 * "maxLength": 254,
		 * "minLength": 1
		 * },
		 * "value": {
		 * "type": "string",
		 * "maxLength": 254,
		 * "minLength": 1
		 * },
		 * "type": {
		 * "type": "string"
		 * },
		 * "enabled": {
		 * "type": "boolean"
		 * }
		 * },
		 * "required": [
		 * "key",
		 * "value"
		 * ]
		 * }
		 * }
		 * }
		 * }
		 * },
		 * "required": [
		 * "environment"
		 * ]
		 * }
		 * ```
		 * On successful updation of the environment, the API returns the environment name and `id`.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Put environments/{environment_uid}
		 * @return {UpdateEnvironmentReturn} Successful Response
		 */
		UpdateEnvironment(requestBody: UpdateEnvironmentPutBody): Observable<UpdateEnvironmentReturn> {
			return this.http.put<UpdateEnvironmentReturn>(this.baseUri + 'environments/{environment_uid}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Import external API specification
		 * This endpoint allows you to import external API specifications into Postman.
		 * Currently, this endpoint only supports the <a href="https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md">OpenAPI</a> specification, for which the `importType` will be `openapi`.
		 * On a successful import, the response will be an array with each element contaning `id`, `name` and `uid` of entities created.
		 * Supported `type`s:
		 * - string
		 * - json
		 * - file
		 * The `input` parameter should be defined based on the `type`.
		 * > To import a file, request body must be form-data with `type` param set to `file`.
		 * **Note**: Refer to examples for different scenarios.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header.
		 * Post import/openapi
		 * @return {ImportExternalApiSpecificationReturn} Success: Import to a specific workspace with workspace ID passed as a query parameter
		 */
		ImportExternalApiSpecification(requestBody: ImportExternalApiSpecificationPostBody): Observable<ImportExternalApiSpecificationReturn> {
			return this.http.post<ImportExternalApiSpecificationReturn>(this.baseUri + 'import/openapi', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * API Key Owner
		 * the `/me` Postman API endpoint lets you access information about the authenticated user. You can retrieve the authenticated user's username, full name, e-mail address, and any other available information.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Get me
		 * @return {ApiKeyOwnerReturn} Valid Response
		 */
		ApiKeyOwner(): Observable<ApiKeyOwnerReturn> {
			return this.http.get<ApiKeyOwnerReturn>(this.baseUri + 'me', {});
		}

		/**
		 * All Mocks
		 * This endpoint fetches all the mocks that you have created.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Get mocks
		 * @return {AllMocksReturn} Successful Response
		 */
		AllMocks(): Observable<AllMocksReturn> {
			return this.http.get<AllMocksReturn>(this.baseUri + 'mocks', {});
		}

		/**
		 * Create Mock
		 * This endpoint allows you to create a mock on a collection. You can also provide an environment UID to resolve any environment variables in the collection.
		 * You can also specify the context of a workspace to create a mock in directly by passing the `workspace` as a query param.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Post mocks
		 * @return {CreateMockReturn} Successful Response
		 */
		CreateMock(requestBody: CreateMockPostBody): Observable<CreateMockReturn> {
			return this.http.post<CreateMockReturn>(this.baseUri + 'mocks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete Mock
		 * This endpoint allows you to delete an existing mock using its `uid`.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Delete mocks/{mock_uid}
		 * @return {DeleteMockReturn} Successful Response
		 */
		DeleteMock(): Observable<DeleteMockReturn> {
			return this.http.delete<DeleteMockReturn>(this.baseUri + 'mocks/{mock_uid}', {});
		}

		/**
		 * Single Mock
		 * This endpoint fetches you the basic information about a single mock using its `uid`.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Get mocks/{mock_uid}
		 * @return {SingleMockReturn} Successful Response
		 */
		SingleMock(): Observable<SingleMockReturn> {
			return this.http.get<SingleMockReturn>(this.baseUri + 'mocks/{mock_uid}', {});
		}

		/**
		 * Update Mock
		 * This endpoint allows you to update a mock you have created using its `uid`. The endpoint allows you to edit fields,
		 * * name
		 * * environment
		 * * description
		 * * private
		 * * versionTag
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Put mocks/{mock_uid}
		 * @return {UpdateMockReturn} success Response
		 */
		UpdateMock(requestBody: UpdateMockPutBody): Observable<UpdateMockReturn> {
			return this.http.put<UpdateMockReturn>(this.baseUri + 'mocks/{mock_uid}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Publish Mock
		 * This endpoint publishes the mock you have created using its `uid`
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key ` request header or `apikey` URL query parameter.
		 * Post mocks/{mock_uid}/publish
		 * @return {PublishMockReturn} Success Response
		 */
		PublishMock(): Observable<PublishMockReturn> {
			return this.http.post<PublishMockReturn>(this.baseUri + 'mocks/{mock_uid}/publish', null, {});
		}

		/**
		 * Unpublish Mock
		 * This endpoint unpublishes the mock you have created using its `uid`
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key ` request header or `apikey` URL query parameter.
		 * Delete mocks/{mock_uid}/unpublish
		 * @return {UnpublishMockReturn} Success Response
		 */
		UnpublishMock(): Observable<UnpublishMockReturn> {
			return this.http.delete<UnpublishMockReturn>(this.baseUri + 'mocks/{mock_uid}/unpublish', {});
		}

		/**
		 * All Monitors
		 * The `/monitors` endpoint returns a list of all [monitors](https://monitor.getpostman.com/) that are accessible by you.
		 * The response contains an array of monitors information containing the `name`, `id`, `owner` and `uid` of each monitor.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Get monitors
		 * @return {AllMonitorsReturn} Successful Response
		 */
		AllMonitors(): Observable<AllMonitorsReturn> {
			return this.http.get<AllMonitorsReturn>(this.baseUri + 'monitors', {});
		}

		/**
		 * Create Monitor
		 * This endpoint allows you to create a monitor.
		 * Some sample `cron` values are:
		 * | Frequency                  | Cron Pattern   |
		 * |-----------------------|----------------|
		 * | Every 5 minutes       | `5 * * * *`  |
		 * | Every 30 minutes     | `30 * * * *` |
		 * | Every Hour         | `0 1 * * *`  |
		 * | Every 6 Hours      | `0 6 * * *`  |
		 * | Every day at 5pm    | `0 17 * * *`   |
		 * | Every Monday at 12pm  | `0 12 * * MON` |
		 * | Every weekday (Monday - Friday) at 6am | `0 6 * * MON-FRI` |
		 * Note: Currently, you can only create monitors at some limited schedules. You can head to [Postman Monitors](https://monitor.getpostman.com) to see the allowed schedules.
		 * For more information about the format of the `timezone` value, check this [list of time zones.](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
		 * You can also specify the context of a workspace to create a monitor in directly by passing the `workspace` as a query param.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Post monitors
		 * @return {CreateMonitorReturn} Create Monitor in a Workspace
		 */
		CreateMonitor(requestBody: CreateMonitorPostBody): Observable<CreateMonitorReturn> {
			return this.http.post<CreateMonitorReturn>(this.baseUri + 'monitors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete Monitor
		 * This endpoint can be used to delete an existing monitor using its `uid`.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Delete monitors/{monitor_uid}
		 * @return {DeleteMonitorReturn} Monitor Deleted
		 */
		DeleteMonitor(): Observable<DeleteMonitorReturn> {
			return this.http.delete<DeleteMonitorReturn>(this.baseUri + 'monitors/{monitor_uid}', {});
		}

		/**
		 * Single Monitor
		 * This endpoint fetches you basic information about the monitor using its `uid`.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Get monitors/{monitor_uid}
		 * @return {SingleMonitorReturn} Successful Response
		 */
		SingleMonitor(): Observable<SingleMonitorReturn> {
			return this.http.get<SingleMonitorReturn>(this.baseUri + 'monitors/{monitor_uid}', {});
		}

		/**
		 * Update Monitor
		 * This endpoint allows you to update a monitor using its `uid`. Only the monitor name and its schedule can be updated.
		 * Some example `cron` values are:
		 * | Frequency                  | Cron Pattern   |
		 * |-----------------------|----------------|
		 * | Every 5 minutes       | `5 * * * *`  |
		 * | Every 30 minutes     | `30 * * * *` |
		 * | Every Hour         | `0 1 * * *`  |
		 * | Every 6 Hours      | `0 6 * * *`  |
		 * | Every day at 5pm    | `0 17 * * *`   |
		 * | Every Monday at 12pm  | `0 12 * * MON` |
		 * | Every weekday (Monday - Friday) at 6am | `0 6 * * MON-FRI` |
		 * Note: Currently, you can only create monitors at some limited schedules. You can head to [Postman Monitors](https://monitor.getpostman.com) to see the allowed schedules.
		 * For more information about the format of the `timezone` value, check this [list of time zones.](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Put monitors/{monitor_uid}
		 * @return {UpdateMonitorReturn} Monitor Updated
		 */
		UpdateMonitor(requestBody: UpdateMonitorPutBody): Observable<UpdateMonitorReturn> {
			return this.http.put<UpdateMonitorReturn>(this.baseUri + 'monitors/{monitor_uid}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Run a Monitor
		 * This endpoint will run the monitor instantly and wait for the monitor to run completely. It responds with the run results.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Post monitors/{monitor_uid}/run
		 * @return {RunAMonitorReturn} Monitor Run with Errors
		 */
		RunAMonitor(): Observable<RunAMonitorReturn> {
			return this.http.post<RunAMonitorReturn>(this.baseUri + 'monitors/{monitor_uid}/run', null, {});
		}

		/**
		 * Create Webhook
		 * Create a webhook that triggers a collection with your custom payload.
		 * You can specify the webhook name and the collection to trigger by using the following attributes of the `webhook` object on your JSON body:
		 * * `name`: the name of the webhook that you're creating.
		 * * `collection`: the ID of the collection that you want to trigger once this webhook is called.
		 * Once created, the webhook URL can be retrieved by accessing the `webhookUrl` attribute of the `webhook` object on the response JSON payload.
		 * Post webhooks
		 * @return {void} 
		 */
		CreateWebhook(workspace: string | null | undefined, requestBody: CreateWebhookPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'webhooks?workspace=' + (workspace == null ? '' : encodeURIComponent(workspace)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * All workspaces
		 * The `/workspaces` endpoint returns a list of all [workspaces](https://www.getpostman.com/docs/v6/postman/workspaces/intro_to_workspaces) that is accessible by you. The list includes your own workspaces and the workspaces that you have access to.
		 * The response contains an array of collection information containing the `name`, `id`, and `type` of each workspace.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Get workspaces
		 * @return {AllWorkspacesReturn} Valid Response
		 */
		AllWorkspaces(): Observable<AllWorkspacesReturn> {
			return this.http.get<AllWorkspacesReturn>(this.baseUri + 'workspaces', {});
		}

		/**
		 * Create Workspace
		 * This endpoint allows you to create a workspace and populate it with entities like `collections`, `environments`, `mocks` and `monitors` using their `uid`.
		 * On successful creation of the workspace, the response returns the workspcae `name` and `id`.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Post workspaces
		 * @return {CreateWorkspaceReturn} Successful Response
		 */
		CreateWorkspace(requestBody: CreateWorkspacePostBody): Observable<CreateWorkspaceReturn> {
			return this.http.post<CreateWorkspaceReturn>(this.baseUri + 'workspaces', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete Workspace
		 * This endpoint allows you to delete an existing workspace.
		 * On successful deletion of the workspace, the response returns the `id`.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Delete workspaces/{workspace_id}
		 * @return {DeleteWorkspaceReturn} Successful Response
		 */
		DeleteWorkspace(): Observable<DeleteWorkspaceReturn> {
			return this.http.delete<DeleteWorkspaceReturn>(this.baseUri + 'workspaces/{workspace_id}', {});
		}

		/**
		 * Single workspace
		 * Access the contents of a workspace that is accessible to you using its id (`id`). Includes the collections, environments, mocks and monitors of that workspace.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * Get workspaces/{workspace_id}
		 * @return {SingleWorkspaceReturn} Valid Response
		 */
		SingleWorkspace(): Observable<SingleWorkspaceReturn> {
			return this.http.get<SingleWorkspaceReturn>(this.baseUri + 'workspaces/{workspace_id}', {});
		}

		/**
		 * Update Workspace
		 * This endpoint allows you to update a workspace and update it's association to entities like `collections`, `environments`, `mocks` and `monitors` using their `uid`.
		 * On successful updation of the workspace, the response returns the workspcae `name` and `id`.
		 * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
		 * **Note** : The endpoint expects you to send the desired state of the workspace in terms of the associated entities so be careful when trying to update these entities.
		 * For eg. if your workspace has collections A and B, and in the update call, you send C's uid in the collections array, then A and B would be removed from the workspace and C would be added.
		 * Put workspaces/{workspace_id}
		 * @return {UpdateWorkspaceReturn} Successful Response
		 */
		UpdateWorkspace(requestBody: UpdateWorkspacePutBody): Observable<UpdateWorkspaceReturn> {
			return this.http.put<UpdateWorkspaceReturn>(this.baseUri + 'workspaces/{workspace_id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateApiPostBody {
		api?: CreateApiPostBodyApi;
	}
	export interface CreateApiPostBodyFormProperties {
	}
	export function CreateCreateApiPostBodyFormGroup() {
		return new FormGroup<CreateApiPostBodyFormProperties>({
		});

	}

	export interface CreateApiPostBodyApi {
		description?: string | null;
		name?: string | null;
		summary?: string | null;
	}
	export interface CreateApiPostBodyApiFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		summary: FormControl<string | null | undefined>,
	}
	export function CreateCreateApiPostBodyApiFormGroup() {
		return new FormGroup<CreateApiPostBodyApiFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateApiReturn {
		api?: CreateApiReturnApi;
	}
	export interface CreateApiReturnFormProperties {
	}
	export function CreateCreateApiReturnFormGroup() {
		return new FormGroup<CreateApiReturnFormProperties>({
		});

	}

	export interface CreateApiReturnApi {
		createdAt?: string | null;
		createdBy?: string | null;
		description?: string | null;
		id?: string | null;
		name?: string | null;
		summary?: string | null;
		updatedAt?: string | null;
	}
	export interface CreateApiReturnApiFormProperties {
		createdAt: FormControl<string | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		summary: FormControl<string | null | undefined>,
		updatedAt: FormControl<string | null | undefined>,
	}
	export function CreateCreateApiReturnApiFormGroup() {
		return new FormGroup<CreateApiReturnApiFormProperties>({
			createdAt: new FormControl<string | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteAnApiReturn {
		api?: DeleteAnApiReturnApi;
	}
	export interface DeleteAnApiReturnFormProperties {
	}
	export function CreateDeleteAnApiReturnFormGroup() {
		return new FormGroup<DeleteAnApiReturnFormProperties>({
		});

	}

	export interface DeleteAnApiReturnApi {
		id?: string | null;
	}
	export interface DeleteAnApiReturnApiFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAnApiReturnApiFormGroup() {
		return new FormGroup<DeleteAnApiReturnApiFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SingleApiReturn {
		api?: SingleApiReturnApi;
	}
	export interface SingleApiReturnFormProperties {
	}
	export function CreateSingleApiReturnFormGroup() {
		return new FormGroup<SingleApiReturnFormProperties>({
		});

	}

	export interface SingleApiReturnApi {
		createdAt?: string | null;
		createdBy?: string | null;
		description?: string | null;
		id?: string | null;
		name?: string | null;
		summary?: string | null;
		updatedAt?: string | null;
	}
	export interface SingleApiReturnApiFormProperties {
		createdAt: FormControl<string | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		summary: FormControl<string | null | undefined>,
		updatedAt: FormControl<string | null | undefined>,
	}
	export function CreateSingleApiReturnApiFormGroup() {
		return new FormGroup<SingleApiReturnApiFormProperties>({
			createdAt: new FormControl<string | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAnApiPutBody {
		api?: UpdateAnApiPutBodyApi;
	}
	export interface UpdateAnApiPutBodyFormProperties {
	}
	export function CreateUpdateAnApiPutBodyFormGroup() {
		return new FormGroup<UpdateAnApiPutBodyFormProperties>({
		});

	}

	export interface UpdateAnApiPutBodyApi {
		description?: string | null;
		name?: string | null;
	}
	export interface UpdateAnApiPutBodyApiFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAnApiPutBodyApiFormGroup() {
		return new FormGroup<UpdateAnApiPutBodyApiFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAnApiReturn {
		api?: UpdateAnApiReturnApi;
	}
	export interface UpdateAnApiReturnFormProperties {
	}
	export function CreateUpdateAnApiReturnFormGroup() {
		return new FormGroup<UpdateAnApiReturnFormProperties>({
		});

	}

	export interface UpdateAnApiReturnApi {
		createdAt?: string | null;
		createdBy?: string | null;
		description?: string | null;
		id?: string | null;
		name?: string | null;
		summary?: string | null;
		updatedAt?: string | null;
	}
	export interface UpdateAnApiReturnApiFormProperties {
		createdAt: FormControl<string | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		summary: FormControl<string | null | undefined>,
		updatedAt: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAnApiReturnApiFormGroup() {
		return new FormGroup<UpdateAnApiReturnApiFormProperties>({
			createdAt: new FormControl<string | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAllApiVersionsReturn {
		GetAllApiVersionsReturnVersions?: Array<GetAllApiVersionsReturnVersions>;
	}
	export interface GetAllApiVersionsReturnFormProperties {
	}
	export function CreateGetAllApiVersionsReturnFormGroup() {
		return new FormGroup<GetAllApiVersionsReturnFormProperties>({
		});

	}

	export interface GetAllApiVersionsReturnVersions {
		createdAt?: string | null;
		createdBy?: string | null;
		description?: string | null;
		id?: string | null;
		name?: string | null;
		summary?: string | null;
		updatedAt?: string | null;
	}
	export interface GetAllApiVersionsReturnVersionsFormProperties {
		createdAt: FormControl<string | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		summary: FormControl<string | null | undefined>,
		updatedAt: FormControl<string | null | undefined>,
	}
	export function CreateGetAllApiVersionsReturnVersionsFormGroup() {
		return new FormGroup<GetAllApiVersionsReturnVersionsFormProperties>({
			createdAt: new FormControl<string | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateApiVersionPostBody {
		version?: CreateApiVersionPostBodyVersion;
	}
	export interface CreateApiVersionPostBodyFormProperties {
	}
	export function CreateCreateApiVersionPostBodyFormGroup() {
		return new FormGroup<CreateApiVersionPostBodyFormProperties>({
		});

	}

	export interface CreateApiVersionPostBodyVersion {
		name?: string | null;
		source?: CreateApiVersionPostBodyVersionSource;
	}
	export interface CreateApiVersionPostBodyVersionFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateApiVersionPostBodyVersionFormGroup() {
		return new FormGroup<CreateApiVersionPostBodyVersionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateApiVersionPostBodyVersionSource {
		id?: string | null;
		relations?: CreateApiVersionPostBodyVersionSourceRelations;
		schema?: boolean | null;
	}
	export interface CreateApiVersionPostBodyVersionSourceFormProperties {
		id: FormControl<string | null | undefined>,
		schema: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateApiVersionPostBodyVersionSourceFormGroup() {
		return new FormGroup<CreateApiVersionPostBodyVersionSourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			schema: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateApiVersionPostBodyVersionSourceRelations {
		documentation?: boolean | null;
		mock?: boolean | null;
		monitor?: boolean | null;
	}
	export interface CreateApiVersionPostBodyVersionSourceRelationsFormProperties {
		documentation: FormControl<boolean | null | undefined>,
		mock: FormControl<boolean | null | undefined>,
		monitor: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateApiVersionPostBodyVersionSourceRelationsFormGroup() {
		return new FormGroup<CreateApiVersionPostBodyVersionSourceRelationsFormProperties>({
			documentation: new FormControl<boolean | null | undefined>(undefined),
			mock: new FormControl<boolean | null | undefined>(undefined),
			monitor: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateApiVersionReturn {
		version?: CreateApiVersionReturnVersion;
	}
	export interface CreateApiVersionReturnFormProperties {
	}
	export function CreateCreateApiVersionReturnFormGroup() {
		return new FormGroup<CreateApiVersionReturnFormProperties>({
		});

	}

	export interface CreateApiVersionReturnVersion {
		api?: string | null;
		id?: string | null;
		name?: string | null;
	}
	export interface CreateApiVersionReturnVersionFormProperties {
		api: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateApiVersionReturnVersionFormGroup() {
		return new FormGroup<CreateApiVersionReturnVersionFormProperties>({
			api: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteAnApiVersionReturn {
		version?: DeleteAnApiVersionReturnVersion;
	}
	export interface DeleteAnApiVersionReturnFormProperties {
	}
	export function CreateDeleteAnApiVersionReturnFormGroup() {
		return new FormGroup<DeleteAnApiVersionReturnFormProperties>({
		});

	}

	export interface DeleteAnApiVersionReturnVersion {
		id?: string | null;
	}
	export interface DeleteAnApiVersionReturnVersionFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAnApiVersionReturnVersionFormGroup() {
		return new FormGroup<DeleteAnApiVersionReturnVersionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAnApiVersionReturn {
		version?: GetAnApiVersionReturnVersion;
	}
	export interface GetAnApiVersionReturnFormProperties {
	}
	export function CreateGetAnApiVersionReturnFormGroup() {
		return new FormGroup<GetAnApiVersionReturnFormProperties>({
		});

	}

	export interface GetAnApiVersionReturnVersion {
		api?: string | null;
		createdAt?: string | null;
		createdBy?: string | null;
		id?: string | null;
		name?: string | null;
		schema?: Array<string>;
		updatedAt?: string | null;
		updatedBy?: string | null;
	}
	export interface GetAnApiVersionReturnVersionFormProperties {
		api: FormControl<string | null | undefined>,
		createdAt: FormControl<string | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		updatedAt: FormControl<string | null | undefined>,
		updatedBy: FormControl<string | null | undefined>,
	}
	export function CreateGetAnApiVersionReturnVersionFormGroup() {
		return new FormGroup<GetAnApiVersionReturnVersionFormProperties>({
			api: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<string | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<string | null | undefined>(undefined),
			updatedBy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAnApiVersionPutBody {
		version?: UpdateAnApiVersionPutBodyVersion;
	}
	export interface UpdateAnApiVersionPutBodyFormProperties {
	}
	export function CreateUpdateAnApiVersionPutBodyFormGroup() {
		return new FormGroup<UpdateAnApiVersionPutBodyFormProperties>({
		});

	}

	export interface UpdateAnApiVersionPutBodyVersion {
		name?: string | null;
	}
	export interface UpdateAnApiVersionPutBodyVersionFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAnApiVersionPutBodyVersionFormGroup() {
		return new FormGroup<UpdateAnApiVersionPutBodyVersionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAnApiVersionReturn {
		version?: UpdateAnApiVersionReturnVersion;
	}
	export interface UpdateAnApiVersionReturnFormProperties {
	}
	export function CreateUpdateAnApiVersionReturnFormGroup() {
		return new FormGroup<UpdateAnApiVersionReturnFormProperties>({
		});

	}

	export interface UpdateAnApiVersionReturnVersion {
		api?: string | null;
		createdAt?: string | null;
		createdBy?: string | null;
		id?: string | null;
		name?: string | null;
		updatedAt?: string | null;
		updatedBy?: string | null;
	}
	export interface UpdateAnApiVersionReturnVersionFormProperties {
		api: FormControl<string | null | undefined>,
		createdAt: FormControl<string | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		updatedAt: FormControl<string | null | undefined>,
		updatedBy: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAnApiVersionReturnVersionFormGroup() {
		return new FormGroup<UpdateAnApiVersionReturnVersionFormProperties>({
			api: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<string | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<string | null | undefined>(undefined),
			updatedBy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetContractTestRelationsReturn {
		GetContractTestRelationsReturnContracttest?: Array<GetContractTestRelationsReturnContracttest>;
	}
	export interface GetContractTestRelationsReturnFormProperties {
	}
	export function CreateGetContractTestRelationsReturnFormGroup() {
		return new FormGroup<GetContractTestRelationsReturnFormProperties>({
		});

	}

	export interface GetContractTestRelationsReturnContracttest {
		collectionId?: string | null;
		id?: string | null;
		name?: string | null;
		updatedAt?: string | null;
	}
	export interface GetContractTestRelationsReturnContracttestFormProperties {
		collectionId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		updatedAt: FormControl<string | null | undefined>,
	}
	export function CreateGetContractTestRelationsReturnContracttestFormGroup() {
		return new FormGroup<GetContractTestRelationsReturnContracttestFormProperties>({
			collectionId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDocumentationRelationsReturn {
		GetDocumentationRelationsReturnDocumentation?: Array<GetDocumentationRelationsReturnDocumentation>;
	}
	export interface GetDocumentationRelationsReturnFormProperties {
	}
	export function CreateGetDocumentationRelationsReturnFormGroup() {
		return new FormGroup<GetDocumentationRelationsReturnFormProperties>({
		});

	}

	export interface GetDocumentationRelationsReturnDocumentation {
		collectionId?: string | null;
		id?: string | null;
		name?: string | null;
		updatedAt?: string | null;
	}
	export interface GetDocumentationRelationsReturnDocumentationFormProperties {
		collectionId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		updatedAt: FormControl<string | null | undefined>,
	}
	export function CreateGetDocumentationRelationsReturnDocumentationFormGroup() {
		return new FormGroup<GetDocumentationRelationsReturnDocumentationFormProperties>({
			collectionId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetEnvironmentRelationsReturn {
		GetEnvironmentRelationsReturnEnvironment?: Array<GetEnvironmentRelationsReturnEnvironment>;
	}
	export interface GetEnvironmentRelationsReturnFormProperties {
	}
	export function CreateGetEnvironmentRelationsReturnFormGroup() {
		return new FormGroup<GetEnvironmentRelationsReturnFormProperties>({
		});

	}

	export interface GetEnvironmentRelationsReturnEnvironment {
		id?: string | null;
		name?: string | null;
		updatedAt?: string | null;
	}
	export interface GetEnvironmentRelationsReturnEnvironmentFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		updatedAt: FormControl<string | null | undefined>,
	}
	export function CreateGetEnvironmentRelationsReturnEnvironmentFormGroup() {
		return new FormGroup<GetEnvironmentRelationsReturnEnvironmentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetIntegrationTestRelationsReturn {
		GetIntegrationTestRelationsReturnIntegrationtest?: Array<GetIntegrationTestRelationsReturnIntegrationtest>;
	}
	export interface GetIntegrationTestRelationsReturnFormProperties {
	}
	export function CreateGetIntegrationTestRelationsReturnFormGroup() {
		return new FormGroup<GetIntegrationTestRelationsReturnFormProperties>({
		});

	}

	export interface GetIntegrationTestRelationsReturnIntegrationtest {
		collectionId?: string | null;
		id?: string | null;
		name?: string | null;
		updatedAt?: string | null;
	}
	export interface GetIntegrationTestRelationsReturnIntegrationtestFormProperties {
		collectionId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		updatedAt: FormControl<string | null | undefined>,
	}
	export function CreateGetIntegrationTestRelationsReturnIntegrationtestFormGroup() {
		return new FormGroup<GetIntegrationTestRelationsReturnIntegrationtestFormProperties>({
			collectionId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMonitorRelationsReturn {
		GetMonitorRelationsReturnMonitor?: Array<GetMonitorRelationsReturnMonitor>;
	}
	export interface GetMonitorRelationsReturnFormProperties {
	}
	export function CreateGetMonitorRelationsReturnFormGroup() {
		return new FormGroup<GetMonitorRelationsReturnFormProperties>({
		});

	}

	export interface GetMonitorRelationsReturnMonitor {
		id?: string | null;
		monitorId?: string | null;
		name?: string | null;
		updatedAt?: string | null;
	}
	export interface GetMonitorRelationsReturnMonitorFormProperties {
		id: FormControl<string | null | undefined>,
		monitorId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		updatedAt: FormControl<string | null | undefined>,
	}
	export function CreateGetMonitorRelationsReturnMonitorFormGroup() {
		return new FormGroup<GetMonitorRelationsReturnMonitorFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			monitorId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLinkedRelationsReturn {
		relations?: GetLinkedRelationsReturnRelations;
	}
	export interface GetLinkedRelationsReturnFormProperties {
	}
	export function CreateGetLinkedRelationsReturnFormGroup() {
		return new FormGroup<GetLinkedRelationsReturnFormProperties>({
		});

	}

	export interface GetLinkedRelationsReturnRelations {
		contracttest?: GetLinkedRelationsReturnRelationsContracttest;
		integrationtest?: GetLinkedRelationsReturnRelationsIntegrationtest;
		mock?: GetLinkedRelationsReturnRelationsMock;
	}
	export interface GetLinkedRelationsReturnRelationsFormProperties {
	}
	export function CreateGetLinkedRelationsReturnRelationsFormGroup() {
		return new FormGroup<GetLinkedRelationsReturnRelationsFormProperties>({
		});

	}

	export interface GetLinkedRelationsReturnRelationsContracttest {
		'2a9b8fa8-88b7-4b86-8372-8e3f6f6e07f2'?: GetLinkedRelationsReturnRelationsContracttest_2a9b8fa8_88b7_4b86_8372_8e3f6f6e07f2_;
	}
	export interface GetLinkedRelationsReturnRelationsContracttestFormProperties {
	}
	export function CreateGetLinkedRelationsReturnRelationsContracttestFormGroup() {
		return new FormGroup<GetLinkedRelationsReturnRelationsContracttestFormProperties>({
		});

	}

	export interface GetLinkedRelationsReturnRelationsContracttest_2a9b8fa8_88b7_4b86_8372_8e3f6f6e07f2_ {
		id?: string | null;
		name?: string | null;
		updatedAt?: string | null;
	}
	export interface GetLinkedRelationsReturnRelationsContracttest_2a9b8fa8_88b7_4b86_8372_8e3f6f6e07f2_FormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		updatedAt: FormControl<string | null | undefined>,
	}
	export function CreateGetLinkedRelationsReturnRelationsContracttest_2a9b8fa8_88b7_4b86_8372_8e3f6f6e07f2_FormGroup() {
		return new FormGroup<GetLinkedRelationsReturnRelationsContracttest_2a9b8fa8_88b7_4b86_8372_8e3f6f6e07f2_FormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLinkedRelationsReturnRelationsIntegrationtest {
		'521b0486-ab91-4d3a-9189-43c9380a0533'?: GetLinkedRelationsReturnRelationsIntegrationtest_521b0486_ab91_4d3a_9189_43c9380a0533_;
		'a236b715-e682-460b-97b6-c1db24f7612e'?: GetLinkedRelationsReturnRelationsIntegrationtest_a236b715_e682_460b_97b6_c1db24f7612e_;
	}
	export interface GetLinkedRelationsReturnRelationsIntegrationtestFormProperties {
	}
	export function CreateGetLinkedRelationsReturnRelationsIntegrationtestFormGroup() {
		return new FormGroup<GetLinkedRelationsReturnRelationsIntegrationtestFormProperties>({
		});

	}

	export interface GetLinkedRelationsReturnRelationsIntegrationtest_521b0486_ab91_4d3a_9189_43c9380a0533_ {
		id?: string | null;
		name?: string | null;
		updatedAt?: string | null;
	}
	export interface GetLinkedRelationsReturnRelationsIntegrationtest_521b0486_ab91_4d3a_9189_43c9380a0533_FormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		updatedAt: FormControl<string | null | undefined>,
	}
	export function CreateGetLinkedRelationsReturnRelationsIntegrationtest_521b0486_ab91_4d3a_9189_43c9380a0533_FormGroup() {
		return new FormGroup<GetLinkedRelationsReturnRelationsIntegrationtest_521b0486_ab91_4d3a_9189_43c9380a0533_FormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLinkedRelationsReturnRelationsIntegrationtest_a236b715_e682_460b_97b6_c1db24f7612e_ {
		id?: string | null;
		name?: string | null;
		updatedAt?: string | null;
	}
	export interface GetLinkedRelationsReturnRelationsIntegrationtest_a236b715_e682_460b_97b6_c1db24f7612e_FormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		updatedAt: FormControl<string | null | undefined>,
	}
	export function CreateGetLinkedRelationsReturnRelationsIntegrationtest_a236b715_e682_460b_97b6_c1db24f7612e_FormGroup() {
		return new FormGroup<GetLinkedRelationsReturnRelationsIntegrationtest_a236b715_e682_460b_97b6_c1db24f7612e_FormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLinkedRelationsReturnRelationsMock {
		'4ccd755f-2c80-481b-a262-49b55e12f5e1'?: GetLinkedRelationsReturnRelationsMock_4ccd755f_2c80_481b_a262_49b55e12f5e1_;
	}
	export interface GetLinkedRelationsReturnRelationsMockFormProperties {
	}
	export function CreateGetLinkedRelationsReturnRelationsMockFormGroup() {
		return new FormGroup<GetLinkedRelationsReturnRelationsMockFormProperties>({
		});

	}

	export interface GetLinkedRelationsReturnRelationsMock_4ccd755f_2c80_481b_a262_49b55e12f5e1_ {
		id?: string | null;
		name?: string | null;
		updatedAt?: string | null;
		url?: string | null;
	}
	export interface GetLinkedRelationsReturnRelationsMock_4ccd755f_2c80_481b_a262_49b55e12f5e1_FormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		updatedAt: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateGetLinkedRelationsReturnRelationsMock_4ccd755f_2c80_481b_a262_49b55e12f5e1_FormGroup() {
		return new FormGroup<GetLinkedRelationsReturnRelationsMock_4ccd755f_2c80_481b_a262_49b55e12f5e1_FormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateRelationsPostBody {
		contracttest?: Array<string>;
		documentation?: Array<string>;
		mock?: Array<string>;
		testsuite?: Array<string>;
	}
	export interface CreateRelationsPostBodyFormProperties {
	}
	export function CreateCreateRelationsPostBodyFormGroup() {
		return new FormGroup<CreateRelationsPostBodyFormProperties>({
		});

	}

	export interface CreateRelationsReturn {
		contracttest?: Array<string>;
		documentation?: Array<string>;
		testsuite?: Array<string>;
	}
	export interface CreateRelationsReturnFormProperties {
	}
	export function CreateCreateRelationsReturnFormGroup() {
		return new FormGroup<CreateRelationsReturnFormProperties>({
		});

	}

	export interface CreateSchemaPostBody {
		schema?: CreateSchemaPostBodySchema;
	}
	export interface CreateSchemaPostBodyFormProperties {
	}
	export function CreateCreateSchemaPostBodyFormGroup() {
		return new FormGroup<CreateSchemaPostBodyFormProperties>({
		});

	}

	export interface CreateSchemaPostBodySchema {
		language?: string | null;
		schema?: string | null;
		type?: string | null;
	}
	export interface CreateSchemaPostBodySchemaFormProperties {
		language: FormControl<string | null | undefined>,
		schema: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateCreateSchemaPostBodySchemaFormGroup() {
		return new FormGroup<CreateSchemaPostBodySchemaFormProperties>({
			language: new FormControl<string | null | undefined>(undefined),
			schema: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSchemaReturn {
		schema?: CreateSchemaReturnSchema;
	}
	export interface CreateSchemaReturnFormProperties {
	}
	export function CreateCreateSchemaReturnFormGroup() {
		return new FormGroup<CreateSchemaReturnFormProperties>({
		});

	}

	export interface CreateSchemaReturnSchema {
		apiVersion?: string | null;
		createdAt?: string | null;
		createdBy?: string | null;
		id?: string | null;
		language?: string | null;
		type?: string | null;
		updateBy?: string | null;
		updatedAt?: string | null;
	}
	export interface CreateSchemaReturnSchemaFormProperties {
		apiVersion: FormControl<string | null | undefined>,
		createdAt: FormControl<string | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		language: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		updateBy: FormControl<string | null | undefined>,
		updatedAt: FormControl<string | null | undefined>,
	}
	export function CreateCreateSchemaReturnSchemaFormGroup() {
		return new FormGroup<CreateSchemaReturnSchemaFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<string | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updateBy: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSchemaReturn {
		schema?: GetSchemaReturnSchema;
	}
	export interface GetSchemaReturnFormProperties {
	}
	export function CreateGetSchemaReturnFormGroup() {
		return new FormGroup<GetSchemaReturnFormProperties>({
		});

	}

	export interface GetSchemaReturnSchema {
		apiVersion?: string | null;
		createdAt?: string | null;
		createdBy?: string | null;
		id?: string | null;
		language?: string | null;
		type?: string | null;
		updateBy?: string | null;
		updatedAt?: string | null;
	}
	export interface GetSchemaReturnSchemaFormProperties {
		apiVersion: FormControl<string | null | undefined>,
		createdAt: FormControl<string | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		language: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		updateBy: FormControl<string | null | undefined>,
		updatedAt: FormControl<string | null | undefined>,
	}
	export function CreateGetSchemaReturnSchemaFormGroup() {
		return new FormGroup<GetSchemaReturnSchemaFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<string | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updateBy: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSchemaPutBody {
		schema?: UpdateSchemaPutBodySchema;
	}
	export interface UpdateSchemaPutBodyFormProperties {
	}
	export function CreateUpdateSchemaPutBodyFormGroup() {
		return new FormGroup<UpdateSchemaPutBodyFormProperties>({
		});

	}

	export interface UpdateSchemaPutBodySchema {
		language?: string | null;
		schema?: string | null;
		type?: string | null;
	}
	export interface UpdateSchemaPutBodySchemaFormProperties {
		language: FormControl<string | null | undefined>,
		schema: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSchemaPutBodySchemaFormGroup() {
		return new FormGroup<UpdateSchemaPutBodySchemaFormProperties>({
			language: new FormControl<string | null | undefined>(undefined),
			schema: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSchemaReturn {
		schema?: UpdateSchemaReturnSchema;
	}
	export interface UpdateSchemaReturnFormProperties {
	}
	export function CreateUpdateSchemaReturnFormGroup() {
		return new FormGroup<UpdateSchemaReturnFormProperties>({
		});

	}

	export interface UpdateSchemaReturnSchema {
		apiVersion?: string | null;
		createdAt?: string | null;
		createdBy?: string | null;
		id?: string | null;
		language?: string | null;
		type?: string | null;
		updateBy?: string | null;
		updatedAt?: string | null;
	}
	export interface UpdateSchemaReturnSchemaFormProperties {
		apiVersion: FormControl<string | null | undefined>,
		createdAt: FormControl<string | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		language: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		updateBy: FormControl<string | null | undefined>,
		updatedAt: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSchemaReturnSchemaFormGroup() {
		return new FormGroup<UpdateSchemaReturnSchemaFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<string | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updateBy: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCollectionFromSchemaPostBody {
		name?: string | null;
		CreateCollectionFromSchemaPostBodyRelations?: Array<CreateCollectionFromSchemaPostBodyRelations>;
	}
	export interface CreateCollectionFromSchemaPostBodyFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateCollectionFromSchemaPostBodyFormGroup() {
		return new FormGroup<CreateCollectionFromSchemaPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCollectionFromSchemaPostBodyRelations {
		type?: string | null;
	}
	export interface CreateCollectionFromSchemaPostBodyRelationsFormProperties {
		type: FormControl<string | null | undefined>,
	}
	export function CreateCreateCollectionFromSchemaPostBodyRelationsFormGroup() {
		return new FormGroup<CreateCollectionFromSchemaPostBodyRelationsFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCollectionFromSchemaReturn {
		collection?: CreateCollectionFromSchemaReturnCollection;
		CreateCollectionFromSchemaReturnRelations?: Array<CreateCollectionFromSchemaReturnRelations>;
	}
	export interface CreateCollectionFromSchemaReturnFormProperties {
	}
	export function CreateCreateCollectionFromSchemaReturnFormGroup() {
		return new FormGroup<CreateCollectionFromSchemaReturnFormProperties>({
		});

	}

	export interface CreateCollectionFromSchemaReturnCollection {
		id?: string | null;
		uid?: string | null;
	}
	export interface CreateCollectionFromSchemaReturnCollectionFormProperties {
		id: FormControl<string | null | undefined>,
		uid: FormControl<string | null | undefined>,
	}
	export function CreateCreateCollectionFromSchemaReturnCollectionFormGroup() {
		return new FormGroup<CreateCollectionFromSchemaReturnCollectionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCollectionFromSchemaReturnRelations {
		id?: string | null;
		type?: string | null;
	}
	export interface CreateCollectionFromSchemaReturnRelationsFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateCreateCollectionFromSchemaReturnRelationsFormGroup() {
		return new FormGroup<CreateCollectionFromSchemaReturnRelationsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTestSuiteRelationsReturn {
		GetTestSuiteRelationsReturnTestsuite?: Array<GetTestSuiteRelationsReturnTestsuite>;
	}
	export interface GetTestSuiteRelationsReturnFormProperties {
	}
	export function CreateGetTestSuiteRelationsReturnFormGroup() {
		return new FormGroup<GetTestSuiteRelationsReturnFormProperties>({
		});

	}

	export interface GetTestSuiteRelationsReturnTestsuite {
		collectionId?: string | null;
		id?: string | null;
		name?: string | null;
		updatedAt?: string | null;
	}
	export interface GetTestSuiteRelationsReturnTestsuiteFormProperties {
		collectionId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		updatedAt: FormControl<string | null | undefined>,
	}
	export function CreateGetTestSuiteRelationsReturnTestsuiteFormGroup() {
		return new FormGroup<GetTestSuiteRelationsReturnTestsuiteFormProperties>({
			collectionId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SyncRelationsWithSchemaReturn {
		success?: boolean | null;
	}
	export interface SyncRelationsWithSchemaReturnFormProperties {
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateSyncRelationsWithSchemaReturnFormGroup() {
		return new FormGroup<SyncRelationsWithSchemaReturnFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AllCollectionsReturn {
		AllCollectionsReturnCollections?: Array<AllCollectionsReturnCollections>;
	}
	export interface AllCollectionsReturnFormProperties {
	}
	export function CreateAllCollectionsReturnFormGroup() {
		return new FormGroup<AllCollectionsReturnFormProperties>({
		});

	}

	export interface AllCollectionsReturnCollections {
		id?: string | null;
		name?: string | null;
		owner?: string | null;
		uid?: string | null;
	}
	export interface AllCollectionsReturnCollectionsFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		owner: FormControl<string | null | undefined>,
		uid: FormControl<string | null | undefined>,
	}
	export function CreateAllCollectionsReturnCollectionsFormGroup() {
		return new FormGroup<AllCollectionsReturnCollectionsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCollectionPostBody {
		collection?: CreateCollectionPostBodyCollection;
	}
	export interface CreateCollectionPostBodyFormProperties {
	}
	export function CreateCreateCollectionPostBodyFormGroup() {
		return new FormGroup<CreateCollectionPostBodyFormProperties>({
		});

	}

	export interface CreateCollectionPostBodyCollection {
		info?: CreateCollectionPostBodyCollectionInfo;
		CreateCollectionPostBodyCollectionItem?: Array<CreateCollectionPostBodyCollectionItem>;
	}
	export interface CreateCollectionPostBodyCollectionFormProperties {
	}
	export function CreateCreateCollectionPostBodyCollectionFormGroup() {
		return new FormGroup<CreateCollectionPostBodyCollectionFormProperties>({
		});

	}

	export interface CreateCollectionPostBodyCollectionInfo {
		description?: string | null;
		name?: string | null;
		schema?: string | null;
	}
	export interface CreateCollectionPostBodyCollectionInfoFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		schema: FormControl<string | null | undefined>,
	}
	export function CreateCreateCollectionPostBodyCollectionInfoFormGroup() {
		return new FormGroup<CreateCollectionPostBodyCollectionInfoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			schema: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCollectionPostBodyCollectionItem {
		CreateCollectionPostBodyCollectionItemItem?: Array<CreateCollectionPostBodyCollectionItemItem>;
		name?: string | null;
	}
	export interface CreateCollectionPostBodyCollectionItemFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateCollectionPostBodyCollectionItemFormGroup() {
		return new FormGroup<CreateCollectionPostBodyCollectionItemFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCollectionPostBodyCollectionItemItem {
		name?: string | null;
		request?: CreateCollectionPostBodyCollectionItemItemRequest;
	}
	export interface CreateCollectionPostBodyCollectionItemItemFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateCollectionPostBodyCollectionItemItemFormGroup() {
		return new FormGroup<CreateCollectionPostBodyCollectionItemItemFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCollectionPostBodyCollectionItemItemRequest {
		body?: CreateCollectionPostBodyCollectionItemItemRequestBody;
		description?: string | null;
		CreateCollectionPostBodyCollectionItemItemRequestHeader?: Array<CreateCollectionPostBodyCollectionItemItemRequestHeader>;
		method?: string | null;
		url?: string | null;
	}
	export interface CreateCollectionPostBodyCollectionItemItemRequestFormProperties {
		description: FormControl<string | null | undefined>,
		method: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateCreateCollectionPostBodyCollectionItemItemRequestFormGroup() {
		return new FormGroup<CreateCollectionPostBodyCollectionItemItemRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCollectionPostBodyCollectionItemItemRequestBody {
		mode?: string | null;
		raw?: string | null;
	}
	export interface CreateCollectionPostBodyCollectionItemItemRequestBodyFormProperties {
		mode: FormControl<string | null | undefined>,
		raw: FormControl<string | null | undefined>,
	}
	export function CreateCreateCollectionPostBodyCollectionItemItemRequestBodyFormGroup() {
		return new FormGroup<CreateCollectionPostBodyCollectionItemItemRequestBodyFormProperties>({
			mode: new FormControl<string | null | undefined>(undefined),
			raw: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCollectionPostBodyCollectionItemItemRequestHeader {
		key?: string | null;
		value?: string | null;
	}
	export interface CreateCollectionPostBodyCollectionItemItemRequestHeaderFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateCreateCollectionPostBodyCollectionItemItemRequestHeaderFormGroup() {
		return new FormGroup<CreateCollectionPostBodyCollectionItemItemRequestHeaderFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCollectionReturn {
		collection?: CreateCollectionReturnCollection;
	}
	export interface CreateCollectionReturnFormProperties {
	}
	export function CreateCreateCollectionReturnFormGroup() {
		return new FormGroup<CreateCollectionReturnFormProperties>({
		});

	}

	export interface CreateCollectionReturnCollection {
		id?: string | null;
		name?: string | null;
		uid?: string | null;
	}
	export interface CreateCollectionReturnCollectionFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		uid: FormControl<string | null | undefined>,
	}
	export function CreateCreateCollectionReturnCollectionFormGroup() {
		return new FormGroup<CreateCollectionReturnCollectionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAForkPostBody {
		name?: string | null;
	}
	export interface CreateAForkPostBodyFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateAForkPostBodyFormGroup() {
		return new FormGroup<CreateAForkPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MergeAForkPostBody {
		destination?: string | null;
		source?: string | null;
		strategy?: string | null;
	}
	export interface MergeAForkPostBodyFormProperties {
		destination: FormControl<string | null | undefined>,
		source: FormControl<string | null | undefined>,
		strategy: FormControl<string | null | undefined>,
	}
	export function CreateMergeAForkPostBodyFormGroup() {
		return new FormGroup<MergeAForkPostBodyFormProperties>({
			destination: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			strategy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteCollectionReturn {
		collection?: DeleteCollectionReturnCollection;
	}
	export interface DeleteCollectionReturnFormProperties {
	}
	export function CreateDeleteCollectionReturnFormGroup() {
		return new FormGroup<DeleteCollectionReturnFormProperties>({
		});

	}

	export interface DeleteCollectionReturnCollection {
		id?: string | null;
		uid?: string | null;
	}
	export interface DeleteCollectionReturnCollectionFormProperties {
		id: FormControl<string | null | undefined>,
		uid: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCollectionReturnCollectionFormGroup() {
		return new FormGroup<DeleteCollectionReturnCollectionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SingleCollectionReturn {
		collection?: SingleCollectionReturnCollection;
	}
	export interface SingleCollectionReturnFormProperties {
	}
	export function CreateSingleCollectionReturnFormGroup() {
		return new FormGroup<SingleCollectionReturnFormProperties>({
		});

	}

	export interface SingleCollectionReturnCollection {
		info?: SingleCollectionReturnCollectionInfo;
		SingleCollectionReturnCollectionItem?: Array<SingleCollectionReturnCollectionItem>;
		variables?: Array<string>;
	}
	export interface SingleCollectionReturnCollectionFormProperties {
	}
	export function CreateSingleCollectionReturnCollectionFormGroup() {
		return new FormGroup<SingleCollectionReturnCollectionFormProperties>({
		});

	}

	export interface SingleCollectionReturnCollectionInfo {
		_postman_id?: string | null;
		description?: string | null;
		name?: string | null;
		schema?: string | null;
	}
	export interface SingleCollectionReturnCollectionInfoFormProperties {
		_postman_id: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		schema: FormControl<string | null | undefined>,
	}
	export function CreateSingleCollectionReturnCollectionInfoFormGroup() {
		return new FormGroup<SingleCollectionReturnCollectionInfoFormProperties>({
			_postman_id: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			schema: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SingleCollectionReturnCollectionItem {
		SingleCollectionReturnCollectionItemEvent?: Array<SingleCollectionReturnCollectionItemEvent>;
		id?: string | null;
		name?: string | null;
		request?: SingleCollectionReturnCollectionItemRequest;
		response?: Array<string>;
	}
	export interface SingleCollectionReturnCollectionItemFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateSingleCollectionReturnCollectionItemFormGroup() {
		return new FormGroup<SingleCollectionReturnCollectionItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SingleCollectionReturnCollectionItemEvent {
		listen?: string | null;
		script?: SingleCollectionReturnCollectionItemEventScript;
	}
	export interface SingleCollectionReturnCollectionItemEventFormProperties {
		listen: FormControl<string | null | undefined>,
	}
	export function CreateSingleCollectionReturnCollectionItemEventFormGroup() {
		return new FormGroup<SingleCollectionReturnCollectionItemEventFormProperties>({
			listen: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SingleCollectionReturnCollectionItemEventScript {
		exec?: string | null;
		type?: string | null;
	}
	export interface SingleCollectionReturnCollectionItemEventScriptFormProperties {
		exec: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateSingleCollectionReturnCollectionItemEventScriptFormGroup() {
		return new FormGroup<SingleCollectionReturnCollectionItemEventScriptFormProperties>({
			exec: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SingleCollectionReturnCollectionItemRequest {
		body?: SingleCollectionReturnCollectionItemRequestBody;
		description?: string | null;
		SingleCollectionReturnCollectionItemRequestHeader?: Array<SingleCollectionReturnCollectionItemRequestHeader>;
		method?: string | null;
		url?: string | null;
	}
	export interface SingleCollectionReturnCollectionItemRequestFormProperties {
		description: FormControl<string | null | undefined>,
		method: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateSingleCollectionReturnCollectionItemRequestFormGroup() {
		return new FormGroup<SingleCollectionReturnCollectionItemRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SingleCollectionReturnCollectionItemRequestBody {
		formdata?: Array<string>;
		mode?: string | null;
	}
	export interface SingleCollectionReturnCollectionItemRequestBodyFormProperties {
		mode: FormControl<string | null | undefined>,
	}
	export function CreateSingleCollectionReturnCollectionItemRequestBodyFormGroup() {
		return new FormGroup<SingleCollectionReturnCollectionItemRequestBodyFormProperties>({
			mode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SingleCollectionReturnCollectionItemRequestHeader {
		description?: string | null;
		key?: string | null;
		value?: string | null;
	}
	export interface SingleCollectionReturnCollectionItemRequestHeaderFormProperties {
		description: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateSingleCollectionReturnCollectionItemRequestHeaderFormGroup() {
		return new FormGroup<SingleCollectionReturnCollectionItemRequestHeaderFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateCollectionPutBody {
		collection?: UpdateCollectionPutBodyCollection;
	}
	export interface UpdateCollectionPutBodyFormProperties {
	}
	export function CreateUpdateCollectionPutBodyFormGroup() {
		return new FormGroup<UpdateCollectionPutBodyFormProperties>({
		});

	}

	export interface UpdateCollectionPutBodyCollection {
		info?: UpdateCollectionPutBodyCollectionInfo;
		UpdateCollectionPutBodyCollectionItem?: Array<UpdateCollectionPutBodyCollectionItem>;
	}
	export interface UpdateCollectionPutBodyCollectionFormProperties {
	}
	export function CreateUpdateCollectionPutBodyCollectionFormGroup() {
		return new FormGroup<UpdateCollectionPutBodyCollectionFormProperties>({
		});

	}

	export interface UpdateCollectionPutBodyCollectionInfo {
		_postman_id?: string | null;
		description?: string | null;
		name?: string | null;
		schema?: string | null;
	}
	export interface UpdateCollectionPutBodyCollectionInfoFormProperties {
		_postman_id: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		schema: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCollectionPutBodyCollectionInfoFormGroup() {
		return new FormGroup<UpdateCollectionPutBodyCollectionInfoFormProperties>({
			_postman_id: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			schema: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateCollectionPutBodyCollectionItem {
		UpdateCollectionPutBodyCollectionItemItem?: Array<UpdateCollectionPutBodyCollectionItemItem>;
		name?: string | null;
	}
	export interface UpdateCollectionPutBodyCollectionItemFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCollectionPutBodyCollectionItemFormGroup() {
		return new FormGroup<UpdateCollectionPutBodyCollectionItemFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateCollectionPutBodyCollectionItemItem {
		name?: string | null;
		request?: UpdateCollectionPutBodyCollectionItemItemRequest;
	}
	export interface UpdateCollectionPutBodyCollectionItemItemFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCollectionPutBodyCollectionItemItemFormGroup() {
		return new FormGroup<UpdateCollectionPutBodyCollectionItemItemFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateCollectionPutBodyCollectionItemItemRequest {
		body?: UpdateCollectionPutBodyCollectionItemItemRequestBody;
		description?: string | null;
		UpdateCollectionPutBodyCollectionItemItemRequestHeader?: Array<UpdateCollectionPutBodyCollectionItemItemRequestHeader>;
		method?: string | null;
		url?: string | null;
	}
	export interface UpdateCollectionPutBodyCollectionItemItemRequestFormProperties {
		description: FormControl<string | null | undefined>,
		method: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCollectionPutBodyCollectionItemItemRequestFormGroup() {
		return new FormGroup<UpdateCollectionPutBodyCollectionItemItemRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateCollectionPutBodyCollectionItemItemRequestBody {
		mode?: string | null;
		raw?: string | null;
	}
	export interface UpdateCollectionPutBodyCollectionItemItemRequestBodyFormProperties {
		mode: FormControl<string | null | undefined>,
		raw: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCollectionPutBodyCollectionItemItemRequestBodyFormGroup() {
		return new FormGroup<UpdateCollectionPutBodyCollectionItemItemRequestBodyFormProperties>({
			mode: new FormControl<string | null | undefined>(undefined),
			raw: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateCollectionPutBodyCollectionItemItemRequestHeader {
		key?: string | null;
		value?: string | null;
	}
	export interface UpdateCollectionPutBodyCollectionItemItemRequestHeaderFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCollectionPutBodyCollectionItemItemRequestHeaderFormGroup() {
		return new FormGroup<UpdateCollectionPutBodyCollectionItemItemRequestHeaderFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateCollectionReturn {
		collection?: UpdateCollectionReturnCollection;
	}
	export interface UpdateCollectionReturnFormProperties {
	}
	export function CreateUpdateCollectionReturnFormGroup() {
		return new FormGroup<UpdateCollectionReturnFormProperties>({
		});

	}

	export interface UpdateCollectionReturnCollection {
		id?: string | null;
		name?: string | null;
		uid?: string | null;
	}
	export interface UpdateCollectionReturnCollectionFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		uid: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCollectionReturnCollectionFormGroup() {
		return new FormGroup<UpdateCollectionReturnCollectionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AllEnvironmentsReturn {
		AllEnvironmentsReturnEnvironments?: Array<AllEnvironmentsReturnEnvironments>;
	}
	export interface AllEnvironmentsReturnFormProperties {
	}
	export function CreateAllEnvironmentsReturnFormGroup() {
		return new FormGroup<AllEnvironmentsReturnFormProperties>({
		});

	}

	export interface AllEnvironmentsReturnEnvironments {
		id?: string | null;
		name?: string | null;
		owner?: string | null;
		uid?: string | null;
	}
	export interface AllEnvironmentsReturnEnvironmentsFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		owner: FormControl<string | null | undefined>,
		uid: FormControl<string | null | undefined>,
	}
	export function CreateAllEnvironmentsReturnEnvironmentsFormGroup() {
		return new FormGroup<AllEnvironmentsReturnEnvironmentsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateEnvironmentPostBody {
		environment?: CreateEnvironmentPostBodyEnvironment;
	}
	export interface CreateEnvironmentPostBodyFormProperties {
	}
	export function CreateCreateEnvironmentPostBodyFormGroup() {
		return new FormGroup<CreateEnvironmentPostBodyFormProperties>({
		});

	}

	export interface CreateEnvironmentPostBodyEnvironment {
		name?: string | null;
		CreateEnvironmentPostBodyEnvironmentValues?: Array<CreateEnvironmentPostBodyEnvironmentValues>;
	}
	export interface CreateEnvironmentPostBodyEnvironmentFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateEnvironmentPostBodyEnvironmentFormGroup() {
		return new FormGroup<CreateEnvironmentPostBodyEnvironmentFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateEnvironmentPostBodyEnvironmentValues {
		key?: string | null;
		value?: string | null;
	}
	export interface CreateEnvironmentPostBodyEnvironmentValuesFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateCreateEnvironmentPostBodyEnvironmentValuesFormGroup() {
		return new FormGroup<CreateEnvironmentPostBodyEnvironmentValuesFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateEnvironmentReturn {
		environment?: CreateEnvironmentReturnEnvironment;
	}
	export interface CreateEnvironmentReturnFormProperties {
	}
	export function CreateCreateEnvironmentReturnFormGroup() {
		return new FormGroup<CreateEnvironmentReturnFormProperties>({
		});

	}

	export interface CreateEnvironmentReturnEnvironment {
		id?: string | null;
		name?: string | null;
		uid?: string | null;
	}
	export interface CreateEnvironmentReturnEnvironmentFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		uid: FormControl<string | null | undefined>,
	}
	export function CreateCreateEnvironmentReturnEnvironmentFormGroup() {
		return new FormGroup<CreateEnvironmentReturnEnvironmentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteEnvironmentReturn {
		environment?: DeleteEnvironmentReturnEnvironment;
	}
	export interface DeleteEnvironmentReturnFormProperties {
	}
	export function CreateDeleteEnvironmentReturnFormGroup() {
		return new FormGroup<DeleteEnvironmentReturnFormProperties>({
		});

	}

	export interface DeleteEnvironmentReturnEnvironment {
		id?: string | null;
		uid?: string | null;
	}
	export interface DeleteEnvironmentReturnEnvironmentFormProperties {
		id: FormControl<string | null | undefined>,
		uid: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEnvironmentReturnEnvironmentFormGroup() {
		return new FormGroup<DeleteEnvironmentReturnEnvironmentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SingleEnvironmentReturn {
		environment?: SingleEnvironmentReturnEnvironment;
	}
	export interface SingleEnvironmentReturnFormProperties {
	}
	export function CreateSingleEnvironmentReturnFormGroup() {
		return new FormGroup<SingleEnvironmentReturnFormProperties>({
		});

	}

	export interface SingleEnvironmentReturnEnvironment {
		id?: string | null;
		name?: string | null;
		SingleEnvironmentReturnEnvironmentValues?: Array<SingleEnvironmentReturnEnvironmentValues>;
	}
	export interface SingleEnvironmentReturnEnvironmentFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateSingleEnvironmentReturnEnvironmentFormGroup() {
		return new FormGroup<SingleEnvironmentReturnEnvironmentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SingleEnvironmentReturnEnvironmentValues {
		enabled?: boolean | null;
		hovered?: boolean | null;
		key?: string | null;
		type?: string | null;
		value?: string | null;
	}
	export interface SingleEnvironmentReturnEnvironmentValuesFormProperties {
		enabled: FormControl<boolean | null | undefined>,
		hovered: FormControl<boolean | null | undefined>,
		key: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateSingleEnvironmentReturnEnvironmentValuesFormGroup() {
		return new FormGroup<SingleEnvironmentReturnEnvironmentValuesFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			hovered: new FormControl<boolean | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateEnvironmentPutBody {
		environment?: UpdateEnvironmentPutBodyEnvironment;
	}
	export interface UpdateEnvironmentPutBodyFormProperties {
	}
	export function CreateUpdateEnvironmentPutBodyFormGroup() {
		return new FormGroup<UpdateEnvironmentPutBodyFormProperties>({
		});

	}

	export interface UpdateEnvironmentPutBodyEnvironment {
		name?: string | null;
		UpdateEnvironmentPutBodyEnvironmentValues?: Array<UpdateEnvironmentPutBodyEnvironmentValues>;
	}
	export interface UpdateEnvironmentPutBodyEnvironmentFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEnvironmentPutBodyEnvironmentFormGroup() {
		return new FormGroup<UpdateEnvironmentPutBodyEnvironmentFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateEnvironmentPutBodyEnvironmentValues {
		key?: string | null;
		value?: string | null;
	}
	export interface UpdateEnvironmentPutBodyEnvironmentValuesFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEnvironmentPutBodyEnvironmentValuesFormGroup() {
		return new FormGroup<UpdateEnvironmentPutBodyEnvironmentValuesFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateEnvironmentReturn {
		environment?: UpdateEnvironmentReturnEnvironment;
	}
	export interface UpdateEnvironmentReturnFormProperties {
	}
	export function CreateUpdateEnvironmentReturnFormGroup() {
		return new FormGroup<UpdateEnvironmentReturnFormProperties>({
		});

	}

	export interface UpdateEnvironmentReturnEnvironment {
		id?: string | null;
		name?: string | null;
		uid?: string | null;
	}
	export interface UpdateEnvironmentReturnEnvironmentFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		uid: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEnvironmentReturnEnvironmentFormGroup() {
		return new FormGroup<UpdateEnvironmentReturnEnvironmentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportExternalApiSpecificationPostBody {
		input?: ImportExternalApiSpecificationPostBodyInput;
		type?: string | null;
	}
	export interface ImportExternalApiSpecificationPostBodyFormProperties {
		type: FormControl<string | null | undefined>,
	}
	export function CreateImportExternalApiSpecificationPostBodyFormGroup() {
		return new FormGroup<ImportExternalApiSpecificationPostBodyFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportExternalApiSpecificationPostBodyInput {
		info?: ImportExternalApiSpecificationPostBodyInputInfo;
		openapi?: string | null;
		paths?: ImportExternalApiSpecificationPostBodyInputPaths;
		ImportExternalApiSpecificationPostBodyInputServers?: Array<ImportExternalApiSpecificationPostBodyInputServers>;
	}
	export interface ImportExternalApiSpecificationPostBodyInputFormProperties {
		openapi: FormControl<string | null | undefined>,
	}
	export function CreateImportExternalApiSpecificationPostBodyInputFormGroup() {
		return new FormGroup<ImportExternalApiSpecificationPostBodyInputFormProperties>({
			openapi: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportExternalApiSpecificationPostBodyInputInfo {
		license?: ImportExternalApiSpecificationPostBodyInputInfoLicense;
		title?: string | null;
		version?: string | null;
	}
	export interface ImportExternalApiSpecificationPostBodyInputInfoFormProperties {
		title: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateImportExternalApiSpecificationPostBodyInputInfoFormGroup() {
		return new FormGroup<ImportExternalApiSpecificationPostBodyInputInfoFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportExternalApiSpecificationPostBodyInputInfoLicense {
		name?: string | null;
	}
	export interface ImportExternalApiSpecificationPostBodyInputInfoLicenseFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateImportExternalApiSpecificationPostBodyInputInfoLicenseFormGroup() {
		return new FormGroup<ImportExternalApiSpecificationPostBodyInputInfoLicenseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportExternalApiSpecificationPostBodyInputPaths {
		'/pets'?: ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_;
	}
	export interface ImportExternalApiSpecificationPostBodyInputPathsFormProperties {
	}
	export function CreateImportExternalApiSpecificationPostBodyInputPathsFormGroup() {
		return new FormGroup<ImportExternalApiSpecificationPostBodyInputPathsFormProperties>({
		});

	}

	export interface ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_ {
		get?: ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_Get;
	}
	export interface ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_FormProperties {
	}
	export function CreateImportExternalApiSpecificationPostBodyInputPaths_Slashpets_FormGroup() {
		return new FormGroup<ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_FormProperties>({
		});

	}

	export interface ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_Get {
		operationId?: string | null;
		ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetParameters?: Array<ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetParameters>;
		responses?: ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponses;
		summary?: string | null;
	}
	export interface ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetFormProperties {
		operationId: FormControl<string | null | undefined>,
		summary: FormControl<string | null | undefined>,
	}
	export function CreateImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetFormGroup() {
		return new FormGroup<ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetFormProperties>({
			operationId: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetParameters {
		description?: string | null;
		in?: string | null;
		name?: string | null;
		required?: boolean | null;
		schema?: ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetParametersSchema;
	}
	export interface ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetParametersFormProperties {
		description: FormControl<string | null | undefined>,
		in: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		required: FormControl<boolean | null | undefined>,
	}
	export function CreateImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetParametersFormGroup() {
		return new FormGroup<ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetParametersFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			in: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetParametersSchema {
		format?: string | null;
		type?: string | null;
	}
	export interface ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetParametersSchemaFormProperties {
		format: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetParametersSchemaFormGroup() {
		return new FormGroup<ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetParametersSchemaFormProperties>({
			format: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponses {
		default?: ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefault;
	}
	export interface ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesFormProperties {
	}
	export function CreateImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesFormGroup() {
		return new FormGroup<ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesFormProperties>({
		});

	}

	export interface ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefault {
		content?: ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefaultContent;
		description?: string | null;
	}
	export interface ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefaultFormProperties {
		description: FormControl<string | null | undefined>,
	}
	export function CreateImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefaultFormGroup() {
		return new FormGroup<ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefaultFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefaultContent {
		'application/json'?: ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefaultContent_applicationSlashjson_;
	}
	export interface ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefaultContentFormProperties {
	}
	export function CreateImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefaultContentFormGroup() {
		return new FormGroup<ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefaultContentFormProperties>({
		});

	}

	export interface ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefaultContent_applicationSlashjson_ {
		schema?: ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefaultContent_applicationSlashjson_Schema;
	}
	export interface ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefaultContent_applicationSlashjson_FormProperties {
	}
	export function CreateImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefaultContent_applicationSlashjson_FormGroup() {
		return new FormGroup<ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefaultContent_applicationSlashjson_FormProperties>({
		});

	}

	export interface ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefaultContent_applicationSlashjson_Schema {
		properties?: ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefaultContent_applicationSlashjson_SchemaProperties;
		required?: Array<string>;
	}
	export interface ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefaultContent_applicationSlashjson_SchemaFormProperties {
	}
	export function CreateImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefaultContent_applicationSlashjson_SchemaFormGroup() {
		return new FormGroup<ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefaultContent_applicationSlashjson_SchemaFormProperties>({
		});

	}

	export interface ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefaultContent_applicationSlashjson_SchemaProperties {
		code?: ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefaultContent_applicationSlashjson_SchemaPropertiesCode;
		message?: ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefaultContent_applicationSlashjson_SchemaPropertiesMessage;
	}
	export interface ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefaultContent_applicationSlashjson_SchemaPropertiesFormProperties {
	}
	export function CreateImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefaultContent_applicationSlashjson_SchemaPropertiesFormGroup() {
		return new FormGroup<ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefaultContent_applicationSlashjson_SchemaPropertiesFormProperties>({
		});

	}

	export interface ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefaultContent_applicationSlashjson_SchemaPropertiesCode {
		format?: string | null;
		type?: string | null;
	}
	export interface ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefaultContent_applicationSlashjson_SchemaPropertiesCodeFormProperties {
		format: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefaultContent_applicationSlashjson_SchemaPropertiesCodeFormGroup() {
		return new FormGroup<ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefaultContent_applicationSlashjson_SchemaPropertiesCodeFormProperties>({
			format: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefaultContent_applicationSlashjson_SchemaPropertiesMessage {
		type?: string | null;
	}
	export interface ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefaultContent_applicationSlashjson_SchemaPropertiesMessageFormProperties {
		type: FormControl<string | null | undefined>,
	}
	export function CreateImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefaultContent_applicationSlashjson_SchemaPropertiesMessageFormGroup() {
		return new FormGroup<ImportExternalApiSpecificationPostBodyInputPaths_Slashpets_GetResponsesDefaultContent_applicationSlashjson_SchemaPropertiesMessageFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportExternalApiSpecificationPostBodyInputServers {
		url?: string | null;
	}
	export interface ImportExternalApiSpecificationPostBodyInputServersFormProperties {
		url: FormControl<string | null | undefined>,
	}
	export function CreateImportExternalApiSpecificationPostBodyInputServersFormGroup() {
		return new FormGroup<ImportExternalApiSpecificationPostBodyInputServersFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportExternalApiSpecificationReturn {
		ImportExternalApiSpecificationReturnCollections?: Array<ImportExternalApiSpecificationReturnCollections>;
	}
	export interface ImportExternalApiSpecificationReturnFormProperties {
	}
	export function CreateImportExternalApiSpecificationReturnFormGroup() {
		return new FormGroup<ImportExternalApiSpecificationReturnFormProperties>({
		});

	}

	export interface ImportExternalApiSpecificationReturnCollections {
		id?: string | null;
		name?: string | null;
		uid?: string | null;
	}
	export interface ImportExternalApiSpecificationReturnCollectionsFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		uid: FormControl<string | null | undefined>,
	}
	export function CreateImportExternalApiSpecificationReturnCollectionsFormGroup() {
		return new FormGroup<ImportExternalApiSpecificationReturnCollectionsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApiKeyOwnerReturn {
		ApiKeyOwnerReturnOperations?: Array<ApiKeyOwnerReturnOperations>;
		user?: ApiKeyOwnerReturnUser;
	}
	export interface ApiKeyOwnerReturnFormProperties {
	}
	export function CreateApiKeyOwnerReturnFormGroup() {
		return new FormGroup<ApiKeyOwnerReturnFormProperties>({
		});

	}

	export interface ApiKeyOwnerReturnOperations {

		/** Type: double */
		limit?: number | null;
		name?: string | null;

		/** Type: double */
		overage?: number | null;

		/** Type: double */
		usage?: number | null;
	}
	export interface ApiKeyOwnerReturnOperationsFormProperties {

		/** Type: double */
		limit: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Type: double */
		overage: FormControl<number | null | undefined>,

		/** Type: double */
		usage: FormControl<number | null | undefined>,
	}
	export function CreateApiKeyOwnerReturnOperationsFormGroup() {
		return new FormGroup<ApiKeyOwnerReturnOperationsFormProperties>({
			limit: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			overage: new FormControl<number | null | undefined>(undefined),
			usage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ApiKeyOwnerReturnUser {
		avatar?: string | null;
		email?: string | null;
		fullName?: string | null;
		id?: string | null;
		isPublic?: boolean | null;
		username?: string | null;
	}
	export interface ApiKeyOwnerReturnUserFormProperties {
		avatar: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		fullName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		isPublic: FormControl<boolean | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateApiKeyOwnerReturnUserFormGroup() {
		return new FormGroup<ApiKeyOwnerReturnUserFormProperties>({
			avatar: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			fullName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isPublic: new FormControl<boolean | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AllMocksReturn {
		AllMocksReturnMocks?: Array<AllMocksReturnMocks>;
	}
	export interface AllMocksReturnFormProperties {
	}
	export function CreateAllMocksReturnFormGroup() {
		return new FormGroup<AllMocksReturnFormProperties>({
		});

	}

	export interface AllMocksReturnMocks {
		collection?: string | null;
		environment?: string | null;
		id?: string | null;
		mockUrl?: string | null;
		owner?: string | null;
		uid?: string | null;
	}
	export interface AllMocksReturnMocksFormProperties {
		collection: FormControl<string | null | undefined>,
		environment: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		mockUrl: FormControl<string | null | undefined>,
		owner: FormControl<string | null | undefined>,
		uid: FormControl<string | null | undefined>,
	}
	export function CreateAllMocksReturnMocksFormGroup() {
		return new FormGroup<AllMocksReturnMocksFormProperties>({
			collection: new FormControl<string | null | undefined>(undefined),
			environment: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			mockUrl: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMockPostBody {
		mock?: CreateMockPostBodyMock;
	}
	export interface CreateMockPostBodyFormProperties {
	}
	export function CreateCreateMockPostBodyFormGroup() {
		return new FormGroup<CreateMockPostBodyFormProperties>({
		});

	}

	export interface CreateMockPostBodyMock {
		collection?: string | null;
		environment?: string | null;
	}
	export interface CreateMockPostBodyMockFormProperties {
		collection: FormControl<string | null | undefined>,
		environment: FormControl<string | null | undefined>,
	}
	export function CreateCreateMockPostBodyMockFormGroup() {
		return new FormGroup<CreateMockPostBodyMockFormProperties>({
			collection: new FormControl<string | null | undefined>(undefined),
			environment: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMockReturn {
		mock?: CreateMockReturnMock;
	}
	export interface CreateMockReturnFormProperties {
	}
	export function CreateCreateMockReturnFormGroup() {
		return new FormGroup<CreateMockReturnFormProperties>({
		});

	}

	export interface CreateMockReturnMock {
		collection?: string | null;
		environment?: string | null;
		id?: string | null;
		mockUrl?: string | null;
		owner?: string | null;
		uid?: string | null;
	}
	export interface CreateMockReturnMockFormProperties {
		collection: FormControl<string | null | undefined>,
		environment: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		mockUrl: FormControl<string | null | undefined>,
		owner: FormControl<string | null | undefined>,
		uid: FormControl<string | null | undefined>,
	}
	export function CreateCreateMockReturnMockFormGroup() {
		return new FormGroup<CreateMockReturnMockFormProperties>({
			collection: new FormControl<string | null | undefined>(undefined),
			environment: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			mockUrl: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteMockReturn {
		mock?: DeleteMockReturnMock;
	}
	export interface DeleteMockReturnFormProperties {
	}
	export function CreateDeleteMockReturnFormGroup() {
		return new FormGroup<DeleteMockReturnFormProperties>({
		});

	}

	export interface DeleteMockReturnMock {
		id?: string | null;
		uid?: string | null;
	}
	export interface DeleteMockReturnMockFormProperties {
		id: FormControl<string | null | undefined>,
		uid: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMockReturnMockFormGroup() {
		return new FormGroup<DeleteMockReturnMockFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SingleMockReturn {
		mock?: SingleMockReturnMock;
	}
	export interface SingleMockReturnFormProperties {
	}
	export function CreateSingleMockReturnFormGroup() {
		return new FormGroup<SingleMockReturnFormProperties>({
		});

	}

	export interface SingleMockReturnMock {
		collection?: string | null;
		environment?: string | null;
		id?: string | null;
		mockUrl?: string | null;
		owner?: string | null;
		uid?: string | null;
	}
	export interface SingleMockReturnMockFormProperties {
		collection: FormControl<string | null | undefined>,
		environment: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		mockUrl: FormControl<string | null | undefined>,
		owner: FormControl<string | null | undefined>,
		uid: FormControl<string | null | undefined>,
	}
	export function CreateSingleMockReturnMockFormGroup() {
		return new FormGroup<SingleMockReturnMockFormProperties>({
			collection: new FormControl<string | null | undefined>(undefined),
			environment: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			mockUrl: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateMockPutBody {
		mock?: UpdateMockPutBodyMock;
	}
	export interface UpdateMockPutBodyFormProperties {
	}
	export function CreateUpdateMockPutBodyFormGroup() {
		return new FormGroup<UpdateMockPutBodyFormProperties>({
		});

	}

	export interface UpdateMockPutBodyMock {
		description?: string | null;
		environment?: string | null;
		name?: string | null;
		private?: boolean | null;
		versionTag?: string | null;
	}
	export interface UpdateMockPutBodyMockFormProperties {
		description: FormControl<string | null | undefined>,
		environment: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		private: FormControl<boolean | null | undefined>,
		versionTag: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMockPutBodyMockFormGroup() {
		return new FormGroup<UpdateMockPutBodyMockFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			environment: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			private: new FormControl<boolean | null | undefined>(undefined),
			versionTag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateMockReturn {
		mock?: UpdateMockReturnMock;
	}
	export interface UpdateMockReturnFormProperties {
	}
	export function CreateUpdateMockReturnFormGroup() {
		return new FormGroup<UpdateMockReturnFormProperties>({
		});

	}

	export interface UpdateMockReturnMock {
		collection?: string | null;
		config?: UpdateMockReturnMockConfig;
		environment?: string | null;
		id?: string | null;
		mockUrl?: string | null;
		name?: string | null;
		owner?: string | null;
		uid?: string | null;
	}
	export interface UpdateMockReturnMockFormProperties {
		collection: FormControl<string | null | undefined>,
		environment: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		mockUrl: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		owner: FormControl<string | null | undefined>,
		uid: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMockReturnMockFormGroup() {
		return new FormGroup<UpdateMockReturnMockFormProperties>({
			collection: new FormControl<string | null | undefined>(undefined),
			environment: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			mockUrl: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateMockReturnMockConfig {
		headers?: Array<string>;
		matchBody?: boolean | null;
		matchQueryParams?: boolean | null;
		matchWildcards?: boolean | null;
	}
	export interface UpdateMockReturnMockConfigFormProperties {
		matchBody: FormControl<boolean | null | undefined>,
		matchQueryParams: FormControl<boolean | null | undefined>,
		matchWildcards: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateMockReturnMockConfigFormGroup() {
		return new FormGroup<UpdateMockReturnMockConfigFormProperties>({
			matchBody: new FormControl<boolean | null | undefined>(undefined),
			matchQueryParams: new FormControl<boolean | null | undefined>(undefined),
			matchWildcards: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PublishMockReturn {
		mock?: PublishMockReturnMock;
	}
	export interface PublishMockReturnFormProperties {
	}
	export function CreatePublishMockReturnFormGroup() {
		return new FormGroup<PublishMockReturnFormProperties>({
		});

	}

	export interface PublishMockReturnMock {
		id?: string | null;
	}
	export interface PublishMockReturnMockFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreatePublishMockReturnMockFormGroup() {
		return new FormGroup<PublishMockReturnMockFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnpublishMockReturn {
		mock?: UnpublishMockReturnMock;
	}
	export interface UnpublishMockReturnFormProperties {
	}
	export function CreateUnpublishMockReturnFormGroup() {
		return new FormGroup<UnpublishMockReturnFormProperties>({
		});

	}

	export interface UnpublishMockReturnMock {
		id?: string | null;
	}
	export interface UnpublishMockReturnMockFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateUnpublishMockReturnMockFormGroup() {
		return new FormGroup<UnpublishMockReturnMockFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AllMonitorsReturn {
		AllMonitorsReturnMonitors?: Array<AllMonitorsReturnMonitors>;
	}
	export interface AllMonitorsReturnFormProperties {
	}
	export function CreateAllMonitorsReturnFormGroup() {
		return new FormGroup<AllMonitorsReturnFormProperties>({
		});

	}

	export interface AllMonitorsReturnMonitors {
		id?: string | null;
		name?: string | null;
		owner?: string | null;
		uid?: string | null;
	}
	export interface AllMonitorsReturnMonitorsFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		owner: FormControl<string | null | undefined>,
		uid: FormControl<string | null | undefined>,
	}
	export function CreateAllMonitorsReturnMonitorsFormGroup() {
		return new FormGroup<AllMonitorsReturnMonitorsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMonitorPostBody {
		monitor?: CreateMonitorPostBodyMonitor;
	}
	export interface CreateMonitorPostBodyFormProperties {
	}
	export function CreateCreateMonitorPostBodyFormGroup() {
		return new FormGroup<CreateMonitorPostBodyFormProperties>({
		});

	}

	export interface CreateMonitorPostBodyMonitor {
		collection?: string | null;
		environment?: string | null;
		name?: string | null;
		schedule?: CreateMonitorPostBodyMonitorSchedule;
	}
	export interface CreateMonitorPostBodyMonitorFormProperties {
		collection: FormControl<string | null | undefined>,
		environment: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateMonitorPostBodyMonitorFormGroup() {
		return new FormGroup<CreateMonitorPostBodyMonitorFormProperties>({
			collection: new FormControl<string | null | undefined>(undefined),
			environment: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMonitorPostBodyMonitorSchedule {
		cron?: string | null;
		timezone?: string | null;
	}
	export interface CreateMonitorPostBodyMonitorScheduleFormProperties {
		cron: FormControl<string | null | undefined>,
		timezone: FormControl<string | null | undefined>,
	}
	export function CreateCreateMonitorPostBodyMonitorScheduleFormGroup() {
		return new FormGroup<CreateMonitorPostBodyMonitorScheduleFormProperties>({
			cron: new FormControl<string | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMonitorReturn {
		monitor?: CreateMonitorReturnMonitor;
	}
	export interface CreateMonitorReturnFormProperties {
	}
	export function CreateCreateMonitorReturnFormGroup() {
		return new FormGroup<CreateMonitorReturnFormProperties>({
		});

	}

	export interface CreateMonitorReturnMonitor {
		id?: string | null;
		name?: string | null;
		uid?: string | null;
	}
	export interface CreateMonitorReturnMonitorFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		uid: FormControl<string | null | undefined>,
	}
	export function CreateCreateMonitorReturnMonitorFormGroup() {
		return new FormGroup<CreateMonitorReturnMonitorFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteMonitorReturn {
		monitor?: DeleteMonitorReturnMonitor;
	}
	export interface DeleteMonitorReturnFormProperties {
	}
	export function CreateDeleteMonitorReturnFormGroup() {
		return new FormGroup<DeleteMonitorReturnFormProperties>({
		});

	}

	export interface DeleteMonitorReturnMonitor {
		id?: string | null;
		uid?: string | null;
	}
	export interface DeleteMonitorReturnMonitorFormProperties {
		id: FormControl<string | null | undefined>,
		uid: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMonitorReturnMonitorFormGroup() {
		return new FormGroup<DeleteMonitorReturnMonitorFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SingleMonitorReturn {
		monitor?: SingleMonitorReturnMonitor;
	}
	export interface SingleMonitorReturnFormProperties {
	}
	export function CreateSingleMonitorReturnFormGroup() {
		return new FormGroup<SingleMonitorReturnFormProperties>({
		});

	}

	export interface SingleMonitorReturnMonitor {
		collectionUid?: string | null;
		distribution?: Array<string>;
		environmentUid?: string | null;
		id?: string | null;
		lastRun?: SingleMonitorReturnMonitorLastRun;
		name?: string | null;
		notifications?: SingleMonitorReturnMonitorNotifications;
		options?: SingleMonitorReturnMonitorOptions;
		owner?: string | null;
		schedule?: SingleMonitorReturnMonitorSchedule;
		uid?: string | null;
	}
	export interface SingleMonitorReturnMonitorFormProperties {
		collectionUid: FormControl<string | null | undefined>,
		environmentUid: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		owner: FormControl<string | null | undefined>,
		uid: FormControl<string | null | undefined>,
	}
	export function CreateSingleMonitorReturnMonitorFormGroup() {
		return new FormGroup<SingleMonitorReturnMonitorFormProperties>({
			collectionUid: new FormControl<string | null | undefined>(undefined),
			environmentUid: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SingleMonitorReturnMonitorLastRun {
		finishedAt?: string | null;
		startedAt?: string | null;
		stats?: SingleMonitorReturnMonitorLastRunStats;
		status?: string | null;
	}
	export interface SingleMonitorReturnMonitorLastRunFormProperties {
		finishedAt: FormControl<string | null | undefined>,
		startedAt: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateSingleMonitorReturnMonitorLastRunFormGroup() {
		return new FormGroup<SingleMonitorReturnMonitorLastRunFormProperties>({
			finishedAt: new FormControl<string | null | undefined>(undefined),
			startedAt: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SingleMonitorReturnMonitorLastRunStats {
		assertions?: SingleMonitorReturnMonitorLastRunStatsAssertions;
		requests?: SingleMonitorReturnMonitorLastRunStatsRequests;
	}
	export interface SingleMonitorReturnMonitorLastRunStatsFormProperties {
	}
	export function CreateSingleMonitorReturnMonitorLastRunStatsFormGroup() {
		return new FormGroup<SingleMonitorReturnMonitorLastRunStatsFormProperties>({
		});

	}

	export interface SingleMonitorReturnMonitorLastRunStatsAssertions {

		/** Type: double */
		failed?: number | null;

		/** Type: double */
		total?: number | null;
	}
	export interface SingleMonitorReturnMonitorLastRunStatsAssertionsFormProperties {

		/** Type: double */
		failed: FormControl<number | null | undefined>,

		/** Type: double */
		total: FormControl<number | null | undefined>,
	}
	export function CreateSingleMonitorReturnMonitorLastRunStatsAssertionsFormGroup() {
		return new FormGroup<SingleMonitorReturnMonitorLastRunStatsAssertionsFormProperties>({
			failed: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SingleMonitorReturnMonitorLastRunStatsRequests {

		/** Type: double */
		total?: number | null;
	}
	export interface SingleMonitorReturnMonitorLastRunStatsRequestsFormProperties {

		/** Type: double */
		total: FormControl<number | null | undefined>,
	}
	export function CreateSingleMonitorReturnMonitorLastRunStatsRequestsFormGroup() {
		return new FormGroup<SingleMonitorReturnMonitorLastRunStatsRequestsFormProperties>({
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SingleMonitorReturnMonitorNotifications {
		SingleMonitorReturnMonitorNotificationsOnError?: Array<SingleMonitorReturnMonitorNotificationsOnError>;
		SingleMonitorReturnMonitorNotificationsOnFailure?: Array<SingleMonitorReturnMonitorNotificationsOnFailure>;
	}
	export interface SingleMonitorReturnMonitorNotificationsFormProperties {
	}
	export function CreateSingleMonitorReturnMonitorNotificationsFormGroup() {
		return new FormGroup<SingleMonitorReturnMonitorNotificationsFormProperties>({
		});

	}

	export interface SingleMonitorReturnMonitorNotificationsOnError {
		email?: string | null;
	}
	export interface SingleMonitorReturnMonitorNotificationsOnErrorFormProperties {
		email: FormControl<string | null | undefined>,
	}
	export function CreateSingleMonitorReturnMonitorNotificationsOnErrorFormGroup() {
		return new FormGroup<SingleMonitorReturnMonitorNotificationsOnErrorFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SingleMonitorReturnMonitorNotificationsOnFailure {
		email?: string | null;
	}
	export interface SingleMonitorReturnMonitorNotificationsOnFailureFormProperties {
		email: FormControl<string | null | undefined>,
	}
	export function CreateSingleMonitorReturnMonitorNotificationsOnFailureFormGroup() {
		return new FormGroup<SingleMonitorReturnMonitorNotificationsOnFailureFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SingleMonitorReturnMonitorOptions {
		followRedirects?: boolean | null;

		/** Type: double */
		requestDelay?: number | null;

		/** Type: double */
		requestTimeout?: number | null;
		strictSSL?: boolean | null;
	}
	export interface SingleMonitorReturnMonitorOptionsFormProperties {
		followRedirects: FormControl<boolean | null | undefined>,

		/** Type: double */
		requestDelay: FormControl<number | null | undefined>,

		/** Type: double */
		requestTimeout: FormControl<number | null | undefined>,
		strictSSL: FormControl<boolean | null | undefined>,
	}
	export function CreateSingleMonitorReturnMonitorOptionsFormGroup() {
		return new FormGroup<SingleMonitorReturnMonitorOptionsFormProperties>({
			followRedirects: new FormControl<boolean | null | undefined>(undefined),
			requestDelay: new FormControl<number | null | undefined>(undefined),
			requestTimeout: new FormControl<number | null | undefined>(undefined),
			strictSSL: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SingleMonitorReturnMonitorSchedule {
		cron?: string | null;
		nextRun?: string | null;
		timezone?: string | null;
	}
	export interface SingleMonitorReturnMonitorScheduleFormProperties {
		cron: FormControl<string | null | undefined>,
		nextRun: FormControl<string | null | undefined>,
		timezone: FormControl<string | null | undefined>,
	}
	export function CreateSingleMonitorReturnMonitorScheduleFormGroup() {
		return new FormGroup<SingleMonitorReturnMonitorScheduleFormProperties>({
			cron: new FormControl<string | null | undefined>(undefined),
			nextRun: new FormControl<string | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateMonitorPutBody {
		monitor?: UpdateMonitorPutBodyMonitor;
	}
	export interface UpdateMonitorPutBodyFormProperties {
	}
	export function CreateUpdateMonitorPutBodyFormGroup() {
		return new FormGroup<UpdateMonitorPutBodyFormProperties>({
		});

	}

	export interface UpdateMonitorPutBodyMonitor {
		name?: string | null;
		schedule?: UpdateMonitorPutBodyMonitorSchedule;
	}
	export interface UpdateMonitorPutBodyMonitorFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMonitorPutBodyMonitorFormGroup() {
		return new FormGroup<UpdateMonitorPutBodyMonitorFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateMonitorPutBodyMonitorSchedule {
		cron?: string | null;
		timezone?: string | null;
	}
	export interface UpdateMonitorPutBodyMonitorScheduleFormProperties {
		cron: FormControl<string | null | undefined>,
		timezone: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMonitorPutBodyMonitorScheduleFormGroup() {
		return new FormGroup<UpdateMonitorPutBodyMonitorScheduleFormProperties>({
			cron: new FormControl<string | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateMonitorReturn {
		monitor?: UpdateMonitorReturnMonitor;
	}
	export interface UpdateMonitorReturnFormProperties {
	}
	export function CreateUpdateMonitorReturnFormGroup() {
		return new FormGroup<UpdateMonitorReturnFormProperties>({
		});

	}

	export interface UpdateMonitorReturnMonitor {
		id?: string | null;
		name?: string | null;
		uid?: string | null;
	}
	export interface UpdateMonitorReturnMonitorFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		uid: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMonitorReturnMonitorFormGroup() {
		return new FormGroup<UpdateMonitorReturnMonitorFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RunAMonitorReturn {
		run?: RunAMonitorReturnRun;
	}
	export interface RunAMonitorReturnFormProperties {
	}
	export function CreateRunAMonitorReturnFormGroup() {
		return new FormGroup<RunAMonitorReturnFormProperties>({
		});

	}

	export interface RunAMonitorReturnRun {
		RunAMonitorReturnRunExecutions?: Array<RunAMonitorReturnRunExecutions>;
		RunAMonitorReturnRunFailures?: Array<RunAMonitorReturnRunFailures>;
		info?: RunAMonitorReturnRunInfo;
		stats?: RunAMonitorReturnRunStats;
	}
	export interface RunAMonitorReturnRunFormProperties {
	}
	export function CreateRunAMonitorReturnRunFormGroup() {
		return new FormGroup<RunAMonitorReturnRunFormProperties>({
		});

	}

	export interface RunAMonitorReturnRunExecutions {

		/** Type: double */
		id?: number | null;
		item?: RunAMonitorReturnRunExecutionsItem;
		request?: RunAMonitorReturnRunExecutionsRequest;
		response?: RunAMonitorReturnRunExecutionsResponse;
	}
	export interface RunAMonitorReturnRunExecutionsFormProperties {

		/** Type: double */
		id: FormControl<number | null | undefined>,
	}
	export function CreateRunAMonitorReturnRunExecutionsFormGroup() {
		return new FormGroup<RunAMonitorReturnRunExecutionsFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RunAMonitorReturnRunExecutionsItem {
		id?: string | null;
		name?: string | null;
	}
	export interface RunAMonitorReturnRunExecutionsItemFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateRunAMonitorReturnRunExecutionsItemFormGroup() {
		return new FormGroup<RunAMonitorReturnRunExecutionsItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RunAMonitorReturnRunExecutionsRequest {
		body?: RunAMonitorReturnRunExecutionsRequestBody;
		headers?: RunAMonitorReturnRunExecutionsRequestHeaders;
		method?: string | null;
		timestamp?: string | null;
		url?: string | null;
	}
	export interface RunAMonitorReturnRunExecutionsRequestFormProperties {
		method: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateRunAMonitorReturnRunExecutionsRequestFormGroup() {
		return new FormGroup<RunAMonitorReturnRunExecutionsRequestFormProperties>({
			method: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RunAMonitorReturnRunExecutionsRequestBody {

		/** Type: double */
		contentLength?: number | null;
		mode?: string | null;
	}
	export interface RunAMonitorReturnRunExecutionsRequestBodyFormProperties {

		/** Type: double */
		contentLength: FormControl<number | null | undefined>,
		mode: FormControl<string | null | undefined>,
	}
	export function CreateRunAMonitorReturnRunExecutionsRequestBodyFormGroup() {
		return new FormGroup<RunAMonitorReturnRunExecutionsRequestBodyFormProperties>({
			contentLength: new FormControl<number | null | undefined>(undefined),
			mode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RunAMonitorReturnRunExecutionsRequestHeaders {
		accept?: string | null;
		'accept-encoding'?: string | null;

		/** Type: double */
		'content-length'?: number | null;
		'content-type'?: string | null;
	}
	export interface RunAMonitorReturnRunExecutionsRequestHeadersFormProperties {
		accept: FormControl<string | null | undefined>,
		'accept-encoding': FormControl<string | null | undefined>,

		/** Type: double */
		'content-length': FormControl<number | null | undefined>,
		'content-type': FormControl<string | null | undefined>,
	}
	export function CreateRunAMonitorReturnRunExecutionsRequestHeadersFormGroup() {
		return new FormGroup<RunAMonitorReturnRunExecutionsRequestHeadersFormProperties>({
			accept: new FormControl<string | null | undefined>(undefined),
			'accept-encoding': new FormControl<string | null | undefined>(undefined),
			'content-length': new FormControl<number | null | undefined>(undefined),
			'content-type': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RunAMonitorReturnRunExecutionsResponse {
		body?: RunAMonitorReturnRunExecutionsResponseBody;

		/** Type: double */
		code?: number | null;
		headers?: RunAMonitorReturnRunExecutionsResponseHeaders;

		/** Type: double */
		responseSize?: number | null;

		/** Type: double */
		responseTime?: number | null;
	}
	export interface RunAMonitorReturnRunExecutionsResponseFormProperties {

		/** Type: double */
		code: FormControl<number | null | undefined>,

		/** Type: double */
		responseSize: FormControl<number | null | undefined>,

		/** Type: double */
		responseTime: FormControl<number | null | undefined>,
	}
	export function CreateRunAMonitorReturnRunExecutionsResponseFormGroup() {
		return new FormGroup<RunAMonitorReturnRunExecutionsResponseFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			responseSize: new FormControl<number | null | undefined>(undefined),
			responseTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RunAMonitorReturnRunExecutionsResponseBody {

		/** Type: double */
		contentLength?: number | null;
	}
	export interface RunAMonitorReturnRunExecutionsResponseBodyFormProperties {

		/** Type: double */
		contentLength: FormControl<number | null | undefined>,
	}
	export function CreateRunAMonitorReturnRunExecutionsResponseBodyFormGroup() {
		return new FormGroup<RunAMonitorReturnRunExecutionsResponseBodyFormProperties>({
			contentLength: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RunAMonitorReturnRunExecutionsResponseHeaders {
		connection?: string | null;
		'content-encoding'?: string | null;
		'content-type'?: string | null;
		date?: string | null;
		'transfer-encoding'?: string | null;
	}
	export interface RunAMonitorReturnRunExecutionsResponseHeadersFormProperties {
		connection: FormControl<string | null | undefined>,
		'content-encoding': FormControl<string | null | undefined>,
		'content-type': FormControl<string | null | undefined>,
		date: FormControl<string | null | undefined>,
		'transfer-encoding': FormControl<string | null | undefined>,
	}
	export function CreateRunAMonitorReturnRunExecutionsResponseHeadersFormGroup() {
		return new FormGroup<RunAMonitorReturnRunExecutionsResponseHeadersFormProperties>({
			connection: new FormControl<string | null | undefined>(undefined),
			'content-encoding': new FormControl<string | null | undefined>(undefined),
			'content-type': new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			'transfer-encoding': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RunAMonitorReturnRunFailures {
		assertion?: RunAMonitorReturnRunFailuresAssertion;

		/** Type: double */
		executionId?: number | null;
		message?: string | null;
		name?: string | null;
	}
	export interface RunAMonitorReturnRunFailuresFormProperties {

		/** Type: double */
		executionId: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateRunAMonitorReturnRunFailuresFormGroup() {
		return new FormGroup<RunAMonitorReturnRunFailuresFormProperties>({
			executionId: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RunAMonitorReturnRunFailuresAssertion {
		'Status code is 400'?: boolean | null;
	}
	export interface RunAMonitorReturnRunFailuresAssertionFormProperties {
		'Status code is 400': FormControl<boolean | null | undefined>,
	}
	export function CreateRunAMonitorReturnRunFailuresAssertionFormGroup() {
		return new FormGroup<RunAMonitorReturnRunFailuresAssertionFormProperties>({
			'Status code is 400': new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface RunAMonitorReturnRunInfo {
		collectionUid?: string | null;
		finishedAt?: string | null;
		jobId?: string | null;
		monitorId?: string | null;
		name?: string | null;
		startedAt?: string | null;
		status?: string | null;
	}
	export interface RunAMonitorReturnRunInfoFormProperties {
		collectionUid: FormControl<string | null | undefined>,
		finishedAt: FormControl<string | null | undefined>,
		jobId: FormControl<string | null | undefined>,
		monitorId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		startedAt: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateRunAMonitorReturnRunInfoFormGroup() {
		return new FormGroup<RunAMonitorReturnRunInfoFormProperties>({
			collectionUid: new FormControl<string | null | undefined>(undefined),
			finishedAt: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
			monitorId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startedAt: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RunAMonitorReturnRunStats {
		assertions?: RunAMonitorReturnRunStatsAssertions;
		requests?: RunAMonitorReturnRunStatsRequests;
	}
	export interface RunAMonitorReturnRunStatsFormProperties {
	}
	export function CreateRunAMonitorReturnRunStatsFormGroup() {
		return new FormGroup<RunAMonitorReturnRunStatsFormProperties>({
		});

	}

	export interface RunAMonitorReturnRunStatsAssertions {

		/** Type: double */
		failed?: number | null;

		/** Type: double */
		total?: number | null;
	}
	export interface RunAMonitorReturnRunStatsAssertionsFormProperties {

		/** Type: double */
		failed: FormControl<number | null | undefined>,

		/** Type: double */
		total: FormControl<number | null | undefined>,
	}
	export function CreateRunAMonitorReturnRunStatsAssertionsFormGroup() {
		return new FormGroup<RunAMonitorReturnRunStatsAssertionsFormProperties>({
			failed: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RunAMonitorReturnRunStatsRequests {

		/** Type: double */
		failed?: number | null;

		/** Type: double */
		total?: number | null;
	}
	export interface RunAMonitorReturnRunStatsRequestsFormProperties {

		/** Type: double */
		failed: FormControl<number | null | undefined>,

		/** Type: double */
		total: FormControl<number | null | undefined>,
	}
	export function CreateRunAMonitorReturnRunStatsRequestsFormGroup() {
		return new FormGroup<RunAMonitorReturnRunStatsRequestsFormProperties>({
			failed: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateWebhookPostBody {
		webhook?: CreateWebhookPostBodyWebhook;
	}
	export interface CreateWebhookPostBodyFormProperties {
	}
	export function CreateCreateWebhookPostBodyFormGroup() {
		return new FormGroup<CreateWebhookPostBodyFormProperties>({
		});

	}

	export interface CreateWebhookPostBodyWebhook {
		collection?: string | null;
		name?: string | null;
	}
	export interface CreateWebhookPostBodyWebhookFormProperties {
		collection: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateWebhookPostBodyWebhookFormGroup() {
		return new FormGroup<CreateWebhookPostBodyWebhookFormProperties>({
			collection: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AllWorkspacesReturn {
		AllWorkspacesReturnWorkspaces?: Array<AllWorkspacesReturnWorkspaces>;
	}
	export interface AllWorkspacesReturnFormProperties {
	}
	export function CreateAllWorkspacesReturnFormGroup() {
		return new FormGroup<AllWorkspacesReturnFormProperties>({
		});

	}

	export interface AllWorkspacesReturnWorkspaces {
		id?: string | null;
		name?: string | null;
		type?: string | null;
	}
	export interface AllWorkspacesReturnWorkspacesFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateAllWorkspacesReturnWorkspacesFormGroup() {
		return new FormGroup<AllWorkspacesReturnWorkspacesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateWorkspacePostBody {
		workspace?: CreateWorkspacePostBodyWorkspace;
	}
	export interface CreateWorkspacePostBodyFormProperties {
	}
	export function CreateCreateWorkspacePostBodyFormGroup() {
		return new FormGroup<CreateWorkspacePostBodyFormProperties>({
		});

	}

	export interface CreateWorkspacePostBodyWorkspace {
		CreateWorkspacePostBodyWorkspaceCollections?: Array<CreateWorkspacePostBodyWorkspaceCollections>;
		description?: string | null;
		CreateWorkspacePostBodyWorkspaceEnvironments?: Array<CreateWorkspacePostBodyWorkspaceEnvironments>;
		CreateWorkspacePostBodyWorkspaceMocks?: Array<CreateWorkspacePostBodyWorkspaceMocks>;
		CreateWorkspacePostBodyWorkspaceMonitors?: Array<CreateWorkspacePostBodyWorkspaceMonitors>;
		name?: string | null;
		type?: string | null;
	}
	export interface CreateWorkspacePostBodyWorkspaceFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkspacePostBodyWorkspaceFormGroup() {
		return new FormGroup<CreateWorkspacePostBodyWorkspaceFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateWorkspacePostBodyWorkspaceCollections {
		id?: string | null;
		name?: string | null;
		uid?: string | null;
	}
	export interface CreateWorkspacePostBodyWorkspaceCollectionsFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		uid: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkspacePostBodyWorkspaceCollectionsFormGroup() {
		return new FormGroup<CreateWorkspacePostBodyWorkspaceCollectionsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateWorkspacePostBodyWorkspaceEnvironments {
		id?: string | null;
		name?: string | null;
		uid?: string | null;
	}
	export interface CreateWorkspacePostBodyWorkspaceEnvironmentsFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		uid: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkspacePostBodyWorkspaceEnvironmentsFormGroup() {
		return new FormGroup<CreateWorkspacePostBodyWorkspaceEnvironmentsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateWorkspacePostBodyWorkspaceMocks {
		id?: string | null;
	}
	export interface CreateWorkspacePostBodyWorkspaceMocksFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkspacePostBodyWorkspaceMocksFormGroup() {
		return new FormGroup<CreateWorkspacePostBodyWorkspaceMocksFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateWorkspacePostBodyWorkspaceMonitors {
		id?: string | null;
	}
	export interface CreateWorkspacePostBodyWorkspaceMonitorsFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkspacePostBodyWorkspaceMonitorsFormGroup() {
		return new FormGroup<CreateWorkspacePostBodyWorkspaceMonitorsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateWorkspaceReturn {
		workspace?: CreateWorkspaceReturnWorkspace;
	}
	export interface CreateWorkspaceReturnFormProperties {
	}
	export function CreateCreateWorkspaceReturnFormGroup() {
		return new FormGroup<CreateWorkspaceReturnFormProperties>({
		});

	}

	export interface CreateWorkspaceReturnWorkspace {
		id?: string | null;
		name?: string | null;
	}
	export interface CreateWorkspaceReturnWorkspaceFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkspaceReturnWorkspaceFormGroup() {
		return new FormGroup<CreateWorkspaceReturnWorkspaceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteWorkspaceReturn {
		workspace?: DeleteWorkspaceReturnWorkspace;
	}
	export interface DeleteWorkspaceReturnFormProperties {
	}
	export function CreateDeleteWorkspaceReturnFormGroup() {
		return new FormGroup<DeleteWorkspaceReturnFormProperties>({
		});

	}

	export interface DeleteWorkspaceReturnWorkspace {
		id?: string | null;
	}
	export interface DeleteWorkspaceReturnWorkspaceFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteWorkspaceReturnWorkspaceFormGroup() {
		return new FormGroup<DeleteWorkspaceReturnWorkspaceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SingleWorkspaceReturn {
		workspace?: SingleWorkspaceReturnWorkspace;
	}
	export interface SingleWorkspaceReturnFormProperties {
	}
	export function CreateSingleWorkspaceReturnFormGroup() {
		return new FormGroup<SingleWorkspaceReturnFormProperties>({
		});

	}

	export interface SingleWorkspaceReturnWorkspace {
		SingleWorkspaceReturnWorkspaceCollections?: Array<SingleWorkspaceReturnWorkspaceCollections>;
		description?: string | null;
		SingleWorkspaceReturnWorkspaceEnvironments?: Array<SingleWorkspaceReturnWorkspaceEnvironments>;
		id?: string | null;
		name?: string | null;
		type?: string | null;
	}
	export interface SingleWorkspaceReturnWorkspaceFormProperties {
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateSingleWorkspaceReturnWorkspaceFormGroup() {
		return new FormGroup<SingleWorkspaceReturnWorkspaceFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SingleWorkspaceReturnWorkspaceCollections {
		id?: string | null;
		name?: string | null;
		uid?: string | null;
	}
	export interface SingleWorkspaceReturnWorkspaceCollectionsFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		uid: FormControl<string | null | undefined>,
	}
	export function CreateSingleWorkspaceReturnWorkspaceCollectionsFormGroup() {
		return new FormGroup<SingleWorkspaceReturnWorkspaceCollectionsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SingleWorkspaceReturnWorkspaceEnvironments {
		id?: string | null;
		name?: string | null;
		uid?: string | null;
	}
	export interface SingleWorkspaceReturnWorkspaceEnvironmentsFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		uid: FormControl<string | null | undefined>,
	}
	export function CreateSingleWorkspaceReturnWorkspaceEnvironmentsFormGroup() {
		return new FormGroup<SingleWorkspaceReturnWorkspaceEnvironmentsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateWorkspacePutBody {
		workspace?: UpdateWorkspacePutBodyWorkspace;
	}
	export interface UpdateWorkspacePutBodyFormProperties {
	}
	export function CreateUpdateWorkspacePutBodyFormGroup() {
		return new FormGroup<UpdateWorkspacePutBodyFormProperties>({
		});

	}

	export interface UpdateWorkspacePutBodyWorkspace {
		UpdateWorkspacePutBodyWorkspaceCollections?: Array<UpdateWorkspacePutBodyWorkspaceCollections>;
		description?: string | null;
		UpdateWorkspacePutBodyWorkspaceEnvironments?: Array<UpdateWorkspacePutBodyWorkspaceEnvironments>;
		UpdateWorkspacePutBodyWorkspaceMocks?: Array<UpdateWorkspacePutBodyWorkspaceMocks>;
		UpdateWorkspacePutBodyWorkspaceMonitors?: Array<UpdateWorkspacePutBodyWorkspaceMonitors>;
		name?: string | null;
	}
	export interface UpdateWorkspacePutBodyWorkspaceFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkspacePutBodyWorkspaceFormGroup() {
		return new FormGroup<UpdateWorkspacePutBodyWorkspaceFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateWorkspacePutBodyWorkspaceCollections {
		id?: string | null;
		name?: string | null;
		uid?: string | null;
	}
	export interface UpdateWorkspacePutBodyWorkspaceCollectionsFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		uid: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkspacePutBodyWorkspaceCollectionsFormGroup() {
		return new FormGroup<UpdateWorkspacePutBodyWorkspaceCollectionsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateWorkspacePutBodyWorkspaceEnvironments {
		id?: string | null;
		name?: string | null;
		uid?: string | null;
	}
	export interface UpdateWorkspacePutBodyWorkspaceEnvironmentsFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		uid: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkspacePutBodyWorkspaceEnvironmentsFormGroup() {
		return new FormGroup<UpdateWorkspacePutBodyWorkspaceEnvironmentsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateWorkspacePutBodyWorkspaceMocks {
		id?: string | null;
	}
	export interface UpdateWorkspacePutBodyWorkspaceMocksFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkspacePutBodyWorkspaceMocksFormGroup() {
		return new FormGroup<UpdateWorkspacePutBodyWorkspaceMocksFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateWorkspacePutBodyWorkspaceMonitors {
		id?: string | null;
	}
	export interface UpdateWorkspacePutBodyWorkspaceMonitorsFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkspacePutBodyWorkspaceMonitorsFormGroup() {
		return new FormGroup<UpdateWorkspacePutBodyWorkspaceMonitorsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateWorkspaceReturn {
		workspace?: UpdateWorkspaceReturnWorkspace;
	}
	export interface UpdateWorkspaceReturnFormProperties {
	}
	export function CreateUpdateWorkspaceReturnFormGroup() {
		return new FormGroup<UpdateWorkspaceReturnFormProperties>({
		});

	}

	export interface UpdateWorkspaceReturnWorkspace {
		id?: string | null;
		name?: string | null;
	}
	export interface UpdateWorkspaceReturnWorkspaceFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkspaceReturnWorkspaceFormGroup() {
		return new FormGroup<UpdateWorkspaceReturnWorkspaceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

}

