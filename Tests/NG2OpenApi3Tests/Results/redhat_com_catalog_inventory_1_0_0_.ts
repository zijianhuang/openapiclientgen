import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AppliedInventoriesParametersServicePlan {

		/** The provider specific parameters needed to compute list of used service inventories */
		service_parameters?: string | null;
	}
	export interface AppliedInventoriesParametersServicePlanFormProperties {

		/** The provider specific parameters needed to compute list of used service inventories */
		service_parameters: FormControl<string | null | undefined>,
	}
	export function CreateAppliedInventoriesParametersServicePlanFormGroup() {
		return new FormGroup<AppliedInventoriesParametersServicePlanFormProperties>({
			service_parameters: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CheckAvailabilityTask {
		archived_at?: Date | null;
		child_task_id?: string | null;
		completed_at?: Date | null;
		controller_message_id?: string | null;
		created_at?: Date | null;

		/** UUID of task */
		id?: string | null;
		input?: string | null;
		message?: string | null;
		name?: string | null;
		output?: string | null;
		owner?: string | null;

		/** ID of the resource */
		source_id?: string | null;
		state?: CheckAvailabilityTaskState | null;
		status?: CheckAvailabilityTaskStatus | null;
		target_source_ref?: string | null;
		target_type?: string | null;
		type?: string | null;
		updated_at?: Date | null;
	}
	export interface CheckAvailabilityTaskFormProperties {
		archived_at: FormControl<Date | null | undefined>,
		child_task_id: FormControl<string | null | undefined>,
		completed_at: FormControl<Date | null | undefined>,
		controller_message_id: FormControl<string | null | undefined>,
		created_at: FormControl<Date | null | undefined>,

		/** UUID of task */
		id: FormControl<string | null | undefined>,
		input: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		output: FormControl<string | null | undefined>,
		owner: FormControl<string | null | undefined>,

		/** ID of the resource */
		source_id: FormControl<string | null | undefined>,
		state: FormControl<CheckAvailabilityTaskState | null | undefined>,
		status: FormControl<CheckAvailabilityTaskStatus | null | undefined>,
		target_source_ref: FormControl<string | null | undefined>,
		target_type: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateCheckAvailabilityTaskFormGroup() {
		return new FormGroup<CheckAvailabilityTaskFormProperties>({
			archived_at: new FormControl<Date | null | undefined>(undefined),
			child_task_id: new FormControl<string | null | undefined>(undefined),
			completed_at: new FormControl<Date | null | undefined>(undefined),
			controller_message_id: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			input: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			output: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			source_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			state: new FormControl<CheckAvailabilityTaskState | null | undefined>(undefined),
			status: new FormControl<CheckAvailabilityTaskStatus | null | undefined>(undefined),
			target_source_ref: new FormControl<string | null | undefined>(undefined),
			target_type: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum CheckAvailabilityTaskState { pending = 'pending', queued = 'queued', running = 'running', timedout = 'timedout', completed = 'completed' }

	export enum CheckAvailabilityTaskStatus { ok = 'ok', warn = 'warn', unchanged = 'unchanged', error = 'error' }

	export interface CollectionLinks {
		first?: string | null;
		last?: string | null;
		next?: string | null;
		prev?: string | null;
	}
	export interface CollectionLinksFormProperties {
		first: FormControl<string | null | undefined>,
		last: FormControl<string | null | undefined>,
		next: FormControl<string | null | undefined>,
		prev: FormControl<string | null | undefined>,
	}
	export function CreateCollectionLinksFormGroup() {
		return new FormGroup<CollectionLinksFormProperties>({
			first: new FormControl<string | null | undefined>(undefined),
			last: new FormControl<string | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CollectionMetadata {
		count?: number | null;
		limit?: number | null;
		offset?: number | null;
	}
	export interface CollectionMetadataFormProperties {
		count: FormControl<number | null | undefined>,
		limit: FormControl<number | null | undefined>,
		offset: FormControl<number | null | undefined>,
	}
	export function CreateCollectionMetadataFormGroup() {
		return new FormGroup<CollectionMetadataFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ErrorNotFound {
		ErrorNotFoundErrors?: Array<ErrorNotFoundErrors>;
	}
	export interface ErrorNotFoundFormProperties {
	}
	export function CreateErrorNotFoundFormGroup() {
		return new FormGroup<ErrorNotFoundFormProperties>({
		});

	}

	export interface ErrorNotFoundErrors {
		detail?: string | null;
		status?: string | null;
	}
	export interface ErrorNotFoundErrorsFormProperties {
		detail: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateErrorNotFoundErrorsFormGroup() {
		return new FormGroup<ErrorNotFoundErrorsFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FullRefreshPersisterTask {
		archived_at?: Date | null;
		child_task_id?: string | null;
		completed_at?: Date | null;
		controller_message_id?: string | null;
		created_at?: Date | null;

		/** UUID of task */
		id?: string | null;
		input?: string | null;
		message?: string | null;
		name?: string | null;
		output?: string | null;
		owner?: string | null;

		/** ID of the resource */
		source_id?: string | null;
		state?: CheckAvailabilityTaskState | null;
		status?: CheckAvailabilityTaskStatus | null;
		target_source_ref?: string | null;
		target_type?: string | null;
		type?: string | null;
		updated_at?: Date | null;
	}
	export interface FullRefreshPersisterTaskFormProperties {
		archived_at: FormControl<Date | null | undefined>,
		child_task_id: FormControl<string | null | undefined>,
		completed_at: FormControl<Date | null | undefined>,
		controller_message_id: FormControl<string | null | undefined>,
		created_at: FormControl<Date | null | undefined>,

		/** UUID of task */
		id: FormControl<string | null | undefined>,
		input: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		output: FormControl<string | null | undefined>,
		owner: FormControl<string | null | undefined>,

		/** ID of the resource */
		source_id: FormControl<string | null | undefined>,
		state: FormControl<CheckAvailabilityTaskState | null | undefined>,
		status: FormControl<CheckAvailabilityTaskStatus | null | undefined>,
		target_source_ref: FormControl<string | null | undefined>,
		target_type: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateFullRefreshPersisterTaskFormGroup() {
		return new FormGroup<FullRefreshPersisterTaskFormProperties>({
			archived_at: new FormControl<Date | null | undefined>(undefined),
			child_task_id: new FormControl<string | null | undefined>(undefined),
			completed_at: new FormControl<Date | null | undefined>(undefined),
			controller_message_id: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			input: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			output: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			source_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			state: new FormControl<CheckAvailabilityTaskState | null | undefined>(undefined),
			status: new FormControl<CheckAvailabilityTaskStatus | null | undefined>(undefined),
			target_source_ref: new FormControl<string | null | undefined>(undefined),
			target_type: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface FullRefreshUploadTask {
		archived_at?: Date | null;
		child_task_id?: string | null;
		completed_at?: Date | null;
		controller_message_id?: string | null;
		created_at?: Date | null;

		/** UUID of task */
		id?: string | null;
		input?: string | null;
		message?: string | null;
		name?: string | null;
		output?: string | null;
		owner?: string | null;

		/** ID of the resource */
		source_id?: string | null;
		state?: CheckAvailabilityTaskState | null;
		status?: CheckAvailabilityTaskStatus | null;
		target_source_ref?: string | null;
		target_type?: string | null;
		type?: string | null;
		updated_at?: Date | null;
	}
	export interface FullRefreshUploadTaskFormProperties {
		archived_at: FormControl<Date | null | undefined>,
		child_task_id: FormControl<string | null | undefined>,
		completed_at: FormControl<Date | null | undefined>,
		controller_message_id: FormControl<string | null | undefined>,
		created_at: FormControl<Date | null | undefined>,

		/** UUID of task */
		id: FormControl<string | null | undefined>,
		input: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		output: FormControl<string | null | undefined>,
		owner: FormControl<string | null | undefined>,

		/** ID of the resource */
		source_id: FormControl<string | null | undefined>,
		state: FormControl<CheckAvailabilityTaskState | null | undefined>,
		status: FormControl<CheckAvailabilityTaskStatus | null | undefined>,
		target_source_ref: FormControl<string | null | undefined>,
		target_type: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateFullRefreshUploadTaskFormGroup() {
		return new FormGroup<FullRefreshUploadTaskFormProperties>({
			archived_at: new FormControl<Date | null | undefined>(undefined),
			child_task_id: new FormControl<string | null | undefined>(undefined),
			completed_at: new FormControl<Date | null | undefined>(undefined),
			controller_message_id: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			input: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			output: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			source_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			state: new FormControl<CheckAvailabilityTaskState | null | undefined>(undefined),
			status: new FormControl<CheckAvailabilityTaskStatus | null | undefined>(undefined),
			target_source_ref: new FormControl<string | null | undefined>(undefined),
			target_type: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GraphQLRequest {

		/** If the Query contains several named operations, the operationName controls which one should be executed */
		operationName?: string | null;

		/**
		 * The GraphQL query
		 * Required
		 */
		query: string;

		/** Optional Query variables */
		variables?: string | null;
	}
	export interface GraphQLRequestFormProperties {

		/** If the Query contains several named operations, the operationName controls which one should be executed */
		operationName: FormControl<string | null | undefined>,

		/**
		 * The GraphQL query
		 * Required
		 */
		query: FormControl<string | null | undefined>,

		/** Optional Query variables */
		variables: FormControl<string | null | undefined>,
	}
	export function CreateGraphQLRequestFormGroup() {
		return new FormGroup<GraphQLRequestFormProperties>({
			operationName: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			variables: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GraphQLResponse {

		/** Results from the GraphQL query */
		data?: string | null;

		/** Errors resulting from the GraphQL query */
		errors?: Array<string>;
	}
	export interface GraphQLResponseFormProperties {

		/** Results from the GraphQL query */
		data: FormControl<string | null | undefined>,
	}
	export function CreateGraphQLResponseFormGroup() {
		return new FormGroup<GraphQLResponseFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IncrementalRefreshUploadTask {
		archived_at?: Date | null;
		child_task_id?: string | null;
		completed_at?: Date | null;
		controller_message_id?: string | null;
		created_at?: Date | null;

		/** UUID of task */
		id?: string | null;
		input?: string | null;
		message?: string | null;
		name?: string | null;
		output?: string | null;
		owner?: string | null;

		/** ID of the resource */
		source_id?: string | null;
		state?: CheckAvailabilityTaskState | null;
		status?: CheckAvailabilityTaskStatus | null;
		target_source_ref?: string | null;
		target_type?: string | null;
		type?: string | null;
		updated_at?: Date | null;
	}
	export interface IncrementalRefreshUploadTaskFormProperties {
		archived_at: FormControl<Date | null | undefined>,
		child_task_id: FormControl<string | null | undefined>,
		completed_at: FormControl<Date | null | undefined>,
		controller_message_id: FormControl<string | null | undefined>,
		created_at: FormControl<Date | null | undefined>,

		/** UUID of task */
		id: FormControl<string | null | undefined>,
		input: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		output: FormControl<string | null | undefined>,
		owner: FormControl<string | null | undefined>,

		/** ID of the resource */
		source_id: FormControl<string | null | undefined>,
		state: FormControl<CheckAvailabilityTaskState | null | undefined>,
		status: FormControl<CheckAvailabilityTaskStatus | null | undefined>,
		target_source_ref: FormControl<string | null | undefined>,
		target_type: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateIncrementalRefreshUploadTaskFormGroup() {
		return new FormGroup<IncrementalRefreshUploadTaskFormProperties>({
			archived_at: new FormControl<Date | null | undefined>(undefined),
			child_task_id: new FormControl<string | null | undefined>(undefined),
			completed_at: new FormControl<Date | null | undefined>(undefined),
			controller_message_id: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			input: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			output: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			source_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			state: new FormControl<CheckAvailabilityTaskState | null | undefined>(undefined),
			status: new FormControl<CheckAvailabilityTaskStatus | null | undefined>(undefined),
			target_source_ref: new FormControl<string | null | undefined>(undefined),
			target_type: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface LaunchJobTask {
		archived_at?: Date | null;
		child_task_id?: string | null;
		completed_at?: Date | null;
		controller_message_id?: string | null;
		created_at?: Date | null;

		/** UUID of task */
		id?: string | null;
		input?: string | null;
		message?: string | null;
		name?: string | null;
		output?: string | null;
		owner?: string | null;

		/** ID of the resource */
		source_id?: string | null;
		state?: CheckAvailabilityTaskState | null;
		status?: CheckAvailabilityTaskStatus | null;
		target_source_ref?: string | null;
		target_type?: string | null;
		type?: string | null;
		updated_at?: Date | null;
	}
	export interface LaunchJobTaskFormProperties {
		archived_at: FormControl<Date | null | undefined>,
		child_task_id: FormControl<string | null | undefined>,
		completed_at: FormControl<Date | null | undefined>,
		controller_message_id: FormControl<string | null | undefined>,
		created_at: FormControl<Date | null | undefined>,

		/** UUID of task */
		id: FormControl<string | null | undefined>,
		input: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		output: FormControl<string | null | undefined>,
		owner: FormControl<string | null | undefined>,

		/** ID of the resource */
		source_id: FormControl<string | null | undefined>,
		state: FormControl<CheckAvailabilityTaskState | null | undefined>,
		status: FormControl<CheckAvailabilityTaskStatus | null | undefined>,
		target_source_ref: FormControl<string | null | undefined>,
		target_type: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateLaunchJobTaskFormGroup() {
		return new FormGroup<LaunchJobTaskFormProperties>({
			archived_at: new FormControl<Date | null | undefined>(undefined),
			child_task_id: new FormControl<string | null | undefined>(undefined),
			completed_at: new FormControl<Date | null | undefined>(undefined),
			controller_message_id: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			input: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			output: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			source_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			state: new FormControl<CheckAvailabilityTaskState | null | undefined>(undefined),
			status: new FormControl<CheckAvailabilityTaskStatus | null | undefined>(undefined),
			target_source_ref: new FormControl<string | null | undefined>(undefined),
			target_type: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface OrderParametersServiceOffering {

		/** The provider specific parameters needed to provision this service. This might include namespaces, special keys */
		provider_control_parameters?: string | null;

		/** JSON object with provisioning parameters */
		service_parameters?: string | null;

		/** ID of the resource */
		service_plan_id?: string | null;
	}
	export interface OrderParametersServiceOfferingFormProperties {

		/** The provider specific parameters needed to provision this service. This might include namespaces, special keys */
		provider_control_parameters: FormControl<string | null | undefined>,

		/** JSON object with provisioning parameters */
		service_parameters: FormControl<string | null | undefined>,

		/** ID of the resource */
		service_plan_id: FormControl<string | null | undefined>,
	}
	export function CreateOrderParametersServiceOfferingFormGroup() {
		return new FormGroup<OrderParametersServiceOfferingFormProperties>({
			provider_control_parameters: new FormControl<string | null | undefined>(undefined),
			service_parameters: new FormControl<string | null | undefined>(undefined),
			service_plan_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
		});

	}

	export interface OrderParametersServicePlan {

		/** The provider specific parameters needed to provision this service. This might include namespaces, special keys */
		provider_control_parameters?: string | null;

		/** JSON object with provisioning parameters */
		service_parameters?: string | null;
	}
	export interface OrderParametersServicePlanFormProperties {

		/** The provider specific parameters needed to provision this service. This might include namespaces, special keys */
		provider_control_parameters: FormControl<string | null | undefined>,

		/** JSON object with provisioning parameters */
		service_parameters: FormControl<string | null | undefined>,
	}
	export function CreateOrderParametersServicePlanFormGroup() {
		return new FormGroup<OrderParametersServicePlanFormProperties>({
			provider_control_parameters: new FormControl<string | null | undefined>(undefined),
			service_parameters: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceCredential {
		archived_at?: Date | null;
		created_at?: Date | null;
		description?: string | null;

		/** ID of the resource */
		id?: string | null;
		last_seen_at?: Date | null;
		name?: string | null;

		/** ID of the resource */
		refresh_state_part_id?: string | null;

		/** ID of the resource */
		service_credential_type_id?: string | null;
		source_created_at?: Date | null;

		/** ID of the resource */
		source_id?: string | null;
		source_ref?: string | null;
		source_updated_at?: Date | null;
		type_name?: string | null;
		updated_at?: Date | null;
	}
	export interface ServiceCredentialFormProperties {
		archived_at: FormControl<Date | null | undefined>,
		created_at: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** ID of the resource */
		id: FormControl<string | null | undefined>,
		last_seen_at: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** ID of the resource */
		refresh_state_part_id: FormControl<string | null | undefined>,

		/** ID of the resource */
		service_credential_type_id: FormControl<string | null | undefined>,
		source_created_at: FormControl<Date | null | undefined>,

		/** ID of the resource */
		source_id: FormControl<string | null | undefined>,
		source_ref: FormControl<string | null | undefined>,
		source_updated_at: FormControl<Date | null | undefined>,
		type_name: FormControl<string | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateServiceCredentialFormGroup() {
		return new FormGroup<ServiceCredentialFormProperties>({
			archived_at: new FormControl<Date | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			last_seen_at: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			refresh_state_part_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			service_credential_type_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			source_created_at: new FormControl<Date | null | undefined>(undefined),
			source_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			source_ref: new FormControl<string | null | undefined>(undefined),
			source_updated_at: new FormControl<Date | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ServiceCredentialType {
		archived_at?: Date | null;
		created_at?: Date | null;
		description?: string | null;

		/** ID of the resource */
		id?: string | null;
		kind?: string | null;
		last_seen_at?: Date | null;
		name?: string | null;
		namespace?: string | null;

		/** ID of the resource */
		refresh_state_part_id?: string | null;
		source_created_at?: Date | null;
		source_deleted_at?: Date | null;

		/** ID of the resource */
		source_id?: string | null;
		source_ref?: string | null;
		updated_at?: Date | null;
	}
	export interface ServiceCredentialTypeFormProperties {
		archived_at: FormControl<Date | null | undefined>,
		created_at: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** ID of the resource */
		id: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,
		last_seen_at: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		namespace: FormControl<string | null | undefined>,

		/** ID of the resource */
		refresh_state_part_id: FormControl<string | null | undefined>,
		source_created_at: FormControl<Date | null | undefined>,
		source_deleted_at: FormControl<Date | null | undefined>,

		/** ID of the resource */
		source_id: FormControl<string | null | undefined>,
		source_ref: FormControl<string | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateServiceCredentialTypeFormGroup() {
		return new FormGroup<ServiceCredentialTypeFormProperties>({
			archived_at: new FormControl<Date | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			kind: new FormControl<string | null | undefined>(undefined),
			last_seen_at: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
			refresh_state_part_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			source_created_at: new FormControl<Date | null | undefined>(undefined),
			source_deleted_at: new FormControl<Date | null | undefined>(undefined),
			source_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			source_ref: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ServiceCredentialTypesCollection {
		data?: Array<ServiceCredentialType>;
		links?: CollectionLinks;
		meta?: CollectionMetadata;
	}
	export interface ServiceCredentialTypesCollectionFormProperties {
	}
	export function CreateServiceCredentialTypesCollectionFormGroup() {
		return new FormGroup<ServiceCredentialTypesCollectionFormProperties>({
		});

	}

	export interface ServiceCredentialsCollection {
		data?: Array<ServiceCredential>;
		links?: CollectionLinks;
		meta?: CollectionMetadata;
	}
	export interface ServiceCredentialsCollectionFormProperties {
	}
	export function CreateServiceCredentialsCollectionFormGroup() {
		return new FormGroup<ServiceCredentialsCollectionFormProperties>({
		});

	}

	export interface ServiceInstance {
		archived_at?: Date | null;
		created_at?: Date | null;
		external_url?: string | null;

		/** Extra information about this object in JSON format */
		extra?: string | null;

		/** ID of the resource */
		id?: string | null;
		last_seen_at?: Date | null;
		name?: string | null;

		/** ID of the resource */
		refresh_state_part_id?: string | null;

		/** ID of the resource */
		root_service_instance_id?: string | null;

		/** ID of the resource */
		service_inventory_id?: string | null;

		/** ID of the resource */
		service_offering_id?: string | null;

		/** ID of the resource */
		service_plan_id?: string | null;
		source_created_at?: Date | null;
		source_deleted_at?: Date | null;

		/** ID of the resource */
		source_id?: string | null;
		source_ref?: string | null;
		updated_at?: Date | null;
	}
	export interface ServiceInstanceFormProperties {
		archived_at: FormControl<Date | null | undefined>,
		created_at: FormControl<Date | null | undefined>,
		external_url: FormControl<string | null | undefined>,

		/** Extra information about this object in JSON format */
		extra: FormControl<string | null | undefined>,

		/** ID of the resource */
		id: FormControl<string | null | undefined>,
		last_seen_at: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** ID of the resource */
		refresh_state_part_id: FormControl<string | null | undefined>,

		/** ID of the resource */
		root_service_instance_id: FormControl<string | null | undefined>,

		/** ID of the resource */
		service_inventory_id: FormControl<string | null | undefined>,

		/** ID of the resource */
		service_offering_id: FormControl<string | null | undefined>,

		/** ID of the resource */
		service_plan_id: FormControl<string | null | undefined>,
		source_created_at: FormControl<Date | null | undefined>,
		source_deleted_at: FormControl<Date | null | undefined>,

		/** ID of the resource */
		source_id: FormControl<string | null | undefined>,
		source_ref: FormControl<string | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateServiceInstanceFormGroup() {
		return new FormGroup<ServiceInstanceFormProperties>({
			archived_at: new FormControl<Date | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			external_url: new FormControl<string | null | undefined>(undefined),
			extra: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			last_seen_at: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			refresh_state_part_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			root_service_instance_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			service_inventory_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			service_offering_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			service_plan_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			source_created_at: new FormControl<Date | null | undefined>(undefined),
			source_deleted_at: new FormControl<Date | null | undefined>(undefined),
			source_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			source_ref: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ServiceInstanceNode {
		archived_at?: Date | null;
		created_at?: Date | null;
		extra?: string | null;

		/** ID of the resource */
		id?: string | null;
		last_seen_at?: Date | null;
		name?: string | null;

		/** ID of the resource */
		refresh_state_part_id?: string | null;

		/** ID of the resource */
		root_service_instance_id?: string | null;

		/** ID of the resource */
		service_instance_id?: string | null;

		/** ID of the resource */
		service_inventory_id?: string | null;
		source_created_at?: Date | null;

		/** ID of the resource */
		source_id?: string | null;
		source_ref?: string | null;
		source_updated_at?: Date | null;
		updated_at?: Date | null;
	}
	export interface ServiceInstanceNodeFormProperties {
		archived_at: FormControl<Date | null | undefined>,
		created_at: FormControl<Date | null | undefined>,
		extra: FormControl<string | null | undefined>,

		/** ID of the resource */
		id: FormControl<string | null | undefined>,
		last_seen_at: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** ID of the resource */
		refresh_state_part_id: FormControl<string | null | undefined>,

		/** ID of the resource */
		root_service_instance_id: FormControl<string | null | undefined>,

		/** ID of the resource */
		service_instance_id: FormControl<string | null | undefined>,

		/** ID of the resource */
		service_inventory_id: FormControl<string | null | undefined>,
		source_created_at: FormControl<Date | null | undefined>,

		/** ID of the resource */
		source_id: FormControl<string | null | undefined>,
		source_ref: FormControl<string | null | undefined>,
		source_updated_at: FormControl<Date | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateServiceInstanceNodeFormGroup() {
		return new FormGroup<ServiceInstanceNodeFormProperties>({
			archived_at: new FormControl<Date | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			extra: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			last_seen_at: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			refresh_state_part_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			root_service_instance_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			service_instance_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			service_inventory_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			source_created_at: new FormControl<Date | null | undefined>(undefined),
			source_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			source_ref: new FormControl<string | null | undefined>(undefined),
			source_updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ServiceInstanceNodesCollection {
		data?: Array<ServiceInstanceNode>;
		links?: CollectionLinks;
		meta?: CollectionMetadata;
	}
	export interface ServiceInstanceNodesCollectionFormProperties {
	}
	export function CreateServiceInstanceNodesCollectionFormGroup() {
		return new FormGroup<ServiceInstanceNodesCollectionFormProperties>({
		});

	}

	export interface ServiceInstancesCollection {
		data?: Array<ServiceInstance>;
		links?: CollectionLinks;
		meta?: CollectionMetadata;
	}
	export interface ServiceInstancesCollectionFormProperties {
	}
	export function CreateServiceInstancesCollectionFormGroup() {
		return new FormGroup<ServiceInstancesCollectionFormProperties>({
		});

	}

	export interface ServiceInventoriesCollection {
		data?: Array<ServiceInventory>;
		links?: CollectionLinks;
		meta?: CollectionMetadata;
	}
	export interface ServiceInventoriesCollectionFormProperties {
	}
	export function CreateServiceInventoriesCollectionFormGroup() {
		return new FormGroup<ServiceInventoriesCollectionFormProperties>({
		});

	}

	export interface ServiceInventory {
		archived_at?: Date | null;
		created_at?: Date | null;
		description?: string | null;
		extra?: string | null;

		/** ID of the resource */
		id?: string | null;
		last_seen_at?: Date | null;
		name?: string | null;

		/** ID of the resource */
		refresh_state_part_id?: string | null;
		source_created_at?: Date | null;

		/** ID of the resource */
		source_id?: string | null;
		source_ref?: string | null;
		source_updated_at?: Date | null;
		updated_at?: Date | null;
	}
	export interface ServiceInventoryFormProperties {
		archived_at: FormControl<Date | null | undefined>,
		created_at: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		extra: FormControl<string | null | undefined>,

		/** ID of the resource */
		id: FormControl<string | null | undefined>,
		last_seen_at: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** ID of the resource */
		refresh_state_part_id: FormControl<string | null | undefined>,
		source_created_at: FormControl<Date | null | undefined>,

		/** ID of the resource */
		source_id: FormControl<string | null | undefined>,
		source_ref: FormControl<string | null | undefined>,
		source_updated_at: FormControl<Date | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateServiceInventoryFormGroup() {
		return new FormGroup<ServiceInventoryFormProperties>({
			archived_at: new FormControl<Date | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			extra: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			last_seen_at: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			refresh_state_part_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			source_created_at: new FormControl<Date | null | undefined>(undefined),
			source_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			source_ref: new FormControl<string | null | undefined>(undefined),
			source_updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ServiceOffering {
		archived_at?: Date | null;
		created_at?: Date | null;
		description?: string | null;
		display_name?: string | null;
		distributor?: string | null;
		documentation_url?: string | null;

		/** Extra information about this object in JSON format */
		extra?: string | null;

		/** ID of the resource */
		id?: string | null;
		last_seen_at?: Date | null;
		long_description?: string | null;
		name?: string | null;

		/** ID of the resource */
		refresh_state_part_id?: string | null;

		/** ID of the resource */
		service_inventory_id?: string | null;
		source_created_at?: Date | null;
		source_deleted_at?: Date | null;

		/** ID of the resource */
		source_id?: string | null;

		/** The native reference used by the Source to refer to this object */
		source_ref?: string | null;
		support_url?: string | null;
		updated_at?: Date | null;
	}
	export interface ServiceOfferingFormProperties {
		archived_at: FormControl<Date | null | undefined>,
		created_at: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		display_name: FormControl<string | null | undefined>,
		distributor: FormControl<string | null | undefined>,
		documentation_url: FormControl<string | null | undefined>,

		/** Extra information about this object in JSON format */
		extra: FormControl<string | null | undefined>,

		/** ID of the resource */
		id: FormControl<string | null | undefined>,
		last_seen_at: FormControl<Date | null | undefined>,
		long_description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** ID of the resource */
		refresh_state_part_id: FormControl<string | null | undefined>,

		/** ID of the resource */
		service_inventory_id: FormControl<string | null | undefined>,
		source_created_at: FormControl<Date | null | undefined>,
		source_deleted_at: FormControl<Date | null | undefined>,

		/** ID of the resource */
		source_id: FormControl<string | null | undefined>,

		/** The native reference used by the Source to refer to this object */
		source_ref: FormControl<string | null | undefined>,
		support_url: FormControl<string | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateServiceOfferingFormGroup() {
		return new FormGroup<ServiceOfferingFormProperties>({
			archived_at: new FormControl<Date | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			distributor: new FormControl<string | null | undefined>(undefined),
			documentation_url: new FormControl<string | null | undefined>(undefined),
			extra: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			last_seen_at: new FormControl<Date | null | undefined>(undefined),
			long_description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			refresh_state_part_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			service_inventory_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			source_created_at: new FormControl<Date | null | undefined>(undefined),
			source_deleted_at: new FormControl<Date | null | undefined>(undefined),
			source_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			source_ref: new FormControl<string | null | undefined>(undefined),
			support_url: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ServiceOfferingIcon {
		archived_at?: Date | null;
		created_at?: Date | null;

		/** Raw icon data */
		data?: string | null;

		/** ID of the resource */
		id?: string | null;
		last_seen_at?: Date | null;

		/** ID of the resource */
		refresh_state_part_id?: string | null;

		/** ID of the resource */
		source_id?: string | null;
		source_ref?: string | null;
		updated_at?: Date | null;
	}
	export interface ServiceOfferingIconFormProperties {
		archived_at: FormControl<Date | null | undefined>,
		created_at: FormControl<Date | null | undefined>,

		/** Raw icon data */
		data: FormControl<string | null | undefined>,

		/** ID of the resource */
		id: FormControl<string | null | undefined>,
		last_seen_at: FormControl<Date | null | undefined>,

		/** ID of the resource */
		refresh_state_part_id: FormControl<string | null | undefined>,

		/** ID of the resource */
		source_id: FormControl<string | null | undefined>,
		source_ref: FormControl<string | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateServiceOfferingIconFormGroup() {
		return new FormGroup<ServiceOfferingIconFormProperties>({
			archived_at: new FormControl<Date | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			last_seen_at: new FormControl<Date | null | undefined>(undefined),
			refresh_state_part_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			source_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			source_ref: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ServiceOfferingIconsCollection {
		data?: Array<ServiceOfferingIcon>;
		links?: CollectionLinks;
		meta?: CollectionMetadata;
	}
	export interface ServiceOfferingIconsCollectionFormProperties {
	}
	export function CreateServiceOfferingIconsCollectionFormGroup() {
		return new FormGroup<ServiceOfferingIconsCollectionFormProperties>({
		});

	}

	export interface ServiceOfferingNode {
		archived_at?: Date | null;
		created_at?: Date | null;
		extra?: string | null;

		/** ID of the resource */
		id?: string | null;
		last_seen_at?: Date | null;
		name?: string | null;

		/** ID of the resource */
		refresh_state_part_id?: string | null;

		/** ID of the resource */
		root_service_offering_id?: string | null;

		/** ID of the resource */
		service_inventory_id?: string | null;

		/** ID of the resource */
		service_offering_id?: string | null;
		source_created_at?: Date | null;

		/** ID of the resource */
		source_id?: string | null;
		source_ref?: string | null;
		source_updated_at?: Date | null;
		updated_at?: Date | null;
	}
	export interface ServiceOfferingNodeFormProperties {
		archived_at: FormControl<Date | null | undefined>,
		created_at: FormControl<Date | null | undefined>,
		extra: FormControl<string | null | undefined>,

		/** ID of the resource */
		id: FormControl<string | null | undefined>,
		last_seen_at: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** ID of the resource */
		refresh_state_part_id: FormControl<string | null | undefined>,

		/** ID of the resource */
		root_service_offering_id: FormControl<string | null | undefined>,

		/** ID of the resource */
		service_inventory_id: FormControl<string | null | undefined>,

		/** ID of the resource */
		service_offering_id: FormControl<string | null | undefined>,
		source_created_at: FormControl<Date | null | undefined>,

		/** ID of the resource */
		source_id: FormControl<string | null | undefined>,
		source_ref: FormControl<string | null | undefined>,
		source_updated_at: FormControl<Date | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateServiceOfferingNodeFormGroup() {
		return new FormGroup<ServiceOfferingNodeFormProperties>({
			archived_at: new FormControl<Date | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			extra: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			last_seen_at: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			refresh_state_part_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			root_service_offering_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			service_inventory_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			service_offering_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			source_created_at: new FormControl<Date | null | undefined>(undefined),
			source_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			source_ref: new FormControl<string | null | undefined>(undefined),
			source_updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ServiceOfferingNodesCollection {
		data?: Array<ServiceOfferingNode>;
		links?: CollectionLinks;
		meta?: CollectionMetadata;
	}
	export interface ServiceOfferingNodesCollectionFormProperties {
	}
	export function CreateServiceOfferingNodesCollectionFormGroup() {
		return new FormGroup<ServiceOfferingNodesCollectionFormProperties>({
		});

	}

	export interface ServiceOfferingsCollection {
		data?: Array<ServiceOffering>;
		links?: CollectionLinks;
		meta?: CollectionMetadata;
	}
	export interface ServiceOfferingsCollectionFormProperties {
	}
	export function CreateServiceOfferingsCollectionFormGroup() {
		return new FormGroup<ServiceOfferingsCollectionFormProperties>({
		});

	}

	export interface ServicePlan {
		archived_at?: Date | null;
		create_json_schema?: string | null;
		created_at?: Date | null;
		description?: string | null;

		/** Extra information about this object in JSON format */
		extra?: string | null;

		/** ID of the resource */
		id?: string | null;
		last_seen_at?: Date | null;
		name?: string | null;

		/** ID of the resource */
		refresh_state_part_id?: string | null;
		resource_version?: string | null;

		/** ID of the resource */
		service_offering_id?: string | null;
		source_created_at?: Date | null;
		source_deleted_at?: Date | null;

		/** ID of the resource */
		source_id?: string | null;
		source_ref?: string | null;
		update_json_schema?: string | null;
		updated_at?: Date | null;
	}
	export interface ServicePlanFormProperties {
		archived_at: FormControl<Date | null | undefined>,
		create_json_schema: FormControl<string | null | undefined>,
		created_at: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Extra information about this object in JSON format */
		extra: FormControl<string | null | undefined>,

		/** ID of the resource */
		id: FormControl<string | null | undefined>,
		last_seen_at: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** ID of the resource */
		refresh_state_part_id: FormControl<string | null | undefined>,
		resource_version: FormControl<string | null | undefined>,

		/** ID of the resource */
		service_offering_id: FormControl<string | null | undefined>,
		source_created_at: FormControl<Date | null | undefined>,
		source_deleted_at: FormControl<Date | null | undefined>,

		/** ID of the resource */
		source_id: FormControl<string | null | undefined>,
		source_ref: FormControl<string | null | undefined>,
		update_json_schema: FormControl<string | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateServicePlanFormGroup() {
		return new FormGroup<ServicePlanFormProperties>({
			archived_at: new FormControl<Date | null | undefined>(undefined),
			create_json_schema: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			extra: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			last_seen_at: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			refresh_state_part_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			resource_version: new FormControl<string | null | undefined>(undefined),
			service_offering_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			source_created_at: new FormControl<Date | null | undefined>(undefined),
			source_deleted_at: new FormControl<Date | null | undefined>(undefined),
			source_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			source_ref: new FormControl<string | null | undefined>(undefined),
			update_json_schema: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ServicePlansCollection {
		data?: Array<ServicePlan>;
		links?: CollectionLinks;
		meta?: CollectionMetadata;
	}
	export interface ServicePlansCollectionFormProperties {
	}
	export function CreateServicePlansCollectionFormGroup() {
		return new FormGroup<ServicePlansCollectionFormProperties>({
		});

	}

	export interface Source {
		archived_at?: Date | null;
		availability_message?: string | null;
		availability_status?: string | null;
		cloud_connector_id?: string | null;
		created_at?: Date | null;
		enabled?: boolean | null;

		/** ID of the resource */
		id?: string | null;
		info?: string | null;
		last_available_at?: Date | null;
		last_checked_at?: Date | null;
		last_refresh_message?: string | null;
		last_successful_refresh_at?: Date | null;
		name?: string | null;
		previous_sha?: string | null;
		previous_size?: number | null;
		refresh_finished_at?: Date | null;
		refresh_started_at?: Date | null;
		refresh_state?: string | null;
		refresh_task_id?: string | null;
		uid?: string | null;
		updated_at?: Date | null;
	}
	export interface SourceFormProperties {
		archived_at: FormControl<Date | null | undefined>,
		availability_message: FormControl<string | null | undefined>,
		availability_status: FormControl<string | null | undefined>,
		cloud_connector_id: FormControl<string | null | undefined>,
		created_at: FormControl<Date | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,

		/** ID of the resource */
		id: FormControl<string | null | undefined>,
		info: FormControl<string | null | undefined>,
		last_available_at: FormControl<Date | null | undefined>,
		last_checked_at: FormControl<Date | null | undefined>,
		last_refresh_message: FormControl<string | null | undefined>,
		last_successful_refresh_at: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		previous_sha: FormControl<string | null | undefined>,
		previous_size: FormControl<number | null | undefined>,
		refresh_finished_at: FormControl<Date | null | undefined>,
		refresh_started_at: FormControl<Date | null | undefined>,
		refresh_state: FormControl<string | null | undefined>,
		refresh_task_id: FormControl<string | null | undefined>,
		uid: FormControl<string | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateSourceFormGroup() {
		return new FormGroup<SourceFormProperties>({
			archived_at: new FormControl<Date | null | undefined>(undefined),
			availability_message: new FormControl<string | null | undefined>(undefined),
			availability_status: new FormControl<string | null | undefined>(undefined),
			cloud_connector_id: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			info: new FormControl<string | null | undefined>(undefined),
			last_available_at: new FormControl<Date | null | undefined>(undefined),
			last_checked_at: new FormControl<Date | null | undefined>(undefined),
			last_refresh_message: new FormControl<string | null | undefined>(undefined),
			last_successful_refresh_at: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			previous_sha: new FormControl<string | null | undefined>(undefined),
			previous_size: new FormControl<number | null | undefined>(undefined),
			refresh_finished_at: new FormControl<Date | null | undefined>(undefined),
			refresh_started_at: new FormControl<Date | null | undefined>(undefined),
			refresh_state: new FormControl<string | null | undefined>(undefined),
			refresh_task_id: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface SourcesCollection {
		data?: Array<Source>;
		links?: CollectionLinks;
		meta?: CollectionMetadata;
	}
	export interface SourcesCollectionFormProperties {
	}
	export function CreateSourcesCollectionFormGroup() {
		return new FormGroup<SourcesCollectionFormProperties>({
		});

	}

	export interface Tag {
		tag?: string | null;
	}
	export interface TagFormProperties {
		tag: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagsCollection {
		data?: Array<Tag>;
		links?: CollectionLinks;
		meta?: CollectionMetadata;
	}
	export interface TagsCollectionFormProperties {
	}
	export function CreateTagsCollectionFormGroup() {
		return new FormGroup<TagsCollectionFormProperties>({
		});

	}

	export interface Task {
		archived_at?: Date | null;
		child_task_id?: string | null;
		completed_at?: Date | null;
		controller_message_id?: string | null;
		created_at?: Date | null;

		/** UUID of task */
		id?: string | null;
		input?: string | null;
		message?: string | null;
		name?: string | null;
		output?: string | null;
		owner?: string | null;

		/** ID of the resource */
		source_id?: string | null;
		state?: CheckAvailabilityTaskState | null;
		status?: CheckAvailabilityTaskStatus | null;
		target_source_ref?: string | null;
		target_type?: string | null;
		type?: string | null;
		updated_at?: Date | null;
	}
	export interface TaskFormProperties {
		archived_at: FormControl<Date | null | undefined>,
		child_task_id: FormControl<string | null | undefined>,
		completed_at: FormControl<Date | null | undefined>,
		controller_message_id: FormControl<string | null | undefined>,
		created_at: FormControl<Date | null | undefined>,

		/** UUID of task */
		id: FormControl<string | null | undefined>,
		input: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		output: FormControl<string | null | undefined>,
		owner: FormControl<string | null | undefined>,

		/** ID of the resource */
		source_id: FormControl<string | null | undefined>,
		state: FormControl<CheckAvailabilityTaskState | null | undefined>,
		status: FormControl<CheckAvailabilityTaskStatus | null | undefined>,
		target_source_ref: FormControl<string | null | undefined>,
		target_type: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateTaskFormGroup() {
		return new FormGroup<TaskFormProperties>({
			archived_at: new FormControl<Date | null | undefined>(undefined),
			child_task_id: new FormControl<string | null | undefined>(undefined),
			completed_at: new FormControl<Date | null | undefined>(undefined),
			controller_message_id: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			input: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			output: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			source_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			state: new FormControl<CheckAvailabilityTaskState | null | undefined>(undefined),
			status: new FormControl<CheckAvailabilityTaskStatus | null | undefined>(undefined),
			target_source_ref: new FormControl<string | null | undefined>(undefined),
			target_type: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface TasksCollection {
		data?: Array<Task>;
		links?: CollectionLinks;
		meta?: CollectionMetadata;
	}
	export interface TasksCollectionFormProperties {
	}
	export function CreateTasksCollectionFormGroup() {
		return new FormGroup<TasksCollectionFormProperties>({
		});

	}

	export interface Tenant {
		description?: string | null;
		external_tenant?: string | null;

		/** ID of the resource */
		id?: string | null;
		name?: string | null;
	}
	export interface TenantFormProperties {
		description: FormControl<string | null | undefined>,
		external_tenant: FormControl<string | null | undefined>,

		/** ID of the resource */
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateTenantFormGroup() {
		return new FormGroup<TenantFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			external_tenant: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TowingTask {
		archived_at?: Date | null;
		child_task_id?: string | null;
		completed_at?: Date | null;
		controller_message_id?: string | null;
		created_at?: Date | null;

		/** UUID of task */
		id?: string | null;
		input?: string | null;
		message?: string | null;
		name?: string | null;
		output?: string | null;
		owner?: string | null;

		/** ID of the resource */
		source_id?: string | null;
		state?: CheckAvailabilityTaskState | null;
		status?: CheckAvailabilityTaskStatus | null;
		target_source_ref?: string | null;
		target_type?: string | null;
		type?: string | null;
		updated_at?: Date | null;
	}
	export interface TowingTaskFormProperties {
		archived_at: FormControl<Date | null | undefined>,
		child_task_id: FormControl<string | null | undefined>,
		completed_at: FormControl<Date | null | undefined>,
		controller_message_id: FormControl<string | null | undefined>,
		created_at: FormControl<Date | null | undefined>,

		/** UUID of task */
		id: FormControl<string | null | undefined>,
		input: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		output: FormControl<string | null | undefined>,
		owner: FormControl<string | null | undefined>,

		/** ID of the resource */
		source_id: FormControl<string | null | undefined>,
		state: FormControl<CheckAvailabilityTaskState | null | undefined>,
		status: FormControl<CheckAvailabilityTaskStatus | null | undefined>,
		target_source_ref: FormControl<string | null | undefined>,
		target_type: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateTowingTaskFormGroup() {
		return new FormGroup<TowingTaskFormProperties>({
			archived_at: new FormControl<Date | null | undefined>(undefined),
			child_task_id: new FormControl<string | null | undefined>(undefined),
			completed_at: new FormControl<Date | null | undefined>(undefined),
			controller_message_id: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			input: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			output: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			source_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+$')]),
			state: new FormControl<CheckAvailabilityTaskState | null | undefined>(undefined),
			status: new FormControl<CheckAvailabilityTaskStatus | null | undefined>(undefined),
			target_source_ref: new FormControl<string | null | undefined>(undefined),
			target_type: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Perform a GraphQL Query
		 * Performs a GraphQL Query
		 * Post graphql
		 * @param {GraphQLRequest} requestBody GraphQL Query Request
		 * @return {GraphQLResponse} GraphQL Query Response
		 */
		PostGraphQL(requestBody: GraphQLRequest): Observable<GraphQLResponse> {
			return this.http.post<GraphQLResponse>(this.baseUri + 'graphql', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Return this API document in JSON format
		 * Get openapi.json
		 * @return {string} The API document for this version of the API
		 */
		GetDocumentation(): Observable<string> {
			return this.http.get(this.baseUri + 'openapi.json', { responseType: 'text' });
		}

		/**
		 * List ServiceCredentialTypes
		 * Returns an array of ServiceCredentialType objects
		 * Get service_credential_types
		 * @param {number} limit The numbers of items to return per page.
		 * @param {number} offset The number of items to skip before starting to collect the result set.
		 * @param {string} filter Filter for querying collections.
		 * @param {string} sort_by The list of attribute and order to sort the result set by.
		 * @return {ServiceCredentialTypesCollection} ServiceCredentialTypes collection
		 */
		ListServiceCredentialTypes(limit: number | null | undefined, offset: number | null | undefined, filter: string | null | undefined, sort_by: string | null | undefined): Observable<ServiceCredentialTypesCollection> {
			return this.http.get<ServiceCredentialTypesCollection>(this.baseUri + 'service_credential_types?limit=' + limit + '&offset=' + offset + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)), {});
		}

		/**
		 * Show an existing ServiceCredentialType
		 * Returns a ServiceCredentialType object
		 * Get service_credential_types/{id}
		 * @param {string} id ID of the resource
		 * @return {ServiceCredentialType} ServiceCredentialType info
		 */
		ShowServiceCredentialType(id: string): Observable<ServiceCredentialType> {
			return this.http.get<ServiceCredentialType>(this.baseUri + 'service_credential_types/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * List ServiceCredentials
		 * Returns an array of ServiceCredential objects
		 * Get service_credentials
		 * @param {number} limit The numbers of items to return per page.
		 * @param {number} offset The number of items to skip before starting to collect the result set.
		 * @param {string} filter Filter for querying collections.
		 * @param {string} sort_by The list of attribute and order to sort the result set by.
		 * @return {ServiceCredentialsCollection} ServiceCredentials collection
		 */
		ListServiceCredentials(limit: number | null | undefined, offset: number | null | undefined, filter: string | null | undefined, sort_by: string | null | undefined): Observable<ServiceCredentialsCollection> {
			return this.http.get<ServiceCredentialsCollection>(this.baseUri + 'service_credentials?limit=' + limit + '&offset=' + offset + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)), {});
		}

		/**
		 * Show an existing ServiceCredential
		 * Returns a ServiceCredential object
		 * Get service_credentials/{id}
		 * @param {string} id ID of the resource
		 * @return {ServiceCredential} ServiceCredential info
		 */
		ShowServiceCredential(id: string): Observable<ServiceCredential> {
			return this.http.get<ServiceCredential>(this.baseUri + 'service_credentials/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * List ServiceInstances
		 * Returns an array of ServiceInstance objects
		 * Get service_instances
		 * @param {number} limit The numbers of items to return per page.
		 * @param {number} offset The number of items to skip before starting to collect the result set.
		 * @param {string} filter Filter for querying collections.
		 * @param {string} sort_by The list of attribute and order to sort the result set by.
		 * @return {ServiceInstancesCollection} ServiceInstances collection
		 */
		ListServiceInstances(limit: number | null | undefined, offset: number | null | undefined, filter: string | null | undefined, sort_by: string | null | undefined): Observable<ServiceInstancesCollection> {
			return this.http.get<ServiceInstancesCollection>(this.baseUri + 'service_instances?limit=' + limit + '&offset=' + offset + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)), {});
		}

		/**
		 * Show an existing ServiceInstance
		 * Returns a ServiceInstance object
		 * Get service_instances/{id}
		 * @param {string} id ID of the resource
		 * @return {ServiceInstance} ServiceInstance info
		 */
		ShowServiceInstance(id: string): Observable<ServiceInstance> {
			return this.http.get<ServiceInstance>(this.baseUri + 'service_instances/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * List ServiceInventories
		 * Returns an array of ServiceInventory objects
		 * Get service_inventories
		 * @param {number} limit The numbers of items to return per page.
		 * @param {number} offset The number of items to skip before starting to collect the result set.
		 * @param {string} filter Filter for querying collections.
		 * @param {string} sort_by The list of attribute and order to sort the result set by.
		 * @return {ServiceInventoriesCollection} ServiceInventories collection
		 */
		ListServiceInventories(limit: number | null | undefined, offset: number | null | undefined, filter: string | null | undefined, sort_by: string | null | undefined): Observable<ServiceInventoriesCollection> {
			return this.http.get<ServiceInventoriesCollection>(this.baseUri + 'service_inventories?limit=' + limit + '&offset=' + offset + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)), {});
		}

		/**
		 * Show an existing ServiceInventory
		 * Returns a ServiceInventory object
		 * Get service_inventories/{id}
		 * @param {string} id ID of the resource
		 * @return {ServiceInventory} ServiceInventory info
		 */
		ShowServiceInventory(id: string): Observable<ServiceInventory> {
			return this.http.get<ServiceInventory>(this.baseUri + 'service_inventories/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Tag a ServiceInventory
		 * Tags a ServiceInventory object
		 * Post service_inventories/{id}/tag
		 * @param {string} id ID of the resource
		 * @param {Array<Tag>} requestBody Tag attributes to add
		 * @return {void} 
		 */
		TagServiceInventory(id: string, requestBody: Array<Tag>): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'service_inventories/' + (id == null ? '' : encodeURIComponent(id)) + '/tag', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List Tags for ServiceInventory
		 * Returns an array of Tag objects
		 * Get service_inventories/{id}/tags
		 * @param {number} limit The numbers of items to return per page.
		 * @param {number} offset The number of items to skip before starting to collect the result set.
		 * @param {string} filter Filter for querying collections.
		 * @param {string} sort_by The list of attribute and order to sort the result set by.
		 * @param {string} id ID of the resource
		 * @return {TagsCollection} Tags collection
		 */
		ListServiceInventoryTags(limit: number | null | undefined, offset: number | null | undefined, filter: string | null | undefined, sort_by: string | null | undefined, id: string): Observable<TagsCollection> {
			return this.http.get<TagsCollection>(this.baseUri + 'service_inventories/' + (id == null ? '' : encodeURIComponent(id)) + '/tags?limit=' + limit + '&offset=' + offset + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)), {});
		}

		/**
		 * Untag a ServiceInventory
		 * Untags a ServiceInventory object
		 * Post service_inventories/{id}/untag
		 * @param {string} id ID of the resource
		 * @param {Array<Tag>} requestBody Tag attributes to removed
		 * @return {void} 
		 */
		UntagServiceInventory(id: string, requestBody: Array<Tag>): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'service_inventories/' + (id == null ? '' : encodeURIComponent(id)) + '/untag', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List ServiceOfferingNodes
		 * Returns an array of ServiceOfferingNode objects
		 * Get service_offering_nodes
		 * @param {number} limit The numbers of items to return per page.
		 * @param {number} offset The number of items to skip before starting to collect the result set.
		 * @param {string} filter Filter for querying collections.
		 * @param {string} sort_by The list of attribute and order to sort the result set by.
		 * @return {ServiceOfferingNodesCollection} ServiceOfferingNodes collection
		 */
		ListServiceOfferingNodes(limit: number | null | undefined, offset: number | null | undefined, filter: string | null | undefined, sort_by: string | null | undefined): Observable<ServiceOfferingNodesCollection> {
			return this.http.get<ServiceOfferingNodesCollection>(this.baseUri + 'service_offering_nodes?limit=' + limit + '&offset=' + offset + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)), {});
		}

		/**
		 * Show an existing ServiceOfferingNode
		 * Returns a ServiceOfferingNode object
		 * Get service_offering_nodes/{id}
		 * @param {string} id ID of the resource
		 * @return {ServiceOfferingNode} ServiceOfferingNode info
		 */
		ShowServiceOfferingNode(id: string): Observable<ServiceOfferingNode> {
			return this.http.get<ServiceOfferingNode>(this.baseUri + 'service_offering_nodes/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * List ServiceOfferings
		 * Returns an array of ServiceOffering objects
		 * Get service_offerings
		 * @param {number} limit The numbers of items to return per page.
		 * @param {number} offset The number of items to skip before starting to collect the result set.
		 * @param {string} filter Filter for querying collections.
		 * @param {string} sort_by The list of attribute and order to sort the result set by.
		 * @return {ServiceOfferingsCollection} ServiceOfferings collection
		 */
		ListServiceOfferings(limit: number | null | undefined, offset: number | null | undefined, filter: string | null | undefined, sort_by: string | null | undefined): Observable<ServiceOfferingsCollection> {
			return this.http.get<ServiceOfferingsCollection>(this.baseUri + 'service_offerings?limit=' + limit + '&offset=' + offset + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)), {});
		}

		/**
		 * Show an existing ServiceOffering
		 * Returns a ServiceOffering object
		 * Get service_offerings/{id}
		 * @param {string} id ID of the resource
		 * @return {ServiceOffering} ServiceOffering info
		 */
		ShowServiceOffering(id: string): Observable<ServiceOffering> {
			return this.http.get<ServiceOffering>(this.baseUri + 'service_offerings/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Invokes computing of ServiceInventories tags for given ServiceOffering
		 * Returns an array of inventories tags
		 * Post service_offerings/{id}/applied_inventories_tags
		 * @param {string} id ID of the resource
		 * @param {AppliedInventoriesParametersServicePlan} requestBody Parameters defining input data for computing inventories
		 * @return {Array<Tag>} Returns an array of inventories tags for the computing result
		 */
		AppliedInventoriesTagsForServiceOffering(id: string, requestBody: AppliedInventoriesParametersServicePlan): Observable<Array<Tag>> {
			return this.http.post<Array<Tag>>(this.baseUri + 'service_offerings/' + (id == null ? '' : encodeURIComponent(id)) + '/applied_inventories_tags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Order an existing ServiceOffering
		 * Returns a Task id
		 * Post service_offerings/{id}/order
		 * @param {string} id ID of the resource
		 * @param {OrderParametersServiceOffering} requestBody Order parameters defining the service and provider control
		 * @return {OrderServiceOfferingReturn} Returns a task ID for the order
		 */
		OrderServiceOffering(id: string, requestBody: OrderParametersServiceOffering): Observable<OrderServiceOfferingReturn> {
			return this.http.post<OrderServiceOfferingReturn>(this.baseUri + 'service_offerings/' + (id == null ? '' : encodeURIComponent(id)) + '/order', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List ServiceInstances for ServiceOffering
		 * Returns an array of ServiceInstance objects
		 * Get service_offerings/{id}/service_instances
		 * @param {number} limit The numbers of items to return per page.
		 * @param {number} offset The number of items to skip before starting to collect the result set.
		 * @param {string} filter Filter for querying collections.
		 * @param {string} sort_by The list of attribute and order to sort the result set by.
		 * @param {string} id ID of the resource
		 * @return {ServiceInstancesCollection} ServiceInstances collection
		 */
		ListServiceOfferingServiceInstances(limit: number | null | undefined, offset: number | null | undefined, filter: string | null | undefined, sort_by: string | null | undefined, id: string): Observable<ServiceInstancesCollection> {
			return this.http.get<ServiceInstancesCollection>(this.baseUri + 'service_offerings/' + (id == null ? '' : encodeURIComponent(id)) + '/service_instances?limit=' + limit + '&offset=' + offset + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)), {});
		}

		/**
		 * List ServiceOfferingNodes for ServiceOffering
		 * Returns an array of ServiceOfferingNode objects
		 * Get service_offerings/{id}/service_offering_nodes
		 * @param {number} limit The numbers of items to return per page.
		 * @param {number} offset The number of items to skip before starting to collect the result set.
		 * @param {string} filter Filter for querying collections.
		 * @param {string} sort_by The list of attribute and order to sort the result set by.
		 * @param {string} id ID of the resource
		 * @return {ServiceOfferingNodesCollection} ServiceOfferingNodes collection
		 */
		ListServiceOfferingServiceOfferingNodes(limit: number | null | undefined, offset: number | null | undefined, filter: string | null | undefined, sort_by: string | null | undefined, id: string): Observable<ServiceOfferingNodesCollection> {
			return this.http.get<ServiceOfferingNodesCollection>(this.baseUri + 'service_offerings/' + (id == null ? '' : encodeURIComponent(id)) + '/service_offering_nodes?limit=' + limit + '&offset=' + offset + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)), {});
		}

		/**
		 * List ServicePlans for ServiceOffering
		 * Returns an array of ServicePlan objects
		 * Get service_offerings/{id}/service_plans
		 * @param {number} limit The numbers of items to return per page.
		 * @param {number} offset The number of items to skip before starting to collect the result set.
		 * @param {string} filter Filter for querying collections.
		 * @param {string} sort_by The list of attribute and order to sort the result set by.
		 * @param {string} id ID of the resource
		 * @return {ServicePlansCollection} ServicePlans collection
		 */
		ListServiceOfferingServicePlans(limit: number | null | undefined, offset: number | null | undefined, filter: string | null | undefined, sort_by: string | null | undefined, id: string): Observable<ServicePlansCollection> {
			return this.http.get<ServicePlansCollection>(this.baseUri + 'service_offerings/' + (id == null ? '' : encodeURIComponent(id)) + '/service_plans?limit=' + limit + '&offset=' + offset + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)), {});
		}

		/**
		 * List ServicePlans
		 * Returns an array of ServicePlan objects
		 * Get service_plans
		 * @param {number} limit The numbers of items to return per page.
		 * @param {number} offset The number of items to skip before starting to collect the result set.
		 * @param {string} filter Filter for querying collections.
		 * @param {string} sort_by The list of attribute and order to sort the result set by.
		 * @return {ServicePlansCollection} ServicePlans collection
		 */
		ListServicePlans(limit: number | null | undefined, offset: number | null | undefined, filter: string | null | undefined, sort_by: string | null | undefined): Observable<ServicePlansCollection> {
			return this.http.get<ServicePlansCollection>(this.baseUri + 'service_plans?limit=' + limit + '&offset=' + offset + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)), {});
		}

		/**
		 * Show an existing ServicePlan
		 * Returns a ServicePlan object
		 * Get service_plans/{id}
		 * @param {string} id ID of the resource
		 * @return {ServicePlan} ServicePlan info
		 */
		ShowServicePlan(id: string): Observable<ServicePlan> {
			return this.http.get<ServicePlan>(this.baseUri + 'service_plans/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * List Sources
		 * Returns an array of Source objects
		 * Get sources
		 * @param {number} limit The numbers of items to return per page.
		 * @param {number} offset The number of items to skip before starting to collect the result set.
		 * @param {string} filter Filter for querying collections.
		 * @param {string} sort_by The list of attribute and order to sort the result set by.
		 * @return {SourcesCollection} Sources collection
		 */
		ListSources(limit: number | null | undefined, offset: number | null | undefined, filter: string | null | undefined, sort_by: string | null | undefined): Observable<SourcesCollection> {
			return this.http.get<SourcesCollection>(this.baseUri + 'sources?limit=' + limit + '&offset=' + offset + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)), {});
		}

		/**
		 * Show an existing Source
		 * Returns a Source object
		 * Get sources/{id}
		 * @param {string} id ID of the resource
		 * @return {Source} Source info
		 */
		ShowSource(id: string): Observable<Source> {
			return this.http.get<Source>(this.baseUri + 'sources/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Incremental Refresh an existing Source
		 * Incremental Refresh a source object
		 * Patch sources/{id}/incremental_refresh
		 * @param {string} id ID of the resource
		 * @return {void} 
		 */
		IncrementalRefreshSource(id: string): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'sources/' + (id == null ? '' : encodeURIComponent(id)) + '/incremental_refresh', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Refresh an existing Source
		 * Refresh a source object
		 * Patch sources/{id}/refresh
		 * @param {string} id ID of the resource
		 * @return {void} 
		 */
		RefreshSource(id: string): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'sources/' + (id == null ? '' : encodeURIComponent(id)) + '/refresh', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List ServiceInstances for Source
		 * Returns an array of ServiceInstance objects
		 * Get sources/{id}/service_instances
		 * @param {number} limit The numbers of items to return per page.
		 * @param {number} offset The number of items to skip before starting to collect the result set.
		 * @param {string} filter Filter for querying collections.
		 * @param {string} sort_by The list of attribute and order to sort the result set by.
		 * @param {string} id ID of the resource
		 * @return {ServiceInstancesCollection} ServiceInstances collection
		 */
		ListSourceServiceInstances(limit: number | null | undefined, offset: number | null | undefined, filter: string | null | undefined, sort_by: string | null | undefined, id: string): Observable<ServiceInstancesCollection> {
			return this.http.get<ServiceInstancesCollection>(this.baseUri + 'sources/' + (id == null ? '' : encodeURIComponent(id)) + '/service_instances?limit=' + limit + '&offset=' + offset + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)), {});
		}

		/**
		 * List ServiceInventories for Source
		 * Returns an array of ServiceInventory objects
		 * Get sources/{id}/service_inventories
		 * @param {number} limit The numbers of items to return per page.
		 * @param {number} offset The number of items to skip before starting to collect the result set.
		 * @param {string} filter Filter for querying collections.
		 * @param {string} sort_by The list of attribute and order to sort the result set by.
		 * @param {string} id ID of the resource
		 * @return {ServiceInventoriesCollection} ServiceInventories collection
		 */
		ListSourceServiceInventories(limit: number | null | undefined, offset: number | null | undefined, filter: string | null | undefined, sort_by: string | null | undefined, id: string): Observable<ServiceInventoriesCollection> {
			return this.http.get<ServiceInventoriesCollection>(this.baseUri + 'sources/' + (id == null ? '' : encodeURIComponent(id)) + '/service_inventories?limit=' + limit + '&offset=' + offset + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)), {});
		}

		/**
		 * List ServiceOfferingNodes for Source
		 * Returns an array of ServiceOfferingNode objects
		 * Get sources/{id}/service_offering_nodes
		 * @param {number} limit The numbers of items to return per page.
		 * @param {number} offset The number of items to skip before starting to collect the result set.
		 * @param {string} filter Filter for querying collections.
		 * @param {string} sort_by The list of attribute and order to sort the result set by.
		 * @param {string} id ID of the resource
		 * @return {ServiceOfferingNodesCollection} ServiceOfferingNodes collection
		 */
		ListSourceServiceOfferingNodes(limit: number | null | undefined, offset: number | null | undefined, filter: string | null | undefined, sort_by: string | null | undefined, id: string): Observable<ServiceOfferingNodesCollection> {
			return this.http.get<ServiceOfferingNodesCollection>(this.baseUri + 'sources/' + (id == null ? '' : encodeURIComponent(id)) + '/service_offering_nodes?limit=' + limit + '&offset=' + offset + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)), {});
		}

		/**
		 * List ServiceOfferings for Source
		 * Returns an array of ServiceOffering objects
		 * Get sources/{id}/service_offerings
		 * @param {number} limit The numbers of items to return per page.
		 * @param {number} offset The number of items to skip before starting to collect the result set.
		 * @param {string} filter Filter for querying collections.
		 * @param {string} sort_by The list of attribute and order to sort the result set by.
		 * @param {string} id ID of the resource
		 * @return {ServiceOfferingsCollection} ServiceOfferings collection
		 */
		ListSourceServiceOfferings(limit: number | null | undefined, offset: number | null | undefined, filter: string | null | undefined, sort_by: string | null | undefined, id: string): Observable<ServiceOfferingsCollection> {
			return this.http.get<ServiceOfferingsCollection>(this.baseUri + 'sources/' + (id == null ? '' : encodeURIComponent(id)) + '/service_offerings?limit=' + limit + '&offset=' + offset + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)), {});
		}

		/**
		 * List ServicePlans for Source
		 * Returns an array of ServicePlan objects
		 * Get sources/{id}/service_plans
		 * @param {number} limit The numbers of items to return per page.
		 * @param {number} offset The number of items to skip before starting to collect the result set.
		 * @param {string} filter Filter for querying collections.
		 * @param {string} sort_by The list of attribute and order to sort the result set by.
		 * @param {string} id ID of the resource
		 * @return {ServicePlansCollection} ServicePlans collection
		 */
		ListSourceServicePlans(limit: number | null | undefined, offset: number | null | undefined, filter: string | null | undefined, sort_by: string | null | undefined, id: string): Observable<ServicePlansCollection> {
			return this.http.get<ServicePlansCollection>(this.baseUri + 'sources/' + (id == null ? '' : encodeURIComponent(id)) + '/service_plans?limit=' + limit + '&offset=' + offset + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)), {});
		}

		/**
		 * List Tasks for Source
		 * Returns an array of Task objects
		 * Get sources/{id}/tasks
		 * @param {number} limit The numbers of items to return per page.
		 * @param {number} offset The number of items to skip before starting to collect the result set.
		 * @param {string} filter Filter for querying collections.
		 * @param {string} sort_by The list of attribute and order to sort the result set by.
		 * @param {string} id ID of the resource
		 * @return {TasksCollection} Tasks collection
		 */
		ListSourceTasks(limit: number | null | undefined, offset: number | null | undefined, filter: string | null | undefined, sort_by: string | null | undefined, id: string): Observable<TasksCollection> {
			return this.http.get<TasksCollection>(this.baseUri + 'sources/' + (id == null ? '' : encodeURIComponent(id)) + '/tasks?limit=' + limit + '&offset=' + offset + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)), {});
		}

		/**
		 * List Tags
		 * Returns an array of Tag objects
		 * Get tags
		 * @param {number} limit The numbers of items to return per page.
		 * @param {number} offset The number of items to skip before starting to collect the result set.
		 * @param {string} filter Filter for querying collections.
		 * @param {string} sort_by The list of attribute and order to sort the result set by.
		 * @return {TagsCollection} Tags collection
		 */
		ListTags(limit: number | null | undefined, offset: number | null | undefined, filter: string | null | undefined, sort_by: string | null | undefined): Observable<TagsCollection> {
			return this.http.get<TagsCollection>(this.baseUri + 'tags?limit=' + limit + '&offset=' + offset + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)), {});
		}

		/**
		 * List Tasks
		 * Returns an array of Task objects
		 * Get tasks
		 * @param {number} limit The numbers of items to return per page.
		 * @param {number} offset The number of items to skip before starting to collect the result set.
		 * @param {string} filter Filter for querying collections.
		 * @param {string} sort_by The list of attribute and order to sort the result set by.
		 * @return {TasksCollection} Tasks collection
		 */
		ListTasks(limit: number | null | undefined, offset: number | null | undefined, filter: string | null | undefined, sort_by: string | null | undefined): Observable<TasksCollection> {
			return this.http.get<TasksCollection>(this.baseUri + 'tasks?limit=' + limit + '&offset=' + offset + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)), {});
		}

		/**
		 * Show an existing Task
		 * Returns a Task object
		 * Get tasks/{id}
		 * @param {string} id UUID of task
		 * @return {Task} Task info
		 */
		ShowTask(id: string): Observable<Task> {
			return this.http.get<Task>(this.baseUri + 'tasks/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Update an existing Task
		 * Updates a Task object
		 * Patch tasks/{id}
		 * @param {string} id UUID of task
		 * @param {Task} requestBody Task attributes to update
		 * @return {void} 
		 */
		UpdateTask(id: string, requestBody: Task): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'tasks/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface OrderServiceOfferingReturn {
		task_id?: string | null;
	}
	export interface OrderServiceOfferingReturnFormProperties {
		task_id: FormControl<string | null | undefined>,
	}
	export function CreateOrderServiceOfferingReturnFormGroup() {
		return new FormGroup<OrderServiceOfferingReturnFormProperties>({
			task_id: new FormControl<string | null | undefined>(undefined),
		});

	}

}

