import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateSignalingChannelOutput {
		ChannelARN?: string;
	}
	export interface CreateSignalingChannelOutputFormProperties {
		ChannelARN: FormControl<string | null | undefined>,
	}
	export function CreateCreateSignalingChannelOutputFormGroup() {
		return new FormGroup<CreateSignalingChannelOutputFormProperties>({
			ChannelARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A key and value pair that is associated with the specified signaling channel. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** A key and value pair that is associated with the specified signaling channel. */
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

	export interface InvalidArgumentException {
	}
	export interface InvalidArgumentExceptionFormProperties {
	}
	export function CreateInvalidArgumentExceptionFormGroup() {
		return new FormGroup<InvalidArgumentExceptionFormProperties>({
		});

	}

	export interface ClientLimitExceededException {
	}
	export interface ClientLimitExceededExceptionFormProperties {
	}
	export function CreateClientLimitExceededExceptionFormGroup() {
		return new FormGroup<ClientLimitExceededExceptionFormProperties>({
		});

	}

	export interface AccountChannelLimitExceededException {
	}
	export interface AccountChannelLimitExceededExceptionFormProperties {
	}
	export function CreateAccountChannelLimitExceededExceptionFormGroup() {
		return new FormGroup<AccountChannelLimitExceededExceptionFormProperties>({
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

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface TagsPerResourceExceededLimitException {
	}
	export interface TagsPerResourceExceededLimitExceptionFormProperties {
	}
	export function CreateTagsPerResourceExceededLimitExceptionFormGroup() {
		return new FormGroup<TagsPerResourceExceededLimitExceptionFormProperties>({
		});

	}

	export interface CreateStreamOutput {
		StreamARN?: string;
	}
	export interface CreateStreamOutputFormProperties {
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateCreateStreamOutputFormGroup() {
		return new FormGroup<CreateStreamOutputFormProperties>({
			StreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountStreamLimitExceededException {
	}
	export interface AccountStreamLimitExceededExceptionFormProperties {
	}
	export function CreateAccountStreamLimitExceededExceptionFormGroup() {
		return new FormGroup<AccountStreamLimitExceededExceptionFormProperties>({
		});

	}

	export interface DeviceStreamLimitExceededException {
	}
	export interface DeviceStreamLimitExceededExceptionFormProperties {
	}
	export function CreateDeviceStreamLimitExceededExceptionFormGroup() {
		return new FormGroup<DeviceStreamLimitExceededExceptionFormProperties>({
		});

	}

	export interface InvalidDeviceException {
	}
	export interface InvalidDeviceExceptionFormProperties {
	}
	export function CreateInvalidDeviceExceptionFormGroup() {
		return new FormGroup<InvalidDeviceExceptionFormProperties>({
		});

	}

	export interface DeleteEdgeConfigurationOutput {
	}
	export interface DeleteEdgeConfigurationOutputFormProperties {
	}
	export function CreateDeleteEdgeConfigurationOutputFormGroup() {
		return new FormGroup<DeleteEdgeConfigurationOutputFormProperties>({
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

	export interface StreamEdgeConfigurationNotFoundException {
	}
	export interface StreamEdgeConfigurationNotFoundExceptionFormProperties {
	}
	export function CreateStreamEdgeConfigurationNotFoundExceptionFormGroup() {
		return new FormGroup<StreamEdgeConfigurationNotFoundExceptionFormProperties>({
		});

	}

	export interface DeleteSignalingChannelOutput {
	}
	export interface DeleteSignalingChannelOutputFormProperties {
	}
	export function CreateDeleteSignalingChannelOutputFormGroup() {
		return new FormGroup<DeleteSignalingChannelOutputFormProperties>({
		});

	}

	export interface VersionMismatchException {
	}
	export interface VersionMismatchExceptionFormProperties {
	}
	export function CreateVersionMismatchExceptionFormGroup() {
		return new FormGroup<VersionMismatchExceptionFormProperties>({
		});

	}

	export interface DeleteStreamOutput {
	}
	export interface DeleteStreamOutputFormProperties {
	}
	export function CreateDeleteStreamOutputFormGroup() {
		return new FormGroup<DeleteStreamOutputFormProperties>({
		});

	}

	export interface NotAuthorizedException {
	}
	export interface NotAuthorizedExceptionFormProperties {
	}
	export function CreateNotAuthorizedExceptionFormGroup() {
		return new FormGroup<NotAuthorizedExceptionFormProperties>({
		});

	}

	export interface DescribeEdgeConfigurationOutput {
		StreamName?: string;
		StreamARN?: string;
		CreationTime?: Date;
		LastUpdatedTime?: Date;
		SyncStatus?: SyncStatus;
		FailedStatusDetails?: string;
		EdgeConfig?: EdgeConfig;
		EdgeAgentStatus?: EdgeAgentStatus;
	}
	export interface DescribeEdgeConfigurationOutputFormProperties {
		StreamName: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		SyncStatus: FormControl<SyncStatus | null | undefined>,
		FailedStatusDetails: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEdgeConfigurationOutputFormGroup() {
		return new FormGroup<DescribeEdgeConfigurationOutputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			SyncStatus: new FormControl<SyncStatus | null | undefined>(undefined),
			FailedStatusDetails: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SyncStatus { SYNCING = 'SYNCING', ACKNOWLEDGED = 'ACKNOWLEDGED', IN_SYNC = 'IN_SYNC', SYNC_FAILED = 'SYNC_FAILED', DELETING = 'DELETING', DELETE_FAILED = 'DELETE_FAILED', DELETING_ACKNOWLEDGED = 'DELETING_ACKNOWLEDGED' }


	/** A description of the stream's edge configuration that will be used to sync with the Edge Agent IoT Greengrass component. The Edge Agent component will run on an IoT Hub Device setup at your premise. */
	export interface EdgeConfig {

		/** Required */
		HubDeviceArn: string;

		/** Required */
		RecorderConfig: RecorderConfig;
		UploaderConfig?: UploaderConfig;
		DeletionConfig?: DeletionConfig;
	}

	/** A description of the stream's edge configuration that will be used to sync with the Edge Agent IoT Greengrass component. The Edge Agent component will run on an IoT Hub Device setup at your premise. */
	export interface EdgeConfigFormProperties {

		/** Required */
		HubDeviceArn: FormControl<string | null | undefined>,
	}
	export function CreateEdgeConfigFormGroup() {
		return new FormGroup<EdgeConfigFormProperties>({
			HubDeviceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The recorder configuration consists of the local <code>MediaSourceConfig</code> details that are used as credentials to accesss the local media files streamed on the camera.  */
	export interface RecorderConfig {

		/** Required */
		MediaSourceConfig: MediaSourceConfig;
		ScheduleConfig?: ScheduleConfig;
	}

	/** The recorder configuration consists of the local <code>MediaSourceConfig</code> details that are used as credentials to accesss the local media files streamed on the camera.  */
	export interface RecorderConfigFormProperties {
	}
	export function CreateRecorderConfigFormGroup() {
		return new FormGroup<RecorderConfigFormProperties>({
		});

	}


	/** The configuration details that consist of the credentials required (<code>MediaUriSecretArn</code> and <code>MediaUriType</code>) to access the media files that are streamed to the camera. */
	export interface MediaSourceConfig {

		/** Required */
		MediaUriSecretArn: string;

		/** Required */
		MediaUriType: MediaUriType;
	}

	/** The configuration details that consist of the credentials required (<code>MediaUriSecretArn</code> and <code>MediaUriType</code>) to access the media files that are streamed to the camera. */
	export interface MediaSourceConfigFormProperties {

		/** Required */
		MediaUriSecretArn: FormControl<string | null | undefined>,

		/** Required */
		MediaUriType: FormControl<MediaUriType | null | undefined>,
	}
	export function CreateMediaSourceConfigFormGroup() {
		return new FormGroup<MediaSourceConfigFormProperties>({
			MediaUriSecretArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MediaUriType: new FormControl<MediaUriType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MediaUriType { RTSP_URI = 'RTSP_URI', FILE_URI = 'FILE_URI' }


	/** <p>This API enables you to specify the duration that the camera, or local media file, should record onto the Edge Agent. The <code>ScheduleConfig</code> consists of the <code>ScheduleExpression</code> and the <code>DurationInMinutes</code> attributes. </p> <p>If the <code>ScheduleConfig</code> is not provided in the <code>RecorderConfig</code>, then the Edge Agent will always be set to recording mode.</p> <p>If the <code>ScheduleConfig</code> is not provided in the <code>UploaderConfig</code>, then the Edge Agent will upload at regular intervals (every 1 hour).</p> */
	export interface ScheduleConfig {

		/** Required */
		ScheduleExpression: string;

		/** Required */
		DurationInSeconds: number;
	}

	/** <p>This API enables you to specify the duration that the camera, or local media file, should record onto the Edge Agent. The <code>ScheduleConfig</code> consists of the <code>ScheduleExpression</code> and the <code>DurationInMinutes</code> attributes. </p> <p>If the <code>ScheduleConfig</code> is not provided in the <code>RecorderConfig</code>, then the Edge Agent will always be set to recording mode.</p> <p>If the <code>ScheduleConfig</code> is not provided in the <code>UploaderConfig</code>, then the Edge Agent will upload at regular intervals (every 1 hour).</p> */
	export interface ScheduleConfigFormProperties {

		/** Required */
		ScheduleExpression: FormControl<string | null | undefined>,

		/** Required */
		DurationInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateScheduleConfigFormGroup() {
		return new FormGroup<ScheduleConfigFormProperties>({
			ScheduleExpression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DurationInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration that consists of the <code>ScheduleExpression</code> and the <code>DurationInMinutes</code> details that specify the scheduling to record from a camera, or local media file, onto the Edge Agent. If the <code>ScheduleConfig</code> is not provided in the <code>UploaderConfig</code>, then the Edge Agent will upload at regular intervals (every 1 hour).  */
	export interface UploaderConfig {

		/** Required */
		ScheduleConfig: ScheduleConfig;
	}

	/** The configuration that consists of the <code>ScheduleExpression</code> and the <code>DurationInMinutes</code> details that specify the scheduling to record from a camera, or local media file, onto the Edge Agent. If the <code>ScheduleConfig</code> is not provided in the <code>UploaderConfig</code>, then the Edge Agent will upload at regular intervals (every 1 hour).  */
	export interface UploaderConfigFormProperties {
	}
	export function CreateUploaderConfigFormGroup() {
		return new FormGroup<UploaderConfigFormProperties>({
		});

	}


	/** The configuration details required to delete the connection of the stream from the Edge Agent. */
	export interface DeletionConfig {
		EdgeRetentionInHours?: number | null;
		LocalSizeConfig?: LocalSizeConfig;
		DeleteAfterUpload?: boolean | null;
	}

	/** The configuration details required to delete the connection of the stream from the Edge Agent. */
	export interface DeletionConfigFormProperties {
		EdgeRetentionInHours: FormControl<number | null | undefined>,
		DeleteAfterUpload: FormControl<boolean | null | undefined>,
	}
	export function CreateDeletionConfigFormGroup() {
		return new FormGroup<DeletionConfigFormProperties>({
			EdgeRetentionInHours: new FormControl<number | null | undefined>(undefined),
			DeleteAfterUpload: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The configuration details that include the maximum size of the media (<code>MaxLocalMediaSizeInMB</code>) that you want to store for a stream on the Edge Agent, as well as the strategy that should be used (<code>StrategyOnFullSize</code>) when a stream's maximum size has been reached. */
	export interface LocalSizeConfig {
		MaxLocalMediaSizeInMB?: number | null;
		StrategyOnFullSize?: StrategyOnFullSize;
	}

	/** The configuration details that include the maximum size of the media (<code>MaxLocalMediaSizeInMB</code>) that you want to store for a stream on the Edge Agent, as well as the strategy that should be used (<code>StrategyOnFullSize</code>) when a stream's maximum size has been reached. */
	export interface LocalSizeConfigFormProperties {
		MaxLocalMediaSizeInMB: FormControl<number | null | undefined>,
		StrategyOnFullSize: FormControl<StrategyOnFullSize | null | undefined>,
	}
	export function CreateLocalSizeConfigFormGroup() {
		return new FormGroup<LocalSizeConfigFormProperties>({
			MaxLocalMediaSizeInMB: new FormControl<number | null | undefined>(undefined),
			StrategyOnFullSize: new FormControl<StrategyOnFullSize | null | undefined>(undefined),
		});

	}

	export enum StrategyOnFullSize { DELETE_OLDEST_MEDIA = 'DELETE_OLDEST_MEDIA', DENY_NEW_MEDIA = 'DENY_NEW_MEDIA' }


	/** An object that contains the latest status details for an edge agent's recorder and uploader jobs. Use this information to determine the current health of an edge agent. */
	export interface EdgeAgentStatus {
		LastRecorderStatus?: LastRecorderStatus;
		LastUploaderStatus?: LastUploaderStatus;
	}

	/** An object that contains the latest status details for an edge agent's recorder and uploader jobs. Use this information to determine the current health of an edge agent. */
	export interface EdgeAgentStatusFormProperties {
	}
	export function CreateEdgeAgentStatusFormGroup() {
		return new FormGroup<EdgeAgentStatusFormProperties>({
		});

	}


	/** The latest status of a stream's edge recording job. */
	export interface LastRecorderStatus {
		JobStatusDetails?: string;
		LastCollectedTime?: Date;
		LastUpdatedTime?: Date;
		RecorderStatus?: RecorderStatus;
	}

	/** The latest status of a stream's edge recording job. */
	export interface LastRecorderStatusFormProperties {
		JobStatusDetails: FormControl<string | null | undefined>,
		LastCollectedTime: FormControl<Date | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		RecorderStatus: FormControl<RecorderStatus | null | undefined>,
	}
	export function CreateLastRecorderStatusFormGroup() {
		return new FormGroup<LastRecorderStatusFormProperties>({
			JobStatusDetails: new FormControl<string | null | undefined>(undefined),
			LastCollectedTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			RecorderStatus: new FormControl<RecorderStatus | null | undefined>(undefined),
		});

	}

	export enum RecorderStatus { SUCCESS = 'SUCCESS', USER_ERROR = 'USER_ERROR', SYSTEM_ERROR = 'SYSTEM_ERROR' }


	/** The latest status of a stream’s edge to cloud uploader job. */
	export interface LastUploaderStatus {
		JobStatusDetails?: string;
		LastCollectedTime?: Date;
		LastUpdatedTime?: Date;
		UploaderStatus?: RecorderStatus;
	}

	/** The latest status of a stream’s edge to cloud uploader job. */
	export interface LastUploaderStatusFormProperties {
		JobStatusDetails: FormControl<string | null | undefined>,
		LastCollectedTime: FormControl<Date | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		UploaderStatus: FormControl<RecorderStatus | null | undefined>,
	}
	export function CreateLastUploaderStatusFormGroup() {
		return new FormGroup<LastUploaderStatusFormProperties>({
			JobStatusDetails: new FormControl<string | null | undefined>(undefined),
			LastCollectedTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			UploaderStatus: new FormControl<RecorderStatus | null | undefined>(undefined),
		});

	}

	export interface DescribeImageGenerationConfigurationOutput {
		ImageGenerationConfiguration?: ImageGenerationConfiguration;
	}
	export interface DescribeImageGenerationConfigurationOutputFormProperties {
	}
	export function CreateDescribeImageGenerationConfigurationOutputFormGroup() {
		return new FormGroup<DescribeImageGenerationConfigurationOutputFormProperties>({
		});

	}


	/** The structure that contains the information required for the KVS images delivery. If null, the configuration will be deleted from the stream. */
	export interface ImageGenerationConfiguration {

		/** Required */
		Status: ConfigurationStatus;

		/** Required */
		ImageSelectorType: ImageSelectorType;

		/** Required */
		DestinationConfig: ImageGenerationDestinationConfig;

		/** Required */
		SamplingInterval: number;

		/** Required */
		Format: Format;
		FormatConfig?: FormatConfig;
		WidthPixels?: number | null;
		HeightPixels?: number | null;
	}

	/** The structure that contains the information required for the KVS images delivery. If null, the configuration will be deleted from the stream. */
	export interface ImageGenerationConfigurationFormProperties {

		/** Required */
		Status: FormControl<ConfigurationStatus | null | undefined>,

		/** Required */
		ImageSelectorType: FormControl<ImageSelectorType | null | undefined>,

		/** Required */
		SamplingInterval: FormControl<number | null | undefined>,

		/** Required */
		Format: FormControl<Format | null | undefined>,
		WidthPixels: FormControl<number | null | undefined>,
		HeightPixels: FormControl<number | null | undefined>,
	}
	export function CreateImageGenerationConfigurationFormGroup() {
		return new FormGroup<ImageGenerationConfigurationFormProperties>({
			Status: new FormControl<ConfigurationStatus | null | undefined>(undefined, [Validators.required]),
			ImageSelectorType: new FormControl<ImageSelectorType | null | undefined>(undefined, [Validators.required]),
			SamplingInterval: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Format: new FormControl<Format | null | undefined>(undefined, [Validators.required]),
			WidthPixels: new FormControl<number | null | undefined>(undefined),
			HeightPixels: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ConfigurationStatus { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }

	export enum ImageSelectorType { SERVER_TIMESTAMP = 'SERVER_TIMESTAMP', PRODUCER_TIMESTAMP = 'PRODUCER_TIMESTAMP' }


	/** The structure that contains the information required to deliver images to a customer. */
	export interface ImageGenerationDestinationConfig {

		/** Required */
		Uri: string;

		/** Required */
		DestinationRegion: string;
	}

	/** The structure that contains the information required to deliver images to a customer. */
	export interface ImageGenerationDestinationConfigFormProperties {

		/** Required */
		Uri: FormControl<string | null | undefined>,

		/** Required */
		DestinationRegion: FormControl<string | null | undefined>,
	}
	export function CreateImageGenerationDestinationConfigFormGroup() {
		return new FormGroup<ImageGenerationDestinationConfigFormProperties>({
			Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DestinationRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Format { JPEG = 'JPEG', PNG = 'PNG' }

	export interface FormatConfig {
	}
	export interface FormatConfigFormProperties {
	}
	export function CreateFormatConfigFormGroup() {
		return new FormGroup<FormatConfigFormProperties>({
		});

	}

	export interface DescribeMappedResourceConfigurationOutput {
		MappedResourceConfigurationList?: Array<MappedResourceConfigurationListItem>;
		NextToken?: string;
	}
	export interface DescribeMappedResourceConfigurationOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMappedResourceConfigurationOutputFormGroup() {
		return new FormGroup<DescribeMappedResourceConfigurationOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that encapsulates, or contains, the media storage configuration properties. */
	export interface MappedResourceConfigurationListItem {
		Type?: string;
		ARN?: string;
	}

	/** A structure that encapsulates, or contains, the media storage configuration properties. */
	export interface MappedResourceConfigurationListItemFormProperties {
		Type: FormControl<string | null | undefined>,
		ARN: FormControl<string | null | undefined>,
	}
	export function CreateMappedResourceConfigurationListItemFormGroup() {
		return new FormGroup<MappedResourceConfigurationListItemFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
			ARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMediaStorageConfigurationOutput {
		MediaStorageConfiguration?: MediaStorageConfiguration;
	}
	export interface DescribeMediaStorageConfigurationOutputFormProperties {
	}
	export function CreateDescribeMediaStorageConfigurationOutputFormGroup() {
		return new FormGroup<DescribeMediaStorageConfigurationOutputFormProperties>({
		});

	}


	/** A structure that encapsulates, or contains, the media storage configuration properties. */
	export interface MediaStorageConfiguration {
		StreamARN?: string;

		/** Required */
		Status: ConfigurationStatus;
	}

	/** A structure that encapsulates, or contains, the media storage configuration properties. */
	export interface MediaStorageConfigurationFormProperties {
		StreamARN: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<ConfigurationStatus | null | undefined>,
	}
	export function CreateMediaStorageConfigurationFormGroup() {
		return new FormGroup<MediaStorageConfigurationFormProperties>({
			StreamARN: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ConfigurationStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeNotificationConfigurationOutput {
		NotificationConfiguration?: NotificationConfiguration;
	}
	export interface DescribeNotificationConfigurationOutputFormProperties {
	}
	export function CreateDescribeNotificationConfigurationOutputFormGroup() {
		return new FormGroup<DescribeNotificationConfigurationOutputFormProperties>({
		});

	}


	/** The structure that contains the notification information for the KVS images delivery. If this parameter is null, the configuration will be deleted from the stream. */
	export interface NotificationConfiguration {

		/** Required */
		Status: ConfigurationStatus;

		/** Required */
		DestinationConfig: NotificationDestinationConfig;
	}

	/** The structure that contains the notification information for the KVS images delivery. If this parameter is null, the configuration will be deleted from the stream. */
	export interface NotificationConfigurationFormProperties {

		/** Required */
		Status: FormControl<ConfigurationStatus | null | undefined>,
	}
	export function CreateNotificationConfigurationFormGroup() {
		return new FormGroup<NotificationConfigurationFormProperties>({
			Status: new FormControl<ConfigurationStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The structure that contains the information required to deliver a notification to a customer. */
	export interface NotificationDestinationConfig {

		/** Required */
		Uri: string;
	}

	/** The structure that contains the information required to deliver a notification to a customer. */
	export interface NotificationDestinationConfigFormProperties {

		/** Required */
		Uri: FormControl<string | null | undefined>,
	}
	export function CreateNotificationDestinationConfigFormGroup() {
		return new FormGroup<NotificationDestinationConfigFormProperties>({
			Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeSignalingChannelOutput {
		ChannelInfo?: ChannelInfo;
	}
	export interface DescribeSignalingChannelOutputFormProperties {
	}
	export function CreateDescribeSignalingChannelOutputFormGroup() {
		return new FormGroup<DescribeSignalingChannelOutputFormProperties>({
		});

	}


	/** A structure that encapsulates a signaling channel's metadata and properties. */
	export interface ChannelInfo {
		ChannelName?: string;
		ChannelARN?: string;
		ChannelType?: ChannelType;
		ChannelStatus?: Status;
		CreationTime?: Date;
		SingleMasterConfiguration?: SingleMasterConfiguration;
		Version?: string;
	}

	/** A structure that encapsulates a signaling channel's metadata and properties. */
	export interface ChannelInfoFormProperties {
		ChannelName: FormControl<string | null | undefined>,
		ChannelARN: FormControl<string | null | undefined>,
		ChannelType: FormControl<ChannelType | null | undefined>,
		ChannelStatus: FormControl<Status | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateChannelInfoFormGroup() {
		return new FormGroup<ChannelInfoFormProperties>({
			ChannelName: new FormControl<string | null | undefined>(undefined),
			ChannelARN: new FormControl<string | null | undefined>(undefined),
			ChannelType: new FormControl<ChannelType | null | undefined>(undefined),
			ChannelStatus: new FormControl<Status | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ChannelType { SINGLE_MASTER = 'SINGLE_MASTER', FULL_MESH = 'FULL_MESH' }

	export enum Status { CREATING = 'CREATING', ACTIVE = 'ACTIVE', UPDATING = 'UPDATING', DELETING = 'DELETING' }


	/** A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type. */
	export interface SingleMasterConfiguration {
		MessageTtlSeconds?: number | null;
	}

	/** A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type. */
	export interface SingleMasterConfigurationFormProperties {
		MessageTtlSeconds: FormControl<number | null | undefined>,
	}
	export function CreateSingleMasterConfigurationFormGroup() {
		return new FormGroup<SingleMasterConfigurationFormProperties>({
			MessageTtlSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeStreamOutput {
		StreamInfo?: StreamInfo;
	}
	export interface DescribeStreamOutputFormProperties {
	}
	export function CreateDescribeStreamOutputFormGroup() {
		return new FormGroup<DescribeStreamOutputFormProperties>({
		});

	}


	/** An object describing a Kinesis video stream. */
	export interface StreamInfo {
		DeviceName?: string;
		StreamName?: string;
		StreamARN?: string;
		MediaType?: string;
		KmsKeyId?: string;
		Version?: string;
		Status?: Status;
		CreationTime?: Date;
		DataRetentionInHours?: number | null;
	}

	/** An object describing a Kinesis video stream. */
	export interface StreamInfoFormProperties {
		DeviceName: FormControl<string | null | undefined>,
		StreamName: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
		MediaType: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
		Status: FormControl<Status | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		DataRetentionInHours: FormControl<number | null | undefined>,
	}
	export function CreateStreamInfoFormGroup() {
		return new FormGroup<StreamInfoFormProperties>({
			DeviceName: new FormControl<string | null | undefined>(undefined),
			StreamName: new FormControl<string | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
			MediaType: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<Status | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			DataRetentionInHours: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetDataEndpointOutput {
		DataEndpoint?: string;
	}
	export interface GetDataEndpointOutputFormProperties {
		DataEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateGetDataEndpointOutputFormGroup() {
		return new FormGroup<GetDataEndpointOutputFormProperties>({
			DataEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSignalingChannelEndpointOutput {
		ResourceEndpointList?: Array<ResourceEndpointListItem>;
	}
	export interface GetSignalingChannelEndpointOutputFormProperties {
	}
	export function CreateGetSignalingChannelEndpointOutputFormGroup() {
		return new FormGroup<GetSignalingChannelEndpointOutputFormProperties>({
		});

	}


	/** <p>An object that describes the endpoint of the signaling channel returned by the <code>GetSignalingChannelEndpoint</code> API.</p> <p>The media server endpoint will correspond to the <code>WEBRTC</code> Protocol.</p> */
	export interface ResourceEndpointListItem {
		Protocol?: ChannelProtocol;
		ResourceEndpoint?: string;
	}

	/** <p>An object that describes the endpoint of the signaling channel returned by the <code>GetSignalingChannelEndpoint</code> API.</p> <p>The media server endpoint will correspond to the <code>WEBRTC</code> Protocol.</p> */
	export interface ResourceEndpointListItemFormProperties {
		Protocol: FormControl<ChannelProtocol | null | undefined>,
		ResourceEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateResourceEndpointListItemFormGroup() {
		return new FormGroup<ResourceEndpointListItemFormProperties>({
			Protocol: new FormControl<ChannelProtocol | null | undefined>(undefined),
			ResourceEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ChannelProtocol { WSS = 'WSS', HTTPS = 'HTTPS', WEBRTC = 'WEBRTC' }

	export enum ChannelRole { MASTER = 'MASTER', VIEWER = 'VIEWER' }

	export interface ListEdgeAgentConfigurationsOutput {
		EdgeConfigs?: Array<ListEdgeAgentConfigurationsEdgeConfig>;
		NextToken?: string;
	}
	export interface ListEdgeAgentConfigurationsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEdgeAgentConfigurationsOutputFormGroup() {
		return new FormGroup<ListEdgeAgentConfigurationsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A description of a single stream's edge configuration. */
	export interface ListEdgeAgentConfigurationsEdgeConfig {
		StreamName?: string;
		StreamARN?: string;
		CreationTime?: Date;
		LastUpdatedTime?: Date;
		SyncStatus?: SyncStatus;
		FailedStatusDetails?: string;

		/** A description of the stream's edge configuration that will be used to sync with the Edge Agent IoT Greengrass component. The Edge Agent component will run on an IoT Hub Device setup at your premise. */
		EdgeConfig?: EdgeConfig;
	}

	/** A description of a single stream's edge configuration. */
	export interface ListEdgeAgentConfigurationsEdgeConfigFormProperties {
		StreamName: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		SyncStatus: FormControl<SyncStatus | null | undefined>,
		FailedStatusDetails: FormControl<string | null | undefined>,
	}
	export function CreateListEdgeAgentConfigurationsEdgeConfigFormGroup() {
		return new FormGroup<ListEdgeAgentConfigurationsEdgeConfigFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			SyncStatus: new FormControl<SyncStatus | null | undefined>(undefined),
			FailedStatusDetails: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSignalingChannelsOutput {
		ChannelInfoList?: Array<ChannelInfo>;
		NextToken?: string;
	}
	export interface ListSignalingChannelsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSignalingChannelsOutputFormGroup() {
		return new FormGroup<ListSignalingChannelsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ComparisonOperator { BEGINS_WITH = 'BEGINS_WITH' }

	export interface ListStreamsOutput {
		StreamInfoList?: Array<StreamInfo>;
		NextToken?: string;
	}
	export interface ListStreamsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStreamsOutputFormGroup() {
		return new FormGroup<ListStreamsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceOutput {
		NextToken?: string;
		Tags?: ResourceTags;
	}
	export interface ListTagsForResourceOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceOutputFormGroup() {
		return new FormGroup<ListTagsForResourceOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceTags {
	}
	export interface ResourceTagsFormProperties {
	}
	export function CreateResourceTagsFormGroup() {
		return new FormGroup<ResourceTagsFormProperties>({
		});

	}

	export interface ListTagsForStreamOutput {
		NextToken?: string;
		Tags?: ResourceTags;
	}
	export interface ListTagsForStreamOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForStreamOutputFormGroup() {
		return new FormGroup<ListTagsForStreamOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidResourceFormatException {
	}
	export interface InvalidResourceFormatExceptionFormProperties {
	}
	export function CreateInvalidResourceFormatExceptionFormGroup() {
		return new FormGroup<InvalidResourceFormatExceptionFormProperties>({
		});

	}

	export interface StartEdgeConfigurationUpdateOutput {
		StreamName?: string;
		StreamARN?: string;
		CreationTime?: Date;
		LastUpdatedTime?: Date;
		SyncStatus?: SyncStatus;
		FailedStatusDetails?: string;
		EdgeConfig?: EdgeConfig;
	}
	export interface StartEdgeConfigurationUpdateOutputFormProperties {
		StreamName: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		SyncStatus: FormControl<SyncStatus | null | undefined>,
		FailedStatusDetails: FormControl<string | null | undefined>,
	}
	export function CreateStartEdgeConfigurationUpdateOutputFormGroup() {
		return new FormGroup<StartEdgeConfigurationUpdateOutputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			SyncStatus: new FormControl<SyncStatus | null | undefined>(undefined),
			FailedStatusDetails: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NoDataRetentionException {
	}
	export interface NoDataRetentionExceptionFormProperties {
	}
	export function CreateNoDataRetentionExceptionFormGroup() {
		return new FormGroup<NoDataRetentionExceptionFormProperties>({
		});

	}

	export interface TagResourceOutput {
	}
	export interface TagResourceOutputFormProperties {
	}
	export function CreateTagResourceOutputFormGroup() {
		return new FormGroup<TagResourceOutputFormProperties>({
		});

	}

	export interface TagStreamOutput {
	}
	export interface TagStreamOutputFormProperties {
	}
	export function CreateTagStreamOutputFormGroup() {
		return new FormGroup<TagStreamOutputFormProperties>({
		});

	}

	export interface UntagResourceOutput {
	}
	export interface UntagResourceOutputFormProperties {
	}
	export function CreateUntagResourceOutputFormGroup() {
		return new FormGroup<UntagResourceOutputFormProperties>({
		});

	}

	export interface UntagStreamOutput {
	}
	export interface UntagStreamOutputFormProperties {
	}
	export function CreateUntagStreamOutputFormGroup() {
		return new FormGroup<UntagStreamOutputFormProperties>({
		});

	}

	export interface UpdateDataRetentionOutput {
	}
	export interface UpdateDataRetentionOutputFormProperties {
	}
	export function CreateUpdateDataRetentionOutputFormGroup() {
		return new FormGroup<UpdateDataRetentionOutputFormProperties>({
		});

	}

	export interface UpdateImageGenerationConfigurationOutput {
	}
	export interface UpdateImageGenerationConfigurationOutputFormProperties {
	}
	export function CreateUpdateImageGenerationConfigurationOutputFormGroup() {
		return new FormGroup<UpdateImageGenerationConfigurationOutputFormProperties>({
		});

	}

	export interface UpdateMediaStorageConfigurationOutput {
	}
	export interface UpdateMediaStorageConfigurationOutputFormProperties {
	}
	export function CreateUpdateMediaStorageConfigurationOutputFormGroup() {
		return new FormGroup<UpdateMediaStorageConfigurationOutputFormProperties>({
		});

	}

	export enum MediaStorageConfigurationStatus { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }

	export interface UpdateNotificationConfigurationOutput {
	}
	export interface UpdateNotificationConfigurationOutputFormProperties {
	}
	export function CreateUpdateNotificationConfigurationOutputFormGroup() {
		return new FormGroup<UpdateNotificationConfigurationOutputFormProperties>({
		});

	}

	export interface UpdateSignalingChannelOutput {
	}
	export interface UpdateSignalingChannelOutputFormProperties {
	}
	export function CreateUpdateSignalingChannelOutputFormGroup() {
		return new FormGroup<UpdateSignalingChannelOutputFormProperties>({
		});

	}

	export interface UpdateStreamOutput {
	}
	export interface UpdateStreamOutputFormProperties {
	}
	export function CreateUpdateStreamOutputFormGroup() {
		return new FormGroup<UpdateStreamOutputFormProperties>({
		});

	}

	export enum APIName { PUT_MEDIA = 'PUT_MEDIA', GET_MEDIA = 'GET_MEDIA', LIST_FRAGMENTS = 'LIST_FRAGMENTS', GET_MEDIA_FOR_FRAGMENT_LIST = 'GET_MEDIA_FOR_FRAGMENT_LIST', GET_HLS_STREAMING_SESSION_URL = 'GET_HLS_STREAMING_SESSION_URL', GET_DASH_STREAMING_SESSION_URL = 'GET_DASH_STREAMING_SESSION_URL', GET_CLIP = 'GET_CLIP', GET_IMAGES = 'GET_IMAGES' }


	/** An optional input parameter for the <code>ListSignalingChannels</code> API. When this parameter is specified while invoking <code>ListSignalingChannels</code>, the API returns only the channels that satisfy a condition specified in <code>ChannelNameCondition</code>. */
	export interface ChannelNameCondition {
		ComparisonOperator?: ComparisonOperator;
		ComparisonValue?: string;
	}

	/** An optional input parameter for the <code>ListSignalingChannels</code> API. When this parameter is specified while invoking <code>ListSignalingChannels</code>, the API returns only the channels that satisfy a condition specified in <code>ChannelNameCondition</code>. */
	export interface ChannelNameConditionFormProperties {
		ComparisonOperator: FormControl<ComparisonOperator | null | undefined>,
		ComparisonValue: FormControl<string | null | undefined>,
	}
	export function CreateChannelNameConditionFormGroup() {
		return new FormGroup<ChannelNameConditionFormProperties>({
			ComparisonOperator: new FormControl<ComparisonOperator | null | undefined>(undefined),
			ComparisonValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSignalingChannelInput {

		/** Required */
		ChannelName: string;
		ChannelType?: ChannelType;
		SingleMasterConfiguration?: SingleMasterConfiguration;
		Tags?: Array<Tag>;
	}
	export interface CreateSignalingChannelInputFormProperties {

		/** Required */
		ChannelName: FormControl<string | null | undefined>,
		ChannelType: FormControl<ChannelType | null | undefined>,
	}
	export function CreateCreateSignalingChannelInputFormGroup() {
		return new FormGroup<CreateSignalingChannelInputFormProperties>({
			ChannelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChannelType: new FormControl<ChannelType | null | undefined>(undefined),
		});

	}

	export interface CreateStreamInput {
		DeviceName?: string;

		/** Required */
		StreamName: string;
		MediaType?: string;
		KmsKeyId?: string;
		DataRetentionInHours?: number | null;
		Tags?: ResourceTags;
	}
	export interface CreateStreamInputFormProperties {
		DeviceName: FormControl<string | null | undefined>,

		/** Required */
		StreamName: FormControl<string | null | undefined>,
		MediaType: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		DataRetentionInHours: FormControl<number | null | undefined>,
	}
	export function CreateCreateStreamInputFormGroup() {
		return new FormGroup<CreateStreamInputFormProperties>({
			DeviceName: new FormControl<string | null | undefined>(undefined),
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MediaType: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			DataRetentionInHours: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteEdgeConfigurationInput {
		StreamName?: string;
		StreamARN?: string;
	}
	export interface DeleteEdgeConfigurationInputFormProperties {
		StreamName: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEdgeConfigurationInputFormGroup() {
		return new FormGroup<DeleteEdgeConfigurationInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteSignalingChannelInput {

		/** Required */
		ChannelARN: string;
		CurrentVersion?: string;
	}
	export interface DeleteSignalingChannelInputFormProperties {

		/** Required */
		ChannelARN: FormControl<string | null | undefined>,
		CurrentVersion: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSignalingChannelInputFormGroup() {
		return new FormGroup<DeleteSignalingChannelInputFormProperties>({
			ChannelARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CurrentVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteStreamInput {

		/** Required */
		StreamARN: string;
		CurrentVersion?: string;
	}
	export interface DeleteStreamInputFormProperties {

		/** Required */
		StreamARN: FormControl<string | null | undefined>,
		CurrentVersion: FormControl<string | null | undefined>,
	}
	export function CreateDeleteStreamInputFormGroup() {
		return new FormGroup<DeleteStreamInputFormProperties>({
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CurrentVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEdgeConfigurationInput {
		StreamName?: string;
		StreamARN?: string;
	}
	export interface DescribeEdgeConfigurationInputFormProperties {
		StreamName: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEdgeConfigurationInputFormGroup() {
		return new FormGroup<DescribeEdgeConfigurationInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeImageGenerationConfigurationInput {
		StreamName?: string;
		StreamARN?: string;
	}
	export interface DescribeImageGenerationConfigurationInputFormProperties {
		StreamName: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateDescribeImageGenerationConfigurationInputFormGroup() {
		return new FormGroup<DescribeImageGenerationConfigurationInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMappedResourceConfigurationInput {
		StreamName?: string;
		StreamARN?: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeMappedResourceConfigurationInputFormProperties {
		StreamName: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMappedResourceConfigurationInputFormGroup() {
		return new FormGroup<DescribeMappedResourceConfigurationInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMediaStorageConfigurationInput {
		ChannelName?: string;
		ChannelARN?: string;
	}
	export interface DescribeMediaStorageConfigurationInputFormProperties {
		ChannelName: FormControl<string | null | undefined>,
		ChannelARN: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMediaStorageConfigurationInputFormGroup() {
		return new FormGroup<DescribeMediaStorageConfigurationInputFormProperties>({
			ChannelName: new FormControl<string | null | undefined>(undefined),
			ChannelARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeNotificationConfigurationInput {
		StreamName?: string;
		StreamARN?: string;
	}
	export interface DescribeNotificationConfigurationInputFormProperties {
		StreamName: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateDescribeNotificationConfigurationInputFormGroup() {
		return new FormGroup<DescribeNotificationConfigurationInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSignalingChannelInput {
		ChannelName?: string;
		ChannelARN?: string;
	}
	export interface DescribeSignalingChannelInputFormProperties {
		ChannelName: FormControl<string | null | undefined>,
		ChannelARN: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSignalingChannelInputFormGroup() {
		return new FormGroup<DescribeSignalingChannelInputFormProperties>({
			ChannelName: new FormControl<string | null | undefined>(undefined),
			ChannelARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeStreamInput {
		StreamName?: string;
		StreamARN?: string;
	}
	export interface DescribeStreamInputFormProperties {
		StreamName: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStreamInputFormGroup() {
		return new FormGroup<DescribeStreamInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FormatConfigKey { JPEGQuality = 'JPEGQuality' }

	export interface GetDataEndpointInput {
		StreamName?: string;
		StreamARN?: string;

		/** Required */
		APIName: APIName;
	}
	export interface GetDataEndpointInputFormProperties {
		StreamName: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,

		/** Required */
		APIName: FormControl<APIName | null | undefined>,
	}
	export function CreateGetDataEndpointInputFormGroup() {
		return new FormGroup<GetDataEndpointInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
			APIName: new FormControl<APIName | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that contains the endpoint configuration for the <code>SINGLE_MASTER</code> channel type.  */
	export interface SingleMasterChannelEndpointConfiguration {
		Protocols?: Array<ChannelProtocol>;
		Role?: ChannelRole;
	}

	/** An object that contains the endpoint configuration for the <code>SINGLE_MASTER</code> channel type.  */
	export interface SingleMasterChannelEndpointConfigurationFormProperties {
		Role: FormControl<ChannelRole | null | undefined>,
	}
	export function CreateSingleMasterChannelEndpointConfigurationFormGroup() {
		return new FormGroup<SingleMasterChannelEndpointConfigurationFormProperties>({
			Role: new FormControl<ChannelRole | null | undefined>(undefined),
		});

	}

	export interface GetSignalingChannelEndpointInput {

		/** Required */
		ChannelARN: string;
		SingleMasterChannelEndpointConfiguration?: SingleMasterChannelEndpointConfiguration;
	}
	export interface GetSignalingChannelEndpointInputFormProperties {

		/** Required */
		ChannelARN: FormControl<string | null | undefined>,
	}
	export function CreateGetSignalingChannelEndpointInputFormGroup() {
		return new FormGroup<GetSignalingChannelEndpointInputFormProperties>({
			ChannelARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UploaderStatus { SUCCESS = 'SUCCESS', USER_ERROR = 'USER_ERROR', SYSTEM_ERROR = 'SYSTEM_ERROR' }

	export interface ListEdgeAgentConfigurationsInput {

		/** Required */
		HubDeviceArn: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListEdgeAgentConfigurationsInputFormProperties {

		/** Required */
		HubDeviceArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEdgeAgentConfigurationsInputFormGroup() {
		return new FormGroup<ListEdgeAgentConfigurationsInputFormProperties>({
			HubDeviceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSignalingChannelsInput {
		MaxResults?: number | null;
		NextToken?: string;
		ChannelNameCondition?: ChannelNameCondition;
	}
	export interface ListSignalingChannelsInputFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSignalingChannelsInputFormGroup() {
		return new FormGroup<ListSignalingChannelsInputFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the condition that streams must satisfy to be returned when you list streams (see the <code>ListStreams</code> API). A condition has a comparison operation and a value. Currently, you can specify only the <code>BEGINS_WITH</code> operator, which finds streams whose names start with a given prefix.  */
	export interface StreamNameCondition {
		ComparisonOperator?: ComparisonOperator;
		ComparisonValue?: string;
	}

	/** Specifies the condition that streams must satisfy to be returned when you list streams (see the <code>ListStreams</code> API). A condition has a comparison operation and a value. Currently, you can specify only the <code>BEGINS_WITH</code> operator, which finds streams whose names start with a given prefix.  */
	export interface StreamNameConditionFormProperties {
		ComparisonOperator: FormControl<ComparisonOperator | null | undefined>,
		ComparisonValue: FormControl<string | null | undefined>,
	}
	export function CreateStreamNameConditionFormGroup() {
		return new FormGroup<StreamNameConditionFormProperties>({
			ComparisonOperator: new FormControl<ComparisonOperator | null | undefined>(undefined),
			ComparisonValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListStreamsInput {
		MaxResults?: number | null;
		NextToken?: string;
		StreamNameCondition?: StreamNameCondition;
	}
	export interface ListStreamsInputFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStreamsInputFormGroup() {
		return new FormGroup<ListStreamsInputFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceInput {
		NextToken?: string;

		/** Required */
		ResourceARN: string;
	}
	export interface ListTagsForResourceInputFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceInputFormGroup() {
		return new FormGroup<ListTagsForResourceInputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTagsForStreamInput {
		NextToken?: string;
		StreamARN?: string;
		StreamName?: string;
	}
	export interface ListTagsForStreamInputFormProperties {
		NextToken: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
		StreamName: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForStreamInputFormGroup() {
		return new FormGroup<ListTagsForStreamInputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
			StreamName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartEdgeConfigurationUpdateInput {
		StreamName?: string;
		StreamARN?: string;

		/** Required */
		EdgeConfig: EdgeConfig;
	}
	export interface StartEdgeConfigurationUpdateInputFormProperties {
		StreamName: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateStartEdgeConfigurationUpdateInputFormGroup() {
		return new FormGroup<StartEdgeConfigurationUpdateInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourceInput {

		/** Required */
		ResourceARN: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceInputFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagStreamInput {
		StreamARN?: string;
		StreamName?: string;

		/** Required */
		Tags: ResourceTags;
	}
	export interface TagStreamInputFormProperties {
		StreamARN: FormControl<string | null | undefined>,
		StreamName: FormControl<string | null | undefined>,
	}
	export function CreateTagStreamInputFormGroup() {
		return new FormGroup<TagStreamInputFormProperties>({
			StreamARN: new FormControl<string | null | undefined>(undefined),
			StreamName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UntagResourceInput {

		/** Required */
		ResourceARN: string;

		/** Required */
		TagKeyList: Array<string>;
	}
	export interface UntagResourceInputFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagStreamInput {
		StreamARN?: string;
		StreamName?: string;

		/** Required */
		TagKeyList: Array<string>;
	}
	export interface UntagStreamInputFormProperties {
		StreamARN: FormControl<string | null | undefined>,
		StreamName: FormControl<string | null | undefined>,
	}
	export function CreateUntagStreamInputFormGroup() {
		return new FormGroup<UntagStreamInputFormProperties>({
			StreamARN: new FormControl<string | null | undefined>(undefined),
			StreamName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UpdateDataRetentionOperation { INCREASE_DATA_RETENTION = 'INCREASE_DATA_RETENTION', DECREASE_DATA_RETENTION = 'DECREASE_DATA_RETENTION' }

	export interface UpdateDataRetentionInput {
		StreamName?: string;
		StreamARN?: string;

		/** Required */
		CurrentVersion: string;

		/** Required */
		Operation: UpdateDataRetentionOperation;

		/** Required */
		DataRetentionChangeInHours: number;
	}
	export interface UpdateDataRetentionInputFormProperties {
		StreamName: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,

		/** Required */
		CurrentVersion: FormControl<string | null | undefined>,

		/** Required */
		Operation: FormControl<UpdateDataRetentionOperation | null | undefined>,

		/** Required */
		DataRetentionChangeInHours: FormControl<number | null | undefined>,
	}
	export function CreateUpdateDataRetentionInputFormGroup() {
		return new FormGroup<UpdateDataRetentionInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
			CurrentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Operation: new FormControl<UpdateDataRetentionOperation | null | undefined>(undefined, [Validators.required]),
			DataRetentionChangeInHours: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateImageGenerationConfigurationInput {
		StreamName?: string;
		StreamARN?: string;
		ImageGenerationConfiguration?: ImageGenerationConfiguration;
	}
	export interface UpdateImageGenerationConfigurationInputFormProperties {
		StreamName: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateUpdateImageGenerationConfigurationInputFormGroup() {
		return new FormGroup<UpdateImageGenerationConfigurationInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateMediaStorageConfigurationInput {

		/** Required */
		ChannelARN: string;

		/** Required */
		MediaStorageConfiguration: MediaStorageConfiguration;
	}
	export interface UpdateMediaStorageConfigurationInputFormProperties {

		/** Required */
		ChannelARN: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMediaStorageConfigurationInputFormGroup() {
		return new FormGroup<UpdateMediaStorageConfigurationInputFormProperties>({
			ChannelARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateNotificationConfigurationInput {
		StreamName?: string;
		StreamARN?: string;
		NotificationConfiguration?: NotificationConfiguration;
	}
	export interface UpdateNotificationConfigurationInputFormProperties {
		StreamName: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNotificationConfigurationInputFormGroup() {
		return new FormGroup<UpdateNotificationConfigurationInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSignalingChannelInput {

		/** Required */
		ChannelARN: string;

		/** Required */
		CurrentVersion: string;
		SingleMasterConfiguration?: SingleMasterConfiguration;
	}
	export interface UpdateSignalingChannelInputFormProperties {

		/** Required */
		ChannelARN: FormControl<string | null | undefined>,

		/** Required */
		CurrentVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSignalingChannelInputFormGroup() {
		return new FormGroup<UpdateSignalingChannelInputFormProperties>({
			ChannelARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CurrentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateStreamInput {
		StreamName?: string;
		StreamARN?: string;

		/** Required */
		CurrentVersion: string;
		DeviceName?: string;
		MediaType?: string;
	}
	export interface UpdateStreamInputFormProperties {
		StreamName: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,

		/** Required */
		CurrentVersion: FormControl<string | null | undefined>,
		DeviceName: FormControl<string | null | undefined>,
		MediaType: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStreamInputFormGroup() {
		return new FormGroup<UpdateStreamInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
			CurrentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeviceName: new FormControl<string | null | undefined>(undefined),
			MediaType: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates a signaling channel. </p> <p> <code>CreateSignalingChannel</code> is an asynchronous operation.</p>
		 * Post createSignalingChannel
		 * @return {CreateSignalingChannelOutput} Success
		 */
		CreateSignalingChannel(requestBody: CreateSignalingChannelPostBody): Observable<CreateSignalingChannelOutput> {
			return this.http.post<CreateSignalingChannelOutput>(this.baseUri + 'createSignalingChannel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new Kinesis video stream. </p> <p>When you create a new stream, Kinesis Video Streams assigns it a version number. When you change the stream's metadata, Kinesis Video Streams updates the version. </p> <p> <code>CreateStream</code> is an asynchronous operation.</p> <p>For information about how the service works, see <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/how-it-works.html">How it Works</a>. </p> <p>You must have permissions for the <code>KinesisVideo:CreateStream</code> action.</p>
		 * Post createStream
		 * @return {CreateStreamOutput} Success
		 */
		CreateStream(requestBody: CreateStreamPostBody): Observable<CreateStreamOutput> {
			return this.http.post<CreateStreamOutput>(this.baseUri + 'createStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>An asynchronous API that deletes a stream’s existing edge configuration, as well as the corresponding media from the Edge Agent.</p> <p>When you invoke this API, the sync status is set to <code>DELETING</code>. A deletion process starts, in which active edge jobs are stopped and all media is deleted from the edge device. The time to delete varies, depending on the total amount of stored media. If the deletion process fails, the sync status changes to <code>DELETE_FAILED</code>. You will need to re-try the deletion.</p> <p>When the deletion process has completed successfully, the edge configuration is no longer accessible.</p>
		 * Post deleteEdgeConfiguration
		 * @return {DeleteEdgeConfigurationOutput} Success
		 */
		DeleteEdgeConfiguration(requestBody: DeleteEdgeConfigurationPostBody): Observable<DeleteEdgeConfigurationOutput> {
			return this.http.post<DeleteEdgeConfigurationOutput>(this.baseUri + 'deleteEdgeConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a specified signaling channel. <code>DeleteSignalingChannel</code> is an asynchronous operation. If you don't specify the channel's current version, the most recent version is deleted.
		 * Post deleteSignalingChannel
		 * @return {DeleteSignalingChannelOutput} Success
		 */
		DeleteSignalingChannel(requestBody: DeleteSignalingChannelPostBody): Observable<DeleteSignalingChannelOutput> {
			return this.http.post<DeleteSignalingChannelOutput>(this.baseUri + 'deleteSignalingChannel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a Kinesis video stream and the data contained in the stream. </p> <p>This method marks the stream for deletion, and makes the data in the stream inaccessible immediately.</p> <p> </p> <p> To ensure that you have the latest version of the stream before deleting it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the <code>DescribeStream</code> API. </p> <p>This operation requires permission for the <code>KinesisVideo:DeleteStream</code> action.</p>
		 * Post deleteStream
		 * @return {DeleteStreamOutput} Success
		 */
		DeleteStream(requestBody: DeleteStreamPostBody): Observable<DeleteStreamOutput> {
			return this.http.post<DeleteStreamOutput>(this.baseUri + 'deleteStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a stream’s edge configuration that was set using the <code>StartEdgeConfigurationUpdate</code> API and the latest status of the edge agent's recorder and uploader jobs. Use this API to get the status of the configuration to determine if the configuration is in sync with the Edge Agent. Use this API to evaluate the health of the Edge Agent.
		 * Post describeEdgeConfiguration
		 * @return {DescribeEdgeConfigurationOutput} Success
		 */
		DescribeEdgeConfiguration(requestBody: DescribeEdgeConfigurationPostBody): Observable<DescribeEdgeConfigurationOutput> {
			return this.http.post<DescribeEdgeConfigurationOutput>(this.baseUri + 'describeEdgeConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the <code>ImageGenerationConfiguration</code> for a given Kinesis video stream.
		 * Post describeImageGenerationConfiguration
		 * @return {DescribeImageGenerationConfigurationOutput} Success
		 */
		DescribeImageGenerationConfiguration(requestBody: DescribeImageGenerationConfigurationPostBody): Observable<DescribeImageGenerationConfigurationOutput> {
			return this.http.post<DescribeImageGenerationConfigurationOutput>(this.baseUri + 'describeImageGenerationConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the most current information about the stream. The <code>streamName</code> or <code>streamARN</code> should be provided in the input.
		 * Post describeMappedResourceConfiguration
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeMappedResourceConfigurationOutput} Success
		 */
		DescribeMappedResourceConfiguration(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeMappedResourceConfigurationPostBody): Observable<DescribeMappedResourceConfigurationOutput> {
			return this.http.post<DescribeMappedResourceConfigurationOutput>(this.baseUri + 'describeMappedResourceConfiguration?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the most current information about the channel. Specify the <code>ChannelName</code> or <code>ChannelARN</code> in the input.
		 * Post describeMediaStorageConfiguration
		 * @return {DescribeMediaStorageConfigurationOutput} Success
		 */
		DescribeMediaStorageConfiguration(requestBody: DescribeMediaStorageConfigurationPostBody): Observable<DescribeMediaStorageConfigurationOutput> {
			return this.http.post<DescribeMediaStorageConfigurationOutput>(this.baseUri + 'describeMediaStorageConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the <code>NotificationConfiguration</code> for a given Kinesis video stream.
		 * Post describeNotificationConfiguration
		 * @return {DescribeNotificationConfigurationOutput} Success
		 */
		DescribeNotificationConfiguration(requestBody: DescribeNotificationConfigurationPostBody): Observable<DescribeNotificationConfigurationOutput> {
			return this.http.post<DescribeNotificationConfigurationOutput>(this.baseUri + 'describeNotificationConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the most current information about the signaling channel. You must specify either the name or the Amazon Resource Name (ARN) of the channel that you want to describe.
		 * Post describeSignalingChannel
		 * @return {DescribeSignalingChannelOutput} Success
		 */
		DescribeSignalingChannel(requestBody: DescribeSignalingChannelPostBody): Observable<DescribeSignalingChannelOutput> {
			return this.http.post<DescribeSignalingChannelOutput>(this.baseUri + 'describeSignalingChannel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the most current information about the specified stream. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.
		 * Post describeStream
		 * @return {DescribeStreamOutput} Success
		 */
		DescribeStream(requestBody: DescribeStreamPostBody): Observable<DescribeStreamOutput> {
			return this.http.post<DescribeStreamOutput>(this.baseUri + 'describeStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets an endpoint for a specified stream for either reading or writing. Use this endpoint in your application to read from the specified stream (using the <code>GetMedia</code> or <code>GetMediaForFragmentList</code> operations) or write to it (using the <code>PutMedia</code> operation). </p> <note> <p>The returned endpoint does not have the API name appended. The client needs to add the API name to the returned endpoint.</p> </note> <p>In the request, specify the stream either by <code>StreamName</code> or <code>StreamARN</code>.</p>
		 * Post getDataEndpoint
		 * @return {GetDataEndpointOutput} Success
		 */
		GetDataEndpoint(requestBody: GetDataEndpointPostBody): Observable<GetDataEndpointOutput> {
			return this.http.post<GetDataEndpointOutput>(this.baseUri + 'getDataEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides an endpoint for the specified signaling channel to send and receive messages. This API uses the <code>SingleMasterChannelEndpointConfiguration</code> input parameter, which consists of the <code>Protocols</code> and <code>Role</code> properties.</p> <p> <code>Protocols</code> is used to determine the communication mechanism. For example, if you specify <code>WSS</code> as the protocol, this API produces a secure websocket endpoint. If you specify <code>HTTPS</code> as the protocol, this API generates an HTTPS endpoint. </p> <p> <code>Role</code> determines the messaging permissions. A <code>MASTER</code> role results in this API generating an endpoint that a client can use to communicate with any of the viewers on the channel. A <code>VIEWER</code> role results in this API generating an endpoint that a client can use to communicate only with a <code>MASTER</code>. </p>
		 * Post getSignalingChannelEndpoint
		 * @return {GetSignalingChannelEndpointOutput} Success
		 */
		GetSignalingChannelEndpoint(requestBody: GetSignalingChannelEndpointPostBody): Observable<GetSignalingChannelEndpointOutput> {
			return this.http.post<GetSignalingChannelEndpointOutput>(this.baseUri + 'getSignalingChannelEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns an array of edge configurations associated with the specified Edge Agent.</p> <p>In the request, you must specify the Edge Agent <code>HubDeviceArn</code>.</p>
		 * Post listEdgeAgentConfigurations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListEdgeAgentConfigurationsOutput} Success
		 */
		ListEdgeAgentConfigurations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListEdgeAgentConfigurationsPostBody): Observable<ListEdgeAgentConfigurationsOutput> {
			return this.http.post<ListEdgeAgentConfigurationsOutput>(this.baseUri + 'listEdgeAgentConfigurations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an array of <code>ChannelInfo</code> objects. Each object describes a signaling channel. To retrieve only those channels that satisfy a specific condition, you can specify a <code>ChannelNameCondition</code>.
		 * Post listSignalingChannels
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSignalingChannelsOutput} Success
		 */
		ListSignalingChannels(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListSignalingChannelsPostBody): Observable<ListSignalingChannelsOutput> {
			return this.http.post<ListSignalingChannelsOutput>(this.baseUri + 'listSignalingChannels?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an array of <code>StreamInfo</code> objects. Each object describes a stream. To retrieve only streams that satisfy a specific condition, you can specify a <code>StreamNameCondition</code>.
		 * Post listStreams
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListStreamsOutput} Success
		 */
		ListStreams(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListStreamsPostBody): Observable<ListStreamsOutput> {
			return this.http.post<ListStreamsOutput>(this.baseUri + 'listStreams?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of tags associated with the specified signaling channel.
		 * Post ListTagsForResource
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourcePostBody): Observable<ListTagsForResourceOutput> {
			return this.http.post<ListTagsForResourceOutput>(this.baseUri + 'ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of tags associated with the specified stream.</p> <p>In the request, you must specify either the <code>StreamName</code> or the <code>StreamARN</code>. </p>
		 * Post listTagsForStream
		 * @return {ListTagsForStreamOutput} Success
		 */
		ListTagsForStream(requestBody: ListTagsForStreamPostBody): Observable<ListTagsForStreamOutput> {
			return this.http.post<ListTagsForStreamOutput>(this.baseUri + 'listTagsForStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>An asynchronous API that updates a stream’s existing edge configuration. The Kinesis Video Stream will sync the stream’s edge configuration with the Edge Agent IoT Greengrass component that runs on an IoT Hub Device, setup at your premise. The time to sync can vary and depends on the connectivity of the Hub Device. The <code>SyncStatus</code> will be updated as the edge configuration is acknowledged, and synced with the Edge Agent. </p> <p>If this API is invoked for the first time, a new edge configuration will be created for the stream, and the sync status will be set to <code>SYNCING</code>. You will have to wait for the sync status to reach a terminal state such as: <code>IN_SYNC</code>, or <code>SYNC_FAILED</code>, before using this API again. If you invoke this API during the syncing process, a <code>ResourceInUseException</code> will be thrown. The connectivity of the stream’s edge configuration and the Edge Agent will be retried for 15 minutes. After 15 minutes, the status will transition into the <code>SYNC_FAILED</code> state.</p>
		 * Post startEdgeConfigurationUpdate
		 * @return {StartEdgeConfigurationUpdateOutput} Success
		 */
		StartEdgeConfigurationUpdate(requestBody: StartEdgeConfigurationUpdatePostBody): Observable<StartEdgeConfigurationUpdateOutput> {
			return this.http.post<StartEdgeConfigurationUpdateOutput>(this.baseUri + 'startEdgeConfigurationUpdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds one or more tags to a signaling channel. A <i>tag</i> is a key-value pair (the value is optional) that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Billing and Cost Management and Cost Management User Guide</i>.
		 * Post TagResource
		 * @return {TagResourceOutput} Success
		 */
		TagResource(requestBody: TagResourcePostBody): Observable<TagResourceOutput> {
			return this.http.post<TagResourceOutput>(this.baseUri + 'TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds one or more tags to a stream. A <i>tag</i> is a key-value pair (the value is optional) that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Billing and Cost Management and Cost Management User Guide</i>. </p> <p>You must provide either the <code>StreamName</code> or the <code>StreamARN</code>.</p> <p>This operation requires permission for the <code>KinesisVideo:TagStream</code> action.</p> <p>A Kinesis video stream can support up to 50 tags.</p>
		 * Post tagStream
		 * @return {TagStreamOutput} Success
		 */
		TagStream(requestBody: TagStreamPostBody): Observable<TagStreamOutput> {
			return this.http.post<TagStreamOutput>(this.baseUri + 'tagStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags from a signaling channel. In the request, specify only a tag key or keys; don't specify the value. If you specify a tag key that does not exist, it's ignored.
		 * Post UntagResource
		 * @return {UntagResourceOutput} Success
		 */
		UntagResource(requestBody: UntagResourcePostBody): Observable<UntagResourceOutput> {
			return this.http.post<UntagResourceOutput>(this.baseUri + 'UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes one or more tags from a stream. In the request, specify only a tag key or keys; don't specify the value. If you specify a tag key that does not exist, it's ignored.</p> <p>In the request, you must provide the <code>StreamName</code> or <code>StreamARN</code>.</p>
		 * Post untagStream
		 * @return {UntagStreamOutput} Success
		 */
		UntagStream(requestBody: UntagStreamPostBody): Observable<UntagStreamOutput> {
			return this.http.post<UntagStreamOutput>(this.baseUri + 'untagStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Increases or decreases the stream's data retention period by the value that you specify. To indicate whether you want to increase or decrease the data retention period, specify the <code>Operation</code> parameter in the request body. In the request, you must specify either the <code>StreamName</code> or the <code>StreamARN</code>. </p> <note> <p>The retention period that you specify replaces the current value.</p> </note> <p>This operation requires permission for the <code>KinesisVideo:UpdateDataRetention</code> action.</p> <p>Changing the data retention period affects the data in the stream as follows:</p> <ul> <li> <p>If the data retention period is increased, existing data is retained for the new retention period. For example, if the data retention period is increased from one hour to seven hours, all existing data is retained for seven hours.</p> </li> <li> <p>If the data retention period is decreased, existing data is retained for the new retention period. For example, if the data retention period is decreased from seven hours to one hour, all existing data is retained for one hour, and any data older than one hour is deleted immediately.</p> </li> </ul>
		 * Post updateDataRetention
		 * @return {UpdateDataRetentionOutput} Success
		 */
		UpdateDataRetention(requestBody: UpdateDataRetentionPostBody): Observable<UpdateDataRetentionOutput> {
			return this.http.post<UpdateDataRetentionOutput>(this.baseUri + 'updateDataRetention', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the <code>StreamInfo</code> and <code>ImageProcessingConfiguration</code> fields.
		 * Post updateImageGenerationConfiguration
		 * @return {UpdateImageGenerationConfigurationOutput} Success
		 */
		UpdateImageGenerationConfiguration(requestBody: UpdateImageGenerationConfigurationPostBody): Observable<UpdateImageGenerationConfigurationOutput> {
			return this.http.post<UpdateImageGenerationConfigurationOutput>(this.baseUri + 'updateImageGenerationConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Associates a <code>SignalingChannel</code> to a stream to store the media. There are two signaling modes that can specified :</p> <ul> <li> <p>If the <code>StorageStatus</code> is disabled, no data will be stored, and the <code>StreamARN</code> parameter will not be needed. </p> </li> <li> <p>If the <code>StorageStatus</code> is enabled, the data will be stored in the <code>StreamARN</code> provided. </p> </li> </ul> <important> <p>If <code>StorageStatus</code> is enabled, direct peer-to-peer (master-viewer) connections no longer occur. Peers connect directly to the storage session. You must call the <code>JoinStorageSession</code> API to trigger an SDP offer send and establish a connection between a peer and the storage session. </p> </important>
		 * Post updateMediaStorageConfiguration
		 * @return {UpdateMediaStorageConfigurationOutput} Success
		 */
		UpdateMediaStorageConfiguration(requestBody: UpdateMediaStorageConfigurationPostBody): Observable<UpdateMediaStorageConfigurationOutput> {
			return this.http.post<UpdateMediaStorageConfigurationOutput>(this.baseUri + 'updateMediaStorageConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the notification information for a stream.
		 * Post updateNotificationConfiguration
		 * @return {UpdateNotificationConfigurationOutput} Success
		 */
		UpdateNotificationConfiguration(requestBody: UpdateNotificationConfigurationPostBody): Observable<UpdateNotificationConfigurationOutput> {
			return this.http.post<UpdateNotificationConfigurationOutput>(this.baseUri + 'updateNotificationConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the existing signaling channel. This is an asynchronous operation and takes time to complete. </p> <p>If the <code>MessageTtlSeconds</code> value is updated (either increased or reduced), it only applies to new messages sent via this channel after it's been updated. Existing messages are still expired as per the previous <code>MessageTtlSeconds</code> value.</p>
		 * Post updateSignalingChannel
		 * @return {UpdateSignalingChannelOutput} Success
		 */
		UpdateSignalingChannel(requestBody: UpdateSignalingChannelPostBody): Observable<UpdateSignalingChannelOutput> {
			return this.http.post<UpdateSignalingChannelOutput>(this.baseUri + 'updateSignalingChannel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates stream metadata, such as the device name and media type.</p> <p>You must provide the stream name or the Amazon Resource Name (ARN) of the stream.</p> <p>To make sure that you have the latest version of the stream before updating it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the <code>DescribeStream</code> API. </p> <p> <code>UpdateStream</code> is an asynchronous operation, and takes time to complete.</p>
		 * Post updateStream
		 * @return {UpdateStreamOutput} Success
		 */
		UpdateStream(requestBody: UpdateStreamPostBody): Observable<UpdateStreamOutput> {
			return this.http.post<UpdateStreamOutput>(this.baseUri + 'updateStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateSignalingChannelPostBody {

		/**
		 * A name for the signaling channel that you are creating. It must be unique for each Amazon Web Services account and Amazon Web Services Region.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ChannelName: string;

		/** A type of the signaling channel that you are creating. Currently, <code>SINGLE_MASTER</code> is the only supported channel type. */
		ChannelType?: ChannelType | null;

		/** A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type. */
		SingleMasterConfiguration?: CreateSignalingChannelPostBodySingleMasterConfiguration;

		/**
		 * A set of tags (key-value pairs) that you want to associate with this channel.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateSignalingChannelPostBodyFormProperties {

		/**
		 * A name for the signaling channel that you are creating. It must be unique for each Amazon Web Services account and Amazon Web Services Region.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ChannelName: FormControl<string | null | undefined>,

		/** A type of the signaling channel that you are creating. Currently, <code>SINGLE_MASTER</code> is the only supported channel type. */
		ChannelType: FormControl<ChannelType | null | undefined>,
	}
	export function CreateCreateSignalingChannelPostBodyFormGroup() {
		return new FormGroup<CreateSignalingChannelPostBodyFormProperties>({
			ChannelName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			ChannelType: new FormControl<ChannelType | null | undefined>(undefined),
		});

	}

	export interface CreateSignalingChannelPostBodySingleMasterConfiguration {
		MessageTtlSeconds?: number | null;
	}
	export interface CreateSignalingChannelPostBodySingleMasterConfigurationFormProperties {
		MessageTtlSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreateSignalingChannelPostBodySingleMasterConfigurationFormGroup() {
		return new FormGroup<CreateSignalingChannelPostBodySingleMasterConfigurationFormProperties>({
			MessageTtlSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateStreamPostBody {

		/**
		 * <p>The name of the device that is writing to the stream. </p> <note> <p>In the current implementation, Kinesis Video Streams does not use this name.</p> </note>
		 * Max length: 128
		 * Min length: 1
		 */
		DeviceName?: string | null;

		/**
		 * <p>A name for the stream that you are creating.</p> <p>The stream name is an identifier for the stream, and must be unique for each account and region.</p>
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName: string;

		/**
		 * <p>The media type of the stream. Consumers of the stream can use this information when processing the stream. For more information about media types, see <a href="http://www.iana.org/assignments/media-types/media-types.xhtml">Media Types</a>. If you choose to specify the <code>MediaType</code>, see <a href="https://tools.ietf.org/html/rfc6838#section-4.2">Naming Requirements</a> for guidelines.</p> <p>Example valid values include "video/h264" and "video/h264,audio/aac".</p> <p>This parameter is optional; the default value is <code>null</code> (or empty in JSON).</p>
		 * Max length: 128
		 * Min length: 1
		 */
		MediaType?: string | null;

		/**
		 * <p>The ID of the Key Management Service (KMS) key that you want Kinesis Video Streams to use to encrypt stream data.</p> <p>If no key ID is specified, the default, Kinesis Video-managed key (<code>Amazon Web Services/kinesisvideo</code>) is used.</p> <p> For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">DescribeKey</a>. </p>
		 * Max length: 2048
		 * Min length: 1
		 */
		KmsKeyId?: string | null;

		/**
		 * <p>The number of hours that you want to retain the data in the stream. Kinesis Video Streams retains the data in a data store that is associated with the stream.</p> <p>The default value is 0, indicating that the stream does not persist data.</p> <p>When the <code>DataRetentionInHours</code> value is 0, consumers can still consume the fragments that remain in the service host buffer, which has a retention time limit of 5 minutes and a retention memory limit of 200 MB. Fragments are removed from the buffer when either limit is reached.</p>
		 * Minimum: 0
		 */
		DataRetentionInHours?: number | null;

		/** A list of tags to associate with the specified stream. Each tag is a key-value pair (the value is optional). */
		Tags?: {[id: string]: string };
	}
	export interface CreateStreamPostBodyFormProperties {

		/**
		 * <p>The name of the device that is writing to the stream. </p> <note> <p>In the current implementation, Kinesis Video Streams does not use this name.</p> </note>
		 * Max length: 128
		 * Min length: 1
		 */
		DeviceName: FormControl<string | null | undefined>,

		/**
		 * <p>A name for the stream that you are creating.</p> <p>The stream name is an identifier for the stream, and must be unique for each account and region.</p>
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName: FormControl<string | null | undefined>,

		/**
		 * <p>The media type of the stream. Consumers of the stream can use this information when processing the stream. For more information about media types, see <a href="http://www.iana.org/assignments/media-types/media-types.xhtml">Media Types</a>. If you choose to specify the <code>MediaType</code>, see <a href="https://tools.ietf.org/html/rfc6838#section-4.2">Naming Requirements</a> for guidelines.</p> <p>Example valid values include "video/h264" and "video/h264,audio/aac".</p> <p>This parameter is optional; the default value is <code>null</code> (or empty in JSON).</p>
		 * Max length: 128
		 * Min length: 1
		 */
		MediaType: FormControl<string | null | undefined>,

		/**
		 * <p>The ID of the Key Management Service (KMS) key that you want Kinesis Video Streams to use to encrypt stream data.</p> <p>If no key ID is specified, the default, Kinesis Video-managed key (<code>Amazon Web Services/kinesisvideo</code>) is used.</p> <p> For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">DescribeKey</a>. </p>
		 * Max length: 2048
		 * Min length: 1
		 */
		KmsKeyId: FormControl<string | null | undefined>,

		/**
		 * <p>The number of hours that you want to retain the data in the stream. Kinesis Video Streams retains the data in a data store that is associated with the stream.</p> <p>The default value is 0, indicating that the stream does not persist data.</p> <p>When the <code>DataRetentionInHours</code> value is 0, consumers can still consume the fragments that remain in the service host buffer, which has a retention time limit of 5 minutes and a retention memory limit of 200 MB. Fragments are removed from the buffer when either limit is reached.</p>
		 * Minimum: 0
		 */
		DataRetentionInHours: FormControl<number | null | undefined>,

		/** A list of tags to associate with the specified stream. Each tag is a key-value pair (the value is optional). */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateStreamPostBodyFormGroup() {
		return new FormGroup<CreateStreamPostBodyFormProperties>({
			DeviceName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			MediaType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w\-\.\+]+/[\w\-\.\+]+(,[\w\-\.\+]+/[\w\-\.\+]+)*')]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('.+')]),
			DataRetentionInHours: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface DeleteEdgeConfigurationPostBody {

		/**
		 * The name of the stream from which to delete the edge configuration. Specify either the <code>StreamName</code> or the <code>StreamARN</code>.
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the stream. Specify either the <code>StreamName</code> or the <code>StreamARN</code>.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN?: string | null;
	}
	export interface DeleteEdgeConfigurationPostBodyFormProperties {

		/**
		 * The name of the stream from which to delete the edge configuration. Specify either the <code>StreamName</code> or the <code>StreamARN</code>.
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the stream. Specify either the <code>StreamName</code> or the <code>StreamARN</code>.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEdgeConfigurationPostBodyFormGroup() {
		return new FormGroup<DeleteEdgeConfigurationPostBodyFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
		});

	}

	export interface DeleteSignalingChannelPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the signaling channel that you want to delete.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ChannelARN: string;

		/**
		 * The current version of the signaling channel that you want to delete. You can obtain the current version by invoking the <code>DescribeSignalingChannel</code> or <code>ListSignalingChannels</code> API operations.
		 * Max length: 64
		 * Min length: 1
		 */
		CurrentVersion?: string | null;
	}
	export interface DeleteSignalingChannelPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the signaling channel that you want to delete.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ChannelARN: FormControl<string | null | undefined>,

		/**
		 * The current version of the signaling channel that you want to delete. You can obtain the current version by invoking the <code>DescribeSignalingChannel</code> or <code>ListSignalingChannels</code> API operations.
		 * Max length: 64
		 * Min length: 1
		 */
		CurrentVersion: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSignalingChannelPostBodyFormGroup() {
		return new FormGroup<DeleteSignalingChannelPostBodyFormProperties>({
			ChannelARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			CurrentVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9]+')]),
		});

	}

	export interface DeleteStreamPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the stream that you want to delete.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN: string;

		/**
		 * <p>Optional: The version of the stream that you want to delete. </p> <p>Specify the version as a safeguard to ensure that your are deleting the correct stream. To get the stream version, use the <code>DescribeStream</code> API.</p> <p>If not specified, only the <code>CreationTime</code> is checked before deleting the stream.</p>
		 * Max length: 64
		 * Min length: 1
		 */
		CurrentVersion?: string | null;
	}
	export interface DeleteStreamPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the stream that you want to delete.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN: FormControl<string | null | undefined>,

		/**
		 * <p>Optional: The version of the stream that you want to delete. </p> <p>Specify the version as a safeguard to ensure that your are deleting the correct stream. To get the stream version, use the <code>DescribeStream</code> API.</p> <p>If not specified, only the <code>CreationTime</code> is checked before deleting the stream.</p>
		 * Max length: 64
		 * Min length: 1
		 */
		CurrentVersion: FormControl<string | null | undefined>,
	}
	export function CreateDeleteStreamPostBodyFormGroup() {
		return new FormGroup<DeleteStreamPostBodyFormProperties>({
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			CurrentVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9]+')]),
		});

	}

	export interface DescribeEdgeConfigurationPostBody {

		/**
		 * The name of the stream whose edge configuration you want to update. Specify either the <code>StreamName</code> or the <code>StreamARN</code>.
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the stream. Specify either the <code>StreamName</code>or the <code>StreamARN</code>.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN?: string | null;
	}
	export interface DescribeEdgeConfigurationPostBodyFormProperties {

		/**
		 * The name of the stream whose edge configuration you want to update. Specify either the <code>StreamName</code> or the <code>StreamARN</code>.
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the stream. Specify either the <code>StreamName</code>or the <code>StreamARN</code>.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEdgeConfigurationPostBodyFormGroup() {
		return new FormGroup<DescribeEdgeConfigurationPostBodyFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
		});

	}

	export interface DescribeImageGenerationConfigurationPostBody {

		/**
		 * The name of the stream from which to retrieve the image generation configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the Kinesis video stream from which to retrieve the image generation configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN?: string | null;
	}
	export interface DescribeImageGenerationConfigurationPostBodyFormProperties {

		/**
		 * The name of the stream from which to retrieve the image generation configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the Kinesis video stream from which to retrieve the image generation configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateDescribeImageGenerationConfigurationPostBodyFormGroup() {
		return new FormGroup<DescribeImageGenerationConfigurationPostBodyFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
		});

	}

	export interface DescribeMappedResourceConfigurationPostBody {

		/**
		 * The name of the stream.
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the stream.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN?: string | null;

		/**
		 * The maximum number of results to return in the response.
		 * Minimum: 1
		 * Maximum: 1
		 */
		MaxResults?: number | null;

		/**
		 * The token to provide in your next request, to get another batch of results.
		 * Max length: 512
		 * Min length: 0
		 */
		NextToken?: string | null;
	}
	export interface DescribeMappedResourceConfigurationPostBodyFormProperties {

		/**
		 * The name of the stream.
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the stream.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return in the response.
		 * Minimum: 1
		 * Maximum: 1
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * The token to provide in your next request, to get another batch of results.
		 * Max length: 512
		 * Min length: 0
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMappedResourceConfigurationPostBodyFormGroup() {
		return new FormGroup<DescribeMappedResourceConfigurationPostBodyFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(512), Validators.pattern('[a-zA-Z0-9+/=]*')]),
		});

	}

	export interface DescribeMediaStorageConfigurationPostBody {

		/**
		 * The name of the channel.
		 * Max length: 256
		 * Min length: 1
		 */
		ChannelName?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the channel.
		 * Max length: 1024
		 * Min length: 1
		 */
		ChannelARN?: string | null;
	}
	export interface DescribeMediaStorageConfigurationPostBodyFormProperties {

		/**
		 * The name of the channel.
		 * Max length: 256
		 * Min length: 1
		 */
		ChannelName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the channel.
		 * Max length: 1024
		 * Min length: 1
		 */
		ChannelARN: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMediaStorageConfigurationPostBodyFormGroup() {
		return new FormGroup<DescribeMediaStorageConfigurationPostBodyFormProperties>({
			ChannelName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			ChannelARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
		});

	}

	export interface DescribeNotificationConfigurationPostBody {

		/**
		 * The name of the stream from which to retrieve the notification configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the Kinesis video stream from where you want to retrieve the notification configuration. You must specify either the <code>StreamName</code> or the StreamARN.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN?: string | null;
	}
	export interface DescribeNotificationConfigurationPostBodyFormProperties {

		/**
		 * The name of the stream from which to retrieve the notification configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the Kinesis video stream from where you want to retrieve the notification configuration. You must specify either the <code>StreamName</code> or the StreamARN.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateDescribeNotificationConfigurationPostBodyFormGroup() {
		return new FormGroup<DescribeNotificationConfigurationPostBodyFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
		});

	}

	export interface DescribeSignalingChannelPostBody {

		/**
		 * The name of the signaling channel that you want to describe.
		 * Max length: 256
		 * Min length: 1
		 */
		ChannelName?: string | null;

		/**
		 * The ARN of the signaling channel that you want to describe.
		 * Max length: 1024
		 * Min length: 1
		 */
		ChannelARN?: string | null;
	}
	export interface DescribeSignalingChannelPostBodyFormProperties {

		/**
		 * The name of the signaling channel that you want to describe.
		 * Max length: 256
		 * Min length: 1
		 */
		ChannelName: FormControl<string | null | undefined>,

		/**
		 * The ARN of the signaling channel that you want to describe.
		 * Max length: 1024
		 * Min length: 1
		 */
		ChannelARN: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSignalingChannelPostBodyFormGroup() {
		return new FormGroup<DescribeSignalingChannelPostBodyFormProperties>({
			ChannelName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			ChannelARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
		});

	}

	export interface DescribeStreamPostBody {

		/**
		 * The name of the stream.
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the stream.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN?: string | null;
	}
	export interface DescribeStreamPostBodyFormProperties {

		/**
		 * The name of the stream.
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the stream.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStreamPostBodyFormGroup() {
		return new FormGroup<DescribeStreamPostBodyFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
		});

	}

	export interface GetDataEndpointPostBody {

		/**
		 * The name of the stream that you want to get the endpoint for. You must specify either this parameter or a <code>StreamARN</code> in the request.
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the stream that you want to get the endpoint for. You must specify either this parameter or a <code>StreamName</code> in the request.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN?: string | null;

		/**
		 * The name of the API action for which to get an endpoint.
		 * Required
		 */
		APIName: APIName;
	}
	export interface GetDataEndpointPostBodyFormProperties {

		/**
		 * The name of the stream that you want to get the endpoint for. You must specify either this parameter or a <code>StreamARN</code> in the request.
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the stream that you want to get the endpoint for. You must specify either this parameter or a <code>StreamName</code> in the request.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN: FormControl<string | null | undefined>,

		/**
		 * The name of the API action for which to get an endpoint.
		 * Required
		 */
		APIName: FormControl<APIName | null | undefined>,
	}
	export function CreateGetDataEndpointPostBodyFormGroup() {
		return new FormGroup<GetDataEndpointPostBodyFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			APIName: new FormControl<APIName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSignalingChannelEndpointPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the signalling channel for which you want to get an endpoint.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ChannelARN: string;

		/** An object that contains the endpoint configuration for the <code>SINGLE_MASTER</code> channel type. */
		SingleMasterChannelEndpointConfiguration?: GetSignalingChannelEndpointPostBodySingleMasterChannelEndpointConfiguration;
	}
	export interface GetSignalingChannelEndpointPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the signalling channel for which you want to get an endpoint.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ChannelARN: FormControl<string | null | undefined>,
	}
	export function CreateGetSignalingChannelEndpointPostBodyFormGroup() {
		return new FormGroup<GetSignalingChannelEndpointPostBodyFormProperties>({
			ChannelARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
		});

	}

	export interface GetSignalingChannelEndpointPostBodySingleMasterChannelEndpointConfiguration {
		Protocols?: Array<ChannelProtocol>;
		Role?: ChannelRole;
	}
	export interface GetSignalingChannelEndpointPostBodySingleMasterChannelEndpointConfigurationFormProperties {
		Role: FormControl<ChannelRole | null | undefined>,
	}
	export function CreateGetSignalingChannelEndpointPostBodySingleMasterChannelEndpointConfigurationFormGroup() {
		return new FormGroup<GetSignalingChannelEndpointPostBodySingleMasterChannelEndpointConfigurationFormProperties>({
			Role: new FormControl<ChannelRole | null | undefined>(undefined),
		});

	}

	export interface ListEdgeAgentConfigurationsPostBody {

		/**
		 * The "Internet of Things (IoT) Thing" Arn of the edge agent.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		HubDeviceArn: string;

		/**
		 * The maximum number of edge configurations to return in the response. The default is 5.
		 * Minimum: 1
		 * Maximum: 10
		 */
		MaxResults?: number | null;

		/**
		 * If you specify this parameter, when the result of a <code>ListEdgeAgentConfigurations</code> operation is truncated, the call returns the <code>NextToken</code> in the response. To get another batch of edge configurations, provide this token in your next request.
		 * Max length: 512
		 * Min length: 0
		 */
		NextToken?: string | null;
	}
	export interface ListEdgeAgentConfigurationsPostBodyFormProperties {

		/**
		 * The "Internet of Things (IoT) Thing" Arn of the edge agent.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		HubDeviceArn: FormControl<string | null | undefined>,

		/**
		 * The maximum number of edge configurations to return in the response. The default is 5.
		 * Minimum: 1
		 * Maximum: 10
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * If you specify this parameter, when the result of a <code>ListEdgeAgentConfigurations</code> operation is truncated, the call returns the <code>NextToken</code> in the response. To get another batch of edge configurations, provide this token in your next request.
		 * Max length: 512
		 * Min length: 0
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEdgeAgentConfigurationsPostBodyFormGroup() {
		return new FormGroup<ListEdgeAgentConfigurationsPostBodyFormProperties>({
			HubDeviceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('arn:[a-z\d-]+:iot:[a-z0-9-]+:[0-9]+:thing/[a-zA-Z0-9_.-]+')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(512), Validators.pattern('[a-zA-Z0-9+/=]*')]),
		});

	}

	export interface ListSignalingChannelsPostBody {

		/**
		 * The maximum number of channels to return in the response. The default is 500.
		 * Minimum: 1
		 * Maximum: 10000
		 */
		MaxResults?: number | null;

		/**
		 * If you specify this parameter, when the result of a <code>ListSignalingChannels</code> operation is truncated, the call returns the <code>NextToken</code> in the response. To get another batch of channels, provide this token in your next request.
		 * Max length: 512
		 * Min length: 0
		 */
		NextToken?: string | null;

		/** An optional input parameter for the <code>ListSignalingChannels</code> API. When this parameter is specified while invoking <code>ListSignalingChannels</code>, the API returns only the channels that satisfy a condition specified in <code>ChannelNameCondition</code>. */
		ChannelNameCondition?: ListSignalingChannelsPostBodyChannelNameCondition;
	}
	export interface ListSignalingChannelsPostBodyFormProperties {

		/**
		 * The maximum number of channels to return in the response. The default is 500.
		 * Minimum: 1
		 * Maximum: 10000
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * If you specify this parameter, when the result of a <code>ListSignalingChannels</code> operation is truncated, the call returns the <code>NextToken</code> in the response. To get another batch of channels, provide this token in your next request.
		 * Max length: 512
		 * Min length: 0
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSignalingChannelsPostBodyFormGroup() {
		return new FormGroup<ListSignalingChannelsPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10000)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(512), Validators.pattern('[a-zA-Z0-9+/=]*')]),
		});

	}

	export interface ListSignalingChannelsPostBodyChannelNameCondition {
		ComparisonOperator?: ComparisonOperator;
		ComparisonValue?: string;
	}
	export interface ListSignalingChannelsPostBodyChannelNameConditionFormProperties {
		ComparisonOperator: FormControl<ComparisonOperator | null | undefined>,
		ComparisonValue: FormControl<string | null | undefined>,
	}
	export function CreateListSignalingChannelsPostBodyChannelNameConditionFormGroup() {
		return new FormGroup<ListSignalingChannelsPostBodyChannelNameConditionFormProperties>({
			ComparisonOperator: new FormControl<ComparisonOperator | null | undefined>(undefined),
			ComparisonValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListStreamsPostBody {

		/**
		 * The maximum number of streams to return in the response. The default is 10,000.
		 * Minimum: 1
		 * Maximum: 10000
		 */
		MaxResults?: number | null;

		/**
		 * If you specify this parameter, when the result of a <code>ListStreams</code> operation is truncated, the call returns the <code>NextToken</code> in the response. To get another batch of streams, provide this token in your next request.
		 * Max length: 512
		 * Min length: 0
		 */
		NextToken?: string | null;

		/** Specifies the condition that streams must satisfy to be returned when you list streams (see the <code>ListStreams</code> API). A condition has a comparison operation and a value. Currently, you can specify only the <code>BEGINS_WITH</code> operator, which finds streams whose names start with a given prefix. */
		StreamNameCondition?: ListStreamsPostBodyStreamNameCondition;
	}
	export interface ListStreamsPostBodyFormProperties {

		/**
		 * The maximum number of streams to return in the response. The default is 10,000.
		 * Minimum: 1
		 * Maximum: 10000
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * If you specify this parameter, when the result of a <code>ListStreams</code> operation is truncated, the call returns the <code>NextToken</code> in the response. To get another batch of streams, provide this token in your next request.
		 * Max length: 512
		 * Min length: 0
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStreamsPostBodyFormGroup() {
		return new FormGroup<ListStreamsPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10000)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(512), Validators.pattern('[a-zA-Z0-9+/=]*')]),
		});

	}

	export interface ListStreamsPostBodyStreamNameCondition {
		ComparisonOperator?: ComparisonOperator;
		ComparisonValue?: string;
	}
	export interface ListStreamsPostBodyStreamNameConditionFormProperties {
		ComparisonOperator: FormControl<ComparisonOperator | null | undefined>,
		ComparisonValue: FormControl<string | null | undefined>,
	}
	export function CreateListStreamsPostBodyStreamNameConditionFormGroup() {
		return new FormGroup<ListStreamsPostBodyStreamNameConditionFormProperties>({
			ComparisonOperator: new FormControl<ComparisonOperator | null | undefined>(undefined),
			ComparisonValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourcePostBody {

		/**
		 * If you specify this parameter and the result of a <code>ListTagsForResource</code> call is truncated, the response includes a token that you can use in the next request to fetch the next batch of tags.
		 * Max length: 512
		 * Min length: 0
		 */
		NextToken?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the signaling channel for which you want to list tags.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ResourceARN: string;
	}
	export interface ListTagsForResourcePostBodyFormProperties {

		/**
		 * If you specify this parameter and the result of a <code>ListTagsForResource</code> call is truncated, the response includes a token that you can use in the next request to fetch the next batch of tags.
		 * Max length: 512
		 * Min length: 0
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the signaling channel for which you want to list tags.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourcePostBodyFormGroup() {
		return new FormGroup<ListTagsForResourcePostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(512), Validators.pattern('[a-zA-Z0-9+/=]*')]),
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
		});

	}

	export interface ListTagsForStreamPostBody {

		/**
		 * If you specify this parameter and the result of a <code>ListTagsForStream</code> call is truncated, the response includes a token that you can use in the next request to fetch the next batch of tags.
		 * Max length: 512
		 * Min length: 0
		 */
		NextToken?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the stream that you want to list tags for.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN?: string | null;

		/**
		 * The name of the stream that you want to list tags for.
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName?: string | null;
	}
	export interface ListTagsForStreamPostBodyFormProperties {

		/**
		 * If you specify this parameter and the result of a <code>ListTagsForStream</code> call is truncated, the response includes a token that you can use in the next request to fetch the next batch of tags.
		 * Max length: 512
		 * Min length: 0
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the stream that you want to list tags for.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN: FormControl<string | null | undefined>,

		/**
		 * The name of the stream that you want to list tags for.
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForStreamPostBodyFormGroup() {
		return new FormGroup<ListTagsForStreamPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(512), Validators.pattern('[a-zA-Z0-9+/=]*')]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}

	export interface StartEdgeConfigurationUpdatePostBody {

		/**
		 * The name of the stream whose edge configuration you want to update. Specify either the <code>StreamName</code> or the <code>StreamARN</code>.
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the stream. Specify either the <code>StreamName</code> or the <code>StreamARN</code>.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN?: string | null;

		/**
		 * A description of the stream's edge configuration that will be used to sync with the Edge Agent IoT Greengrass component. The Edge Agent component will run on an IoT Hub Device setup at your premise.
		 * Required
		 */
		EdgeConfig: StartEdgeConfigurationUpdatePostBodyEdgeConfig;
	}
	export interface StartEdgeConfigurationUpdatePostBodyFormProperties {

		/**
		 * The name of the stream whose edge configuration you want to update. Specify either the <code>StreamName</code> or the <code>StreamARN</code>.
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the stream. Specify either the <code>StreamName</code> or the <code>StreamARN</code>.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateStartEdgeConfigurationUpdatePostBodyFormGroup() {
		return new FormGroup<StartEdgeConfigurationUpdatePostBodyFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
		});

	}

	export interface StartEdgeConfigurationUpdatePostBodyEdgeConfig {
		HubDeviceArn?: string;
		RecorderConfig?: RecorderConfig;
		UploaderConfig?: UploaderConfig;
		DeletionConfig?: DeletionConfig;
	}
	export interface StartEdgeConfigurationUpdatePostBodyEdgeConfigFormProperties {
		HubDeviceArn: FormControl<string | null | undefined>,
	}
	export function CreateStartEdgeConfigurationUpdatePostBodyEdgeConfigFormGroup() {
		return new FormGroup<StartEdgeConfigurationUpdatePostBodyEdgeConfigFormProperties>({
			HubDeviceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the signaling channel to which you want to add tags.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ResourceARN: string;

		/**
		 * A list of tags to associate with the specified signaling channel. Each tag is a key-value pair.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags: Array<Tag>;
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the signaling channel to which you want to add tags.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
		});

	}

	export interface TagStreamPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the resource that you want to add the tag or tags to.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN?: string | null;

		/**
		 * The name of the stream that you want to add the tag or tags to.
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName?: string | null;

		/**
		 * A list of tags to associate with the specified stream. Each tag is a key-value pair (the value is optional).
		 * Required
		 */
		Tags: {[id: string]: string };
	}
	export interface TagStreamPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the resource that you want to add the tag or tags to.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN: FormControl<string | null | undefined>,

		/**
		 * The name of the stream that you want to add the tag or tags to.
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName: FormControl<string | null | undefined>,

		/**
		 * A list of tags to associate with the specified stream. Each tag is a key-value pair (the value is optional).
		 * Required
		 */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagStreamPostBodyFormGroup() {
		return new FormGroup<TagStreamPostBodyFormProperties>({
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourcePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the signaling channel from which you want to remove tags.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ResourceARN: string;

		/**
		 * A list of the keys of the tags that you want to remove.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		TagKeyList: Array<string>;
	}
	export interface UntagResourcePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the signaling channel from which you want to remove tags.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourcePostBodyFormGroup() {
		return new FormGroup<UntagResourcePostBodyFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
		});

	}

	export interface UntagStreamPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the stream that you want to remove tags from.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN?: string | null;

		/**
		 * The name of the stream that you want to remove tags from.
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName?: string | null;

		/**
		 * A list of the keys of the tags that you want to remove.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		TagKeyList: Array<string>;
	}
	export interface UntagStreamPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the stream that you want to remove tags from.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN: FormControl<string | null | undefined>,

		/**
		 * The name of the stream that you want to remove tags from.
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName: FormControl<string | null | undefined>,
	}
	export function CreateUntagStreamPostBodyFormGroup() {
		return new FormGroup<UntagStreamPostBodyFormProperties>({
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}

	export interface UpdateDataRetentionPostBody {

		/**
		 * The name of the stream whose retention period you want to change.
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the stream whose retention period you want to change.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN?: string | null;

		/**
		 * The version of the stream whose retention period you want to change. To get the version, call either the <code>DescribeStream</code> or the <code>ListStreams</code> API.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		CurrentVersion: string;

		/**
		 * Indicates whether you want to increase or decrease the retention period.
		 * Required
		 */
		Operation: UpdateDataRetentionOperation;

		/**
		 * The retention period, in hours. The value you specify replaces the current value. The maximum value for this parameter is 87600 (ten years).
		 * Required
		 * Minimum: 1
		 */
		DataRetentionChangeInHours: number;
	}
	export interface UpdateDataRetentionPostBodyFormProperties {

		/**
		 * The name of the stream whose retention period you want to change.
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the stream whose retention period you want to change.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN: FormControl<string | null | undefined>,

		/**
		 * The version of the stream whose retention period you want to change. To get the version, call either the <code>DescribeStream</code> or the <code>ListStreams</code> API.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		CurrentVersion: FormControl<string | null | undefined>,

		/**
		 * Indicates whether you want to increase or decrease the retention period.
		 * Required
		 */
		Operation: FormControl<UpdateDataRetentionOperation | null | undefined>,

		/**
		 * The retention period, in hours. The value you specify replaces the current value. The maximum value for this parameter is 87600 (ten years).
		 * Required
		 * Minimum: 1
		 */
		DataRetentionChangeInHours: FormControl<number | null | undefined>,
	}
	export function CreateUpdateDataRetentionPostBodyFormGroup() {
		return new FormGroup<UpdateDataRetentionPostBodyFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			CurrentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9]+')]),
			Operation: new FormControl<UpdateDataRetentionOperation | null | undefined>(undefined, [Validators.required]),
			DataRetentionChangeInHours: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
		});

	}

	export interface UpdateImageGenerationConfigurationPostBody {

		/**
		 * The name of the stream from which to update the image generation configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the Kinesis video stream from where you want to update the image generation configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN?: string | null;

		/** The structure that contains the information required for the KVS images delivery. If null, the configuration will be deleted from the stream. */
		ImageGenerationConfiguration?: UpdateImageGenerationConfigurationPostBodyImageGenerationConfiguration;
	}
	export interface UpdateImageGenerationConfigurationPostBodyFormProperties {

		/**
		 * The name of the stream from which to update the image generation configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the Kinesis video stream from where you want to update the image generation configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateUpdateImageGenerationConfigurationPostBodyFormGroup() {
		return new FormGroup<UpdateImageGenerationConfigurationPostBodyFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
		});

	}

	export interface UpdateImageGenerationConfigurationPostBodyImageGenerationConfiguration {
		Status?: ConfigurationStatus;
		ImageSelectorType?: ImageSelectorType;
		DestinationConfig?: ImageGenerationDestinationConfig;
		SamplingInterval?: number | null;
		Format?: Format;
		FormatConfig?: FormatConfig;
		WidthPixels?: number | null;
		HeightPixels?: number | null;
	}
	export interface UpdateImageGenerationConfigurationPostBodyImageGenerationConfigurationFormProperties {
		Status: FormControl<ConfigurationStatus | null | undefined>,
		ImageSelectorType: FormControl<ImageSelectorType | null | undefined>,
		SamplingInterval: FormControl<number | null | undefined>,
		Format: FormControl<Format | null | undefined>,
		WidthPixels: FormControl<number | null | undefined>,
		HeightPixels: FormControl<number | null | undefined>,
	}
	export function CreateUpdateImageGenerationConfigurationPostBodyImageGenerationConfigurationFormGroup() {
		return new FormGroup<UpdateImageGenerationConfigurationPostBodyImageGenerationConfigurationFormProperties>({
			Status: new FormControl<ConfigurationStatus | null | undefined>(undefined),
			ImageSelectorType: new FormControl<ImageSelectorType | null | undefined>(undefined),
			SamplingInterval: new FormControl<number | null | undefined>(undefined),
			Format: new FormControl<Format | null | undefined>(undefined),
			WidthPixels: new FormControl<number | null | undefined>(undefined),
			HeightPixels: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateMediaStorageConfigurationPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the channel.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ChannelARN: string;

		/**
		 * A structure that encapsulates, or contains, the media storage configuration properties.
		 * Required
		 */
		MediaStorageConfiguration: UpdateMediaStorageConfigurationPostBodyMediaStorageConfiguration;
	}
	export interface UpdateMediaStorageConfigurationPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the channel.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ChannelARN: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMediaStorageConfigurationPostBodyFormGroup() {
		return new FormGroup<UpdateMediaStorageConfigurationPostBodyFormProperties>({
			ChannelARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
		});

	}

	export interface UpdateMediaStorageConfigurationPostBodyMediaStorageConfiguration {
		StreamARN?: string;
		Status?: ConfigurationStatus;
	}
	export interface UpdateMediaStorageConfigurationPostBodyMediaStorageConfigurationFormProperties {
		StreamARN: FormControl<string | null | undefined>,
		Status: FormControl<ConfigurationStatus | null | undefined>,
	}
	export function CreateUpdateMediaStorageConfigurationPostBodyMediaStorageConfigurationFormGroup() {
		return new FormGroup<UpdateMediaStorageConfigurationPostBodyMediaStorageConfigurationFormProperties>({
			StreamARN: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ConfigurationStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateNotificationConfigurationPostBody {

		/**
		 * The name of the stream from which to update the notification configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the Kinesis video stream from where you want to update the notification configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN?: string | null;

		/** The structure that contains the notification information for the KVS images delivery. If this parameter is null, the configuration will be deleted from the stream. */
		NotificationConfiguration?: UpdateNotificationConfigurationPostBodyNotificationConfiguration;
	}
	export interface UpdateNotificationConfigurationPostBodyFormProperties {

		/**
		 * The name of the stream from which to update the notification configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the Kinesis video stream from where you want to update the notification configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNotificationConfigurationPostBodyFormGroup() {
		return new FormGroup<UpdateNotificationConfigurationPostBodyFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
		});

	}

	export interface UpdateNotificationConfigurationPostBodyNotificationConfiguration {
		Status?: ConfigurationStatus;
		DestinationConfig?: NotificationDestinationConfig;
	}
	export interface UpdateNotificationConfigurationPostBodyNotificationConfigurationFormProperties {
		Status: FormControl<ConfigurationStatus | null | undefined>,
	}
	export function CreateUpdateNotificationConfigurationPostBodyNotificationConfigurationFormGroup() {
		return new FormGroup<UpdateNotificationConfigurationPostBodyNotificationConfigurationFormProperties>({
			Status: new FormControl<ConfigurationStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateSignalingChannelPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the signaling channel that you want to update.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ChannelARN: string;

		/**
		 * The current version of the signaling channel that you want to update.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		CurrentVersion: string;

		/** A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type. */
		SingleMasterConfiguration?: UpdateSignalingChannelPostBodySingleMasterConfiguration;
	}
	export interface UpdateSignalingChannelPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the signaling channel that you want to update.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ChannelARN: FormControl<string | null | undefined>,

		/**
		 * The current version of the signaling channel that you want to update.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		CurrentVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSignalingChannelPostBodyFormGroup() {
		return new FormGroup<UpdateSignalingChannelPostBodyFormProperties>({
			ChannelARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			CurrentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9]+')]),
		});

	}

	export interface UpdateSignalingChannelPostBodySingleMasterConfiguration {
		MessageTtlSeconds?: number | null;
	}
	export interface UpdateSignalingChannelPostBodySingleMasterConfigurationFormProperties {
		MessageTtlSeconds: FormControl<number | null | undefined>,
	}
	export function CreateUpdateSignalingChannelPostBodySingleMasterConfigurationFormGroup() {
		return new FormGroup<UpdateSignalingChannelPostBodySingleMasterConfigurationFormProperties>({
			MessageTtlSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateStreamPostBody {

		/**
		 * <p>The name of the stream whose metadata you want to update.</p> <p>The stream name is an identifier for the stream, and must be unique for each account and region.</p>
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName?: string | null;

		/**
		 * The ARN of the stream whose metadata you want to update.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN?: string | null;

		/**
		 * The version of the stream whose metadata you want to update.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		CurrentVersion: string;

		/**
		 * <p>The name of the device that is writing to the stream. </p> <note> <p> In the current implementation, Kinesis Video Streams does not use this name. </p> </note>
		 * Max length: 128
		 * Min length: 1
		 */
		DeviceName?: string | null;

		/**
		 * <p>The stream's media type. Use <code>MediaType</code> to specify the type of content that the stream contains to the consumers of the stream. For more information about media types, see <a href="http://www.iana.org/assignments/media-types/media-types.xhtml">Media Types</a>. If you choose to specify the <code>MediaType</code>, see <a href="https://tools.ietf.org/html/rfc6838#section-4.2">Naming Requirements</a>.</p> <p>To play video on the console, you must specify the correct video type. For example, if the video in the stream is H.264, specify <code>video/h264</code> as the <code>MediaType</code>.</p>
		 * Max length: 128
		 * Min length: 1
		 */
		MediaType?: string | null;
	}
	export interface UpdateStreamPostBodyFormProperties {

		/**
		 * <p>The name of the stream whose metadata you want to update.</p> <p>The stream name is an identifier for the stream, and must be unique for each account and region.</p>
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName: FormControl<string | null | undefined>,

		/**
		 * The ARN of the stream whose metadata you want to update.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN: FormControl<string | null | undefined>,

		/**
		 * The version of the stream whose metadata you want to update.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		CurrentVersion: FormControl<string | null | undefined>,

		/**
		 * <p>The name of the device that is writing to the stream. </p> <note> <p> In the current implementation, Kinesis Video Streams does not use this name. </p> </note>
		 * Max length: 128
		 * Min length: 1
		 */
		DeviceName: FormControl<string | null | undefined>,

		/**
		 * <p>The stream's media type. Use <code>MediaType</code> to specify the type of content that the stream contains to the consumers of the stream. For more information about media types, see <a href="http://www.iana.org/assignments/media-types/media-types.xhtml">Media Types</a>. If you choose to specify the <code>MediaType</code>, see <a href="https://tools.ietf.org/html/rfc6838#section-4.2">Naming Requirements</a>.</p> <p>To play video on the console, you must specify the correct video type. For example, if the video in the stream is H.264, specify <code>video/h264</code> as the <code>MediaType</code>.</p>
		 * Max length: 128
		 * Min length: 1
		 */
		MediaType: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStreamPostBodyFormGroup() {
		return new FormGroup<UpdateStreamPostBodyFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			CurrentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9]+')]),
			DeviceName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			MediaType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w\-\.\+]+/[\w\-\.\+]+(,[\w\-\.\+]+/[\w\-\.\+]+)*')]),
		});

	}

}

