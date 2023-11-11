import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AssociateEntityToThingResponse {
	}

	export interface AssociateEntityToThingRequest {
		thingName: string;
		entityId: string;
		namespaceVersion?: number | null;
	}

	export interface InvalidRequestException {
	}

	export interface ResourceNotFoundException {
	}

	export interface InternalFailureException {
	}

	export interface ThrottlingException {
	}

	export interface CreateFlowTemplateResponse {

		/** An object that contains summary information about a workflow. */
		summary?: FlowTemplateSummary | null;
	}


	/** An object that contains summary information about a workflow. */
	export interface FlowTemplateSummary {
		id?: string | null;
		arn?: string | null;
		revisionNumber?: number | null;
		createdAt?: Date | null;
	}

	export interface CreateFlowTemplateRequest {

		/**
		 * A document that defines an entity.
		 * Required
		 */
		definition: DefinitionDocument;
		compatibleNamespaceVersion?: number | null;
	}


	/** A document that defines an entity.  */
	export interface DefinitionDocument {
		language: DefinitionDocumentLanguage;
		text: string;
	}

	export enum DefinitionDocumentLanguage { GRAPHQL = 0 }

	export interface ResourceAlreadyExistsException {
	}

	export interface LimitExceededException {
	}

	export interface CreateSystemInstanceResponse {

		/** An object that contains summary information about a system instance. */
		summary?: SystemInstanceSummary | null;
	}


	/** An object that contains summary information about a system instance. */
	export interface SystemInstanceSummary {
		id?: string | null;
		arn?: string | null;
		status?: SystemInstanceSummaryStatus | null;
		target?: SystemInstanceSummaryTarget | null;
		greengrassGroupName?: string | null;
		createdAt?: Date | null;
		updatedAt?: Date | null;
		greengrassGroupId?: string | null;
		greengrassGroupVersionId?: string | null;
	}

	export enum SystemInstanceSummaryStatus { NOT_DEPLOYED = 0, BOOTSTRAP = 1, DEPLOY_IN_PROGRESS = 2, DEPLOYED_IN_TARGET = 3, UNDEPLOY_IN_PROGRESS = 4, FAILED = 5, PENDING_DELETE = 6, DELETED_IN_TARGET = 7 }

	export enum SystemInstanceSummaryTarget { GREENGRASS = 0, CLOUD = 1 }

	export interface CreateSystemInstanceRequest {
		tags?: Array<Tag> | null;

		/**
		 * A document that defines an entity.
		 * Required
		 */
		definition: DefinitionDocument;
		target: SystemInstanceSummaryTarget;
		greengrassGroupName?: string | null;
		s3BucketName?: string | null;

		/** An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics. */
		metricsConfiguration?: MetricsConfiguration | null;
		flowActionsRoleArn?: string | null;
	}


	/** Metadata assigned to an AWS IoT Things Graph resource consisting of a key-value pair. */
	export interface Tag {
		key: string;
		value: string;
	}


	/** An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics. */
	export interface MetricsConfiguration {
		cloudMetricEnabled?: boolean | null;
		metricRuleRoleArn?: string | null;
	}

	export interface CreateSystemTemplateResponse {

		/** An object that contains information about a system. */
		summary?: SystemTemplateSummary | null;
	}


	/** An object that contains information about a system. */
	export interface SystemTemplateSummary {
		id?: string | null;
		arn?: string | null;
		revisionNumber?: number | null;
		createdAt?: Date | null;
	}

	export interface CreateSystemTemplateRequest {

		/**
		 * A document that defines an entity.
		 * Required
		 */
		definition: DefinitionDocument;
		compatibleNamespaceVersion?: number | null;
	}

	export interface DeleteFlowTemplateResponse {
	}

	export interface DeleteFlowTemplateRequest {
		id: string;
	}

	export interface ResourceInUseException {
	}

	export interface DeleteNamespaceResponse {
		namespaceArn?: string | null;
		namespaceName?: string | null;
	}

	export interface DeleteNamespaceRequest {
	}

	export interface DeleteSystemInstanceResponse {
	}

	export interface DeleteSystemInstanceRequest {
		id?: string | null;
	}

	export interface DeleteSystemTemplateResponse {
	}

	export interface DeleteSystemTemplateRequest {
		id: string;
	}

	export interface DeploySystemInstanceResponse {

		/**
		 * An object that contains summary information about a system instance.
		 * Required
		 */
		summary: SystemInstanceSummary;
		greengrassDeploymentId?: string | null;
	}

	export interface DeploySystemInstanceRequest {
		id?: string | null;
	}

	export interface DeprecateFlowTemplateResponse {
	}

	export interface DeprecateFlowTemplateRequest {
		id: string;
	}

	export interface DeprecateSystemTemplateResponse {
	}

	export interface DeprecateSystemTemplateRequest {
		id: string;
	}

	export interface DescribeNamespaceResponse {
		namespaceArn?: string | null;
		namespaceName?: string | null;
		trackingNamespaceName?: string | null;
		trackingNamespaceVersion?: number | null;
		namespaceVersion?: number | null;
	}

	export interface DescribeNamespaceRequest {
		namespaceName?: string | null;
	}

	export interface DissociateEntityFromThingResponse {
	}

	export interface DissociateEntityFromThingRequest {
		thingName: string;
		entityType: DissociateEntityFromThingRequestEntityType;
	}

	export enum DissociateEntityFromThingRequestEntityType { DEVICE = 0, SERVICE = 1, DEVICE_MODEL = 2, CAPABILITY = 3, STATE = 4, ACTION = 5, EVENT = 6, PROPERTY = 7, MAPPING = 8, ENUM = 9 }

	export interface GetEntitiesResponse {
		descriptions?: Array<EntityDescription> | null;
	}


	/** Describes the properties of an entity. */
	export interface EntityDescription {
		id?: string | null;
		arn?: string | null;
		type?: DissociateEntityFromThingRequestEntityType | null;
		createdAt?: Date | null;

		/** A document that defines an entity. */
		definition?: DefinitionDocument | null;
	}

	export interface GetEntitiesRequest {
		ids: Array<string>;
		namespaceVersion?: number | null;
	}

	export interface GetFlowTemplateResponse {

		/** An object that contains a workflow's definition and summary information. */
		description?: FlowTemplateDescription | null;
	}


	/** An object that contains a workflow's definition and summary information. */
	export interface FlowTemplateDescription {

		/** An object that contains summary information about a workflow. */
		summary?: FlowTemplateSummary | null;

		/** A document that defines an entity. */
		definition?: DefinitionDocument | null;
		validatedNamespaceVersion?: number | null;
	}

	export interface GetFlowTemplateRequest {
		id: string;
		revisionNumber?: number | null;
	}

	export interface GetFlowTemplateRevisionsResponse {
		summaries?: Array<FlowTemplateSummary> | null;
		nextToken?: string | null;
	}

	export interface GetFlowTemplateRevisionsRequest {
		id: string;
		nextToken?: string | null;
		maxResults?: number | null;
	}

	export interface GetNamespaceDeletionStatusResponse {
		namespaceArn?: string | null;
		namespaceName?: string | null;
		status?: GetNamespaceDeletionStatusResponseStatus | null;
		errorCode?: GetNamespaceDeletionStatusResponseErrorCode | null;
		errorMessage?: string | null;
	}

	export enum GetNamespaceDeletionStatusResponseStatus { IN_PROGRESS = 0, SUCCEEDED = 1, FAILED = 2 }

	export enum GetNamespaceDeletionStatusResponseErrorCode { VALIDATION_FAILED = 0 }

	export interface GetNamespaceDeletionStatusRequest {
	}

	export interface GetSystemInstanceResponse {

		/** An object that contains a system instance definition and summary information. */
		description?: SystemInstanceDescription | null;
	}


	/** An object that contains a system instance definition and summary information. */
	export interface SystemInstanceDescription {

		/** An object that contains summary information about a system instance. */
		summary?: SystemInstanceSummary | null;

		/** A document that defines an entity. */
		definition?: DefinitionDocument | null;
		s3BucketName?: string | null;

		/** An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics. */
		metricsConfiguration?: MetricsConfiguration | null;
		validatedNamespaceVersion?: number | null;
		validatedDependencyRevisions?: Array<DependencyRevision> | null;
		flowActionsRoleArn?: string | null;
	}


	/** An object that contains the ID and revision number of a workflow or system that is part of a deployment. */
	export interface DependencyRevision {
		id?: string | null;
		revisionNumber?: number | null;
	}

	export interface GetSystemInstanceRequest {
		id: string;
	}

	export interface GetSystemTemplateResponse {

		/** An object that contains a system's definition document and summary information. */
		description?: SystemTemplateDescription | null;
	}


	/** An object that contains a system's definition document and summary information. */
	export interface SystemTemplateDescription {

		/** An object that contains information about a system. */
		summary?: SystemTemplateSummary | null;

		/** A document that defines an entity. */
		definition?: DefinitionDocument | null;
		validatedNamespaceVersion?: number | null;
	}

	export interface GetSystemTemplateRequest {
		id: string;
		revisionNumber?: number | null;
	}

	export interface GetSystemTemplateRevisionsResponse {
		summaries?: Array<SystemTemplateSummary> | null;
		nextToken?: string | null;
	}

	export interface GetSystemTemplateRevisionsRequest {
		id: string;
		nextToken?: string | null;
		maxResults?: number | null;
	}

	export interface GetUploadStatusResponse {
		uploadId: string;
		uploadStatus: GetNamespaceDeletionStatusResponseStatus;
		namespaceArn?: string | null;
		namespaceName?: string | null;
		namespaceVersion?: number | null;
		failureReason?: Array<string> | null;
		createdDate: Date;
	}

	export interface GetUploadStatusRequest {
		uploadId: string;
	}

	export interface ListFlowExecutionMessagesResponse {
		messages?: Array<FlowExecutionMessage> | null;
		nextToken?: string | null;
	}


	/** An object that contains information about a flow event. */
	export interface FlowExecutionMessage {
		messageId?: string | null;
		eventType?: FlowExecutionMessageEventType | null;
		timestamp?: Date | null;
		payload?: string | null;
	}

	export enum FlowExecutionMessageEventType { EXECUTION_STARTED = 0, EXECUTION_FAILED = 1, EXECUTION_ABORTED = 2, EXECUTION_SUCCEEDED = 3, STEP_STARTED = 4, STEP_FAILED = 5, STEP_SUCCEEDED = 6, ACTIVITY_SCHEDULED = 7, ACTIVITY_STARTED = 8, ACTIVITY_FAILED = 9, ACTIVITY_SUCCEEDED = 10, START_FLOW_EXECUTION_TASK = 11, SCHEDULE_NEXT_READY_STEPS_TASK = 12, THING_ACTION_TASK = 13, THING_ACTION_TASK_FAILED = 14, THING_ACTION_TASK_SUCCEEDED = 15, ACKNOWLEDGE_TASK_MESSAGE = 16 }

	export interface ListFlowExecutionMessagesRequest {
		flowExecutionId: string;
		nextToken?: string | null;
		maxResults?: number | null;
	}

	export interface ListTagsForResourceResponse {
		tags?: Array<Tag> | null;
		nextToken?: string | null;
	}

	export interface ListTagsForResourceRequest {
		maxResults?: number | null;
		resourceArn: string;
		nextToken?: string | null;
	}

	export interface SearchEntitiesResponse {
		descriptions?: Array<EntityDescription> | null;
		nextToken?: string | null;
	}

	export interface SearchEntitiesRequest {
		entityTypes: Array<EntityType>;
		filters?: Array<EntityFilter> | null;
		nextToken?: string | null;
		maxResults?: number | null;
		namespaceVersion?: number | null;
	}

	export enum EntityType { DEVICE = 0, SERVICE = 1, DEVICE_MODEL = 2, CAPABILITY = 3, STATE = 4, ACTION = 5, EVENT = 6, PROPERTY = 7, MAPPING = 8, ENUM = 9 }


	/** An object that filters an entity search. Multiple filters function as OR criteria in the search. For example a search that includes a <code>NAMESPACE</code> and a <code>REFERENCED_ENTITY_ID</code> filter searches for entities in the specified namespace that use the entity specified by the value of <code>REFERENCED_ENTITY_ID</code>. */
	export interface EntityFilter {
		name?: EntityFilterName | null;
		value?: Array<string> | null;
	}

	export enum EntityFilterName { NAME = 0, NAMESPACE = 1, SEMANTIC_TYPE_PATH = 2, REFERENCED_ENTITY_ID = 3 }

	export interface SearchFlowExecutionsResponse {
		summaries?: Array<FlowExecutionSummary> | null;
		nextToken?: string | null;
	}


	/** An object that contains summary information about a flow execution. */
	export interface FlowExecutionSummary {
		flowExecutionId?: string | null;
		status?: FlowExecutionSummaryStatus | null;
		systemInstanceId?: string | null;
		flowTemplateId?: string | null;
		createdAt?: Date | null;
		updatedAt?: Date | null;
	}

	export enum FlowExecutionSummaryStatus { RUNNING = 0, ABORTED = 1, SUCCEEDED = 2, FAILED = 3 }

	export interface SearchFlowExecutionsRequest {
		systemInstanceId: string;
		flowExecutionId?: string | null;
		startTime?: Date | null;
		endTime?: Date | null;
		nextToken?: string | null;
		maxResults?: number | null;
	}

	export interface SearchFlowTemplatesResponse {
		summaries?: Array<FlowTemplateSummary> | null;
		nextToken?: string | null;
	}

	export interface SearchFlowTemplatesRequest {
		filters?: Array<FlowTemplateFilter> | null;
		nextToken?: string | null;
		maxResults?: number | null;
	}


	/** An object that filters a workflow search. */
	export interface FlowTemplateFilter {
		name: FlowTemplateFilterName;
		value: Array<string>;
	}

	export enum FlowTemplateFilterName { DEVICE_MODEL_ID = 0 }

	export interface SearchSystemInstancesResponse {
		summaries?: Array<SystemInstanceSummary> | null;
		nextToken?: string | null;
	}

	export interface SearchSystemInstancesRequest {
		filters?: Array<SystemInstanceFilter> | null;
		nextToken?: string | null;
		maxResults?: number | null;
	}


	/** An object that filters a system instance search. Multiple filters function as OR criteria in the search. For example a search that includes a GREENGRASS_GROUP_NAME and a STATUS filter searches for system instances in the specified Greengrass group that have the specified status. */
	export interface SystemInstanceFilter {
		name?: SystemInstanceFilterName | null;
		value?: Array<string> | null;
	}

	export enum SystemInstanceFilterName { SYSTEM_TEMPLATE_ID = 0, STATUS = 1, GREENGRASS_GROUP_NAME = 2 }

	export interface SearchSystemTemplatesResponse {
		summaries?: Array<SystemTemplateSummary> | null;
		nextToken?: string | null;
	}

	export interface SearchSystemTemplatesRequest {
		filters?: Array<SystemTemplateFilter> | null;
		nextToken?: string | null;
		maxResults?: number | null;
	}


	/** An object that filters a system search. */
	export interface SystemTemplateFilter {
		name: SystemTemplateFilterName;
		value: Array<string>;
	}

	export enum SystemTemplateFilterName { FLOW_TEMPLATE_ID = 0 }

	export interface SearchThingsResponse {
		things?: Array<Thing> | null;
		nextToken?: string | null;
	}


	/** An AWS IoT thing. */
	export interface Thing {
		thingArn?: string | null;
		thingName?: string | null;
	}

	export interface SearchThingsRequest {
		entityId: string;
		nextToken?: string | null;
		maxResults?: number | null;
		namespaceVersion?: number | null;
	}

	export interface TagResourceResponse {
	}

	export interface TagResourceRequest {
		resourceArn: string;
		tags: Array<Tag>;
	}

	export interface UndeploySystemInstanceResponse {

		/** An object that contains summary information about a system instance. */
		summary?: SystemInstanceSummary | null;
	}

	export interface UndeploySystemInstanceRequest {
		id?: string | null;
	}

	export interface UntagResourceResponse {
	}

	export interface UntagResourceRequest {
		resourceArn: string;
		tagKeys: Array<string>;
	}

	export interface UpdateFlowTemplateResponse {

		/** An object that contains summary information about a workflow. */
		summary?: FlowTemplateSummary | null;
	}

	export interface UpdateFlowTemplateRequest {
		id: string;

		/**
		 * A document that defines an entity.
		 * Required
		 */
		definition: DefinitionDocument;
		compatibleNamespaceVersion?: number | null;
	}

	export interface UpdateSystemTemplateResponse {

		/** An object that contains information about a system. */
		summary?: SystemTemplateSummary | null;
	}

	export interface UpdateSystemTemplateRequest {
		id: string;

		/**
		 * A document that defines an entity.
		 * Required
		 */
		definition: DefinitionDocument;
		compatibleNamespaceVersion?: number | null;
	}

	export interface UploadEntityDefinitionsResponse {
		uploadId: string;
	}

	export interface UploadEntityDefinitionsRequest {

		/** A document that defines an entity. */
		document?: DefinitionDocument | null;
		syncWithPublicNamespace?: boolean | null;
		deprecateExistingEntities?: boolean | null;
	}

	export enum DeploymentTarget { GREENGRASS = 0, CLOUD = 1 }

	export enum DefinitionLanguage { GRAPHQL = 0 }

	export enum FlowExecutionEventType { EXECUTION_STARTED = 0, EXECUTION_FAILED = 1, EXECUTION_ABORTED = 2, EXECUTION_SUCCEEDED = 3, STEP_STARTED = 4, STEP_FAILED = 5, STEP_SUCCEEDED = 6, ACTIVITY_SCHEDULED = 7, ACTIVITY_STARTED = 8, ACTIVITY_FAILED = 9, ACTIVITY_SUCCEEDED = 10, START_FLOW_EXECUTION_TASK = 11, SCHEDULE_NEXT_READY_STEPS_TASK = 12, THING_ACTION_TASK = 13, THING_ACTION_TASK_FAILED = 14, THING_ACTION_TASK_SUCCEEDED = 15, ACKNOWLEDGE_TASK_MESSAGE = 16 }

	export enum FlowExecutionStatus { RUNNING = 0, ABORTED = 1, SUCCEEDED = 2, FAILED = 3 }

	export enum NamespaceDeletionStatus { IN_PROGRESS = 0, SUCCEEDED = 1, FAILED = 2 }

	export enum NamespaceDeletionStatusErrorCodes { VALIDATION_FAILED = 0 }

	export enum UploadStatus { IN_PROGRESS = 0, SUCCEEDED = 1, FAILED = 2 }

	export enum SystemInstanceDeploymentStatus { NOT_DEPLOYED = 0, BOOTSTRAP = 1, DEPLOY_IN_PROGRESS = 2, DEPLOYED_IN_TARGET = 3, UNDEPLOY_IN_PROGRESS = 4, FAILED = 5, PENDING_DELETE = 6, DELETED_IN_TARGET = 7 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Associates a device with a concrete thing that is in the user's registry.</p> <p>A thing can be associated with only one device at a time. If you associate a thing with a new device id, its previous association will be removed.</p>
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.AssociateEntityToThing
		 * @return {AssociateEntityToThingResponse} Success
		 */
		AssociateEntityToThing(requestBody: AssociateEntityToThingRequest): Observable<AssociateEntityToThingResponse> {
			return this.http.post<AssociateEntityToThingResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.AssociateEntityToThing', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a workflow template. Workflows can be created only in the user's namespace. (The public namespace contains only entities.) The workflow can contain only entities in the specified namespace. The workflow is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request.
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.CreateFlowTemplate
		 * @return {CreateFlowTemplateResponse} Success
		 */
		CreateFlowTemplate(requestBody: CreateFlowTemplateRequest): Observable<CreateFlowTemplateResponse> {
			return this.http.post<CreateFlowTemplateResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.CreateFlowTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a system instance. </p> <p>This action validates the system instance, prepares the deployment-related resources. For Greengrass deployments, it updates the Greengrass group that is specified by the <code>greengrassGroupName</code> parameter. It also adds a file to the S3 bucket specified by the <code>s3BucketName</code> parameter. You need to call <code>DeploySystemInstance</code> after running this action.</p> <p>For Greengrass deployments, since this action modifies and adds resources to a Greengrass group and an S3 bucket on the caller's behalf, the calling identity must have write permissions to both the specified Greengrass group and S3 bucket. Otherwise, the call will fail with an authorization error.</p> <p>For cloud deployments, this action requires a <code>flowActionsRoleArn</code> value. This is an IAM role that has permissions to access AWS services, such as AWS Lambda and AWS IoT, that the flow uses when it executes.</p> <p>If the definition document doesn't specify a version of the user's namespace, the latest version will be used by default.</p>
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemInstance
		 * @return {CreateSystemInstanceResponse} Success
		 */
		CreateSystemInstance(requestBody: CreateSystemInstanceRequest): Observable<CreateSystemInstanceResponse> {
			return this.http.post<CreateSystemInstanceResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a system. The system is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request.
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemTemplate
		 * @return {CreateSystemTemplateResponse} Success
		 */
		CreateSystemTemplate(requestBody: CreateSystemTemplateRequest): Observable<CreateSystemTemplateResponse> {
			return this.http.post<CreateSystemTemplateResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a workflow. Any new system or deployment that contains this workflow will fail to update or deploy. Existing deployments that contain the workflow will continue to run (since they use a snapshot of the workflow taken at the time of deployment).
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.DeleteFlowTemplate
		 * @return {DeleteFlowTemplateResponse} Success
		 */
		DeleteFlowTemplate(requestBody: DeleteFlowTemplateRequest): Observable<DeleteFlowTemplateResponse> {
			return this.http.post<DeleteFlowTemplateResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.DeleteFlowTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified namespace. This action deletes all of the entities in the namespace. Delete the systems and flows that use entities in the namespace before performing this action.
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.DeleteNamespace
		 * @return {DeleteNamespaceResponse} Success
		 */
		DeleteNamespace(requestBody: DeleteNamespaceRequest): Observable<DeleteNamespaceResponse> {
			return this.http.post<DeleteNamespaceResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.DeleteNamespace', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a system instance. Only system instances that have never been deployed, or that have been undeployed can be deleted.</p> <p>Users can create a new system instance that has the same ID as a deleted system instance.</p>
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemInstance
		 * @return {DeleteSystemInstanceResponse} Success
		 */
		DeleteSystemInstance(requestBody: DeleteSystemInstanceRequest): Observable<DeleteSystemInstanceResponse> {
			return this.http.post<DeleteSystemInstanceResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a system. New deployments can't contain the system after its deletion. Existing deployments that contain the system will continue to work because they use a snapshot of the system that is taken when it is deployed.
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemTemplate
		 * @return {DeleteSystemTemplateResponse} Success
		 */
		DeleteSystemTemplate(requestBody: DeleteSystemTemplateRequest): Observable<DeleteSystemTemplateResponse> {
			return this.http.post<DeleteSystemTemplateResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <b>Greengrass and Cloud Deployments</b> </p> <p>Deploys the system instance to the target specified in <code>CreateSystemInstance</code>. </p> <p> <b>Greengrass Deployments</b> </p> <p>If the system or any workflows and entities have been updated before this action is called, then the deployment will create a new Amazon Simple Storage Service resource file and then deploy it.</p> <p>Since this action creates a Greengrass deployment on the caller's behalf, the calling identity must have write permissions to the specified Greengrass group. Otherwise, the call will fail with an authorization error.</p> <p>For information about the artifacts that get added to your Greengrass core device when you use this API, see <a href="https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-greengrass.html">AWS IoT Things Graph and AWS IoT Greengrass</a>.</p>
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.DeploySystemInstance
		 * @return {DeploySystemInstanceResponse} Success
		 */
		DeploySystemInstance(requestBody: DeploySystemInstanceRequest): Observable<DeploySystemInstanceResponse> {
			return this.http.post<DeploySystemInstanceResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.DeploySystemInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deprecates the specified workflow. This action marks the workflow for deletion. Deprecated flows can't be deployed, but existing deployments will continue to run.
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.DeprecateFlowTemplate
		 * @return {DeprecateFlowTemplateResponse} Success
		 */
		DeprecateFlowTemplate(requestBody: DeprecateFlowTemplateRequest): Observable<DeprecateFlowTemplateResponse> {
			return this.http.post<DeprecateFlowTemplateResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateFlowTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deprecates the specified system.
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.DeprecateSystemTemplate
		 * @return {DeprecateSystemTemplateResponse} Success
		 */
		DeprecateSystemTemplate(requestBody: DeprecateSystemTemplateRequest): Observable<DeprecateSystemTemplateResponse> {
			return this.http.post<DeprecateSystemTemplateResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateSystemTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the latest version of the user's namespace and the public version that it is tracking.
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.DescribeNamespace
		 * @return {DescribeNamespaceResponse} Success
		 */
		DescribeNamespace(requestBody: DescribeNamespaceRequest): Observable<DescribeNamespaceResponse> {
			return this.http.post<DescribeNamespaceResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.DescribeNamespace', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Dissociates a device entity from a concrete thing. The action takes only the type of the entity that you need to dissociate because only one entity of a particular type can be associated with a thing.
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.DissociateEntityFromThing
		 * @return {DissociateEntityFromThingResponse} Success
		 */
		DissociateEntityFromThing(requestBody: DissociateEntityFromThingRequest): Observable<DissociateEntityFromThingResponse> {
			return this.http.post<DissociateEntityFromThingResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.DissociateEntityFromThing', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets definitions of the specified entities. Uses the latest version of the user's namespace by default. This API returns the following TDM entities.</p> <ul> <li> <p>Properties</p> </li> <li> <p>States</p> </li> <li> <p>Events</p> </li> <li> <p>Actions</p> </li> <li> <p>Capabilities</p> </li> <li> <p>Mappings</p> </li> <li> <p>Devices</p> </li> <li> <p>Device Models</p> </li> <li> <p>Services</p> </li> </ul> <p>This action doesn't return definitions for systems, flows, and deployments.</p>
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.GetEntities
		 * @return {GetEntitiesResponse} Success
		 */
		GetEntities(requestBody: GetEntitiesRequest): Observable<GetEntitiesResponse> {
			return this.http.post<GetEntitiesResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.GetEntities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the latest version of the <code>DefinitionDocument</code> and <code>FlowTemplateSummary</code> for the specified workflow.
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplate
		 * @return {GetFlowTemplateResponse} Success
		 */
		GetFlowTemplate(requestBody: GetFlowTemplateRequest): Observable<GetFlowTemplateResponse> {
			return this.http.post<GetFlowTemplateResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets revisions of the specified workflow. Only the last 100 revisions are stored. If the workflow has been deprecated, this action will return revisions that occurred before the deprecation. This action won't work for workflows that have been deleted.
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplateRevisions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetFlowTemplateRevisionsResponse} Success
		 */
		GetFlowTemplateRevisions(maxResults: string, nextToken: string, requestBody: GetFlowTemplateRevisionsRequest): Observable<GetFlowTemplateRevisionsResponse> {
			return this.http.post<GetFlowTemplateRevisionsResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplateRevisions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the status of a namespace deletion task.
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.GetNamespaceDeletionStatus
		 * @return {GetNamespaceDeletionStatusResponse} Success
		 */
		GetNamespaceDeletionStatus(requestBody: GetNamespaceDeletionStatusRequest): Observable<GetNamespaceDeletionStatusResponse> {
			return this.http.post<GetNamespaceDeletionStatusResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.GetNamespaceDeletionStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a system instance.
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.GetSystemInstance
		 * @return {GetSystemInstanceResponse} Success
		 */
		GetSystemInstance(requestBody: GetSystemInstanceRequest): Observable<GetSystemInstanceResponse> {
			return this.http.post<GetSystemInstanceResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a system.
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplate
		 * @return {GetSystemTemplateResponse} Success
		 */
		GetSystemTemplate(requestBody: GetSystemTemplateRequest): Observable<GetSystemTemplateResponse> {
			return this.http.post<GetSystemTemplateResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets revisions made to the specified system template. Only the previous 100 revisions are stored. If the system has been deprecated, this action will return the revisions that occurred before its deprecation. This action won't work with systems that have been deleted.
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplateRevisions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetSystemTemplateRevisionsResponse} Success
		 */
		GetSystemTemplateRevisions(maxResults: string, nextToken: string, requestBody: GetSystemTemplateRevisionsRequest): Observable<GetSystemTemplateRevisionsResponse> {
			return this.http.post<GetSystemTemplateRevisionsResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplateRevisions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the status of the specified upload.
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.GetUploadStatus
		 * @return {GetUploadStatusResponse} Success
		 */
		GetUploadStatus(requestBody: GetUploadStatusRequest): Observable<GetUploadStatusResponse> {
			return this.http.post<GetUploadStatusResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.GetUploadStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of objects that contain information about events in a flow execution.
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.ListFlowExecutionMessages
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListFlowExecutionMessagesResponse} Success
		 */
		ListFlowExecutionMessages(maxResults: string, nextToken: string, requestBody: ListFlowExecutionMessagesRequest): Observable<ListFlowExecutionMessagesResponse> {
			return this.http.post<ListFlowExecutionMessagesResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.ListFlowExecutionMessages?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all tags on an AWS IoT Things Graph resource.
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.ListTagsForResource
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(maxResults: string, nextToken: string, requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.ListTagsForResource?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches for entities of the specified type. You can search for entities in your namespace and the public namespace that you're tracking.
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.SearchEntities
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {SearchEntitiesResponse} Success
		 */
		SearchEntities(maxResults: string, nextToken: string, requestBody: SearchEntitiesRequest): Observable<SearchEntitiesResponse> {
			return this.http.post<SearchEntitiesResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.SearchEntities?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches for AWS IoT Things Graph workflow execution instances.
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowExecutions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {SearchFlowExecutionsResponse} Success
		 */
		SearchFlowExecutions(maxResults: string, nextToken: string, requestBody: SearchFlowExecutionsRequest): Observable<SearchFlowExecutionsResponse> {
			return this.http.post<SearchFlowExecutionsResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowExecutions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches for summary information about workflows.
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowTemplates
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {SearchFlowTemplatesResponse} Success
		 */
		SearchFlowTemplates(maxResults: string, nextToken: string, requestBody: SearchFlowTemplatesRequest): Observable<SearchFlowTemplatesResponse> {
			return this.http.post<SearchFlowTemplatesResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowTemplates?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches for system instances in the user's account.
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemInstances
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {SearchSystemInstancesResponse} Success
		 */
		SearchSystemInstances(maxResults: string, nextToken: string, requestBody: SearchSystemInstancesRequest): Observable<SearchSystemInstancesResponse> {
			return this.http.post<SearchSystemInstancesResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemInstances?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches for summary information about systems in the user's account. You can filter by the ID of a workflow to return only systems that use the specified workflow.
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemTemplates
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {SearchSystemTemplatesResponse} Success
		 */
		SearchSystemTemplates(maxResults: string, nextToken: string, requestBody: SearchSystemTemplatesRequest): Observable<SearchSystemTemplatesResponse> {
			return this.http.post<SearchSystemTemplatesResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemTemplates?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Searches for things associated with the specified entity. You can search by both device and device model.</p> <p>For example, if two different devices, camera1 and camera2, implement the camera device model, the user can associate thing1 to camera1 and thing2 to camera2. <code>SearchThings(camera2)</code> will return only thing2, but <code>SearchThings(camera)</code> will return both thing1 and thing2.</p> <p>This action searches for exact matches and doesn't perform partial text matching.</p>
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.SearchThings
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {SearchThingsResponse} Success
		 */
		SearchThings(maxResults: string, nextToken: string, requestBody: SearchThingsRequest): Observable<SearchThingsResponse> {
			return this.http.post<SearchThingsResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.SearchThings?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a tag for the specified resource.
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a system instance from its target (Cloud or Greengrass).
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.UndeploySystemInstance
		 * @return {UndeploySystemInstanceResponse} Success
		 */
		UndeploySystemInstance(requestBody: UndeploySystemInstanceRequest): Observable<UndeploySystemInstanceResponse> {
			return this.http.post<UndeploySystemInstanceResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.UndeploySystemInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a tag from the specified resource.
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the specified workflow. All deployed systems and system instances that use the workflow will see the changes in the flow when it is redeployed. If you don't want this behavior, copy the workflow (creating a new workflow with a different ID), and update the copy. The workflow can contain only entities in the specified namespace.
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.UpdateFlowTemplate
		 * @return {UpdateFlowTemplateResponse} Success
		 */
		UpdateFlowTemplate(requestBody: UpdateFlowTemplateRequest): Observable<UpdateFlowTemplateResponse> {
			return this.http.post<UpdateFlowTemplateResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.UpdateFlowTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the specified system. You don't need to run this action after updating a workflow. Any deployment that uses the system will see the changes in the system when it is redeployed.
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.UpdateSystemTemplate
		 * @return {UpdateSystemTemplateResponse} Success
		 */
		UpdateSystemTemplate(requestBody: UpdateSystemTemplateRequest): Observable<UpdateSystemTemplateResponse> {
			return this.http.post<UpdateSystemTemplateResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.UpdateSystemTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Asynchronously uploads one or more entity definitions to the user's namespace. The <code>document</code> parameter is required if <code>syncWithPublicNamespace</code> and <code>deleteExistingEntites</code> are false. If the <code>syncWithPublicNamespace</code> parameter is set to <code>true</code>, the user's namespace will synchronize with the latest version of the public namespace. If <code>deprecateExistingEntities</code> is set to true, all entities in the latest version will be deleted before the new <code>DefinitionDocument</code> is uploaded.</p> <p>When a user uploads entity definitions for the first time, the service creates a new namespace for the user. The new namespace tracks the public namespace. Currently users can have only one namespace. The namespace version increments whenever a user uploads entity definitions that are backwards-incompatible and whenever a user sets the <code>syncWithPublicNamespace</code> parameter or the <code>deprecateExistingEntities</code> parameter to <code>true</code>.</p> <p>The IDs for all of the entities should be in URN format. Each entity must be in the user's namespace. Users can't create entities in the public namespace, but entity definitions can refer to entities in the public namespace.</p> <p>Valid entities are <code>Device</code>, <code>DeviceModel</code>, <code>Service</code>, <code>Capability</code>, <code>State</code>, <code>Action</code>, <code>Event</code>, <code>Property</code>, <code>Mapping</code>, <code>Enum</code>. </p>
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.UploadEntityDefinitions
		 * @return {UploadEntityDefinitionsResponse} Success
		 */
		UploadEntityDefinitions(requestBody: UploadEntityDefinitionsRequest): Observable<UploadEntityDefinitionsResponse> {
			return this.http.post<UploadEntityDefinitionsResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.UploadEntityDefinitions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AssociateEntityToThingX_Amz_Target { IotThingsGraphFrontEndService_AssociateEntityToThing = 0 }

	export enum CreateFlowTemplateX_Amz_Target { IotThingsGraphFrontEndService_CreateFlowTemplate = 0 }

	export enum CreateSystemInstanceX_Amz_Target { IotThingsGraphFrontEndService_CreateSystemInstance = 0 }

	export enum CreateSystemTemplateX_Amz_Target { IotThingsGraphFrontEndService_CreateSystemTemplate = 0 }

	export enum DeleteFlowTemplateX_Amz_Target { IotThingsGraphFrontEndService_DeleteFlowTemplate = 0 }

	export enum DeleteNamespaceX_Amz_Target { IotThingsGraphFrontEndService_DeleteNamespace = 0 }

	export enum DeleteSystemInstanceX_Amz_Target { IotThingsGraphFrontEndService_DeleteSystemInstance = 0 }

	export enum DeleteSystemTemplateX_Amz_Target { IotThingsGraphFrontEndService_DeleteSystemTemplate = 0 }

	export enum DeploySystemInstanceX_Amz_Target { IotThingsGraphFrontEndService_DeploySystemInstance = 0 }

	export enum DeprecateFlowTemplateX_Amz_Target { IotThingsGraphFrontEndService_DeprecateFlowTemplate = 0 }

	export enum DeprecateSystemTemplateX_Amz_Target { IotThingsGraphFrontEndService_DeprecateSystemTemplate = 0 }

	export enum DescribeNamespaceX_Amz_Target { IotThingsGraphFrontEndService_DescribeNamespace = 0 }

	export enum DissociateEntityFromThingX_Amz_Target { IotThingsGraphFrontEndService_DissociateEntityFromThing = 0 }

	export enum GetEntitiesX_Amz_Target { IotThingsGraphFrontEndService_GetEntities = 0 }

	export enum GetFlowTemplateX_Amz_Target { IotThingsGraphFrontEndService_GetFlowTemplate = 0 }

	export enum GetFlowTemplateRevisionsX_Amz_Target { IotThingsGraphFrontEndService_GetFlowTemplateRevisions = 0 }

	export enum GetNamespaceDeletionStatusX_Amz_Target { IotThingsGraphFrontEndService_GetNamespaceDeletionStatus = 0 }

	export enum GetSystemInstanceX_Amz_Target { IotThingsGraphFrontEndService_GetSystemInstance = 0 }

	export enum GetSystemTemplateX_Amz_Target { IotThingsGraphFrontEndService_GetSystemTemplate = 0 }

	export enum GetSystemTemplateRevisionsX_Amz_Target { IotThingsGraphFrontEndService_GetSystemTemplateRevisions = 0 }

	export enum GetUploadStatusX_Amz_Target { IotThingsGraphFrontEndService_GetUploadStatus = 0 }

	export enum ListFlowExecutionMessagesX_Amz_Target { IotThingsGraphFrontEndService_ListFlowExecutionMessages = 0 }

	export enum ListTagsForResourceX_Amz_Target { IotThingsGraphFrontEndService_ListTagsForResource = 0 }

	export enum SearchEntitiesX_Amz_Target { IotThingsGraphFrontEndService_SearchEntities = 0 }

	export enum SearchFlowExecutionsX_Amz_Target { IotThingsGraphFrontEndService_SearchFlowExecutions = 0 }

	export enum SearchFlowTemplatesX_Amz_Target { IotThingsGraphFrontEndService_SearchFlowTemplates = 0 }

	export enum SearchSystemInstancesX_Amz_Target { IotThingsGraphFrontEndService_SearchSystemInstances = 0 }

	export enum SearchSystemTemplatesX_Amz_Target { IotThingsGraphFrontEndService_SearchSystemTemplates = 0 }

	export enum SearchThingsX_Amz_Target { IotThingsGraphFrontEndService_SearchThings = 0 }

	export enum TagResourceX_Amz_Target { IotThingsGraphFrontEndService_TagResource = 0 }

	export enum UndeploySystemInstanceX_Amz_Target { IotThingsGraphFrontEndService_UndeploySystemInstance = 0 }

	export enum UntagResourceX_Amz_Target { IotThingsGraphFrontEndService_UntagResource = 0 }

	export enum UpdateFlowTemplateX_Amz_Target { IotThingsGraphFrontEndService_UpdateFlowTemplate = 0 }

	export enum UpdateSystemTemplateX_Amz_Target { IotThingsGraphFrontEndService_UpdateSystemTemplate = 0 }

	export enum UploadEntityDefinitionsX_Amz_Target { IotThingsGraphFrontEndService_UploadEntityDefinitions = 0 }

}

