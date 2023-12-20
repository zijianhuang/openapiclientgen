import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DeletePlaybackConfigurationResponse {
	}
	export interface DeletePlaybackConfigurationResponseFormProperties {
	}
	export function CreateDeletePlaybackConfigurationResponseFormGroup() {
		return new FormGroup<DeletePlaybackConfigurationResponseFormProperties>({
		});

	}

	export interface GetPlaybackConfigurationResponse {
		AdDecisionServerUrl?: string | null;

		/** The configuration for Avail Suppression. Ad suppression can be used to turn off ad personalization in a long manifest, or if a viewer joins mid-break. */
		AvailSuppression?: AvailSuppression;

		/** The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management. */
		CdnConfiguration?: CdnConfiguration;

		/** The configuration for DASH content. */
		DashConfiguration?: DashConfiguration;

		/** The configuration for HLS content. */
		HlsConfiguration?: HlsConfiguration;

		/** The configuration for pre-roll ad insertion. */
		LivePreRollConfiguration?: LivePreRollConfiguration;
		Name?: string | null;
		PersonalizationThresholdSeconds?: number | null;
		PlaybackConfigurationArn?: string | null;
		PlaybackEndpointPrefix?: string | null;
		SessionInitializationEndpointPrefix?: string | null;
		SlateAdUrl?: string | null;
		Tags?: __mapOf__string;
		TranscodeProfileName?: string | null;
		VideoContentSourceUrl?: string | null;
	}
	export interface GetPlaybackConfigurationResponseFormProperties {
		AdDecisionServerUrl: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PersonalizationThresholdSeconds: FormControl<number | null | undefined>,
		PlaybackConfigurationArn: FormControl<string | null | undefined>,
		PlaybackEndpointPrefix: FormControl<string | null | undefined>,
		SessionInitializationEndpointPrefix: FormControl<string | null | undefined>,
		SlateAdUrl: FormControl<string | null | undefined>,
		TranscodeProfileName: FormControl<string | null | undefined>,
		VideoContentSourceUrl: FormControl<string | null | undefined>,
	}
	export function CreateGetPlaybackConfigurationResponseFormGroup() {
		return new FormGroup<GetPlaybackConfigurationResponseFormProperties>({
			AdDecisionServerUrl: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PersonalizationThresholdSeconds: new FormControl<number | null | undefined>(undefined),
			PlaybackConfigurationArn: new FormControl<string | null | undefined>(undefined),
			PlaybackEndpointPrefix: new FormControl<string | null | undefined>(undefined),
			SessionInitializationEndpointPrefix: new FormControl<string | null | undefined>(undefined),
			SlateAdUrl: new FormControl<string | null | undefined>(undefined),
			TranscodeProfileName: new FormControl<string | null | undefined>(undefined),
			VideoContentSourceUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration for Avail Suppression. Ad suppression can be used to turn off ad personalization in a long manifest, or if a viewer joins mid-break. */
	export interface AvailSuppression {
		Mode?: AvailSuppressionMode | null;
		Value?: string | null;
	}

	/** The configuration for Avail Suppression. Ad suppression can be used to turn off ad personalization in a long manifest, or if a viewer joins mid-break. */
	export interface AvailSuppressionFormProperties {
		Mode: FormControl<AvailSuppressionMode | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateAvailSuppressionFormGroup() {
		return new FormGroup<AvailSuppressionFormProperties>({
			Mode: new FormControl<AvailSuppressionMode | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AvailSuppressionMode { OFF = 0, BEHIND_LIVE_EDGE = 1 }


	/** The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.  */
	export interface CdnConfiguration {
		AdSegmentUrlPrefix?: string | null;
		ContentSegmentUrlPrefix?: string | null;
	}

	/** The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.  */
	export interface CdnConfigurationFormProperties {
		AdSegmentUrlPrefix: FormControl<string | null | undefined>,
		ContentSegmentUrlPrefix: FormControl<string | null | undefined>,
	}
	export function CreateCdnConfigurationFormGroup() {
		return new FormGroup<CdnConfigurationFormProperties>({
			AdSegmentUrlPrefix: new FormControl<string | null | undefined>(undefined),
			ContentSegmentUrlPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration for DASH content.  */
	export interface DashConfiguration {
		ManifestEndpointPrefix?: string | null;
		MpdLocation?: string | null;
		OriginManifestType?: DashConfigurationOriginManifestType | null;
	}

	/** The configuration for DASH content.  */
	export interface DashConfigurationFormProperties {
		ManifestEndpointPrefix: FormControl<string | null | undefined>,
		MpdLocation: FormControl<string | null | undefined>,
		OriginManifestType: FormControl<DashConfigurationOriginManifestType | null | undefined>,
	}
	export function CreateDashConfigurationFormGroup() {
		return new FormGroup<DashConfigurationFormProperties>({
			ManifestEndpointPrefix: new FormControl<string | null | undefined>(undefined),
			MpdLocation: new FormControl<string | null | undefined>(undefined),
			OriginManifestType: new FormControl<DashConfigurationOriginManifestType | null | undefined>(undefined),
		});

	}

	export enum DashConfigurationOriginManifestType { SINGLE_PERIOD = 0, MULTI_PERIOD = 1 }


	/** The configuration for HLS content.  */
	export interface HlsConfiguration {
		ManifestEndpointPrefix?: string | null;
	}

	/** The configuration for HLS content.  */
	export interface HlsConfigurationFormProperties {
		ManifestEndpointPrefix: FormControl<string | null | undefined>,
	}
	export function CreateHlsConfigurationFormGroup() {
		return new FormGroup<HlsConfigurationFormProperties>({
			ManifestEndpointPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration for pre-roll ad insertion. */
	export interface LivePreRollConfiguration {
		AdDecisionServerUrl?: string | null;
		MaxDurationSeconds?: number | null;
	}

	/** The configuration for pre-roll ad insertion. */
	export interface LivePreRollConfigurationFormProperties {
		AdDecisionServerUrl: FormControl<string | null | undefined>,
		MaxDurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateLivePreRollConfigurationFormGroup() {
		return new FormGroup<LivePreRollConfigurationFormProperties>({
			AdDecisionServerUrl: new FormControl<string | null | undefined>(undefined),
			MaxDurationSeconds: new FormControl<number | null | undefined>(undefined),
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

	export interface ListPlaybackConfigurationsResponse {
		Items?: Array<PlaybackConfiguration>;
		NextToken?: string | null;
	}
	export interface ListPlaybackConfigurationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPlaybackConfigurationsResponseFormGroup() {
		return new FormGroup<ListPlaybackConfigurationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The AWSMediaTailor configuration. */
	export interface PlaybackConfiguration {
		AdDecisionServerUrl?: string | null;

		/** The configuration for Avail Suppression. Ad suppression can be used to turn off ad personalization in a long manifest, or if a viewer joins mid-break. */
		AvailSuppression?: AvailSuppression;

		/** The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management. */
		CdnConfiguration?: CdnConfiguration;

		/** The configuration for DASH content. */
		DashConfiguration?: DashConfiguration;

		/** The configuration for HLS content. */
		HlsConfiguration?: HlsConfiguration;
		Name?: string | null;
		PlaybackConfigurationArn?: string | null;
		PlaybackEndpointPrefix?: string | null;
		SessionInitializationEndpointPrefix?: string | null;
		SlateAdUrl?: string | null;
		Tags?: __mapOf__string;
		TranscodeProfileName?: string | null;
		PersonalizationThresholdSeconds?: number | null;
		VideoContentSourceUrl?: string | null;
	}

	/** The AWSMediaTailor configuration. */
	export interface PlaybackConfigurationFormProperties {
		AdDecisionServerUrl: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PlaybackConfigurationArn: FormControl<string | null | undefined>,
		PlaybackEndpointPrefix: FormControl<string | null | undefined>,
		SessionInitializationEndpointPrefix: FormControl<string | null | undefined>,
		SlateAdUrl: FormControl<string | null | undefined>,
		TranscodeProfileName: FormControl<string | null | undefined>,
		PersonalizationThresholdSeconds: FormControl<number | null | undefined>,
		VideoContentSourceUrl: FormControl<string | null | undefined>,
	}
	export function CreatePlaybackConfigurationFormGroup() {
		return new FormGroup<PlaybackConfigurationFormProperties>({
			AdDecisionServerUrl: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PlaybackConfigurationArn: new FormControl<string | null | undefined>(undefined),
			PlaybackEndpointPrefix: new FormControl<string | null | undefined>(undefined),
			SessionInitializationEndpointPrefix: new FormControl<string | null | undefined>(undefined),
			SlateAdUrl: new FormControl<string | null | undefined>(undefined),
			TranscodeProfileName: new FormControl<string | null | undefined>(undefined),
			PersonalizationThresholdSeconds: new FormControl<number | null | undefined>(undefined),
			VideoContentSourceUrl: new FormControl<string | null | undefined>(undefined),
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

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
		});

	}

	export interface PutPlaybackConfigurationResponse {
		AdDecisionServerUrl?: string | null;

		/** The configuration for Avail Suppression. Ad suppression can be used to turn off ad personalization in a long manifest, or if a viewer joins mid-break. */
		AvailSuppression?: AvailSuppression;

		/** The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management. */
		CdnConfiguration?: CdnConfiguration;

		/** The configuration for DASH content. */
		DashConfiguration?: DashConfiguration;

		/** The configuration for HLS content. */
		HlsConfiguration?: HlsConfiguration;

		/** The configuration for pre-roll ad insertion. */
		LivePreRollConfiguration?: LivePreRollConfiguration;
		Name?: string | null;
		PersonalizationThresholdSeconds?: number | null;
		PlaybackConfigurationArn?: string | null;
		PlaybackEndpointPrefix?: string | null;
		SessionInitializationEndpointPrefix?: string | null;
		SlateAdUrl?: string | null;
		Tags?: __mapOf__string;
		TranscodeProfileName?: string | null;
		VideoContentSourceUrl?: string | null;
	}
	export interface PutPlaybackConfigurationResponseFormProperties {
		AdDecisionServerUrl: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PersonalizationThresholdSeconds: FormControl<number | null | undefined>,
		PlaybackConfigurationArn: FormControl<string | null | undefined>,
		PlaybackEndpointPrefix: FormControl<string | null | undefined>,
		SessionInitializationEndpointPrefix: FormControl<string | null | undefined>,
		SlateAdUrl: FormControl<string | null | undefined>,
		TranscodeProfileName: FormControl<string | null | undefined>,
		VideoContentSourceUrl: FormControl<string | null | undefined>,
	}
	export function CreatePutPlaybackConfigurationResponseFormGroup() {
		return new FormGroup<PutPlaybackConfigurationResponseFormProperties>({
			AdDecisionServerUrl: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PersonalizationThresholdSeconds: new FormControl<number | null | undefined>(undefined),
			PlaybackConfigurationArn: new FormControl<string | null | undefined>(undefined),
			PlaybackEndpointPrefix: new FormControl<string | null | undefined>(undefined),
			SessionInitializationEndpointPrefix: new FormControl<string | null | undefined>(undefined),
			SlateAdUrl: new FormControl<string | null | undefined>(undefined),
			TranscodeProfileName: new FormControl<string | null | undefined>(undefined),
			VideoContentSourceUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Mode { OFF = 0, BEHIND_LIVE_EDGE = 1 }

	export enum OriginManifestType { SINGLE_PERIOD = 0, MULTI_PERIOD = 1 }


	/** The configuration for DASH PUT operations.  */
	export interface DashConfigurationForPut {
		MpdLocation?: string | null;
		OriginManifestType?: DashConfigurationOriginManifestType | null;
	}

	/** The configuration for DASH PUT operations.  */
	export interface DashConfigurationForPutFormProperties {
		MpdLocation: FormControl<string | null | undefined>,
		OriginManifestType: FormControl<DashConfigurationOriginManifestType | null | undefined>,
	}
	export function CreateDashConfigurationForPutFormGroup() {
		return new FormGroup<DashConfigurationForPutFormProperties>({
			MpdLocation: new FormControl<string | null | undefined>(undefined),
			OriginManifestType: new FormControl<DashConfigurationOriginManifestType | null | undefined>(undefined),
		});

	}

	export interface DeletePlaybackConfigurationRequest {
	}
	export interface DeletePlaybackConfigurationRequestFormProperties {
	}
	export function CreateDeletePlaybackConfigurationRequestFormGroup() {
		return new FormGroup<DeletePlaybackConfigurationRequestFormProperties>({
		});

	}

	export interface GetPlaybackConfigurationRequest {
	}
	export interface GetPlaybackConfigurationRequestFormProperties {
	}
	export function CreateGetPlaybackConfigurationRequestFormGroup() {
		return new FormGroup<GetPlaybackConfigurationRequestFormProperties>({
		});

	}

	export interface ListPlaybackConfigurationsRequest {
	}
	export interface ListPlaybackConfigurationsRequestFormProperties {
	}
	export function CreateListPlaybackConfigurationsRequestFormGroup() {
		return new FormGroup<ListPlaybackConfigurationsRequestFormProperties>({
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

	export interface PutPlaybackConfigurationRequest {
		AdDecisionServerUrl?: string | null;

		/** The configuration for Avail Suppression. Ad suppression can be used to turn off ad personalization in a long manifest, or if a viewer joins mid-break. */
		AvailSuppression?: AvailSuppression;

		/** The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management. */
		CdnConfiguration?: CdnConfiguration;

		/** The configuration for DASH PUT operations. */
		DashConfiguration?: DashConfigurationForPut;

		/** The configuration for pre-roll ad insertion. */
		LivePreRollConfiguration?: LivePreRollConfiguration;
		Name?: string | null;
		PersonalizationThresholdSeconds?: number | null;
		SlateAdUrl?: string | null;
		Tags?: __mapOf__string;
		TranscodeProfileName?: string | null;
		VideoContentSourceUrl?: string | null;
	}
	export interface PutPlaybackConfigurationRequestFormProperties {
		AdDecisionServerUrl: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PersonalizationThresholdSeconds: FormControl<number | null | undefined>,
		SlateAdUrl: FormControl<string | null | undefined>,
		TranscodeProfileName: FormControl<string | null | undefined>,
		VideoContentSourceUrl: FormControl<string | null | undefined>,
	}
	export function CreatePutPlaybackConfigurationRequestFormGroup() {
		return new FormGroup<PutPlaybackConfigurationRequestFormProperties>({
			AdDecisionServerUrl: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PersonalizationThresholdSeconds: new FormControl<number | null | undefined>(undefined),
			SlateAdUrl: new FormControl<string | null | undefined>(undefined),
			TranscodeProfileName: new FormControl<string | null | undefined>(undefined),
			VideoContentSourceUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

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
		ListPlaybackConfigurations(MaxResults: number | null | undefined, NextToken: string | null | undefined): Observable<ListPlaybackConfigurationsResponse> {
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
	export interface TagResourcePostBodyFormProperties {

		/**
		 * A comma-separated list of tag key:value pairs. For example:
		 * {
		 * "Key1": "Value1",
		 * "Key2": "Value2"
		 * }
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface PutPlaybackConfigurationPutBody {

		/** The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing you can provide a static VAST URL. The maximum length is 25,000 characters. */
		AdDecisionServerUrl?: string | null;

		/** The configuration for Avail Suppression. Ad suppression can be used to turn off ad personalization in a long manifest, or if a viewer joins mid-break. */
		AvailSuppression?: PutPlaybackConfigurationPutBodyAvailSuppression;

		/** The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management. */
		CdnConfiguration?: PutPlaybackConfigurationPutBodyCdnConfiguration;

		/** The configuration for DASH PUT operations. */
		DashConfiguration?: PutPlaybackConfigurationPutBodyDashConfiguration;

		/** The configuration for pre-roll ad insertion. */
		LivePreRollConfiguration?: PutPlaybackConfigurationPutBodyLivePreRollConfiguration;

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
		tags?: {[id: string]: string };

		/** The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support. */
		TranscodeProfileName?: string | null;

		/** The URL prefix for the master playlist for the stream, minus the asset ID. The maximum length is 512 characters. */
		VideoContentSourceUrl?: string | null;
	}
	export interface PutPlaybackConfigurationPutBodyFormProperties {

		/** The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing you can provide a static VAST URL. The maximum length is 25,000 characters. */
		AdDecisionServerUrl: FormControl<string | null | undefined>,

		/** The identifier for the playback configuration. */
		Name: FormControl<string | null | undefined>,

		/**
		 * The maximum duration of underfilled ad time (in seconds) allowed in an ad break.
		 * Minimum: 1
		 */
		PersonalizationThresholdSeconds: FormControl<number | null | undefined>,

		/** The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID configurations. For VPAID, the slate is required because MediaTailor provides it in the slots that are designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video. */
		SlateAdUrl: FormControl<string | null | undefined>,

		/** The tags to assign to the playback configuration. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support. */
		TranscodeProfileName: FormControl<string | null | undefined>,

		/** The URL prefix for the master playlist for the stream, minus the asset ID. The maximum length is 512 characters. */
		VideoContentSourceUrl: FormControl<string | null | undefined>,
	}
	export function CreatePutPlaybackConfigurationPutBodyFormGroup() {
		return new FormGroup<PutPlaybackConfigurationPutBodyFormProperties>({
			AdDecisionServerUrl: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PersonalizationThresholdSeconds: new FormControl<number | null | undefined>(undefined),
			SlateAdUrl: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			TranscodeProfileName: new FormControl<string | null | undefined>(undefined),
			VideoContentSourceUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutPlaybackConfigurationPutBodyAvailSuppression {
		Mode?: AvailSuppressionMode | null;
		Value?: string | null;
	}
	export interface PutPlaybackConfigurationPutBodyAvailSuppressionFormProperties {
		Mode: FormControl<AvailSuppressionMode | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreatePutPlaybackConfigurationPutBodyAvailSuppressionFormGroup() {
		return new FormGroup<PutPlaybackConfigurationPutBodyAvailSuppressionFormProperties>({
			Mode: new FormControl<AvailSuppressionMode | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutPlaybackConfigurationPutBodyCdnConfiguration {
		AdSegmentUrlPrefix?: string | null;
		ContentSegmentUrlPrefix?: string | null;
	}
	export interface PutPlaybackConfigurationPutBodyCdnConfigurationFormProperties {
		AdSegmentUrlPrefix: FormControl<string | null | undefined>,
		ContentSegmentUrlPrefix: FormControl<string | null | undefined>,
	}
	export function CreatePutPlaybackConfigurationPutBodyCdnConfigurationFormGroup() {
		return new FormGroup<PutPlaybackConfigurationPutBodyCdnConfigurationFormProperties>({
			AdSegmentUrlPrefix: new FormControl<string | null | undefined>(undefined),
			ContentSegmentUrlPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutPlaybackConfigurationPutBodyDashConfiguration {
		MpdLocation?: string | null;
		OriginManifestType?: DashConfigurationOriginManifestType | null;
	}
	export interface PutPlaybackConfigurationPutBodyDashConfigurationFormProperties {
		MpdLocation: FormControl<string | null | undefined>,
		OriginManifestType: FormControl<DashConfigurationOriginManifestType | null | undefined>,
	}
	export function CreatePutPlaybackConfigurationPutBodyDashConfigurationFormGroup() {
		return new FormGroup<PutPlaybackConfigurationPutBodyDashConfigurationFormProperties>({
			MpdLocation: new FormControl<string | null | undefined>(undefined),
			OriginManifestType: new FormControl<DashConfigurationOriginManifestType | null | undefined>(undefined),
		});

	}

	export interface PutPlaybackConfigurationPutBodyLivePreRollConfiguration {
		AdDecisionServerUrl?: string | null;
		MaxDurationSeconds?: number | null;
	}
	export interface PutPlaybackConfigurationPutBodyLivePreRollConfigurationFormProperties {
		AdDecisionServerUrl: FormControl<string | null | undefined>,
		MaxDurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreatePutPlaybackConfigurationPutBodyLivePreRollConfigurationFormGroup() {
		return new FormGroup<PutPlaybackConfigurationPutBodyLivePreRollConfigurationFormProperties>({
			AdDecisionServerUrl: new FormControl<string | null | undefined>(undefined),
			MaxDurationSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

}

