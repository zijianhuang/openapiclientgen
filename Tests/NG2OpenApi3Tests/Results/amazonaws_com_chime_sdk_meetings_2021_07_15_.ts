import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchCreateAttendeeResponse {
		Attendees?: Array<Attendee>;
		Errors?: Array<CreateAttendeeError>;
	}
	export interface BatchCreateAttendeeResponseFormProperties {
	}
	export function CreateBatchCreateAttendeeResponseFormGroup() {
		return new FormGroup<BatchCreateAttendeeResponseFormProperties>({
		});

	}


	/** <p>An Amazon Chime SDK meeting attendee. Includes a unique <code>AttendeeId</code> and <code>JoinToken</code>. The <code>JoinToken</code> allows a client to authenticate and join as the specified attendee. The <code>JoinToken</code> expires when the meeting ends, or when <a>DeleteAttendee</a> is called. After that, the attendee is unable to join the meeting. </p> <p>We recommend securely transferring each <code>JoinToken</code> from your server application to the client so that no other client has access to the token except for the one authorized to represent the attendee.</p> */
	export interface Attendee {
		ExternalUserId?: string;
		AttendeeId?: string;
		JoinToken?: string;
		Capabilities?: AttendeeCapabilities;
	}

	/** <p>An Amazon Chime SDK meeting attendee. Includes a unique <code>AttendeeId</code> and <code>JoinToken</code>. The <code>JoinToken</code> allows a client to authenticate and join as the specified attendee. The <code>JoinToken</code> expires when the meeting ends, or when <a>DeleteAttendee</a> is called. After that, the attendee is unable to join the meeting. </p> <p>We recommend securely transferring each <code>JoinToken</code> from your server application to the client so that no other client has access to the token except for the one authorized to represent the attendee.</p> */
	export interface AttendeeFormProperties {
		ExternalUserId: FormControl<string | null | undefined>,
		AttendeeId: FormControl<string | null | undefined>,
		JoinToken: FormControl<string | null | undefined>,
	}
	export function CreateAttendeeFormGroup() {
		return new FormGroup<AttendeeFormProperties>({
			ExternalUserId: new FormControl<string | null | undefined>(undefined),
			AttendeeId: new FormControl<string | null | undefined>(undefined),
			JoinToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The media capabilities of an attendee: audio, video, or content. </p> <note> <p>You use the capabilities with a set of values that control what the capabilities can do, such as <code>SendReceive</code> data. For more information about those values, see .</p> </note> <p>When using capabilities, be aware of these corner cases:</p> <ul> <li> <p>You can't set <code>content</code> capabilities to <code>SendReceive</code> or <code>Receive</code> unless you also set <code>video</code> capabilities to <code>SendReceive</code> or <code>Receive</code>. If you don't set the <code>video</code> capability to receive, the response will contain an HTTP 400 Bad Request status code. However, you can set your <code>video</code> capability to receive and you set your <code>content</code> capability to not receive.</p> </li> <li> <p>When you change an <code>audio</code> capability from <code>None</code> or <code>Receive</code> to <code>Send</code> or <code>SendReceive</code> , and if the attendee left their microphone unmuted, audio will flow from the attendee to the other meeting participants.</p> </li> <li> <p>When you change a <code>video</code> or <code>content</code> capability from <code>None</code> or <code>Receive</code> to <code>Send</code> or <code>SendReceive</code> , and if the attendee turned on their video or content streams, remote attendees can receive those streams, but only after media renegotiation between the client and the Amazon Chime back-end server.</p> </li> </ul> */
	export interface AttendeeCapabilities {

		/** Required */
		Audio: MediaCapabilities;

		/** Required */
		Video: MediaCapabilities;

		/** Required */
		Content: MediaCapabilities;
	}

	/** <p>The media capabilities of an attendee: audio, video, or content. </p> <note> <p>You use the capabilities with a set of values that control what the capabilities can do, such as <code>SendReceive</code> data. For more information about those values, see .</p> </note> <p>When using capabilities, be aware of these corner cases:</p> <ul> <li> <p>You can't set <code>content</code> capabilities to <code>SendReceive</code> or <code>Receive</code> unless you also set <code>video</code> capabilities to <code>SendReceive</code> or <code>Receive</code>. If you don't set the <code>video</code> capability to receive, the response will contain an HTTP 400 Bad Request status code. However, you can set your <code>video</code> capability to receive and you set your <code>content</code> capability to not receive.</p> </li> <li> <p>When you change an <code>audio</code> capability from <code>None</code> or <code>Receive</code> to <code>Send</code> or <code>SendReceive</code> , and if the attendee left their microphone unmuted, audio will flow from the attendee to the other meeting participants.</p> </li> <li> <p>When you change a <code>video</code> or <code>content</code> capability from <code>None</code> or <code>Receive</code> to <code>Send</code> or <code>SendReceive</code> , and if the attendee turned on their video or content streams, remote attendees can receive those streams, but only after media renegotiation between the client and the Amazon Chime back-end server.</p> </li> </ul> */
	export interface AttendeeCapabilitiesFormProperties {

		/** Required */
		Audio: FormControl<MediaCapabilities | null | undefined>,

		/** Required */
		Video: FormControl<MediaCapabilities | null | undefined>,

		/** Required */
		Content: FormControl<MediaCapabilities | null | undefined>,
	}
	export function CreateAttendeeCapabilitiesFormGroup() {
		return new FormGroup<AttendeeCapabilitiesFormProperties>({
			Audio: new FormControl<MediaCapabilities | null | undefined>(undefined, [Validators.required]),
			Video: new FormControl<MediaCapabilities | null | undefined>(undefined, [Validators.required]),
			Content: new FormControl<MediaCapabilities | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MediaCapabilities { SendReceive = 'SendReceive', Send = 'Send', Receive = 'Receive', None = 'None' }


	/** The list of errors returned when errors are encountered during the BatchCreateAttendee and CreateAttendee actions. This includes external user IDs, error codes, and error messages. */
	export interface CreateAttendeeError {
		ExternalUserId?: string;
		ErrorCode?: string;
		ErrorMessage?: string;
	}

	/** The list of errors returned when errors are encountered during the BatchCreateAttendee and CreateAttendee actions. This includes external user IDs, error codes, and error messages. */
	export interface CreateAttendeeErrorFormProperties {
		ExternalUserId: FormControl<string | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateCreateAttendeeErrorFormGroup() {
		return new FormGroup<CreateAttendeeErrorFormProperties>({
			ExternalUserId: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Amazon Chime SDK attendee fields to create, used with the BatchCreateAttendee action. */
	export interface CreateAttendeeRequestItem {

		/** Required */
		ExternalUserId: string;
		Capabilities?: AttendeeCapabilities;
	}

	/** The Amazon Chime SDK attendee fields to create, used with the BatchCreateAttendee action. */
	export interface CreateAttendeeRequestItemFormProperties {

		/** Required */
		ExternalUserId: FormControl<string | null | undefined>,
	}
	export function CreateCreateAttendeeRequestItemFormGroup() {
		return new FormGroup<CreateAttendeeRequestItemFormProperties>({
			ExternalUserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface UnauthorizedException {
	}
	export interface UnauthorizedExceptionFormProperties {
	}
	export function CreateUnauthorizedExceptionFormGroup() {
		return new FormGroup<UnauthorizedExceptionFormProperties>({
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

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
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

	export interface ServiceFailureException {
	}
	export interface ServiceFailureExceptionFormProperties {
	}
	export function CreateServiceFailureExceptionFormGroup() {
		return new FormGroup<ServiceFailureExceptionFormProperties>({
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


	/** A structure that contains one or more attendee IDs. */
	export interface AttendeeIdItem {

		/** Required */
		AttendeeId: string;
	}

	/** A structure that contains one or more attendee IDs. */
	export interface AttendeeIdItemFormProperties {

		/** Required */
		AttendeeId: FormControl<string | null | undefined>,
	}
	export function CreateAttendeeIdItemFormGroup() {
		return new FormGroup<AttendeeIdItemFormProperties>({
			AttendeeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface CreateAttendeeResponse {
		Attendee?: Attendee;
	}
	export interface CreateAttendeeResponseFormProperties {
	}
	export function CreateCreateAttendeeResponseFormGroup() {
		return new FormGroup<CreateAttendeeResponseFormProperties>({
		});

	}

	export interface CreateMeetingResponse {
		Meeting?: Meeting;
	}
	export interface CreateMeetingResponseFormProperties {
	}
	export function CreateCreateMeetingResponseFormGroup() {
		return new FormGroup<CreateMeetingResponseFormProperties>({
		});

	}


	/** A meeting created using the Amazon Chime SDK. */
	export interface Meeting {
		MeetingId?: string;
		MeetingHostId?: string;
		ExternalMeetingId?: string;
		MediaRegion?: string;
		MediaPlacement?: MediaPlacement;
		MeetingFeatures?: MeetingFeaturesConfiguration;
		PrimaryMeetingId?: string;
		TenantIds?: Array<string>;
		MeetingArn?: string;
	}

	/** A meeting created using the Amazon Chime SDK. */
	export interface MeetingFormProperties {
		MeetingId: FormControl<string | null | undefined>,
		MeetingHostId: FormControl<string | null | undefined>,
		ExternalMeetingId: FormControl<string | null | undefined>,
		MediaRegion: FormControl<string | null | undefined>,
		PrimaryMeetingId: FormControl<string | null | undefined>,
		MeetingArn: FormControl<string | null | undefined>,
	}
	export function CreateMeetingFormGroup() {
		return new FormGroup<MeetingFormProperties>({
			MeetingId: new FormControl<string | null | undefined>(undefined),
			MeetingHostId: new FormControl<string | null | undefined>(undefined),
			ExternalMeetingId: new FormControl<string | null | undefined>(undefined),
			MediaRegion: new FormControl<string | null | undefined>(undefined),
			PrimaryMeetingId: new FormControl<string | null | undefined>(undefined),
			MeetingArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of endpoints used by clients to connect to the media service group for an Amazon Chime SDK meeting. */
	export interface MediaPlacement {
		AudioHostUrl?: string;
		AudioFallbackUrl?: string;
		SignalingUrl?: string;
		TurnControlUrl?: string;
		ScreenDataUrl?: string;
		ScreenViewingUrl?: string;
		ScreenSharingUrl?: string;
		EventIngestionUrl?: string;
	}

	/** A set of endpoints used by clients to connect to the media service group for an Amazon Chime SDK meeting. */
	export interface MediaPlacementFormProperties {
		AudioHostUrl: FormControl<string | null | undefined>,
		AudioFallbackUrl: FormControl<string | null | undefined>,
		SignalingUrl: FormControl<string | null | undefined>,
		TurnControlUrl: FormControl<string | null | undefined>,
		ScreenDataUrl: FormControl<string | null | undefined>,
		ScreenViewingUrl: FormControl<string | null | undefined>,
		ScreenSharingUrl: FormControl<string | null | undefined>,
		EventIngestionUrl: FormControl<string | null | undefined>,
	}
	export function CreateMediaPlacementFormGroup() {
		return new FormGroup<MediaPlacementFormProperties>({
			AudioHostUrl: new FormControl<string | null | undefined>(undefined),
			AudioFallbackUrl: new FormControl<string | null | undefined>(undefined),
			SignalingUrl: new FormControl<string | null | undefined>(undefined),
			TurnControlUrl: new FormControl<string | null | undefined>(undefined),
			ScreenDataUrl: new FormControl<string | null | undefined>(undefined),
			ScreenViewingUrl: new FormControl<string | null | undefined>(undefined),
			ScreenSharingUrl: new FormControl<string | null | undefined>(undefined),
			EventIngestionUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration settings of the features available to a meeting. */
	export interface MeetingFeaturesConfiguration {
		Audio?: AudioFeatures;
	}

	/** The configuration settings of the features available to a meeting. */
	export interface MeetingFeaturesConfigurationFormProperties {
	}
	export function CreateMeetingFeaturesConfigurationFormGroup() {
		return new FormGroup<MeetingFeaturesConfigurationFormProperties>({
		});

	}


	/** An optional category of meeting features that contains audio-specific configurations, such as operating parameters for Amazon Voice Focus.  */
	export interface AudioFeatures {
		EchoReduction?: MeetingFeatureStatus;
	}

	/** An optional category of meeting features that contains audio-specific configurations, such as operating parameters for Amazon Voice Focus.  */
	export interface AudioFeaturesFormProperties {
		EchoReduction: FormControl<MeetingFeatureStatus | null | undefined>,
	}
	export function CreateAudioFeaturesFormGroup() {
		return new FormGroup<AudioFeaturesFormProperties>({
			EchoReduction: new FormControl<MeetingFeatureStatus | null | undefined>(undefined),
		});

	}

	export enum MeetingFeatureStatus { AVAILABLE = 'AVAILABLE', UNAVAILABLE = 'UNAVAILABLE' }


	/** A key-value pair that you define. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** A key-value pair that you define. */
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

	export interface CreateMeetingWithAttendeesResponse {
		Meeting?: Meeting;
		Attendees?: Array<Attendee>;
		Errors?: Array<CreateAttendeeError>;
	}
	export interface CreateMeetingWithAttendeesResponseFormProperties {
	}
	export function CreateCreateMeetingWithAttendeesResponseFormGroup() {
		return new FormGroup<CreateMeetingWithAttendeesResponseFormProperties>({
		});

	}

	export interface GetAttendeeResponse {
		Attendee?: Attendee;
	}
	export interface GetAttendeeResponseFormProperties {
	}
	export function CreateGetAttendeeResponseFormGroup() {
		return new FormGroup<GetAttendeeResponseFormProperties>({
		});

	}

	export interface GetMeetingResponse {
		Meeting?: Meeting;
	}
	export interface GetMeetingResponseFormProperties {
	}
	export function CreateGetMeetingResponseFormGroup() {
		return new FormGroup<GetMeetingResponseFormProperties>({
		});

	}

	export interface ListAttendeesResponse {
		Attendees?: Array<Attendee>;
		NextToken?: string;
	}
	export interface ListAttendeesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAttendeesResponseFormGroup() {
		return new FormGroup<ListAttendeesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
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


	/** <p>Settings specific for Amazon Transcribe as the live transcription engine. </p> <p>If you specify an invalid combination of parameters, a <code>TranscriptFailed</code> event will be sent with the contents of the <code>BadRequestException</code> generated by Amazon Transcribe. For more information on each parameter and which combinations are valid, refer to the <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/API_streaming_StartStreamTranscription.html">StartStreamTranscription</a> API in the <i>Amazon Transcribe Developer Guide</i>.</p> */
	export interface EngineTranscribeSettings {
		LanguageCode?: TranscribeLanguageCode;
		VocabularyFilterMethod?: TranscribeVocabularyFilterMethod;
		VocabularyFilterName?: string;
		VocabularyName?: string;
		Region?: TranscribeRegion;
		EnablePartialResultsStabilization?: boolean | null;
		PartialResultsStability?: TranscribePartialResultsStability;
		ContentIdentificationType?: TranscribeContentIdentificationType;
		ContentRedactionType?: TranscribeContentIdentificationType;
		PiiEntityTypes?: string;
		LanguageModelName?: string;
		IdentifyLanguage?: boolean | null;
		LanguageOptions?: string;
		PreferredLanguage?: TranscribeLanguageCode;
		VocabularyNames?: string;
		VocabularyFilterNames?: string;
	}

	/** <p>Settings specific for Amazon Transcribe as the live transcription engine. </p> <p>If you specify an invalid combination of parameters, a <code>TranscriptFailed</code> event will be sent with the contents of the <code>BadRequestException</code> generated by Amazon Transcribe. For more information on each parameter and which combinations are valid, refer to the <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/API_streaming_StartStreamTranscription.html">StartStreamTranscription</a> API in the <i>Amazon Transcribe Developer Guide</i>.</p> */
	export interface EngineTranscribeSettingsFormProperties {
		LanguageCode: FormControl<TranscribeLanguageCode | null | undefined>,
		VocabularyFilterMethod: FormControl<TranscribeVocabularyFilterMethod | null | undefined>,
		VocabularyFilterName: FormControl<string | null | undefined>,
		VocabularyName: FormControl<string | null | undefined>,
		Region: FormControl<TranscribeRegion | null | undefined>,
		EnablePartialResultsStabilization: FormControl<boolean | null | undefined>,
		PartialResultsStability: FormControl<TranscribePartialResultsStability | null | undefined>,
		ContentIdentificationType: FormControl<TranscribeContentIdentificationType | null | undefined>,
		ContentRedactionType: FormControl<TranscribeContentIdentificationType | null | undefined>,
		PiiEntityTypes: FormControl<string | null | undefined>,
		LanguageModelName: FormControl<string | null | undefined>,
		IdentifyLanguage: FormControl<boolean | null | undefined>,
		LanguageOptions: FormControl<string | null | undefined>,
		PreferredLanguage: FormControl<TranscribeLanguageCode | null | undefined>,
		VocabularyNames: FormControl<string | null | undefined>,
		VocabularyFilterNames: FormControl<string | null | undefined>,
	}
	export function CreateEngineTranscribeSettingsFormGroup() {
		return new FormGroup<EngineTranscribeSettingsFormProperties>({
			LanguageCode: new FormControl<TranscribeLanguageCode | null | undefined>(undefined),
			VocabularyFilterMethod: new FormControl<TranscribeVocabularyFilterMethod | null | undefined>(undefined),
			VocabularyFilterName: new FormControl<string | null | undefined>(undefined),
			VocabularyName: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<TranscribeRegion | null | undefined>(undefined),
			EnablePartialResultsStabilization: new FormControl<boolean | null | undefined>(undefined),
			PartialResultsStability: new FormControl<TranscribePartialResultsStability | null | undefined>(undefined),
			ContentIdentificationType: new FormControl<TranscribeContentIdentificationType | null | undefined>(undefined),
			ContentRedactionType: new FormControl<TranscribeContentIdentificationType | null | undefined>(undefined),
			PiiEntityTypes: new FormControl<string | null | undefined>(undefined),
			LanguageModelName: new FormControl<string | null | undefined>(undefined),
			IdentifyLanguage: new FormControl<boolean | null | undefined>(undefined),
			LanguageOptions: new FormControl<string | null | undefined>(undefined),
			PreferredLanguage: new FormControl<TranscribeLanguageCode | null | undefined>(undefined),
			VocabularyNames: new FormControl<string | null | undefined>(undefined),
			VocabularyFilterNames: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TranscribeLanguageCode { 'en-US' = 'en-US', 'en-GB' = 'en-GB', 'es-US' = 'es-US', 'fr-CA' = 'fr-CA', 'fr-FR' = 'fr-FR', 'en-AU' = 'en-AU', 'it-IT' = 'it-IT', 'de-DE' = 'de-DE', 'pt-BR' = 'pt-BR', 'ja-JP' = 'ja-JP', 'ko-KR' = 'ko-KR', 'zh-CN' = 'zh-CN', 'th-TH' = 'th-TH', 'hi-IN' = 'hi-IN' }

	export enum TranscribeVocabularyFilterMethod { remove = 'remove', mask = 'mask', tag = 'tag' }

	export enum TranscribeRegion { 'us-east-2' = 'us-east-2', 'us-east-1' = 'us-east-1', 'us-west-2' = 'us-west-2', 'ap-northeast-2' = 'ap-northeast-2', 'ap-southeast-2' = 'ap-southeast-2', 'ap-northeast-1' = 'ap-northeast-1', 'ca-central-1' = 'ca-central-1', 'eu-central-1' = 'eu-central-1', 'eu-west-1' = 'eu-west-1', 'eu-west-2' = 'eu-west-2', 'sa-east-1' = 'sa-east-1', auto = 'auto', 'us-gov-west-1' = 'us-gov-west-1' }

	export enum TranscribePartialResultsStability { low = 'low', medium = 'medium', high = 'high' }

	export enum TranscribeContentIdentificationType { PII = 'PII' }


	/** Settings specific to the Amazon Transcribe Medical engine. */
	export interface EngineTranscribeMedicalSettings {

		/** Required */
		LanguageCode: TranscribeMedicalLanguageCode;

		/** Required */
		Specialty: TranscribeMedicalSpecialty;

		/** Required */
		Type: TranscribeMedicalType;
		VocabularyName?: string;
		Region?: TranscribeMedicalRegion;
		ContentIdentificationType?: TranscribeMedicalContentIdentificationType;
	}

	/** Settings specific to the Amazon Transcribe Medical engine. */
	export interface EngineTranscribeMedicalSettingsFormProperties {

		/** Required */
		LanguageCode: FormControl<TranscribeMedicalLanguageCode | null | undefined>,

		/** Required */
		Specialty: FormControl<TranscribeMedicalSpecialty | null | undefined>,

		/** Required */
		Type: FormControl<TranscribeMedicalType | null | undefined>,
		VocabularyName: FormControl<string | null | undefined>,
		Region: FormControl<TranscribeMedicalRegion | null | undefined>,
		ContentIdentificationType: FormControl<TranscribeMedicalContentIdentificationType | null | undefined>,
	}
	export function CreateEngineTranscribeMedicalSettingsFormGroup() {
		return new FormGroup<EngineTranscribeMedicalSettingsFormProperties>({
			LanguageCode: new FormControl<TranscribeMedicalLanguageCode | null | undefined>(undefined, [Validators.required]),
			Specialty: new FormControl<TranscribeMedicalSpecialty | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<TranscribeMedicalType | null | undefined>(undefined, [Validators.required]),
			VocabularyName: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<TranscribeMedicalRegion | null | undefined>(undefined),
			ContentIdentificationType: new FormControl<TranscribeMedicalContentIdentificationType | null | undefined>(undefined),
		});

	}

	export enum TranscribeMedicalLanguageCode { 'en-US' = 'en-US' }

	export enum TranscribeMedicalSpecialty { PRIMARYCARE = 'PRIMARYCARE', CARDIOLOGY = 'CARDIOLOGY', NEUROLOGY = 'NEUROLOGY', ONCOLOGY = 'ONCOLOGY', RADIOLOGY = 'RADIOLOGY', UROLOGY = 'UROLOGY' }

	export enum TranscribeMedicalType { CONVERSATION = 'CONVERSATION', DICTATION = 'DICTATION' }

	export enum TranscribeMedicalRegion { 'us-east-1' = 'us-east-1', 'us-east-2' = 'us-east-2', 'us-west-2' = 'us-west-2', 'ap-southeast-2' = 'ap-southeast-2', 'ca-central-1' = 'ca-central-1', 'eu-west-1' = 'eu-west-1', auto = 'auto' }

	export enum TranscribeMedicalContentIdentificationType { PHI = 'PHI' }

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface TooManyTagsException {
	}
	export interface TooManyTagsExceptionFormProperties {
	}
	export function CreateTooManyTagsExceptionFormGroup() {
		return new FormGroup<TooManyTagsExceptionFormProperties>({
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UpdateAttendeeCapabilitiesResponse {
		Attendee?: Attendee;
	}
	export interface UpdateAttendeeCapabilitiesResponseFormProperties {
	}
	export function CreateUpdateAttendeeCapabilitiesResponseFormGroup() {
		return new FormGroup<UpdateAttendeeCapabilitiesResponseFormProperties>({
		});

	}

	export interface BatchCreateAttendeeRequest {

		/** Required */
		Attendees: Array<CreateAttendeeRequestItem>;
	}
	export interface BatchCreateAttendeeRequestFormProperties {
	}
	export function CreateBatchCreateAttendeeRequestFormGroup() {
		return new FormGroup<BatchCreateAttendeeRequestFormProperties>({
		});

	}

	export interface BatchUpdateAttendeeCapabilitiesExceptRequest {

		/** Required */
		ExcludedAttendeeIds: Array<AttendeeIdItem>;

		/** Required */
		Capabilities: AttendeeCapabilities;
	}
	export interface BatchUpdateAttendeeCapabilitiesExceptRequestFormProperties {
	}
	export function CreateBatchUpdateAttendeeCapabilitiesExceptRequestFormGroup() {
		return new FormGroup<BatchUpdateAttendeeCapabilitiesExceptRequestFormProperties>({
		});

	}

	export interface CreateAttendeeRequest {

		/** Required */
		ExternalUserId: string;
		Capabilities?: AttendeeCapabilities;
	}
	export interface CreateAttendeeRequestFormProperties {

		/** Required */
		ExternalUserId: FormControl<string | null | undefined>,
	}
	export function CreateCreateAttendeeRequestFormGroup() {
		return new FormGroup<CreateAttendeeRequestFormProperties>({
			ExternalUserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration for resource targets to receive notifications when meeting and attendee events occur. */
	export interface NotificationsConfiguration {
		LambdaFunctionArn?: string;
		SnsTopicArn?: string;
		SqsQueueArn?: string;
	}

	/** The configuration for resource targets to receive notifications when meeting and attendee events occur. */
	export interface NotificationsConfigurationFormProperties {
		LambdaFunctionArn: FormControl<string | null | undefined>,
		SnsTopicArn: FormControl<string | null | undefined>,
		SqsQueueArn: FormControl<string | null | undefined>,
	}
	export function CreateNotificationsConfigurationFormGroup() {
		return new FormGroup<NotificationsConfigurationFormProperties>({
			LambdaFunctionArn: new FormControl<string | null | undefined>(undefined),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined),
			SqsQueueArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMeetingRequest {

		/** Required */
		ClientRequestToken: string;

		/** Required */
		MediaRegion: string;
		MeetingHostId?: string;

		/** Required */
		ExternalMeetingId: string;
		NotificationsConfiguration?: NotificationsConfiguration;
		MeetingFeatures?: MeetingFeaturesConfiguration;
		PrimaryMeetingId?: string;
		TenantIds?: Array<string>;
		Tags?: Array<Tag>;
	}
	export interface CreateMeetingRequestFormProperties {

		/** Required */
		ClientRequestToken: FormControl<string | null | undefined>,

		/** Required */
		MediaRegion: FormControl<string | null | undefined>,
		MeetingHostId: FormControl<string | null | undefined>,

		/** Required */
		ExternalMeetingId: FormControl<string | null | undefined>,
		PrimaryMeetingId: FormControl<string | null | undefined>,
	}
	export function CreateCreateMeetingRequestFormGroup() {
		return new FormGroup<CreateMeetingRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MediaRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MeetingHostId: new FormControl<string | null | undefined>(undefined),
			ExternalMeetingId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PrimaryMeetingId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMeetingWithAttendeesRequest {

		/** Required */
		ClientRequestToken: string;

		/** Required */
		MediaRegion: string;
		MeetingHostId?: string;

		/** Required */
		ExternalMeetingId: string;
		MeetingFeatures?: MeetingFeaturesConfiguration;
		NotificationsConfiguration?: NotificationsConfiguration;

		/** Required */
		Attendees: Array<CreateAttendeeRequestItem>;
		PrimaryMeetingId?: string;
		TenantIds?: Array<string>;
		Tags?: Array<Tag>;
	}
	export interface CreateMeetingWithAttendeesRequestFormProperties {

		/** Required */
		ClientRequestToken: FormControl<string | null | undefined>,

		/** Required */
		MediaRegion: FormControl<string | null | undefined>,
		MeetingHostId: FormControl<string | null | undefined>,

		/** Required */
		ExternalMeetingId: FormControl<string | null | undefined>,
		PrimaryMeetingId: FormControl<string | null | undefined>,
	}
	export function CreateCreateMeetingWithAttendeesRequestFormGroup() {
		return new FormGroup<CreateMeetingWithAttendeesRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MediaRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MeetingHostId: new FormControl<string | null | undefined>(undefined),
			ExternalMeetingId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PrimaryMeetingId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteAttendeeRequest {
	}
	export interface DeleteAttendeeRequestFormProperties {
	}
	export function CreateDeleteAttendeeRequestFormGroup() {
		return new FormGroup<DeleteAttendeeRequestFormProperties>({
		});

	}

	export interface DeleteMeetingRequest {
	}
	export interface DeleteMeetingRequestFormProperties {
	}
	export function CreateDeleteMeetingRequestFormGroup() {
		return new FormGroup<DeleteMeetingRequestFormProperties>({
		});

	}

	export enum TranscribeContentRedactionType { PII = 'PII' }

	export interface GetAttendeeRequest {
	}
	export interface GetAttendeeRequestFormProperties {
	}
	export function CreateGetAttendeeRequestFormGroup() {
		return new FormGroup<GetAttendeeRequestFormProperties>({
		});

	}

	export interface GetMeetingRequest {
	}
	export interface GetMeetingRequestFormProperties {
	}
	export function CreateGetMeetingRequestFormGroup() {
		return new FormGroup<GetMeetingRequestFormProperties>({
		});

	}

	export interface ListAttendeesRequest {
	}
	export interface ListAttendeesRequestFormProperties {
	}
	export function CreateListAttendeesRequestFormGroup() {
		return new FormGroup<ListAttendeesRequestFormProperties>({
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


	/** The configuration for the current transcription operation. Must contain <code>EngineTranscribeSettings</code> or <code>EngineTranscribeMedicalSettings</code>. */
	export interface TranscriptionConfiguration {
		EngineTranscribeSettings?: EngineTranscribeSettings;
		EngineTranscribeMedicalSettings?: EngineTranscribeMedicalSettings;
	}

	/** The configuration for the current transcription operation. Must contain <code>EngineTranscribeSettings</code> or <code>EngineTranscribeMedicalSettings</code>. */
	export interface TranscriptionConfigurationFormProperties {
	}
	export function CreateTranscriptionConfigurationFormGroup() {
		return new FormGroup<TranscriptionConfigurationFormProperties>({
		});

	}

	export interface StartMeetingTranscriptionRequest {

		/** Required */
		TranscriptionConfiguration: TranscriptionConfiguration;
	}
	export interface StartMeetingTranscriptionRequestFormProperties {
	}
	export function CreateStartMeetingTranscriptionRequestFormGroup() {
		return new FormGroup<StartMeetingTranscriptionRequestFormProperties>({
		});

	}

	export interface StopMeetingTranscriptionRequest {
	}
	export interface StopMeetingTranscriptionRequestFormProperties {
	}
	export function CreateStopMeetingTranscriptionRequestFormGroup() {
		return new FormGroup<StopMeetingTranscriptionRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		ResourceARN: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		ResourceARN: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAttendeeCapabilitiesRequest {

		/** Required */
		Capabilities: AttendeeCapabilities;
	}
	export interface UpdateAttendeeCapabilitiesRequestFormProperties {
	}
	export function CreateUpdateAttendeeCapabilitiesRequestFormGroup() {
		return new FormGroup<UpdateAttendeeCapabilitiesRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates up to 100 attendees for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.
		 * Post meetings/{MeetingId}/attendees#operation=batch-create
		 * @param {string} MeetingId The Amazon Chime SDK ID of the meeting to which you're adding attendees.
		 * @return {BatchCreateAttendeeResponse} Success
		 */
		BatchCreateAttendee(MeetingId: string, operation: BatchCreateAttendeeOperation, requestBody: BatchCreateAttendeePostBody): Observable<BatchCreateAttendeeResponse> {
			return this.http.post<BatchCreateAttendeeResponse>(this.baseUri + 'meetings/' + (MeetingId == null ? '' : encodeURIComponent(MeetingId)) + '/attendees#operation=batch-create&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates <code>AttendeeCapabilities</code> except the capabilities listed in an <code>ExcludedAttendeeIds</code> table.</p> <note> <p>You use the capabilities with a set of values that control what the capabilities can do, such as <code>SendReceive</code> data. For more information about those values, see .</p> </note> <p>When using capabilities, be aware of these corner cases:</p> <ul> <li> <p>You can't set <code>content</code> capabilities to <code>SendReceive</code> or <code>Receive</code> unless you also set <code>video</code> capabilities to <code>SendReceive</code> or <code>Receive</code>. If you don't set the <code>video</code> capability to receive, the response will contain an HTTP 400 Bad Request status code. However, you can set your <code>video</code> capability to receive and you set your <code>content</code> capability to not receive.</p> </li> <li> <p>When you change an <code>audio</code> capability from <code>None</code> or <code>Receive</code> to <code>Send</code> or <code>SendReceive</code> , and if the attendee left their microphone unmuted, audio will flow from the attendee to the other meeting participants.</p> </li> <li> <p>When you change a <code>video</code> or <code>content</code> capability from <code>None</code> or <code>Receive</code> to <code>Send</code> or <code>SendReceive</code> , and if the attendee turned on their video or content streams, remote attendees can receive those streams, but only after media renegotiation between the client and the Amazon Chime back-end server.</p> </li> </ul>
		 * Put meetings/{MeetingId}/attendees/capabilities#operation=batch-update-except
		 * @param {string} MeetingId The ID of the meeting associated with the update request.
		 * @return {void} Success
		 */
		BatchUpdateAttendeeCapabilitiesExcept(MeetingId: string, operation: BatchUpdateAttendeeCapabilitiesExceptOperation, requestBody: BatchUpdateAttendeeCapabilitiesExceptPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'meetings/' + (MeetingId == null ? '' : encodeURIComponent(MeetingId)) + '/attendees/capabilities#operation=batch-update-except&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new attendee for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.
		 * Post meetings/{MeetingId}/attendees
		 * @param {string} MeetingId The unique ID of the meeting.
		 * @return {CreateAttendeeResponse} Success
		 */
		CreateAttendee(MeetingId: string, requestBody: CreateAttendeePostBody): Observable<CreateAttendeeResponse> {
			return this.http.post<CreateAttendeeResponse>(this.baseUri + 'meetings/' + (MeetingId == null ? '' : encodeURIComponent(MeetingId)) + '/attendees', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the attendees for the specified Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.
		 * Get meetings/{MeetingId}/attendees
		 * @param {string} MeetingId The Amazon Chime SDK meeting ID.
		 * @param {string} next_token The token to use to retrieve the next page of results.
		 * @param {number} max_results The maximum number of results to return in a single call.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAttendeesResponse} Success
		 */
		ListAttendees(MeetingId: string, next_token: string | null | undefined, max_results: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListAttendeesResponse> {
			return this.http.get<ListAttendeesResponse>(this.baseUri + 'meetings/' + (MeetingId == null ? '' : encodeURIComponent(MeetingId)) + '/attendees&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new Amazon Chime SDK meeting in the specified media Region with no initial attendees. For more information about specifying media Regions, see <a href="https://docs.aws.amazon.com/chime/latest/dg/chime-sdk-meetings-regions.html">Amazon Chime SDK Media Regions</a> in the <i>Amazon Chime Developer Guide</i>. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.
		 * Post meetings
		 * @return {CreateMeetingResponse} Success
		 */
		CreateMeeting(requestBody: CreateMeetingPostBody): Observable<CreateMeetingResponse> {
			return this.http.post<CreateMeetingResponse>(this.baseUri + 'meetings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new Amazon Chime SDK meeting in the specified media Region, with attendees. For more information about specifying media Regions, see <a href="https://docs.aws.amazon.com/chime/latest/dg/chime-sdk-meetings-regions.html">Amazon Chime SDK Media Regions</a> in the <i>Amazon Chime Developer Guide</i>. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.
		 * Post meetings#operation=create-attendees
		 * @return {CreateMeetingWithAttendeesResponse} Success
		 */
		CreateMeetingWithAttendees(operation: CreateMeetingWithAttendeesOperation, requestBody: CreateMeetingWithAttendeesPostBody): Observable<CreateMeetingWithAttendeesResponse> {
			return this.http.post<CreateMeetingWithAttendeesResponse>(this.baseUri + 'meetings#operation=create-attendees?operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an attendee from the specified Amazon Chime SDK meeting and deletes their <code>JoinToken</code>. Attendees are automatically deleted when a Amazon Chime SDK meeting is deleted. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.
		 * Delete meetings/{MeetingId}/attendees/{AttendeeId}
		 * @param {string} MeetingId The Amazon Chime SDK meeting ID.
		 * @param {string} AttendeeId The Amazon Chime SDK attendee ID.
		 * @return {void} 
		 */
		DeleteAttendee(MeetingId: string, AttendeeId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'meetings/' + (MeetingId == null ? '' : encodeURIComponent(MeetingId)) + '/attendees/' + (AttendeeId == null ? '' : encodeURIComponent(AttendeeId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the Amazon Chime SDK attendee details for a specified meeting ID and attendee ID. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.
		 * Get meetings/{MeetingId}/attendees/{AttendeeId}
		 * @param {string} MeetingId The Amazon Chime SDK meeting ID.
		 * @param {string} AttendeeId The Amazon Chime SDK attendee ID.
		 * @return {GetAttendeeResponse} Success
		 */
		GetAttendee(MeetingId: string, AttendeeId: string): Observable<GetAttendeeResponse> {
			return this.http.get<GetAttendeeResponse>(this.baseUri + 'meetings/' + (MeetingId == null ? '' : encodeURIComponent(MeetingId)) + '/attendees/' + (AttendeeId == null ? '' : encodeURIComponent(AttendeeId)), {});
		}

		/**
		 * Deletes the specified Amazon Chime SDK meeting. The operation deletes all attendees, disconnects all clients, and prevents new clients from joining the meeting. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.
		 * Delete meetings/{MeetingId}
		 * @param {string} MeetingId The Amazon Chime SDK meeting ID.
		 * @return {void} 
		 */
		DeleteMeeting(MeetingId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'meetings/' + (MeetingId == null ? '' : encodeURIComponent(MeetingId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the Amazon Chime SDK meeting details for the specified meeting ID. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.
		 * Get meetings/{MeetingId}
		 * @param {string} MeetingId The Amazon Chime SDK meeting ID.
		 * @return {GetMeetingResponse} Success
		 */
		GetMeeting(MeetingId: string): Observable<GetMeetingResponse> {
			return this.http.get<GetMeetingResponse>(this.baseUri + 'meetings/' + (MeetingId == null ? '' : encodeURIComponent(MeetingId)), {});
		}

		/**
		 * Returns a list of the tags available for the specified resource.
		 * Get tags#arn
		 * @param {string} arn The ARN of the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(arn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags#arn?arn=' + (arn == null ? '' : encodeURIComponent(arn)), {});
		}

		/**
		 * <p>Starts transcription for the specified <code>meetingId</code>. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meeting-transcription.html"> Using Amazon Chime SDK live transcription </a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> <p>If you specify an invalid configuration, a <code>TranscriptFailed</code> event will be sent with the contents of the <code>BadRequestException</code> generated by Amazon Transcribe. For more information on each parameter and which combinations are valid, refer to the <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/API_streaming_StartStreamTranscription.html">StartStreamTranscription</a> API in the <i>Amazon Transcribe Developer Guide</i>.</p> <important> <p>Amazon Chime SDK live transcription is powered by Amazon Transcribe. Use of Amazon Transcribe is subject to the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a>, including the terms specific to the AWS Machine Learning and Artificial Intelligence Services.</p> </important>
		 * Post meetings/{MeetingId}/transcription#operation=start
		 * @param {string} MeetingId The unique ID of the meeting being transcribed.
		 * @return {void} Success
		 */
		StartMeetingTranscription(MeetingId: string, operation: StartMeetingTranscriptionOperation, requestBody: StartMeetingTranscriptionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'meetings/' + (MeetingId == null ? '' : encodeURIComponent(MeetingId)) + '/transcription#operation=start&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Stops transcription for the specified <code>meetingId</code>. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meeting-transcription.html"> Using Amazon Chime SDK live transcription </a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> <important> <p>Amazon Chime SDK live transcription is powered by Amazon Transcribe. Use of Amazon Transcribe is subject to the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a>, including the terms specific to the AWS Machine Learning and Artificial Intelligence Services.</p> </important>
		 * Post meetings/{MeetingId}/transcription#operation=stop
		 * @param {string} MeetingId The unique ID of the meeting for which you stop transcription.
		 * @return {void} Success
		 */
		StopMeetingTranscription(MeetingId: string, operation: StopMeetingTranscriptionOperation): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'meetings/' + (MeetingId == null ? '' : encodeURIComponent(MeetingId)) + '/transcription#operation=stop&operation=' + operation, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * The resource that supports tags.
		 * Post tags#operation=tag-resource
		 * @return {void} 
		 */
		TagResource(operation: TagResourceOperation, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags#operation=tag-resource?operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes the specified tags from the specified resources. When you specify a tag key, the action removes both that key and its associated value. The operation succeeds even if you attempt to remove tags from a resource that were already removed. Note the following:</p> <ul> <li> <p>To remove tags from a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for removing tags. For more information, see the documentation for the service whose resource you want to untag.</p> </li> <li> <p>You can only tag resources that are located in the specified AWS Region for the calling AWS account.</p> </li> </ul> <p> <b>Minimum permissions</b> </p> <p>In addition to the <code>tag:UntagResources</code> permission required by this operation, you must also have the remove tags permission defined by the service that created the resource. For example, to remove the tags from an Amazon EC2 instance using the <code>UntagResources</code> operation, you must have both of the following permissions:</p> <p> <code>tag:UntagResource</code> </p> <p> <code>ChimeSDKMeetings:DeleteTags</code> </p>
		 * Post tags#operation=untag-resource
		 * @return {void} 
		 */
		UntagResource(operation: UntagResourceOperation, requestBody: UntagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags#operation=untag-resource?operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>The capabilities that you want to update.</p> <note> <p>You use the capabilities with a set of values that control what the capabilities can do, such as <code>SendReceive</code> data. For more information about those values, see .</p> </note> <p>When using capabilities, be aware of these corner cases:</p> <ul> <li> <p>You can't set <code>content</code> capabilities to <code>SendReceive</code> or <code>Receive</code> unless you also set <code>video</code> capabilities to <code>SendReceive</code> or <code>Receive</code>. If you don't set the <code>video</code> capability to receive, the response will contain an HTTP 400 Bad Request status code. However, you can set your <code>video</code> capability to receive and you set your <code>content</code> capability to not receive.</p> </li> <li> <p>When you change an <code>audio</code> capability from <code>None</code> or <code>Receive</code> to <code>Send</code> or <code>SendReceive</code> , and if the attendee left their microphone unmuted, audio will flow from the attendee to the other meeting participants.</p> </li> <li> <p>When you change a <code>video</code> or <code>content</code> capability from <code>None</code> or <code>Receive</code> to <code>Send</code> or <code>SendReceive</code> , and if the attendee turned on their video or content streams, remote attendees can receive those streams, but only after media renegotiation between the client and the Amazon Chime back-end server.</p> </li> </ul>
		 * Put meetings/{MeetingId}/attendees/{AttendeeId}/capabilities
		 * @param {string} MeetingId The ID of the meeting associated with the update request.
		 * @param {string} AttendeeId The ID of the attendee associated with the update request.
		 * @return {UpdateAttendeeCapabilitiesResponse} Success
		 */
		UpdateAttendeeCapabilities(MeetingId: string, AttendeeId: string, requestBody: UpdateAttendeeCapabilitiesPutBody): Observable<UpdateAttendeeCapabilitiesResponse> {
			return this.http.put<UpdateAttendeeCapabilitiesResponse>(this.baseUri + 'meetings/' + (MeetingId == null ? '' : encodeURIComponent(MeetingId)) + '/attendees/' + (AttendeeId == null ? '' : encodeURIComponent(AttendeeId)) + '/capabilities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum BatchCreateAttendeeOperation { 'batch-create' = 'batch-create' }

	export interface BatchCreateAttendeePostBody {

		/**
		 * The attendee information, including attendees' IDs and join tokens.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		Attendees: Array<CreateAttendeeRequestItem>;
	}
	export interface BatchCreateAttendeePostBodyFormProperties {
	}
	export function CreateBatchCreateAttendeePostBodyFormGroup() {
		return new FormGroup<BatchCreateAttendeePostBodyFormProperties>({
		});

	}

	export enum BatchUpdateAttendeeCapabilitiesExceptOperation { 'batch-update-except' = 'batch-update-except' }

	export interface BatchUpdateAttendeeCapabilitiesExceptPutBody {

		/**
		 * The <code>AttendeeIDs</code> that you want to exclude from one or more capabilities.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 250
		 */
		ExcludedAttendeeIds: Array<AttendeeIdItem>;

		/**
		 * <p>The media capabilities of an attendee: audio, video, or content. </p> <note> <p>You use the capabilities with a set of values that control what the capabilities can do, such as <code>SendReceive</code> data. For more information about those values, see .</p> </note> <p>When using capabilities, be aware of these corner cases:</p> <ul> <li> <p>You can't set <code>content</code> capabilities to <code>SendReceive</code> or <code>Receive</code> unless you also set <code>video</code> capabilities to <code>SendReceive</code> or <code>Receive</code>. If you don't set the <code>video</code> capability to receive, the response will contain an HTTP 400 Bad Request status code. However, you can set your <code>video</code> capability to receive and you set your <code>content</code> capability to not receive.</p> </li> <li> <p>When you change an <code>audio</code> capability from <code>None</code> or <code>Receive</code> to <code>Send</code> or <code>SendReceive</code> , and if the attendee left their microphone unmuted, audio will flow from the attendee to the other meeting participants.</p> </li> <li> <p>When you change a <code>video</code> or <code>content</code> capability from <code>None</code> or <code>Receive</code> to <code>Send</code> or <code>SendReceive</code> , and if the attendee turned on their video or content streams, remote attendees can receive those streams, but only after media renegotiation between the client and the Amazon Chime back-end server.</p> </li> </ul>
		 * Required
		 */
		Capabilities: BatchUpdateAttendeeCapabilitiesExceptPutBodyCapabilities;
	}
	export interface BatchUpdateAttendeeCapabilitiesExceptPutBodyFormProperties {
	}
	export function CreateBatchUpdateAttendeeCapabilitiesExceptPutBodyFormGroup() {
		return new FormGroup<BatchUpdateAttendeeCapabilitiesExceptPutBodyFormProperties>({
		});

	}

	export interface BatchUpdateAttendeeCapabilitiesExceptPutBodyCapabilities {
		Audio?: MediaCapabilities;
		Video?: MediaCapabilities;
		Content?: MediaCapabilities;
	}
	export interface BatchUpdateAttendeeCapabilitiesExceptPutBodyCapabilitiesFormProperties {
		Audio: FormControl<MediaCapabilities | null | undefined>,
		Video: FormControl<MediaCapabilities | null | undefined>,
		Content: FormControl<MediaCapabilities | null | undefined>,
	}
	export function CreateBatchUpdateAttendeeCapabilitiesExceptPutBodyCapabilitiesFormGroup() {
		return new FormGroup<BatchUpdateAttendeeCapabilitiesExceptPutBodyCapabilitiesFormProperties>({
			Audio: new FormControl<MediaCapabilities | null | undefined>(undefined),
			Video: new FormControl<MediaCapabilities | null | undefined>(undefined),
			Content: new FormControl<MediaCapabilities | null | undefined>(undefined),
		});

	}

	export interface CreateAttendeePostBody {

		/**
		 * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.</p> <p>Pattern: <code>[-_&amp;@+=,(){}\[\]\/«».:|'"#a-zA-Z0-9À-ÿ\s]*</code> </p> <p>Values that begin with <code>aws:</code> are reserved. You can't configure a value that uses this prefix.</p>
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		ExternalUserId: string;

		/** <p>The media capabilities of an attendee: audio, video, or content. </p> <note> <p>You use the capabilities with a set of values that control what the capabilities can do, such as <code>SendReceive</code> data. For more information about those values, see .</p> </note> <p>When using capabilities, be aware of these corner cases:</p> <ul> <li> <p>You can't set <code>content</code> capabilities to <code>SendReceive</code> or <code>Receive</code> unless you also set <code>video</code> capabilities to <code>SendReceive</code> or <code>Receive</code>. If you don't set the <code>video</code> capability to receive, the response will contain an HTTP 400 Bad Request status code. However, you can set your <code>video</code> capability to receive and you set your <code>content</code> capability to not receive.</p> </li> <li> <p>When you change an <code>audio</code> capability from <code>None</code> or <code>Receive</code> to <code>Send</code> or <code>SendReceive</code> , and if the attendee left their microphone unmuted, audio will flow from the attendee to the other meeting participants.</p> </li> <li> <p>When you change a <code>video</code> or <code>content</code> capability from <code>None</code> or <code>Receive</code> to <code>Send</code> or <code>SendReceive</code> , and if the attendee turned on their video or content streams, remote attendees can receive those streams, but only after media renegotiation between the client and the Amazon Chime back-end server.</p> </li> </ul> */
		Capabilities?: CreateAttendeePostBodyCapabilities;
	}
	export interface CreateAttendeePostBodyFormProperties {

		/**
		 * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.</p> <p>Pattern: <code>[-_&amp;@+=,(){}\[\]\/«».:|'"#a-zA-Z0-9À-ÿ\s]*</code> </p> <p>Values that begin with <code>aws:</code> are reserved. You can't configure a value that uses this prefix.</p>
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		ExternalUserId: FormControl<string | null | undefined>,
	}
	export function CreateCreateAttendeePostBodyFormGroup() {
		return new FormGroup<CreateAttendeePostBodyFormProperties>({
			ExternalUserId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(64)]),
		});

	}

	export interface CreateAttendeePostBodyCapabilities {
		Audio?: MediaCapabilities;
		Video?: MediaCapabilities;
		Content?: MediaCapabilities;
	}
	export interface CreateAttendeePostBodyCapabilitiesFormProperties {
		Audio: FormControl<MediaCapabilities | null | undefined>,
		Video: FormControl<MediaCapabilities | null | undefined>,
		Content: FormControl<MediaCapabilities | null | undefined>,
	}
	export function CreateCreateAttendeePostBodyCapabilitiesFormGroup() {
		return new FormGroup<CreateAttendeePostBodyCapabilitiesFormProperties>({
			Audio: new FormControl<MediaCapabilities | null | undefined>(undefined),
			Video: new FormControl<MediaCapabilities | null | undefined>(undefined),
			Content: new FormControl<MediaCapabilities | null | undefined>(undefined),
		});

	}

	export interface CreateMeetingPostBody {

		/**
		 * The unique identifier for the client request. Use a different token for different meetings.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken: string;

		/**
		 * <p>The Region in which to create the meeting.</p> <p> Available values: <code>af-south-1</code>, <code>ap-northeast-1</code>, <code>ap-northeast-2</code>, <code>ap-south-1</code>, <code>ap-southeast-1</code>, <code>ap-southeast-2</code>, <code>ca-central-1</code>, <code>eu-central-1</code>, <code>eu-north-1</code>, <code>eu-south-1</code>, <code>eu-west-1</code>, <code>eu-west-2</code>, <code>eu-west-3</code>, <code>sa-east-1</code>, <code>us-east-1</code>, <code>us-east-2</code>, <code>us-west-1</code>, <code>us-west-2</code>. </p> <p>Available values in AWS GovCloud (US) Regions: <code>us-gov-east-1</code>, <code>us-gov-west-1</code>.</p>
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		MediaRegion: string;

		/**
		 * Reserved.
		 * Max length: 64
		 * Min length: 2
		 */
		MeetingHostId?: string | null;

		/**
		 * <p>The external meeting ID.</p> <p>Pattern: <code>[-_&amp;@+=,(){}\[\]\/«».:|'"#a-zA-Z0-9À-ÿ\s]*</code> </p> <p>Values that begin with <code>aws:</code> are reserved. You can't configure a value that uses this prefix. Case insensitive.</p>
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		ExternalMeetingId: string;

		/** The configuration for resource targets to receive notifications when meeting and attendee events occur. */
		NotificationsConfiguration?: CreateMeetingPostBodyNotificationsConfiguration;

		/** The configuration settings of the features available to a meeting. */
		MeetingFeatures?: CreateMeetingPostBodyMeetingFeatures;

		/**
		 * When specified, replicates the media from the primary meeting to the new meeting.
		 * Max length: 64
		 * Min length: 2
		 */
		PrimaryMeetingId?: string | null;

		/**
		 * A consistent and opaque identifier, created and maintained by the builder to represent a segment of their users.
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		TenantIds?: Array<string>;

		/**
		 * <p>Applies one or more tags to an Amazon Chime SDK meeting. Note the following:</p> <ul> <li> <p>Not all resources have tags. For a list of services with resources that support tagging using this operation, see <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/supported-services.html">Services that support the Resource Groups Tagging API</a>. If the resource doesn't yet support this operation, the resource's service might support tagging using its own API operations. For more information, refer to the documentation for that service.</p> </li> <li> <p>Each resource can have up to 50 tags. For other limits, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html#tag-conventions">Tag Naming and Usage Conventions</a> in the <i>AWS General Reference</i>.</p> </li> <li> <p>You can only tag resources that are located in the specified AWS Region for the AWS account.</p> </li> <li> <p>To add tags to a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for adding tags. For more information, see the documentation for each service.</p> </li> </ul> <important> <p>Do not store personally identifiable information (PII) or other confidential or sensitive information in tags. We use tags to provide you with billing and administration services. Tags are not intended to be used for private or sensitive data.</p> </important> <p> <b>Minimum permissions</b> </p> <p>In addition to the <code>tag:TagResources</code> permission required by this operation, you must also have the tagging permission defined by the service that created the resource. For example, to tag a <code>ChimeSDKMeetings</code> instance using the <code>TagResources</code> operation, you must have both of the following permissions:</p> <p> <code>tag:TagResources</code> </p> <p> <code>ChimeSDKMeetings:CreateTags</code> </p> <note> <p>Some services might have specific requirements for tagging some resources. For example, to tag an Amazon S3 bucket, you must also have the <code>s3:GetBucketTagging</code> permission. If the expected minimum permissions don't work, check the documentation for that service's tagging APIs for more information.</p> </note>
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateMeetingPostBodyFormProperties {

		/**
		 * The unique identifier for the client request. Use a different token for different meetings.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/**
		 * <p>The Region in which to create the meeting.</p> <p> Available values: <code>af-south-1</code>, <code>ap-northeast-1</code>, <code>ap-northeast-2</code>, <code>ap-south-1</code>, <code>ap-southeast-1</code>, <code>ap-southeast-2</code>, <code>ca-central-1</code>, <code>eu-central-1</code>, <code>eu-north-1</code>, <code>eu-south-1</code>, <code>eu-west-1</code>, <code>eu-west-2</code>, <code>eu-west-3</code>, <code>sa-east-1</code>, <code>us-east-1</code>, <code>us-east-2</code>, <code>us-west-1</code>, <code>us-west-2</code>. </p> <p>Available values in AWS GovCloud (US) Regions: <code>us-gov-east-1</code>, <code>us-gov-west-1</code>.</p>
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		MediaRegion: FormControl<string | null | undefined>,

		/**
		 * Reserved.
		 * Max length: 64
		 * Min length: 2
		 */
		MeetingHostId: FormControl<string | null | undefined>,

		/**
		 * <p>The external meeting ID.</p> <p>Pattern: <code>[-_&amp;@+=,(){}\[\]\/«».:|'"#a-zA-Z0-9À-ÿ\s]*</code> </p> <p>Values that begin with <code>aws:</code> are reserved. You can't configure a value that uses this prefix. Case insensitive.</p>
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		ExternalMeetingId: FormControl<string | null | undefined>,

		/**
		 * When specified, replicates the media from the primary meeting to the new meeting.
		 * Max length: 64
		 * Min length: 2
		 */
		PrimaryMeetingId: FormControl<string | null | undefined>,
	}
	export function CreateCreateMeetingPostBodyFormGroup() {
		return new FormGroup<CreateMeetingPostBodyFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(64), Validators.pattern('[-_a-zA-Z0-9]*')]),
			MediaRegion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(64)]),
			MeetingHostId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64)]),
			ExternalMeetingId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(64)]),
			PrimaryMeetingId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64)]),
		});

	}

	export interface CreateMeetingPostBodyNotificationsConfiguration {
		LambdaFunctionArn?: string;
		SnsTopicArn?: string;
		SqsQueueArn?: string;
	}
	export interface CreateMeetingPostBodyNotificationsConfigurationFormProperties {
		LambdaFunctionArn: FormControl<string | null | undefined>,
		SnsTopicArn: FormControl<string | null | undefined>,
		SqsQueueArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateMeetingPostBodyNotificationsConfigurationFormGroup() {
		return new FormGroup<CreateMeetingPostBodyNotificationsConfigurationFormProperties>({
			LambdaFunctionArn: new FormControl<string | null | undefined>(undefined),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined),
			SqsQueueArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMeetingPostBodyMeetingFeatures {
		Audio?: AudioFeatures;
	}
	export interface CreateMeetingPostBodyMeetingFeaturesFormProperties {
	}
	export function CreateCreateMeetingPostBodyMeetingFeaturesFormGroup() {
		return new FormGroup<CreateMeetingPostBodyMeetingFeaturesFormProperties>({
		});

	}

	export enum CreateMeetingWithAttendeesOperation { 'create-attendees' = 'create-attendees' }

	export interface CreateMeetingWithAttendeesPostBody {

		/**
		 * The unique identifier for the client request. Use a different token for different meetings.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken: string;

		/**
		 * <p>The Region in which to create the meeting.</p> <p> Available values: <code>af-south-1</code>, <code>ap-northeast-1</code>, <code>ap-northeast-2</code>, <code>ap-south-1</code>, <code>ap-southeast-1</code>, <code>ap-southeast-2</code>, <code>ca-central-1</code>, <code>eu-central-1</code>, <code>eu-north-1</code>, <code>eu-south-1</code>, <code>eu-west-1</code>, <code>eu-west-2</code>, <code>eu-west-3</code>, <code>sa-east-1</code>, <code>us-east-1</code>, <code>us-east-2</code>, <code>us-west-1</code>, <code>us-west-2</code>. </p> <p>Available values in AWS GovCloud (US) Regions: <code>us-gov-east-1</code>, <code>us-gov-west-1</code>.</p>
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		MediaRegion: string;

		/**
		 * Reserved.
		 * Max length: 64
		 * Min length: 2
		 */
		MeetingHostId?: string | null;

		/**
		 * <p>The external meeting ID.</p> <p>Pattern: <code>[-_&amp;@+=,(){}\[\]\/«».:|'"#a-zA-Z0-9À-ÿ\s]*</code> </p> <p>Values that begin with <code>aws:</code> are reserved. You can't configure a value that uses this prefix. Case insensitive.</p>
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		ExternalMeetingId: string;

		/** The configuration settings of the features available to a meeting. */
		MeetingFeatures?: CreateMeetingWithAttendeesPostBodyMeetingFeatures;

		/** The configuration for resource targets to receive notifications when meeting and attendee events occur. */
		NotificationsConfiguration?: CreateMeetingWithAttendeesPostBodyNotificationsConfiguration;

		/**
		 * The attendee information, including attendees' IDs and join tokens.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		Attendees: Array<CreateAttendeeRequestItem>;

		/**
		 * When specified, replicates the media from the primary meeting to the new meeting.
		 * Max length: 64
		 * Min length: 2
		 */
		PrimaryMeetingId?: string | null;

		/**
		 * A consistent and opaque identifier, created and maintained by the builder to represent a segment of their users.
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		TenantIds?: Array<string>;

		/**
		 * The tags in the request.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateMeetingWithAttendeesPostBodyFormProperties {

		/**
		 * The unique identifier for the client request. Use a different token for different meetings.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/**
		 * <p>The Region in which to create the meeting.</p> <p> Available values: <code>af-south-1</code>, <code>ap-northeast-1</code>, <code>ap-northeast-2</code>, <code>ap-south-1</code>, <code>ap-southeast-1</code>, <code>ap-southeast-2</code>, <code>ca-central-1</code>, <code>eu-central-1</code>, <code>eu-north-1</code>, <code>eu-south-1</code>, <code>eu-west-1</code>, <code>eu-west-2</code>, <code>eu-west-3</code>, <code>sa-east-1</code>, <code>us-east-1</code>, <code>us-east-2</code>, <code>us-west-1</code>, <code>us-west-2</code>. </p> <p>Available values in AWS GovCloud (US) Regions: <code>us-gov-east-1</code>, <code>us-gov-west-1</code>.</p>
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		MediaRegion: FormControl<string | null | undefined>,

		/**
		 * Reserved.
		 * Max length: 64
		 * Min length: 2
		 */
		MeetingHostId: FormControl<string | null | undefined>,

		/**
		 * <p>The external meeting ID.</p> <p>Pattern: <code>[-_&amp;@+=,(){}\[\]\/«».:|'"#a-zA-Z0-9À-ÿ\s]*</code> </p> <p>Values that begin with <code>aws:</code> are reserved. You can't configure a value that uses this prefix. Case insensitive.</p>
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		ExternalMeetingId: FormControl<string | null | undefined>,

		/**
		 * When specified, replicates the media from the primary meeting to the new meeting.
		 * Max length: 64
		 * Min length: 2
		 */
		PrimaryMeetingId: FormControl<string | null | undefined>,
	}
	export function CreateCreateMeetingWithAttendeesPostBodyFormGroup() {
		return new FormGroup<CreateMeetingWithAttendeesPostBodyFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(64), Validators.pattern('[-_a-zA-Z0-9]*')]),
			MediaRegion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(64)]),
			MeetingHostId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64)]),
			ExternalMeetingId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(64)]),
			PrimaryMeetingId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64)]),
		});

	}

	export interface CreateMeetingWithAttendeesPostBodyMeetingFeatures {
		Audio?: AudioFeatures;
	}
	export interface CreateMeetingWithAttendeesPostBodyMeetingFeaturesFormProperties {
	}
	export function CreateCreateMeetingWithAttendeesPostBodyMeetingFeaturesFormGroup() {
		return new FormGroup<CreateMeetingWithAttendeesPostBodyMeetingFeaturesFormProperties>({
		});

	}

	export interface CreateMeetingWithAttendeesPostBodyNotificationsConfiguration {
		LambdaFunctionArn?: string;
		SnsTopicArn?: string;
		SqsQueueArn?: string;
	}
	export interface CreateMeetingWithAttendeesPostBodyNotificationsConfigurationFormProperties {
		LambdaFunctionArn: FormControl<string | null | undefined>,
		SnsTopicArn: FormControl<string | null | undefined>,
		SqsQueueArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateMeetingWithAttendeesPostBodyNotificationsConfigurationFormGroup() {
		return new FormGroup<CreateMeetingWithAttendeesPostBodyNotificationsConfigurationFormProperties>({
			LambdaFunctionArn: new FormControl<string | null | undefined>(undefined),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined),
			SqsQueueArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StartMeetingTranscriptionOperation { start = 'start' }

	export interface StartMeetingTranscriptionPostBody {

		/**
		 * The configuration for the current transcription operation. Must contain <code>EngineTranscribeSettings</code> or <code>EngineTranscribeMedicalSettings</code>.
		 * Required
		 */
		TranscriptionConfiguration: StartMeetingTranscriptionPostBodyTranscriptionConfiguration;
	}
	export interface StartMeetingTranscriptionPostBodyFormProperties {
	}
	export function CreateStartMeetingTranscriptionPostBodyFormGroup() {
		return new FormGroup<StartMeetingTranscriptionPostBodyFormProperties>({
		});

	}

	export interface StartMeetingTranscriptionPostBodyTranscriptionConfiguration {
		EngineTranscribeSettings?: EngineTranscribeSettings;
		EngineTranscribeMedicalSettings?: EngineTranscribeMedicalSettings;
	}
	export interface StartMeetingTranscriptionPostBodyTranscriptionConfigurationFormProperties {
	}
	export function CreateStartMeetingTranscriptionPostBodyTranscriptionConfigurationFormGroup() {
		return new FormGroup<StartMeetingTranscriptionPostBodyTranscriptionConfigurationFormProperties>({
		});

	}

	export enum StopMeetingTranscriptionOperation { stop = 'stop' }

	export enum TagResourceOperation { 'tag-resource' = 'tag-resource' }

	export interface TagResourcePostBody {

		/**
		 * The ARN of the resource.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		ResourceARN: string;

		/**
		 * Lists the requested tags.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags: Array<Tag>;
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The ARN of the resource.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('^arn:.*')]),
		});

	}

	export enum UntagResourceOperation { 'untag-resource' = 'untag-resource' }

	export interface UntagResourcePostBody {

		/**
		 * The ARN of the resource that you're removing tags from.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		ResourceARN: string;

		/**
		 * The tag keys being removed from the resources.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		TagKeys: Array<string>;
	}
	export interface UntagResourcePostBodyFormProperties {

		/**
		 * The ARN of the resource that you're removing tags from.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourcePostBodyFormGroup() {
		return new FormGroup<UntagResourcePostBodyFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('^arn:.*')]),
		});

	}

	export interface UpdateAttendeeCapabilitiesPutBody {

		/**
		 * <p>The media capabilities of an attendee: audio, video, or content. </p> <note> <p>You use the capabilities with a set of values that control what the capabilities can do, such as <code>SendReceive</code> data. For more information about those values, see .</p> </note> <p>When using capabilities, be aware of these corner cases:</p> <ul> <li> <p>You can't set <code>content</code> capabilities to <code>SendReceive</code> or <code>Receive</code> unless you also set <code>video</code> capabilities to <code>SendReceive</code> or <code>Receive</code>. If you don't set the <code>video</code> capability to receive, the response will contain an HTTP 400 Bad Request status code. However, you can set your <code>video</code> capability to receive and you set your <code>content</code> capability to not receive.</p> </li> <li> <p>When you change an <code>audio</code> capability from <code>None</code> or <code>Receive</code> to <code>Send</code> or <code>SendReceive</code> , and if the attendee left their microphone unmuted, audio will flow from the attendee to the other meeting participants.</p> </li> <li> <p>When you change a <code>video</code> or <code>content</code> capability from <code>None</code> or <code>Receive</code> to <code>Send</code> or <code>SendReceive</code> , and if the attendee turned on their video or content streams, remote attendees can receive those streams, but only after media renegotiation between the client and the Amazon Chime back-end server.</p> </li> </ul>
		 * Required
		 */
		Capabilities: UpdateAttendeeCapabilitiesPutBodyCapabilities;
	}
	export interface UpdateAttendeeCapabilitiesPutBodyFormProperties {
	}
	export function CreateUpdateAttendeeCapabilitiesPutBodyFormGroup() {
		return new FormGroup<UpdateAttendeeCapabilitiesPutBodyFormProperties>({
		});

	}

	export interface UpdateAttendeeCapabilitiesPutBodyCapabilities {
		Audio?: MediaCapabilities;
		Video?: MediaCapabilities;
		Content?: MediaCapabilities;
	}
	export interface UpdateAttendeeCapabilitiesPutBodyCapabilitiesFormProperties {
		Audio: FormControl<MediaCapabilities | null | undefined>,
		Video: FormControl<MediaCapabilities | null | undefined>,
		Content: FormControl<MediaCapabilities | null | undefined>,
	}
	export function CreateUpdateAttendeeCapabilitiesPutBodyCapabilitiesFormGroup() {
		return new FormGroup<UpdateAttendeeCapabilitiesPutBodyCapabilitiesFormProperties>({
			Audio: new FormControl<MediaCapabilities | null | undefined>(undefined),
			Video: new FormControl<MediaCapabilities | null | undefined>(undefined),
			Content: new FormControl<MediaCapabilities | null | undefined>(undefined),
		});

	}

}

