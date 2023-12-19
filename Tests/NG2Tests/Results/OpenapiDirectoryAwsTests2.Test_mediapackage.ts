import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateChannelResponse {
		Arn?: string | null;
		Description?: string | null;

		/** An HTTP Live Streaming (HLS) ingest resource configuration. */
		HlsIngest?: HlsIngest;
		Id?: string | null;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
	}
	export interface CreateChannelResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelResponseFormGroup() {
		return new FormGroup<CreateChannelResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An HTTP Live Streaming (HLS) ingest resource configuration. */
	export interface HlsIngest {
		IngestEndpoints?: Array<IngestEndpoint>;
	}

	/** An HTTP Live Streaming (HLS) ingest resource configuration. */
	export interface HlsIngestFormProperties {
	}
	export function CreateHlsIngestFormGroup() {
		return new FormGroup<HlsIngestFormProperties>({
		});

	}


	/** An endpoint for ingesting source content for a Channel. */
	export interface IngestEndpoint {
		Id?: string | null;
		Password?: string | null;
		Url?: string | null;
		Username?: string | null;
	}

	/** An endpoint for ingesting source content for a Channel. */
	export interface IngestEndpointFormProperties {
		Id: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
	}
	export function CreateIngestEndpointFormGroup() {
		return new FormGroup<IngestEndpointFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection of tags associated with a resource */
	export interface Tags {
	}

	/** A collection of tags associated with a resource */
	export interface TagsFormProperties {
	}
	export function CreateTagsFormGroup() {
		return new FormGroup<TagsFormProperties>({
		});

	}

	export interface UnprocessableEntityException {
	}
	export interface UnprocessableEntityExceptionFormProperties {
	}
	export function CreateUnprocessableEntityExceptionFormGroup() {
		return new FormGroup<UnprocessableEntityExceptionFormProperties>({
		});

	}

	export interface InternalServerErrorException {
	}
	export interface InternalServerErrorExceptionFormProperties {
	}
	export function CreateInternalServerErrorExceptionFormGroup() {
		return new FormGroup<InternalServerErrorExceptionFormProperties>({
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

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
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

	export interface TooManyRequestsException {
	}
	export interface TooManyRequestsExceptionFormProperties {
	}
	export function CreateTooManyRequestsExceptionFormGroup() {
		return new FormGroup<TooManyRequestsExceptionFormProperties>({
		});

	}

	export interface CreateHarvestJobResponse {
		Arn?: string | null;
		ChannelId?: string | null;
		CreatedAt?: string | null;
		EndTime?: string | null;
		Id?: string | null;
		OriginEndpointId?: string | null;

		/**
		 * Configuration parameters for where in an S3 bucket to place the harvested content
		 */
		S3Destination?: S3Destination;
		StartTime?: string | null;
		Status?: CreateHarvestJobResponseStatus | null;
	}
	export interface CreateHarvestJobResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		ChannelId: FormControl<string | null | undefined>,
		CreatedAt: FormControl<string | null | undefined>,
		EndTime: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		OriginEndpointId: FormControl<string | null | undefined>,
		StartTime: FormControl<string | null | undefined>,
		Status: FormControl<CreateHarvestJobResponseStatus | null | undefined>,
	}
	export function CreateCreateHarvestJobResponseFormGroup() {
		return new FormGroup<CreateHarvestJobResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ChannelId: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<string | null | undefined>(undefined),
			EndTime: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			OriginEndpointId: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<CreateHarvestJobResponseStatus | null | undefined>(undefined),
		});

	}


	/**
	 * Configuration parameters for where in an S3 bucket to place the harvested content
	 */
	export interface S3Destination {
		BucketName: string;
		ManifestKey: string;
		RoleArn: string;
	}

	/**
	 * Configuration parameters for where in an S3 bucket to place the harvested content
	 */
	export interface S3DestinationFormProperties {
		BucketName: FormControl<string | null | undefined>,
		ManifestKey: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateS3DestinationFormGroup() {
		return new FormGroup<S3DestinationFormProperties>({
			BucketName: new FormControl<string | null | undefined>(undefined),
			ManifestKey: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateHarvestJobResponseStatus { IN_PROGRESS = 0, SUCCEEDED = 1, FAILED = 2 }

	export interface CreateOriginEndpointResponse {
		Arn?: string | null;

		/** CDN Authorization credentials */
		Authorization?: Authorization;
		ChannelId?: string | null;

		/** A Common Media Application Format (CMAF) packaging configuration. */
		CmafPackage?: CmafPackage;

		/** A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration. */
		DashPackage?: DashPackage;
		Description?: string | null;

		/** An HTTP Live Streaming (HLS) packaging configuration. */
		HlsPackage?: HlsPackage;
		Id?: string | null;
		ManifestName?: string | null;

		/** A Microsoft Smooth Streaming (MSS) packaging configuration. */
		MssPackage?: MssPackage;
		Origination?: CreateOriginEndpointResponseOrigination | null;
		StartoverWindowSeconds?: number | null;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
		TimeDelaySeconds?: number | null;
		Url?: string | null;
		Whitelist?: Array<string>;
	}
	export interface CreateOriginEndpointResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		ChannelId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		ManifestName: FormControl<string | null | undefined>,
		Origination: FormControl<CreateOriginEndpointResponseOrigination | null | undefined>,
		StartoverWindowSeconds: FormControl<number | null | undefined>,
		TimeDelaySeconds: FormControl<number | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateCreateOriginEndpointResponseFormGroup() {
		return new FormGroup<CreateOriginEndpointResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ChannelId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			ManifestName: new FormControl<string | null | undefined>(undefined),
			Origination: new FormControl<CreateOriginEndpointResponseOrigination | null | undefined>(undefined),
			StartoverWindowSeconds: new FormControl<number | null | undefined>(undefined),
			TimeDelaySeconds: new FormControl<number | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CDN Authorization credentials */
	export interface Authorization {
		CdnIdentifierSecret: string;
		SecretsRoleArn: string;
	}

	/** CDN Authorization credentials */
	export interface AuthorizationFormProperties {
		CdnIdentifierSecret: FormControl<string | null | undefined>,
		SecretsRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizationFormGroup() {
		return new FormGroup<AuthorizationFormProperties>({
			CdnIdentifierSecret: new FormControl<string | null | undefined>(undefined),
			SecretsRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Common Media Application Format (CMAF) packaging configuration. */
	export interface CmafPackage {

		/** A Common Media Application Format (CMAF) encryption configuration. */
		Encryption?: CmafEncryption;
		HlsManifests?: Array<HlsManifest>;
		SegmentDurationSeconds?: number | null;
		SegmentPrefix?: string | null;

		/** A StreamSelection configuration. */
		StreamSelection?: StreamSelection;
	}

	/** A Common Media Application Format (CMAF) packaging configuration. */
	export interface CmafPackageFormProperties {
		SegmentDurationSeconds: FormControl<number | null | undefined>,
		SegmentPrefix: FormControl<string | null | undefined>,
	}
	export function CreateCmafPackageFormGroup() {
		return new FormGroup<CmafPackageFormProperties>({
			SegmentDurationSeconds: new FormControl<number | null | undefined>(undefined),
			SegmentPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Common Media Application Format (CMAF) encryption configuration. */
	export interface CmafEncryption {
		KeyRotationIntervalSeconds?: number | null;

		/**
		 * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
		 * Required
		 */
		SpekeKeyProvider: SpekeKeyProvider;
	}

	/** A Common Media Application Format (CMAF) encryption configuration. */
	export interface CmafEncryptionFormProperties {
		KeyRotationIntervalSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCmafEncryptionFormGroup() {
		return new FormGroup<CmafEncryptionFormProperties>({
			KeyRotationIntervalSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys. */
	export interface SpekeKeyProvider {
		CertificateArn?: string | null;
		ResourceId: string;
		RoleArn: string;
		SystemIds: Array<string>;
		Url: string;
	}

	/** A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys. */
	export interface SpekeKeyProviderFormProperties {
		CertificateArn: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateSpekeKeyProviderFormGroup() {
		return new FormGroup<SpekeKeyProviderFormProperties>({
			CertificateArn: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A HTTP Live Streaming (HLS) manifest configuration. */
	export interface HlsManifest {
		AdMarkers?: HlsManifestAdMarkers | null;
		Id: string;
		IncludeIframeOnlyStream?: boolean | null;
		ManifestName?: string | null;
		PlaylistType?: HlsManifestPlaylistType | null;
		PlaylistWindowSeconds?: number | null;
		ProgramDateTimeIntervalSeconds?: number | null;
		Url?: string | null;
	}

	/** A HTTP Live Streaming (HLS) manifest configuration. */
	export interface HlsManifestFormProperties {
		AdMarkers: FormControl<HlsManifestAdMarkers | null | undefined>,
		Id: FormControl<string | null | undefined>,
		IncludeIframeOnlyStream: FormControl<boolean | null | undefined>,
		ManifestName: FormControl<string | null | undefined>,
		PlaylistType: FormControl<HlsManifestPlaylistType | null | undefined>,
		PlaylistWindowSeconds: FormControl<number | null | undefined>,
		ProgramDateTimeIntervalSeconds: FormControl<number | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateHlsManifestFormGroup() {
		return new FormGroup<HlsManifestFormProperties>({
			AdMarkers: new FormControl<HlsManifestAdMarkers | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			IncludeIframeOnlyStream: new FormControl<boolean | null | undefined>(undefined),
			ManifestName: new FormControl<string | null | undefined>(undefined),
			PlaylistType: new FormControl<HlsManifestPlaylistType | null | undefined>(undefined),
			PlaylistWindowSeconds: new FormControl<number | null | undefined>(undefined),
			ProgramDateTimeIntervalSeconds: new FormControl<number | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HlsManifestAdMarkers { NONE = 0, SCTE35_ENHANCED = 1, PASSTHROUGH = 2 }

	export enum HlsManifestPlaylistType { NONE = 0, EVENT = 1, VOD = 2 }


	/** A StreamSelection configuration. */
	export interface StreamSelection {
		MaxVideoBitsPerSecond?: number | null;
		MinVideoBitsPerSecond?: number | null;
		StreamOrder?: StreamSelectionStreamOrder | null;
	}

	/** A StreamSelection configuration. */
	export interface StreamSelectionFormProperties {
		MaxVideoBitsPerSecond: FormControl<number | null | undefined>,
		MinVideoBitsPerSecond: FormControl<number | null | undefined>,
		StreamOrder: FormControl<StreamSelectionStreamOrder | null | undefined>,
	}
	export function CreateStreamSelectionFormGroup() {
		return new FormGroup<StreamSelectionFormProperties>({
			MaxVideoBitsPerSecond: new FormControl<number | null | undefined>(undefined),
			MinVideoBitsPerSecond: new FormControl<number | null | undefined>(undefined),
			StreamOrder: new FormControl<StreamSelectionStreamOrder | null | undefined>(undefined),
		});

	}

	export enum StreamSelectionStreamOrder { ORIGINAL = 0, VIDEO_BITRATE_ASCENDING = 1, VIDEO_BITRATE_DESCENDING = 2 }


	/** A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration. */
	export interface DashPackage {

		/**
		 * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
		 * ad markers are output.  Specify multiple items to create ad markers for all of the included
		 * message types.
		 */
		AdTriggers?: Array<__AdTriggersElement>;

		/**
		 * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
		 * determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
		 * ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
		 * contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
		 * messages of the types specified in AdTriggers that do not contain delivery restrictions will
		 * be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
		 * AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
		 * and are always treated as ads if specified in AdTriggers.
		 */
		AdsOnDeliveryRestrictions?: DashPackageAdsOnDeliveryRestrictions | null;

		/** A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration. */
		Encryption?: DashEncryption;
		ManifestLayout?: DashPackageManifestLayout | null;
		ManifestWindowSeconds?: number | null;
		MinBufferTimeSeconds?: number | null;
		MinUpdatePeriodSeconds?: number | null;
		PeriodTriggers?: Array<__PeriodTriggersElement>;
		Profile?: DashPackageProfile | null;
		SegmentDurationSeconds?: number | null;
		SegmentTemplateFormat?: DashPackageSegmentTemplateFormat | null;

		/** A StreamSelection configuration. */
		StreamSelection?: StreamSelection;
		SuggestedPresentationDelaySeconds?: number | null;
	}

	/** A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration. */
	export interface DashPackageFormProperties {

		/**
		 * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
		 * determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
		 * ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
		 * contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
		 * messages of the types specified in AdTriggers that do not contain delivery restrictions will
		 * be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
		 * AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
		 * and are always treated as ads if specified in AdTriggers.
		 */
		AdsOnDeliveryRestrictions: FormControl<DashPackageAdsOnDeliveryRestrictions | null | undefined>,
		ManifestLayout: FormControl<DashPackageManifestLayout | null | undefined>,
		ManifestWindowSeconds: FormControl<number | null | undefined>,
		MinBufferTimeSeconds: FormControl<number | null | undefined>,
		MinUpdatePeriodSeconds: FormControl<number | null | undefined>,
		Profile: FormControl<DashPackageProfile | null | undefined>,
		SegmentDurationSeconds: FormControl<number | null | undefined>,
		SegmentTemplateFormat: FormControl<DashPackageSegmentTemplateFormat | null | undefined>,
		SuggestedPresentationDelaySeconds: FormControl<number | null | undefined>,
	}
	export function CreateDashPackageFormGroup() {
		return new FormGroup<DashPackageFormProperties>({
			AdsOnDeliveryRestrictions: new FormControl<DashPackageAdsOnDeliveryRestrictions | null | undefined>(undefined),
			ManifestLayout: new FormControl<DashPackageManifestLayout | null | undefined>(undefined),
			ManifestWindowSeconds: new FormControl<number | null | undefined>(undefined),
			MinBufferTimeSeconds: new FormControl<number | null | undefined>(undefined),
			MinUpdatePeriodSeconds: new FormControl<number | null | undefined>(undefined),
			Profile: new FormControl<DashPackageProfile | null | undefined>(undefined),
			SegmentDurationSeconds: new FormControl<number | null | undefined>(undefined),
			SegmentTemplateFormat: new FormControl<DashPackageSegmentTemplateFormat | null | undefined>(undefined),
			SuggestedPresentationDelaySeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum __AdTriggersElement { SPLICE_INSERT = 0, BREAK = 1, PROVIDER_ADVERTISEMENT = 2, DISTRIBUTOR_ADVERTISEMENT = 3, PROVIDER_PLACEMENT_OPPORTUNITY = 4, DISTRIBUTOR_PLACEMENT_OPPORTUNITY = 5, PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY = 6, DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY = 7 }

	export enum DashPackageAdsOnDeliveryRestrictions { NONE = 0, RESTRICTED = 1, UNRESTRICTED = 2, BOTH = 3 }


	/** A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration. */
	export interface DashEncryption {
		KeyRotationIntervalSeconds?: number | null;

		/**
		 * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
		 * Required
		 */
		SpekeKeyProvider: SpekeKeyProvider;
	}

	/** A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration. */
	export interface DashEncryptionFormProperties {
		KeyRotationIntervalSeconds: FormControl<number | null | undefined>,
	}
	export function CreateDashEncryptionFormGroup() {
		return new FormGroup<DashEncryptionFormProperties>({
			KeyRotationIntervalSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DashPackageManifestLayout { FULL = 0, COMPACT = 1 }

	export enum __PeriodTriggersElement { ADS = 0 }

	export enum DashPackageProfile { NONE = 0, HBBTV_1_5 = 1 }

	export enum DashPackageSegmentTemplateFormat { NUMBER_WITH_TIMELINE = 0, TIME_WITH_TIMELINE = 1, NUMBER_WITH_DURATION = 2 }


	/** An HTTP Live Streaming (HLS) packaging configuration. */
	export interface HlsPackage {
		AdMarkers?: HlsManifestAdMarkers | null;

		/**
		 * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
		 * ad markers are output.  Specify multiple items to create ad markers for all of the included
		 * message types.
		 */
		AdTriggers?: Array<__AdTriggersElement>;

		/**
		 * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
		 * determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
		 * ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
		 * contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
		 * messages of the types specified in AdTriggers that do not contain delivery restrictions will
		 * be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
		 * AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
		 * and are always treated as ads if specified in AdTriggers.
		 */
		AdsOnDeliveryRestrictions?: DashPackageAdsOnDeliveryRestrictions | null;

		/** An HTTP Live Streaming (HLS) encryption configuration. */
		Encryption?: HlsEncryption;
		IncludeIframeOnlyStream?: boolean | null;
		PlaylistType?: HlsManifestPlaylistType | null;
		PlaylistWindowSeconds?: number | null;
		ProgramDateTimeIntervalSeconds?: number | null;
		SegmentDurationSeconds?: number | null;

		/** A StreamSelection configuration. */
		StreamSelection?: StreamSelection;
		UseAudioRenditionGroup?: boolean | null;
	}

	/** An HTTP Live Streaming (HLS) packaging configuration. */
	export interface HlsPackageFormProperties {
		AdMarkers: FormControl<HlsManifestAdMarkers | null | undefined>,

		/**
		 * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
		 * determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
		 * ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
		 * contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
		 * messages of the types specified in AdTriggers that do not contain delivery restrictions will
		 * be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
		 * AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
		 * and are always treated as ads if specified in AdTriggers.
		 */
		AdsOnDeliveryRestrictions: FormControl<DashPackageAdsOnDeliveryRestrictions | null | undefined>,
		IncludeIframeOnlyStream: FormControl<boolean | null | undefined>,
		PlaylistType: FormControl<HlsManifestPlaylistType | null | undefined>,
		PlaylistWindowSeconds: FormControl<number | null | undefined>,
		ProgramDateTimeIntervalSeconds: FormControl<number | null | undefined>,
		SegmentDurationSeconds: FormControl<number | null | undefined>,
		UseAudioRenditionGroup: FormControl<boolean | null | undefined>,
	}
	export function CreateHlsPackageFormGroup() {
		return new FormGroup<HlsPackageFormProperties>({
			AdMarkers: new FormControl<HlsManifestAdMarkers | null | undefined>(undefined),
			AdsOnDeliveryRestrictions: new FormControl<DashPackageAdsOnDeliveryRestrictions | null | undefined>(undefined),
			IncludeIframeOnlyStream: new FormControl<boolean | null | undefined>(undefined),
			PlaylistType: new FormControl<HlsManifestPlaylistType | null | undefined>(undefined),
			PlaylistWindowSeconds: new FormControl<number | null | undefined>(undefined),
			ProgramDateTimeIntervalSeconds: new FormControl<number | null | undefined>(undefined),
			SegmentDurationSeconds: new FormControl<number | null | undefined>(undefined),
			UseAudioRenditionGroup: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An HTTP Live Streaming (HLS) encryption configuration. */
	export interface HlsEncryption {
		ConstantInitializationVector?: string | null;
		EncryptionMethod?: HlsEncryptionEncryptionMethod | null;
		KeyRotationIntervalSeconds?: number | null;
		RepeatExtXKey?: boolean | null;

		/**
		 * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
		 * Required
		 */
		SpekeKeyProvider: SpekeKeyProvider;
	}

	/** An HTTP Live Streaming (HLS) encryption configuration. */
	export interface HlsEncryptionFormProperties {
		ConstantInitializationVector: FormControl<string | null | undefined>,
		EncryptionMethod: FormControl<HlsEncryptionEncryptionMethod | null | undefined>,
		KeyRotationIntervalSeconds: FormControl<number | null | undefined>,
		RepeatExtXKey: FormControl<boolean | null | undefined>,
	}
	export function CreateHlsEncryptionFormGroup() {
		return new FormGroup<HlsEncryptionFormProperties>({
			ConstantInitializationVector: new FormControl<string | null | undefined>(undefined),
			EncryptionMethod: new FormControl<HlsEncryptionEncryptionMethod | null | undefined>(undefined),
			KeyRotationIntervalSeconds: new FormControl<number | null | undefined>(undefined),
			RepeatExtXKey: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum HlsEncryptionEncryptionMethod { AES_128 = 0, SAMPLE_AES = 1 }


	/** A Microsoft Smooth Streaming (MSS) packaging configuration. */
	export interface MssPackage {

		/** A Microsoft Smooth Streaming (MSS) encryption configuration. */
		Encryption?: MssEncryption;
		ManifestWindowSeconds?: number | null;
		SegmentDurationSeconds?: number | null;

		/** A StreamSelection configuration. */
		StreamSelection?: StreamSelection;
	}

	/** A Microsoft Smooth Streaming (MSS) packaging configuration. */
	export interface MssPackageFormProperties {
		ManifestWindowSeconds: FormControl<number | null | undefined>,
		SegmentDurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateMssPackageFormGroup() {
		return new FormGroup<MssPackageFormProperties>({
			ManifestWindowSeconds: new FormControl<number | null | undefined>(undefined),
			SegmentDurationSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A Microsoft Smooth Streaming (MSS) encryption configuration. */
	export interface MssEncryption {

		/**
		 * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
		 * Required
		 */
		SpekeKeyProvider: SpekeKeyProvider;
	}

	/** A Microsoft Smooth Streaming (MSS) encryption configuration. */
	export interface MssEncryptionFormProperties {
	}
	export function CreateMssEncryptionFormGroup() {
		return new FormGroup<MssEncryptionFormProperties>({
		});

	}

	export enum CreateOriginEndpointResponseOrigination { ALLOW = 0, DENY = 1 }


	/** A HTTP Live Streaming (HLS) manifest configuration. */
	export interface HlsManifestCreateOrUpdateParameters {
		AdMarkers?: HlsManifestAdMarkers | null;

		/**
		 * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
		 * ad markers are output.  Specify multiple items to create ad markers for all of the included
		 * message types.
		 */
		AdTriggers?: Array<__AdTriggersElement>;

		/**
		 * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
		 * determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
		 * ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
		 * contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
		 * messages of the types specified in AdTriggers that do not contain delivery restrictions will
		 * be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
		 * AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
		 * and are always treated as ads if specified in AdTriggers.
		 */
		AdsOnDeliveryRestrictions?: DashPackageAdsOnDeliveryRestrictions | null;
		Id: string;
		IncludeIframeOnlyStream?: boolean | null;
		ManifestName?: string | null;
		PlaylistType?: HlsManifestPlaylistType | null;
		PlaylistWindowSeconds?: number | null;
		ProgramDateTimeIntervalSeconds?: number | null;
	}

	/** A HTTP Live Streaming (HLS) manifest configuration. */
	export interface HlsManifestCreateOrUpdateParametersFormProperties {
		AdMarkers: FormControl<HlsManifestAdMarkers | null | undefined>,

		/**
		 * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
		 * determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
		 * ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
		 * contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
		 * messages of the types specified in AdTriggers that do not contain delivery restrictions will
		 * be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
		 * AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
		 * and are always treated as ads if specified in AdTriggers.
		 */
		AdsOnDeliveryRestrictions: FormControl<DashPackageAdsOnDeliveryRestrictions | null | undefined>,
		Id: FormControl<string | null | undefined>,
		IncludeIframeOnlyStream: FormControl<boolean | null | undefined>,
		ManifestName: FormControl<string | null | undefined>,
		PlaylistType: FormControl<HlsManifestPlaylistType | null | undefined>,
		PlaylistWindowSeconds: FormControl<number | null | undefined>,
		ProgramDateTimeIntervalSeconds: FormControl<number | null | undefined>,
	}
	export function CreateHlsManifestCreateOrUpdateParametersFormGroup() {
		return new FormGroup<HlsManifestCreateOrUpdateParametersFormProperties>({
			AdMarkers: new FormControl<HlsManifestAdMarkers | null | undefined>(undefined),
			AdsOnDeliveryRestrictions: new FormControl<DashPackageAdsOnDeliveryRestrictions | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			IncludeIframeOnlyStream: new FormControl<boolean | null | undefined>(undefined),
			ManifestName: new FormControl<string | null | undefined>(undefined),
			PlaylistType: new FormControl<HlsManifestPlaylistType | null | undefined>(undefined),
			PlaylistWindowSeconds: new FormControl<number | null | undefined>(undefined),
			ProgramDateTimeIntervalSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
	 * determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
	 * ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
	 * contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
	 * messages of the types specified in AdTriggers that do not contain delivery restrictions will
	 * be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
	 * AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
	 * and are always treated as ads if specified in AdTriggers.
	 */
	export enum AdsOnDeliveryRestrictions { NONE = 0, RESTRICTED = 1, UNRESTRICTED = 2, BOTH = 3 }

	export enum ManifestLayout { FULL = 0, COMPACT = 1 }

	export enum Profile { NONE = 0, HBBTV_1_5 = 1 }

	export enum SegmentTemplateFormat { NUMBER_WITH_TIMELINE = 0, TIME_WITH_TIMELINE = 1, NUMBER_WITH_DURATION = 2 }

	export enum AdMarkers { NONE = 0, SCTE35_ENHANCED = 1, PASSTHROUGH = 2 }

	export enum PlaylistType { NONE = 0, EVENT = 1, VOD = 2 }

	export interface DeleteChannelResponse {
	}
	export interface DeleteChannelResponseFormProperties {
	}
	export function CreateDeleteChannelResponseFormGroup() {
		return new FormGroup<DeleteChannelResponseFormProperties>({
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

	export interface DescribeChannelResponse {
		Arn?: string | null;
		Description?: string | null;

		/** An HTTP Live Streaming (HLS) ingest resource configuration. */
		HlsIngest?: HlsIngest;
		Id?: string | null;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
	}
	export interface DescribeChannelResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDescribeChannelResponseFormGroup() {
		return new FormGroup<DescribeChannelResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeHarvestJobResponse {
		Arn?: string | null;
		ChannelId?: string | null;
		CreatedAt?: string | null;
		EndTime?: string | null;
		Id?: string | null;
		OriginEndpointId?: string | null;

		/**
		 * Configuration parameters for where in an S3 bucket to place the harvested content
		 */
		S3Destination?: S3Destination;
		StartTime?: string | null;
		Status?: CreateHarvestJobResponseStatus | null;
	}
	export interface DescribeHarvestJobResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		ChannelId: FormControl<string | null | undefined>,
		CreatedAt: FormControl<string | null | undefined>,
		EndTime: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		OriginEndpointId: FormControl<string | null | undefined>,
		StartTime: FormControl<string | null | undefined>,
		Status: FormControl<CreateHarvestJobResponseStatus | null | undefined>,
	}
	export function CreateDescribeHarvestJobResponseFormGroup() {
		return new FormGroup<DescribeHarvestJobResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ChannelId: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<string | null | undefined>(undefined),
			EndTime: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			OriginEndpointId: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<CreateHarvestJobResponseStatus | null | undefined>(undefined),
		});

	}

	export interface DescribeOriginEndpointResponse {
		Arn?: string | null;

		/** CDN Authorization credentials */
		Authorization?: Authorization;
		ChannelId?: string | null;

		/** A Common Media Application Format (CMAF) packaging configuration. */
		CmafPackage?: CmafPackage;

		/** A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration. */
		DashPackage?: DashPackage;
		Description?: string | null;

		/** An HTTP Live Streaming (HLS) packaging configuration. */
		HlsPackage?: HlsPackage;
		Id?: string | null;
		ManifestName?: string | null;

		/** A Microsoft Smooth Streaming (MSS) packaging configuration. */
		MssPackage?: MssPackage;
		Origination?: CreateOriginEndpointResponseOrigination | null;
		StartoverWindowSeconds?: number | null;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
		TimeDelaySeconds?: number | null;
		Url?: string | null;
		Whitelist?: Array<string>;
	}
	export interface DescribeOriginEndpointResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		ChannelId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		ManifestName: FormControl<string | null | undefined>,
		Origination: FormControl<CreateOriginEndpointResponseOrigination | null | undefined>,
		StartoverWindowSeconds: FormControl<number | null | undefined>,
		TimeDelaySeconds: FormControl<number | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOriginEndpointResponseFormGroup() {
		return new FormGroup<DescribeOriginEndpointResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ChannelId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			ManifestName: new FormControl<string | null | undefined>(undefined),
			Origination: new FormControl<CreateOriginEndpointResponseOrigination | null | undefined>(undefined),
			StartoverWindowSeconds: new FormControl<number | null | undefined>(undefined),
			TimeDelaySeconds: new FormControl<number | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListChannelsResponse {
		Channels?: Array<Channel>;
		NextToken?: string | null;
	}
	export interface ListChannelsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChannelsResponseFormGroup() {
		return new FormGroup<ListChannelsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Channel resource configuration. */
	export interface Channel {
		Arn?: string | null;
		Description?: string | null;

		/** An HTTP Live Streaming (HLS) ingest resource configuration. */
		HlsIngest?: HlsIngest;
		Id?: string | null;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
	}

	/** A Channel resource configuration. */
	export interface ChannelFormProperties {
		Arn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateChannelFormGroup() {
		return new FormGroup<ChannelFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListHarvestJobsResponse {
		HarvestJobs?: Array<HarvestJob>;
		NextToken?: string | null;
	}
	export interface ListHarvestJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListHarvestJobsResponseFormGroup() {
		return new FormGroup<ListHarvestJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A HarvestJob resource configuration */
	export interface HarvestJob {
		Arn?: string | null;
		ChannelId?: string | null;
		CreatedAt?: string | null;
		EndTime?: string | null;
		Id?: string | null;
		OriginEndpointId?: string | null;

		/**
		 * Configuration parameters for where in an S3 bucket to place the harvested content
		 */
		S3Destination?: S3Destination;
		StartTime?: string | null;
		Status?: CreateHarvestJobResponseStatus | null;
	}

	/** A HarvestJob resource configuration */
	export interface HarvestJobFormProperties {
		Arn: FormControl<string | null | undefined>,
		ChannelId: FormControl<string | null | undefined>,
		CreatedAt: FormControl<string | null | undefined>,
		EndTime: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		OriginEndpointId: FormControl<string | null | undefined>,
		StartTime: FormControl<string | null | undefined>,
		Status: FormControl<CreateHarvestJobResponseStatus | null | undefined>,
	}
	export function CreateHarvestJobFormGroup() {
		return new FormGroup<HarvestJobFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ChannelId: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<string | null | undefined>(undefined),
			EndTime: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			OriginEndpointId: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<CreateHarvestJobResponseStatus | null | undefined>(undefined),
		});

	}

	export interface ListOriginEndpointsResponse {
		NextToken?: string | null;
		OriginEndpoints?: Array<OriginEndpoint>;
	}
	export interface ListOriginEndpointsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOriginEndpointsResponseFormGroup() {
		return new FormGroup<ListOriginEndpointsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An OriginEndpoint resource configuration. */
	export interface OriginEndpoint {
		Arn?: string | null;

		/** CDN Authorization credentials */
		Authorization?: Authorization;
		ChannelId?: string | null;

		/** A Common Media Application Format (CMAF) packaging configuration. */
		CmafPackage?: CmafPackage;

		/** A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration. */
		DashPackage?: DashPackage;
		Description?: string | null;

		/** An HTTP Live Streaming (HLS) packaging configuration. */
		HlsPackage?: HlsPackage;
		Id?: string | null;
		ManifestName?: string | null;

		/** A Microsoft Smooth Streaming (MSS) packaging configuration. */
		MssPackage?: MssPackage;
		Origination?: CreateOriginEndpointResponseOrigination | null;
		StartoverWindowSeconds?: number | null;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
		TimeDelaySeconds?: number | null;
		Url?: string | null;
		Whitelist?: Array<string>;
	}

	/** An OriginEndpoint resource configuration. */
	export interface OriginEndpointFormProperties {
		Arn: FormControl<string | null | undefined>,
		ChannelId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		ManifestName: FormControl<string | null | undefined>,
		Origination: FormControl<CreateOriginEndpointResponseOrigination | null | undefined>,
		StartoverWindowSeconds: FormControl<number | null | undefined>,
		TimeDelaySeconds: FormControl<number | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateOriginEndpointFormGroup() {
		return new FormGroup<OriginEndpointFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ChannelId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			ManifestName: new FormControl<string | null | undefined>(undefined),
			Origination: new FormControl<CreateOriginEndpointResponseOrigination | null | undefined>(undefined),
			StartoverWindowSeconds: new FormControl<number | null | undefined>(undefined),
			TimeDelaySeconds: new FormControl<number | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: __mapOf__string;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface __mapOf__string {
	}
	export interface __mapOf__stringFormProperties {
	}
	export function Create__mapOf__stringFormGroup() {
		return new FormGroup<__mapOf__stringFormProperties>({
		});

	}

	export interface RotateChannelCredentialsResponse {
		Arn?: string | null;
		Description?: string | null;

		/** An HTTP Live Streaming (HLS) ingest resource configuration. */
		HlsIngest?: HlsIngest;
		Id?: string | null;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
	}
	export interface RotateChannelCredentialsResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateRotateChannelCredentialsResponseFormGroup() {
		return new FormGroup<RotateChannelCredentialsResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RotateIngestEndpointCredentialsResponse {
		Arn?: string | null;
		Description?: string | null;

		/** An HTTP Live Streaming (HLS) ingest resource configuration. */
		HlsIngest?: HlsIngest;
		Id?: string | null;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
	}
	export interface RotateIngestEndpointCredentialsResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateRotateIngestEndpointCredentialsResponseFormGroup() {
		return new FormGroup<RotateIngestEndpointCredentialsResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateChannelResponse {
		Arn?: string | null;
		Description?: string | null;

		/** An HTTP Live Streaming (HLS) ingest resource configuration. */
		HlsIngest?: HlsIngest;
		Id?: string | null;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
	}
	export interface UpdateChannelResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelResponseFormGroup() {
		return new FormGroup<UpdateChannelResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateOriginEndpointResponse {
		Arn?: string | null;

		/** CDN Authorization credentials */
		Authorization?: Authorization;
		ChannelId?: string | null;

		/** A Common Media Application Format (CMAF) packaging configuration. */
		CmafPackage?: CmafPackage;

		/** A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration. */
		DashPackage?: DashPackage;
		Description?: string | null;

		/** An HTTP Live Streaming (HLS) packaging configuration. */
		HlsPackage?: HlsPackage;
		Id?: string | null;
		ManifestName?: string | null;

		/** A Microsoft Smooth Streaming (MSS) packaging configuration. */
		MssPackage?: MssPackage;
		Origination?: CreateOriginEndpointResponseOrigination | null;
		StartoverWindowSeconds?: number | null;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
		TimeDelaySeconds?: number | null;
		Url?: string | null;
		Whitelist?: Array<string>;
	}
	export interface UpdateOriginEndpointResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		ChannelId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		ManifestName: FormControl<string | null | undefined>,
		Origination: FormControl<CreateOriginEndpointResponseOrigination | null | undefined>,
		StartoverWindowSeconds: FormControl<number | null | undefined>,
		TimeDelaySeconds: FormControl<number | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateUpdateOriginEndpointResponseFormGroup() {
		return new FormGroup<UpdateOriginEndpointResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ChannelId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			ManifestName: new FormControl<string | null | undefined>(undefined),
			Origination: new FormControl<CreateOriginEndpointResponseOrigination | null | undefined>(undefined),
			StartoverWindowSeconds: new FormControl<number | null | undefined>(undefined),
			TimeDelaySeconds: new FormControl<number | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Common Media Application Format (CMAF) packaging configuration. */
	export interface CmafPackageCreateOrUpdateParameters {

		/** A Common Media Application Format (CMAF) encryption configuration. */
		Encryption?: CmafEncryption;
		HlsManifests?: Array<HlsManifestCreateOrUpdateParameters>;
		SegmentDurationSeconds?: number | null;
		SegmentPrefix?: string | null;

		/** A StreamSelection configuration. */
		StreamSelection?: StreamSelection;
	}

	/** A Common Media Application Format (CMAF) packaging configuration. */
	export interface CmafPackageCreateOrUpdateParametersFormProperties {
		SegmentDurationSeconds: FormControl<number | null | undefined>,
		SegmentPrefix: FormControl<string | null | undefined>,
	}
	export function CreateCmafPackageCreateOrUpdateParametersFormGroup() {
		return new FormGroup<CmafPackageCreateOrUpdateParametersFormProperties>({
			SegmentDurationSeconds: new FormControl<number | null | undefined>(undefined),
			SegmentPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A new Channel configuration. */
	export interface CreateChannelRequest {
		Description?: string | null;
		Id: string;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
	}

	/** A new Channel configuration. */
	export interface CreateChannelRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelRequestFormGroup() {
		return new FormGroup<CreateChannelRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration parameters used to create a new HarvestJob. */
	export interface CreateHarvestJobRequest {
		EndTime: string;
		Id: string;
		OriginEndpointId: string;

		/**
		 * Configuration parameters for where in an S3 bucket to place the harvested content
		 * Required
		 */
		S3Destination: S3Destination;
		StartTime: string;
	}

	/** Configuration parameters used to create a new HarvestJob. */
	export interface CreateHarvestJobRequestFormProperties {
		EndTime: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		OriginEndpointId: FormControl<string | null | undefined>,
		StartTime: FormControl<string | null | undefined>,
	}
	export function CreateCreateHarvestJobRequestFormGroup() {
		return new FormGroup<CreateHarvestJobRequestFormProperties>({
			EndTime: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			OriginEndpointId: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Status { IN_PROGRESS = 0, SUCCEEDED = 1, FAILED = 2 }

	export enum Origination { ALLOW = 0, DENY = 1 }


	/** Configuration parameters used to create a new OriginEndpoint. */
	export interface CreateOriginEndpointRequest {

		/** CDN Authorization credentials */
		Authorization?: Authorization;
		ChannelId: string;

		/** A Common Media Application Format (CMAF) packaging configuration. */
		CmafPackage?: CmafPackageCreateOrUpdateParameters;

		/** A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration. */
		DashPackage?: DashPackage;
		Description?: string | null;

		/** An HTTP Live Streaming (HLS) packaging configuration. */
		HlsPackage?: HlsPackage;
		Id: string;
		ManifestName?: string | null;

		/** A Microsoft Smooth Streaming (MSS) packaging configuration. */
		MssPackage?: MssPackage;
		Origination?: CreateOriginEndpointResponseOrigination | null;
		StartoverWindowSeconds?: number | null;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
		TimeDelaySeconds?: number | null;
		Whitelist?: Array<string>;
	}

	/** Configuration parameters used to create a new OriginEndpoint. */
	export interface CreateOriginEndpointRequestFormProperties {
		ChannelId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		ManifestName: FormControl<string | null | undefined>,
		Origination: FormControl<CreateOriginEndpointResponseOrigination | null | undefined>,
		StartoverWindowSeconds: FormControl<number | null | undefined>,
		TimeDelaySeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreateOriginEndpointRequestFormGroup() {
		return new FormGroup<CreateOriginEndpointRequestFormProperties>({
			ChannelId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			ManifestName: new FormControl<string | null | undefined>(undefined),
			Origination: new FormControl<CreateOriginEndpointResponseOrigination | null | undefined>(undefined),
			StartoverWindowSeconds: new FormControl<number | null | undefined>(undefined),
			TimeDelaySeconds: new FormControl<number | null | undefined>(undefined),
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

	export interface DeleteOriginEndpointRequest {
	}
	export interface DeleteOriginEndpointRequestFormProperties {
	}
	export function CreateDeleteOriginEndpointRequestFormGroup() {
		return new FormGroup<DeleteOriginEndpointRequestFormProperties>({
		});

	}

	export interface DescribeChannelRequest {
	}
	export interface DescribeChannelRequestFormProperties {
	}
	export function CreateDescribeChannelRequestFormGroup() {
		return new FormGroup<DescribeChannelRequestFormProperties>({
		});

	}

	export interface DescribeHarvestJobRequest {
	}
	export interface DescribeHarvestJobRequestFormProperties {
	}
	export function CreateDescribeHarvestJobRequestFormGroup() {
		return new FormGroup<DescribeHarvestJobRequestFormProperties>({
		});

	}

	export interface DescribeOriginEndpointRequest {
	}
	export interface DescribeOriginEndpointRequestFormProperties {
	}
	export function CreateDescribeOriginEndpointRequestFormGroup() {
		return new FormGroup<DescribeOriginEndpointRequestFormProperties>({
		});

	}

	export enum EncryptionMethod { AES_128 = 0, SAMPLE_AES = 1 }

	export interface ListChannelsRequest {
	}
	export interface ListChannelsRequestFormProperties {
	}
	export function CreateListChannelsRequestFormGroup() {
		return new FormGroup<ListChannelsRequestFormProperties>({
		});

	}

	export interface ListHarvestJobsRequest {
	}
	export interface ListHarvestJobsRequestFormProperties {
	}
	export function CreateListHarvestJobsRequestFormGroup() {
		return new FormGroup<ListHarvestJobsRequestFormProperties>({
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

	export interface RotateChannelCredentialsRequest {
	}
	export interface RotateChannelCredentialsRequestFormProperties {
	}
	export function CreateRotateChannelCredentialsRequestFormGroup() {
		return new FormGroup<RotateChannelCredentialsRequestFormProperties>({
		});

	}

	export interface RotateIngestEndpointCredentialsRequest {
	}
	export interface RotateIngestEndpointCredentialsRequestFormProperties {
	}
	export function CreateRotateIngestEndpointCredentialsRequestFormGroup() {
		return new FormGroup<RotateIngestEndpointCredentialsRequestFormProperties>({
		});

	}

	export enum StreamOrder { ORIGINAL = 0, VIDEO_BITRATE_ASCENDING = 1, VIDEO_BITRATE_DESCENDING = 2 }

	export interface TagResourceRequest {
		Tags: __mapOf__string;
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


	/** Configuration parameters used to update the Channel. */
	export interface UpdateChannelRequest {
		Description?: string | null;
	}

	/** Configuration parameters used to update the Channel. */
	export interface UpdateChannelRequestFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelRequestFormGroup() {
		return new FormGroup<UpdateChannelRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration parameters used to update an existing OriginEndpoint. */
	export interface UpdateOriginEndpointRequest {

		/** CDN Authorization credentials */
		Authorization?: Authorization;

		/** A Common Media Application Format (CMAF) packaging configuration. */
		CmafPackage?: CmafPackageCreateOrUpdateParameters;

		/** A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration. */
		DashPackage?: DashPackage;
		Description?: string | null;

		/** An HTTP Live Streaming (HLS) packaging configuration. */
		HlsPackage?: HlsPackage;
		ManifestName?: string | null;

		/** A Microsoft Smooth Streaming (MSS) packaging configuration. */
		MssPackage?: MssPackage;
		Origination?: CreateOriginEndpointResponseOrigination | null;
		StartoverWindowSeconds?: number | null;
		TimeDelaySeconds?: number | null;
		Whitelist?: Array<string>;
	}

	/** Configuration parameters used to update an existing OriginEndpoint. */
	export interface UpdateOriginEndpointRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		ManifestName: FormControl<string | null | undefined>,
		Origination: FormControl<CreateOriginEndpointResponseOrigination | null | undefined>,
		StartoverWindowSeconds: FormControl<number | null | undefined>,
		TimeDelaySeconds: FormControl<number | null | undefined>,
	}
	export function CreateUpdateOriginEndpointRequestFormGroup() {
		return new FormGroup<UpdateOriginEndpointRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			ManifestName: new FormControl<string | null | undefined>(undefined),
			Origination: new FormControl<CreateOriginEndpointResponseOrigination | null | undefined>(undefined),
			StartoverWindowSeconds: new FormControl<number | null | undefined>(undefined),
			TimeDelaySeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a new Channel.
		 * Post channels
		 * @return {CreateChannelResponse} Success
		 */
		CreateChannel(requestBody: CreateChannelPostBody): Observable<CreateChannelResponse> {
			return this.http.post<CreateChannelResponse>(this.baseUri + 'channels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a collection of Channels.
		 * Get channels
		 * @param {number} maxResults Upper bound on number of records to return.
		 * @param {string} nextToken A token used to resume pagination from the end of a previous request.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListChannelsResponse} Success
		 */
		ListChannels(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListChannelsResponse> {
			return this.http.get<ListChannelsResponse>(this.baseUri + 'channels?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new HarvestJob record.
		 * Post harvest_jobs
		 * @return {CreateHarvestJobResponse} Success
		 */
		CreateHarvestJob(requestBody: CreateHarvestJobPostBody): Observable<CreateHarvestJobResponse> {
			return this.http.post<CreateHarvestJobResponse>(this.baseUri + 'harvest_jobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a collection of HarvestJob records.
		 * Get harvest_jobs
		 * @param {string} includeChannelId When specified, the request will return only HarvestJobs associated with the given Channel ID.
		 * @param {string} includeStatus When specified, the request will return only HarvestJobs in the given status.
		 * @param {number} maxResults The upper bound on the number of records to return.
		 * @param {string} nextToken A token used to resume pagination from the end of a previous request.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListHarvestJobsResponse} Success
		 */
		ListHarvestJobs(includeChannelId: string | null | undefined, includeStatus: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListHarvestJobsResponse> {
			return this.http.get<ListHarvestJobsResponse>(this.baseUri + 'harvest_jobs?includeChannelId=' + (includeChannelId == null ? '' : encodeURIComponent(includeChannelId)) + '&includeStatus=' + (includeStatus == null ? '' : encodeURIComponent(includeStatus)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new OriginEndpoint record.
		 * Post origin_endpoints
		 * @return {CreateOriginEndpointResponse} Success
		 */
		CreateOriginEndpoint(requestBody: CreateOriginEndpointPostBody): Observable<CreateOriginEndpointResponse> {
			return this.http.post<CreateOriginEndpointResponse>(this.baseUri + 'origin_endpoints', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a collection of OriginEndpoint records.
		 * Get origin_endpoints
		 * @param {string} channelId When specified, the request will return only OriginEndpoints associated with the given Channel ID.
		 * @param {number} maxResults The upper bound on the number of records to return.
		 * @param {string} nextToken A token used to resume pagination from the end of a previous request.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListOriginEndpointsResponse} Success
		 */
		ListOriginEndpoints(channelId: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListOriginEndpointsResponse> {
			return this.http.get<ListOriginEndpointsResponse>(this.baseUri + 'origin_endpoints?channelId=' + (channelId == null ? '' : encodeURIComponent(channelId)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Deletes an existing Channel.
		 * Delete channels/{id}
		 * @param {string} id The ID of the Channel to delete.
		 * @return {void} 
		 */
		DeleteChannel(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'channels/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets details about a Channel.
		 * Get channels/{id}
		 * @param {string} id The ID of a Channel.
		 * @return {DescribeChannelResponse} Success
		 */
		DescribeChannel(id: string): Observable<DescribeChannelResponse> {
			return this.http.get<DescribeChannelResponse>(this.baseUri + 'channels/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Updates an existing Channel.
		 * Put channels/{id}
		 * @param {string} id The ID of the Channel to update.
		 * @return {UpdateChannelResponse} Success
		 */
		UpdateChannel(id: string, requestBody: UpdateChannelPutBody): Observable<UpdateChannelResponse> {
			return this.http.put<UpdateChannelResponse>(this.baseUri + 'channels/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing OriginEndpoint.
		 * Delete origin_endpoints/{id}
		 * @param {string} id The ID of the OriginEndpoint to delete.
		 * @return {void} 
		 */
		DeleteOriginEndpoint(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'origin_endpoints/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets details about an existing OriginEndpoint.
		 * Get origin_endpoints/{id}
		 * @param {string} id The ID of the OriginEndpoint.
		 * @return {DescribeOriginEndpointResponse} Success
		 */
		DescribeOriginEndpoint(id: string): Observable<DescribeOriginEndpointResponse> {
			return this.http.get<DescribeOriginEndpointResponse>(this.baseUri + 'origin_endpoints/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Updates an existing OriginEndpoint.
		 * Put origin_endpoints/{id}
		 * @param {string} id The ID of the OriginEndpoint to update.
		 * @return {UpdateOriginEndpointResponse} Success
		 */
		UpdateOriginEndpoint(id: string, requestBody: UpdateOriginEndpointPutBody): Observable<UpdateOriginEndpointResponse> {
			return this.http.put<UpdateOriginEndpointResponse>(this.baseUri + 'origin_endpoints/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets details about an existing HarvestJob.
		 * Get harvest_jobs/{id}
		 * @param {string} id The ID of the HarvestJob.
		 * @return {DescribeHarvestJobResponse} Success
		 */
		DescribeHarvestJob(id: string): Observable<DescribeHarvestJobResponse> {
			return this.http.get<DescribeHarvestJobResponse>(this.baseUri + 'harvest_jobs/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Get tags/{resource_arn}
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resource_arn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)), {});
		}

		/**
		 * Post tags/{resource_arn}
		 * @return {void} 
		 */
		TagResource(resource_arn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Changes the Channel's first IngestEndpoint's username and password. WARNING - This API is deprecated. Please use RotateIngestEndpointCredentials instead
		 * Put channels/{id}/credentials
		 * @param {string} id The ID of the channel to update.
		 * @return {RotateChannelCredentialsResponse} Success
		 */
		RotateChannelCredentials(id: string): Observable<RotateChannelCredentialsResponse> {
			return this.http.put<RotateChannelCredentialsResponse>(this.baseUri + 'channels/' + (id == null ? '' : encodeURIComponent(id)) + '/credentials', null, {});
		}

		/**
		 * Rotate the IngestEndpoint's username and password, as specified by the IngestEndpoint's id.
		 * Put channels/{id}/ingest_endpoints/{ingest_endpoint_id}/credentials
		 * @param {string} id The ID of the channel the IngestEndpoint is on.
		 * @param {string} ingest_endpoint_id The id of the IngestEndpoint whose credentials should be rotated
		 * @return {RotateIngestEndpointCredentialsResponse} Success
		 */
		RotateIngestEndpointCredentials(id: string, ingest_endpoint_id: string): Observable<RotateIngestEndpointCredentialsResponse> {
			return this.http.put<RotateIngestEndpointCredentialsResponse>(this.baseUri + 'channels/' + (id == null ? '' : encodeURIComponent(id)) + '/ingest_endpoints/' + (ingest_endpoint_id == null ? '' : encodeURIComponent(ingest_endpoint_id)) + '/credentials', null, {});
		}

		/**
		 * Delete tags/{resource_arn}#tagKeys
		 * @param {Array<string>} tagKeys The key(s) of tag to be deleted
		 * @return {void} 
		 */
		UntagResource(resource_arn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}
	}

	export interface CreateChannelPostBody {

		/** A short text description of the Channel. */
		description?: string | null;

		/**
		 * The ID of the Channel. The ID must be unique within the region and it
		 * cannot be changed after a Channel is created.
		 * Required
		 */
		id: string;

		/** A collection of tags associated with a resource */
		tags?: {[id: string]: string };
	}
	export interface CreateChannelPostBodyFormProperties {

		/** A short text description of the Channel. */
		description: FormControl<string | null | undefined>,

		/**
		 * The ID of the Channel. The ID must be unique within the region and it
		 * cannot be changed after a Channel is created.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** A collection of tags associated with a resource */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateChannelPostBodyFormGroup() {
		return new FormGroup<CreateChannelPostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateHarvestJobPostBody {

		/**
		 * The end of the time-window which will be harvested
		 * Required
		 */
		endTime: string;

		/**
		 * The ID of the HarvestJob. The ID must be unique within the region
		 * and it cannot be changed after the HarvestJob is submitted
		 * Required
		 */
		id: string;

		/**
		 * The ID of the OriginEndpoint that the HarvestJob will harvest from.
		 * This cannot be changed after the HarvestJob is submitted.
		 * Required
		 */
		originEndpointId: string;

		/**
		 * Configuration parameters for where in an S3 bucket to place the harvested content
		 * Required
		 */
		s3Destination: CreateHarvestJobPostBodyS3Destination;

		/**
		 * The start of the time-window which will be harvested
		 * Required
		 */
		startTime: string;
	}
	export interface CreateHarvestJobPostBodyFormProperties {

		/**
		 * The end of the time-window which will be harvested
		 * Required
		 */
		endTime: FormControl<string | null | undefined>,

		/**
		 * The ID of the HarvestJob. The ID must be unique within the region
		 * and it cannot be changed after the HarvestJob is submitted
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The ID of the OriginEndpoint that the HarvestJob will harvest from.
		 * This cannot be changed after the HarvestJob is submitted.
		 * Required
		 */
		originEndpointId: FormControl<string | null | undefined>,

		/**
		 * The start of the time-window which will be harvested
		 * Required
		 */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateCreateHarvestJobPostBodyFormGroup() {
		return new FormGroup<CreateHarvestJobPostBodyFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			originEndpointId: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateHarvestJobPostBodyS3Destination {
		BucketName?: string | null;
		ManifestKey?: string | null;
		RoleArn?: string | null;
	}
	export interface CreateHarvestJobPostBodyS3DestinationFormProperties {
		BucketName: FormControl<string | null | undefined>,
		ManifestKey: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateHarvestJobPostBodyS3DestinationFormGroup() {
		return new FormGroup<CreateHarvestJobPostBodyS3DestinationFormProperties>({
			BucketName: new FormControl<string | null | undefined>(undefined),
			ManifestKey: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateOriginEndpointPostBody {

		/** CDN Authorization credentials */
		authorization?: CreateOriginEndpointPostBodyAuthorization;

		/**
		 * The ID of the Channel that the OriginEndpoint will be associated with.
		 * This cannot be changed after the OriginEndpoint is created.
		 * Required
		 */
		channelId: string;

		/** A Common Media Application Format (CMAF) packaging configuration. */
		cmafPackage?: CreateOriginEndpointPostBodyCmafPackage;

		/** A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration. */
		dashPackage?: CreateOriginEndpointPostBodyDashPackage;

		/** A short text description of the OriginEndpoint. */
		description?: string | null;

		/** An HTTP Live Streaming (HLS) packaging configuration. */
		hlsPackage?: CreateOriginEndpointPostBodyHlsPackage;

		/**
		 * The ID of the OriginEndpoint.  The ID must be unique within the region
		 * and it cannot be changed after the OriginEndpoint is created.
		 * Required
		 */
		id: string;

		/** A short string that will be used as the filename of the OriginEndpoint URL (defaults to "index"). */
		manifestName?: string | null;

		/** A Microsoft Smooth Streaming (MSS) packaging configuration. */
		mssPackage?: CreateOriginEndpointPostBodyMssPackage;

		/**
		 * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
		 * may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be
		 * requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
		 */
		origination?: CreateOriginEndpointResponseOrigination | null;

		/**
		 * Maximum duration (seconds) of content to retain for startover playback.
		 * If not specified, startover playback will be disabled for the OriginEndpoint.
		 */
		startoverWindowSeconds?: number | null;

		/** A collection of tags associated with a resource */
		tags?: {[id: string]: string };

		/**
		 * Amount of delay (seconds) to enforce on the playback of live content.
		 * If not specified, there will be no time delay in effect for the OriginEndpoint.
		 */
		timeDelaySeconds?: number | null;

		/** A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint. */
		whitelist?: Array<string>;
	}
	export interface CreateOriginEndpointPostBodyFormProperties {

		/**
		 * The ID of the Channel that the OriginEndpoint will be associated with.
		 * This cannot be changed after the OriginEndpoint is created.
		 * Required
		 */
		channelId: FormControl<string | null | undefined>,

		/** A short text description of the OriginEndpoint. */
		description: FormControl<string | null | undefined>,

		/**
		 * The ID of the OriginEndpoint.  The ID must be unique within the region
		 * and it cannot be changed after the OriginEndpoint is created.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** A short string that will be used as the filename of the OriginEndpoint URL (defaults to "index"). */
		manifestName: FormControl<string | null | undefined>,

		/**
		 * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
		 * may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be
		 * requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
		 */
		origination: FormControl<CreateOriginEndpointResponseOrigination | null | undefined>,

		/**
		 * Maximum duration (seconds) of content to retain for startover playback.
		 * If not specified, startover playback will be disabled for the OriginEndpoint.
		 */
		startoverWindowSeconds: FormControl<number | null | undefined>,

		/** A collection of tags associated with a resource */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Amount of delay (seconds) to enforce on the playback of live content.
		 * If not specified, there will be no time delay in effect for the OriginEndpoint.
		 */
		timeDelaySeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreateOriginEndpointPostBodyFormGroup() {
		return new FormGroup<CreateOriginEndpointPostBodyFormProperties>({
			channelId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			manifestName: new FormControl<string | null | undefined>(undefined),
			origination: new FormControl<CreateOriginEndpointResponseOrigination | null | undefined>(undefined),
			startoverWindowSeconds: new FormControl<number | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			timeDelaySeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateOriginEndpointPostBodyAuthorization {
		CdnIdentifierSecret?: string | null;
		SecretsRoleArn?: string | null;
	}
	export interface CreateOriginEndpointPostBodyAuthorizationFormProperties {
		CdnIdentifierSecret: FormControl<string | null | undefined>,
		SecretsRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateOriginEndpointPostBodyAuthorizationFormGroup() {
		return new FormGroup<CreateOriginEndpointPostBodyAuthorizationFormProperties>({
			CdnIdentifierSecret: new FormControl<string | null | undefined>(undefined),
			SecretsRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateOriginEndpointPostBodyCmafPackage {

		/** A Common Media Application Format (CMAF) encryption configuration. */
		Encryption?: CmafEncryption;
		HlsManifests?: Array<HlsManifestCreateOrUpdateParameters>;
		SegmentDurationSeconds?: number | null;
		SegmentPrefix?: string | null;

		/** A StreamSelection configuration. */
		StreamSelection?: StreamSelection;
	}
	export interface CreateOriginEndpointPostBodyCmafPackageFormProperties {
		SegmentDurationSeconds: FormControl<number | null | undefined>,
		SegmentPrefix: FormControl<string | null | undefined>,
	}
	export function CreateCreateOriginEndpointPostBodyCmafPackageFormGroup() {
		return new FormGroup<CreateOriginEndpointPostBodyCmafPackageFormProperties>({
			SegmentDurationSeconds: new FormControl<number | null | undefined>(undefined),
			SegmentPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateOriginEndpointPostBodyDashPackage {

		/**
		 * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
		 * ad markers are output.  Specify multiple items to create ad markers for all of the included
		 * message types.
		 */
		AdTriggers?: Array<__AdTriggersElement>;

		/**
		 * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
		 * determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
		 * ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
		 * contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
		 * messages of the types specified in AdTriggers that do not contain delivery restrictions will
		 * be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
		 * AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
		 * and are always treated as ads if specified in AdTriggers.
		 */
		AdsOnDeliveryRestrictions?: DashPackageAdsOnDeliveryRestrictions | null;

		/** A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration. */
		Encryption?: DashEncryption;
		ManifestLayout?: DashPackageManifestLayout | null;
		ManifestWindowSeconds?: number | null;
		MinBufferTimeSeconds?: number | null;
		MinUpdatePeriodSeconds?: number | null;
		PeriodTriggers?: Array<__PeriodTriggersElement>;
		Profile?: DashPackageProfile | null;
		SegmentDurationSeconds?: number | null;
		SegmentTemplateFormat?: DashPackageSegmentTemplateFormat | null;

		/** A StreamSelection configuration. */
		StreamSelection?: StreamSelection;
		SuggestedPresentationDelaySeconds?: number | null;
	}
	export interface CreateOriginEndpointPostBodyDashPackageFormProperties {

		/**
		 * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
		 * determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
		 * ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
		 * contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
		 * messages of the types specified in AdTriggers that do not contain delivery restrictions will
		 * be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
		 * AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
		 * and are always treated as ads if specified in AdTriggers.
		 */
		AdsOnDeliveryRestrictions: FormControl<DashPackageAdsOnDeliveryRestrictions | null | undefined>,
		ManifestLayout: FormControl<DashPackageManifestLayout | null | undefined>,
		ManifestWindowSeconds: FormControl<number | null | undefined>,
		MinBufferTimeSeconds: FormControl<number | null | undefined>,
		MinUpdatePeriodSeconds: FormControl<number | null | undefined>,
		Profile: FormControl<DashPackageProfile | null | undefined>,
		SegmentDurationSeconds: FormControl<number | null | undefined>,
		SegmentTemplateFormat: FormControl<DashPackageSegmentTemplateFormat | null | undefined>,
		SuggestedPresentationDelaySeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreateOriginEndpointPostBodyDashPackageFormGroup() {
		return new FormGroup<CreateOriginEndpointPostBodyDashPackageFormProperties>({
			AdsOnDeliveryRestrictions: new FormControl<DashPackageAdsOnDeliveryRestrictions | null | undefined>(undefined),
			ManifestLayout: new FormControl<DashPackageManifestLayout | null | undefined>(undefined),
			ManifestWindowSeconds: new FormControl<number | null | undefined>(undefined),
			MinBufferTimeSeconds: new FormControl<number | null | undefined>(undefined),
			MinUpdatePeriodSeconds: new FormControl<number | null | undefined>(undefined),
			Profile: new FormControl<DashPackageProfile | null | undefined>(undefined),
			SegmentDurationSeconds: new FormControl<number | null | undefined>(undefined),
			SegmentTemplateFormat: new FormControl<DashPackageSegmentTemplateFormat | null | undefined>(undefined),
			SuggestedPresentationDelaySeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateOriginEndpointPostBodyHlsPackage {
		AdMarkers?: HlsManifestAdMarkers | null;

		/**
		 * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
		 * ad markers are output.  Specify multiple items to create ad markers for all of the included
		 * message types.
		 */
		AdTriggers?: Array<__AdTriggersElement>;

		/**
		 * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
		 * determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
		 * ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
		 * contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
		 * messages of the types specified in AdTriggers that do not contain delivery restrictions will
		 * be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
		 * AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
		 * and are always treated as ads if specified in AdTriggers.
		 */
		AdsOnDeliveryRestrictions?: DashPackageAdsOnDeliveryRestrictions | null;

		/** An HTTP Live Streaming (HLS) encryption configuration. */
		Encryption?: HlsEncryption;
		IncludeIframeOnlyStream?: boolean | null;
		PlaylistType?: HlsManifestPlaylistType | null;
		PlaylistWindowSeconds?: number | null;
		ProgramDateTimeIntervalSeconds?: number | null;
		SegmentDurationSeconds?: number | null;

		/** A StreamSelection configuration. */
		StreamSelection?: StreamSelection;
		UseAudioRenditionGroup?: boolean | null;
	}
	export interface CreateOriginEndpointPostBodyHlsPackageFormProperties {
		AdMarkers: FormControl<HlsManifestAdMarkers | null | undefined>,

		/**
		 * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
		 * determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
		 * ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
		 * contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
		 * messages of the types specified in AdTriggers that do not contain delivery restrictions will
		 * be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
		 * AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
		 * and are always treated as ads if specified in AdTriggers.
		 */
		AdsOnDeliveryRestrictions: FormControl<DashPackageAdsOnDeliveryRestrictions | null | undefined>,
		IncludeIframeOnlyStream: FormControl<boolean | null | undefined>,
		PlaylistType: FormControl<HlsManifestPlaylistType | null | undefined>,
		PlaylistWindowSeconds: FormControl<number | null | undefined>,
		ProgramDateTimeIntervalSeconds: FormControl<number | null | undefined>,
		SegmentDurationSeconds: FormControl<number | null | undefined>,
		UseAudioRenditionGroup: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateOriginEndpointPostBodyHlsPackageFormGroup() {
		return new FormGroup<CreateOriginEndpointPostBodyHlsPackageFormProperties>({
			AdMarkers: new FormControl<HlsManifestAdMarkers | null | undefined>(undefined),
			AdsOnDeliveryRestrictions: new FormControl<DashPackageAdsOnDeliveryRestrictions | null | undefined>(undefined),
			IncludeIframeOnlyStream: new FormControl<boolean | null | undefined>(undefined),
			PlaylistType: new FormControl<HlsManifestPlaylistType | null | undefined>(undefined),
			PlaylistWindowSeconds: new FormControl<number | null | undefined>(undefined),
			ProgramDateTimeIntervalSeconds: new FormControl<number | null | undefined>(undefined),
			SegmentDurationSeconds: new FormControl<number | null | undefined>(undefined),
			UseAudioRenditionGroup: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateOriginEndpointPostBodyMssPackage {

		/** A Microsoft Smooth Streaming (MSS) encryption configuration. */
		Encryption?: MssEncryption;
		ManifestWindowSeconds?: number | null;
		SegmentDurationSeconds?: number | null;

		/** A StreamSelection configuration. */
		StreamSelection?: StreamSelection;
	}
	export interface CreateOriginEndpointPostBodyMssPackageFormProperties {
		ManifestWindowSeconds: FormControl<number | null | undefined>,
		SegmentDurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreateOriginEndpointPostBodyMssPackageFormGroup() {
		return new FormGroup<CreateOriginEndpointPostBodyMssPackageFormProperties>({
			ManifestWindowSeconds: new FormControl<number | null | undefined>(undefined),
			SegmentDurationSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateChannelPutBody {

		/** A short text description of the Channel. */
		description?: string | null;
	}
	export interface UpdateChannelPutBodyFormProperties {

		/** A short text description of the Channel. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelPutBodyFormGroup() {
		return new FormGroup<UpdateChannelPutBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateOriginEndpointPutBody {

		/** CDN Authorization credentials */
		authorization?: UpdateOriginEndpointPutBodyAuthorization;

		/** A Common Media Application Format (CMAF) packaging configuration. */
		cmafPackage?: UpdateOriginEndpointPutBodyCmafPackage;

		/** A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration. */
		dashPackage?: UpdateOriginEndpointPutBodyDashPackage;

		/** A short text description of the OriginEndpoint. */
		description?: string | null;

		/** An HTTP Live Streaming (HLS) packaging configuration. */
		hlsPackage?: UpdateOriginEndpointPutBodyHlsPackage;

		/** A short string that will be appended to the end of the Endpoint URL. */
		manifestName?: string | null;

		/** A Microsoft Smooth Streaming (MSS) packaging configuration. */
		mssPackage?: UpdateOriginEndpointPutBodyMssPackage;

		/**
		 * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
		 * may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be
		 * requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
		 */
		origination?: CreateOriginEndpointResponseOrigination | null;

		/**
		 * Maximum duration (in seconds) of content to retain for startover playback.
		 * If not specified, startover playback will be disabled for the OriginEndpoint.
		 */
		startoverWindowSeconds?: number | null;

		/**
		 * Amount of delay (in seconds) to enforce on the playback of live content.
		 * If not specified, there will be no time delay in effect for the OriginEndpoint.
		 */
		timeDelaySeconds?: number | null;

		/** A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint. */
		whitelist?: Array<string>;
	}
	export interface UpdateOriginEndpointPutBodyFormProperties {

		/** A short text description of the OriginEndpoint. */
		description: FormControl<string | null | undefined>,

		/** A short string that will be appended to the end of the Endpoint URL. */
		manifestName: FormControl<string | null | undefined>,

		/**
		 * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
		 * may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be
		 * requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
		 */
		origination: FormControl<CreateOriginEndpointResponseOrigination | null | undefined>,

		/**
		 * Maximum duration (in seconds) of content to retain for startover playback.
		 * If not specified, startover playback will be disabled for the OriginEndpoint.
		 */
		startoverWindowSeconds: FormControl<number | null | undefined>,

		/**
		 * Amount of delay (in seconds) to enforce on the playback of live content.
		 * If not specified, there will be no time delay in effect for the OriginEndpoint.
		 */
		timeDelaySeconds: FormControl<number | null | undefined>,
	}
	export function CreateUpdateOriginEndpointPutBodyFormGroup() {
		return new FormGroup<UpdateOriginEndpointPutBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			manifestName: new FormControl<string | null | undefined>(undefined),
			origination: new FormControl<CreateOriginEndpointResponseOrigination | null | undefined>(undefined),
			startoverWindowSeconds: new FormControl<number | null | undefined>(undefined),
			timeDelaySeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateOriginEndpointPutBodyAuthorization {
		CdnIdentifierSecret?: string | null;
		SecretsRoleArn?: string | null;
	}
	export interface UpdateOriginEndpointPutBodyAuthorizationFormProperties {
		CdnIdentifierSecret: FormControl<string | null | undefined>,
		SecretsRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateOriginEndpointPutBodyAuthorizationFormGroup() {
		return new FormGroup<UpdateOriginEndpointPutBodyAuthorizationFormProperties>({
			CdnIdentifierSecret: new FormControl<string | null | undefined>(undefined),
			SecretsRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateOriginEndpointPutBodyCmafPackage {

		/** A Common Media Application Format (CMAF) encryption configuration. */
		Encryption?: CmafEncryption;
		HlsManifests?: Array<HlsManifestCreateOrUpdateParameters>;
		SegmentDurationSeconds?: number | null;
		SegmentPrefix?: string | null;

		/** A StreamSelection configuration. */
		StreamSelection?: StreamSelection;
	}
	export interface UpdateOriginEndpointPutBodyCmafPackageFormProperties {
		SegmentDurationSeconds: FormControl<number | null | undefined>,
		SegmentPrefix: FormControl<string | null | undefined>,
	}
	export function CreateUpdateOriginEndpointPutBodyCmafPackageFormGroup() {
		return new FormGroup<UpdateOriginEndpointPutBodyCmafPackageFormProperties>({
			SegmentDurationSeconds: new FormControl<number | null | undefined>(undefined),
			SegmentPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateOriginEndpointPutBodyDashPackage {

		/**
		 * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
		 * ad markers are output.  Specify multiple items to create ad markers for all of the included
		 * message types.
		 */
		AdTriggers?: Array<__AdTriggersElement>;

		/**
		 * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
		 * determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
		 * ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
		 * contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
		 * messages of the types specified in AdTriggers that do not contain delivery restrictions will
		 * be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
		 * AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
		 * and are always treated as ads if specified in AdTriggers.
		 */
		AdsOnDeliveryRestrictions?: DashPackageAdsOnDeliveryRestrictions | null;

		/** A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration. */
		Encryption?: DashEncryption;
		ManifestLayout?: DashPackageManifestLayout | null;
		ManifestWindowSeconds?: number | null;
		MinBufferTimeSeconds?: number | null;
		MinUpdatePeriodSeconds?: number | null;
		PeriodTriggers?: Array<__PeriodTriggersElement>;
		Profile?: DashPackageProfile | null;
		SegmentDurationSeconds?: number | null;
		SegmentTemplateFormat?: DashPackageSegmentTemplateFormat | null;

		/** A StreamSelection configuration. */
		StreamSelection?: StreamSelection;
		SuggestedPresentationDelaySeconds?: number | null;
	}
	export interface UpdateOriginEndpointPutBodyDashPackageFormProperties {

		/**
		 * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
		 * determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
		 * ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
		 * contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
		 * messages of the types specified in AdTriggers that do not contain delivery restrictions will
		 * be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
		 * AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
		 * and are always treated as ads if specified in AdTriggers.
		 */
		AdsOnDeliveryRestrictions: FormControl<DashPackageAdsOnDeliveryRestrictions | null | undefined>,
		ManifestLayout: FormControl<DashPackageManifestLayout | null | undefined>,
		ManifestWindowSeconds: FormControl<number | null | undefined>,
		MinBufferTimeSeconds: FormControl<number | null | undefined>,
		MinUpdatePeriodSeconds: FormControl<number | null | undefined>,
		Profile: FormControl<DashPackageProfile | null | undefined>,
		SegmentDurationSeconds: FormControl<number | null | undefined>,
		SegmentTemplateFormat: FormControl<DashPackageSegmentTemplateFormat | null | undefined>,
		SuggestedPresentationDelaySeconds: FormControl<number | null | undefined>,
	}
	export function CreateUpdateOriginEndpointPutBodyDashPackageFormGroup() {
		return new FormGroup<UpdateOriginEndpointPutBodyDashPackageFormProperties>({
			AdsOnDeliveryRestrictions: new FormControl<DashPackageAdsOnDeliveryRestrictions | null | undefined>(undefined),
			ManifestLayout: new FormControl<DashPackageManifestLayout | null | undefined>(undefined),
			ManifestWindowSeconds: new FormControl<number | null | undefined>(undefined),
			MinBufferTimeSeconds: new FormControl<number | null | undefined>(undefined),
			MinUpdatePeriodSeconds: new FormControl<number | null | undefined>(undefined),
			Profile: new FormControl<DashPackageProfile | null | undefined>(undefined),
			SegmentDurationSeconds: new FormControl<number | null | undefined>(undefined),
			SegmentTemplateFormat: new FormControl<DashPackageSegmentTemplateFormat | null | undefined>(undefined),
			SuggestedPresentationDelaySeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateOriginEndpointPutBodyHlsPackage {
		AdMarkers?: HlsManifestAdMarkers | null;

		/**
		 * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
		 * ad markers are output.  Specify multiple items to create ad markers for all of the included
		 * message types.
		 */
		AdTriggers?: Array<__AdTriggersElement>;

		/**
		 * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
		 * determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
		 * ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
		 * contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
		 * messages of the types specified in AdTriggers that do not contain delivery restrictions will
		 * be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
		 * AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
		 * and are always treated as ads if specified in AdTriggers.
		 */
		AdsOnDeliveryRestrictions?: DashPackageAdsOnDeliveryRestrictions | null;

		/** An HTTP Live Streaming (HLS) encryption configuration. */
		Encryption?: HlsEncryption;
		IncludeIframeOnlyStream?: boolean | null;
		PlaylistType?: HlsManifestPlaylistType | null;
		PlaylistWindowSeconds?: number | null;
		ProgramDateTimeIntervalSeconds?: number | null;
		SegmentDurationSeconds?: number | null;

		/** A StreamSelection configuration. */
		StreamSelection?: StreamSelection;
		UseAudioRenditionGroup?: boolean | null;
	}
	export interface UpdateOriginEndpointPutBodyHlsPackageFormProperties {
		AdMarkers: FormControl<HlsManifestAdMarkers | null | undefined>,

		/**
		 * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
		 * determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
		 * ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
		 * contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
		 * messages of the types specified in AdTriggers that do not contain delivery restrictions will
		 * be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
		 * AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
		 * and are always treated as ads if specified in AdTriggers.
		 */
		AdsOnDeliveryRestrictions: FormControl<DashPackageAdsOnDeliveryRestrictions | null | undefined>,
		IncludeIframeOnlyStream: FormControl<boolean | null | undefined>,
		PlaylistType: FormControl<HlsManifestPlaylistType | null | undefined>,
		PlaylistWindowSeconds: FormControl<number | null | undefined>,
		ProgramDateTimeIntervalSeconds: FormControl<number | null | undefined>,
		SegmentDurationSeconds: FormControl<number | null | undefined>,
		UseAudioRenditionGroup: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateOriginEndpointPutBodyHlsPackageFormGroup() {
		return new FormGroup<UpdateOriginEndpointPutBodyHlsPackageFormProperties>({
			AdMarkers: new FormControl<HlsManifestAdMarkers | null | undefined>(undefined),
			AdsOnDeliveryRestrictions: new FormControl<DashPackageAdsOnDeliveryRestrictions | null | undefined>(undefined),
			IncludeIframeOnlyStream: new FormControl<boolean | null | undefined>(undefined),
			PlaylistType: new FormControl<HlsManifestPlaylistType | null | undefined>(undefined),
			PlaylistWindowSeconds: new FormControl<number | null | undefined>(undefined),
			ProgramDateTimeIntervalSeconds: new FormControl<number | null | undefined>(undefined),
			SegmentDurationSeconds: new FormControl<number | null | undefined>(undefined),
			UseAudioRenditionGroup: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateOriginEndpointPutBodyMssPackage {

		/** A Microsoft Smooth Streaming (MSS) encryption configuration. */
		Encryption?: MssEncryption;
		ManifestWindowSeconds?: number | null;
		SegmentDurationSeconds?: number | null;

		/** A StreamSelection configuration. */
		StreamSelection?: StreamSelection;
	}
	export interface UpdateOriginEndpointPutBodyMssPackageFormProperties {
		ManifestWindowSeconds: FormControl<number | null | undefined>,
		SegmentDurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateUpdateOriginEndpointPutBodyMssPackageFormGroup() {
		return new FormGroup<UpdateOriginEndpointPutBodyMssPackageFormProperties>({
			ManifestWindowSeconds: new FormControl<number | null | undefined>(undefined),
			SegmentDurationSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

}

