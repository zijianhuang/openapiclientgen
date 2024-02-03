import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Returns the objects or data if successful. Otherwise, returns an error. */
	export interface AddTagsResponse {
	}

	/** Returns the objects or data if successful. Otherwise, returns an error. */
	export interface AddTagsResponseFormProperties {
	}
	export function CreateAddTagsResponseFormGroup() {
		return new FormGroup<AddTagsResponseFormProperties>({
		});

	}


	/** Specifies the tags to add to a trail, event data store, or channel. */
	export interface AddTagsRequest {

		/** Required */
		ResourceId: string;

		/** Required */
		TagsList: Array<Tag>;
	}

	/** Specifies the tags to add to a trail, event data store, or channel. */
	export interface AddTagsRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateAddTagsRequestFormGroup() {
		return new FormGroup<AddTagsRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A custom key-value pair associated with a resource such as a CloudTrail trail, event data store, or channel. */
	export interface Tag {

		/** Required */
		Key: string;
		Value?: string;
	}

	/** A custom key-value pair associated with a resource such as a CloudTrail trail, event data store, or channel. */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined),
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

	export interface CloudTrailARNInvalidException {
	}
	export interface CloudTrailARNInvalidExceptionFormProperties {
	}
	export function CreateCloudTrailARNInvalidExceptionFormGroup() {
		return new FormGroup<CloudTrailARNInvalidExceptionFormProperties>({
		});

	}

	export interface EventDataStoreARNInvalidException {
	}
	export interface EventDataStoreARNInvalidExceptionFormProperties {
	}
	export function CreateEventDataStoreARNInvalidExceptionFormGroup() {
		return new FormGroup<EventDataStoreARNInvalidExceptionFormProperties>({
		});

	}

	export interface ChannelARNInvalidException {
	}
	export interface ChannelARNInvalidExceptionFormProperties {
	}
	export function CreateChannelARNInvalidExceptionFormGroup() {
		return new FormGroup<ChannelARNInvalidExceptionFormProperties>({
		});

	}

	export interface ResourceTypeNotSupportedException {
	}
	export interface ResourceTypeNotSupportedExceptionFormProperties {
	}
	export function CreateResourceTypeNotSupportedExceptionFormGroup() {
		return new FormGroup<ResourceTypeNotSupportedExceptionFormProperties>({
		});

	}

	export interface TagsLimitExceededException {
	}
	export interface TagsLimitExceededExceptionFormProperties {
	}
	export function CreateTagsLimitExceededExceptionFormGroup() {
		return new FormGroup<TagsLimitExceededExceptionFormProperties>({
		});

	}

	export interface InvalidTrailNameException {
	}
	export interface InvalidTrailNameExceptionFormProperties {
	}
	export function CreateInvalidTrailNameExceptionFormGroup() {
		return new FormGroup<InvalidTrailNameExceptionFormProperties>({
		});

	}

	export interface InvalidTagParameterException {
	}
	export interface InvalidTagParameterExceptionFormProperties {
	}
	export function CreateInvalidTagParameterExceptionFormGroup() {
		return new FormGroup<InvalidTagParameterExceptionFormProperties>({
		});

	}

	export interface InactiveEventDataStoreException {
	}
	export interface InactiveEventDataStoreExceptionFormProperties {
	}
	export function CreateInactiveEventDataStoreExceptionFormGroup() {
		return new FormGroup<InactiveEventDataStoreExceptionFormProperties>({
		});

	}

	export interface EventDataStoreNotFoundException {
	}
	export interface EventDataStoreNotFoundExceptionFormProperties {
	}
	export function CreateEventDataStoreNotFoundExceptionFormGroup() {
		return new FormGroup<EventDataStoreNotFoundExceptionFormProperties>({
		});

	}

	export interface ChannelNotFoundException {
	}
	export interface ChannelNotFoundExceptionFormProperties {
	}
	export function CreateChannelNotFoundExceptionFormGroup() {
		return new FormGroup<ChannelNotFoundExceptionFormProperties>({
		});

	}

	export interface UnsupportedOperationException {
	}
	export interface UnsupportedOperationExceptionFormProperties {
	}
	export function CreateUnsupportedOperationExceptionFormGroup() {
		return new FormGroup<UnsupportedOperationExceptionFormProperties>({
		});

	}

	export interface OperationNotPermittedException {
	}
	export interface OperationNotPermittedExceptionFormProperties {
	}
	export function CreateOperationNotPermittedExceptionFormGroup() {
		return new FormGroup<OperationNotPermittedExceptionFormProperties>({
		});

	}

	export interface NotOrganizationMasterAccountException {
	}
	export interface NotOrganizationMasterAccountExceptionFormProperties {
	}
	export function CreateNotOrganizationMasterAccountExceptionFormGroup() {
		return new FormGroup<NotOrganizationMasterAccountExceptionFormProperties>({
		});

	}

	export interface NoManagementAccountSLRExistsException {
	}
	export interface NoManagementAccountSLRExistsExceptionFormProperties {
	}
	export function CreateNoManagementAccountSLRExistsExceptionFormGroup() {
		return new FormGroup<NoManagementAccountSLRExistsExceptionFormProperties>({
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

	export interface CancelQueryResponse {

		/** Required */
		QueryId: string;

		/** Required */
		QueryStatus: QueryStatus;
	}
	export interface CancelQueryResponseFormProperties {

		/** Required */
		QueryId: FormControl<string | null | undefined>,

		/** Required */
		QueryStatus: FormControl<QueryStatus | null | undefined>,
	}
	export function CreateCancelQueryResponseFormGroup() {
		return new FormGroup<CancelQueryResponseFormProperties>({
			QueryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			QueryStatus: new FormControl<QueryStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum QueryStatus { QUEUED = 'QUEUED', RUNNING = 'RUNNING', FINISHED = 'FINISHED', FAILED = 'FAILED', CANCELLED = 'CANCELLED', TIMED_OUT = 'TIMED_OUT' }

	export interface CancelQueryRequest {
		EventDataStore?: string;

		/** Required */
		QueryId: string;
	}
	export interface CancelQueryRequestFormProperties {
		EventDataStore: FormControl<string | null | undefined>,

		/** Required */
		QueryId: FormControl<string | null | undefined>,
	}
	export function CreateCancelQueryRequestFormGroup() {
		return new FormGroup<CancelQueryRequestFormProperties>({
			EventDataStore: new FormControl<string | null | undefined>(undefined),
			QueryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InactiveQueryException {
	}
	export interface InactiveQueryExceptionFormProperties {
	}
	export function CreateInactiveQueryExceptionFormGroup() {
		return new FormGroup<InactiveQueryExceptionFormProperties>({
		});

	}

	export interface InvalidParameterException {
	}
	export interface InvalidParameterExceptionFormProperties {
	}
	export function CreateInvalidParameterExceptionFormGroup() {
		return new FormGroup<InvalidParameterExceptionFormProperties>({
		});

	}

	export interface QueryIdNotFoundException {
	}
	export interface QueryIdNotFoundExceptionFormProperties {
	}
	export function CreateQueryIdNotFoundExceptionFormGroup() {
		return new FormGroup<QueryIdNotFoundExceptionFormProperties>({
		});

	}

	export interface CreateChannelResponse {
		ChannelArn?: string;
		Name?: string;
		Source?: string;
		Destinations?: Array<Destination>;

		/**
		 * A list of tags.
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateChannelResponseFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Source: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelResponseFormGroup() {
		return new FormGroup<CreateChannelResponseFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the destination receiving events. */
	export interface Destination {

		/** Required */
		Type: DestinationType;

		/** Required */
		Location: string;
	}

	/** Contains information about the destination receiving events. */
	export interface DestinationFormProperties {

		/** Required */
		Type: FormControl<DestinationType | null | undefined>,

		/** Required */
		Location: FormControl<string | null | undefined>,
	}
	export function CreateDestinationFormGroup() {
		return new FormGroup<DestinationFormProperties>({
			Type: new FormControl<DestinationType | null | undefined>(undefined, [Validators.required]),
			Location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DestinationType { EVENT_DATA_STORE = 'EVENT_DATA_STORE', AWS_SERVICE = 'AWS_SERVICE' }

	export interface CreateChannelRequest {

		/** Required */
		Name: string;

		/** Required */
		Source: string;

		/** Required */
		Destinations: Array<Destination>;

		/**
		 * A list of tags.
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateChannelRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Source: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelRequestFormGroup() {
		return new FormGroup<CreateChannelRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ChannelMaxLimitExceededException {
	}
	export interface ChannelMaxLimitExceededExceptionFormProperties {
	}
	export function CreateChannelMaxLimitExceededExceptionFormGroup() {
		return new FormGroup<ChannelMaxLimitExceededExceptionFormProperties>({
		});

	}

	export interface InvalidSourceException {
	}
	export interface InvalidSourceExceptionFormProperties {
	}
	export function CreateInvalidSourceExceptionFormGroup() {
		return new FormGroup<InvalidSourceExceptionFormProperties>({
		});

	}

	export interface ChannelAlreadyExistsException {
	}
	export interface ChannelAlreadyExistsExceptionFormProperties {
	}
	export function CreateChannelAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ChannelAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface InvalidEventDataStoreCategoryException {
	}
	export interface InvalidEventDataStoreCategoryExceptionFormProperties {
	}
	export function CreateInvalidEventDataStoreCategoryExceptionFormGroup() {
		return new FormGroup<InvalidEventDataStoreCategoryExceptionFormProperties>({
		});

	}

	export interface CreateEventDataStoreResponse {
		EventDataStoreArn?: string;
		Name?: string;
		Status?: EventDataStoreStatus;
		AdvancedEventSelectors?: Array<AdvancedEventSelector>;
		MultiRegionEnabled?: boolean | null;
		OrganizationEnabled?: boolean | null;
		RetentionPeriod?: number | null;
		TerminationProtectionEnabled?: boolean | null;

		/**
		 * A list of tags.
		 * Maximum items: 200
		 */
		TagsList?: Array<Tag>;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
		KmsKeyId?: string;
	}
	export interface CreateEventDataStoreResponseFormProperties {
		EventDataStoreArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<EventDataStoreStatus | null | undefined>,
		MultiRegionEnabled: FormControl<boolean | null | undefined>,
		OrganizationEnabled: FormControl<boolean | null | undefined>,
		RetentionPeriod: FormControl<number | null | undefined>,
		TerminationProtectionEnabled: FormControl<boolean | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateCreateEventDataStoreResponseFormGroup() {
		return new FormGroup<CreateEventDataStoreResponseFormProperties>({
			EventDataStoreArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<EventDataStoreStatus | null | undefined>(undefined),
			MultiRegionEnabled: new FormControl<boolean | null | undefined>(undefined),
			OrganizationEnabled: new FormControl<boolean | null | undefined>(undefined),
			RetentionPeriod: new FormControl<number | null | undefined>(undefined),
			TerminationProtectionEnabled: new FormControl<boolean | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EventDataStoreStatus { CREATED = 'CREATED', ENABLED = 'ENABLED', PENDING_DELETION = 'PENDING_DELETION', STARTING_INGESTION = 'STARTING_INGESTION', STOPPING_INGESTION = 'STOPPING_INGESTION', STOPPED_INGESTION = 'STOPPED_INGESTION' }


	/** <p>Advanced event selectors let you create fine-grained selectors for the following CloudTrail event record ﬁelds. They help you control costs by logging only those events that are important to you. For more information about advanced event selectors, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events</a> in the <i>CloudTrail User Guide</i>.</p> <ul> <li> <p> <code>readOnly</code> </p> </li> <li> <p> <code>eventSource</code> </p> </li> <li> <p> <code>eventName</code> </p> </li> <li> <p> <code>eventCategory</code> </p> </li> <li> <p> <code>resources.type</code> </p> </li> <li> <p> <code>resources.ARN</code> </p> </li> </ul> <p>You cannot apply both event selectors and advanced event selectors to a trail.</p> */
	export interface AdvancedEventSelector {
		Name?: string;

		/** Required */
		FieldSelectors: Array<AdvancedFieldSelector>;
	}

	/** <p>Advanced event selectors let you create fine-grained selectors for the following CloudTrail event record ﬁelds. They help you control costs by logging only those events that are important to you. For more information about advanced event selectors, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events</a> in the <i>CloudTrail User Guide</i>.</p> <ul> <li> <p> <code>readOnly</code> </p> </li> <li> <p> <code>eventSource</code> </p> </li> <li> <p> <code>eventName</code> </p> </li> <li> <p> <code>eventCategory</code> </p> </li> <li> <p> <code>resources.type</code> </p> </li> <li> <p> <code>resources.ARN</code> </p> </li> </ul> <p>You cannot apply both event selectors and advanced event selectors to a trail.</p> */
	export interface AdvancedEventSelectorFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAdvancedEventSelectorFormGroup() {
		return new FormGroup<AdvancedEventSelectorFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single selector statement in an advanced event selector. */
	export interface AdvancedFieldSelector {

		/** Required */
		Field: string;
		Equals?: Array<string>;
		StartsWith?: Array<string>;
		EndsWith?: Array<string>;
		NotEquals?: Array<string>;
		NotStartsWith?: Array<string>;
		NotEndsWith?: Array<string>;
	}

	/** A single selector statement in an advanced event selector. */
	export interface AdvancedFieldSelectorFormProperties {

		/** Required */
		Field: FormControl<string | null | undefined>,
	}
	export function CreateAdvancedFieldSelectorFormGroup() {
		return new FormGroup<AdvancedFieldSelectorFormProperties>({
			Field: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateEventDataStoreRequest {

		/** Required */
		Name: string;
		AdvancedEventSelectors?: Array<AdvancedEventSelector>;
		MultiRegionEnabled?: boolean | null;
		OrganizationEnabled?: boolean | null;
		RetentionPeriod?: number | null;
		TerminationProtectionEnabled?: boolean | null;

		/**
		 * A list of tags.
		 * Maximum items: 200
		 */
		TagsList?: Array<Tag>;
		KmsKeyId?: string;
		StartIngestion?: boolean | null;
	}
	export interface CreateEventDataStoreRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		MultiRegionEnabled: FormControl<boolean | null | undefined>,
		OrganizationEnabled: FormControl<boolean | null | undefined>,
		RetentionPeriod: FormControl<number | null | undefined>,
		TerminationProtectionEnabled: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		StartIngestion: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateEventDataStoreRequestFormGroup() {
		return new FormGroup<CreateEventDataStoreRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MultiRegionEnabled: new FormControl<boolean | null | undefined>(undefined),
			OrganizationEnabled: new FormControl<boolean | null | undefined>(undefined),
			RetentionPeriod: new FormControl<number | null | undefined>(undefined),
			TerminationProtectionEnabled: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			StartIngestion: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface EventDataStoreAlreadyExistsException {
	}
	export interface EventDataStoreAlreadyExistsExceptionFormProperties {
	}
	export function CreateEventDataStoreAlreadyExistsExceptionFormGroup() {
		return new FormGroup<EventDataStoreAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface EventDataStoreMaxLimitExceededException {
	}
	export interface EventDataStoreMaxLimitExceededExceptionFormProperties {
	}
	export function CreateEventDataStoreMaxLimitExceededExceptionFormGroup() {
		return new FormGroup<EventDataStoreMaxLimitExceededExceptionFormProperties>({
		});

	}

	export interface InvalidEventSelectorsException {
	}
	export interface InvalidEventSelectorsExceptionFormProperties {
	}
	export function CreateInvalidEventSelectorsExceptionFormGroup() {
		return new FormGroup<InvalidEventSelectorsExceptionFormProperties>({
		});

	}

	export interface InsufficientEncryptionPolicyException {
	}
	export interface InsufficientEncryptionPolicyExceptionFormProperties {
	}
	export function CreateInsufficientEncryptionPolicyExceptionFormGroup() {
		return new FormGroup<InsufficientEncryptionPolicyExceptionFormProperties>({
		});

	}

	export interface InvalidKmsKeyIdException {
	}
	export interface InvalidKmsKeyIdExceptionFormProperties {
	}
	export function CreateInvalidKmsKeyIdExceptionFormGroup() {
		return new FormGroup<InvalidKmsKeyIdExceptionFormProperties>({
		});

	}

	export interface KmsKeyNotFoundException {
	}
	export interface KmsKeyNotFoundExceptionFormProperties {
	}
	export function CreateKmsKeyNotFoundExceptionFormGroup() {
		return new FormGroup<KmsKeyNotFoundExceptionFormProperties>({
		});

	}

	export interface KmsException {
	}
	export interface KmsExceptionFormProperties {
	}
	export function CreateKmsExceptionFormGroup() {
		return new FormGroup<KmsExceptionFormProperties>({
		});

	}

	export interface CloudTrailAccessNotEnabledException {
	}
	export interface CloudTrailAccessNotEnabledExceptionFormProperties {
	}
	export function CreateCloudTrailAccessNotEnabledExceptionFormGroup() {
		return new FormGroup<CloudTrailAccessNotEnabledExceptionFormProperties>({
		});

	}

	export interface InsufficientDependencyServiceAccessPermissionException {
	}
	export interface InsufficientDependencyServiceAccessPermissionExceptionFormProperties {
	}
	export function CreateInsufficientDependencyServiceAccessPermissionExceptionFormGroup() {
		return new FormGroup<InsufficientDependencyServiceAccessPermissionExceptionFormProperties>({
		});

	}

	export interface OrganizationsNotInUseException {
	}
	export interface OrganizationsNotInUseExceptionFormProperties {
	}
	export function CreateOrganizationsNotInUseExceptionFormGroup() {
		return new FormGroup<OrganizationsNotInUseExceptionFormProperties>({
		});

	}

	export interface OrganizationNotInAllFeaturesModeException {
	}
	export interface OrganizationNotInAllFeaturesModeExceptionFormProperties {
	}
	export function CreateOrganizationNotInAllFeaturesModeExceptionFormGroup() {
		return new FormGroup<OrganizationNotInAllFeaturesModeExceptionFormProperties>({
		});

	}


	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface CreateTrailResponse {
		Name?: string;
		S3BucketName?: string;
		S3KeyPrefix?: string;
		SnsTopicName?: string;
		SnsTopicARN?: string;
		IncludeGlobalServiceEvents?: boolean | null;
		IsMultiRegionTrail?: boolean | null;
		TrailARN?: string;
		LogFileValidationEnabled?: boolean | null;
		CloudWatchLogsLogGroupArn?: string;
		CloudWatchLogsRoleArn?: string;
		KmsKeyId?: string;
		IsOrganizationTrail?: boolean | null;
	}

	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface CreateTrailResponseFormProperties {
		Name: FormControl<string | null | undefined>,
		S3BucketName: FormControl<string | null | undefined>,
		S3KeyPrefix: FormControl<string | null | undefined>,
		SnsTopicName: FormControl<string | null | undefined>,
		SnsTopicARN: FormControl<string | null | undefined>,
		IncludeGlobalServiceEvents: FormControl<boolean | null | undefined>,
		IsMultiRegionTrail: FormControl<boolean | null | undefined>,
		TrailARN: FormControl<string | null | undefined>,
		LogFileValidationEnabled: FormControl<boolean | null | undefined>,
		CloudWatchLogsLogGroupArn: FormControl<string | null | undefined>,
		CloudWatchLogsRoleArn: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		IsOrganizationTrail: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateTrailResponseFormGroup() {
		return new FormGroup<CreateTrailResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			S3BucketName: new FormControl<string | null | undefined>(undefined),
			S3KeyPrefix: new FormControl<string | null | undefined>(undefined),
			SnsTopicName: new FormControl<string | null | undefined>(undefined),
			SnsTopicARN: new FormControl<string | null | undefined>(undefined),
			IncludeGlobalServiceEvents: new FormControl<boolean | null | undefined>(undefined),
			IsMultiRegionTrail: new FormControl<boolean | null | undefined>(undefined),
			TrailARN: new FormControl<string | null | undefined>(undefined),
			LogFileValidationEnabled: new FormControl<boolean | null | undefined>(undefined),
			CloudWatchLogsLogGroupArn: new FormControl<string | null | undefined>(undefined),
			CloudWatchLogsRoleArn: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			IsOrganizationTrail: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies the settings for each trail. */
	export interface CreateTrailRequest {

		/** Required */
		Name: string;

		/** Required */
		S3BucketName: string;
		S3KeyPrefix?: string;
		SnsTopicName?: string;
		IncludeGlobalServiceEvents?: boolean | null;
		IsMultiRegionTrail?: boolean | null;
		EnableLogFileValidation?: boolean | null;
		CloudWatchLogsLogGroupArn?: string;
		CloudWatchLogsRoleArn?: string;
		KmsKeyId?: string;
		IsOrganizationTrail?: boolean | null;

		/**
		 * A list of tags.
		 * Maximum items: 200
		 */
		TagsList?: Array<Tag>;
	}

	/** Specifies the settings for each trail. */
	export interface CreateTrailRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		S3BucketName: FormControl<string | null | undefined>,
		S3KeyPrefix: FormControl<string | null | undefined>,
		SnsTopicName: FormControl<string | null | undefined>,
		IncludeGlobalServiceEvents: FormControl<boolean | null | undefined>,
		IsMultiRegionTrail: FormControl<boolean | null | undefined>,
		EnableLogFileValidation: FormControl<boolean | null | undefined>,
		CloudWatchLogsLogGroupArn: FormControl<string | null | undefined>,
		CloudWatchLogsRoleArn: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		IsOrganizationTrail: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateTrailRequestFormGroup() {
		return new FormGroup<CreateTrailRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3KeyPrefix: new FormControl<string | null | undefined>(undefined),
			SnsTopicName: new FormControl<string | null | undefined>(undefined),
			IncludeGlobalServiceEvents: new FormControl<boolean | null | undefined>(undefined),
			IsMultiRegionTrail: new FormControl<boolean | null | undefined>(undefined),
			EnableLogFileValidation: new FormControl<boolean | null | undefined>(undefined),
			CloudWatchLogsLogGroupArn: new FormControl<string | null | undefined>(undefined),
			CloudWatchLogsRoleArn: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			IsOrganizationTrail: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface MaximumNumberOfTrailsExceededException {
	}
	export interface MaximumNumberOfTrailsExceededExceptionFormProperties {
	}
	export function CreateMaximumNumberOfTrailsExceededExceptionFormGroup() {
		return new FormGroup<MaximumNumberOfTrailsExceededExceptionFormProperties>({
		});

	}

	export interface TrailAlreadyExistsException {
	}
	export interface TrailAlreadyExistsExceptionFormProperties {
	}
	export function CreateTrailAlreadyExistsExceptionFormGroup() {
		return new FormGroup<TrailAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface S3BucketDoesNotExistException {
	}
	export interface S3BucketDoesNotExistExceptionFormProperties {
	}
	export function CreateS3BucketDoesNotExistExceptionFormGroup() {
		return new FormGroup<S3BucketDoesNotExistExceptionFormProperties>({
		});

	}

	export interface InsufficientS3BucketPolicyException {
	}
	export interface InsufficientS3BucketPolicyExceptionFormProperties {
	}
	export function CreateInsufficientS3BucketPolicyExceptionFormGroup() {
		return new FormGroup<InsufficientS3BucketPolicyExceptionFormProperties>({
		});

	}

	export interface InsufficientSnsTopicPolicyException {
	}
	export interface InsufficientSnsTopicPolicyExceptionFormProperties {
	}
	export function CreateInsufficientSnsTopicPolicyExceptionFormGroup() {
		return new FormGroup<InsufficientSnsTopicPolicyExceptionFormProperties>({
		});

	}

	export interface InvalidS3BucketNameException {
	}
	export interface InvalidS3BucketNameExceptionFormProperties {
	}
	export function CreateInvalidS3BucketNameExceptionFormGroup() {
		return new FormGroup<InvalidS3BucketNameExceptionFormProperties>({
		});

	}

	export interface InvalidS3PrefixException {
	}
	export interface InvalidS3PrefixExceptionFormProperties {
	}
	export function CreateInvalidS3PrefixExceptionFormGroup() {
		return new FormGroup<InvalidS3PrefixExceptionFormProperties>({
		});

	}

	export interface InvalidSnsTopicNameException {
	}
	export interface InvalidSnsTopicNameExceptionFormProperties {
	}
	export function CreateInvalidSnsTopicNameExceptionFormGroup() {
		return new FormGroup<InvalidSnsTopicNameExceptionFormProperties>({
		});

	}

	export interface TrailNotProvidedException {
	}
	export interface TrailNotProvidedExceptionFormProperties {
	}
	export function CreateTrailNotProvidedExceptionFormGroup() {
		return new FormGroup<TrailNotProvidedExceptionFormProperties>({
		});

	}

	export interface InvalidParameterCombinationException {
	}
	export interface InvalidParameterCombinationExceptionFormProperties {
	}
	export function CreateInvalidParameterCombinationExceptionFormGroup() {
		return new FormGroup<InvalidParameterCombinationExceptionFormProperties>({
		});

	}

	export interface KmsKeyDisabledException {
	}
	export interface KmsKeyDisabledExceptionFormProperties {
	}
	export function CreateKmsKeyDisabledExceptionFormGroup() {
		return new FormGroup<KmsKeyDisabledExceptionFormProperties>({
		});

	}

	export interface InvalidCloudWatchLogsLogGroupArnException {
	}
	export interface InvalidCloudWatchLogsLogGroupArnExceptionFormProperties {
	}
	export function CreateInvalidCloudWatchLogsLogGroupArnExceptionFormGroup() {
		return new FormGroup<InvalidCloudWatchLogsLogGroupArnExceptionFormProperties>({
		});

	}

	export interface InvalidCloudWatchLogsRoleArnException {
	}
	export interface InvalidCloudWatchLogsRoleArnExceptionFormProperties {
	}
	export function CreateInvalidCloudWatchLogsRoleArnExceptionFormGroup() {
		return new FormGroup<InvalidCloudWatchLogsRoleArnExceptionFormProperties>({
		});

	}

	export interface CloudWatchLogsDeliveryUnavailableException {
	}
	export interface CloudWatchLogsDeliveryUnavailableExceptionFormProperties {
	}
	export function CreateCloudWatchLogsDeliveryUnavailableExceptionFormGroup() {
		return new FormGroup<CloudWatchLogsDeliveryUnavailableExceptionFormProperties>({
		});

	}

	export interface CloudTrailInvalidClientTokenIdException {
	}
	export interface CloudTrailInvalidClientTokenIdExceptionFormProperties {
	}
	export function CreateCloudTrailInvalidClientTokenIdExceptionFormGroup() {
		return new FormGroup<CloudTrailInvalidClientTokenIdExceptionFormProperties>({
		});

	}

	export interface DeleteChannelResponse {
	}
	export interface DeleteChannelResponseFormProperties {
	}
	export function CreateDeleteChannelResponseFormGroup() {
		return new FormGroup<DeleteChannelResponseFormProperties>({
		});

	}

	export interface DeleteChannelRequest {

		/** Required */
		Channel: string;
	}
	export interface DeleteChannelRequestFormProperties {

		/** Required */
		Channel: FormControl<string | null | undefined>,
	}
	export function CreateDeleteChannelRequestFormGroup() {
		return new FormGroup<DeleteChannelRequestFormProperties>({
			Channel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteEventDataStoreResponse {
	}
	export interface DeleteEventDataStoreResponseFormProperties {
	}
	export function CreateDeleteEventDataStoreResponseFormGroup() {
		return new FormGroup<DeleteEventDataStoreResponseFormProperties>({
		});

	}

	export interface DeleteEventDataStoreRequest {

		/** Required */
		EventDataStore: string;
	}
	export interface DeleteEventDataStoreRequestFormProperties {

		/** Required */
		EventDataStore: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEventDataStoreRequestFormGroup() {
		return new FormGroup<DeleteEventDataStoreRequestFormProperties>({
			EventDataStore: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EventDataStoreTerminationProtectedException {
	}
	export interface EventDataStoreTerminationProtectedExceptionFormProperties {
	}
	export function CreateEventDataStoreTerminationProtectedExceptionFormGroup() {
		return new FormGroup<EventDataStoreTerminationProtectedExceptionFormProperties>({
		});

	}

	export interface EventDataStoreHasOngoingImportException {
	}
	export interface EventDataStoreHasOngoingImportExceptionFormProperties {
	}
	export function CreateEventDataStoreHasOngoingImportExceptionFormGroup() {
		return new FormGroup<EventDataStoreHasOngoingImportExceptionFormProperties>({
		});

	}

	export interface ChannelExistsForEDSException {
	}
	export interface ChannelExistsForEDSExceptionFormProperties {
	}
	export function CreateChannelExistsForEDSExceptionFormGroup() {
		return new FormGroup<ChannelExistsForEDSExceptionFormProperties>({
		});

	}

	export interface DeleteResourcePolicyResponse {
	}
	export interface DeleteResourcePolicyResponseFormProperties {
	}
	export function CreateDeleteResourcePolicyResponseFormGroup() {
		return new FormGroup<DeleteResourcePolicyResponseFormProperties>({
		});

	}

	export interface DeleteResourcePolicyRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface DeleteResourcePolicyRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourcePolicyRequestFormGroup() {
		return new FormGroup<DeleteResourcePolicyRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResourceARNNotValidException {
	}
	export interface ResourceARNNotValidExceptionFormProperties {
	}
	export function CreateResourceARNNotValidExceptionFormGroup() {
		return new FormGroup<ResourceARNNotValidExceptionFormProperties>({
		});

	}

	export interface ResourcePolicyNotFoundException {
	}
	export interface ResourcePolicyNotFoundExceptionFormProperties {
	}
	export function CreateResourcePolicyNotFoundExceptionFormGroup() {
		return new FormGroup<ResourcePolicyNotFoundExceptionFormProperties>({
		});

	}


	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface DeleteTrailResponse {
	}

	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface DeleteTrailResponseFormProperties {
	}
	export function CreateDeleteTrailResponseFormGroup() {
		return new FormGroup<DeleteTrailResponseFormProperties>({
		});

	}


	/** The request that specifies the name of a trail to delete. */
	export interface DeleteTrailRequest {

		/** Required */
		Name: string;
	}

	/** The request that specifies the name of a trail to delete. */
	export interface DeleteTrailRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTrailRequestFormGroup() {
		return new FormGroup<DeleteTrailRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TrailNotFoundException {
	}
	export interface TrailNotFoundExceptionFormProperties {
	}
	export function CreateTrailNotFoundExceptionFormGroup() {
		return new FormGroup<TrailNotFoundExceptionFormProperties>({
		});

	}

	export interface InvalidHomeRegionException {
	}
	export interface InvalidHomeRegionExceptionFormProperties {
	}
	export function CreateInvalidHomeRegionExceptionFormGroup() {
		return new FormGroup<InvalidHomeRegionExceptionFormProperties>({
		});

	}


	/** Returns the following response if successful. Otherwise, returns an error. */
	export interface DeregisterOrganizationDelegatedAdminResponse {
	}

	/** Returns the following response if successful. Otherwise, returns an error. */
	export interface DeregisterOrganizationDelegatedAdminResponseFormProperties {
	}
	export function CreateDeregisterOrganizationDelegatedAdminResponseFormGroup() {
		return new FormGroup<DeregisterOrganizationDelegatedAdminResponseFormProperties>({
		});

	}


	/** Removes CloudTrail delegated administrator permissions from a specified member account in an organization that is currently designated as a delegated administrator. */
	export interface DeregisterOrganizationDelegatedAdminRequest {

		/** Required */
		DelegatedAdminAccountId: string;
	}

	/** Removes CloudTrail delegated administrator permissions from a specified member account in an organization that is currently designated as a delegated administrator. */
	export interface DeregisterOrganizationDelegatedAdminRequestFormProperties {

		/** Required */
		DelegatedAdminAccountId: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterOrganizationDelegatedAdminRequestFormGroup() {
		return new FormGroup<DeregisterOrganizationDelegatedAdminRequestFormProperties>({
			DelegatedAdminAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AccountNotFoundException {
	}
	export interface AccountNotFoundExceptionFormProperties {
	}
	export function CreateAccountNotFoundExceptionFormGroup() {
		return new FormGroup<AccountNotFoundExceptionFormProperties>({
		});

	}

	export interface AccountNotRegisteredException {
	}
	export interface AccountNotRegisteredExceptionFormProperties {
	}
	export function CreateAccountNotRegisteredExceptionFormGroup() {
		return new FormGroup<AccountNotRegisteredExceptionFormProperties>({
		});

	}

	export interface NotOrganizationManagementAccountException {
	}
	export interface NotOrganizationManagementAccountExceptionFormProperties {
	}
	export function CreateNotOrganizationManagementAccountExceptionFormGroup() {
		return new FormGroup<NotOrganizationManagementAccountExceptionFormProperties>({
		});

	}

	export interface DescribeQueryResponse {
		QueryId?: string;
		QueryString?: string;
		QueryStatus?: QueryStatus;
		QueryStatistics?: QueryStatisticsForDescribeQuery;
		ErrorMessage?: string;
		DeliveryS3Uri?: string;
		DeliveryStatus?: DeliveryStatus;
	}
	export interface DescribeQueryResponseFormProperties {
		QueryId: FormControl<string | null | undefined>,
		QueryString: FormControl<string | null | undefined>,
		QueryStatus: FormControl<QueryStatus | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		DeliveryS3Uri: FormControl<string | null | undefined>,
		DeliveryStatus: FormControl<DeliveryStatus | null | undefined>,
	}
	export function CreateDescribeQueryResponseFormGroup() {
		return new FormGroup<DescribeQueryResponseFormProperties>({
			QueryId: new FormControl<string | null | undefined>(undefined),
			QueryString: new FormControl<string | null | undefined>(undefined),
			QueryStatus: new FormControl<QueryStatus | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			DeliveryS3Uri: new FormControl<string | null | undefined>(undefined),
			DeliveryStatus: new FormControl<DeliveryStatus | null | undefined>(undefined),
		});

	}


	/** Gets metadata about a query, including the number of events that were matched, the total number of events scanned, the query run time in milliseconds, and the query's creation time. */
	export interface QueryStatisticsForDescribeQuery {
		EventsMatched?: number | null;
		EventsScanned?: number | null;
		BytesScanned?: number | null;
		ExecutionTimeInMillis?: number | null;
		CreationTime?: Date;
	}

	/** Gets metadata about a query, including the number of events that were matched, the total number of events scanned, the query run time in milliseconds, and the query's creation time. */
	export interface QueryStatisticsForDescribeQueryFormProperties {
		EventsMatched: FormControl<number | null | undefined>,
		EventsScanned: FormControl<number | null | undefined>,
		BytesScanned: FormControl<number | null | undefined>,
		ExecutionTimeInMillis: FormControl<number | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateQueryStatisticsForDescribeQueryFormGroup() {
		return new FormGroup<QueryStatisticsForDescribeQueryFormProperties>({
			EventsMatched: new FormControl<number | null | undefined>(undefined),
			EventsScanned: new FormControl<number | null | undefined>(undefined),
			BytesScanned: new FormControl<number | null | undefined>(undefined),
			ExecutionTimeInMillis: new FormControl<number | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DeliveryStatus { SUCCESS = 'SUCCESS', FAILED = 'FAILED', FAILED_SIGNING_FILE = 'FAILED_SIGNING_FILE', PENDING = 'PENDING', RESOURCE_NOT_FOUND = 'RESOURCE_NOT_FOUND', ACCESS_DENIED = 'ACCESS_DENIED', ACCESS_DENIED_SIGNING_FILE = 'ACCESS_DENIED_SIGNING_FILE', CANCELLED = 'CANCELLED', UNKNOWN = 'UNKNOWN' }

	export interface DescribeQueryRequest {
		EventDataStore?: string;
		QueryId?: string;
		QueryAlias?: string;
	}
	export interface DescribeQueryRequestFormProperties {
		EventDataStore: FormControl<string | null | undefined>,
		QueryId: FormControl<string | null | undefined>,
		QueryAlias: FormControl<string | null | undefined>,
	}
	export function CreateDescribeQueryRequestFormGroup() {
		return new FormGroup<DescribeQueryRequestFormProperties>({
			EventDataStore: new FormControl<string | null | undefined>(undefined),
			QueryId: new FormControl<string | null | undefined>(undefined),
			QueryAlias: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface DescribeTrailsResponse {
		trailList?: Array<Trail>;
	}

	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface DescribeTrailsResponseFormProperties {
	}
	export function CreateDescribeTrailsResponseFormGroup() {
		return new FormGroup<DescribeTrailsResponseFormProperties>({
		});

	}


	/** The settings for a trail. */
	export interface Trail {
		Name?: string;
		S3BucketName?: string;
		S3KeyPrefix?: string;
		SnsTopicName?: string;
		SnsTopicARN?: string;
		IncludeGlobalServiceEvents?: boolean | null;
		IsMultiRegionTrail?: boolean | null;
		HomeRegion?: string;
		TrailARN?: string;
		LogFileValidationEnabled?: boolean | null;
		CloudWatchLogsLogGroupArn?: string;
		CloudWatchLogsRoleArn?: string;
		KmsKeyId?: string;
		HasCustomEventSelectors?: boolean | null;
		HasInsightSelectors?: boolean | null;
		IsOrganizationTrail?: boolean | null;
	}

	/** The settings for a trail. */
	export interface TrailFormProperties {
		Name: FormControl<string | null | undefined>,
		S3BucketName: FormControl<string | null | undefined>,
		S3KeyPrefix: FormControl<string | null | undefined>,
		SnsTopicName: FormControl<string | null | undefined>,
		SnsTopicARN: FormControl<string | null | undefined>,
		IncludeGlobalServiceEvents: FormControl<boolean | null | undefined>,
		IsMultiRegionTrail: FormControl<boolean | null | undefined>,
		HomeRegion: FormControl<string | null | undefined>,
		TrailARN: FormControl<string | null | undefined>,
		LogFileValidationEnabled: FormControl<boolean | null | undefined>,
		CloudWatchLogsLogGroupArn: FormControl<string | null | undefined>,
		CloudWatchLogsRoleArn: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		HasCustomEventSelectors: FormControl<boolean | null | undefined>,
		HasInsightSelectors: FormControl<boolean | null | undefined>,
		IsOrganizationTrail: FormControl<boolean | null | undefined>,
	}
	export function CreateTrailFormGroup() {
		return new FormGroup<TrailFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			S3BucketName: new FormControl<string | null | undefined>(undefined),
			S3KeyPrefix: new FormControl<string | null | undefined>(undefined),
			SnsTopicName: new FormControl<string | null | undefined>(undefined),
			SnsTopicARN: new FormControl<string | null | undefined>(undefined),
			IncludeGlobalServiceEvents: new FormControl<boolean | null | undefined>(undefined),
			IsMultiRegionTrail: new FormControl<boolean | null | undefined>(undefined),
			HomeRegion: new FormControl<string | null | undefined>(undefined),
			TrailARN: new FormControl<string | null | undefined>(undefined),
			LogFileValidationEnabled: new FormControl<boolean | null | undefined>(undefined),
			CloudWatchLogsLogGroupArn: new FormControl<string | null | undefined>(undefined),
			CloudWatchLogsRoleArn: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			HasCustomEventSelectors: new FormControl<boolean | null | undefined>(undefined),
			HasInsightSelectors: new FormControl<boolean | null | undefined>(undefined),
			IsOrganizationTrail: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Returns information about the trail. */
	export interface DescribeTrailsRequest {
		trailNameList?: Array<string>;
		includeShadowTrails?: boolean | null;
	}

	/** Returns information about the trail. */
	export interface DescribeTrailsRequestFormProperties {
		includeShadowTrails: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeTrailsRequestFormGroup() {
		return new FormGroup<DescribeTrailsRequestFormProperties>({
			includeShadowTrails: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetChannelResponse {
		ChannelArn?: string;
		Name?: string;
		Source?: string;
		SourceConfig?: SourceConfig;
		Destinations?: Array<Destination>;
		IngestionStatus?: IngestionStatus;
	}
	export interface GetChannelResponseFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Source: FormControl<string | null | undefined>,
	}
	export function CreateGetChannelResponseFormGroup() {
		return new FormGroup<GetChannelResponseFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Contains configuration information about the channel.  */
	export interface SourceConfig {
		ApplyToAllRegions?: boolean | null;
		AdvancedEventSelectors?: Array<AdvancedEventSelector>;
	}

	/**  Contains configuration information about the channel.  */
	export interface SourceConfigFormProperties {
		ApplyToAllRegions: FormControl<boolean | null | undefined>,
	}
	export function CreateSourceConfigFormGroup() {
		return new FormGroup<SourceConfigFormProperties>({
			ApplyToAllRegions: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A table showing information about the most recent successful and failed attempts to ingest events. */
	export interface IngestionStatus {
		LatestIngestionSuccessTime?: Date;
		LatestIngestionSuccessEventID?: string;
		LatestIngestionErrorCode?: string;
		LatestIngestionAttemptTime?: Date;
		LatestIngestionAttemptEventID?: string;
	}

	/** A table showing information about the most recent successful and failed attempts to ingest events. */
	export interface IngestionStatusFormProperties {
		LatestIngestionSuccessTime: FormControl<Date | null | undefined>,
		LatestIngestionSuccessEventID: FormControl<string | null | undefined>,
		LatestIngestionErrorCode: FormControl<string | null | undefined>,
		LatestIngestionAttemptTime: FormControl<Date | null | undefined>,
		LatestIngestionAttemptEventID: FormControl<string | null | undefined>,
	}
	export function CreateIngestionStatusFormGroup() {
		return new FormGroup<IngestionStatusFormProperties>({
			LatestIngestionSuccessTime: new FormControl<Date | null | undefined>(undefined),
			LatestIngestionSuccessEventID: new FormControl<string | null | undefined>(undefined),
			LatestIngestionErrorCode: new FormControl<string | null | undefined>(undefined),
			LatestIngestionAttemptTime: new FormControl<Date | null | undefined>(undefined),
			LatestIngestionAttemptEventID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetChannelRequest {

		/** Required */
		Channel: string;
	}
	export interface GetChannelRequestFormProperties {

		/** Required */
		Channel: FormControl<string | null | undefined>,
	}
	export function CreateGetChannelRequestFormGroup() {
		return new FormGroup<GetChannelRequestFormProperties>({
			Channel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetEventDataStoreResponse {
		EventDataStoreArn?: string;
		Name?: string;
		Status?: EventDataStoreStatus;
		AdvancedEventSelectors?: Array<AdvancedEventSelector>;
		MultiRegionEnabled?: boolean | null;
		OrganizationEnabled?: boolean | null;
		RetentionPeriod?: number | null;
		TerminationProtectionEnabled?: boolean | null;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
		KmsKeyId?: string;
	}
	export interface GetEventDataStoreResponseFormProperties {
		EventDataStoreArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<EventDataStoreStatus | null | undefined>,
		MultiRegionEnabled: FormControl<boolean | null | undefined>,
		OrganizationEnabled: FormControl<boolean | null | undefined>,
		RetentionPeriod: FormControl<number | null | undefined>,
		TerminationProtectionEnabled: FormControl<boolean | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateGetEventDataStoreResponseFormGroup() {
		return new FormGroup<GetEventDataStoreResponseFormProperties>({
			EventDataStoreArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<EventDataStoreStatus | null | undefined>(undefined),
			MultiRegionEnabled: new FormControl<boolean | null | undefined>(undefined),
			OrganizationEnabled: new FormControl<boolean | null | undefined>(undefined),
			RetentionPeriod: new FormControl<number | null | undefined>(undefined),
			TerminationProtectionEnabled: new FormControl<boolean | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetEventDataStoreRequest {

		/** Required */
		EventDataStore: string;
	}
	export interface GetEventDataStoreRequestFormProperties {

		/** Required */
		EventDataStore: FormControl<string | null | undefined>,
	}
	export function CreateGetEventDataStoreRequestFormGroup() {
		return new FormGroup<GetEventDataStoreRequestFormProperties>({
			EventDataStore: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetEventSelectorsResponse {
		TrailARN?: string;
		EventSelectors?: Array<EventSelector>;
		AdvancedEventSelectors?: Array<AdvancedEventSelector>;
	}
	export interface GetEventSelectorsResponseFormProperties {
		TrailARN: FormControl<string | null | undefined>,
	}
	export function CreateGetEventSelectorsResponseFormGroup() {
		return new FormGroup<GetEventSelectorsResponseFormProperties>({
			TrailARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Use event selectors to further specify the management and data event settings for your trail. By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.</p> <p>You can configure up to five event selectors for a trail.</p> <p>You cannot apply both event selectors and advanced event selectors to a trail.</p> */
	export interface EventSelector {
		ReadWriteType?: ReadWriteType;
		IncludeManagementEvents?: boolean | null;
		DataResources?: Array<DataResource>;
		ExcludeManagementEventSources?: Array<string>;
	}

	/** <p>Use event selectors to further specify the management and data event settings for your trail. By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.</p> <p>You can configure up to five event selectors for a trail.</p> <p>You cannot apply both event selectors and advanced event selectors to a trail.</p> */
	export interface EventSelectorFormProperties {
		ReadWriteType: FormControl<ReadWriteType | null | undefined>,
		IncludeManagementEvents: FormControl<boolean | null | undefined>,
	}
	export function CreateEventSelectorFormGroup() {
		return new FormGroup<EventSelectorFormProperties>({
			ReadWriteType: new FormControl<ReadWriteType | null | undefined>(undefined),
			IncludeManagementEvents: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ReadWriteType { ReadOnly = 'ReadOnly', WriteOnly = 'WriteOnly', All = 'All' }


	/** <p>The Amazon S3 buckets, Lambda functions, or Amazon DynamoDB tables that you specify in your event selectors for your trail to log data events. Data events provide information about the resource operations performed on or within a resource itself. These are also known as data plane operations. You can specify up to 250 data resources for a trail.</p> <note> <p>The total number of allowed data resources is 250. This number can be distributed between 1 and 5 event selectors, but the total cannot exceed 250 across all selectors for the trail.</p> <p>If you are using advanced event selectors, the maximum total number of values for all conditions, across all advanced event selectors for the trail, is 500.</p> </note> <p>The following example demonstrates how logging works when you configure logging of all data events for an S3 bucket named <code>bucket-1</code>. In this example, the CloudTrail user specified an empty prefix, and the option to log both <code>Read</code> and <code>Write</code> data events.</p> <ol> <li> <p>A user uploads an image file to <code>bucket-1</code>.</p> </li> <li> <p>The <code>PutObject</code> API operation is an Amazon S3 object-level API. It is recorded as a data event in CloudTrail. Because the CloudTrail user specified an S3 bucket with an empty prefix, events that occur on any object in that bucket are logged. The trail processes and logs the event.</p> </li> <li> <p>A user uploads an object to an Amazon S3 bucket named <code>arn:aws:s3:::bucket-2</code>.</p> </li> <li> <p>The <code>PutObject</code> API operation occurred for an object in an S3 bucket that the CloudTrail user didn't specify for the trail. The trail doesn’t log the event.</p> </li> </ol> <p>The following example demonstrates how logging works when you configure logging of Lambda data events for a Lambda function named <i>MyLambdaFunction</i>, but not for all Lambda functions.</p> <ol> <li> <p>A user runs a script that includes a call to the <i>MyLambdaFunction</i> function and the <i>MyOtherLambdaFunction</i> function.</p> </li> <li> <p>The <code>Invoke</code> API operation on <i>MyLambdaFunction</i> is an Lambda API. It is recorded as a data event in CloudTrail. Because the CloudTrail user specified logging data events for <i>MyLambdaFunction</i>, any invocations of that function are logged. The trail processes and logs the event.</p> </li> <li> <p>The <code>Invoke</code> API operation on <i>MyOtherLambdaFunction</i> is an Lambda API. Because the CloudTrail user did not specify logging data events for all Lambda functions, the <code>Invoke</code> operation for <i>MyOtherLambdaFunction</i> does not match the function specified for the trail. The trail doesn’t log the event. </p> </li> </ol> */
	export interface DataResource {
		Type?: string;
		Values?: Array<string>;
	}

	/** <p>The Amazon S3 buckets, Lambda functions, or Amazon DynamoDB tables that you specify in your event selectors for your trail to log data events. Data events provide information about the resource operations performed on or within a resource itself. These are also known as data plane operations. You can specify up to 250 data resources for a trail.</p> <note> <p>The total number of allowed data resources is 250. This number can be distributed between 1 and 5 event selectors, but the total cannot exceed 250 across all selectors for the trail.</p> <p>If you are using advanced event selectors, the maximum total number of values for all conditions, across all advanced event selectors for the trail, is 500.</p> </note> <p>The following example demonstrates how logging works when you configure logging of all data events for an S3 bucket named <code>bucket-1</code>. In this example, the CloudTrail user specified an empty prefix, and the option to log both <code>Read</code> and <code>Write</code> data events.</p> <ol> <li> <p>A user uploads an image file to <code>bucket-1</code>.</p> </li> <li> <p>The <code>PutObject</code> API operation is an Amazon S3 object-level API. It is recorded as a data event in CloudTrail. Because the CloudTrail user specified an S3 bucket with an empty prefix, events that occur on any object in that bucket are logged. The trail processes and logs the event.</p> </li> <li> <p>A user uploads an object to an Amazon S3 bucket named <code>arn:aws:s3:::bucket-2</code>.</p> </li> <li> <p>The <code>PutObject</code> API operation occurred for an object in an S3 bucket that the CloudTrail user didn't specify for the trail. The trail doesn’t log the event.</p> </li> </ol> <p>The following example demonstrates how logging works when you configure logging of Lambda data events for a Lambda function named <i>MyLambdaFunction</i>, but not for all Lambda functions.</p> <ol> <li> <p>A user runs a script that includes a call to the <i>MyLambdaFunction</i> function and the <i>MyOtherLambdaFunction</i> function.</p> </li> <li> <p>The <code>Invoke</code> API operation on <i>MyLambdaFunction</i> is an Lambda API. It is recorded as a data event in CloudTrail. Because the CloudTrail user specified logging data events for <i>MyLambdaFunction</i>, any invocations of that function are logged. The trail processes and logs the event.</p> </li> <li> <p>The <code>Invoke</code> API operation on <i>MyOtherLambdaFunction</i> is an Lambda API. Because the CloudTrail user did not specify logging data events for all Lambda functions, the <code>Invoke</code> operation for <i>MyOtherLambdaFunction</i> does not match the function specified for the trail. The trail doesn’t log the event. </p> </li> </ol> */
	export interface DataResourceFormProperties {
		Type: FormControl<string | null | undefined>,
	}
	export function CreateDataResourceFormGroup() {
		return new FormGroup<DataResourceFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetEventSelectorsRequest {

		/** Required */
		TrailName: string;
	}
	export interface GetEventSelectorsRequestFormProperties {

		/** Required */
		TrailName: FormControl<string | null | undefined>,
	}
	export function CreateGetEventSelectorsRequestFormGroup() {
		return new FormGroup<GetEventSelectorsRequestFormProperties>({
			TrailName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetImportResponse {
		ImportId?: string;
		Destinations?: Array<string>;
		ImportSource?: ImportSource;
		StartEventTime?: Date;
		EndEventTime?: Date;
		ImportStatus?: ImportStatus;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
		ImportStatistics?: ImportStatistics;
	}
	export interface GetImportResponseFormProperties {
		ImportId: FormControl<string | null | undefined>,
		StartEventTime: FormControl<Date | null | undefined>,
		EndEventTime: FormControl<Date | null | undefined>,
		ImportStatus: FormControl<ImportStatus | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateGetImportResponseFormGroup() {
		return new FormGroup<GetImportResponseFormProperties>({
			ImportId: new FormControl<string | null | undefined>(undefined),
			StartEventTime: new FormControl<Date | null | undefined>(undefined),
			EndEventTime: new FormControl<Date | null | undefined>(undefined),
			ImportStatus: new FormControl<ImportStatus | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/**  The import source.  */
	export interface ImportSource {

		/** Required */
		S3: S3ImportSource;
	}

	/**  The import source.  */
	export interface ImportSourceFormProperties {
	}
	export function CreateImportSourceFormGroup() {
		return new FormGroup<ImportSourceFormProperties>({
		});

	}


	/**  The settings for the source S3 bucket.  */
	export interface S3ImportSource {

		/** Required */
		S3LocationUri: string;

		/** Required */
		S3BucketRegion: string;

		/** Required */
		S3BucketAccessRoleArn: string;
	}

	/**  The settings for the source S3 bucket.  */
	export interface S3ImportSourceFormProperties {

		/** Required */
		S3LocationUri: FormControl<string | null | undefined>,

		/** Required */
		S3BucketRegion: FormControl<string | null | undefined>,

		/** Required */
		S3BucketAccessRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateS3ImportSourceFormGroup() {
		return new FormGroup<S3ImportSourceFormProperties>({
			S3LocationUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3BucketRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3BucketAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ImportStatus { INITIALIZING = 'INITIALIZING', IN_PROGRESS = 'IN_PROGRESS', FAILED = 'FAILED', STOPPED = 'STOPPED', COMPLETED = 'COMPLETED' }


	/**  Provides statistics for the specified <code>ImportID</code>. CloudTrail does not update import statistics in real-time. Returned values for parameters such as <code>EventsCompleted</code> may be lower than the actual value, because CloudTrail updates statistics incrementally over the course of the import.  */
	export interface ImportStatistics {
		PrefixesFound?: number | null;
		PrefixesCompleted?: number | null;
		FilesCompleted?: number | null;
		EventsCompleted?: number | null;
		FailedEntries?: number | null;
	}

	/**  Provides statistics for the specified <code>ImportID</code>. CloudTrail does not update import statistics in real-time. Returned values for parameters such as <code>EventsCompleted</code> may be lower than the actual value, because CloudTrail updates statistics incrementally over the course of the import.  */
	export interface ImportStatisticsFormProperties {
		PrefixesFound: FormControl<number | null | undefined>,
		PrefixesCompleted: FormControl<number | null | undefined>,
		FilesCompleted: FormControl<number | null | undefined>,
		EventsCompleted: FormControl<number | null | undefined>,
		FailedEntries: FormControl<number | null | undefined>,
	}
	export function CreateImportStatisticsFormGroup() {
		return new FormGroup<ImportStatisticsFormProperties>({
			PrefixesFound: new FormControl<number | null | undefined>(undefined),
			PrefixesCompleted: new FormControl<number | null | undefined>(undefined),
			FilesCompleted: new FormControl<number | null | undefined>(undefined),
			EventsCompleted: new FormControl<number | null | undefined>(undefined),
			FailedEntries: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetImportRequest {

		/** Required */
		ImportId: string;
	}
	export interface GetImportRequestFormProperties {

		/** Required */
		ImportId: FormControl<string | null | undefined>,
	}
	export function CreateGetImportRequestFormGroup() {
		return new FormGroup<GetImportRequestFormProperties>({
			ImportId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportNotFoundException {
	}
	export interface ImportNotFoundExceptionFormProperties {
	}
	export function CreateImportNotFoundExceptionFormGroup() {
		return new FormGroup<ImportNotFoundExceptionFormProperties>({
		});

	}

	export interface GetInsightSelectorsResponse {
		TrailARN?: string;
		InsightSelectors?: Array<InsightSelector>;
	}
	export interface GetInsightSelectorsResponseFormProperties {
		TrailARN: FormControl<string | null | undefined>,
	}
	export function CreateGetInsightSelectorsResponseFormGroup() {
		return new FormGroup<GetInsightSelectorsResponseFormProperties>({
			TrailARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A JSON string that contains a list of Insights types that are logged on a trail. */
	export interface InsightSelector {
		InsightType?: InsightType;
	}

	/** A JSON string that contains a list of Insights types that are logged on a trail. */
	export interface InsightSelectorFormProperties {
		InsightType: FormControl<InsightType | null | undefined>,
	}
	export function CreateInsightSelectorFormGroup() {
		return new FormGroup<InsightSelectorFormProperties>({
			InsightType: new FormControl<InsightType | null | undefined>(undefined),
		});

	}

	export enum InsightType { ApiCallRateInsight = 'ApiCallRateInsight', ApiErrorRateInsight = 'ApiErrorRateInsight' }

	export interface GetInsightSelectorsRequest {

		/** Required */
		TrailName: string;
	}
	export interface GetInsightSelectorsRequestFormProperties {

		/** Required */
		TrailName: FormControl<string | null | undefined>,
	}
	export function CreateGetInsightSelectorsRequestFormGroup() {
		return new FormGroup<GetInsightSelectorsRequestFormProperties>({
			TrailName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InsightNotEnabledException {
	}
	export interface InsightNotEnabledExceptionFormProperties {
	}
	export function CreateInsightNotEnabledExceptionFormGroup() {
		return new FormGroup<InsightNotEnabledExceptionFormProperties>({
		});

	}

	export interface GetQueryResultsResponse {
		QueryStatus?: QueryStatus;
		QueryStatistics?: QueryStatistics;
		QueryResultRows?: Array<Array<QueryResultColumn>>;
		NextToken?: string;
		ErrorMessage?: string;
	}
	export interface GetQueryResultsResponseFormProperties {
		QueryStatus: FormControl<QueryStatus | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateGetQueryResultsResponseFormGroup() {
		return new FormGroup<GetQueryResultsResponseFormProperties>({
			QueryStatus: new FormControl<QueryStatus | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata about a query, such as the number of results. */
	export interface QueryStatistics {
		ResultsCount?: number | null;
		TotalResultsCount?: number | null;
		BytesScanned?: number | null;
	}

	/** Metadata about a query, such as the number of results. */
	export interface QueryStatisticsFormProperties {
		ResultsCount: FormControl<number | null | undefined>,
		TotalResultsCount: FormControl<number | null | undefined>,
		BytesScanned: FormControl<number | null | undefined>,
	}
	export function CreateQueryStatisticsFormGroup() {
		return new FormGroup<QueryStatisticsFormProperties>({
			ResultsCount: new FormControl<number | null | undefined>(undefined),
			TotalResultsCount: new FormControl<number | null | undefined>(undefined),
			BytesScanned: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface QueryResultColumn {
	}
	export interface QueryResultColumnFormProperties {
	}
	export function CreateQueryResultColumnFormGroup() {
		return new FormGroup<QueryResultColumnFormProperties>({
		});

	}

	export interface GetQueryResultsRequest {
		EventDataStore?: string;

		/** Required */
		QueryId: string;
		NextToken?: string;
		MaxQueryResults?: number | null;
	}
	export interface GetQueryResultsRequestFormProperties {
		EventDataStore: FormControl<string | null | undefined>,

		/** Required */
		QueryId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxQueryResults: FormControl<number | null | undefined>,
	}
	export function CreateGetQueryResultsRequestFormGroup() {
		return new FormGroup<GetQueryResultsRequestFormProperties>({
			EventDataStore: new FormControl<string | null | undefined>(undefined),
			QueryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxQueryResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvalidMaxResultsException {
	}
	export interface InvalidMaxResultsExceptionFormProperties {
	}
	export function CreateInvalidMaxResultsExceptionFormGroup() {
		return new FormGroup<InvalidMaxResultsExceptionFormProperties>({
		});

	}

	export interface InvalidNextTokenException {
	}
	export interface InvalidNextTokenExceptionFormProperties {
	}
	export function CreateInvalidNextTokenExceptionFormGroup() {
		return new FormGroup<InvalidNextTokenExceptionFormProperties>({
		});

	}

	export interface GetResourcePolicyResponse {
		ResourceArn?: string;
		ResourcePolicy?: string;
	}
	export interface GetResourcePolicyResponseFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
		ResourcePolicy: FormControl<string | null | undefined>,
	}
	export function CreateGetResourcePolicyResponseFormGroup() {
		return new FormGroup<GetResourcePolicyResponseFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			ResourcePolicy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetResourcePolicyRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface GetResourcePolicyRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateGetResourcePolicyRequestFormGroup() {
		return new FormGroup<GetResourcePolicyRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetTrailResponse {

		/** The settings for a trail. */
		Trail?: Trail;
	}
	export interface GetTrailResponseFormProperties {
	}
	export function CreateGetTrailResponseFormGroup() {
		return new FormGroup<GetTrailResponseFormProperties>({
		});

	}

	export interface GetTrailRequest {

		/** Required */
		Name: string;
	}
	export interface GetTrailRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetTrailRequestFormGroup() {
		return new FormGroup<GetTrailRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface GetTrailStatusResponse {
		IsLogging?: boolean | null;
		LatestDeliveryError?: string;
		LatestNotificationError?: string;
		LatestDeliveryTime?: Date;
		LatestNotificationTime?: Date;
		StartLoggingTime?: Date;
		StopLoggingTime?: Date;
		LatestCloudWatchLogsDeliveryError?: string;
		LatestCloudWatchLogsDeliveryTime?: Date;
		LatestDigestDeliveryTime?: Date;
		LatestDigestDeliveryError?: string;
		LatestDeliveryAttemptTime?: string;
		LatestNotificationAttemptTime?: string;
		LatestNotificationAttemptSucceeded?: string;
		LatestDeliveryAttemptSucceeded?: string;
		TimeLoggingStarted?: string;
		TimeLoggingStopped?: string;
	}

	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface GetTrailStatusResponseFormProperties {
		IsLogging: FormControl<boolean | null | undefined>,
		LatestDeliveryError: FormControl<string | null | undefined>,
		LatestNotificationError: FormControl<string | null | undefined>,
		LatestDeliveryTime: FormControl<Date | null | undefined>,
		LatestNotificationTime: FormControl<Date | null | undefined>,
		StartLoggingTime: FormControl<Date | null | undefined>,
		StopLoggingTime: FormControl<Date | null | undefined>,
		LatestCloudWatchLogsDeliveryError: FormControl<string | null | undefined>,
		LatestCloudWatchLogsDeliveryTime: FormControl<Date | null | undefined>,
		LatestDigestDeliveryTime: FormControl<Date | null | undefined>,
		LatestDigestDeliveryError: FormControl<string | null | undefined>,
		LatestDeliveryAttemptTime: FormControl<string | null | undefined>,
		LatestNotificationAttemptTime: FormControl<string | null | undefined>,
		LatestNotificationAttemptSucceeded: FormControl<string | null | undefined>,
		LatestDeliveryAttemptSucceeded: FormControl<string | null | undefined>,
		TimeLoggingStarted: FormControl<string | null | undefined>,
		TimeLoggingStopped: FormControl<string | null | undefined>,
	}
	export function CreateGetTrailStatusResponseFormGroup() {
		return new FormGroup<GetTrailStatusResponseFormProperties>({
			IsLogging: new FormControl<boolean | null | undefined>(undefined),
			LatestDeliveryError: new FormControl<string | null | undefined>(undefined),
			LatestNotificationError: new FormControl<string | null | undefined>(undefined),
			LatestDeliveryTime: new FormControl<Date | null | undefined>(undefined),
			LatestNotificationTime: new FormControl<Date | null | undefined>(undefined),
			StartLoggingTime: new FormControl<Date | null | undefined>(undefined),
			StopLoggingTime: new FormControl<Date | null | undefined>(undefined),
			LatestCloudWatchLogsDeliveryError: new FormControl<string | null | undefined>(undefined),
			LatestCloudWatchLogsDeliveryTime: new FormControl<Date | null | undefined>(undefined),
			LatestDigestDeliveryTime: new FormControl<Date | null | undefined>(undefined),
			LatestDigestDeliveryError: new FormControl<string | null | undefined>(undefined),
			LatestDeliveryAttemptTime: new FormControl<string | null | undefined>(undefined),
			LatestNotificationAttemptTime: new FormControl<string | null | undefined>(undefined),
			LatestNotificationAttemptSucceeded: new FormControl<string | null | undefined>(undefined),
			LatestDeliveryAttemptSucceeded: new FormControl<string | null | undefined>(undefined),
			TimeLoggingStarted: new FormControl<string | null | undefined>(undefined),
			TimeLoggingStopped: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The name of a trail about which you want the current status. */
	export interface GetTrailStatusRequest {

		/** Required */
		Name: string;
	}

	/** The name of a trail about which you want the current status. */
	export interface GetTrailStatusRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetTrailStatusRequestFormGroup() {
		return new FormGroup<GetTrailStatusRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListChannelsResponse {
		Channels?: Array<Channel>;
		NextToken?: string;
	}
	export interface ListChannelsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChannelsResponseFormGroup() {
		return new FormGroup<ListChannelsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a returned CloudTrail channel. */
	export interface Channel {
		ChannelArn?: string;
		Name?: string;
	}

	/** Contains information about a returned CloudTrail channel. */
	export interface ChannelFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateChannelFormGroup() {
		return new FormGroup<ChannelFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListChannelsRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListChannelsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChannelsRequestFormGroup() {
		return new FormGroup<ListChannelsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEventDataStoresResponse {
		EventDataStores?: Array<EventDataStore>;
		NextToken?: string;
	}
	export interface ListEventDataStoresResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEventDataStoresResponseFormGroup() {
		return new FormGroup<ListEventDataStoresResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A storage lake of event data against which you can run complex SQL-based queries. An event data store can include events that you have logged on your account from the last 90 to 2557 days (about three months to up to seven years). To select events for an event data store, use <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html#creating-data-event-selectors-advanced">advanced event selectors</a>. */
	export interface EventDataStore {
		EventDataStoreArn?: string;
		Name?: string;
		TerminationProtectionEnabled?: boolean | null;
		Status?: EventDataStoreStatus;
		AdvancedEventSelectors?: Array<AdvancedEventSelector>;
		MultiRegionEnabled?: boolean | null;
		OrganizationEnabled?: boolean | null;
		RetentionPeriod?: number | null;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
	}

	/** A storage lake of event data against which you can run complex SQL-based queries. An event data store can include events that you have logged on your account from the last 90 to 2557 days (about three months to up to seven years). To select events for an event data store, use <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html#creating-data-event-selectors-advanced">advanced event selectors</a>. */
	export interface EventDataStoreFormProperties {
		EventDataStoreArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		TerminationProtectionEnabled: FormControl<boolean | null | undefined>,
		Status: FormControl<EventDataStoreStatus | null | undefined>,
		MultiRegionEnabled: FormControl<boolean | null | undefined>,
		OrganizationEnabled: FormControl<boolean | null | undefined>,
		RetentionPeriod: FormControl<number | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateEventDataStoreFormGroup() {
		return new FormGroup<EventDataStoreFormProperties>({
			EventDataStoreArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			TerminationProtectionEnabled: new FormControl<boolean | null | undefined>(undefined),
			Status: new FormControl<EventDataStoreStatus | null | undefined>(undefined),
			MultiRegionEnabled: new FormControl<boolean | null | undefined>(undefined),
			OrganizationEnabled: new FormControl<boolean | null | undefined>(undefined),
			RetentionPeriod: new FormControl<number | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListEventDataStoresRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListEventDataStoresRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListEventDataStoresRequestFormGroup() {
		return new FormGroup<ListEventDataStoresRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListImportFailuresResponse {
		Failures?: Array<ImportFailureListItem>;
		NextToken?: string;
	}
	export interface ListImportFailuresResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImportFailuresResponseFormGroup() {
		return new FormGroup<ListImportFailuresResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Provides information about an import failure.  */
	export interface ImportFailureListItem {
		Location?: string;
		Status?: ImportFailureStatus;
		ErrorType?: string;
		ErrorMessage?: string;
		LastUpdatedTime?: Date;
	}

	/**  Provides information about an import failure.  */
	export interface ImportFailureListItemFormProperties {
		Location: FormControl<string | null | undefined>,
		Status: FormControl<ImportFailureStatus | null | undefined>,
		ErrorType: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateImportFailureListItemFormGroup() {
		return new FormGroup<ImportFailureListItemFormProperties>({
			Location: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ImportFailureStatus | null | undefined>(undefined),
			ErrorType: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ImportFailureStatus { FAILED = 'FAILED', RETRY = 'RETRY', SUCCEEDED = 'SUCCEEDED' }

	export interface ListImportFailuresRequest {

		/** Required */
		ImportId: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListImportFailuresRequestFormProperties {

		/** Required */
		ImportId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImportFailuresRequestFormGroup() {
		return new FormGroup<ListImportFailuresRequestFormProperties>({
			ImportId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListImportsResponse {
		Imports?: Array<ImportsListItem>;
		NextToken?: string;
	}
	export interface ListImportsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImportsResponseFormGroup() {
		return new FormGroup<ListImportsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Contains information about an import that was returned by a lookup request.  */
	export interface ImportsListItem {
		ImportId?: string;
		ImportStatus?: ImportStatus;
		Destinations?: Array<string>;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
	}

	/**  Contains information about an import that was returned by a lookup request.  */
	export interface ImportsListItemFormProperties {
		ImportId: FormControl<string | null | undefined>,
		ImportStatus: FormControl<ImportStatus | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateImportsListItemFormGroup() {
		return new FormGroup<ImportsListItemFormProperties>({
			ImportId: new FormControl<string | null | undefined>(undefined),
			ImportStatus: new FormControl<ImportStatus | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListImportsRequest {
		MaxResults?: number | null;
		Destination?: string;
		ImportStatus?: ImportStatus;
		NextToken?: string;
	}
	export interface ListImportsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		Destination: FormControl<string | null | undefined>,
		ImportStatus: FormControl<ImportStatus | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImportsRequestFormGroup() {
		return new FormGroup<ListImportsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			Destination: new FormControl<string | null | undefined>(undefined),
			ImportStatus: new FormControl<ImportStatus | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface ListPublicKeysResponse {
		PublicKeyList?: Array<PublicKey>;
		NextToken?: string;
	}

	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface ListPublicKeysResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPublicKeysResponseFormGroup() {
		return new FormGroup<ListPublicKeysResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a returned public key. */
	export interface PublicKey {
		Value?: string;
		ValidityStartTime?: Date;
		ValidityEndTime?: Date;
		Fingerprint?: string;
	}

	/** Contains information about a returned public key. */
	export interface PublicKeyFormProperties {
		Value: FormControl<string | null | undefined>,
		ValidityStartTime: FormControl<Date | null | undefined>,
		ValidityEndTime: FormControl<Date | null | undefined>,
		Fingerprint: FormControl<string | null | undefined>,
	}
	export function CreatePublicKeyFormGroup() {
		return new FormGroup<PublicKeyFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined),
			ValidityStartTime: new FormControl<Date | null | undefined>(undefined),
			ValidityEndTime: new FormControl<Date | null | undefined>(undefined),
			Fingerprint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Requests the public keys for a specified time range. */
	export interface ListPublicKeysRequest {
		StartTime?: Date;
		EndTime?: Date;
		NextToken?: string;
	}

	/** Requests the public keys for a specified time range. */
	export interface ListPublicKeysRequestFormProperties {
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPublicKeysRequestFormGroup() {
		return new FormGroup<ListPublicKeysRequestFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidTimeRangeException {
	}
	export interface InvalidTimeRangeExceptionFormProperties {
	}
	export function CreateInvalidTimeRangeExceptionFormGroup() {
		return new FormGroup<InvalidTimeRangeExceptionFormProperties>({
		});

	}

	export interface InvalidTokenException {
	}
	export interface InvalidTokenExceptionFormProperties {
	}
	export function CreateInvalidTokenExceptionFormGroup() {
		return new FormGroup<InvalidTokenExceptionFormProperties>({
		});

	}

	export interface ListQueriesResponse {
		Queries?: Array<Query>;
		NextToken?: string;
	}
	export interface ListQueriesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListQueriesResponseFormGroup() {
		return new FormGroup<ListQueriesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A SQL string of criteria about events that you want to collect in an event data store. */
	export interface Query {
		QueryId?: string;
		QueryStatus?: QueryStatus;
		CreationTime?: Date;
	}

	/** A SQL string of criteria about events that you want to collect in an event data store. */
	export interface QueryFormProperties {
		QueryId: FormControl<string | null | undefined>,
		QueryStatus: FormControl<QueryStatus | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateQueryFormGroup() {
		return new FormGroup<QueryFormProperties>({
			QueryId: new FormControl<string | null | undefined>(undefined),
			QueryStatus: new FormControl<QueryStatus | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListQueriesRequest {

		/** Required */
		EventDataStore: string;
		NextToken?: string;
		MaxResults?: number | null;
		StartTime?: Date;
		EndTime?: Date;
		QueryStatus?: QueryStatus;
	}
	export interface ListQueriesRequestFormProperties {

		/** Required */
		EventDataStore: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		QueryStatus: FormControl<QueryStatus | null | undefined>,
	}
	export function CreateListQueriesRequestFormGroup() {
		return new FormGroup<ListQueriesRequestFormProperties>({
			EventDataStore: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			QueryStatus: new FormControl<QueryStatus | null | undefined>(undefined),
		});

	}

	export interface InvalidDateRangeException {
	}
	export interface InvalidDateRangeExceptionFormProperties {
	}
	export function CreateInvalidDateRangeExceptionFormGroup() {
		return new FormGroup<InvalidDateRangeExceptionFormProperties>({
		});

	}

	export interface InvalidQueryStatusException {
	}
	export interface InvalidQueryStatusExceptionFormProperties {
	}
	export function CreateInvalidQueryStatusExceptionFormGroup() {
		return new FormGroup<InvalidQueryStatusExceptionFormProperties>({
		});

	}


	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface ListTagsResponse {
		ResourceTagList?: Array<ResourceTag>;
		NextToken?: string;
	}

	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface ListTagsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsResponseFormGroup() {
		return new FormGroup<ListTagsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource tag. */
	export interface ResourceTag {
		ResourceId?: string;
		TagsList?: Array<Tag>;
	}

	/** A resource tag. */
	export interface ResourceTagFormProperties {
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateResourceTagFormGroup() {
		return new FormGroup<ResourceTagFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a list of tags to return. */
	export interface ListTagsRequest {

		/** Required */
		ResourceIdList: Array<string>;
		NextToken?: string;
	}

	/** Specifies a list of tags to return. */
	export interface ListTagsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsRequestFormGroup() {
		return new FormGroup<ListTagsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTrailsResponse {
		Trails?: Array<TrailInfo>;
		NextToken?: string;
	}
	export interface ListTrailsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTrailsResponseFormGroup() {
		return new FormGroup<ListTrailsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a CloudTrail trail, including the trail's name, home Region, and Amazon Resource Name (ARN). */
	export interface TrailInfo {
		TrailARN?: string;
		Name?: string;
		HomeRegion?: string;
	}

	/** Information about a CloudTrail trail, including the trail's name, home Region, and Amazon Resource Name (ARN). */
	export interface TrailInfoFormProperties {
		TrailARN: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		HomeRegion: FormControl<string | null | undefined>,
	}
	export function CreateTrailInfoFormGroup() {
		return new FormGroup<TrailInfoFormProperties>({
			TrailARN: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			HomeRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTrailsRequest {
		NextToken?: string;
	}
	export interface ListTrailsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTrailsRequestFormGroup() {
		return new FormGroup<ListTrailsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a response to a LookupEvents action. */
	export interface LookupEventsResponse {
		Events?: Array<Event>;
		NextToken?: string;
	}

	/** Contains a response to a LookupEvents action. */
	export interface LookupEventsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateLookupEventsResponseFormGroup() {
		return new FormGroup<LookupEventsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about an event that was returned by a lookup request. The result includes a representation of a CloudTrail event. */
	export interface Event {
		EventId?: string;
		EventName?: string;
		ReadOnly?: string;
		AccessKeyId?: string;
		EventTime?: Date;
		EventSource?: string;
		Username?: string;
		Resources?: Array<Resource>;
		CloudTrailEvent?: string;
	}

	/** Contains information about an event that was returned by a lookup request. The result includes a representation of a CloudTrail event. */
	export interface EventFormProperties {
		EventId: FormControl<string | null | undefined>,
		EventName: FormControl<string | null | undefined>,
		ReadOnly: FormControl<string | null | undefined>,
		AccessKeyId: FormControl<string | null | undefined>,
		EventTime: FormControl<Date | null | undefined>,
		EventSource: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
		CloudTrailEvent: FormControl<string | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			EventId: new FormControl<string | null | undefined>(undefined),
			EventName: new FormControl<string | null | undefined>(undefined),
			ReadOnly: new FormControl<string | null | undefined>(undefined),
			AccessKeyId: new FormControl<string | null | undefined>(undefined),
			EventTime: new FormControl<Date | null | undefined>(undefined),
			EventSource: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			CloudTrailEvent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the type and name of a resource referenced by an event. */
	export interface Resource {
		ResourceType?: string;
		ResourceName?: string;
	}

	/** Specifies the type and name of a resource referenced by an event. */
	export interface ResourceFormProperties {
		ResourceType: FormControl<string | null | undefined>,
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			ResourceType: new FormControl<string | null | undefined>(undefined),
			ResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a request for LookupEvents. */
	export interface LookupEventsRequest {
		LookupAttributes?: Array<LookupAttribute>;
		StartTime?: Date;
		EndTime?: Date;
		EventCategory?: EventCategory;
		MaxResults?: number | null;
		NextToken?: string;
	}

	/** Contains a request for LookupEvents. */
	export interface LookupEventsRequestFormProperties {
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		EventCategory: FormControl<EventCategory | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateLookupEventsRequestFormGroup() {
		return new FormGroup<LookupEventsRequestFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			EventCategory: new FormControl<EventCategory | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies an attribute and value that filter the events returned. */
	export interface LookupAttribute {

		/** Required */
		AttributeKey: LookupAttributeKey;

		/** Required */
		AttributeValue: string;
	}

	/** Specifies an attribute and value that filter the events returned. */
	export interface LookupAttributeFormProperties {

		/** Required */
		AttributeKey: FormControl<LookupAttributeKey | null | undefined>,

		/** Required */
		AttributeValue: FormControl<string | null | undefined>,
	}
	export function CreateLookupAttributeFormGroup() {
		return new FormGroup<LookupAttributeFormProperties>({
			AttributeKey: new FormControl<LookupAttributeKey | null | undefined>(undefined, [Validators.required]),
			AttributeValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LookupAttributeKey { EventId = 'EventId', EventName = 'EventName', ReadOnly = 'ReadOnly', Username = 'Username', ResourceType = 'ResourceType', ResourceName = 'ResourceName', EventSource = 'EventSource', AccessKeyId = 'AccessKeyId' }

	export enum EventCategory { insight = 'insight' }

	export interface InvalidLookupAttributesException {
	}
	export interface InvalidLookupAttributesExceptionFormProperties {
	}
	export function CreateInvalidLookupAttributesExceptionFormGroup() {
		return new FormGroup<InvalidLookupAttributesExceptionFormProperties>({
		});

	}

	export interface InvalidEventCategoryException {
	}
	export interface InvalidEventCategoryExceptionFormProperties {
	}
	export function CreateInvalidEventCategoryExceptionFormGroup() {
		return new FormGroup<InvalidEventCategoryExceptionFormProperties>({
		});

	}

	export interface PutEventSelectorsResponse {
		TrailARN?: string;
		EventSelectors?: Array<EventSelector>;
		AdvancedEventSelectors?: Array<AdvancedEventSelector>;
	}
	export interface PutEventSelectorsResponseFormProperties {
		TrailARN: FormControl<string | null | undefined>,
	}
	export function CreatePutEventSelectorsResponseFormGroup() {
		return new FormGroup<PutEventSelectorsResponseFormProperties>({
			TrailARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutEventSelectorsRequest {

		/** Required */
		TrailName: string;
		EventSelectors?: Array<EventSelector>;
		AdvancedEventSelectors?: Array<AdvancedEventSelector>;
	}
	export interface PutEventSelectorsRequestFormProperties {

		/** Required */
		TrailName: FormControl<string | null | undefined>,
	}
	export function CreatePutEventSelectorsRequestFormGroup() {
		return new FormGroup<PutEventSelectorsRequestFormProperties>({
			TrailName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutInsightSelectorsResponse {
		TrailARN?: string;
		InsightSelectors?: Array<InsightSelector>;
	}
	export interface PutInsightSelectorsResponseFormProperties {
		TrailARN: FormControl<string | null | undefined>,
	}
	export function CreatePutInsightSelectorsResponseFormGroup() {
		return new FormGroup<PutInsightSelectorsResponseFormProperties>({
			TrailARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutInsightSelectorsRequest {

		/** Required */
		TrailName: string;

		/** Required */
		InsightSelectors: Array<InsightSelector>;
	}
	export interface PutInsightSelectorsRequestFormProperties {

		/** Required */
		TrailName: FormControl<string | null | undefined>,
	}
	export function CreatePutInsightSelectorsRequestFormGroup() {
		return new FormGroup<PutInsightSelectorsRequestFormProperties>({
			TrailName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidInsightSelectorsException {
	}
	export interface InvalidInsightSelectorsExceptionFormProperties {
	}
	export function CreateInvalidInsightSelectorsExceptionFormGroup() {
		return new FormGroup<InvalidInsightSelectorsExceptionFormProperties>({
		});

	}

	export interface PutResourcePolicyResponse {
		ResourceArn?: string;
		ResourcePolicy?: string;
	}
	export interface PutResourcePolicyResponseFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
		ResourcePolicy: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePolicyResponseFormGroup() {
		return new FormGroup<PutResourcePolicyResponseFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			ResourcePolicy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutResourcePolicyRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		ResourcePolicy: string;
	}
	export interface PutResourcePolicyRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,

		/** Required */
		ResourcePolicy: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePolicyRequestFormGroup() {
		return new FormGroup<PutResourcePolicyRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourcePolicy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResourcePolicyNotValidException {
	}
	export interface ResourcePolicyNotValidExceptionFormProperties {
	}
	export function CreateResourcePolicyNotValidExceptionFormGroup() {
		return new FormGroup<ResourcePolicyNotValidExceptionFormProperties>({
		});

	}


	/** Returns the following response if successful. Otherwise, returns an error. */
	export interface RegisterOrganizationDelegatedAdminResponse {
	}

	/** Returns the following response if successful. Otherwise, returns an error. */
	export interface RegisterOrganizationDelegatedAdminResponseFormProperties {
	}
	export function CreateRegisterOrganizationDelegatedAdminResponseFormGroup() {
		return new FormGroup<RegisterOrganizationDelegatedAdminResponseFormProperties>({
		});

	}


	/** Specifies an organization member account ID as a CloudTrail delegated administrator. */
	export interface RegisterOrganizationDelegatedAdminRequest {

		/** Required */
		MemberAccountId: string;
	}

	/** Specifies an organization member account ID as a CloudTrail delegated administrator. */
	export interface RegisterOrganizationDelegatedAdminRequestFormProperties {

		/** Required */
		MemberAccountId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterOrganizationDelegatedAdminRequestFormGroup() {
		return new FormGroup<RegisterOrganizationDelegatedAdminRequestFormProperties>({
			MemberAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AccountRegisteredException {
	}
	export interface AccountRegisteredExceptionFormProperties {
	}
	export function CreateAccountRegisteredExceptionFormGroup() {
		return new FormGroup<AccountRegisteredExceptionFormProperties>({
		});

	}

	export interface CannotDelegateManagementAccountException {
	}
	export interface CannotDelegateManagementAccountExceptionFormProperties {
	}
	export function CreateCannotDelegateManagementAccountExceptionFormGroup() {
		return new FormGroup<CannotDelegateManagementAccountExceptionFormProperties>({
		});

	}

	export interface DelegatedAdminAccountLimitExceededException {
	}
	export interface DelegatedAdminAccountLimitExceededExceptionFormProperties {
	}
	export function CreateDelegatedAdminAccountLimitExceededExceptionFormGroup() {
		return new FormGroup<DelegatedAdminAccountLimitExceededExceptionFormProperties>({
		});

	}


	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface RemoveTagsResponse {
	}

	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface RemoveTagsResponseFormProperties {
	}
	export function CreateRemoveTagsResponseFormGroup() {
		return new FormGroup<RemoveTagsResponseFormProperties>({
		});

	}


	/** Specifies the tags to remove from a trail, event data store, or channel. */
	export interface RemoveTagsRequest {

		/** Required */
		ResourceId: string;

		/** Required */
		TagsList: Array<Tag>;
	}

	/** Specifies the tags to remove from a trail, event data store, or channel. */
	export interface RemoveTagsRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateRemoveTagsRequestFormGroup() {
		return new FormGroup<RemoveTagsRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RestoreEventDataStoreResponse {
		EventDataStoreArn?: string;
		Name?: string;
		Status?: EventDataStoreStatus;
		AdvancedEventSelectors?: Array<AdvancedEventSelector>;
		MultiRegionEnabled?: boolean | null;
		OrganizationEnabled?: boolean | null;
		RetentionPeriod?: number | null;
		TerminationProtectionEnabled?: boolean | null;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
		KmsKeyId?: string;
	}
	export interface RestoreEventDataStoreResponseFormProperties {
		EventDataStoreArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<EventDataStoreStatus | null | undefined>,
		MultiRegionEnabled: FormControl<boolean | null | undefined>,
		OrganizationEnabled: FormControl<boolean | null | undefined>,
		RetentionPeriod: FormControl<number | null | undefined>,
		TerminationProtectionEnabled: FormControl<boolean | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateRestoreEventDataStoreResponseFormGroup() {
		return new FormGroup<RestoreEventDataStoreResponseFormProperties>({
			EventDataStoreArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<EventDataStoreStatus | null | undefined>(undefined),
			MultiRegionEnabled: new FormControl<boolean | null | undefined>(undefined),
			OrganizationEnabled: new FormControl<boolean | null | undefined>(undefined),
			RetentionPeriod: new FormControl<number | null | undefined>(undefined),
			TerminationProtectionEnabled: new FormControl<boolean | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RestoreEventDataStoreRequest {

		/** Required */
		EventDataStore: string;
	}
	export interface RestoreEventDataStoreRequestFormProperties {

		/** Required */
		EventDataStore: FormControl<string | null | undefined>,
	}
	export function CreateRestoreEventDataStoreRequestFormGroup() {
		return new FormGroup<RestoreEventDataStoreRequestFormProperties>({
			EventDataStore: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidEventDataStoreStatusException {
	}
	export interface InvalidEventDataStoreStatusExceptionFormProperties {
	}
	export function CreateInvalidEventDataStoreStatusExceptionFormGroup() {
		return new FormGroup<InvalidEventDataStoreStatusExceptionFormProperties>({
		});

	}

	export interface StartEventDataStoreIngestionResponse {
	}
	export interface StartEventDataStoreIngestionResponseFormProperties {
	}
	export function CreateStartEventDataStoreIngestionResponseFormGroup() {
		return new FormGroup<StartEventDataStoreIngestionResponseFormProperties>({
		});

	}

	export interface StartEventDataStoreIngestionRequest {

		/** Required */
		EventDataStore: string;
	}
	export interface StartEventDataStoreIngestionRequestFormProperties {

		/** Required */
		EventDataStore: FormControl<string | null | undefined>,
	}
	export function CreateStartEventDataStoreIngestionRequestFormGroup() {
		return new FormGroup<StartEventDataStoreIngestionRequestFormProperties>({
			EventDataStore: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartImportResponse {
		ImportId?: string;
		Destinations?: Array<string>;
		ImportSource?: ImportSource;
		StartEventTime?: Date;
		EndEventTime?: Date;
		ImportStatus?: ImportStatus;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
	}
	export interface StartImportResponseFormProperties {
		ImportId: FormControl<string | null | undefined>,
		StartEventTime: FormControl<Date | null | undefined>,
		EndEventTime: FormControl<Date | null | undefined>,
		ImportStatus: FormControl<ImportStatus | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateStartImportResponseFormGroup() {
		return new FormGroup<StartImportResponseFormProperties>({
			ImportId: new FormControl<string | null | undefined>(undefined),
			StartEventTime: new FormControl<Date | null | undefined>(undefined),
			EndEventTime: new FormControl<Date | null | undefined>(undefined),
			ImportStatus: new FormControl<ImportStatus | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface StartImportRequest {
		Destinations?: Array<string>;
		ImportSource?: ImportSource;
		StartEventTime?: Date;
		EndEventTime?: Date;
		ImportId?: string;
	}
	export interface StartImportRequestFormProperties {
		StartEventTime: FormControl<Date | null | undefined>,
		EndEventTime: FormControl<Date | null | undefined>,
		ImportId: FormControl<string | null | undefined>,
	}
	export function CreateStartImportRequestFormGroup() {
		return new FormGroup<StartImportRequestFormProperties>({
			StartEventTime: new FormControl<Date | null | undefined>(undefined),
			EndEventTime: new FormControl<Date | null | undefined>(undefined),
			ImportId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountHasOngoingImportException {
	}
	export interface AccountHasOngoingImportExceptionFormProperties {
	}
	export function CreateAccountHasOngoingImportExceptionFormGroup() {
		return new FormGroup<AccountHasOngoingImportExceptionFormProperties>({
		});

	}

	export interface InvalidImportSourceException {
	}
	export interface InvalidImportSourceExceptionFormProperties {
	}
	export function CreateInvalidImportSourceExceptionFormGroup() {
		return new FormGroup<InvalidImportSourceExceptionFormProperties>({
		});

	}


	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface StartLoggingResponse {
	}

	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface StartLoggingResponseFormProperties {
	}
	export function CreateStartLoggingResponseFormGroup() {
		return new FormGroup<StartLoggingResponseFormProperties>({
		});

	}


	/** The request to CloudTrail to start logging Amazon Web Services API calls for an account. */
	export interface StartLoggingRequest {

		/** Required */
		Name: string;
	}

	/** The request to CloudTrail to start logging Amazon Web Services API calls for an account. */
	export interface StartLoggingRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStartLoggingRequestFormGroup() {
		return new FormGroup<StartLoggingRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartQueryResponse {
		QueryId?: string;
	}
	export interface StartQueryResponseFormProperties {
		QueryId: FormControl<string | null | undefined>,
	}
	export function CreateStartQueryResponseFormGroup() {
		return new FormGroup<StartQueryResponseFormProperties>({
			QueryId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartQueryRequest {
		QueryStatement?: string;
		DeliveryS3Uri?: string;
		QueryAlias?: string;
		QueryParameters?: Array<string>;
	}
	export interface StartQueryRequestFormProperties {
		QueryStatement: FormControl<string | null | undefined>,
		DeliveryS3Uri: FormControl<string | null | undefined>,
		QueryAlias: FormControl<string | null | undefined>,
	}
	export function CreateStartQueryRequestFormGroup() {
		return new FormGroup<StartQueryRequestFormProperties>({
			QueryStatement: new FormControl<string | null | undefined>(undefined),
			DeliveryS3Uri: new FormControl<string | null | undefined>(undefined),
			QueryAlias: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidQueryStatementException {
	}
	export interface InvalidQueryStatementExceptionFormProperties {
	}
	export function CreateInvalidQueryStatementExceptionFormGroup() {
		return new FormGroup<InvalidQueryStatementExceptionFormProperties>({
		});

	}

	export interface MaxConcurrentQueriesException {
	}
	export interface MaxConcurrentQueriesExceptionFormProperties {
	}
	export function CreateMaxConcurrentQueriesExceptionFormGroup() {
		return new FormGroup<MaxConcurrentQueriesExceptionFormProperties>({
		});

	}

	export interface StopEventDataStoreIngestionResponse {
	}
	export interface StopEventDataStoreIngestionResponseFormProperties {
	}
	export function CreateStopEventDataStoreIngestionResponseFormGroup() {
		return new FormGroup<StopEventDataStoreIngestionResponseFormProperties>({
		});

	}

	export interface StopEventDataStoreIngestionRequest {

		/** Required */
		EventDataStore: string;
	}
	export interface StopEventDataStoreIngestionRequestFormProperties {

		/** Required */
		EventDataStore: FormControl<string | null | undefined>,
	}
	export function CreateStopEventDataStoreIngestionRequestFormGroup() {
		return new FormGroup<StopEventDataStoreIngestionRequestFormProperties>({
			EventDataStore: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopImportResponse {
		ImportId?: string;
		ImportSource?: ImportSource;
		Destinations?: Array<string>;
		ImportStatus?: ImportStatus;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
		StartEventTime?: Date;
		EndEventTime?: Date;
		ImportStatistics?: ImportStatistics;
	}
	export interface StopImportResponseFormProperties {
		ImportId: FormControl<string | null | undefined>,
		ImportStatus: FormControl<ImportStatus | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
		StartEventTime: FormControl<Date | null | undefined>,
		EndEventTime: FormControl<Date | null | undefined>,
	}
	export function CreateStopImportResponseFormGroup() {
		return new FormGroup<StopImportResponseFormProperties>({
			ImportId: new FormControl<string | null | undefined>(undefined),
			ImportStatus: new FormControl<ImportStatus | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			StartEventTime: new FormControl<Date | null | undefined>(undefined),
			EndEventTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface StopImportRequest {

		/** Required */
		ImportId: string;
	}
	export interface StopImportRequestFormProperties {

		/** Required */
		ImportId: FormControl<string | null | undefined>,
	}
	export function CreateStopImportRequestFormGroup() {
		return new FormGroup<StopImportRequestFormProperties>({
			ImportId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface StopLoggingResponse {
	}

	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface StopLoggingResponseFormProperties {
	}
	export function CreateStopLoggingResponseFormGroup() {
		return new FormGroup<StopLoggingResponseFormProperties>({
		});

	}


	/** Passes the request to CloudTrail to stop logging Amazon Web Services API calls for the specified account. */
	export interface StopLoggingRequest {

		/** Required */
		Name: string;
	}

	/** Passes the request to CloudTrail to stop logging Amazon Web Services API calls for the specified account. */
	export interface StopLoggingRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStopLoggingRequestFormGroup() {
		return new FormGroup<StopLoggingRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateChannelResponse {
		ChannelArn?: string;
		Name?: string;
		Source?: string;
		Destinations?: Array<Destination>;
	}
	export interface UpdateChannelResponseFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Source: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelResponseFormGroup() {
		return new FormGroup<UpdateChannelResponseFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateChannelRequest {

		/** Required */
		Channel: string;
		Destinations?: Array<Destination>;
		Name?: string;
	}
	export interface UpdateChannelRequestFormProperties {

		/** Required */
		Channel: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelRequestFormGroup() {
		return new FormGroup<UpdateChannelRequestFormProperties>({
			Channel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateEventDataStoreResponse {
		EventDataStoreArn?: string;
		Name?: string;
		Status?: EventDataStoreStatus;
		AdvancedEventSelectors?: Array<AdvancedEventSelector>;
		MultiRegionEnabled?: boolean | null;
		OrganizationEnabled?: boolean | null;
		RetentionPeriod?: number | null;
		TerminationProtectionEnabled?: boolean | null;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
		KmsKeyId?: string;
	}
	export interface UpdateEventDataStoreResponseFormProperties {
		EventDataStoreArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<EventDataStoreStatus | null | undefined>,
		MultiRegionEnabled: FormControl<boolean | null | undefined>,
		OrganizationEnabled: FormControl<boolean | null | undefined>,
		RetentionPeriod: FormControl<number | null | undefined>,
		TerminationProtectionEnabled: FormControl<boolean | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEventDataStoreResponseFormGroup() {
		return new FormGroup<UpdateEventDataStoreResponseFormProperties>({
			EventDataStoreArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<EventDataStoreStatus | null | undefined>(undefined),
			MultiRegionEnabled: new FormControl<boolean | null | undefined>(undefined),
			OrganizationEnabled: new FormControl<boolean | null | undefined>(undefined),
			RetentionPeriod: new FormControl<number | null | undefined>(undefined),
			TerminationProtectionEnabled: new FormControl<boolean | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateEventDataStoreRequest {

		/** Required */
		EventDataStore: string;
		Name?: string;
		AdvancedEventSelectors?: Array<AdvancedEventSelector>;
		MultiRegionEnabled?: boolean | null;
		OrganizationEnabled?: boolean | null;
		RetentionPeriod?: number | null;
		TerminationProtectionEnabled?: boolean | null;
		KmsKeyId?: string;
	}
	export interface UpdateEventDataStoreRequestFormProperties {

		/** Required */
		EventDataStore: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		MultiRegionEnabled: FormControl<boolean | null | undefined>,
		OrganizationEnabled: FormControl<boolean | null | undefined>,
		RetentionPeriod: FormControl<number | null | undefined>,
		TerminationProtectionEnabled: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEventDataStoreRequestFormGroup() {
		return new FormGroup<UpdateEventDataStoreRequestFormProperties>({
			EventDataStore: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			MultiRegionEnabled: new FormControl<boolean | null | undefined>(undefined),
			OrganizationEnabled: new FormControl<boolean | null | undefined>(undefined),
			RetentionPeriod: new FormControl<number | null | undefined>(undefined),
			TerminationProtectionEnabled: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface UpdateTrailResponse {
		Name?: string;
		S3BucketName?: string;
		S3KeyPrefix?: string;
		SnsTopicName?: string;
		SnsTopicARN?: string;
		IncludeGlobalServiceEvents?: boolean | null;
		IsMultiRegionTrail?: boolean | null;
		TrailARN?: string;
		LogFileValidationEnabled?: boolean | null;
		CloudWatchLogsLogGroupArn?: string;
		CloudWatchLogsRoleArn?: string;
		KmsKeyId?: string;
		IsOrganizationTrail?: boolean | null;
	}

	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface UpdateTrailResponseFormProperties {
		Name: FormControl<string | null | undefined>,
		S3BucketName: FormControl<string | null | undefined>,
		S3KeyPrefix: FormControl<string | null | undefined>,
		SnsTopicName: FormControl<string | null | undefined>,
		SnsTopicARN: FormControl<string | null | undefined>,
		IncludeGlobalServiceEvents: FormControl<boolean | null | undefined>,
		IsMultiRegionTrail: FormControl<boolean | null | undefined>,
		TrailARN: FormControl<string | null | undefined>,
		LogFileValidationEnabled: FormControl<boolean | null | undefined>,
		CloudWatchLogsLogGroupArn: FormControl<string | null | undefined>,
		CloudWatchLogsRoleArn: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		IsOrganizationTrail: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateTrailResponseFormGroup() {
		return new FormGroup<UpdateTrailResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			S3BucketName: new FormControl<string | null | undefined>(undefined),
			S3KeyPrefix: new FormControl<string | null | undefined>(undefined),
			SnsTopicName: new FormControl<string | null | undefined>(undefined),
			SnsTopicARN: new FormControl<string | null | undefined>(undefined),
			IncludeGlobalServiceEvents: new FormControl<boolean | null | undefined>(undefined),
			IsMultiRegionTrail: new FormControl<boolean | null | undefined>(undefined),
			TrailARN: new FormControl<string | null | undefined>(undefined),
			LogFileValidationEnabled: new FormControl<boolean | null | undefined>(undefined),
			CloudWatchLogsLogGroupArn: new FormControl<string | null | undefined>(undefined),
			CloudWatchLogsRoleArn: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			IsOrganizationTrail: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies settings to update for the trail. */
	export interface UpdateTrailRequest {

		/** Required */
		Name: string;
		S3BucketName?: string;
		S3KeyPrefix?: string;
		SnsTopicName?: string;
		IncludeGlobalServiceEvents?: boolean | null;
		IsMultiRegionTrail?: boolean | null;
		EnableLogFileValidation?: boolean | null;
		CloudWatchLogsLogGroupArn?: string;
		CloudWatchLogsRoleArn?: string;
		KmsKeyId?: string;
		IsOrganizationTrail?: boolean | null;
	}

	/** Specifies settings to update for the trail. */
	export interface UpdateTrailRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		S3BucketName: FormControl<string | null | undefined>,
		S3KeyPrefix: FormControl<string | null | undefined>,
		SnsTopicName: FormControl<string | null | undefined>,
		IncludeGlobalServiceEvents: FormControl<boolean | null | undefined>,
		IsMultiRegionTrail: FormControl<boolean | null | undefined>,
		EnableLogFileValidation: FormControl<boolean | null | undefined>,
		CloudWatchLogsLogGroupArn: FormControl<string | null | undefined>,
		CloudWatchLogsRoleArn: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		IsOrganizationTrail: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateTrailRequestFormGroup() {
		return new FormGroup<UpdateTrailRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3BucketName: new FormControl<string | null | undefined>(undefined),
			S3KeyPrefix: new FormControl<string | null | undefined>(undefined),
			SnsTopicName: new FormControl<string | null | undefined>(undefined),
			IncludeGlobalServiceEvents: new FormControl<boolean | null | undefined>(undefined),
			IsMultiRegionTrail: new FormControl<boolean | null | undefined>(undefined),
			EnableLogFileValidation: new FormControl<boolean | null | undefined>(undefined),
			CloudWatchLogsLogGroupArn: new FormControl<string | null | undefined>(undefined),
			CloudWatchLogsRoleArn: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			IsOrganizationTrail: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Adds one or more tags to a trail, event data store, or channel, up to a limit of 50. Overwrites an existing tag's value when a new value is specified for an existing tag key. Tag key names must be unique; you cannot have two keys with the same name but different values. If you specify a key without a value, the tag will be created with the specified key and a value of null. You can tag a trail or event data store that applies to all Amazon Web Services Regions only from the Region in which the trail or event data store was created (also known as its home Region).
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags
		 * @return {AddTagsResponse} Success
		 */
		AddTags(requestBody: AddTagsRequest): Observable<AddTagsResponse> {
			return this.http.post<AddTagsResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels a query if the query is not in a terminated state, such as <code>CANCELLED</code>, <code>FAILED</code>, <code>TIMED_OUT</code>, or <code>FINISHED</code>. You must specify an ARN value for <code>EventDataStore</code>. The ID of the query that you want to cancel is also required. When you run <code>CancelQuery</code>, the query status might show as <code>CANCELLED</code> even if the operation is not yet finished.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CancelQuery
		 * @return {CancelQueryResponse} Success
		 */
		CancelQuery(requestBody: CancelQueryRequest): Observable<CancelQueryResponse> {
			return this.http.post<CancelQueryResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CancelQuery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a channel for CloudTrail to ingest events from a partner or external source. After you create a channel, a CloudTrail Lake event data store can log events from the partner or source that you specify.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateChannel
		 * @return {CreateChannelResponse} Success
		 */
		CreateChannel(requestBody: CreateChannelRequest): Observable<CreateChannelResponse> {
			return this.http.post<CreateChannelResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateChannel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new event data store.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateEventDataStore
		 * @return {CreateEventDataStoreResponse} Success
		 */
		CreateEventDataStore(requestBody: CreateEventDataStoreRequest): Observable<CreateEventDataStoreResponse> {
			return this.http.post<CreateEventDataStoreResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateEventDataStore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a trail that specifies the settings for delivery of log data to an Amazon S3 bucket.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail
		 * @return {CreateTrailResponse} Success
		 */
		CreateTrail(requestBody: CreateTrailRequest): Observable<CreateTrailResponse> {
			return this.http.post<CreateTrailResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a channel.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteChannel
		 * @return {DeleteChannelResponse} Success
		 */
		DeleteChannel(requestBody: DeleteChannelRequest): Observable<DeleteChannelResponse> {
			return this.http.post<DeleteChannelResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteChannel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disables the event data store specified by <code>EventDataStore</code>, which accepts an event data store ARN. After you run <code>DeleteEventDataStore</code>, the event data store enters a <code>PENDING_DELETION</code> state, and is automatically deleted after a wait period of seven days. <code>TerminationProtectionEnabled</code> must be set to <code>False</code> on the event data store; this operation cannot work if <code>TerminationProtectionEnabled</code> is <code>True</code>.</p> <p>After you run <code>DeleteEventDataStore</code> on an event data store, you cannot run <code>ListQueries</code>, <code>DescribeQuery</code>, or <code>GetQueryResults</code> on queries that are using an event data store in a <code>PENDING_DELETION</code> state. An event data store in the <code>PENDING_DELETION</code> state does not incur costs.</p>
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteEventDataStore
		 * @return {DeleteEventDataStoreResponse} Success
		 */
		DeleteEventDataStore(requestBody: DeleteEventDataStoreRequest): Observable<DeleteEventDataStoreResponse> {
			return this.http.post<DeleteEventDataStoreResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteEventDataStore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the resource-based policy attached to the CloudTrail channel.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteResourcePolicy
		 * @return {DeleteResourcePolicyResponse} Success
		 */
		DeleteResourcePolicy(requestBody: DeleteResourcePolicyRequest): Observable<DeleteResourcePolicyResponse> {
			return this.http.post<DeleteResourcePolicyResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a trail. This operation must be called from the Region in which the trail was created. <code>DeleteTrail</code> cannot be called on the shadow trails (replicated trails in other Regions) of a trail that is enabled in all Regions.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail
		 * @return {DeleteTrailResponse} Success
		 */
		DeleteTrail(requestBody: DeleteTrailRequest): Observable<DeleteTrailResponse> {
			return this.http.post<DeleteTrailResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes CloudTrail delegated administrator permissions from a member account in an organization.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeregisterOrganizationDelegatedAdmin
		 * @return {DeregisterOrganizationDelegatedAdminResponse} Success
		 */
		DeregisterOrganizationDelegatedAdmin(requestBody: DeregisterOrganizationDelegatedAdminRequest): Observable<DeregisterOrganizationDelegatedAdminResponse> {
			return this.http.post<DeregisterOrganizationDelegatedAdminResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeregisterOrganizationDelegatedAdmin', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns metadata about a query, including query run time in milliseconds, number of events scanned and matched, and query status. If the query results were delivered to an S3 bucket, the response also provides the S3 URI and the delivery status.</p> <p>You must specify either a <code>QueryID</code> or a <code>QueryAlias</code>. Specifying the <code>QueryAlias</code> parameter returns information about the last query run for the alias.</p>
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeQuery
		 * @return {DescribeQueryResponse} Success
		 */
		DescribeQuery(requestBody: DescribeQueryRequest): Observable<DescribeQueryResponse> {
			return this.http.post<DescribeQueryResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeQuery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves settings for one or more trails associated with the current Region for your account.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails
		 * @return {DescribeTrailsResponse} Success
		 */
		DescribeTrails(requestBody: DescribeTrailsRequest): Observable<DescribeTrailsResponse> {
			return this.http.post<DescribeTrailsResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a specific channel.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetChannel
		 * @return {GetChannelResponse} Success
		 */
		GetChannel(requestBody: GetChannelRequest): Observable<GetChannelResponse> {
			return this.http.post<GetChannelResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetChannel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about an event data store specified as either an ARN or the ID portion of the ARN.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventDataStore
		 * @return {GetEventDataStoreResponse} Success
		 */
		GetEventDataStore(requestBody: GetEventDataStoreRequest): Observable<GetEventDataStoreResponse> {
			return this.http.post<GetEventDataStoreResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventDataStore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the settings for the event selectors that you configured for your trail. The information returned for your event selectors includes the following:</p> <ul> <li> <p>If your event selector includes read-only events, write-only events, or all events. This applies to both management events and data events.</p> </li> <li> <p>If your event selector includes management events.</p> </li> <li> <p>If your event selector includes data events, the resources on which you are logging data events.</p> </li> </ul> <p>For more information about logging management and data events, see the following topics in the <i>CloudTrail User Guide</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html">Logging management events</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events</a> </p> </li> </ul>
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors
		 * @return {GetEventSelectorsResponse} Success
		 */
		GetEventSelectors(requestBody: GetEventSelectorsRequest): Observable<GetEventSelectorsResponse> {
			return this.http.post<GetEventSelectorsResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a specific import.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetImport
		 * @return {GetImportResponse} Success
		 */
		GetImport(requestBody: GetImportRequest): Observable<GetImportResponse> {
			return this.http.post<GetImportResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetImport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the settings for the Insights event selectors that you configured for your trail. <code>GetInsightSelectors</code> shows if CloudTrail Insights event logging is enabled on the trail, and if it is, which insight types are enabled. If you run <code>GetInsightSelectors</code> on a trail that does not have Insights events enabled, the operation throws the exception <code>InsightNotEnabledException</code> </p> <p>For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-insights-events-with-cloudtrail.html">Logging CloudTrail Insights Events for Trails </a> in the <i>CloudTrail User Guide</i>.</p>
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors
		 * @return {GetInsightSelectorsResponse} Success
		 */
		GetInsightSelectors(requestBody: GetInsightSelectorsRequest): Observable<GetInsightSelectorsResponse> {
			return this.http.post<GetInsightSelectorsResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets event data results of a query. You must specify the <code>QueryID</code> value returned by the <code>StartQuery</code> operation.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetQueryResults
		 * @param {string} NextToken Pagination token
		 * @return {GetQueryResultsResponse} Success
		 */
		GetQueryResults(NextToken: string | null | undefined, requestBody: GetQueryResultsRequest): Observable<GetQueryResultsResponse> {
			return this.http.post<GetQueryResultsResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetQueryResults?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the JSON text of the resource-based policy document attached to the CloudTrail channel.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetResourcePolicy
		 * @return {GetResourcePolicyResponse} Success
		 */
		GetResourcePolicy(requestBody: GetResourcePolicyRequest): Observable<GetResourcePolicyResponse> {
			return this.http.post<GetResourcePolicyResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns settings information for a specified trail.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail
		 * @return {GetTrailResponse} Success
		 */
		GetTrail(requestBody: GetTrailRequest): Observable<GetTrailResponse> {
			return this.http.post<GetTrailResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a JSON-formatted list of information about the specified trail. Fields include information on delivery errors, Amazon SNS and Amazon S3 errors, and start and stop logging times for each trail. This operation returns trail status from a single Region. To return trail status from all Regions, you must call the operation on each Region.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus
		 * @return {GetTrailStatusResponse} Success
		 */
		GetTrailStatus(requestBody: GetTrailStatusRequest): Observable<GetTrailStatusResponse> {
			return this.http.post<GetTrailStatusResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the channels in the current account, and their source names.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListChannels
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListChannelsResponse} Success
		 */
		ListChannels(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListChannelsRequest): Observable<ListChannelsResponse> {
			return this.http.post<ListChannelsResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListChannels?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about all event data stores in the account, in the current Region.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListEventDataStores
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListEventDataStoresResponse} Success
		 */
		ListEventDataStores(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListEventDataStoresRequest): Observable<ListEventDataStoresResponse> {
			return this.http.post<ListEventDataStoresResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListEventDataStores?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of failures for the specified import.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImportFailures
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListImportFailuresResponse} Success
		 */
		ListImportFailures(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListImportFailuresRequest): Observable<ListImportFailuresResponse> {
			return this.http.post<ListImportFailuresResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImportFailures?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information on all imports, or a select set of imports by <code>ImportStatus</code> or <code>Destination</code>.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImports
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListImportsResponse} Success
		 */
		ListImports(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListImportsRequest): Observable<ListImportsResponse> {
			return this.http.post<ListImportsResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImports?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns all public keys whose private keys were used to sign the digest files within the specified time range. The public key is needed to validate digest files that were signed with its corresponding private key.</p> <note> <p>CloudTrail uses different private and public key pairs per Region. Each digest file is signed with a private key unique to its Region. When you validate a digest file from a specific Region, you must look in the same Region for its corresponding public key.</p> </note>
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys
		 * @param {string} NextToken Pagination token
		 * @return {ListPublicKeysResponse} Success
		 */
		ListPublicKeys(NextToken: string | null | undefined, requestBody: ListPublicKeysRequest): Observable<ListPublicKeysResponse> {
			return this.http.post<ListPublicKeysResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of queries and query statuses for the past seven days. You must specify an ARN value for <code>EventDataStore</code>. Optionally, to shorten the list of results, you can specify a time range, formatted as timestamps, by adding <code>StartTime</code> and <code>EndTime</code> parameters, and a <code>QueryStatus</code> value. Valid values for <code>QueryStatus</code> include <code>QUEUED</code>, <code>RUNNING</code>, <code>FINISHED</code>, <code>FAILED</code>, <code>TIMED_OUT</code>, or <code>CANCELLED</code>.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListQueries
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListQueriesResponse} Success
		 */
		ListQueries(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListQueriesRequest): Observable<ListQueriesResponse> {
			return this.http.post<ListQueriesResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListQueries?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags for the specified trails, event data stores, or channels in the current Region.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags
		 * @param {string} NextToken Pagination token
		 * @return {ListTagsResponse} Success
		 */
		ListTags(NextToken: string | null | undefined, requestBody: ListTagsRequest): Observable<ListTagsResponse> {
			return this.http.post<ListTagsResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists trails that are in the current account.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails
		 * @param {string} NextToken Pagination token
		 * @return {ListTrailsResponse} Success
		 */
		ListTrails(NextToken: string | null | undefined, requestBody: ListTrailsRequest): Observable<ListTrailsResponse> {
			return this.http.post<ListTrailsResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Looks up <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-management-events">management events</a> or <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-insights-events">CloudTrail Insights events</a> that are captured by CloudTrail. You can look up events that occurred in a Region within the last 90 days. Lookup supports the following attributes for management events:</p> <ul> <li> <p>Amazon Web Services access key</p> </li> <li> <p>Event ID</p> </li> <li> <p>Event name</p> </li> <li> <p>Event source</p> </li> <li> <p>Read only</p> </li> <li> <p>Resource name</p> </li> <li> <p>Resource type</p> </li> <li> <p>User name</p> </li> </ul> <p>Lookup supports the following attributes for Insights events:</p> <ul> <li> <p>Event ID</p> </li> <li> <p>Event name</p> </li> <li> <p>Event source</p> </li> </ul> <p>All attributes are optional. The default number of results returned is 50, with a maximum of 50 possible. The response includes a token that you can use to get the next page of results.</p> <important> <p>The rate of lookup requests is limited to two per second, per account, per Region. If this limit is exceeded, a throttling error occurs.</p> </important>
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {LookupEventsResponse} Success
		 */
		LookupEvents(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: LookupEventsRequest): Observable<LookupEventsResponse> {
			return this.http.post<LookupEventsResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Configures an event selector or advanced event selectors for your trail. Use event selectors or advanced event selectors to specify management and data event settings for your trail. If you want your trail to log Insights events, be sure the event selector enables logging of the Insights event types you want configured for your trail. For more information about logging Insights events, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-insights-events-with-cloudtrail.html">Logging Insights events for trails</a> in the <i>CloudTrail User Guide</i>. By default, trails created without specific event selectors are configured to log all read and write management events, and no data events.</p> <p>When an event occurs in your account, CloudTrail evaluates the event selectors or advanced event selectors in all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.</p> <p>Example</p> <ol> <li> <p>You create an event selector for a trail and specify that you want write-only events.</p> </li> <li> <p>The EC2 <code>GetConsoleOutput</code> and <code>RunInstances</code> API operations occur in your account.</p> </li> <li> <p>CloudTrail evaluates whether the events match your event selectors.</p> </li> <li> <p>The <code>RunInstances</code> is a write-only event and it matches your event selector. The trail logs the event.</p> </li> <li> <p>The <code>GetConsoleOutput</code> is a read-only event that doesn't match your event selector. The trail doesn't log the event. </p> </li> </ol> <p>The <code>PutEventSelectors</code> operation must be called from the Region in which the trail was created; otherwise, an <code>InvalidHomeRegionException</code> exception is thrown.</p> <p>You can configure up to five event selectors for each trail. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html">Logging management events</a>, <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events</a>, and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html">Quotas in CloudTrail</a> in the <i>CloudTrail User Guide</i>.</p> <p>You can add advanced event selectors, and conditions for your advanced event selectors, up to a maximum of 500 values for all conditions and selectors on a trail. You can use either <code>AdvancedEventSelectors</code> or <code>EventSelectors</code>, but not both. If you apply <code>AdvancedEventSelectors</code> to a trail, any existing <code>EventSelectors</code> are overwritten. For more information about advanced event selectors, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events</a> in the <i>CloudTrail User Guide</i>.</p>
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors
		 * @return {PutEventSelectorsResponse} Success
		 */
		PutEventSelectors(requestBody: PutEventSelectorsRequest): Observable<PutEventSelectorsResponse> {
			return this.http.post<PutEventSelectorsResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing trail. You also use <code>PutInsightSelectors</code> to turn off Insights event logging, by passing an empty list of insight types. The valid Insights event types in this release are <code>ApiErrorRateInsight</code> and <code>ApiCallRateInsight</code>.</p> <p>To log CloudTrail Insights events on API call volume, the trail must log <code>write</code> management events. To log CloudTrail Insights events on API error rate, the trail must log <code>read</code> or <code>write</code> management events. You can call <code>GetEventSelectors</code> on a trail to check whether the trail logs management events.</p>
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors
		 * @return {PutInsightSelectorsResponse} Success
		 */
		PutInsightSelectors(requestBody: PutInsightSelectorsRequest): Observable<PutInsightSelectorsResponse> {
			return this.http.post<PutInsightSelectorsResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Attaches a resource-based permission policy to a CloudTrail channel that is used for an integration with an event source outside of Amazon Web Services. For more information about resource-based policies, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/security_iam_resource-based-policy-examples.html">CloudTrail resource-based policy examples</a> in the <i>CloudTrail User Guide</i>.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutResourcePolicy
		 * @return {PutResourcePolicyResponse} Success
		 */
		PutResourcePolicy(requestBody: PutResourcePolicyRequest): Observable<PutResourcePolicyResponse> {
			return this.http.post<PutResourcePolicyResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Registers an organization’s member account as the CloudTrail delegated administrator.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RegisterOrganizationDelegatedAdmin
		 * @return {RegisterOrganizationDelegatedAdminResponse} Success
		 */
		RegisterOrganizationDelegatedAdmin(requestBody: RegisterOrganizationDelegatedAdminRequest): Observable<RegisterOrganizationDelegatedAdminResponse> {
			return this.http.post<RegisterOrganizationDelegatedAdminResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RegisterOrganizationDelegatedAdmin', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified tags from a trail, event data store, or channel.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags
		 * @return {RemoveTagsResponse} Success
		 */
		RemoveTags(requestBody: RemoveTagsRequest): Observable<RemoveTagsResponse> {
			return this.http.post<RemoveTagsResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Restores a deleted event data store specified by <code>EventDataStore</code>, which accepts an event data store ARN. You can only restore a deleted event data store within the seven-day wait period after deletion. Restoring an event data store can take several minutes, depending on the size of the event data store.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RestoreEventDataStore
		 * @return {RestoreEventDataStoreResponse} Success
		 */
		RestoreEventDataStore(requestBody: RestoreEventDataStoreRequest): Observable<RestoreEventDataStoreResponse> {
			return this.http.post<RestoreEventDataStoreResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RestoreEventDataStore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts the ingestion of live events on an event data store specified as either an ARN or the ID portion of the ARN. To start ingestion, the event data store <code>Status</code> must be <code>STOPPED_INGESTION</code> and the <code>eventCategory</code> must be <code>Management</code>, <code>Data</code>, or <code>ConfigurationItem</code>.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartEventDataStoreIngestion
		 * @return {StartEventDataStoreIngestionResponse} Success
		 */
		StartEventDataStoreIngestion(requestBody: StartEventDataStoreIngestionRequest): Observable<StartEventDataStoreIngestionResponse> {
			return this.http.post<StartEventDataStoreIngestionResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartEventDataStoreIngestion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Starts an import of logged trail events from a source S3 bucket to a destination event data store. By default, CloudTrail only imports events contained in the S3 bucket's <code>CloudTrail</code> prefix and the prefixes inside the <code>CloudTrail</code> prefix, and does not check prefixes for other Amazon Web Services services. If you want to import CloudTrail events contained in another prefix, you must include the prefix in the <code>S3LocationUri</code>. For more considerations about importing trail events, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-copy-trail-to-lake.html#cloudtrail-trail-copy-considerations">Considerations</a>. </p> <p> When you start a new import, the <code>Destinations</code> and <code>ImportSource</code> parameters are required. Before starting a new import, disable any access control lists (ACLs) attached to the source S3 bucket. For more information about disabling ACLs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of objects and disabling ACLs for your bucket</a>. </p> <p> When you retry an import, the <code>ImportID</code> parameter is required. </p> <note> <p> If the destination event data store is for an organization, you must use the management account to import trail events. You cannot use the delegated administrator account for the organization. </p> </note>
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartImport
		 * @return {StartImportResponse} Success
		 */
		StartImport(requestBody: StartImportRequest): Observable<StartImportResponse> {
			return this.http.post<StartImportResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartImport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts the recording of Amazon Web Services API calls and log file delivery for a trail. For a trail that is enabled in all Regions, this operation must be called from the Region in which the trail was created. This operation cannot be called on the shadow trails (replicated trails in other Regions) of a trail that is enabled in all Regions.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging
		 * @return {StartLoggingResponse} Success
		 */
		StartLogging(requestBody: StartLoggingRequest): Observable<StartLoggingResponse> {
			return this.http.post<StartLoggingResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts a CloudTrail Lake query. Use the <code>QueryStatement</code> parameter to provide your SQL query, enclosed in single quotation marks. Use the optional <code>DeliveryS3Uri</code> parameter to deliver the query results to an S3 bucket.</p> <p> <code>StartQuery</code> requires you specify either the <code>QueryStatement</code> parameter, or a <code>QueryAlias</code> and any <code>QueryParameters</code>. In the current release, the <code>QueryAlias</code> and <code>QueryParameters</code> parameters are used only for the queries that populate the CloudTrail Lake dashboards.</p>
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartQuery
		 * @return {StartQueryResponse} Success
		 */
		StartQuery(requestBody: StartQueryRequest): Observable<StartQueryResponse> {
			return this.http.post<StartQueryResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartQuery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops the ingestion of live events on an event data store specified as either an ARN or the ID portion of the ARN. To stop ingestion, the event data store <code>Status</code> must be <code>ENABLED</code> and the <code>eventCategory</code> must be <code>Management</code>, <code>Data</code>, or <code>ConfigurationItem</code>.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopEventDataStoreIngestion
		 * @return {StopEventDataStoreIngestionResponse} Success
		 */
		StopEventDataStoreIngestion(requestBody: StopEventDataStoreIngestionRequest): Observable<StopEventDataStoreIngestionResponse> {
			return this.http.post<StopEventDataStoreIngestionResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopEventDataStoreIngestion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops a specified import.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopImport
		 * @return {StopImportResponse} Success
		 */
		StopImport(requestBody: StopImportRequest): Observable<StopImportResponse> {
			return this.http.post<StopImportResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopImport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Suspends the recording of Amazon Web Services API calls and log file delivery for the specified trail. Under most circumstances, there is no need to use this action. You can update a trail without stopping it first. This action is the only way to stop recording. For a trail enabled in all Regions, this operation must be called from the Region in which the trail was created, or an <code>InvalidHomeRegionException</code> will occur. This operation cannot be called on the shadow trails (replicated trails in other Regions) of a trail enabled in all Regions.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging
		 * @return {StopLoggingResponse} Success
		 */
		StopLogging(requestBody: StopLoggingRequest): Observable<StopLoggingResponse> {
			return this.http.post<StopLoggingResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a channel specified by a required channel ARN or UUID.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateChannel
		 * @return {UpdateChannelResponse} Success
		 */
		UpdateChannel(requestBody: UpdateChannelRequest): Observable<UpdateChannelResponse> {
			return this.http.post<UpdateChannelResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateChannel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates an event data store. The required <code>EventDataStore</code> value is an ARN or the ID portion of the ARN. Other parameters are optional, but at least one optional parameter must be specified, or CloudTrail throws an error. <code>RetentionPeriod</code> is in days, and valid values are integers between 90 and 2557. By default, <code>TerminationProtection</code> is enabled.</p> <p>For event data stores for CloudTrail events, <code>AdvancedEventSelectors</code> includes or excludes management and data events in your event data store. For more information about <code>AdvancedEventSelectors</code>, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_AdvancedEventSelector.html">AdvancedEventSelectors</a>.</p> <p> For event data stores for Config configuration items, Audit Manager evidence, or non-Amazon Web Services events, <code>AdvancedEventSelectors</code> includes events of that type in your event data store.</p>
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateEventDataStore
		 * @return {UpdateEventDataStoreResponse} Success
		 */
		UpdateEventDataStore(requestBody: UpdateEventDataStoreRequest): Observable<UpdateEventDataStoreResponse> {
			return this.http.post<UpdateEventDataStoreResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateEventDataStore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates trail settings that control what events you are logging, and how to handle log files. Changes to a trail do not require stopping the CloudTrail service. Use this action to designate an existing bucket for log delivery. If the existing bucket has previously been a target for CloudTrail log files, an IAM policy exists for the bucket. <code>UpdateTrail</code> must be called from the Region in which the trail was created; otherwise, an <code>InvalidHomeRegionException</code> is thrown.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail
		 * @return {UpdateTrailResponse} Success
		 */
		UpdateTrail(requestBody: UpdateTrailRequest): Observable<UpdateTrailResponse> {
			return this.http.post<UpdateTrailResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AddTagsX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags' }

	export enum CancelQueryX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CancelQuery' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CancelQuery' }

	export enum CreateChannelX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateChannel' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateChannel' }

	export enum CreateEventDataStoreX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateEventDataStore' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateEventDataStore' }

	export enum CreateTrailX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail' }

	export enum DeleteChannelX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteChannel' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteChannel' }

	export enum DeleteEventDataStoreX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteEventDataStore' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteEventDataStore' }

	export enum DeleteResourcePolicyX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteResourcePolicy' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteResourcePolicy' }

	export enum DeleteTrailX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail' }

	export enum DeregisterOrganizationDelegatedAdminX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeregisterOrganizationDelegatedAdmin' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeregisterOrganizationDelegatedAdmin' }

	export enum DescribeQueryX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeQuery' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeQuery' }

	export enum DescribeTrailsX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails' }

	export enum GetChannelX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetChannel' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetChannel' }

	export enum GetEventDataStoreX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventDataStore' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventDataStore' }

	export enum GetEventSelectorsX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors' }

	export enum GetImportX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetImport' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetImport' }

	export enum GetInsightSelectorsX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors' }

	export enum GetQueryResultsX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetQueryResults' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetQueryResults' }

	export enum GetResourcePolicyX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetResourcePolicy' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetResourcePolicy' }

	export enum GetTrailX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail' }

	export enum GetTrailStatusX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus' }

	export enum ListChannelsX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListChannels' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListChannels' }

	export enum ListEventDataStoresX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListEventDataStores' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListEventDataStores' }

	export enum ListImportFailuresX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImportFailures' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImportFailures' }

	export enum ListImportsX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImports' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImports' }

	export enum ListPublicKeysX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys' }

	export enum ListQueriesX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListQueries' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListQueries' }

	export enum ListTagsX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags' }

	export enum ListTrailsX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails' }

	export enum LookupEventsX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents' }

	export enum PutEventSelectorsX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors' }

	export enum PutInsightSelectorsX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors' }

	export enum PutResourcePolicyX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutResourcePolicy' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutResourcePolicy' }

	export enum RegisterOrganizationDelegatedAdminX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RegisterOrganizationDelegatedAdmin' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RegisterOrganizationDelegatedAdmin' }

	export enum RemoveTagsX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags' }

	export enum RestoreEventDataStoreX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RestoreEventDataStore' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RestoreEventDataStore' }

	export enum StartEventDataStoreIngestionX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartEventDataStoreIngestion' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartEventDataStoreIngestion' }

	export enum StartImportX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartImport' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartImport' }

	export enum StartLoggingX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging' }

	export enum StartQueryX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartQuery' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartQuery' }

	export enum StopEventDataStoreIngestionX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopEventDataStoreIngestion' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopEventDataStoreIngestion' }

	export enum StopImportX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopImport' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopImport' }

	export enum StopLoggingX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging' }

	export enum UpdateChannelX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateChannel' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateChannel' }

	export enum UpdateEventDataStoreX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateEventDataStore' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateEventDataStore' }

	export enum UpdateTrailX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail' = 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail' }

}

