import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateChannelResponse {
		Arn?: string | null;
		Description?: string | null;

		/** An HTTP Live Streaming (HLS) ingest resource configuration. */
		HlsIngest?: HlsIngest | null;
		Id?: string | null;

		/** A collection of tags associated with a resource */
		Tags?: Tags | null;
	}


	/** An HTTP Live Streaming (HLS) ingest resource configuration. */
	export interface HlsIngest {
		IngestEndpoints?: Array<IngestEndpoint> | null;
	}


	/** An endpoint for ingesting source content for a Channel. */
	export interface IngestEndpoint {
		Id?: string | null;
		Password?: string | null;
		Url?: string | null;
		Username?: string | null;
	}


	/** A collection of tags associated with a resource */
	export interface Tags {
	}

	export interface UnprocessableEntityException {
	}

	export interface InternalServerErrorException {
	}

	export interface ForbiddenException {
	}

	export interface NotFoundException {
	}

	export interface ServiceUnavailableException {
	}

	export interface TooManyRequestsException {
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
		S3Destination?: S3Destination | null;
		StartTime?: string | null;
		Status?: CreateHarvestJobResponseStatus | null;
	}


	/**
	 * Configuration parameters for where in an S3 bucket to place the harvested content
	 */
	export interface S3Destination {
		BucketName: string;
		ManifestKey: string;
		RoleArn: string;
	}

	export enum CreateHarvestJobResponseStatus { IN_PROGRESS = 0, SUCCEEDED = 1, FAILED = 2 }

	export interface CreateOriginEndpointResponse {
		Arn?: string | null;

		/** CDN Authorization credentials */
		Authorization?: Authorization | null;
		ChannelId?: string | null;

		/** A Common Media Application Format (CMAF) packaging configuration. */
		CmafPackage?: CmafPackage | null;

		/** A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration. */
		DashPackage?: DashPackage | null;
		Description?: string | null;

		/** An HTTP Live Streaming (HLS) packaging configuration. */
		HlsPackage?: HlsPackage | null;
		Id?: string | null;
		ManifestName?: string | null;

		/** A Microsoft Smooth Streaming (MSS) packaging configuration. */
		MssPackage?: MssPackage | null;
		Origination?: CreateOriginEndpointResponseOrigination | null;
		StartoverWindowSeconds?: number | null;

		/** A collection of tags associated with a resource */
		Tags?: Tags | null;
		TimeDelaySeconds?: number | null;
		Url?: string | null;
		Whitelist?: Array<string> | null;
	}


	/** CDN Authorization credentials */
	export interface Authorization {
		CdnIdentifierSecret: string;
		SecretsRoleArn: string;
	}


	/** A Common Media Application Format (CMAF) packaging configuration. */
	export interface CmafPackage {

		/** A Common Media Application Format (CMAF) encryption configuration. */
		Encryption?: CmafEncryption | null;
		HlsManifests?: Array<HlsManifest> | null;
		SegmentDurationSeconds?: number | null;
		SegmentPrefix?: string | null;

		/** A StreamSelection configuration. */
		StreamSelection?: StreamSelection | null;
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


	/** A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys. */
	export interface SpekeKeyProvider {
		CertificateArn?: string | null;
		ResourceId: string;
		RoleArn: string;
		SystemIds: Array<string>;
		Url: string;
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

	export enum HlsManifestAdMarkers { NONE = 0, SCTE35_ENHANCED = 1, PASSTHROUGH = 2 }

	export enum HlsManifestPlaylistType { NONE = 0, EVENT = 1, VOD = 2 }


	/** A StreamSelection configuration. */
	export interface StreamSelection {
		MaxVideoBitsPerSecond?: number | null;
		MinVideoBitsPerSecond?: number | null;
		StreamOrder?: StreamSelectionStreamOrder | null;
	}

	export enum StreamSelectionStreamOrder { ORIGINAL = 0, VIDEO_BITRATE_ASCENDING = 1, VIDEO_BITRATE_DESCENDING = 2 }


	/** A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration. */
	export interface DashPackage {

		/**
		 * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
		 * ad markers are output.  Specify multiple items to create ad markers for all of the included
		 * message types.
		 */
		AdTriggers?: Array<__AdTriggersElement> | null;

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
		Encryption?: DashEncryption | null;
		ManifestLayout?: DashPackageManifestLayout | null;
		ManifestWindowSeconds?: number | null;
		MinBufferTimeSeconds?: number | null;
		MinUpdatePeriodSeconds?: number | null;
		PeriodTriggers?: Array<__PeriodTriggersElement> | null;
		Profile?: DashPackageProfile | null;
		SegmentDurationSeconds?: number | null;
		SegmentTemplateFormat?: DashPackageSegmentTemplateFormat | null;

		/** A StreamSelection configuration. */
		StreamSelection?: StreamSelection | null;
		SuggestedPresentationDelaySeconds?: number | null;
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
		AdTriggers?: Array<__AdTriggersElement> | null;

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
		Encryption?: HlsEncryption | null;
		IncludeIframeOnlyStream?: boolean | null;
		PlaylistType?: HlsManifestPlaylistType | null;
		PlaylistWindowSeconds?: number | null;
		ProgramDateTimeIntervalSeconds?: number | null;
		SegmentDurationSeconds?: number | null;

		/** A StreamSelection configuration. */
		StreamSelection?: StreamSelection | null;
		UseAudioRenditionGroup?: boolean | null;
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

	export enum HlsEncryptionEncryptionMethod { AES_128 = 0, SAMPLE_AES = 1 }


	/** A Microsoft Smooth Streaming (MSS) packaging configuration. */
	export interface MssPackage {

		/** A Microsoft Smooth Streaming (MSS) encryption configuration. */
		Encryption?: MssEncryption | null;
		ManifestWindowSeconds?: number | null;
		SegmentDurationSeconds?: number | null;

		/** A StreamSelection configuration. */
		StreamSelection?: StreamSelection | null;
	}


	/** A Microsoft Smooth Streaming (MSS) encryption configuration. */
	export interface MssEncryption {

		/**
		 * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
		 * Required
		 */
		SpekeKeyProvider: SpekeKeyProvider;
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
		AdTriggers?: Array<__AdTriggersElement> | null;

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

	export interface DeleteOriginEndpointResponse {
	}

	export interface DescribeChannelResponse {
		Arn?: string | null;
		Description?: string | null;

		/** An HTTP Live Streaming (HLS) ingest resource configuration. */
		HlsIngest?: HlsIngest | null;
		Id?: string | null;

		/** A collection of tags associated with a resource */
		Tags?: Tags | null;
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
		S3Destination?: S3Destination | null;
		StartTime?: string | null;
		Status?: CreateHarvestJobResponseStatus | null;
	}

	export interface DescribeOriginEndpointResponse {
		Arn?: string | null;

		/** CDN Authorization credentials */
		Authorization?: Authorization | null;
		ChannelId?: string | null;

		/** A Common Media Application Format (CMAF) packaging configuration. */
		CmafPackage?: CmafPackage | null;

		/** A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration. */
		DashPackage?: DashPackage | null;
		Description?: string | null;

		/** An HTTP Live Streaming (HLS) packaging configuration. */
		HlsPackage?: HlsPackage | null;
		Id?: string | null;
		ManifestName?: string | null;

		/** A Microsoft Smooth Streaming (MSS) packaging configuration. */
		MssPackage?: MssPackage | null;
		Origination?: CreateOriginEndpointResponseOrigination | null;
		StartoverWindowSeconds?: number | null;

		/** A collection of tags associated with a resource */
		Tags?: Tags | null;
		TimeDelaySeconds?: number | null;
		Url?: string | null;
		Whitelist?: Array<string> | null;
	}

	export interface ListChannelsResponse {
		Channels?: Array<Channel> | null;
		NextToken?: string | null;
	}


	/** A Channel resource configuration. */
	export interface Channel {
		Arn?: string | null;
		Description?: string | null;

		/** An HTTP Live Streaming (HLS) ingest resource configuration. */
		HlsIngest?: HlsIngest | null;
		Id?: string | null;

		/** A collection of tags associated with a resource */
		Tags?: Tags | null;
	}

	export interface ListHarvestJobsResponse {
		HarvestJobs?: Array<HarvestJob> | null;
		NextToken?: string | null;
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
		S3Destination?: S3Destination | null;
		StartTime?: string | null;
		Status?: CreateHarvestJobResponseStatus | null;
	}

	export interface ListOriginEndpointsResponse {
		NextToken?: string | null;
		OriginEndpoints?: Array<OriginEndpoint> | null;
	}


	/** An OriginEndpoint resource configuration. */
	export interface OriginEndpoint {
		Arn?: string | null;

		/** CDN Authorization credentials */
		Authorization?: Authorization | null;
		ChannelId?: string | null;

		/** A Common Media Application Format (CMAF) packaging configuration. */
		CmafPackage?: CmafPackage | null;

		/** A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration. */
		DashPackage?: DashPackage | null;
		Description?: string | null;

		/** An HTTP Live Streaming (HLS) packaging configuration. */
		HlsPackage?: HlsPackage | null;
		Id?: string | null;
		ManifestName?: string | null;

		/** A Microsoft Smooth Streaming (MSS) packaging configuration. */
		MssPackage?: MssPackage | null;
		Origination?: CreateOriginEndpointResponseOrigination | null;
		StartoverWindowSeconds?: number | null;

		/** A collection of tags associated with a resource */
		Tags?: Tags | null;
		TimeDelaySeconds?: number | null;
		Url?: string | null;
		Whitelist?: Array<string> | null;
	}

	export interface ListTagsForResourceResponse {
		Tags?: __mapOf__string | null;
	}

	export interface __mapOf__string {
	}

	export interface RotateChannelCredentialsResponse {
		Arn?: string | null;
		Description?: string | null;

		/** An HTTP Live Streaming (HLS) ingest resource configuration. */
		HlsIngest?: HlsIngest | null;
		Id?: string | null;

		/** A collection of tags associated with a resource */
		Tags?: Tags | null;
	}

	export interface RotateIngestEndpointCredentialsResponse {
		Arn?: string | null;
		Description?: string | null;

		/** An HTTP Live Streaming (HLS) ingest resource configuration. */
		HlsIngest?: HlsIngest | null;
		Id?: string | null;

		/** A collection of tags associated with a resource */
		Tags?: Tags | null;
	}

	export interface UpdateChannelResponse {
		Arn?: string | null;
		Description?: string | null;

		/** An HTTP Live Streaming (HLS) ingest resource configuration. */
		HlsIngest?: HlsIngest | null;
		Id?: string | null;

		/** A collection of tags associated with a resource */
		Tags?: Tags | null;
	}

	export interface UpdateOriginEndpointResponse {
		Arn?: string | null;

		/** CDN Authorization credentials */
		Authorization?: Authorization | null;
		ChannelId?: string | null;

		/** A Common Media Application Format (CMAF) packaging configuration. */
		CmafPackage?: CmafPackage | null;

		/** A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration. */
		DashPackage?: DashPackage | null;
		Description?: string | null;

		/** An HTTP Live Streaming (HLS) packaging configuration. */
		HlsPackage?: HlsPackage | null;
		Id?: string | null;
		ManifestName?: string | null;

		/** A Microsoft Smooth Streaming (MSS) packaging configuration. */
		MssPackage?: MssPackage | null;
		Origination?: CreateOriginEndpointResponseOrigination | null;
		StartoverWindowSeconds?: number | null;

		/** A collection of tags associated with a resource */
		Tags?: Tags | null;
		TimeDelaySeconds?: number | null;
		Url?: string | null;
		Whitelist?: Array<string> | null;
	}


	/** A Common Media Application Format (CMAF) packaging configuration. */
	export interface CmafPackageCreateOrUpdateParameters {

		/** A Common Media Application Format (CMAF) encryption configuration. */
		Encryption?: CmafEncryption | null;
		HlsManifests?: Array<HlsManifestCreateOrUpdateParameters> | null;
		SegmentDurationSeconds?: number | null;
		SegmentPrefix?: string | null;

		/** A StreamSelection configuration. */
		StreamSelection?: StreamSelection | null;
	}


	/** A new Channel configuration. */
	export interface CreateChannelRequest {
		Description?: string | null;
		Id: string;

		/** A collection of tags associated with a resource */
		Tags?: Tags | null;
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

	export enum Status { IN_PROGRESS = 0, SUCCEEDED = 1, FAILED = 2 }

	export enum Origination { ALLOW = 0, DENY = 1 }


	/** Configuration parameters used to create a new OriginEndpoint. */
	export interface CreateOriginEndpointRequest {

		/** CDN Authorization credentials */
		Authorization?: Authorization | null;
		ChannelId: string;

		/** A Common Media Application Format (CMAF) packaging configuration. */
		CmafPackage?: CmafPackageCreateOrUpdateParameters | null;

		/** A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration. */
		DashPackage?: DashPackage | null;
		Description?: string | null;

		/** An HTTP Live Streaming (HLS) packaging configuration. */
		HlsPackage?: HlsPackage | null;
		Id: string;
		ManifestName?: string | null;

		/** A Microsoft Smooth Streaming (MSS) packaging configuration. */
		MssPackage?: MssPackage | null;
		Origination?: CreateOriginEndpointResponseOrigination | null;
		StartoverWindowSeconds?: number | null;

		/** A collection of tags associated with a resource */
		Tags?: Tags | null;
		TimeDelaySeconds?: number | null;
		Whitelist?: Array<string> | null;
	}

	export interface DeleteChannelRequest {
	}

	export interface DeleteOriginEndpointRequest {
	}

	export interface DescribeChannelRequest {
	}

	export interface DescribeHarvestJobRequest {
	}

	export interface DescribeOriginEndpointRequest {
	}

	export enum EncryptionMethod { AES_128 = 0, SAMPLE_AES = 1 }

	export interface ListChannelsRequest {
	}

	export interface ListHarvestJobsRequest {
	}

	export interface ListOriginEndpointsRequest {
	}

	export interface ListTagsForResourceRequest {
	}

	export interface RotateChannelCredentialsRequest {
	}

	export interface RotateIngestEndpointCredentialsRequest {
	}

	export enum StreamOrder { ORIGINAL = 0, VIDEO_BITRATE_ASCENDING = 1, VIDEO_BITRATE_DESCENDING = 2 }

	export interface TagResourceRequest {
		Tags: __mapOf__string;
	}

	export interface UntagResourceRequest {
	}


	/** Configuration parameters used to update the Channel. */
	export interface UpdateChannelRequest {
		Description?: string | null;
	}


	/** Configuration parameters used to update an existing OriginEndpoint. */
	export interface UpdateOriginEndpointRequest {

		/** CDN Authorization credentials */
		Authorization?: Authorization | null;

		/** A Common Media Application Format (CMAF) packaging configuration. */
		CmafPackage?: CmafPackageCreateOrUpdateParameters | null;

		/** A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration. */
		DashPackage?: DashPackage | null;
		Description?: string | null;

		/** An HTTP Live Streaming (HLS) packaging configuration. */
		HlsPackage?: HlsPackage | null;
		ManifestName?: string | null;

		/** A Microsoft Smooth Streaming (MSS) packaging configuration. */
		MssPackage?: MssPackage | null;
		Origination?: CreateOriginEndpointResponseOrigination | null;
		StartoverWindowSeconds?: number | null;
		TimeDelaySeconds?: number | null;
		Whitelist?: Array<string> | null;
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
		tags?: {[id: string]: string } | null;
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

	export interface CreateHarvestJobPostBodyS3Destination {
		BucketName?: string | null;
		ManifestKey?: string | null;
		RoleArn?: string | null;
	}

	export interface CreateOriginEndpointPostBody {

		/** CDN Authorization credentials */
		authorization?: CreateOriginEndpointPostBodyAuthorization | null;

		/**
		 * The ID of the Channel that the OriginEndpoint will be associated with.
		 * This cannot be changed after the OriginEndpoint is created.
		 * Required
		 */
		channelId: string;

		/** A Common Media Application Format (CMAF) packaging configuration. */
		cmafPackage?: CreateOriginEndpointPostBodyCmafPackage | null;

		/** A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration. */
		dashPackage?: CreateOriginEndpointPostBodyDashPackage | null;

		/** A short text description of the OriginEndpoint. */
		description?: string | null;

		/** An HTTP Live Streaming (HLS) packaging configuration. */
		hlsPackage?: CreateOriginEndpointPostBodyHlsPackage | null;

		/**
		 * The ID of the OriginEndpoint.  The ID must be unique within the region
		 * and it cannot be changed after the OriginEndpoint is created.
		 * Required
		 */
		id: string;

		/** A short string that will be used as the filename of the OriginEndpoint URL (defaults to "index"). */
		manifestName?: string | null;

		/** A Microsoft Smooth Streaming (MSS) packaging configuration. */
		mssPackage?: CreateOriginEndpointPostBodyMssPackage | null;

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
		tags?: {[id: string]: string } | null;

		/**
		 * Amount of delay (seconds) to enforce on the playback of live content.
		 * If not specified, there will be no time delay in effect for the OriginEndpoint.
		 */
		timeDelaySeconds?: number | null;

		/** A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint. */
		whitelist?: Array<string> | null;
	}

	export interface CreateOriginEndpointPostBodyAuthorization {
		CdnIdentifierSecret?: string | null;
		SecretsRoleArn?: string | null;
	}

	export interface CreateOriginEndpointPostBodyCmafPackage {

		/** A Common Media Application Format (CMAF) encryption configuration. */
		Encryption?: CmafEncryption | null;
		HlsManifests?: Array<HlsManifestCreateOrUpdateParameters> | null;
		SegmentDurationSeconds?: number | null;
		SegmentPrefix?: string | null;

		/** A StreamSelection configuration. */
		StreamSelection?: StreamSelection | null;
	}

	export interface CreateOriginEndpointPostBodyDashPackage {

		/**
		 * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
		 * ad markers are output.  Specify multiple items to create ad markers for all of the included
		 * message types.
		 */
		AdTriggers?: Array<__AdTriggersElement> | null;

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
		Encryption?: DashEncryption | null;
		ManifestLayout?: DashPackageManifestLayout | null;
		ManifestWindowSeconds?: number | null;
		MinBufferTimeSeconds?: number | null;
		MinUpdatePeriodSeconds?: number | null;
		PeriodTriggers?: Array<__PeriodTriggersElement> | null;
		Profile?: DashPackageProfile | null;
		SegmentDurationSeconds?: number | null;
		SegmentTemplateFormat?: DashPackageSegmentTemplateFormat | null;

		/** A StreamSelection configuration. */
		StreamSelection?: StreamSelection | null;
		SuggestedPresentationDelaySeconds?: number | null;
	}

	export interface CreateOriginEndpointPostBodyHlsPackage {
		AdMarkers?: HlsManifestAdMarkers | null;

		/**
		 * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
		 * ad markers are output.  Specify multiple items to create ad markers for all of the included
		 * message types.
		 */
		AdTriggers?: Array<__AdTriggersElement> | null;

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
		Encryption?: HlsEncryption | null;
		IncludeIframeOnlyStream?: boolean | null;
		PlaylistType?: HlsManifestPlaylistType | null;
		PlaylistWindowSeconds?: number | null;
		ProgramDateTimeIntervalSeconds?: number | null;
		SegmentDurationSeconds?: number | null;

		/** A StreamSelection configuration. */
		StreamSelection?: StreamSelection | null;
		UseAudioRenditionGroup?: boolean | null;
	}

	export interface CreateOriginEndpointPostBodyMssPackage {

		/** A Microsoft Smooth Streaming (MSS) encryption configuration. */
		Encryption?: MssEncryption | null;
		ManifestWindowSeconds?: number | null;
		SegmentDurationSeconds?: number | null;

		/** A StreamSelection configuration. */
		StreamSelection?: StreamSelection | null;
	}

	export interface UpdateChannelPutBody {

		/** A short text description of the Channel. */
		description?: string | null;
	}

	export interface UpdateOriginEndpointPutBody {

		/** CDN Authorization credentials */
		authorization?: UpdateOriginEndpointPutBodyAuthorization | null;

		/** A Common Media Application Format (CMAF) packaging configuration. */
		cmafPackage?: UpdateOriginEndpointPutBodyCmafPackage | null;

		/** A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration. */
		dashPackage?: UpdateOriginEndpointPutBodyDashPackage | null;

		/** A short text description of the OriginEndpoint. */
		description?: string | null;

		/** An HTTP Live Streaming (HLS) packaging configuration. */
		hlsPackage?: UpdateOriginEndpointPutBodyHlsPackage | null;

		/** A short string that will be appended to the end of the Endpoint URL. */
		manifestName?: string | null;

		/** A Microsoft Smooth Streaming (MSS) packaging configuration. */
		mssPackage?: UpdateOriginEndpointPutBodyMssPackage | null;

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
		whitelist?: Array<string> | null;
	}

	export interface UpdateOriginEndpointPutBodyAuthorization {
		CdnIdentifierSecret?: string | null;
		SecretsRoleArn?: string | null;
	}

	export interface UpdateOriginEndpointPutBodyCmafPackage {

		/** A Common Media Application Format (CMAF) encryption configuration. */
		Encryption?: CmafEncryption | null;
		HlsManifests?: Array<HlsManifestCreateOrUpdateParameters> | null;
		SegmentDurationSeconds?: number | null;
		SegmentPrefix?: string | null;

		/** A StreamSelection configuration. */
		StreamSelection?: StreamSelection | null;
	}

	export interface UpdateOriginEndpointPutBodyDashPackage {

		/**
		 * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
		 * ad markers are output.  Specify multiple items to create ad markers for all of the included
		 * message types.
		 */
		AdTriggers?: Array<__AdTriggersElement> | null;

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
		Encryption?: DashEncryption | null;
		ManifestLayout?: DashPackageManifestLayout | null;
		ManifestWindowSeconds?: number | null;
		MinBufferTimeSeconds?: number | null;
		MinUpdatePeriodSeconds?: number | null;
		PeriodTriggers?: Array<__PeriodTriggersElement> | null;
		Profile?: DashPackageProfile | null;
		SegmentDurationSeconds?: number | null;
		SegmentTemplateFormat?: DashPackageSegmentTemplateFormat | null;

		/** A StreamSelection configuration. */
		StreamSelection?: StreamSelection | null;
		SuggestedPresentationDelaySeconds?: number | null;
	}

	export interface UpdateOriginEndpointPutBodyHlsPackage {
		AdMarkers?: HlsManifestAdMarkers | null;

		/**
		 * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
		 * ad markers are output.  Specify multiple items to create ad markers for all of the included
		 * message types.
		 */
		AdTriggers?: Array<__AdTriggersElement> | null;

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
		Encryption?: HlsEncryption | null;
		IncludeIframeOnlyStream?: boolean | null;
		PlaylistType?: HlsManifestPlaylistType | null;
		PlaylistWindowSeconds?: number | null;
		ProgramDateTimeIntervalSeconds?: number | null;
		SegmentDurationSeconds?: number | null;

		/** A StreamSelection configuration. */
		StreamSelection?: StreamSelection | null;
		UseAudioRenditionGroup?: boolean | null;
	}

	export interface UpdateOriginEndpointPutBodyMssPackage {

		/** A Microsoft Smooth Streaming (MSS) encryption configuration. */
		Encryption?: MssEncryption | null;
		ManifestWindowSeconds?: number | null;
		SegmentDurationSeconds?: number | null;

		/** A StreamSelection configuration. */
		StreamSelection?: StreamSelection | null;
	}

	export interface TagResourcePostBody {
		tags: {[id: string]: string };
	}

}

