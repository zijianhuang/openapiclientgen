import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateAppInstanceResponse {
		AppInstanceArn?: string;
	}
	export interface CreateAppInstanceResponseFormProperties {
		AppInstanceArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppInstanceResponseFormGroup() {
		return new FormGroup<CreateAppInstanceResponseFormProperties>({
			AppInstanceArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A tag object containing a key-value pair. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** A tag object containing a key-value pair. */
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

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
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

	export interface ForbiddenException {
	}
	export interface ForbiddenExceptionFormProperties {
	}
	export function CreateForbiddenExceptionFormGroup() {
		return new FormGroup<ForbiddenExceptionFormProperties>({
		});

	}

	export interface ResourceLimitExceededException {
	}
	export interface ResourceLimitExceededExceptionFormProperties {
	}
	export function CreateResourceLimitExceededExceptionFormGroup() {
		return new FormGroup<ResourceLimitExceededExceptionFormProperties>({
		});

	}

	export interface ThrottledClientException {
	}
	export interface ThrottledClientExceptionFormProperties {
	}
	export function CreateThrottledClientExceptionFormGroup() {
		return new FormGroup<ThrottledClientExceptionFormProperties>({
		});

	}

	export interface UnauthorizedClientException {
	}
	export interface UnauthorizedClientExceptionFormProperties {
	}
	export function CreateUnauthorizedClientExceptionFormGroup() {
		return new FormGroup<UnauthorizedClientExceptionFormProperties>({
		});

	}

	export interface ServiceUnavailableException {
	}
	export interface ServiceUnavailableExceptionFormProperties {
	}
	export function CreateServiceUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceUnavailableExceptionFormProperties>({
		});

	}

	export interface ServiceFailureException {
	}
	export interface ServiceFailureExceptionFormProperties {
	}
	export function CreateServiceFailureExceptionFormGroup() {
		return new FormGroup<ServiceFailureExceptionFormProperties>({
		});

	}

	export interface CreateAppInstanceAdminResponse {
		AppInstanceAdmin?: Identity;
		AppInstanceArn?: string;
	}
	export interface CreateAppInstanceAdminResponseFormProperties {
		AppInstanceArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppInstanceAdminResponseFormGroup() {
		return new FormGroup<CreateAppInstanceAdminResponseFormProperties>({
			AppInstanceArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of a user or bot. */
	export interface Identity {
		Arn?: string;
		Name?: string;
	}

	/** The details of a user or bot. */
	export interface IdentityFormProperties {
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateIdentityFormGroup() {
		return new FormGroup<IdentityFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAppInstanceBotResponse {
		AppInstanceBotArn?: string;
	}
	export interface CreateAppInstanceBotResponseFormProperties {
		AppInstanceBotArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppInstanceBotResponseFormGroup() {
		return new FormGroup<CreateAppInstanceBotResponseFormProperties>({
			AppInstanceBotArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration for an Amazon Lex V2 bot. */
	export interface LexConfiguration {
		RespondsTo?: RespondsTo;
		InvokedBy?: InvokedBy;

		/** Required */
		LexBotAliasArn: string;

		/** Required */
		LocaleId: string;
		WelcomeIntent?: string;
	}

	/** The configuration for an Amazon Lex V2 bot. */
	export interface LexConfigurationFormProperties {
		RespondsTo: FormControl<RespondsTo | null | undefined>,

		/** Required */
		LexBotAliasArn: FormControl<string | null | undefined>,

		/** Required */
		LocaleId: FormControl<string | null | undefined>,
		WelcomeIntent: FormControl<string | null | undefined>,
	}
	export function CreateLexConfigurationFormGroup() {
		return new FormGroup<LexConfigurationFormProperties>({
			RespondsTo: new FormControl<RespondsTo | null | undefined>(undefined),
			LexBotAliasArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LocaleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WelcomeIntent: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RespondsTo { STANDARD_MESSAGES = 0 }


	/** Specifies the type of message that triggers a bot. */
	export interface InvokedBy {

		/** Required */
		StandardMessages: StandardMessages;

		/** Required */
		TargetedMessages: TargetedMessages;
	}

	/** Specifies the type of message that triggers a bot. */
	export interface InvokedByFormProperties {

		/** Required */
		StandardMessages: FormControl<StandardMessages | null | undefined>,

		/** Required */
		TargetedMessages: FormControl<TargetedMessages | null | undefined>,
	}
	export function CreateInvokedByFormGroup() {
		return new FormGroup<InvokedByFormProperties>({
			StandardMessages: new FormControl<StandardMessages | null | undefined>(undefined, [Validators.required]),
			TargetedMessages: new FormControl<TargetedMessages | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum StandardMessages { AUTO = 0, ALL = 1, MENTIONS = 2, NONE = 3 }

	export enum TargetedMessages { ALL = 0, NONE = 1 }

	export interface CreateAppInstanceUserResponse {
		AppInstanceUserArn?: string;
	}
	export interface CreateAppInstanceUserResponseFormProperties {
		AppInstanceUserArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppInstanceUserResponseFormGroup() {
		return new FormGroup<CreateAppInstanceUserResponseFormProperties>({
			AppInstanceUserArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExpirationCriterion { CREATED_TIMESTAMP = 0 }

	export interface DescribeAppInstanceResponse {
		AppInstance?: AppInstance;
	}
	export interface DescribeAppInstanceResponseFormProperties {
	}
	export function CreateDescribeAppInstanceResponseFormGroup() {
		return new FormGroup<DescribeAppInstanceResponseFormProperties>({
		});

	}


	/** The details of an <code>AppInstance</code>, an instance of an Amazon Chime SDK messaging application. */
	export interface AppInstance {
		AppInstanceArn?: string;
		Name?: string;
		CreatedTimestamp?: Date;
		LastUpdatedTimestamp?: Date;
		Metadata?: string;
	}

	/** The details of an <code>AppInstance</code>, an instance of an Amazon Chime SDK messaging application. */
	export interface AppInstanceFormProperties {
		AppInstanceArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		LastUpdatedTimestamp: FormControl<Date | null | undefined>,
		Metadata: FormControl<string | null | undefined>,
	}
	export function CreateAppInstanceFormGroup() {
		return new FormGroup<AppInstanceFormProperties>({
			AppInstanceArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAppInstanceAdminResponse {
		AppInstanceAdmin?: AppInstanceAdmin;
	}
	export interface DescribeAppInstanceAdminResponseFormProperties {
	}
	export function CreateDescribeAppInstanceAdminResponseFormGroup() {
		return new FormGroup<DescribeAppInstanceAdminResponseFormProperties>({
		});

	}


	/** The name and ARN of the admin for the <code>AppInstance</code>. */
	export interface AppInstanceAdmin {
		Admin?: Identity;
		AppInstanceArn?: string;
		CreatedTimestamp?: Date;
	}

	/** The name and ARN of the admin for the <code>AppInstance</code>. */
	export interface AppInstanceAdminFormProperties {
		AppInstanceArn: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateAppInstanceAdminFormGroup() {
		return new FormGroup<AppInstanceAdminFormProperties>({
			AppInstanceArn: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeAppInstanceBotResponse {
		AppInstanceBot?: AppInstanceBot;
	}
	export interface DescribeAppInstanceBotResponseFormProperties {
	}
	export function CreateDescribeAppInstanceBotResponseFormGroup() {
		return new FormGroup<DescribeAppInstanceBotResponseFormProperties>({
		});

	}


	/** An Amazon Lex V2 chat bot created under an <code>AppInstance</code>. */
	export interface AppInstanceBot {
		AppInstanceBotArn?: string;
		Name?: string;
		Configuration?: Configuration;
		CreatedTimestamp?: Date;
		LastUpdatedTimestamp?: Date;
		Metadata?: string;
	}

	/** An Amazon Lex V2 chat bot created under an <code>AppInstance</code>. */
	export interface AppInstanceBotFormProperties {
		AppInstanceBotArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		LastUpdatedTimestamp: FormControl<Date | null | undefined>,
		Metadata: FormControl<string | null | undefined>,
	}
	export function CreateAppInstanceBotFormGroup() {
		return new FormGroup<AppInstanceBotFormProperties>({
			AppInstanceBotArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that contains configuration data. */
	export interface Configuration {

		/** Required */
		Lex: LexConfiguration;
	}

	/** A structure that contains configuration data. */
	export interface ConfigurationFormProperties {
	}
	export function CreateConfigurationFormGroup() {
		return new FormGroup<ConfigurationFormProperties>({
		});

	}

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
		});

	}

	export interface DescribeAppInstanceUserResponse {
		AppInstanceUser?: AppInstanceUser;
	}
	export interface DescribeAppInstanceUserResponseFormProperties {
	}
	export function CreateDescribeAppInstanceUserResponseFormGroup() {
		return new FormGroup<DescribeAppInstanceUserResponseFormProperties>({
		});

	}


	/** The details of an <code>AppInstanceUser</code>. */
	export interface AppInstanceUser {
		AppInstanceUserArn?: string;
		Name?: string;
		Metadata?: string;
		CreatedTimestamp?: Date;
		LastUpdatedTimestamp?: Date;
		ExpirationSettings?: ExpirationSettings;
	}

	/** The details of an <code>AppInstanceUser</code>. */
	export interface AppInstanceUserFormProperties {
		AppInstanceUserArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Metadata: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		LastUpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateAppInstanceUserFormGroup() {
		return new FormGroup<AppInstanceUserFormProperties>({
			AppInstanceUserArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Determines the interval after which an <code>AppInstanceUser</code> is automatically deleted. */
	export interface ExpirationSettings {

		/** Required */
		ExpirationDays: number;

		/** Required */
		ExpirationCriterion: ExpirationCriterion;
	}

	/** Determines the interval after which an <code>AppInstanceUser</code> is automatically deleted. */
	export interface ExpirationSettingsFormProperties {

		/** Required */
		ExpirationDays: FormControl<number | null | undefined>,

		/** Required */
		ExpirationCriterion: FormControl<ExpirationCriterion | null | undefined>,
	}
	export function CreateExpirationSettingsFormGroup() {
		return new FormGroup<ExpirationSettingsFormProperties>({
			ExpirationDays: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ExpirationCriterion: new FormControl<ExpirationCriterion | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAppInstanceUserEndpointResponse {
		AppInstanceUserEndpoint?: AppInstanceUserEndpoint;
	}
	export interface DescribeAppInstanceUserEndpointResponseFormProperties {
	}
	export function CreateDescribeAppInstanceUserEndpointResponseFormGroup() {
		return new FormGroup<DescribeAppInstanceUserEndpointResponseFormProperties>({
		});

	}


	/** An endpoint under an Amazon Chime <code>AppInstanceUser</code> that receives messages for a user. For push notifications, the endpoint is a mobile device used to receive mobile push notifications for a user. */
	export interface AppInstanceUserEndpoint {
		AppInstanceUserArn?: string;
		EndpointId?: string;
		Name?: string;
		Type?: AppInstanceUserEndpointType;
		ResourceArn?: string;
		EndpointAttributes?: EndpointAttributes;
		CreatedTimestamp?: Date;
		LastUpdatedTimestamp?: Date;
		AllowMessages?: TargetedMessages;
		EndpointState?: EndpointState;
	}

	/** An endpoint under an Amazon Chime <code>AppInstanceUser</code> that receives messages for a user. For push notifications, the endpoint is a mobile device used to receive mobile push notifications for a user. */
	export interface AppInstanceUserEndpointFormProperties {
		AppInstanceUserArn: FormControl<string | null | undefined>,
		EndpointId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Type: FormControl<AppInstanceUserEndpointType | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		LastUpdatedTimestamp: FormControl<Date | null | undefined>,
		AllowMessages: FormControl<TargetedMessages | null | undefined>,
	}
	export function CreateAppInstanceUserEndpointFormGroup() {
		return new FormGroup<AppInstanceUserEndpointFormProperties>({
			AppInstanceUserArn: new FormControl<string | null | undefined>(undefined),
			EndpointId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<AppInstanceUserEndpointType | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			AllowMessages: new FormControl<TargetedMessages | null | undefined>(undefined),
		});

	}

	export enum AppInstanceUserEndpointType { APNS = 0, APNS_SANDBOX = 1, GCM = 2 }


	/** The attributes of an <code>Endpoint</code>. */
	export interface EndpointAttributes {

		/** Required */
		DeviceToken: string;
		VoipDeviceToken?: string;
	}

	/** The attributes of an <code>Endpoint</code>. */
	export interface EndpointAttributesFormProperties {

		/** Required */
		DeviceToken: FormControl<string | null | undefined>,
		VoipDeviceToken: FormControl<string | null | undefined>,
	}
	export function CreateEndpointAttributesFormGroup() {
		return new FormGroup<EndpointAttributesFormProperties>({
			DeviceToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VoipDeviceToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A read-only field that represents the state of an <code>AppInstanceUserEndpoint</code>. Supported values:</p> <ul> <li> <p> <code>ACTIVE</code>: The <code>AppInstanceUserEndpoint</code> is active and able to receive messages. When <code>ACTIVE</code>, the <code>EndpointStatusReason</code> remains empty.</p> </li> <li> <p> <code>INACTIVE</code>: The <code>AppInstanceUserEndpoint</code> is inactive and can't receive message. When INACTIVE, the corresponding reason will be conveyed through EndpointStatusReason.</p> </li> <li> <p> <code>INVALID_DEVICE_TOKEN</code> indicates that an <code>AppInstanceUserEndpoint</code> is <code>INACTIVE</code> due to invalid device token</p> </li> <li> <p> <code>INVALID_PINPOINT_ARN</code> indicates that an <code>AppInstanceUserEndpoint</code> is <code>INACTIVE</code> due to an invalid pinpoint ARN that was input through the <code>ResourceArn</code> field.</p> </li> </ul> */
	export interface EndpointState {

		/** Required */
		Status: EndpointStatus;
		StatusReason?: EndpointStatusReason;
	}

	/** <p>A read-only field that represents the state of an <code>AppInstanceUserEndpoint</code>. Supported values:</p> <ul> <li> <p> <code>ACTIVE</code>: The <code>AppInstanceUserEndpoint</code> is active and able to receive messages. When <code>ACTIVE</code>, the <code>EndpointStatusReason</code> remains empty.</p> </li> <li> <p> <code>INACTIVE</code>: The <code>AppInstanceUserEndpoint</code> is inactive and can't receive message. When INACTIVE, the corresponding reason will be conveyed through EndpointStatusReason.</p> </li> <li> <p> <code>INVALID_DEVICE_TOKEN</code> indicates that an <code>AppInstanceUserEndpoint</code> is <code>INACTIVE</code> due to invalid device token</p> </li> <li> <p> <code>INVALID_PINPOINT_ARN</code> indicates that an <code>AppInstanceUserEndpoint</code> is <code>INACTIVE</code> due to an invalid pinpoint ARN that was input through the <code>ResourceArn</code> field.</p> </li> </ul> */
	export interface EndpointStateFormProperties {

		/** Required */
		Status: FormControl<EndpointStatus | null | undefined>,
		StatusReason: FormControl<EndpointStatusReason | null | undefined>,
	}
	export function CreateEndpointStateFormGroup() {
		return new FormGroup<EndpointStateFormProperties>({
			Status: new FormControl<EndpointStatus | null | undefined>(undefined, [Validators.required]),
			StatusReason: new FormControl<EndpointStatusReason | null | undefined>(undefined),
		});

	}

	export enum EndpointStatus { ACTIVE = 0, INACTIVE = 1 }

	export enum EndpointStatusReason { INVALID_DEVICE_TOKEN = 0, INVALID_PINPOINT_ARN = 1 }

	export interface GetAppInstanceRetentionSettingsResponse {
		AppInstanceRetentionSettings?: AppInstanceRetentionSettings;
		InitiateDeletionTimestamp?: Date;
	}
	export interface GetAppInstanceRetentionSettingsResponseFormProperties {
		InitiateDeletionTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateGetAppInstanceRetentionSettingsResponseFormGroup() {
		return new FormGroup<GetAppInstanceRetentionSettingsResponseFormProperties>({
			InitiateDeletionTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The details of the data-retention settings for an <code>AppInstance</code>. */
	export interface AppInstanceRetentionSettings {
		ChannelRetentionSettings?: ChannelRetentionSettings;
	}

	/** The details of the data-retention settings for an <code>AppInstance</code>. */
	export interface AppInstanceRetentionSettingsFormProperties {
	}
	export function CreateAppInstanceRetentionSettingsFormGroup() {
		return new FormGroup<AppInstanceRetentionSettingsFormProperties>({
		});

	}


	/** The details of the retention settings for a channel. */
	export interface ChannelRetentionSettings {
		RetentionDays?: number | null;
	}

	/** The details of the retention settings for a channel. */
	export interface ChannelRetentionSettingsFormProperties {
		RetentionDays: FormControl<number | null | undefined>,
	}
	export function CreateChannelRetentionSettingsFormGroup() {
		return new FormGroup<ChannelRetentionSettingsFormProperties>({
			RetentionDays: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListAppInstanceAdminsResponse {
		AppInstanceArn?: string;
		AppInstanceAdmins?: Array<AppInstanceAdminSummary>;
		NextToken?: string;
	}
	export interface ListAppInstanceAdminsResponseFormProperties {
		AppInstanceArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppInstanceAdminsResponseFormGroup() {
		return new FormGroup<ListAppInstanceAdminsResponseFormProperties>({
			AppInstanceArn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary of the details of an <code>AppInstanceAdmin</code>. */
	export interface AppInstanceAdminSummary {
		Admin?: Identity;
	}

	/** Summary of the details of an <code>AppInstanceAdmin</code>. */
	export interface AppInstanceAdminSummaryFormProperties {
	}
	export function CreateAppInstanceAdminSummaryFormGroup() {
		return new FormGroup<AppInstanceAdminSummaryFormProperties>({
		});

	}

	export interface ListAppInstanceBotsResponse {
		AppInstanceArn?: string;
		AppInstanceBots?: Array<AppInstanceBotSummary>;
		NextToken?: string;
	}
	export interface ListAppInstanceBotsResponseFormProperties {
		AppInstanceArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppInstanceBotsResponseFormGroup() {
		return new FormGroup<ListAppInstanceBotsResponseFormProperties>({
			AppInstanceArn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** High-level information about an AppInstanceBot. */
	export interface AppInstanceBotSummary {
		AppInstanceBotArn?: string;
		Name?: string;
		Metadata?: string;
	}

	/** High-level information about an AppInstanceBot. */
	export interface AppInstanceBotSummaryFormProperties {
		AppInstanceBotArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Metadata: FormControl<string | null | undefined>,
	}
	export function CreateAppInstanceBotSummaryFormGroup() {
		return new FormGroup<AppInstanceBotSummaryFormProperties>({
			AppInstanceBotArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAppInstanceUserEndpointsResponse {
		AppInstanceUserEndpoints?: Array<AppInstanceUserEndpointSummary>;
		NextToken?: string;
	}
	export interface ListAppInstanceUserEndpointsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppInstanceUserEndpointsResponseFormGroup() {
		return new FormGroup<ListAppInstanceUserEndpointsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary of the details of an <code>AppInstanceUserEndpoint</code>. */
	export interface AppInstanceUserEndpointSummary {
		AppInstanceUserArn?: string;
		EndpointId?: string;
		Name?: string;
		Type?: AppInstanceUserEndpointType;
		AllowMessages?: TargetedMessages;
		EndpointState?: EndpointState;
	}

	/** Summary of the details of an <code>AppInstanceUserEndpoint</code>. */
	export interface AppInstanceUserEndpointSummaryFormProperties {
		AppInstanceUserArn: FormControl<string | null | undefined>,
		EndpointId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Type: FormControl<AppInstanceUserEndpointType | null | undefined>,
		AllowMessages: FormControl<TargetedMessages | null | undefined>,
	}
	export function CreateAppInstanceUserEndpointSummaryFormGroup() {
		return new FormGroup<AppInstanceUserEndpointSummaryFormProperties>({
			AppInstanceUserArn: new FormControl<string | null | undefined>(undefined),
			EndpointId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<AppInstanceUserEndpointType | null | undefined>(undefined),
			AllowMessages: new FormControl<TargetedMessages | null | undefined>(undefined),
		});

	}

	export interface ListAppInstanceUsersResponse {
		AppInstanceArn?: string;
		AppInstanceUsers?: Array<AppInstanceUserSummary>;
		NextToken?: string;
	}
	export interface ListAppInstanceUsersResponseFormProperties {
		AppInstanceArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppInstanceUsersResponseFormGroup() {
		return new FormGroup<ListAppInstanceUsersResponseFormProperties>({
			AppInstanceArn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary of the details of an <code>AppInstanceUser</code>. */
	export interface AppInstanceUserSummary {
		AppInstanceUserArn?: string;
		Name?: string;
		Metadata?: string;
	}

	/** Summary of the details of an <code>AppInstanceUser</code>. */
	export interface AppInstanceUserSummaryFormProperties {
		AppInstanceUserArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Metadata: FormControl<string | null | undefined>,
	}
	export function CreateAppInstanceUserSummaryFormGroup() {
		return new FormGroup<AppInstanceUserSummaryFormProperties>({
			AppInstanceUserArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAppInstancesResponse {
		AppInstances?: Array<AppInstanceSummary>;
		NextToken?: string;
	}
	export interface ListAppInstancesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppInstancesResponseFormGroup() {
		return new FormGroup<ListAppInstancesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary of the data for an <code>AppInstance</code>. */
	export interface AppInstanceSummary {
		AppInstanceArn?: string;
		Name?: string;
		Metadata?: string;
	}

	/** Summary of the data for an <code>AppInstance</code>. */
	export interface AppInstanceSummaryFormProperties {
		AppInstanceArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Metadata: FormControl<string | null | undefined>,
	}
	export function CreateAppInstanceSummaryFormGroup() {
		return new FormGroup<AppInstanceSummaryFormProperties>({
			AppInstanceArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface PutAppInstanceRetentionSettingsResponse {
		AppInstanceRetentionSettings?: AppInstanceRetentionSettings;
		InitiateDeletionTimestamp?: Date;
	}
	export interface PutAppInstanceRetentionSettingsResponseFormProperties {
		InitiateDeletionTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreatePutAppInstanceRetentionSettingsResponseFormGroup() {
		return new FormGroup<PutAppInstanceRetentionSettingsResponseFormProperties>({
			InitiateDeletionTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface PutAppInstanceUserExpirationSettingsResponse {
		AppInstanceUserArn?: string;
		ExpirationSettings?: ExpirationSettings;
	}
	export interface PutAppInstanceUserExpirationSettingsResponseFormProperties {
		AppInstanceUserArn: FormControl<string | null | undefined>,
	}
	export function CreatePutAppInstanceUserExpirationSettingsResponseFormGroup() {
		return new FormGroup<PutAppInstanceUserExpirationSettingsResponseFormProperties>({
			AppInstanceUserArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterAppInstanceUserEndpointResponse {
		AppInstanceUserArn?: string;
		EndpointId?: string;
	}
	export interface RegisterAppInstanceUserEndpointResponseFormProperties {
		AppInstanceUserArn: FormControl<string | null | undefined>,
		EndpointId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterAppInstanceUserEndpointResponseFormGroup() {
		return new FormGroup<RegisterAppInstanceUserEndpointResponseFormProperties>({
			AppInstanceUserArn: new FormControl<string | null | undefined>(undefined),
			EndpointId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAppInstanceResponse {
		AppInstanceArn?: string;
	}
	export interface UpdateAppInstanceResponseFormProperties {
		AppInstanceArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppInstanceResponseFormGroup() {
		return new FormGroup<UpdateAppInstanceResponseFormProperties>({
			AppInstanceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAppInstanceBotResponse {
		AppInstanceBotArn?: string;
	}
	export interface UpdateAppInstanceBotResponseFormProperties {
		AppInstanceBotArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppInstanceBotResponseFormGroup() {
		return new FormGroup<UpdateAppInstanceBotResponseFormProperties>({
			AppInstanceBotArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAppInstanceUserResponse {
		AppInstanceUserArn?: string;
	}
	export interface UpdateAppInstanceUserResponseFormProperties {
		AppInstanceUserArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppInstanceUserResponseFormGroup() {
		return new FormGroup<UpdateAppInstanceUserResponseFormProperties>({
			AppInstanceUserArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAppInstanceUserEndpointResponse {
		AppInstanceUserArn?: string;
		EndpointId?: string;
	}
	export interface UpdateAppInstanceUserEndpointResponseFormProperties {
		AppInstanceUserArn: FormControl<string | null | undefined>,
		EndpointId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppInstanceUserEndpointResponseFormGroup() {
		return new FormGroup<UpdateAppInstanceUserEndpointResponseFormProperties>({
			AppInstanceUserArn: new FormControl<string | null | undefined>(undefined),
			EndpointId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AllowMessages { ALL = 0, NONE = 1 }

	export interface CreateAppInstanceAdminRequest {

		/** Required */
		AppInstanceAdminArn: string;
	}
	export interface CreateAppInstanceAdminRequestFormProperties {

		/** Required */
		AppInstanceAdminArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppInstanceAdminRequestFormGroup() {
		return new FormGroup<CreateAppInstanceAdminRequestFormProperties>({
			AppInstanceAdminArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAppInstanceBotRequest {

		/** Required */
		AppInstanceArn: string;
		Name?: string;
		Metadata?: string;

		/** Required */
		ClientRequestToken: string;
		Tags?: Array<Tag>;

		/** Required */
		Configuration: Configuration;
	}
	export interface CreateAppInstanceBotRequestFormProperties {

		/** Required */
		AppInstanceArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Metadata: FormControl<string | null | undefined>,

		/** Required */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppInstanceBotRequestFormGroup() {
		return new FormGroup<CreateAppInstanceBotRequestFormProperties>({
			AppInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAppInstanceRequest {

		/** Required */
		Name: string;
		Metadata?: string;

		/** Required */
		ClientRequestToken: string;
		Tags?: Array<Tag>;
	}
	export interface CreateAppInstanceRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Metadata: FormControl<string | null | undefined>,

		/** Required */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppInstanceRequestFormGroup() {
		return new FormGroup<CreateAppInstanceRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Metadata: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAppInstanceUserRequest {

		/** Required */
		AppInstanceArn: string;

		/** Required */
		AppInstanceUserId: string;

		/** Required */
		Name: string;
		Metadata?: string;

		/** Required */
		ClientRequestToken: string;
		Tags?: Array<Tag>;
		ExpirationSettings?: ExpirationSettings;
	}
	export interface CreateAppInstanceUserRequestFormProperties {

		/** Required */
		AppInstanceArn: FormControl<string | null | undefined>,

		/** Required */
		AppInstanceUserId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		Metadata: FormControl<string | null | undefined>,

		/** Required */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppInstanceUserRequestFormGroup() {
		return new FormGroup<CreateAppInstanceUserRequestFormProperties>({
			AppInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AppInstanceUserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Metadata: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAppInstanceAdminRequest {
	}
	export interface DeleteAppInstanceAdminRequestFormProperties {
	}
	export function CreateDeleteAppInstanceAdminRequestFormGroup() {
		return new FormGroup<DeleteAppInstanceAdminRequestFormProperties>({
		});

	}

	export interface DeleteAppInstanceBotRequest {
	}
	export interface DeleteAppInstanceBotRequestFormProperties {
	}
	export function CreateDeleteAppInstanceBotRequestFormGroup() {
		return new FormGroup<DeleteAppInstanceBotRequestFormProperties>({
		});

	}

	export interface DeleteAppInstanceRequest {
	}
	export interface DeleteAppInstanceRequestFormProperties {
	}
	export function CreateDeleteAppInstanceRequestFormGroup() {
		return new FormGroup<DeleteAppInstanceRequestFormProperties>({
		});

	}

	export interface DeleteAppInstanceUserRequest {
	}
	export interface DeleteAppInstanceUserRequestFormProperties {
	}
	export function CreateDeleteAppInstanceUserRequestFormGroup() {
		return new FormGroup<DeleteAppInstanceUserRequestFormProperties>({
		});

	}

	export interface DeregisterAppInstanceUserEndpointRequest {
	}
	export interface DeregisterAppInstanceUserEndpointRequestFormProperties {
	}
	export function CreateDeregisterAppInstanceUserEndpointRequestFormGroup() {
		return new FormGroup<DeregisterAppInstanceUserEndpointRequestFormProperties>({
		});

	}

	export interface DescribeAppInstanceAdminRequest {
	}
	export interface DescribeAppInstanceAdminRequestFormProperties {
	}
	export function CreateDescribeAppInstanceAdminRequestFormGroup() {
		return new FormGroup<DescribeAppInstanceAdminRequestFormProperties>({
		});

	}

	export interface DescribeAppInstanceBotRequest {
	}
	export interface DescribeAppInstanceBotRequestFormProperties {
	}
	export function CreateDescribeAppInstanceBotRequestFormGroup() {
		return new FormGroup<DescribeAppInstanceBotRequestFormProperties>({
		});

	}

	export interface DescribeAppInstanceRequest {
	}
	export interface DescribeAppInstanceRequestFormProperties {
	}
	export function CreateDescribeAppInstanceRequestFormGroup() {
		return new FormGroup<DescribeAppInstanceRequestFormProperties>({
		});

	}

	export interface DescribeAppInstanceUserEndpointRequest {
	}
	export interface DescribeAppInstanceUserEndpointRequestFormProperties {
	}
	export function CreateDescribeAppInstanceUserEndpointRequestFormGroup() {
		return new FormGroup<DescribeAppInstanceUserEndpointRequestFormProperties>({
		});

	}

	export interface DescribeAppInstanceUserRequest {
	}
	export interface DescribeAppInstanceUserRequestFormProperties {
	}
	export function CreateDescribeAppInstanceUserRequestFormGroup() {
		return new FormGroup<DescribeAppInstanceUserRequestFormProperties>({
		});

	}

	export interface GetAppInstanceRetentionSettingsRequest {
	}
	export interface GetAppInstanceRetentionSettingsRequestFormProperties {
	}
	export function CreateGetAppInstanceRetentionSettingsRequestFormGroup() {
		return new FormGroup<GetAppInstanceRetentionSettingsRequestFormProperties>({
		});

	}

	export interface ListAppInstanceAdminsRequest {
	}
	export interface ListAppInstanceAdminsRequestFormProperties {
	}
	export function CreateListAppInstanceAdminsRequestFormGroup() {
		return new FormGroup<ListAppInstanceAdminsRequestFormProperties>({
		});

	}

	export interface ListAppInstanceBotsRequest {
	}
	export interface ListAppInstanceBotsRequestFormProperties {
	}
	export function CreateListAppInstanceBotsRequestFormGroup() {
		return new FormGroup<ListAppInstanceBotsRequestFormProperties>({
		});

	}

	export interface ListAppInstanceUserEndpointsRequest {
	}
	export interface ListAppInstanceUserEndpointsRequestFormProperties {
	}
	export function CreateListAppInstanceUserEndpointsRequestFormGroup() {
		return new FormGroup<ListAppInstanceUserEndpointsRequestFormProperties>({
		});

	}

	export interface ListAppInstanceUsersRequest {
	}
	export interface ListAppInstanceUsersRequestFormProperties {
	}
	export function CreateListAppInstanceUsersRequestFormGroup() {
		return new FormGroup<ListAppInstanceUsersRequestFormProperties>({
		});

	}

	export interface ListAppInstancesRequest {
	}
	export interface ListAppInstancesRequestFormProperties {
	}
	export function CreateListAppInstancesRequestFormGroup() {
		return new FormGroup<ListAppInstancesRequestFormProperties>({
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

	export interface PutAppInstanceRetentionSettingsRequest {

		/** Required */
		AppInstanceRetentionSettings: AppInstanceRetentionSettings;
	}
	export interface PutAppInstanceRetentionSettingsRequestFormProperties {
	}
	export function CreatePutAppInstanceRetentionSettingsRequestFormGroup() {
		return new FormGroup<PutAppInstanceRetentionSettingsRequestFormProperties>({
		});

	}

	export interface PutAppInstanceUserExpirationSettingsRequest {
		ExpirationSettings?: ExpirationSettings;
	}
	export interface PutAppInstanceUserExpirationSettingsRequestFormProperties {
	}
	export function CreatePutAppInstanceUserExpirationSettingsRequestFormGroup() {
		return new FormGroup<PutAppInstanceUserExpirationSettingsRequestFormProperties>({
		});

	}

	export interface RegisterAppInstanceUserEndpointRequest {
		Name?: string;

		/** Required */
		Type: AppInstanceUserEndpointType;

		/** Required */
		ResourceArn: string;

		/** Required */
		EndpointAttributes: EndpointAttributes;

		/** Required */
		ClientRequestToken: string;
		AllowMessages?: TargetedMessages;
	}
	export interface RegisterAppInstanceUserEndpointRequestFormProperties {
		Name: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<AppInstanceUserEndpointType | null | undefined>,

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,

		/** Required */
		ClientRequestToken: FormControl<string | null | undefined>,
		AllowMessages: FormControl<TargetedMessages | null | undefined>,
	}
	export function CreateRegisterAppInstanceUserEndpointRequestFormGroup() {
		return new FormGroup<RegisterAppInstanceUserEndpointRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<AppInstanceUserEndpointType | null | undefined>(undefined, [Validators.required]),
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AllowMessages: new FormControl<TargetedMessages | null | undefined>(undefined),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		ResourceARN: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		ResourceARN: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAppInstanceBotRequest {

		/** Required */
		Name: string;

		/** Required */
		Metadata: string;
		Configuration?: Configuration;
	}
	export interface UpdateAppInstanceBotRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Metadata: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppInstanceBotRequestFormGroup() {
		return new FormGroup<UpdateAppInstanceBotRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Metadata: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAppInstanceRequest {

		/** Required */
		Name: string;

		/** Required */
		Metadata: string;
	}
	export interface UpdateAppInstanceRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Metadata: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppInstanceRequestFormGroup() {
		return new FormGroup<UpdateAppInstanceRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Metadata: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAppInstanceUserEndpointRequest {
		Name?: string;
		AllowMessages?: TargetedMessages;
	}
	export interface UpdateAppInstanceUserEndpointRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		AllowMessages: FormControl<TargetedMessages | null | undefined>,
	}
	export function CreateUpdateAppInstanceUserEndpointRequestFormGroup() {
		return new FormGroup<UpdateAppInstanceUserEndpointRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			AllowMessages: new FormControl<TargetedMessages | null | undefined>(undefined),
		});

	}

	export interface UpdateAppInstanceUserRequest {

		/** Required */
		Name: string;

		/** Required */
		Metadata: string;
	}
	export interface UpdateAppInstanceUserRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Metadata: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppInstanceUserRequestFormGroup() {
		return new FormGroup<UpdateAppInstanceUserRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Metadata: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates an Amazon Chime SDK messaging <code>AppInstance</code> under an AWS account. Only SDK messaging customers use this API. <code>CreateAppInstance</code> supports idempotency behavior as described in the AWS API Standard.</p> <p>identity</p>
		 * Post app-instances
		 * @return {void} 
		 */
		CreateAppInstance(requestBody: CreateAppInstancePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'app-instances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all Amazon Chime <code>AppInstance</code>s created under a single AWS account.
		 * Get app-instances
		 * @param {number} max_results The maximum number of <code>AppInstance</code>s that you want to return.
		 * @param {string} next_token The token passed by previous API requests until you reach the maximum number of <code>AppInstances</code>.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAppInstancesResponse} Success
		 */
		ListAppInstances(max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListAppInstancesResponse> {
			return this.http.get<ListAppInstancesResponse>(this.baseUri + 'app-instances?max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Promotes an <code>AppInstanceUser</code> or <code>AppInstanceBot</code> to an <code>AppInstanceAdmin</code>. The promoted entity can perform the following actions. </p> <ul> <li> <p> <code>ChannelModerator</code> actions across all channels in the <code>AppInstance</code>.</p> </li> <li> <p> <code>DeleteChannelMessage</code> actions.</p> </li> </ul> <p>Only an <code>AppInstanceUser</code> and <code>AppInstanceBot</code> can be promoted to an <code>AppInstanceAdmin</code> role.</p>
		 * Post app-instances/{appInstanceArn}/admins
		 * @param {string} appInstanceArn The ARN of the <code>AppInstance</code>.
		 * @return {void} 
		 */
		CreateAppInstanceAdmin(appInstanceArn: string, requestBody: CreateAppInstanceAdminPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'app-instances/' + (appInstanceArn == null ? '' : encodeURIComponent(appInstanceArn)) + '/admins', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of the administrators in the <code>AppInstance</code>.
		 * Get app-instances/{appInstanceArn}/admins
		 * @param {string} appInstanceArn The ARN of the <code>AppInstance</code>.
		 * @param {number} max_results The maximum number of administrators that you want to return.
		 * @param {string} next_token The token returned from previous API requests until the number of administrators is reached.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAppInstanceAdminsResponse} Success
		 */
		ListAppInstanceAdmins(appInstanceArn: string, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListAppInstanceAdminsResponse> {
			return this.http.get<ListAppInstanceAdminsResponse>(this.baseUri + 'app-instances/' + (appInstanceArn == null ? '' : encodeURIComponent(appInstanceArn)) + '/admins&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a bot under an Amazon Chime <code>AppInstance</code>. The request consists of a unique <code>Configuration</code> and <code>Name</code> for that bot.
		 * Post app-instance-bots
		 * @return {void} 
		 */
		CreateAppInstanceBot(requestBody: CreateAppInstanceBotPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'app-instance-bots', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a user under an Amazon Chime <code>AppInstance</code>. The request consists of a unique <code>appInstanceUserId</code> and <code>Name</code> for that user.
		 * Post app-instance-users
		 * @return {void} 
		 */
		CreateAppInstanceUser(requestBody: CreateAppInstanceUserPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'app-instance-users', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an <code>AppInstance</code> and all associated data asynchronously.
		 * Delete app-instances/{appInstanceArn}
		 * @param {string} appInstanceArn The ARN of the <code>AppInstance</code>.
		 * @return {void} 
		 */
		DeleteAppInstance(appInstanceArn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'app-instances/' + (appInstanceArn == null ? '' : encodeURIComponent(appInstanceArn)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the full details of an <code>AppInstance</code>.
		 * Get app-instances/{appInstanceArn}
		 * @param {string} appInstanceArn The ARN of the <code>AppInstance</code>.
		 * @return {DescribeAppInstanceResponse} Success
		 */
		DescribeAppInstance(appInstanceArn: string): Observable<DescribeAppInstanceResponse> {
			return this.http.get<DescribeAppInstanceResponse>(this.baseUri + 'app-instances/' + (appInstanceArn == null ? '' : encodeURIComponent(appInstanceArn)), {});
		}

		/**
		 * Updates <code>AppInstance</code> metadata.
		 * Put app-instances/{appInstanceArn}
		 * @param {string} appInstanceArn The ARN of the <code>AppInstance</code>.
		 * @return {UpdateAppInstanceResponse} Success
		 */
		UpdateAppInstance(appInstanceArn: string, requestBody: UpdateAppInstancePutBody): Observable<UpdateAppInstanceResponse> {
			return this.http.put<UpdateAppInstanceResponse>(this.baseUri + 'app-instances/' + (appInstanceArn == null ? '' : encodeURIComponent(appInstanceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Demotes an <code>AppInstanceAdmin</code> to an <code>AppInstanceUser</code> or <code>AppInstanceBot</code>. This action does not delete the user.
		 * Delete app-instances/{appInstanceArn}/admins/{appInstanceAdminArn}
		 * @param {string} appInstanceAdminArn The ARN of the <code>AppInstance</code>'s administrator.
		 * @param {string} appInstanceArn The ARN of the <code>AppInstance</code>.
		 * @return {void} 
		 */
		DeleteAppInstanceAdmin(appInstanceAdminArn: string, appInstanceArn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'app-instances/' + (appInstanceArn == null ? '' : encodeURIComponent(appInstanceArn)) + '/admins/' + (appInstanceAdminArn == null ? '' : encodeURIComponent(appInstanceAdminArn)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the full details of an <code>AppInstanceAdmin</code>.
		 * Get app-instances/{appInstanceArn}/admins/{appInstanceAdminArn}
		 * @param {string} appInstanceAdminArn The ARN of the <code>AppInstanceAdmin</code>.
		 * @param {string} appInstanceArn The ARN of the <code>AppInstance</code>.
		 * @return {DescribeAppInstanceAdminResponse} Success
		 */
		DescribeAppInstanceAdmin(appInstanceAdminArn: string, appInstanceArn: string): Observable<DescribeAppInstanceAdminResponse> {
			return this.http.get<DescribeAppInstanceAdminResponse>(this.baseUri + 'app-instances/' + (appInstanceArn == null ? '' : encodeURIComponent(appInstanceArn)) + '/admins/' + (appInstanceAdminArn == null ? '' : encodeURIComponent(appInstanceAdminArn)), {});
		}

		/**
		 * Deletes an <code>AppInstanceBot</code>.
		 * Delete app-instance-bots/{appInstanceBotArn}
		 * @param {string} appInstanceBotArn The ARN of the <code>AppInstanceBot</code> being deleted.
		 * @return {void} 
		 */
		DeleteAppInstanceBot(appInstanceBotArn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'app-instance-bots/' + (appInstanceBotArn == null ? '' : encodeURIComponent(appInstanceBotArn)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * The <code>AppInstanceBot's</code> information.
		 * Get app-instance-bots/{appInstanceBotArn}
		 * @param {string} appInstanceBotArn The ARN of the <code>AppInstanceBot</code>.
		 * @return {DescribeAppInstanceBotResponse} Success
		 */
		DescribeAppInstanceBot(appInstanceBotArn: string): Observable<DescribeAppInstanceBotResponse> {
			return this.http.get<DescribeAppInstanceBotResponse>(this.baseUri + 'app-instance-bots/' + (appInstanceBotArn == null ? '' : encodeURIComponent(appInstanceBotArn)), {});
		}

		/**
		 * Updates the name and metadata of an <code>AppInstanceBot</code>.
		 * Put app-instance-bots/{appInstanceBotArn}
		 * @param {string} appInstanceBotArn The ARN of the <code>AppInstanceBot</code>.
		 * @return {UpdateAppInstanceBotResponse} Success
		 */
		UpdateAppInstanceBot(appInstanceBotArn: string, requestBody: UpdateAppInstanceBotPutBody): Observable<UpdateAppInstanceBotResponse> {
			return this.http.put<UpdateAppInstanceBotResponse>(this.baseUri + 'app-instance-bots/' + (appInstanceBotArn == null ? '' : encodeURIComponent(appInstanceBotArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an <code>AppInstanceUser</code>.
		 * Delete app-instance-users/{appInstanceUserArn}
		 * @param {string} appInstanceUserArn The ARN of the user request being deleted.
		 * @return {void} 
		 */
		DeleteAppInstanceUser(appInstanceUserArn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'app-instance-users/' + (appInstanceUserArn == null ? '' : encodeURIComponent(appInstanceUserArn)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the full details of an <code>AppInstanceUser</code>.
		 * Get app-instance-users/{appInstanceUserArn}
		 * @param {string} appInstanceUserArn The ARN of the <code>AppInstanceUser</code>.
		 * @return {DescribeAppInstanceUserResponse} Success
		 */
		DescribeAppInstanceUser(appInstanceUserArn: string): Observable<DescribeAppInstanceUserResponse> {
			return this.http.get<DescribeAppInstanceUserResponse>(this.baseUri + 'app-instance-users/' + (appInstanceUserArn == null ? '' : encodeURIComponent(appInstanceUserArn)), {});
		}

		/**
		 * Updates the details of an <code>AppInstanceUser</code>. You can update names and metadata.
		 * Put app-instance-users/{appInstanceUserArn}
		 * @param {string} appInstanceUserArn The ARN of the <code>AppInstanceUser</code>.
		 * @return {UpdateAppInstanceUserResponse} Success
		 */
		UpdateAppInstanceUser(appInstanceUserArn: string, requestBody: UpdateAppInstanceUserPutBody): Observable<UpdateAppInstanceUserResponse> {
			return this.http.put<UpdateAppInstanceUserResponse>(this.baseUri + 'app-instance-users/' + (appInstanceUserArn == null ? '' : encodeURIComponent(appInstanceUserArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deregisters an <code>AppInstanceUserEndpoint</code>.
		 * Delete app-instance-users/{appInstanceUserArn}/endpoints/{endpointId}
		 * @param {string} appInstanceUserArn The ARN of the <code>AppInstanceUser</code>.
		 * @param {string} endpointId The unique identifier of the <code>AppInstanceUserEndpoint</code>.
		 * @return {void} 
		 */
		DeregisterAppInstanceUserEndpoint(appInstanceUserArn: string, endpointId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'app-instance-users/' + (appInstanceUserArn == null ? '' : encodeURIComponent(appInstanceUserArn)) + '/endpoints/' + (endpointId == null ? '' : encodeURIComponent(endpointId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the full details of an <code>AppInstanceUserEndpoint</code>.
		 * Get app-instance-users/{appInstanceUserArn}/endpoints/{endpointId}
		 * @param {string} appInstanceUserArn The ARN of the <code>AppInstanceUser</code>.
		 * @param {string} endpointId The unique identifier of the <code>AppInstanceUserEndpoint</code>.
		 * @return {DescribeAppInstanceUserEndpointResponse} Success
		 */
		DescribeAppInstanceUserEndpoint(appInstanceUserArn: string, endpointId: string): Observable<DescribeAppInstanceUserEndpointResponse> {
			return this.http.get<DescribeAppInstanceUserEndpointResponse>(this.baseUri + 'app-instance-users/' + (appInstanceUserArn == null ? '' : encodeURIComponent(appInstanceUserArn)) + '/endpoints/' + (endpointId == null ? '' : encodeURIComponent(endpointId)), {});
		}

		/**
		 * Updates the details of an <code>AppInstanceUserEndpoint</code>. You can update the name and <code>AllowMessage</code> values.
		 * Put app-instance-users/{appInstanceUserArn}/endpoints/{endpointId}
		 * @param {string} appInstanceUserArn The ARN of the <code>AppInstanceUser</code>.
		 * @param {string} endpointId The unique identifier of the <code>AppInstanceUserEndpoint</code>.
		 * @return {UpdateAppInstanceUserEndpointResponse} Success
		 */
		UpdateAppInstanceUserEndpoint(appInstanceUserArn: string, endpointId: string, requestBody: UpdateAppInstanceUserEndpointPutBody): Observable<UpdateAppInstanceUserEndpointResponse> {
			return this.http.put<UpdateAppInstanceUserEndpointResponse>(this.baseUri + 'app-instance-users/' + (appInstanceUserArn == null ? '' : encodeURIComponent(appInstanceUserArn)) + '/endpoints/' + (endpointId == null ? '' : encodeURIComponent(endpointId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the retention settings for an <code>AppInstance</code>.
		 * Get app-instances/{appInstanceArn}/retention-settings
		 * @param {string} appInstanceArn The ARN of the <code>AppInstance</code>.
		 * @return {GetAppInstanceRetentionSettingsResponse} Success
		 */
		GetAppInstanceRetentionSettings(appInstanceArn: string): Observable<GetAppInstanceRetentionSettingsResponse> {
			return this.http.get<GetAppInstanceRetentionSettingsResponse>(this.baseUri + 'app-instances/' + (appInstanceArn == null ? '' : encodeURIComponent(appInstanceArn)) + '/retention-settings', {});
		}

		/**
		 * Sets the amount of time in days that a given <code>AppInstance</code> retains data.
		 * Put app-instances/{appInstanceArn}/retention-settings
		 * @param {string} appInstanceArn The ARN of the <code>AppInstance</code>.
		 * @return {PutAppInstanceRetentionSettingsResponse} Success
		 */
		PutAppInstanceRetentionSettings(appInstanceArn: string, requestBody: PutAppInstanceRetentionSettingsPutBody): Observable<PutAppInstanceRetentionSettingsResponse> {
			return this.http.put<PutAppInstanceRetentionSettingsResponse>(this.baseUri + 'app-instances/' + (appInstanceArn == null ? '' : encodeURIComponent(appInstanceArn)) + '/retention-settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all <code>AppInstanceBots</code> created under a single <code>AppInstance</code>.
		 * Get app-instance-bots#app-instance-arn
		 * @param {string} app_instance_arn The ARN of the <code>AppInstance</code>.
		 * @param {number} max_results The maximum number of requests to return.
		 * @param {string} next_token The token passed by previous API calls until all requested bots are returned.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAppInstanceBotsResponse} Success
		 */
		ListAppInstanceBots(app_instance_arn: string, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListAppInstanceBotsResponse> {
			return this.http.get<ListAppInstanceBotsResponse>(this.baseUri + 'app-instance-bots#app-instance-arn?app_instance_arn=' + (app_instance_arn == null ? '' : encodeURIComponent(app_instance_arn)) + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists all the <code>AppInstanceUserEndpoints</code> created under a single <code>AppInstanceUser</code>.
		 * Get app-instance-users/{appInstanceUserArn}/endpoints
		 * @param {string} appInstanceUserArn The ARN of the <code>AppInstanceUser</code>.
		 * @param {number} max_results The maximum number of endpoints that you want to return.
		 * @param {string} next_token The token passed by previous API calls until all requested endpoints are returned.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAppInstanceUserEndpointsResponse} Success
		 */
		ListAppInstanceUserEndpoints(appInstanceUserArn: string, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListAppInstanceUserEndpointsResponse> {
			return this.http.get<ListAppInstanceUserEndpointsResponse>(this.baseUri + 'app-instance-users/' + (appInstanceUserArn == null ? '' : encodeURIComponent(appInstanceUserArn)) + '/endpoints&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Registers an endpoint under an Amazon Chime <code>AppInstanceUser</code>. The endpoint receives messages for a user. For push notifications, the endpoint is a mobile device used to receive mobile push notifications for a user.
		 * Post app-instance-users/{appInstanceUserArn}/endpoints
		 * @param {string} appInstanceUserArn The ARN of the <code>AppInstanceUser</code>.
		 * @return {void} 
		 */
		RegisterAppInstanceUserEndpoint(appInstanceUserArn: string, requestBody: RegisterAppInstanceUserEndpointPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'app-instance-users/' + (appInstanceUserArn == null ? '' : encodeURIComponent(appInstanceUserArn)) + '/endpoints', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List all <code>AppInstanceUsers</code> created under a single <code>AppInstance</code>.
		 * Get app-instance-users#app-instance-arn
		 * @param {string} app_instance_arn The ARN of the <code>AppInstance</code>.
		 * @param {number} max_results The maximum number of requests that you want returned.
		 * @param {string} next_token The token passed by previous API calls until all requested users are returned.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAppInstanceUsersResponse} Success
		 */
		ListAppInstanceUsers(app_instance_arn: string, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListAppInstanceUsersResponse> {
			return this.http.get<ListAppInstanceUsersResponse>(this.baseUri + 'app-instance-users#app-instance-arn?app_instance_arn=' + (app_instance_arn == null ? '' : encodeURIComponent(app_instance_arn)) + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists the tags applied to an Amazon Chime SDK identity resource.
		 * Get tags#arn
		 * @param {string} arn The ARN of the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(arn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags#arn?arn=' + (arn == null ? '' : encodeURIComponent(arn)), {});
		}

		/**
		 * <p>Sets the number of days before the <code>AppInstanceUser</code> is automatically deleted.</p> <note> <p>A background process deletes expired <code>AppInstanceUsers</code> within 6 hours of expiration. Actual deletion times may vary.</p> <p>Expired <code>AppInstanceUsers</code> that have not yet been deleted appear as active, and you can update their expiration settings. The system honors the new settings.</p> </note>
		 * Put app-instance-users/{appInstanceUserArn}/expiration-settings
		 * @param {string} appInstanceUserArn The ARN of the <code>AppInstanceUser</code>.
		 * @return {PutAppInstanceUserExpirationSettingsResponse} Success
		 */
		PutAppInstanceUserExpirationSettings(appInstanceUserArn: string, requestBody: PutAppInstanceUserExpirationSettingsPutBody): Observable<PutAppInstanceUserExpirationSettingsResponse> {
			return this.http.put<PutAppInstanceUserExpirationSettingsResponse>(this.baseUri + 'app-instance-users/' + (appInstanceUserArn == null ? '' : encodeURIComponent(appInstanceUserArn)) + '/expiration-settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Applies the specified tags to the specified Amazon Chime SDK identity resource.
		 * Post tags#operation=tag-resource
		 * @return {void} 
		 */
		TagResource(operation: TagResourceOperation, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags#operation=tag-resource?operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes the specified tags from the specified Amazon Chime SDK identity resource.
		 * Post tags#operation=untag-resource
		 * @return {void} 
		 */
		UntagResource(operation: UntagResourceOperation, requestBody: UntagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags#operation=untag-resource?operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface CreateAppInstancePostBody {

		/**
		 * The name of the <code>AppInstance</code>.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: string;

		/**
		 * The metadata of the <code>AppInstance</code>. Limited to a 1KB string in UTF-8.
		 * Max length: 1024
		 * Min length: 0
		 */
		Metadata?: string | null;

		/**
		 * The unique ID of the request. Use different tokens to create different <code>AppInstances</code>.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken: string;

		/**
		 * Tags assigned to the <code>AppInstance</code>.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateAppInstancePostBodyFormProperties {

		/**
		 * The name of the <code>AppInstance</code>.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The metadata of the <code>AppInstance</code>. Limited to a 1KB string in UTF-8.
		 * Max length: 1024
		 * Min length: 0
		 */
		Metadata: FormControl<string | null | undefined>,

		/**
		 * The unique ID of the request. Use different tokens to create different <code>AppInstances</code>.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppInstancePostBodyFormGroup() {
		return new FormGroup<CreateAppInstancePostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*')]),
			Metadata: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*')]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(64), Validators.pattern('[-_a-zA-Z0-9]*')]),
		});

	}

	export interface CreateAppInstanceAdminPostBody {

		/**
		 * The ARN of the administrator of the current <code>AppInstance</code>.
		 * Required
		 * Max length: 1600
		 * Min length: 5
		 */
		AppInstanceAdminArn: string;
	}
	export interface CreateAppInstanceAdminPostBodyFormProperties {

		/**
		 * The ARN of the administrator of the current <code>AppInstance</code>.
		 * Required
		 * Max length: 1600
		 * Min length: 5
		 */
		AppInstanceAdminArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppInstanceAdminPostBodyFormGroup() {
		return new FormGroup<CreateAppInstanceAdminPostBodyFormProperties>({
			AppInstanceAdminArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(1600), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
		});

	}

	export interface CreateAppInstanceBotPostBody {

		/**
		 * The ARN of the <code>AppInstance</code> request.
		 * Required
		 * Max length: 1600
		 * Min length: 5
		 */
		AppInstanceArn: string;

		/**
		 * The user's name.
		 * Max length: 256
		 * Min length: 0
		 */
		Name?: string | null;

		/**
		 * The request metadata. Limited to a 1KB string in UTF-8.
		 * Max length: 1024
		 * Min length: 0
		 */
		Metadata?: string | null;

		/**
		 * The unique ID for the client making the request. Use different tokens for different <code>AppInstanceBots</code>.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken: string;

		/**
		 * The tags assigned to the <code>AppInstanceBot</code>.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;

		/**
		 * A structure that contains configuration data.
		 * Required
		 */
		Configuration: CreateAppInstanceBotPostBodyConfiguration;
	}
	export interface CreateAppInstanceBotPostBodyFormProperties {

		/**
		 * The ARN of the <code>AppInstance</code> request.
		 * Required
		 * Max length: 1600
		 * Min length: 5
		 */
		AppInstanceArn: FormControl<string | null | undefined>,

		/**
		 * The user's name.
		 * Max length: 256
		 * Min length: 0
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The request metadata. Limited to a 1KB string in UTF-8.
		 * Max length: 1024
		 * Min length: 0
		 */
		Metadata: FormControl<string | null | undefined>,

		/**
		 * The unique ID for the client making the request. Use different tokens for different <code>AppInstanceBots</code>.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppInstanceBotPostBodyFormGroup() {
		return new FormGroup<CreateAppInstanceBotPostBodyFormProperties>({
			AppInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(1600), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*')]),
			Metadata: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*')]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(64), Validators.pattern('[-_a-zA-Z0-9]*')]),
		});

	}

	export interface CreateAppInstanceBotPostBodyConfiguration {
		Lex?: LexConfiguration;
	}
	export interface CreateAppInstanceBotPostBodyConfigurationFormProperties {
	}
	export function CreateCreateAppInstanceBotPostBodyConfigurationFormGroup() {
		return new FormGroup<CreateAppInstanceBotPostBodyConfigurationFormProperties>({
		});

	}

	export interface CreateAppInstanceUserPostBody {

		/**
		 * The ARN of the <code>AppInstance</code> request.
		 * Required
		 * Max length: 1600
		 * Min length: 5
		 */
		AppInstanceArn: string;

		/**
		 * The user ID of the <code>AppInstance</code>.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		AppInstanceUserId: string;

		/**
		 * The user's name.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Name: string;

		/**
		 * The request's metadata. Limited to a 1KB string in UTF-8.
		 * Max length: 1024
		 * Min length: 0
		 */
		Metadata?: string | null;

		/**
		 * The unique ID of the request. Use different tokens to request additional <code>AppInstances</code>.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken: string;

		/**
		 * Tags assigned to the <code>AppInstanceUser</code>.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;

		/** Determines the interval after which an <code>AppInstanceUser</code> is automatically deleted. */
		ExpirationSettings?: CreateAppInstanceUserPostBodyExpirationSettings;
	}
	export interface CreateAppInstanceUserPostBodyFormProperties {

		/**
		 * The ARN of the <code>AppInstance</code> request.
		 * Required
		 * Max length: 1600
		 * Min length: 5
		 */
		AppInstanceArn: FormControl<string | null | undefined>,

		/**
		 * The user ID of the <code>AppInstance</code>.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		AppInstanceUserId: FormControl<string | null | undefined>,

		/**
		 * The user's name.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The request's metadata. Limited to a 1KB string in UTF-8.
		 * Max length: 1024
		 * Min length: 0
		 */
		Metadata: FormControl<string | null | undefined>,

		/**
		 * The unique ID of the request. Use different tokens to request additional <code>AppInstances</code>.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppInstanceUserPostBodyFormGroup() {
		return new FormGroup<CreateAppInstanceUserPostBodyFormProperties>({
			AppInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(1600), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
			AppInstanceUserId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[A-Za-z0-9]([A-Za-z0-9\:\-\_\.\@]{0,62}[A-Za-z0-9])?')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('.*\S.*')]),
			Metadata: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*')]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(64), Validators.pattern('[-_a-zA-Z0-9]*')]),
		});

	}

	export interface CreateAppInstanceUserPostBodyExpirationSettings {
		ExpirationDays?: number | null;
		ExpirationCriterion?: ExpirationCriterion;
	}
	export interface CreateAppInstanceUserPostBodyExpirationSettingsFormProperties {
		ExpirationDays: FormControl<number | null | undefined>,
		ExpirationCriterion: FormControl<ExpirationCriterion | null | undefined>,
	}
	export function CreateCreateAppInstanceUserPostBodyExpirationSettingsFormGroup() {
		return new FormGroup<CreateAppInstanceUserPostBodyExpirationSettingsFormProperties>({
			ExpirationDays: new FormControl<number | null | undefined>(undefined),
			ExpirationCriterion: new FormControl<ExpirationCriterion | null | undefined>(undefined),
		});

	}

	export interface UpdateAppInstancePutBody {

		/**
		 * The name that you want to change.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: string;

		/**
		 * The metadata that you want to change.
		 * Required
		 * Max length: 1024
		 * Min length: 0
		 */
		Metadata: string;
	}
	export interface UpdateAppInstancePutBodyFormProperties {

		/**
		 * The name that you want to change.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The metadata that you want to change.
		 * Required
		 * Max length: 1024
		 * Min length: 0
		 */
		Metadata: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppInstancePutBodyFormGroup() {
		return new FormGroup<UpdateAppInstancePutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*')]),
			Metadata: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*')]),
		});

	}

	export interface UpdateAppInstanceBotPutBody {

		/**
		 * The name of the <code>AppInstanceBot</code>.
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		Name: string;

		/**
		 * The metadata of the <code>AppInstanceBot</code>.
		 * Required
		 * Max length: 1024
		 * Min length: 0
		 */
		Metadata: string;

		/** A structure that contains configuration data. */
		Configuration?: UpdateAppInstanceBotPutBodyConfiguration;
	}
	export interface UpdateAppInstanceBotPutBodyFormProperties {

		/**
		 * The name of the <code>AppInstanceBot</code>.
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The metadata of the <code>AppInstanceBot</code>.
		 * Required
		 * Max length: 1024
		 * Min length: 0
		 */
		Metadata: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppInstanceBotPutBodyFormGroup() {
		return new FormGroup<UpdateAppInstanceBotPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*')]),
			Metadata: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*')]),
		});

	}

	export interface UpdateAppInstanceBotPutBodyConfiguration {
		Lex?: LexConfiguration;
	}
	export interface UpdateAppInstanceBotPutBodyConfigurationFormProperties {
	}
	export function CreateUpdateAppInstanceBotPutBodyConfigurationFormGroup() {
		return new FormGroup<UpdateAppInstanceBotPutBodyConfigurationFormProperties>({
		});

	}

	export interface UpdateAppInstanceUserPutBody {

		/**
		 * The name of the <code>AppInstanceUser</code>.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Name: string;

		/**
		 * The metadata of the <code>AppInstanceUser</code>.
		 * Required
		 * Max length: 1024
		 * Min length: 0
		 */
		Metadata: string;
	}
	export interface UpdateAppInstanceUserPutBodyFormProperties {

		/**
		 * The name of the <code>AppInstanceUser</code>.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The metadata of the <code>AppInstanceUser</code>.
		 * Required
		 * Max length: 1024
		 * Min length: 0
		 */
		Metadata: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppInstanceUserPutBodyFormGroup() {
		return new FormGroup<UpdateAppInstanceUserPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('.*\S.*')]),
			Metadata: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*')]),
		});

	}

	export interface UpdateAppInstanceUserEndpointPutBody {

		/**
		 * The name of the <code>AppInstanceUserEndpoint</code>.
		 * Max length: 1600
		 * Min length: 0
		 */
		Name?: string | null;

		/** Boolean that controls whether the <code>AppInstanceUserEndpoint</code> is opted in to receive messages. <code>ALL</code> indicates the endpoint will receive all messages. <code>NONE</code> indicates the endpoint will receive no messages. */
		AllowMessages?: TargetedMessages | null;
	}
	export interface UpdateAppInstanceUserEndpointPutBodyFormProperties {

		/**
		 * The name of the <code>AppInstanceUserEndpoint</code>.
		 * Max length: 1600
		 * Min length: 0
		 */
		Name: FormControl<string | null | undefined>,

		/** Boolean that controls whether the <code>AppInstanceUserEndpoint</code> is opted in to receive messages. <code>ALL</code> indicates the endpoint will receive all messages. <code>NONE</code> indicates the endpoint will receive no messages. */
		AllowMessages: FormControl<TargetedMessages | null | undefined>,
	}
	export function CreateUpdateAppInstanceUserEndpointPutBodyFormGroup() {
		return new FormGroup<UpdateAppInstanceUserEndpointPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1600), Validators.pattern('.*')]),
			AllowMessages: new FormControl<TargetedMessages | null | undefined>(undefined),
		});

	}

	export interface PutAppInstanceRetentionSettingsPutBody {

		/**
		 * The details of the data-retention settings for an <code>AppInstance</code>.
		 * Required
		 */
		AppInstanceRetentionSettings: PutAppInstanceRetentionSettingsPutBodyAppInstanceRetentionSettings;
	}
	export interface PutAppInstanceRetentionSettingsPutBodyFormProperties {
	}
	export function CreatePutAppInstanceRetentionSettingsPutBodyFormGroup() {
		return new FormGroup<PutAppInstanceRetentionSettingsPutBodyFormProperties>({
		});

	}

	export interface PutAppInstanceRetentionSettingsPutBodyAppInstanceRetentionSettings {
		ChannelRetentionSettings?: ChannelRetentionSettings;
	}
	export interface PutAppInstanceRetentionSettingsPutBodyAppInstanceRetentionSettingsFormProperties {
	}
	export function CreatePutAppInstanceRetentionSettingsPutBodyAppInstanceRetentionSettingsFormGroup() {
		return new FormGroup<PutAppInstanceRetentionSettingsPutBodyAppInstanceRetentionSettingsFormProperties>({
		});

	}

	export interface RegisterAppInstanceUserEndpointPostBody {

		/**
		 * The name of the <code>AppInstanceUserEndpoint</code>.
		 * Max length: 1600
		 * Min length: 0
		 */
		Name?: string | null;

		/**
		 * <p>The type of the <code>AppInstanceUserEndpoint</code>. Supported types:</p> <ul> <li> <p> <code>APNS</code>: The mobile notification service for an Apple device.</p> </li> <li> <p> <code>APNS_SANDBOX</code>: The sandbox environment of the mobile notification service for an Apple device.</p> </li> <li> <p> <code>GCM</code>: The mobile notification service for an Android device.</p> </li> </ul> <p>Populate the <code>ResourceArn</code> value of each type as <code>PinpointAppArn</code>.</p>
		 * Required
		 */
		Type: AppInstanceUserEndpointType;

		/**
		 * The ARN of the resource to which the endpoint belongs.
		 * Required
		 * Max length: 1600
		 * Min length: 5
		 */
		ResourceArn: string;

		/**
		 * The attributes of an <code>Endpoint</code>.
		 * Required
		 */
		EndpointAttributes: RegisterAppInstanceUserEndpointPostBodyEndpointAttributes;

		/**
		 * The unique ID assigned to the request. Use different tokens to register other endpoints.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken: string;

		/** Boolean that controls whether the AppInstanceUserEndpoint is opted in to receive messages. <code>ALL</code> indicates the endpoint receives all messages. <code>NONE</code> indicates the endpoint receives no messages. */
		AllowMessages?: TargetedMessages | null;
	}
	export interface RegisterAppInstanceUserEndpointPostBodyFormProperties {

		/**
		 * The name of the <code>AppInstanceUserEndpoint</code>.
		 * Max length: 1600
		 * Min length: 0
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * <p>The type of the <code>AppInstanceUserEndpoint</code>. Supported types:</p> <ul> <li> <p> <code>APNS</code>: The mobile notification service for an Apple device.</p> </li> <li> <p> <code>APNS_SANDBOX</code>: The sandbox environment of the mobile notification service for an Apple device.</p> </li> <li> <p> <code>GCM</code>: The mobile notification service for an Android device.</p> </li> </ul> <p>Populate the <code>ResourceArn</code> value of each type as <code>PinpointAppArn</code>.</p>
		 * Required
		 */
		Type: FormControl<AppInstanceUserEndpointType | null | undefined>,

		/**
		 * The ARN of the resource to which the endpoint belongs.
		 * Required
		 * Max length: 1600
		 * Min length: 5
		 */
		ResourceArn: FormControl<string | null | undefined>,

		/**
		 * The unique ID assigned to the request. Use different tokens to register other endpoints.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/** Boolean that controls whether the AppInstanceUserEndpoint is opted in to receive messages. <code>ALL</code> indicates the endpoint receives all messages. <code>NONE</code> indicates the endpoint receives no messages. */
		AllowMessages: FormControl<TargetedMessages | null | undefined>,
	}
	export function CreateRegisterAppInstanceUserEndpointPostBodyFormGroup() {
		return new FormGroup<RegisterAppInstanceUserEndpointPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1600), Validators.pattern('.*')]),
			Type: new FormControl<AppInstanceUserEndpointType | null | undefined>(undefined, [Validators.required]),
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(1600), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(64), Validators.pattern('[-_a-zA-Z0-9]*')]),
			AllowMessages: new FormControl<TargetedMessages | null | undefined>(undefined),
		});

	}

	export interface RegisterAppInstanceUserEndpointPostBodyEndpointAttributes {
		DeviceToken?: string;
		VoipDeviceToken?: string;
	}
	export interface RegisterAppInstanceUserEndpointPostBodyEndpointAttributesFormProperties {
		DeviceToken: FormControl<string | null | undefined>,
		VoipDeviceToken: FormControl<string | null | undefined>,
	}
	export function CreateRegisterAppInstanceUserEndpointPostBodyEndpointAttributesFormGroup() {
		return new FormGroup<RegisterAppInstanceUserEndpointPostBodyEndpointAttributesFormProperties>({
			DeviceToken: new FormControl<string | null | undefined>(undefined),
			VoipDeviceToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutAppInstanceUserExpirationSettingsPutBody {

		/** Determines the interval after which an <code>AppInstanceUser</code> is automatically deleted. */
		ExpirationSettings?: PutAppInstanceUserExpirationSettingsPutBodyExpirationSettings;
	}
	export interface PutAppInstanceUserExpirationSettingsPutBodyFormProperties {
	}
	export function CreatePutAppInstanceUserExpirationSettingsPutBodyFormGroup() {
		return new FormGroup<PutAppInstanceUserExpirationSettingsPutBodyFormProperties>({
		});

	}

	export interface PutAppInstanceUserExpirationSettingsPutBodyExpirationSettings {
		ExpirationDays?: number | null;
		ExpirationCriterion?: ExpirationCriterion;
	}
	export interface PutAppInstanceUserExpirationSettingsPutBodyExpirationSettingsFormProperties {
		ExpirationDays: FormControl<number | null | undefined>,
		ExpirationCriterion: FormControl<ExpirationCriterion | null | undefined>,
	}
	export function CreatePutAppInstanceUserExpirationSettingsPutBodyExpirationSettingsFormGroup() {
		return new FormGroup<PutAppInstanceUserExpirationSettingsPutBodyExpirationSettingsFormProperties>({
			ExpirationDays: new FormControl<number | null | undefined>(undefined),
			ExpirationCriterion: new FormControl<ExpirationCriterion | null | undefined>(undefined),
		});

	}

	export enum TagResourceOperation { 'tag-resource' = 0 }

	export interface TagResourcePostBody {

		/**
		 * The resource ARN.
		 * Required
		 * Max length: 1600
		 * Min length: 5
		 */
		ResourceARN: string;

		/**
		 * The tag key-value pairs.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags: Array<Tag>;
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The resource ARN.
		 * Required
		 * Max length: 1600
		 * Min length: 5
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(1600), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
		});

	}

	export enum UntagResourceOperation { 'untag-resource' = 0 }

	export interface UntagResourcePostBody {

		/**
		 * The resource ARN.
		 * Required
		 * Max length: 1600
		 * Min length: 5
		 */
		ResourceARN: string;

		/**
		 * The tag keys.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		TagKeys: Array<string>;
	}
	export interface UntagResourcePostBodyFormProperties {

		/**
		 * The resource ARN.
		 * Required
		 * Max length: 1600
		 * Min length: 5
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourcePostBodyFormGroup() {
		return new FormGroup<UntagResourcePostBodyFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(1600), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
		});

	}

}

