import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateAssetResponse {
		Arn?: string | null;
		CreatedAt?: string | null;
		EgressEndpoints?: Array<EgressEndpoint>;
		Id?: string | null;
		PackagingGroupId?: string | null;
		ResourceId?: string | null;
		SourceArn?: string | null;
		SourceRoleArn?: string | null;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
	}
	export interface CreateAssetResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreatedAt: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		PackagingGroupId: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		SourceArn: FormControl<string | null | undefined>,
		SourceRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAssetResponseFormGroup() {
		return new FormGroup<CreateAssetResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			PackagingGroupId: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			SourceArn: new FormControl<string | null | undefined>(undefined),
			SourceRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The endpoint URL used to access an Asset using one PackagingConfiguration. */
	export interface EgressEndpoint {
		PackagingConfigurationId?: string | null;
		Url?: string | null;
	}

	/** The endpoint URL used to access an Asset using one PackagingConfiguration. */
	export interface EgressEndpointFormProperties {
		PackagingConfigurationId: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateEgressEndpointFormGroup() {
		return new FormGroup<EgressEndpointFormProperties>({
			PackagingConfigurationId: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
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

	export interface CreatePackagingConfigurationResponse {
		Arn?: string | null;

		/** A CMAF packaging configuration. */
		CmafPackage?: CmafPackage;

		/** A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration. */
		DashPackage?: DashPackage;

		/** An HTTP Live Streaming (HLS) packaging configuration. */
		HlsPackage?: HlsPackage;
		Id?: string | null;

		/** A Microsoft Smooth Streaming (MSS) PackagingConfiguration. */
		MssPackage?: MssPackage;
		PackagingGroupId?: string | null;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
	}
	export interface CreatePackagingConfigurationResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		PackagingGroupId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePackagingConfigurationResponseFormGroup() {
		return new FormGroup<CreatePackagingConfigurationResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			PackagingGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A CMAF packaging configuration. */
	export interface CmafPackage {

		/** A CMAF encryption configuration. */
		Encryption?: CmafEncryption;

		/** Required */
		HlsManifests: Array<HlsManifest>;
		SegmentDurationSeconds?: number | null;
	}

	/** A CMAF packaging configuration. */
	export interface CmafPackageFormProperties {
		SegmentDurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCmafPackageFormGroup() {
		return new FormGroup<CmafPackageFormProperties>({
			SegmentDurationSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A CMAF encryption configuration. */
	export interface CmafEncryption {

		/**
		 * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
		 * Required
		 */
		SpekeKeyProvider: SpekeKeyProvider;
	}

	/** A CMAF encryption configuration. */
	export interface CmafEncryptionFormProperties {
	}
	export function CreateCmafEncryptionFormGroup() {
		return new FormGroup<CmafEncryptionFormProperties>({
		});

	}


	/** A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys. */
	export interface SpekeKeyProvider {

		/** Required */
		RoleArn: string;

		/** Required */
		SystemIds: Array<string>;

		/** Required */
		Url: string;
	}

	/** A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys. */
	export interface SpekeKeyProviderFormProperties {

		/** Required */
		RoleArn: FormControl<string | null | undefined>,

		/** Required */
		Url: FormControl<string | null | undefined>,
	}
	export function CreateSpekeKeyProviderFormGroup() {
		return new FormGroup<SpekeKeyProviderFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An HTTP Live Streaming (HLS) manifest configuration. */
	export interface HlsManifest {
		AdMarkers?: HlsManifestAdMarkers | null;
		IncludeIframeOnlyStream?: boolean | null;
		ManifestName?: string | null;
		ProgramDateTimeIntervalSeconds?: number | null;
		RepeatExtXKey?: boolean | null;

		/** A StreamSelection configuration. */
		StreamSelection?: StreamSelection;
	}

	/** An HTTP Live Streaming (HLS) manifest configuration. */
	export interface HlsManifestFormProperties {
		AdMarkers: FormControl<HlsManifestAdMarkers | null | undefined>,
		IncludeIframeOnlyStream: FormControl<boolean | null | undefined>,
		ManifestName: FormControl<string | null | undefined>,
		ProgramDateTimeIntervalSeconds: FormControl<number | null | undefined>,
		RepeatExtXKey: FormControl<boolean | null | undefined>,
	}
	export function CreateHlsManifestFormGroup() {
		return new FormGroup<HlsManifestFormProperties>({
			AdMarkers: new FormControl<HlsManifestAdMarkers | null | undefined>(undefined),
			IncludeIframeOnlyStream: new FormControl<boolean | null | undefined>(undefined),
			ManifestName: new FormControl<string | null | undefined>(undefined),
			ProgramDateTimeIntervalSeconds: new FormControl<number | null | undefined>(undefined),
			RepeatExtXKey: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum HlsManifestAdMarkers { NONE = 0, SCTE35_ENHANCED = 1, PASSTHROUGH = 2 }


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

		/** Required */
		DashManifests: Array<DashManifest>;

		/** A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration. */
		Encryption?: DashEncryption;
		PeriodTriggers?: Array<__PeriodTriggersElement>;
		SegmentDurationSeconds?: number | null;
		SegmentTemplateFormat?: DashPackageSegmentTemplateFormat | null;
	}

	/** A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration. */
	export interface DashPackageFormProperties {
		SegmentDurationSeconds: FormControl<number | null | undefined>,
		SegmentTemplateFormat: FormControl<DashPackageSegmentTemplateFormat | null | undefined>,
	}
	export function CreateDashPackageFormGroup() {
		return new FormGroup<DashPackageFormProperties>({
			SegmentDurationSeconds: new FormControl<number | null | undefined>(undefined),
			SegmentTemplateFormat: new FormControl<DashPackageSegmentTemplateFormat | null | undefined>(undefined),
		});

	}


	/** A DASH manifest configuration. */
	export interface DashManifest {
		ManifestLayout?: DashManifestManifestLayout | null;
		ManifestName?: string | null;
		MinBufferTimeSeconds?: number | null;
		Profile?: DashManifestProfile | null;

		/** A StreamSelection configuration. */
		StreamSelection?: StreamSelection;
	}

	/** A DASH manifest configuration. */
	export interface DashManifestFormProperties {
		ManifestLayout: FormControl<DashManifestManifestLayout | null | undefined>,
		ManifestName: FormControl<string | null | undefined>,
		MinBufferTimeSeconds: FormControl<number | null | undefined>,
		Profile: FormControl<DashManifestProfile | null | undefined>,
	}
	export function CreateDashManifestFormGroup() {
		return new FormGroup<DashManifestFormProperties>({
			ManifestLayout: new FormControl<DashManifestManifestLayout | null | undefined>(undefined),
			ManifestName: new FormControl<string | null | undefined>(undefined),
			MinBufferTimeSeconds: new FormControl<number | null | undefined>(undefined),
			Profile: new FormControl<DashManifestProfile | null | undefined>(undefined),
		});

	}

	export enum DashManifestManifestLayout { FULL = 0, COMPACT = 1 }

	export enum DashManifestProfile { NONE = 0, HBBTV_1_5 = 1 }


	/** A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration. */
	export interface DashEncryption {

		/**
		 * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
		 * Required
		 */
		SpekeKeyProvider: SpekeKeyProvider;
	}

	/** A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration. */
	export interface DashEncryptionFormProperties {
	}
	export function CreateDashEncryptionFormGroup() {
		return new FormGroup<DashEncryptionFormProperties>({
		});

	}

	export enum __PeriodTriggersElement { ADS = 0 }

	export enum DashPackageSegmentTemplateFormat { NUMBER_WITH_TIMELINE = 0, TIME_WITH_TIMELINE = 1, NUMBER_WITH_DURATION = 2 }


	/** An HTTP Live Streaming (HLS) packaging configuration. */
	export interface HlsPackage {

		/** An HTTP Live Streaming (HLS) encryption configuration. */
		Encryption?: HlsEncryption;

		/** Required */
		HlsManifests: Array<HlsManifest>;
		SegmentDurationSeconds?: number | null;
		UseAudioRenditionGroup?: boolean | null;
	}

	/** An HTTP Live Streaming (HLS) packaging configuration. */
	export interface HlsPackageFormProperties {
		SegmentDurationSeconds: FormControl<number | null | undefined>,
		UseAudioRenditionGroup: FormControl<boolean | null | undefined>,
	}
	export function CreateHlsPackageFormGroup() {
		return new FormGroup<HlsPackageFormProperties>({
			SegmentDurationSeconds: new FormControl<number | null | undefined>(undefined),
			UseAudioRenditionGroup: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An HTTP Live Streaming (HLS) encryption configuration. */
	export interface HlsEncryption {
		ConstantInitializationVector?: string | null;
		EncryptionMethod?: HlsEncryptionEncryptionMethod | null;

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
	}
	export function CreateHlsEncryptionFormGroup() {
		return new FormGroup<HlsEncryptionFormProperties>({
			ConstantInitializationVector: new FormControl<string | null | undefined>(undefined),
			EncryptionMethod: new FormControl<HlsEncryptionEncryptionMethod | null | undefined>(undefined),
		});

	}

	export enum HlsEncryptionEncryptionMethod { AES_128 = 0, SAMPLE_AES = 1 }


	/** A Microsoft Smooth Streaming (MSS) PackagingConfiguration. */
	export interface MssPackage {

		/** A Microsoft Smooth Streaming (MSS) encryption configuration. */
		Encryption?: MssEncryption;

		/** Required */
		MssManifests: Array<MssManifest>;
		SegmentDurationSeconds?: number | null;
	}

	/** A Microsoft Smooth Streaming (MSS) PackagingConfiguration. */
	export interface MssPackageFormProperties {
		SegmentDurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateMssPackageFormGroup() {
		return new FormGroup<MssPackageFormProperties>({
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


	/** A Microsoft Smooth Streaming (MSS) manifest configuration. */
	export interface MssManifest {
		ManifestName?: string | null;

		/** A StreamSelection configuration. */
		StreamSelection?: StreamSelection;
	}

	/** A Microsoft Smooth Streaming (MSS) manifest configuration. */
	export interface MssManifestFormProperties {
		ManifestName: FormControl<string | null | undefined>,
	}
	export function CreateMssManifestFormGroup() {
		return new FormGroup<MssManifestFormProperties>({
			ManifestName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SegmentTemplateFormat { NUMBER_WITH_TIMELINE = 0, TIME_WITH_TIMELINE = 1, NUMBER_WITH_DURATION = 2 }

	export interface CreatePackagingGroupResponse {
		Arn?: string | null;

		/** CDN Authorization credentials */
		Authorization?: Authorization;
		DomainName?: string | null;
		Id?: string | null;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
	}
	export interface CreatePackagingGroupResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		DomainName: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateCreatePackagingGroupResponseFormGroup() {
		return new FormGroup<CreatePackagingGroupResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			DomainName: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CDN Authorization credentials */
	export interface Authorization {

		/** Required */
		CdnIdentifierSecret: string;

		/** Required */
		SecretsRoleArn: string;
	}

	/** CDN Authorization credentials */
	export interface AuthorizationFormProperties {

		/** Required */
		CdnIdentifierSecret: FormControl<string | null | undefined>,

		/** Required */
		SecretsRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizationFormGroup() {
		return new FormGroup<AuthorizationFormProperties>({
			CdnIdentifierSecret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecretsRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAssetResponse {
	}
	export interface DeleteAssetResponseFormProperties {
	}
	export function CreateDeleteAssetResponseFormGroup() {
		return new FormGroup<DeleteAssetResponseFormProperties>({
		});

	}

	export interface DeletePackagingConfigurationResponse {
	}
	export interface DeletePackagingConfigurationResponseFormProperties {
	}
	export function CreateDeletePackagingConfigurationResponseFormGroup() {
		return new FormGroup<DeletePackagingConfigurationResponseFormProperties>({
		});

	}

	export interface DeletePackagingGroupResponse {
	}
	export interface DeletePackagingGroupResponseFormProperties {
	}
	export function CreateDeletePackagingGroupResponseFormGroup() {
		return new FormGroup<DeletePackagingGroupResponseFormProperties>({
		});

	}

	export interface DescribeAssetResponse {
		Arn?: string | null;
		CreatedAt?: string | null;
		EgressEndpoints?: Array<EgressEndpoint>;
		Id?: string | null;
		PackagingGroupId?: string | null;
		ResourceId?: string | null;
		SourceArn?: string | null;
		SourceRoleArn?: string | null;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
	}
	export interface DescribeAssetResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreatedAt: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		PackagingGroupId: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		SourceArn: FormControl<string | null | undefined>,
		SourceRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAssetResponseFormGroup() {
		return new FormGroup<DescribeAssetResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			PackagingGroupId: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			SourceArn: new FormControl<string | null | undefined>(undefined),
			SourceRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribePackagingConfigurationResponse {
		Arn?: string | null;

		/** A CMAF packaging configuration. */
		CmafPackage?: CmafPackage;

		/** A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration. */
		DashPackage?: DashPackage;

		/** An HTTP Live Streaming (HLS) packaging configuration. */
		HlsPackage?: HlsPackage;
		Id?: string | null;

		/** A Microsoft Smooth Streaming (MSS) PackagingConfiguration. */
		MssPackage?: MssPackage;
		PackagingGroupId?: string | null;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
	}
	export interface DescribePackagingConfigurationResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		PackagingGroupId: FormControl<string | null | undefined>,
	}
	export function CreateDescribePackagingConfigurationResponseFormGroup() {
		return new FormGroup<DescribePackagingConfigurationResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			PackagingGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribePackagingGroupResponse {
		Arn?: string | null;

		/** CDN Authorization credentials */
		Authorization?: Authorization;
		DomainName?: string | null;
		Id?: string | null;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
	}
	export interface DescribePackagingGroupResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		DomainName: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDescribePackagingGroupResponseFormGroup() {
		return new FormGroup<DescribePackagingGroupResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			DomainName: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAssetsResponse {
		Assets?: Array<AssetShallow>;
		NextToken?: string | null;
	}
	export interface ListAssetsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssetsResponseFormGroup() {
		return new FormGroup<ListAssetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A MediaPackage VOD Asset resource. */
	export interface AssetShallow {
		Arn?: string | null;
		CreatedAt?: string | null;
		Id?: string | null;
		PackagingGroupId?: string | null;
		ResourceId?: string | null;
		SourceArn?: string | null;
		SourceRoleArn?: string | null;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
	}

	/** A MediaPackage VOD Asset resource. */
	export interface AssetShallowFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreatedAt: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		PackagingGroupId: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		SourceArn: FormControl<string | null | undefined>,
		SourceRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateAssetShallowFormGroup() {
		return new FormGroup<AssetShallowFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			PackagingGroupId: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			SourceArn: new FormControl<string | null | undefined>(undefined),
			SourceRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPackagingConfigurationsResponse {
		NextToken?: string | null;
		PackagingConfigurations?: Array<PackagingConfiguration>;
	}
	export interface ListPackagingConfigurationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPackagingConfigurationsResponseFormGroup() {
		return new FormGroup<ListPackagingConfigurationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A MediaPackage VOD PackagingConfiguration resource. */
	export interface PackagingConfiguration {
		Arn?: string | null;

		/** A CMAF packaging configuration. */
		CmafPackage?: CmafPackage;

		/** A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration. */
		DashPackage?: DashPackage;

		/** An HTTP Live Streaming (HLS) packaging configuration. */
		HlsPackage?: HlsPackage;
		Id?: string | null;

		/** A Microsoft Smooth Streaming (MSS) PackagingConfiguration. */
		MssPackage?: MssPackage;
		PackagingGroupId?: string | null;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
	}

	/** A MediaPackage VOD PackagingConfiguration resource. */
	export interface PackagingConfigurationFormProperties {
		Arn: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		PackagingGroupId: FormControl<string | null | undefined>,
	}
	export function CreatePackagingConfigurationFormGroup() {
		return new FormGroup<PackagingConfigurationFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			PackagingGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPackagingGroupsResponse {
		NextToken?: string | null;
		PackagingGroups?: Array<PackagingGroup>;
	}
	export interface ListPackagingGroupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPackagingGroupsResponseFormGroup() {
		return new FormGroup<ListPackagingGroupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A MediaPackage VOD PackagingGroup resource. */
	export interface PackagingGroup {
		Arn?: string | null;

		/** CDN Authorization credentials */
		Authorization?: Authorization;
		DomainName?: string | null;
		Id?: string | null;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
	}

	/** A MediaPackage VOD PackagingGroup resource. */
	export interface PackagingGroupFormProperties {
		Arn: FormControl<string | null | undefined>,
		DomainName: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreatePackagingGroupFormGroup() {
		return new FormGroup<PackagingGroupFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			DomainName: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
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

	export interface UpdatePackagingGroupResponse {
		Arn?: string | null;

		/** CDN Authorization credentials */
		Authorization?: Authorization;
		DomainName?: string | null;
		Id?: string | null;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
	}
	export interface UpdatePackagingGroupResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		DomainName: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePackagingGroupResponseFormGroup() {
		return new FormGroup<UpdatePackagingGroupResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			DomainName: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AdMarkers { NONE = 0, SCTE35_ENHANCED = 1, PASSTHROUGH = 2 }


	/** A new MediaPackage VOD Asset configuration. */
	export interface CreateAssetRequest {

		/** Required */
		Id: string;

		/** Required */
		PackagingGroupId: string;
		ResourceId?: string | null;

		/** Required */
		SourceArn: string;

		/** Required */
		SourceRoleArn: string;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
	}

	/** A new MediaPackage VOD Asset configuration. */
	export interface CreateAssetRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		PackagingGroupId: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,

		/** Required */
		SourceArn: FormControl<string | null | undefined>,

		/** Required */
		SourceRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAssetRequestFormGroup() {
		return new FormGroup<CreateAssetRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PackagingGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			SourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A new MediaPackage VOD PackagingConfiguration resource configuration. */
	export interface CreatePackagingConfigurationRequest {

		/** A CMAF packaging configuration. */
		CmafPackage?: CmafPackage;

		/** A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration. */
		DashPackage?: DashPackage;

		/** An HTTP Live Streaming (HLS) packaging configuration. */
		HlsPackage?: HlsPackage;

		/** Required */
		Id: string;

		/** A Microsoft Smooth Streaming (MSS) PackagingConfiguration. */
		MssPackage?: MssPackage;

		/** Required */
		PackagingGroupId: string;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
	}

	/** A new MediaPackage VOD PackagingConfiguration resource configuration. */
	export interface CreatePackagingConfigurationRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		PackagingGroupId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePackagingConfigurationRequestFormGroup() {
		return new FormGroup<CreatePackagingConfigurationRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PackagingGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A new MediaPackage VOD PackagingGroup resource configuration. */
	export interface CreatePackagingGroupRequest {

		/** CDN Authorization credentials */
		Authorization?: Authorization;

		/** Required */
		Id: string;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
	}

	/** A new MediaPackage VOD PackagingGroup resource configuration. */
	export interface CreatePackagingGroupRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateCreatePackagingGroupRequestFormGroup() {
		return new FormGroup<CreatePackagingGroupRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ManifestLayout { FULL = 0, COMPACT = 1 }

	export enum Profile { NONE = 0, HBBTV_1_5 = 1 }

	export interface DeleteAssetRequest {
	}
	export interface DeleteAssetRequestFormProperties {
	}
	export function CreateDeleteAssetRequestFormGroup() {
		return new FormGroup<DeleteAssetRequestFormProperties>({
		});

	}

	export interface DeletePackagingConfigurationRequest {
	}
	export interface DeletePackagingConfigurationRequestFormProperties {
	}
	export function CreateDeletePackagingConfigurationRequestFormGroup() {
		return new FormGroup<DeletePackagingConfigurationRequestFormProperties>({
		});

	}

	export interface DeletePackagingGroupRequest {
	}
	export interface DeletePackagingGroupRequestFormProperties {
	}
	export function CreateDeletePackagingGroupRequestFormGroup() {
		return new FormGroup<DeletePackagingGroupRequestFormProperties>({
		});

	}

	export interface DescribeAssetRequest {
	}
	export interface DescribeAssetRequestFormProperties {
	}
	export function CreateDescribeAssetRequestFormGroup() {
		return new FormGroup<DescribeAssetRequestFormProperties>({
		});

	}

	export interface DescribePackagingConfigurationRequest {
	}
	export interface DescribePackagingConfigurationRequestFormProperties {
	}
	export function CreateDescribePackagingConfigurationRequestFormGroup() {
		return new FormGroup<DescribePackagingConfigurationRequestFormProperties>({
		});

	}

	export interface DescribePackagingGroupRequest {
	}
	export interface DescribePackagingGroupRequestFormProperties {
	}
	export function CreateDescribePackagingGroupRequestFormGroup() {
		return new FormGroup<DescribePackagingGroupRequestFormProperties>({
		});

	}

	export enum EncryptionMethod { AES_128 = 0, SAMPLE_AES = 1 }

	export interface ListAssetsRequest {
	}
	export interface ListAssetsRequestFormProperties {
	}
	export function CreateListAssetsRequestFormGroup() {
		return new FormGroup<ListAssetsRequestFormProperties>({
		});

	}

	export interface ListPackagingConfigurationsRequest {
	}
	export interface ListPackagingConfigurationsRequestFormProperties {
	}
	export function CreateListPackagingConfigurationsRequestFormGroup() {
		return new FormGroup<ListPackagingConfigurationsRequestFormProperties>({
		});

	}

	export interface ListPackagingGroupsRequest {
	}
	export interface ListPackagingGroupsRequestFormProperties {
	}
	export function CreateListPackagingGroupsRequestFormGroup() {
		return new FormGroup<ListPackagingGroupsRequestFormProperties>({
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

	export enum StreamOrder { ORIGINAL = 0, VIDEO_BITRATE_ASCENDING = 1, VIDEO_BITRATE_DESCENDING = 2 }

	export interface TagResourceRequest {

		/** Required */
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


	/** A MediaPackage VOD PackagingGroup resource configuration. */
	export interface UpdatePackagingGroupRequest {

		/** CDN Authorization credentials */
		Authorization?: Authorization;
	}

	/** A MediaPackage VOD PackagingGroup resource configuration. */
	export interface UpdatePackagingGroupRequestFormProperties {
	}
	export function CreateUpdatePackagingGroupRequestFormGroup() {
		return new FormGroup<UpdatePackagingGroupRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a new MediaPackage VOD Asset resource.
		 * Post assets
		 * @return {CreateAssetResponse} Success
		 */
		CreateAsset(requestBody: CreateAssetPostBody): Observable<CreateAssetResponse> {
			return this.http.post<CreateAssetResponse>(this.baseUri + 'assets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a collection of MediaPackage VOD Asset resources.
		 * Get assets
		 * @param {number} maxResults Upper bound on number of records to return.
		 * @param {string} nextToken A token used to resume pagination from the end of a previous request.
		 * @param {string} packagingGroupId Returns Assets associated with the specified PackagingGroup.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAssetsResponse} Success
		 */
		ListAssets(maxResults: number | null | undefined, nextToken: string | null | undefined, packagingGroupId: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListAssetsResponse> {
			return this.http.get<ListAssetsResponse>(this.baseUri + 'assets?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&packagingGroupId=' + (packagingGroupId == null ? '' : encodeURIComponent(packagingGroupId)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new MediaPackage VOD PackagingConfiguration resource.
		 * Post packaging_configurations
		 * @return {CreatePackagingConfigurationResponse} Success
		 */
		CreatePackagingConfiguration(requestBody: CreatePackagingConfigurationPostBody): Observable<CreatePackagingConfigurationResponse> {
			return this.http.post<CreatePackagingConfigurationResponse>(this.baseUri + 'packaging_configurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a collection of MediaPackage VOD PackagingConfiguration resources.
		 * Get packaging_configurations
		 * @param {number} maxResults Upper bound on number of records to return.
		 * @param {string} nextToken A token used to resume pagination from the end of a previous request.
		 * @param {string} packagingGroupId Returns MediaPackage VOD PackagingConfigurations associated with the specified PackagingGroup.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPackagingConfigurationsResponse} Success
		 */
		ListPackagingConfigurations(maxResults: number | null | undefined, nextToken: string | null | undefined, packagingGroupId: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListPackagingConfigurationsResponse> {
			return this.http.get<ListPackagingConfigurationsResponse>(this.baseUri + 'packaging_configurations?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&packagingGroupId=' + (packagingGroupId == null ? '' : encodeURIComponent(packagingGroupId)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new MediaPackage VOD PackagingGroup resource.
		 * Post packaging_groups
		 * @return {CreatePackagingGroupResponse} Success
		 */
		CreatePackagingGroup(requestBody: CreatePackagingGroupPostBody): Observable<CreatePackagingGroupResponse> {
			return this.http.post<CreatePackagingGroupResponse>(this.baseUri + 'packaging_groups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a collection of MediaPackage VOD PackagingGroup resources.
		 * Get packaging_groups
		 * @param {number} maxResults Upper bound on number of records to return.
		 * @param {string} nextToken A token used to resume pagination from the end of a previous request.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPackagingGroupsResponse} Success
		 */
		ListPackagingGroups(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListPackagingGroupsResponse> {
			return this.http.get<ListPackagingGroupsResponse>(this.baseUri + 'packaging_groups?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Deletes an existing MediaPackage VOD Asset resource.
		 * Delete assets/{id}
		 * @param {string} id The ID of the MediaPackage VOD Asset resource to delete.
		 * @return {void} 
		 */
		DeleteAsset(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'assets/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a description of a MediaPackage VOD Asset resource.
		 * Get assets/{id}
		 * @param {string} id The ID of an MediaPackage VOD Asset resource.
		 * @return {DescribeAssetResponse} Success
		 */
		DescribeAsset(id: string): Observable<DescribeAssetResponse> {
			return this.http.get<DescribeAssetResponse>(this.baseUri + 'assets/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Deletes a MediaPackage VOD PackagingConfiguration resource.
		 * Delete packaging_configurations/{id}
		 * @param {string} id The ID of the MediaPackage VOD PackagingConfiguration resource to delete.
		 * @return {void} 
		 */
		DeletePackagingConfiguration(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'packaging_configurations/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a description of a MediaPackage VOD PackagingConfiguration resource.
		 * Get packaging_configurations/{id}
		 * @param {string} id The ID of a MediaPackage VOD PackagingConfiguration resource.
		 * @return {DescribePackagingConfigurationResponse} Success
		 */
		DescribePackagingConfiguration(id: string): Observable<DescribePackagingConfigurationResponse> {
			return this.http.get<DescribePackagingConfigurationResponse>(this.baseUri + 'packaging_configurations/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Deletes a MediaPackage VOD PackagingGroup resource.
		 * Delete packaging_groups/{id}
		 * @param {string} id The ID of the MediaPackage VOD PackagingGroup resource to delete.
		 * @return {void} 
		 */
		DeletePackagingGroup(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'packaging_groups/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a description of a MediaPackage VOD PackagingGroup resource.
		 * Get packaging_groups/{id}
		 * @param {string} id The ID of a MediaPackage VOD PackagingGroup resource.
		 * @return {DescribePackagingGroupResponse} Success
		 */
		DescribePackagingGroup(id: string): Observable<DescribePackagingGroupResponse> {
			return this.http.get<DescribePackagingGroupResponse>(this.baseUri + 'packaging_groups/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Updates a specific packaging group. You can't change the id attribute or any other system-generated attributes.
		 * Put packaging_groups/{id}
		 * @param {string} id The ID of a MediaPackage VOD PackagingGroup resource.
		 * @return {UpdatePackagingGroupResponse} Success
		 */
		UpdatePackagingGroup(id: string, requestBody: UpdatePackagingGroupPutBody): Observable<UpdatePackagingGroupResponse> {
			return this.http.put<UpdatePackagingGroupResponse>(this.baseUri + 'packaging_groups/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of the tags assigned to the specified resource.
		 * Get tags/{resource_arn}
		 * @param {string} resource_arn The Amazon Resource Name (ARN) for the resource. You can get this from the response to any request to the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resource_arn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)), {});
		}

		/**
		 * Adds tags to the specified resource. You can specify one or more tags to add.
		 * Post tags/{resource_arn}
		 * @param {string} resource_arn The Amazon Resource Name (ARN) for the resource. You can get this from the response to any request to the resource.
		 * @return {void} 
		 */
		TagResource(resource_arn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes tags from the specified resource. You can specify one or more tags to remove.
		 * Delete tags/{resource_arn}#tagKeys
		 * @param {string} resource_arn The Amazon Resource Name (ARN) for the resource. You can get this from the response to any request to the resource.
		 * @param {Array<string>} tagKeys A comma-separated list of the tag keys to remove from the resource.
		 * @return {void} 
		 */
		UntagResource(resource_arn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}
	}

	export interface CreateAssetPostBody {

		/**
		 * The unique identifier for the Asset.
		 * Required
		 */
		id: string;

		/**
		 * The ID of the PackagingGroup for the Asset.
		 * Required
		 */
		packagingGroupId: string;

		/** The resource ID to include in SPEKE key requests. */
		resourceId?: string | null;

		/**
		 * ARN of the source object in S3.
		 * Required
		 */
		sourceArn: string;

		/**
		 * The IAM role ARN used to access the source S3 bucket.
		 * Required
		 */
		sourceRoleArn: string;

		/** A collection of tags associated with a resource */
		tags?: {[id: string]: string };
	}
	export interface CreateAssetPostBodyFormProperties {

		/**
		 * The unique identifier for the Asset.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The ID of the PackagingGroup for the Asset.
		 * Required
		 */
		packagingGroupId: FormControl<string | null | undefined>,

		/** The resource ID to include in SPEKE key requests. */
		resourceId: FormControl<string | null | undefined>,

		/**
		 * ARN of the source object in S3.
		 * Required
		 */
		sourceArn: FormControl<string | null | undefined>,

		/**
		 * The IAM role ARN used to access the source S3 bucket.
		 * Required
		 */
		sourceRoleArn: FormControl<string | null | undefined>,

		/** A collection of tags associated with a resource */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateAssetPostBodyFormGroup() {
		return new FormGroup<CreateAssetPostBodyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			packagingGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceId: new FormControl<string | null | undefined>(undefined),
			sourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreatePackagingConfigurationPostBody {

		/** A CMAF packaging configuration. */
		cmafPackage?: CreatePackagingConfigurationPostBodyCmafPackage;

		/** A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration. */
		dashPackage?: CreatePackagingConfigurationPostBodyDashPackage;

		/** An HTTP Live Streaming (HLS) packaging configuration. */
		hlsPackage?: CreatePackagingConfigurationPostBodyHlsPackage;

		/**
		 * The ID of the PackagingConfiguration.
		 * Required
		 */
		id: string;

		/** A Microsoft Smooth Streaming (MSS) PackagingConfiguration. */
		mssPackage?: CreatePackagingConfigurationPostBodyMssPackage;

		/**
		 * The ID of a PackagingGroup.
		 * Required
		 */
		packagingGroupId: string;

		/** A collection of tags associated with a resource */
		tags?: {[id: string]: string };
	}
	export interface CreatePackagingConfigurationPostBodyFormProperties {

		/**
		 * The ID of the PackagingConfiguration.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The ID of a PackagingGroup.
		 * Required
		 */
		packagingGroupId: FormControl<string | null | undefined>,

		/** A collection of tags associated with a resource */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreatePackagingConfigurationPostBodyFormGroup() {
		return new FormGroup<CreatePackagingConfigurationPostBodyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			packagingGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreatePackagingConfigurationPostBodyCmafPackage {

		/** A CMAF encryption configuration. */
		Encryption?: CmafEncryption;
		HlsManifests?: Array<HlsManifest>;
		SegmentDurationSeconds?: number | null;
	}
	export interface CreatePackagingConfigurationPostBodyCmafPackageFormProperties {
		SegmentDurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreatePackagingConfigurationPostBodyCmafPackageFormGroup() {
		return new FormGroup<CreatePackagingConfigurationPostBodyCmafPackageFormProperties>({
			SegmentDurationSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreatePackagingConfigurationPostBodyDashPackage {
		DashManifests?: Array<DashManifest>;

		/** A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration. */
		Encryption?: DashEncryption;
		PeriodTriggers?: Array<__PeriodTriggersElement>;
		SegmentDurationSeconds?: number | null;
		SegmentTemplateFormat?: DashPackageSegmentTemplateFormat | null;
	}
	export interface CreatePackagingConfigurationPostBodyDashPackageFormProperties {
		SegmentDurationSeconds: FormControl<number | null | undefined>,
		SegmentTemplateFormat: FormControl<DashPackageSegmentTemplateFormat | null | undefined>,
	}
	export function CreateCreatePackagingConfigurationPostBodyDashPackageFormGroup() {
		return new FormGroup<CreatePackagingConfigurationPostBodyDashPackageFormProperties>({
			SegmentDurationSeconds: new FormControl<number | null | undefined>(undefined),
			SegmentTemplateFormat: new FormControl<DashPackageSegmentTemplateFormat | null | undefined>(undefined),
		});

	}

	export interface CreatePackagingConfigurationPostBodyHlsPackage {

		/** An HTTP Live Streaming (HLS) encryption configuration. */
		Encryption?: HlsEncryption;
		HlsManifests?: Array<HlsManifest>;
		SegmentDurationSeconds?: number | null;
		UseAudioRenditionGroup?: boolean | null;
	}
	export interface CreatePackagingConfigurationPostBodyHlsPackageFormProperties {
		SegmentDurationSeconds: FormControl<number | null | undefined>,
		UseAudioRenditionGroup: FormControl<boolean | null | undefined>,
	}
	export function CreateCreatePackagingConfigurationPostBodyHlsPackageFormGroup() {
		return new FormGroup<CreatePackagingConfigurationPostBodyHlsPackageFormProperties>({
			SegmentDurationSeconds: new FormControl<number | null | undefined>(undefined),
			UseAudioRenditionGroup: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreatePackagingConfigurationPostBodyMssPackage {

		/** A Microsoft Smooth Streaming (MSS) encryption configuration. */
		Encryption?: MssEncryption;
		MssManifests?: Array<MssManifest>;
		SegmentDurationSeconds?: number | null;
	}
	export interface CreatePackagingConfigurationPostBodyMssPackageFormProperties {
		SegmentDurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreatePackagingConfigurationPostBodyMssPackageFormGroup() {
		return new FormGroup<CreatePackagingConfigurationPostBodyMssPackageFormProperties>({
			SegmentDurationSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreatePackagingGroupPostBody {

		/** CDN Authorization credentials */
		authorization?: CreatePackagingGroupPostBodyAuthorization;

		/**
		 * The ID of the PackagingGroup.
		 * Required
		 */
		id: string;

		/** A collection of tags associated with a resource */
		tags?: {[id: string]: string };
	}
	export interface CreatePackagingGroupPostBodyFormProperties {

		/**
		 * The ID of the PackagingGroup.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** A collection of tags associated with a resource */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreatePackagingGroupPostBodyFormGroup() {
		return new FormGroup<CreatePackagingGroupPostBodyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreatePackagingGroupPostBodyAuthorization {
		CdnIdentifierSecret?: string | null;
		SecretsRoleArn?: string | null;
	}
	export interface CreatePackagingGroupPostBodyAuthorizationFormProperties {
		CdnIdentifierSecret: FormControl<string | null | undefined>,
		SecretsRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreatePackagingGroupPostBodyAuthorizationFormGroup() {
		return new FormGroup<CreatePackagingGroupPostBodyAuthorizationFormProperties>({
			CdnIdentifierSecret: new FormControl<string | null | undefined>(undefined),
			SecretsRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePackagingGroupPutBody {

		/** CDN Authorization credentials */
		authorization?: UpdatePackagingGroupPutBodyAuthorization;
	}
	export interface UpdatePackagingGroupPutBodyFormProperties {
	}
	export function CreateUpdatePackagingGroupPutBodyFormGroup() {
		return new FormGroup<UpdatePackagingGroupPutBodyFormProperties>({
		});

	}

	export interface UpdatePackagingGroupPutBodyAuthorization {
		CdnIdentifierSecret?: string | null;
		SecretsRoleArn?: string | null;
	}
	export interface UpdatePackagingGroupPutBodyAuthorizationFormProperties {
		CdnIdentifierSecret: FormControl<string | null | undefined>,
		SecretsRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePackagingGroupPutBodyAuthorizationFormGroup() {
		return new FormGroup<UpdatePackagingGroupPutBodyAuthorizationFormProperties>({
			CdnIdentifierSecret: new FormControl<string | null | undefined>(undefined),
			SecretsRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * A collection of tags associated with a resource
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * A collection of tags associated with a resource
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

