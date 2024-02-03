import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface GetClipOutput {
		Payload?: string;
	}
	export interface GetClipOutputFormProperties {
		Payload: FormControl<string | null | undefined>,
	}
	export function CreateGetClipOutputFormGroup() {
		return new FormGroup<GetClipOutputFormProperties>({
			Payload: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ClipFragmentSelectorType { PRODUCER_TIMESTAMP = 'PRODUCER_TIMESTAMP', SERVER_TIMESTAMP = 'SERVER_TIMESTAMP' }


	/** The range of timestamps for which to return fragments. */
	export interface ClipTimestampRange {

		/** Required */
		StartTimestamp: Date;

		/** Required */
		EndTimestamp: Date;
	}

	/** The range of timestamps for which to return fragments. */
	export interface ClipTimestampRangeFormProperties {

		/** Required */
		StartTimestamp: FormControl<Date | null | undefined>,

		/** Required */
		EndTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateClipTimestampRangeFormGroup() {
		return new FormGroup<ClipTimestampRangeFormProperties>({
			StartTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
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

	export interface NotAuthorizedException {
	}
	export interface NotAuthorizedExceptionFormProperties {
	}
	export function CreateNotAuthorizedExceptionFormGroup() {
		return new FormGroup<NotAuthorizedExceptionFormProperties>({
		});

	}

	export interface UnsupportedStreamMediaTypeException {
	}
	export interface UnsupportedStreamMediaTypeExceptionFormProperties {
	}
	export function CreateUnsupportedStreamMediaTypeExceptionFormGroup() {
		return new FormGroup<UnsupportedStreamMediaTypeExceptionFormProperties>({
		});

	}

	export interface MissingCodecPrivateDataException {
	}
	export interface MissingCodecPrivateDataExceptionFormProperties {
	}
	export function CreateMissingCodecPrivateDataExceptionFormGroup() {
		return new FormGroup<MissingCodecPrivateDataExceptionFormProperties>({
		});

	}

	export interface InvalidCodecPrivateDataException {
	}
	export interface InvalidCodecPrivateDataExceptionFormProperties {
	}
	export function CreateInvalidCodecPrivateDataExceptionFormGroup() {
		return new FormGroup<InvalidCodecPrivateDataExceptionFormProperties>({
		});

	}

	export interface InvalidMediaFrameException {
	}
	export interface InvalidMediaFrameExceptionFormProperties {
	}
	export function CreateInvalidMediaFrameExceptionFormGroup() {
		return new FormGroup<InvalidMediaFrameExceptionFormProperties>({
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

	export interface GetDASHStreamingSessionURLOutput {
		DASHStreamingSessionURL?: string;
	}
	export interface GetDASHStreamingSessionURLOutputFormProperties {
		DASHStreamingSessionURL: FormControl<string | null | undefined>,
	}
	export function CreateGetDASHStreamingSessionURLOutputFormGroup() {
		return new FormGroup<GetDASHStreamingSessionURLOutputFormProperties>({
			DASHStreamingSessionURL: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DASHFragmentSelectorType { PRODUCER_TIMESTAMP = 'PRODUCER_TIMESTAMP', SERVER_TIMESTAMP = 'SERVER_TIMESTAMP' }


	/** <p>The start and end of the timestamp range for the requested media.</p> <p>This value should not be present if <code>PlaybackType</code> is <code>LIVE</code>.</p> <p>The values in <code>DASHimestampRange</code> are inclusive. Fragments that start exactly at or after the start time are included in the session. Fragments that start before the start time and continue past it are not included in the session.</p> */
	export interface DASHTimestampRange {
		StartTimestamp?: Date;
		EndTimestamp?: Date;
	}

	/** <p>The start and end of the timestamp range for the requested media.</p> <p>This value should not be present if <code>PlaybackType</code> is <code>LIVE</code>.</p> <p>The values in <code>DASHimestampRange</code> are inclusive. Fragments that start exactly at or after the start time are included in the session. Fragments that start before the start time and continue past it are not included in the session.</p> */
	export interface DASHTimestampRangeFormProperties {
		StartTimestamp: FormControl<Date | null | undefined>,
		EndTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateDASHTimestampRangeFormGroup() {
		return new FormGroup<DASHTimestampRangeFormProperties>({
			StartTimestamp: new FormControl<Date | null | undefined>(undefined),
			EndTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetHLSStreamingSessionURLOutput {
		HLSStreamingSessionURL?: string;
	}
	export interface GetHLSStreamingSessionURLOutputFormProperties {
		HLSStreamingSessionURL: FormControl<string | null | undefined>,
	}
	export function CreateGetHLSStreamingSessionURLOutputFormGroup() {
		return new FormGroup<GetHLSStreamingSessionURLOutputFormProperties>({
			HLSStreamingSessionURL: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HLSFragmentSelectorType { PRODUCER_TIMESTAMP = 'PRODUCER_TIMESTAMP', SERVER_TIMESTAMP = 'SERVER_TIMESTAMP' }


	/** <p>The start and end of the timestamp range for the requested media.</p> <p>This value should not be present if <code>PlaybackType</code> is <code>LIVE</code>.</p> */
	export interface HLSTimestampRange {
		StartTimestamp?: Date;
		EndTimestamp?: Date;
	}

	/** <p>The start and end of the timestamp range for the requested media.</p> <p>This value should not be present if <code>PlaybackType</code> is <code>LIVE</code>.</p> */
	export interface HLSTimestampRangeFormProperties {
		StartTimestamp: FormControl<Date | null | undefined>,
		EndTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateHLSTimestampRangeFormGroup() {
		return new FormGroup<HLSTimestampRangeFormProperties>({
			StartTimestamp: new FormControl<Date | null | undefined>(undefined),
			EndTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetImagesOutput {
		Images?: Array<Image>;
		NextToken?: string;
	}
	export interface GetImagesOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetImagesOutputFormGroup() {
		return new FormGroup<GetImagesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that contains the <code>Timestamp</code>, <code>Error</code>, and <code>ImageContent</code>. */
	export interface Image {
		TimeStamp?: Date;
		Error?: ImageError;
		ImageContent?: string;
	}

	/** A structure that contains the <code>Timestamp</code>, <code>Error</code>, and <code>ImageContent</code>. */
	export interface ImageFormProperties {
		TimeStamp: FormControl<Date | null | undefined>,
		Error: FormControl<ImageError | null | undefined>,
		ImageContent: FormControl<string | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			TimeStamp: new FormControl<Date | null | undefined>(undefined),
			Error: new FormControl<ImageError | null | undefined>(undefined),
			ImageContent: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImageError { NO_MEDIA = 'NO_MEDIA', MEDIA_ERROR = 'MEDIA_ERROR' }

	export interface GetMediaForFragmentListOutput {
		Payload?: string;
	}
	export interface GetMediaForFragmentListOutputFormProperties {
		Payload: FormControl<string | null | undefined>,
	}
	export function CreateGetMediaForFragmentListOutputFormGroup() {
		return new FormGroup<GetMediaForFragmentListOutputFormProperties>({
			Payload: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFragmentsOutput {
		Fragments?: Array<Fragment>;
		NextToken?: string;
	}
	export interface ListFragmentsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFragmentsOutputFormGroup() {
		return new FormGroup<ListFragmentsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a segment of video or other time-delimited data. */
	export interface Fragment {
		FragmentNumber?: string;
		FragmentSizeInBytes?: number | null;
		ProducerTimestamp?: Date;
		ServerTimestamp?: Date;
		FragmentLengthInMilliseconds?: number | null;
	}

	/** Represents a segment of video or other time-delimited data. */
	export interface FragmentFormProperties {
		FragmentNumber: FormControl<string | null | undefined>,
		FragmentSizeInBytes: FormControl<number | null | undefined>,
		ProducerTimestamp: FormControl<Date | null | undefined>,
		ServerTimestamp: FormControl<Date | null | undefined>,
		FragmentLengthInMilliseconds: FormControl<number | null | undefined>,
	}
	export function CreateFragmentFormGroup() {
		return new FormGroup<FragmentFormProperties>({
			FragmentNumber: new FormControl<string | null | undefined>(undefined),
			FragmentSizeInBytes: new FormControl<number | null | undefined>(undefined),
			ProducerTimestamp: new FormControl<Date | null | undefined>(undefined),
			ServerTimestamp: new FormControl<Date | null | undefined>(undefined),
			FragmentLengthInMilliseconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum FragmentSelectorType { PRODUCER_TIMESTAMP = 'PRODUCER_TIMESTAMP', SERVER_TIMESTAMP = 'SERVER_TIMESTAMP' }


	/** The range of timestamps for which to return fragments. */
	export interface TimestampRange {

		/** Required */
		StartTimestamp: Date;

		/** Required */
		EndTimestamp: Date;
	}

	/** The range of timestamps for which to return fragments. */
	export interface TimestampRangeFormProperties {

		/** Required */
		StartTimestamp: FormControl<Date | null | undefined>,

		/** Required */
		EndTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateTimestampRangeFormGroup() {
		return new FormGroup<TimestampRangeFormProperties>({
			StartTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Describes the timestamp range and timestamp origin of a range of fragments.</p> <p>Fragments that have duplicate producer timestamps are deduplicated. This means that if producers are producing a stream of fragments with producer timestamps that are approximately equal to the true clock time, the clip will contain all of the fragments within the requested timestamp range. If some fragments are ingested within the same time range and very different points in time, only the oldest ingested collection of fragments are returned.</p> */
	export interface ClipFragmentSelector {

		/** Required */
		FragmentSelectorType: ClipFragmentSelectorType;

		/** Required */
		TimestampRange: ClipTimestampRange;
	}

	/** <p>Describes the timestamp range and timestamp origin of a range of fragments.</p> <p>Fragments that have duplicate producer timestamps are deduplicated. This means that if producers are producing a stream of fragments with producer timestamps that are approximately equal to the true clock time, the clip will contain all of the fragments within the requested timestamp range. If some fragments are ingested within the same time range and very different points in time, only the oldest ingested collection of fragments are returned.</p> */
	export interface ClipFragmentSelectorFormProperties {

		/** Required */
		FragmentSelectorType: FormControl<ClipFragmentSelectorType | null | undefined>,
	}
	export function CreateClipFragmentSelectorFormGroup() {
		return new FormGroup<ClipFragmentSelectorFormProperties>({
			FragmentSelectorType: new FormControl<ClipFragmentSelectorType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ContainerFormat { FRAGMENTED_MP4 = 'FRAGMENTED_MP4', MPEG_TS = 'MPEG_TS' }

	export enum DASHDisplayFragmentNumber { ALWAYS = 'ALWAYS', NEVER = 'NEVER' }

	export enum DASHDisplayFragmentTimestamp { ALWAYS = 'ALWAYS', NEVER = 'NEVER' }


	/** Contains the range of timestamps for the requested media, and the source of the timestamps.  */
	export interface DASHFragmentSelector {
		FragmentSelectorType?: ClipFragmentSelectorType;
		TimestampRange?: DASHTimestampRange;
	}

	/** Contains the range of timestamps for the requested media, and the source of the timestamps.  */
	export interface DASHFragmentSelectorFormProperties {
		FragmentSelectorType: FormControl<ClipFragmentSelectorType | null | undefined>,
	}
	export function CreateDASHFragmentSelectorFormGroup() {
		return new FormGroup<DASHFragmentSelectorFormProperties>({
			FragmentSelectorType: new FormControl<ClipFragmentSelectorType | null | undefined>(undefined),
		});

	}

	export enum DASHPlaybackMode { LIVE = 'LIVE', LIVE_REPLAY = 'LIVE_REPLAY', ON_DEMAND = 'ON_DEMAND' }

	export enum Format { JPEG = 'JPEG', PNG = 'PNG' }

	export interface FormatConfig {
	}
	export interface FormatConfigFormProperties {
	}
	export function CreateFormatConfigFormGroup() {
		return new FormGroup<FormatConfigFormProperties>({
		});

	}

	export enum FormatConfigKey { JPEGQuality = 'JPEGQuality' }


	/** <p>Describes the timestamp range and timestamp origin of a range of fragments.</p> <p>Only fragments with a start timestamp greater than or equal to the given start time and less than or equal to the end time are returned. For example, if a stream contains fragments with the following start timestamps: </p> <ul> <li> <p>00:00:00</p> </li> <li> <p>00:00:02</p> </li> <li> <p>00:00:04</p> </li> <li> <p>00:00:06</p> </li> </ul> <p> A fragment selector range with a start time of 00:00:01 and end time of 00:00:04 would return the fragments with start times of 00:00:02 and 00:00:04. </p> */
	export interface FragmentSelector {

		/** Required */
		FragmentSelectorType: ClipFragmentSelectorType;

		/** Required */
		TimestampRange: TimestampRange;
	}

	/** <p>Describes the timestamp range and timestamp origin of a range of fragments.</p> <p>Only fragments with a start timestamp greater than or equal to the given start time and less than or equal to the end time are returned. For example, if a stream contains fragments with the following start timestamps: </p> <ul> <li> <p>00:00:00</p> </li> <li> <p>00:00:02</p> </li> <li> <p>00:00:04</p> </li> <li> <p>00:00:06</p> </li> </ul> <p> A fragment selector range with a start time of 00:00:01 and end time of 00:00:04 would return the fragments with start times of 00:00:02 and 00:00:04. </p> */
	export interface FragmentSelectorFormProperties {

		/** Required */
		FragmentSelectorType: FormControl<ClipFragmentSelectorType | null | undefined>,
	}
	export function CreateFragmentSelectorFormGroup() {
		return new FormGroup<FragmentSelectorFormProperties>({
			FragmentSelectorType: new FormControl<ClipFragmentSelectorType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetClipInput {
		StreamName?: string;
		StreamARN?: string;

		/** Required */
		ClipFragmentSelector: ClipFragmentSelector;
	}
	export interface GetClipInputFormProperties {
		StreamName: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateGetClipInputFormGroup() {
		return new FormGroup<GetClipInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDASHStreamingSessionURLInput {
		StreamName?: string;
		StreamARN?: string;
		PlaybackMode?: DASHPlaybackMode;
		DisplayFragmentTimestamp?: DASHDisplayFragmentNumber;
		DisplayFragmentNumber?: DASHDisplayFragmentNumber;
		DASHFragmentSelector?: DASHFragmentSelector;
		Expires?: number | null;
		MaxManifestFragmentResults?: number | null;
	}
	export interface GetDASHStreamingSessionURLInputFormProperties {
		StreamName: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
		PlaybackMode: FormControl<DASHPlaybackMode | null | undefined>,
		DisplayFragmentTimestamp: FormControl<DASHDisplayFragmentNumber | null | undefined>,
		DisplayFragmentNumber: FormControl<DASHDisplayFragmentNumber | null | undefined>,
		Expires: FormControl<number | null | undefined>,
		MaxManifestFragmentResults: FormControl<number | null | undefined>,
	}
	export function CreateGetDASHStreamingSessionURLInputFormGroup() {
		return new FormGroup<GetDASHStreamingSessionURLInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
			PlaybackMode: new FormControl<DASHPlaybackMode | null | undefined>(undefined),
			DisplayFragmentTimestamp: new FormControl<DASHDisplayFragmentNumber | null | undefined>(undefined),
			DisplayFragmentNumber: new FormControl<DASHDisplayFragmentNumber | null | undefined>(undefined),
			Expires: new FormControl<number | null | undefined>(undefined),
			MaxManifestFragmentResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum HLSPlaybackMode { LIVE = 'LIVE', LIVE_REPLAY = 'LIVE_REPLAY', ON_DEMAND = 'ON_DEMAND' }


	/** Contains the range of timestamps for the requested media, and the source of the timestamps. */
	export interface HLSFragmentSelector {
		FragmentSelectorType?: ClipFragmentSelectorType;
		TimestampRange?: HLSTimestampRange;
	}

	/** Contains the range of timestamps for the requested media, and the source of the timestamps. */
	export interface HLSFragmentSelectorFormProperties {
		FragmentSelectorType: FormControl<ClipFragmentSelectorType | null | undefined>,
	}
	export function CreateHLSFragmentSelectorFormGroup() {
		return new FormGroup<HLSFragmentSelectorFormProperties>({
			FragmentSelectorType: new FormControl<ClipFragmentSelectorType | null | undefined>(undefined),
		});

	}

	export enum HLSDiscontinuityMode { ALWAYS = 'ALWAYS', NEVER = 'NEVER', ON_DISCONTINUITY = 'ON_DISCONTINUITY' }

	export enum HLSDisplayFragmentTimestamp { ALWAYS = 'ALWAYS', NEVER = 'NEVER' }

	export interface GetHLSStreamingSessionURLInput {
		StreamName?: string;
		StreamARN?: string;
		PlaybackMode?: DASHPlaybackMode;
		HLSFragmentSelector?: HLSFragmentSelector;
		ContainerFormat?: ContainerFormat;
		DiscontinuityMode?: HLSDiscontinuityMode;
		DisplayFragmentTimestamp?: DASHDisplayFragmentNumber;
		Expires?: number | null;
		MaxMediaPlaylistFragmentResults?: number | null;
	}
	export interface GetHLSStreamingSessionURLInputFormProperties {
		StreamName: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
		PlaybackMode: FormControl<DASHPlaybackMode | null | undefined>,
		ContainerFormat: FormControl<ContainerFormat | null | undefined>,
		DiscontinuityMode: FormControl<HLSDiscontinuityMode | null | undefined>,
		DisplayFragmentTimestamp: FormControl<DASHDisplayFragmentNumber | null | undefined>,
		Expires: FormControl<number | null | undefined>,
		MaxMediaPlaylistFragmentResults: FormControl<number | null | undefined>,
	}
	export function CreateGetHLSStreamingSessionURLInputFormGroup() {
		return new FormGroup<GetHLSStreamingSessionURLInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
			PlaybackMode: new FormControl<DASHPlaybackMode | null | undefined>(undefined),
			ContainerFormat: new FormControl<ContainerFormat | null | undefined>(undefined),
			DiscontinuityMode: new FormControl<HLSDiscontinuityMode | null | undefined>(undefined),
			DisplayFragmentTimestamp: new FormControl<DASHDisplayFragmentNumber | null | undefined>(undefined),
			Expires: new FormControl<number | null | undefined>(undefined),
			MaxMediaPlaylistFragmentResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ImageSelectorType { PRODUCER_TIMESTAMP = 'PRODUCER_TIMESTAMP', SERVER_TIMESTAMP = 'SERVER_TIMESTAMP' }

	export interface GetImagesInput {
		StreamName?: string;
		StreamARN?: string;

		/** Required */
		ImageSelectorType: ClipFragmentSelectorType;

		/** Required */
		StartTimestamp: Date;

		/** Required */
		EndTimestamp: Date;
		SamplingInterval?: number | null;

		/** Required */
		Format: Format;
		FormatConfig?: FormatConfig;
		WidthPixels?: number | null;
		HeightPixels?: number | null;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface GetImagesInputFormProperties {
		StreamName: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,

		/** Required */
		ImageSelectorType: FormControl<ClipFragmentSelectorType | null | undefined>,

		/** Required */
		StartTimestamp: FormControl<Date | null | undefined>,

		/** Required */
		EndTimestamp: FormControl<Date | null | undefined>,
		SamplingInterval: FormControl<number | null | undefined>,

		/** Required */
		Format: FormControl<Format | null | undefined>,
		WidthPixels: FormControl<number | null | undefined>,
		HeightPixels: FormControl<number | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetImagesInputFormGroup() {
		return new FormGroup<GetImagesInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
			ImageSelectorType: new FormControl<ClipFragmentSelectorType | null | undefined>(undefined, [Validators.required]),
			StartTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			SamplingInterval: new FormControl<number | null | undefined>(undefined),
			Format: new FormControl<Format | null | undefined>(undefined, [Validators.required]),
			WidthPixels: new FormControl<number | null | undefined>(undefined),
			HeightPixels: new FormControl<number | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMediaForFragmentListInput {
		StreamName?: string;
		StreamARN?: string;

		/** Required */
		Fragments: Array<string>;
	}
	export interface GetMediaForFragmentListInputFormProperties {
		StreamName: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateGetMediaForFragmentListInputFormGroup() {
		return new FormGroup<GetMediaForFragmentListInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFragmentsInput {
		StreamName?: string;
		StreamARN?: string;
		MaxResults?: number | null;
		NextToken?: string;
		FragmentSelector?: FragmentSelector;
	}
	export interface ListFragmentsInputFormProperties {
		StreamName: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFragmentsInputFormGroup() {
		return new FormGroup<ListFragmentsInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Downloads an MP4 file (clip) containing the archived, on-demand media from the specified video stream over the specified time range. </p> <p>Both the StreamName and the StreamARN parameters are optional, but you must specify either the StreamName or the StreamARN when invoking this API operation. </p> <p>As a prerequisite to using GetCLip API, you must obtain an endpoint using <code>GetDataEndpoint</code>, specifying GET_CLIP for<code/> the <code>APIName</code> parameter. </p> <p>An Amazon Kinesis video stream has the following requirements for providing data through MP4:</p> <ul> <li> <p>The media must contain h.264 or h.265 encoded video and, optionally, AAC or G.711 encoded audio. Specifically, the codec ID of track 1 should be <code>V_MPEG/ISO/AVC</code> (for h.264) or V_MPEGH/ISO/HEVC (for H.265). Optionally, the codec ID of track 2 should be <code>A_AAC</code> (for AAC) or A_MS/ACM (for G.711).</p> </li> <li> <p>Data retention must be greater than 0.</p> </li> <li> <p>The video track of each fragment must contain codec private data in the Advanced Video Coding (AVC) for H.264 format and HEVC for H.265 format. For more information, see <a href="https://www.iso.org/standard/55980.html">MPEG-4 specification ISO/IEC 14496-15</a>. For information about adapting stream data to a given format, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/producer-reference-nal.html">NAL Adaptation Flags</a>.</p> </li> <li> <p>The audio track (if present) of each fragment must contain codec private data in the AAC format (<a href="https://www.iso.org/standard/43345.html">AAC specification ISO/IEC 13818-7</a>) or the <a href="http://www-mmsp.ece.mcgill.ca/Documents/AudioFormats/WAVE/WAVE.html">MS Wave format</a>.</p> </li> </ul> <p>You can monitor the amount of outgoing data by monitoring the <code>GetClip.OutgoingBytes</code> Amazon CloudWatch metric. For information about using CloudWatch to monitor Kinesis Video Streams, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/monitoring.html">Monitoring Kinesis Video Streams</a>. For pricing information, see <a href="https://aws.amazon.com/kinesis/video-streams/pricing/">Amazon Kinesis Video Streams Pricing</a> and <a href="https://aws.amazon.com/pricing/"> Amazon Web Services Pricing</a>. Charges for outgoing Amazon Web Services data apply.</p>
		 * Post getClip
		 * @return {GetClipOutput} Success
		 */
		GetClip(requestBody: GetClipPostBody): Observable<GetClipOutput> {
			return this.http.post<GetClipOutput>(this.baseUri + 'getClip', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves an MPEG Dynamic Adaptive Streaming over HTTP (DASH) URL for the stream. You can then open the URL in a media player to view the stream contents.</p> <p>Both the <code>StreamName</code> and the <code>StreamARN</code> parameters are optional, but you must specify either the <code>StreamName</code> or the <code>StreamARN</code> when invoking this API operation.</p> <p>An Amazon Kinesis video stream has the following requirements for providing data through MPEG-DASH:</p> <ul> <li> <p>The media must contain h.264 or h.265 encoded video and, optionally, AAC or G.711 encoded audio. Specifically, the codec ID of track 1 should be <code>V_MPEG/ISO/AVC</code> (for h.264) or V_MPEGH/ISO/HEVC (for H.265). Optionally, the codec ID of track 2 should be <code>A_AAC</code> (for AAC) or A_MS/ACM (for G.711).</p> </li> <li> <p>Data retention must be greater than 0.</p> </li> <li> <p>The video track of each fragment must contain codec private data in the Advanced Video Coding (AVC) for H.264 format and HEVC for H.265 format. For more information, see <a href="https://www.iso.org/standard/55980.html">MPEG-4 specification ISO/IEC 14496-15</a>. For information about adapting stream data to a given format, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/producer-reference-nal.html">NAL Adaptation Flags</a>.</p> </li> <li> <p>The audio track (if present) of each fragment must contain codec private data in the AAC format (<a href="https://www.iso.org/standard/43345.html">AAC specification ISO/IEC 13818-7</a>) or the <a href="http://www-mmsp.ece.mcgill.ca/Documents/AudioFormats/WAVE/WAVE.html">MS Wave format</a>.</p> </li> </ul> <p>The following procedure shows how to use MPEG-DASH with Kinesis Video Streams:</p> <ol> <li> <p>Get an endpoint using <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetDataEndpoint.html">GetDataEndpoint</a>, specifying <code>GET_DASH_STREAMING_SESSION_URL</code> for the <code>APIName</code> parameter.</p> </li> <li> <p>Retrieve the MPEG-DASH URL using <code>GetDASHStreamingSessionURL</code>. Kinesis Video Streams creates an MPEG-DASH streaming session to be used for accessing content in a stream using the MPEG-DASH protocol. <code>GetDASHStreamingSessionURL</code> returns an authenticated URL (that includes an encrypted session token) for the session's MPEG-DASH <i>manifest</i> (the root resource needed for streaming with MPEG-DASH).</p> <note> <p>Don't share or store this token where an unauthorized entity can access it. The token provides access to the content of the stream. Safeguard the token with the same measures that you use with your Amazon Web Services credentials.</p> </note> <p>The media that is made available through the manifest consists only of the requested stream, time range, and format. No other media data (such as frames outside the requested window or alternate bitrates) is made available.</p> </li> <li> <p>Provide the URL (containing the encrypted session token) for the MPEG-DASH manifest to a media player that supports the MPEG-DASH protocol. Kinesis Video Streams makes the initialization fragment and media fragments available through the manifest URL. The initialization fragment contains the codec private data for the stream, and other data needed to set up the video or audio decoder and renderer. The media fragments contain encoded video frames or encoded audio samples.</p> </li> <li> <p>The media player receives the authenticated URL and requests stream metadata and media data normally. When the media player requests data, it calls the following actions:</p> <ul> <li> <p> <b>GetDASHManifest:</b> Retrieves an MPEG DASH manifest, which contains the metadata for the media that you want to playback.</p> </li> <li> <p> <b>GetMP4InitFragment:</b> Retrieves the MP4 initialization fragment. The media player typically loads the initialization fragment before loading any media fragments. This fragment contains the "<code>fytp</code>" and "<code>moov</code>" MP4 atoms, and the child atoms that are needed to initialize the media player decoder.</p> <p>The initialization fragment does not correspond to a fragment in a Kinesis video stream. It contains only the codec private data for the stream and respective track, which the media player needs to decode the media frames.</p> </li> <li> <p> <b>GetMP4MediaFragment:</b> Retrieves MP4 media fragments. These fragments contain the "<code>moof</code>" and "<code>mdat</code>" MP4 atoms and their child atoms, containing the encoded fragment's media frames and their timestamps. </p> <note> <p>After the first media fragment is made available in a streaming session, any fragments that don't contain the same codec private data cause an error to be returned when those different media fragments are loaded. Therefore, the codec private data should not change between fragments in a session. This also means that the session fails if the fragments in a stream change from having only video to having both audio and video.</p> </note> <p>Data retrieved with this action is billable. See <a href="https://aws.amazon.com/kinesis/video-streams/pricing/">Pricing</a> for details.</p> </li> </ul> </li> </ol> <note> <p>For restrictions that apply to MPEG-DASH sessions, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/limits.html">Kinesis Video Streams Limits</a>.</p> </note> <p>You can monitor the amount of data that the media player consumes by monitoring the <code>GetMP4MediaFragment.OutgoingBytes</code> Amazon CloudWatch metric. For information about using CloudWatch to monitor Kinesis Video Streams, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/monitoring.html">Monitoring Kinesis Video Streams</a>. For pricing information, see <a href="https://aws.amazon.com/kinesis/video-streams/pricing/">Amazon Kinesis Video Streams Pricing</a> and <a href="https://aws.amazon.com/pricing/">Amazon Web Services Pricing</a>. Charges for both HLS sessions and outgoing Amazon Web Services data apply.</p> <p>For more information about HLS, see <a href="https://developer.apple.com/streaming/">HTTP Live Streaming</a> on the <a href="https://developer.apple.com">Apple Developer site</a>.</p> <important> <p>If an error is thrown after invoking a Kinesis Video Streams archived media API, in addition to the HTTP status code and the response body, it includes the following pieces of information: </p> <ul> <li> <p> <code>x-amz-ErrorType</code> HTTP header – contains a more specific error type in addition to what the HTTP status code provides. </p> </li> <li> <p> <code>x-amz-RequestId</code> HTTP header – if you want to report an issue to Amazon Web Services the support team can better diagnose the problem if given the Request Id.</p> </li> </ul> <p>Both the HTTP status code and the ErrorType header can be utilized to make programmatic decisions about whether errors are retry-able and under what conditions, as well as provide information on what actions the client programmer might need to take in order to successfully try again.</p> <p>For more information, see the <b>Errors</b> section at the bottom of this topic, as well as <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/CommonErrors.html">Common Errors</a>. </p> </important>
		 * Post getDASHStreamingSessionURL
		 * @return {GetDASHStreamingSessionURLOutput} Success
		 */
		GetDASHStreamingSessionURL(requestBody: GetDASHStreamingSessionURLPostBody): Observable<GetDASHStreamingSessionURLOutput> {
			return this.http.post<GetDASHStreamingSessionURLOutput>(this.baseUri + 'getDASHStreamingSessionURL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves an HTTP Live Streaming (HLS) URL for the stream. You can then open the URL in a browser or media player to view the stream contents.</p> <p>Both the <code>StreamName</code> and the <code>StreamARN</code> parameters are optional, but you must specify either the <code>StreamName</code> or the <code>StreamARN</code> when invoking this API operation.</p> <p>An Amazon Kinesis video stream has the following requirements for providing data through HLS:</p> <ul> <li> <p>For streaming video, the media must contain H.264 or H.265 encoded video and, optionally, AAC encoded audio. Specifically, the codec ID of track 1 should be <code>V_MPEG/ISO/AVC</code> (for H.264) or <code>V_MPEG/ISO/HEVC</code> (for H.265). Optionally, the codec ID of track 2 should be <code>A_AAC</code>. For audio only streaming, the codec ID of track 1 should be <code>A_AAC</code>.</p> </li> <li> <p>Data retention must be greater than 0.</p> </li> <li> <p>The video track of each fragment must contain codec private data in the Advanced Video Coding (AVC) for H.264 format or HEVC for H.265 format (<a href="https://www.iso.org/standard/55980.html">MPEG-4 specification ISO/IEC 14496-15</a>). For information about adapting stream data to a given format, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/producer-reference-nal.html">NAL Adaptation Flags</a>.</p> </li> <li> <p>The audio track (if present) of each fragment must contain codec private data in the AAC format (<a href="https://www.iso.org/standard/43345.html">AAC specification ISO/IEC 13818-7</a>).</p> </li> </ul> <p>Kinesis Video Streams HLS sessions contain fragments in the fragmented MPEG-4 form (also called fMP4 or CMAF) or the MPEG-2 form (also called TS chunks, which the HLS specification also supports). For more information about HLS fragment types, see the <a href="https://tools.ietf.org/html/draft-pantos-http-live-streaming-23">HLS specification</a>.</p> <p>The following procedure shows how to use HLS with Kinesis Video Streams:</p> <ol> <li> <p>Get an endpoint using <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetDataEndpoint.html">GetDataEndpoint</a>, specifying <code>GET_HLS_STREAMING_SESSION_URL</code> for the <code>APIName</code> parameter.</p> </li> <li> <p>Retrieve the HLS URL using <code>GetHLSStreamingSessionURL</code>. Kinesis Video Streams creates an HLS streaming session to be used for accessing content in a stream using the HLS protocol. <code>GetHLSStreamingSessionURL</code> returns an authenticated URL (that includes an encrypted session token) for the session's HLS <i>master playlist</i> (the root resource needed for streaming with HLS).</p> <note> <p>Don't share or store this token where an unauthorized entity could access it. The token provides access to the content of the stream. Safeguard the token with the same measures that you would use with your Amazon Web Services credentials.</p> </note> <p>The media that is made available through the playlist consists only of the requested stream, time range, and format. No other media data (such as frames outside the requested window or alternate bitrates) is made available.</p> </li> <li> <p>Provide the URL (containing the encrypted session token) for the HLS master playlist to a media player that supports the HLS protocol. Kinesis Video Streams makes the HLS media playlist, initialization fragment, and media fragments available through the master playlist URL. The initialization fragment contains the codec private data for the stream, and other data needed to set up the video or audio decoder and renderer. The media fragments contain H.264-encoded video frames or AAC-encoded audio samples.</p> </li> <li> <p>The media player receives the authenticated URL and requests stream metadata and media data normally. When the media player requests data, it calls the following actions:</p> <ul> <li> <p> <b>GetHLSMasterPlaylist:</b> Retrieves an HLS master playlist, which contains a URL for the <code>GetHLSMediaPlaylist</code> action for each track, and additional metadata for the media player, including estimated bitrate and resolution.</p> </li> <li> <p> <b>GetHLSMediaPlaylist:</b> Retrieves an HLS media playlist, which contains a URL to access the MP4 initialization fragment with the <code>GetMP4InitFragment</code> action, and URLs to access the MP4 media fragments with the <code>GetMP4MediaFragment</code> actions. The HLS media playlist also contains metadata about the stream that the player needs to play it, such as whether the <code>PlaybackMode</code> is <code>LIVE</code> or <code>ON_DEMAND</code>. The HLS media playlist is typically static for sessions with a <code>PlaybackType</code> of <code>ON_DEMAND</code>. The HLS media playlist is continually updated with new fragments for sessions with a <code>PlaybackType</code> of <code>LIVE</code>. There is a distinct HLS media playlist for the video track and the audio track (if applicable) that contains MP4 media URLs for the specific track. </p> </li> <li> <p> <b>GetMP4InitFragment:</b> Retrieves the MP4 initialization fragment. The media player typically loads the initialization fragment before loading any media fragments. This fragment contains the "<code>fytp</code>" and "<code>moov</code>" MP4 atoms, and the child atoms that are needed to initialize the media player decoder.</p> <p>The initialization fragment does not correspond to a fragment in a Kinesis video stream. It contains only the codec private data for the stream and respective track, which the media player needs to decode the media frames.</p> </li> <li> <p> <b>GetMP4MediaFragment:</b> Retrieves MP4 media fragments. These fragments contain the "<code>moof</code>" and "<code>mdat</code>" MP4 atoms and their child atoms, containing the encoded fragment's media frames and their timestamps. </p> <note> <p>For the HLS streaming session, in-track codec private data (CPD) changes are supported. After the first media fragment is made available in a streaming session, fragments can contain CPD changes for each track. Therefore, the fragments in a session can have a different resolution, bit rate, or other information in the CPD without interrupting playback. However, any change made in the track number or track codec format can return an error when those different media fragments are loaded. For example, streaming will fail if the fragments in the stream change from having only video to having both audio and video, or if an AAC audio track is changed to an ALAW audio track. For each streaming session, only 500 CPD changes are allowed.</p> </note> <p>Data retrieved with this action is billable. For information, see <a href="https://aws.amazon.com/kinesis/video-streams/pricing/">Pricing</a>.</p> </li> <li> <p> <b>GetTSFragment:</b> Retrieves MPEG TS fragments containing both initialization and media data for all tracks in the stream.</p> <note> <p>If the <code>ContainerFormat</code> is <code>MPEG_TS</code>, this API is used instead of <code>GetMP4InitFragment</code> and <code>GetMP4MediaFragment</code> to retrieve stream media.</p> </note> <p>Data retrieved with this action is billable. For more information, see <a href="https://aws.amazon.com/kinesis/video-streams/pricing/">Kinesis Video Streams pricing</a>.</p> </li> </ul> </li> </ol> <p>A streaming session URL must not be shared between players. The service might throttle a session if multiple media players are sharing it. For connection limits, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/limits.html">Kinesis Video Streams Limits</a>.</p> <p>You can monitor the amount of data that the media player consumes by monitoring the <code>GetMP4MediaFragment.OutgoingBytes</code> Amazon CloudWatch metric. For information about using CloudWatch to monitor Kinesis Video Streams, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/monitoring.html">Monitoring Kinesis Video Streams</a>. For pricing information, see <a href="https://aws.amazon.com/kinesis/video-streams/pricing/">Amazon Kinesis Video Streams Pricing</a> and <a href="https://aws.amazon.com/pricing/">Amazon Web Services Pricing</a>. Charges for both HLS sessions and outgoing Amazon Web Services data apply.</p> <p>For more information about HLS, see <a href="https://developer.apple.com/streaming/">HTTP Live Streaming</a> on the <a href="https://developer.apple.com">Apple Developer site</a>.</p> <important> <p>If an error is thrown after invoking a Kinesis Video Streams archived media API, in addition to the HTTP status code and the response body, it includes the following pieces of information: </p> <ul> <li> <p> <code>x-amz-ErrorType</code> HTTP header – contains a more specific error type in addition to what the HTTP status code provides. </p> </li> <li> <p> <code>x-amz-RequestId</code> HTTP header – if you want to report an issue to Amazon Web Services, the support team can better diagnose the problem if given the Request Id.</p> </li> </ul> <p>Both the HTTP status code and the ErrorType header can be utilized to make programmatic decisions about whether errors are retry-able and under what conditions, as well as provide information on what actions the client programmer might need to take in order to successfully try again.</p> <p>For more information, see the <b>Errors</b> section at the bottom of this topic, as well as <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/CommonErrors.html">Common Errors</a>. </p> </important>
		 * Post getHLSStreamingSessionURL
		 * @return {GetHLSStreamingSessionURLOutput} Success
		 */
		GetHLSStreamingSessionURL(requestBody: GetHLSStreamingSessionURLPostBody): Observable<GetHLSStreamingSessionURLOutput> {
			return this.http.post<GetHLSStreamingSessionURLOutput>(this.baseUri + 'getHLSStreamingSessionURL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of Images corresponding to each timestamp for a given time range, sampling interval, and image format configuration.
		 * Post getImages
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetImagesOutput} Success
		 */
		GetImages(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetImagesPostBody): Observable<GetImagesOutput> {
			return this.http.post<GetImagesOutput>(this.baseUri + 'getImages?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets media for a list of fragments (specified by fragment number) from the archived data in an Amazon Kinesis video stream.</p> <note> <p>You must first call the <code>GetDataEndpoint</code> API to get an endpoint. Then send the <code>GetMediaForFragmentList</code> requests to this endpoint using the <a href="https://docs.aws.amazon.com/cli/latest/reference/">--endpoint-url parameter</a>. </p> </note> <p>For limits, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/limits.html">Kinesis Video Streams Limits</a>.</p> <important> <p>If an error is thrown after invoking a Kinesis Video Streams archived media API, in addition to the HTTP status code and the response body, it includes the following pieces of information: </p> <ul> <li> <p> <code>x-amz-ErrorType</code> HTTP header – contains a more specific error type in addition to what the HTTP status code provides. </p> </li> <li> <p> <code>x-amz-RequestId</code> HTTP header – if you want to report an issue to Amazon Web Services, the support team can better diagnose the problem if given the Request Id.</p> </li> </ul> <p>Both the HTTP status code and the ErrorType header can be utilized to make programmatic decisions about whether errors are retry-able and under what conditions, as well as provide information on what actions the client programmer might need to take in order to successfully try again.</p> <p>For more information, see the <b>Errors</b> section at the bottom of this topic, as well as <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/CommonErrors.html">Common Errors</a>. </p> </important>
		 * Post getMediaForFragmentList
		 * @return {GetMediaForFragmentListOutput} Success
		 */
		GetMediaForFragmentList(requestBody: GetMediaForFragmentListPostBody): Observable<GetMediaForFragmentListOutput> {
			return this.http.post<GetMediaForFragmentListOutput>(this.baseUri + 'getMediaForFragmentList', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of <a>Fragment</a> objects from the specified stream and timestamp range within the archived data.</p> <p>Listing fragments is eventually consistent. This means that even if the producer receives an acknowledgment that a fragment is persisted, the result might not be returned immediately from a request to <code>ListFragments</code>. However, results are typically available in less than one second.</p> <note> <p>You must first call the <code>GetDataEndpoint</code> API to get an endpoint. Then send the <code>ListFragments</code> requests to this endpoint using the <a href="https://docs.aws.amazon.com/cli/latest/reference/">--endpoint-url parameter</a>. </p> </note> <important> <p>If an error is thrown after invoking a Kinesis Video Streams archived media API, in addition to the HTTP status code and the response body, it includes the following pieces of information: </p> <ul> <li> <p> <code>x-amz-ErrorType</code> HTTP header – contains a more specific error type in addition to what the HTTP status code provides. </p> </li> <li> <p> <code>x-amz-RequestId</code> HTTP header – if you want to report an issue to Amazon Web Services, the support team can better diagnose the problem if given the Request Id.</p> </li> </ul> <p>Both the HTTP status code and the ErrorType header can be utilized to make programmatic decisions about whether errors are retry-able and under what conditions, as well as provide information on what actions the client programmer might need to take in order to successfully try again.</p> <p>For more information, see the <b>Errors</b> section at the bottom of this topic, as well as <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/CommonErrors.html">Common Errors</a>. </p> </important>
		 * Post listFragments
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFragmentsOutput} Success
		 */
		ListFragments(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListFragmentsPostBody): Observable<ListFragmentsOutput> {
			return this.http.post<ListFragmentsOutput>(this.baseUri + 'listFragments?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface GetClipPostBody {

		/**
		 * <p>The name of the stream for which to retrieve the media clip. </p> <p>You must specify either the StreamName or the StreamARN. </p>
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName?: string | null;

		/**
		 * <p>The Amazon Resource Name (ARN) of the stream for which to retrieve the media clip. </p> <p>You must specify either the StreamName or the StreamARN. </p>
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN?: string | null;

		/**
		 * <p>Describes the timestamp range and timestamp origin of a range of fragments.</p> <p>Fragments that have duplicate producer timestamps are deduplicated. This means that if producers are producing a stream of fragments with producer timestamps that are approximately equal to the true clock time, the clip will contain all of the fragments within the requested timestamp range. If some fragments are ingested within the same time range and very different points in time, only the oldest ingested collection of fragments are returned.</p>
		 * Required
		 */
		ClipFragmentSelector: GetClipPostBodyClipFragmentSelector;
	}
	export interface GetClipPostBodyFormProperties {

		/**
		 * <p>The name of the stream for which to retrieve the media clip. </p> <p>You must specify either the StreamName or the StreamARN. </p>
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN) of the stream for which to retrieve the media clip. </p> <p>You must specify either the StreamName or the StreamARN. </p>
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateGetClipPostBodyFormGroup() {
		return new FormGroup<GetClipPostBodyFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
		});

	}

	export interface GetClipPostBodyClipFragmentSelector {
		FragmentSelectorType?: ClipFragmentSelectorType;
		TimestampRange?: ClipTimestampRange;
	}
	export interface GetClipPostBodyClipFragmentSelectorFormProperties {
		FragmentSelectorType: FormControl<ClipFragmentSelectorType | null | undefined>,
	}
	export function CreateGetClipPostBodyClipFragmentSelectorFormGroup() {
		return new FormGroup<GetClipPostBodyClipFragmentSelectorFormProperties>({
			FragmentSelectorType: new FormControl<ClipFragmentSelectorType | null | undefined>(undefined),
		});

	}

	export interface GetDASHStreamingSessionURLPostBody {

		/**
		 * <p>The name of the stream for which to retrieve the MPEG-DASH manifest URL.</p> <p>You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName?: string | null;

		/**
		 * <p>The Amazon Resource Name (ARN) of the stream for which to retrieve the MPEG-DASH manifest URL.</p> <p>You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN?: string | null;

		/** <p>Whether to retrieve live, live replay, or archived, on-demand data.</p> <p>Features of the three types of sessions include the following:</p> <ul> <li> <p> <b> <code>LIVE</code> </b>: For sessions of this type, the MPEG-DASH manifest is continually updated with the latest fragments as they become available. We recommend that the media player retrieve a new manifest on a one-second interval. When this type of session is played in a media player, the user interface typically displays a "live" notification, with no scrubber control for choosing the position in the playback window to display.</p> <note> <p>In <code>LIVE</code> mode, the newest available fragments are included in an MPEG-DASH manifest, even if there is a gap between fragments (that is, if a fragment is missing). A gap like this might cause a media player to halt or cause a jump in playback. In this mode, fragments are not added to the MPEG-DASH manifest if they are older than the newest fragment in the playlist. If the missing fragment becomes available after a subsequent fragment is added to the manifest, the older fragment is not added, and the gap is not filled.</p> </note> </li> <li> <p> <b> <code>LIVE_REPLAY</code> </b>: For sessions of this type, the MPEG-DASH manifest is updated similarly to how it is updated for <code>LIVE</code> mode except that it starts by including fragments from a given start time. Instead of fragments being added as they are ingested, fragments are added as the duration of the next fragment elapses. For example, if the fragments in the session are two seconds long, then a new fragment is added to the manifest every two seconds. This mode is useful to be able to start playback from when an event is detected and continue live streaming media that has not yet been ingested as of the time of the session creation. This mode is also useful to stream previously archived media without being limited by the 1,000 fragment limit in the <code>ON_DEMAND</code> mode. </p> </li> <li> <p> <b> <code>ON_DEMAND</code> </b>: For sessions of this type, the MPEG-DASH manifest contains all the fragments for the session, up to the number that is specified in <code>MaxManifestFragmentResults</code>. The manifest must be retrieved only once for each session. When this type of session is played in a media player, the user interface typically displays a scrubber control for choosing the position in the playback window to display.</p> </li> </ul> <p>In all playback modes, if <code>FragmentSelectorType</code> is <code>PRODUCER_TIMESTAMP</code>, and if there are multiple fragments with the same start timestamp, the fragment that has the larger fragment number (that is, the newer fragment) is included in the MPEG-DASH manifest. The other fragments are not included. Fragments that have different timestamps but have overlapping durations are still included in the MPEG-DASH manifest. This can lead to unexpected behavior in the media player.</p> <p>The default is <code>LIVE</code>.</p> */
		PlaybackMode?: DASHPlaybackMode | null;

		/** <p>Per the MPEG-DASH specification, the wall-clock time of fragments in the manifest file can be derived using attributes in the manifest itself. However, typically, MPEG-DASH compatible media players do not properly handle gaps in the media timeline. Kinesis Video Streams adjusts the media timeline in the manifest file to enable playback of media with discontinuities. Therefore, the wall-clock time derived from the manifest file may be inaccurate. If DisplayFragmentTimestamp is set to <code>ALWAYS</code>, the accurate fragment timestamp is added to each S element in the manifest file with the attribute name “kvs:ts”. A custom MPEG-DASH media player is necessary to leverage this custom attribute.</p> <p>The default value is <code>NEVER</code>. When <a>DASHFragmentSelector</a> is <code>SERVER_TIMESTAMP</code>, the timestamps will be the server start timestamps. Similarly, when <a>DASHFragmentSelector</a> is <code>PRODUCER_TIMESTAMP</code>, the timestamps will be the producer start timestamps. </p> */
		DisplayFragmentTimestamp?: DASHDisplayFragmentNumber | null;

		/** <p>Fragments are identified in the manifest file based on their sequence number in the session. If DisplayFragmentNumber is set to <code>ALWAYS</code>, the Kinesis Video Streams fragment number is added to each S element in the manifest file with the attribute name “kvs:fn”. These fragment numbers can be used for logging or for use with other APIs (e.g. <code>GetMedia</code> and <code>GetMediaForFragmentList</code>). A custom MPEG-DASH media player is necessary to leverage these this custom attribute.</p> <p>The default value is <code>NEVER</code>.</p> */
		DisplayFragmentNumber?: DASHDisplayFragmentNumber | null;

		/** Contains the range of timestamps for the requested media, and the source of the timestamps. */
		DASHFragmentSelector?: GetDASHStreamingSessionURLPostBodyDASHFragmentSelector;

		/**
		 * <p>The time in seconds until the requested session expires. This value can be between 300 (5 minutes) and 43200 (12 hours).</p> <p>When a session expires, no new calls to <code>GetDashManifest</code>, <code>GetMP4InitFragment</code>, or <code>GetMP4MediaFragment</code> can be made for that session.</p> <p>The default is 300 (5 minutes).</p>
		 * Minimum: 300
		 * Maximum: 43200
		 */
		Expires?: number | null;

		/**
		 * <p>The maximum number of fragments that are returned in the MPEG-DASH manifest.</p> <p>When the <code>PlaybackMode</code> is <code>LIVE</code>, the most recent fragments are returned up to this value. When the <code>PlaybackMode</code> is <code>ON_DEMAND</code>, the oldest fragments are returned, up to this maximum number.</p> <p>When there are a higher number of fragments available in a live MPEG-DASH manifest, video players often buffer content before starting playback. Increasing the buffer size increases the playback latency, but it decreases the likelihood that rebuffering will occur during playback. We recommend that a live MPEG-DASH manifest have a minimum of 3 fragments and a maximum of 10 fragments.</p> <p>The default is 5 fragments if <code>PlaybackMode</code> is <code>LIVE</code> or <code>LIVE_REPLAY</code>, and 1,000 if <code>PlaybackMode</code> is <code>ON_DEMAND</code>. </p> <p>The maximum value of 1,000 fragments corresponds to more than 16 minutes of video on streams with 1-second fragments, and more than 2 1/2 hours of video on streams with 10-second fragments.</p>
		 * Minimum: 1
		 * Maximum: 5000
		 */
		MaxManifestFragmentResults?: number | null;
	}
	export interface GetDASHStreamingSessionURLPostBodyFormProperties {

		/**
		 * <p>The name of the stream for which to retrieve the MPEG-DASH manifest URL.</p> <p>You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN) of the stream for which to retrieve the MPEG-DASH manifest URL.</p> <p>You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN: FormControl<string | null | undefined>,

		/** <p>Whether to retrieve live, live replay, or archived, on-demand data.</p> <p>Features of the three types of sessions include the following:</p> <ul> <li> <p> <b> <code>LIVE</code> </b>: For sessions of this type, the MPEG-DASH manifest is continually updated with the latest fragments as they become available. We recommend that the media player retrieve a new manifest on a one-second interval. When this type of session is played in a media player, the user interface typically displays a "live" notification, with no scrubber control for choosing the position in the playback window to display.</p> <note> <p>In <code>LIVE</code> mode, the newest available fragments are included in an MPEG-DASH manifest, even if there is a gap between fragments (that is, if a fragment is missing). A gap like this might cause a media player to halt or cause a jump in playback. In this mode, fragments are not added to the MPEG-DASH manifest if they are older than the newest fragment in the playlist. If the missing fragment becomes available after a subsequent fragment is added to the manifest, the older fragment is not added, and the gap is not filled.</p> </note> </li> <li> <p> <b> <code>LIVE_REPLAY</code> </b>: For sessions of this type, the MPEG-DASH manifest is updated similarly to how it is updated for <code>LIVE</code> mode except that it starts by including fragments from a given start time. Instead of fragments being added as they are ingested, fragments are added as the duration of the next fragment elapses. For example, if the fragments in the session are two seconds long, then a new fragment is added to the manifest every two seconds. This mode is useful to be able to start playback from when an event is detected and continue live streaming media that has not yet been ingested as of the time of the session creation. This mode is also useful to stream previously archived media without being limited by the 1,000 fragment limit in the <code>ON_DEMAND</code> mode. </p> </li> <li> <p> <b> <code>ON_DEMAND</code> </b>: For sessions of this type, the MPEG-DASH manifest contains all the fragments for the session, up to the number that is specified in <code>MaxManifestFragmentResults</code>. The manifest must be retrieved only once for each session. When this type of session is played in a media player, the user interface typically displays a scrubber control for choosing the position in the playback window to display.</p> </li> </ul> <p>In all playback modes, if <code>FragmentSelectorType</code> is <code>PRODUCER_TIMESTAMP</code>, and if there are multiple fragments with the same start timestamp, the fragment that has the larger fragment number (that is, the newer fragment) is included in the MPEG-DASH manifest. The other fragments are not included. Fragments that have different timestamps but have overlapping durations are still included in the MPEG-DASH manifest. This can lead to unexpected behavior in the media player.</p> <p>The default is <code>LIVE</code>.</p> */
		PlaybackMode: FormControl<DASHPlaybackMode | null | undefined>,

		/** <p>Per the MPEG-DASH specification, the wall-clock time of fragments in the manifest file can be derived using attributes in the manifest itself. However, typically, MPEG-DASH compatible media players do not properly handle gaps in the media timeline. Kinesis Video Streams adjusts the media timeline in the manifest file to enable playback of media with discontinuities. Therefore, the wall-clock time derived from the manifest file may be inaccurate. If DisplayFragmentTimestamp is set to <code>ALWAYS</code>, the accurate fragment timestamp is added to each S element in the manifest file with the attribute name “kvs:ts”. A custom MPEG-DASH media player is necessary to leverage this custom attribute.</p> <p>The default value is <code>NEVER</code>. When <a>DASHFragmentSelector</a> is <code>SERVER_TIMESTAMP</code>, the timestamps will be the server start timestamps. Similarly, when <a>DASHFragmentSelector</a> is <code>PRODUCER_TIMESTAMP</code>, the timestamps will be the producer start timestamps. </p> */
		DisplayFragmentTimestamp: FormControl<DASHDisplayFragmentNumber | null | undefined>,

		/** <p>Fragments are identified in the manifest file based on their sequence number in the session. If DisplayFragmentNumber is set to <code>ALWAYS</code>, the Kinesis Video Streams fragment number is added to each S element in the manifest file with the attribute name “kvs:fn”. These fragment numbers can be used for logging or for use with other APIs (e.g. <code>GetMedia</code> and <code>GetMediaForFragmentList</code>). A custom MPEG-DASH media player is necessary to leverage these this custom attribute.</p> <p>The default value is <code>NEVER</code>.</p> */
		DisplayFragmentNumber: FormControl<DASHDisplayFragmentNumber | null | undefined>,

		/**
		 * <p>The time in seconds until the requested session expires. This value can be between 300 (5 minutes) and 43200 (12 hours).</p> <p>When a session expires, no new calls to <code>GetDashManifest</code>, <code>GetMP4InitFragment</code>, or <code>GetMP4MediaFragment</code> can be made for that session.</p> <p>The default is 300 (5 minutes).</p>
		 * Minimum: 300
		 * Maximum: 43200
		 */
		Expires: FormControl<number | null | undefined>,

		/**
		 * <p>The maximum number of fragments that are returned in the MPEG-DASH manifest.</p> <p>When the <code>PlaybackMode</code> is <code>LIVE</code>, the most recent fragments are returned up to this value. When the <code>PlaybackMode</code> is <code>ON_DEMAND</code>, the oldest fragments are returned, up to this maximum number.</p> <p>When there are a higher number of fragments available in a live MPEG-DASH manifest, video players often buffer content before starting playback. Increasing the buffer size increases the playback latency, but it decreases the likelihood that rebuffering will occur during playback. We recommend that a live MPEG-DASH manifest have a minimum of 3 fragments and a maximum of 10 fragments.</p> <p>The default is 5 fragments if <code>PlaybackMode</code> is <code>LIVE</code> or <code>LIVE_REPLAY</code>, and 1,000 if <code>PlaybackMode</code> is <code>ON_DEMAND</code>. </p> <p>The maximum value of 1,000 fragments corresponds to more than 16 minutes of video on streams with 1-second fragments, and more than 2 1/2 hours of video on streams with 10-second fragments.</p>
		 * Minimum: 1
		 * Maximum: 5000
		 */
		MaxManifestFragmentResults: FormControl<number | null | undefined>,
	}
	export function CreateGetDASHStreamingSessionURLPostBodyFormGroup() {
		return new FormGroup<GetDASHStreamingSessionURLPostBodyFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			PlaybackMode: new FormControl<DASHPlaybackMode | null | undefined>(undefined),
			DisplayFragmentTimestamp: new FormControl<DASHDisplayFragmentNumber | null | undefined>(undefined),
			DisplayFragmentNumber: new FormControl<DASHDisplayFragmentNumber | null | undefined>(undefined),
			Expires: new FormControl<number | null | undefined>(undefined, [Validators.min(300), Validators.max(43200)]),
			MaxManifestFragmentResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(5000)]),
		});

	}

	export interface GetDASHStreamingSessionURLPostBodyDASHFragmentSelector {
		FragmentSelectorType?: ClipFragmentSelectorType;
		TimestampRange?: DASHTimestampRange;
	}
	export interface GetDASHStreamingSessionURLPostBodyDASHFragmentSelectorFormProperties {
		FragmentSelectorType: FormControl<ClipFragmentSelectorType | null | undefined>,
	}
	export function CreateGetDASHStreamingSessionURLPostBodyDASHFragmentSelectorFormGroup() {
		return new FormGroup<GetDASHStreamingSessionURLPostBodyDASHFragmentSelectorFormProperties>({
			FragmentSelectorType: new FormControl<ClipFragmentSelectorType | null | undefined>(undefined),
		});

	}

	export interface GetHLSStreamingSessionURLPostBody {

		/**
		 * <p>The name of the stream for which to retrieve the HLS master playlist URL.</p> <p>You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName?: string | null;

		/**
		 * <p>The Amazon Resource Name (ARN) of the stream for which to retrieve the HLS master playlist URL.</p> <p>You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN?: string | null;

		/** <p>Whether to retrieve live, live replay, or archived, on-demand data.</p> <p>Features of the three types of sessions include the following:</p> <ul> <li> <p> <b> <code>LIVE</code> </b>: For sessions of this type, the HLS media playlist is continually updated with the latest fragments as they become available. We recommend that the media player retrieve a new playlist on a one-second interval. When this type of session is played in a media player, the user interface typically displays a "live" notification, with no scrubber control for choosing the position in the playback window to display.</p> <note> <p>In <code>LIVE</code> mode, the newest available fragments are included in an HLS media playlist, even if there is a gap between fragments (that is, if a fragment is missing). A gap like this might cause a media player to halt or cause a jump in playback. In this mode, fragments are not added to the HLS media playlist if they are older than the newest fragment in the playlist. If the missing fragment becomes available after a subsequent fragment is added to the playlist, the older fragment is not added, and the gap is not filled.</p> </note> </li> <li> <p> <b> <code>LIVE_REPLAY</code> </b>: For sessions of this type, the HLS media playlist is updated similarly to how it is updated for <code>LIVE</code> mode except that it starts by including fragments from a given start time. Instead of fragments being added as they are ingested, fragments are added as the duration of the next fragment elapses. For example, if the fragments in the session are two seconds long, then a new fragment is added to the media playlist every two seconds. This mode is useful to be able to start playback from when an event is detected and continue live streaming media that has not yet been ingested as of the time of the session creation. This mode is also useful to stream previously archived media without being limited by the 1,000 fragment limit in the <code>ON_DEMAND</code> mode. </p> </li> <li> <p> <b> <code>ON_DEMAND</code> </b>: For sessions of this type, the HLS media playlist contains all the fragments for the session, up to the number that is specified in <code>MaxMediaPlaylistFragmentResults</code>. The playlist must be retrieved only once for each session. When this type of session is played in a media player, the user interface typically displays a scrubber control for choosing the position in the playback window to display.</p> </li> </ul> <p>In all playback modes, if <code>FragmentSelectorType</code> is <code>PRODUCER_TIMESTAMP</code>, and if there are multiple fragments with the same start timestamp, the fragment that has the largest fragment number (that is, the newest fragment) is included in the HLS media playlist. The other fragments are not included. Fragments that have different timestamps but have overlapping durations are still included in the HLS media playlist. This can lead to unexpected behavior in the media player.</p> <p>The default is <code>LIVE</code>.</p> */
		PlaybackMode?: DASHPlaybackMode | null;

		/** Contains the range of timestamps for the requested media, and the source of the timestamps. */
		HLSFragmentSelector?: GetHLSStreamingSessionURLPostBodyHLSFragmentSelector;

		/** <p>Specifies which format should be used for packaging the media. Specifying the <code>FRAGMENTED_MP4</code> container format packages the media into MP4 fragments (fMP4 or CMAF). This is the recommended packaging because there is minimal packaging overhead. The other container format option is <code>MPEG_TS</code>. HLS has supported MPEG TS chunks since it was released and is sometimes the only supported packaging on older HLS players. MPEG TS typically has a 5-25 percent packaging overhead. This means MPEG TS typically requires 5-25 percent more bandwidth and cost than fMP4.</p> <p>The default is <code>FRAGMENTED_MP4</code>.</p> */
		ContainerFormat?: ContainerFormat | null;

		/** <p>Specifies when flags marking discontinuities between fragments are added to the media playlists.</p> <p>Media players typically build a timeline of media content to play, based on the timestamps of each fragment. This means that if there is any overlap or gap between fragments (as is typical if <a>HLSFragmentSelector</a> is set to <code>SERVER_TIMESTAMP</code>), the media player timeline will also have small gaps between fragments in some places, and will overwrite frames in other places. Gaps in the media player timeline can cause playback to stall and overlaps can cause playback to be jittery. When there are discontinuity flags between fragments, the media player is expected to reset the timeline, resulting in the next fragment being played immediately after the previous fragment. </p> <p>The following modes are supported:</p> <ul> <li> <p> <code>ALWAYS</code>: a discontinuity marker is placed between every fragment in the HLS media playlist. It is recommended to use a value of <code>ALWAYS</code> if the fragment timestamps are not accurate.</p> </li> <li> <p> <code>NEVER</code>: no discontinuity markers are placed anywhere. It is recommended to use a value of <code>NEVER</code> to ensure the media player timeline most accurately maps to the producer timestamps. </p> </li> <li> <p> <code>ON_DISCONTINUITY</code>: a discontinuity marker is placed between fragments that have a gap or overlap of more than 50 milliseconds. For most playback scenarios, it is recommended to use a value of <code>ON_DISCONTINUITY</code> so that the media player timeline is only reset when there is a significant issue with the media timeline (e.g. a missing fragment).</p> </li> </ul> <p>The default is <code>ALWAYS</code> when <a>HLSFragmentSelector</a> is set to <code>SERVER_TIMESTAMP</code>, and <code>NEVER</code> when it is set to <code>PRODUCER_TIMESTAMP</code>.</p> */
		DiscontinuityMode?: HLSDiscontinuityMode | null;

		/** <p>Specifies when the fragment start timestamps should be included in the HLS media playlist. Typically, media players report the playhead position as a time relative to the start of the first fragment in the playback session. However, when the start timestamps are included in the HLS media playlist, some media players might report the current playhead as an absolute time based on the fragment timestamps. This can be useful for creating a playback experience that shows viewers the wall-clock time of the media.</p> <p>The default is <code>NEVER</code>. When <a>HLSFragmentSelector</a> is <code>SERVER_TIMESTAMP</code>, the timestamps will be the server start timestamps. Similarly, when <a>HLSFragmentSelector</a> is <code>PRODUCER_TIMESTAMP</code>, the timestamps will be the producer start timestamps. </p> */
		DisplayFragmentTimestamp?: DASHDisplayFragmentNumber | null;

		/**
		 * <p>The time in seconds until the requested session expires. This value can be between 300 (5 minutes) and 43200 (12 hours).</p> <p>When a session expires, no new calls to <code>GetHLSMasterPlaylist</code>, <code>GetHLSMediaPlaylist</code>, <code>GetMP4InitFragment</code>, <code>GetMP4MediaFragment</code>, or <code>GetTSFragment</code> can be made for that session.</p> <p>The default is 300 (5 minutes).</p>
		 * Minimum: 300
		 * Maximum: 43200
		 */
		Expires?: number | null;

		/**
		 * <p>The maximum number of fragments that are returned in the HLS media playlists.</p> <p>When the <code>PlaybackMode</code> is <code>LIVE</code>, the most recent fragments are returned up to this value. When the <code>PlaybackMode</code> is <code>ON_DEMAND</code>, the oldest fragments are returned, up to this maximum number.</p> <p>When there are a higher number of fragments available in a live HLS media playlist, video players often buffer content before starting playback. Increasing the buffer size increases the playback latency, but it decreases the likelihood that rebuffering will occur during playback. We recommend that a live HLS media playlist have a minimum of 3 fragments and a maximum of 10 fragments.</p> <p>The default is 5 fragments if <code>PlaybackMode</code> is <code>LIVE</code> or <code>LIVE_REPLAY</code>, and 1,000 if <code>PlaybackMode</code> is <code>ON_DEMAND</code>. </p> <p>The maximum value of 5,000 fragments corresponds to more than 80 minutes of video on streams with 1-second fragments, and more than 13 hours of video on streams with 10-second fragments.</p>
		 * Minimum: 1
		 * Maximum: 5000
		 */
		MaxMediaPlaylistFragmentResults?: number | null;
	}
	export interface GetHLSStreamingSessionURLPostBodyFormProperties {

		/**
		 * <p>The name of the stream for which to retrieve the HLS master playlist URL.</p> <p>You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN) of the stream for which to retrieve the HLS master playlist URL.</p> <p>You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN: FormControl<string | null | undefined>,

		/** <p>Whether to retrieve live, live replay, or archived, on-demand data.</p> <p>Features of the three types of sessions include the following:</p> <ul> <li> <p> <b> <code>LIVE</code> </b>: For sessions of this type, the HLS media playlist is continually updated with the latest fragments as they become available. We recommend that the media player retrieve a new playlist on a one-second interval. When this type of session is played in a media player, the user interface typically displays a "live" notification, with no scrubber control for choosing the position in the playback window to display.</p> <note> <p>In <code>LIVE</code> mode, the newest available fragments are included in an HLS media playlist, even if there is a gap between fragments (that is, if a fragment is missing). A gap like this might cause a media player to halt or cause a jump in playback. In this mode, fragments are not added to the HLS media playlist if they are older than the newest fragment in the playlist. If the missing fragment becomes available after a subsequent fragment is added to the playlist, the older fragment is not added, and the gap is not filled.</p> </note> </li> <li> <p> <b> <code>LIVE_REPLAY</code> </b>: For sessions of this type, the HLS media playlist is updated similarly to how it is updated for <code>LIVE</code> mode except that it starts by including fragments from a given start time. Instead of fragments being added as they are ingested, fragments are added as the duration of the next fragment elapses. For example, if the fragments in the session are two seconds long, then a new fragment is added to the media playlist every two seconds. This mode is useful to be able to start playback from when an event is detected and continue live streaming media that has not yet been ingested as of the time of the session creation. This mode is also useful to stream previously archived media without being limited by the 1,000 fragment limit in the <code>ON_DEMAND</code> mode. </p> </li> <li> <p> <b> <code>ON_DEMAND</code> </b>: For sessions of this type, the HLS media playlist contains all the fragments for the session, up to the number that is specified in <code>MaxMediaPlaylistFragmentResults</code>. The playlist must be retrieved only once for each session. When this type of session is played in a media player, the user interface typically displays a scrubber control for choosing the position in the playback window to display.</p> </li> </ul> <p>In all playback modes, if <code>FragmentSelectorType</code> is <code>PRODUCER_TIMESTAMP</code>, and if there are multiple fragments with the same start timestamp, the fragment that has the largest fragment number (that is, the newest fragment) is included in the HLS media playlist. The other fragments are not included. Fragments that have different timestamps but have overlapping durations are still included in the HLS media playlist. This can lead to unexpected behavior in the media player.</p> <p>The default is <code>LIVE</code>.</p> */
		PlaybackMode: FormControl<DASHPlaybackMode | null | undefined>,

		/** <p>Specifies which format should be used for packaging the media. Specifying the <code>FRAGMENTED_MP4</code> container format packages the media into MP4 fragments (fMP4 or CMAF). This is the recommended packaging because there is minimal packaging overhead. The other container format option is <code>MPEG_TS</code>. HLS has supported MPEG TS chunks since it was released and is sometimes the only supported packaging on older HLS players. MPEG TS typically has a 5-25 percent packaging overhead. This means MPEG TS typically requires 5-25 percent more bandwidth and cost than fMP4.</p> <p>The default is <code>FRAGMENTED_MP4</code>.</p> */
		ContainerFormat: FormControl<ContainerFormat | null | undefined>,

		/** <p>Specifies when flags marking discontinuities between fragments are added to the media playlists.</p> <p>Media players typically build a timeline of media content to play, based on the timestamps of each fragment. This means that if there is any overlap or gap between fragments (as is typical if <a>HLSFragmentSelector</a> is set to <code>SERVER_TIMESTAMP</code>), the media player timeline will also have small gaps between fragments in some places, and will overwrite frames in other places. Gaps in the media player timeline can cause playback to stall and overlaps can cause playback to be jittery. When there are discontinuity flags between fragments, the media player is expected to reset the timeline, resulting in the next fragment being played immediately after the previous fragment. </p> <p>The following modes are supported:</p> <ul> <li> <p> <code>ALWAYS</code>: a discontinuity marker is placed between every fragment in the HLS media playlist. It is recommended to use a value of <code>ALWAYS</code> if the fragment timestamps are not accurate.</p> </li> <li> <p> <code>NEVER</code>: no discontinuity markers are placed anywhere. It is recommended to use a value of <code>NEVER</code> to ensure the media player timeline most accurately maps to the producer timestamps. </p> </li> <li> <p> <code>ON_DISCONTINUITY</code>: a discontinuity marker is placed between fragments that have a gap or overlap of more than 50 milliseconds. For most playback scenarios, it is recommended to use a value of <code>ON_DISCONTINUITY</code> so that the media player timeline is only reset when there is a significant issue with the media timeline (e.g. a missing fragment).</p> </li> </ul> <p>The default is <code>ALWAYS</code> when <a>HLSFragmentSelector</a> is set to <code>SERVER_TIMESTAMP</code>, and <code>NEVER</code> when it is set to <code>PRODUCER_TIMESTAMP</code>.</p> */
		DiscontinuityMode: FormControl<HLSDiscontinuityMode | null | undefined>,

		/** <p>Specifies when the fragment start timestamps should be included in the HLS media playlist. Typically, media players report the playhead position as a time relative to the start of the first fragment in the playback session. However, when the start timestamps are included in the HLS media playlist, some media players might report the current playhead as an absolute time based on the fragment timestamps. This can be useful for creating a playback experience that shows viewers the wall-clock time of the media.</p> <p>The default is <code>NEVER</code>. When <a>HLSFragmentSelector</a> is <code>SERVER_TIMESTAMP</code>, the timestamps will be the server start timestamps. Similarly, when <a>HLSFragmentSelector</a> is <code>PRODUCER_TIMESTAMP</code>, the timestamps will be the producer start timestamps. </p> */
		DisplayFragmentTimestamp: FormControl<DASHDisplayFragmentNumber | null | undefined>,

		/**
		 * <p>The time in seconds until the requested session expires. This value can be between 300 (5 minutes) and 43200 (12 hours).</p> <p>When a session expires, no new calls to <code>GetHLSMasterPlaylist</code>, <code>GetHLSMediaPlaylist</code>, <code>GetMP4InitFragment</code>, <code>GetMP4MediaFragment</code>, or <code>GetTSFragment</code> can be made for that session.</p> <p>The default is 300 (5 minutes).</p>
		 * Minimum: 300
		 * Maximum: 43200
		 */
		Expires: FormControl<number | null | undefined>,

		/**
		 * <p>The maximum number of fragments that are returned in the HLS media playlists.</p> <p>When the <code>PlaybackMode</code> is <code>LIVE</code>, the most recent fragments are returned up to this value. When the <code>PlaybackMode</code> is <code>ON_DEMAND</code>, the oldest fragments are returned, up to this maximum number.</p> <p>When there are a higher number of fragments available in a live HLS media playlist, video players often buffer content before starting playback. Increasing the buffer size increases the playback latency, but it decreases the likelihood that rebuffering will occur during playback. We recommend that a live HLS media playlist have a minimum of 3 fragments and a maximum of 10 fragments.</p> <p>The default is 5 fragments if <code>PlaybackMode</code> is <code>LIVE</code> or <code>LIVE_REPLAY</code>, and 1,000 if <code>PlaybackMode</code> is <code>ON_DEMAND</code>. </p> <p>The maximum value of 5,000 fragments corresponds to more than 80 minutes of video on streams with 1-second fragments, and more than 13 hours of video on streams with 10-second fragments.</p>
		 * Minimum: 1
		 * Maximum: 5000
		 */
		MaxMediaPlaylistFragmentResults: FormControl<number | null | undefined>,
	}
	export function CreateGetHLSStreamingSessionURLPostBodyFormGroup() {
		return new FormGroup<GetHLSStreamingSessionURLPostBodyFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			PlaybackMode: new FormControl<DASHPlaybackMode | null | undefined>(undefined),
			ContainerFormat: new FormControl<ContainerFormat | null | undefined>(undefined),
			DiscontinuityMode: new FormControl<HLSDiscontinuityMode | null | undefined>(undefined),
			DisplayFragmentTimestamp: new FormControl<DASHDisplayFragmentNumber | null | undefined>(undefined),
			Expires: new FormControl<number | null | undefined>(undefined, [Validators.min(300), Validators.max(43200)]),
			MaxMediaPlaylistFragmentResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(5000)]),
		});

	}

	export interface GetHLSStreamingSessionURLPostBodyHLSFragmentSelector {
		FragmentSelectorType?: ClipFragmentSelectorType;
		TimestampRange?: HLSTimestampRange;
	}
	export interface GetHLSStreamingSessionURLPostBodyHLSFragmentSelectorFormProperties {
		FragmentSelectorType: FormControl<ClipFragmentSelectorType | null | undefined>,
	}
	export function CreateGetHLSStreamingSessionURLPostBodyHLSFragmentSelectorFormGroup() {
		return new FormGroup<GetHLSStreamingSessionURLPostBodyHLSFragmentSelectorFormProperties>({
			FragmentSelectorType: new FormControl<ClipFragmentSelectorType | null | undefined>(undefined),
		});

	}

	export interface GetImagesPostBody {

		/**
		 * The name of the stream from which to retrieve the images. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the stream from which to retrieve the images. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN?: string | null;

		/**
		 * The origin of the Server or Producer timestamps to use to generate the images.
		 * Required
		 */
		ImageSelectorType: ClipFragmentSelectorType;

		/**
		 * The starting point from which the images should be generated. This <code>StartTimestamp</code> must be within an inclusive range of timestamps for an image to be returned.
		 * Required
		 */
		StartTimestamp: Date;

		/**
		 * The end timestamp for the range of images to be generated. If the time range between <code>StartTimestamp</code> and <code>EndTimestamp</code> is more than 300 seconds above <code>StartTimestamp</code>, you will receive an <code>IllegalArgumentException</code>.
		 * Required
		 */
		EndTimestamp: Date;

		/** <p>The time interval in milliseconds (ms) at which the images need to be generated from the stream, with a default of 3000 ms. The minimum value that can be provided is 200 ms. If the timestamp range is less than the sampling interval, the Image from the <code>startTimestamp</code> will be returned if available. </p> <note> <p>The minimum value of 200 ms is a hard limit.</p> </note> */
		SamplingInterval?: number | null;

		/**
		 * The format that will be used to encode the image.
		 * Required
		 */
		Format: Format;

		/** The list of a key-value pair structure that contains extra parameters that can be applied when the image is generated. The <code>FormatConfig</code> key is the <code>JPEGQuality</code>, which indicates the JPEG quality key to be used to generate the image. The <code>FormatConfig</code> value accepts ints from 1 to 100. If the value is 1, the image will be generated with less quality and the best compression. If the value is 100, the image will be generated with the best quality and less compression. If no value is provided, the default value of the <code>JPEGQuality</code> key will be set to 80. */
		FormatConfig?: {[id: string]: string };

		/**
		 * The width of the output image that is used in conjunction with the <code>HeightPixels</code> parameter. When both <code>WidthPixels</code> and <code>HeightPixels</code> parameters are provided, the image will be stretched to fit the specified aspect ratio. If only the <code>WidthPixels</code> parameter is provided or if only the <code>HeightPixels</code> is provided, a <code>ValidationException</code> will be thrown. If neither parameter is provided, the original image size from the stream will be returned.
		 * Minimum: 1
		 * Maximum: 3840
		 */
		WidthPixels?: number | null;

		/**
		 * The height of the output image that is used in conjunction with the <code>WidthPixels</code> parameter. When both <code>HeightPixels</code> and <code>WidthPixels</code> parameters are provided, the image will be stretched to fit the specified aspect ratio. If only the <code>HeightPixels</code> parameter is provided, its original aspect ratio will be used to calculate the <code>WidthPixels</code> ratio. If neither parameter is provided, the original image size will be returned.
		 * Minimum: 1
		 * Maximum: 2160
		 */
		HeightPixels?: number | null;

		/**
		 * <p>The maximum number of images to be returned by the API. </p> <note> <p>The default limit is 25 images per API response. Providing a <code>MaxResults</code> greater than this value will result in a page size of 25. Any additional results will be paginated. </p> </note>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * A token that specifies where to start paginating the next set of Images. This is the <code>GetImages:NextToken</code> from a previously truncated response.
		 * Max length: 4096
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface GetImagesPostBodyFormProperties {

		/**
		 * The name of the stream from which to retrieve the images. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the stream from which to retrieve the images. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN: FormControl<string | null | undefined>,

		/**
		 * The origin of the Server or Producer timestamps to use to generate the images.
		 * Required
		 */
		ImageSelectorType: FormControl<ClipFragmentSelectorType | null | undefined>,

		/**
		 * The starting point from which the images should be generated. This <code>StartTimestamp</code> must be within an inclusive range of timestamps for an image to be returned.
		 * Required
		 */
		StartTimestamp: FormControl<Date | null | undefined>,

		/**
		 * The end timestamp for the range of images to be generated. If the time range between <code>StartTimestamp</code> and <code>EndTimestamp</code> is more than 300 seconds above <code>StartTimestamp</code>, you will receive an <code>IllegalArgumentException</code>.
		 * Required
		 */
		EndTimestamp: FormControl<Date | null | undefined>,

		/** <p>The time interval in milliseconds (ms) at which the images need to be generated from the stream, with a default of 3000 ms. The minimum value that can be provided is 200 ms. If the timestamp range is less than the sampling interval, the Image from the <code>startTimestamp</code> will be returned if available. </p> <note> <p>The minimum value of 200 ms is a hard limit.</p> </note> */
		SamplingInterval: FormControl<number | null | undefined>,

		/**
		 * The format that will be used to encode the image.
		 * Required
		 */
		Format: FormControl<Format | null | undefined>,

		/** The list of a key-value pair structure that contains extra parameters that can be applied when the image is generated. The <code>FormatConfig</code> key is the <code>JPEGQuality</code>, which indicates the JPEG quality key to be used to generate the image. The <code>FormatConfig</code> value accepts ints from 1 to 100. If the value is 1, the image will be generated with less quality and the best compression. If the value is 100, the image will be generated with the best quality and less compression. If no value is provided, the default value of the <code>JPEGQuality</code> key will be set to 80. */
		FormatConfig: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The width of the output image that is used in conjunction with the <code>HeightPixels</code> parameter. When both <code>WidthPixels</code> and <code>HeightPixels</code> parameters are provided, the image will be stretched to fit the specified aspect ratio. If only the <code>WidthPixels</code> parameter is provided or if only the <code>HeightPixels</code> is provided, a <code>ValidationException</code> will be thrown. If neither parameter is provided, the original image size from the stream will be returned.
		 * Minimum: 1
		 * Maximum: 3840
		 */
		WidthPixels: FormControl<number | null | undefined>,

		/**
		 * The height of the output image that is used in conjunction with the <code>WidthPixels</code> parameter. When both <code>HeightPixels</code> and <code>WidthPixels</code> parameters are provided, the image will be stretched to fit the specified aspect ratio. If only the <code>HeightPixels</code> parameter is provided, its original aspect ratio will be used to calculate the <code>WidthPixels</code> ratio. If neither parameter is provided, the original image size will be returned.
		 * Minimum: 1
		 * Maximum: 2160
		 */
		HeightPixels: FormControl<number | null | undefined>,

		/**
		 * <p>The maximum number of images to be returned by the API. </p> <note> <p>The default limit is 25 images per API response. Providing a <code>MaxResults</code> greater than this value will result in a page size of 25. Any additional results will be paginated. </p> </note>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * A token that specifies where to start paginating the next set of Images. This is the <code>GetImages:NextToken</code> from a previously truncated response.
		 * Max length: 4096
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetImagesPostBodyFormGroup() {
		return new FormGroup<GetImagesPostBodyFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			ImageSelectorType: new FormControl<ClipFragmentSelectorType | null | undefined>(undefined, [Validators.required]),
			StartTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			SamplingInterval: new FormControl<number | null | undefined>(undefined),
			Format: new FormControl<Format | null | undefined>(undefined, [Validators.required]),
			FormatConfig: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			WidthPixels: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(3840)]),
			HeightPixels: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(2160)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096), Validators.pattern('[a-zA-Z0-9+/]+={0,2}')]),
		});

	}

	export interface GetMediaForFragmentListPostBody {

		/**
		 * The name of the stream from which to retrieve fragment media. Specify either this parameter or the <code>StreamARN</code> parameter.
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the stream from which to retrieve fragment media. Specify either this parameter or the <code>StreamName</code> parameter.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN?: string | null;

		/**
		 * A list of the numbers of fragments for which to retrieve media. You retrieve these values with <a>ListFragments</a>.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1000
		 */
		Fragments: Array<string>;
	}
	export interface GetMediaForFragmentListPostBodyFormProperties {

		/**
		 * The name of the stream from which to retrieve fragment media. Specify either this parameter or the <code>StreamARN</code> parameter.
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the stream from which to retrieve fragment media. Specify either this parameter or the <code>StreamName</code> parameter.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateGetMediaForFragmentListPostBodyFormGroup() {
		return new FormGroup<GetMediaForFragmentListPostBodyFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
		});

	}

	export interface ListFragmentsPostBody {

		/**
		 * The name of the stream from which to retrieve a fragment list. Specify either this parameter or the <code>StreamARN</code> parameter.
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the stream from which to retrieve a fragment list. Specify either this parameter or the <code>StreamName</code> parameter.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN?: string | null;

		/**
		 * The total number of fragments to return. If the total number of fragments available is more than the value specified in <code>max-results</code>, then a <a>ListFragmentsOutput$NextToken</a> is provided in the output that you can use to resume pagination.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;

		/**
		 * A token to specify where to start paginating. This is the <a>ListFragmentsOutput$NextToken</a> from a previously truncated response.
		 * Max length: 4096
		 * Min length: 1
		 */
		NextToken?: string | null;

		/** <p>Describes the timestamp range and timestamp origin of a range of fragments.</p> <p>Only fragments with a start timestamp greater than or equal to the given start time and less than or equal to the end time are returned. For example, if a stream contains fragments with the following start timestamps: </p> <ul> <li> <p>00:00:00</p> </li> <li> <p>00:00:02</p> </li> <li> <p>00:00:04</p> </li> <li> <p>00:00:06</p> </li> </ul> <p> A fragment selector range with a start time of 00:00:01 and end time of 00:00:04 would return the fragments with start times of 00:00:02 and 00:00:04. </p> */
		FragmentSelector?: ListFragmentsPostBodyFragmentSelector;
	}
	export interface ListFragmentsPostBodyFormProperties {

		/**
		 * The name of the stream from which to retrieve a fragment list. Specify either this parameter or the <code>StreamARN</code> parameter.
		 * Max length: 256
		 * Min length: 1
		 */
		StreamName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the stream from which to retrieve a fragment list. Specify either this parameter or the <code>StreamName</code> parameter.
		 * Max length: 1024
		 * Min length: 1
		 */
		StreamARN: FormControl<string | null | undefined>,

		/**
		 * The total number of fragments to return. If the total number of fragments available is more than the value specified in <code>max-results</code>, then a <a>ListFragmentsOutput$NextToken</a> is provided in the output that you can use to resume pagination.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * A token to specify where to start paginating. This is the <a>ListFragmentsOutput$NextToken</a> from a previously truncated response.
		 * Max length: 4096
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFragmentsPostBodyFormGroup() {
		return new FormGroup<ListFragmentsPostBodyFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096), Validators.pattern('[a-zA-Z0-9+/]+={0,2}')]),
		});

	}

	export interface ListFragmentsPostBodyFragmentSelector {
		FragmentSelectorType?: ClipFragmentSelectorType;
		TimestampRange?: TimestampRange;
	}
	export interface ListFragmentsPostBodyFragmentSelectorFormProperties {
		FragmentSelectorType: FormControl<ClipFragmentSelectorType | null | undefined>,
	}
	export function CreateListFragmentsPostBodyFragmentSelectorFormGroup() {
		return new FormGroup<ListFragmentsPostBodyFragmentSelectorFormProperties>({
			FragmentSelectorType: new FormControl<ClipFragmentSelectorType | null | undefined>(undefined),
		});

	}

}

