import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The output for the BulkPublish operation. */
	export interface BulkPublishResponse {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId?: string | null;
	}

	/** The output for the BulkPublish operation. */
	export interface BulkPublishResponseFormProperties {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId: FormControl<string | null | undefined>,
	}
	export function CreateBulkPublishResponseFormGroup() {
		return new FormGroup<BulkPublishResponseFormProperties>({
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(55), Validators.minLength(1), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
		});

	}


	/** Thrown when a user is not authorized to access the requested resource. */
	export interface NotAuthorizedException {

		/** Required */
		message: string;
	}

	/** Thrown when a user is not authorized to access the requested resource. */
	export interface NotAuthorizedExceptionFormProperties {

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateNotAuthorizedExceptionFormGroup() {
		return new FormGroup<NotAuthorizedExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Thrown when a request parameter does not comply with the associated constraints. */
	export interface InvalidParameterException {

		/** Required */
		message: string;
	}

	/** Thrown when a request parameter does not comply with the associated constraints. */
	export interface InvalidParameterExceptionFormProperties {

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidParameterExceptionFormGroup() {
		return new FormGroup<InvalidParameterExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Thrown if the resource doesn't exist. */
	export interface ResourceNotFoundException {

		/** Required */
		message: string;
	}

	/** Thrown if the resource doesn't exist. */
	export interface ResourceNotFoundExceptionFormProperties {

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Indicates an internal service error. */
	export interface InternalErrorException {

		/** Required */
		message: string;
	}

	/** Indicates an internal service error. */
	export interface InternalErrorExceptionFormProperties {

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateInternalErrorExceptionFormGroup() {
		return new FormGroup<InternalErrorExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An exception thrown when there is an IN_PROGRESS bulk publish operation for the given identity pool. */
	export interface DuplicateRequestException {

		/** Required */
		message: string;
	}

	/** An exception thrown when there is an IN_PROGRESS bulk publish operation for the given identity pool. */
	export interface DuplicateRequestExceptionFormProperties {

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateDuplicateRequestExceptionFormGroup() {
		return new FormGroup<DuplicateRequestExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An exception thrown when a bulk publish operation is requested less than 24 hours after a previous bulk publish operation completed successfully. */
	export interface AlreadyStreamedException {

		/** Required */
		message: string;
	}

	/** An exception thrown when a bulk publish operation is requested less than 24 hours after a previous bulk publish operation completed successfully. */
	export interface AlreadyStreamedExceptionFormProperties {

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateAlreadyStreamedExceptionFormGroup() {
		return new FormGroup<AlreadyStreamedExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Response to a successful DeleteDataset request. */
	export interface DeleteDatasetResponse {

		/** A collection of data for an identity pool. An identity pool can have multiple datasets. A dataset is per identity and can be general or associated with a particular entity in an application (like a saved game). Datasets are automatically created if they don't exist. Data is synced by dataset, and a dataset can hold up to 1MB of key-value pairs. */
		Dataset?: Dataset;
	}

	/** Response to a successful DeleteDataset request. */
	export interface DeleteDatasetResponseFormProperties {
	}
	export function CreateDeleteDatasetResponseFormGroup() {
		return new FormGroup<DeleteDatasetResponseFormProperties>({
		});

	}


	/** A collection of data for an identity pool. An identity pool can have multiple datasets. A dataset is per identity and can be general or associated with a particular entity in an application (like a saved game). Datasets are automatically created if they don't exist. Data is synced by dataset, and a dataset can hold up to 1MB of key-value pairs. */
	export interface Dataset {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		DatasetName?: string | null;
		CreationDate?: Date | null;
		LastModifiedDate?: Date | null;
		LastModifiedBy?: string | null;
		DataStorage?: number | null;
		NumRecords?: number | null;
	}

	/** A collection of data for an identity pool. An identity pool can have multiple datasets. A dataset is per identity and can be general or associated with a particular entity in an application (like a saved game). Datasets are automatically created if they don't exist. Data is synced by dataset, and a dataset can hold up to 1MB of key-value pairs. */
	export interface DatasetFormProperties {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		DatasetName: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		LastModifiedBy: FormControl<string | null | undefined>,
		DataStorage: FormControl<number | null | undefined>,
		NumRecords: FormControl<number | null | undefined>,
	}
	export function CreateDatasetFormGroup() {
		return new FormGroup<DatasetFormProperties>({
			IdentityId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(55), Validators.minLength(1), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
			DatasetName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.:-]+')]),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			LastModifiedBy: new FormControl<string | null | undefined>(undefined),
			DataStorage: new FormControl<number | null | undefined>(undefined),
			NumRecords: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Thrown if the request is throttled. */
	export interface TooManyRequestsException {

		/** Required */
		message: string;
	}

	/** Thrown if the request is throttled. */
	export interface TooManyRequestsExceptionFormProperties {

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateTooManyRequestsExceptionFormGroup() {
		return new FormGroup<TooManyRequestsExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Thrown if an update can't be applied because the resource was changed by another call and this would result in a conflict. */
	export interface ResourceConflictException {

		/** Required */
		message: string;
	}

	/** Thrown if an update can't be applied because the resource was changed by another call and this would result in a conflict. */
	export interface ResourceConflictExceptionFormProperties {

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateResourceConflictExceptionFormGroup() {
		return new FormGroup<ResourceConflictExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Response to a successful DescribeDataset request. */
	export interface DescribeDatasetResponse {

		/** A collection of data for an identity pool. An identity pool can have multiple datasets. A dataset is per identity and can be general or associated with a particular entity in an application (like a saved game). Datasets are automatically created if they don't exist. Data is synced by dataset, and a dataset can hold up to 1MB of key-value pairs. */
		Dataset?: Dataset;
	}

	/** Response to a successful DescribeDataset request. */
	export interface DescribeDatasetResponseFormProperties {
	}
	export function CreateDescribeDatasetResponseFormGroup() {
		return new FormGroup<DescribeDatasetResponseFormProperties>({
		});

	}


	/** Response to a successful DescribeIdentityPoolUsage request. */
	export interface DescribeIdentityPoolUsageResponse {

		/** Usage information for the identity pool. */
		IdentityPoolUsage?: IdentityPoolUsage;
	}

	/** Response to a successful DescribeIdentityPoolUsage request. */
	export interface DescribeIdentityPoolUsageResponseFormProperties {
	}
	export function CreateDescribeIdentityPoolUsageResponseFormGroup() {
		return new FormGroup<DescribeIdentityPoolUsageResponseFormProperties>({
		});

	}


	/** Usage information for the identity pool. */
	export interface IdentityPoolUsage {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId?: string | null;
		SyncSessionsCount?: number | null;
		DataStorage?: number | null;
		LastModifiedDate?: Date | null;
	}

	/** Usage information for the identity pool. */
	export interface IdentityPoolUsageFormProperties {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId: FormControl<string | null | undefined>,
		SyncSessionsCount: FormControl<number | null | undefined>,
		DataStorage: FormControl<number | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
	}
	export function CreateIdentityPoolUsageFormGroup() {
		return new FormGroup<IdentityPoolUsageFormProperties>({
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(55), Validators.minLength(1), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
			SyncSessionsCount: new FormControl<number | null | undefined>(undefined),
			DataStorage: new FormControl<number | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The response to a successful DescribeIdentityUsage request. */
	export interface DescribeIdentityUsageResponse {

		/** Usage information for the identity. */
		IdentityUsage?: IdentityUsage;
	}

	/** The response to a successful DescribeIdentityUsage request. */
	export interface DescribeIdentityUsageResponseFormProperties {
	}
	export function CreateDescribeIdentityUsageResponseFormGroup() {
		return new FormGroup<DescribeIdentityUsageResponseFormProperties>({
		});

	}


	/** Usage information for the identity. */
	export interface IdentityUsage {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityId?: string | null;

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId?: string | null;
		LastModifiedDate?: Date | null;
		DatasetCount?: number | null;
		DataStorage?: number | null;
	}

	/** Usage information for the identity. */
	export interface IdentityUsageFormProperties {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityId: FormControl<string | null | undefined>,

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		DatasetCount: FormControl<number | null | undefined>,
		DataStorage: FormControl<number | null | undefined>,
	}
	export function CreateIdentityUsageFormGroup() {
		return new FormGroup<IdentityUsageFormProperties>({
			IdentityId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(55), Validators.minLength(1), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(55), Validators.minLength(1), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			DatasetCount: new FormControl<number | null | undefined>(undefined),
			DataStorage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The output for the GetBulkPublishDetails operation. */
	export interface GetBulkPublishDetailsResponse {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId?: string | null;
		BulkPublishStartTime?: Date | null;
		BulkPublishCompleteTime?: Date | null;
		BulkPublishStatus?: GetBulkPublishDetailsResponseBulkPublishStatus | null;
		FailureMessage?: string | null;
	}

	/** The output for the GetBulkPublishDetails operation. */
	export interface GetBulkPublishDetailsResponseFormProperties {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId: FormControl<string | null | undefined>,
		BulkPublishStartTime: FormControl<Date | null | undefined>,
		BulkPublishCompleteTime: FormControl<Date | null | undefined>,
		BulkPublishStatus: FormControl<GetBulkPublishDetailsResponseBulkPublishStatus | null | undefined>,
		FailureMessage: FormControl<string | null | undefined>,
	}
	export function CreateGetBulkPublishDetailsResponseFormGroup() {
		return new FormGroup<GetBulkPublishDetailsResponseFormProperties>({
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(55), Validators.minLength(1), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
			BulkPublishStartTime: new FormControl<Date | null | undefined>(undefined),
			BulkPublishCompleteTime: new FormControl<Date | null | undefined>(undefined),
			BulkPublishStatus: new FormControl<GetBulkPublishDetailsResponseBulkPublishStatus | null | undefined>(undefined),
			FailureMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetBulkPublishDetailsResponseBulkPublishStatus { NOT_STARTED = 0, IN_PROGRESS = 1, FAILED = 2, SUCCEEDED = 3 }


	/** The response from the GetCognitoEvents request */
	export interface GetCognitoEventsResponse {
		Events?: Events;
	}

	/** The response from the GetCognitoEvents request */
	export interface GetCognitoEventsResponseFormProperties {
	}
	export function CreateGetCognitoEventsResponseFormGroup() {
		return new FormGroup<GetCognitoEventsResponseFormProperties>({
		});

	}

	export interface Events {
	}
	export interface EventsFormProperties {
	}
	export function CreateEventsFormGroup() {
		return new FormGroup<EventsFormProperties>({
		});

	}


	/** The output for the GetIdentityPoolConfiguration operation. */
	export interface GetIdentityPoolConfigurationResponse {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId?: string | null;

		/** Configuration options to be applied to the identity pool. */
		PushSync?: PushSync;

		/** Configuration options for configure Cognito streams. */
		CognitoStreams?: CognitoStreams;
	}

	/** The output for the GetIdentityPoolConfiguration operation. */
	export interface GetIdentityPoolConfigurationResponseFormProperties {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId: FormControl<string | null | undefined>,
	}
	export function CreateGetIdentityPoolConfigurationResponseFormGroup() {
		return new FormGroup<GetIdentityPoolConfigurationResponseFormProperties>({
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(55), Validators.minLength(1), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
		});

	}


	/** Configuration options to be applied to the identity pool. */
	export interface PushSync {
		ApplicationArns?: Array<string>;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn?: string | null;
	}

	/** Configuration options to be applied to the identity pool. */
	export interface PushSyncFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreatePushSyncFormGroup() {
		return new FormGroup<PushSyncFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('arn:aws:iam::\d+:role/.*')]),
		});

	}


	/** Configuration options for configure Cognito streams. */
	export interface CognitoStreams {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		StreamName?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn?: string | null;
		StreamingStatus?: CognitoStreamsStreamingStatus | null;
	}

	/** Configuration options for configure Cognito streams. */
	export interface CognitoStreamsFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		StreamName: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,
		StreamingStatus: FormControl<CognitoStreamsStreamingStatus | null | undefined>,
	}
	export function CreateCognitoStreamsFormGroup() {
		return new FormGroup<CognitoStreamsFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('arn:aws:iam::\d+:role/.*')]),
			StreamingStatus: new FormControl<CognitoStreamsStreamingStatus | null | undefined>(undefined),
		});

	}

	export enum CognitoStreamsStreamingStatus { ENABLED = 0, DISABLED = 1 }


	/** Returned for a successful ListDatasets request. */
	export interface ListDatasetsResponse {
		Datasets?: Array<Dataset>;
		Count?: number | null;
		NextToken?: string | null;
	}

	/** Returned for a successful ListDatasets request. */
	export interface ListDatasetsResponseFormProperties {
		Count: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatasetsResponseFormGroup() {
		return new FormGroup<ListDatasetsResponseFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returned for a successful ListIdentityPoolUsage request. */
	export interface ListIdentityPoolUsageResponse {
		IdentityPoolUsages?: Array<IdentityPoolUsage>;
		MaxResults?: number | null;
		Count?: number | null;
		NextToken?: string | null;
	}

	/** Returned for a successful ListIdentityPoolUsage request. */
	export interface ListIdentityPoolUsageResponseFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		Count: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIdentityPoolUsageResponseFormGroup() {
		return new FormGroup<ListIdentityPoolUsageResponseFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			Count: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returned for a successful ListRecordsRequest. */
	export interface ListRecordsResponse {
		Records?: Array<Record>;
		NextToken?: string | null;
		Count?: number | null;
		DatasetSyncCount?: number | null;
		LastModifiedBy?: string | null;
		MergedDatasetNames?: Array<string>;
		DatasetExists?: boolean | null;
		DatasetDeletedAfterRequestedSyncCount?: boolean | null;
		SyncSessionToken?: string | null;
	}

	/** Returned for a successful ListRecordsRequest. */
	export interface ListRecordsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		Count: FormControl<number | null | undefined>,
		DatasetSyncCount: FormControl<number | null | undefined>,
		LastModifiedBy: FormControl<string | null | undefined>,
		DatasetExists: FormControl<boolean | null | undefined>,
		DatasetDeletedAfterRequestedSyncCount: FormControl<boolean | null | undefined>,
		SyncSessionToken: FormControl<string | null | undefined>,
	}
	export function CreateListRecordsResponseFormGroup() {
		return new FormGroup<ListRecordsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			Count: new FormControl<number | null | undefined>(undefined),
			DatasetSyncCount: new FormControl<number | null | undefined>(undefined),
			LastModifiedBy: new FormControl<string | null | undefined>(undefined),
			DatasetExists: new FormControl<boolean | null | undefined>(undefined),
			DatasetDeletedAfterRequestedSyncCount: new FormControl<boolean | null | undefined>(undefined),
			SyncSessionToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The basic data structure of a dataset. */
	export interface Record {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Key?: string | null;

		/** Max length: 1048575 */
		Value?: string | null;
		SyncCount?: number | null;
		LastModifiedDate?: Date | null;
		LastModifiedBy?: string | null;
		DeviceLastModifiedDate?: Date | null;
	}

	/** The basic data structure of a dataset. */
	export interface RecordFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,

		/** Max length: 1048575 */
		Value: FormControl<string | null | undefined>,
		SyncCount: FormControl<number | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		LastModifiedBy: FormControl<string | null | undefined>,
		DeviceLastModifiedDate: FormControl<Date | null | undefined>,
	}
	export function CreateRecordFormGroup() {
		return new FormGroup<RecordFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1048575)]),
			SyncCount: new FormControl<number | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			LastModifiedBy: new FormControl<string | null | undefined>(undefined),
			DeviceLastModifiedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Response to a RegisterDevice request. */
	export interface RegisterDeviceResponse {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		DeviceId?: string | null;
	}

	/** Response to a RegisterDevice request. */
	export interface RegisterDeviceResponseFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		DeviceId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterDeviceResponseFormGroup() {
		return new FormGroup<RegisterDeviceResponseFormProperties>({
			DeviceId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
		});

	}

	export interface InvalidConfigurationException {

		/** Required */
		message: string;
	}
	export interface InvalidConfigurationExceptionFormProperties {

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidConfigurationExceptionFormGroup() {
		return new FormGroup<InvalidConfigurationExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The output for the SetIdentityPoolConfiguration operation */
	export interface SetIdentityPoolConfigurationResponse {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId?: string | null;

		/** Configuration options to be applied to the identity pool. */
		PushSync?: PushSync;

		/** Configuration options for configure Cognito streams. */
		CognitoStreams?: CognitoStreams;
	}

	/** The output for the SetIdentityPoolConfiguration operation */
	export interface SetIdentityPoolConfigurationResponseFormProperties {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId: FormControl<string | null | undefined>,
	}
	export function CreateSetIdentityPoolConfigurationResponseFormGroup() {
		return new FormGroup<SetIdentityPoolConfigurationResponseFormProperties>({
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(55), Validators.minLength(1), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
		});

	}

	export enum StreamingStatus { ENABLED = 0, DISABLED = 1 }


	/** Thrown if there are parallel requests to modify a resource. */
	export interface ConcurrentModificationException {

		/** Required */
		message: string;
	}

	/** Thrown if there are parallel requests to modify a resource. */
	export interface ConcurrentModificationExceptionFormProperties {

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateConcurrentModificationExceptionFormGroup() {
		return new FormGroup<ConcurrentModificationExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Response to a SubscribeToDataset request. */
	export interface SubscribeToDatasetResponse {
	}

	/** Response to a SubscribeToDataset request. */
	export interface SubscribeToDatasetResponseFormProperties {
	}
	export function CreateSubscribeToDatasetResponseFormGroup() {
		return new FormGroup<SubscribeToDatasetResponseFormProperties>({
		});

	}


	/** Response to an UnsubscribeFromDataset request. */
	export interface UnsubscribeFromDatasetResponse {
	}

	/** Response to an UnsubscribeFromDataset request. */
	export interface UnsubscribeFromDatasetResponseFormProperties {
	}
	export function CreateUnsubscribeFromDatasetResponseFormGroup() {
		return new FormGroup<UnsubscribeFromDatasetResponseFormProperties>({
		});

	}


	/** Returned for a successful UpdateRecordsRequest. */
	export interface UpdateRecordsResponse {
		Records?: Array<Record>;
	}

	/** Returned for a successful UpdateRecordsRequest. */
	export interface UpdateRecordsResponseFormProperties {
	}
	export function CreateUpdateRecordsResponseFormGroup() {
		return new FormGroup<UpdateRecordsResponseFormProperties>({
		});

	}


	/** An update operation for a record. */
	export interface RecordPatch {

		/** Required */
		Op: RecordPatchOp;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		Key: string;

		/** Max length: 1048575 */
		Value?: string | null;

		/** Required */
		SyncCount: number;
		DeviceLastModifiedDate?: Date | null;
	}

	/** An update operation for a record. */
	export interface RecordPatchFormProperties {

		/** Required */
		Op: FormControl<RecordPatchOp | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,

		/** Max length: 1048575 */
		Value: FormControl<string | null | undefined>,

		/** Required */
		SyncCount: FormControl<number | null | undefined>,
		DeviceLastModifiedDate: FormControl<Date | null | undefined>,
	}
	export function CreateRecordPatchFormGroup() {
		return new FormGroup<RecordPatchFormProperties>({
			Op: new FormControl<RecordPatchOp | null | undefined>(undefined, [Validators.required]),
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1048575)]),
			SyncCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			DeviceLastModifiedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum RecordPatchOp { replace = 0, remove = 1 }


	/** Thrown when the limit on the number of objects or operations has been exceeded. */
	export interface LimitExceededException {

		/** Required */
		message: string;
	}

	/** Thrown when the limit on the number of objects or operations has been exceeded. */
	export interface LimitExceededExceptionFormProperties {

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The AWS Lambda function returned invalid output or an exception. */
	export interface InvalidLambdaFunctionOutputException {

		/** Required */
		message: string;
	}

	/** The AWS Lambda function returned invalid output or an exception. */
	export interface InvalidLambdaFunctionOutputExceptionFormProperties {

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidLambdaFunctionOutputExceptionFormGroup() {
		return new FormGroup<InvalidLambdaFunctionOutputExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** AWS Lambda throttled your account, please contact AWS Support */
	export interface LambdaThrottledException {

		/** Required */
		message: string;
	}

	/** AWS Lambda throttled your account, please contact AWS Support */
	export interface LambdaThrottledExceptionFormProperties {

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateLambdaThrottledExceptionFormGroup() {
		return new FormGroup<LambdaThrottledExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The input for the BulkPublish operation. */
	export interface BulkPublishRequest {
	}

	/** The input for the BulkPublish operation. */
	export interface BulkPublishRequestFormProperties {
	}
	export function CreateBulkPublishRequestFormGroup() {
		return new FormGroup<BulkPublishRequestFormProperties>({
		});

	}

	export enum BulkPublishStatus { NOT_STARTED = 0, IN_PROGRESS = 1, FAILED = 2, SUCCEEDED = 3 }


	/** A request to delete the specific dataset. */
	export interface DeleteDatasetRequest {
	}

	/** A request to delete the specific dataset. */
	export interface DeleteDatasetRequestFormProperties {
	}
	export function CreateDeleteDatasetRequestFormGroup() {
		return new FormGroup<DeleteDatasetRequestFormProperties>({
		});

	}


	/** A request for meta data about a dataset (creation date, number of records, size) by owner and dataset name. */
	export interface DescribeDatasetRequest {
	}

	/** A request for meta data about a dataset (creation date, number of records, size) by owner and dataset name. */
	export interface DescribeDatasetRequestFormProperties {
	}
	export function CreateDescribeDatasetRequestFormGroup() {
		return new FormGroup<DescribeDatasetRequestFormProperties>({
		});

	}


	/** A request for usage information about the identity pool. */
	export interface DescribeIdentityPoolUsageRequest {
	}

	/** A request for usage information about the identity pool. */
	export interface DescribeIdentityPoolUsageRequestFormProperties {
	}
	export function CreateDescribeIdentityPoolUsageRequestFormGroup() {
		return new FormGroup<DescribeIdentityPoolUsageRequestFormProperties>({
		});

	}


	/** A request for information about the usage of an identity pool. */
	export interface DescribeIdentityUsageRequest {
	}

	/** A request for information about the usage of an identity pool. */
	export interface DescribeIdentityUsageRequestFormProperties {
	}
	export function CreateDescribeIdentityUsageRequestFormGroup() {
		return new FormGroup<DescribeIdentityUsageRequestFormProperties>({
		});

	}


	/** The input for the GetBulkPublishDetails operation. */
	export interface GetBulkPublishDetailsRequest {
	}

	/** The input for the GetBulkPublishDetails operation. */
	export interface GetBulkPublishDetailsRequestFormProperties {
	}
	export function CreateGetBulkPublishDetailsRequestFormGroup() {
		return new FormGroup<GetBulkPublishDetailsRequestFormProperties>({
		});

	}


	/** A request for a list of the configured Cognito Events */
	export interface GetCognitoEventsRequest {
	}

	/** A request for a list of the configured Cognito Events */
	export interface GetCognitoEventsRequestFormProperties {
	}
	export function CreateGetCognitoEventsRequestFormGroup() {
		return new FormGroup<GetCognitoEventsRequestFormProperties>({
		});

	}


	/** The input for the GetIdentityPoolConfiguration operation. */
	export interface GetIdentityPoolConfigurationRequest {
	}

	/** The input for the GetIdentityPoolConfiguration operation. */
	export interface GetIdentityPoolConfigurationRequestFormProperties {
	}
	export function CreateGetIdentityPoolConfigurationRequestFormGroup() {
		return new FormGroup<GetIdentityPoolConfigurationRequestFormProperties>({
		});

	}


	/** Request for a list of datasets for an identity. */
	export interface ListDatasetsRequest {
	}

	/** Request for a list of datasets for an identity. */
	export interface ListDatasetsRequestFormProperties {
	}
	export function CreateListDatasetsRequestFormGroup() {
		return new FormGroup<ListDatasetsRequestFormProperties>({
		});

	}


	/** A request for usage information on an identity pool. */
	export interface ListIdentityPoolUsageRequest {
	}

	/** A request for usage information on an identity pool. */
	export interface ListIdentityPoolUsageRequestFormProperties {
	}
	export function CreateListIdentityPoolUsageRequestFormGroup() {
		return new FormGroup<ListIdentityPoolUsageRequestFormProperties>({
		});

	}


	/** A request for a list of records. */
	export interface ListRecordsRequest {
	}

	/** A request for a list of records. */
	export interface ListRecordsRequestFormProperties {
	}
	export function CreateListRecordsRequestFormGroup() {
		return new FormGroup<ListRecordsRequestFormProperties>({
		});

	}

	export enum Operation { replace = 0, remove = 1 }

	export enum Platform { APNS = 0, APNS_SANDBOX = 1, GCM = 2, ADM = 3 }


	/** A request to RegisterDevice. */
	export interface RegisterDeviceRequest {

		/** Required */
		Platform: Platform;

		/** Required */
		Token: string;
	}

	/** A request to RegisterDevice. */
	export interface RegisterDeviceRequestFormProperties {

		/** Required */
		Platform: FormControl<Platform | null | undefined>,

		/** Required */
		Token: FormControl<string | null | undefined>,
	}
	export function CreateRegisterDeviceRequestFormGroup() {
		return new FormGroup<RegisterDeviceRequestFormProperties>({
			Platform: new FormControl<Platform | null | undefined>(undefined, [Validators.required]),
			Token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A request to configure Cognito Events"</p>" */
	export interface SetCognitoEventsRequest {

		/** Required */
		Events: Events;
	}

	/** <p>A request to configure Cognito Events"</p>" */
	export interface SetCognitoEventsRequestFormProperties {
	}
	export function CreateSetCognitoEventsRequestFormGroup() {
		return new FormGroup<SetCognitoEventsRequestFormProperties>({
		});

	}


	/** The input for the SetIdentityPoolConfiguration operation. */
	export interface SetIdentityPoolConfigurationRequest {

		/** Configuration options to be applied to the identity pool. */
		PushSync?: PushSync;

		/** Configuration options for configure Cognito streams. */
		CognitoStreams?: CognitoStreams;
	}

	/** The input for the SetIdentityPoolConfiguration operation. */
	export interface SetIdentityPoolConfigurationRequestFormProperties {
	}
	export function CreateSetIdentityPoolConfigurationRequestFormGroup() {
		return new FormGroup<SetIdentityPoolConfigurationRequestFormProperties>({
		});

	}


	/** A request to SubscribeToDatasetRequest. */
	export interface SubscribeToDatasetRequest {
	}

	/** A request to SubscribeToDatasetRequest. */
	export interface SubscribeToDatasetRequestFormProperties {
	}
	export function CreateSubscribeToDatasetRequestFormGroup() {
		return new FormGroup<SubscribeToDatasetRequestFormProperties>({
		});

	}


	/** A request to UnsubscribeFromDataset. */
	export interface UnsubscribeFromDatasetRequest {
	}

	/** A request to UnsubscribeFromDataset. */
	export interface UnsubscribeFromDatasetRequestFormProperties {
	}
	export function CreateUnsubscribeFromDatasetRequestFormGroup() {
		return new FormGroup<UnsubscribeFromDatasetRequestFormProperties>({
		});

	}


	/** A request to post updates to records or add and delete records for a dataset and user. */
	export interface UpdateRecordsRequest {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		DeviceId?: string | null;
		RecordPatches?: Array<RecordPatch>;

		/** Required */
		SyncSessionToken: string;
	}

	/** A request to post updates to records or add and delete records for a dataset and user. */
	export interface UpdateRecordsRequestFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		DeviceId: FormControl<string | null | undefined>,

		/** Required */
		SyncSessionToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRecordsRequestFormGroup() {
		return new FormGroup<UpdateRecordsRequestFormProperties>({
			DeviceId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
			SyncSessionToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Initiates a bulk publish of all existing datasets for an Identity Pool to the configured stream. Customers are limited to one successful bulk publish per 24 hours. Bulk publish is an asynchronous request, customers can see the status of the request via the GetBulkPublishDetails operation.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
		 * Post identitypools/{IdentityPoolId}/bulkpublish
		 * @param {string} IdentityPoolId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
		 * @return {BulkPublishResponse} Success
		 */
		BulkPublish(IdentityPoolId: string): Observable<BulkPublishResponse> {
			return this.http.post<BulkPublishResponse>(this.baseUri + 'identitypools/' + (IdentityPoolId == null ? '' : encodeURIComponent(IdentityPoolId)) + '/bulkpublish', null, {});
		}

		/**
		 * <p>Deletes the specific dataset. The dataset will be deleted permanently, and the action can't be undone. Datasets that this dataset was merged with will no longer report the merge. Any subsequent operation on this dataset will result in a ResourceNotFoundException.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>
		 * Delete identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}
		 * @param {string} IdentityPoolId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
		 * @param {string} IdentityId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
		 * @param {string} DatasetName A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).
		 * @return {DeleteDatasetResponse} Success
		 */
		DeleteDataset(IdentityPoolId: string, IdentityId: string, DatasetName: string): Observable<DeleteDatasetResponse> {
			return this.http.delete<DeleteDatasetResponse>(this.baseUri + 'identitypools/' + (IdentityPoolId == null ? '' : encodeURIComponent(IdentityPoolId)) + '/identities/' + (IdentityId == null ? '' : encodeURIComponent(IdentityId)) + '/datasets/' + (DatasetName == null ? '' : encodeURIComponent(DatasetName)), {});
		}

		/**
		 * <p>Gets meta data about a dataset by identity and dataset name. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.</p>
		 * Get identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}
		 * @param {string} IdentityPoolId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
		 * @param {string} IdentityId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
		 * @param {string} DatasetName A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).
		 * @return {DescribeDatasetResponse} Success
		 */
		DescribeDataset(IdentityPoolId: string, IdentityId: string, DatasetName: string): Observable<DescribeDatasetResponse> {
			return this.http.get<DescribeDatasetResponse>(this.baseUri + 'identitypools/' + (IdentityPoolId == null ? '' : encodeURIComponent(IdentityPoolId)) + '/identities/' + (IdentityId == null ? '' : encodeURIComponent(IdentityId)) + '/datasets/' + (DatasetName == null ? '' : encodeURIComponent(DatasetName)), {});
		}

		/**
		 * <p>Posts updates to records and adds and deletes records for a dataset and user.</p> <p>The sync count in the record patch is your last known sync count for that record. The server will reject an UpdateRecords request with a ResourceConflictException if you try to patch a record with a new value but a stale sync count.</p> <p>For example, if the sync count on the server is 5 for a key called highScore and you try and submit a new highScore with sync count of 4, the request will be rejected. To obtain the current sync count for a record, call ListRecords. On a successful update of the record, the response returns the new sync count for that record. You should present that sync count the next time you try to update that same record. When the record does not exist, specify the sync count as 0.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>
		 * Post identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}
		 * @param {string} IdentityPoolId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
		 * @param {string} IdentityId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
		 * @param {string} DatasetName A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).
		 * @return {UpdateRecordsResponse} Success
		 */
		UpdateRecords(IdentityPoolId: string, IdentityId: string, DatasetName: string, requestBody: UpdateRecordsPostBody): Observable<UpdateRecordsResponse> {
			return this.http.post<UpdateRecordsResponse>(this.baseUri + 'identitypools/' + (IdentityPoolId == null ? '' : encodeURIComponent(IdentityPoolId)) + '/identities/' + (IdentityId == null ? '' : encodeURIComponent(IdentityId)) + '/datasets/' + (DatasetName == null ? '' : encodeURIComponent(DatasetName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets usage details (for example, data storage) about a particular identity pool.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
		 * Get identitypools/{IdentityPoolId}
		 * @param {string} IdentityPoolId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
		 * @return {DescribeIdentityPoolUsageResponse} Success
		 */
		DescribeIdentityPoolUsage(IdentityPoolId: string): Observable<DescribeIdentityPoolUsageResponse> {
			return this.http.get<DescribeIdentityPoolUsageResponse>(this.baseUri + 'identitypools/' + (IdentityPoolId == null ? '' : encodeURIComponent(IdentityPoolId)), {});
		}

		/**
		 * <p>Gets usage information for an identity, including number of datasets and data usage.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>
		 * Get identitypools/{IdentityPoolId}/identities/{IdentityId}
		 * @param {string} IdentityPoolId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
		 * @param {string} IdentityId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
		 * @return {DescribeIdentityUsageResponse} Success
		 */
		DescribeIdentityUsage(IdentityPoolId: string, IdentityId: string): Observable<DescribeIdentityUsageResponse> {
			return this.http.get<DescribeIdentityUsageResponse>(this.baseUri + 'identitypools/' + (IdentityPoolId == null ? '' : encodeURIComponent(IdentityPoolId)) + '/identities/' + (IdentityId == null ? '' : encodeURIComponent(IdentityId)), {});
		}

		/**
		 * <p>Get the status of the last BulkPublish operation for an identity pool.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
		 * Post identitypools/{IdentityPoolId}/getBulkPublishDetails
		 * @param {string} IdentityPoolId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
		 * @return {GetBulkPublishDetailsResponse} Success
		 */
		GetBulkPublishDetails(IdentityPoolId: string): Observable<GetBulkPublishDetailsResponse> {
			return this.http.post<GetBulkPublishDetailsResponse>(this.baseUri + 'identitypools/' + (IdentityPoolId == null ? '' : encodeURIComponent(IdentityPoolId)) + '/getBulkPublishDetails', null, {});
		}

		/**
		 * <p>Gets the events and the corresponding Lambda functions associated with an identity pool.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
		 * Get identitypools/{IdentityPoolId}/events
		 * @param {string} IdentityPoolId The Cognito Identity Pool ID for the request
		 * @return {GetCognitoEventsResponse} Success
		 */
		GetCognitoEvents(IdentityPoolId: string): Observable<GetCognitoEventsResponse> {
			return this.http.get<GetCognitoEventsResponse>(this.baseUri + 'identitypools/' + (IdentityPoolId == null ? '' : encodeURIComponent(IdentityPoolId)) + '/events', {});
		}

		/**
		 * <p>Sets the AWS Lambda function for a given event type for an identity pool. This request only updates the key/value pair specified. Other key/values pairs are not updated. To remove a key value pair, pass a empty value for the particular key.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
		 * Post identitypools/{IdentityPoolId}/events
		 * @param {string} IdentityPoolId The Cognito Identity Pool to use when configuring Cognito Events
		 * @return {void} Success
		 */
		SetCognitoEvents(IdentityPoolId: string, requestBody: SetCognitoEventsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'identitypools/' + (IdentityPoolId == null ? '' : encodeURIComponent(IdentityPoolId)) + '/events', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets the configuration settings of an identity pool.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
		 * Get identitypools/{IdentityPoolId}/configuration
		 * @param {string} IdentityPoolId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. This is the ID of the pool for which to return a configuration.
		 * @return {GetIdentityPoolConfigurationResponse} Success
		 */
		GetIdentityPoolConfiguration(IdentityPoolId: string): Observable<GetIdentityPoolConfigurationResponse> {
			return this.http.get<GetIdentityPoolConfigurationResponse>(this.baseUri + 'identitypools/' + (IdentityPoolId == null ? '' : encodeURIComponent(IdentityPoolId)) + '/configuration', {});
		}

		/**
		 * <p>Sets the necessary configuration for push sync.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
		 * Post identitypools/{IdentityPoolId}/configuration
		 * @param {string} IdentityPoolId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. This is the ID of the pool to modify.
		 * @return {SetIdentityPoolConfigurationResponse} Success
		 */
		SetIdentityPoolConfiguration(IdentityPoolId: string, requestBody: SetIdentityPoolConfigurationPostBody): Observable<SetIdentityPoolConfigurationResponse> {
			return this.http.post<SetIdentityPoolConfigurationResponse>(this.baseUri + 'identitypools/' + (IdentityPoolId == null ? '' : encodeURIComponent(IdentityPoolId)) + '/configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists datasets for an identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>ListDatasets can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use the Cognito Identity credentials to make this API call.</p>
		 * Get identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets
		 * @param {string} IdentityPoolId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
		 * @param {string} IdentityId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
		 * @param {string} nextToken A pagination token for obtaining the next page of results.
		 * @param {number} maxResults The maximum number of results to be returned.
		 * @return {ListDatasetsResponse} Success
		 */
		ListDatasets(IdentityPoolId: string, IdentityId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListDatasetsResponse> {
			return this.http.get<ListDatasetsResponse>(this.baseUri + 'identitypools/' + (IdentityPoolId == null ? '' : encodeURIComponent(IdentityPoolId)) + '/identities/' + (IdentityId == null ? '' : encodeURIComponent(IdentityId)) + '/datasets&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Gets a list of identity pools registered with Cognito.</p> <p>ListIdentityPoolUsage can only be called with developer credentials. You cannot make this API call with the temporary user credentials provided by Cognito Identity.</p>
		 * Get identitypools
		 * @param {string} nextToken A pagination token for obtaining the next page of results.
		 * @param {number} maxResults The maximum number of results to be returned.
		 * @return {ListIdentityPoolUsageResponse} Success
		 */
		ListIdentityPoolUsage(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListIdentityPoolUsageResponse> {
			return this.http.get<ListIdentityPoolUsageResponse>(this.baseUri + 'identitypools?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Gets paginated records, optionally changed after a particular sync count for a dataset and identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>ListRecords can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.</p>
		 * Get identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/records
		 * @param {string} IdentityPoolId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
		 * @param {string} IdentityId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
		 * @param {string} DatasetName A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).
		 * @param {number} lastSyncCount The last server sync count for this record.
		 * @param {string} nextToken A pagination token for obtaining the next page of results.
		 * @param {number} maxResults The maximum number of results to be returned.
		 * @param {string} syncSessionToken A token containing a session ID, identity ID, and expiration.
		 * @return {ListRecordsResponse} Success
		 */
		ListRecords(IdentityPoolId: string, IdentityId: string, DatasetName: string, lastSyncCount: number | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined, syncSessionToken: string | null | undefined): Observable<ListRecordsResponse> {
			return this.http.get<ListRecordsResponse>(this.baseUri + 'identitypools/' + (IdentityPoolId == null ? '' : encodeURIComponent(IdentityPoolId)) + '/identities/' + (IdentityId == null ? '' : encodeURIComponent(IdentityId)) + '/datasets/' + (DatasetName == null ? '' : encodeURIComponent(DatasetName)) + '/records&lastSyncCount=' + lastSyncCount + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&syncSessionToken=' + (syncSessionToken == null ? '' : encodeURIComponent(syncSessionToken)), {});
		}

		/**
		 * <p>Registers a device to receive push sync notifications.</p> <p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>
		 * Post identitypools/{IdentityPoolId}/identity/{IdentityId}/device
		 * @param {string} IdentityPoolId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. Here, the ID of the pool that the identity belongs to.
		 * @param {string} IdentityId The unique ID for this identity.
		 * @return {RegisterDeviceResponse} Success
		 */
		RegisterDevice(IdentityPoolId: string, IdentityId: string, requestBody: RegisterDevicePostBody): Observable<RegisterDeviceResponse> {
			return this.http.post<RegisterDeviceResponse>(this.baseUri + 'identitypools/' + (IdentityPoolId == null ? '' : encodeURIComponent(IdentityPoolId)) + '/identity/' + (IdentityId == null ? '' : encodeURIComponent(IdentityId)) + '/device', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Subscribes to receive notifications when a dataset is modified by another device.</p> <p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>
		 * Post identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}
		 * @param {string} IdentityPoolId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. The ID of the pool to which the identity belongs.
		 * @param {string} IdentityId Unique ID for this identity.
		 * @param {string} DatasetName The name of the dataset to subcribe to.
		 * @param {string} DeviceId The unique ID generated for this device by Cognito.
		 * @return {SubscribeToDatasetResponse} Success
		 */
		SubscribeToDataset(IdentityPoolId: string, IdentityId: string, DatasetName: string, DeviceId: string): Observable<SubscribeToDatasetResponse> {
			return this.http.post<SubscribeToDatasetResponse>(this.baseUri + 'identitypools/' + (IdentityPoolId == null ? '' : encodeURIComponent(IdentityPoolId)) + '/identities/' + (IdentityId == null ? '' : encodeURIComponent(IdentityId)) + '/datasets/' + (DatasetName == null ? '' : encodeURIComponent(DatasetName)) + '/subscriptions/' + (DeviceId == null ? '' : encodeURIComponent(DeviceId)), null, {});
		}

		/**
		 * <p>Unsubscribes from receiving notifications when a dataset is modified by another device.</p> <p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>
		 * Delete identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}
		 * @param {string} IdentityPoolId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. The ID of the pool to which this identity belongs.
		 * @param {string} IdentityId Unique ID for this identity.
		 * @param {string} DatasetName The name of the dataset from which to unsubcribe.
		 * @param {string} DeviceId The unique ID generated for this device by Cognito.
		 * @return {UnsubscribeFromDatasetResponse} Success
		 */
		UnsubscribeFromDataset(IdentityPoolId: string, IdentityId: string, DatasetName: string, DeviceId: string): Observable<UnsubscribeFromDatasetResponse> {
			return this.http.delete<UnsubscribeFromDatasetResponse>(this.baseUri + 'identitypools/' + (IdentityPoolId == null ? '' : encodeURIComponent(IdentityPoolId)) + '/identities/' + (IdentityId == null ? '' : encodeURIComponent(IdentityId)) + '/datasets/' + (DatasetName == null ? '' : encodeURIComponent(DatasetName)) + '/subscriptions/' + (DeviceId == null ? '' : encodeURIComponent(DeviceId)), {});
		}
	}

	export interface UpdateRecordsPostBody {

		/**
		 * The unique ID generated for this device by Cognito.
		 * Max length: 256
		 * Min length: 1
		 */
		DeviceId?: string | null;

		/** A list of patch operations. */
		RecordPatches?: Array<RecordPatch>;

		/**
		 * The SyncSessionToken returned by a previous call to ListRecords for this dataset and identity.
		 * Required
		 */
		SyncSessionToken: string;
	}
	export interface UpdateRecordsPostBodyFormProperties {

		/**
		 * The unique ID generated for this device by Cognito.
		 * Max length: 256
		 * Min length: 1
		 */
		DeviceId: FormControl<string | null | undefined>,

		/**
		 * The SyncSessionToken returned by a previous call to ListRecords for this dataset and identity.
		 * Required
		 */
		SyncSessionToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRecordsPostBodyFormGroup() {
		return new FormGroup<UpdateRecordsPostBodyFormProperties>({
			DeviceId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
			SyncSessionToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SetCognitoEventsPostBody {

		/**
		 * The events to configure
		 * Required
		 */
		Events: {[id: string]: string };
	}
	export interface SetCognitoEventsPostBodyFormProperties {

		/**
		 * The events to configure
		 * Required
		 */
		Events: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateSetCognitoEventsPostBodyFormGroup() {
		return new FormGroup<SetCognitoEventsPostBodyFormProperties>({
			Events: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SetIdentityPoolConfigurationPostBody {

		/** Configuration options to be applied to the identity pool. */
		PushSync?: SetIdentityPoolConfigurationPostBodyPushSync;

		/** Configuration options for configure Cognito streams. */
		CognitoStreams?: SetIdentityPoolConfigurationPostBodyCognitoStreams;
	}
	export interface SetIdentityPoolConfigurationPostBodyFormProperties {
	}
	export function CreateSetIdentityPoolConfigurationPostBodyFormGroup() {
		return new FormGroup<SetIdentityPoolConfigurationPostBodyFormProperties>({
		});

	}

	export interface SetIdentityPoolConfigurationPostBodyPushSync {
		ApplicationArns?: Array<string>;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn?: string | null;
	}
	export interface SetIdentityPoolConfigurationPostBodyPushSyncFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateSetIdentityPoolConfigurationPostBodyPushSyncFormGroup() {
		return new FormGroup<SetIdentityPoolConfigurationPostBodyPushSyncFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('arn:aws:iam::\d+:role/.*')]),
		});

	}

	export interface SetIdentityPoolConfigurationPostBodyCognitoStreams {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		StreamName?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn?: string | null;
		StreamingStatus?: CognitoStreamsStreamingStatus | null;
	}
	export interface SetIdentityPoolConfigurationPostBodyCognitoStreamsFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		StreamName: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,
		StreamingStatus: FormControl<CognitoStreamsStreamingStatus | null | undefined>,
	}
	export function CreateSetIdentityPoolConfigurationPostBodyCognitoStreamsFormGroup() {
		return new FormGroup<SetIdentityPoolConfigurationPostBodyCognitoStreamsFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('arn:aws:iam::\d+:role/.*')]),
			StreamingStatus: new FormControl<CognitoStreamsStreamingStatus | null | undefined>(undefined),
		});

	}

	export interface RegisterDevicePostBody {

		/**
		 * The SNS platform type (e.g. GCM, SDM, APNS, APNS_SANDBOX).
		 * Required
		 */
		Platform: Platform;

		/**
		 * The push token.
		 * Required
		 */
		Token: string;
	}
	export interface RegisterDevicePostBodyFormProperties {

		/**
		 * The SNS platform type (e.g. GCM, SDM, APNS, APNS_SANDBOX).
		 * Required
		 */
		Platform: FormControl<Platform | null | undefined>,

		/**
		 * The push token.
		 * Required
		 */
		Token: FormControl<string | null | undefined>,
	}
	export function CreateRegisterDevicePostBodyFormGroup() {
		return new FormGroup<RegisterDevicePostBodyFormProperties>({
			Platform: new FormControl<Platform | null | undefined>(undefined, [Validators.required]),
			Token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

}

