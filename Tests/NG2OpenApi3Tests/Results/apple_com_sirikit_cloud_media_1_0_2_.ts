import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddMediaIntent {

		/** Required */
		class: AddMediaIntentClass;
		mediaDestination?: MediaDestination;
		mediaItems?: Array<MediaItem>;
		mediaSearch?: MediaSearch;
	}
	export interface AddMediaIntentFormProperties {

		/** Required */
		class: FormControl<AddMediaIntentClass | null | undefined>,
	}
	export function CreateAddMediaIntentFormGroup() {
		return new FormGroup<AddMediaIntentFormProperties>({
			class: new FormControl<AddMediaIntentClass | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AddMediaIntentClass { AddMediaIntent = 'AddMediaIntent' }

	export interface MediaDestination {

		/** Required */
		mediaDestinationType: MediaDestinationMediaDestinationType;
	}
	export interface MediaDestinationFormProperties {

		/** Required */
		mediaDestinationType: FormControl<MediaDestinationMediaDestinationType | null | undefined>,
	}
	export function CreateMediaDestinationFormGroup() {
		return new FormGroup<MediaDestinationFormProperties>({
			mediaDestinationType: new FormControl<MediaDestinationMediaDestinationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MediaDestinationMediaDestinationType { library = 'library', playlist = 'playlist' }

	export interface MediaItem {

		/** Max length: 1000 */
		artist?: string | null;

		/**
		 * Required
		 * Max length: 250
		 */
		identifier: string;

		/** Max length: 1000 */
		title?: string | null;

		/** Required */
		type: MediaItemType;
	}
	export interface MediaItemFormProperties {

		/** Max length: 1000 */
		artist: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 250
		 */
		identifier: FormControl<string | null | undefined>,

		/** Max length: 1000 */
		title: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<MediaItemType | null | undefined>,
	}
	export function CreateMediaItemFormGroup() {
		return new FormGroup<MediaItemFormProperties>({
			artist: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000)]),
			identifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(250)]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000)]),
			type: new FormControl<MediaItemType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MediaItemType { unknown = 'unknown', song = 'song', album = 'album', artist = 'artist', genre = 'genre', playlist = 'playlist', podcastShow = 'podcastShow', podcastEpisode = 'podcastEpisode', podcastPlaylist = 'podcastPlaylist', musicStation = 'musicStation', audioBook = 'audioBook', movie = 'movie', tvShow = 'tvShow', tvShowEpisode = 'tvShowEpisode', musicVideo = 'musicVideo', podcastStation = 'podcastStation', radioStation = 'radioStation', station = 'station', music = 'music', algorithmicRadioStation = 'algorithmicRadioStation', news = 'news' }

	export interface MediaSearch {
		albumName?: string | null;
		artistName?: string | null;
		genreNames?: Array<string>;
		mediaIdentifier?: string | null;
		mediaName?: string | null;
		mediaType?: MediaItemType | null;
		moodNames?: Array<string>;
		reference?: MediaSearchReference | null;
		releaseDate?: DateComponentsRange;
		sortOrder?: MediaSearchSortOrder | null;
	}
	export interface MediaSearchFormProperties {
		albumName: FormControl<string | null | undefined>,
		artistName: FormControl<string | null | undefined>,
		mediaIdentifier: FormControl<string | null | undefined>,
		mediaName: FormControl<string | null | undefined>,
		mediaType: FormControl<MediaItemType | null | undefined>,
		reference: FormControl<MediaSearchReference | null | undefined>,
		sortOrder: FormControl<MediaSearchSortOrder | null | undefined>,
	}
	export function CreateMediaSearchFormGroup() {
		return new FormGroup<MediaSearchFormProperties>({
			albumName: new FormControl<string | null | undefined>(undefined),
			artistName: new FormControl<string | null | undefined>(undefined),
			mediaIdentifier: new FormControl<string | null | undefined>(undefined),
			mediaName: new FormControl<string | null | undefined>(undefined),
			mediaType: new FormControl<MediaItemType | null | undefined>(undefined),
			reference: new FormControl<MediaSearchReference | null | undefined>(undefined),
			sortOrder: new FormControl<MediaSearchSortOrder | null | undefined>(undefined),
		});

	}

	export enum MediaSearchReference { unknown = 'unknown', currentlyPlaying = 'currentlyPlaying', my = 'my' }

	export interface DateComponentsRange {
		endDateComponents?: DateComponents;
		startDateComponents?: DateComponents;
	}
	export interface DateComponentsRangeFormProperties {
	}
	export function CreateDateComponentsRangeFormGroup() {
		return new FormGroup<DateComponentsRangeFormProperties>({
		});

	}

	export enum MediaSearchSortOrder { unknown = 'unknown', newest = 'newest', oldest = 'oldest', best = 'best', worst = 'worst', popular = 'popular', unpopular = 'unpopular', trending = 'trending', recommended = 'recommended' }

	export interface AddMediaIntentHandlingConfirmInvocationResponse {

		/** Required */
		method: AddMediaIntentHandlingConfirmInvocationResponseMethod;

		/** Required */
		result: AddMediaIntentHandlingConfirmInvocationResponseResult;
	}
	export interface AddMediaIntentHandlingConfirmInvocationResponseFormProperties {

		/** Required */
		method: FormControl<AddMediaIntentHandlingConfirmInvocationResponseMethod | null | undefined>,
	}
	export function CreateAddMediaIntentHandlingConfirmInvocationResponseFormGroup() {
		return new FormGroup<AddMediaIntentHandlingConfirmInvocationResponseFormProperties>({
			method: new FormControl<AddMediaIntentHandlingConfirmInvocationResponseMethod | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AddMediaIntentHandlingConfirmInvocationResponseMethod { 'AddMediaIntentHandling.confirm' = 'AddMediaIntentHandling.confirm' }

	export interface AddMediaIntentHandlingConfirmInvocationResponseResult {

		/** Required */
		response: AddMediaIntentResponse;
	}
	export interface AddMediaIntentHandlingConfirmInvocationResponseResultFormProperties {
	}
	export function CreateAddMediaIntentHandlingConfirmInvocationResponseResultFormGroup() {
		return new FormGroup<AddMediaIntentHandlingConfirmInvocationResponseResultFormProperties>({
		});

	}

	export interface AddMediaIntentResponse {

		/** Required */
		class: AddMediaIntentResponseClass;

		/** Required */
		code: AddMediaIntentResponseCode;
	}
	export interface AddMediaIntentResponseFormProperties {

		/** Required */
		class: FormControl<AddMediaIntentResponseClass | null | undefined>,

		/** Required */
		code: FormControl<AddMediaIntentResponseCode | null | undefined>,
	}
	export function CreateAddMediaIntentResponseFormGroup() {
		return new FormGroup<AddMediaIntentResponseFormProperties>({
			class: new FormControl<AddMediaIntentResponseClass | null | undefined>(undefined, [Validators.required]),
			code: new FormControl<AddMediaIntentResponseCode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AddMediaIntentResponseClass { AddMediaIntentResponse = 'AddMediaIntentResponse' }

	export enum AddMediaIntentResponseCode { unspecified = 'unspecified', ready = 'ready', inProgress = 'inProgress', success = 'success', failure = 'failure', failureRequiringAppLaunch = 'failureRequiringAppLaunch' }

	export interface AddMediaIntentHandlingHandleInvocationResponse {

		/** Required */
		method: AddMediaIntentHandlingHandleInvocationResponseMethod;

		/** Required */
		result: AddMediaIntentHandlingHandleInvocationResponseResult;
	}
	export interface AddMediaIntentHandlingHandleInvocationResponseFormProperties {

		/** Required */
		method: FormControl<AddMediaIntentHandlingHandleInvocationResponseMethod | null | undefined>,
	}
	export function CreateAddMediaIntentHandlingHandleInvocationResponseFormGroup() {
		return new FormGroup<AddMediaIntentHandlingHandleInvocationResponseFormProperties>({
			method: new FormControl<AddMediaIntentHandlingHandleInvocationResponseMethod | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AddMediaIntentHandlingHandleInvocationResponseMethod { 'AddMediaIntentHandling.handle' = 'AddMediaIntentHandling.handle' }

	export interface AddMediaIntentHandlingHandleInvocationResponseResult {

		/** Required */
		response: AddMediaIntentResponse;
	}
	export interface AddMediaIntentHandlingHandleInvocationResponseResultFormProperties {
	}
	export function CreateAddMediaIntentHandlingHandleInvocationResponseResultFormGroup() {
		return new FormGroup<AddMediaIntentHandlingHandleInvocationResponseResultFormProperties>({
		});

	}

	export interface AddMediaIntentHandlingInvocation {

		/** Required */
		method: AddMediaIntentHandlingInvocationMethod;

		/** Required */
		params: AddMediaIntentHandlingInvocationParams;
	}
	export interface AddMediaIntentHandlingInvocationFormProperties {

		/** Required */
		method: FormControl<AddMediaIntentHandlingInvocationMethod | null | undefined>,
	}
	export function CreateAddMediaIntentHandlingInvocationFormGroup() {
		return new FormGroup<AddMediaIntentHandlingInvocationFormProperties>({
			method: new FormControl<AddMediaIntentHandlingInvocationMethod | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AddMediaIntentHandlingInvocationMethod { 'AddMediaIntentHandling.resolveMediaItems' = 'AddMediaIntentHandling.resolveMediaItems', 'AddMediaIntentHandling.resolveMediaDestination' = 'AddMediaIntentHandling.resolveMediaDestination', 'AddMediaIntentHandling.confirm' = 'AddMediaIntentHandling.confirm', 'AddMediaIntentHandling.handle' = 'AddMediaIntentHandling.handle' }

	export interface AddMediaIntentHandlingInvocationParams {

		/** Required */
		intent: AddMediaIntent;
	}
	export interface AddMediaIntentHandlingInvocationParamsFormProperties {
	}
	export function CreateAddMediaIntentHandlingInvocationParamsFormGroup() {
		return new FormGroup<AddMediaIntentHandlingInvocationParamsFormProperties>({
		});

	}

	export interface AddMediaIntentHandlingInvocationResponse {
	}
	export interface AddMediaIntentHandlingInvocationResponseFormProperties {
	}
	export function CreateAddMediaIntentHandlingInvocationResponseFormGroup() {
		return new FormGroup<AddMediaIntentHandlingInvocationResponseFormProperties>({
		});

	}

	export interface AddMediaIntentHandlingResolveMediaDestinationInvocationResponse {

		/** Required */
		method: AddMediaIntentHandlingResolveMediaDestinationInvocationResponseMethod;

		/** Required */
		result: AddMediaIntentHandlingResolveMediaDestinationInvocationResponseResult;
	}
	export interface AddMediaIntentHandlingResolveMediaDestinationInvocationResponseFormProperties {

		/** Required */
		method: FormControl<AddMediaIntentHandlingResolveMediaDestinationInvocationResponseMethod | null | undefined>,
	}
	export function CreateAddMediaIntentHandlingResolveMediaDestinationInvocationResponseFormGroup() {
		return new FormGroup<AddMediaIntentHandlingResolveMediaDestinationInvocationResponseFormProperties>({
			method: new FormControl<AddMediaIntentHandlingResolveMediaDestinationInvocationResponseMethod | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AddMediaIntentHandlingResolveMediaDestinationInvocationResponseMethod { 'AddMediaIntentHandling.resolveMediaDestination' = 'AddMediaIntentHandling.resolveMediaDestination' }

	export interface AddMediaIntentHandlingResolveMediaDestinationInvocationResponseResult {
		resolutionResult?: AddMediaMediaDestinationResolutionResult;
	}
	export interface AddMediaIntentHandlingResolveMediaDestinationInvocationResponseResultFormProperties {
	}
	export function CreateAddMediaIntentHandlingResolveMediaDestinationInvocationResponseResultFormGroup() {
		return new FormGroup<AddMediaIntentHandlingResolveMediaDestinationInvocationResponseResultFormProperties>({
		});

	}

	export interface AddMediaMediaDestinationResolutionResult {
		class?: AddMediaMediaDestinationResolutionResultClass | null;
		confirmationRequired?: AddMediaMediaDestinationResolutionResultConfirmationRequired;
		disambiguation?: AddMediaMediaDestinationResolutionResultDisambiguation;
		success?: AddMediaMediaDestinationResolutionResultSuccess;
		unsupported?: AddMediaMediaDestinationResolutionResultUnsupported;
	}
	export interface AddMediaMediaDestinationResolutionResultFormProperties {
		class: FormControl<AddMediaMediaDestinationResolutionResultClass | null | undefined>,
	}
	export function CreateAddMediaMediaDestinationResolutionResultFormGroup() {
		return new FormGroup<AddMediaMediaDestinationResolutionResultFormProperties>({
			class: new FormControl<AddMediaMediaDestinationResolutionResultClass | null | undefined>(undefined),
		});

	}

	export enum AddMediaMediaDestinationResolutionResultClass { AddMediaMediaDestinationResolutionResult = 'AddMediaMediaDestinationResolutionResult' }

	export interface AddMediaMediaDestinationResolutionResultConfirmationRequired {

		/** Required */
		mediaDestinationToConfirm: MediaDestination;
	}
	export interface AddMediaMediaDestinationResolutionResultConfirmationRequiredFormProperties {
	}
	export function CreateAddMediaMediaDestinationResolutionResultConfirmationRequiredFormGroup() {
		return new FormGroup<AddMediaMediaDestinationResolutionResultConfirmationRequiredFormProperties>({
		});

	}

	export interface AddMediaMediaDestinationResolutionResultDisambiguation {

		/**
		 * Required
		 * Minimum items: 2
		 */
		mediaDestinationsToDisambiguate: Array<MediaDestination>;
	}
	export interface AddMediaMediaDestinationResolutionResultDisambiguationFormProperties {
	}
	export function CreateAddMediaMediaDestinationResolutionResultDisambiguationFormGroup() {
		return new FormGroup<AddMediaMediaDestinationResolutionResultDisambiguationFormProperties>({
		});

	}

	export interface AddMediaMediaDestinationResolutionResultSuccess {

		/** Required */
		resolvedMediaDestination: MediaDestination;
	}
	export interface AddMediaMediaDestinationResolutionResultSuccessFormProperties {
	}
	export function CreateAddMediaMediaDestinationResolutionResultSuccessFormGroup() {
		return new FormGroup<AddMediaMediaDestinationResolutionResultSuccessFormProperties>({
		});

	}

	export interface AddMediaMediaDestinationResolutionResultUnsupported {
		reason?: AddMediaMediaDestinationResolutionResultUnsupportedReason | null;
	}
	export interface AddMediaMediaDestinationResolutionResultUnsupportedFormProperties {
		reason: FormControl<AddMediaMediaDestinationResolutionResultUnsupportedReason | null | undefined>,
	}
	export function CreateAddMediaMediaDestinationResolutionResultUnsupportedFormGroup() {
		return new FormGroup<AddMediaMediaDestinationResolutionResultUnsupportedFormProperties>({
			reason: new FormControl<AddMediaMediaDestinationResolutionResultUnsupportedReason | null | undefined>(undefined),
		});

	}

	export enum AddMediaMediaDestinationResolutionResultUnsupportedReason { playlistNameNotFound = 'playlistNameNotFound', playlistNotEditable = 'playlistNotEditable' }

	export interface AddMediaIntentHandlingResolveMediaItemsInvocationResponse {

		/** Required */
		method: AddMediaIntentHandlingResolveMediaItemsInvocationResponseMethod;

		/** Required */
		result: AddMediaIntentHandlingResolveMediaItemsInvocationResponseResult;
	}
	export interface AddMediaIntentHandlingResolveMediaItemsInvocationResponseFormProperties {

		/** Required */
		method: FormControl<AddMediaIntentHandlingResolveMediaItemsInvocationResponseMethod | null | undefined>,
	}
	export function CreateAddMediaIntentHandlingResolveMediaItemsInvocationResponseFormGroup() {
		return new FormGroup<AddMediaIntentHandlingResolveMediaItemsInvocationResponseFormProperties>({
			method: new FormControl<AddMediaIntentHandlingResolveMediaItemsInvocationResponseMethod | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AddMediaIntentHandlingResolveMediaItemsInvocationResponseMethod { 'AddMediaIntentHandling.resolveMediaItems' = 'AddMediaIntentHandling.resolveMediaItems' }

	export interface AddMediaIntentHandlingResolveMediaItemsInvocationResponseResult {
		resolutionResult?: Array<AddMediaMediaItemResolutionResult>;
	}
	export interface AddMediaIntentHandlingResolveMediaItemsInvocationResponseResultFormProperties {
	}
	export function CreateAddMediaIntentHandlingResolveMediaItemsInvocationResponseResultFormGroup() {
		return new FormGroup<AddMediaIntentHandlingResolveMediaItemsInvocationResponseResultFormProperties>({
		});

	}

	export interface AddMediaMediaItemResolutionResult {
		class?: AddMediaMediaItemResolutionResultClass | null;
		confirmationRequired?: AddMediaMediaItemResolutionResultConfirmationRequired;
		disambiguation?: AddMediaMediaItemResolutionResultDisambiguation;
		success?: AddMediaMediaItemResolutionResultSuccess;
		unsupported?: AddMediaMediaItemResolutionResultUnsupported;
	}
	export interface AddMediaMediaItemResolutionResultFormProperties {
		class: FormControl<AddMediaMediaItemResolutionResultClass | null | undefined>,
	}
	export function CreateAddMediaMediaItemResolutionResultFormGroup() {
		return new FormGroup<AddMediaMediaItemResolutionResultFormProperties>({
			class: new FormControl<AddMediaMediaItemResolutionResultClass | null | undefined>(undefined),
		});

	}

	export enum AddMediaMediaItemResolutionResultClass { AddMediaMediaItemResolutionResult = 'AddMediaMediaItemResolutionResult' }

	export interface AddMediaMediaItemResolutionResultConfirmationRequired {

		/** Required */
		mediaItemToConfirm: MediaItem;
	}
	export interface AddMediaMediaItemResolutionResultConfirmationRequiredFormProperties {
	}
	export function CreateAddMediaMediaItemResolutionResultConfirmationRequiredFormGroup() {
		return new FormGroup<AddMediaMediaItemResolutionResultConfirmationRequiredFormProperties>({
		});

	}

	export interface AddMediaMediaItemResolutionResultDisambiguation {

		/**
		 * Required
		 * Minimum items: 2
		 */
		mediaItemsToDisambiguate: Array<MediaItem>;
	}
	export interface AddMediaMediaItemResolutionResultDisambiguationFormProperties {
	}
	export function CreateAddMediaMediaItemResolutionResultDisambiguationFormGroup() {
		return new FormGroup<AddMediaMediaItemResolutionResultDisambiguationFormProperties>({
		});

	}

	export interface AddMediaMediaItemResolutionResultSuccess {

		/** Required */
		resolvedMediaItem: MediaItem;
	}
	export interface AddMediaMediaItemResolutionResultSuccessFormProperties {
	}
	export function CreateAddMediaMediaItemResolutionResultSuccessFormGroup() {
		return new FormGroup<AddMediaMediaItemResolutionResultSuccessFormProperties>({
		});

	}

	export interface AddMediaMediaItemResolutionResultUnsupported {
		reason?: AddMediaMediaItemResolutionResultUnsupportedReason | null;
	}
	export interface AddMediaMediaItemResolutionResultUnsupportedFormProperties {
		reason: FormControl<AddMediaMediaItemResolutionResultUnsupportedReason | null | undefined>,
	}
	export function CreateAddMediaMediaItemResolutionResultUnsupportedFormGroup() {
		return new FormGroup<AddMediaMediaItemResolutionResultUnsupportedFormProperties>({
			reason: new FormControl<AddMediaMediaItemResolutionResultUnsupportedReason | null | undefined>(undefined),
		});

	}

	export enum AddMediaMediaItemResolutionResultUnsupportedReason { loginRequired = 'loginRequired', subscriptionRequired = 'subscriptionRequired', unsupportedMediaType = 'unsupportedMediaType', explicitContentSettings = 'explicitContentSettings', restrictedContent = 'restrictedContent', regionRestriction = 'regionRestriction' }

	export enum AddMediaMediaDestinationUnsupportedReason { playlistNameNotFound = 'playlistNameNotFound', playlistNotEditable = 'playlistNotEditable' }

	export enum AddMediaMediaItemUnsupportedReason { loginRequired = 'loginRequired', subscriptionRequired = 'subscriptionRequired', unsupportedMediaType = 'unsupportedMediaType', explicitContentSettings = 'explicitContentSettings', restrictedContent = 'restrictedContent', regionRestriction = 'regionRestriction' }

	export interface BooleanResolutionResult {
		class?: BooleanResolutionResultClass | null;
		confirmationRequired?: BooleanResolutionResultConfirmationRequired;
		success?: BooleanResolutionResultSuccess;
	}
	export interface BooleanResolutionResultFormProperties {
		class: FormControl<BooleanResolutionResultClass | null | undefined>,
	}
	export function CreateBooleanResolutionResultFormGroup() {
		return new FormGroup<BooleanResolutionResultFormProperties>({
			class: new FormControl<BooleanResolutionResultClass | null | undefined>(undefined),
		});

	}

	export enum BooleanResolutionResultClass { BooleanResolutionResult = 'BooleanResolutionResult' }

	export interface BooleanResolutionResultConfirmationRequired {

		/** Required */
		valueToConfirm: boolean;
	}
	export interface BooleanResolutionResultConfirmationRequiredFormProperties {

		/** Required */
		valueToConfirm: FormControl<boolean | null | undefined>,
	}
	export function CreateBooleanResolutionResultConfirmationRequiredFormGroup() {
		return new FormGroup<BooleanResolutionResultConfirmationRequiredFormProperties>({
			valueToConfirm: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BooleanResolutionResultSuccess {

		/** Required */
		resolvedValue: boolean;
	}
	export interface BooleanResolutionResultSuccessFormProperties {

		/** Required */
		resolvedValue: FormControl<boolean | null | undefined>,
	}
	export function CreateBooleanResolutionResultSuccessFormGroup() {
		return new FormGroup<BooleanResolutionResultSuccessFormProperties>({
			resolvedValue: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Constraints {
		allowExplicitContent?: boolean | null;

		/**
		 * Minimum: 50
		 * Maximum: 1000
		 */
		maximumQueueSegmentItemCount?: number | null;
		updateUserTasteProfile?: boolean | null;
	}
	export interface ConstraintsFormProperties {
		allowExplicitContent: FormControl<boolean | null | undefined>,

		/**
		 * Minimum: 50
		 * Maximum: 1000
		 */
		maximumQueueSegmentItemCount: FormControl<number | null | undefined>,
		updateUserTasteProfile: FormControl<boolean | null | undefined>,
	}
	export function CreateConstraintsFormGroup() {
		return new FormGroup<ConstraintsFormProperties>({
			allowExplicitContent: new FormControl<boolean | null | undefined>(undefined),
			maximumQueueSegmentItemCount: new FormControl<number | null | undefined>(undefined, [Validators.min(50), Validators.max(1000)]),
			updateUserTasteProfile: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Content {
		attributes?: ContentAttributes;
		control?: string | null;

		/**
		 * Required
		 * Max length: 1000
		 * Min length: 1
		 */
		identifier: string;
		isLive?: boolean | null;
		playIndex?: string | null;

		/** Max length: 2000 */
		url?: string | null;
	}
	export interface ContentFormProperties {
		control: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1000
		 * Min length: 1
		 */
		identifier: FormControl<string | null | undefined>,
		isLive: FormControl<boolean | null | undefined>,
		playIndex: FormControl<string | null | undefined>,

		/** Max length: 2000 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateContentFormGroup() {
		return new FormGroup<ContentFormProperties>({
			control: new FormControl<string | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1000)]),
			isLive: new FormControl<boolean | null | undefined>(undefined),
			playIndex: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2000)]),
		});

	}

	export interface ContentAttributes {

		/** Max length: 250 */
		albumName?: string | null;

		/** Max length: 1000 */
		artistName?: string | null;
		artwork?: ContentAttributesArtwork;

		/** Max length: 250 */
		composerName?: string | null;
		durationInMillis?: string | null;

		/** Maximum items: 30 */
		genreNames?: Array<string>;

		/** Max length: 250 */
		name?: string | null;
		trackNumber?: number | null;
	}
	export interface ContentAttributesFormProperties {

		/** Max length: 250 */
		albumName: FormControl<string | null | undefined>,

		/** Max length: 1000 */
		artistName: FormControl<string | null | undefined>,

		/** Max length: 250 */
		composerName: FormControl<string | null | undefined>,
		durationInMillis: FormControl<string | null | undefined>,

		/** Max length: 250 */
		name: FormControl<string | null | undefined>,
		trackNumber: FormControl<number | null | undefined>,
	}
	export function CreateContentAttributesFormGroup() {
		return new FormGroup<ContentAttributesFormProperties>({
			albumName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(250)]),
			artistName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000)]),
			composerName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(250)]),
			durationInMillis: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(250)]),
			trackNumber: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ContentAttributesArtwork {

		/** Max length: 2000 */
		url?: string | null;
	}
	export interface ContentAttributesArtworkFormProperties {

		/** Max length: 2000 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateContentAttributesArtworkFormGroup() {
		return new FormGroup<ContentAttributesArtworkFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2000)]),
		});

	}

	export interface DateComponents {
	}
	export interface DateComponentsFormProperties {
	}
	export function CreateDateComponentsFormGroup() {
		return new FormGroup<DateComponentsFormProperties>({
		});

	}

	export interface ExecutionMetrics {
		completed?: Date | null;
		duration?: number | null;
		received?: Date | null;
	}
	export interface ExecutionMetricsFormProperties {
		completed: FormControl<Date | null | undefined>,
		duration: FormControl<number | null | undefined>,
		received: FormControl<Date | null | undefined>,
	}
	export function CreateExecutionMetricsFormGroup() {
		return new FormGroup<ExecutionMetricsFormProperties>({
			completed: new FormControl<Date | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined),
			received: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ExplicitDateComponents {
		calendarIdentifier?: string | null;
		day?: number | null;
		era?: number | null;
		hour?: number | null;
		minute?: number | null;
		month?: number | null;
		nanosecond?: number | null;
		second?: number | null;
		timeZone?: string | null;
		year?: number | null;
	}
	export interface ExplicitDateComponentsFormProperties {
		calendarIdentifier: FormControl<string | null | undefined>,
		day: FormControl<number | null | undefined>,
		era: FormControl<number | null | undefined>,
		hour: FormControl<number | null | undefined>,
		minute: FormControl<number | null | undefined>,
		month: FormControl<number | null | undefined>,
		nanosecond: FormControl<number | null | undefined>,
		second: FormControl<number | null | undefined>,
		timeZone: FormControl<string | null | undefined>,
		year: FormControl<number | null | undefined>,
	}
	export function CreateExplicitDateComponentsFormGroup() {
		return new FormGroup<ExplicitDateComponentsFormProperties>({
			calendarIdentifier: new FormControl<string | null | undefined>(undefined),
			day: new FormControl<number | null | undefined>(undefined),
			era: new FormControl<number | null | undefined>(undefined),
			hour: new FormControl<number | null | undefined>(undefined),
			minute: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			nanosecond: new FormControl<number | null | undefined>(undefined),
			second: new FormControl<number | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ExtensionConfig {
		hdr?: string | null;

		/** Required */
		intent: ExtensionConfigIntent;

		/** Required */
		media: ExtensionConfigMedia;

		/**
		 * Max length: 2000
		 * Min length: 1
		 */
		url?: string | null;

		/** Required */
		version: string;
	}
	export interface ExtensionConfigFormProperties {
		hdr: FormControl<string | null | undefined>,

		/**
		 * Max length: 2000
		 * Min length: 1
		 */
		url: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<string | null | undefined>,
	}
	export function CreateExtensionConfigFormGroup() {
		return new FormGroup<ExtensionConfigFormProperties>({
			hdr: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2000)]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([0-9]+[.]){2}[0-9]+')]),
		});

	}

	export interface ExtensionConfigIntent {
		addMedia?: ExtensionConfigIntentAddMedia;
		hdr?: string | null;

		/** Required */
		playMedia: ExtensionConfigIntentPlayMedia;
		updateMediaAffinity?: ExtensionConfigIntentUpdateMediaAffinity;
	}
	export interface ExtensionConfigIntentFormProperties {
		hdr: FormControl<string | null | undefined>,
	}
	export function CreateExtensionConfigIntentFormGroup() {
		return new FormGroup<ExtensionConfigIntentFormProperties>({
			hdr: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExtensionConfigIntentAddMedia {
		opt?: Array<string>;
	}
	export interface ExtensionConfigIntentAddMediaFormProperties {
	}
	export function CreateExtensionConfigIntentAddMediaFormGroup() {
		return new FormGroup<ExtensionConfigIntentAddMediaFormProperties>({
		});

	}

	export interface ExtensionConfigIntentPlayMedia {
		opt?: Array<string>;
	}
	export interface ExtensionConfigIntentPlayMediaFormProperties {
	}
	export function CreateExtensionConfigIntentPlayMediaFormGroup() {
		return new FormGroup<ExtensionConfigIntentPlayMediaFormProperties>({
		});

	}

	export interface ExtensionConfigIntentUpdateMediaAffinity {
		opt?: Array<string>;
	}
	export interface ExtensionConfigIntentUpdateMediaAffinityFormProperties {
	}
	export function CreateExtensionConfigIntentUpdateMediaAffinityFormGroup() {
		return new FormGroup<ExtensionConfigIntentUpdateMediaAffinityFormProperties>({
		});

	}

	export interface ExtensionConfigMedia {
		queues?: ExtensionConfigMediaQueues;
	}
	export interface ExtensionConfigMediaFormProperties {
	}
	export function CreateExtensionConfigMediaFormGroup() {
		return new FormGroup<ExtensionConfigMediaFormProperties>({
		});

	}

	export interface ExtensionConfigMediaQueues {
		hdr?: string | null;
		playMedia?: ExtensionConfigMediaQueuesPlayMedia;
		updateActivity?: ExtensionConfigMediaQueuesUpdateActivity;
	}
	export interface ExtensionConfigMediaQueuesFormProperties {
		hdr: FormControl<string | null | undefined>,
	}
	export function CreateExtensionConfigMediaQueuesFormGroup() {
		return new FormGroup<ExtensionConfigMediaQueuesFormProperties>({
			hdr: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExtensionConfigMediaQueuesPlayMedia {
		hdr?: string | null;

		/**
		 * Max length: 4000
		 * Min length: 1
		 */
		url?: string | null;
	}
	export interface ExtensionConfigMediaQueuesPlayMediaFormProperties {
		hdr: FormControl<string | null | undefined>,

		/**
		 * Max length: 4000
		 * Min length: 1
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateExtensionConfigMediaQueuesPlayMediaFormGroup() {
		return new FormGroup<ExtensionConfigMediaQueuesPlayMediaFormProperties>({
			hdr: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4000)]),
		});

	}

	export interface ExtensionConfigMediaQueuesUpdateActivity {
		hdr?: string | null;

		/**
		 * Max length: 4000
		 * Min length: 1
		 */
		url?: string | null;
	}
	export interface ExtensionConfigMediaQueuesUpdateActivityFormProperties {
		hdr: FormControl<string | null | undefined>,

		/**
		 * Max length: 4000
		 * Min length: 1
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateExtensionConfigMediaQueuesUpdateActivityFormGroup() {
		return new FormGroup<ExtensionConfigMediaQueuesUpdateActivityFormProperties>({
			hdr: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4000)]),
		});

	}

	export interface ExtensionEndpointConfig {
		hdr?: string | null;

		/**
		 * Max length: 2000
		 * Min length: 0
		 */
		url?: string | null;
	}
	export interface ExtensionEndpointConfigFormProperties {
		hdr: FormControl<string | null | undefined>,

		/**
		 * Max length: 2000
		 * Min length: 0
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateExtensionEndpointConfigFormGroup() {
		return new FormGroup<ExtensionEndpointConfigFormProperties>({
			hdr: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2000)]),
		});

	}

	export interface Intent {

		/** Required */
		class: string;

		/** Required */
		identifier: string;
	}
	export interface IntentFormProperties {

		/** Required */
		class: FormControl<string | null | undefined>,

		/** Required */
		identifier: FormControl<string | null | undefined>,
	}
	export function CreateIntentFormGroup() {
		return new FormGroup<IntentFormProperties>({
			class: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IntentResolutionResult {

		/** Required */
		class: string;
		needsValue?: string | null;
		notRequired?: string | null;
		unsupported?: string | null;
	}
	export interface IntentResolutionResultFormProperties {

		/** Required */
		class: FormControl<string | null | undefined>,
		needsValue: FormControl<string | null | undefined>,
		notRequired: FormControl<string | null | undefined>,
		unsupported: FormControl<string | null | undefined>,
	}
	export function CreateIntentResolutionResultFormGroup() {
		return new FormGroup<IntentResolutionResultFormProperties>({
			class: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			needsValue: new FormControl<string | null | undefined>(undefined),
			notRequired: new FormControl<string | null | undefined>(undefined),
			unsupported: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IntentResponse {

		/** Required */
		class: string;

		/** Required */
		userActivity: UserActivity;
	}
	export interface IntentResponseFormProperties {

		/** Required */
		class: FormControl<string | null | undefined>,
	}
	export function CreateIntentResponseFormGroup() {
		return new FormGroup<IntentResponseFormProperties>({
			class: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UserActivity {

		/**
		 * Required
		 * Max length: 250
		 */
		activityType: string;

		/** Max length: 250 */
		persistentIdentifier?: string | null;

		/** Max length: 250 */
		title?: string | null;
		userInfo?: string | null;

		/**
		 * Required
		 * Max length: 25
		 */
		version: string;
	}
	export interface UserActivityFormProperties {

		/**
		 * Required
		 * Max length: 250
		 */
		activityType: FormControl<string | null | undefined>,

		/** Max length: 250 */
		persistentIdentifier: FormControl<string | null | undefined>,

		/** Max length: 250 */
		title: FormControl<string | null | undefined>,
		userInfo: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 25
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateUserActivityFormGroup() {
		return new FormGroup<UserActivityFormProperties>({
			activityType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(250)]),
			persistentIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(250)]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(250)]),
			userInfo: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(25), Validators.pattern('[0-9]+\.[0-9]+\.[0-9]+')]),
		});

	}

	export interface Invocation {

		/** Required */
		method: string;

		/** Required */
		params: string;
		session?: Session;
	}
	export interface InvocationFormProperties {

		/** Required */
		method: FormControl<string | null | undefined>,

		/** Required */
		params: FormControl<string | null | undefined>,
	}
	export function CreateInvocationFormGroup() {
		return new FormGroup<InvocationFormProperties>({
			method: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			params: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Session {

		/** Required */
		constraints: Constraints;

		/** Required */
		deadline: Date;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		identifier: string;
		playerContext?: PlayerContext;

		/** Required */
		requested: Date;

		/** Required */
		version: string;
	}
	export interface SessionFormProperties {

		/** Required */
		deadline: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		identifier: FormControl<string | null | undefined>,

		/** Required */
		requested: FormControl<Date | null | undefined>,

		/** Required */
		version: FormControl<string | null | undefined>,
	}
	export function CreateSessionFormGroup() {
		return new FormGroup<SessionFormProperties>({
			deadline: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			identifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			requested: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[0-9]+\.[0-9]+\.[0-9]+')]),
		});

	}

	export interface PlayerContext {

		/** Max length: 250 */
		activityIdentifier?: string | null;

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		contentIdentifier?: string | null;
		offsetInMillis?: number | null;
		playbackSpeed?: number | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		queueIdentifier?: string | null;
	}
	export interface PlayerContextFormProperties {

		/** Max length: 250 */
		activityIdentifier: FormControl<string | null | undefined>,

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		contentIdentifier: FormControl<string | null | undefined>,
		offsetInMillis: FormControl<number | null | undefined>,
		playbackSpeed: FormControl<number | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		queueIdentifier: FormControl<string | null | undefined>,
	}
	export function CreatePlayerContextFormGroup() {
		return new FormGroup<PlayerContextFormProperties>({
			activityIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(250)]),
			contentIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000)]),
			offsetInMillis: new FormControl<number | null | undefined>(undefined),
			playbackSpeed: new FormControl<number | null | undefined>(undefined),
			queueIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface InvocationResponse {

		/** Max length: 2000 */
		debug?: string | null;

		/** Required */
		method: string;
		metrics?: ExecutionMetrics;

		/** Required */
		result: string;
	}
	export interface InvocationResponseFormProperties {

		/** Max length: 2000 */
		debug: FormControl<string | null | undefined>,

		/** Required */
		method: FormControl<string | null | undefined>,

		/** Required */
		result: FormControl<string | null | undefined>,
	}
	export function CreateInvocationResponseFormGroup() {
		return new FormGroup<InvocationResponseFormProperties>({
			debug: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2000)]),
			method: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			result: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MediaAffinityType { unknown = 'unknown', like = 'like', dislike = 'dislike' }

	export interface MediaAffinityTypeResolutionResult {
		class?: MediaAffinityTypeResolutionResultClass | null;
		confirmationRequired?: MediaAffinityTypeResolutionResultConfirmationRequired;
		success?: MediaAffinityTypeResolutionResultSuccess;
	}
	export interface MediaAffinityTypeResolutionResultFormProperties {
		class: FormControl<MediaAffinityTypeResolutionResultClass | null | undefined>,
	}
	export function CreateMediaAffinityTypeResolutionResultFormGroup() {
		return new FormGroup<MediaAffinityTypeResolutionResultFormProperties>({
			class: new FormControl<MediaAffinityTypeResolutionResultClass | null | undefined>(undefined),
		});

	}

	export enum MediaAffinityTypeResolutionResultClass { MediaAffinityTypeResolutionResult = 'MediaAffinityTypeResolutionResult' }

	export interface MediaAffinityTypeResolutionResultConfirmationRequired {

		/** Required */
		mediaAffinityTypeToConfirm: MediaAffinityType;
	}
	export interface MediaAffinityTypeResolutionResultConfirmationRequiredFormProperties {

		/** Required */
		mediaAffinityTypeToConfirm: FormControl<MediaAffinityType | null | undefined>,
	}
	export function CreateMediaAffinityTypeResolutionResultConfirmationRequiredFormGroup() {
		return new FormGroup<MediaAffinityTypeResolutionResultConfirmationRequiredFormProperties>({
			mediaAffinityTypeToConfirm: new FormControl<MediaAffinityType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MediaAffinityTypeResolutionResultSuccess {

		/** Required */
		resolvedMediaAffinityType: MediaAffinityType;
	}
	export interface MediaAffinityTypeResolutionResultSuccessFormProperties {

		/** Required */
		resolvedMediaAffinityType: FormControl<MediaAffinityType | null | undefined>,
	}
	export function CreateMediaAffinityTypeResolutionResultSuccessFormGroup() {
		return new FormGroup<MediaAffinityTypeResolutionResultSuccessFormProperties>({
			resolvedMediaAffinityType: new FormControl<MediaAffinityType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MediaDestinationLibrary {

		/** Required */
		mediaDestinationType: MediaDestinationLibraryMediaDestinationType;
	}
	export interface MediaDestinationLibraryFormProperties {

		/** Required */
		mediaDestinationType: FormControl<MediaDestinationLibraryMediaDestinationType | null | undefined>,
	}
	export function CreateMediaDestinationLibraryFormGroup() {
		return new FormGroup<MediaDestinationLibraryFormProperties>({
			mediaDestinationType: new FormControl<MediaDestinationLibraryMediaDestinationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MediaDestinationLibraryMediaDestinationType { library = 'library' }

	export interface MediaDestinationPlaylist {

		/** Required */
		mediaDestinationType: MediaDestinationPlaylistMediaDestinationType;

		/**
		 * Required
		 * Max length: 1000
		 * Min length: 1
		 */
		playlistName: string;
	}
	export interface MediaDestinationPlaylistFormProperties {

		/** Required */
		mediaDestinationType: FormControl<MediaDestinationPlaylistMediaDestinationType | null | undefined>,

		/**
		 * Required
		 * Max length: 1000
		 * Min length: 1
		 */
		playlistName: FormControl<string | null | undefined>,
	}
	export function CreateMediaDestinationPlaylistFormGroup() {
		return new FormGroup<MediaDestinationPlaylistFormProperties>({
			mediaDestinationType: new FormControl<MediaDestinationPlaylistMediaDestinationType | null | undefined>(undefined, [Validators.required]),
			playlistName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1000)]),
		});

	}

	export enum MediaDestinationPlaylistMediaDestinationType { playlist = 'playlist' }

	export enum MediaReference { unknown = 'unknown', currentlyPlaying = 'currentlyPlaying', my = 'my' }

	export enum MediaSortOrder { unknown = 'unknown', newest = 'newest', oldest = 'oldest', best = 'best', worst = 'worst', popular = 'popular', unpopular = 'unpopular', trending = 'trending', recommended = 'recommended' }

	export interface PlayMediaControl {
		activity?: PlayMediaControlActivity;
		commands?: PlayMediaControlCommandSet;

		/** Required */
		scheme: PlayMediaControlScheme;
	}
	export interface PlayMediaControlFormProperties {

		/** Required */
		scheme: FormControl<PlayMediaControlScheme | null | undefined>,
	}
	export function CreatePlayMediaControlFormGroup() {
		return new FormGroup<PlayMediaControlFormProperties>({
			scheme: new FormControl<PlayMediaControlScheme | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PlayMediaControlActivity {

		/** Minimum: 5 */
		playElapsed?: number | null;

		/** Minimum: 5 */
		playElapsedInterval?: number | null;

		/**
		 * Minimum: 5
		 * Maximum: 60
		 */
		playPaused?: number | null;
	}
	export interface PlayMediaControlActivityFormProperties {

		/** Minimum: 5 */
		playElapsed: FormControl<number | null | undefined>,

		/** Minimum: 5 */
		playElapsedInterval: FormControl<number | null | undefined>,

		/**
		 * Minimum: 5
		 * Maximum: 60
		 */
		playPaused: FormControl<number | null | undefined>,
	}
	export function CreatePlayMediaControlActivityFormGroup() {
		return new FormGroup<PlayMediaControlActivityFormProperties>({
			playElapsed: new FormControl<number | null | undefined>(undefined, [Validators.min(5)]),
			playElapsedInterval: new FormControl<number | null | undefined>(undefined, [Validators.min(5)]),
			playPaused: new FormControl<number | null | undefined>(undefined, [Validators.min(5), Validators.max(60)]),
		});

	}

	export interface PlayMediaControlCommandSet {
		bookmarkTrack?: boolean | null;
		dislikeTrack?: boolean | null;
		likeTrack?: boolean | null;
		nextTrack?: boolean | null;
		preferSkipBackward?: boolean | null;
		preferSkipForward?: boolean | null;
		previousTrack?: boolean | null;
		seekToPlaybackPosition?: boolean | null;
		skipBackward?: boolean | null;
		skipForward?: boolean | null;
	}
	export interface PlayMediaControlCommandSetFormProperties {
		bookmarkTrack: FormControl<boolean | null | undefined>,
		dislikeTrack: FormControl<boolean | null | undefined>,
		likeTrack: FormControl<boolean | null | undefined>,
		nextTrack: FormControl<boolean | null | undefined>,
		preferSkipBackward: FormControl<boolean | null | undefined>,
		preferSkipForward: FormControl<boolean | null | undefined>,
		previousTrack: FormControl<boolean | null | undefined>,
		seekToPlaybackPosition: FormControl<boolean | null | undefined>,
		skipBackward: FormControl<boolean | null | undefined>,
		skipForward: FormControl<boolean | null | undefined>,
	}
	export function CreatePlayMediaControlCommandSetFormGroup() {
		return new FormGroup<PlayMediaControlCommandSetFormProperties>({
			bookmarkTrack: new FormControl<boolean | null | undefined>(undefined),
			dislikeTrack: new FormControl<boolean | null | undefined>(undefined),
			likeTrack: new FormControl<boolean | null | undefined>(undefined),
			nextTrack: new FormControl<boolean | null | undefined>(undefined),
			preferSkipBackward: new FormControl<boolean | null | undefined>(undefined),
			preferSkipForward: new FormControl<boolean | null | undefined>(undefined),
			previousTrack: new FormControl<boolean | null | undefined>(undefined),
			seekToPlaybackPosition: new FormControl<boolean | null | undefined>(undefined),
			skipBackward: new FormControl<boolean | null | undefined>(undefined),
			skipForward: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum PlayMediaControlScheme { custom = 'custom', onDemand = 'onDemand', internetRadio = 'internetRadio', liveStreaming = 'liveStreaming', audioBook = 'audioBook', podcast = 'podcast', advertisement = 'advertisement' }

	export interface PlayMediaIntent {
		class?: PlayMediaIntentClass | null;
		mediaItems?: Array<MediaItem>;
		mediaSearch?: MediaSearch;
		playShuffled?: boolean | null;
		playbackQueueLocation?: PlayMediaIntentPlaybackQueueLocation | null;
		playbackRepeatMode?: PlayMediaIntentPlaybackRepeatMode | null;
		playbackSpeed?: number | null;
		resumePlayback?: boolean | null;
	}
	export interface PlayMediaIntentFormProperties {
		class: FormControl<PlayMediaIntentClass | null | undefined>,
		playShuffled: FormControl<boolean | null | undefined>,
		playbackQueueLocation: FormControl<PlayMediaIntentPlaybackQueueLocation | null | undefined>,
		playbackRepeatMode: FormControl<PlayMediaIntentPlaybackRepeatMode | null | undefined>,
		playbackSpeed: FormControl<number | null | undefined>,
		resumePlayback: FormControl<boolean | null | undefined>,
	}
	export function CreatePlayMediaIntentFormGroup() {
		return new FormGroup<PlayMediaIntentFormProperties>({
			class: new FormControl<PlayMediaIntentClass | null | undefined>(undefined),
			playShuffled: new FormControl<boolean | null | undefined>(undefined),
			playbackQueueLocation: new FormControl<PlayMediaIntentPlaybackQueueLocation | null | undefined>(undefined),
			playbackRepeatMode: new FormControl<PlayMediaIntentPlaybackRepeatMode | null | undefined>(undefined),
			playbackSpeed: new FormControl<number | null | undefined>(undefined),
			resumePlayback: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum PlayMediaIntentClass { PlayMediaIntent = 'PlayMediaIntent' }

	export enum PlayMediaIntentPlaybackQueueLocation { unknown = 'unknown', now = 'now', next = 'next', later = 'later' }

	export enum PlayMediaIntentPlaybackRepeatMode { unknown = 'unknown', none = 'none', all = 'all', one = 'one' }

	export interface PlayMediaIntentHandlingHandleInvocationResponse {

		/** Required */
		method: PlayMediaIntentHandlingHandleInvocationResponseMethod;

		/** Required */
		result: PlayMediaIntentHandlingHandleInvocationResponseResult;
	}
	export interface PlayMediaIntentHandlingHandleInvocationResponseFormProperties {

		/** Required */
		method: FormControl<PlayMediaIntentHandlingHandleInvocationResponseMethod | null | undefined>,
	}
	export function CreatePlayMediaIntentHandlingHandleInvocationResponseFormGroup() {
		return new FormGroup<PlayMediaIntentHandlingHandleInvocationResponseFormProperties>({
			method: new FormControl<PlayMediaIntentHandlingHandleInvocationResponseMethod | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PlayMediaIntentHandlingHandleInvocationResponseMethod { 'PlayMediaIntentHandling.handle' = 'PlayMediaIntentHandling.handle' }

	export interface PlayMediaIntentHandlingHandleInvocationResponseResult {

		/** Required */
		response: PlayMediaIntentResponse;
	}
	export interface PlayMediaIntentHandlingHandleInvocationResponseResultFormProperties {
	}
	export function CreatePlayMediaIntentHandlingHandleInvocationResponseResultFormGroup() {
		return new FormGroup<PlayMediaIntentHandlingHandleInvocationResponseResultFormProperties>({
		});

	}

	export interface PlayMediaIntentResponse {

		/** Required */
		class: PlayMediaIntentResponseClass;

		/** Required */
		code: PlayMediaIntentResponseCode;
	}
	export interface PlayMediaIntentResponseFormProperties {

		/** Required */
		class: FormControl<PlayMediaIntentResponseClass | null | undefined>,

		/** Required */
		code: FormControl<PlayMediaIntentResponseCode | null | undefined>,
	}
	export function CreatePlayMediaIntentResponseFormGroup() {
		return new FormGroup<PlayMediaIntentResponseFormProperties>({
			class: new FormControl<PlayMediaIntentResponseClass | null | undefined>(undefined, [Validators.required]),
			code: new FormControl<PlayMediaIntentResponseCode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PlayMediaIntentResponseClass { PlayMediaIntentResponse = 'PlayMediaIntentResponse' }

	export enum PlayMediaIntentResponseCode { unspecified = 'unspecified', success = 'success', failure = 'failure', failureRequiringAppLaunch = 'failureRequiringAppLaunch', failureUnknownMediaType = 'failureUnknownMediaType', failureNoUnplayedContent = 'failureNoUnplayedContent', failureRestrictedContent = 'failureRestrictedContent' }

	export interface PlayMediaIntentHandlingInvocation {

		/** Required */
		method: PlayMediaIntentHandlingInvocationMethod;

		/** Required */
		params: PlayMediaIntentHandlingInvocationParams;
	}
	export interface PlayMediaIntentHandlingInvocationFormProperties {

		/** Required */
		method: FormControl<PlayMediaIntentHandlingInvocationMethod | null | undefined>,
	}
	export function CreatePlayMediaIntentHandlingInvocationFormGroup() {
		return new FormGroup<PlayMediaIntentHandlingInvocationFormProperties>({
			method: new FormControl<PlayMediaIntentHandlingInvocationMethod | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PlayMediaIntentHandlingInvocationMethod { 'PlayMediaIntentHandling.resolveMediaItems' = 'PlayMediaIntentHandling.resolveMediaItems', 'PlayMediaIntentHandling.resolvePlayShuffled' = 'PlayMediaIntentHandling.resolvePlayShuffled', 'PlayMediaIntentHandling.resolvePlaybackQueueLocation' = 'PlayMediaIntentHandling.resolvePlaybackQueueLocation', 'PlayMediaIntentHandling.resolvePlaybackRepeatMode' = 'PlayMediaIntentHandling.resolvePlaybackRepeatMode', 'PlayMediaIntentHandling.resolveResumePlayback' = 'PlayMediaIntentHandling.resolveResumePlayback', 'PlayMediaIntentHandling.handle' = 'PlayMediaIntentHandling.handle' }

	export interface PlayMediaIntentHandlingInvocationParams {

		/** Required */
		intent: PlayMediaIntent;
	}
	export interface PlayMediaIntentHandlingInvocationParamsFormProperties {
	}
	export function CreatePlayMediaIntentHandlingInvocationParamsFormGroup() {
		return new FormGroup<PlayMediaIntentHandlingInvocationParamsFormProperties>({
		});

	}

	export interface PlayMediaIntentHandlingInvocationResponse {
	}
	export interface PlayMediaIntentHandlingInvocationResponseFormProperties {
	}
	export function CreatePlayMediaIntentHandlingInvocationResponseFormGroup() {
		return new FormGroup<PlayMediaIntentHandlingInvocationResponseFormProperties>({
		});

	}

	export interface PlayMediaIntentHandlingResolveMediaItemsInvocationResponse {

		/** Required */
		method: PlayMediaIntentHandlingResolveMediaItemsInvocationResponseMethod;

		/** Required */
		result: PlayMediaIntentHandlingResolveMediaItemsInvocationResponseResult;
	}
	export interface PlayMediaIntentHandlingResolveMediaItemsInvocationResponseFormProperties {

		/** Required */
		method: FormControl<PlayMediaIntentHandlingResolveMediaItemsInvocationResponseMethod | null | undefined>,
	}
	export function CreatePlayMediaIntentHandlingResolveMediaItemsInvocationResponseFormGroup() {
		return new FormGroup<PlayMediaIntentHandlingResolveMediaItemsInvocationResponseFormProperties>({
			method: new FormControl<PlayMediaIntentHandlingResolveMediaItemsInvocationResponseMethod | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PlayMediaIntentHandlingResolveMediaItemsInvocationResponseMethod { 'PlayMediaIntentHandling.resolveMediaItems' = 'PlayMediaIntentHandling.resolveMediaItems' }

	export interface PlayMediaIntentHandlingResolveMediaItemsInvocationResponseResult {

		/** Required */
		resolutionResult: Array<PlayMediaMediaItemResolutionResult>;
	}
	export interface PlayMediaIntentHandlingResolveMediaItemsInvocationResponseResultFormProperties {
	}
	export function CreatePlayMediaIntentHandlingResolveMediaItemsInvocationResponseResultFormGroup() {
		return new FormGroup<PlayMediaIntentHandlingResolveMediaItemsInvocationResponseResultFormProperties>({
		});

	}

	export interface PlayMediaMediaItemResolutionResult {
		class?: PlayMediaMediaItemResolutionResultClass | null;
		confirmationRequired?: PlayMediaMediaItemResolutionResultConfirmationRequired;
		disambiguation?: PlayMediaMediaItemResolutionResultDisambiguation;
		success?: PlayMediaMediaItemResolutionResultSuccess;
		unsupported?: PlayMediaMediaItemResolutionResultUnsupported;
	}
	export interface PlayMediaMediaItemResolutionResultFormProperties {
		class: FormControl<PlayMediaMediaItemResolutionResultClass | null | undefined>,
	}
	export function CreatePlayMediaMediaItemResolutionResultFormGroup() {
		return new FormGroup<PlayMediaMediaItemResolutionResultFormProperties>({
			class: new FormControl<PlayMediaMediaItemResolutionResultClass | null | undefined>(undefined),
		});

	}

	export enum PlayMediaMediaItemResolutionResultClass { PlayMediaMediaItemResolutionResult = 'PlayMediaMediaItemResolutionResult' }

	export interface PlayMediaMediaItemResolutionResultConfirmationRequired {

		/** Required */
		mediaItemToConfirm: MediaItem;
	}
	export interface PlayMediaMediaItemResolutionResultConfirmationRequiredFormProperties {
	}
	export function CreatePlayMediaMediaItemResolutionResultConfirmationRequiredFormGroup() {
		return new FormGroup<PlayMediaMediaItemResolutionResultConfirmationRequiredFormProperties>({
		});

	}

	export interface PlayMediaMediaItemResolutionResultDisambiguation {

		/**
		 * Required
		 * Minimum items: 2
		 */
		mediaItemsToDisambiguate: Array<MediaItem>;
	}
	export interface PlayMediaMediaItemResolutionResultDisambiguationFormProperties {
	}
	export function CreatePlayMediaMediaItemResolutionResultDisambiguationFormGroup() {
		return new FormGroup<PlayMediaMediaItemResolutionResultDisambiguationFormProperties>({
		});

	}

	export interface PlayMediaMediaItemResolutionResultSuccess {

		/** Required */
		resolvedMediaItem: MediaItem;
	}
	export interface PlayMediaMediaItemResolutionResultSuccessFormProperties {
	}
	export function CreatePlayMediaMediaItemResolutionResultSuccessFormGroup() {
		return new FormGroup<PlayMediaMediaItemResolutionResultSuccessFormProperties>({
		});

	}

	export interface PlayMediaMediaItemResolutionResultUnsupported {
		reason?: AddMediaMediaItemResolutionResultUnsupportedReason | null;
	}
	export interface PlayMediaMediaItemResolutionResultUnsupportedFormProperties {
		reason: FormControl<AddMediaMediaItemResolutionResultUnsupportedReason | null | undefined>,
	}
	export function CreatePlayMediaMediaItemResolutionResultUnsupportedFormGroup() {
		return new FormGroup<PlayMediaMediaItemResolutionResultUnsupportedFormProperties>({
			reason: new FormControl<AddMediaMediaItemResolutionResultUnsupportedReason | null | undefined>(undefined),
		});

	}

	export interface PlayMediaIntentHandlingResolvePlayShuffledInvocationResponse {

		/** Required */
		method: PlayMediaIntentHandlingResolvePlayShuffledInvocationResponseMethod;

		/** Required */
		result: PlayMediaIntentHandlingResolvePlayShuffledInvocationResponseResult;
	}
	export interface PlayMediaIntentHandlingResolvePlayShuffledInvocationResponseFormProperties {

		/** Required */
		method: FormControl<PlayMediaIntentHandlingResolvePlayShuffledInvocationResponseMethod | null | undefined>,
	}
	export function CreatePlayMediaIntentHandlingResolvePlayShuffledInvocationResponseFormGroup() {
		return new FormGroup<PlayMediaIntentHandlingResolvePlayShuffledInvocationResponseFormProperties>({
			method: new FormControl<PlayMediaIntentHandlingResolvePlayShuffledInvocationResponseMethod | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PlayMediaIntentHandlingResolvePlayShuffledInvocationResponseMethod { 'PlayMediaIntentHandling.resolvePlayShuffled' = 'PlayMediaIntentHandling.resolvePlayShuffled' }

	export interface PlayMediaIntentHandlingResolvePlayShuffledInvocationResponseResult {

		/** Required */
		resolutionResult: BooleanResolutionResult;
	}
	export interface PlayMediaIntentHandlingResolvePlayShuffledInvocationResponseResultFormProperties {
	}
	export function CreatePlayMediaIntentHandlingResolvePlayShuffledInvocationResponseResultFormGroup() {
		return new FormGroup<PlayMediaIntentHandlingResolvePlayShuffledInvocationResponseResultFormProperties>({
		});

	}

	export interface PlayMediaIntentHandlingResolvePlaybackQueueLocationInvocationResponse {

		/** Required */
		method: PlayMediaIntentHandlingResolvePlaybackQueueLocationInvocationResponseMethod;

		/** Required */
		result: PlayMediaIntentHandlingResolvePlaybackQueueLocationInvocationResponseResult;
	}
	export interface PlayMediaIntentHandlingResolvePlaybackQueueLocationInvocationResponseFormProperties {

		/** Required */
		method: FormControl<PlayMediaIntentHandlingResolvePlaybackQueueLocationInvocationResponseMethod | null | undefined>,
	}
	export function CreatePlayMediaIntentHandlingResolvePlaybackQueueLocationInvocationResponseFormGroup() {
		return new FormGroup<PlayMediaIntentHandlingResolvePlaybackQueueLocationInvocationResponseFormProperties>({
			method: new FormControl<PlayMediaIntentHandlingResolvePlaybackQueueLocationInvocationResponseMethod | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PlayMediaIntentHandlingResolvePlaybackQueueLocationInvocationResponseMethod { 'PlayMediaIntentHandling.resolvePlaybackQueueLocation' = 'PlayMediaIntentHandling.resolvePlaybackQueueLocation' }

	export interface PlayMediaIntentHandlingResolvePlaybackQueueLocationInvocationResponseResult {

		/** Required */
		resolutionResult: PlaybackQueueLocationResolutionResult;
	}
	export interface PlayMediaIntentHandlingResolvePlaybackQueueLocationInvocationResponseResultFormProperties {
	}
	export function CreatePlayMediaIntentHandlingResolvePlaybackQueueLocationInvocationResponseResultFormGroup() {
		return new FormGroup<PlayMediaIntentHandlingResolvePlaybackQueueLocationInvocationResponseResultFormProperties>({
		});

	}

	export interface PlaybackQueueLocationResolutionResult {
		class?: PlaybackQueueLocationResolutionResultClass | null;
		confirmationRequired?: PlaybackQueueLocationResolutionResultConfirmationRequired;
		success?: PlaybackQueueLocationResolutionResultSuccess;
	}
	export interface PlaybackQueueLocationResolutionResultFormProperties {
		class: FormControl<PlaybackQueueLocationResolutionResultClass | null | undefined>,
	}
	export function CreatePlaybackQueueLocationResolutionResultFormGroup() {
		return new FormGroup<PlaybackQueueLocationResolutionResultFormProperties>({
			class: new FormControl<PlaybackQueueLocationResolutionResultClass | null | undefined>(undefined),
		});

	}

	export enum PlaybackQueueLocationResolutionResultClass { PlaybackQueueLocationResolutionResult = 'PlaybackQueueLocationResolutionResult' }

	export interface PlaybackQueueLocationResolutionResultConfirmationRequired {

		/** Required */
		playbackQueueLocationToConfirm: PlayMediaIntentPlaybackQueueLocation;
	}
	export interface PlaybackQueueLocationResolutionResultConfirmationRequiredFormProperties {

		/** Required */
		playbackQueueLocationToConfirm: FormControl<PlayMediaIntentPlaybackQueueLocation | null | undefined>,
	}
	export function CreatePlaybackQueueLocationResolutionResultConfirmationRequiredFormGroup() {
		return new FormGroup<PlaybackQueueLocationResolutionResultConfirmationRequiredFormProperties>({
			playbackQueueLocationToConfirm: new FormControl<PlayMediaIntentPlaybackQueueLocation | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PlaybackQueueLocationResolutionResultSuccess {

		/** Required */
		resolvedPlaybackQueueLocation: PlayMediaIntentPlaybackQueueLocation;
	}
	export interface PlaybackQueueLocationResolutionResultSuccessFormProperties {

		/** Required */
		resolvedPlaybackQueueLocation: FormControl<PlayMediaIntentPlaybackQueueLocation | null | undefined>,
	}
	export function CreatePlaybackQueueLocationResolutionResultSuccessFormGroup() {
		return new FormGroup<PlaybackQueueLocationResolutionResultSuccessFormProperties>({
			resolvedPlaybackQueueLocation: new FormControl<PlayMediaIntentPlaybackQueueLocation | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponse {

		/** Required */
		method: PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponseMethod;

		/** Required */
		result: PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponseResult;
	}
	export interface PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponseFormProperties {

		/** Required */
		method: FormControl<PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponseMethod | null | undefined>,
	}
	export function CreatePlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponseFormGroup() {
		return new FormGroup<PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponseFormProperties>({
			method: new FormControl<PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponseMethod | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponseMethod { 'PlayMediaIntentHandling.resolvePlaybackRepeatMode' = 'PlayMediaIntentHandling.resolvePlaybackRepeatMode' }

	export interface PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponseResult {

		/** Required */
		resolutionResult: PlaybackRepeatModeResolutionResult;
	}
	export interface PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponseResultFormProperties {
	}
	export function CreatePlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponseResultFormGroup() {
		return new FormGroup<PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponseResultFormProperties>({
		});

	}

	export interface PlaybackRepeatModeResolutionResult {
		class?: PlaybackRepeatModeResolutionResultClass | null;
		confirmationRequired?: PlaybackRepeatModeResolutionResultConfirmationRequired;
		success?: PlaybackRepeatModeResolutionResultSuccess;
	}
	export interface PlaybackRepeatModeResolutionResultFormProperties {
		class: FormControl<PlaybackRepeatModeResolutionResultClass | null | undefined>,
	}
	export function CreatePlaybackRepeatModeResolutionResultFormGroup() {
		return new FormGroup<PlaybackRepeatModeResolutionResultFormProperties>({
			class: new FormControl<PlaybackRepeatModeResolutionResultClass | null | undefined>(undefined),
		});

	}

	export enum PlaybackRepeatModeResolutionResultClass { PlaybackRepeatModeResolutionResult = 'PlaybackRepeatModeResolutionResult' }

	export interface PlaybackRepeatModeResolutionResultConfirmationRequired {

		/** Required */
		playbackRepeatModeToConfirm: PlayMediaIntentPlaybackRepeatMode;
	}
	export interface PlaybackRepeatModeResolutionResultConfirmationRequiredFormProperties {

		/** Required */
		playbackRepeatModeToConfirm: FormControl<PlayMediaIntentPlaybackRepeatMode | null | undefined>,
	}
	export function CreatePlaybackRepeatModeResolutionResultConfirmationRequiredFormGroup() {
		return new FormGroup<PlaybackRepeatModeResolutionResultConfirmationRequiredFormProperties>({
			playbackRepeatModeToConfirm: new FormControl<PlayMediaIntentPlaybackRepeatMode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PlaybackRepeatModeResolutionResultSuccess {

		/** Required */
		resolvedPlaybackRepeatMode: PlayMediaIntentPlaybackRepeatMode;
	}
	export interface PlaybackRepeatModeResolutionResultSuccessFormProperties {

		/** Required */
		resolvedPlaybackRepeatMode: FormControl<PlayMediaIntentPlaybackRepeatMode | null | undefined>,
	}
	export function CreatePlaybackRepeatModeResolutionResultSuccessFormGroup() {
		return new FormGroup<PlaybackRepeatModeResolutionResultSuccessFormProperties>({
			resolvedPlaybackRepeatMode: new FormControl<PlayMediaIntentPlaybackRepeatMode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PlayMediaIntentHandlingResolveResumePlaybackInvocationResponse {

		/** Required */
		method: PlayMediaIntentHandlingResolveResumePlaybackInvocationResponseMethod;

		/** Required */
		result: PlayMediaIntentHandlingResolveResumePlaybackInvocationResponseResult;
	}
	export interface PlayMediaIntentHandlingResolveResumePlaybackInvocationResponseFormProperties {

		/** Required */
		method: FormControl<PlayMediaIntentHandlingResolveResumePlaybackInvocationResponseMethod | null | undefined>,
	}
	export function CreatePlayMediaIntentHandlingResolveResumePlaybackInvocationResponseFormGroup() {
		return new FormGroup<PlayMediaIntentHandlingResolveResumePlaybackInvocationResponseFormProperties>({
			method: new FormControl<PlayMediaIntentHandlingResolveResumePlaybackInvocationResponseMethod | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PlayMediaIntentHandlingResolveResumePlaybackInvocationResponseMethod { 'PlayMediaIntentHandling.resolveResumePlayback' = 'PlayMediaIntentHandling.resolveResumePlayback' }

	export interface PlayMediaIntentHandlingResolveResumePlaybackInvocationResponseResult {

		/** Required */
		resolutionResult: BooleanResolutionResult;
	}
	export interface PlayMediaIntentHandlingResolveResumePlaybackInvocationResponseResultFormProperties {
	}
	export function CreatePlayMediaIntentHandlingResolveResumePlaybackInvocationResponseResultFormGroup() {
		return new FormGroup<PlayMediaIntentHandlingResolveResumePlaybackInvocationResponseResultFormProperties>({
		});

	}

	export enum PlayMediaMediaItemUnsupportedReason { loginRequired = 'loginRequired', subscriptionRequired = 'subscriptionRequired', unsupportedMediaType = 'unsupportedMediaType', explicitContentSettings = 'explicitContentSettings', restrictedContent = 'restrictedContent', regionRestriction = 'regionRestriction' }

	export interface PlayMediaRequest {

		/** Required */
		constraints: Constraints;

		/** Required */
		userActivity: UserActivity;

		/** Required */
		version: string;
	}
	export interface PlayMediaRequestFormProperties {

		/** Required */
		version: FormControl<string | null | undefined>,
	}
	export function CreatePlayMediaRequestFormGroup() {
		return new FormGroup<PlayMediaRequestFormProperties>({
			version: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[0-9]+\.[0-9]+\.[0-9]+')]),
		});

	}

	export enum PlaybackQueueLocation { unknown = 'unknown', now = 'now', next = 'next', later = 'later' }

	export enum PlaybackRepeatMode { unknown = 'unknown', none = 'none', all = 'all', one = 'one' }

	export interface ProtocolException {
		code?: number | null;
		methodIndex?: number | null;
		methodName?: string | null;

		/** Required */
		reason: ProtocolExceptionReason;
		retryWithDelay?: number | null;

		/** Maximum items: 64 */
		trace?: Array<string>;
	}
	export interface ProtocolExceptionFormProperties {
		code: FormControl<number | null | undefined>,
		methodIndex: FormControl<number | null | undefined>,
		methodName: FormControl<string | null | undefined>,

		/** Required */
		reason: FormControl<ProtocolExceptionReason | null | undefined>,
		retryWithDelay: FormControl<number | null | undefined>,
	}
	export function CreateProtocolExceptionFormGroup() {
		return new FormGroup<ProtocolExceptionFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			methodIndex: new FormControl<number | null | undefined>(undefined),
			methodName: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<ProtocolExceptionReason | null | undefined>(undefined, [Validators.required]),
			retryWithDelay: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ProtocolExceptionReason { unsupported = 'unsupported', unauthorized = 'unauthorized', unexpected = 'unexpected', invalid = 'invalid', unparseable = 'unparseable', deprecated = 'deprecated', internal = 'internal', complex = 'complex', busy = 'busy' }

	export interface ProtocolExceptionInvocationResponse {

		/** Required */
		exception: ProtocolException;

		/** Required */
		method: ProtocolExceptionInvocationResponseMethod;
	}
	export interface ProtocolExceptionInvocationResponseFormProperties {

		/** Required */
		method: FormControl<ProtocolExceptionInvocationResponseMethod | null | undefined>,
	}
	export function CreateProtocolExceptionInvocationResponseFormGroup() {
		return new FormGroup<ProtocolExceptionInvocationResponseFormProperties>({
			method: new FormControl<ProtocolExceptionInvocationResponseMethod | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ProtocolExceptionInvocationResponseMethod { ProtocolException = 'ProtocolException' }

	export interface Queue {

		/**
		 * Required
		 * Maximum items: 1000
		 */
		content: Array<Content>;
		contentItemsCount?: number | null;
		controls?: QueueControlMapping;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		identifier: string;
		insertPointer?: QueueInsertPointer;

		/**
		 * Max length: 2000
		 * Min length: 1
		 */
		nextContentUrl?: string | null;
		playPointer?: QueuePlayPointer;
		prerollSeconds?: number | null;

		/**
		 * Max length: 2000
		 * Min length: 1
		 */
		previousContentUrl?: string | null;
		skipsRemaining?: number | null;

		/**
		 * Required
		 * Max length: 25
		 */
		version: string;
	}
	export interface QueueFormProperties {
		contentItemsCount: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		identifier: FormControl<string | null | undefined>,

		/**
		 * Max length: 2000
		 * Min length: 1
		 */
		nextContentUrl: FormControl<string | null | undefined>,
		prerollSeconds: FormControl<number | null | undefined>,

		/**
		 * Max length: 2000
		 * Min length: 1
		 */
		previousContentUrl: FormControl<string | null | undefined>,
		skipsRemaining: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 25
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateQueueFormGroup() {
		return new FormGroup<QueueFormProperties>({
			contentItemsCount: new FormControl<number | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
			nextContentUrl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2000)]),
			prerollSeconds: new FormControl<number | null | undefined>(undefined),
			previousContentUrl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2000)]),
			skipsRemaining: new FormControl<number | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(25), Validators.pattern('[0-9]+\.[0-9]+\.[0-9]+')]),
		});

	}

	export interface QueueControlMapping {

		/** Required */
		default: PlayMediaControl;
	}
	export interface QueueControlMappingFormProperties {
	}
	export function CreateQueueControlMappingFormGroup() {
		return new FormGroup<QueueControlMappingFormProperties>({
		});

	}

	export interface QueuePlayPointer {

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		contentIdentifier?: string | null;
		offsetInMillis?: number | null;
	}
	export interface QueuePlayPointerFormProperties {

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		contentIdentifier: FormControl<string | null | undefined>,
		offsetInMillis: FormControl<number | null | undefined>,
	}
	export function CreateQueuePlayPointerFormGroup() {
		return new FormGroup<QueuePlayPointerFormProperties>({
			contentIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000)]),
			offsetInMillis: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum QueueActivityReportEvent { 'local.playing.elapsed' = 'local.playing.elapsed', 'local.playing.paused' = 'local.playing.paused', 'local.playing.continued' = 'local.playing.continued', 'local.playing.scrub' = 'local.playing.scrub', 'local.playing.fastForward' = 'local.playing.fastForward', 'local.playing.fastRewind' = 'local.playing.fastRewind', 'local.playing.transitioned.naturally' = 'local.playing.transitioned.naturally', 'local.playing.transitioned.skip_next' = 'local.playing.transitioned.skip_next', 'local.playing.transitioned.skip_previous' = 'local.playing.transitioned.skip_previous', 'local.playing.transitioned.queue_replaced' = 'local.playing.transitioned.queue_replaced', 'local.stopped.naturally' = 'local.stopped.naturally', 'local.stopped.skip_past_end' = 'local.stopped.skip_past_end', 'local.command.like' = 'local.command.like', 'local.command.dislike' = 'local.command.dislike', 'local.command.bookmark' = 'local.command.bookmark' }

	export interface QueueInsertPointer {

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		afterIdentifier?: string | null;
		replace?: boolean | null;
	}
	export interface QueueInsertPointerFormProperties {

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		afterIdentifier: FormControl<string | null | undefined>,
		replace: FormControl<boolean | null | undefined>,
	}
	export function CreateQueueInsertPointerFormGroup() {
		return new FormGroup<QueueInsertPointerFormProperties>({
			afterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000)]),
			replace: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateActivityRequest {
		constraints?: Constraints;
		nowPlaying?: PlayerContext;
		previouslyPlaying?: PlayerContext;

		/** Required */
		report: QueueActivityReportEvent;

		/** Required */
		timestamp: Date;

		/** Required */
		userActivity: UserActivity;

		/** Required */
		version: string;
	}
	export interface UpdateActivityRequestFormProperties {

		/** Required */
		report: FormControl<QueueActivityReportEvent | null | undefined>,

		/** Required */
		timestamp: FormControl<Date | null | undefined>,

		/** Required */
		version: FormControl<string | null | undefined>,
	}
	export function CreateUpdateActivityRequestFormGroup() {
		return new FormGroup<UpdateActivityRequestFormProperties>({
			report: new FormControl<QueueActivityReportEvent | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[0-9]+\.[0-9]+\.[0-9]+')]),
		});

	}

	export interface UpdateActivityResponse {
		queue?: Queue;
		userActivity?: UserActivity;
	}
	export interface UpdateActivityResponseFormProperties {
	}
	export function CreateUpdateActivityResponseFormGroup() {
		return new FormGroup<UpdateActivityResponseFormProperties>({
		});

	}

	export interface UpdateMediaAffinityIntent {
		affinityType?: MediaAffinityType | null;

		/** Required */
		class: UpdateMediaAffinityIntentClass;
		mediaItems?: Array<MediaItem>;
		mediaSearch?: MediaSearch;
	}
	export interface UpdateMediaAffinityIntentFormProperties {
		affinityType: FormControl<MediaAffinityType | null | undefined>,

		/** Required */
		class: FormControl<UpdateMediaAffinityIntentClass | null | undefined>,
	}
	export function CreateUpdateMediaAffinityIntentFormGroup() {
		return new FormGroup<UpdateMediaAffinityIntentFormProperties>({
			affinityType: new FormControl<MediaAffinityType | null | undefined>(undefined),
			class: new FormControl<UpdateMediaAffinityIntentClass | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UpdateMediaAffinityIntentClass { UpdateMediaAffinityIntent = 'UpdateMediaAffinityIntent' }

	export interface UpdateMediaAffinityIntentHandlingHandleInvocationResponse {

		/** Required */
		method: UpdateMediaAffinityIntentHandlingHandleInvocationResponseMethod;

		/** Required */
		result: UpdateMediaAffinityIntentHandlingHandleInvocationResponseResult;
	}
	export interface UpdateMediaAffinityIntentHandlingHandleInvocationResponseFormProperties {

		/** Required */
		method: FormControl<UpdateMediaAffinityIntentHandlingHandleInvocationResponseMethod | null | undefined>,
	}
	export function CreateUpdateMediaAffinityIntentHandlingHandleInvocationResponseFormGroup() {
		return new FormGroup<UpdateMediaAffinityIntentHandlingHandleInvocationResponseFormProperties>({
			method: new FormControl<UpdateMediaAffinityIntentHandlingHandleInvocationResponseMethod | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UpdateMediaAffinityIntentHandlingHandleInvocationResponseMethod { 'UpdateMediaAffinityIntentHandling.handle' = 'UpdateMediaAffinityIntentHandling.handle' }

	export interface UpdateMediaAffinityIntentHandlingHandleInvocationResponseResult {

		/** Required */
		response: UpdateMediaAffinityIntentResponse;
	}
	export interface UpdateMediaAffinityIntentHandlingHandleInvocationResponseResultFormProperties {
	}
	export function CreateUpdateMediaAffinityIntentHandlingHandleInvocationResponseResultFormGroup() {
		return new FormGroup<UpdateMediaAffinityIntentHandlingHandleInvocationResponseResultFormProperties>({
		});

	}

	export interface UpdateMediaAffinityIntentResponse {

		/** Required */
		class: UpdateMediaAffinityIntentResponseClass;

		/** Required */
		code: UpdateMediaAffinityIntentResponseCode;
	}
	export interface UpdateMediaAffinityIntentResponseFormProperties {

		/** Required */
		class: FormControl<UpdateMediaAffinityIntentResponseClass | null | undefined>,

		/** Required */
		code: FormControl<UpdateMediaAffinityIntentResponseCode | null | undefined>,
	}
	export function CreateUpdateMediaAffinityIntentResponseFormGroup() {
		return new FormGroup<UpdateMediaAffinityIntentResponseFormProperties>({
			class: new FormControl<UpdateMediaAffinityIntentResponseClass | null | undefined>(undefined, [Validators.required]),
			code: new FormControl<UpdateMediaAffinityIntentResponseCode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UpdateMediaAffinityIntentResponseClass { UpdateMediaAffinityIntentResponse = 'UpdateMediaAffinityIntentResponse' }

	export enum UpdateMediaAffinityIntentResponseCode { unspecified = 'unspecified', inProgress = 'inProgress', success = 'success', failure = 'failure', failureRequiringAppLaunch = 'failureRequiringAppLaunch' }

	export interface UpdateMediaAffinityIntentHandlingInvocation {

		/** Required */
		method: UpdateMediaAffinityIntentHandlingInvocationMethod;

		/** Required */
		params: UpdateMediaAffinityIntentHandlingInvocationParams;
	}
	export interface UpdateMediaAffinityIntentHandlingInvocationFormProperties {

		/** Required */
		method: FormControl<UpdateMediaAffinityIntentHandlingInvocationMethod | null | undefined>,
	}
	export function CreateUpdateMediaAffinityIntentHandlingInvocationFormGroup() {
		return new FormGroup<UpdateMediaAffinityIntentHandlingInvocationFormProperties>({
			method: new FormControl<UpdateMediaAffinityIntentHandlingInvocationMethod | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UpdateMediaAffinityIntentHandlingInvocationMethod { 'UpdateMediaAffinityIntentHandling.resolveMediaItems' = 'UpdateMediaAffinityIntentHandling.resolveMediaItems', 'UpdateMediaAffinityIntentHandling.resolveAffinityType' = 'UpdateMediaAffinityIntentHandling.resolveAffinityType', 'UpdateMediaAffinityIntentHandling.handle' = 'UpdateMediaAffinityIntentHandling.handle' }

	export interface UpdateMediaAffinityIntentHandlingInvocationParams {

		/** Required */
		intent: UpdateMediaAffinityIntent;
	}
	export interface UpdateMediaAffinityIntentHandlingInvocationParamsFormProperties {
	}
	export function CreateUpdateMediaAffinityIntentHandlingInvocationParamsFormGroup() {
		return new FormGroup<UpdateMediaAffinityIntentHandlingInvocationParamsFormProperties>({
		});

	}

	export interface UpdateMediaAffinityIntentHandlingInvocationResponse {
	}
	export interface UpdateMediaAffinityIntentHandlingInvocationResponseFormProperties {
	}
	export function CreateUpdateMediaAffinityIntentHandlingInvocationResponseFormGroup() {
		return new FormGroup<UpdateMediaAffinityIntentHandlingInvocationResponseFormProperties>({
		});

	}

	export interface UpdateMediaAffinityIntentHandlingResolveAffinityTypeInvocationResponse {

		/** Required */
		method: UpdateMediaAffinityIntentHandlingResolveAffinityTypeInvocationResponseMethod;

		/** Required */
		result: UpdateMediaAffinityIntentHandlingResolveAffinityTypeInvocationResponseResult;
	}
	export interface UpdateMediaAffinityIntentHandlingResolveAffinityTypeInvocationResponseFormProperties {

		/** Required */
		method: FormControl<UpdateMediaAffinityIntentHandlingResolveAffinityTypeInvocationResponseMethod | null | undefined>,
	}
	export function CreateUpdateMediaAffinityIntentHandlingResolveAffinityTypeInvocationResponseFormGroup() {
		return new FormGroup<UpdateMediaAffinityIntentHandlingResolveAffinityTypeInvocationResponseFormProperties>({
			method: new FormControl<UpdateMediaAffinityIntentHandlingResolveAffinityTypeInvocationResponseMethod | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UpdateMediaAffinityIntentHandlingResolveAffinityTypeInvocationResponseMethod { 'UpdateMediaAffinityIntentHandling.resolveAffinityType' = 'UpdateMediaAffinityIntentHandling.resolveAffinityType' }

	export interface UpdateMediaAffinityIntentHandlingResolveAffinityTypeInvocationResponseResult {

		/** Required */
		resolutionResult: MediaAffinityTypeResolutionResult;
	}
	export interface UpdateMediaAffinityIntentHandlingResolveAffinityTypeInvocationResponseResultFormProperties {
	}
	export function CreateUpdateMediaAffinityIntentHandlingResolveAffinityTypeInvocationResponseResultFormGroup() {
		return new FormGroup<UpdateMediaAffinityIntentHandlingResolveAffinityTypeInvocationResponseResultFormProperties>({
		});

	}

	export interface UpdateMediaAffinityIntentHandlingResolveMediaItemsInvocationResponse {

		/** Required */
		method: UpdateMediaAffinityIntentHandlingResolveMediaItemsInvocationResponseMethod;

		/** Required */
		result: UpdateMediaAffinityIntentHandlingResolveMediaItemsInvocationResponseResult;
	}
	export interface UpdateMediaAffinityIntentHandlingResolveMediaItemsInvocationResponseFormProperties {

		/** Required */
		method: FormControl<UpdateMediaAffinityIntentHandlingResolveMediaItemsInvocationResponseMethod | null | undefined>,
	}
	export function CreateUpdateMediaAffinityIntentHandlingResolveMediaItemsInvocationResponseFormGroup() {
		return new FormGroup<UpdateMediaAffinityIntentHandlingResolveMediaItemsInvocationResponseFormProperties>({
			method: new FormControl<UpdateMediaAffinityIntentHandlingResolveMediaItemsInvocationResponseMethod | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UpdateMediaAffinityIntentHandlingResolveMediaItemsInvocationResponseMethod { 'UpdateMediaAffinityIntentHandling.resolveMediaItems' = 'UpdateMediaAffinityIntentHandling.resolveMediaItems' }

	export interface UpdateMediaAffinityIntentHandlingResolveMediaItemsInvocationResponseResult {

		/** Required */
		resolutionResult: Array<UpdateMediaAffinityMediaItemResolutionResult>;
	}
	export interface UpdateMediaAffinityIntentHandlingResolveMediaItemsInvocationResponseResultFormProperties {
	}
	export function CreateUpdateMediaAffinityIntentHandlingResolveMediaItemsInvocationResponseResultFormGroup() {
		return new FormGroup<UpdateMediaAffinityIntentHandlingResolveMediaItemsInvocationResponseResultFormProperties>({
		});

	}

	export interface UpdateMediaAffinityMediaItemResolutionResult {
		class?: UpdateMediaAffinityMediaItemResolutionResultClass | null;
		confirmationRequired?: UpdateMediaAffinityMediaItemResolutionResultConfirmationRequired;
		disambiguation?: UpdateMediaAffinityMediaItemResolutionResultDisambiguation;
		success?: UpdateMediaAffinityMediaItemResolutionResultSuccess;
		unsupported?: UpdateMediaAffinityMediaItemResolutionResultUnsupported;
	}
	export interface UpdateMediaAffinityMediaItemResolutionResultFormProperties {
		class: FormControl<UpdateMediaAffinityMediaItemResolutionResultClass | null | undefined>,
	}
	export function CreateUpdateMediaAffinityMediaItemResolutionResultFormGroup() {
		return new FormGroup<UpdateMediaAffinityMediaItemResolutionResultFormProperties>({
			class: new FormControl<UpdateMediaAffinityMediaItemResolutionResultClass | null | undefined>(undefined),
		});

	}

	export enum UpdateMediaAffinityMediaItemResolutionResultClass { UpdateMediaAffinityMediaItemResolutionResult = 'UpdateMediaAffinityMediaItemResolutionResult' }

	export interface UpdateMediaAffinityMediaItemResolutionResultConfirmationRequired {

		/** Required */
		mediaItemToConfirm: MediaItem;
	}
	export interface UpdateMediaAffinityMediaItemResolutionResultConfirmationRequiredFormProperties {
	}
	export function CreateUpdateMediaAffinityMediaItemResolutionResultConfirmationRequiredFormGroup() {
		return new FormGroup<UpdateMediaAffinityMediaItemResolutionResultConfirmationRequiredFormProperties>({
		});

	}

	export interface UpdateMediaAffinityMediaItemResolutionResultDisambiguation {

		/**
		 * Required
		 * Minimum items: 2
		 */
		mediaItemsToDisambiguate: Array<MediaItem>;
	}
	export interface UpdateMediaAffinityMediaItemResolutionResultDisambiguationFormProperties {
	}
	export function CreateUpdateMediaAffinityMediaItemResolutionResultDisambiguationFormGroup() {
		return new FormGroup<UpdateMediaAffinityMediaItemResolutionResultDisambiguationFormProperties>({
		});

	}

	export interface UpdateMediaAffinityMediaItemResolutionResultSuccess {

		/** Required */
		resolvedMediaItem: MediaItem;
	}
	export interface UpdateMediaAffinityMediaItemResolutionResultSuccessFormProperties {
	}
	export function CreateUpdateMediaAffinityMediaItemResolutionResultSuccessFormGroup() {
		return new FormGroup<UpdateMediaAffinityMediaItemResolutionResultSuccessFormProperties>({
		});

	}

	export interface UpdateMediaAffinityMediaItemResolutionResultUnsupported {
		reason?: UpdateMediaAffinityMediaItemResolutionResultUnsupportedReason | null;
	}
	export interface UpdateMediaAffinityMediaItemResolutionResultUnsupportedFormProperties {
		reason: FormControl<UpdateMediaAffinityMediaItemResolutionResultUnsupportedReason | null | undefined>,
	}
	export function CreateUpdateMediaAffinityMediaItemResolutionResultUnsupportedFormGroup() {
		return new FormGroup<UpdateMediaAffinityMediaItemResolutionResultUnsupportedFormProperties>({
			reason: new FormControl<UpdateMediaAffinityMediaItemResolutionResultUnsupportedReason | null | undefined>(undefined),
		});

	}

	export enum UpdateMediaAffinityMediaItemResolutionResultUnsupportedReason { loginRequired = 'loginRequired', subscriptionRequired = 'subscriptionRequired', unsupportedMediaType = 'unsupportedMediaType', explicitContentSettings = 'explicitContentSettings' }

	export enum UpdateMediaAffinityMediaItemUnsupportedReason { loginRequired = 'loginRequired', subscriptionRequired = 'subscriptionRequired', unsupportedMediaType = 'unsupportedMediaType', explicitContentSettings = 'explicitContentSettings' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Configuration Resource
		 * Get configuration
		 * @return {void} 
		 */
		ExtensionConfiguration(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'configuration', { observe: 'response', responseType: 'text' });
		}

		/**
		 * addMedia
		 * Post intent/addMedia
		 * @return {Array<AddMediaIntentHandlingInvocationResponse>} 
		 */
		AddMediaIntentHandling(requestBody: Array<AddMediaIntentHandlingInvocation>): Observable<Array<AddMediaIntentHandlingInvocationResponse>> {
			return this.http.post<Array<AddMediaIntentHandlingInvocationResponse>>(this.baseUri + 'intent/addMedia', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * playMedia
		 * Post intent/playMedia
		 * @return {Array<PlayMediaIntentHandlingInvocationResponse>} 
		 */
		PlayMediaIntentHandling(requestBody: Array<PlayMediaIntentHandlingInvocation>): Observable<Array<PlayMediaIntentHandlingInvocationResponse>> {
			return this.http.post<Array<PlayMediaIntentHandlingInvocationResponse>>(this.baseUri + 'intent/playMedia', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * updateMediaAffinity
		 * Post intent/updateMediaAffinity
		 * @return {Array<UpdateMediaAffinityIntentHandlingInvocationResponse>} 
		 */
		UpdateMediaAffinityIntentHandling(requestBody: Array<UpdateMediaAffinityIntentHandlingInvocation>): Observable<Array<UpdateMediaAffinityIntentHandlingInvocationResponse>> {
			return this.http.post<Array<UpdateMediaAffinityIntentHandlingInvocationResponse>>(this.baseUri + 'intent/updateMediaAffinity', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * playMedia
		 * Post queues/playMedia
		 * @return {Queue} 
		 */
		PlayMediaOnQueue(requestBody: PlayMediaRequest): Observable<Queue> {
			return this.http.post<Queue>(this.baseUri + 'queues/playMedia', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * updateActivity
		 * Post queues/updateActivity
		 * @return {UpdateActivityResponse} 
		 */
		UpdateActivityOnQueue(requestBody: UpdateActivityRequest): Observable<UpdateActivityResponse> {
			return this.http.post<UpdateActivityResponse>(this.baseUri + 'queues/updateActivity', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

