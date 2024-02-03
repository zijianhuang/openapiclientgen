import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateAttributeGroupResponse {
		applicationArn?: string;
		attributeGroupArn?: string;
	}
	export interface AssociateAttributeGroupResponseFormProperties {
		applicationArn: FormControl<string | null | undefined>,
		attributeGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateAttributeGroupResponseFormGroup() {
		return new FormGroup<AssociateAttributeGroupResponseFormProperties>({
			applicationArn: new FormControl<string | null | undefined>(undefined),
			attributeGroupArn: new FormControl<string | null | undefined>(undefined),
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

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
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

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
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

	export interface AssociateResourceResponse {
		applicationArn?: string;
		resourceArn?: string;
	}
	export interface AssociateResourceResponseFormProperties {
		applicationArn: FormControl<string | null | undefined>,
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateResourceResponseFormGroup() {
		return new FormGroup<AssociateResourceResponseFormProperties>({
			applicationArn: new FormControl<string | null | undefined>(undefined),
			resourceArn: new FormControl<string | null | undefined>(undefined),
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

	export interface CreateApplicationResponse {
		application?: Application;
	}
	export interface CreateApplicationResponseFormProperties {
	}
	export function CreateCreateApplicationResponseFormGroup() {
		return new FormGroup<CreateApplicationResponseFormProperties>({
		});

	}


	/** Represents a Amazon Web Services Service Catalog AppRegistry application that is the top-level node in a hierarchy of related cloud resource abstractions. */
	export interface Application {
		id?: string;
		arn?: string;
		name?: string;
		description?: string;
		creationTime?: Date;
		lastUpdateTime?: Date;
		tags?: Tags;
	}

	/** Represents a Amazon Web Services Service Catalog AppRegistry application that is the top-level node in a hierarchy of related cloud resource abstractions. */
	export interface ApplicationFormProperties {
		id: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateApplicationFormGroup() {
		return new FormGroup<ApplicationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Tags {
	}
	export interface TagsFormProperties {
	}
	export function CreateTagsFormGroup() {
		return new FormGroup<TagsFormProperties>({
		});

	}

	export interface CreateAttributeGroupResponse {
		attributeGroup?: AttributeGroup;
	}
	export interface CreateAttributeGroupResponseFormProperties {
	}
	export function CreateCreateAttributeGroupResponseFormGroup() {
		return new FormGroup<CreateAttributeGroupResponseFormProperties>({
		});

	}


	/** Represents a Amazon Web Services Service Catalog AppRegistry attribute group that is rich metadata which describes an application and its components. */
	export interface AttributeGroup {
		id?: string;
		arn?: string;
		name?: string;
		description?: string;
		creationTime?: Date;
		lastUpdateTime?: Date;
		tags?: Tags;
	}

	/** Represents a Amazon Web Services Service Catalog AppRegistry attribute group that is rich metadata which describes an application and its components. */
	export interface AttributeGroupFormProperties {
		id: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateAttributeGroupFormGroup() {
		return new FormGroup<AttributeGroupFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DeleteApplicationResponse {
		application?: ApplicationSummary;
	}
	export interface DeleteApplicationResponseFormProperties {
	}
	export function CreateDeleteApplicationResponseFormGroup() {
		return new FormGroup<DeleteApplicationResponseFormProperties>({
		});

	}


	/** Summary of a Amazon Web Services Service Catalog AppRegistry application. */
	export interface ApplicationSummary {
		id?: string;
		arn?: string;
		name?: string;
		description?: string;
		creationTime?: Date;
		lastUpdateTime?: Date;
	}

	/** Summary of a Amazon Web Services Service Catalog AppRegistry application. */
	export interface ApplicationSummaryFormProperties {
		id: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateApplicationSummaryFormGroup() {
		return new FormGroup<ApplicationSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DeleteAttributeGroupResponse {
		attributeGroup?: AttributeGroupSummary;
	}
	export interface DeleteAttributeGroupResponseFormProperties {
	}
	export function CreateDeleteAttributeGroupResponseFormGroup() {
		return new FormGroup<DeleteAttributeGroupResponseFormProperties>({
		});

	}


	/** Summary of a Amazon Web Services Service Catalog AppRegistry attribute group. */
	export interface AttributeGroupSummary {
		id?: string;
		arn?: string;
		name?: string;
		description?: string;
		creationTime?: Date;
		lastUpdateTime?: Date;
		createdBy?: string;
	}

	/** Summary of a Amazon Web Services Service Catalog AppRegistry attribute group. */
	export interface AttributeGroupSummaryFormProperties {
		id: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
	}
	export function CreateAttributeGroupSummaryFormGroup() {
		return new FormGroup<AttributeGroupSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateAttributeGroupResponse {
		applicationArn?: string;
		attributeGroupArn?: string;
	}
	export interface DisassociateAttributeGroupResponseFormProperties {
		applicationArn: FormControl<string | null | undefined>,
		attributeGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateAttributeGroupResponseFormGroup() {
		return new FormGroup<DisassociateAttributeGroupResponseFormProperties>({
			applicationArn: new FormControl<string | null | undefined>(undefined),
			attributeGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateResourceResponse {
		applicationArn?: string;
		resourceArn?: string;
	}
	export interface DisassociateResourceResponseFormProperties {
		applicationArn: FormControl<string | null | undefined>,
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateResourceResponseFormGroup() {
		return new FormGroup<DisassociateResourceResponseFormProperties>({
			applicationArn: new FormControl<string | null | undefined>(undefined),
			resourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetApplicationResponse {
		id?: string;
		arn?: string;
		name?: string;
		description?: string;
		creationTime?: Date;
		lastUpdateTime?: Date;
		associatedResourceCount?: number | null;
		tags?: Tags;
		integrations?: Integrations;
	}
	export interface GetApplicationResponseFormProperties {
		id: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
		associatedResourceCount: FormControl<number | null | undefined>,
	}
	export function CreateGetApplicationResponseFormGroup() {
		return new FormGroup<GetApplicationResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
			associatedResourceCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  The information about the service integration. */
	export interface Integrations {
		resourceGroup?: ResourceGroup;
	}

	/**  The information about the service integration. */
	export interface IntegrationsFormProperties {
	}
	export function CreateIntegrationsFormGroup() {
		return new FormGroup<IntegrationsFormProperties>({
		});

	}


	/** The information about the resource group integration. */
	export interface ResourceGroup {
		state?: ResourceGroupState;
		arn?: string;
		errorMessage?: string;
	}

	/** The information about the resource group integration. */
	export interface ResourceGroupFormProperties {
		state: FormControl<ResourceGroupState | null | undefined>,
		arn: FormControl<string | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateResourceGroupFormGroup() {
		return new FormGroup<ResourceGroupFormProperties>({
			state: new FormControl<ResourceGroupState | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResourceGroupState { CREATING = 'CREATING', CREATE_COMPLETE = 'CREATE_COMPLETE', CREATE_FAILED = 'CREATE_FAILED', UPDATING = 'UPDATING', UPDATE_COMPLETE = 'UPDATE_COMPLETE', UPDATE_FAILED = 'UPDATE_FAILED' }

	export interface GetAssociatedResourceResponse {
		resource?: Resource;
	}
	export interface GetAssociatedResourceResponseFormProperties {
	}
	export function CreateGetAssociatedResourceResponseFormGroup() {
		return new FormGroup<GetAssociatedResourceResponseFormProperties>({
		});

	}


	/**  The information about the resource. */
	export interface Resource {
		name?: string;
		arn?: string;
		associationTime?: Date;
		integrations?: ResourceIntegrations;
	}

	/**  The information about the resource. */
	export interface ResourceFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		associationTime: FormControl<Date | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			associationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The service integration information about the resource. */
	export interface ResourceIntegrations {
		resourceGroup?: ResourceGroup;
	}

	/** The service integration information about the resource. */
	export interface ResourceIntegrationsFormProperties {
	}
	export function CreateResourceIntegrationsFormGroup() {
		return new FormGroup<ResourceIntegrationsFormProperties>({
		});

	}

	export interface GetAttributeGroupResponse {
		id?: string;
		arn?: string;
		name?: string;
		description?: string;
		attributes?: string;
		creationTime?: Date;
		lastUpdateTime?: Date;
		tags?: Tags;
		createdBy?: string;
	}
	export interface GetAttributeGroupResponseFormProperties {
		id: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		attributes: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
	}
	export function CreateGetAttributeGroupResponseFormGroup() {
		return new FormGroup<GetAttributeGroupResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			attributes: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetConfigurationResponse {
		configuration?: AppRegistryConfiguration;
	}
	export interface GetConfigurationResponseFormProperties {
	}
	export function CreateGetConfigurationResponseFormGroup() {
		return new FormGroup<GetConfigurationResponseFormProperties>({
		});

	}


	/**  Includes all of the AppRegistry settings.  */
	export interface AppRegistryConfiguration {
		tagQueryConfiguration?: TagQueryConfiguration;
	}

	/**  Includes all of the AppRegistry settings.  */
	export interface AppRegistryConfigurationFormProperties {
	}
	export function CreateAppRegistryConfigurationFormGroup() {
		return new FormGroup<AppRegistryConfigurationFormProperties>({
		});

	}


	/**  The definition of <code>tagQuery</code>. Specifies which resources are associated with an application.  */
	export interface TagQueryConfiguration {
		tagKey?: string;
	}

	/**  The definition of <code>tagQuery</code>. Specifies which resources are associated with an application.  */
	export interface TagQueryConfigurationFormProperties {
		tagKey: FormControl<string | null | undefined>,
	}
	export function CreateTagQueryConfigurationFormGroup() {
		return new FormGroup<TagQueryConfigurationFormProperties>({
			tagKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListApplicationsResponse {
		applications?: Array<ApplicationSummary>;
		nextToken?: string;
	}
	export interface ListApplicationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationsResponseFormGroup() {
		return new FormGroup<ListApplicationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAssociatedAttributeGroupsResponse {
		attributeGroups?: Array<string>;
		nextToken?: string;
	}
	export interface ListAssociatedAttributeGroupsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssociatedAttributeGroupsResponseFormGroup() {
		return new FormGroup<ListAssociatedAttributeGroupsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAssociatedResourcesResponse {
		resources?: Array<ResourceInfo>;
		nextToken?: string;
	}
	export interface ListAssociatedResourcesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssociatedResourcesResponseFormGroup() {
		return new FormGroup<ListAssociatedResourcesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The information about the resource. */
	export interface ResourceInfo {
		name?: string;
		arn?: string;
		resourceType?: ResourceType;
		resourceDetails?: ResourceDetails;
	}

	/** The information about the resource. */
	export interface ResourceInfoFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		resourceType: FormControl<ResourceType | null | undefined>,
	}
	export function CreateResourceInfoFormGroup() {
		return new FormGroup<ResourceInfoFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<ResourceType | null | undefined>(undefined),
		});

	}

	export enum ResourceType { CFN_STACK = 'CFN_STACK', RESOURCE_TAG_VALUE = 'RESOURCE_TAG_VALUE' }


	/**  The details related to the resource.  */
	export interface ResourceDetails {
		tagValue?: string;
	}

	/**  The details related to the resource.  */
	export interface ResourceDetailsFormProperties {
		tagValue: FormControl<string | null | undefined>,
	}
	export function CreateResourceDetailsFormGroup() {
		return new FormGroup<ResourceDetailsFormProperties>({
			tagValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAttributeGroupsResponse {
		attributeGroups?: Array<AttributeGroupSummary>;
		nextToken?: string;
	}
	export interface ListAttributeGroupsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAttributeGroupsResponseFormGroup() {
		return new FormGroup<ListAttributeGroupsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAttributeGroupsForApplicationResponse {
		attributeGroupsDetails?: Array<AttributeGroupDetails>;
		nextToken?: string;
	}
	export interface ListAttributeGroupsForApplicationResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAttributeGroupsForApplicationResponseFormGroup() {
		return new FormGroup<ListAttributeGroupsForApplicationResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The details related to a specific AttributeGroup.  */
	export interface AttributeGroupDetails {
		id?: string;
		arn?: string;
		name?: string;
		createdBy?: string;
	}

	/**  The details related to a specific AttributeGroup.  */
	export interface AttributeGroupDetailsFormProperties {
		id: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
	}
	export function CreateAttributeGroupDetailsFormGroup() {
		return new FormGroup<AttributeGroupDetailsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: Tags;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface SyncResourceResponse {
		applicationArn?: string;
		resourceArn?: string;
		actionTaken?: SyncAction;
	}
	export interface SyncResourceResponseFormProperties {
		applicationArn: FormControl<string | null | undefined>,
		resourceArn: FormControl<string | null | undefined>,
		actionTaken: FormControl<SyncAction | null | undefined>,
	}
	export function CreateSyncResourceResponseFormGroup() {
		return new FormGroup<SyncResourceResponseFormProperties>({
			applicationArn: new FormControl<string | null | undefined>(undefined),
			resourceArn: new FormControl<string | null | undefined>(undefined),
			actionTaken: new FormControl<SyncAction | null | undefined>(undefined),
		});

	}

	export enum SyncAction { START_SYNC = 'START_SYNC', NO_ACTION = 'NO_ACTION' }

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

	export interface UpdateApplicationResponse {
		application?: Application;
	}
	export interface UpdateApplicationResponseFormProperties {
	}
	export function CreateUpdateApplicationResponseFormGroup() {
		return new FormGroup<UpdateApplicationResponseFormProperties>({
		});

	}

	export interface UpdateAttributeGroupResponse {
		attributeGroup?: AttributeGroup;
	}
	export interface UpdateAttributeGroupResponseFormProperties {
	}
	export function CreateUpdateAttributeGroupResponseFormGroup() {
		return new FormGroup<UpdateAttributeGroupResponseFormProperties>({
		});

	}

	export interface AssociateAttributeGroupRequest {
	}
	export interface AssociateAttributeGroupRequestFormProperties {
	}
	export function CreateAssociateAttributeGroupRequestFormGroup() {
		return new FormGroup<AssociateAttributeGroupRequestFormProperties>({
		});

	}

	export interface AssociateResourceRequest {
	}
	export interface AssociateResourceRequestFormProperties {
	}
	export function CreateAssociateResourceRequestFormGroup() {
		return new FormGroup<AssociateResourceRequestFormProperties>({
		});

	}

	export interface CreateApplicationRequest {

		/** Required */
		name: string;
		description?: string;
		tags?: Tags;

		/** Required */
		clientToken: string;
	}
	export interface CreateApplicationRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationRequestFormGroup() {
		return new FormGroup<CreateApplicationRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAttributeGroupRequest {

		/** Required */
		name: string;
		description?: string;

		/** Required */
		attributes: string;
		tags?: Tags;

		/** Required */
		clientToken: string;
	}
	export interface CreateAttributeGroupRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		attributes: FormControl<string | null | undefined>,

		/** Required */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAttributeGroupRequestFormGroup() {
		return new FormGroup<CreateAttributeGroupRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			attributes: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteApplicationRequest {
	}
	export interface DeleteApplicationRequestFormProperties {
	}
	export function CreateDeleteApplicationRequestFormGroup() {
		return new FormGroup<DeleteApplicationRequestFormProperties>({
		});

	}

	export interface DeleteAttributeGroupRequest {
	}
	export interface DeleteAttributeGroupRequestFormProperties {
	}
	export function CreateDeleteAttributeGroupRequestFormGroup() {
		return new FormGroup<DeleteAttributeGroupRequestFormProperties>({
		});

	}

	export interface DisassociateAttributeGroupRequest {
	}
	export interface DisassociateAttributeGroupRequestFormProperties {
	}
	export function CreateDisassociateAttributeGroupRequestFormGroup() {
		return new FormGroup<DisassociateAttributeGroupRequestFormProperties>({
		});

	}

	export interface DisassociateResourceRequest {
	}
	export interface DisassociateResourceRequestFormProperties {
	}
	export function CreateDisassociateResourceRequestFormGroup() {
		return new FormGroup<DisassociateResourceRequestFormProperties>({
		});

	}

	export interface GetApplicationRequest {
	}
	export interface GetApplicationRequestFormProperties {
	}
	export function CreateGetApplicationRequestFormGroup() {
		return new FormGroup<GetApplicationRequestFormProperties>({
		});

	}

	export interface GetAssociatedResourceRequest {
	}
	export interface GetAssociatedResourceRequestFormProperties {
	}
	export function CreateGetAssociatedResourceRequestFormGroup() {
		return new FormGroup<GetAssociatedResourceRequestFormProperties>({
		});

	}

	export interface GetAttributeGroupRequest {
	}
	export interface GetAttributeGroupRequestFormProperties {
	}
	export function CreateGetAttributeGroupRequestFormGroup() {
		return new FormGroup<GetAttributeGroupRequestFormProperties>({
		});

	}

	export interface ListApplicationsRequest {
	}
	export interface ListApplicationsRequestFormProperties {
	}
	export function CreateListApplicationsRequestFormGroup() {
		return new FormGroup<ListApplicationsRequestFormProperties>({
		});

	}

	export interface ListAssociatedAttributeGroupsRequest {
	}
	export interface ListAssociatedAttributeGroupsRequestFormProperties {
	}
	export function CreateListAssociatedAttributeGroupsRequestFormGroup() {
		return new FormGroup<ListAssociatedAttributeGroupsRequestFormProperties>({
		});

	}

	export interface ListAssociatedResourcesRequest {
	}
	export interface ListAssociatedResourcesRequestFormProperties {
	}
	export function CreateListAssociatedResourcesRequestFormGroup() {
		return new FormGroup<ListAssociatedResourcesRequestFormProperties>({
		});

	}

	export interface ListAttributeGroupsForApplicationRequest {
	}
	export interface ListAttributeGroupsForApplicationRequestFormProperties {
	}
	export function CreateListAttributeGroupsForApplicationRequestFormGroup() {
		return new FormGroup<ListAttributeGroupsForApplicationRequestFormProperties>({
		});

	}

	export interface ListAttributeGroupsRequest {
	}
	export interface ListAttributeGroupsRequestFormProperties {
	}
	export function CreateListAttributeGroupsRequestFormGroup() {
		return new FormGroup<ListAttributeGroupsRequestFormProperties>({
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

	export interface PutConfigurationRequest {

		/** Required */
		configuration: AppRegistryConfiguration;
	}
	export interface PutConfigurationRequestFormProperties {
	}
	export function CreatePutConfigurationRequestFormGroup() {
		return new FormGroup<PutConfigurationRequestFormProperties>({
		});

	}

	export interface SyncResourceRequest {
	}
	export interface SyncResourceRequestFormProperties {
	}
	export function CreateSyncResourceRequestFormGroup() {
		return new FormGroup<SyncResourceRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		tags: Tags;
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

	export interface UpdateApplicationRequest {
		name?: string;
		description?: string;
	}
	export interface UpdateApplicationRequestFormProperties {
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationRequestFormGroup() {
		return new FormGroup<UpdateApplicationRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAttributeGroupRequest {
		name?: string;
		description?: string;
		attributes?: string;
	}
	export interface UpdateAttributeGroupRequestFormProperties {
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		attributes: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAttributeGroupRequestFormGroup() {
		return new FormGroup<UpdateAttributeGroupRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			attributes: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Associates an attribute group with an application to augment the application's metadata with the group's attributes. This feature enables applications to be described with user-defined details that are machine-readable, such as third-party integrations.
		 * Put applications/{application}/attribute-groups/{attributeGroup}
		 * @param {string} application  The name, ID, or ARN of the application. 
		 * @param {string} attributeGroup  The name, ID, or ARN of the attribute group that holds the attributes to describe the application. 
		 * @return {AssociateAttributeGroupResponse} Success
		 */
		AssociateAttributeGroup(application: string, attributeGroup: string): Observable<AssociateAttributeGroupResponse> {
			return this.http.put<AssociateAttributeGroupResponse>(this.baseUri + 'applications/' + (application == null ? '' : encodeURIComponent(application)) + '/attribute-groups/' + (attributeGroup == null ? '' : encodeURIComponent(attributeGroup)), null, {});
		}

		/**
		 * Disassociates an attribute group from an application to remove the extra attributes contained in the attribute group from the application's metadata. This operation reverts <code>AssociateAttributeGroup</code>.
		 * Delete applications/{application}/attribute-groups/{attributeGroup}
		 * @param {string} application  The name, ID, or ARN of the application. 
		 * @param {string} attributeGroup  The name, ID, or ARN of the attribute group that holds the attributes to describe the application. 
		 * @return {DisassociateAttributeGroupResponse} Success
		 */
		DisassociateAttributeGroup(application: string, attributeGroup: string): Observable<DisassociateAttributeGroupResponse> {
			return this.http.delete<DisassociateAttributeGroupResponse>(this.baseUri + 'applications/' + (application == null ? '' : encodeURIComponent(application)) + '/attribute-groups/' + (attributeGroup == null ? '' : encodeURIComponent(attributeGroup)), {});
		}

		/**
		 * Associates a resource with an application. The resource can be specified by its ARN or name. The application can be specified by ARN, ID, or name.
		 * Put applications/{application}/resources/{resourceType}/{resource}
		 * @param {string} application  The name, ID, or ARN of the application. 
		 * @param {ResourceType} resourceType The type of resource of which the application will be associated.
		 * @param {string} resource The name or ID of the resource of which the application will be associated.
		 * @return {AssociateResourceResponse} Success
		 */
		AssociateResource(application: string, resourceType: ResourceType, resource: string): Observable<AssociateResourceResponse> {
			return this.http.put<AssociateResourceResponse>(this.baseUri + 'applications/' + (application == null ? '' : encodeURIComponent(application)) + '/resources/' + resourceType + '/' + (resource == null ? '' : encodeURIComponent(resource)), null, {});
		}

		/**
		 * Disassociates a resource from application. Both the resource and the application can be specified either by ID or name.
		 * Delete applications/{application}/resources/{resourceType}/{resource}
		 * @param {string} application The name or ID of the application.
		 * @param {ResourceType} resourceType The type of the resource that is being disassociated.
		 * @param {string} resource The name or ID of the resource.
		 * @return {DisassociateResourceResponse} Success
		 */
		DisassociateResource(application: string, resourceType: ResourceType, resource: string): Observable<DisassociateResourceResponse> {
			return this.http.delete<DisassociateResourceResponse>(this.baseUri + 'applications/' + (application == null ? '' : encodeURIComponent(application)) + '/resources/' + resourceType + '/' + (resource == null ? '' : encodeURIComponent(resource)), {});
		}

		/**
		 * Gets the resource associated with the application.
		 * Get applications/{application}/resources/{resourceType}/{resource}
		 * @param {string} application  The name, ID, or ARN of the application. 
		 * @param {ResourceType} resourceType The type of resource associated with the application.
		 * @param {string} resource The name or ID of the resource associated with the application.
		 * @return {GetAssociatedResourceResponse} Success
		 */
		GetAssociatedResource(application: string, resourceType: ResourceType, resource: string): Observable<GetAssociatedResourceResponse> {
			return this.http.get<GetAssociatedResourceResponse>(this.baseUri + 'applications/' + (application == null ? '' : encodeURIComponent(application)) + '/resources/' + resourceType + '/' + (resource == null ? '' : encodeURIComponent(resource)), {});
		}

		/**
		 * Creates a new application that is the top-level node in a hierarchy of related cloud resource abstractions.
		 * Post applications
		 * @return {void} 
		 */
		CreateApplication(requestBody: CreateApplicationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'applications', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of all of your applications. Results are paginated.
		 * Get applications
		 * @param {string} nextToken The token to use to get the next page of results after a previous API call. 
		 * @param {number} maxResults The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.
		 * @return {ListApplicationsResponse} Success
		 */
		ListApplications(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListApplicationsResponse> {
			return this.http.get<ListApplicationsResponse>(this.baseUri + 'applications?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates a new attribute group as a container for user-defined attributes. This feature enables users to have full control over their cloud application's metadata in a rich machine-readable format to facilitate integration with automated workflows and third-party tools.
		 * Post attribute-groups
		 * @return {void} 
		 */
		CreateAttributeGroup(requestBody: CreateAttributeGroupPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'attribute-groups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all attribute groups which you have access to. Results are paginated.
		 * Get attribute-groups
		 * @param {string} nextToken The token to use to get the next page of results after a previous API call. 
		 * @param {number} maxResults The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.
		 * @return {ListAttributeGroupsResponse} Success
		 */
		ListAttributeGroups(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListAttributeGroupsResponse> {
			return this.http.get<ListAttributeGroupsResponse>(this.baseUri + 'attribute-groups?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Deletes an application that is specified either by its application ID, name, or ARN. All associated attribute groups and resources must be disassociated from it before deleting an application.
		 * Delete applications/{application}
		 * @param {string} application  The name, ID, or ARN of the application. 
		 * @return {DeleteApplicationResponse} Success
		 */
		DeleteApplication(application: string): Observable<DeleteApplicationResponse> {
			return this.http.delete<DeleteApplicationResponse>(this.baseUri + 'applications/' + (application == null ? '' : encodeURIComponent(application)), {});
		}

		/**
		 * Retrieves metadata information about one of your applications. The application can be specified by its ARN, ID, or name (which is unique within one account in one region at a given point in time). Specify by ARN or ID in automated workflows if you want to make sure that the exact same application is returned or a <code>ResourceNotFoundException</code> is thrown, avoiding the ABA addressing problem.
		 * Get applications/{application}
		 * @param {string} application  The name, ID, or ARN of the application. 
		 * @return {GetApplicationResponse} Success
		 */
		GetApplication(application: string): Observable<GetApplicationResponse> {
			return this.http.get<GetApplicationResponse>(this.baseUri + 'applications/' + (application == null ? '' : encodeURIComponent(application)), {});
		}

		/**
		 * Updates an existing application with new attributes.
		 * Patch applications/{application}
		 * @param {string} application  The name, ID, or ARN of the application that will be updated. 
		 * @return {UpdateApplicationResponse} Success
		 */
		UpdateApplication(application: string, requestBody: UpdateApplicationPatchBody): Observable<UpdateApplicationResponse> {
			return this.http.patch<UpdateApplicationResponse>(this.baseUri + 'applications/' + (application == null ? '' : encodeURIComponent(application)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an attribute group, specified either by its attribute group ID, name, or ARN.
		 * Delete attribute-groups/{attributeGroup}
		 * @param {string} attributeGroup  The name, ID, or ARN of the attribute group that holds the attributes to describe the application. 
		 * @return {DeleteAttributeGroupResponse} Success
		 */
		DeleteAttributeGroup(attributeGroup: string): Observable<DeleteAttributeGroupResponse> {
			return this.http.delete<DeleteAttributeGroupResponse>(this.baseUri + 'attribute-groups/' + (attributeGroup == null ? '' : encodeURIComponent(attributeGroup)), {});
		}

		/**
		 * Retrieves an attribute group by its ARN, ID, or name. The attribute group can be specified by its ARN, ID, or name.
		 * Get attribute-groups/{attributeGroup}
		 * @param {string} attributeGroup  The name, ID, or ARN of the attribute group that holds the attributes to describe the application. 
		 * @return {GetAttributeGroupResponse} Success
		 */
		GetAttributeGroup(attributeGroup: string): Observable<GetAttributeGroupResponse> {
			return this.http.get<GetAttributeGroupResponse>(this.baseUri + 'attribute-groups/' + (attributeGroup == null ? '' : encodeURIComponent(attributeGroup)), {});
		}

		/**
		 * Updates an existing attribute group with new details.
		 * Patch attribute-groups/{attributeGroup}
		 * @param {string} attributeGroup  The name, ID, or ARN of the attribute group that holds the attributes to describe the application. 
		 * @return {UpdateAttributeGroupResponse} Success
		 */
		UpdateAttributeGroup(attributeGroup: string, requestBody: UpdateAttributeGroupPatchBody): Observable<UpdateAttributeGroupResponse> {
			return this.http.patch<UpdateAttributeGroupResponse>(this.baseUri + 'attribute-groups/' + (attributeGroup == null ? '' : encodeURIComponent(attributeGroup)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a <code>TagKey</code> configuration from an account.
		 * Get configuration
		 * @return {GetConfigurationResponse} Success
		 */
		GetConfiguration(): Observable<GetConfigurationResponse> {
			return this.http.get<GetConfigurationResponse>(this.baseUri + 'configuration', {});
		}

		/**
		 * Associates a <code>TagKey</code> configuration to an account.
		 * Put configuration
		 * @return {void} Success
		 */
		PutConfiguration(requestBody: PutConfigurationPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all attribute groups that are associated with specified application. Results are paginated.
		 * Get applications/{application}/attribute-groups
		 * @param {string} application The name or ID of the application.
		 * @param {string} nextToken The token to use to get the next page of results after a previous API call. 
		 * @param {number} maxResults The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.
		 * @return {ListAssociatedAttributeGroupsResponse} Success
		 */
		ListAssociatedAttributeGroups(application: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListAssociatedAttributeGroupsResponse> {
			return this.http.get<ListAssociatedAttributeGroupsResponse>(this.baseUri + 'applications/' + (application == null ? '' : encodeURIComponent(application)) + '/attribute-groups&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p> Lists all of the resources that are associated with the specified application. Results are paginated. </p> <note> <p> If you share an application, and a consumer account associates a tag query to the application, all of the users who can access the application can also view the tag values in all accounts that are associated with it using this API. </p> </note>
		 * Get applications/{application}/resources
		 * @param {string} application  The name, ID, or ARN of the application. 
		 * @param {string} nextToken The token to use to get the next page of results after a previous API call. 
		 * @param {number} maxResults The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.
		 * @return {ListAssociatedResourcesResponse} Success
		 */
		ListAssociatedResources(application: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListAssociatedResourcesResponse> {
			return this.http.get<ListAssociatedResourcesResponse>(this.baseUri + 'applications/' + (application == null ? '' : encodeURIComponent(application)) + '/resources&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists the details of all attribute groups associated with a specific application. The results display in pages.
		 * Get applications/{application}/attribute-group-details
		 * @param {string} application The name or ID of the application.
		 * @param {string} nextToken This token retrieves the next page of results after a previous API call.
		 * @param {number} maxResults The upper bound of the number of results to return. The value cannot exceed 25. If you omit this parameter, it defaults to 25. This value is optional.
		 * @return {ListAttributeGroupsForApplicationResponse} Success
		 */
		ListAttributeGroupsForApplication(application: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListAttributeGroupsForApplicationResponse> {
			return this.http.get<ListAttributeGroupsForApplicationResponse>(this.baseUri + 'applications/' + (application == null ? '' : encodeURIComponent(application)) + '/attribute-group-details&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists all of the tags on the resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon resource name (ARN) that specifies the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * <p>Assigns one or more tags (key-value pairs) to the specified resource.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the resource, this action updates its value.</p> <p>This operation returns an empty response if the call was successful.</p>
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon resource name (ARN) that specifies the resource.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Syncs the resource with current AppRegistry records.</p> <p>Specifically, the resource’s AppRegistry system tags sync with its associated application. We remove the resource's AppRegistry system tags if it does not associate with the application. The caller must have permissions to read and update the resource.</p>
		 * Post sync/{resourceType}/{resource}
		 * @param {ResourceType} resourceType The type of resource of which the application will be associated.
		 * @param {string} resource An entity you can work with and specify with a name or ID. Examples include an Amazon EC2 instance, an Amazon Web Services CloudFormation stack, or an Amazon S3 bucket.
		 * @return {SyncResourceResponse} Success
		 */
		SyncResource(resourceType: ResourceType, resource: string): Observable<SyncResourceResponse> {
			return this.http.post<SyncResourceResponse>(this.baseUri + 'sync/' + resourceType + '/' + (resource == null ? '' : encodeURIComponent(resource)), null, {});
		}

		/**
		 * <p>Removes tags from a resource.</p> <p>This operation returns an empty response if the call was successful.</p>
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon resource name (ARN) that specifies the resource.
		 * @param {Array<string>} tagKeys A list of the tag keys to remove from the specified resource.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface CreateApplicationPostBody {

		/**
		 * The name of the application. The name must be unique in the region in which you are creating the application.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: string;

		/**
		 * The description of the application.
		 * Max length: 1024
		 */
		description?: string | null;

		/** Key-value pairs you can use to associate with the application. */
		tags?: {[id: string]: string };

		/**
		 * A unique identifier that you provide to ensure idempotency. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		clientToken: string;
	}
	export interface CreateApplicationPostBodyFormProperties {

		/**
		 * The name of the application. The name must be unique in the region in which you are creating the application.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The description of the application.
		 * Max length: 1024
		 */
		description: FormControl<string | null | undefined>,

		/** Key-value pairs you can use to associate with the application. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * A unique identifier that you provide to ensure idempotency. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationPostBodyFormGroup() {
		return new FormGroup<CreateApplicationPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[-.\w]+')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
		});

	}

	export interface CreateAttributeGroupPostBody {

		/**
		 * The name of the attribute group.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: string;

		/**
		 * The description of the attribute group that the user provides.
		 * Max length: 1024
		 */
		description?: string | null;

		/**
		 * A JSON string in the form of nested key-value pairs that represent the attributes in the group and describes an application and its components.
		 * Required
		 * Max length: 8000
		 * Min length: 1
		 */
		attributes: string;

		/** Key-value pairs you can use to associate with the attribute group. */
		tags?: {[id: string]: string };

		/**
		 * A unique identifier that you provide to ensure idempotency. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		clientToken: string;
	}
	export interface CreateAttributeGroupPostBodyFormProperties {

		/**
		 * The name of the attribute group.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The description of the attribute group that the user provides.
		 * Max length: 1024
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * A JSON string in the form of nested key-value pairs that represent the attributes in the group and describes an application and its components.
		 * Required
		 * Max length: 8000
		 * Min length: 1
		 */
		attributes: FormControl<string | null | undefined>,

		/** Key-value pairs you can use to associate with the attribute group. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * A unique identifier that you provide to ensure idempotency. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAttributeGroupPostBodyFormGroup() {
		return new FormGroup<CreateAttributeGroupPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[-.\w]+')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			attributes: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(8000), Validators.pattern('[\u0009\u000A\u000D\u0020-\u00FF]+')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
		});

	}

	export interface UpdateApplicationPatchBody {

		/**
		 * Deprecated: The new name of the application. The name must be unique in the region in which you are updating the application. Please do not use this field as we have stopped supporting name updates.
		 * Max length: 256
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * The new description of the application.
		 * Max length: 1024
		 */
		description?: string | null;
	}
	export interface UpdateApplicationPatchBodyFormProperties {

		/**
		 * Deprecated: The new name of the application. The name must be unique in the region in which you are updating the application. Please do not use this field as we have stopped supporting name updates.
		 * Max length: 256
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The new description of the application.
		 * Max length: 1024
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationPatchBodyFormGroup() {
		return new FormGroup<UpdateApplicationPatchBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[-.\w]+')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
		});

	}

	export interface UpdateAttributeGroupPatchBody {

		/**
		 * Deprecated: The new name of the attribute group. The name must be unique in the region in which you are updating the attribute group. Please do not use this field as we have stopped supporting name updates.
		 * Max length: 256
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * The description of the attribute group that the user provides.
		 * Max length: 1024
		 */
		description?: string | null;

		/**
		 * A JSON string in the form of nested key-value pairs that represent the attributes in the group and describes an application and its components.
		 * Max length: 8000
		 * Min length: 1
		 */
		attributes?: string | null;
	}
	export interface UpdateAttributeGroupPatchBodyFormProperties {

		/**
		 * Deprecated: The new name of the attribute group. The name must be unique in the region in which you are updating the attribute group. Please do not use this field as we have stopped supporting name updates.
		 * Max length: 256
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The description of the attribute group that the user provides.
		 * Max length: 1024
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * A JSON string in the form of nested key-value pairs that represent the attributes in the group and describes an application and its components.
		 * Max length: 8000
		 * Min length: 1
		 */
		attributes: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAttributeGroupPatchBodyFormGroup() {
		return new FormGroup<UpdateAttributeGroupPatchBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[-.\w]+')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			attributes: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(8000), Validators.pattern('[\u0009\u000A\u000D\u0020-\u00FF]+')]),
		});

	}

	export interface PutConfigurationPutBody {

		/**
		 * Includes all of the AppRegistry settings.
		 * Required
		 */
		configuration: PutConfigurationPutBodyConfiguration;
	}
	export interface PutConfigurationPutBodyFormProperties {
	}
	export function CreatePutConfigurationPutBodyFormGroup() {
		return new FormGroup<PutConfigurationPutBodyFormProperties>({
		});

	}

	export interface PutConfigurationPutBodyConfiguration {
		tagQueryConfiguration?: TagQueryConfiguration;
	}
	export interface PutConfigurationPutBodyConfigurationFormProperties {
	}
	export function CreatePutConfigurationPutBodyConfigurationFormGroup() {
		return new FormGroup<PutConfigurationPutBodyConfigurationFormProperties>({
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The new or modified tags for the resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The new or modified tags for the resource.
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

