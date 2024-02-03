import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateAccessTokenResponse {

		/** Required */
		secret: string;

		/** Required */
		name: string;

		/** Required */
		expiresTime: Date;

		/** Required */
		accessTokenId: string;
	}
	export interface CreateAccessTokenResponseFormProperties {

		/** Required */
		secret: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		expiresTime: FormControl<Date | null | undefined>,

		/** Required */
		accessTokenId: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccessTokenResponseFormGroup() {
		return new FormGroup<CreateAccessTokenResponseFormProperties>({
			secret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expiresTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			accessTokenId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
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

	export interface CreateDevEnvironmentResponse {

		/** Required */
		spaceName: string;

		/** Required */
		projectName: string;

		/** Required */
		id: string;
	}
	export interface CreateDevEnvironmentResponseFormProperties {

		/** Required */
		spaceName: FormControl<string | null | undefined>,

		/** Required */
		projectName: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateCreateDevEnvironmentResponseFormGroup() {
		return new FormGroup<CreateDevEnvironmentResponseFormProperties>({
			spaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			projectName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about a repository that will be cloned to a Dev Environment. */
	export interface RepositoryInput {

		/** Required */
		repositoryName: string;
		branchName?: string;
	}

	/** Information about a repository that will be cloned to a Dev Environment. */
	export interface RepositoryInputFormProperties {

		/** Required */
		repositoryName: FormControl<string | null | undefined>,
		branchName: FormControl<string | null | undefined>,
	}
	export function CreateRepositoryInputFormGroup() {
		return new FormGroup<RepositoryInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			branchName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the configuration of an integrated development environment (IDE) for a Dev Environment. */
	export interface IdeConfiguration {
		runtime?: string;
		name?: string;
	}

	/** Information about the configuration of an integrated development environment (IDE) for a Dev Environment. */
	export interface IdeConfigurationFormProperties {
		runtime: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateIdeConfigurationFormGroup() {
		return new FormGroup<IdeConfigurationFormProperties>({
			runtime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateProjectResponse {
		spaceName?: string;

		/** Required */
		name: string;
		displayName?: string;
		description?: string;
	}
	export interface CreateProjectResponseFormProperties {
		spaceName: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateProjectResponseFormGroup() {
		return new FormGroup<CreateProjectResponseFormProperties>({
			spaceName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			displayName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSourceRepositoryResponse {

		/** Required */
		spaceName: string;

		/** Required */
		projectName: string;

		/** Required */
		name: string;
		description?: string;
	}
	export interface CreateSourceRepositoryResponseFormProperties {

		/** Required */
		spaceName: FormControl<string | null | undefined>,

		/** Required */
		projectName: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateSourceRepositoryResponseFormGroup() {
		return new FormGroup<CreateSourceRepositoryResponseFormProperties>({
			spaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			projectName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSourceRepositoryBranchResponse {
		ref?: string;
		name?: string;
		lastUpdatedTime?: Date;
		headCommitId?: string;
	}
	export interface CreateSourceRepositoryBranchResponseFormProperties {
		ref: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		lastUpdatedTime: FormControl<Date | null | undefined>,
		headCommitId: FormControl<string | null | undefined>,
	}
	export function CreateCreateSourceRepositoryBranchResponseFormGroup() {
		return new FormGroup<CreateSourceRepositoryBranchResponseFormProperties>({
			ref: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			headCommitId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteAccessTokenResponse {
	}
	export interface DeleteAccessTokenResponseFormProperties {
	}
	export function CreateDeleteAccessTokenResponseFormGroup() {
		return new FormGroup<DeleteAccessTokenResponseFormProperties>({
		});

	}

	export interface DeleteDevEnvironmentResponse {

		/** Required */
		spaceName: string;

		/** Required */
		projectName: string;

		/** Required */
		id: string;
	}
	export interface DeleteDevEnvironmentResponseFormProperties {

		/** Required */
		spaceName: FormControl<string | null | undefined>,

		/** Required */
		projectName: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDevEnvironmentResponseFormGroup() {
		return new FormGroup<DeleteDevEnvironmentResponseFormProperties>({
			spaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			projectName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteProjectResponse {

		/** Required */
		spaceName: string;

		/** Required */
		name: string;
		displayName?: string;
	}
	export interface DeleteProjectResponseFormProperties {

		/** Required */
		spaceName: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteProjectResponseFormGroup() {
		return new FormGroup<DeleteProjectResponseFormProperties>({
			spaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteSourceRepositoryResponse {

		/** Required */
		spaceName: string;

		/** Required */
		projectName: string;

		/** Required */
		name: string;
	}
	export interface DeleteSourceRepositoryResponseFormProperties {

		/** Required */
		spaceName: FormControl<string | null | undefined>,

		/** Required */
		projectName: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSourceRepositoryResponseFormGroup() {
		return new FormGroup<DeleteSourceRepositoryResponseFormProperties>({
			spaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			projectName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteSpaceResponse {

		/** Required */
		name: string;
		displayName?: string;
	}
	export interface DeleteSpaceResponseFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSpaceResponseFormGroup() {
		return new FormGroup<DeleteSpaceResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDevEnvironmentResponse {

		/** Required */
		spaceName: string;

		/** Required */
		projectName: string;

		/** Required */
		id: string;

		/** Required */
		lastUpdatedTime: Date;

		/** Required */
		creatorId: string;

		/** Required */
		status: DevEnvironmentStatus;
		statusReason?: string;

		/** Required */
		repositories: Array<DevEnvironmentRepositorySummary>;
		alias?: string;
		ides?: Array<Ide>;

		/** Required */
		instanceType: InstanceType;

		/** Required */
		inactivityTimeoutMinutes: number;

		/** Required */
		persistentStorage: PersistentStorage;
	}
	export interface GetDevEnvironmentResponseFormProperties {

		/** Required */
		spaceName: FormControl<string | null | undefined>,

		/** Required */
		projectName: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		lastUpdatedTime: FormControl<Date | null | undefined>,

		/** Required */
		creatorId: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<DevEnvironmentStatus | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
		alias: FormControl<string | null | undefined>,

		/** Required */
		instanceType: FormControl<InstanceType | null | undefined>,

		/** Required */
		inactivityTimeoutMinutes: FormControl<number | null | undefined>,
	}
	export function CreateGetDevEnvironmentResponseFormGroup() {
		return new FormGroup<GetDevEnvironmentResponseFormProperties>({
			spaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			projectName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			creatorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<DevEnvironmentStatus | null | undefined>(undefined, [Validators.required]),
			statusReason: new FormControl<string | null | undefined>(undefined),
			alias: new FormControl<string | null | undefined>(undefined),
			instanceType: new FormControl<InstanceType | null | undefined>(undefined, [Validators.required]),
			inactivityTimeoutMinutes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DevEnvironmentStatus { PENDING = 'PENDING', RUNNING = 'RUNNING', STARTING = 'STARTING', STOPPING = 'STOPPING', STOPPED = 'STOPPED', FAILED = 'FAILED', DELETING = 'DELETING', DELETED = 'DELETED' }


	/** Information about the source repsitory for a Dev Environment.  */
	export interface DevEnvironmentRepositorySummary {

		/** Required */
		repositoryName: string;
		branchName?: string;
	}

	/** Information about the source repsitory for a Dev Environment.  */
	export interface DevEnvironmentRepositorySummaryFormProperties {

		/** Required */
		repositoryName: FormControl<string | null | undefined>,
		branchName: FormControl<string | null | undefined>,
	}
	export function CreateDevEnvironmentRepositorySummaryFormGroup() {
		return new FormGroup<DevEnvironmentRepositorySummaryFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			branchName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an integrated development environment (IDE) used in a Dev Environment. */
	export interface Ide {
		runtime?: string;
		name?: string;
	}

	/** Information about an integrated development environment (IDE) used in a Dev Environment. */
	export interface IdeFormProperties {
		runtime: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateIdeFormGroup() {
		return new FormGroup<IdeFormProperties>({
			runtime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InstanceType { 'dev.standard1.small' = 'dev.standard1.small', 'dev.standard1.medium' = 'dev.standard1.medium', 'dev.standard1.large' = 'dev.standard1.large', 'dev.standard1.xlarge' = 'dev.standard1.xlarge' }


	/** Information about the persistent storage for a Dev Environment. */
	export interface PersistentStorage {

		/** Required */
		sizeInGiB: number;
	}

	/** Information about the persistent storage for a Dev Environment. */
	export interface PersistentStorageFormProperties {

		/** Required */
		sizeInGiB: FormControl<number | null | undefined>,
	}
	export function CreatePersistentStorageFormGroup() {
		return new FormGroup<PersistentStorageFormProperties>({
			sizeInGiB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetProjectResponse {
		spaceName?: string;

		/** Required */
		name: string;
		displayName?: string;
		description?: string;
	}
	export interface GetProjectResponseFormProperties {
		spaceName: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateGetProjectResponseFormGroup() {
		return new FormGroup<GetProjectResponseFormProperties>({
			spaceName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			displayName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSourceRepositoryResponse {

		/** Required */
		spaceName: string;

		/** Required */
		projectName: string;

		/** Required */
		name: string;
		description?: string;

		/** Required */
		lastUpdatedTime: Date;

		/** Required */
		createdTime: Date;
	}
	export interface GetSourceRepositoryResponseFormProperties {

		/** Required */
		spaceName: FormControl<string | null | undefined>,

		/** Required */
		projectName: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		lastUpdatedTime: FormControl<Date | null | undefined>,

		/** Required */
		createdTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetSourceRepositoryResponseFormGroup() {
		return new FormGroup<GetSourceRepositoryResponseFormProperties>({
			spaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			projectName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			createdTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSourceRepositoryCloneUrlsResponse {

		/** Required */
		https: string;
	}
	export interface GetSourceRepositoryCloneUrlsResponseFormProperties {

		/** Required */
		https: FormControl<string | null | undefined>,
	}
	export function CreateGetSourceRepositoryCloneUrlsResponseFormGroup() {
		return new FormGroup<GetSourceRepositoryCloneUrlsResponseFormProperties>({
			https: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSpaceResponse {

		/** Required */
		name: string;

		/** Required */
		regionName: string;
		displayName?: string;
		description?: string;
	}
	export interface GetSpaceResponseFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		regionName: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateGetSpaceResponseFormGroup() {
		return new FormGroup<GetSpaceResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			regionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			displayName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSubscriptionResponse {
		subscriptionType?: string;
		awsAccountName?: string;
	}
	export interface GetSubscriptionResponseFormProperties {
		subscriptionType: FormControl<string | null | undefined>,
		awsAccountName: FormControl<string | null | undefined>,
	}
	export function CreateGetSubscriptionResponseFormGroup() {
		return new FormGroup<GetSubscriptionResponseFormProperties>({
			subscriptionType: new FormControl<string | null | undefined>(undefined),
			awsAccountName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetUserDetailsResponse {
		userId?: string;
		userName?: string;
		displayName?: string;
		primaryEmail?: EmailAddress;
		version?: string;
	}
	export interface GetUserDetailsResponseFormProperties {
		userId: FormControl<string | null | undefined>,
		userName: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateGetUserDetailsResponseFormGroup() {
		return new FormGroup<GetUserDetailsResponseFormProperties>({
			userId: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an email address. */
	export interface EmailAddress {
		email?: string;
		verified?: boolean | null;
	}

	/** Information about an email address. */
	export interface EmailAddressFormProperties {
		email: FormControl<string | null | undefined>,
		verified: FormControl<boolean | null | undefined>,
	}
	export function CreateEmailAddressFormGroup() {
		return new FormGroup<EmailAddressFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			verified: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListAccessTokensResponse {

		/** Required */
		items: Array<AccessTokenSummary>;
		nextToken?: string;
	}
	export interface ListAccessTokensResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccessTokensResponseFormGroup() {
		return new FormGroup<ListAccessTokensResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a specified personal access token (PAT). */
	export interface AccessTokenSummary {

		/** Required */
		id: string;

		/** Required */
		name: string;
		expiresTime?: Date;
	}

	/** Information about a specified personal access token (PAT). */
	export interface AccessTokenSummaryFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		expiresTime: FormControl<Date | null | undefined>,
	}
	export function CreateAccessTokenSummaryFormGroup() {
		return new FormGroup<AccessTokenSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expiresTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListDevEnvironmentSessionsResponse {

		/** Required */
		items: Array<DevEnvironmentSessionSummary>;
		nextToken?: string;
	}
	export interface ListDevEnvironmentSessionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDevEnvironmentSessionsResponseFormGroup() {
		return new FormGroup<ListDevEnvironmentSessionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about active sessions for a Dev Environment. */
	export interface DevEnvironmentSessionSummary {

		/** Required */
		spaceName: string;

		/** Required */
		projectName: string;

		/** Required */
		devEnvironmentId: string;

		/** Required */
		startedTime: Date;

		/** Required */
		id: string;
	}

	/** Information about active sessions for a Dev Environment. */
	export interface DevEnvironmentSessionSummaryFormProperties {

		/** Required */
		spaceName: FormControl<string | null | undefined>,

		/** Required */
		projectName: FormControl<string | null | undefined>,

		/** Required */
		devEnvironmentId: FormControl<string | null | undefined>,

		/** Required */
		startedTime: FormControl<Date | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDevEnvironmentSessionSummaryFormGroup() {
		return new FormGroup<DevEnvironmentSessionSummaryFormProperties>({
			spaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			projectName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			devEnvironmentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListDevEnvironmentsResponse {

		/** Required */
		items: Array<DevEnvironmentSummary>;
		nextToken?: string;
	}
	export interface ListDevEnvironmentsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDevEnvironmentsResponseFormGroup() {
		return new FormGroup<ListDevEnvironmentsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a Dev Environment.  */
	export interface DevEnvironmentSummary {
		spaceName?: string;
		projectName?: string;

		/** Required */
		id: string;

		/** Required */
		lastUpdatedTime: Date;

		/** Required */
		creatorId: string;

		/** Required */
		status: DevEnvironmentStatus;
		statusReason?: string;

		/** Required */
		repositories: Array<DevEnvironmentRepositorySummary>;
		alias?: string;
		ides?: Array<Ide>;

		/** Required */
		instanceType: InstanceType;

		/** Required */
		inactivityTimeoutMinutes: number;

		/** Required */
		persistentStorage: PersistentStorage;
	}

	/** Information about a Dev Environment.  */
	export interface DevEnvironmentSummaryFormProperties {
		spaceName: FormControl<string | null | undefined>,
		projectName: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		lastUpdatedTime: FormControl<Date | null | undefined>,

		/** Required */
		creatorId: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<DevEnvironmentStatus | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
		alias: FormControl<string | null | undefined>,

		/** Required */
		instanceType: FormControl<InstanceType | null | undefined>,

		/** Required */
		inactivityTimeoutMinutes: FormControl<number | null | undefined>,
	}
	export function CreateDevEnvironmentSummaryFormGroup() {
		return new FormGroup<DevEnvironmentSummaryFormProperties>({
			spaceName: new FormControl<string | null | undefined>(undefined),
			projectName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			creatorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<DevEnvironmentStatus | null | undefined>(undefined, [Validators.required]),
			statusReason: new FormControl<string | null | undefined>(undefined),
			alias: new FormControl<string | null | undefined>(undefined),
			instanceType: new FormControl<InstanceType | null | undefined>(undefined, [Validators.required]),
			inactivityTimeoutMinutes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about a filter used to limit results of a query. */
	export interface Filter {

		/** Required */
		key: string;

		/** Required */
		values: Array<string>;
		comparisonOperator?: string;
	}

	/** Information about a filter used to limit results of a query. */
	export interface FilterFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,
		comparisonOperator: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			comparisonOperator: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEventLogsResponse {
		nextToken?: string;

		/** Required */
		items: Array<EventLogEntry>;
	}
	export interface ListEventLogsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEventLogsResponseFormGroup() {
		return new FormGroup<ListEventLogsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an entry in an event log of Amazon CodeCatalyst activity. */
	export interface EventLogEntry {

		/** Required */
		id: string;

		/** Required */
		eventName: string;

		/** Required */
		eventType: string;

		/** Required */
		eventCategory: string;

		/** Required */
		eventSource: string;

		/** Required */
		eventTime: Date;

		/** Required */
		operationType: OperationType;

		/** Required */
		userIdentity: UserIdentity;
		projectInformation?: ProjectInformation;
		requestId?: string;
		requestPayload?: EventPayload;
		responsePayload?: EventPayload;
		errorCode?: string;
		sourceIpAddress?: string;
		userAgent?: string;
	}

	/** Information about an entry in an event log of Amazon CodeCatalyst activity. */
	export interface EventLogEntryFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		eventName: FormControl<string | null | undefined>,

		/** Required */
		eventType: FormControl<string | null | undefined>,

		/** Required */
		eventCategory: FormControl<string | null | undefined>,

		/** Required */
		eventSource: FormControl<string | null | undefined>,

		/** Required */
		eventTime: FormControl<Date | null | undefined>,

		/** Required */
		operationType: FormControl<OperationType | null | undefined>,
		requestId: FormControl<string | null | undefined>,
		errorCode: FormControl<string | null | undefined>,
		sourceIpAddress: FormControl<string | null | undefined>,
		userAgent: FormControl<string | null | undefined>,
	}
	export function CreateEventLogEntryFormGroup() {
		return new FormGroup<EventLogEntryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventCategory: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventSource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			operationType: new FormControl<OperationType | null | undefined>(undefined, [Validators.required]),
			requestId: new FormControl<string | null | undefined>(undefined),
			errorCode: new FormControl<string | null | undefined>(undefined),
			sourceIpAddress: new FormControl<string | null | undefined>(undefined),
			userAgent: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OperationType { READONLY = 'READONLY', MUTATION = 'MUTATION' }


	/** Information about a user whose activity is recorded in an event for a space. */
	export interface UserIdentity {

		/** Required */
		userType: UserType;

		/** Required */
		principalId: string;
		userName?: string;
		awsAccountId?: string;
	}

	/** Information about a user whose activity is recorded in an event for a space. */
	export interface UserIdentityFormProperties {

		/** Required */
		userType: FormControl<UserType | null | undefined>,

		/** Required */
		principalId: FormControl<string | null | undefined>,
		userName: FormControl<string | null | undefined>,
		awsAccountId: FormControl<string | null | undefined>,
	}
	export function CreateUserIdentityFormGroup() {
		return new FormGroup<UserIdentityFormProperties>({
			userType: new FormControl<UserType | null | undefined>(undefined, [Validators.required]),
			principalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userName: new FormControl<string | null | undefined>(undefined),
			awsAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UserType { USER = 'USER', AWS_ACCOUNT = 'AWS_ACCOUNT', UNKNOWN = 'UNKNOWN' }


	/** Information about a project in a space. */
	export interface ProjectInformation {
		name?: string;
		projectId?: string;
	}

	/** Information about a project in a space. */
	export interface ProjectInformationFormProperties {
		name: FormControl<string | null | undefined>,
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateProjectInformationFormGroup() {
		return new FormGroup<ProjectInformationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the payload of an event recording Amazon CodeCatalyst activity. */
	export interface EventPayload {
		contentType?: string;
		data?: string;
	}

	/** Information about the payload of an event recording Amazon CodeCatalyst activity. */
	export interface EventPayloadFormProperties {
		contentType: FormControl<string | null | undefined>,
		data: FormControl<string | null | undefined>,
	}
	export function CreateEventPayloadFormGroup() {
		return new FormGroup<EventPayloadFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProjectsResponse {
		nextToken?: string;
		items?: Array<ProjectSummary>;
	}
	export interface ListProjectsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProjectsResponseFormGroup() {
		return new FormGroup<ListProjectsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a project. */
	export interface ProjectSummary {

		/** Required */
		name: string;
		displayName?: string;
		description?: string;
	}

	/** Information about a project. */
	export interface ProjectSummaryFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateProjectSummaryFormGroup() {
		return new FormGroup<ProjectSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			displayName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** nformation about the filter used to narrow the results returned in a list of projects. */
	export interface ProjectListFilter {

		/** Required */
		key: FilterKey;

		/** Required */
		values: Array<string>;
		comparisonOperator?: ComparisonOperator;
	}

	/** nformation about the filter used to narrow the results returned in a list of projects. */
	export interface ProjectListFilterFormProperties {

		/** Required */
		key: FormControl<FilterKey | null | undefined>,
		comparisonOperator: FormControl<ComparisonOperator | null | undefined>,
	}
	export function CreateProjectListFilterFormGroup() {
		return new FormGroup<ProjectListFilterFormProperties>({
			key: new FormControl<FilterKey | null | undefined>(undefined, [Validators.required]),
			comparisonOperator: new FormControl<ComparisonOperator | null | undefined>(undefined),
		});

	}

	export enum FilterKey { hasAccessTo = 'hasAccessTo' }

	export enum ComparisonOperator { EQ = 'EQ', GT = 'GT', GE = 'GE', LT = 'LT', LE = 'LE' }

	export interface ListSourceRepositoriesResponse {
		items?: Array<ListSourceRepositoriesItem>;
		nextToken?: string;
	}
	export interface ListSourceRepositoriesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSourceRepositoriesResponseFormGroup() {
		return new FormGroup<ListSourceRepositoriesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a source repository returned in a list of source repositories. */
	export interface ListSourceRepositoriesItem {

		/** Required */
		id: string;

		/** Required */
		name: string;
		description?: string;

		/** Required */
		lastUpdatedTime: Date;

		/** Required */
		createdTime: Date;
	}

	/** Information about a source repository returned in a list of source repositories. */
	export interface ListSourceRepositoriesItemFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		lastUpdatedTime: FormControl<Date | null | undefined>,

		/** Required */
		createdTime: FormControl<Date | null | undefined>,
	}
	export function CreateListSourceRepositoriesItemFormGroup() {
		return new FormGroup<ListSourceRepositoriesItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			createdTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListSourceRepositoryBranchesResponse {
		nextToken?: string;

		/** Required */
		items: Array<ListSourceRepositoryBranchesItem>;
	}
	export interface ListSourceRepositoryBranchesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSourceRepositoryBranchesResponseFormGroup() {
		return new FormGroup<ListSourceRepositoryBranchesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a branch of a source repository returned in a list of branches. */
	export interface ListSourceRepositoryBranchesItem {
		ref?: string;
		name?: string;
		lastUpdatedTime?: Date;
		headCommitId?: string;
	}

	/** Information about a branch of a source repository returned in a list of branches. */
	export interface ListSourceRepositoryBranchesItemFormProperties {
		ref: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		lastUpdatedTime: FormControl<Date | null | undefined>,
		headCommitId: FormControl<string | null | undefined>,
	}
	export function CreateListSourceRepositoryBranchesItemFormGroup() {
		return new FormGroup<ListSourceRepositoryBranchesItemFormProperties>({
			ref: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			headCommitId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSpacesResponse {
		nextToken?: string;
		items?: Array<SpaceSummary>;
	}
	export interface ListSpacesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSpacesResponseFormGroup() {
		return new FormGroup<ListSpacesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an space. */
	export interface SpaceSummary {

		/** Required */
		name: string;

		/** Required */
		regionName: string;
		displayName?: string;
		description?: string;
	}

	/** Information about an space. */
	export interface SpaceSummaryFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		regionName: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateSpaceSummaryFormGroup() {
		return new FormGroup<SpaceSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			regionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			displayName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartDevEnvironmentResponse {

		/** Required */
		spaceName: string;

		/** Required */
		projectName: string;

		/** Required */
		id: string;

		/** Required */
		status: DevEnvironmentStatus;
	}
	export interface StartDevEnvironmentResponseFormProperties {

		/** Required */
		spaceName: FormControl<string | null | undefined>,

		/** Required */
		projectName: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<DevEnvironmentStatus | null | undefined>,
	}
	export function CreateStartDevEnvironmentResponseFormGroup() {
		return new FormGroup<StartDevEnvironmentResponseFormProperties>({
			spaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			projectName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<DevEnvironmentStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartDevEnvironmentSessionResponse {

		/**
		 * Information about connection details for a Dev Environment.
		 * Required
		 */
		accessDetails: DevEnvironmentAccessDetails;
		sessionId?: string;

		/** Required */
		spaceName: string;

		/** Required */
		projectName: string;

		/** Required */
		id: string;
	}
	export interface StartDevEnvironmentSessionResponseFormProperties {
		sessionId: FormControl<string | null | undefined>,

		/** Required */
		spaceName: FormControl<string | null | undefined>,

		/** Required */
		projectName: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateStartDevEnvironmentSessionResponseFormGroup() {
		return new FormGroup<StartDevEnvironmentSessionResponseFormProperties>({
			sessionId: new FormControl<string | null | undefined>(undefined),
			spaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			projectName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about connection details for a Dev Environment. */
	export interface DevEnvironmentAccessDetails {

		/** Required */
		streamUrl: string;

		/** Required */
		tokenValue: string;
	}

	/** Information about connection details for a Dev Environment. */
	export interface DevEnvironmentAccessDetailsFormProperties {

		/** Required */
		streamUrl: FormControl<string | null | undefined>,

		/** Required */
		tokenValue: FormControl<string | null | undefined>,
	}
	export function CreateDevEnvironmentAccessDetailsFormGroup() {
		return new FormGroup<DevEnvironmentAccessDetailsFormProperties>({
			streamUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tokenValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DevEnvironmentSessionType { SSM = 'SSM', SSH = 'SSH' }


	/** Information about the commands that will be run on a Dev Environment when an SSH session begins. */
	export interface ExecuteCommandSessionConfiguration {

		/** Required */
		command: string;
		arguments?: Array<string>;
	}

	/** Information about the commands that will be run on a Dev Environment when an SSH session begins. */
	export interface ExecuteCommandSessionConfigurationFormProperties {

		/** Required */
		command: FormControl<string | null | undefined>,
	}
	export function CreateExecuteCommandSessionConfigurationFormGroup() {
		return new FormGroup<ExecuteCommandSessionConfigurationFormProperties>({
			command: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopDevEnvironmentResponse {

		/** Required */
		spaceName: string;

		/** Required */
		projectName: string;

		/** Required */
		id: string;

		/** Required */
		status: DevEnvironmentStatus;
	}
	export interface StopDevEnvironmentResponseFormProperties {

		/** Required */
		spaceName: FormControl<string | null | undefined>,

		/** Required */
		projectName: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<DevEnvironmentStatus | null | undefined>,
	}
	export function CreateStopDevEnvironmentResponseFormGroup() {
		return new FormGroup<StopDevEnvironmentResponseFormProperties>({
			spaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			projectName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<DevEnvironmentStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopDevEnvironmentSessionResponse {

		/** Required */
		spaceName: string;

		/** Required */
		projectName: string;

		/** Required */
		id: string;

		/** Required */
		sessionId: string;
	}
	export interface StopDevEnvironmentSessionResponseFormProperties {

		/** Required */
		spaceName: FormControl<string | null | undefined>,

		/** Required */
		projectName: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		sessionId: FormControl<string | null | undefined>,
	}
	export function CreateStopDevEnvironmentSessionResponseFormGroup() {
		return new FormGroup<StopDevEnvironmentSessionResponseFormProperties>({
			spaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			projectName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sessionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateDevEnvironmentResponse {

		/** Required */
		id: string;

		/** Required */
		spaceName: string;

		/** Required */
		projectName: string;
		alias?: string;
		ides?: Array<IdeConfiguration>;
		instanceType?: InstanceType;
		inactivityTimeoutMinutes?: number | null;
		clientToken?: string;
	}
	export interface UpdateDevEnvironmentResponseFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		spaceName: FormControl<string | null | undefined>,

		/** Required */
		projectName: FormControl<string | null | undefined>,
		alias: FormControl<string | null | undefined>,
		instanceType: FormControl<InstanceType | null | undefined>,
		inactivityTimeoutMinutes: FormControl<number | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDevEnvironmentResponseFormGroup() {
		return new FormGroup<UpdateDevEnvironmentResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			spaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			projectName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			alias: new FormControl<string | null | undefined>(undefined),
			instanceType: new FormControl<InstanceType | null | undefined>(undefined),
			inactivityTimeoutMinutes: new FormControl<number | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateProjectResponse {
		spaceName?: string;
		name?: string;
		displayName?: string;
		description?: string;
	}
	export interface UpdateProjectResponseFormProperties {
		spaceName: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProjectResponseFormGroup() {
		return new FormGroup<UpdateProjectResponseFormProperties>({
			spaceName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSpaceResponse {
		name?: string;
		displayName?: string;
		description?: string;
	}
	export interface UpdateSpaceResponseFormProperties {
		name: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSpaceResponseFormGroup() {
		return new FormGroup<UpdateSpaceResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VerifySessionResponse {
		identity?: string;
	}
	export interface VerifySessionResponseFormProperties {
		identity: FormControl<string | null | undefined>,
	}
	export function CreateVerifySessionResponseFormGroup() {
		return new FormGroup<VerifySessionResponseFormProperties>({
			identity: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAccessTokenRequest {

		/** Required */
		name: string;
		expiresTime?: Date;
	}
	export interface CreateAccessTokenRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		expiresTime: FormControl<Date | null | undefined>,
	}
	export function CreateCreateAccessTokenRequestFormGroup() {
		return new FormGroup<CreateAccessTokenRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expiresTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about the configuration of persistent storage for a Dev Environment.  */
	export interface PersistentStorageConfiguration {

		/** Required */
		sizeInGiB: number;
	}

	/** Information about the configuration of persistent storage for a Dev Environment.  */
	export interface PersistentStorageConfigurationFormProperties {

		/** Required */
		sizeInGiB: FormControl<number | null | undefined>,
	}
	export function CreatePersistentStorageConfigurationFormGroup() {
		return new FormGroup<PersistentStorageConfigurationFormProperties>({
			sizeInGiB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDevEnvironmentRequest {
		repositories?: Array<RepositoryInput>;
		clientToken?: string;
		alias?: string;
		ides?: Array<IdeConfiguration>;

		/** Required */
		instanceType: InstanceType;
		inactivityTimeoutMinutes?: number | null;

		/** Required */
		persistentStorage: PersistentStorageConfiguration;
	}
	export interface CreateDevEnvironmentRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
		alias: FormControl<string | null | undefined>,

		/** Required */
		instanceType: FormControl<InstanceType | null | undefined>,
		inactivityTimeoutMinutes: FormControl<number | null | undefined>,
	}
	export function CreateCreateDevEnvironmentRequestFormGroup() {
		return new FormGroup<CreateDevEnvironmentRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			alias: new FormControl<string | null | undefined>(undefined),
			instanceType: new FormControl<InstanceType | null | undefined>(undefined, [Validators.required]),
			inactivityTimeoutMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateProjectRequest {

		/** Required */
		displayName: string;
		description?: string;
	}
	export interface CreateProjectRequestFormProperties {

		/** Required */
		displayName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateProjectRequestFormGroup() {
		return new FormGroup<CreateProjectRequestFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSourceRepositoryBranchRequest {
		headCommitId?: string;
	}
	export interface CreateSourceRepositoryBranchRequestFormProperties {
		headCommitId: FormControl<string | null | undefined>,
	}
	export function CreateCreateSourceRepositoryBranchRequestFormGroup() {
		return new FormGroup<CreateSourceRepositoryBranchRequestFormProperties>({
			headCommitId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSourceRepositoryRequest {
		description?: string;
	}
	export interface CreateSourceRepositoryRequestFormProperties {
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateSourceRepositoryRequestFormGroup() {
		return new FormGroup<CreateSourceRepositoryRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteAccessTokenRequest {
	}
	export interface DeleteAccessTokenRequestFormProperties {
	}
	export function CreateDeleteAccessTokenRequestFormGroup() {
		return new FormGroup<DeleteAccessTokenRequestFormProperties>({
		});

	}

	export interface DeleteDevEnvironmentRequest {
	}
	export interface DeleteDevEnvironmentRequestFormProperties {
	}
	export function CreateDeleteDevEnvironmentRequestFormGroup() {
		return new FormGroup<DeleteDevEnvironmentRequestFormProperties>({
		});

	}

	export interface DeleteProjectRequest {
	}
	export interface DeleteProjectRequestFormProperties {
	}
	export function CreateDeleteProjectRequestFormGroup() {
		return new FormGroup<DeleteProjectRequestFormProperties>({
		});

	}

	export interface DeleteSourceRepositoryRequest {
	}
	export interface DeleteSourceRepositoryRequestFormProperties {
	}
	export function CreateDeleteSourceRepositoryRequestFormGroup() {
		return new FormGroup<DeleteSourceRepositoryRequestFormProperties>({
		});

	}

	export interface DeleteSpaceRequest {
	}
	export interface DeleteSpaceRequestFormProperties {
	}
	export function CreateDeleteSpaceRequestFormGroup() {
		return new FormGroup<DeleteSpaceRequestFormProperties>({
		});

	}


	/** Information about the configuration of a Dev Environment session. */
	export interface DevEnvironmentSessionConfiguration {

		/** Required */
		sessionType: DevEnvironmentSessionType;
		executeCommandSessionConfiguration?: ExecuteCommandSessionConfiguration;
	}

	/** Information about the configuration of a Dev Environment session. */
	export interface DevEnvironmentSessionConfigurationFormProperties {

		/** Required */
		sessionType: FormControl<DevEnvironmentSessionType | null | undefined>,
	}
	export function CreateDevEnvironmentSessionConfigurationFormGroup() {
		return new FormGroup<DevEnvironmentSessionConfigurationFormProperties>({
			sessionType: new FormControl<DevEnvironmentSessionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDevEnvironmentRequest {
	}
	export interface GetDevEnvironmentRequestFormProperties {
	}
	export function CreateGetDevEnvironmentRequestFormGroup() {
		return new FormGroup<GetDevEnvironmentRequestFormProperties>({
		});

	}

	export interface GetProjectRequest {
	}
	export interface GetProjectRequestFormProperties {
	}
	export function CreateGetProjectRequestFormGroup() {
		return new FormGroup<GetProjectRequestFormProperties>({
		});

	}

	export interface GetSourceRepositoryCloneUrlsRequest {
	}
	export interface GetSourceRepositoryCloneUrlsRequestFormProperties {
	}
	export function CreateGetSourceRepositoryCloneUrlsRequestFormGroup() {
		return new FormGroup<GetSourceRepositoryCloneUrlsRequestFormProperties>({
		});

	}

	export interface GetSourceRepositoryRequest {
	}
	export interface GetSourceRepositoryRequestFormProperties {
	}
	export function CreateGetSourceRepositoryRequestFormGroup() {
		return new FormGroup<GetSourceRepositoryRequestFormProperties>({
		});

	}

	export interface GetSpaceRequest {
	}
	export interface GetSpaceRequestFormProperties {
	}
	export function CreateGetSpaceRequestFormGroup() {
		return new FormGroup<GetSpaceRequestFormProperties>({
		});

	}

	export interface GetSubscriptionRequest {
	}
	export interface GetSubscriptionRequestFormProperties {
	}
	export function CreateGetSubscriptionRequestFormGroup() {
		return new FormGroup<GetSubscriptionRequestFormProperties>({
		});

	}

	export interface GetUserDetailsRequest {
	}
	export interface GetUserDetailsRequestFormProperties {
	}
	export function CreateGetUserDetailsRequestFormGroup() {
		return new FormGroup<GetUserDetailsRequestFormProperties>({
		});

	}

	export interface ListAccessTokensRequest {
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListAccessTokensRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccessTokensRequestFormGroup() {
		return new FormGroup<ListAccessTokensRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDevEnvironmentSessionsRequest {
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListDevEnvironmentSessionsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDevEnvironmentSessionsRequestFormGroup() {
		return new FormGroup<ListDevEnvironmentSessionsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListDevEnvironmentsRequest {
		filters?: Array<Filter>;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListDevEnvironmentsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDevEnvironmentsRequestFormGroup() {
		return new FormGroup<ListDevEnvironmentsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListEventLogsRequest {

		/** Required */
		startTime: Date;

		/** Required */
		endTime: Date;
		eventName?: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListEventLogsRequestFormProperties {

		/** Required */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		endTime: FormControl<Date | null | undefined>,
		eventName: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListEventLogsRequestFormGroup() {
		return new FormGroup<ListEventLogsRequestFormProperties>({
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			eventName: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListProjectsRequest {
		nextToken?: string;
		maxResults?: number | null;
		filters?: Array<ProjectListFilter>;
	}
	export interface ListProjectsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListProjectsRequestFormGroup() {
		return new FormGroup<ListProjectsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSourceRepositoriesRequest {
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListSourceRepositoriesRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListSourceRepositoriesRequestFormGroup() {
		return new FormGroup<ListSourceRepositoriesRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSourceRepositoryBranchesRequest {
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListSourceRepositoryBranchesRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListSourceRepositoryBranchesRequestFormGroup() {
		return new FormGroup<ListSourceRepositoryBranchesRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSpacesRequest {
		nextToken?: string;
	}
	export interface ListSpacesRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSpacesRequestFormGroup() {
		return new FormGroup<ListSpacesRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartDevEnvironmentRequest {
		ides?: Array<IdeConfiguration>;
		instanceType?: InstanceType;
		inactivityTimeoutMinutes?: number | null;
	}
	export interface StartDevEnvironmentRequestFormProperties {
		instanceType: FormControl<InstanceType | null | undefined>,
		inactivityTimeoutMinutes: FormControl<number | null | undefined>,
	}
	export function CreateStartDevEnvironmentRequestFormGroup() {
		return new FormGroup<StartDevEnvironmentRequestFormProperties>({
			instanceType: new FormControl<InstanceType | null | undefined>(undefined),
			inactivityTimeoutMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StartDevEnvironmentSessionRequest {

		/**
		 * Information about the configuration of a Dev Environment session.
		 * Required
		 */
		sessionConfiguration: DevEnvironmentSessionConfiguration;
	}
	export interface StartDevEnvironmentSessionRequestFormProperties {
	}
	export function CreateStartDevEnvironmentSessionRequestFormGroup() {
		return new FormGroup<StartDevEnvironmentSessionRequestFormProperties>({
		});

	}

	export interface StopDevEnvironmentRequest {
	}
	export interface StopDevEnvironmentRequestFormProperties {
	}
	export function CreateStopDevEnvironmentRequestFormGroup() {
		return new FormGroup<StopDevEnvironmentRequestFormProperties>({
		});

	}

	export interface StopDevEnvironmentSessionRequest {
	}
	export interface StopDevEnvironmentSessionRequestFormProperties {
	}
	export function CreateStopDevEnvironmentSessionRequestFormGroup() {
		return new FormGroup<StopDevEnvironmentSessionRequestFormProperties>({
		});

	}

	export interface UpdateDevEnvironmentRequest {
		alias?: string;
		ides?: Array<IdeConfiguration>;
		instanceType?: InstanceType;
		inactivityTimeoutMinutes?: number | null;
		clientToken?: string;
	}
	export interface UpdateDevEnvironmentRequestFormProperties {
		alias: FormControl<string | null | undefined>,
		instanceType: FormControl<InstanceType | null | undefined>,
		inactivityTimeoutMinutes: FormControl<number | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDevEnvironmentRequestFormGroup() {
		return new FormGroup<UpdateDevEnvironmentRequestFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined),
			instanceType: new FormControl<InstanceType | null | undefined>(undefined),
			inactivityTimeoutMinutes: new FormControl<number | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateProjectRequest {
		description?: string;
	}
	export interface UpdateProjectRequestFormProperties {
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProjectRequestFormGroup() {
		return new FormGroup<UpdateProjectRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSpaceRequest {
		description?: string;
	}
	export interface UpdateSpaceRequestFormProperties {
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSpaceRequestFormGroup() {
		return new FormGroup<UpdateSpaceRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a personal access token (PAT) for the current user. A personal access token (PAT) is similar to a password. It is associated with your user identity for use across all spaces and projects in Amazon CodeCatalyst. You use PATs to access CodeCatalyst from resources that include integrated development environments (IDEs) and Git-based source repositories. PATs represent you in Amazon CodeCatalyst and you can manage them in your user settings.For more information, see <a href="https://docs.aws.amazon.com/codecatalyst/latest/userguide/ipa-tokens-keys.html">Managing personal access tokens in Amazon CodeCatalyst</a>.
		 * Put v1/accessTokens
		 * @return {void} 
		 */
		CreateAccessToken(requestBody: CreateAccessTokenPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/accessTokens', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all personal access tokens (PATs) associated with the user who calls the API. You can only list PATs associated with your Amazon Web Services Builder ID.
		 * Post v1/accessTokens
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAccessTokensResponse} Success
		 */
		ListAccessTokens(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListAccessTokensPostBody): Observable<ListAccessTokensResponse> {
			return this.http.post<ListAccessTokensResponse>(this.baseUri + 'v1/accessTokens?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a Dev Environment in Amazon CodeCatalyst, a cloud-based development environment that you can use to quickly work on the code stored in the source repositories of your project. </p> <note> <p>When created in the Amazon CodeCatalyst console, by default a Dev Environment is configured to have a 2 core processor, 4GB of RAM, and 16GB of persistent storage. None of these defaults apply to a Dev Environment created programmatically.</p> </note>
		 * Put v1/spaces/{spaceName}/projects/{projectName}/devEnvironments
		 * @param {string} spaceName The name of the space.
		 * @param {string} projectName The name of the project in the space.
		 * @return {void} 
		 */
		CreateDevEnvironment(spaceName: string, projectName: string, requestBody: CreateDevEnvironmentPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/spaces/' + (spaceName == null ? '' : encodeURIComponent(spaceName)) + '/projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/devEnvironments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of Dev Environments in a project.
		 * Post v1/spaces/{spaceName}/projects/{projectName}/devEnvironments
		 * @param {string} spaceName The name of the space.
		 * @param {string} projectName The name of the project in the space.
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListDevEnvironmentsResponse} Success
		 */
		ListDevEnvironments(spaceName: string, projectName: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListDevEnvironmentsPostBody): Observable<ListDevEnvironmentsResponse> {
			return this.http.post<ListDevEnvironmentsResponse>(this.baseUri + 'v1/spaces/' + (spaceName == null ? '' : encodeURIComponent(spaceName)) + '/projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/devEnvironments&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a project in a specified space.
		 * Put v1/spaces/{spaceName}/projects
		 * @param {string} spaceName The name of the space.
		 * @return {void} 
		 */
		CreateProject(spaceName: string, requestBody: CreateProjectPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/spaces/' + (spaceName == null ? '' : encodeURIComponent(spaceName)) + '/projects', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of projects.
		 * Post v1/spaces/{spaceName}/projects
		 * @param {string} spaceName The name of the space.
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListProjectsResponse} Success
		 */
		ListProjects(spaceName: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListProjectsPostBody): Observable<ListProjectsResponse> {
			return this.http.post<ListProjectsResponse>(this.baseUri + 'v1/spaces/' + (spaceName == null ? '' : encodeURIComponent(spaceName)) + '/projects&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an empty Git-based source repository in a specified project. The repository is created with an initial empty commit with a default branch named <code>main</code>.
		 * Put v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{name}
		 * @param {string} spaceName The name of the space.
		 * @param {string} projectName The name of the project in the space.
		 * @param {string} name The name of the source repository. For more information about name requirements, see <a href="https://docs.aws.amazon.com/codecatalyst/latest/userguide/source-quotas.html">Quotas for source repositories</a>.
		 * @return {void} 
		 */
		CreateSourceRepository(spaceName: string, projectName: string, name: string, requestBody: CreateSourceRepositoryPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/spaces/' + (spaceName == null ? '' : encodeURIComponent(spaceName)) + '/projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/sourceRepositories/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a source repository in Amazon CodeCatalyst. You cannot use this API to delete a linked repository. It can only be used to delete a Amazon CodeCatalyst source repository.
		 * Delete v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{name}
		 * @param {string} spaceName The name of the space.
		 * @param {string} projectName The name of the project in the space.
		 * @param {string} name The name of the source repository.
		 * @return {DeleteSourceRepositoryResponse} Success
		 */
		DeleteSourceRepository(spaceName: string, projectName: string, name: string): Observable<DeleteSourceRepositoryResponse> {
			return this.http.delete<DeleteSourceRepositoryResponse>(this.baseUri + 'v1/spaces/' + (spaceName == null ? '' : encodeURIComponent(spaceName)) + '/projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/sourceRepositories/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Returns information about a source repository.
		 * Get v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{name}
		 * @param {string} spaceName The name of the space.
		 * @param {string} projectName The name of the project in the space.
		 * @param {string} name The name of the source repository.
		 * @return {GetSourceRepositoryResponse} Success
		 */
		GetSourceRepository(spaceName: string, projectName: string, name: string): Observable<GetSourceRepositoryResponse> {
			return this.http.get<GetSourceRepositoryResponse>(this.baseUri + 'v1/spaces/' + (spaceName == null ? '' : encodeURIComponent(spaceName)) + '/projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/sourceRepositories/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * <p>Creates a branch in a specified source repository in Amazon CodeCatalyst. </p> <note> <p>This API only creates a branch in a source repository hosted in Amazon CodeCatalyst. You cannot use this API to create a branch in a linked repository.</p> </note>
		 * Put v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{sourceRepositoryName}/branches/{name}
		 * @param {string} spaceName The name of the space.
		 * @param {string} projectName The name of the project in the space.
		 * @param {string} sourceRepositoryName The name of the repository where you want to create a branch.
		 * @param {string} name The name for the branch you're creating.
		 * @return {void} 
		 */
		CreateSourceRepositoryBranch(spaceName: string, projectName: string, sourceRepositoryName: string, name: string, requestBody: CreateSourceRepositoryBranchPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/spaces/' + (spaceName == null ? '' : encodeURIComponent(spaceName)) + '/projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/sourceRepositories/' + (sourceRepositoryName == null ? '' : encodeURIComponent(sourceRepositoryName)) + '/branches/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a specified personal access token (PAT). A personal access token can only be deleted by the user who created it.
		 * Delete v1/accessTokens/{id}
		 * @param {string} id The ID of the personal access token to delete. You can find the IDs of all PATs associated with your Amazon Web Services Builder ID in a space by calling <a>ListAccessTokens</a>.
		 * @return {DeleteAccessTokenResponse} Success
		 */
		DeleteAccessToken(id: string): Observable<DeleteAccessTokenResponse> {
			return this.http.delete<DeleteAccessTokenResponse>(this.baseUri + 'v1/accessTokens/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Deletes a Dev Environment.
		 * Delete v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}
		 * @param {string} spaceName The name of the space.
		 * @param {string} projectName The name of the project in the space.
		 * @param {string} id The system-generated unique ID of the Dev Environment you want to delete. To retrieve a list of Dev Environment IDs, use <a>ListDevEnvironments</a>.
		 * @return {DeleteDevEnvironmentResponse} Success
		 */
		DeleteDevEnvironment(spaceName: string, projectName: string, id: string): Observable<DeleteDevEnvironmentResponse> {
			return this.http.delete<DeleteDevEnvironmentResponse>(this.baseUri + 'v1/spaces/' + (spaceName == null ? '' : encodeURIComponent(spaceName)) + '/projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/devEnvironments/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Returns information about a Dev Environment for a source repository in a project. Dev Environments are specific to the user who creates them.
		 * Get v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}
		 * @param {string} spaceName The name of the space.
		 * @param {string} projectName The name of the project in the space.
		 * @param {string} id The system-generated unique ID of the Dev Environment for which you want to view information. To retrieve a list of Dev Environment IDs, use <a>ListDevEnvironments</a>.
		 * @return {GetDevEnvironmentResponse} Success
		 */
		GetDevEnvironment(spaceName: string, projectName: string, id: string): Observable<GetDevEnvironmentResponse> {
			return this.http.get<GetDevEnvironmentResponse>(this.baseUri + 'v1/spaces/' + (spaceName == null ? '' : encodeURIComponent(spaceName)) + '/projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/devEnvironments/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Changes one or more values for a Dev Environment. Updating certain values of the Dev Environment will cause a restart.
		 * Patch v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}
		 * @param {string} spaceName The name of the space.
		 * @param {string} projectName The name of the project in the space.
		 * @param {string} id The system-generated unique ID of the Dev Environment. 
		 * @return {UpdateDevEnvironmentResponse} Success
		 */
		UpdateDevEnvironment(spaceName: string, projectName: string, id: string, requestBody: UpdateDevEnvironmentPatchBody): Observable<UpdateDevEnvironmentResponse> {
			return this.http.patch<UpdateDevEnvironmentResponse>(this.baseUri + 'v1/spaces/' + (spaceName == null ? '' : encodeURIComponent(spaceName)) + '/projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/devEnvironments/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a project in a space.
		 * Delete v1/spaces/{spaceName}/projects/{name}
		 * @param {string} spaceName The name of the space.
		 * @param {string} name The name of the project in the space. To retrieve a list of project names, use <a>ListProjects</a>.
		 * @return {DeleteProjectResponse} Success
		 */
		DeleteProject(spaceName: string, name: string): Observable<DeleteProjectResponse> {
			return this.http.delete<DeleteProjectResponse>(this.baseUri + 'v1/spaces/' + (spaceName == null ? '' : encodeURIComponent(spaceName)) + '/projects/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Returns information about a project.
		 * Get v1/spaces/{spaceName}/projects/{name}
		 * @param {string} spaceName The name of the space.
		 * @param {string} name The name of the project in the space.
		 * @return {GetProjectResponse} Success
		 */
		GetProject(spaceName: string, name: string): Observable<GetProjectResponse> {
			return this.http.get<GetProjectResponse>(this.baseUri + 'v1/spaces/' + (spaceName == null ? '' : encodeURIComponent(spaceName)) + '/projects/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Changes one or more values for a project.
		 * Patch v1/spaces/{spaceName}/projects/{name}
		 * @param {string} spaceName The name of the space.
		 * @param {string} name The name of the project.
		 * @return {UpdateProjectResponse} Success
		 */
		UpdateProject(spaceName: string, name: string, requestBody: UpdateProjectPatchBody): Observable<UpdateProjectResponse> {
			return this.http.patch<UpdateProjectResponse>(this.baseUri + 'v1/spaces/' + (spaceName == null ? '' : encodeURIComponent(spaceName)) + '/projects/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a space.</p> <important> <p>Deleting a space cannot be undone. Additionally, since space names must be unique across Amazon CodeCatalyst, you cannot reuse names of deleted spaces.</p> </important>
		 * Delete v1/spaces/{name}
		 * @param {string} name The name of the space. To retrieve a list of space names, use <a>ListSpaces</a>.
		 * @return {DeleteSpaceResponse} Success
		 */
		DeleteSpace(name: string): Observable<DeleteSpaceResponse> {
			return this.http.delete<DeleteSpaceResponse>(this.baseUri + 'v1/spaces/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Returns information about an space.
		 * Get v1/spaces/{name}
		 * @param {string} name The name of the space.
		 * @return {GetSpaceResponse} Success
		 */
		GetSpace(name: string): Observable<GetSpaceResponse> {
			return this.http.get<GetSpaceResponse>(this.baseUri + 'v1/spaces/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Changes one or more values for a space.
		 * Patch v1/spaces/{name}
		 * @param {string} name The name of the space.
		 * @return {UpdateSpaceResponse} Success
		 */
		UpdateSpace(name: string, requestBody: UpdateSpacePatchBody): Observable<UpdateSpaceResponse> {
			return this.http.patch<UpdateSpaceResponse>(this.baseUri + 'v1/spaces/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the URLs that can be used with a Git client to clone a source repository.
		 * Get v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{sourceRepositoryName}/cloneUrls
		 * @param {string} spaceName The name of the space.
		 * @param {string} projectName The name of the project in the space.
		 * @param {string} sourceRepositoryName The name of the source repository.
		 * @return {GetSourceRepositoryCloneUrlsResponse} Success
		 */
		GetSourceRepositoryCloneUrls(spaceName: string, projectName: string, sourceRepositoryName: string): Observable<GetSourceRepositoryCloneUrlsResponse> {
			return this.http.get<GetSourceRepositoryCloneUrlsResponse>(this.baseUri + 'v1/spaces/' + (spaceName == null ? '' : encodeURIComponent(spaceName)) + '/projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/sourceRepositories/' + (sourceRepositoryName == null ? '' : encodeURIComponent(sourceRepositoryName)) + '/cloneUrls', {});
		}

		/**
		 * Returns information about the Amazon Web Services account used for billing purposes and the billing plan for the space.
		 * Get v1/spaces/{spaceName}/subscription
		 * @param {string} spaceName The name of the space.
		 * @return {GetSubscriptionResponse} Success
		 */
		GetSubscription(spaceName: string): Observable<GetSubscriptionResponse> {
			return this.http.get<GetSubscriptionResponse>(this.baseUri + 'v1/spaces/' + (spaceName == null ? '' : encodeURIComponent(spaceName)) + '/subscription', {});
		}

		/**
		 * Returns information about a user.
		 * Get userDetails
		 * @param {string} id The system-generated unique ID of the user. 
		 * @param {string} userName The name of the user as displayed in Amazon CodeCatalyst.
		 * @return {GetUserDetailsResponse} Success
		 */
		GetUserDetails(id: string | null | undefined, userName: string | null | undefined): Observable<GetUserDetailsResponse> {
			return this.http.get<GetUserDetailsResponse>(this.baseUri + 'userDetails?id=' + (id == null ? '' : encodeURIComponent(id)) + '&userName=' + (userName == null ? '' : encodeURIComponent(userName)), {});
		}

		/**
		 * Retrieves a list of active sessions for a Dev Environment in a project.
		 * Post v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{devEnvironmentId}/sessions
		 * @param {string} spaceName The name of the space.
		 * @param {string} projectName The name of the project in the space.
		 * @param {string} devEnvironmentId The system-generated unique ID of the Dev Environment.
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListDevEnvironmentSessionsResponse} Success
		 */
		ListDevEnvironmentSessions(spaceName: string, projectName: string, devEnvironmentId: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListDevEnvironmentSessionsPostBody): Observable<ListDevEnvironmentSessionsResponse> {
			return this.http.post<ListDevEnvironmentSessionsResponse>(this.baseUri + 'v1/spaces/' + (spaceName == null ? '' : encodeURIComponent(spaceName)) + '/projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/devEnvironments/' + (devEnvironmentId == null ? '' : encodeURIComponent(devEnvironmentId)) + '/sessions&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of events that occurred during a specified time period in a space. You can use these events to audit user and system activity in a space.
		 * Post v1/spaces/{spaceName}/eventLogs
		 * @param {string} spaceName The name of the space.
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListEventLogsResponse} Success
		 */
		ListEventLogs(spaceName: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListEventLogsPostBody): Observable<ListEventLogsResponse> {
			return this.http.post<ListEventLogsResponse>(this.baseUri + 'v1/spaces/' + (spaceName == null ? '' : encodeURIComponent(spaceName)) + '/eventLogs&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of source repositories in a project.
		 * Post v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories
		 * @param {string} spaceName The name of the space.
		 * @param {string} projectName The name of the project in the space.
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSourceRepositoriesResponse} Success
		 */
		ListSourceRepositories(spaceName: string, projectName: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListSourceRepositoriesPostBody): Observable<ListSourceRepositoriesResponse> {
			return this.http.post<ListSourceRepositoriesResponse>(this.baseUri + 'v1/spaces/' + (spaceName == null ? '' : encodeURIComponent(spaceName)) + '/projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/sourceRepositories&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of branches in a specified source repository.
		 * Post v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{sourceRepositoryName}/branches
		 * @param {string} spaceName The name of the space.
		 * @param {string} projectName The name of the project in the space.
		 * @param {string} sourceRepositoryName The name of the source repository.
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSourceRepositoryBranchesResponse} Success
		 */
		ListSourceRepositoryBranches(spaceName: string, projectName: string, sourceRepositoryName: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListSourceRepositoryBranchesPostBody): Observable<ListSourceRepositoryBranchesResponse> {
			return this.http.post<ListSourceRepositoryBranchesResponse>(this.baseUri + 'v1/spaces/' + (spaceName == null ? '' : encodeURIComponent(spaceName)) + '/projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/sourceRepositories/' + (sourceRepositoryName == null ? '' : encodeURIComponent(sourceRepositoryName)) + '/branches&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of spaces.
		 * Post v1/spaces
		 * @param {string} nextToken Pagination token
		 * @return {ListSpacesResponse} Success
		 */
		ListSpaces(nextToken: string | null | undefined, requestBody: ListSpacesPostBody): Observable<ListSpacesResponse> {
			return this.http.post<ListSpacesResponse>(this.baseUri + 'v1/spaces?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a specified Dev Environment and puts it into an active state.
		 * Put v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}/start
		 * @param {string} spaceName The name of the space.
		 * @param {string} projectName The name of the project in the space.
		 * @param {string} id The system-generated unique ID of the Dev Environment. 
		 * @return {StartDevEnvironmentResponse} Success
		 */
		StartDevEnvironment(spaceName: string, projectName: string, id: string, requestBody: StartDevEnvironmentPutBody): Observable<StartDevEnvironmentResponse> {
			return this.http.put<StartDevEnvironmentResponse>(this.baseUri + 'v1/spaces/' + (spaceName == null ? '' : encodeURIComponent(spaceName)) + '/projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/devEnvironments/' + (id == null ? '' : encodeURIComponent(id)) + '/start', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a session for a specified Dev Environment.
		 * Put v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}/session
		 * @param {string} spaceName The name of the space.
		 * @param {string} projectName The name of the project in the space.
		 * @param {string} id The system-generated unique ID of the Dev Environment.
		 * @return {StartDevEnvironmentSessionResponse} Success
		 */
		StartDevEnvironmentSession(spaceName: string, projectName: string, id: string, requestBody: StartDevEnvironmentSessionPutBody): Observable<StartDevEnvironmentSessionResponse> {
			return this.http.put<StartDevEnvironmentSessionResponse>(this.baseUri + 'v1/spaces/' + (spaceName == null ? '' : encodeURIComponent(spaceName)) + '/projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/devEnvironments/' + (id == null ? '' : encodeURIComponent(id)) + '/session', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Pauses a specified Dev Environment and places it in a non-running state. Stopped Dev Environments do not consume compute minutes.
		 * Put v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}/stop
		 * @param {string} spaceName The name of the space.
		 * @param {string} projectName The name of the project in the space.
		 * @param {string} id The system-generated unique ID of the Dev Environment. 
		 * @return {StopDevEnvironmentResponse} Success
		 */
		StopDevEnvironment(spaceName: string, projectName: string, id: string): Observable<StopDevEnvironmentResponse> {
			return this.http.put<StopDevEnvironmentResponse>(this.baseUri + 'v1/spaces/' + (spaceName == null ? '' : encodeURIComponent(spaceName)) + '/projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/devEnvironments/' + (id == null ? '' : encodeURIComponent(id)) + '/stop', null, {});
		}

		/**
		 * Stops a session for a specified Dev Environment.
		 * Delete v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}/session/{sessionId}
		 * @param {string} spaceName The name of the space.
		 * @param {string} projectName The name of the project in the space.
		 * @param {string} id The system-generated unique ID of the Dev Environment. To obtain this ID, use <a>ListDevEnvironments</a>.
		 * @param {string} sessionId The system-generated unique ID of the Dev Environment session. This ID is returned by <a>StartDevEnvironmentSession</a>.
		 * @return {StopDevEnvironmentSessionResponse} Success
		 */
		StopDevEnvironmentSession(spaceName: string, projectName: string, id: string, sessionId: string): Observable<StopDevEnvironmentSessionResponse> {
			return this.http.delete<StopDevEnvironmentSessionResponse>(this.baseUri + 'v1/spaces/' + (spaceName == null ? '' : encodeURIComponent(spaceName)) + '/projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/devEnvironments/' + (id == null ? '' : encodeURIComponent(id)) + '/session/' + (sessionId == null ? '' : encodeURIComponent(sessionId)), {});
		}

		/**
		 * Verifies whether the calling user has a valid Amazon CodeCatalyst login and session. If successful, this returns the ID of the user in Amazon CodeCatalyst.
		 * Get session
		 * @return {VerifySessionResponse} Success
		 */
		VerifySession(): Observable<VerifySessionResponse> {
			return this.http.get<VerifySessionResponse>(this.baseUri + 'session', {});
		}
	}

	export interface CreateAccessTokenPutBody {

		/**
		 * The friendly name of the personal access token.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		name: string;

		/** The date and time the personal access token expires, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>. */
		expiresTime?: Date | null;
	}
	export interface CreateAccessTokenPutBodyFormProperties {

		/**
		 * The friendly name of the personal access token.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** The date and time the personal access token expires, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>. */
		expiresTime: FormControl<Date | null | undefined>,
	}
	export function CreateCreateAccessTokenPutBodyFormGroup() {
		return new FormGroup<CreateAccessTokenPutBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			expiresTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListAccessTokensPostBody {

		/**
		 * The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.
		 * Maximum: 10
		 */
		maxResults?: number | null;

		/**
		 * A token returned from a call to this API to indicate the next batch of results to return, if any.
		 * Max length: 10000
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListAccessTokensPostBodyFormProperties {

		/**
		 * The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.
		 * Maximum: 10
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * A token returned from a call to this API to indicate the next batch of results to return, if any.
		 * Max length: 10000
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccessTokensPostBodyFormGroup() {
		return new FormGroup<ListAccessTokensPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.max(10)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(10000)]),
		});

	}

	export interface CreateDevEnvironmentPutBody {

		/** The source repository that contains the branch to clone into the Dev Environment. */
		repositories?: Array<RepositoryInput>;

		/**
		 * A user-specified idempotency token. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries return the result from the original successful request and have no additional effect.
		 * Max length: 1024
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * The user-defined alias for a Dev Environment.
		 * Max length: 128
		 * Min length: 1
		 */
		alias?: string | null;

		/**
		 * <p>Information about the integrated development environment (IDE) configured for a Dev Environment.</p> <note> <p>An IDE is required to create a Dev Environment. For Dev Environment creation, this field contains configuration information and must be provided. </p> </note>
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		ides?: Array<IdeConfiguration>;

		/**
		 * The Amazon EC2 instace type to use for the Dev Environment.
		 * Required
		 */
		instanceType: InstanceType;

		/**
		 * The amount of time the Dev Environment will run without any activity detected before stopping, in minutes. Only whole integers are allowed. Dev Environments consume compute minutes when running.
		 * Minimum: 0
		 * Maximum: 1200
		 */
		inactivityTimeoutMinutes?: number | null;

		/**
		 * Information about the configuration of persistent storage for a Dev Environment.
		 * Required
		 */
		persistentStorage: CreateDevEnvironmentPutBodyPersistentStorage;
	}
	export interface CreateDevEnvironmentPutBodyFormProperties {

		/**
		 * A user-specified idempotency token. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries return the result from the original successful request and have no additional effect.
		 * Max length: 1024
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The user-defined alias for a Dev Environment.
		 * Max length: 128
		 * Min length: 1
		 */
		alias: FormControl<string | null | undefined>,

		/**
		 * The Amazon EC2 instace type to use for the Dev Environment.
		 * Required
		 */
		instanceType: FormControl<InstanceType | null | undefined>,

		/**
		 * The amount of time the Dev Environment will run without any activity detected before stopping, in minutes. Only whole integers are allowed. Dev Environments consume compute minutes when running.
		 * Minimum: 0
		 * Maximum: 1200
		 */
		inactivityTimeoutMinutes: FormControl<number | null | undefined>,
	}
	export function CreateCreateDevEnvironmentPutBodyFormGroup() {
		return new FormGroup<CreateDevEnvironmentPutBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			alias: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*')]),
			instanceType: new FormControl<InstanceType | null | undefined>(undefined, [Validators.required]),
			inactivityTimeoutMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1200)]),
		});

	}

	export interface CreateDevEnvironmentPutBodyPersistentStorage {
		sizeInGiB?: number | null;
	}
	export interface CreateDevEnvironmentPutBodyPersistentStorageFormProperties {
		sizeInGiB: FormControl<number | null | undefined>,
	}
	export function CreateCreateDevEnvironmentPutBodyPersistentStorageFormGroup() {
		return new FormGroup<CreateDevEnvironmentPutBodyPersistentStorageFormProperties>({
			sizeInGiB: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListDevEnvironmentsPostBody {

		/** Information about filters to apply to narrow the results returned in the list. */
		filters?: Array<Filter>;

		/**
		 * A token returned from a call to this API to indicate the next batch of results to return, if any.
		 * Max length: 10000
		 * Min length: 1
		 */
		nextToken?: string | null;

		/**
		 * The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.
		 * Minimum: 1
		 * Maximum: 50
		 */
		maxResults?: number | null;
	}
	export interface ListDevEnvironmentsPostBodyFormProperties {

		/**
		 * A token returned from a call to this API to indicate the next batch of results to return, if any.
		 * Max length: 10000
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.
		 * Minimum: 1
		 * Maximum: 50
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDevEnvironmentsPostBodyFormGroup() {
		return new FormGroup<ListDevEnvironmentsPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(10000)]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
		});

	}

	export interface CreateProjectPutBody {

		/**
		 * The friendly name of the project that will be displayed to users.
		 * Required
		 * Max length: 63
		 * Min length: 3
		 */
		displayName: string;

		/**
		 * The description of the project. This description will be displayed to all users of the project. We recommend providing a brief description of the project and its intended purpose.
		 * Max length: 200
		 * Min length: 0
		 */
		description?: string | null;
	}
	export interface CreateProjectPutBodyFormProperties {

		/**
		 * The friendly name of the project that will be displayed to users.
		 * Required
		 * Max length: 63
		 * Min length: 3
		 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * The description of the project. This description will be displayed to all users of the project. We recommend providing a brief description of the project and its intended purpose.
		 * Max length: 200
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateProjectPutBodyFormGroup() {
		return new FormGroup<CreateProjectPutBodyFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(63), Validators.pattern('[a-zA-Z0-9]+(?:[-_\. ][a-zA-Z0-9]+)*')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(200), Validators.pattern('[a-zA-Z0-9]+(?:[-_a-zA-Z0-9.,;:/\+=?&$%    ])*')]),
		});

	}

	export interface ListProjectsPostBody {

		/**
		 * A token returned from a call to this API to indicate the next batch of results to return, if any.
		 * Max length: 10000
		 * Min length: 1
		 */
		nextToken?: string | null;

		/**
		 * The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/** Information about filters to apply to narrow the results returned in the list. */
		filters?: Array<ProjectListFilter>;
	}
	export interface ListProjectsPostBodyFormProperties {

		/**
		 * A token returned from a call to this API to indicate the next batch of results to return, if any.
		 * Max length: 10000
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListProjectsPostBodyFormGroup() {
		return new FormGroup<ListProjectsPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(10000)]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface CreateSourceRepositoryPutBody {

		/**
		 * The description of the source repository.
		 * Max length: 255
		 * Min length: 1
		 */
		description?: string | null;
	}
	export interface CreateSourceRepositoryPutBodyFormProperties {

		/**
		 * The description of the source repository.
		 * Max length: 255
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateSourceRepositoryPutBodyFormGroup() {
		return new FormGroup<CreateSourceRepositoryPutBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface CreateSourceRepositoryBranchPutBody {

		/** The commit ID in an existing branch from which you want to create the new branch. */
		headCommitId?: string | null;
	}
	export interface CreateSourceRepositoryBranchPutBodyFormProperties {

		/** The commit ID in an existing branch from which you want to create the new branch. */
		headCommitId: FormControl<string | null | undefined>,
	}
	export function CreateCreateSourceRepositoryBranchPutBodyFormGroup() {
		return new FormGroup<CreateSourceRepositoryBranchPutBodyFormProperties>({
			headCommitId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDevEnvironmentPatchBody {

		/**
		 * The user-specified alias for the Dev Environment. Changing this value will not cause a restart.
		 * Max length: 128
		 * Min length: 0
		 */
		alias?: string | null;

		/**
		 * Information about the integrated development environment (IDE) configured for a Dev Environment.
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		ides?: Array<IdeConfiguration>;

		/** <p>The Amazon EC2 instace type to use for the Dev Environment. </p> <note> <p>Changing this value will cause a restart of the Dev Environment if it is running.</p> </note> */
		instanceType?: InstanceType | null;

		/**
		 * <p>The amount of time the Dev Environment will run without any activity detected before stopping, in minutes. Only whole integers are allowed. Dev Environments consume compute minutes when running.</p> <note> <p>Changing this value will cause a restart of the Dev Environment if it is running.</p> </note>
		 * Minimum: 0
		 * Maximum: 1200
		 */
		inactivityTimeoutMinutes?: number | null;

		/**
		 * A user-specified idempotency token. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries return the result from the original successful request and have no additional effect.
		 * Max length: 1024
		 * Min length: 1
		 */
		clientToken?: string | null;
	}
	export interface UpdateDevEnvironmentPatchBodyFormProperties {

		/**
		 * The user-specified alias for the Dev Environment. Changing this value will not cause a restart.
		 * Max length: 128
		 * Min length: 0
		 */
		alias: FormControl<string | null | undefined>,

		/** <p>The Amazon EC2 instace type to use for the Dev Environment. </p> <note> <p>Changing this value will cause a restart of the Dev Environment if it is running.</p> </note> */
		instanceType: FormControl<InstanceType | null | undefined>,

		/**
		 * <p>The amount of time the Dev Environment will run without any activity detected before stopping, in minutes. Only whole integers are allowed. Dev Environments consume compute minutes when running.</p> <note> <p>Changing this value will cause a restart of the Dev Environment if it is running.</p> </note>
		 * Minimum: 0
		 * Maximum: 1200
		 */
		inactivityTimeoutMinutes: FormControl<number | null | undefined>,

		/**
		 * A user-specified idempotency token. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries return the result from the original successful request and have no additional effect.
		 * Max length: 1024
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDevEnvironmentPatchBodyFormGroup() {
		return new FormGroup<UpdateDevEnvironmentPatchBodyFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128), Validators.pattern('$|^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*')]),
			instanceType: new FormControl<InstanceType | null | undefined>(undefined),
			inactivityTimeoutMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1200)]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface UpdateProjectPatchBody {

		/**
		 * The description of the project.
		 * Max length: 200
		 * Min length: 0
		 */
		description?: string | null;
	}
	export interface UpdateProjectPatchBodyFormProperties {

		/**
		 * The description of the project.
		 * Max length: 200
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProjectPatchBodyFormGroup() {
		return new FormGroup<UpdateProjectPatchBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(200), Validators.pattern('[a-zA-Z0-9]+(?:[-_a-zA-Z0-9.,;:/\+=?&$%    ])*')]),
		});

	}

	export interface UpdateSpacePatchBody {

		/**
		 * The description of the space.
		 * Max length: 200
		 * Min length: 0
		 */
		description?: string | null;
	}
	export interface UpdateSpacePatchBodyFormProperties {

		/**
		 * The description of the space.
		 * Max length: 200
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSpacePatchBodyFormGroup() {
		return new FormGroup<UpdateSpacePatchBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(200), Validators.pattern('[a-zA-Z0-9]+(?:[-_a-zA-Z0-9.,;:/\+=?&$%    ])*')]),
		});

	}

	export interface ListDevEnvironmentSessionsPostBody {

		/**
		 * A token returned from a call to this API to indicate the next batch of results to return, if any.
		 * Max length: 10000
		 * Min length: 1
		 */
		nextToken?: string | null;

		/**
		 * The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.
		 * Minimum: 1
		 * Maximum: 200
		 */
		maxResults?: number | null;
	}
	export interface ListDevEnvironmentSessionsPostBodyFormProperties {

		/**
		 * A token returned from a call to this API to indicate the next batch of results to return, if any.
		 * Max length: 10000
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.
		 * Minimum: 1
		 * Maximum: 200
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDevEnvironmentSessionsPostBodyFormGroup() {
		return new FormGroup<ListDevEnvironmentSessionsPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(10000)]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(200)]),
		});

	}

	export interface ListEventLogsPostBody {

		/**
		 * The date and time when you want to start retrieving events, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.
		 * Required
		 */
		startTime: Date;

		/**
		 * The time after which you do not want any events retrieved, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.
		 * Required
		 */
		endTime: Date;

		/** The name of the event. */
		eventName?: string | null;

		/**
		 * A token returned from a call to this API to indicate the next batch of results to return, if any.
		 * Max length: 10000
		 * Min length: 1
		 */
		nextToken?: string | null;

		/**
		 * The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.
		 * Minimum: 1
		 * Maximum: 250
		 */
		maxResults?: number | null;
	}
	export interface ListEventLogsPostBodyFormProperties {

		/**
		 * The date and time when you want to start retrieving events, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,

		/**
		 * The time after which you do not want any events retrieved, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.
		 * Required
		 */
		endTime: FormControl<Date | null | undefined>,

		/** The name of the event. */
		eventName: FormControl<string | null | undefined>,

		/**
		 * A token returned from a call to this API to indicate the next batch of results to return, if any.
		 * Max length: 10000
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.
		 * Minimum: 1
		 * Maximum: 250
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListEventLogsPostBodyFormGroup() {
		return new FormGroup<ListEventLogsPostBodyFormProperties>({
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			eventName: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(10000)]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(250)]),
		});

	}

	export interface ListSourceRepositoriesPostBody {

		/**
		 * A token returned from a call to this API to indicate the next batch of results to return, if any.
		 * Max length: 10000
		 * Min length: 1
		 */
		nextToken?: string | null;

		/**
		 * The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.
		 * Minimum: 1
		 * Maximum: 200
		 */
		maxResults?: number | null;
	}
	export interface ListSourceRepositoriesPostBodyFormProperties {

		/**
		 * A token returned from a call to this API to indicate the next batch of results to return, if any.
		 * Max length: 10000
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.
		 * Minimum: 1
		 * Maximum: 200
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListSourceRepositoriesPostBodyFormGroup() {
		return new FormGroup<ListSourceRepositoriesPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(10000)]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(200)]),
		});

	}

	export interface ListSourceRepositoryBranchesPostBody {

		/**
		 * A token returned from a call to this API to indicate the next batch of results to return, if any.
		 * Max length: 10000
		 * Min length: 1
		 */
		nextToken?: string | null;

		/**
		 * The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.
		 * Minimum: 1
		 * Maximum: 50
		 */
		maxResults?: number | null;
	}
	export interface ListSourceRepositoryBranchesPostBodyFormProperties {

		/**
		 * A token returned from a call to this API to indicate the next batch of results to return, if any.
		 * Max length: 10000
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.
		 * Minimum: 1
		 * Maximum: 50
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListSourceRepositoryBranchesPostBodyFormGroup() {
		return new FormGroup<ListSourceRepositoryBranchesPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(10000)]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
		});

	}

	export interface ListSpacesPostBody {

		/**
		 * A token returned from a call to this API to indicate the next batch of results to return, if any.
		 * Max length: 10000
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListSpacesPostBodyFormProperties {

		/**
		 * A token returned from a call to this API to indicate the next batch of results to return, if any.
		 * Max length: 10000
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSpacesPostBodyFormGroup() {
		return new FormGroup<ListSpacesPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(10000)]),
		});

	}

	export interface StartDevEnvironmentPutBody {

		/**
		 * Information about the integrated development environment (IDE) configured for a Dev Environment.
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		ides?: Array<IdeConfiguration>;

		/** The Amazon EC2 instace type to use for the Dev Environment. */
		instanceType?: InstanceType | null;

		/**
		 * The amount of time the Dev Environment will run without any activity detected before stopping, in minutes. Only whole integers are allowed. Dev Environments consume compute minutes when running.
		 * Minimum: 0
		 * Maximum: 1200
		 */
		inactivityTimeoutMinutes?: number | null;
	}
	export interface StartDevEnvironmentPutBodyFormProperties {

		/** The Amazon EC2 instace type to use for the Dev Environment. */
		instanceType: FormControl<InstanceType | null | undefined>,

		/**
		 * The amount of time the Dev Environment will run without any activity detected before stopping, in minutes. Only whole integers are allowed. Dev Environments consume compute minutes when running.
		 * Minimum: 0
		 * Maximum: 1200
		 */
		inactivityTimeoutMinutes: FormControl<number | null | undefined>,
	}
	export function CreateStartDevEnvironmentPutBodyFormGroup() {
		return new FormGroup<StartDevEnvironmentPutBodyFormProperties>({
			instanceType: new FormControl<InstanceType | null | undefined>(undefined),
			inactivityTimeoutMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1200)]),
		});

	}

	export interface StartDevEnvironmentSessionPutBody {

		/**
		 * Information about the configuration of a Dev Environment session.
		 * Required
		 */
		sessionConfiguration: StartDevEnvironmentSessionPutBodySessionConfiguration;
	}
	export interface StartDevEnvironmentSessionPutBodyFormProperties {
	}
	export function CreateStartDevEnvironmentSessionPutBodyFormGroup() {
		return new FormGroup<StartDevEnvironmentSessionPutBodyFormProperties>({
		});

	}

	export interface StartDevEnvironmentSessionPutBodySessionConfiguration {
		sessionType?: DevEnvironmentSessionType;
		executeCommandSessionConfiguration?: ExecuteCommandSessionConfiguration;
	}
	export interface StartDevEnvironmentSessionPutBodySessionConfigurationFormProperties {
		sessionType: FormControl<DevEnvironmentSessionType | null | undefined>,
	}
	export function CreateStartDevEnvironmentSessionPutBodySessionConfigurationFormGroup() {
		return new FormGroup<StartDevEnvironmentSessionPutBodySessionConfigurationFormProperties>({
			sessionType: new FormControl<DevEnvironmentSessionType | null | undefined>(undefined),
		});

	}

}

