import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateEntityToThingResponse {
	}
	export interface AssociateEntityToThingResponseFormProperties {
	}
	export function CreateAssociateEntityToThingResponseFormGroup() {
		return new FormGroup<AssociateEntityToThingResponseFormProperties>({
		});

	}

	export interface AssociateEntityToThingRequest {

		/** Required */
		thingName: string;

		/** Required */
		entityId: string;
		namespaceVersion?: number | null;
	}
	export interface AssociateEntityToThingRequestFormProperties {

		/** Required */
		thingName: FormControl<string | null | undefined>,

		/** Required */
		entityId: FormControl<string | null | undefined>,
		namespaceVersion: FormControl<number | null | undefined>,
	}
	export function CreateAssociateEntityToThingRequestFormGroup() {
		return new FormGroup<AssociateEntityToThingRequestFormProperties>({
			thingName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			entityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			namespaceVersion: new FormControl<number | null | undefined>(undefined),
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

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface InternalFailureException {
	}
	export interface InternalFailureExceptionFormProperties {
	}
	export function CreateInternalFailureExceptionFormGroup() {
		return new FormGroup<InternalFailureExceptionFormProperties>({
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

	export interface CreateFlowTemplateResponse {
		summary?: FlowTemplateSummary;
	}
	export interface CreateFlowTemplateResponseFormProperties {
	}
	export function CreateCreateFlowTemplateResponseFormGroup() {
		return new FormGroup<CreateFlowTemplateResponseFormProperties>({
		});

	}


	/** An object that contains summary information about a workflow. */
	export interface FlowTemplateSummary {
		id?: string;
		arn?: string;
		revisionNumber?: number | null;
		createdAt?: Date;
	}

	/** An object that contains summary information about a workflow. */
	export interface FlowTemplateSummaryFormProperties {
		id: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		revisionNumber: FormControl<number | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateFlowTemplateSummaryFormGroup() {
		return new FormGroup<FlowTemplateSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			revisionNumber: new FormControl<number | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateFlowTemplateRequest {

		/** Required */
		definition: DefinitionDocument;
		compatibleNamespaceVersion?: number | null;
	}
	export interface CreateFlowTemplateRequestFormProperties {
		compatibleNamespaceVersion: FormControl<number | null | undefined>,
	}
	export function CreateCreateFlowTemplateRequestFormGroup() {
		return new FormGroup<CreateFlowTemplateRequestFormProperties>({
			compatibleNamespaceVersion: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A document that defines an entity.  */
	export interface DefinitionDocument {

		/** Required */
		language: DefinitionLanguage;

		/** Required */
		text: string;
	}

	/** A document that defines an entity.  */
	export interface DefinitionDocumentFormProperties {

		/** Required */
		language: FormControl<DefinitionLanguage | null | undefined>,

		/** Required */
		text: FormControl<string | null | undefined>,
	}
	export function CreateDefinitionDocumentFormGroup() {
		return new FormGroup<DefinitionDocumentFormProperties>({
			language: new FormControl<DefinitionLanguage | null | undefined>(undefined, [Validators.required]),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DefinitionLanguage { GRAPHQL = 'GRAPHQL' }

	export interface ResourceAlreadyExistsException {
	}
	export interface ResourceAlreadyExistsExceptionFormProperties {
	}
	export function CreateResourceAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ResourceAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface CreateSystemInstanceResponse {
		summary?: SystemInstanceSummary;
	}
	export interface CreateSystemInstanceResponseFormProperties {
	}
	export function CreateCreateSystemInstanceResponseFormGroup() {
		return new FormGroup<CreateSystemInstanceResponseFormProperties>({
		});

	}


	/** An object that contains summary information about a system instance. */
	export interface SystemInstanceSummary {
		id?: string;
		arn?: string;
		status?: SystemInstanceDeploymentStatus;
		target?: DeploymentTarget;
		greengrassGroupName?: string;
		createdAt?: Date;
		updatedAt?: Date;
		greengrassGroupId?: string;
		greengrassGroupVersionId?: string;
	}

	/** An object that contains summary information about a system instance. */
	export interface SystemInstanceSummaryFormProperties {
		id: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		status: FormControl<SystemInstanceDeploymentStatus | null | undefined>,
		target: FormControl<DeploymentTarget | null | undefined>,
		greengrassGroupName: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
		greengrassGroupId: FormControl<string | null | undefined>,
		greengrassGroupVersionId: FormControl<string | null | undefined>,
	}
	export function CreateSystemInstanceSummaryFormGroup() {
		return new FormGroup<SystemInstanceSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<SystemInstanceDeploymentStatus | null | undefined>(undefined),
			target: new FormControl<DeploymentTarget | null | undefined>(undefined),
			greengrassGroupName: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			greengrassGroupId: new FormControl<string | null | undefined>(undefined),
			greengrassGroupVersionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SystemInstanceDeploymentStatus { NOT_DEPLOYED = 'NOT_DEPLOYED', BOOTSTRAP = 'BOOTSTRAP', DEPLOY_IN_PROGRESS = 'DEPLOY_IN_PROGRESS', DEPLOYED_IN_TARGET = 'DEPLOYED_IN_TARGET', UNDEPLOY_IN_PROGRESS = 'UNDEPLOY_IN_PROGRESS', FAILED = 'FAILED', PENDING_DELETE = 'PENDING_DELETE', DELETED_IN_TARGET = 'DELETED_IN_TARGET' }

	export enum DeploymentTarget { GREENGRASS = 'GREENGRASS', CLOUD = 'CLOUD' }

	export interface CreateSystemInstanceRequest {
		tags?: Array<Tag>;

		/**
		 * A document that defines an entity.
		 * Required
		 */
		definition: DefinitionDocument;

		/** Required */
		target: DeploymentTarget;
		greengrassGroupName?: string;
		s3BucketName?: string;

		/** An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics. */
		metricsConfiguration?: MetricsConfiguration;
		flowActionsRoleArn?: string;
	}
	export interface CreateSystemInstanceRequestFormProperties {

		/** Required */
		target: FormControl<DeploymentTarget | null | undefined>,
		greengrassGroupName: FormControl<string | null | undefined>,
		s3BucketName: FormControl<string | null | undefined>,
		flowActionsRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateSystemInstanceRequestFormGroup() {
		return new FormGroup<CreateSystemInstanceRequestFormProperties>({
			target: new FormControl<DeploymentTarget | null | undefined>(undefined, [Validators.required]),
			greengrassGroupName: new FormControl<string | null | undefined>(undefined),
			s3BucketName: new FormControl<string | null | undefined>(undefined),
			flowActionsRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata assigned to an AWS IoT Things Graph resource consisting of a key-value pair. */
	export interface Tag {

		/** Required */
		key: string;

		/** Required */
		value: string;
	}

	/** Metadata assigned to an AWS IoT Things Graph resource consisting of a key-value pair. */
	export interface TagFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics. */
	export interface MetricsConfiguration {
		cloudMetricEnabled?: boolean | null;
		metricRuleRoleArn?: string;
	}

	/** An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics. */
	export interface MetricsConfigurationFormProperties {
		cloudMetricEnabled: FormControl<boolean | null | undefined>,
		metricRuleRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateMetricsConfigurationFormGroup() {
		return new FormGroup<MetricsConfigurationFormProperties>({
			cloudMetricEnabled: new FormControl<boolean | null | undefined>(undefined),
			metricRuleRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSystemTemplateResponse {
		summary?: SystemTemplateSummary;
	}
	export interface CreateSystemTemplateResponseFormProperties {
	}
	export function CreateCreateSystemTemplateResponseFormGroup() {
		return new FormGroup<CreateSystemTemplateResponseFormProperties>({
		});

	}


	/** An object that contains information about a system. */
	export interface SystemTemplateSummary {
		id?: string;
		arn?: string;
		revisionNumber?: number | null;
		createdAt?: Date;
	}

	/** An object that contains information about a system. */
	export interface SystemTemplateSummaryFormProperties {
		id: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		revisionNumber: FormControl<number | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateSystemTemplateSummaryFormGroup() {
		return new FormGroup<SystemTemplateSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			revisionNumber: new FormControl<number | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateSystemTemplateRequest {

		/** Required */
		definition: DefinitionDocument;
		compatibleNamespaceVersion?: number | null;
	}
	export interface CreateSystemTemplateRequestFormProperties {
		compatibleNamespaceVersion: FormControl<number | null | undefined>,
	}
	export function CreateCreateSystemTemplateRequestFormGroup() {
		return new FormGroup<CreateSystemTemplateRequestFormProperties>({
			compatibleNamespaceVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteFlowTemplateResponse {
	}
	export interface DeleteFlowTemplateResponseFormProperties {
	}
	export function CreateDeleteFlowTemplateResponseFormGroup() {
		return new FormGroup<DeleteFlowTemplateResponseFormProperties>({
		});

	}

	export interface DeleteFlowTemplateRequest {

		/** Required */
		id: string;
	}
	export interface DeleteFlowTemplateRequestFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFlowTemplateRequestFormGroup() {
		return new FormGroup<DeleteFlowTemplateRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResourceInUseException {
	}
	export interface ResourceInUseExceptionFormProperties {
	}
	export function CreateResourceInUseExceptionFormGroup() {
		return new FormGroup<ResourceInUseExceptionFormProperties>({
		});

	}

	export interface DeleteNamespaceResponse {
		namespaceArn?: string;
		namespaceName?: string;
	}
	export interface DeleteNamespaceResponseFormProperties {
		namespaceArn: FormControl<string | null | undefined>,
		namespaceName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteNamespaceResponseFormGroup() {
		return new FormGroup<DeleteNamespaceResponseFormProperties>({
			namespaceArn: new FormControl<string | null | undefined>(undefined),
			namespaceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteNamespaceRequest {
	}
	export interface DeleteNamespaceRequestFormProperties {
	}
	export function CreateDeleteNamespaceRequestFormGroup() {
		return new FormGroup<DeleteNamespaceRequestFormProperties>({
		});

	}

	export interface DeleteSystemInstanceResponse {
	}
	export interface DeleteSystemInstanceResponseFormProperties {
	}
	export function CreateDeleteSystemInstanceResponseFormGroup() {
		return new FormGroup<DeleteSystemInstanceResponseFormProperties>({
		});

	}

	export interface DeleteSystemInstanceRequest {
		id?: string;
	}
	export interface DeleteSystemInstanceRequestFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSystemInstanceRequestFormGroup() {
		return new FormGroup<DeleteSystemInstanceRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteSystemTemplateResponse {
	}
	export interface DeleteSystemTemplateResponseFormProperties {
	}
	export function CreateDeleteSystemTemplateResponseFormGroup() {
		return new FormGroup<DeleteSystemTemplateResponseFormProperties>({
		});

	}

	export interface DeleteSystemTemplateRequest {

		/** Required */
		id: string;
	}
	export interface DeleteSystemTemplateRequestFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSystemTemplateRequestFormGroup() {
		return new FormGroup<DeleteSystemTemplateRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeploySystemInstanceResponse {

		/** Required */
		summary: SystemInstanceSummary;
		greengrassDeploymentId?: string;
	}
	export interface DeploySystemInstanceResponseFormProperties {
		greengrassDeploymentId: FormControl<string | null | undefined>,
	}
	export function CreateDeploySystemInstanceResponseFormGroup() {
		return new FormGroup<DeploySystemInstanceResponseFormProperties>({
			greengrassDeploymentId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeploySystemInstanceRequest {
		id?: string;
	}
	export interface DeploySystemInstanceRequestFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateDeploySystemInstanceRequestFormGroup() {
		return new FormGroup<DeploySystemInstanceRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeprecateFlowTemplateResponse {
	}
	export interface DeprecateFlowTemplateResponseFormProperties {
	}
	export function CreateDeprecateFlowTemplateResponseFormGroup() {
		return new FormGroup<DeprecateFlowTemplateResponseFormProperties>({
		});

	}

	export interface DeprecateFlowTemplateRequest {

		/** Required */
		id: string;
	}
	export interface DeprecateFlowTemplateRequestFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDeprecateFlowTemplateRequestFormGroup() {
		return new FormGroup<DeprecateFlowTemplateRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeprecateSystemTemplateResponse {
	}
	export interface DeprecateSystemTemplateResponseFormProperties {
	}
	export function CreateDeprecateSystemTemplateResponseFormGroup() {
		return new FormGroup<DeprecateSystemTemplateResponseFormProperties>({
		});

	}

	export interface DeprecateSystemTemplateRequest {

		/** Required */
		id: string;
	}
	export interface DeprecateSystemTemplateRequestFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDeprecateSystemTemplateRequestFormGroup() {
		return new FormGroup<DeprecateSystemTemplateRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeNamespaceResponse {
		namespaceArn?: string;
		namespaceName?: string;
		trackingNamespaceName?: string;
		trackingNamespaceVersion?: number | null;
		namespaceVersion?: number | null;
	}
	export interface DescribeNamespaceResponseFormProperties {
		namespaceArn: FormControl<string | null | undefined>,
		namespaceName: FormControl<string | null | undefined>,
		trackingNamespaceName: FormControl<string | null | undefined>,
		trackingNamespaceVersion: FormControl<number | null | undefined>,
		namespaceVersion: FormControl<number | null | undefined>,
	}
	export function CreateDescribeNamespaceResponseFormGroup() {
		return new FormGroup<DescribeNamespaceResponseFormProperties>({
			namespaceArn: new FormControl<string | null | undefined>(undefined),
			namespaceName: new FormControl<string | null | undefined>(undefined),
			trackingNamespaceName: new FormControl<string | null | undefined>(undefined),
			trackingNamespaceVersion: new FormControl<number | null | undefined>(undefined),
			namespaceVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeNamespaceRequest {
		namespaceName?: string;
	}
	export interface DescribeNamespaceRequestFormProperties {
		namespaceName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeNamespaceRequestFormGroup() {
		return new FormGroup<DescribeNamespaceRequestFormProperties>({
			namespaceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DissociateEntityFromThingResponse {
	}
	export interface DissociateEntityFromThingResponseFormProperties {
	}
	export function CreateDissociateEntityFromThingResponseFormGroup() {
		return new FormGroup<DissociateEntityFromThingResponseFormProperties>({
		});

	}

	export interface DissociateEntityFromThingRequest {

		/** Required */
		thingName: string;

		/** Required */
		entityType: EntityType;
	}
	export interface DissociateEntityFromThingRequestFormProperties {

		/** Required */
		thingName: FormControl<string | null | undefined>,

		/** Required */
		entityType: FormControl<EntityType | null | undefined>,
	}
	export function CreateDissociateEntityFromThingRequestFormGroup() {
		return new FormGroup<DissociateEntityFromThingRequestFormProperties>({
			thingName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			entityType: new FormControl<EntityType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EntityType { DEVICE = 'DEVICE', SERVICE = 'SERVICE', DEVICE_MODEL = 'DEVICE_MODEL', CAPABILITY = 'CAPABILITY', STATE = 'STATE', ACTION = 'ACTION', EVENT = 'EVENT', PROPERTY = 'PROPERTY', MAPPING = 'MAPPING', ENUM = 'ENUM' }

	export interface GetEntitiesResponse {
		descriptions?: Array<EntityDescription>;
	}
	export interface GetEntitiesResponseFormProperties {
	}
	export function CreateGetEntitiesResponseFormGroup() {
		return new FormGroup<GetEntitiesResponseFormProperties>({
		});

	}


	/** Describes the properties of an entity. */
	export interface EntityDescription {
		id?: string;
		arn?: string;
		type?: EntityType;
		createdAt?: Date;
		definition?: DefinitionDocument;
	}

	/** Describes the properties of an entity. */
	export interface EntityDescriptionFormProperties {
		id: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		type: FormControl<EntityType | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateEntityDescriptionFormGroup() {
		return new FormGroup<EntityDescriptionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<EntityType | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetEntitiesRequest {

		/** Required */
		ids: Array<string>;
		namespaceVersion?: number | null;
	}
	export interface GetEntitiesRequestFormProperties {
		namespaceVersion: FormControl<number | null | undefined>,
	}
	export function CreateGetEntitiesRequestFormGroup() {
		return new FormGroup<GetEntitiesRequestFormProperties>({
			namespaceVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetFlowTemplateResponse {
		description?: FlowTemplateDescription;
	}
	export interface GetFlowTemplateResponseFormProperties {
	}
	export function CreateGetFlowTemplateResponseFormGroup() {
		return new FormGroup<GetFlowTemplateResponseFormProperties>({
		});

	}


	/** An object that contains a workflow's definition and summary information. */
	export interface FlowTemplateDescription {
		summary?: FlowTemplateSummary;
		definition?: DefinitionDocument;
		validatedNamespaceVersion?: number | null;
	}

	/** An object that contains a workflow's definition and summary information. */
	export interface FlowTemplateDescriptionFormProperties {
		validatedNamespaceVersion: FormControl<number | null | undefined>,
	}
	export function CreateFlowTemplateDescriptionFormGroup() {
		return new FormGroup<FlowTemplateDescriptionFormProperties>({
			validatedNamespaceVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetFlowTemplateRequest {

		/** Required */
		id: string;
		revisionNumber?: number | null;
	}
	export interface GetFlowTemplateRequestFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
		revisionNumber: FormControl<number | null | undefined>,
	}
	export function CreateGetFlowTemplateRequestFormGroup() {
		return new FormGroup<GetFlowTemplateRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			revisionNumber: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetFlowTemplateRevisionsResponse {
		summaries?: Array<FlowTemplateSummary>;
		nextToken?: string;
	}
	export interface GetFlowTemplateRevisionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetFlowTemplateRevisionsResponseFormGroup() {
		return new FormGroup<GetFlowTemplateRevisionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetFlowTemplateRevisionsRequest {

		/** Required */
		id: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface GetFlowTemplateRevisionsRequestFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetFlowTemplateRevisionsRequestFormGroup() {
		return new FormGroup<GetFlowTemplateRevisionsRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetNamespaceDeletionStatusResponse {
		namespaceArn?: string;
		namespaceName?: string;
		status?: NamespaceDeletionStatus;
		errorCode?: NamespaceDeletionStatusErrorCodes;
		errorMessage?: string;
	}
	export interface GetNamespaceDeletionStatusResponseFormProperties {
		namespaceArn: FormControl<string | null | undefined>,
		namespaceName: FormControl<string | null | undefined>,
		status: FormControl<NamespaceDeletionStatus | null | undefined>,
		errorCode: FormControl<NamespaceDeletionStatusErrorCodes | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateGetNamespaceDeletionStatusResponseFormGroup() {
		return new FormGroup<GetNamespaceDeletionStatusResponseFormProperties>({
			namespaceArn: new FormControl<string | null | undefined>(undefined),
			namespaceName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<NamespaceDeletionStatus | null | undefined>(undefined),
			errorCode: new FormControl<NamespaceDeletionStatusErrorCodes | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NamespaceDeletionStatus { IN_PROGRESS = 'IN_PROGRESS', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED' }

	export enum NamespaceDeletionStatusErrorCodes { VALIDATION_FAILED = 'VALIDATION_FAILED' }

	export interface GetNamespaceDeletionStatusRequest {
	}
	export interface GetNamespaceDeletionStatusRequestFormProperties {
	}
	export function CreateGetNamespaceDeletionStatusRequestFormGroup() {
		return new FormGroup<GetNamespaceDeletionStatusRequestFormProperties>({
		});

	}

	export interface GetSystemInstanceResponse {
		description?: SystemInstanceDescription;
	}
	export interface GetSystemInstanceResponseFormProperties {
	}
	export function CreateGetSystemInstanceResponseFormGroup() {
		return new FormGroup<GetSystemInstanceResponseFormProperties>({
		});

	}


	/** An object that contains a system instance definition and summary information. */
	export interface SystemInstanceDescription {
		summary?: SystemInstanceSummary;

		/** A document that defines an entity. */
		definition?: DefinitionDocument;
		s3BucketName?: string;

		/** An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics. */
		metricsConfiguration?: MetricsConfiguration;
		validatedNamespaceVersion?: number | null;
		validatedDependencyRevisions?: Array<DependencyRevision>;
		flowActionsRoleArn?: string;
	}

	/** An object that contains a system instance definition and summary information. */
	export interface SystemInstanceDescriptionFormProperties {
		s3BucketName: FormControl<string | null | undefined>,
		validatedNamespaceVersion: FormControl<number | null | undefined>,
		flowActionsRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateSystemInstanceDescriptionFormGroup() {
		return new FormGroup<SystemInstanceDescriptionFormProperties>({
			s3BucketName: new FormControl<string | null | undefined>(undefined),
			validatedNamespaceVersion: new FormControl<number | null | undefined>(undefined),
			flowActionsRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that contains the ID and revision number of a workflow or system that is part of a deployment. */
	export interface DependencyRevision {
		id?: string;
		revisionNumber?: number | null;
	}

	/** An object that contains the ID and revision number of a workflow or system that is part of a deployment. */
	export interface DependencyRevisionFormProperties {
		id: FormControl<string | null | undefined>,
		revisionNumber: FormControl<number | null | undefined>,
	}
	export function CreateDependencyRevisionFormGroup() {
		return new FormGroup<DependencyRevisionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			revisionNumber: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetSystemInstanceRequest {

		/** Required */
		id: string;
	}
	export interface GetSystemInstanceRequestFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateGetSystemInstanceRequestFormGroup() {
		return new FormGroup<GetSystemInstanceRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSystemTemplateResponse {
		description?: SystemTemplateDescription;
	}
	export interface GetSystemTemplateResponseFormProperties {
	}
	export function CreateGetSystemTemplateResponseFormGroup() {
		return new FormGroup<GetSystemTemplateResponseFormProperties>({
		});

	}


	/** An object that contains a system's definition document and summary information. */
	export interface SystemTemplateDescription {
		summary?: SystemTemplateSummary;
		definition?: DefinitionDocument;
		validatedNamespaceVersion?: number | null;
	}

	/** An object that contains a system's definition document and summary information. */
	export interface SystemTemplateDescriptionFormProperties {
		validatedNamespaceVersion: FormControl<number | null | undefined>,
	}
	export function CreateSystemTemplateDescriptionFormGroup() {
		return new FormGroup<SystemTemplateDescriptionFormProperties>({
			validatedNamespaceVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetSystemTemplateRequest {

		/** Required */
		id: string;
		revisionNumber?: number | null;
	}
	export interface GetSystemTemplateRequestFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
		revisionNumber: FormControl<number | null | undefined>,
	}
	export function CreateGetSystemTemplateRequestFormGroup() {
		return new FormGroup<GetSystemTemplateRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			revisionNumber: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetSystemTemplateRevisionsResponse {
		summaries?: Array<SystemTemplateSummary>;
		nextToken?: string;
	}
	export interface GetSystemTemplateRevisionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetSystemTemplateRevisionsResponseFormGroup() {
		return new FormGroup<GetSystemTemplateRevisionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSystemTemplateRevisionsRequest {

		/** Required */
		id: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface GetSystemTemplateRevisionsRequestFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetSystemTemplateRevisionsRequestFormGroup() {
		return new FormGroup<GetSystemTemplateRevisionsRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetUploadStatusResponse {

		/** Required */
		uploadId: string;

		/** Required */
		uploadStatus: NamespaceDeletionStatus;
		namespaceArn?: string;
		namespaceName?: string;
		namespaceVersion?: number | null;
		failureReason?: Array<string>;

		/** Required */
		createdDate: Date;
	}
	export interface GetUploadStatusResponseFormProperties {

		/** Required */
		uploadId: FormControl<string | null | undefined>,

		/** Required */
		uploadStatus: FormControl<NamespaceDeletionStatus | null | undefined>,
		namespaceArn: FormControl<string | null | undefined>,
		namespaceName: FormControl<string | null | undefined>,
		namespaceVersion: FormControl<number | null | undefined>,

		/** Required */
		createdDate: FormControl<Date | null | undefined>,
	}
	export function CreateGetUploadStatusResponseFormGroup() {
		return new FormGroup<GetUploadStatusResponseFormProperties>({
			uploadId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uploadStatus: new FormControl<NamespaceDeletionStatus | null | undefined>(undefined, [Validators.required]),
			namespaceArn: new FormControl<string | null | undefined>(undefined),
			namespaceName: new FormControl<string | null | undefined>(undefined),
			namespaceVersion: new FormControl<number | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetUploadStatusRequest {

		/** Required */
		uploadId: string;
	}
	export interface GetUploadStatusRequestFormProperties {

		/** Required */
		uploadId: FormControl<string | null | undefined>,
	}
	export function CreateGetUploadStatusRequestFormGroup() {
		return new FormGroup<GetUploadStatusRequestFormProperties>({
			uploadId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListFlowExecutionMessagesResponse {
		messages?: Array<FlowExecutionMessage>;
		nextToken?: string;
	}
	export interface ListFlowExecutionMessagesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFlowExecutionMessagesResponseFormGroup() {
		return new FormGroup<ListFlowExecutionMessagesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that contains information about a flow event. */
	export interface FlowExecutionMessage {
		messageId?: string;
		eventType?: FlowExecutionEventType;
		timestamp?: Date;
		payload?: string;
	}

	/** An object that contains information about a flow event. */
	export interface FlowExecutionMessageFormProperties {
		messageId: FormControl<string | null | undefined>,
		eventType: FormControl<FlowExecutionEventType | null | undefined>,
		timestamp: FormControl<Date | null | undefined>,
		payload: FormControl<string | null | undefined>,
	}
	export function CreateFlowExecutionMessageFormGroup() {
		return new FormGroup<FlowExecutionMessageFormProperties>({
			messageId: new FormControl<string | null | undefined>(undefined),
			eventType: new FormControl<FlowExecutionEventType | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
			payload: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FlowExecutionEventType { EXECUTION_STARTED = 'EXECUTION_STARTED', EXECUTION_FAILED = 'EXECUTION_FAILED', EXECUTION_ABORTED = 'EXECUTION_ABORTED', EXECUTION_SUCCEEDED = 'EXECUTION_SUCCEEDED', STEP_STARTED = 'STEP_STARTED', STEP_FAILED = 'STEP_FAILED', STEP_SUCCEEDED = 'STEP_SUCCEEDED', ACTIVITY_SCHEDULED = 'ACTIVITY_SCHEDULED', ACTIVITY_STARTED = 'ACTIVITY_STARTED', ACTIVITY_FAILED = 'ACTIVITY_FAILED', ACTIVITY_SUCCEEDED = 'ACTIVITY_SUCCEEDED', START_FLOW_EXECUTION_TASK = 'START_FLOW_EXECUTION_TASK', SCHEDULE_NEXT_READY_STEPS_TASK = 'SCHEDULE_NEXT_READY_STEPS_TASK', THING_ACTION_TASK = 'THING_ACTION_TASK', THING_ACTION_TASK_FAILED = 'THING_ACTION_TASK_FAILED', THING_ACTION_TASK_SUCCEEDED = 'THING_ACTION_TASK_SUCCEEDED', ACKNOWLEDGE_TASK_MESSAGE = 'ACKNOWLEDGE_TASK_MESSAGE' }

	export interface ListFlowExecutionMessagesRequest {

		/** Required */
		flowExecutionId: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListFlowExecutionMessagesRequestFormProperties {

		/** Required */
		flowExecutionId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListFlowExecutionMessagesRequestFormGroup() {
		return new FormGroup<ListFlowExecutionMessagesRequestFormProperties>({
			flowExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: Array<Tag>;
		nextToken?: string;
	}
	export interface ListTagsForResourceResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceRequest {
		maxResults?: number | null;

		/** Required */
		resourceArn: string;
		nextToken?: string;
	}
	export interface ListTagsForResourceRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchEntitiesResponse {
		descriptions?: Array<EntityDescription>;
		nextToken?: string;
	}
	export interface SearchEntitiesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchEntitiesResponseFormGroup() {
		return new FormGroup<SearchEntitiesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchEntitiesRequest {

		/** Required */
		entityTypes: Array<EntityType>;
		filters?: Array<EntityFilter>;
		nextToken?: string;
		maxResults?: number | null;
		namespaceVersion?: number | null;
	}
	export interface SearchEntitiesRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		namespaceVersion: FormControl<number | null | undefined>,
	}
	export function CreateSearchEntitiesRequestFormGroup() {
		return new FormGroup<SearchEntitiesRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			namespaceVersion: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object that filters an entity search. Multiple filters function as OR criteria in the search. For example a search that includes a <code>NAMESPACE</code> and a <code>REFERENCED_ENTITY_ID</code> filter searches for entities in the specified namespace that use the entity specified by the value of <code>REFERENCED_ENTITY_ID</code>. */
	export interface EntityFilter {
		name?: EntityFilterName;
		value?: Array<string>;
	}

	/** An object that filters an entity search. Multiple filters function as OR criteria in the search. For example a search that includes a <code>NAMESPACE</code> and a <code>REFERENCED_ENTITY_ID</code> filter searches for entities in the specified namespace that use the entity specified by the value of <code>REFERENCED_ENTITY_ID</code>. */
	export interface EntityFilterFormProperties {
		name: FormControl<EntityFilterName | null | undefined>,
	}
	export function CreateEntityFilterFormGroup() {
		return new FormGroup<EntityFilterFormProperties>({
			name: new FormControl<EntityFilterName | null | undefined>(undefined),
		});

	}

	export enum EntityFilterName { NAME = 'NAME', NAMESPACE = 'NAMESPACE', SEMANTIC_TYPE_PATH = 'SEMANTIC_TYPE_PATH', REFERENCED_ENTITY_ID = 'REFERENCED_ENTITY_ID' }

	export interface SearchFlowExecutionsResponse {
		summaries?: Array<FlowExecutionSummary>;
		nextToken?: string;
	}
	export interface SearchFlowExecutionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchFlowExecutionsResponseFormGroup() {
		return new FormGroup<SearchFlowExecutionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that contains summary information about a flow execution. */
	export interface FlowExecutionSummary {
		flowExecutionId?: string;
		status?: FlowExecutionStatus;
		systemInstanceId?: string;
		flowTemplateId?: string;
		createdAt?: Date;
		updatedAt?: Date;
	}

	/** An object that contains summary information about a flow execution. */
	export interface FlowExecutionSummaryFormProperties {
		flowExecutionId: FormControl<string | null | undefined>,
		status: FormControl<FlowExecutionStatus | null | undefined>,
		systemInstanceId: FormControl<string | null | undefined>,
		flowTemplateId: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateFlowExecutionSummaryFormGroup() {
		return new FormGroup<FlowExecutionSummaryFormProperties>({
			flowExecutionId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<FlowExecutionStatus | null | undefined>(undefined),
			systemInstanceId: new FormControl<string | null | undefined>(undefined),
			flowTemplateId: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum FlowExecutionStatus { RUNNING = 'RUNNING', ABORTED = 'ABORTED', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED' }

	export interface SearchFlowExecutionsRequest {

		/** Required */
		systemInstanceId: string;
		flowExecutionId?: string;
		startTime?: Date;
		endTime?: Date;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface SearchFlowExecutionsRequestFormProperties {

		/** Required */
		systemInstanceId: FormControl<string | null | undefined>,
		flowExecutionId: FormControl<string | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchFlowExecutionsRequestFormGroup() {
		return new FormGroup<SearchFlowExecutionsRequestFormProperties>({
			systemInstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			flowExecutionId: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SearchFlowTemplatesResponse {
		summaries?: Array<FlowTemplateSummary>;
		nextToken?: string;
	}
	export interface SearchFlowTemplatesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchFlowTemplatesResponseFormGroup() {
		return new FormGroup<SearchFlowTemplatesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchFlowTemplatesRequest {
		filters?: Array<FlowTemplateFilter>;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface SearchFlowTemplatesRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchFlowTemplatesRequestFormGroup() {
		return new FormGroup<SearchFlowTemplatesRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object that filters a workflow search. */
	export interface FlowTemplateFilter {

		/** Required */
		name: FlowTemplateFilterName;

		/** Required */
		value: Array<string>;
	}

	/** An object that filters a workflow search. */
	export interface FlowTemplateFilterFormProperties {

		/** Required */
		name: FormControl<FlowTemplateFilterName | null | undefined>,
	}
	export function CreateFlowTemplateFilterFormGroup() {
		return new FormGroup<FlowTemplateFilterFormProperties>({
			name: new FormControl<FlowTemplateFilterName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FlowTemplateFilterName { DEVICE_MODEL_ID = 'DEVICE_MODEL_ID' }

	export interface SearchSystemInstancesResponse {
		summaries?: Array<SystemInstanceSummary>;
		nextToken?: string;
	}
	export interface SearchSystemInstancesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchSystemInstancesResponseFormGroup() {
		return new FormGroup<SearchSystemInstancesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchSystemInstancesRequest {
		filters?: Array<SystemInstanceFilter>;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface SearchSystemInstancesRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchSystemInstancesRequestFormGroup() {
		return new FormGroup<SearchSystemInstancesRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object that filters a system instance search. Multiple filters function as OR criteria in the search. For example a search that includes a GREENGRASS_GROUP_NAME and a STATUS filter searches for system instances in the specified Greengrass group that have the specified status. */
	export interface SystemInstanceFilter {
		name?: SystemInstanceFilterName;
		value?: Array<string>;
	}

	/** An object that filters a system instance search. Multiple filters function as OR criteria in the search. For example a search that includes a GREENGRASS_GROUP_NAME and a STATUS filter searches for system instances in the specified Greengrass group that have the specified status. */
	export interface SystemInstanceFilterFormProperties {
		name: FormControl<SystemInstanceFilterName | null | undefined>,
	}
	export function CreateSystemInstanceFilterFormGroup() {
		return new FormGroup<SystemInstanceFilterFormProperties>({
			name: new FormControl<SystemInstanceFilterName | null | undefined>(undefined),
		});

	}

	export enum SystemInstanceFilterName { SYSTEM_TEMPLATE_ID = 'SYSTEM_TEMPLATE_ID', STATUS = 'STATUS', GREENGRASS_GROUP_NAME = 'GREENGRASS_GROUP_NAME' }

	export interface SearchSystemTemplatesResponse {
		summaries?: Array<SystemTemplateSummary>;
		nextToken?: string;
	}
	export interface SearchSystemTemplatesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchSystemTemplatesResponseFormGroup() {
		return new FormGroup<SearchSystemTemplatesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchSystemTemplatesRequest {
		filters?: Array<SystemTemplateFilter>;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface SearchSystemTemplatesRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchSystemTemplatesRequestFormGroup() {
		return new FormGroup<SearchSystemTemplatesRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object that filters a system search. */
	export interface SystemTemplateFilter {

		/** Required */
		name: SystemTemplateFilterName;

		/** Required */
		value: Array<string>;
	}

	/** An object that filters a system search. */
	export interface SystemTemplateFilterFormProperties {

		/** Required */
		name: FormControl<SystemTemplateFilterName | null | undefined>,
	}
	export function CreateSystemTemplateFilterFormGroup() {
		return new FormGroup<SystemTemplateFilterFormProperties>({
			name: new FormControl<SystemTemplateFilterName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SystemTemplateFilterName { FLOW_TEMPLATE_ID = 'FLOW_TEMPLATE_ID' }

	export interface SearchThingsResponse {
		things?: Array<Thing>;
		nextToken?: string;
	}
	export interface SearchThingsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchThingsResponseFormGroup() {
		return new FormGroup<SearchThingsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An AWS IoT thing. */
	export interface Thing {
		thingArn?: string;
		thingName?: string;
	}

	/** An AWS IoT thing. */
	export interface ThingFormProperties {
		thingArn: FormControl<string | null | undefined>,
		thingName: FormControl<string | null | undefined>,
	}
	export function CreateThingFormGroup() {
		return new FormGroup<ThingFormProperties>({
			thingArn: new FormControl<string | null | undefined>(undefined),
			thingName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchThingsRequest {

		/** Required */
		entityId: string;
		nextToken?: string;
		maxResults?: number | null;
		namespaceVersion?: number | null;
	}
	export interface SearchThingsRequestFormProperties {

		/** Required */
		entityId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		namespaceVersion: FormControl<number | null | undefined>,
	}
	export function CreateSearchThingsRequestFormGroup() {
		return new FormGroup<SearchThingsRequestFormProperties>({
			entityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			namespaceVersion: new FormControl<number | null | undefined>(undefined),
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

	export interface TagResourceRequest {

		/** Required */
		resourceArn: string;

		/** Required */
		tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UndeploySystemInstanceResponse {
		summary?: SystemInstanceSummary;
	}
	export interface UndeploySystemInstanceResponseFormProperties {
	}
	export function CreateUndeploySystemInstanceResponseFormGroup() {
		return new FormGroup<UndeploySystemInstanceResponseFormProperties>({
		});

	}

	export interface UndeploySystemInstanceRequest {
		id?: string;
	}
	export interface UndeploySystemInstanceRequestFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateUndeploySystemInstanceRequestFormGroup() {
		return new FormGroup<UndeploySystemInstanceRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
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

	export interface UntagResourceRequest {

		/** Required */
		resourceArn: string;

		/** Required */
		tagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateFlowTemplateResponse {
		summary?: FlowTemplateSummary;
	}
	export interface UpdateFlowTemplateResponseFormProperties {
	}
	export function CreateUpdateFlowTemplateResponseFormGroup() {
		return new FormGroup<UpdateFlowTemplateResponseFormProperties>({
		});

	}

	export interface UpdateFlowTemplateRequest {

		/** Required */
		id: string;

		/** Required */
		definition: DefinitionDocument;
		compatibleNamespaceVersion?: number | null;
	}
	export interface UpdateFlowTemplateRequestFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
		compatibleNamespaceVersion: FormControl<number | null | undefined>,
	}
	export function CreateUpdateFlowTemplateRequestFormGroup() {
		return new FormGroup<UpdateFlowTemplateRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			compatibleNamespaceVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateSystemTemplateResponse {
		summary?: SystemTemplateSummary;
	}
	export interface UpdateSystemTemplateResponseFormProperties {
	}
	export function CreateUpdateSystemTemplateResponseFormGroup() {
		return new FormGroup<UpdateSystemTemplateResponseFormProperties>({
		});

	}

	export interface UpdateSystemTemplateRequest {

		/** Required */
		id: string;

		/** Required */
		definition: DefinitionDocument;
		compatibleNamespaceVersion?: number | null;
	}
	export interface UpdateSystemTemplateRequestFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
		compatibleNamespaceVersion: FormControl<number | null | undefined>,
	}
	export function CreateUpdateSystemTemplateRequestFormGroup() {
		return new FormGroup<UpdateSystemTemplateRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			compatibleNamespaceVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UploadEntityDefinitionsResponse {

		/** Required */
		uploadId: string;
	}
	export interface UploadEntityDefinitionsResponseFormProperties {

		/** Required */
		uploadId: FormControl<string | null | undefined>,
	}
	export function CreateUploadEntityDefinitionsResponseFormGroup() {
		return new FormGroup<UploadEntityDefinitionsResponseFormProperties>({
			uploadId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UploadEntityDefinitionsRequest {
		document?: DefinitionDocument;
		syncWithPublicNamespace?: boolean | null;
		deprecateExistingEntities?: boolean | null;
	}
	export interface UploadEntityDefinitionsRequestFormProperties {
		syncWithPublicNamespace: FormControl<boolean | null | undefined>,
		deprecateExistingEntities: FormControl<boolean | null | undefined>,
	}
	export function CreateUploadEntityDefinitionsRequestFormGroup() {
		return new FormGroup<UploadEntityDefinitionsRequestFormProperties>({
			syncWithPublicNamespace: new FormControl<boolean | null | undefined>(undefined),
			deprecateExistingEntities: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum UploadStatus { IN_PROGRESS = 'IN_PROGRESS', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED' }

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
		 * Deletes the specified namespace. This action deletes all of the entities in the namespace. Delete the systems and flows that use entities in the namespace before performing this action. This action takes no request parameters.
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
		GetFlowTemplateRevisions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetFlowTemplateRevisionsRequest): Observable<GetFlowTemplateRevisionsResponse> {
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
		GetSystemTemplateRevisions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetSystemTemplateRevisionsRequest): Observable<GetSystemTemplateRevisionsResponse> {
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
		ListFlowExecutionMessages(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListFlowExecutionMessagesRequest): Observable<ListFlowExecutionMessagesResponse> {
			return this.http.post<ListFlowExecutionMessagesResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.ListFlowExecutionMessages?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all tags on an AWS IoT Things Graph resource.
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.ListTagsForResource
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.ListTagsForResource?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches for entities of the specified type. You can search for entities in your namespace and the public namespace that you're tracking.
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.SearchEntities
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {SearchEntitiesResponse} Success
		 */
		SearchEntities(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: SearchEntitiesRequest): Observable<SearchEntitiesResponse> {
			return this.http.post<SearchEntitiesResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.SearchEntities?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches for AWS IoT Things Graph workflow execution instances.
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowExecutions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {SearchFlowExecutionsResponse} Success
		 */
		SearchFlowExecutions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: SearchFlowExecutionsRequest): Observable<SearchFlowExecutionsResponse> {
			return this.http.post<SearchFlowExecutionsResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowExecutions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches for summary information about workflows.
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowTemplates
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {SearchFlowTemplatesResponse} Success
		 */
		SearchFlowTemplates(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: SearchFlowTemplatesRequest): Observable<SearchFlowTemplatesResponse> {
			return this.http.post<SearchFlowTemplatesResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowTemplates?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches for system instances in the user's account.
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemInstances
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {SearchSystemInstancesResponse} Success
		 */
		SearchSystemInstances(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: SearchSystemInstancesRequest): Observable<SearchSystemInstancesResponse> {
			return this.http.post<SearchSystemInstancesResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemInstances?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches for summary information about systems in the user's account. You can filter by the ID of a workflow to return only systems that use the specified workflow.
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemTemplates
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {SearchSystemTemplatesResponse} Success
		 */
		SearchSystemTemplates(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: SearchSystemTemplatesRequest): Observable<SearchSystemTemplatesResponse> {
			return this.http.post<SearchSystemTemplatesResponse>(this.baseUri + '#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemTemplates?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Searches for things associated with the specified entity. You can search by both device and device model.</p> <p>For example, if two different devices, camera1 and camera2, implement the camera device model, the user can associate thing1 to camera1 and thing2 to camera2. <code>SearchThings(camera2)</code> will return only thing2, but <code>SearchThings(camera)</code> will return both thing1 and thing2.</p> <p>This action searches for exact matches and doesn't perform partial text matching.</p>
		 * Post #X-Amz-Target=IotThingsGraphFrontEndService.SearchThings
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {SearchThingsResponse} Success
		 */
		SearchThings(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: SearchThingsRequest): Observable<SearchThingsResponse> {
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

	export enum AssociateEntityToThingX_Amz_Target { 'IotThingsGraphFrontEndService.AssociateEntityToThing' = 'IotThingsGraphFrontEndService.AssociateEntityToThing' }

	export enum CreateFlowTemplateX_Amz_Target { 'IotThingsGraphFrontEndService.CreateFlowTemplate' = 'IotThingsGraphFrontEndService.CreateFlowTemplate' }

	export enum CreateSystemInstanceX_Amz_Target { 'IotThingsGraphFrontEndService.CreateSystemInstance' = 'IotThingsGraphFrontEndService.CreateSystemInstance' }

	export enum CreateSystemTemplateX_Amz_Target { 'IotThingsGraphFrontEndService.CreateSystemTemplate' = 'IotThingsGraphFrontEndService.CreateSystemTemplate' }

	export enum DeleteFlowTemplateX_Amz_Target { 'IotThingsGraphFrontEndService.DeleteFlowTemplate' = 'IotThingsGraphFrontEndService.DeleteFlowTemplate' }

	export enum DeleteNamespaceX_Amz_Target { 'IotThingsGraphFrontEndService.DeleteNamespace' = 'IotThingsGraphFrontEndService.DeleteNamespace' }

	export enum DeleteSystemInstanceX_Amz_Target { 'IotThingsGraphFrontEndService.DeleteSystemInstance' = 'IotThingsGraphFrontEndService.DeleteSystemInstance' }

	export enum DeleteSystemTemplateX_Amz_Target { 'IotThingsGraphFrontEndService.DeleteSystemTemplate' = 'IotThingsGraphFrontEndService.DeleteSystemTemplate' }

	export enum DeploySystemInstanceX_Amz_Target { 'IotThingsGraphFrontEndService.DeploySystemInstance' = 'IotThingsGraphFrontEndService.DeploySystemInstance' }

	export enum DeprecateFlowTemplateX_Amz_Target { 'IotThingsGraphFrontEndService.DeprecateFlowTemplate' = 'IotThingsGraphFrontEndService.DeprecateFlowTemplate' }

	export enum DeprecateSystemTemplateX_Amz_Target { 'IotThingsGraphFrontEndService.DeprecateSystemTemplate' = 'IotThingsGraphFrontEndService.DeprecateSystemTemplate' }

	export enum DescribeNamespaceX_Amz_Target { 'IotThingsGraphFrontEndService.DescribeNamespace' = 'IotThingsGraphFrontEndService.DescribeNamespace' }

	export enum DissociateEntityFromThingX_Amz_Target { 'IotThingsGraphFrontEndService.DissociateEntityFromThing' = 'IotThingsGraphFrontEndService.DissociateEntityFromThing' }

	export enum GetEntitiesX_Amz_Target { 'IotThingsGraphFrontEndService.GetEntities' = 'IotThingsGraphFrontEndService.GetEntities' }

	export enum GetFlowTemplateX_Amz_Target { 'IotThingsGraphFrontEndService.GetFlowTemplate' = 'IotThingsGraphFrontEndService.GetFlowTemplate' }

	export enum GetFlowTemplateRevisionsX_Amz_Target { 'IotThingsGraphFrontEndService.GetFlowTemplateRevisions' = 'IotThingsGraphFrontEndService.GetFlowTemplateRevisions' }

	export enum GetNamespaceDeletionStatusX_Amz_Target { 'IotThingsGraphFrontEndService.GetNamespaceDeletionStatus' = 'IotThingsGraphFrontEndService.GetNamespaceDeletionStatus' }

	export enum GetSystemInstanceX_Amz_Target { 'IotThingsGraphFrontEndService.GetSystemInstance' = 'IotThingsGraphFrontEndService.GetSystemInstance' }

	export enum GetSystemTemplateX_Amz_Target { 'IotThingsGraphFrontEndService.GetSystemTemplate' = 'IotThingsGraphFrontEndService.GetSystemTemplate' }

	export enum GetSystemTemplateRevisionsX_Amz_Target { 'IotThingsGraphFrontEndService.GetSystemTemplateRevisions' = 'IotThingsGraphFrontEndService.GetSystemTemplateRevisions' }

	export enum GetUploadStatusX_Amz_Target { 'IotThingsGraphFrontEndService.GetUploadStatus' = 'IotThingsGraphFrontEndService.GetUploadStatus' }

	export enum ListFlowExecutionMessagesX_Amz_Target { 'IotThingsGraphFrontEndService.ListFlowExecutionMessages' = 'IotThingsGraphFrontEndService.ListFlowExecutionMessages' }

	export enum ListTagsForResourceX_Amz_Target { 'IotThingsGraphFrontEndService.ListTagsForResource' = 'IotThingsGraphFrontEndService.ListTagsForResource' }

	export enum SearchEntitiesX_Amz_Target { 'IotThingsGraphFrontEndService.SearchEntities' = 'IotThingsGraphFrontEndService.SearchEntities' }

	export enum SearchFlowExecutionsX_Amz_Target { 'IotThingsGraphFrontEndService.SearchFlowExecutions' = 'IotThingsGraphFrontEndService.SearchFlowExecutions' }

	export enum SearchFlowTemplatesX_Amz_Target { 'IotThingsGraphFrontEndService.SearchFlowTemplates' = 'IotThingsGraphFrontEndService.SearchFlowTemplates' }

	export enum SearchSystemInstancesX_Amz_Target { 'IotThingsGraphFrontEndService.SearchSystemInstances' = 'IotThingsGraphFrontEndService.SearchSystemInstances' }

	export enum SearchSystemTemplatesX_Amz_Target { 'IotThingsGraphFrontEndService.SearchSystemTemplates' = 'IotThingsGraphFrontEndService.SearchSystemTemplates' }

	export enum SearchThingsX_Amz_Target { 'IotThingsGraphFrontEndService.SearchThings' = 'IotThingsGraphFrontEndService.SearchThings' }

	export enum TagResourceX_Amz_Target { 'IotThingsGraphFrontEndService.TagResource' = 'IotThingsGraphFrontEndService.TagResource' }

	export enum UndeploySystemInstanceX_Amz_Target { 'IotThingsGraphFrontEndService.UndeploySystemInstance' = 'IotThingsGraphFrontEndService.UndeploySystemInstance' }

	export enum UntagResourceX_Amz_Target { 'IotThingsGraphFrontEndService.UntagResource' = 'IotThingsGraphFrontEndService.UntagResource' }

	export enum UpdateFlowTemplateX_Amz_Target { 'IotThingsGraphFrontEndService.UpdateFlowTemplate' = 'IotThingsGraphFrontEndService.UpdateFlowTemplate' }

	export enum UpdateSystemTemplateX_Amz_Target { 'IotThingsGraphFrontEndService.UpdateSystemTemplate' = 'IotThingsGraphFrontEndService.UpdateSystemTemplate' }

	export enum UploadEntityDefinitionsX_Amz_Target { 'IotThingsGraphFrontEndService.UploadEntityDefinitions' = 'IotThingsGraphFrontEndService.UploadEntityDefinitions' }

}

