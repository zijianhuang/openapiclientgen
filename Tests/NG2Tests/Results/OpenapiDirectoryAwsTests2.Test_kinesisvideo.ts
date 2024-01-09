import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateSignalingChannelOutput {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		ChannelARN?: string | null;
	}
	export interface CreateSignalingChannelOutputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		ChannelARN: FormControl<string | null | undefined>,
	}
	export function CreateCreateSignalingChannelOutputFormGroup() {
		return new FormGroup<CreateSignalingChannelOutputFormProperties>({
			ChannelARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
		});

	}


	/** A key and value pair that is associated with the specified signaling channel. */
	export interface Tag {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		Value: string;
	}

	/** A key and value pair that is associated with the specified signaling channel. */
	export interface TagFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(0), Validators.pattern('[\p{L}\p{Z}\p{N}_.:/=+\-@]*')]),
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

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN?: string | null;
	}
	export interface CreateStreamOutputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateCreateStreamOutputFormGroup() {
		return new FormGroup<CreateStreamOutputFormProperties>({
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
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

	export interface DeleteSignalingChannelOutput {
	}
	export interface DeleteSignalingChannelOutputFormProperties {
	}
	export function CreateDeleteSignalingChannelOutputFormGroup() {
		return new FormGroup<DeleteSignalingChannelOutputFormProperties>({
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

	export interface DescribeSignalingChannelOutput {

		/** A structure that encapsulates a signaling channel's metadata and properties. */
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

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ChannelName?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		ChannelARN?: string | null;
		ChannelType?: ChannelInfoChannelType | null;
		ChannelStatus?: ChannelInfoChannelStatus | null;
		CreationTime?: Date | null;

		/** A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type. */
		SingleMasterConfiguration?: SingleMasterConfiguration;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Version?: string | null;
	}

	/** A structure that encapsulates a signaling channel's metadata and properties. */
	export interface ChannelInfoFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ChannelName: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		ChannelARN: FormControl<string | null | undefined>,
		ChannelType: FormControl<ChannelInfoChannelType | null | undefined>,
		ChannelStatus: FormControl<ChannelInfoChannelStatus | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Version: FormControl<string | null | undefined>,
	}
	export function CreateChannelInfoFormGroup() {
		return new FormGroup<ChannelInfoFormProperties>({
			ChannelName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			ChannelARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			ChannelType: new FormControl<ChannelInfoChannelType | null | undefined>(undefined),
			ChannelStatus: new FormControl<ChannelInfoChannelStatus | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9]+')]),
		});

	}

	export enum ChannelInfoChannelType { SINGLE_MASTER = 0 }

	export enum ChannelInfoChannelStatus { CREATING = 0, ACTIVE = 1, UPDATING = 2, DELETING = 3 }


	/** A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type. */
	export interface SingleMasterConfiguration {

		/**
		 * Minimum: 5
		 * Maximum: 120
		 */
		MessageTtlSeconds?: number | null;
	}

	/** A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type. */
	export interface SingleMasterConfigurationFormProperties {

		/**
		 * Minimum: 5
		 * Maximum: 120
		 */
		MessageTtlSeconds: FormControl<number | null | undefined>,
	}
	export function CreateSingleMasterConfigurationFormGroup() {
		return new FormGroup<SingleMasterConfigurationFormProperties>({
			MessageTtlSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(5), Validators.max(120)]),
		});

	}

	export interface DescribeStreamOutput {

		/** An object describing a Kinesis video stream. */
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

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		DeviceName?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		MediaType?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KmsKeyId?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Version?: string | null;
		Status?: ChannelInfoChannelStatus | null;
		CreationTime?: Date | null;

		/** Minimum: 0 */
		DataRetentionInHours?: number | null;
	}

	/** An object describing a Kinesis video stream. */
	export interface StreamInfoFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		DeviceName: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		MediaType: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KmsKeyId: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Version: FormControl<string | null | undefined>,
		Status: FormControl<ChannelInfoChannelStatus | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,

		/** Minimum: 0 */
		DataRetentionInHours: FormControl<number | null | undefined>,
	}
	export function CreateStreamInfoFormGroup() {
		return new FormGroup<StreamInfoFormProperties>({
			DeviceName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			MediaType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w\-\.\+]+/[\w\-\.\+]+(,[\w\-\.\+]+/[\w\-\.\+]+)*')]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('.+')]),
			Version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9]+')]),
			Status: new FormControl<ChannelInfoChannelStatus | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			DataRetentionInHours: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface GetDataEndpointOutput {
		DataEndpoint?: string | null;
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


	/** An object that describes the endpoint of the signaling channel returned by the <code>GetSignalingChannelEndpoint</code> API. */
	export interface ResourceEndpointListItem {
		Protocol?: ResourceEndpointListItemProtocol | null;
		ResourceEndpoint?: string | null;
	}

	/** An object that describes the endpoint of the signaling channel returned by the <code>GetSignalingChannelEndpoint</code> API. */
	export interface ResourceEndpointListItemFormProperties {
		Protocol: FormControl<ResourceEndpointListItemProtocol | null | undefined>,
		ResourceEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateResourceEndpointListItemFormGroup() {
		return new FormGroup<ResourceEndpointListItemFormProperties>({
			Protocol: new FormControl<ResourceEndpointListItemProtocol | null | undefined>(undefined),
			ResourceEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResourceEndpointListItemProtocol { WSS = 0, HTTPS = 1 }

	export enum ChannelProtocol { WSS = 0, HTTPS = 1 }

	export enum ChannelRole { MASTER = 0, VIEWER = 1 }

	export interface ListSignalingChannelsOutput {
		ChannelInfoList?: Array<ChannelInfo>;

		/**
		 * Max length: 512
		 * Min length: 0
		 */
		NextToken?: string | null;
	}
	export interface ListSignalingChannelsOutputFormProperties {

		/**
		 * Max length: 512
		 * Min length: 0
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSignalingChannelsOutputFormGroup() {
		return new FormGroup<ListSignalingChannelsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(0), Validators.pattern('[a-zA-Z0-9+/=]*')]),
		});

	}

	export enum ComparisonOperator { BEGINS_WITH = 0 }

	export interface ListStreamsOutput {
		StreamInfoList?: Array<StreamInfo>;

		/**
		 * Max length: 512
		 * Min length: 0
		 */
		NextToken?: string | null;
	}
	export interface ListStreamsOutputFormProperties {

		/**
		 * Max length: 512
		 * Min length: 0
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStreamsOutputFormGroup() {
		return new FormGroup<ListStreamsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(0), Validators.pattern('[a-zA-Z0-9+/=]*')]),
		});

	}

	export interface ListTagsForResourceOutput {

		/**
		 * Max length: 512
		 * Min length: 0
		 */
		NextToken?: string | null;
		Tags?: ResourceTags;
	}
	export interface ListTagsForResourceOutputFormProperties {

		/**
		 * Max length: 512
		 * Min length: 0
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceOutputFormGroup() {
		return new FormGroup<ListTagsForResourceOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(0), Validators.pattern('[a-zA-Z0-9+/=]*')]),
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

		/**
		 * Max length: 512
		 * Min length: 0
		 */
		NextToken?: string | null;
		Tags?: ResourceTags;
	}
	export interface ListTagsForStreamOutputFormProperties {

		/**
		 * Max length: 512
		 * Min length: 0
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForStreamOutputFormGroup() {
		return new FormGroup<ListTagsForStreamOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(0), Validators.pattern('[a-zA-Z0-9+/=]*')]),
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

	export enum APIName { PUT_MEDIA = 0, GET_MEDIA = 1, LIST_FRAGMENTS = 2, GET_MEDIA_FOR_FRAGMENT_LIST = 3, GET_HLS_STREAMING_SESSION_URL = 4, GET_DASH_STREAMING_SESSION_URL = 5, GET_CLIP = 6 }

	export enum ChannelType { SINGLE_MASTER = 0 }

	export enum Status { CREATING = 0, ACTIVE = 1, UPDATING = 2, DELETING = 3 }


	/** An optional input parameter for the <code>ListSignalingChannels</code> API. When this parameter is specified while invoking <code>ListSignalingChannels</code>, the API returns only the channels that satisfy a condition specified in <code>ChannelNameCondition</code>. */
	export interface ChannelNameCondition {
		ComparisonOperator?: ComparisonOperator | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ComparisonValue?: string | null;
	}

	/** An optional input parameter for the <code>ListSignalingChannels</code> API. When this parameter is specified while invoking <code>ListSignalingChannels</code>, the API returns only the channels that satisfy a condition specified in <code>ChannelNameCondition</code>. */
	export interface ChannelNameConditionFormProperties {
		ComparisonOperator: FormControl<ComparisonOperator | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ComparisonValue: FormControl<string | null | undefined>,
	}
	export function CreateChannelNameConditionFormGroup() {
		return new FormGroup<ChannelNameConditionFormProperties>({
			ComparisonOperator: new FormControl<ComparisonOperator | null | undefined>(undefined),
			ComparisonValue: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}

	export interface CreateSignalingChannelInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ChannelName: string;
		ChannelType?: ChannelInfoChannelType | null;

		/** A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type. */
		SingleMasterConfiguration?: SingleMasterConfiguration;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateSignalingChannelInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ChannelName: FormControl<string | null | undefined>,
		ChannelType: FormControl<ChannelInfoChannelType | null | undefined>,
	}
	export function CreateCreateSignalingChannelInputFormGroup() {
		return new FormGroup<CreateSignalingChannelInputFormProperties>({
			ChannelName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			ChannelType: new FormControl<ChannelInfoChannelType | null | undefined>(undefined),
		});

	}

	export interface CreateStreamInput {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		DeviceName?: string | null;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		MediaType?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KmsKeyId?: string | null;

		/** Minimum: 0 */
		DataRetentionInHours?: number | null;
		Tags?: ResourceTags;
	}
	export interface CreateStreamInputFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		DeviceName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		MediaType: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KmsKeyId: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		DataRetentionInHours: FormControl<number | null | undefined>,
	}
	export function CreateCreateStreamInputFormGroup() {
		return new FormGroup<CreateStreamInputFormProperties>({
			DeviceName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			MediaType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w\-\.\+]+/[\w\-\.\+]+(,[\w\-\.\+]+/[\w\-\.\+]+)*')]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('.+')]),
			DataRetentionInHours: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface DeleteSignalingChannelInput {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ChannelARN: string;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		CurrentVersion?: string | null;
	}
	export interface DeleteSignalingChannelInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ChannelARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		CurrentVersion: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSignalingChannelInputFormGroup() {
		return new FormGroup<DeleteSignalingChannelInputFormProperties>({
			ChannelARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			CurrentVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9]+')]),
		});

	}

	export interface DeleteStreamInput {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN: string;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		CurrentVersion?: string | null;
	}
	export interface DeleteStreamInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		CurrentVersion: FormControl<string | null | undefined>,
	}
	export function CreateDeleteStreamInputFormGroup() {
		return new FormGroup<DeleteStreamInputFormProperties>({
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			CurrentVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9]+')]),
		});

	}

	export interface DescribeSignalingChannelInput {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ChannelName?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		ChannelARN?: string | null;
	}
	export interface DescribeSignalingChannelInputFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ChannelName: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		ChannelARN: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSignalingChannelInputFormGroup() {
		return new FormGroup<DescribeSignalingChannelInputFormProperties>({
			ChannelName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			ChannelARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
		});

	}

	export interface DescribeStreamInput {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN?: string | null;
	}
	export interface DescribeStreamInputFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStreamInputFormGroup() {
		return new FormGroup<DescribeStreamInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
		});

	}

	export interface GetDataEndpointInput {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN?: string | null;

		/** Required */
		APIName: APIName;
	}
	export interface GetDataEndpointInputFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN: FormControl<string | null | undefined>,

		/** Required */
		APIName: FormControl<APIName | null | undefined>,
	}
	export function CreateGetDataEndpointInputFormGroup() {
		return new FormGroup<GetDataEndpointInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			APIName: new FormControl<APIName | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that contains the endpoint configuration for the <code>SINGLE_MASTER</code> channel type.  */
	export interface SingleMasterChannelEndpointConfiguration {

		/**
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		Protocols?: Array<ChannelProtocol>;
		Role?: ChannelRole | null;
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

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ChannelARN: string;

		/** An object that contains the endpoint configuration for the <code>SINGLE_MASTER</code> channel type. */
		SingleMasterChannelEndpointConfiguration?: SingleMasterChannelEndpointConfiguration;
	}
	export interface GetSignalingChannelEndpointInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ChannelARN: FormControl<string | null | undefined>,
	}
	export function CreateGetSignalingChannelEndpointInputFormGroup() {
		return new FormGroup<GetSignalingChannelEndpointInputFormProperties>({
			ChannelARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
		});

	}

	export interface ListSignalingChannelsInput {

		/**
		 * Minimum: 1
		 * Maximum: 10000
		 */
		MaxResults?: number | null;

		/**
		 * Max length: 512
		 * Min length: 0
		 */
		NextToken?: string | null;

		/** An optional input parameter for the <code>ListSignalingChannels</code> API. When this parameter is specified while invoking <code>ListSignalingChannels</code>, the API returns only the channels that satisfy a condition specified in <code>ChannelNameCondition</code>. */
		ChannelNameCondition?: ChannelNameCondition;
	}
	export interface ListSignalingChannelsInputFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 10000
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 0
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSignalingChannelsInputFormGroup() {
		return new FormGroup<ListSignalingChannelsInputFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10000)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(0), Validators.pattern('[a-zA-Z0-9+/=]*')]),
		});

	}


	/** Specifies the condition that streams must satisfy to be returned when you list streams (see the <code>ListStreams</code> API). A condition has a comparison operation and a value. Currently, you can specify only the <code>BEGINS_WITH</code> operator, which finds streams whose names start with a given prefix.  */
	export interface StreamNameCondition {
		ComparisonOperator?: ComparisonOperator | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ComparisonValue?: string | null;
	}

	/** Specifies the condition that streams must satisfy to be returned when you list streams (see the <code>ListStreams</code> API). A condition has a comparison operation and a value. Currently, you can specify only the <code>BEGINS_WITH</code> operator, which finds streams whose names start with a given prefix.  */
	export interface StreamNameConditionFormProperties {
		ComparisonOperator: FormControl<ComparisonOperator | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ComparisonValue: FormControl<string | null | undefined>,
	}
	export function CreateStreamNameConditionFormGroup() {
		return new FormGroup<StreamNameConditionFormProperties>({
			ComparisonOperator: new FormControl<ComparisonOperator | null | undefined>(undefined),
			ComparisonValue: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}

	export interface ListStreamsInput {

		/**
		 * Minimum: 1
		 * Maximum: 10000
		 */
		MaxResults?: number | null;

		/**
		 * Max length: 512
		 * Min length: 0
		 */
		NextToken?: string | null;

		/** Specifies the condition that streams must satisfy to be returned when you list streams (see the <code>ListStreams</code> API). A condition has a comparison operation and a value. Currently, you can specify only the <code>BEGINS_WITH</code> operator, which finds streams whose names start with a given prefix. */
		StreamNameCondition?: StreamNameCondition;
	}
	export interface ListStreamsInputFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 10000
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 0
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStreamsInputFormGroup() {
		return new FormGroup<ListStreamsInputFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10000)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(0), Validators.pattern('[a-zA-Z0-9+/=]*')]),
		});

	}

	export interface ListTagsForResourceInput {

		/**
		 * Max length: 512
		 * Min length: 0
		 */
		NextToken?: string | null;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ResourceARN: string;
	}
	export interface ListTagsForResourceInputFormProperties {

		/**
		 * Max length: 512
		 * Min length: 0
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceInputFormGroup() {
		return new FormGroup<ListTagsForResourceInputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(0), Validators.pattern('[a-zA-Z0-9+/=]*')]),
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
		});

	}

	export interface ListTagsForStreamInput {

		/**
		 * Max length: 512
		 * Min length: 0
		 */
		NextToken?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName?: string | null;
	}
	export interface ListTagsForStreamInputFormProperties {

		/**
		 * Max length: 512
		 * Min length: 0
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForStreamInputFormGroup() {
		return new FormGroup<ListTagsForStreamInputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(0), Validators.pattern('[a-zA-Z0-9+/=]*')]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}

	export interface TagResourceInput {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ResourceARN: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags: Array<Tag>;
	}
	export interface TagResourceInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
		});

	}

	export interface TagStreamInput {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName?: string | null;

		/** Required */
		Tags: ResourceTags;
	}
	export interface TagStreamInputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName: FormControl<string | null | undefined>,
	}
	export function CreateTagStreamInputFormGroup() {
		return new FormGroup<TagStreamInputFormProperties>({
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}

	export interface UntagResourceInput {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ResourceARN: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		TagKeyList: Array<string>;
	}
	export interface UntagResourceInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
		});

	}

	export interface UntagStreamInput {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName?: string | null;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		TagKeyList: Array<string>;
	}
	export interface UntagStreamInputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName: FormControl<string | null | undefined>,
	}
	export function CreateUntagStreamInputFormGroup() {
		return new FormGroup<UntagStreamInputFormProperties>({
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}

	export enum UpdateDataRetentionOperation { INCREASE_DATA_RETENTION = 0, DECREASE_DATA_RETENTION = 1 }

	export interface UpdateDataRetentionInput {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN?: string | null;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		CurrentVersion: string;

		/** Required */
		Operation: UpdateDataRetentionOperation;

		/**
		 * Required
		 * Minimum: 1
		 */
		DataRetentionChangeInHours: number;
	}
	export interface UpdateDataRetentionInputFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		CurrentVersion: FormControl<string | null | undefined>,

		/** Required */
		Operation: FormControl<UpdateDataRetentionOperation | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 */
		DataRetentionChangeInHours: FormControl<number | null | undefined>,
	}
	export function CreateUpdateDataRetentionInputFormGroup() {
		return new FormGroup<UpdateDataRetentionInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			CurrentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9]+')]),
			Operation: new FormControl<UpdateDataRetentionOperation | null | undefined>(undefined, [Validators.required]),
			DataRetentionChangeInHours: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
		});

	}

	export interface UpdateSignalingChannelInput {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ChannelARN: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		CurrentVersion: string;

		/** A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type. */
		SingleMasterConfiguration?: SingleMasterConfiguration;
	}
	export interface UpdateSignalingChannelInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ChannelARN: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		CurrentVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSignalingChannelInputFormGroup() {
		return new FormGroup<UpdateSignalingChannelInputFormProperties>({
			ChannelARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			CurrentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9]+')]),
		});

	}

	export interface UpdateStreamInput {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN?: string | null;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		CurrentVersion: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		DeviceName?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		MediaType?: string | null;
	}
	export interface UpdateStreamInputFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		CurrentVersion: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		DeviceName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		MediaType: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStreamInputFormGroup() {
		return new FormGroup<UpdateStreamInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			CurrentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9]+')]),
			DeviceName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			MediaType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w\-\.\+]+/[\w\-\.\+]+(,[\w\-\.\+]+/[\w\-\.\+]+)*')]),
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
		 * Adds one or more tags to a signaling channel. A <i>tag</i> is a key-value pair (the value is optional) that you can define and assign to AWS resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>.
		 * Post TagResource
		 * @return {TagResourceOutput} Success
		 */
		TagResource(requestBody: TagResourcePostBody): Observable<TagResourceOutput> {
			return this.http.post<TagResourceOutput>(this.baseUri + 'TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds one or more tags to a stream. A <i>tag</i> is a key-value pair (the value is optional) that you can define and assign to AWS resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p> <p>You must provide either the <code>StreamName</code> or the <code>StreamARN</code>.</p> <p>This operation requires permission for the <code>KinesisVideo:TagStream</code> action.</p> <p>Kinesis video streams support up to 50 tags.</p>
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
		 * A name for the signaling channel that you are creating. It must be unique for each AWS account and AWS Region.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ChannelName: string;

		/** A type of the signaling channel that you are creating. Currently, <code>SINGLE_MASTER</code> is the only supported channel type. */
		ChannelType?: ChannelInfoChannelType | null;

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
		 * A name for the signaling channel that you are creating. It must be unique for each AWS account and AWS Region.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ChannelName: FormControl<string | null | undefined>,

		/** A type of the signaling channel that you are creating. Currently, <code>SINGLE_MASTER</code> is the only supported channel type. */
		ChannelType: FormControl<ChannelInfoChannelType | null | undefined>,
	}
	export function CreateCreateSignalingChannelPostBodyFormGroup() {
		return new FormGroup<CreateSignalingChannelPostBodyFormProperties>({
			ChannelName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			ChannelType: new FormControl<ChannelInfoChannelType | null | undefined>(undefined),
		});

	}

	export interface CreateSignalingChannelPostBodySingleMasterConfiguration {

		/**
		 * Minimum: 5
		 * Maximum: 120
		 */
		MessageTtlSeconds?: number | null;
	}
	export interface CreateSignalingChannelPostBodySingleMasterConfigurationFormProperties {

		/**
		 * Minimum: 5
		 * Maximum: 120
		 */
		MessageTtlSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreateSignalingChannelPostBodySingleMasterConfigurationFormGroup() {
		return new FormGroup<CreateSignalingChannelPostBodySingleMasterConfigurationFormProperties>({
			MessageTtlSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(5), Validators.max(120)]),
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
		 * <p>The ID of the AWS Key Management Service (AWS KMS) key that you want Kinesis Video Streams to use to encrypt stream data.</p> <p>If no key ID is specified, the default, Kinesis Video-managed key (<code>aws/kinesisvideo</code>) is used.</p> <p> For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">DescribeKey</a>. </p>
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
		 * <p>The ID of the AWS Key Management Service (AWS KMS) key that you want Kinesis Video Streams to use to encrypt stream data.</p> <p>If no key ID is specified, the default, Kinesis Video-managed key (<code>aws/kinesisvideo</code>) is used.</p> <p> For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">DescribeKey</a>. </p>
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
			DeviceName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			MediaType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w\-\.\+]+/[\w\-\.\+]+(,[\w\-\.\+]+/[\w\-\.\+]+)*')]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('.+')]),
			DataRetentionInHours: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
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
			ChannelARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			CurrentVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9]+')]),
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
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			CurrentVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9]+')]),
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
			ChannelName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			ChannelARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
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
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
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
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
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
			ChannelARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
		});

	}

	export interface GetSignalingChannelEndpointPostBodySingleMasterChannelEndpointConfiguration {

		/**
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		Protocols?: Array<ChannelProtocol>;
		Role?: ChannelRole | null;
	}
	export interface GetSignalingChannelEndpointPostBodySingleMasterChannelEndpointConfigurationFormProperties {
		Role: FormControl<ChannelRole | null | undefined>,
	}
	export function CreateGetSignalingChannelEndpointPostBodySingleMasterChannelEndpointConfigurationFormGroup() {
		return new FormGroup<GetSignalingChannelEndpointPostBodySingleMasterChannelEndpointConfigurationFormProperties>({
			Role: new FormControl<ChannelRole | null | undefined>(undefined),
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
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(0), Validators.pattern('[a-zA-Z0-9+/=]*')]),
		});

	}

	export interface ListSignalingChannelsPostBodyChannelNameCondition {
		ComparisonOperator?: ComparisonOperator | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ComparisonValue?: string | null;
	}
	export interface ListSignalingChannelsPostBodyChannelNameConditionFormProperties {
		ComparisonOperator: FormControl<ComparisonOperator | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ComparisonValue: FormControl<string | null | undefined>,
	}
	export function CreateListSignalingChannelsPostBodyChannelNameConditionFormGroup() {
		return new FormGroup<ListSignalingChannelsPostBodyChannelNameConditionFormProperties>({
			ComparisonOperator: new FormControl<ComparisonOperator | null | undefined>(undefined),
			ComparisonValue: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
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
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(0), Validators.pattern('[a-zA-Z0-9+/=]*')]),
		});

	}

	export interface ListStreamsPostBodyStreamNameCondition {
		ComparisonOperator?: ComparisonOperator | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ComparisonValue?: string | null;
	}
	export interface ListStreamsPostBodyStreamNameConditionFormProperties {
		ComparisonOperator: FormControl<ComparisonOperator | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ComparisonValue: FormControl<string | null | undefined>,
	}
	export function CreateListStreamsPostBodyStreamNameConditionFormGroup() {
		return new FormGroup<ListStreamsPostBodyStreamNameConditionFormProperties>({
			ComparisonOperator: new FormControl<ComparisonOperator | null | undefined>(undefined),
			ComparisonValue: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
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
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(0), Validators.pattern('[a-zA-Z0-9+/=]*')]),
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
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
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(0), Validators.pattern('[a-zA-Z0-9+/=]*')]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
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
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
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
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
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
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
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
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
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
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			CurrentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9]+')]),
			Operation: new FormControl<UpdateDataRetentionOperation | null | undefined>(undefined, [Validators.required]),
			DataRetentionChangeInHours: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
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
			ChannelARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			CurrentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9]+')]),
		});

	}

	export interface UpdateSignalingChannelPostBodySingleMasterConfiguration {

		/**
		 * Minimum: 5
		 * Maximum: 120
		 */
		MessageTtlSeconds?: number | null;
	}
	export interface UpdateSignalingChannelPostBodySingleMasterConfigurationFormProperties {

		/**
		 * Minimum: 5
		 * Maximum: 120
		 */
		MessageTtlSeconds: FormControl<number | null | undefined>,
	}
	export function CreateUpdateSignalingChannelPostBodySingleMasterConfigurationFormGroup() {
		return new FormGroup<UpdateSignalingChannelPostBodySingleMasterConfigurationFormProperties>({
			MessageTtlSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(5), Validators.max(120)]),
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
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			CurrentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9]+')]),
			DeviceName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			MediaType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w\-\.\+]+/[\w\-\.\+]+(,[\w\-\.\+]+/[\w\-\.\+]+)*')]),
		});

	}

}

