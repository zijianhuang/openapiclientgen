import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateAssetResponse {
		Arn?: string;
		CreatedAt?: string;
		EgressEndpoints?: Array<EgressEndpoint>;
		Id?: string;
		PackagingGroupId?: string;
		ResourceId?: string;
		SourceArn?: string;
		SourceRoleArn?: string;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
	}


	/** The endpoint URL used to access an Asset using one PackagingConfiguration. */
	export interface EgressEndpoint {
		PackagingConfigurationId?: string;
		Url?: string;
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

	export interface CreatePackagingConfigurationResponse {
		Arn?: string;

		/** A CMAF packaging configuration. */
		CmafPackage?: CmafPackage;

		/** A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration. */
		DashPackage?: DashPackage;

		/** An HTTP Live Streaming (HLS) packaging configuration. */
		HlsPackage?: HlsPackage;
		Id?: string;

		/** A Microsoft Smooth Streaming (MSS) PackagingConfiguration. */
		MssPackage?: MssPackage;
		PackagingGroupId?: string;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
	}


	/** A CMAF packaging configuration. */
	export interface CmafPackage {

		/** A CMAF encryption configuration. */
		Encryption?: CmafEncryption;
		HlsManifests: Array<HlsManifest>;
		SegmentDurationSeconds?: number;
	}


	/** A CMAF encryption configuration. */
	export interface CmafEncryption {

		/**
		 * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
		 * Required
		 */
		SpekeKeyProvider: SpekeKeyProvider;
	}


	/** A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys. */
	export interface SpekeKeyProvider {
		RoleArn: string;
		SystemIds: Array<string>;
		Url: string;
	}


	/** An HTTP Live Streaming (HLS) manifest configuration. */
	export interface HlsManifest {
		AdMarkers?: HlsManifestAdMarkers;
		IncludeIframeOnlyStream?: boolean;
		ManifestName?: string;
		ProgramDateTimeIntervalSeconds?: number;
		RepeatExtXKey?: boolean;

		/** A StreamSelection configuration. */
		StreamSelection?: StreamSelection;
	}

	export enum HlsManifestAdMarkers { NONE = 0, SCTE35_ENHANCED = 1, PASSTHROUGH = 2 }


	/** A StreamSelection configuration. */
	export interface StreamSelection {
		MaxVideoBitsPerSecond?: number;
		MinVideoBitsPerSecond?: number;
		StreamOrder?: StreamSelectionStreamOrder;
	}

	export enum StreamSelectionStreamOrder { ORIGINAL = 0, VIDEO_BITRATE_ASCENDING = 1, VIDEO_BITRATE_DESCENDING = 2 }


	/** A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration. */
	export interface DashPackage {
		DashManifests: Array<DashManifest>;

		/** A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration. */
		Encryption?: DashEncryption;
		PeriodTriggers?: Array<__PeriodTriggersElement>;
		SegmentDurationSeconds?: number;
		SegmentTemplateFormat?: DashPackageSegmentTemplateFormat;
	}


	/** A DASH manifest configuration. */
	export interface DashManifest {
		ManifestLayout?: DashManifestManifestLayout;
		ManifestName?: string;
		MinBufferTimeSeconds?: number;
		Profile?: DashManifestProfile;

		/** A StreamSelection configuration. */
		StreamSelection?: StreamSelection;
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

	export enum __PeriodTriggersElement { ADS = 0 }

	export enum DashPackageSegmentTemplateFormat { NUMBER_WITH_TIMELINE = 0, TIME_WITH_TIMELINE = 1, NUMBER_WITH_DURATION = 2 }


	/** An HTTP Live Streaming (HLS) packaging configuration. */
	export interface HlsPackage {

		/** An HTTP Live Streaming (HLS) encryption configuration. */
		Encryption?: HlsEncryption;
		HlsManifests: Array<HlsManifest>;
		SegmentDurationSeconds?: number;
		UseAudioRenditionGroup?: boolean;
	}


	/** An HTTP Live Streaming (HLS) encryption configuration. */
	export interface HlsEncryption {
		ConstantInitializationVector?: string;
		EncryptionMethod?: HlsEncryptionEncryptionMethod;

		/**
		 * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
		 * Required
		 */
		SpekeKeyProvider: SpekeKeyProvider;
	}

	export enum HlsEncryptionEncryptionMethod { AES_128 = 0, SAMPLE_AES = 1 }


	/** A Microsoft Smooth Streaming (MSS) PackagingConfiguration. */
	export interface MssPackage {

		/** A Microsoft Smooth Streaming (MSS) encryption configuration. */
		Encryption?: MssEncryption;
		MssManifests: Array<MssManifest>;
		SegmentDurationSeconds?: number;
	}


	/** A Microsoft Smooth Streaming (MSS) encryption configuration. */
	export interface MssEncryption {

		/**
		 * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
		 * Required
		 */
		SpekeKeyProvider: SpekeKeyProvider;
	}


	/** A Microsoft Smooth Streaming (MSS) manifest configuration. */
	export interface MssManifest {
		ManifestName?: string;

		/** A StreamSelection configuration. */
		StreamSelection?: StreamSelection;
	}

	export enum SegmentTemplateFormat { NUMBER_WITH_TIMELINE = 0, TIME_WITH_TIMELINE = 1, NUMBER_WITH_DURATION = 2 }

	export interface CreatePackagingGroupResponse {
		Arn?: string;

		/** CDN Authorization credentials */
		Authorization?: Authorization;
		DomainName?: string;
		Id?: string;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
	}


	/** CDN Authorization credentials */
	export interface Authorization {
		CdnIdentifierSecret: string;
		SecretsRoleArn: string;
	}

	export interface DeleteAssetResponse {
	}

	export interface DeletePackagingConfigurationResponse {
	}

	export interface DeletePackagingGroupResponse {
	}

	export interface DescribeAssetResponse {
		Arn?: string;
		CreatedAt?: string;
		EgressEndpoints?: Array<EgressEndpoint>;
		Id?: string;
		PackagingGroupId?: string;
		ResourceId?: string;
		SourceArn?: string;
		SourceRoleArn?: string;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
	}

	export interface DescribePackagingConfigurationResponse {
		Arn?: string;

		/** A CMAF packaging configuration. */
		CmafPackage?: CmafPackage;

		/** A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration. */
		DashPackage?: DashPackage;

		/** An HTTP Live Streaming (HLS) packaging configuration. */
		HlsPackage?: HlsPackage;
		Id?: string;

		/** A Microsoft Smooth Streaming (MSS) PackagingConfiguration. */
		MssPackage?: MssPackage;
		PackagingGroupId?: string;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
	}

	export interface DescribePackagingGroupResponse {
		Arn?: string;

		/** CDN Authorization credentials */
		Authorization?: Authorization;
		DomainName?: string;
		Id?: string;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
	}

	export interface ListAssetsResponse {
		Assets?: Array<AssetShallow>;
		NextToken?: string;
	}


	/** A MediaPackage VOD Asset resource. */
	export interface AssetShallow {
		Arn?: string;
		CreatedAt?: string;
		Id?: string;
		PackagingGroupId?: string;
		ResourceId?: string;
		SourceArn?: string;
		SourceRoleArn?: string;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
	}

	export interface ListPackagingConfigurationsResponse {
		NextToken?: string;
		PackagingConfigurations?: Array<PackagingConfiguration>;
	}


	/** A MediaPackage VOD PackagingConfiguration resource. */
	export interface PackagingConfiguration {
		Arn?: string;

		/** A CMAF packaging configuration. */
		CmafPackage?: CmafPackage;

		/** A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration. */
		DashPackage?: DashPackage;

		/** An HTTP Live Streaming (HLS) packaging configuration. */
		HlsPackage?: HlsPackage;
		Id?: string;

		/** A Microsoft Smooth Streaming (MSS) PackagingConfiguration. */
		MssPackage?: MssPackage;
		PackagingGroupId?: string;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
	}

	export interface ListPackagingGroupsResponse {
		NextToken?: string;
		PackagingGroups?: Array<PackagingGroup>;
	}


	/** A MediaPackage VOD PackagingGroup resource. */
	export interface PackagingGroup {
		Arn?: string;

		/** CDN Authorization credentials */
		Authorization?: Authorization;
		DomainName?: string;
		Id?: string;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
	}

	export interface ListTagsForResourceResponse {
		Tags?: __mapOf__string;
	}

	export interface __mapOf__string {
	}

	export interface UpdatePackagingGroupResponse {
		Arn?: string;

		/** CDN Authorization credentials */
		Authorization?: Authorization;
		DomainName?: string;
		Id?: string;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
	}

	export enum AdMarkers { NONE = 0, SCTE35_ENHANCED = 1, PASSTHROUGH = 2 }


	/** A new MediaPackage VOD Asset configuration. */
	export interface CreateAssetRequest {
		Id: string;
		PackagingGroupId: string;
		ResourceId?: string;
		SourceArn: string;
		SourceRoleArn: string;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
	}


	/** A new MediaPackage VOD PackagingConfiguration resource configuration. */
	export interface CreatePackagingConfigurationRequest {

		/** A CMAF packaging configuration. */
		CmafPackage?: CmafPackage;

		/** A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration. */
		DashPackage?: DashPackage;

		/** An HTTP Live Streaming (HLS) packaging configuration. */
		HlsPackage?: HlsPackage;
		Id: string;

		/** A Microsoft Smooth Streaming (MSS) PackagingConfiguration. */
		MssPackage?: MssPackage;
		PackagingGroupId: string;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
	}


	/** A new MediaPackage VOD PackagingGroup resource configuration. */
	export interface CreatePackagingGroupRequest {

		/** CDN Authorization credentials */
		Authorization?: Authorization;
		Id: string;

		/** A collection of tags associated with a resource */
		Tags?: Tags;
	}

	export enum ManifestLayout { FULL = 0, COMPACT = 1 }

	export enum Profile { NONE = 0, HBBTV_1_5 = 1 }

	export interface DeleteAssetRequest {
	}

	export interface DeletePackagingConfigurationRequest {
	}

	export interface DeletePackagingGroupRequest {
	}

	export interface DescribeAssetRequest {
	}

	export interface DescribePackagingConfigurationRequest {
	}

	export interface DescribePackagingGroupRequest {
	}

	export enum EncryptionMethod { AES_128 = 0, SAMPLE_AES = 1 }

	export interface ListAssetsRequest {
	}

	export interface ListPackagingConfigurationsRequest {
	}

	export interface ListPackagingGroupsRequest {
	}

	export interface ListTagsForResourceRequest {
	}

	export enum StreamOrder { ORIGINAL = 0, VIDEO_BITRATE_ASCENDING = 1, VIDEO_BITRATE_DESCENDING = 2 }

	export interface TagResourceRequest {
		Tags: __mapOf__string;
	}

	export interface UntagResourceRequest {
	}


	/** A MediaPackage VOD PackagingGroup resource configuration. */
	export interface UpdatePackagingGroupRequest {

		/** CDN Authorization credentials */
		Authorization?: Authorization;
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
		ListAssets(maxResults: number, nextToken: string, packagingGroupId: string, MaxResults: string, NextToken: string): Observable<ListAssetsResponse> {
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
		ListPackagingConfigurations(maxResults: number, nextToken: string, packagingGroupId: string, MaxResults: string, NextToken: string): Observable<ListPackagingConfigurationsResponse> {
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
		ListPackagingGroups(maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<ListPackagingGroupsResponse> {
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
		resourceId?: string;

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

	export interface CreatePackagingConfigurationPostBodyCmafPackage {

		/** A CMAF encryption configuration. */
		Encryption?: CmafEncryption;
		HlsManifests?: Array<HlsManifest>;
		SegmentDurationSeconds?: number;
	}

	export interface CreatePackagingConfigurationPostBodyDashPackage {
		DashManifests?: Array<DashManifest>;

		/** A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration. */
		Encryption?: DashEncryption;
		PeriodTriggers?: Array<__PeriodTriggersElement>;
		SegmentDurationSeconds?: number;
		SegmentTemplateFormat?: DashPackageSegmentTemplateFormat;
	}

	export interface CreatePackagingConfigurationPostBodyHlsPackage {

		/** An HTTP Live Streaming (HLS) encryption configuration. */
		Encryption?: HlsEncryption;
		HlsManifests?: Array<HlsManifest>;
		SegmentDurationSeconds?: number;
		UseAudioRenditionGroup?: boolean;
	}

	export interface CreatePackagingConfigurationPostBodyMssPackage {

		/** A Microsoft Smooth Streaming (MSS) encryption configuration. */
		Encryption?: MssEncryption;
		MssManifests?: Array<MssManifest>;
		SegmentDurationSeconds?: number;
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

	export interface CreatePackagingGroupPostBodyAuthorization {
		CdnIdentifierSecret?: string;
		SecretsRoleArn?: string;
	}

	export interface UpdatePackagingGroupPutBody {

		/** CDN Authorization credentials */
		authorization?: UpdatePackagingGroupPutBodyAuthorization;
	}

	export interface UpdatePackagingGroupPutBodyAuthorization {
		CdnIdentifierSecret?: string;
		SecretsRoleArn?: string;
	}

	export interface TagResourcePostBody {

		/**
		 * A collection of tags associated with a resource
		 * Required
		 */
		tags: {[id: string]: string };
	}

}

