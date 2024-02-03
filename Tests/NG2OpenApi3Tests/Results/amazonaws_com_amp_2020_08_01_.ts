import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents the output of a CreateAlertManagerDefinition operation. */
	export interface CreateAlertManagerDefinitionResponse {

		/** Required */
		status: AlertManagerDefinitionStatus;
	}

	/** Represents the output of a CreateAlertManagerDefinition operation. */
	export interface CreateAlertManagerDefinitionResponseFormProperties {
	}
	export function CreateCreateAlertManagerDefinitionResponseFormGroup() {
		return new FormGroup<CreateAlertManagerDefinitionResponseFormProperties>({
		});

	}


	/** Represents the status of a definition. */
	export interface AlertManagerDefinitionStatus {

		/** Required */
		statusCode: AlertManagerDefinitionStatusCode;
		statusReason?: string;
	}

	/** Represents the status of a definition. */
	export interface AlertManagerDefinitionStatusFormProperties {

		/** Required */
		statusCode: FormControl<AlertManagerDefinitionStatusCode | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
	}
	export function CreateAlertManagerDefinitionStatusFormGroup() {
		return new FormGroup<AlertManagerDefinitionStatusFormProperties>({
			statusCode: new FormControl<AlertManagerDefinitionStatusCode | null | undefined>(undefined, [Validators.required]),
			statusReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** State of an alert manager definition. */
	export enum AlertManagerDefinitionStatusCode { CREATING = 'CREATING', ACTIVE = 'ACTIVE', UPDATING = 'UPDATING', DELETING = 'DELETING', CREATION_FAILED = 'CREATION_FAILED', UPDATE_FAILED = 'UPDATE_FAILED' }

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
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

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
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

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
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


	/** Represents the output of a CreateLoggingConfiguration operation. */
	export interface CreateLoggingConfigurationResponse {

		/** Required */
		status: LoggingConfigurationStatus;
	}

	/** Represents the output of a CreateLoggingConfiguration operation. */
	export interface CreateLoggingConfigurationResponseFormProperties {
	}
	export function CreateCreateLoggingConfigurationResponseFormGroup() {
		return new FormGroup<CreateLoggingConfigurationResponseFormProperties>({
		});

	}


	/** Represents the status of a logging configuration. */
	export interface LoggingConfigurationStatus {

		/** Required */
		statusCode: AlertManagerDefinitionStatusCode;
		statusReason?: string;
	}

	/** Represents the status of a logging configuration. */
	export interface LoggingConfigurationStatusFormProperties {

		/** Required */
		statusCode: FormControl<AlertManagerDefinitionStatusCode | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
	}
	export function CreateLoggingConfigurationStatusFormGroup() {
		return new FormGroup<LoggingConfigurationStatusFormProperties>({
			statusCode: new FormControl<AlertManagerDefinitionStatusCode | null | undefined>(undefined, [Validators.required]),
			statusReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a CreateRuleGroupsNamespace operation. */
	export interface CreateRuleGroupsNamespaceResponse {

		/** Required */
		name: string;

		/** Required */
		arn: string;

		/** Required */
		status: RuleGroupsNamespaceStatus;
		tags?: TagMap;
	}

	/** Represents the output of a CreateRuleGroupsNamespace operation. */
	export interface CreateRuleGroupsNamespaceResponseFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateCreateRuleGroupsNamespaceResponseFormGroup() {
		return new FormGroup<CreateRuleGroupsNamespaceResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the status of a namespace. */
	export interface RuleGroupsNamespaceStatus {

		/** Required */
		statusCode: AlertManagerDefinitionStatusCode;
		statusReason?: string;
	}

	/** Represents the status of a namespace. */
	export interface RuleGroupsNamespaceStatusFormProperties {

		/** Required */
		statusCode: FormControl<AlertManagerDefinitionStatusCode | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
	}
	export function CreateRuleGroupsNamespaceStatusFormGroup() {
		return new FormGroup<RuleGroupsNamespaceStatusFormProperties>({
			statusCode: new FormControl<AlertManagerDefinitionStatusCode | null | undefined>(undefined, [Validators.required]),
			statusReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of tags assigned to the resource. */
	export interface TagMap {
	}

	/** The list of tags assigned to the resource. */
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}


	/** Represents the output of a CreateWorkspace operation. */
	export interface CreateWorkspaceResponse {

		/** Required */
		workspaceId: string;

		/** Required */
		arn: string;

		/** Required */
		status: WorkspaceStatus;
		tags?: TagMap;
	}

	/** Represents the output of a CreateWorkspace operation. */
	export interface CreateWorkspaceResponseFormProperties {

		/** Required */
		workspaceId: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkspaceResponseFormGroup() {
		return new FormGroup<CreateWorkspaceResponseFormProperties>({
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the status of a workspace. */
	export interface WorkspaceStatus {

		/** Required */
		statusCode: WorkspaceStatusCode;
	}

	/** Represents the status of a workspace. */
	export interface WorkspaceStatusFormProperties {

		/** Required */
		statusCode: FormControl<WorkspaceStatusCode | null | undefined>,
	}
	export function CreateWorkspaceStatusFormGroup() {
		return new FormGroup<WorkspaceStatusFormProperties>({
			statusCode: new FormControl<WorkspaceStatusCode | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** State of a workspace. */
	export enum WorkspaceStatusCode { CREATING = 'CREATING', ACTIVE = 'ACTIVE', UPDATING = 'UPDATING', DELETING = 'DELETING', CREATION_FAILED = 'CREATION_FAILED' }


	/** Represents the output of a DescribeAlertManagerDefinition operation. */
	export interface DescribeAlertManagerDefinitionResponse {

		/** Required */
		alertManagerDefinition: AlertManagerDefinitionDescription;
	}

	/** Represents the output of a DescribeAlertManagerDefinition operation. */
	export interface DescribeAlertManagerDefinitionResponseFormProperties {
	}
	export function CreateDescribeAlertManagerDefinitionResponseFormGroup() {
		return new FormGroup<DescribeAlertManagerDefinitionResponseFormProperties>({
		});

	}


	/** Represents the properties of an alert manager definition. */
	export interface AlertManagerDefinitionDescription {

		/** Required */
		status: AlertManagerDefinitionStatus;

		/** Required */
		data: string;

		/** Required */
		createdAt: Date;

		/** Required */
		modifiedAt: Date;
	}

	/** Represents the properties of an alert manager definition. */
	export interface AlertManagerDefinitionDescriptionFormProperties {

		/** Required */
		data: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		modifiedAt: FormControl<Date | null | undefined>,
	}
	export function CreateAlertManagerDefinitionDescriptionFormGroup() {
		return new FormGroup<AlertManagerDefinitionDescriptionFormProperties>({
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			modifiedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the output of a DescribeLoggingConfiguration operation. */
	export interface DescribeLoggingConfigurationResponse {

		/** Required */
		loggingConfiguration: LoggingConfigurationMetadata;
	}

	/** Represents the output of a DescribeLoggingConfiguration operation. */
	export interface DescribeLoggingConfigurationResponseFormProperties {
	}
	export function CreateDescribeLoggingConfigurationResponseFormGroup() {
		return new FormGroup<DescribeLoggingConfigurationResponseFormProperties>({
		});

	}


	/** Represents the properties of a logging configuration metadata. */
	export interface LoggingConfigurationMetadata {

		/** Required */
		status: LoggingConfigurationStatus;

		/** Required */
		workspace: string;

		/** Required */
		logGroupArn: string;

		/** Required */
		createdAt: Date;

		/** Required */
		modifiedAt: Date;
	}

	/** Represents the properties of a logging configuration metadata. */
	export interface LoggingConfigurationMetadataFormProperties {

		/** Required */
		workspace: FormControl<string | null | undefined>,

		/** Required */
		logGroupArn: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		modifiedAt: FormControl<Date | null | undefined>,
	}
	export function CreateLoggingConfigurationMetadataFormGroup() {
		return new FormGroup<LoggingConfigurationMetadataFormProperties>({
			workspace: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			modifiedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the output of a DescribeRuleGroupsNamespace operation. */
	export interface DescribeRuleGroupsNamespaceResponse {

		/** Required */
		ruleGroupsNamespace: RuleGroupsNamespaceDescription;
	}

	/** Represents the output of a DescribeRuleGroupsNamespace operation. */
	export interface DescribeRuleGroupsNamespaceResponseFormProperties {
	}
	export function CreateDescribeRuleGroupsNamespaceResponseFormGroup() {
		return new FormGroup<DescribeRuleGroupsNamespaceResponseFormProperties>({
		});

	}


	/** Represents a description of the rule groups namespace. */
	export interface RuleGroupsNamespaceDescription {

		/** Required */
		arn: string;

		/** Required */
		name: string;

		/** Required */
		status: RuleGroupsNamespaceStatus;

		/** Required */
		data: string;

		/** Required */
		createdAt: Date;

		/** Required */
		modifiedAt: Date;
		tags?: TagMap;
	}

	/** Represents a description of the rule groups namespace. */
	export interface RuleGroupsNamespaceDescriptionFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		data: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		modifiedAt: FormControl<Date | null | undefined>,
	}
	export function CreateRuleGroupsNamespaceDescriptionFormGroup() {
		return new FormGroup<RuleGroupsNamespaceDescriptionFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			modifiedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the output of a DescribeWorkspace operation. */
	export interface DescribeWorkspaceResponse {

		/** Required */
		workspace: WorkspaceDescription;
	}

	/** Represents the output of a DescribeWorkspace operation. */
	export interface DescribeWorkspaceResponseFormProperties {
	}
	export function CreateDescribeWorkspaceResponseFormGroup() {
		return new FormGroup<DescribeWorkspaceResponseFormProperties>({
		});

	}


	/** Represents the properties of a workspace. */
	export interface WorkspaceDescription {

		/** Required */
		workspaceId: string;
		alias?: string;

		/** Required */
		arn: string;

		/** Required */
		status: WorkspaceStatus;
		prometheusEndpoint?: string;

		/** Required */
		createdAt: Date;
		tags?: TagMap;
	}

	/** Represents the properties of a workspace. */
	export interface WorkspaceDescriptionFormProperties {

		/** Required */
		workspaceId: FormControl<string | null | undefined>,
		alias: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
		prometheusEndpoint: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateWorkspaceDescriptionFormGroup() {
		return new FormGroup<WorkspaceDescriptionFormProperties>({
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			alias: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			prometheusEndpoint: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the output of a ListRuleGroupsNamespaces operation. */
	export interface ListRuleGroupsNamespacesResponse {

		/** Required */
		ruleGroupsNamespaces: Array<RuleGroupsNamespaceSummary>;
		nextToken?: string;
	}

	/** Represents the output of a ListRuleGroupsNamespaces operation. */
	export interface ListRuleGroupsNamespacesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRuleGroupsNamespacesResponseFormGroup() {
		return new FormGroup<ListRuleGroupsNamespacesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a summary of the rule groups namespace. */
	export interface RuleGroupsNamespaceSummary {

		/** Required */
		arn: string;

		/** Required */
		name: string;

		/** Required */
		status: RuleGroupsNamespaceStatus;

		/** Required */
		createdAt: Date;

		/** Required */
		modifiedAt: Date;
		tags?: TagMap;
	}

	/** Represents a summary of the rule groups namespace. */
	export interface RuleGroupsNamespaceSummaryFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		modifiedAt: FormControl<Date | null | undefined>,
	}
	export function CreateRuleGroupsNamespaceSummaryFormGroup() {
		return new FormGroup<RuleGroupsNamespaceSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			modifiedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTagsForResourceResponse {

		/** The list of tags assigned to the resource. */
		tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}


	/** Represents the output of a ListWorkspaces operation. */
	export interface ListWorkspacesResponse {

		/** Required */
		workspaces: Array<WorkspaceSummary>;
		nextToken?: string;
	}

	/** Represents the output of a ListWorkspaces operation. */
	export interface ListWorkspacesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkspacesResponseFormGroup() {
		return new FormGroup<ListWorkspacesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a summary of the properties of a workspace. */
	export interface WorkspaceSummary {

		/** Required */
		workspaceId: string;
		alias?: string;

		/** Required */
		arn: string;

		/** Required */
		status: WorkspaceStatus;

		/** Required */
		createdAt: Date;
		tags?: TagMap;
	}

	/** Represents a summary of the properties of a workspace. */
	export interface WorkspaceSummaryFormProperties {

		/** Required */
		workspaceId: FormControl<string | null | undefined>,
		alias: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateWorkspaceSummaryFormGroup() {
		return new FormGroup<WorkspaceSummaryFormProperties>({
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			alias: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the output of a PutAlertManagerDefinition operation. */
	export interface PutAlertManagerDefinitionResponse {

		/** Required */
		status: AlertManagerDefinitionStatus;
	}

	/** Represents the output of a PutAlertManagerDefinition operation. */
	export interface PutAlertManagerDefinitionResponseFormProperties {
	}
	export function CreatePutAlertManagerDefinitionResponseFormGroup() {
		return new FormGroup<PutAlertManagerDefinitionResponseFormProperties>({
		});

	}


	/** Represents the output of a PutRuleGroupsNamespace operation. */
	export interface PutRuleGroupsNamespaceResponse {

		/** Required */
		name: string;

		/** Required */
		arn: string;

		/** Required */
		status: RuleGroupsNamespaceStatus;
		tags?: TagMap;
	}

	/** Represents the output of a PutRuleGroupsNamespace operation. */
	export interface PutRuleGroupsNamespaceResponseFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreatePutRuleGroupsNamespaceResponseFormGroup() {
		return new FormGroup<PutRuleGroupsNamespaceResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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


	/** Represents the output of an UpdateLoggingConfiguration operation. */
	export interface UpdateLoggingConfigurationResponse {

		/** Required */
		status: LoggingConfigurationStatus;
	}

	/** Represents the output of an UpdateLoggingConfiguration operation. */
	export interface UpdateLoggingConfigurationResponseFormProperties {
	}
	export function CreateUpdateLoggingConfigurationResponseFormGroup() {
		return new FormGroup<UpdateLoggingConfigurationResponseFormProperties>({
		});

	}


	/** Represents the input of a CreateAlertManagerDefinition operation. */
	export interface CreateAlertManagerDefinitionRequest {

		/** Required */
		data: string;
		clientToken?: string;
	}

	/** Represents the input of a CreateAlertManagerDefinition operation. */
	export interface CreateAlertManagerDefinitionRequestFormProperties {

		/** Required */
		data: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAlertManagerDefinitionRequestFormGroup() {
		return new FormGroup<CreateAlertManagerDefinitionRequestFormProperties>({
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a CreateLoggingConfiguration operation. */
	export interface CreateLoggingConfigurationRequest {

		/** Required */
		logGroupArn: string;
		clientToken?: string;
	}

	/** Represents the input of a CreateLoggingConfiguration operation. */
	export interface CreateLoggingConfigurationRequestFormProperties {

		/** Required */
		logGroupArn: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateLoggingConfigurationRequestFormGroup() {
		return new FormGroup<CreateLoggingConfigurationRequestFormProperties>({
			logGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a CreateRuleGroupsNamespace operation. */
	export interface CreateRuleGroupsNamespaceRequest {

		/** Required */
		name: string;

		/** Required */
		data: string;
		clientToken?: string;
		tags?: TagMap;
	}

	/** Represents the input of a CreateRuleGroupsNamespace operation. */
	export interface CreateRuleGroupsNamespaceRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		data: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateRuleGroupsNamespaceRequestFormGroup() {
		return new FormGroup<CreateRuleGroupsNamespaceRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a CreateWorkspace operation. */
	export interface CreateWorkspaceRequest {
		alias?: string;
		clientToken?: string;
		tags?: TagMap;
	}

	/** Represents the input of a CreateWorkspace operation. */
	export interface CreateWorkspaceRequestFormProperties {
		alias: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkspaceRequestFormGroup() {
		return new FormGroup<CreateWorkspaceRequestFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a DeleteAlertManagerDefinition operation. */
	export interface DeleteAlertManagerDefinitionRequest {
	}

	/** Represents the input of a DeleteAlertManagerDefinition operation. */
	export interface DeleteAlertManagerDefinitionRequestFormProperties {
	}
	export function CreateDeleteAlertManagerDefinitionRequestFormGroup() {
		return new FormGroup<DeleteAlertManagerDefinitionRequestFormProperties>({
		});

	}


	/** Represents the input of a DeleteLoggingConfiguration operation. */
	export interface DeleteLoggingConfigurationRequest {
	}

	/** Represents the input of a DeleteLoggingConfiguration operation. */
	export interface DeleteLoggingConfigurationRequestFormProperties {
	}
	export function CreateDeleteLoggingConfigurationRequestFormGroup() {
		return new FormGroup<DeleteLoggingConfigurationRequestFormProperties>({
		});

	}


	/** Represents the input of a DeleteRuleGroupsNamespace operation. */
	export interface DeleteRuleGroupsNamespaceRequest {
	}

	/** Represents the input of a DeleteRuleGroupsNamespace operation. */
	export interface DeleteRuleGroupsNamespaceRequestFormProperties {
	}
	export function CreateDeleteRuleGroupsNamespaceRequestFormGroup() {
		return new FormGroup<DeleteRuleGroupsNamespaceRequestFormProperties>({
		});

	}


	/** Represents the input of a DeleteWorkspace operation. */
	export interface DeleteWorkspaceRequest {
	}

	/** Represents the input of a DeleteWorkspace operation. */
	export interface DeleteWorkspaceRequestFormProperties {
	}
	export function CreateDeleteWorkspaceRequestFormGroup() {
		return new FormGroup<DeleteWorkspaceRequestFormProperties>({
		});

	}


	/** Represents the input of a DescribeAlertManagerDefinition operation. */
	export interface DescribeAlertManagerDefinitionRequest {
	}

	/** Represents the input of a DescribeAlertManagerDefinition operation. */
	export interface DescribeAlertManagerDefinitionRequestFormProperties {
	}
	export function CreateDescribeAlertManagerDefinitionRequestFormGroup() {
		return new FormGroup<DescribeAlertManagerDefinitionRequestFormProperties>({
		});

	}


	/** Represents the input of a DescribeLoggingConfiguration operation. */
	export interface DescribeLoggingConfigurationRequest {
	}

	/** Represents the input of a DescribeLoggingConfiguration operation. */
	export interface DescribeLoggingConfigurationRequestFormProperties {
	}
	export function CreateDescribeLoggingConfigurationRequestFormGroup() {
		return new FormGroup<DescribeLoggingConfigurationRequestFormProperties>({
		});

	}


	/** Represents the input of a DescribeRuleGroupsNamespace operation. */
	export interface DescribeRuleGroupsNamespaceRequest {
	}

	/** Represents the input of a DescribeRuleGroupsNamespace operation. */
	export interface DescribeRuleGroupsNamespaceRequestFormProperties {
	}
	export function CreateDescribeRuleGroupsNamespaceRequestFormGroup() {
		return new FormGroup<DescribeRuleGroupsNamespaceRequestFormProperties>({
		});

	}


	/** Represents the input of a DescribeWorkspace operation. */
	export interface DescribeWorkspaceRequest {
	}

	/** Represents the input of a DescribeWorkspace operation. */
	export interface DescribeWorkspaceRequestFormProperties {
	}
	export function CreateDescribeWorkspaceRequestFormGroup() {
		return new FormGroup<DescribeWorkspaceRequestFormProperties>({
		});

	}


	/** Represents the input of a ListRuleGroupsNamespaces operation. */
	export interface ListRuleGroupsNamespacesRequest {
	}

	/** Represents the input of a ListRuleGroupsNamespaces operation. */
	export interface ListRuleGroupsNamespacesRequestFormProperties {
	}
	export function CreateListRuleGroupsNamespacesRequestFormGroup() {
		return new FormGroup<ListRuleGroupsNamespacesRequestFormProperties>({
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


	/** Represents the input of a ListWorkspaces operation. */
	export interface ListWorkspacesRequest {
	}

	/** Represents the input of a ListWorkspaces operation. */
	export interface ListWorkspacesRequestFormProperties {
	}
	export function CreateListWorkspacesRequestFormGroup() {
		return new FormGroup<ListWorkspacesRequestFormProperties>({
		});

	}


	/** State of a logging configuration. */
	export enum LoggingConfigurationStatusCode { CREATING = 'CREATING', ACTIVE = 'ACTIVE', UPDATING = 'UPDATING', DELETING = 'DELETING', CREATION_FAILED = 'CREATION_FAILED', UPDATE_FAILED = 'UPDATE_FAILED' }


	/** Represents the input of a PutAlertManagerDefinition operation. */
	export interface PutAlertManagerDefinitionRequest {

		/** Required */
		data: string;
		clientToken?: string;
	}

	/** Represents the input of a PutAlertManagerDefinition operation. */
	export interface PutAlertManagerDefinitionRequestFormProperties {

		/** Required */
		data: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreatePutAlertManagerDefinitionRequestFormGroup() {
		return new FormGroup<PutAlertManagerDefinitionRequestFormProperties>({
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a PutRuleGroupsNamespace operation. */
	export interface PutRuleGroupsNamespaceRequest {

		/** Required */
		data: string;
		clientToken?: string;
	}

	/** Represents the input of a PutRuleGroupsNamespace operation. */
	export interface PutRuleGroupsNamespaceRequestFormProperties {

		/** Required */
		data: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreatePutRuleGroupsNamespaceRequestFormGroup() {
		return new FormGroup<PutRuleGroupsNamespaceRequestFormProperties>({
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** State of a namespace. */
	export enum RuleGroupsNamespaceStatusCode { CREATING = 'CREATING', ACTIVE = 'ACTIVE', UPDATING = 'UPDATING', DELETING = 'DELETING', CREATION_FAILED = 'CREATION_FAILED', UPDATE_FAILED = 'UPDATE_FAILED' }

	export interface TagResourceRequest {

		/**
		 * The list of tags assigned to the resource.
		 * Required
		 */
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


	/** Represents the input of an UpdateLoggingConfiguration operation. */
	export interface UpdateLoggingConfigurationRequest {

		/** Required */
		logGroupArn: string;
		clientToken?: string;
	}

	/** Represents the input of an UpdateLoggingConfiguration operation. */
	export interface UpdateLoggingConfigurationRequestFormProperties {

		/** Required */
		logGroupArn: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLoggingConfigurationRequestFormGroup() {
		return new FormGroup<UpdateLoggingConfigurationRequestFormProperties>({
			logGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of an UpdateWorkspaceAlias operation. */
	export interface UpdateWorkspaceAliasRequest {
		alias?: string;
		clientToken?: string;
	}

	/** Represents the input of an UpdateWorkspaceAlias operation. */
	export interface UpdateWorkspaceAliasRequestFormProperties {
		alias: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkspaceAliasRequestFormGroup() {
		return new FormGroup<UpdateWorkspaceAliasRequestFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Create an alert manager definition.
		 * Post workspaces/{workspaceId}/alertmanager/definition
		 * @param {string} workspaceId The ID of the workspace in which to create the alert manager definition.
		 * @return {void} 
		 */
		CreateAlertManagerDefinition(workspaceId: string, requestBody: CreateAlertManagerDefinitionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/alertmanager/definition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an alert manager definition.
		 * Delete workspaces/{workspaceId}/alertmanager/definition
		 * @param {string} workspaceId The ID of the workspace in which to delete the alert manager definition.
		 * @param {string} clientToken Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
		 * @return {void} 
		 */
		DeleteAlertManagerDefinition(workspaceId: string, clientToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/alertmanager/definition&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes an alert manager definition.
		 * Get workspaces/{workspaceId}/alertmanager/definition
		 * @param {string} workspaceId The ID of the workspace to describe.
		 * @return {DescribeAlertManagerDefinitionResponse} Success
		 */
		DescribeAlertManagerDefinition(workspaceId: string): Observable<DescribeAlertManagerDefinitionResponse> {
			return this.http.get<DescribeAlertManagerDefinitionResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/alertmanager/definition', {});
		}

		/**
		 * Update an alert manager definition.
		 * Put workspaces/{workspaceId}/alertmanager/definition
		 * @param {string} workspaceId The ID of the workspace in which to update the alert manager definition.
		 * @return {void} 
		 */
		PutAlertManagerDefinition(workspaceId: string, requestBody: PutAlertManagerDefinitionPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/alertmanager/definition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create logging configuration.
		 * Post workspaces/{workspaceId}/logging
		 * @param {string} workspaceId The ID of the workspace to vend logs to.
		 * @return {void} 
		 */
		CreateLoggingConfiguration(workspaceId: string, requestBody: CreateLoggingConfigurationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/logging', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete logging configuration.
		 * Delete workspaces/{workspaceId}/logging
		 * @param {string} workspaceId The ID of the workspace to vend logs to.
		 * @param {string} clientToken Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
		 * @return {void} 
		 */
		DeleteLoggingConfiguration(workspaceId: string, clientToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/logging&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes logging configuration.
		 * Get workspaces/{workspaceId}/logging
		 * @param {string} workspaceId The ID of the workspace to vend logs to.
		 * @return {DescribeLoggingConfigurationResponse} Success
		 */
		DescribeLoggingConfiguration(workspaceId: string): Observable<DescribeLoggingConfigurationResponse> {
			return this.http.get<DescribeLoggingConfigurationResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/logging', {});
		}

		/**
		 * Update logging configuration.
		 * Put workspaces/{workspaceId}/logging
		 * @param {string} workspaceId The ID of the workspace to vend logs to.
		 * @return {void} 
		 */
		UpdateLoggingConfiguration(workspaceId: string, requestBody: UpdateLoggingConfigurationPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/logging', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a rule group namespace.
		 * Post workspaces/{workspaceId}/rulegroupsnamespaces
		 * @param {string} workspaceId The ID of the workspace in which to create the rule group namespace.
		 * @return {void} 
		 */
		CreateRuleGroupsNamespace(workspaceId: string, requestBody: CreateRuleGroupsNamespacePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/rulegroupsnamespaces', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists rule groups namespaces.
		 * Get workspaces/{workspaceId}/rulegroupsnamespaces
		 * @param {string} workspaceId The ID of the workspace.
		 * @param {string} name Optional filter for rule groups namespace name. Only the rule groups namespace that begin with this value will be returned.
		 * @param {string} nextToken Pagination token to request the next page in a paginated list. This token is obtained from the output of the previous ListRuleGroupsNamespaces request.
		 * @param {number} maxResults Maximum results to return in response (default=100, maximum=1000).
		 * @return {ListRuleGroupsNamespacesResponse} Success
		 */
		ListRuleGroupsNamespaces(workspaceId: string, name: string | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListRuleGroupsNamespacesResponse> {
			return this.http.get<ListRuleGroupsNamespacesResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/rulegroupsnamespaces&name=' + (name == null ? '' : encodeURIComponent(name)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates a new AMP workspace.
		 * Post workspaces
		 * @return {void} 
		 */
		CreateWorkspace(requestBody: CreateWorkspacePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'workspaces', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all AMP workspaces, including workspaces being created or deleted.
		 * Get workspaces
		 * @param {string} nextToken Pagination token to request the next page in a paginated list. This token is obtained from the output of the previous ListWorkspaces request.
		 * @param {string} alias Optional filter for workspace alias. Only the workspaces with aliases that begin with this value will be returned.
		 * @param {number} maxResults Maximum results to return in response (default=100, maximum=1000).
		 * @return {ListWorkspacesResponse} Success
		 */
		ListWorkspaces(nextToken: string | null | undefined, alias: string | null | undefined, maxResults: number | null | undefined): Observable<ListWorkspacesResponse> {
			return this.http.get<ListWorkspacesResponse>(this.baseUri + 'workspaces?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&alias=' + (alias == null ? '' : encodeURIComponent(alias)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Delete a rule groups namespace.
		 * Delete workspaces/{workspaceId}/rulegroupsnamespaces/{name}
		 * @param {string} workspaceId The ID of the workspace to delete rule group definition.
		 * @param {string} name The rule groups namespace name.
		 * @param {string} clientToken Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
		 * @return {void} 
		 */
		DeleteRuleGroupsNamespace(workspaceId: string, name: string, clientToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/rulegroupsnamespaces/' + (name == null ? '' : encodeURIComponent(name)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describe a rule groups namespace.
		 * Get workspaces/{workspaceId}/rulegroupsnamespaces/{name}
		 * @param {string} workspaceId The ID of the workspace to describe.
		 * @param {string} name The rule groups namespace.
		 * @return {DescribeRuleGroupsNamespaceResponse} Success
		 */
		DescribeRuleGroupsNamespace(workspaceId: string, name: string): Observable<DescribeRuleGroupsNamespaceResponse> {
			return this.http.get<DescribeRuleGroupsNamespaceResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/rulegroupsnamespaces/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Update a rule groups namespace.
		 * Put workspaces/{workspaceId}/rulegroupsnamespaces/{name}
		 * @param {string} workspaceId The ID of the workspace in which to update the rule group namespace.
		 * @param {string} name The rule groups namespace name.
		 * @return {void} 
		 */
		PutRuleGroupsNamespace(workspaceId: string, name: string, requestBody: PutRuleGroupsNamespacePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/rulegroupsnamespaces/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an AMP workspace.
		 * Delete workspaces/{workspaceId}
		 * @param {string} workspaceId The ID of the workspace to delete.
		 * @param {string} clientToken Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
		 * @return {void} 
		 */
		DeleteWorkspace(workspaceId: string, clientToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes an existing AMP workspace.
		 * Get workspaces/{workspaceId}
		 * @param {string} workspaceId The ID of the workspace to describe.
		 * @return {DescribeWorkspaceResponse} Success
		 */
		DescribeWorkspace(workspaceId: string): Observable<DescribeWorkspaceResponse> {
			return this.http.get<DescribeWorkspaceResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)), {});
		}

		/**
		 * Lists the tags you have assigned to the resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The ARN of the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Creates tags for the specified resource.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The ARN of the resource.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes tags from the specified resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The ARN of the resource.
		 * @param {Array<string>} tagKeys One or more tag keys
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Updates an AMP workspace alias.
		 * Post workspaces/{workspaceId}/alias
		 * @param {string} workspaceId The ID of the workspace being updated.
		 * @return {void} 
		 */
		UpdateWorkspaceAlias(workspaceId: string, requestBody: UpdateWorkspaceAliasPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/alias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface CreateAlertManagerDefinitionPostBody {

		/**
		 * The alert manager definition data.
		 * Required
		 */
		data: string;

		/**
		 * An identifier used to ensure the idempotency of a write request.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken?: string | null;
	}
	export interface CreateAlertManagerDefinitionPostBodyFormProperties {

		/**
		 * The alert manager definition data.
		 * Required
		 */
		data: FormControl<string | null | undefined>,

		/**
		 * An identifier used to ensure the idempotency of a write request.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAlertManagerDefinitionPostBodyFormGroup() {
		return new FormGroup<CreateAlertManagerDefinitionPostBodyFormProperties>({
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[!-~]+')]),
		});

	}

	export interface PutAlertManagerDefinitionPutBody {

		/**
		 * The alert manager definition data.
		 * Required
		 */
		data: string;

		/**
		 * An identifier used to ensure the idempotency of a write request.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken?: string | null;
	}
	export interface PutAlertManagerDefinitionPutBodyFormProperties {

		/**
		 * The alert manager definition data.
		 * Required
		 */
		data: FormControl<string | null | undefined>,

		/**
		 * An identifier used to ensure the idempotency of a write request.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreatePutAlertManagerDefinitionPutBodyFormGroup() {
		return new FormGroup<PutAlertManagerDefinitionPutBodyFormProperties>({
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[!-~]+')]),
		});

	}

	export interface CreateLoggingConfigurationPostBody {

		/**
		 * The ARN of the CW log group to which the vended log data will be published.
		 * Required
		 */
		logGroupArn: string;

		/**
		 * An identifier used to ensure the idempotency of a write request.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken?: string | null;
	}
	export interface CreateLoggingConfigurationPostBodyFormProperties {

		/**
		 * The ARN of the CW log group to which the vended log data will be published.
		 * Required
		 */
		logGroupArn: FormControl<string | null | undefined>,

		/**
		 * An identifier used to ensure the idempotency of a write request.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateLoggingConfigurationPostBodyFormGroup() {
		return new FormGroup<CreateLoggingConfigurationPostBodyFormProperties>({
			logGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('arn:aws[a-z0-9-]*:logs:[a-z0-9-]+:\d{12}:log-group:[A-Za-z0-9\.\-\_\#/]{1,512}\:\*')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[!-~]+')]),
		});

	}

	export interface UpdateLoggingConfigurationPutBody {

		/**
		 * The ARN of the CW log group to which the vended log data will be published.
		 * Required
		 */
		logGroupArn: string;

		/**
		 * An identifier used to ensure the idempotency of a write request.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken?: string | null;
	}
	export interface UpdateLoggingConfigurationPutBodyFormProperties {

		/**
		 * The ARN of the CW log group to which the vended log data will be published.
		 * Required
		 */
		logGroupArn: FormControl<string | null | undefined>,

		/**
		 * An identifier used to ensure the idempotency of a write request.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLoggingConfigurationPutBodyFormGroup() {
		return new FormGroup<UpdateLoggingConfigurationPutBodyFormProperties>({
			logGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('arn:aws[a-z0-9-]*:logs:[a-z0-9-]+:\d{12}:log-group:[A-Za-z0-9\.\-\_\#/]{1,512}\:\*')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[!-~]+')]),
		});

	}

	export interface CreateRuleGroupsNamespacePostBody {

		/**
		 * The namespace name that the rule group belong to.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		name: string;

		/**
		 * The rule groups namespace data.
		 * Required
		 */
		data: string;

		/**
		 * An identifier used to ensure the idempotency of a write request.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken?: string | null;

		/** The list of tags assigned to the resource. */
		tags?: {[id: string]: string };
	}
	export interface CreateRuleGroupsNamespacePostBodyFormProperties {

		/**
		 * The namespace name that the rule group belong to.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The rule groups namespace data.
		 * Required
		 */
		data: FormControl<string | null | undefined>,

		/**
		 * An identifier used to ensure the idempotency of a write request.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/** The list of tags assigned to the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateRuleGroupsNamespacePostBodyFormGroup() {
		return new FormGroup<CreateRuleGroupsNamespacePostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('.*[0-9A-Za-z][-.0-9A-Z_a-z]*.*')]),
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[!-~]+')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateWorkspacePostBody {

		/**
		 * A user-assigned workspace alias.
		 * Max length: 100
		 * Min length: 1
		 */
		alias?: string | null;

		/**
		 * An identifier used to ensure the idempotency of a write request.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken?: string | null;

		/** The list of tags assigned to the resource. */
		tags?: {[id: string]: string };
	}
	export interface CreateWorkspacePostBodyFormProperties {

		/**
		 * A user-assigned workspace alias.
		 * Max length: 100
		 * Min length: 1
		 */
		alias: FormControl<string | null | undefined>,

		/**
		 * An identifier used to ensure the idempotency of a write request.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/** The list of tags assigned to the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateWorkspacePostBodyFormGroup() {
		return new FormGroup<CreateWorkspacePostBodyFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[!-~]+')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface PutRuleGroupsNamespacePutBody {

		/**
		 * The rule groups namespace data.
		 * Required
		 */
		data: string;

		/**
		 * An identifier used to ensure the idempotency of a write request.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken?: string | null;
	}
	export interface PutRuleGroupsNamespacePutBodyFormProperties {

		/**
		 * The rule groups namespace data.
		 * Required
		 */
		data: FormControl<string | null | undefined>,

		/**
		 * An identifier used to ensure the idempotency of a write request.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreatePutRuleGroupsNamespacePutBodyFormGroup() {
		return new FormGroup<PutRuleGroupsNamespacePutBodyFormProperties>({
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[!-~]+')]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The list of tags assigned to the resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The list of tags assigned to the resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateWorkspaceAliasPostBody {

		/**
		 * A user-assigned workspace alias.
		 * Max length: 100
		 * Min length: 1
		 */
		alias?: string | null;

		/**
		 * An identifier used to ensure the idempotency of a write request.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken?: string | null;
	}
	export interface UpdateWorkspaceAliasPostBodyFormProperties {

		/**
		 * A user-assigned workspace alias.
		 * Max length: 100
		 * Min length: 1
		 */
		alias: FormControl<string | null | undefined>,

		/**
		 * An identifier used to ensure the idempotency of a write request.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkspaceAliasPostBodyFormGroup() {
		return new FormGroup<UpdateWorkspaceAliasPostBodyFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[!-~]+')]),
		});

	}

}

