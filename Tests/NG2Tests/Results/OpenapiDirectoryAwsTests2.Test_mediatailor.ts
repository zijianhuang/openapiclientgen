import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface DeletePlaybackConfigurationResponse {
	}

	export interface GetPlaybackConfigurationResponse {
		AdDecisionServerUrl?: string | null;

		/** The configuration for Avail Suppression. Ad suppression can be used to turn off ad personalization in a long manifest, or if a viewer joins mid-break. */
		AvailSuppression?: AvailSuppression | null;

		/** The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management. */
		CdnConfiguration?: CdnConfiguration | null;

		/** The configuration for DASH content. */
		DashConfiguration?: DashConfiguration | null;

		/** The configuration for HLS content. */
		HlsConfiguration?: HlsConfiguration | null;

		/** The configuration for pre-roll ad insertion. */
		LivePreRollConfiguration?: LivePreRollConfiguration | null;
		Name?: string | null;
		PersonalizationThresholdSeconds?: number | null;
		PlaybackConfigurationArn?: string | null;
		PlaybackEndpointPrefix?: string | null;
		SessionInitializationEndpointPrefix?: string | null;
		SlateAdUrl?: string | null;
		Tags?: __mapOf__string | null;
		TranscodeProfileName?: string | null;
		VideoContentSourceUrl?: string | null;
	}


	/** The configuration for Avail Suppression. Ad suppression can be used to turn off ad personalization in a long manifest, or if a viewer joins mid-break. */
	export interface AvailSuppression {
		Mode?: AvailSuppressionMode | null;
		Value?: string | null;
	}

	export enum AvailSuppressionMode { OFF = 0, BEHIND_LIVE_EDGE = 1 }


	/** The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.  */
	export interface CdnConfiguration {
		AdSegmentUrlPrefix?: string | null;
		ContentSegmentUrlPrefix?: string | null;
	}


	/** The configuration for DASH content.  */
	export interface DashConfiguration {
		ManifestEndpointPrefix?: string | null;
		MpdLocation?: string | null;
		OriginManifestType?: DashConfigurationOriginManifestType | null;
	}

	export enum DashConfigurationOriginManifestType { SINGLE_PERIOD = 0, MULTI_PERIOD = 1 }


	/** The configuration for HLS content.  */
	export interface HlsConfiguration {
		ManifestEndpointPrefix?: string | null;
	}


	/** The configuration for pre-roll ad insertion. */
	export interface LivePreRollConfiguration {
		AdDecisionServerUrl?: string | null;
		MaxDurationSeconds?: number | null;
	}

	export interface __mapOf__string {
	}

	export interface ListPlaybackConfigurationsResponse {
		Items?: Array<PlaybackConfiguration> | null;
		NextToken?: string | null;
	}


	/** The AWSMediaTailor configuration. */
	export interface PlaybackConfiguration {
		AdDecisionServerUrl?: string | null;

		/** The configuration for Avail Suppression. Ad suppression can be used to turn off ad personalization in a long manifest, or if a viewer joins mid-break. */
		AvailSuppression?: AvailSuppression | null;

		/** The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management. */
		CdnConfiguration?: CdnConfiguration | null;

		/** The configuration for DASH content. */
		DashConfiguration?: DashConfiguration | null;

		/** The configuration for HLS content. */
		HlsConfiguration?: HlsConfiguration | null;
		Name?: string | null;
		PlaybackConfigurationArn?: string | null;
		PlaybackEndpointPrefix?: string | null;
		SessionInitializationEndpointPrefix?: string | null;
		SlateAdUrl?: string | null;
		Tags?: __mapOf__string | null;
		TranscodeProfileName?: string | null;
		PersonalizationThresholdSeconds?: number | null;
		VideoContentSourceUrl?: string | null;
	}

	export interface ListTagsForResourceResponse {
		Tags?: __mapOf__string | null;
	}

	export interface BadRequestException {
	}

	export interface PutPlaybackConfigurationResponse {
		AdDecisionServerUrl?: string | null;

		/** The configuration for Avail Suppression. Ad suppression can be used to turn off ad personalization in a long manifest, or if a viewer joins mid-break. */
		AvailSuppression?: AvailSuppression | null;

		/** The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management. */
		CdnConfiguration?: CdnConfiguration | null;

		/** The configuration for DASH content. */
		DashConfiguration?: DashConfiguration | null;

		/** The configuration for HLS content. */
		HlsConfiguration?: HlsConfiguration | null;

		/** The configuration for pre-roll ad insertion. */
		LivePreRollConfiguration?: LivePreRollConfiguration | null;
		Name?: string | null;
		PersonalizationThresholdSeconds?: number | null;
		PlaybackConfigurationArn?: string | null;
		PlaybackEndpointPrefix?: string | null;
		SessionInitializationEndpointPrefix?: string | null;
		SlateAdUrl?: string | null;
		Tags?: __mapOf__string | null;
		TranscodeProfileName?: string | null;
		VideoContentSourceUrl?: string | null;
	}

	export enum Mode { OFF = 0, BEHIND_LIVE_EDGE = 1 }

	export enum OriginManifestType { SINGLE_PERIOD = 0, MULTI_PERIOD = 1 }


	/** The configuration for DASH PUT operations.  */
	export interface DashConfigurationForPut {
		MpdLocation?: string | null;
		OriginManifestType?: DashConfigurationOriginManifestType | null;
	}

	export interface DeletePlaybackConfigurationRequest {
	}

	export interface GetPlaybackConfigurationRequest {
	}

	export interface ListPlaybackConfigurationsRequest {
	}

	export interface ListTagsForResourceRequest {
	}

	export interface PutPlaybackConfigurationRequest {
		AdDecisionServerUrl?: string | null;

		/** The configuration for Avail Suppression. Ad suppression can be used to turn off ad personalization in a long manifest, or if a viewer joins mid-break. */
		AvailSuppression?: AvailSuppression | null;

		/** The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management. */
		CdnConfiguration?: CdnConfiguration | null;

		/** The configuration for DASH PUT operations. */
		DashConfiguration?: DashConfigurationForPut | null;

		/** The configuration for pre-roll ad insertion. */
		LivePreRollConfiguration?: LivePreRollConfiguration | null;
		Name?: string | null;
		PersonalizationThresholdSeconds?: number | null;
		SlateAdUrl?: string | null;
		Tags?: __mapOf__string | null;
		TranscodeProfileName?: string | null;
		VideoContentSourceUrl?: string | null;
	}

	export interface TagResourceRequest {
		Tags: __mapOf__string;
	}

	export interface UntagResourceRequest {
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes the playback configuration for the specified name.
		 * Delete playbackConfiguration/{Name}
		 * @param {string} Name The identifier for the playback configuration.
		 * @return {void} 
		 */
		DeletePlaybackConfiguration(Name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'playbackConfiguration/' + (Name == null ? '' : encodeURIComponent(Name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the playback configuration for the specified name.
		 * Get playbackConfiguration/{Name}
		 * @param {string} Name The identifier for the playback configuration.
		 * @return {GetPlaybackConfigurationResponse} Success
		 */
		GetPlaybackConfiguration(Name: string): Observable<GetPlaybackConfigurationResponse> {
			return this.http.get<GetPlaybackConfigurationResponse>(this.baseUri + 'playbackConfiguration/' + (Name == null ? '' : encodeURIComponent(Name)), {});
		}

		/**
		 * Returns a list of the playback configurations defined in AWS Elemental MediaTailor. You can specify a maximum number of configurations to return at a time. The default maximum is 50. Results are returned in pagefuls. If MediaTailor has more configurations than the specified maximum, it provides parameters in the response that you can use to retrieve the next pageful.
		 * Get playbackConfigurations
		 * @param {number} MaxResults Maximum number of records to return. 
		 * @param {string} NextToken Pagination token returned by the GET list request when results exceed the maximum allowed. Use the token to fetch the next page of results.
		 * @return {ListPlaybackConfigurationsResponse} Success
		 */
		ListPlaybackConfigurations(MaxResults: number, NextToken: string): Observable<ListPlaybackConfigurationsResponse> {
			return this.http.get<ListPlaybackConfigurationsResponse>(this.baseUri + 'playbackConfigurations?MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns a list of the tags assigned to the specified playback configuration resource.
		 * Get tags/{ResourceArn}
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) for the playback configuration. You can get this from the response to any playback configuration request. 
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(ResourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), {});
		}

		/**
		 * Adds tags to the specified playback configuration resource. You can specify one or more tags to add.
		 * Post tags/{ResourceArn}
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) for the playback configuration. You can get this from the response to any playback configuration request. 
		 * @return {void} 
		 */
		TagResource(ResourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a new playback configuration to AWS Elemental MediaTailor.
		 * Put playbackConfiguration
		 * @return {PutPlaybackConfigurationResponse} Success
		 */
		PutPlaybackConfiguration(requestBody: PutPlaybackConfigurationPutBody): Observable<PutPlaybackConfigurationResponse> {
			return this.http.put<PutPlaybackConfigurationResponse>(this.baseUri + 'playbackConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from the specified playback configuration resource. You can specify one or more tags to remove.
		 * Delete tags/{ResourceArn}#tagKeys
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) for the playback configuration. You can get this from the response to any playback configuration request. 
		 * @param {Array<string>} tagKeys A comma-separated list of the tag keys to remove from the playback configuration. 
		 * @return {void} 
		 */
		UntagResource(ResourceArn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}
	}

	export interface TagResourcePostBody {

		/**
		 * A comma-separated list of tag key:value pairs. For example:
		 * {
		 * "Key1": "Value1",
		 * "Key2": "Value2"
		 * }
		 * Required
		 */
		tags: {[id: string]: string };
	}

	export interface PutPlaybackConfigurationPutBody {

		/** The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing you can provide a static VAST URL. The maximum length is 25,000 characters. */
		AdDecisionServerUrl?: string | null;

		/** The configuration for Avail Suppression. Ad suppression can be used to turn off ad personalization in a long manifest, or if a viewer joins mid-break. */
		AvailSuppression?: PutPlaybackConfigurationPutBodyAvailSuppression | null;

		/** The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management. */
		CdnConfiguration?: PutPlaybackConfigurationPutBodyCdnConfiguration | null;

		/** The configuration for DASH PUT operations. */
		DashConfiguration?: PutPlaybackConfigurationPutBodyDashConfiguration | null;

		/** The configuration for pre-roll ad insertion. */
		LivePreRollConfiguration?: PutPlaybackConfigurationPutBodyLivePreRollConfiguration | null;

		/** The identifier for the playback configuration. */
		Name?: string | null;

		/**
		 * The maximum duration of underfilled ad time (in seconds) allowed in an ad break.
		 * Minimum: 1
		 */
		PersonalizationThresholdSeconds?: number | null;

		/** The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID configurations. For VPAID, the slate is required because MediaTailor provides it in the slots that are designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video. */
		SlateAdUrl?: string | null;

		/** The tags to assign to the playback configuration. */
		tags?: {[id: string]: string } | null;

		/** The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support. */
		TranscodeProfileName?: string | null;

		/** The URL prefix for the master playlist for the stream, minus the asset ID. The maximum length is 512 characters. */
		VideoContentSourceUrl?: string | null;
	}

	export interface PutPlaybackConfigurationPutBodyAvailSuppression {
		Mode?: AvailSuppressionMode | null;
		Value?: string | null;
	}

	export interface PutPlaybackConfigurationPutBodyCdnConfiguration {
		AdSegmentUrlPrefix?: string | null;
		ContentSegmentUrlPrefix?: string | null;
	}

	export interface PutPlaybackConfigurationPutBodyDashConfiguration {
		MpdLocation?: string | null;
		OriginManifestType?: DashConfigurationOriginManifestType | null;
	}

	export interface PutPlaybackConfigurationPutBodyLivePreRollConfiguration {
		AdDecisionServerUrl?: string | null;
		MaxDurationSeconds?: number | null;
	}

}

