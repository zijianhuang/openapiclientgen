import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateChannelResponse {

		/** Required */
		Arn: string;

		/** Required */
		ChannelName: string;

		/** Required */
		ChannelGroupName: string;

		/** Required */
		CreatedAt: Date;

		/** Required */
		ModifiedAt: Date;
		Description?: string;

		/** The list of ingest endpoints. */
		IngestEndpoints?: Array<IngestEndpoint>;
		Tags?: TagMap;
	}
	export interface CreateChannelResponseFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		ChannelName: FormControl<string | null | undefined>,

		/** Required */
		ChannelGroupName: FormControl<string | null | undefined>,

		/** Required */
		CreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		ModifiedAt: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelResponseFormGroup() {
		return new FormGroup<CreateChannelResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChannelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChannelGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ModifiedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The ingest domain URL where the source stream should be sent. */
	export interface IngestEndpoint {
		Id?: string;
		Url?: string;
	}

	/** The ingest domain URL where the source stream should be sent. */
	export interface IngestEndpointFormProperties {
		Id: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateIngestEndpointFormGroup() {
		return new FormGroup<IngestEndpointFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
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

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
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

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface CreateChannelGroupResponse {

		/** Required */
		ChannelGroupName: string;

		/** Required */
		Arn: string;

		/** Required */
		EgressDomain: string;

		/** Required */
		CreatedAt: Date;

		/** Required */
		ModifiedAt: Date;
		Description?: string;
		Tags?: TagMap;
	}
	export interface CreateChannelGroupResponseFormProperties {

		/** Required */
		ChannelGroupName: FormControl<string | null | undefined>,

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		EgressDomain: FormControl<string | null | undefined>,

		/** Required */
		CreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		ModifiedAt: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelGroupResponseFormGroup() {
		return new FormGroup<CreateChannelGroupResponseFormProperties>({
			ChannelGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EgressDomain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ModifiedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateOriginEndpointResponse {

		/** Required */
		Arn: string;

		/** Required */
		ChannelGroupName: string;

		/** Required */
		ChannelName: string;

		/** Required */
		OriginEndpointName: string;

		/** Required */
		ContainerType: ContainerType;

		/** Required */
		Segment: Segment;

		/** Required */
		CreatedAt: Date;

		/** Required */
		ModifiedAt: Date;
		Description?: string;
		StartoverWindowSeconds?: number | null;
		HlsManifests?: Array<GetHlsManifestConfiguration>;
		LowLatencyHlsManifests?: Array<GetLowLatencyHlsManifestConfiguration>;
		Tags?: TagMap;
	}
	export interface CreateOriginEndpointResponseFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		ChannelGroupName: FormControl<string | null | undefined>,

		/** Required */
		ChannelName: FormControl<string | null | undefined>,

		/** Required */
		OriginEndpointName: FormControl<string | null | undefined>,

		/** Required */
		ContainerType: FormControl<ContainerType | null | undefined>,

		/** Required */
		CreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		ModifiedAt: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		StartoverWindowSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreateOriginEndpointResponseFormGroup() {
		return new FormGroup<CreateOriginEndpointResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChannelGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChannelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OriginEndpointName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContainerType: new FormControl<ContainerType | null | undefined>(undefined, [Validators.required]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ModifiedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			StartoverWindowSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ContainerType { TS = 'TS', CMAF = 'CMAF' }


	/** The segment configuration, including the segment name, duration, and other configuration values. */
	export interface Segment {
		SegmentDurationSeconds?: number | null;
		SegmentName?: string;
		TsUseAudioRenditionGroup?: boolean | null;
		IncludeIframeOnlyStreams?: boolean | null;
		TsIncludeDvbSubtitles?: boolean | null;
		Scte?: Scte;

		/** The parameters for encrypting content. */
		Encryption?: Encryption;
	}

	/** The segment configuration, including the segment name, duration, and other configuration values. */
	export interface SegmentFormProperties {
		SegmentDurationSeconds: FormControl<number | null | undefined>,
		SegmentName: FormControl<string | null | undefined>,
		TsUseAudioRenditionGroup: FormControl<boolean | null | undefined>,
		IncludeIframeOnlyStreams: FormControl<boolean | null | undefined>,
		TsIncludeDvbSubtitles: FormControl<boolean | null | undefined>,
	}
	export function CreateSegmentFormGroup() {
		return new FormGroup<SegmentFormProperties>({
			SegmentDurationSeconds: new FormControl<number | null | undefined>(undefined),
			SegmentName: new FormControl<string | null | undefined>(undefined),
			TsUseAudioRenditionGroup: new FormControl<boolean | null | undefined>(undefined),
			IncludeIframeOnlyStreams: new FormControl<boolean | null | undefined>(undefined),
			TsIncludeDvbSubtitles: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The SCTE configuration. */
	export interface Scte {
		ScteFilter?: Array<ScteFilter>;
	}

	/** The SCTE configuration. */
	export interface ScteFormProperties {
	}
	export function CreateScteFormGroup() {
		return new FormGroup<ScteFormProperties>({
		});

	}

	export enum ScteFilter { SPLICE_INSERT = 'SPLICE_INSERT', BREAK = 'BREAK', PROVIDER_ADVERTISEMENT = 'PROVIDER_ADVERTISEMENT', DISTRIBUTOR_ADVERTISEMENT = 'DISTRIBUTOR_ADVERTISEMENT', PROVIDER_PLACEMENT_OPPORTUNITY = 'PROVIDER_PLACEMENT_OPPORTUNITY', DISTRIBUTOR_PLACEMENT_OPPORTUNITY = 'DISTRIBUTOR_PLACEMENT_OPPORTUNITY', PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY = 'PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY', DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY = 'DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY', PROGRAM = 'PROGRAM' }


	/** The parameters for encrypting content. */
	export interface Encryption {
		ConstantInitializationVector?: string;

		/** Required */
		EncryptionMethod: EncryptionMethod;
		KeyRotationIntervalSeconds?: number | null;

		/** Required */
		SpekeKeyProvider: SpekeKeyProvider;
	}

	/** The parameters for encrypting content. */
	export interface EncryptionFormProperties {
		ConstantInitializationVector: FormControl<string | null | undefined>,
		KeyRotationIntervalSeconds: FormControl<number | null | undefined>,
	}
	export function CreateEncryptionFormGroup() {
		return new FormGroup<EncryptionFormProperties>({
			ConstantInitializationVector: new FormControl<string | null | undefined>(undefined),
			KeyRotationIntervalSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The encryption type. */
	export interface EncryptionMethod {
		TsEncryptionMethod?: TsEncryptionMethod;
		CmafEncryptionMethod?: CmafEncryptionMethod;
	}

	/** The encryption type. */
	export interface EncryptionMethodFormProperties {
		TsEncryptionMethod: FormControl<TsEncryptionMethod | null | undefined>,
		CmafEncryptionMethod: FormControl<CmafEncryptionMethod | null | undefined>,
	}
	export function CreateEncryptionMethodFormGroup() {
		return new FormGroup<EncryptionMethodFormProperties>({
			TsEncryptionMethod: new FormControl<TsEncryptionMethod | null | undefined>(undefined),
			CmafEncryptionMethod: new FormControl<CmafEncryptionMethod | null | undefined>(undefined),
		});

	}

	export enum TsEncryptionMethod { AES_128 = 'AES_128', SAMPLE_AES = 'SAMPLE_AES' }

	export enum CmafEncryptionMethod { CENC = 'CENC', CBCS = 'CBCS' }


	/** The parameters for the SPEKE key provider. */
	export interface SpekeKeyProvider {

		/** Required */
		EncryptionContractConfiguration: EncryptionContractConfiguration;

		/** Required */
		ResourceId: string;

		/** Required */
		DrmSystems: Array<DrmSystem>;

		/** Required */
		RoleArn: string;

		/** Required */
		Url: string;
	}

	/** The parameters for the SPEKE key provider. */
	export interface SpekeKeyProviderFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,

		/** Required */
		Url: FormControl<string | null | undefined>,
	}
	export function CreateSpekeKeyProviderFormGroup() {
		return new FormGroup<SpekeKeyProviderFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Configure one or more content encryption keys for your endpoints that use SPEKE Version 2.0. The encryption contract defines which content keys are used to encrypt the audio and video tracks in your stream. To configure the encryption contract, specify which audio and video encryption presets to use. */
	export interface EncryptionContractConfiguration {

		/** Required */
		PresetSpeke20Audio: PresetSpeke20Audio;

		/** Required */
		PresetSpeke20Video: PresetSpeke20Video;
	}

	/** Configure one or more content encryption keys for your endpoints that use SPEKE Version 2.0. The encryption contract defines which content keys are used to encrypt the audio and video tracks in your stream. To configure the encryption contract, specify which audio and video encryption presets to use. */
	export interface EncryptionContractConfigurationFormProperties {

		/** Required */
		PresetSpeke20Audio: FormControl<PresetSpeke20Audio | null | undefined>,

		/** Required */
		PresetSpeke20Video: FormControl<PresetSpeke20Video | null | undefined>,
	}
	export function CreateEncryptionContractConfigurationFormGroup() {
		return new FormGroup<EncryptionContractConfigurationFormProperties>({
			PresetSpeke20Audio: new FormControl<PresetSpeke20Audio | null | undefined>(undefined, [Validators.required]),
			PresetSpeke20Video: new FormControl<PresetSpeke20Video | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PresetSpeke20Audio { PRESET_AUDIO_1 = 'PRESET_AUDIO_1', PRESET_AUDIO_2 = 'PRESET_AUDIO_2', PRESET_AUDIO_3 = 'PRESET_AUDIO_3', SHARED = 'SHARED', UNENCRYPTED = 'UNENCRYPTED' }

	export enum PresetSpeke20Video { PRESET_VIDEO_1 = 'PRESET_VIDEO_1', PRESET_VIDEO_2 = 'PRESET_VIDEO_2', PRESET_VIDEO_3 = 'PRESET_VIDEO_3', PRESET_VIDEO_4 = 'PRESET_VIDEO_4', PRESET_VIDEO_5 = 'PRESET_VIDEO_5', PRESET_VIDEO_6 = 'PRESET_VIDEO_6', PRESET_VIDEO_7 = 'PRESET_VIDEO_7', PRESET_VIDEO_8 = 'PRESET_VIDEO_8', SHARED = 'SHARED', UNENCRYPTED = 'UNENCRYPTED' }

	export enum DrmSystem { CLEAR_KEY_AES_128 = 'CLEAR_KEY_AES_128', FAIRPLAY = 'FAIRPLAY', PLAYREADY = 'PLAYREADY', WIDEVINE = 'WIDEVINE' }


	/** Retrieve the HTTP live streaming (HLS) manifest configuration. */
	export interface GetHlsManifestConfiguration {

		/** Required */
		ManifestName: string;

		/** Required */
		Url: string;
		ChildManifestName?: string;
		ManifestWindowSeconds?: number | null;
		ProgramDateTimeIntervalSeconds?: number | null;

		/** The SCTE configuration. */
		ScteHls?: ScteHls;
	}

	/** Retrieve the HTTP live streaming (HLS) manifest configuration. */
	export interface GetHlsManifestConfigurationFormProperties {

		/** Required */
		ManifestName: FormControl<string | null | undefined>,

		/** Required */
		Url: FormControl<string | null | undefined>,
		ChildManifestName: FormControl<string | null | undefined>,
		ManifestWindowSeconds: FormControl<number | null | undefined>,
		ProgramDateTimeIntervalSeconds: FormControl<number | null | undefined>,
	}
	export function CreateGetHlsManifestConfigurationFormGroup() {
		return new FormGroup<GetHlsManifestConfigurationFormProperties>({
			ManifestName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChildManifestName: new FormControl<string | null | undefined>(undefined),
			ManifestWindowSeconds: new FormControl<number | null | undefined>(undefined),
			ProgramDateTimeIntervalSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The SCTE configuration. */
	export interface ScteHls {
		AdMarkerHls?: AdMarkerHls;
	}

	/** The SCTE configuration. */
	export interface ScteHlsFormProperties {
		AdMarkerHls: FormControl<AdMarkerHls | null | undefined>,
	}
	export function CreateScteHlsFormGroup() {
		return new FormGroup<ScteHlsFormProperties>({
			AdMarkerHls: new FormControl<AdMarkerHls | null | undefined>(undefined),
		});

	}

	export enum AdMarkerHls { DATERANGE = 'DATERANGE' }


	/** Retrieve the low-latency HTTP live streaming (HLS) manifest configuration. */
	export interface GetLowLatencyHlsManifestConfiguration {

		/** Required */
		ManifestName: string;

		/** Required */
		Url: string;
		ChildManifestName?: string;
		ManifestWindowSeconds?: number | null;
		ProgramDateTimeIntervalSeconds?: number | null;

		/** The SCTE configuration. */
		ScteHls?: ScteHls;
	}

	/** Retrieve the low-latency HTTP live streaming (HLS) manifest configuration. */
	export interface GetLowLatencyHlsManifestConfigurationFormProperties {

		/** Required */
		ManifestName: FormControl<string | null | undefined>,

		/** Required */
		Url: FormControl<string | null | undefined>,
		ChildManifestName: FormControl<string | null | undefined>,
		ManifestWindowSeconds: FormControl<number | null | undefined>,
		ProgramDateTimeIntervalSeconds: FormControl<number | null | undefined>,
	}
	export function CreateGetLowLatencyHlsManifestConfigurationFormGroup() {
		return new FormGroup<GetLowLatencyHlsManifestConfigurationFormProperties>({
			ManifestName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChildManifestName: new FormControl<string | null | undefined>(undefined),
			ManifestWindowSeconds: new FormControl<number | null | undefined>(undefined),
			ProgramDateTimeIntervalSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Create an HTTP live streaming (HLS) manifest configuration. */
	export interface CreateHlsManifestConfiguration {

		/** Required */
		ManifestName: string;
		ChildManifestName?: string;

		/** The SCTE configuration. */
		ScteHls?: ScteHls;
		ManifestWindowSeconds?: number | null;
		ProgramDateTimeIntervalSeconds?: number | null;
	}

	/** Create an HTTP live streaming (HLS) manifest configuration. */
	export interface CreateHlsManifestConfigurationFormProperties {

		/** Required */
		ManifestName: FormControl<string | null | undefined>,
		ChildManifestName: FormControl<string | null | undefined>,
		ManifestWindowSeconds: FormControl<number | null | undefined>,
		ProgramDateTimeIntervalSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreateHlsManifestConfigurationFormGroup() {
		return new FormGroup<CreateHlsManifestConfigurationFormProperties>({
			ManifestName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChildManifestName: new FormControl<string | null | undefined>(undefined),
			ManifestWindowSeconds: new FormControl<number | null | undefined>(undefined),
			ProgramDateTimeIntervalSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Create a low-latency HTTP live streaming (HLS) manifest configuration. */
	export interface CreateLowLatencyHlsManifestConfiguration {

		/** Required */
		ManifestName: string;
		ChildManifestName?: string;

		/** The SCTE configuration. */
		ScteHls?: ScteHls;
		ManifestWindowSeconds?: number | null;
		ProgramDateTimeIntervalSeconds?: number | null;
	}

	/** Create a low-latency HTTP live streaming (HLS) manifest configuration. */
	export interface CreateLowLatencyHlsManifestConfigurationFormProperties {

		/** Required */
		ManifestName: FormControl<string | null | undefined>,
		ChildManifestName: FormControl<string | null | undefined>,
		ManifestWindowSeconds: FormControl<number | null | undefined>,
		ProgramDateTimeIntervalSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreateLowLatencyHlsManifestConfigurationFormGroup() {
		return new FormGroup<CreateLowLatencyHlsManifestConfigurationFormProperties>({
			ManifestName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChildManifestName: new FormControl<string | null | undefined>(undefined),
			ManifestWindowSeconds: new FormControl<number | null | undefined>(undefined),
			ProgramDateTimeIntervalSeconds: new FormControl<number | null | undefined>(undefined),
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

	export interface DeleteChannelGroupResponse {
	}
	export interface DeleteChannelGroupResponseFormProperties {
	}
	export function CreateDeleteChannelGroupResponseFormGroup() {
		return new FormGroup<DeleteChannelGroupResponseFormProperties>({
		});

	}

	export interface DeleteChannelPolicyResponse {
	}
	export interface DeleteChannelPolicyResponseFormProperties {
	}
	export function CreateDeleteChannelPolicyResponseFormGroup() {
		return new FormGroup<DeleteChannelPolicyResponseFormProperties>({
		});

	}

	export interface DeleteOriginEndpointResponse {
	}
	export interface DeleteOriginEndpointResponseFormProperties {
	}
	export function CreateDeleteOriginEndpointResponseFormGroup() {
		return new FormGroup<DeleteOriginEndpointResponseFormProperties>({
		});

	}

	export interface DeleteOriginEndpointPolicyResponse {
	}
	export interface DeleteOriginEndpointPolicyResponseFormProperties {
	}
	export function CreateDeleteOriginEndpointPolicyResponseFormGroup() {
		return new FormGroup<DeleteOriginEndpointPolicyResponseFormProperties>({
		});

	}

	export interface GetChannelResponse {

		/** Required */
		Arn: string;

		/** Required */
		ChannelName: string;

		/** Required */
		ChannelGroupName: string;

		/** Required */
		CreatedAt: Date;

		/** Required */
		ModifiedAt: Date;
		Description?: string;

		/** The list of ingest endpoints. */
		IngestEndpoints?: Array<IngestEndpoint>;
		Tags?: TagMap;
	}
	export interface GetChannelResponseFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		ChannelName: FormControl<string | null | undefined>,

		/** Required */
		ChannelGroupName: FormControl<string | null | undefined>,

		/** Required */
		CreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		ModifiedAt: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateGetChannelResponseFormGroup() {
		return new FormGroup<GetChannelResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChannelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChannelGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ModifiedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetChannelGroupResponse {

		/** Required */
		ChannelGroupName: string;

		/** Required */
		Arn: string;

		/** Required */
		EgressDomain: string;

		/** Required */
		CreatedAt: Date;

		/** Required */
		ModifiedAt: Date;
		Description?: string;
		Tags?: TagMap;
	}
	export interface GetChannelGroupResponseFormProperties {

		/** Required */
		ChannelGroupName: FormControl<string | null | undefined>,

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		EgressDomain: FormControl<string | null | undefined>,

		/** Required */
		CreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		ModifiedAt: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateGetChannelGroupResponseFormGroup() {
		return new FormGroup<GetChannelGroupResponseFormProperties>({
			ChannelGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EgressDomain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ModifiedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetChannelPolicyResponse {

		/** Required */
		ChannelGroupName: string;

		/** Required */
		ChannelName: string;

		/** Required */
		Policy: string;
	}
	export interface GetChannelPolicyResponseFormProperties {

		/** Required */
		ChannelGroupName: FormControl<string | null | undefined>,

		/** Required */
		ChannelName: FormControl<string | null | undefined>,

		/** Required */
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateGetChannelPolicyResponseFormGroup() {
		return new FormGroup<GetChannelPolicyResponseFormProperties>({
			ChannelGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChannelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetOriginEndpointResponse {

		/** Required */
		Arn: string;

		/** Required */
		ChannelGroupName: string;

		/** Required */
		ChannelName: string;

		/** Required */
		OriginEndpointName: string;

		/** Required */
		ContainerType: ContainerType;

		/**
		 * The segment configuration, including the segment name, duration, and other configuration values.
		 * Required
		 */
		Segment: Segment;

		/** Required */
		CreatedAt: Date;

		/** Required */
		ModifiedAt: Date;
		Description?: string;
		StartoverWindowSeconds?: number | null;
		HlsManifests?: Array<GetHlsManifestConfiguration>;
		LowLatencyHlsManifests?: Array<GetLowLatencyHlsManifestConfiguration>;
		Tags?: TagMap;
	}
	export interface GetOriginEndpointResponseFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		ChannelGroupName: FormControl<string | null | undefined>,

		/** Required */
		ChannelName: FormControl<string | null | undefined>,

		/** Required */
		OriginEndpointName: FormControl<string | null | undefined>,

		/** Required */
		ContainerType: FormControl<ContainerType | null | undefined>,

		/** Required */
		CreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		ModifiedAt: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		StartoverWindowSeconds: FormControl<number | null | undefined>,
	}
	export function CreateGetOriginEndpointResponseFormGroup() {
		return new FormGroup<GetOriginEndpointResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChannelGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChannelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OriginEndpointName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContainerType: new FormControl<ContainerType | null | undefined>(undefined, [Validators.required]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ModifiedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			StartoverWindowSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetOriginEndpointPolicyResponse {

		/** Required */
		ChannelGroupName: string;

		/** Required */
		ChannelName: string;

		/** Required */
		OriginEndpointName: string;

		/** Required */
		Policy: string;
	}
	export interface GetOriginEndpointPolicyResponseFormProperties {

		/** Required */
		ChannelGroupName: FormControl<string | null | undefined>,

		/** Required */
		ChannelName: FormControl<string | null | undefined>,

		/** Required */
		OriginEndpointName: FormControl<string | null | undefined>,

		/** Required */
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateGetOriginEndpointPolicyResponseFormGroup() {
		return new FormGroup<GetOriginEndpointPolicyResponseFormProperties>({
			ChannelGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChannelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OriginEndpointName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListChannelGroupsResponse {
		Items?: Array<ChannelGroupListConfiguration>;
		NextToken?: string;
	}
	export interface ListChannelGroupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChannelGroupsResponseFormGroup() {
		return new FormGroup<ListChannelGroupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration of the channel group. */
	export interface ChannelGroupListConfiguration {

		/** Required */
		ChannelGroupName: string;

		/** Required */
		Arn: string;

		/** Required */
		CreatedAt: Date;

		/** Required */
		ModifiedAt: Date;
		Description?: string;
	}

	/** The configuration of the channel group. */
	export interface ChannelGroupListConfigurationFormProperties {

		/** Required */
		ChannelGroupName: FormControl<string | null | undefined>,

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		CreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		ModifiedAt: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateChannelGroupListConfigurationFormGroup() {
		return new FormGroup<ChannelGroupListConfigurationFormProperties>({
			ChannelGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ModifiedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListChannelsResponse {
		Items?: Array<ChannelListConfiguration>;
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


	/** The configuration of the channel. */
	export interface ChannelListConfiguration {

		/** Required */
		Arn: string;

		/** Required */
		ChannelName: string;

		/** Required */
		ChannelGroupName: string;

		/** Required */
		CreatedAt: Date;

		/** Required */
		ModifiedAt: Date;
		Description?: string;
	}

	/** The configuration of the channel. */
	export interface ChannelListConfigurationFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		ChannelName: FormControl<string | null | undefined>,

		/** Required */
		ChannelGroupName: FormControl<string | null | undefined>,

		/** Required */
		CreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		ModifiedAt: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateChannelListConfigurationFormGroup() {
		return new FormGroup<ChannelListConfigurationFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChannelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChannelGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ModifiedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListOriginEndpointsResponse {
		Items?: Array<OriginEndpointListConfiguration>;
		NextToken?: string;
	}
	export interface ListOriginEndpointsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOriginEndpointsResponseFormGroup() {
		return new FormGroup<ListOriginEndpointsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration of the origin endpoint. */
	export interface OriginEndpointListConfiguration {

		/** Required */
		Arn: string;

		/** Required */
		ChannelGroupName: string;

		/** Required */
		ChannelName: string;

		/** Required */
		OriginEndpointName: string;

		/** Required */
		ContainerType: ContainerType;
		Description?: string;
		CreatedAt?: Date;
		ModifiedAt?: Date;
		HlsManifests?: Array<ListHlsManifestConfiguration>;
		LowLatencyHlsManifests?: Array<ListLowLatencyHlsManifestConfiguration>;
	}

	/** The configuration of the origin endpoint. */
	export interface OriginEndpointListConfigurationFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		ChannelGroupName: FormControl<string | null | undefined>,

		/** Required */
		ChannelName: FormControl<string | null | undefined>,

		/** Required */
		OriginEndpointName: FormControl<string | null | undefined>,

		/** Required */
		ContainerType: FormControl<ContainerType | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		ModifiedAt: FormControl<Date | null | undefined>,
	}
	export function CreateOriginEndpointListConfigurationFormGroup() {
		return new FormGroup<OriginEndpointListConfigurationFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChannelGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChannelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OriginEndpointName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContainerType: new FormControl<ContainerType | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			ModifiedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** List the HTTP live streaming (HLS) manifest configuration. */
	export interface ListHlsManifestConfiguration {

		/** Required */
		ManifestName: string;
		ChildManifestName?: string;
		Url?: string;
	}

	/** List the HTTP live streaming (HLS) manifest configuration. */
	export interface ListHlsManifestConfigurationFormProperties {

		/** Required */
		ManifestName: FormControl<string | null | undefined>,
		ChildManifestName: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateListHlsManifestConfigurationFormGroup() {
		return new FormGroup<ListHlsManifestConfigurationFormProperties>({
			ManifestName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChildManifestName: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List the low-latency HTTP live streaming (HLS) manifest configuration. */
	export interface ListLowLatencyHlsManifestConfiguration {

		/** Required */
		ManifestName: string;
		ChildManifestName?: string;
		Url?: string;
	}

	/** List the low-latency HTTP live streaming (HLS) manifest configuration. */
	export interface ListLowLatencyHlsManifestConfigurationFormProperties {

		/** Required */
		ManifestName: FormControl<string | null | undefined>,
		ChildManifestName: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateListLowLatencyHlsManifestConfigurationFormGroup() {
		return new FormGroup<ListLowLatencyHlsManifestConfigurationFormProperties>({
			ManifestName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChildManifestName: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface PutChannelPolicyResponse {
	}
	export interface PutChannelPolicyResponseFormProperties {
	}
	export function CreatePutChannelPolicyResponseFormGroup() {
		return new FormGroup<PutChannelPolicyResponseFormProperties>({
		});

	}

	export interface PutOriginEndpointPolicyResponse {
	}
	export interface PutOriginEndpointPolicyResponseFormProperties {
	}
	export function CreatePutOriginEndpointPolicyResponseFormGroup() {
		return new FormGroup<PutOriginEndpointPolicyResponseFormProperties>({
		});

	}

	export interface UpdateChannelResponse {

		/** Required */
		Arn: string;

		/** Required */
		ChannelName: string;

		/** Required */
		ChannelGroupName: string;

		/** Required */
		CreatedAt: Date;

		/** Required */
		ModifiedAt: Date;
		Description?: string;

		/** The list of ingest endpoints. */
		IngestEndpoints?: Array<IngestEndpoint>;
		Tags?: TagMap;
	}
	export interface UpdateChannelResponseFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		ChannelName: FormControl<string | null | undefined>,

		/** Required */
		ChannelGroupName: FormControl<string | null | undefined>,

		/** Required */
		CreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		ModifiedAt: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelResponseFormGroup() {
		return new FormGroup<UpdateChannelResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChannelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChannelGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ModifiedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateChannelGroupResponse {

		/** Required */
		ChannelGroupName: string;

		/** Required */
		Arn: string;

		/** Required */
		EgressDomain: string;

		/** Required */
		CreatedAt: Date;

		/** Required */
		ModifiedAt: Date;
		Description?: string;
		Tags?: TagMap;
	}
	export interface UpdateChannelGroupResponseFormProperties {

		/** Required */
		ChannelGroupName: FormControl<string | null | undefined>,

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		EgressDomain: FormControl<string | null | undefined>,

		/** Required */
		CreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		ModifiedAt: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelGroupResponseFormGroup() {
		return new FormGroup<UpdateChannelGroupResponseFormProperties>({
			ChannelGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EgressDomain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ModifiedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateOriginEndpointResponse {

		/** Required */
		Arn: string;

		/** Required */
		ChannelGroupName: string;

		/** Required */
		ChannelName: string;

		/** Required */
		OriginEndpointName: string;

		/** Required */
		ContainerType: ContainerType;

		/** Required */
		Segment: Segment;

		/** Required */
		CreatedAt: Date;

		/** Required */
		ModifiedAt: Date;
		Description?: string;
		StartoverWindowSeconds?: number | null;
		HlsManifests?: Array<GetHlsManifestConfiguration>;
		LowLatencyHlsManifests?: Array<GetLowLatencyHlsManifestConfiguration>;
		Tags?: TagMap;
	}
	export interface UpdateOriginEndpointResponseFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		ChannelGroupName: FormControl<string | null | undefined>,

		/** Required */
		ChannelName: FormControl<string | null | undefined>,

		/** Required */
		OriginEndpointName: FormControl<string | null | undefined>,

		/** Required */
		ContainerType: FormControl<ContainerType | null | undefined>,

		/** Required */
		CreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		ModifiedAt: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		StartoverWindowSeconds: FormControl<number | null | undefined>,
	}
	export function CreateUpdateOriginEndpointResponseFormGroup() {
		return new FormGroup<UpdateOriginEndpointResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChannelGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChannelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OriginEndpointName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContainerType: new FormControl<ContainerType | null | undefined>(undefined, [Validators.required]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ModifiedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			StartoverWindowSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateChannelGroupRequest {

		/** Required */
		ChannelGroupName: string;
		Description?: string;
		Tags?: TagMap;
	}
	export interface CreateChannelGroupRequestFormProperties {

		/** Required */
		ChannelGroupName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelGroupRequestFormGroup() {
		return new FormGroup<CreateChannelGroupRequestFormProperties>({
			ChannelGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateChannelRequest {

		/** Required */
		ChannelName: string;
		Description?: string;
		Tags?: TagMap;
	}
	export interface CreateChannelRequestFormProperties {

		/** Required */
		ChannelName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelRequestFormGroup() {
		return new FormGroup<CreateChannelRequestFormProperties>({
			ChannelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateOriginEndpointRequest {

		/** Required */
		OriginEndpointName: string;

		/** Required */
		ContainerType: ContainerType;
		Segment?: Segment;
		Description?: string;
		StartoverWindowSeconds?: number | null;
		HlsManifests?: Array<CreateHlsManifestConfiguration>;
		LowLatencyHlsManifests?: Array<CreateLowLatencyHlsManifestConfiguration>;
		Tags?: TagMap;
	}
	export interface CreateOriginEndpointRequestFormProperties {

		/** Required */
		OriginEndpointName: FormControl<string | null | undefined>,

		/** Required */
		ContainerType: FormControl<ContainerType | null | undefined>,
		Description: FormControl<string | null | undefined>,
		StartoverWindowSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreateOriginEndpointRequestFormGroup() {
		return new FormGroup<CreateOriginEndpointRequestFormProperties>({
			OriginEndpointName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContainerType: new FormControl<ContainerType | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			StartoverWindowSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteChannelGroupRequest {
	}
	export interface DeleteChannelGroupRequestFormProperties {
	}
	export function CreateDeleteChannelGroupRequestFormGroup() {
		return new FormGroup<DeleteChannelGroupRequestFormProperties>({
		});

	}

	export interface DeleteChannelPolicyRequest {
	}
	export interface DeleteChannelPolicyRequestFormProperties {
	}
	export function CreateDeleteChannelPolicyRequestFormGroup() {
		return new FormGroup<DeleteChannelPolicyRequestFormProperties>({
		});

	}

	export interface DeleteChannelRequest {
	}
	export interface DeleteChannelRequestFormProperties {
	}
	export function CreateDeleteChannelRequestFormGroup() {
		return new FormGroup<DeleteChannelRequestFormProperties>({
		});

	}

	export interface DeleteOriginEndpointPolicyRequest {
	}
	export interface DeleteOriginEndpointPolicyRequestFormProperties {
	}
	export function CreateDeleteOriginEndpointPolicyRequestFormGroup() {
		return new FormGroup<DeleteOriginEndpointPolicyRequestFormProperties>({
		});

	}

	export interface DeleteOriginEndpointRequest {
	}
	export interface DeleteOriginEndpointRequestFormProperties {
	}
	export function CreateDeleteOriginEndpointRequestFormGroup() {
		return new FormGroup<DeleteOriginEndpointRequestFormProperties>({
		});

	}

	export interface GetChannelGroupRequest {
	}
	export interface GetChannelGroupRequestFormProperties {
	}
	export function CreateGetChannelGroupRequestFormGroup() {
		return new FormGroup<GetChannelGroupRequestFormProperties>({
		});

	}

	export interface GetChannelPolicyRequest {
	}
	export interface GetChannelPolicyRequestFormProperties {
	}
	export function CreateGetChannelPolicyRequestFormGroup() {
		return new FormGroup<GetChannelPolicyRequestFormProperties>({
		});

	}

	export interface GetChannelRequest {
	}
	export interface GetChannelRequestFormProperties {
	}
	export function CreateGetChannelRequestFormGroup() {
		return new FormGroup<GetChannelRequestFormProperties>({
		});

	}

	export interface GetOriginEndpointPolicyRequest {
	}
	export interface GetOriginEndpointPolicyRequestFormProperties {
	}
	export function CreateGetOriginEndpointPolicyRequestFormGroup() {
		return new FormGroup<GetOriginEndpointPolicyRequestFormProperties>({
		});

	}

	export interface GetOriginEndpointRequest {
	}
	export interface GetOriginEndpointRequestFormProperties {
	}
	export function CreateGetOriginEndpointRequestFormGroup() {
		return new FormGroup<GetOriginEndpointRequestFormProperties>({
		});

	}

	export interface ListChannelGroupsRequest {
	}
	export interface ListChannelGroupsRequestFormProperties {
	}
	export function CreateListChannelGroupsRequestFormGroup() {
		return new FormGroup<ListChannelGroupsRequestFormProperties>({
		});

	}

	export interface ListChannelsRequest {
	}
	export interface ListChannelsRequestFormProperties {
	}
	export function CreateListChannelsRequestFormGroup() {
		return new FormGroup<ListChannelsRequestFormProperties>({
		});

	}

	export interface ListOriginEndpointsRequest {
	}
	export interface ListOriginEndpointsRequestFormProperties {
	}
	export function CreateListOriginEndpointsRequestFormGroup() {
		return new FormGroup<ListOriginEndpointsRequestFormProperties>({
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

	export interface PutChannelPolicyRequest {

		/** Required */
		Policy: string;
	}
	export interface PutChannelPolicyRequestFormProperties {

		/** Required */
		Policy: FormControl<string | null | undefined>,
	}
	export function CreatePutChannelPolicyRequestFormGroup() {
		return new FormGroup<PutChannelPolicyRequestFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutOriginEndpointPolicyRequest {

		/** Required */
		Policy: string;
	}
	export interface PutOriginEndpointPolicyRequestFormProperties {

		/** Required */
		Policy: FormControl<string | null | undefined>,
	}
	export function CreatePutOriginEndpointPolicyRequestFormGroup() {
		return new FormGroup<PutOriginEndpointPolicyRequestFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		Tags: TagMap;
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

	export interface UpdateChannelGroupRequest {
		Description?: string;
	}
	export interface UpdateChannelGroupRequestFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelGroupRequestFormGroup() {
		return new FormGroup<UpdateChannelGroupRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateChannelRequest {
		Description?: string;
	}
	export interface UpdateChannelRequestFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelRequestFormGroup() {
		return new FormGroup<UpdateChannelRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateOriginEndpointRequest {

		/** Required */
		ContainerType: ContainerType;
		Segment?: Segment;
		Description?: string;
		StartoverWindowSeconds?: number | null;
		HlsManifests?: Array<CreateHlsManifestConfiguration>;
		LowLatencyHlsManifests?: Array<CreateLowLatencyHlsManifestConfiguration>;
	}
	export interface UpdateOriginEndpointRequestFormProperties {

		/** Required */
		ContainerType: FormControl<ContainerType | null | undefined>,
		Description: FormControl<string | null | undefined>,
		StartoverWindowSeconds: FormControl<number | null | undefined>,
	}
	export function CreateUpdateOriginEndpointRequestFormGroup() {
		return new FormGroup<UpdateOriginEndpointRequestFormProperties>({
			ContainerType: new FormControl<ContainerType | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			StartoverWindowSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Create a channel to start receiving content streams. The channel represents the input to MediaPackage for incoming live content from an encoder such as AWS Elemental MediaLive. The channel receives content, and after packaging it, outputs it through an origin endpoint to downstream devices (such as video players or CDNs) that request the content. You can create only one channel with each request. We recommend that you spread out channels between channel groups, such as putting redundant channels in the same AWS Region in different channel groups.
		 * Post channelGroup/{ChannelGroupName}/channel
		 * @param {string} ChannelGroupName The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
		 *     Min length: 1    Max length: 256
		 * @return {CreateChannelResponse} Success
		 */
		CreateChannel(ChannelGroupName: string, requestBody: CreateChannelPostBody): Observable<CreateChannelResponse> {
			return this.http.post<CreateChannelResponse>(this.baseUri + 'channelGroup/' + (ChannelGroupName == null ? '' : encodeURIComponent(ChannelGroupName)) + '/channel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves all channels in a specific channel group that are configured in AWS Elemental MediaPackage, including the origin endpoints that are associated with it.
		 * Get channelGroup/{ChannelGroupName}/channel
		 * @param {string} ChannelGroupName The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
		 *     Min length: 1    Max length: 256
		 * @param {number} maxResults The maximum number of results to return in the response.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken The pagination token from the GET list request. Use the token to fetch the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListChannelsResponse} Success
		 */
		ListChannels(ChannelGroupName: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListChannelsResponse> {
			return this.http.get<ListChannelsResponse>(this.baseUri + 'channelGroup/' + (ChannelGroupName == null ? '' : encodeURIComponent(ChannelGroupName)) + '/channel&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Create a channel group to group your channels and origin endpoints. A channel group is the top-level resource that consists of channels and origin endpoints that are associated with it and that provides predictable URLs for stream delivery. All channels and origin endpoints within the channel group are guaranteed to share the DNS. You can create only one channel group with each request.
		 * Post channelGroup
		 * @return {CreateChannelGroupResponse} Success
		 */
		CreateChannelGroup(requestBody: CreateChannelGroupPostBody): Observable<CreateChannelGroupResponse> {
			return this.http.post<CreateChannelGroupResponse>(this.baseUri + 'channelGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves all channel groups that are configured in AWS Elemental MediaPackage, including the channels and origin endpoints that are associated with it.
		 * Get channelGroup
		 * @param {number} maxResults The maximum number of results to return in the response.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken The pagination token from the GET list request. Use the token to fetch the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListChannelGroupsResponse} Success
		 */
		ListChannelGroups(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListChannelGroupsResponse> {
			return this.http.get<ListChannelGroupsResponse>(this.baseUri + 'channelGroup?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * The endpoint is attached to a channel, and represents the output of the live content. You can associate multiple endpoints to a single channel. Each endpoint gives players and downstream CDNs (such as Amazon CloudFront) access to the content for playback. Content can't be served from a channel until it has an endpoint. You can create only one endpoint with each request.
		 * Post channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint
		 * @param {string} ChannelGroupName The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
		 *     Min length: 1    Max length: 256
		 * @param {string} ChannelName The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. 
		 *     Min length: 1    Max length: 256
		 * @return {CreateOriginEndpointResponse} Success
		 */
		CreateOriginEndpoint(ChannelGroupName: string, ChannelName: string, requestBody: CreateOriginEndpointPostBody): Observable<CreateOriginEndpointResponse> {
			return this.http.post<CreateOriginEndpointResponse>(this.baseUri + 'channelGroup/' + (ChannelGroupName == null ? '' : encodeURIComponent(ChannelGroupName)) + '/channel/' + (ChannelName == null ? '' : encodeURIComponent(ChannelName)) + '/originEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves all origin endpoints in a specific channel that are configured in AWS Elemental MediaPackage.
		 * Get channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint
		 * @param {string} ChannelGroupName The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
		 *     Min length: 1    Max length: 256
		 * @param {string} ChannelName The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. 
		 *     Min length: 1    Max length: 256
		 * @param {number} maxResults The maximum number of results to return in the response.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken The pagination token from the GET list request. Use the token to fetch the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListOriginEndpointsResponse} Success
		 */
		ListOriginEndpoints(ChannelGroupName: string, ChannelName: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListOriginEndpointsResponse> {
			return this.http.get<ListOriginEndpointsResponse>(this.baseUri + 'channelGroup/' + (ChannelGroupName == null ? '' : encodeURIComponent(ChannelGroupName)) + '/channel/' + (ChannelName == null ? '' : encodeURIComponent(ChannelName)) + '/originEndpoint&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Delete a channel to stop AWS Elemental MediaPackage from receiving further content. You must delete the channel's origin endpoints before you can delete the channel.
		 * Delete channelGroup/{ChannelGroupName}/channel/{ChannelName}/
		 * @param {string} ChannelGroupName The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
		 *     Min length: 1    Max length: 256
		 * @param {string} ChannelName The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.
		 *     Min length: 1    Max length: 256
		 * @return {DeleteChannelResponse} Success
		 */
		DeleteChannel(ChannelGroupName: string, ChannelName: string): Observable<DeleteChannelResponse> {
			return this.http.delete<DeleteChannelResponse>(this.baseUri + 'channelGroup/' + (ChannelGroupName == null ? '' : encodeURIComponent(ChannelGroupName)) + '/channel/' + (ChannelName == null ? '' : encodeURIComponent(ChannelName)) + '/', {});
		}

		/**
		 * Retrieves the specified channel that's configured in AWS Elemental MediaPackage, including the origin endpoints that are associated with it.
		 * Get channelGroup/{ChannelGroupName}/channel/{ChannelName}/
		 * @param {string} ChannelGroupName The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
		 *     Min length: 1    Max length: 256
		 * @param {string} ChannelName The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. 
		 *     Min length: 1    Max length: 256
		 * @return {GetChannelResponse} Success
		 */
		GetChannel(ChannelGroupName: string, ChannelName: string): Observable<GetChannelResponse> {
			return this.http.get<GetChannelResponse>(this.baseUri + 'channelGroup/' + (ChannelGroupName == null ? '' : encodeURIComponent(ChannelGroupName)) + '/channel/' + (ChannelName == null ? '' : encodeURIComponent(ChannelName)) + '/', {});
		}

		/**
		 * <p>Update the specified channel. You can edit if MediaPackage sends ingest or egress access logs to the CloudWatch log group, if content will be encrypted, the description on a channel, and your channel's policy settings. You can't edit the name of the channel or CloudFront distribution details.</p> <p>Any edits you make that impact the video output may not be reflected for a few minutes.</p>
		 * Put channelGroup/{ChannelGroupName}/channel/{ChannelName}/
		 * @param {string} ChannelGroupName The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
		 *     Min length: 1    Max length: 256
		 * @param {string} ChannelName The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. 
		 *     Min length: 1    Max length: 256
		 * @return {UpdateChannelResponse} Success
		 */
		UpdateChannel(ChannelGroupName: string, ChannelName: string, requestBody: UpdateChannelPutBody): Observable<UpdateChannelResponse> {
			return this.http.put<UpdateChannelResponse>(this.baseUri + 'channelGroup/' + (ChannelGroupName == null ? '' : encodeURIComponent(ChannelGroupName)) + '/channel/' + (ChannelName == null ? '' : encodeURIComponent(ChannelName)) + '/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a channel group. You must delete the channel group's channels and origin endpoints before you can delete the channel group. If you delete a channel group, you'll lose access to the egress domain and will have to create a new channel group to replace it.
		 * Delete channelGroup/{ChannelGroupName}
		 * @param {string} ChannelGroupName The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
		 *     Min length: 1    Max length: 256
		 * @return {DeleteChannelGroupResponse} Success
		 */
		DeleteChannelGroup(ChannelGroupName: string): Observable<DeleteChannelGroupResponse> {
			return this.http.delete<DeleteChannelGroupResponse>(this.baseUri + 'channelGroup/' + (ChannelGroupName == null ? '' : encodeURIComponent(ChannelGroupName)), {});
		}

		/**
		 * Retrieves the specified channel group that's configured in AWS Elemental MediaPackage, including the channels and origin endpoints that are associated with it.
		 * Get channelGroup/{ChannelGroupName}
		 * @param {string} ChannelGroupName The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
		 *     Min length: 1    Max length: 256
		 * @return {GetChannelGroupResponse} Success
		 */
		GetChannelGroup(ChannelGroupName: string): Observable<GetChannelGroupResponse> {
			return this.http.get<GetChannelGroupResponse>(this.baseUri + 'channelGroup/' + (ChannelGroupName == null ? '' : encodeURIComponent(ChannelGroupName)), {});
		}

		/**
		 * <p>Update the specified channel group. You can edit the description on a channel group for easier identification later from the AWS Elemental MediaPackage console. You can't edit the name of the channel group.</p> <p>Any edits you make that impact the video output may not be reflected for a few minutes.</p>
		 * Put channelGroup/{ChannelGroupName}
		 * @param {string} ChannelGroupName The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
		 *     Min length: 1    Max length: 256
		 * @return {UpdateChannelGroupResponse} Success
		 */
		UpdateChannelGroup(ChannelGroupName: string, requestBody: UpdateChannelGroupPutBody): Observable<UpdateChannelGroupResponse> {
			return this.http.put<UpdateChannelGroupResponse>(this.baseUri + 'channelGroup/' + (ChannelGroupName == null ? '' : encodeURIComponent(ChannelGroupName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a channel policy.
		 * Delete channelGroup/{ChannelGroupName}/channel/{ChannelName}/policy
		 * @param {string} ChannelGroupName The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
		 *     Min length: 1    Max length: 256
		 * @param {string} ChannelName The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.
		 *     Min length: 1    Max length: 256
		 * @return {DeleteChannelPolicyResponse} Success
		 */
		DeleteChannelPolicy(ChannelGroupName: string, ChannelName: string): Observable<DeleteChannelPolicyResponse> {
			return this.http.delete<DeleteChannelPolicyResponse>(this.baseUri + 'channelGroup/' + (ChannelGroupName == null ? '' : encodeURIComponent(ChannelGroupName)) + '/channel/' + (ChannelName == null ? '' : encodeURIComponent(ChannelName)) + '/policy', {});
		}

		/**
		 * Retrieves the specified channel policy that's configured in AWS Elemental MediaPackage. With policies, you can specify who has access to AWS resources and what actions they can perform on those resources.
		 * Get channelGroup/{ChannelGroupName}/channel/{ChannelName}/policy
		 * @param {string} ChannelGroupName The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
		 *     Min length: 1    Max length: 256
		 * @param {string} ChannelName The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. 
		 *     Min length: 1    Max length: 256
		 * @return {GetChannelPolicyResponse} Success
		 */
		GetChannelPolicy(ChannelGroupName: string, ChannelName: string): Observable<GetChannelPolicyResponse> {
			return this.http.get<GetChannelPolicyResponse>(this.baseUri + 'channelGroup/' + (ChannelGroupName == null ? '' : encodeURIComponent(ChannelGroupName)) + '/channel/' + (ChannelName == null ? '' : encodeURIComponent(ChannelName)) + '/policy', {});
		}

		/**
		 * Attaches an IAM policy to the specified channel. With policies, you can specify who has access to AWS resources and what actions they can perform on those resources. You can attach only one policy with each request.
		 * Put channelGroup/{ChannelGroupName}/channel/{ChannelName}/policy
		 * @param {string} ChannelGroupName The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
		 *     Min length: 1    Max length: 256
		 * @param {string} ChannelName The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. 
		 *     Min length: 1    Max length: 256
		 * @return {PutChannelPolicyResponse} Success
		 */
		PutChannelPolicy(ChannelGroupName: string, ChannelName: string, requestBody: PutChannelPolicyPutBody): Observable<PutChannelPolicyResponse> {
			return this.http.put<PutChannelPolicyResponse>(this.baseUri + 'channelGroup/' + (ChannelGroupName == null ? '' : encodeURIComponent(ChannelGroupName)) + '/channel/' + (ChannelName == null ? '' : encodeURIComponent(ChannelName)) + '/policy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Origin endpoints can serve content until they're deleted. Delete the endpoint if it should no longer respond to playback requests. You must delete all endpoints from a channel before you can delete the channel.
		 * Delete channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}
		 * @param {string} ChannelGroupName The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
		 *     Min length: 1    Max length: 256
		 * @param {string} ChannelName The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. 
		 *     Min length: 1    Max length: 256
		 * @param {string} OriginEndpointName The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel. 
		 *     Min length: 1    Max length: 256
		 * @return {DeleteOriginEndpointResponse} Success
		 */
		DeleteOriginEndpoint(ChannelGroupName: string, ChannelName: string, OriginEndpointName: string): Observable<DeleteOriginEndpointResponse> {
			return this.http.delete<DeleteOriginEndpointResponse>(this.baseUri + 'channelGroup/' + (ChannelGroupName == null ? '' : encodeURIComponent(ChannelGroupName)) + '/channel/' + (ChannelName == null ? '' : encodeURIComponent(ChannelName)) + '/originEndpoint/' + (OriginEndpointName == null ? '' : encodeURIComponent(OriginEndpointName)), {});
		}

		/**
		 * Retrieves the specified origin endpoint that's configured in AWS Elemental MediaPackage to obtain its playback URL and to view the packaging settings that it's currently using.
		 * Get channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}
		 * @param {string} ChannelGroupName The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
		 *     Min length: 1    Max length: 256
		 * @param {string} ChannelName The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. 
		 *     Min length: 1    Max length: 256
		 * @param {string} OriginEndpointName The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel. 
		 *     Min length: 1    Max length: 256
		 * @return {GetOriginEndpointResponse} Success
		 */
		GetOriginEndpoint(ChannelGroupName: string, ChannelName: string, OriginEndpointName: string): Observable<GetOriginEndpointResponse> {
			return this.http.get<GetOriginEndpointResponse>(this.baseUri + 'channelGroup/' + (ChannelGroupName == null ? '' : encodeURIComponent(ChannelGroupName)) + '/channel/' + (ChannelName == null ? '' : encodeURIComponent(ChannelName)) + '/originEndpoint/' + (OriginEndpointName == null ? '' : encodeURIComponent(OriginEndpointName)), {});
		}

		/**
		 * <p>Update the specified origin endpoint. Edit the packaging preferences on an endpoint to optimize the viewing experience. You can't edit the name of the endpoint.</p> <p>Any edits you make that impact the video output may not be reflected for a few minutes.</p>
		 * Put channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}
		 * @param {string} ChannelGroupName The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
		 *     Min length: 1    Max length: 256
		 * @param {string} ChannelName The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. 
		 *     Min length: 1    Max length: 256
		 * @param {string} OriginEndpointName The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel. 
		 *     Min length: 1    Max length: 256
		 * @return {UpdateOriginEndpointResponse} Success
		 */
		UpdateOriginEndpoint(ChannelGroupName: string, ChannelName: string, OriginEndpointName: string, requestBody: UpdateOriginEndpointPutBody): Observable<UpdateOriginEndpointResponse> {
			return this.http.put<UpdateOriginEndpointResponse>(this.baseUri + 'channelGroup/' + (ChannelGroupName == null ? '' : encodeURIComponent(ChannelGroupName)) + '/channel/' + (ChannelName == null ? '' : encodeURIComponent(ChannelName)) + '/originEndpoint/' + (OriginEndpointName == null ? '' : encodeURIComponent(OriginEndpointName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an origin endpoint policy.
		 * Delete channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}/policy
		 * @param {string} ChannelGroupName The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
		 *     Min length: 1    Max length: 256
		 * @param {string} ChannelName The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. 
		 *     Min length: 1    Max length: 256
		 * @param {string} OriginEndpointName The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel. 
		 *     Min length: 1    Max length: 256
		 * @return {DeleteOriginEndpointPolicyResponse} Success
		 */
		DeleteOriginEndpointPolicy(ChannelGroupName: string, ChannelName: string, OriginEndpointName: string): Observable<DeleteOriginEndpointPolicyResponse> {
			return this.http.delete<DeleteOriginEndpointPolicyResponse>(this.baseUri + 'channelGroup/' + (ChannelGroupName == null ? '' : encodeURIComponent(ChannelGroupName)) + '/channel/' + (ChannelName == null ? '' : encodeURIComponent(ChannelName)) + '/originEndpoint/' + (OriginEndpointName == null ? '' : encodeURIComponent(OriginEndpointName)) + '/policy', {});
		}

		/**
		 * Retrieves the specified origin endpoint policy that's configured in AWS Elemental MediaPackage.
		 * Get channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}/policy
		 * @param {string} ChannelGroupName The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
		 *     Min length: 1    Max length: 256
		 * @param {string} ChannelName The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. 
		 *     Min length: 1    Max length: 256
		 * @param {string} OriginEndpointName The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel. 
		 *     Min length: 1    Max length: 256
		 * @return {GetOriginEndpointPolicyResponse} Success
		 */
		GetOriginEndpointPolicy(ChannelGroupName: string, ChannelName: string, OriginEndpointName: string): Observable<GetOriginEndpointPolicyResponse> {
			return this.http.get<GetOriginEndpointPolicyResponse>(this.baseUri + 'channelGroup/' + (ChannelGroupName == null ? '' : encodeURIComponent(ChannelGroupName)) + '/channel/' + (ChannelName == null ? '' : encodeURIComponent(ChannelName)) + '/originEndpoint/' + (OriginEndpointName == null ? '' : encodeURIComponent(OriginEndpointName)) + '/policy', {});
		}

		/**
		 * Attaches an IAM policy to the specified origin endpoint. You can attach only one policy with each request.
		 * Post channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}/policy
		 * @param {string} ChannelGroupName The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
		 *     Min length: 1    Max length: 256
		 * @param {string} ChannelName The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. 
		 *     Min length: 1    Max length: 256
		 * @param {string} OriginEndpointName The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel. 
		 *     Min length: 1    Max length: 256
		 * @return {PutOriginEndpointPolicyResponse} Success
		 */
		PutOriginEndpointPolicy(ChannelGroupName: string, ChannelName: string, OriginEndpointName: string, requestBody: PutOriginEndpointPolicyPostBody): Observable<PutOriginEndpointPolicyResponse> {
			return this.http.post<PutOriginEndpointPolicyResponse>(this.baseUri + 'channelGroup/' + (ChannelGroupName == null ? '' : encodeURIComponent(ChannelGroupName)) + '/channel/' + (ChannelName == null ? '' : encodeURIComponent(ChannelName)) + '/originEndpoint/' + (OriginEndpointName == null ? '' : encodeURIComponent(OriginEndpointName)) + '/policy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags assigned to a resource.
		 * Get tags/{ResourceArn}
		 * @param {string} ResourceArn The ARN of the CloudWatch resource that you want to view tags for.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(ResourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), {});
		}

		/**
		 * <p>Assigns one of more tags (key-value pairs) to the specified MediaPackage resource.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values. You can use the TagResource operation with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p>
		 * Post tags/{ResourceArn}
		 * @param {string} ResourceArn The ARN of the MediaPackage resource that you're adding tags to.
		 * @return {void} 
		 */
		TagResource(ResourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes one or more tags from the specified resource.
		 * Delete tags/{ResourceArn}#tagKeys
		 * @param {string} ResourceArn The ARN of the MediaPackage resource that you're removing tags from.
		 * @param {Array<string>} tagKeys The list of tag keys to remove from the resource.
		 * @return {void} 
		 */
		UntagResource(ResourceArn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}
	}

	export interface CreateChannelPostBody {

		/**
		 * The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. You can't change the name after you create the channel.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		ChannelName: string;

		/**
		 * Enter any descriptive text that helps you to identify the channel.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description?: string | null;

		/** <p>A comma-separated list of tag key:value pairs that you define. For example:</p> <p> <code>"Key1": "Value1",</code> </p> <p> <code>"Key2": "Value2"</code> </p> */
		tags?: {[id: string]: string };
	}
	export interface CreateChannelPostBodyFormProperties {

		/**
		 * The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. You can't change the name after you create the channel.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		ChannelName: FormControl<string | null | undefined>,

		/**
		 * Enter any descriptive text that helps you to identify the channel.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description: FormControl<string | null | undefined>,

		/** <p>A comma-separated list of tag key:value pairs that you define. For example:</p> <p> <code>"Key1": "Value1",</code> </p> <p> <code>"Key2": "Value2"</code> </p> */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateChannelPostBodyFormGroup() {
		return new FormGroup<CreateChannelPostBodyFormProperties>({
			ChannelName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9_-]+')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateChannelGroupPostBody {

		/**
		 * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region. You can't use spaces in the name. You can't change the name after you create the channel group.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		ChannelGroupName: string;

		/**
		 * Enter any descriptive text that helps you to identify the channel group.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description?: string | null;

		/** <p>A comma-separated list of tag key:value pairs that you define. For example:</p> <p> <code>"Key1": "Value1",</code> </p> <p> <code>"Key2": "Value2"</code> </p> */
		tags?: {[id: string]: string };
	}
	export interface CreateChannelGroupPostBodyFormProperties {

		/**
		 * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region. You can't use spaces in the name. You can't change the name after you create the channel group.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		ChannelGroupName: FormControl<string | null | undefined>,

		/**
		 * Enter any descriptive text that helps you to identify the channel group.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description: FormControl<string | null | undefined>,

		/** <p>A comma-separated list of tag key:value pairs that you define. For example:</p> <p> <code>"Key1": "Value1",</code> </p> <p> <code>"Key2": "Value2"</code> </p> */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateChannelGroupPostBodyFormGroup() {
		return new FormGroup<CreateChannelGroupPostBodyFormProperties>({
			ChannelGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9_-]+')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateOriginEndpointPostBody {

		/**
		 * The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and must be unique for your account in the AWS Region and channel. You can't use spaces in the name. You can't change the name after you create the endpoint.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		OriginEndpointName: string;

		/**
		 * The type of container to attach to this origin endpoint. A container type is a file format that encapsulates one or more media streams, such as audio and video, into a single file. You can't change the container type after you create the endpoint.
		 * Required
		 */
		ContainerType: ContainerType;

		/** The segment configuration, including the segment name, duration, and other configuration values. */
		Segment?: CreateOriginEndpointPostBodySegment;

		/**
		 * Enter any descriptive text that helps you to identify the origin endpoint.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description?: string | null;

		/**
		 * The size of the window (in seconds) to create a window of the live stream that's available for on-demand viewing. Viewers can start-over or catch-up on content that falls within the window. The maximum startover window is 1,209,600 seconds (14 days).
		 * Minimum: 60
		 * Maximum: 1209600
		 */
		StartoverWindowSeconds?: number | null;

		/** An HTTP live streaming (HLS) manifest configuration. */
		HlsManifests?: Array<CreateHlsManifestConfiguration>;

		/** A low-latency HLS manifest configuration. */
		LowLatencyHlsManifests?: Array<CreateLowLatencyHlsManifestConfiguration>;

		/** <p>A comma-separated list of tag key:value pairs that you define. For example:</p> <p> <code>"Key1": "Value1",</code> </p> <p> <code>"Key2": "Value2"</code> </p> */
		Tags?: {[id: string]: string };
	}
	export interface CreateOriginEndpointPostBodyFormProperties {

		/**
		 * The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and must be unique for your account in the AWS Region and channel. You can't use spaces in the name. You can't change the name after you create the endpoint.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		OriginEndpointName: FormControl<string | null | undefined>,

		/**
		 * The type of container to attach to this origin endpoint. A container type is a file format that encapsulates one or more media streams, such as audio and video, into a single file. You can't change the container type after you create the endpoint.
		 * Required
		 */
		ContainerType: FormControl<ContainerType | null | undefined>,

		/**
		 * Enter any descriptive text that helps you to identify the origin endpoint.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The size of the window (in seconds) to create a window of the live stream that's available for on-demand viewing. Viewers can start-over or catch-up on content that falls within the window. The maximum startover window is 1,209,600 seconds (14 days).
		 * Minimum: 60
		 * Maximum: 1209600
		 */
		StartoverWindowSeconds: FormControl<number | null | undefined>,

		/** <p>A comma-separated list of tag key:value pairs that you define. For example:</p> <p> <code>"Key1": "Value1",</code> </p> <p> <code>"Key2": "Value2"</code> </p> */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateOriginEndpointPostBodyFormGroup() {
		return new FormGroup<CreateOriginEndpointPostBodyFormProperties>({
			OriginEndpointName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9_-]+')]),
			ContainerType: new FormControl<ContainerType | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			StartoverWindowSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(1209600)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateOriginEndpointPostBodySegment {
		SegmentDurationSeconds?: number | null;
		SegmentName?: string;
		TsUseAudioRenditionGroup?: boolean | null;
		IncludeIframeOnlyStreams?: boolean | null;
		TsIncludeDvbSubtitles?: boolean | null;
		Scte?: Scte;

		/** The parameters for encrypting content. */
		Encryption?: Encryption;
	}
	export interface CreateOriginEndpointPostBodySegmentFormProperties {
		SegmentDurationSeconds: FormControl<number | null | undefined>,
		SegmentName: FormControl<string | null | undefined>,
		TsUseAudioRenditionGroup: FormControl<boolean | null | undefined>,
		IncludeIframeOnlyStreams: FormControl<boolean | null | undefined>,
		TsIncludeDvbSubtitles: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateOriginEndpointPostBodySegmentFormGroup() {
		return new FormGroup<CreateOriginEndpointPostBodySegmentFormProperties>({
			SegmentDurationSeconds: new FormControl<number | null | undefined>(undefined),
			SegmentName: new FormControl<string | null | undefined>(undefined),
			TsUseAudioRenditionGroup: new FormControl<boolean | null | undefined>(undefined),
			IncludeIframeOnlyStreams: new FormControl<boolean | null | undefined>(undefined),
			TsIncludeDvbSubtitles: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateChannelPutBody {

		/**
		 * Any descriptive information that you want to add to the channel for future identification purposes.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description?: string | null;
	}
	export interface UpdateChannelPutBodyFormProperties {

		/**
		 * Any descriptive information that you want to add to the channel for future identification purposes.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelPutBodyFormGroup() {
		return new FormGroup<UpdateChannelPutBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
		});

	}

	export interface UpdateChannelGroupPutBody {

		/**
		 * Any descriptive information that you want to add to the channel group for future identification purposes.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description?: string | null;
	}
	export interface UpdateChannelGroupPutBodyFormProperties {

		/**
		 * Any descriptive information that you want to add to the channel group for future identification purposes.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelGroupPutBodyFormGroup() {
		return new FormGroup<UpdateChannelGroupPutBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
		});

	}

	export interface PutChannelPolicyPutBody {

		/**
		 * The policy to attach to the specified channel.
		 * Required
		 * Min length: 0
		 * Max length: 6144
		 */
		Policy: string;
	}
	export interface PutChannelPolicyPutBodyFormProperties {

		/**
		 * The policy to attach to the specified channel.
		 * Required
		 * Min length: 0
		 * Max length: 6144
		 */
		Policy: FormControl<string | null | undefined>,
	}
	export function CreatePutChannelPolicyPutBodyFormGroup() {
		return new FormGroup<PutChannelPolicyPutBodyFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(6144)]),
		});

	}

	export interface UpdateOriginEndpointPutBody {

		/**
		 * The type of container attached to this origin endpoint. A container type is a file format that encapsulates one or more media streams, such as audio and video, into a single file.
		 * Required
		 */
		ContainerType: ContainerType;

		/** The segment configuration, including the segment name, duration, and other configuration values. */
		Segment?: UpdateOriginEndpointPutBodySegment;

		/**
		 * Any descriptive information that you want to add to the origin endpoint for future identification purposes.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description?: string | null;

		/**
		 * The size of the window (in seconds) to create a window of the live stream that's available for on-demand viewing. Viewers can start-over or catch-up on content that falls within the window. The maximum startover window is 1,209,600 seconds (14 days).
		 * Minimum: 60
		 * Maximum: 1209600
		 */
		StartoverWindowSeconds?: number | null;

		/** An HTTP live streaming (HLS) manifest configuration. */
		HlsManifests?: Array<CreateHlsManifestConfiguration>;

		/** A low-latency HLS manifest configuration. */
		LowLatencyHlsManifests?: Array<CreateLowLatencyHlsManifestConfiguration>;
	}
	export interface UpdateOriginEndpointPutBodyFormProperties {

		/**
		 * The type of container attached to this origin endpoint. A container type is a file format that encapsulates one or more media streams, such as audio and video, into a single file.
		 * Required
		 */
		ContainerType: FormControl<ContainerType | null | undefined>,

		/**
		 * Any descriptive information that you want to add to the origin endpoint for future identification purposes.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The size of the window (in seconds) to create a window of the live stream that's available for on-demand viewing. Viewers can start-over or catch-up on content that falls within the window. The maximum startover window is 1,209,600 seconds (14 days).
		 * Minimum: 60
		 * Maximum: 1209600
		 */
		StartoverWindowSeconds: FormControl<number | null | undefined>,
	}
	export function CreateUpdateOriginEndpointPutBodyFormGroup() {
		return new FormGroup<UpdateOriginEndpointPutBodyFormProperties>({
			ContainerType: new FormControl<ContainerType | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			StartoverWindowSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(1209600)]),
		});

	}

	export interface UpdateOriginEndpointPutBodySegment {
		SegmentDurationSeconds?: number | null;
		SegmentName?: string;
		TsUseAudioRenditionGroup?: boolean | null;
		IncludeIframeOnlyStreams?: boolean | null;
		TsIncludeDvbSubtitles?: boolean | null;
		Scte?: Scte;

		/** The parameters for encrypting content. */
		Encryption?: Encryption;
	}
	export interface UpdateOriginEndpointPutBodySegmentFormProperties {
		SegmentDurationSeconds: FormControl<number | null | undefined>,
		SegmentName: FormControl<string | null | undefined>,
		TsUseAudioRenditionGroup: FormControl<boolean | null | undefined>,
		IncludeIframeOnlyStreams: FormControl<boolean | null | undefined>,
		TsIncludeDvbSubtitles: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateOriginEndpointPutBodySegmentFormGroup() {
		return new FormGroup<UpdateOriginEndpointPutBodySegmentFormProperties>({
			SegmentDurationSeconds: new FormControl<number | null | undefined>(undefined),
			SegmentName: new FormControl<string | null | undefined>(undefined),
			TsUseAudioRenditionGroup: new FormControl<boolean | null | undefined>(undefined),
			IncludeIframeOnlyStreams: new FormControl<boolean | null | undefined>(undefined),
			TsIncludeDvbSubtitles: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutOriginEndpointPolicyPostBody {

		/**
		 * The policy to attach to the specified origin endpoint.
		 * Required
		 * Min length: 0
		 * Max length: 6144
		 */
		Policy: string;
	}
	export interface PutOriginEndpointPolicyPostBodyFormProperties {

		/**
		 * The policy to attach to the specified origin endpoint.
		 * Required
		 * Min length: 0
		 * Max length: 6144
		 */
		Policy: FormControl<string | null | undefined>,
	}
	export function CreatePutOriginEndpointPolicyPostBodyFormGroup() {
		return new FormGroup<PutOriginEndpointPolicyPostBodyFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(6144)]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.
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

