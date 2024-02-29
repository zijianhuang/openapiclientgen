import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateDataIntegrationResponse {
		Arn?: string;
		Id?: string;
		Name?: string;
		Description?: string;
		KmsKey?: string;
		SourceURI?: string;
		ScheduleConfiguration?: ScheduleConfiguration;
		Tags?: TagMap;
		ClientToken?: string;
		FileConfiguration?: FileConfiguration;
		ObjectConfiguration?: ObjectConfiguration;
	}
	export interface CreateDataIntegrationResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		KmsKey: FormControl<string | null | undefined>,
		SourceURI: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataIntegrationResponseFormGroup() {
		return new FormGroup<CreateDataIntegrationResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			KmsKey: new FormControl<string | null | undefined>(undefined),
			SourceURI: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The name of the data and how often it should be pulled from the source. */
	export interface ScheduleConfiguration {
		FirstExecutionFrom?: string;
		Object?: string;

		/** Required */
		ScheduleExpression: string;
	}

	/** The name of the data and how often it should be pulled from the source. */
	export interface ScheduleConfigurationFormProperties {
		FirstExecutionFrom: FormControl<string | null | undefined>,
		Object: FormControl<string | null | undefined>,

		/** Required */
		ScheduleExpression: FormControl<string | null | undefined>,
	}
	export function CreateScheduleConfigurationFormGroup() {
		return new FormGroup<ScheduleConfigurationFormProperties>({
			FirstExecutionFrom: new FormControl<string | null | undefined>(undefined),
			Object: new FormControl<string | null | undefined>(undefined),
			ScheduleExpression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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


	/** The configuration for what files should be pulled from the source. */
	export interface FileConfiguration {

		/** Required */
		Folders: Array<string>;
		Filters?: FieldsMap;
	}

	/** The configuration for what files should be pulled from the source. */
	export interface FileConfigurationFormProperties {
	}
	export function CreateFileConfigurationFormGroup() {
		return new FormGroup<FileConfigurationFormProperties>({
		});

	}

	export interface FieldsMap {
	}
	export interface FieldsMapFormProperties {
	}
	export function CreateFieldsMapFormGroup() {
		return new FormGroup<FieldsMapFormProperties>({
		});

	}


	/** The configuration for what data should be pulled from the source. */
	export interface ObjectConfiguration {
	}

	/** The configuration for what data should be pulled from the source. */
	export interface ObjectConfigurationFormProperties {
	}
	export function CreateObjectConfigurationFormGroup() {
		return new FormGroup<ObjectConfigurationFormProperties>({
		});

	}

	export interface InternalServiceError {
	}
	export interface InternalServiceErrorFormProperties {
	}
	export function CreateInternalServiceErrorFormGroup() {
		return new FormGroup<InternalServiceErrorFormProperties>({
		});

	}

	export interface ResourceQuotaExceededException {
	}
	export interface ResourceQuotaExceededExceptionFormProperties {
	}
	export function CreateResourceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ResourceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface DuplicateResourceException {
	}
	export interface DuplicateResourceExceptionFormProperties {
	}
	export function CreateDuplicateResourceExceptionFormGroup() {
		return new FormGroup<DuplicateResourceExceptionFormProperties>({
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

	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
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

	export interface CreateEventIntegrationResponse {
		EventIntegrationArn?: string;
	}
	export interface CreateEventIntegrationResponseFormProperties {
		EventIntegrationArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateEventIntegrationResponseFormGroup() {
		return new FormGroup<CreateEventIntegrationResponseFormProperties>({
			EventIntegrationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteDataIntegrationResponse {
	}
	export interface DeleteDataIntegrationResponseFormProperties {
	}
	export function CreateDeleteDataIntegrationResponseFormGroup() {
		return new FormGroup<DeleteDataIntegrationResponseFormProperties>({
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

	export interface DeleteEventIntegrationResponse {
	}
	export interface DeleteEventIntegrationResponseFormProperties {
	}
	export function CreateDeleteEventIntegrationResponseFormGroup() {
		return new FormGroup<DeleteEventIntegrationResponseFormProperties>({
		});

	}

	export interface GetDataIntegrationResponse {
		Arn?: string;
		Id?: string;
		Name?: string;
		Description?: string;
		KmsKey?: string;
		SourceURI?: string;
		ScheduleConfiguration?: ScheduleConfiguration;
		Tags?: TagMap;
		FileConfiguration?: FileConfiguration;
		ObjectConfiguration?: ObjectConfiguration;
	}
	export interface GetDataIntegrationResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		KmsKey: FormControl<string | null | undefined>,
		SourceURI: FormControl<string | null | undefined>,
	}
	export function CreateGetDataIntegrationResponseFormGroup() {
		return new FormGroup<GetDataIntegrationResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			KmsKey: new FormControl<string | null | undefined>(undefined),
			SourceURI: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetEventIntegrationResponse {
		Name?: string;
		Description?: string;
		EventIntegrationArn?: string;
		EventBridgeBus?: string;
		EventFilter?: EventFilter;
		Tags?: TagMap;
	}
	export interface GetEventIntegrationResponseFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		EventIntegrationArn: FormControl<string | null | undefined>,
		EventBridgeBus: FormControl<string | null | undefined>,
	}
	export function CreateGetEventIntegrationResponseFormGroup() {
		return new FormGroup<GetEventIntegrationResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			EventIntegrationArn: new FormControl<string | null | undefined>(undefined),
			EventBridgeBus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The event filter. */
	export interface EventFilter {

		/** Required */
		Source: string;
	}

	/** The event filter. */
	export interface EventFilterFormProperties {

		/** Required */
		Source: FormControl<string | null | undefined>,
	}
	export function CreateEventFilterFormGroup() {
		return new FormGroup<EventFilterFormProperties>({
			Source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListDataIntegrationAssociationsResponse {
		DataIntegrationAssociations?: Array<DataIntegrationAssociationSummary>;
		NextToken?: string;
	}
	export interface ListDataIntegrationAssociationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDataIntegrationAssociationsResponseFormGroup() {
		return new FormGroup<ListDataIntegrationAssociationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about the DataIntegration association. */
	export interface DataIntegrationAssociationSummary {
		DataIntegrationAssociationArn?: string;
		DataIntegrationArn?: string;
		ClientId?: string;
	}

	/** Summary information about the DataIntegration association. */
	export interface DataIntegrationAssociationSummaryFormProperties {
		DataIntegrationAssociationArn: FormControl<string | null | undefined>,
		DataIntegrationArn: FormControl<string | null | undefined>,
		ClientId: FormControl<string | null | undefined>,
	}
	export function CreateDataIntegrationAssociationSummaryFormGroup() {
		return new FormGroup<DataIntegrationAssociationSummaryFormProperties>({
			DataIntegrationAssociationArn: new FormControl<string | null | undefined>(undefined),
			DataIntegrationArn: new FormControl<string | null | undefined>(undefined),
			ClientId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDataIntegrationsResponse {
		DataIntegrations?: Array<DataIntegrationSummary>;
		NextToken?: string;
	}
	export interface ListDataIntegrationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDataIntegrationsResponseFormGroup() {
		return new FormGroup<ListDataIntegrationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about the DataIntegration. */
	export interface DataIntegrationSummary {
		Arn?: string;
		Name?: string;
		SourceURI?: string;
	}

	/** Summary information about the DataIntegration. */
	export interface DataIntegrationSummaryFormProperties {
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		SourceURI: FormControl<string | null | undefined>,
	}
	export function CreateDataIntegrationSummaryFormGroup() {
		return new FormGroup<DataIntegrationSummaryFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			SourceURI: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEventIntegrationAssociationsResponse {
		EventIntegrationAssociations?: Array<EventIntegrationAssociation>;
		NextToken?: string;
	}
	export interface ListEventIntegrationAssociationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEventIntegrationAssociationsResponseFormGroup() {
		return new FormGroup<ListEventIntegrationAssociationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The event integration association. */
	export interface EventIntegrationAssociation {
		EventIntegrationAssociationArn?: string;
		EventIntegrationAssociationId?: string;
		EventIntegrationName?: string;
		ClientId?: string;
		EventBridgeRuleName?: string;
		ClientAssociationMetadata?: ClientAssociationMetadata;
	}

	/** The event integration association. */
	export interface EventIntegrationAssociationFormProperties {
		EventIntegrationAssociationArn: FormControl<string | null | undefined>,
		EventIntegrationAssociationId: FormControl<string | null | undefined>,
		EventIntegrationName: FormControl<string | null | undefined>,
		ClientId: FormControl<string | null | undefined>,
		EventBridgeRuleName: FormControl<string | null | undefined>,
	}
	export function CreateEventIntegrationAssociationFormGroup() {
		return new FormGroup<EventIntegrationAssociationFormProperties>({
			EventIntegrationAssociationArn: new FormControl<string | null | undefined>(undefined),
			EventIntegrationAssociationId: new FormControl<string | null | undefined>(undefined),
			EventIntegrationName: new FormControl<string | null | undefined>(undefined),
			ClientId: new FormControl<string | null | undefined>(undefined),
			EventBridgeRuleName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClientAssociationMetadata {
	}
	export interface ClientAssociationMetadataFormProperties {
	}
	export function CreateClientAssociationMetadataFormGroup() {
		return new FormGroup<ClientAssociationMetadataFormProperties>({
		});

	}

	export interface ListEventIntegrationsResponse {
		EventIntegrations?: Array<EventIntegration>;
		NextToken?: string;
	}
	export interface ListEventIntegrationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEventIntegrationsResponseFormGroup() {
		return new FormGroup<ListEventIntegrationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The event integration. */
	export interface EventIntegration {
		EventIntegrationArn?: string;
		Name?: string;
		Description?: string;
		EventFilter?: EventFilter;
		EventBridgeBus?: string;
		Tags?: TagMap;
	}

	/** The event integration. */
	export interface EventIntegrationFormProperties {
		EventIntegrationArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		EventBridgeBus: FormControl<string | null | undefined>,
	}
	export function CreateEventIntegrationFormGroup() {
		return new FormGroup<EventIntegrationFormProperties>({
			EventIntegrationArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			EventBridgeBus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UpdateDataIntegrationResponse {
	}
	export interface UpdateDataIntegrationResponseFormProperties {
	}
	export function CreateUpdateDataIntegrationResponseFormGroup() {
		return new FormGroup<UpdateDataIntegrationResponseFormProperties>({
		});

	}

	export interface UpdateEventIntegrationResponse {
	}
	export interface UpdateEventIntegrationResponseFormProperties {
	}
	export function CreateUpdateEventIntegrationResponseFormGroup() {
		return new FormGroup<UpdateEventIntegrationResponseFormProperties>({
		});

	}

	export interface CreateDataIntegrationRequest {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		KmsKey: string;

		/** Required */
		SourceURI: string;

		/** Required */
		ScheduleConfig: ScheduleConfiguration;
		Tags?: TagMap;
		ClientToken?: string;
		FileConfiguration?: FileConfiguration;
		ObjectConfiguration?: ObjectConfiguration;
	}
	export interface CreateDataIntegrationRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		KmsKey: FormControl<string | null | undefined>,

		/** Required */
		SourceURI: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataIntegrationRequestFormGroup() {
		return new FormGroup<CreateDataIntegrationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			KmsKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceURI: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateEventIntegrationRequest {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		EventFilter: EventFilter;

		/** Required */
		EventBridgeBus: string;
		ClientToken?: string;
		Tags?: TagMap;
	}
	export interface CreateEventIntegrationRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		EventBridgeBus: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateEventIntegrationRequestFormGroup() {
		return new FormGroup<CreateEventIntegrationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			EventBridgeBus: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteDataIntegrationRequest {
	}
	export interface DeleteDataIntegrationRequestFormProperties {
	}
	export function CreateDeleteDataIntegrationRequestFormGroup() {
		return new FormGroup<DeleteDataIntegrationRequestFormProperties>({
		});

	}

	export interface DeleteEventIntegrationRequest {
	}
	export interface DeleteEventIntegrationRequestFormProperties {
	}
	export function CreateDeleteEventIntegrationRequestFormGroup() {
		return new FormGroup<DeleteEventIntegrationRequestFormProperties>({
		});

	}

	export interface GetDataIntegrationRequest {
	}
	export interface GetDataIntegrationRequestFormProperties {
	}
	export function CreateGetDataIntegrationRequestFormGroup() {
		return new FormGroup<GetDataIntegrationRequestFormProperties>({
		});

	}

	export interface GetEventIntegrationRequest {
	}
	export interface GetEventIntegrationRequestFormProperties {
	}
	export function CreateGetEventIntegrationRequestFormGroup() {
		return new FormGroup<GetEventIntegrationRequestFormProperties>({
		});

	}

	export interface ListDataIntegrationAssociationsRequest {
	}
	export interface ListDataIntegrationAssociationsRequestFormProperties {
	}
	export function CreateListDataIntegrationAssociationsRequestFormGroup() {
		return new FormGroup<ListDataIntegrationAssociationsRequestFormProperties>({
		});

	}

	export interface ListDataIntegrationsRequest {
	}
	export interface ListDataIntegrationsRequestFormProperties {
	}
	export function CreateListDataIntegrationsRequestFormGroup() {
		return new FormGroup<ListDataIntegrationsRequestFormProperties>({
		});

	}

	export interface ListEventIntegrationAssociationsRequest {
	}
	export interface ListEventIntegrationAssociationsRequestFormProperties {
	}
	export function CreateListEventIntegrationAssociationsRequestFormGroup() {
		return new FormGroup<ListEventIntegrationAssociationsRequestFormProperties>({
		});

	}

	export interface ListEventIntegrationsRequest {
	}
	export interface ListEventIntegrationsRequestFormProperties {
	}
	export function CreateListEventIntegrationsRequestFormGroup() {
		return new FormGroup<ListEventIntegrationsRequestFormProperties>({
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

	export interface UpdateDataIntegrationRequest {
		Name?: string;
		Description?: string;
	}
	export interface UpdateDataIntegrationRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDataIntegrationRequestFormGroup() {
		return new FormGroup<UpdateDataIntegrationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateEventIntegrationRequest {
		Description?: string;
	}
	export interface UpdateEventIntegrationRequestFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEventIntegrationRequestFormGroup() {
		return new FormGroup<UpdateEventIntegrationRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates and persists a DataIntegration resource.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <code>CreateDataIntegration</code> API.</p> </note>
		 * Post dataIntegrations
		 * @return {CreateDataIntegrationResponse} Success
		 */
		CreateDataIntegration(requestBody: CreateDataIntegrationPostBody): Observable<CreateDataIntegrationResponse> {
			return this.http.post<CreateDataIntegrationResponse>(this.baseUri + 'dataIntegrations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a paginated list of DataIntegrations in the account.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
		 * Get dataIntegrations
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 *     Min length: 1    Max length: 1000
		 * @param {number} maxResults The maximum number of results to return per page.
		 *     Minimum: 1    Maximum: 50
		 * @return {ListDataIntegrationsResponse} Success
		 */
		ListDataIntegrations(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListDataIntegrationsResponse> {
			return this.http.get<ListDataIntegrationsResponse>(this.baseUri + 'dataIntegrations?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates an EventIntegration, given a specified name, description, and a reference to an Amazon EventBridge bus in your account and a partner event source that pushes events to that bus. No objects are created in the your account, only metadata that is persisted on the EventIntegration control plane.
		 * Post eventIntegrations
		 * @return {CreateEventIntegrationResponse} Success
		 */
		CreateEventIntegration(requestBody: CreateEventIntegrationPostBody): Observable<CreateEventIntegrationResponse> {
			return this.http.post<CreateEventIntegrationResponse>(this.baseUri + 'eventIntegrations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a paginated list of event integrations in the account.
		 * Get eventIntegrations
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 *     Min length: 1    Max length: 1000
		 * @param {number} maxResults The maximum number of results to return per page.
		 *     Minimum: 1    Maximum: 50
		 * @return {ListEventIntegrationsResponse} Success
		 */
		ListEventIntegrations(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListEventIntegrationsResponse> {
			return this.http.get<ListEventIntegrationsResponse>(this.baseUri + 'eventIntegrations?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Deletes the DataIntegration. Only DataIntegrations that don't have any DataIntegrationAssociations can be deleted. Deleting a DataIntegration also deletes the underlying Amazon AppFlow flow and service linked role. </p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
		 * Delete dataIntegrations/{Identifier}
		 * @param {string} Identifier A unique identifier for the DataIntegration.
		 *     Min length: 1    Max length: 255
		 * @return {DeleteDataIntegrationResponse} Success
		 */
		DeleteDataIntegration(Identifier: string): Observable<DeleteDataIntegrationResponse> {
			return this.http.delete<DeleteDataIntegrationResponse>(this.baseUri + 'dataIntegrations/' + (Identifier == null ? '' : encodeURIComponent(Identifier)), {});
		}

		/**
		 * <p>Returns information about the DataIntegration.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
		 * Get dataIntegrations/{Identifier}
		 * @param {string} Identifier A unique identifier.
		 *     Min length: 1    Max length: 255
		 * @return {GetDataIntegrationResponse} Success
		 */
		GetDataIntegration(Identifier: string): Observable<GetDataIntegrationResponse> {
			return this.http.get<GetDataIntegrationResponse>(this.baseUri + 'dataIntegrations/' + (Identifier == null ? '' : encodeURIComponent(Identifier)), {});
		}

		/**
		 * <p>Updates the description of a DataIntegration.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
		 * Patch dataIntegrations/{Identifier}
		 * @param {string} Identifier A unique identifier for the DataIntegration.
		 *     Min length: 1    Max length: 255
		 * @return {UpdateDataIntegrationResponse} Success
		 */
		UpdateDataIntegration(Identifier: string, requestBody: UpdateDataIntegrationPatchBody): Observable<UpdateDataIntegrationResponse> {
			return this.http.patch<UpdateDataIntegrationResponse>(this.baseUri + 'dataIntegrations/' + (Identifier == null ? '' : encodeURIComponent(Identifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified existing event integration. If the event integration is associated with clients, the request is rejected.
		 * Delete eventIntegrations/{Name}
		 * @param {string} Name The name of the event integration.
		 *     Min length: 1    Max length: 255
		 * @return {DeleteEventIntegrationResponse} Success
		 */
		DeleteEventIntegration(Name: string): Observable<DeleteEventIntegrationResponse> {
			return this.http.delete<DeleteEventIntegrationResponse>(this.baseUri + 'eventIntegrations/' + (Name == null ? '' : encodeURIComponent(Name)), {});
		}

		/**
		 * Returns information about the event integration.
		 * Get eventIntegrations/{Name}
		 * @param {string} Name The name of the event integration. 
		 *     Min length: 1    Max length: 255
		 * @return {GetEventIntegrationResponse} Success
		 */
		GetEventIntegration(Name: string): Observable<GetEventIntegrationResponse> {
			return this.http.get<GetEventIntegrationResponse>(this.baseUri + 'eventIntegrations/' + (Name == null ? '' : encodeURIComponent(Name)), {});
		}

		/**
		 * Updates the description of an event integration.
		 * Patch eventIntegrations/{Name}
		 * @param {string} Name The name of the event integration.
		 *     Min length: 1    Max length: 255
		 * @return {UpdateEventIntegrationResponse} Success
		 */
		UpdateEventIntegration(Name: string, requestBody: UpdateEventIntegrationPatchBody): Observable<UpdateEventIntegrationResponse> {
			return this.http.patch<UpdateEventIntegrationResponse>(this.baseUri + 'eventIntegrations/' + (Name == null ? '' : encodeURIComponent(Name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a paginated list of DataIntegration associations in the account.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
		 * Get dataIntegrations/{Identifier}/associations
		 * @param {string} Identifier A unique identifier for the DataIntegration.
		 *     Min length: 1    Max length: 255
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 *     Min length: 1    Max length: 1000
		 * @param {number} maxResults The maximum number of results to return per page.
		 *     Minimum: 1    Maximum: 50
		 * @return {ListDataIntegrationAssociationsResponse} Success
		 */
		ListDataIntegrationAssociations(Identifier: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListDataIntegrationAssociationsResponse> {
			return this.http.get<ListDataIntegrationAssociationsResponse>(this.baseUri + 'dataIntegrations/' + (Identifier == null ? '' : encodeURIComponent(Identifier)) + '/associations&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Returns a paginated list of event integration associations in the account.
		 * Get eventIntegrations/{Name}/associations
		 * @param {string} Name The name of the event integration. 
		 *     Min length: 1    Max length: 255
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 *     Min length: 1    Max length: 1000
		 * @param {number} maxResults The maximum number of results to return per page.
		 *     Minimum: 1    Maximum: 50
		 * @return {ListEventIntegrationAssociationsResponse} Success
		 */
		ListEventIntegrationAssociations(Name: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListEventIntegrationAssociationsResponse> {
			return this.http.get<ListEventIntegrationAssociationsResponse>(this.baseUri + 'eventIntegrations/' + (Name == null ? '' : encodeURIComponent(Name)) + '/associations&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists the tags for the specified resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource. 
		 *     Min length: 1    Max length: 2048
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds the specified tags to the specified resource.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 *     Min length: 1    Max length: 2048
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified tags from the specified resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 *     Min length: 1    Max length: 2048
		 * @param {Array<string>} tagKeys The tag keys.
		 *     Minimum items: 1    Maximum items: 200
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface CreateDataIntegrationPostBody {

		/**
		 * The name of the DataIntegration.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		Name: string;

		/**
		 * A description of the DataIntegration.
		 * Min length: 1
		 * Max length: 1000
		 */
		Description?: string | null;

		/**
		 * The KMS key for the DataIntegration.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		KmsKey: string;

		/**
		 * The URI of the data source.
		 * Required
		 * Min length: 1
		 * Max length: 1000
		 */
		SourceURI: string;

		/**
		 * The name of the data and how often it should be pulled from the source.
		 * Required
		 */
		ScheduleConfig: CreateDataIntegrationPostBodyScheduleConfig;

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags?: {[id: string]: string };

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Min length: 1
		 * Max length: 2048
		 */
		ClientToken?: string | null;

		/** The configuration for what files should be pulled from the source. */
		FileConfiguration?: CreateDataIntegrationPostBodyFileConfiguration;

		/** The configuration for what data should be pulled from the source. */
		ObjectConfiguration?: {[id: string]: FieldsMap };
	}
	export interface CreateDataIntegrationPostBodyFormProperties {

		/**
		 * The name of the DataIntegration.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * A description of the DataIntegration.
		 * Min length: 1
		 * Max length: 1000
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The KMS key for the DataIntegration.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		KmsKey: FormControl<string | null | undefined>,

		/**
		 * The URI of the data source.
		 * Required
		 * Min length: 1
		 * Max length: 1000
		 */
		SourceURI: FormControl<string | null | undefined>,

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Min length: 1
		 * Max length: 2048
		 */
		ClientToken: FormControl<string | null | undefined>,

		/** The configuration for what data should be pulled from the source. */
		ObjectConfiguration: FormControl<{[id: string]: FieldsMap } | null | undefined>,
	}
	export function CreateCreateDataIntegrationPostBodyFormGroup() {
		return new FormGroup<CreateDataIntegrationPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z0-9\/\._\-]+$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('.*')]),
			KmsKey: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('.*\S.*')]),
			SourceURI: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('^(\w+\:\/\/[\w.-]+[\w/!@#+=.-]+$)|(\w+\:\/\/[\w.-]+[\w/!@#+=.-]+[\w/!@#+=.-]+[\w/!@#+=.,-]+$)')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('.*')]),
			ObjectConfiguration: new FormControl<{[id: string]: FieldsMap } | null | undefined>(undefined),
		});

	}

	export interface CreateDataIntegrationPostBodyScheduleConfig {
		FirstExecutionFrom?: string;
		Object?: string;
		ScheduleExpression?: string;
	}
	export interface CreateDataIntegrationPostBodyScheduleConfigFormProperties {
		FirstExecutionFrom: FormControl<string | null | undefined>,
		Object: FormControl<string | null | undefined>,
		ScheduleExpression: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataIntegrationPostBodyScheduleConfigFormGroup() {
		return new FormGroup<CreateDataIntegrationPostBodyScheduleConfigFormProperties>({
			FirstExecutionFrom: new FormControl<string | null | undefined>(undefined),
			Object: new FormControl<string | null | undefined>(undefined),
			ScheduleExpression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDataIntegrationPostBodyFileConfiguration {
		Folders?: Array<string>;
		Filters?: FieldsMap;
	}
	export interface CreateDataIntegrationPostBodyFileConfigurationFormProperties {
	}
	export function CreateCreateDataIntegrationPostBodyFileConfigurationFormGroup() {
		return new FormGroup<CreateDataIntegrationPostBodyFileConfigurationFormProperties>({
		});

	}

	export interface CreateEventIntegrationPostBody {

		/**
		 * The name of the event integration.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		Name: string;

		/**
		 * The description of the event integration.
		 * Min length: 1
		 * Max length: 1000
		 */
		Description?: string | null;

		/**
		 * The event filter.
		 * Required
		 */
		EventFilter: CreateEventIntegrationPostBodyEventFilter;

		/**
		 * The EventBridge bus.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		EventBridgeBus: string;

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Min length: 1
		 * Max length: 2048
		 */
		ClientToken?: string | null;

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags?: {[id: string]: string };
	}
	export interface CreateEventIntegrationPostBodyFormProperties {

		/**
		 * The name of the event integration.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the event integration.
		 * Min length: 1
		 * Max length: 1000
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The EventBridge bus.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		EventBridgeBus: FormControl<string | null | undefined>,

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Min length: 1
		 * Max length: 2048
		 */
		ClientToken: FormControl<string | null | undefined>,

		/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateEventIntegrationPostBodyFormGroup() {
		return new FormGroup<CreateEventIntegrationPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z0-9\/\._\-]+$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('.*')]),
			EventBridgeBus: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z0-9\/\._\-]+$')]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('.*')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateEventIntegrationPostBodyEventFilter {
		Source?: string;
	}
	export interface CreateEventIntegrationPostBodyEventFilterFormProperties {
		Source: FormControl<string | null | undefined>,
	}
	export function CreateCreateEventIntegrationPostBodyEventFilterFormGroup() {
		return new FormGroup<CreateEventIntegrationPostBodyEventFilterFormProperties>({
			Source: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDataIntegrationPatchBody {

		/**
		 * The name of the DataIntegration.
		 * Min length: 1
		 * Max length: 255
		 */
		Name?: string | null;

		/**
		 * A description of the DataIntegration.
		 * Min length: 1
		 * Max length: 1000
		 */
		Description?: string | null;
	}
	export interface UpdateDataIntegrationPatchBodyFormProperties {

		/**
		 * The name of the DataIntegration.
		 * Min length: 1
		 * Max length: 255
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * A description of the DataIntegration.
		 * Min length: 1
		 * Max length: 1000
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDataIntegrationPatchBodyFormGroup() {
		return new FormGroup<UpdateDataIntegrationPatchBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z0-9\/\._\-]+$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('.*')]),
		});

	}

	export interface UpdateEventIntegrationPatchBody {

		/**
		 * The description of the event inegration.
		 * Min length: 1
		 * Max length: 1000
		 */
		Description?: string | null;
	}
	export interface UpdateEventIntegrationPatchBodyFormProperties {

		/**
		 * The description of the event inegration.
		 * Min length: 1
		 * Max length: 1000
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEventIntegrationPatchBodyFormGroup() {
		return new FormGroup<UpdateEventIntegrationPatchBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('.*')]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
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

